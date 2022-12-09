import * as React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
function App() {
  const element = useRoutes(routes)
  return element
}

export default App
