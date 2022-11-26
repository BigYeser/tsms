import{m as D}from"./md5.2ef7b393.js";import{L as T,D as N}from"./Dropdown.6e14437e.js";import{D as B}from"./Dialog.0202b76e.js";import{M as O}from"./Modal.23c7a743.js";import{S as P}from"./SmsDialog.063ecfe7.js";import j from"./Show.1f7f08e9.js";import{_ as I,r as h,o as n,c as d,a as t,t as s,f as x,e as g,d as i,b as m,F as b,j as _,n as L,h as y}from"./app.61ceeba5.js";import"./LoadingButton.7efa7ee6.js";import"./TextareaInput.a2b169ba.js";import"./InputError.2386c93f.js";const R={metaInfo(){return{title:this.$t("Order Number",{x:this.order.id})}},props:{order:{default:{}},modal:{default:!0},edit:{type:Function}},components:{Logo:T,Dropdown:N,Dialog:B,Modal:O,MeasurementComponent:j,SmsDialog:P},computed:{total_paid:function(){return this.$number(this.order.payments.reduce((e,o)=>e+parseFloat(o.amount),0))}},data(){return{sending:!1,confirm:!1,send_sms:!1,emailing:!1,message:null,dialogButtonText:null,dialogAction:null,dialogTitle:null,dialogBody:null,viewMeasurement:!1}},methods:{showMeasurement(e){fetch(this.route("measurements.show",[e.id,D.exports(e.name)])+"?ajax=1").then(o=>{o.json().then(r=>{this.measurement=r,this.viewMeasurement=!0})})},printOrder(){window.print()},editOrder(){this.$emit("close"),this.$inertia.get(route("orders.edit",this.order.id))},updateStatusNow(e){this.$emit("close"),this.$inertia.put(this.route("orders.status",this.order.id),{status:e})},updateStatus(e){this.order.status=="Completed"?this.message=this.$t("Order is already marked as completed."):(this.dialogButtonText=this.$t("Yes"),this.dialogAction=()=>this.updateStatusNow(e),this.dialogTitle=this.$t("update_status_x",{x:this.$t(e)}),this.dialogBody=this.$t("ask_update_status_x",{x:this.$t(e)}),this.confirm=!0)},smsToCustomer(){this.send_sms=!0},emailOrder(){this.sending=!0,this.emailing=!0,this.$axios.post(this.route("orders.email",this.order.id)).then(e=>{this.sending=!1,this.emailing=!1,this.message=e.data.message||this.$t("System is unable to sent email, either customer do not have email or system settings are not correct.")}).catch(e=>{this.sending=!1,this.emailing=!1,this.message=e.response.data.message||this.$t("Request has been failed, please check the logs in storage folder and contact developer.")})},hide(){this.$emit("close")}}},F={key:0,class:"w-100 ltr:text-left rtl:text-right"},V={key:0,class:"np flex justify-between items-center px-6 py-4 mb-4 bg-gray-100 border-b rounded-t"},A={class:"font-bold"},q={class:"flex items-center"},z={class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800"},E={class:"mt-2 py-2 bg-gray-800 rounded text-sm"},G=["disabled"],Q=t("svg",{class:"fill-current text-black",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[t("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})],-1),Y=[Q],H={class:"print"},J={class:"max-w-2xl h-full py-3 px-3 leading-normal"},K={class:"flex flex-wrap xs:flex-no-wrap justify-around w-full"},U={class:"text-gray-900 mx-auto xs:mx-0",style:{width:"180px"}},W=["alt","src"],X={class:"text-sm px-0 py-0 xs:py-0 xs:ltr:text-right rtl:text-right"},Z={class:"font-extrabold"},tt={class:"font-bold"},et={class:"font-bold"},st={class:"font-bold"},rt=t("div",{class:"font-bold"},"346671",-1),ot=t("div",{class:"font-bold"},"TRN 100009122100003",-1),lt={key:0,class:"my-6 px-4 py-3 border rounded"},nt=["href"],dt=t("br",null,null,-1),at=t("hr",null,null,-1),it=t("b",null,null,-1),ut={class:"table table-borderless"},mt=t("thead",null,[t("th",{width:"40%"},"Prepared For"),t("th",{width:"40%"},"Prepared In"),t("th",null,"Invoce Number")],-1),ht={class:"align-top"},ct={class:"align-top"},gt={class:"align-top align-text-center"},bt=t("br",null,null,-1),pt=t("hr",null,null,-1),yt=t("br",null,null,-1),xt={class:"border rounded leading-tight"},_t={class:"px-4 py-3 border-b rounded-t font-bold"},ft={class:"rounded-b overflow-x-auto scroll-on-light"},vt={class:"w-full all max-w-full min-w-0"},wt={class:"border-b bg-gray-200 px-4 py-2"},kt={class:"border-b px-4 py-2 bg-gray-200 w-12"},Ct={class:"border-b px-4 py-2 bg-gray-200 w-12"},$t={class:"border-b px-4 py-2 bg-gray-200 w-16"},St={class:"border-b px-4 py-2 bg-gray-200 w-12"},Mt={class:"border-b px-4 py-2 bg-gray-200"},Dt={class:"border-b px-4 py-2"},Tt={style:{"min-width":"180px"}},Nt={class:"text-muted"},Bt=["onClick"],Ot={class:"border-b px-4 py-2 ltr:text-right rtl:text-left"},Pt={class:"border-b px-4 py-2 ltr:text-right rtl:text-left"},jt={class:"border-b px-4 py-2 ltr:text-right rtl:text-left"},It={class:"border-b px-4 py-2 ltr:text-right rtl:text-left"},Lt={class:"border-b px-4 py-2 ltr:text-right rtl:text-left"},Rt=t("tr",null,[t("td",{colspan:"4"},[t("table",null,[t("tr",null,[t("td",null,"1"),t("td",null,"2")]),t("tr",null,[t("td",null,"3"),t("td",null,"4")])])]),t("td"),t("td")],-1),Ft={colspan:"5",class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},Vt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},At={key:0},qt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left",colspan:"5"},zt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},Et={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left",colspan:"5"},Gt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},Qt={key:2},Yt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left",colspan:"5"},Ht={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},Jt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left font-normal",colspan:"5"},Kt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left font-normal"},Ut={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left",colspan:"5"},Wt={class:"border-b px-4 py-2 bg-gray-200 ltr:text-right rtl:text-left"},Xt={class:"pt-6"},Zt={class:"font-bold"},te={class:"print-only mt-auto w-full text-center text-sm text-gray-600 pt-6"},ee={key:1,class:"np block xs:flex items-end justify-between px-6 py-4 mt-4 bg-gray-100 border-t rounded-b"},se={class:"m-1 xs:m-0"},re=["disabled"],oe={key:0,class:"btn-spinner dark ltr:mr-2 rtl:ml-2"},le=["disabled"],ne={key:0,class:"btn-spinner dark ltr:mr-2 rtl:ml-2"},de={class:"flex items-center cursor-pointer select-none group px-4 py-3 text-sm rounded bg-gray-200 hover:bg-gray-400 border ltr:mr-2 rtl:ml-2"},ae={class:"mb-2 py-2 bg-gray-800 rounded text-sm"};function ie(e,o,r,ue,a,u){var w;const c=h("Icons"),k=h("Dropdown"),C=h("logo"),$=h("dropdown"),S=h("MeasurementComponent"),f=h("Modal"),M=h("SmsDialog"),v=h("Dialog");return r.order&&r.order.id?(n(),d("div",F,[r.modal?(n(),d("div",V,[t("p",A,s(e.$t("Order Number",{x:r.order.id})),1),t("div",q,[r.order.status!="Completed"&&(e.$page.props.user.edit_all||e.$page.props.user.id==((w=r.order.user)==null?void 0:w.id))?(n(),x(k,{key:0,placement:"bottom-end"},{dropdown:g(()=>[t("div",E,[t("button",{type:"button",onClick:o[0]||(o[0]=l=>u.updateStatus("Preparing")),class:"block w-full ltr:text-left rtl:text-right px-6 py-3 text-white hover:bg-gray-900 hover:text-white"},s(e.$t("mark_as_x",{x:e.$t("Preparing")})),1),t("button",{type:"button",onClick:o[1]||(o[1]=l=>u.updateStatus("Ready")),class:"block w-full ltr:text-left rtl:text-right px-6 py-3 text-white hover:bg-gray-900 hover:text-white"},s(e.$t("mark_as_x",{x:e.$t("Ready")})),1),t("button",{type:"button",onClick:o[2]||(o[2]=l=>u.updateStatus("Completed")),class:"block w-full ltr:text-left rtl:text-right px-6 py-3 text-white hover:bg-gray-900 hover:text-white"},s(e.$t("mark_as_x",{x:e.$t("Completed")})),1)])]),default:g(()=>[t("div",z,[m(c,{class:"w-5 h-5 fill-current",name:"scissors"})])]),_:1})):i("",!0),t("a",{onClick:o[3]||(o[3]=l=>u.printOrder()),class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800"},[m(c,{name:"printer",class:"h-5 w-5 fill-current"})]),e.$page.props.user.edit_all||e.$page.props.user.id==r.order.user.id?(n(),d("a",{key:1,onClick:o[4]||(o[4]=l=>u.editOrder(r.order.id)),class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800"},[m(c,{name:"pencil",class:"h-5 w-5 fill-current"})])):i("",!0),e.$page.props.user.account.sms_enabled&&(e.$page.props.user.can_sms||e.$page.props.user.owner)?(n(),d("a",{key:2,onClick:o[5]||(o[5]=l=>u.smsToCustomer()),class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800"},[m(c,{name:"sms",class:"h-5 w-5 fill-current"})])):i("",!0),t("button",{type:"button",disabled:a.emailing,onClick:o[6]||(o[6]=l=>u.emailOrder()),class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800"},[m(c,{name:"email",class:"h-5 w-5 fill-current"})],8,G),t("a",{class:"modal-close ml-2 cursor-pointer",onClick:o[7]||(o[7]=l=>u.hide())},Y)])])):i("",!0),t("div",H,[t("div",J,[t("div",K,[t("div",U,[e.$page.props.user.account.logo_path?(n(),d("img",{key:0,alt:e.$page.props.user.account.name,src:e.$page.props.user.account.logo_path},null,8,W)):(n(),x(C,{key:1}))]),t("div",X,[t("div",Z,s(r.order.account.name),1),t("div",tt,s(r.order.account.phone),1),t("div",et,s(r.order.account.email),1),t("div",st,s(r.order.account.address),1),rt,ot])]),r.order.account.header?(n(),d("div",lt,s(r.order.account.header),1)):i("",!0),r.order.photo_path?(n(),d("a",{key:1,target:"_blank",class:"np w-full block my-6 px-4 py-3 rounded border bg-gray-200 hover:bg-gray-300",href:`/img/${r.order.photo_path}?ref=${e.$page.props.user?e.$page.props.user.id+"_"+r.order.hash:r.order.hash}`},s(e.$t("View Order Photo")),9,nt)):i("",!0),dt,at,it,t("table",ut,[mt,t("tr",null,[t("td",ht,[t("div",null,s(r.order.customer.name),1),t("div",null,s(r.order.customer.address),1),t("div",null,s(r.order.customer.email),1),t("div",null,s(r.order.customer.phone),1)]),t("td",ct,s(e.$date(r.order.delivery_date)),1),t("td",gt,s(r.order.id),1)])]),bt,pt,yt,t("div",xt,[t("p",_t,s(e.$tc("Service",2)),1),t("div",ft,[t("table",vt,[t("thead",null,[t("tr",null,[t("th",wt,s(e.$t("Item / Details")),1),t("th",kt,s(e.$t("Code")),1),t("th",Ct,s(e.$t("Color")),1),t("th",$t,s(e.$t("Price")),1),t("th",St,s(e.$t("Qty")),1),t("th",Mt,s(e.$t("Amount")),1)])]),t("tbody",null,[(n(!0),d(b,null,_(r.order.services,l=>(n(),d(b,{key:"service_"+l.id},[t("tr",null,[t("td",Dt,[t("div",Tt,[t("div",null,s(l.name),1),t("div",null,[t("small",Nt,[y(s(e.$tc("Measurement"))+": ",1),t("button",{class:"text-indigo-600 hover:fonr-bold",onClick:p=>u.showMeasurement(l.measurement)},s(l.measurement.name),9,Bt)])])])]),t("td",Ot,s(e.$number(l.product_code)),1),t("td",Pt,s(l.color),1),t("td",jt,s(e.$number(l.price)),1),t("td",It,s(e.$number(l.qty)),1),t("td",Lt,s(e.$number(l.amount)),1)]),Rt],64))),128))]),t("tfoot",null,[t("tr",null,[t("th",Ft,s(e.$t("Total")),1),t("th",Vt,s(e.$number(r.order.total)),1)]),r.order.discount?(n(),d("tr",At,[t("th",qt,s(e.$t("Discount")),1),t("th",zt,s(e.$number(r.order.discount_amount)),1)])):i("",!0),r.order.taxes.length?(n(!0),d(b,{key:1},_(r.order.taxes,(l,p)=>(n(),d("tr",{key:"tr_"+p},[t("th",Et,s(l.name),1),t("th",Gt,s(e.$number(l.pivot.total_amount)),1)]))),128)):i("",!0),r.order.taxes.length||r.order.discount?(n(),d("tr",Qt,[t("th",Yt,s(e.$t("Grand Total")),1),t("th",Ht,s(e.$number(r.order.grand_total)),1)])):i("",!0),r.order.payments.length?(n(),d(b,{key:3},[(n(!0),d(b,null,_(r.order.payments,(l,p)=>(n(),d("tr",{key:"payment_"+p},[t("th",Jt,s(e.$tc("Payment"))+" ("+s(e.$date(l.date))+") ",1),t("th",Kt,s(e.$number(l.amount)),1)]))),128)),t("tr",null,[t("th",Ut,s(e.$t("Balance")),1),t("th",Wt,s(e.$number(r.order.grand_total-this.total_paid)),1)])],64)):i("",!0)])])])]),t("div",Xt,[t("h4",Zt,s(e.$t("Comment / Note")),1),t("p",null,s(r.order.note),1)]),r.order.account.footer?(n(),d("div",{key:2,class:L(["mt-6 px-4 py-3 border rounded",r.modal?"":"mb-3"])},s(r.order.account.footer),3)):i("",!0),t("div",te,s(e.$t("This is a computer-generated document. No signature is required.")),1)])]),r.modal?(n(),d("div",ee,[t("div",se,[e.$page.props.user.edit_all||e.$page.props.user.id==r.order.user.id?(n(),d("button",{key:0,onClick:o[8]||(o[8]=l=>u.editOrder()),class:"px-4 py-3 text-sm rounded bg-gray-200 hover:bg-gray-400 border ltr:mr-2 rtl:ml-2"},s(e.$t("Edit")),1)):i("",!0),e.$page.props.user.account.sms_enabled&&(e.$page.props.user.can_sms||e.$page.props.user.owner)?(n(),d("button",{key:1,disabled:a.sending,onClick:o[9]||(o[9]=l=>u.smsToCustomer()),class:"inline-flex items-center mt-1 px-4 py-3 text-sm rounded bg-gray-200 hover:bg-gray-400 border ltr:mr-2 rtl:ml-2"},[a.sending?(n(),d("div",oe)):i("",!0),y(" "+s(e.$t("SMS")),1)],8,re)):i("",!0),t("button",{disabled:a.sending,onClick:o[10]||(o[10]=l=>u.emailOrder()),class:"inline-flex items-center mt-1 px-4 py-3 text-sm rounded bg-gray-200 hover:bg-gray-400 border ltr:mr-2 rtl:ml-2"},[a.sending?(n(),d("div",ne)):i("",!0),y(" Notify ")],8,le),r.order.status!="Completed"&&(e.$page.props.user.edit_all||e.$page.props.user.id==r.order.user.id)?(n(),x($,{key:2,class:"mt-1",placement:"top-start"},{dropdown:g(()=>[t("div",ae,[t("button",{type:"button",onClick:o[11]||(o[11]=l=>u.updateStatus("Completed")),class:"block w-full ltr:text-left rtl:text-right px-6 py-3 text-white hover:bg-gray-900 hover:text-white"},s(e.$t("mark_as_x",{x:e.$t("Completed")})),1),t("button",{type:"button",onClick:o[12]||(o[12]=l=>u.updateStatus("Ready")),class:"block w-full ltr:text-left rtl:text-right px-6 py-3 text-white hover:bg-gray-900 hover:text-white"},s(e.$t("mark_as_x",{x:e.$t("Ready")})),1),t("button",{type:"button",onClick:o[13]||(o[13]=l=>u.updateStatus("Preparing")),class:"block w-full ltr:text-left rtl:text-right px-6 py-3 text-white hover:bg-gray-900 hover:text-white"},s(e.$t("mark_as_x",{x:e.$t("Preparing")})),1)])]),default:g(()=>[t("div",de,[y(s(e.$t("Status"))+" ",1),m(c,{class:"w-2 h-2 fill-current ml-2",name:"cheveron-up"})])]),_:1})):i("",!0)]),t("button",{onClick:o[14]||(o[14]=l=>u.hide()),class:"btn-gray"},s(e.$t("Close")),1)])):i("",!0),m(f,{show:a.viewMeasurement,"max-width":"2xl",closeable:!0,onClose:o[16]||(o[16]=l=>a.viewMeasurement=!1)},{default:g(()=>{var l;return[m(S,{measurement:e.measurement,onClose:o[15]||(o[15]=()=>a.viewMeasurement=!1),notify:r.order.customer.id!=((l=e.measurement)==null?void 0:l.customer.id)},null,8,["measurement","notify"])]}),_:1},8,["show"]),m(f,{show:a.send_sms,"max-width":"sm",closeable:!1,onClose:o[18]||(o[18]=l=>a.send_sms=!1)},{default:g(()=>[m(M,{order:r.order,onClose:o[17]||(o[17]=()=>a.send_sms=!1)},null,8,["order"])]),_:1},8,["show"]),m(v,{show:a.message,content:a.message,close:()=>a.message=null},null,8,["show","content","close"]),m(v,{show:a.confirm,close:()=>a.confirm=!1,"action-text":a.dialogButtonText,action:a.dialogAction,title:a.dialogTitle,content:a.dialogBody},null,8,["show","close","action-text","action","title","content"])])):i("",!0)}const ve=I(R,[["render",ie]]);export{ve as default};
