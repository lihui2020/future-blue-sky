/**
 * Created by apple on 2018/10/21.
 */
import {debugTableData} from './data'

// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
// const Random = Mock.Random;
// mock一组数据

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/debug', 'post', debugTableData)
