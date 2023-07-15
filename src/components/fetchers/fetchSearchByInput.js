import { urlBuilder } from '../urlBuilder'

export const fetchSearchByInput = async ({
  api,
  apiKey,
  query,
  limit
}) => {
  const url = urlBuilder(api, apiKey, query, limit)
  console.log('Fetching data...')
  console.log(url)

  const response = await fetch(url)
  const data = await response.json()

  return data.data.results
}
