import { ArrowCircleLeft, ArrowCircleRight, Sun } from '@phosphor-icons/react'
import { useState } from 'react'
import { useTheme } from '../../App'
import { Sectiontema } from './styles'

export const Themeselection = () => {
  const { toggleTheme } = useTheme()
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
              <Sun size={32} />
            </button>
          </>
        )}
      </button>
    </Sectiontema>
  )
}
