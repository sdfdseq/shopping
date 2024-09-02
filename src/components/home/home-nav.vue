<script setup>
</script>
<template>
    <div class="nav">
        <div class="nav-item">
            首页
        </div>
        <div class="nav-item">
            归档
        </div>
        <div class="nav-item">
            关于
        </div>
        <div class="nav-item">
            链接
        </div>
    </div>
</template>
<style scoped>
.nav{
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    height: 60px;
    width: 100%;
    /* opacity:0.4; */
    color: #f0d800;
    display: flex;
    justify-content: center;
}
.nav-item{
    /* background-color: rgb(228, 234, 234); */
    width: 150px;
    margin: auto 0;
    font-size: 18px;
}
.nav-item:hover{
    cursor: pointer;
}
</style>