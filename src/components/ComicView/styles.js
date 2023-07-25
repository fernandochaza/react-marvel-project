import styled from 'styled-components'

const MainWrapper = styled.main`
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #fafafa;
  max-height: calc(100vh - 80px);
` 

const StyledImage = styled.img`
  margin-top: 3rem;
  max-height: 70%;
  width: auto;
  justify-self: end;
`

const InformationWrapper = styled.div`
  margin-top: 3rem;
  margin-left: 1.5rem;
  max-height: 70%;
  max-width: 70%;
`

const Title = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 1.5rem;
`

const FieldsWrapper = styled.div`
  margin-top: 3rem;
`

const TextField = styled.p`
  margin: 0;
  font-weight: 600;
`

const Description = styled.p`
  margin-top: 3rem;
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
