import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import("@/views/login.vue")
    },
    {
      path: '/list',
      name: 'list',
      component: () => import("@/views/messageLists.vue")
    },
    {
      path: '/item',
      name: 'item',
      component: () => import("@/views/messageItem.vue")
    },
    {
      path: '/exp',
      name: 'exp',
      component: () => import("@/views/expole.vue")
    }
  ]
})
