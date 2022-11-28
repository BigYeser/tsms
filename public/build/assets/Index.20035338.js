import{L as w,I as x}from"./Layout.9b6e59e1.js";import{p as y}from"./pickBy.e89e1fd9.js";import{t as V}from"./throttle.cdd02a1b.js";import{S as $,m as C}from"./SearchFilter.cefa4ad8.js";import{P as S}from"./Pagination.29fbc657.js";import{L}from"./LoadingButton.983fbd4f.js";import{_ as B,r as c,o as n,c as l,a as e,t as o,b as i,e as u,d as h,h as _,F as I,j as N,f}from"./app.c4c7ebd1.js";import"./Dropdown.4988beb9.js";import"./FlashMessages.14b2d0e3.js";import"./debounce.58cbf387.js";const j={metaInfo:{title:"Salaries"},layout:w,components:{Icon:x,Pagination:S,SearchFilter:$,LoadingButton:L},props:{salaries:Object,filters:Object},data(){return{form:{search:this.filters.search,trashed:this.filters.trashed},sending:!1}},watch:{form:{handler:V(function(){let t=y(this.form);this.$inertia.replace(this.route("salaries",Object.keys(t).length?t:{remember:"forget"}))},250),deep:!0}},methods:{rowClicked(t){this.$inertia.visit(this.route("salaries.edit",t))},reset(){this.form=C(this.form,()=>null)},generateSalaries(){this.sending=!0,this.$inertia.post(this.route("salaries.generate"),{onFinish:()=>this.sending=!1})}}},T={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},F={class:"np mb-6 flex justify-between items-center"},O={class:"block text-gray-700"},D=["disabled"],A={key:0,class:"btn-spinner ltr:mr-2 rtl:ml-2"},P={class:"inline md:hidden"},R={class:"hidden md:inline"},U={class:"bg-white rounded shadow overflow-x-auto scroll-on-light"},q={class:"w-full whitespace-no-wrap"},E={class:"text-left font-bold"},G={class:"px-6 pt-6 pb-4"},W={class:"px-6 pt-6 pb-4"},z={class:"px-6 pt-6 pb-4"},H={class:"px-6 pt-6 pb-4"},J={class:"px-6 pt-6 pb-4",colspan:"2"},K=["onClick"],M={class:"border-t px-6 py-4"},Q={class:"flex items-center"},X={class:"border-t px-6 py-4 leading-normal"},Y={key:0},Z={class:"border-t px-6 py-4 text-right font-bold"},ee={key:0},te={class:"border-t px-6 py-4 text-center w-16"},se={class:"border-t px-6 py-4 max-w-lg truncate"},oe={class:"border-t px-6 py-4 w-8"},ne={key:0},le={class:"border-t px-6 py-4",colspan:"6"};function ae(t,a,m,re,r,p){const b=c("v-select"),g=c("search-filter"),d=c("Icons"),k=c("Link"),v=c("pagination");return n(),l("div",null,[e("h1",T,o(t.$t("Salaries")),1),e("div",F,[i(g,{modelValue:r.form.search,"onUpdate:modelValue":a[1]||(a[1]=s=>r.form.search=s),class:"w-full max-w-md ltr:mr-4 rtl:ml-4",onReset:p.reset},{default:u(()=>[e("label",O,o(t.$t("Trashed")),1),i(b,{modelValue:r.form.trashed,"onUpdate:modelValue":a[0]||(a[0]=s=>r.form.trashed=s),options:[{value:"",label:"Not Trashed"},{value:"with",label:t.$t("With Trashed")},{value:"only",label:t.$t("Only Trashed")}],reduce:s=>s.value},null,8,["modelValue","options","reduce"])]),_:1},8,["modelValue","onReset"]),e("div",null,[e("button",{disabled:r.sending,class:"inline-flex items-center btn-gray ltr:mr-2 rtl:ml-2",onClick:a[2]||(a[2]=s=>p.generateSalaries())},[r.sending?(n(),l("div",A)):h("",!0),_(" "+o(t.$t("Generate")),1)],8,D),i(k,{class:"btn-gray",href:t.route("salaries.create")},{default:u(()=>[e("span",P,[i(d,{name:"add",class:"w-4 h-4 fill-white group-hover:fill-white"})]),e("span",R,o(t.$t("Create Salary")),1)]),_:1},8,["href"])])]),e("div",U,[e("table",q,[e("thead",null,[e("tr",E,[e("th",G,o(t.$t("Date")),1),e("th",W,o(t.$t("Staff")),1),e("th",z,o(t.$t("Amount")),1),e("th",H,o(t.$t("Advance")),1),e("th",J,o(t.$t("Description")),1)])]),e("tbody",null,[(n(!0),l(I,null,N(m.salaries.data,s=>(n(),l("tr",{key:s.id,onClick:ie=>p.rowClicked(s.id),class:"cursor-pointer hover:bg-teal-200 focus-within:bg-teal-200"},[e("td",M,[e("div",Q,[_(o(t.$date(s.date))+" ",1),s.deleted_at?(n(),f(d,{key:0,name:"trash",class:"flex-shrink-0 w-3 h-3 fill-gray-400 ml-2"})):h("",!0)])]),e("td",X,[s.staff?(n(),l("div",Y,[e("div",null,o(s.staff.name),1),e("div",null,o(s.staff.phone),1)])):h("",!0)]),e("td",Z,[e("div",null,o(t.$number(s.amount)),1),s.settled_on?(n(),l("div",ee,o(t.$date(s.settled_on)),1)):h("",!0)]),e("td",te,[s.advance?(n(),f(d,{key:0,name:"check",class:"flex-shrink-0 w-4 h-4 fill-green-500 mx-auto"})):(n(),f(d,{key:1,name:"cross",class:"flex-shrink-0 w-3 h-3 fill-red-500 mx-auto"}))]),e("td",se,o(s.description),1),e("td",oe,[i(d,{name:"cheveron-right",class:"block w-6 h-6 fill-gray-400 rtl:rotate"})])],8,K))),128)),m.salaries.data.length===0?(n(),l("tr",ne,[e("td",le,o(t.$t("No salaries found.")),1)])):h("",!0)])])]),i(v,{links:m.salaries.links,meta:m.salaries.meta},null,8,["links","meta"])])}const ke=B(j,[["render",ae]]);export{ke as default};