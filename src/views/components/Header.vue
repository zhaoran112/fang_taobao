<template>
  <div class="header">
    <div class="logo">
      <van-image
        width="0.95rem"
        height="0.36rem"
        :src="require('../../assets/images/taobao.png')"
      />
    </div>
    <div class="middle">
      <input class="input" type="text" placeholder="寻找宝贝店铺" />
      <div class="search-btn">搜索</div>
    </div>
    <div class="right">
      <van-image
        width="0.56rem"
        height="0.56rem"
        :src="require('../../assets/images/签到.png')"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  margin: 0.1rem 0;
  display: flex;
  align-items: center;
  .logo {
    width: 1.2rem;
  }
  .middle {
    flex: 1;
    position: relative;
    .input {
      width: 100%;
      border: 0.015rem solid #ff5000;
      padding: 0.15rem 0 0.15rem 0.15rem;
      border-radius: 0.2rem;
    }
    .search-btn {
      position: absolute;
      right: 0.03rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0.8rem;
      height: 0.45rem;
      border: 0.01rem solid #fff;
      text-align: center;
      line-height: 0.45rem;
      font-size: 0.14rem;
      color: #fff;
      border-radius: 0.2rem;
      background: linear-gradient(to right, #ff8d0e, #ff5000);
      font-size: 0.18rem;
    }
  }
  .right {
    width: 0.8rem;
    text-align: right;
  }
}
</style>