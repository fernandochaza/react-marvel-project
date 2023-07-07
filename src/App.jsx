import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { ResultList } from './components/ResultsList'
import { ResultsCard } from './components/ResultsCard'

function App () {
  const [searchResults, setSearchResults] = useState([])

  return (
    <div className='App'>
      <div className='search-bar-container'>
        <SearchBar setSearchResults={setSearchResults} />
        <ResultList results={searchResults} />
        {searchResults && searchResults.length > 0
          ? searchResults.map((result) => {
              return <ResultsCard key='1' character={result} />
            })
          : null}
      </div>
    </div>
  )
}

export default App
