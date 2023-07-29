import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useAtom, useAtomValue } from 'jotai'
import { charactersResults, handleApiError, modalVisibility } from '../../atoms'

import { CharacterModal } from '../CharacterModal'
import { CardsPagination } from './CardsPagination'

import styled from 'styled-components'

const StyledContainer = styled.div`
    background-color: #fafafa;
`

export const CardsView = () => {
  const searchResults = useAtomValue(charactersResults)
  const apiError = useAtomValue(handleApiError)
  const [isModalActive, setIsModalActive] = useAtom(modalVisibility)
  const { state } = useLocation()

  useEffect(() => {
    // If the state "refresh" is true, it means the user clicked on the logo. Deactivate the modal
    if (state?.clickedLogo) {
      setIsModalActive(false)
    }
  }, [state])

  return (
    <StyledContainer>
      {apiError !== null ? (
        <h1>API ERROR: {apiError}</h1>
      ) : searchResults && searchResults.length > 0 ? (
        <CardsPagination />
      ) : (
        <h2>No matching results.</h2>
      )}
      {isModalActive && <CharacterModal></CharacterModal>}
    </StyledContainer>
  )
}
