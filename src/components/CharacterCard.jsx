import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AiOutlineStar } from 'react-icons/ai'

const StyledResultsCard = styled.article`
  position: relative;
  width: 256px;
  height: 380px;
  border: 1px solid black;
  border-radius: 4px;
`

const StyledCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-radius: 4px;
`

const StyledCardBg = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgb(175,179,179);
  background: linear-gradient(
    190deg, 
    rgba(175,179,179,0.1) 0%, 
    rgba(255,255,255,0.1) 50%, 
    rgba(75,77,77,0.8) 100%); 
`

const StyledAddToFavorites = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`

const StyledCharacterName = styled.span`
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
  const img = `${character.thumbnail.path}.${character.thumbnail.extension}`
  console.log(img)
  return (
    <StyledResultsCard>
      <StyledCardImg src={img} alt={character.name} />
      <StyledCardBg />
      <StyledAddToFavorites href='#'>
        <AiOutlineStar id='star-icon' alt='Add to favorite icon' />
      </StyledAddToFavorites>
      <StyledCharacterName>{character.name}</StyledCharacterName>
    </StyledResultsCard>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
}
