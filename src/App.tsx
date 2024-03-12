import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Routers } from './Router'
import { GlobalStyle } from './styles/global'
import { darkTheme, lightTheme } from './styles/themes'

interface ThemeContextType {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a CustomThemeProvider')
  }

  return context
}

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const storedTheme = sessionStorage.getItem('theme')
  const systemPrefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  const defaultTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light')
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (!sessionStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    sessionStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function App() {
  return (
    <>
      <CustomThemeProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </CustomThemeProvider>
    </>
  )
}
