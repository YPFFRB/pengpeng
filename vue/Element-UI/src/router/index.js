import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Layout from "../views/Layout.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/layout',
      component:Layout
    }
  ]
})

export default router
