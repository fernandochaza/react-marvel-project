import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(197, 197, 197, 0.5);

  @media screen and (max-width: 600px){
    flex-direction: column;
  }
`

const VerticalDivision = styled.div`
  border-left: 2px solid rgba(0, 0, 0, 0.06);
  height: 32px;
  margin-right: 40px;
`

export { StyledHeader, VerticalDivision }