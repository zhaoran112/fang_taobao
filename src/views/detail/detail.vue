<template>
  <div>
    <van-swipe :autoplay="3000" height="6.4rem" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="priceCard">
      <div>
        <span class="cc-price-pre">￥</span>
        <span class="cc-price-text">2249-2279</span>
      </div>
      <div>
        <span class="title"
          >【百亿补贴】Huawei/华为 nova 9 8+128GB 【无充电器】</span
        >
      </div>
    </div>
    <div class="card priceCard">
      <div class="flex-box">
        <div class="label-box">
          <span class="label card-2-item-title-text">选择</span>
        </div>
        <div class="right-box">
          <span class="card-2-item-content-top-text"
            >机身颜色/版本型号/套餐类型/存储容量</span
          >
          <div>
            <van-button size="mini" type="primary">9号色【8G】</van-button>
            <van-button size="mini" type="primary">亮黑色【8G】</van-button>
            <van-button size="mini" type="primary">普罗旺斯【8G】</van-button>
          </div>
        </div>
      </div>
      <div class="flex-box">
        <div class="label-box">
          <span class="label card-2-item-title-text">发货</span>
        </div>
        <div class="right-box">
          <span class="card-2-item-content-top-text">浙江杭州</span>
        </div>
      </div>
      <div class="flex-box">
        <div class="label-box">
          <span class="label card-2-item-title-text">保障</span>
        </div>
        <div class="right-box">
          <span class="card-2-item-content-top-text">7天无理由退换货</span>
        </div>
      </div>
      <div class="flex-box">
        <div class="label-box">
          <span class="label card-2-item-title-text">参数</span>
        </div>
        <div class="right-box">
          <span class="card-2-item-content-top-text">网络类型</span>
        </div>
      </div>
    </div>
    <div style="height: 1rem"></div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-action-bar-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-action-bar-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-action-bar-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </van-action-bar>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  setup() {
    const images = [
      "https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
      "https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
    ];
    const onClickIcon = () => Toast("点击图标");
    const onClickButton = () => Toast("点击按钮");
    return { images, onClickIcon, onClickButton };
  },
};
</script>

<style lang='scss'>
.van-swipe-item {
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
.priceCard {
  background-color: #fff;
  margin: 2.1333vw;
  border-radius: 3.2vw;
  background-color: #fff;
  padding: 3.2vw;
  min-height: 26.66667vw;
  .cc-price-pre {
    font-size: 4vw;
    color: #ff5000;
    padding-top: 1.6vw;
  }
  .cc-price-text {
    font-size: 6.4vw;
    color: #ff5000;
    line-height: 6.4vw;
    font-weight: 600;
  }
  .title {
    margin-top: 1.6vw;
    font-size: 4.8vw;
    line-height: 6.4vw;
    color: #333;
    font-weight: 700;
    width: 90.66667vw;
    text-overflow: ellipsis;
    display: inline-block;
  }
}
.flex-box {
  display: flex;
  margin-top: 5.33333vw;
  &:first-child {
    margin-top: 0;
  }
  .label-box {
    padding-right: 5vw;
    .card-2-item-title-text {
      font-size: 3.73333vw;
      color: #999;
    }
  }
  .card-2-item-content-top-text {
    color: #333;
    font-size: 3.73333vw;
    line-height: 3.73333vw;
  }
  .van-button--primary {
    margin-top: 1.8667vw;
    color: rgb(153, 153, 153);
    font-size: 3.2vw;
    background-color: rgb(238, 238, 238);
    padding: 1.6vw;
    border-radius: 1.6vw;
    border: 0;
  }
}
</style>