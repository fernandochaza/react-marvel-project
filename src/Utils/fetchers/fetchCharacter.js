import { getStoredResponse } from '../getStoredResponse'

export const fetchCharacter = async ({
  api,
  apiKey,
  query,
  limit,
  offset = 0,
  etag = null
}) => {
  try {
    let response
    let url = `${api}&nameStartsWith=${query}&limit=${limit}&apikey=${apiKey}`

    if (offset > 0) {
      url += `&offset=${offset}`
    }

    if (etag) {
      const headers = new Headers()
      headers.append('If-None-Match', etag)

      response = await fetch(url, {
        method: 'GET',
        headers
      })
    } else {
      response = await fetch(url)
    }

    if (response.status === 304) {
      const storedResponse = getStoredResponse(query)

      return storedResponse
    }

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

    return data
  } catch (error) {
    console.error('Error fetching data:', error.message)
    throw error
  }
}
