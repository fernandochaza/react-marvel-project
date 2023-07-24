import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useAtom, useSetAtom } from 'jotai'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'

import {
  charactersResults,
  favoriteCharacters,
  handleApiError,
  isSearchHistoryDisplayed,
  searchHistory
} from '../atoms'
import useFetchCharacters from '../hooks/useFetchCharacters'
import useFetchByUrl from '../hooks/useFetchByUrl'
import { fetchCharacter } from '../Utils/fetchers/fetchCharacter'
import getRandomCharacter from '../Utils/getRandomCharacter'

import {
  SearchHistoryContainer,
  SearchHistoryItem
} from './SearchHistory'
import { HistoryItem } from './SearchHistory/HistoryItem'
import { FavoriteCardsButton } from './FavoriteCardsButton'
import { useSearchParams } from 'react-router-dom'

const StyledForm = styled.form`
  width: 50%;
  min-width: 400px;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;

  &::placeholder {
    color: rgb(214, 211, 211);
  }
`

const InputContainer = styled.div`
  display: flex;
  margin: 0 20px 0 0;
  border: 1px solid rgba(1, 1, 1, 0.1);
  border-radius: 8px;
  width: 100%;
  min-width: 400px;
  max-width: 800px;
  height: 40px;
  padding-left: 8px;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: box-shadow 0.3s ease;
  }
`

const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
`

const SearchIcon = styled(BsSearch)`
  margin: 0 16px;
  width: 24px;
  height: 100%;
  cursor: pointer;
  filter: opacity(15%);
`

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
      setCardsData(results)
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

  return (
    <StyledForm>
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
        <SearchHistoryContainer>
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
  )
}
