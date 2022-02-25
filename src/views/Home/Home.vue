<template>
  <div class="homeIndex">
    <div class="container">
     <div class="first">
       <div class="banner">
         <Banner />
       </div>
       <div class="guide">
         <ul>
           <li>
             <img class="guideImg" src="@/assets/guide/guide_1.jpeg" alt="">
           </li>
           <li>
             <img class="guideImg" src="@/assets/guide/guide_2.jpeg" alt="">
           </li>
           <li>
             <img class="guideImg" src="@/assets/guide/guide_3.jpeg" alt="">
           </li>
           <li>
             <img @click="router.push('/home/detail')" class="guideImg" src="@/assets/guide/guide_4.jpeg" alt="">
           </li>
         </ul>
       </div>
     </div>
      <div class="recommend">
        <a-card title="推荐" style="width: 860px;margin-right: 10px">
          <a-card-grid class="recommendCardGrid">
            <img style="width: 170px;height: 130px" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="">
            <div class="tag">
              <a-tag color="pink">前端</a-tag>
              <a-tag color="red">JavaScript</a-tag>
              <a-tag color="orange">vue</a-tag>
              <a-tag color="orange">vue</a-tag>
              <a-tag color="orange">vue</a-tag>
              <a-tag color="orange">vue</a-tag>
            </div>
            <div class="title">watch和computed的区别watch和computed的区别watch和computed的区别watch和computed的区别watch和computed的区别</div>
            <div class="browse">
              <div class="time">
                <span><field-time-outlined /></span>
                <span>2022-02-18</span>
              </div>
              <div class="browseBox">
                <span><eye-outlined /></span>
                <span class="browseCount">60 浏览量</span>
              </div>
            </div>
          </a-card-grid>
          <a-card-grid class="recommendCardGrid">Content</a-card-grid>
          <a-card-grid class="recommendCardGrid">Content</a-card-grid>
          <a-card-grid class="recommendCardGrid">Content</a-card-grid>
          <a-card-grid class="recommendCardGrid">Content</a-card-grid>
          <a-card-grid class="recommendCardGrid">Content</a-card-grid>
          <a-card-grid class="recommendCardGrid">Content</a-card-grid>
          <a-card-grid class="recommendCardGrid">Content</a-card-grid>
        </a-card>
        <div class="rankin">
          <a-card title="排行" :bordered="false" style="width: 250px">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Banner from "../../components/Home/Banner";
import { EyeOutlined, FieldTimeOutlined } from '@ant-design/icons-vue';
import router from '../../router';
</script>

<style lang="scss" scoped>
.homeIndex {
  margin-top: 20px;
  .first {
    display: flex;
    .banner {
      width: 600px;
      height: 260px;
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
    display: flex;
    .recommendCardGrid {
      width: 25%;
      height: 300px;
      text-align: center;
      .tag {
        height: 48px;
        margin: 10px 0;
        overflow: hidden;
      }
      .title {
        height: 45px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        display: -webkit-box;
      }
      .browse {
        display: flex;
        text-align: right;
        font-size: 12px;
        justify-content: space-between;
        color: #7f8085;
        margin-top: 5px;
        .browseCount {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
