<template>
  <div class="home">
    <Top />
    <div class="content">
      <router-view />
    </div>
    <div class="backTop">
      <div class="menu">
        <div @click="toggleMenu" class="toggle"><plus-outlined /></div>
        <li style="--i:0"><a href="#">
          <a-tooltip>
            <template #title>Java</template>
            <tags-outlined />
          </a-tooltip>
        </a></li>
        <li style="--i:1"><a href="#">
          <a-tooltip>
            <template #title>python</template>
            <tags-outlined />
          </a-tooltip>
        </a></li>
        <li style="--i:2"><a href="#">
          <a-tooltip>
            <template #title>C</template>
            <tags-outlined />
          </a-tooltip>
        </a></li>
        <li style="--i:3"><a href="#">
          <a-tooltip>
            <template #title>C++</template>
            <tags-outlined />
          </a-tooltip>
        </a></li>
        <li style="--i:4"><a href="#">
          <a-tooltip>
            <template #title>C#</template>
            <tags-outlined />
          </a-tooltip>
        </a></li>
        <li style="--i:5"><a href="#">
          <a-tooltip>
            <template #title>JavaScript</template>
            <tags-outlined />
          </a-tooltip>
        </a></li>
        <li style="--i:6"><a href="#">
          <a-tooltip>
            <template #title>vue</template>
            <tags-outlined />
          </a-tooltip>
        </a></li>
        <li style="--i:7"><a href="#">
          <a-tooltip>
            <template #title>react</template>
            <tags-outlined />
          </a-tooltip>
        </a></li>
      </div>
      <div v-show="scroll > 400" @click="gotop" class="goTop"><vertical-align-top-outlined /></div>
    </div>
  </div>
</template>

<script setup>
import {
  VerticalAlignTopOutlined,
  PlusOutlined,
  TagsOutlined
} from '@ant-design/icons-vue'
import Top from '@/components/Home/Top'
import {loginByGithub, loginByQQ} from '../../api/home'
import { message } from 'ant-design-vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import router from "../../router";
import watermark from '@/utils/watermark'
import {ref} from "vue";

const store = useStore()
const route = useRoute()

// document监听滚动事件
const scroll = ref(0)
window.addEventListener('scroll', () => {
  scroll.value = document.documentElement.scrollTop
})

const init = async () => {
  if (route.query.code) {
    switch (localStorage.getItem('loginType')) {
      case 'qq':
        const {code,data,msg} = await loginByQQ(route.query.code)
        if (code === 200) {
          store.commit('app/setToken', data.token)
          store.commit('app/setUserInfo', data.user)
        } else if (code === 201) {
          message.error(msg)
          await router.push({name: 'bindAccount', params: data})
        } else {
          message.error(msg)
        }
      break;
      case 'wx':
        router.push({ name: "bindAccount", params: route.query.code });
      break;
      case 'github':
        const res = await loginByGithub(route.query.code)
        if (res.code === 200) {
          store.commit('app/setToken', res.data.token)
          store.commit('app/setUserInfo', res.data.user)
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
const toggleMenu = () => {
  const menu = document.querySelector('.menu')
  menu.classList.toggle('active')
}
// 缓慢回到顶部
const gotop = () => {
  const timer = setInterval(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop > 0) {
      window.scrollTo(0, scrollTop - 100)
    } else {
      clearInterval(timer)
    }
  }, 20)
}
</script>

<style lang="scss" scoped>
.home {
  background: url('../../../src/assets/homeBg.jpg');
  background-size: 100% 100%;
  background-clip: content-box;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  .content {
    width: 1170px;
    margin: 0 auto;
  }
  .backTop {
    position: fixed;
    bottom: 100px;
    right: 85px;
    width: 50px;
    height: 110px;
    .goTop {
      height: 50px;
      background-color: #737373;
      text-align: center;
      line-height: 50px;
      font-size: 30px;
      border-radius: 50%;
      margin-top: 10px;
      color: white;
      cursor: pointer;
    }
    .menu {
      position: relative;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .menu li {
      position: absolute;
      right: 85px;
      list-style: none;
      transform-origin: 100px;
      transition: 0.5s;
      transition-delay: calc(0.1s * var(--i));
      transform: rotate(0deg) translateX(80px);
    }

    .menu.active li {
      transform: rotate(calc(360deg / 8 * var(--i)));
    }

    .menu li a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: #fff;
      border-radius: 50%;
      transform: rotate(calc(360deg / -8 * var(--i)));
    }

    .toggle {
      position: absolute;
      width: 50px;
      height: 50px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100000;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 3px 4px rgba(0,0,0,.15);
      font-size: 2em;
    }

    .menu.active .toggle{
      transform: rotate(315deg);
    }
  }
}
</style>
