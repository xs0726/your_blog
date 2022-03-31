<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="最新">
      <TabListContent />
    </a-tab-pane>
    <a-tab-pane key="2" tab="精选">Content of Tab Pane 2</a-tab-pane>
  </a-tabs>
</template>

<script setup>
import {ref} from "vue";
import TabListContent from "./TabListContent";

const activeKey = ref('2')
</script>

<style scoped>

</style>
