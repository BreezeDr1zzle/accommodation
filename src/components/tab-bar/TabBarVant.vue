<script setup>
import {tabbarData} from "@/assets/data/tabbar.js";
import {getAssetUrl} from "@/utils/load_assets.js";
import {ref} from "vue";

const currentIndex = ref(0);
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item,index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path" icon="home-o">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex!==index" :src="getAssetUrl(item.image)">
            <img v-else :src="getAssetUrl(item.imageActive)">
          </template>
        </van-tabbar-item>
      </template>


    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  --van-tabbar-item-icon-size: 28px !important;
  //:deep(.van-tabbar-item__icon) {
  //  font-size: 40px
  //}

  img {
    height: 28px;
  }
}

</style>
