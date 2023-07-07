import { useCallback, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const SearchBar = () => {
  const [searchString, setSearchString] = useState('')

  const url = 'http://gateway.marvel.com/v1/public/characters?'
  const apiKey = '&apikey=f4e63a51401e5c498e1740d446ae8f5d'
  const limit = '&limit=10'

  useEffect(() => {
    const fetchData = async () => {
      if (searchString !== '') {
        const fetchURL = `${url}nameStartsWith=${searchString}${limit}${apiKey}`
        const response = await fetch(fetchURL)
        const data = await response.json()

        // Do something with the data
        console.log(data)
      }
    }

    fetchData()
  }, [searchString])

  const handleChange = useCallback((searchString) => {
    setSearchString(searchString)
  }, [])

  return (
    <div className='input-container'>
      <FaSearch id='search-icon' />
      <input
        type='text'
        placeholder='Buscar'
        value={searchString}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}
