<template>
  <view class="content">
    {{ nickName }}
    <u-avatar :src="avatarUrl"></u-avatar>
    <u-button @click="login()">微信登录</u-button>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useStore from '@/store'

/**
 * store里的数据
 */
const store = useStore()
const { useUserStore } = store
const nickName = computed(() => useUserStore.getUserName) // 用户昵称
const avatarUrl = computed(() => useUserStore.getAvatarUrl) // 用户头像

/**
 * 方法
 */

// 登录
function login() {
  // 获取code小程序专有，用户登录凭证。
  uni.login({
    provider: 'weixin',
    success: (res) => {
      console.log(res)
      if (res.errMsg === 'login:ok') {
        console.log(`login:`, res)
        useUserStore.updeteToken(res.code)
      }
    }
  })
  // 授权获取成功基本资料
  uni.getUserProfile({
    desc: '获取用户基本资料',
    success: (res) => {
      console.log(`getUserProfile:`, res)
      const { userInfo } = res
      useUserStore.updeteAvatarUrl(userInfo.avatarUrl)
      useUserStore.updeteUserName(userInfo.nickName)
    },
    // 用户取消登录后的提示
    fail: () => {
      uni.showModal({
        title: '授权用户信息失败！',
        // 是否显示取消按钮，默认为true
        showCancel: false
      })
    }
  })
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $uni-bg-color;
}
</style>
