/**
 * Created by lihaohua on 2019/4/12 13:54
 * Constants
 */
// =======================================================================
// ---------------------------- 常量 -------------------------------------
// =======================================================================

// =======================================================================
// ------------------------- System Code About ---------------------------
// =======================================================================
// system constants
export const AUTHORITY_KEY = 'account_session_authinfo'

export const INTERFACE_VERSION = '1.0'

export const USER_TOKEN_KEY = 'utopa_token_key'

export const USER_ID_KEY = 'utopa_uid_key'

export const SESSION_REQUEST = 'account.session.gen'

export const IS_FIRST_LOGIN = 'is_first_login'

export const RENEW_SESSION_REQUEST = 'account.session.renew'

export const RENEW_TOKEN_REQUEST = 'account.access.renewToken'

export const RENEW_REQUEST_TIMES = 3

// locales
export const LOCALES_LANG_KEY = 'locales.key'

// operation path
export const OPERATE_PATH_KEY = 'operate.path.key'

// third part constants
// TODO should be config in the server system
export const QINIU_IMAGE_REQUEST_BASEURL = 'http://ox2m2b48s.bkt.clouddn.com/'

// export const QINIU_UPLOAD_URL = 'http://upload-z2.qiniu.com'
export const QINIU_UPLOAD_URL = 'https://up-z2.qbox.me/'

// =======================================================================
// ------------------------- Status Code About ---------------------------
// =======================================================================
// request status code
export const REQUEST_SUCCESS = 0                  // 请求成功
export const REQUEST_FAIL = 1                     // 请求失败

// APP
export const SESSION_EXPIRE = 99950001           // 会话过期
export const SESSION_RENEW = 99950002            // 会话续约
export const INVALID_SESSION = 99950003          // 无效会话
export const INVALID_SIGN = 99950004             // 签名失败

export const NOT_LOGIN_USER = 99950005           // 未登录用户
export const TOKEN_EXPIRE = 99950006             // 令牌过期
export const TOKEN_RENEW = 99950007              // 令牌续约

// Common Exception Code
export const CREATE_SERVICE_FAIL = 99990003       // 创建业务异常新新实例失败
export const SERVER_CRASH = 99990019              // 系统不舒服
export const SERVICE_NOT_EXIST = 99990021         // 调用服务不存在
export const SERVICE_TYPE_ERROR = 99990022        // 服务类型错误

export const USER_EXIST = 10010010                 // 用户已存在
export const UNREGISTER_OR_DISABLE_ACCOUNT = 10010009  // 尚未注册或已禁用
export const BANNED_USER = 10010014                // 用户已被禁用

export const HAS_SUBMENU = 220100001               // 有下级菜单

export const PARENT_TOKEN_ERROR = 10010017          // 父令牌有误

// sms
export const MOBILE_IS_INTERCEPT = 13050006        // 号码被拦截

export const EXCEPTION_STATUS_DESC_MAP = {
  '99990003': '创建业务异常新新实例失败',
  '99990019': '系统不舒服，请稍后再试',
  '99990021': '调用服务不存在',
  '99990022': '服务类型错误',
  '99950005': '用户未登录',
  '10010010': '用户已存在',
  '10010009': '尚未注册或已禁用',
  '10010014': '用户已被禁用',
  '220100001': '有下级菜单，不能删除!',
  '22010004': '用户名或密码错误',
  '13050006': '号码被拦截'
}

// =======================================================================
// ------------------------- Service Code About --------------------------
// =======================================================================

export const LOGIN_TYPES = {
  MOBILE_CAPTCHA: 1,
  ACCOUNT_PASS: 2,
  THIRD_PARK: 3,
  EMAIL_PASS: 4,
  LOGINNAME_PASS: 5,
  UTOPAID_PASS: 6,
  MOBILE_PASS_CAPTCHA: 7,
  MOBILE_EMAIL: 8
}

export const LOGIN_TYPES_MAP = {
  1: '手机验证登录',
  2: '账号密码',
  3: '第三方登录',
  4: '邮箱密码',
  5: '账号密码验证码',
  6: 'utopaId密码',
  7: '手机密码验证码',
  8: '手机邮箱'
}

export const CLIENT_TYPES = {
  UTOPA: 1,
  LITTLEQ: 2,
  LIBER: 3,
  DESIGNER: 4,
  OPERATION_PLATFORM: 5,
  UTOPA_MERCHANT_APP: 6,
  XIAOQ_MERCHANT_APP: 7
}
export const CLIENT_TYPES_MAP = {
  1: '优托邦',
  2: '小Q',
  3: 'liber',
  4: '设计师',
  5: '运营平台',
  6: '优托邦商家端APP',
  7: '小Q商家端APP'
}

export const PAGINATION_PAGENO = 1
export const PAGINATION_PAGESIZE = 10
export const PAGINATION_PAGETOTAL = 0
