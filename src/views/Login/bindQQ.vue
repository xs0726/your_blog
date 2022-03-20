<template>
  <div class="bindQQ">
    <img class="bgImg" src="../../assets/home_top_bg.jpg" alt="" />
    <div class="bindQQ_container">
      <div class="title">
        <h1>登录以完成绑定</h1>
      </div>
      <div class="bindQQ_avatar">
        <div class="avatar1">
          <img
            class="avatar1_img"
            :src="qqInfo.url"
            alt=""
          />
        </div>
        <div class="line"></div>
        <div class="avatar2">
          <img class="avatar2_img" src="../../assets/images/m13.png" alt="" />
        </div>
      </div>
      <div class="bindQQ_tip">已有账号？输入账号信息登录立即绑定</div>
      <a-form
        :model="formState"
        name="basic"
        :wrapper-col="{ offset: 2, span: 20 }"
        autocomplete="off"
        :rules="rules"
        ref="loginForm"
        @finish="login"
      >
        <a-form-item name="username">
          <a-input
            v-model:value="formState.username"
            placeholder="登录手机号/邮箱"
          />
        </a-form-item>

        <a-form-item name="password">
          <a-input-password
            v-model:value="formState.password"
            placeholder="密码"
          />
        </a-form-item>

        <a-form-item name="code">
          <a-row :span="24">
            <a-col :span="15">
              <a-input v-model:value="formState.code" placeholder="验证码" />
            </a-col>
            <a-col :offset="1" :span="7">
              <img
                @click="getVerCode"
                class="codeImg"
                :src="imgUrl"
                alt="验证码"
              />
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 18 }">
          <a-button type="primary" html-type="submit">授权并登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter} from "vue-router";
import { reactive, ref } from "vue";
import { getCode, loginBindQQ } from "../../api/login";
import { useStore } from "vuex";
import { Encrypt } from "../../utils/aes";
import { message } from "ant-design-vue";
const store = useStore();
const route = useRoute();
const router = useRouter();
const qqInfo = route.params;

let formState = reactive({
  username: "",
  password: "",
  code: "",
});

const login = async () => {
  const params = {
    email: formState.username,
    password: Encrypt(formState.password),
    uuid: uuid.value,
    verificationCode: formState.code,
  };
  const { code, msg } = await store.dispatch("app/login", params);
  if (code !== 200) {
    formState.code = "";
    await getVerCode();
    return message.error(msg);
  }
  const res = await loginBindQQ(qqInfo.key);
  if (res.code !== 200) {
    formState.code = "";
    await getVerCode();
    return message.error(res.message);
  }
  localStorage.setItem("BLOG-USERINFO", JSON.stringify(formState));
  message.success("登录成功");
  router.push("home");
};

// 表单校验规则
const rules = reactive({
  username: [{ required: true, message: "手机号/邮箱不能为空!" }],
  password: [
    { required: true, message: "密码不能为空!" },
    { min: 6, max: 16, message: "请输入6-16位密码!" },
  ],
  code: [{ required: true, message: "验证码不能为空!" }],
});

// 图片路径
let imgUrl = ref("");
let uuid = ref("");
// 获取验证码
const getVerCode = async () => {
  const { code, data, msg } = await getCode();
  if (code !== 200) return message.error(msg);
  imgUrl.value = data.img;
  uuid.value = data.uuid;
};
getVerCode();
</script>

<script>
import { defineComponent } from 'vue'
// import { useRoute} from "vue-router";
// const route = useRoute()
// console.log(route);
export default defineComponent({
  beforeRouteEnter(to, from, next) {
    if (from.path === '/home/home' && from.query.code) {
      next()
    }
    next('/')
  }
})
</script>

<style lang="scss" scoped>
.bindQQ {
  width: 100%;
  height: 100%;
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
  .bindQQ_container {
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
    .title {
      margin-top: 10px;
      h1 {
        text-align: center;
        font-size: 26px;
        font-weight: 300;
      }
    }
    .bindQQ_avatar {
      display: flex;
      margin: 50px 0 20px 0;
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
    .bindQQ_tip {
      margin: 10px 0 50px 0;
      font-size: 14px;
      color: #999;
    }
  }
}
</style>
