<template>
    <div class="app">
        <h1>{{title}}</h1>
        <h2 v-text="title2"></h2>
        <h3 v-html="content"></h3>
        <button v-on:click="add" v-on:mousemove="move">{{count}}</button>
        <img v-bind:src="url" alt="" @click="handle" v-bind:class="{'bd':active}" @click="small">
    </div>
    <div class="main">
        <h2>{{title}}</h2>
        <button @click="change"></button>


    </div>
</template>
<!--<template>-->
<!--    <div class="app">-->
<!--        <h1>{{title}}</h1>-->
<!--        <h2 v-text="title2"></h2>-->
<!--        <h3 v-html="content"></h3>-->
<!--        <button v-on:click="add" v-on:mousemove="move">{{count}}</button>-->
<!--        <img v-bind:src="url" alt="" @click="handle" v-bind:class="{'bd':active}" @click="small">-->
<!--    </div>-->
<!--</template>-->

<script setup>
const title='Hello World'
const title2='标题'
const content='<p>床前明月光</p><P>疑是地上霜</P>'

import { ref ,reactive} from 'vue'
let count=ref(0) //响应式
const add=()=>{
    count.value++
    //console.log(count.value);
}
const move=()=>{
    console.log('鼠标在botton上移动')
}
const url='https://q1.itc.cn/q_70/images03/20240612/386106412a6a47e797ba661b7001c244.jpeg'
let active=ref(false)
const handle=()=>{
    if(active.value==true)
    active.value=false
    else
        active.value=true
}
</script>

<style lang="css" scoped>
img{
    width: 300px;
}
.bd{
    border:2px solid #000000;
}
</style>