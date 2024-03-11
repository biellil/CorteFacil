import { createContext, useContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Routers } from './Router'
import { GlobalStyle } from './styles/global'
import { darkTheme, lightTheme } from './styles/themes'


const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const CustomThemeProvider = ({ children }) => {
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
