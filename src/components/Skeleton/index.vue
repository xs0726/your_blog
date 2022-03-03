<template>
  <!-- 通过伪类实现闪现的动画效果 xtx-skeleton 伪元素 --->
  <div class="xtx-skeleton shan" :style="{ width: width+'px', height: height+'px'}">
    <!-- 充当背景色-->
    <div class="block" :style="{ backgroundColor: bg }"></div>
  </div>
</template>
<script>
/**
 * 一个组件创建后,如何进行封装?
 * 考虑设计props=>最大复用(公共组件)
 * 实际应用:骨架屏组件
 * 1.满足不同宽高的模块使用
 * 2.满足骨架结构背景色定制
 *  */
export default {
  name: 'XtxSkeleton',
  props: {
    width: {
      type: String,
      default: '60'
    },
    height: {
      type: String,
      default: '30'
    },
    bg: {
      type: String,
      default: '#efefef'
    }
  }
}
</script>
<style scoped lang="less">
.xtx-skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  .block {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
}
// 闪现效果
.shan {
  &::after {
    content: "";
    position: absolute;
    // 指定动画名进行无限循环
    animation: shan 1.5s ease 0s infinite;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-45deg);
  }
}
@keyframes shan {
  0% {
    left: -100%;
  }
  100% {
    left: 120%;
  }
}
</style>
