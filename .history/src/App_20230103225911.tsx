import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './MyContext'
import Header from './components/header/Header'
import { GlobalStyle } from './style'
import CommunityLinkGroup from './components/CommunityLinkGroup'
import { useDispatch, useSelector } from 'react-redux'
import useWindowSize from './hooks/isDesktop'
import { updateDesktop } from './redux/counterSlice'
import { ThemeProvider } from 'styled-components'

function App() {
  const element = useRoutes(routes)
  const size = useWindowSize()
  const [Name, setName] = useState('Im jelly')
  const dispatch = useDispatch()
  const count = useSelector((state: any) => state.counter.isDesktop)

  console.log('isDesktop', count)
  dispatch(updateDesktop(size.isDesktop))
  return (
    <MyContext.Provider value={{ Name, setName }}>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        {element}
        <CommunityLinkGroup />
      </ThemeProvider>
    </MyContext.Provider>
  )
}

export default App