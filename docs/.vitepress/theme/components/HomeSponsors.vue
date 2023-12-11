<script setup>
// https://github.com/vitejs/vite/tree/main/docs
import { VPHomeSponsors } from "vitepress/theme";
const data = [
  {
    tier: "感谢vitepress",
    size: "big",
    items: [
      {
        name: "驰骋流程+表单+低代码",
        url: "http://www.ccflow.org/",
        img: "/vitepress/images/logo-mini.svg",
      },
    ],
  },
];
</script>

<template>
  <VPHomeSponsors
    message="vueNextAdmin是免费和开源的,感谢作者。"
    action-text="查看使用指南"
    action-link="/home/"
    :data="data"
  />
</template>
