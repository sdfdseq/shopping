import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Login from '@/views/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Home,
      // children: [
      //   {
      //     path: 'aside',
      //     component: Aside
      //   }
      // ]
    },
    {
      path:'/about',
      component:About,
    },
    {
      path: '/login',
      component:Login,
    },
  ]
})

export default router
