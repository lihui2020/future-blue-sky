/**
 * Created by weijiahui on 2018/10/21.
 * service层：用于接口调用和回调
 */
import { ajax } from '@/assets/utils'

/**
 * 出厂设置保存记录
 * @param cb
 */
export const saveDebugInfo = function (cb) {
  console.log('--deviceToEdit in service--', this.deviceToEdit)
  if (typeof cb === 'function') cb()
}

/**
 * 出厂设置获取表格数据
 * @param cb
 */
export const getDebugTableData = function (param, cb) {
  ajax({
    url: '/debug',
    type: 'post',
    data: param,
    mock: true,
    success: (data) => {
      console.log('--params--', param)
      this.tableData = data
      if (typeof (data) === 'string') {
        this.tableData = JSON.parse(data)
      }
      this.handleSearch()
      if (typeof cb === 'function') cb()
    },
    error: (error) => {
      console.log(error)
    }
  })
}
