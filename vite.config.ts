/*
 * @Author: Betty.Gao
 * @Date: 2022-07-08 18:30:46
 * @LastEditors: Betty.Gao
 * @LastEditTime: 2022-08-10 17:10:08
 * @Description: vite配置文件
 */
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  envDir: resolve(__dirname, 'env'),
  resolve: {
    // 配置别名
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // 开发服务器配置
  server: {
    host: '0.0.0.0',
    port: 8866,
    // 请求代理
    proxy: {
      // 个人习惯，这里就用/dev作为前缀了
      '/dev': {
        target: 'https://xxx.com/api',
        changeOrigin: true,
        // 路径重写，去掉/dev
        rewrite: (path) => path.replace(/^\/dev/, '')
      }
    }
  },
  build: {
    // 禁用 gzip 压缩大小报告，以提升构建性能
    brotliSize: false,
    /** 配置h5打包js,css,img分别在不同文件夹start */
    assetsDir: 'static/img/',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
    /** 配置h5打包js,css,img分别在不同文件夹end */
  }
})
