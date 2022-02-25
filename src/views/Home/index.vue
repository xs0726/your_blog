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
import { loginByGithub } from '../../api/home'
import { message } from 'ant-design-vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const init = async () => {
  if (route.query.code) {
    const res = await loginByGithub(route.query.code).catch((err) => {
      return message.error('登录失败')
    })
    if (res.code === 200) {
      store.commit('app/setToken', res.data.token)
      store.commit('app/setUserInfo', res.data.user)
    }
  }
}
init()
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: url('../../../src/assets/home_bg1.png');
  background-size: 100% 100%;
  background-clip: content-box;
  .content {
    width: 1120px;
    margin: 0 auto;
  }
}
</style>
