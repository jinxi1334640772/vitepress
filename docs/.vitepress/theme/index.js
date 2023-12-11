import { h } from "vue";
import Theme from "vitepress/theme";
import "./custom.css";
import HomeSponsors from "./components/HomeSponsors.vue"; 
import AsideSponsors from "./components/AsideSponsors.vue";

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      "home-features-after": () => h(HomeSponsors), // 插入首页底部
      "aside-ads-before": () => h(AsideSponsors), // 页面右下角悬浮组件
    });
  },
  enhanceApp({ app }) {
    app.component("HomeSponsors", HomeSponsors);
  },
};
