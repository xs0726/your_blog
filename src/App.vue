<template>
  <router-view v-wechat-title="route.meta.title"></router-view>
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<style lang="scss">
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
