/**
 * Created by apple on 2018/10/20.
 */
// const baseUrl = 'http://zl.senseitgroup.com/app/'
const baseUrl = 'http://digitalsnail.vicp.net/boiler/'
import { Loading } from 'element-ui'
import axios from 'axios'
import qs from 'qs'

var loader = null
const showLoading = function (options) {
  loader = Loading.service({
    fullscreen: true,
    customClass: 'app-global-loading'
  });
}
const hideLoading = function () {
  loader && loader.close();
}

export const ajax = ((opt) => {
  return (opt) => {
    var opts = opt || {};
    if (!opts.url) {
      alert('接口地址为空');
      return false;
    }
    if (opts.type === undefined) {
      opts.type = 'post'
    }
    showLoading()
    axios({
      method: opts.type,
      url: opts.url,
      // `params` 是即将与请求一起发送的 URL 参数
      params: (opts.type === "get") ? opts.data : {},
      // `data` 是作为请求主体被发送的数据
      data: (opts.type === "post") ? qs.stringify(opts.data) : {},
      headers: opts.headers || {
        'Content-Type': 'application/json'
      },
      // baseURL: opts.mock ? '' : baseUrl,
      // `transformRequest` 允许在向服务器发送前，修改请求数据(请求前处理)
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return data;
      }],
      // `transformResponse` 在传递给 then/catch 前，允许修改响应数据(请求返回的数据)
      transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return data;
      }],
      timeout: opts.time || 10 * 1000,
      //返回数据类型
      responseType: opts.dataType || 'json'
    }).then(function (res) {
      hideLoading()
      console.log(res);
      if (res.status == 200) {
        if (opts.success) {
          opts.success(res.data, res);
        }
      } else {
        alert(res.data.error);
      }
    }).catch(function (error) {
      //请求已发出，但服务器使用状态代码进行响应
      hideLoading()
      // console.log(error);
      if (opts.error) {
        opts.error(error);
      } else {
        //在设置触发错误的请求时发生了错误
        alert('出错了');
      }
      console.log(error.config);
    });
  }
})()

