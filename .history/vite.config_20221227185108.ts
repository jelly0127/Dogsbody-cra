// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
// export default defineConfig({
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src')
//     }
//   },
//   plugins: [react(), reactRefresh()],
//   css: {
//     // 开启 css 的 SourceMap
//     devSourcemap: true,
//     // 配置 Less
//     preprocessorOptions: {
//       less: {
//         javascriptEnabled: true,
//         // 加载自己的 less 变量
//         preprocessorOptions: {
//           less: {
//             additionalData: `@import "${path.resolve(
//               __dirname,
//               'src/theme.module.less'
//             )}";`,
//             javascriptEnabled: true
//           }
//         }
//       }
//     }
//   }
// })
import { defineConfig, loadEnv } from 'vite'
export default defineConfig(({ mode }) => {
  // 项目根路径
  const root = process.cwd()
  // 通过vite提供的工具方法去加载相应环境的配置
  // 这里的mode其实就是我们 --mode prod的prod
  const { VITE_PUBLIC_PATH } = loadEnv(mode, root)
  return {
    // 这里根据环境不同，设置不同的静态资源部署路径
    base: VITE_PUBLIC_PATH
  }
})
