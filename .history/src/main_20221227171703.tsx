import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Routes } from 'react-router-dom'
console.log(' VITE_HI: ', import.meta.env.VITE_HI)
console.log(' import.meta.env.MODE: ', import.meta.env.VITE_APP_BASE_URL)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes>
        <App />
      </Routes>
    </Provider>
  </React.StrictMode>
)