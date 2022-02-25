<template>
  <a-carousel autoplay>
    <div><img src="http://106.15.186.163/user/slideshowData/1.jpg" alt=""></div>
    <div><img src="http://106.15.186.163/user/slideshowData/2.jpg" alt=""></div>
    <div><img src="http://106.15.186.163/user/slideshowData/3.jpg" alt=""></div>
    <div><img src="http://106.15.186.163/user/slideshowData/4.jpg" alt=""></div>
    <div><img src="http://106.15.186.163/user/slideshowData/5.jpg" alt=""></div>
    <div><img src="http://106.15.186.163/user/slideshowData/6.jpg" alt=""></div>
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
  height: 260px;
  line-height: 260px;
  overflow: hidden;
  z-index: 1;
  img {
    width: 600px;
    height: 260px;
  }
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
