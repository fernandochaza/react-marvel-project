import { Link } from 'react-router-dom'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  charactersResults,
  currentTheme,
  favoriteCharacters
} from '../../../atoms'

import { Tooltip } from '../../Generic/Tooltip'
import { LightStarIcon, DarkStarIcon } from './StarIcon'

import { StyledFavButtonContainer } from './styles'
import { darkTheme } from '../../../themes'

export const FavoriteCardsButton = () => {
  const [favoriteCards] = useAtom(favoriteCharacters)
  const setCardsData = useSetAtom(charactersResults)
  const theme = useAtomValue(currentTheme)

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
      <Link to={'/favoriteCards'}>
        <StyledFavButtonContainer
          tabIndex={0}
          onClick={() => handleDisplayFavoriteCards()}
          onKeyDown={handleKeyPress}
          aria-label='Directs to your favorite cards'
        >
          {theme === darkTheme ? <LightStarIcon /> : <DarkStarIcon />}
        </StyledFavButtonContainer>
      </Link>
    </Tooltip>
  )
}
