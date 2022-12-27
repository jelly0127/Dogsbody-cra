import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Routes } from 'react-router-dom'

console.log(' import.meta.env.MODE: ', import.meta.env.MODE)
console.log(' import.meta.env.BASE_URl', import.meta.env.BASE_URL)
console.log(' import.meta.env.PROD: ', import.meta.env.PROD)
console.log(' import.meta.env.DEV: ', import.meta.env.DEV)
console.log(' import.meta.env.SSR: ', import.meta.env.SSR)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes>
        <App />
      </Routes>
    </Provider>
  </React.StrictMode>
)
