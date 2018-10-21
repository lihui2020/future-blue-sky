import Vue from 'vue'
import Router from 'vue-router'
import Debug from '@/page/debug'
import SaleLedger from '@/page/sale-ledger'
import DeviceOperation from '@/page/device-operation'
import RunAnalysis from '@/page/run-analysis'
import Setting from '@/page/setting'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'debug',
      component: Debug
    },
    {
      path: '/debug',
      name: 'debug',
      component: Debug
    },
    {
      path: '/sale-ledger',
      name: 'saleLedger',
      component: SaleLedger
    },
    {
      path: '/device-operation',
      name: 'deviceOperation',
      component: DeviceOperation
    },
    {
      path: '/run-analysis',
      name: 'runAnalysis',
      component: RunAnalysis
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
