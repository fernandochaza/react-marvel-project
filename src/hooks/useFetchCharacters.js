import { useAtom, useSetAtom } from 'jotai'
import { useCallback, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { charactersResults, matchingResults, userInput } from '../atoms'
import { fetchSearchByInput } from '../Utils/fetchers/fetchSearchByInput'
import { handleSearchHistory } from '../Utils/handleSearchHistory'

const useFetchCharacters = () => {
  const [currentInput, setCurrentInput] = useAtom(userInput)
  const [, setSearchParams] = useSearchParams('')

  const charactersEndpoint = useMemo(
    () => import.meta.env.VITE_API_CHARACTERS_ENDPOINT,
    []
  )

  const apiKey = useMemo(() => import.meta.env.VITE_API_KEY, [])

  const setResultsList = useSetAtom(matchingResults)
  const setCardsData = useSetAtom(charactersResults)

  const handleFetchByInput = useCallback(async (query) => {
    if (query !== '') {
      const fetchedCharacters = await fetchSearchByInput({
        api: charactersEndpoint,
        apiKey,
        param: 'nameStartsWith=',
        query,
        limit: 20
      })

      setResultsList(fetchedCharacters)
      setCardsData(fetchedCharacters)
      setSearchParams({ character: query })
    }
  }, [])

  useEffect(() => {
    handleFetchByInput(currentInput)
  }, [])

  const handleFetchMatchingResults = useCallback(async (userQuery) => {
    if (userQuery !== '') {
      const results = await fetchSearchByInput({
        api: charactersEndpoint,
        apiKey,
        param: 'nameStartsWith=',
        query: userQuery,
        limit: 10
      })
      setResultsList(results)
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
