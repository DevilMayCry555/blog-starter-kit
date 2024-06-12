import{z as H,A as V}from"./vendor-others.11f5dab8.js";import{a2 as w}from"./vendor-fortawesome.8c26b529.js";import{S as Q,s as F,e as B,_ as E,f as A,h as G,i as L,j as K,k as M,l as W,m as Z,n as x,o as U,p as oo,d as eo,q as to,r as no}from"./index.5f82e941.js";import{f as ao,g as so,h as io,e as q,i as co,j as ro,k as lo}from"./vendor-element-plus.4011bc9f.js";import{d as O,ak as s,o as e,e as a,R as n,I as t,Q as D,ah as I,H as c,O as g,P as C,aI as j,aJ as z,f as y,K as X,M as m}from"./vendor-@vue.e467cd49.js";import{h as uo}from"./vendor-vue-dark-switch.c2d1dea3.js";const mo=O({name:"LocaleSelector",components:{ElDropdown:ao,ElDropdownItem:so,ElDropdownMenu:io},data(){return{locales:Q}},methods:{async onSelectLocale(o){this.$router.push({query:{...this.$route.query,locale:void 0}}),await F(o),this.setCookie(o),window.location.reload()},setCookie(o){H("LOCALE",o,{path:"/",domain:B()})}}}),_o=o=>(j("data-v-32a102bd"),o=o(),z(),o),po=_o(()=>y("i",{class:"icon"},[y("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},[y("path",{fill:"currentColor",d:"m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"})])],-1));function fo(o,i,d,_,p,f){const u=s("el-dropdown-item"),k=s("el-dropdown-menu"),l=s("el-dropdown");return e(),a("div",null,[n(l,{"max-height":"700",trigger:"click",onCommand:o.onSelectLocale},{dropdown:t(()=>[n(k,null,{default:t(()=>[(e(!0),a(D,null,I(o.locales,(h,N)=>(e(),c(u,{key:N,command:h.value},{default:t(()=>[g(C(h.label),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:t(()=>[po]),_:1},8,["onCommand"])])}var ho=E(mo,[["render",fo],["__scopeId","data-v-32a102bd"],["__file","D:/react/Nexior/src/components/common/LocaleSelector.vue"]]);const vo=O({components:{FontAwesomeIcon:w,ElButton:q},emits:["update:dark"],computed:{dark(){return V("THEME")==="dark"}},watch:{dark(o){this.setDark(o)}},mounted(){console.log("mounted",this.dark),this.setDark(this.dark)},methods:{setDark(o){uo(o),this.setCookie(o),o===!0?document.documentElement.classList.add("dark"):o===!1&&document.documentElement.classList.remove("dark")},setCookie(o){H("THEME",o?"dark":"light",{path:"/",domain:B()})}}});function ko(o,i,d,_,p,f){const u=s("font-awesome-icon"),k=s("el-button");return e(),c(k,{class:X({active:!!o.dark}),onClick:i[0]||(i[0]=l=>o.setDark(!o.dark))},{default:t(()=>[o.dark?(e(),c(u,{key:0,icon:"fa-solid fa-moon"})):(e(),c(u,{key:1,icon:"fa-solid fa-moon"}))]),_:1},8,["class"])}var $o=E(vo,[["render",ko],["__file","D:/react/Nexior/src/components/common/DarkSelector.vue"]]);const go=O({name:"Chevron",components:{FontAwesomeIcon:w},props:{direction:{type:String,default:"right"}},computed:{icon(){return`fa-solid fa-chevron-${this.direction}`}}});function Co(o,i,d,_,p,f){const u=s("font-awesome-icon");return e(),c(u,{icon:o.icon,class:"icon"},null,8,["icon"])}var yo=E(go,[["render",Co],["__scopeId","data-v-06897087"],["__file","D:/react/Nexior/src/components/common/Chevron.vue"]]);const Eo=O({emits:["click"],data(){return{url1:"https://cdn.acedata.cloud/logo.png/thumb_450x_",url2:"https://cdn.acedata.cloud/logo2.png/thumb_450x_"}},computed:{dark(){return V("THEME")==="dark"},url(){return this.dark?this.url2:this.url1}}}),Oo=["src"];function No(o,i,d,_,p,f){return e(),a("img",{src:o.url,class:"logo",onClick:i[0]||(i[0]=u=>o.$emit("click"))},null,8,Oo)}var To=E(Eo,[["render",No],["__file","D:/react/Nexior/src/components/common/Logo.vue"]]);const Do=O({name:"Navigator",components:{ElButton:q,Logo:To,DarkSelector:$o,ElTooltip:co,LocaleSelector:ho,FontAwesomeIcon:w,ElMenu:ro,ElMenuItem:lo,Chevron:yo},data(){var i,d,_,p,f;const o=[];return(d=(i=this.$config)==null?void 0:i.navigation)!=null&&d.chat&&o.push({route:{name:A},displayName:this.$t("common.nav.chat"),icon:"fa-regular fa-comment",routes:[G,A]}),(_=this.$config.navigation)!=null&&_.midjourney&&o.push({route:{name:L},displayName:this.$t("common.nav.midjourney"),icon:"fa-solid fa-palette",routes:[L,K]}),(p=this.$config.navigation)!=null&&p.chatdoc&&o.push({route:{name:M},displayName:this.$t("common.nav.chatdoc"),icon:"fa-solid fa-file-lines",routes:[M,W,Z,x]}),(f=this.$config.navigation)!=null&&f.qrart&&o.push({route:{name:U},displayName:this.$t("common.nav.qrart"),icon:"fa-solid fa-qrcode",routes:[U,oo]}),{links:o,activeIndex:this.$route.name}},computed:{authenticated(){return!!this.$store.state.token.access},showDistribution(){var o,i,d;return this.$config.navigation.distribution&&(!((o=this.$config.distribution)!=null&&o.forceInviterId)||((i=this.$store.getters.user)==null?void 0:i.id)===((d=this.$config.distribution)==null?void 0:d.forceInviterId))},collapsed:{get(){var o;return(o=this.$store.state.setting)==null?void 0:o.navigationCollapsed},set(o){this.$store.commit("setSetting",{navigationCollapsed:o})}}},methods:{onHome(){this.$router.push({name:eo})},onDistribution(){this.$router.push({name:to})},async onOpenMenu(){this.collapsed=!1},async onCollapseMenu(){this.collapsed=!0},async onLogout(){await this.$store.dispatch("resetAll"),await this.$store.dispatch("chat/resetAll"),await this.$store.dispatch("midjourney/resetAll"),await this.$store.dispatch("chatdoc/resetAll")},onConsole(){this.$router.push({name:no})}}}),Io=o=>(j("data-v-a43dbcba"),o=o(),z(),o),wo={class:"navigator"},bo={class:"top"},Ro={key:0},So=Io(()=>y("div",{class:"middle"},null,-1)),Ao={key:2,class:"bottom"},Lo={key:3,class:"bottom"},Mo={key:0,class:"link"},Uo={key:1,class:"link"},Ho={key:2,class:"link"},Vo={key:3,class:"link"},Bo={key:4,class:"link"};function qo(o,i,d,_,p,f){var b,R,S;const u=s("chevron"),k=s("logo"),l=s("font-awesome-icon"),h=s("el-menu-item"),N=s("el-menu"),$=s("el-button"),v=s("el-tooltip"),Y=s("dark-selector"),J=s("locale-selector");return e(),a("div",wo,[o.collapsed?(e(),c(u,{key:0,class:"chevron",direction:"right",onClick:o.onOpenMenu},null,8,["onClick"])):(e(),c(u,{key:1,class:"chevron",direction:"left",onClick:o.onCollapseMenu},null,8,["onClick"])),y("div",bo,[o.collapsed?m("v-if",!0):(e(),a("div",Ro,[n(k,{onClick:o.onHome},null,8,["onClick"])])),o.collapsed?(e(!0),a(D,{key:2},I(o.links,(r,T)=>(e(),a("div",{key:T,class:"link"},[o.collapsed?(e(),c(v,{key:0,effect:"dark",content:r.displayName,placement:"right"},{default:t(()=>[n($,{class:X({button:!0,active:r.routes.includes(o.$route.name)}),onClick:P=>o.$router.push(r.route)},{default:t(()=>[n(l,{icon:r.icon},null,8,["icon"])]),_:2},1032,["class","onClick"])]),_:2},1032,["content"])):m("v-if",!0)]))),128)):(e(),c(N,{key:1,"default-active":o.activeIndex},{default:t(()=>[(e(!0),a(D,null,I(o.links,(r,T)=>(e(),c(h,{key:T,index:r.route.name,onClick:P=>o.$router.push(r.route)},{title:t(()=>[g(C(r.displayName),1)]),default:t(()=>[n(l,{icon:r.icon,class:"mr-2"},null,8,["icon"])]),_:2},1032,["index","onClick"]))),128))]),_:1},8,["default-active"]))]),So,o.collapsed?(e(),a("div",Lo,[(b=o.$config.navigation)!=null&&b.darkMode?(e(),a("div",Mo,[n(v,{effect:"dark",content:o.$t("common.nav.darkMode"),placement:"right"},{default:t(()=>[n(Y,{class:"button"})]),_:1},8,["content"])])):m("v-if",!0),(R=o.$config.navigation)!=null&&R.locale?(e(),a("div",Uo,[n(v,{effect:"dark",content:o.$t("common.nav.locale"),placement:"right"},{default:t(()=>[n($,{class:"button"},{default:t(()=>[n(J)]),_:1})]),_:1},8,["content"])])):m("v-if",!0),(S=o.$config.navigation)!=null&&S.console?(e(),a("div",Ho,[n(v,{effect:"dark",content:o.$t("common.nav.console"),placement:"right"},{default:t(()=>[n($,{class:"button",onClick:o.onConsole},{default:t(()=>[n(l,{icon:"fa-solid fa-compass"})]),_:1},8,["onClick"])]),_:1},8,["content"])])):m("v-if",!0),o.showDistribution?(e(),a("div",Vo,[n(v,{effect:"dark",content:o.$t("common.nav.distribution"),placement:"right"},{default:t(()=>[n($,{class:"button",onClick:o.onDistribution},{default:t(()=>[n(l,{icon:"fa-solid fa-coins"})]),_:1},8,["onClick"])]),_:1},8,["content"])])):m("v-if",!0),o.authenticated?(e(),a("div",Bo,[n(v,{effect:"dark",content:o.$t("common.nav.logOut"),placement:"right"},{default:t(()=>[n($,{class:"button",onClick:o.onLogout},{default:t(()=>[n(l,{icon:"fa-solid fa-arrow-right-from-bracket"})]),_:1},8,["onClick"])]),_:1},8,["content"])])):m("v-if",!0)])):(e(),a("div",Ao,[n(N,{"default-active":o.activeIndex},{default:t(()=>{var r;return[(r=o.$config.navigation)!=null&&r.console?(e(),c(h,{key:0,onClick:o.onConsole},{title:t(()=>[g(C(o.$t("common.nav.console")),1)]),default:t(()=>[n(l,{icon:"fa-solid fa-compass",class:"mr-2"})]),_:1},8,["onClick"])):m("v-if",!0),o.showDistribution?(e(),c(h,{key:1,onClick:o.onDistribution},{title:t(()=>[g(C(o.$t("common.nav.distribution")),1)]),default:t(()=>[n(l,{icon:"fa-solid fa-coins",class:"mr-2"})]),_:1},8,["onClick"])):m("v-if",!0),o.authenticated?(e(),c(h,{key:2,onClick:o.onLogout},{title:t(()=>[g(C(o.$t("common.nav.logOut")),1)]),default:t(()=>[n(l,{icon:"fa-solid fa-arrow-right-from-bracket",class:"mr-2"})]),_:1},8,["onClick"])):m("v-if",!0)]}),_:1},8,["default-active"])]))])}var Qo=E(Do,[["render",qo],["__scopeId","data-v-a43dbcba"],["__file","D:/react/Nexior/src/components/common/Navigator.vue"]]);export{Qo as N};
