<template>
  <div>
    <ul>
      <li v-for="msg in messageList" :key="msg.id">
        <!-- 跳转路由，使用query参数，to 的字符串写法-->
        <!-- <router-link :to="`/home/message/detail?id=${msg.id}&title=${msg.title}`">{{ msg.title }}</router-link>-->

        <!-- 跳转路由，使用params参数，to 的字符串写法-->
        <!--<router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{ msg.title }}</router-link>-->


        <!-- 跳转路由，使用query参数，to 的对象写法-->
        <!--        <router-link :to="{-->
        <!--          path: '/home/message/detail',-->
        <!--          query: {-->
        <!--            id: msg.id,-->
        <!--            title: msg.title-->
        <!--          }-->
        <!--      } ">-->
        <!--          {{ msg.title }}-->
        <!--        </router-link>-->

        <!-- 跳转路由，使用params参数，to 的对象写法  必须给路由命名，不能写path-->
        <router-link :to="{
                  // path: '/home/message/detail',
                  name: 'detailMsg',
                  query: {
                    id: msg.id,
                    title: msg.title
                  }
              } ">
          {{ msg.title }}
        </router-link>
        <!--编程式路由导航-->
        <button @click="pushShow(msg)">push查看</button>
        <button @click="replaceShow(msg)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        {id: '001', title: 'message001'},
        {id: '002', title: 'message002'},
        {id: '003', title: 'message003'}
      ]
    };
  },
  methods:{
    pushShow(msg){
      // push跳转模式
      this.$router.push({
        path: '/home/message/detail',
        query: {
          id: msg.id,
          title: msg.title
        }
      })
    },
    replaceShow(msg){
      // replace跳转模式
      this.$router.replace({
        path: '/home/message/detail',
        query: {
          id: msg.id,
          title: msg.title
        }
      })
    }
  },
  beforeDestroy() {
    // 没有利用keep-alive的时候，路由组件默认被销毁
    console.log('Message组件即将被销毁了')
  },
}
</script>

<style scoped>

</style>