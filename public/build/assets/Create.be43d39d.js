import{L as l}from"./Layout.10b6563b.js";import p from"./Form.3f36a595.js";import{_ as d,r as e,o as u,c as f,a as r,b as o,e as _,h as m,t as a}from"./app.10849f89.js";import"./Dropdown.be3332d9.js";import"./FlashMessages.ca070b2c.js";import"./debounce.3c469bec.js";import"./TextInput.3d70ca6d.js";import"./InputError.c72b6347.js";import"./RadioInput.a2122c8a.js";import"./SelectInput.75083a59.js";import"./TextareaInput.2d6c50bc.js";import"./CheckboxInput.c4941955.js";import"./LoadingButton.44106f82.js";import"./DeleteRestoreComponent.183b1360.js";import"./Dialog.27fbec58.js";import"./Modal.dcc997d3.js";const h={layout:l,components:{MForm:p},props:{iservices:Array,icustomers:Array},metaInfo(){return{title:this.$t("create_x",{x:this.$tc("Measurement")})}}},x={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},v=r("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),y={class:"bg-white rounded shadow overflow-hidden max-w-3xl"};function w(t,g,s,k,$,b){const i=e("Icons"),n=e("Link"),c=e("m-form");return u(),f("div",null,[r("h1",x,[o(n,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:t.route("measurements")},{default:_(()=>[o(i,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),m(" "+a(t.$tc("Measurement",2)),1)]),_:1},8,["href"]),v,m(" "+a(t.$t("Create")),1)]),r("div",y,[o(c,{modal:!1,iservices:s.iservices,icustomers:s.icustomers},null,8,["iservices","icustomers"])])])}const G=d(h,[["render",w]]);export{G as default};