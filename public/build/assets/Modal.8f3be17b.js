import{_ as y,y as f,z as x,o as h,f as w,m as n,u as d,a as t,b as i,e as c,g as r,n as v,l as p,s as b}from"./app.096331ff.js";const _={emits:["close"],props:{show:{default:!1},maxWidth:{default:"4xl"},closeable:{default:!0}},watch:{show:{handler:e=>{e?(document.body.style.overflow="hidden",document.body.classList.add("modal-open")):(document.body.style.overflow=null,document.body.classList.remove("modal-open"))}}},setup(e,{emit:o}){const a=()=>{e.closeable&&o("close")},s=l=>{l.key==="Escape"&&e.show&&a()};return f(()=>document.addEventListener("keydown",s)),x(()=>document.removeEventListener("keydown",s)),{close:a}},computed:{maxWidthClass(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl","3xl":"sm:max-w-3xl","4xl":"sm:max-w-4xl"}[this.maxWidth]}}},g={class:"fixed z-10 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},k={class:"flex items-end justify-center min-h-screen text-center md:block"},C=t("span",{class:"hidden md:inline-block md:align-middle md:h-screen","aria-hidden":"true"},"\u200B",-1);function E(e,o,a,s,l,m){return h(),w(b,{to:"body"},[n(t("div",g,[t("div",k,[i(r,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:c(()=>[t("div",{onClick:o[0]||(o[0]=(...u)=>s.close&&s.close(...u)),class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"})]),_:1}),C,i(r,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 md:translate-y-0 md:scale-95","enter-to-class":"opacity-100 translate-y-0 md:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 md:scale-100","leave-to-class":"opacity-0 translate-y-4 md:translate-y-0 md:scale-95"},{default:c(()=>[n(t("div",{class:v([m.maxWidthClass,"inline-block align-bottom bg-white md:rounded-md text-left shadow-xl transform transition-all lg:my-4 w-full"])},[p(e.$slots,"default")],2),[[d,a.show]])]),_:3})])],512),[[d,a.show]])])}const W=y(_,[["render",E]]);export{W as M};