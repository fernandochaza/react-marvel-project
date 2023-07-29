import styled from 'styled-components'

const StyledButton = styled('button').withConfig({
  shouldForwardProp: (prop) => prop !== 'positionX',
})`
  position: absolute;
  top: 46%;
  ${({ positionX }) => (positionX === 'left' ? 'left: 4px;' : 'right: 4px;')}
  background: none;
  border: none;
  width: 68px;
  height: 68px;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(2px 2px 2px);
  }
`

export { StyledButton }
