import propTypes from 'prop-types'
import { StyledContainer, StyledMessage } from './styles'

const MainMessage = ({ children }) => {
  return (
    <StyledContainer>
      <StyledMessage>{children}</StyledMessage>
    </StyledContainer>
  )
}

export default MainMessage

MainMessage.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.array])
}
