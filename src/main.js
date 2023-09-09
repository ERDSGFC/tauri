import { createApp } from "vue";
import { createPinia } from 'pinia'
import "./styles.css";
import 'virtual:windi.css'
import App from "./App.vue";

// 创建一个pinia 实列
const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.mount('#app')
