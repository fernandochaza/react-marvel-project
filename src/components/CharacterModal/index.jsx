import { useCallback } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { modalCharacter, modalVisibility } from '../../atoms'

import { ModalComicItem } from './ComicItem'

import {
  Background,
  ModalContainer,
  CloseButton,
  ListContainer,
  Title
} from './styles'

export const CharacterModal = () => {
  const [, setIsModalActive] = useAtom(modalVisibility)
  const currentCharacter = useAtomValue(modalCharacter)

  const handleCloseModal = useCallback(() => {
    setIsModalActive(false)
  }, [])

  return (
    <Background>
      <ModalContainer>
        <CloseButton onClick={handleCloseModal} />
        <Title>{currentCharacter.name}</Title>
        <ListContainer>
          {currentCharacter.comics.items.length > 0 ? (
            currentCharacter.comics.items.map((comic) => {
              return (
                <ModalComicItem
                  key={comic.resourceURI}
                  comicUrl={comic.resourceURI}
                  character={currentCharacter}
                ></ModalComicItem>
              )
            })
          ) : (
            <h3>Sorry, there are not available comics to display</h3>
          )}
        </ListContainer>
      </ModalContainer>
    </Background>
  )
}
