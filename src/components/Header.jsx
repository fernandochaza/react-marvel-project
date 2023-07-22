import styled from 'styled-components'

import { SearchForm } from './SearchForm'
import { ResultsList } from './ResultsList'
import { Logo } from './Logo'
import { useAtom } from 'jotai'
import { matchingResults } from '../atoms'
import { BsSearch } from 'react-icons/bs'
// import { AddFavoriteSearch } from './AddFavoriteSearchButton'

const StyledHeader = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(197, 197, 197, 0.5);

  @media screen and (max-width: 600px){
    flex-direction: column;
  }
`

const VerticalDivision = styled.div`
  border-left: 2px solid rgba(0, 0, 0, 0.06);
  height: 32px;
  margin: ${(props) => (props.$mgRight ? '0 32px 0 0' : '0 auto')};
`

const SearchIcon = styled(BsSearch)`
  margin: 0 auto;
  width: 24px;
  height: 100%;
  min-width: 24px;
  filter: opacity(15%);
`

export const Header = () => {
  const [searchResults] = useAtom(matchingResults)
  return (
    <StyledHeader>
      <Logo
        src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg'
        alt='Marvel Logo'
      />
      <VerticalDivision />
      <SearchIcon />
      <SearchForm />
      {/* <AddFavoriteSearch alt='Add to favorite button' /> */}
      <VerticalDivision $mgRight />
      <ResultsList results={searchResults} />
    </StyledHeader>
  )
}
