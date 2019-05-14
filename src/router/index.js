import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由按需加载
export default new Router({
  routes: [
    {path: '/index',redirect: '/'},
    {path: '/',name: 'HelloWorld',component: () => import('@/components/HelloWorld')},
    {path: '/home', name: 'home', component: () => import('@/views/home/index')},
  ]
})
