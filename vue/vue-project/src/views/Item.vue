<template>
    <div>
        <ItemContainer parentComponent="item"/>
    </div>
</template>

<script setup>

import ItemContainer from "@/components/ItemContainer.vue";
import {useQuestionStore} from "@/stores/question.js";
const questionStore=useQuestionStore()
questionStore.getQuestionList()
//console.log(questionStore)
</script>

<style lang="css" scoped>
div{
    color: red;
}
</style>