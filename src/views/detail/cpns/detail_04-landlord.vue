<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";
import {computed} from "vue";

const props = defineProps({
  landLordData: {
    type: Object,
    default: () => ({})
  }
})

const landLord = computed(() => props.landLordData)
</script>

<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div class="landlord-inner">
        <div class="header">
          <img :src="landLord.topScroll">
        </div>
        <div class="content">
          <div class="landlord-infos">
            <div class="left">
              <img :src="landLord.hotelLogo">
            </div>
            <div class="info">
              <div class="name">{{ landLord.hotelName }}</div>
              <div class="tags">
                <template v-for="(item,index) in landLord.hotelTags">
                  <div class="item" :style="{color:item.tagText.color}">
                    <span>
                      {{ item.tagText.text + "|" }}
                    </span>
                  </div>
                </template>
              </div>
            </div>
            <div class="right">
              <button>联系房东</button>
            </div>
          </div>
          <div class="landlord-intro">
            <template v-for="(item,index) in landLord.hotelSummary" :key="index">
              <div class="item">
                <div class="title">{{ item.title }}</div>
                <div class="intro">{{ item.introduction }}</div>
                <div class="tip">{{ item.tip }}</div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
.landlord-inner {
  .header {

    img {
      width: 100%;

    }
  }

  .content {
    .landlord-infos {
      margin: 20px 0 30px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left {
        img {
          width: 52px;
          height: 52px;

        }
      }

      .info {
        .name {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .tags {
          display: flex;
          font-size: 12px;
        }
      }
    }

    .landlord-intro {

      display: flex;
      justify-content: space-between;

      .item {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        line-height: 20px;

        .intro {
          font-weight: 700;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
