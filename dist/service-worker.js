if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>i(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"topanime"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.5377286f.css",revision:null},{url:"/img/LogoCut.e8de9f37.webp",revision:null},{url:"/index.html",revision:"33b04b8d8b2badc2354c41ac0068a4cf"},{url:"/js/731.ab25e7f2.js",revision:null},{url:"/js/782.54f3cd7a.js",revision:null},{url:"/js/app.ca97393d.js",revision:null},{url:"/js/chunk-vendors.1ba3535f.js",revision:null},{url:"/manifest.json",revision:"617dae0f8285c711dd19049954dfd60b"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
