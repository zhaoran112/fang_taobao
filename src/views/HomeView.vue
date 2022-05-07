<template>
  <div class="px-20">
    <Header />
    <Swipe :swipe-list="swipeList" />
    <GongeWrapper :gonge-list="gongeList" />
    <ProductList :product-list="productList" />
    <tabbar></tabbar>
  </div>
</template>

<script>
import { reactive } from "vue";

import Header from "./components/Header.vue";
import Swipe from "./components/Swipe.vue";
import GongeWrapper from "./components/GongeWrapper.vue";
import ProductList from "./components/ProductList.vue";
import tabbar from "./components/tabbar.vue";
export default {
  components: {
    Header,
    Swipe,
    GongeWrapper,
    ProductList,
    tabbar,
  },
  setup(props) {
    const swipeList = reactive([
      {
        img: require("../assets/images/tianmao.png"),
        text: "天猫新品",
      },
      {
        img: require("../assets/images/tianmao.png"),
        text: "天猫新品",
      },
      {
        img: require("../assets/images/tianmao.png"),
        text: "天猫新品",
      },
      {
        img: require("../assets/images/tianmao.png"),
        text: "天猫新品",
      },
      {
        img: require("../assets/images/tianmao.png"),
        text: "天猫新品",
      },
      {
        img: require("../assets/images/tianmao.png"),
        text: "天猫新品",
      },
      {
        img: require("../assets/images/tianmao.png"),
        text: "天猫新品",
      },
      {
        img: require("../assets/images/tianmao.png"),
        text: "天猫新品",
      },

      {
        img: require("../assets/images/tianmao.png"),
        text: "天猫新品",
      },

      {
        img: require("../assets/images/fenlei.png"),
        text: "分类",
      },
    ]);
    const gongeList = reactive([
      {
        title: "聚划算",
        sub_title: "品牌折扣",
        left_img: require("../assets/images/bi.jpg"),
        right_img: require("../assets/images/1.jpg"),
      },
      {
        title: "聚划算",
        sub_title: "品牌折扣",
        left_img: require("../assets/images/bi.jpg"),
        right_img: require("../assets/images/1.jpg"),
      },
      {
        title: "聚划算",
        sub_title: "品牌折扣",
        left_img: require("../assets/images/bi.jpg"),
        right_img: require("../assets/images/1.jpg"),
      },
      {
        title: "聚划算",
        sub_title: "品牌折扣",
        left_img: require("../assets/images/bi.jpg"),
        right_img: require("../assets/images/1.jpg"),
      },
    ]);
    const productList = reactive([
      {
        img: require("../assets/images/caiban.jpg"),
        title: "家用厨房案板切菜板竹粘板大号实木切板切肉菜板水果砧板小宿舍用",

        price: "9.9",
        recommendPayed: "200+人已购买",
      },
      {
        img: require("../assets/images/caiban.jpg"),
        title: "家用厨房案板切菜板竹粘板大号实木切板切肉菜板水果砧板小宿舍用",

        price: "9.9",
        recommendPayed: "200+人已购买",
      },
      {
        img: require("../assets/images/caiban.jpg"),
        title: "家用厨房案板切菜板竹粘板大号实木切板切肉菜板水果砧板小宿舍用",

        price: "9.9",
        recommendPayed: "200+人已购买",
      },
      {
        img: require("../assets/images/caiban.jpg"),
        title: "家用厨房案板切菜板竹粘板大号实木切板切肉菜板水果砧板小宿舍用",

        price: "9.9",
        recommendPayed: "200+人已购买",
      },
      {
        img: require("../assets/images/caiban.jpg"),
        title: "家用厨房案板切菜板竹粘板大号实木切板切肉菜板水果砧板小宿舍用",

        price: "9.9",
        recommendPayed: "200+人已购买",
      },
      {
        img: require("../assets/images/caiban.jpg"),
        title: "家用厨房案板切菜板竹粘板大号实木切板切肉菜板水果砧板小宿舍用",

        price: "9.9",
        recommendPayed: "200+人已购买",
      },
      {
        img: require("../assets/images/caiban.jpg"),
        title: "家用厨房案板切菜板竹粘板大号实木切板切肉菜板水果砧板小宿舍用",

        price: "9.9",
        recommendPayed: "200+人已购买",
      },
      {
        img: require("../assets/images/caiban.jpg"),
        title: "家用厨房案板切菜板竹粘板大号实木切板切肉菜板水果砧板小宿舍用",

        price: "9.9",
        recommendPayed: "200+人已购买",
      },
      {
        img: require("../assets/images/caiban.jpg"),
        title: "家用厨房案板切菜板竹粘板大号实木切板切肉菜板水果砧板小宿舍用",

        price: "9.9",
        recommendPayed: "200+人已购买",
      },
      {
        img: require("../assets/images/caiban.jpg"),
        title: "家用厨房案板切菜板竹粘板大号实木切板切肉菜板水果砧板小宿舍用",

        price: "9.9",
        recommendPayed: "200+人已购买",
      },
      {
        img: require("../assets/images/caiban.jpg"),
        title: "家用厨房案板切菜板竹粘板大号实木切板切肉菜板水果砧板小宿舍用",

        price: "9.9",
        recommendPayed: "200+人已购买",
      },
      {
        img: require("../assets/images/caiban.jpg"),
        title: "家用厨房案板切菜板竹粘板大号实木切板切肉菜板水果砧板小宿舍用",

        price: "9.9",
        recommendPayed: "200+人已购买",
      },
      {
        img: require("../assets/images/caiban.jpg"),
        title: "家用厨房案板切菜板竹粘板大号实木切板切肉菜板水果砧板小宿舍用",

        price: "9.9",
        recommendPayed: "200+人已购买",
      },
      {
        img: require("../assets/images/caiban.jpg"),
        title: "家用厨房案板切菜板竹粘板大号实木切板切肉菜板水果砧板小宿舍用",

        price: "9.9",
        recommendPayed: "200+人已购买",
      },
    ]);
    return {
      swipeList,
      gongeList,
      productList,
    };
  },
};
</script>

<style scoped>
.px-20 {
  padding-left: 0.2rem;
  padding-right: 0.2rem;
}
</style>