import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchCharacter } from '../Utils/fetchers/fetchCharacter'
import { fetchComicsByCharacter } from '../Utils/fetchers/fetchComicsByCharacter'
import { useSetAtom } from 'jotai'
import { charactersResults, handleApiError, loadingCards } from '../atoms'
import { getStoredEtag } from '../Utils/getStoredEtag'
import { saveQueryInLocalStorage } from '../Utils/saveQueryInLocalStorage'

const useFetchByUrl = () => {
  const setCardsData = useSetAtom(charactersResults)
  const setApiError = useSetAtom(handleApiError)
  const [searchParams] = useSearchParams()
  const setIsLoading = useSetAtom(loadingCards)

  const apiKey = useMemo(() => import.meta.env.VITE_PUBLIC_API_KEY, [])
  const charactersEndpoint = useMemo(
    () => import.meta.env.VITE_API_CHARACTERS_ENDPOINT,
    []
  )

  const fetchUrlCharacter = useCallback(async () => {
    const characterParam = searchParams.get('character')
      ? encodeURIComponent(searchParams.get('character').replace(/"/g, ''))
      : undefined
    const comicParam = searchParams.get('comic')
      ? encodeURIComponent(searchParams.get('comic').replace(/"/g, ''))
      : undefined
    if (characterParam) {
      const etag = getStoredEtag(characterParam)
      try {
        const character = await fetchCharacter({
          api: charactersEndpoint,
          apiKey,
          query: characterParam,
          limit: 40,
          etag
        })

        if (comicParam) {
          const characterComics = await fetchComicsByCharacter({
            apiKey,
            characterId: character.data.id,
            comic: comicParam,
            limit: 20
          })

          Promise.all([character, characterComics]).then((values) => {})
        } else {
          setCardsData(character.data.results)
          setIsLoading(false)
          if (character.data.results.length > 0) {
            saveQueryInLocalStorage(characterParam, character)
          }
        }
      } catch (error) {
        setApiError(error)
      }
    }
  }, [])

  return [fetchUrlCharacter]
}

export default useFetchByUrl
