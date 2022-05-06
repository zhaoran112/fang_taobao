<template>
  <van-tabbar v-model="active_" @change="onChange">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的淘宝</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  data() {
    return {
      active_: this.active,
    };
  },
  methods: {
    onChange(n) {
      if (n === 0) {
        this.$router.push("/home");
      }
      if (n === 1) {
        this.$router.push("/cart");
      }
      if (n === 2) {
        this.$router.push("/personalcenter");
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.van-tabbar-item {
  background-color: transparent;
}
</style>
