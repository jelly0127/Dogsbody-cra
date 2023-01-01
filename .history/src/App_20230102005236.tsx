import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './MyContext'
import useWindowSize from './tools/isDesktop'
const size = useWindowSize()
console.log(1111, size)

function App() {
  const [Name, setName] = useState('Im jelly')
  const element = useRoutes(routes)
  return (
    <MyContext.Provider value={{ Name, setName }}>{element}</MyContext.Provider>
  )
}

export default App
