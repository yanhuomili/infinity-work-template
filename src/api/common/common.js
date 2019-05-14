/*create by lihaohua on 2019/1/12 13:47*/

import request from '@/common/ajax'
/**
 * 根据openToken获取 accessToken
 * @param openToken
 * @returns {*|AxiosPromise}
 */
export function fetchAccessTokenByOpenToken (openToken) {
  return request.post({
    reqMethod: 'account.access.getChildToken',
    params: {openToken}
  })
}

export function getData (params={}) {
  return request.post({
    reqMethod: 'eshop.business.getByBusinessId',
    params: params
  })
}