import{L as l}from"./Layout.0aa37336.js";import p from"./Form.09cb6b9b.js";import{_ as d,r as e,o as u,c as f,a as r,b as o,e as _,h as m,t as a}from"./app.bd46b2d6.js";import"./Dropdown.9747cff7.js";import"./FlashMessages.5f89d38d.js";import"./debounce.e10d4e9c.js";import"./TextInput.02bdfbb0.js";import"./InputError.d6773773.js";import"./RadioInput.855d6c00.js";import"./SelectInput.a3bc5794.js";import"./TextareaInput.71e940be.js";import"./CheckboxInput.65503cce.js";import"./LoadingButton.c53f559a.js";import"./DeleteRestoreComponent.2f2b7eb6.js";import"./Dialog.3571f2a3.js";import"./Modal.a7d790aa.js";const h={layout:l,components:{MForm:p},props:{iservices:Array,icustomers:Array},metaInfo(){return{title:this.$t("create_x",{x:this.$tc("Measurement")})}}},x={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},v=r("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),y={class:"bg-white rounded shadow overflow-hidden max-w-3xl"};function w(t,g,s,k,$,b){const i=e("Icons"),n=e("Link"),c=e("m-form");return u(),f("div",null,[r("h1",x,[o(n,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:t.route("measurements")},{default:_(()=>[o(i,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),m(" "+a(t.$tc("Measurement",2)),1)]),_:1},8,["href"]),v,m(" "+a(t.$t("Create")),1)]),r("div",y,[o(c,{modal:!1,iservices:s.iservices,icustomers:s.icustomers},null,8,["iservices","icustomers"])])])}const G=d(h,[["render",w]]);export{G as default};