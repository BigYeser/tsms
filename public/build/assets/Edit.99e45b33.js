import{L as j}from"./Layout.d6a79640.js";import{g as O}from"./debounce.f7dd0f3d.js";import{T as E}from"./TextInput.4dc813b8.js";import{d as G}from"./DeleteMixin.91c5950e.js";import{S as z}from"./SelectInput.8fbdcc59.js";import{C as A}from"./CheckboxInput.1cb3e74a.js";import{L as F}from"./LoadingButton.3b4cac2b.js";import{T as q}from"./TextareaInput.48ce32ba.js";import{T as H}from"./TrashedMessage.98a32c61.js";import{D as J}from"./DeleteRestoreComponent.cd37c73c.js";import{_ as K,r as a,o as p,c as d,a as s,b as l,e as c,h as f,t as n,f as Q,d as h,w as W,n as g}from"./app.8ddcea91.js";import"./Dropdown.20880cca.js";import"./FlashMessages.3374db0a.js";import"./InputError.3a22df49.js";import"./Dialog.dddb299f.js";import"./Modal.cbc26950.js";const X={layout:j,remember:"form",props:{payment:Object},mixins:[G("payment")],components:{TextInput:E,SelectInput:z,CheckboxInput:A,TextareaInput:q,LoadingButton:F,TrashedMessage:H,DeleteRestoreComponent:J},metaInfo(){return{title:this.$t("edit_x",{x:this.payment.id})}},data(){return{restore:!1,sending:!1,form:{date:this.payment.date,reference:this.payment.reference,amount:this.payment.amount,gateway:this.payment.gateway,order_id:this.payment.order_id,customer_id:this.payment.customer_id,description:this.payment.description,received:this.payment.received==1},gateways:[],customers:[],customer:null,lock_amount:!1}},mounted(){this.payment.gateway=="Stripe"&&(this.lock_amount=!0),this.gateways=this.$page.props.user.account.gateways.split(","),this.customer={value:this.payment.customer.id,label:this.payment.customer.name},this.customers=[this.customer]},methods:{submit(){this.sending=!0,this.$inertia.put(this.route("payments.update",this.payment.id),this.form,{onFinish:()=>this.sending=!1})},customerChanged(e){this.customer=e||null,this.form.customer_id=e?e.value:null},searchCustomers(e,t){e&&(t(!0),this.searchingCustomers(t,e,this))},searchingCustomers:O((e,t,m)=>{fetch(m.route("ajax.customers")+"?search="+escape(t)).then(y=>{y.json().then(r=>m.customers=r),e(!1)})},350)}},Y={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},Z=s("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),ee={class:"bg-white rounded shadow overflow-hidden max-w-3xl"},te={class:"p-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},re={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},oe={class:"form-label",for:"gateway"},se={key:0,class:"form-error"},le={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},ae={class:"form-label",for:"customer_id"},ne={key:0,class:"form-error"},me={class:"px-8 pb-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},ie={class:"px-8 py-4 bg-gray-100 border-t border-gray-200 flex items-center"};function pe(e,t,m,y,r,i){var w,_,v,V,k,C,x,I,$,D,R,S;const T=a("Icons"),U=a("Link"),L=a("trashed-message"),u=a("text-input"),b=a("v-select"),B=a("textarea-input"),N=a("checkbox-input"),P=a("DeleteRestoreComponent"),M=a("loading-button");return p(),d("div",null,[s("h1",Y,[l(U,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:e.route("payments")},{default:c(()=>[l(T,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),f(" "+n(e.$tc("Payment",2)),1)]),_:1},8,["href"]),Z,f(" "+n(e.$t("Payment Number",{x:m.payment.id})),1)]),m.payment.deleted_at?(p(),Q(L,{key:0,class:"mb-6",onRestore:t[0]||(t[0]=()=>r.restore=!0)},{default:c(()=>[s("span",null,n(e.$t("already_deleted_x",{x:e.$tc("Payment")})),1)]),_:1})):h("",!0),s("div",ee,[s("form",{onSubmit:t[9]||(t[9]=W((...o)=>i.submit&&i.submit(...o),["prevent"])),autocomplete:"off"},[s("div",te,[l(u,{type:"date",label:e.$t("Date"),modelValue:r.form.date,"onUpdate:modelValue":t[1]||(t[1]=o=>r.form.date=o),pattern:"\\d{4}-\\d{2}-\\d{2}",errors:(w=e.$page.props.errors)==null?void 0:w.date,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),l(u,{label:e.$t("Reference"),modelValue:r.form.reference,"onUpdate:modelValue":t[2]||(t[2]=o=>r.form.reference=o),errors:(_=e.$page.props.errors)==null?void 0:_.reference,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),l(u,{label:e.$t("Amount"),modelValue:r.form.amount,"onUpdate:modelValue":t[3]||(t[3]=o=>r.form.amount=o),readonly:r.lock_amount,errors:(v=e.$page.props.errors)==null?void 0:v.amount,class:g(["ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",r.lock_amount?"readonly":""])},null,8,["label","modelValue","readonly","errors","class"]),s("div",re,[s("label",oe,n(e.$t("Gateway")),1),l(b,{transition:"",clearable:!1,options:r.gateways,"input-id":"gateway",modelValue:r.form.gateway,"onUpdate:modelValue":t[4]||(t[4]=o=>r.form.gateway=o),dir:e.$page.props.user.account.direction,placeholder:e.$t("select_x",{x:e.$t("Gateway")}),class:g({error:((V=e.$page.props.errors)==null?void 0:V.gateway)&&((k=e.$page.props.errors)==null?void 0:k.gateway.length)})},null,8,["options","modelValue","dir","placeholder","class"]),(C=e.$page.props.errors)!=null&&C.gateway?(p(),d("div",se,n((x=e.$page.props.errors)==null?void 0:x.gateway[0]),1)):h("",!0)]),s("div",le,[s("label",ae,n(e.$tc("Customer")),1),l(b,{transition:"",modelValue:r.customer,"onUpdate:modelValue":t[5]||(t[5]=o=>r.customer=o),clearable:!1,options:r.customers,"input-id":"customer_id",onInput:i.customerChanged,onSearch:i.searchCustomers,"onOption:selected":i.customerChanged,dir:e.$page.props.user.account.direction,placeholder:e.$t("search_x",{x:e.$tc("Customer")}),class:g({error:((I=e.$page.props.errors)==null?void 0:I.customer_id)&&(($=e.$page.props.errors)==null?void 0:$.customer_id.length)})},null,8,["modelValue","options","onInput","onSearch","onOption:selected","dir","placeholder","class"]),(D=e.$page.props.errors)!=null&&D.customer_id?(p(),d("div",ne,n((R=e.$page.props.errors)==null?void 0:R.customer_id[0]),1)):h("",!0)])]),s("div",me,[l(B,{label:e.$t("Description"),modelValue:r.form.description,"onUpdate:modelValue":t[6]||(t[6]=o=>r.form.description=o),errors:(S=e.$page.props.errors)==null?void 0:S.description,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},null,8,["label","modelValue","errors"]),l(N,{class:"mb-8",id:"received",label:e.$t("Received"),checked:r.form.received,"onUpdate:checked":t[7]||(t[7]=o=>r.form.received=o)},null,8,["label","checked"])]),s("div",ie,[l(P,{restore:r.restore,data:m.payment,model:"Payment",routeM:"payments",onCloseRestore:t[8]||(t[8]=()=>r.restore=!1)},null,8,["restore","data"]),l(M,{loading:r.sending,class:"btn-gray ltr:ml-auto rtl:mr-auto",type:"submit"},{default:c(()=>[f(n(e.$t("update_x",{x:e.$tc("Payment")})),1)]),_:1},8,["loading"])])],32)])])}const $e=K(X,[["render",pe]]);export{$e as default};
