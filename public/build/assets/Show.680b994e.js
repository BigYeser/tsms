import{m as O}from"./md5.033a6035.js";import{L as T,D}from"./Dropdown.cf6684f9.js";import{D as B}from"./Dialog.ff1b71fa.js";import{M as P}from"./Modal.b9cd4323.js";import{S as j}from"./SmsDialog.e6110514.js";import L from"./Show.83fcc5f9.js";import{_ as F,r as c,o as n,c as d,a as t,t as s,F as b,b as m,e as g,d as u,h as p,f as S,j as v,n as R}from"./app.bb99bc40.js";import"./LoadingButton.a1b84804.js";import"./TextareaInput.e72c8d9d.js";import"./InputError.e399e5f9.js";const A={metaInfo(){return{title:this.$t("Order Number",{x:this.order.id})}},props:{order:{default:{}},modal:{default:!0},edit:{type:Function},hash:{type:String}},components:{Logo:T,Dropdown:D,Dialog:B,Modal:P,MeasurementComponent:L,SmsDialog:j},computed:{total_paid:function(){return this.$number(this.order.payments.reduce((e,r)=>e+parseFloat(r.amount),0))}},data(){return{sending:!1,confirm:!1,send_sms:!1,emailing:!1,message:null,dialogButtonText:null,dialogAction:null,dialogTitle:null,dialogBody:null,viewMeasurement:!1}},methods:{showMeasurement(e){fetch(this.route("measurements.show",[e.id,O.exports(e.name)])+"?ajax=1").then(r=>{r.json().then(o=>{this.measurement=o})})},printOrder(){window.print()},editOrder(){this.$emit("close"),this.$inertia.get(route("orders.edit",this.order.id))},updateStatusNow(e){this.$emit("close"),this.$inertia.put(this.route("orders.status",this.order.id),{status:e})},updateStatusNowFromUrl(e){console.log(e),this.$inertia.put(this.route("orders.status",this.order.id),{status:e})},updateStatus(e){this.order.status=="Completed"?this.message=this.$t("Order is already marked as completed."):(this.dialogButtonText=this.$t("Yes"),this.dialogAction=()=>this.updateStatusNow(e),this.dialogTitle=this.$t("update_status_x",{x:this.$t(e)}),this.dialogBody=this.$t("ask_update_status_x",{x:this.$t(e)}),this.confirm=!0)},smsToCustomer(){this.send_sms=!0},emailOrder(){this.sending=!0,this.emailing=!0,this.$axios.post(this.route("orders.email",this.order.id)).then(e=>{this.sending=!1,this.emailing=!1,this.message=e.data.message||this.$t("System is unable to sent email, either customer do not have email or system settings are not correct.")}).catch(e=>{this.sending=!1,this.emailing=!1,this.message=e.response.data.message||this.$t("Request has been failed, please check the logs in storage folder and contact developer.")})},hide(){this.$emit("close")},displayExtra(e){let r="";return Array.isArray(e)&&e.map((o,y)=>{for(let[i,a]of Object.entries(o)){if(y%2==0&&(r+="<tr>"),a.includes("{")&&a.includes("}")&&a.includes(":")){r+=`<td class="w-12 px-2 py-2"><strong>${i}</strong>:</td><td class="w-12 px-2 py-2">`;const h=JSON.parse(a);for(let[x,f]of Object.entries(h))f&&(r+=x+" ");r+="</td>"}else r+=`<td class="w-12 px-2 py-2"><strong>${i}</strong>:</td><td class="w-12 px-2 py-2">${a}</td> `;y%2!=0&&(r+="</tr>")}}),e.length%2!=0&&(r+="</tr>"),r}}},I={key:0,class:"w-full ltr:text-left rtl:text-right"},V={key:0,class:"np flex justify-between items-center px-6 py-4 mb-4 bg-gray-100 border-b rounded-t"},E={class:"font-bold"},q={class:"flex items-center"},z={class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800"},H={class:"mt-2 py-2 bg-gray-800 rounded text-sm"},U=["disabled"],G=t("svg",{class:"fill-current text-black",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[t("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})],-1),J=[G],Q={key:1},Y={class:"print"},K={class:"max-w-2xl h-full py-3 px-3 leading-normal"},W={class:"flex flex-wrap xs:flex-no-wrap justify-around w-full"},X={class:"text-sm px-0 py-0 xs:py-0 xs:ltr:text-left rtl:text-right"},Z={class:"font-extrabold"},tt={class:"font-bold"},et={class:"font-bold"},rt={class:"font-bold"},st=t("div",{class:"font-bold"},"346671",-1),ot=t("div",{class:"font-bold"},"TRN 100009122100003",-1),lt={class:"text-gray-900 mx-auto xs:mx-0 w-auto"},nt=["alt","src"],at={key:0,class:"my-6 px-4 py-3 border rounded"},dt=["href"],it=t("br",null,null,-1),ut=t("hr",null,null,-1),mt=t("b",null,null,-1),ht={class:"table table-borderless"},ct=t("thead",null,[t("th",{width:"40%"},"Prepared For"),t("th",{width:"40%"},"Prepared In"),t("th",null,"Invoce Number")],-1),gt={class:"align-top"},bt={class:"align-top"},pt={class:"align-top"},yt=t("br",null,null,-1),xt=t("hr",null,null,-1),ft=t("br",null,null,-1),_t={class:"border rounded leading-tight"},vt={class:"px-4 py-3 border-b rounded-t font-bold"},wt={class:"rounded-b overflow-x-auto scroll-on-light"},kt={class:"w-full all max-w-full min-w-0"},Ct={class:"border-b bg-gray-200 px-4 py-2"},St={class:"border-b px-4 py-2 bg-gray-200 w-12"},$t={class:"border-b px-4 py-2 bg-gray-200 w-12"},Mt={class:"border-b px-4 py-2 bg-gray-200 w-16"},Nt={class:"border-b px-4 py-2 bg-gray-200 w-12"},Ot={class:"border-b px-4 py-2 bg-gray-200"},Tt={class:"border-b px-4 py-2"},Dt={style:{"min-width":"180px"}},Bt={key:0,class:"mt-6 border rounded leading-tight"},Pt={class:"rounded overflow-x-auto scroll-on-light"},jt=["innerHTML"],Lt={class:"border-b px-4 py-2 ltr:text-right rtl:text-left"},Ft={class:"border-b px-4 py-2 ltr:text-right rtl:text-left"},Rt={class:"border-b px-4 py-2 ltr:text-right rtl:text-left"},At={class:"border-b px-4 py-2 ltr:text-right rtl:text-left"},It={class:"border-b px-4 py-2 ltr:text-right rtl:text-left"},Vt={colspan:"5",class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},Et={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},qt={key:0},zt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left",colspan:"5"},Ht={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},Ut={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left",colspan:"5"},Gt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},Jt={key:2},Qt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left",colspan:"5"},Yt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},Kt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left font-normal",colspan:"5"},Wt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left font-normal"},Xt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left",colspan:"5"},Zt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},te={class:"pt-6"},ee={class:"font-bold"},re={key:2,class:"np block xs:flex items-end justify-between px-6 py-4 mt-4 bg-gray-100 border-t rounded-b"},se={class:"m-1 xs:m-0"},oe=["disabled"],le={key:0,class:"btn-spinner dark ltr:mr-2 rtl:ml-2"},ne=["disabled"],ae={key:0,class:"btn-spinner dark ltr:mr-2 rtl:ml-2"},de={class:"flex items-center cursor-pointer select-none group px-4 py-3 text-sm rounded bg-gray-200 hover:bg-gray-400 border ltr:mr-2 rtl:ml-2"},ie={class:"mb-2 py-2 bg-gray-800 rounded text-sm"};function ue(e,r,o,y,i,a){var C;const h=c("Icons"),x=c("Dropdown"),f=c("logo"),$=c("dropdown"),M=c("MeasurementComponent"),w=c("Modal"),N=c("SmsDialog"),k=c("Dialog");return o.order&&o.order.id?(n(),d("div",I,[o.modal?(n(),d("div",V,[t("p",E,s(e.$t("Order Number",{x:o.order.id})),1),t("div",q,[o.order.status!="Completed"&&(e.$page.props.user.edit_all||e.$page.props.user.id==((C=o.order.user)==null?void 0:C.id))?(n(),d(b,{key:0},[m(x,{placement:"bottom-end"},{dropdown:g(()=>[t("div",H,[t("button",{type:"button",onClick:r[0]||(r[0]=l=>a.updateStatus("Preparing")),class:"block w-full ltr:text-left rtl:text-right px-6 py-3 text-white hover:bg-gray-900 hover:text-white"},s(e.$t("mark_as_x",{x:e.$t("Preparing")})),1),t("button",{type:"button",onClick:r[1]||(r[1]=l=>a.updateStatus("Ready")),class:"block w-full ltr:text-left rtl:text-right px-6 py-3 text-white hover:bg-gray-900 hover:text-white"},s(e.$t("mark_as_x",{x:e.$t("Ready")})),1),t("button",{type:"button",onClick:r[2]||(r[2]=l=>a.updateStatus("Completed")),class:"block w-full ltr:text-left rtl:text-right px-6 py-3 text-white hover:bg-gray-900 hover:text-white"},s(e.$t("mark_as_x",{x:e.$t("Completed")})),1)])]),default:g(()=>[t("div",z,[m(h,{class:"w-5 h-5 fill-current",name:"scissors"})])]),_:1}),t("a",{onClick:r[3]||(r[3]=l=>a.updateStatus("Preparing")),class:"modal-close cursor-pointer text-gray-700 hover:text-gray-800"},[m(h,{name:"scissors",class:"h-5 w-5 fill-current mr-3"})]),t("a",{onClick:r[4]||(r[4]=l=>a.updateStatus("Ready")),class:"modal-close cursor-pointer text-gray-700 hover:text-gray-800"},[m(h,{name:"thumb",class:"h-5 w-5 fill-current mr-3"})]),t("a",{onClick:r[5]||(r[5]=l=>a.updateStatus("Completed")),class:"modal-close cursor-pointer text-gray-700 hover:text-gray-800"},[m(h,{name:"check2",class:"h-5 w-5 fill-current mr-3"})])],64)):u("",!0),t("a",{onClick:r[6]||(r[6]=l=>a.printOrder()),class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800"},[m(h,{name:"printer",class:"h-5 w-5 fill-current"})]),e.$page.props.user.edit_all||e.$page.props.user.id==o.order.user.id?(n(),d("a",{key:1,onClick:r[7]||(r[7]=l=>a.editOrder(o.order.id)),class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800"},[m(h,{name:"pencil",class:"h-5 w-5 fill-current"})])):u("",!0),e.$page.props.user.account.sms_enabled&&(e.$page.props.user.can_sms||e.$page.props.user.owner)?(n(),d("a",{key:2,onClick:r[8]||(r[8]=l=>a.smsToCustomer()),class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800"},[m(h,{name:"sms",class:"h-5 w-5 fill-current"})])):u("",!0),t("button",{type:"button",disabled:i.emailing,onClick:r[9]||(r[9]=l=>a.emailOrder()),class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800"},[m(h,{name:"email",class:"h-5 w-5 fill-current"})],8,U),t("a",{class:"modal-close ml-2 cursor-pointer",onClick:r[10]||(r[10]=l=>a.hide())},J)])])):u("",!0),o.hash?(n(),d("div",Q,s(a.updateStatusNowFromUrl("Preparing")),1)):u("",!0),p(" "+s(o.hash)+" ",1),t("div",Y,[t("div",K,[t("div",W,[t("div",X,[t("div",Z,s(o.order.account.name),1),t("div",tt,s(o.order.account.phone),1),t("div",et,s(o.order.account.email),1),t("div",rt,s(o.order.account.address),1),st,ot]),t("div",lt,[e.$page.props.user.account.logo_path?(n(),d("img",{key:0,alt:e.$page.props.user.account.name,src:e.$page.props.user.account.logo_path},null,8,nt)):(n(),S(f,{key:1}))])]),o.order.account.header?(n(),d("div",at,s(o.order.account.header),1)):u("",!0),o.order.photo_path?(n(),d("a",{key:1,target:"_blank",class:"np w-full block my-6 px-4 py-3 rounded border bg-gray-200 hover:bg-gray-300",href:`/img/${o.order.photo_path}?ref=${e.$page.props.user?e.$page.props.user.id+"_"+o.order.hash:o.order.hash}`},s(e.$t("View Order Photo")),9,dt)):u("",!0),it,ut,mt,t("table",ht,[ct,t("tr",null,[t("td",gt,[t("div",null,s(o.order.customer.name),1),t("div",null,s(o.order.customer.address),1),t("div",null,s(o.order.customer.email),1),t("div",null,s(o.order.customer.phone),1)]),t("td",bt,s(e.$date(o.order.delivery_date)),1),t("td",pt,s(o.order.id),1)])]),yt,xt,ft,t("div",_t,[t("p",vt,s(e.$tc("Service",2)),1),t("div",wt,[t("table",kt,[t("thead",null,[t("tr",null,[t("th",Ct,s(e.$t("Item / Details")),1),t("th",St,s(e.$t("Code")),1),t("th",$t,s(e.$t("Color")),1),t("th",Mt,s(e.$t("Price")),1),t("th",Nt,s(e.$t("Qty")),1),t("th",Ot,s(e.$t("Amount")),1)])]),t("tbody",null,[(n(!0),d(b,null,v(o.order.services,l=>(n(),d("tr",{key:"service_"+l.id,class:"align-top"},[t("td",Tt,[t("div",Dt,[t("div",null,s(l.name),1),l.measurement.extra_attributes&&l.measurement.extra_attributes.length?(n(),d("div",Bt,[t("div",Pt,[t("table",{class:"table table-borderless",innerHTML:a.displayExtra(l.measurement.extra_attributes)},null,8,jt)])])):u("",!0)])]),t("td",Lt,s(l.product_code),1),t("td",Ft,s(l.color),1),t("td",Rt,s(e.$number(l.price)),1),t("td",At,s(e.$number(l.qty)),1),t("td",It,s(e.$number(l.amount)),1)]))),128))]),t("tfoot",null,[t("tr",null,[t("th",Vt,s(e.$t("Total")),1),t("th",Et,s(e.$number(o.order.total)),1)]),o.order.discount?(n(),d("tr",qt,[t("th",zt,s(e.$t("Discount")),1),t("th",Ht,s(e.$number(o.order.discount_amount)),1)])):u("",!0),o.order.taxes.length?(n(!0),d(b,{key:1},v(o.order.taxes,(l,_)=>(n(),d("tr",{key:"tr_"+_},[t("th",Ut,s(l.name),1),t("th",Gt,s(e.$number(l.pivot.total_amount)),1)]))),128)):u("",!0),o.order.taxes.length||o.order.discount?(n(),d("tr",Jt,[t("th",Qt,s(e.$t("Grand Total")),1),t("th",Yt,s(e.$number(o.order.grand_total)),1)])):u("",!0),o.order.payments.length?(n(),d(b,{key:3},[(n(!0),d(b,null,v(o.order.payments,(l,_)=>(n(),d("tr",{key:"payment_"+_},[t("th",Kt,s(e.$tc("Payment"))+" ("+s(e.$date(l.date))+") ",1),t("th",Wt,s(e.$number(l.amount)),1)]))),128)),t("tr",null,[t("th",Xt,s(e.$t("Balance")),1),t("th",Zt,s(e.$number(o.order.grand_total-this.total_paid)),1)])],64)):u("",!0)])])])]),t("div",te,[t("h4",ee,s(e.$t("Comment / Note")),1),t("p",null,s(o.order.note),1)]),o.order.account.footer?(n(),d("div",{key:2,class:R(["mt-6 px-4 py-3 border rounded",o.modal?"":"mb-3"])},s(o.order.account.footer),3)):u("",!0)])]),o.modal?(n(),d("div",re,[t("div",se,[e.$page.props.user.edit_all||e.$page.props.user.id==o.order.user.id?(n(),d("button",{key:0,onClick:r[11]||(r[11]=l=>a.editOrder()),class:"px-4 py-3 text-sm rounded bg-gray-200 hover:bg-gray-400 border ltr:mr-2 rtl:ml-2"},s(e.$t("Edit")),1)):u("",!0),e.$page.props.user.account.sms_enabled&&(e.$page.props.user.can_sms||e.$page.props.user.owner)?(n(),d("button",{key:1,disabled:i.sending,onClick:r[12]||(r[12]=l=>a.smsToCustomer()),class:"inline-flex items-center mt-1 px-4 py-3 text-sm rounded bg-gray-200 hover:bg-gray-400 border ltr:mr-2 rtl:ml-2"},[i.sending?(n(),d("div",le)):u("",!0),p(" "+s(e.$t("SMS")),1)],8,oe)):u("",!0),t("button",{disabled:i.sending,onClick:r[13]||(r[13]=l=>a.emailOrder()),class:"inline-flex items-center mt-1 px-4 py-3 text-sm rounded bg-gray-200 hover:bg-gray-400 border ltr:mr-2 rtl:ml-2"},[i.sending?(n(),d("div",ae)):u("",!0),p(" Notify ")],8,ne),o.order.status!="Completed"&&(e.$page.props.user.edit_all||e.$page.props.user.id==o.order.user.id)?(n(),S($,{key:2,class:"mt-1",placement:"top-start"},{dropdown:g(()=>[t("div",ie,[t("button",{type:"button",onClick:r[14]||(r[14]=l=>a.updateStatus("Completed")),class:"block w-full ltr:text-left rtl:text-right px-6 py-3 text-white hover:bg-gray-900 hover:text-white"},s(e.$t("mark_as_x",{x:e.$t("Completed")})),1),t("button",{type:"button",onClick:r[15]||(r[15]=l=>a.updateStatus("Ready")),class:"block w-full ltr:text-left rtl:text-right px-6 py-3 text-white hover:bg-gray-900 hover:text-white"},s(e.$t("mark_as_x",{x:e.$t("Ready")})),1),t("button",{type:"button",onClick:r[16]||(r[16]=l=>a.updateStatus("Preparing")),class:"block w-full ltr:text-left rtl:text-right px-6 py-3 text-white hover:bg-gray-900 hover:text-white"},s(e.$t("mark_as_x",{x:e.$t("Preparing")})),1)])]),default:g(()=>[t("div",de,[p(s(e.$t("Status"))+" ",1),m(h,{class:"w-2 h-2 fill-current ml-2",name:"cheveron-up"})])]),_:1})):u("",!0)]),t("button",{onClick:r[17]||(r[17]=l=>a.hide()),class:"btn-gray"},s(e.$t("Close")),1)])):u("",!0),m(w,{show:i.viewMeasurement,"max-width":"2xl",closeable:!0,onClose:r[19]||(r[19]=l=>i.viewMeasurement=!1)},{default:g(()=>{var l;return[m(M,{measurement:e.measurement,onClose:r[18]||(r[18]=()=>i.viewMeasurement=!1),notify:o.order.customer.id!=((l=e.measurement)==null?void 0:l.customer.id)},null,8,["measurement","notify"])]}),_:1},8,["show"]),m(w,{show:i.send_sms,"max-width":"sm",closeable:!1,onClose:r[21]||(r[21]=l=>i.send_sms=!1)},{default:g(()=>[m(N,{order:o.order,onClose:r[20]||(r[20]=()=>i.send_sms=!1)},null,8,["order"])]),_:1},8,["show"]),m(k,{show:i.message,content:i.message,close:()=>i.message=null},null,8,["show","content","close"]),m(k,{show:i.confirm,close:()=>i.confirm=!1,"action-text":i.dialogButtonText,action:i.dialogAction,title:i.dialogTitle,content:i.dialogBody},null,8,["show","close","action-text","action","title","content"])])):u("",!0)}const ve=F(A,[["render",ue]]);export{ve as default};
