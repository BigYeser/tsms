import{p as M}from"./pickBy.9bed0a42.js";import{L as C}from"./Layout.1f2db668.js";import{t as j}from"./throttle.6042b3cf.js";import{S as V,m as N}from"./SearchFilter.a636b278.js";import{P as T}from"./Pagination.805cc8aa.js";import{M as B}from"./Modal.657bfa6f.js";import O from"./Show.219f7ca0.js";import{_ as S,r as d,o as c,c as m,a as t,t as l,b as i,e as _,F as A,j as L,d as h,h as D,f as I}from"./app.13cf04d7.js";import{m as g}from"./md5.2ef7b393.js";import"./debounce.19aa9bf6.js";import"./Dropdown.1a48d225.js";import"./FlashMessages.88e018f3.js";const $={layout:C,components:{Pagination:T,SearchFilter:V,Modal:B,MeasurementComponent:O},props:{measurements:Object,filters:Object},metaInfo(){return{title:this.$tc("Measurement",2)}},data(){return{form:{search:this.filters.search,trashed:this.filters.trashed},sending:!1,confirm:!1,send_sms:!1,emailing:!1,message:null,dialogButtonText:null,dialogAction:null,dialogTitle:null,dialogBody:null,viewMeasurement:!1}},watch:{form:{handler:j(function(){let e=M(this.form);this.$inertia.replace(this.route("measurements",Object.keys(e).length?e:{remember:"forget"}))},250),deep:!0}},methods:{rowClicked(e){fetch(this.route("measurements.show",[e.id,g.exports(e.name)])+"?ajax=1").then(s=>{s.json().then(r=>{this.measurement=r,this.viewMeasurement=!0})})},getServiceName(e){fetch(this.route("measurements.show",[e.id,g.exports(e.name)])+"?ajax=1").then(s=>{s.json().then(r=>{console.log(r)})})},getCoustomerName(e){fetch(this.route("measurements.show",[e.id,g.exports(e.name)])+"?ajax=1").then(s=>{s.json().then(r=>{console.log(r)})})},reset(){this.form=N(this.form,()=>null)},displayExtra(e){let s="";return Array.isArray(e)&&e.map((r,w)=>{for(let[n,a]of Object.entries(r))if(a&&a.includes("{")&&a.includes("}")&&a.includes(":")){s+=`<span class="inline-block"><strong>${n}</strong>: `;const f=JSON.parse(a);for(let[u,p]of Object.entries(f))p?s+=`<span class="inline-block text-green-600 ltr:mr-2 rtl:ml-2">&#10003; ${u},</span> `:s+=`<span class="inline-block text-red-500 ltr:mr-2 rtl:ml-2">&#10005; ${u},</span> `;s+="</span>"}else s+=`<span class="inline-block"><strong>${n}</strong>: ${a},</span> `}),s}}},F={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},P={class:"np mb-6 flex justify-between items-center"},E={class:"block text-gray-700"},R={class:"inline md:hidden"},U={class:"hidden md:inline"},q={class:"bg-white rounded shadow overflow-x-auto scroll-on-light"},J={class:"w-full whitespace-no-wrap leading-normal"},W={class:"text-left font-bold"},z={class:"px-6 pt-6 pb-4"},G={class:"px-6 pt-6 pb-4"},H={class:"px-6 pt-6 pb-4"},K={class:"px-6 pt-6 pb-4"},Q={class:"px-6 pt-6 pb-4"},X={class:"px-6 pt-6 pb-4",colspan:"2"},Y=["onClick"],Z={class:"border-t px-6 py-4 w-56"},ee={class:"flex items-center"},te={class:"border-t px-6 py-4 w-40"},se={key:0},oe={class:"border-t px-6 py-4 w-48"},ne={key:0},le={class:"border-t px-6 py-4 w-48"},re={key:0},ae={class:"border-t px-6 py-4 w-48"},ie={key:0},ce={class:"border-t px-6 py-4 max-w-lg truncate"},de={class:"border-t px-6 py-4 w-8"},me={key:0},he={class:"border-t px-6 py-4",colspan:"5"};function pe(e,s,r,w,n,a){const f=d("v-select"),u=d("search-filter"),p=d("Icons"),x=d("Link"),y=d("pagination"),v=d("MeasurementComponent"),k=d("Modal"),b=d("Dialog");return c(),m("div",null,[t("h1",F,l(e.$tc("Measurement",2)),1),t("div",P,[i(u,{modelValue:n.form.search,"onUpdate:modelValue":s[1]||(s[1]=o=>n.form.search=o),class:"w-full max-w-md ltr:mr-4 rtl:ml-4",onReset:a.reset},{default:_(()=>[t("label",E,l(e.$t("Trashed")),1),i(f,{modelValue:n.form.trashed,"onUpdate:modelValue":s[0]||(s[0]=o=>n.form.trashed=o),options:[{value:"",label:"Not Trashed"},{value:"with",label:e.$t("With Trashed")},{value:"only",label:e.$t("Only Trashed")}],reduce:o=>o.value},null,8,["modelValue","options","reduce"])]),_:1},8,["modelValue","onReset"]),i(x,{class:"btn-gray",href:e.route("measurements.create")},{default:_(()=>[t("span",R,[i(p,{name:"add",class:"w-4 h-4 fill-white group-hover:fill-white"})]),t("span",U,l(e.$t("create_x",{x:e.$tc("Measurement")})),1)]),_:1},8,["href"])]),t("div",q,[t("table",J,[t("thead",null,[t("tr",W,[t("th",z,l(e.$t("Name")),1),t("th",G,l(e.$tc("Service")),1),t("th",H,l(e.$tc("Customer")),1),t("th",K,l(e.$tc("Price")),1),t("th",Q,l(e.$tc("Appointment Time")),1),t("th",X,l(e.$t("Description")),1)])]),t("tbody",null,[(c(!0),m(A,null,L(r.measurements.data,o=>(c(),m("tr",{key:o.id,onClick:ue=>a.rowClicked(o),class:"cursor-pointer hover:bg-teal-200 focus-within:bg-teal-200"},[t("td",Z,[t("div",ee,[D(l(o.name)+" ",1),o.deleted_at?(c(),I(p,{key:0,name:"trash",class:"flex-shrink-0 w-3 h-3 fill-gray-400 ltr:ml-2 rtl:mr-2"})):h("",!0)])]),t("td",te,[o.service_id?(c(),m("div",se,l(o.service),1)):h("",!0)]),t("td",oe,[t("h1",null,l(a.getServiceName(o)),1),o.customer_id?(c(),m("div",ne,l(o.customer),1)):h("",!0)]),t("td",le,[o.price?(c(),m("div",re,l(o.price),1)):h("",!0)]),t("td",ae,[o.appointment?(c(),m("div",ie,l(o.appointment),1)):h("",!0)]),t("td",ce,l(o.measurement),1),t("td",de,[i(p,{name:"cheveron-right",class:"block w-6 h-6 fill-gray-400 rtl:rotate"})])],8,Y))),128)),r.measurements.data.length===0?(c(),m("tr",me,[t("td",he,l(e.$t("no_x_found",{x:e.$tc("Measurement")})),1)])):h("",!0)])])]),i(y,{links:r.measurements.links,meta:r.measurements.meta},null,8,["links","meta"]),i(k,{show:n.viewMeasurement,"max-width":"2xl",closeable:!0,onClose:s[3]||(s[3]=o=>n.viewMeasurement=!1)},{default:_(()=>[i(v,{measurement:e.measurement,onClose:s[2]||(s[2]=()=>n.viewMeasurement=!1)},null,8,["measurement"])]),_:1},8,["show"]),i(b,{show:n.message,content:n.message,close:()=>n.message=null},null,8,["show","content","close"]),i(b,{show:n.confirm,close:()=>n.confirm=!1,"action-text":n.dialogButtonText,action:n.dialogAction,title:n.dialogTitle,content:n.dialogBody},null,8,["show","close","action-text","action","title","content"])])}const Ve=S($,[["render",pe]]);export{Ve as default};
