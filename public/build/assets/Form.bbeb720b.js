import{g as ge}from"./debounce.c5e2cf16.js";import{T as ve}from"./TextInput.fad4a7be.js";import{C as be}from"./CheckboxInput.9a7d7c62.js";import{T as Ee}from"./TextareaInput.64b9dd50.js";import{L as Se}from"./LoadingButton.c79defd6.js";import{_ as we,o as ne,c as te,n as re,a as M,d as Ae,F as _e}from"./app.6ea7a0d6.js";import"./InputError.3e5015ec.js";var j={};const Ce="@vue-stripe/vue-stripe",xe="4.4.4",ke="Stripe Checkout & Elements for Vue.js",Oe="jofftiquez@gmail.com",Pe={build:"rollup -c",lint:"vue-cli-service lint --fix",prebuild:"rimraf dist",test:"jest"},Te="dist/index.js",$e="dist",Ie={"@stripe/stripe-js":"^1.13.2","vue-coerce-props":"^1.0.0"},je={"@babel/cli":"^7.7.5","@babel/core":"^7.7.5","@babel/plugin-proposal-export-default-from":"^7.7.4","@babel/plugin-proposal-optional-chaining":"^7.10.4","@babel/plugin-transform-runtime":"^7.7.5","@babel/preset-env":"^7.7.5","@babel/preset-es2015":"^7.0.0-beta.53","@babel/runtime":"^7.7.5","@rollup/plugin-node-resolve":"^6.0.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"^4.5.10","@vue/eslint-config-standard":"^5.1.2","babel-eslint":"^10.1.0","babel-minify":"^0.5.1","cross-env":"^6.0.3",eslint:"^6.8.0","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.2.2",jest:"^24.9.0","lint-staged":"^9.5.0",rimraf:"^3.0.0",rollup:"^1.27.9","rollup-plugin-babel":"^4.3.3","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-terser":"^5.1.3","rollup-plugin-uglify":"^6.0.3","rollup-plugin-vue":"^5.1.4","vue-template-compiler":"^2.6.11"},Le={url:"https://github.com/vue-stripe/vue-stripe/issues"},Re={"pre-commit":"lint-staged"},Be="https://github.com/vue-stripe/vue-stripe#readme",De=["vue","vuejs","stripe","checkout","payment"],Fe="MIT",Ne={type:"git",url:"git@github.com:vue-stripe/vue-stripe.git"},Ue="typings/index.d.ts",Me={name:Ce,version:xe,description:ke,author:Oe,scripts:Pe,main:Te,module:$e,dependencies:Ie,devDependencies:je,bugs:Le,gitHooks:Re,homepage:Be,keywords:De,license:Fe,"lint-staged":{"*.{js,jsx,vue}":["vue-cli-service lint","git add"]},repository:Ne,typings:Ue};var ae;Object.defineProperty(j,"__esModule",{value:!0});var Q="auto",Ve=["auto","bg","cs","da","de","el","en","en-GB","es","es-419","et","fi","fr","fr-CA","hu","id","it","ja","lt","lv","ms","mt","nb","nl","pl","pt","pt-BR","ro","ru","sk","sl","sv","tr","zh","zh-HK","zh-TW"],Ge=["auto","book","donate","pay"],He=["required","auto"],qe={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},Ye=Me.version,B={name:"vue-stripe",version:Ye,url:"https://vuestripe.com",partner_id:"pp_partner_IqtOXpBSuz0IE2"},ze={install:function(e,n){var r=n.pk,t=n.stripeAccount,c=n.apiVersion,p=n.locale,l=window.Stripe(r,{stripeAccount:t,apiVersion:c,locale:p});l.registerAppInfo(B),e.prototype.$stripe=l}};function Xe(e,n){return e(n={exports:{}},n.exports),n.exports}var Qe=Xe(function(e){var n=function(r){var t,c=Object.prototype,p=c.hasOwnProperty,l=typeof Symbol=="function"?Symbol:{},h=l.iterator||"@@iterator",E=l.asyncIterator||"@@asyncIterator",d=l.toStringTag||"@@toStringTag";function y(o,i,a,u){var s=i&&i.prototype instanceof G?i:G,g=Object.create(s.prototype),T=new z(u||[]);return g._invoke=function(C,R,m){var b=f;return function(x,$){if(b===L)throw new Error("Generator is already running");if(b===D){if(x==="throw")throw $;return ee()}for(m.method=x,m.arg=$;;){var I=m.delegate;if(I){var _=Z(I,m);if(_){if(_===w)continue;return _}}if(m.method==="next")m.sent=m._sent=m.arg;else if(m.method==="throw"){if(b===f)throw b=D,m.arg;m.dispatchException(m.arg)}else m.method==="return"&&m.abrupt("return",m.arg);b=L;var v=S(C,R,m);if(v.type==="normal"){if(b=m.done?D:V,v.arg===w)continue;return{value:v.arg,done:m.done}}v.type==="throw"&&(b=D,m.method="throw",m.arg=v.arg)}}}(o,a,T),g}function S(o,i,a){try{return{type:"normal",arg:o.call(i,a)}}catch(u){return{type:"throw",arg:u}}}r.wrap=y;var f="suspendedStart",V="suspendedYield",L="executing",D="completed",w={};function G(){}function F(){}function O(){}var H={};H[h]=function(){return this};var q=Object.getPrototypeOf,N=q&&q(q(X([])));N&&N!==c&&p.call(N,h)&&(H=N);var P=O.prototype=G.prototype=Object.create(H);function J(o){["next","throw","return"].forEach(function(i){o[i]=function(a){return this._invoke(i,a)}})}function U(o){var i;this._invoke=function(a,u){function s(){return new Promise(function(g,T){(function C(R,m,b,x){var $=S(o[R],o,m);if($.type!=="throw"){var I=$.arg,_=I.value;return _&&typeof _=="object"&&p.call(_,"__await")?Promise.resolve(_.__await).then(function(v){C("next",v,b,x)},function(v){C("throw",v,b,x)}):Promise.resolve(_).then(function(v){I.value=v,b(I)},function(v){return C("throw",v,b,x)})}x($.arg)})(a,u,g,T)})}return i=i?i.then(s,s):s()}}function Z(o,i){var a=o.iterator[i.method];if(a===t){if(i.delegate=null,i.method==="throw"){if(o.iterator.return&&(i.method="return",i.arg=t,Z(o,i),i.method==="throw"))return w;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return w}var u=S(a,o.iterator,i.arg);if(u.type==="throw")return i.method="throw",i.arg=u.arg,i.delegate=null,w;var s=u.arg;return s?s.done?(i[o.resultName]=s.value,i.next=o.nextLoc,i.method!=="return"&&(i.method="next",i.arg=t),i.delegate=null,w):s:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,w)}function ye(o){var i={tryLoc:o[0]};1 in o&&(i.catchLoc=o[1]),2 in o&&(i.finallyLoc=o[2],i.afterLoc=o[3]),this.tryEntries.push(i)}function Y(o){var i=o.completion||{};i.type="normal",delete i.arg,o.completion=i}function z(o){this.tryEntries=[{tryLoc:"root"}],o.forEach(ye,this),this.reset(!0)}function X(o){if(o){var i=o[h];if(i)return i.call(o);if(typeof o.next=="function")return o;if(!isNaN(o.length)){var a=-1,u=function s(){for(;++a<o.length;)if(p.call(o,a))return s.value=o[a],s.done=!1,s;return s.value=t,s.done=!0,s};return u.next=u}}return{next:ee}}function ee(){return{value:t,done:!0}}return F.prototype=P.constructor=O,O.constructor=F,O[d]=F.displayName="GeneratorFunction",r.isGeneratorFunction=function(o){var i=typeof o=="function"&&o.constructor;return!!i&&(i===F||(i.displayName||i.name)==="GeneratorFunction")},r.mark=function(o){return Object.setPrototypeOf?Object.setPrototypeOf(o,O):(o.__proto__=O,d in o||(o[d]="GeneratorFunction")),o.prototype=Object.create(P),o},r.awrap=function(o){return{__await:o}},J(U.prototype),U.prototype[E]=function(){return this},r.AsyncIterator=U,r.async=function(o,i,a,u){var s=new U(y(o,i,a,u));return r.isGeneratorFunction(i)?s:s.next().then(function(g){return g.done?g.value:s.next()})},J(P),P[d]="Generator",P[h]=function(){return this},P.toString=function(){return"[object Generator]"},r.keys=function(o){var i=[];for(var a in o)i.push(a);return i.reverse(),function u(){for(;i.length;){var s=i.pop();if(s in o)return u.value=s,u.done=!1,u}return u.done=!0,u}},r.values=X,z.prototype={constructor:z,reset:function(o){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Y),!o)for(var i in this)i.charAt(0)==="t"&&p.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=t)},stop:function(){this.done=!0;var o=this.tryEntries[0].completion;if(o.type==="throw")throw o.arg;return this.rval},dispatchException:function(o){if(this.done)throw o;var i=this;function a(R,m){return g.type="throw",g.arg=o,i.next=R,m&&(i.method="next",i.arg=t),!!m}for(var u=this.tryEntries.length-1;u>=0;--u){var s=this.tryEntries[u],g=s.completion;if(s.tryLoc==="root")return a("end");if(s.tryLoc<=this.prev){var T=p.call(s,"catchLoc"),C=p.call(s,"finallyLoc");if(T&&C){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(T){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!C)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(o,i){for(var a=this.tryEntries.length-1;a>=0;--a){var u=this.tryEntries[a];if(u.tryLoc<=this.prev&&p.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var s=u;break}}s&&(o==="break"||o==="continue")&&s.tryLoc<=i&&i<=s.finallyLoc&&(s=null);var g=s?s.completion:{};return g.type=o,g.arg=i,s?(this.method="next",this.next=s.finallyLoc,w):this.complete(g)},complete:function(o,i){if(o.type==="throw")throw o.arg;return o.type==="break"||o.type==="continue"?this.next=o.arg:o.type==="return"?(this.rval=this.arg=o.arg,this.method="return",this.next="end"):o.type==="normal"&&i&&(this.next=i),w},finish:function(o){for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i];if(a.finallyLoc===o)return this.complete(a.completion,a.afterLoc),Y(a),w}},catch:function(o){for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i];if(a.tryLoc===o){var u=a.completion;if(u.type==="throw"){var s=u.arg;Y(a)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(o,i,a){return this.delegate={iterator:X(o),resultName:i,nextLoc:a},this.method==="next"&&(this.arg=t),w}},r}(e.exports);try{regeneratorRuntime=n}catch{Function("r","regeneratorRuntime = r")(n)}}),A=Qe;function le(e){return(le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}var ce,ue="https://js.stripe.com/v3",We=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,ie="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Ke=function(){for(var e=document.querySelectorAll('script[src^="'.concat(ue,'"]')),n=0;n<e.length;n++){var r=e[n];if(We.test(r.src))return r}return null},Je=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(ue).concat(n);var t=document.head||document.body;if(!t)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return t.appendChild(r),r},Ze=function(e,n){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.13.2",startTime:n})},W=null,en=function(e){return W!==null?W:W=new Promise(function(n,r){if(typeof window<"u")if(window.Stripe&&e&&console.warn(ie),window.Stripe)n(window.Stripe);else try{var t=Ke();t&&e?console.warn(ie):t||(t=Je(e)),t.addEventListener("load",function(){window.Stripe?n(window.Stripe):r(new Error("Stripe.js not available"))}),t.addEventListener("error",function(){r(new Error("Failed to load Stripe.js"))})}catch(c){return void r(c)}else n(null)})},nn=function(e,n,r){if(e===null)return null;var t=e.apply(void 0,n);return Ze(t,r),t},tn=function(e){var n=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(e),`
`);if(e===null||le(e)!=="object")throw new Error(n);if(Object.keys(e).length===1&&typeof e.advancedFraudSignals=="boolean")return e;throw new Error(n)},pe=!1,k=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];pe=!0;var t=Date.now();return en(ce).then(function(c){return nn(c,n,t)})};k.setLoadParameters=function(e){if(pe)throw new Error("You cannot change load parameters after calling loadStripe");ce=tn(e)};/**
 * vue-coerce-props v1.0.0
 * (c) 2018 Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */var rn={beforeCreate:function(){var e=this.$options.props;e&&(this._$coertions=Object.keys(e).filter(function(n){return e[n].coerce}).map(function(n){return[n,e[n].coerce]}))},computed:{$coerced:function(){var e=this;return this._$coertions.reduce(function(n,r){var t=r[0],c=r[1];return n[t]=c.call(e,e.$props[t]),n},{})}}},on={pk:{type:String,required:!0},mode:{type:String,validator:function(e){return["payment","subscription"].includes(e)}},lineItems:{type:Array,default:void 0},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(e){return Ge.includes(e)}},billingAddressCollection:{type:String,default:"auto",validator:function(e){return He.includes(e)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:Q,coerce:function(e){return Ve.includes(e)?e:(console.warn("VueStripe Warning: '".concat(e,"' is not supported by Stripe yet. Falling back to default '").concat(Q,"'.")),Q)}},shippingAddressCollection:{type:Object,validator:function(e){return Object.prototype.hasOwnProperty.call(e,"allowedCountries")}},disableAdvancedFraudDetection:{type:Boolean},stripeOptions:{type:Object,default:null}},sn={props:on,mixins:[rn],render:function(e){return e},methods:{redirectToCheckout:function(){var e,n,r;return A.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.$emit("loading",!0),this.disableAdvancedFraudDetection&&k.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},t.next=6,A.awrap(k(this.pk,e));case 6:if((n=t.sent).registerAppInfo(B),!this.sessionId){t.next=11;break}return n.redirectToCheckout({sessionId:this.sessionId}),t.abrupt("return");case 11:if(!this.lineItems||!this.lineItems.length||this.mode){t.next=14;break}return console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode"),t.abrupt("return");case 14:return r={billingAddressCollection:this.billingAddressCollection,cancelUrl:this.cancelUrl,clientReferenceId:this.clientReferenceId,customerEmail:this.customerEmail,items:this.items,lineItems:this.lineItems,locale:this.$coerced.locale,mode:this.mode,shippingAddressCollection:this.shippingAddressCollection,submitType:this.submitType,successUrl:this.successUrl},t.abrupt("return",n.redirectToCheckout(r));case 18:t.prev=18,t.t0=t.catch(0),console.error(t.t0),this.$emit("error",t.t0);case 22:case"end":return t.stop()}},null,this,[[0,18]])}}};function an(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var ln=an;function oe(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),r.push.apply(r,t)}return r}function cn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?oe(Object(r),!0).forEach(function(t){ln(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var un="card",pn={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},elementsOptions:{type:Object,default:function(){return{}}},tokenData:{type:Object,default:function(){return{}}},disableAdvancedFraudDetection:{type:Boolean},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return qe}},value:{type:String,default:void 0},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(e){return["solid","default"].includes(e)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,element:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},mounted:function(){var e,n,r=this;return A.async(function(t){for(;;)switch(t.prev=t.next){case 0:return this.disableAdvancedFraudDetection&&k.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},n={classes:this.classes,style:this.elementStyle,value:this.value,hidePostalCode:this.hidePostalCode,iconStyle:this.iconStyle,hideIcon:this.hideIcon,disabled:this.disabled},t.next=5,A.awrap(k(this.pk,e));case 5:this.stripe=t.sent,this.stripe.registerAppInfo(B),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(un,n),this.element.mount("#stripe-element-mount-point"),this.element.on("change",function(c){var p=document.getElementById("stripe-element-errors");c.error?p.textContent=c.error.message:p.textContent="",r.onChange(c)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(c){var p,l,h,E;return A.async(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,r.$emit("loading",!0),c.preventDefault(),p=cn({},r.element),r.amount&&(p.amount=r.amount),d.next=7,A.awrap(r.stripe.createToken(p,r.tokenData));case 7:if(l=d.sent,h=l.token,!(E=l.error)){d.next=15;break}return document.getElementById("stripe-element-errors").textContent=E.message,r.$emit("error",E),d.abrupt("return");case 15:r.$emit("token",h),d.next=22;break;case 18:d.prev=18,d.t0=d.catch(0),console.error(d.t0),r.$emit("error",d.t0);case 22:return d.prev=22,r.$emit("loading",!1),d.finish(22);case 25:case"end":return d.stop()}},null,null,[[0,18,22,25]])});case 17:case"end":return t.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},unmount:function(){this.element.unmount()},update:function(e){this.element.update(e)},onChange:function(e){this.$emit("element-change",e)},onReady:function(e){this.$emit("element-ready",e)},onFocus:function(e){this.$emit("element-focus",e)},onBlur:function(e){this.$emit("element-blur",e)},onEscape:function(e){this.$emit("element-escape",e)},onClick:function(e){this.$emit("element-click",e)}}};function de(e,n,r,t,c,p,l,h,E,d){typeof l!="boolean"&&(E=h,h=l,l=!1);const y=typeof r=="function"?r.options:r;let S;if(e&&e.render&&(y.render=e.render,y.staticRenderFns=e.staticRenderFns,y._compiled=!0,c&&(y.functional=!0)),t&&(y._scopeId=t),p?(S=function(f){(f=f||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(f=__VUE_SSR_CONTEXT__),n&&n.call(this,E(f)),f&&f._registeredComponents&&f._registeredComponents.add(p)},y._ssrRegister=S):n&&(S=l?function(f){n.call(this,d(f,this.$root.$options.shadowRoot))}:function(f){n.call(this,h(f))}),S)if(y.functional){const f=y.render;y.render=function(V,L){return S.call(L),f(V,L)}}else{const f=y.beforeCreate;y.beforeCreate=f?[].concat(f,S):[S]}return r}const dn=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function me(e){return(n,r)=>mn(n,r)}let K;const se={};function mn(e,n){const r=dn?n.media||"default":e,t=se[r]||(se[r]={ids:new Set,styles:[]});if(!t.ids.has(e)){t.ids.add(e);let c=n.source;if(n.map&&(c+=`
/*# sourceURL=`+n.map.sources[0]+" */",c+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),t.element||(t.element=document.createElement("style"),t.element.type="text/css",n.media&&t.element.setAttribute("media",n.media),K===void 0&&(K=document.head||document.getElementsByTagName("head")[0]),K.appendChild(t.element)),"styleSheet"in t.element)t.styles.push(c),t.element.styleSheet.cssText=t.styles.filter(Boolean).join(`
`);else{const p=t.ids.size-1,l=document.createTextNode(c),h=t.element.childNodes;h[p]&&t.element.removeChild(h[p]),h.length?t.element.insertBefore(l,h[p]):t.element.appendChild(l)}}}const hn=pn;var he=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("form",{attrs:{id:"stripe-element-form"}},[n("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[n("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),n("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},fn=[];he._withStripped=!0;const yn=function(e){e&&e("data-v-4dd8360e_0",{source:`





















































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement[data-v-4dd8360e] {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.StripeElement--focus[data-v-4dd8360e] {
  box-shadow: 0 1px 3px 0 #cfd7df;
}
.StripeElement--invalid[data-v-4dd8360e] {
  border-color: #fa755a;
}
.StripeElement--webkit-autofill[data-v-4dd8360e] {
  background-color: #fefde5 !important;
}
.hide[data-v-4dd8360e] {
  display: none;
}
`,map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Card.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsPA;;;EAGA;AACA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,aAAA;AACA",file:"Card.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-element-form">
      <div id="stripe-element-mount-point" />
      <slot name="stripe-element-errors">
        <div
          id="stripe-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  DEFAULT_ELEMENT_STYLE,
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'card';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    elementsOptions: {
      type: Object,
      default: () => ({}),
    },
    tokenData: {
      type: Object,
      default: () => ({}),
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
    // element specific options
    classes: {
      type: Object,
      default: () => ({}),
    },
    elementStyle: {
      type: Object,
      default: () => (DEFAULT_ELEMENT_STYLE),
    },
    value: {
      type: String,
      default: undefined,
    },
    hidePostalCode: Boolean,
    iconStyle: {
      type: String,
      default: 'default',
      validator: value => ['solid', 'default'].includes(value),
    },
    hideIcon: Boolean,
    disabled: Boolean,
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
      card: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById('stripe-element-mount-point').innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) loadStripe.setLoadParameters({ advancedFraudSignals: false });

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };
    const createOptions = {
      classes: this.classes,
      style: this.elementStyle,
      value: this.value,
      hidePostalCode: this.hidePostalCode,
      iconStyle: this.iconStyle,
      hideIcon: this.hideIcon,
      disabled: this.disabled,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);
    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, createOptions);
    this.element.mount('#stripe-element-mount-point');

    this.element.on('change', (event) => {
      var displayError = document.getElementById('stripe-element-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async (event) => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const data = {
          ...this.element,
        };
        if (this.amount) data.amount = this.amount;
        const { token, error } = await this.stripe.createToken(data, this.tokenData);
        if (error) {
          const errorElement = document.getElementById('stripe-element-errors');
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        }
        this.$emit('token', token);
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn('This method will currently not work on iOS 13+ due to a system limitation.');
      this.element.focus();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element
     * @param {string} opts.classes.base The base class applied to the container. Defaults to StripeElement.
     * @param {string} opts.classes.complete The class name to apply when the Element is complete. Defaults to StripeElement--complete.
     * @param {string} opts.classes.empty The class name to apply when the Element is empty. Defaults to StripeElement--empty.
     * @param {string} opts.classes.focus The class name to apply when the Element is focused. Defaults to StripeElement--focus.
     * @param {string} opts.classes.invalid The class name to apply when the Element is invalid. Defaults to StripeElement--invalid.
     * @param {string} opts.classes.webkitAutoFill The class name to apply when the Element has its value autofilled by the browser (only on Chrome and Safari). Defaults to StripeElement--webkit-autofill.
     * @param {Object} opts.style Customize the appearance of this element using CSS properties passed in a Style object.
     * @param {string} opts.value A pre-filled set of values to include in the input (e.g., {postalCode: '94110'}). Note that sensitive card information (card number, CVC, and expiration date) cannot be pre-filled
     * @param {boolean} opts.hidePostalCode Hide the postal code field. Default is false. If you are already collecting a full billing address or postal code elsewhere, set this to true.
     * @param {string} opts.iconStyle Appearance of the icon in the Element. Either solid or default.
     * @param {boolean} opts.hideIcon Hides the icon in the Element. Default is false.
     * @param {boolean} opts.disabled Applies a disabled state to the Element such that user input is not accepted. Default is false.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

.hide {
  display: none;
}
</style>
`]},media:void 0})},gn="data-v-4dd8360e",vn=de({render:he,staticRenderFns:fn},yn,hn,gn,!1,void 0,!1,me,void 0,void 0);var bn="payment",En={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},elementsOptions:{type:Object,required:!0,default:function(){return{}}},confirmParams:{type:Object,required:!0,default:function(){return{}}},redirect:{type:String,default:"always"},createOptions:{type:Object,default:function(){return{}}},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},disableAdvancedFraudDetection:{type:Boolean}},data:function(){return{loading:!1,stripe:null,elements:null,element:null}},computed:{form:function(){return document.getElementById("stripe-payment-element-form")}},mounted:function(){var e,n=this;return A.async(function(r){for(;;)switch(r.prev=r.next){case 0:return this.disableAdvancedFraudDetection&&k.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},r.next=4,A.awrap(k(this.pk,e));case 4:this.stripe=r.sent,this.stripe.registerAppInfo(B),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(bn,this.createOptions),this.element.mount("#stripe-payment-element-mount-point"),this.element.on("change",function(t){var c=document.getElementById("stripe-payment-element-errors");t.error?c.textContent=t.error.message:c.textContent="",n.onChange(t)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(t){var c,p;return A.async(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,n.$emit("loading",!0),t.preventDefault(),l.next=5,A.awrap(n.stripe.confirmPayment({elements:n.elements,confirmParams:n.confirmParams,redirect:n.redirect}));case 5:if(c=l.sent,!(p=c.error)){l.next=12;break}return document.getElementById("stripe-payment-element-errors").textContent=p.message,n.$emit("error",p),l.abrupt("return");case 12:l.next=18;break;case 14:l.prev=14,l.t0=l.catch(0),console.error(l.t0),n.$emit("error",l.t0);case 18:return l.prev=18,n.$emit("loading",!1),l.finish(18);case 21:case"end":return l.stop()}},null,null,[[0,14,18,21]])});case 16:case"end":return r.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},collapse:function(){this.element.collapse()},getElement:function(){this.element.getElement()},unmount:function(){this.element.unmount()},update:function(e){this.element.update(e)},onChange:function(e){this.$emit("element-change",e)},onReady:function(e){this.$emit("element-ready",e)},onFocus:function(e){this.$emit("element-focus",e)},onBlur:function(e){this.$emit("element-blur",e)},onEscape:function(e){this.$emit("element-escape",e)},onClick:function(e){this.$emit("element-click",e)}}};const Sn=En;var fe=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("form",{attrs:{id:"stripe-payment-element-form"}},[n("div",{attrs:{id:"stripe-payment-element-mount-point"}}),this._v(" "),this._t("stripe-payment-element-errors",[n("div",{attrs:{id:"stripe-payment-element-errors",role:"alert"}})]),this._v(" "),n("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},wn=[];fe._withStripped=!0;const An=function(e){e&&e("data-v-3329b3f8_0",{source:`


































































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide[data-v-3329b3f8] {
  display: none;
}
`,map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Payment.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmQA;;;EAGA;AACA;EACA,aAAA;AACA",file:"Payment.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-payment-element-form">
      <div id="stripe-payment-element-mount-point" />
      <slot name="stripe-payment-element-errors">
        <div
          id="stripe-payment-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'payment';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    elementsOptions: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    confirmParams: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    redirect: {
      type: String,
      default: 'always',
    },
    createOptions: {
      type: Object,
      default: () => ({}),
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-payment-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById(
    //     'stripe-payment-element-mount-point',
    //   ).innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) {
      loadStripe.setLoadParameters({ advancedFraudSignals: false });
    }

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);

    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, this.createOptions);
    this.element.mount('#stripe-payment-element-mount-point');

    this.element.on('change', event => {
      var displayError = document.getElementById(
        'stripe-payment-element-errors',
      );
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async event => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const { error } = await this.stripe.confirmPayment({
          elements: this.elements,
          confirmParams: this.confirmParams,
          redirect: this.redirect,
        });
        if (error) {
          const errorElement = document.getElementById(
            'stripe-payment-element-errors',
          );
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        }
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn(
        'This method will currently not work on iOS 13+ due to a system limitation.',
      );
      this.element.focus();
    },
    /**
     * Collapses the Payment Element into a row of payment method tabs
     * @return {void}
     */
    collapse () {
      this.element.collapse();
    },
    /**
     * Retrieves a previously created element
     */
    getElement () {
      this.element.getElement();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element. See official docs for more detail: https://site-admin.stripe.com/docs/js/elements_object/update_payment_element
     * @param {string} opts.business.name  Information about your business that will be displayed in the Payment Element. This information will be retrieved from the Stripe account if not provided.
     * @param {array} opts.paymentMethodOrder Sets order in which payment methods are displayed. Otherwise payment methods are ordered dynamically to optimize for conversion.
     * @param {string | Object} opts.fields.billingDetails The Payment Element automatically creates input fields to collect required billing information for some payment methods like SEPA debit. Specify 'never' to avoid collecting billing details in the Payment Element if you're collecting them outside of the Payment Element.
     * @param {string} opts.fields.billingDetails.name Specify 'never' to avoid collecting a name as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.email Specify 'never' to avoid collecting an email address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.phone Specify 'never' to avoid collecting a phone number as part of the billing details in the Payment Element.
     * @param {string | Object} opts.fields.billingDetails.address Specify 'never' to avoid collecting an address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line1 Specify 'never' to avoid collecting an address line1 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line2 Specify 'never' to avoid collecting an address line2 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.city Specify 'never' to avoid collecting an address city as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.state Specify 'never' to avoid collecting an address state as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.country Specify 'never' to avoid collecting an address country as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.postalCode Specify 'never' to avoid collecting an address postal code as part of the billing details in the Payment Element.
     * @param {string} opts.fields.terms The Payment Element automatically displays mandates or other legal agreements when required by the payment method, like SEPA debit. Specify 'never' to never show legal agreements.
     * @param {string} opts.fields.terms.auBecsDebit Specify 'never' to never show legal agreements for the BECS Debit payment method.
     * @param {string} opts.fields.terms.bancontact Specify 'never' to never show legal agreements for the Bancontact payment method.
     * @param {string} opts.fields.terms.card Specify 'never' to never show legal agreements for the credit card payment method.
     * @param {string} opts.fields.terms.ideal Specify 'never' to never show legal agreements for the iDEAL payment method.
     * @param {string} opts.fields.terms.sepaDebit Specify 'never' to never show legal agreements for the SEPA Debit payment method.
     * @param {string} opts.fields.terms.sofort Specify 'never' to never show legal agreements for the SOFORT payment method.
     * @param {string} opts.fields.terms.usBankAccount Specify 'never' to never show legal agreements for the US Bank accounts payment method.
     * @param {string} opts.wallets Specify 'never' to never show digital wallet payment methods like Apple Pay and Google Pay.
     * @param {string} opts.wallets.applePay Specify 'never' to never show the Apple Pay digital wallet payment method.
     * @param {string} opts.wallets.googlePay Specify 'never' to never show the Google Pay digital wallet payment method.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide {
  display: none;
}
</style>
`]},media:void 0})},_n=de({render:fe,staticRenderFns:wn},An,Sn,"data-v-3329b3f8",!1,void 0,!1,me,void 0,void 0);var Cn={install:function(e,n){var r,t,c,p,l,h,E;return A.async(function(d){for(;;)switch(d.prev=d.next){case 0:r=n.pk,t=n.stripeAccount,c=n.apiVersion,p=n.locale,l=n.elementsOptions,(h=window.Stripe(r,{stripeAccount:t,apiVersion:c,locale:p})).registerAppInfo(B),E=h.elements(l),e.prototype.$stripe=h,e.prototype.$stripeElements=E;case 6:case"end":return d.stop()}})}};j.StripeCheckout=sn,ae=j.StripeElementCard=vn,j.StripeElementPayment=_n,j.StripeElementsPlugin=Cn,j.StripePlugin=ze;const xn={remember:"form",components:{CheckboxInput:be,LoadingButton:Se,TextInput:ve,TextareaInput:Ee,StripeElementCard:ae},props:{modal:Boolean,c:Object,icustomers:Array,amount:Number,oId:{default:!1}},data(){return{loading:!1,sending:!1,form:{date:null,reference:null,amount:null,gateway:null,received:null,order_id:null,customer_id:null,token:null,token_id:null,description:null},paid:0,errors:{},error:null,gateways:[],customers:[],message:null,customer:null,publishableKey:null}},mounted(){this.customers=this.icustomers||[],this.oId?this.$axios.post(this.route("payments.order",this.oId)).then(({data:e})=>this.paid=e.reduce((n,r)=>n+parseFloat(r.amount),0)).then(()=>{this.amount&&(this.form.amount=this.$number(this.amount-this.paid)+"")}).catch(e=>console.log(e)):this.amount&&(this.form.amount=this.$number(this.amount)+""),this.form.date=new Date().toISOString().split("T")[0],this.gateways=this.$page.props.user.account.gateways.split(","),this.c&&(this.customers.push(this.c),this.form.customer_id=this.c.value,this.customer=this.c),this.$page.props.user.account.payu&&this.gateways.push("PayU"),this.$page.props.user.account.stripe&&(this.gateways.push("Stripe"),this.publishableKey=this.$page.props.user.account.stripe_key),console.log("Hello")},methods:{customerChanged(e){console.log(e),this.customer=e||null,this.form.customer_id=e?e.value:null},searchCustomers(e,n){e&&(n(!0),this.searchingCustomers(n,e,this))},searchingCustomers:ge((e,n,r)=>{fetch(r.route("ajax.customers")+"?search="+escape(n)).then(t=>{t.json().then(c=>r.customers=c),e(!1)})},350),submit(){this.sending=!0,this.form.gateway=="Stripe"&&!this.form.token_id?this.$refs.stripeCard.submit():this.$axios.post(this.route("payments.store"),this.form).then(e=>{this.sending=!1,e.data.success&&(e.data.payu&&(window.location.href=this.route("payu.request",e.data.id)),this.modal?this.$emit("close"):(this.form={date:new Date,reference:null,amount:null,gateway:null,received:null,order_id:null,customer_id:null,token:null,token_id:null,description:null},this.customer=null))}).catch(e=>{this.sending=!1,this.form.token=null,this.form.token_id=null,this.errors=e.response.data.errors,this.$page.props.flash.error=e.response.data.message,this.$nextTick(()=>{document.getElementById("page-contents").scrollTop=0})})},tokenCreated(e){this.form.token=e,this.form.token_id=e.id,this.submit()}}},kn=M("h1",null,"Hello",-1),On=M("div",{class:"ltr:text-left rtl:text-right"},[M("h1",null,"Hello")],-1),Pn=[On];function Tn(e,n,r,t,c,p){return ne(),te(_e,null,[kn,r.c?(ne(),te("div",{key:0,class:re(r.modal?"modal flex items-center w-full h-full":"")},[M("div",{class:re(r.modal?"bg-white w-full rounded shadow-lg max-w-2xl mx-auto my-auto animate zoomIn":"")},Pn,2)],2)):Ae("",!0)],64)}const Fn=we(xn,[["render",Tn]]);export{Fn as default};
