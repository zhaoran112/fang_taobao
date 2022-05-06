<template>
  <div class="card" v-for="(item, index) in list" :key="index">
    <h3 class="title">{{ item.title }}</h3>
    <van-grid :border="false" :column-num="3">
      <van-grid-item
        v-for="(value, index) in item.list"
        @click="handelClick(index)"
        :key="index"
      >
        <van-image width="1.06rem" height="1.06rem" :src="value.img" />
        <div>
          <span class="product-title">{{ value.title }}</span>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "手机",
          list: [
            {
              title: "华为",
              img: require("../../assets/images/weiyi.jpg"),
            },
            {
              title: "华为",
              img: require("../../assets/images/weiyi.jpg"),
            },
            {
              title: "华为",
              img: require("../../assets/images/weiyi.jpg"),
            },
            {
              title: "华为",
              img: require("../../assets/images/weiyi.jpg"),
            },
            {
              title: "华为",
              img: require("../../assets/images/weiyi.jpg"),
            },
            {
              title: "华为",
              img: require("../../assets/images/weiyi.jpg"),
            },
            {
              title: "华为",
              img: require("../../assets/images/weiyi.jpg"),
            },
            {
              title: "华为",
              img: require("../../assets/images/weiyi.jpg"),
            },
          ],
        },
        {
          title: "手机配件",
          list: [
            {
              title: "华为",
              img: require("../../assets/images/weiyi.jpg"),
            },
            {
              title: "华为",
              img: require("../../assets/images/weiyi.jpg"),
            },
            {
              title: "华为",
              img: require("../../assets/images/weiyi.jpg"),
            },
            {
              title: "华为",
              img: require("../../assets/images/weiyi.jpg"),
            },
            {
              title: "华为",
              img: require("../../assets/images/weiyi.jpg"),
            },
          ],
        },
      ],
    };
  },
  methods: {
    handelClick() {
      this.$router.push(`/shop_list`);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 0.16rem;
  border-radius: 0.21rem;
  padding-top: 0.24rem;
  padding-left: 0.24rem;
  background-color: #fff;
  .title {
    white-space: pre-wrap;
    border: 0px solid black;
    font-size: 0.28rem;
    line-height: 0.28rem;
    font-weight: bold;
    height: 27.3067px;
    color: rgb(51, 51, 51);
  }
  .product-title {
    font-size: 0.21rem;
    line-height: 0.3rem;
    text-align: center;
    color: rgb(102, 102, 102);
  }
}
</style>