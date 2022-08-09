<template>
  <view class="content">
    {{ test }}
  </view>
  <u-avatar :src="src"></u-avatar>
  <u-top-tips ref="uTips"></u-top-tips>
  <u-button type="primary" shape="square" @click="handleClick">乌啼</u-button>
</template>

<script setup lang="ts">
import { useAppstore } from '/@/store/modules/app'
import { computed } from 'vue'

const test = computed(() => {
  return useAppstore.getTest
})
const src = '/static/logo.png'
function handleClick() {
  useAppstore.changeVal()
  // this.$refs.uTips.show({
  //   title: '铁马冰河入梦来',
  //   type: 'success',
  //   duration: '2300'
  // })
}
</script>

<style lang="scss"></style>
