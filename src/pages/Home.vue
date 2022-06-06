<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 子级路由需要带上父级路由的路径-->
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!--让路由视图种被包含的组件保持挂载，不被销毁-->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>