import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { fetchComicById } from '../../Utils/fetchers/fetchComicById'

import {
  StyledListItem,
  StyledThumbnail,
  StyledDescriptionText,
  StyledContainerLink
} from './ComicItemStyles'

export const ComicListItem = ({ character, comicUrl }) => {
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

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <StyledContainerLink to={`/comic/${comicId}`} state={{ comicData }}>
      <StyledListItem>
        <>
          <StyledThumbnail
            src={`${comicData?.thumbnail?.path.replace(
              'http://',
              'https://'
            )}/standard_medium.${comicData?.thumbnail?.extension}`}
            alt=''
          />
          <StyledDescriptionText>
            {character.name}
            <br />
            {comicData?.description
              ? comicData?.description
                  .replace(/<ul>|<\/ul>/g, '')
                  .replace(/<li>|<\/li>/g, ' ')
              : 'No available comic description'}
          </StyledDescriptionText>
        </>
      </StyledListItem>
    </StyledContainerLink>
  )
}

ComicListItem.propTypes = {
  character: PropTypes.object.isRequired,
  comicUrl: PropTypes.string.isRequired
}
