/**
 * Created by lihaohua on 2019/4/15 10:17
 */
var AUTH_TOKEN='js_token';
import axios from 'axios';

// 创建实例时修改配置
var instance = axios.create({
  baseURL: '/api',
  timeout:5000,
});

// 实例创建之后修改配置
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.defaults.timeout = 2500;
//instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


// 添加一个请求拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default instance;