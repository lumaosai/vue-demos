<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form
      @submit.prevent="addHero">
      <div class="form-group">
        <label for="name">姓名</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="hero.name">
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <input
          type="text"
          class="form-control"
          id="gender"
          v-model="hero.gender">
      </div>
      <div class="form-group">
        <label for="bio">简介</label>
        <input
          type="text"
          class="form-control"
          id="bio"
          v-model="hero.bio">
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'

// 1. 为表单提交事件
//    @submit.prevet
//    .prevet 是一个事件修饰符，用来阻止默认行为
// 2. 获取表单提交数据
//     利用双向绑定来获取表单控件数据
//     2.1 先根据表单控件初始化我们的 data 成员
//     2.2 把 data 成员利用 v-model 双向绑定到表单元素中
// 3. 表单验证（放到综合案例做）
// 4. 发请求
// 5. 根据响应做交互
export default {
  data() {
    return {
      hero: {
        name: '',
        gender: '',
        bio: ''
      }
    }
  },
  methods: {
    addHero () {
      // 我们可以在每个组件中通过 this.$router 来获取路由实例
      axios.post('http://localhost:3000/heros', this.hero).then(res => {
        if (res.status === 201) {
          // 跳转到列表页
          this.$router.push('/hero')
        }
      })
    }
  }
}
</script>
<style>
</style>
