import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
    --blue-dark: #193A6A;
    --blue-light: #182B47;
  }

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
  }

  body, button, input {
    font-family: 'Nunito', sans-serif;
  }
`