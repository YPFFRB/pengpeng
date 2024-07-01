import { createRouter, createWebHistory } from 'vue-router'
import comment from "@/views/comment/index.vue";
import goods from "@/views/goods/index.vue";
import seller from "@/views/seller/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/comment',
      component:comment
    },
    {
      path:'/goods',
      component:goods
    },
    {
      path:'/seller',
      component:seller
    }
  ]
})

export default router
