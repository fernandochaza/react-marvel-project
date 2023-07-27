import styled from 'styled-components'

const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-left: 8px;
  background-color: #fafafa;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  position: absolute;
  top: 54px;
  z-index: 4;

  min-width: 400px;
  max-width: 600px;
  max-height: 200px;

  overflow-y: auto;
  list-style: none;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    top: 95px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointMd}) {
    min-width: 360px;
  }
`

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-height: 40px;
  cursor: pointer;
`

export { StyledListContainer, StyledListItem }