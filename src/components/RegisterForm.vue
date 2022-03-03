<template>
  <a-form
      :model="formState"
      name="basic"
      :wrapper-col="{ span: 24 }"
      autocomplete="off"
      :rules="rules"
      @finish="register"
  >
    <a-form-item name="username">
      <a-input  v-model:value="formState.username" placeholder="用户名" />
    </a-form-item>

    <a-form-item name="email">
      <a-input v-model:value="formState.email" placeholder="邮箱" />
    </a-form-item>


    <a-form-item name="password">
      <a-input-password v-model:value="formState.password" placeholder="密码" />
    </a-form-item>

    <a-form-item name="cPassword">
      <a-input-password v-model:value="formState.cPassword" placeholder="确认密码" />
    </a-form-item>

    <a-form-item name="code">
      <a-row :span="24">
        <a-col :span="codeSate.flag ? 16 : 15">
          <a-input :maxlength="6" v-model:value="formState.code" placeholder="验证码" />
        </a-col>
        <a-col :offset="1" :span="codeSate.flag ? 7 : 8">
          <a-button @click="sendCode" v-if="codeSate.flag" type="danger">发送验证码</a-button>
          <a-button v-else block disabled>{{codeSate.count}}S后重新获取</a-button>
        </a-col>
      </a-row>
    </a-form-item>


    <a-form-item :wrapper-col="{ offset: 10, span: 14 }">
      <a-button type="primary" html-type="submit">注册</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { reactive } from "vue";
import { verification, userRegister } from "../api/login";
import { reg } from "../utils/util";
import { Encrypt } from "../utils/aes";
import {message} from "ant-design-vue";
import router from "../router";

// 表单参数
    const formState = reactive({
      username: '',
      email: '',
      password: '',
      cPassword: '',
      code: null
    })

  // 判断两次密码是否一致
    const isPwdEqual = () => {
      if (!formState.cPassword) {
        return Promise.reject('确认密码不能为空!')
      }
      if (formState.password !== formState.cPassword) {
        return Promise.reject('两次密码不一致!')
      } else {
        return Promise.resolve()
      }
    }
    const isPwd = () => {
      if (!formState.password) {
        return Promise.reject('密码不能为空!')
      }
      if (!reg.pwd.test(formState.password)) {
        return Promise.reject('请输入6-16位字母加数字!')
      } else {
        return Promise.resolve()
      }
    }
    const isEmail = () => {
      if (!formState.email) {
        return Promise.reject('邮箱不能为空!')
      }
      if (!reg.email.test(formState.email)) {
        return Promise.reject('请输入正确的邮箱格式!')
      } else {
        return Promise.resolve()
      }
    }
    const isAccount = () => {
      if (!formState.username) {
        return Promise.reject('用户名不能为空!')
      }
      if (!reg.username.test(formState.username)) {
        return Promise.reject('请输入2-6位中文或字母!')
      } else {
        return Promise.resolve()
      }
    }
    const isCode = () => {
      if (!formState.code) {
        return Promise.reject('验证码不能为空!')
      }
      if (!reg.code.test(formState.code)) {
        return Promise.reject('请输入6位数字验证码!')
      } else {
        return Promise.resolve()
      }
    }
    // 表单校验规则
    const rules = reactive({
      username: [{ validator: isAccount, trigger: 'blur' }],
      email: [{ validator: isEmail, trigger: 'blur' }],
      password: [{ validator: isPwd, trigger: 'blur' }],
      cPassword: [{ validator: isPwdEqual, trigger: 'blur' }],
      code: [{ validator: isCode, trigger: 'blur' }],
    })

    // 验证码参数
    let codeSate = reactive({
      flag: true,
      count: 60
    })
    // 发送验证码
    const sendCode = async () => {
      const { code, message: msg } = await verification({email: formState.email, emailType: 1,})
      if ( code !== 200 ) return message.error(msg)
      message.success('验证码发送成功')
      countDown()
    }
    // 验证码倒计时
    const countDown = () => {
      codeSate.flag = false
      --codeSate.count
      let timer = null
      timer = setInterval(() => {
        if (codeSate.count > 0) {
          codeSate.flag = false
          --codeSate.count
        } else {
          codeSate.flag = true
          codeSate.count = 60
          clearInterval(timer)
          timer = null
        }
      }, 1000);
    }

    // 用户注册
    const register = async (v) => {
      const params = {
        username: v.username,
        email: v.email,
        password: Encrypt(v.password),
        verificationCode: v.code
      }
      const { code, data, message: msg } = await userRegister(params)
      if (code !== 200) return message.error(msg)
      console.log(data)
      message.success('注册成功')
      await router.push('login')
    }
</script>

<style lang="scss" scoped>
</style>
