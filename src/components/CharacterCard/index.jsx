import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useSetAtom } from 'jotai'
import { favoriteCharacters, modalCharacter, modalVisibility } from '../../atoms'

import { AddFavoriteButton, AddedFavorite, BackgroundImage, CardContainer, CardInnerShadow, CharacterName, NotFavorite } from './styles'

export const CharacterCard = ({ character }) => {
  const setLocalFavorites = useSetAtom(favoriteCharacters)
  const setIsModalActive = useSetAtom(modalVisibility)
  const setCurrentModalCharacter = useSetAtom(modalCharacter)
  const [isCurrentCharacterFavorite, setIsCurrentCharacterFavorite] =
    useState(false)

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

  return (
    <>
      <CardContainer>
        <BackgroundImage
          src={
            character.thumbnail.path !==
            'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
              ? `${character.thumbnail.path}.${character.thumbnail.extension}`
              : 'https://i.pinimg.com/564x/db/b2/12/dbb2129035f83c491af200bb58e257cc.jpg'
          }
          alt={character.name}
        />
        <CardInnerShadow onClick={() => handleCardClick()} />
        <AddFavoriteButton
          alt='Add to favorite icon'
          onClick={() => handleFavoriteCard(character)}
        >
          {isCurrentCharacterFavorite ? <AddedFavorite /> : <NotFavorite />}
        </AddFavoriteButton>
        <CharacterName>{character.name}</CharacterName>
      </CardContainer>
    </>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
}
