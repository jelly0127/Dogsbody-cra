import * as React from 'react'
import { useRoutes } from 'react-router-dom'

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Dashboard />,
      children: [
        {
          path: 'messages',
          element: <DashboardMessages />
        },
        { path: 'tasks', element: <DashboardTasks /> }
      ]
    },
    { path: 'team', element: <AboutPage /> }
  ])

  return element
}

export default App
