import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { SearchForm } from '../SearchForm'
import { Logo } from './Logo'

import { StyledHeader, VerticalDivision } from './styles'

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
        <Logo />
        {!isComicView ? <SearchForm /> : ''}
        <VerticalDivision />
      </StyledHeader>
      <Outlet />
    </>
  )
}
