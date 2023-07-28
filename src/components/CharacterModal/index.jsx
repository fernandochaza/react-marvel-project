import { useCallback } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { modalCharacter, modalVisibility } from '../../atoms'

import { ComicListItem } from './ComicItem'

import {
  StyledBackgroundDiv,
  StyledModalContainer,
  StyledCloseButton,
  StyledListContainer,
  StyledTitle
} from './styles'

export const CharacterModal = () => {
  const [, setIsModalActive] = useAtom(modalVisibility)
  const currentCharacter = useAtomValue(modalCharacter)

  const handleCloseModal = useCallback(() => {
    setIsModalActive(false)
  }, [])

  return (
    <StyledBackgroundDiv>
      <StyledModalContainer>
        <StyledCloseButton onClick={handleCloseModal} />
        <StyledTitle>{currentCharacter.name}</StyledTitle>
        <StyledListContainer>
          {currentCharacter.comics.items.length > 0 ? (
            currentCharacter.comics.items.map((comic) => {
              return (
                <ComicListItem
                  key={comic.resourceURI}
                  comicUrl={comic.resourceURI}
                  character={currentCharacter}
                ></ComicListItem>
              )
            })
          ) : (
            <h3>Sorry, there are not available comics to display</h3>
          )}
        </StyledListContainer>
      </StyledModalContainer>
    </StyledBackgroundDiv>
  )
}
