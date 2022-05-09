<template>
  <div class="detail">
    <div class="detailLeft">
      <div class="contentBox">
        <div class="title">Git 各指令的本质，真是通俗易懂啊</div>
        <div class="author">
          <div class="avatar">
            <img src="http://106.15.186.163/user/headImg/9/headShot.jpg" alt="avatar" />
          </div>
          <div class="author-info">
            <div class="author-name">
              <a href="javascript:;" class="username"><span class="name">徐帅</span></a>
            </div>
            <div class="meta-box">
              <span class="time">2022-05-09</span>
              <span class="views-count"> ·&nbsp;&nbsp;阅读1254</span>
            </div>
          </div>
        </div>
        <div class="content">
          <h3> 1.1 Git的优势</h3>
          <h4>Git是一个分布式代码管理工具，在讨论分布式之前避免不了提及一下什么是中央式代码管理仓库</h4>
          <p>中央式：所有的代码保存在中央服务器，所以提交必须依赖网络，并且每次提交都会带入到中央仓库，如果是协同开发可能频繁触发代码合并，进而增加提交的成本和代价。最典型的就是svn</p>
          <p>分布式：可以在本地提交，不需要依赖网络，并且会将每次提交自动备份到本地。每个开发者都可以把远程仓库clone一份到本地，并会把提交历史一并拿过来。代表就是Git</p>
          <h4> 那Git相比于svn有什么优势呢？</h4>
          <h4>打个比方："巴拉巴拉写了一大堆代码，突然发现写的有问题，我想回到一个小时之前"，对于这种情况Git的优势就很明显了，因为commit的成本比较小并且本地会保存所有的提交记录，随时随刻可以进行回退。</h4>
          <h4>在这并不是说svn的不能完成这种操作，只是Git的回退会显得更加的优雅。Git相比于中央式工具还有很多优点，就不一一列举了，感兴趣的可自行了解。</h4>
          <h3>1.2 文件状态</h3>
          <h4>在Git中文件大概分为三种状态：已修改（modified）、已暂存（staged）、已提交（committed）</h4>
          <p>修改：Git可以感知到工作目录中哪些文件被修改了，然后把修改的文件加入到modified区域</p>
          <p>暂存：通过add命令将工作目录中修改的文件提交到暂存区，等候被commit</p>
          <p>提交：将暂存区文件commit至Git目录中永久保存</p>
          <h3>1.3 commit节点</h3>
          <h4>为了便于表述，本篇文章我会通过节点代称commit提交</h4>
          <h3>1.4 HEAD</h3>
          <h4>HEAD是Git中非常重要的一个概念，你可以称它为指针或者引用，它可以指向任意一个节点，并且指向的节点始终为当前工作目录，换句话说就是当前工作目录(也就是你所看到的代码)就是HEAD指向的节点。</h4>
          <h4>同时HEAD也可以指向一个分支，间接指向分支所指向的节点。</h4>

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
import {ref} from "vue";

// 点赞数量
const likeCount = ref(200)
const like = ref(null)
// 点赞状态
const likeStatus = ref(true)
// 点赞
const giveLike = () => {
  if (likeStatus.value) {
    likeStatus.value = false
    likeCount.value++
    like.value.classList.add('active')
  } else {
    likeStatus.value = true
    likeCount.value--
    like.value.classList.remove('active')
  }
}

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
      background: rgba(255, 255, 255, .5);
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
      background: rgba(255, 255, 255, .5);
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
