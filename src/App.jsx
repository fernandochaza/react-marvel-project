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
      path: '/',
      element: <Header />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <CardsView />
        },
        {
          path: 'comic/:comicId',
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
