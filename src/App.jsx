import { CharacterCard } from './components/CharacterCard'
import { CardsContainer } from './components/CardsContainer'
import { Header } from './components/Header'
import './App.css'
import { useAtom } from 'jotai'
import { charactersResults } from './atoms'

function App() {
  const [searchResults] = useAtom(charactersResults)

  return (
    <div className='App'>
      <Header />
      <main>
        {searchResults && searchResults.length > 0 ? (
          <CardsContainer id="hola">
            {searchResults.map((character) => {
              return <CharacterCard key={character.id} character={character} />
            })}
          </CardsContainer>
        ) : (
          <CardsContainer>
            <p>No matching results.</p>
          </CardsContainer>
        )}
      </main>
    </div>
  )
}

export default App

// Pending Tasks
// Work first mobile
// Apply Jotai for global states
// Organize project folders
// Use a global state to handle the search results and avoid prop drilling
