<template>
  <div class="swipe">
    <van-grid :column-num="5" :border="false">
      <van-grid-item
        v-for="(value, index) in swipeList"
        :key="index"
        @click="handelClick(index)"
      >
        <van-image
          class="bg"
          width="0.61rem"
          height="0.48rem"
          :src="value.img"
        />
        <p class="bg van-grid-item-title">{{ value.text }}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  props: {
    swipeList: {
      type: Array,
    },
  },
  setup(props) {
    const router = useRouter()
    const handelClick = (n) => {
      router.push(`/classify/${1}`)
    };
    return {
      handelClick,
    };
  },
};
</script>

<style lang='scss' scoped>
.swipe,
.bg {
  background-color: transparent;
}
.swipe {
  border-radius: 0.2rem;
  overflow: hidden;
}
.van-grid-item-title {
  font-size: 0.13rem;
  color: #666666;
  letter-spacing: 0;
}
</style>