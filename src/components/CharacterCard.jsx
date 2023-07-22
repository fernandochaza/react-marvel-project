import { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useAtom } from 'jotai'
import { favoriteCharacters } from '../atoms'

const CardContainer = styled.article`
  position: relative;
  width: 256px;
  height: 380px;
  border: 1px solid black;
  border-radius: 4px;
`

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-radius: 4px;
`

const AddedFavorite = styled(AiFillStar)`
  width: 100%;
  height: 100%;
`

const NotFavorite = styled(AiOutlineStar)`
  width: 100%;
  height: 100%;
`

const CardInnerShadow = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgb(175, 179, 179);
  background: linear-gradient(
    190deg,
    rgba(175, 179, 179, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(75, 77, 77, 0.8) 100%
  );
`

const AddFavoriteButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
  cursor: pointer;

  width: 32px;
  height: 32px;
  color: white;
`

const CharacterName = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: auto;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  z-index: 3;
`
export const CharacterCard = ({ character }) => {
  const [, setLocalFavorites] = useAtom(favoriteCharacters)

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
      } else {
        const updatedFavorites = favorites.filter(
          (item) => item.id !== character.id
        )
        localStorage.setItem(
          'favoriteCharacters',
          JSON.stringify(updatedFavorites)
        )
        setLocalFavorites(updatedFavorites)
      }
    }
  }

  const isFavorite = useCallback((characterId) => {
    const storedFavorites = localStorage.getItem('favoriteCharacters')
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : []

    const isCharacterInFavorites = favorites.some(
      (favCharacter) => favCharacter.id === characterId
    )

    return isCharacterInFavorites
  })

  const handleCardClick = (characterId) => {
    console.log(characterId)
  }

  return (
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
      <CardInnerShadow onClick={() => handleCardClick(character.id)} />
      <AddFavoriteButton
        alt='Add to favorite icon'
        onClick={() => handleFavoriteCard(character)}
      >
        {isFavorite(character.id) ? <AddedFavorite /> : <NotFavorite />}
      </AddFavoriteButton>
      <CharacterName>{character.name}</CharacterName>
    </CardContainer>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
}
