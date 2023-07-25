import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Main } from './components/CardsView'
import { Header } from './components/Header'
import { ErrorPage } from './components/ErrorPage'
import { ComicsView } from './components/ComicView'

import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Main />
        },
        {
          path: 'comic/:comicId',
          element: <ComicsView />
        }
      ]
    }
  ])

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

// Pending Tasks
// Work first mobile
// Organize project folders
