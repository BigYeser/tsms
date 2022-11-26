import{L as l}from"./Layout.2464eb04.js";import p from"./Form.3b7736cd.js";import{_ as d,r as e,o as u,c as f,a as r,b as o,e as _,h as m,t as a}from"./app.54ea244b.js";import"./Dropdown.ef8ef1b7.js";import"./FlashMessages.c39baf90.js";import"./debounce.de8085e6.js";import"./TextInput.85b80a6c.js";import"./InputError.c4bf45a0.js";import"./RadioInput.30994886.js";import"./SelectInput.072c5b66.js";import"./TextareaInput.e0a3f92f.js";import"./CheckboxInput.b9e0ad6c.js";import"./LoadingButton.cc1abe5c.js";import"./DeleteRestoreComponent.ede3fc3b.js";import"./Dialog.8c8706fc.js";import"./Modal.0196b99f.js";const h={layout:l,components:{MForm:p},props:{iservices:Array,icustomers:Array},metaInfo(){return{title:this.$t("create_x",{x:this.$tc("Measurement")})}}},x={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},v=r("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),y={class:"bg-white rounded shadow overflow-hidden max-w-3xl"};function w(t,g,s,k,$,b){const i=e("Icons"),n=e("Link"),c=e("m-form");return u(),f("div",null,[r("h1",x,[o(n,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:t.route("measurements")},{default:_(()=>[o(i,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),m(" "+a(t.$tc("Measurement",2)),1)]),_:1},8,["href"]),v,m(" "+a(t.$t("Create")),1)]),r("div",y,[o(c,{modal:!1,iservices:s.iservices,icustomers:s.icustomers},null,8,["iservices","icustomers"])])])}const G=d(h,[["render",w]]);export{G as default};