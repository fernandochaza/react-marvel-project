import { useState } from 'react'
import { CharacterCard } from './components/CharacterCard'
import { CardsContainer } from './components/CardsContainer'
import { Header } from './components/Header'
import './App.css'

function App () {
  const [cardsData, setCardsData] = useState([])

  console.log('Mounting App...')

  return (
    <div className='App'>
      <Header setCardsData={setCardsData} />
      <CardsContainer characters={cardsData}>
        {cardsData && cardsData.length > 0
          ? cardsData.map((character) => {
              return <CharacterCard key={character.id} character={character} />
            })
          : null}
      </CardsContainer>
    </div>
  )
}

export default App
