import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useAtom, useSetAtom } from 'jotai'
import {
  favoriteCardTooltip,
  favoriteCharacters,
  modalCharacter,
  modalVisibility
} from '../../atoms'

import FavoriteAddedTooltip from './FavoriteAddedTooltip'

import {
  AddFavoriteButton,
  AddedFavorite,
  BackgroundImage,
  CardContainer,
  CardInnerShadow,
  CharacterName,
  NotFavorite
} from './styles'

export const CharacterCard = ({ character }) => {
  const setLocalFavorites = useSetAtom(favoriteCharacters)
  const setIsModalActive = useSetAtom(modalVisibility)
  const setCurrentModalCharacter = useSetAtom(modalCharacter)
  const [isCurrentCharacterFavorite, setIsCurrentCharacterFavorite] =
    useState(false)
  const [showTooltip, setShowTooltip] = useAtom(favoriteCardTooltip)

  const handleFavoriteCard = (character) => {
    if (character) {
      const storedFavorites = localStorage.getItem('favoriteCharacters')
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : []

      const isCharacterInFavorites = favorites.some(
        (favCharacter) => favCharacter.id === character.id
      )
      if (!isCharacterInFavorites) {
        const updatedFavorites = [...favorites, character]
        localStorage.setItem(
          'favoriteCharacters',
          JSON.stringify(updatedFavorites)
        )
        setLocalFavorites(updatedFavorites)
        setIsCurrentCharacterFavorite(true)
        setShowTooltip(true)
      } else {
        const updatedFavorites = favorites.filter(
          (item) => item.id !== character.id
        )
        localStorage.setItem(
          'favoriteCharacters',
          JSON.stringify(updatedFavorites)
        )
        setLocalFavorites(updatedFavorites)
        setIsCurrentCharacterFavorite(false)
      }
    }
  }

  const handleStarKeyPress = (event, character) => {
    if (event.key === 'Enter') {
      event.stopPropagation()
      handleFavoriteCard(character)
    }
  }

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteCharacters')
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : []

    const isCharacterInFavorites = favorites.some(
      (favCharacter) => favCharacter.id === character.id
    )

    setIsCurrentCharacterFavorite(isCharacterInFavorites)
  }, [character])

  const handleCardClick = useCallback(() => {
    setIsModalActive(true)
    setCurrentModalCharacter(character)
  }, [])

  const handleCardKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsModalActive(true)
      setCurrentModalCharacter(character)
    }
  }

  return (
    <>
      <CardContainer tabIndex={0} onKeyDown={handleCardKeyPress}>
        <BackgroundImage
          src={
            character?.thumbnail?.path !==
            'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
              ? `${character?.thumbnail?.path}.${character?.thumbnail?.extension}`
              : 'https://i.pinimg.com/564x/db/b2/12/dbb2129035f83c491af200bb58e257cc.jpg'
          }
          alt={`Card of ${character.name}. Directs to ${character.name} comics.`}
        />
        <CardInnerShadow aria-label='' onClick={() => handleCardClick()} />
        <AddFavoriteButton
          tabIndex={0}
          aria-label={`Button to add ${character.name} to your favorite cards`}
          alt='Add to favorite icon'
          onClick={() => handleFavoriteCard(character)}
          onKeyDown={(event) => handleStarKeyPress(event, character)}
        >
          {isCurrentCharacterFavorite ? <AddedFavorite /> : <NotFavorite />}
        </AddFavoriteButton>
        <CharacterName aria-hidden='true'>{character.name}</CharacterName>
      </CardContainer>
      {showTooltip && <FavoriteAddedTooltip />}
    </>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
}
