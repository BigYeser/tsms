import{L as l}from"./Layout.3db2d584.js";import p from"./Form.1c91294c.js";import{_ as d,r as e,o as u,c as f,a as r,b as o,e as _,h as m,t as a}from"./app.e01d365b.js";import"./Dropdown.2faa30c1.js";import"./FlashMessages.84e612a0.js";import"./debounce.c7371ff3.js";import"./TextInput.b2476108.js";import"./InputError.bece23fc.js";import"./RadioInput.d4723eaf.js";import"./SelectInput.4d7873f2.js";import"./TextareaInput.3cfe7ef6.js";import"./CheckboxInput.c40d74f7.js";import"./LoadingButton.912775dd.js";import"./DeleteRestoreComponent.2d743825.js";import"./Dialog.3e60a21a.js";import"./Modal.6e0bafe2.js";const h={layout:l,components:{MForm:p},props:{iservices:Array,icustomers:Array},metaInfo(){return{title:this.$t("create_x",{x:this.$tc("Measurement")})}}},x={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},v=r("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),y={class:"bg-white rounded shadow overflow-hidden max-w-3xl"};function w(t,g,s,k,$,b){const i=e("Icons"),n=e("Link"),c=e("m-form");return u(),f("div",null,[r("h1",x,[o(n,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:t.route("measurements")},{default:_(()=>[o(i,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),m(" "+a(t.$tc("Measurement",2)),1)]),_:1},8,["href"]),v,m(" "+a(t.$t("Create")),1)]),r("div",y,[o(c,{modal:!1,iservices:s.iservices,icustomers:s.icustomers},null,8,["iservices","icustomers"])])])}const G=d(h,[["render",w]]);export{G as default};