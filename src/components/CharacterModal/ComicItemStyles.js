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
  border-radius: 16px;
  transition: background-color .2s ease-in-out, color .2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.accent1Color};
    border-radius: 16px;
  }

  &:hover > p{
    color: ${(props) => props.theme.white};
    text-shadow: 1px 1px 4px ${(props) => props.theme.black};
    font-weight: 500;
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
  max-height: 84px;
  overflow: hidden;
  color: ${(props) => props.theme.mainTxt};
  transition: color .2s ease-in-out, color .2s ease-in-out;

  &::first-line{
    text-decoration: underline;
  }

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
