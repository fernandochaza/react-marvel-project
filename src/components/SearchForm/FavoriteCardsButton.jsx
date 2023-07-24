import { useAtom, useSetAtom } from 'jotai'
import { charactersResults, favoriteCharacters } from '../../atoms'

import { ButtonContainer, FavoriteCardsIcon } from './FavoriteCardsButtonStyles'

export const FavoriteCardsButton = () => {
  const [favoriteCards] = useAtom(favoriteCharacters)
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
