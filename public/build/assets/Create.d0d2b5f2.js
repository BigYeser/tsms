import{L as l}from"./Layout.001ecf56.js";import p from"./Form.c27440c9.js";import{_ as d,r as e,o as f,c as _,a as r,b as o,e as h,h as s,t as a}from"./app.ea025243.js";import"./Dropdown.bc7e705c.js";import"./FlashMessages.e1248e70.js";import"./debounce.d63f6580.js";import"./TextInput.fae0f74b.js";import"./InputError.80ef4ff4.js";import"./CheckboxInput.faa8faf7.js";import"./TextareaInput.4e4c890b.js";import"./LoadingButton.7d07f17a.js";const u={layout:l,components:{PForm:p},props:{icustomers:Array},metaInfo(){return{title:this.$t("create_x",{x:this.$tc("Payment")})}}},x={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},y=r("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),w={class:"bg-white rounded shadow overflow-hidden max-w-3xl"};function $(t,g,n,k,b,v){const m=e("Icons"),c=e("Link"),i=e("p-form");return f(),_("div",null,[r("h1",x,[o(c,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:t.route("payments")},{default:h(()=>[o(m,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),s(" "+a(t.$tc("Payment",2)),1)]),_:1},8,["href"]),y,s(" "+a(t.$t("Create")),1)]),r("div",w,[o(i,{modal:!1,icustomers:n.icustomers},null,8,["icustomers"])])])}const S=d(u,[["render",$]]);export{S as default};