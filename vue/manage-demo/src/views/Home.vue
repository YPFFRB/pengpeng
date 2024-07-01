<template>
    <div class="home">
        <header class="header">
            <div class="name">图书管理系统</div>
            <div class="userInfor">
                <span>欢迎 {{user}}</span>
            </div>
        </header>
        <section class="main">
            <div class="menu">
                  <ul class="menu-list">
                      <li class="list-item" v-for="item in menu">
                          <RouterLink v-bind:to="`/home${item.path}`">{{item.title}}</RouterLink>
                      </li>
                  </ul>
            </div>
            <div class="content">
                 <RouterView></RouterView>
            </div>
        </section>

    </div>
</template>

<script setup>
import {menu} from '../menuData'
const user=localStorage.getItem("user");
</script>

<style lang="css" scoped>
.home{
    height: 100vh;
    display: flex;
    flex-direction: column;

}
.header{
    height: 60px;
    background-color: rgb(87,80,144);
    color: white;
    display: flex;
    justify-content:space-between ;
    align-items: center;
    padding: 0 50px;
}
.name{
    font-size: 26px;
    font-weight: bold;
}
.main{
    flex: 1;
    display: flex;
}
.menu{
    flex: 0 0 200px;
    background-color: aqua;
}
.content{
    flex: 1;
}
.menu-list{
    padding:  20px 0;
}
.list-item{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
}
.list-item a{
    display: block;
    width: 100%;
    height: 100%;
    text-align:center;
}
.list-item:hover{
    background-color: rgba(0,0,0,0.5);
}
</style>