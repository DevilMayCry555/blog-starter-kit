import{I as p}from"./vendor-others.11f5dab8.js";import{a2 as s}from"./vendor-fortawesome.8c26b529.js";import{_ as i}from"./index.5f82e941.js";import{i as r}from"./vendor-element-plus.4011bc9f.js";import{d as l,ak as t,o as n,H as a,I as m,R as d}from"./vendor-@vue.e467cd49.js";const _=l({name:"CopyToClipboard",components:{FontAwesomeIcon:s,ElTooltip:r},props:{content:{type:String,required:!0}},data(){return{copied:!1}},methods:{onCopy(){p(this.content,{debug:!0}),this.copied=!0,setTimeout(()=>{this.copied=!1},3e3)}}});function f(o,u,C,y,k,b){const e=t("font-awesome-icon"),c=t("el-tooltip");return o.copied?(n(),a(c,{key:1,visible:o.copied,effect:"dark",content:o.$t("common.message.copied"),placement:"top-start"},{default:m(()=>[d(e,{icon:"fa-solid fa-check",class:"icon-check"})]),_:1},8,["visible","content"])):(n(),a(e,{key:0,icon:"fa-regular fa-copy",class:"icon-copy",onClick:o.onCopy},null,8,["onClick"]))}var w=i(_,[["render",f],["__scopeId","data-v-1ba27772"],["__file","D:/react/Nexior/src/components/common/CopyToClipboard.vue"]]);export{w as C};
