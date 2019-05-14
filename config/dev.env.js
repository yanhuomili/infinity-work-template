'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"dev"',
//BASE_API:'"http://192.168.20.55:9999"',
  BASE_API: '"http://api-test.myutopa.com/app.do"'
})
