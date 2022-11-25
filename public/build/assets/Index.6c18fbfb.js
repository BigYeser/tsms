import{p as T}from"./pickBy.3cfb51c6.js";import{L as $}from"./Layout.d6a79640.js";import{t as F}from"./throttle.f346aa23.js";import{S,m as B}from"./SearchFilter.07f28487.js";import{M as N}from"./Modal.cbc26950.js";import{S as L}from"./SmsDialog.553695fc.js";import{P as M}from"./Pagination.ee17aaf6.js";import D from"./Form.50a7ddcb.js";import{_ as I,r as a,o as i,c,a as t,t as r,b as n,e as u,F as O,j as E,d as h,f as _,w,h as b}from"./app.8ddcea91.js";import"./debounce.f7dd0f3d.js";import"./Dropdown.20880cca.js";import"./FlashMessages.3374db0a.js";import"./LoadingButton.3b4cac2b.js";import"./TextareaInput.48ce32ba.js";import"./InputError.3a22df49.js";import"./TextInput.4dc813b8.js";import"./CheckboxInput.1cb3e74a.js";const R={layout:$,components:{Pagination:M,SearchFilter:S,SmsDialog:L,Modal:N,PaymentForm:D},props:{customers:Object,filters:Object},metaInfo(){return{title:this.$tc("Customer",2)}},data(){return{form:{search:this.filters.search,trashed:this.filters.trashed},viewsms:!1,view:!1,order:{},customer:{}}},watch:{form:{handler:F(function(){let e=T(this.form);this.$inertia.replace(this.route("customers",Object.keys(e).length?e:{remember:"forget"}))},250),deep:!0}},methods:{smsToCustomer(e){this.order.customer=e,this.viewsms=!0},journalTransactions(e){this.$inertia.visit(this.route("customers.transactions",e))},rowClicked(e){this.$inertia.visit(this.route("customers.edit",e))},reset(){this.form=B(this.form,()=>null)},addPayment(e){this.customer={value:e.id,label:e.name},this.view=!0}}},U={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},q={class:"np mb-6 flex justify-between items-center"},A={class:"block text-gray-700"},W={class:"inline md:hidden"},z={class:"hidden md:inline"},G={class:"bg-white rounded shadow overflow-x-auto scroll-on-light"},H={class:"w-full whitespace-no-wrap"},J={class:"text-left font-bold"},K={class:"px-6 pt-6 pb-4"},Q={class:"px-6 pt-6 pb-4"},X={class:"px-6 pt-6 pb-4"},Y={class:"px-6 pt-6 pb-4"},Z={class:"px-6 pt-6 pb-4",colspan:"2"},ee=["onClick"],te={class:"border-t px-6 py-4"},se={class:"flex items-center"},oe=["onClick"],re={class:"border-t px-6 py-4"},le={class:"flex items-center"},ne=["onClick"],ae={class:"border-t px-6 py-4"},ie={class:"border-t px-6 py-4 font-bold"},me={class:"flex items-center justify-end"},de=["onClick"],ce={class:"border-t px-6 py-4 max-w-lg truncate"},he={class:"border-t px-6 py-4 w-8"},pe={key:0},ue={class:"border-t px-6 py-4",colspan:"6"};function fe(e,l,p,_e,o,d){const k=a("v-select"),x=a("search-filter"),m=a("Icons"),C=a("Link"),V=a("pagination"),j=a("SmsDialog"),v=a("Modal"),P=a("PaymentForm");return i(),c("div",null,[t("div",null,[t("h1",U,r(e.$tc("Customer",2)),1),t("div",q,[n(x,{modelValue:o.form.search,"onUpdate:modelValue":l[1]||(l[1]=s=>o.form.search=s),class:"w-full max-w-md ltr:mr-4 rtl:ml-4",onReset:d.reset},{default:u(()=>[t("label",A,r(e.$t("Trashed")),1),n(k,{modelValue:o.form.trashed,"onUpdate:modelValue":l[0]||(l[0]=s=>o.form.trashed=s),options:[{value:"",label:"Not Trashed"},{value:"with",label:e.$t("With Trashed")},{value:"only",label:e.$t("Only Trashed")}],reduce:s=>s.value},null,8,["modelValue","options","reduce"])]),_:1},8,["modelValue","onReset"]),n(C,{class:"btn-gray",href:e.route("customers.create")},{default:u(()=>[t("span",W,[n(m,{name:"add",class:"w-4 h-4 fill-white group-hover:fill-white"})]),t("span",z,r(e.$t("create_x",{x:e.$tc("Customer")})),1)]),_:1},8,["href"])]),t("div",G,[t("table",H,[t("thead",null,[t("tr",J,[t("th",K,r(e.$t("Name")),1),t("th",Q,r(e.$t("Phone")),1),t("th",X,r(e.$t("Email")),1),t("th",Y,r(e.$t("Balance")),1),t("th",Z,r(e.$t("Address")),1)])]),t("tbody",null,[(i(!0),c(O,null,E(p.customers.data,s=>{var y,g;return i(),c("tr",{key:s.id,onClick:f=>d.rowClicked(s.id),class:"cursor-pointer hover:bg-teal-200 focus-within:bg-teal-200"},[t("td",te,[t("div",se,[t("a",{onClick:w(f=>d.journalTransactions(s.id),["stop"]),class:"text-gray-700 hover:text-gray-800"},[n(m,{name:"journal",class:"flex-shrink-0 w-4 h-4 fill-current ltr:mr-2 rtl:ml-2"})],8,oe),b(" "+r(s.name)+" ",1),s.deleted_at?(i(),_(m,{key:0,name:"trash",class:"flex-shrink-0 w-3 h-3 fill-gray-400 ml-2"})):h("",!0)])]),t("td",re,[t("div",le,[b(r(s.phone)+" ",1),e.$page.props.user.account.sms_enabled&&(e.$page.props.user.can_sms||e.$page.props.user.owner)?(i(),c("a",{key:0,onClick:w(f=>d.smsToCustomer(s),["stop"]),class:"modal-close ml-2 cursor-pointer text-gray-700 hover:text-gray-800"},[n(m,{name:"sms",class:"h-4 w-4 fill-current"})],8,ne)):h("",!0)])]),t("td",ae,r(s.email),1),t("td",ie,[t("div",me,[b(r(e.$number((g=(y=s==null?void 0:s.journal)==null?void 0:y.balance)==null?void 0:g.amount))+" ",1),t("a",{onClick:w(f=>d.addPayment(s),["stop"]),class:"p-1 text-green-700"},[n(m,{name:"add",class:"flex-shrink-0 w-3 h-3 fill-current ml-2"})],8,de)])]),t("td",ce,r(s.address),1),t("td",he,[n(m,{name:"cheveron-right",class:"block w-6 h-6 fill-gray-400 rtl:rotate"})])],8,ee)}),128)),p.customers.data.length===0?(i(),c("tr",pe,[t("td",ue,r(e.$t("no_x_found",{x:e.$tc("Customer")})),1)])):h("",!0)])])]),n(V,{links:p.customers.links,meta:p.customers.meta},null,8,["links","meta"])]),o.viewsms?(i(),_(v,{key:0,show:o.viewsms,"max-width":"2xl",closeable:!0,onClose:l[3]||(l[3]=s=>o.viewsms=!1)},{default:u(()=>[n(j,{order:o.order,onClose:l[2]||(l[2]=()=>o.viewsms=!1)},null,8,["order"])]),_:1},8,["show"])):h("",!0),o.view?(i(),_(v,{key:1,show:o.view,"max-width":"2xl",closeable:!0,onClose:l[5]||(l[5]=s=>o.view=!1)},{default:u(()=>[n(P,{c:o.customer,modal:!0,onClose:l[4]||(l[4]=()=>o.view=!1)},null,8,["c"])]),_:1},8,["show"])):h("",!0)])}const Le=I(R,[["render",fe]]);export{Le as default};
