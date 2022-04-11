<template>
  <div class="login">
    <img class="bgImg" src="../../assets/home_top_bg.jpg" alt="" />
    <div class="login-container">
      <div class="title">
        <h1>博客用户登录</h1>
      </div>
      <div class="icon">
        <a style="color: white" href="http://decunt.com"><BoldOutlined /></a>
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
          <button @click="loginType('qq')"><a href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101993751&redirect_uri=http://www.decunt.com/home"><img src="../../assets/images/QQ.png" alt=""></a></button>
          <button @click="loginType('wx')"><img src="../../assets/images/WeChat.png" alt=""></button>
          <button @click="loginType('github')"><a href="https://github.com/login/oauth/authorize?client_id=9bc20c1d36f7d024515b"><img src="../../assets/images/GitHub.png" alt=""></a></button>
        </div>
      </div>
      <div class="goRegister">
        没有账号,<a-button @click="goRegister" type="link">立即注册</a-button>
      </div>
    </div>
    <a-modal class="wxLogin" v-model:visible="visible" title="微信登录" @ok="handleOk">
      <a-row>
        <a-col offset="5"><img class="qr" src="../../assets/images/QRcode.jpg" alt="公众号二维码"></a-col>
      </a-row>
      <a-row  align="middle">
        <a-col offset="3" span="4">验证码:</a-col>
        <a-col span="12"><a-input v-model:value="wxVerifyCode" show-count :maxlength="6">
          <template #addonAfter>
            <a-tooltip>
              <template #title>关注公众号回复 blog 获取验证码</template>
              <question-outlined />
            </a-tooltip>
          </template>
        </a-input></a-col>
      </a-row>
    </a-modal>
  </div>
</template>

<script setup>
import { BoldOutlined, QuestionOutlined } from "@ant-design/icons-vue";
import {useRoute, useRouter} from "vue-router";
import LoginForm from "../../components/LoginForm";
import { ref } from 'vue'
import {message} from "ant-design-vue";
import { loginByWeChat } from "@/api/login";
import {useStore} from "vuex";


  const store = useStore()
  const route = useRoute()
  const activeKey = ref('1')
  const visible = ref(false)
  const wxVerifyCode = ref('')

  const router = useRouter();
  const goRegister = () => {
    router.push('register')
  }
  const loginType = (type) => {
    if (type === 'wx') {
      // message.info('暂未开放')
      visible.value = true
    }
      localStorage.setItem('loginType', type)
  }

  const handleOk = async () => {
    // 正则验证是否为6位纯数字
    if (wxVerifyCode.value.match(/^\d{6}$/)) {
      const res = await loginByWeChat(wxVerifyCode.value)
      if (res.code === 200) {
        store.commit('app/setToken', data.token)
        store.commit('app/setUserInfo', data.user)
        await router.push('/')
      } else if(res.code === 201) {
        message.error(res.msg)
        await router.push({ path: "/", query: { code: res.data } })
      } else {
        message.error(res.msg)
      }
    } else {
      message.info('请输入正确的验证码')
    }
  }
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
  .qr {
      margin-left: 10px;
  }
}
</style>
