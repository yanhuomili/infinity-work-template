import { AUTHORITY_KEY, USER_TOKEN_KEY, USER_ID_KEY } from '@/common/constants'

export const setStore = (key, value) => {
  if (!key) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  window.sessionStorage.setItem(key, value)
}

export const getStore = key => {
  if (!key) return
  return window.sessionStorage.getItem(key)
}

export const removeStore = key => {
  if (!key) return
  window.sessionStorage.removeItem(key)
}

export function getToken () {
  return getStore(USER_TOKEN_KEY)
}

export function setToken (token) {
  return setStore(USER_TOKEN_KEY, token)
}

export function removeToken () {
  removeStore(USER_TOKEN_KEY)
}

export function getUID () {
  return getStore(USER_ID_KEY)
}

export function setUID (uid) {
  setStore(USER_ID_KEY, uid)
}

export function removeUID () {
  removeStore(USER_ID_KEY)
}

export function getAuthorityInfo () {
  return getStore(AUTHORITY_KEY)
}

export function setAuthorityInfo (authInfo) {
  setStore(AUTHORITY_KEY, authInfo)
}

export function removeAuthorityInfo () {
  removeStore(AUTHORITY_KEY)
}
export function getSessionToken () {
  return window.sessionStorage.getItem(USER_TOKEN_KEY)
}
export function setSessionToken (token) {
  return window.sessionStorage.setItem(USER_TOKEN_KEY, token)
}
export function removeSessionToken () {
  return window.sessionStorage.removeItem(USER_TOKEN_KEY)
}
