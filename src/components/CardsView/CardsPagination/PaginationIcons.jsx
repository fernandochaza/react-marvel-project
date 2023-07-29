import propTypes from 'prop-types'
import { StyledButton } from './PaginationIconsStyle'
import { ThemeContext } from 'styled-components'; 
import { useContext } from 'react';

const PreviousIcon = ({ onClick, disabled }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledButton onClick={onClick} positionX='left' disabled={disabled}>
      <svg
        viewBox='0 0 1024 1024'
        className='icon'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        fill='#000000'
      >
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></g>
        <g id='SVGRepo_iconCarrier'>
          <path
            d='M659.2 917.333333l66.133333-66.133333L386.133333 512 725.333333 172.8 659.2 106.666667 256 512z'
            fill={disabled ? theme.accentBg : theme.mainTxt}
          ></path>
        </g>
      </svg>{' '}
    </StyledButton>
  )
}

const NextIcon = ({ onClick, disabled }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledButton onClick={onClick} position='right' disabled={disabled}>
      <svg
        viewBox='0 0 1024 1024'
        className='icon'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        fill='#000000'
        transform='rotate(180)'
      >
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></g>
        <g id='SVGRepo_iconCarrier'>
          <path
            d='M659.2 917.333333l66.133333-66.133333L386.133333 512 725.333333 172.8 659.2 106.666667 256 512z'
            fill={disabled ? theme.accentBg : theme.mainTxt}
          ></path>
        </g>
      </svg>{' '}
    </StyledButton>
  )
}

PreviousIcon.propTypes = {
  onClick: propTypes.func.isRequired,
  disabled: propTypes.bool.isRequired
}

NextIcon.propTypes = {
  onClick: propTypes.func.isRequired,
  disabled: propTypes.bool.isRequired
}

export { PreviousIcon, NextIcon }