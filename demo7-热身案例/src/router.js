// 0. 安装 vue-router
// 1. 导入路由，挂载到 Vue 程序中
import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from './components/Main.vue'

import HeroList from './components/HeroList.vue'
import HeroNew from './components/HeroNew.vue'
import HeroEdit from './components/HeroEdit.vue'

Vue.use(VueRouter)

// 2. 配置路由表
//    根据不同的 url 导航到指定的组件视图
//    建议给每个路由起个名字
export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      name: 'home',
      path: '/',
      component: AppMain
    },
    {
      name: 'hero',
      path: '/hero',
      component: HeroList
    },
    {
      name: 'hero-new',
      path: '/hero/new',
      component: HeroNew
    },
    {
      name: 'hero-edit',
      path: '/hero/:heroId/edit',
      component: HeroEdit
    },
  ]
})

// 3. 将路由实例配置到根实例选项的 router 中
//    在 router.js 将 new VueRouter() 实例导出
//    在 index.js 中将 router.js 中的路由实例导入，然后配置到根实例的 router 选项中
//    

// 4. 在你视图中告诉路由往哪里渲染
//    <router-view></router-view>
