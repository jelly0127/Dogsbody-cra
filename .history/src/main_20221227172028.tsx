import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Routes } from 'react-router-dom'

console.log(' HI: ', import.meta.env.HI)
console.log(' VITE_HI: ', import.meta.env.VITE_HI)
console.log(' HELLO: ', import.meta.env.HELLO)
console.log(' VITE_HELLO: ', import.meta.env.VITE_HELLO)
console.log(' MD: ', import.meta.env.MD)
console.log(' VITE_MD: ', import.meta.env.VITE_MD)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes>
        <App />
      </Routes>
    </Provider>
  </React.StrictMode>
)
