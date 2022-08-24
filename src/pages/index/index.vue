<template>
  <view class="content">
    {{ nickName }}
    <u-avatar :src="avatarUrl"></u-avatar>
    <u-button @click="wxNormalLogin">微信普通登录</u-button>
    <u-button class="one" open-type="getPhoneNumber" @getphonenumber="getphone">
      手机号一键登录
    </u-button>
  </view>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, onMounted, onUpdated, onUnmounted } from 'vue'
import useStore from '@/store'

/**
 * 全局数据
 */
const accountInfo = uni.getAccountInfoSync() // app配置信息
const { appId } = accountInfo.miniProgram // appId
const WX_AUTH_URL = 'https://api.weixin.qq.com/sns/jscode2session'; // 小程序提供
// store里的数据
const store = useStore()
const { useUserStore } = store
const nickName = computed(() => useUserStore.getUserName) // 用户昵称
const avatarUrl = computed(() => useUserStore.getAvatarUrl) // 用户头像

/**
 * 方法
 */

// 登录
const wxNormalLogin = () => {
  // 获取code小程序专有，用户登录凭证。
  uni.login({
    provider: 'weixin',
    success: (res) => {
      console.log(`login:`, res)
      if (res.errMsg === 'login:ok') {
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

// 获取手机号
const getphone = (e: { detail: { iv: any; encryptedData: any } }) => {
  // 获取code小程序专有，用户登录凭证。
  uni.login({
    provider: 'weixin',
    success: (res) => {
      console.log(`login:`, res)
      if (res.errMsg === 'login:ok') {
        useUserStore.updeteToken(res.code)
      }
    }
  })
  console.log(e)
  if (!e.detail.iv) {
    uni.showToast({
      title: '获取手机号失败',
      icon: 'none'
    })
    return
  }
  const that = this
  // 验证code值是否过期
  uni.checkSession({
    success(val) {
      if (val.errMsg === 'checkSession:ok') {
        // const obj = {
        //   code: that.code,
        //   iv: e.detail.iv,
        //   encryptedData: e.detail.encryptedData
        // }
        // that.decryptPhone(obj)
      } else {
        uni.login({
          provider: 'weixin',
          success(res) {
            // const { code } = res
            // const obj = {
            //   code,
            //   iv: e.detail.iv,
            //   encryptedData: e.detail.encryptedData
            // }
            // that.decryptPhone(obj)
          }
        })
      }
    }
  })
}

/**
 * 生命周期
 */
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onUpdated(() => {
  console.log('onUpdated')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
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
