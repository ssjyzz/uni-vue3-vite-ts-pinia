/*
 * @Author: Betty.Gao
 * @Date: 2022-08-18 11:21:35
 * @LastEditors: Betty.Gao
 * @LastEditTime: 2022-08-19 17:50:24
 * @Description: uers
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userInfo', {
  state: () => {
    'users'

    return {
      userName: '懒散的无名酱',
      avatarUrl:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132',
      accessToken: '这里是token - -!'
    }
  },
  getters: {
    getavAtarUrl: (state) => {
      return state.avatarUrl
    },
    getToken: (state) => {
      return state.accessToken
    }
  },
  actions: {
    updeteAvatarUrl(value: string) {
      this.avatarUrl = value
    },
    setToken(value: string) {
      this.accessToken = value
    }
  },
  persist: {
    enabled: true
  }
})

export default useUserStore
