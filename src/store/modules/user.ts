/*
 * @Author: Betty.Gao
 * @Date: 2022-08-18 11:21:35
 * @LastEditors: Betty.Gao
 * @LastEditTime: 2022-08-25 16:11:13
 * @Description: 用户信息
 */
import { defineStore } from 'pinia'

const defaultAvatarUrl =
  'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132'

export const useUserStore = defineStore('userInfo', {
  state: () => {
    'users'

    return {
      userName: '用户名',
      avatarUrl: defaultAvatarUrl, // 头像
      accessToken: '',
      loginCode: '',
      openid: '',
      session_key: ''
    }
  },
  getters: {
    getUserName: (state) => {
      return state.userName
    },
    getAvatarUrl: (state) => {
      return state.avatarUrl
    },
    getToken: (state) => {
      return state.accessToken
    },
    getLoginCode: (state) => {
      return state.loginCode
    },
    getOpenId: (state) => {
      return state.openid
    },
    getSessionKey: (state) => {
      return state.session_key
    }
  },
  actions: {
    updateUserName(value: string) {
      this.userName = value
    },
    updateAvatarUrl(value: string) {
      this.avatarUrl = value
    },
    updateToken(value: string) {
      this.accessToken = value
    },
    updateLoginCode(value: string) {
      this.loginCode = value
    },
    updateOpenId(value: string) {
      this.openid = value
    },
    updateSessionKey(value: string) {
      this.session_key = value
    }
  },
  persist: {
    enabled: true
  }
})

export default useUserStore
