<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001</li>
    <li>news002</li>
    <li>news003</li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1
    }
  },
  // 组件被激活时使用  要配合keep-alive使用  只存在路由里面的特殊的生命周期钩子
  activated() {
    console.log('News组件被激活了')
    this.timer = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  deactivated() {
    console.log('News组件失活了')
    clearInterval(this.timer)
  },
}
</script>

<style scoped>

</style>