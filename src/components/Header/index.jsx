import { useAtom } from 'jotai'
import { matchingResults } from '../../atoms'

import { SearchForm } from '../SearchForm'
import { Logo } from './Logo'
import { ResultsList } from '../SearchForm/ResultsList'

import { StyledHeader, VerticalDivision } from './styles'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [searchResults] = useAtom(matchingResults)
  const [isComicView, setIsComicView] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const isComicView = location.pathname.includes('/comic')
    setIsComicView(isComicView)
  }, [location.pathname])

  return (
    <>
      <StyledHeader>
        <Logo
          src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg'
          alt='Marvel Logo'
        />
        {!isComicView ? <SearchForm /> : ''}
        <ResultsList results={searchResults} />
        <VerticalDivision />
      </StyledHeader>
      <Outlet />
    </>
  )
}
