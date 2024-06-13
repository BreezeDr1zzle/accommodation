<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue"
</script>

<template>
  <div class="home">
    <HomeNavBar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png">
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
  .banner{
    img{
      width: 100%;
    }
  }
  .location{
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 15px;
    .city{
      flex: 1;
    }
    .position{
      width: 74px;
      display: flex;
      align-items: center;
      .text{
        font-size: 12px;
        margin-top: 2px;
      }

      img{
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
  }

</style>
