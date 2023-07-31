import styled from 'styled-components'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const CardContainer = styled.article`
  position: relative;
  width: 220px;
  aspect-ratio: 2/3;
  box-shadow: ${(props) => props.theme.mainTxt} 0px 4px 12px;
  border-radius: 4px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  &:focus {
    transform: scale(1.03);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    height: 308px;
  }
`

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-radius: 4px;
  animation: fade .2s ease-in;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: 4px;
  color: white;
  padding: 5px;
  z-index: 3;
  margin-right: 8px;
  text-align: center;
`
export {
  CardContainer,
  BackgroundImage,
  IsFavoriteIcon as AddedFavorite,
  NotFavoriteIcon as NotFavorite,
  CardInnerShadow,
  AddFavoriteButton,
  CharacterName
}
