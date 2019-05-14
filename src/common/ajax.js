/**
 * Created by lihaohua on 2019/4/12 13:54
 */
/**
 * AJax 请求
 * 封装签名
 * Methods:
 *   1. request
 *   2. get
 *   3. post
 * params: 方法请求参数与 axios 请求参数基本相同，比 axios 多了一个 reqMethod 字段
 *   req = {
 *    url: '',
 *    method: 'get',
 *    params: {},
 *    reqVersion: '1.0',                    // 接口请求版本，默认1.0
 *    reqMethod: 'account.session.gen'      // 请求方法
 *   }
 * 使用:
 * request(req)
 * get({params: {}, reqMethod: ''})
 * post({params: {}, reqMethod: ''})
 */
/*eslint-disable*/
import { Helper } from '@/common/helper'
import { getAuthorityInfo, setAuthorityInfo, removeAuthorityInfo, getToken } from '@/common/auth'
import * as Const from '@/common/constants'
import fetch from '@/common/fetch'
import md5 from 'blueimp-md5'
let requestTimes = 0 // 请求用户信息次数
let sessionRequestTimes = 0 // 请求用户信息次数
import _ from 'lodash'
import {Toast} from 'mint-ui'
/*eslint-disable no-useless-call*/

function getAuthInfo () {
  return getAuthorityInfo() && JSON.parse(getAuthorityInfo())
}

function setAuthoInfo (authInfo) {
  setAuthorityInfo(JSON.stringify(authInfo))
}
// 获取会话
function getSession () {
  let authInfo = getAuthInfo()
  if (!authInfo) {
    return fetch({
      method: 'post',
      params: {method: Const.SESSION_REQUEST}
    }).then((response) => {
      let result = response.data
      if (result && result.code === 0) {
        authInfo = result.data
        authInfo.difference = authInfo.timestamp - Math.floor(Date.now() / 1000)
        setAuthoInfo(authInfo)
      }
    })
  }
}

// 会话续约
function reNewSession (reNewSessionReq, reqParam, reqVersion) {
  let authInfo = getAuthInfo()
  let reqParams = Object.assign({accessToken: getToken(), sessionKey: authInfo['sessionKey']}, reqParam || {})
  reNewSessionReq['data'] = 'params=' + encodeURIComponent(JSON.stringify(reqParams))
  reNewSessionReq['params'] = getReqParams(Const.RENEW_SESSION_REQUEST, reqParams, reqVersion)
  return fetch(reNewSessionReq).then((response) => {
    let result = response.data
    if (result && result.code === 0) {
      authInfo = result.data
      authInfo.difference = authInfo.timestamp - Math.floor(Date.now() / 1000)
      setAuthoInfo(authInfo)
    }
  })
}

// 获取签名
function getSign (method, params, interfaceVer = Const.INTERFACE_VERSION) {
  let paramsStr = JSON.stringify(Helper.deepSort(params))
  paramsStr = paramsStr.replace(/(\/)/g, '\\$1')
  let authInfo = getAuthInfo()
  const timestamp = Math.floor(Date.now() / 1000) + authInfo['difference']
  authInfo['timestamp'] = timestamp
  setAuthoInfo(authInfo)
  const sessionKey = authInfo['sessionKey']
  const sessionSecret = authInfo['sessionSecret']
  // const operatePath = store.getters.operate_path || getOperatePath()
  const mix = 'method=' + method + '&params=' + paramsStr + '&sessionKey=' + sessionKey + '&timestamp=' + timestamp + '&ver=' + interfaceVer + sessionSecret
  return md5(mix)
}

// 获取请求参数
function getReqParams (method, params, interfaceVer = Const.INTERFACE_VERSION) {
  const sign = getSign(method, params, interfaceVer)
  const authInfo = getAuthInfo()
  return {
    method: method,
    ver: interfaceVer,
    timestamp: authInfo['timestamp'],
    sessionKey: authInfo['sessionKey'],
    // operatePath: store.getters.operate_path || getOperatePath(),
    sign: sign
    // params: params
  }
}

// ajax 请求
async function request (req) {
  const args = [].slice.call(arguments)
  let tmpReq = _.cloneDeep(req)
  let authInfo = getAuthInfo()
  if (!authInfo) {
    await getSession()
  }
  const reqParams = tmpReq.params
  const reqMethod = tmpReq.reqMethod
  const reqVersion = tmpReq.reqVersion
  let requestParams = Object.assign({accessToken: getToken()}, reqParams || {})
  tmpReq['data'] = 'params=' + encodeURIComponent(JSON.stringify(requestParams || {}))
  tmpReq['params'] = getReqParams(reqMethod, requestParams, reqVersion)
  return new Promise((resolve, reject) => {
    fetch(tmpReq).then((response) => {
      resolve(response)
      const result = response.data
      const statusCode = result.code
      if (Const.INVALID_SESSION === statusCode ||
        Const.SESSION_EXPIRE === statusCode ||
        // Const.SESSION_RENEW === statusCode ||
        Const.INVALID_SIGN === statusCode) {
        removeAuthorityInfo()
        requestTimes++
        if (requestTimes >= Const.RENEW_REQUEST_TIMES) {
          requestTimes = 0
          return
        }
        getSession().then(() => {
          request.apply(null, args)
        })
      } else if (Const.NOT_LOGIN_USER === statusCode || Const.TOKEN_EXPIRE === statusCode) {
        // window.vm && window.vm.$router.push({path: '/login'})
        // location.reload()
      } else if (Const.TOKEN_RENEW === statusCode) {
      } else if (Const.SESSION_RENEW === statusCode) {
        sessionRequestTimes++
        if (sessionRequestTimes >= Const.RENEW_REQUEST_TIMES) {
          sessionRequestTimes = 0
          return
        }
        reNewSession(_.cloneDeep(tmpReq), reqParams, reqVersion).then(() => {
          request.apply(null, args)
        })
      }
    }).catch((response) => {
      window.console && console.log('[ajax] ', '服务出错\n\t error path: \n', location.href, response)
      if (tmpReq.error) {
        tmpReq.error()
      }
      reject(response)
    })
  })
}

// get 请求
function get (req) {
  return request(Object.assign(req, {method: 'post'}))
}

// post 请求
function post (req) {
  return request(Object.assign(req, {method: 'post'}))
}

/**
 * 解析请求参数
 * @param searchParam
 * @param params
 * @returns {*}  ['q=2', 'b=1', ....]
 */
function searchParams (searchParam, params) {
  for (let i in params) {
    if (i === 'data' && params[i]) {
      searchParam.push('params=' + encodeURIComponent(JSON.stringify(params[i])))
    } else if (i === 'params' && params[i]) {
      searchParams(searchParam, params[i])
    } else {
      searchParam.push(i + '=' + params[i])
    }
  }
  return searchParam
}

/**
 * 获取请求绝对URL
 * @param req
 * @returns {string}
 */
function getRequestUrl (req) {
  const baseUrl = process.env.BASE_API
  let tmpReq = _.cloneDeep(req)
  const reqParams = tmpReq.params
  const reqMethod = tmpReq.reqMethod
  const reqVersion = tmpReq.reqVersion
  let requestParams = Object.assign({accessToken: getToken()}, reqParams || {})
  tmpReq['params'] = getReqParams(reqMethod, requestParams, reqVersion)
  tmpReq['data'] = requestParams
  delete tmpReq.reqMethod
  return baseUrl + '?' + searchParams([], tmpReq).join('&').toString()
}

export default {
  get,
  // fetch: get,
  post,
  getRequestUrl,
  request
}
