import styled from 'styled-components'
import { BsSearch, BsStar } from 'react-icons/bs'

import useFetchCharacters from '../hooks/useFetchCharacters'

const StyledForm = styled.form`
  width: 70%;
  max-width: 900px;
  display: flex;
  align-items: center;
  margin: auto auto;
`

const Input = styled.input`
  border: 1px solid rgba(1, 1, 1, 0.1);
  border-radius: 8px;
  width: 100%;
  height: 36px;
  padding-left: 8px;
  margin: 0 20px;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: box-shadow 0.3s ease;
  }

  &::placeholder {
    color: rgb(214, 211, 211);
  }
`
const SearchIcon = styled(BsSearch)`
  margin: 0 auto;
  width: 24px;
  height: 100%;
  min-width: 24px;
  filter: opacity(15%);
`

const FavoriteStar = styled(BsStar)`
  margin: 0 auto;
  width: 24px;
  min-width: 24px;
  height: 100%;
  filter: opacity(15%);
`

export const SearchForm = () => {
  const [handleInputChange, handleEnterKey, inputString] = useFetchCharacters()

  return (
    <StyledForm>
      <SearchIcon />
      <Input
        type='text'
        placeholder='Buscar'
        value={inputString}
        onChange={(event) => handleInputChange(event.target.value)}
        onKeyDown={handleEnterKey}
      />
      <button type='submit' style={{ display: 'none' }}></button>
      <FavoriteStar alt='Add to favorite button' />
    </StyledForm>
  )
}
