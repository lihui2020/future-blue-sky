import Vue from 'vue'
import Router from 'vue-router'
import Debug from '@/page/debug'
import SaleLedger from '@/page/sale-ledger'
import DeviceOperation from '@/page/device-operation'
import RunAnalysis from '@/page/run-analysis'
import Setting from '@/page/setting'
import Login from '@/page/login'
import { getLogin } from '@/assets/js/local.storage'
import { MessageBox } from 'element-ui'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'debug',
      meta: {
        requireAuth: true,
      },
      component: Debug
    },
    {
      path: '/debug',
      name: 'debug',
      meta: {
        requireAuth: true,
      },
      component: Debug
    },
    {
      path: '/sale-ledger',
      name: 'saleLedger',
      meta: {
        requireAuth: true,
      },
      component: SaleLedger
    },
    {
      path: '/device-operation',
      name: 'deviceOperation',
      meta: {
        requireAuth: true,
      },
      component: DeviceOperation
    },
    {
      path: '/run-analysis',
      name: 'runAnalysis',
      meta: {
        requireAuth: true,
      },
      component: RunAnalysis
    },
    {
      path: '/setting',
      name: 'setting',
      meta: {
        requireAuth: true,
      },
      component: Setting
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (getLogin().access_token) {
      next();
    } else {
      MessageBox.alert('未登录，请先登录').then(()=>{
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      })
    }
  }
  else {
    next();
  }
})

export default router
