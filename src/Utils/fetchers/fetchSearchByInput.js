import { urlBuilder } from '../urlBuilder'

export const fetchSearchByInput = async ({ api, apiKey, param, query, limit }) => {
  const url = urlBuilder(api, apiKey, param, query, limit)
  const response = await fetch(url)
  const data = await response.json()

  return data.data.results
}
