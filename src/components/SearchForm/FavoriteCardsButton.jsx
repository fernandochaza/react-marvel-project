import { useAtom, useSetAtom } from 'jotai'
import { charactersResults, favoriteCharacters } from '../../atoms'

import { ButtonContainer, FavoriteCardsIcon } from './FavoriteCardsButtonStyles'
import { Tooltip } from '../Generic/Tooltip'
import { Link } from 'react-router-dom'

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
      <Link to={'/marvel-searcher/favoriteCards'}>
        <ButtonContainer
          tabIndex={0}
          onClick={() => handleDisplayFavoriteCards()}
          onKeyDown={handleKeyPress}
          aria-label='Directs to your favorite cards'
        >
          <FavoriteCardsIcon />
        </ButtonContainer>
      </Link>
    </Tooltip>
  )
}
