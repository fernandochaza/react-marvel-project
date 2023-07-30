import { useCallback } from 'react'
import { useAtom } from 'jotai'
import { currentTheme } from '../../../atoms'
import { lightTheme, darkTheme } from '../../../themes'
import { SwitchInput, SwitchSlider, SwitchWrapper } from './styles'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useAtom(currentTheme)

  const handleToggle = useCallback(() => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme)
  }, [theme, setTheme])

  return (
    <SwitchWrapper>
      <SwitchInput defaultChecked={theme === lightTheme} onClick={handleToggle} />
      <SwitchSlider />
    </SwitchWrapper>
  )
}

export default ThemeSwitcher
