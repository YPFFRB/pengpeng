<template>
    <div class="child">
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
    </div>
</template>
<script setup>
import {defineProps} from 'vue'
import {ref,watch} from "vue";
const list=ref(['html','css','js'])
// defineProps({
//
//     list:{
//         type:Array,
//         default:()=>[]
//     }
// })
const props=defineProps({
    msg:''
})
watch(
    ()=>props.msg,
    (newVal,oldValue)=>{
        list.value.push(newVal)
    }
)
list.value.push(props.msg)
</script>

<style lang="css" scoped>
</style>