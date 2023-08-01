export const getStoredResponse = (currentQuery) => {
  const storedQueries = localStorage.getItem('userQueries')
  const userQueries = storedQueries ? JSON.parse(storedQueries) : []
  const foundItem = userQueries.find(item => item.query === currentQuery.toLowerCase());
  if (foundItem) {
    const response = foundItem.response
    return response
  }
}
