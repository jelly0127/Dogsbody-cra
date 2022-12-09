import { useContext, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './MyContext'
function App() {
  const themes = useContext(MyContext)
  const [count, setCount] = useState(0)
  const element = useRoutes(routes)
  return <MyContext.Provider value={{ count }}> {element}</MyContext.Provider>
}

export default App
