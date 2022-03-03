import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd  from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// 重置浏览器默认样式
import 'normalize.css'
// 全局样式
import "@/assets/styles/index.scss"

const app = createApp(App)

app.use(router)
app.use(Antd);
app.use(store)
app.mount('#app')
