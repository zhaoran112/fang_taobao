<template>
  <div style="padding-bottom: 1.4rem">
    <div v-for="(item, index) in productList" :key="index">
      <cart-component
        ref="cart"
        :data-json="item"
        v-model:item-checked="item.checkedAll"
        @getChecked="getChecked"
      />
    </div>
    <div class="cart-box">
      <div>
        <van-checkbox
          icon-size="0.2rem"
          @click="handelClick(checkedAll)"
          v-model="checkedAll"
          >全选</van-checkbox
        >
      </div>
      <div>
        <span>合计：0</span>
        <!-- <van-button type="info">结算</van-button> -->
      </div>
    </div>
    <tabbar :active="1" />
  </div>
</template>

<script>
import cartComponent from "./components/cartComponent.vue";
import tabbar from "../components/tabbar.vue";

export default {
  components: {
    cartComponent,
    tabbar,
  },
  data() {
    return {
      checkedAll: false,
      checkedNum: 0,
      productList: [
        {
          name: "高等教育出版社",
          checkedAll: false,
          list: [
            {
              num: "2",
              price: "2.00",
              desc: "描述信息",
              title: "商品标题",
              thumb: "https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
            },
          ],
        },
        {
          name: "出版社",
          checkedAll: false,
          list: [
            {
              num: "2",
              price: "2.00",
              desc: "描述信息",
              title: "商品标题",
              thumb: "https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
            },
            {
              num: "2",
              price: "222.00",
              desc: "描述信息",
              title: "商品标题",
              thumb: "https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handelClick(flag) {
      this.$refs.cart.forEach((el, index) => {
        this.$refs.cart[index].$refs.checkboxGroup.toggleAll(flag);
      });
    },
    getChecked() {
      const flag = this.productList.every((item) => item.checkedAll);
      if (flag) {
        this.checkedAll = true;
      } else {
        this.checkedAll = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-box {
  height: 0.6rem;
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0.78rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  font-size: 0.14rem;
  ::v-deep .van-checkbox__label {
    font-size: 0.14rem;
  }
}
</style>