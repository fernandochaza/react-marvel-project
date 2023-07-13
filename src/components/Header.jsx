import { useState } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SearchBar } from './SearchBar'
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
  margin: ${(props) => (props.$right ? '0 auto' : '0')};
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
      <SearchBar
        setSearchResults={setSearchResults}
        setCardsData={setCardsData}
      />
      <ResultList results={searchResults} />
      {/* </div>
      <a href="#"><img className="star-icon" src="star.png" alt="Add to favorite icon" /></a> */}
      <Separator $right/>
    </StyledHeader>
  )
}

Header.propTypes = {
  setCardsData: PropTypes.func.isRequired
}
