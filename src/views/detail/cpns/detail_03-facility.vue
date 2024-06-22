<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";

defineProps({
  houseFacility: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="facility">
    <detail-section title="房屋设施" more-text="查看全部设施">
      <div class="facility-inner">
        <template v-for="(item,index) in houseFacility?.houseFacilitys">
          <!--          包含了才展示，不包含不展示-->
          <div class="item" v-if="houseFacility?.facilitySort?.includes(index)" :key="index">
            <div class="head">
              <img :src="item.icon">
              <span class="text">{{ item.groupName }}</span>
            </div>
            <div class="list">
              <template v-for="(iten,index) in item.facilitys.slice(0,4)" :key="index">
                <div class="iten">
                  <i class="icon_check"></i>
                  <span class="text">{{ iten.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
.facility-inner {
  padding: 5px 0;
  border-radius: 6px;
  font-size: 12px;
  background-color: #f7f9fb;

  .item {
    display: flex;
    margin: 25px 0;

    .head {
      width: 90px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 20px;
        height: 20px;
      }

      .text {
        color: #000;
        margin-top: 5px;
      }
    }

    .list {
      flex: 1;
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .iten {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 50%;
        margin: 4px 0;
      }

      .icon {
        margin: 0 6px;
      }

      .text {
        color: #333;
        margin-left: 5px;
      }
    }
  }
}
</style>
