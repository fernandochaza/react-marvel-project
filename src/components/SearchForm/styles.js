import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'

const StyledForm = styled.form`
  min-width: 400px;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointMd}) {
    min-width: 360px;
  }
`

const Input = styled.input`
  width: 90%;
  border: none;
  outline: none;

  &::placeholder {
    color: rgb(214, 211, 211);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    border-radius: 8px;
  }
`

const InputContainer = styled.div`
  display: flex;
  border: 1px solid rgba(1, 1, 1, 0.1);
  border-radius: 8px;
  min-width: 400px;
  max-width: 600px;
  height: 40px;
  padding-left: 8px;
  margin-right: 40px;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: box-shadow 0.3s ease;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    margin: 0;
    padding-left: 8px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointMd}) {
    min-width: 360px;
    margin-right: 12px;
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
export { StyledForm, Input, InputContainer, SubmitButton, SearchIcon }
