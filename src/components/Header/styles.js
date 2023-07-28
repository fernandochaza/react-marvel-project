import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  height: 72px;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(197, 197, 197, 0.5);
  margin-bottom: 4px;

  @media screen and (max-width: ${props => props.theme.breakpointSm}){
    flex-direction: column;
    height: 100px;
    justify-content: space-evenly;
  }
`

const VerticalDivision = styled.div`
  border-left: 2px solid rgba(0, 0, 0, 0.06);
  height: 32px;
  margin-right: 40px;

  @media screen and (max-width: ${(props) => props.theme.breakpointMd}) {
    display: none;  }
`

export { StyledHeader, VerticalDivision }