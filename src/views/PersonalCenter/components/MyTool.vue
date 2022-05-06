<template>
  <div class="card">
    <div class="card-title-box">
      <div class="Order--headName--1NnSdsM">
        <span>我的工具</span>
      </div>
      <div class="Order--headTitle--1oWIdVh">
        <!-- <span>全部</span>
        <van-icon name="arrow" /> -->
      </div>
    </div>
    <van-grid :column-num="4" :border="false">
      <van-grid-item icon="photo-o" text="官方客服" />
      <van-grid-item icon="photo-o" text="适用领取" />
      <van-grid-item icon="photo-o" text="店铺会员" />
    </van-grid>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  padding: 0.16rem;
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  .card-title-box {
    display: flex;
    justify-content: space-between;
    .Order--headName--1NnSdsM {
      color: #111;
      font-size: 4vw;
      font-weight: 700;
      line-height: 4vw;
      margin-left: 2.4vw;
    }
    .Order--headTitle--1oWIdVh {
      color: #999;
      font-size: 3.2vw;
      line-height: 3.46667vw;
      margin-right: 1.06667vw;
    }
  }
}
</style>