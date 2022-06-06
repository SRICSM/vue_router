<template>
  <ul>
    <!--  携带query参数：{{ $route.query.xxx }}-->
    <!--  <li>消息编号：{{$route.query.id}}</li>-->
    <!--  <li>消息标题：{{$route.query.title}}</li>-->

    <!--  携带params参数：{{ $route.params.xxx }}-->
    <!--    <li>消息编号：{{$route.params.id}}</li>-->
    <!--    <li>消息标题：{{$route.params.title}}</li>-->

    <!--  利用props接收参数-->
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>

  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log("Detail mounted", this.$route);
  },
  props: ["id", "title"],
}
</script>

<style scoped>

</style>