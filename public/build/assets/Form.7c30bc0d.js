import{g as ve}from"./debounce.05dff6c7.js";import{T as be}from"./TextInput.559ab375.js";import{C as Ee}from"./CheckboxInput.3e5abf96.js";import{T as Se}from"./TextareaInput.0f922775.js";import{L as we}from"./LoadingButton.00d35e16.js";import{_ as _e,o as ne,c as te,a as x,t as Ae,d as re,n as ie}from"./app.ada7a7bc.js";import"./InputError.c12cebdc.js";var L={};const Ce="@vue-stripe/vue-stripe",xe="4.4.4",ke="Stripe Checkout & Elements for Vue.js",Pe="jofftiquez@gmail.com",Oe={build:"rollup -c",lint:"vue-cli-service lint --fix",prebuild:"rimraf dist",test:"jest"},Te="dist/index.js",$e="dist",Ie={"@stripe/stripe-js":"^1.13.2","vue-coerce-props":"^1.0.0"},je={"@babel/cli":"^7.7.5","@babel/core":"^7.7.5","@babel/plugin-proposal-export-default-from":"^7.7.4","@babel/plugin-proposal-optional-chaining":"^7.10.4","@babel/plugin-transform-runtime":"^7.7.5","@babel/preset-env":"^7.7.5","@babel/preset-es2015":"^7.0.0-beta.53","@babel/runtime":"^7.7.5","@rollup/plugin-node-resolve":"^6.0.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"^4.5.10","@vue/eslint-config-standard":"^5.1.2","babel-eslint":"^10.1.0","babel-minify":"^0.5.1","cross-env":"^6.0.3",eslint:"^6.8.0","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.2.2",jest:"^24.9.0","lint-staged":"^9.5.0",rimraf:"^3.0.0",rollup:"^1.27.9","rollup-plugin-babel":"^4.3.3","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-terser":"^5.1.3","rollup-plugin-uglify":"^6.0.3","rollup-plugin-vue":"^5.1.4","vue-template-compiler":"^2.6.11"},Le={url:"https://github.com/vue-stripe/vue-stripe/issues"},Re={"pre-commit":"lint-staged"},Be="https://github.com/vue-stripe/vue-stripe#readme",De=["vue","vuejs","stripe","checkout","payment"],Fe="MIT",Ne={type:"git",url:"git@github.com:vue-stripe/vue-stripe.git"},Me="typings/index.d.ts",Ue={name:Ce,version:xe,description:ke,author:Pe,scripts:Oe,main:Te,module:$e,dependencies:Ie,devDependencies:je,bugs:Le,gitHooks:Re,homepage:Be,keywords:De,license:Fe,"lint-staged":{"*.{js,jsx,vue}":["vue-cli-service lint","git add"]},repository:Ne,typings:Me};var le;Object.defineProperty(L,"__esModule",{value:!0});var Q="auto",Ve=["auto","bg","cs","da","de","el","en","en-GB","es","es-419","et","fi","fr","fr-CA","hu","id","it","ja","lt","lv","ms","mt","nb","nl","pl","pt","pt-BR","ro","ru","sk","sl","sv","tr","zh","zh-HK","zh-TW"],Ge=["auto","book","donate","pay"],qe=["required","auto"],He={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},ze=Ue.version,D={name:"vue-stripe",version:ze,url:"https://vuestripe.com",partner_id:"pp_partner_IqtOXpBSuz0IE2"},Ye={install:function(e,n){var r=n.pk,t=n.stripeAccount,c=n.apiVersion,p=n.locale,a=window.Stripe(r,{stripeAccount:t,apiVersion:c,locale:p});a.registerAppInfo(D),e.prototype.$stripe=a}};function Xe(e,n){return e(n={exports:{}},n.exports),n.exports}var Qe=Xe(function(e){var n=function(r){var t,c=Object.prototype,p=c.hasOwnProperty,a=typeof Symbol=="function"?Symbol:{},h=a.iterator||"@@iterator",E=a.asyncIterator||"@@asyncIterator",d=a.toStringTag||"@@toStringTag";function y(o,i,l,u){var s=i&&i.prototype instanceof G?i:G,g=Object.create(s.prototype),$=new Y(u||[]);return g._invoke=function(C,B,m){var b=f;return function(k,I){if(b===R)throw new Error("Generator is already running");if(b===F){if(k==="throw")throw I;return ee()}for(m.method=k,m.arg=I;;){var j=m.delegate;if(j){var A=Z(j,m);if(A){if(A===w)continue;return A}}if(m.method==="next")m.sent=m._sent=m.arg;else if(m.method==="throw"){if(b===f)throw b=F,m.arg;m.dispatchException(m.arg)}else m.method==="return"&&m.abrupt("return",m.arg);b=R;var v=S(C,B,m);if(v.type==="normal"){if(b=m.done?F:V,v.arg===w)continue;return{value:v.arg,done:m.done}}v.type==="throw"&&(b=F,m.method="throw",m.arg=v.arg)}}}(o,l,$),g}function S(o,i,l){try{return{type:"normal",arg:o.call(i,l)}}catch(u){return{type:"throw",arg:u}}}r.wrap=y;var f="suspendedStart",V="suspendedYield",R="executing",F="completed",w={};function G(){}function N(){}function O(){}var q={};q[h]=function(){return this};var H=Object.getPrototypeOf,M=H&&H(H(X([])));M&&M!==c&&p.call(M,h)&&(q=M);var T=O.prototype=G.prototype=Object.create(q);function J(o){["next","throw","return"].forEach(function(i){o[i]=function(l){return this._invoke(i,l)}})}function U(o){var i;this._invoke=function(l,u){function s(){return new Promise(function(g,$){(function C(B,m,b,k){var I=S(o[B],o,m);if(I.type!=="throw"){var j=I.arg,A=j.value;return A&&typeof A=="object"&&p.call(A,"__await")?Promise.resolve(A.__await).then(function(v){C("next",v,b,k)},function(v){C("throw",v,b,k)}):Promise.resolve(A).then(function(v){j.value=v,b(j)},function(v){return C("throw",v,b,k)})}k(I.arg)})(l,u,g,$)})}return i=i?i.then(s,s):s()}}function Z(o,i){var l=o.iterator[i.method];if(l===t){if(i.delegate=null,i.method==="throw"){if(o.iterator.return&&(i.method="return",i.arg=t,Z(o,i),i.method==="throw"))return w;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return w}var u=S(l,o.iterator,i.arg);if(u.type==="throw")return i.method="throw",i.arg=u.arg,i.delegate=null,w;var s=u.arg;return s?s.done?(i[o.resultName]=s.value,i.next=o.nextLoc,i.method!=="return"&&(i.method="next",i.arg=t),i.delegate=null,w):s:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,w)}function ge(o){var i={tryLoc:o[0]};1 in o&&(i.catchLoc=o[1]),2 in o&&(i.finallyLoc=o[2],i.afterLoc=o[3]),this.tryEntries.push(i)}function z(o){var i=o.completion||{};i.type="normal",delete i.arg,o.completion=i}function Y(o){this.tryEntries=[{tryLoc:"root"}],o.forEach(ge,this),this.reset(!0)}function X(o){if(o){var i=o[h];if(i)return i.call(o);if(typeof o.next=="function")return o;if(!isNaN(o.length)){var l=-1,u=function s(){for(;++l<o.length;)if(p.call(o,l))return s.value=o[l],s.done=!1,s;return s.value=t,s.done=!0,s};return u.next=u}}return{next:ee}}function ee(){return{value:t,done:!0}}return N.prototype=T.constructor=O,O.constructor=N,O[d]=N.displayName="GeneratorFunction",r.isGeneratorFunction=function(o){var i=typeof o=="function"&&o.constructor;return!!i&&(i===N||(i.displayName||i.name)==="GeneratorFunction")},r.mark=function(o){return Object.setPrototypeOf?Object.setPrototypeOf(o,O):(o.__proto__=O,d in o||(o[d]="GeneratorFunction")),o.prototype=Object.create(T),o},r.awrap=function(o){return{__await:o}},J(U.prototype),U.prototype[E]=function(){return this},r.AsyncIterator=U,r.async=function(o,i,l,u){var s=new U(y(o,i,l,u));return r.isGeneratorFunction(i)?s:s.next().then(function(g){return g.done?g.value:s.next()})},J(T),T[d]="Generator",T[h]=function(){return this},T.toString=function(){return"[object Generator]"},r.keys=function(o){var i=[];for(var l in o)i.push(l);return i.reverse(),function u(){for(;i.length;){var s=i.pop();if(s in o)return u.value=s,u.done=!1,u}return u.done=!0,u}},r.values=X,Y.prototype={constructor:Y,reset:function(o){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(z),!o)for(var i in this)i.charAt(0)==="t"&&p.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=t)},stop:function(){this.done=!0;var o=this.tryEntries[0].completion;if(o.type==="throw")throw o.arg;return this.rval},dispatchException:function(o){if(this.done)throw o;var i=this;function l(B,m){return g.type="throw",g.arg=o,i.next=B,m&&(i.method="next",i.arg=t),!!m}for(var u=this.tryEntries.length-1;u>=0;--u){var s=this.tryEntries[u],g=s.completion;if(s.tryLoc==="root")return l("end");if(s.tryLoc<=this.prev){var $=p.call(s,"catchLoc"),C=p.call(s,"finallyLoc");if($&&C){if(this.prev<s.catchLoc)return l(s.catchLoc,!0);if(this.prev<s.finallyLoc)return l(s.finallyLoc)}else if($){if(this.prev<s.catchLoc)return l(s.catchLoc,!0)}else{if(!C)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return l(s.finallyLoc)}}}},abrupt:function(o,i){for(var l=this.tryEntries.length-1;l>=0;--l){var u=this.tryEntries[l];if(u.tryLoc<=this.prev&&p.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var s=u;break}}s&&(o==="break"||o==="continue")&&s.tryLoc<=i&&i<=s.finallyLoc&&(s=null);var g=s?s.completion:{};return g.type=o,g.arg=i,s?(this.method="next",this.next=s.finallyLoc,w):this.complete(g)},complete:function(o,i){if(o.type==="throw")throw o.arg;return o.type==="break"||o.type==="continue"?this.next=o.arg:o.type==="return"?(this.rval=this.arg=o.arg,this.method="return",this.next="end"):o.type==="normal"&&i&&(this.next=i),w},finish:function(o){for(var i=this.tryEntries.length-1;i>=0;--i){var l=this.tryEntries[i];if(l.finallyLoc===o)return this.complete(l.completion,l.afterLoc),z(l),w}},catch:function(o){for(var i=this.tryEntries.length-1;i>=0;--i){var l=this.tryEntries[i];if(l.tryLoc===o){var u=l.completion;if(u.type==="throw"){var s=u.arg;z(l)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(o,i,l){return this.delegate={iterator:X(o),resultName:i,nextLoc:l},this.method==="next"&&(this.arg=t),w}},r}(e.exports);try{regeneratorRuntime=n}catch{Function("r","regeneratorRuntime = r")(n)}}),_=Qe;function ce(e){return(ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}var ue,pe="https://js.stripe.com/v3",We=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,oe="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Ke=function(){for(var e=document.querySelectorAll('script[src^="'.concat(pe,'"]')),n=0;n<e.length;n++){var r=e[n];if(We.test(r.src))return r}return null},Je=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(pe).concat(n);var t=document.head||document.body;if(!t)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return t.appendChild(r),r},Ze=function(e,n){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.13.2",startTime:n})},W=null,en=function(e){return W!==null?W:W=new Promise(function(n,r){if(typeof window<"u")if(window.Stripe&&e&&console.warn(oe),window.Stripe)n(window.Stripe);else try{var t=Ke();t&&e?console.warn(oe):t||(t=Je(e)),t.addEventListener("load",function(){window.Stripe?n(window.Stripe):r(new Error("Stripe.js not available"))}),t.addEventListener("error",function(){r(new Error("Failed to load Stripe.js"))})}catch(c){return void r(c)}else n(null)})},nn=function(e,n,r){if(e===null)return null;var t=e.apply(void 0,n);return Ze(t,r),t},tn=function(e){var n=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(e),`
`);if(e===null||ce(e)!=="object")throw new Error(n);if(Object.keys(e).length===1&&typeof e.advancedFraudSignals=="boolean")return e;throw new Error(n)},de=!1,P=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];de=!0;var t=Date.now();return en(ue).then(function(c){return nn(c,n,t)})};P.setLoadParameters=function(e){if(de)throw new Error("You cannot change load parameters after calling loadStripe");ue=tn(e)};/**
 * vue-coerce-props v1.0.0
 * (c) 2018 Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */var rn={beforeCreate:function(){var e=this.$options.props;e&&(this._$coertions=Object.keys(e).filter(function(n){return e[n].coerce}).map(function(n){return[n,e[n].coerce]}))},computed:{$coerced:function(){var e=this;return this._$coertions.reduce(function(n,r){var t=r[0],c=r[1];return n[t]=c.call(e,e.$props[t]),n},{})}}},on={pk:{type:String,required:!0},mode:{type:String,validator:function(e){return["payment","subscription"].includes(e)}},lineItems:{type:Array,default:void 0},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(e){return Ge.includes(e)}},billingAddressCollection:{type:String,default:"auto",validator:function(e){return qe.includes(e)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:Q,coerce:function(e){return Ve.includes(e)?e:(console.warn("VueStripe Warning: '".concat(e,"' is not supported by Stripe yet. Falling back to default '").concat(Q,"'.")),Q)}},shippingAddressCollection:{type:Object,validator:function(e){return Object.prototype.hasOwnProperty.call(e,"allowedCountries")}},disableAdvancedFraudDetection:{type:Boolean},stripeOptions:{type:Object,default:null}},sn={props:on,mixins:[rn],render:function(e){return e},methods:{redirectToCheckout:function(){var e,n,r;return _.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.$emit("loading",!0),this.disableAdvancedFraudDetection&&P.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},t.next=6,_.awrap(P(this.pk,e));case 6:if((n=t.sent).registerAppInfo(D),!this.sessionId){t.next=11;break}return n.redirectToCheckout({sessionId:this.sessionId}),t.abrupt("return");case 11:if(!this.lineItems||!this.lineItems.length||this.mode){t.next=14;break}return console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode"),t.abrupt("return");case 14:return r={billingAddressCollection:this.billingAddressCollection,cancelUrl:this.cancelUrl,clientReferenceId:this.clientReferenceId,customerEmail:this.customerEmail,items:this.items,lineItems:this.lineItems,locale:this.$coerced.locale,mode:this.mode,shippingAddressCollection:this.shippingAddressCollection,submitType:this.submitType,successUrl:this.successUrl},t.abrupt("return",n.redirectToCheckout(r));case 18:t.prev=18,t.t0=t.catch(0),console.error(t.t0),this.$emit("error",t.t0);case 22:case"end":return t.stop()}},null,this,[[0,18]])}}};function an(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var ln=an;function se(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),r.push.apply(r,t)}return r}function cn(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?se(Object(r),!0).forEach(function(t){ln(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var un="card",pn={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},elementsOptions:{type:Object,default:function(){return{}}},tokenData:{type:Object,default:function(){return{}}},disableAdvancedFraudDetection:{type:Boolean},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return He}},value:{type:String,default:void 0},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(e){return["solid","default"].includes(e)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,element:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},mounted:function(){var e,n,r=this;return _.async(function(t){for(;;)switch(t.prev=t.next){case 0:return this.disableAdvancedFraudDetection&&P.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},n={classes:this.classes,style:this.elementStyle,value:this.value,hidePostalCode:this.hidePostalCode,iconStyle:this.iconStyle,hideIcon:this.hideIcon,disabled:this.disabled},t.next=5,_.awrap(P(this.pk,e));case 5:this.stripe=t.sent,this.stripe.registerAppInfo(D),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(un,n),this.element.mount("#stripe-element-mount-point"),this.element.on("change",function(c){var p=document.getElementById("stripe-element-errors");c.error?p.textContent=c.error.message:p.textContent="",r.onChange(c)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(c){var p,a,h,E;return _.async(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,r.$emit("loading",!0),c.preventDefault(),p=cn({},r.element),r.amount&&(p.amount=r.amount),d.next=7,_.awrap(r.stripe.createToken(p,r.tokenData));case 7:if(a=d.sent,h=a.token,!(E=a.error)){d.next=15;break}return document.getElementById("stripe-element-errors").textContent=E.message,r.$emit("error",E),d.abrupt("return");case 15:r.$emit("token",h),d.next=22;break;case 18:d.prev=18,d.t0=d.catch(0),console.error(d.t0),r.$emit("error",d.t0);case 22:return d.prev=22,r.$emit("loading",!1),d.finish(22);case 25:case"end":return d.stop()}},null,null,[[0,18,22,25]])});case 17:case"end":return t.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},unmount:function(){this.element.unmount()},update:function(e){this.element.update(e)},onChange:function(e){this.$emit("element-change",e)},onReady:function(e){this.$emit("element-ready",e)},onFocus:function(e){this.$emit("element-focus",e)},onBlur:function(e){this.$emit("element-blur",e)},onEscape:function(e){this.$emit("element-escape",e)},onClick:function(e){this.$emit("element-click",e)}}};function me(e,n,r,t,c,p,a,h,E,d){typeof a!="boolean"&&(E=h,h=a,a=!1);const y=typeof r=="function"?r.options:r;let S;if(e&&e.render&&(y.render=e.render,y.staticRenderFns=e.staticRenderFns,y._compiled=!0,c&&(y.functional=!0)),t&&(y._scopeId=t),p?(S=function(f){(f=f||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(f=__VUE_SSR_CONTEXT__),n&&n.call(this,E(f)),f&&f._registeredComponents&&f._registeredComponents.add(p)},y._ssrRegister=S):n&&(S=a?function(f){n.call(this,d(f,this.$root.$options.shadowRoot))}:function(f){n.call(this,h(f))}),S)if(y.functional){const f=y.render;y.render=function(V,R){return S.call(R),f(V,R)}}else{const f=y.beforeCreate;y.beforeCreate=f?[].concat(f,S):[S]}return r}const dn=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function he(e){return(n,r)=>mn(n,r)}let K;const ae={};function mn(e,n){const r=dn?n.media||"default":e,t=ae[r]||(ae[r]={ids:new Set,styles:[]});if(!t.ids.has(e)){t.ids.add(e);let c=n.source;if(n.map&&(c+=`
/*# sourceURL=`+n.map.sources[0]+" */",c+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),t.element||(t.element=document.createElement("style"),t.element.type="text/css",n.media&&t.element.setAttribute("media",n.media),K===void 0&&(K=document.head||document.getElementsByTagName("head")[0]),K.appendChild(t.element)),"styleSheet"in t.element)t.styles.push(c),t.element.styleSheet.cssText=t.styles.filter(Boolean).join(`
`);else{const p=t.ids.size-1,a=document.createTextNode(c),h=t.element.childNodes;h[p]&&t.element.removeChild(h[p]),h.length?t.element.insertBefore(a,h[p]):t.element.appendChild(a)}}}const hn=pn;var fe=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("form",{attrs:{id:"stripe-element-form"}},[n("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[n("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),n("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},fn=[];fe._withStripped=!0;const yn=function(e){e&&e("data-v-4dd8360e_0",{source:`





















































































































































































































































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
`]},media:void 0})},gn="data-v-4dd8360e",vn=me({render:fe,staticRenderFns:fn},yn,hn,gn,!1,void 0,!1,he,void 0,void 0);var bn="payment",En={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},elementsOptions:{type:Object,required:!0,default:function(){return{}}},confirmParams:{type:Object,required:!0,default:function(){return{}}},redirect:{type:String,default:"always"},createOptions:{type:Object,default:function(){return{}}},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},disableAdvancedFraudDetection:{type:Boolean}},data:function(){return{loading:!1,stripe:null,elements:null,element:null}},computed:{form:function(){return document.getElementById("stripe-payment-element-form")}},mounted:function(){var e,n=this;return _.async(function(r){for(;;)switch(r.prev=r.next){case 0:return this.disableAdvancedFraudDetection&&P.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},r.next=4,_.awrap(P(this.pk,e));case 4:this.stripe=r.sent,this.stripe.registerAppInfo(D),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(bn,this.createOptions),this.element.mount("#stripe-payment-element-mount-point"),this.element.on("change",function(t){var c=document.getElementById("stripe-payment-element-errors");t.error?c.textContent=t.error.message:c.textContent="",n.onChange(t)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(t){var c,p;return _.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n.$emit("loading",!0),t.preventDefault(),a.next=5,_.awrap(n.stripe.confirmPayment({elements:n.elements,confirmParams:n.confirmParams,redirect:n.redirect}));case 5:if(c=a.sent,!(p=c.error)){a.next=12;break}return document.getElementById("stripe-payment-element-errors").textContent=p.message,n.$emit("error",p),a.abrupt("return");case 12:a.next=18;break;case 14:a.prev=14,a.t0=a.catch(0),console.error(a.t0),n.$emit("error",a.t0);case 18:return a.prev=18,n.$emit("loading",!1),a.finish(18);case 21:case"end":return a.stop()}},null,null,[[0,14,18,21]])});case 16:case"end":return r.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},collapse:function(){this.element.collapse()},getElement:function(){this.element.getElement()},unmount:function(){this.element.unmount()},update:function(e){this.element.update(e)},onChange:function(e){this.$emit("element-change",e)},onReady:function(e){this.$emit("element-ready",e)},onFocus:function(e){this.$emit("element-focus",e)},onBlur:function(e){this.$emit("element-blur",e)},onEscape:function(e){this.$emit("element-escape",e)},onClick:function(e){this.$emit("element-click",e)}}};const Sn=En;var ye=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("form",{attrs:{id:"stripe-payment-element-form"}},[n("div",{attrs:{id:"stripe-payment-element-mount-point"}}),this._v(" "),this._t("stripe-payment-element-errors",[n("div",{attrs:{id:"stripe-payment-element-errors",role:"alert"}})]),this._v(" "),n("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},wn=[];ye._withStripped=!0;const _n=function(e){e&&e("data-v-3329b3f8_0",{source:`


































































































































































































































































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
`]},media:void 0})},An=me({render:ye,staticRenderFns:wn},_n,Sn,"data-v-3329b3f8",!1,void 0,!1,he,void 0,void 0);var Cn={install:function(e,n){var r,t,c,p,a,h,E;return _.async(function(d){for(;;)switch(d.prev=d.next){case 0:r=n.pk,t=n.stripeAccount,c=n.apiVersion,p=n.locale,a=n.elementsOptions,(h=window.Stripe(r,{stripeAccount:t,apiVersion:c,locale:p})).registerAppInfo(D),E=h.elements(a),e.prototype.$stripe=h,e.prototype.$stripeElements=E;case 6:case"end":return d.stop()}})}};L.StripeCheckout=sn,le=L.StripeElementCard=vn,L.StripeElementPayment=An,L.StripeElementsPlugin=Cn,L.StripePlugin=Ye;const xn={remember:"form",components:{CheckboxInput:Ee,LoadingButton:we,TextInput:be,TextareaInput:Se,StripeElementCard:le},props:{modal:Boolean,c:Object,icustomers:Array,amount:Number,oId:{default:!1}},data(){return{loading:!1,sending:!1,form:{date:null,reference:null,amount:null,gateway:null,received:null,order_id:null,customer_id:null,token:null,token_id:null,description:null},paid:0,errors:{},error:null,gateways:[],customers:[],message:null,customer:null,publishableKey:null}},mounted(){this.customers=this.icustomers||[],this.oId?this.$axios.post(this.route("payments.order",this.oId)).then(({data:e})=>this.paid=e.reduce((n,r)=>n+parseFloat(r.amount),0)).then(()=>{this.amount&&(this.form.amount=this.$number(this.amount-this.paid)+"")}).catch(e=>console.log(e)):this.amount&&(this.form.amount=this.$number(this.amount)+""),this.form.date=new Date().toISOString().split("T")[0],this.gateways=this.$page.props.user.account.gateways.split(","),this.c&&(this.customers.push(this.c),this.form.customer_id=this.c.value,this.customer=this.c),this.$page.props.user.account.payu&&this.gateways.push("PayU"),this.$page.props.user.account.stripe&&(this.gateways.push("Stripe"),this.publishableKey=this.$page.props.user.account.stripe_key)},methods:{customerChanged(e){console.log(e),this.customer=e||null,this.form.customer_id=e?e.value:null},searchCustomers(e,n){e&&(n(!0),this.searchingCustomers(n,e,this))},searchingCustomers:ve((e,n,r)=>{fetch(r.route("ajax.customers")+"?search="+escape(n)).then(t=>{t.json().then(c=>r.customers=c),e(!1)})},350),submit(){this.sending=!0,this.form.gateway=="Stripe"&&!this.form.token_id?this.$refs.stripeCard.submit():this.$axios.post(this.route("payments.store"),this.form).then(e=>{this.sending=!1,e.data.success&&(e.data.payu&&(window.location.href=this.route("payu.request",e.data.id)),this.modal?this.$emit("close"):(this.form={date:new Date,reference:null,amount:null,gateway:null,received:null,order_id:null,customer_id:null,token:null,token_id:null,description:null},this.customer=null))}).catch(e=>{this.sending=!1,this.form.token=null,this.form.token_id=null,this.errors=e.response.data.errors,this.$page.props.flash.error=e.response.data.message,this.$nextTick(()=>{document.getElementById("page-contents").scrollTop=0})})},tokenCreated(e){this.form.token=e,this.form.token_id=e.id,this.submit()}}},kn={class:"ltr:text-left rtl:text-right"},Pn={key:0,class:"np flex justify-between items-center px-6 py-4 mb-4 bg-gray-100 border-b rounded-t"},On={class:"font-bold flex-1"},Tn={class:"flex items-center"},$n=x("svg",{class:"fill-current text-black",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[x("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})],-1),In=[$n],jn=x("h1",null,"Hello",-1);function Ln(e,n,r,t,c,p){return r.c?(ne(),te("div",{key:0,class:ie(r.modal?"modal flex items-center w-full h-full":"")},[x("div",{class:ie(r.modal?"bg-white w-full rounded shadow-lg max-w-2xl mx-auto my-auto animate zoomIn":"")},[x("div",kn,[r.modal?(ne(),te("div",Pn,[x("p",On,Ae(e.$t("add_x",{x:e.$tc("Payment")})),1),x("div",Tn,[x("a",{class:"modal-close cursor-pointer z-50",onClick:n[0]||(n[0]=a=>e.$emit("close"))},In)])])):re("",!0),jn])],2)],2)):re("",!0)}const Vn=_e(xn,[["render",Ln]]);export{Vn as default};
