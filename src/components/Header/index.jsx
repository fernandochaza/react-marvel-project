import { useAtom } from 'jotai'
import { matchingResults } from '../../atoms'

import { SearchForm } from '../SearchForm'
import { Logo } from './Logo'
import { ResultsList } from '../SearchForm/ResultsList'

import { StyledHeader, VerticalDivision } from './styles'
import { Outlet } from 'react-router-dom'

export const Header = () => {
  const [searchResults] = useAtom(matchingResults)
  return (
    <>
      <StyledHeader>
        <Logo
          src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg'
          alt='Marvel Logo'
        />
        <SearchForm />
        <ResultsList results={searchResults} />
        <VerticalDivision />
      </StyledHeader>
      <Outlet />
    </>
  )
}
