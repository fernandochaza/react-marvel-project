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
  height: calc(100vh - 74px);
  place-content: center;
  background-color: ${(props) => props.theme.mainBg};
  transition: background-color 0.75s ease;
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
