import { useCallback, useEffect, useState } from 'react'
import { useAtom } from 'jotai'

import styled from 'styled-components'
import { BsSearch, BsStar } from 'react-icons/bs'

import { useSearchParams } from 'react-router-dom'

import { fetchSearchByInput } from '../Utils/fetchers/fetchSearchByInput'
import getRandomCharacter from '../Utils/getRandomCharacter'

import { charactersResults, matchingResults } from '../atoms'
import { fetchRandomCharacter } from '../Utils/fetchers/fetchRandomCharacter'

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

const FavoriteStar = styled(BsStar)`
  margin: 0 auto;
  width: 24px;
  min-width: 24px;
  height: 100%;
  filter: opacity(15%);
`

const api = 'http://gateway.marvel.com/v1/public/characters?'
const apiKey = 'f4e63a51401e5c498e1740d446ae8f5d'

export const SearchForm = () => {
  const [inputString, setInputString] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [, setSearchParams] = useSearchParams('')

  const [, setCardsData] = useAtom(charactersResults)
  const [, setResultsList] = useAtom(matchingResults)

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

  const handleFetchByInput = useCallback(async (query) => {
    if (query !== '') {
      const results = await fetchSearchByInput({
        api,
        apiKey,
        query,
        limit: 9
      })

      setResultsList(results)
      setCardsData(results)
      setSearchParams({ character: inputString })
    }
  }, [])

  useEffect(() => {
    handleFetchByInput(inputString)
  }, [isSubmitted])

  const handleFetchMatchingResults = useCallback(async (query) => {
    if (query !== '') {
      const results = await fetchSearchByInput({
        api,
        apiKey,
        query,
        limit: 9
      })
      setResultsList(results)
    }
  }, [])

  useEffect(() => {
    const fetchByInputTimer = setTimeout(
      () => handleFetchMatchingResults(inputString),
      5000
    )
    return () => clearTimeout(fetchByInputTimer)
  }, [inputString])

  const handleInputChange = useCallback((inputString) => {
    setInputString(inputString)
    setIsSubmitted(false)
  }, [])

  const handleEnterKey = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        setIsSubmitted(true)
        event.preventDefault()
      }
    },
    [inputString]
  )

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
      <FavoriteStar alt='Add to favorite button' />
    </StyledForm>
  )
}
