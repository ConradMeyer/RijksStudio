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
    path: '/collections',
    name: 'Collections',
    component: () => import(/* webpackChunkName: "about" */ '../views/Collections.vue')
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import(/* webpackChunkName: "about" */ '../views/Favs.vue')
  },
  {
    path: '/collection/:id',
    name: 'Artist',
    component: () => import(/* webpackChunkName: "about" */ '../views/Artist.vue')
  },
  {
    path: '/paint/:id',
    name: 'Paint',
    component: () => import(/* webpackChunkName: "about" */ '../views/Paint.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
