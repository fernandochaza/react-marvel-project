import styled from 'styled-components'

import { GoStar } from 'react-icons/go'

const ButtonContainer = styled.div`
  width: 36px;
  min-width: 36px;
  height: 36px;
  cursor: pointer;

  @media screen and (max-width: ${props => props.theme.breakpointSm}){
    width: 28px;
    height: 28px;
    position: absolute;
    top: 12px;
    right: 32px;
  }
`

const FavoriteCardsIcon = styled(GoStar)`
  width: 100%;
  height: 100%;
`

export {ButtonContainer, FavoriteCardsIcon}