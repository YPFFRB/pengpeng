<template>
<div class="login">
    <h3>图书管理系统</h3>
    <div class="user">
        <span>账号</span>
        <input type="text">
    </div>
    <div class="pwd">
        <span>密码</span>
        <input type="text">
    </div>
    <div class="btn">

        <button>登入</button>
    </div>
</div>
</template>

<script setup>

</script>
<style lang="css" scoped>
.login{
    border:1px solid #000000;
    width: 350px;
    height: 220px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 10px #e9e9e9;
    padding: 20px;
    box-sizing: border-box;
}
h3{
    margin-bottom: 20px;
    text-align: center;
}
.user,.pwd{
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}
span{
    width: 50px;
}
input{
    flex:1;
    font-size: 20px;
    padding: 3px 10px;
}
button{
    width: 80%;
    display: block;
    margin: 0 auto;
    padding: 5px 0;
    background-color: #74e9e5;
    color: #fff;
    border: none;
    border-radius: 100px;
    cursor:pointer;
}
</style>