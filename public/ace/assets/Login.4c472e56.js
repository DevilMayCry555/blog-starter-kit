import{_ as a,g as i,a as s}from"./index.5f82e941.js";import"./vendor-others.11f5dab8.js";import{d as c}from"./vendor-@vue.e467cd49.js";import"./vendor-element-plus.4011bc9f.js";import"./vendor-axios.938e43d7.js";import"./vendor-qrcode.f15bf907.js";import"./vendor-fortawesome.8c26b529.js";import"./vendor-highlight.js.5674318b.js";const n=c({name:"AuthLogin",data(){var t;return{redirect:((t=this.$route.query.redirect)==null?void 0:t.toString())||"/"}},async mounted(){const t=i(),r=s(),e=`${t}/auth/callback?redirect=${this.redirect}`,o=`${r}/auth/login?redirect=${e}`;window.location.href=o},methods:{}});var _=a(n,[["__file","D:/react/Nexior/src/pages/auth/Login.vue"]]);export{_ as default};
