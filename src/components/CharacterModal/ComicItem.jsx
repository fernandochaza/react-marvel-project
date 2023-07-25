import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { fetchComicById } from '../../Utils/fetchers/fetchComicById'

import { ComicItem, ComicThumbnail, CharacterDescription } from './ComicItemStyles'

export const ModalComicItem = ({ character, comicUrl }) => {
  const [comicData, setComicData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const fetchComicData = useCallback(async () => {
    const urlParts = comicUrl.split('/')
    const comicId = urlParts.pop()

    try {
      const results = await fetchComicById(comicId)
      setComicData(results)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching comic:', error)
      setIsLoading(false)
    }
  }, [comicUrl])

  useEffect(() => {
    fetchComicData()
  }, [fetchComicData])

  return (
    <ComicItem>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ComicThumbnail
            src={`${comicData?.thumbnail?.path}.${comicData?.thumbnail?.extension}`}
            alt=''
          />
          <CharacterDescription>
            {character.name}
            <br />
            {comicData?.description
              ? comicData?.description
              : 'No available comic description'}
          </CharacterDescription>
        </>
      )}
    </ComicItem>
  )
}

ModalComicItem.propTypes = {
  character: PropTypes.object.isRequired,
  comicUrl: PropTypes.string.isRequired
}
