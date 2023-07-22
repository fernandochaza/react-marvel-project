export const deleteFavorite = (itemToDelete) => {
  const storedFavorites = localStorage.getItem('favoriteSearches')
  const favorites = JSON.parse(storedFavorites)

  const updatedFavorites = favorites.filter((item) => item !== itemToDelete)
  localStorage.setItem('favoriteSearches', JSON.stringify(updatedFavorites))
  return updatedFavorites
}
