import md5 from 'md5'

export const fetchComicsByCharacter= async ({ apiKey, characterId, comic, limit }) => {
  const timestamp = new Date().getTime().toString();
  const privateKey = import.meta.env.VITE_PRIVATE_API_KEY
  const publicKey = import.meta.env.VITE_API_KEY

  const hash = md5(timestamp + privateKey + publicKey);

  const url = `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?titleStartsWith=${comic}&ts=${timestamp}&hash=${hash}&limit=${limit}&apikey=${apiKey}`
  const response = await fetch(url)
  const data = await response.json()

  return data.data.results
}
