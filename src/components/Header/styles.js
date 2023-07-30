import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  height: 72px;
  align-items: center;
  background-color: ${(props) => props.theme.mainBg};
  box-shadow: 0 2px 4px ${(props) => props.theme.accentBg};
  margin-bottom: 4px;
  transition:
    background-color 0.75s ease,
    box-shadow 0.3s ease;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    flex-direction: column;
    height: 116px;
    width: 100%;
    justify-content: space-evenly;
  }
`

const VerticalDivision = styled.div`
  border-left: 1px solid transparent;
  box-shadow: 0 0 4px ${(props) => props.theme.mainTxt};
  height: 32px;
  margin-right: 40px;

  @media screen and (max-width: ${(props) => props.theme.breakpointMd}) {
    display: none;
  }
`

export { StyledHeader, VerticalDivision }
