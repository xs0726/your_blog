<template>
  <a-carousel class="banner" autoplay>
    <div><img src="https://www.decunt.com/user/slideshowData/1.jpg" alt=""></div>
    <div><img src="https://www.decunt.com/user/slideshowData/2.jpg" alt=""></div>
    <div><img src="https://www.decunt.com/user/slideshowData/3.jpg" alt=""></div>
    <div><img src="https://www.decunt.com/user/slideshowData/4.jpg" alt=""></div>
    <div><img src="https://www.decunt.com/user/slideshowData/5.jpg" alt=""></div>
    <div><img src="https://www.decunt.com/user/slideshowData/6.jpg" alt=""></div>
  </a-carousel>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style lang="scss" scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 350px;
  line-height: 260px;
  overflow: hidden;
  z-index: 1;
  img {
    width: 100%;
  }
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
