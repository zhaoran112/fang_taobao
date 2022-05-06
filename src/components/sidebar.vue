<template>
  <van-sidebar v-model="active">
    <van-sidebar-item title="女装" />
    <van-sidebar-item title="鞋靴" />
    <van-sidebar-item title="手机" />
    <van-sidebar-item title="母婴" />
    <van-sidebar-item title="饰品" />
    <van-sidebar-item title="食品" />
    <van-sidebar-item title="进口" />
    <van-sidebar-item title="男装" />
  </van-sidebar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>