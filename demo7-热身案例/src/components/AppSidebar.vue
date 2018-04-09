<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!-- 
          路由提供了一个全局组件 router-link 默认该组件会渲染成 a 链接 
            我们可以通过 tag 属性告诉这个组件渲染成别的标签
          to 用来指定导航链接，不需要加 #
          router-link 会根据当前导航链接自动为该链接增加一个样式 router-link-active
            我们可以通过 active-class="active" 来自定义类名
            也可以把这个类名在路由实例选项中统一配置 linkActiveClass
          但一个路径包含其它路径的时候，则前缀路径也会被选中
          /hero 是以 / 开头的，则  也被选中。
          我们这里希望是 / 和 /hero 是严格匹配。
          请求路径必须 === / 才会作用 router-link-active 样式
        -->
      <router-link tag="li" exact to="/">
        <a>首页</a>
      </router-link>
      <router-link tag="li" to="/hero">
        <a>英雄管理</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style>
</style>
