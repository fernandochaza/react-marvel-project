import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  place-items: center;
  max-width: 1180px;
  min-height: calc(100vh - 167px);
  margin-top: 72px;
  background-color: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.accent1Color};
  transition: background-color 0.75s ease;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    margin-top: 116px;
    min-height: calc(100vh - 211px);
  }
`

const StyledMessage = styled.h2`
  width: 100%;
  font-size: 3rem;
  text-align: center;
`

export { StyledContainer, StyledMessage }