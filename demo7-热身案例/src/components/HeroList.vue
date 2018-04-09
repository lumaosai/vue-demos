<template>
<div>
  <h2 class="sub-header">英雄列表</h2>
    <a class="btn btn-success" href="#/hero/new">添加英雄</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in heros">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <!-- <a
                :href="'#/hero/' + item.id + '/edit'">编辑</a> -->
              <!-- 
                这里就是指定路由往名字叫 hero-edit 的路由去跳转
              hero-edit 是 '/hero/:herodId/edit' 别名
              后面的 params 可以用来指定 :herodId 参数值
               -->
              <router-link
                :to="{name: 'hero-edit', params: {heroId: item.id}}">编辑</router-link>
              &nbsp;&nbsp;
              <a
                href="#"
                @click.prevent="removeHero(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'

/**
 * 删除英雄
 * 1. 为 删除 按钮注册点击事件
 * 2. 拿到要删除的英雄的 id
 * 3. 发请求执行删除操作
 * 4. 根据响应做交互
 */

/**
 * 加载英雄列表
 * 1. 请求 /heros 拿到接口数据
 * 2. 把接口数据渲染到表格列表中
 */

/**
 * 编辑英雄
 * 第一步：点击编辑按钮的时候来到编辑英雄组件，动态的将要编辑的英雄信息渲染到表单控件中
 *   1. 动态配置编辑英雄的导航地址
 *       命名路由
 *   2. 在编辑的组件中获取到路径中的动态参数 :heroId
 *     this.$route.params
 *   3. 根据路径中拿到的英雄 id 发请求，拿数据
 *   4. 将拿到的数据更新渲染到模板中
 * 第二步：完成编辑操作
 *   1. 为表单注册 submit 提交事件处理函数
 *   2. 拿到表单数据
 *   3. 表单数据验证（暂时不做）
 *   4. 发请求执行更新操作
 *   5. 根据响应做交互
 */

export default {
  data () {
    return {
      heros: [
      ]
    }
  },
  created () {
    this.loadHeroList()
  },
  methods: {
    async loadHeroList () {
      // axips.get() 方法会返回一个 Promise 对象
      const res = await axios.get('http://localhost:3000/heros')
      console.log(res.data)
      this.heros = res.data

      // axios.get('http://localhost:3000/heros').then(res => {
      //   this.heros = res.data
      // })

      // 直接给回调函数来接收结果
      // $.get('http://localhost:3000/heros', data => {
      //   this.heros = data
      // })

      // 也可以通过 then 方法传递回调函数来接收
      // Promise 风格的 API
      // $.get('http://localhost:3000/heros').then(data => {
      //   this.heros = data
      // })
    },
    removeHero (herodId) {
      if (!window.confirm('Are you ok？')) {
        return
      }

      axios.delete(`http://localhost:3000/heros/${herodId}`).then(res => {
        if (res.status === 200) {
          this.loadHeroList()
        }
      })
    }
  }
}
</script>

<style>
</style>
