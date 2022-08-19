<template>
  <view class="content">
    value:{{ value }}

    token:{{ token }}
    <u-input type="text" v-model="value" />
    <u-avatar :src="src"></u-avatar>
    <u-button @click="login()">微信一键登录</u-button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useStore from '@/store'

const store = useStore()
const { useUserStore } = store
const src = '/static/logo.png'
const value = ref('。。。')
useUserStore.setToken('我累了')
const token = useUserStore.getToken
// token = ref(token)
console.log(token)
// methods 中新增方法
function login() {
  // 获取code小程序专有，用户登录凭证。
  uni.getUserProfile({
    desc: '获取用户基本资料',
    success: (res) => {
      // this.userInfo = res.userInfo
      console.log(`getUserProfile:`, res)
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
  // 获取成功基本资料后开启登录，基本资料首先要授权
  uni.login({
    provider: 'weixin',
    success: (res) => {
      console.log(res)
      if (res.errMsg === 'login:ok') {
        console.log(`login:`, res)
      }
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
