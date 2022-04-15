<template>
  <div class="homeIndex">
    <div class="container">
      <div class="first">
        <div class="banner">
          <Banner />
        </div>
      </div>
      <div class="recommend">
        <a-card style="width: 860px;margin-right: 10px">
          <div slot="title">
            <TabList />
          </div>
        </a-card>
        <div class="leftCard">
          <About />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Banner from '../../components/Home/Banner'
import TabList from '../../components/Home/TabList'
import About from '../../components/Home/About'
import { EyeOutlined, FieldTimeOutlined } from '@ant-design/icons-vue'
import router from '../../router'
</script>

<style lang="scss" scoped>
.homeIndex {
  height: 100%;
  //background: rgba(160, 160, 160, 0.233);
  padding-top: 20px;
  box-sizing: border-box;
  .first {
    display: flex;
    .banner {
      width: 100%;
      height: 350px;
      background-color: #fff;
      margin-bottom: 10px;
    }
    .guide {
      width: 520px;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 250px;
          height: 125px;
          cursor: pointer;
          margin: 0 0 10px 10px;
          .guideImg {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .recommend {
    width: 100%;
    display: flex;
    background: #000;
  }
}
</style>
