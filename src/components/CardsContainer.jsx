import PropTypes from 'prop-types'

import styled from 'styled-components'
import { CharacterCard } from './CharacterCard'

const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 24px;
  place-items: center;
  max-width: 1100px;
  margin: 1rem auto;
`

export const CardsContainer = ({ characters }) => {
  console.log('Mounting Cards Container...')

  return (
    <StyledCardsContainer className='cards-container'>
      {characters && characters.length > 0
        ? characters.map((result) => {
            return <CharacterCard key={result.id} character={result} />
          })
        : null}
    </StyledCardsContainer>
  )
}

CardsContainer.propTypes = {
  characters: PropTypes.array.isRequired
}
