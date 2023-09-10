import { createApp } from "vue";
import { createPinia } from 'pinia'
import "./styles.css";
import 'virtual:windi.css'
import { createRouter, createWebHashHistory} from 'vue-router'
import { constantRoutes } from "./router"
import App from "./App.vue";

// 创建一个pinia 实列
const pinia = createPinia()
// 创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes: constantRoutes
})

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
