import{L as n}from"./Layout.5fefc3ff.js";import{g as o}from"./debounce.2a8c9e5c.js";import{F as m}from"./FileInput.dc1eacad.js";import{T as d}from"./TextInput.f07d0249.js";import{d as u}from"./DeleteMixin.25e4dfb2.js";import{M as c}from"./Modal.da7e106d.js";import{S as h}from"./SelectInput.feab5e48.js";import{T as p}from"./TextareaInput.9f406594.js";import{L as l}from"./LoadingButton.4c9bc1b1.js";import{T as f}from"./TrashedMessage.e24443fb.js";import v from"./Form.040b56b5.js";import{D as _}from"./DeleteRestoreComponent.459d15d7.js";import{_ as x,r as y,o as g,f as b}from"./app.b2827fd0.js";import"./Dropdown.da1e49bc.js";import"./FlashMessages.a18f4900.js";import"./InputError.7562d243.js";import"./RadioInput.b431e535.js";import"./CheckboxInput.78ea6ac2.js";import"./Dialog.97976824.js";const T={mixins:[u("order")],props:{order:Object,members:Array,taxes:Array,iservices:Array,icustomers:Array},components:{Modal:c,Layout:n,FileInput:m,TextInput:d,SelectInput:h,TextareaInput:p,LoadingButton:l,TrashedMessage:f,MeasurementForm:v,DeleteRestoreComponent:_},data(){return{restore:!1,sending:!1,addMM:!1,ddData:null,form:{date:this.order.date,reference:this.order.reference,customer_id:this.order.customer.id,assigned_to:this.order.assigned_to?this.order.assigned_to.id:"",delivery_date:this.order.delivery_date,status:this.order.status,priority:this.order.priority,amount:this.order.amount,note:this.order.note,services:this.order.services,customer:this.order.customer,taxes:this.order.taxes.map(e=>(e.value=e.id,e.label=e.name,e)),discount:this.order.discount,discount_amount:this.order.discount_amount},staff:{},tax:null,allTaxes:[],services:[],service:null,customers:[],priority:null,staff_members:[],customer:{label:this.order.customer.name,value:this.order.customer.id},priorities:[{label:this.$t("Normal"),value:1},{label:this.$t("High"),value:2},{label:this.$t("Urgent"),value:3}]}},computed:{discountAmount(){if(!this.form.discount)return 0;if(this.form.discount.indexOf("%")!==-1){var e=this.form.discount.split("%");return parseFloat(this.totalAmount*(parseFloat(e)/100),4)}return parseFloat(this.form.discount)},compoundTaxes(){return this.form.taxes.filter(e=>e.compound)},nonCompoundTaxes(){return this.form.taxes.filter(e=>!e.compound)},nonCompoundTaxesAmount(){return this.nonCompoundTaxes.reduce((e,t)=>e+this.calculateTax(t,!1),0)},taxAmount(){return this.nonCompoundTaxesAmount+this.compoundTaxes.reduce((e,t)=>e+this.calculateTax(t,!0),0)},totalAmount(){return this.form.services.reduce((e,t)=>parseFloat(t.price)*parseFloat(t.qty)+e,0)},totalQuantity(){return this.form.services.reduce((e,t)=>parseFloat(t.qty)+e,0)}},mounted(){this.order.assigned_to&&(this.staff={label:this.order.assigned_to.name,value:this.order.assigned_to.id},this.members.push(this.staff)),this.allTaxes=this.taxes,this.services=this.iservices,this.customers=this.icustomers,this.customers.push(this.customer),this.staff_members=this.members,this.form.priority=this.priorities.find(e=>e.value==this.order.priority),this.form.services=this.order.services.map(e=>(e.id=e.service_id,e))},methods:{addToOrder(e){let t=this.getServiceMeasurements(e.id);this.form.services.push({...e,service_id:e.id,qty:1,measurement_id:t?t[0].id:null})},calculateTax(e,t=!1){return t?(this.totalAmount-this.discountAmount+this.nonCompoundTaxesAmount)*(parseFloat(e.rate)/100):(this.totalAmount-this.discountAmount)*(parseFloat(e.rate)/100)},updateCustomerMeasurement(e){this.form.customer.measurements.push(e),this.form.services=this.form.services.map(t=>(t.service_id==e.service_id&&(t.measurement_id=e.id),t))},addMeasurement(e){let t=this.services.find(i=>i.id==e);t={label:t.name,value:t.id,measurement_fields:t.measurement_fields};let s=this.customer,r=s.label+"'s "+t.label;this.ddData={name:r,service:t,customer:s},this.addMM=!0},getServiceMeasurements(e){if(this.form.customer){let t=this.form.customer.measurements.filter(s=>s.service_id==e);return t&&t.length?t:!1}},deleteService(e){this.form.services.splice(e,1)},staffChanged(e){this.staff=e||null,this.form.assigned_to=e?e.value:null},priorityChanged(e){this.priority=e||null,this.form.priority=e?e.value:null},customerChanged(e){this.customer=e||null,this.form.customer=e||null,this.form.customer_id=e?e.value:null,this.form.services=this.form.services.map(t=>(t.measurement=null,t.measurement_id=null,t))},searchCustomers(e,t){e&&(t(!0),this.searchingCustomers(t,e,this))},searchingCustomers:o((e,t,s)=>{fetch(s.route("ajax.customers")+"?measurements=1&search="+escape(t)).then(r=>{r.json().then(i=>s.customers=i),e(!1)})},350),searchServices(e,t){e&&(t(!0),this.searchingServices(t,e,this))},searchingServices:o((e,t,s)=>{fetch(s.route("ajax.services")+"?full=1&search="+escape(t)).then(r=>{r.json().then(i=>s.services=i),e(!1)})},350),searchStaff(e,t){e&&(t(!0),this.searchingStaff(t,e,this))},searchingStaff:o((e,t,s)=>{fetch(s.route("ajax.staff")+"?search="+escape(t)).then(r=>{r.json().then(i=>s.staff_members=i),e(!1)})},350),submit(){this.sending=!0;var e=new FormData;e.append("reference",this.form.reference||""),e.append("customer_id",this.form.customer_id||""),e.append("assigned_to",this.form.assigned_to||""),e.append("delivery_date",this.form.delivery_date||""),e.append("status",this.form.status||""),e.append("priority",this.form.priority?this.form.priority.value:""),e.append("note",this.form.note||""),e.append("discount",this.form.discount||""),e.append("photo",this.form.photo||""),e.append("_method","put"),this.form.taxes&&this.form.taxes.length?this.form.taxes.map((t,s)=>{e.append("taxes["+s+"][id]",t.id),e.append("taxes["+s+"][code]",t.code),e.append("taxes["+s+"][name]",t.name),e.append("taxes["+s+"][rate]",t.rate),e.append("taxes["+s+"][compound]",t.compound)}):e.append("taxes",[]),this.form.services.map((t,s)=>{e.append("services["+s+"][id]",t.id),e.append("services["+s+"][qty]",t.qty),e.append("services["+s+"][code]",t.code),e.append("services["+s+"][name]",t.name),e.append("services["+s+"][price]",t.price),e.append("services["+s+"][color]",t.color),e.append("services["+s+"][product_code]",t.product_code),e.append("services["+s+"][service_id]",t.service_id),e.append("services["+s+"][measurement_id]",t.measurement_id)}),this.$inertia.post(this.route("orders.update",this.order.id),e,{onFinish:()=>this.sending=!1})}}};function A(e,t,s,r,i,C){const a=y("Layout");return g(),b(a,{title:e.$t("edit_x",{x:this.$t("Order Number",{x:this.order.id})})},null,8,["title"])}const z=x(T,[["render",A]]);export{z as default};
