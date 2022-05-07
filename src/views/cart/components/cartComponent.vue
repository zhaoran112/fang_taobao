<template>
  <div class="cart">
    <div class="flex">
      <div class="leftCon" style="display: flex">
        <van-checkbox
          v-model="allChecked"
          icon-size="0.2rem"
          name="a"
        ></van-checkbox>
        <span class="title" style="margin-left: 10px">
          <span>{{ dataJson.name }}</span>
          <van-icon name="arrow" />
        </span>
      </div>
      <div class="rightCon">
        <span class="text">领券</span>
      </div>
    </div>
    <van-checkbox-group
      icon-size="0.2rem"
      v-model="checkedList"
      ref="checkboxGroup"
    >
      <div
        v-for="(item, index) in dataJson.list"
        :key="index"
        style="display: flex"
      >
        <van-checkbox :name="index"> </van-checkbox>
        <van-card
          :num="item.num"
          :price="item.price"
          :desc="item.desc"
          :title="item.title"
          :thumb="item.thumb"
          style="margin-left: 10px; flex: 1; background-color: transparent"
        >
          <!-- <template #tags>
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </template>
          <template #footer>
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </template> -->
        </van-card>
      </div>
    </van-checkbox-group>
  </div>
</template>

<script>
import { reactive, ref, watch, onMounted } from "vue";

export default {
  props: {
    itemChecked: {
      type: Boolean,
      default() {
        return false;
      },
    },
    dataJson: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup(props, { emit }) {
    const checkboxGroup = ref(null);
    let allChecked = ref(false);
    const checkedList = ref([]);
    watch(allChecked, (flag) => {
      checkboxGroup.value.toggleAll(flag);
    });
    watch(checkedList, (arr) => {
      emit("update:itemChecked", false);
      if (props.dataJson.list.length == arr.length) {
        allChecked.value = true;
        emit("update:itemChecked", true);
      }
      if (arr.length == 0) {
        allChecked.value = false;
      }
      emit("getChecked");
    });
    return {
      checkedList,
      allChecked,
      checkboxGroup,
    };
  },
};
</script>

<style lang="scss" scoped>
.cart {
  margin: 0.16rem;
  background: #fff;
  padding: 0.16rem;
  border-radius: 0.2rem;
  .leftCon {
    align-items: center;
    .title {
      font-size: 0.14rem;
      color: #333;
    }
  }
  .rightCon {
    .text {
      color: #999;
      font-size: 0.14rem;
    }
  }
  ::v-deep .van-card__title {
    font-size: 0.14rem;
  }
  ::v-deep .van-card__desc {
    color: rgb(153, 153, 153);
    font-size: 0.13rem;
  }
  ::v-deep .van-card__price {
    font-size: 0.13rem;
    color: #ff5000;
  }
}
.flex {
  display: flex;
  justify-content: space-between;
}
</style>
