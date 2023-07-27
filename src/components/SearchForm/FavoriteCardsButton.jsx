import { useAtom, useSetAtom } from 'jotai'
import { charactersResults, favoriteCharacters } from '../../atoms'

import { ButtonContainer, FavoriteCardsIcon } from './FavoriteCardsButtonStyles'
import { Tooltip } from '../Tooltip'

export const FavoriteCardsButton = () => {
  const [favoriteCards] = useAtom(favoriteCharacters)
  const setCardsData = useSetAtom(charactersResults)

  const handleDisplayFavoriteCards = () => {
    setCardsData(favoriteCards)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleDisplayFavoriteCards()
    }
  }
  
  return (
    <Tooltip text={'My Favorite Cards'}>
      <ButtonContainer
        tabIndex={0}
        onClick={() => handleDisplayFavoriteCards()}
        onKeyDown={handleKeyPress}
        aria-label='Directs to your favorite cards'
      >
        <FavoriteCardsIcon />
      </ButtonContainer>
    </Tooltip>
  )
}
