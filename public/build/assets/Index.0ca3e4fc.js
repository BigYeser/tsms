import{L as k,I as w}from"./Layout.eb136939.js";import{p as g}from"./pickBy.05e586ef.js";import{t as x}from"./throttle.c0b7602d.js";import{S as $,m as V}from"./SearchFilter.17c7b097.js";import{P as C}from"./Pagination.d063afe4.js";import{_ as S,r as a,o as r,c as h,a as e,t as o,b as l,e as _,F as I,j as N,d as m,h as j,f as u}from"./app.23d2577b.js";import"./Dropdown.0976c45f.js";import"./FlashMessages.1d6a364f.js";import"./debounce.4b75d9a5.js";const B={layout:k,props:{services:Object,filters:Object},components:{Icon:w,Pagination:C,SearchFilter:$},metaInfo(){return{title:this.$tc("Service",2)}},data(){return{form:{search:this.filters.search,trashed:this.filters.trashed}}},watch:{form:{handler:x(function(){let t=g(this.form);this.$inertia.replace(this.route("services",Object.keys(t).length?t:{remember:"forget"}))},250),deep:!0}},methods:{rowClicked(t){this.$inertia.visit(this.route("services.edit",t))},reset(){this.form=V(this.form,()=>null)}}},L={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},T={class:"np mb-6 flex justify-between items-center"},O={class:"block text-gray-700"},F={class:"inline md:hidden"},P={class:"hidden md:inline"},D={class:"bg-white rounded shadow overflow-x-auto scroll-on-light"},R={class:"w-full whitespace-no-wrap"},U={class:"text-left font-bold"},q={class:"px-6 pt-6 pb-4"},A={class:"px-6 pt-6 pb-4"},E={class:"px-6 pt-6 pb-4"},W={class:"px-6 pt-6 pb-4"},z={class:"px-6 pt-6 pb-4",colspan:"2"},G=["onClick"],H={class:"border-t px-6 py-4"},J={class:"flex items-center"},K={class:"border-t px-6 py-4"},M={class:"border-t px-6 py-4"},Q={class:"border-t px-6 py-4"},X={class:"border-t px-6 py-4 max-w-lg truncate"},Y={class:"border-t px-6 py-4 w-8"},Z={key:0},ee={class:"border-t px-6 py-4",colspan:"5"};function te(t,n,i,se,c,p){const f=a("v-select"),b=a("search-filter"),d=a("Icons"),y=a("Link"),v=a("pagination");return r(),h("div",null,[e("h1",L,o(t.$tc("Service",2)),1),e("div",T,[l(b,{modelValue:c.form.search,"onUpdate:modelValue":n[1]||(n[1]=s=>c.form.search=s),class:"w-full max-w-md ltr:mr-4 rtl:ml-4",onReset:p.reset},{default:_(()=>[e("label",O,o(t.$t("Trashed")),1),l(f,{modelValue:c.form.trashed,"onUpdate:modelValue":n[0]||(n[0]=s=>c.form.trashed=s),options:[{value:"",label:"Not Trashed"},{value:"with",label:t.$t("With Trashed")},{value:"only",label:t.$t("Only Trashed")}],reduce:s=>s.value},null,8,["modelValue","options","reduce"])]),_:1},8,["modelValue","onReset"]),l(y,{class:"btn-gray",href:t.route("services.create")},{default:_(()=>[e("span",F,[l(d,{name:"add",class:"w-4 h-4 fill-white group-hover:fill-white"})]),e("span",P,o(t.$t("create_x",{x:t.$tc("Service")})),1)]),_:1},8,["href"])]),e("div",D,[e("table",R,[e("thead",null,[e("tr",U,[e("th",q,o(t.$t("Code")),1),e("th",A,o(t.$t("Active")),1),e("th",E,o(t.$t("Name")),1),e("th",W,o(t.$t("Price")),1),e("th",z,o(t.$t("Description")),1)])]),e("tbody",null,[(r(!0),h(I,null,N(i.services.data,s=>(r(),h("tr",{key:s.id,onClick:oe=>p.rowClicked(s.id),class:"cursor-pointer hover:bg-teal-200 focus-within:bg-teal-200"},[e("td",H,[e("div",J,[j(o(s.code)+" ",1),s.deleted_at?(r(),u(d,{key:0,name:"trash",class:"flex-shrink-0 w-3 h-3 fill-gray-400 ml-2"})):m("",!0)])]),e("td",K,[s.active?(r(),u(d,{key:0,name:"check",class:"flex-shrink-0 w-3 h-3 fill-green-600 ltr:mr-2 rtl:ml-2"})):m("",!0)]),e("td",M,o(s.name),1),e("td",Q,o(t.$number(s.price)),1),e("td",X,o(s.description),1),e("td",Y,[l(d,{name:"cheveron-right",class:"block w-6 h-6 fill-gray-400 rtl:rotate"})])],8,G))),128)),i.services.data.length===0?(r(),h("tr",Z,[e("td",ee,o(t.$t("no_x_found",{x:t.$tc("Service")})),1)])):m("",!0)])])]),l(v,{links:i.services.links,meta:i.services.meta},null,8,["links","meta"])])}const pe=S(B,[["render",te]]);export{pe as default};
