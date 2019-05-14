// wxapi.js
import wx from 'weixin-js-sdk'
import * as dataService from '@/common/dataservice'
import ua from './ua'

const wxApi = {
  methods: {
    /**
     * [isweixin 判断是否微信浏览器]
     */
    isweixin() {
      return ua.isWeiChatBrowser()
    },
    /**
     * [wxRegister 微信Api初始化]
     * @param  {Function} callback [ready回调函数]
     */
    wxRegister(callback) {
      let data = window.location.href.split('#')[0]
      dataService.getWxConfig(data).then((res) => {
        wx.config({
          debug: false,
          appId: res.data.data.appId, // 必填，公众号的唯一标识
          timestamp: res.data.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.data.data.nonceStr, // 必填，生成签名的随机串
          signature: res.data.data.signature, // 必填，签名，见附录1
          jsApiList: [
            'onMenuShareAppMessage', // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
            'onMenuShareTimeline', // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
            'onMenuShareQQ'
          ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
      }).catch((error) => {
        console.log(error)
      })
      wx.ready((res) => {
        // 如果需要定制ready回调方法
        if (callback) {
          callback()
        }
      })
      wx.error(function (res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      })
    },
    /**
     * [ShareTimeline 微信分享到朋友圈]
     * @param {[type]} opstion [分享信息]
     * @param {[type]} success [成功回调]
     * @param {[type]} error   [失败回调]
     */
    ShareTimeline(opstion) {
      wx.onMenuShareTimeline({
        title: opstion.title, // 分享标题
        link: opstion.link, // 分享链接
        imgUrl: opstion.imgUrl, // 分享图标
        success() {
          // 用户成功分享后执行的回调函数
          opstion.success && opstion.success()
        },
        cancel() {
          // 用户取消分享后执行的回调函数
          opstion.cancel && opstion.cancel()
        }
      })
    },
    /**
     *[AppMessage 微信分享到朋友]
     * @param {[type]} opstion [分享信息]
     * @param {[type]} success [成功回调]
     * @param {[type]} error   [失败回调]
     */
    ShareAppMessage(opstion) {
      wx.onMenuShareAppMessage({
        title: opstion.title, // 分享标题
        desc: opstion.desc, // 分享描述
        link: opstion.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: opstion.imgUrl, // 分享图标
        type: opstion.type, // 分享类型,music、video或link，不填默认为link
        dataUrl: opstion.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
          // 用户确认分享后执行的回调函数
          opstion.success && opstion.success()
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
          opstion.cancel && opstion.cancel()
        }
      })
    },
    /**
     *[MenuShareQQ 分享到QQ]
     * @param {[type]} opstion [分享信息]
     * @param {[type]} success [成功回调]
     * @param {[type]} error   [失败回调]
     */
    MenuShareQQ(opstion) {
      wx.onMenuShareQQ({
        title: opstion.title, // 分享标题
        desc: opstion.desc, // 分享描述
        link: opstion.link, // 分享链接
        imgUrl: opstion.imgUrl, // 分享图标
        success: function () {
          // 用户确认分享后执行的回调函数
          opstion.success && opstion.success()
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
          opstion.cancel && opstion.cancel()
        }
      })
    }
  }
}

export default wxApi

