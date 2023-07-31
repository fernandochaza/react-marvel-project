import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  width: 100%;
  height: 72px;
  align-items: center;
  background-color: ${(props) => props.theme.mainBg};
  box-shadow: 0 3px 4px ${(props) => props.theme.accentBg};
  margin-bottom: 4px;
  transition:
    background-color 0.75s ease,
    box-shadow 0.75s ease;

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
