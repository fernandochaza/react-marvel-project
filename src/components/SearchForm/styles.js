import styled from 'styled-components'

const StyledForm = styled.form`
  min-width: 400px;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4px auto 0 auto;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    min-width: 280px;
    margin: 0 auto;
  }
`

const StyledInputContainer = styled.div`
  display: flex;
  box-shadow: 0 0 2px ${(props) => props.theme.mainBorder};
  border-radius: 8px;
  min-width: 400px;
  max-width: 600px;
  height: 48px;
  padding-left: 8px;
  margin-right: 40px;
  position: relative;
  background-color: ${(props) => props.theme.accentBg};
  transition: background-color 0.75s ease;

  &:focus-within {
    box-shadow: 0 0 4px 0 ${(props) => props.theme.accent1Color};
    transition: border 0.7s ease;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    min-width: 280px;
    margin: 0;
    padding-left: 8px;
  }
`

const StyledInput = styled.input`
  font-family: 'SF UI Text', system-ui, sans-serif;
  width: 90%;
  border: none;
  outline: none;
  padding-top: 6px;
  font-size: 1rem;
  background-color: ${(props) => props.theme.accentBg};
  color: ${(props) => props.theme.mainTxt};
  transition:
    background-color 0.75s ease,
    color 0.75s ease;

  &::placeholder {
    color: ${(props) => props.theme.secondaryTxt};
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
    top: -8px;
    font-size: 0.9rem;
    padding: 0 8px;

    &::after {
      content: '';
    }
  }

  &:not(:placeholder-shown) + label::before,
  &:focus + label::before {
    padding-bottom: 4px;
    background-color: ${(props) => props.theme.mainBg};
    box-shadow: 0 0 4px 0 ${(props) => props.theme.accent1Color};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    border-radius: 8px;
  }
`

const StyledLabel = styled.label`
  position: absolute;
  left: 8px;
  top: 16px;
  z-index: 1;
  color: ${(props) => props.theme.mainTxt};

  &::after {
    content: '...';
  }

  &::before {
    content: '';
    height: 16px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.accentBg};
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
    transition: background-color 0.75s ease-out;
  }
`

const StyledSubmitButton = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  filter: opacity(50%);
  transition: filter 0.3s ease-in;

  &:hover {
    filter: opacity(75%);
  }

  &:focus {
    filter: opacity(75%);
  }
`

export {
  StyledForm,
  StyledInput,
  StyledInputContainer,
  StyledSubmitButton,
  StyledLabel
}
