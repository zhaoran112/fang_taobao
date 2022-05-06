<template>
  <div class="box">
    <div class="sidebar">
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
    </div>
    <div class="card">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
// import ClassifyContainer from "./components/ClassifyContainer.vue";
export default {
  // components: { ClassifyContainer },
  data() {
    return {
      active: 0,
    };
  },
  watch: {
    active: {
      handler(n) {
        this.$router.replace(`/classify/${++n}`);
      },
    },
    id: {
      handler(id) {
        console.log(id, "id");
      },
      immediate: true,
    },
  },
  computed: {
    id: {
      get() {
        return this.$route.params.id;
      },
    },
  },
  mounted() {
    // console.log("[ this.$route.params.id ] >", this.$route.params.id);
  },
};
</script>

<style lang='scss' scoped>
.box {
  display: flex;
  .card {
    flex: 1;
    height: fit-content;
  }
}
</style>