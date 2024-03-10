import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Routers } from './Router'
import { GlobalStyle } from './styles/global'
import { darkTheme, lightTheme } from './styles/themes'

export function App() {
  const [theme /*, setTheme */] = useState('dark')

  /* const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  } */
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
