import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { CardsView } from './components/CardsView'
import { Header } from './components/Header'
import { ErrorPage } from './components/ErrorPage'
import { ComicView } from './components/ComicView'

import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

function App() {
  const router = createBrowserRouter([
    {
      path: '/react-marvel-project/',
      element: <Header />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/react-marvel-project/',
          element: <CardsView />
        },
        {
          path: '/react-marvel-project/comic/:comicId',
          element: <ComicView />
        }
      ]
    }
  ])

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  )
}

export default App
