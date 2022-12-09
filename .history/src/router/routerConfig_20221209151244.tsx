import React from 'react'
import { RouteObject } from 'react-router-dom'

//懒加载
const Main = React.lazy(() => import('../pages/Main/Main'))
const Home = React.lazy(() => import('../pages/Home/Home'))
const History = React.lazy(() => import('../pages/History/History'))

//懒加载格式定义
// const lazyFactory = (
//   // eslint-disable-next-line @typescript-eslint/ban-types
//   LazyComponent: React.LazyExoticComponent<React.FC<{}>>
// ) => {
//   return (
//     <React.Suspense fallback={null}>
//       <LazyComponent />
//     </React.Suspense>
//   )
// }
//使用定义的懒加载
// const LazyMain = lazyFactory(Main)
// const LazyHome = lazyFactory(Home)
// const LazyHistory = lazyFactory(History)

//路由路径的基本配置
export const routes: RouteObject[] = [
  { path: '/', element: Home },
  { path: '/main', element: Main },
  { path: '/History', element: History }
]
//导出
export default routes
