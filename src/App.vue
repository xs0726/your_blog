<template>
  <div class="app">
    <router-view v-wechat-title="route.meta.title"></router-view>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: url('./assets/homeBg.jpg') no-repeat;
  background-size: 100% 100%;
  background-clip: content-box;
}
html {
  font-size: calc(100vw / 10);
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
}
.flex {
  display: flex;
  align-items: center;
}
.fsb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fsr {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.fsc {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
