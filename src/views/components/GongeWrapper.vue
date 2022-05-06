<template>
  <div class="gonge-wrapper">
    <van-grid :column-num="2" :center="false">
      <van-grid-item v-for="(value, index) in gongeList" :key="index">
        <div class="box bg">
          <div class="left bg">
            <p class="bg gg-item">
              <span class="bg gg-item-title">{{ value.title }}</span>
              <span class="bg sub_title">{{ value.sub_title }}</span>
            </p>
            <van-image width="1.08rem" height="1.08rem" :src="value.left_img" />
          </div>
          <div class="right bg">
            <van-image
              width="1.37rem"
              height="1.37rem"
              :src="value.right_img"
            />
          </div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  props: {
    gongeList: {
      type: Array,
    },
  },
};
</script>

<style lang='scss' scoped>
.bg {
  background-color: transparent;
}
.box {
  /* position: relative; */

  display: flex;
  justify-content: space-between;
  padding-top: 0.15rem;
}
.gg-item {
  position: absolute;
  left: 0.04rem;
  top: 0.04rem;
  z-index: 1;
  display: flex;
  align-items: center;
}
.gg-item-title {
  font-size: 0.3rem;
  color: #111111;
  padding-left: 0.06rem;
}
.sub_title {
  background-color: rgb(255, 66, 0);
  color: #fff;
  font-size: 0.11rem;
  margin-left: 0.06rem;
  padding: 0 0.02rem;
}
::v-deep .van-grid-item {
  // height: 1.1rem;
  /* width: 1.785rem; */
  .van-grid-item__content {
    padding-bottom: 0;
  }
}
.gonge-wrapper {
  margin-top: 0.1rem;
  border-radius: 0.2rem;
  overflow: hidden;
}
</style>