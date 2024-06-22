<script setup>
defineProps({
  infosData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="infos">
    <div class="name">
      {{ infosData.houseName }}
    </div>
    <div class="tags">
      <template v-for="item in infosData.houseTags">
        <span
            class="item"
            v-if="item.tagText"
            :style="{color:item.tagText.color,background:item.tagText.background.color}">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="commend extra">
      <div class="left">
        <span class="score">{{ infosData.commentBrief.overall }}</span>
        <span class="title">{{ infosData.commentBrief.scoreTitle }}</span>
        <span class="brief">{{ infosData.commentBrief.commentBrief }}</span>

      </div>
      <div class="right">
        <span class="count">{{ infosData.commentBrief.totalCount }}条评论</span>
        <span class="arrow"><van-icon name="arrow"/></span>
      </div>
    </div>
    <div class="position extra">
      <div class="left">
        <span class="address">{{ infosData.nearByPosition.address }}</span>

      </div>
      <div class="right">
        <span class="map">地图/周边</span>
        <span class="arrow">
          <van-icon name="arrow"/>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.infos {
  padding: 16px;
  background: #fff;

  .name {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    overflow: hidden;
    line-height: 24px;
    margin-bottom: 6px;
  }

  .tags {
    margin: 10px 0;

    .item {
      font-size: 12px;
      margin: 0 2px;
      padding: 1px 3px;
    }
  }

  .extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;

    .right {
      color: #ff9645;
    }
  }

  .commend {
    .score {
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }
    .title{
      font-weight: 700;
      color: #333;
      margin: 0 3px;
    }
    .brief{
      color: #666;
    }
  }

  .position{
    .address{
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }
}
</style>
