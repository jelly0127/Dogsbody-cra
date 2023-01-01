import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-size: 16px;
  }
  #root{
      position: relative;
      min-height: 100vh;
  }

  body {
    position: relative;
    ${(prop) =>
      // @ts-ignore
      prop.theme.isDesktop && `min-height: 900px;`}
    height: 100%;
    position: relative;
    font-family: SF-UI-Text-Regular;

    // fix style: WalletConnect modal
    #walletconnect-qrcode-modal {
      .walletconnect-modal__base {
        top: 24%;
        margin: ${(prop) =>
          // @ts-ignore
          prop.theme.isDesktop ? 'auto' : 'auto 0'};
      }
      .walletconnect-modal__mobile__toggle {
        display: ${(prop) =>
          // @ts-ignore
          prop.theme.isDesktop ? 'none' : 'flex'};
        flex-direction: row;
      }
    }
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
    cursor: ${(prop) =>
      // @ts-ignore
      prop.theme.isDesktop ? 'pointer' : 'none'};
    &:focus {
      outline: 1px solid rgba(0, 0, 0, .1);
    }
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
  // fix style: coinbase modal
  .-cbwsdk-css-reset {
    .-cbwsdk-extension-dialog-box-top-install-region {
      button {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
      }
    }
    .-cbwsdk-snackbar-instance {
      width: 100%;
    }
  }
`
export { GlobalStyle }
