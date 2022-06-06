// 该文件专门用于创建整个应用的路由
import VueRouter from "vue-router";

// 引入组件
import Home from "@/pages/Home.vue";
import About from "@/pages/About";
import Message from "@/pages/Message";
import News from "@/pages/News";
import detail from "@/pages/Detail";

//创建一个路由器实例  在暴露之前创建路由守卫
const router = new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta: {title: '关于'}
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            // 子路由  注意路径上没有  ” / “
            children: [
                {
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true, title: '消息'},
                    children: [
                        {
                            // 给路由命名
                            name: 'detailMsg',

                            // params参数要在路径上面占位
                            // path: 'detail/:id/:title',

                            path: 'detail',
                            component: detail,
                            meta: {isAuth: true, title: '详情'},

                            // props的第一种写法，值为对象
                            // 该对象中的所有key-value都会以props的形式传递给组件
                            // props: {id: 1, title: 'hello'}

                            // props的第二种写法，值为布尔值
                            // 若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式都传递给组件
                            // props: true

                            // props的第三种写法，值为函数  query参数和params参数的都可以用
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }

                            // 利用解构赋值接受参数
                            // props({query}) {
                            //     return {
                            //         id: query.id,
                            //         title: query.title
                            //     }
                            // }

                            // 利用解构赋值的连续写法接受参数
                            // props({query: {id, title}}) {
                            //     return {
                            //         id,
                            //         title
                            //     }
                            // }
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News,
                    meta: {isAuth: true, title: '新闻'},
                    // 独享路由守卫只有前置没有后置
                    beforeEnter: (to, from, next) => {
                        console.log('独享路由守卫',to,from)
                        if(to.meta.isAuth){ //判断是否需要鉴权
                            if(localStorage.getItem('school')==='湖北民族大学'){
                                next()
                            }else{
                                alert('学校名不对，无权限查看！')
                            }
                        }else{
                            next()
                        }
                    }
                }
            ]
        }
    ]
})

// 在每一次路由切换之前都会调用这个函数  初始化的时候被调用
//全局前置路由守卫
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from)
    // 设置权限路由跳转
    if (to.meta.isAuth) {  //判断是否需要鉴权
        if (to.path === '/home/message' || to.path === '/home/news') {
            if (localStorage.getItem('school') === '湖北民族大学') {
                next()
            } else {
                alert('您没有权限访问!')
            }
        }
    } else {
        next()
    }

})

// 后置路由守卫  没有next()
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    // 设置标题
    document.title = to.meta.title || 'Vue路由练习'
})
export default router
