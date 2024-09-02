<template>
    <div class="nav-search">
        <div class="search-button">
            <img src="/src/components/icons/other/search.png" alt="">
        </div>
        <div class="search-text">
            <!-- <input class="search-input" type="text" name="" id=""> -->
        </div>
    </div>
</template>

<script setup>
import {} from "vue"
</script>

<style  scoped>
.nav-search{
    width: 100%;
    height: 40%;
    transform: translateY(80%);
    /* background-color: aqua; */
}
.search-button{
    float:inline-start;
    height: 100%;
    width:  30%;
    /* background-color: bisque; */
    border:1px solid black;
    box-sizing: border-box;
}
.search-text{
    float:inline-end;
    height: 100%;
    width: 70%;
    border:1px solid black;
    box-sizing: border-box;
    /* transform: translateX(-1%); */
    /* background-color: black; */
}
img{
    width: 100%;
    transform: translateY(15%);
}
.search-input{
    width: 100%;
    height: 100%;
}
</style>





