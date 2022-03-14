<template>
  <n-layout position="absolute">
    <n-layout-header position="absolute" bordered style="height: 44px;">
      <MenuBar style="padding: 4px 8px;" />
    </n-layout-header>

    <n-layout has-sider position="absolute" style="top: 44px;">
      <n-layout content-style="padding: 24px;">
        <router-view />
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import MenuBar from './components/MenuBar.vue'
</script>

<style>
/* custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #fff;
  border-left: solid 1px #ececec;
}
::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
  box-shadow: inset 0 0 0 2px #fff;
}
</style>
