import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'

function App () {
  const [searchResults, setSearchResults] = useState()

  return (
    <div className='App'>
      <div className='search-bar-container'>
        <SearchBar setSearchResults={setSearchResults} />
        <SearchResultsList results={searchResults} />
      </div>
    </div>
  )
}

export default App
