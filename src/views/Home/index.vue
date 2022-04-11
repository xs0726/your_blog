<template>
  <div class="home">
    <Top />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Top from '@/components/Home/Top'
import {loginByGithub, loginByQQ} from '../../api/home'
import { message } from 'ant-design-vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import router from "../../router";
import watermark from '@/utils/watermark'
const store = useStore()
const route = useRoute()
const init = async () => {
  if (route.query.code) {
    switch (localStorage.getItem('loginType')) {
      case 'qq':
        // qq
        const {code,data,msg} = await loginByQQ(route.query.code)
        if (code === 200) {
          store.commit('app/setToken', data.token)
          store.commit('app/setUserInfo', data.user)
          // router.go(0)
        } else if (code === 201) {
          message.error(msg)
          await router.push({name: 'bindAccount', params: data})
        } else {
          message.error(msg)
        }
      break;
      case 'wx':
        // todo
        router.push({ name: "bindAccount", params: route.query.code });
      break;
      case 'github':
        // github
        const res = await loginByGithub(route.query.code)
        if (res.code === 200) {
          store.commit('app/setToken', res.data.token)
          store.commit('app/setUserInfo', res.data.user)
          // router.go(0)
        } else if (res.code === 201) {
          message.error(res.msg);
          router.push({ name: "bindAccount", params: res.data });
        } else {
          message.error(res.msg)
        }
      break;
    }
  }
}
init()
watermark
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: url('../../../src/assets/homeBg.jpg');
  background-size: 100% 100%;
  background-clip: content-box;
  .content {
    width: 1170px;
    margin: 0 auto;
  }
}
</style>
