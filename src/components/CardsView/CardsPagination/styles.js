import styled from 'styled-components'

const CardsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 24px;
  place-items: center;
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 80px;
  background-color: #fafafa;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
  }
`

export { CardsContainer }
