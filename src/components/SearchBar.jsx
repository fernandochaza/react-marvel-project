import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const SearchBar = () => {
  const [input, setInput] = useState('')

  const url = 'http://gateway.marvel.com/v1/public/characters?'
  const apiKey = '&apikey=f4e63a51401e5c498e1740d446ae8f5d'
  const limit = '&limit=10'

  async function fetchData (searchString) {
    const fetchURL = `${url}nameStartsWith=${searchString}${limit}${apiKey}`
    const response = await fetch(fetchURL)
    const data = response.json()
    console.log(data)
  }

  const handleChange = (searchString) => {
    setInput(searchString)
    fetchData(searchString)
  }

  return (
    <div className='input-container'>
      <FaSearch id='search-icon' />
      <input
        type='text'
        placeholder='Buscar'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}
