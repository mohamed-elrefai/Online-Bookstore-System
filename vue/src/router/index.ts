import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import LoginViewVue from '@/views/Auth/Login/LoginView.vue'
import RegisterViewVue from '@/views/Auth/Register/RegisterView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signin',
    name: 'login',
    component: LoginViewVue
  },
  {
    path: '/signup',
    name: 'register',
    component: RegisterViewVue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
