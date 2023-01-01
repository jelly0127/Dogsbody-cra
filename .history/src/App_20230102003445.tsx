import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './MyContext'
function App() {
  const [Name, setName] = useState('Im jelly')
  const element = useRoutes(routes)
  window.addEventListener('resize', (e: any) => {
    console.log('resize', e.target.innerWidth)
  })
  return (
    <MyContext.Provider value={{ Name, setName }}>{element}</MyContext.Provider>
  )
}

export default App
