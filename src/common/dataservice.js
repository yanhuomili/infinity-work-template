/**
 * Created by lihaohua on 2019/4/12 13:54
 */
import request from '@/common/ajax'
/**
 * 获取微信签名
 * @param
 */
export function getWxConfig(url) {
  return request.post({
    reqMethod: 'base.wechat.getWxConfig',
    params: {
      url: url
    }
  })
}

