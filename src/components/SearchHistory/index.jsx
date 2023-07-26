import PropTypes from 'prop-types'

import { ListContainer, ListItem } from './styles'
import { forwardRef } from 'react';

export const SearchHistoryContainer = forwardRef(({ children, ...props }, ref) => {
  return <ListContainer ref={ref} {...props}>{children}</ListContainer>;
});

SearchHistoryContainer.propTypes = {
  children: PropTypes.node
}

export const SearchHistoryItem = ({ children }) => {
  return <ListItem>{children}</ListItem>
}

SearchHistoryItem.propTypes = {
  children: PropTypes.node
}

SearchHistoryContainer.displayName = 'SearchHistoryContainer';