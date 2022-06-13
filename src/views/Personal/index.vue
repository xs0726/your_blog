<template>
  <div class="personal">
    <Top />
    <div class="content">
      <div class="personal-left">
        <PersonalLeft />
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="1" tab="我的信息"><PersonalInfo /></a-tab-pane>
          <a-tab-pane key="2" tab="我的帖子"><MyPost /></a-tab-pane>
        </a-tabs>
      </div>
      <div class="personal-right">
        <PersonalRight />
      </div>
    </div>
  </div>
</template>

<script setup>
import Top from '../../components/Home/Top.vue'
import PersonalLeft from '../../components/Personal/PersonalLeft.vue'
import PersonalInfo from '../../components/Personal/PersonalInfo.vue'
import PersonalRight from '../../components/Personal/PersonalRight.vue'
import MyPost from '../../components/Personal/MyPost.vue'
import {ref} from "vue";

const activeKey = ref('1')
</script>

<style lang="scss" scoped>
.personal {
  width: 100%;
  .content {
    display: flex;
    width: 1170px;
    margin: 20px auto;
    .personal-left {
      width: 75%;
      border-radius: 5px;
      background-color: #fff;
    }
    .personal-right {
      width: calc(25% - 10px);
      height: 100px;
      margin-left: 10px;
      border-radius: 5px;
      //background-color: #fff;
      .ant-tabs {
        background-color: #fff;
      }
    }
  }
}
</style>
