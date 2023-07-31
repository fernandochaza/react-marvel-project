import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useAtom, useAtomValue } from 'jotai'
import { charactersResults, handleApiError, loadingCards, modalVisibility } from '../../atoms'

import { CharacterModal } from '../CharacterModal'
import { CardsPagination } from './CardsPagination'
import Footer from '../Footer'
import MainMessage from '../Generic/MainMessage'

export const CardsView = () => {
  const searchResults = useAtomValue(charactersResults)
  const apiError = useAtomValue(handleApiError)
  const [isModalActive, setIsModalActive] = useAtom(modalVisibility)
  const { state } = useLocation()
  const isLoading = useAtomValue(loadingCards)

  useEffect(() => {
    // If the state "refresh" is true, it means the user clicked on the logo. Deactivate the modal
    if (state?.clickedLogo) {
      setIsModalActive(false)
    }
  }, [state])

  return (
    <>
      {apiError !== null ? (
        <MainMessage>Sorry, we have an API error: <br/> {apiError}</MainMessage>
      ) : searchResults && searchResults.length > 0 ? (
        <CardsPagination />
      ) : (
      isLoading && <MainMessage>Loading...</MainMessage>
      )}
      {isModalActive && <CharacterModal></CharacterModal>}
      <Footer />
    </>
  )
}
