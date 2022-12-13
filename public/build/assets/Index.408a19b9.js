import{p as x}from"./pickBy.05be2ced.js";import{t as V}from"./throttle.6a94840c.js";import{S as C,m as M}from"./SearchFilter.cfed0418.js";import{L as P}from"./Layout.37bdfafd.js";import{M as j}from"./Modal.108570e1.js";import S from"./Show.bb6d7129.js";import{P as $}from"./Pagination.75c76d73.js";import{_ as N,r as i,o as d,c as m,a as t,t as o,b as r,e as f,h as c,F as B,j as L,d as u,f as y}from"./app.20ec5a05.js";import"./debounce.aa6138a8.js";import"./Dropdown.f2b1a913.js";import"./FlashMessages.12685a2e.js";import"./SmsDialog.174d6f2f.js";import"./LoadingButton.ce026a81.js";import"./TextareaInput.98fef14c.js";import"./InputError.6a093fcb.js";const T={layout:P,components:{Pagination:$,SearchFilter:C,Modal:j,ShowPayment:S},props:{payments:Object,filters:Object,message:String},metaInfo(){return{title:this.$tc("Payment",2)}},data(){return{form:{search:this.filters.search,gateway:this.filters.gateway,trashed:this.filters.trashed,received:this.filters.received},gateways:[],payment:null,viewModal:!1}},watch:{form:{handler:V(function(){let e=x(this.form);this.$inertia.replace(this.route("payments",Object.keys(e).length?e:{remember:"forget"}))},250),deep:!0}},created(){this.gateways=this.$page.props.user.account.gateways.split(",").map(e=>({value:e,label:e})),this.gateways.unshift({value:"",label:this.$t("All")})},methods:{rowClicked(e){fetch(this.route("payments.ajax",e)).then(l=>{l.json().then(n=>{this.payment=n,this.viewModal=!0})})},reset(){this.form=M(this.form,()=>null)}}},I={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},O={class:"np mb-6 flex justify-between items-center"},U={class:"block text-gray-700"},A={class:"mt-4 block text-gray-700"},F={class:"mt-4 block text-gray-700"},R={class:"inline md:hidden"},D={class:"hidden md:inline"},q={class:"bg-white rounded shadow leading-normal overflow-x-auto scroll-on-light"},E={class:"w-full whitespace-no-wrap"},G={class:"text-left font-bold"},W={class:"px-6 pt-6 pb-4"},z={class:"px-6 pt-6 pb-4"},H={class:"px-6 pt-6 pb-4"},J={class:"px-6 pt-6 pb-4",colspan:"2"},K=["onClick"],Q={class:"border-t px-6 py-4"},X={class:"flex items-center"},Y=t("br",null,null,-1),Z={class:"border-t px-6 py-4"},ee={key:0},te={class:"border-t px-6 py-4"},se={class:"ltr:mr-2 rtl:ml-2"},oe={class:"text-right font-bold flex items-center justify-end"},le={class:"border-t px-6 py-4 max-w-lg truncate"},ae={class:"border-t px-6 py-4 w-8"},re={key:0},ne={class:"border-t px-6 py-4",colspan:"5"};function ie(e,l,n,de,a,_){const p=i("v-select"),w=i("search-filter"),h=i("Icons"),b=i("Link"),v=i("pagination"),g=i("ShowPayment"),k=i("Modal");return d(),m("div",null,[t("div",null,[t("h1",I,o(e.$tc("Payment",2)),1),t("div",O,[r(w,{modelValue:a.form.search,"onUpdate:modelValue":l[3]||(l[3]=s=>a.form.search=s),class:"w-full max-w-md ltr:mr-4 rtl:ml-4",onReset:_.reset},{default:f(()=>[t("label",U,o(e.$t("Status")),1),r(p,{modelValue:a.form.received,"onUpdate:modelValue":l[0]||(l[0]=s=>a.form.received=s),options:[{value:"",label:"All"},{value:"yes",label:e.$t("Received")},{value:"no",label:e.$t("Not received yet")}],reduce:s=>s.value},null,8,["modelValue","options","reduce"]),t("label",A,o(e.$t("Gateway")),1),r(p,{options:a.gateways,modelValue:a.form.gateway,"onUpdate:modelValue":l[1]||(l[1]=s=>a.form.gateway=s),reduce:s=>s.value},null,8,["options","modelValue","reduce"]),t("label",F,o(e.$t("Trashed")),1),r(p,{modelValue:a.form.trashed,"onUpdate:modelValue":l[2]||(l[2]=s=>a.form.trashed=s),options:[{value:"",label:"Not Trashed"},{value:"with",label:e.$t("With Trashed")},{value:"only",label:e.$t("Only Trashed")}],reduce:s=>s.value},null,8,["modelValue","options","reduce"])]),_:1},8,["modelValue","onReset"]),r(b,{class:"btn-gray",href:e.route("payments.new")},{default:f(()=>[t("span",R,[r(h,{name:"add",class:"w-4 h-4 fill-white group-hover:fill-white"})]),t("span",D,o(e.$t("create_x",{x:e.$tc("Payment")})),1)]),_:1},8,["href"])]),c(" "+o(n.payments)+" ",1),t("div",q,[t("table",E,[t("thead",null,[t("tr",G,[t("th",W,o(e.$t("Created at")),1),t("th",z,o(e.$t("Customer")),1),t("th",H,o(e.$t("Amount")),1),t("th",J,o(e.$t("Description")),1)])]),t("tbody",null,[(d(!0),m(B,null,L(n.payments.data,s=>(d(),m("tr",{key:s.id,onClick:me=>_.rowClicked(s.id),class:"cursor-pointer hover:bg-teal-200 focus-within:bg-teal-200"},[t("td",Q,[t("div",X,[c(o(e.$date(s.date))+" ",1),s.deleted_at?(d(),y(h,{key:0,name:"trash",class:"flex-shrink-0 w-3 h-3 fill-gray-400 ml-2"})):u("",!0),Y,c(" "+o(e.$reference(s.reference)),1)])]),t("td",Z,[s.customer?(d(),m("div",ee,[c(o(s.customer.name)+" ",1),t("div",null,o(s.customer.phone),1)])):u("",!0)]),t("td",te,[t("div",se,o(s.gateway),1),t("div",oe,[s.received?(d(),y(h,{key:0,name:"check",class:"flex-shrink-0 w-3 h-3 fill-green-600 ltr:mr-2 rtl:ml-2"})):u("",!0),c(" "+o(e.$number(s.amount)),1)])]),t("td",le,o(s.description),1),t("td",ae,[r(h,{name:"cheveron-right",class:"block w-6 h-6 fill-gray-400 rtl:rotate"})])],8,K))),128)),n.payments.data.length===0?(d(),m("tr",re,[t("td",ne,o(e.$t("no_x_found",{x:e.$tc("Payment")})),1)])):u("",!0)])])]),r(v,{links:n.payments.links,meta:n.payments.meta},null,8,["links","meta"])]),r(k,{show:a.viewModal,"max-width":"2xl",closeable:!0,onClose:l[5]||(l[5]=()=>a.viewModal=!1)},{default:f(()=>[r(g,{payment:a.payment,onClose:l[4]||(l[4]=()=>a.viewModal=!1)},null,8,["payment"])]),_:1},8,["show"])])}const Me=N(T,[["render",ie]]);export{Me as default};