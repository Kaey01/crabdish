<template>
  <view class="content">
    <view class="top">
      <view class="top-container">
        <view class="top-left">
          <view class="title">{{ title }}</view>
          <view class="star">
            <uni-icons type="star-filled" size="16" color="#ff6000"></uni-icons>
            <span style="color: #ff6000">{{ star }}</span>
          </view>
          <view style="margin-top: 16rpx">
            <span class="rank">南京市好评榜第1名</span>
          </view>
        </view>
        <view class="top-right">
          <image src="@/static/index/crab.png" />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

const title = ref('小螃蟹的私人厨房')
const star = ref('5.0')
</script>

<style lang="scss" scoped>
.content {}
.top {
  background-image: url("@/static/index/topBackground.png");
  background-size: cover;
  padding: 16rpx;
}
.top-container {
  padding: 16rpx;
  background-color: #ffffff;
  width: 95%;
  margin: auto;
  height: 200rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #858687;
  border-radius: 8px;
  .top-left {
    .title {
      font-size: 54rpx;
      font-weight: bold;
    }
    .star {
      margin-top: 16rpx;
      .uni-icon {
        color: #ff6000;
      }
    }
    .rank {
      border-radius: 4px;
      font-size: 14px;
      color: #858687;
      background-color: #fbf5e8;
    }
  }
  image {
    width: 150rpx;
    height: 150rpx;
  }
}
</style>
