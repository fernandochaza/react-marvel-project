import { useAtomValue } from 'jotai'
import { charactersResults, handleApiError, modalVisibility } from '../atoms'

import { CharacterCard } from './CharacterCard'
import { CardsContainer } from './CardsContainer'
import { CharacterModal } from './CharacterModal'


export const Main = () => {
  const searchResults = useAtomValue(charactersResults)
  const apiError = useAtomValue(handleApiError)
  const isModalActive = useAtomValue(modalVisibility)

  return (
    <main>
    {apiError === null ? (
      searchResults && searchResults.length > 0 ? (
        <CardsContainer>
          {searchResults.map((character) => {
            return (
              <CharacterCard key={character.id} character={character} />
            )
          })}
        </CardsContainer>
      ) : (
        <CardsContainer>
          <p>No matching results.</p>
        </CardsContainer>
      )
    ) : (
      <h1>API ERROR: {apiError}</h1>
    )}
    {isModalActive && <CharacterModal></CharacterModal>}
    </main>
  )
}
