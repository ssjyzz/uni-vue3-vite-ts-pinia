<template>
  <view class="content">
    {{ test }}
    <u-avatar :src="src"></u-avatar>
    <u-top-tips ref="uTips"></u-top-tips>
    <u-button type="primary" shape="square">乌啼</u-button>
  </view>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
import useStore from '@/store'

const { userStore } = useStore()

const src = '/static/logo.png'
const test = userStore.name
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
