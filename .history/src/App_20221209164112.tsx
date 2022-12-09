import * as React from 'react'
import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
function App() {
  const MyContext = React.createContext({})
  const [data, setData] = useState('jelly')
  const element = useRoutes(routes)
  return (
    <MyContext.Provider value={{ data, setData }}>{element}</MyContext.Provider>
  )
}

export default App
