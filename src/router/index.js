import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/contents1',
    name: 'Contents1',
    component: () => import('../views/Contents1.vue')
  },
  {
    path: '/contents2',
    name: 'Contents2',
    component: () => import('../views/Contents2.vue')
  },
  {
    path: '/contents3',
    name: 'Contents3',
    component: () => import('../views/Contents3.vue')
  },
  {
    path: '/contents4',
    name: 'Contents4',
    component: () => import('../views/Contents4.vue')
  },
  {
    path: '/contents5',
    name: 'Contents5',
    component: () => import('../views/Contents5.vue')
  },
  {
    path: '/contents6',
    name: 'Contents6',
    component: () => import('../views/Contents6.vue')
  },
  {
    path: '/contents7',
    name: 'Contents7',
    component: () => import('../views/Contents7.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
