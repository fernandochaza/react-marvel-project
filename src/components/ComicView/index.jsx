import { useLocation } from 'react-router-dom'
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
  const { comicData } = location.state

  const { title, description, dates, thumbnail, creators } = comicData || {}

  const date = dates?.[0]?.date || 'Not available'
  let comicRelease
  if (date) {
    const dateObj = new Date(date)
    comicRelease = dateObj.toISOString().split('T')[0]
  }

  const comicFields = [
    { field: 'Writer', role: 'writer' },
    { field: 'Penciler', role: 'penciller' },
    { field: 'Cover Artist', role: 'penciller (cover)' }
  ]

  const imgSrc = `${thumbnail?.path}.${thumbnail?.extension}`

  return (
    <MainWrapper className='comic-view'>
      <StyledImage src={imgSrc} alt={`${title || ''} cover image`} />
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
        <Description>{description || 'No available Description'}</Description>
      </InformationWrapper>
    </MainWrapper>
  )
}
