<template>
  <div class="page-404">
<!--    <div class="page-404__content">-->
<!--      <h1 class="page-404__title">404</h1>-->
<!--      <p class="page-404__text">-->
<!--        页面不存在-->
<!--      </p>-->
<!--      <router-link class="page-404__link" to="/">-->
<!--        回到首页-->
<!--      </router-link>-->
<!--    </div>-->
    <router-link to="/" class="goHome">返回首页</router-link>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.page-404 {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("https://img.zcool.cn/community/01ceca569cfbe132f875520f40c3c8.gif") no-repeat center center;
  background-size: 100% 100%;
  background-clip: content-box;
  .goHome {
    width: 200px;
    height: 53px;
    border: 1px solid #fff;
    border-radius: 5px;
    text-align: center;
    line-height: 49px;
    margin-top: 102px;
    font-size: 25px;
    font-weight: 400;
    //color: #fff;
  }
  .page-404__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    padding: 0 20px;
    color: white;
    .page-404__title {
      font-size: 80px;
      font-weight: bold;
      margin-bottom: 20px;
      color: white;
    }
    .page-404__text {
      font-size: 20px;
      margin-bottom: 20px;
    }
    .page-404__link {
      font-size: 20px;
      text-decoration: underline;
      //color: #000;
      margin-bottom: 20px;
    }
  }
}
</style>
