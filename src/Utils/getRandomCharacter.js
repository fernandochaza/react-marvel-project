const marvelCharacters = [
  'Iron Man',
  'Spider-Man',
  'Captain America',
  'Thor',
  'Hulk',
  'Black Widow',
  'Hawkeye',
  'Black Panther',
  'Doctor Strange',
  'Wolverine',
  'Deadpool',
  'Ant-Man',
  'Captain Marvel',
  'Scarlet Witch',
  'Vision',
  'Star-Lord',
  'Gamora',
  'Groot',
  'Rocket Raccoon',
  'Thanos'
]

const getRandomCharacter = () => {
  const randomIndex = Math.floor(Math.random() * marvelCharacters.length)
  return marvelCharacters[randomIndex]
}

export default getRandomCharacter
