/**
 * Created by skz on 2018/5/14 15:57
 */

import Bridge from '../bridge'

const Reg_Common_Base_getOpenToken = (callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.registerHandler('GTBridge_Common_Base_getOpenToken2', callback)
  })
}

/* app主动发送openToken给h5 */
const Reg_Common_Base_sendOpenToken = (callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.registerHandler('GTBridge_Common_Base_sendOpenToken', callback)
  })
}

export default {
  Reg_Common_Base_getOpenToken,
  Reg_Common_Base_sendOpenToken
}
