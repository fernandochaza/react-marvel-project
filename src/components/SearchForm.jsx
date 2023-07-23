import { useCallback, useEffect, useMemo } from 'react'
import { useAtom, useSetAtom } from 'jotai'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'

import {
  charactersResults,
  favoriteCharacters,
  isSearchHistoryDisplayed,
  searchHistory
} from '../atoms'
import useFetchCharacters from '../hooks/useFetchCharacters'
import getRandomCharacter from '../Utils/getRandomCharacter'

import { fetchRandomCharacter } from '../Utils/fetchers/fetchRandomCharacter'
import { SearchHistoryContainer } from './SearchHistoryList/SearchHistoryContainer'
import { SearchHistoryItem } from './SearchHistoryList/SearchHistoryItem'
import { HistoryItemLink } from './SearchHistoryList/HistoryItemLink'
import { FavoriteCardsButton } from './FavoriteCardsButton'
import useFetchByUrl from '../hooks/useFetchByUrl'

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
  const [currentSearchHistory, setCurrentSearchHistory] = useAtom(searchHistory)
  const setLocalFavorites = useSetAtom(favoriteCharacters)
  const setCardsData = useSetAtom(charactersResults)
  const [displaySearchHistory, setDisplaySearchHistory] = useAtom(
    isSearchHistoryDisplayed
  )
  const [handleInputChange, handleEnterKey, inputString] = useFetchCharacters()
  const [handleFetchCharacter] = useFetchByUrl()

  const apiKey = useMemo(() => import.meta.env.VITE_API_KEY, [])
  const charactersEndpoint = useMemo(
    () => import.meta.env.VITE_API_CHARACTERS_ENDPOINT,
    []
  )

  useEffect(() => {
    handleFetchCharacter()
  }, [])

  const handleFetchRandom = useCallback(async () => {
    const query = getRandomCharacter()
    const results = await fetchRandomCharacter({
      api: charactersEndpoint,
      apiKey,
      query,
      limit: 9
    })

    setCardsData(results)
  })

  useEffect(() => {
    handleFetchRandom()
  }, [])

  useEffect(() => {
    displayFavoriteCards()
  }, [])

  const displayFavoriteCards = useCallback(() => {
    const storedFavorites = localStorage.getItem('favoriteCharacters')
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : null
    if (favorites) {
      setLocalFavorites(favorites)
    }
  })

  const handleDisplaySearchHistory = useCallback(() => {
    const storedSearchHistory = localStorage.getItem('searchHistory')
    const searchHistory = storedSearchHistory
      ? JSON.parse(storedSearchHistory)
      : null
    setCurrentSearchHistory(searchHistory)
    setDisplaySearchHistory(true)
  }, [])

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
                <HistoryItemLink
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
