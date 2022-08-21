import { createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/layout',
  },
  {
    path: "/layout",
    component: ()=> import('@/pages/Layout.vue')
  },
  {
    path: '/home',
    component: ()=> import("@/pages/Home.vue")
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router