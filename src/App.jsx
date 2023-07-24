import { CharacterCard } from './components/CharacterCard'
import { CardsContainer } from './components/CardsContainer'
import { Header } from './components/Header'
import './App.css'
import { useAtomValue } from 'jotai'
import { charactersResults, handleApiError, modalVisibility } from './atoms'
import { CharacterModal } from './components/CharacterModal'

function App() {
  const searchResults = useAtomValue(charactersResults)
  const apiError = useAtomValue(handleApiError)
  const isModalActive = useAtomValue(modalVisibility)

  return (
    <div className='App'>
      <Header></Header>
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
    </div>
  )
}

export default App

// Pending Tasks
// Work first mobile
// Organize project folders
