<template>
   <button @click="changeName">修改仓库中的用户姓名</button>
   <button @click="changeSex">修改姓名</button>
   <button @click="changeAge">修改年龄</button>
</template>

<script setup>
import {useUserStore} from '@/store/user.js';
const userStore =useUserStore()

const changeName=()=>{
   // userStore.userInfo.name='fu'
   userStore.changeUserName('徐总')
}
const changeSex=()=>{
   userStore.changeUserSex('boy')
}
const changeAge=(n)=>{
   this.userInfo.
}
</script>

<style lang="css" scoped>

</style>