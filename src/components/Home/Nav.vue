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
import router from '../../router'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss" scoped>
.nav {
  ul {
    display: flex;
    li {
      cursor: pointer;
      height: 50px;
      white-space: nowrap;
      line-height: 50px;
      padding: 0 20px;
    }
    li:hover {
      background: #f0f0f5;
    }

    .active {
      background: #f5f5ff;
      position: relative;
    }
    .active::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 2px;
      background: #517df8;
      animation: op 0.3s linear alternate;
    }
  }
}
@keyframes op {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    background: #e9e9f8;
  }
}
</style>
