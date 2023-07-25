import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 24px;
  place-items: center;
  max-width: 1100px;
  margin: 1rem auto;
  background-color: #fafafa;
`

export const CardsContainer = ({ children }) => {
  return <StyledCardsContainer>{children}</StyledCardsContainer>
}

CardsContainer.propTypes = {
  children: PropTypes.node
}
