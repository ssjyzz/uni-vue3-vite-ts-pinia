<template>
  <view class="content">
    {{ nickName }}
    <u-avatar :src="avatarUrl"></u-avatar>
    <u-button @click="wxNormalLogin">微信普通登录</u-button>
    <!-- <u-button class="one" open-type="getPhoneNumber" @getphonenumber="getphone">
      手机号一键登录
    </u-button> -->
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
const WX_AUTH_URL = 'https://api.weixin.qq.com/sns/jscode2session' // 小程序提供
// store里的数据
const store = useStore()
const { useUserStore } = store
const nickName = computed(() => useUserStore.getUserName) // 用户昵称
const avatarUrl = computed(() => useUserStore.getAvatarUrl) // 用户头像
const loginCode = computed(() => useUserStore.getLoginCode) // 登录code
const openId = computed(() => useUserStore.getOpenId) // openid 用户唯一标识
const sessionKey = computed(() => useUserStore.getSessionKey)

/**
 * 方法
 */

// 获取code小程序专有，用户登录凭证
const getLoginCode = () => {
  // 获取code小程序专有，用户登录凭证。
  uni.login({
    provider: 'weixin',
    success: (res) => {
      console.log(`login:`, res)
      if (res.errMsg === 'login:ok') {
        useUserStore.updateLoginCode(res.code)
      }
    }
  })
}

// 普通登录
const wxNormalLogin = () => {
  // 授权获取成功基本资料
  uni.getUserProfile({
    desc: '获取用户基本资料',
    success: (res) => {
      console.log(`getUserProfile:`, res)
      const { userInfo } = res
      useUserStore.updateAvatarUrl(userInfo.avatarUrl)
      useUserStore.updateUserName(userInfo.nickName)
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

// 获取手机号一键登录
const getphone = (e: { detail: { iv: any; encryptedData: any } }) => {
  console.log(e)
  if (!e.detail.iv) {
    uni.showToast({
      title: '获取手机号失败',
      icon: 'none'
    })
    return
  }
  const param = {
    appid: appId,
    secret: 'bf585a254a95523b0db753457e3250fa',
    js_code: loginCode.value,
    grant_type: 'authorization_code'
  }
  console.log(`param:`, param)
  uni.request({
    url: WX_AUTH_URL,
    method: 'GET',
    data: param,
    success: (cts: any) => {
      // 换取成功后 暂存这些数据 留作后续操作
      console.log(`cts:`, cts)
      const { data } = cts
      const { openid, session_key } = data
      useUserStore.updateOpenId(openid)
      useUserStore.updateSessionKey(session_key)
      // this.unionid = cts.data.unionid // unionid 开放平台唯一标识   当公众号和小程序同时登录过才会有
    }
  })
  // 调用后台接口获取手机号码
  uni.request({
    url: '', // 后台获取手机号接口地址
    method: 'POST',
    data: {
      encryptedData: e.detail.encryptedData,
      iv: e.detail.iv,
      sessionKey: openId.value,
      openId: sessionKey.value
    },
    success: (res: any) => {
      if (res.data.errorinfo == null) {
        console.log(`手机号`, res.data) // 手机号
      }
    },
    fail: (res) => {
      console.log(res)
    }
  })
}

/**
 * 生命周期
 */
onBeforeMount(() => {
  getLoginCode()
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
