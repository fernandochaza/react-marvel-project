import styled from 'styled-components'

import { PiStarThin } from 'react-icons/pi'

const ButtonContainer = styled.div`
  width: 32px;
  min-width: 32px;
  height: 32px;
  cursor: pointer;  
  transition: all 0.3s ease-in-out;

  &:focus {
    transform: scale(1.2);
  }
  
  &:hover {
    transform: scale(1.2);
  }


  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    width: 28px;
    height: 28px;
    margin-right: -40px;
  }
`

const FavoriteCardsIcon = styled(PiStarThin)`
  width: 100%;
  height: 100%;
`

export { ButtonContainer, FavoriteCardsIcon }
