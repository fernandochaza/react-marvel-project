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

  @media screen and (max-width: ${props => props.theme.breakpointSm}){

  }
`

export { StyledListContainer }
