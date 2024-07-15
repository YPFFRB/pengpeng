

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assests/style/reset.css'//初始化样式
import 'lib-flexible/flexible.js'//修改根字体大小


// 1. 引入你需要的组件
import { Button } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

import { Form, Field, CellGroup } from 'vant';


const app = createApp(App)

app.use(createPinia())
app.use(router)
// 3. 注册你需要的组件
app.use(Button);

app.use(Form);
app.use(Field);
app.use(CellGroup);

app.mount('#app')
