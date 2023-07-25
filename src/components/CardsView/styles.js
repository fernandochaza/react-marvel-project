import styled from 'styled-components'

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 24px;
  place-items: center;
  max-width: 1100px;
  margin: 1rem auto;
  background-color: #fafafa;

  @media screen and (max-width: ${props => props.theme.breakpointSm}){

  }
`

export { CardsContainer }
