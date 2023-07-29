import { useAtom, useAtomValue } from 'jotai'
import { charactersResults, currentPageData, resultsPages } from '../../../atoms'
import { CharacterCard } from '../../CharacterCard'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { CardsContainer } from './styles'
import { NextIcon, PreviousIcon } from './PaginationIcons'

export const CardsPagination = () => {
  const searchResults = useAtomValue(charactersResults)
  const [currentPage, setCurrentPage] = useAtom(currentPageData)
  const resultsPerPage = useAtomValue(resultsPages)
  const [currentPageNumber, setCurrentPageNumber] = useState(1)

  const totalPages = useMemo(() => Math.ceil(searchResults.length / resultsPerPage), [
    searchResults.length,
    resultsPerPage,
  ]);

  const goToPage = useCallback(
    (pageNumber) => {
      const startIndex = (pageNumber - 1) * resultsPerPage
      const endIndex = startIndex + resultsPerPage
      const page = searchResults.slice(startIndex, endIndex)
      setCurrentPage(page)
      setCurrentPageNumber(pageNumber)
    },
    [searchResults, resultsPerPage, setCurrentPage]
  )

  useEffect(() => {
    goToPage(1)
  }, [searchResults, resultsPerPage, goToPage])

  const handleNextClick = useCallback(
    (event) => {
      if (currentPageNumber > 1) {
        goToPage(currentPageNumber - 1)
      }
    },
    [currentPageNumber, goToPage]
  )

  const handlePreviousClick = useCallback(
    (event) => {
      if (currentPageNumber < totalPages) {
        goToPage(currentPageNumber + 1)
      }
    },
    [currentPageNumber, goToPage]
  )

  return (
    <CardsContainer>
      {currentPage.map((character) => {
        return <CharacterCard key={character.id} character={character} />
      })}
      {totalPages > 1 ? (
        <>
          <PreviousIcon
            onClick={handleNextClick}
            disabled={currentPageNumber === 1}
          ></PreviousIcon>
          <NextIcon
            onClick={handlePreviousClick}
            disabled={currentPageNumber === totalPages}
          ></NextIcon>
        </>
      ) : null}
    </CardsContainer>
  )
}
