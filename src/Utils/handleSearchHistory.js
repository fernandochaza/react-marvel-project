export const handleSearchHistory = (userInput) => {
  if (userInput) {
    const storedHistory = localStorage.getItem('searchHistory')
    const searchHistory = storedHistory ? JSON.parse(storedHistory) : []
    if (!searchHistory.includes(userInput)) {
      const updatedSearchHistory = [...searchHistory, userInput]
      localStorage.setItem('searchHistory', JSON.stringify(updatedSearchHistory))
    }
  }
}
