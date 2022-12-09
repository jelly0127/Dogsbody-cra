import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './MyContext'
function App() {
  const [Name, setName] = useState('jelly')
  const element = useRoutes(routes)
  return (
    <MyContext.Provider value={{ Name, setName }}>{element}</MyContext.Provider>
  )
}

export default App
