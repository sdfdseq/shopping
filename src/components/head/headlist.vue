<script setup></script>
<template>
    <div class="box-headlist">
        <div class="items">
            <div class="headlist-item">
                <router-link :to="'/login'">请先登录</router-link>
            </div>
            <div class="sym">|</div>
            <div class="headlist-item">
                帮助中心
            </div>
            <div class="sym">|</div>
            <div class="headlist-item">
                关于我们
            </div>
        </div>
    </div>
</template>
<style scoped>

.box-headlist{
    flex-direction: row;
    background-color: #696969;
    width: 100%;
    height: 60px;
}
.items{
    display:flex ;
    justify-content:flex-end ;
    align-items: center;
    margin-right: 50px;
    height: 100%;
    
}
.headlist-item{
    font-size: 20px;
    color: white;
    margin: 20px  ;
}
.headlist-item:hover{
    cursor: pointer;
}
.sym{
    color: white
}
.router-link-active {
    text-decoration: none;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>