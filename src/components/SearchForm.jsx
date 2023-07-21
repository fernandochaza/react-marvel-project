import styled from 'styled-components'
import { BsSearch} from 'react-icons/bs'

import useFetchCharacters from '../hooks/useFetchCharacters'
import { useCallback, useEffect } from 'react'
import getRandomCharacter from '../Utils/getRandomCharacter'
import { fetchRandomCharacter } from '../Utils/fetchers/fetchRandomCharacter'
import { useSetAtom } from 'jotai'
import { charactersResults } from '../atoms'
import { useSearchParams } from 'react-router-dom'
import { AddFavoriteSearch } from './AddFavoriteSearchButton'

const StyledForm = styled.form`
  width: 70%;
  max-width: 900px;
  display: flex;
  align-items: center;
  margin: auto auto;
`

const Input = styled.input`
  border: 1px solid rgba(1, 1, 1, 0.1);
  border-radius: 8px;
  width: 100%;
  height: 36px;
  padding-left: 8px;
  margin: 0 20px;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: box-shadow 0.3s ease;
  }

  &::placeholder {
    color: rgb(214, 211, 211);
  }
`
const SearchIcon = styled(BsSearch)`
  margin: 0 auto;
  width: 24px;
  height: 100%;
  min-width: 24px;
  filter: opacity(15%);
`

const api = 'http://gateway.marvel.com/v1/public/characters?'
const apiKey = 'f4e63a51401e5c498e1740d446ae8f5d'

export const SearchForm = () => {
  const [handleInputChange, handleEnterKey, inputString] = useFetchCharacters()
  const setCardsData = useSetAtom(charactersResults)
  const [, setSearchParams] = useSearchParams('')

  const handleFetchRandom = useCallback(async () => {
    const query = getRandomCharacter()
    const results = await fetchRandomCharacter({
      api,
      apiKey,
      query,
      limit: 9
    })

    setCardsData(results)
    setSearchParams({ character: query })
  })

  useEffect(() => {
    handleFetchRandom()
  }, [])

  return (
    <StyledForm>
      <SearchIcon />
      <Input
        type='text'
        placeholder='Buscar'
        value={inputString}
        onChange={(event) => handleInputChange(event.target.value)}
        onKeyDown={handleEnterKey}
      />
      <button type='submit' style={{ display: 'none' }}></button>
      <AddFavoriteSearch alt='Add to favorite button' />
    </StyledForm>
  )
}
