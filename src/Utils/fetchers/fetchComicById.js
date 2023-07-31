import md5 from 'md5'

export const fetchComicById = async (comicId) => {
  const timestamp = new Date().getTime().toString()
  const privateKey = import.meta.env.VITE_PRIVATE_API_KEY
  const publicKey = import.meta.env.VITE_PUBLIC_API_KEY

  const hash = md5(timestamp + privateKey + publicKey)
  const url = `https://gateway.marvel.com/v1/public/comics/${comicId}?limit=2&ts=${timestamp}&hash=${hash}&apikey=${publicKey}`

  try {
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
    return data.data.results[0]
  } catch (error) {
    console.error('Error fetching comic:', error)
    throw error
  }
}
