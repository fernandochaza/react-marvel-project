import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { fetchComicById } from '../../Utils/fetchers/fetchComicById'

import {
  ComicItem,
  ComicThumbnail,
  CharacterDescription, 
  StyledLink
} from './ComicItemStyles'

export const ModalComicItem = ({ character, comicUrl }) => {
  const [comicData, setComicData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [comicId, setComicId] = useState('')

  const fetchComicData = useCallback(async () => {
    const urlParts = comicUrl.split('/')
    const currentComicId = urlParts.pop()
    setComicId(currentComicId)

    try {
      const results = await fetchComicById(currentComicId)
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
    <StyledLink to={`/comic/${comicId}`} state={{ comicData }}>
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
    </StyledLink>
  )
}

ModalComicItem.propTypes = {
  character: PropTypes.object.isRequired,
  comicUrl: PropTypes.string.isRequired
}
