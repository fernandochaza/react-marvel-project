import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledListContainer = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  background-color: #d5d4d5;
  box-shadow: 0 0 8px #ddd;
  border-radius: 8px;
  max-height: 300px;
  overflow-y: auto;
`

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
