import { StyledContainer, StyledFooter, StyledLink, StyledSign } from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSign>
        By Fernando Chazarreta{' '}
        <StyledLink href='https://github.com/fernandochaza'>
          https://github.com/fernandochaza
        </StyledLink>
      </StyledSign>
      <StyledContainer>
        <StyledSign>Data provided by Marvel.</StyledSign>
        <StyledSign>
          © 2023 Marvel.{' '}
          <StyledLink href='http://marvel.com'>http://marvel.com</StyledLink>
        </StyledSign>
      </StyledContainer>
    </StyledFooter>
  )
}

export default Footer
