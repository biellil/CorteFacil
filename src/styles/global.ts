import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: 'Averia Sans Libre';
    text-decoration: none;


    @font-face {
    font-family: "Averia Sans Libre";
    font-weight: 300;
    font-style: normal;
  }

 

  @font-face {
    font-family: "Averia Sans Libre";
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Averia Sans Libre";
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: "Averia Sans Libre";
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Averia Sans Libre";
    font-weight: 700;
    font-style: italic;
  }



  }
  
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
      font-size: 50%;
    }
  }

  
`
