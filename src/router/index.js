import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserRequest from '../views/UserRequest.vue'
import SendingItems from '../views/SendingItems.vue'
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
    component: SendingItems
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
