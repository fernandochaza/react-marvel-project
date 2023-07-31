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
  margin-bottom: 2px;
  padding: 1.7rem 80px;
  background-color: ${(props) => props.theme.mainBg};
  transition: background-color .75s ease;
  min-height: calc(100vh - 233px);

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    padding: 2rem 20px;
    margin-top: 116px;
    min-height: calc(100vh - 278px);
  }
`

export { CardsContainer }
