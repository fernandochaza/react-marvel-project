import styled from 'styled-components'
import { CharacterCard } from './CharacterCard'
import { useAtom } from 'jotai'
import { charactersResults } from '../atoms'

const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 24px;
  place-items: center;
  max-width: 1100px;
  margin: 1rem auto;
`

export const CardsContainer = () => {
  const [searchResults] = useAtom(charactersResults)
  return (
    <StyledCardsContainer>
      {searchResults && searchResults.length > 0
        ? searchResults.map((character) => {
            return <CharacterCard key={character.id} character={character} />
          })
        : null}
    </StyledCardsContainer>
  )
}
