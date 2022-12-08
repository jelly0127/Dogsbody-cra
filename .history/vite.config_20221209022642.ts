import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import viteEslint from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // 开启 css 的 SourceMap
    devSourcemap: true,
    // 配置 Less
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // 加载自己的 less 变量
        modifyVars: {
          hack: `true;@import (reference) "${path.resolve(
            __dirname,
            './src/styles/variables.less'
          )}";`
        }
      }
    }
  }
})
