<script setup>
import useHomeStore from "@/stores/modules/home.js";
import {storeToRefs} from "pinia";
import HouseItemV3 from "@/components/house-item-v3/house-item-v3.vue";
import HouseItemV9 from "@/components/house-item-v9/house-item-v9.vue";

import {useRouter} from "vue-router";

const homeStore = useHomeStore()
const {houseList} = storeToRefs(homeStore)


const router = useRouter()
const itemClick = item => {
  console.log(item.houseId)
  router.push("/detail/" + item.houseId)
}
</script>

<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in houseList" :key="item.data.houseId">
        <house-item-v3
            :houselistv3="item.data"
            v-if="item.discoveryContentType === 3"
            @click="itemClick(item.data)"
        />
        <house-item-v9
            :houselistv9="item.data"
            v-else-if="item.discoveryContentType === 9"
            @click="itemClick(item.data)"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding: 10px 8px;
}

.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
