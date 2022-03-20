<template>
  <div class="register">
    <div class="register-container">
      <div class="title">
        <h1>博客用户注册</h1>
      </div>
      <div class="img" v-if="key">
        <div class="bindQQ_avatar">
          <div class="avatar1">
            <img class="avatar1_img" :src="imgUrl" alt="" />
          </div>
          <div class="line"></div>
          <div class="avatar2">
            <img class="avatar2_img" src="../../assets/images/m13.png" alt="" />
          </div>
        </div>
      </div>
      <RegisterForm />
      <div class="goLogin">
        已有账号,<a-button @click="goLogin" type="link">去登录</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import RegisterForm from "@/components/RegisterForm";
import { useRouter, useRoute } from "vue-router";

const router = new useRouter();
const route = new useRoute();
const imgUrl = route.query.imgUrl;
const key = route.query.key;
const goLogin = () => {
  router.push("login");
};
</script>

<style lang="scss" scoped>
.register {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background: url("../../assets/home_top_bg.jpg") no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  .register-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 420px;
    height: 640px;
    padding: 16px 32px;
    opacity: 0.9;
    background-color: #fff;
    .title {
      margin: 10px 0 50px 0;
      h1 {
        text-align: center;
        font-size: 26px;
        font-weight: 300;
      }
    }
  }
}
.bindQQ_avatar {
  display: flex;
  margin: 0px 0 20px 0;
  justify-content: space-between;
  align-items: center;
  .line {
    width: 100px;
    height: 1px;
    background-color: #3d60e5;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      width: 10px;
      height: 10px;
      top: -5px;
      right: -1px;
      display: inline-block;
      border-top: 2px solid #3d60e5;
      border-right: 2px solid #3d60e5;
      transform: rotate(45deg);
    }
  }
  .avatar1,
  .avatar2 {
    width: 80px;
    height: 80px;
    //background-color: #000;
    // border: 1px solid #ccc;
    border-radius: 50%;
  }
  .avatar1 {
    .avatar1_img {
      width: 80px;
      height: 80px;
      margin: 10px auto;
      border-radius: 50%;
    }
  }
  .avatar2 {
    .avatar2_img {
      width: 80px;
      height: 80px;
      margin: 10px auto;
    }
  }
}
</style>
