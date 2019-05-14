/**
 * Created by lihaohua on 2019/4/12 13:54
 * Some Service Handle Method Of Utopa
 */

export const Utopa = {
  isValidRequest (response) {
    return (response.status === 200 && response.data.code === 0)
  },
  domainConverter () {
    let domainMap = {
      'mgr-test': 'www-test',
      'mgr-pre': 'www-pre',
      'mgr-dev': 'www-dev',
      'mgr': 'www'
    }
    let domain = location.origin ? location.origin : location.protocol + '//' + location.host
    const mgr = domain.match(/(mgr[-]*\w*)+?/)
    const replace = mgr && mgr[0]
    return domain.replace(replace, domainMap[replace])
  },
  formatOrderState (state) {
    return {
      '-1': '无效订单',
      0: '待付款',
      1: '待发货',
      2: '已发货',
      3: '已完成',
      4: '已关闭',
      5: '售后',
      6: '退款中',
      7: '已退款',
      8: '异常关闭',
      9: '该商品已过售后期',
      61: '平台审核',
      62: '寄回商品',
      63: '仓库收货'
    }[state]
  }
}
