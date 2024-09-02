<script setup>

import { ref } from 'vue';
import asideMess from '../aside/aside-mess.vue';
import asideNav from '../aside/aside-nav.vue';
</script>

<template>
  <div class="aside">
    <div class="mess">
      <asideMess></asideMess>
    </div>
    <div class="nav">
      <asideNav></asideNav>
    </div>
  </div>
</template>

<style scoped>
.aside {
  background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    min-height: 700px;
    width: 100%;
    border-radius: 15px;
}
.mess{
  position: relative;
  /* background-color: rgb(208, 218, 218); */
  width: 100%;
  height: 300px;
}
.nav{
  position: relative;
  width: 100%;
  min-height: 500px;
  /* background-color: aqua; */
  top: 50px;
}
</style>
