import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const ChapterThree = () => import(/* webpackChunkName: "chapter-three" */ '../views/chapter-three.vue')
const ChapterFour = () => import(/* webpackChunkName: "chapter-four" */ '../views/chapter-four.vue')
const ChapterFive = () => import(/* webpackChunkName: "chapter-five" */ '../views/chapter-five.vue')
const chapterSix = () => import(/* webpackChunkName: "chapter-six" */ '../views/chapter-six.vue')
const chapterSeven = () => import(/* webpackChunkName: "chapter-seven" */ '../views/chapter-seven.vue')
const chapterEight = () => import(/* webpackChunkName: "chapter-eight" */ '../views/chapter-eight.vue')
const chapterNine = () => import(/* webpackChunkName: "chapter-nine" */ '../views/chapter-nine.vue')
const chapterTen = () => import(/* webpackChunkName: "chapter-ten" */ '../views/chapter-ten.vue')
const chapterEleven = () => import(/* webpackChunkName: "chapter-eleven" */ '../views/chapter-eleven.vue')
const chapterTwelve = () => import(/* webpackChunkName: "chapter-twelve" */ '../views/chapter-twelve.vue')
const chapterThirteen = () => import(/* webpackChunkName: "chapter-thirteen" */ '../views/chapter-thirteen.vue')
const tableRender2 = () => import(/* webpackChunkName: "table-render2" */ '../views/table-render2.vue')
const tableSlot2 = () => import(/* webpackChunkName: "table-slot2" */ '../views/table-slot2.vue')
const chapterFourteen = () => import(/* webpackChunkName: "chapter-fourteen" */ '../views/chapter-fourteen.vue')
const chapterFifteen = () => import(/* webpackChunkName: "chapter-fifteen" */ '../views/chapter-fifteen.vue')
const chapterSixteen = () => import(/* webpackChunkName: "chapter-sixteen" */ '../views/chapter-sixteen.vue')

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
  },
  {
    path: '/chapter-eight',
    name: 'chapterEight',
    component: chapterEight
  },
  {
    path: '/chapter-nine',
    name: 'chapterNine',
    component: chapterNine
  },
  {
    path: '/chapter-ten',
    name: 'chapterTen',
    component: chapterTen
  },
  {
    path: '/chapter-eleven',
    name: 'chapterEleven',
    component: chapterEleven
  },
  {
    path: '/chapter-twelve',
    name: 'chapterTwelve',
    component: chapterTwelve
  },
  {
    path: '/chapter-thirteen',
    name: 'chapterThirteen',
    component: chapterThirteen
  },
  {
    path: '/table-render2',
    name: 'tableRender2',
    component: tableRender2
  },
  {
    path: '/table-slot2',
    name: 'tableSlot2',
    component: tableSlot2
  },
  {
    path: '/chapter-fourteen',
    name: 'chapterFourteen',
    component: chapterFourteen
  },
  {
    path: '/chapter-fifteen',
    name: 'chapterFifteen',
    component: chapterFifteen
  },
  {
    path: '/chapter-sixteen',
    name: 'chapterSixteen',
    component: chapterSixteen
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
