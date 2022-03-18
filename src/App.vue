<template>
  <router-view></router-view>
</template>

<style lang="scss">
html {
  font-size: calc(100vw / 10);
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
}
.flex { 
  display: flex;
  align-items: center;
}
.fsb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fsr {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.fsc {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
