import styled from 'styled-components'

const MainWrapper = styled.main`
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.mainTxt};
  transition: background-color 0.75s ease;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const StyledImage = styled.img`
  margin-top: 3rem;
  max-height: 70%;
  width: auto;
  justify-self: end;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.mainTxt} 0px 4px 12px;
  animation: fade 0.2s ease-in;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    width: 70%;
    height: auto;
    margin-top: 1rem;
  }
`

const InformationWrapper = styled.div`
  margin-top: 3rem;
  margin-left: 1.5rem;
  max-height: 70%;
  max-width: 70%;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    margin-left: 0;
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
    margin-top: 2rem;
  }
`

const TextField = styled.p`
  margin: 0;
  font-weight: 600;
  line-height: 1.5rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
  }
`

const Description = styled.p`
  margin-top: 3rem;
  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    margin-top: 2rem;
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
