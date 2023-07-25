import styled from 'styled-components'

const MainWrapper = styled.main`
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #fafafa;
  max-height: calc(100vh - 80px);

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100vh;
  }
`

const StyledImage = styled.img`
  margin-top: 3rem;
  max-height: 70%;
  width: auto;
  justify-self: end;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    width: 60%;
    margin-top: 1rem;
  }
`

const InformationWrapper = styled.div`
  margin-top: 3rem;
  margin-left: 1.5rem;
  max-height: 70%;
  max-width: 70%;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    margin-top: 1rem;
  }
`

const Title = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 1.5rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    text-align: center;
  }
`

const FieldsWrapper = styled.div`
  margin-top: 3rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    margin-top: 1rem;
  }
`

const TextField = styled.p`
  margin: 0;
  font-weight: 600;
`

const Description = styled.p`
  margin-top: 3rem;
  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    margin-top: 1rem;
  }
`

export {
  MainWrapper,
  StyledImage,
  InformationWrapper,
  Title,
  FieldsWrapper,
  TextField,
  Description
}
