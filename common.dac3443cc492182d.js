"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{4833:(E,y,d)=>{d.d(y,{c:()=>g});var _=d(7205),m=d(7683),u=d(3139);const g=(n,s)=>{let t,e;const i=(h,r,o)=>{if(typeof document>"u")return;const p=document.elementFromPoint(h,r);p&&s(p)?p!==t&&(l(),a(p,o)):l()},a=(h,r)=>{t=h,e||(e=t);const o=t;(0,_.c)(()=>o.classList.add("ion-activated")),r()},l=(h=!1)=>{if(!t)return;const r=t;(0,_.c)(()=>r.classList.remove("ion-activated")),h&&e!==t&&t.click(),t=void 0};return(0,u.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:h=>i(h.currentX,h.currentY,m.a),onMove:h=>i(h.currentX,h.currentY,m.b),onEnd:()=>{l(!0),(0,m.h)(),e=void 0}})}},8685:(E,y,d)=>{d.d(y,{g:()=>_});const _=(s,t,e,i,a)=>u(s[1],t[1],e[1],i[1],a).map(l=>m(s[0],t[0],e[0],i[0],l)),m=(s,t,e,i,a)=>a*(3*t*Math.pow(a-1,2)+a*(-3*e*a+3*e+i*a))-s*Math.pow(a-1,3),u=(s,t,e,i,a)=>n((i-=a)-3*(e-=a)+3*(t-=a)-(s-=a),3*e-6*t+3*s,3*t-3*s,s).filter(h=>h>=0&&h<=1),n=(s,t,e,i)=>{if(0===s)return((s,t,e)=>{const i=t*t-4*s*e;return i<0?[]:[(-t+Math.sqrt(i))/(2*s),(-t-Math.sqrt(i))/(2*s)]})(t,e,i);const a=(3*(e/=s)-(t/=s)*t)/3,l=(2*t*t*t-9*t*e+27*(i/=s))/27;if(0===a)return[Math.pow(-l,1/3)];if(0===l)return[Math.sqrt(-a),-Math.sqrt(-a)];const h=Math.pow(l/2,2)+Math.pow(a/3,3);if(0===h)return[Math.pow(l/2,.5)-t/3];if(h>0)return[Math.pow(-l/2+Math.sqrt(h),1/3)-Math.pow(l/2+Math.sqrt(h),1/3)-t/3];const r=Math.sqrt(Math.pow(-a/3,3)),o=Math.acos(-l/(2*Math.sqrt(Math.pow(-a/3,3)))),p=2*Math.pow(r,1/3);return[p*Math.cos(o/3)-t/3,p*Math.cos((o+2*Math.PI)/3)-t/3,p*Math.cos((o+4*Math.PI)/3)-t/3]}},9523:(E,y,d)=>{d.d(y,{i:()=>_});const _=m=>m&&""!==m.dir?"rtl"===m.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},1112:(E,y,d)=>{d.r(y),d.d(y,{startFocusVisible:()=>g});const _="ion-focused",u=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],g=n=>{let s=[],t=!0;const e=n?n.shadowRoot:document,i=n||document.body,a=f=>{s.forEach(v=>v.classList.remove(_)),f.forEach(v=>v.classList.add(_)),s=f},l=()=>{t=!1,a([])},h=f=>{t=u.includes(f.key),t||a([])},r=f=>{if(t&&f.composedPath){const v=f.composedPath().filter(w=>!!w.classList&&w.classList.contains("ion-focusable"));a(v)}},o=()=>{e.activeElement===i&&a([])};return e.addEventListener("keydown",h),e.addEventListener("focusin",r),e.addEventListener("focusout",o),e.addEventListener("touchstart",l),e.addEventListener("mousedown",l),{destroy:()=>{e.removeEventListener("keydown",h),e.removeEventListener("focusin",r),e.removeEventListener("focusout",o),e.removeEventListener("touchstart",l),e.removeEventListener("mousedown",l)},setFocus:a}}},1878:(E,y,d)=>{d.d(y,{C:()=>n,a:()=>u,d:()=>g});var _=d(5861),m=d(3756);const u=function(){var s=(0,_.Z)(function*(t,e,i,a,l,h){var r;if(t)return t.attachViewToDom(e,i,l,a);if(!(h||"string"==typeof i||i instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof i?null===(r=e.ownerDocument)||void 0===r?void 0:r.createElement(i):i;return a&&a.forEach(p=>o.classList.add(p)),l&&Object.assign(o,l),e.appendChild(o),yield new Promise(p=>(0,m.c)(o,p)),o});return function(e,i,a,l,h,r){return s.apply(this,arguments)}}(),g=(s,t)=>{if(t){if(s)return s.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},n=()=>{let s,t;return{attachViewToDom:function(){var a=(0,_.Z)(function*(l,h,r={},o=[]){var p,f;if(s=l,h){const w="string"==typeof h?null===(p=s.ownerDocument)||void 0===p?void 0:p.createElement(h):h;o.forEach(c=>w.classList.add(c)),Object.assign(w,r),s.appendChild(w),yield new Promise(c=>(0,m.c)(w,c))}else if(s.children.length>0){const w=null===(f=s.ownerDocument)||void 0===f?void 0:f.createElement("div");o.forEach(c=>w.classList.add(c)),w.append(...s.children),s.appendChild(w)}const v=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),s.parentNode.insertBefore(t,s),v.appendChild(s),s});return function(h,r){return a.apply(this,arguments)}}(),removeViewFromDom:()=>(s&&t&&(t.parentNode.insertBefore(s,t),t.remove()),Promise.resolve())}}},7683:(E,y,d)=>{d.d(y,{a:()=>u,b:()=>g,c:()=>m,d:()=>s,h:()=>n});const _={getEngine(){var t;const e=window;return e.TapticEngine||(null===(t=e.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:i})},notification(t){const e=this.getEngine();if(!e)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},m=()=>{_.selection()},u=()=>{_.selectionStart()},g=()=>{_.selectionChanged()},n=()=>{_.selectionEnd()},s=t=>{_.impact(t)}},6465:(E,y,d)=>{d.d(y,{I:()=>n,a:()=>a,b:()=>s,c:()=>r,d:()=>p,f:()=>l,g:()=>i,i:()=>e,p:()=>o,r:()=>f,s:()=>h});var _=d(5861),m=d(3756),u=d(7208);const n="ion-content",s=".ion-content-scroll-host",t=`${n}, ${s}`,e=v=>v&&"ION-CONTENT"===v.tagName,i=function(){var v=(0,_.Z)(function*(w){return e(w)?(yield new Promise(c=>(0,m.c)(w,c)),w.getScrollElement()):w});return function(c){return v.apply(this,arguments)}}(),a=v=>v.querySelector(s)||v.querySelector(t),l=v=>v.closest(t),h=(v,w)=>e(v)?v.scrollToTop(w):Promise.resolve(v.scrollTo({top:0,left:0,behavior:w>0?"smooth":"auto"})),r=(v,w,c,C)=>e(v)?v.scrollByPoint(w,c,C):Promise.resolve(v.scrollBy({top:c,left:w,behavior:C>0?"smooth":"auto"})),o=v=>(0,u.a)(v,n),p=v=>{if(e(v)){const c=v.scrollY;return v.scrollY=!1,c}return v.style.setProperty("overflow","hidden"),!0},f=(v,w)=>{e(v)?v.scrollY=w:v.style.removeProperty("overflow")}},7208:(E,y,d)=>{d.d(y,{a:()=>u,b:()=>m,p:()=>_});const _=g=>console.warn(`[Ionic Warning]: ${g}`),m=(g,...n)=>console.error(`[Ionic Error]: ${g}`,...n),u=(g,...n)=>console.error(`<${g.tagName.toLowerCase()}> must be used inside ${n.join(" or ")}.`)},3230:(E,y,d)=>{d.d(y,{a:()=>_,b:()=>l,c:()=>s,d:()=>h,e:()=>c,f:()=>u,g:()=>m,h:()=>v,i:()=>t,j:()=>i,k:()=>r,l:()=>e,m:()=>n,n:()=>g,o:()=>a,p:()=>o,q:()=>p,r:()=>f,s:()=>w});const _="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8439:(E,y,d)=>{d.d(y,{s:()=>_});const _=e=>{try{if(e instanceof class t{constructor(i){this.value=i}})return e.value;if(!g()||"string"!=typeof e||""===e)return e;const i=document.createDocumentFragment(),a=document.createElement("div");i.appendChild(a),a.innerHTML=e,s.forEach(o=>{const p=i.querySelectorAll(o);for(let f=p.length-1;f>=0;f--){const v=p[f];v.parentNode?v.parentNode.removeChild(v):i.removeChild(v);const w=u(v);for(let c=0;c<w.length;c++)m(w[c])}});const l=u(i);for(let o=0;o<l.length;o++)m(l[o]);const h=document.createElement("div");h.appendChild(i);const r=h.querySelector("div");return null!==r?r.innerHTML:h.innerHTML}catch(i){return console.error(i),""}},m=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let a=e.attributes.length-1;a>=0;a--){const l=e.attributes.item(a),h=l.name;if(!n.includes(h.toLowerCase())){e.removeAttribute(h);continue}const r=l.value;null!=r&&r.toLowerCase().includes("javascript:")&&e.removeAttribute(h)}const i=u(e);for(let a=0;a<i.length;a++)m(i[a])},u=e=>null!=e.children?e.children:e.childNodes,g=()=>{var e;const a=null===(e=window?.Ionic)||void 0===e?void 0:e.config;return!a||(a.get?a.get("sanitizerEnabled",!0):!0===a.sanitizerEnabled||void 0===a.sanitizerEnabled)},n=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},1316:(E,y,d)=>{d.r(y),d.d(y,{KEYBOARD_DID_CLOSE:()=>m,KEYBOARD_DID_OPEN:()=>_,copyVisualViewport:()=>w,keyboardDidClose:()=>o,keyboardDidOpen:()=>h,keyboardDidResize:()=>r,resetKeyboardAssist:()=>t,setKeyboardClose:()=>l,setKeyboardOpen:()=>a,startKeyboardAssist:()=>e,trackViewportChanges:()=>v});const _="ionKeyboardDidShow",m="ionKeyboardDidHide";let g={},n={},s=!1;const t=()=>{g={},n={},s=!1},e=c=>{i(c),c.visualViewport&&(n=w(c.visualViewport),c.visualViewport.onresize=()=>{v(c),h()||r(c)?a(c):o(c)&&l(c)})},i=c=>{c.addEventListener("keyboardDidShow",C=>a(c,C)),c.addEventListener("keyboardDidHide",()=>l(c))},a=(c,C)=>{p(c,C),s=!0},l=c=>{f(c),s=!1},h=()=>!s&&g.width===n.width&&(g.height-n.height)*n.scale>150,r=c=>s&&!o(c),o=c=>s&&n.height===c.innerHeight,p=(c,C)=>{const D=new CustomEvent(_,{detail:{keyboardHeight:C?C.keyboardHeight:c.innerHeight-n.height}});c.dispatchEvent(D)},f=c=>{const C=new CustomEvent(m);c.dispatchEvent(C)},v=c=>{g=Object.assign({},n),n=w(c.visualViewport)},w=c=>({width:Math.round(c.width),height:Math.round(c.height),offsetTop:c.offsetTop,offsetLeft:c.offsetLeft,pageTop:c.pageTop,pageLeft:c.pageLeft,scale:c.scale})},7741:(E,y,d)=>{d.d(y,{S:()=>m});const m={bubbles:{dur:1e3,circles:9,fn:(u,g,n)=>{const s=u*g/n-u+"ms",t=2*Math.PI*g/n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(u,g,n)=>{const s=g/n,t=u*s-u+"ms",e=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(u,g)=>({r:6,style:{left:9-9*g+"px","animation-delay":-110*g+"ms"}})},lines:{dur:1e3,lines:8,fn:(u,g,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*g+(g<n/2?180:-180)}deg)`,"animation-delay":u*g/n-u+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(u,g,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*g+(g<n/2?180:-180)}deg)`,"animation-delay":u*g/n-u+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(u,g,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*g+(g<6?180:-180)}deg)`,"animation-delay":u*g/n-u+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(u,g,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*g+(g<6?180:-180)}deg)`,"animation-delay":u*g/n-u+"ms"}})}}},6546:(E,y,d)=>{d.r(y),d.d(y,{createSwipeBackGesture:()=>n});var _=d(3756),m=d(9523),u=d(3139);d(3509);const n=(s,t,e,i,a)=>{const l=s.ownerDocument.defaultView,h=(0,m.i)(s),o=c=>h?-c.deltaX:c.deltaX;return(0,u.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:c=>(c=>{const{startX:M}=c;return h?M>=l.innerWidth-50:M<=50})(c)&&t(),onStart:e,onMove:c=>{const M=o(c)/l.innerWidth;i(M)},onEnd:c=>{const C=o(c),M=l.innerWidth,D=C/M,S=(c=>h?-c.velocityX:c.velocityX)(c),L=S>=0&&(S>.2||C>M/2),b=(L?1-D:D)*M;let k=0;if(b>5){const x=b/Math.abs(S);k=Math.min(x,540)}a(L,D<=0?.01:(0,_.l)(0,D,.9999),k)}})}},2854:(E,y,d)=>{d.d(y,{c:()=>u,g:()=>n,h:()=>m,o:()=>t});var _=d(5861);const m=(e,i)=>null!==i.closest(e),u=(e,i)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},i):i,n=e=>{const i={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(a=>null!=a).map(a=>a.trim()).filter(a=>""!==a):[])(e).forEach(a=>i[a]=!0),i},s=/^[a-z][a-z0-9+\-.]*:/,t=function(){var e=(0,_.Z)(function*(i,a,l,h){if(null!=i&&"#"!==i[0]&&!s.test(i)){const r=document.querySelector("ion-router");if(r)return a?.preventDefault(),r.push(i,l,h)}return!1});return function(a,l,h,r){return e.apply(this,arguments)}}()},117:(E,y,d)=>{d.d(y,{Y:()=>m});var _=d(5062);let m=(()=>{class u{constructor(){this.showMap=!1}}return u.\u0275fac=function(n){return new(n||u)},u.\u0275prov=_.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},4778:(E,y,d)=>{d.r(y),d.d(y,{DashboardPageModule:()=>r});var _=d(6895),m=d(4719),u=d(9928),g=d(4781),n=d(5062),s=d(1391),t=d(117);function e(o,p){if(1&o&&(n.TgZ(0,"ion-select-option",5),n._uU(1),n.qZA()),2&o){const f=p.$implicit;n.s9C("value",f.linkName),n.xp6(1),n.Oqu(f.linkName)}}function i(o,p){if(1&o&&(n.TgZ(0,"div",2)(1,"h3"),n._uU(2," Estos son tus enlaces "),n.qZA(),n.TgZ(3,"ion-select",3),n.YNc(4,e,2,2,"ion-select-option",4),n.qZA()()),2&o){const f=n.oxw();n.Q6J("formGroup",f.linksForm),n.xp6(4),n.Q6J("ngForOf",f.settingsService.linkSettingsList)}}const l=[{path:"",component:(()=>{class o{constructor(f,v,w,c){this.settingsService=f,this.alertService=v,this.homeService=w,this.formBuilder=c,this.showLinkForm=!1}ngOnInit(){this.getUserLinks()}getUserLinks(){this.settingsService.getUserLinks("DSVlv21Tk8ZcPjwwvmrlzzMk2472").then(f=>{console.log("repsonse ",f);const v=f.linkSettings;this.alertService.closeLoading(),this.settingsService.linkSettingsList=v,this.settingsService.linkSettings=v[0],this.setLinkForm()}).catch(f=>{this.alertService.closeLoading()})}setLinkForm(){this.linksForm=this.formBuilder.group({linkSelected:this.formBuilder.control(null!==this.settingsService.linkSettings.linkName?this.settingsService.linkSettings.linkName:null,m.kI.required)}),this.showLinkForm=!0}}return o.\u0275fac=function(f){return new(f||o)(n.Y36(s.gb),n.Y36(s.c9),n.Y36(t.Y),n.Y36(m.qu))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-dashboard"]],decls:9,vars:1,consts:[[1,"ion-padding"],["class","ion-padding",3,"formGroup",4,"ngIf"],[1,"ion-padding",3,"formGroup"],["placeholder","Enlaces","formControlName","linkSelected"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(f,v){1&f&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),n._uU(3,"Inicio"),n.qZA()()(),n.TgZ(4,"ion-content")(5,"div",0)(6,"h2"),n._uU(7," Bienvenido Gianfranco! "),n.qZA(),n.YNc(8,i,5,2,"div",1),n.qZA()()),2&f&&(n.xp6(8),n.Q6J("ngIf",v.showLinkForm))},dependencies:[_.sg,_.O5,m.JJ,m.JL,u.W2,u.Gu,u.t9,u.n0,u.sr,u.wd,u.QI,m.sg,m.u]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(f){return new(f||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[g.Bz.forChild(l),g.Bz]}),o})(),r=(()=>{class o{}return o.\u0275fac=function(f){return new(f||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[_.ez,m.u5,u.Pc,h,m.UX]}),o})()},1391:(E,y,d)=>{d.d(y,{c9:()=>g,aU:()=>i,gb:()=>a.g});var _=d(5861),m=d(5062),u=d(9928);let g=(()=>{class l{constructor(r,o){this.alertController=r,this.loadingCtrl=o}presentAlert(r,o){var p=this;return(0,_.Z)(function*(){yield(yield p.alertController.create({cssClass:"my-custom-class",header:r,subHeader:"",message:o,buttons:["OK"]})).present()})()}closeLoading(){this.loadingCtrl.dismiss()}showLoading(r){var o=this;return(0,_.Z)(function*(){(yield o.loadingCtrl.create({message:r})).present()})()}}return l.\u0275fac=function(r){return new(r||l)(m.LFG(u.Br),m.LFG(u.HT))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var n=d(2340),s=d(529),t=d(3850);let e=(()=>{class l{constructor(r,o){this.http=r,this.db=o}get(r,o,p=new s.WM({Accept:"application/json"})){return this.http.get(r,{headers:p,params:o})}post(r,o,p,f=new s.WM({"Content-Type":"application/json"})){return this.http.post(r,o,{headers:f,params:p})}updateUserAntenna(r,o){return this.db.doc(`users/${r}`).update({antennaSelected:o})}updateUserLinkSettings(r,o){return this.db.doc(`LinkSettings/${r}`).update({linkSettings:o})}}return l.\u0275fac=function(r){return new(r||l)(m.LFG(s.eN),m.LFG(t.ST))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})(),i=(()=>{class l{constructor(r){this.dataService=r,this.uri="http://abinassar.pythonanywhere.com"}getElevationProfile(r,o){return console.log("startPoint ",r),console.log("endPoint ",o),this.dataService.post(this.uri+"/elevation_profile",{start_point:r,end_point:o})}getWaterVaporAtenuation(r,o,p){return this.dataService.post(this.uri+"/get_atmospheric_atenuation_water_vapor",{pressure:r,temperature:o,waterDensity:p})}getSpecificWaterVaporAtenuation(r,o,p,f){return this.dataService.post(this.uri+"/get_specific_atmospheric_atenuation_water_vapor",{pressure:r,temperature:o,waterDensity:p,frecuency:f})}getAtenuation(r,o){return this.dataService.post(this.uri+"/get_atmospheric_atenuation",{pressure:r,temperature:o})}getSpecificAtenuation(r,o,p){return this.dataService.post(this.uri+"/get_specific_atmospheric_atenuation",{pressure:r,temperature:o,frecuency:p})}getLocationData(r,o){return this.dataService.get(`https://api.openweathermap.org/data/2.5/weather?lat=${r}&lon=${o}&lang=es&appid=${n.N.weatherAPIKey}`)}}return l.\u0275fac=function(r){return new(r||l)(m.LFG(e))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var a=d(4795)}}]);