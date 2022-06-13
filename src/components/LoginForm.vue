<template>
  <a-form
      :model="formState"
      name="basic"
      :wrapper-col="{ span: 24 }"
      autocomplete="off"
      :rules="rules"
      ref="loginForm"
      @finish="login"
  >
    <a-form-item name="username">
      <a-input  v-model:value="formState.username" placeholder="登录手机号/邮箱" />
    </a-form-item>

    <a-form-item name="password">
      <a-input-password v-model:value="formState.password" placeholder="密码" />
    </a-form-item>

    <a-form-item name="code">
      <a-row :span="24">
        <a-col :span="15">
          <a-input v-model:value="formState.code" placeholder="验证码" />
        </a-col>
        <a-col :offset="1" :span="7">
          <img @click="getVerCode" class="codeImg" :src="imgUrl" alt="验证码">
        </a-col>
      </a-row>
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 0, span: 20 }">
      <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 10, span: 14 }">
      <a-button type="primary" html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import {reactive, ref} from "vue";
import { getCode } from "../api/login";
// import { message } from 'ant-design-vue';
import { Encrypt } from "../utils/aes";
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex'
import {message} from "ant-design-vue";

  const route = useRoute()
  const router = useRouter()
  const store = useStore()

// 登录表单数据
  let formState = reactive({
    username: '',
    password: '',
    code: '',
    remember: false
  })

  // 表单校验规则
  const rules = reactive({
    username: [{ required: true, message: '手机号/邮箱不能为空!' }],
    password: [{ required: true, message: '密码不能为空!' }, { min: 6, max: 16, message: '请输入6-16位密码!' }],
    code: [{ required: true, message: '验证码不能为空!' }]
  })

  const loginForm = ref(null)
  // 登录
  const login = async () => {
        const params = {
          email: formState.username,
          password: Encrypt(formState.password),
          uuid: uuid.value,
          verificationCode: formState.code
        }
        const {code, msg} = await store.dispatch('app/login', params)
        if (code !== 200) {
          formState.code = ''
          await getVerCode()
          return message.error(msg)
        }
        if (route.query.callbackurl) {
          router.push(route.query.callbackurl)
        }
        localStorage.setItem('BLOG-USERINFO', JSON.stringify(formState))
        message.success('登录成功')

  }



  // 图片路径
  let imgUrl = ref('')
  let uuid = ref('')
  // 获取验证码
  const getVerCode = async () => {
    const { code, data, message } = await getCode()
    if (code !== 200) return message.error(message)
    imgUrl.value = data.img
    uuid.value = data.uuid
  }
  getVerCode()

  // 初始化判断是否记住密码
  const initData = () => {
    const userinfo = JSON.parse(localStorage.getItem('BLOG-USERINFO')) || ''
    if (userinfo.remember) {
      formState.username = userinfo.username
      formState.password = userinfo.password
      formState.remember = userinfo.remember
    }
  }
  initData()

</script>

<style lang="scss" scoped>
</style>
