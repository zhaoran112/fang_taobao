<template>
  <div class="box">
    <div class="left-box">
      <div class="btn-item">
        <van-icon name="arrow-left" />
      </div>
      <div class="divider-light"></div>
      <div class="btn-item">
        <van-icon name="ellipsis" />
      </div>
    </div>
    <div class="right search-input-box">
      <div class="change-search-type-wrapper">
        <van-dropdown-menu>
          <van-dropdown-item
            v-model="value1"
            :options="option1"
          />
        </van-dropdown-menu>
      </div>
      <div class="rax-view-v2 input-gap-line"></div>
      <div class="input-box-wrap">
        <!-- <van-field v-model="text" label="" /> -->
        <van-search
          v-model="value"
          shape="round"
          :left-icon="null"
          background="transparent"
          placeholder="请输入搜索关键词"
        />
      </div>
      <div class="search-btn"></div>
      <div class="clear-icon-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: "商品", value: 0 },
        { text: "店铺", value: 1 },
      ],
    };
  },
  methods: {
    getContainer() {
      return document.querySelector(".change-search-type-wrapper");
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0.1rem;
  .left-box {
    display: flex;
    align-items: center;
    border-radius: 0.3rem;
    height: 0.52rem;
    width: 1.34rem;
    border: 1px solid rgba(17, 17, 17, 0.5);
    .btn-item {
      flex: 1;
      text-align: center;
    }
    .divider-light {
      height: 0.26rem;
      width: 1px;
      opacity: 0.5;
      background: #111111;
    }
  }
  .search-input-box {
    display: flex;
    align-items: center;
    background-color: #f7f7f7;
    border-radius: 4.8vw;
    height: 0.52rem;
    justify-content: flex-start;
    // width: 71.86667vw;
    flex: 1;
    margin-left: 0.1rem;
    .change-search-type-wrapper {
      width: 1.2rem;
      /* height: 100%; */
      overflow: hidden;
      ::v-deep .van-dropdown-menu__bar {
        height: 0.52rem;
        background-color: transparent;
      }
    }
    .input-gap-line {
      border-left: 1px solid #ccc;
      height: 60%;
      margin-left: 1.33333vw;
      width: 1px;
    }
    ::v-deep .van-cell {
      background-color: transparent !important;
    }
    ::v-deep .van-search {
      background: transparent;
      height: 0.52rem;
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>