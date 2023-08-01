export const getComicInfo = (comicData) => {
  const { title, description, dates, thumbnail, creators } = comicData || {}

  const date = dates?.[0]?.date || 'Not available'
  let comicRelease
  if (date) {
    const dateObj = new Date(date)
    comicRelease = dateObj.toISOString().split('T')[0]
  }

  const removeUl = description?.replace(/<ul>|<\/ul>/g, '')
  const cleanDescription = removeUl?.replace(/<li>|<\/li>/g, ' ')

  const penciler = creators.items
    .filter(
      (creator) =>
        creator.role.toLowerCase().includes('penciler') ||
        creator.role.toLowerCase().includes('penciller')
    )
    .map((creator) => creator.name)

  const writer = creators.items
    .filter((creator) => creator.role.toLowerCase().includes('writer'))
    .map((creator) => creator.name)

  const coverArtist = creators.items
    .filter((creator) => creator.role.toLowerCase().includes('cover'))
    .map((creator) => creator.name)

  const imgSrc = `${thumbnail?.path.replace('http://', 'https://')}/detail.${
    thumbnail?.extension
  }`

  return {
    title,
    comicRelease,
    cleanDescription,
    penciler,
    writer,
    coverArtist,
    imgSrc,
    date
  }
}
