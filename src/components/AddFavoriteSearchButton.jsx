import { useAtomValue } from 'jotai'
import { useCallback } from 'react'
import { BsStar } from 'react-icons/bs'
import styled from 'styled-components'
import { userInput } from '../atoms'

const FavoriteStar = styled(BsStar)`
  margin: 0 auto;
  width: 24px;
  min-width: 24px;
  height: 100%;
  filter: opacity(15%);
`

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  padding: 0;
  display: flex;
  align-items: center;
`

export const AddFavoriteSearch = () => {
  const inputValue = useAtomValue(userInput)

  const handleFavoriteSearches = useCallback(() => {
    if (inputValue) {
      const storedFavorites = localStorage.getItem('favoriteSearches')
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : []
      if (!favorites.includes(inputValue)) {
        const updatedFavorites = [...favorites, inputValue]
        localStorage.setItem(
          'favoriteSearches',
          JSON.stringify(updatedFavorites)
        )
      }
    }
  }, [inputValue])

  return (
    <StyledButton
      title='Add search to favorites'
      onClick={handleFavoriteSearches}
    >
      <FavoriteStar />
    </StyledButton>
  )
}
