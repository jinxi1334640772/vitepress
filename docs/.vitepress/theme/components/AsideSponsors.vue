<script setup>
import { computed } from "vue";
import { VPDocAsideSponsors } from "vitepress/theme";

const data = [
  {
    tier: "长期赞助商",
    size: "mini", // big   xmini
    items: [
      {
        name: "驰骋流程+表单+低代码",
        url: "http://www.ccflow.org/",
        img: "/vue-next-admin-doc/images/logo-mini.svg",
      },
      {
        name: "驰骋流程+表单+低代码",
        url: "http://www.ccflow.org/",
        img: "/vue-next-admin-doc/images/logo-mini.svg",
      },
    ],
  },
];

</script>

<template>
  <VPDocAsideSponsors :data="data" />
</template>
