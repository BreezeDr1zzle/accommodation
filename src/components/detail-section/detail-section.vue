<script setup>
defineProps({
  title: {
    type: String,
    default: "默认标题"
  },
  moreText: {
    type: String,
    default: "默认文本"
  }
})
</script>

<template>
  <div class="detail-section">
    <div class="header">
      <h2>{{ title }}</h2>
    </div>
    <div class="content">
      <slot>
        <h3>我是默认内容</h3>
      </slot>
    </div>
    <div class="footer">
      <span class="more">{{ moreText }}</span>
      <span class="arrow">
        <van-icon name="arrow"/>
      </span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.detail-section {
  border-top: 5px solid #f2f3f4;
  padding: 0 15px;
  margin-top: 12px;
  background-color: #fff;

  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;

    .title {
      font-size: 20px;
      color: #333;
    }
  }

  .content {
    padding: 8px 0;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    height: 44px;
    line-height: 44px;
    color: #ff9645;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
