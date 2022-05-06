<template>
  <div class="top">
    <div class="top-nav">
      <div class="nav-top">
        <div class="logo">
          <a href="//www.decunt.com/home" class="logoAir" title="BLOG">BLOG</a>
        </div>
        <Nav />
      </div>
      <div class="search">
        <input
          class="searchInp"
          v-model="searchValue"
          placeholder="请输入搜索内容！"
        />
        <div class="search1">搜索</div>
      </div>
      <div v-if="!store.state.app.token" class="loginOrRegister">
        <span @click="router.push('/login')">登录</span>
        <span @click="router.push('/register')">注册</span>
      </div>
      <div v-else class="userinfo">
        <div class="avatar">
          <img v-if="userInfo.userId" :src="avatarImg" alt />
          <a-avatar v-else style="background-color: #87d068">
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>
        </div>
        <a-dropdown>
          <span class="welcome">
            欢迎您,<span>{{ userInfo.username }}</span>
          </span>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;" @click="router.push('/editor')">写文章</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;" @click="modalVisible.settingModal = true">账号设置</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;"
                  @click="modalVisible.passwordModal = true"
                  >密码修改</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;" @click="logout">退出登录</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
    <!--    账号设置弹框-->
    <a-modal
      :width="420"
      :footer="null"
      :visible="modalVisible.settingModal"
      title="账号设置"
      @cancel="closeSettingModal"
    >
      <a-form
        :model="settingFormState"
        name="basic"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 20 }"
        autocomplete="off"
      >
        <a-form-item label="用户名" name="username">
          <a-input v-model:value="settingFormState.username" />
        </a-form-item>

        <a-form-item label="手机号" name="phone">
          <a-input
            v-model:value="settingFormState.phone"
            :disabled="!editPhoneFlag.flag"
          >
            <template #addonAfter>
              <span style="cursor: pointer" @click="changeFlag">{{
                editPhoneFlag.flag ? "取消" : "修改"
              }}</span>
            </template>
          </a-input>
        </a-form-item>

        <a-form-item v-if="editPhoneFlag.flag" label="验证码" name="code">
          <a-input v-model:value="settingFormState.code" />
        </a-form-item>

        <a-form-item label="邮箱地址" name="email">
          <a-input v-model:value="settingFormState.email" />
        </a-form-item>

        <a-form-item label="用户头像">
          <a-upload
            v-model:fileList="settingFormState.avatar"
            name="avatar"
            list-type="picture-card"
            :show-upload-list="false"
            class="avatar-uploader"
          >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else>
              <plus-outlined></plus-outlined>
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 10, span: 14 }">
          <a-button type="primary" html-type="submit">确认修改</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
    <!--    修改密码弹框-->
    <a-modal
      :footer="null"
      :visible="modalVisible.passwordModal"
      title="修改密码"
      @cancel="closePasswordModal"
    >
      <a-form
        :model="passwordFormState"
        name="basic"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 19 }"
        autocomplete="off"
        :rules="pwdRule"
        ref="pwdRef"
        @finish="submitPwd"
      >
        <a-form-item label="旧密码" name="oldPwd">
          <a-input-password v-model:value="passwordFormState.oldPwd" />
        </a-form-item>

        <a-form-item label="新密码" name="newPwd">
          <a-input-password v-model:value="passwordFormState.newPwd" />
        </a-form-item>

        <a-form-item label="确认新密码" name="cNewPwd">
          <a-input-password v-model:value="passwordFormState.cNewPwd" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 10, span: 14 }">
          <a-button type="primary" html-type="submit">确认修改</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
import {
  UserOutlined,
  SettingOutlined,
  PlusOutlined,
} from "@ant-design/icons-vue";
import Nav from "@/components/Home/Nav";
import { reactive, ref } from "vue";
import { reg } from "../../utils/util";
import router from "../../router";
import { editPwd, loginByGithub, logout as logoutApi } from "../../api/home";
import { useStore } from "vuex";
import { message } from "ant-design-vue";
import { Encrypt } from "../../utils/aes";
import { useRoute } from "vue-router";
//
const store = useStore();
const route = useRoute();

const userInfo = store.state.app.userInfo;

const modalVisible = reactive({
  settingModal: false,
  passwordModal: false,
});

const pwdRef = ref(null);

// 关闭弹框
const closeSettingModal = () => {
  modalVisible.settingModal = false;
};
const closePasswordModal = () => {
  pwdRef.value.resetFields();
  modalVisible.passwordModal = false;
};

const settingFormState = reactive({
  username: "",
});

const passwordFormState = reactive({
  oldPwd: "",
  newPwd: "",
  cNewPwd: "",
});

const isOldPwd = () => {
  if (!passwordFormState.oldPwd) {
    return Promise.reject("旧密码不能为空!");
  }
  if (!reg.pwd.test(passwordFormState.oldPwd)) {
    return Promise.reject("请输入6-16位字母加数字!");
  } else {
    return Promise.resolve();
  }
};
const isNewPwd = () => {
  if (!passwordFormState.newPwd) {
    return Promise.reject("新密码不能为空!");
  }
  if (!reg.pwd.test(passwordFormState.newPwd)) {
    return Promise.reject("请输入6-16位字母加数字!");
  } else {
    return Promise.resolve();
  }
};
const isCNewPwd = () => {
  if (!passwordFormState.cNewPwd) {
    return Promise.reject("确认密码不能为空!");
  }
  if (passwordFormState.cNewPwd !== passwordFormState.newPwd) {
    return Promise.reject("两次密码不一致!");
  } else {
    return Promise.resolve();
  }
};

const pwdRule = reactive({
  oldPwd: [{ validator: isOldPwd, trigger: "blur" }],
  newPwd: [{ validator: isNewPwd, trigger: "blur" }],
  cNewPwd: [{ validator: isCNewPwd, trigger: "blur" }],
});

// 修改密码提交
const submitPwd = async (v) => {
  if (v.oldPwd === v.newPwd) {
    return message.error("新密码不能与旧密码一致!");
  } else {
    const params = {
      userId: userInfo.userId,
      password: Encrypt(v.oldPwd),
      newPassWord: Encrypt(v.newPwd),
    };
    const { code, message: msg } = await editPwd(params);
    if (code !== 200) {
      return message.error(msg);
    }
    message.success("密码修改成功,请重新登录");
    closePasswordModal();
    logout();
  }
};

// 推出登录
const logout = async () => {
  delete localStorage.BLOG_USER_TOKEN;
  delete localStorage.BLOG_USER_INFO;
  store.commit("app/setToken", "");
  store.commit("app/setUserInfo", "");
  await logoutApi();
  await router.replace("/login");
};

let searchValue = ref("");

let imageUrl = ref("");

const editPhoneFlag = reactive({
  flag: false,
});
const changeFlag = () => {
  editPhoneFlag.flag = !editPhoneFlag.flag;
};

const token = ref("");
const avatarImg = `http://106.15.186.163/user/headImg/9/headShot.jpg`;
const init = async () => {
  // console.log(route.query.)
  // token.value = localStorage.getItem('BLOG_USER_TOKEN') || ''
  // if (route.query.code) {
  //   const res = await loginByGithub(route.query.code).catch(err=>message.error('登录失败'))
  //   console.log(res)
  // }
};
init();
</script>

<style lang="scss" scoped>
.top {
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 8px 2px rgba(194, 194, 194, 0.329);
  z-index: 2;

  .top-nav {
    display: flex;
    background-color: rgba(255, 255, 255);
    justify-content: space-between;
    align-items: center;
    height: 100%;
    min-width: 1142px;
    padding: 0 60px;
    .nav-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      .logoAir {
        display: block;
        margin-right: 60px;
        width: 56px;
        height: 56px;
        overflow: hidden;
        font-size: 0;
        background: url("../../assets/images/m13.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .search {
      flex: 1;
      height: 34px;
      margin: 0 50px;
      border-radius: 60px;
      max-width: 500px;
      display: flex;
      background: #f5f6f7;
      align-items: center;
      overflow: hidden;
      border: 1px solid rgb(224, 224, 224);
      text-align: center;
      justify-content: center;
      .searchInp {
        padding-left: 10px;
        flex: 1;
        border: 0;
        background: #f5f6f7;
        padding: 4px 0;
        font-size: 14px;
        text-indent: 1em;
        outline: none;
      }
      .search1 {
        white-space: nowrap;
        padding: 0 30px;
        height: 100%;
        font-size: 14px;
        display: flex;
        align-items: center;
        cursor: pointer;
        background: #4f86f5;
        color: #fff;
      }
    }
    .loginOrRegister {
      width: 100px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 14px;
      cursor: pointer;
      span {
        &:hover {
          color: #2169f5;
        }
      }
    }
    .userinfo {
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 50px;
      .welcome {
        margin-left: 10px;
        font-size: 14px;
        //color: #1890ff;
        cursor: pointer;
      }
      .avatar {
        width: 30px;
        height: 30px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .iconDown {
        margin-left: 10px;
        font-size: 14px;
      }
    }
    .modal {
      position: absolute;
      top: 55px;
      right: 235px;
      width: 200px;
      height: 300px;
      background-color: #fff;
      padding: 10px;
      border-radius: 5px;
      font-size: 14px;
      .username {
        text-align: center;
      }
      ul {
        li {
          height: 40px;
          text-align: center;
          line-height: 40px;
          &:hover {
            background-color: #e3e5e7;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
.avatar-uploader {
  .ant-upload {
    width: 128px;
    height: 128px;
    .ant-upload-select-picture-card {

      .ant-upload-text {
        margin-top: 8px;
        color: #666;
      }
    }
  }
}

.content {
  width: 1120px;
  margin: 0 auto;
}
</style>
