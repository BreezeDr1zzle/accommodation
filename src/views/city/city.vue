<script setup>
import {ref, computed} from "vue";
import {useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import useCityStore from "@/stores/modules/city.js";
import CityGroup from "@/views/city/cpns/city-group.vue";

const router = useRouter()

//搜索框
const searchValue = ref("")
const cancelClick = () => {
  router.back()
}

//标签
const tabActive = ref({})

//city请求 第一版 (现已由pinia管理)
// const cityValue = ref({})
// getCityAll().then(res => {
//   cityValue.value = res.data
//   console.log(cityValue)
// })


//city请求 最终版
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const {allCities} = storeToRefs(cityStore)
const currentGroup = computed(() => allCities.value[tabActive.value])


</script>


<template>
  <div class="city top-page">
    <div class="top">
      <van-search
          v-model="searchValue"
          shape="round"
          placeholder="城市/位置/区域"
          show-action
          @cancel="cancelClick"
      />
      <van-tabs v-model:active="tabActive">
        <!--手动取-->
        <!--<van-tab :title="cityValue?.cityGroup?.title"></van-tab>-->
        <!--<van-tab :title="cityValue?.cityGroupOverSea?.title"></van-tab>-->
        <!--for循环取-->
        <template v-for="(value,key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!--      未优化版 -->
      <!--      <city-group :group-data="currentGroup"></city-group>-->

      <!--            优化版：两个组件分别传入对应数据 按需display 切换国内外时数据加载更快-->
      <template v-for="(value,key,index) in allCities" :key="key">
        <city-group v-show="tabActive===key" :group-data="value"></city-group>
      </template>

    </div>
  </div>
</template>

<style lang="less" scoped>
.city {
  //.top {
  //  position: relative;
  //  z-index: 9;
  //}

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}

</style>
