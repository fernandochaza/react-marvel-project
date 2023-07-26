import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAtom, useSetAtom } from 'jotai'
import {
  charactersResults,
  favoriteCharacters,
  handleApiError,
  isSearchHistoryDisplayed,
  searchHistory
} from '../../atoms'

import useFetchCharacters from '../../hooks/useFetchCharacters'
import useFetchByUrl from '../../hooks/useFetchByUrl'
import { fetchCharacter } from '../../Utils/fetchers/fetchCharacter'
import getRandomCharacter from '../../Utils/getRandomCharacter'

import { SearchHistoryContainer, SearchHistoryItem } from '../SearchHistory'
import { HistoryItem } from '../SearchHistory/HistoryItem'

import {
  Input,
  InputContainer,
  SearchIcon,
  StyledForm,
  SubmitButton
} from './styles'
import { FavoriteCardsButton } from './FavoriteCardsButton'
import useOnClickOutside from '../../hooks/useOnClickOutside'

export const SearchForm = () => {
  const [displaySearchHistory, setDisplaySearchHistory] = useAtom(
    isSearchHistoryDisplayed
  )
  const [currentSearchHistory, setCurrentSearchHistory] = useAtom(searchHistory)
  const setApiError = useSetAtom(handleApiError)
  const setLocalFavorites = useSetAtom(favoriteCharacters)
  const setCardsData = useSetAtom(charactersResults)
  const [handleInputChange, handleEnterKey, inputString] = useFetchCharacters()
  const [fetchUrlCharacter] = useFetchByUrl()
  const [searchParams] = useSearchParams()
  const inputRef = useRef(null)
  const [searchHistoryRef, setSearchHistoryRef] = useState(null)

  const apiKey = useMemo(() => import.meta.env.VITE_API_KEY, [])
  const charactersEndpoint = useMemo(
    () => import.meta.env.VITE_API_CHARACTERS_ENDPOINT,
    []
  )

  const handleFetchRandom = useCallback(async () => {
    const query = getRandomCharacter()
    try {
      const results = await fetchCharacter({
        api: charactersEndpoint,
        apiKey,
        query,
        limit: 30
      })
      setApiError(null)
      setCardsData(results.results)
    } catch (error) {
      setApiError('Error fetching data: ' + error.message)
    }
  })

  useEffect(() => {
    const characterParam = searchParams.get('character')
    if (characterParam) {
      fetchUrlCharacter()
    } else {
      handleFetchRandom()
    }
  }, [])

  const displayFavoriteCards = useCallback(() => {
    const storedFavorites = localStorage.getItem('favoriteCharacters')
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : null
    if (favorites) {
      setLocalFavorites(favorites)
    }
  })

  useEffect(() => {
    displayFavoriteCards()
  }, [])

  const handleDisplaySearchHistory = useCallback(() => {
    const storedSearchHistory = localStorage.getItem('searchHistory')
    const searchHistory = storedSearchHistory
      ? JSON.parse(storedSearchHistory)
      : null
    setCurrentSearchHistory(searchHistory)
    setDisplaySearchHistory(true)
  }, [])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputString])

  const handleClickOutside = useCallback(() => {
    setDisplaySearchHistory(false)
  }, [])

  useOnClickOutside(searchHistoryRef, handleClickOutside)

  return (
    <>
      <StyledForm
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <InputContainer>
          <Input
            type='text'
            placeholder='Search...'
            autoComplete='on'
            value={inputString}
            aria-label='Search a Marvel character'
            onChange={(event) => handleInputChange(event.target.value)}
            onKeyDown={handleEnterKey}
            onClick={handleDisplaySearchHistory}
            ref={inputRef}
          />
          <SubmitButton type='submit'>
            <SearchIcon aria-label='Search Button' />
          </SubmitButton>
        </InputContainer>
        {!inputString && currentSearchHistory && displaySearchHistory ? (
          <SearchHistoryContainer ref={setSearchHistoryRef}>
            {currentSearchHistory.map((searchItem) => {
              return (
                <SearchHistoryItem key={searchItem}>
                  <HistoryItem
                    aria-label={`Search results for: ${searchItem}`}
                    text={searchItem}
                  />
                </SearchHistoryItem>
              )
            })}
          </SearchHistoryContainer>
        ) : null}
        <FavoriteCardsButton />
      </StyledForm>
    </>
  )
}
