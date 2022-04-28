<template>
  <div class="login">
    <img class="bgImg" src="../../assets/home_top_bg.jpg" alt />
    <div class="login-container">
      <div class="title">
        <h1>博客用户登录</h1>
      </div>
      <div class="icon">
        <a style="color: white" href="http://decunt.com">
          <BoldOutlined />
        </a>
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
          <button @click="loginType('qq')">
            <a
              href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101993751&redirect_uri=http://www.decunt.com/home"
            >
              <img src="../../assets/images/QQ.png" alt />
            </a>
          </button>
          <button @click="loginType('wx')">
            <img src="../../assets/images/WeChat.png" alt />
          </button>
          <button @click="loginType('github')">
            <a href="https://github.com/login/oauth/authorize?client_id=9bc20c1d36f7d024515b">
              <img src="../../assets/images/GitHub.png" alt />
            </a>
          </button>
        </div>
      </div>
      <div class="goRegister">
        没有账号,
        <a-button @click="goRegister" type="link">立即注册</a-button>
      </div>
      <img
        @click="isCode=!isCode"
        class="codeBtn"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAPiSURBVHhe7ZpNSFRRFMf/fuSooQUtoiKoTbTJhbWLiAoi6EtQIqMPwgohWhnlQtBokUEfq6AgKCj6QknJReXGFpFtwjTCwlYVIURZyWimTufMu01vxndnvG/eu/M+/MGZOec+mDfv/94959w7k9fSE4u1dABYSKaLn0C0FSiZZ4Rjf4DSRnLKjVgn+c0bgZYq8kaMgbCRzy9hFiEuABNWERICMGEUIUkAJmwizBCASYjwjWzcplFmdwz+LKtzzMYmydKQFyOEP4ObfcAQiVBoKZOcogLg1RegvZ8CUeqSUCmDdKy6AqhcAkxMibFZUlwIPPkA9AxRQL4VaQXIhs5BoOoGOaVGnISKAFGg4zCwe7WIFTn/HGjsIqfYiFNRvLezJ+rgFMjms8YzTAHXBPALSlPg0Xvg4ENgRUrbPDUNzC8CXtSJAeLuALDvNjkOTIE7+4HaNSImatuB/mEj15jhHFGxmM5dLQaIM88ooT8mx4kpsHMVUL8O6HtD9um/DZC9JNMFX/zbj8nfgY3H+JgKylPg3BZStIacUTLOrMIikizrBvE7bzq32VKfikzYygFBapZsJ8GgiJBVFQiCCFkJwLAITSTCuEYRuOpAYvFjCmQtAHN2E9DKT4ImSrl8UtmN0LvZeCx+TAFHBGBOrxeOBnqPALFmeuqako3H+JgKjgngV1wTwMklFq/q7JKpL3BvNfiOVoNXyFlkxEmotMK/gRMbgM0r6THPsLBJhfPBLVqSt72mQJIbXBOAOfkUuMh9+AIjTqC6LU4iQHEvIAGfQ3LxjKs54MJWoGEbOT+M2DYRMl5U2bE0F8+4ngQdE8EltFQBL4ugrQx6VQRtAjBeFMHVKiBjbxtVBxJjmcj6oxNA2XFyZFXARXIigBUsQkGeCDTiGQFyhdYc4EU88wR8/kVdc4kITEzTt4tQP19g81ZNThu7xfmS6eUZATgx3rdqm6PA9aNAXaWIFWmgdvxSJzm6fxlS5V4Nfdk95PDt4GpgMtVNDjPl3EanfJ7ZPJUDctEneC4J6hbBk1VApwieFIDRJYJnBWBYhEMkwnf+p4dN4j+tUyWRmS86wY5B4HIvsLRMDJj4ShfRfUAEFgwMG/9Wke0N+qYVru8Crln1CSNUOXnv0SaengJmru6gnLCLnDGyohTLAt8IwLiRGH0lAOO0CL4TgHFSBF8KwDglgu83RGoeAG28iJLgm+WwW/hmOewWvloO54I5AcR7aJkTQLwHFi6D6Qi8AMs52/PaX0LgBTi2lnqB7eRIOsZQ5IB0bXNokqBMhNAIwFiJECoBmFQRAr8YkvHvL3yhFYA51Q38Bej6f/l2dQe3AAAAAElFTkSuQmCC"
      />
      <transition name="gd" appear>
        <div class="code-login fsc" v-show="isCode"  @click="isCode=!isCode">
          <img
            class="code-ma"
            src="data:image/png;base64,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"
          />
        </div>
      </transition>
    </div>
    <a-modal class="wxLogin" v-model:visible="visible" title="微信登录" @ok="handleOk">
      <a-row>
        <a-col offset="5">
          <img class="qr" src="../../assets/images/QRcode.jpg" alt="公众号二维码" />
        </a-col>
      </a-row>
      <a-row align="middle">
        <a-col offset="3" span="4">验证码:</a-col>
        <a-col span="12">
          <a-input v-model:value="wxVerifyCode" show-count :maxlength="6">
            <template #addonAfter>
              <a-tooltip>
                <template #title>关注公众号回复 blog 获取验证码</template>
                <question-outlined />
              </a-tooltip>
            </template>
          </a-input>
        </a-col>
      </a-row>
    </a-modal>
  </div>
</template>

<script setup>
import { BoldOutlined, QuestionOutlined } from '@ant-design/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import LoginForm from '../../components/LoginForm'
import { ref } from 'vue'
import { message } from 'ant-design-vue'
import { loginByWeChat } from '@/api/login'
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute()
const activeKey = ref('1')
const visible = ref(false)
const wxVerifyCode = ref('')
const isCode = ref(false)

const router = useRouter()
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
    } else if (res.code === 201) {
      message.error(res.msg)
      await router.push({ path: '/', query: { code: res.data } })
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
    .codeBtn {
      position: absolute;
      right: 0;
      top: 0;
    }
    .code-login {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background: rgba(255, 255, 255, 0.89);
      z-index: 10;
      bottom: 0;
      margin: auto;
      .code-ma {
        width: 200px;
        height: 200px;
      }
    }
  }
  .qr {
    margin-left: 10px;
  }
}
.gd-enter-active {
  animation: op 0.6s linear;
}
.gd-leave-active {
  animation: op 0.3s linear reverse;
}
@keyframes op {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
