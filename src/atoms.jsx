import { atom } from 'jotai'

export const charactersResults = atom([])
export const matchingResults = atom([])
export const userInput = atom('')
export const searchHistory = atom([])
export const favoriteCharacters = atom([])
export const isSearchHistoryDisplayed = atom(false)
export const modalVisibility = atom(false)
export const handleApiError = atom(null)
export const modalCharacter = atom(null)
export const lastFetchData = atom([])
export const previousPageData = atom([])
export const nextPageData = atom([])
