import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'

import { useAtomValue } from 'jotai'
import { currentTheme } from './atoms'

import { Header } from './components/Header'
import { CardsView } from './components/CardsView'
import { ComicView } from './components/ComicView'
import { ErrorPage } from './components/Generic/ErrorPage'
import ThemeSwitcher from './components/Generic/ThemeSwitcher'

import './App.css'

const StyledDiv = styled.div`
  height: 100%;
  min-height: calc(100vh - 72px);
  place-content: center;
  background-color: ${(props) => props.theme.mainBg};
  transition: background-color 0.75s ease;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    min-height: calc(100vh - 116px);
  }
`

function App() {
  const theme = useAtomValue(currentTheme)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <CardsView />
        },
        {
          path: '/favoriteCards',
          element: <CardsView />
        },
        {
          path: '/comic/:comicId',
          element: <ComicView />
        },
        {
          // This route is used when there aren't matching routes.
          // Create a NotFound component to display a personalized error message
          // path: '*',
          // element: <NotFound />
        }
      ]
    }
  ])

  return (
    <ThemeProvider theme={theme}>
      <StyledDiv className='App'>
        <RouterProvider router={router} />
        <ThemeSwitcher />
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
