<template>
  <view class="content">
    {{ test }}
    <u-avatar :src="src"></u-avatar>
    <u-top-tips ref="uTips"></u-top-tips>
    <u-button type="primary" shape="square" @click="handleClick">乌啼</u-button>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppstore } from '@/store/modules/app'

const appStore = useAppstore()
const test = computed(() => {
  return appStore.getTest
})
const src = '/static/logo.png'
function handleClick() {
  appStore.changeVal()
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
