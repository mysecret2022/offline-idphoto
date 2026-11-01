(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Id(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const St={},Ri=[],on=()=>{},Vg=()=>!1,Xo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Yo=e=>e.startsWith("onUpdate:"),Ht=Object.assign,Ad=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},Mw=Object.prototype.hasOwnProperty,pt=(e,t)=>Mw.call(e,t),Be=Array.isArray,Zn=e=>ma(e)==="[object Map]",An=e=>ma(e)==="[object Set]",yf=e=>ma(e)==="[object Date]",qe=e=>typeof e=="function",Rt=e=>typeof e=="string",ln=e=>typeof e=="symbol",ht=e=>e!==null&&typeof e=="object",Wg=e=>(ht(e)||qe(e))&&qe(e.then)&&qe(e.catch),qg=Object.prototype.toString,ma=e=>qg.call(e),Rw=e=>ma(e).slice(8,-1),Hg=e=>ma(e)==="[object Object]",Od=e=>Rt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xs=Id(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zo=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},Bw=/-\w/g,Hr=Zo(e=>e.replace(Bw,t=>t.slice(1).toUpperCase())),Pw=/\B([A-Z])/g,ri=Zo(e=>e.replace(Pw,"-$1").toLowerCase()),Gg=Zo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Bl=Zo(e=>e?`on${Gg(e)}`:""),sn=(e,t)=>!Object.is(e,t),$o=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},Kg=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},Qo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Dw=e=>{const t=Rt(e)?Number(e):NaN;return isNaN(t)?e:t};let bf;const Jo=()=>bf||(bf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xn(e){if(Be(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],i=Rt(n)?Fw(n):Xn(n);if(i)for(const s in i)t[s]=i[s]}return t}else if(Rt(e)||ht(e))return e}const Nw=/;(?![^(]*\))/g,Uw=/:([^]+)/,Lw=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Fw(e){const t={};return e.replace(Lw,r=>r.startsWith("/*")?"":r).split(Nw).forEach(r=>{if(r){const n=r.split(Uw);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Vr(e){let t="";if(Rt(e))t=e;else if(Be(e))for(let r=0;r<e.length;r++){const n=Vr(e[r]);n&&(t+=n+" ")}else if(ht(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const jw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Vw=Id(jw);function Xg(e){return!!e||e===""}function Ww(e,t,r){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=On(e[i],t[i],r);return n}function vf(e,t,r){if(e.size!==t.size)return!1;const n=Array.from(t),i=new Uint8Array(n.length);for(const s of e){let a=-1;for(let o=0;o<n.length;o++)if(!i[o]&&On(s,n[o],r)){a=o;break}if(a<0)return!1;i[a]=1}return!0}function qw(e,t,r){let n=Zn(e),i=Zn(t);if(n||i||(n=An(e),i=An(t),n||i))return n&&i?vf(e,t,r):!1;const s=Object.keys(e).length,a=Object.keys(t).length;if(s!==a)return!1;for(const o in e){const l=e.hasOwnProperty(o),d=t.hasOwnProperty(o);if(l&&!d||!l&&d||!On(e[o],t[o],r))return!1}return String(e)===String(t)}function wf(e,t,r,n){r||(r=[new Map,new Map]);const[i,s]=r;if(i.has(e)||s.has(t))return i.get(e)===t&&s.get(t)===e;i.set(e,t),s.set(t,e);const a=n(e,t,r);return i.delete(e),s.delete(t),a}function On(e,t,r){if(e===t)return!0;let n=yf(e),i=yf(t);return n||i?n&&i?e.getTime()===t.getTime():!1:(n=ln(e),i=ln(t),n||i?e===t:(n=Be(e),i=Be(t),n||i?n&&i?wf(e,t,r,Ww):!1:(n=ht(e),i=ht(t),n||i?!n||!i?!1:wf(e,t,r,qw):String(e)===String(t))))}function zd(e,t){return e.findIndex(r=>On(r,t))}const Yg=e=>!!(e&&e.__v_isRef===!0),Ye=e=>Rt(e)?e:e==null?"":Be(e)||ht(e)&&(e.toString===qg||!qe(e.toString))?Yg(e)?Ye(e.value):JSON.stringify(e,Zg,2):String(e),Zg=(e,t)=>Yg(t)?Zg(e,t.value):Zn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,i],s)=>(r[Pl(n,s)+" =>"]=i,r),{})}:An(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>Pl(r))}:ln(t)?Pl(t):ht(t)&&!Be(t)&&!Hg(t)?String(t):t,Pl=(e,t="")=>{var r;return ln(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class Hw{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Zt&&(Zt.active?(this.parent=Zt,this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes){const n=this.scopes.slice();for(t=0,r=n.length;t<r;t++)n[t].pause()}for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes){const i=this.scopes.slice();for(t=0,r=i.length;t<r;t++)i[t].resume()}const n=this.effects.slice();for(t=0,r=n.length;t<r;t++)n[t].resume()}}run(t){if(this._active){const r=Zt;try{return Zt=this,t()}finally{Zt=r}}}on(){++this._on===1&&(this.prevScope=Zt,Zt=this)}off(){if(this._on>0&&--this._on===0){if(Zt===this)Zt=this.prevScope;else{let t=Zt;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(r=0,n=i.length;r<n;r++)i[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Gw(){return Zt}let Tt;const Dl=new WeakSet;class Qg{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zt&&(Zt.active?Zt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Dl.has(this)&&(Dl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||e0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_f(this),t0(this);const t=Tt,r=Gr;Tt=this,Gr=!0;try{return this.fn()}finally{r0(this),Tt=t,Gr=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Bd(t);this.deps=this.depsTail=void 0,_f(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Dl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ju(this)&&this.run()}get dirty(){return Ju(this)}}let Jg=0,Ys,Zs;function e0(e,t=!1){if(e.flags|=8,t){e.next=Zs,Zs=e;return}e.next=Ys,Ys=e}function Md(){Jg++}function Rd(){if(--Jg>0)return;if(Zs){let t=Zs;for(Zs=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;Ys;){let t=Ys;for(Ys=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function t0(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function r0(e){let t,r=e.depsTail,n=r;for(;n;){const i=n.prevDep;n.version===-1?(n===r&&(r=i),Bd(n),Kw(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=r}function Ju(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(n0(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function n0(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===na)||(e.globalVersion=na,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ju(e))))return;e.flags|=2;const t=e.dep,r=Tt,n=Gr;Tt=e,Gr=!0;try{t0(e);const i=e.fn(e._value);(t.version===0||sn(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Tt=r,Gr=n,r0(e),e.flags&=-3}}function Bd(e,t=!1){const{dep:r,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let s=r.computed.deps;s;s=s.nextDep)Bd(s,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function Kw(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let Gr=!0;const i0=[];function un(){i0.push(Gr),Gr=!1}function dn(){const e=i0.pop();Gr=e===void 0?!0:e}function _f(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=Tt;Tt=void 0;try{t()}finally{Tt=r}}}let na=0;class Xw{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pd{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Tt||!Gr||Tt===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==Tt)r=this.activeLink=new Xw(Tt,this),Tt.deps?(r.prevDep=Tt.depsTail,Tt.depsTail.nextDep=r,Tt.depsTail=r):Tt.deps=Tt.depsTail=r,s0(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=Tt.depsTail,r.nextDep=void 0,Tt.depsTail.nextDep=r,Tt.depsTail=r,Tt.deps===r&&(Tt.deps=n)}return r}trigger(t){this.version++,na++,this.notify(t)}notify(t){Md();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{Rd()}}}function s0(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)s0(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const ed=new WeakMap,Pi=Symbol(""),td=Symbol(""),ia=Symbol("");function rr(e,t,r){if(Gr&&Tt){let n=ed.get(e);n||ed.set(e,n=new Map);let i=n.get(r);i||(n.set(r,i=new Pd),i.map=n,i.key=r),i.track()}}function Cn(e,t,r,n,i,s){const a=ed.get(e);if(!a){na++;return}const o=l=>{l&&l.trigger()};if(Md(),t==="clear")a.forEach(o);else{const l=Be(e),d=l&&Od(r);if(l&&r==="length"){const f=Number(n);a.forEach((p,g)=>{(g==="length"||g===ia||!ln(g)&&g>=f)&&o(p)})}else switch((r!==void 0||a.has(void 0))&&o(a.get(r)),d&&o(a.get(ia)),t){case"add":l?d&&o(a.get("length")):(o(a.get(Pi)),Zn(e)&&o(a.get(td)));break;case"delete":l||(o(a.get(Pi)),Zn(e)&&o(a.get(td)));break;case"set":Zn(e)&&o(a.get(Pi));break}}Rd()}function is(e){const t=ft(e);return t===e||(rr(t,"iterate",ia),zr(e))?t:cn(e)?Qn(e)?t.map(r=>Jn(Mr(r))):t.map(Jn):t.map(Mr)}function el(e){return rr(e=ft(e),"iterate",ia),e}function tn(e,t){return cn(e)?Jn(Qn(e)?Mr(t):t):Mr(t)}const Yw={__proto__:null,[Symbol.iterator](){return Nl(this,Symbol.iterator,e=>tn(this,e))},concat(...e){return is(this).concat(...e.map(t=>Be(t)?is(t):t))},entries(){return Nl(this,"entries",e=>(e[1]=tn(this,e[1]),e))},every(e,t){return vn(this,"every",e,t,void 0,arguments)},filter(e,t){return vn(this,"filter",e,t,r=>r.map(n=>tn(this,n)),arguments)},find(e,t){return vn(this,"find",e,t,r=>tn(this,r),arguments)},findIndex(e,t){return vn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return vn(this,"findLast",e,t,r=>tn(this,r),arguments)},findLastIndex(e,t){return vn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return vn(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ul(this,"includes",e)},indexOf(...e){return Ul(this,"indexOf",e)},join(e){return is(this).join(e)},lastIndexOf(...e){return Ul(this,"lastIndexOf",e)},map(e,t){return vn(this,"map",e,t,void 0,arguments)},pop(){return Is(this,"pop")},push(...e){return Is(this,"push",e)},reduce(e,...t){return $f(this,"reduce",e,t)},reduceRight(e,...t){return $f(this,"reduceRight",e,t)},shift(){return Is(this,"shift")},some(e,t){return vn(this,"some",e,t,void 0,arguments)},splice(...e){return Is(this,"splice",e)},toReversed(){return is(this).toReversed()},toSorted(e){return is(this).toSorted(e)},toSpliced(...e){return is(this).toSpliced(...e)},unshift(...e){return Is(this,"unshift",e)},values(){return Nl(this,"values",e=>tn(this,e))}};function Nl(e,t,r){const n=el(e),i=n[t],s=i.call(n);if(n!==e&&!zr(e)){if(s[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(s));return a.next=()=>xf(s.next(),r),i!==a0[t]&&Object.defineProperties(a,{return:{get(){const o=s.return;return typeof o=="function"?o.bind(s):o}},throw:{get(){const o=s.throw;return typeof o=="function"?o.bind(s):o}}}),a}s._next=s.next,s.next=()=>xf(s._next(),r)}return s}function xf(e,t){return e.done||(e.value=t(e.value)),e}const a0=Array.prototype;function vn(e,t,r,n,i,s){const a=el(e),o=a!==e&&!zr(e),l=a[t];if(l!==a0[t]){const p=l.apply(e,s);return o?Mr(p):p}let d=r;a!==e&&(o?d=function(p,g){return r.call(this,tn(e,p),g,e)}:r.length>2&&(d=function(p,g){return r.call(this,p,g,e)}));const f=l.call(a,d,n);return o&&i?i(f):f}function $f(e,t,r,n){const i=el(e),s=i!==e&&!zr(e);let a=r,o=!1;i!==e&&(s?(o=n.length===0,a=function(d,f,p){return o&&(o=!1,d=tn(e,d)),r.call(this,d,tn(e,f),p,e)}):r.length>3&&(a=function(d,f,p){return r.call(this,d,f,p,e)}));const l=i[t](a,...n);return o?tn(e,l):l}function Ul(e,t,r){const n=ft(e);rr(n,"iterate",ia);const i=n[t](...r);return(i===-1||i===!1)&&Ud(r[0])?(r[0]=ft(r[0]),n[t](...r)):i}function Is(e,t,r=[]){un(),Md();const n=ft(e)[t].apply(e,r);return Rd(),dn(),n}const Zw=Id("__proto__,__v_isRef,__isVue"),o0=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ln));function Qw(e){ln(e)||(e=String(e));const t=ft(this);return rr(t,"has",e),t.hasOwnProperty(e)}class l0{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,n){if(r==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return s;if(r==="__v_raw")return n===(i?s?l_:f0:s?c0:d0).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const a=Be(t);if(!i){let l;if(a&&(l=Yw[r]))return l;if(r==="hasOwnProperty")return Qw}const o=Reflect.get(t,r,ir(t)?t:n);if((ln(r)?o0.has(r):Zw(r))||(i||rr(t,"get",r),s))return o;if(ir(o)){const l=a&&Od(r)?o:o.value;return i&&ht(l)?nd(l):l}return ht(o)?i?nd(o):ds(o):o}}class u0 extends l0{constructor(t=!1){super(!1,t)}set(t,r,n,i){let s=t[r];const a=Be(t)&&Od(r);if(!this._isShallow){const d=cn(s);if(!zr(n)&&!cn(n)&&(s=ft(s),n=ft(n)),!a&&ir(s)&&!ir(n))return d||(s.value=n),!0}const o=a?Number(r)<t.length:pt(t,r),l=Reflect.set(t,r,n,ir(t)?t:i);return t===ft(i)&&l&&(o?sn(n,s)&&Cn(t,"set",r,n):Cn(t,"add",r,n)),l}deleteProperty(t,r){const n=pt(t,r);t[r];const i=Reflect.deleteProperty(t,r);return i&&n&&Cn(t,"delete",r,void 0),i}has(t,r){const n=Reflect.has(t,r);return(!ln(r)||!o0.has(r))&&rr(t,"has",r),n}ownKeys(t){return rr(t,"iterate",Be(t)?"length":Pi),Reflect.ownKeys(t)}}class Jw extends l0{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const e_=new u0,t_=new Jw,r_=new u0(!0);const rd=e=>e,Ja=e=>Reflect.getPrototypeOf(e);function n_(e,t,r){return function(...n){const i=this.__v_raw,s=ft(i),a=Zn(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,d=i[e](...n),f=r?rd:t?Jn:Mr;return!t&&rr(s,"iterate",l?td:Pi),Ht(Object.create(d),{next(){const{value:p,done:g}=d.next();return g?{value:p,done:g}:{value:o?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function eo(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function i_(e,t){const r={get(i){const s=this.__v_raw,a=ft(s),o=ft(i);e||(sn(i,o)&&rr(a,"get",i),rr(a,"get",o));const{has:l}=Ja(a),d=t?rd:e?Jn:Mr;if(l.call(a,i))return d(s.get(i));if(l.call(a,o))return d(s.get(o));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!e&&rr(ft(i),"iterate",Pi),i.size},has(i){const s=this.__v_raw,a=ft(s),o=ft(i);return e||(sn(i,o)&&rr(a,"has",i),rr(a,"has",o)),i===o?s.has(i):s.has(i)||s.has(o)},forEach(i,s){const a=this,o=a.__v_raw,l=ft(o),d=t?rd:e?Jn:Mr;return!e&&rr(l,"iterate",Pi),o.forEach((f,p)=>i.call(s,d(f),d(p),a))}};return Ht(r,e?{add:eo("add"),set:eo("set"),delete:eo("delete"),clear:eo("clear")}:{add(i){const s=ft(this),a=Ja(s),o=ft(i),l=!t&&!zr(i)&&!cn(i)?o:i;return a.has.call(s,l)||sn(i,l)&&a.has.call(s,i)||sn(o,l)&&a.has.call(s,o)||(s.add(l),Cn(s,"add",l,l)),this},set(i,s){!t&&!zr(s)&&!cn(s)&&(s=ft(s));const a=ft(this),{has:o,get:l}=Ja(a);let d=o.call(a,i);d||(i=ft(i),d=o.call(a,i));const f=l.call(a,i);return a.set(i,s),d?sn(s,f)&&Cn(a,"set",i,s):Cn(a,"add",i,s),this},delete(i){const s=ft(this),{has:a,get:o}=Ja(s);let l=a.call(s,i);l||(i=ft(i),l=a.call(s,i)),o&&o.call(s,i);const d=s.delete(i);return l&&Cn(s,"delete",i,void 0),d},clear(){const i=ft(this),s=i.size!==0,a=i.clear();return s&&Cn(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{r[i]=n_(i,e,t)}),r}function Dd(e,t){const r=i_(e,t);return(n,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_isShallow"?t:i==="__v_raw"?n:Reflect.get(pt(r,i)&&i in n?r:n,i,s)}const s_={get:Dd(!1,!1)},a_={get:Dd(!1,!0)},o_={get:Dd(!0,!1)};const d0=new WeakMap,c0=new WeakMap,f0=new WeakMap,l_=new WeakMap;function u_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ds(e){return cn(e)?e:Nd(e,!1,e_,s_,d0)}function d_(e){return Nd(e,!1,r_,a_,c0)}function nd(e){return Nd(e,!0,t_,o_,f0)}function Nd(e,t,r,n,i){if(!ht(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=i.get(e);if(s)return s;const a=u_(Rw(e));if(a===0)return e;const o=new Proxy(e,a===2?n:r);return i.set(e,o),o}function Qn(e){return cn(e)?Qn(e.__v_raw):!!(e&&e.__v_isReactive)}function cn(e){return!!(e&&e.__v_isReadonly)}function zr(e){return!!(e&&e.__v_isShallow)}function Ud(e){return e?!!e.__v_raw:!1}function ft(e){const t=e&&e.__v_raw;return t?ft(t):e}function c_(e){return!pt(e,"__v_skip")&&Object.isExtensible(e)&&Kg(e,"__v_skip",!0),e}const Mr=e=>ht(e)?ds(e):e,Jn=e=>ht(e)?nd(e):e;function ir(e){return e?e.__v_isRef===!0:!1}function We(e){return f_(e,!1)}function f_(e,t){return ir(e)?e:new p_(e,t)}class p_{constructor(t,r){this.dep=new Pd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:ft(t),this._value=r?t:Mr(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,n=this.__v_isShallow||zr(t)||cn(t);t=n?t:ft(t),sn(t,r)&&(this._rawValue=t,this._value=n?t:Mr(t),this.dep.trigger())}}function at(e){return ir(e)?e.value:e}const h_={get:(e,t,r)=>t==="__v_raw"?e:at(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const i=e[t];return ir(i)&&!ir(r)?(i.value=r,!0):Reflect.set(e,t,r,n)}};function p0(e){return Qn(e)?e:new Proxy(e,h_)}class m_{constructor(t,r,n){this.fn=t,this.setter=r,this._value=void 0,this.dep=new Pd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=na-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Tt!==this)return e0(this,!0),!0}get value(){const t=this.dep.track();return n0(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function g_(e,t,r=!1){let n,i;return qe(e)?n=e:(n=e.get,i=e.set),new m_(n,i,r)}const to={},Io=new WeakMap;let Ii;function y_(e,t=!1,r=Ii){if(r){let n=Io.get(r);n||Io.set(r,n=[]),n.push(e)}}function b_(e,t,r=St){const{immediate:n,deep:i,once:s,scheduler:a,augmentJob:o,call:l}=r,d=C=>i?C:zr(C)||i===!1||i===0?En(C,1):En(C);let f,p,g,b,y=!1,$=!1;if(ir(e)?(p=()=>e.value,y=zr(e)):Qn(e)?(p=()=>d(e),y=!0):Be(e)?($=!0,y=e.some(C=>Qn(C)||zr(C)),p=()=>e.map(C=>{if(ir(C))return C.value;if(Qn(C))return d(C);if(qe(C))return l?l(C,2):C()})):qe(e)?t?p=l?()=>l(e,2):e:p=()=>{if(g){un();try{g()}finally{dn()}}const C=Ii;Ii=f;try{return l?l(e,3,[b]):e(b)}finally{Ii=C}}:p=on,t&&i){const C=p,O=i===!0?1/0:i;p=()=>En(C(),O)}const E=Gw(),S=()=>{f.stop(),E&&E.active&&Ad(E.effects,f)};if(s&&t){const C=t;t=(...O)=>{try{return C(...O)}finally{S()}}}let x=$?new Array(e.length).fill(to):to;const A=C=>{if(!(!(f.flags&1)||!f.dirty&&!C))if(t){const O=f.run();if(C||i||y||($?O.some((D,N)=>sn(D,x[N])):sn(O,x))){const D=Ii;un();try{g&&g(),Ii=f;const N=[O,x===to?void 0:$&&x[0]===to?[]:x,b];x=O,l?l(t,3,N):t(...N)}finally{Ii=D,dn()}}}else f.run()};return o&&o(A),f=new Qg(p),f.scheduler=a?()=>a(A,!1):A,b=C=>y_(C,!1,f),g=f.onStop=()=>{const C=Io.get(f);if(C){if(l)l(C,4);else for(const O of C)O();Io.delete(f)}},t?n?A(!0):x=f.run():a?a(A.bind(null,!0),!0):f.run(),S.pause=f.pause.bind(f),S.resume=f.resume.bind(f),S.stop=S,S}function En(e,t=1/0,r){if(t<=0||!ht(e)||e.__v_skip||(r=r||new Map,(r.get(e)||0)>=t))return e;if(r.set(e,t),t--,ir(e))En(e.value,t,r);else if(Be(e))for(let n=0;n<e.length;n++)En(e[n],t,r);else if(An(e)||Zn(e))e.forEach(n=>{En(n,t,r)});else if(Hg(e)){for(const n in e)En(e[n],t,r);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&En(e[n],t,r)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ga(e,t,r,n){try{return n?e(...n):e()}catch(i){tl(i,t,r)}}function Rr(e,t,r,n){if(qe(e)){const i=ga(e,t,r,n);return i&&Wg(i)&&i.catch(s=>{tl(s,t,r)}),i}if(Be(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Rr(e[s],t,r,n));return i}}function tl(e,t,r,n=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||St;if(t){let o=t.parent;const l=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${r}`;for(;o;){const f=o.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,l,d)===!1)return}o=o.parent}if(s){un(),ga(s,null,10,[e,l,d]),dn();return}}v_(e,r,i,n,a)}function v_(e,t,r,n=!0,i=!1){if(i)throw e;console.error(e)}const ur=[];let jr=-1;const rn=[];let Kn=null,as=0;const h0=Promise.resolve();let Ao=null;function Bi(e){const t=Ao||h0;return e?t.then(this?e.bind(this):e):t}function w_(e){let t=jr+1,r=ur.length;for(;t<r;){const n=t+r>>>1,i=ur[n],s=sa(i);s<e||s===e&&i.flags&2?t=n+1:r=n}return t}function Ld(e){if(!(e.flags&1)){const t=sa(e),r=ur[ur.length-1];!r||!(e.flags&2)&&t>=sa(r)?ur.push(e):ur.splice(w_(t),0,e),e.flags|=1,m0()}}function m0(){Ao||(Ao=h0.then(b0))}function __(e){if(!Be(e))Kn&&e.id===-1?Kn.splice(as+1,0,e):e.flags&1||(rn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)rn.push(e[t]);m0()}function g0(e,t,r,n=jr+1){for(;n<ur.length;n++){const i=ur[n];if(i&&i.flags&2){if(e&&i.id!==e.uid||t!==void 0&&!(i.id>=t))continue;ur.splice(n,1),n=e?n-1:jr,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function y0(e,t,r=0){if(rn.length){let n=rn,i=0;if(t){n=[];for(let a=0;a<rn.length;a++){const o=rn[a];(o.i!==void 0?!o.i||o.i.uid<r:t.has(o))?rn[i++]=o:n.push(o)}}const s=[...new Set(n)].sort((a,o)=>sa(a)-sa(o));if(rn.length=i,Kn){for(let a=0;a<s.length;a++)Kn.push(s[a]);return}for(Kn=s,as=0;as<Kn.length;as++){const a=Kn[as];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Kn=null,as=0}}let Ll=!1;function x_(e,t){if(Ll){e();return}const r=t===void 0?void 0:new Set(rn);e(),Ll=!0;try{g0(void 0,t),y0(void 0,r,t)}finally{Ll=!1}}const sa=e=>e.id==null?e.flags&2?-1:1/0:e.id;function b0(e){try{for(jr=0;jr<ur.length;jr++){const t=ur[jr];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ga(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;jr<ur.length;jr++){const t=ur[jr];t&&(t.flags&=-2)}jr=-1,ur.length=0,y0(),Ao=null,(ur.length||rn.length)&&b0()}}let Or=null,v0=null;function Oo(e){const t=Or;return Or=e,v0=e&&e.type.__scopeId||null,t}function w0(e,t=Or,r){if(!t||e._n)return e;const n=(...i)=>{n._d&&Bo(-1);const s=Oo(t),a=Di.length;let o;try{o=e(...i)}finally{for(let l=Di.length;l>a;l--)G0();Oo(s),n._d&&Bo(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function mr(e,t){if(Or===null)return e;const r=ol(Or),n=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,o,l=St]=t[i];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&En(a),n.push({dir:s,instance:r,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function wi(e,t,r,n){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(un(),Rr(l,r,8,[e.el,o,e,t]),dn())}}function $_(e,t){if(dr){let r=dr.provides;const n=dr.parent&&dr.parent.provides;n===r&&(r=dr.provides=Object.create(n)),r[e]=t}}function So(e,t,r=!1){const n=Z0();if(n||us){let i=us?us._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return r&&qe(t)?t.call(n&&n.proxy):t}}const S_=Symbol.for("v-scx"),k_=()=>So(S_);function Fl(e,t,r){return _0(e,t,r)}function _0(e,t,r=St){const{immediate:n,deep:i,flush:s,once:a}=r,o=Ht({},r),l=t&&n||!t&&s!=="post";let d;if(da){if(s==="sync"){const b=k_();d=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=on,b.resume=on,b.pause=on,b}}const f=dr;o.call=(b,y,$)=>Rr(b,f,y,$);let p=!1;s==="post"?o.scheduler=b=>{b.i=f,hr(b,f&&f.suspense)}:s!=="sync"&&(p=!0,o.scheduler=(b,y)=>{y?b():Ld(b)}),o.augmentJob=b=>{t&&(b.flags|=4),p&&(b.flags|=2,f&&(b.id=f.uid,b.i=f))};const g=b_(e,t,o);return da&&(d?d.push(g):l&&g()),g}function T_(e,t,r){const n=this.proxy,i=Rt(e)?e.includes(".")?x0(n,e):()=>n[e]:e.bind(n,n);let s;qe(t)?s=t:(s=t.handler,r=t);const a=va(this),o=_0(i,s.bind(n),r);return a(),o}function x0(e,t){const r=t.split(".");return()=>{let n=e;for(let i=0;i<r.length&&n;i++)n=n[r[i]];return n}}const C_=Symbol("_vte"),rl=e=>e.__isTeleport,Ar=Symbol("_leaveCb"),As=Symbol("_enterCb");function E_(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ba(()=>{e.isMounted=!0}),I0(()=>{e.isUnmounting=!0}),e}const Er=[Function,Array],$0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Er,onEnter:Er,onAfterEnter:Er,onEnterCancelled:Er,onBeforeLeave:Er,onLeave:Er,onAfterLeave:Er,onLeaveCancelled:Er,onBeforeAppear:Er,onAppear:Er,onAfterAppear:Er,onAppearCancelled:Er},I_={name:"BaseTransition",props:$0,setup(e,{slots:t}){const r=Z0(),n=E_();return()=>{const i=t.default&&T0(t.default(),!0),s=i&&i.length?S0(i):r.subTree?Ft():void 0;if(!s)return;const a=ft(e),{mode:o}=a;if(n.isLeaving)return jl(s);const l=zo(s);if(!l)return jl(s);let d=id(l,a,n,r,p=>d=p);l.type!==nr&&cs(l,d);let f=r.subTree&&zo(r.subTree);if(f&&f.type!==nr&&!Ai(f,l)&&aa(r.subTree)){let p=id(f,a,n,r);if(cs(f,p),o==="out-in"&&l.type!==nr)return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,r.job.flags&8||r.update(),delete p.afterLeave,f=void 0},jl(s);o==="in-out"&&l.type!==nr?p.delayLeave=(g,b,y)=>{const $=k0(n,f);$[String(f.key)]=f,g[Ar]=()=>{b(),g[Ar]=void 0,delete d.delayedLeave,f=void 0},d.delayedLeave=()=>{y(),delete d.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return s}}};function S0(e){let t=e[0];if(e.length>1){for(const r of e)if(r.type!==nr){t=r;break}}return t}const A_=I_;function k0(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function id(e,t,r,n,i){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:d,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:b,onAfterLeave:y,onLeaveCancelled:$,onBeforeAppear:E,onAppear:S,onAfterAppear:x,onAppearCancelled:A}=t,C=String(e.key),O=k0(r,e),D=(W,Y)=>{W&&Rr(W,n,9,Y)},N=(W,Y)=>{const ae=Y[1];D(W,Y),Be(W)?W.every(X=>X.length<=1)&&ae():W.length<=1&&ae()},T={mode:a,persisted:o,beforeEnter(W){let Y=l;if(!r.isMounted)if(s)Y=E||l;else return;W[Ar]&&W[Ar](!0);const ae=O[C];if(ae&&Ai(e,ae)){let X=ae.el[Ar];if(!X){const le=aa(ae);X=le&&le.el[Ar]}X&&X()}D(Y,[W])},enter(W){if(O[C]===e)return;let Y=d,ae=f,X=p;if(!r.isMounted)if(s)Y=S||d,ae=x||f,X=A||p;else return;let le=!1;W[As]=te=>{le||(le=!0,te?D(X,[W]):D(ae,[W]),T.delayedLeave&&T.delayedLeave(),W[As]=void 0)};const q=W[As].bind(null,!1);Y?N(Y,[W,q]):q()},leave(W,Y){const ae=String(e.key);if(W[As]&&W[As](!0),r.isUnmounting)return Y();D(g,[W]);let X=!1;W[Ar]=q=>{X||(X=!0,Y(),q?D($,[W]):D(y,[W]),W[Ar]=void 0,O[ae]===e&&delete O[ae])};const le=W[Ar].bind(null,!1);O[ae]=e,b?N(b,[W,le]):le()},clone(W){const Y=id(W,t,r,n,i);return i&&i(Y),Y}};return T}function jl(e){if(nl(e))return e=ei(e),e.children=null,e}function zo(e){if(!nl(e))return rl(e.type)&&e.children?S0(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:r}=e;if(r){if(t&16)return r[0];if(t&32&&qe(r.default))return r.default()}}function cs(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const r=e.component.subTree;cs(rl(r.type)&&zo(r)||r,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===Xt&&Be(e.children)){const r=R0(e.children,!1);r&&cs(r,t)}}function T0(e,t=!1,r){let n=[],i=0;for(let s=0;s<e.length;s++){let a=e[s];const o=r==null?a.key:String(r)+String(a.key!=null?a.key:s);a.type===Xt?(a.patchFlag&128&&i++,n=n.concat(T0(a.children,t,o))):(t||a.type!==nr)&&n.push(o!=null?ei(a,{key:o}):a)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function aa(e){if(e.component)return aa(e.component.subTree);if(e.type===Xt){const t=Be(e.children)&&R0(e.children,!1);return t?aa(t):void 0}if(e.type!==nr)return e}function ya(e,t){return qe(e)?Ht({name:e.name},t,{setup:e}):e}function C0(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Sf(e,t){let r;return!!((r=Object.getOwnPropertyDescriptor(e,t))&&!r.configurable)}const Mo=new WeakMap;function Qs(e,t,r,n,i=!1){if(Be(e)){e.forEach(($,E)=>Qs($,t&&(Be(t)?t[E]:t),r,n,i));return}if(Js(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Qs(e,t,r,n.component.subTree);return}const s=n.shapeFlag&4?ol(n.component):n.el,a=i?null:s,{i:o,r:l}=e,d=t&&t.r,f=o.refs===St?o.refs={}:o.refs,p=o.setupState,g=ft(p),b=p===St?Vg:$=>Sf(f,$)?!1:pt(g,$),y=($,E)=>!(E&&Sf(f,E));if(d!=null&&d!==l){if(kf(t),Rt(d))f[d]=null,b(d)&&(p[d]=null);else if(ir(d)){const $=t;y(d,$.k)&&(d.value=null),$.k&&(f[$.k]=null)}}if(qe(l))ga(l,o,12,[a,f]);else{const $=Rt(l),E=ir(l);if($||E){const S=()=>{if(e.f){const x=$?b(l)?p[l]:f[l]:y()||!e.k?l.value:f[e.k];if(i)Be(x)&&Ad(x,s);else if(Be(x))x.includes(s)||x.push(s);else if($)f[l]=[s],b(l)&&(p[l]=f[l]);else{const A=[s];y(l,e.k)&&(l.value=A),e.k&&(f[e.k]=A)}}else $?(f[l]=a,b(l)&&(p[l]=a)):E&&(y(l,e.k)&&(l.value=a),e.k&&(f[e.k]=a))};if(a){const x=()=>{S(),Mo.delete(e)};x.id=-1,Mo.set(e,x),hr(x,r)}else kf(e),S()}}}function kf(e){const t=Mo.get(e);t&&(t.flags|=8,Mo.delete(e))}Jo().requestIdleCallback;Jo().cancelIdleCallback;const Js=e=>!!e.type.__asyncLoader,nl=e=>e.type.__isKeepAlive;function O_(e,t){E0(e,"a",t)}function z_(e,t){E0(e,"da",t)}function E0(e,t,r=dr){const n=e.__wdc||(e.__wdc=()=>{let i=r;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(il(t,n,r),r){let i=r.parent;for(;i&&i.parent;)nl(i.parent.vnode)&&M_(n,t,r,i),i=i.parent}}function M_(e,t,r,n){const i=il(t,e,n,!0);Fd(()=>{Ad(n[t],i)},r)}function il(e,t,r=dr,n=!1){if(r){const i=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...a)=>{un();const o=va(r),l=Rr(t,r,e,a);return o(),dn(),l});return n?i.unshift(s):i.push(s),s}}const zn=e=>(t,r=dr)=>{(!da||e==="sp")&&il(e,(...n)=>t(...n),r)},R_=zn("bm"),ba=zn("m"),B_=zn("bu"),P_=zn("u"),I0=zn("bum"),Fd=zn("um"),D_=zn("sp"),N_=zn("rtg"),U_=zn("rtc");function L_(e,t=dr){il("ec",e,t)}const F_=Symbol.for("v-ndc");function fs(e,t,r,n){let i;const s=r,a=Be(e);if(a||Rt(e)){const o=a&&Qn(e);let l=!1,d=!1;o&&(l=!zr(e),d=cn(e),e=el(e)),i=new Array(e.length);for(let f=0,p=e.length;f<p;f++)i[f]=t(l?d?Jn(Mr(e[f])):Mr(e[f]):e[f],f,void 0,s)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)i=[];else{i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s)}else if(ht(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,d=o.length;l<d;l++){const f=o[l];i[l]=t(e[f],f,l,s)}}else i=[];return i}const sd=e=>e?Q0(e)?ol(e):sd(e.parent):null,ea=Ht(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>sd(e.parent),$root:e=>sd(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>O0(e),$forceUpdate:e=>e.f||(e.f=()=>{Ld(e.update)}),$nextTick:e=>e.n||(e.n=Bi.bind(e.proxy)),$watch:e=>T_.bind(e)}),Vl=(e,t)=>e!==St&&!e.__isScriptSetup&&pt(e,t),j_={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:n,data:i,props:s,accessCache:a,type:o,appContext:l}=e;if(t[0]!=="$"){const g=a[t];if(g!==void 0)switch(g){case 1:return n[t];case 2:return i[t];case 4:return r[t];case 3:return s[t]}else{if(Vl(n,t))return a[t]=1,n[t];if(i!==St&&pt(i,t))return a[t]=2,i[t];if(pt(s,t))return a[t]=3,s[t];if(r!==St&&pt(r,t))return a[t]=4,r[t];ad&&(a[t]=0)}}const d=ea[t];let f,p;if(d)return t==="$attrs"&&rr(e.attrs,"get",""),d(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(r!==St&&pt(r,t))return a[t]=4,r[t];if(p=l.config.globalProperties,pt(p,t))return p[t]},set({_:e},t,r){const{data:n,setupState:i,ctx:s}=e;return Vl(i,t)?(i[t]=r,!0):n!==St&&pt(n,t)?(n[t]=r,!0):pt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:i,props:s,type:a}},o){let l;return!!(r[o]||e!==St&&o[0]!=="$"&&pt(e,o)||Vl(t,o)||pt(s,o)||pt(n,o)||pt(ea,o)||pt(i.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:pt(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function Tf(e){return Be(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let ad=!0;function V_(e){const t=O0(e),r=e.proxy,n=e.ctx;ad=!1,t.beforeCreate&&Cf(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:d,created:f,beforeMount:p,mounted:g,beforeUpdate:b,updated:y,activated:$,deactivated:E,beforeDestroy:S,beforeUnmount:x,destroyed:A,unmounted:C,render:O,renderTracked:D,renderTriggered:N,errorCaptured:T,serverPrefetch:W,expose:Y,inheritAttrs:ae,components:X,directives:le,filters:q}=t;if(d&&W_(d,n,null),a)for(const ue in a){const Q=a[ue];qe(Q)&&(n[ue]=Q.bind(r))}if(i){const ue=i.call(r,r);ht(ue)&&(e.data=ds(ue))}if(ad=!0,s)for(const ue in s){const Q=s[ue],we=qe(Q)?Q.bind(r,r):qe(Q.get)?Q.get.bind(r,r):on,Te=!qe(Q)&&qe(Q.set)?Q.set.bind(r):on,re=ta({get:we,set:Te});Object.defineProperty(n,ue,{enumerable:!0,configurable:!0,get:()=>re.value,set:xe=>re.value=xe})}if(o)for(const ue in o)A0(o[ue],n,r,ue);if(l){const ue=qe(l)?l.call(r):l;Reflect.ownKeys(ue).forEach(Q=>{$_(Q,ue[Q])})}f&&Cf(f,e,"c");function ce(ue,Q){Be(Q)?Q.forEach(we=>ue(we.bind(r))):Q&&ue(Q.bind(r))}if(ce(R_,p),ce(ba,g),ce(B_,b),ce(P_,y),ce(O_,$),ce(z_,E),ce(L_,T),ce(U_,D),ce(N_,N),ce(I0,x),ce(Fd,C),ce(D_,W),Be(Y))if(Y.length){const ue=e.exposed||(e.exposed={});Y.forEach(Q=>{Object.defineProperty(ue,Q,{get:()=>r[Q],set:we=>r[Q]=we,enumerable:!0})})}else e.exposed||(e.exposed={});O&&e.render===on&&(e.render=O),ae!=null&&(e.inheritAttrs=ae),X&&(e.components=X),le&&(e.directives=le),W&&C0(e)}function W_(e,t,r=on){Be(e)&&(e=od(e));for(const n in e){const i=e[n];let s;ht(i)?"default"in i?s=So(i.from||n,i.default,!0):s=So(i.from||n):s=So(i),ir(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[n]=s}}function Cf(e,t,r){Rr(Be(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function A0(e,t,r,n){let i=n.includes(".")?x0(r,n):()=>r[n];if(Rt(e)){const s=t[e];qe(s)&&Fl(i,s)}else if(qe(e))Fl(i,e.bind(r));else if(ht(e))if(Be(e))e.forEach(s=>A0(s,t,r,n));else{const s=qe(e.handler)?e.handler.bind(r):t[e.handler];qe(s)&&Fl(i,s,e)}}function O0(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!r&&!n?l=t:(l={},i.length&&i.forEach(d=>Ro(l,d,a,!0)),Ro(l,t,a)),ht(t)&&s.set(t,l),l}function Ro(e,t,r,n=!1){const{mixins:i,extends:s}=t;s&&Ro(e,s,r,!0),i&&i.forEach(a=>Ro(e,a,r,!0));for(const a in t)if(!(n&&a==="expose")){const o=q_[a]||r&&r[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const q_={data:Ef,props:If,emits:If,methods:Vs,computed:Vs,beforeCreate:lr,created:lr,beforeMount:lr,mounted:lr,beforeUpdate:lr,updated:lr,beforeDestroy:lr,beforeUnmount:lr,destroyed:lr,unmounted:lr,activated:lr,deactivated:lr,errorCaptured:lr,serverPrefetch:lr,components:Vs,directives:Vs,watch:G_,provide:Ef,inject:H_};function Ef(e,t){return t?e?function(){return Ht(qe(e)?e.call(this,this):e,qe(t)?t.call(this,this):t)}:t:e}function H_(e,t){return Vs(od(e),od(t))}function od(e){if(Be(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function lr(e,t){return e?[...new Set([].concat(e,t))]:t}function Vs(e,t){return e?Ht(Object.create(null),e,t):t}function If(e,t){return e?Be(e)&&Be(t)?[...new Set([...e,...t])]:Ht(Object.create(null),Tf(e),Tf(t??{})):t}function G_(e,t){if(!e)return t;if(!t)return e;const r=Ht(Object.create(null),e);for(const n in t)r[n]=lr(e[n],t[n]);return r}function z0(){return{app:null,config:{isNativeTag:Vg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let K_=0;function X_(e,t){return function(n,i=null){qe(n)||(n=Ht({},n)),i!=null&&!ht(i)&&(i=null);const s=z0(),a=new WeakSet,o=[];let l=!1;const d=s.app={_uid:K_++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:T2,get config(){return s.config},set config(f){},use(f,...p){return a.has(f)||(f&&qe(f.install)?(a.add(f),f.install(d,...p)):qe(f)&&(a.add(f),f(d,...p))),d},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),d},component(f,p){return p?(s.components[f]=p,d):s.components[f]},directive(f,p){return p?(s.directives[f]=p,d):s.directives[f]},mount(f,p,g){if(!l){const b=d._ceVNode||Fe(n,i);return b.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),e(b,f,g),l=!0,d._container=f,f.__vue_app__=d,ol(b.component)}},onUnmount(f){o.push(f)},unmount(){l&&(Rr(o,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,p){return s.provides[f]=p,d},runWithContext(f){const p=us;us=d;try{return f()}finally{us=p}}};return d}}let us=null;const Y_=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Hr(t)}Modifiers`]||e[`${ri(t)}Modifiers`];function Z_(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||St;let i=r;const s=t.startsWith("update:"),a=s&&Y_(n,t.slice(7));a&&(a.trim&&(i=r.map(f=>Rt(f)?f.trim():f)),a.number&&(i=i.map(Qo)));let o,l=n[o=Bl(t)]||n[o=Bl(Hr(t))];!l&&s&&(l=n[o=Bl(ri(t))]),l&&Rr(l,e,6,i);const d=n[o+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Rr(d,e,6,i)}}const Q_=new WeakMap;function M0(e,t,r=!1){const n=r?Q_:t.emitsCache,i=n.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!qe(e)){const l=d=>{const f=M0(d,t,!0);f&&(o=!0,Ht(a,f))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(ht(e)&&n.set(e,null),null):(Be(s)?s.forEach(l=>a[l]=null):Ht(a,s),ht(e)&&n.set(e,a),a)}function sl(e,t){return!e||!Xo(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),pt(e,t[0].toLowerCase()+t.slice(1))||pt(e,ri(t))||pt(e,t))}function Af(e){const{type:t,vnode:r,proxy:n,withProxy:i,propsOptions:[s],slots:a,attrs:o,emit:l,render:d,renderCache:f,props:p,data:g,setupState:b,ctx:y,inheritAttrs:$}=e,E=Oo(e);let S,x;try{if(r.shapeFlag&4){const C=i||n,O=C;S=nn(d.call(O,C,f,p,b,g,y)),x=o}else{const C=t;S=nn(C.length>1?C(p,{attrs:o,slots:a,emit:l}):C(p,null)),x=t.props?o:J_(o)}}catch(C){Di.length=0,tl(C,e,1),S=Fe(nr)}let A=S;if(x&&$!==!1){const C=Object.keys(x),{shapeFlag:O}=A;C.length&&O&7&&(s&&C.some(Yo)&&(x=e2(x,s)),A=ei(A,x,!1,!0))}if(r.dirs&&(A=ei(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(r.dirs):r.dirs),r.transition){const C=rl(A.type)&&zo(A)||A;cs(C,r.transition)}return S=A,Oo(E),S}function R0(e,t=!0){let r;for(let n=0;n<e.length;n++){const i=e[n];if(la(i)){if(i.type!==nr||i.children==="v-if"){if(r)return;r=i}}else return}return r}const J_=e=>{let t;for(const r in e)(r==="class"||r==="style"||Xo(r))&&((t||(t={}))[r]=e[r]);return t},e2=(e,t)=>{const r={};for(const n in e)(!Yo(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function t2(e,t,r){const{props:n,children:i,component:s}=e,{props:a,children:o,patchFlag:l}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?Of(n,a,d):!!a;if(l&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(B0(a,n,g)&&!sl(d,g))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Of(n,a,d):!0:!!a;return!1}function Of(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(!pt(e,s)||B0(t,e,s)&&!sl(r,s))return!0}return!1}function B0(e,t,r){const n=e[r],i=t[r];return r==="style"&&ht(n)&&ht(i)?!On(n,i):n!==i}function r2({vnode:e,parent:t,suspense:r},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=n,e=i),i===e)(e=t.vnode).el=n,t=t.parent;else break}r&&r.activeBranch===e&&(r.vnode.el=n)}const P0={},D0=()=>Object.create(P0),N0=e=>Object.getPrototypeOf(e)===P0;function n2(e,t,r,n=!1){const i={},s=D0();e.propsDefaults=Object.create(null),U0(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);r?e.props=n?i:d_(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function i2(e,t,r,n){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=ft(i),[l]=e.propsOptions;let d=!1;if((n||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(sl(e.emitsOptions,g))continue;const b=t[g];if(l)if(pt(s,g))b!==s[g]&&(s[g]=b,d=!0);else{const y=Hr(g);i[y]=ld(l,o,y,b,e,!1)}else b!==s[g]&&(s[g]=b,d=!0)}}}else{U0(e,t,i,s)&&(d=!0);let f;for(const p in o)(!t||!pt(t,p)&&((f=ri(p))===p||!pt(t,f)))&&(l?r&&(r[p]!==void 0||r[f]!==void 0)&&(i[p]=ld(l,o,p,void 0,e,!0)):delete i[p]);if(s!==o)for(const p in s)(!t||!pt(t,p))&&(delete s[p],d=!0)}d&&Cn(e.attrs,"set","")}function U0(e,t,r,n){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(Xs(l))continue;const d=t[l];let f;i&&pt(i,f=Hr(l))?!s||!s.includes(f)?r[f]=d:(o||(o={}))[f]=d:sl(e.emitsOptions,l)||(!(l in n)||d!==n[l])&&(n[l]=d,a=!0)}if(s){const l=ft(r),d=o||St;for(let f=0;f<s.length;f++){const p=s[f];r[p]=ld(i,l,p,d[p],e,!pt(d,p))}}return a}function ld(e,t,r,n,i,s){const a=e[r];if(a!=null){const o=pt(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&qe(l)){const{propsDefaults:d}=i;if(r in d)n=d[r];else{const f=va(i);n=d[r]=l.call(null,t),f()}}else n=l;i.ce&&i.ce._setProp(r,n)}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===ri(r))&&(n=!0))}return n}const s2=new WeakMap;function L0(e,t,r=!1){const n=r?s2:t.propsCache,i=n.get(e);if(i)return i;const s=e.props,a={},o=[];let l=!1;if(!qe(e)){const f=p=>{l=!0;const[g,b]=L0(p,t,!0);Ht(a,g),b&&o.push(...b)};!r&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!l)return ht(e)&&n.set(e,Ri),Ri;if(Be(s))for(let f=0;f<s.length;f++){const p=Hr(s[f]);zf(p)&&(a[p]=St)}else if(s)for(const f in s){const p=Hr(f);if(zf(p)){const g=s[f],b=a[p]=Be(g)||qe(g)?{type:g}:Ht({},g),y=b.type;let $=!1,E=!0;if(Be(y))for(let S=0;S<y.length;++S){const x=y[S],A=qe(x)&&x.name;if(A==="Boolean"){$=!0;break}else A==="String"&&(E=!1)}else $=qe(y)&&y.name==="Boolean";b[0]=$,b[1]=E,($||pt(b,"default"))&&o.push(p)}}const d=[a,o];return ht(e)&&n.set(e,d),d}function zf(e){return e[0]!=="$"&&!Xs(e)}const jd=e=>e==="_"||e==="_ctx"||e==="$stable",Vd=e=>Be(e)?e.map(nn):[nn(e)],a2=(e,t,r)=>{if(t._n)return t;const n=w0((...i)=>Vd(t(...i)),r);return n._c=!1,n},F0=(e,t,r)=>{const n=e._ctx;for(const i in e){if(jd(i))continue;const s=e[i];if(qe(s))t[i]=a2(i,s,n);else if(s!=null){const a=Vd(s);t[i]=()=>a}}},j0=(e,t)=>{const r=Vd(t);e.slots.default=()=>r},V0=(e,t,r)=>{for(const n in t)(r||!jd(n))&&(e[n]=t[n])},o2=(e,t,r)=>{const n=e.slots=D0();if(e.vnode.shapeFlag&32){const i=t._;i?(V0(n,t,r),r&&Kg(n,"_",i,!0)):F0(t,n)}else t&&j0(e,t)},l2=(e,t,r)=>{const{vnode:n,slots:i}=e;let s=!0,a=St;if(n.shapeFlag&32){const o=t._;o?r&&o===1?s=!1:V0(i,t,r):(s=!t.$stable,F0(t,i)),a=t}else t&&(j0(e,t),a={default:1});if(s)for(const o in i)!jd(o)&&a[o]==null&&delete i[o]},hr=p2;function u2(e){return d2(e)}function d2(e,t){const r=Jo();r.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:d,setElementText:f,parentNode:p,nextSibling:g,setScopeId:b=on,insertStaticContent:y}=e,$=(M,L,H,Z=null,ie=null,oe=null,ge=void 0,he=null,me=!!L.dynamicChildren)=>{if(M===L)return;M&&!Ai(M,L)&&(Z=tt(M),xe(M,ie,oe,!0),M=null),L.patchFlag===-2&&(me=!1,L.dynamicChildren=null),L.dynamicChildren&&M&&M.dynamicChildren&&M.dynamicChildren.hasOnce&&(L.dynamicChildren===Ri&&(L.dynamicChildren=[]),L.dynamicChildren.hasOnce=!0);const{type:se,ref:Ee,shapeFlag:ye}=L;switch(se){case al:E(M,L,H,Z);break;case nr:S(M,L,H,Z);break;case ko:M==null&&x(L,H,Z,ge);break;case Xt:X(M,L,H,Z,ie,oe,ge,he,me);break;default:ye&1?O(M,L,H,Z,ie,oe,ge,he,me):ye&6?le(M,L,H,Z,ie,oe,ge,he,me):(ye&64||ye&128)&&se.process(M,L,H,Z,ie,oe,ge,he,me,He)}Ee!=null&&ie?Qs(Ee,M&&M.ref,oe,L||M,!L):Ee==null&&M&&M.ref!=null&&Qs(M.ref,null,oe,M,!0)},E=(M,L,H,Z)=>{if(M==null)n(L.el=o(L.children),H,Z);else{const ie=L.el=M.el;L.children!==M.children&&d(ie,L.children)}},S=(M,L,H,Z)=>{M==null?n(L.el=l(L.children||""),H,Z):L.el=M.el},x=(M,L,H,Z)=>{[M.el,M.anchor]=y(M.children,L,H,Z,M.el,M.anchor)},A=({el:M,anchor:L},H,Z)=>{let ie;for(;M&&M!==L;)ie=g(M),n(M,H,Z),M=ie;n(L,H,Z)},C=({el:M,anchor:L})=>{let H;for(;M&&M!==L;)H=g(M),i(M),M=H;i(L)},O=(M,L,H,Z,ie,oe,ge,he,me)=>{if(L.type==="svg"?ge="svg":L.type==="math"&&(ge="mathml"),M==null)D(L,H,Z,ie,oe,ge,he,me);else{const se=M.el&&M.el._isVueCE?M.el:null;try{se&&se._beginPatch(),W(M,L,ie,oe,ge,he,me)}finally{se&&se._endPatch()}}},D=(M,L,H,Z,ie,oe,ge,he)=>{let me,se;const{props:Ee,shapeFlag:ye,transition:Ie,dirs:ze}=M;if(me=M.el=a(M.type,oe,Ee&&Ee.is,Ee),ye&8?f(me,M.children):ye&16&&T(M.children,me,null,Z,ie,Wl(M,oe),ge,he),ze&&wi(M,null,Z,"created"),N(me,M,M.scopeId,ge,Z),Ee){for(const Ve in Ee)Ve!=="value"&&!Xs(Ve)&&s(me,Ve,null,Ee[Ve],oe,Z);"value"in Ee&&s(me,"value",null,Ee.value,oe),(se=Ee.onVnodeBeforeMount)&&Jr(se,Z,M)}ze&&wi(M,null,Z,"beforeMount");const Ze=c2(ie,Ie);Ze&&Ie.beforeEnter(me),n(me,L,H),((se=Ee&&Ee.onVnodeMounted)||Ze||ze)&&hr(()=>{try{se&&Jr(se,Z,M),Ze&&Ie.enter(me),ze&&wi(M,null,Z,"mounted")}finally{}},ie)},N=(M,L,H,Z,ie)=>{if(H&&b(M,H),Z)for(let oe=0;oe<Z.length;oe++)b(M,Z[oe]);if(ie){let oe=ie.subTree;if(L===oe||H0(oe.type)&&(oe.ssContent===L||oe.ssFallback===L)){const ge=ie.vnode;N(M,ge,ge.scopeId,ge.slotScopeIds,ie.parent)}}},T=(M,L,H,Z,ie,oe,ge,he,me=0)=>{for(let se=me;se<M.length;se++){const Ee=M[se]=he?kn(M[se]):nn(M[se]);$(null,Ee,L,H,Z,ie,oe,ge,he)}},W=(M,L,H,Z,ie,oe,ge)=>{const he=L.el=M.el;let{patchFlag:me,dynamicChildren:se,dirs:Ee}=L;me|=M.patchFlag&16;const ye=M.props||St,Ie=L.props||St;let ze;if(H&&_i(H,!1),(ze=Ie.onVnodeBeforeUpdate)&&Jr(ze,H,L,M),Ee&&wi(L,M,H,"beforeUpdate"),H&&_i(H,!0),se&&(!M.dynamicChildren||M.dynamicChildren.length!==se.length)&&(me=0,ge=!1,se=null),(ye.innerHTML&&Ie.innerHTML==null||ye.textContent&&Ie.textContent==null)&&f(he,""),se?Y(M.dynamicChildren,se,he,H,Z,Wl(L,ie),oe):ge||Q(M,L,he,null,H,Z,Wl(L,ie),oe,!1),me>0){if(me&16)ae(he,ye,Ie,H,ie);else if(me&2&&ye.class!==Ie.class&&s(he,"class",null,Ie.class,ie),me&4&&s(he,"style",ye.style,Ie.style,ie),me&8){const Ze=L.dynamicProps;for(let Ve=0;Ve<Ze.length;Ve++){const rt=Ze[Ve],mt=ye[rt],vt=Ie[rt];(vt!==mt||rt==="value")&&s(he,rt,mt,vt,ie,H)}}me&1&&M.children!==L.children&&f(he,L.children)}else!ge&&se==null&&ae(he,ye,Ie,H,ie);((ze=Ie.onVnodeUpdated)||Ee)&&hr(()=>{ze&&Jr(ze,H,L,M),Ee&&wi(L,M,H,"updated")},Z)},Y=(M,L,H,Z,ie,oe,ge)=>{for(let he=0;he<L.length;he++){const me=M[he],se=L[he],Ee=me.el||ud(me),ye=Ee&&(me.type===Xt||!Ai(me,se)||me.shapeFlag&198)?p(Ee):H;$(me,se,ye,null,Z,ie,oe,ge,!0)}},ae=(M,L,H,Z,ie)=>{if(L!==H){if(L!==St)for(const oe in L)!Xs(oe)&&!(oe in H)&&s(M,oe,L[oe],null,ie,Z);for(const oe in H){if(Xs(oe))continue;const ge=H[oe],he=L[oe];ge!==he&&oe!=="value"&&s(M,oe,he,ge,ie,Z)}"value"in H&&s(M,"value",L.value,H.value,ie)}},X=(M,L,H,Z,ie,oe,ge,he,me)=>{const se=L.el=M?M.el:o(""),Ee=L.anchor=M?M.anchor:o("");let{patchFlag:ye,dynamicChildren:Ie,slotScopeIds:ze}=L;ze&&(he=he?he.concat(ze):ze),M==null?(n(se,H,Z),n(Ee,H,Z),T(L.children||[],H,Ee,ie,oe,ge,he,me)):ye>0&&ye&64&&Ie&&M.dynamicChildren&&M.dynamicChildren.length===Ie.length?(Y(M.dynamicChildren,Ie,H,ie,oe,ge,he),(L.key!=null||ie&&L===ie.subTree)&&W0(M,L,!0)):Q(M,L,H,Ee,ie,oe,ge,he,me)},le=(M,L,H,Z,ie,oe,ge,he,me)=>{L.slotScopeIds=he,M==null?L.shapeFlag&512?ie.ctx.activate(L,H,Z,ge,me):q(L,H,Z,ie,oe,ge,me):te(M,L,me)},q=(M,L,H,Z,ie,oe,ge)=>{const he=M.component=w2(M,Z,ie);if(nl(M)&&(he.ctx.renderer=He),_2(he,!1,ge),he.asyncDep){if(ie&&ie.registerDep(he,ce,ge,oe),!M.el){const me=he.subTree=Fe(nr);S(null,me,L,H),M.placeholder=me.el}}else ce(he,M,L,H,ie,oe,ge)},te=(M,L,H)=>{const Z=L.component=M.component;if(t2(M,L,H))if(Z.asyncDep&&!Z.asyncResolved){L.el=M.el,L.placeholder=M.placeholder,ue(Z,L,H);return}else Z.next=L,Z.update();else L.el=M.el,L.placeholder=M.placeholder,Z.vnode=L},ce=(M,L,H,Z,ie,oe,ge)=>{const he=()=>{if(M.isMounted){let{next:ye,bu:Ie,u:ze,parent:Ze,vnode:Ve}=M;{const Ot=q0(M);if(Ot){ye&&(ye.el=Ve.el,ue(M,ye,ge)),Ot.asyncDep.then(()=>{hr(()=>{M.isUnmounted||se()},ie)});return}}let rt=ye,mt;_i(M,!1),ye?(ye.el=Ve.el,ue(M,ye,ge)):ye=Ve,Ie&&$o(Ie),(mt=ye.props&&ye.props.onVnodeBeforeUpdate)&&Jr(mt,Ze,ye,Ve),_i(M,!0);const vt=Af(M),Qt=M.subTree;M.subTree=vt,$(Qt,vt,p(Qt.el),tt(Qt),M,ie,oe),ye.el=vt.el,rt===null&&r2(M,vt.el),ze&&hr(ze,ie),(mt=ye.props&&ye.props.onVnodeUpdated)&&hr(()=>Jr(mt,Ze,ye,Ve),ie)}else{let ye;const{el:Ie,props:ze}=L,{bm:Ze,m:Ve,parent:rt,root:mt,type:vt}=M,Qt=Js(L);_i(M,!1),Ze&&$o(Ze),!Qt&&(ye=ze&&ze.onVnodeBeforeMount)&&Jr(ye,rt,L),_i(M,!0);{mt.ce&&mt.ce._hasShadowRoot()&&mt.ce._injectChildStyle(vt,M.parent?M.parent.type:void 0);const Ot=M.subTree=Af(M);$(null,Ot,H,Z,M,ie,oe),L.el=Ot.el}if(Ve&&hr(Ve,ie),!Qt&&(ye=ze&&ze.onVnodeMounted)){const Ot=L;hr(()=>Jr(ye,rt,Ot),ie)}(L.shapeFlag&256||rt&&Js(rt.vnode)&&rt.vnode.shapeFlag&256)&&M.a&&hr(M.a,ie),M.isMounted=!0,L=H=Z=null}};M.scope.on();const me=M.effect=new Qg(he);M.scope.off();const se=M.update=me.run.bind(me),Ee=M.job=me.runIfDirty.bind(me);Ee.i=M,Ee.id=M.uid,me.scheduler=()=>Ld(Ee),_i(M,!0),se()},ue=(M,L,H)=>{L.component=M;const Z=M.vnode.props;M.vnode=L,M.next=null,i2(M,L.props,Z,H),l2(M,L.children,H),un(),g0(M),dn()},Q=(M,L,H,Z,ie,oe,ge,he,me=!1)=>{const se=M&&M.children,Ee=M?M.shapeFlag:0,ye=L.children,{patchFlag:Ie,shapeFlag:ze}=L;if(Ie>0){if(Ie&128){Te(se,ye,H,Z,ie,oe,ge,he,me);return}else if(Ie&256){we(se,ye,H,Z,ie,oe,ge,he,me);return}}ze&8?(Ee&16&&bt(se,ie,oe),ye!==se&&f(H,ye)):Ee&16?ze&16?Te(se,ye,H,Z,ie,oe,ge,he,me):bt(se,ie,oe,!0):(Ee&8&&f(H,""),ze&16&&T(ye,H,Z,ie,oe,ge,he,me))},we=(M,L,H,Z,ie,oe,ge,he,me)=>{M=M||Ri,L=L||Ri;const se=M.length,Ee=L.length,ye=Math.min(se,Ee);let Ie;for(Ie=0;Ie<ye;Ie++){const ze=L[Ie]=me?kn(L[Ie]):nn(L[Ie]);$(M[Ie],ze,H,null,ie,oe,ge,he,me)}se>Ee?bt(M,ie,oe,!0,!1,ye):T(L,H,Z,ie,oe,ge,he,me,ye)},Te=(M,L,H,Z,ie,oe,ge,he,me)=>{let se=0;const Ee=L.length;let ye=M.length-1,Ie=Ee-1;for(;se<=ye&&se<=Ie;){const ze=M[se],Ze=L[se]=me?kn(L[se]):nn(L[se]);if(Ai(ze,Ze))$(ze,Ze,H,null,ie,oe,ge,he,me);else break;se++}for(;se<=ye&&se<=Ie;){const ze=M[ye],Ze=L[Ie]=me?kn(L[Ie]):nn(L[Ie]);if(Ai(ze,Ze))$(ze,Ze,H,null,ie,oe,ge,he,me);else break;ye--,Ie--}if(se>ye){if(se<=Ie){const ze=Ie+1,Ze=ze<Ee?L[ze].el:Z;for(;se<=Ie;)$(null,L[se]=me?kn(L[se]):nn(L[se]),H,Ze,ie,oe,ge,he,me),se++}}else if(se>Ie)for(;se<=ye;)xe(M[se],ie,oe,!0),se++;else{const ze=se,Ze=se,Ve=new Map;for(se=Ze;se<=Ie;se++){const Ct=L[se]=me?kn(L[se]):nn(L[se]);Ct.key!=null&&Ve.set(Ct.key,se)}let rt,mt=0;const vt=Ie-Ze+1;let Qt=!1,Ot=0;const $r=new Array(vt);for(se=0;se<vt;se++)$r[se]=0;for(se=ze;se<=ye;se++){const Ct=M[se];if(mt>=vt){xe(Ct,ie,oe,!0);continue}let zt;if(Ct.key!=null)zt=Ve.get(Ct.key);else for(rt=Ze;rt<=Ie;rt++)if($r[rt-Ze]===0&&Ai(Ct,L[rt])){zt=rt;break}zt===void 0?xe(Ct,ie,oe,!0):($r[zt-Ze]=se+1,zt>=Ot?Ot=zt:Qt=!0,$(Ct,L[zt],H,null,ie,oe,ge,he,me),mt++)}const cr=Qt?f2($r):Ri;for(rt=cr.length-1,se=vt-1;se>=0;se--){const Ct=Ze+se,zt=L[Ct],Bt=L[Ct+1],Sr=Ct+1<Ee?Bt.el||ud(Bt):Z;$r[se]===0?$(null,zt,H,Sr,ie,oe,ge,he,me):Qt&&(rt<0||se!==cr[rt]?re(zt,H,Sr,2):rt--)}}},re=(M,L,H,Z,ie=null)=>{const{el:oe,type:ge,transition:he,children:me,shapeFlag:se}=M;if(se&6){re(M.component.subTree,L,H,Z);return}if(se&128){M.suspense.move(L,H,Z);return}if(se&64){ge.move(M,L,H,He);return}if(ge===Xt){n(oe,L,H);for(let ye=0;ye<me.length;ye++)re(me[ye],L,H,Z);n(M.anchor,L,H);return}if(ge===ko){A(M,L,H);return}if(Z!==2&&se&1&&he)if(Z===0)he.persisted&&!oe[Ar]?n(oe,L,H):(he.beforeEnter(oe),n(oe,L,H),hr(()=>he.enter(oe),ie));else{const{leave:ye,delayLeave:Ie,afterLeave:ze}=he,Ze=()=>{M.ctx.isUnmounted?i(oe):n(oe,L,H)},Ve=()=>{const rt=oe._isLeaving||!!oe[Ar];oe._isLeaving&&oe[Ar](!0),he.persisted&&!rt?Ze():ye(oe,()=>{Ze(),ze&&ze()})};Ie?Ie(oe,Ze,Ve):Ve()}else n(oe,L,H)},xe=(M,L,H,Z=!1,ie=!1)=>{const{type:oe,props:ge,ref:he,children:me,dynamicChildren:se,shapeFlag:Ee,patchFlag:ye,dirs:Ie,cacheIndex:ze,memo:Ze}=M;if((ye===-2||se&&se.hasOnce)&&(ie=!1),he!=null&&(un(),Qs(he,null,H,M,!0),dn()),ze!=null&&(!M.ctx||M.ctx===L)&&(L.renderCache[ze]=void 0),Ee&256){L.ctx.deactivate(M);return}const Ve=Ee&1&&Ie,rt=!Js(M);let mt;if(rt&&(mt=ge&&ge.onVnodeBeforeUnmount)&&Jr(mt,L,M),Ee&6)et(M.component,H,Z);else{if(Ee&128){M.suspense.unmount(H,Z);return}Ve&&wi(M,null,L,"beforeUnmount"),Ee&64?M.type.remove(M,L,H,He,Z):se&&!se.hasOnce&&(oe!==Xt||ye>0&&ye&64)?bt(se,L,H,!1,!0):(oe===Xt&&ye&384||!ie&&Ee&16)&&bt(me,L,H),Z&&Se(M)}const vt=Ze!=null&&ze==null;(rt&&(mt=ge&&ge.onVnodeUnmounted)||Ve||vt)&&hr(()=>{mt&&Jr(mt,L,M),Ve&&wi(M,null,L,"unmounted"),vt&&(M.el=null)},H)},Se=M=>{const{type:L,el:H,anchor:Z,transition:ie}=M,oe=L===Xt;if(oe&&!ie){be(H,Z);return}if(L===ko){C(M),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave();return}const ge=oe?aa(M):M,he=()=>{oe?p(H)&&be(H,Z):i(H),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(ge&&ge.shapeFlag&1&&ie&&!ie.persisted){const{leave:me,delayLeave:se}=ie,Ee=ge.el,ye=()=>me(Ee,he);se?se(Ee,he,ye):ye()}else he()},be=(M,L)=>{let H;for(;M!==L;)H=g(M),i(M),M=H;i(L)},et=(M,L,H)=>{const{bum:Z,scope:ie,job:oe,subTree:ge,um:he,m:me,a:se}=M;Mf(me),Mf(se),Z&&$o(Z),ie.stop(),oe?(oe.flags|=8,xe(ge,M,L,H)):M.vnode.el&&ge&&(ge.transition=M.vnode.transition,xe(ge,M,L,H)),he&&hr(he,L),hr(()=>{M.isUnmounted=!0},L)},bt=(M,L,H,Z=!1,ie=!1,oe=0)=>{for(let ge=oe;ge<M.length;ge++)xe(M[ge],L,H,Z,ie)},tt=M=>{if(M.shapeFlag&6)return tt(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const L=g(M.anchor||M.el),H=L&&L[C_];return H?g(H):L},kt=(M,L,H)=>{const Z=M&&L._vnode?void 0:M&&M.component?M.component.uid:v2();x_(()=>{M==null?L._vnode&&xe(L._vnode,null,null,!0):$(L._vnode||null,M,L,null,null,null,H),L._vnode=M},Z)},He={p:$,um:xe,m:re,r:Se,mt:q,mc:T,pc:Q,pbc:Y,n:tt,o:e};return{render:kt,hydrate:void 0,createApp:X_(kt)}}function Wl({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function _i({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function c2(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function W0(e,t,r=!1){const n=e.children,i=t.children;if(Be(n)&&Be(i))for(let s=0;s<n.length;s++){const a=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=kn(i[s]),o.el=a.el),!r&&o.patchFlag!==-2&&W0(a,o)),o.type===al&&(o.patchFlag===-1&&(o=i[s]=kn(o)),o.el=a.el),o.type===nr&&!o.el&&(o.el=a.el)}}function f2(e){const t=e.slice(),r=[0];let n,i,s,a,o;const l=e.length;for(n=0;n<l;n++){const d=e[n];if(d!==0){if(i=r[r.length-1],e[i]<d){t[n]=i,r.push(n);continue}for(s=0,a=r.length-1;s<a;)o=s+a>>1,e[r[o]]<d?s=o+1:a=o;d<e[r[s]]&&(s>0&&(t[n]=r[s-1]),r[s]=n)}}for(s=r.length,a=r[s-1];s-- >0;)r[s]=a,a=t[a];return r}function q0(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:q0(t)}function Mf(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ud(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ud(t.subTree):null}const H0=e=>e.__isSuspense;function p2(e,t){t&&t.pendingBranch?Be(e)?t.effects.push(...e):t.effects.push(e):__(e)}const Xt=Symbol.for("v-fgt"),al=Symbol.for("v-txt"),nr=Symbol.for("v-cmt"),ko=Symbol.for("v-stc"),Di=[];let _r=null;function Xe(e=!1){Di.push(_r=e?null:[])}function G0(){Di.pop(),_r=Di[Di.length-1]||null}let oa=1;function Bo(e,t=!1){oa+=e,e<0&&_r&&t&&(_r.hasOnce=!0)}function K0(e){return e.dynamicChildren=oa>0?_r||Ri:null,G0(),oa>0&&_r&&_r.push(e),e}function ot(e,t,r,n,i,s){return K0(U(e,t,r,n,i,s,!0))}function Ni(e,t,r,n,i){return K0(Fe(e,t,r,n,i,!0))}function la(e){return e?e.__v_isVNode===!0:!1}function Ai(e,t){return e.type===t.type&&e.key===t.key}const X0=({key:e})=>e??null,To=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?Rt(e)||ir(e)||qe(e)?{i:Or,r:e,k:t,f:!!r}:e:null);function U(e,t=null,r=null,n=0,i=null,s=e===Xt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&X0(t),ref:t&&To(t),scopeId:v0,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Or};return o?(Po(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=Rt(r)?8:16),oa>0&&!a&&_r&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&_r.push(l),l}const Fe=h2;function h2(e,t=null,r=null,n=0,i=null,s=!1){if((!e||e===F_)&&(e=nr),la(e)){const o=ei(e,t,!0);return r&&Po(o,r),oa>0&&!s&&_r&&(o.shapeFlag&6?_r[_r.indexOf(e)]=o:_r.push(o)),o.patchFlag=-2,o}if(k2(e)&&(e=e.__vccOpts),t){t=m2(t);let{class:o,style:l}=t;o&&!Rt(o)&&(t.class=Vr(o)),ht(l)&&(Ud(l)&&!Be(l)&&(l=Ht({},l)),t.style=Xn(l))}const a=Rt(e)?1:H0(e)?128:rl(e)?64:ht(e)?4:qe(e)?2:0;return U(e,t,r,n,i,a,s,!0)}function m2(e){return e?Ud(e)||N0(e)?Ht({},e):e:null}function ei(e,t,r=!1,n=!1){const{props:i,ref:s,patchFlag:a,children:o,transition:l}=e,d=t?y2(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&X0(d),ref:t&&t.ref?r&&s?Be(s)?s.concat(To(t)):[s,To(t)]:To(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ei(e.ssContent),ssFallback:e.ssFallback&&ei(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&n&&cs(f,l.clone(f)),f}function g2(e=" ",t=0){return Fe(al,null,e,t)}function ql(e,t){const r=Fe(ko,null,e);return r.staticCount=t,r}function Ft(e="",t=!1){return t?(Xe(),Ni(nr,null,e)):Fe(nr,null,e)}function nn(e){return e==null||typeof e=="boolean"?Fe(nr):Be(e)?Fe(Xt,null,e.slice()):la(e)?kn(e):Fe(al,null,String(e))}function kn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ei(e)}function Po(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(Be(t))r=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),Po(e,i()),i._c&&(i._d=!0));return}else{r=32;const i=t._;!i&&!N0(t)?t._ctx=Or:i===3&&Or&&(Or.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(qe(t)){if(n&65){Po(e,{default:t});return}t={default:t,_ctx:Or},r=32}else t=String(t),n&64?(r=16,t=[g2(t)]):r=8;e.children=t,e.shapeFlag|=r}function y2(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=Vr([t.class,n.class]));else if(i==="style")t.style=Xn([t.style,n.style]);else if(Xo(i)){const s=t[i],a=n[i];a&&s!==a&&!(Be(s)&&s.includes(a))?t[i]=s?[].concat(s,a):a:a==null&&s==null&&!Yo(i)&&(t[i]=a)}else i!==""&&(t[i]=n[i])}return t}function Jr(e,t,r,n=null){Rr(e,t,7,[r,n])}const b2=z0();let Y0=0;function v2(){return Y0}function w2(e,t,r){const n=e.type,i=(t?t.appContext:e.appContext)||b2,s={uid:Y0++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:L0(n,i),emitsOptions:M0(n,i),emit:null,emitted:null,propsDefaults:St,inheritAttrs:n.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Z_.bind(null,s),e.ce&&e.ce(s),s}let dr=null;const Z0=()=>dr||Or;let Do,ua;{const e=Jo(),t=(r,n)=>{let i;return(i=e[r])||(i=e[r]=[]),i.push(n),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};Do=t("__VUE_INSTANCE_SETTERS__",r=>dr=r),ua=t("__VUE_SSR_SETTERS__",r=>da=r)}const va=e=>{const t=dr;return Do(e),e.scope.on(),()=>{e.scope.off(),Do(t)}},Rf=()=>{dr&&dr.scope.off(),Do(null)};function Q0(e){return e.vnode.shapeFlag&4}let da=!1;function _2(e,t=!1,r=!1){t&&ua(t);const{props:n,children:i}=e.vnode,s=Q0(e);n2(e,n,s,t),o2(e,i,r||t);const a=s?x2(e,t):void 0;return t&&ua(!1),a}function x2(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,j_);const{setup:n}=r;if(n){un();const i=e.setupContext=n.length>1?S2(e):null,s=va(e),a=ga(n,e,0,[e.props,i]),o=Wg(a);if(dn(),s(),(o||e.sp)&&!Js(e)&&C0(e),o){if(a.then(Rf,Rf),t)return a.then(l=>{ua(!0);try{Bf(e,l,t)}finally{ua(!1)}}).catch(l=>{tl(l,e,0)});e.asyncDep=a}else Bf(e,a)}else J0(e)}function Bf(e,t,r){qe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ht(t)&&(e.setupState=p0(t)),J0(e)}function J0(e,t,r){const n=e.type;e.render||(e.render=n.render||on);{const i=va(e);un();try{V_(e)}finally{dn(),i()}}}const $2={get(e,t){return rr(e,"get",""),e[t]}};function S2(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,$2),slots:e.slots,emit:e.emit,expose:t}}function ol(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(p0(c_(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in ea)return ea[r](e)},has(t,r){return r in t||r in ea}})):e.proxy}function k2(e){return qe(e)&&"__vccOpts"in e}const ta=(e,t)=>g_(e,t,da);function dd(e,t,r){try{Bo(-1);const n=arguments.length;return n===2?ht(t)&&!Be(t)?la(t)?Fe(e,null,[t]):Fe(e,t):Fe(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&la(r)&&(r=[r]),Fe(e,t,r))}finally{Bo(1)}}const T2="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cd;const Pf=typeof window<"u"&&window.trustedTypes;if(Pf)try{cd=Pf.createPolicy("vue",{createHTML:e=>e})}catch{}const ey=cd?e=>cd.createHTML(e):e=>e,C2="http://www.w3.org/2000/svg",E2="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,Df=Sn&&Sn.createElement("template"),I2={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const i=t==="svg"?Sn.createElementNS(C2,e):t==="mathml"?Sn.createElementNS(E2,e):r?Sn.createElement(e,{is:r}):Sn.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>Sn.createTextNode(e),createComment:e=>Sn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Sn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,i,s){const a=r?r.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),r),!(i===s||!(i=i.nextSibling)););else{Df.innerHTML=ey(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=Df.content;if(n==="svg"||n==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,r)}return[a?a.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},jn="transition",Os="animation",ca=Symbol("_vtc"),ty={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},A2=Ht({},$0,ty),O2=e=>(e.displayName="Transition",e.props=A2,e),z2=O2((e,{slots:t})=>dd(A_,M2(e),t)),xi=(e,t=[])=>{Be(e)?e.forEach(r=>r(...t)):e&&e(...t)},Nf=e=>e?Be(e)?e.some(t=>t.length>1):e.length>1:!1;function M2(e){const t={};for(const X in e)X in ty||(t[X]=e[X]);if(e.css===!1)return t;const{name:r="v",type:n,duration:i,enterFromClass:s=`${r}-enter-from`,enterActiveClass:a=`${r}-enter-active`,enterToClass:o=`${r}-enter-to`,appearFromClass:l=s,appearActiveClass:d=a,appearToClass:f=o,leaveFromClass:p=`${r}-leave-from`,leaveActiveClass:g=`${r}-leave-active`,leaveToClass:b=`${r}-leave-to`}=e,y=R2(i),$=y&&y[0],E=y&&y[1],{onBeforeEnter:S,onEnter:x,onEnterCancelled:A,onLeave:C,onLeaveCancelled:O,onBeforeAppear:D=S,onAppear:N=x,onAppearCancelled:T=A}=t,W=(X,le,q,te)=>{X._enterCancelled=te,$i(X,le?f:o),$i(X,le?d:a),q&&q()},Y=(X,le)=>{X._isLeaving=!1,$i(X,p),$i(X,b),$i(X,g),le&&le()},ae=X=>(le,q)=>{const te=X?N:x,ce=()=>W(le,X,q);xi(te,[le,ce]),Uf(()=>{$i(le,X?l:s),wn(le,X?f:o),Nf(te)||Lf(le,n,$,ce)})};return Ht(t,{onBeforeEnter(X){xi(S,[X]),wn(X,s),wn(X,a)},onBeforeAppear(X){xi(D,[X]),wn(X,l),wn(X,d)},onEnter:ae(!1),onAppear:ae(!0),onLeave(X,le){X._isLeaving=!0;const q=()=>Y(X,le);wn(X,p),X._enterCancelled?(wn(X,g),Vf(X)):(Vf(X),wn(X,g)),Uf(()=>{X._isLeaving&&($i(X,p),wn(X,b),Nf(C)||Lf(X,n,E,q))}),xi(C,[X,q])},onEnterCancelled(X){W(X,!1,void 0,!0),xi(A,[X])},onAppearCancelled(X){W(X,!0,void 0,!0),xi(T,[X])},onLeaveCancelled(X){Y(X),xi(O,[X])}})}function R2(e){if(e==null)return null;if(ht(e))return[Hl(e.enter),Hl(e.leave)];{const t=Hl(e);return[t,t]}}function Hl(e){return Dw(e)}function wn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e[ca]||(e[ca]=new Set)).add(t)}function $i(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const r=e[ca];r&&(r.delete(t),r.size||(e[ca]=void 0))}function Uf(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let B2=0;function Lf(e,t,r,n){const i=e._endId=++B2,s=()=>{i===e._endId&&n()};if(r!=null)return setTimeout(s,r);const{type:a,timeout:o,propCount:l}=P2(e,t);if(!a)return n();const d=a+"end";let f=0;const p=()=>{e.removeEventListener(d,g),s()},g=b=>{b.target===e&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},o+1),e.addEventListener(d,g)}function P2(e,t){const r=window.getComputedStyle(e),n=y=>(r[y]||"").split(", "),i=n(`${jn}Delay`),s=n(`${jn}Duration`),a=Ff(i,s),o=n(`${Os}Delay`),l=n(`${Os}Duration`),d=Ff(o,l);let f=null,p=0,g=0;t===jn?a>0&&(f=jn,p=a,g=s.length):t===Os?d>0&&(f=Os,p=d,g=l.length):(p=Math.max(a,d),f=p>0?a>d?jn:Os:null,g=f?f===jn?s.length:l.length:0);const b=f===jn&&/\b(?:transform|all)(?:,|$)/.test(n(`${jn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:b}}function Ff(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>jf(r)+jf(e[n])))}function jf(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Vf(e){return(e?e.ownerDocument:document).body.offsetHeight}function D2(e,t,r){const n=e[ca];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const Wf=Symbol("_vod"),N2=Symbol("_vsh"),U2=Symbol(""),L2=/(?:^|;)\s*display\s*:/;function F2(e,t,r){const n=e.style,i=Rt(r);let s=!1;if(r&&!i){if(t)if(Rt(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();r[o]==null&&Ws(n,o,"")}else for(const a in t)r[a]==null&&Ws(n,a,"");for(const a in r){a==="display"&&(s=!0);const o=r[a];o!=null?V2(e,a,!Rt(t)&&t?t[a]:void 0,o)||Ws(n,a,o):Ws(n,a,"")}}else if(i){if(t!==r){const a=n[U2];a&&(r+=";"+a),n.cssText=r,s=L2.test(r)}}else t&&e.removeAttribute("style");Wf in e&&((!i||t!==r)&&(e[Wf]=s?n.display:""),e[N2]&&(n.display="none"))}const ro=/\s*!important$/;function Ws(e,t,r){if(Be(r))r.forEach(n=>Ws(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))ro.test(r)?e.setProperty(t,r.replace(ro,""),"important"):e.setProperty(t,r);else{const n=j2(e,t);ro.test(r)?e.setProperty(ri(n),r.replace(ro,""),"important"):e[n]=r}}const qf=["Webkit","Moz","ms"],Gl={};function j2(e,t){const r=Gl[t];if(r)return r;let n=Hr(t);if(n!=="filter"&&n in e)return Gl[t]=n;n=Gg(n);for(let i=0;i<qf.length;i++){const s=qf[i]+n;if(s in e)return Gl[t]=s}return t}function V2(e,t,r,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Rt(n)&&r===n}const Hf="http://www.w3.org/1999/xlink";function Gf(e,t,r,n,i,s=Vw(t)){n&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(Hf,t.slice(6,t.length)):e.setAttributeNS(Hf,t,r):r==null||s&&!Xg(r)?e.removeAttribute(t):e.setAttribute(t,s?"":ln(r)?String(r):r)}function Kf(e,t,r,n,i){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?ey(r):r);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,l=r==null?e.type==="checkbox"?"on":"":String(r);(o!==l||!("_value"in e))&&(e.value=l),r==null&&e.removeAttribute(t),e._value=r;return}let a=!1;if(r===""||r==null){const o=typeof e[t];o==="boolean"?r=Xg(r):r==null&&o==="string"?(r="",a=!0):o==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(i||t)}function Yn(e,t,r,n){e.addEventListener(t,r,n)}function W2(e,t,r,n){e.removeEventListener(t,r,n)}const Xf=Symbol("_vei");function q2(e,t,r,n,i=null){const s=e[Xf]||(e[Xf]={}),a=s[t];if(n&&a)a.value=n;else{const[o,l]=K2(t);if(n){const d=s[t]=Z2(n,i);Yn(e,o,d,l)}else a&&(W2(e,o,a,l),s[t]=void 0)}}const H2=/(Once|Passive|Capture)$/,G2=/^on:?(?:Once|Passive|Capture)$/;function K2(e){let t,r;for(;(r=e.match(H2))&&!G2.test(e);)t||(t={}),e=e.slice(0,e.length-r[1].length),t[r[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):ri(e.slice(2)),t]}let Kl=0;const X2=Promise.resolve(),Y2=()=>Kl||(X2.then(()=>Kl=0),Kl=Date.now());function Z2(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;const i=r.value;if(Be(i)){const s=n.stopImmediatePropagation;n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0};const a=i.slice(),o=[n];for(let l=0;l<a.length&&!n._stopped;l++){const d=a[l];d&&Rr(d,t,5,o)}}else Rr(i,t,5,[n])};return r.value=e,r.attached=Y2(),r}const Yf=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Q2=(e,t,r,n,i,s)=>{const a=i==="svg";t==="class"?D2(e,n,a):t==="style"?F2(e,r,n):Xo(t)?Yo(t)||q2(e,t,r,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):J2(e,t,n,a))?(Kf(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Gf(e,t,n,a,s,t!=="value")):e._isVueCE&&(ex(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Rt(n)))?Kf(e,Hr(t),n,s,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Gf(e,t,n,a))};function J2(e,t,r,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Yf(t)&&qe(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Yf(t)&&Rt(r)?!1:t in e}function ex(e,t){const r=e._def.props;if(!r)return!1;const n=Hr(t);return Array.isArray(r)?r.some(i=>Hr(i)===n):Object.keys(r).some(i=>Hr(i)===n)}const ps=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Be(t)?r=>$o(t,r):t};function tx(e){e.target.composing=!0}function Zf(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const an=Symbol("_assign"),no=Symbol("_initialValue");function Xl(e,t,r){return t&&(e=e.trim()),r&&(e=Qo(e)),e}const Tn={created(e,{modifiers:{lazy:t,trim:r,number:n}},i){e.parentNode&&(e.type==="text"?e[no]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[no]=e.defaultValue.replace(/\r\n?/g,`
`))),e[an]=ps(i);const s=n||i.props&&i.props.type==="number";Yn(e,t?"change":"input",a=>{a.target.composing||e[an](Xl(e.value,r,s))}),(r||s)&&Yn(e,"change",()=>{e.value=Xl(e.value,r,s)}),t||(Yn(e,"compositionstart",tx),Yn(e,"compositionend",Zf),Yn(e,"change",Zf))},mounted(e,{value:t,modifiers:{trim:r,number:n}}){const i=t??"",s=e[no];delete e[no],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[an](Xl(e.value,r,n)):e.value=i},beforeUpdate(e,{value:t,oldValue:r,modifiers:{lazy:n,trim:i,number:s}},a){if(e[an]=ps(a),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?Qo(e.value):e.value,l=t??"";if(o===l)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(n&&t===r||i&&e.value.trim()===l)||(e.value=l)}},fd={deep:!0,created(e,t,r){e[an]=ps(r),Yn(e,"change",()=>{const n=e._modelValue,i=fa(e),s=e.checked,a=e[an];if(Be(n)){const o=zd(n,i),l=o!==-1;if(s&&!l)a(n.concat(i));else if(!s&&l){const d=[...n];d.splice(o,1),a(d)}}else if(An(n)){const o=new Set(n);s?o.add(i):o.delete(i),a(o)}else a(ny(e,s))})},mounted:Qf,beforeUpdate(e,t,r){e[an]=ps(r),Qf(e,t,r)}};function Qf(e,{value:t,oldValue:r},n){e._modelValue=t;let i;if(Be(t))i=zd(t,n.props.value)>-1;else if(An(t))i=t.has(n.props.value);else{if(t===r)return;i=On(t,ny(e,!0))}e.checked!==i&&(e.checked=i)}const ry={deep:!0,created(e,{value:t,modifiers:{number:r}},n){e._modelValue=t,Yn(e,"change",()=>{const i=Array.prototype.filter.call(e.options,l=>l.selected).map(l=>r?Qo(fa(l)):fa(l)),s=e.multiple,a=s?An(e._modelValue)?new Set(i):i:i[0],o=e._pendingValue=[s,s?Be(a)?i.slice():i:a];try{e[an](a)}finally{Bi(()=>{e._pendingValue===o&&(e._pendingValue=void 0)})}}),e[an]=ps(n)},mounted(e,{value:t}){Jf(e,t)},beforeUpdate(e,{value:t},r){e._modelValue=t,e[an]=ps(r)},updated(e,{value:t}){const r=e._pendingValue;e._pendingValue=void 0,(!r||r[0]!==e.multiple||!rx(t,r[1],r[0]))&&Jf(e,t)}};function rx(e,t,r){if(!r||Be(e))return On(e,t);if(An(e)){if(e.size!==t.length)return!1;for(const n of t)if(!e.has(n))return!1;return!0}return!1}function Jf(e,t){const r=e.multiple,n=Be(t);if(!(r&&!n&&!An(t))){for(let i=0,s=e.options.length;i<s;i++){const a=e.options[i],o=fa(a);if(r)if(n){const l=typeof o;l==="string"||l==="number"?a.selected=t.some(d=>String(d)===String(o)):a.selected=zd(t,o)>-1}else a.selected=t.has(o);else if(On(fa(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function fa(e){return"_value"in e?e._value:e.value}function ny(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const nx=["ctrl","shift","alt","meta"],ix={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>nx.some(r=>e[`${r}Key`]&&!t.includes(r))},io=(e,t)=>{if(!e)return e;const r=e._withMods||(e._withMods={}),n=t.join(".");return r[n]||(r[n]=(i,...s)=>{for(let a=0;a<t.length;a++){const o=ix[t[a]];if(o&&o(i,t))return}return e(i,...s)})},sx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ax=(e,t)=>{const r=e._withKeys||(e._withKeys={}),n=t.join(".");return r[n]||(r[n]=i=>{if(!("key"in i))return;const s=ri(i.key);if(t.some(a=>a===s||sx[a]===s))return e(i)})},ox=Ht({patchProp:Q2},I2);let ep;function lx(){return ep||(ep=u2(ox))}const ux=(...e)=>{const t=lx().createApp(...e),{mount:r}=t;return t.mount=n=>{const i=cx(n);if(!i)return;const s=t._component;!qe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=r(i,!1,dx(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function dx(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function cx(e){return Rt(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var so={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Dt=(e,t)=>({size:r,strokeWidth:n=2,absoluteStrokeWidth:i,color:s,class:a,...o},{attrs:l,slots:d})=>dd("svg",{...so,width:r||so.width,height:r||so.height,stroke:s||so.stroke,"stroke-width":i?Number(n)*24/Number(r):n,...l,class:["lucide",`lucide-${fx(e)}`],...o},[...t.map(f=>dd(...f)),...d.default?[d.default()]:[]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=Dt("CameraIcon",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=Dt("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=Dt("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Dt("LayersIcon",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=Dt("Loader2Icon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=Dt("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=Dt("PaletteIcon",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=Dt("PlusCircleIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=Dt("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=Dt("PrinterIcon",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=Dt("RefreshCwIcon",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=Dt("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=Dt("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=Dt("ScissorsIcon",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=Dt("SparklesIcon",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=Dt("UploadCloudIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=Dt("UploadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=Dt("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=Dt("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=Dt("ZoomInIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=Dt("ZoomOutIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Cx=25.4,Ex=300;function hs(e,t=Ex){return Math.round(e/Cx*t)}const Yl=[{id:"spec_1_inch",name:"标准 1 寸",widthMm:25,heightMm:35,widthPx:295,heightPx:413,description:"适用于驾照、体检表、普通证件、求职简历"},{id:"spec_large_1_inch",name:"大 1 寸",widthMm:33,heightMm:48,widthPx:390,heightPx:567,description:"适用于普通中国护照、港澳通行证、各类职业资格考试"},{id:"spec_2_inch",name:"标准 2 寸",widthMm:35,heightMm:49,widthPx:413,heightPx:579,description:"适用于各类证书、签证申请、学历学位证明"},{id:"spec_small_2_inch",name:"小 2 寸",widthMm:35,heightMm:45,widthPx:413,heightPx:531,description:"适用于东南亚签证、部分欧美申根签证"},{id:"spec_cet",name:"英语四六级 (CET)",widthMm:33,heightMm:48,widthPx:390,heightPx:567,description:"全国大学英语四、六级考试官方报名标准"},{id:"spec_teacher",name:"教师资格证 (NTCE)",widthMm:35,heightMm:53,widthPx:413,heightPx:626,description:"中小学教师资格考试网报标准尺寸"},{id:"spec_ncre",name:"计算机等级考试 (NCRE)",widthMm:25,heightMm:34,widthPx:300,heightPx:400,description:"全国计算机等级考试网报标准"},{id:"spec_civil_service",name:"国家公务员考试 (国考)",widthMm:35,heightMm:45,widthPx:413,heightPx:531,description:"中央机关及其直属机构公务员招考标准"}];function Ix(e,t,r,n){let i=0,s=0,a=0,o=0;return i=t,s=r,a=hs(t),o=hs(r),{id:`custom_${Date.now()}`,name:e||`自定义 (${i}×${s}mm)`,widthMm:i,heightMm:s,widthPx:a,heightPx:o,description:`自定义尺寸 ${i}×${s} mm (${a}×${o} px)`,isCustom:!0}}const $n=[{id:"bg_white",name:"纯白底",value:"#FFFFFF",previewClass:"bg-white border border-gray-300"},{id:"bg_blue",name:"标准蓝",value:"#438EDB",previewClass:"bg-[#438EDB]"},{id:"bg_red",name:"中国红",value:"#D9001B",previewClass:"bg-[#D9001B]"},{id:"bg_light_blue",name:"浅天蓝",value:"#38BDF8",previewClass:"bg-[#38BDF8]"},{id:"bg_dark_blue",name:"深藏青",value:"#1E3A8A",previewClass:"bg-[#1E3A8A]"},{id:"bg_blue_grad",name:"冲印蓝",value:"linear-gradient(180deg, #60A5FA 0%, #1D4ED8 100%)",previewClass:"bg-gradient-to-b from-blue-400 to-blue-700",isGradient:!0,gradientStops:["#60A5FA","#1D4ED8"]},{id:"bg_gray_grad",name:"高级灰",value:"linear-gradient(180deg, #F3F4F6 0%, #9CA3AF 100%)",previewClass:"bg-gradient-to-b from-gray-100 to-gray-400",isGradient:!0,gradientStops:["#F3F4F6","#9CA3AF"]},{id:"bg_transparent",name:"消除背景 (透明)",value:"transparent",previewClass:"bg-transparent border-2 border-dashed border-gray-400"},{id:"bg_original",name:"原图背景",value:"original",previewClass:"bg-slate-700 border border-slate-600"}];function Ax(e){return{id:`bg_custom_${e.replace("#","").toLowerCase()}`,name:"自定义",value:e.startsWith("#")?e:`#${e}`,previewClass:""}}const ao=[{id:"paper_6_inch",name:"6 寸照片纸 (横版 152×102mm)",widthMm:152,heightMm:102,widthPx:1795,heightPx:1205,description:"标准冲印 6 寸相纸 (4R)，最常用的家用相纸规格"},{id:"paper_6_inch_v",name:"6 寸照片纸 (竖版 102×152mm)",widthMm:102,heightMm:152,widthPx:1205,heightPx:1795,description:"标准冲印 6 寸相纸竖版"},{id:"paper_a4",name:"标准 A4 纸 (210×297mm)",widthMm:210,heightMm:297,widthPx:2480,heightPx:3508,description:"标准办公室 A4 打印纸 (300 DPI 高清输出)"}];var Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sy={};(function(){var e;function t(u){var m=0;return function(){return m<u.length?{done:!1,value:u[m++]}:{done:!0}}}var r=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zl=="object"&&Zl];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=n(this);function s(u,m){if(m)e:{var v=i;u=u.split(".");for(var k=0;k<u.length-1;k++){var z=u[k];if(!(z in v))break e;v=v[z]}u=u[u.length-1],k=v[u],m=m(k),m!=k&&m!=null&&r(v,u,{configurable:!0,writable:!0,value:m})}}s("Symbol",function(u){function m(B){if(this instanceof m)throw new TypeError("Symbol is not a constructor");return new v(k+(B||"")+"_"+z++,B)}function v(B,R){this.h=B,r(this,"description",{configurable:!0,writable:!0,value:R})}if(u)return u;v.prototype.toString=function(){return this.h};var k="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",z=0;return m}),s("Symbol.iterator",function(u){if(u)return u;u=Symbol("Symbol.iterator");for(var m="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),v=0;v<m.length;v++){var k=i[m[v]];typeof k=="function"&&typeof k.prototype[u]!="function"&&r(k.prototype,u,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return u});function a(u){return u={next:u},u[Symbol.iterator]=function(){return this},u}function o(u){var m=typeof Symbol<"u"&&Symbol.iterator&&u[Symbol.iterator];return m?m.call(u):{next:t(u)}}function l(u){if(!(u instanceof Array)){u=o(u);for(var m,v=[];!(m=u.next()).done;)v.push(m.value);u=v}return u}var d=typeof Object.assign=="function"?Object.assign:function(u,m){for(var v=1;v<arguments.length;v++){var k=arguments[v];if(k)for(var z in k)Object.prototype.hasOwnProperty.call(k,z)&&(u[z]=k[z])}return u};s("Object.assign",function(u){return u||d});var f=typeof Object.create=="function"?Object.create:function(u){function m(){}return m.prototype=u,new m},p;if(typeof Object.setPrototypeOf=="function")p=Object.setPrototypeOf;else{var g;e:{var b={a:!0},y={};try{y.__proto__=b,g=y.a;break e}catch{}g=!1}p=g?function(u,m){if(u.__proto__=m,u.__proto__!==m)throw new TypeError(u+" is not extensible");return u}:null}var $=p;function E(u,m){if(u.prototype=f(m.prototype),u.prototype.constructor=u,$)$(u,m);else for(var v in m)if(v!="prototype")if(Object.defineProperties){var k=Object.getOwnPropertyDescriptor(m,v);k&&Object.defineProperty(u,v,k)}else u[v]=m[v];u.za=m.prototype}function S(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function x(u){if(u.m)throw new TypeError("Generator is already running");u.m=!0}S.prototype.u=function(u){this.i=u};function A(u,m){u.l={ma:m,na:!0},u.h=u.s||u.v}S.prototype.return=function(u){this.l={return:u},this.h=this.v};function C(u,m,v){return u.h=v,{value:m}}function O(u){this.h=new S,this.i=u}function D(u,m){x(u.h);var v=u.h.j;return v?N(u,"return"in v?v.return:function(k){return{value:k,done:!0}},m,u.h.return):(u.h.return(m),T(u))}function N(u,m,v,k){try{var z=m.call(u.h.j,v);if(!(z instanceof Object))throw new TypeError("Iterator result "+z+" is not an object");if(!z.done)return u.h.m=!1,z;var B=z.value}catch(R){return u.h.j=null,A(u.h,R),T(u)}return u.h.j=null,k.call(u.h,B),T(u)}function T(u){for(;u.h.h;)try{var m=u.i(u.h);if(m)return u.h.m=!1,{value:m.value,done:!1}}catch(v){u.h.i=void 0,A(u.h,v)}if(u.h.m=!1,u.h.l){if(m=u.h.l,u.h.l=null,m.na)throw m.ma;return{value:m.return,done:!0}}return{value:void 0,done:!0}}function W(u){this.next=function(m){return x(u.h),u.h.j?m=N(u,u.h.j.next,m,u.h.u):(u.h.u(m),m=T(u)),m},this.throw=function(m){return x(u.h),u.h.j?m=N(u,u.h.j.throw,m,u.h.u):(A(u.h,m),m=T(u)),m},this.return=function(m){return D(u,m)},this[Symbol.iterator]=function(){return this}}function Y(u){function m(k){return u.next(k)}function v(k){return u.throw(k)}return new Promise(function(k,z){function B(R){R.done?k(R.value):Promise.resolve(R.value).then(m,v).then(B,z)}B(u.next())})}function ae(u){return Y(new W(new O(u)))}s("Promise",function(u){function m(R){this.i=0,this.j=void 0,this.h=[],this.u=!1;var F=this.l();try{R(F.resolve,F.reject)}catch(G){F.reject(G)}}function v(){this.h=null}function k(R){return R instanceof m?R:new m(function(F){F(R)})}if(u)return u;v.prototype.i=function(R){if(this.h==null){this.h=[];var F=this;this.j(function(){F.m()})}this.h.push(R)};var z=i.setTimeout;v.prototype.j=function(R){z(R,0)},v.prototype.m=function(){for(;this.h&&this.h.length;){var R=this.h;this.h=[];for(var F=0;F<R.length;++F){var G=R[F];R[F]=null;try{G()}catch(fe){this.l(fe)}}}this.h=null},v.prototype.l=function(R){this.j(function(){throw R})},m.prototype.l=function(){function R(fe){return function(_e){G||(G=!0,fe.call(F,_e))}}var F=this,G=!1;return{resolve:R(this.I),reject:R(this.m)}},m.prototype.I=function(R){if(R===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(R instanceof m)this.L(R);else{e:switch(typeof R){case"object":var F=R!=null;break e;case"function":F=!0;break e;default:F=!1}F?this.F(R):this.s(R)}},m.prototype.F=function(R){var F=void 0;try{F=R.then}catch(G){this.m(G);return}typeof F=="function"?this.M(F,R):this.s(R)},m.prototype.m=function(R){this.v(2,R)},m.prototype.s=function(R){this.v(1,R)},m.prototype.v=function(R,F){if(this.i!=0)throw Error("Cannot settle("+R+", "+F+"): Promise already settled in state"+this.i);this.i=R,this.j=F,this.i===2&&this.K(),this.H()},m.prototype.K=function(){var R=this;z(function(){if(R.D()){var F=i.console;typeof F<"u"&&F.error(R.j)}},1)},m.prototype.D=function(){if(this.u)return!1;var R=i.CustomEvent,F=i.Event,G=i.dispatchEvent;return typeof G>"u"?!0:(typeof R=="function"?R=new R("unhandledrejection",{cancelable:!0}):typeof F=="function"?R=new F("unhandledrejection",{cancelable:!0}):(R=i.document.createEvent("CustomEvent"),R.initCustomEvent("unhandledrejection",!1,!0,R)),R.promise=this,R.reason=this.j,G(R))},m.prototype.H=function(){if(this.h!=null){for(var R=0;R<this.h.length;++R)B.i(this.h[R]);this.h=null}};var B=new v;return m.prototype.L=function(R){var F=this.l();R.T(F.resolve,F.reject)},m.prototype.M=function(R,F){var G=this.l();try{R.call(F,G.resolve,G.reject)}catch(fe){G.reject(fe)}},m.prototype.then=function(R,F){function G(Me,$e){return typeof Me=="function"?function(De){try{fe(Me(De))}catch(Ge){_e(Ge)}}:$e}var fe,_e,Ne=new m(function(Me,$e){fe=Me,_e=$e});return this.T(G(R,fe),G(F,_e)),Ne},m.prototype.catch=function(R){return this.then(void 0,R)},m.prototype.T=function(R,F){function G(){switch(fe.i){case 1:R(fe.j);break;case 2:F(fe.j);break;default:throw Error("Unexpected state: "+fe.i)}}var fe=this;this.h==null?B.i(G):this.h.push(G),this.u=!0},m.resolve=k,m.reject=function(R){return new m(function(F,G){G(R)})},m.race=function(R){return new m(function(F,G){for(var fe=o(R),_e=fe.next();!_e.done;_e=fe.next())k(_e.value).T(F,G)})},m.all=function(R){var F=o(R),G=F.next();return G.done?k([]):new m(function(fe,_e){function Ne(De){return function(Ge){Me[De]=Ge,$e--,$e==0&&fe(Me)}}var Me=[],$e=0;do Me.push(void 0),$e++,k(G.value).T(Ne(Me.length-1),_e),G=F.next();while(!G.done)})},m});function X(u,m){u instanceof String&&(u+="");var v=0,k=!1,z={next:function(){if(!k&&v<u.length){var B=v++;return{value:m(B,u[B]),done:!1}}return k=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}s("Array.prototype.keys",function(u){return u||function(){return X(this,function(m){return m})}}),s("Array.prototype.fill",function(u){return u||function(m,v,k){var z=this.length||0;for(0>v&&(v=Math.max(0,z+v)),(k==null||k>z)&&(k=z),k=Number(k),0>k&&(k=Math.max(0,z+k)),v=Number(v||0);v<k;v++)this[v]=m;return this}});function le(u){return u||Array.prototype.fill}s("Int8Array.prototype.fill",le),s("Uint8Array.prototype.fill",le),s("Uint8ClampedArray.prototype.fill",le),s("Int16Array.prototype.fill",le),s("Uint16Array.prototype.fill",le),s("Int32Array.prototype.fill",le),s("Uint32Array.prototype.fill",le),s("Float32Array.prototype.fill",le),s("Float64Array.prototype.fill",le),s("Object.is",function(u){return u||function(m,v){return m===v?m!==0||1/m===1/v:m!==m&&v!==v}}),s("Array.prototype.includes",function(u){return u||function(m,v){var k=this;k instanceof String&&(k=String(k));var z=k.length;for(v=v||0,0>v&&(v=Math.max(v+z,0));v<z;v++){var B=k[v];if(B===m||Object.is(B,m))return!0}return!1}}),s("String.prototype.includes",function(u){return u||function(m,v){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(m instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(m,v||0)!==-1}});var q=this||self;function te(u,m){u=u.split(".");var v=q;u[0]in v||typeof v.execScript>"u"||v.execScript("var "+u[0]);for(var k;u.length&&(k=u.shift());)u.length||m===void 0?v[k]&&v[k]!==Object.prototype[k]?v=v[k]:v=v[k]={}:v[k]=m}function ce(u){var m;e:{if((m=q.navigator)&&(m=m.userAgent))break e;m=""}return m.indexOf(u)!=-1}var ue=Array.prototype.map?function(u,m){return Array.prototype.map.call(u,m,void 0)}:function(u,m){for(var v=u.length,k=Array(v),z=typeof u=="string"?u.split(""):u,B=0;B<v;B++)B in z&&(k[B]=m.call(void 0,z[B],B,u));return k},Q={},we=null;function Te(u){var m=u.length,v=3*m/4;v%3?v=Math.floor(v):"=.".indexOf(u[m-1])!=-1&&(v="=.".indexOf(u[m-2])!=-1?v-2:v-1);var k=new Uint8Array(v),z=0;return re(u,function(B){k[z++]=B}),z!==v?k.subarray(0,z):k}function re(u,m){function v(G){for(;k<u.length;){var fe=u.charAt(k++),_e=we[fe];if(_e!=null)return _e;if(!/^[\s\xa0]*$/.test(fe))throw Error("Unknown base64 encoding at char: "+fe)}return G}xe();for(var k=0;;){var z=v(-1),B=v(0),R=v(64),F=v(64);if(F===64&&z===-1)break;m(z<<2|B>>4),R!=64&&(m(B<<4&240|R>>2),F!=64&&m(R<<6&192|F))}}function xe(){if(!we){we={};for(var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),m=["+/=","+/","-_=","-_.","-_"],v=0;5>v;v++){var k=u.concat(m[v].split(""));Q[v]=k;for(var z=0;z<k.length;z++){var B=k[z];we[B]===void 0&&(we[B]=z)}}}}var Se=typeof Uint8Array<"u",be=!(ce("Trident")||ce("MSIE"))&&typeof q.btoa=="function";function et(u){if(!be){var m;m===void 0&&(m=0),xe(),m=Q[m];for(var v=Array(Math.floor(u.length/3)),k=m[64]||"",z=0,B=0;z<u.length-2;z+=3){var R=u[z],F=u[z+1],G=u[z+2],fe=m[R>>2];R=m[(R&3)<<4|F>>4],F=m[(F&15)<<2|G>>6],G=m[G&63],v[B++]=fe+R+F+G}switch(fe=0,G=k,u.length-z){case 2:fe=u[z+1],G=m[(fe&15)<<2]||k;case 1:u=u[z],v[B]=m[u>>2]+m[(u&3)<<4|fe>>4]+G+k}return v.join("")}for(m="";10240<u.length;)m+=String.fromCharCode.apply(null,u.subarray(0,10240)),u=u.subarray(10240);return m+=String.fromCharCode.apply(null,u),btoa(m)}var bt=RegExp("[-_.]","g");function tt(u){switch(u){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function kt(u){if(!be)return Te(u);bt.test(u)&&(u=u.replace(bt,tt)),u=atob(u);for(var m=new Uint8Array(u.length),v=0;v<u.length;v++)m[v]=u.charCodeAt(v);return m}var He;function dt(){return He||(He=new Uint8Array(0))}var M={},L=typeof Uint8Array.prototype.slice=="function",H=0,Z=0;function ie(u){var m=0>u;u=Math.abs(u);var v=u>>>0;u=Math.floor((u-v)/4294967296),m&&(v=o(ge(v,u)),m=v.next().value,u=v.next().value,v=m),H=v>>>0,Z=u>>>0}var oe=typeof BigInt=="function";function ge(u,m){return m=~m,u?u=~u+1:m+=1,[u,m]}function he(u,m){this.i=u>>>0,this.h=m>>>0}function me(u){if(!u)return se||(se=new he(0,0));if(!/^-?\d+$/.test(u))return null;if(16>u.length)ie(Number(u));else if(oe)u=BigInt(u),H=Number(u&BigInt(4294967295))>>>0,Z=Number(u>>BigInt(32)&BigInt(4294967295));else{var m=+(u[0]==="-");Z=H=0;for(var v=u.length,k=m,z=(v-m)%6+m;z<=v;k=z,z+=6)k=Number(u.slice(k,z)),Z*=1e6,H=1e6*H+k,4294967296<=H&&(Z+=H/4294967296|0,H%=4294967296);m&&(m=o(ge(H,Z)),u=m.next().value,m=m.next().value,H=u,Z=m)}return new he(H,Z)}var se;function Ee(u,m){return Error("Invalid wire type: "+u+" (at position "+m+")")}function ye(){return Error("Failed to read varint, encoding is invalid.")}function Ie(u,m){return Error("Tried to read past the end of the data "+m+" > "+u)}function ze(){throw Error("Invalid UTF8")}function Ze(u,m){return m=String.fromCharCode.apply(null,m),u==null?m:u+m}var Ve=void 0,rt,mt=typeof TextDecoder<"u",vt,Qt=typeof TextEncoder<"u",Ot;function $r(u){if(u!==M)throw Error("illegal external caller")}function cr(u,m){if($r(m),this.V=u,u!=null&&u.length===0)throw Error("ByteString should be constructed with non-empty values")}function Ct(){return Ot||(Ot=new cr(null,M))}function zt(u){$r(M);var m=u.V;return m=m==null||Se&&m!=null&&m instanceof Uint8Array?m:typeof m=="string"?kt(m):null,m==null?m:u.V=m}function Bt(u){if(typeof u=="string")return{buffer:kt(u),C:!1};if(Array.isArray(u))return{buffer:new Uint8Array(u),C:!1};if(u.constructor===Uint8Array)return{buffer:u,C:!1};if(u.constructor===ArrayBuffer)return{buffer:new Uint8Array(u),C:!1};if(u.constructor===cr)return{buffer:zt(u)||dt(),C:!0};if(u instanceof Uint8Array)return{buffer:new Uint8Array(u.buffer,u.byteOffset,u.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Sr(u,m){this.i=null,this.m=!1,this.h=this.j=this.l=0,Rn(this,u,m)}function Rn(u,m,v){v=v===void 0?{}:v,u.S=v.S===void 0?!1:v.S,m&&(m=Bt(m),u.i=m.buffer,u.m=m.C,u.l=0,u.j=u.i.length,u.h=u.l)}Sr.prototype.reset=function(){this.h=this.l};function fr(u,m){if(u.h=m,m>u.j)throw Ie(u.j,m)}function pn(u){var m=u.i,v=u.h,k=m[v++],z=k&127;if(k&128&&(k=m[v++],z|=(k&127)<<7,k&128&&(k=m[v++],z|=(k&127)<<14,k&128&&(k=m[v++],z|=(k&127)<<21,k&128&&(k=m[v++],z|=k<<28,k&128&&m[v++]&128&&m[v++]&128&&m[v++]&128&&m[v++]&128&&m[v++]&128)))))throw ye();return fr(u,v),z}function Hi(u,m){if(0>m)throw Error("Tried to read a negative byte length: "+m);var v=u.h,k=v+m;if(k>u.j)throw Ie(m,u.j-v);return u.h=k,v}var Gi=[];function hn(){this.h=[]}hn.prototype.length=function(){return this.h.length},hn.prototype.end=function(){var u=this.h;return this.h=[],u};function ii(u,m,v){for(;0<v||127<m;)u.h.push(m&127|128),m=(m>>>7|v<<25)>>>0,v>>>=7;u.h.push(m)}function Pr(u,m){for(;127<m;)u.h.push(m&127|128),m>>>=7;u.h.push(m)}function ne(u,m){if(Gi.length){var v=Gi.pop();Rn(v,u,m),u=v}else u=new Sr(u,m);this.h=u,this.j=this.h.h,this.i=this.l=-1,this.setOptions(m)}ne.prototype.setOptions=function(u){u=u===void 0?{}:u,this.ca=u.ca===void 0?!1:u.ca},ne.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function j(u){var m=u.h;if(m.h==m.j)return!1;u.j=u.h.h;var v=pn(u.h)>>>0;if(m=v>>>3,v&=7,!(0<=v&&5>=v))throw Ee(v,u.j);if(1>m)throw Error("Invalid field number: "+m+" (at position "+u.j+")");return u.l=m,u.i=v,!0}function de(u){switch(u.i){case 0:if(u.i!=0)de(u);else e:{u=u.h;for(var m=u.h,v=m+10,k=u.i;m<v;)if(!(k[m++]&128)){fr(u,m);break e}throw ye()}break;case 1:u=u.h,fr(u,u.h+8);break;case 2:u.i!=2?de(u):(m=pn(u.h)>>>0,u=u.h,fr(u,u.h+m));break;case 5:u=u.h,fr(u,u.h+4);break;case 3:m=u.l;do{if(!j(u))throw Error("Unmatched start-group tag: stream EOF");if(u.i==4){if(u.l!=m)throw Error("Unmatched end-group tag");break}de(u)}while(!0);break;default:throw Ee(u.i,u.j)}}var Re=[];function Nt(){this.j=[],this.i=0,this.h=new hn}function jt(u,m){m.length!==0&&(u.j.push(m),u.i+=m.length)}function Jt(u,m){if(m=m.R){jt(u,u.h.end());for(var v=0;v<m.length;v++)jt(u,zt(m[v])||dt())}}var Vt=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function er(u,m){return Vt?u[Vt]|=m:u.A!==void 0?u.A|=m:(Object.defineProperties(u,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}}),m)}function bs(u,m){Vt?u[Vt]&&(u[Vt]&=~m):u.A!==void 0&&(u.A&=~m)}function Et(u){var m;return Vt?m=u[Vt]:m=u.A,m??0}function gr(u,m){Vt?u[Vt]=m:u.A!==void 0?u.A=m:Object.defineProperties(u,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}})}function Ki(u){return er(u,1),u}function wa(u,m){gr(m,(u|0)&-51)}function si(u,m){gr(m,(u|18)&-41)}var Xi={};function ai(u){return u!==null&&typeof u=="object"&&!Array.isArray(u)&&u.constructor===Object}var oi,yr=[];gr(yr,23),oi=Object.freeze(yr);function li(u){if(Et(u.o)&2)throw Error("Cannot mutate an immutable Message")}function ui(u){var m=u.length;(m=m?u[m-1]:void 0)&&ai(m)?m.g=1:(m={},u.push((m.g=1,m)))}function mn(u){var m=u.i+u.G;return u.B||(u.B=u.o[m]={})}function Pt(u,m){return m===-1?null:m>=u.i?u.B?u.B[m]:void 0:u.o[m+u.G]}function br(u,m,v,k){li(u),di(u,m,v,k)}function di(u,m,v,k){u.j&&(u.j=void 0),m>=u.i||k?mn(u)[m]=v:(u.o[m+u.G]=v,(u=u.B)&&m in u&&delete u[m])}function vs(u,m,v,k){var z=Pt(u,m);Array.isArray(z)||(z=oi);var B=Et(z);if(B&1||Ki(z),k)B&2||er(z,2),v&1||Object.freeze(z);else{k=!(v&2);var R=B&2;v&1||!R?k&&B&16&&!R&&bs(z,16):(z=Ki(Array.prototype.slice.call(z)),di(u,m,z))}return z}function Yi(u,m){var v=Pt(u,m),k=v==null?v:typeof v=="number"||v==="NaN"||v==="Infinity"||v==="-Infinity"?Number(v):void 0;return k!=null&&k!==v&&di(u,m,k),k}function Xr(u,m,v,k,z){u.h||(u.h={});var B=u.h[v],R=vs(u,v,3,z);if(!B){var F=R;B=[];var G=!!(Et(u.o)&16);R=!!(Et(F)&2);var fe=F;!z&&R&&(F=Array.prototype.slice.call(F));for(var _e=R,Ne=0;Ne<F.length;Ne++){var Me=F[Ne],$e=m,De=!1;if(De=De===void 0?!1:De,Me=Array.isArray(Me)?new $e(Me):De?new $e:void 0,Me!==void 0){$e=Me.o;var Ge=De=Et($e);R&&(Ge|=2),G&&(Ge|=16),Ge!=De&&gr($e,Ge),$e=Ge,_e=_e||!!(2&$e),B.push(Me)}}return u.h[v]=B,G=Et(F),m=G|33,m=_e?m&-9:m|8,G!=m&&(_e=F,Object.isFrozen(_e)&&(_e=Array.prototype.slice.call(_e)),gr(_e,m),F=_e),fe!==F&&di(u,v,F),(z||k&&R)&&er(B,2),k&&Object.freeze(B),B}return z||(z=Object.isFrozen(B),k&&!z?Object.freeze(B):!k&&z&&(B=Array.prototype.slice.call(B),u.h[v]=B)),B}function ci(u,m,v){var k=!!(Et(u.o)&2);if(m=Xr(u,m,v,k,k),u=vs(u,v,3,k),!(k||Et(u)&8)){for(k=0;k<m.length;k++){if(v=m[k],Et(v.o)&2){var z=$a(v,!1);z.j=v}else z=v;v!==z&&(m[k]=z,u[k]=z.o)}er(u,8)}return m}function Mt(u,m,v){if(v!=null&&typeof v!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof v+": "+v);br(u,m,v)}function pr(u,m,v,k,z){li(u);var B=Xr(u,v,m,!1,!1);return v=k??new v,u=vs(u,m,2,!1),z!=null?(B.splice(z,0,v),u.splice(z,0,v.o)):(B.push(v),u.push(v.o)),v.C()&&bs(u,8),v}function Bn(u,m){return u??m}function kr(u,m,v){return v=v===void 0?0:v,Bn(Yi(u,m),v)}var Zi;function ul(u){switch(typeof u){case"number":return isFinite(u)?u:String(u);case"object":if(u)if(Array.isArray(u)){if(Et(u)&128)return u=Array.prototype.slice.call(u),ui(u),u}else{if(Se&&u!=null&&u instanceof Uint8Array)return et(u);if(u instanceof cr){var m=u.V;return m==null?"":typeof m=="string"?m:u.V=et(m)}}}return u}function _a(u,m,v,k){if(u!=null){if(Array.isArray(u))u=ws(u,m,v,k!==void 0);else if(ai(u)){var z={},B;for(B in u)z[B]=_a(u[B],m,v,k);u=z}else u=m(u,k);return u}}function ws(u,m,v,k){var z=Et(u);k=k?!!(z&16):void 0,u=Array.prototype.slice.call(u);for(var B=0;B<u.length;B++)u[B]=_a(u[B],m,v,k);return v(z,u),u}function dl(u){return u.ja===Xi?u.toJSON():ul(u)}function Yr(u,m){u&128&&ui(m)}function fi(u,m,v){if(v=v===void 0?si:v,u!=null){if(Se&&u instanceof Uint8Array)return u.length?new cr(new Uint8Array(u),M):Ct();if(Array.isArray(u)){var k=Et(u);return k&2?u:m&&!(k&32)&&(k&16||k===0)?(gr(u,k|2),u):(u=ws(u,fi,k&4?si:v,!0),m=Et(u),m&4&&m&2&&Object.freeze(u),u)}return u.ja===Xi?_s(u):u}}function xa(u,m,v,k,z,B,R){if(u=u.h&&u.h[v]){if(k=Et(u),k&2?k=u:(B=ue(u,_s),si(k,B),Object.freeze(B),k=B),li(m),R=k==null?oi:Ki([]),k!=null){for(B=!!k.length,u=0;u<k.length;u++){var F=k[u];B=B&&!(Et(F.o)&2),R[u]=F.o}B=(B?8:0)|1,u=Et(R),(u&B)!==B&&(Object.isFrozen(R)&&(R=Array.prototype.slice.call(R)),gr(R,u|B)),m.h||(m.h={}),m.h[v]=k}else m.h&&(m.h[v]=void 0);di(m,v,R,z)}else br(m,v,fi(k,B,R),z)}function _s(u){return Et(u.o)&2||(u=$a(u,!0),er(u.o,2)),u}function $a(u,m){var v=u.o,k=[];er(k,16);var z=u.constructor.h;if(z&&k.push(z),z=u.B,z){k.length=v.length,k.fill(void 0,k.length,v.length);var B={};k[k.length-1]=B}Et(v)&128&&ui(k),m=m||u.C()?si:wa,B=u.constructor,Zi=k,k=new B(k),Zi=void 0,u.R&&(k.R=u.R.slice()),B=!!(Et(v)&16);for(var R=z?v.length-1:v.length,F=0;F<R;F++)xa(u,k,F-u.G,v[F],!1,B,m);if(z)for(var G in z)xa(u,k,+G,z[G],!0,B,m);return k}function tr(u,m,v){u==null&&(u=Zi),Zi=void 0;var k=this.constructor.i||0,z=0<k,B=this.constructor.h,R=!1;if(u==null){u=B?[B]:[];var F=48,G=!0;z&&(k=0,F|=128),gr(u,F)}else{if(!Array.isArray(u)||B&&B!==u[0])throw Error();var fe=F=er(u,0);if((G=(16&fe)!==0)&&((R=(32&fe)!==0)||(fe|=32)),z){if(128&fe)k=0;else if(0<u.length){var _e=u[u.length-1];if(ai(_e)&&"g"in _e){k=0,fe|=128,delete _e.g;var Ne=!0,Me;for(Me in _e){Ne=!1;break}Ne&&u.pop()}}}else if(128&fe)throw Error();F!==fe&&gr(u,fe)}this.G=(B?0:-1)-k,this.h=void 0,this.o=u;e:{if(B=this.o.length,k=B-1,B&&(B=this.o[k],ai(B))){this.B=B,this.i=k-this.G;break e}m!==void 0&&-1<m?(this.i=Math.max(m,k+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!z&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(v){m=G&&!R&&!0,z=this.i;var $e;for(G=0;G<v.length;G++)R=v[G],R<z?(R+=this.G,(k=u[R])?Sa(k,m):u[R]=oi):($e||($e=mn(this)),(k=$e[R])?Sa(k,m):$e[R]=oi)}}tr.prototype.toJSON=function(){return ws(this.o,dl,Yr)},tr.prototype.C=function(){return!!(Et(this.o)&2)};function Sa(u,m){if(Array.isArray(u)){var v=Et(u),k=1;!m||v&2||(k|=16),(v&k)!==k&&gr(u,v|k)}}tr.prototype.ja=Xi,tr.prototype.toString=function(){return this.o.toString()};function ka(u,m,v){if(v){var k={},z;for(z in v){var B=v[z],R=B.ra;R||(k.J=B.xa||B.oa.W,B.ia?(k.aa=hi(B.ia),R=function(F){return function(G,fe,_e){return F.J(G,fe,_e,F.aa)}}(k)):B.ka?(k.Z=Ia(B.da.P,B.ka),R=function(F){return function(G,fe,_e){return F.J(G,fe,_e,F.Z)}}(k)):R=k.J,B.ra=R),R(m,u,B.da),k={J:k.J,aa:k.aa,Z:k.Z}}}Jt(m,u)}var Qi=Symbol();function Ta(u,m,v){return u[Qi]||(u[Qi]=function(k,z){return m(k,z,v)})}function Ca(u){var m=u[Qi];if(!m){var v=gi(u);m=function(k,z){return xs(k,z,v)},u[Qi]=m}return m}function cl(u){var m=u.ia;if(m)return Ca(m);if(m=u.wa)return Ta(u.da.P,m,u.ka)}function fl(u){var m=cl(u),v=u.da,k=u.oa.U;return m?function(z,B){return k(z,B,v,m)}:function(z,B){return k(z,B,v)}}function pi(u,m){var v=u[m];return typeof v=="function"&&v.length===0&&(v=v(),u[m]=v),Array.isArray(v)&&(mi in v||gn in v||0<v.length&&typeof v[0]=="function")?v:void 0}function Ea(u,m,v,k,z,B){m.P=u[0];var R=1;if(u.length>R&&typeof u[R]!="number"){var F=u[R++];v(m,F)}for(;R<u.length;){v=u[R++];for(var G=R+1;G<u.length&&typeof u[G]!="number";)G++;switch(F=u[R++],G-=R,G){case 0:k(m,v,F);break;case 1:(G=pi(u,R))?(R++,z(m,v,F,G)):k(m,v,F,u[R++]);break;case 2:G=R++,G=pi(u,G),z(m,v,F,G,u[R++]);break;case 3:B(m,v,F,u[R++],u[R++],u[R++]);break;case 4:B(m,v,F,u[R++],u[R++],u[R++],u[R++]);break;default:throw Error("unexpected number of binary field arguments: "+G)}}return m}var Pn=Symbol();function hi(u){var m=u[Pn];if(!m){var v=Dn(u);m=function(k,z){return $s(k,z,v)},u[Pn]=m}return m}function Ia(u,m){var v=u[Pn];return v||(v=function(k,z){return ka(k,z,m)},u[Pn]=v),v}var gn=Symbol();function pl(u,m){u.push(m)}function hl(u,m,v){u.push(m,v.W)}function ml(u,m,v,k){var z=hi(k),B=Dn(k).P,R=v.W;u.push(m,function(F,G,fe){return R(F,G,fe,B,z)})}function gl(u,m,v,k,z,B){var R=Ia(k,B),F=v.W;u.push(m,function(G,fe,_e){return F(G,fe,_e,k,R)})}function Dn(u){var m=u[gn];return m||(m=Ea(u,u[gn]=[],pl,hl,ml,gl),mi in u&&gn in u&&(u.length=0),m)}var mi=Symbol();function Zr(u,m){u[0]=m}function Tr(u,m,v,k){var z=v.U;u[m]=k?function(B,R,F){return z(B,R,F,k)}:z}function Aa(u,m,v,k,z){var B=v.U,R=Ca(k),F=gi(k).P;u[m]=function(G,fe,_e){return B(G,fe,_e,F,R,z)}}function Ji(u,m,v,k,z,B,R){var F=v.U,G=Ta(k,z,B);u[m]=function(fe,_e,Ne){return F(fe,_e,Ne,k,G,R)}}function gi(u){var m=u[mi];return m||(m=Ea(u,u[mi]={},Zr,Tr,Aa,Ji),mi in u&&gn in u&&(u.length=0),m)}function xs(u,m,v){for(;j(m)&&m.i!=4;){var k=m.l,z=v[k];if(!z){var B=v[0];B&&(B=B[k])&&(z=v[k]=fl(B))}if(!z||!z(m,u,k)){z=m,k=u,B=z.j,de(z);var R=z;if(!R.ca){if(z=R.h.h-B,R.h.h=B,R=R.h,z==0)z=Ct();else{if(B=Hi(R,z),R.S&&R.m)z=R.i.subarray(B,B+z);else{R=R.i;var F=B;z=B+z,z=F===z?dt():L?R.slice(F,z):new Uint8Array(R.subarray(F,z))}z=z.length==0?Ct():new cr(z,M)}(B=k.R)?B.push(z):k.R=[z]}}}return u}function $s(u,m,v){for(var k=v.length,z=k%2==1,B=z?1:0;B<k;B+=2)(0,v[B+1])(m,u,v[B]);ka(u,m,z?v[0]:void 0)}function yi(u,m){return{U:u,W:m}}var sr=yi(function(u,m,v){if(u.i!==5)return!1;u=u.h;var k=u.i,z=u.h,B=k[z],R=k[z+1],F=k[z+2];return k=k[z+3],fr(u,u.h+4),R=(B<<0|R<<8|F<<16|k<<24)>>>0,u=2*(R>>31)+1,B=R>>>23&255,R&=8388607,br(m,v,B==255?R?NaN:1/0*u:B==0?u*Math.pow(2,-149)*R:u*Math.pow(2,B-150)*(R+Math.pow(2,23))),!0},function(u,m,v){if(m=Yi(m,v),m!=null){Pr(u.h,8*v+5),u=u.h;var k=+m;k===0?0<1/k?H=Z=0:(Z=0,H=2147483648):isNaN(k)?(Z=0,H=2147483647):(k=(v=0>k?-2147483648:0)?-k:k,34028234663852886e22<k?(Z=0,H=(v|2139095040)>>>0):11754943508222875e-54>k?(k=Math.round(k/Math.pow(2,-149)),Z=0,H=(v|k)>>>0):(m=Math.floor(Math.log(k)/Math.LN2),k*=Math.pow(2,-m),k=Math.round(8388608*k),16777216<=k&&++m,Z=0,H=(v|m+127<<23|k&8388607)>>>0)),v=H,u.h.push(v>>>0&255),u.h.push(v>>>8&255),u.h.push(v>>>16&255),u.h.push(v>>>24&255)}}),yl=yi(function(u,m,v){if(u.i!==0)return!1;var k=u.h,z=0,B=u=0,R=k.i,F=k.h;do{var G=R[F++];z|=(G&127)<<B,B+=7}while(32>B&&G&128);for(32<B&&(u|=(G&127)>>4),B=3;32>B&&G&128;B+=7)G=R[F++],u|=(G&127)<<B;if(fr(k,F),128>G)k=z>>>0,G=u>>>0,(u=G&2147483648)&&(k=~k+1>>>0,G=~G>>>0,k==0&&(G=G+1>>>0)),k=4294967296*G+(k>>>0);else throw ye();return br(m,v,u?-k:k),!0},function(u,m,v){m=Pt(m,v),m!=null&&(typeof m=="string"&&me(m),m!=null&&(Pr(u.h,8*v),typeof m=="number"?(u=u.h,ie(m),ii(u,H,Z)):(v=me(m),ii(u.h,v.i,v.h))))}),Oa=yi(function(u,m,v){return u.i!==0?!1:(br(m,v,pn(u.h)),!0)},function(u,m,v){if(m=Pt(m,v),m!=null&&m!=null)if(Pr(u.h,8*v),u=u.h,v=m,0<=v)Pr(u,v);else{for(m=0;9>m;m++)u.h.push(v&127|128),v>>=7;u.h.push(1)}}),za=yi(function(u,m,v){if(u.i!==2)return!1;var k=pn(u.h)>>>0;u=u.h;var z=Hi(u,k);if(u=u.i,mt){var B=u,R;(R=rt)||(R=rt=new TextDecoder("utf-8",{fatal:!0})),u=z+k,B=z===0&&u===B.length?B:B.subarray(z,u);try{var F=R.decode(B)}catch(Ne){if(Ve===void 0){try{R.decode(new Uint8Array([128]))}catch{}try{R.decode(new Uint8Array([97])),Ve=!0}catch{Ve=!1}}throw!Ve&&(rt=void 0),Ne}}else{F=z,k=F+k,z=[];for(var G=null,fe,_e;F<k;)fe=u[F++],128>fe?z.push(fe):224>fe?F>=k?ze():(_e=u[F++],194>fe||(_e&192)!==128?(F--,ze()):z.push((fe&31)<<6|_e&63)):240>fe?F>=k-1?ze():(_e=u[F++],(_e&192)!==128||fe===224&&160>_e||fe===237&&160<=_e||((B=u[F++])&192)!==128?(F--,ze()):z.push((fe&15)<<12|(_e&63)<<6|B&63)):244>=fe?F>=k-2?ze():(_e=u[F++],(_e&192)!==128||(fe<<28)+(_e-144)>>30||((B=u[F++])&192)!==128||((R=u[F++])&192)!==128?(F--,ze()):(fe=(fe&7)<<18|(_e&63)<<12|(B&63)<<6|R&63,fe-=65536,z.push((fe>>10&1023)+55296,(fe&1023)+56320))):ze(),8192<=z.length&&(G=Ze(G,z),z.length=0);F=Ze(G,z)}return br(m,v,F),!0},function(u,m,v){if(m=Pt(m,v),m!=null){var k=!1;if(k=k===void 0?!1:k,Qt){if(k&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(m))throw Error("Found an unpaired surrogate");m=(vt||(vt=new TextEncoder)).encode(m)}else{for(var z=0,B=new Uint8Array(3*m.length),R=0;R<m.length;R++){var F=m.charCodeAt(R);if(128>F)B[z++]=F;else{if(2048>F)B[z++]=F>>6|192;else{if(55296<=F&&57343>=F){if(56319>=F&&R<m.length){var G=m.charCodeAt(++R);if(56320<=G&&57343>=G){F=1024*(F-55296)+G-56320+65536,B[z++]=F>>18|240,B[z++]=F>>12&63|128,B[z++]=F>>6&63|128,B[z++]=F&63|128;continue}else R--}if(k)throw Error("Found an unpaired surrogate");F=65533}B[z++]=F>>12|224,B[z++]=F>>6&63|128}B[z++]=F&63|128}}m=z===B.length?B:B.subarray(0,z)}Pr(u.h,8*v+2),Pr(u.h,m.length),jt(u,u.h.end()),jt(u,m)}}),es=yi(function(u,m,v,k,z){if(u.i!==2)return!1;m=pr(m,v,k),v=u.h.j,k=pn(u.h)>>>0;var B=u.h.h+k,R=B-v;if(0>=R&&(u.h.j=B,z(m,u,void 0,void 0,void 0),R=B-u.h.h),R)throw Error("Message parsing ended unexpectedly. Expected to read "+(k+" bytes, instead read "+(k-R)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return u.h.h=B,u.h.j=v,!0},function(u,m,v,k,z){if(m=ci(m,k,v),m!=null)for(k=0;k<m.length;k++){var B=u;Pr(B.h,8*v+2);var R=B.h.end();jt(B,R),R.push(B.i),B=R,z(m[k],u),R=u;var F=B.pop();for(F=R.i+R.h.length()-F;127<F;)B.push(F&127|128),F>>>=7,R.i++;B.push(F),R.i++}});function Ss(u){return function(m,v){e:{if(Re.length){var k=Re.pop();k.setOptions(v),Rn(k.h,m,v),m=k}else m=new ne(m,v);try{var z=gi(u),B=xs(new z.P,m,z);break e}finally{z=m.h,z.i=null,z.m=!1,z.l=0,z.j=0,z.h=0,z.S=!1,m.l=-1,m.i=-1,100>Re.length&&Re.push(m)}B=void 0}return B}}function ks(u){return function(){var m=new Nt;$s(this,m,Dn(u)),jt(m,m.h.end());for(var v=new Uint8Array(m.i),k=m.j,z=k.length,B=0,R=0;R<z;R++){var F=k[R];v.set(F,B),B+=F.length}return m.j=[v],v}}function Nn(u){tr.call(this,u)}E(Nn,tr);var Ma=[Nn,1,Oa,2,sr,3,za,4,za];Nn.prototype.l=ks(Ma);function Un(u){tr.call(this,u,-1,bl)}E(Un,tr),Un.prototype.addClassification=function(u,m){return pr(this,1,Nn,u,m),this};var bl=[1],vl=Ss([Un,1,es,Ma]);function bi(u){tr.call(this,u)}E(bi,tr);var Ra=[bi,1,sr,2,sr,3,sr,4,sr,5,sr];bi.prototype.l=ks(Ra);function Ba(u){tr.call(this,u,-1,wl)}E(Ba,tr);var wl=[1],Pa=Ss([Ba,1,es,Ra]);function ts(u){tr.call(this,u)}E(ts,tr);var Da=[ts,1,sr,2,sr,3,sr,4,sr,5,sr,6,yl],_l=Ss(Da);ts.prototype.l=ks(Da);function Na(u,m,v){if(v=u.createShader(v===0?u.VERTEX_SHADER:u.FRAGMENT_SHADER),u.shaderSource(v,m),u.compileShader(v),!u.getShaderParameter(v,u.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+u.getShaderInfoLog(v));return v}function xl(u){return ci(u,Nn,1).map(function(m){var v=Pt(m,1);return{index:v??0,qa:kr(m,2),label:Pt(m,3)!=null?Bn(Pt(m,3),""):void 0,displayName:Pt(m,4)!=null?Bn(Pt(m,4),""):void 0}})}function $l(u){return{x:kr(u,1),y:kr(u,2),z:kr(u,3),visibility:Yi(u,4)!=null?kr(u,4):void 0}}function Ts(u,m){this.i=u,this.h=m,this.m=0}function Ua(u,m,v){return La(u,m),typeof u.h.canvas.transferToImageBitmap=="function"?Promise.resolve(u.h.canvas.transferToImageBitmap()):v?Promise.resolve(u.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(u.h.canvas):(u.j===void 0&&(u.j=document.createElement("canvas")),new Promise(function(k){u.j.height=u.h.canvas.height,u.j.width=u.h.canvas.width,u.j.getContext("2d",{}).drawImage(u.h.canvas,0,0,u.h.canvas.width,u.h.canvas.height),k(u.j)}))}function La(u,m){var v=u.h;if(u.s===void 0){var k=Na(v,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),z=Na(v,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),B=v.createProgram();if(v.attachShader(B,k),v.attachShader(B,z),v.linkProgram(B),!v.getProgramParameter(B,v.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+v.getProgramInfoLog(B));k=u.s=B,v.useProgram(k),z=v.getUniformLocation(k,"sampler0"),u.l={O:v.getAttribLocation(k,"aVertex"),N:v.getAttribLocation(k,"aTex"),ya:z},u.v=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,u.v),v.enableVertexAttribArray(u.l.O),v.vertexAttribPointer(u.l.O,2,v.FLOAT,!1,0,0),v.bufferData(v.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),v.STATIC_DRAW),v.bindBuffer(v.ARRAY_BUFFER,null),u.u=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,u.u),v.enableVertexAttribArray(u.l.N),v.vertexAttribPointer(u.l.N,2,v.FLOAT,!1,0,0),v.bufferData(v.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),v.STATIC_DRAW),v.bindBuffer(v.ARRAY_BUFFER,null),v.uniform1i(z,0)}k=u.l,v.useProgram(u.s),v.canvas.width=m.width,v.canvas.height=m.height,v.viewport(0,0,m.width,m.height),v.activeTexture(v.TEXTURE0),u.i.bindTexture2d(m.glName),v.enableVertexAttribArray(k.O),v.bindBuffer(v.ARRAY_BUFFER,u.v),v.vertexAttribPointer(k.O,2,v.FLOAT,!1,0,0),v.enableVertexAttribArray(k.N),v.bindBuffer(v.ARRAY_BUFFER,u.u),v.vertexAttribPointer(k.N,2,v.FLOAT,!1,0,0),v.bindFramebuffer(v.DRAW_FRAMEBUFFER?v.DRAW_FRAMEBUFFER:v.FRAMEBUFFER,null),v.clearColor(0,0,0,0),v.clear(v.COLOR_BUFFER_BIT),v.colorMask(!0,!0,!0,!0),v.drawArrays(v.TRIANGLE_FAN,0,4),v.disableVertexAttribArray(k.O),v.disableVertexAttribArray(k.N),v.bindBuffer(v.ARRAY_BUFFER,null),u.i.bindTexture2d(0)}function Fa(u){this.h=u}var ja=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Sl(u,m){return m+u}function Va(u,m){window[u]=m}function Wa(u){var m=document.createElement("script");return m.setAttribute("src",u),m.setAttribute("crossorigin","anonymous"),new Promise(function(v){m.addEventListener("load",function(){v()},!1),m.addEventListener("error",function(){v()},!1),document.body.appendChild(m)})}function qa(){return ae(function(u){switch(u.h){case 1:return u.s=2,C(u,WebAssembly.instantiate(ja),4);case 4:u.h=3,u.s=0;break;case 2:return u.s=0,u.l=null,u.return(!1);case 3:return u.return(!0)}})}function yn(u){if(this.h=u,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=u&&u.locateFile||Sl,typeof window=="object")var m=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")m=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=m,u.options){m=o(Object.keys(u.options));for(var v=m.next();!v.done;v=m.next()){v=v.value;var k=u.options[v].default;k!==void 0&&(this.l[v]=typeof k=="function"?k():k)}}}e=yn.prototype,e.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function kl(u){var m,v,k,z,B,R,F,G,fe,_e,Ne;return ae(function(Me){switch(Me.h){case 1:return u.ga?(m=u.h.files===void 0?[]:typeof u.h.files=="function"?u.h.files(u.l):u.h.files,C(Me,qa(),2)):Me.return();case 2:if(v=Me.i,typeof window=="object")return Va("createMediapipeSolutionsWasm",{locateFile:u.locateFile}),Va("createMediapipeSolutionsPackedAssets",{locateFile:u.locateFile}),R=m.filter(function($e){return $e.data!==void 0}),F=m.filter(function($e){return $e.data===void 0}),G=Promise.all(R.map(function($e){var De=rs(u,$e.url);if($e.path!==void 0){var Ge=$e.path;De=De.then(function(wt){return u.overrideFile(Ge,wt),Promise.resolve(wt)})}return De})),fe=Promise.all(F.map(function($e){return $e.simd===void 0||$e.simd&&v||!$e.simd&&!v?Wa(u.locateFile($e.url,u.ha)):Promise.resolve()})).then(function(){var $e,De,Ge;return ae(function(wt){if(wt.h==1)return $e=window.createMediapipeSolutionsWasm,De=window.createMediapipeSolutionsPackedAssets,Ge=u,C(wt,$e(De),2);Ge.i=wt.i,wt.h=0})}),_e=function(){return ae(function($e){return u.h.graph&&u.h.graph.url?$e=C($e,rs(u,u.h.graph.url),0):($e.h=0,$e=void 0),$e})}(),C(Me,Promise.all([fe,G,_e]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return k=m.filter(function($e){return $e.simd===void 0||$e.simd&&v||!$e.simd&&!v}).map(function($e){return u.locateFile($e.url,u.ha)}),importScripts.apply(null,l(k)),z=u,C(Me,createMediapipeSolutionsWasm(Module),6);case 6:z.i=Me.i,u.m=new OffscreenCanvas(1,1),u.i.canvas=u.m,B=u.i.GL.createContext(u.m,{antialias:!1,alpha:!1,va:typeof WebGL2RenderingContext<"u"?2:1}),u.i.GL.makeContextCurrent(B),Me.h=4;break;case 7:if(u.m=document.createElement("canvas"),Ne=u.m.getContext("webgl2",{}),!Ne&&(Ne=u.m.getContext("webgl",{}),!Ne))return alert("Failed to create WebGL canvas context when passing video frame."),Me.return();u.K=Ne,u.i.canvas=u.m,u.i.createContext(u.m,!0,!0,{});case 4:u.j=new u.i.SolutionWasm,u.ga=!1,Me.h=0}})}function Ha(u){var m,v,k,z,B,R,F,G;return ae(function(fe){if(fe.h==1){if(u.h.graph&&u.h.graph.url&&u.fa===u.h.graph.url)return fe.return();if(u.u=!0,!u.h.graph||!u.h.graph.url){fe.h=2;return}return u.fa=u.h.graph.url,C(fe,rs(u,u.h.graph.url),3)}for(fe.h!=2&&(m=fe.i,u.j.loadGraph(m)),v=o(Object.keys(u.D)),k=v.next();!k.done;k=v.next())z=k.value,u.j.overrideFile(z,u.D[z]);if(u.D={},u.h.listeners)for(B=o(u.h.listeners),R=B.next();!R.done;R=B.next())F=R.value,Ga(u,F);G=u.l,u.l={},u.setOptions(G),fe.h=0})}e.reset=function(){var u=this;return ae(function(m){u.j&&(u.j.reset(),u.s={},u.v={}),m.h=0})},e.setOptions=function(u,m){var v=this;if(m=m||this.h.options){for(var k=[],z=[],B={},R=o(Object.keys(u)),F=R.next();!F.done;B={X:B.X,Y:B.Y},F=R.next())if(F=F.value,!(F in this.l&&this.l[F]===u[F])){this.l[F]=u[F];var G=m[F];G!==void 0&&(G.onChange&&(B.X=G.onChange,B.Y=u[F],k.push(function(fe){return function(){var _e;return ae(function(Ne){if(Ne.h==1)return C(Ne,fe.X(fe.Y),2);_e=Ne.i,_e===!0&&(v.u=!0),Ne.h=0})}}(B))),G.graphOptionXref&&(F=Object.assign({},{calculatorName:"",calculatorIndex:0},G.graphOptionXref,{valueNumber:G.type===1?u[F]:0,valueBoolean:G.type===0?u[F]:!1,valueString:G.type===2?u[F]:""}),z.push(F)))}(k.length!==0||z.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(z),this.F=(this.F===void 0?[]:this.F).concat(k))}};function Tl(u){var m,v,k,z,B,R,F;return ae(function(G){switch(G.h){case 1:if(!u.u)return G.return();if(!u.F){G.h=2;break}m=o(u.F),v=m.next();case 3:if(v.done){G.h=5;break}return k=v.value,C(G,k(),4);case 4:v=m.next(),G.h=3;break;case 5:u.F=void 0;case 2:if(u.H){for(z=new u.i.GraphOptionChangeRequestList,B=o(u.H),R=B.next();!R.done;R=B.next())F=R.value,z.push_back(F);u.j.changeOptions(z),z.delete(),u.H=void 0}u.u=!1,G.h=0}})}e.initialize=function(){var u=this;return ae(function(m){return m.h==1?C(m,kl(u),2):m.h!=3?C(m,Ha(u),3):C(m,Tl(u),0)})};function rs(u,m){var v,k;return ae(function(z){return m in u.L?z.return(u.L[m]):(v=u.locateFile(m,""),k=fetch(v).then(function(B){return B.arrayBuffer()}),u.L[m]=k,z.return(k))})}e.overrideFile=function(u,m){this.j?this.j.overrideFile(u,m):this.D[u]=m},e.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},e.send=function(u,m){var v=this,k,z,B,R,F,G,fe,_e,Ne;return ae(function(Me){switch(Me.h){case 1:return v.h.inputs?(k=1e3*(m??performance.now()),C(Me,v.I,2)):Me.return();case 2:return C(Me,v.initialize(),3);case 3:for(z=new v.i.PacketDataList,B=o(Object.keys(u)),R=B.next();!R.done;R=B.next())if(F=R.value,G=v.h.inputs[F]){e:{var $e=u[F];switch(G.type){case"video":var De=v.s[G.stream];if(De||(De=new Ts(v.i,v.K),v.s[G.stream]=De),De.m===0&&(De.m=De.i.createTexture()),typeof HTMLVideoElement<"u"&&$e instanceof HTMLVideoElement)var Ge=$e.videoWidth,wt=$e.videoHeight;else typeof HTMLImageElement<"u"&&$e instanceof HTMLImageElement?(Ge=$e.naturalWidth,wt=$e.naturalHeight):(Ge=$e.width,wt=$e.height);wt={glName:De.m,width:Ge,height:wt},Ge=De.h,Ge.canvas.width=wt.width,Ge.canvas.height=wt.height,Ge.activeTexture(Ge.TEXTURE0),De.i.bindTexture2d(De.m),Ge.texImage2D(Ge.TEXTURE_2D,0,Ge.RGBA,Ge.RGBA,Ge.UNSIGNED_BYTE,$e),De.i.bindTexture2d(0),De=wt;break e;case"detections":for(De=v.s[G.stream],De||(De=new Fa(v.i),v.s[G.stream]=De),De.data||(De.data=new De.h.DetectionListData),De.data.reset($e.length),wt=0;wt<$e.length;++wt){Ge=$e[wt];var gt=De.data,Ut=gt.setBoundingBox,ar=wt,Yt=Ge.la,lt=new ts;if(Mt(lt,1,Yt.sa),Mt(lt,2,Yt.ta),Mt(lt,3,Yt.height),Mt(lt,4,Yt.width),Mt(lt,5,Yt.rotation),br(lt,6,Yt.pa),Yt=lt.l(),Ut.call(gt,ar,Yt),Ge.ea)for(gt=0;gt<Ge.ea.length;++gt){lt=Ge.ea[gt],Ut=De.data,ar=Ut.addNormalizedLandmark,Yt=wt,lt=Object.assign({},lt,{visibility:lt.visibility?lt.visibility:0});var Lt=new bi;Mt(Lt,1,lt.x),Mt(Lt,2,lt.y),Mt(Lt,3,lt.z),lt.visibility&&Mt(Lt,4,lt.visibility),lt=Lt.l(),ar.call(Ut,Yt,lt)}if(Ge.ba)for(gt=0;gt<Ge.ba.length;++gt)Ut=De.data,ar=Ut.addClassification,Yt=wt,lt=Ge.ba[gt],Lt=new Nn,Mt(Lt,2,lt.qa),lt.index&&br(Lt,1,lt.index),lt.label&&br(Lt,3,lt.label),lt.displayName&&br(Lt,4,lt.displayName),lt=Lt.l(),ar.call(Ut,Yt,lt)}De=De.data;break e;default:De={}}}switch(fe=De,_e=G.stream,G.type){case"video":z.pushTexture2d(Object.assign({},fe,{stream:_e,timestamp:k}));break;case"detections":Ne=fe,Ne.stream=_e,Ne.timestamp=k,z.pushDetectionList(Ne);break;default:throw Error("Unknown input config type: '"+G.type+"'")}}return v.j.send(z),C(Me,v.I,4);case 4:z.delete(),Me.h=0}})};function Cl(u,m,v){var k,z,B,R,F,G,fe,_e,Ne,Me,$e,De,Ge,wt;return ae(function(gt){switch(gt.h){case 1:if(!v)return gt.return(m);for(k={},z=0,B=o(Object.keys(v)),R=B.next();!R.done;R=B.next())F=R.value,G=v[F],typeof G!="string"&&G.type==="texture"&&m[G.stream]!==void 0&&++z;1<z&&(u.M=!1),fe=o(Object.keys(v)),R=fe.next();case 2:if(R.done){gt.h=4;break}if(_e=R.value,Ne=v[_e],typeof Ne=="string")return Ge=k,wt=_e,C(gt,Cs(u,_e,m[Ne]),14);if(Me=m[Ne.stream],Ne.type==="detection_list"){if(Me){for(var Ut=Me.getRectList(),ar=Me.getLandmarksList(),Yt=Me.getClassificationsList(),lt=[],Lt=0;Lt<Ut.size();++Lt){var Qr=_l(Ut.get(Lt)),Ya=kr(Qr,1),Za=kr(Qr,2),ns=kr(Qr,3),Cr=kr(Qr,4),vi=kr(Qr,5,0),Ln=void 0;Ln=Ln===void 0?0:Ln,Qr={la:{sa:Ya,ta:Za,height:ns,width:Cr,rotation:vi,pa:Bn(Pt(Qr,6),Ln)},ea:ci(Pa(ar.get(Lt)),bi,1).map($l),ba:xl(vl(Yt.get(Lt)))},lt.push(Qr)}Ut=lt}else Ut=[];k[_e]=Ut,gt.h=7;break}if(Ne.type==="proto_list"){if(Me){for(Ut=Array(Me.size()),ar=0;ar<Me.size();ar++)Ut[ar]=Me.get(ar);Me.delete()}else Ut=[];k[_e]=Ut,gt.h=7;break}if(Me===void 0){gt.h=3;break}if(Ne.type==="float_list"){k[_e]=Me,gt.h=7;break}if(Ne.type==="proto"){k[_e]=Me,gt.h=7;break}if(Ne.type!=="texture")throw Error("Unknown output config type: '"+Ne.type+"'");return $e=u.v[_e],$e||($e=new Ts(u.i,u.K),u.v[_e]=$e),C(gt,Ua($e,Me,u.M),13);case 13:De=gt.i,k[_e]=De;case 7:Ne.transform&&k[_e]&&(k[_e]=Ne.transform(k[_e])),gt.h=3;break;case 14:Ge[wt]=gt.i;case 3:R=fe.next(),gt.h=2;break;case 4:return gt.return(k)}})}function Cs(u,m,v){var k;return ae(function(z){return typeof v=="number"||v instanceof Uint8Array||v instanceof u.i.Uint8BlobList?z.return(v):v instanceof u.i.Texture2dDataOut?(k=u.v[m],k||(k=new Ts(u.i,u.K),u.v[m]=k),z.return(Ua(k,v,u.M))):z.return(void 0)})}function Ga(u,m){for(var v=m.name||"$",k=[].concat(l(m.wants)),z=new u.i.StringList,B=o(m.wants),R=B.next();!R.done;R=B.next())z.push_back(R.value);B=u.i.PacketListener.implement({onResults:function(F){for(var G={},fe=0;fe<m.wants.length;++fe)G[k[fe]]=F.get(fe);var _e=u.listeners[v];_e&&(u.I=Cl(u,G,m.outs).then(function(Ne){Ne=_e(Ne);for(var Me=0;Me<m.wants.length;++Me){var $e=G[k[Me]];typeof $e=="object"&&$e.hasOwnProperty&&$e.hasOwnProperty("delete")&&$e.delete()}Ne&&(u.I=Ne)}))}}),u.j.attachMultiListener(z,B),z.delete()}e.onResults=function(u,m){this.listeners[m||"$"]=u},te("Solution",yn),te("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Ka(u){switch(u===void 0&&(u=0),u){case 1:return"selfie_segmentation_landscape.tflite";default:return"selfie_segmentation.tflite"}}function Xa(u){var m=this;u=u||{},this.h=new yn({locateFile:u.locateFile,files:function(v){return[{simd:!0,url:"selfie_segmentation_solution_simd_wasm_bin.js"},{simd:!1,url:"selfie_segmentation_solution_wasm_bin.js"},{data:!0,url:Ka(v.modelSelection)}]},graph:{url:"selfie_segmentation.binarypb"},listeners:[{wants:["segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelSelection:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelSelection",fieldName:"int_value"},onChange:function(v){var k,z,B;return ae(function(R){return R.h==1?(k=Ka(v),z="third_party/mediapipe/modules/selfie_segmentation/"+k,C(R,rs(m.h,k),2)):(B=R.i,m.h.overrideFile(z,B),R.return(!0))})}}}})}e=Xa.prototype,e.close=function(){return this.h.close(),Promise.resolve()},e.onResults=function(u){this.h.onResults(u)},e.initialize=function(){var u=this;return ae(function(m){return C(m,u.h.initialize(),0)})},e.reset=function(){this.h.reset()},e.send=function(u){var m=this;return ae(function(v){return C(v,m.h.send(u),0)})},e.setOptions=function(u){this.h.setOptions(u)},te("SelfieSegmentation",Xa),te("VERSION","0.1.1675465747")}).call(Zl);class Ox{segmenter=null;isLoaded=!1;isProcessing=!1;lastProcessTime=0;targetFps=15;frameInterval=1e3/15;downsampleCanvas;downsampleCtx;onResultCallback;constructor(){this.downsampleCanvas=document.createElement("canvas"),this.downsampleCanvas.width=256,this.downsampleCanvas.height=256,this.downsampleCtx=this.downsampleCanvas.getContext("2d",{willReadFrequently:!0})}async init(t="/mediapipe/"){if(!this.isLoaded)try{this.segmenter=new sy.SelfieSegmentation({locateFile:r=>`/mediapipe/${r}`}),this.segmenter.setOptions({modelSelection:0,selfieMode:!1}),this.segmenter.onResults(r=>{this.isProcessing=!1,this.onResultCallback&&r.segmentationMask&&this.onResultCallback(r.segmentationMask,r.image)}),await this.segmenter.initialize(),this.isLoaded=!0,console.log("[RealtimeSegmenter] MediaPipe SelfieSegmentation 初始化成功")}catch(r){console.warn("[RealtimeSegmenter] MediaPipe 初始化降级提示:",r)}}setOnResult(t){this.onResultCallback=t}async sendFrame(t){if(!this.segmenter||!this.isLoaded)return!1;const r=performance.now();if(r-this.lastProcessTime<this.frameInterval||this.isProcessing)return!1;this.lastProcessTime=r,this.isProcessing=!0;try{if(this.downsampleCtx)return this.downsampleCtx.drawImage(t,0,0,256,256),await this.segmenter.send({image:this.downsampleCanvas}),!0}catch(n){this.isProcessing=!1,console.error("[RealtimeSegmenter] sendFrame 错误:",n)}return!1}renderComposite(t,r,n,i,s=!1){const a=t.getContext("2d");if(!a)return;const o=t.width,l=t.height;if(a.save(),s&&(a.translate(o,0),a.scale(-1,1)),a.clearRect(0,0,o,l),i.isGradient&&i.gradientStops){const p=a.createLinearGradient(0,0,0,l);p.addColorStop(0,i.gradientStops[0]),p.addColorStop(1,i.gradientStops[1]),a.fillStyle=p}else a.fillStyle=i.value||"#FFFFFF";a.fillRect(0,0,o,l),a.save(),a.globalCompositeOperation="source-over";const d=document.createElement("canvas");d.width=o,d.height=l;const f=d.getContext("2d");if(f){f.drawImage(n,0,0,o,l);const p=f.getImageData(0,0,o,l),g=p.data;for(let b=0;b<g.length;b+=4)g[b+3]=g[b];f.putImageData(p,0,0),f.globalCompositeOperation="source-in",f.drawImage(r,0,0,o,l),a.drawImage(d,0,0,o,l)}a.restore(),a.restore()}destroy(){this.segmenter&&(this.segmenter.close(),this.segmenter=null),this.isLoaded=!1}}/*!
 * ONNX Runtime Web v1.30.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Hd=Object.defineProperty,zx=Object.getOwnPropertyDescriptor,Mx=Object.getOwnPropertyNames,Rx=Object.prototype.hasOwnProperty,Bx=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),pe=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(n){throw r=[n],n}},ys=(e,t)=>{for(var r in t)Hd(e,r,{get:t[r],enumerable:!0})},Px=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Mx(t))!Rx.call(e,i)&&i!==r&&Hd(e,i,{get:()=>t[i],enumerable:!(n=zx(t,i))||n.enumerable});return e},pa=e=>Px(Hd({},"__esModule",{value:!0}),e),zs,Vn,os,np,ay,oy=pe(()=>{"use strict";zs=new Map,Vn=[],os=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=zs.get(e);if(n===void 0)zs.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=Vn.indexOf(e);i!==-1&&Vn.splice(i,1);for(let s=0;s<Vn.length;s++)if(zs.get(Vn[s]).priority<=r){Vn.splice(s,0,e);return}Vn.push(e)}return}throw new TypeError("not a valid backend")},np=async e=>{let t=zs.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ay=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),n=r.length===0?Vn:r,i,s=[],a=new Set;for(let l of n){let d=await np(l);typeof d=="string"?s.push({name:l,err:d}):(i||(i=d),i===d&&a.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>a.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),Dx=pe(()=>{"use strict";oy()}),ly,Nx=pe(()=>{"use strict";ly="1.30.0"}),Ql,Gt,uy=pe(()=>{"use strict";Nx(),Ql="warning",Gt={wasm:{},webgl:{},webgpu:{},versions:{common:ly},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ql=e}},get logLevel(){return Ql}},Object.defineProperty(Gt,"logLevel",{enumerable:!0})}),_t,Ux=pe(()=>{"use strict";uy(),_t=Gt}),dy,cy,Lx=pe(()=>{"use strict";dy=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let a=t?.format!==void 0?t.format:"RGB",o=t?.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let f=s*i,p=0,g=f,b=f*2,y=-1;a==="RGBA"?(p=0,g=f,b=f*2,y=f*3):a==="RGB"?(p=0,g=f,b=f*2):a==="RBG"&&(p=0,b=f,g=f*2);for(let $=0;$<s;$++)for(let E=0;E<i;E++){let S=(e.data[p++]-d[0])*l[0],x=(e.data[g++]-d[1])*l[1],A=(e.data[b++]-d[2])*l[2],C=y===-1?255:(e.data[y++]-d[3])*l[3];n.fillStyle="rgba("+S+","+x+","+A+","+C+")",n.fillRect(E,$,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},cy=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,s,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],a=e.dims[3]):(i=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,f;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?f=[0,0,0,0]:typeof l.bias=="number"?f=[l.bias,l.bias,l.bias,l.bias]:(f=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(f[3]=l.bias[3]));let p=s*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,b=0,y=1,$=2,E=3,S=0,x=p,A=p*2,C=-1;o==="RGBA"?(S=0,x=p,A=p*2,C=p*3):o==="RGB"?(S=0,x=p,A=p*2):o==="RBG"&&(S=0,A=p,x=p*2),n=r.createImageData(i,s);for(let O=0;O<s*i;b+=g,y+=g,$+=g,E+=g,O++)n.data[b]=(e.data[S++]-f[0])*d[0],n.data[y]=(e.data[x++]-f[1])*d[1],n.data[$]=(e.data[A++]-f[2])*d[2],n.data[E]=C===-1?255:(e.data[C++]-f[3])*d[3]}else throw new Error("Can not access image data");return n}}),oo,fy,py,hy,my,gy,Fx=pe(()=>{"use strict";Gd(),oo=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},s,a;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,f=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),p=4,g=0,b=1,y=2,$=3,E=0,S=d,x=d*2,A=-1;o==="RGB"&&(p=3,g=0,b=1,y=2,$=-1),l==="RGBA"?A=d*3:l==="RBG"?(E=0,x=d,S=d*2):l==="BGR"&&(x=0,S=d,E=d*2);for(let C=0;C<d;C++,g+=p,y+=p,b+=p,$+=p)f[E++]=(e[g]+a[0])/s[0],f[S++]=(e[b]+a[1])/s[1],f[x++]=(e[y]+a[2])/s[2],A!==-1&&$!==-1&&(f[A++]=(e[$]+a[3])/s[3]);return l==="RGBA"?new wr("float32",f,[1,4,r,n]):new wr("float32",f,[1,3,r,n])},fy=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=l();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let g=e.height,b=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,b=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=g,o.width=b}else o.tensorFormat="RGBA",o.height=g,o.width=b;p.drawImage(e,0,0),a=p.getImageData(0,0,b,g).data}else throw new Error("Can not access image data")}else if(n){let f,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,p=t.resizedWidth):(f=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=f,o.width=p,t!==void 0){let g=l();g.width=p,g.height=f;let b=d(g);if(b!=null)b.putImageData(e,0,0),a=b.getImageData(0,0,p,f).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=l();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let g=e.height,b=e.width;return p.drawImage(e,0,0,b,g),a=p.getImageData(0,0,b,g).data,o.height=g,o.width=b,oo(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((f,p)=>{let g=l(),b=d(g);if(!e||!b)return p();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{g.width=y.width,g.height=y.height,b.drawImage(y,0,0,g.width,g.height);let $=b.getImageData(0,0,g.width,g.height);o.height=g.height,o.width=g.width,f(oo($.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return oo(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},py=(e,t)=>{let{width:r,height:n,download:i,dispose:s}=t,a=[1,n,r,4];return new wr({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:s})},hy=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new wr({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:s})},my=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new wr({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:s})},gy=(e,t,r)=>new wr({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Oi,qs,Jl,yy,jx=pe(()=>{"use strict";Oi=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),qs=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Jl=!1,yy=()=>{if(!Jl){Jl=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(Oi.set("int64",BigInt64Array),qs.set(BigInt64Array,"int64")),t&&(Oi.set("uint64",BigUint64Array),qs.set(BigUint64Array,"uint64")),n?(Oi.set("float16",r),qs.set(r,"float16")):Oi.set("float16",Uint16Array)}}}),by,vy,Vx=pe(()=>{"use strict";Gd(),by=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},vy=(e,t)=>{switch(e.location){case"cpu":return new wr(e.type,e.data,t);case"cpu-pinned":return new wr({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new wr({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new wr({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new wr({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),wr,Gd=pe(()=>{"use strict";Lx(),Fx(),jx(),Vx(),wr=class{constructor(e,t,r){yy();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=Oi.get(n);if(!a)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let l=Oi.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?a=l.from(t,BigInt):a=l.from(t)}else if(t instanceof l)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")n="string",a=e;else if(l==="boolean")n="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",a=Uint8Array.from(e);else{let l=qs.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=l,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=a,this.dataLocation="cpu"}let s=by(i);if(this.cpuData&&s!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=s}static async fromImage(e,t){return fy(e,t)}static fromTexture(e,t){return py(e,t)}static fromGpuBuffer(e,t){return hy(e,t)}static fromMLTensor(e,t){return my(e,t)}static fromPinnedBuffer(e,t,r){return gy(e,t,r)}toDataURL(e){return dy(this,e)}toImageData(e){return cy(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return vy(this,e)}}}),qr,wy=pe(()=>{"use strict";Gd(),qr=wr}),Uo,eu,fn,Kr,Ui,Li,_y=pe(()=>{"use strict";uy(),Uo=(e,t)=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||console.timeStamp(`${e}::ORT::${t}`)},eu=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Uo("CPU",s);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},fn=e=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||eu("BEGIN",e)},Kr=e=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||eu("END",e)},Ui=e=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||console.time(`ORT::${e}`)},Li=e=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||console.timeEnd(`ORT::${e}`)}}),xy,Wx=pe(()=>{"use strict";oy(),wy(),_y(),xy=class $y{constructor(t){this.handler=t}async run(t,r,n){fn(),Ui("InferenceSession.run");let i={},s={};if(typeof t!="object"||t===null||t instanceof qr||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof qr)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,f=Object.getOwnPropertyNames(r);for(let p of this.outputNames)if(f.indexOf(p)!==-1){let g=r[p];(g===null||g instanceof qr)&&(d=!0,a=!1,i[p]=g)}if(d){if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,s),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let f=o[d];f instanceof qr?l[d]=f:l[d]=new qr(f.type,f.data,f.dims)}return Li("InferenceSession.run"),Kr(),l}async release(){return this.handler.dispose()}static async create(t,r,n,i){fn(),Ui("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,p=0,g=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(g=t.byteLength-p,typeof n=="number"){if(g=n,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||p+g>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-p}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(f,p,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await ay(a),d=await o.createInferenceSessionHandler(s,l);return Li("InferenceSession.create"),Kr(),new $y(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Lo,qx=pe(()=>{"use strict";Wx(),Lo=xy}),Hx=pe(()=>{"use strict"}),Gx=pe(()=>{"use strict"}),Kx=pe(()=>{"use strict"}),Xx=pe(()=>{"use strict"}),Yx={};ys(Yx,{InferenceSession:()=>Lo,TRACE:()=>Uo,TRACE_EVENT_BEGIN:()=>Ui,TRACE_EVENT_END:()=>Li,TRACE_FUNC_BEGIN:()=>fn,TRACE_FUNC_END:()=>Kr,Tensor:()=>qr,env:()=>_t,registerBackend:()=>os});var Br=pe(()=>{"use strict";Dx(),Ux(),qx(),wy(),Hx(),Gx(),_y(),Kx(),Xx()}),Kd=pe(()=>{"use strict"}),Sy={};ys(Sy,{default:()=>ky});var tu,ru,ky,Zx=pe(()=>{"use strict";M1(),Wi(),Xd(),tu="ort-wasm-proxy-worker",ru=globalThis.self?.name===tu,ru&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Yd(r.wasm).then(()=>{pc(r).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})})},n=>{postMessage({type:t,err:n})});break;case"init-ep":{let{epName:n,env:i}=r;hc(i,n).then(()=>{postMessage({type:t})},s=>{postMessage({type:t,err:s})});break}case"copy-from":{let{buffer:n}=r,i=Go(n);postMessage({type:t,out:i});break}case"create":{let{model:n,options:i}=r;mc(n,i).then(s=>{postMessage({type:t,out:s})},s=>{postMessage({type:t,err:s})});break}case"release":gc(r),postMessage({type:t});break;case"run":{let{sessionId:n,inputIndices:i,inputs:s,outputIndices:a,options:o}=r;yc(n,i,s,a,new Array(a.length).fill(null),o).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},vc([...s,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":bc(r),postMessage({type:t});break;default:}}catch(n){postMessage({type:t,err:n})}}),ky=ru?null:e=>new Worker(e??vr,{type:"module",name:tu})}),Ty={};ys(Ty,{default:()=>Cy});async function ip(e={}){var t=e,r=!!globalThis.window,n=!!globalThis.WorkerGlobalScope,i=n&&self.name?.startsWith("em-pthread");t.mountExternalData=(c,h)=>{c.startsWith("./")&&(c=c.substring(2)),(t.ad||(t.ad=new Map)).set(c,h)},t.unmountExternalData=()=>{delete t.ad,delete t.Yd,delete t.Xd,delete t.be},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=c=>async(...h)=>{try{if(t.$c)throw Error("Session already started");let _=t.$c={Nd:h[0],errors:[]},w=await c(...h);if(t.$c!==_)throw Error("Session mismatch");t.hd?.flush();let I=_.errors;if(0<I.length){let P=await Promise.all(I);if(P=P.filter(V=>V),0<P.length)throw Error(P.join(`
`))}return w}finally{t.$c=null}};t.jsepInit=(c,h)=>{if(c==="webgpu"){[t.hd,t.Dd,t.Hd,t.jd,t.Gd,t.bc,t.Id,t.Kd,t.Ed,t.Fd,t.Jd]=h;let _=t.hd;t.jsepRegisterBuffer=(w,I,P,V)=>_.registerBuffer(w,I,P,V),t.jsepGetBuffer=w=>_.getBuffer(w),t.jsepCreateDownloader=(w,I,P)=>_.createDownloader(w,I,P),t.jsepOnCreateSession=w=>{_.onCreateSession(w)},t.jsepOnReleaseSession=w=>{_.onReleaseSession(w)},t.jsepOnRunStart=w=>_.onRunStart(w),t.Ld=(w,I)=>{_.upload(w,I)}}else if(c==="webnn"){let _=h[0];[t.Vd,t.vd,t.webnnEnsureTensor,t.wd,t.webnnDownloadTensor,t.Ud,t.webnnEnableTraceEvent]=h.slice(1),t.webnnReleaseTensorId=t.vd,t.webnnUploadTensor=t.wd,t.webnnRegisterMLContext=t.Ud,t.webnnOnRunStart=w=>_.onRunStart(w),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=w=>{_.onReleaseSession(w)},t.webnnCreateMLTensorDownloader=(w,I)=>_.createMLTensorDownloader(w,I),t.webnnRegisterMLTensor=(w,I,P,V)=>_.registerMLTensor(w,I,P,V),t.webnnCreateMLContext=w=>_.createMLContext(w),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let a=()=>{let c=h=>(..._)=>{let w=Tr;return _=h(..._),Tr!=w?new Promise((I,P)=>{sr={resolve:I,reject:P}}):_};(()=>{for(let h of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[h]=c(t[h])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a?.()};var o,l,d=(c,h)=>{throw h},f=import.meta.url,p="";if(r||n){try{p=new URL(".",f).href}catch{}n&&(l=c=>{var h=new XMLHttpRequest;return h.open("GET",c,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),o=async c=>{if(N(c))return new Promise((_,w)=>{var I=new XMLHttpRequest;I.open("GET",c,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?_(I.response):w(I.status)},I.onerror=w,I.send(null)});var h=await fetch(c,{credentials:"same-origin"});if(h.ok)return h.arrayBuffer();throw Error(h.status+" : "+h.url)}}var g,b,y,$,E,S,x=console.log.bind(console),A=console.error.bind(console),C=x,O=A,D=!1,N=c=>c.startsWith("file://");function T(){Ve.buffer!=Y.buffer&&xe()}if(i){let c=function(h){try{var _=h.data,w=_.Vc;if(w==="load"){let I=[];self.onmessage=P=>I.push(P),S=()=>{postMessage({Vc:"loaded"});for(let P of I)c(P);self.onmessage=c};for(let P of _.Ad)t[P]&&!t[P].proxy||(t[P]=(...V)=>{postMessage({Vc:"callHandler",yd:P,args:V})},P=="print"&&(C=t[P]),P=="printErr"&&(O=t[P]));Ve=_.Rd,xe(),b=_.Sd,bt(),Qa()}else if(w==="run"){(function(I){var P=(T(),te)[I+52>>>2>>>0];I=(T(),te)[I+56>>>2>>>0],kc(P,P-I),Ke(P)})(_.Uc),Ln(_.Uc,0,0,1,0,0),Ie(),Pn(_.Uc),W||(Za(),W=!0);try{rt(_.Pd,_.ed)}catch(I){if(I!="unwind")throw I}}else _.target!=="setimmediate"&&(w==="checkMailbox"?W&&hi():w&&(O(`worker: received unknown command ${w}`),O(_)))}catch(I){throw wc(),I}};var W=!1;self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=c}var Y,ae,X,le,q,te,ce,ue,Q,we,Te,re=!1;function xe(){var c=Ve.buffer;t.HEAP8=Y=new Int8Array(c),X=new Int16Array(c),t.HEAPU8=ae=new Uint8Array(c),le=new Uint16Array(c),t.HEAP32=q=new Int32Array(c),t.HEAPU32=te=new Uint32Array(c),ce=new Float32Array(c),ue=new Float64Array(c),Q=new BigInt64Array(c),we=new BigUint64Array(c)}function Se(){re=!0,i?S():bn.ub()}function be(c){throw O(c="Aborted("+c+")"),D=!0,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),E?.(c),c}function et(){return{a:{ma:G1,hb:H1,g:Qt,J:$r,f:Sr,o:Rn,i:fr,$:pn,b:Hi,S:Gi,Ha:ii,n:Pr,aa:Nt,Ya:jt,Da:Jt,Fa:Vt,Za:er,Wa:bs,Pa:Et,Va:gr,ka:Ki,Ea:wa,Ba:si,Xa:Xi,Ca:ai,cb:oi,fa:di,wa:vs,ua:Zi,ea:_a,N:ws,H:dl,va:xa,_:Ca,xa:cl,Sa:fl,za:Ia,Ia:pl,sa:hl,ga:ml,Ra:Pn,$a:gl,Q:za,r:bl,c:ci,ib:vl,y:bi,M:Ra,D:Ba,l:wl,s:Pa,jb:ts,I:Da,R:_l,j:Na,u:xl,q:$l,k:Ts,Ma:Ua,Na:Sl,Oa:Va,Ka:Wa,La:qa,ta:Ha,eb:Tl,bb:Cl,v:Ka,ba:Xa,ha:u,ab:rs,V:m,_a:v,Aa:k,F:kl,U:z,la:fe,ya:_e,gb:G,fb:Ne,Ta:Ge,Ua:wt,Ga:ge,T:gt,Ja:Ut,ja:ar,Qa:Yt,ia:Lt,lb:Aw,na:kw,mb:Iw,oa:Sw,G:pw,e:Z1,t:X1,w:K1,B:ow,nb:_w,Z:ww,x:ew,pa:xw,X:Tw,ca:vw,ob:bw,pb:yw,O:lw,qb:mw,qa:gw,rb:hw,L:cw,Y:$w,d:Y1,A:J1,m:Q1,kb:Ow,p:rw,z:nw,C:tw,E:iw,K:uw,ra:fw,P:Cw,da:dw,W:Ew,sb:aw,tb:sw,h:Qr,a:Ve,db:ie}}}async function bt(){function c(w,I){var P=bn=w.exports;w={};for(let[V,ee]of Object.entries(P))typeof ee=="function"?(P=mi(ee),w[V]=P):w[V]=ee;return bn=w,bn=function(){var V=bn,ee=ke=>je=>ke(je)>>>0,ve=ke=>()=>ke()>>>0;return(V=Object.assign({},V)).vb=ee(V.vb),V.Zb=ve(V.Zb),V.$b=ee(V.$b),V.nc=ee(V.nc),V.oc=ve(V.oc),V.sc=ee(V.sc),V}(),se.push(bn.ac),Ya=(w=bn).vb,Za=w.wb,t._OrtInit=w.xb,t._OrtGetLastError=w.yb,t._OrtCreateSessionOptions=w.zb,t._OrtAppendExecutionProvider=w.Ab,t._OrtAddFreeDimensionOverride=w.Bb,t._OrtAddSessionConfigEntry=w.Cb,t._OrtReleaseSessionOptions=w.Db,t._OrtCreateSession=w.Eb,t._OrtReleaseSession=w.Fb,t._OrtGetInputOutputCount=w.Gb,t._OrtGetInputOutputMetadata=w.Hb,t._OrtFree=w.Ib,t._OrtCreateTensor=w.Jb,t._OrtGetTensorData=w.Kb,t._OrtReleaseTensor=w.Lb,t._OrtCreateRunOptions=w.Mb,t._OrtAddRunConfigEntry=w.Nb,t._OrtReleaseRunOptions=w.Ob,t._OrtCreateBinding=w.Pb,t._OrtBindInput=w.Qb,t._OrtBindOutput=w.Rb,t._OrtClearBoundOutputs=w.Sb,t._OrtReleaseBinding=w.Tb,t._OrtRunWithBinding=w.Ub,t._OrtRun=w.Vb,t._OrtEndProfiling=w.Wb,t._JsepOutput=w.Xb,t._JsepGetNodeName=w.Yb,ns=w.Zb,Cr=t._free=w._b,vi=t._malloc=w.$b,Ln=w.cc,wc=w.dc,_c=w.ec,xc=w.fc,El=w.gc,$c=w.hc,Sc=w.ic,Je=w.jc,Es=w.kc,kc=w.lc,Ke=w.mc,Il=w.nc,Qe=w.oc,Tc=w.pc,Al=w.qc,Cc=w.rc,Ec=w.sc,Ic=w.tc,Ol=w.uc,Ac=w.vc,Oc=w.wc,zc=w.xc,Mc=w.yc,Rc=w.zc,Bc=w.Ac,Pc=w.Bc,Dc=w.Cc,Nc=w.Dc,Uc=w.Ec,Lc=w.Fc,Fc=w.Gc,jc=w.Hc,Vc=w.Ic,Wc=w.Jc,qc=w.Kc,Hc=w.Lc,Gc=w.Mc,Kc=w.Nc,Xc=w.Oc,Yc=w.Pc,Zc=w.Qc,Qc=w.Sc,Jc=w.Tc,ef=w.cd,tf=w.dd,rf=w.id,nf=w.nd,sf=w.od,af=w.pd,of=w.qd,lf=w.rd,uf=w.sd,df=w.td,cf=w.ud,ff=w.zd,pf=w.Zd,hf=w._d,mf=w.$d,gf=w.ae,b=I,bn}var h,_=et();return t.instantiateWasm?new Promise(w=>{t.instantiateWasm(_,(I,P)=>{w(c(I,P))})}):i?c(new WebAssembly.Instance(b,et()),b):(Te??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-MDYUKy93.wasm",import.meta.url).href,h=await async function(w){var I=Te;if(!g&&!N(I))try{var P=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(P,w)}catch(V){O(`wasm streaming compile failed: ${V}`),O("falling back to ArrayBuffer instantiation")}return async function(V,ee){try{var ve=await async function(ke){if(!g)try{var je=await o(ke);return new Uint8Array(je)}catch{}if(ke==Te&&g)ke=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";ke=l(ke)}return ke}(V);return await WebAssembly.instantiate(ve,ee)}catch(ke){O(`failed to asynchronously prepare wasm: ${ke}`),be(ke)}}(I,w)}(_),c(h.instance,h.module))}class tt{name="ExitStatus";constructor(h){this.message=`Program terminated with exit(${h})`,this.status=h}}var kt=c=>{c.terminate(),c.onmessage=()=>{}},He=[],dt=0,M=null,L=c=>{he.length==0&&(Ze(),ze(he[0]));var h=he.pop();if(!h)return 6;me.push(h),Ee[c.Uc]=h,h.Uc=c.Uc;var _={Vc:"run",Pd:c.Od,ed:c.ed,Uc:c.Uc};return h.postMessage(_,c.md),0},H=0,Z=(c,h,..._)=>{var w,I=16*_.length,P=Qe(),V=Il(I),ee=V>>>3;for(w of _)typeof w=="bigint"?((T(),Q)[ee++>>>0]=1n,(T(),Q)[ee++>>>0]=w):((T(),Q)[ee++>>>0]=0n,(T(),ue)[ee++>>>0]=w);return c=_c(c,0,I,V,h),Ke(P),c};function ie(c){if(i)return Z(0,1,c);if(y=c,!(0<H)){for(var h of me)kt(h);for(h of he)kt(h);he=[],me=[],Ee={},D=!0}d(0,new tt(c))}function oe(c){if(i)return Z(1,0,c);ge(c)}var ge=c=>{if(y=c,i)throw oe(c),"unwind";ie(c)},he=[],me=[],se=[],Ee={},ye=c=>{var h=c.Uc;delete Ee[h],he.push(c),me.splice(me.indexOf(c),1),c.Uc=0,xc(h)};function Ie(){se.forEach(c=>c())}var ze=c=>new Promise(h=>{c.onmessage=I=>{var P=I.data;if(I=P.Vc,P.bd&&P.bd!=ns()){var V=Ee[P.bd];V?V.postMessage(P,P.md):O(`Internal error! Worker sent a message "${I}" to target pthread ${P.bd}, but that thread no longer exists!`)}else I==="checkMailbox"?hi():I==="spawnThread"?L(P):I==="cleanupThread"?pi(()=>{ye(Ee[P.Qd])}):I==="loaded"?(c.loaded=!0,h(c)):P.target==="setimmediate"?c.postMessage(P):I==="uncaughtException"?c.onerror(P.error):I==="callHandler"?t[P.yd](...P.args):I&&O(`worker sent an unknown command ${I}`)},c.onerror=I=>{throw O(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var _,w=[];for(_ of[])t.propertyIsEnumerable(_)&&w.push(_);c.postMessage({Vc:"load",Ad:w,Rd:Ve,Sd:b})});function Ze(){var c=new Worker((()=>{let h=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new h("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});he.push(c)}var Ve,rt=(c,h)=>{H=0,c=Ol(c,h),0<H?y=c:El(c)},mt=[],vt=0;function Qt(c){var h=new zt(c>>>=0);return(T(),Y)[h.Wc+12>>>0]==0&&(cr(h,!0),vt--),Ct(h,!1),mt.push(h),Ec(c)}var Ot=0,$r=()=>{Je(0,0);var c=mt.pop();Tc(c.gd),Ot=0};function cr(c,h){h=h?1:0,(T(),Y)[c.Wc+12>>>0]=h}function Ct(c,h){h=h?1:0,(T(),Y)[c.Wc+13>>>0]=h}class zt{constructor(h){this.gd=h,this.Wc=h-24}}var Bt=c=>{var h=Ot;if(!h)return Es(0),0;var _=new zt(h);(T(),te)[_.Wc+16>>>2>>>0]=h;var w=(T(),te)[_.Wc+4>>>2>>>0];if(!w)return Es(0),h;for(var I of c){if(I===0||I===w)break;if(Cc(I,w,_.Wc+16))return Es(I),h}return Es(w),h};function Sr(){return Bt([])}function Rn(c){return Bt([c>>>0])}function fr(c,h,_,w){return Bt([c>>>0,h>>>0,_>>>0,w>>>0])}var pn=()=>{var c=mt.pop();c||be("no exception to throw");var h=c.gd;throw(T(),Y)[c.Wc+13>>>0]==0&&(mt.push(c),Ct(c,!0),cr(c,!1),vt++),Al(h),Ot=h};function Hi(c,h,_){var w=new zt(c>>>=0);throw h>>>=0,_>>>=0,(T(),te)[w.Wc+16>>>2>>>0]=0,(T(),te)[w.Wc+4>>>2>>>0]=h,(T(),te)[w.Wc+8>>>2>>>0]=_,Al(c),vt++,Ot=c}var Gi=()=>vt;function hn(c,h,_,w){return i?Z(2,1,c,h,_,w):ii(c,h,_,w)}function ii(c,h,_,w){if(c>>>=0,h>>>=0,_>>>=0,w>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?hn(c,h,_,w):(c={Od:_,Uc:c,ed:w,md:I},i?(c.Vc="spawnThread",postMessage(c,I),0):L(c))}function Pr(c){throw Ot||=c>>>0,Ot}var ne=globalThis.TextDecoder&&new TextDecoder,j=(c,h,_,w)=>{if(_=h+_,w)return _;for(;c[h]&&!(h>=_);)++h;return h},de=(c,h=0,_,w)=>{if(16<(_=j(c,h>>>=0,_,w))-h&&c.buffer&&ne)return ne.decode(c.buffer instanceof ArrayBuffer?c.subarray(h,_):c.slice(h,_));for(w="";h<_;){var I=c[h++];if(128&I){var P=63&c[h++];if((224&I)==192)w+=String.fromCharCode((31&I)<<6|P);else{var V=63&c[h++];65536>(I=(240&I)==224?(15&I)<<12|P<<6|V:(7&I)<<18|P<<12|V<<6|63&c[h++])?w+=String.fromCharCode(I):(I-=65536,w+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else w+=String.fromCharCode(I)}return w},Re=(c,h,_)=>(c>>>=0)?de((T(),ae),c,h,_):"";function Nt(c,h,_){return i?Z(3,1,c,h,_):0}function jt(c,h){if(i)return Z(4,1,c,h)}function Jt(c,h){if(i)return Z(5,1,c,h)}function Vt(c,h,_){if(i)return Z(6,1,c,h,_)}function er(c,h,_){return i?Z(7,1,c,h,_):0}function bs(c,h){if(i)return Z(8,1,c,h)}function Et(c,h,_){if(i)return Z(9,1,c,h,_)}function gr(c,h,_,w){if(i)return Z(10,1,c,h,_,w)}function Ki(c,h,_,w){if(i)return Z(11,1,c,h,_,w)}function wa(c,h,_,w){if(i)return Z(12,1,c,h,_,w)}function si(c){if(i)return Z(13,1,c)}function Xi(c,h){if(i)return Z(14,1,c,h)}function ai(c,h,_){if(i)return Z(15,1,c,h,_)}var oi=()=>be(""),yr=c=>{c>>>=0;for(var h="";;){var _=(T(),ae)[c++>>>0];if(!_)return h;h+=String.fromCharCode(_)}},li={},ui={},mn=class extends Error{constructor(c){super(c),this.name="BindingError"}};function Pt(c,h,_={}){return function(w,I,P={}){var V=I.name;if(!w)throw new mn(`type "${V}" must have a positive integer typeid pointer`);if(ui.hasOwnProperty(w)){if(P.Bd)return;throw new mn(`Cannot register type '${V}' twice`)}ui[w]=I,li.hasOwnProperty(w)&&(I=li[w],delete li[w],I.forEach(ee=>ee()))}(c,h,_)}var br=(c,h,_)=>{switch(h){case 1:return _?w=>(T(),Y)[w>>>0]:w=>(T(),ae)[w>>>0];case 2:return _?w=>(T(),X)[w>>>1>>>0]:w=>(T(),le)[w>>>1>>>0];case 4:return _?w=>(T(),q)[w>>>2>>>0]:w=>(T(),te)[w>>>2>>>0];case 8:return _?w=>(T(),Q)[w>>>3>>>0]:w=>(T(),we)[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${h}): ${c}`)}};function di(c,h,_,w,I){c>>>=0,_>>>=0,h=yr(h>>>0);let P=V=>V;if(w=w===0n){let V=8*_;P=ee=>BigInt.asUintN(V,ee),I=P(I)}Pt(c,{name:h,Rc:P,Yc:(V,ee)=>(typeof ee=="number"&&(ee=BigInt(ee)),ee),Xc:br(h,_,!w),Zc:null})}function vs(c,h,_,w){Pt(c>>>=0,{name:h=yr(h>>>0),Rc:function(I){return!!I},Yc:function(I,P){return P?_:w},Xc:function(I){return this.Rc((T(),ae)[I>>>0])},Zc:null})}var Yi=[],Xr=[0,1,,1,null,1,!0,1,!1,1];function ci(c){9<(c>>>=0)&&--Xr[c+1]===0&&(Xr[c]=void 0,Yi.push(c))}var Mt=c=>{if(!c)throw new mn(`Cannot use deleted val. handle = ${c}`);return Xr[c]},pr=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=Yi.pop()||Xr.length;return Xr[h]=c,Xr[h+1]=1,h}};function Bn(c){return this.Rc((T(),te)[c>>>2>>>0])}var kr={name:"emscripten::val",Rc:c=>{var h=Mt(c);return ci(c),h},Yc:(c,h)=>pr(h),Xc:Bn,Zc:null};function Zi(c){return Pt(c>>>0,kr)}var ul=(c,h)=>{switch(h){case 4:return function(_){return this.Rc((T(),ce)[_>>>2>>>0])};case 8:return function(_){return this.Rc((T(),ue)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${c}`)}};function _a(c,h,_){_>>>=0,Pt(c>>>=0,{name:h=yr(h>>>0),Rc:w=>w,Yc:(w,I)=>I,Xc:ul(h,_),Zc:null})}function ws(c,h,_,w,I){c>>>=0,_>>>=0,h=yr(h>>>0);let P=ee=>ee;if(w===0){var V=32-8*_;P=ee=>ee<<V>>>V,I=P(I)}Pt(c,{name:h,Rc:P,Yc:(ee,ve)=>ve,Xc:br(h,_,w!==0),Zc:null})}function dl(c,h,_){function w(P){var V=(T(),te)[P>>>2>>>0];return P=(T(),te)[P+4>>>2>>>0],new I((T(),Y).buffer,P,V)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];Pt(c>>>=0,{name:_=yr(_>>>0),Rc:w,Xc:w},{Bd:!0})}var Yr=(c,h,_)=>{var w=(T(),ae);if(h>>>=0,0<_){var I=h;_=h+_-1;for(var P=0;P<c.length;++P){var V=c.codePointAt(P);if(127>=V){if(h>=_)break;w[h++>>>0]=V}else if(2047>=V){if(h+1>=_)break;w[h++>>>0]=192|V>>6,w[h++>>>0]=128|63&V}else if(65535>=V){if(h+2>=_)break;w[h++>>>0]=224|V>>12,w[h++>>>0]=128|V>>6&63,w[h++>>>0]=128|63&V}else{if(h+3>=_)break;w[h++>>>0]=240|V>>18,w[h++>>>0]=128|V>>12&63,w[h++>>>0]=128|V>>6&63,w[h++>>>0]=128|63&V,P++}}w[h>>>0]=0,c=h-I}else c=0;return c},fi=c=>{for(var h=0,_=0;_<c.length;++_){var w=c.charCodeAt(_);127>=w?h++:2047>=w?h+=2:55296<=w&&57343>=w?(h+=4,++_):h+=3}return h};function xa(c,h){Pt(c>>>=0,{name:h=yr(h>>>0),Rc(_){var w=(T(),te)[_>>>2>>>0];return w=Re(_+4,w,!0),Cr(_),w},Yc(_,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var I=typeof w=="string";if(!(I||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new mn("Cannot pass non-string to std::string");var P=I?fi(w):w.length,V=vi(4+P+1),ee=V+4;return(T(),te)[V>>>2>>>0]=P,I?Yr(w,ee,P+1):(T(),ae).set(w,ee>>>0),_!==null&&_.push(Cr,V),V},Xc:Bn,Zc(_){Cr(_)}})}var _s=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,$a=(c,h,_)=>{if(c>>>=1,16<(h=j((T(),le),c,h/2,_))-c&&_s)return _s.decode((T(),le).slice(c,h));for(_="";c<h;++c){var w=(T(),le)[c>>>0];_+=String.fromCharCode(w)}return _},tr=(c,h,_)=>{if(_??=2147483647,2>_)return 0;var w=h;_=(_-=2)<2*c.length?_/2:c.length;for(var I=0;I<_;++I){var P=c.charCodeAt(I);(T(),X)[h>>>1>>>0]=P,h+=2}return(T(),X)[h>>>1>>>0]=0,h-w},Sa=c=>2*c.length,ka=(c,h,_)=>{var w="";c>>>=2;for(var I=0;!(I>=h/4);I++){var P=(T(),te)[c+I>>>0];if(!P&&!_)break;w+=String.fromCodePoint(P)}return w},Qi=(c,h,_)=>{if(h>>>=0,_??=2147483647,4>_)return 0;var w=h;_=w+_-4;for(var I=0;I<c.length;++I){var P=c.codePointAt(I);if(65535<P&&I++,(T(),q)[h>>>2>>>0]=P,(h+=4)+4>_)break}return(T(),q)[h>>>2>>>0]=0,h-w},Ta=c=>{for(var h=0,_=0;_<c.length;++_)65535<c.codePointAt(_)&&_++,h+=4;return h};function Ca(c,h,_){if(c>>>=0,h>>>=0,_=yr(_>>>=0),h===2)var w=$a,I=tr,P=Sa;else w=ka,I=Qi,P=Ta;Pt(c,{name:_,Rc:V=>{var ee=(T(),te)[V>>>2>>>0];return ee=w(V+4,ee*h,!0),Cr(V),ee},Yc:(V,ee)=>{if(typeof ee!="string")throw new mn(`Cannot pass non-string to C++ string type ${_}`);var ve=P(ee),ke=vi(4+ve+h);return(T(),te)[ke>>>2>>>0]=ve/h,I(ee,ke+4,ve+h),V!==null&&V.push(Cr,ke),ke},Xc:Bn,Zc(V){Cr(V)}})}function cl(c,h){Pt(c>>>=0,{Cd:!0,name:h=yr(h>>>0),Rc:()=>{},Yc:()=>{}})}function fl(c){Ln(c>>>0,!n,1,!r,131072,!1),Ie()}var pi=c=>{if(!D)try{if(c(),!(0<H))try{i?ns()&&El(y):ge(y)}catch(h){h instanceof tt||h=="unwind"||d(0,h)}}catch(h){h instanceof tt||h=="unwind"||d(0,h)}},Ea=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Pn(c){c>>>=0,Ea||(Atomics.waitAsync((T(),q),c>>>2,c).value.then(hi),c+=128,Atomics.store((T(),q),c>>>2,1))}var hi=()=>pi(()=>{var c=ns();c&&(Pn(c),Sc())});function Ia(c,h){(c>>>=0)==h>>>0?setTimeout(hi):i?postMessage({bd:c,Vc:"checkMailbox"}):(c=Ee[c])&&c.postMessage({Vc:"checkMailbox"})}var gn=[];function pl(c,h,_,w,I){for(h>>>=0,I>>>=0,gn.length=0,_=I>>>3,w=I+w>>>3;_<w;){var P;P=(T(),Q)[_++>>>0]?(T(),Q)[_++>>>0]:(T(),ue)[_++>>>0],gn.push(P)}return(h?zl[h]:q1[c])(...gn)}var hl=()=>{H=0};function ml(c){c>>>=0,i?postMessage({Vc:"cleanupThread",Qd:c}):ye(Ee[c])}function gl(c){}var Dn=c=>{try{c()}catch(h){be(h)}};function mi(c){var h=(..._)=>{Ji.push(c);try{return c(..._)}finally{D||(Ji.pop(),Tr&&Zr===1&&Ji.length===0&&(Zr=0,H+=1,Dn(hf),typeof Fibers<"u"&&Fibers.de()))}};return $s.set(c,h),h}var Zr=0,Tr=null,Aa=0,Ji=[],gi=new Map,xs=new Map,$s=new Map,yi=0,sr=null,yl=[],Oa=c=>function(h){if(!D){if(Zr===0){var _=!1,w=!1;h((I=0)=>{if(!D&&(Aa=I,_=!0,w)){Zr=2,Dn(()=>mf(Tr)),typeof MainLoop<"u"&&MainLoop.xd&&MainLoop.resume(),I=!1;try{var P=function(){var ve=(T(),q)[Tr+8>>>2>>>0];return ve=xs.get(ve),ve=$s.get(ve),--H,ve()}()}catch(ve){P=ve,I=!0}var V=!1;if(!Tr){var ee=sr;ee&&(sr=null,(I?ee.reject:ee.resolve)(P),V=!0)}if(I&&!V)throw P}}),w=!0,_||(Zr=1,Tr=function(){var I=vi(65548),P=I+12;if((T(),te)[I>>>2>>>0]=P,(T(),te)[I+4>>>2>>>0]=P+65536,P=Ji[0],!gi.has(P)){var V=yi++;gi.set(P,V),xs.set(V,P)}return P=gi.get(P),(T(),q)[I+8>>>2>>>0]=P,I}(),typeof MainLoop<"u"&&MainLoop.xd&&MainLoop.pause(),Dn(()=>pf(Tr)))}else Zr===2?(Zr=0,Dn(gf),Cr(Tr),Tr=null,yl.forEach(pi)):be(`invalid state: ${Zr}`);return Aa}}(h=>{c().then(h)});function za(c){return c>>>=0,Oa(async()=>{var h=await Mt(c);return pr(h)})}var es=[],Ss=c=>{var h=es.length;return es.push(c),h},ks=(c,h)=>{for(var _=Array(c),w=0;w<c;++w){var I=w,P=(T(),te)[h+4*w>>>2>>>0],V=ui[P];if(V===void 0)throw c=`parameter ${w}`,P=Ya(P),h=yr(P),Cr(P),new mn(`${c} has unknown type ${h}`);_[I]=V}return _},Nn=(c,h,_)=>{var w=[];return c=c(w,_),w.length&&((T(),te)[h>>>2>>>0]=pr(w)),c},Ma={},Un=c=>{var h=Ma[c];return h===void 0?yr(c):h};function bl(c,h,_){var[w,...I]=ks(c,h>>>0);h=w.Yc.bind(w);var P=I.map(ve=>ve.Xc.bind(ve));c--;var V={toValue:Mt};switch(c=P.map((ve,ke)=>{var je=`argFromPtr${ke}`;return V[je]=ve,`${je}(args${ke?"+"+8*ke:""})`}),_){case 0:var ee="toValue(handle)";break;case 2:ee="new (toValue(handle))";break;case 3:ee="";break;case 1:V.getStringOrSymbol=Un,ee="toValue(handle)[getStringOrSymbol(methodName)]"}return ee+=`(${c})`,w.Cd||(V.toReturnWire=h,V.emval_returnValue=Nn,ee=`return emval_returnValue(toReturnWire, destructorsRef, ${ee})`),ee=`return function (handle, methodName, destructorsRef, args) {
  ${ee}
  }`,_=new Function(Object.keys(V),ee)(...Object.values(V)),ee=`methodCaller<(${I.map(ve=>ve.name)}) => ${w.name}>`,Ss(Object.defineProperty(_,"name",{value:ee}))}function vl(c,h){return h>>>=0,(c=Mt(c>>>0))==Mt(h)}function bi(c){return(c>>>=0)?(c=Un(c),pr(globalThis[c])):pr(globalThis)}function Ra(c){return c=Un(c>>>0),pr(t[c])}function Ba(c,h){return h>>>=0,c=Mt(c>>>0),h=Mt(h),pr(c[h])}function wl(c){9<(c>>>=0)&&(Xr[c+1]+=1)}function Pa(c,h,_,w,I){return es[c>>>0](h>>>0,_>>>0,w>>>0,I>>>0)}function ts(c,h,_,w,I){return Pa(c>>>0,h>>>0,_>>>0,w>>>0,I>>>0)}function Da(){return pr([])}function _l(c){c=Mt(c>>>0);for(var h=Array(c.length),_=0;_<c.length;_++)h[_]=c[_];return pr(h)}function Na(c){return pr(Un(c>>>0))}function xl(){return pr({})}function $l(c){for(var h=Mt(c>>>=0);h.length;){var _=h.pop();h.pop()(_)}ci(c)}function Ts(c,h,_){h>>>=0,_>>>=0,c=Mt(c>>>0),h=Mt(h),_=Mt(_),c[h]=_}function Ua(c,h){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),h>>>=0,c=new Date(1e3*c),(T(),q)[h>>>2>>>0]=c.getUTCSeconds(),(T(),q)[h+4>>>2>>>0]=c.getUTCMinutes(),(T(),q)[h+8>>>2>>>0]=c.getUTCHours(),(T(),q)[h+12>>>2>>>0]=c.getUTCDate(),(T(),q)[h+16>>>2>>>0]=c.getUTCMonth(),(T(),q)[h+20>>>2>>>0]=c.getUTCFullYear()-1900,(T(),q)[h+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(T(),q)[h+28>>>2>>>0]=c}var La=c=>c%4==0&&(c%100!=0||c%400==0),Fa=[0,31,60,91,121,152,182,213,244,274,305,335],ja=[0,31,59,90,120,151,181,212,243,273,304,334];function Sl(c,h){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),h>>>=0,c=new Date(1e3*c),(T(),q)[h>>>2>>>0]=c.getSeconds(),(T(),q)[h+4>>>2>>>0]=c.getMinutes(),(T(),q)[h+8>>>2>>>0]=c.getHours(),(T(),q)[h+12>>>2>>>0]=c.getDate(),(T(),q)[h+16>>>2>>>0]=c.getMonth(),(T(),q)[h+20>>>2>>>0]=c.getFullYear()-1900,(T(),q)[h+24>>>2>>>0]=c.getDay();var _=(La(c.getFullYear())?Fa:ja)[c.getMonth()]+c.getDate()-1|0;(T(),q)[h+28>>>2>>>0]=_,(T(),q)[h+36>>>2>>>0]=-60*c.getTimezoneOffset(),_=new Date(c.getFullYear(),6,1).getTimezoneOffset();var w=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|(_!=w&&c.getTimezoneOffset()==Math.min(w,_)),(T(),q)[h+32>>>2>>>0]=c}function Va(c){c>>>=0;var h=new Date((T(),q)[c+20>>>2>>>0]+1900,(T(),q)[c+16>>>2>>>0],(T(),q)[c+12>>>2>>>0],(T(),q)[c+8>>>2>>>0],(T(),q)[c+4>>>2>>>0],(T(),q)[c>>>2>>>0],0),_=(T(),q)[c+32>>>2>>>0],w=h.getTimezoneOffset(),I=new Date(h.getFullYear(),6,1).getTimezoneOffset(),P=new Date(h.getFullYear(),0,1).getTimezoneOffset(),V=Math.min(P,I);return 0>_?(T(),q)[c+32>>>2>>>0]=+(I!=P&&V==w):0<_!=(V==w)&&(I=Math.max(P,I),h.setTime(h.getTime()+6e4*((0<_?V:I)-w))),(T(),q)[c+24>>>2>>>0]=h.getDay(),_=(La(h.getFullYear())?Fa:ja)[h.getMonth()]+h.getDate()-1|0,(T(),q)[c+28>>>2>>>0]=_,(T(),q)[c>>>2>>>0]=h.getSeconds(),(T(),q)[c+4>>>2>>>0]=h.getMinutes(),(T(),q)[c+8>>>2>>>0]=h.getHours(),(T(),q)[c+12>>>2>>>0]=h.getDate(),(T(),q)[c+16>>>2>>>0]=h.getMonth(),(T(),q)[c+20>>>2>>>0]=h.getYear(),c=h.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function Wa(c,h,_,w,I,P,V){return i?Z(16,1,c,h,_,w,I,P,V):-52}function qa(c,h,_,w,I,P){if(i)return Z(17,1,c,h,_,w,I,P)}var yn={},kl=()=>performance.timeOrigin+performance.now();function Ha(c,h){if(i)return Z(18,1,c,h);if(yn[c]&&(clearTimeout(yn[c].id),delete yn[c]),!h)return 0;var _=setTimeout(()=>{delete yn[c],pi(()=>$c(c,performance.timeOrigin+performance.now()))},h);return yn[c]={id:_,ce:h},0}function Tl(c,h,_,w){c>>>=0,h>>>=0,_>>>=0,w>>>=0;var I=new Date().getFullYear(),P=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var V=Math.max(P,I);(T(),te)[c>>>2>>>0]=60*V,(T(),q)[h>>>2>>>0]=+(P!=I),c=(h=ee=>{var ve=Math.abs(ee);return`UTC${0<=ee?"-":"+"}${String(Math.floor(ve/60)).padStart(2,"0")}${String(ve%60).padStart(2,"0")}`})(P),h=h(I),I<P?(Yr(c,_,17),Yr(h,w,17)):(Yr(c,w,17),Yr(h,_,17))}var rs=()=>Date.now();function Cl(c,h,_){return _>>>=0,0<=c&&3>=c?(c===0?c=Date.now():c=performance.timeOrigin+performance.now(),c=Math.round(1e6*c),(T(),Q)[_>>>3>>>0]=BigInt(c),0):28}var Cs=[],Ga=(c,h)=>{Cs.length=0;for(var _;_=(T(),ae)[c++>>>0];){var w=_!=105;h+=(w&=_!=112)&&h%8?4:0,Cs.push(_==112?(T(),te)[h>>>2>>>0]:_==106?(T(),Q)[h>>>3>>>0]:_==105?(T(),q)[h>>>2>>>0]:(T(),ue)[h>>>3>>>0]),h+=w?8:4}return Cs};function Ka(c,h,_){return c>>>=0,h=Ga(h>>>0,_>>>0),zl[c](...h)}function Xa(c,h,_){return c>>>=0,h=Ga(h>>>0,_>>>0),zl[c](...h)}var u=()=>{};function m(c,h){return O(Re(c>>>0,h>>>0))}var v=()=>{throw H+=1,"unwind"};function k(){return 4294901760}var z=()=>navigator.hardwareConcurrency,B={},R=c=>{var h;return(h=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(c))?+h[1]:(h=/:(\d+):\d+(?:\)|$)/.exec(c))?2147483648|+h[1]:0},F=c=>{for(var h of c)(c=R(h))&&(B[c]=h)};function G(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),F(c),B.kd=R(c[3]),B.Md=c,B.kd}function fe(c){if(!(c=B[c>>>0]))return 0;var h;if(h=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(c))c=h[1];else if(h=/^\s+at (.*) \(.*\)$/.exec(c))c=h[1];else{if(!(h=/^(.+?)@/.exec(c)))return 0;c=h[1]}Cr(fe.ld??0),h=fi(c)+1;var _=vi(h);return _&&Yr(c,_,h),fe.ld=_,fe.ld}function _e(c){c>>>=0;var h=(T(),ae).length;if(c<=h||4294901760<c)return!1;for(var _=1;4>=_;_*=2){var w=h*(1+.2/_);w=Math.min(w,c+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(c,w)/65536))-Ve.buffer.byteLength+65535)/65536|0;try{Ve.grow(w),xe();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function Ne(c,h,_){if(c>>>=0,h>>>=0,B.kd==c)var w=B.Md;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),F(w);for(var I=3;w[I]&&R(w[I])!=c;)++I;for(c=0;c<_&&w[c+I];++c)(T(),q)[h+4*c>>>2>>>0]=R(w[c+I]);return c}var Me,$e={},De=()=>{if(!Me){var c,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(c in $e)$e[c]===void 0?delete h[c]:h[c]=$e[c];var _=[];for(c in h)_.push(`${c}=${h[c]}`);Me=_}return Me};function Ge(c,h){if(i)return Z(19,1,c,h);c>>>=0,h>>>=0;var _,w=0,I=0;for(_ of De()){var P=h+w;(T(),te)[c+I>>>2>>>0]=P,w+=Yr(_,P,1/0)+1,I+=4}return 0}function wt(c,h){if(i)return Z(20,1,c,h);c>>>=0,h>>>=0;var _=De();for(var w of((T(),te)[c>>>2>>>0]=_.length,c=0,_))c+=fi(w)+1;return(T(),te)[h>>>2>>>0]=c,0}function gt(c){return i?Z(21,1,c):52}function Ut(c,h,_,w,I){return i?Z(22,1,c,h,_,w,I):52}function ar(c,h,_,w){return i?Z(23,1,c,h,_,w):52}function Yt(c,h,_,w){return i?Z(24,1,c,h,_,w):70}var lt=[null,[],[]];function Lt(c,h,_,w){if(i)return Z(25,1,c,h,_,w);h>>>=0,_>>>=0,w>>>=0;for(var I=0,P=0;P<_;P++){var V=(T(),te)[h>>>2>>>0],ee=(T(),te)[h+4>>>2>>>0];h+=8;for(var ve=0;ve<ee;ve++){var ke=c,je=(T(),ae)[V+ve>>>0],it=lt[ke];je===0||je===10?((ke===1?C:O)(de(it)),it.length=0):it.push(je)}I+=ee}return(T(),te)[w>>>2>>>0]=I,0}function Qr(c){return c>>>0}i||function(){for(var c=t.numThreads-1;c--;)Ze();He.push(async()=>{var h=async function(){if(!i)return Promise.all(he.map(ze))}();dt++,await h,--dt==0&&M&&(h=M,M=null,h())})}(),i||(Ve=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),xe()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>Qe(),t.stackRestore=c=>Ke(c),t.stackAlloc=c=>Il(c),t.setValue=function(c,h,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":(T(),Y)[c>>>0]=h;break;case"i16":(T(),X)[c>>>1>>>0]=h;break;case"i32":(T(),q)[c>>>2>>>0]=h;break;case"i64":(T(),Q)[c>>>3>>>0]=BigInt(h);break;case"float":(T(),ce)[c>>>2>>>0]=h;break;case"double":(T(),ue)[c>>>3>>>0]=h;break;case"*":(T(),te)[c>>>2>>>0]=h;break;default:be(`invalid type for setValue: ${_}`)}},t.getValue=function(c,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return(T(),Y)[c>>>0];case"i16":return(T(),X)[c>>>1>>>0];case"i32":return(T(),q)[c>>>2>>>0];case"i64":return(T(),Q)[c>>>3>>>0];case"float":return(T(),ce)[c>>>2>>>0];case"double":return(T(),ue)[c>>>3>>>0];case"*":return(T(),te)[c>>>2>>>0];default:be(`invalid type for getValue: ${h}`)}},t.UTF8ToString=Re,t.stringToUTF8=Yr,t.lengthBytesUTF8=fi;var Ya,Za,ns,Cr,vi,Ln,wc,_c,xc,El,$c,Sc,Je,Es,kc,Ke,Il,Qe,Tc,Al,Cc,Ec,Ic,Ol,Ac,Oc,zc,Mc,Rc,Bc,Pc,Dc,Nc,Uc,Lc,Fc,jc,Vc,Wc,qc,Hc,Gc,Kc,Xc,Yc,Zc,Qc,Jc,ef,tf,rf,nf,sf,af,of,lf,uf,df,cf,ff,pf,hf,mf,gf,bn,q1=[ie,oe,hn,Nt,jt,Jt,Vt,er,bs,Et,gr,Ki,wa,si,Xi,ai,Wa,qa,Ha,Ge,wt,gt,Ut,ar,Yt,Lt],zl={1086876:(c,h,_,w,I)=>{if(t===void 0||!t.ad)return 1;if((c=Re(Number(c>>>0))).startsWith("./")&&(c=c.substring(2)),!(c=t.ad.get(c)))return 2;if(h=Number(h>>>0),_=Number(_>>>0),w=Number(w>>>0),h+_>c.byteLength)return 3;try{let P=c.subarray(h,h+_);switch(I){case 0:(T(),ae).set(P,w>>>0);break;case 1:t.Td?t.Td(w,P):t.Ld(w,P);break;default:return 4}return 0}catch{return 4}},1087700:(c,h,_)=>{t.wd(c,(T(),ae).subarray(h>>>0,h+_>>>0))},1087764:()=>t.Vd(),1087806:c=>{t.vd(c)},1087843:()=>{t.Ed()},1087874:()=>{t.Fd()},1087903:()=>{t.Jd()},1087928:c=>t.Dd(c),1087961:c=>t.Hd(c),1087993:(c,h,_)=>{t.jd(Number(c),Number(h),Number(_),!0)},1088056:(c,h,_)=>{t.jd(Number(c),Number(h),Number(_))},1088113:()=>typeof wasmOffsetConverter<"u",1088170:c=>{t.bc("Abs",c,void 0)},1088221:c=>{t.bc("Neg",c,void 0)},1088272:c=>{t.bc("Floor",c,void 0)},1088325:c=>{t.bc("Ceil",c,void 0)},1088377:c=>{t.bc("Reciprocal",c,void 0)},1088435:c=>{t.bc("Sqrt",c,void 0)},1088487:c=>{t.bc("Exp",c,void 0)},1088538:c=>{t.bc("Erf",c,void 0)},1088589:c=>{t.bc("Sigmoid",c,void 0)},1088644:(c,h,_)=>{t.bc("HardSigmoid",c,{alpha:h,beta:_})},1088723:c=>{t.bc("HardSwish",c,void 0)},1088780:c=>{t.bc("Log",c,void 0)},1088831:c=>{t.bc("Sin",c,void 0)},1088882:c=>{t.bc("Cos",c,void 0)},1088933:c=>{t.bc("Tan",c,void 0)},1088984:c=>{t.bc("Asin",c,void 0)},1089036:c=>{t.bc("Acos",c,void 0)},1089088:c=>{t.bc("Atan",c,void 0)},1089140:c=>{t.bc("Sinh",c,void 0)},1089192:c=>{t.bc("Cosh",c,void 0)},1089244:c=>{t.bc("Asinh",c,void 0)},1089297:c=>{t.bc("Acosh",c,void 0)},1089350:c=>{t.bc("Atanh",c,void 0)},1089403:c=>{t.bc("Tanh",c,void 0)},1089455:c=>{t.bc("Not",c,void 0)},1089506:(c,h,_)=>{t.bc("Clip",c,{min:h,max:_})},1089575:c=>{t.bc("Clip",c,void 0)},1089627:(c,h)=>{t.bc("Elu",c,{alpha:h})},1089685:c=>{t.bc("Gelu",c,void 0)},1089737:c=>{t.bc("Relu",c,void 0)},1089789:(c,h)=>{t.bc("LeakyRelu",c,{alpha:h})},1089853:(c,h)=>{t.bc("ThresholdedRelu",c,{alpha:h})},1089923:(c,h)=>{t.bc("Cast",c,{to:h})},1089981:c=>{t.bc("Add",c,void 0)},1090032:c=>{t.bc("Sub",c,void 0)},1090083:c=>{t.bc("Mul",c,void 0)},1090134:c=>{t.bc("Div",c,void 0)},1090185:c=>{t.bc("Pow",c,void 0)},1090236:c=>{t.bc("Equal",c,void 0)},1090289:c=>{t.bc("Greater",c,void 0)},1090344:c=>{t.bc("GreaterOrEqual",c,void 0)},1090406:c=>{t.bc("Less",c,void 0)},1090458:c=>{t.bc("LessOrEqual",c,void 0)},1090517:(c,h,_,w,I)=>{t.bc("ReduceMean",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1090692:(c,h,_,w,I)=>{t.bc("ReduceMax",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1090866:(c,h,_,w,I)=>{t.bc("ReduceMin",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091040:(c,h,_,w,I)=>{t.bc("ReduceProd",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091215:(c,h,_,w,I)=>{t.bc("ReduceSum",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091389:(c,h,_,w,I)=>{t.bc("ReduceL1",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091562:(c,h,_,w,I)=>{t.bc("ReduceL2",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091735:(c,h,_,w,I)=>{t.bc("ReduceLogSum",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091912:(c,h,_,w,I)=>{t.bc("ReduceSumSquare",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1092092:(c,h,_,w,I)=>{t.bc("ReduceLogSumExp",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1092272:c=>{t.bc("Where",c,void 0)},1092325:(c,h,_)=>{t.bc("Transpose",c,{perm:h?Array.from((T(),q).subarray(Number(h)>>>0,Number(_)>>>0)):[]})},1092449:(c,h,_,w)=>{t.bc("DepthToSpace",c,{blocksize:h,mode:Re(_),format:w?"NHWC":"NCHW"})},1092582:(c,h,_,w)=>{t.bc("DepthToSpace",c,{blocksize:h,mode:Re(_),format:w?"NHWC":"NCHW"})},1092715:(c,h,_,w)=>{t.bc("DFT",c,{axis:h,inverse:_,onesided:w})},1092807:(c,h,_,w,I,P,V,ee,ve,ke,je,it,yt,$t,Fn)=>{t.bc("ConvTranspose",c,{format:ve?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[I],pads:[P,V],strides:[ee],wIsConst:()=>!!(T(),Y)[ke>>>0],outputPadding:je?Array.from((T(),q).subarray(Number(je)>>>0,Number(it)>>>0)):[],outputShape:yt?Array.from((T(),q).subarray(Number(yt)>>>0,Number($t)>>>0)):[],activation:Re(Fn)})},1093240:(c,h,_,w,I,P,V,ee,ve,ke,je,it,yt,$t)=>{t.bc("ConvTranspose",c,{format:ee?"NHWC":"NCHW",autoPad:h,dilations:Array.from((T(),q).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((T(),q).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((T(),q).subarray(Number(P)>>>0,(Number(P)>>>0)+4>>>0)),strides:Array.from((T(),q).subarray(Number(V)>>>0,(Number(V)>>>0)+2>>>0)),wIsConst:()=>!!(T(),Y)[ve>>>0],outputPadding:ke?Array.from((T(),q).subarray(Number(ke)>>>0,Number(je)>>>0)):[],outputShape:it?Array.from((T(),q).subarray(Number(it)>>>0,Number(yt)>>>0)):[],activation:Re($t)})},1093901:(c,h,_,w,I,P,V,ee,ve,ke,je,it,yt,$t,Fn)=>{t.bc("ConvTranspose",c,{format:ve?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[I],pads:[P,V],strides:[ee],wIsConst:()=>!!(T(),Y)[ke>>>0],outputPadding:je?Array.from((T(),q).subarray(Number(je)>>>0,Number(it)>>>0)):[],outputShape:yt?Array.from((T(),q).subarray(Number(yt)>>>0,Number($t)>>>0)):[],activation:Re(Fn)})},1094334:(c,h,_,w,I,P,V,ee,ve,ke,je,it,yt,$t)=>{t.bc("ConvTranspose",c,{format:ee?"NHWC":"NCHW",autoPad:h,dilations:Array.from((T(),q).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((T(),q).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((T(),q).subarray(Number(P)>>>0,(Number(P)>>>0)+4>>>0)),strides:Array.from((T(),q).subarray(Number(V)>>>0,(Number(V)>>>0)+2>>>0)),wIsConst:()=>!!(T(),Y)[ve>>>0],outputPadding:ke?Array.from((T(),q).subarray(Number(ke)>>>0,Number(je)>>>0)):[],outputShape:it?Array.from((T(),q).subarray(Number(it)>>>0,Number(yt)>>>0)):[],activation:Re($t)})},1094995:(c,h)=>{t.bc("GlobalAveragePool",c,{format:h?"NHWC":"NCHW"})},1095086:(c,h,_,w,I,P,V,ee,ve,ke,je,it,yt,$t)=>{t.bc("AveragePool",c,{format:$t?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:P?Array.from((T(),q).subarray(Number(P)>>>0,Number(V)>>>0)):[],kernel_shape:ee?Array.from((T(),q).subarray(Number(ee)>>>0,Number(ve)>>>0)):[],pads:ke?Array.from((T(),q).subarray(Number(ke)>>>0,Number(je)>>>0)):[],strides:it?Array.from((T(),q).subarray(Number(it)>>>0,Number(yt)>>>0)):[]})},1095565:(c,h)=>{t.bc("GlobalAveragePool",c,{format:h?"NHWC":"NCHW"})},1095656:(c,h,_,w,I,P,V,ee,ve,ke,je,it,yt,$t)=>{t.bc("AveragePool",c,{format:$t?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:P?Array.from((T(),q).subarray(Number(P)>>>0,Number(V)>>>0)):[],kernel_shape:ee?Array.from((T(),q).subarray(Number(ee)>>>0,Number(ve)>>>0)):[],pads:ke?Array.from((T(),q).subarray(Number(ke)>>>0,Number(je)>>>0)):[],strides:it?Array.from((T(),q).subarray(Number(it)>>>0,Number(yt)>>>0)):[]})},1096135:(c,h)=>{t.bc("GlobalMaxPool",c,{format:h?"NHWC":"NCHW"})},1096222:(c,h,_,w,I,P,V,ee,ve,ke,je,it,yt,$t)=>{t.bc("MaxPool",c,{format:$t?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:P?Array.from((T(),q).subarray(Number(P)>>>0,Number(V)>>>0)):[],kernel_shape:ee?Array.from((T(),q).subarray(Number(ee)>>>0,Number(ve)>>>0)):[],pads:ke?Array.from((T(),q).subarray(Number(ke)>>>0,Number(je)>>>0)):[],strides:it?Array.from((T(),q).subarray(Number(it)>>>0,Number(yt)>>>0)):[]})},1096697:(c,h)=>{t.bc("GlobalMaxPool",c,{format:h?"NHWC":"NCHW"})},1096784:(c,h,_,w,I,P,V,ee,ve,ke,je,it,yt,$t)=>{t.bc("MaxPool",c,{format:$t?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:P?Array.from((T(),q).subarray(Number(P)>>>0,Number(V)>>>0)):[],kernel_shape:ee?Array.from((T(),q).subarray(Number(ee)>>>0,Number(ve)>>>0)):[],pads:ke?Array.from((T(),q).subarray(Number(ke)>>>0,Number(je)>>>0)):[],strides:it?Array.from((T(),q).subarray(Number(it)>>>0,Number(yt)>>>0)):[]})},1097259:(c,h,_,w,I)=>{t.bc("Gemm",c,{alpha:h,beta:_,transA:w,transB:I})},1097363:c=>{t.bc("MatMul",c,void 0)},1097417:(c,h,_,w)=>{t.bc("ArgMax",c,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1097525:(c,h,_,w)=>{t.bc("ArgMin",c,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1097633:(c,h)=>{t.bc("Softmax",c,{axis:h})},1097696:(c,h)=>{t.bc("Concat",c,{axis:h})},1097756:(c,h,_,w,I)=>{t.bc("Split",c,{axis:h,numOutputs:_,splitSizes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1097912:c=>{t.bc("Expand",c,void 0)},1097966:(c,h)=>{t.bc("Gather",c,{axis:Number(h)})},1098037:(c,h)=>{t.bc("GatherElements",c,{axis:Number(h)})},1098116:(c,h)=>{t.bc("GatherND",c,{batch_dims:Number(h)})},1098195:(c,h,_,w,I,P,V,ee,ve,ke,je)=>{t.bc("Resize",c,{antialias:h,axes:_?Array.from((T(),q).subarray(Number(_)>>>0,Number(w)>>>0)):[],coordinateTransformMode:Re(I),cubicCoeffA:P,excludeOutside:V,extrapolationValue:ee,keepAspectRatioPolicy:Re(ve),mode:Re(ke),nearestMode:Re(je)})},1098557:(c,h,_,w,I,P,V)=>{t.bc("Slice",c,{starts:h?Array.from((T(),q).subarray(Number(h)>>>0,Number(_)>>>0)):[],ends:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[],axes:P?Array.from((T(),q).subarray(Number(P)>>>0,Number(V)>>>0)):[]})},1098821:c=>{t.bc("Tile",c,void 0)},1098873:(c,h,_)=>{t.bc("InstanceNormalization",c,{epsilon:h,format:_?"NHWC":"NCHW"})},1098987:(c,h,_)=>{t.bc("InstanceNormalization",c,{epsilon:h,format:_?"NHWC":"NCHW"})},1099101:c=>{t.bc("Range",c,void 0)},1099154:(c,h)=>{t.bc("Einsum",c,{equation:Re(h)})},1099235:(c,h,_,w,I)=>{t.bc("Pad",c,{mode:h,value:_,pads:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1099378:(c,h,_,w,I,P)=>{t.bc("BatchNormalization",c,{epsilon:h,momentum:_,spatial:!!I,trainingMode:!!w,format:P?"NHWC":"NCHW"})},1099547:(c,h,_,w,I,P)=>{t.bc("BatchNormalization",c,{epsilon:h,momentum:_,spatial:!!I,trainingMode:!!w,format:P?"NHWC":"NCHW"})},1099716:(c,h,_)=>{t.bc("CumSum",c,{exclusive:Number(h),reverse:Number(_)})},1099813:(c,h,_)=>{t.bc("DequantizeLinear",c,{axis:h,blockSize:_})},1099903:(c,h,_,w,I)=>{t.bc("GridSample",c,{align_corners:h,mode:Re(_),padding_mode:Re(w),format:I?"NHWC":"NCHW"})},1100073:(c,h,_,w,I)=>{t.bc("GridSample",c,{align_corners:h,mode:Re(_),padding_mode:Re(w),format:I?"NHWC":"NCHW"})},1100243:(c,h)=>{t.bc("ScatterND",c,{reduction:Re(h)})},1100328:(c,h,_,w,I,P,V,ee,ve)=>{t.bc("Attention",c,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:I,doRotary:P,qkvHiddenSizes:V?Array.from((T(),q).subarray(Number(ee)>>>0,Number(ee)+V>>>0)):[],pastPresentShareBuffer:!!ve})},1100600:c=>{t.bc("BiasAdd",c,void 0)},1100655:c=>{t.bc("BiasSplitGelu",c,void 0)},1100716:c=>{t.bc("FastGelu",c,void 0)},1100772:(c,h,_,w,I,P,V,ee,ve,ke,je,it,yt,$t,Fn,Ml)=>{t.bc("Conv",c,{format:it?"NHWC":"NCHW",auto_pad:h,dilations:_?Array.from((T(),q).subarray(Number(_)>>>0,Number(w)>>>0)):[],group:I,kernel_shape:P?Array.from((T(),q).subarray(Number(P)>>>0,Number(V)>>>0)):[],pads:ee?Array.from((T(),q).subarray(Number(ee)>>>0,Number(ve)>>>0)):[],strides:ke?Array.from((T(),q).subarray(Number(ke)>>>0,Number(je)>>>0)):[],w_is_const:()=>!!(T(),Y)[Number(yt)>>>0],activation:Re($t),activation_params:Fn?Array.from((T(),ce).subarray(Number(Fn)>>>0,Number(Ml)>>>0)):[]})},1101356:c=>{t.bc("Gelu",c,void 0)},1101408:(c,h,_,w,I,P,V,ee,ve)=>{t.bc("GroupQueryAttention",c,{numHeads:h,kvNumHeads:_,scale:w,softcap:I,doRotary:P,rotaryInterleaved:V,smoothSoftmax:ee,localWindowSize:ve})},1101625:(c,h,_,w)=>{t.bc("LayerNormalization",c,{axis:h,epsilon:_,simplified:!!w})},1101736:(c,h,_,w)=>{t.bc("LayerNormalization",c,{axis:h,epsilon:_,simplified:!!w})},1101847:(c,h,_,w,I,P)=>{t.bc("MatMulNBits",c,{k:h,n:_,accuracyLevel:w,bits:I,blockSize:P})},1101974:(c,h,_,w,I,P)=>{t.bc("MultiHeadAttention",c,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:I,doRotary:P})},1102133:(c,h)=>{t.bc("QuickGelu",c,{alpha:h})},1102197:(c,h,_,w,I)=>{t.bc("RotaryEmbedding",c,{interleaved:!!h,numHeads:_,rotaryEmbeddingDim:w,scale:I})},1102336:(c,h,_)=>{t.bc("SkipLayerNormalization",c,{epsilon:h,simplified:!!_})},1102438:(c,h,_)=>{t.bc("SkipLayerNormalization",c,{epsilon:h,simplified:!!_})},1102540:(c,h,_,w)=>{t.bc("GatherBlockQuantized",c,{gatherAxis:h,quantizeAxis:_,blockSize:w})},1102661:c=>{t.Id(c)},1102695:(c,h)=>t.Kd(Number(c),Number(h),t.$c.Nd,t.$c.errors)};function H1(c,h,_){return Oa(async()=>{await t.Gd(Number(c),Number(h),Number(_))})}function G1(){return typeof wasmOffsetConverter<"u"}function K1(c,h,_,w){var I=Qe();try{return Dc(c,h,_,w)}catch(P){if(Ke(I),P!==P+0)throw P;Je(1,0)}}function X1(c,h,_){var w=Qe();try{return Mc(c,h,_)}catch(I){if(Ke(w),I!==I+0)throw I;Je(1,0)}}function Y1(c){var h=Qe();try{Ac(c)}catch(_){if(Ke(h),_!==_+0)throw _;Je(1,0)}}function Z1(c,h){var _=Qe();try{return Ol(c,h)}catch(w){if(Ke(_),w!==w+0)throw w;Je(1,0)}}function Q1(c,h,_){var w=Qe();try{Ic(c,h,_)}catch(I){if(Ke(w),I!==I+0)throw I;Je(1,0)}}function J1(c,h){var _=Qe();try{Nc(c,h)}catch(w){if(Ke(_),w!==w+0)throw w;Je(1,0)}}function ew(c,h,_,w,I,P,V){var ee=Qe();try{return Bc(c,h,_,w,I,P,V)}catch(ve){if(Ke(ee),ve!==ve+0)throw ve;Je(1,0)}}function tw(c,h,_,w,I,P){var V=Qe();try{Oc(c,h,_,w,I,P)}catch(ee){if(Ke(V),ee!==ee+0)throw ee;Je(1,0)}}function rw(c,h,_,w){var I=Qe();try{Pc(c,h,_,w)}catch(P){if(Ke(I),P!==P+0)throw P;Je(1,0)}}function nw(c,h,_,w,I){var P=Qe();try{zc(c,h,_,w,I)}catch(V){if(Ke(P),V!==V+0)throw V;Je(1,0)}}function iw(c,h,_,w,I,P,V){var ee=Qe();try{Lc(c,h,_,w,I,P,V)}catch(ve){if(Ke(ee),ve!==ve+0)throw ve;Je(1,0)}}function sw(c,h,_,w,I,P,V){var ee=Qe();try{Fc(c,h,_,w,I,P,V)}catch(ve){if(Ke(ee),ve!==ve+0)throw ve;Je(1,0)}}function aw(c,h,_,w,I,P,V,ee){var ve=Qe();try{qc(c,h,_,w,I,P,V,ee)}catch(ke){if(Ke(ve),ke!==ke+0)throw ke;Je(1,0)}}function ow(c,h,_,w,I){var P=Qe();try{return Uc(c,h,_,w,I)}catch(V){if(Ke(P),V!==V+0)throw V;Je(1,0)}}function lw(c,h,_){var w=Qe();try{return Hc(c,h,_)}catch(I){if(Ke(w),I!==I+0)throw I;Je(1,0)}}function uw(c,h,_,w,I,P,V,ee){var ve=Qe();try{Gc(c,h,_,w,I,P,V,ee)}catch(ke){if(Ke(ve),ke!==ke+0)throw ke;Je(1,0)}}function dw(c,h,_,w,I,P,V,ee,ve,ke,je,it){var yt=Qe();try{jc(c,h,_,w,I,P,V,ee,ve,ke,je,it)}catch($t){if(Ke(yt),$t!==$t+0)throw $t;Je(1,0)}}function cw(c,h,_){var w=Qe();try{return Kc(c,h,_)}catch(I){if(Ke(w),I!==I+0)throw I;return Je(1,0),0n}}function fw(c,h,_,w,I,P,V,ee,ve){var ke=Qe();try{Rc(c,h,_,w,I,P,V,ee,ve)}catch(je){if(Ke(ke),je!==je+0)throw je;Je(1,0)}}function pw(c){var h=Qe();try{return Xc(c)}catch(_){if(Ke(h),_!==_+0)throw _;Je(1,0)}}function hw(c,h){var _=Qe();try{return ff(c,h)}catch(w){if(Ke(_),w!==w+0)throw w;return Je(1,0),0n}}function mw(c,h,_,w){var I=Qe();try{return Yc(c,h,_,w)}catch(P){if(Ke(I),P!==P+0)throw P;Je(1,0)}}function gw(c){var h=Qe();try{return Zc(c)}catch(_){if(Ke(h),_!==_+0)throw _;return Je(1,0),0n}}function yw(c,h,_,w){var I=Qe();try{return nf(c,h,_,w)}catch(P){if(Ke(I),P!==P+0)throw P;Je(1,0)}}function bw(c,h,_,w,I){var P=Qe();try{return sf(c,h,_,w,I)}catch(V){if(Ke(P),V!==V+0)throw V;Je(1,0)}}function vw(c,h,_,w,I,P){var V=Qe();try{return af(c,h,_,w,I,P)}catch(ee){if(Ke(V),ee!==ee+0)throw ee;Je(1,0)}}function ww(c,h,_,w,I,P){var V=Qe();try{return Vc(c,h,_,w,I,P)}catch(ee){if(Ke(V),ee!==ee+0)throw ee;Je(1,0)}}function _w(c,h,_,w,I,P){var V=Qe();try{return of(c,h,_,w,I,P)}catch(ee){if(Ke(V),ee!==ee+0)throw ee;Je(1,0)}}function xw(c,h,_,w,I,P,V,ee){var ve=Qe();try{return Wc(c,h,_,w,I,P,V,ee)}catch(ke){if(Ke(ve),ke!==ke+0)throw ke;Je(1,0)}}function $w(c,h,_,w,I){var P=Qe();try{return lf(c,h,_,w,I)}catch(V){if(Ke(P),V!==V+0)throw V;return Je(1,0),0n}}function Sw(c,h,_,w){var I=Qe();try{return uf(c,h,_,w)}catch(P){if(Ke(I),P!==P+0)throw P;Je(1,0)}}function kw(c,h,_,w){var I=Qe();try{return df(c,h,_,w)}catch(P){if(Ke(I),P!==P+0)throw P;Je(1,0)}}function Tw(c,h,_,w,I,P,V,ee,ve,ke,je,it){var yt=Qe();try{return cf(c,h,_,w,I,P,V,ee,ve,ke,je,it)}catch($t){if(Ke(yt),$t!==$t+0)throw $t;Je(1,0)}}function Cw(c,h,_,w,I,P,V,ee,ve,ke,je){var it=Qe();try{tf(c,h,_,w,I,P,V,ee,ve,ke,je)}catch(yt){if(Ke(it),yt!==yt+0)throw yt;Je(1,0)}}function Ew(c,h,_,w,I,P,V,ee,ve,ke,je,it,yt,$t,Fn,Ml){var zw=Qe();try{rf(c,h,_,w,I,P,V,ee,ve,ke,je,it,yt,$t,Fn,Ml)}catch(Rl){if(Ke(zw),Rl!==Rl+0)throw Rl;Je(1,0)}}function Iw(c,h,_){var w=Qe();try{return Qc(c,h,_)}catch(I){if(Ke(w),I!==I+0)throw I;Je(1,0)}}function Aw(c,h,_){var w=Qe();try{return Jc(c,h,_)}catch(I){if(Ke(w),I!==I+0)throw I;Je(1,0)}}function Ow(c,h,_,w){var I=Qe();try{ef(c,h,_,w)}catch(P){if(Ke(I),P!==P+0)throw P;Je(1,0)}}function Qa(){if(0<dt)M=Qa;else if(i)$?.(t),Se();else{for(var c=He;0<c.length;)c.shift()(t);0<dt?M=Qa:(t.calledRun=!0,D||(Se(),$?.(t)))}}return i||(bn=await bt(),Qa()),t.PTR_SIZE=4,re?t:new Promise((c,h)=>{$=c,E=h})}var Cy,sp,Qx=pe(()=>{"use strict";Cy=ip,sp=globalThis.self?.name?.startsWith("em-pthread"),sp&&ip()}),nu,hd,ap,vr,Ey,lo,op,lp,iu,up,su,Iy,au,Ay,Xd=pe(()=>{"use strict";Kd(),nu=typeof location>"u"?void 0:location.origin,hd=import.meta.url>"file:"&&import.meta.url<"file;",ap=()=>{if(hd){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,nu).href}return import.meta.url},vr=ap(),Ey=()=>{if(vr&&!vr.startsWith("blob:"))return vr.substring(0,vr.lastIndexOf("/")+1)},lo=(e,t)=>{try{let r=t??vr;return(r?new URL(e,r):new URL(e)).origin===nu}catch{return!1}},op=(e,t)=>{let r=t??vr;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},lp=(e,t)=>`${t??"./"}${e}`,iu=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},up=async e=>(await import(e)).default,su=(Zx(),pa(Sy)).default,Iy=async()=>{if(!vr)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(lo(vr))return[void 0,su()];let e=await iu(vr);return[e,su(e)]},au=(Qx(),pa(Ty)).default,Ay=async(e,t,r,n)=>{let i=au&&!(e||t);if(i)if(vr)i=lo(vr)||n&&!r;else if(n&&!r)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,au];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??op(s,t),o=r&&a&&!lo(a,t),l=o?await iu(a):a??lp(s,t);return[o?l:void 0,await up(l)]}}}),ou,uo,Ms,lu,dp,cp,fp,Yd,xt,Wi=pe(()=>{"use strict";Xd(),uo=!1,Ms=!1,lu=!1,dp=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},cp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},fp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Yd=async e=>{if(uo)return Promise.resolve();if(Ms)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(lu)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ms=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!fp())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!cp())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=dp();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,a=i?.mjs,o=a?.href??a,l=i?.wasm,d=l?.href??l,f=e.wasmBinary,[p,g]=await Ay(o,s,r>1,!!f||!!d),b=!1,y=[];if(t>0&&y.push(new Promise($=>{setTimeout(()=>{b=!0,$()},t)})),y.push(new Promise(($,E)=>{let S={numThreads:r};if(f)S.wasmBinary=f,S.locateFile=x=>x;else if(d||s)S.locateFile=x=>d??s+x;else if(o&&o.indexOf("blob:")!==0)S.locateFile=x=>new URL(x,o).href;else if(p){let x=Ey();x&&(S.locateFile=A=>x+A)}g(S).then(x=>{Ms=!1,uo=!0,ou=x,$(),p&&URL.revokeObjectURL(p)},x=>{Ms=!1,lu=!0,E(x)})})),await Promise.race(y),b)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},xt=()=>{if(uo&&ou)return ou;throw new Error("WebAssembly is not initialized yet.")}}),Wr,Fo,ct,Zd=pe(()=>{"use strict";Wi(),Wr=(e,t)=>{let r=xt(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},Fo=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,s])=>{let a=t?t+i:i;if(typeof s=="object")Fo(s,a+".",r,n);else if(typeof s=="string"||typeof s=="number")n(a,s.toString());else if(typeof s=="boolean")n(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},ct=e=>{let t=xt(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);let s=Number(t.getValue(i,n===4?"i32":"i64")),a=t.getValue(i+n,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Oy,Jx=pe(()=>{"use strict";Wi(),Zd(),Oy=e=>{let t=xt(),r=0,n=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let s=0;return e?.tag!==void 0&&(s=Wr(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),r===0&&ct("Can't create run options."),e?.extra!==void 0&&Fo(e.extra,"",new WeakSet,(a,o)=>{let l=Wr(a,n),d=Wr(o,n);t._OrtAddRunConfigEntry(r,l,d)!==0&&ct(`Can't set a run config entry: ${a} - ${o}.`)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(a=>t._free(a)),s}}}),pp,hp,mp,Si,gp,zy,e$=pe(()=>{"use strict";Wi(),Zd(),pp=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},hp=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},mp=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Si=(e,t,r,n)=>{let i=Wr(t,n),s=Wr(r,n);xt()._OrtAddSessionConfigEntry(e,i,s)!==0&&ct(`Can't set a session config entry: ${t} - ${r}.`)},gp=async(e,t,r)=>{let n=t.executionProviders;for(let i of n){let s=typeof i=="string"?i:i.name,a=[];switch(s){case"webnn":if(s="WEBNN",Si(e,"session.disable_quant_qdq","1",r),Si(e,"session.disable_qdq_constant_folding","1",r),typeof i!="string"){let p=i?.deviceType;p&&Si(e,"deviceType",p,r)}break;case"webgpu":if(s="JS",typeof i!="string"){let p=i;if(p?.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Si(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=Wr(s,r),l=a.length,d=0,f=0;if(l>0){d=xt()._malloc(l*xt().PTR_SIZE),r.push(d),f=xt()._malloc(l*xt().PTR_SIZE),r.push(f);for(let p=0;p<l;p++)xt().setValue(d+p*xt().PTR_SIZE,a[p][0],"*"),xt().setValue(f+p*xt().PTR_SIZE,a[p][1],"*")}await xt()._OrtAppendExecutionProvider(e,o,d,f,l)!==0&&ct(`Can't append execution provider: ${s}.`)}},zy=async e=>{let t=xt(),r=0,n=[],i=e||{};mp(i);try{let s=pp(i.graphOptimizationLevel??"all"),a=hp(i.executionMode??"sequential"),o=typeof i.logId=="string"?Wr(i.logId,n):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let f=typeof i.optimizedModelFilePath=="string"?Wr(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,l,d,f),r===0&&ct("Can't create session options."),i.executionProviders&&await gp(r,i,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Si(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[p,g]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let b=Wr(p,n);t._OrtAddFreeDimensionOverride(r,b,g)!==0&&ct(`Can't set a free dimension override: ${p} - ${g}.`)}return i.extra!==void 0&&Fo(i.extra,"",new WeakSet,(p,g)=>{Si(r,p,g,n)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ct("Can't release session options."),n.forEach(a=>t._free(a)),s}}}),zi,In,Mi,ll,jo,Qd,Jd,md,Pe=pe(()=>{"use strict";zi=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},In=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Mi=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return r>0?Math.ceil(n*r):void 0},ll=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},jo=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Qd=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Jd=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",md=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ec,My=pe(()=>{"use strict";Kd(),ec=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let l=Math.ceil(n/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await i.read();if(o)break;let d=l.byteLength;new Uint8Array(s,a,d).set(l),a+=d}return new Uint8Array(s,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),yp,bp,vp,wp,tc,_p,nt,Mn=pe(()=>{"use strict";Pe(),yp=["V","I","W","E","F"],bp=(e,t)=>{console.log(`[${yp[e]},${new Date().toISOString()}]${t}`)},tc=(e,t)=>{vp=e,wp=t},_p=(e,t)=>{let r=jo(e),n=jo(vp);r>=n&&bp(r,typeof t=="function"?t():t)},nt=(...e)=>{wp&&_p(...e)}}),xp,ms,K,Vo,Ry,By,Py,Ue=pe(()=>{"use strict";xp=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},ms=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(n<2||i<2)return;let o=xp.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=r?3:1;o<=s;o++){let l=n-o<0?1:e[n-o],d=i-o<0?1:t[i-o];if(l!==d&&l>1&&d>1)return;let f=Math.max(l,d);if(l&&d)a[s-o]=Math.max(l,d);else{if(f>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},K=class Co{static size(t){return Co.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),s=n-1;for(;s>=0;){if(t[s]%r===0){i[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,r/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Co.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Co.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let s=r;s<n;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,s)=>i+r[s]+r[s+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},Vo=class Gn{static adjustPoolAttributes(t,r,n,i,s,a){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<n.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=n[o]||a[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)Gn.adjustPadAndReturnShape(t[l+(a?1:2)],r[l],n[l],i[l],s,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,n,i,s,a,o,l=0){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return Gn.computeShapeHelper(t,r,d,n,i,s,a,o,l),d}static computeConvOutputShape(t,r,n,i,s,a,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return Gn.computeShapeHelper(!1,t,l,n,i,s,a,o),l}static computeShapeHelper(t,r,n,i,s,a,o,l,d=0){if(t)for(let f=0;f<r.length-2;f++)n.push(1);else for(let f=0;f<r.length-2;f++)n.push(Gn.adjustPadAndReturnShape(r[f+2],i[f],s[f],a[f],o,f,f+r.length-2,l,d))}static computeOutputSize(t,r,n,i,s){let a=Math.floor(t/r)+1;return s===1&&(a=Math.ceil(t/r)+1,(a-1)*r>=n+i&&(a-=1)),a}static adjustPadAndReturnShape(t,r,n,i,s,a,o,l,d=0){let f=n*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[o]=0,Gn.computeOutputSize(t-f,r,t,0,d);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=(Math.floor((t+r-1)/r)-1)*r+i-t;return s[a]=Math.floor(l==="SAME_LOWER"?(p+1)/2:p/2),s[o]=p-s[a],Gn.computeOutputSize(t+s[a]+s[o]-f,r,t,s[a],d)}default:throw new Error("Unsupported AutoPad type")}else return Gn.computeOutputSize(t+s[a]+s[o]-f,r,t,s[a],d)}},Ry=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let l=-1;if(n?(o=r[0],l=1):(o=r[1],l=0),r[l]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(i&&!ms.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},By=-34028234663852886e22,Py=34028234663852886e22}),rc,Dy=pe(()=>{"use strict";Pe(),rc=(e,t)=>new(ll(t))(e)}),uu,$p,du,Sp,cu,kp,fu,pu,hu,Tp,Ny,t$=pe(()=>{"use strict";Pe(),Mn(),uu=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),$p=(e,t)=>{if(t==="int32")return e;let r=uu.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=e.byteLength/n,s=new(ll(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let o=0;o<i;o++){let l=s[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},du=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Sp=1,cu=()=>Sp++,kp=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),fu=(e,t)=>{let r=uu.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},pu=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:i,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return fu(this.dataType,this.tensorShape)}destroy(){nt("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=du(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},hu=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let i=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!s?.input.dataTypes.includes(t)){if(a=kp.get(t),!a||!s?.input.dataTypes.includes(a))throw new Error(`WebNN backend does not support data type: ${t}`);nt("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==fu(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,a),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=$p(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else nt("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?du(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Tp=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=cu();return this.tensorTrackersById.set(e,new hu(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){nt("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,n,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){nt("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let i=this.getMLContext(e),s=cu(),a=new pu({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(s,new hu(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,r,n,i,s,a){let o=this.getMLContext(e);for(let[d,f]of this.freeTensors.entries())if(f.canReuseTensor(o,t,r)){nt("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let p=this.freeTensors.splice(d,1)[0];return p.sessionId=e,p}nt("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:a??t,shape:r,dimensions:r,usage:n,writable:i,readable:s});return new pu({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Ny=(...e)=>new Tp(...e)}),Rs,Cp,Uy,r$=pe(()=>{"use strict";Pe(),Wi(),Dy(),t$(),Mn(),Rs=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Cp=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,s)=>i===n[s]&&e[i]===t[i])},Uy=class{constructor(e){this.tensorManager=Ny(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,tc(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){nt("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){nt("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)nt("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>Cp(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){nt("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){let s=Rs.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,n,i)}async createTemporaryTensor(e,t,r){nt("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=Rs.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!xt().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");nt("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return rc(r,t)}}registerMLTensor(e,t,r,n){let i=Rs.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,i,n);return nt("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${s}}`),s}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=Rs.get(zi(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof n>"u"?!1:r?!!i?.input.dataTypes.includes(n):!!i?.output.dataTypes.includes(n)}flush(){}}}),nc=pe(()=>{"use strict"}),mu,co,fo,Ep,Ip,gu,gd,Ap,Ly,n$=pe(()=>{"use strict";Mn(),nc(),mu=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),co=[],fo=e=>Math.ceil(Number(e)/16)*16,Ep=e=>{for(let t=0;t<co.length;t++){let r=co[t];if(e<=r)return r}return Math.ceil(e/16)*16},Ip=1,gu=()=>Ip++,gd=async(e,t,r,n)=>{let i=fo(r),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(n){let l=n();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},Ap=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of mu)co.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,s=fo(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);if(s===i&&n%4===0)this.backend.device.queue.writeBuffer(a.gpuData.buffer,0,r,n,i);else{let o=new Uint8Array(s);o.set(t),this.backend.device.queue.writeBuffer(a.gpuData.buffer,0,o,0,s)}nt("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=fo(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return nt("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=gu();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),nt("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),nt("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Ep(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let a={id:gu(),type:0,buffer:n};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),nt("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return nt("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await gd(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=mu.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(nt("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Ly=(...e)=>new Ap(...e)}),Op,ut,At=pe(()=>{"use strict";Op=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ut=e=>new Op(e)}),gs,po,qt,Wt,Oe,It,yd,ls,ti,Ae,Bs,J,Ce,Fy,ic,zp,jy,Le=pe(()=>{"use strict";Pe(),Ue(),gs=64,po=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},qt=(e,t=1)=>{let r=po(e,t);return typeof r=="string"?r:r[0]},Wt=(e,t=1)=>{let r=po(e,t);return typeof r=="string"?r:r[1]},Oe=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:K.computeStrides(r)})}),t},It=e=>e%4===0?4:e%2===0?2:1,yd=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,ls=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,ti=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Ae=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Bs=(e,t,r,n,i)=>{let s=typeof r=="number",a=s?r:r.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=po(t,i),f=typeof d=="string"?d:d[1],p=typeof d=="string"?d:d[0],g={indices:l,value:f,storage:p,tensor:t},b=re=>typeof re=="string"?re:`${re}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=s?"uniforms.":"",E=`${$}${e}_shape`,S=`${$}${e}_strides`,x="";for(let re=0;re<a-1;re++)x+=`
    let dim${re} = current / ${Ae(S,re,a)};
    let rest${re} = current % ${Ae(S,re,a)};
    indices[${re}] = dim${re};
    current = rest${re};
    `;x+=`indices[${a-1}] = current;`;let A=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${x}
    return indices;
  }`,C=re=>(y.offsetToIndices=!0,a<2?re:`o2i_${e}(${re})`),O=[];if(a>=2)for(let re=a-1;re>=0;re--)O.push(`${Ae(S,re,a)} * (indices[${re}])`);let D=a<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${O.join("+")};
  }`,N=re=>(y.indicesToOffset=!0,a<2?re:`i2o_${e}(${re})`),T=(...re)=>a===0?"0u":`${g.indices}(${re.map(b).join(",")})`,W=(re,xe)=>a<2?`${re}`:`${Ae(re,xe,a)}`,Y=(re,xe,Se)=>a<2?`${re}=${Se};`:`${Ae(re,xe,a)}=${Se};`,ae={},X=(re,xe)=>{y.broadcastedIndicesToOffset=!0;let Se=`${xe.name}broadcastedIndicesTo${e}Offset`;if(Se in ae)return`${Se}(${re})`;let be=[];for(let et=a-1;et>=0;et--){let bt=xe.indicesGet("outputIndices",et+xe.rank-a);be.push(`${W(S,et)} * (${bt} % ${W(E,et)})`)}return ae[Se]=`fn ${Se}(outputIndices: ${xe.type.indices}) -> u32 {
             return ${be.length>0?be.join("+"):"0u"};
           }`,`${Se}(${re})`},le=(re,xe)=>(()=>{if(g.storage===g.value)return`${e}[${re}]=${xe};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${re}]=vec2<u32>(u32(${xe}), select(0u, 0xFFFFFFFFu, ${xe} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${re}]=vec2<u32>(u32(${xe}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${re}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${xe}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),q=re=>(()=>{if(g.storage===g.value)return`${e}[${re}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${re}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${re}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${re}] & 0xFFu), bool(${e}[${re}] & 0xFF00u), bool(${e}[${re}] & 0xFF0000u), bool(${e}[${re}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),te=a<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${f} {
    return ${q(`i2o_${e}(indices)`)};
  }`,ce=a<2?"":(()=>{let re=o.map(Se=>`d${Se}: u32`).join(", "),xe=o.map(Se=>`d${Se}`).join(", ");return`
  fn get_${e}(${re}) -> ${f} {
    return get_${e}ByIndices(${T(xe)});
  }`})(),ue=(...re)=>{if(re.length!==a)throw new Error(`indices length must be ${a}`);let xe=re.map(b).join(",");return a===0?q("0u"):a===1?q(xe[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${xe})`)},Q=re=>a<2?q(re):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${re})`),we=a<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${f}) {
    ${le(`i2o_${e}(indices)`,"value")}
  }`,Te=a<2?"":(()=>{let re=o.map(Se=>`d${Se}: u32`).join(", "),xe=o.map(Se=>`d${Se}`).join(", ");return`
  fn set_${e}(${re}, value: ${f}) {
    set_${e}ByIndices(${T(xe)}, value);
  }`})();return{impl:()=>{let re=[],xe=!1;return y.offsetToIndices&&(re.push(A),xe=!0),y.indicesToOffset&&(re.push(D),xe=!0),y.broadcastedIndicesToOffset&&(Object.values(ae).forEach(Se=>re.push(Se)),xe=!0),y.set&&(re.push(Te),xe=!0),y.setByIndices&&(re.push(we),xe=!0),y.get&&(re.push(ce),xe=!0),y.getByIndices&&(re.push(te),xe=!0),!s&&xe&&re.unshift(`const ${E} = ${g.indices}(${r.join(",")});`,`const ${S} = ${g.indices}(${K.computeStrides(r).join(",")});`),re.join(`
`)},type:g,offsetToIndices:C,indicesToOffset:N,broadcastedIndicesToOffset:X,indices:T,indicesGet:W,indicesSet:Y,set:(...re)=>{if(re.length!==a+1)throw new Error(`indices length must be ${a}`);let xe=re[a];if(typeof xe!="string")throw new Error("value must be string");let Se=re.slice(0,a).map(b).join(",");return a===0?le("0u",xe):a===1?le(Se[0],xe):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${Se}, ${xe})`)},setByOffset:le,setByIndices:(re,xe)=>a<2?le(re,xe):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${re}, ${xe});`),get:ue,getByOffset:q,getByIndices:Q,usage:n,name:e,strides:S,shape:E,rank:a}},J=(e,t,r,n=1)=>Bs(e,t,r,"input",n),Ce=(e,t,r,n=1)=>Bs(e,t,r,"output",n),Fy=(e,t,r)=>Bs(e,t,r,"atomicOutput",1),ic=(e,t,r,n=1)=>Bs(e,t,r,"internal",n),zp=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=gs){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{let i=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},jy=(e,t)=>new zp(e,t)}),Mp,yu,Rp,Bp,Pp,Dp,xr,Vy,Wy,ni=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),Mp=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},yu=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Rp=(e,t)=>K.sortBasedOnPerm(e,yu(e.length,t)),Bp=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},Pp=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},Dp=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},xr=(e,t)=>{let r=e.dataType,n=e.dims.length,i=yu(n,t),s=Rp(e.dims,i),a=e.dims,o=s,l=n<2||Dp(i,e.dims),d;if(l)return d=y=>{let $=J("input",r,a,4),E=Ce("output",r,o,4);return`
  ${y.registerUniform("output_size","u32").declareVariables($,E)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=K.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:f,newPerm:p}=Pp(e.dims,i),g=K.areEqual(p,[2,3,1]),b=K.areEqual(p,[3,1,2]);if(f.length===2||g||b){a=g?[f[0],f[1]*f[2]]:b?[f[0]*f[1],f[2]]:f,o=[a[1],a[0]];let y=16;return d=$=>{let E=J("a",r,a.length),S=Ce("output",r,o.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(E,S)}
  var<workgroup> tile : array<array<${S.type.value}, ${y+1}>, ${y}>;
  ${$.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${E.getByIndices(`${E.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${S.setByIndices(`${S.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=K.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/y),y:Math.ceil(o[0]/y)},programUniforms:[{type:12,data:$},...Oe(a,o)]}},getShaderSource:d}}return d=y=>{let $=J("a",r,a.length),E=Ce("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables($,E)}

  ${Bp(i,n,$,E)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${E.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${E.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=K.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Oe(a,o)]}},getShaderSource:d}},Vy=(e,t)=>{Mp(e.inputs,t.perm),e.compute(xr(e.inputs[0],t.perm))},Wy=e=>ut({perm:e.perm})}),Np,Up,Lp,Fp,jp,Vp,Wp,qp,Hp,Gp,Dr,qy,Hy,Gy,Ky,Xy,Yy,Zy,Qy,Jy,eb,i$=pe(()=>{"use strict";Pe(),Ue(),Le(),sc(),ni(),Np={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Up={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Lp={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Fp={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},jp=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},Vp=(e,t)=>{let r=[],n=e.length;for(let s=0;s<n;s++)t.indexOf(s)===-1&&r.push(e[s]);let i=t.map(s=>e[s]);return[r,i]},Wp=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?n.push(e[i++]):n.push(1);return n},qp=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Hp=(e,t)=>{let r=[];if(!qp(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},Gp=(e,t,r,n,i,s,a)=>{let o=r[0].dims,l=K.size(s),d=K.size(a),f=J("_A",r[0].dataType,o),p=Ce("output",i,s),g=64;l===1&&(g=256);let b=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,y=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(f,p)}
        ${b}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Lp[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${Np[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Up[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${n==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${Fp[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Dr=(e,t,r,n)=>{let i=e.inputs.length===1?r:bd(e.inputs,r),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((b,y)=>y));let a=K.normalizeAxes(s,e.inputs[0].dims.length),o=a,l=e.inputs[0],d=Hp(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(xr(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=jp(o.length,l.dims.length));let[f,p]=Vp(l.dims,o),g=f;i.keepDims&&(g=Wp(f,a)),e.compute(Gp(t,i.cacheKey,[l],n,e.inputs[0].dataType,g,p),{inputs:[l]})},qy=(e,t)=>{Dr(e,"ReduceMeanShared",t,"mean")},Hy=(e,t)=>{Dr(e,"ReduceL1Shared",t,"l1")},Gy=(e,t)=>{Dr(e,"ReduceL2Shared",t,"l2")},Ky=(e,t)=>{Dr(e,"ReduceLogSumExpShared",t,"logSumExp")},Xy=(e,t)=>{Dr(e,"ReduceMaxShared",t,"max")},Yy=(e,t)=>{Dr(e,"ReduceMinShared",t,"min")},Zy=(e,t)=>{Dr(e,"ReduceProdShared",t,"prod")},Qy=(e,t)=>{Dr(e,"ReduceSumShared",t,"sum")},Jy=(e,t)=>{Dr(e,"ReduceSumSquareShared",t,"sumSquare")},eb=(e,t)=>{Dr(e,"ReduceLogSumShared",t,"logSum")}}),Nr,Kp,Wo,bd,Ur,Xp,Yp,Zp,Qp,Jp,eh,th,rh,nh,ih,Lr,tb,rb,nb,ib,sb,ab,ob,lb,ub,db,sc=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),i$(),Nr=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Kp=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Wo=(e,t,r,n,i,s,a=!1,o=!1)=>{let l=[],d=r[0].dims,f=d.length,p=K.normalizeAxes(i,f),g=!o&&p.length===0;d.forEach(($,E)=>{g||p.indexOf(E)>=0?a&&l.push(1):l.push($)});let b=l.length,y=K.size(l);return{name:e,shaderCache:t,getShaderSource:$=>{let E=[],S=J("_A",r[0].dataType,f),x=Ce("output",s,b),A=n(S,x,p),C=A[2];for(let O=0,D=0;O<f;O++)g||p.indexOf(O)>=0?(a&&D++,C=`for(var j${O}: u32 = 0; j${O} < ${d[O]}; j${O}++) {
                  ${A[2].includes("last_index")?`let last_index = j${O};`:""}
                  ${S.indicesSet("input_indices",O,`j${O}`)}
                  ${C}
                }`):(E.push(`${S.indicesSet("input_indices",O,x.indicesGet("output_indices",D))};`),D++);return`

        ${$.registerUniform("output_size","u32").declareVariables(S,x)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${S.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${E.join(`
`)}
          ${A[0]}       // init ops for reduce max/min
          ${A[1]}
          ${C}
          ${A[3]}
          ${A.length===4?x.setByOffset("global_idx","value"):A.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Oe(d,l)]})}},bd=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),ut({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ur=(e,t,r,n)=>{let i=e.inputs,s=i.length===1?r:bd(i,r);e.compute(Wo(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?Kp:n,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Xp=(e,t)=>{Nr(e.inputs),Ur(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Yp=(e,t)=>{Nr(e.inputs),Ur(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Zp=(e,t)=>{Nr(e.inputs),Ur(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Qp=(e,t)=>{Nr(e.inputs),Ur(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Jp=(e,t)=>{Nr(e.inputs),Ur(e,"ReduceMax",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},eh=(e,t)=>{Nr(e.inputs),Ur(e,"ReduceMean",t,(r,n,i)=>{let s=1;for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${s});`]})},th=(e,t)=>{Nr(e.inputs),Ur(e,"ReduceMin",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},rh=(e,t)=>{Nr(e.inputs),Ur(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},nh=(e,t)=>{Nr(e.inputs),Ur(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},ih=(e,t)=>{Nr(e.inputs),Ur(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Lr=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?n*=e[s]:i*=e[s];return i<32&&n>1024},tb=(e,t)=>{Lr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eh(e,t):qy(e,t)},rb=(e,t)=>{Lr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Yp(e,t):Hy(e,t)},nb=(e,t)=>{Lr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zp(e,t):Gy(e,t)},ib=(e,t)=>{Lr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qp(e,t):Ky(e,t)},sb=(e,t)=>{Lr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jp(e,t):Xy(e,t)},ab=(e,t)=>{Lr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?th(e,t):Yy(e,t)},ob=(e,t)=>{Lr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rh(e,t):Zy(e,t)},lb=(e,t)=>{Lr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nh(e,t):Qy(e,t)},ub=(e,t)=>{Lr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ih(e,t):Jy(e,t)},db=(e,t)=>{Lr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xp(e,t):eb(e,t)}}),bu,cb,fb,vd,s$=pe(()=>{"use strict";Pe(),At(),sc(),bu=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},cb=(e,t)=>{bu(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Wo("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},fb=(e,t)=>{bu(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Wo("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},vd=e=>ut(e)}),sh,ho,ah,oh,lh,ha,uh,pb,ac=pe(()=>{"use strict";Pe(),Ue(),nc(),Le(),sh=(e,t)=>{let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],f=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,g=p,b=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let A of t.qkvHiddenSizes)if(A%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],b=t.qkvHiddenSizes[2]}let y=d;if(p!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+g+b)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(a){if(g!==b)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=a.dims[3])}let E=y+$,S=-1,x=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==E)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:$,kvSequenceLength:y,totalSequenceLength:E,maxSequenceLength:S,inputHiddenSize:f,hiddenSize:p,vHiddenSize:b,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(b/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ho=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,ah=(e,t,r,n,i,s,a,o)=>{let l=It(a?1:s),d=64,f=s/l;f<d&&(d=32);let p=Math.ceil(s/l/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:f},{type:12,data:p}],b=qt(e.dataType,l),y=Wt(1,l),$=["type"];a&&$.push("type"),o&&$.push("type");let E=S=>{let x=Ce("x",e.dataType,e.dims,l),A=[x],C=a?J("seq_lens",a.dataType,a.dims):void 0;C&&A.push(C);let O=o?J("total_sequence_length_input",o.dataType,o.dims):void 0;O&&A.push(O);let D=Wt(e.dataType),N=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${S.registerUniforms(N).declareVariables(...A)}
  ${S.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${ho(C,O,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${x.type.value}(${D}(1.0) / ${D}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${D}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${b};${l}`,inputDependencies:$},getShaderSource:E,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:g})}},oh=(e,t,r,n,i,s,a,o,l)=>{let d=a+s.kvSequenceLength,f=[s.batchSize,s.numHeads,s.sequenceLength,d],p=e>1&&n,g=s.kvNumHeads?s.kvNumHeads:s.numHeads,b=p?[s.batchSize,g,d,s.headSize]:void 0,y=s.nReps?s.nReps:1,$=s.scale===0?1/Math.sqrt(s.headSize):s.scale,E=It(s.headSize),S=s.headSize/E,x=12,A={x:Math.ceil(d/x),y:Math.ceil(s.sequenceLength/x),z:s.batchSize*s.numHeads},C=[{type:12,data:s.sequenceLength},{type:12,data:S},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:$},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:y}],O=p&&n&&K.size(n.dims)>0,D=["type","type"];O&&D.push("type"),i&&D.push("type"),o&&D.push("type"),l&&D.push("type");let N=[{dims:f,dataType:t.dataType,gpuDataType:0}];p&&N.push({dims:b,dataType:t.dataType,gpuDataType:0});let T=W=>{let Y=J("q",t.dataType,t.dims,E),ae=J("key",r.dataType,r.dims,E),X=[Y,ae];if(O){let we=J("past_key",n.dataType,n.dims,E);X.push(we)}i&&X.push(J("attention_bias",i.dataType,i.dims));let le=o?J("seq_lens",o.dataType,o.dims):void 0;le&&X.push(le);let q=l?J("total_sequence_length_input",l.dataType,l.dims):void 0;q&&X.push(q);let te=Ce("output",t.dataType,f),ce=[te];p&&ce.push(Ce("present_key",t.dataType,b,E));let ue=Wt(1,E),Q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${Y.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${Y.type.storage}, ${x*x}>;
  ${W.registerUniforms(Q).declareVariables(...X,...ce)}
  ${W.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${ho(le,q,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${O&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ue}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${O&&p?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${p?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ue}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(E){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${E}`)}})()};
        output[outputIdx] = ${te.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${E};${i!==void 0};${n!==void 0};${e}`,inputDependencies:D},getRunData:()=>({outputs:N,dispatchGroup:A,programUniforms:C}),getShaderSource:T}},lh=(e,t,r,n,i,s,a=void 0,o=void 0)=>{let l=s+i.kvSequenceLength,d=i.nReps?i.nReps:1,f=i.vHiddenSize*d,p=e>1&&n,g=i.kvNumHeads?i.kvNumHeads:i.numHeads,b=p?[i.batchSize,g,l,i.headSize]:void 0,y=[i.batchSize,i.sequenceLength,f],$=12,E={x:Math.ceil(i.vHeadSize/$),y:Math.ceil(i.sequenceLength/$),z:i.batchSize*i.numHeads},S=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:f},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:d}],x=p&&n&&K.size(n.dims)>0,A=["type","type"];x&&A.push("type"),a&&A.push("type"),o&&A.push("type");let C=[{dims:y,dataType:t.dataType,gpuDataType:0}];p&&C.push({dims:b,dataType:t.dataType,gpuDataType:0});let O=D=>{let N=J("probs",t.dataType,t.dims),T=J("v",r.dataType,r.dims),W=[N,T];x&&W.push(J("past_value",n.dataType,n.dims));let Y=a?J("seq_lens",a.dataType,a.dims):void 0;a&&W.push(Y);let ae=o?J("total_sequence_length_input",o.dataType,o.dims):void 0;o&&W.push(ae);let X=[Ce("output",t.dataType,y)];p&&X.push(Ce("present_value",t.dataType,b));let le=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${N.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${N.type.value}, ${$*$}>;
  ${D.registerUniforms(le).declareVariables(...W,...X)}
  ${D.mainStart([$,$,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ho(Y,ae,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${N.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${x&&p?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${p?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:C,dispatchGroup:E,programUniforms:S}),getShaderSource:O}},ha=(e,t,r,n,i,s,a,o,l,d,f=void 0,p=void 0)=>{let g=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),b=g>1?a:void 0,y=g>1?o:void 0,$=g>1?d.pastSequenceLength:0,E=$+d.kvSequenceLength,S=l&&K.size(l.dims)>0?l:void 0,x=[t,r];b&&K.size(b.dims)>0&&x.push(b),S&&x.push(S),f&&x.push(f),p&&x.push(p);let A=e.compute(oh(g,t,r,b,S,d,$,f,p),{inputs:x,outputs:g>1?[-1,1]:[-1]})[0];e.compute(ah(A,d.batchSize,d.numHeads,$,d.sequenceLength,E,f,p),{inputs:f&&p?[A,f,p]:[A],outputs:[]});let C=[A,n];y&&K.size(y.dims)>0&&C.push(y),f&&C.push(f),p&&C.push(p),e.compute(lh(g,A,n,y,d,$,f,p),{inputs:C,outputs:g>1?[0,2]:[0]})},uh=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=p=>{let g=Ce("output_q",l[0].dataType,r),b=Ce("output_k",l[0].dataType,r),y=Ce("output_v",l[0].dataType,r),$=J("input",l[0].dataType,l[0].dims),E=J("weight",l[1].dataType,l[1].dims),S=J("bias",l[2].dataType,l[2].dims),x=$.type.storage,A=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${x}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${x}, ${a*a}>;
  var<workgroup> tileWeightK: array<${x}, ${a*a}>;
  var<workgroup> tileWeightV: array<${x}, ${a*a}>;
  ${p.registerUniforms(A).declareVariables($,E,S,g,b,y)}
  ${p.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${x}(0);
    var valueK = ${x}(0);
    var valueV = ${x}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:f},{inputs:l,outputs:[-1,-1,-1]})},pb=(e,t)=>{let r=sh(e.inputs,t),[n,i,s]=uh(e,r);return ha(e,n,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),dh,ch,fh,hb,a$=pe(()=>{"use strict";Br(),Pe(),Ue(),At(),Le(),dh=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,s)=>{let a=i.length;if(a!==n.length)throw new Error(`${s}: num dimensions != ${a}`);i.forEach((o,l)=>{if(o!==n[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},ch=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,s=e[0].dims,a=n?It(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?a:1,l=K.size(s)/a,d=n,f=d?s.length:s,p=J("x",e[0].dataType,e[0].dims,a),g=J("scale",e[1].dataType,e[1].dims,o),b=J("bias",e[2].dataType,e[2].dims,o),y=J("inputMean",e[3].dataType,e[3].dims,o),$=J("inputVar",e[4].dataType,e[4].dims,o),E=Ce("y",e[0].dataType,f,a),S=()=>{let A="";if(n)A=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")A=`
            ${E.indicesSet("outputIndices","0","0")}
            let cOffset = ${E.indicesToOffset("outputIndices")};`;else{A=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let C=1;C<g.rank;C++)A+=`cIndices[${C}] = outputIndices[${C}];`;A+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return A},x=A=>`
  const epsilon = ${r};
  ${A.registerUniform("outputSize","u32").declareVariables(p,g,b,y,$,E)}
  ${A.mainStart()}
  ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${E.offsetToIndices(`global_idx * ${a}`)};
    ${S()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${b.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${E.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...Oe(s)]:[{type:12,data:l}]})}},fh=e=>ut(e),hb=(e,t)=>{let{inputs:r,outputCount:n}=e,i=fh({...t,outputCount:n});if(_t.webgpu.validateInputContent&&dh(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(ch(r,i))}}),ph,hh,mb,o$=pe(()=>{"use strict";Ue(),Le(),ph=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},hh=e=>{let t=e[0].dims,r=e[0].dims[2],n=K.size(t)/4,i=e[0].dataType,s=J("input",i,t,4),a=J("bias",i,[r],4),o=J("residual",i,t,4),l=Ce("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,a,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},mb=e=>{ph(e.inputs),e.compute(hh(e.inputs))}}),mh,st,gb,yb,bb,vb,wb,_b,xb,$b,Sb,gh,kb,Tb,Cb,Eb,Hs,Ib,Eo,Ab,Ob,zb,Mb,Rb,Bb,Pb,Db,Nb,Ub,Lb,Fb,jb,Vb,Wb,qb,Hb,vu,Gb,wd,_d,Kb,Xb,Yb,yh,bh,Zb,oc=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),mh=(e,t,r,n,i,s,a)=>{let o=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=J("inputData",r,[o],4),f=Ce("outputData",n,[o],4),p=[{name:"vec_size",type:"u32"}];return a&&p.push(...a),`
      ${e.registerUniforms(p).declareVariables(d,f)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",l)}
  }`},st=(e,t,r,n,i,s=e.dataType,a,o)=>{let l=[{type:12,data:Math.ceil(K.size(e.dims)/4)}];return a&&l.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>mh(d,K.size(e.dims),e.dataType,s,r,n,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(K.size(d[0].dims)/64/4)},programUniforms:l})}},gb=e=>{e.compute(st(e.inputs[0],"Abs","abs"))},yb=e=>{e.compute(st(e.inputs[0],"Acos","acos"))},bb=e=>{e.compute(st(e.inputs[0],"Acosh","acosh"))},vb=e=>{e.compute(st(e.inputs[0],"Asin","asin"))},wb=e=>{e.compute(st(e.inputs[0],"Asinh","asinh"))},_b=e=>{e.compute(st(e.inputs[0],"Atan","atan"))},xb=e=>{e.compute(st(e.inputs[0],"Atanh","atanh"))},$b=e=>ut(e),Sb=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(st(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},gh=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ut({min:t,max:r})},kb=(e,t)=>{let r=t||gh(e.inputs),n=Wt(e.inputs[0].dataType);e.compute(st(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},Tb=e=>{e.compute(st(e.inputs[0],"Ceil","ceil"))},Cb=e=>{e.compute(st(e.inputs[0],"Cos","cos"))},Eb=e=>{e.compute(st(e.inputs[0],"Cosh","cosh"))},Hs=e=>ut(e),Ib=(e,t)=>{let r=Wt(e.inputs[0].dataType);e.compute(st(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Eo=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Ab=e=>{let t=Wt(e.inputs[0].dataType);e.compute(st(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Eo(t)))},Ob=e=>{e.compute(st(e.inputs[0],"Exp","exp"))},zb=e=>{e.compute(st(e.inputs[0],"Floor","floor"))},Mb=e=>{let t=Wt(e.inputs[0].dataType);e.compute(st(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Eo(t)))},Rb=(e,t)=>{let r=Wt(e.inputs[0].dataType);e.compute(st(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Bb=e=>{e.compute(st(e.inputs[0],"Not",t=>`!${t}`))},Pb=e=>{e.compute(st(e.inputs[0],"Neg",t=>`-${t}`))},Db=e=>{e.compute(st(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Nb=e=>{let t=Wt(e.inputs[0].dataType);e.compute(st(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Ub=e=>{e.compute(st(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Lb=e=>ut(e),Fb=(e,t)=>{let r=Wt(e.inputs[0].dataType);e.compute(st(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},jb=e=>{let t=Wt(e.inputs[0].dataType);e.compute(st(e.inputs[0],"HardSwish",r=>`${r} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${r} + vec4<${t}>(0.5)))`))},Vb=e=>{e.compute(st(e.inputs[0],"Sin","sin"))},Wb=e=>{e.compute(st(e.inputs[0],"Sinh","sinh"))},qb=e=>{e.compute(st(e.inputs[0],"Sqrt","sqrt"))},Hb=e=>{e.compute(st(e.inputs[0],"Tan","tan"))},vu=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Gb=e=>{e.compute(st(e.inputs[0],"Tanh",vu))},wd=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${vu("v")};
}
`,_d=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Kb=e=>{let t=Wt(e.inputs[0].dataType);e.compute(st(e.inputs[0],"FastGelu",_d,wd(t),void 0,e.inputs[0].dataType))},Xb=(e,t)=>{let r=Wt(e.inputs[0].dataType);return e.compute(st(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Yb=e=>{e.compute(st(e.inputs[0],"Log","log"))},yh=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,bh=e=>`quick_gelu_impl(${e})`,Zb=(e,t)=>{let r=Wt(e.inputs[0].dataType);e.compute(st(e.inputs[0],"QuickGelu",bh,yh(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),vh,wh,Qb,l$=pe(()=>{"use strict";Ue(),Le(),oc(),vh=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},wh=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=J("input",e[0].dataType,e[0].dims,4),n=J("bias",e[0].dataType,[e[0].dims[2]],4),i=Ce("output",e[0].dataType,t,4),s=K.size(t)/4,a=qt(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,n,i)}

  ${Eo(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Qb=e=>{vh(e.inputs),e.compute(wh(e.inputs))}}),_h,xh,Fr,Jb,ev,tv,rv,nv,iv,sv,av,ov,lv,u$=pe(()=>{"use strict";Pe(),Ue(),Le(),_h=(e,t,r,n,i,s,a,o,l,d,f,p)=>{let g,b;typeof o=="string"?g=b=(x,A)=>`${o}((${x}),(${A}))`:typeof o=="function"?g=b=o:(g=o.scalar,b=o.vector);let y=Ce("outputData",f,n.length,4),$=J("aData",l,t.length,4),E=J("bData",d,r.length,4),S;if(i)if(s){let x=K.size(t)===1,A=K.size(r)===1,C=t.length>0&&t[t.length-1]%4===0,O=r.length>0&&r[r.length-1]%4===0;x||A?S=y.setByOffset("global_idx",b(x?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),A?`${E.type.value}(${E.getByOffset("0")}.x)`:E.getByOffset("global_idx"))):S=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${E.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",b(a||C?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||O?E.getByOffset("offsetB / 4u"):`${E.type.value}(${E.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else S=y.setByOffset("global_idx",b($.getByOffset("global_idx"),E.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(A,C,O="")=>{let D=`aData[indexA${C}][componentA${C}]`,N=`bData[indexB${C}][componentB${C}]`;return`
            let outputIndices${C} = ${y.offsetToIndices(`global_idx * 4u + ${C}u`)};
            let offsetA${C} = ${$.broadcastedIndicesToOffset(`outputIndices${C}`,y)};
            let offsetB${C} = ${E.broadcastedIndicesToOffset(`outputIndices${C}`,y)};
            let indexA${C} = offsetA${C} / 4u;
            let indexB${C} = offsetB${C} / 4u;
            let componentA${C} = offsetA${C} % 4u;
            let componentB${C} = offsetB${C} % 4u;
            ${A}[${C}] = ${O}(${g(D,N)});
          `};f===9?S=`
            var data = vec4<u32>(0);
            ${x("data",0,"u32")}
            ${x("data",1,"u32")}
            ${x("data",2,"u32")}
            ${x("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:S=`
            ${x("outputData[global_idx]",0)}
            ${x("outputData[global_idx]",1)}
            ${x("outputData[global_idx]",2)}
            ${x("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables($,E,y)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${S}
      }`},xh=(e,t,r,n,i,s,a=r.dataType)=>{let o=r.dims.map(Number),l=n.dims.map(Number),d=!K.areEqual(o,l),f=o,p=K.size(o),g=!1,b=!1,y=[d];if(d){let $=ms.calcShape(o,l,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");f=$.slice(),p=K.size(f);let E=K.size(o)===1,S=K.size(l)===1,x=o.length>0&&o[o.length-1]%4===0,A=l.length>0&&l[l.length-1]%4===0;y.push(E),y.push(S),y.push(x),y.push(A);let C=1;for(let O=1;O<f.length;O++){let D=o[o.length-O],N=l[l.length-O];if(D===N)C*=D;else break}C%4===0?(b=!0,g=!0):(E||S||x||A)&&(g=!0)}else g=!0;return y.push(g),{name:e,shaderCache:{hint:t+y.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>_h($,o,l,f,g,d,b,i,r.dataType,n.dataType,a,s),getRunData:()=>({outputs:[{dims:f,dataType:a}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(K.size(f)/4)},...Oe(o,l,f)]})}},Fr=(e,t,r,n,i,s)=>{e.compute(xh(t,i??"",e.inputs[0],e.inputs[1],r,n,s))},Jb=e=>{Fr(e,"Add",(t,r)=>`${t}+${r}`)},ev=e=>{Fr(e,"Div",(t,r)=>`${t}/${r}`)},tv=e=>{Fr(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},rv=e=>{Fr(e,"Mul",(t,r)=>`${t}*${r}`)},nv=e=>{let t=J("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Fr(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},iv=e=>{Fr(e,"Sub",(t,r)=>`${t}-${r}`)},sv=e=>{Fr(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},av=e=>{Fr(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},ov=e=>{Fr(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},lv=e=>{Fr(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),$h,Sh,kh,Th,uv,dv,d$=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),$h=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,s=n.dims.length;e.forEach((a,o)=>{if(o!==r){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,d)=>{if(d!==t&&l!==n.dims[d])throw new Error("non concat dimensions must match")})}})},Sh=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,kh=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(s):i===0?n.push(`if (inputIndex == ${i}u) { ${s} }`):i===r-1?n.push(`else { ${s} }`):n.push(`else if (inputIndex == ${i}) { ${s} }`)}return n.join(`
`)},Th=(e,t,r,n)=>{let i=K.size(r),s=new Array(e.length),a=new Array(e.length),o=0,l=[],d=[],f=[{type:12,data:i}];for(let $=0;$<e.length;++$)o+=e[$].dims[t],s[$]=o,d.push(e[$].dims.length),a[$]=J(`input${$}`,n,d[$]),l.push("rank"),f.push({type:12,data:s[$]});for(let $=0;$<e.length;++$)f.push(...Oe(e[$].dims));f.push(...Oe(r));let p=Ce("output",n,r.length),g=p.indicesGet("indices",t),b=Array.from(Array(s.length).keys()).map($=>`uniforms.sizeInConcatAxis${$}`).join(","),y=$=>`

  ${(()=>{$.registerUniform("outputSize","u32");for(let E=0;E<e.length;E++)$.registerUniform(`sizeInConcatAxis${E}`,"u32");return $.declareVariables(...a,p)})()}

  ${Sh(s.length,b)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${b});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${kh(a,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f}),getShaderSource:y}},uv=(e,t)=>{let r=e.inputs,n=r[0].dims,i=K.normalizeAxis(t.axis,n.length);$h(r,i);let s=n.slice();s[i]=r.reduce((o,l)=>o+(l.dims.length>i?l.dims[i]:0),0);let a=r.filter(o=>K.size(o.dims)>0);e.compute(Th(a,i,s,r[0].dataType),{inputs:a})},dv=e=>ut({axis:e.axis})}),Fi,ji,Vi,lc,qi=pe(()=>{"use strict";Pe(),Ue(),Fi=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},ji=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Vi=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},lc=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,n]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=e?.activation_params||[By,Py];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Kt,cv,uc=pe(()=>{"use strict";Kt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},cv=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),fv,c$=pe(()=>{"use strict";fv=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ra,dc,cc=pe(()=>{"use strict";Pe(),Ue(),Le(),qi(),ra=(e,t,r,n,i)=>{let s=n-r;return`
      ${Array.from({length:r}).map((a,o)=>`
      if (${Ae(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,Ae(i,o+s,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},dc=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a[a.length-2],d=o[o.length-1],f=a[a.length-1],p=It(d),g=It(f),b=It(l),y=K.size(r)/p/b,$=e.length>2,E=n?n.slice(0,-2):r.slice(0,-2),S=[K.size(E),l,d],x=[{type:12,data:y},{type:12,data:l},{type:12,data:d},{type:12,data:f}];ji(t,x),x.push(...Oe(E,a,o)),$&&x.push(...Oe(e[2].dims)),x.push(...Oe(S));let A=C=>{let O=ic("batch_dims",e[0].dataType,E.length),D=J("a",e[0].dataType,a.length,g),N=J("b",e[1].dataType,o.length,p),T=Ce("output",e[0].dataType,S.length,p),W=qt(T.type.tensor),Y=Fi(t,T.type.value,W),ae=[D,N],X="";if($){let te=i?p:1;ae.push(J("bias",e[2].dataType,e[2].dims.length,te)),X=`${i?`value += bias[col / ${te}];`:`value += ${T.type.value}(bias[row + i]);`}`}let le=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Vi(t,le);let q=()=>{let te=`var a_data: ${D.type.value};`;for(let ce=0;ce<g;ce++)te+=`
              let b_data${ce} = b[(b_offset + (k + ${ce}) * uniforms.N + col) / ${p}];`;for(let ce=0;ce<b;ce++){te+=`a_data = a[(a_offset + (row + ${ce}) * uniforms.K + k) / ${g}];`;for(let ue=0;ue<g;ue++)te+=`
            values[${ce}] = fma(${N.type.value}(a_data${g===1?"":`[${ue}]`}), b_data${ue}, values[${ce}]);
`}return te};return`
  ${C.registerUniforms(le).registerInternalVariables(O).declareVariables(...ae,T)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${b};
    let row = (index1 % stride1) * ${b};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${O.offsetToIndices("batch")};`}

    var a_indices: ${D.type.indices};
    ${ra("a_indices",D,D.rank-2,O.rank,"batch_indices")}
    ${D.indicesSet("a_indices",D.rank-2,0)}
    ${D.indicesSet("a_indices",D.rank-1,0)}
    let a_offset = ${D.indicesToOffset("a_indices")};

    var b_indices: ${N.type.indices};
    ${ra("b_indices",N,N.rank-2,O.rank,"batch_indices")}
    ${N.indicesSet("b_indices",N.rank-2,0)}
    ${N.indicesSet("b_indices",N.rank-1,0)}
    let b_offset = ${N.indicesToOffset("b_indices")};
    var values: array<${T.type.value}, ${b}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${q()}
    }
    for (var i = 0u; i < ${b}u; i++) {
      var value = values[i];
      ${X}
      ${Y}
      let cur_indices = ${T.type.indices}(batch, row + i, col);
      let offset = ${T.indicesToOffset("cur_indices")};
      ${T.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${g};${b};${i}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:x}),getShaderSource:A}}}),Ch,Eh,xd,wu,Ih,$d,Ah,qo,fc=pe(()=>{"use strict";Pe(),Ue(),Le(),qi(),cc(),uc(),Ch=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Eh=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,xd=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],f=i?l:s,p=i?s:l,g=f/t[0],b=s/t[1];if(!((i&&g===4&&e[1]===4||!i&&(g===3||g===4))&&f%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${f/g}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${b};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Ch(i,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Eh(i,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},wu=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Ih=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",$d=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32,l=!1)=>{let d=e[1]*t[1],f=e[0]*t[0],p=i?d:s,g=i?s:d;if(!(g%t[1]===0&&p%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let b=g/t[1],y=p/t[0],$=s/t[1],E=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${wu(i,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${b};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${$};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${wu(i,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Ih(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${p}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${f}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${E}
  }
`},Ah=(e,t,r,n,i=!1)=>{let[s,a,o,l]=n,d=qt(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Kt(e,d)} {
      var value = ${Kt(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${ra("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Kt(e,d)} {
      var value = ${Kt(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${ra("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Kt(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Kt(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},qo=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a.slice(0,-2),d=o.slice(0,-2),f=n?n.slice(0,-2):r.slice(0,-2),p=K.size(f),g=a[a.length-2],b=a[a.length-1],y=o[o.length-1],$=b%4===0&&y%4===0,E=g<=8?[4,1,1]:[4,4,1],S=[8,8,1],x=[Math.ceil(y/S[0]/E[0]),Math.ceil(g/S[1]/E[1]),Math.ceil(p/S[2]/E[2])],A=$?4:1,C=[...l,g,b/A],O=C.length,D=[...d,b,y/A],N=D.length,T=[p,g,y/A],W=[{type:6,data:g},{type:6,data:y},{type:6,data:b}];ji(t,W),W.push(...Oe(f,C,D));let Y=["rank","rank"],ae=e.length>2;ae&&(W.push(...Oe(e[2].dims)),Y.push("rank")),W.push(...Oe(T));let X=le=>{let q=f.length,te=ic("batchDims",e[0].dataType,q,1),ce=qt(e[0].dataType),ue=J("a",e[0].dataType,O,A),Q=J("b",e[1].dataType,N,A),we=Ce("result",e[0].dataType,T.length,A),Te=[ue,Q];if(ae){let et=i?A:1;Te.push(J("bias",e[2].dataType,e[2].dims.length,et))}let re=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Vi(t,re);let xe=qt(we.type.tensor),Se=Fi(t,we.type.value,xe),be=Ah(A,ae,Se,[te,ue,Q,we],i);return`
  ${le.registerUniforms(re).registerInternalVariables(te).declareVariables(...Te,we)}
  ${be}
  ${$?xd(E,S,ce,te):$d(E,S,ce,te)}
                   `};return{name:"MatMul",shaderCache:{hint:`${E};${t.activation};${$};${i}`,inputDependencies:Y},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:W}),getShaderSource:X}}}),Oh,pv,f$=pe(()=>{"use strict";Pe(),Mn(),Le(),qi(),uc(),c$(),fc(),Oh=(e,t,r,n,i=!1,s,a=4,o=4,l=4,d="f32")=>{let f=W=>{switch(W){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${W} is not supported.`)}},p=W=>{switch(W){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${W} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,b=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",$=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",E=e?"row":"col",S=e?"col":"row",x=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${E} / outWidth;
    let outCol = ${E} % outWidth;

    let WRow = ${S} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${S} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${S} % inChannels;
    var resData = ${Kt(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${$}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(a)}
    }
    return resData;`,A=e?t&&n?`
    let col = colIn * ${a};
    ${x}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${Kt(a,d)}(0.0);`:n&&r?`
    let col = colIn * ${a};
    ${x}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${Kt(a,d)}(0.0);`,C=e?n&&r?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Kt(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Kt(o,d)}(0.0);`,O=Kt(l,d),D=Kt(e?a:o,d),N=Kt(e?o:a,d),T=Fi(s,O,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${D} {
      ${e?A:C}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${N} {
      ${e?C:A}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${O}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${b}
      ${cv(i)}
      ${T}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},pv=(e,t,r,n,i,s,a,o,l)=>{let d=t.format==="NHWC",f=d?e[0].dims[3]:e[0].dims[1],p=r[0],g=d?r[2]:r[3],b=d?r[1]:r[2],y=d?r[3]:r[1],$=d&&(f%4===0||f%3===0)&&y%4===0,E=d?y:g*b,S=d?g*b:y,x=[8,8,1],A=n<=8?[4,1,1]:[4,4,1],C=[Math.ceil(E/x[0]/A[0]),Math.ceil(S/x[1]/A[1]),Math.ceil(p/x[2]/A[2])];nt("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${C}`);let O=$?d&&f%4!==0?3:4:1,D=x[1]*A[1],N=x[0]*A[0],T=Math.max(x[0]*O,x[1]),W=n%D===0,Y=i%N===0,ae=s%T===0,X=$?[O,4,4]:[1,1,1],le=[{type:6,data:n},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];ji(t,le),le.push(...Oe(e[0].dims,e[1].dims));let q=["rank","rank"];a&&(le.push(...Oe(e[2].dims)),q.push("rank")),le.push(...Oe(r));let te=ce=>{let ue=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Vi(t,ue);let Q=$?4:1,we=qt(e[0].dataType),Te=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${we}>`:we}) {
        result[flatIndex] = ${$?`vec4<${we}>`:we}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${we}>`:we}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,re=J("x",e[0].dataType,e[0].dims.length,O===3?1:O),xe=J("w",e[1].dataType,e[1].dims.length,Q),Se=[re,xe],be=Ce("result",e[0].dataType,r.length,Q);if(a){let et=J("bias",e[2].dataType,e[2].dims.length,Q);Se.push(et),Te+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${we}>`:we} {
          return bias[coords.${d?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${fv("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${ce.registerUniforms(ue).declareVariables(...Se,be)}
        ${Te}
        ${Oh(d,W,Y,ae,a,t,X[0],X[1],X[2],we)}
        ${$?xd(A,x,we,void 0,!d,T):$d(A,x,we,void 0,!d,T,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${O};${$};${W};${Y};${ae};${D};${N};${T}`,inputDependencies:q},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:C[0],y:C[1],z:C[2]},programUniforms:le}),getShaderSource:te}}}),zh,_u,Ps,Mh,xu,Rh,hv,mv,p$=pe(()=>{"use strict";Pe(),Mn(),Ue(),Le(),qi(),uc(),zh=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},_u=e=>typeof e=="number"?[e,e,e]:e,Ps=(e,t)=>t<=1?e:e+(e-1)*(t-1),Mh=(e,t,r,n=1)=>{let i=Ps(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},xu=(e,t,r,n,i)=>{i==null&&(i=Mh(e,t[0],n[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*i)/n[a]+1));return s},Rh=(e,t,r,n,i,s,a,o,l,d)=>{let f,p,g,b;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=xu([t,r,n,1],[o,l,d],1,[i,s,a],e);p=y[0],g=y[1],b=y[2]}else if(Array.isArray(e)){if(!e.every(($,E,S)=>$===S[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=xu([t,r,n,1],[o,l,d],1,[i,s,a],e[0]);p=y[0],g=y[1],b=y[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),g=Math.ceil(r/s),b=Math.ceil(n/a);let y=(p-1)*i+o-t,$=(g-1)*s+l-r,E=(b-1)*a+d-n,S=Math.floor(y/2),x=y-S,A=Math.floor($/2),C=$-A,O=Math.floor(E/2),D=E-O;f={top:A,bottom:C,left:O,right:D,front:S,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:p,outHeight:g,outWidth:b}},hv=(e,t,r,n,i,s=!1,a="channelsLast")=>{let o,l,d,f,p;if(a==="channelsLast")[o,l,d,f,p]=e;else if(a==="channelsFirst")[o,p,l,d,f]=e;else throw new Error(`Unknown dataFormat ${a}`);let[g,,b,y,$]=t,[E,S,x]=_u(r),[A,C,O]=_u(n),D=Ps(b,A),N=Ps(y,C),T=Ps($,O),{padInfo:W,outDepth:Y,outHeight:ae,outWidth:X}=Rh(i,l,d,f,E,S,x,D,N,T),le=s?g*p:g,q=[0,0,0,0,0];return a==="channelsFirst"?q=[o,le,Y,ae,X]:a==="channelsLast"&&(q=[o,Y,ae,X,le]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:d,inWidth:f,inChannels:p,outDepth:Y,outHeight:ae,outWidth:X,outChannels:le,padInfo:W,strideDepth:E,strideHeight:S,strideWidth:x,filterDepth:b,filterHeight:y,filterWidth:$,effectiveFilterDepth:D,effectiveFilterHeight:N,effectiveFilterWidth:T,dilationDepth:A,dilationHeight:C,dilationWidth:O,inShape:e,outShape:q,filterShape:t}},mv=(e,t,r,n,i,s)=>{let a=s==="channelsLast",o=a?e[0].dims[3]:e[0].dims[1],l=!1,d=[64,1,1],f={x:r.map((x,A)=>A)},p=[Math.ceil(zh(f.x.map(x=>r[x]))/d[0]),1,1];nt("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let g=l?a&&o%4!==0?3:4:1,b=K.size(r),y=[{type:12,data:b},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];ji(t,y),y.push(...Oe(e[0].dims,e[1].dims));let $=["rank","rank"],E=e.length===3;E&&(y.push(...Oe(e[2].dims)),$.push("rank")),y.push(...Oe(r));let S=x=>{let A=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Vi(t,A);let C=l?4:1,O=qt(e[0].dataType),D=J("x",e[0].dataType,e[0].dims.length,g===3?1:g),N=J("W",e[1].dataType,e[1].dims.length,C),T=[D,N],W=Ce("result",e[0].dataType,r.length,C),Y="";if(E){let le=J("bias",e[2].dataType,e[2].dims.length,C);T.push(le),Y+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${O}>`:O} {
          return bias[${a?Ae("coords",4,5):Ae("coords",1,5)}${l?"/ 4":""}];
        }`}let ae=Kt(g,O),X=Fi(t,ae,O);return`
            ${Y}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${O} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${D.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${O} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${N.getByIndices("aIndices")};
            }
          ${x.registerUniforms(A).declareVariables(...T,W)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${W.offsetToIndices("global_idx")};
              let batch = ${Ae("coords",0,D.rank)};
              let d2 = ${a?Ae("coords",D.rank-1,D.rank):Ae("coords",1,D.rank)};
              let xFRCCorner = vec3<u32>(${a?Ae("coords",1,D.rank):Ae("coords",2,D.rank)},
              ${a?Ae("coords",2,D.rank):Ae("coords",3,D.rank)},
              ${a?Ae("coords",3,D.rank):Ae("coords",4,D.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?Ae("uniforms.x_shape",1,D.rank):Ae("uniforms.x_shape",2,D.rank)};
              let xShapeZ = ${a?Ae("uniforms.x_shape",2,D.rank):Ae("uniforms.x_shape",3,D.rank)};
              let xShapeW = ${a?Ae("uniforms.x_shape",3,D.rank):Ae("uniforms.x_shape",4,D.rank)};
              let xShapeU = ${a?Ae("uniforms.x_shape",4,D.rank):Ae("uniforms.x_shape",1,D.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = ${O}(0);
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<${O}>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<${O}>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<${O}>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<${O}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<${O}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<${O}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<${O}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<${O}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<${O}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${E?"value = value + getBiasByOutputCoords(coords)":""};
              ${X}
              result[global_idx] = ${O}(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${g};${E}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:y}),getShaderSource:S}}}),gv,yv,h$=pe(()=>{"use strict";Pe(),Ue(),Le(),qi(),gv=(e,t,r,n)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],f=d/t.group,p=l&&f>=4?It(d):1,g=K.size(r)/p,b=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];ji(t,b),b.push(...Oe(a,[o[0],o[1],o[2],o[3]/p]));let y=i?["rank","rank","rank"]:["rank","rank"];b.push(...Oe([r[0],r[1],r[2],r[3]/p]));let $=E=>{let S=Ce("output",e[0].dataType,r.length,p),x=qt(S.type.tensor),A=Fi(t,S.type.value,x),C=J("x",e[0].dataType,a.length),O=J("w",e[1].dataType,o.length,p),D=[C,O];i&&D.push(J("b",e[2].dataType,e[2].dims,p));let N=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Vi(t,N);let T=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${C.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${O.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${C.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${O.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${E.registerUniforms(N).declareVariables(...D,S)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${S.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${S.type.value} = ${S.type.value}(0);
    ${T}
    ${s}
    ${A}
    ${S.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:$}},yv=(e,t,r,n)=>{let i=e.length>2,s=It(r[3]),a=It(r[2]),o=K.size(r)/s/a,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],f=[r[0],r[1],r[2],r[3]/s],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];ji(t,p),p.push(...Oe(l,d,f));let g=(a-1)*t.strides[1]+d[1],b=y=>{let $=Ce("output",e[0].dataType,f.length,s),E=qt($.type.tensor),S=Fi(t,$.type.value,E),x=J("x",e[0].dataType,l.length,s),A=J("w",e[1].dataType,d.length,s),C=[x,A];i&&C.push(J("b",e[2].dataType,e[2].dims,s));let O=i?"value += b[output_channel];":"",D=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Vi(t,D),`
  ${y.registerUniforms(D).declareVariables(...C,$)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${x.type.value}, ${g}>;
    var values: array<${$.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${x.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${x.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${A.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${O}
      ${S}
      ${$.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${g};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:b}}}),Bh,mo,Ph,go,Sd,$u,Dh,Nh,kd,m$=pe(()=>{"use strict";Ue(),f$(),p$(),fc(),h$(),qi(),cc(),ni(),Bh=(e,t,r,n,i,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),l=o.length,d=t[0],f=t.slice(2).map((g,b)=>g+(g-1)*(r[b]-1)),p=o.map((g,b)=>g+n[b]+n[b+l]).map((g,b)=>Math.floor((g-f[b]+i[b])/i[b]));return p.splice(0,0,a),p.splice(s?3:1,0,d),p},mo=[2,3,1,0],Ph=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},go=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let n=e.pads.slice();Vo.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},Sd=e=>{let t=lc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},$u=(e,t,r,n)=>{let i=r.format==="NHWC",s=Bh(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let D=[t[0]];if(i){let N=e.kernelCustomData.wT??e.compute(xr(t[1],mo),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=N),D.push(N)}else D.push(t[1]);t.length===3&&D.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(yv(D,r,s,n),{inputs:D}):e.compute(gv(D,r,s,n),{inputs:D});return}let a=t.length===3,o=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],f=t[1].dims[2],p=t[1].dims[3],g=s[i?1:2],b=s[i?2:3],y=s[i?3:1],$=i&&f===o&&p===l&&r.pads[0]===0&&r.pads[1]===0;if($||f===1&&p===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let D=s[0],N,T,W,Y=[];if(i){let le=e.kernelCustomData.wT??e.compute(xr(t[1],mo),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=le),$){let q=o*l*d;N=t[0].reshape([1,D,q]),T=le.reshape([1,q,y]),W=[1,D,y]}else N=t[0].reshape([D,o*l,d]),T=le.reshape([1,d,y]),W=[D,g*b,y];Y.push(N),Y.push(T)}else N=t[0].reshape([D,d,o*l]),T=t[1].reshape([1,y,d]),W=[D,y,g*b],Y.push(T),Y.push(N);a&&Y.push(t[2]);let ae=W[2],X=Y[0].dims[Y[0].dims.length-1];ae<8&&X<8?e.compute(dc(Y,r,s,W,i,n),{inputs:Y}):e.compute(qo(Y,r,s,W,i,n),{inputs:Y});return}let E=!0,S=e.kernelCustomData.wT??e.compute(xr(t[1],mo),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=S);let x=[t[0],S];a&&x.push(t[2]);let A=i?g*b:y,C=i?y:g*b,O=f*p*d;e.compute(pv(x,r,s,A,C,O,a,E,n),{inputs:x})},Dh=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=go({...t,pads:i,strides:s,dilations:a,kernelShape:o},n);$u(e,n,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Nh=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=go(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=hv(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,n);e.compute(mv(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],n))},kd=(e,t)=>{if(Ph(e.inputs,t),e.inputs[0].dims.length===3)Dh(e,t);else if(e.inputs[0].dims.length===5)Nh(e,e.inputs,t);else{let r=go(t,e.inputs);$u(e,e.inputs,r)}}}),bv,g$=pe(()=>{"use strict";Pe(),Mn(),Ue(),Le(),bv=(e,t,r)=>{let n=e.length>2,i=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,l=o[2]/a,d=o[3],f=s?It(l):1,p=s&&d===1&&l>=4,g=p?Math.floor(l/4)*4:Math.floor(l/f)*f,b=l-g,y=s?It(d):1,$=s?d===1?f:y:1,E=K.size(i)/y,S=[Math.ceil(E/64),1,1];nt("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${S}`);let x=["rank","rank"],A=[t.strides[0],t.strides[1]],C=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],O=[t.dilations[0],t.dilations[1]],D=[C[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),C[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],N=[D[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),D[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],T=[{type:12,data:E},{type:12,data:A},{type:12,data:C},{type:12,data:O},{type:12,data:D},{type:6,data:N},{type:12,data:g},{type:12,data:l},{type:12,data:d},...Oe(e[0].dims,e[1].dims)];n&&(T.push(...Oe(e[2].dims)),x.push("rank")),T.push(...Oe(i));let W=Y=>{let ae=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:A.length},{name:"filter_dims",type:"u32",length:C.length},{name:"dilations",type:"u32",length:C.length},{name:"effective_filter_dims",type:"u32",length:D.length},{name:"pads",type:"i32",length:N.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],X=qt(e[0].dataType),le=s?1:2,q=s?2:3,te=s?3:1,ce=J("W",e[1].dataType,e[1].dims.length,$),ue=J("Dy",e[0].dataType,e[0].dims.length,f),Q=[ue,ce];n&&Q.push(J("bias",e[2].dataType,[i[te]].length,y));let we=Ce("result",e[0].dataType,i.length,y),Te=()=>{let Se="";if(p)f===4?Se+=`
        let xValue = ${ue.getByOffset("x_offset")};
        let wValue = ${ce.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:f===2?Se+=`
          dotProd = dotProd + dot(vec4<${X}>(${ue.getByOffset("x_offset")}, ${ue.getByOffset("x_offset + 1u")}), vec4<${X}>(${ce.getByOffset("w_offset")}, ${ce.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:f===1&&(Se+=`
          dotProd = dotProd + dot(vec4<${X}>(${ue.getByOffset("x_offset")}, ${ue.getByOffset("x_offset + 1u")}, ${ue.getByOffset("x_offset + 2u")}, ${ue.getByOffset("x_offset + 3u")}), vec4<${X}>(${ce.getByOffset("w_offset")}, ${ce.getByOffset("w_offset + 1u")}, ${ce.getByOffset("w_offset + 2u")}, ${ce.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Se+=`
                  let xValue = ${s?ue.getByOffset(`${ue.indicesToOffset(`${ue.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):ue.get("batch","inputChannel","idyR","idyC")};
        `,f===1)Se+=`
          let w_offset = ${ce.indicesToOffset(`${ce.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${ce.getByOffset(`w_offset / ${$}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let be=0;be<f;be++)Se+=`
            let wValue${be} = ${ce.getByOffset(`${ce.indicesToOffset(`${ce.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${be}, wOutChannel)`)} / ${$}`)};
            dotProd = dotProd + xValue[${be}] * wValue${be};`;return Se},re=()=>{if(b===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let Se="";if(f===1){Se+="dotProd = dotProd";for(let be=0;be<b;be++)Se+=`
            + ${ue.getByOffset(`x_offset + ${be}`)} * ${ce.getByOffset(`w_offset + ${be}`)}`;Se+=";"}else if(f===2){if(b!==2)throw new Error(`Invalid inputChannelsRemainder ${b}.`);Se+=`
          let xValue = ${ue.getByOffset("x_offset")};
          let wValue = ${ce.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Se},xe=`
            let outputIndices = ${we.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${we.indicesGet("outputIndices",0)};
            let d1 = ${we.indicesGet("outputIndices",te)};
            let r = ${we.indicesGet("outputIndices",le)};
            let c = ${we.indicesGet("outputIndices",q)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${we.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${X}(dyRCorner) + ${X}(wR)) / ${X}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${X}(uniforms.Dy_shape[${le}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${X}(dyCCorner) + ${X}(wC)) / ${X}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${X}(uniforms.Dy_shape[${q}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${ue.indicesToOffset(`${ue.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f};
                var w_offset = ${ce.indicesToOffset(`${ce.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${$};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:f}) {
                  ${Te()}
                  inputChannel = inputChannel + ${p?4:f};
                }
                ${re()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${y}]`:""};
            ${we.setByOffset("global_idx","value")};
          `;return`
    ${Y.registerUniforms(ae).declareVariables(...Q,we)}
      ${Y.mainStart()}
      ${Y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${xe}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${$}${y}${p}${b}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:S[0],y:S[1],z:S[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:T}),getShaderSource:W}}}),Uh,Lh,Fh,Su,vv,jh,ku,Vh,wv,y$=pe(()=>{"use strict";g$(),qi(),ni(),Uh=(e,t,r,n,i,s)=>(e-1)*t+r+(n-1)*i+1-s,Lh=(e,t,r,n,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=s,r[i]=e-s):t==="SAME_LOWER"&&(r[n]=e-s,r[i]=s)},Fh=(e,t,r,n,i,s,a,o,l,d)=>{let f=e.length-2,p=d.length===0;l.length<f&&l.push(...Array(f-l.length).fill(0));let g=e[0],b=t[o?3:1]*i;for(let y=0,$=e.length-f-(o?1:0);y<f;++y,++$){let E=e[$],S=p?E*a[y]:d[y],x=Uh(E,a[y],s[y],t[$],r[y],S);Lh(x,n,s,y,y+f),p&&d.push(a[y]*(E-1)+l[y]+(t[$]-1)*r[y]+1-s[y]-s[y+f])}d.splice(0,0,g),d.splice(o?3:1,0,b)},Su=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,g)=>p*g,1)===0){r.length=0;for(let p=2;p<t[1].dims.length;++p)r.push(t[1].dims[p])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((p,g)=>p+g,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}let d=e.strides.slice();if(d.reduce((p,g)=>p+g,0)===0){let p=t[0].dims.length-2;d=new Array(p).fill(1)}Fh(o,r,l,e.autoPad,e.group,i,d,n,a,s);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:i,outputPadding:a,outputShape:s,dilations:l,strides:d}),f},vv=e=>{let t=lc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group??1,a=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),f=e.outputPadding,p=e.outputShape;return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,outputPadding:f,outputShape:p,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},jh=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ku=(e,t,r,n)=>{let i=e.kernelCustomData.wT??e.compute(xr(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(bv(s,r,n),{inputs:s})},Vh=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let d=Su({...t,pads:o,strides:a,dilations:s,kernelShape:i,outputPadding:l},n);ku(e,n,d,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},wv=(e,t)=>{if(jh(e.inputs,t),e.inputs[0].dims.length===3)Vh(e,t);else{let r=Su(t,e.inputs);ku(e,e.inputs,r)}}}),Wh,_v,xv,b$=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),Wh=(e,t,r,n)=>{let i=K.size(t),s=t.length,a=J("input",e,s),o=Ce("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=K.normalizeAxis(l,s),f=p=>{let g=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,b=Ae("uniforms.input_shape","uniforms.axis",s),y=n.reverse?g+(n.exclusive?" + 1":""):"0",$=n.reverse?b:g+(n.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${$};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...Oe(t,t)]}),getShaderSource:f}},_v=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(Wh(n,r,i,t),{inputs:[0]})},xv=e=>{let t=e.exclusive===1,r=e.reverse===1;return ut({exclusive:t,reverse:r})}}),qh,Hh,Gh,$v,Sv,v$=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),qh=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Hh=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)i.push(r.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},Gh=(e,t)=>{let r,n,i,s,a,o,l=t.format==="NHWC",d=t.blocksize,f=t.mode==="DCR";l?([r,n,i,s]=e.dims,a=f?[r,n,i,d,d,s/d**2]:[r,n,i,s/d**2,d,d],o=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=f?[r,d,d,s/d**2,n,i]:[r,s/d**2,d,d,n,i],o=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(a),g=p.dims.length,b=e.dataType,y=J("a",b,g),$=Ce("output",b,g),E=S=>`
  ${S.registerUniform("output_size","u32").declareVariables(y,$)}

  ${Hh(o,g,y,$)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:S=>{let x=l?[r,n*d,i*d,s/d**2]:[r,s/d**2,n*d,i*d],A=K.size(x),C=p.dims,O=K.sortBasedOnPerm(C,o);return{outputs:[{dims:x,dataType:S[0].dataType}],dispatchGroup:{x:Math.ceil(A/64)},programUniforms:[{type:12,data:A},...Oe(C,O)]}},getShaderSource:E}},$v=(e,t)=>{qh(e.inputs),e.compute(Gh(e.inputs[0],t))},Sv=e=>ut({blocksize:e.blocksize,mode:e.mode,format:e.format})}),_n,Ds,yo,Tu,Wn,Kh,Xh,Yh,Cu,Eu,Iu,Zh,Qh,Au,Jh,kv,Tv,w$=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),_n=256,Ds=512,yo=2*Math.PI,Tu=e=>{let t=[],r=e;for(let n of[4,2,3,5])for(;r%n===0;)t.push(n),r/=n;return r===1?t:void 0},Wn=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},Kh=(e,t,r,n,i)=>{let s=r/e,a=Ds-n,o=d=>`smem[${a}u + base + ${d*t}u]`,l=`  for (var t = local_idx; t < ${s}u; t += ${_n}u) {
`;l+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,l+=`    var leg: array<vec2<f32>, 5>;
`;for(let d=0;d<e;d++){let f=`${n}u + t + ${d*s}u`;if(d===0)l+=`    leg[0] = smem[${f}];
`;else{let p=i*yo*d/(e*t);l+=`    { let a = ${Wn(p)} * angleUnit; leg[${d}] = cmul(smem[${f}], vec2<f32>(cos(a), sin(a))); }
`}}if(l+=`    let base = (t / ${t}u) * ${t*e}u + twiddleIndex;
`,e===2)l+=`    ${o(0)} = leg[0] + leg[1];
    ${o(1)} = leg[0] - leg[1];
`;else if(e===4){let d=i<0?"vec2<f32>(oddDiff.y, -oddDiff.x)":"vec2<f32>(-oddDiff.y, oddDiff.x)";l+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,l+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,l+=`    let oddRot = ${d};
`,l+=`    ${o(0)} = evenSum + oddSum;
    ${o(1)} = evenDiff + oddRot;
`,l+=`    ${o(2)} = evenSum - oddSum;
    ${o(3)} = evenDiff - oddRot;
`}else for(let d=0;d<e;d++){let f=["leg[0]"];for(let p=1;p<e;p++){let g=i*yo*(p*d)/e,b=Wn(Math.cos(g)),y=Wn(Math.sin(g));f.push(`vec2<f32>(leg[${p}].x*${b} - leg[${p}].y*${y}, leg[${p}].x*${y} + leg[${p}].y*${b})`)}l+=`    ${o(d)} = ${f.join(" + ")};
`}return`${l}  }
  workgroupBarrier();
`},Xh=(e,t,r)=>{let n="",i=1,s=0;for(let a of e)n+=Kh(a,i,t,s,r),i*=a,s=Ds-s;return{code:n,resultOffset:s}},Yh=(e,t,r,n,i)=>{let s=e.dims,a=s.length,o=s[a-1],l=s[t],d=r&&n?(l-1)*2:l;i!==void 0&&(d=i);let f=r&&n?1:2,p=n&&!r?Math.floor(d/2)+1:d,g=s.slice();g[t]=p,g[a-1]=f;let b=1;for(let $=t+1;$<a-1;$++)b*=s[$];let y=K.size(s)/o/l;return{dataType:e.dataType,outputDims:g,length:d,signalLength:l,inner:b,batch:y,inputComponents:o,outputComponents:f,outputLength:p,inverse:r,onesided:n}},Cu=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),Eu=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],Iu=(e,t,r)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,r),Zh=e=>{let{dataType:t,length:r,inputComponents:n,outputComponents:i,inverse:s,onesided:a}=e,o=Wt(t),l=s?1:-1,d=s?1/r:1,f=Tu(r),p=g=>{let b=J("x",t,[1]),y=Ce("y",t,[1]),$=O=>{let D=`inBase + (${O}) * uniforms.inner * ${n}u`,N=`f32(${b.getByOffset(D)})`,T=n===2?`f32(${b.getByOffset(`${D} + 1u`)})`:"0.0";return`vec2<f32>(${N}, ${T})`},E;if(s&&a){let O=Math.floor(r/2)+1,D=r%2===0?`select(provided, provided - 1u, provided == ${O}u)`:"provided";E=`
    let provided = min(uniforms.signalLength, ${O}u);
    for (var i = local_idx; i < ${r}u; i += ${_n}u) {
      if (i < provided) { smem[i] = ${$("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${D}; k += ${_n}u) {
      let h = smem[k];
      smem[${r}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else E=`
    let loadCount = min(uniforms.signalLength, ${r}u);
    for (var i = local_idx; i < ${r}u; i += ${_n}u) {
      if (i < loadCount) { smem[i] = ${$("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:S,resultOffset:x}=Xh(f,r,l),A=d===1?`smem[${x}u + i]`:`smem[${x}u + i] * ${Wn(d)}`,C=i===2?y.setByOffset("off + 1u",`${o}(v.y)`):"";return`
  ${Iu(g,b,y)}
  var<workgroup> smem: array<vec2<f32>, ${2*Ds}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${g.mainStart(_n)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${n}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${i}u;
    ${E}
${S}    for (var i = local_idx; i < uniforms.outputLength; i += ${_n}u) {
      let v = ${A};
      let off = outBase + i * uniforms.inner * ${i}u;
      ${y.setByOffset("off",`${o}(v.x)`)}
      ${C}
    }
  }`};return{name:"DFT",shaderCache:{hint:Cu(e,"fft"),inputDependencies:["type"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Eu(e),dispatchGroup:{x:e.batch}})}},Qh=e=>{let{dataType:t,length:r,inputComponents:n,outputComponents:i,inverse:s,onesided:a}=e,o=Wt(t),l=s?1:-1,d=s?1/r:1,f=p=>{let g=J("x",t,[1]),b=Ce("y",t,[1]),y=A=>{let C=`inBase + (${A}) * uniforms.inner * ${n}u`,O=`f32(${g.getByOffset(C)})`,D=n===2?`f32(${g.getByOffset(`${C} + 1u`)})`:"0.0";return`vec2<f32>(${O}, ${D})`},$=s&&a?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(r/2)+1}u);
    if (k < provided) { return ${y("k")}; }
    let m = ${r}u - k;
    if (m < provided) {
      let h = ${y("m")};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${y("n")}; }
    return vec2<f32>(0.0, 0.0);
  }`,E=`
      let angle = ${Wn(l*yo)} * f32(knMod) / ${Wn(r)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${r}u) { knMod -= ${r}u; }`,S=i===2?b.setByOffset("off + 1u",`${o}(v.y)`):"",x=d===1?"acc":`acc * ${Wn(d)}`;return`
  ${Iu(p,g,b)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${$}
  ${p.mainStart(_n)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${n}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${i}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${_n}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${r}u; n++) {${E}
      }
      let v = ${x};
      let off = outBase + k * uniforms.inner * ${i}u;
      ${b.setByOffset("off",`${o}(v.x)`)}
      ${S}
    }
  }`};return{name:"DFT",shaderCache:{hint:Cu(e,"direct"),inputDependencies:["type"]},getShaderSource:f,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Eu(e),dispatchGroup:{x:e.batch}})}},Au=e=>{if(!e||e.dataType===0)return;if(K.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},Jh=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let r=t[t.length-1];if(r!==1&&r!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},kv=(e,t)=>{Jh(e.inputs);let r=e.inputs[0],n=r.dims.length,i=t.inverse!==0,s=t.onesided!==0,a=Au(e.inputs[1]);if(a!==void 0&&a<=0)throw new Error("dft_length must be greater than zero.");let o=K.normalizeAxis(Au(e.inputs[2])??t.axis,n);if(o===n-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(i&&s&&r.dims[n-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let l=Yh(r,o,i,s,a);if(l.length<=0)throw new Error(`Invalid DFT length: ${l.length}`);let d=l.length<=Ds&&Tu(l.length)!==void 0?Zh(l):Qh(l);e.compute(d,{inputs:[0]})},Tv=e=>ut({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),bo,Ns,Ou,em,tm,rm,nm,zu,im,Cv,Ev,_$=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),bo="[a-zA-Z]|\\.\\.\\.",Ns="("+bo+")+",Ou="^"+Ns+"$",em="("+Ns+",)*"+Ns,tm="^"+em+"$",rm=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},nm=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(tm)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,s)=>{let a=e[s].dims.slice();if(!i.match(RegExp(Ou)))throw new Error("Invalid LHS term");let o=this.processTerm(i,!0,a,s);this.lhs.push(o)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([i,s])=>s.count===1||i==="...").map(([i])=>i).join("");else if(!n.match(RegExp(Ns)))throw new Error("Invalid RHS");n.match(RegExp(bo,"g"))?.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(i);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,s=!1,a=[],o=0;if(!e.match(RegExp(Ou))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(bo,"g")),d=new rm(n);return l?.forEach((f,p)=>{if(f==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let g=i-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(o,o+g),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let b=0;b<a.length;b++){let y=String.fromCharCode(48+b);d.addSymbol(y,p+b),this.addSymbol(y,r[o++],n)}}else d.addSymbol(f,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[o++],n)}),d}},zu=e=>e+"_max",im=(e,t,r,n)=>{let i=e.map(d=>d.length).map((d,f)=>J(`input${f}`,t,d)),s=K.size(n),a=Ce("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let f=[],p="var prod = 1.0;",g="var sum = 0.0;",b="sum += prod;",y=[],$=[],E=[],S=[],x=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((C,O)=>{if(r.rhs.symbolToIndices.has(O)){let D=r.rhs.symbolToIndices.get(O)?.[0];D!==void 0&&r.lhs.forEach((N,T)=>{if(C.inputIndices.includes(T)){let W=N.symbolToIndices.get(O);if(W===void 0)throw new Error("Invalid symbol error");W.forEach(Y=>{f.push(`${i[T].indicesSet(`input${T}Indices`,Y,a.indicesGet("outputIndices",D))}`)})}})}else r.lhs.forEach((D,N)=>{if(C.inputIndices.includes(N)){let T=D.symbolToIndices.get(O);if(T===void 0)throw new Error("Invalid symbol error");T.forEach(W=>{y.push(`${i[N].indicesSet(`input${N}Indices`,W,`${O}`)}`)}),S.push(`prod *= ${i[N].getByIndices(`input${N}Indices`)};`)}}),$.push(`for(var ${O}: u32 = 0; ${O} < uniforms.${zu(O)}; ${O}++) {`),E.push("}")});let A=x?[...f,`let sum = ${i.map((C,O)=>C.getByIndices(`input${O}Indices`)).join(" * ")};`]:[...f,g,...$,...y,p,...S,b,...E];return`
            ${d.registerUniforms(o.map(C=>({name:`${zu(C)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((C,O)=>`var input${O}Indices: ${i[O].type.indices};`).join(`
`)}
            ${A.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(p=>r.symbolToInfo.has(p)).map(p=>({type:12,data:r.symbolToInfo.get(p)?.dimValue||0}));d.push({type:12,data:s});let f=e.map((p,g)=>[...Oe(p)]).reduce((p,g)=>p.concat(g),d);return f.push(...Oe(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f}},getShaderSource:l}},Cv=(e,t)=>{let r=new nm(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((s,a)=>s.dims);e.compute(im(i,e.inputs[0].dataType,r,n))},Ev=e=>{let t=e.equation.replace(/\s+/g,"");return ut({equation:t})}}),sm,Mu,am,om,Iv,x$=pe(()=>{"use strict";Pe(),Ue(),Le(),sm=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Mu=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},am=(e,t)=>e.length>t.length?Mu(e,t):Mu(t,e),om=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=am(t,r),i=e[0].dataType,s=i===9||K.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||n.length>0&&n[n.length-1]%4===0?4:1,l=Math.ceil(K.size(n)/o),d=p=>{let g=J("input",i,t.length,a),b=Ce("output",i,n.length,o),y;if(i===9){let $=(E,S,x="")=>`
          let outputIndices${S} = ${b.offsetToIndices(`outputOffset + ${S}u`)};
          let offset${S} = ${g.broadcastedIndicesToOffset(`outputIndices${S}`,b)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${E}[${S}] = ${x}(${g.getByOffset(`index${S}`)}[component${S}]);
        `;y=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${$("data",0,"u32")}
        ${$("data",1,"u32")}
        ${$("data",2,"u32")}
        ${$("data",3,"u32")}
        ${b.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${b.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",b)};
        let data = ${b.type.value}(${g.getByOffset(`inputOffset / ${a}`)});
        ${b.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(g,b)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},f=[{type:12,data:l},...Oe(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f})}},Iv=e=>{sm(e.inputs),e.compute(om(e.inputs),{inputs:[0]})}}),lm,Av,$$=pe(()=>{"use strict";Pe(),Ue(),Le(),oc(),lm=e=>{let t=e[0].dataType,r=K.size(e[0].dims),n=K.size(e[1].dims),i=n%4===0,s=a=>{let o=J("x",t,[1],4),l=J("bias",t,[1],4),d=Ce("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=b=>`
      let bias${b}_offset: u32 = (global_idx * 4 + ${b}) % uniforms.bias_size;
      let bias${b} = ${l.getByOffset(`bias${b}_offset / 4`)}[bias${b}_offset % 4];`,g=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(f).declareVariables(o,l,d)}

    ${wd(Wt(t))}

    ${a.mainStart(gs)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",_d("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/gs/4)}})}},Av=e=>{e.inputs.length<2||K.size(e.inputs[1].dims)===0?Kb(e):e.compute(lm(e.inputs))}}),um,dm,Ov,zv,S$=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),um=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},dm=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=K.normalizeAxis(t.axis,i),a=r.slice(0);a.splice(s,1,...n);let o=r[s],l=e[0].dataType===9?4:1,d=Math.ceil(K.size(a)/l),f=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...Oe(e[0].dims,e[1].dims,a)],p=g=>{let b=J("data",e[0].dataType,e[0].dims.length,l),y=J("inputIndices",e[1].dataType,e[1].dims.length),$=Ce("output",e[0].dataType,a.length,l),E=x=>{let A=n.length,C=`var indicesIndices${x}  = ${y.type.indices}(0);`;for(let O=0;O<A;O++)C+=`${A>1?`indicesIndices${x}[${O}]`:`indicesIndices${x}`} = ${a.length>1?`outputIndices${x}[uniforms.axis + ${O}]`:`outputIndices${x}`};`;C+=`
          var idx${x} = ${y.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${b.type.indices};
        `;for(let O=0,D=0;O<i;O++)O===s?(C+=`${i>1?`dataIndices${x}[${O}]`:`dataIndices${x}`} = u32(idx${x});`,D+=A):(C+=`${i>1?`dataIndices${x}[${O}]`:`dataIndices${x}`} = ${a.length>1?`outputIndices${x}[${D}]`:`outputIndices${x}`};`,D++);return C},S;if(e[0].dataType===9){let x=(A,C,O="")=>`
          let outputIndices${C} = ${$.offsetToIndices(`outputOffset + ${C}u`)};
          ${E(C)};
          let offset${C} = ${b.indicesToOffset(`dataIndices${C}`)};
          let index${C} = offset${C} / 4u;
          let component${C} = offset${C} % 4u;
          ${A}[${C}] = ${O}(${b.getByOffset(`index${C}`)}[component${C}]);
        `;S=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${x("value",0,"u32")}
        ${x("value",1,"u32")}
        ${x("value",2,"u32")}
        ${x("value",3,"u32")}
        ${$.setByOffset("global_idx","value")}
      `}else S=`
      let outputIndices = ${$.offsetToIndices("global_idx")};
      ${E("")};
      let value = ${b.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(b,y,$)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${S}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:p}},Ov=e=>ut({axis:e.axis}),zv=(e,t)=>{let r=e.inputs;um(r),e.compute(dm(e.inputs,t))}}),cm,Mv,Rv,k$=pe(()=>{"use strict";Pe(),Ue(),Le(),cm=(e,t,r,n,i,s,a,o,l)=>{let d=[{type:12,data:s},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:12,data:o},{type:12,data:l}],f=[s];d.push(...Oe(t.dims,f));let p=g=>{let b=J("indices_data",t.dataType,t.dims.length),y=Ce("input_slice_offsets_data",12,1,1),$=[b,y],E=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(E).declareVariables(...$)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},Mv=(e,t)=>{let r=e.inputs,n=r[0].dims,i=r[0].dataType,s=r[1].dims,a=s[s.length-1],o=K.sizeToDimension(s,s.length-1),l=K.sizeFromDimension(n,t.batchDims+a),d=K.sizeToDimension(n,t.batchDims),f=K.sizeFromDimension(n,t.batchDims),p=o/d,g=new Array(a),b=l;for(let C=0;C<a;++C)g[a-1-C]=b,b*=n[t.batchDims+a-1-C];let y=cm(e,r[1],g,t.batchDims,n,o,p,f,a),$=t.batchDims+a;if($>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let E=s.slice(0,-1).concat(n.slice($)),S=K.size(E),x=[{type:12,data:S},{type:12,data:l},...Oe(r[0].dims,y.dims,E)],A=C=>{let O=J("data",r[0].dataType,r[0].dims.length),D=J("slice_offsets",12,y.dims.length),N=Ce("output",r[0].dataType,E.length);return`
          ${C.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(O,D,N)}
            ${C.mainStart()}
            ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:E,dataType:i}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:x}),getShaderSource:A},{inputs:[r[0],y]})},Rv=e=>({batchDims:e.batch_dims,cacheKey:""})}),fm,pm,Bv,Pv,T$=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),fm=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=K.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,l)=>l===r?Math.ceil(o/n)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},pm=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=K.normalizeAxis(t.gatherAxis,i),a=K.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(s,1,...n);let l=K.size(o),d=e[2].dataType,f=e[0].dataType===22,p=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...Oe(...e.map((b,y)=>b.dims),o)],g=b=>{let y=J("data",e[0].dataType,e[0].dims.length),$=J("inputIndices",e[1].dataType,e[1].dims.length),E=J("scales",e[2].dataType,e[2].dims.length),S=e.length>3?J("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=Ce("output",d,o.length),A=[y,$,E];S&&A.push(S);let C=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${b.registerUniforms(C).declareVariables(...A,x)}
        ${b.mainStart()}
        let output_indices = ${x.offsetToIndices("global_idx")};
        var indices_indices = ${$.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${x.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${$.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${x.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${x.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${$.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${x.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${E.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${E.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${E.getByIndices("scale_indices")};
        ${S?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${S.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${S.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Wt(d)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((b,y)=>y!==1).map(b=>b.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(b,y)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:g}},Bv=(e,t)=>{let r=e.inputs;fm(r,t),e.compute(pm(e.inputs,t))},Pv=e=>ut({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),hm,mm,Dv,Nv,C$=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),hm=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},mm=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,s=e[1].dims,a=e[1].dataType,o=K.normalizeAxis(t.axis,i),l=r[o],d=s.slice(0),f=K.size(d),p=J("input",n,i),g=J("indicesInput",a,s.length),b=Ce("output",n,d.length),y=[{type:12,data:f},{type:6,data:l},{type:12,data:o}];return y.push(...Oe(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,g,b)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${b.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${b.setByOffset("global_idx","value")};
  }`}},Dv=e=>ut({axis:e.axis}),Nv=(e,t)=>{let r=e.inputs;hm(r),e.compute(mm(e.inputs,t))}}),gm,ym,Uv,Lv,E$=pe(()=>{"use strict";Pe(),Ue(),Le(),gm=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},ym=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,s,a]=Ry.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(s/l),f=Math.ceil(i/l),p=!0,g=K.size(o),b=[{type:12,data:p?d:g},{type:12,data:i},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(b.push(...Oe(e[2].dims)),y.push("rank")),b.push(...Oe(o));let $=S=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let A=t.alpha===1?"":"value *= uniforms.alpha;",C=J("a",e[0].dataType,e[0].dims),O=J("b",e[1].dataType,e[1].dims),D=C.type.value,N=null,T=[C,O];e.length===3&&(N=J("c",e[2].dataType,e[2].dims.length),T.push(N));let W=Ce("output",e[0].dataType,o.length);T.push(W);let Y=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${S.registerUniforms(Y).declareVariables(...T)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${D}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${A}
    ${N!=null?`let cOffset = ${N.broadcastedIndicesToOffset("vec2(m, n)",W)}; value += ${D}(uniforms.beta) * ${N.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},E=S=>{let x=J("a",e[0].dataType,e[0].dims),A=J("b",e[1].dataType,e[1].dims),C=null,O=[x,A];e.length===3&&(C=J("c",e[2].dataType,e[2].dims.length),O.push(C));let D=Ce("output",e[0].dataType,o.length);O.push(D);let N=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],T="",W="";t.transA&&t.transB?(W=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,T="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(W=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,T="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(W=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,T="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(W=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,T="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let Y=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${S.registerUniforms(N).declareVariables(...O)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${A.type.storage}, ${l}>, ${l}>;
  ${S.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${D.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${W}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${T}
      }
      workgroupBarrier();
    }

    ${Y}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",D)}; value += ${D.type.value}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*f},programUniforms:b}),getShaderSource:E}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:$}},Uv=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Lv=(e,t)=>{gm(e.inputs),e.compute(ym(e.inputs,t))}}),en,xn,ki,Ti,bm,vm,wm,_m,xm,$m,Sm,km,Fv,jv,I$=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),[en,xn,ki,Ti]=[0,1,2,3],bm=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},vm=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,wm=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,_m=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,xm=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,$m=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${en}] = batch;
     indices[${xn}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${ki}] = u32(r);
            indices[${Ti}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${ki}] = u32(clamp(r, 0, H - 1));
          indices[${Ti}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${ki}] = gs_reflect(r, border[1], border[3]);
          indices[${Ti}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Sm=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${en}], indices[${xn}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${en}], indices[${xn}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${en}], indices[${xn}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${en}], indices[${xn}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${en}], indices[${xn}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${en}], indices[${xn}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,km=(e,t)=>{let r=J("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=J("grid",e[1].dataType,n.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[en,xn,ki,Ti]=[0,3,1,2]);let a=Ce("output",e[0].dataType,s.length),o=r.type.value,l=K.size(s),d=[{type:12,data:l},...Oe(e[0].dims,n,s)],f=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(r,i,a)}
  ${vm}
  ${wm(o)}
  ${_m(t)}
  ${xm(t)}
  ${$m(r,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${ki}]);
      let W_in = i32(uniforms.x_shape[${Ti}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${en}], indices[${ki}], indices[${Ti}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Sm(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let g=K.size(s);return{outputs:[{dims:s,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:f}},Fv=(e,t)=>{bm(e.inputs),e.compute(km(e.inputs,t))},jv=e=>ut({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),or,Tm,Vv,Ru,Cm,Gs,Wv,qv=pe(()=>{"use strict";Pe(),Ue(),At(),nc(),ac(),Le(),ni(),or=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Tm=(e,t)=>{let r=e[0],n=or(e,1),i=or(e,2),s=or(e,3),a=or(e,4),o=or(e,5),l=or(e,6),d=or(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],p=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],b=p,y=0,$=0,E=Math.floor(g/t.numHeads);if(l&&d&&K.size(l.dims)&&K.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==f||l.dims[1]!==t.numHeads||l.dims[3]!==E)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==E)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],$=l.dims[2]}else if(l&&K.size(l.dims)||d&&K.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S;if(n&&K.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');S=2,b=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==E)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');S=5,b=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==E)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');S=0,b=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}if(s&&K.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=y+b,A=0;if(a&&K.size(a.dims)>0){A=8;let N=a.dims;throw N.length===1?N[0]===f?A=1:N[0]===3*f+2&&(A=3):N.length===2&&N[0]===f&&N[1]===x&&(A=5),A===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let C=!1,O=g;if(i&&K.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(b!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');O=i.dims[2]}else{if(b!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');O=i.dims[1]*i.dims[3],C=!0}}let D=!1;if(a&&K.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&K.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==f||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:b,totalSequenceLength:x,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:g,vHiddenSize:O,headSize:E,vHeadSize:Math.floor(O/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:A,scale:t.scale,broadcastResPosBias:D,passPastInKv:C,qkvFormat:S}},Vv=e=>ut({...e}),Ru=ut({perm:[0,2,1,3]}),Cm=(e,t,r,n,i,s,a)=>{let o=[n,i,s],l=K.size(o),d=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],f=p=>{let g=Ce("qkv_with_bias",t.dataType,o),b=J("qkv",t.dataType,o),y=J("bias",r.dataType,o),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms($).declareVariables(b,y,g)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},Gs=(e,t,r,n,i,s,a,o)=>{let l=s;if(a&&K.size(a.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Cm(e,s,a,t,n,r*i,o),l=l.reshape([t,n,r,i]),r===1||n===1?l:e.compute(xr(l,Ru.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,n,r,i])),r===1||n===1?l:e.compute(xr(l,Ru.perm),{inputs:[l],outputs:[-1]})[0]},Wv=(e,t)=>{let r=Tm(e.inputs,t),n=e.inputs[0],i=or(e.inputs,1),s=or(e.inputs,2),a=or(e.inputs,3),o=or(e.inputs,4),l=or(e.inputs,5),d=or(e.inputs,6),f=or(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");let p=i&&s&&i.dims.length===4&&s.dims.length===4,g=Gs(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,a,0);if(p)return ha(e,g,i,s,o,void 0,d,f,l,r);if(!i||!s)throw new Error("key and value must be provided");let b=Gs(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,a,r.hiddenSize),y=Gs(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);ha(e,g,b,y,o,void 0,d,f,l,r)}}),Em,Im,Am,Om,Td,Hv,Gv,Kv=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),Em=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Im=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),ut({numOutputs:n,axis:t.axis,splitSizes:r})},Am=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Ae("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Om=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Td=(e,t)=>{let r=e[0].dims,n=K.size(r),i=e[0].dataType,s=K.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),o=J("input",i,r.length),l=new Array(t.numOutputs),d=[],f=[],p=0,g=[{type:12,data:n}];for(let y=0;y<t.numOutputs;y++){p+=t.splitSizes[y],l[y]=p;let $=r.slice();$[s]=t.splitSizes[y],f.push($),a[y]=Ce(`output${y}`,i,$.length),d.push({dims:f[y],dataType:e[0].dataType})}g.push({type:12,data:l},...Oe(r,...f));let b=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${Am(l.length)}
  ${Om(a)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Ae("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:g})}},Hv=(e,t)=>{Em(e.inputs);let r=e.inputs.length===1?t:Im(e.inputs,t);e.compute(Td(e.inputs,r),{inputs:[0]})},Gv=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return ut({axis:t,numOutputs:n,splitSizes:r})}}),zm,Ho,Xv,Yv=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),zm=(e,t)=>{let[r,n,i,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!K.areEqual(n.dims,[])&&!K.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!K.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],f=i.dims[0],p=K.sizeFromDimension(r.dims,1)/d,g=o===0?i.dims[1]*2:p/a;if(o>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(l!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(d>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Ho=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:s}=t,a=e[0].dims[0],o=K.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,f=e[2].dims[1],p=i===0?f*2:d/n,g=new Array(a,l,d/p,p-f),b=K.computeStrides(g),y=[{type:1,data:s},{type:12,data:g},{type:12,data:b},...e[0].dims.length===3?new Array({type:12,data:[o,d,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,l*p,1]}):[],...Oe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=E=>{let S=J("input",e[0].dataType,e[0].dims.length),x=J("position_ids",e[1].dataType,e[1].dims.length),A=J("cos_cache",e[2].dataType,e[2].dims.length),C=J("sin_cache",e[3].dataType,e[3].dims.length),O=Ce("output",e[0].dataType,e[0].dims.length);return E.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:b.length},{name:"input_output_strides",type:"u32",length:b.length}]),`
        ${E.declareVariables(S,x,A,C,O)}

        ${E.mainStart(gs)}
          let half_rotary_emb_dim = uniforms.${A.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",Ce("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${S.getByOffset("i")} * ${A.get("position_id","bsnh[3]")} -
                ${S.getByOffset("j")} * ${C.get("position_id","bsnh[3]")};
            ${O.setByOffset("i","re")}
            let im = ${S.getByOffset("i")} * ${C.get("position_id","bsnh[3]")} +
                ${S.getByOffset("j")} * ${A.get("position_id","bsnh[3]")};
            ${O.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${O.setByOffset("k",S.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ut({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(g)/gs)},programUniforms:y})}},Xv=(e,t)=>{zm(e.inputs,t),e.compute(Ho(e.inputs,t))}}),Mm,Rm,Bu,Bm,Zv,A$=pe(()=>{"use strict";At(),Pe(),ac(),qv(),Kv(),ni(),Yv(),Le(),Mm=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],f=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],p=d,g=0,b=!n||n.dims.length===0,y=Math.floor(b?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);b&&(f=y*t.numHeads);let $=s&&s.dims.length!==0,E=a&&a.dims.length!==0;if($&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if($&&E){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=s.dims[2]}else if($||E)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}let x=0,A=!1,C=t.kvNumHeads?y*t.kvNumHeads:f;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');C=i.dims[1]*i.dims[3],A=!0}}let O=e.length>4?e[5]:void 0;if(O){if(O.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let D=O.dims.reduce((N,T)=>N*T,1);if(D!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${D}.`);for(let N=0;N<O.dims.length;N++)if(O.dims[N]!==1&&O.dims[N]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${N}] = ${O.dims[N]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:C,headSize:y,vHeadSize:Math.floor(C/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:A,qkvFormat:S}},Rm=ut({perm:[0,2,1,3]}),Bu=(e,t,r)=>{let n=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute(xr(n,Rm.perm),{inputs:[n],outputs:[-1]})[0]),n},Bm=(e,t,r,n)=>{let i=7,s=["type","type"],a=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=f=>{let p=J("seq_lens",r.dataType,r.dims),g=J("total_seq_lens",n.dataType,n.dims),b=Ce("pos_ids",i,a),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${f.registerUniforms(y).declareVariables(p,g,b)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${p.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${b.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${b.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${b.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},Zv=(e,t)=>{if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let r=Mm(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=ut({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[g,b,y]=!i&&!s?e.compute(Td([n],p),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,s],$,E;if(t.doRotary){let C=e.compute(Bm(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],O=e.inputs[7],D=e.inputs[8],N=ut({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),T=[g,C,O,D],W=[-1];$=e.compute(Ho(T,N),{inputs:T,outputs:W})[0],T.splice(0,1,b);let Y=ut({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});E=e.compute(Ho(T,Y),{inputs:T,outputs:W})[0]}let S=Gs(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?$:g,void 0,0),x=Bu(e,t.doRotary?E:b,r),A=Bu(e,y,r);ha(e,S,x,A,void 0,void 0,a,o,void 0,r,l,d)}}),Pu,Pm,Dm,Qv,O$=pe(()=>{"use strict";Pe(),Ue(),ni(),Le(),Pu=(e,t,r,n,i,s,a,o)=>{let l=It(s),d=l===1?"f32":`vec${l}f`,f=l===1?"vec2f":`mat2x${l}f`,p=i*a,g=64;p===1&&(g=256);let b=[i,a,s/l],y=[i,a,2],$=["rank","type","type"],E=[];E.push(...Oe(b,y));let S=x=>{let A=J("x",t.dataType,3,l),C=J("scale",r.dataType,r.dims),O=J("bias",n.dataType,n.dims),D=Ce("output",1,3,2),N=[A,C,O,D];return`
  var<workgroup> workgroup_shared : array<${f}, ${g}>;
  const workgroup_size = ${g}u;
  ${x.declareVariables(...N)}
  ${x.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${A.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${ti("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${ti("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${g}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:p},programUniforms:E}),getShaderSource:S},{inputs:[t,r,n],outputs:[-1]})[0]},Pm=(e,t,r)=>{let n=t[0].dims,i=n,s=2,a=n[0],o=n[1],l=K.sizeFromDimension(n,s),d=It(l),f=K.size(i)/d,p=Pu(e,t[0],t[1],t[2],a,l,o,r.epsilon),g=[a,o,l/d],b=[a,o],y=["type","none"],$=E=>{let S=J("x",t[0].dataType,g.length,d),x=J("scale_shift",1,b.length,2),A=Ce("output",t[0].dataType,g.length,d),C=[S,x,A];return`
  ${E.registerUniform("output_size","u32").declareVariables(...C)}
  ${E.mainStart()}
  ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${A.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${S.getByOffset("global_idx")} * ${A.type.value}(scale_shift.x) + ${A.type.value}(scale_shift.y);
      ${A.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...Oe(g,b,g)]}),getShaderSource:$},{inputs:[t[0],p]})},Dm=(e,t,r)=>{let n=t[0].dims,i=n,s=n[0],a=n[n.length-1],o=K.sizeFromDimension(n,1)/a,l=It(a),d=K.size(i)/l,f=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],p=["type","type"],g=!1,b=[0,n.length-1];for(let S=0;S<n.length-2;S++)g=g||n[S+1]!==1,b.push(S+1);g=g&&n[n.length-1]!==1;let y=g?e.compute(xr(e.inputs[0],b),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(S,x)=>n[b[x]])),$=Pu(e,y,t[1],t[2],s,o,a,r.epsilon),E=S=>{let x=qt(t[0].dataType),A=l===1?"vec2f":`mat${l}x2f`,C=N=>{let T=N===0?"x":"y",W=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${x}(${W}(scale.${T}))`;case 2:return`vec2<${x}>(${W}(scale[0].${T}, scale[1].${T}))`;case 4:return`vec4<${x}>(${W}(scale[0].${T}, scale[1].${T}, scale[2].${T}, scale[3].${T}))`;default:throw new Error(`Not supported compoents ${l}`)}},O=J("input",t[0].dataType,t[0].dims,l),D=Ce("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${O.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${A}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${D.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${S.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${C(0)}, ${C(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:E},{inputs:[t[0],$]})},Qv=(e,t)=>{t.format==="NHWC"?Dm(e,e.inputs,t):Pm(e,e.inputs,t)}}),Nm,Um,Jv,z$=pe(()=>{"use strict";Pe(),Ue(),Le(),Nm=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Um=(e,t,r)=>{let n=t.simplified,i=e[0].dims,s=e[1],a=!n&&e[2],o=i,l=K.normalizeAxis(t.axis,i.length),d=K.sizeToDimension(i,l),f=K.sizeFromDimension(i,l),p=K.size(s.dims),g=a?K.size(a.dims):0;if(p!==f||a&&g!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${g}`);let b=[];for(let O=0;O<i.length;++O)O<l?b.push(i[O]):b.push(1);let y=It(f),$=["type","type"],E=[{type:12,data:d},{type:1,data:f},{type:12,data:Math.floor(f/y)},{type:1,data:t.epsilon}];a&&$.push("type");let S=r>1,x=r>2,A=O=>{let D=qt(e[0].dataType),N=[J("x",e[0].dataType,e[0].dims,y),J("scale",s.dataType,s.dims,y)];a&&N.push(J("bias",a.dataType,a.dims,y)),N.push(Ce("output",e[0].dataType,o,y)),S&&N.push(Ce("mean_data_output",1,b)),x&&N.push(Ce("inv_std_output",1,b));let T=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${O.registerUniforms(T).declareVariables(...N)}
  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${yd("f32",y)};
    var mean_square_vector = ${yd("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${ls(D,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ti("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ti("mean_square_vector",y)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${ls(D,y,"x[j + offset]")};
      let f32scale = ${ls(D,y,"scale[j]")};
      output[j + offset] = ${N[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${ls(D,y,"bias[j]")}`:""}
      );
    }

    ${S?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},C=[{dims:o,dataType:e[0].dataType}];return S&&C.push({dims:b,dataType:1}),x&&C.push({dims:b,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${n}`,inputDependencies:$},getRunData:()=>({outputs:C,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:E}),getShaderSource:A}},Jv=(e,t)=>{Nm(e.inputs),e.compute(Um(e.inputs,t,e.outputCount))}}),Lm,e1,M$=pe(()=>{"use strict";Ue(),cc(),fc(),Lm=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},e1=e=>{Lm(e.inputs);let t=ms.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(dc(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=K.size(e.inputs[0].dims.slice(0,-2)),a=K.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&a===1){let o=e.inputs[0].reshape([1,s,n]),l=e.inputs[1].reshape([1,n,r]),d=[1,s,r],f=[o,l];e.compute(qo(f,{activation:""},t,d),{inputs:f})}else e.compute(qo(e.inputs,{activation:""},t))}}}),Fm,jm,Vm,t1,r1,R$=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),Fm=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!K.areEqual(a.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(K.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(K.size(l)!==d)throw new Error("zeroPoints input size error.")}},jm=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=K.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=It(t.k),g=It(d),b=It(a),y=o.concat([i,a]),$=i>1&&a/b%2===0?2:1,E=K.size(y)/b/$,S=64,x=[],A=[l,i,s/p],C=K.convertShape(e[1].dims).slice();C.splice(-1,1,d/g),x.push(...Oe(A)),x.push(...Oe(C)),x.push(...Oe(e[2].dims)),e.length===4&&x.push(...Oe(K.convertShape(e[3].dims)));let O=[l,i,a/b];x.push(...Oe(O));let D=N=>{let T=A.length,W=J("a",e[0].dataType,T,p),Y=J("b",12,C.length,g),ae=J("scales",e[2].dataType,e[2].dims.length),X=[W,Y,ae],le=e.length===4?J("zero_points",12,e[3].dims.length):void 0;le&&X.push(le);let q=O.length,te=Ce("output",e[0].dataType,q,b),ce=qt(e[0].dataType),ue=(()=>{switch(p){case 1:return`array<${ce}, 8>`;case 2:return`mat4x2<${ce}>`;case 4:return`mat2x4<${ce}>`;default:throw new Error(`${p}-component is not supported.`)}})(),Q=Math.floor(32/t.bits),we=Math.floor(Q/8),Te=()=>{let Se="";for(let be=0;be<we;be++){let et=be*t.bits*4,bt=et+t.bits;Se+=`
          // reuse a data (pass ${be})
            var input_offset${be>0?be:""} = ${be===0?W.indicesToOffset(`${W.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${be>0?be:""}: ${ue};
            for (var j${be>0?be:""}: u32 = 0; j${be>0?be:""} < ${8/p}; j${be>0?be:""}++) {
              a_data${be>0?be:""}[j${be>0?be:""}] = ${W.getByOffset(`input_offset${be>0?be:""}`)};
              input_offset${be>0?be:""}++;
            }
          `;for(let tt=0;tt<b*$;tt++)Se+=`
            b_value = ${g===1?`b${tt}_data`:`b${tt}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${be*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${et}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${bt}u) & b_mask);`}
            b_quantized_values = ${ue}(${Array.from({length:4},(kt,He)=>`${ce}(b_value_lower[${He}]), ${ce}(b_value_upper[${He}])`).join(", ")});
            b_dequantized_values = ${p===1?`${ue}(${Array.from({length:8},(kt,He)=>`(b_quantized_values[${He}] - ${le?`zero_point${tt}`:"zero_point"}) * scale${tt}`).join(", ")});`:`(b_quantized_values - ${ue}(${Array(8).fill(`${le?`zero_point${tt}`:"zero_point"}`).join(",")})) * scale${tt};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(tt/b)}]${b>1?`[${tt%b}]`:""} += ${Array.from({length:8/p},(kt,He)=>`${p===1?`a_data${be>0?be:""}[${He}] * b_dequantized_values[${He}]`:`dot(a_data${be>0?be:""}[${He}], b_dequantized_values[${He}])`}`).join(" + ")};
          `}return Se},re=()=>{let Se=`
            var col_index = col * ${b};
            ${le?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ce}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let be=0;be<b*$;be++)Se+=`
            let scale${be} = ${ae.getByOffset("col_index * nBlocksPerCol + block")};
            ${le?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${le.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${be} = ${ce}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Se},xe=()=>{let Se=`col_index = col * ${b};`;for(let be=0;be<b*$;be++)Se+=`
            let b${be}_data = ${Y.getByIndices(`${Y.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Se+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ue};
            var b_dequantized_values: ${ue};`,Se};return`
        var<workgroup> workgroup_shared: array<${te.type.value}, ${$*S}>;
        ${N.declareVariables(...X,te)}
        ${N.mainStart([S,1,1])}
          let output_indices = ${te.offsetToIndices(`(global_idx / ${S}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${S}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${re()}
            for (var word: u32 = 0; word < ${d}; word += ${g}) {
              ${xe()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${Te()}
                word_offset += ${Q/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${te.type.value} = ${te.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${S}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${te.setByIndices(`${te.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${g};${b};${$};${S}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:f}],dispatchGroup:{x:E},programUniforms:x}),getShaderSource:D}},Vm=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=K.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=It(t.k),g=It(d),b=o.concat([i,a]),y=128,$=a%8===0?8:a%4===0?4:1,E=y/$,S=Math.floor(32/t.bits),x=E*g*S,A=x/p,C=x/t.blockSize,O=K.size(b)/$,D=[],N=[l,i,s/p],T=K.convertShape(e[1].dims).slice();T.splice(-1,1,d/g),D.push(...Oe(N)),D.push(...Oe(T)),D.push(...Oe(e[2].dims)),e.length===4&&D.push(...Oe(K.convertShape(e[3].dims)));let W=[l,i,a];D.push(...Oe(W));let Y=ae=>{let X=N.length,le=J("a",e[0].dataType,X,p),q=J("b",12,T.length,g),te=J("scales",e[2].dataType,e[2].dims.length),ce=[le,q,te],ue=e.length===4?J("zero_points",12,e[3].dims.length):void 0;ue&&ce.push(ue);let Q=W.length,we=Ce("output",e[0].dataType,Q),Te=qt(e[0].dataType),re=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${Te}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Te}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Te}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Te}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${le.type.value}, ${A}>;
        var<workgroup> inter_results: array<array<${we.type.value}, ${E}>, ${$}>;
        ${ae.declareVariables(...ce,we)}
        ${ae.mainStart([E,$,1])}
          let output_indices = ${we.offsetToIndices(`workgroup_index * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${C} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${A};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${A}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${le.getByIndices(`${le.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${le.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${C} + local_id.x;
            ${ue?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${ue.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Te}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Te}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${te.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${q.getByIndices(`${q.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let xe=Math.floor(S/8),Se="";for(let be=0;be<xe;be++){let et=be*t.bits*4,bt=et+t.bits;Se+=`
              ${re()}
              {${t.bits===2?`
                let half_word = b_value >> ${be*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${et}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${bt}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Te}>(${Array.from({length:4},(tt,kt)=>`${Te}(b_value_lower[${kt}]), ${Te}(b_value_upper[${kt}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Te}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(tt,kt)=>`${`dot(a_data${kt}, b_dequantized_values[${kt}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return Se})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${we.type.value} = ${we.type.value}(0);
            for (var b = 0u; b < ${E}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${we.setByIndices(`${we.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${g};${E};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:f}],dispatchGroup:{x:O},programUniforms:D}),getShaderSource:Y}},t1=(e,t)=>{Fm(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Vm(e.inputs,t)):e.compute(jm(e.inputs,t))},r1=e=>ut(e)}),Wm,qm,Hm,Gm,Km,Xm,Ym,Zm,n1,B$=pe(()=>{"use strict";Pe(),Ue(),Le(),Wm=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},qm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${Ae("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Ae("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${Ae("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},Hm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Ae("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Ae("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Ae("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Ae("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Gm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Ae("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Ae("uniforms.x_shape",i,t)})) {
                  k = i32(${Ae("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${Ae("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Km=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Ae("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${Ae("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${Ae("uniforms.x_shape",i,t)})) {
                  k -= i32(${Ae("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${Ae("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Xm=(e,t,r)=>{switch(r.mode){case 0:return qm(e,t,r.pads.length);case 1:return Hm(e,t,r.pads.length);case 2:return Gm(e,t,r.pads.length);case 3:return Km(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Ym=(e,t)=>{let r=K.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=K.size(r),s=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...Oe(e[0].dims,r));let o=["rank"],l=d=>{let f=Ce("output",e[0].dataType,r.length),p=J("x",e[0].dataType,n.length),g=p.type.value,b=Xm(f,n.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:a?g:"f32"}),`
            ${d.registerUniforms(y).declareVariables(p,f)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${b}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(r)/64)},programUniforms:s}),getShaderSource:l}},Zm=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(r[l]),s[Number(o[l])+i]=Number(r[l+o.length])}else r.forEach((o,l)=>s[Number(l)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:n,pads:a}}else return t},n1=(e,t)=>{Wm(e.inputs);let r=Zm(e.inputs,t);e.compute(Ym(e.inputs,r),{inputs:[0]})}}),Us,Du,Nu,Uu,Lu,Qm,Jm,Fu,ju,i1,s1,Vu,a1,o1,Wu,l1,u1,d1,c1,P$=pe(()=>{"use strict";Br(),Pe(),Ue(),Le(),Us=e=>{if(_t.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Du=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),l=s?t.dilations.slice():[],d=t.pads.slice();Vo.adjustPoolAttributes(r,i,a,o,l,d);let f=Vo.computePoolOutputShape(r,i,o,l,a,d,t.autoPad,t.ceilMode),p=Object.assign({},t);s?Object.assign(p,{kernelShape:a,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let g=f.slice();return g.push(g.splice(1,1)[0]),[p,n?g:f]},Nu=(e,t)=>{let r=t.format==="NHWC",n=K.size(e),i=K.size(t.kernelShape),s=[{type:12,data:n},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],p=!!(d+f);s.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:f}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let b=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],E=t.pads[t.pads.length-2];g=!!($+E),s.push({type:12,data:b},{type:12,data:y},{type:12,data:$},{type:12,data:E}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,p,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=K.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,f)=>d+f);return[s,a,!!l,!1,!1]}},Uu=(e,t,r,n,i,s,a,o,l,d,f,p)=>{let g=i.format==="NHWC",b=t.type.value,y=Ce("output",t.type.tensor,n);if(i.kernelShape.length<=2){let $="",E="",S="",x=r-(g?2:1);if(f?$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${x}] < 0 || xIndices[${x}]
                      >= uniforms.x_shape[${x}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,i.kernelShape.length===2){let A=r-(g?3:2);p?E=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${A}] = indices[${A}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${A}] < 0 || xIndices[${A}] >= uniforms.x_shape[${A}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:E=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${A}] = indices[${A}] * uniforms.sh - uniforms.phStart + j;
                `,S=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${b}(${o});
              var pad = 0;
              ${E}
              ${$}
              ${S}
              ${a}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let $=i.kernelShape.length,E=i.pads.length,S="";return d?S=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:S=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${$}>;

              var value = ${b}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${$-1}u; j++) {
                  offsets[j] = offset / ${Ae("uniforms.kernelStrides","j",$)};
                  offset -= offsets[j] * ${Ae("uniforms.kernelStrides","j",$)};
                }
                offsets[${$-1}] = offset;

                isPad = false;
                for (var j = ${r-$}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Ae("uniforms.strides",`j - ${r-$}u`,$)}
                    + offsets[j - ${r-$}u] - ${Ae("uniforms.pads","j - 2u",E)};
                  ${S}
              }
              ${a}

              output[global_idx] = value;
            }`}},Lu=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Qm=e=>`${Lu(e)};${e.countIncludePad}`,Jm=e=>`${Lu(e)};${e.storageOrder};${e.dilations}`,Fu=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ju=(e,t,r,n)=>{let[i,s]=Du(t,n,r),a=J("x",t.dataType,t.dims.length),o=a.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[f,p,g,b,y]=Nu(s,i);f.push(...Oe(t.dims,s));let $=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${g};${b};${y}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(K.size(s)/64)},programUniforms:f}),getShaderSource:E=>Uu(E,a,t.dims.length,s.length,i,l,d,0,p,g,b,y)}},i1=e=>{let t=e.count_include_pad!==0,r=Fu(e);if(r.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:Qm(n)}},s1=(e,t)=>{Us(e.inputs),e.compute(ju("AveragePool",e.inputs[0],!1,t))},Vu={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},a1=e=>{let t=e.format;return{format:t,...Vu,cacheKey:t}},o1=(e,t)=>{Us(e.inputs),e.compute(ju("GlobalAveragePool",e.inputs[0],!0,t))},Wu=(e,t,r,n)=>{let[i,s]=Du(t,n,r),a=`
      value = max(x_val, value);
    `,o="",l=J("x",t.dataType,t.dims.length),d=["rank"],[f,p,g,b,y]=Nu(s,i);return f.push(...Oe(t.dims,s)),{name:e,shaderCache:{hint:`${n.cacheKey};${g};${b};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(K.size(s)/64)},programUniforms:f}),getShaderSource:$=>Uu($,l,t.dims.length,s.length,i,a,o,t.dataType===10?-65504:-1e5,p,g,b,y)}},l1=(e,t)=>{Us(e.inputs),e.compute(Wu("MaxPool",e.inputs[0],!1,t))},u1=e=>{let t=e.storage_order,r=e.dilations,n=Fu(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:Jm(i)}},d1=e=>{let t=e.format;return{format:t,...Vu,cacheKey:t}},c1=(e,t)=>{Us(e.inputs),e.compute(Wu("GlobalMaxPool",e.inputs[0],!0,t))}}),eg,tg,f1,p1,D$=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),eg=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},tg=(e,t)=>{let r=K.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,s=e[0].dims,a=e[1].dataType,o=K.size(s),l=n===3||n===2,d=l?[Math.ceil(K.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,p=e.length>2?e[2]:void 0,g=p?l?[Math.ceil(K.size(p.dims)/4)]:p.dims:void 0,b=f.length===0||f.length===1&&f[0]===1,y=b===!1&&f.length===1,$=It(o),E=b&&(!l||$===4),S=E?$:1,x=E&&!l?$:1,A=J("input",l?12:n,d.length,x),C=J("scale",a,f.length),O=p?J("zero_point",l?12:n,g.length):void 0,D=Ce("output",a,s.length,S),N=[A,C];O&&N.push(O);let T=[d,f];p&&T.push(g);let W=[{type:12,data:o/S},{type:12,data:r},{type:12,data:t.blockSize},...Oe(...T,s)],Y=ae=>{let X=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ae.registerUniforms(X).declareVariables(...N,D)}
      ${ae.mainStart()}
          ${ae.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${D.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${A.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${S===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${A.getByOffset("global_idx")};`};

          // Set scale input
          ${b?`let scale_value= ${C.getByOffset("0")}`:y?`
            let scale_index = ${D.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${C.getByOffset("scale_index")};`:`
            var scale_indices: ${C.type.indices} = output_indices;
            let index = ${C.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${C.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${C.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${O?b?l?`
                let zero_point_input = ${O.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${O.getByOffset("0")}`:y?l?`
                let zero_point_index = ${D.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${O.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${D.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${O.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${C.indicesToOffset("scale_indices")};
                let zero_point_input = ${O.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${O.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":A.type.value}(0);`};
      // Compute and write output
      ${D.setByOffset("global_idx",`${D.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:O?["rank","rank","rank"]:["rank","rank"]},getShaderSource:Y,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/S/64),y:1,z:1},programUniforms:W})}},f1=(e,t)=>{eg(e.inputs,t),e.compute(tg(e.inputs,t))},p1=e=>ut({axis:e.axis,blockSize:e.blockSize})}),rg,ng,h1,N$=pe(()=>{"use strict";Br(),Pe(),Le(),rg=(e,t,r)=>{let n=e===t,i=e<t&&r<0,s=e>t&&r>0;if(n||i||s)throw new Error("Range these inputs' contents are invalid.")},ng=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),s=[i],a=i,o=[{type:12,data:a},{type:n,data:e},{type:n,data:r},...Oe(s)],l=d=>{let f=Ce("output",n,s.length),p=f.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${d.registerUniforms(g).declareVariables(f)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},h1=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),_t.webgpu.validateInputContent&&rg(t,r,n),e.compute(ng(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),ig,sg,m1,g1,U$=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),ig=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${t}, bitcast<${n}>(${r}));`:`
              ${i}bitcast<${n}>(oldValue) + (${r})${s}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${s}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},sg=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r,s=1,a=Math.ceil(K.sizeToDimension(n,n.length-1)/s),o=n[n.length-1],l=K.sizeFromDimension(r,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:l},...Oe(e[1].dims,e[2].dims,i)],f=p=>{let g=J("indices",e[1].dataType,e[1].dims.length),b=J("updates",e[2].dataType,e[2].dims.length,s),y=t.reduction!=="none"&&t.reduction!==""?Fy("output",e[0].dataType,i.length):Ce("output",e[0].dataType,i.length,s);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,b,y)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${ig(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:f}},m1=e=>ut({reduction:e.reduction}),g1=(e,t)=>{e.compute(sg(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ag,og,lg,qu,ug,dg,cg,fg,pg,hg,mg,gg,Hu,yg,bg,vg,wg,_g,y1,b1,L$=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),ag=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},og=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((i,s)=>n[i]=e[s]),n},lg=(e,t,r,n,i,s)=>{let[a,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(f=>s.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(f=>n.push(f)),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");ag(n,t),t.axes.length>0&&og(n,t.axes,d).forEach((f,p)=>n[p]=f)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(f=>i.push(Number(f))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},qu=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,ug=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${qu("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${qu("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",dg=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",cg=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((s,a)=>{n[s]=i[a],n[a+r]=i[t.length+a]}),n):i},fg=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(s=>i.push(s)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((s,a)=>i[s]=r[a])}else r.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,a)=>Math.round(s*t[a]))}return i},pg=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=n),r.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(n,0,t.length),i.forEach((s,a)=>i[a]=Math.round(s*t[a]))),i},hg=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Ae("uniforms.scales","i",n)};
        var roi_low = ${Ae("uniforms.roi","i",i)};
        var roi_hi = ${Ae("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Ae("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Ae("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,mg=(e,t,r,n,i,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Ae("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Ae("uniforms.roi","i",s)};
          var roi_hi = ${Ae("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${Ae("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Ae("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,gg=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Ae("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Hu=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",yg=(e,t,r,n,i)=>{let[s,a,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Hu(e,l,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${a}];
      var col:${d} = originalIndices[${o}];
      ${n?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[a]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},bg=(e,t,r,n,i,s,a,o,l,d)=>{let f=r.length===2,p=!0,[g,b]=f?[0,1]:p?[2,3]:[1,2],y=e.type.value,$=E=>{let S=E===g?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",E)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[E]},
        ${n[E]}, ${r[E]}, ${s[E]}, ${s[E]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[E]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${y} = originalIdx + ${y}(i);
          if (${S} < 0 || ${S} >= ${r[E]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${S} = max(0, min(${S}, ${r[E]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",E,`u32(${S})`)};
          data[i + 1] = ${E===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${$(g)};
    ${$(b)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},vg=(e,t,r,n,i)=>{let[s,a,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Hu(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${a}];
      var height:${f} = originalIndices[${o}];
      var width:${f} = originalIndices[${l}];
      ${n?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[a]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},wg=(e,t,r,n,i,s)=>{let a=e.dims,o=cg(s,t.axes,a.length),l=fg(a,n,i,t.axes),d=n.slice();n.length===0&&(d=a.map((x,A)=>x===0?1:l[A]/x),t.keepAspectRatioPolicy!=="stretch"&&(l=pg(a,d,t)));let f=Ce("output",e.dataType,l.length),p=J("input",e.dataType,a.length),g=K.size(l),b=a.length===l.length&&a.every((x,A)=>x===l[A]),y=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,E=p.type.value,S=x=>`
      ${b?"":`
      ${ug(t.coordinateTransformMode,E)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${gg(p,a)};
              ${dg(t.nearestMode,r,E)};
              ${mg(p,f,a,l,d.length,o.length,y)};
              `;case"linear":return`
              ${hg(f,a,l,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${yg(p,f,a,y,$)}`;if(a.length===3||a.length===5)return`${vg(p,f,a,y,$)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${bg(p,f,a,l,d,o,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(p,f)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${b?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${b}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:o},...Oe(a,l)]})}},_g=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},y1=(e,t)=>{let r=[],n=[],i=[],s=_g(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");lg(e.inputs,t,s,r,n,i),e.compute(wg(e.inputs[0],t,s,r,n,i),{inputs:[0]})},b1=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return ut({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),xg,$g,v1,F$=pe(()=>{"use strict";Pe(),Ue(),Le(),xg=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},$g=(e,t,r,n)=>{let i=t.simplified,s=e[0].dims,a=K.size(s),o=s,l=a,d=s.slice(-1)[0],f=n?s.slice(0,-1).concat(1):[],p=!i&&e.length>3,g=e.length>4,b=n&&r>1,y=n&&r>2,$=r>3,E=64,S=It(d),x=[{type:12,data:l},{type:12,data:S},{type:12,data:d},{type:1,data:t.epsilon}],A=O=>{let D=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],N=[J("x",e[0].dataType,e[0].dims,S),J("skip",e[1].dataType,e[1].dims,S),J("gamma",e[2].dataType,e[2].dims,S)];p&&N.push(J("beta",e[3].dataType,e[3].dims,S)),g&&N.push(J("bias",e[4].dataType,e[4].dims,S)),N.push(Ce("output",e[0].dataType,o,S)),b&&N.push(Ce("mean_output",1,f)),y&&N.push(Ce("inv_std_output",1,f)),$&&N.push(Ce("input_skip_bias_sum",e[0].dataType,o,S));let T=qt(e[0].dataType),W=qt(1,S);return`

      ${O.registerUniforms(D).declareVariables(...N)}
      var<workgroup> sum_shared : array<${W}, ${E}>;
      var<workgroup> sum_squared_shared : array<${W}, ${E}>;

      ${O.mainStart([E,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${E};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${E};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${E-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":T+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${ls(T,S,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${E};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${ti("sum",S)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ti("square_sum",S)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${b?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${T}(mean)`}) *
            ${T}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},C=[{dims:o,dataType:e[0].dataType}];return r>1&&C.push({dims:f,dataType:1}),r>2&&C.push({dims:f,dataType:1}),r>3&&C.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${S};${b};${y};${$}`,inputDependencies:e.map((O,D)=>"type")},getShaderSource:A,getRunData:()=>({outputs:C,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:x})}},v1=(e,t)=>{xg(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute($g(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Sg,Ls,kg,Gu,Tg,Cg,w1,_1,j$=pe(()=>{"use strict";Pe(),Ue(),At(),Le(),Sg=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},Ls=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},kg=(e,t)=>{if(e.length>1){let r=Ls(e,1),n=Ls(e,2),i=Ls(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),ut({starts:r,ends:n,axes:i})}else return t},Gu=(e,t,r,n,i)=>{let s=e;return e<0&&(s+=r[n[t]]),i[t]<0?Math.max(0,Math.min(s,r[n[t]]-1)):Math.max(0,Math.min(s,r[n[t]]))},Tg=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${Ae("uniforms.input_shape","i",r.length)};
            let steps_i = ${Ae("uniforms.steps","i",r.length)};
            let signs_i = ${Ae("uniforms.signs","i",r.length)};
            let starts_i = ${Ae("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Cg=(e,t)=>{let r=e[0].dims,n=K.size(r),i=t.axes.length>0?K.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=Ls(e,4);s.forEach(S=>S!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let a=t.starts.map((S,x)=>Gu(S,x,r,i,s)),o=t.ends.map((S,x)=>Gu(S,x,r,i,s));if(i.length!==a.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let S=0;S<r.length;++S)i.includes(S)||(a.splice(S,0,0),o.splice(S,0,r[S]),s.splice(S,0,1));let l=s.map(S=>Math.sign(S));s.forEach((S,x,A)=>{if(S<0){let C=(o[x]-a[x])/S,O=a[x],D=O+C*s[x];a[x]=D,o[x]=O,A[x]=-S}});let d=r.slice(0);i.forEach((S,x)=>{d[S]=Math.ceil((o[S]-a[S])/s[S])});let f={dims:d,dataType:e[0].dataType},p=Ce("output",e[0].dataType,d.length),g=J("input",e[0].dataType,e[0].dims.length),b=K.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],$=[{type:12,data:b},{type:12,data:a},{type:6,data:l},{type:12,data:s},...Oe(e[0].dims,d)],E=S=>`
      ${S.registerUniforms(y).declareVariables(g,p)}
        ${Tg(g,p,r)}
        ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:E,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:$})}},w1=(e,t)=>{Sg(e.inputs,t);let r=kg(e.inputs,t);e.compute(Cg(e.inputs,r),{inputs:[0]})},_1=e=>{let t=e.starts,r=e.ends,n=e.axes;return ut({starts:t,ends:r,axes:n})}}),Eg,Ig,x1,$1,V$=pe(()=>{"use strict";Pe(),Ue(),At(),ni(),Le(),Eg=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Ig=(e,t)=>{let r=e.inputs[0],n=r.dims,i=K.size(n),s=n.length,a=K.normalizeAxis(t.axis,s),o=a<n.length-1,l,d=[];o?(d=Array.from({length:s},(N,T)=>T),d[a]=s-1,d[s-1]=a,l=e.compute(xr(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let f=l.dims,p=f[s-1],g=i/p,b=It(p),y=p/b,$=64;g===1&&($=256);let E=(N,T)=>T===4?`max(max(${N}.x, ${N}.y), max(${N}.z, ${N}.w))`:T===2?`max(${N}.x, ${N}.y)`:T===3?`max(max(${N}.x, ${N}.y), ${N}.z)`:N,S=J("x",l.dataType,l.dims,b),x=Ce("result",l.dataType,l.dims,b),A=S.type.value,C=qt(l.dataType)==="f32"?`var threadMax = ${A}(-3.4028234663852886e+38f);`:`var threadMax = ${A}(-65504.0h);`,O=N=>`
      var<workgroup> rowMaxShared : ${A};
      var<workgroup> rowSumShared : ${A};
      var<workgroup> threadShared : array<${A}, ${$}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${A} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${A}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${N.registerUniform("packedCols","i32").declareVariables(S,x)}
      ${N.mainStart($)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${$};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${C}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${A}(${E("threadShared[0]",b)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${A}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${A}(${ti("threadShared[0]",b)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${A}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,D=e.compute({name:"Softmax",shaderCache:{hint:`${b};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:y}]}),getShaderSource:O},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(xr(D,d),{inputs:[D]})},x1=(e,t)=>{Eg(e.inputs),Ig(e,t)},$1=e=>ut({axis:e.axis})}),Ku,Ag,Og,zg,S1,W$=pe(()=>{"use strict";Pe(),Ue(),Le(),Ku=e=>Array.from(e.getBigInt64Array(),Number),Ag=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ku(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Og=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},zg=(e,t)=>{let r=e[0].dims,n=t??Ku(e[1]),i=Og(r,n),s=K.size(i),a=e[0].dataType,o=J("input",a,r.length),l=Ce("output",a,i.length),d=f=>`
      const inputShape = ${o.indices(...r)};
      ${f.registerUniform("output_size","u32").declareVariables(o,l)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...Oe(e[0].dims,i)]}),getShaderSource:d}},S1=e=>{Ag(e.inputs),e.compute(zg(e.inputs),{inputs:[0]})}}),Mg,Rg,k1,q$=pe(()=>{"use strict";Pe(),Ue(),Le(),Mg=(e,t,r,n,i)=>{let s=Ce("output_data",i,r.length,4),a=J("a_data",t[1].dataType,t[1].dims.length,4),o=J("b_data",t[2].dataType,t[2].dims.length,4),l=J("c_data",t[0].dataType,t[0].dims.length,4),d,f=(p,g,b)=>`select(${g}, ${p}, ${b})`;if(!n)d=s.setByOffset("global_idx",f(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let p=(g,b,y="")=>{let $=`a_data[index_a${b}][component_a${b}]`,E=`b_data[index_b${b}][component_b${b}]`,S=`bool(c_data[index_c${b}] & (0xffu << (component_c${b} * 8)))`;return`
            let output_indices${b} = ${s.offsetToIndices(`global_idx * 4u + ${b}u`)};
            let offset_a${b} = ${a.broadcastedIndicesToOffset(`output_indices${b}`,s)};
            let offset_b${b} = ${o.broadcastedIndicesToOffset(`output_indices${b}`,s)};
            let offset_c${b} = ${l.broadcastedIndicesToOffset(`output_indices${b}`,s)};
            let index_a${b} = offset_a${b} / 4u;
            let index_b${b} = offset_b${b} / 4u;
            let index_c${b} = offset_c${b} / 4u;
            let component_a${b} = offset_a${b} % 4u;
            let component_b${b} = offset_b${b} % 4u;
            let component_c${b} = offset_c${b} % 4u;
            ${g}[${b}] = ${y}(${f($,E,S)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,a,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Rg=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,s=!(K.areEqual(t,r)&&K.areEqual(r,n)),a=t,o=K.size(t);if(s){let d=ms.calcShape(ms.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=K.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Mg(d,e,a,s,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...Oe(n,t,r,a)]})}},k1=e=>{e.compute(Rg(e.inputs))}}),T1,H$=pe(()=>{"use strict";s$(),ac(),a$(),o$(),l$(),u$(),d$(),m$(),y$(),b$(),v$(),w$(),_$(),x$(),$$(),S$(),k$(),T$(),C$(),E$(),I$(),A$(),O$(),z$(),M$(),R$(),qv(),B$(),P$(),D$(),N$(),U$(),sc(),L$(),Yv(),F$(),j$(),V$(),Kv(),W$(),ni(),oc(),q$(),T1=new Map([["Abs",[gb]],["Acos",[yb]],["Acosh",[bb]],["Add",[Jb]],["ArgMax",[fb,vd]],["ArgMin",[cb,vd]],["Asin",[vb]],["Asinh",[wb]],["Atan",[_b]],["Atanh",[xb]],["Attention",[pb]],["AveragePool",[s1,i1]],["BatchNormalization",[hb]],["BiasAdd",[mb]],["BiasSplitGelu",[Qb]],["Cast",[Sb,$b]],["Ceil",[Tb]],["Clip",[kb]],["Concat",[uv,dv]],["Conv",[kd,Sd]],["ConvTranspose",[wv,vv]],["Cos",[Cb]],["Cosh",[Eb]],["CumSum",[_v,xv]],["DepthToSpace",[$v,Sv]],["DequantizeLinear",[f1,p1]],["DFT",[kv,Tv]],["Div",[ev]],["Einsum",[Cv,Ev]],["Elu",[Ib,Hs]],["Equal",[tv]],["Erf",[Ab]],["Exp",[Ob]],["Expand",[Iv]],["FastGelu",[Av]],["Floor",[zb]],["FusedConv",[kd,Sd]],["Gather",[zv,Ov]],["GatherElements",[Nv,Dv]],["GatherBlockQuantized",[Bv,Pv]],["GatherND",[Mv,Rv]],["Gelu",[Mb]],["Gemm",[Lv,Uv]],["GlobalAveragePool",[o1,a1]],["GlobalMaxPool",[c1,d1]],["Greater",[sv]],["GreaterOrEqual",[ov]],["GridSample",[Fv,jv]],["GroupQueryAttention",[Zv]],["HardSigmoid",[Fb,Lb]],["HardSwish",[jb]],["InstanceNormalization",[Qv]],["LayerNormalization",[Jv]],["LeakyRelu",[Rb,Hs]],["Less",[av]],["LessOrEqual",[lv]],["Log",[Yb]],["MatMul",[e1]],["MatMulNBits",[t1,r1]],["MaxPool",[l1,u1]],["Mul",[rv]],["MultiHeadAttention",[Wv,Vv]],["Neg",[Pb]],["Not",[Bb]],["Pad",[n1]],["Pow",[nv]],["QuickGelu",[Zb,Hs]],["Range",[h1]],["Reciprocal",[Db]],["ReduceMin",[ab]],["ReduceMean",[tb]],["ReduceMax",[sb]],["ReduceSum",[lb]],["ReduceProd",[ob]],["ReduceL1",[rb]],["ReduceL2",[nb]],["ReduceLogSum",[db]],["ReduceLogSumExp",[ib]],["ReduceSumSquare",[ub]],["Relu",[Nb]],["Resize",[y1,b1]],["RotaryEmbedding",[Xv]],["ScatterND",[g1,m1]],["Sigmoid",[Ub]],["Sin",[Vb]],["Sinh",[Wb]],["Slice",[w1,_1]],["SkipLayerNormalization",[v1]],["Split",[Hv,Gv]],["Sqrt",[qb]],["Softmax",[x1,$1]],["Sub",[iv]],["Tan",[Hb]],["Tanh",[Gb]],["ThresholdedRelu",[Xb,Hs]],["Tile",[S1]],["Transpose",[Vy,Wy]],["Where",[k1]]])}),C1,G$=pe(()=>{"use strict";Br(),Mn(),Le(),C1=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){fn(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Kr(e.programInfo.name)}dispose(){}build(e,t){fn(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let i=jy(t,this.backend.device.limits),s=e.getShaderSource(i),a=`${n.join(`
`)}
${i.additionalImplementations}
${s}`,o=r.createShaderModule({code:a,label:e.name});nt("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Kr(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let s=t*r*n,a=Math.ceil(Math.sqrt(s));if(a>i){if(a=Math.ceil(Math.cbrt(s)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),E1={};ys(E1,{WebGpuBackend:()=>I1});var Bg,Pg,Dg,I1,K$=pe(()=>{"use strict";Br(),Pe(),Mn(),Dy(),n$(),H$(),G$(),Bg=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let s=e[n].dims.length;r.push(`${i};${s}`);break}case"dims":{let s=e[n].dims.join(",");r.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},Pg=(e,t,r)=>{let n=e.name;return e.shaderCache?.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${Bg(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,n},Dg=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},I1=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=o=>t.features.has(o)&&r.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(n);let s=t,a=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new Dg(a),this.gpuDataManager=Ly(this),this.programManager=new C1(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,tc(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;fn(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let i=r[n],s=i.kernelId,a=this.kernels.get(s),o=a.kernelType,l=a.kernelName,d=i.programName,f=i.inputTensorViews,p=i.outputTensorViews,g=t[n*2],b=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let y=Number(g-this.queryTimeBase),$=Number(b-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger($))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(E=>({dims:E.dims,dataType:In(E.dataType)})),outputsMetadata:p.map(E=>({dims:E.dims,dataType:In(E.dataType)})),kernelId:s,kernelType:o,kernelName:l,programName:d,startTime:y,endTime:$});else{let E="";f.forEach((x,A)=>{E+=`input[${A}]: [${x.dims}] | ${In(x.dataType)}, `});let S="";p.forEach((x,A)=>{S+=`output[${A}]: [${x.dims}] | ${In(x.dataType)}, `}),console.log(`[profiling] kernel "${s}|${o}|${l}|${d}" ${E}${S}start time: ${y} ns, execution time: ${$-y} ns`)}Uo("GPU",`${d}::${g}::${b}`)}e.unmap(),this.pendingQueries.delete(e)}),Kr()}run(e,t,r,n,i,s){fn(e.name);let a=[];for(let x=0;x<t.length;++x){let A=t[x].data;if(A===0)continue;let C=this.gpuDataManager.get(A);if(!C)throw new Error(`no GPU data for input: ${A}`);a.push(C)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),f=r.length===0?o.map((x,A)=>A):r;if(f.length!==o.length)throw new Error(`Output size ${f.length} must be equal to ${o.length}.`);let p=[],g=[];for(let x=0;x<o.length;++x){if(!Number.isInteger(f[x])||f[x]<-3||f[x]>=s)throw new Error(`Invalid output index: ${f[x]}`);if(f[x]===-3)continue;let A=f[x]===-1,C=f[x]===-2,O=A||C?i(o[x].dataType,o[x].dims):n(f[x],o[x].dataType,o[x].dims);if(p.push(O),O.data===0)continue;let D=this.gpuDataManager.get(O.data);if(!D)throw new Error(`no GPU data for output: ${O.data}`);if(A&&this.temporaryData.push(D),C){let N=this.kernelPersistentData.get(this.currentKernelId);N||(N=[],this.kernelPersistentData.set(this.currentKernelId,N)),N.push(D)}g.push(D)}if(a.length!==t.length||g.length!==p.length){if(g.length===0)return Kr(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let b;if(d){let x=0,A=[];d.forEach(N=>{let T=typeof N.data=="number"?[N.data]:N.data;if(T.length===0)return;let W=N.type===10?2:4,Y,ae;N.type===10?(ae=T.length>4?16:T.length>2?8:T.length*W,Y=T.length>4?16:W*T.length):(ae=T.length<=2?T.length*W:16,Y=16),x=Math.ceil(x/ae)*ae,A.push(x);let X=N.type===10?8:4;x+=T.length>4?Math.ceil(T.length/X)*Y:T.length*W});let C=16;x=Math.ceil(x/C)*C;let O=new ArrayBuffer(x);d.forEach((N,T)=>{let W=A[T],Y=typeof N.data=="number"?[N.data]:N.data;if(N.type===6)new Int32Array(O,W,Y.length).set(Y);else if(N.type===12)new Uint32Array(O,W,Y.length).set(Y);else if(N.type===10)new Uint16Array(O,W,Y.length).set(Y);else if(N.type===1)new Float32Array(O,W,Y.length).set(Y);else throw new Error(`Unsupported uniform type: ${In(N.type)}`)});let D=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(D.buffer,0,O,0,x),this.gpuDataManager.release(D.id),b={offset:0,size:x,buffer:D.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),$=y[1]===1&&y[2]===1,E=Pg(e,t,$),S=this.programManager.getArtifact(E);if(S||(S=this.programManager.build(e,y),this.programManager.setArtifact(E,S),nt("info",()=>`[artifact] key: ${E}, programName: ${e.name}`)),d&&S.uniformVariablesInfo){if(d.length!==S.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${S.uniformVariablesInfo.length}, got ${d.length} in program "${S.programInfo.name}".`);for(let x=0;x<d.length;x++){let A=d[x],C=A.type,O=typeof A.data=="number"?1:A.data.length,[D,N]=S.uniformVariablesInfo[x];if(C!==D||O!==N)throw new Error(`Uniform variable ${x} mismatch: expect type ${D} with size ${N}, got type ${C} with size ${O} in program "${S.programInfo.name}".`)}}if(nt("info",()=>`[ProgramManager] run "${e.name}" (key=${E}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:S.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(S,a,g,y,b),Kr(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=T1.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,s=n.kernelName,a=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),nt("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),a=this.gpuDataManager.registerExternalBuffer(r,n,s);return i.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await gd(this,e,t);return rc(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){nt("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){nt("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){nt("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),s=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),A1={};ys(A1,{init:()=>O1});var vo,Ng,O1,X$=pe(()=>{"use strict";Pe(),Mn(),Ue(),r$(),vo=class z1{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(K.size(t)!==K.size(this.dims))throw new Error("Invalid new shape");return new z1(this.module,this.dataType,this.data,t)}},Ng=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,i=r/e.PTR_SIZE,s=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,s));let a=Number(e.getValue(n*i++,s));this.outputCount=Number(e.getValue(n*i++,s)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,s));let o=[];for(let l=0;l<a;l++){let d=Number(e.getValue(n*i++,s)),f=Number(e.getValue(n*i++,"*")),p=Number(e.getValue(n*i++,s)),g=[];for(let b=0;b<p;b++)g.push(Number(e.getValue(n*i++,s)));o.push(new vo(e,d,f,g))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(a=>typeof a=="number"?this.inputs[a]:a)??this.inputs,n=t?.outputs??[],i=(a,o,l)=>new vo(this.module,o,this.output(a,l),l),s=(a,o)=>{let l=Mi(a,o);if(!l)throw new Error(`Unsupported data type: ${a}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new vo(this.module,a,d,o)};return this.backend.run(e,r,n,i,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,i=n===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*n);this.module.setValue(s,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(s+n*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},O1=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(K$(),pa(E1)).WebGpuBackend,a=new s;await a.initialize(r,n),i("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,l,d,f=!1)=>{if(f)nt("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),a.memcpy(Number(o),Number(l));else{nt("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(l),p)}},async(o,l,d)=>{nt("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>a.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>a.releaseKernel(o),(o,l,d,f)=>{nt("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let p=new Ng(t,a,Number(l));return a.computeKernel(Number(o),p,f)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new Uy(r);i("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,l,d,f)=>s.ensureTensor(a,o,l,d,f),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!r.trace])}}}),Ug,pc,hc,qn,Lg,Xu,Go,mc,gc,Yu,yc,bc,vc,M1=pe(()=>{"use strict";Br(),Jx(),e$(),Pe(),Wi(),Zd(),My(),Ug=(e,t)=>{xt()._OrtInit(e,t)!==0&&ct("Can't initialize onnxruntime.")},pc=async e=>{Ug(e.wasm.numThreads,jo(e.logLevel))},hc=async(e,t)=>{xt().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:i}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let n=(X$(),pa(A1)).init;t==="webgpu"&&await n("webgpu",xt(),e,r),t==="webnn"&&await n("webnn",xt(),e)}},qn=new Map,Lg=e=>{let t=xt(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&ct("Can't get session input/output count.");let s=n===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+n,s))]}finally{t.stackRestore(r)}},Xu=(e,t)=>{let r=xt(),n=r.stackSave(),i=0;try{let s=r.PTR_SIZE,a=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&ct("Can't get session input/output metadata.");let o=Number(r.getValue(a,"*"));i=Number(r.getValue(a+s,"*"));let l=r.HEAP32[i/4];if(l===0)return[o,0];let d=r.HEAPU32[i/4+1],f=[];for(let p=0;p<d;p++){let g=Number(r.getValue(i+8+p*s,"*"));f.push(g!==0?r.UTF8ToString(g):Number(r.getValue(i+8+(p+d)*s,"*")))}return[o,l,f]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},Go=e=>{let t=xt(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},mc=async(e,t)=>{let r,n,i=xt();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=Go(e);let s=0,a=0,o=0,l=[],d=[],f=[];try{if([a,l]=await zy(t),t?.externalData&&i.mountExternalData){let C=[];for(let O of t.externalData){let D=typeof O=="string"?O:O.path,N=typeof O=="string"?O:O.data;C.push(ec(N).then(T=>{i.mountExternalData(D,T)}))}await Promise.all(C)}for(let C of t?.executionProviders??[])if((typeof C=="string"?C:C.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof C!="string"){let O=C,D=O?.context,N=O?.gpuDevice,T=O?.deviceType,W=O?.powerPreference;D?i.currentContext=D:N?i.currentContext=await i.webnnCreateMLContext(N):i.currentContext=await i.webnnCreateMLContext({deviceType:T,powerPreference:W})}else i.currentContext=await i.webnnCreateMLContext();break}s=await i._OrtCreateSession(r,n,a),i.webgpuOnCreateSession?.(s),s===0&&ct("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[p,g]=Lg(s),b=!!t?.enableGraphCapture,y=[],$=[],E=[],S=[],x=[];for(let C=0;C<p;C++){let[O,D,N]=Xu(s,C);O===0&&ct("Can't get an input name."),d.push(O);let T=i.UTF8ToString(O);y.push(T),E.push(D===0?{name:T,isTensor:!1}:{name:T,isTensor:!0,type:In(D),shape:N})}for(let C=0;C<g;C++){let[O,D,N]=Xu(s,C+p);O===0&&ct("Can't get an output name."),f.push(O);let T=i.UTF8ToString(O);$.push(T),S.push(D===0?{name:T,isTensor:!1}:{name:T,isTensor:!0,type:In(D),shape:N});{if(b&&t?.preferredOutputLocation===void 0){x.push("gpu-buffer");continue}let W=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[T]??"cpu",Y=i.webnnIsGraphOutput;if(W==="cpu"&&Y&&Y(s,T)){x.push("ml-tensor-cpu-output");continue}if(W!=="cpu"&&W!=="cpu-pinned"&&W!=="gpu-buffer"&&W!=="ml-tensor")throw new Error(`Not supported preferred output location: ${W}.`);if(b&&W!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${W}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);x.push(W)}}let A=null;return x.some(C=>C==="gpu-buffer"||C==="ml-tensor"||C==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(s),o===0&&ct("Can't create IO binding."),A={handle:o,outputPreferredLocations:x,outputPreferredLocationsEncoded:x.map(C=>C==="ml-tensor-cpu-output"?"ml-tensor":C).map(C=>md(C))}),qn.set(s,[s,d,f,A,b,!1]),[s,y,$,E,S]}catch(p){throw d.forEach(g=>i._OrtFree(g)),f.forEach(g=>i._OrtFree(g)),o!==0&&i._OrtReleaseBinding(o)!==0&&ct("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&ct("Can't release session."),p}finally{i._free(r),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&ct("Can't release session options."),l.forEach(p=>i._free(p)),i.unmountExternalData?.()}},gc=e=>{let t=xt(),r=qn.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,s,a,o]=r;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&ct("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&ct("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(l=>t._OrtFree(l)),s.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(n)!==0&&ct("Can't release session."),qn.delete(e)},Yu=async(e,t,r,n,i,s,a=!1)=>{if(!e){t.push(0);return}let o=xt(),l=o.PTR_SIZE,d=e[0],f=e[1],p=e[3],g=p,b,y;if(d==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let S=e[2].gpuBuffer;y=Mi(zi(d),f);{let x=o.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');b=x(n,s,S,y)}}else if(p==="ml-tensor"){let S=e[2].mlTensor;y=Mi(zi(d),f);let x=o.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');b=x(n,S,zi(d),f)}else{let S=e[2];if(Array.isArray(S)){y=l*S.length,b=o._malloc(y),r.push(b);for(let x=0;x<S.length;x++){if(typeof S[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);o.setValue(b+x*l,Wr(S[x],r),"*")}}else{let x=o.webnnIsGraphInput,A=o.webnnIsGraphOutput;if(d!=="string"&&x&&A){let C=o.UTF8ToString(i);if(x(n,C)||A(n,C)){let O=zi(d);y=Mi(O,f),g="ml-tensor";let D=o.webnnCreateTemporaryTensor,N=o.webnnUploadTensor;if(!D||!N)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let T=await D(n,O,f);N(T,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),b=T}else y=S.byteLength,b=o._malloc(y),r.push(b),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,y),b)}else y=S.byteLength,b=o._malloc(y),r.push(b),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,y),b)}}let $=o.stackSave(),E=o.stackAlloc(4*f.length);try{f.forEach((x,A)=>o.setValue(E+A*l,x,l===4?"i32":"i64"));let S=o._OrtCreateTensor(zi(d),b,y,E,f.length,md(g));S===0&&ct(`Can't create tensor for input/output. session=${n}, index=${s}.`),t.push(S)}finally{o.stackRestore($)}},yc=async(e,t,r,n,i,s)=>{let a=xt(),o=a.PTR_SIZE,l=qn.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],f=l[1],p=l[2],g=l[3],b=l[4],y=l[5],$=t.length,E=n.length,S=0,x=[],A=[],C=[],O=[],D=[],N=a.stackSave(),T=a.stackAlloc($*o),W=a.stackAlloc($*o),Y=a.stackAlloc(E*o),ae=a.stackAlloc(E*o);try{[S,x]=Oy(s),Ui("wasm prepareInputOutputTensor");for(let te=0;te<$;te++)await Yu(r[te],A,O,e,f[t[te]],t[te],b);for(let te=0;te<E;te++)await Yu(i[te],C,O,e,p[n[te]],$+n[te],b);Li("wasm prepareInputOutputTensor");for(let te=0;te<$;te++)a.setValue(T+te*o,A[te],"*"),a.setValue(W+te*o,f[t[te]],"*");for(let te=0;te<E;te++)a.setValue(Y+te*o,C[te],"*"),a.setValue(ae+te*o,p[n[te]],"*");if(g&&!y){let{handle:te,outputPreferredLocations:ce,outputPreferredLocationsEncoded:ue}=g;if(f.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${f.length}).`);Ui("wasm bindInputsOutputs");for(let Q=0;Q<$;Q++){let we=t[Q];await a._OrtBindInput(te,f[we],A[Q])!==0&&ct(`Can't bind input[${Q}] for session=${e}.`)}for(let Q=0;Q<E;Q++){let we=n[Q];i[Q]?.[3]?(D.push(C[Q]),a._OrtBindOutput(te,p[we],C[Q],0)!==0&&ct(`Can't bind pre-allocated output[${Q}] for session=${e}.`)):a._OrtBindOutput(te,p[we],0,ue[we])!==0&&ct(`Can't bind output[${Q}] to ${ce[Q]} for session=${e}.`)}Li("wasm bindInputsOutputs"),qn.set(e,[d,f,p,g,b,!0])}a.jsepOnRunStart?.(d),a.webnnOnRunStart?.(d);let X;g?X=await a._OrtRunWithBinding(d,g.handle,E,Y,S):X=await a._OrtRun(d,W,T,$,ae,E,Y,S),X!==0&&ct("failed to call OrtRun().");let le=[],q=[];Ui("wasm ProcessOutputTensor");for(let te=0;te<E;te++){let ce=Number(a.getValue(Y+te*o,"*"));if(ce===C[te]||D.includes(C[te])){le.push(i[te]),ce!==C[te]&&a._OrtReleaseTensor(ce)!==0&&ct("Can't release tensor.");continue}let ue=a.stackSave(),Q=a.stackAlloc(4*o),we=!1,Te,re=0;try{a._OrtGetTensorData(ce,Q,Q+o,Q+2*o,Q+3*o)!==0&&ct(`Can't access output tensor data on index ${te}.`);let xe=o===4?"i32":"i64",Se=Number(a.getValue(Q,xe));re=a.getValue(Q+o,"*");let be=a.getValue(Q+o*2,"*"),et=Number(a.getValue(Q+o*3,xe)),bt=[];for(let He=0;He<et;He++)bt.push(Number(a.getValue(be+He*o,xe)));a._OrtFree(be)!==0&&ct("Can't free memory for tensor dims.");let tt=bt.reduce((He,dt)=>He*dt,1);Te=In(Se);let kt=g?.outputPreferredLocations[n[te]];if(Te==="string"){if(kt==="gpu-buffer"||kt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let He=[];for(let dt=0;dt<tt;dt++){let M=a.getValue(re+dt*o,"*"),L=a.getValue(re+(dt+1)*o,"*"),H=dt===tt-1?void 0:L-M;He.push(a.UTF8ToString(M,H))}le.push([Te,bt,He,"cpu"])}else if(kt==="gpu-buffer"&&tt>0){let He=a.jsepGetBuffer;if(!He)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let dt=He(re),M=Mi(Se,tt);if(M===void 0||!Qd(Te))throw new Error(`Unsupported data type: ${Te}`);we=!0,le.push([Te,bt,{gpuBuffer:dt,download:a.jsepCreateDownloader(dt,M,Te),dispose:()=>{a._OrtReleaseTensor(ce)!==0&&ct("Can't release tensor.")}},"gpu-buffer"])}else if(kt==="ml-tensor"&&tt>0){let He=a.webnnEnsureTensor,dt=a.webnnIsGraphInputOutputTypeSupported;if(!He||!dt)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Mi(Se,tt)===void 0||!Jd(Te))throw new Error(`Unsupported data type: ${Te}`);if(!dt(e,Te,!1))throw new Error(`preferredLocation "ml-tensor" for ${Te} output is not supported by current WebNN Context.`);let M=await He(e,re,Se,bt,!1);we=!0,le.push([Te,bt,{mlTensor:M,download:a.webnnCreateMLTensorDownloader(re,Te),dispose:()=>{a.webnnReleaseTensorId(re),a._OrtReleaseTensor(ce)}},"ml-tensor"])}else if(kt==="ml-tensor-cpu-output"&&tt>0){let He=a.webnnCreateMLTensorDownloader(re,Te)(),dt=le.length;we=!0,q.push((async()=>{let M=[dt,await He];return a.webnnReleaseTensorId(re),a._OrtReleaseTensor(ce),M})()),le.push([Te,bt,[],"cpu"])}else{let He=ll(Te),dt=new He(tt);new Uint8Array(dt.buffer,dt.byteOffset,dt.byteLength).set(a.HEAPU8.subarray(re,re+dt.byteLength)),le.push([Te,bt,dt,"cpu"])}}finally{a.stackRestore(ue),Te==="string"&&re&&a._free(re),we||a._OrtReleaseTensor(ce)}}g&&!b&&(a._OrtClearBoundOutputs(g.handle)!==0&&ct("Can't clear bound outputs."),qn.set(e,[d,f,p,g,b,!1]));for(let[te,ce]of await Promise.all(q))le[te][2]=ce;return Li("wasm ProcessOutputTensor"),le}finally{a.webnnOnRunEnd?.(d),a.stackRestore(N),A.forEach(X=>a._OrtReleaseTensor(X)),C.forEach(X=>a._OrtReleaseTensor(X)),O.forEach(X=>a._free(X)),S!==0&&a._OrtReleaseRunOptions(S),x.forEach(X=>a._free(X))}},bc=e=>{let t=xt(),r=qn.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&ct("Can't get an profile file name."),t._OrtFree(i)},vc=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),Hn,Ir,ss,Fs,js,wo,Zu,_o,Ci,Ei,Fg,R1,B1,P1,D1,N1,U1,L1,F1=pe(()=>{"use strict";Br(),M1(),Wi(),Xd(),Hn=()=>!!_t.wasm.proxy&&typeof document<"u",ss=!1,Fs=!1,js=!1,_o=new Map,Ci=(e,t)=>{let r=_o.get(e);r?r.push(t):_o.set(e,[t])},Ei=()=>{if(ss||!Fs||js||!Ir)throw new Error("worker not ready")},Fg=e=>{switch(e.data.type){case"init-wasm":ss=!1,e.data.err?(js=!0,Zu[1](e.data.err)):(Fs=!0,Zu[0]()),wo&&(URL.revokeObjectURL(wo),wo=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=_o.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},R1=async()=>{if(!Fs){if(ss)throw new Error("multiple calls to 'initWasm()' detected.");if(js)throw new Error("previous call to 'initWasm()' failed.");if(ss=!0,Hn())return new Promise((e,t)=>{Ir?.terminate(),Iy().then(([r,n])=>{try{Ir=n,Ir.onerror=s=>t(s),Ir.onmessage=Fg,Zu=[e,t];let i={type:"init-wasm",in:_t};!i.in.wasm.wasmPaths&&(r||hd)&&(i.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-MDYUKy93.wasm",import.meta.url).href}),Ir.postMessage(i),wo=r}catch(i){t(i)}},t)});try{await Yd(_t.wasm),await pc(_t),Fs=!0}catch(e){throw js=!0,e}finally{ss=!1}}},B1=async e=>{if(Hn())return Ei(),new Promise((t,r)=>{Ci("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:_t}};Ir.postMessage(n)});await hc(_t,e)},P1=async e=>Hn()?(Ei(),new Promise((t,r)=>{Ci("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};Ir.postMessage(n,[e.buffer])})):Go(e),D1=async(e,t)=>{if(Hn()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Ei(),new Promise((r,n)=>{Ci("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),Ir.postMessage(i,s)})}else return mc(e,t)},N1=async e=>{if(Hn())return Ei(),new Promise((t,r)=>{Ci("release",[t,r]);let n={type:"release",in:e};Ir.postMessage(n)});gc(e)},U1=async(e,t,r,n,i,s)=>{if(Hn()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Ei(),new Promise((a,o)=>{Ci("run",[a,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:n,options:s}};Ir.postMessage(d,vc(l))})}else return yc(e,t,r,n,i,s)},L1=async e=>{if(Hn())return Ei(),new Promise((t,r)=>{Ci("end-profiling",[t,r]);let n={type:"end-profiling",in:e};Ir.postMessage(n)});bc(e)}}),Qu,jg,j1,Y$=pe(()=>{"use strict";Br(),F1(),Pe(),Kd(),My(),Qu=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},jg=e=>{switch(e[3]){case"cpu":return new qr(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Qd(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return qr.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!Jd(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return qr.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},j1=class{async fetchModelAndCopyToWasmMemory(e){return P1(await ec(e))}async loadModel(e,t){fn();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await D1(r,t),Kr()}async dispose(){return N1(this.sessionId)}async run(e,t,r){fn();let n=[],i=[];Object.entries(e).forEach(p=>{let g=p[0],b=p[1],y=this.inputNames.indexOf(g);if(y===-1)throw new Error(`invalid input '${g}'`);n.push(b),i.push(y)});let s=[],a=[];Object.entries(t).forEach(p=>{let g=p[0],b=p[1],y=this.outputNames.indexOf(g);if(y===-1)throw new Error(`invalid output '${g}'`);s.push(b),a.push(y)});let o=n.map((p,g)=>Qu(p,()=>`input "${this.inputNames[i[g]]}"`)),l=s.map((p,g)=>p?Qu(p,()=>`output "${this.outputNames[a[g]]}"`):null),d=await U1(this.sessionId,i,o,a,l,r),f={};for(let p=0;p<d.length;p++)f[this.outputNames[a[p]]]=s[p]??jg(d[p]);return Kr(),f}startProfiling(){}endProfiling(){L1(this.sessionId)}}}),V1={};ys(V1,{OnnxruntimeWebAssemblyBackend:()=>Ed,initializeFlags:()=>Cd,wasmBackend:()=>W1});var Cd,Ed,W1,Z$=pe(()=>{"use strict";Br(),F1(),Y$(),Cd=()=>{(typeof _t.wasm.initTimeout!="number"||_t.wasm.initTimeout<0)&&(_t.wasm.initTimeout=0);let e=_t.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),_t.wasm.simd=!1),typeof _t.wasm.proxy!="boolean"&&(_t.wasm.proxy=!1),typeof _t.wasm.trace!="boolean"&&(_t.wasm.trace=!1),typeof _t.wasm.numThreads!="number"||!Number.isInteger(_t.wasm.numThreads)||_t.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)_t.wasm.numThreads=1;else{let t=typeof navigator>"u"?Bx("node:os").cpus().length:navigator.hardwareConcurrency;_t.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ed=class{async init(e){Cd(),await R1(),await B1(e)}async createInferenceSessionHandler(e,t){let r=new j1;return await r.loadModel(e,t),r}},W1=new Ed});Br();Br();Br();var Q$="1.30.0";{let e=(Z$(),pa(V1)).wasmBackend;os("webgpu",e,5),os("webnn",e,5),os("cpu",e,10),os("wasm",e,10)}Object.defineProperty(_t.versions,"web",{value:Q$,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class J${session=null;fallbackSegmenter=null;isModelLoading=!1;backendUsed="wasm";constructor(){_t.wasm.numThreads=Math.min(navigator.hardwareConcurrency||4,4),_t.wasm.simd=!0}async initOnnxModel(t){if(this.session)return!0;this.isModelLoading=!0;try{console.log("[HdMattingEngine] 正在尝试以 WebGPU 加载高精抠图模型...");try{return this.session=await Lo.create(t,{executionProviders:["webgpu"],graphOptimizationLevel:"all"}),this.backendUsed="webgpu",console.log("[HdMattingEngine] WebGPU 抠图会话创建成功"),this.isModelLoading=!1,!0}catch(r){console.warn("[HdMattingEngine] WebGPU 后端不可用，平滑回退至 Wasm 运行时:",r)}return this.session=await Lo.create(t,{executionProviders:["wasm"],graphOptimizationLevel:"all"}),this.backendUsed="wasm",console.log("[HdMattingEngine] Wasm 抠图会话创建成功"),this.isModelLoading=!1,!0}catch(r){return this.isModelLoading=!1,console.warn("[HdMattingEngine] ONNX 模型加载失败，将启用内置高精度精细分割引擎:",r),!1}}async getFallbackSegmenter(){return this.fallbackSegmenter?this.fallbackSegmenter:new Promise((t,r)=>{const n=new sy.SelfieSegmentation({locateFile:i=>`/mediapipe/${i}`});n.setOptions({modelSelection:0,selfieMode:!1}),n.initialize().then(()=>{this.fallbackSegmenter=n,this.backendUsed="mediapipe-hd",t(n)}).catch(r)})}async segmentHighDefinition(t,r){r?.("准备图像数据",10);const n=t.width,i=t.height;if(!this.session&&!this.isModelLoading&&(r?.("加载 MODNet 发丝级 AI 模型...",15),await this.initOnnxModel("/models/modnet.onnx")),this.session)try{r?.("AI 神经网络深度推演中 (MODNet 发丝级)",30);const l=await this.runOnnxMatting(t,r);r?.("精修发丝与边缘羽化",80);const d=this.compositeCutout(t,l,n,i);return r?.("完成生成透明图层",100),await this.canvasToBlob(d)}catch(l){console.error("[HdMattingEngine] ONNX 推理失败，触发降级模式:",l)}r?.("启用本地 AI 发丝级抠图引擎",40);const s=await this.getFallbackSegmenter(),a=1024;let o;if(Math.max(n,i)>a){const l=a/Math.max(n,i);o=document.createElement("canvas"),o.width=Math.round(n*l),o.height=Math.round(i*l);const d=o.getContext("2d");d&&(d.imageSmoothingEnabled=!0,d.imageSmoothingQuality="high",d.drawImage(t,0,0,o.width,o.height))}else if(t instanceof HTMLCanvasElement)o=t;else{o=document.createElement("canvas"),o.width=n,o.height=i;const l=o.getContext("2d");l&&l.drawImage(t,0,0)}return new Promise((l,d)=>{let f=!1;const p=setTimeout(()=>{f||(f=!0,d(new Error("AI 抠图超时，请检查图片或重试")))},15e3);s.onResults(g=>{if(f)return;if(!g.segmentationMask){f=!0,clearTimeout(p),d(new Error("未检测到人像"));return}r?.("精确提取人像轮廓与边缘羽化",80);const b=this.applySegmentationMask(t,g.segmentationMask,n,i);r?.("导出透明 PNG",95),this.canvasToBlob(b).then(y=>{f||(f=!0,clearTimeout(p),l(y))}).catch(y=>{f||(f=!0,clearTimeout(p),d(y))})}),s.send({image:o}).catch(g=>{f||(f=!0,clearTimeout(p),d(g))})})}async runOnnxMatting(t,r){const n=t.width,i=t.height,s=512;let a,o;n>=i?(o=Math.round(s*(i/n)),o=Math.max(32,o-o%32),a=s):(a=Math.round(s*(n/i)),a=Math.max(32,a-a%32),o=s);const l=document.createElement("canvas");l.width=a,l.height=o;const d=l.getContext("2d",{willReadFrequently:!0});if(!d)throw new Error("无法创建推理 Canvas 上下文");d.drawImage(t,0,0,a,o);const f=d.getImageData(0,0,a,o),{data:p}=f,g=new Float32Array(3*a*o),b=a*o;for(let N=0;N<b;N++){const T=p[N*4],W=p[N*4+1],Y=p[N*4+2];g[N]=T/127.5-1,g[b+N]=W/127.5-1,g[b*2+N]=Y/127.5-1}const y=new qr("float32",g,[1,3,o,a]),$=this.session.inputNames[0];r?.("MODNet 发丝级 AI 深度推演中",55);const E=await this.session.run({[$]:y}),S=this.session.outputNames[0],A=E[S].data,C=document.createElement("canvas");C.width=a,C.height=o;const O=C.getContext("2d");if(!O)throw new Error("无法创建 Mask Canvas");const D=O.createImageData(a,o);for(let N=0;N<b;N++){let T=A[N];T<0&&(T=0),T>1&&(T=1);const W=Math.round(T*255);D.data[N*4]=255,D.data[N*4+1]=255,D.data[N*4+2]=255,D.data[N*4+3]=W}return O.putImageData(D,0,0),C}compositeCutout(t,r,n,i){const s=document.createElement("canvas");s.width=n,s.height=i;const a=s.getContext("2d");if(!a)throw new Error("无法创建复合图层");return a.drawImage(t,0,0,n,i),a.globalCompositeOperation="destination-in",a.drawImage(r,0,0,n,i),s}applySegmentationMask(t,r,n,i){const s=document.createElement("canvas");s.width=n,s.height=i;const a=s.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("无法创建源图 Canvas 上下文");a.drawImage(t,0,0,n,i);const o=document.createElement("canvas");o.width=n,o.height=i;const l=o.getContext("2d",{willReadFrequently:!0});if(!l)throw new Error("无法创建蒙版 Canvas 上下文");l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(r,0,0,n,i);const d=a.getImageData(0,0,n,i),f=l.getImageData(0,0,n,i),p=d.data,g=f.data,b=n*i;for(let y=0;y<b;y++){const $=y*4,E=(g[$]+g[$+1]+g[$+2])/3;let S=0;if(E<=80)S=0;else if(E>=170)S=1;else{const x=(E-80)/90;S=x*x*(3-2*x)}p[$+3]=Math.round(p[$+3]*S)}return a.putImageData(d,0,0),s}canvasToBlob(t){return new Promise((r,n)=>{t.toBlob(i=>{i?r(i):n(new Error("导出透明 Blob 失败"))},"image/png")})}getBackend(){return this.backendUsed}}const e3=new J$;function t3(e,t,r){return new Promise(n=>{const i=e.naturalWidth||e.width,s=e.naturalHeight||e.height,a=Math.max(r.widthPx/i,r.heightPx/s)*1.05,o={scale:a,x:(r.widthPx-i*a)/2,y:(r.heightPx-s*a)*.42,headTopY:0,chinY:s*.6,headCenterX:i/2,headHeight:s*.6,success:!1};try{let l;if(t instanceof HTMLCanvasElement)l=t;else if(l=document.createElement("canvas"),l.width=i,l.height=s,!l.getContext("2d")){n(o);return}const d=200,f=Math.round(s/i*d),p=document.createElement("canvas");p.width=d,p.height=f;const g=p.getContext("2d",{willReadFrequently:!0});if(!g){n(o);return}g.drawImage(e,0,0,d,f);const y=g.getImageData(0,0,d,f).data;let $=-1,E=d/2;for(let ue=0;ue<f;ue++){let Q=0,we=0;for(let Te=0;Te<d;Te++)y[(ue*d+Te)*4+3]>60&&(Q++,we+=Te);if(Q>8){$=ue,E=we/Q;break}}if($===-1||$>=f*.8){n(o);return}const S=[];for(let ue=$;ue<f;ue++){let Q=d,we=-1;for(let Te=0;Te<d;Te++)y[(ue*d+Te)*4+3]>60&&(Te<Q&&(Q=Te),Te>we&&(we=Te));we>=Q&&S.push({y:ue,width:we-Q,centerX:(Q+we)/2})}if(S.length<20){n(o);return}let x=0;for(let ue=0;ue<Math.min(S.length,Math.round(f*.4));ue++)S[ue].width>x&&(x=S[ue].width);let A=Math.round(S.length*.45);for(let ue=10;ue<S.length;ue++)if(S[ue].width>x*1.35){A=Math.max(ue-4,10);break}const C=S[A]?.y||$+(f-$)*.4,O=S[Math.round(A/2)]?.centerX||E,D=i/d,N=$*D,T=C*D,W=O*D,Y=Math.max(T-N,s*.25),ae=r.heightPx*.085,X=r.heightPx*.58,le=r.widthPx*.5,q=X/Y,te=le-W*q,ce=ae-N*q;n({scale:Math.round(q*1e3)/1e3,x:Math.round(te),y:Math.round(ce),headTopY:N,chinY:T,headCenterX:W,headHeight:Y,success:!0})}catch(l){console.warn("[FaceAlignment] 自动对齐异常，采用默认对齐:",l),n(o)}})}const r3={class:"relative w-full h-full flex flex-col bg-slate-950 text-slate-100 overflow-hidden select-none"},n3={class:"w-full z-20 flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md gap-2"},i3={class:"flex items-center space-x-2"},s3={class:"bg-slate-800 p-1 rounded-xl flex items-center border border-slate-700/80"},a3={class:"flex items-center space-x-2"},o3={class:"flex items-center space-x-1.5 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1"},l3=["value"],u3={key:0,class:"ml-1 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full"},d3=["disabled"],c3={class:"flex-1 w-full flex flex-col md:flex-row items-center justify-between overflow-hidden p-2 sm:p-4 gap-4"},f3={class:"relative flex-1 w-full h-full min-h-[360px] flex items-center justify-center bg-slate-900/60 rounded-2xl border border-slate-800/80 overflow-hidden shadow-inner"},p3={class:"w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400"},h3={key:1,class:"relative flex flex-col items-center justify-center w-full h-full"},m3={key:0,class:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 140",preserveAspectRatio:"none"},g3={class:"flex items-center space-x-4 mt-4"},y3=["disabled"],b3={key:0,class:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 140",preserveAspectRatio:"none"},v3={class:"flex items-center space-x-3 mt-3 text-xs text-slate-400"},w3={key:3,class:"absolute inset-0 z-40 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"},_3={class:"text-sm font-semibold text-slate-100"},x3={class:"w-48 bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden"},$3={class:"w-full md:w-80 lg:w-96 flex flex-col justify-between bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 overflow-y-auto max-h-[85vh]"},S3={class:"bg-slate-800/70 border border-slate-700/70 rounded-xl p-3 space-y-1"},k3={class:"flex items-center justify-between"},T3={class:"text-xs font-bold text-slate-200"},C3={class:"flex items-center justify-between text-xs text-slate-400"},E3={class:"text-[11px] text-slate-500"},I3={class:"space-y-2 bg-slate-800/60 border border-slate-700/80 rounded-xl p-3 shadow-md"},A3={class:"flex items-center justify-between"},O3={key:0,class:"text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-full flex items-center space-x-1 font-medium"},z3=["disabled"],M3={class:"text-[11px] text-slate-400 leading-snug"},R3={class:"space-y-2.5 bg-slate-800/40 border border-slate-800 rounded-xl p-3"},B3={class:"flex items-center justify-between"},P3={class:"text-[10px] text-blue-400 font-medium"},D3={class:"grid grid-cols-3 sm:grid-cols-4 gap-1.5"},N3=["onClick"],U3={class:"truncate w-full text-center text-[10px]"},L3={class:"pt-2 border-t border-slate-700/60 space-y-1.5"},F3={class:"flex items-center justify-between text-xs"},j3={class:"flex items-center space-x-1.5 text-slate-300"},V3={class:"text-[10px] text-slate-400 font-mono"},W3={class:"flex items-center space-x-2"},q3={class:"relative flex items-center justify-center cursor-pointer group",title:"点击调出系统调色盘/吸管"},H3={class:"flex items-center space-x-2 text-left"},G3={key:1,class:"space-y-3 bg-slate-800/40 border border-slate-800 rounded-xl p-3"},K3={class:"flex items-center space-x-2"},X3={class:"w-10 text-right text-xs text-slate-300 font-mono"},Y3={class:"flex items-center justify-between pt-1"},Z3={class:"flex items-center space-x-1 text-xs text-slate-400 cursor-pointer"},Q3={class:"space-y-2 pt-2 border-t border-slate-800"},J3={class:"grid grid-cols-2 gap-2"},eS=["disabled"],tS=["disabled"],rS={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"},nS={class:"bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm p-5 space-y-4"},iS={class:"space-y-3 text-xs"},sS={class:"grid grid-cols-2 gap-3"},aS={class:"text-[11px] text-slate-400"},oS={class:"flex justify-end space-x-2 pt-2"},lS=ya({__name:"PhotoStudio",props:{trayCount:{}},emits:["photo-added-to-tray","open-single-export","open-tray","open-packing","show-toast"],setup(e,{emit:t}){const r=e,n=t,i=We("upload"),s=We(Yl),a=We(Yl[0].id),o=We(Yl[0]),l=We($n),d=We($n[1]),f=We("#D9001B"),p=We("#D9001B"),g=We(!0),b=We(!1),y=We(!1),$=We(0),E=We(""),S=We(null),x=We(null),A=We(null),C=We(null),O=ta(()=>!!x.value),D=We(null),N=We(null),T=We(null),W=We(null),Y=We(!1),ae=We("user");let X=null,le=null;const q=new Ox;let te=null;const ce=We(100),ue=We(1),Q=ds({scale:1,x:0,y:0,rotation:0});let we=!1,Te=0,re=0,xe=0,Se=0;const be=We(!1),et=ds({name:"自定义规格",widthMm:35,heightMm:45}),bt=ta(()=>{const ne=hs(et.widthMm),j=hs(et.heightMm);return`${ne} × ${j} px`}),tt=ta(()=>{const ne=o.value,j=ne.widthPx/ne.heightPx;return{width:j<1?`calc(58vh * ${j})`:"78vw",height:j<1?"58vh":`calc(78vw / ${j})`}});ba(()=>{window.addEventListener("paste",Z),window.addEventListener("mousemove",Ot),window.addEventListener("mouseup",Ct),window.addEventListener("touchmove",cr),window.addEventListener("touchend",Ct)}),Fd(()=>{window.removeEventListener("paste",Z),window.removeEventListener("mousemove",Ot),window.removeEventListener("mouseup",Ct),window.removeEventListener("touchmove",cr),window.removeEventListener("touchend",Ct),fr()});async function kt(ne){i.value=ne,ne==="camera"?await Rn():(fr(),await Bi(),Bt())}function He(){if(a.value==="custom"){be.value=!0;return}const ne=s.value.find(j=>j.id===a.value);ne&&(o.value=ne,ye())}function dt(){const ne=Ix(et.name,et.widthMm,et.heightMm);s.value.push(ne),a.value=ne.id,o.value=ne,be.value=!1,Ie()}function M(){S.value?.click()}function L(ne){const j=ne.target;j.files&&j.files[0]&&ie(j.files[0]),j.value=""}function H(ne){b.value=!1,ne.dataTransfer?.files&&ne.dataTransfer.files[0]&&ie(ne.dataTransfer.files[0])}function Z(ne){if(!ne.clipboardData)return;const j=ne.clipboardData.items;for(let de=0;de<j.length;de++)if(j[de].type.startsWith("image/")){const Re=j[de].getAsFile();if(Re){ie(Re);break}}}async function ie(ne){A.value=ne,C.value=null,zt=null;const j=URL.createObjectURL(ne),de=new Image;de.onload=async()=>{x.value=de,i.value="upload";const Re=$n.find(Nt=>Nt.id==="bg_original")||$n[$n.length-1];d.value=Re,Ie(),await Bi(),Bt()},de.src=j}async function oe(ne=!1,j=!0){if(!(!x.value||y.value)){if(!ne&&C.value){if(j){const de=$n.find(Re=>Re.id==="bg_transparent")||$n[0];d.value=de,Bt()}return}y.value=!0,$.value=10,E.value="AI 正在提取人物轮廓并消除背景...";try{const de=document.createElement("canvas");de.width=x.value.naturalWidth,de.height=x.value.naturalHeight;const Re=de.getContext("2d");if(!Re)throw new Error("无法创建离屏图层");Re.drawImage(x.value,0,0);const Nt=await e3.segmentHighDefinition(de,(Vt,er)=>{E.value=Vt,$.value=er}),jt=URL.createObjectURL(Nt),Jt=new Image;if(await new Promise((Vt,er)=>{Jt.onload=Vt,Jt.onerror=er,Jt.src=jt}),zt=Jt,C.value=Nt,j){const Vt=$n.find(er=>er.id==="bg_transparent");Vt&&(d.value=Vt)}n("show-toast","已成功提取人物轮廓！原背景已彻底消除，请在下方选择所需底色")}catch(de){console.error("抠图失败:",de),n("show-toast","抠图提示: 请保持原图或重新调整")}finally{y.value=!1,await ye(),await Bi(),Bt()}}}async function ge(ne){d.value=ne,ne.value!=="original"&&!C.value&&x.value?await oe(!1,!1):Bt()}function he(){p.value=f.value.toUpperCase(),Ee(f.value)}function me(){let ne=p.value.trim();ne.startsWith("#")||(ne="#"+ne),/^#[0-9A-Fa-f]{6}$/.test(ne)?(f.value=ne,Ee(ne)):n("show-toast","请输入有效的十六进制颜色码，如 #D9001B")}function se(){me()}async function Ee(ne){const j=Ax(ne);await ge(j)}async function ye(){if(!x.value)return;const ne=C.value||A.value;if(ne)try{const j=await t3(x.value,ne,o.value);Q.scale=j.scale,Q.x=j.x,Q.y=j.y,Q.rotation=0,ue.value>0&&(ce.value=Math.round(j.scale/ue.value*100)),await Bi(),Bt(),j.success&&n("show-toast","已按国家证件照标准自动对齐（头顶留白约8.5%，人脸垂直居中）")}catch(j){console.warn("自动对齐计算失败，恢复默认居中:",j),Ie()}}function Ie(){if(!x.value)return;const ne=o.value,j=x.value.naturalWidth,de=x.value.naturalHeight,Re=ne.widthPx/j,Nt=ne.heightPx/de;ue.value=Math.max(Re,Nt),ce.value=100,Q.scale=ue.value*1.05,Q.rotation=0,Q.x=(ne.widthPx-j*Q.scale)/2,Q.y=(ne.heightPx-de*Q.scale)*.45,Bt()}function ze(ne){if(!x.value)return;o.value;const j=x.value.naturalWidth,de=x.value.naturalHeight,Re=Q.scale,Nt=ue.value*(ne/100);if(Nt<=0)return;const jt=Q.x+j*Re/2,Jt=Q.y+de*Re/2;Q.scale=Nt,Q.x=jt-j*Nt/2,Q.y=Jt-de*Nt/2,Bt()}function Ze(){ze(ce.value)}function Ve(){const ne=Math.min(300,ce.value+5);ce.value=ne,ze(ne)}function rt(){const ne=Math.max(15,ce.value-5);ce.value=ne,ze(ne)}function mt(ne){const j=ne.deltaY<0?5:-5,de=Math.min(300,Math.max(15,ce.value+j));ce.value=de,ze(de)}function vt(ne){Q.rotation=(Q.rotation+ne)%360,Bt()}function Qt(ne){we=!0,Te=ne.clientX,re=ne.clientY,xe=Q.x,Se=Q.y}function Ot(ne){if(!we)return;const j=ne.clientX-Te,de=ne.clientY-re;Q.x=xe+j,Q.y=Se+de,Bt()}function $r(ne){ne.touches.length===1&&(we=!0,Te=ne.touches[0].clientX,re=ne.touches[0].clientY,xe=Q.x,Se=Q.y)}function cr(ne){if(!we||ne.touches.length!==1)return;const j=ne.touches[0].clientX-Te,de=ne.touches[0].clientY-re;Q.x=xe+j,Q.y=Se+de,Bt()}function Ct(){we=!1}let zt=null;async function Bt(){if(!D.value||!x.value)return;const ne=D.value,j=o.value;ne.width=j.widthPx,ne.height=j.heightPx;const de=ne.getContext("2d");if(!de)return;const Re=ne.width,Nt=ne.height;if(de.clearRect(0,0,Re,Nt),d.value.value==="original"){Sr(de,x.value);return}if(d.value.value!=="transparent"){if(d.value.isGradient&&d.value.gradientStops){const jt=de.createLinearGradient(0,0,0,Nt);jt.addColorStop(0,d.value.gradientStops[0]),jt.addColorStop(1,d.value.gradientStops[1]),de.fillStyle=jt}else de.fillStyle=d.value.value;de.fillRect(0,0,Re,Nt)}if(zt)Sr(de,zt);else if(C.value){const jt=URL.createObjectURL(C.value),Jt=new Image;Jt.onload=()=>{zt=Jt,Sr(de,Jt)},Jt.src=jt}else Sr(de,x.value)}function Sr(ne,j){ne.save();const de=Q.x+j.naturalWidth*Q.scale/2,Re=Q.y+j.naturalHeight*Q.scale/2;ne.translate(de,Re),ne.rotate(Q.rotation*Math.PI/180),ne.drawImage(j,-(j.naturalWidth*Q.scale)/2,-(j.naturalHeight*Q.scale)/2,j.naturalWidth*Q.scale,j.naturalHeight*Q.scale),ne.restore()}async function Rn(){fr();try{const ne=await navigator.mediaDevices.getUserMedia({video:{facingMode:ae.value,width:{ideal:1920},height:{ideal:1080}},audio:!1});X=ne,T.value&&(T.value.srcObject=ne,await T.value.play(),Y.value=!0,await q.init(),q.setOnResult(j=>{te=j}),Hi())}catch(ne){console.warn("相机权限获取失败:",ne),Y.value=!1}}function fr(){X&&(X.getTracks().forEach(ne=>ne.stop()),X=null),le&&cancelAnimationFrame(le),Y.value=!1}async function pn(){ae.value=ae.value==="user"?"environment":"user",await Rn()}function Hi(){const ne=()=>{if(T.value&&W.value&&T.value.readyState>=2){const j=W.value,de=T.value;if((j.width!==o.value.widthPx||j.height!==o.value.heightPx)&&(j.width=o.value.widthPx,j.height=o.value.heightPx),q.sendFrame(de),te&&d.value.value!=="original")q.renderComposite(j,de,te,d.value,ae.value==="user");else{const Re=j.getContext("2d");Re&&(Re.save(),ae.value==="user"&&(Re.translate(j.width,0),Re.scale(-1,1)),Re.drawImage(de,0,0,j.width,j.height),Re.restore())}}le=requestAnimationFrame(ne)};le=requestAnimationFrame(ne)}async function Gi(){if(!T.value||y.value)return;const ne=T.value,j=document.createElement("canvas");j.width=ne.videoWidth||o.value.widthPx,j.height=ne.videoHeight||o.value.heightPx;const de=j.getContext("2d");de&&(ae.value==="user"&&(de.translate(j.width,0),de.scale(-1,1)),de.drawImage(ne,0,0,j.width,j.height),j.toBlob(async Re=>{Re&&(fr(),await ie(Re))},"image/jpeg",.98))}async function hn(){if(!D.value)throw new Error("画布未就绪");return new Promise((ne,j)=>{D.value.toBlob(de=>{de?ne({composedBlob:de,previewUrl:D.value.toDataURL("image/jpeg",.9)}):j(new Error("导出失败"))},"image/jpeg",.98)})}async function ii(){if(!(!A.value||!x.value))try{const{composedBlob:ne,previewUrl:j}=await hn(),de={id:`tray_${Date.now()}_${Math.random().toString(36).substring(2,6)}`,memberName:`成员 ${r.trayCount+1}`,originalBlob:A.value,cutoutBlob:C.value||A.value,previewUrl:j,spec:{...o.value},printCount:4,selectedBg:{...d.value},createdAt:Date.now()};n("photo-added-to-tray",de),n("show-toast",`已将 ${o.value.name} 证件照加入待印托盘`)}catch(ne){console.error("加入托盘失败:",ne)}}async function Pr(){if(!(!A.value||!x.value))try{const{composedBlob:ne,previewUrl:j}=await hn(),de={id:`export_${Date.now()}`,memberName:"证件照",originalBlob:A.value,cutoutBlob:C.value||A.value,previewUrl:j,spec:{...o.value},printCount:1,selectedBg:{...d.value},createdAt:Date.now()};n("open-single-export",de)}catch(ne){console.error("打开单张导出失败:",ne)}}return(ne,j)=>(Xe(),ot("div",r3,[U("header",n3,[U("div",i3,[U("div",s3,[U("button",{onClick:j[0]||(j[0]=de=>kt("upload")),class:Vr(["flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition",i.value==="upload"?"bg-blue-600 text-white shadow":"text-slate-400 hover:text-slate-200"])},[Fe(at($x),{class:"w-3.5 h-3.5"}),j[18]||(j[18]=U("span",null,"上传/拖入照片",-1))],2),U("button",{onClick:j[1]||(j[1]=de=>kt("camera")),class:Vr(["flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition",i.value==="camera"?"bg-blue-600 text-white shadow":"text-slate-400 hover:text-slate-200"])},[Fe(at(px),{class:"w-3.5 h-3.5"}),j[19]||(j[19]=U("span",null,"自拍拍摄",-1))],2)]),j[20]||(j[20]=U("div",{class:"hidden sm:flex items-center space-x-1 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2.5 py-1 rounded-full"},[U("span",{class:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),U("span",null,"100% 离线端侧处理 · 绝不上传服务器")],-1))]),U("div",a3,[U("div",o3,[j[22]||(j[22]=U("span",{class:"text-xs text-slate-400"},"规格:",-1)),mr(U("select",{"onUpdate:modelValue":j[2]||(j[2]=de=>a.value=de),onChange:He,class:"bg-transparent text-xs font-medium text-slate-100 focus:outline-none cursor-pointer"},[(Xe(!0),ot(Xt,null,fs(s.value,de=>(Xe(),ot("option",{key:de.id,value:de.id,class:"bg-slate-800 text-slate-100"},Ye(de.name)+" ("+Ye(de.widthMm)+"×"+Ye(de.heightMm)+"mm) ",9,l3))),128)),j[21]||(j[21]=U("option",{value:"custom",class:"bg-slate-800 text-slate-100"},"⚙️ 自定义尺寸...",-1))],544),[[ry,a.value]])]),U("button",{onClick:j[3]||(j[3]=de=>ne.$emit("open-tray")),class:"relative flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"},[Fe(at(iy),{class:"w-4 h-4 text-blue-400"}),j[23]||(j[23]=U("span",{class:"text-xs font-medium"},"托盘",-1)),e.trayCount>0?(Xe(),ot("span",u3,Ye(e.trayCount),1)):Ft("",!0)]),U("button",{onClick:j[4]||(j[4]=de=>ne.$emit("open-packing")),disabled:e.trayCount===0,class:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-semibold shadow transition"},[Fe(at(No),{class:"w-3.5 h-3.5"}),j[24]||(j[24]=U("span",{class:"hidden sm:inline"},"混排拼版",-1))],8,d3)])]),U("main",c3,[U("section",f3,[i.value==="upload"&&!O.value?(Xe(),ot("div",{key:0,class:"w-full max-w-md p-6 flex flex-col items-center justify-center text-center space-y-4 border-2 border-dashed border-slate-700 hover:border-blue-500 rounded-3xl bg-slate-900/40 transition cursor-pointer",onDragover:j[5]||(j[5]=io(de=>b.value=!0,["prevent"])),onDragleave:j[6]||(j[6]=io(de=>b.value=!1,["prevent"])),onDrop:io(H,["prevent"]),onClick:M},[U("input",{ref_key:"fileInputRef",ref:S,type:"file",accept:"image/*",class:"hidden",onChange:L},null,544),U("div",p3,[Fe(at(xx),{class:"w-8 h-8"})]),j[25]||(j[25]=ql('<div data-v-753f75e1><h3 class="text-base font-semibold text-slate-200" data-v-753f75e1>点击或将照片拖拽至此处</h3><p class="text-xs text-slate-400 mt-1" data-v-753f75e1>支持 JPG / PNG / WebP 格式，也可直接使用 <kbd class="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300" data-v-753f75e1>Ctrl + V</kbd> 粘贴</p></div><div class="text-[11px] text-slate-500 bg-slate-800/60 px-4 py-2 rounded-xl border border-slate-700/60 space-y-0.5 text-left w-full" data-v-753f75e1><p class="font-medium text-slate-400" data-v-753f75e1>💡 拍摄或选图建议：</p><p data-v-753f75e1>1. 建议正面免冠，双肩自然平齐</p><p data-v-753f75e1>2. 光线明亮均匀，头发不遮挡眉毛与双耳</p><p data-v-753f75e1>3. 任何背景均可，系统会自动进行发丝级抠图换底</p></div>',2))],32)):i.value==="camera"?(Xe(),ot("div",h3,[U("video",{ref_key:"cameraVideoRef",ref:T,playsinline:"",autoplay:"",muted:"",class:"hidden"},null,512),U("div",{class:"relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/80 transition-all duration-300",style:Xn({width:tt.value.width,height:tt.value.height,aspectRatio:`${o.value.widthPx} / ${o.value.heightPx}`})},[U("canvas",{ref_key:"cameraCanvasRef",ref:W,class:"w-full h-full object-cover"},null,512),g.value?(Xe(),ot("svg",m3,[...j[26]||(j[26]=[ql('<line x1="15" y1="12" x2="85" y2="12" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8" data-v-753f75e1></line><text x="50" y="9" font-size="3.5" fill="#93c5fd" text-anchor="middle" data-v-753f75e1>头顶留白区</text><ellipse cx="50" cy="46" rx="24" ry="30" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.85" data-v-753f75e1></ellipse><line x1="30" y1="44" x2="70" y2="44" stroke="#38bdf8" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.6" data-v-753f75e1></line><path d="M 12 128 Q 30 92, 50 94 Q 70 92, 88 128" fill="none" stroke="#60a5fa" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8" data-v-753f75e1></path><text x="50" y="100" font-size="3.5" fill="#93c5fd" text-anchor="middle" data-v-753f75e1>双肩对齐基准</text>',6)])])):Ft("",!0)],4),U("div",g3,[U("button",{onClick:pn,class:"p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition",title:"翻转镜头"},[Fe(at(yx),{class:"w-5 h-5"})]),U("button",{onClick:Gi,disabled:y.value,class:"p-2 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/30 active:scale-90 transition disabled:opacity-50"},[...j[27]||(j[27]=[U("div",{class:"w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-transparent"},[U("div",{class:"w-10 h-10 rounded-full bg-white"})],-1)])],8,y3)])])):(Xe(),ot("div",{key:2,class:"relative flex flex-col items-center justify-center w-full h-full p-2",onWheel:io(mt,["prevent"])},[U("div",{ref_key:"viewportContainerRef",ref:N,class:"relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/80 cursor-grab active:cursor-grabbing transition-all duration-200 canvas-checkerboard",style:Xn({width:tt.value.width,height:tt.value.height,aspectRatio:`${o.value.widthPx} / ${o.value.heightPx}`}),onMousedown:Qt,onTouchstart:$r},[U("canvas",{ref_key:"editorCanvasRef",ref:D,class:"w-full h-full block"},null,512),g.value?(Xe(),ot("svg",b3,[...j[28]||(j[28]=[ql('<line x1="15" y1="12" x2="85" y2="12" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8" data-v-753f75e1></line><text x="50" y="9" font-size="3.5" fill="#93c5fd" text-anchor="middle" data-v-753f75e1>头顶留白线</text><ellipse cx="50" cy="46" rx="24" ry="30" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.85" data-v-753f75e1></ellipse><line x1="30" y1="44" x2="70" y2="44" stroke="#38bdf8" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.6" data-v-753f75e1></line><path d="M 12 128 Q 30 92, 50 94 Q 70 92, 88 128" fill="none" stroke="#60a5fa" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8" data-v-753f75e1></path><text x="50" y="100" font-size="3.5" fill="#93c5fd" text-anchor="middle" data-v-753f75e1>双肩对准线</text><line x1="50" y1="5" x2="50" y2="135" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="2,4" opacity="0.4" data-v-753f75e1></line>',7)])])):Ft("",!0)],36),U("div",v3,[j[29]||(j[29]=U("span",null,"🖱️ 拖拽平移画面",-1)),j[30]||(j[30]=U("span",null,"·",-1)),U("span",null,"🔍 缩放大小: "+Ye(ce.value)+"%",1),U("button",{onClick:Ie,class:"text-blue-400 hover:text-blue-300 underline text-[11px] ml-1"}," 居中复位 ")])],32)),y.value?(Xe(),ot("div",w3,[Fe(at(pd),{class:"w-10 h-10 text-blue-500 animate-spin mb-3"}),U("h4",_3,Ye(E.value||"AI 正在进行发丝级抠图..."),1),j[31]||(j[31]=U("p",{class:"text-xs text-slate-400 mt-1"},"本地端侧加速中，完全无需联网",-1)),U("div",x3,[U("div",{class:"bg-blue-500 h-full transition-all duration-200",style:Xn({width:`${$.value}%`})},null,4)])])):Ft("",!0)]),U("aside",$3,[U("div",S3,[U("div",k3,[U("span",T3,Ye(o.value.name),1),j[32]||(j[32]=U("span",{class:"text-[11px] text-blue-400 font-mono"},"300 DPI",-1))]),U("div",C3,[U("span",null,"物理尺寸: "+Ye(o.value.widthMm)+" × "+Ye(o.value.heightMm)+" mm",1),U("span",null,"分辨率: "+Ye(o.value.widthPx)+" × "+Ye(o.value.heightPx)+" px",1)]),U("p",E3,Ye(o.value.description),1)]),U("div",I3,[U("div",A3,[j[34]||(j[34]=U("span",{class:"text-xs font-bold text-slate-100 flex items-center space-x-1.5"},[U("span",{class:"w-4 h-4 rounded-full bg-blue-600 text-[10px] text-white flex items-center justify-center font-bold"},"1"),U("span",null,"第一步：一键提取人物 (消除背景)")],-1)),C.value?(Xe(),ot("span",O3,[Fe(at(tp),{class:"w-3 h-3"}),j[33]||(j[33]=U("span",null,"人物已单独抠出",-1))])):Ft("",!0)]),U("button",{onClick:j[7]||(j[7]=de=>oe(!0,!0)),disabled:!O.value||y.value,class:Vr(["w-full py-2.5 px-3 rounded-xl flex items-center justify-center space-x-2 text-xs font-bold transition shadow-lg",C.value?"bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600":"bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-400 text-white shadow-blue-500/25 active:scale-98"])},[y.value?(Xe(),Ni(at(pd),{key:0,class:"w-4 h-4 animate-spin text-white"})):(Xe(),Ni(at(wx),{key:1,class:"w-4 h-4 text-amber-300"})),U("span",null,Ye(y.value?"AI 正在发丝级抠图中...":C.value?"重新一键抠图 (消除背景)":"🪄 一键智能抠图 (只提取人物·消除背景)"),1)],10,z3),U("p",M3,Ye(C.value?"✅ 原图背景已彻底消除！请在下方【第二步】为您抠出的人物随意换上所需的底色：":"点击后将智能识别人物轮廓，直接把原图杂乱背景消除为纯透明底。"),1)]),U("div",R3,[U("div",B3,[j[35]||(j[35]=U("span",{class:"text-xs font-bold text-slate-100 flex items-center space-x-1.5"},[U("span",{class:"w-4 h-4 rounded-full bg-indigo-600 text-[10px] text-white flex items-center justify-center font-bold"},"2"),U("span",null,"第二步：按需选择背景颜色")],-1)),U("span",P3," 当前: "+Ye(d.value.name),1)]),U("div",D3,[(Xe(!0),ot(Xt,null,fs(l.value,de=>(Xe(),ot("button",{key:de.id,onClick:Re=>ge(de),class:Vr(["flex flex-col items-center justify-center p-1.5 rounded-xl border transition-all text-[11px]",d.value.id===de.id?"border-blue-500 bg-blue-950/50 text-blue-300 font-semibold shadow":"border-slate-800 hover:border-slate-700 bg-slate-800/60 text-slate-400"])},[U("span",{class:Vr(["w-6 h-6 rounded-full mb-1 flex items-center justify-center shadow-sm",de.previewClass]),style:Xn(de.previewClass?{}:{backgroundColor:de.value})},[d.value.id===de.id?(Xe(),Ni(at(tp),{key:0,class:Vr(["w-3.5 h-3.5",de.id==="bg_white"?"text-slate-900":"text-white"])},null,8,["class"])):Ft("",!0)],6),U("span",U3,Ye(de.name),1)],10,N3))),128))]),U("div",L3,[U("div",F3,[U("div",j3,[Fe(at(rp),{class:"w-3.5 h-3.5 text-amber-400"}),j[36]||(j[36]=U("span",{class:"font-medium"},"任意自定义背景色:",-1))]),U("span",V3,Ye(f.value.toUpperCase()),1)]),U("div",W3,[U("label",q3,[mr(U("input",{type:"color","onUpdate:modelValue":j[8]||(j[8]=de=>f.value=de),onInput:he,class:"sr-only"},null,544),[[Tn,f.value]]),U("span",{class:"w-8 h-8 rounded-lg shadow-inner border-2 border-slate-600 group-hover:border-blue-400 transition flex items-center justify-center text-xs",style:Xn({backgroundColor:f.value})},[Fe(at(rp),{class:"w-4 h-4 text-white drop-shadow opacity-80"})],4)]),mr(U("input",{"onUpdate:modelValue":j[9]||(j[9]=de=>p.value=de),onKeyup:ax(me,["enter"]),placeholder:"#D9001B",class:"flex-1 px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-100 uppercase focus:outline-none focus:border-blue-500"},null,544),[[Tn,p.value]]),U("button",{onClick:se,class:"px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium shadow transition"}," 应用底色 ")])])]),O.value?(Xe(),ot("button",{key:0,onClick:ye,class:"w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20 transition active:scale-95 group border border-blue-400/30"},[U("div",H3,[Fe(at(_x),{class:"w-4 h-4 text-amber-300 animate-pulse"}),j[37]||(j[37]=U("div",null,[U("div",{class:"text-xs font-bold leading-tight flex items-center space-x-1"},[U("span",null,"AI 智能人脸国标对齐")]),U("div",{class:"text-[10px] text-blue-100 opacity-90"},"头顶留白约8.5%，居中黄金比例")],-1))]),j[38]||(j[38]=U("span",{class:"text-[11px] bg-white/20 group-hover:bg-white/30 px-2 py-0.5 rounded-full font-medium transition"},"一键对齐",-1))])):Ft("",!0),O.value?(Xe(),ot("div",G3,[U("div",{class:"flex items-center justify-between text-xs"},[j[39]||(j[39]=U("span",{class:"font-medium text-slate-300"},"缩放大小 (可放大/缩小)",-1)),U("button",{onClick:Ie,class:"text-[11px] text-blue-400 hover:text-blue-300 underline"}," 复位 100% ")]),U("div",K3,[U("button",{onClick:rt,class:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition",title:"缩小"},[Fe(at(Tx),{class:"w-3.5 h-3.5"})]),mr(U("input",{"onUpdate:modelValue":j[10]||(j[10]=de=>ce.value=de),type:"range",min:"15",max:"300",step:"1",onInput:Ze,class:"flex-1 accent-blue-500 cursor-pointer"},null,544),[[Tn,ce.value,void 0,{number:!0}]]),U("button",{onClick:Ve,class:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition",title:"放大"},[Fe(at(kx),{class:"w-3.5 h-3.5"})]),U("span",X3,Ye(ce.value)+"%",1)]),U("div",Y3,[U("button",{onClick:j[11]||(j[11]=de=>vt(-90)),class:"flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"},[Fe(at(bx),{class:"w-3.5 h-3.5"}),j[40]||(j[40]=U("span",null,"左转90°",-1))]),U("button",{onClick:j[12]||(j[12]=de=>vt(90)),class:"flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"},[Fe(at(vx),{class:"w-3.5 h-3.5"}),j[41]||(j[41]=U("span",null,"右转90°",-1))]),U("label",Z3,[mr(U("input",{type:"checkbox","onUpdate:modelValue":j[13]||(j[13]=de=>g.value=de),class:"rounded bg-slate-800 border-slate-700 text-blue-500"},null,512),[[fd,g.value]]),j[42]||(j[42]=U("span",null,"参考线",-1))])])])):Ft("",!0),U("div",Q3,[U("div",J3,[U("button",{onClick:Pr,disabled:!O.value||y.value,class:"w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-semibold border border-slate-700 transition"},[Fe(at(Wd),{class:"w-4 h-4 text-emerald-400"}),j[43]||(j[43]=U("span",null,"导出单张(压缩)",-1))],8,eS),U("button",{onClick:ii,disabled:!O.value||y.value,class:"w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition"},[Fe(at(mx),{class:"w-4 h-4"}),j[44]||(j[44]=U("span",null,"加入待印托盘",-1))],8,tS)]),O.value?(Xe(),ot("button",{key:0,onClick:M,class:"w-full py-1.5 text-center text-xs text-slate-400 hover:text-slate-200 transition"}," 换一张照片... ")):Ft("",!0)])])]),be.value?(Xe(),ot("div",rS,[U("div",nS,[j[48]||(j[48]=U("h3",{class:"text-sm font-bold text-slate-100"},"自定义证件照尺寸",-1)),U("div",iS,[U("div",null,[j[45]||(j[45]=U("label",{class:"block text-slate-400 mb-1"},"规格名称",-1)),mr(U("input",{"onUpdate:modelValue":j[14]||(j[14]=de=>et.name=de),placeholder:"例如：某报名考试特殊尺寸",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[Tn,et.name]])]),U("div",sS,[U("div",null,[j[46]||(j[46]=U("label",{class:"block text-slate-400 mb-1"},"宽度 (mm)",-1)),mr(U("input",{"onUpdate:modelValue":j[15]||(j[15]=de=>et.widthMm=de),type:"number",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[Tn,et.widthMm,void 0,{number:!0}]])]),U("div",null,[j[47]||(j[47]=U("label",{class:"block text-slate-400 mb-1"},"高度 (mm)",-1)),mr(U("input",{"onUpdate:modelValue":j[16]||(j[16]=de=>et.heightMm=de),type:"number",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[Tn,et.heightMm,void 0,{number:!0}]])])]),U("p",aS,"自动以 300 DPI 换算分辨率："+Ye(bt.value),1)]),U("div",oS,[U("button",{onClick:j[17]||(j[17]=de=>be.value=!1),class:"px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs"},"取消"),U("button",{onClick:dt,class:"px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"},"确认并应用")])])])):Ft("",!0)]))}}),uS=(e,t)=>{const r=e.__vccOpts||e;for(const[n,i]of t)r[n]=i;return r},dS=uS(lS,[["__scopeId","data-v-753f75e1"]]);function Ks(e,t=300){return new Promise((r,n)=>{const i=new FileReader;i.onload=()=>{try{const s=i.result,a=cS(s,t);r(new Blob([a],{type:"image/jpeg"}))}catch(s){n(s)}},i.onerror=()=>n(i.error),i.readAsArrayBuffer(e)})}function cS(e,t=300){const r=new Uint8Array(e);if(r.length<4||r[0]!==255||r[1]!==216)return console.warn("[dpiWriter] 不是有效的 JPEG 文件格式，原样返回"),e;const n=t>>8&255,i=t&255;if(r[2]===255&&r[3]===224&&r[6]===74&&r[7]===70&&r[8]===73&&r[9]===70&&r[10]===0&&r.length>=18){const l=new Uint8Array(r);return l[13]=1,l[14]=n,l[15]=i,l[16]=n,l[17]=i,l.buffer}const s=new Uint8Array([255,224,0,16,74,70,73,70,0,1,2,1,n,i,n,i,0,0]),a=new Uint8Array(r.length+s.length);return a.set(r.subarray(0,2),0),a.set(s,2),a.set(r.subarray(2),2+s.length),a.buffer}class Ko{static async generatePrintPages(t,r){const{paper:n,marginMm:i=5,gapMm:s=3,showCutLines:a=!0,showFootnote:o=!0}=r,l=n.widthPx,d=n.heightPx,f=hs(i),p=hs(s),g=[];for(const S of t){if(S.printCount<=0)continue;const x=await this.renderItemToCanvas(S);for(let A=0;A<S.printCount;A++)g.push({item:S,w:S.spec.widthPx,h:S.spec.heightPx,canvas:x})}if(g.length===0)return[];const b=[];let y=0;const $=l-f*2,E=d-f*2;for(;y<g.length;){const S=b.length+1,x=document.createElement("canvas");x.width=l,x.height=d;const A=x.getContext("2d");if(!A)break;A.fillStyle="#FFFFFF",A.fillRect(0,0,l,d);let C=f,O=f,D=0,N=0;for(;y<g.length;){const T=g[y],W=T.w,Y=T.h;if(C+W>l-f&&(C=f,O+=D+p,D=0),O+Y>d-f)break;A.drawImage(T.canvas,C,O,W,Y),a&&this.drawCropCrossMarks(A,C,O,W,Y,r.cutLineOffsetPx||4,r.cutLineLengthPx||12),o&&this.drawFootnote(A,T.item,C,O,W,Y),D=Math.max(D,Y),C+=W+p,y++,N++}if(N===0&&y<g.length){const T=g[y];A.drawImage(T.canvas,f,f,Math.min(T.w,$),Math.min(T.h,E)),y++,N++}b.push({pageIndex:S,canvas:x,placedCount:N})}return b}static async renderItemToCanvas(t){const r=document.createElement("canvas");r.width=t.spec.widthPx,r.height=t.spec.heightPx;const n=r.getContext("2d");if(!n)return r;const i=r.width,s=r.height;if(t.selectedBg.value==="original"){const b=await this.blobToImage(t.originalBlob),y=b.width/b.height,$=i/s;let E=i,S=s,x=0,A=0;return y>$?(S=s,E=s*y,x=(i-E)/2):(E=i,S=i/y,A=(s-S)/2),n.drawImage(b,x,A,E,S),r}if(t.selectedBg.value!=="transparent"){if(t.selectedBg.isGradient&&t.selectedBg.gradientStops){const b=n.createLinearGradient(0,0,0,s);b.addColorStop(0,t.selectedBg.gradientStops[0]),b.addColorStop(1,t.selectedBg.gradientStops[1]),n.fillStyle=b}else n.fillStyle=t.selectedBg.value||"#FFFFFF";n.fillRect(0,0,i,s)}else n.clearRect(0,0,i,s);const a=await this.blobToImage(t.cutoutBlob),o=a.width/a.height,l=i/s;let d=i,f=s,p=0,g=0;return o>l?(f=s,d=s*o,p=(i-d)/2):(d=i,f=i/o,g=(s-f)/2),n.drawImage(a,p,g,d,f),r}static drawCropCrossMarks(t,r,n,i,s,a=4,o=12){t.save(),t.strokeStyle="#CCCCCC",t.lineWidth=1;const l=[{cx:r,cy:n,dx:-1,dy:-1},{cx:r+i,cy:n,dx:1,dy:-1},{cx:r,cy:n+s,dx:-1,dy:1},{cx:r+i,cy:n+s,dx:1,dy:1}];for(const{cx:d,cy:f,dx:p,dy:g}of l)t.beginPath(),t.moveTo(d+p*a,f),t.lineTo(d+p*(a+o),f),t.stroke(),t.beginPath(),t.moveTo(d,f+g*a),t.lineTo(d,f+g*(a+o)),t.stroke();t.restore()}static drawFootnote(t,r,n,i,s,a){t.save(),t.fillStyle="#9CA3AF",t.font="10px sans-serif",t.textAlign="center",t.textBaseline="top";const o=`${r.memberName||"成员"} · ${r.spec.name}`;t.fillText(o,n+s/2,i+a+6),t.restore()}static async exportPageAs300DpiBlob(t){return new Promise((r,n)=>{t.toBlob(async i=>{if(!i){n(new Error("页面 Canvas 导出失败"));return}try{const s=await Ks(i,300);r(s)}catch(s){n(s)}},"image/jpeg",.98)})}static blobToImage(t){return new Promise((r,n)=>{const i=URL.createObjectURL(t),s=new Image;s.onload=()=>{URL.revokeObjectURL(i),r(s)},s.onerror=()=>{URL.revokeObjectURL(i),n(new Error("图片加载失败"))},s.src=i})}}const fS={class:"fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md flex flex-col justify-end sm:justify-center items-center sm:p-4"},pS={class:"w-full max-w-2xl bg-slate-900 border-t sm:border border-slate-800 rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"},hS={class:"flex items-center justify-between px-5 py-4 border-b border-slate-800"},mS={class:"flex items-center space-x-2"},gS={class:"text-base font-bold text-slate-100"},yS={class:"flex items-center space-x-2"},bS={class:"flex-1 overflow-y-auto p-4 space-y-3"},vS={key:0,class:"py-12 flex flex-col items-center justify-center text-slate-500 space-y-2"},wS={class:"relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-950 border border-slate-700"},_S=["src"],xS={class:"absolute bottom-0 inset-x-0 bg-black/60 text-[9px] text-center text-slate-300 py-0.5"},$S={class:"flex-1 min-w-0 mx-3 space-y-1.5"},SS={class:"flex items-center space-x-2"},kS=["onUpdate:modelValue"],TS={class:"text-xs text-slate-400"},CS={class:"flex items-center space-x-1.5 pt-0.5"},ES=["onClick","title"],IS={class:"flex flex-col items-end space-y-2"},AS={class:"flex items-center space-x-1 bg-slate-900 rounded-lg p-1 border border-slate-700"},OS=["onClick"],zS={class:"w-7 text-center text-xs font-semibold text-slate-200"},MS=["onClick"],RS={class:"flex items-center space-x-2 text-xs"},BS=["onClick"],PS=["onClick"],DS={class:"p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between"},NS={class:"text-sm font-bold text-blue-400"},US={class:"flex items-center space-x-3"},LS=["disabled"],FS=ya({__name:"PhotoTray",props:{items:{}},emits:["close","remove-item","clear-all","export-single","open-packing","update-item"],setup(e,{emit:t}){const r=e,n=t,i=$n,s=ta(()=>r.items.reduce((d,f)=>d+f.printCount,0));function a(d){d.printCount++,n("update-item",d)}function o(d){d.printCount>1&&(d.printCount--,n("update-item",d))}async function l(d,f){d.selectedBg=f;const p=await Ko.renderItemToCanvas(d);d.previewUrl=p.toDataURL("image/jpeg",.9),n("update-item",d)}return(d,f)=>(Xe(),ot("div",fS,[U("div",pS,[U("div",hS,[U("div",mS,[Fe(at(iy),{class:"w-5 h-5 text-blue-400"}),U("h2",gS,"待印照片托盘 ("+Ye(e.items.length)+")",1)]),U("div",yS,[e.items.length>0?(Xe(),ot("button",{key:0,onClick:f[0]||(f[0]=p=>d.$emit("clear-all")),class:"text-xs text-rose-400 hover:text-rose-300 px-2 py-1 transition"}," 清空托盘 ")):Ft("",!0),U("button",{onClick:f[1]||(f[1]=p=>d.$emit("close")),class:"p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"},[Fe(at(qd),{class:"w-5 h-5"})])])]),U("div",bS,[e.items.length===0?(Xe(),ot("div",vS,[Fe(at(Sx),{class:"w-10 h-10 stroke-[1.5]"}),f[4]||(f[4]=U("p",{class:"text-sm"},"托盘暂无照片，请先拍摄或上传照片",-1))])):Ft("",!0),(Xe(!0),ot(Xt,null,fs(e.items,(p,g)=>(Xe(),ot("div",{key:p.id,class:"flex items-center justify-between bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 hover:border-slate-600 transition"},[U("div",wS,[U("img",{src:p.previewUrl,class:"w-full h-full object-cover"},null,8,_S),U("span",xS,Ye(p.spec.widthMm)+"×"+Ye(p.spec.heightMm),1)]),U("div",$S,[U("div",SS,[mr(U("input",{"onUpdate:modelValue":b=>p.memberName=b,placeholder:"成员姓名",class:"bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-100 w-24 focus:ring-1 focus:ring-blue-500 focus:outline-none"},null,8,kS),[[Tn,p.memberName]]),U("span",TS,Ye(p.spec.name),1)]),U("div",CS,[(Xe(!0),ot(Xt,null,fs(at(i),b=>(Xe(),ot("button",{key:b.id,onClick:y=>l(p,b),class:Vr(["w-4 h-4 rounded-full border border-slate-600 transition-transform",[b.previewClass,p.selectedBg.id===b.id?"ring-2 ring-blue-400 scale-110":""]]),title:b.name},null,10,ES))),128))])]),U("div",IS,[U("div",AS,[U("button",{onClick:b=>o(p),class:"w-6 h-6 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"},[Fe(at(hx),{class:"w-3.5 h-3.5"})],8,OS),U("span",zS,Ye(p.printCount),1),U("button",{onClick:b=>a(p),class:"w-6 h-6 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"},[Fe(at(gx),{class:"w-3.5 h-3.5"})],8,MS)]),U("div",RS,[U("button",{onClick:b=>d.$emit("export-single",p),class:"text-blue-400 hover:text-blue-300"}," 单张导出 ",8,BS),U("button",{onClick:b=>d.$emit("remove-item",p.id),class:"text-rose-400 hover:text-rose-300"}," 删除 ",8,PS)])])]))),128))]),U("div",DS,[U("div",null,[f[5]||(f[5]=U("span",{class:"text-xs text-slate-400"},"总待打印张数: ",-1)),U("span",NS,Ye(s.value)+" 张",1)]),U("div",US,[U("button",{onClick:f[2]||(f[2]=p=>d.$emit("close")),class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"}," 继续拍照 "),U("button",{onClick:f[3]||(f[3]=p=>d.$emit("open-packing")),disabled:s.value===0,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5"},[Fe(at(No),{class:"w-4 h-4"}),f[6]||(f[6]=U("span",null,"智能混排拼版",-1))],8,LS)])])])]))}});function xo(e,t,r){return new Promise((n,i)=>{e.toBlob(s=>{s?n(s):i(new Error("Canvas 转 Blob 失败"))},t,r)})}async function jS(e,t){const{targetKb:r,toleranceKb:n=3,maxIterations:i=6,minQuality:s=.1,maxQuality:a=.98,autoScaleIfExceeded:o=!0,dpi:l=300}=t;let d=e,f=e.width,p=e.height,g=s,b=a,y=null,$=a,E=1/0,S=0;const x=await xo(d,"image/jpeg",b),A=await Ks(x,l),C=A.size/1024;if(C<=r)return{blob:A,sizeKb:Math.round(C*10)/10,quality:b,iterations:1,width:f,height:p};for(let O=0;O<i;O++){S++;const D=(g+b)/2,N=await xo(d,"image/jpeg",D),T=await Ks(N,l),W=T.size/1024;if(W<=r){if(y=T,$=D,E=W,r-W<=n)break;g=D}else b=D}if(!y&&o){let O=.9;for(let D=0;D<3;D++){const N=document.createElement("canvas");N.width=Math.round(f*O),N.height=Math.round(p*O);const T=N.getContext("2d");if(T){T.imageSmoothingEnabled=!0,T.imageSmoothingQuality="high",T.drawImage(e,0,0,N.width,N.height);const W=await xo(N,"image/jpeg",.5),Y=await Ks(W,l),ae=Y.size/1024;if(ae<=r)return{blob:Y,sizeKb:Math.round(ae*10)/10,quality:.5,iterations:S+D+1,width:N.width,height:N.height}}O-=.15}}if(!y){const O=await xo(d,"image/jpeg",s);y=await Ks(O,l),E=y.size/1024,$=s}return{blob:y,sizeKb:Math.round(E*10)/10,quality:Math.round($*100)/100,iterations:S,width:f,height:p}}const VS={class:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"},WS={class:"bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden flex flex-col shadow-2xl"},qS={class:"flex items-center justify-between px-5 py-3.5 border-b border-slate-800"},HS={class:"p-5 space-y-4 overflow-y-auto max-h-[75vh]"},GS={class:"flex justify-center bg-slate-950 p-4 rounded-xl border border-slate-800 relative"},KS=["src"],XS={class:"grid grid-cols-3 gap-2 text-center text-xs"},YS={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},ZS={class:"font-semibold text-slate-200"},QS={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},JS={class:"font-semibold text-slate-200"},ek={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},tk={class:"font-semibold text-emerald-400"},rk={class:"bg-slate-800/40 p-3.5 rounded-xl border border-slate-800 space-y-3"},nk={class:"flex items-center justify-between"},ik={class:"text-xs text-blue-400 font-mono font-medium"},sk={class:"flex items-center space-x-2"},ak=["onClick"],ok={key:0,class:"text-[11px] text-slate-400 flex items-center justify-between pt-1"},lk={class:"space-y-2"},uk={class:"flex items-center justify-between text-xs text-slate-400"},dk={class:"p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-end space-x-3"},ck=["disabled"],fk=ya({__name:"ExportModal",props:{item:{}},emits:["close"],setup(e,{emit:t}){const r=e,n=We(50),i=We(100),s=We(!1),a=We(0),o=We(null),l=We("");let d=null;ba(()=>{p()});function f(b){n.value=b,p()}async function p(){s.value=!0;try{const b=await Ko.renderItemToCanvas(r.item);let y=b;if(i.value!==100){const E=document.createElement("canvas");E.width=b.width,E.height=b.height;const S=E.getContext("2d");S&&(S.filter=`brightness(${i.value}%)`,S.drawImage(b,0,0),y=E)}const $=await jS(y,{targetKb:n.value,toleranceKb:2,maxIterations:6,dpi:300});o.value=$,a.value=$.sizeKb,d=$.blob,l.value&&URL.revokeObjectURL(l.value),l.value=URL.createObjectURL($.blob)}catch(b){console.error("二分压缩错误:",b)}finally{s.value=!1}}function g(){if(!d)return;const b=URL.createObjectURL(d),y=document.createElement("a");y.href=b;const $=`${r.item.memberName||"证件照"}_${r.item.spec.name}_300DPI_${a.value}KB.jpg`;y.download=$,document.body.appendChild(y),y.click(),document.body.removeChild(y),URL.revokeObjectURL(b)}return(b,y)=>(Xe(),ot("div",VS,[U("div",WS,[U("div",qS,[y[4]||(y[4]=U("h3",{class:"text-sm font-bold text-slate-100 flex items-center space-x-2"},[U("span",null,"单张证件照导出与合规压缩")],-1)),U("button",{onClick:y[0]||(y[0]=$=>b.$emit("close")),class:"text-slate-400 hover:text-white p-1"},[Fe(at(qd),{class:"w-5 h-5"})])]),U("div",HS,[U("div",GS,[U("img",{src:l.value||e.item.previewUrl,class:"max-h-56 object-contain rounded shadow-lg border border-slate-700"},null,8,KS),y[5]||(y[5]=U("div",{class:"absolute bottom-6 right-6 bg-slate-900/90 border border-slate-700 px-2 py-1 rounded text-[11px] text-blue-400 font-mono"}," 300 DPI 物理打印标记已注入 ",-1))]),U("div",XS,[U("div",YS,[y[6]||(y[6]=U("span",{class:"block text-slate-400 text-[10px]"},"物理尺寸",-1)),U("span",ZS,Ye(e.item.spec.widthMm)+" × "+Ye(e.item.spec.heightMm)+" mm",1)]),U("div",QS,[y[7]||(y[7]=U("span",{class:"block text-slate-400 text-[10px]"},"像素分辨率",-1)),U("span",JS,Ye(e.item.spec.widthPx)+" × "+Ye(e.item.spec.heightPx)+" px",1)]),U("div",ek,[y[8]||(y[8]=U("span",{class:"block text-slate-400 text-[10px]"},"实际体积",-1)),U("span",tk,Ye(a.value?`${a.value} KB`:"计算中..."),1)])]),U("div",rk,[U("div",nk,[y[9]||(y[9]=U("label",{class:"text-xs font-semibold text-slate-300"},"目标文件大小限制 (KB)",-1)),U("span",ik,"≤ "+Ye(n.value)+" KB",1)]),U("div",sk,[(Xe(),ot(Xt,null,fs([20,30,50,100,200],$=>U("button",{key:$,onClick:E=>f($),class:Vr(["px-2.5 py-1 rounded-lg text-xs font-medium transition",n.value===$?"bg-blue-600 text-white":"bg-slate-800 text-slate-400 hover:text-slate-200"])},Ye($)+"K ",11,ak)),64))]),mr(U("input",{"onUpdate:modelValue":y[1]||(y[1]=$=>n.value=$),type:"range",min:"10",max:"300",step:"5",onChange:p,class:"w-full accent-blue-500 cursor-pointer"},null,544),[[Tn,n.value,void 0,{number:!0}]]),o.value?(Xe(),ot("div",ok,[U("span",null,"二分逼近质量: "+Ye(Math.round(o.value.quality*100))+"%",1),U("span",null,"迭代收敛: "+Ye(o.value.iterations)+" 次",1)])):Ft("",!0)]),U("div",lk,[U("div",uk,[y[10]||(y[10]=U("span",null,"画面亮度",-1)),U("span",null,Ye(i.value)+"%",1)]),mr(U("input",{"onUpdate:modelValue":y[2]||(y[2]=$=>i.value=$),type:"range",min:"80",max:"120",onChange:p,class:"w-full accent-blue-500 cursor-pointer"},null,544),[[Tn,i.value,void 0,{number:!0}]])])]),U("div",dk,[U("button",{onClick:y[3]||(y[3]=$=>b.$emit("close")),class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"}," 取消 "),U("button",{onClick:g,disabled:s.value,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5 disabled:opacity-50"},[Fe(at(Wd),{class:"w-4 h-4"}),U("span",null,Ye(s.value?"压缩计算中...":"下载无损 300 DPI 照"),1)],8,ck)])])]))}}),pk={class:"fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 overflow-hidden"},hk={class:"w-full flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3 shadow-lg"},mk={class:"flex items-center space-x-3"},gk={class:"flex items-center space-x-3"},yk=["value"],bk={class:"flex-1 w-full my-3 flex items-center justify-center overflow-auto p-2"},vk={key:0,class:"flex flex-col items-center justify-center text-slate-400 space-y-2"},wk={key:1,class:"relative flex flex-col items-center max-h-full max-w-full"},_k={class:"bg-white rounded-lg shadow-2xl p-1 border-2 border-slate-700 overflow-hidden flex items-center justify-center"},xk={key:0,class:"flex items-center space-x-3 mt-3 bg-slate-900/90 px-3 py-1.5 rounded-full border border-slate-800"},$k=["disabled"],Sk={class:"text-xs font-medium text-slate-400"},kk=["disabled"],Tk={class:"w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"},Ck={class:"flex items-center space-x-4 text-xs text-slate-300"},Ek={class:"flex items-center space-x-1.5 cursor-pointer"},Ik={class:"flex items-center space-x-1.5 cursor-pointer"},Ak={class:"flex items-center space-x-3"},Ok=ya({__name:"PrintLayoutModal",props:{items:{}},emits:["close"],setup(e,{emit:t}){const r=e,n=We(ao),i=We(ao[0].id),s=ds({paper:ao[0],marginMm:4,gapMm:3,showCutLines:!0,showFootnote:!0,cutLineOffsetPx:4,cutLineLengthPx:14}),a=We(!1),o=We([]),l=We(0),d=We(null);ba(()=>{f()});async function f(){const E=n.value.find(S=>S.id===i.value)||ao[0];s.paper=E,a.value=!0;try{o.value=await Ko.generatePrintPages(r.items,s),l.value=0,await Bi(),p()}catch(S){console.error("混排拼版错误:",S)}finally{a.value=!1}}function p(){if(o.value.length===0||!d.value)return;const E=o.value[l.value],S=d.value;S.width=E.canvas.width,S.height=E.canvas.height;const x=S.getContext("2d");x&&x.drawImage(E.canvas,0,0)}function g(){l.value>0&&(l.value--,p())}function b(){l.value<o.value.length-1&&(l.value++,p())}async function y(){if(o.value.length===0)return;const E=o.value[l.value],S=await Ko.exportPageAs300DpiBlob(E.canvas),x=URL.createObjectURL(S),A=document.createElement("a");A.href=x,A.download=`证件照混排打印_${s.paper.name}_第${l.value+1}页_300DPI.jpg`,document.body.appendChild(A),A.click(),document.body.removeChild(A),URL.revokeObjectURL(x)}function $(){if(o.value.length===0)return;const S=o.value[l.value].canvas.toDataURL("image/jpeg",1),x=window.open("","_blank");if(!x){alert("请允许弹出窗口以调用原生打印");return}x.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>打印证件照拼版</title>
        <style>
          @page {
            size: ${s.paper.widthMm}mm ${s.paper.heightMm}mm;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          img {
            width: ${s.paper.widthMm}mm;
            height: ${s.paper.heightMm}mm;
            display: block;
          }
        </style>
      </head>
      <body>
        <img src="${S}" onload="window.print();window.close();" />
      </body>
    </html>
  `),x.document.close()}return(E,S)=>(Xe(),ot("div",pk,[U("header",hk,[U("div",mk,[Fe(at(No),{class:"w-5 h-5 text-blue-400"}),S[4]||(S[4]=U("h2",{class:"text-sm sm:text-base font-bold text-slate-100"},"智能多人混排拼版工作台",-1))]),U("div",gk,[mr(U("select",{"onUpdate:modelValue":S[0]||(S[0]=x=>i.value=x),onChange:f,class:"bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"},[(Xe(!0),ot(Xt,null,fs(n.value,x=>(Xe(),ot("option",{key:x.id,value:x.id},Ye(x.name),9,yk))),128))],544),[[ry,i.value]]),U("button",{onClick:S[1]||(S[1]=x=>E.$emit("close")),class:"p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"},[Fe(at(qd),{class:"w-5 h-5"})])])]),U("main",bk,[a.value?(Xe(),ot("div",vk,[Fe(at(pd),{class:"w-8 h-8 animate-spin text-blue-500"}),S[5]||(S[5]=U("span",{class:"text-xs"},"正在计算最优拼版装箱...",-1))])):o.value.length>0?(Xe(),ot("div",wk,[U("div",_k,[U("canvas",{ref_key:"displayCanvasRef",ref:d,class:"max-h-[60vh] max-w-[85vw] object-contain shadow-inner"},null,512)]),o.value.length>1?(Xe(),ot("div",xk,[U("button",{onClick:g,disabled:l.value===0,class:"px-2 py-0.5 rounded text-xs text-slate-300 disabled:opacity-30 hover:bg-slate-800"}," 上一页 ",8,$k),U("span",Sk," 第 "+Ye(l.value+1)+" / "+Ye(o.value.length)+" 页 ",1),U("button",{onClick:b,disabled:l.value===o.value.length-1,class:"px-2 py-0.5 rounded text-xs text-slate-300 disabled:opacity-30 hover:bg-slate-800"}," 下一页 ",8,kk)])):Ft("",!0)])):Ft("",!0)]),U("footer",Tk,[U("div",Ck,[U("label",Ek,[mr(U("input",{type:"checkbox","onUpdate:modelValue":S[2]||(S[2]=x=>s.showCutLines=x),onChange:f,class:"rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0"},null,544),[[fd,s.showCutLines]]),S[6]||(S[6]=U("span",null,"浅灰十字裁切线 (#CCCCCC)",-1))]),U("label",Ik,[mr(U("input",{type:"checkbox","onUpdate:modelValue":S[3]||(S[3]=x=>s.showFootnote=x),onChange:f,class:"rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0"},null,544),[[fd,s.showFootnote]]),S[7]||(S[7]=U("span",null,"姓名/规格微型脚标",-1))])]),U("div",Ak,[U("button",{onClick:$,class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition flex items-center space-x-1.5"},[Fe(at(No),{class:"w-4 h-4"}),S[8]||(S[8]=U("span",null,"系统原生打印",-1))]),U("button",{onClick:y,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5"},[Fe(at(Wd),{class:"w-4 h-4"}),U("span",null,"下载 300 DPI 冲印原图 (第 "+Ye(l.value+1)+" 页)",1)])])])]))}}),zk={class:"w-full h-screen bg-slate-950 flex flex-col overflow-hidden"},Mk={key:0,class:"fixed top-14 inset-x-0 mx-auto w-fit z-50 bg-emerald-600/90 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-xl backdrop-blur-md flex items-center space-x-2"},Rk=ya({__name:"App",setup(e){const t=We([]),r=We(!1),n=We(!1),i=We(null),s=We("");let a=null;function o(y){s.value=y,a&&clearTimeout(a),a=setTimeout(()=>{s.value=""},2500)}function l(y){t.value.push(y),o(`已成功加入托盘：${y.spec.name} (${y.printCount}张)`)}function d(y){i.value=y}function f(y){t.value=t.value.filter($=>$.id!==y)}function p(){t.value=[]}function g(){r.value=!1,n.value=!0}function b(y){const $=t.value.findIndex(E=>E.id===y.id);$!==-1&&(t.value[$]={...y})}return(y,$)=>(Xe(),ot("div",zk,[Fe(dS,{"tray-count":t.value.length,onPhotoAddedToTray:l,onOpenSingleExport:d,onOpenTray:$[0]||($[0]=E=>r.value=!0),onOpenPacking:$[1]||($[1]=E=>n.value=!0),onShowToast:o},null,8,["tray-count"]),r.value?(Xe(),Ni(FS,{key:0,items:t.value,onClose:$[2]||($[2]=E=>r.value=!1),onRemoveItem:f,onClearAll:p,onExportSingle:d,onOpenPacking:g,onUpdateItem:b},null,8,["items"])):Ft("",!0),i.value?(Xe(),Ni(fk,{key:1,item:i.value,onClose:$[3]||($[3]=E=>i.value=null)},null,8,["item"])):Ft("",!0),n.value?(Xe(),Ni(Ok,{key:2,items:t.value,onClose:$[4]||($[4]=E=>n.value=!1)},null,8,["items"])):Ft("",!0),Fe(z2,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform translate-y-4 opacity-0","enter-to-class":"transform translate-y-0 opacity-100","leave-active-class":"transition duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:w0(()=>[s.value?(Xe(),ot("div",Mk,[$[5]||($[5]=U("span",null,"✓",-1)),U("span",null,Ye(s.value),1)])):Ft("",!0)]),_:1})]))}}),Bk=ux(Rk);Bk.mount("#app");
