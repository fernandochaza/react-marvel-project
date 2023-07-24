import PropTypes from 'prop-types'

import { ListContainer, ListItem } from './styles'

export const SearchHistoryContainer = ({ children }) => {
  return <ListContainer>{children}</ListContainer>
}

SearchHistoryContainer.propTypes = {
  children: PropTypes.node
}

export const SearchHistoryItem = ({ children }) => {
  return <ListItem>{children}</ListItem>
}

SearchHistoryItem.propTypes = {
  children: PropTypes.node
}