<template>
  <div class="homeIndex">
    <div class="container">
      <div class="first">
        <div class="banner">
          <Banner />
        </div>
<!--#region-->
<!--        <div class="guide">-->
<!--          <ul>-->
<!--            <li>-->
<!--              <img class="guideImg" src="@/assets/guide/guide_1.jpeg" alt />-->
<!--            </li>-->
<!--            <li>-->
<!--              <img class="guideImg" src="@/assets/guide/guide_2.jpeg" alt />-->
<!--            </li>-->
<!--            <li>-->
<!--              <img class="guideImg" src="@/assets/guide/guide_3.jpeg" alt />-->
<!--            </li>-->
<!--            <li>-->
<!--              <img-->
<!--                @click="router.push('/home/detail')"-->
<!--                class="guideImg"-->
<!--                src="@/assets/guide/guide_4.jpeg"-->
<!--                alt-->
<!--              />-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--#endregion-->
      </div>
      <div class="recommend">
        <a-card style="width: 860px;margin-right: 10px">
<!--#region-->
<!--          <a-card-grid class="recommendCardGrid">-->
<!--            <img-->
<!--              style="width: 170px;height: 130px"-->
<!--              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"-->
<!--              alt-->
<!--            />-->
<!--            <div class="tag">-->
<!--              <a-tag color="pink">前端</a-tag>-->
<!--              <a-tag color="red">JavaScript</a-tag>-->
<!--              <a-tag color="orange">vue</a-tag>-->
<!--              <a-tag color="orange">vue</a-tag>-->
<!--              <a-tag color="orange">vue</a-tag>-->
<!--              <a-tag color="orange">vue</a-tag>-->
<!--            </div>-->
<!--            <div-->
<!--              class="title"-->
<!--            >watch和computed的区别watch和computed的区别watch和computed的区别watch和computed的区别watch和computed的区别</div>-->
<!--            <div class="browse">-->
<!--              <div class="time">-->
<!--                <span>-->
<!--                  <field-time-outlined />-->
<!--                </span>-->
<!--                <span>2022-02-18</span>-->
<!--              </div>-->
<!--              <div class="browseBox">-->
<!--                <span>-->
<!--                  <eye-outlined />-->
<!--                </span>-->
<!--                <span class="browseCount">60 浏览量</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </a-card-grid>-->
<!--          <a-card-grid class="recommendCardGrid">Content</a-card-grid>-->
<!--          <a-card-grid class="recommendCardGrid">Content</a-card-grid>-->
<!--          <a-card-grid class="recommendCardGrid">Content</a-card-grid>-->
<!--          <a-card-grid class="recommendCardGrid">Content</a-card-grid>-->
<!--          <a-card-grid class="recommendCardGrid">Content</a-card-grid>-->
<!--          <a-card-grid class="recommendCardGrid">Content</a-card-grid>-->
<!--          <a-card-grid class="recommendCardGrid">Content</a-card-grid>-->
<!--endregion-->
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
    .content {
      min-height: 400px;
      height: auto;
      width: 800px;
      margin-bottom: 40px;
      .tabBox {
        padding: 20px;
        border-radius: 6px;
        background: #fff;
        .tabLi {
          .tab-item {
            padding: 6px 20px;
            background: rgb(238, 238, 238);
            margin-right: 4px;
            border-radius: 4px;
            color: #666;
            cursor: pointer;
          }
          .tab-active {
            background: #5b99fd;
            color: #222;
          }
        }
        .tab-content {
          margin-top: 8px;
          min-height: 120px;
          height: auto;
          border: 2px solid #2378ff;
          font-size: 0;
          .textarea {
            border: 0;
            width: 100%;
            padding: 10px;
            font-size: 14px;
            height: 100%;
          }
        }
      }
      .sx {
        padding: 20px;
        border-radius: 6px;
        background: #fff;
        margin: 10px 0;
        .sx-item {
          padding: 4px 14px;
          border-radius: 6px;
          font-size: 14px;
          background: #eee;
          cursor: pointer;
          margin-right: 4px;
        }
        .sx-active {
          background: #77abff;
          color: #fff;
        }
      }
      .container {
        padding: 20px;
        border-radius: 6px;
        background: #fff;
        .zx{
          background: rgb(213, 213, 213);
          padding: 4px 10px;
          margin-bottom: 6px;
          border-radius: 4px;
        }
      }
    }
    .rankin {
      flex: 1;
      margin-left: 10px;
      box-sizing: border-box;
      position: sticky;
      top: 60px;
      height: 500px;
      .slj {
        border-radius: 10px;
        height: 120px;
        background: rgb(255, 255, 255);

        .sljBtn {
          background: #2378ff;
          color: #fff;
          border-radius: 4px;
          font-size: 16px;
          text-align: center;
          width: 80%;
          margin: auto;
          padding: 8px 0;
        }
      }
      .more {
        background: rgb(255, 255, 255);
        border-radius: 10px;
        padding: 20px;
        margin-top: 16px;
        height: 300px;
        .more-title {
          font-weight: bold;
          font-size: 18px;
        }
        .more-img {
          height: 200px;
          margin-top: 10px;
          background: rgb(165, 165, 165);
        }
      }
    }
  }
}
</style>
