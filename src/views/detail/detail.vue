<script setup>
import {useRoute, useRouter} from "vue-router";
import useHouseDetailStore from "@/stores/modules/detail.js";
import {storeToRefs} from "pinia";
import DetailSwipe from "@/views/detail/cpns/detail_01-swipe.vue";
import {computed, ref} from "vue";
import DetailInfos from "@/views/detail/cpns/detail_02-infos.vue";
import DetailFacility from "@/views/detail/cpns/detail_03-facility.vue";
import DetailLandlord from "@/views/detail/cpns/detail_04-landlord.vue";

const route = useRoute()
const router = useRouter()
//返回
const onClickLeft = () => router.back()

//发送网络请求取到房屋详情信息
const houseId = route.params.id
const houseDetailStore = useHouseDetailStore()
houseDetailStore.fetchHouseDetailData(houseId)
const {houseDetail} = storeToRefs(houseDetailStore)

const mainPart = computed(() => houseDetail.value.mainPart)
</script>

<template>
  <div class="detail">
    <div class="detail-bar">
      <van-nav-bar
          title="房屋详情"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
      />
    </div>
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-part="mainPart.topModule.housePicture.housePics"/>
      <detail-infos :infos-data="mainPart.topModule"/>
      <detail-facility :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord :land-lord-data="mainPart.dynamicModule.landlordModule"/>
    </div>
    <div v-else>404</div>
  </div>
</template>

<style lang="less" scoped>

</style>
