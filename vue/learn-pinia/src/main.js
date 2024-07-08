

import { createApp } from 'vue'
import App from './App3.vue'

import store from "@/store/index.js";

//createApp(App).mount('#app')


createApp(App).use(store).mount('#app')