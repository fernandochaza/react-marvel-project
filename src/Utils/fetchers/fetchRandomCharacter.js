import { urlBuilder } from '../urlBuilder'

export const fetchRandomCharacter = async ({ api, apiKey, query, limit }) => {
  const url = urlBuilder(api, apiKey, 'nameStartsWith=', query, limit)
  const response = await fetch(url)
  const data = await response.json()

  return data.data.results
}
