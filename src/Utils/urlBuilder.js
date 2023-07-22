export const urlBuilder = (url, apiKey, param, query, limit) => {
  let urlBuilt = url
  urlBuilt += `${param}${query}&limit=${limit}&apikey=${apiKey}`
  return urlBuilt
}
