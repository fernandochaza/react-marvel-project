import styled from 'styled-components'

import { AiOutlineStar } from 'react-icons/ai'

const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
`

const FavoriteCardsIcon = styled(AiOutlineStar)`
  width: 100%;
  height: 100%;
`

export {ButtonContainer, FavoriteCardsIcon}