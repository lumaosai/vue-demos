<template>
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Project name</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Help</a></li>
      </ul>
      <form class="navbar-form navbar-right">
        <input type="text" class="form-control" placeholder="Search...">
      </form>
    </div>
  </div>
</nav>
</template>

<script>
// 组件的 JavaScript 都写到 script 标签中
// 组件的选项都写到一个对象中
// 将该对象默认导出
// 外部就可以加载默认导出的对象
// // template: 这里的对象不需要 template ，因为我们组件的 template 已经上面的 template 节点中
//   vue-loader 会把 template 节点中的 html 模板提取出来作为组件的模板
// 组件对象写啥？
//    组件对象就是特殊的 Vue 实例，所以 Vue 实例的选项在这里大部分都可以使用
// 我们最后一定要把组件对象给导出，外部就可以加载使用我们的组件对象
export default {
  // template: '', 这里不需要，上面的 template 节点会作为组件的模板
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
