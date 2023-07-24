import { useAtom, useSetAtom } from 'jotai'
import { useCallback, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { charactersResults, handleApiError, matchingResults, userInput } from '../atoms'
import { fetchCharacter } from '../Utils/fetchers/fetchCharacter'
import { handleSearchHistory } from '../Utils/handleSearchHistory'

const useFetchCharacters = () => {
  const [currentInput, setCurrentInput] = useAtom(userInput)
  const setApiError = useSetAtom(handleApiError)
  const setResultsList = useSetAtom(matchingResults)
  const setCardsData = useSetAtom(charactersResults)
  const [, setSearchParams] = useSearchParams('')

  const charactersEndpoint = useMemo(
    () => import.meta.env.VITE_API_CHARACTERS_ENDPOINT,
    []
  )

  const apiKey = useMemo(() => import.meta.env.VITE_API_KEY, [])

  const handleFetchByInput = useCallback(async (query) => {
    if (query !== '') {
       try {
          const fetchedCharacters = await fetchCharacter({
          api: charactersEndpoint,
          apiKey,
          query,
          limit: 30
        })

        setResultsList(fetchedCharacters)
        setCardsData(fetchedCharacters)
        setSearchParams({ character: `"${query}"` })
        setApiError(null)
      } catch (error) {
        setApiError('Error fetching data: ' + error.message)
      }
    }
  }, [])

  useEffect(() => {
    handleFetchByInput(currentInput)
  }, [])

  const handleFetchMatchingResults = useCallback(async (userQuery) => {
    if (userQuery !== '') {
      try {
          const results = await fetchCharacter({
          api: charactersEndpoint,
          apiKey,
          query: userQuery,
          limit: 10
        })
        setResultsList(results)
        setApiError(null)
      } catch (error) {
        setApiError(error)
      }
    }
  }, [])

  useEffect(() => {
    const fetchByInputTimer = setTimeout(
      () => handleFetchMatchingResults(currentInput),
      3000
    )
    return () => clearTimeout(fetchByInputTimer)
  }, [currentInput])

  const handleInputChange = useCallback((userQuery) => {
    setCurrentInput(userQuery)
  }, [])

  const handleEnterKey = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        handleFetchByInput(event.target.value)
        handleSearchHistory(event.target.value)
        event.preventDefault()
      }
    },
    [currentInput]
  )

  return [handleInputChange, handleEnterKey, currentInput]
}

export default useFetchCharacters
