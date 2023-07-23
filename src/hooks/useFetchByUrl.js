import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchSearchByInput } from '../Utils/fetchers/fetchSearchByInput'
import { fetchComicsByCharacter } from '../Utils/fetchers/fetchComicsByCharacter'
import { useSetAtom } from 'jotai'
import { charactersResults } from '../atoms'

const useFetchByUrl = () => {
  const setCardsData = useSetAtom(charactersResults)
  const [searchParams] = useSearchParams()

  const apiKey = useMemo(() => import.meta.env.VITE_API_KEY, [])
  const charactersEndpoint = useMemo(
    () => import.meta.env.VITE_API_CHARACTERS_ENDPOINT,
    []
  )

  const handleFetchCharacter = useCallback(async () => {
    const characterParam = searchParams.get('character')
      ? encodeURIComponent(searchParams.get('character').replace(/"/g, ''))
      : undefined
    let character
    const comicParam = searchParams.get('comic')
      ? encodeURIComponent(searchParams.get('comic').replace(/"/g, ''))
      : undefined
    if (characterParam) {
      character = await fetchSearchByInput({
        api: charactersEndpoint,
        apiKey,
        param: 'nameStartsWith=',
        query: characterParam,
        limit: 20
      })

      if (comicParam) {
        const characterComics = await fetchComicsByCharacter({
          apiKey,
          characterId: character.id,
          comic: comicParam,
          limit: 20
        })

        Promise.all([character, characterComics]).then((values) => {
          console.log(values)
        })
      } else {
        setCardsData(character)
      }
    }
  }, [])

  return [handleFetchCharacter]
}

export default useFetchByUrl
