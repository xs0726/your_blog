<template>
  <div class="TabListContent">
    <div class="entry">
      <div class="meta-container">
        <div class="author">xs</div>
        <div class="date">2021</div>
        <div class="tag_list">
          <div class="tag">vue</div>
          <div class="tag">html</div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="title-row">
          <div class="title" title="vivo 商品中台的可视化微前端实践">vivo 商品中台的可视化微前端实践</div>
        </div>
        <div class="abstract">
          一、背景 在电商领域内，商品是一个重要组成部分，与其对应的商品管理系统，则负责商品的新建、编辑、复制等功能。随着商品管理系统的成熟稳定和业务上的扩展需求，催化出了商品中台的诞生。它可以将现有商品功能最
        </div>
        <ul class="action-list">
          <li class="item view">
            <eye-outlined />
            <span>1112</span>
          </li>
          <li class="item like">
            <like-outlined />
            <span>123</span>
          </li>
          <li class="item comment">
            <comment-outlined />
            <span>22</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="entry">
      <div class="meta-container">
        <div class="author">xs</div>
        <div class="date">2021</div>
        <div class="tag_list">
          <div class="tag">vue</div>
          <div class="tag">html</div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="title-row">
          <div class="title" title="vivo 商品中台的可视化微前端实践">vivo 商品中台的可视化微前端实践</div>
        </div>
        <div class="abstract">
          一、背景 在电商领域内，商品是一个重要组成部分，与其对应的商品管理系统，则负责商品的新建、编辑、复制等功能。随着商品管理系统的成熟稳定和业务上的扩展需求，催化出了商品中台的诞生。它可以将现有商品功能最
        </div>
        <ul class="action-list">
          <li class="item view">
            <eye-outlined />
            <span>1112</span>
          </li>
          <li class="item like">
            <like-outlined />
            <span>123</span>
          </li>
          <li class="item comment">
            <comment-outlined />
            <span>22</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EyeOutlined,LikeOutlined,CommentOutlined} from '@ant-design/icons-vue'
</script>

<style lang="scss" scoped>
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
        content: " ";
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
        content: " ";
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
  }
  .content-wrapper {
    //display: flex;
    padding-bottom: 12px;
    border-bottom: 1px solid #e5e6eb;
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
        margin-right: 8px;
        position: relative;
        margin-right: 20px;
        font-size: 13px;
        line-height: 20px;
        color: #4e5969;
        flex-shrink: 0;
      }
    }
  }
}
</style>
