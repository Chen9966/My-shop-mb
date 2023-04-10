import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { // 设置路径短名 (开发环境)
      '@': path.resolve(__dirname, './src'),
    }
  },
  server:{
    proxy:{
      '/api':{
         target:'http://192.168.218.76:3000/',
         changeOrigin:true,
         rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
