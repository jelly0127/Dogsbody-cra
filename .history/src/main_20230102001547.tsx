import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Routes } from 'react-router-dom'
import Hearder from './components/header/Hearder'
// base api
console.log(import.meta.env)
// title
console.log(import.meta.env.VITE_APP_TITLE)
console.log(import.meta.env.VITE_APP_BASE_API)
window.addEventListener('resize'()=> {
  console.log(resize);

})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Hearder />
      <Routes>
        <App />
      </Routes>
    </Provider>
  </React.StrictMode>
)
