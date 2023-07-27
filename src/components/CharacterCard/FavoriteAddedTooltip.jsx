import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { favoriteCardTooltip } from '../../atoms'

const StyledMessage = styled.div`
  position: fixed;
  left: 50%;
  top: 12px;
  transform: translate(-50%);

  background-color: #ed1d24;
  color: white;
  padding: 0.5rem;
  border-radius: 8px;
  z-index: 1;
  font-size: 16px;
  width: 200px;
`

const FavoriteAddedTooltip = () => {
  const [showTooltip, setShowTooltip] = useAtom(favoriteCardTooltip)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 1500)

    return () => {
      clearTimeout(timer)
    }
  }, [showTooltip])

  return <StyledMessage>Card added to favorites!</StyledMessage>
}

export default FavoriteAddedTooltip
