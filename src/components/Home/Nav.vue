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
    name: "首 页",
    path: "home",
    children: [],
  },
  {
    name: "后 端",
    path: "",
    children: [
      {
        name: "Java",
        path: "",
      },
      {
        name: "Python",
        path: "",
      },
      {
        name: "C",
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
      }
    ],
  },
  {
    name: "前 端",
    path: "",
    children: [
      {
        name: "HTML",
      },
      {
        name: "Css",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Vue",
      },
      {
        name: "React",
      },
      {
        name: "Node",
      },
      {
        name: "Webpack",
      }
    ],
  },
  {
    name: "服务器",
    path: "",
    children: [
      {
        name: "Linux",
      },
      {
        name: "Nginx",
      },
      {
        name: "Apache",
      },
      {
        name: "Tomcat",
      }
    ],
  },
  {
    name: "数据库",
    path: "",
    children: [
      {
        name: "MySQL",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Redis",
      },
      {
        name: "Oracle",
      },
      {
        name: "SQL Server",
      }
    ],
  },
  {
    name: "开发工具",
    path: "",
    children: [
      {
        name: "Git",
      },
      {
        name: "SVN",
      },
      {
        name: "Sublime",
      },
      {
        name: "VsCode",
      },
      {
        name: "Eclipse",
      },
      {
        name: "PhpStorm",
      },
      {
        name: "PyCharm",
      },
      {
        name: "WebStorm",
      },
      {
        name: "IntelliJ",
      }
    ],
  },
  {
    name: "面试题",
    path: "",
    children: []
  },
  {
    name: "阅 读",
    path: "",
    children: []
  },
  {
    name: "成长之路",
    path: "",
    children: []
  }
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
          width: 50%;
          background-color: #fff;
          margin: 0 auto;
          position: fixed;
          left: 180px;
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
