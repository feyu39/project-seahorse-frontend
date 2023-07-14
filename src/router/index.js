import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserRequest from '../views/UserRequest.vue'
import ProgressBar from '../views/ProgressBar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/send',
    name: 'sendItem',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "sendItem" */ '../views/SendingItems.vue')
  },
  {
    path: '/request',
    name: 'requestItem',
    component: UserRequest
  },
  {
    path: '/progress',
    name: 'progressBar',
    component: ProgressBar
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
