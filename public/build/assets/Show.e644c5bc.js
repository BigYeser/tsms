import{L as x,D as g}from"./Dropdown.8ce6d651.js";import{_ as y,r as h,o,c as i,a as e,t as n,b as _,d as r,f as b,h as p}from"./app.017a757f.js";const v={components:{Logo:x,Dropdown:g},props:{measurement:Object,modal:{default:!0},notify:{type:Boolean,default:!1}},metaInfo(){return{title:this.$t("Measurement Number",{x:this.measurement.id}),sending:!1,confirm:!1,send_sms:!1,emailing:!1,message:null,dialogButtonText:null,dialogAction:null,dialogTitle:null,dialogBody:null}},methods:{printMeasurement(){window.print()},editMeasurement(){this.$inertia.visit(this.route("measurements.edit",this.measurement.id)),this.$emit("close")},displayExtra(s){let l="";return Array.isArray(s)&&s.map((t,f)=>{for(let[c,a]of Object.entries(t)){if(l+="</tr>",a.includes("{")&&a.includes("}")&&a.includes(":")){l+=`<td class="w-32 border-b px-4 py-2"><strong>${c}</strong>:</td><td class="border-b px-4 py-2">`;const m=JSON.parse(a);for(let[u,d]of Object.entries(m))d&&(l+=u+" ");l+="</td>"}else l+=`<td class="w-32 border-b px-4 py-2"><strong>${c}</strong>:</td><td class="border-b px-4 py-2">${a}</td> `;l+="</tr>"}}),l},emailOrder(){this.sending=!0,this.emailing=!0,this.$axios.post(this.route("measurements.email",this.measurement.id)).then(s=>{this.sending=!1,this.emailing=!1,this.message=s.data.message||this.$t("System is unable to sent email, either customer do not have email or system settings are not correct.")}).catch(s=>{this.sending=!1,this.emailing=!1,this.message=s.response.data.message||this.$t("Request has been failed, please check the logs in storage folder and contact developer.")})},hide(){this.$emit("close")}}},w={key:0,class:"w-full ltr:text-left rtl:text-right"},k={key:0,class:"np flex justify-between items-center px-6 py-4 mb-4 bg-gray-100 border-b rounded-t"},N={class:"font-bold"},C={class:"flex items-center"},M=e("svg",{class:"fill-current text-black",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[e("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})],-1),B=[M],D={class:"print"},$={class:"max-w-2xl h-full py-4 px-6 leading-normal"},j={class:"flex flex-wrap xs:flex-no-wrap justify-around w-full items-start"},O={class:"text-gray-900 mx-auto xs:mx-0",style:{width:"180px"}},A=["alt","src"],L={class:"text-sm px-4 py-4 xs:py-0 text-center xs:text-left"},T={class:"font-extrabold"},V={class:"font-bold"},E={class:"text-sm"},I={class:"flex"},S=e("span",{class:"text-right ltr:mr-2 rtl:ml-2",style:{width:"90px"}},"No:",-1),P={class:"font-bold"},q={class:"flex"},z=e("span",{class:"text-right ltr:mr-2 rtl:ml-2",style:{width:"90px"}},"Date:",-1),J={class:"font-bold"},R={class:"inline-block"},F={id:"customer",class:"mt-6 w-full"},G={class:"px-2 py-2 border rounded-t font-bold"},H={class:"border rounded-b border-t-0 px-2 py-2"},K={class:"flex"},Q={class:"text-right ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},U={key:0,class:"flex"},W={class:"text-right ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},X={class:"flex"},Y={class:"text-right ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},Z={key:1,class:"flex"},ee={class:"text-right ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},te={id:"measurement",class:"mt-6 w-full"},se={class:"px-2 py-2 border rounded-t font-bold"},ne={class:"border rounded-b border-t-0 px-2 py-2"},le={class:"flex"},oe={class:"text-right ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},ae={key:0,class:"flex"},ie={class:"text-right ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},re={key:1,class:"flex"},de={class:"text-right ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},me={key:0,class:"pt-6"},ce={class:"font-bold"},ue={key:1,class:"np block xs:flex items-end justify-between px-6 py-4 mt-4 bg-gray-100 border-t rounded-b"},he={class:"m-1 xs:m-0"},_e=["disabled"],pe={key:0,class:"btn-spinner dark ltr:mr-2 rtl:ml-2"};function fe(s,l,t,f,c,a){const m=h("Icons"),u=h("logo");return t.measurement&&t.measurement.id?(o(),i("div",w,[t.modal?(o(),i("div",k,[e("p",N,n(s.$t("Measurement No",{x:t.measurement.id})),1),e("div",C,[e("a",{class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800",onClick:l[0]||(l[0]=d=>a.editMeasurement(t.measurement.id))},[_(m,{name:"pencil",class:"h-5 w-5 fill-current"})]),e("a",{class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800",onClick:l[1]||(l[1]=d=>a.printMeasurement())},[_(m,{name:"printer",class:"h-5 w-5 fill-current"})]),e("a",{class:"modal-close ml-2 cursor-pointer",onClick:l[2]||(l[2]=d=>s.$emit("close"))},B)])])):r("",!0),e("div",D,[e("div",$,[e("div",j,[e("div",O,[s.$page.props.user.account.logo_path?(o(),i("img",{key:0,alt:s.$page.props.user.account.name,src:s.$page.props.user.account.logo_path},null,8,A)):(o(),b(u,{key:1}))]),e("div",L,[e("div",T,n(t.measurement.account.name),1),e("div",V,n(t.measurement.account.phone),1),p(" "+n(t.measurement.account.email),1)]),e("div",E,[e("div",I,[S,e("span",P,n(t.measurement.id),1)]),e("div",q,[z,e("span",J,[e("span",R,n(t.measurement.appointment),1)])])])]),e("div",F,[e("div",G,n(s.$t("Customer Details")),1),e("div",H,[e("div",K,[e("span",Q,n(s.$t("Name"))+":",1),e("span",null,[e("strong",null,n(t.measurement.customer.name),1)])]),t.measurement.customer.address?(o(),i("div",U,[e("span",W,n(s.$t("Address"))+":",1),e("span",null,n(t.measurement.customer.address),1)])):r("",!0),e("div",X,[e("span",Y,n(s.$t("Phone"))+":",1),e("span",null,n(t.measurement.customer.phone),1)]),t.measurement.customer.email?(o(),i("div",Z,[e("span",ee,n(s.$t("Email"))+":",1),e("span",null,n(t.measurement.customer.email),1)])):r("",!0)])]),e("div",te,[e("div",se,n(s.$t("Measurement Details")),1),e("div",ne,[e("div",le,[e("span",oe,n(s.$t("Name"))+":",1),e("span",null,[e("strong",null,n(t.measurement.name),1)])]),t.measurement.appointment?(o(),i("div",ae,[e("span",ie,n(s.$t("Appointment Time"))+":",1),e("span",null,n(t.measurement.appointment),1)])):r("",!0),t.measurement.price?(o(),i("div",re,[e("span",de,n(s.$t("Price"))+":",1),e("span",null,n(t.measurement.price),1)])):r("",!0)])]),t.measurement.measurement?(o(),i("div",me,[e("h4",ce,n(s.$t("Description")),1),e("p",null,n(t.measurement.measurement),1)])):r("",!0)])]),t.modal?(o(),i("div",ue,[e("div",he,[e("button",{disabled:s.sending,onClick:l[3]||(l[3]=d=>a.emailOrder()),class:"inline-flex items-center mt-1 px-4 py-3 text-sm rounded bg-gray-200 hover:bg-gray-400 border ltr:mr-2 rtl:ml-2"},[s.sending?(o(),i("div",pe)):r("",!0),p(" Notify ")],8,_e)]),e("button",{onClick:l[4]||(l[4]=d=>a.hide()),class:"btn-gray"},n(s.$t("Close")),1)])):r("",!0)])):r("",!0)}const ye=y(v,[["render",fe]]);export{ye as default};
