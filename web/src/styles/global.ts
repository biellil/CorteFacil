import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
:root{

  --primary: ${(props) => props.theme.primary};
  --secondary: ${(props) => props.theme.secondary};
  --background: ${(props) => props.theme.background};
  --text: ${(props) => props.theme.text};
  --button: ${(props) => props.theme.button};
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

  html, body {
  height: 100%;
  margin: 0;
}

  @media (max-width: 768px) {
    html {
      font-size: 80%;
    }
  }

  @media (max-width: 600px) {
    html {
      font-size: 65%;
    }
  }
  @media (max-width: 425px) {
    html {
      font-size: 59%;
    }
  }

}
`
