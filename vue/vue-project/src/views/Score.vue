<template>
    <div class="score">
        总得分:100分
    </div>
</template>

<script setup>
import {useQuestionStore} from "@/stores/question.js";
import {computed} from "vue";
import {storeToRefs} from "pinia";
const questionStore=useQuestionStore()
const {state}=storeToRefs(questionStore)
const score=function (){

    state.questionList.forEach((answer,index)=>{

    }
}
</script>

<style lang="css" scoped>
.score{
    font-size: 2rem;
    color: #fff;
}

</style>