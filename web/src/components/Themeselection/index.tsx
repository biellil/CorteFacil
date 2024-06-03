import {
  ArrowCircleLeft,
  ArrowCircleRight,
  Moon,
  Sun,
} from '@phosphor-icons/react'
import { useState } from 'react'
import { useTheme } from '../../App'
import { Sectiontema, SectiontemaLeft } from './styles'

export const Themeselection = () => {
  const { toggleTheme, theme } = useTheme()!
  const [isLeftArrow, setIsLeftArrow] = useState(true)

  const toggleIcon = () => setIsLeftArrow(!isLeftArrow)

  return (
    <Sectiontema>
      <button onClick={toggleIcon}>
        {isLeftArrow ? (
          <ArrowCircleLeft size={32} />
        ) : (
          <>
            <ArrowCircleRight size={32} />
            <button onClick={toggleTheme}>
              {theme === 'light' ? <Moon size={32} /> : <Sun size={32} />}
            </button>
          </>
        )}
      </button>
    </Sectiontema>
  )
}

export const ThemeselectionLeft = () => {
  const { toggleTheme, theme } = useTheme()!
  const [isLeftArrowLeft, setIsLeftArrowLeft] = useState(true)

  const toggleIconLeft = () => setIsLeftArrowLeft(!isLeftArrowLeft)

  return (
    <SectiontemaLeft>
      <button onClick={toggleIconLeft}>
        {isLeftArrowLeft ? (
          <ArrowCircleRight size={32} />
        ) : (
          <>
            <button onClick={toggleTheme}>
              {theme === 'light' ? <Moon size={32} /> : <Sun size={32} />}
            </button>
            <ArrowCircleLeft size={32} />
          </>
        )}
      </button>
    </SectiontemaLeft>
  )
}
