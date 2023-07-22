import styled from 'styled-components'

import { useAtom } from 'jotai'
import { matchingResults } from '../atoms'

import { SearchForm } from './SearchForm'
import { ResultsList } from './ResultsList'
import { Logo } from './Logo'

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
  margin-right: 40px;
`

export const Header = () => {
  const [searchResults] = useAtom(matchingResults)
  return (
    <StyledHeader>
      <Logo
        src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg'
        alt='Marvel Logo'
      />
      <SearchForm />
      <ResultsList results={searchResults} />
      <VerticalDivision />
    </StyledHeader>
  )
}
