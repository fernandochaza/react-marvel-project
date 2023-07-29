import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useAtom, useSetAtom } from 'jotai'
import {
  charactersResults,
  favoriteCharacters,
  handleApiError,
  isSearchHistoryDisplayed,
  searchHistory,
  matchingResults,
  resultsPages
} from '../../atoms'

import useFetchCharacters from '../../hooks/useFetchCharacters'
import useFetchByUrl from '../../hooks/useFetchByUrl'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { fetchCharacter } from '../../Utils/fetchers/fetchCharacter'
import getRandomCharacter from '../../Utils/getRandomCharacter'

import { SearchHistoryContainer, SearchHistoryItem } from '../SearchHistory'
import { ResultsList } from '../ResultsList'
import { HistoryItem } from '../SearchHistory/HistoryItem'
import { FavoriteCardsButton } from './FavoriteCardsButton'

import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledInputContainer,
  StyledSearchIcon,
  StyledSubmitButton
} from './styles'

export const SearchForm = () => {
  const [displaySearchHistory, setDisplaySearchHistory] = useAtom(
    isSearchHistoryDisplayed
  )
  const [currentSearchHistory, setCurrentSearchHistory] = useAtom(searchHistory)
  const setApiError = useSetAtom(handleApiError)
  const setLocalFavorites = useSetAtom(favoriteCharacters)
  const [cardsData, setCardsData] = useAtom(charactersResults)
  const [currentMatchingResults, setCurrentMatchingResults] =
    useAtom(matchingResults)
  const [handleInputChange, handleEnterKey, inputString] = useFetchCharacters()
  const [fetchUrlCharacter] = useFetchByUrl()
  const [searchParams] = useSearchParams()
  const inputRef = useRef(null)
  const searchHistoryRef = useRef(null)
  const resultsListRef = useRef(null)
  const [, setResultsPerPage] = useAtom(resultsPages)

  const { state } = useLocation()

  const apiKey = useMemo(() => import.meta.env.VITE_API_KEY, [])
  const charactersEndpoint = useMemo(
    () => import.meta.env.VITE_API_CHARACTERS_ENDPOINT,
    []
  )

  const handleResultsPerPage = useCallback(() => {
    const resultsPerPage =
      window.innerWidth <= 768
        ? 2
        : window.innerWidth <= 1024
        ? 4
        : window.innerWidth <= 1200
        ? 6
        : 8
    setResultsPerPage(resultsPerPage)
  }, [])

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
    } else if (!state?.clickedLogo || cardsData.length <= 0) {
      handleFetchRandom()
    }
    handleResultsPerPage()
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

  const handleClickOutsideHistory = useCallback(() => {
    setDisplaySearchHistory(false)
  }, [])

  const handleClickOutsideResults = useCallback(() => {
    setCurrentMatchingResults(null)
  }, [])

  useOnClickOutside(searchHistoryRef, handleClickOutsideHistory)
  useOnClickOutside(resultsListRef, handleClickOutsideResults)

  return (
    <StyledForm
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <StyledInputContainer>
        <StyledInput
          id='search'
          type='text'
          placeholder='Enter a Marvel character...'
          autoComplete='off'
          value={inputString}
          aria-label='Search a Marvel character'
          onChange={(event) => handleInputChange(event.target.value)}
          onKeyDown={handleEnterKey}
          onClick={handleDisplaySearchHistory}
          ref={inputRef}
        />
        <StyledLabel htmlFor='search'>Character name</StyledLabel>
        <StyledSubmitButton type='submit'>
          <StyledSearchIcon aria-label='Search Button' />
        </StyledSubmitButton>
      </StyledInputContainer>
      {!inputString && currentSearchHistory && displaySearchHistory ? (
        <SearchHistoryContainer ref={searchHistoryRef}>
          {currentSearchHistory.map((searchItem) => {
            return (
              <SearchHistoryItem key={searchItem}>
                <HistoryItem
                  tabIndex={0}
                  aria-label={`Search results for: ${searchItem}`}
                  text={searchItem}
                />
              </SearchHistoryItem>
            )
          })}
        </SearchHistoryContainer>
      ) : null}
      {inputString && (
        <ResultsList ref={resultsListRef} results={currentMatchingResults} />
      )}
      <FavoriteCardsButton />
    </StyledForm>
  )
}
