export const fetchCharacter = async ({ api, apiKey, query, limit, offset=0 }) => {
  try {
    let url = `${api}&nameStartsWith=${query}&limit=${limit}&apikey=${apiKey}`

    if (offset > 0) {
      url += `&offset=${offset}`
    }

    const mockData = './data.json'

    const response = await fetch(mockData)

    console.log(response)

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

    return data.data
  } catch (error) {
    console.error('Error fetching data:', error.message)
    throw error
  }
}
