import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由按需加载
export default new Router({
  routes: [
    {path: '/',redirect: '/home'},
    {path: '/home', name: 'home',meta:{title:'首页',showMenu:true}, component: () => import('@/views/home/index')},
    {path: '/search', name: 'search',meta:{title:'搜索页'}, component: () => import('@/views/search/index')},
  ]
})