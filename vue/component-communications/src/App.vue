<template>
    <div class="input-group">
        <input type="text" v-model="value">
        <button @click="add">添加</button>
    </div>
    <Child :msg="toChild"/>
</template>

<script setup>
import {ref} from "vue";
import Child from "@/components/child.vue";
//const list=ref(['html','css','js'])
const value=ref('')
const toChild=ref('')
const add=()=>{
//list.value.push(value.value)
 //   value.value=''
    toChild.value=value.value
}
</script>

<style lang="less" scoped>

</style>