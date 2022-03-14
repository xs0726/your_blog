<template>
  <div class="login">
    <img class="bgImg" src="../../assets/home_top_bg.jpg" alt="" />
    <div class="login-container">
      <div class="title">
        <h1>博客用户登录</h1>
      </div>
      <div class="icon">
        <BoldOutlined />
      </div>
      <div class="tips">代码改变世界</div>
      <a-tabs v-model:activeKey="activeKey" centered>
        <a-tab-pane key="1" tab="密码登录">
          <LoginForm />
        </a-tab-pane>
      </a-tabs>
      <div class="otherLogin">
        <div class="otherTitle">第三方登录</div>
        <div class="otherBtn">
          <button>
            <a
              href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101993751&redirect_uri=http://www.decunt.com/home"
              ><img src="../../assets/images/QQ.png" alt=""
            /></a>
          </button>
          <button><img src="../../assets/images/WeChat.png" alt="" /></button>
          <button>
            <a
              href="https://github.com/login/oauth/authorize?client_id=9bc20c1d36f7d024515b"
              ><img src="../../assets/images/GitHub.png" alt=""
            /></a>
          </button>
        </div>
      </div>
      <div class="goRegister">
        没有账号,<a-button @click="goRegister" type="link">立即注册</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BoldOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import LoginForm from "../../components/LoginForm";
import { ref } from "vue";

const activeKey = ref("1");
const router = useRouter();
const goRegister = () => {
  router.push("register");
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #ccc;
  position: relative;
  .bgImg {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
  .login-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 420px;
    height: 620px;
    padding: 16px 32px;
    opacity: 0.9;
    background-color: #fff;
    .otherLogin {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        line-height: 1;
        align-items: center;
        width: 40px;
        min-width: 0;
        height: 40px;
        margin-left: 16px;
        padding: 9px;
        border-radius: 50%;
        border-color: rgba(0, 0, 0, 0.12);
        background-color: #fff;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.12);
        }
        img {
          width: 20px;
        }
      }
    }
    .title {
      margin-top: 10px;
      h1 {
        text-align: center;
        font-size: 26px;
        font-weight: 300;
      }
    }
    .icon {
      text-align: center;
      line-height: 60px;
      font-size: 36px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: rgb(70, 112, 250);
      margin: 20px auto;
    }
    .tips {
      text-align: center;
      font-size: 15px;
      font-weight: 300;
      margin-top: 12px;
      color: #7f8085;
    }
  }
}
</style>
