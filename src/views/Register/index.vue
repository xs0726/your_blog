<template>
  <div class="register">
    <div class="register-container">
      <div class="title">
        <h1>博客用户注册</h1>
      </div>
      <RegisterForm />
      <!--      <a-tabs v-model:activeKey="activeKey" centered>-->
      <!--        <a-tab-pane key="1" tab="密码登录">-->
      <!--          <LoginForm />-->
      <!--        </a-tab-pane>-->
      <!--      </a-tabs>-->
      <div class="goLogin">
        已有账号,<a-button @click="goLogin" type="link">去登录</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import RegisterForm from "@/components/RegisterForm";
import { useRouter } from "vue-router";

const router = new useRouter();

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
    height: 600px;
    padding: 16px 32px;
    opacity: 0.9;
    background-color: #fff;
    .title {
      margin: 10px 0 70px 0;
      h1 {
        text-align: center;
        font-size: 26px;
        font-weight: 300;
      }
    }
  }
}
</style>
