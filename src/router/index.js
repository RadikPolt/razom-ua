import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Головна',
    component: Home
  },
  {
    path: '/vikonano',
    name: 'Hospitals',
    component: () => import('../pages/Hospitals.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
