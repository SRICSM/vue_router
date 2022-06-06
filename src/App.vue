<template>
  <div>
    <Banner/>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--原始用a标签实现页面跳转-->
          <!--<a class="list-group-item" href="./about.html">About</a>-->
          <!--<a class="list-group-item active" href="./home.html">Home</a>-->

          <!--使用vue-router实现页面局部刷新  replace替换浏览器的历史记录-->
          <router-link to="/about" replace class="list-group-item" active-class="active">About</router-link>
          <router-link to="/home" replace class="list-group-item" active-class="active">Home</router-link>

        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'

export default {
  name: 'App',
  components: {Banner}

}
</script>
