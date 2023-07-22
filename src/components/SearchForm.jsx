import styled from 'styled-components'

import useFetchCharacters from '../hooks/useFetchCharacters'
import { useCallback, useEffect } from 'react'
import getRandomCharacter from '../Utils/getRandomCharacter'
import { fetchRandomCharacter } from '../Utils/fetchers/fetchRandomCharacter'
import { useAtom, useSetAtom } from 'jotai'
import { charactersResults, favoriteSearches } from '../atoms'
import { FavoriteSearchesList } from './FavoriteSearchesList/FavoriteSearchesList'
import { FavoriteSearchItem } from './FavoriteSearchesList/FavoriteSearchItem'
import { FavoriteItemLink } from './FavoriteSearchesList/FavoriteItemLink'

const StyledForm = styled.form`
  width: 70%;
  min-width: 400px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`

const Input = styled.input`
  margin: 0;
  border: 1px solid rgba(1, 1, 1, 0.1);
  border-radius: 8px;
  width: 100%;
  height: 40px;
  padding-left: 8px;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: box-shadow 0.3s ease;
  }

  &::placeholder {
    color: rgb(214, 211, 211);
  }
`

const api = 'http://gateway.marvel.com/v1/public/characters?'
const apiKey = 'f4e63a51401e5c498e1740d446ae8f5d'

export const SearchForm = () => {
  const [favorites, setFavorites] = useAtom(favoriteSearches)
  const [handleInputChange, handleEnterKey, inputString] = useFetchCharacters()
  const setCardsData = useSetAtom(charactersResults)

  const handleFetchRandom = useCallback(async () => {
    const query = getRandomCharacter()
    const results = await fetchRandomCharacter({
      api,
      apiKey,
      query,
      limit: 9
    })

    setCardsData(results)
  })

  useEffect(() => {
    handleFetchRandom()
  }, [])

  const handleDisplayFavorites = useCallback(() => {
    const storedFavorites = localStorage.getItem('favoriteSearches')
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : null
    setFavorites(favorites)
  }, [])

  return (
    <StyledForm action='#' autoComplete='on'>
      <Input
        type='text'
        placeholder='Buscar'
        autoComplete='on'
        value={inputString}
        onChange={(event) => handleInputChange(event.target.value)}
        onKeyDown={handleEnterKey}
        onClick={handleDisplayFavorites}
      />
      {!inputString && favorites ? (
        <FavoriteSearchesList>
          {favorites.map((favoriteItem) => {
            return (
              <FavoriteSearchItem key={favoriteItem}>
                <FavoriteItemLink text={favoriteItem} />
              </FavoriteSearchItem>
            )
          })}
        </FavoriteSearchesList>
      ) : null}
      <button type='submit' style={{ display: 'none' }}></button>
    </StyledForm>
  )
}
