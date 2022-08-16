/*
 * @Author: Betty.Gao
 * @Date: 2022-08-09 14:45:57
 * @LastEditors: Betty.Gao
 * @LastEditTime: 2022-08-16 10:42:17
 * @Description: store用户信息
 */
import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: '雅儿贝德',
      age: 100
    }
  }
})

export default useUserStore
