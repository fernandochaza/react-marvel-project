import { forwardRef } from 'react';
import PropTypes from 'prop-types'
import { StyledListContainer, StyledListItem } from './styles'

export const SearchHistoryContainer = forwardRef(({ children, ...props }, ref) => {
  return <StyledListContainer ref={ref} {...props}>{children}</StyledListContainer>;
});

SearchHistoryContainer.propTypes = {
  children: PropTypes.node
}

export const SearchHistoryItem = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>
}

SearchHistoryItem.propTypes = {
  children: PropTypes.node
}

SearchHistoryContainer.displayName = 'SearchHistoryContainer';