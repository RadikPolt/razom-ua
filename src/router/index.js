import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Hospitals from '../pages/Hospitals.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Головна',
    component: Home
  },
  {
    path: '/likarni',
    name: 'Лікарні',
    component: Hospitals
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
