<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="最新">
      <TabListContent />
    </a-tab-pane>
    <a-tab-pane key="2" tab="精选">
      <TabSelected />
    </a-tab-pane>
  </a-tabs>
</template>

<script setup>
import {ref} from "vue";
import TabListContent from "./TabListContent";
import TabSelected from "./TabSelected";

const activeKey = ref('1')
</script>

<style scoped>

</style>
