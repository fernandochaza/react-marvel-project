import { useCallback, useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'

import { urlBuilder } from './urlBuilder'

const StyledSearchBar = styled.form`
  width: 70%;
  max-width: 900px;
  display: flex;
  align-items: center;
  margin: auto auto;
`

const Input = styled.input`
  border: 1px solid rgba(1, 1, 1, 0.1);
  border-radius: 8px;
  width: 100%;
  height: 36px;
  padding-left: 8px;
  margin: 0 20px;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: box-shadow 0.3s ease;
  }

  &::placeholder {
    color: rgb(214, 211, 211);
  }
`
const SearchIcon = styled(BsSearch)`
  margin: 0 auto;
  width: 24px;
  height: 100%;
  min-width: 24px;
  filter: opacity(15%);
`

export const SearchBar = ({ setSearchResults, setCardsData, ...props }) => {
  const [searchString, setSearchString] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const api = 'http://gateway.marvel.com/v1/public/characters?'
  const apiKey = 'f4e63a51401e5c498e1740d446ae8f5d'

  const url = urlBuilder(api, apiKey, searchString, 9)

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
    <StyledSearchBar className='input-container' {...props}>
      <SearchIcon id='search-icon' />
      <Input
        type='text'
        placeholder='Buscar'
        value={searchString}
        onChange={(event) => handleInputChange(event.target.value)}
        onKeyDown={handleEnterKey}
      />
      <button type='submit' style={{ display: 'none' }}></button>
    </StyledSearchBar>
  )
}

SearchBar.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
  setCardsData: PropTypes.func.isRequired
}
