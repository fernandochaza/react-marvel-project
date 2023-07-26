import { useCallback, useEffect } from 'react'

const useOnClickOutside = (element, callback) => {
  const handleClickOutside = useCallback(
    (event) => {
      if (!element?.contains(event.target)) callback()
    },
    [callback, element]
  )

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside)

    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, [element])
}

export default useOnClickOutside
