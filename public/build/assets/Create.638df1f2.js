import{L as l}from"./Layout.67f6ae77.js";import p from"./Form.42bb91f3.js";import{_ as d,r as e,o as u,c as f,a as r,b as o,e as _,h as m,t as a}from"./app.5b440a37.js";import"./Dropdown.d218fc1e.js";import"./FlashMessages.4a02b55c.js";import"./debounce.f794c726.js";import"./TextInput.370d3eb2.js";import"./InputError.9366ee21.js";import"./RadioInput.9a2deb1f.js";import"./SelectInput.01b52e04.js";import"./TextareaInput.308553e9.js";import"./CheckboxInput.694b34e4.js";import"./LoadingButton.ea850e08.js";import"./DeleteRestoreComponent.2d16f34c.js";import"./Dialog.54fc04a8.js";import"./Modal.eff25121.js";const h={layout:l,components:{MForm:p},props:{iservices:Array,icustomers:Array},metaInfo(){return{title:this.$t("create_x",{x:this.$tc("Measurement")})}}},x={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},v=r("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),y={class:"bg-white rounded shadow overflow-hidden max-w-3xl"};function w(t,g,s,k,$,b){const i=e("Icons"),n=e("Link"),c=e("m-form");return u(),f("div",null,[r("h1",x,[o(n,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:t.route("measurements")},{default:_(()=>[o(i,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),m(" "+a(t.$tc("Measurement",2)),1)]),_:1},8,["href"]),v,m(" "+a(t.$t("Create")),1)]),r("div",y,[o(c,{modal:!1,iservices:s.iservices,icustomers:s.icustomers},null,8,["iservices","icustomers"])])])}const G=d(h,[["render",w]]);export{G as default};