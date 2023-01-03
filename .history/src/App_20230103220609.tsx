import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './MyContext'
import Header from './components/header/Header'
import { GlobalStyle } from './style'
import CommunityLinkGroup from './components/CommunityLinkGroup'
import { useDispatch } from 'react-redux'
import useWindowSize from './hooks/isDesktop'
import { updateDesktop } from './redux/counterSlice'
function App() {
  const element = useRoutes(routes)
  const size = useWindowSize()
  const [Name, setName] = useState('Im jelly')
  const dispatch = useDispatch()
  console.log('isDesktop', size.isDesktop)
  dispatch(updateDesktop(size.isDesktop))
  return (
    <MyContext.Provider value={{ Name, setName }}>
      <GlobalStyle />
      <Header />
      {element}
      <CommunityLinkGroup />
    </MyContext.Provider>
  )
}

export default App
