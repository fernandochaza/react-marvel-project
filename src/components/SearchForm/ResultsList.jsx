import PropTypes from 'prop-types'

import { StyledListContainer } from './ResultsListStyles'

export const ResultsList = ({ results }) => {
  return (
    <StyledListContainer>
      <ul>
        {results && results.length > 0
          ? results.map((result) => {
              return <li key={result.id}>{result.name}</li>
            })
          : null}
      </ul>
    </StyledListContainer>
  )
}

ResultsList.propTypes = {
  results: PropTypes.array.isRequired
}
