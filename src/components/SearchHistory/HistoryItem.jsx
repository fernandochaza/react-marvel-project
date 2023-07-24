import { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSetAtom } from 'jotai'

import { GoHistory } from 'react-icons/go'
import { RxCross1 } from 'react-icons/rx'

import { searchHistory, userInput } from '../../atoms'
import { deleteSearchHistoryItem } from '../../Utils/deleteSearchHistoryItem'

const ItemContainer = styled.span`
  cursor: pointer;
`

const DeleteButtonContainer = styled.span`
  margin: 0 0 0 auto;
`

const DeleteButton = styled(RxCross1)`
  cursor: pointer;
`

export const HistoryItem = ({ text }) => {
  const setSearchHistory = useSetAtom(searchHistory)
  const setInputValue = useSetAtom(userInput)

  const handleDeleteItem = useCallback((itemToDelete) => {
    const newSearchHistory = deleteSearchHistoryItem(itemToDelete)
    setSearchHistory(newSearchHistory)
  })

  const handleSetInput = useCallback((itemToSearch) => {
    setInputValue(itemToSearch)
  })

  return (
    <>
      <ItemContainer onClick={() => handleSetInput(text)}>
        <GoHistory /> {text}
      </ItemContainer>
      <DeleteButtonContainer>
        <DeleteButton onClick={() => handleDeleteItem(text)} />
      </DeleteButtonContainer>
    </>
  )
}

HistoryItem.propTypes = {
  text: PropTypes.string.isRequired
}
