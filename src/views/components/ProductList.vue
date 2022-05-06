<template>
  <div class="list">
    <van-grid :gutter="10" :column-num="2" :center="false">
      <van-grid-item v-for="(value, index) in productList" :key="index">
        <van-image height="100%" :src="value.img" />
        <div class="recommend-title">
          <span class="recommend-title-p">
            {{ value.title }}
          </span>
        </div>
        <div class="recommend-price-box">
          <span class="recommend-sign recommend-h">￥</span>
          <span class="recommend-price">{{ value.price }}</span>
          <span class="recommend-payed">{{ value.recommendPayed }}</span>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  props: {
    productList: {
      type: Array,
    },
  },
};
</script>

<style lang='scss' scoped>
.list {
  margin-top: 0.1rem;
  .recommend-title {
    padding-left: 0.18rem;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: transparent;
    height: 50px;
    .recommend-title-p {
      font-size: 0.12rem;
      color: #333333;
      background-color: transparent;
    }
  }
  .recommend-price-box {
    padding-left: 0.18rem;
    flex-direction: row;
    height: 34.13333333333333px;
    line-height: 34.13333333333333px;
    background-color: transparent;
    .recommend-sign {
      font-size: 0.14rem;
      margin-left: getUnit(-6);
      margin-bottom: getUnit(-1);
      background-color: transparent;
    }
    .recommend-h {
      color: #ff5500;
      background-color: transparent;
    }
    .recommend-price {
      font-size: 0.14rem;
      line-height: 27.306666666666665px;
      color: #ff5500;
      background-color: transparent;
    }
    .recommend-payed {
      font-size: 0.12rem;
      color: #999999;
      margin-top: 0.04rem;
      margin-left: 0.18rem;
      background-color: transparent;
    }
  }
}
::v-deep .van-grid {
  padding-left: 0 !important;
  .van-grid-item {
    .van-grid-item__content {
      border-radius: 0.2rem;
      padding: 0;
    }
  }
  .van-grid-item:nth-child(2n) {
    padding-right: 0 !important;
  }
}
</style>