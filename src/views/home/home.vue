<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue"
import HomeSearchBox from "@/views/home/cpns/home-search-box.vue";
</script>

<template>
  <div class="home">
    <HomeNavBar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
    <home-search-box/>
  </div>
</template>


<style lang="less" scoped>
  .banner{
    img{
      width: 100%;
    }
  }
</style>
