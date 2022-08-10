import { createSSRApp } from 'vue'
import uView from 'vk-uview-ui'
import App from './App.vue'
import { setupStore } from './store'

export function createApp() {
  const app = createSSRApp(App)
  // 使用 uView UI
  app.use(uView)
  // piania 仓库管理
  setupStore(app)
  app.mount('#app')
  return {
    app
  }
}
