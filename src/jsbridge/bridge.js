/**
 * Created by skz on 2018/5/14 16:09
 */
/**
 * @class
 * @description 使用说明
 * 1. 初始化，并在回调中通过Bridge实例进行业务操作
 * Bridge.WebViewJavascriptBridge.setup((Bridge) => {
 *   // 注册接口方法供APP调用
 *   Bridge.registerHandler(handlerName, (data) => {})
 *   // 调用APP暴露的接口方法
 *   Bridge.callHandler(handlerName, data, () => {})
 * })
 *
 *
 * 2. 初始化，再获取Bridge实例进行业务操作
 * Bridge.WebViewJavascriptBridge.setup()
 * Bridge.WebViewBridge.registerHandler(handlerName, (data) => {})
 * Bridge.WebViewBridge.callHandler(handlerName, data, () => {})
 *
 * @example <caption>usage of Vue</caption>
 * import JSBridge from './jsbridge'
 * export default {
 *   mounted () {
 *     JSBridge.Bridge.WebViewJavascriptBridge.setup()
 *   },
 *   methods: {
 *     evokeAPP () {
 *       JSBridge.Bridge.WebViewBridge.callHandler('GTBridge_Common_Base_evokeApp', '', () => {
 *         //
 *       })
 *     }
 *   }
 * }
 *
 *
 * @example <caption>usage of Vue</caption>
 * import JSBridge from './jsbridge'
 * export default {
 *   methods: {
 *     evokeAPP () {
 *      JSBridge.Bridge.WebViewJavascriptBridge.setup((WebViewBridge) => {
 *        WebViewBridge.callHandler('GTBridge_Common_Base_evokeApp', '', () => {
 *          //
 *        })
 *      })
 *     }
 *   }
 * }
 *
 *
 * @example <caption>usage of Vue</caption>
 *
 * <p>custom a Reg_Common_Base_getOpenToken caller handler in jsbridge/common/caller.js</p>
 * import Bridge from '../bridge'
 * const Caller_Common_Base_getOpenToken = (data, callback) => {
 *    Bridge.WebViewJavascriptBridge.setup((WebViewBridge) => {
 *      WebViewBridge.callHandler('GTBridge_Common_Base_getOpenToken', data, callback)
 *    })
 * }
 * export default {Caller_Common_Base_getOpenToken}
 *
 *
 * import JSBridge from './jsbridge'
 * export default {
 *   methods: {
 *     getOpenToken () {
 *      JSBridge.Common.Caller_Common_Base_getOpenToken('', (openToken) => {
 *        //...
 *      })
 *     }
 *   }
 * }
 */
/* Javascript Bridge*/
/* eslint-disable no-new, no-unused-vars, no-undef*/
const ua = navigator.userAgent
const isIos = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
const isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1

const bridges = (() => {
  let BridgeInstance = null
  const getJSBridge = (callback, reInit = true) => {
    if (BridgeInstance) {
      return callback ? callback(BridgeInstance) : BridgeInstance
    }
    if (reInit) {
      WebViewJavascriptBridge.setup(callback)
    }
  }
  const bridgeCallbackProxy = (callback) => {
    return (WebViewJavascriptBridge) => {
      BridgeInstance = WebViewJavascriptBridge
      callback && callback(WebViewJavascriptBridge)
    }
  }
  const setupAndroidWebViewJavascriptBridge = (callback) => {
    if (window.WebViewJavascriptBridge) {
      bridgeCallbackProxy(callback)(WebViewJavascriptBridge)
    } else {
      document.addEventListener('WebViewJavascriptBridgeReady', () => {
        bridgeCallbackProxy(callback)(WebViewJavascriptBridge)
      }, false)
    }
  }
  const setupIOSWebViewJavascriptBridge = (callback) => {
    if (window.WebViewJavascriptBridge) {
      return bridgeCallbackProxy(callback)(WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(bridgeCallbackProxy(callback))
    }
    // window.WVJBCallbacks = [callback]
    window.WVJBCallbacks = [bridgeCallbackProxy(callback)]
    var WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(() => { document.documentElement.removeChild(WVJBIframe) }, 0)
  }
  const WebViewJsBridge = {
    setup: (callback) => {
      if (BridgeInstance) {
        return callback ? callback(BridgeInstance) : BridgeInstance
      }
      isIos && setupIOSWebViewJavascriptBridge(callback)
      isAndroid && setupAndroidWebViewJavascriptBridge(callback)
    }
  }
  return {
    WebViewBridge: BridgeInstance,
    WebViewJavascriptBridge: WebViewJsBridge
  }
})()

export default bridges
