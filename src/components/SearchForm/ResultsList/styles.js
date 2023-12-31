import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  background-color: ${(props) => props.theme.accentBg};
  color: ${(props) => props.theme.mainTxt};
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.mainTxt} 0px 1px 4px;

  position: absolute;
  top: 64px;
  z-index: 4;

  min-width: 408px;
  max-width: 608px;
  max-height: 200px;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    top: 106px;
    min-width: 288px;
    max-width: 288px;
  }
`

const StyledListContainer = styled.ul`
  margin: 0;
  padding-left: 10px;

  overflow-y: auto;
  list-style: none;

  /* WebKit (Chrome, Safari, etc.) */
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.accent1Color};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.mainBg};
  }

  /* Firefox */
  &::-moz-scrollbar {
    width: 8px;
  }

  &::-moz-scrollbar-thumb {
    background-color: ${(props) => props.theme.accent1Color};
    border-radius: 4px;
  }

  &::-moz-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.mainBg};
  }

  /* Microsoft (Edge, Internet Explorer) */
  &::-ms-scrollbar {
    width: 8px;
  }

  &::-ms-scrollbar-thumb {
    background-color: ${(props) => props.theme.accent1Color};
    border-radius: 4px;
  }

  &::-ms-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.mainBg};
  }
`

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  padding-right: 16px;
  min-height: 40px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export { StyledDiv, StyledListContainer, StyledListItem }
