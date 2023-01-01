import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './MyContext'
import useWindowSize from './hooks/isDesktop'
import Hearder from './components/header/Hearder'
function App() {
  const [Name, setName] = useState('Im jelly')
  const element = useRoutes(routes)
  const size = useWindowSize()
  console.log('isDesktop', size.isDesktop)

  return (
    <MyContext.Provider value={{ Name, setName }}>
      <Headers />
      {element}
    </MyContext.Provider>
  )
}

export default App
