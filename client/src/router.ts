import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import {
  Home as HomeIcon,
  Pulse as PalseIcon,
} from '@vicons/ionicons5'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    icon: HomeIcon,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    icon: PalseIcon,
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router

export const menuRoutes = routes
