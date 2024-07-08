<template>
    <div>
        <li>姓名：{{ userStore.userInfo.name }}</li>
        <li>年龄: {{ age }}</li>
        <li>十年后的年龄:{{userStore.afterAge}}</li>
        <li>性别:{{userInfo.sex}}</li>
    </div>
</template>

<script setup>
import { useUserStore } from '@/store/user';
import { computed } from 'vue';
import {storeToRefs} from "pinia";
import store from "@/store/index.js";

const userStore = useUserStore();

const age = computed(() =>
     userStore.userInfo.age
);

const {userInfo}=storeToRefs(userStore)

//console.log(userStore);
</script>

<style lang="css" scoped>

</style>