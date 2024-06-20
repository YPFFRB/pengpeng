<template>
    <div>
        <div>
            账户: <input type="text">
        </div>
        <div>
            密码: <input type="text" v-model="state.password">
        </div>
        <button @click="login">登录</button>
    </div>
</template>

<script setup>
import {reactive}from 'vue'
const state=reactive({
    username:"",
    password:""
})
const login=()=>{
    state.username='admin'
    console.log(state);
}

</script>

<style lang="css" scoped>

</style>