import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-size: 16px;
  }
  #root{
      display: flex;
      min-height: 100vh;
  }

  body {
    display: flex;

    
  }

  body, textarea, input, button {
    line-height: 1;
  }

  body, div, p {
    margin: 0;
    padding: 0;
  }

  button, a {
    padding: 0;
    margin: 0;
    border: 0;
    background: transparent;
    
  }

  a {
    color: inherit;
    text-decoration: none;
    :focus {
      outline: none;
    }
  }

  img {
    display: block;
  }

  strong {
    font-weight: bold;
  }

  div, a, button, li {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
 
`
export { GlobalStyle }
