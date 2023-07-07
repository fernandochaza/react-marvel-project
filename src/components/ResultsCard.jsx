import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AiOutlineStar } from 'react-icons/ai'

export const ResultsCard = ({ character }) => {
  const img = `${character.thumbnail.path}.${character.thumbnail.extension}`
  console.log(img)
  return (
    <article className="results-card">
      <img src={img} alt={character.name} />
      <div className="card-background"></div>
      <a href="#"> <AiOutlineStar id="star-icon" alt="Add to favorite icon" /></a>
      <span>{character.name}</span>
    </article>
  )
}

ResultsCard.propTypes = {
  character: PropTypes.object.isRequired
}
