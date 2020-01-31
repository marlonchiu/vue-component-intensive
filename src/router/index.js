import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const ChapterThree = () => import(/* webpackChunkName: "chapter-three" */ '../views/chapter-three.vue')
const ChapterFour = () => import(/* webpackChunkName: "chapter-four" */ '../views/chapter-four.vue')
const ChapterFive = () => import(/* webpackChunkName: "chapter-five" */ '../views/chapter-five.vue')
const chapterSix = () => import(/* webpackChunkName: "chapter-six" */ '../views/chapter-six.vue')
const chapterSeven = () => import(/* webpackChunkName: "chapter-seven" */ '../views/chapter-seven.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/chapter-three',
    name: 'chapterThree',
    component: ChapterThree
  },
  {
    path: '/chapter-four',
    name: 'chapterFour',
    component: ChapterFour
  },
  {
    path: '/chapter-five',
    name: 'chapterFive',
    component: ChapterFive
  },
  {
    path: '/chapter-six',
    name: 'chapterSix',
    component: chapterSix
  },
  {
    path: '/chapter-seven',
    name: 'chapterSeven',
    component: chapterSeven
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
