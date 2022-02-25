<template>
  <div class="detail">
    <div class="detailLeft">
      <div class="title">Git 各指令的本质，真是通俗易懂啊</div>
      <div class="author">
        <div class="author1"><UserOutlined /><span class="authorName">徐帅</span></div>
        <div class="author2"><field-time-outlined /><span class="authorName">2022-02-18</span></div>
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
    </div>
    <div class="detailRight">456</div>
  </div>
</template>

<script setup>
import { UserOutlined, FieldTimeOutlined  } from '@ant-design/icons-vue'
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  margin-top: 20px;
  background: rgba(255, 255, 255, .5);
  padding: 20px;
  //color: #fffb8f;
  .detailLeft {
    width: 75%;
    height: 100%;
    .title {
      font-size: 22px;
      text-align: center;
      //color: white;
    }
    .author {
      display: flex;
      justify-content: space-around;
      .authorName {
        margin-left: 5px;
      }
    }
    .content {
      //background-color: white;
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
  }
  .detailRight {
    width: calc(25% - 10px);
    margin-left: 10px;
    height: 100%;
  }
}
</style>
