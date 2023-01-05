import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Routes } from 'react-router-dom'
// import VConsole from 'vconsole'
// const vConsole = new VConsole()
import Web3Config from './web3/Web3Config'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes>
        <Web3Config>
          <App />
        </Web3Config>
      </Routes>
    </Provider>
  </React.StrictMode>
)
