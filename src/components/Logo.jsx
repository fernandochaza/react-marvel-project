import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLogo = styled.img`
  height: 32px;
  margin: auto 1.2rem;
`
const VerticalDivision = styled.div`
  border-left: 2px solid rgba(0, 0, 0, 0.06);
  height: 32px;
`

export const Logo = ({ src, alt }) => {
  return (
    <>
      <StyledLogo src={src} alt={alt} />
      <VerticalDivision />
    </>
  )
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
