import { createSSRApp } from 'vue'
import uView from 'vk-uview-ui'
import App from './App.vue'
import { setupStore } from '/@/store'

export function createApp() {
  const app = createSSRApp(App)
  // piania 仓库管理
  setupStore(app)
  // 使用 uView UI
  app.use(uView)
  return {
    app
  }
}
