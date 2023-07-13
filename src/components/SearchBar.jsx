import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'

import { urlBuilder } from './urlBuilder'

export const SearchBar = ({ setSearchResults, setCardsData }) => {
  const [searchString, setSearchString] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const api = 'http://gateway.marvel.com/v1/public/characters?'
  const apiKey = 'f4e63a51401e5c498e1740d446ae8f5d'

  const url = urlBuilder(api, apiKey, searchString, 10)

  useEffect(() => {
    const fetchData = async () => {
      if (searchString !== '') {
        const response = await fetch(url)
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

  const handleInputChange = useCallback((searchString) => {
    setSearchString(searchString)
  }, [])

  const handleEnterKey = useCallback((event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
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
        onChange={(event) => handleInputChange(event.target.value)}
        onKeyDown={handleEnterKey}
      />
      <button type='submit' style={{ display: 'none' }}></button>
    </form>
  )
}

SearchBar.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
  setCardsData: PropTypes.func.isRequired
}
