import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    
 
  
  }

  html{
    font-size: 100%;
}
@media (max-width: 600px) {
    html {
        font-size: 50%;
    }
}
`
