import styled from 'styled-components'

import { AiOutlineStar } from 'react-icons/ai'
import { useAtom, useSetAtom } from 'jotai'
import { charactersResults, favoriteCharacters } from '../atoms'

const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
`

const FavoriteCardsIcon = styled(AiOutlineStar)`
  width: 100%;
  height: 100%;
`

export const FavoriteCardsButton = () => {
  const [favoriteCards, ] = useAtom(favoriteCharacters)
  const setCardsData = useSetAtom(charactersResults)

  const handleDisplayFavoriteCards = () => {
    setCardsData(favoriteCards)
  }

  return (
    <ButtonContainer onClick={() => handleDisplayFavoriteCards()}>
      <FavoriteCardsIcon />
    </ButtonContainer>
  )
}
