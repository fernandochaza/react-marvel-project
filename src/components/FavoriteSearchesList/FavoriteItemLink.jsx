import PropTypes from 'prop-types'
import styled from 'styled-components'

import { GoHistory } from 'react-icons/go'
import { RxCross1 } from 'react-icons/rx'
import { deleteFavorite } from '../../Utils/deleteLocalFavorite'
import { useCallback } from 'react'
import { useSetAtom } from 'jotai'
import { favoriteSearches, userInput } from '../../atoms'

const DeleteFavorite = styled.span`
  margin: 0 0 0 auto;
`

const FavoriteItem = styled.span`
  cursor: pointer;
`

const DeleteButton = styled(RxCross1)`
  cursor: pointer;
`

export const FavoriteItemLink = ({ text }) => {
  const setFavorites = useSetAtom(favoriteSearches)
  const setInput = useSetAtom(userInput)

  const handleDeleteFavorite = useCallback((itemToDelete) => {
    const newFavorites = deleteFavorite(itemToDelete)
    setFavorites(newFavorites)
  })

  const handleSearchFavorite = useCallback((itemToSearch) => {
    setInput(itemToSearch)
  })

  return (
    <>
      <FavoriteItem onClick={() => handleSearchFavorite(text)}>
        <GoHistory /> {text}
      </FavoriteItem>
      <DeleteFavorite>
        <DeleteButton onClick={() => handleDeleteFavorite(text)} />
      </DeleteFavorite>
    </>
  )
}

FavoriteItemLink.propTypes = {
  text: PropTypes.string.isRequired
}
