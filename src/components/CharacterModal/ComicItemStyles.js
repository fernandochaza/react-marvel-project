import styled from 'styled-components'

const ComicItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr, 1fr, 1fr;
  justify-content: start;
  margin-bottom: 1rem;
`

const ComicThumbnail = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 16px;
  object-fit: cover;
  object-position: top;
`

const CharacterDescription = styled.p`
  margin-left: 1rem;
  margin-top: 0.5rem;
  padding-right: 1rem;
  grid-column: 2/3;
  max-height: 90px;
  overflow: hidden;
`

export { ComicItem, ComicThumbnail, CharacterDescription }
