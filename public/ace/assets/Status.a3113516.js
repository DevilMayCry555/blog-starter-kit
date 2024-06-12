var K=Object.defineProperty;var Q=(e,n,t)=>n in e?K(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var H=(e,n,t)=>(Q(e,typeof n!="symbol"?n+"":n,t),t);import{I as Y}from"./vendor-others.11f5dab8.js";import{J as G,K as W,t as O,_ as g,u as X,v as Z}from"./index.5f82e941.js";import{I as J}from"./application.ea1e2a72.js";import{m as x}from"./vendor-markdown.2cd127bb.js";import{d as b,m as ee,ag as ne,ak as o,as as te,J as oe,o as c,H as $,I as d,R as a,f as u,O as A,P as r,e as h,Q as ie,ah as re,M as w}from"./vendor-@vue.e467cd49.js";import"./vendor-highlight.js.5674318b.js";import{E as D,w as se,x as ae,t as le,J as pe,e as I,D as P,n as ce,o as de,s as ue,K as me}from"./vendor-element-plus.4011bc9f.js";const _e="duplication",xe="api_error",en="bad_request",nn="used_up",tn="unknown",on="canceled",rn="timeout",sn="content_too_large",an="too_many_requests",ln="not_applied",ye=async e=>{const n=(await G(()=>import("./vendor-highlight.js.5674318b.js").then(function(i){return i.i}),["assets/vendor-highlight.js.5674318b.js","assets/vendor-highlight.js.af3d01db.css"])).default;console.debug("highlight.js loaded"),e.querySelectorAll("pre code").forEach(i=>{var y,p;const s=document.createElement("button");s.innerHTML=W.global.t("common.button.copy").toString(),s.addEventListener("click",()=>{Y(i.innerText)}),(y=i.parentElement)!=null&&y.querySelector("button")||(p=i.parentElement)==null||p.prepend(s),n.highlightBlock(i)})};class fe{constructor(){H(this,"key","credentials")}async getAll(n){return await O.get(`/${this.key}/`,{params:n})}async get(n){return await O.get(`/${this.key}/${n}`)}async create(n){return await O.post(`/${this.key}/`,n)}async delete(n){return await O.delete(`/${this.key}/${n}`)}}const ve=new fe,he=b({name:"VueMarkdown",props:{source:{type:String,required:!0},options:{type:Object,default:()=>({}),required:!1}},setup(e,{attrs:n}){const t=new x(e.options),i=ee(()=>{const s=e.source;return t==null?void 0:t.render(s)});return()=>ne("div",{...n,innerHTML:i.value})}});var $e=g(he,[["__file","D:/react/Nexior/src/components/common/VueMarkdown.vue"]]);const ge=b({name:"ApiCode",directives:{highlight:ye},components:{VueMarkdown:$e},props:{content:{type:String,required:!1,default:""}},data(){},watch:{}});function be(e,n,t,i,s,y){const p=o("vue-markdown"),m=te("highlight");return oe((c(),$(p,{source:e.content,class:"markdown-body"},null,8,["source"])),[[m]])}var Ee=g(ge,[["render",be],["__scopeId","data-v-8173dc94"],["__file","D:/react/Nexior/src/components/common/MarkdownRenderer.vue"]]),ke=`**\u7279\u522B\u63D0\u9192\uFF1A\u7528\u6237\u5728\u786E\u8BA4\u7B7E\u7F72\u672C\u670D\u52A1\u6761\u6B3E\u4E4B\u524D\uFF0C\u8BF7\u52A1\u5FC5\u4ED4\u7EC6\u9605\u8BFB\u672C\u670D\u52A1\u6761\u6B3E\u4E4B\u5168\u90E8\u5185\u5BB9\uFF0C\u5C24\u5176\u662F\u4EE5\u7C97\u4F53\u6807\u6CE8\u7684\u542B\u6709\u514D\u9664\u6216\u9650\u5236\u7528\u6237\u8D23\u4EFB\u7684\u5185\u5BB9\u3002\u77E5\u6570\u4E91\uFF08\u5317\u4EAC\u9759\u89C5\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8\u65D7\u4E0B\u4EA7\u54C1\uFF09\u4EC5\u4E3A\u5B8C\u6210\u6CE8\u518C\u5E76\u63D0\u4EA4\u670D\u52A1\u5F00\u901A\u7533\u8BF7\u7684\u7528\u6237\u63D0\u4F9B API\u3001\u4EE3\u7406\u3001\u6570\u636E\u6280\u672F\u670D\u52A1\uFF08\u4EE5\u4E0B\u79F0\u201C\u672C\u670D\u52A1\u201D\uFF09\uFF0C\u4E00\u65E6\u7528\u6237\u70B9\u51FB\u300C\u7ACB\u5373\u7533\u8BF7\u300D\u6309\u94AE\u5E76\u52FE\u9009\u540C\u610F\u672C\u534F\u8BAE\uFF0C\u5373\u89C6\u4E3A\u7528\u6237\u5DF2\u5145\u5206\u7406\u89E3\u672C\u534F\u8BAE\u6240\u6709\u6761\u6B3E\u7684\u542B\u4E49\u53CA\u5145\u5206\u63A5\u53D7\u76F8\u5E94\u7684\u6CD5\u5F8B\u540E\u679C\uFF0C\u63A5\u53D7\u4EE5\u6570\u636E\u7535\u6587\u5F62\u5F0F\u8BA2\u7ACB\u672C\u670D\u52A1\u6761\u6B3E\u5E76\u63A5\u53D7\u672C\u670D\u52A1\u6B3E\u7EA6\u675F\u3002\u5982\u679C\u7528\u6237\u4E0D\u540C\u610F\u672C\u670D\u52A1\u6761\u6B3E\uFF0C\u6216\u8005\u65E0\u6CD5\u51C6\u786E\u7406\u89E3\u672C\u670D\u6761\u6B3E\u5185\u5BB9\uFF0C\u8BF7\u4E0D\u8981\u8FDB\u884C\u540E\u7EED\u64CD\u4F5C\u3002**\r
\r
### \u670D\u52A1\u8303\u56F4\r
\r
1. \u672C\u534F\u8BAE\u662F\u7528\u6237\u4F7F\u7528\u5317\u4EAC\u9759\u89C5\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8\u5B50\u4EA7\u54C1 \u2014\u2014 \u77E5\u6570\u4E91 API\u3001\u4EE3\u7406\u3001\u6570\u636E\u670D\u52A1\u6280\u672F\u670D\u52A1\u6240\u8BA2\u7ACB\u7684\u534F\u8BAE\u3002\u672C\u534F\u8BAE\u88AB\u89C6\u4E3A\u300A\u7528\u6237\u670D\u52A1\u534F\u8BAE\u300B\u7684\u8865\u5145\u534F\u8BAE\uFF0C\u662F\u5176\u4E0D\u53EF\u5206\u5272\u7684\u7EC4\u6210\u90E8\u5206\uFF0C\u4E0E\u5176\u6784\u6210\u7EDF\u4E00\u6574\u4F53\u3002\u672C\u534F\u8BAE\u4E0E\u4E0A\u8FF0\u5185\u5BB9\u5B58\u5728\u51B2\u7A81\u7684\uFF0C\u4EE5\u672C\u534F\u8BAE\u4E3A\u51C6\u3002\u540C\u65F6\uFF0C\u77E5\u6570\u4E91\u53EF\u80FD\u4F1A\u4E0D\u65AD\u66F4\u65B0/\u53D1\u5E03\u5173\u4E8E\u672C\u670D\u52A1\u7684\u76F8\u5173\u89C4\u5219\u3001\u4F7F\u7528\u653F\u7B56\u3001\u58F0\u660E\u6307\u5F15\u7B49\u5185\u5BB9\uFF0C\u8BE5\u7C7B\u5185\u5BB9\u4E00\u7ECF\u53D1\u5E03\uFF0C\u5747\u89C6\u4E3A\u672C\u534F\u8BAE\u7684\u7EC4\u6210\u90E8\u5206\u3002\r
\r
2. \u7528\u6237\u7406\u89E3\u5E76\u540C\u610F\uFF0C\u5373\u4F7F\u5DF2\u7B7E\u7F72\u672C\u670D\u52A1\u6761\u6B3E\u6216\u5DF2\u5B9E\u9645\u4F7F\u7528\u672C\u670D\u52A1\uFF0C\u7528\u6237\u5982\u6709\u4E0D\u7B26\u5408\u672C\u670D\u52A1\u6761\u6B3E\u4E4B\u60C5\u5F62\uFF0C\u77E5\u6570\u4E91\u4FDD\u7559\u968F\u65F6\u6682\u505C\u6216\u505C\u6B62\u7528\u6237\u4F7F\u7528\u672C\u670D\u52A1\u7684\u6743\u5229\u3002\u77E5\u6570\u4E91\u6709\u6743\u6839\u636E\u4E1A\u52A1\u53D1\u5C55\u9700\u8981\u5BF9\u670D\u52A1\u8303\u56F4\u8FDB\u884C\u8C03\u6574\u5E76\u8FDB\u884C\u516C\u544A\uFF0C\u800C\u65E0\u987B\u4E3A\u6B64\u627F\u62C5\u8D23\u4EFB\u3002\r
\r
### \u670D\u52A1\u5F62\u5F0F\u53CA\u5185\u5BB9\r
\r
1. \u672C\u670D\u52A1\u4E3B\u8981\u662F\u6307\u77E5\u6570\u4E91\u5411\u7528\u6237\u63D0\u4F9B\u7684\u4E92\u8054\u7F51\u6570\u636E API \u63A5\u53E3\u670D\u52A1\u3001HTTP \u4EE3\u7406\u6280\u672F\u670D\u52A1\u3001\u6279\u91CF\u6570\u636E\u63D0\u4F9B\u670D\u52A1\u3002\r
\r
2. \u7528\u6237\u5728\u672C\u534F\u8BAE\u751F\u6548\u540E\u9700\u6309\u7167\u8D44\u8D39\u6807\u51C6\u53CA\u672C\u534F\u8BAE\u7684\u7EA6\u5B9A\u9884\u4ED8\u76F8\u5E94\u670D\u52A1\u8D39\u7528\uFF0C\u77E5\u6570\u4E91\u5C06\u5728\u6536\u5230\u9884\u4ED8\u6B3E\u540E\u4E3A\u7528\u6237\u5F00\u901A\u76F8\u5E94\u63A5\u53E3\u53CA\u670D\u52A1\u3002\r
\r
3. API \u63A5\u53E3\u9700\u7531\u7528\u6237\u59D4\u6258\u77E5\u6570\u4E91\u8FDB\u884C\u3002\u7528\u6237\u57FA\u4E8E\u81EA\u8EAB\u5408\u6CD5\u5E94\u7528\u573A\u666F\u53CA\u7528\u9014\uFF0C\u59D4\u6258\u5E76\u6388\u6743\u77E5\u6570\u4E91\u901A\u8FC7\u81EA\u4E3B\u7814\u53D1\u7684\u4FE1\u606F\u7CFB\u7EDF\u6309\u7167\u7EA6\u5B9A\u89C4\u5219\u5F00\u5C55\u5408\u4F5C\uFF1A\u77E5\u6570\u4E91\u4EE3\u7406\u7528\u6237\u4E0E\u7528\u6237\u786E\u5B9A\u7684\u4FE1\u606F\u6E90\u9009\u5B9A\u89C4\u5219\u6240\u6307\u5411\u7684\u7B2C\u4E09\u65B9\u6838\u9A8C\u670D\u52A1\u4FE1\u606F\u6E90\uFF0C\u5F00\u5C55\u6838\u9A8C\u670D\u52A1\u76F8\u5173\u7684\u5408\u4F5C\u3002\u6240\u9002\u7528\u7684\u4FE1\u606F\u6E90\u9009\u5B9A\u89C4\u5219\u7684\u53C2\u8003\u7EF4\u5EA6\u5305\u62EC\u6838\u9A8C\u670D\u52A1\u7684\u8D28\u91CF\u3001\u6280\u672F\u80FD\u529B\u3001\u8D44\u8D28\u6C34\u5E73\u7B49\u3002\u7528\u6237\u6388\u6743\u77E5\u6570\u4E91\uFF08\u6216\u77E5\u6570\u4E91\u59D4\u6258\u7684\u7B2C\u4E09\u65B9\uFF09\u5728\u7528\u6237\u786E\u5B9A\u7684\u89C4\u5219\u8303\u56F4\u5185\u9009\u5B9A\u5177\u4F53\u63D0\u4F9B\u6838\u9A8C\u670D\u52A1\u7684\u4FE1\u606F\u6E90\u5E76\u4EE3\u7406\u7528\u6237\u5F00\u5C55\u9010\u7B14\u6838\u9A8C\u670D\u52A1\u3002\u5177\u4F53\u7684\u89C4\u5219\u8BE6\u89C1\u63A5\u53E3\u4EA7\u54C1\u7533\u8BF7\u9875\u9762\u3002\u540C\u65F6\uFF0C\u4E3A\u4FDD\u969C\u60A8\u6B63\u5E38\u4F7F\u7528\u4FE1\u606F\u6838\u9A8C\u670D\u52A1\uFF0C**\u5728\u60A8\u59D4\u6258\u9009\u5B9A\u7684\u4FE1\u606F\u6E90\u53D1\u751F\u7279\u6B8A\u4E0D\u53EF\u7528\u60C5\u51B5\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4E34\u65F6\u4E2D\u65AD\u3001\u53D1\u751F\u6545\u969C\u7B49\uFF09\u65F6\uFF0C\u60A8\u540C\u610F\u77E5\u6570\u4E91\u4E3A\u60A8\u63D0\u4F9B\u5907\u7528\u4FE1\u606F\u6E90\u901A\u9053\u4E3A\u60A8\u7EE7\u7EED\u63D0\u4F9B\u670D\u52A1\u3002**\r
\r
### \u670D\u52A1\u5F00\u901A\u3001\u4ED8\u6B3E\u4E0E\u6263\u8D39\r
\r
1. API \u63A5\u53E3\u670D\u52A1\u91C7\u7528\u9884\u4ED8\u8D39\u5F62\u5F0F\uFF0C\u60A8\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u9009\u62E9\u5408\u9002\u7684\u4EA7\u54C1\uFF0C\u6309\u9700\u9884\u4ED8\u3002\u5982\u5957\u9910\u4F7F\u7528\u5B8C\u6BD5\uFF0C\u60A8\u53EF\u4EE5\u518D\u6B21\u6309\u9700\u8D2D\u4E70\u3002\u5957\u9910\u7684\u5355\u4EF7\u5747\u4E3A\u6D6E\u52A8\u5355\u4EF7\uFF0C\u77E5\u6570\u4E91\u53EF\u80FD\u6839\u636E\u5E02\u573A\u884C\u60C5\u53D8\u5316\u8C03\u6574\u5355\u4EF7\uFF0C\u5982\u6709\u8C03\u6574\uFF0C\u5219\u5957\u9910\u5185\u5305\u542B\u7684\u63A5\u53E3\u8C03\u7528\u6B21\u6570\u76F8\u5E94\u53D8\u52A8\u3002\r
\r
2. \u7528\u6237\u627F\u8BFA\u5E76\u4FDD\u8BC1\u7528\u4E8E\u5176\u4ED8\u6B3E\u7684\u8D44\u91D1\u6765\u6E90\u5408\u6CD5\uFF0C\u5C24\u5176\u4E0D\u5F97\u8FDB\u884C\u8BC8\u9A97\u3001\u975E\u6CD5\u96C6\u8D44\u3001\u975E\u6CD5\u5438\u6536\u516C\u4F17\u5B58\u6B3E\u3001\u6D17\u94B1\u3001\u4F20\u9500\u3001\u975E\u6CD5\u7ECF\u8425\u7B49\u8FDD\u6CD5\u72AF\u7F6A\u6D3B\u52A8\u3002\u5426\u5219\u77E5\u6570\u4E91\u6709\u6743\u7EC8\u6B62\u5408\u4F5C\u5E76\u914D\u5408\u53F8\u6CD5\u673A\u5173\uFF0C\u5BF9\u7528\u6237\u7684\u77E5\u6570\u4E91\u8D26\u6237\u8FDB\u884C\u76F8\u5E94\u5904\u7406\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u53EF\u968F\u65F6\u51BB\u7ED3\u7528\u6237\u7684\u77E5\u6570\u4E91\u8D26\u6237\u7B49\uFF0C\u800C\u65E0\u987B\u4E8B\u5148\u901A\u77E5\u7528\u6237\u3002\r
\r
3. \u7528\u6237\u9700\u5173\u6CE8\u8D26\u6237\u4F59\u989D\u548C\u5269\u4F59\u8C03\u7528\u6B21\u6570\u662F\u5426\u5145\u8DB3\uFF0C\u5982\u6709\u4E0D\u8DB3\u9700\u53CA\u65F6\u7EED\u8D39\u8D2D\u4E70\uFF0C\u907F\u514D\u670D\u52A1\u88AB\u4E2D\u6B62\u3002\r
\r
4. **\u7528\u6237\u8D2D\u4E70\u4EA7\u54C1\u670D\u52A1\u540E\u4E0D\u5F97\u968F\u610F\u7533\u8BF7\u9000\u6B3E\uFF1B\u786E\u6709\u6B63\u5F53\u7406\u7531\u5E76\u7ECF\u77E5\u6570\u4E91\u540C\u610F\u9000\u6B3E\u7684\uFF0C\u5E94\u914D\u5408\u77E5\u6570\u4E91\u63D0\u4F9B\u76F8\u5E94\u9000\u6B3E\u6750\u6599\uFF0C\u5426\u5219\u77E5\u6570\u4E91\u6709\u6743\u62D2\u7EDD\u529E\u7406\u9000\u6B3E\u3002**\r
\r
### \u7528\u6237\u7684\u6743\u5229\u4E0E\u4E49\u52A1\r
\r
1. **\u7528\u6237\u5E94\u81EA\u884C\u5BF9\u5176\u4F7F\u7528\u672C\u670D\u52A1\u4EE5\u53CA\u5BF9\u901A\u8FC7\u672C\u670D\u52A1\u8FDB\u884C\u7684\u5176\u4ED6\u6D3B\u52A8\u6240\u5F15\u8D77\u7684\u4E00\u5207\u6CD5\u5F8B\u7EA0\u7EB7\u627F\u62C5\u5168\u90E8\u8D23\u4EFB\u3002\u7528\u6237\u540C\u65F6\u4FDD\u8BC1\uFF0C\u77E5\u6570\u4E91\u53CA\u5176\u5173\u8054\u516C\u53F8\u4E0D\u4F1A\u56E0\u7528\u6237\u4F7F\u7528\u672C\u670D\u52A1\u800C\u6784\u6210\u8FDD\u6CD5\u3001\u8FDD\u7EA6\u6216\u8005\u5BF9\u4EFB\u4F55\u7B2C\u4E09\u4EBA\u7684\u4FB5\u6743\u3002**\r
\r
2. **\u9488\u5BF9\u6240\u6709 API \u63A5\u53E3\u6280\u672F\u670D\u52A1\uFF0C\u5982\u6D89\u53CA\u4FE1\u606F\u4E3B\u4F53\u975E\u516C\u5F00\u4FE1\u606F\u5C24\u5176\u662F\u4E2A\u4EBA\u4FE1\u606F\u7684\uFF0C\u60A8\u5E94\u5F53\uFF1A**\r
\r
  * \u5411\u77E5\u6570\u4E91\u63D0\u4F9B\u771F\u5B9E\u5408\u6CD5\u7684\u5E94\u7528\u573A\u666F\uFF08\u201C\u5E94\u7528\u573A\u666F\u201D\u6307\u5E94\u7528\u6240\u6709\u6743\u4EBA\u62E5\u6709\u81EA\u4E3B\u77E5\u8BC6\u4EA7\u6743\u7684\u5E94\u7528\uFF0C\u5305\u62EC\u7F51\u7AD9\u3001\u5BA2\u6237\u7AEF\u8F6F\u4EF6\u3001\u79FB\u52A8\u4E92\u8054\u7F51\u5E94\u7528\u7A0B\u5E8F\u3001\u516C\u4F17\u53F7\u3001\u8F6F\u4EF6\u7CFB\u7EDF\u7B49\u4E92\u8054\u7F51\u4EA7\u54C1\u53CA\u9879\u76EE\uFF09\uFF0C\u5E76\u9075\u5FAA\u4E2A\u4EBA\u4FE1\u606F\u7684\u6700\u5C0F\u5FC5\u8981\u539F\u5219\u3002\r
\r
  * \u5728\u5408\u4F5C\u671F\u95F4\uFF0C\u60A8\u627F\u8BFA\u9075\u5B88\u5E76\u9075\u7167\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u6CD5\u7684\u8981\u6C42\uFF0C\u5C65\u884C\u4E86\u4E2A\u4EBA\u4FE1\u606F\u5F71\u54CD\u4FDD\u62A4\u8BC4\u4F30\u4E49\u52A1\uFF0C\u5E76\u5C31\u6D89\u53CA\u4FE1\u606F\u6838\u9A8C\u670D\u52A1\u76F8\u5173\u7684\u4E2A\u4EBA\u4FE1\u606F\u5904\u7406\u884C\u4E3A\u53D6\u5F97\u4E86\u4FE1\u606F\u4E3B\u4F53\u7684\u5408\u6CD5\u6709\u6548\u6388\u6743\uFF08\u542B\u5355\u72EC\u540C\u610F\u8981\u6C42\uFF09\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4FE1\u606F\u4E3B\u4F53\u6388\u6743\u60A8\u91C7\u96C6\u5176\u4E2A\u4EBA\u4FE1\u606F\u3001\u5BF9\u5916\u63D0\u4F9B\u5176\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u6388\u6743\u60A8\u53EF\u4EE5\u5411\u77E5\u6570\u4E91\u53CA\u5176\u5B83\u7B2C\u4E09\u65B9\u4FE1\u606F\u6E90\u63D0\u4F9B\u3001\u67E5\u8BE2\u53CA\u6BD4\u5BF9\u4E2A\u4EBA\u4FE1\u606F\u7B49\u3002**\u5EFA\u8BAE\u60A8\u83B7\u5F97\u7684\u6388\u6743\u8303\u56F4\u5E94\u81F3\u5C11\u6DB5\u76D6\u672C\u534F\u8BAE\u9644\u5F55\u4E00\u6A21\u677F\u7684\u8BB0\u8F7D\u5185\u5BB9\u3002**\u77E5\u6570\u4E91\u5411\u60A8\u63D0\u4F9B\u672C\u534F\u8BAE\u9879\u4E0B\u6838\u9A8C\u670D\u52A1\u65F6\u89C6\u4E3A\u60A8\u5DF2\u7ECF\u53D6\u5F97\u6709\u6548\u6388\u6743\u3002\r
\r
  * \u60A8\u627F\u8BFA\u83B7\u5F97\u7684\u524D\u8FF0\u6388\u6743\u5DF2\u91C7\u7528\u7B26\u5408\u6CD5\u5F8B\u548C\u76D1\u7BA1\u8981\u6C42\u7684\u5F62\u5F0F\u53CA\u65B9\u5F0F\uFF0C\u4E14\u5DF2\u660E\u786E\u83B7\u5F97\u4FE1\u606F\u4E3B\u4F53\u5C06\u5B57\u6BB5\u4FE1\u606F\u59D4\u6258\u7B2C\u4E09\u65B9\u4FE1\u606F\u6E90\u4EE5\u53CA\u83B7\u5F97\u7B2C\u4E09\u65B9\u4FE1\u606F\u6E90\u4F7F\u7528\u5176\u4FE1\u606F\u5F00\u5C55\u67E5\u8BE2\u6838\u9A8C\u7684\u660E\u786E\u6388\u6743\uFF0C\u5E76\u4F5C\u51FA\u8DB3\u4EE5\u5F15\u8D77\u4FE1\u606F\u4E3B\u4F53\u6CE8\u610F\u7684\u63D0\u793A\u3002\u82E5\u56E0\u672A\u53D6\u5F97\u6216\u672A\u53CA\u65F6\u53D6\u5F97\u6709\u6548\u6388\u6743\u800C\u4EA7\u751F\u4EFB\u4F55\u7EA0\u7EB7\u6216\u8D23\u4EFB\uFF0C\u6982\u7531\u60A8\u81EA\u884C\u8D1F\u8D23\uFF0C\u4E14\u60A8\u5E94\u79EF\u6781\u91C7\u53D6\u4E00\u5207\u6709\u6548\u63AA\u65BD\u9632\u6B62\u635F\u5931\u8FDB\u4E00\u6B65\u6269\u5927\u5E76\u5F25\u8865\u635F\u5931\u3002\r
\r
  * \u60A8\u5E94\u914D\u5408\u77E5\u6570\u4E91\u63D0\u4F9B\u6709\u5173\u6570\u636E\u670D\u52A1\u5E94\u7528\u573A\u666F\u3001\u6388\u6743\u534F\u8BAE\u6587\u672C\uFF08\u4F8B\u5982\u6709\u6548\u7684\u9690\u79C1\u653F\u7B56\uFF09\u3001\u7CFB\u7EDF\u64CD\u4F5C\u65E5\u5FD7\u7B49\u76F8\u5173\u8BC1\u660E\u6750\u6599\uFF0C\u540C\u65F6\u60A8\u5E94\u914D\u5408\u77E5\u6570\u4E91\u8FDB\u884C\u6709\u5173\u53CC\u65B9\u6570\u636E\u670D\u52A1\u5408\u4F5C\u4E8B\u9879\u7684\u76D1\u7763\u7BA1\u7406\u3002\r
\r
  * \u60A8\u4E0D\u5F97\u5C06\u67E5\u8BE2\u6838\u9A8C\u7ED3\u679C\u7528\u4E8E\u672C\u5408\u540C\u7EA6\u5B9A\u4EE5\u5916\u7684\u5E94\u7528\u573A\u666F\u6216\u8005\u518D\u6B21\u5206\u53D1\u3001\u9500\u552E\u3001\u8BB8\u53EF\u3001\u5206\u8BB8\u53EF\u3001\u6388\u6743\u3001\u8F6C\u552E\u3001\u51FA\u79DF\u3001\u79DF\u501F\u3001\u8FDB\u51FA\u53E3\u3001\u8F6C\u6388\u6743\u6216\u8F6C\u8BA9\u96C6\u6210\u4F7F\u7528\uFF0C\u4E5F\u4E0D\u5F97\u5C06\u63A5\u53E3\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u4EA4\u7531\u975E\u60A8\u7ECF\u529E\u4EBA\u5458\u4EE5\u5916\u7684\u7B2C\u4E09\u65B9\u4F7F\u7528\u3002\r
\r
  * \u5728\u60A8\u83B7\u5F97\u4FE1\u606F\u4E3B\u4F53\u5145\u5206\u6388\u6743\u7684\u524D\u63D0\u4E0B\uFF0C\u5982\u9700\u5BF9\u4E2A\u4EBA\u4FE1\u606F\u8FDB\u884C\u5B58\u50A8\u3001\u5904\u7406\u548C\u5206\u6790\uFF0C\u5E94\u5728\u4E2D\u56FD\u5883\u5185\u8FDB\u884C\uFF0C\u5E76\u4E25\u683C\u9075\u5B88\u6709\u5173\u6570\u636E\u8DE8\u5883\u4F20\u8F93\u7684\u6CD5\u5F8B\u6CD5\u89C4\u89C4\u5B9A\u3002\r
\r
3. **\u9488\u5BF9\u4FE1\u606F\u67E5\u8BE2\u6838\u9A8C\u7C7B API \u63A5\u53E3\uFF0C\u60A8\u7406\u89E3\u5E76\u540C\u610F\uFF1A**\r
\r
  * **\u8BE5\u7C7B\u63A5\u53E3\u9700\u8981\u60A8\u83B7\u53D6\u60A8\u4E0B\u6E38\u5BA2\u6237\u7684\u6388\u6743\uFF0C\u77E5\u6570\u4E91\u57FA\u4E8E\u60A8\u7684\u59D4\u6258\uFF0C\u6309\u7167\u7EA6\u5B9A\u7684\u4FE1\u606F\u6E90\u9009\u5B9A\u89C4\u5219\u786E\u5B9A\u5177\u4F53\u6838\u9A8C\u670D\u52A1\u4FE1\u606F\u6E90\uFF0C\u4E0E\u7B2C\u4E09\u65B9\u6838\u9A8C\u670D\u52A1\u4FE1\u606F\u6E90\u5F00\u5C55\u6838\u9A8C\u670D\u52A1\u76F8\u5173\u7684\u5408\u4F5C\uFF0C\u56E0\u8BE5\u7B49\u6838\u9A8C\u670D\u52A1\u5408\u4F5C\u5F15\u53D1\u7684\u6743\u5229\u548C\u4E49\u52A1\u7531\u60A8\u4EAB\u6709\u548C\u627F\u62C5\u3002\u4F46\u77E5\u6570\u4E91\u56E0\u8FDD\u53CD\u672C\u534F\u8BAE\u7EA6\u5B9A\u5BFC\u81F4\u8BE5\u7B49\u6838\u9A8C\u670D\u52A1\u5408\u4F5C\u4E3A\u60A8\u9020\u6210\u635F\u5931\u7684\uFF0C\u77E5\u6570\u4E91\u5728\u5176\u8D23\u4EFB\u8303\u56F4\u5185\u5BF9\u60A8\u7684\u76F8\u5E94\u635F\u5931\u627F\u62C5\u6CD5\u5F8B\u8D23\u4EFB\uFF1B**\r
\r
  * **\u4FE1\u606F\u6838\u9A8C\u67E5\u8BE2\u7C7B\u63A5\u53E3\u4EA7\u54C1\u65E0\u6CD5\u4FDD\u8BC1 100% \u7684\u7ED3\u679C\u51C6\u786E\u7387\u548C\u53CA\u65F6\u6027\uFF0C\u6216\u7531\u4E8E\u4EA7\u54C1\u672C\u8EAB\u5B57\u6BB5\u7684\u5C40\u9650\u6027\uFF0C\u5176\u53CD\u9988\u7ED3\u679C\u4EC5\u4F9B\u60A8\u53C2\u7167\uFF0C\u60A8\u4E0D\u5E94\u4EE5\u67E5\u8BE2\u6838\u9A8C\u7ED3\u679C\u4F5C\u4E3A\u884C\u4E3A\u4F9D\u636E\u6216\u63D0\u4F9B\u7ED9\u4ED6\u4EBA\u4F5C\u4E3A\u884C\u4E3A\u4F9D\u636E\u3002**\r
\r
4. **\u60A8\u7533\u8BF7\u6211\u4EEC\u7684\u63A5\u53E3\uFF0C\u5373\u4EE3\u8868\u60A8\u540C\u610F\u59D4\u6258\u77E5\u6570\u4E91\u901A\u8FC7\u4E0A\u6E38\u4FE1\u606F\u6E90\u8FDB\u884C\u76F8\u5173\u4E1A\u52A1\u53CA\u6570\u636E\u5904\u7406\u6548\u679C\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u901A\u8FC7\u7EBF\u4E0B\u5408\u540C\u786E\u7ACB\u6216\u662F\u60A8\u901A\u8FC7\u77E5\u6570\u4E91\u5B98\u7F51\u76F8\u5173\u7528\u6237\u534F\u8BAE\u81EA\u4E3B\u9009\u62E9\u5177\u4F53\u59D4\u6258\u6211\u4EEC\u670D\u52A1\u7684\u5185\u5BB9\u3002** \u6211\u4EEC\u5C06\u4E25\u683C\u6309\u7167\u60A8\u59D4\u6258\u6211\u4EEC\u7684\u76EE\u7684\u5E76\u5728\u60A8\u7684\u59D4\u6258\u8303\u56F4\u5185\u63D0\u4F9B\u4E0A\u6E38\u4FE1\u606F\u6E90\u63A5\u53E3\u53CA\u6570\u636E\u670D\u52A1\u652F\u6301\u3002\u6211\u4EEC\u627F\u8BFA\u5C06\u91C7\u7528\u884C\u4E1A\u5148\u8FDB\u7684\u6280\u672F\u624B\u6BB5\u6765\u4FDD\u969C\u60A8\u670D\u52A1\u4E0E\u6570\u636E\u5B89\u5168\u3002**\u672A\u7ECF\u60A8\u540C\u610F\uFF0C\u6211\u4EEC\u4E0D\u4F1A\u8F6C\u59D4\u6258\u4ED6\u4EBA\u8FDB\u884C\u6570\u636E\u5904\u7406\u3002** \u5177\u4F53\u7684\u59D4\u6258\u671F\u9650\uFF08\u5373\u5408\u540C\u6216\u8BA2\u5355\u671F\u9650\uFF09\u4EE5\u53CA\u6240\u5904\u7406\u6570\u636E\u7684\u79CD\u7C7B\u3001\u4FDD\u62A4\u63AA\u65BD\u3001\u5404\u65B9\u7684\u6743\u5229\u548C\u4E49\u52A1\u7B49\uFF0C\u8BF7\u53C2\u89C1\u60A8\u4E0E\u6211\u4EEC\u7B7E\u8BA2\u7684\u5408\u540C\u6216\u8BA2\u5355\u5185\u5BB9\u3002\r
\r
5. \u60A8\u5E94\u6839\u636E\u672C\u670D\u52A1\u6761\u6B3E\u7EA6\u5B9A\u652F\u4ED8\u670D\u52A1\u8D39\uFF08\u5982\u6709\uFF09\uFF0C\u4E14\u4E0D\u5F97\u4EE5\u4E0E\u7B2C\u4E09\u65B9\u53D1\u751F\u7EA0\u7EB7\u4E3A\u7406\u7531\u62D2\u7EDD\u652F\u4ED8\u672C\u670D\u52A1\u6761\u6B3E\u9879\u4E0B\u7684\u5E94\u4ED8\u6B3E\u9879\u3002\r
\r
6. \u56E0\u7528\u6237\u64CD\u4F5C\u4E0D\u5F53\u6216\u8BEF\u64CD\u4F5C\u9020\u6210\u7684\u635F\u5931\u7531\u7528\u6237\u81EA\u884C\u627F\u62C5\uFF0C\u4E0E\u77E5\u6570\u4E91\u65E0\u5173\u3002\u5982\u7531\u4E8E\u7B2C\u4E09\u65B9\u539F\u56E0\u9020\u6210\u7684\u635F\u5931\u548C\u7EA0\u7EB7\uFF0C\u4F8B\u5982\u7B2C\u4E09\u65B9\u5229\u7528\u60A8\u7684\u5E94\u7528\u4EA7\u54C1\u8FDB\u884C\u8FDD\u6CD5\u72AF\u7F6A\u6D3B\u52A8\u3001APP \u7EC8\u7AEF\u7528\u6237\u8BEF\u64CD\u4F5C\u7B49\uFF0C\u5747\u4E0E\u77E5\u6570\u4E91\u65E0\u5173\u3002\r
\r
7. \u7528\u6237\u4EC5\u62E5\u6709\u4F9D\u7167\u672C\u534F\u8BAE\u7EA6\u5B9A\u5408\u6CD5\u4F7F\u7528\u672C\u670D\u52A1\u7684\u6743\u5229\uFF0C\u4E0E\u672C\u670D\u52A1\u76F8\u5173\u7684\u8457\u4F5C\u6743\u3001\u4E13\u5229\u6743\u7B49\u76F8\u5173\u5168\u90E8\u6743\u5229\u5F52\u77E5\u6570\u4E91\u6240\u6709\u3002\u672A\u7ECF\u77E5\u6570\u4E91\u4E66\u9762\u8BB8\u53EF\uFF0C\u7528\u6237\u4E0D\u5F97\u8FDD\u7EA6\u6216\u8FDD\u6CD5\u4F7F\u7528\uFF0C\u4E0D\u5F97\u5411\u4EFB\u4F55\u5355\u4F4D\u6216\u4E2A\u4EBA\u51FA\u552E\u3001\u8F6C\u8BA9\u3001\u6388\u6743\u77E5\u6570\u4E91\u7684\u4EE3\u7801\u3001\u6280\u672F\u63A5\u53E3\u53CA\u5F00\u53D1\u5DE5\u5177\u7B49\u3002\r
\r
### \u77E5\u6570\u4E91\u6570\u636E\u7684\u6743\u5229\u4E0E\u4E49\u52A1\r
\r
1. \u77E5\u6570\u4E91\u6709\u6743\u6839\u636E\u7528\u6237\u7684\u5B9E\u9645\u60C5\u51B5\u6216\u4EA4\u6613\u8BB0\u5F55\uFF0C\u51B3\u5B9A\u662F\u5426\u53D7\u7406\u7528\u6237\u7684\u8D2D\u4E70\u6216\u59D4\u6258\u8BF7\u6C42\u3002\u77E5\u6570\u4E91\u53EF\u4EE5\u6839\u636E\u7528\u6237\u63D0\u4EA4\u7684\u6CE8\u518C\u4FE1\u606F\u7B49\u7533\u8BF7\u8D44\u6599\u5BF9\u7528\u6237\u4ECE\u4E8B\u4EA4\u6613\u7684\u6743\u9650\u548C\u8EAB\u4EFD\u8FDB\u884C\u6838\u5B9E\u3002\r
\r
2. \u77E5\u6570\u4E91\u6709\u6743\u5411\u7528\u6237\u6536\u53D6\u76F8\u5E94\u7684\u670D\u52A1\u8D39\uFF0C\u5982\u7528\u6237\u903E\u671F\u4ED8\u6B3E\uFF0C\u77E5\u6570\u4E91\u6709\u6743\u4E0D\u4E88\u5F00\u901A\u670D\u52A1\u6216\u53D6\u6D88\u670D\u52A1\uFF0C\u77E5\u6570\u4E91\u5BF9\u6B64\u4E0D\u627F\u62C5\u4EFB\u4F55\u6CD5\u5F8B\u8D23\u4EFB\u3002\r
\r
3. \u77E5\u6570\u4E91\u4E3A\u7528\u6237\u63D0\u4F9B\u6807\u51C6\u63A5\u53E3\u6587\u4EF6\uFF0C\u5E76\u7ED9\u4E88\u5FC5\u8981\u7684\u6280\u672F\u652F\u6301\u548C\u54A8\u8BE2\u670D\u52A1\uFF0C\u534F\u52A9\u7528\u6237\u5B8C\u6210\u63A5\u53E3\u5BF9\u63A5\u5E76\u8FBE\u5230\u5408\u7406\u4F7F\u7528\u6807\u51C6\u3002\r
\r
4. **\u4E3A\u4F9D\u6CD5\u5408\u89C4\u5F00\u5C55\u4E1A\u52A1\u5408\u4F5C\uFF0C\u77E5\u6570\u4E91\u6709\u6743\u5728\u5408\u4F5C\u8FC7\u7A0B\u4E2D\u6301\u7EED\u6838\u67E5\u7528\u6237\u7684\u4E3B\u4F53\u4FE1\u606F\u3001\u8D44\u683C\u8D44\u8D28\u4EE5\u53CA\u4F9D\u636E\u7EA6\u5B9A\u8FD8\u9700\u6838\u67E5\u7684\u5176\u4ED6\u6750\u6599\u4FE1\u606F\uFF0C\u4EE5\u786E\u8BA4\u7528\u6237\u662F\u5426\u6301\u7EED\u7B26\u5408\u5408\u4F5C\u6761\u4EF6\u3002\u77E5\u6570\u4E91\u7684\u524D\u8FF0\u6838\u67E5\uFF0C\u9664\u53EF\u4F9D\u636E\u7528\u6237\u4E3B\u52A8\u63D0\u4EA4\u7684\u6750\u6599\u5916\uFF0C\u8FD8\u53EF\u901A\u8FC7\u516C\u5F00\u8206\u60C5\u3001\u88C1\u5224\u6587\u4E66\u4FE1\u606F\u3001\u4F01\u4E1A\u516C\u793A\u4FE1\u606F\u3001\u7B2C\u4E09\u65B9\u5F81\u4FE1\u673A\u6784\u67E5\u8BE2\u4FE1\u606F\u7B49\u7EFC\u5408\u4F5C\u51FA\u72EC\u7ACB\u5224\u65AD\u3002\u77E5\u6570\u4E91\u4F9D\u636E\u81EA\u8EAB\u7684\u5224\u65AD\u636E\u6B64\u91C7\u53D6\u9002\u5F53\u7684\u6CD5\u5F8B\u884C\u52A8\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4E2D\u6B62\u3001\u7EC8\u6B62\u63D0\u4F9B\u670D\u52A1\uFF0C\u4F9D\u636E\u6CD5\u5F8B\u6CD5\u89C4\u4FDD\u5B58\u6709\u5173\u4FE1\u606F\u5411\u6709\u5173\u90E8\u95E8\u62A5\u544A\u7B49\uFF0C\u7528\u6237\u5E94\u72EC\u81EA\u627F\u62C5\u7531\u6B64\u800C\u4EA7\u751F\u7684\u4E00\u5207\u6CD5\u5F8B\u8D23\u4EFB\u3002\u4F8B\u5982\uFF0C\u82E5\u77E5\u6570\u4E91\u53D1\u73B0\u7528\u6237\u5B58\u5728\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\u7528\u6237\u4E3B\u4F53\u8D44\u683C\u5931\u6548\u6216\u865A\u5047\uFF0C\u65E0\u771F\u5B9E\u4F7F\u7528\u573A\u666F\uFF0C\u4F7F\u7528\u573A\u666F\u6D89\u5ACC\u8FDD\u6CD5\u3001\u8FDD\u89C4\uFF0C\u672A\u7ECF\u6388\u6743\u975E\u6CD5\u83B7\u53D6\u3001\u52A0\u5DE5\u3001\u4F7F\u7528\u7528\u6237\u4E2A\u4EBA\u4FE1\u606F\u7B49\u60C5\u51B5\uFF0C\u77E5\u6570\u4E91\u6709\u6743\u7ACB\u5373\u7EC8\u6B62\u63D0\u4F9B\u670D\u52A1\u3002**\r
\r
5. \u77E5\u6570\u4E91\u6709\u4E49\u52A1\u5728\u6280\u672F\u4E0A\u786E\u4FDD\u6574\u4E2A\u7CFB\u7EDF\u7684\u5B89\u5168\u3001\u6709\u6548\u3001\u6B63\u5E38\u8FD0\u884C\uFF0C\u4FDD\u8BC1\u7528\u6237\u987A\u5229\u4F7F\u7528\u672C\u670D\u52A1\uFF0C\u5E76\u5411\u7528\u6237\u63D0\u4F9B\u8BA2\u5355\u8BB0\u5F55\u3001\u4EA4\u6613\u8D44\u91D1\u72B6\u6001\u3001\u8D26\u6237\u4F59\u989D\u7B49\u67E5\u8BE2\u670D\u52A1\u3002\u4F46\u77E5\u6570\u4E91\u4E0D\u627F\u62C5\u56E0\u901A\u8BAF\u3001\u505C\u7535\u6545\u969C\u3001\u9ED1\u5BA2\u653B\u51FB\u3001\u94F6\u884C\u3001\u4E0A\u6E38\u4F9B\u5E94\u5546\u6216\u4FE1\u606F\u6E90\u7B49\u539F\u56E0\u6216\u4E0D\u53EF\u6297\u529B\u4E8B\u4EF6\u6240\u5F15\u8D77\u4EA4\u6613\u4E2D\u65AD\u3001\u8BA2\u5355\u9519\u8BEF\u5F15\u8D77\u7684\u8D23\u4EFB\u3002\r
\r
6. \u77E5\u6570\u4E91\u5BF9\u7528\u6237\u5728\u6CE8\u518C\u53CA\u4F7F\u7528\u672C\u670D\u52A1\u8FC7\u7A0B\u4E2D\u63D0\u4F9B\u7684\u76F8\u5173\u6570\u636E\u548C\u4FE1\u606F\u53CA\u5728\u4EA4\u6613\u4E2D\u4EA7\u751F\u7684\u4EA4\u6613\u8BB0\u5F55\u8D1F\u6709\u4FDD\u5BC6\u4E49\u52A1\uFF0C\u4F46\u6CD5\u5F8B\u6CD5\u89C4\u53E6\u6709\u89C4\u5B9A\u6216\u672C\u534F\u8BAE\u53E6\u6709\u7EA6\u5B9A\u7684\u9664\u5916\u3002\r
\r
### \u8FDD\u7EA6\u8D23\u4EFB\u53CA\u514D\u8D23\r
\r
1. \u9274\u4E8E\u4E92\u8054\u7F51\u5927\u6570\u636E\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\u6B63\u5728\u6301\u7EED\u4E0D\u65AD\u7684\u5B8C\u5584\uFF0C\u7528\u6237\u8BA4\u53EF\u77E5\u6570\u4E91\u63D0\u4F9B\u7684\u670D\u52A1\u53EF\u80FD\u968F\u6709\u5173\u6CD5\u5F8B\u6CD5\u89C4\u53CA\u653F\u7B56\u7684\u53D8\u5316\u8FDB\u884C\u76F8\u5E94\u8C03\u6574\u3002\u82E5\u9047\u56FD\u5BB6\u884C\u653F\u7BA1\u7406\u90E8\u95E8\u3001\u53F8\u6CD5\u673A\u5173\u653F\u7B56\u3001\u76D1\u7BA1\u653F\u7B56\u8C03\u6574\u5BF9\u672C\u534F\u8BAE\u7684\u5C65\u884C\u9020\u6210\u91CD\u5927\u5F71\u54CD\u7684\uFF0C\u8C03\u6574\u65B9\u5E94\u53CA\u65F6\u901A\u77E5\u5BF9\u65B9\uFF0C\u7531\u53CC\u65B9\u534F\u5546\u8BAE\u5B9A\uFF0C\u5982\u534F\u5546\u4E0D\u80FD\u8FBE\u6210\u4E00\u81F4\u7684\uFF0C\u4EFB\u4F55\u4E00\u65B9\u6709\u6743\u7EC8\u6B62\u672C\u534F\u8BAE\u5E76\u4E92\u4E0D\u627F\u62C5\u8FDD\u7EA6\u8D23\u4EFB\u3002\r
\r
2. \u7528\u6237\u5E94\u91C7\u53D6\u9002\u5F53\u63AA\u65BD\u7EF4\u62A4\u81EA\u8EAB\u4E92\u8054\u7F51\u5E73\u53F0\u3001\u8F6F\u786C\u4EF6\u7CFB\u7EDF\u53CA\u5176\u4ED6\u5E94\u7528\u573A\u666F\u7684\u7A33\u5B9A\u548C\u5B89\u5168\uFF0C\u91C7\u53D6\u5FC5\u8981\u7684\u52A0\u5BC6\u63AA\u65BD\u9632\u6B62\u4FE1\u606F\u6CC4\u9732\u3001\u6BC1\u635F\u3001\u4E22\u5931\u3002\u4EFB\u4F55\u7531\u4E8E\u7528\u6237\u81EA\u8EAB\u4EA7\u54C1\u6F0F\u6D1E\u3001\u5B89\u5168\u63AA\u65BD\u4E0D\u5230\u4F4D\u7B49\u539F\u56E0\u9020\u6210\u7684\u4FE1\u606F\u6CC4\u9732\u6216\u4EFB\u4F55\u635F\u5931\uFF0C\u4E0E\u77E5\u6570\u4E91\u65E0\u5173\u3002\r
\r
### \u9644\u5219\r
\r
1. \u672C\u670D\u52A1\u6761\u6B3E\u81EA\u7528\u6237\u70B9\u51FB\u5E76\u52FE\u9009\u540C\u610F\u672C\u534F\u8BAE\u4E4B\u65F6\u751F\u6548\u3002\r
\r
2. \u5982\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\u6761\u6B3E\u4E0E\u7528\u6237\u548C\u77E5\u6570\u4E91\u7B7E\u8BA2\u7684\u7EB8\u8D28\u5408\u540C\u4E2D\u5404\u6761\u6B3E\u6709\u4E0D\u540C\u4E4B\u5904\uFF0C\u4EE5\u7EB8\u8D28\u5408\u540C\u4E3A\u51C6\uFF1B\u7EB8\u8D28\u5408\u540C\u6CA1\u6709\u7EA6\u5B9A\u7684\u4E8B\u9879\uFF0C\u4EE5\u7528\u6237\u5728\u6CE8\u518C\u77E5\u6570\u4E91\u8D26\u6237\u5E76\u4F7F\u7528\u77E5\u6570\u4E91\u4EA7\u54C1\u670D\u52A1\u8FC7\u7A0B\u4E2D\u540C\u610F\u7684\u5404\u9879\u5728\u7EBF\u89C4\u5219\u4E3A\u51C6\u3002\r
\r
\u672C\u534F\u8BAE\u66F4\u65B0\u65E5\u671F\uFF1A2023 \u5E74 3 \u6708 12 \u65E5\r
`;const Ae=b({name:"ApplicationPolicy",components:{ElDialog:D,MarkdownRenderer:Ee},props:{visible:{type:Boolean,required:!1,default:!1}},emits:["update:visible"],data(){return{policyText:ke}},methods:{}});function Ce(e,n,t,i,s,y){const p=o("markdown-renderer"),m=o("el-dialog");return c(),$(m,{class:"dialog-policy","model-value":e.visible,title:e.$t("application.message.policy"),width:"700px",onClose:n[0]||(n[0]=f=>e.$emit("update:visible",!1))},{default:d(()=>[a(p,{content:e.policyText},null,8,["content"])]),_:1},8,["model-value","title"])}var Oe=g(Ae,[["render",Ce],["__file","D:/react/Nexior/src/components/application/Policy.vue"]]);const we=b({name:"ApplicationConfirm",components:{ElDialog:D,ElDescriptions:se,ElDescriptionsItem:ae,ElDivider:le,ElCheckbox:pe,ElButton:I,ApplicationPolicy:Oe},props:{service:{type:Object,required:!0},visible:{type:Boolean,required:!1,default:!1}},emits:["update:visible","apply"],data(){return{checked:!1,showPolicy:!1}},watch:{},methods:{onApply(){if(!this.checked){P.error(this.$t("application.message.notAgreePolicy"));return}this.$emit("apply")}}}),Re={class:"content"},Pe={class:"policy"},De={class:"policy-title"};function Ie(e,n,t,i,s,y){const p=o("el-descriptions-item"),m=o("el-descriptions"),f=o("el-divider"),E=o("el-checkbox"),_=o("application-policy"),v=o("el-button"),C=o("el-dialog");return c(),$(C,{"model-value":e.visible,width:"500px",title:e.$t("application.message.confirmApplying"),center:"",onClose:n[3]||(n[3]=l=>e.$emit("update:visible",!1))},{default:d(()=>[u("div",Re,[a(m,{column:1},{default:d(()=>[a(p,{label:e.$t("application.field.name")},{default:d(()=>{var l;return[A(r((l=e.service)==null?void 0:l.title),1)]}),_:1},8,["label"]),a(p,{label:e.$t("application.field.freeAmount")},{default:d(()=>{var l,k;return[u("span",null,r((l=e.service)==null?void 0:l.free_amount)+" "+r(e.$t(`service.unit.${(k=e.service)==null?void 0:k.unit}`)),1)]}),_:1},8,["label"])]),_:1}),a(f,{class:"my-2"}),u("div",Pe,[a(E,{modelValue:e.checked,"onUpdate:modelValue":n[0]||(n[0]=l=>e.checked=l),size:"large",class:"policy-checkbox"},null,8,["modelValue"]),u("span",De,r(e.$t("application.message.readPolicy")),1),u("span",{class:"policy-title highlight",onClick:n[1]||(n[1]=l=>e.showPolicy=!0)}," \xA0"+r(e.$t("application.message.policy")),1),a(_,{modelValue:e.showPolicy,"onUpdate:modelValue":n[2]||(n[2]=l=>e.showPolicy=l),modelModifiers:{visible:!0}},null,8,["modelValue"])]),a(v,{round:"",type:"primary",onClick:e.onApply},{default:d(()=>[A(r(e.$t("common.button.apply")),1)]),_:1},8,["onClick"])])]),_:1},8,["model-value","title"])}var Te=g(we,[["render",Ie],["__scopeId","data-v-666cd2fe"],["__file","D:/react/Nexior/src/components/application/Confirm.vue"]]);const Me=b({name:"ApiPrice",components:{ElTable:ce,ElTableColumn:de,ElDialog:D,ElButton:I},props:{price:{type:Object,required:!0}},data(){return{visible:!1}},computed:{data(){var e;return((e=this.price)==null?void 0:e.data)||[]},columns(){var e;return(e=this.price)==null?void 0:e.columns},spans(){var e;return(e=this.price)==null?void 0:e.spans}},methods:{cellStyle(){return{"font-weight":"bold","text-align":"center"}},spanMethod({row:e,column:n,rowIndex:t,columnIndex:i}){if(this.spans){for(const s of this.spans)if(t===s[0]&&i===s[1])return[s[2],s[3]]}return[1,1]}}});function Ne(e,n,t,i,s,y){const p=o("el-table-column"),m=o("el-table"),f=o("el-dialog"),E=o("el-button");return c(),h("div",null,[a(f,{modelValue:e.visible,"onUpdate:modelValue":n[0]||(n[0]=_=>e.visible=_),center:"",width:"80%"},{default:d(()=>[a(m,{data:e.data,stripe:"","span-method":e.spanMethod,"header-cell-style":e.cellStyle,"cell-style":e.cellStyle},{default:d(()=>[(c(!0),h(ie,null,re(e.columns,(_,v)=>(c(),$(p,{key:v,prop:_.key,label:_.label},null,8,["prop","label"]))),128))]),_:1},8,["data","span-method","header-cell-style","cell-style"])]),_:1},8,["modelValue"]),a(E,{round:"",size:"small",onClick:n[1]||(n[1]=_=>e.visible=!0)},{default:d(()=>[A(r(e.$t("service.button.pricing")),1)]),_:1})])}var Se=g(Me,[["render",Ne],["__scopeId","data-v-4600b314"],["__file","D:/react/Nexior/src/components/api/Price.vue"]]);const Ve=b({name:"ApplicationStatus",components:{ElButton:I,ApplicationConfirm:Te,ElSkeleton:ue,ElSkeletonItem:me,ApiPrice:Se},props:{application:{type:Object,required:!0},initializing:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!0},service:{type:Object,required:!0},needApply:{type:Boolean,default:!1}},emits:["apply","refresh","applied","update:application"],data(){return{confirming:this.needApply,applicationType:J}},computed:{authenticated(){return!!this.$store.state.token.access},user(){return this.$store.state.user}},watch:{needApply(e){e&&(this.confirming=e)}},mounted(){var e,n;this.application&&!((n=(e=this.application)==null?void 0:e.credentials)!=null&&n.find(t=>t.host===window.location.origin))&&(console.log("create extra credential"),this.onCreateCredential(this.application))},methods:{onBuyMore(e){this.$router.push({name:X,params:{id:e.id}})},onCreateCredential(e){ve.create({application_id:e==null?void 0:e.id,host:window.location.origin}).then(()=>{setTimeout(()=>{this.$emit("refresh")},2e3),this.confirming=!1}).finally(()=>{this.$emit("applied")})},onApply(){var e;Z.create({type:J.API,service_id:(e=this.service)==null?void 0:e.id}).then(({data:n})=>{P.success(this.$t("application.message.applySuccessfully")),this.onCreateCredential(n)}).catch(n=>{var t,i;((i=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:i.code)===_e&&P.error(this.$t("application.message.alreadyApplied")),this.confirming=!1})}}}),Be={key:0},qe={key:1,class:"status"},Ue={class:"info"},Le={class:"actions"},je={key:2,class:"text-center info"},ze={class:"mr-2"},Fe={class:"ml-1"};function He(e,n,t,i,s,y){var v,C,l,k,T,M,N,S,V,B,q,U,L,j,z,F;const p=o("el-skeleton-item"),m=o("el-skeleton"),f=o("el-button"),E=o("api-price"),_=o("application-confirm");return c(),h("div",null,[e.initializing&&e.application===void 0?(c(),h("div",Be,[a(m,{rows:1,class:"text-center"},{template:d(()=>[a(p,{variant:"p",class:"shimmer"})]),_:1})])):e.application?(c(),h("div",qe,[u("span",Ue,r(e.$t("common.message.usedAmount"))+": "+r((C=(v=e.application)==null?void 0:v.used_amount)==null?void 0:C.toFixed(6))+" "+r(e.$t("service.unit."+((k=(l=e.application)==null?void 0:l.service)==null?void 0:k.unit)+"s"))+" "+r(e.$t("common.message.remainingAmount"))+": "+r((M=(T=e.application)==null?void 0:T.remaining_amount)==null?void 0:M.toFixed(6))+" "+r(e.$t("service.unit."+((S=(N=e.application)==null?void 0:N.service)==null?void 0:S.unit)+"s")),1),u("span",Le,[a(f,{round:"",size:"small",type:"primary",class:"mr-1",onClick:n[0]||(n[0]=R=>e.onBuyMore(e.application))},{default:d(()=>[A(r(e.$t("common.button.buyMore")),1)]),_:1}),e.showPrice&&((U=(q=(B=(V=e.application)==null?void 0:V.service)==null?void 0:B.apis)==null?void 0:q[0])==null?void 0:U.price)?(c(),$(E,{key:0,class:"price inline-block",price:(F=(z=(j=(L=e.application)==null?void 0:L.service)==null?void 0:j.apis)==null?void 0:z[0])==null?void 0:F.price},null,8,["price"])):w("v-if",!0)])])):w("v-if",!0),e.needApply&&e.service?(c(),h("div",je,[u("span",ze,r(e.$t("chat.message.notApplied")),1),u("span",null,[a(f,{round:"",type:"primary",class:"btn btn-apply",size:"small",onClick:n[1]||(n[1]=R=>e.confirming=!0)},{default:d(()=>[A(r(e.$t("common.button.apply")),1)]),_:1})]),u("span",Fe,r(e.$t("chat.message.tryForFree")),1),e.service&&e.authenticated?(c(),$(_,{key:0,modelValue:e.confirming,"onUpdate:modelValue":n[2]||(n[2]=R=>e.confirming=R),modelModifiers:{visible:!0},service:e.service,onApply:e.onApply},null,8,["modelValue","service","onApply"])):w("v-if",!0)])):w("v-if",!0)])}var pn=g(Ve,[["render",He],["__scopeId","data-v-2941d97e"],["__file","D:/react/Nexior/src/components/application/Status.vue"]]);export{pn as A,tn as E,Ee as M,ln as a,sn as b,an as c,rn as d,en as e,xe as f,nn as g,on as h,_e as i};
