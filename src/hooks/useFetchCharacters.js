import { useSetAtom } from 'jotai'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { charactersResults, matchingResults } from '../atoms'
import getRandomCharacter from '../Utils/getRandomCharacter'
import { fetchRandomCharacter } from '../Utils/fetchers/fetchRandomCharacter'
import { fetchSearchByInput } from '../Utils/fetchers/fetchSearchByInput'

const api = 'http://gateway.marvel.com/v1/public/characters?'
const apiKey = 'f4e63a51401e5c498e1740d446ae8f5d'

const useFetchCharacters = () => {
  const [inputString, setInputString] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [, setSearchParams] = useSearchParams('')

  const setResultsList = useSetAtom(matchingResults)
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
      setSearchParams({ character: query })
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
      3000
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
  return [
    handleInputChange,
    handleEnterKey,
    inputString
  ]
}

export default useFetchCharacters
