import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 24px;
  place-items: center;
  max-width: 1100px;
  margin: 1rem auto;
`

export const CardsContainer = ({ children }) => {
  return <StyledCardsContainer>{children}</StyledCardsContainer>
}

CardsContainer.propTypes = {
  children: PropTypes.node
}
