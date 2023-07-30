import styled from 'styled-components'

const SwitchWrapper = styled.label`
  margin: 0 8px 0 auto;
  position: fixed;
  top: 74px;
  left: 30px;
  width: 60px;
  height: 28px;
  cursor: pointer;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    top: 0;
    left: 4px;
    width: 48px;
  }
`

const SwitchInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`

const SwitchSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.light};
  box-shadow: 0 0 6px ${(props) => props.theme.mainTxt};
  border-radius: 2px 2px 12px 12px;
  transition: 0.4s;

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.dark};
    top: 4px;
    left: 8px;
    transition: 0.4s;

    @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
      left: 4px;
    }
  }

  ${SwitchInput}:checked + & {
    background-color: ${(props) => props.theme.dark};
  }

  ${SwitchInput}:checked + &:before {
    transform: translateX(22px);
    background-color: ${(props) => props.theme.light};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    ${SwitchInput}:checked + &:before {
      transform: translateX(16px);
      background-color: ${(props) => props.theme.light};
    }
  }
`

export { SwitchWrapper, SwitchInput, SwitchSlider }
