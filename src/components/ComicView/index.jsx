import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import loadingImage from '../../assets/loading-img-300-450.webp'

import {
  MainWrapper,
  StyledImage,
  InformationWrapper,
  TextField,
  Description,
  FieldsWrapper,
  Title
} from './styles'

export const ComicView = () => {
  // const { comicId } = useParams()  // Use when accessing from the url to fetch the comic
  const location = useLocation()
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const { comicData } = location.state

  const { title, description, dates, thumbnail, creators } = comicData || {}

  const date = dates?.[0]?.date || 'Not available'
  let comicRelease
  if (date) {
    const dateObj = new Date(date)
    comicRelease = dateObj.toISOString().split('T')[0]
  }

  const removeUl = description?.replace(/<ul>|<\/ul>/g, '')
  const cleanDescription = removeUl?.replace(/<li>|<\/li>/g, ' ')

  const comicFields = [
    { field: 'Writer', role: 'writer' },
    { field: 'Penciler', role: 'penciller' },
    { field: 'Cover Artist', role: 'penciller (cover)' }
  ]

  const imgSrc = `${thumbnail?.path}/detail.${thumbnail?.extension}`

  return (
    <MainWrapper>
      <StyledImage
        src={imgSrc}
        alt={`${title || ''} cover image`}
        onLoad={() => {
          setIsImageLoaded(true)
        }}
        style={{ display: isImageLoaded ? 'block' : 'none' }}
        width='550'
        height='835'
      />
      <StyledImage
        src={loadingImage}
        alt='Default Card Image'
        width='550'
        height='835'
        style={{ display: isImageLoaded ? 'none' : 'block' }}
      />
      <InformationWrapper>
        <Title>{title || 'Title not found'}</Title>
        <FieldsWrapper>
          <TextField>Published: {comicRelease || date}</TextField>
          {comicFields.map(({ field, role }) => {
            const names = (creators?.items || [])
              .filter((creator) => creator.role === role)
              .map((creator) => creator.name)
            return (
              <TextField key={role}>{`${field}: ${
                names.join(', ') || "Sorry, we didn't find this information"
              }`}</TextField>
            )
          })}{' '}
        </FieldsWrapper>
        <Description>{cleanDescription || 'No available Description'}</Description>
      </InformationWrapper>
    </MainWrapper>
  )
}
