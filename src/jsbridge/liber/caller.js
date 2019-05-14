/**
 * Created by skz on 2018/5/14 15:57
 */

import Bridge from '../bridge'
/**
 * [JSBridge调用APP接口] 获取订单商品信息
 * @param {object} data        // 参数
 * @param {function} callback  // 回调函数
 * @constructor
 */
const Caller_AfterSale_getApplyAfterSaleParams = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Liber_AfterSale_getApplyAfterSaleParams', data, callback)
  })
}

/**
 * 返回售后申请列表
 * @constructor
 */
const Caller_AfterSale_goback2AfterSaleApplyingList = () => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Liber_AfterSale_goback2AfterSaleApplyingList')
  })
}

// 首页点击搜索
const GTBridge_Utopa_Mall_searchAction = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Utopa_Mall_searchAction', data, callback)
  })
}

// 首页扫一扫
const GTBridge_Common_Base_scanQrcode = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_scanQrcode', data, callback)
  })
}

// 首页点击商品，跳转商品详情
const GTBridge_Utopa_Mall_showGoodsDetail = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Utopa_Mall_showGoodsDetail', data, callback)
  })
}

// 三级分类
const GTBridge_Utopa_Mall_showClassifyDetail = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Utopa_Mall_showClassifyDetail', data, callback)
  })
}

// 首页更多
const GTBridge_Utopa_Mall_showMoreClassify = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Utopa_Mall_showMoreClassify', data, callback)
  })
}

// 购物车
const GTBridge_Utopa_Mall_shoppingCartAction = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Utopa_Mall_shoppingCartAction', data, callback)
  })
}

// diy 下单
const GTBridge_Utopa_Mall_placeAnOrder = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Utopa_Mall_placeAnOrder', data, callback)
  })
}

// 跳转到DIY页面
const GTBridge_Utopa_Mall_showDiyModule = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Utopa_Mall_showDiyModule', data, callback)
  })
}

// 跳转到团队定制
const GTBridge_Utopa_Mall_teamCustomization = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Utopa_Mall_teamCustomization', data, callback)
  })
}

export default {
  Caller_AfterSale_getApplyAfterSaleParams,
  Caller_AfterSale_goback2AfterSaleApplyingList,
  GTBridge_Utopa_Mall_searchAction,
  GTBridge_Common_Base_scanQrcode,
  GTBridge_Utopa_Mall_showGoodsDetail,
  GTBridge_Utopa_Mall_showClassifyDetail,
  GTBridge_Utopa_Mall_showMoreClassify,
  GTBridge_Utopa_Mall_shoppingCartAction,
  GTBridge_Utopa_Mall_placeAnOrder,
  GTBridge_Utopa_Mall_showDiyModule,
  GTBridge_Utopa_Mall_teamCustomization
}
