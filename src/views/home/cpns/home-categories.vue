<script setup>
import useHomeStore from "@/stores/modules/home.js";
import {storeToRefs} from "pinia";

const homeStore = useHomeStore()

const {hotCategories} = storeToRefs(homeStore)

</script>

<template>
  <div class="categories">
    <template v-for="(item,index) in hotCategories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 12px;

  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    flex-shrink: 0;
    text-align: center;

    .text {
      font-size: 12px;
      margin-top: 5px;
    }
  }

  img {
    width: 32px;
    height: 32px;
  }
}
</style>
