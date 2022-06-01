<template>
  <div class="PersonalLeft">
    <div class="userinfo">
      <div class="userinfo-avatar">
        <img v-if="Boolean(userInfo.headShot)" :src="userInfo.headUrl" alt="">
        <a-avatar class="avatar" v-else style="background-color: #87d068">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </div>
      <div class="userinfo-name">{{ userInfo.username }}</div>
      <div class="userinfo-signature">暂无个人简介</div>
    </div>
  </div>
</template>

<script setup>
import {
  UserOutlined
} from "@ant-design/icons-vue";
import { useStore } from 'vuex'

const store = useStore()
const userInfo = store.state.app.userInfo
</script>

<style lang="scss" scoped>
.PersonalLeft {
  width: 100%;
  //height: 100%;
  padding: 20px;
  border-radius: 5px;
  background: #fff;
  margin-bottom: 20px;
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    .userinfo-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
      .avatar {
        width: 80px;
        height: 80px;
        line-height: 80px;
        font-size: 28px;
      }
    }
    .userinfo-name {
      margin-top: 10px;
      font-size: 20px;
      color: #333;
    }
    .userinfo-signature {
      margin-top: 10px;
      font-size: 14px;
      color: #999;
    }
  }
}
</style>
