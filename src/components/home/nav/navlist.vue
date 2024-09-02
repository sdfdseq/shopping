<template>
  <div class="navlist">
    <div class="brand">

    </div>
    <div class="navbox">

    </div>
    <div class="search">
        <navSearch></navSearch>
    </div>
    <div class="shopping">
        <navshop></navshop>
    </div>
  </div>
</template>

<script setup>
import {} from "vue"
import navshop from "./navshop.vue";
import navSearch from "./nav-search.vue";
import navigation from "./navigation.vue";
</script>

<style  scoped>
.navlist{
    /* background-color: rgb(228, 228, 40); */
    width: 100%;
    height: 180px;
}
.brand{
    float:inline-start;
    width: 18%;
    height: 100%;
    background-color: #b24c4c;

}
.navbox{
    float: left;
    width: 60%;
    height: 100%;
    background-color: rgb(27, 192, 87);
}
.search{
    float: left;
    width: 15%;
    height: 100%;
    /* background-color: rgb(195, 226, 42); */
}
.shopping{
    float:inline-end;
    height: 100%;
    /* background-color: #b24c4c; */
    width: 7%;
}
.shopimg{
    width: 50%;
    margin-top: 50%;
    margin-left: 50%;
    transform: translate(-50%,50%);
}
</style>
