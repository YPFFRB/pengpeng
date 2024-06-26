import {createRouter,createWebHistory} from 'vue-router'
import Home from "../pages/Home.vue";
import Bot from "../pages/Bot.vue";
import Hot from "../pages/Hot.vue";
const routes=[
    {
        path: '/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        children:[
            {
                path: '/home',
                redirect:'/home/suggest'
            },
            {
                path: '/home/newset',
                component: () => import('../pages/home/Newset.vue')
            },
            {
                path: '/home/suggest',
                component:()=>import('../pages/home/Suggest.vue')
            }
        ]
    },
    {
        path: '/bot',
        component: Bot
    },
    {
        path: '/hot/:id',
        component: Hot
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes:routes
})


export default router