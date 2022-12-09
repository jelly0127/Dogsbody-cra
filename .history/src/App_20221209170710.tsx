import * as React from 'react'
import { useContext } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './Mycontext'
function App() {
  const theme = useContext(ThemeContext)

  const element = useRoutes(routes)
  return <MyContext.Provider value={themes.dark}>{element}</MyContext.Provider>
}

export default App
