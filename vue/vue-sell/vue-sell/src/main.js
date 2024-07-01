

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/reset.css"
//import "https:at.alicdn.com/t/c/font_4600618_ay1yco7l5nl.css"

const app = createApp(App)

app.use(router)

app.mount('#app')
