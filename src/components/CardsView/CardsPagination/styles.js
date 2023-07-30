import styled from 'styled-components'

const CardsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 28px;
  place-items: center;
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 72px;
  padding: 2rem 80px;
  background-color: ${(props) => props.theme.mainBg};
  transition: background-color .75s ease;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    padding: 2rem 20px;
    margin-top: 116px;
  }
`

export { CardsContainer }
