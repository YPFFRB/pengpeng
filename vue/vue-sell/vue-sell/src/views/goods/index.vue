<template>
    <div class="goods">
        <div class="goods-content">
            <div class="menu-wrap" ref="menuWrap">
                <ul>
                    <li class="menu-item" v-for="(item,index) in state.goods":key="item.name">
                        <span class="text">{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrap">

            </div>
        </div>
    </div>
</template>

<script setup>
import { getGoods } from '@/api'
import {reactive, ref,} from 'vue';
import BScroll from '@better-scroll/core'
import {onMounted} from "vue";
const state = reactive({
    goods: []
})

// 获取商品数据
getGoods().then(res => {
    console.log(res);
    state.goods = res
})
const menuWrap=ref(null)
const betterScroll=()=>{
    console.log()
    new  BScroll(menuWrap.value,{

    })
}
onMounted(()=>{
    //挂载完成后,该组件被编译完成并添加了index.html
    betterScroll()
})

</script>

<style lang="less" scoped>
@import '@/assets/variable.less';

.goods {
    width: 100%;
    position: absolute;
    bottom: 46px;
    top: 177px;
    overflow: hidden;

    &-content {
        display: flex;
        height: 100%;

        .menu-wrap {
            width: 80px;
            background-color: @color-background-ssss;

            .menu-item {
                padding: 0 14px;
                font-size: @fontsize-small;
                height: 54px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
</style>