import{p as w}from"./pickBy.3cfb51c6.js";import{L as g}from"./Layout.d6a79640.js";import{t as k}from"./throttle.f346aa23.js";import{S as x,m as v}from"./SearchFilter.07f28487.js";import{P as C}from"./Pagination.ee17aaf6.js";import{_ as V,r as l,o as r,c as d,a as t,t as o,b as a,e as p,F as $,j as N,d as _,h as j,f as B}from"./app.8ddcea91.js";import"./debounce.f7dd0f3d.js";import"./Dropdown.20880cca.js";import"./FlashMessages.3374db0a.js";const L={layout:g,components:{Pagination:C,SearchFilter:x},props:{contacts:Object,filters:Object},metaInfo(){return{title:this.$tc("Contact",2)}},data(){return{form:{search:this.filters.search,trashed:this.filters.trashed}}},watch:{form:{handler:k(function(){let e=w(this.form);this.$inertia.replace(this.route("contacts",Object.keys(e).length?e:{remember:"forget"}))},250),deep:!0}},methods:{rowClicked(e){this.$inertia.visit(this.route("contacts.edit",e))},reset(){this.form=v(this.form,()=>null)}}},T={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},I={class:"np mb-6 flex justify-between items-center"},O={class:"block text-gray-700"},F={class:"inline md:hidden"},P={class:"hidden md:inline"},S={class:"bg-white rounded shadow overflow-x-auto scroll-on-light"},D={class:"w-full whitespace-no-wrap"},E={class:"text-left font-bold"},R={class:"px-6 pt-6 pb-4"},U={class:"px-6 pt-6 pb-4"},q={class:"px-6 pt-6 pb-4"},W={class:"px-6 pt-6 pb-4",colspan:"2"},z=["onClick"],A={class:"border-t px-6 py-4"},G={class:"flex items-center"},H={class:"border-t px-6 py-4"},J={class:"border-t px-6 py-4"},K={class:"border-t px-6 py-4 max-w-lg truncate"},M={class:"border-t px-6 py-4 w-8"},Q={key:0},X={class:"border-t px-6 py-4",colspan:"5"};function Y(e,n,i,Z,c,m){const u=l("v-select"),f=l("search-filter"),h=l("Icons"),b=l("Link"),y=l("pagination");return r(),d("div",null,[t("h1",T,o(e.$tc("Contact",2)),1),t("div",I,[a(f,{modelValue:c.form.search,"onUpdate:modelValue":n[1]||(n[1]=s=>c.form.search=s),class:"w-full max-w-md ltr:mr-4 rtl:ml-4",onReset:m.reset},{default:p(()=>[t("label",O,o(e.$t("Trashed")),1),a(u,{modelValue:c.form.trashed,"onUpdate:modelValue":n[0]||(n[0]=s=>c.form.trashed=s),options:[{value:"",label:"Not Trashed"},{value:"with",label:e.$t("With Trashed")},{value:"only",label:e.$t("Only Trashed")}],reduce:s=>s.value},null,8,["modelValue","options","reduce"])]),_:1},8,["modelValue","onReset"]),a(b,{class:"btn-gray",href:e.route("contacts.create")},{default:p(()=>[t("span",F,[a(h,{name:"add",class:"w-4 h-4 fill-white group-hover:fill-white"})]),t("span",P,o(e.$t("create_x",{x:e.$tc("Contact")})),1)]),_:1},8,["href"])]),t("div",S,[t("table",D,[t("thead",null,[t("tr",E,[t("th",R,o(e.$t("Name")),1),t("th",U,o(e.$t("Phone")),1),t("th",q,o(e.$t("Email")),1),t("th",W,o(e.$t("Description")),1)])]),t("tbody",null,[(r(!0),d($,null,N(i.contacts.data,s=>(r(),d("tr",{key:s.id,onClick:tt=>m.rowClicked(s.id),class:"cursor-pointer hover:bg-teal-200 focus-within:bg-teal-200"},[t("td",A,[t("div",G,[j(o(s.name)+" ",1),s.deleted_at?(r(),B(h,{key:0,name:"trash",class:"flex-shrink-0 w-3 h-3 fill-gray-400 ml-2"})):_("",!0)])]),t("td",H,o(s.phone),1),t("td",J,o(s.email),1),t("td",K,o(s.description),1),t("td",M,[a(h,{name:"cheveron-right",class:"block w-6 h-6 fill-gray-400 rtl:rotate"})])],8,z))),128)),i.contacts.data.length===0?(r(),d("tr",Q,[t("td",X,o(e.$t("no_x_found",{x:e.$tc("Contact")})),1)])):_("",!0)])])]),a(y,{links:i.contacts.links,meta:i.contacts.meta},null,8,["links","meta"])])}const dt=V(L,[["render",Y]]);export{dt as default};
