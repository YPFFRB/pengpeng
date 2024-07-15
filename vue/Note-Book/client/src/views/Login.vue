<template>
    <div class="login">
      <h1>登入</h1>
      <div class="login-wrapper">
        <div class="avatar">
            <img src="https://q6.itc.cn/q_70/images03/20240601/80b789341c9b45cb8a76238650d288a5.png" alt="">
        </div>
      
   <van-form @submit="onSubmit">
    <van-cell-group inset>
        <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        /> 
    </van-cell-group>
    <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
        登录
        </van-button>
    </div>
    </van-form>


      </div>

      <p class="register" @click="router.push('/register')">新用户？点击这里注册</p>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import axios from '@/api'
import { useRouter } from 'vue-router';

const username = ref('')
const password = ref('')
const router = useRouter();



//登录
const onSubmit=async(values)=>{
    console.log(values);
    //发接口请求
  const res=await axios.post('/user/login',{//localhost:3000/user/login
    username:values.username,
    password:values.password
   })
   //本地存储
   localStorage.setItem('userInfo',JSON.stringify(res.data));//本地存储不能用toString,要用json.stringify，userInfo是key
   //跳转页面
  localStorage.setItem('token',res.token)
   router.push('/noteClass');


//    console.log(res);


//    .then((res)=>{
//       console.log(res);
//    })
console.log(res);
}
</script>

<style lang="less" scoped>
.login{
    width: 100vw;
    height: 100vh;
    background-color: #f5f7fa;
    padding: 0 0.3rem;
    box-sizing: border-box ;
    overflow: hidden;//变成bfc容器防止被子容器带下来
    position: relative;
    h1{
        height: 0.6933rem;
        text-align: center;
        font-size: 0.48rem;
        margin-top: 1.12rem;
    }
    .login-wrapper{
        width: 7.44rem;
        height: 10.77rem;
        border: 1px solid rgba(187, 187, 187, 1);
        margin: 0 auto;//居中
        margin-top: 1.7rem;
        border-radius: 0.3rem;
        box-shadow: 0 0 0.533rem  rgba(170, 170, 170, 1);//x轴 y轴 阴影大小 阴影宽度 阴影颜色
        .avatar{
            width: 2.4rem;
            height: 2.4rem;
            margin: 1rem auto 0.77rem;
            border-radius: 50%;//>=50%都是圆形
            overflow: hidden;
            img{
                width: 100%;
            }
        }
    }
    .register{
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform:  translateX(-50%);
        font-size: 0.374rem;
        color: rgba(16, 16, 16, 1);
    }
}
:deep(.van-cell__title.van-field__label){//深度修改样式
  width: 45px;
}
</style>