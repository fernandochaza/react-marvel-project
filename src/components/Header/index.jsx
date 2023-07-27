import { SearchForm } from '../SearchForm'
import { Logo } from './Logo'

import { StyledHeader, VerticalDivision } from './styles'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Header = () => {
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
        <VerticalDivision />
      </StyledHeader>
      <Outlet />
    </>
  )
}
