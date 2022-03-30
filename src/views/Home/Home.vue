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
              <img class="guideImg" src="@/assets/guide/guide_1.jpeg" alt />
            </li>
            <li>
              <img class="guideImg" src="@/assets/guide/guide_2.jpeg" alt />
            </li>
            <li>
              <img class="guideImg" src="@/assets/guide/guide_3.jpeg" alt />
            </li>
            <li>
              <img
                @click="router.push('/home/detail')"
                class="guideImg"
                src="@/assets/guide/guide_4.jpeg"
                alt
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="recommend">
        <div class="content">
          <div class="tabBox">
            <div class="tabLi flex">
              <div class="tab-item tab-active">上传文章</div>
              <div class="tab-item">筛选文章</div>
              <div class="tab-item">更多</div>
            </div>
            <div class="tab-content">
              <textarea class="textarea" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div class="sx flex">
            <div class="sx-item sx-active">推荐</div>
            <div class="sx-item">最新</div>
            <div class="sx-item">好问题</div>
          </div>
          <div class="container">
            <div class="zx">1q</div>
            <div class="zx">2q</div>
            <div class="zx">3q</div>
            <div class="zx">4q</div>
            <div class="zx">5q</div>
            <div class="zx">6q</div>
            <div class="zx">7q</div>
            <div class="zx">8q</div>
            <div class="zx">9q</div>
            <div class="zx">10q</div>
            <div class="zx">11q</div>
            <div class="zx">12q</div>
            <div class="zx">13q</div>
            <div class="zx">14q</div>
            <div class="zx">15q</div>
            <div class="zx">16q</div>
            <div class="zx">17q</div>
            <div class="zx">18q</div>
            <div class="zx">19q</div>
            <div class="zx">20q</div>
            <div class="zx">21q</div>
            <div class="zx">22q</div>
            <div class="zx">23q</div>
            <div class="zx">24q</div>
            <div class="zx">25q</div>
            <div class="zx">26q</div>
            <div class="zx">27q</div>
            <div class="zx">28q</div>
            <div class="zx">29q</div>
            <div class="zx">30q</div>
            <div class="zx">31q</div>
            <div class="zx">32q</div>
            <div class="zx">33q</div>
            <div class="zx">34q</div>
            <div class="zx">35q</div>
            <div class="zx">36q</div>
            <div class="zx">37q</div>
            <div class="zx">38q</div>
            <div class="zx">39q</div>
            <div class="zx">40q</div>
            <div class="zx">41q</div>
            <div class="zx">42q</div>
            <div class="zx">43q</div>
            <div class="zx">44q</div>
            <div class="zx">45q</div>
            <div class="zx">46q</div>
            <div class="zx">47q</div>
            <div class="zx">48q</div>
            <div class="zx">49q</div>
            <div class="zx">50q</div>
            <div class="zx">51q</div>
            <div class="zx">52q</div>
            <div class="zx">53q</div>
            <div class="zx">54q</div>
            <div class="zx">55q</div>
            <div class="zx">56q</div>
            <div class="zx">57q</div>
            <div class="zx">58q</div>
            <div class="zx">59q</div>
            <div class="zx">60q</div>
            <div class="zx">61q</div>
            <div class="zx">62q</div>
            <div class="zx">63q</div>
            <div class="zx">64q</div>
            <div class="zx">65q</div>
            <div class="zx">66q</div>
            <div class="zx">67q</div>
            <div class="zx">68q</div>
            <div class="zx">69q</div>
            <div class="zx">70q</div>
            <div class="zx">71q</div>
            <div class="zx">72q</div>
            <div class="zx">73q</div>
            <div class="zx">74q</div>
            <div class="zx">75q</div>
            <div class="zx">76q</div>
            <div class="zx">77q</div>
            <div class="zx">78q</div>
            <div class="zx">79q</div>
            <div class="zx">80q</div>
            <div class="zx">81q</div>
            <div class="zx">82q</div>
            <div class="zx">83q</div>
            <div class="zx">84q</div>
            <div class="zx">85q</div>
            <div class="zx">86q</div>
            <div class="zx">87q</div>
            <div class="zx">88q</div>
            <div class="zx">89q</div>
            <div class="zx">90q</div>
            <div class="zx">91q</div>
            <div class="zx">92q</div>
            <div class="zx">93q</div>
            <div class="zx">94q</div>
            <div class="zx">95q</div>
            <div class="zx">96q</div>
            <div class="zx">97q</div>
            <div class="zx">98q</div>
            <div class="zx">99q</div>
            <div class="zx">100q</div>
          </div>
        </div>
        <div class="rankin">
          <div class="slj fsc">
            <div class="sljBtn">说两句</div>
          </div>
          <div class="more">
            <div class="more-title">团队博客</div>
            <img
              class="more-img"
              src="https://txc.gtimg.com/static/our_story.bf124904.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Banner from "../../components/Home/Banner";
import { EyeOutlined, FieldTimeOutlined } from "@ant-design/icons-vue";
import router from "../../router";
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
