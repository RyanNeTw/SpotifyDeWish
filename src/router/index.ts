import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Callback from '../views/Callback.vue'
import AlbumPage from '../views/AlbumPage.vue'
import ArtistPage from '../views/ArtistPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/artist',
      name: 'artist',
      component: ArtistPage
    },
    {
      path: '/albums',
      name: 'albums',
      component: AlbumPage
    },
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
  ]
})

export default router
