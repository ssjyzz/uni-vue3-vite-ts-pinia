/*
 * @Author: Betty.Gao
 * @Date: 2022-08-18 11:21:35
 * @LastEditors: Betty.Gao
 * @LastEditTime: 2022-08-24 14:31:00
 * @Description: 用户信息
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userInfo', {
  state: () => {
    'users'

    return {
      userName: '用户名',
      avatarUrl:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132',
      accessToken: '这里是token - -!'
    }
  },
  getters: {
    getAvatarUrl: (state) => {
      return state.avatarUrl
    },
    getUserName: (state) => {
      return state.userName
    },
    getToken: (state) => {
      return state.accessToken
    }
  },
  actions: {
    updeteUserName(value: string) {
      this.userName = value
    },
    updeteAvatarUrl(value: string) {
      this.avatarUrl = value
    },
    updeteToken(value: string) {
      this.accessToken = value
    }
  },
  persist: {
    enabled: true
  }
})

export default useUserStore
