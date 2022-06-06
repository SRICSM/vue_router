//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 引入路由 Vue-router
import VueRouter from 'vue-router'
// 引入路由配置
import router from './router'
//关闭Vue的生产提示
Vue.config.productionTip = false

// 应用路由插件
Vue.use(VueRouter)

//创建vm
new Vue({
  el:'#app',
  render: h => h(App),
  router:router,
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus = this
  },
})