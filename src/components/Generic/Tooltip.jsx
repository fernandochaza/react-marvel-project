import propTypes from 'prop-types'
import { useState } from 'react'

import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
`

const StyledTooltip = styled.div`
  position: absolute;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
  z-index: 1;
  font-size: 16px;
  min-width: 140px;
  left: 12px;

  @media screen and (max-width: ${(props) => props.theme.breakpointMd}) {
    transform: translateX(-80%);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    display: none;
  }
`

export const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState()

  return (
    <StyledContainer
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <StyledTooltip>{text}</StyledTooltip>}
    </StyledContainer>
  )
}

Tooltip.propTypes = {
  text: propTypes.string.isRequired,
  children: propTypes.node.isRequired
}
