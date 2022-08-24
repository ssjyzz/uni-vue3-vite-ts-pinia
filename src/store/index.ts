/*
 * @Author: Betty.Gao
 * @Date: 2022-08-09 14:45:57
 * @LastEditors: Betty.Gao
 * @LastEditTime: 2022-08-24 17:07:32
 * @Description: store主模块
 */
import useUserStore from './modules/user'

export default function useStore() {
  return {
    useUserStore: useUserStore() // 用户信息
  }
}
