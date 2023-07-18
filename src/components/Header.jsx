import { useState } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SearchForm } from './SearchForm'
import { ResultList } from './ResultsList'
import { Logo } from './Logo'

const StyledHeader = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(197, 197, 197, 0.5);
`

const Separator = styled.div`
  border-left: 2px solid rgba(0, 0, 0, 0.06);
  height: 32px;
  margin: ${(props) => (props.$mgRight ? '0 32px' : '0 20px')};
`

export const Header = ({ setCardsData }) => {
  const [searchResults, setSearchResults] = useState([])
  return (
    <StyledHeader>
      <Logo
        src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg'
        alt='Marvel Logo'
      />
      <Separator />
      {/* <div className='search-bar-container'> */}
      <SearchForm
        setSearchResults={setSearchResults}
        setCardsData={setCardsData}
      />
      <ResultList results={searchResults} />
      <Separator $mgRight />
    </StyledHeader>
  )
}

Header.propTypes = {
  setCardsData: PropTypes.func.isRequired
}
