import{R as e}from"./chunks/theme.M6_th7Zz.js";import{W as a,X as t,Y as n,Z as s,$ as r,a0 as o,a1 as p,a2 as u,a3 as c,a4 as i,a5 as l,d as m,u as d,H as h,L as f,a6 as g,a7 as A,a8 as v,x as j}from"./chunks/framework.CUf7xJpa.js";const k=function e(a){if(a.extends){const t=e(a.extends);return{...t,...a,async enhanceApp(e){t.enhanceApp&&await t.enhanceApp(e),a.enhanceApp&&await a.enhanceApp(e)}}}return a}(e),w=m({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=d();return h((()=>{f((()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value}))})),e.value.router.prefetchLinks&&g(),A(),v(),k.setup&&k.setup(),()=>j(k.Layout)}});async function x(){globalThis.__VITEPRESS__=!0;const e=function(){let e,t=a;return i((n=>{let s=l(n),r=null;return s&&(t&&(e=s),(t||e===s)&&(s=s.replace(/\.js$/,".lean.js")),r=import(s)),a&&(t=!1),r}),k.NotFound)}(),t=c(w);t.provide(n,e);const m=s(e.route);return t.provide(r,m),t.component("Content",o),t.component("ClientOnly",p),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get:()=>m.frontmatter.value},$params:{get:()=>m.page.value.params}}),k.enhanceApp&&await k.enhanceApp({app:t,router:e,siteData:u}),{app:t,router:e,data:m}}a&&x().then((({app:e,router:a,data:n})=>{a.go().then((()=>{t(a.route,n.site),e.mount("#app")}))}));export{x as createApp};
