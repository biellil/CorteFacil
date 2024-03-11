import { ReactNode, createContext, useContext, useState } from 'react'
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
  if (context === undefined) {
    throw new Error('useTheme must be used within a CustomThemeProvider')
  }
  return context
}

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
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
