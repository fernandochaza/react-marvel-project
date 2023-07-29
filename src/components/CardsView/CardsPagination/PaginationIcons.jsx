import propTypes from 'prop-types'
import { StyledButton } from './PaginationIconsStyle'

const PreviousIcon = ({ onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} positionX='left'>
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
            fill={disabled? '#00000026' : '#000000'}
          ></path>
        </g>
      </svg>{' '}
    </StyledButton>
  )
}

const NextIcon = ({ onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} position='right'>
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
            fill={disabled ? '#00000026' : '#000000'}
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