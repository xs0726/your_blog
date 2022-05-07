<template>
  <div class="markdown-editor">
    <header class="header editor-header">
      <div class="left-box"></div>
      <a-input v-model:value="title" placeholder="请输入文章标题..." />
      <div class="right-box">
        <div class="status-text">文章将自动保存</div>
        <div class="xitu-btn">
          <a-button gosht @click="router.go(-1)">取消</a-button>
          <a-button type="primary" @click="visible = true">发布</a-button>
        </div>
        <a-avatar style="background-color: #87d068">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </div>
    </header>
    <div class="main">
      <Editor class="editor" v-model:value="content" mode='split' :plugins="plugins" :locale='zhHans' @change="handleChange" />
    </div>
    <a-drawer
        v-model:visible="visible"
        class="custom-class"
        title="发布文章"
        placement="right"
        :footer-style="{ textAlign: 'right' }"
        :width="600"
    >
      <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 20 }"
          autocomplete="off"
          @finish="submit"
          ref="form"
      >
        <a-form-item
            label="分类"
            name="classify"
            :rules="[{ required: true, message: '请选择一个分类' }]"
        >
          <a-radio-group v-model:value="formState.classify" button-style="solid">
            <a-radio-button value="后端">后端</a-radio-button>
            <a-radio-button value="前端">前端</a-radio-button>
            <a-radio-button value="Android">Android</a-radio-button>
            <a-radio-button value="iOS">iOS</a-radio-button>
            <a-radio-button value="人工智能">人工智能</a-radio-button>
            <a-radio-button value="开发工具">开发工具</a-radio-button>
            <a-radio-button value="代码人生">代码人生</a-radio-button>
            <a-radio-button value="阅读">阅读</a-radio-button>
          </a-radio-group>
        </a-form-item>

        <a-form-item name="tag" label="添加标签" :rules="[{ required: true, validator: tagValidate, trigger: 'change' }]">
          <a-select v-model:value="formState.tag" mode="multiple" :options="tagOptions" />
        </a-form-item>

        <a-form-item name="abstract" label="编辑摘要">
          <a-textarea v-model:value="formState.abstract" :rows="4" show-count :maxlength="100" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button style="margin-right: 10px" @click="onclose">取消</a-button>
          <a-button type="primary" html-type="submit">确定并发布</a-button>
        </a-form-item>

      </a-form>
    </a-drawer>
  </div>
</template>

<script setup>
import {  UserOutlined } from "@ant-design/icons-vue";
import { Editor } from '@bytemd/vue-next'
import zhHans from 'bytemd/locales/zh_Hans.json'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight-ssr'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import gemoji from '@bytemd/plugin-gemoji'
import math from '@bytemd/plugin-math'
import mermaid from '@bytemd/plugin-mermaid'
import {reactive, ref} from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const title = ref('')

const plugins = [
  gfm(),
  highlight(),
  mediumZoom(),
  gemoji(),
  math(),
  mermaid()
]
const content = ref('')
const handleChange = (v) => {
  content.value = v
}

// 发布侧弹框
let visible = ref(false)
// 发布文字填写信息表单
const formState = reactive({
  classify: '',
  tag: [],
  abstract: ''
})
// 标签tagOptions
const tagOptions = [
  { label: 'vue', value: 'vue' },
  { label: 'react', value: 'react' },
  { label: 'node', value: 'node' },
  { label: 'webpack', value: 'webpack' },
  { label: 'css', value: 'css' },
  { label: 'html', value: 'html' },
  { label: 'js', value: 'js' },
  { label: 'java', value: 'java' },
  { label: 'python', value: 'python' },
  { label: 'php', value: 'php' },
  { label: 'ruby', value: 'ruby' },
  { label: 'go', value: 'go' },
  { label: 'rust', value: 'rust' },
  { label: 'scala', value: 'scala' },
  { label: 'swift', value: 'swift' },
  { label: 'kotlin', value: 'kotlin' },
  { label: 'c', value: 'c' },
  { label: 'c++', value: 'c++' },
  { label: 'c#', value: 'c#' },
  { label: 'javaScript', value: 'javaScript' },
  { label: 'typescript', value: 'typescript' },
  { label: 'python3', value: 'python3' },
  { label: 'php7', value: 'php7' }
]
const afterVisibleChange = (bool) => {
  console.log('visible', bool);
};
const form = ref(null)
// 选择标签
const tagValidate = (rule, value) => {
  // 判断value的长度是否大于5 如果大于5 则提示用户选择的标签数量不能超过5
  if (value.length > 5) {
    return Promise.reject('最多只能选择5个标签')
  } else if (value.length === 0) {
    return Promise.reject('至少选择一个标签')
  } else {
    return Promise.resolve()
  }
}
// 关闭侧面弹框
const onclose = () => {
  form.value.clearValidate()
  visible.value = false
}
// 提交发布文章表单
const submit = () => {
  // form.value.validateFields(valid => {
  //   if (!valid) return false
  //   console.log(formState)
  // })
  console.log(form.value)
}
</script>

<style lang="scss" scoped>
.markdown-editor {
  height: calc(100% - 0.334rem);
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 27px;
    height: 0.334rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    margin-right: 200px;
    z-index: 100;
    .ant-input {
      flex: 1 1 auto;
      height: 100%;
      margin: 0;
      padding: 0;
      font-size: 24px;
      font-weight: 500;
      color: #1d2129;
      border: none;
      outline: none;
      //font: inherit;
    }
    .left-box {
      padding-right: 14px;
      cursor: pointer;
    }
    .right-box {
      width: 320px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .status-text {
        font-size: 14px;
        white-space: nowrap;
        color: #c9cdd4;
        cursor: default;
        user-select: none;
        margin-left: 8px;
        margin-right: 8px
      }
      .xitu-btn {
        display: flex;
        margin: 0 10px;
        .ant-btn {
          margin: 0 5px;
        }
      }
    }
  }
}
.main {
  height: 100%;
  .editor {
    height: 100%;
    ::v-deep(.bytemd) {
      height: 100%;
    }
    ::v-deep(.CodeMirror) {
      background: #f8f9fa;
    }
  }
}
.ant-radio-button-wrapper {
  width: 90px;
  text-align: center;
  margin: 5px;
}
</style>
