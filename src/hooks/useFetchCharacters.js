import { useAtom, useSetAtom } from 'jotai'
import { useCallback, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { charactersResults, matchingResults, userInput } from '../atoms'
import { fetchSearchByInput } from '../Utils/fetchers/fetchSearchByInput'
import { handleFavoriteSearches } from '../Utils/handleLocalFavoriteSearches'

const api = 'http://gateway.marvel.com/v1/public/characters?'
const apiKey = 'f4e63a51401e5c498e1740d446ae8f5d'

const useFetchCharacters = () => {
  const [currentInput, setCurrentInput] = useAtom(userInput)
  const [, setSearchParams] = useSearchParams('')

  const setResultsList = useSetAtom(matchingResults)
  const setCardsData = useSetAtom(charactersResults)

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
    handleFetchByInput(currentInput)
  }, [])

  const handleFetchMatchingResults = useCallback(async (userQuery) => {
    if (userQuery !== '') {
      const results = await fetchSearchByInput({
        api,
        apiKey,
        query: userQuery,
        limit: 9
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
        handleFavoriteSearches(event.target.value)
        event.preventDefault()
      }
    },
    [currentInput]
  )

  return [handleInputChange, handleEnterKey, currentInput]
}

export default useFetchCharacters
