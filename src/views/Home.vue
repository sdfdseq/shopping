<script setup>

import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter()
import headlist from '@/components/head/headlist.vue';
import navlist from '@/components/home/nav/navlist.vue';
</script>

<template>
    <div class="box">
        <div class="head">
            <headlist></headlist>
        </div>
        <div class="nav">
            <navlist></navlist>
        </div>
        <div class="center">
            <div class="center-left">

            </div>
            <div class="center-right">

            </div>
        </div>
        <div class="content">
            <div class="content-top"></div>
            <div class="content-bottom"></div>
        </div>
    </div>
</template>

<style scoped>
.box {
    /* background-image: url('D:\\Project\\Base\\vue-project\\vue_project_web\\src\\assets\\images\\home\\home-bcg2.png'); */
    border-color: black;
    width: 100%;
    height: 1000px;
    background-size: cover;
    background-position: center;
}

.head {
    position: relative;
    /* background-color: black; */
    width: 100%;
    height: 60px;
}

.nav {
    position: relative;
    /* background-color: rgb(228, 228, 40); */
    width: 90%;
    height: 180px;
    margin-left: 5%;
    margin-right: 5%;
}

.center {
    position: relative;
    background-color: black;
    width: 90%;
    height: 410px;
    margin-left: 5%;
    margin-right: 5%;
}

.center-left {
    /* position: absolute; */
    background-color: aqua;
    width: 20%;
    height: 100%;
    float: left;
}

.center-right {
    /* position: absolute; */
    background-color: rgb(99, 185, 185);
    width: 80%;
    height: 100%;
    float: right;
}

.content {
    position: relative;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    width: 90%;
   margin-left: 5%;
   margin-right: 5%;
}
.content-top{
    width: 100%;
    height: 100px;
    background-color: blueviolet;

}
.content-bottom{
    width: 100%;
    height: 300px;}
</style>
