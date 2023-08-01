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
import Footer from '../Footer'
import { getComicInfo } from '../../Utils/getComicInfo'

export const ComicView = () => {
  // const { comicId } = useParams()  // Use when accessing from the url to fetch the comic
  const location = useLocation()
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const { comicData } = location.state

  const {
    title,
    comicRelease,
    cleanDescription,
    penciler,
    writer,
    coverArtist,
    imgSrc,
    date
  } = getComicInfo(comicData)

  return (
    <>
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
            <TextField>Writer/s: {writer.join(', ') || 'Not found'}</TextField>
            <TextField>
              Penciler/s: {penciler.join(', ') || 'Not found'}
            </TextField>
            <TextField>
              Cover Artist/s: {coverArtist.join(', ') || 'Not found'}
            </TextField>
          </FieldsWrapper>
          <Description>
            {cleanDescription || 'No available Description'}
          </Description>
        </InformationWrapper>
      </MainWrapper>
      <Footer />
    </>
  )
}
