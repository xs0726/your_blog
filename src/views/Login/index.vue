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
              href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101993751&redirect_uri=http://www.decunt.com/home">
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
      <img @click="isCode = !isCode" class="codeBtn"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAPiSURBVHhe7ZpNSFRRFMf/fuSooQUtoiKoTbTJhbWLiAoi6EtQIqMPwgohWhnlQtBokUEfq6AgKCj6QknJReXGFpFtwjTCwlYVIURZyWimTufMu01vxndnvG/eu/M+/MGZOec+mDfv/94959w7k9fSE4u1dABYSKaLn0C0FSiZZ4Rjf4DSRnLKjVgn+c0bgZYq8kaMgbCRzy9hFiEuABNWERICMGEUIUkAJmwizBCASYjwjWzcplFmdwz+LKtzzMYmydKQFyOEP4ObfcAQiVBoKZOcogLg1RegvZ8CUeqSUCmDdKy6AqhcAkxMibFZUlwIPPkA9AxRQL4VaQXIhs5BoOoGOaVGnISKAFGg4zCwe7WIFTn/HGjsIqfYiFNRvLezJ+rgFMjms8YzTAHXBPALSlPg0Xvg4ENgRUrbPDUNzC8CXtSJAeLuALDvNjkOTIE7+4HaNSImatuB/mEj15jhHFGxmM5dLQaIM88ooT8mx4kpsHMVUL8O6HtD9um/DZC9JNMFX/zbj8nfgY3H+JgKylPg3BZStIacUTLOrMIikizrBvE7bzq32VKfikzYygFBapZsJ8GgiJBVFQiCCFkJwLAITSTCuEYRuOpAYvFjCmQtAHN2E9DKT4ImSrl8UtmN0LvZeCx+TAFHBGBOrxeOBnqPALFmeuqako3H+JgKjgngV1wTwMklFq/q7JKpL3BvNfiOVoNXyFlkxEmotMK/gRMbgM0r6THPsLBJhfPBLVqSt72mQJIbXBOAOfkUuMh9+AIjTqC6LU4iQHEvIAGfQ3LxjKs54MJWoGEbOT+M2DYRMl5U2bE0F8+4ngQdE8EltFQBL4ugrQx6VQRtAjBeFMHVKiBjbxtVBxJjmcj6oxNA2XFyZFXARXIigBUsQkGeCDTiGQFyhdYc4EU88wR8/kVdc4kITEzTt4tQP19g81ZNThu7xfmS6eUZATgx3rdqm6PA9aNAXaWIFWmgdvxSJzm6fxlS5V4Nfdk95PDt4GpgMtVNDjPl3EanfJ7ZPJUDctEneC4J6hbBk1VApwieFIDRJYJnBWBYhEMkwnf+p4dN4j+tUyWRmS86wY5B4HIvsLRMDJj4ShfRfUAEFgwMG/9Wke0N+qYVru8Crln1CSNUOXnv0SaengJmru6gnLCLnDGyohTLAt8IwLiRGH0lAOO0CL4TgHFSBF8KwDglgu83RGoeAG28iJLgm+WwW/hmOewWvloO54I5AcR7aJkTQLwHFi6D6Qi8AMs52/PaX0LgBTi2lnqB7eRIOsZQ5IB0bXNokqBMhNAIwFiJECoBmFQRAr8YkvHvL3yhFYA51Q38Bej6f/l2dQe3AAAAAElFTkSuQmCC" />
      <transition name="gd" appear>
        <div class="code-login fsc" v-show="isCode">
          <div class="codeImg2">
            <div class="code-ma" ref="qrCodeUrl" />
            <div class="shuaxinImg fsc" v-show="isExpired || responseCode === 2">
              <img v-if="responseCode === 1" class="lxImg" @click="switchIscode"
                src="data:image/png;base64,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"
                alt="">
              <check-circle-outlined v-else-if="responseCode === 2" style="font-size: 70px;color: green" />
            </div>
          </div>
          <div class="codeTips">{{ showTips }}</div>
          <img class="codeBtn" @click="isCode = !isCode"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAOkSURBVHhe7ZvLSxVhGMafk5qJ0gURCWwZQS2CcmGISKVUdBGKsPoDWoVoSYGXIm9kRiHtWgUFrdrUoiA4LVqGm4I2pYtaSC66h3nr9DxnRjgcZzxzznHu/eA7vu/Aucxvvu/9Zr4ZE/3JVGrwCYDNbFHnL1BdCZzfA4y0GJsSKdL/EhiKkQTMsZUAqWFTgLb3JmnlKYM4SBCzQOf+DAEiVhKWgO01WQJErIYDJawQIOLUEywFiIIlqMgssNGuryTYWOiwPp3ZYitAXONwGMhnOGjHF43isrsWqCilD9tPd4+SdcD0T+D5JNtrbtDvlxALVhUgHPcE7njNJmCm28wDwsQ0UH+TAX+blQS6Wp3hA0DPcQbfjNwSKfxD6xeNNEjs3Qr0nWCgud+CnAJETgk8+k07ja4XRAY5JDFvxNk4/smS0CuTVhLYA+o2mnFQUXG2IK9jNkSTdj0hu5Cosvym9VkWRq+avm/RZkftyFkErVhRGPnFZ3iB8eiUmZPkFHBwlEGVkXsCT2+vtwNXm808g0QXXywKeUGj1klhLOcUCA0Lj1tVjnk/m4LLlqPZIQQUVbejIKEoAUISOijh03dzQ8goWoAYPwyMtppJyFgTAaJxmxmEjDUTEFZcE5D3yYVPuCagVJ/MC6Sg45qAhjqg6xiDgM8OrtaA24cogS3IElwVICSh+wiDgJ4suS5AjPEc4cpRBgGU4IkAcaMlmBI8EyAkIb2o8tXIg4CnAoQWVUZPMwiIBM8FiMuNwZHgiwAhCbfaGXwxcr/wTYC4tA+4c5aBjxJ8FSA6G/yV4LsAIQnj5xh8ZvtRXPtls/5f8K0xL5lbLO5eot6rxdj0hVgG72aAXWMMLFaoAyXALervARMfGZQZeSaBGAJu0nyfOz/JwGLnReh6QOsDoLrCTGzQEHjLevLmA5MNbKvcKwidgMQFvuhWdy7Ut/WAhE3xWyZ8Q0BdWUc0V9OdqRw7LyJfA3LxX4D5NzxoPcGu6WTIi9vjQaZ8CJhfYODw0EZuCLTt4AvPKJ0S2h6wxK7+YgqorTTyMk5573lBdfIhE4czgAj1EOh4Btx9zGCLkaf7s06SHO68CH0NGHkF9GZKyJPQ14CeJmBYzyYVuLwWiSJYjITIzAKFSojUNFiIhEgJEPlKiJwAkY+ESAoQTiVEVoBwIiHSAoQk9Lcx0NWiBZEXIAZWeco9FgKE3WO9sREgrCTESoDIlhC5FSGnLP/TR2wFiL4k8A/O6WsMpEaVJgAAAABJRU5ErkJggg=="
            alt />
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
import { BoldOutlined, QuestionOutlined, CheckCircleOutlined } from '@ant-design/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import LoginForm from '../../components/LoginForm'
import { ref, watch, nextTick } from 'vue'
import { message } from 'ant-design-vue'
import { loginByWeChat, qrcodeGenerate, qrcodeCheckCode } from '@/api/login'
import { useStore } from 'vuex'
import QRCode from 'qrcodejs2'
import useGetUserInfo from "@/Hooks/useGetUserInfo";

const store = useStore()
const route = useRoute()
const activeKey = ref('1')
const visible = ref(false)
const wxVerifyCode = ref('')
const isCode = ref(false)
const router = useRouter()
const qrCodeUrl = ref()
const timer = ref(true)
const timer2 = ref(true)
const isExpired = ref(false)
const showTips = ref("请关注微信小程序 客博的你 扫码登录")

const qrCode = ref('') //接口返回的qrcode码  做轮询用
const switchIscode = () => {
  if (isExpired.value) {
    isExpired.value = false
    timer2.value = true
    lxqrcode()
  }
  if (timer.value) {
    timer.value = false
    setTimeout(() => {
      timer.value = true
    }, 5000)
    qrcodeGenerate().then((res) => {
      qrCode.value = res.data
      qrCodeUrl.value.innerHTML = ''
      new QRCode(qrCodeUrl.value, {
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
    if (n) {
      switchIscode()
      lxqrcode()
    }
  }
)

const responseCode = ref(0)
const lxqrcode = () => {
  if (!timer2.value) return
  let time = setInterval(() => {
    timer2.value = false
    qrcodeCheckCode(qrCode.value)
      .then((res) => {
        responseCode.value = res.data.status
        switch (responseCode.value) {
          case 0:
            showTips.value = "请关注微信小程序 客博的你 扫码登录";
            break
          case 1:
            isExpired.value = true
            clearInterval(time)
            showTips.value = "二维码已过期，请刷新";
            break;
          case 2:
            timer2.value = true
            const responseUserName = res.data.data.user.username
            showTips.value = responseUserName + " \n扫码成功，请到手机上确认！";
            break;
          case 3:
            clearInterval(time)
            useGetUserInfo(res)
            message.success('登录成功')
            router.push('/')
        }
      })
      .catch(() => {
        clearInterval(time)
      })
  }, 1000)
}
const goRegister = () => {
  router.push('register')
}
const loginType = (type) => {
  if (type === 'wx') {
    visible.value = true
  }
  localStorage.setItem('loginType', type)
}

const handleOk = async () => {
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
      background: rgba(255, 255, 255, 0.96);
      z-index: 10;
      bottom: 0;
      margin: auto;
      user-select: none;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .codeImg2 {
        width: 200px;
        height: 200px;
        position: relative;
      }

      .code-ma {
        text-align: center;
        line-height: 200px;
        font-size: 20px;
        color: #fff;
        background: rgb(196, 196, 196);
        cursor: pointer;
      }

      .shuaxinImg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.952);
        height: 100%;
        z-index: 99;

        .lxImg {
          width: 40%;
          height: 40%;
          cursor: pointer;

          &:hover {
            animation: xz linear 1s infinite;
          }
        }

      }

      .codeTips {
        line-height: 80px;
        font-size: 18px;
        color: #111;
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

@keyframes xz {
  from {
    transform: rotateZ(0);
  }

  to {
    transform: rotateZ(360deg);
  }
}
</style>
