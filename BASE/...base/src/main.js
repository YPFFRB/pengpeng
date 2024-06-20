
//引入vue
import { createApp } from 'vue'
//引入根组件
import App from './App.vue'
//让vue读懂根组件APP，再将根组件传换成html 挂载在#app

createApp(App).mount('#app')
