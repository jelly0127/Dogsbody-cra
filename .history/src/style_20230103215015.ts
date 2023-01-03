import { createGlobalStyle } from 'styled-components'
import useWindowSize from './hooks/isDesktop'
interface CustomTheme {
  grey1: string
  grey2: string
  grey3: string
  grey4: string
  grey5: string
  grey6: string
  hoverBc: string
  fontLargest: string
  fontLarge: string
  fontNormal: string
  fontSmall: string
  primaryColor: string
  borderColor: string
  darkMode?: boolean
  bgUrl: string
}
// const GlobalStyle = createGlobalStyle`
//   html {
//     height: 100%;
//     font-size: 16px;
//   }
//   #root{
//   background-color: #242424;
//   font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
//   font-size: 16px;
//   line-height: 24px;
//   font-weight: 400;
//   color-scheme: light dark;
//   color: rgba(255, 255, 255, 0.87);
//   font-synthesis: none;
//   text-rendering: optimizeLegibility;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   -webkit-text-size-adjust: 100%;
//   display: flex;
//   justify-content: center;
//   }

//   body {
//   max-width: 1280px;
//  max-height: 100vh;
//  /* display: flex;
//  justify-content: center; */
//   }

//   body, textarea, input, button {
//     line-height: 1;
//   }

//   body, div, p {
//     margin: 0;
//     padding: 0;
//   }

//   button, a {
//     padding: 0;
//     margin: 0;
//     border: 0;
//     background: transparent;

//   }

//   a {
//     color: inherit;
//     text-decoration: none;
//     :focus {
//       outline: none;
//     }
//   }

//   img {
//     display: block;
//   }

//   strong {
//     font-weight: bold;
//   }
//   button {
//   border-radius: 8px;
//   border: 1px solid transparent;
//   padding: 0.6em 1.2em;
//   font-size: 1em;
//   font-weight: 500;
//   font-family: inherit;
//   background-color: #1a1a1a;
//   cursor: pointer;
//   transition: border-color 0.25s;
// }
// button:hover {
//   border-color: #646cff;
// }
// button:focus,
// button:focus-visible {
//   outline: 4px auto -webkit-focus-ring-color;
// }
//   div, a, button, li {
//     display: flex;
//     flex-direction: column;
//     box-sizing: border-box;
//     :hover {
//   color: #535bf2;
// }
//   }

// `
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-size: 16px;
    padding: 0 10px;

  }
  #root{
      min-height: 100vh;

  }

  body {
   background-color: #242424;
    height: 100%;
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
    box-sizing: border-box;
  }
  
`
const defaultTheme: CustomTheme = {
  grey1: '#333333',
  grey2: '#666666',
  grey3: '#333333',
  grey4: '#999999',
  grey5: '#FF3838',
  grey6: '#3D8DE2',
  hoverBc: '#EBEBEB',
  fontLargest: '24px',
  fontLarge: '20px',
  fontNormal: '16px',
  fontSmall: '14px',
  primaryColor: '#0057ff;',
  borderColor: '#3333333',
  darkMode: false,
  bgUrl: ''
}

export { GlobalStyle, defaultTheme }
