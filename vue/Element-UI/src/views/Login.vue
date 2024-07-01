<template>
    <div class="login">
        <div class="login-wrap">
            <h2>旅梦的后台管理系统</h2>
            <el-row>
                <el-input v-model="state.account" placeholder="请输入账号" />
            </el-row>
            <el-row>
            <el-input v-model="state.password" placeholder="请输入密码" />
            </el-row>
            <el-row>

                <el-button type="primary" @click="signIn">登入</el-button>
                <el-button type="success">注册</el-button>
            </el-row>
        </div>
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import {reactive} from "vue";
import {useRouter} from "vue-router";

const  state=reactive({
    account:'admin',
    password:'123'
})
const router=useRouter()
const signIn=()=>{
    if (state.account&&state.password)
    {
        ElMessage({
            message: '登入成功',
            type: 'success',
        })
        router.push('/layout')
    }
}
</script>

<style lang="css" scoped>
.login{

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

.login-wrap{

    width: 400px;
    border:1px solid #000000;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
}
h2{
    line-height: 3;
    font-size: 20px;
}
.el-row{
    width: 80%;
    margin: 0 auto;
    margin-bottom: 30px;
    justify-content: space-between;

}
.el-button{
    width: 40%;
}
</style>