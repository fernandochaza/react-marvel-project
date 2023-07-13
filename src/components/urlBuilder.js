export const urlBuilder = (url, apiKey, searchString, limit) => {
  let urlBuilt = url
  urlBuilt += `nameStartsWith=${searchString}&limit=${limit}&apikey=${apiKey}`
  return urlBuilt
}
