<script setup>
// I/GPT 代表整个模块的默认输入
import {chat} from './libs/gpt.js'
const main=async ()=>{
    // const messageList=[{
    //     role:'admin',
    //     content:'你是一位汽车4s店销售专家，可以回答有关买车卖车的问题'
    // },{
    //     role: 'user',
    //     content: '凯迪拉克方向盘真的有问题吗？'
    // }]
    // const data=await chat(messageList,'sk-eal4DVnkCAoZA0aHhE6JMdiML0uYa2rO3QXSl7qrlELd4iay')
    // console.log(data)

};

main();
</script>

<template>

   <router-view/>


</template>

<style scoped>

</style>
