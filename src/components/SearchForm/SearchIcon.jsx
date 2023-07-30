import styled from 'styled-components'

const StyledSearchIcon = styled.svg`
  margin: 0 16px;
  width: 32px;
  height: 100%;
  cursor: pointer;

  path {
    stroke: ${props => props.theme.mainTxt};
  }
`

const SearchIcon = () => {
  return (
    <StyledSearchIcon
      width='64px'
      height='64px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <g id='Interface / Search_Magnifying_Glass'>
          {' '}
          <path
            id='Vector'
            d='M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z'
            stroke='#cec8c8'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>{' '}
        </g>{' '}
      </g>
    </StyledSearchIcon>
  )
}

export { SearchIcon }
