<template>
    <Child :msg="title" @on-sub="handle"/>
    <h1>{{res}}</h1>
</template>

<script setup>
import Child from "@/components/child.vue";
import {ref} from "vue";

const title="hello world"
const res=ref('')
const handle=(e)=>{
  //  console.log(e)
    res.value=e

}

</script>

<style lang="css" scoped>

</style>