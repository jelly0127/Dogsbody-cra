import * as React from 'react'
import { useContext } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}
const ThemeContext = React.createContext(themes.light)
function App() {
  const theme = useContext(ThemeContext)

  const element = useRoutes(routes)
  return element
}

export default App
