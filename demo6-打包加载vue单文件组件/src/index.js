// 当我们使用模块化的方式来加载 Vue 的时候，它不支持 DOM 模板和 template 模板
// 

// 手动指定要加载的 vue.js 文件模块
// import Vue from 'vue/dist/vue.js'

// 上面手动指定比较麻烦，如果在其它文件模块中还要加载 vue，还得写这个路径
// 我们可以把 vue 的加载路径配置 webpack 的打包加载规则中
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
  }
})
