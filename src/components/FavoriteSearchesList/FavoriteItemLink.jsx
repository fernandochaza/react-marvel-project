import PropTypes from 'prop-types'

import { GoHistory } from 'react-icons/go'


export const FavoriteItemLink = ({ text }) => {
  return (
    <span>
      <GoHistory /> {text}
    </span>
  )
}

FavoriteItemLink.propTypes = {
  text: PropTypes.string.isRequired
}