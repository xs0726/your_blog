<template>
  <div class="nav">
    <div class="container">
      <ul>
        <!--        <li><router-link to="/">首页</router-link></li>-->
        <li class="fsc" v-for="(nav, index) in navList" :key="index">
          <router-link :to="nav.id ? `/home/posts/${nav.id}` : `/home/${nav.path}`">{{ nav.name }}</router-link>
<!--          <div v-if="nav.children.length" class="layer">-->
<!--            <ul >-->
<!--              <li v-for="(sub, index) in nav.children" :key="index" @click="goPosts(sub)">-->
<!--                {{ sub.name }}-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import {forEach, includes} from "lodash";
import {onMounted, ref} from "vue";
const route = useRoute();
const router = useRouter();
const navList = [
  {
    name: "首 页",
    path: "home",
    children: [],
  },
  {
    name: "后 端",
    path: "",
    id: 1,
    children: [
      {
        name: "Java",
        id: "1",
      },
      {
        name: "Python",
        id: "2",
      },
      {
        name: "C",
        id: "3",
      },
      {
        name: "Go",
        id: "4",
      },
      {
        name: "C++",
        id: "5",
      },
      {
        name: "C#",
        id: "6",
      }
    ],
  },
  {
    name: "前 端",
    path: "",
    id: 2,
    children: [
      {
        name: "HTML",
        id: '7'
      },
      {
        name: "Css",
        id: '8'
      },
      {
        name: "JavaScript",
        id: '9'
      },
      {
        name: "Vue",
        id: '10'
      },
      {
        name: "React",
        id: '11'
      },
      {
        name: "Node",
        id: '12'
      },
      {
        name: "Webpack",
        id: '13'
      }
    ],
  },
  {
    name: "服务器",
    path: "",
    id: 3,
    children: [
      {
        name: "Linux",
        id: '14'
      },
      {
        name: "Nginx",
        id: '15'
      },
      {
        name: "Apache",
        id: '16'
      },
      {
        name: "Tomcat",
        id: '17'
      }
    ],
  },
  {
    name: "数据库",
    path: "",
    id: 4,
    children: [
      {
        name: "MySQL",
        id: '18'
      },
      {
        name: "MongoDB",
        id: '19'
      },
      {
        name: "Redis",
        id: '20'
      },
      {
        name: "Oracle",
        id: '21'
      },
      {
        name: "SQL Server",
        id: '22'
      }
    ],
  },
  {
    name: "开发工具",
    path: "",
    id: 5,
    children: [
      {
        name: "Git",
        id: '23'
      },
      {
        name: "SVN",
        id: '24'
      },
      {
        name: "Sublime",
        id: '25'
      },
      {
        name: "VsCode",
        id: '26'
      },
      {
        name: "Eclipse",
        id: '27'
      },
      {
        name: "PhpStorm",
        id: '28'
      },
      {
        name: "PyCharm",
        id: '29'
      },
      {
        name: "WebStorm",
        id: '30'
      },
      {
        name: "IntelliJ",
        id: '31'
      }
    ],
  }
  // {
  //   name: "面试题",
  //   path: "",
  //   id: 6,
  //   children: []
  // }
  // {
  //   name: "阅 读",
  //   path: "",
  //   children: []
  // },
  // {
  //   name: "成长之路",
  //   path: "",
  //   children: []
  // }
];

const goPosts = (item) => {
  router.push({ name: 'posts', params: { id: item.id } })
}

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
        margin: 0 10px;
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
