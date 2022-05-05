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
        <div class="code-login fsc" v-show="isCode">
          <div class="code-ma" ref="qrCodeUrl" @click="switchIscode">请稍后再试</div>
          <div class="yous">
            <img
              class="codeBtn"
              @click="isCode=!isCode"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAOkSURBVHhe7ZvLSxVhGMafk5qJ0gURCWwZQS2CcmGISKVUdBGKsPoDWoVoSYGXIm9kRiHtWgUFrdrUoiA4LVqGm4I2pYtaSC66h3nr9DxnRjgcZzxzznHu/eA7vu/Aucxvvu/9Zr4ZE/3JVGrwCYDNbFHnL1BdCZzfA4y0GJsSKdL/EhiKkQTMsZUAqWFTgLb3JmnlKYM4SBCzQOf+DAEiVhKWgO01WQJErIYDJawQIOLUEywFiIIlqMgssNGuryTYWOiwPp3ZYitAXONwGMhnOGjHF43isrsWqCilD9tPd4+SdcD0T+D5JNtrbtDvlxALVhUgHPcE7njNJmCm28wDwsQ0UH+TAX+blQS6Wp3hA0DPcQbfjNwSKfxD6xeNNEjs3Qr0nWCgud+CnAJETgk8+k07ja4XRAY5JDFvxNk4/smS0CuTVhLYA+o2mnFQUXG2IK9jNkSTdj0hu5Cosvym9VkWRq+avm/RZkftyFkErVhRGPnFZ3iB8eiUmZPkFHBwlEGVkXsCT2+vtwNXm808g0QXXywKeUGj1klhLOcUCA0Lj1tVjnk/m4LLlqPZIQQUVbejIKEoAUISOijh03dzQ8goWoAYPwyMtppJyFgTAaJxmxmEjDUTEFZcE5D3yYVPuCagVJ/MC6Sg45qAhjqg6xiDgM8OrtaA24cogS3IElwVICSh+wiDgJ4suS5AjPEc4cpRBgGU4IkAcaMlmBI8EyAkIb2o8tXIg4CnAoQWVUZPMwiIBM8FiMuNwZHgiwAhCbfaGXwxcr/wTYC4tA+4c5aBjxJ8FSA6G/yV4LsAIQnj5xh8ZvtRXPtls/5f8K0xL5lbLO5eot6rxdj0hVgG72aAXWMMLFaoAyXALervARMfGZQZeSaBGAJu0nyfOz/JwGLnReh6QOsDoLrCTGzQEHjLevLmA5MNbKvcKwidgMQFvuhWdy7Ut/WAhE3xWyZ8Q0BdWUc0V9OdqRw7LyJfA3LxX4D5NzxoPcGu6WTIi9vjQaZ8CJhfYODw0EZuCLTt4AvPKJ0S2h6wxK7+YgqorTTyMk5573lBdfIhE4czgAj1EOh4Btx9zGCLkaf7s06SHO68CH0NGHkF9GZKyJPQ14CeJmBYzyYVuLwWiSJYjITIzAKFSojUNFiIhEgJEPlKiJwAkY+ESAoQTiVEVoBwIiHSAoQk9Lcx0NWiBZEXIAZWeco9FgKE3WO9sREgrCTESoDIlhC5FSGnLP/TR2wFiL4k8A/O6WsMpEaVJgAAAABJRU5ErkJggg=="
              alt
            />
          </div>
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
import { ref, watch, nextTick } from 'vue'
import { message } from 'ant-design-vue'
import { loginByWeChat, qrcodeGgenerate } from '@/api/login'
import { useStore } from 'vuex'
import QRCode from 'qrcodejs2'

const store = useStore()
const route = useRoute()
const activeKey = ref('1')
const visible = ref(false)
const wxVerifyCode = ref('')
const isCode = ref(false)
const router = useRouter()
const qrCodeUrl = ref()
const timer = ref(true)
const switchIscode = () => {
  if (timer.value) {
    timer.value = false
    setTimeout(() => {
      timer.value = true
    }, 10000)
    qrcodeGgenerate().then((res) => {
      qrCodeUrl.value.innerHTML = ''
      var qrcode = new QRCode(qrCodeUrl.value, {
        text: res.data, // 需要转换为二维码的内容
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H,
      })
    })
    return
  }
    message.info('请稍后再试！')
}
watch(
  () => isCode.value,
  (n) => {
    if (n == true) switchIscode()
  }
)

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
      cursor: pointer;
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
      user-select: none;
      .code-ma {
        width: 200px;
        height: 200px;
        text-align: center;
        line-height: 200px;
        font-size: 20px;
        color: #fff;
        background: rgb(196, 196, 196);
        cursor: pointer;
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
