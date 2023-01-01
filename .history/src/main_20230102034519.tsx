import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Routes } from 'react-router-dom'
import { GlobalStyle } from './style'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />

      <Routes>
        <App />
      </Routes>
    </Provider>
  </React.StrictMode>
)
