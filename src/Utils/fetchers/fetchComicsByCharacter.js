import md5 from 'md5'

export const fetchComicsByCharacter = async ({
  apiKey,
  characterId,
  comic,
  limit
}) => {
  const timestamp = new Date().getTime().toString()
  const privateKey = import.meta.env.VITE_PRIVATE_API_KEY
  const publicKey = import.meta.env.VITE_PUBLIC_API_KEY

  const hash = md5(timestamp + privateKey + publicKey)

  const url = `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?titleStartsWith=${comic}&ts=${timestamp}&hash=${hash}&limit=${limit}&apikey=${apiKey}`
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
    return data.data.results
  } catch (error) {
    console.error('Error fetching comic:', error)
    throw error
  }
}
