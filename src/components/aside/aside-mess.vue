<script setup></script>
<template>
    <div class="headphoto">
        <img src="D:\Project\Base\vue-project\vue_project_web\src\assets\images\infor\head.jpg" alt="">
    </div>
    <div class="name">
        <div class="name-a">YJF</div>
        <div class="name-b">yjf</div>
    </div>
    <div class="aside-table">

    </div>
</template>
<style  scoped>
.headphoto{
    width: 100%;
    height: 80px;
    /* background-color: aquamarine; */
}
img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    /* background-color: black; */
    margin-left: 50%;
    transform: translate(-50%);
    margin-top: 5px;
}
.name{
    width: 100%;
    text-align: center;
    margin-top: 10px;
    
}
.name-a{
    width: 100%;
    height: 60px;
    /* background-color:antiquewhite ; */
    line-height: 60px;
    font-size: 30px;
    color: #f0d800;
}
.name-b{
    width: 100%;
    height: 50px;
    /* background-color:rgb(185, 127, 51) ; */
    line-height: 50px;
    font-size: 15px;
    color: #f0d800;
}
.aside-table{
    width: 100%;
    height: 150px;
    background-color: #f0d800;
}
</style>