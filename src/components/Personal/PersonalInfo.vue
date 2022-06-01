<template>
  <a-card title="信息">
    <template #extra><a class="editor" @click="visible = true" href="javascript:;">编辑</a></template>
    <a-descriptions>
      <a-descriptions-item label="性别">男</a-descriptions-item>
    </a-descriptions>
    <a-descriptions>
      <a-descriptions-item label="简介">暂无</a-descriptions-item>
    </a-descriptions>
    <a-descriptions>
      <a-descriptions-item label="状态">暂无</a-descriptions-item>
    </a-descriptions>
    <a-descriptions>
      <a-descriptions-item label="邮箱">暂无</a-descriptions-item>
    </a-descriptions>
    <a-descriptions>
      <a-descriptions-item label="注册时间">暂无</a-descriptions-item>
    </a-descriptions>

    <a-modal v-model:visible="visible" title="修改信息" @ok="visible = false">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </a-card>
</template>

<script setup>

import {ref} from "vue";

const visible = ref(false)
</script>

<style lang="scss" scoped>
.editor {
  color: #3d60e5;
}
.ant-descriptions {
  margin: 10px 0;
  ::v-deep(.ant-descriptions-item-label) {
    width: 110px;
  }
}
</style>
