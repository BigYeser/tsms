import{D as m}from"./Dialog.43fd1cef.js";import{L as u}from"./LoadingButton.1c42de83.js";import{_ as h,r as y,o as a,c as d,b as i,t as c}from"./app.02c6cd6b.js";const f={props:["data","model","routeM","restore"],components:{Dialog:m,LoadingButton:u},data(){return{loading:!1,confirm:!1,restoreConf:!1,permanent:!1}},watch:{restore:function(t){this.restoreConf=t}},methods:{destroy(){this.confirm=!0},deleteRecord(){this.$inertia.delete(route(this.routeM+".destroy",this.data.id),{onSuccess:()=>this.closeModal()})},closeModal(){this.confirm=!1},restoreM(){this.restoreConf=!0},restoreRecord(){this.$inertia.put(this.route(this.routeM+".restore",this.data.id),{onSuccess:()=>this.closeRestoreModal()})},closeRestoreModal(){this.restoreConf=!1,this.$emit("close-restore")},deletePermanently(){this.permanent=!0},deleteRecordPermanently(){this.$inertia.delete(route(this.routeM+".delete",this.data.id),{onSuccess:()=>this.closePermanentModal()})},destroyPermanently(){this.permanent=!0},closePermanentModal(){this.permanent=!1}}};function M(t,r,o,p,n,e){const l=y("Dialog");return a(),d("div",null,[i(l,{show:n.confirm,close:e.closeModal,"action-text":"Delete","action-type":"delete",action:e.deleteRecord,title:"Delete "+o.model+"!",content:t.$t("Are you sure you want to delete the record?")},null,8,["show","close","action","title","content"]),i(l,{show:n.restoreConf,"action-text":"Restore",action:e.restoreRecord,close:e.closeRestoreModal,title:"Restore "+o.model+"!",content:t.$t("Are you sure you want to restore the record?")},null,8,["show","action","close","title","content"]),i(l,{"max-width":"md",show:n.permanent,"action-type":"delete",close:e.closePermanentModal,title:"Delete "+o.model+"!","action-text":"Delete Permanently",action:e.deleteRecordPermanently,content:`<p class='mb-2 leading-relaxed text-red-500'>${t.$t("Are you sure you want to delete the record permanently?")}</p>
        <p class='leading-relaxed'>${t.$t("Once deleted, all of its resources and data will be permanently deleted.")}</p>`},null,8,["show","close","title","action","content"]),o.data.deleted_at?(a(),d("button",{key:1,class:"text-red-600 hover:underline",tabindex:"-1",type:"button",onClick:r[1]||(r[1]=(...s)=>e.destroyPermanently&&e.destroyPermanently(...s))},c(t.$t("Delete Permanently")),1)):(a(),d("button",{key:0,class:"text-red-600 hover:underline",tabindex:"-1",type:"button",onClick:r[0]||(r[0]=(...s)=>e.destroy&&e.destroy(...s))},c(t.$t("delete_x",{x:t.$tc(o.model)})),1))])}const P=h(f,[["render",M]]);export{P as D};