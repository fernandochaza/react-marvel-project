import styled from 'styled-components'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const CardContainer = styled.article`
  position: relative;
  width: 256px;
  height: 380px;
  border: 1px solid black;
  border-radius: 4px;
`

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-radius: 4px;
`

const IsFavoriteIcon = styled(AiFillStar)`
  width: 100%;
  height: 100%;
`

const NotFavoriteIcon = styled(AiOutlineStar)`
  width: 100%;
  height: 100%;
`

const CardInnerShadow = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgb(175, 179, 179);
  background: linear-gradient(
    190deg,
    rgba(175, 179, 179, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(75, 77, 77, 0.8) 100%
  );
`

const AddFavoriteButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
  cursor: pointer;

  width: 32px;
  height: 32px;
  color: white;
`

const CharacterName = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: auto;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  z-index: 3;
`
export {CardContainer, BackgroundImage, IsFavoriteIcon as AddedFavorite, NotFavoriteIcon as NotFavorite, CardInnerShadow, AddFavoriteButton, CharacterName}