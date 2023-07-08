import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { ResultList } from './components/ResultsList'
import { CharacterCard } from './components/CharacterCard'
import { CardsContainer } from './components/CardsContainer'

function App () {
  const [searchResults, setSearchResults] = useState([])
  const [cardsData, setCardsData] = useState([])

  return (
    <div className='App'>
      <div className='search-bar-container'>
        <SearchBar
          setSearchResults={setSearchResults}
          setCardsData={setCardsData}
        />
        <ResultList results={searchResults} />
      </div>
      <CardsContainer results={cardsData}>
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
