<template>
  <Header :seller="sellerData" />
  <div class="tab">
    <div class="tab-wrap">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-wrap">
      <router-link to="/comment">评论</router-link>
    </div>
    <div class="tab-wrap">
      <router-link to="/seller">商家</router-link>
    </div>
  </div>

  <router-view></router-view>

</template>

<script setup>
import Header from '@/components/header/Index.vue'
import { getSeller } from '@/api'
import { ref } from 'vue'

let sellerData = ref({})

// axios request seller
getSeller().then(seller => {
  console.log(seller);
  sellerData.value = seller
})

</script>

<style lang="less" scoped>
@import './assets/variable.less';

div {
  font-style: 30px;
}

.tab {
  display: flex;
  height: 36px;

  .tab-wrap {
    flex: 1;
    text-align: center;
    line-height: 36px;

    a {
      text-decoration: none;
      color: @color-font;
      width: 100%;
      height: 100%;
      display: block;

      &.router-link-active {
        color: @color-red;
        border-bottom: 2px solid @color-red;
      }
    }
  }
}
</style>