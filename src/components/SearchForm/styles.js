import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'

const StyledForm = styled.form`
  width: 50%;
  min-width: 400px;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;

  &::placeholder {
    color: rgb(214, 211, 211);
  }
`

const InputContainer = styled.div`
  display: flex;
  margin: 0 20px 0 0;
  border: 1px solid rgba(1, 1, 1, 0.1);
  border-radius: 8px;
  width: 100%;
  min-width: 400px;
  max-width: 800px;
  height: 40px;
  padding-left: 8px;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: box-shadow 0.3s ease;
  }
`

const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
`

const SearchIcon = styled(BsSearch)`
  margin: 0 16px;
  width: 24px;
  height: 100%;
  cursor: pointer;
  filter: opacity(15%);
`
export {StyledForm, Input, InputContainer, SubmitButton, SearchIcon}