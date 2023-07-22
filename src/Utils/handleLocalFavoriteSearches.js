export const handleFavoriteSearches = (userInput) => {
  if (userInput) {
    const storedFavorites = localStorage.getItem('favoriteSearches')
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : []
    if (!favorites.includes(userInput)) {
      const updatedFavorites = [...favorites, userInput]
      localStorage.setItem(
        'favoriteSearches',
        JSON.stringify(updatedFavorites)
      )
    }
  }
}
