import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Routes } from 'react-router-dom'
import Hearder from './components/header/Hearder'
console.log(1111)

const resizeUpdate = (e: any) => {
  // 通过事件对象获取浏览器窗口的高度
  const w = e.target.innerWidth
  console.log(w)
}
// 页面变化时获取浏览器窗口的大小
window.addEventListener('resize', resizeUpdate)

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
