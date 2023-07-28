import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledListItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr, 1fr, 1fr;
  justify-content: start;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ed1d24;
    color: white;
    border-radius: 16px;
  }
`

const StyledThumbnail = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 16px;
  object-fit: cover;
  object-position: top;
`

const StyledDescriptionText = styled.p`
  margin-left: 1rem;
  margin-top: 0.5rem;
  padding-right: 1rem;
  grid-column: 2/3;
  max-height: 70px;
  overflow: hidden;
`

const StyledContainerLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export {
  StyledListItem,
  StyledThumbnail,
  StyledDescriptionText,
  StyledContainerLink
}
