<script setup>
import useMainStore from "@/stores/modules/main.js";

const mainStore = useMainStore()
const loadingClick = () => {
  mainStore.isLoading = false
}
</script>

<template>
  <div class="loading" @click="loadingClick">
    <div class="bg">
      <img src="../../assets/img/home/full-screen-loading.gif">
    </div>
  </div>
</template>

<style lang="less" scoped>
.loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
  z-index: 999;

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 8px;
    }
  }

}
</style>
