var E=Object.defineProperty;var S=(e,t,l)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var w=(e,t,l)=>(S(e,typeof t!="symbol"?t+"":t,l),l);import"./vendor-others.11f5dab8.js";import{I as D}from"./credential.26787c24.js";import{P as T}from"./Pagination.6e5dfe4b.js";import{t as C,_ as L,v as N}from"./index.5f82e941.js";import{C as O}from"./CopyToClipboard.27b2f89b.js";import{p as P,n as B,F as R,G as z,l as j,m as G,o as H,q as J}from"./vendor-element-plus.4011bc9f.js";import{d as M,ak as s,as as Q,H as f,I as n,o as u,R as o,f as r,P as i,e as g,ah as $,Q as b,J as K,M as W,O as X}from"./vendor-@vue.e467cd49.js";import"./vendor-highlight.js.5674318b.js";import"./vendor-axios.938e43d7.js";import"./vendor-qrcode.f15bf907.js";import"./vendor-fortawesome.8c26b529.js";class Y{constructor(){w(this,"key","usage/apis")}async getAll(t){return await C.get(`/${this.key}/`,{params:t})}async get(t){return await C.get(`/${this.key}/${t}`)}}const Z=new Y;const x=M({name:"ConsoleUsageList",components:{Pagination:T,ElTag:P,ElTable:B,ElSelect:R,ElOption:z,CopyToClipboard:O,ElRow:j,ElCol:G,ElTableColumn:H,ElCard:J},data(){var e,t;return{applicationId:(e=this.$route.query.application_id)==null?void 0:e.toString(),apiId:(t=this.$route.query.api_id)==null?void 0:t.toString(),applications:[],credentialType:D,apiUsages:[],loading:!1,total:void 0,limit:15}},computed:{redirect(){var e;return(e=this.$route.query)==null?void 0:e.redirect},page(){var e;return parseInt(((e=this.$route.query.page)==null?void 0:e.toString())||"1")},apis(){return this.applications.filter(e=>this.applicationId?e.id===this.applicationId:!0).map(e=>{var t;return(t=e.service)==null?void 0:t.apis}).flat()}},watch:{page:{handler(){this.onFetchApiUsages()}},type:{handler(){this.onFetchApiUsages()}}},mounted(){this.onFetchApplications(),this.onFetchApiUsages()},methods:{async onApiChange(e){var t;await this.$router.push({name:(t=this.$route.name)==null?void 0:t.toString(),query:{...this.$route.query,api_id:e}}),this.onFetchApiUsages()},async onApplicationChange(e){var t;await this.$router.push({name:(t=this.$route.name)==null?void 0:t.toString(),query:{...this.$route.query,application_id:e}}),this.onFetchApiUsages()},onPageChange(e){var t;this.$router.push({name:(t=this.$route.name)==null?void 0:t.toString(),query:{...this.$route.query,page:e}})},getRemainingAmount(e){var l,d;if(e.remaining_amount===void 0||e.remaining_amount===null)return"";const t=this.$t(`service.unit.${(l=e==null?void 0:e.service)==null?void 0:l.unit}s`);return`${(d=e.remaining_amount)==null?void 0:d.toFixed(6)} ${t}`},getUsedAmount(e){var l,d;if(e.used_amount===void 0||e.used_amount===null)return"";const t=this.$t(`service.unit.${(l=e==null?void 0:e.service)==null?void 0:l.unit}s`);return`${(d=e.used_amount)==null?void 0:d.toFixed(6)} ${t}`},getDeductedAmount(e){var l,d;if((e==null?void 0:e.deducted_amount)===void 0||(e==null?void 0:e.deducted_amount)===null)return"";const t=this.$t(`service.unit.${(l=e==null?void 0:e.service)==null?void 0:l.unit}s`);return`${(d=e.deducted_amount)==null?void 0:d.toFixed(6)} ${t}`},onFetchApplications(){N.getAll({limit:100,offset:0,user_id:this.$store.getters.user.id,ordering:"-created_at"}).then(({data:e})=>{this.applications=e.items,this.total=e.count}).catch(()=>{})},onFetchApiUsages(){this.loading=!0,Z.getAll({limit:this.limit,offset:(this.page-1)*this.limit,user_id:this.$store.getters.user.id,ordering:"-created_at",...this.applicationId?{application_id:this.applicationId}:{},...this.apiId?{api_id:this.apiId}:{}}).then(({data:e})=>{this.apiUsages=e.items,this.loading=!1,this.total=e.count}).catch(()=>{this.loading=!1})}}}),U={class:"title"},ee={class:"inline-block mr-3"},te={class:"inline-block mr-3"},ae={class:"key"},ne={key:0,class:"copy"},oe={class:"created-at"},le={class:"pagination m-v-lg"};function ie(e,t,l,d,se,re){const h=s("el-col"),m=s("el-row"),y=s("el-option"),v=s("el-select"),p=s("el-table-column"),A=s("el-tag"),I=s("copy-to-clipboard"),k=s("el-table"),F=s("el-card"),q=s("pagination"),V=Q("loading");return u(),f(m,{class:"panel"},{default:n(()=>[o(h,{span:24},{default:n(()=>[o(m,null,{default:n(()=>[o(h,{span:24},{default:n(()=>[r("h2",U,i(e.$t("common.title.allUsages")),1)]),_:1})]),_:1}),o(m,{class:"mb-4"},{default:n(()=>[o(h,{span:8},{default:n(()=>[r("span",ee,i(e.$t("usage.field.application")),1),o(v,{modelValue:e.applicationId,"onUpdate:modelValue":t[0]||(t[0]=a=>e.applicationId=a),placeholder:e.$t("usage.field.application"),clearable:"",onChange:e.onApplicationChange},{default:n(()=>[(u(!0),g(b,null,$(e.applications,a=>{var c;return u(),f(y,{key:a.id,label:(c=a.service)==null?void 0:c.title,value:a==null?void 0:a.id},null,8,["label","value"])}),128))]),_:1},8,["modelValue","placeholder","onChange"])]),_:1}),o(h,{span:8},{default:n(()=>[r("span",te,i(e.$t("usage.field.api")),1),o(v,{modelValue:e.apiId,"onUpdate:modelValue":t[1]||(t[1]=a=>e.apiId=a),placeholder:e.$t("usage.field.api"),clearable:"",onChange:e.onApiChange},{default:n(()=>[(u(!0),g(b,null,$(e.apis,a=>(u(),f(y,{key:a==null?void 0:a.id,label:a==null?void 0:a.title,value:a==null?void 0:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder","onChange"])]),_:1})]),_:1}),o(m,null,{default:n(()=>[o(h,{span:24},{default:n(()=>[o(F,{shadow:"hover"},{default:n(()=>[K((u(),f(k,{data:e.apiUsages,stripe:"","table-layout":"fixed","empty-text":e.$t("common.message.noData")},{default:n(()=>[o(p,{label:e.$t("application.field.name"),width:"160px"},{default:n(a=>{var c,_;return[r("span",null,i((_=(c=a.row)==null?void 0:c.api)==null?void 0:_.title),1)]}),_:1},8,["label"]),o(p,{label:e.$t("usage.field.statusCode"),width:"120px"},{default:n(a=>[r("span",null,i(a.row.status_code),1)]),_:1},8,["label"]),o(p,{prop:"remaining_amount",label:e.$t("usage.field.remainingAmount"),width:"160px","class-name":"text-center"},{default:n(a=>[r("span",null,i(e.getRemainingAmount(a.row)),1)]),_:1},8,["label"]),o(p,{prop:"deducted_amount",label:e.$t("usage.field.deductedAmount"),width:"150px","class-name":"text-center"},{default:n(a=>[r("span",null,i(e.getDeductedAmount(a.row)),1)]),_:1},8,["label"]),o(p,{prop:"metadata",label:e.$t("usage.field.metadata"),width:"200px","class-name":"text-center"},{default:n(a=>[(u(!0),g(b,null,$(a.row.metadata,(c,_)=>(u(),f(A,{key:_,class:"mb-2"},{default:n(()=>[X(i(_)+": "+i(c),1)]),_:2},1024))),128))]),_:1},8,["label"]),o(p,{prop:"trace_id",label:e.$t("application.field.traceId"),width:"200px","class-name":"text-center"},{default:n(a=>[r("span",ae,i(a.row.trace_id),1),a.row.trace_id?(u(),g("span",ne,[o(I,{content:a.row.trace_id,class:"inline-block"},null,8,["content"])])):W("v-if",!0)]),_:1},8,["label"]),o(p,{label:e.$t("usage.field.createdAt"),width:"200px"},{default:n(a=>[r("span",oe,i(e.$dayjs.format(a.row.created_at)),1)]),_:1},8,["label"])]),_:1},8,["data","empty-text"])),[[V,e.loading]])]),_:1})]),_:1})]),_:1}),o(m,null,{default:n(()=>[o(h,{span:10,offset:14},{default:n(()=>[r("div",le,[o(q,{"current-page":e.page,"page-size":e.limit,total:e.total,onChange:e.onPageChange},null,8,["current-page","page-size","total","onChange"])])]),_:1})]),_:1})]),_:1})]),_:1})}var ve=L(x,[["render",ie],["__scopeId","data-v-1d3a6fa8"],["__file","D:/react/Nexior/src/pages/console/usage/List.vue"]]);export{ve as default};
