import { useState } from 'react'
import { CharacterCard } from './components/CharacterCard'
import { CardsContainer } from './components/CardsContainer'
import { Header } from './components/Header'
import './App.css'

function App () {
  const [cardsData, setCardsData] = useState([])
  return (
    <div className='App'>
      <Header setCardsData={setCardsData} />
      <main>
        <CardsContainer characters={cardsData}>
          {cardsData && cardsData.length > 0
            ? cardsData.map((character) => {
                return (
                  <CharacterCard key={character.id} character={character} />
                )
              })
            : null}
        </CardsContainer>
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
