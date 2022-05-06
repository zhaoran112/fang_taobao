<template>
  <div class="box">
    <div class="header">
      <div class="left">
        <div>
          <van-image
            width="0.85rem"
            height="0.85rem"
            round
            src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
        <div class="name">
          <div class="Header--userName--2hoesag">
            <span>test</span>
          </div>
          <div class="Header--userIdText--2F8uC_n">
            <span>账号名称：12345</span>
          </div>
        </div>
      </div>
      <div class="right">
        <van-icon name="setting-o" />
      </div>
    </div>
    <van-grid :column-num="3" :border="false">
      <van-grid-item icon="photo-o" text="收藏" />
      <van-grid-item icon="photo-o" text="订阅店铺" />
      <van-grid-item icon="photo-o" text="足迹" />
    </van-grid>
    <MyOrder />
    <MyTool />
    <tabbar :active="2" />
  </div>
</template>

<script>
import MyOrder from "./components/MyOrder.vue";
import MyTool from "./components/MyTool.vue";
import tabbar from "../components/tabbar.vue";

export default {
  components: { MyOrder, MyTool, tabbar },
};
</script>

<style lang="scss" scoped>
.box {
  padding: 0.16rem;
  padding-bottom: 0.9rem;
}
.header {
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    .name {
      margin-left: 0.1rem;
      .Header--userName--2hoesag {
        color: #000;
        font-size: 4.8vw;
        font-weight: 700;
        line-height: 4.8vw;
      }
      .Header--userIdText--2F8uC_n {
        color: #999;
        font-size: 3.2vw;
        line-height: 3.2vw;
        margin-top: 2.4vw;
      }
    }
  }
}
::v-deep .van-grid-item__content {
  background-color: transparent;
}
</style>