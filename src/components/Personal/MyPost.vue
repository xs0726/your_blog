<template>
  <div class="myPost">
      <template v-if="data.length > 0">
        <div class="entry" v-for="(item) in data" :key="item.arcId">
          <div class="meta-container">
            <div class="author">{{item.arcAuthor}}</div>
            <div class="date">{{item.date}}</div>
            <!--            <div class="label">架构</div>-->
            <div class="tag_list" v-for="l in item.tags" :key="l">
              <div class="tag">{{l}}</div>
            </div>
          </div>
          <div class="content-wrapper">
            <div class="title-row">
              <div class="title" :title="item.arcHeadline">{{item.arcHeadline}}</div>
            </div>
            <div class="abstract">{{item.arcDigest}}</div>
            <ul class="action-list">
              <li class="item view">
                <eye-outlined />
                <span>{{item.arcView}}</span>
              </li>
              <li class="item like">
                <like-filled style="color: #3d60e5" v-if="item.isLike" />
                <like-outlined class="outlined" v-else />
                <span>{{item.arcLike}}</span>
              </li>
              <li class="item comment">
                <comment-outlined />
                <span>{{item.arcComment}}</span>
              </li>
            </ul>
          </div>
        </div>
      </template>
      <a-empty description="暂无数据"  v-else />
  </div>
</template>

<script setup>
import {
  EyeOutlined,
  LikeOutlined,
  CommentOutlined,
  LikeFilled
} from '@ant-design/icons-vue'
import {ref} from "vue";

const data = ref([])
</script>

<style lang="scss" scoped>
.myPost {
  padding: 20px;
  .entry {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 12px 20px 0;
    border-radius: 10px;
    cursor: pointer;
    background-color: #fff;
    //box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    margin: 10px 0;
    .meta-container {
      display: flex;
      color: #86909c;
      align-items: center;
      .author {
        display: flex;
        align-items: center;
        margin-right: 8px;
        max-width: 162px;
        font-size: 13px;
        line-height: 22px;
        color: #4e5969;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
      }
      .date {
        position: relative;
        padding: 0 10px;
        line-height: 22px;
        font-size: 13px;
        flex-shrink: 0;
        &::before {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          display: block;
          width: 1px;
          height: 14px;
          background: #e5e6eb;
          content: ' ';
        }
        &::after {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          display: block;
          width: 1px;
          height: 14px;
          background: #e5e6eb;
          content: ' ';
        }
      }
      .tag_list {
        display: flex;
        align-items: center;
        .tag {
          flex-shrink: 0;
          font-size: 13px;
          line-height: 22px;
          padding: 0 8px;
          color: #86909c;
        }
      }
      .label {
        flex-shrink: 0;
        font-size: 13px;
        line-height: 22px;
        padding: 0 8px;
        color: #86909c;
      }
    }
    .content-wrapper {
      //display: flex;
      padding-bottom: 12px;
      //border-bottom: 1px solid #e5e6eb;
      margin-top: 10px;
      width: 100%;
      .title-row {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        .title {
          font-size: 16px;
          line-height: 24px;
          font-weight: 700;
          color: #1d2129;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
        }
      }
      .abstract {
        font-size: 14px;
        line-height: 24px;
        color: #4e5969;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
      }
      .action-list {
        display: flex;
        align-items: center;
        margin-top: 10px;
        .item {
          display: flex;
          align-items: center;
          position: relative;
          margin-right: 20px;
          font-size: 15px;
          line-height: 20px;
          color: #4e5969;
          flex-shrink: 0;
        }
        .like:hover {
          color: #3d60e5;
        }
      }
    }
  }
}
</style>
