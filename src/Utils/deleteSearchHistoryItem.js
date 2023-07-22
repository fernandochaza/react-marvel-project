export const deleteSearchHistoryItem = (itemToDelete) => {
  const storedHistory = localStorage.getItem('searchHistory')
  const searchHistory = JSON.parse(storedHistory)

  const updatedSearchHistory = searchHistory.filter((item) => item !== itemToDelete)
  localStorage.setItem('searchHistory', JSON.stringify(updatedSearchHistory))
  return updatedSearchHistory
}
