import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/style/reset.css'//初始化样式
import App from './App.vue'
import 'lib-flexible/flexible.js'//用来修改根字体大小
import router from './router'
import {Button} from "vant";
import 'vant/lib/index.css'
import { Form, Field, CellGroup } from 'vant';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button);
app.mount('#app')
app.use(Form);
app.use(Field);
app.use(CellGroup);