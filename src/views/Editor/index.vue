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
      <Editor :uploadImages="uploadImages" class="editor" v-model:value="content" mode='split' :plugins="plugins" :locale='zhHans' @change="handleChange" />
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
            <a-radio-button :value="1">后端</a-radio-button>
            <a-radio-button :value="2">前端</a-radio-button>
            <a-radio-button :value="3">服务器</a-radio-button>
            <a-radio-button :value="4">数据库</a-radio-button>
            <a-radio-button :value="5">开发工具</a-radio-button>
            <a-radio-button :value="6">面试题</a-radio-button>
            <a-radio-button :value="7">阅读</a-radio-button>
            <a-radio-button :value="8">成长之路</a-radio-button>
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

<script>
import { defineComponent  } from 'vue'

const token = localStorage.getItem('BLOG_USER_TOKEN')

export default defineComponent({
  beforeRouteEnter(to, from, next) {
    if (token) {
       next();
    }
    next("/");
   }

})
</script>

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
import $api from '@/api'
import {message} from "ant-design-vue";
import {useStore} from "vuex";
import moment from "moment";

const router = useRouter();
const store = useStore();

const userInfo = store.state.app.userInfo;

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
// md编辑内容
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
  { label: 'Java', value: '1' },
  { label: 'Python', value: '2' },
  { label: 'C', value: '3' },
  { label: 'Go', value: '4' },
  { label: 'C++', value: '5' },
  { label: 'C#', value: '6' },
  { label: 'HTML', value: '7' },
  { label: 'Css', value: '8' },
  { label: 'JavaScript', value: '9' },
  { label: 'Vue', value: '10' },
  { label: 'React', value: '11' },
  { label: 'Node', value: '12' },
  { label: 'Webpack', value: '13' },
  { label: 'Linux', value: '14' },
  { label: 'Nginx', value: '15' },
  { label: 'Apache', value: '16' },
  { label: 'Tomcat', value: '17' },
  { label: 'MySQL', value: '18' },
  { label: 'MongoDB', value: '19' },
  { label: 'Redis', value: '20' },
  { label: 'Oracle', value: '21' },
  { label: 'SQL Server', value: '22' },
  { label: 'Git', value: '23' },
  { label: 'SVN', value: '24' }
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
// md 图片上传
const uploadImages = async  (files) => {
  const res = await upload(files)
  return [
    {
      title: files.map((i) => i.name),
      // url: 'http'
      url: `http://106.15.186.163${res}`
    },
  ];
}
const upload = async (files) => {
  let formData = new FormData();
  formData.append('file', files[0])
  const res = await $api.uploadArcImg(formData)
  if (res.code !== 200) return message.error(res.msg)
  return res.data
}
// 关闭侧面弹框
const onclose = () => {
  form.value.clearValidate()
  visible.value = false
}
// 提交发布文章表单
const submit = async () => {
  const params = {
    headline: title.value,
    type: formState.classify,
    label: formState.tag + '',
    digest: formState.abstract,
    content: content.value
  }
  const res = await $api.uploadArticle(params)
  if (res.code !== 200) return message.error(res.msg)
  onclose()
  message.success('发布成功')
  await router.push({
    name: `posts`,
    params: {
      id: formState.tag[0],
      arcAuthor: userInfo.username,
      arcBrief: formState.abstract,
      arcComment: 0,
      arcHeadline: title.value,
      arcLike: 0,
      arcView: 0,
      date: moment().format('YYYY-MM-DD'),
      arcType: formState.classify,
      labels: formState.tag + ''
    }
  })
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
