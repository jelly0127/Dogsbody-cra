import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* {useRoutes(routes)} */}

      {/* <App /> */}
    </Provider>
  </React.StrictMode>
)