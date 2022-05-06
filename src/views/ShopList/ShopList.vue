<template>
  <div style="background: #fff">
    <van-sticky>
      <search></search>
      <div class="rax-view-v2">
        <div class="comprehensive">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
        <div class="sales">
          <span>销量</span>
        </div>
        <div class="rightBox">
          <div class="listType">
            <van-icon name="apps-o" />
          </div>
          <div class="TopFilter--filter--3aA9Si1">
            <span>筛选</span>
            <van-icon name="filter-o" />
          </div>
        </div>
      </div>
      <div class="listHeaderWrapper">
        <div class="PreFilter--PreFilterWrapper--2Aqcq5h">
          <div class="PreFilter--PreFilterScrollView--1BOlOD4">
            <div class="rax-scrollview-content-container-horizontal">
              <div class="item">
                <van-dropdown-menu>
                  <van-dropdown-item v-model="value2" :options="option2" />
                </van-dropdown-menu>
              </div>
              <div class="item">
                <van-dropdown-menu>
                  <van-dropdown-item v-model="value2" :options="option2" />
                </van-dropdown-menu>
              </div>
              <div class="item">
                <van-dropdown-menu>
                  <van-dropdown-item v-model="value2" :options="option2" />
                </van-dropdown-menu>
              </div>
              <div class="item">
                <van-dropdown-menu>
                  <van-dropdown-item v-model="value2" :options="option2" />
                </van-dropdown-menu>
              </div>
              <div class="item">
                <van-dropdown-menu>
                  <van-dropdown-item v-model="value2" :options="option2" />
                </van-dropdown-menu>
              </div>
              <div class="item">
                <van-dropdown-menu>
                  <van-dropdown-item v-model="value2" :options="option2" />
                </van-dropdown-menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-sticky>
    <div class="card2">
      <van-grid :border="false" :center="false" :column-num="2">
        <van-grid-item
          v-for="(value, index) in list"
          @click="handelClick"
          :key="index"
        >
          <van-image width="3.05rem" height="3.05rem" :src="value.img" />
          <div>
            <span class="product-title">{{ value.title }}</span>
          </div>
          <div class="Price--priceWrapper--1c2G3Hk">
            <span class="Price--unit--2DJp716">¥</span>
            <span class="Price--priceInt--3lWRdKf">2279.00</span>
            <span class="Price--realSales--3_A9hPO">94人付款</span>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import search from "./components/search.vue";
export default {
  components: { search },
  data() {
    return {
      value1: 0,
      option1: [
        { text: "商品", value: 0 },
        { text: "店铺", value: 1 },
      ],
      value2: 0,
      option2: [
        { text: "运行内存", value: 0 },
        { text: "热门型号", value: 1 },
      ],
      list: [
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
        {
          title: "活动专享Huawei/华为NOVA 9",
          img: require("../../assets/images/shouji.png"),
        },
      ],
    };
  },
  methods: {
    handelClick() {
      this.$router.push("/detail");
    },
  },
};
</script>

<style lang="scss" scoped>
.rax-view-v2 {
  display: flex;
  background: #fff;
  align-items: center;
  .comprehensive {
    flex: 1;
    ::v-deep .van-dropdown-menu__item {
      justify-content: initial;
    }
    ::v-deep .van-dropdown-menu__bar {
      box-shadow: none;
    }
  }
  .sales {
    flex: 1;
    text-align: center;
  }
  .rightBox {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    height: 0.28rem;
    line-height: 0.28rem;
    padding-right: 0.1rem;
    .listType {
      width: 0.6rem;
    }
    .TopFilter--filter--3aA9Si1 {
      width: 1rem;
      text-align: right;
      border-left: 1px solid #d8d8d8;
    }
  }
}
.listHeaderWrapper {
  background-color: #fff;
  padding-top: 0.26667vw;
  padding-bottom: 0.1rem;
  .PreFilter--PreFilterWrapper--2Aqcq5h {
    margin: 0 1.6vw;
    .PreFilter--PreFilterScrollView--1BOlOD4 {
      overflow: scroll hidden;
      .rax-scrollview-content-container-horizontal {
        display: flex;
        .item {
          flex: 1;
          margin-right: 0.1rem;
          ::v-deep .van-dropdown-menu {
            width: 1.6rem;
            .van-dropdown-menu__bar {
              box-shadow: none;
              background-color: #f6f6f6;
              border-radius: 0.4rem;
              height: 0.52rem;
            }
          }
        }
      }
    }
  }
}
::v-deep .van-grid-item__content {
  padding: 0;
}
.card2 {
  ::v-deep .van-grid-item {
    margin-bottom: 0.2rem;
  }
  .product-title {
    font-size: 3.46667vw;
    color: #000;
    font-weight: bold;
    margin: 0.1rem;
  }
  .Price--priceWrapper--1c2G3Hk {
    margin: 0.66667vw 0 0 1.6vw;
    width: 44.4vw;
    .Price--unit--2DJp716 {
      color: #ff5000;
      font-family: Alibaba-Sans102, PingFangSC-Medium;
      font-size: 3.2vw;
      font-weight: 700;
      line-height: 3.73333vw;
    }
    .Price--price--PavxwZE,
    .Price--priceInt--3lWRdKf {
      color: #ff5000;
      font-family: Alibaba-Sans102, PingFangSC-Regular;
      font-size: 5.6vw;
      font-weight: 700;
      line-height: 5.6vw;
      margin-left: 0.66667vw;
    }
    .Price--realSales--3_A9hPO {
      color: #999;
      font-family: PingFangSC-Regular;
      font-size: 3.2vw;
      line-height: 4.53333vw;
      margin-left: 1.33333vw;
    }
  }
}
</style>