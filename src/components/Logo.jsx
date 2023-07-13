import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledLogo = styled.img`
  height: 32px;
  margin: auto 1.2rem;
`

export const Logo = ({ src, alt }) => {
  return (
    <StyledLogo src={src} alt={alt}/>
    )
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
