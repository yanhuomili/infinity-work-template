import Vue from 'vue'

// 生产环境错误日志
if (process.env.NODE_ENV === 'prod') {
  Vue.config.errorHandler = function (err, vm) {
    console.log(err, window.location.href)
  }
}
