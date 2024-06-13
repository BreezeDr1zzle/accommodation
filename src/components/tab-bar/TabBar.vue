<script setup>
import {tabbarData} from "@/assets/data/tabbar.js";
import {getAssetUrl} from "@/utils/load_assets.js";
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()


let currentIndex = ref(0)
const addActive = (index, path) => {
  currentIndex.value = index
  router.push(path)
}
</script>

<template>
  <div class="tab-bar">
    <template v-for="(item,index) in tabbarData" :key=index>
      <div class="tab-bar-item" :class="{active:currentIndex===index}" @click="addActive(index,item.path)">
        <img v-if="currentIndex!==index" :src="getAssetUrl(item.image)">
        <img v-else :src="getAssetUrl(item.imageActive)">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 40px;
  display: flex;
  border-top: solid 1px #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &.active {
      color: var(--primary-color);
    }

    img {
      width: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }


  }
}

</style>
