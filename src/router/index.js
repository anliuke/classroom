import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router =  new Router({
    routes : [
        {
          path : '/',
          meta:{
            name: '更省课堂'
          },
          component: () => import ('@/views/index/Index.vue')
        },
        {
            path : '/teacher',
            meta:{
              name: '导师简介'
            },
            component: () => import ('@/views/teacherInfo/Index.vue')
        },
        {
            path : '/course',
            meta:{
              name: '课程列表'
            },
            component: () => import ('@/views/keChengList/Index.vue')
        },
        {
            path : '/courseInfo',
            meta:{
              name: '课程内容'
            },
            component: () => import ('@/views/keChengInfo/Index.vue')
        },
        // {
        //     path : '/',
        //     meta:{
        //       name: '课程内容'
        //     },
        //     component: () => import ('@/views/index/Index.vue')
        // },
        // {
        //     path : '/',
        //     meta:{
        //       name: '课程内容'
        //     },
        //     component: () => import ('@/views/index/Index.vue')
        // },
        {
            path : '/shiXun',
            meta:{
              name: '实训营详情'
            },
            component: () => import ('@/views/shiXunInfo/Index.vue')
        },
    ],   
    scrollBehavior(to, from, savedPosition) {
        return {
          x: 0,
          y: 0
        }
    },
   
})
router.afterEach((to, from, next) => {
    Vue.nextTick(() => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0;
        window.scrollTo(0, 0)
    })
})

export default router