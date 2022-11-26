import{p as k}from"./pickBy.d4a4a126.js";import{L as M}from"./Layout.72e62578.js";import{t as C}from"./throttle.16243867.js";import{S as V,m as T}from"./SearchFilter.bf00a9ce.js";import{P as j}from"./Pagination.11881623.js";import{M as B}from"./Modal.8e1ec7a9.js";import N from"./Show.7431f098.js";import{_ as O,r as d,o as a,c as m,a as t,t as l,b as r,e as f,F as A,j as L,d as p,h as S,f as $}from"./app.c477e1f2.js";import{m as D}from"./md5.2ef7b393.js";import"./debounce.5f1ffd28.js";import"./Dropdown.dd8d2278.js";import"./FlashMessages.b2d5d0a9.js";const I={layout:M,components:{Pagination:j,SearchFilter:V,Modal:B,MeasurementComponent:N},props:{measurements:Object,filters:Object},metaInfo(){return{title:this.$tc("Measurement",2)}},data(){return{form:{search:this.filters.search,trashed:this.filters.trashed},sending:!1,confirm:!1,send_sms:!1,emailing:!1,message:null,dialogButtonText:null,dialogAction:null,dialogTitle:null,dialogBody:null,viewMeasurement:!1}},watch:{form:{handler:C(function(){let e=k(this.form);this.$inertia.replace(this.route("measurements",Object.keys(e).length?e:{remember:"forget"}))},250),deep:!0}},methods:{rowClicked(e){fetch(this.route("measurements.show",[e.id,D.exports(e.name)])+"?ajax=1").then(n=>{n.json().then(c=>{this.measurement=c,this.viewMeasurement=!0})})},reset(){this.form=T(this.form,()=>null)},displayExtra(e){let n="";return Array.isArray(e)&&e.map((c,g)=>{for(let[o,i]of Object.entries(c))if(i&&i.includes("{")&&i.includes("}")&&i.includes(":")){n+=`<span class="inline-block"><strong>${o}</strong>: `;const _=JSON.parse(i);for(let[u,h]of Object.entries(_))h?n+=`<span class="inline-block text-green-600 ltr:mr-2 rtl:ml-2">&#10003; ${u},</span> `:n+=`<span class="inline-block text-red-500 ltr:mr-2 rtl:ml-2">&#10005; ${u},</span> `;n+="</span>"}else n+=`<span class="inline-block"><strong>${o}</strong>: ${i},</span> `}),n}}},F={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},P={class:"np mb-6 flex justify-between items-center"},E={class:"block text-gray-700"},R={class:"inline md:hidden"},U={class:"hidden md:inline"},q={class:"bg-white rounded shadow overflow-x-auto scroll-on-light"},J={class:"w-full whitespace-no-wrap leading-normal"},W={class:"text-left font-bold"},z={class:"px-6 pt-6 pb-4"},G={class:"px-6 pt-6 pb-4"},H={class:"px-6 pt-6 pb-4"},K={class:"px-6 pt-6 pb-4"},Q={class:"px-6 pt-6 pb-4"},X={class:"px-6 pt-6 pb-4",colspan:"2"},Y=["onClick"],Z={class:"border-t px-6 py-4 w-56"},ee={class:"flex items-center"},te={class:"border-t px-6 py-4 w-40"},se={key:0},oe={class:"border-t px-6 py-4 w-48"},ne={key:0},le={class:"border-t px-6 py-4 w-48"},re={key:0},ie={class:"border-t px-6 py-4 w-48"},ae={key:0},ce={class:"border-t px-6 py-4 max-w-lg truncate"},de={class:"border-t px-6 py-4 w-8"},me={key:0},pe={class:"border-t px-6 py-4",colspan:"5"};function he(e,n,c,g,o,i){const _=d("v-select"),u=d("search-filter"),h=d("Icons"),w=d("Link"),y=d("pagination"),v=d("MeasurementComponent"),x=d("Modal"),b=d("Dialog");return a(),m("div",null,[t("h1",F,l(e.$tc("Measurement",2)),1),t("div",P,[r(u,{modelValue:o.form.search,"onUpdate:modelValue":n[1]||(n[1]=s=>o.form.search=s),class:"w-full max-w-md ltr:mr-4 rtl:ml-4",onReset:i.reset},{default:f(()=>[t("label",E,l(e.$t("Trashed")),1),r(_,{modelValue:o.form.trashed,"onUpdate:modelValue":n[0]||(n[0]=s=>o.form.trashed=s),options:[{value:"",label:"Not Trashed"},{value:"with",label:e.$t("With Trashed")},{value:"only",label:e.$t("Only Trashed")}],reduce:s=>s.value},null,8,["modelValue","options","reduce"])]),_:1},8,["modelValue","onReset"]),r(w,{class:"btn-gray",href:e.route("measurements.create")},{default:f(()=>[t("span",R,[r(h,{name:"add",class:"w-4 h-4 fill-white group-hover:fill-white"})]),t("span",U,l(e.$t("create_x",{x:e.$tc("Measurement")})),1)]),_:1},8,["href"])]),t("div",q,[t("table",J,[t("thead",null,[t("tr",W,[t("th",z,l(e.$t("Name")),1),t("th",G,l(e.$tc("Service")),1),t("th",H,l(e.$tc("Customer")),1),t("th",K,l(e.$tc("Price")),1),t("th",Q,l(e.$tc("Appointment Time")),1),t("th",X,l(e.$t("Description")),1)])]),t("tbody",null,[(a(!0),m(A,null,L(c.measurements.data,s=>(a(),m("tr",{key:s.id,onClick:ue=>i.rowClicked(s),class:"cursor-pointer hover:bg-teal-200 focus-within:bg-teal-200"},[t("td",Z,[t("div",ee,[S(l(s.name)+" ",1),s.deleted_at?(a(),$(h,{key:0,name:"trash",class:"flex-shrink-0 w-3 h-3 fill-gray-400 ltr:ml-2 rtl:mr-2"})):p("",!0)])]),t("td",te,[s.service_id?(a(),m("div",se,l(s.service),1)):p("",!0)]),t("td",oe,[s.customer_id?(a(),m("div",ne,l(s.customer),1)):p("",!0)]),t("td",le,[s.price?(a(),m("div",re,l(s.price),1)):p("",!0)]),t("td",ie,[s.appointment?(a(),m("div",ae,l(s.appointment),1)):p("",!0)]),t("td",ce,l(s.measurement),1),t("td",de,[r(h,{name:"cheveron-right",class:"block w-6 h-6 fill-gray-400 rtl:rotate"})])],8,Y))),128)),c.measurements.data.length===0?(a(),m("tr",me,[t("td",pe,l(e.$t("no_x_found",{x:e.$tc("Measurement")})),1)])):p("",!0)])])]),r(y,{links:c.measurements.links,meta:c.measurements.meta},null,8,["links","meta"]),r(x,{show:o.viewMeasurement,"max-width":"2xl",closeable:!0,onClose:n[3]||(n[3]=s=>o.viewMeasurement=!1)},{default:f(()=>[r(v,{measurement:e.measurement,onClose:n[2]||(n[2]=()=>o.viewMeasurement=!1)},null,8,["measurement"])]),_:1},8,["show"]),r(b,{show:o.message,content:o.message,close:()=>o.message=null},null,8,["show","content","close"]),r(b,{show:o.confirm,close:()=>o.confirm=!1,"action-text":o.dialogButtonText,action:o.dialogAction,title:o.dialogTitle,content:o.dialogBody},null,8,["show","close","action-text","action","title","content"])])}const Te=O(I,[["render",he]]);export{Te as default};
