import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
:root{

  --primary: #d69533;
  --secondary: #eceff1;
 
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: "Averia Sans Libre", sans-serif;
    text-decoration: none;
   
  
  html {
    font-size: 100%;
  }

  
  @media (max-width: 768px) {
    html {
      font-size: 80%;
    }
  }

  @media (max-width: 600px) {
    html {
      font-size: 60%;
    }
  }

}
`
