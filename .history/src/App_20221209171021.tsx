import * as React from 'react'
import { useContext, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './Mycontext'
function App() {
  const themes = useContext(MyContext)
  const [name, setName] = useState('jelly')
  const element = useRoutes(routes)
  return (
    <MyContext.Provider value={{ name, setName }}>
      {' '}
      {element}
    </MyContext.Provider>
  )
}

export default App
