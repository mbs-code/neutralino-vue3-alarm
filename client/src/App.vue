<template>
  <n-layout position="absolute">
    <n-layout-header position="absolute" bordered style="height: 24px;">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </n-layout-header>
    <n-layout has-sider position="absolute" style="top: 24px;">
      <n-layout content-style="padding: 24px;">
        <router-view />
      </n-layout>
    </n-layout>
  </n-layout>
</template>

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
