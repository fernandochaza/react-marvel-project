import { useEffect } from 'react'

import { useAtom, useAtomValue } from 'jotai'
import {
  charactersResults,
  handleApiError,
  loadingCards,
  modalVisibility,
  refreshPage
} from '../../atoms'

import { CharacterModal } from '../CharacterModal'
import { CardsPagination } from './CardsPagination'
import Footer from '../Footer'
import MainMessage from '../Generic/MainMessage'

export const CardsView = () => {
  const searchResults = useAtomValue(charactersResults)
  const apiError = useAtomValue(handleApiError)
  const [isModalActive, setIsModalActive] = useAtom(modalVisibility)
  const isLoading = useAtomValue(loadingCards)
  const isRefreshPage = useAtomValue(refreshPage)

  useEffect(() => {
    if (isRefreshPage) {
      setIsModalActive(false)
    }
  }, [])

  return (
    <>
      {isLoading ? (
        <MainMessage>Loading...</MainMessage>
      ) : apiError !== null ? (
        apiError.includes('Daily request limit exceeded') ? (
          <MainMessage>
            We&apos;ve reached the daily limit of requests allowed by Marvel.
            <br /> Don&apos;t worry, you can still explore more characters
            tomorrow!
            <br /> Thank you for visiting!
          </MainMessage>
        ) : (
          <MainMessage>
            We are experiencing problems retrieving the data
          </MainMessage>
        )
      ) : searchResults && searchResults.length > 0 ? (
        <CardsPagination />
      ) : (
        <MainMessage>We didn&apos;t find matching results</MainMessage>
      )}
      {isModalActive && <CharacterModal></CharacterModal>}
      <Footer />
    </>
  )
}
