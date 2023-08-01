import { useSetAtom } from 'jotai'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { refreshPage } from '../../atoms'

const StyledLogo = styled.svg`
  margin: 0 18px;
`

const VerticalDivision = styled.div`
  border-left: 1px solid transparent;
  box-shadow: 0 0 4px ${(props) => props.theme.mainTxt};
  height: 32px;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  margin: 0;
  padding: 0;
`

export const Logo = () => {
  const setRefreshPage = useSetAtom(refreshPage)

  const handleRefreshPage = () => {
    setRefreshPage(true)
  }

  return (
    <>
      <StyledLink to='/' onClick={handleRefreshPage}>
        <StyledLogo
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          width='80px'
          height='32px'
          viewBox='-215.19 -86.608 1000 402.473'
          enableBackground='new -215.19 -86.608 1100 402.473'
          xmlSpace='preserve'
          title='Marvel Logo'
        >
          <g>
            <rect
              x='-215.19'
              y='-86.608'
              fill='#ED1D24'
              width='1000'
              height='402.473'
            />
            <g>
              <path
                fill='#FFFFFF'
                d='M631.063,7.184v-61.603H459.644l-28.191,205.803L403.557-54.418H341.74l6.925,54.915
			c-7.14-14.068-32.449-54.915-88.146-54.915c-0.367-0.024-61.901,0-61.901,0l-0.237,299.974L153.324-54.418l-80.959-0.047
			L25.753,256.349L25.777-54.42h-77.483l-27.933,174.585l-27.208-174.583h-77.508v337.906h61.036V120.618l27.764,162.866h32.449
			l27.374-162.866v162.866H81.935l7.14-51.995h47.374l7.116,51.995l115.521,0.071h0.094v-0.071h0.072h0.072V173.799l14.162-2.063
			l29.319,111.819h0.072h59.61h0.07l-0.024-0.071h0.106h0.072l-38.475-131.057c19.498-14.422,41.513-51.047,35.654-86.084V66.32
			c0.07,0.474,36.316,217.38,36.316,217.38l71.065-0.216L515.83-22.8v306.285h115.236v-60.773h-54.7v-77.496h54.7V83.518h-54.7
			V7.184H631.063z M96.265,177.905l16.758-144.461l17.4,144.461H96.265z M273.684,111.201c-4.697,2.278-9.595,3.417-14.363,3.417
			V5.927c0.083,0,0.179-0.022,0.297-0.022c4.78-0.024,40.419,1.446,40.419,53.774C300.037,87.052,287.916,104.299,273.684,111.201
			 M754.044,222.665v60.772H641.63V-54.465h60.526v277.13H754.044z'
              />
            </g>
          </g>
        </StyledLogo>
      </StyledLink>
      <VerticalDivision />
    </>
  )
}
