import{o as u,b as m,m as l,e as d,g,a2 as o,v as i,a3 as _,a4 as h,a5 as w,a6 as A,a7 as v,a8 as x,a9 as y,aa as b,ab as P,ac as C,ad as R,d as S,u as k,j as E,z as L,ae as V,af as z,ag as D}from"./chunks/framework.pEsV-nCa.js";import{V as N,_ as T,t as p}from"./chunks/theme.DXy1ahk0.js";const c={__name:"HomeSponsors",setup(e){const t=[{tier:"长期赞助商",size:"big",items:[{name:"驰骋流程+表单+低代码",url:"http://www.ccflow.org/",img:"/vue-next-admin-doc-preview/images/ccflowRightNextAdmin.png"}]}];return(a,n)=>t?(u(),m(l(N),{key:0,message:"vueNextAdmin 是免费和开源的，由优秀的赞助商提供支持。","action-text":"查看更多","action-link":"/support/",data:t})):d("",!0)}},$={__name:"AsideSponsors",setup(e){const t=[{tier:"长期赞助商",size:"big",items:[{name:"驰骋流程+表单+低代码",url:"http://www.ccflow.org/",img:"/vue-next-admin-doc-preview/images/ccflowRightNextAdmin.png"}]}],a=g(()=>t.map(n=>({size:n.size==="big"?"mini":"xmini",items:n.items}))??[]);return(n,r)=>t?(u(),m(l(T),{key:0,data:a.value},null,8,["data"])):d("",!0)}},j={...p,Layout(){return o(p.Layout,null,{"home-features-after":()=>o(c),"aside-ads-before":()=>o($)})},enhanceApp({app:e}){e.component("HomeSponsors",c)}};function f(e){if(e.extends){const t=f(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=f(j),H=S({name:"VitePressApp",setup(){const{site:e}=k();return E(()=>{L(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&V(),z(),D(),s.setup&&s.setup(),()=>o(s.Layout)}});async function O(){const e=F(),t=B();t.provide(h,e);const a=w(e.route);return t.provide(A,a),t.component("Content",v),t.component("ClientOnly",x),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:y}),{app:t,router:e,data:a}}function B(){return b(H)}function F(){let e=i,t;return P(a=>{let n=C(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=R(()=>import(n),__vite__mapDeps([]))),i&&(e=!1),r},s.NotFound)}i&&O().then(({app:e,router:t,data:a})=>{t.go().then(()=>{_(t.route,a.site),e.mount("#app")})});export{O as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}