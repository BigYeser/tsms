import{L as l}from"./Layout.72394591.js";import p from"./Form.58e8d7fe.js";import{_ as d,r as e,o as f,c as _,a as r,b as o,e as h,h as s,t as a}from"./app.bb99bc40.js";import"./Dropdown.cf6684f9.js";import"./FlashMessages.6d0d7231.js";import"./debounce.d9225436.js";import"./TextInput.d48ee7f4.js";import"./InputError.e399e5f9.js";import"./CheckboxInput.b02ecec2.js";import"./TextareaInput.e72c8d9d.js";import"./LoadingButton.a1b84804.js";const u={layout:l,components:{PForm:p},props:{icustomers:Array},metaInfo(){return{title:this.$t("create_x",{x:this.$tc("Payment")})}}},x={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},y=r("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),w={class:"bg-white rounded shadow overflow-hidden max-w-3xl"};function $(t,g,n,k,b,v){const m=e("Icons"),c=e("Link"),i=e("p-form");return f(),_("div",null,[r("h1",x,[o(c,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:t.route("payments")},{default:h(()=>[o(m,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),s(" "+a(t.$tc("Payment",2)),1)]),_:1},8,["href"]),y,s(" "+a(t.$t("Create")),1)]),r("div",w,[o(i,{modal:!1,icustomers:n.icustomers},null,8,["icustomers"])])])}const S=d(u,[["render",$]]);export{S as default};