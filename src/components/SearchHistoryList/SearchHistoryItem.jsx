import PropTypes from 'prop-types'
import styled from 'styled-components'

const ListItem = styled.li`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
`

export const SearchHistoryItem = ({ children }) => {
  return <ListItem>{children}</ListItem>
}

SearchHistoryItem.propTypes = {
  children: PropTypes.node
}
