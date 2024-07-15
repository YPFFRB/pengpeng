import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),//配置路由
    routes: [
        {
            path: '/login',
            name: 'login',

            component: () => import('../views/Login.vue')
        },
        {
            path:'/register',
            name:'register',
            component: () => import('../views/register.vue')
        },{
            path:'/noteclass',
            name:'noteclass',
            component: () => import('../views/NoteClass.vue')
        }
    ]
})

//全局路由守卫
const whitePath=['/login','/register']//白名单
router.beforeEach((to,from,next)=>{
    console.log(to,from);
    if(!whitePath.includes(to.path)){
        //判断本地有无用户数据
        if(!localStorage.getItem('userInfo')){//没有用户数据
            router.push('/login')//跳转到登录页面
            return
        }
        next()//放行
        return
    }
    next()//放行
})

export default router
