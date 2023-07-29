import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLogo = styled.img`
  height: 32px;
  margin: 0 1.2rem;
`
const VerticalDivision = styled.div`
  border-left: 1px solid transparent;
  box-shadow: 0 0 4px ${(props) => props.theme.mainTxt};
  height: 32px;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  margin: 0;
  padding: 0;
`

export const Logo = ({ src, alt }) => {
  return (
    <>
      <StyledLink to='/' state={{ clickedLogo: true }}>
        <StyledLogo src={src} alt={alt} />
      </StyledLink>
      <VerticalDivision />
    </>
  )
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
