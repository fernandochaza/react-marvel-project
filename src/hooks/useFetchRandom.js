import { useSetAtom } from 'jotai'
import { charactersResults, handleApiError, loadingCards } from '../atoms'
import { useCallback, useMemo } from 'react'
import { fetchCharacter } from '../Utils/fetchers/fetchCharacter'
import getRandomCharacter from '../Utils/getRandomCharacter'

const useFetchRandom = () => {
  const setApiError = useSetAtom(handleApiError)
  const setCardsData = useSetAtom(charactersResults)
  const setIsLoading = useSetAtom(loadingCards)

  const apiKey = useMemo(() => import.meta.env.VITE_PUBLIC_API_KEY, [])
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
      setCardsData(results.data.results)
    } catch (error) {
      setApiError('Error fetching data: ' + error.message)
    }
    setIsLoading(false)
  })

  return [handleFetchRandom]
}

export default useFetchRandom
