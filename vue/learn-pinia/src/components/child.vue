<template>
    <div>
       <h2>{{msg}}</h2>
        <button @click="submit">提交</button>
    </div>
</template>

<script setup>
defineProps({
    msg:{
     typeof: String,
        default:'hello'
    }
})

const success='提交成功'
const emits=defineEmits(['onSub'])
const submit=()=>{
    //把success 给父组件使用
    emits('onSub',success)
}
</script>

<style lang="css" scoped>

</style>