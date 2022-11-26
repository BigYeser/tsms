import{L}from"./Layout.29df997c.js";import{F as P}from"./FileInput.12155952.js";import{T as B}from"./TextInput.a836916b.js";import{d as D}from"./DeleteMixin.22e0d308.js";import{C as N}from"./CheckboxInput.cc294eae.js";import{L as T}from"./LoadingButton.24e85b5e.js";import{T as S}from"./TrashedMessage.8c8511c3.js";import{D as E}from"./DeleteRestoreComponent.2470ce54.js";import{_ as M,r as n,o as a,c as i,a as s,b as o,e as h,h as b,t as p,d as f,f as j,w as O,n as R,F as z}from"./app.bf308876.js";import"./Dropdown.34c80c67.js";import"./FlashMessages.d85b4d15.js";import"./InputError.908a7f30.js";import"./Dialog.84dbc515.js";import"./Modal.df00154a.js";const A={layout:L,remember:"form",props:{edit:Object},mixins:[D("user")],components:{FileInput:P,TextInput:B,LoadingButton:T,CheckboxInput:N,TrashedMessage:S,DeleteRestoreComponent:E},metaInfo(){return{title:this.$t("edit_x",{x:this.form.name})}},data(){return{restore:!1,sending:!1,form:{photo:null,name:this.edit.name,email:this.edit.email,phone:this.edit.phone,salary:this.edit.salary,password:this.edit.password,username:this.edit.username,owner:this.edit.owner==1,active:this.edit.active==1,can_sms:this.edit.can_sms==1,edit_all:this.edit.edit_all==1,view_all:this.edit.view_all==1}}},methods:{submit(){this.sending=!0;var e=new FormData;e.append("_method","put"),e.append("name",this.form.name||""),e.append("email",this.form.email||""),e.append("phone",this.form.phone||""),e.append("photo",this.form.photo||""),e.append("salary",this.form.salary||""),e.append("password",this.form.password||""),e.append("username",this.form.username||""),e.append("owner",this.form.owner?"1":"0"),e.append("active",this.form.active?"1":"0"),e.append("can_sms",this.form.can_sms?"1":"0"),e.append("view_all",this.form.view_all?"1":"0"),e.append("edit_all",this.form.edit_all?"1":"0"),this.$inertia.post(this.route("users.update",this.edit.id),e,{onSuccess:()=>{this.form.photo=null,this.form.password=null},onFinish:()=>this.sending=!1})}}},q={class:"mb-6 mt-2 flex justify-start max-w-3xl"},G={class:"font-bold text-lg md:text-2xl"},H=s("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),J=["src"],K={class:"bg-white rounded shadow overflow-hidden max-w-3xl"},Q={class:"p-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},W={class:"px-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 pb-4"},X={key:0,class:"pb-8"},Y={class:"px-8 pb-4 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0"},Z={class:"px-8 pb-4 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0"},$={class:"px-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0"},ee={class:"px-8 py-4 bg-gray-100 border-t border-gray-200 flex items-center"};function le(e,l,d,re,r,w){var c,y,g,k,v,V,_;const U=n("Icons"),x=n("Link"),C=n("trashed-message"),m=n("text-input"),F=n("file-input"),u=n("checkbox-input"),I=n("loading-button");return a(),i("div",null,[s("div",q,[s("h1",G,[o(x,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:e.route("users")},{default:h(()=>[o(U,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),b(" "+p(e.$tc("User",2)),1)]),_:1},8,["href"]),H,b(" "+p(r.form.name),1)]),d.edit.photo?(a(),i("img",{key:0,class:"block w-8 h-8 rounded-full ml-4",src:"/"+d.edit.photo},null,8,J)):f("",!0)]),d.edit.deleted_at?(a(),j(C,{key:0,class:"mb-6",onRestore:l[0]||(l[0]=()=>r.restore=!0)},{default:h(()=>[s("span",null,p(e.$t("already_deleted_x",{x:e.$tc("User")})),1)]),_:1})):f("",!0),s("div",K,[s("form",{onSubmit:l[15]||(l[15]=O((...t)=>w.submit&&w.submit(...t),["prevent"])),autocomplete:"off"},[s("div",Q,[o(m,{modelValue:r.form.name,"onUpdate:modelValue":l[1]||(l[1]=t=>r.form.name=t),errors:(c=e.$page.props.errors)==null?void 0:c.name,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",label:e.$t("Name")},null,8,["modelValue","errors","label"]),o(m,{label:e.$t("Phone"),modelValue:r.form.phone,"onUpdate:modelValue":l[2]||(l[2]=t=>r.form.phone=t),errors:(y=e.$page.props.errors)==null?void 0:y.phone,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),o(m,{label:e.$t("Username"),modelValue:r.form.username,"onUpdate:modelValue":l[3]||(l[3]=t=>r.form.username=t),errors:(g=e.$page.props.errors)==null?void 0:g.username,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),o(m,{label:e.$t("Email"),modelValue:r.form.email,"onUpdate:modelValue":l[4]||(l[4]=t=>r.form.email=t),errors:(k=e.$page.props.errors)==null?void 0:k.email,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),o(m,{type:"password",label:e.$t("Password"),modelValue:r.form.password,"onUpdate:modelValue":l[5]||(l[5]=t=>r.form.password=t),autocomplete:"new-password",errors:(v=e.$page.props.errors)==null?void 0:v.password,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},null,8,["label","modelValue","errors"]),o(m,{type:"number",label:e.$tc("Salary"),modelValue:r.form.salary,"onUpdate:modelValue":l[6]||(l[6]=t=>r.form.salary=t),errors:(V=e.$page.props.errors)==null?void 0:V.salary,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),o(F,{type:"file",accept:"image/*",label:e.$t("Photo"),modelValue:r.form.photo,"onUpdate:modelValue":l[7]||(l[7]=t=>r.form.photo=t),errors:(_=e.$page.props.errors)==null?void 0:_.photo,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"])]),s("div",W,[o(u,{id:"active",label:e.$t("Active"),checked:r.form.active,"onUpdate:checked":l[8]||(l[8]=t=>r.form.active=t)},null,8,["label","checked"])]),s("div",{class:R(["px-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0",r.form.owner?"pb-8":"pb-4"])},[o(u,{id:"owner",label:e.$t("Owner"),checked:r.form.owner,"onUpdate:checked":l[9]||(l[9]=t=>r.form.owner=t)},null,8,["label","checked"])],2),r.form.owner?f("",!0):(a(),i("div",X,[s("div",Y,[o(u,{id:"can_sms",checked:r.form.can_sms,"onUpdate:checked":l[10]||(l[10]=t=>r.form.can_sms=t),label:e.$t("Can send sms to customers")},null,8,["checked","label"])]),s("div",Z,[o(u,{id:"view_all",checked:r.form.view_all,"onUpdate:checked":l[11]||(l[11]=t=>r.form.view_all=t),label:e.$t("Can view all (expenses, orders & payments)")},null,8,["checked","label"])]),s("div",$,[o(u,{id:"edit_all",checked:r.form.edit_all,"onUpdate:checked":l[12]||(l[12]=t=>r.form.edit_all=t),label:e.$t("Can edit all (expenses, orders & payments)")},null,8,["checked","label"])])])),s("div",ee,[d.edit.id!=e.$page.props.user.id?(a(),i(z,{key:0},[d.edit.deleted_at?(a(),i("button",{key:1,class:"text-red-600 hover:underline",tabindex:"-1",type:"button",onClick:l[14]||(l[14]=(...t)=>e.destroyPermanently&&e.destroyPermanently(...t))},p(e.$t("Delete Permanently")),1)):(a(),i("button",{key:0,tabindex:"-1",type:"button",onClick:l[13]||(l[13]=(...t)=>e.destroy&&e.destroy(...t)),class:"text-red-600 hover:underline"},p(e.$t("delete_x",{x:e.$tc("User")})),1))],64)):f("",!0),o(I,{loading:r.sending,class:"btn-gray ltr:ml-auto rtl:mr-auto",type:"submit"},{default:h(()=>[b(p(e.$t("update_x",{x:e.$tc("User")})),1)]),_:1},8,["loading"])])],32)])])}const ce=M(A,[["render",le]]);export{ce as default};