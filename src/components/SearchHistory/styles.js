import styled from 'styled-components'

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 1rem;
  background-color: rgb(230, 230, 230);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  position: absolute;
  top: 54px;
  z-index: 4;

  max-height: 220px;
  width: 50%;
  min-width: 400px;
  max-width: 600px;

  overflow-y: auto;
  list-style: none;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    top: 94px;
    width: 74%;
    min-width: 300px;
  }
`

const ListItem = styled.li`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
`

export { ListContainer, ListItem }
