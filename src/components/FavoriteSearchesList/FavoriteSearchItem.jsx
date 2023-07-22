import PropTypes from 'prop-types'

import styled from 'styled-components'

const FavoriteItem = styled.li`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
`

export const FavoriteSearchItem = ({ children }) => {
  return <FavoriteItem>{children}</FavoriteItem>
}

FavoriteSearchItem.propTypes = {
  children: PropTypes.node
}
