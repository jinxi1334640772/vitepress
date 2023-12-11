// 解析markdown转为HTML文件时，各种配置，例如：页面title，head,script,meta等
import { defineConfig } from "vitepress";
// 解析markdown转为HTML文件时，给特定标签添加特定属性和属性值
import mdItCustomAttrs from "markdown-it-custom-attrs";

/**
 * 找不到配置字段，按住 Ctrl + 鼠标移动到对应字段上点击，
 * 去 xxx.d.ts 类型定义文件中找相对应字段
 */
export default defineConfig({
  head: [
    ["link", { rel: "icon", href: "/vitepress/images/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "vitepress生成的静态站点、vue-next-admin、vue-next-admin-doc、vue3",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content: "🎉🎉🔥基于vitepress生成的静态网站，介绍vue-next-admin项目",
      },
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?dd9ada7b25f65a181a42780f04b764e6";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      },
    ],
  ],
  markdown: {
    config: md => {
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
    },
  },
  title: "vitepress",
  description: "🎉🎉🔥基于vue3.x 、Typescript、vite、Element plus等，适配手机、平板、pc 的后台开发文档",
  lang: "zh-CN",
  // 基础baseUrl 类似publicPath
  base: "/vitepress/",
  // 是否显示更新时间
  lastUpdated: true,
  // 全局页面配置
  themeConfig: {
    // 是否显示logo
    logo: "/images/logo-mini.svg",
    search: true,
    // 自定义右侧大纲标题
    outlineTitle: "导航目录",
    // 开启大纲深层导航：1，1.1，1.2.1
    outline: "deep",
    // 自定义更新text
    lastUpdatedText: "上次更新",
    // 自定义底部编辑链接
    editLink: {
      pattern: "https://gitee.com/myPrettyCode/vitepress/edit/master/docs/:path",
      text: "欢迎到 Gitee 上编辑此页",
    },
    author: "原作者：lyt_20201208",
    // 顶部搜索栏设置，使用了Algolia插件搜索，没有节流
    // algolia: {
    //   apiKey: "ef1d5913298c3b377842ab406af9cbf6",
    //   appId: "VZD7WV0OU8",
    //   indexName: "vue-next-admin-doc-preview",
    //   placeholder: "请输入内容...",
    // },
    // 底部版权声明
    footer: {
      message: "根据 MIT 许可证发布",
      copyright: "本文档内容版权为jinxizhang所有，保留所有权利。",
    },
    // 自定义底部上下页跳转链接的文字
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // 右上角导航配置
    nav: [
      { text: "指南", link: "/home/", activeMatch: "/home/" },
      { text: "配置", link: "/config/", activeMatch: "/config/" },
      {
        text: "集成后端",
        items: [
          {
            text: "@zuohuaijun Admin.NET",
            link: "https://gitee.com/zuohuaijun/Admin.NET",
          },
          {
            text: "@熊猫 PandaGoAdmin",
            link: "https://github.com/PandaGoAdmin/PandaX",
          },
          {
            text: "@甜蜜蜜 GoPro平台",
            link: "https://toscode.gitee.com/GionConnection/gopro_free",
          },
          {
            text: "@游子 GFast-V3",
            link: "https://gitee.com/tiger1103/gfast/tree/os-v3/",
          },
          {
            text: "@diygw.com gw-ui-php",
            link: "https://gitee.com/diygw/diygw-ui-php/",
          },
          {
            text: "@zsvg vboot-net",
            link: "https://gitee.com/zsvg/vboot-net",
          },
          {
            text: "@zsvg vboot-java",
            link: "https://gitee.com/zsvg/vboot-java",
          },
          {
            text: "@青红造了个白 buildadmin",
            link: "https://gitee.com/wonderful-code/buildadmin",
          },
          {
            text: "@Goodwell iotfast(一个开源的物联网平台)",
            link: "https://github.com/xiaodingding/iotfast",
          },
        ],
      },
    ],
    // 左侧导航栏配置：根据页面路由匹配，可分组
    sidebar: {
      "/home/": [
        {
          text: "入门须知",
          collapsed: false,
          items: [
            { text: "许可", link: "/home/" },
            { text: "兼容性", link: "/home/compatible/" },
            { text: "适用人群", link: "/home/forPeople/" },
            { text: "学习文档", link: "/home/doc/" },
            { text: "特别鸣谢", link: "/home/thank/" },
          ],
        },
        {
          text: "开发指南",
          collapsed: false,
          items: [
            { text: "介绍", link: "/home/introduce/" },
            { text: "安装", link: "/home/install/" },
            { text: "其它", link: "/home/fast/" },
          ],
        },
        {
          text: "代码规范",
          collapsed: false,
          items: [
            { text: "eslint", link: "/home/eslint/" },
            { text: "prettier", link: "/home/prettier/" },
            { text: "vsCode 配置", link: "/home/vscode/" },
            { text: "git 提交规范", link: "/home/gitPush/" },
          ],
        },
      ],
      "/config/": [
        {
          text: "基础",
          collapsed: false,
          items: [
            { text: "简介", link: "/config/" },
            { text: "菜单配置", link: "/config/menu/" },
            { text: "布局配置", link: "/config/layoutConfig/" },
            { text: "字体图标", link: "/config/iconfont/" },
            { text: "服务端交互", link: "/config/server/" },
            { text: "vuex", link: "/config/vuex/" },
            { text: "打包预览", link: "/config/build/" },
          ],
        },
        {
          text: "高级",
          collapsed: false,
          items: [
            { text: "权限管理", link: "/config/power/" },
            { text: "路由参数", link: "/config/route/" },
            { text: "国际化", link: "/config/i18n/" },
            { text: "标签页", link: "/config/tagsView/" },
            { text: "内置指令", link: "/config/directive/" },
          ],
        },
        {
          text: "其它",
          collapsed: false,
          items: [
            { text: "数据可视化", link: "/config/charts/" },
            { text: "工具类集合", link: "/config/tool/" },
            { text: "第三方插件使用", link: "/config/partyPlug/" },
            { text: "内置插件的使用", link: "/config/builtPlug/" },
            { text: "其它问题", link: "/config/otherIssues/" },
          ],
        },
      ],
    },
  },
});
