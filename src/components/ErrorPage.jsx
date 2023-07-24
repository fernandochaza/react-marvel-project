import { useRouteError } from 'react-router-dom'
import { styled } from 'styled-components'

const StyledErrorPage = styled.div`
  display: flex;
  height: 100dvh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <StyledErrorPage>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </StyledErrorPage>
  )
}