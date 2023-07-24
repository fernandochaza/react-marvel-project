export const fetchCharacter = async ({ api, apiKey, query, limit }) => {
  try {
    const url = `${api}&nameStartsWith=${query}&limit=${limit}&apikey=${apiKey}`
    const response = await fetch(url)

    if (response.status === 401) {
      throw new Error('Unauthorized: You need to provide a valid API key.')
    }

    if (response.status === 429) {
      throw new Error('Daily request limit exceeded')
    }

    if (!response.ok) {
      throw new Error('Failed to fetch data. Please try again later.')
    }

    const data = await response.json()
    return data.data.results
  } catch (error) {
    console.error('Error fetching data:', error.message)
    throw error
  }
}