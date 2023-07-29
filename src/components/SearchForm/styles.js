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
    min-width: 280px;
  }
`

const StyledInputContainer = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.accent2Color};
  border-radius: 8px;
  min-width: 400px;
  max-width: 600px;
  height: 40px;
  padding-left: 8px;
  margin-right: 40px;
  position: relative;

  &:focus-within {
    border: 1px solid ${(props) => props.theme.primaryColor};
    transition: border 0.7s ease;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    min-width: 280px;
    margin: 0;
    padding-left: 8px;
  }
`

const StyledInput = styled.input`
  width: 90%;
  border: none;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.accent2Color};
    opacity: 0;
  }

  &:focus::placeholder {
    transition: opacity 0.3s ease-in;
    opacity: 1;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    transition: all 0.2s ease-in;
    content: '';
    color: ${(props) => props.theme.secondaryColor};
    top: -10px;
    font-size: 0.9rem;
    padding: 0 8px;

    &::after {
      content: '';
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    border-radius: 8px;
  }
`

const StyledLabel = styled.label`
  position: absolute;
  left: 8px;
  top: 12px;
  z-index: 1;

  &::after {
    content: '...';
  }

  &::before {
    content: '';
    height: 5px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 8px;
    width: 100%;
    z-index: -1;
  }
`

const StyledSubmitButton = styled.button`
  background-color: transparent;
  border: none;
  filter: opacity(25%);
  transition: filter 0.3s ease-in;

  &:hover {
    filter: opacity(75%);
  }

  &:focus {
    filter: opacity(75%);
  }
`

const StyledSearchIcon = styled(BsSearch)`
  margin: 0 16px;
  width: 24px;
  height: 100%;
  cursor: pointer;
`
export {
  StyledForm,
  StyledInput,
  StyledInputContainer,
  StyledSubmitButton,
  StyledSearchIcon,
  StyledLabel
}
