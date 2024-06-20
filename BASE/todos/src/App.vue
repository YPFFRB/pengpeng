<template>
    <div>
     <ul>
         <li v-for="item in arr" key="index">{{item}}</li>
     </ul>
        <button v-on:click="handle">push</button>
        <button @click="reserve">reserve</button>
    </div>
</template>

<script setup>
import {reactive} from 'vue'
let arr=reactive(['html','css','js','vue'])
const handle=()=>{
    arr.push('node')
    console.log(arr);
}
function reserve()
{
     arr.reverse()
    arr.forEach((ite,index)=>{
        arr[index]=ite+'1'
    });
  // arr=arr.map((item)=>{
  //       return item+'1'
  //   })
}
</script>

<style lang="css" scoped>

</style>
