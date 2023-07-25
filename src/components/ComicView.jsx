import { useParams, useLocation } from 'react-router-dom'


export const ComicView = () => {
  const { comicId } = useParams()
  const location = useLocation();
  const { comicData } = location.state;

  console.log(comicData)

  return (
    <h1>COMIC VIEW for comic {comicId}</h1>
  )
}