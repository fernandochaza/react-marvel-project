export const getStoredEtag = (currentQuery) => {
  const storedQueries = localStorage.getItem('userQueries')
  const userQueries = storedQueries ? JSON.parse(storedQueries) : []
  const foundItem = userQueries.find((item) => item.query === currentQuery)
  if (foundItem) {
    const etag = foundItem.response.etag
    return etag
  } else {
    return null
  }
}
