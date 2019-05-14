/**
 * Created by skz on 2018/5/14 15:57
 */

import Bridge from '../bridge'
/**
 * [JSBridge调用APP接口] 获取OpenToken
 * @param {object} data        // 参数
 * @param {function} callback  // 回调函数
 * @constructor
 */
const Caller_Common_Base_getOpenToken = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_getOpenToken', data, callback)
  })
}

/**
 * [JSBridge调用APP接口] 唤起APP
 * @param data
 * @param callback
 * @constructor
 */
const Caller_Common_Base_evokeApp = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_evokeApp', data, callback)
  })
}

// 首页广告跳转
const GTBridge_Common_Base_advertisementAction = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_advertisementAction', data, callback)
  })
}

// 返回上一页
const GTBridge_Common_Base_goBack = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_back', data, callback)
  })
}

const GTBridge_Common_Base_CMD = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_cmd', data, callback)
  })
}
// 分享
const GTBridge_Common_Base_ShowShare = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_showShare', data, callback)
  })
}
// 是否在app内打开H5页面
const GTBridge_Common_Base_isOpenInApp = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_isOpenInApp', data, callback)
  })
}
// 埋点数据直接发送数据给app
const GTBridge_Common_Base_sendBuryingPointToApp = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_sendBuryingPointToApp', data, callback)
  })
}

export default {
  Caller_Common_Base_getOpenToken,
  Caller_Common_Base_evokeApp,
  GTBridge_Common_Base_advertisementAction,
  GTBridge_Common_Base_goBack,
  GTBridge_Common_Base_CMD,
  GTBridge_Common_Base_ShowShare,
  GTBridge_Common_Base_isOpenInApp,
  GTBridge_Common_Base_sendBuryingPointToApp
}
