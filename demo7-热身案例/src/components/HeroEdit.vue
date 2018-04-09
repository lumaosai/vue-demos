<template>
  <div>
    <h2 class="sub-header">编辑英雄</h2>
    <form @submit.prevent="updateHero">
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
  created () {
    // this.$router 是路由对象，一般用于跳转使用
    // this.$route 也是当前路由参数对象，可以用来获取路由路径参数之类的信息
    const {heroId} = this.$route.params
    this.loadHeroById(heroId)
  },
  methods: {
    loadHeroById (heroId) {
      axios.get(`http://localhost:3000/heros/${heroId}`).then(res => {
        this.hero = res.data
      })
    },
    updateHero () {
      // RESTful （接口设计风格） 的诞生，才让我们被荒废了很多年的 DELETE、PUT、PATCH 等重新回到了我们开发的舞台
      // /hero/:id/edit
      // /hero/new
      // /hero/add
      // /hero/insert
      // /hero/edit?id=xxx
      // /hero/delete?id=xxx

      // 定义了一个名字叫 heroId 的常量，值是从对象中解构的对象属性 id
      const {id: heroId} = this.hero
      axios.patch(`http://localhost:3000/heros/${heroId}`, this.hero).then(res => {
        if (res.status === 200) {
          window.alert('修改成功！')
        }
      })
    }
  }
}
</script>
<style>
</style>
