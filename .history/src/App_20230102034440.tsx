import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './MyContext'
import useWindowSize from './hooks/isDesktop'
import Header from './components/header/Header'
import { GlobalStyle } from './style'

function App() {
  const element = useRoutes(routes)
  const size = useWindowSize()
  const [Name, setName] = useState('Im jelly')

  console.log('isDesktop', size.isDesktop)

  return (
    <MyContext.Provider value={{ Name, setName }}>
      <GlobalStyle />

      <Header />

      {element}
    </MyContext.Provider>
  )
}

export default App
