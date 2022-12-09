import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Routes } from 'react-router-dom'
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}
const ThemeContext = React.createContext(themes.light)
const [data, setData] = useState('jelly')
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes>
        <MyContext.Provider value={{ data, setData }}>
          <App />
        </MyContext.Provider>
      </Routes>
    </Provider>
  </React.StrictMode>
)
