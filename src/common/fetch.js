import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'mint-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 10000                  // 请求超时时间
})
Vue.prototype.$http = service

// request请求拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  Toast('网络出现问题')
  console.log(error) // for debug
  Promise.reject(error)
})

// respone返回拦截器
service.interceptors.response.use(
  response => response,
  error => {
    Toast('网络出现问题')
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service
