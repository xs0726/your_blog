<template>
  <div class="home">
    <Top />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Top from '@/components/Home/Top'
import {loginByGithub, loginByQQ} from '../../api/home'
import { message } from 'ant-design-vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import watermark from 'watermark-dom'
import router from "../../router";
const store = useStore()
const route = useRoute()
const init = async () => {
  if (route.query.code) {
    switch (localStorage.getItem('loginType')) {
      case 'qq':
        // qq
        const {code,data} = await loginByQQ(route.query.code).catch(err=>{
          return message.error('登录失败')
        })
        if (code === 200) {
          store.commit('app/setToken', data.token)
          store.commit('app/setUserInfo', data.user)
          router.go(0)
        }
      break;
      case 'wx':
        // todo
      break;
      case 'github':
        // github
        const res = await loginByGithub(route.query.code).catch((err) => {
          return message.error('登录失败')
        })
        if (res.code === 200) {
          store.commit('app/setToken', res.data.token)
          store.commit('app/setUserInfo', res.data.user)
          router.go(0)
        }
      break;
    }
  }
  watermark.init({
    watermark_id: 'wm_div_id',          //水印总体的id
    watermark_prefix: 'mask_div_id',    //小水印的id前缀
    watermark_txt:"BLOG",               //水印的内容
    watermark_x:20,                     //水印起始位置x轴坐标
    watermark_y:20,                     //水印起始位置Y轴坐标
    watermark_rows:0,                   //水印行数
    watermark_cols:0,                   //水印列数
    watermark_x_space:100,              //水印x轴间隔
    watermark_y_space:50,               //水印y轴间隔
    watermark_font:'微软雅黑',            //水印字体
    watermark_color:'black',            //水印字体颜色
    watermark_fontsize:'18px',          //水印字体大小
    watermark_alpha:0.15,               //水印透明度，要求设置在大于等于0.005
    watermark_width:100,                //水印宽度
    watermark_height:100,               //水印长度
    watermark_angle:15,                 //水印倾斜度数
    watermark_parent_width:0,           //水印的总体宽度（默认值：body的scrollWidth和clientWidth的较大值）
    watermark_parent_height:0,          //水印的总体高度（默认值：body的scrollHeight和clientHeight的较大值）
    watermark_parent_node:null          //水印插件挂载的父元素element,不输入则默认挂在body上
  })
}
init()
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #ccc;
  //background: url('../../../src/assets/home_bg1.png');
  background-size: 100% 100%;
  background-clip: content-box;
  .content {
    width: 1142px;
    margin: 0 auto;
  }
}
</style>
