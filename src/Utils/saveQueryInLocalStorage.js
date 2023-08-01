export const saveQueryInLocalStorage = (currentQuery, response) => {
  const query = currentQuery.toLowerCase()
  const queryToSave = { query, response }
  const storedQueries = localStorage.getItem('userQueries')
  const userQueries = storedQueries ? JSON.parse(storedQueries) : []
  const foundItem = userQueries.find((item) => item.query === currentQuery.toLowerCase())
  if (!foundItem) {
    const updatedUserQueries = [...userQueries, queryToSave]
    localStorage.setItem('userQueries', JSON.stringify(updatedUserQueries))
  }
}
