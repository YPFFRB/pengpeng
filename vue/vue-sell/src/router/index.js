import { createRouter, createWebHistory } from 'vue-router';
import Goods from '../views/goods/Index.vue';
import Comment from '../views/comment/Index.vue';
import Seller from '../views/seller/Index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/goods',
      component:Goods
    },
    {
      path:'/comment',
      component:Comment
    },
    {
      path:'/seller',
      component:Seller
    }
  ]
})

export default router
