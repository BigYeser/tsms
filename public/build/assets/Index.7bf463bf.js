import{p as M}from"./pickBy.5f112847.js";import{L as C}from"./Layout.3a401d79.js";import{t as j}from"./throttle.8f98f0f9.js";import{S as V,m as T}from"./SearchFilter.7e66afd9.js";import{P as B}from"./Pagination.b51f471e.js";import{M as N}from"./Modal.ef52202c.js";import O from"./Show.bf0ea561.js";import{_ as A,r as c,o as m,c as d,a as t,t as l,b as i,e as _,F as L,j as D,d as p,h as I,f as S}from"./app.32f019e9.js";import{m as b}from"./md5.2ef7b393.js";import"./debounce.4878b41e.js";import"./Dropdown.42df78bf.js";import"./FlashMessages.b8b6d3eb.js";const F={layout:C,components:{Pagination:B,SearchFilter:V,Modal:N,MeasurementComponent:O},props:{measurements:Object,filters:Object},metaInfo(){return{title:this.$tc("Measurement",2)}},data(){return{form:{search:this.filters.search,trashed:this.filters.trashed},sending:!1,confirm:!1,send_sms:!1,emailing:!1,message:null,dialogButtonText:null,dialogAction:null,dialogTitle:null,dialogBody:null,viewMeasurement:!1}},watch:{form:{handler:j(function(){let e=M(this.form);this.$inertia.replace(this.route("measurements",Object.keys(e).length?e:{remember:"forget"}))},250),deep:!0}},methods:{rowClicked(e){fetch(this.route("measurements.show",[e.id,b.exports(e.name)])+"?ajax=1").then(s=>{s.json().then(r=>{this.measurement=r,this.viewMeasurement=!0})})},getCustomerName(e){fetch(this.route("measurements.show",[e.id,b.exports(e.name)])+"?ajax=1").then(s=>{s.json().then(r=>(console.log(r),console.log(customer.name),r.customer.name))})},reset(){this.form=T(this.form,()=>null)},displayExtra(e){let s="";return Array.isArray(e)&&e.map((r,w)=>{for(let[o,a]of Object.entries(r))if(a&&a.includes("{")&&a.includes("}")&&a.includes(":")){s+=`<span class="inline-block"><strong>${o}</strong>: `;const f=JSON.parse(a);for(let[u,h]of Object.entries(f))h?s+=`<span class="inline-block text-green-600 ltr:mr-2 rtl:ml-2">&#10003; ${u},</span> `:s+=`<span class="inline-block text-red-500 ltr:mr-2 rtl:ml-2">&#10005; ${u},</span> `;s+="</span>"}else s+=`<span class="inline-block"><strong>${o}</strong>: ${a},</span> `}),s}}},P={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},$={class:"np mb-6 flex justify-between items-center"},E={class:"block text-gray-700"},R={class:"inline md:hidden"},U={class:"hidden md:inline"},q={class:"bg-white rounded shadow overflow-x-auto scroll-on-light"},J={class:"w-full whitespace-no-wrap leading-normal"},W={class:"text-left font-bold"},z={class:"px-6 pt-6 pb-4"},G={class:"px-6 pt-6 pb-4"},H={class:"px-6 pt-6 pb-4"},K={class:"px-6 pt-6 pb-4"},Q={class:"px-6 pt-6 pb-4",colspan:"2"},X=["onClick"],Y={class:"border-t px-6 py-4 w-56"},Z={class:"flex items-center"},ee={class:"border-t px-6 py-4 w-48"},te={key:0},se={class:"border-t px-6 py-4 w-48"},oe={key:0},ne={class:"border-t px-6 py-4 w-48"},le={key:0},re={class:"border-t px-6 py-4 max-w-lg truncate"},ae={class:"border-t px-6 py-4 w-8"},ie={key:0},ce={class:"border-t px-6 py-4",colspan:"5"};function me(e,s,r,w,o,a){const f=c("v-select"),u=c("search-filter"),h=c("Icons"),y=c("Link"),x=c("pagination"),k=c("MeasurementComponent"),v=c("Modal"),g=c("Dialog");return m(),d("div",null,[t("h1",P,l(e.$tc("Measurement",2)),1),t("div",$,[i(u,{modelValue:o.form.search,"onUpdate:modelValue":s[1]||(s[1]=n=>o.form.search=n),class:"w-full max-w-md ltr:mr-4 rtl:ml-4",onReset:a.reset},{default:_(()=>[t("label",E,l(e.$t("Trashed")),1),i(f,{modelValue:o.form.trashed,"onUpdate:modelValue":s[0]||(s[0]=n=>o.form.trashed=n),options:[{value:"",label:"Not Trashed"},{value:"with",label:e.$t("With Trashed")},{value:"only",label:e.$t("Only Trashed")}],reduce:n=>n.value},null,8,["modelValue","options","reduce"])]),_:1},8,["modelValue","onReset"]),i(y,{class:"btn-gray",href:e.route("measurements.create")},{default:_(()=>[t("span",R,[i(h,{name:"add",class:"w-4 h-4 fill-white group-hover:fill-white"})]),t("span",U,l(e.$t("create_x",{x:e.$tc("Measurement")})),1)]),_:1},8,["href"])]),t("div",q,[t("table",J,[t("thead",null,[t("tr",W,[t("th",z,l(e.$t("Name")),1),t("th",G,l(e.$tc("Customer")),1),t("th",H,l(e.$tc("Price")),1),t("th",K,l(e.$tc("Appointment Time")),1),t("th",Q,l(e.$t("Description")),1)])]),t("tbody",null,[(m(!0),d(L,null,D(r.measurements.data,n=>(m(),d("tr",{key:n.id,onClick:de=>a.rowClicked(n),class:"cursor-pointer hover:bg-teal-200 focus-within:bg-teal-200"},[t("td",Y,[t("div",Z,[I(l(n.name)+" ",1),n.deleted_at?(m(),S(h,{key:0,name:"trash",class:"flex-shrink-0 w-3 h-3 fill-gray-400 ltr:ml-2 rtl:mr-2"})):p("",!0)])]),t("td",ee,[n.customer_id?(m(),d("div",te,l(a.getCustomerName(n)),1)):p("",!0)]),t("td",se,[n.price?(m(),d("div",oe,l(n.price),1)):p("",!0)]),t("td",ne,[n.appointment?(m(),d("div",le,l(n.appointment),1)):p("",!0)]),t("td",re,l(n.measurement),1),t("td",ae,[i(h,{name:"cheveron-right",class:"block w-6 h-6 fill-gray-400 rtl:rotate"})])],8,X))),128)),r.measurements.data.length===0?(m(),d("tr",ie,[t("td",ce,l(e.$t("no_x_found",{x:e.$tc("Measurement")})),1)])):p("",!0)])])]),i(x,{links:r.measurements.links,meta:r.measurements.meta},null,8,["links","meta"]),i(v,{show:o.viewMeasurement,"max-width":"2xl",closeable:!0,onClose:s[3]||(s[3]=n=>o.viewMeasurement=!1)},{default:_(()=>[i(k,{measurement:e.measurement,onClose:s[2]||(s[2]=()=>o.viewMeasurement=!1)},null,8,["measurement"])]),_:1},8,["show"]),i(g,{show:o.message,content:o.message,close:()=>o.message=null},null,8,["show","content","close"]),i(g,{show:o.confirm,close:()=>o.confirm=!1,"action-text":o.dialogButtonText,action:o.dialogAction,title:o.dialogTitle,content:o.dialogBody},null,8,["show","close","action-text","action","title","content"])])}const Me=A(F,[["render",me]]);export{Me as default};
