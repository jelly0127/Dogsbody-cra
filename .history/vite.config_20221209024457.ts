import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
export default defineConfig({
  plugins: [react(), reactRefresh()],
  alias: {
    '@': path.resolve(__dirname, 'src')
  },
  css: {
    // 开启 css 的 SourceMap
    devSourcemap: true,
    // 配置 Less
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // 加载自己的 less 变量
        preprocessorOptions: {
          less: {
            additionalData: `@import "${path.resolve(
              __dirname,
              'src/theme.module.less'
            )}";`,
            javascriptEnabled: true
          }
        }
      }
    }
  }
})
