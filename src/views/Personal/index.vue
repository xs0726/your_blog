<template>
  <div class="personal">
    <Top />
    <div class="content">
      <div class="personal-left">
        <PersonalLeft />
      </div>
      <div class="personal-right"></div>
    </div>
  </div>
</template>

<script setup>
import Top from '../../components/Home/Top.vue'
import PersonalLeft from '../../components/Personal/PersonalLeft.vue'
</script>

<style lang="scss" scoped>
.personal {
  width: 100%;
  .content {
    display: flex;
    width: 1170px;
    margin: 20px auto;
    .personal-left {
      width: 75%;
      border-radius: 5px;
      //background-color: #fff;
    }
    .personal-right {
      width: calc(25% - 10px);
      height: 100px;
      margin-left: 10px;
      border-radius: 5px;
      background-color: #fff;
    }
  }
}
</style>
