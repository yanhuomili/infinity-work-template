/**
 * YDUI 可伸缩布局方案
 * rem计算方式：设计图尺寸px / 100 = 实际rem  例: 100px = 1rem
 */

//!function (window) {
//  /* 设计图文档宽度 */
//  var docWidth = 750;
//  var doc = window.document,
//      docEl = doc.documentElement,
//      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
//
//  var recalc = (function refreshRem () {
//      var clientWidth = docEl.getBoundingClientRect().width;
//      /* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */
//      docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px';
//      return refreshRem;
//  })();
//
//  /* 添加倍屏标识，安卓为1 */
//  docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);
//
//  if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
//      /* 添加IOS标识 */
//      doc.documentElement.classList.add('ios');
//      /* IOS8以上给html添加hairline样式，以便特殊处理 */
//      if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
//          doc.documentElement.classList.add('hairline');
//  }
//
//  if (!doc.addEventListener) return;
//  window.addEventListener(resizeEvt, recalc, false);
//  doc.addEventListener('DOMContentLoaded', recalc, false);
//
//}(window);




//var i = window.devicePixelRatio>1?1/window.devicePixelRatio:1;//查看像素比，用于页面缩放；
//var meta =document.createElement("meta");
//meta.name="viewport";
//console.log(i)
//meta.content='width=device-width,user-scalable=no,initial-scale='+i+',minimum-scale='+i+',maximum-scale='+i;
//document.getElementsByTagName("head")[0].appendChild(meta);//动态添加meta-viewport标签，设置好适配；

var html = document.getElementsByTagName("html")[0];
var iW =document.documentElement.clientWidth;
iW=Math.min(414,iW);
var scale=iW/375*100;
html.style.fontSize=scale+"px";//动态设置html根节点的font-size，用于rem布局；

window.onresize=function(){
	var html = document.getElementsByTagName("html")[0];
	var iW =document.documentElement.clientWidth;
	iW=Math.min(414,iW);
	var scale=iW/375*100;
	html.style.fontSize=scale+"px";//动态设置html根节点的font-size，用于rem布局；
}


///**
// * Created by skz on 2017/11/6 11:38
// */
//(function (doc, win) {
//let docEl = doc.documentElement
//let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
//const recalc = function () {
//  let clientWidth = docEl.clientWidth
//  if (!clientWidth) return
//  docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
//}
//if (!doc.addEventListener) return
//win.addEventListener(resizeEvt, recalc, false)
//doc.addEventListener('DOMContentLoaded', recalc, false)
//})(document, window)
