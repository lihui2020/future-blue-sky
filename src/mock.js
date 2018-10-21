/**
 * Created by apple on 2018/10/21.
 */
// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceDebugData = function() {
  let debugList = [];
  for (let i = 0; i < 10; i++) {
    let newItem = {
      model: Mock.mock(/^\d{5}(CCK\/W33\+H)\d{3}$/),
      deviceId: Random.integer(1000000, 9999999),
      controlId: Random.integer(100000, 999999),
      date: Random.date()
    }
    debugList.push(newItem)
  }

  return {
    debugList: debugList
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/debug', 'post', produceDebugData);
