import PropTypes from 'prop-types'

import { useCallback, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const SearchBar = ({ setSearchResults, setCardsData }) => {
  const [searchString, setSearchString] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const url = 'http://gateway.marvel.com/v1/public/characters?'
  const apiKey = '&apikey=f4e63a51401e5c498e1740d446ae8f5d'
  const limit = '&limit=10'

  useEffect(() => {
    const fetchData = async () => {
      if (searchString !== '') {
        const fetchURL = `${url}nameStartsWith=${searchString}${limit}${apiKey}`
        const response = await fetch(fetchURL)
        const data = await response.json()

        setSearchResults(data.data.results)

        if (isSubmitted) {
          setCardsData(data.data.results)
          setIsSubmitted(false)
        }
      }
    }

    const timer = setTimeout(fetchData, 2000)

    return () => clearTimeout(timer)
  }, [searchString, isSubmitted])

  const handleChange = useCallback((searchString) => {
    setSearchString(searchString)
  }, [])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setIsSubmitted(true)
    }
  }, [])

  return (
    <form className='input-container'>
      <FaSearch id='search-icon' />
      <input
        type='text'
        placeholder='Buscar'
        value={searchString}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type='submit' style={{ display: 'none' }}></button>
    </form>
  )
}

SearchBar.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
  setCardsData: PropTypes.func.isRequired
}
