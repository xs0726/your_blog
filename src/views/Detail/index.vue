<template>
  <div class="detail">
    <div class="detailLeft">
      <div class="contentBox">
        <div class="title">{{ title }}</div>
        <div class="author">
          <div class="avatar">
            <img src="http://106.15.186.163/user/headImg/9/headShot.jpg" alt="avatar" />
          </div>
          <div class="author-info">
            <div class="author-name">
              <a href="javascript:;" class="username"><span class="name">{{ author }}</span></a>
            </div>
            <div class="meta-box">
              <span class="time">{{ date }}</span>
              <span class="views-count"> ·&nbsp;&nbsp;阅读{{ view }}</span>
            </div>
          </div>
        </div>
        <div class="content">
          <Viewer v-model:value="content" :plugins="plugins" />
        </div>
        <div class="operation">
          <div ref="like" :badge="likeCount" class="panel-btn like" @click="giveLike"><like-filled /></div>
          <a href="#comment" class="panel-btn"><comment-outlined /></a>
        </div>
      </div>
      <div class="comment" id="comment">
        <div class="header">发表评论</div>
        <div class="sendComment">
          <div class="avatar-box">
            <img src="http://106.15.186.163/user/headImg/9/headShot.jpg" alt="avatar" />
          </div>
          <div class="form-box">
            <div class="auth-card">
              <a-textarea
                v-model:value="commentValue"
                placeholder="输入评论（Enter换行，Ctrl + Enter发送）"
                auto-size
              />
            </div>
            <div class="action-box">
              <div class="submit">
                <span>Ctrl + Enter</span>
                <a-button type="primary">发表评论</a-button>
              </div>
            </div>
          </div>
        </div>
        <div class="title">用户评论</div>
        <div class="commentList">
          <a-comment>
            <template #actions>
              <span key="comment-nested-reply-to">回复</span>
            </template>
            <template #author>
              <a>Han Solo</a>
            </template>
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
            </template>
            <template #content>
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure).
              </p>
            </template>
            <a-comment>
              <template #actions>
                <span key="comment-nested-reply-to">回复</span>
              </template>
              <template #author>
                <a>Han Solo</a>
              </template>
              <template #avatar>
                <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
              </template>
              <template #content>
                <p>
                  We supply a series of design principles, practical patterns and high quality design
                  resources (Sketch and Axure).
                </p>
              </template>
            </a-comment>
            <a-comment>
              <template #actions>
                <span key="comment-nested-reply-to">回复</span>
              </template>
              <template #author>
                <a>Han Solo 回复 Han Solo</a>
              </template>
              <template #avatar>
                <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
              </template>
              <template #content>
                <p>
                  We supply a series of design principles, practical patterns and high quality design
                  resources (Sketch and Axure).
                </p>
              </template>
            </a-comment>
            <a-comment>
              <template #actions>
                <span key="comment-nested-reply-to">回复</span>
              </template>
              <template #author>
                <a>Han Solo</a>
              </template>
              <template #avatar>
                <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
              </template>
              <template #content>
                <p>
                  We supply a series of design principles, practical patterns and high quality design
                  resources (Sketch and Axure).
                </p>
              </template>
            </a-comment>
          </a-comment>
        </div>
      </div>
    </div>
    <div class="detailRight">456</div>
  </div>
</template>

<script setup>
import { CommentOutlined, FieldTimeOutlined, LikeFilled } from '@ant-design/icons-vue'
import {Viewer} from '@bytemd/vue-next'
import {onUnmounted, reactive, ref} from "vue";
import $api from "@/api";
import { useRoute } from "vue-router";
import {useLikeArcList, useViewArc} from "../../Hooks/article/useLikeArc";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight-ssr";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import gemoji from "@bytemd/plugin-gemoji";
import math from "@bytemd/plugin-math";
import mermaid from "@bytemd/plugin-mermaid";
import {includes} from "lodash";

const plugins = [
  gfm(),
  highlight(),
  mediumZoom(),
  gemoji(),
  math(),
  mermaid()
]

const route = useRoute();
// 点赞数量
const likeCount = ref(0)
// ref
const like = ref(null)
// 点赞状态
const likeStatus = ref(true)
// 点赞
const giveLike = async () => {
  if (likeStatus.value) {
    likeStatus.value = false
    likeCount.value++
    like.value.classList.add('active')
  } else {
    likeStatus.value = true
    likeCount.value--
    like.value.classList.remove('active')
  }
  const res = await $api.articlePraise({arcId: route.query.arcId})
  if (res.code !== 200) return false
}

// 当前文章当前用户是否点赞过
const isLike = async () => {
  const res = await $api.getArtLiked()
  if (includes(res.data, route.query.arcId)) {
    like.value.classList.add('active')
    likeStatus.value = false
  }
}
isLike()

// 浏览量 5s +1
const viewChangeTime = setTimeout(() => {
  useViewArc(route.query.arcId)
}, 5000)


// 关闭页面取消定时器
onUnmounted(() => {
  clearTimeout(viewChangeTime)
})

const content = ref('')
const view = ref('')
const date = ref('')
const author = ref('')
const title = ref('')
// 获取文章详情
const getArticleDetail = async () => {
  const res = await $api.getArticleDetail(route.query.arcId)
  if (res.code !== 200) return
  likeCount.value = res.data.arcLike
  content.value = res.data.arcContent
  view.value = res.data.arcView
  date.value = res.data.date
  author.value = res.data.arcAuthor
  title.value = res.data.arcHeadline
}
getArticleDetail()

// 评论内容
const commentValue = ref('')

</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  margin-top: 20px;
  //padding: 20px;
  //color: #fffb8f;
  .detailLeft {
    width: 75%;
    height: 100%;
    //background: #fff;
    .contentBox {
      padding: 20px;
      border-radius: 5px;
      background: rgba(255, 255, 255, 1);
      .title {
        font-size: 22px;
        text-align: center;
        //color: white;
      }
      .author {
        display: flex;
        align-items: center;
        .avatar {
          width: 50px;
          height: 50px;
          margin-right: 20px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .author-info {
          .author-name {
            display: inline-block;
            width: 100%;
            font-weight: 500;
            color: #515767;
            .name {
              display: inline-block;
              vertical-align: top;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .meta-box {
            //color: #8a919f;
            margin-top: 2px;
            line-height: 22px;
          }
        }
      }
      .content {
        margin-top: 20px;
        p {
          margin: 10px 0;
          text-indent: 2em;
        }
        h3 {
          font-weight: 600;
        }
        h4 {
          margin: 10px 0;
        }
      }
      .operation {
        position: fixed;
        top: 150px;
        left: 80px;
        .panel-btn {
          position: relative;
          display: block;
          width: 50px;
          height: 50px;
          background-color: #fff;
          background-position: 50%;
          background-repeat: no-repeat;
          border-radius: 50%;
          box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%);
          cursor: pointer;
          text-align: center;
          line-height: 50px;
          color: #515767;
          margin: 10px 0;
          font-size: 20px;
        }
        .active {
          color: #3d60e5;
        }
        .like::after {
          content: attr(badge);
          position: absolute;
          top: 0;
          left: 75%;
          height: 17px;
          line-height: 17px;
          padding: 0 5px;
          border-radius: 9px;
          font-size: 11px;
          text-align: center;
          white-space: nowrap;
          background-color: #c2c8d1;
          color: #fff;
        }
      }
    }
    .comment {
      padding: 20px;
      border-radius: 5px;
      margin-top: 20px;
      background: rgba(255, 255, 255, 1);
      .header, .title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .sendComment {
        display: flex;
        .avatar-box {
          width: 50px;
          height: 50px;
          margin-right: 20px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .form-box {
          width: 100%;
          .auth-card {
            .ant-input {
              height: 70px !important;
            }
          }
        }
        .action-box {
          margin-top: 10px;
          .submit {
            display: flex;
            justify-content: flex-end;
            span {
              font-size: 14px;
              line-height: 32px;
              letter-spacing: .2px;
              //color: #86909c;
              margin-right: 16px;
            }
          }
        }
      }
    }
  }
  .detailRight {
    width: calc(25% - 10px);
    height: 100%;
    margin-left: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, .5);
    border-radius: 5px;
  }
}
</style>
