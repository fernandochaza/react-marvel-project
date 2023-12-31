import styled from 'styled-components'
import { GrClose } from 'react-icons/gr'

const StyledBackgroundDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  z-index: 6;

  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
  }
`

const StyledModalContainer = styled.div`
  width: 480px;
  height: 480px;
  z-index: 5;

  position: fixed;
  border-radius: 16px;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: ${(props) => props.theme.secondaryBg};
  color: ${(props) => props.theme.mainTxt};
  transition: background-color .75s ease;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    width: 100%;
    height: 400px;
    padding: 0;
  }
`

const StyledListContainer = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 400px;
  overflow-y: auto;
  color: ${(props) => props.theme.mainTxt};
  transition: color .75s ease;


  /* WebKit (Chrome, Safari, etc.) */
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollbar};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.black};
  }

  /* Firefox */
  &::-moz-scrollbar {
    width: 8px;
  }

  &::-moz-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollbar};
    border-radius: 4px;
  }

  &::-moz-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.dark};
  }

  /* Microsoft (Edge, Internet Explorer) */
  &::-ms-scrollbar {
    width: 8px;
  }

  &::-ms-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollbar};
    border-radius: 4px;
  }

  &::-ms-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.dark};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    height: 310px;
    width: 94%;
    padding-left: 8px;
  }
`

const StyledCloseButton = styled(GrClose)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`

const StyledTitle = styled.h2`
  max-width: 90%;
  margin: 1rem 0.2rem;
`

export {
  StyledBackgroundDiv,
  StyledModalContainer,
  StyledListContainer,
  StyledCloseButton,
  StyledTitle
}
