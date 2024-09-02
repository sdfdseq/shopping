<script setup></script>
<template>
    <div class="Nav">
        <div class="nav-item" >
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
.Nav {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nav-item {
    width: 150px;
    height: 50px;
    /* background-color: azure; */
    margin: 20px ;
    box-shadow: 0 0 10px 5px #f0d800;
    border-radius: 15px;
    text-align: center;
    color: #ffffff;
    font-size: 20px;
    line-height: 50px;
}
.nav-item:hover{
    cursor: pointer;
}
</style>