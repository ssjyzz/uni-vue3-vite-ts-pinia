import { createSSRApp } from 'vue'
import uView from 'vk-uview-ui'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist-uni'
import App from './App.vue'
import useStore from './store'

export function createApp() {
  const app = createSSRApp(App)
  // 使用 uView UI
  app.use(uView)
  // pinia 仓库管理
  const pinia = createPinia()
  // pinia 数据持久化
  pinia.use(piniaPersist)
  app.use(pinia)
  useStore()
  app.mount('#app')
  return {
    app
  }
}
