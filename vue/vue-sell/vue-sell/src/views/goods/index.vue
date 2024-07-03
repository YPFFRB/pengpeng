<template>
    <div class="goods">
        <div class="goods-content">
            <div ref="menuWrap" class="menu-wrap">
                <ul>
                    <li v-for="(item,index) in state.goods" :key="index" :class="{'current':state.currentIndex===index}"
                        class="menu-item" @click="selectMenu(index)">
                        <span class="text">
                            <SupportIcon v-if="item.type>=0" size="3" type="item.type"/>
                            {{ item.name }}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrap">
                <ul>
                    <!--菜系-->
                    <li class="food-list">
                        <h1 class="title">热销榜</h1>
                        <ul>
                            <!--菜品-->--
                            <li class="food-item">
                                <div class="pic">
                                    <img alt="" src="">
                                </div>
                                <div class="content">
                                    <h2 class="name">尖椒炒肉</h2>
                                    <div class="desc">特辣</div>
                                    <div class="extra">
                                        <span class="count">月售100份</span>
                                        <span>好评率100%</span>
                                    </div>
                                    <div class="price">
                                        <span class="now">￥20</span>
                                        <span class="old">￥100</span>
                                    </div>
                                    <!--++++-->
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import {getGoods} from '@/api'
import {nextTick, reactive, ref} from 'vue';
import BScroll from '@better-scroll/core'
import SupportIcon from '@/components/support-icon/Index.vue'

const state = reactive({
    goods: [],
    currentIndex: 0
})

// 获取商品数据
getGoods().then(res => {
    console.log(res);
    state.goods = res

    nextTick(() => {//nextTick只会在组件编译,挂载且在浏览器上渲染完成后才会执行
        betterScroll()
    })
})
const menuWrap = ref(null)
const betterScroll = () => {
    new BScroll(menuWrap.value, {
        scrollX: true,
        click: true
    })
}
const selectMenu = (i) => {
    state.currentIndex = i
}
const currentIndex = ref()
// onMounted(async ()=>{
//     //挂载完成后,该组件被编译完成并添加了index.html
//     betterScroll()
// })

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

        &.current {
          background-color: #fff;
        }
      }
    }

    .foods-wrap {
      flex: 1;

      .title {
        height: 26px;
        line-height: 26px;
        font-size: @fontsize-small;
        color: rgb(147, 153, 159);
        background-color: @color-background-ssss;
        padding-left: 14px;
        border-left: 2px solid #d9dde1;
      } 
        .food-item{
            
        } 
        .food-item {
            display: flex;
            padding: 18px;
            .pic {
                flex: 0 0 57px;
                margin-right: 10px;
                img {
                    width: 100%;
                }
                
            }
            .content{
                flex: 1;
                .name{
                    font-style: @fontsize-medium; 
        }

    }

    

      

        
      }

      .content {
        flex: 1;

        .name {
          font-size: @fontsize-medium;
          color: @color-background;
            margin: 2px 0 8px 0;
        }
          .desc,
          .extra{
              font-size:    ;
          }
      }
    }
  }

}
</style>