import{g as C}from"./debounce.47c557fa.js";import{L as ne}from"./Layout.b58cabaf.js";import{M as ie}from"./Modal.1c5cc8fa.js";import{F as de}from"./FileInput.b63a23c7.js";import{T as pe}from"./TextInput.795b2b96.js";import{S as ue}from"./SelectInput.e3190530.js";import me from"./Form.00fa1f32.js";import{T as ce}from"./TextareaInput.0b21886e.js";import{L as he}from"./LoadingButton.9ec4b4ef.js";import{T as fe}from"./TrashedMessage.26a804d0.js";import ge from"./Form.d4eb99ef.js";import{_ as be,r as h,o as n,f as X,e as b,a as r,b as p,h as x,t as l,w as ye,n as w,c as d,d as c,j as v,F as _}from"./app.0ee53949.js";import"./Dropdown.730f0d0e.js";import"./FlashMessages.cf77f40a.js";import"./InputError.c2ac5797.js";import"./RadioInput.63f35024.js";import"./CheckboxInput.129f56e0.js";import"./DeleteRestoreComponent.d3be0555.js";import"./Dialog.265c3e7d.js";const _e={components:{Modal:ie,Layout:ne,FileInput:de,TextInput:pe,SelectInput:ue,CustomerForm:me,TextareaInput:ce,LoadingButton:he,TrashedMessage:fe,MeasurementForm:ge},props:{members:Array,taxes:Array,icustomers:Array,iservices:Array},data(){return{addC:!1,addMM:!1,ddData:null,sending:!1,form:{reference:null,customer_id:null,assigned_to:null,delivery_date:null,priority:null,note:null,services:[],customer:null,taxes:[],discount:null,discount_amount:null,status:this.$t("Received")},tax:null,allTaxes:[],services:[],service:null,customers:[],priority:null,staff_members:[],customer:null,staff:null,priorities:[{label:this.$t("Normal"),value:1},{label:this.$t("High"),value:2},{label:this.$t("Urgent"),value:3}]}},computed:{discountAmount(){if(!this.form.discount)return 0;if(this.form.discount.indexOf("%")!==-1){var e=this.form.discount.split("%");return parseFloat(this.totalAmount*(parseFloat(e)/100),4)}return parseFloat(this.form.discount)},compoundTaxes(){return this.form.taxes.filter(e=>e.compound)},nonCompoundTaxes(){return this.form.taxes.filter(e=>!e.compound)},nonCompoundTaxesAmount(){return this.nonCompoundTaxes.reduce((e,t)=>e+this.calculateTax(t,!1),0)},taxAmount(){return this.nonCompoundTaxesAmount+this.compoundTaxes.reduce((e,t)=>e+this.calculateTax(t,!0),0)},totalAmount(){return this.form.services.reduce((e,t)=>parseFloat(t.price)*parseFloat(t.qty)+e,0)},totalQuantity(){return this.form.services.reduce((e,t)=>parseFloat(t.qty)+e,0)}},mounted(){this.services=this.iservices,this.customers=this.icustomers,this.staff_members=this.members,this.$page.props.user.account.default_tax&&(this.tax=this.taxes.find(e=>e.value==this.$page.props.user.account.default_tax),this.form.taxes=[{...this.tax}]),this.$page.props.user.owner||(this.form.assigned_to=this.$page.props.user.id)},methods:{addCustomer(e){this.addC=!0},updateCustomer(e){let t={id:e.id,value:e.id,label:e.name,measurements:[]};this.customerChanged(t),this.customers=[t,...this.customers]},addToOrder(e){let t=this.getServiceMeasurements(e.id);this.form.services.push({...e,service_id:e.id,qty:1,measurement_id:t&&t.length?t[0].id:null})},calculateTax(e,t=!1){return t?(this.totalAmount-this.discountAmount+this.nonCompoundTaxesAmount)*(parseFloat(e.rate)/100):(this.totalAmount-this.discountAmount)*(parseFloat(e.rate)/100)},updateCustomerMeasurement(e){this.form.customer={...this.form.customer,measurements:[...this.form.customer.measurements,e]};let t=this.form.services.map(a=>(a.service_id==e.service_id&&(a.measurement_id=e.id),a));this.$nextTick(()=>{this.form.services=[...t]})},addMeasurement(e){let t=this.services.find(a=>a.id==e);if(t&&this.customer){t={label:t.name,value:t.id,measurement_fields:t.measurement_fields};let a=this.customer,f=a.label+"'s "+t.label;this.ddData={name:f,service:t,customer:a},this.addMM=!0}else document.getElementById("page-contents").scrollTop=0},getServiceMeasurements(e){if(this.form.customer){let t=this.form.customer.measurements.filter(a=>a.service_id==e);return t.length?t:[]}},deleteService(e){this.form.services.splice(e,1)},staffChanged(e){this.staff=e||null,this.form.assigned_to=e?e.value:null},priorityChanged(e){this.priority=e||null,this.form.priority=e?e.value:null},customerChanged(e){this.customer=e||null,this.form.customer=e||null,this.form.customer_id=e?e.value:null,this.form.services=this.form.services.map(t=>(t.measurement=null,t.measurement_id=null,t))},searchCustomers(e,t){e&&(t(!0),this.searchingCustomers(t,e,this))},searchingCustomers:C((e,t,a)=>{fetch(a.route("ajax.customers")+"?measurements=1&search="+escape(t)).then(f=>{f.json().then(s=>a.customers=s),e(!1)})},350),searchServices(e,t){e&&(t(!0),this.searchingServices(t,e,this))},searchingServices:C((e,t,a)=>{fetch(a.route("ajax.services")+"?full=1&search="+escape(t)).then(f=>{f.json().then(s=>a.services=s),e(!1)})},350),searchStaff(e,t){e&&(t(!0),this.searchingStaff(t,e,this))},searchingStaff:C((e,t,a)=>{fetch(a.route("ajax.staff")+"?search="+escape(t)).then(f=>{f.json().then(s=>a.staff_members=s),e(!1)})},350),submit(){this.sending=!0;var e=new FormData;e.append("reference",this.form.reference||""),e.append("customer_id",this.form.customer_id||""),e.append("assigned_to",this.form.assigned_to||""),e.append("delivery_date",this.form.delivery_date||""),e.append("status",this.form.status||""),e.append("priority",this.form.priority?this.form.priority.value:""),e.append("note",this.form.note||""),e.append("discount",this.form.discount||""),e.append("photo",this.form.photo||""),this.form.taxes.length?this.form.taxes.map((t,a)=>{e.append("taxes["+a+"][id]",t.id),e.append("taxes["+a+"][code]",t.code),e.append("taxes["+a+"][name]",t.name),e.append("taxes["+a+"][rate]",t.rate),e.append("taxes["+a+"][compound]",t.compound)}):e.append("taxes",[]),this.form.services.map((t,a)=>{e.append("services["+a+"][id]",t.id),e.append("services["+a+"][qty]",t.qty),e.append("services["+a+"][code]",t.code),e.append("services["+a+"][name]",t.name),e.append("services["+a+"][price]",t.price),e.append("services["+a+"][color]",t.color),e.append("services["+a+"][product_id]",t.product_id),e.append("services["+a+"][service_id]",t.service_id),e.append("services["+a+"][measurement_id]",t.measurement_id)}),this.$inertia.post(this.route("orders.store"),e,{onFinish:()=>this.sending=!1})}}},ve={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},xe=r("span",{class:"text-gray-400 font-medium mx-1"},"/",-1),we={class:"bg-white rounded shadow overflow-hidden"},Ce={class:"p-12 ltr:-mr-12 rtl:-ml-12 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},Ve={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},ke={class:"flex items-center justify-between"},$e={class:"form-label",for:"customer_id"},Te={key:0,class:"form-error"},Me={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},Se={class:"form-label",for:"status"},Ae={key:0,class:"form-error"},Fe={key:0,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},Ue={class:"form-label",for:"assigned_to"},Ie={key:0,class:"form-error"},Oe={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},De={class:"form-label",for:"priority"},je={key:0,class:"form-error"},qe={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full no-drop"},Le={slot:"no-options"},Pe={class:"text-left px-4 py-2 text-gray-700 hover:text-gray-200"},Be={key:0,class:"px-4 py-2 rounded mt-4 text-white bg-red-500"},Ne={key:1,class:"px-4 py-2 rounded mt-4 text-white bg-red-500"},Re={key:2,class:"px-4 py-2 rounded mt-4 text-white bg-red-500"},Qe={class:"ltr:mr-6 rtl:ml-6 mb-8 w-full border rounded overflow-x-auto lg:overflow-x-hidden pb-4 lg:pb-0"},Ee={key:0,class:"px-4 py-3 bg-orange-200 text-orange-500"},ze={key:0},Ge={key:1},He={key:2,class:"w-full"},Je=r("th",{class:"border-b pl-4 pr-2 py-2 bg-gray-200 text-center"},"#",-1),Ke={class:"border-b pl-2 pr-4 py-2 bg-gray-200 ltr:text-left rtl:text-right"},We={class:"border-b px-4 py-2 bg-gray-200 w-12"},Xe={class:"border-b px-4 py-2 bg-gray-200 w-12"},Ye={class:"border-b px-4 py-2 bg-gray-200 w-40"},Ze={class:"border-b px-4 py-2 bg-gray-200 w-16"},et={class:"border-b px-4 py-2 bg-gray-200 w-12"},tt={class:"border-b px-4 py-2 bg-gray-200"},rt={class:"border-b pl-4 pr-2 py-2"},st={class:"flex flex-col content-center items-center justify-around w-6"},ot={class:"pt-1"},lt=["onClick"],at={class:"border-b pl-2 pr-4 py-2 leading-normal"},nt={style:{"min-width":"180px"}},it={class:"text-sm font-bold"},dt={class:"border-b px-4 py-2 ltr:text-right rtl:text-left"},pt={class:"border-b px-4 py-2 ltr:text-right rtl:text-left"},ut={class:"border-b px-4 py-2 no-drop"},mt={key:0,class:"text-center"},ct=["onClick"],ht=["value"],ft={class:"border-b px-4 py-2 ltr:text-right rtl:text-left"},gt={class:"border-b px-4 py-2 text-center"},bt={class:"border-b px-4 py-2 ltr:text-right rtl:text-left font-bold"},yt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left",colspan:"4"},_t={class:"border-b px-4 py-2 bg-gray-200 text-center"},vt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},xt={key:0},wt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left",colspan:"5"},Ct={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},Vt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left",colspan:"5"},kt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},$t={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left",colspan:"5"},Tt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},Mt={key:2},St={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left",colspan:"5"},At={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},Ft={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},Ut={class:"form-label",for:"taxes"},It={key:0,class:"form-error"},Ot={class:"px-8 py-4 bg-gray-100 border-t border-gray-200 flex justify-end items-center"};function Dt(e,t,a,f,s,i){const V=h("Icons"),Y=h("Link"),y=h("v-select"),g=h("text-input"),Z=h("select-input"),ee=h("file-input"),te=h("textarea-input"),re=h("loading-button"),se=h("MeasurementForm"),k=h("Modal"),oe=h("CustomerForm"),le=h("Layout");return n(),X(le,{title:e.$t("Create Order")},{default:b(()=>{var $,T,M,S,A,F,U,I,O,D,j,q,L,P,B,N,R,Q,E,z,G,H,J,K,W;return[r("div",null,[r("div",null,[r("h1",ve,[p(Y,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:e.route("orders")},{default:b(()=>[p(V,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),x(" "+l(e.$tc("Order",2)),1)]),_:1},8,["href"]),xe,x(l(e.$t("Create")),1)]),r("div",we,[r("form",{onSubmit:t[10]||(t[10]=ye((...o)=>i.submit&&i.submit(...o),["prevent"])),autocomplete:"off"},[r("div",Ce,[r("div",Ve,[r("div",ke,[r("label",$e,l(e.$tc("Customer")),1),r("button",{type:"button",onClick:t[0]||(t[0]=(...o)=>i.addCustomer&&i.addCustomer(...o)),class:"text-blue-600 hover:text-blue-700"},l(e.$t("Create")),1)]),p(y,{transition:"",modelValue:s.customer,"onUpdate:modelValue":t[1]||(t[1]=o=>s.customer=o),clearable:!1,options:s.customers,"input-id":"customer_id",onInput:i.customerChanged,onSearch:i.searchCustomers,"onOption:selected":i.customerChanged,dir:e.$page.props.user.account.direction,placeholder:e.$t("search_x",{x:e.$tc("Customer")}),class:w({error:(($=e.$page.props.errors)==null?void 0:$.customer_id)&&((T=e.$page.props.errors)==null?void 0:T.customer_id.length)})},null,8,["modelValue","options","onInput","onSearch","onOption:selected","dir","placeholder","class"]),(M=e.$page.props.errors)!=null&&M.customer_id?(n(),d("div",Te,l((S=e.$page.props.errors)==null?void 0:S.customer_id),1)):c("",!0)]),p(g,{type:"date",pattern:"\\d{4}-\\d{2}-\\d{2}",label:e.$t("Delivery Date"),modelValue:s.form.delivery_date,"onUpdate:modelValue":t[2]||(t[2]=o=>s.form.delivery_date=o),errors:(A=e.$page.props.errors)==null?void 0:A.delivery_date,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),r("div",Me,[r("label",Se,l(e.$t("Status")),1),p(y,{transition:"","input-id":"status",clearable:!1,modelValue:s.form.status,"onUpdate:modelValue":t[3]||(t[3]=o=>s.form.status=o),dir:e.$page.props.user.account.direction,placeholder:e.$t("select_x",{x:e.$t("Status")}),class:w({error:((F=e.$page.props.errors)==null?void 0:F.status)&&((U=e.$page.props.errors)==null?void 0:U.status.length)}),options:[e.$t("Received"),e.$t("Preparing"),e.$t("Ready"),e.$t("Completed")]},null,8,["modelValue","dir","placeholder","class","options"]),(I=e.$page.props.errors)!=null&&I.status?(n(),d("div",Ae,l((O=e.$page.props.errors)==null?void 0:O.status),1)):c("",!0)]),p(g,{label:e.$t("Reference"),modelValue:s.form.reference,"onUpdate:modelValue":t[4]||(t[4]=o=>s.form.reference=o),errors:(D=e.$page.props.errors)==null?void 0:D.reference,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),e.$page.props.user.owner?(n(),d("div",Fe,[r("label",Ue,l(e.$t("Assign to")),1),p(y,{transition:"",value:s.staff,clearable:!1,onInput:i.staffChanged,onSearch:i.searchStaff,"input-id":"assigned_to",options:s.staff_members,"onOption:selected":i.staffChanged,dir:e.$page.props.user.account.direction,placeholder:e.$t("search_x",{x:e.$t("Staff")}),class:w({error:((j=e.$page.props.errors)==null?void 0:j.assigned_to)&&((q=e.$page.props.errors)==null?void 0:q.assigned_to.length)})},null,8,["value","onInput","onSearch","options","onOption:selected","dir","placeholder","class"]),(L=e.$page.props.errors)!=null&&L.assigned_to?(n(),d("div",Ie,l((P=e.$page.props.errors)==null?void 0:P.assigned_to),1)):c("",!0)])):c("",!0),r("div",Oe,[r("label",De,l(e.$t("Priority")),1),p(y,{transition:"",clearable:!1,filterable:!1,"input-id":"priority",options:s.priorities,modelValue:s.form.priority,"onUpdate:modelValue":t[5]||(t[5]=o=>s.form.priority=o),dir:e.$page.props.user.account.direction,placeholder:e.$t("select_x",{x:e.$t("Priority")})},null,8,["options","modelValue","dir","placeholder"]),(B=e.$page.props.errors)!=null&&B.priority?(n(),d("div",je,l((N=e.$page.props.errors)==null?void 0:N.priority),1)):c("",!0)]),r("div",qe,[p(y,{label:"name",transition:"",value:s.service,"input-id":"service",options:s.services,onInput:i.addToOrder,onSearch:i.searchServices,"onOption:selected":i.addToOrder,dir:e.$page.props.user.account.direction,placeholder:e.$t("Search service to add to order")},{default:b(()=>[r("template",Le,[r("div",Pe,l(e.$t("Type to search services")),1)])]),_:1},8,["value","options","onInput","onSearch","onOption:selected","dir","placeholder"]),(n(!0),d(_,null,v(s.form.services,(o,u)=>(n(),d("div",{key:"se_"+u},[e.$page.props.errors["services."+u+".measurement_id"]?(n(),d("div",Be,l(e.$page.props.errors["services."+u+".measurement_id"]),1)):c("",!0),e.$page.props.errors["services."+u+".price"]?(n(),d("div",Ne,l(e.$page.props.errors["services."+u+".price"]),1)):c("",!0),e.$page.props.errors["services."+u+".qty"]?(n(),d("div",Re,l(e.$page.props.errors["services."+u+".qty"]),1)):c("",!0)]))),128))]),r("div",Qe,[s.form.customer_id?c("",!0):(n(),d("div",Ee,l(e.$t("Please select the customer first")),1)),s.form.services.length?(n(),d("table",He,[r("thead",null,[r("tr",null,[Je,r("th",Ke,l(e.$tc("Service")),1),r("th",We,l(e.$t("Code")),1),r("th",Xe,l(e.$t("Color")),1),r("th",Ye,l(e.$tc("Measurement")),1),r("th",Ze,l(e.$t("Price")),1),r("th",et,l(e.$t("Qty")),1),r("th",tt,l(e.$t("Amount")),1)])]),r("tbody",null,[(n(!0),d(_,null,v(s.form.services,(o,u)=>(n(),d("tr",{key:"servicse_"+o.id},[r("td",rt,[r("div",st,[r("div",ot,l(u+1),1),r("button",{type:"button",onClick:m=>i.deleteService(u),class:"mt-1 p-1 text-gray-500 hover:text-red-600"},[p(V,{name:"trash",class:"flex-shrink-0 w-3 h-3 fill-current"})],8,lt)])]),r("td",at,[r("div",nt,[x(l(o.name)+" ",1),r("div",it,l(o.code),1)])]),r("td",dt,[p(g,{small:"",class:"w-20",type:"number",modelValue:o.price,"onUpdate:modelValue":m=>o.price=m},null,8,["modelValue","onUpdate:modelValue"])]),r("td",pt,[p(g,{small:"",class:"w-20",type:"text",modelValue:o.product_id,"onUpdate:modelValue":m=>o.product_id=m},null,8,["modelValue","onUpdate:modelValue"])]),r("td",ut,[i.getServiceMeasurements(o.service_id).length?(n(),X(Z,{key:1,small:"",modelValue:o.measurement_id,"onUpdate:modelValue":m=>o.measurement_id=m,placeholder:e.$t("select_x",{x:e.$tc("Measurement")})},{default:b(()=>[(n(!0),d(_,null,v(i.getServiceMeasurements(o.service_id),(m,ae)=>(n(),d("option",{key:"mo_"+u+ae,value:m.id},l(m.name),9,ht))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):(n(),d("div",mt,[r("button",{type:"button",onClick:m=>i.addMeasurement(o.service_id),class:"bg-gray-200 hover:bg-gray-400 border rounded px-4 py-2"},l(e.$t("Add")),9,ct)]))]),r("td",ft,[p(g,{small:"",class:"w-20",type:"number",modelValue:o.color,"onUpdate:modelValue":m=>o.color=m},null,8,["modelValue","onUpdate:modelValue"])]),r("td",gt,[p(g,{small:"",type:"number",modelValue:o.qty,"onUpdate:modelValue":m=>o.qty=m,class:"w-16 text-center"},null,8,["modelValue","onUpdate:modelValue"])]),r("td",bt,l(e.$decimals(o.price*o.qty)),1)]))),128))]),r("tfoot",null,[r("tr",null,[r("th",yt,l(e.$t("Total")),1),r("th",_t,l(e.$number(i.totalQuantity)),1),r("th",vt,l(e.$number(i.totalAmount)),1)]),s.form.discount?(n(),d("tr",xt,[r("th",wt,l(e.$t("Discount")),1),r("th",Ct,l(e.$number(i.discountAmount)),1)])):c("",!0),s.form.taxes.length?(n(),d(_,{key:1},[(n(!0),d(_,null,v(i.nonCompoundTaxes,(o,u)=>(n(),d("tr",{key:"tr_"+u},[r("th",Vt,l(o.label),1),r("th",kt,l(e.$number(i.calculateTax(o,!1))),1)]))),128)),(n(!0),d(_,null,v(i.compoundTaxes,(o,u)=>(n(),d("tr",{key:"ctr_"+u},[r("th",$t,l(o.label),1),r("th",Tt,l(e.$number(i.calculateTax(o,!0))),1)]))),128))],64)):c("",!0),s.form.taxes.length||s.form.discount?(n(),d("tr",Mt,[r("th",St,l(e.$t("Grand Total")),1),r("th",At,l(e.$number(i.totalAmount-i.discountAmount+i.taxAmount)),1)])):c("",!0)])])):(n(),d("div",{key:1,class:w(["px-4 py-3 bg-gray-200 text-gray-500",{"bg-red-200 text-red-500":((R=e.$page.props.errors)==null?void 0:R.services)&&((Q=e.$page.props.errors)==null?void 0:Q.services.length)}])},[(E=e.$page.props.errors)!=null&&E.services?(n(),d("div",ze,l((z=e.$page.props.errors)==null?void 0:z.services),1)):(n(),d("div",Ge,l(e.$t("Please add at least one service to order by selecting from above dropdown.")),1))],2))]),r("div",Ft,[r("label",Ut,l(e.$tc("Tax",2)),1),p(y,{multiple:"",transition:"","input-id":"taxes",options:a.taxes,modelValue:s.form.taxes,"onUpdate:modelValue":t[6]||(t[6]=o=>s.form.taxes=o),dir:e.$page.props.user.account.direction,placeholder:e.$t("add_x",{x:e.$tc("Tax",2)})},null,8,["options","modelValue","dir","placeholder"]),(G=e.$page.props.errors)!=null&&G.taxes?(n(),d("div",It,l((H=e.$page.props.errors)==null?void 0:H.taxes),1)):c("",!0)]),p(g,{modelValue:s.form.discount,"onUpdate:modelValue":t[7]||(t[7]=o=>s.form.discount=o),errors:(J=e.$page.props.errors)==null?void 0:J.discount,pattern:"[0-9]+(\\.[0-9]{1,2})?%?",label:e.$t("Discount (number or % only)"),class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["modelValue","errors","label"]),p(ee,{type:"file",accept:"image/*",label:e.$t("Photo"),modelValue:s.form.photo,"onUpdate:modelValue":t[8]||(t[8]=o=>s.form.photo=o),class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",errors:(K=e.$page.props.errors)==null?void 0:K.photo},null,8,["label","modelValue","errors"]),p(te,{modelValue:s.form.note,"onUpdate:modelValue":t[9]||(t[9]=o=>s.form.note=o),errors:(W=e.$page.props.errors)==null?void 0:W.note,label:e.$t("Comment / Note"),class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},null,8,["modelValue","errors","label"])]),r("div",Ot,[p(re,{loading:s.sending,class:"btn-gray",type:"submit"},{default:b(()=>[x(l(e.$t("create_x",{x:e.$tc("Order")})),1)]),_:1},8,["loading"])])],32)])]),p(k,{show:s.addMM,"max-width":"2xl",closeable:!0,onClose:t[12]||(t[12]=()=>s.addMM=!1)},{default:b(()=>[p(se,{modal:s.addMM,ddData:s.ddData,iservices:this.services,onClose:t[11]||(t[11]=()=>s.addMM=!1),action:i.updateCustomerMeasurement},null,8,["modal","ddData","iservices","action"])]),_:1},8,["show"]),p(k,{show:s.addC,"max-width":"2xl",closeable:!0,onClose:t[14]||(t[14]=()=>s.addC=!1)},{default:b(()=>[p(oe,{modal:s.addC,action:i.updateCustomer,onClose:t[13]||(t[13]=()=>s.addC=!1)},null,8,["modal","action"])]),_:1},8,["show"])])]}),_:1},8,["title"])}const tr=be(_e,[["render",Dt]]);export{tr as default};
