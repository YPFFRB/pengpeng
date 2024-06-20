<template>
        <div>
            <h2>当前温度:{{ temp }}</h2>
            <h3>建议穿衣：{{ suggest }}</h3>
            <button @click="add">+</button>
            <button @click="minus">-</button>
        </div>
</template>

<script setup>
import { ref ,watch} from "vue";
let temp = ref(20);
let suggest = ref("夹克")

const add = () => {
    temp.value += 5;

}
const minus = () => {
    temp.value -= 5;
    // if (temp.value <= 5) {
    //     suggest.value = "棉袄"
    // } else if(temp.value<=15){
    //     suggest.value="卫衣"
    // }
}

watch(temp,(newval,oldval)=>{
        //console.log(newval,oldval)
        if(newval>=30){
            suggest.value="短袖"
        }else if(newval>=20){
            suggest.value="夹克"
        }else if(newval>=10){
            suggest.value="棉袄"
        }else if(newval<=0){
            suggest.value="羽绒服"
        }
    }
)


</script>

<style lang="css" scoped></style>