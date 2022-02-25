<template>
  <div class="nav">
    <div class="container">
      <ul>
        <li :class="route.name === 'home' ? 'active' : ''" @click="router.push('/home/home')">首页</li>
        <li>编程</li>
        <li>资讯</li>
        <li>留言板</li>
        <li :class="route.name === 'about' ? 'active' : ''" @click="router.push('/home/about')">关于</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import router from "../../router";
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss" scoped>
.nav {
  .container {
    ul {
      display: flex;
      li {
        margin: 0 20px;
        font-weight: 800;
        font-size: 14px;
        cursor: pointer;
        &.active {
          color: #2169f5;
        }
        &:hover {
          color: #2169f5;
        }
      }
    }
  }
}
</style>
