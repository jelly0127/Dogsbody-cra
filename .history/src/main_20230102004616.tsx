import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Routes } from 'react-router-dom'
import Hearder from './components/header/Hearder'
import IsDesktop from './tools/IsDesktop'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <IsDesktop />
      <Hearder />
      <Routes>
        <App />
      </Routes>
    </Provider>
  </React.StrictMode>
)
