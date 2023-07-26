import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLogo = styled.img`
  height: 32px;
  margin: auto 1.2rem;
`
const VerticalDivision = styled.div`
  border-left: 2px solid rgba(0, 0, 0, 0.06);
  height: 32px;

  @media screen and (max-width: ${props => props.theme.breakpointSm}){
    display: none;
  }
`

const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;
`

export const Logo = ({ src, alt }) => {
  return (
    <>
      <StyledLink to='/marvel-searcher/' state={{ refresh: true }}>
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
