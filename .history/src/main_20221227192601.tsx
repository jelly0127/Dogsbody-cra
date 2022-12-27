import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Routes } from 'react-router-dom'

// base api
// title
console.log(import.meta.env.VITE_HELLO)
console.log(import.meta.env.BASE_URL)
console.log(import.meta.env.VITE_APP_BASE_API)

console.log(' process.env: ', process.env)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes>
        <App />
      </Routes>
    </Provider>
  </React.StrictMode>
)
