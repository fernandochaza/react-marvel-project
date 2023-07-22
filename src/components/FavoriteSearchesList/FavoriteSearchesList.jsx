import PropTypes from 'prop-types'

import styled from 'styled-components'

const FavSearchesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: .0 1rem;
  background-color: rgb(230, 230, 230);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  position: absolute;
  top: 54px;
  z-index: 4;

  max-height: 220px;
  width: 70%;
  min-width: 400px;
  max-width: 800px;

  overflow-y: auto;
  list-style: none;
`

export const FavoriteSearchesList = ( { children }) => {
  return (
    <FavSearchesContainer>{ children }</FavSearchesContainer>
  )
}

FavoriteSearchesList.propTypes = {
  children: PropTypes.node
}
