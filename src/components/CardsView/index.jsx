import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useAtom, useAtomValue } from 'jotai'
import { charactersResults, handleApiError, modalVisibility } from '../../atoms'

import { CharacterCard } from '../CharacterCard'
import { CharacterModal } from '../CharacterModal'

import { CardsContainer } from './styles'

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
    <main className='cards-view'>
      {apiError === null ? (
        searchResults && searchResults.length > 0 ? (
          <CardsContainer>
            {searchResults.map((character) => {
              return <CharacterCard key={character.id} character={character} />
            })}
          </CardsContainer>
        ) : (
          <CardsContainer>
            <p>No matching results.</p>
          </CardsContainer>
        )
      ) : (
        <h1>API ERROR: {apiError}</h1>
      )}
      {isModalActive && <CharacterModal></CharacterModal>}
    </main>
  )
}
