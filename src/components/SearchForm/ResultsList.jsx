import { forwardRef, useCallback } from 'react'
import PropTypes from 'prop-types'

import { useSetAtom } from 'jotai'
import { userInput } from '../../atoms'

import { StyledListContainer, StyledListItem } from './ResultsListStyles'

export const ResultsList = forwardRef(({ results, ...props }, ref) => {
 const setInput = useSetAtom(userInput)

 const handleClick = useCallback((selectedResult) => {
  setInput(selectedResult)
 }, [])

  return (
    <StyledListContainer>
      {results && results.length > 0
        ? results.map((result) => {
            return (
              <StyledListItem key={result.id} onClick={() => handleClick(result.name)}>{result.name}</StyledListItem>
            )
          })
        : null}
    </StyledListContainer>
  )
})

ResultsList.propTypes = {
  results: PropTypes.array
}


ResultsList.displayName = 'ResultsList';