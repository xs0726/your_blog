<template>
  <div class="nav">
    <div class="container">
      <ul>
        <!--        <li><router-link to="/">首页</router-link></li>-->
        <li class="fsc" v-for="(nav, index) in navList" :key="index">
          <router-link :to="`/home/${nav.path}`">{{ nav.name }}</router-link>
          <div v-if="nav.children.length" class="layer">
            <ul >
              <li v-for="(sub, index) in nav.children" :key="index">
                {{ sub.name }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import router from "../../router";
import { useRoute } from "vue-router";
const route = useRoute();
const navList = [
  {
    name: "首页",
    path: "home",
    children: [],
  },
  {
    name: "编程",
    path: "",
    children: [
      {
        name: "Java",
        path: "",
      },
      {
        name: "python",
        path: "",
      },
      {
        name: "C语言",
        path: "",
      },
      {
        name: "Go",
        path: "",
      },
      {
        name: "C++",
        path: "",
      },
      {
        name: "C#",
        path: "",
      },
      {
        name: "JavaScript",
        path: "",
      },
      {
        name: "Vue",
        path: "",
      },
      {
        name: "React",
        path: "",
      },
    ],
  },
  {
    name: "资讯",
    path: "",
    children: [
      {
        name: "新闻",
      },
      {
        name: "体育",
      },
    ],
  },
  {
    name: "留言板",
    path: "",
    children: [],
  },
  {
    name: "关于",
    path: "about",
    children: [],
  },
];
</script>

<style lang="scss" scoped>
.nav {
  height: 50px;
  margin-left: 15px;
  .container {
    height: 50px;
    >ul {
      height: 50px;
      display: flex;
      >li {
        width: 60px;
        font-weight: 800;
        font-size: 14px;
        height: 100%;
        cursor: pointer;
        a {
          color: #000;
          &:hover {
            color: #2169f5;
          }
          &.router-link-exact-active {
            color: #2169f5;
          }
        }
        .layer {
          width: 100%;
          background-color: #fff;
          margin: 0 auto;
          position: fixed;
          left: 0;
          top: 50px;
          height: 0;
          overflow: hidden;
          opacity: 0;
          box-shadow: 0 0 5px #ccc;
          transition: all 0.2s 0.1s;
          >ul {
            display: flex;
            flex-wrap: wrap;
            padding: 0 50px;
            align-items: center;
            height: 100px;
            li {
              width: 100px;
              text-align: center;
              font-weight: 600;
              &:hover {
                color: #2169f5;
              }
            }
          }
        }
        &:hover .layer {
          height: 120px;
          opacity: 1;
        }
      }
    }
    li:hover {
      background: #f0f0f5;
    }

    .active {
      background: #f5f5ff;
      position: relative;
    }
    .active::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 2px;
      background: #517df8;
      animation: op 0.3s linear alternate;
    }
  }
}
@keyframes op {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    background: #e9e9f8;
  }
}
</style>
