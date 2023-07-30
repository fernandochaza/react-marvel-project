import styled from 'styled-components'

const StyledFavButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:focus {
    transform: scale(1.15);
  }

  &:hover {
    transform: scale(1.15);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointMd}) {
    margin-left: -30px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    margin-left: 10px;
  }
`

export { StyledFavButtonContainer }
