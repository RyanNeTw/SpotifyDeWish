import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '../layout/default.vue';
import Login from '../views/Login.vue'
import Callback from '../views/Callback.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback,
    },
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
      ]
    },
  ]
})

export default router
