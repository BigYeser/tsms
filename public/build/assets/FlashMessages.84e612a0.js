import{_ as d,r as h,o as s,c as t,b as r,e as c,a as n,t as l,h as u,d as p,g as m}from"./app.e01d365b.js";const g={data(){return{show:!0}},watch:{"$page.props.flash":{handler(){this.show=!0,this.$nextTick(()=>{setTimeout(()=>this.show=!1,5e3)})},deep:!0}},mounted(){setTimeout(()=>this.show=!1,5e3)}},v={class:"relative z-30"},w={class:"flex items-start"},y={class:"p-4 font-medium leading-normal"},_={class:"font-bold mb-2"},k={class:"flex items-start text-white leading-normal"},$=["innerHTML"],b={key:1,class:"p-4 font-medium"},x={key:0},T={key:1};function N(e,a,j,C,o,V){const i=h("icons");return s(),t("div",v,[r(m,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95 translate-x-full","enter-to-class":"transform opacity-100 scale-100 translate-x-0","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100 translate-x-0","leave-to-class":"transform opacity-0 scale-95 translate-x-full"},{default:c(()=>[(e.$page.props.flash.message||e.$page.props.flash.success)&&o.show?(s(),t("div",{key:0,onClick:a[0]||(a[0]=f=>o.show=!1),class:"fixed top-4 right-4 w-full max-w-xs mb-8 ml-4 flex items-center justify-between bg-green-500 rounded text-white cursor-pointer"},[n("div",w,[r(i,{name:"tick",className:"ml-4 mt-4 w-6 h-6"}),n("div",y,[n("div",_,l(e.$t("Success!")),1),u(" "+l(e.$page.props.flash.message||e.$page.props.flash.success),1)])])])):p("",!0)]),_:1}),r(m,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:c(()=>[(e.$page.props.flash.error||Object.keys(e.$page.props.errors).length>0)&&o.show?(s(),t("div",{key:0,onClick:a[1]||(a[1]=f=>o.show=!1),class:"fixed top-4 right-4 w-full max-w-xs mb-8 ml-4 flex items-center justify-between bg-red-500 rounded text-white cursor-pointer"},[n("div",k,[r(i,{name:"cross",className:"ml-4 mt-4 w-5 h-5"}),e.$page.props.flash.error?(s(),t("div",{key:0,class:"p-4 font-medium",innerHTML:e.$page.props.flash.error},null,8,$)):(s(),t("div",b,[Object.keys(e.$page.props.errors).length===1?(s(),t("span",x,"There is one form error.")):(s(),t("span",T,"There are "+l(Object.keys(e.$page.props.errors).length)+" form errors.",1))]))])])):p("",!0)]),_:1})])}const M=d(g,[["render",N]]);export{M as F};