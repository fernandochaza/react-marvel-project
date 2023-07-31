import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  place-items: center;
  min-height: calc(100vh - 177px);
  margin-top: 72px;
  background-color: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.mainTxt};
  transition: background-color 0.75s ease;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    margin-top: 116px;
    min-height: calc(100vh - 221px);
  }
`

const StyledMessage = styled.h2`
  width: 100%;
  font-size: 3rem;
  text-align: center;
  text-shadow: 1px 1px 4px ${(props) => props.theme.accent1Color};

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    font-size: 2rem;
  }
`

export { StyledContainer, StyledMessage }
