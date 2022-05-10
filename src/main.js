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
// 掘金富文本样式
import 'bytemd/dist/index.css'
import 'highlight.js/styles/vs.css'
import 'juejin-markdown-themes/dist/juejin.min.css'

import VueWechatTitle from 'vue-wechat-title'

import {log} from "./utils/util";


log('BLOG', '0.1.0');

const app = createApp(App)

app.use(router)
app.use(Antd);
app.use(store)
app.use(VueWechatTitle)
app.mount('#app')
