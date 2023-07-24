import styled from 'styled-components'
import { GrClose } from 'react-icons/gr'

const Background = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  z-index: 4;

  align-items: center;
  justify-content: center;
`

const ModalContainer = styled.div`
  width: 480px;
  height: 480px;
  z-index: 5;

  position: fixed;
  background-color: white;
  border-radius: 16px;
  padding-left: 1rem;
  padding-right: 1rem;
`

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 370px;

  overflow-y: auto;

  /* WebKit (Chrome, Safari, etc.) */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #993a3a;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  /* Firefox */
  &::-moz-scrollbar {
    width: 8px;
  }

  &::-moz-scrollbar-thumb {
    background-color: #993a3a;
    border-radius: 4px;
  }

  &::-moz-scrollbar-thumb:hover {
    background-color: #555;
  }

  /* Microsoft (Edge, Internet Explorer) */
  &::-ms-scrollbar {
    width: 8px;
  }

  &::-ms-scrollbar-thumb {
    background-color: #993a3a;
    border-radius: 4px;
  }

  &::-ms-scrollbar-thumb:hover {
    background-color: #555; 
  }
`

const CloseButton = styled(GrClose)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`

const Title = styled.h2`
  margin: 1rem 0.2rem;
`

export { Background, ModalContainer, ListContainer, CloseButton, Title }
