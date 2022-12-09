import * as React from 'react'
import { useContext } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
function App() {
  const theme = useContext(ThemeContext)

  const element = useRoutes(routes)
  return element
}

export default App
