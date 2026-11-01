(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Id(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const St={},Ai=[],on=()=>{},Vg=()=>!1,Ko=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Xo=e=>e.startsWith("onUpdate:"),qt=Object.assign,Ad=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},z1=Object.prototype.hasOwnProperty,ht=(e,t)=>z1.call(e,t),Re=Array.isArray,Gn=e=>pa(e)==="[object Map]",En=e=>pa(e)==="[object Set]",gp=e=>pa(e)==="[object Date]",We=e=>typeof e=="function",Rt=e=>typeof e=="string",ln=e=>typeof e=="symbol",gt=e=>e!==null&&typeof e=="object",jg=e=>(gt(e)||We(e))&&We(e.then)&&We(e.catch),Wg=Object.prototype.toString,pa=e=>Wg.call(e),M1=e=>pa(e).slice(8,-1),qg=e=>pa(e)==="[object Object]",Od=e=>Rt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,qs=Id(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},R1=/-\w/g,Vr=Yo(e=>e.replace(R1,t=>t.slice(1).toUpperCase())),B1=/\B([A-Z])/g,Li=Yo(e=>e.replace(B1,"-$1").toLowerCase()),Hg=Yo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rl=Yo(e=>e?`on${Hg(e)}`:""),nn=(e,t)=>!Object.is(e,t),xo=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},Gg=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},Zo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},P1=e=>{const t=Rt(e)?Number(e):NaN;return isNaN(t)?e:t};let yp;const Qo=()=>yp||(yp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function is(e){if(Re(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],i=Rt(n)?L1(n):is(n);if(i)for(const s in i)t[s]=i[s]}return t}else if(Rt(e)||gt(e))return e}const D1=/;(?![^(]*\))/g,N1=/:([^]+)/,U1=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function L1(e){const t={};return e.replace(U1,r=>r.startsWith("/*")?"":r).split(D1).forEach(r=>{if(r){const n=r.split(N1);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function sn(e){let t="";if(Rt(e))t=e;else if(Re(e))for(let r=0;r<e.length;r++){const n=sn(e[r]);n&&(t+=n+" ")}else if(gt(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const F1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",V1=Id(F1);function Kg(e){return!!e||e===""}function j1(e,t,r){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=In(e[i],t[i],r);return n}function bp(e,t,r){if(e.size!==t.size)return!1;const n=Array.from(t),i=new Uint8Array(n.length);for(const s of e){let a=-1;for(let o=0;o<n.length;o++)if(!i[o]&&In(s,n[o],r)){a=o;break}if(a<0)return!1;i[a]=1}return!0}function W1(e,t,r){let n=Gn(e),i=Gn(t);if(n||i||(n=En(e),i=En(t),n||i))return n&&i?bp(e,t,r):!1;const s=Object.keys(e).length,a=Object.keys(t).length;if(s!==a)return!1;for(const o in e){const l=e.hasOwnProperty(o),d=t.hasOwnProperty(o);if(l&&!d||!l&&d||!In(e[o],t[o],r))return!1}return String(e)===String(t)}function vp(e,t,r,n){r||(r=[new Map,new Map]);const[i,s]=r;if(i.has(e)||s.has(t))return i.get(e)===t&&s.get(t)===e;i.set(e,t),s.set(t,e);const a=n(e,t,r);return i.delete(e),s.delete(t),a}function In(e,t,r){if(e===t)return!0;let n=gp(e),i=gp(t);return n||i?n&&i?e.getTime()===t.getTime():!1:(n=ln(e),i=ln(t),n||i?e===t:(n=Re(e),i=Re(t),n||i?n&&i?vp(e,t,r,j1):!1:(n=gt(e),i=gt(t),n||i?!n||!i?!1:vp(e,t,r,W1):String(e)===String(t))))}function zd(e,t){return e.findIndex(r=>In(r,t))}const Xg=e=>!!(e&&e.__v_isRef===!0),Qe=e=>Rt(e)?e:e==null?"":Re(e)||gt(e)&&(e.toString===Wg||!We(e.toString))?Xg(e)?Qe(e.value):JSON.stringify(e,Yg,2):String(e),Yg=(e,t)=>Xg(t)?Yg(e,t.value):Gn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,i],s)=>(r[Bl(n,s)+" =>"]=i,r),{})}:En(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>Bl(r))}:ln(t)?Bl(t):gt(t)&&!Re(t)&&!qg(t)?String(t):t,Bl=(e,t="")=>{var r;return ln(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qt;class q1{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Qt&&(Qt.active?(this.parent=Qt,this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes){const n=this.scopes.slice();for(t=0,r=n.length;t<r;t++)n[t].pause()}for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes){const i=this.scopes.slice();for(t=0,r=i.length;t<r;t++)i[t].resume()}const n=this.effects.slice();for(t=0,r=n.length;t<r;t++)n[t].resume()}}run(t){if(this._active){const r=Qt;try{return Qt=this,t()}finally{Qt=r}}}on(){++this._on===1&&(this.prevScope=Qt,Qt=this)}off(){if(this._on>0&&--this._on===0){if(Qt===this)Qt=this.prevScope;else{let t=Qt;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(r=0,n=i.length;r<n;r++)i[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function H1(){return Qt}let Ct;const Pl=new WeakSet;class Zg{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qt&&(Qt.active?Qt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pl.has(this)&&(Pl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wp(this),e0(this);const t=Ct,r=jr;Ct=this,jr=!0;try{return this.fn()}finally{t0(this),Ct=t,jr=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Bd(t);this.deps=this.depsTail=void 0,wp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qu(this)&&this.run()}get dirty(){return Qu(this)}}let Qg=0,Hs,Gs;function Jg(e,t=!1){if(e.flags|=8,t){e.next=Gs,Gs=e;return}e.next=Hs,Hs=e}function Md(){Qg++}function Rd(){if(--Qg>0)return;if(Gs){let t=Gs;for(Gs=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;Hs;){let t=Hs;for(Hs=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function e0(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function t0(e){let t,r=e.depsTail,n=r;for(;n;){const i=n.prevDep;n.version===-1?(n===r&&(r=i),Bd(n),G1(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=r}function Qu(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(r0(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function r0(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ea)||(e.globalVersion=ea,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Qu(e))))return;e.flags|=2;const t=e.dep,r=Ct,n=jr;Ct=e,jr=!0;try{e0(e);const i=e.fn(e._value);(t.version===0||nn(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Ct=r,jr=n,t0(e),e.flags&=-3}}function Bd(e,t=!1){const{dep:r,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let s=r.computed.deps;s;s=s.nextDep)Bd(s,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function G1(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let jr=!0;const n0=[];function un(){n0.push(jr),jr=!1}function dn(){const e=n0.pop();jr=e===void 0?!0:e}function wp(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=Ct;Ct=void 0;try{t()}finally{Ct=r}}}let ea=0;class K1{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pd{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ct||!jr||Ct===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==Ct)r=this.activeLink=new K1(Ct,this),Ct.deps?(r.prevDep=Ct.depsTail,Ct.depsTail.nextDep=r,Ct.depsTail=r):Ct.deps=Ct.depsTail=r,i0(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=Ct.depsTail,r.nextDep=void 0,Ct.depsTail.nextDep=r,Ct.depsTail=r,Ct.deps===r&&(Ct.deps=n)}return r}trigger(t){this.version++,ea++,this.notify(t)}notify(t){Md();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{Rd()}}}function i0(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)i0(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const Ju=new WeakMap,Mi=Symbol(""),ed=Symbol(""),ta=Symbol("");function tr(e,t,r){if(jr&&Ct){let n=Ju.get(e);n||Ju.set(e,n=new Map);let i=n.get(r);i||(n.set(r,i=new Pd),i.map=n,i.key=r),i.track()}}function Tn(e,t,r,n,i,s){const a=Ju.get(e);if(!a){ea++;return}const o=l=>{l&&l.trigger()};if(Md(),t==="clear")a.forEach(o);else{const l=Re(e),d=l&&Od(r);if(l&&r==="length"){const p=Number(n);a.forEach((f,g)=>{(g==="length"||g===ta||!ln(g)&&g>=p)&&o(f)})}else switch((r!==void 0||a.has(void 0))&&o(a.get(r)),d&&o(a.get(ta)),t){case"add":l?d&&o(a.get("length")):(o(a.get(Mi)),Gn(e)&&o(a.get(ed)));break;case"delete":l||(o(a.get(Mi)),Gn(e)&&o(a.get(ed)));break;case"set":Gn(e)&&o(a.get(Mi));break}}Rd()}function Ji(e){const t=ft(e);return t===e||(tr(t,"iterate",ta),Ir(e))?t:cn(e)?Kn(e)?t.map(r=>Xn(Ar(r))):t.map(Xn):t.map(Ar)}function Jo(e){return tr(e=ft(e),"iterate",ta),e}function en(e,t){return cn(e)?Xn(Kn(e)?Ar(t):t):Ar(t)}const X1={__proto__:null,[Symbol.iterator](){return Dl(this,Symbol.iterator,e=>en(this,e))},concat(...e){return Ji(this).concat(...e.map(t=>Re(t)?Ji(t):t))},entries(){return Dl(this,"entries",e=>(e[1]=en(this,e[1]),e))},every(e,t){return vn(this,"every",e,t,void 0,arguments)},filter(e,t){return vn(this,"filter",e,t,r=>r.map(n=>en(this,n)),arguments)},find(e,t){return vn(this,"find",e,t,r=>en(this,r),arguments)},findIndex(e,t){return vn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return vn(this,"findLast",e,t,r=>en(this,r),arguments)},findLastIndex(e,t){return vn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return vn(this,"forEach",e,t,void 0,arguments)},includes(...e){return Nl(this,"includes",e)},indexOf(...e){return Nl(this,"indexOf",e)},join(e){return Ji(this).join(e)},lastIndexOf(...e){return Nl(this,"lastIndexOf",e)},map(e,t){return vn(this,"map",e,t,void 0,arguments)},pop(){return Ts(this,"pop")},push(...e){return Ts(this,"push",e)},reduce(e,...t){return xp(this,"reduce",e,t)},reduceRight(e,...t){return xp(this,"reduceRight",e,t)},shift(){return Ts(this,"shift")},some(e,t){return vn(this,"some",e,t,void 0,arguments)},splice(...e){return Ts(this,"splice",e)},toReversed(){return Ji(this).toReversed()},toSorted(e){return Ji(this).toSorted(e)},toSpliced(...e){return Ji(this).toSpliced(...e)},unshift(...e){return Ts(this,"unshift",e)},values(){return Dl(this,"values",e=>en(this,e))}};function Dl(e,t,r){const n=Jo(e),i=n[t],s=i.call(n);if(n!==e&&!Ir(e)){if(s[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(s));return a.next=()=>_p(s.next(),r),i!==s0[t]&&Object.defineProperties(a,{return:{get(){const o=s.return;return typeof o=="function"?o.bind(s):o}},throw:{get(){const o=s.throw;return typeof o=="function"?o.bind(s):o}}}),a}s._next=s.next,s.next=()=>_p(s._next(),r)}return s}function _p(e,t){return e.done||(e.value=t(e.value)),e}const s0=Array.prototype;function vn(e,t,r,n,i,s){const a=Jo(e),o=a!==e&&!Ir(e),l=a[t];if(l!==s0[t]){const f=l.apply(e,s);return o?Ar(f):f}let d=r;a!==e&&(o?d=function(f,g){return r.call(this,en(e,f),g,e)}:r.length>2&&(d=function(f,g){return r.call(this,f,g,e)}));const p=l.call(a,d,n);return o&&i?i(p):p}function xp(e,t,r,n){const i=Jo(e),s=i!==e&&!Ir(e);let a=r,o=!1;i!==e&&(s?(o=n.length===0,a=function(d,p,f){return o&&(o=!1,d=en(e,d)),r.call(this,d,en(e,p),f,e)}):r.length>3&&(a=function(d,p,f){return r.call(this,d,p,f,e)}));const l=i[t](a,...n);return o?en(e,l):l}function Nl(e,t,r){const n=ft(e);tr(n,"iterate",ta);const i=n[t](...r);return(i===-1||i===!1)&&Ud(r[0])?(r[0]=ft(r[0]),n[t](...r)):i}function Ts(e,t,r=[]){un(),Md();const n=ft(e)[t].apply(e,r);return Rd(),dn(),n}const Y1=Id("__proto__,__v_isRef,__isVue"),a0=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ln));function Z1(e){ln(e)||(e=String(e));const t=ft(this);return tr(t,"has",e),t.hasOwnProperty(e)}class o0{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,n){if(r==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return s;if(r==="__v_raw")return n===(i?s?o_:c0:s?d0:u0).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const a=Re(t);if(!i){let l;if(a&&(l=X1[r]))return l;if(r==="hasOwnProperty")return Z1}const o=Reflect.get(t,r,nr(t)?t:n);if((ln(r)?a0.has(r):Y1(r))||(i||tr(t,"get",r),s))return o;if(nr(o)){const l=a&&Od(r)?o:o.value;return i&&gt(l)?rd(l):l}return gt(o)?i?rd(o):as(o):o}}class l0 extends o0{constructor(t=!1){super(!1,t)}set(t,r,n,i){let s=t[r];const a=Re(t)&&Od(r);if(!this._isShallow){const d=cn(s);if(!Ir(n)&&!cn(n)&&(s=ft(s),n=ft(n)),!a&&nr(s)&&!nr(n))return d||(s.value=n),!0}const o=a?Number(r)<t.length:ht(t,r),l=Reflect.set(t,r,n,nr(t)?t:i);return t===ft(i)&&l&&(o?nn(n,s)&&Tn(t,"set",r,n):Tn(t,"add",r,n)),l}deleteProperty(t,r){const n=ht(t,r);t[r];const i=Reflect.deleteProperty(t,r);return i&&n&&Tn(t,"delete",r,void 0),i}has(t,r){const n=Reflect.has(t,r);return(!ln(r)||!a0.has(r))&&tr(t,"has",r),n}ownKeys(t){return tr(t,"iterate",Re(t)?"length":Mi),Reflect.ownKeys(t)}}class Q1 extends o0{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const J1=new l0,e_=new Q1,t_=new l0(!0);const td=e=>e,Qa=e=>Reflect.getPrototypeOf(e);function r_(e,t,r){return function(...n){const i=this.__v_raw,s=ft(i),a=Gn(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,d=i[e](...n),p=r?td:t?Xn:Ar;return!t&&tr(s,"iterate",l?ed:Mi),qt(Object.create(d),{next(){const{value:f,done:g}=d.next();return g?{value:f,done:g}:{value:o?[p(f[0]),p(f[1])]:p(f),done:g}}})}}function Ja(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function n_(e,t){const r={get(i){const s=this.__v_raw,a=ft(s),o=ft(i);e||(nn(i,o)&&tr(a,"get",i),tr(a,"get",o));const{has:l}=Qa(a),d=t?td:e?Xn:Ar;if(l.call(a,i))return d(s.get(i));if(l.call(a,o))return d(s.get(o));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!e&&tr(ft(i),"iterate",Mi),i.size},has(i){const s=this.__v_raw,a=ft(s),o=ft(i);return e||(nn(i,o)&&tr(a,"has",i),tr(a,"has",o)),i===o?s.has(i):s.has(i)||s.has(o)},forEach(i,s){const a=this,o=a.__v_raw,l=ft(o),d=t?td:e?Xn:Ar;return!e&&tr(l,"iterate",Mi),o.forEach((p,f)=>i.call(s,d(p),d(f),a))}};return qt(r,e?{add:Ja("add"),set:Ja("set"),delete:Ja("delete"),clear:Ja("clear")}:{add(i){const s=ft(this),a=Qa(s),o=ft(i),l=!t&&!Ir(i)&&!cn(i)?o:i;return a.has.call(s,l)||nn(i,l)&&a.has.call(s,i)||nn(o,l)&&a.has.call(s,o)||(s.add(l),Tn(s,"add",l,l)),this},set(i,s){!t&&!Ir(s)&&!cn(s)&&(s=ft(s));const a=ft(this),{has:o,get:l}=Qa(a);let d=o.call(a,i);d||(i=ft(i),d=o.call(a,i));const p=l.call(a,i);return a.set(i,s),d?nn(s,p)&&Tn(a,"set",i,s):Tn(a,"add",i,s),this},delete(i){const s=ft(this),{has:a,get:o}=Qa(s);let l=a.call(s,i);l||(i=ft(i),l=a.call(s,i)),o&&o.call(s,i);const d=s.delete(i);return l&&Tn(s,"delete",i,void 0),d},clear(){const i=ft(this),s=i.size!==0,a=i.clear();return s&&Tn(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{r[i]=r_(i,e,t)}),r}function Dd(e,t){const r=n_(e,t);return(n,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_isShallow"?t:i==="__v_raw"?n:Reflect.get(ht(r,i)&&i in n?r:n,i,s)}const i_={get:Dd(!1,!1)},s_={get:Dd(!1,!0)},a_={get:Dd(!0,!1)};const u0=new WeakMap,d0=new WeakMap,c0=new WeakMap,o_=new WeakMap;function l_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function as(e){return cn(e)?e:Nd(e,!1,J1,i_,u0)}function u_(e){return Nd(e,!1,t_,s_,d0)}function rd(e){return Nd(e,!0,e_,a_,c0)}function Nd(e,t,r,n,i){if(!gt(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=i.get(e);if(s)return s;const a=l_(M1(e));if(a===0)return e;const o=new Proxy(e,a===2?n:r);return i.set(e,o),o}function Kn(e){return cn(e)?Kn(e.__v_raw):!!(e&&e.__v_isReactive)}function cn(e){return!!(e&&e.__v_isReadonly)}function Ir(e){return!!(e&&e.__v_isShallow)}function Ud(e){return e?!!e.__v_raw:!1}function ft(e){const t=e&&e.__v_raw;return t?ft(t):e}function d_(e){return!ht(e,"__v_skip")&&Object.isExtensible(e)&&Gg(e,"__v_skip",!0),e}const Ar=e=>gt(e)?as(e):e,Xn=e=>gt(e)?rd(e):e;function nr(e){return e?e.__v_isRef===!0:!1}function Ye(e){return c_(e,!1)}function c_(e,t){return nr(e)?e:new p_(e,t)}class p_{constructor(t,r){this.dep=new Pd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:ft(t),this._value=r?t:Ar(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,n=this.__v_isShallow||Ir(t)||cn(t);t=n?t:ft(t),nn(t,r)&&(this._rawValue=t,this._value=n?t:Ar(t),this.dep.trigger())}}function ut(e){return nr(e)?e.value:e}const f_={get:(e,t,r)=>t==="__v_raw"?e:ut(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const i=e[t];return nr(i)&&!nr(r)?(i.value=r,!0):Reflect.set(e,t,r,n)}};function p0(e){return Kn(e)?e:new Proxy(e,f_)}class h_{constructor(t,r,n){this.fn=t,this.setter=r,this._value=void 0,this.dep=new Pd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ea-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Ct!==this)return Jg(this,!0),!0}get value(){const t=this.dep.track();return r0(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function m_(e,t,r=!1){let n,i;return We(e)?n=e:(n=e.get,i=e.set),new h_(n,i,r)}const eo={},Eo=new WeakMap;let Ti;function g_(e,t=!1,r=Ti){if(r){let n=Eo.get(r);n||Eo.set(r,n=[]),n.push(e)}}function y_(e,t,r=St){const{immediate:n,deep:i,once:s,scheduler:a,augmentJob:o,call:l}=r,d=E=>i?E:Ir(E)||i===!1||i===0?kn(E,1):kn(E);let p,f,g,b,y=!1,$=!1;if(nr(e)?(f=()=>e.value,y=Ir(e)):Kn(e)?(f=()=>d(e),y=!0):Re(e)?($=!0,y=e.some(E=>Kn(E)||Ir(E)),f=()=>e.map(E=>{if(nr(E))return E.value;if(Kn(E))return d(E);if(We(E))return l?l(E,2):E()})):We(e)?t?f=l?()=>l(e,2):e:f=()=>{if(g){un();try{g()}finally{dn()}}const E=Ti;Ti=p;try{return l?l(e,3,[b]):e(b)}finally{Ti=E}}:f=on,t&&i){const E=f,O=i===!0?1/0:i;f=()=>kn(E(),O)}const C=H1(),S=()=>{p.stop(),C&&C.active&&Ad(C.effects,p)};if(s&&t){const E=t;t=(...O)=>{try{return E(...O)}finally{S()}}}let x=$?new Array(e.length).fill(eo):eo;const A=E=>{if(!(!(p.flags&1)||!p.dirty&&!E))if(t){const O=p.run();if(E||i||y||($?O.some((D,N)=>nn(D,x[N])):nn(O,x))){const D=Ti;un();try{g&&g(),Ti=p;const N=[O,x===eo?void 0:$&&x[0]===eo?[]:x,b];x=O,l?l(t,3,N):t(...N)}finally{Ti=D,dn()}}}else p.run()};return o&&o(A),p=new Zg(f),p.scheduler=a?()=>a(A,!1):A,b=E=>g_(E,!1,p),g=p.onStop=()=>{const E=Eo.get(p);if(E){if(l)l(E,4);else for(const O of E)O();Eo.delete(p)}},t?n?A(!0):x=p.run():a?a(A.bind(null,!0),!0):p.run(),S.pause=p.pause.bind(p),S.resume=p.resume.bind(p),S.stop=S,S}function kn(e,t=1/0,r){if(t<=0||!gt(e)||e.__v_skip||(r=r||new Map,(r.get(e)||0)>=t))return e;if(r.set(e,t),t--,nr(e))kn(e.value,t,r);else if(Re(e))for(let n=0;n<e.length;n++)kn(e[n],t,r);else if(En(e)||Gn(e))e.forEach(n=>{kn(n,t,r)});else if(qg(e)){for(const n in e)kn(e[n],t,r);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&kn(e[n],t,r)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fa(e,t,r,n){try{return n?e(...n):e()}catch(i){el(i,t,r)}}function Or(e,t,r,n){if(We(e)){const i=fa(e,t,r,n);return i&&jg(i)&&i.catch(s=>{el(s,t,r)}),i}if(Re(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Or(e[s],t,r,n));return i}}function el(e,t,r,n=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||St;if(t){let o=t.parent;const l=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${r}`;for(;o;){const p=o.ec;if(p){for(let f=0;f<p.length;f++)if(p[f](e,l,d)===!1)return}o=o.parent}if(s){un(),fa(s,null,10,[e,l,d]),dn();return}}b_(e,r,i,n,a)}function b_(e,t,r,n=!0,i=!1){if(i)throw e;console.error(e)}const lr=[];let Ur=-1;const tn=[];let qn=null,ts=0;const f0=Promise.resolve();let Io=null;function Oi(e){const t=Io||f0;return e?t.then(this?e.bind(this):e):t}function v_(e){let t=Ur+1,r=lr.length;for(;t<r;){const n=t+r>>>1,i=lr[n],s=ra(i);s<e||s===e&&i.flags&2?t=n+1:r=n}return t}function Ld(e){if(!(e.flags&1)){const t=ra(e),r=lr[lr.length-1];!r||!(e.flags&2)&&t>=ra(r)?lr.push(e):lr.splice(v_(t),0,e),e.flags|=1,h0()}}function h0(){Io||(Io=f0.then(y0))}function w_(e){if(!Re(e))qn&&e.id===-1?qn.splice(ts+1,0,e):e.flags&1||(tn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)tn.push(e[t]);h0()}function m0(e,t,r,n=Ur+1){for(;n<lr.length;n++){const i=lr[n];if(i&&i.flags&2){if(e&&i.id!==e.uid||t!==void 0&&!(i.id>=t))continue;lr.splice(n,1),n=e?n-1:Ur,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function g0(e,t,r=0){if(tn.length){let n=tn,i=0;if(t){n=[];for(let a=0;a<tn.length;a++){const o=tn[a];(o.i!==void 0?!o.i||o.i.uid<r:t.has(o))?tn[i++]=o:n.push(o)}}const s=[...new Set(n)].sort((a,o)=>ra(a)-ra(o));if(tn.length=i,qn){for(let a=0;a<s.length;a++)qn.push(s[a]);return}for(qn=s,ts=0;ts<qn.length;ts++){const a=qn[ts];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}qn=null,ts=0}}let Ul=!1;function __(e,t){if(Ul){e();return}const r=t===void 0?void 0:new Set(tn);e(),Ul=!0;try{m0(void 0,t),g0(void 0,r,t)}finally{Ul=!1}}const ra=e=>e.id==null?e.flags&2?-1:1/0:e.id;function y0(e){try{for(Ur=0;Ur<lr.length;Ur++){const t=lr[Ur];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),fa(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ur<lr.length;Ur++){const t=lr[Ur];t&&(t.flags&=-2)}Ur=-1,lr.length=0,g0(),Io=null,(lr.length||tn.length)&&y0()}}let Er=null,b0=null;function Ao(e){const t=Er;return Er=e,b0=e&&e.type.__scopeId||null,t}function v0(e,t=Er,r){if(!t||e._n)return e;const n=(...i)=>{n._d&&Ro(-1);const s=Ao(t),a=Ri.length;let o;try{o=e(...i)}finally{for(let l=Ri.length;l>a;l--)H0();Ao(s),n._d&&Ro(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Cr(e,t){if(Er===null)return e;const r=al(Er),n=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,o,l=St]=t[i];s&&(We(s)&&(s={mounted:s,updated:s}),s.deep&&kn(a),n.push({dir:s,instance:r,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function gi(e,t,r,n){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(un(),Or(l,r,8,[e.el,o,e,t]),dn())}}function x_(e,t){if(ur){let r=ur.provides;const n=ur.parent&&ur.parent.provides;n===r&&(r=ur.provides=Object.create(n)),r[e]=t}}function $o(e,t,r=!1){const n=Y0();if(n||ss){let i=ss?ss._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return r&&We(t)?t.call(n&&n.proxy):t}}const $_=Symbol.for("v-scx"),S_=()=>$o($_);function Ll(e,t,r){return w0(e,t,r)}function w0(e,t,r=St){const{immediate:n,deep:i,flush:s,once:a}=r,o=qt({},r),l=t&&n||!t&&s!=="post";let d;if(oa){if(s==="sync"){const b=S_();d=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=on,b.resume=on,b.pause=on,b}}const p=ur;o.call=(b,y,$)=>Or(b,p,y,$);let f=!1;s==="post"?o.scheduler=b=>{b.i=p,cr(b,p&&p.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(b,y)=>{y?b():Ld(b)}),o.augmentJob=b=>{t&&(b.flags|=4),f&&(b.flags|=2,p&&(b.id=p.uid,b.i=p))};const g=y_(e,t,o);return oa&&(d?d.push(g):l&&g()),g}function T_(e,t,r){const n=this.proxy,i=Rt(e)?e.includes(".")?_0(n,e):()=>n[e]:e.bind(n,n);let s;We(t)?s=t:(s=t.handler,r=t);const a=ga(this),o=w0(i,s.bind(n),r);return a(),o}function _0(e,t){const r=t.split(".");return()=>{let n=e;for(let i=0;i<r.length&&n;i++)n=n[r[i]];return n}}const k_=Symbol("_vte"),tl=e=>e.__isTeleport,kr=Symbol("_leaveCb"),ks=Symbol("_enterCb");function C_(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ma(()=>{e.isMounted=!0}),E0(()=>{e.isUnmounting=!0}),e}const Sr=[Function,Array],x0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Sr,onEnter:Sr,onAfterEnter:Sr,onEnterCancelled:Sr,onBeforeLeave:Sr,onLeave:Sr,onAfterLeave:Sr,onLeaveCancelled:Sr,onBeforeAppear:Sr,onAppear:Sr,onAfterAppear:Sr,onAppearCancelled:Sr},E_={name:"BaseTransition",props:x0,setup(e,{slots:t}){const r=Y0(),n=C_();return()=>{const i=t.default&&T0(t.default(),!0),s=i&&i.length?$0(i):r.subTree?Nt():void 0;if(!s)return;const a=ft(e),{mode:o}=a;if(n.isLeaving)return Fl(s);const l=Oo(s);if(!l)return Fl(s);let d=nd(l,a,n,r,f=>d=f);l.type!==rr&&os(l,d);let p=r.subTree&&Oo(r.subTree);if(p&&p.type!==rr&&!ki(p,l)&&na(r.subTree)){let f=nd(p,a,n,r);if(os(p,f),o==="out-in"&&l.type!==rr)return n.isLeaving=!0,f.afterLeave=()=>{n.isLeaving=!1,r.job.flags&8||r.update(),delete f.afterLeave,p=void 0},Fl(s);o==="in-out"&&l.type!==rr?f.delayLeave=(g,b,y)=>{const $=S0(n,p);$[String(p.key)]=p,g[kr]=()=>{b(),g[kr]=void 0,delete d.delayedLeave,p=void 0},d.delayedLeave=()=>{y(),delete d.delayedLeave,p=void 0}}:p=void 0}else p&&(p=void 0);return s}}};function $0(e){let t=e[0];if(e.length>1){for(const r of e)if(r.type!==rr){t=r;break}}return t}const I_=E_;function S0(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function nd(e,t,r,n,i){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:d,onAfterEnter:p,onEnterCancelled:f,onBeforeLeave:g,onLeave:b,onAfterLeave:y,onLeaveCancelled:$,onBeforeAppear:C,onAppear:S,onAfterAppear:x,onAppearCancelled:A}=t,E=String(e.key),O=S0(r,e),D=(q,Z)=>{q&&Or(q,n,9,Z)},N=(q,Z)=>{const ae=Z[1];D(q,Z),Re(q)?q.every(X=>X.length<=1)&&ae():q.length<=1&&ae()},k={mode:a,persisted:o,beforeEnter(q){let Z=l;if(!r.isMounted)if(s)Z=C||l;else return;q[kr]&&q[kr](!0);const ae=O[E];if(ae&&ki(e,ae)){let X=ae.el[kr];if(!X){const le=na(ae);X=le&&le.el[kr]}X&&X()}D(Z,[q])},enter(q){if(O[E]===e)return;let Z=d,ae=p,X=f;if(!r.isMounted)if(s)Z=S||d,ae=x||p,X=A||f;else return;let le=!1;q[ks]=J=>{le||(le=!0,J?D(X,[q]):D(ae,[q]),k.delayedLeave&&k.delayedLeave(),q[ks]=void 0)};const W=q[ks].bind(null,!1);Z?N(Z,[q,W]):W()},leave(q,Z){const ae=String(e.key);if(q[ks]&&q[ks](!0),r.isUnmounting)return Z();D(g,[q]);let X=!1;q[kr]=W=>{X||(X=!0,Z(),W?D($,[q]):D(y,[q]),q[kr]=void 0,O[ae]===e&&delete O[ae])};const le=q[kr].bind(null,!1);O[ae]=e,b?N(b,[q,le]):le()},clone(q){const Z=nd(q,t,r,n,i);return i&&i(Z),Z}};return k}function Fl(e){if(rl(e))return e=Yn(e),e.children=null,e}function Oo(e){if(!rl(e))return tl(e.type)&&e.children?$0(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:r}=e;if(r){if(t&16)return r[0];if(t&32&&We(r.default))return r.default()}}function os(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const r=e.component.subTree;os(tl(r.type)&&Oo(r)||r,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===Xt&&Re(e.children)){const r=M0(e.children,!1);r&&os(r,t)}}function T0(e,t=!1,r){let n=[],i=0;for(let s=0;s<e.length;s++){let a=e[s];const o=r==null?a.key:String(r)+String(a.key!=null?a.key:s);a.type===Xt?(a.patchFlag&128&&i++,n=n.concat(T0(a.children,t,o))):(t||a.type!==rr)&&n.push(o!=null?Yn(a,{key:o}):a)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function na(e){if(e.component)return na(e.component.subTree);if(e.type===Xt){const t=Re(e.children)&&M0(e.children,!1);return t?na(t):void 0}if(e.type!==rr)return e}function ha(e,t){return We(e)?qt({name:e.name},t,{setup:e}):e}function k0(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function $p(e,t){let r;return!!((r=Object.getOwnPropertyDescriptor(e,t))&&!r.configurable)}const zo=new WeakMap;function Ks(e,t,r,n,i=!1){if(Re(e)){e.forEach(($,C)=>Ks($,t&&(Re(t)?t[C]:t),r,n,i));return}if(Xs(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Ks(e,t,r,n.component.subTree);return}const s=n.shapeFlag&4?al(n.component):n.el,a=i?null:s,{i:o,r:l}=e,d=t&&t.r,p=o.refs===St?o.refs={}:o.refs,f=o.setupState,g=ft(f),b=f===St?Vg:$=>$p(p,$)?!1:ht(g,$),y=($,C)=>!(C&&$p(p,C));if(d!=null&&d!==l){if(Sp(t),Rt(d))p[d]=null,b(d)&&(f[d]=null);else if(nr(d)){const $=t;y(d,$.k)&&(d.value=null),$.k&&(p[$.k]=null)}}if(We(l))fa(l,o,12,[a,p]);else{const $=Rt(l),C=nr(l);if($||C){const S=()=>{if(e.f){const x=$?b(l)?f[l]:p[l]:y()||!e.k?l.value:p[e.k];if(i)Re(x)&&Ad(x,s);else if(Re(x))x.includes(s)||x.push(s);else if($)p[l]=[s],b(l)&&(f[l]=p[l]);else{const A=[s];y(l,e.k)&&(l.value=A),e.k&&(p[e.k]=A)}}else $?(p[l]=a,b(l)&&(f[l]=a)):C&&(y(l,e.k)&&(l.value=a),e.k&&(p[e.k]=a))};if(a){const x=()=>{S(),zo.delete(e)};x.id=-1,zo.set(e,x),cr(x,r)}else Sp(e),S()}}}function Sp(e){const t=zo.get(e);t&&(t.flags|=8,zo.delete(e))}Qo().requestIdleCallback;Qo().cancelIdleCallback;const Xs=e=>!!e.type.__asyncLoader,rl=e=>e.type.__isKeepAlive;function A_(e,t){C0(e,"a",t)}function O_(e,t){C0(e,"da",t)}function C0(e,t,r=ur){const n=e.__wdc||(e.__wdc=()=>{let i=r;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(nl(t,n,r),r){let i=r.parent;for(;i&&i.parent;)rl(i.parent.vnode)&&z_(n,t,r,i),i=i.parent}}function z_(e,t,r,n){const i=nl(t,e,n,!0);Fd(()=>{Ad(n[t],i)},r)}function nl(e,t,r=ur,n=!1){if(r){const i=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...a)=>{un();const o=ga(r),l=Or(t,r,e,a);return o(),dn(),l});return n?i.unshift(s):i.push(s),s}}const An=e=>(t,r=ur)=>{(!oa||e==="sp")&&nl(e,(...n)=>t(...n),r)},M_=An("bm"),ma=An("m"),R_=An("bu"),B_=An("u"),E0=An("bum"),Fd=An("um"),P_=An("sp"),D_=An("rtg"),N_=An("rtc");function U_(e,t=ur){nl("ec",e,t)}const L_=Symbol.for("v-ndc");function ls(e,t,r,n){let i;const s=r,a=Re(e);if(a||Rt(e)){const o=a&&Kn(e);let l=!1,d=!1;o&&(l=!Ir(e),d=cn(e),e=Jo(e)),i=new Array(e.length);for(let p=0,f=e.length;p<f;p++)i[p]=t(l?d?Xn(Ar(e[p])):Ar(e[p]):e[p],p,void 0,s)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)i=[];else{i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s)}else if(gt(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,d=o.length;l<d;l++){const p=o[l];i[l]=t(e[p],p,l,s)}}else i=[];return i}const id=e=>e?Z0(e)?al(e):id(e.parent):null,Ys=qt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>id(e.parent),$root:e=>id(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>A0(e),$forceUpdate:e=>e.f||(e.f=()=>{Ld(e.update)}),$nextTick:e=>e.n||(e.n=Oi.bind(e.proxy)),$watch:e=>T_.bind(e)}),Vl=(e,t)=>e!==St&&!e.__isScriptSetup&&ht(e,t),F_={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:n,data:i,props:s,accessCache:a,type:o,appContext:l}=e;if(t[0]!=="$"){const g=a[t];if(g!==void 0)switch(g){case 1:return n[t];case 2:return i[t];case 4:return r[t];case 3:return s[t]}else{if(Vl(n,t))return a[t]=1,n[t];if(i!==St&&ht(i,t))return a[t]=2,i[t];if(ht(s,t))return a[t]=3,s[t];if(r!==St&&ht(r,t))return a[t]=4,r[t];sd&&(a[t]=0)}}const d=Ys[t];let p,f;if(d)return t==="$attrs"&&tr(e.attrs,"get",""),d(e);if((p=o.__cssModules)&&(p=p[t]))return p;if(r!==St&&ht(r,t))return a[t]=4,r[t];if(f=l.config.globalProperties,ht(f,t))return f[t]},set({_:e},t,r){const{data:n,setupState:i,ctx:s}=e;return Vl(i,t)?(i[t]=r,!0):n!==St&&ht(n,t)?(n[t]=r,!0):ht(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:i,props:s,type:a}},o){let l;return!!(r[o]||e!==St&&o[0]!=="$"&&ht(e,o)||Vl(t,o)||ht(s,o)||ht(n,o)||ht(Ys,o)||ht(i.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:ht(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function Tp(e){return Re(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let sd=!0;function V_(e){const t=A0(e),r=e.proxy,n=e.ctx;sd=!1,t.beforeCreate&&kp(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:d,created:p,beforeMount:f,mounted:g,beforeUpdate:b,updated:y,activated:$,deactivated:C,beforeDestroy:S,beforeUnmount:x,destroyed:A,unmounted:E,render:O,renderTracked:D,renderTriggered:N,errorCaptured:k,serverPrefetch:q,expose:Z,inheritAttrs:ae,components:X,directives:le,filters:W}=t;if(d&&j_(d,n,null),a)for(const ue in a){const ce=a[ue];We(ce)&&(n[ue]=ce.bind(r))}if(i){const ue=i.call(r,r);gt(ue)&&(e.data=as(ue))}if(sd=!0,s)for(const ue in s){const ce=s[ue],we=We(ce)?ce.bind(r,r):We(ce.get)?ce.get.bind(r,r):on,ke=!We(ce)&&We(ce.set)?ce.set.bind(r):on,re=Qs({get:we,set:ke});Object.defineProperty(n,ue,{enumerable:!0,configurable:!0,get:()=>re.value,set:$e=>re.value=$e})}if(o)for(const ue in o)I0(o[ue],n,r,ue);if(l){const ue=We(l)?l.call(r):l;Reflect.ownKeys(ue).forEach(ce=>{x_(ce,ue[ce])})}p&&kp(p,e,"c");function te(ue,ce){Re(ce)?ce.forEach(we=>ue(we.bind(r))):ce&&ue(ce.bind(r))}if(te(M_,f),te(ma,g),te(R_,b),te(B_,y),te(A_,$),te(O_,C),te(U_,k),te(N_,D),te(D_,N),te(E0,x),te(Fd,E),te(P_,q),Re(Z))if(Z.length){const ue=e.exposed||(e.exposed={});Z.forEach(ce=>{Object.defineProperty(ue,ce,{get:()=>r[ce],set:we=>r[ce]=we,enumerable:!0})})}else e.exposed||(e.exposed={});O&&e.render===on&&(e.render=O),ae!=null&&(e.inheritAttrs=ae),X&&(e.components=X),le&&(e.directives=le),q&&k0(e)}function j_(e,t,r=on){Re(e)&&(e=ad(e));for(const n in e){const i=e[n];let s;gt(i)?"default"in i?s=$o(i.from||n,i.default,!0):s=$o(i.from||n):s=$o(i),nr(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[n]=s}}function kp(e,t,r){Or(Re(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function I0(e,t,r,n){let i=n.includes(".")?_0(r,n):()=>r[n];if(Rt(e)){const s=t[e];We(s)&&Ll(i,s)}else if(We(e))Ll(i,e.bind(r));else if(gt(e))if(Re(e))e.forEach(s=>I0(s,t,r,n));else{const s=We(e.handler)?e.handler.bind(r):t[e.handler];We(s)&&Ll(i,s,e)}}function A0(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!r&&!n?l=t:(l={},i.length&&i.forEach(d=>Mo(l,d,a,!0)),Mo(l,t,a)),gt(t)&&s.set(t,l),l}function Mo(e,t,r,n=!1){const{mixins:i,extends:s}=t;s&&Mo(e,s,r,!0),i&&i.forEach(a=>Mo(e,a,r,!0));for(const a in t)if(!(n&&a==="expose")){const o=W_[a]||r&&r[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const W_={data:Cp,props:Ep,emits:Ep,methods:Us,computed:Us,beforeCreate:or,created:or,beforeMount:or,mounted:or,beforeUpdate:or,updated:or,beforeDestroy:or,beforeUnmount:or,destroyed:or,unmounted:or,activated:or,deactivated:or,errorCaptured:or,serverPrefetch:or,components:Us,directives:Us,watch:H_,provide:Cp,inject:q_};function Cp(e,t){return t?e?function(){return qt(We(e)?e.call(this,this):e,We(t)?t.call(this,this):t)}:t:e}function q_(e,t){return Us(ad(e),ad(t))}function ad(e){if(Re(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function or(e,t){return e?[...new Set([].concat(e,t))]:t}function Us(e,t){return e?qt(Object.create(null),e,t):t}function Ep(e,t){return e?Re(e)&&Re(t)?[...new Set([...e,...t])]:qt(Object.create(null),Tp(e),Tp(t??{})):t}function H_(e,t){if(!e)return t;if(!t)return e;const r=qt(Object.create(null),e);for(const n in t)r[n]=or(e[n],t[n]);return r}function O0(){return{app:null,config:{isNativeTag:Vg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let G_=0;function K_(e,t){return function(n,i=null){We(n)||(n=qt({},n)),i!=null&&!gt(i)&&(i=null);const s=O0(),a=new WeakSet,o=[];let l=!1;const d=s.app={_uid:G_++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:T2,get config(){return s.config},set config(p){},use(p,...f){return a.has(p)||(p&&We(p.install)?(a.add(p),p.install(d,...f)):We(p)&&(a.add(p),p(d,...f))),d},mixin(p){return s.mixins.includes(p)||s.mixins.push(p),d},component(p,f){return f?(s.components[p]=f,d):s.components[p]},directive(p,f){return f?(s.directives[p]=f,d):s.directives[p]},mount(p,f,g){if(!l){const b=d._ceVNode||Le(n,i);return b.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),e(b,p,g),l=!0,d._container=p,p.__vue_app__=d,al(b.component)}},onUnmount(p){o.push(p)},unmount(){l&&(Or(o,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(p,f){return s.provides[p]=f,d},runWithContext(p){const f=ss;ss=d;try{return p()}finally{ss=f}}};return d}}let ss=null;const X_=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Vr(t)}Modifiers`]||e[`${Li(t)}Modifiers`];function Y_(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||St;let i=r;const s=t.startsWith("update:"),a=s&&X_(n,t.slice(7));a&&(a.trim&&(i=r.map(p=>Rt(p)?p.trim():p)),a.number&&(i=i.map(Zo)));let o,l=n[o=Rl(t)]||n[o=Rl(Vr(t))];!l&&s&&(l=n[o=Rl(Li(t))]),l&&Or(l,e,6,i);const d=n[o+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Or(d,e,6,i)}}const Z_=new WeakMap;function z0(e,t,r=!1){const n=r?Z_:t.emitsCache,i=n.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!We(e)){const l=d=>{const p=z0(d,t,!0);p&&(o=!0,qt(a,p))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(gt(e)&&n.set(e,null),null):(Re(s)?s.forEach(l=>a[l]=null):qt(a,s),gt(e)&&n.set(e,a),a)}function il(e,t){return!e||!Ko(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ht(e,t[0].toLowerCase()+t.slice(1))||ht(e,Li(t))||ht(e,t))}function Ip(e){const{type:t,vnode:r,proxy:n,withProxy:i,propsOptions:[s],slots:a,attrs:o,emit:l,render:d,renderCache:p,props:f,data:g,setupState:b,ctx:y,inheritAttrs:$}=e,C=Ao(e);let S,x;try{if(r.shapeFlag&4){const E=i||n,O=E;S=rn(d.call(O,E,p,f,b,g,y)),x=o}else{const E=t;S=rn(E.length>1?E(f,{attrs:o,slots:a,emit:l}):E(f,null)),x=t.props?o:Q_(o)}}catch(E){Ri.length=0,el(E,e,1),S=Le(rr)}let A=S;if(x&&$!==!1){const E=Object.keys(x),{shapeFlag:O}=A;E.length&&O&7&&(s&&E.some(Xo)&&(x=J_(x,s)),A=Yn(A,x,!1,!0))}if(r.dirs&&(A=Yn(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(r.dirs):r.dirs),r.transition){const E=tl(A.type)&&Oo(A)||A;os(E,r.transition)}return S=A,Ao(C),S}function M0(e,t=!0){let r;for(let n=0;n<e.length;n++){const i=e[n];if(sa(i)){if(i.type!==rr||i.children==="v-if"){if(r)return;r=i}}else return}return r}const Q_=e=>{let t;for(const r in e)(r==="class"||r==="style"||Ko(r))&&((t||(t={}))[r]=e[r]);return t},J_=(e,t)=>{const r={};for(const n in e)(!Xo(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function e2(e,t,r){const{props:n,children:i,component:s}=e,{props:a,children:o,patchFlag:l}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?Ap(n,a,d):!!a;if(l&8){const p=t.dynamicProps;for(let f=0;f<p.length;f++){const g=p[f];if(R0(a,n,g)&&!il(d,g))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Ap(n,a,d):!0:!!a;return!1}function Ap(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(!ht(e,s)||R0(t,e,s)&&!il(r,s))return!0}return!1}function R0(e,t,r){const n=e[r],i=t[r];return r==="style"&&gt(n)&&gt(i)?!In(n,i):n!==i}function t2({vnode:e,parent:t,suspense:r},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=n,e=i),i===e)(e=t.vnode).el=n,t=t.parent;else break}r&&r.activeBranch===e&&(r.vnode.el=n)}const B0={},P0=()=>Object.create(B0),D0=e=>Object.getPrototypeOf(e)===B0;function r2(e,t,r,n=!1){const i={},s=P0();e.propsDefaults=Object.create(null),N0(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);r?e.props=n?i:u_(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function n2(e,t,r,n){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=ft(i),[l]=e.propsOptions;let d=!1;if((n||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let f=0;f<p.length;f++){let g=p[f];if(il(e.emitsOptions,g))continue;const b=t[g];if(l)if(ht(s,g))b!==s[g]&&(s[g]=b,d=!0);else{const y=Vr(g);i[y]=od(l,o,y,b,e,!1)}else b!==s[g]&&(s[g]=b,d=!0)}}}else{N0(e,t,i,s)&&(d=!0);let p;for(const f in o)(!t||!ht(t,f)&&((p=Li(f))===f||!ht(t,p)))&&(l?r&&(r[f]!==void 0||r[p]!==void 0)&&(i[f]=od(l,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!ht(t,f))&&(delete s[f],d=!0)}d&&Tn(e.attrs,"set","")}function N0(e,t,r,n){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(qs(l))continue;const d=t[l];let p;i&&ht(i,p=Vr(l))?!s||!s.includes(p)?r[p]=d:(o||(o={}))[p]=d:il(e.emitsOptions,l)||(!(l in n)||d!==n[l])&&(n[l]=d,a=!0)}if(s){const l=ft(r),d=o||St;for(let p=0;p<s.length;p++){const f=s[p];r[f]=od(i,l,f,d[f],e,!ht(d,f))}}return a}function od(e,t,r,n,i,s){const a=e[r];if(a!=null){const o=ht(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&We(l)){const{propsDefaults:d}=i;if(r in d)n=d[r];else{const p=ga(i);n=d[r]=l.call(null,t),p()}}else n=l;i.ce&&i.ce._setProp(r,n)}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===Li(r))&&(n=!0))}return n}const i2=new WeakMap;function U0(e,t,r=!1){const n=r?i2:t.propsCache,i=n.get(e);if(i)return i;const s=e.props,a={},o=[];let l=!1;if(!We(e)){const p=f=>{l=!0;const[g,b]=U0(f,t,!0);qt(a,g),b&&o.push(...b)};!r&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!s&&!l)return gt(e)&&n.set(e,Ai),Ai;if(Re(s))for(let p=0;p<s.length;p++){const f=Vr(s[p]);Op(f)&&(a[f]=St)}else if(s)for(const p in s){const f=Vr(p);if(Op(f)){const g=s[p],b=a[f]=Re(g)||We(g)?{type:g}:qt({},g),y=b.type;let $=!1,C=!0;if(Re(y))for(let S=0;S<y.length;++S){const x=y[S],A=We(x)&&x.name;if(A==="Boolean"){$=!0;break}else A==="String"&&(C=!1)}else $=We(y)&&y.name==="Boolean";b[0]=$,b[1]=C,($||ht(b,"default"))&&o.push(f)}}const d=[a,o];return gt(e)&&n.set(e,d),d}function Op(e){return e[0]!=="$"&&!qs(e)}const Vd=e=>e==="_"||e==="_ctx"||e==="$stable",jd=e=>Re(e)?e.map(rn):[rn(e)],s2=(e,t,r)=>{if(t._n)return t;const n=v0((...i)=>jd(t(...i)),r);return n._c=!1,n},L0=(e,t,r)=>{const n=e._ctx;for(const i in e){if(Vd(i))continue;const s=e[i];if(We(s))t[i]=s2(i,s,n);else if(s!=null){const a=jd(s);t[i]=()=>a}}},F0=(e,t)=>{const r=jd(t);e.slots.default=()=>r},V0=(e,t,r)=>{for(const n in t)(r||!Vd(n))&&(e[n]=t[n])},a2=(e,t,r)=>{const n=e.slots=P0();if(e.vnode.shapeFlag&32){const i=t._;i?(V0(n,t,r),r&&Gg(n,"_",i,!0)):L0(t,n)}else t&&F0(e,t)},o2=(e,t,r)=>{const{vnode:n,slots:i}=e;let s=!0,a=St;if(n.shapeFlag&32){const o=t._;o?r&&o===1?s=!1:V0(i,t,r):(s=!t.$stable,L0(t,i)),a=t}else t&&(F0(e,t),a={default:1});if(s)for(const o in i)!Vd(o)&&a[o]==null&&delete i[o]},cr=p2;function l2(e){return u2(e)}function u2(e,t){const r=Qo();r.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:d,setElementText:p,parentNode:f,nextSibling:g,setScopeId:b=on,insertStaticContent:y}=e,$=(M,L,H,Y=null,ne=null,se=null,me=void 0,fe=null,ge=!!L.dynamicChildren)=>{if(M===L)return;M&&!ki(M,L)&&(Y=it(M),$e(M,ne,se,!0),M=null),L.patchFlag===-2&&(ge=!1,L.dynamicChildren=null),L.dynamicChildren&&M&&M.dynamicChildren&&M.dynamicChildren.hasOnce&&(L.dynamicChildren===Ai&&(L.dynamicChildren=[]),L.dynamicChildren.hasOnce=!0);const{type:ie,ref:Ee,shapeFlag:be}=L;switch(ie){case sl:C(M,L,H,Y);break;case rr:S(M,L,H,Y);break;case So:M==null&&x(L,H,Y,me);break;case Xt:X(M,L,H,Y,ne,se,me,fe,ge);break;default:be&1?O(M,L,H,Y,ne,se,me,fe,ge):be&6?le(M,L,H,Y,ne,se,me,fe,ge):(be&64||be&128)&&ie.process(M,L,H,Y,ne,se,me,fe,ge,Ve)}Ee!=null&&ne?Ks(Ee,M&&M.ref,se,L||M,!L):Ee==null&&M&&M.ref!=null&&Ks(M.ref,null,se,M,!0)},C=(M,L,H,Y)=>{if(M==null)n(L.el=o(L.children),H,Y);else{const ne=L.el=M.el;L.children!==M.children&&d(ne,L.children)}},S=(M,L,H,Y)=>{M==null?n(L.el=l(L.children||""),H,Y):L.el=M.el},x=(M,L,H,Y)=>{[M.el,M.anchor]=y(M.children,L,H,Y,M.el,M.anchor)},A=({el:M,anchor:L},H,Y)=>{let ne;for(;M&&M!==L;)ne=g(M),n(M,H,Y),M=ne;n(L,H,Y)},E=({el:M,anchor:L})=>{let H;for(;M&&M!==L;)H=g(M),i(M),M=H;i(L)},O=(M,L,H,Y,ne,se,me,fe,ge)=>{if(L.type==="svg"?me="svg":L.type==="math"&&(me="mathml"),M==null)D(L,H,Y,ne,se,me,fe,ge);else{const ie=M.el&&M.el._isVueCE?M.el:null;try{ie&&ie._beginPatch(),q(M,L,ne,se,me,fe,ge)}finally{ie&&ie._endPatch()}}},D=(M,L,H,Y,ne,se,me,fe)=>{let ge,ie;const{props:Ee,shapeFlag:be,transition:Oe,dirs:Me}=M;if(ge=M.el=a(M.type,se,Ee&&Ee.is,Ee),be&8?p(ge,M.children):be&16&&k(M.children,ge,null,Y,ne,jl(M,se),me,fe),Me&&gi(M,null,Y,"created"),N(ge,M,M.scopeId,me,Y),Ee){for(const je in Ee)je!=="value"&&!qs(je)&&s(ge,je,null,Ee[je],se,Y);"value"in Ee&&s(ge,"value",null,Ee.value,se),(ie=Ee.onVnodeBeforeMount)&&Qr(ie,Y,M)}Me&&gi(M,null,Y,"beforeMount");const qe=d2(ne,Oe);qe&&Oe.beforeEnter(ge),n(ge,L,H),((ie=Ee&&Ee.onVnodeMounted)||qe||Me)&&cr(()=>{try{ie&&Qr(ie,Y,M),qe&&Oe.enter(ge),Me&&gi(M,null,Y,"mounted")}finally{}},ne)},N=(M,L,H,Y,ne)=>{if(H&&b(M,H),Y)for(let se=0;se<Y.length;se++)b(M,Y[se]);if(ne){let se=ne.subTree;if(L===se||q0(se.type)&&(se.ssContent===L||se.ssFallback===L)){const me=ne.vnode;N(M,me,me.scopeId,me.slotScopeIds,ne.parent)}}},k=(M,L,H,Y,ne,se,me,fe,ge=0)=>{for(let ie=ge;ie<M.length;ie++){const Ee=M[ie]=fe?Sn(M[ie]):rn(M[ie]);$(null,Ee,L,H,Y,ne,se,me,fe)}},q=(M,L,H,Y,ne,se,me)=>{const fe=L.el=M.el;let{patchFlag:ge,dynamicChildren:ie,dirs:Ee}=L;ge|=M.patchFlag&16;const be=M.props||St,Oe=L.props||St;let Me;if(H&&yi(H,!1),(Me=Oe.onVnodeBeforeUpdate)&&Qr(Me,H,L,M),Ee&&gi(L,M,H,"beforeUpdate"),H&&yi(H,!0),ie&&(!M.dynamicChildren||M.dynamicChildren.length!==ie.length)&&(ge=0,me=!1,ie=null),(be.innerHTML&&Oe.innerHTML==null||be.textContent&&Oe.textContent==null)&&p(fe,""),ie?Z(M.dynamicChildren,ie,fe,H,Y,jl(L,ne),se):me||ce(M,L,fe,null,H,Y,jl(L,ne),se,!1),ge>0){if(ge&16)ae(fe,be,Oe,H,ne);else if(ge&2&&be.class!==Oe.class&&s(fe,"class",null,Oe.class,ne),ge&4&&s(fe,"style",be.style,Oe.style,ne),ge&8){const qe=L.dynamicProps;for(let je=0;je<qe.length;je++){const Je=qe[je],dt=be[Je],pt=Oe[Je];(pt!==dt||Je==="value")&&s(fe,Je,dt,pt,ne,H)}}ge&1&&M.children!==L.children&&p(fe,L.children)}else!me&&ie==null&&ae(fe,be,Oe,H,ne);((Me=Oe.onVnodeUpdated)||Ee)&&cr(()=>{Me&&Qr(Me,H,L,M),Ee&&gi(L,M,H,"updated")},Y)},Z=(M,L,H,Y,ne,se,me)=>{for(let fe=0;fe<L.length;fe++){const ge=M[fe],ie=L[fe],Ee=ge.el||ld(ge),be=Ee&&(ge.type===Xt||!ki(ge,ie)||ge.shapeFlag&198)?f(Ee):H;$(ge,ie,be,null,Y,ne,se,me,!0)}},ae=(M,L,H,Y,ne)=>{if(L!==H){if(L!==St)for(const se in L)!qs(se)&&!(se in H)&&s(M,se,L[se],null,ne,Y);for(const se in H){if(qs(se))continue;const me=H[se],fe=L[se];me!==fe&&se!=="value"&&s(M,se,fe,me,ne,Y)}"value"in H&&s(M,"value",L.value,H.value,ne)}},X=(M,L,H,Y,ne,se,me,fe,ge)=>{const ie=L.el=M?M.el:o(""),Ee=L.anchor=M?M.anchor:o("");let{patchFlag:be,dynamicChildren:Oe,slotScopeIds:Me}=L;Me&&(fe=fe?fe.concat(Me):Me),M==null?(n(ie,H,Y),n(Ee,H,Y),k(L.children||[],H,Ee,ne,se,me,fe,ge)):be>0&&be&64&&Oe&&M.dynamicChildren&&M.dynamicChildren.length===Oe.length?(Z(M.dynamicChildren,Oe,H,ne,se,me,fe),(L.key!=null||ne&&L===ne.subTree)&&j0(M,L,!0)):ce(M,L,H,Ee,ne,se,me,fe,ge)},le=(M,L,H,Y,ne,se,me,fe,ge)=>{L.slotScopeIds=fe,M==null?L.shapeFlag&512?ne.ctx.activate(L,H,Y,me,ge):W(L,H,Y,ne,se,me,ge):J(M,L,ge)},W=(M,L,H,Y,ne,se,me)=>{const fe=M.component=v2(M,Y,ne);if(rl(M)&&(fe.ctx.renderer=Ve),w2(fe,!1,me),fe.asyncDep){if(ne&&ne.registerDep(fe,te,me,se),!M.el){const ge=fe.subTree=Le(rr);S(null,ge,L,H),M.placeholder=ge.el}}else te(fe,M,L,H,ne,se,me)},J=(M,L,H)=>{const Y=L.component=M.component;if(e2(M,L,H))if(Y.asyncDep&&!Y.asyncResolved){L.el=M.el,L.placeholder=M.placeholder,ue(Y,L,H);return}else Y.next=L,Y.update();else L.el=M.el,L.placeholder=M.placeholder,Y.vnode=L},te=(M,L,H,Y,ne,se,me)=>{const fe=()=>{if(M.isMounted){let{next:be,bu:Oe,u:Me,parent:qe,vnode:je}=M;{const It=W0(M);if(It){be&&(be.el=je.el,ue(M,be,me)),It.asyncDep.then(()=>{cr(()=>{M.isUnmounted||ie()},ne)});return}}let Je=be,dt;yi(M,!1),be?(be.el=je.el,ue(M,be,me)):be=je,Oe&&xo(Oe),(dt=be.props&&be.props.onVnodeBeforeUpdate)&&Qr(dt,qe,be,je),yi(M,!0);const pt=Ip(M),Tt=M.subTree;M.subTree=pt,$(Tt,pt,f(Tt.el),it(Tt),M,ne,se),be.el=pt.el,Je===null&&t2(M,pt.el),Me&&cr(Me,ne),(dt=be.props&&be.props.onVnodeUpdated)&&cr(()=>Qr(dt,qe,be,je),ne)}else{let be;const{el:Oe,props:Me}=L,{bm:qe,m:je,parent:Je,root:dt,type:pt}=M,Tt=Xs(L);yi(M,!1),qe&&xo(qe),!Tt&&(be=Me&&Me.onVnodeBeforeMount)&&Qr(be,Je,L),yi(M,!0);{dt.ce&&dt.ce._hasShadowRoot()&&dt.ce._injectChildStyle(pt,M.parent?M.parent.type:void 0);const It=M.subTree=Ip(M);$(null,It,H,Y,M,ne,se),L.el=It.el}if(je&&cr(je,ne),!Tt&&(be=Me&&Me.onVnodeMounted)){const It=L;cr(()=>Qr(be,Je,It),ne)}(L.shapeFlag&256||Je&&Xs(Je.vnode)&&Je.vnode.shapeFlag&256)&&M.a&&cr(M.a,ne),M.isMounted=!0,L=H=Y=null}};M.scope.on();const ge=M.effect=new Zg(fe);M.scope.off();const ie=M.update=ge.run.bind(ge),Ee=M.job=ge.runIfDirty.bind(ge);Ee.i=M,Ee.id=M.uid,ge.scheduler=()=>Ld(Ee),yi(M,!0),ie()},ue=(M,L,H)=>{L.component=M;const Y=M.vnode.props;M.vnode=L,M.next=null,n2(M,L.props,Y,H),o2(M,L.children,H),un(),m0(M),dn()},ce=(M,L,H,Y,ne,se,me,fe,ge=!1)=>{const ie=M&&M.children,Ee=M?M.shapeFlag:0,be=L.children,{patchFlag:Oe,shapeFlag:Me}=L;if(Oe>0){if(Oe&128){ke(ie,be,H,Y,ne,se,me,fe,ge);return}else if(Oe&256){we(ie,be,H,Y,ne,se,me,fe,ge);return}}Me&8?(Ee&16&&yt(ie,ne,se),be!==ie&&p(H,be)):Ee&16?Me&16?ke(ie,be,H,Y,ne,se,me,fe,ge):yt(ie,ne,se,!0):(Ee&8&&p(H,""),Me&16&&k(be,H,Y,ne,se,me,fe,ge))},we=(M,L,H,Y,ne,se,me,fe,ge)=>{M=M||Ai,L=L||Ai;const ie=M.length,Ee=L.length,be=Math.min(ie,Ee);let Oe;for(Oe=0;Oe<be;Oe++){const Me=L[Oe]=ge?Sn(L[Oe]):rn(L[Oe]);$(M[Oe],Me,H,null,ne,se,me,fe,ge)}ie>Ee?yt(M,ne,se,!0,!1,be):k(L,H,Y,ne,se,me,fe,ge,be)},ke=(M,L,H,Y,ne,se,me,fe,ge)=>{let ie=0;const Ee=L.length;let be=M.length-1,Oe=Ee-1;for(;ie<=be&&ie<=Oe;){const Me=M[ie],qe=L[ie]=ge?Sn(L[ie]):rn(L[ie]);if(ki(Me,qe))$(Me,qe,H,null,ne,se,me,fe,ge);else break;ie++}for(;ie<=be&&ie<=Oe;){const Me=M[be],qe=L[Oe]=ge?Sn(L[Oe]):rn(L[Oe]);if(ki(Me,qe))$(Me,qe,H,null,ne,se,me,fe,ge);else break;be--,Oe--}if(ie>be){if(ie<=Oe){const Me=Oe+1,qe=Me<Ee?L[Me].el:Y;for(;ie<=Oe;)$(null,L[ie]=ge?Sn(L[ie]):rn(L[ie]),H,qe,ne,se,me,fe,ge),ie++}}else if(ie>Oe)for(;ie<=be;)$e(M[ie],ne,se,!0),ie++;else{const Me=ie,qe=ie,je=new Map;for(ie=qe;ie<=Oe;ie++){const Bt=L[ie]=ge?Sn(L[ie]):rn(L[ie]);Bt.key!=null&&je.set(Bt.key,ie)}let Je,dt=0;const pt=Oe-qe+1;let Tt=!1,It=0;const pr=new Array(pt);for(ie=0;ie<pt;ie++)pr[ie]=0;for(ie=Me;ie<=be;ie++){const Bt=M[ie];if(dt>=pt){$e(Bt,ne,se,!0);continue}let Vt;if(Bt.key!=null)Vt=je.get(Bt.key);else for(Je=qe;Je<=Oe;Je++)if(pr[Je-qe]===0&&ki(Bt,L[Je])){Vt=Je;break}Vt===void 0?$e(Bt,ne,se,!0):(pr[Vt-qe]=ie+1,Vt>=It?It=Vt:Tt=!0,$(Bt,L[Vt],H,null,ne,se,me,fe,ge),dt++)}const Jt=Tt?c2(pr):Ai;for(Je=Jt.length-1,ie=pt-1;ie>=0;ie--){const Bt=qe+ie,Vt=L[Bt],qr=L[Bt+1],Hr=Bt+1<Ee?qr.el||ld(qr):Y;pr[ie]===0?$(null,Vt,H,Hr,ne,se,me,fe,ge):Tt&&(Je<0||ie!==Jt[Je]?re(Vt,H,Hr,2):Je--)}}},re=(M,L,H,Y,ne=null)=>{const{el:se,type:me,transition:fe,children:ge,shapeFlag:ie}=M;if(ie&6){re(M.component.subTree,L,H,Y);return}if(ie&128){M.suspense.move(L,H,Y);return}if(ie&64){me.move(M,L,H,Ve);return}if(me===Xt){n(se,L,H);for(let be=0;be<ge.length;be++)re(ge[be],L,H,Y);n(M.anchor,L,H);return}if(me===So){A(M,L,H);return}if(Y!==2&&ie&1&&fe)if(Y===0)fe.persisted&&!se[kr]?n(se,L,H):(fe.beforeEnter(se),n(se,L,H),cr(()=>fe.enter(se),ne));else{const{leave:be,delayLeave:Oe,afterLeave:Me}=fe,qe=()=>{M.ctx.isUnmounted?i(se):n(se,L,H)},je=()=>{const Je=se._isLeaving||!!se[kr];se._isLeaving&&se[kr](!0),fe.persisted&&!Je?qe():be(se,()=>{qe(),Me&&Me()})};Oe?Oe(se,qe,je):je()}else n(se,L,H)},$e=(M,L,H,Y=!1,ne=!1)=>{const{type:se,props:me,ref:fe,children:ge,dynamicChildren:ie,shapeFlag:Ee,patchFlag:be,dirs:Oe,cacheIndex:Me,memo:qe}=M;if((be===-2||ie&&ie.hasOnce)&&(ne=!1),fe!=null&&(un(),Ks(fe,null,H,M,!0),dn()),Me!=null&&(!M.ctx||M.ctx===L)&&(L.renderCache[Me]=void 0),Ee&256){L.ctx.deactivate(M);return}const je=Ee&1&&Oe,Je=!Xs(M);let dt;if(Je&&(dt=me&&me.onVnodeBeforeUnmount)&&Qr(dt,L,M),Ee&6)mt(M.component,H,Y);else{if(Ee&128){M.suspense.unmount(H,Y);return}je&&gi(M,null,L,"beforeUnmount"),Ee&64?M.type.remove(M,L,H,Ve,Y):ie&&!ie.hasOnce&&(se!==Xt||be>0&&be&64)?yt(ie,L,H,!1,!0):(se===Xt&&be&384||!ne&&Ee&16)&&yt(ge,L,H),Y&&_e(M)}const pt=qe!=null&&Me==null;(Je&&(dt=me&&me.onVnodeUnmounted)||je||pt)&&cr(()=>{dt&&Qr(dt,L,M),je&&gi(M,null,L,"unmounted"),pt&&(M.el=null)},H)},_e=M=>{const{type:L,el:H,anchor:Y,transition:ne}=M,se=L===Xt;if(se&&!ne){xe(H,Y);return}if(L===So){E(M),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave();return}const me=se?na(M):M,fe=()=>{se?f(H)&&xe(H,Y):i(H),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(me&&me.shapeFlag&1&&ne&&!ne.persisted){const{leave:ge,delayLeave:ie}=ne,Ee=me.el,be=()=>ge(Ee,fe);ie?ie(Ee,fe,be):be()}else fe()},xe=(M,L)=>{let H;for(;M!==L;)H=g(M),i(M),M=H;i(L)},mt=(M,L,H)=>{const{bum:Y,scope:ne,job:se,subTree:me,um:fe,m:ge,a:ie}=M;zp(ge),zp(ie),Y&&xo(Y),ne.stop(),se?(se.flags|=8,$e(me,M,L,H)):M.vnode.el&&me&&(me.transition=M.vnode.transition,$e(me,M,L,H)),fe&&cr(fe,L),cr(()=>{M.isUnmounted=!0},L)},yt=(M,L,H,Y=!1,ne=!1,se=0)=>{for(let me=se;me<M.length;me++)$e(M[me],L,H,Y,ne)},it=M=>{if(M.shapeFlag&6)return it(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const L=g(M.anchor||M.el),H=L&&L[k_];return H?g(H):L},Et=(M,L,H)=>{const Y=M&&L._vnode?void 0:M&&M.component?M.component.uid:b2();__(()=>{M==null?L._vnode&&$e(L._vnode,null,null,!0):$(L._vnode||null,M,L,null,null,null,H),L._vnode=M},Y)},Ve={p:$,um:$e,m:re,r:_e,mt:W,mc:k,pc:ce,pbc:Z,n:it,o:e};return{render:Et,hydrate:void 0,createApp:K_(Et)}}function jl({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function yi({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function d2(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function j0(e,t,r=!1){const n=e.children,i=t.children;if(Re(n)&&Re(i))for(let s=0;s<n.length;s++){const a=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=Sn(i[s]),o.el=a.el),!r&&o.patchFlag!==-2&&j0(a,o)),o.type===sl&&(o.patchFlag===-1&&(o=i[s]=Sn(o)),o.el=a.el),o.type===rr&&!o.el&&(o.el=a.el)}}function c2(e){const t=e.slice(),r=[0];let n,i,s,a,o;const l=e.length;for(n=0;n<l;n++){const d=e[n];if(d!==0){if(i=r[r.length-1],e[i]<d){t[n]=i,r.push(n);continue}for(s=0,a=r.length-1;s<a;)o=s+a>>1,e[r[o]]<d?s=o+1:a=o;d<e[r[s]]&&(s>0&&(t[n]=r[s-1]),r[s]=n)}}for(s=r.length,a=r[s-1];s-- >0;)r[s]=a,a=t[a];return r}function W0(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:W0(t)}function zp(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ld(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ld(t.subTree):null}const q0=e=>e.__isSuspense;function p2(e,t){t&&t.pendingBranch?Re(e)?t.effects.push(...e):t.effects.push(e):w_(e)}const Xt=Symbol.for("v-fgt"),sl=Symbol.for("v-txt"),rr=Symbol.for("v-cmt"),So=Symbol.for("v-stc"),Ri=[];let br=null;function Ke(e=!1){Ri.push(br=e?null:[])}function H0(){Ri.pop(),br=Ri[Ri.length-1]||null}let ia=1;function Ro(e,t=!1){ia+=e,e<0&&br&&t&&(br.hasOnce=!0)}function G0(e){return e.dynamicChildren=ia>0?br||Ai:null,H0(),ia>0&&br&&br.push(e),e}function et(e,t,r,n,i,s){return G0(U(e,t,r,n,i,s,!0))}function Zs(e,t,r,n,i){return G0(Le(e,t,r,n,i,!0))}function sa(e){return e?e.__v_isVNode===!0:!1}function ki(e,t){return e.type===t.type&&e.key===t.key}const K0=({key:e})=>e??null,To=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?Rt(e)||nr(e)||We(e)?{i:Er,r:e,k:t,f:!!r}:e:null);function U(e,t=null,r=null,n=0,i=null,s=e===Xt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&K0(t),ref:t&&To(t),scopeId:b0,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Er};return o?(Bo(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=Rt(r)?8:16),ia>0&&!a&&br&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&br.push(l),l}const Le=f2;function f2(e,t=null,r=null,n=0,i=null,s=!1){if((!e||e===L_)&&(e=rr),sa(e)){const o=Yn(e,t,!0);return r&&Bo(o,r),ia>0&&!s&&br&&(o.shapeFlag&6?br[br.indexOf(e)]=o:br.push(o)),o.patchFlag=-2,o}if(S2(e)&&(e=e.__vccOpts),t){t=h2(t);let{class:o,style:l}=t;o&&!Rt(o)&&(t.class=sn(o)),gt(l)&&(Ud(l)&&!Re(l)&&(l=qt({},l)),t.style=is(l))}const a=Rt(e)?1:q0(e)?128:tl(e)?64:gt(e)?4:We(e)?2:0;return U(e,t,r,n,i,a,s,!0)}function h2(e){return e?Ud(e)||D0(e)?qt({},e):e:null}function Yn(e,t,r=!1,n=!1){const{props:i,ref:s,patchFlag:a,children:o,transition:l}=e,d=t?g2(i||{},t):i,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&K0(d),ref:t&&t.ref?r&&s?Re(s)?s.concat(To(t)):[s,To(t)]:To(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yn(e.ssContent),ssFallback:e.ssFallback&&Yn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&n&&os(p,l.clone(p)),p}function m2(e=" ",t=0){return Le(sl,null,e,t)}function Wl(e,t){const r=Le(So,null,e);return r.staticCount=t,r}function Nt(e="",t=!1){return t?(Ke(),Zs(rr,null,e)):Le(rr,null,e)}function rn(e){return e==null||typeof e=="boolean"?Le(rr):Re(e)?Le(Xt,null,e.slice()):sa(e)?Sn(e):Le(sl,null,String(e))}function Sn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Yn(e)}function Bo(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(Re(t))r=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),Bo(e,i()),i._c&&(i._d=!0));return}else{r=32;const i=t._;!i&&!D0(t)?t._ctx=Er:i===3&&Er&&(Er.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(We(t)){if(n&65){Bo(e,{default:t});return}t={default:t,_ctx:Er},r=32}else t=String(t),n&64?(r=16,t=[m2(t)]):r=8;e.children=t,e.shapeFlag|=r}function g2(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=sn([t.class,n.class]));else if(i==="style")t.style=is([t.style,n.style]);else if(Ko(i)){const s=t[i],a=n[i];a&&s!==a&&!(Re(s)&&s.includes(a))?t[i]=s?[].concat(s,a):a:a==null&&s==null&&!Xo(i)&&(t[i]=a)}else i!==""&&(t[i]=n[i])}return t}function Qr(e,t,r,n=null){Or(e,t,7,[r,n])}const y2=O0();let X0=0;function b2(){return X0}function v2(e,t,r){const n=e.type,i=(t?t.appContext:e.appContext)||y2,s={uid:X0++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new q1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:U0(n,i),emitsOptions:z0(n,i),emit:null,emitted:null,propsDefaults:St,inheritAttrs:n.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Y_.bind(null,s),e.ce&&e.ce(s),s}let ur=null;const Y0=()=>ur||Er;let Po,aa;{const e=Qo(),t=(r,n)=>{let i;return(i=e[r])||(i=e[r]=[]),i.push(n),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};Po=t("__VUE_INSTANCE_SETTERS__",r=>ur=r),aa=t("__VUE_SSR_SETTERS__",r=>oa=r)}const ga=e=>{const t=ur;return Po(e),e.scope.on(),()=>{e.scope.off(),Po(t)}},Mp=()=>{ur&&ur.scope.off(),Po(null)};function Z0(e){return e.vnode.shapeFlag&4}let oa=!1;function w2(e,t=!1,r=!1){t&&aa(t);const{props:n,children:i}=e.vnode,s=Z0(e);r2(e,n,s,t),a2(e,i,r||t);const a=s?_2(e,t):void 0;return t&&aa(!1),a}function _2(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,F_);const{setup:n}=r;if(n){un();const i=e.setupContext=n.length>1?$2(e):null,s=ga(e),a=fa(n,e,0,[e.props,i]),o=jg(a);if(dn(),s(),(o||e.sp)&&!Xs(e)&&k0(e),o){if(a.then(Mp,Mp),t)return a.then(l=>{aa(!0);try{Rp(e,l,t)}finally{aa(!1)}}).catch(l=>{el(l,e,0)});e.asyncDep=a}else Rp(e,a)}else Q0(e)}function Rp(e,t,r){We(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:gt(t)&&(e.setupState=p0(t)),Q0(e)}function Q0(e,t,r){const n=e.type;e.render||(e.render=n.render||on);{const i=ga(e);un();try{V_(e)}finally{dn(),i()}}}const x2={get(e,t){return tr(e,"get",""),e[t]}};function $2(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,x2),slots:e.slots,emit:e.emit,expose:t}}function al(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(p0(d_(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Ys)return Ys[r](e)},has(t,r){return r in t||r in Ys}})):e.proxy}function S2(e){return We(e)&&"__vccOpts"in e}const Qs=(e,t)=>m_(e,t,oa);function ud(e,t,r){try{Ro(-1);const n=arguments.length;return n===2?gt(t)&&!Re(t)?sa(t)?Le(e,null,[t]):Le(e,t):Le(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&sa(r)&&(r=[r]),Le(e,t,r))}finally{Ro(1)}}const T2="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dd;const Bp=typeof window<"u"&&window.trustedTypes;if(Bp)try{dd=Bp.createPolicy("vue",{createHTML:e=>e})}catch{}const J0=dd?e=>dd.createHTML(e):e=>e,k2="http://www.w3.org/2000/svg",C2="http://www.w3.org/1998/Math/MathML",$n=typeof document<"u"?document:null,Pp=$n&&$n.createElement("template"),E2={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const i=t==="svg"?$n.createElementNS(k2,e):t==="mathml"?$n.createElementNS(C2,e):r?$n.createElement(e,{is:r}):$n.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>$n.createTextNode(e),createComment:e=>$n.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$n.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,i,s){const a=r?r.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),r),!(i===s||!(i=i.nextSibling)););else{Pp.innerHTML=J0(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=Pp.content;if(n==="svg"||n==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,r)}return[a?a.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},Un="transition",Cs="animation",la=Symbol("_vtc"),ey={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},I2=qt({},x0,ey),A2=e=>(e.displayName="Transition",e.props=I2,e),O2=A2((e,{slots:t})=>ud(I_,z2(e),t)),bi=(e,t=[])=>{Re(e)?e.forEach(r=>r(...t)):e&&e(...t)},Dp=e=>e?Re(e)?e.some(t=>t.length>1):e.length>1:!1;function z2(e){const t={};for(const X in e)X in ey||(t[X]=e[X]);if(e.css===!1)return t;const{name:r="v",type:n,duration:i,enterFromClass:s=`${r}-enter-from`,enterActiveClass:a=`${r}-enter-active`,enterToClass:o=`${r}-enter-to`,appearFromClass:l=s,appearActiveClass:d=a,appearToClass:p=o,leaveFromClass:f=`${r}-leave-from`,leaveActiveClass:g=`${r}-leave-active`,leaveToClass:b=`${r}-leave-to`}=e,y=M2(i),$=y&&y[0],C=y&&y[1],{onBeforeEnter:S,onEnter:x,onEnterCancelled:A,onLeave:E,onLeaveCancelled:O,onBeforeAppear:D=S,onAppear:N=x,onAppearCancelled:k=A}=t,q=(X,le,W,J)=>{X._enterCancelled=J,vi(X,le?p:o),vi(X,le?d:a),W&&W()},Z=(X,le)=>{X._isLeaving=!1,vi(X,f),vi(X,b),vi(X,g),le&&le()},ae=X=>(le,W)=>{const J=X?N:x,te=()=>q(le,X,W);bi(J,[le,te]),Np(()=>{vi(le,X?l:s),wn(le,X?p:o),Dp(J)||Up(le,n,$,te)})};return qt(t,{onBeforeEnter(X){bi(S,[X]),wn(X,s),wn(X,a)},onBeforeAppear(X){bi(D,[X]),wn(X,l),wn(X,d)},onEnter:ae(!1),onAppear:ae(!0),onLeave(X,le){X._isLeaving=!0;const W=()=>Z(X,le);wn(X,f),X._enterCancelled?(wn(X,g),Vp(X)):(Vp(X),wn(X,g)),Np(()=>{X._isLeaving&&(vi(X,f),wn(X,b),Dp(E)||Up(X,n,C,W))}),bi(E,[X,W])},onEnterCancelled(X){q(X,!1,void 0,!0),bi(A,[X])},onAppearCancelled(X){q(X,!0,void 0,!0),bi(k,[X])},onLeaveCancelled(X){Z(X),bi(O,[X])}})}function M2(e){if(e==null)return null;if(gt(e))return[ql(e.enter),ql(e.leave)];{const t=ql(e);return[t,t]}}function ql(e){return P1(e)}function wn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e[la]||(e[la]=new Set)).add(t)}function vi(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const r=e[la];r&&(r.delete(t),r.size||(e[la]=void 0))}function Np(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let R2=0;function Up(e,t,r,n){const i=e._endId=++R2,s=()=>{i===e._endId&&n()};if(r!=null)return setTimeout(s,r);const{type:a,timeout:o,propCount:l}=B2(e,t);if(!a)return n();const d=a+"end";let p=0;const f=()=>{e.removeEventListener(d,g),s()},g=b=>{b.target===e&&++p>=l&&f()};setTimeout(()=>{p<l&&f()},o+1),e.addEventListener(d,g)}function B2(e,t){const r=window.getComputedStyle(e),n=y=>(r[y]||"").split(", "),i=n(`${Un}Delay`),s=n(`${Un}Duration`),a=Lp(i,s),o=n(`${Cs}Delay`),l=n(`${Cs}Duration`),d=Lp(o,l);let p=null,f=0,g=0;t===Un?a>0&&(p=Un,f=a,g=s.length):t===Cs?d>0&&(p=Cs,f=d,g=l.length):(f=Math.max(a,d),p=f>0?a>d?Un:Cs:null,g=p?p===Un?s.length:l.length:0);const b=p===Un&&/\b(?:transform|all)(?:,|$)/.test(n(`${Un}Property`).toString());return{type:p,timeout:f,propCount:g,hasTransform:b}}function Lp(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>Fp(r)+Fp(e[n])))}function Fp(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Vp(e){return(e?e.ownerDocument:document).body.offsetHeight}function P2(e,t,r){const n=e[la];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const jp=Symbol("_vod"),D2=Symbol("_vsh"),N2=Symbol(""),U2=/(?:^|;)\s*display\s*:/;function L2(e,t,r){const n=e.style,i=Rt(r);let s=!1;if(r&&!i){if(t)if(Rt(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();r[o]==null&&Ls(n,o,"")}else for(const a in t)r[a]==null&&Ls(n,a,"");for(const a in r){a==="display"&&(s=!0);const o=r[a];o!=null?V2(e,a,!Rt(t)&&t?t[a]:void 0,o)||Ls(n,a,o):Ls(n,a,"")}}else if(i){if(t!==r){const a=n[N2];a&&(r+=";"+a),n.cssText=r,s=U2.test(r)}}else t&&e.removeAttribute("style");jp in e&&((!i||t!==r)&&(e[jp]=s?n.display:""),e[D2]&&(n.display="none"))}const to=/\s*!important$/;function Ls(e,t,r){if(Re(r))r.forEach(n=>Ls(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))to.test(r)?e.setProperty(t,r.replace(to,""),"important"):e.setProperty(t,r);else{const n=F2(e,t);to.test(r)?e.setProperty(Li(n),r.replace(to,""),"important"):e[n]=r}}const Wp=["Webkit","Moz","ms"],Hl={};function F2(e,t){const r=Hl[t];if(r)return r;let n=Vr(t);if(n!=="filter"&&n in e)return Hl[t]=n;n=Hg(n);for(let i=0;i<Wp.length;i++){const s=Wp[i]+n;if(s in e)return Hl[t]=s}return t}function V2(e,t,r,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Rt(n)&&r===n}const qp="http://www.w3.org/1999/xlink";function Hp(e,t,r,n,i,s=V1(t)){n&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(qp,t.slice(6,t.length)):e.setAttributeNS(qp,t,r):r==null||s&&!Kg(r)?e.removeAttribute(t):e.setAttribute(t,s?"":ln(r)?String(r):r)}function Gp(e,t,r,n,i){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?J0(r):r);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,l=r==null?e.type==="checkbox"?"on":"":String(r);(o!==l||!("_value"in e))&&(e.value=l),r==null&&e.removeAttribute(t),e._value=r;return}let a=!1;if(r===""||r==null){const o=typeof e[t];o==="boolean"?r=Kg(r):r==null&&o==="string"?(r="",a=!0):o==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(i||t)}function Hn(e,t,r,n){e.addEventListener(t,r,n)}function j2(e,t,r,n){e.removeEventListener(t,r,n)}const Kp=Symbol("_vei");function W2(e,t,r,n,i=null){const s=e[Kp]||(e[Kp]={}),a=s[t];if(n&&a)a.value=n;else{const[o,l]=G2(t);if(n){const d=s[t]=Y2(n,i);Hn(e,o,d,l)}else a&&(j2(e,o,a,l),s[t]=void 0)}}const q2=/(Once|Passive|Capture)$/,H2=/^on:?(?:Once|Passive|Capture)$/;function G2(e){let t,r;for(;(r=e.match(q2))&&!H2.test(e);)t||(t={}),e=e.slice(0,e.length-r[1].length),t[r[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Li(e.slice(2)),t]}let Gl=0;const K2=Promise.resolve(),X2=()=>Gl||(K2.then(()=>Gl=0),Gl=Date.now());function Y2(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;const i=r.value;if(Re(i)){const s=n.stopImmediatePropagation;n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0};const a=i.slice(),o=[n];for(let l=0;l<a.length&&!n._stopped;l++){const d=a[l];d&&Or(d,t,5,o)}}else Or(i,t,5,[n])};return r.value=e,r.attached=X2(),r}const Xp=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Z2=(e,t,r,n,i,s)=>{const a=i==="svg";t==="class"?P2(e,n,a):t==="style"?L2(e,r,n):Ko(t)?Xo(t)||W2(e,t,r,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Q2(e,t,n,a))?(Gp(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Hp(e,t,n,a,s,t!=="value")):e._isVueCE&&(J2(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Rt(n)))?Gp(e,Vr(t),n,s,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Hp(e,t,n,a))};function Q2(e,t,r,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Xp(t)&&We(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Xp(t)&&Rt(r)?!1:t in e}function J2(e,t){const r=e._def.props;if(!r)return!1;const n=Vr(t);return Array.isArray(r)?r.some(i=>Vr(i)===n):Object.keys(r).some(i=>Vr(i)===n)}const us=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Re(t)?r=>xo(t,r):t};function ex(e){e.target.composing=!0}function Yp(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const an=Symbol("_assign"),ro=Symbol("_initialValue");function Kl(e,t,r){return t&&(e=e.trim()),r&&(e=Zo(e)),e}const zi={created(e,{modifiers:{lazy:t,trim:r,number:n}},i){e.parentNode&&(e.type==="text"?e[ro]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[ro]=e.defaultValue.replace(/\r\n?/g,`
`))),e[an]=us(i);const s=n||i.props&&i.props.type==="number";Hn(e,t?"change":"input",a=>{a.target.composing||e[an](Kl(e.value,r,s))}),(r||s)&&Hn(e,"change",()=>{e.value=Kl(e.value,r,s)}),t||(Hn(e,"compositionstart",ex),Hn(e,"compositionend",Yp),Hn(e,"change",Yp))},mounted(e,{value:t,modifiers:{trim:r,number:n}}){const i=t??"",s=e[ro];delete e[ro],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[an](Kl(e.value,r,n)):e.value=i},beforeUpdate(e,{value:t,oldValue:r,modifiers:{lazy:n,trim:i,number:s}},a){if(e[an]=us(a),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?Zo(e.value):e.value,l=t??"";if(o===l)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(n&&t===r||i&&e.value.trim()===l)||(e.value=l)}},cd={deep:!0,created(e,t,r){e[an]=us(r),Hn(e,"change",()=>{const n=e._modelValue,i=ua(e),s=e.checked,a=e[an];if(Re(n)){const o=zd(n,i),l=o!==-1;if(s&&!l)a(n.concat(i));else if(!s&&l){const d=[...n];d.splice(o,1),a(d)}}else if(En(n)){const o=new Set(n);s?o.add(i):o.delete(i),a(o)}else a(ry(e,s))})},mounted:Zp,beforeUpdate(e,t,r){e[an]=us(r),Zp(e,t,r)}};function Zp(e,{value:t,oldValue:r},n){e._modelValue=t;let i;if(Re(t))i=zd(t,n.props.value)>-1;else if(En(t))i=t.has(n.props.value);else{if(t===r)return;i=In(t,ry(e,!0))}e.checked!==i&&(e.checked=i)}const ty={deep:!0,created(e,{value:t,modifiers:{number:r}},n){e._modelValue=t,Hn(e,"change",()=>{const i=Array.prototype.filter.call(e.options,l=>l.selected).map(l=>r?Zo(ua(l)):ua(l)),s=e.multiple,a=s?En(e._modelValue)?new Set(i):i:i[0],o=e._pendingValue=[s,s?Re(a)?i.slice():i:a];try{e[an](a)}finally{Oi(()=>{e._pendingValue===o&&(e._pendingValue=void 0)})}}),e[an]=us(n)},mounted(e,{value:t}){Qp(e,t)},beforeUpdate(e,{value:t},r){e._modelValue=t,e[an]=us(r)},updated(e,{value:t}){const r=e._pendingValue;e._pendingValue=void 0,(!r||r[0]!==e.multiple||!tx(t,r[1],r[0]))&&Qp(e,t)}};function tx(e,t,r){if(!r||Re(e))return In(e,t);if(En(e)){if(e.size!==t.length)return!1;for(const n of t)if(!e.has(n))return!1;return!0}return!1}function Qp(e,t){const r=e.multiple,n=Re(t);if(!(r&&!n&&!En(t))){for(let i=0,s=e.options.length;i<s;i++){const a=e.options[i],o=ua(a);if(r)if(n){const l=typeof o;l==="string"||l==="number"?a.selected=t.some(d=>String(d)===String(o)):a.selected=zd(t,o)>-1}else a.selected=t.has(o);else if(In(ua(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ua(e){return"_value"in e?e._value:e.value}function ry(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const rx=["ctrl","shift","alt","meta"],nx={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>rx.some(r=>e[`${r}Key`]&&!t.includes(r))},no=(e,t)=>{if(!e)return e;const r=e._withMods||(e._withMods={}),n=t.join(".");return r[n]||(r[n]=(i,...s)=>{for(let a=0;a<t.length;a++){const o=nx[t[a]];if(o&&o(i,t))return}return e(i,...s)})},ix=qt({patchProp:Z2},E2);let Jp;function sx(){return Jp||(Jp=l2(ix))}const ax=(...e)=>{const t=sx().createApp(...e),{mount:r}=t;return t.mount=n=>{const i=lx(n);if(!i)return;const s=t._component;!We(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=r(i,!1,ox(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function ox(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function lx(e){return Rt(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var io={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ft=(e,t)=>({size:r,strokeWidth:n=2,absoluteStrokeWidth:i,color:s,class:a,...o},{attrs:l,slots:d})=>ud("svg",{...io,width:r||io.width,height:r||io.height,stroke:s||io.stroke,"stroke-width":i?Number(n)*24/Number(r):n,...l,class:["lucide",`lucide-${ux(e)}`],...o},[...t.map(p=>ud(...p)),...d.default?[d.default()]:[]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=Ft("CameraIcon",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=Ft("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=Ft("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Ft("LayersIcon",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=Ft("Loader2Icon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=Ft("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=Ft("PlusCircleIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=Ft("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=Ft("PrinterIcon",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=Ft("RefreshCwIcon",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=Ft("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=Ft("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=Ft("ScissorsIcon",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=Ft("SparklesIcon",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=Ft("UploadCloudIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=Ft("UploadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=Ft("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=Ft("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=Ft("ZoomInIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=Ft("ZoomOutIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Sx=25.4,Tx=300;function ds(e,t=Tx){return Math.round(e/Sx*t)}const Xl=[{id:"spec_1_inch",name:"标准 1 寸",widthMm:25,heightMm:35,widthPx:295,heightPx:413,description:"适用于驾照、体检表、普通证件、求职简历"},{id:"spec_large_1_inch",name:"大 1 寸",widthMm:33,heightMm:48,widthPx:390,heightPx:567,description:"适用于普通中国护照、港澳通行证、各类职业资格考试"},{id:"spec_2_inch",name:"标准 2 寸",widthMm:35,heightMm:49,widthPx:413,heightPx:579,description:"适用于各类证书、签证申请、学历学位证明"},{id:"spec_small_2_inch",name:"小 2 寸",widthMm:35,heightMm:45,widthPx:413,heightPx:531,description:"适用于东南亚签证、部分欧美申根签证"},{id:"spec_cet",name:"英语四六级 (CET)",widthMm:33,heightMm:48,widthPx:390,heightPx:567,description:"全国大学英语四、六级考试官方报名标准"},{id:"spec_teacher",name:"教师资格证 (NTCE)",widthMm:35,heightMm:53,widthPx:413,heightPx:626,description:"中小学教师资格考试网报标准尺寸"},{id:"spec_ncre",name:"计算机等级考试 (NCRE)",widthMm:25,heightMm:34,widthPx:300,heightPx:400,description:"全国计算机等级考试网报标准"},{id:"spec_civil_service",name:"国家公务员考试 (国考)",widthMm:35,heightMm:45,widthPx:413,heightPx:531,description:"中央机关及其直属机构公务员招考标准"}];function kx(e,t,r,n){let i=0,s=0,a=0,o=0;return i=t,s=r,a=ds(t),o=ds(r),{id:`custom_${Date.now()}`,name:e||`自定义 (${i}×${s}mm)`,widthMm:i,heightMm:s,widthPx:a,heightPx:o,description:`自定义尺寸 ${i}×${s} mm (${a}×${o} px)`,isCustom:!0}}const fd=[{id:"bg_original",name:"原图背景",value:"original",previewClass:"bg-slate-700 border border-slate-600"},{id:"bg_white",name:"纯白底",value:"#FFFFFF",previewClass:"bg-white border border-gray-300"},{id:"bg_blue",name:"标准蓝",value:"#438EDB",previewClass:"bg-[#438EDB]"},{id:"bg_red",name:"中国红",value:"#D9001B",previewClass:"bg-[#D9001B]"},{id:"bg_gray_grad",name:"高级灰",value:"linear-gradient(180deg, #F3F4F6 0%, #D1D5DB 100%)",previewClass:"bg-gradient-to-b from-gray-100 to-gray-300",isGradient:!0,gradientStops:["#F3F4F6","#9CA3AF"]},{id:"bg_blue_grad",name:"冲印蓝",value:"linear-gradient(180deg, #60A5FA 0%, #1D4ED8 100%)",previewClass:"bg-gradient-to-b from-blue-400 to-blue-700",isGradient:!0,gradientStops:["#60A5FA","#1D4ED8"]},{id:"bg_transparent",name:"透明底 (PNG)",value:"transparent",previewClass:"bg-transparent border-2 border-dashed border-gray-400"}],so=[{id:"paper_6_inch",name:"6 寸照片纸 (横版 152×102mm)",widthMm:152,heightMm:102,widthPx:1795,heightPx:1205,description:"标准冲印 6 寸相纸 (4R)，最常用的家用相纸规格"},{id:"paper_6_inch_v",name:"6 寸照片纸 (竖版 102×152mm)",widthMm:102,heightMm:152,widthPx:1205,heightPx:1795,description:"标准冲印 6 寸相纸竖版"},{id:"paper_a4",name:"标准 A4 纸 (210×297mm)",widthMm:210,heightMm:297,widthPx:2480,heightPx:3508,description:"标准办公室 A4 打印纸 (300 DPI 高清输出)"}];var Yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},iy={};(function(){var e;function t(u){var m=0;return function(){return m<u.length?{done:!1,value:u[m++]}:{done:!0}}}var r=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yl=="object"&&Yl];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=n(this);function s(u,m){if(m)e:{var v=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var z=u[T];if(!(z in v))break e;v=v[z]}u=u[u.length-1],T=v[u],m=m(T),m!=T&&m!=null&&r(v,u,{configurable:!0,writable:!0,value:m})}}s("Symbol",function(u){function m(B){if(this instanceof m)throw new TypeError("Symbol is not a constructor");return new v(T+(B||"")+"_"+z++,B)}function v(B,R){this.h=B,r(this,"description",{configurable:!0,writable:!0,value:R})}if(u)return u;v.prototype.toString=function(){return this.h};var T="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",z=0;return m}),s("Symbol.iterator",function(u){if(u)return u;u=Symbol("Symbol.iterator");for(var m="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),v=0;v<m.length;v++){var T=i[m[v]];typeof T=="function"&&typeof T.prototype[u]!="function"&&r(T.prototype,u,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return u});function a(u){return u={next:u},u[Symbol.iterator]=function(){return this},u}function o(u){var m=typeof Symbol<"u"&&Symbol.iterator&&u[Symbol.iterator];return m?m.call(u):{next:t(u)}}function l(u){if(!(u instanceof Array)){u=o(u);for(var m,v=[];!(m=u.next()).done;)v.push(m.value);u=v}return u}var d=typeof Object.assign=="function"?Object.assign:function(u,m){for(var v=1;v<arguments.length;v++){var T=arguments[v];if(T)for(var z in T)Object.prototype.hasOwnProperty.call(T,z)&&(u[z]=T[z])}return u};s("Object.assign",function(u){return u||d});var p=typeof Object.create=="function"?Object.create:function(u){function m(){}return m.prototype=u,new m},f;if(typeof Object.setPrototypeOf=="function")f=Object.setPrototypeOf;else{var g;e:{var b={a:!0},y={};try{y.__proto__=b,g=y.a;break e}catch{}g=!1}f=g?function(u,m){if(u.__proto__=m,u.__proto__!==m)throw new TypeError(u+" is not extensible");return u}:null}var $=f;function C(u,m){if(u.prototype=p(m.prototype),u.prototype.constructor=u,$)$(u,m);else for(var v in m)if(v!="prototype")if(Object.defineProperties){var T=Object.getOwnPropertyDescriptor(m,v);T&&Object.defineProperty(u,v,T)}else u[v]=m[v];u.za=m.prototype}function S(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function x(u){if(u.m)throw new TypeError("Generator is already running");u.m=!0}S.prototype.u=function(u){this.i=u};function A(u,m){u.l={ma:m,na:!0},u.h=u.s||u.v}S.prototype.return=function(u){this.l={return:u},this.h=this.v};function E(u,m,v){return u.h=v,{value:m}}function O(u){this.h=new S,this.i=u}function D(u,m){x(u.h);var v=u.h.j;return v?N(u,"return"in v?v.return:function(T){return{value:T,done:!0}},m,u.h.return):(u.h.return(m),k(u))}function N(u,m,v,T){try{var z=m.call(u.h.j,v);if(!(z instanceof Object))throw new TypeError("Iterator result "+z+" is not an object");if(!z.done)return u.h.m=!1,z;var B=z.value}catch(R){return u.h.j=null,A(u.h,R),k(u)}return u.h.j=null,T.call(u.h,B),k(u)}function k(u){for(;u.h.h;)try{var m=u.i(u.h);if(m)return u.h.m=!1,{value:m.value,done:!1}}catch(v){u.h.i=void 0,A(u.h,v)}if(u.h.m=!1,u.h.l){if(m=u.h.l,u.h.l=null,m.na)throw m.ma;return{value:m.return,done:!0}}return{value:void 0,done:!0}}function q(u){this.next=function(m){return x(u.h),u.h.j?m=N(u,u.h.j.next,m,u.h.u):(u.h.u(m),m=k(u)),m},this.throw=function(m){return x(u.h),u.h.j?m=N(u,u.h.j.throw,m,u.h.u):(A(u.h,m),m=k(u)),m},this.return=function(m){return D(u,m)},this[Symbol.iterator]=function(){return this}}function Z(u){function m(T){return u.next(T)}function v(T){return u.throw(T)}return new Promise(function(T,z){function B(R){R.done?T(R.value):Promise.resolve(R.value).then(m,v).then(B,z)}B(u.next())})}function ae(u){return Z(new q(new O(u)))}s("Promise",function(u){function m(R){this.i=0,this.j=void 0,this.h=[],this.u=!1;var F=this.l();try{R(F.resolve,F.reject)}catch(G){F.reject(G)}}function v(){this.h=null}function T(R){return R instanceof m?R:new m(function(F){F(R)})}if(u)return u;v.prototype.i=function(R){if(this.h==null){this.h=[];var F=this;this.j(function(){F.m()})}this.h.push(R)};var z=i.setTimeout;v.prototype.j=function(R){z(R,0)},v.prototype.m=function(){for(;this.h&&this.h.length;){var R=this.h;this.h=[];for(var F=0;F<R.length;++F){var G=R[F];R[F]=null;try{G()}catch(de){this.l(de)}}}this.h=null},v.prototype.l=function(R){this.j(function(){throw R})},m.prototype.l=function(){function R(de){return function(ve){G||(G=!0,de.call(F,ve))}}var F=this,G=!1;return{resolve:R(this.I),reject:R(this.m)}},m.prototype.I=function(R){if(R===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(R instanceof m)this.L(R);else{e:switch(typeof R){case"object":var F=R!=null;break e;case"function":F=!0;break e;default:F=!1}F?this.F(R):this.s(R)}},m.prototype.F=function(R){var F=void 0;try{F=R.then}catch(G){this.m(G);return}typeof F=="function"?this.M(F,R):this.s(R)},m.prototype.m=function(R){this.v(2,R)},m.prototype.s=function(R){this.v(1,R)},m.prototype.v=function(R,F){if(this.i!=0)throw Error("Cannot settle("+R+", "+F+"): Promise already settled in state"+this.i);this.i=R,this.j=F,this.i===2&&this.K(),this.H()},m.prototype.K=function(){var R=this;z(function(){if(R.D()){var F=i.console;typeof F<"u"&&F.error(R.j)}},1)},m.prototype.D=function(){if(this.u)return!1;var R=i.CustomEvent,F=i.Event,G=i.dispatchEvent;return typeof G>"u"?!0:(typeof R=="function"?R=new R("unhandledrejection",{cancelable:!0}):typeof F=="function"?R=new F("unhandledrejection",{cancelable:!0}):(R=i.document.createEvent("CustomEvent"),R.initCustomEvent("unhandledrejection",!1,!0,R)),R.promise=this,R.reason=this.j,G(R))},m.prototype.H=function(){if(this.h!=null){for(var R=0;R<this.h.length;++R)B.i(this.h[R]);this.h=null}};var B=new v;return m.prototype.L=function(R){var F=this.l();R.T(F.resolve,F.reject)},m.prototype.M=function(R,F){var G=this.l();try{R.call(F,G.resolve,G.reject)}catch(de){G.reject(de)}},m.prototype.then=function(R,F){function G(ze,Se){return typeof ze=="function"?function(Pe){try{de(ze(Pe))}catch(He){ve(He)}}:Se}var de,ve,De=new m(function(ze,Se){de=ze,ve=Se});return this.T(G(R,de),G(F,ve)),De},m.prototype.catch=function(R){return this.then(void 0,R)},m.prototype.T=function(R,F){function G(){switch(de.i){case 1:R(de.j);break;case 2:F(de.j);break;default:throw Error("Unexpected state: "+de.i)}}var de=this;this.h==null?B.i(G):this.h.push(G),this.u=!0},m.resolve=T,m.reject=function(R){return new m(function(F,G){G(R)})},m.race=function(R){return new m(function(F,G){for(var de=o(R),ve=de.next();!ve.done;ve=de.next())T(ve.value).T(F,G)})},m.all=function(R){var F=o(R),G=F.next();return G.done?T([]):new m(function(de,ve){function De(Pe){return function(He){ze[Pe]=He,Se--,Se==0&&de(ze)}}var ze=[],Se=0;do ze.push(void 0),Se++,T(G.value).T(De(ze.length-1),ve),G=F.next();while(!G.done)})},m});function X(u,m){u instanceof String&&(u+="");var v=0,T=!1,z={next:function(){if(!T&&v<u.length){var B=v++;return{value:m(B,u[B]),done:!1}}return T=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}s("Array.prototype.keys",function(u){return u||function(){return X(this,function(m){return m})}}),s("Array.prototype.fill",function(u){return u||function(m,v,T){var z=this.length||0;for(0>v&&(v=Math.max(0,z+v)),(T==null||T>z)&&(T=z),T=Number(T),0>T&&(T=Math.max(0,z+T)),v=Number(v||0);v<T;v++)this[v]=m;return this}});function le(u){return u||Array.prototype.fill}s("Int8Array.prototype.fill",le),s("Uint8Array.prototype.fill",le),s("Uint8ClampedArray.prototype.fill",le),s("Int16Array.prototype.fill",le),s("Uint16Array.prototype.fill",le),s("Int32Array.prototype.fill",le),s("Uint32Array.prototype.fill",le),s("Float32Array.prototype.fill",le),s("Float64Array.prototype.fill",le),s("Object.is",function(u){return u||function(m,v){return m===v?m!==0||1/m===1/v:m!==m&&v!==v}}),s("Array.prototype.includes",function(u){return u||function(m,v){var T=this;T instanceof String&&(T=String(T));var z=T.length;for(v=v||0,0>v&&(v=Math.max(v+z,0));v<z;v++){var B=T[v];if(B===m||Object.is(B,m))return!0}return!1}}),s("String.prototype.includes",function(u){return u||function(m,v){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(m instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(m,v||0)!==-1}});var W=this||self;function J(u,m){u=u.split(".");var v=W;u[0]in v||typeof v.execScript>"u"||v.execScript("var "+u[0]);for(var T;u.length&&(T=u.shift());)u.length||m===void 0?v[T]&&v[T]!==Object.prototype[T]?v=v[T]:v=v[T]={}:v[T]=m}function te(u){var m;e:{if((m=W.navigator)&&(m=m.userAgent))break e;m=""}return m.indexOf(u)!=-1}var ue=Array.prototype.map?function(u,m){return Array.prototype.map.call(u,m,void 0)}:function(u,m){for(var v=u.length,T=Array(v),z=typeof u=="string"?u.split(""):u,B=0;B<v;B++)B in z&&(T[B]=m.call(void 0,z[B],B,u));return T},ce={},we=null;function ke(u){var m=u.length,v=3*m/4;v%3?v=Math.floor(v):"=.".indexOf(u[m-1])!=-1&&(v="=.".indexOf(u[m-2])!=-1?v-2:v-1);var T=new Uint8Array(v),z=0;return re(u,function(B){T[z++]=B}),z!==v?T.subarray(0,z):T}function re(u,m){function v(G){for(;T<u.length;){var de=u.charAt(T++),ve=we[de];if(ve!=null)return ve;if(!/^[\s\xa0]*$/.test(de))throw Error("Unknown base64 encoding at char: "+de)}return G}$e();for(var T=0;;){var z=v(-1),B=v(0),R=v(64),F=v(64);if(F===64&&z===-1)break;m(z<<2|B>>4),R!=64&&(m(B<<4&240|R>>2),F!=64&&m(R<<6&192|F))}}function $e(){if(!we){we={};for(var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),m=["+/=","+/","-_=","-_.","-_"],v=0;5>v;v++){var T=u.concat(m[v].split(""));ce[v]=T;for(var z=0;z<T.length;z++){var B=T[z];we[B]===void 0&&(we[B]=z)}}}}var _e=typeof Uint8Array<"u",xe=!(te("Trident")||te("MSIE"))&&typeof W.btoa=="function";function mt(u){if(!xe){var m;m===void 0&&(m=0),$e(),m=ce[m];for(var v=Array(Math.floor(u.length/3)),T=m[64]||"",z=0,B=0;z<u.length-2;z+=3){var R=u[z],F=u[z+1],G=u[z+2],de=m[R>>2];R=m[(R&3)<<4|F>>4],F=m[(F&15)<<2|G>>6],G=m[G&63],v[B++]=de+R+F+G}switch(de=0,G=T,u.length-z){case 2:de=u[z+1],G=m[(de&15)<<2]||T;case 1:u=u[z],v[B]=m[u>>2]+m[(u&3)<<4|de>>4]+G+T}return v.join("")}for(m="";10240<u.length;)m+=String.fromCharCode.apply(null,u.subarray(0,10240)),u=u.subarray(10240);return m+=String.fromCharCode.apply(null,u),btoa(m)}var yt=RegExp("[-_.]","g");function it(u){switch(u){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Et(u){if(!xe)return ke(u);yt.test(u)&&(u=u.replace(yt,it)),u=atob(u);for(var m=new Uint8Array(u.length),v=0;v<u.length;v++)m[v]=u.charCodeAt(v);return m}var Ve;function ot(){return Ve||(Ve=new Uint8Array(0))}var M={},L=typeof Uint8Array.prototype.slice=="function",H=0,Y=0;function ne(u){var m=0>u;u=Math.abs(u);var v=u>>>0;u=Math.floor((u-v)/4294967296),m&&(v=o(me(v,u)),m=v.next().value,u=v.next().value,v=m),H=v>>>0,Y=u>>>0}var se=typeof BigInt=="function";function me(u,m){return m=~m,u?u=~u+1:m+=1,[u,m]}function fe(u,m){this.i=u>>>0,this.h=m>>>0}function ge(u){if(!u)return ie||(ie=new fe(0,0));if(!/^-?\d+$/.test(u))return null;if(16>u.length)ne(Number(u));else if(se)u=BigInt(u),H=Number(u&BigInt(4294967295))>>>0,Y=Number(u>>BigInt(32)&BigInt(4294967295));else{var m=+(u[0]==="-");Y=H=0;for(var v=u.length,T=m,z=(v-m)%6+m;z<=v;T=z,z+=6)T=Number(u.slice(T,z)),Y*=1e6,H=1e6*H+T,4294967296<=H&&(Y+=H/4294967296|0,H%=4294967296);m&&(m=o(me(H,Y)),u=m.next().value,m=m.next().value,H=u,Y=m)}return new fe(H,Y)}var ie;function Ee(u,m){return Error("Invalid wire type: "+u+" (at position "+m+")")}function be(){return Error("Failed to read varint, encoding is invalid.")}function Oe(u,m){return Error("Tried to read past the end of the data "+m+" > "+u)}function Me(){throw Error("Invalid UTF8")}function qe(u,m){return m=String.fromCharCode.apply(null,m),u==null?m:u+m}var je=void 0,Je,dt=typeof TextDecoder<"u",pt,Tt=typeof TextEncoder<"u",It;function pr(u){if(u!==M)throw Error("illegal external caller")}function Jt(u,m){if(pr(m),this.V=u,u!=null&&u.length===0)throw Error("ByteString should be constructed with non-empty values")}function Bt(){return It||(It=new Jt(null,M))}function Vt(u){pr(M);var m=u.V;return m=m==null||_e&&m!=null&&m instanceof Uint8Array?m:typeof m=="string"?Et(m):null,m==null?m:u.V=m}function qr(u){if(typeof u=="string")return{buffer:Et(u),C:!1};if(Array.isArray(u))return{buffer:new Uint8Array(u),C:!1};if(u.constructor===Uint8Array)return{buffer:u,C:!1};if(u.constructor===ArrayBuffer)return{buffer:new Uint8Array(u),C:!1};if(u.constructor===Jt)return{buffer:Vt(u)||ot(),C:!0};if(u instanceof Uint8Array)return{buffer:new Uint8Array(u.buffer,u.byteOffset,u.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Hr(u,m){this.i=null,this.m=!1,this.h=this.j=this.l=0,Jn(this,u,m)}function Jn(u,m,v){v=v===void 0?{}:v,u.S=v.S===void 0?!1:v.S,m&&(m=qr(m),u.i=m.buffer,u.m=m.C,u.l=0,u.j=u.i.length,u.h=u.l)}Hr.prototype.reset=function(){this.h=this.l};function Mr(u,m){if(u.h=m,m>u.j)throw Oe(u.j,m)}function oe(u){var m=u.i,v=u.h,T=m[v++],z=T&127;if(T&128&&(T=m[v++],z|=(T&127)<<7,T&128&&(T=m[v++],z|=(T&127)<<14,T&128&&(T=m[v++],z|=(T&127)<<21,T&128&&(T=m[v++],z|=T<<28,T&128&&m[v++]&128&&m[v++]&128&&m[v++]&128&&m[v++]&128&&m[v++]&128)))))throw be();return Mr(u,v),z}function V(u,m){if(0>m)throw Error("Tried to read a negative byte length: "+m);var v=u.h,T=v+m;if(T>u.j)throw Oe(m,u.j-v);return u.h=T,v}var he=[];function lt(){this.h=[]}lt.prototype.length=function(){return this.h.length},lt.prototype.end=function(){var u=this.h;return this.h=[],u};function Ht(u,m,v){for(;0<v||127<m;)u.h.push(m&127|128),m=(m>>>7|v<<25)>>>0,v>>>=7;u.h.push(m)}function Pt(u,m){for(;127<m;)u.h.push(m&127|128),m>>>=7;u.h.push(m)}function Yt(u,m){if(he.length){var v=he.pop();Jn(v,u,m),u=v}else u=new Hr(u,m);this.h=u,this.j=this.h.h,this.i=this.l=-1,this.setOptions(m)}Yt.prototype.setOptions=function(u){u=u===void 0?{}:u,this.ca=u.ca===void 0?!1:u.ca},Yt.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function fn(u){var m=u.h;if(m.h==m.j)return!1;u.j=u.h.h;var v=oe(u.h)>>>0;if(m=v>>>3,v&=7,!(0<=v&&5>=v))throw Ee(v,u.j);if(1>m)throw Error("Invalid field number: "+m+" (at position "+u.j+")");return u.l=m,u.i=v,!0}function ei(u){switch(u.i){case 0:if(u.i!=0)ei(u);else e:{u=u.h;for(var m=u.h,v=m+10,T=u.i;m<v;)if(!(T[m++]&128)){Mr(u,m);break e}throw be()}break;case 1:u=u.h,Mr(u,u.h+8);break;case 2:u.i!=2?ei(u):(m=oe(u.h)>>>0,u=u.h,Mr(u,u.h+m));break;case 5:u=u.h,Mr(u,u.h+4);break;case 3:m=u.l;do{if(!fn(u))throw Error("Unmatched start-group tag: stream EOF");if(u.i==4){if(u.l!=m)throw Error("Unmatched end-group tag");break}ei(u)}while(!0);break;default:throw Ee(u.i,u.j)}}var kt=[];function ya(){this.j=[],this.i=0,this.h=new lt}function hn(u,m){m.length!==0&&(u.j.push(m),u.i+=m.length)}function ba(u,m){if(m=m.R){hn(u,u.h.end());for(var v=0;v<m.length;v++)hn(u,Vt(m[v])||ot())}}var wr=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Gr(u,m){return wr?u[wr]|=m:u.A!==void 0?u.A|=m:(Object.defineProperties(u,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}}),m)}function hs(u,m){wr?u[wr]&&(u[wr]&=~m):u.A!==void 0&&(u.A&=~m)}function At(u){var m;return wr?m=u[wr]:m=u.A,m??0}function fr(u,m){wr?u[wr]=m:u.A!==void 0?u.A=m:Object.defineProperties(u,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}})}function ji(u){return Gr(u,1),u}function va(u,m){fr(m,(u|0)&-51)}function ti(u,m){fr(m,(u|18)&-41)}var Wi={};function ri(u){return u!==null&&typeof u=="object"&&!Array.isArray(u)&&u.constructor===Object}var ni,hr=[];fr(hr,23),ni=Object.freeze(hr);function ii(u){if(At(u.o)&2)throw Error("Cannot mutate an immutable Message")}function si(u){var m=u.length;(m=m?u[m-1]:void 0)&&ri(m)?m.g=1:(m={},u.push((m.g=1,m)))}function mn(u){var m=u.i+u.G;return u.B||(u.B=u.o[m]={})}function Dt(u,m){return m===-1?null:m>=u.i?u.B?u.B[m]:void 0:u.o[m+u.G]}function mr(u,m,v,T){ii(u),ai(u,m,v,T)}function ai(u,m,v,T){u.j&&(u.j=void 0),m>=u.i||T?mn(u)[m]=v:(u.o[m+u.G]=v,(u=u.B)&&m in u&&delete u[m])}function ms(u,m,v,T){var z=Dt(u,m);Array.isArray(z)||(z=ni);var B=At(z);if(B&1||ji(z),T)B&2||Gr(z,2),v&1||Object.freeze(z);else{T=!(v&2);var R=B&2;v&1||!R?T&&B&16&&!R&&hs(z,16):(z=ji(Array.prototype.slice.call(z)),ai(u,m,z))}return z}function qi(u,m){var v=Dt(u,m),T=v==null?v:typeof v=="number"||v==="NaN"||v==="Infinity"||v==="-Infinity"?Number(v):void 0;return T!=null&&T!==v&&ai(u,m,T),T}function Kr(u,m,v,T,z){u.h||(u.h={});var B=u.h[v],R=ms(u,v,3,z);if(!B){var F=R;B=[];var G=!!(At(u.o)&16);R=!!(At(F)&2);var de=F;!z&&R&&(F=Array.prototype.slice.call(F));for(var ve=R,De=0;De<F.length;De++){var ze=F[De],Se=m,Pe=!1;if(Pe=Pe===void 0?!1:Pe,ze=Array.isArray(ze)?new Se(ze):Pe?new Se:void 0,ze!==void 0){Se=ze.o;var He=Pe=At(Se);R&&(He|=2),G&&(He|=16),He!=Pe&&fr(Se,He),Se=He,ve=ve||!!(2&Se),B.push(ze)}}return u.h[v]=B,G=At(F),m=G|33,m=ve?m&-9:m|8,G!=m&&(ve=F,Object.isFrozen(ve)&&(ve=Array.prototype.slice.call(ve)),fr(ve,m),F=ve),de!==F&&ai(u,v,F),(z||T&&R)&&Gr(B,2),T&&Object.freeze(B),B}return z||(z=Object.isFrozen(B),T&&!z?Object.freeze(B):!T&&z&&(B=Array.prototype.slice.call(B),u.h[v]=B)),B}function oi(u,m,v){var T=!!(At(u.o)&2);if(m=Kr(u,m,v,T,T),u=ms(u,v,3,T),!(T||At(u)&8)){for(T=0;T<m.length;T++){if(v=m[T],At(v.o)&2){var z=xa(v,!1);z.j=v}else z=v;v!==z&&(m[T]=z,u[T]=z.o)}Gr(u,8)}return m}function Mt(u,m,v){if(v!=null&&typeof v!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof v+": "+v);mr(u,m,v)}function dr(u,m,v,T,z){ii(u);var B=Kr(u,v,m,!1,!1);return v=T??new v,u=ms(u,m,2,!1),z!=null?(B.splice(z,0,v),u.splice(z,0,v.o)):(B.push(v),u.push(v.o)),v.C()&&hs(u,8),v}function zn(u,m){return u??m}function _r(u,m,v){return v=v===void 0?0:v,zn(qi(u,m),v)}var Hi;function ll(u){switch(typeof u){case"number":return isFinite(u)?u:String(u);case"object":if(u)if(Array.isArray(u)){if(At(u)&128)return u=Array.prototype.slice.call(u),si(u),u}else{if(_e&&u!=null&&u instanceof Uint8Array)return mt(u);if(u instanceof Jt){var m=u.V;return m==null?"":typeof m=="string"?m:u.V=mt(m)}}}return u}function wa(u,m,v,T){if(u!=null){if(Array.isArray(u))u=gs(u,m,v,T!==void 0);else if(ri(u)){var z={},B;for(B in u)z[B]=wa(u[B],m,v,T);u=z}else u=m(u,T);return u}}function gs(u,m,v,T){var z=At(u);T=T?!!(z&16):void 0,u=Array.prototype.slice.call(u);for(var B=0;B<u.length;B++)u[B]=wa(u[B],m,v,T);return v(z,u),u}function ul(u){return u.ja===Wi?u.toJSON():ll(u)}function Xr(u,m){u&128&&si(m)}function li(u,m,v){if(v=v===void 0?ti:v,u!=null){if(_e&&u instanceof Uint8Array)return u.length?new Jt(new Uint8Array(u),M):Bt();if(Array.isArray(u)){var T=At(u);return T&2?u:m&&!(T&32)&&(T&16||T===0)?(fr(u,T|2),u):(u=gs(u,li,T&4?ti:v,!0),m=At(u),m&4&&m&2&&Object.freeze(u),u)}return u.ja===Wi?ys(u):u}}function _a(u,m,v,T,z,B,R){if(u=u.h&&u.h[v]){if(T=At(u),T&2?T=u:(B=ue(u,ys),ti(T,B),Object.freeze(B),T=B),ii(m),R=T==null?ni:ji([]),T!=null){for(B=!!T.length,u=0;u<T.length;u++){var F=T[u];B=B&&!(At(F.o)&2),R[u]=F.o}B=(B?8:0)|1,u=At(R),(u&B)!==B&&(Object.isFrozen(R)&&(R=Array.prototype.slice.call(R)),fr(R,u|B)),m.h||(m.h={}),m.h[v]=T}else m.h&&(m.h[v]=void 0);ai(m,v,R,z)}else mr(m,v,li(T,B,R),z)}function ys(u){return At(u.o)&2||(u=xa(u,!0),Gr(u.o,2)),u}function xa(u,m){var v=u.o,T=[];Gr(T,16);var z=u.constructor.h;if(z&&T.push(z),z=u.B,z){T.length=v.length,T.fill(void 0,T.length,v.length);var B={};T[T.length-1]=B}At(v)&128&&si(T),m=m||u.C()?ti:va,B=u.constructor,Hi=T,T=new B(T),Hi=void 0,u.R&&(T.R=u.R.slice()),B=!!(At(v)&16);for(var R=z?v.length-1:v.length,F=0;F<R;F++)_a(u,T,F-u.G,v[F],!1,B,m);if(z)for(var G in z)_a(u,T,+G,z[G],!0,B,m);return T}function er(u,m,v){u==null&&(u=Hi),Hi=void 0;var T=this.constructor.i||0,z=0<T,B=this.constructor.h,R=!1;if(u==null){u=B?[B]:[];var F=48,G=!0;z&&(T=0,F|=128),fr(u,F)}else{if(!Array.isArray(u)||B&&B!==u[0])throw Error();var de=F=Gr(u,0);if((G=(16&de)!==0)&&((R=(32&de)!==0)||(de|=32)),z){if(128&de)T=0;else if(0<u.length){var ve=u[u.length-1];if(ri(ve)&&"g"in ve){T=0,de|=128,delete ve.g;var De=!0,ze;for(ze in ve){De=!1;break}De&&u.pop()}}}else if(128&de)throw Error();F!==de&&fr(u,de)}this.G=(B?0:-1)-T,this.h=void 0,this.o=u;e:{if(B=this.o.length,T=B-1,B&&(B=this.o[T],ri(B))){this.B=B,this.i=T-this.G;break e}m!==void 0&&-1<m?(this.i=Math.max(m,T+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!z&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(v){m=G&&!R&&!0,z=this.i;var Se;for(G=0;G<v.length;G++)R=v[G],R<z?(R+=this.G,(T=u[R])?$a(T,m):u[R]=ni):(Se||(Se=mn(this)),(T=Se[R])?$a(T,m):Se[R]=ni)}}er.prototype.toJSON=function(){return gs(this.o,ul,Xr)},er.prototype.C=function(){return!!(At(this.o)&2)};function $a(u,m){if(Array.isArray(u)){var v=At(u),T=1;!m||v&2||(T|=16),(v&T)!==T&&fr(u,v|T)}}er.prototype.ja=Wi,er.prototype.toString=function(){return this.o.toString()};function Sa(u,m,v){if(v){var T={},z;for(z in v){var B=v[z],R=B.ra;R||(T.J=B.xa||B.oa.W,B.ia?(T.aa=di(B.ia),R=function(F){return function(G,de,ve){return F.J(G,de,ve,F.aa)}}(T)):B.ka?(T.Z=Ea(B.da.P,B.ka),R=function(F){return function(G,de,ve){return F.J(G,de,ve,F.Z)}}(T)):R=T.J,B.ra=R),R(m,u,B.da),T={J:T.J,aa:T.aa,Z:T.Z}}}ba(m,u)}var Gi=Symbol();function Ta(u,m,v){return u[Gi]||(u[Gi]=function(T,z){return m(T,z,v)})}function ka(u){var m=u[Gi];if(!m){var v=pi(u);m=function(T,z){return bs(T,z,v)},u[Gi]=m}return m}function dl(u){var m=u.ia;if(m)return ka(m);if(m=u.wa)return Ta(u.da.P,m,u.ka)}function cl(u){var m=dl(u),v=u.da,T=u.oa.U;return m?function(z,B){return T(z,B,v,m)}:function(z,B){return T(z,B,v)}}function ui(u,m){var v=u[m];return typeof v=="function"&&v.length===0&&(v=v(),u[m]=v),Array.isArray(v)&&(ci in v||gn in v||0<v.length&&typeof v[0]=="function")?v:void 0}function Ca(u,m,v,T,z,B){m.P=u[0];var R=1;if(u.length>R&&typeof u[R]!="number"){var F=u[R++];v(m,F)}for(;R<u.length;){v=u[R++];for(var G=R+1;G<u.length&&typeof u[G]!="number";)G++;switch(F=u[R++],G-=R,G){case 0:T(m,v,F);break;case 1:(G=ui(u,R))?(R++,z(m,v,F,G)):T(m,v,F,u[R++]);break;case 2:G=R++,G=ui(u,G),z(m,v,F,G,u[R++]);break;case 3:B(m,v,F,u[R++],u[R++],u[R++]);break;case 4:B(m,v,F,u[R++],u[R++],u[R++],u[R++]);break;default:throw Error("unexpected number of binary field arguments: "+G)}}return m}var Mn=Symbol();function di(u){var m=u[Mn];if(!m){var v=Rn(u);m=function(T,z){return vs(T,z,v)},u[Mn]=m}return m}function Ea(u,m){var v=u[Mn];return v||(v=function(T,z){return Sa(T,z,m)},u[Mn]=v),v}var gn=Symbol();function pl(u,m){u.push(m)}function fl(u,m,v){u.push(m,v.W)}function hl(u,m,v,T){var z=di(T),B=Rn(T).P,R=v.W;u.push(m,function(F,G,de){return R(F,G,de,B,z)})}function ml(u,m,v,T,z,B){var R=Ea(T,B),F=v.W;u.push(m,function(G,de,ve){return F(G,de,ve,T,R)})}function Rn(u){var m=u[gn];return m||(m=Ca(u,u[gn]=[],pl,fl,hl,ml),ci in u&&gn in u&&(u.length=0),m)}var ci=Symbol();function Yr(u,m){u[0]=m}function xr(u,m,v,T){var z=v.U;u[m]=T?function(B,R,F){return z(B,R,F,T)}:z}function Ia(u,m,v,T,z){var B=v.U,R=ka(T),F=pi(T).P;u[m]=function(G,de,ve){return B(G,de,ve,F,R,z)}}function Ki(u,m,v,T,z,B,R){var F=v.U,G=Ta(T,z,B);u[m]=function(de,ve,De){return F(de,ve,De,T,G,R)}}function pi(u){var m=u[ci];return m||(m=Ca(u,u[ci]={},Yr,xr,Ia,Ki),ci in u&&gn in u&&(u.length=0),m)}function bs(u,m,v){for(;fn(m)&&m.i!=4;){var T=m.l,z=v[T];if(!z){var B=v[0];B&&(B=B[T])&&(z=v[T]=cl(B))}if(!z||!z(m,u,T)){z=m,T=u,B=z.j,ei(z);var R=z;if(!R.ca){if(z=R.h.h-B,R.h.h=B,R=R.h,z==0)z=Bt();else{if(B=V(R,z),R.S&&R.m)z=R.i.subarray(B,B+z);else{R=R.i;var F=B;z=B+z,z=F===z?ot():L?R.slice(F,z):new Uint8Array(R.subarray(F,z))}z=z.length==0?Bt():new Jt(z,M)}(B=T.R)?B.push(z):T.R=[z]}}}return u}function vs(u,m,v){for(var T=v.length,z=T%2==1,B=z?1:0;B<T;B+=2)(0,v[B+1])(m,u,v[B]);Sa(u,m,z?v[0]:void 0)}function fi(u,m){return{U:u,W:m}}var ir=fi(function(u,m,v){if(u.i!==5)return!1;u=u.h;var T=u.i,z=u.h,B=T[z],R=T[z+1],F=T[z+2];return T=T[z+3],Mr(u,u.h+4),R=(B<<0|R<<8|F<<16|T<<24)>>>0,u=2*(R>>31)+1,B=R>>>23&255,R&=8388607,mr(m,v,B==255?R?NaN:1/0*u:B==0?u*Math.pow(2,-149)*R:u*Math.pow(2,B-150)*(R+Math.pow(2,23))),!0},function(u,m,v){if(m=qi(m,v),m!=null){Pt(u.h,8*v+5),u=u.h;var T=+m;T===0?0<1/T?H=Y=0:(Y=0,H=2147483648):isNaN(T)?(Y=0,H=2147483647):(T=(v=0>T?-2147483648:0)?-T:T,34028234663852886e22<T?(Y=0,H=(v|2139095040)>>>0):11754943508222875e-54>T?(T=Math.round(T/Math.pow(2,-149)),Y=0,H=(v|T)>>>0):(m=Math.floor(Math.log(T)/Math.LN2),T*=Math.pow(2,-m),T=Math.round(8388608*T),16777216<=T&&++m,Y=0,H=(v|m+127<<23|T&8388607)>>>0)),v=H,u.h.push(v>>>0&255),u.h.push(v>>>8&255),u.h.push(v>>>16&255),u.h.push(v>>>24&255)}}),gl=fi(function(u,m,v){if(u.i!==0)return!1;var T=u.h,z=0,B=u=0,R=T.i,F=T.h;do{var G=R[F++];z|=(G&127)<<B,B+=7}while(32>B&&G&128);for(32<B&&(u|=(G&127)>>4),B=3;32>B&&G&128;B+=7)G=R[F++],u|=(G&127)<<B;if(Mr(T,F),128>G)T=z>>>0,G=u>>>0,(u=G&2147483648)&&(T=~T+1>>>0,G=~G>>>0,T==0&&(G=G+1>>>0)),T=4294967296*G+(T>>>0);else throw be();return mr(m,v,u?-T:T),!0},function(u,m,v){m=Dt(m,v),m!=null&&(typeof m=="string"&&ge(m),m!=null&&(Pt(u.h,8*v),typeof m=="number"?(u=u.h,ne(m),Ht(u,H,Y)):(v=ge(m),Ht(u.h,v.i,v.h))))}),Aa=fi(function(u,m,v){return u.i!==0?!1:(mr(m,v,oe(u.h)),!0)},function(u,m,v){if(m=Dt(m,v),m!=null&&m!=null)if(Pt(u.h,8*v),u=u.h,v=m,0<=v)Pt(u,v);else{for(m=0;9>m;m++)u.h.push(v&127|128),v>>=7;u.h.push(1)}}),Oa=fi(function(u,m,v){if(u.i!==2)return!1;var T=oe(u.h)>>>0;u=u.h;var z=V(u,T);if(u=u.i,dt){var B=u,R;(R=Je)||(R=Je=new TextDecoder("utf-8",{fatal:!0})),u=z+T,B=z===0&&u===B.length?B:B.subarray(z,u);try{var F=R.decode(B)}catch(De){if(je===void 0){try{R.decode(new Uint8Array([128]))}catch{}try{R.decode(new Uint8Array([97])),je=!0}catch{je=!1}}throw!je&&(Je=void 0),De}}else{F=z,T=F+T,z=[];for(var G=null,de,ve;F<T;)de=u[F++],128>de?z.push(de):224>de?F>=T?Me():(ve=u[F++],194>de||(ve&192)!==128?(F--,Me()):z.push((de&31)<<6|ve&63)):240>de?F>=T-1?Me():(ve=u[F++],(ve&192)!==128||de===224&&160>ve||de===237&&160<=ve||((B=u[F++])&192)!==128?(F--,Me()):z.push((de&15)<<12|(ve&63)<<6|B&63)):244>=de?F>=T-2?Me():(ve=u[F++],(ve&192)!==128||(de<<28)+(ve-144)>>30||((B=u[F++])&192)!==128||((R=u[F++])&192)!==128?(F--,Me()):(de=(de&7)<<18|(ve&63)<<12|(B&63)<<6|R&63,de-=65536,z.push((de>>10&1023)+55296,(de&1023)+56320))):Me(),8192<=z.length&&(G=qe(G,z),z.length=0);F=qe(G,z)}return mr(m,v,F),!0},function(u,m,v){if(m=Dt(m,v),m!=null){var T=!1;if(T=T===void 0?!1:T,Tt){if(T&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(m))throw Error("Found an unpaired surrogate");m=(pt||(pt=new TextEncoder)).encode(m)}else{for(var z=0,B=new Uint8Array(3*m.length),R=0;R<m.length;R++){var F=m.charCodeAt(R);if(128>F)B[z++]=F;else{if(2048>F)B[z++]=F>>6|192;else{if(55296<=F&&57343>=F){if(56319>=F&&R<m.length){var G=m.charCodeAt(++R);if(56320<=G&&57343>=G){F=1024*(F-55296)+G-56320+65536,B[z++]=F>>18|240,B[z++]=F>>12&63|128,B[z++]=F>>6&63|128,B[z++]=F&63|128;continue}else R--}if(T)throw Error("Found an unpaired surrogate");F=65533}B[z++]=F>>12|224,B[z++]=F>>6&63|128}B[z++]=F&63|128}}m=z===B.length?B:B.subarray(0,z)}Pt(u.h,8*v+2),Pt(u.h,m.length),hn(u,u.h.end()),hn(u,m)}}),Xi=fi(function(u,m,v,T,z){if(u.i!==2)return!1;m=dr(m,v,T),v=u.h.j,T=oe(u.h)>>>0;var B=u.h.h+T,R=B-v;if(0>=R&&(u.h.j=B,z(m,u,void 0,void 0,void 0),R=B-u.h.h),R)throw Error("Message parsing ended unexpectedly. Expected to read "+(T+" bytes, instead read "+(T-R)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return u.h.h=B,u.h.j=v,!0},function(u,m,v,T,z){if(m=oi(m,T,v),m!=null)for(T=0;T<m.length;T++){var B=u;Pt(B.h,8*v+2);var R=B.h.end();hn(B,R),R.push(B.i),B=R,z(m[T],u),R=u;var F=B.pop();for(F=R.i+R.h.length()-F;127<F;)B.push(F&127|128),F>>>=7,R.i++;B.push(F),R.i++}});function ws(u){return function(m,v){e:{if(kt.length){var T=kt.pop();T.setOptions(v),Jn(T.h,m,v),m=T}else m=new Yt(m,v);try{var z=pi(u),B=bs(new z.P,m,z);break e}finally{z=m.h,z.i=null,z.m=!1,z.l=0,z.j=0,z.h=0,z.S=!1,m.l=-1,m.i=-1,100>kt.length&&kt.push(m)}B=void 0}return B}}function _s(u){return function(){var m=new ya;vs(this,m,Rn(u)),hn(m,m.h.end());for(var v=new Uint8Array(m.i),T=m.j,z=T.length,B=0,R=0;R<z;R++){var F=T[R];v.set(F,B),B+=F.length}return m.j=[v],v}}function Bn(u){er.call(this,u)}C(Bn,er);var za=[Bn,1,Aa,2,ir,3,Oa,4,Oa];Bn.prototype.l=_s(za);function Pn(u){er.call(this,u,-1,yl)}C(Pn,er),Pn.prototype.addClassification=function(u,m){return dr(this,1,Bn,u,m),this};var yl=[1],bl=ws([Pn,1,Xi,za]);function hi(u){er.call(this,u)}C(hi,er);var Ma=[hi,1,ir,2,ir,3,ir,4,ir,5,ir];hi.prototype.l=_s(Ma);function Ra(u){er.call(this,u,-1,vl)}C(Ra,er);var vl=[1],Ba=ws([Ra,1,Xi,Ma]);function Yi(u){er.call(this,u)}C(Yi,er);var Pa=[Yi,1,ir,2,ir,3,ir,4,ir,5,ir,6,gl],wl=ws(Pa);Yi.prototype.l=_s(Pa);function Da(u,m,v){if(v=u.createShader(v===0?u.VERTEX_SHADER:u.FRAGMENT_SHADER),u.shaderSource(v,m),u.compileShader(v),!u.getShaderParameter(v,u.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+u.getShaderInfoLog(v));return v}function _l(u){return oi(u,Bn,1).map(function(m){var v=Dt(m,1);return{index:v??0,qa:_r(m,2),label:Dt(m,3)!=null?zn(Dt(m,3),""):void 0,displayName:Dt(m,4)!=null?zn(Dt(m,4),""):void 0}})}function xl(u){return{x:_r(u,1),y:_r(u,2),z:_r(u,3),visibility:qi(u,4)!=null?_r(u,4):void 0}}function xs(u,m){this.i=u,this.h=m,this.m=0}function Na(u,m,v){return Ua(u,m),typeof u.h.canvas.transferToImageBitmap=="function"?Promise.resolve(u.h.canvas.transferToImageBitmap()):v?Promise.resolve(u.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(u.h.canvas):(u.j===void 0&&(u.j=document.createElement("canvas")),new Promise(function(T){u.j.height=u.h.canvas.height,u.j.width=u.h.canvas.width,u.j.getContext("2d",{}).drawImage(u.h.canvas,0,0,u.h.canvas.width,u.h.canvas.height),T(u.j)}))}function Ua(u,m){var v=u.h;if(u.s===void 0){var T=Da(v,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),z=Da(v,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),B=v.createProgram();if(v.attachShader(B,T),v.attachShader(B,z),v.linkProgram(B),!v.getProgramParameter(B,v.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+v.getProgramInfoLog(B));T=u.s=B,v.useProgram(T),z=v.getUniformLocation(T,"sampler0"),u.l={O:v.getAttribLocation(T,"aVertex"),N:v.getAttribLocation(T,"aTex"),ya:z},u.v=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,u.v),v.enableVertexAttribArray(u.l.O),v.vertexAttribPointer(u.l.O,2,v.FLOAT,!1,0,0),v.bufferData(v.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),v.STATIC_DRAW),v.bindBuffer(v.ARRAY_BUFFER,null),u.u=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,u.u),v.enableVertexAttribArray(u.l.N),v.vertexAttribPointer(u.l.N,2,v.FLOAT,!1,0,0),v.bufferData(v.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),v.STATIC_DRAW),v.bindBuffer(v.ARRAY_BUFFER,null),v.uniform1i(z,0)}T=u.l,v.useProgram(u.s),v.canvas.width=m.width,v.canvas.height=m.height,v.viewport(0,0,m.width,m.height),v.activeTexture(v.TEXTURE0),u.i.bindTexture2d(m.glName),v.enableVertexAttribArray(T.O),v.bindBuffer(v.ARRAY_BUFFER,u.v),v.vertexAttribPointer(T.O,2,v.FLOAT,!1,0,0),v.enableVertexAttribArray(T.N),v.bindBuffer(v.ARRAY_BUFFER,u.u),v.vertexAttribPointer(T.N,2,v.FLOAT,!1,0,0),v.bindFramebuffer(v.DRAW_FRAMEBUFFER?v.DRAW_FRAMEBUFFER:v.FRAMEBUFFER,null),v.clearColor(0,0,0,0),v.clear(v.COLOR_BUFFER_BIT),v.colorMask(!0,!0,!0,!0),v.drawArrays(v.TRIANGLE_FAN,0,4),v.disableVertexAttribArray(T.O),v.disableVertexAttribArray(T.N),v.bindBuffer(v.ARRAY_BUFFER,null),u.i.bindTexture2d(0)}function La(u){this.h=u}var Fa=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function $l(u,m){return m+u}function Va(u,m){window[u]=m}function ja(u){var m=document.createElement("script");return m.setAttribute("src",u),m.setAttribute("crossorigin","anonymous"),new Promise(function(v){m.addEventListener("load",function(){v()},!1),m.addEventListener("error",function(){v()},!1),document.body.appendChild(m)})}function Wa(){return ae(function(u){switch(u.h){case 1:return u.s=2,E(u,WebAssembly.instantiate(Fa),4);case 4:u.h=3,u.s=0;break;case 2:return u.s=0,u.l=null,u.return(!1);case 3:return u.return(!0)}})}function yn(u){if(this.h=u,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=u&&u.locateFile||$l,typeof window=="object")var m=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")m=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=m,u.options){m=o(Object.keys(u.options));for(var v=m.next();!v.done;v=m.next()){v=v.value;var T=u.options[v].default;T!==void 0&&(this.l[v]=typeof T=="function"?T():T)}}}e=yn.prototype,e.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function Sl(u){var m,v,T,z,B,R,F,G,de,ve,De;return ae(function(ze){switch(ze.h){case 1:return u.ga?(m=u.h.files===void 0?[]:typeof u.h.files=="function"?u.h.files(u.l):u.h.files,E(ze,Wa(),2)):ze.return();case 2:if(v=ze.i,typeof window=="object")return Va("createMediapipeSolutionsWasm",{locateFile:u.locateFile}),Va("createMediapipeSolutionsPackedAssets",{locateFile:u.locateFile}),R=m.filter(function(Se){return Se.data!==void 0}),F=m.filter(function(Se){return Se.data===void 0}),G=Promise.all(R.map(function(Se){var Pe=Zi(u,Se.url);if(Se.path!==void 0){var He=Se.path;Pe=Pe.then(function(wt){return u.overrideFile(He,wt),Promise.resolve(wt)})}return Pe})),de=Promise.all(F.map(function(Se){return Se.simd===void 0||Se.simd&&v||!Se.simd&&!v?ja(u.locateFile(Se.url,u.ha)):Promise.resolve()})).then(function(){var Se,Pe,He;return ae(function(wt){if(wt.h==1)return Se=window.createMediapipeSolutionsWasm,Pe=window.createMediapipeSolutionsPackedAssets,He=u,E(wt,Se(Pe),2);He.i=wt.i,wt.h=0})}),ve=function(){return ae(function(Se){return u.h.graph&&u.h.graph.url?Se=E(Se,Zi(u,u.h.graph.url),0):(Se.h=0,Se=void 0),Se})}(),E(ze,Promise.all([de,G,ve]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return T=m.filter(function(Se){return Se.simd===void 0||Se.simd&&v||!Se.simd&&!v}).map(function(Se){return u.locateFile(Se.url,u.ha)}),importScripts.apply(null,l(T)),z=u,E(ze,createMediapipeSolutionsWasm(Module),6);case 6:z.i=ze.i,u.m=new OffscreenCanvas(1,1),u.i.canvas=u.m,B=u.i.GL.createContext(u.m,{antialias:!1,alpha:!1,va:typeof WebGL2RenderingContext<"u"?2:1}),u.i.GL.makeContextCurrent(B),ze.h=4;break;case 7:if(u.m=document.createElement("canvas"),De=u.m.getContext("webgl2",{}),!De&&(De=u.m.getContext("webgl",{}),!De))return alert("Failed to create WebGL canvas context when passing video frame."),ze.return();u.K=De,u.i.canvas=u.m,u.i.createContext(u.m,!0,!0,{});case 4:u.j=new u.i.SolutionWasm,u.ga=!1,ze.h=0}})}function qa(u){var m,v,T,z,B,R,F,G;return ae(function(de){if(de.h==1){if(u.h.graph&&u.h.graph.url&&u.fa===u.h.graph.url)return de.return();if(u.u=!0,!u.h.graph||!u.h.graph.url){de.h=2;return}return u.fa=u.h.graph.url,E(de,Zi(u,u.h.graph.url),3)}for(de.h!=2&&(m=de.i,u.j.loadGraph(m)),v=o(Object.keys(u.D)),T=v.next();!T.done;T=v.next())z=T.value,u.j.overrideFile(z,u.D[z]);if(u.D={},u.h.listeners)for(B=o(u.h.listeners),R=B.next();!R.done;R=B.next())F=R.value,Ha(u,F);G=u.l,u.l={},u.setOptions(G),de.h=0})}e.reset=function(){var u=this;return ae(function(m){u.j&&(u.j.reset(),u.s={},u.v={}),m.h=0})},e.setOptions=function(u,m){var v=this;if(m=m||this.h.options){for(var T=[],z=[],B={},R=o(Object.keys(u)),F=R.next();!F.done;B={X:B.X,Y:B.Y},F=R.next())if(F=F.value,!(F in this.l&&this.l[F]===u[F])){this.l[F]=u[F];var G=m[F];G!==void 0&&(G.onChange&&(B.X=G.onChange,B.Y=u[F],T.push(function(de){return function(){var ve;return ae(function(De){if(De.h==1)return E(De,de.X(de.Y),2);ve=De.i,ve===!0&&(v.u=!0),De.h=0})}}(B))),G.graphOptionXref&&(F=Object.assign({},{calculatorName:"",calculatorIndex:0},G.graphOptionXref,{valueNumber:G.type===1?u[F]:0,valueBoolean:G.type===0?u[F]:!1,valueString:G.type===2?u[F]:""}),z.push(F)))}(T.length!==0||z.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(z),this.F=(this.F===void 0?[]:this.F).concat(T))}};function Tl(u){var m,v,T,z,B,R,F;return ae(function(G){switch(G.h){case 1:if(!u.u)return G.return();if(!u.F){G.h=2;break}m=o(u.F),v=m.next();case 3:if(v.done){G.h=5;break}return T=v.value,E(G,T(),4);case 4:v=m.next(),G.h=3;break;case 5:u.F=void 0;case 2:if(u.H){for(z=new u.i.GraphOptionChangeRequestList,B=o(u.H),R=B.next();!R.done;R=B.next())F=R.value,z.push_back(F);u.j.changeOptions(z),z.delete(),u.H=void 0}u.u=!1,G.h=0}})}e.initialize=function(){var u=this;return ae(function(m){return m.h==1?E(m,Sl(u),2):m.h!=3?E(m,qa(u),3):E(m,Tl(u),0)})};function Zi(u,m){var v,T;return ae(function(z){return m in u.L?z.return(u.L[m]):(v=u.locateFile(m,""),T=fetch(v).then(function(B){return B.arrayBuffer()}),u.L[m]=T,z.return(T))})}e.overrideFile=function(u,m){this.j?this.j.overrideFile(u,m):this.D[u]=m},e.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},e.send=function(u,m){var v=this,T,z,B,R,F,G,de,ve,De;return ae(function(ze){switch(ze.h){case 1:return v.h.inputs?(T=1e3*(m??performance.now()),E(ze,v.I,2)):ze.return();case 2:return E(ze,v.initialize(),3);case 3:for(z=new v.i.PacketDataList,B=o(Object.keys(u)),R=B.next();!R.done;R=B.next())if(F=R.value,G=v.h.inputs[F]){e:{var Se=u[F];switch(G.type){case"video":var Pe=v.s[G.stream];if(Pe||(Pe=new xs(v.i,v.K),v.s[G.stream]=Pe),Pe.m===0&&(Pe.m=Pe.i.createTexture()),typeof HTMLVideoElement<"u"&&Se instanceof HTMLVideoElement)var He=Se.videoWidth,wt=Se.videoHeight;else typeof HTMLImageElement<"u"&&Se instanceof HTMLImageElement?(He=Se.naturalWidth,wt=Se.naturalHeight):(He=Se.width,wt=Se.height);wt={glName:Pe.m,width:He,height:wt},He=Pe.h,He.canvas.width=wt.width,He.canvas.height=wt.height,He.activeTexture(He.TEXTURE0),Pe.i.bindTexture2d(Pe.m),He.texImage2D(He.TEXTURE_2D,0,He.RGBA,He.RGBA,He.UNSIGNED_BYTE,Se),Pe.i.bindTexture2d(0),Pe=wt;break e;case"detections":for(Pe=v.s[G.stream],Pe||(Pe=new La(v.i),v.s[G.stream]=Pe),Pe.data||(Pe.data=new Pe.h.DetectionListData),Pe.data.reset(Se.length),wt=0;wt<Se.length;++wt){He=Se[wt];var bt=Pe.data,Ut=bt.setBoundingBox,sr=wt,Zt=He.la,st=new Yi;if(Mt(st,1,Zt.sa),Mt(st,2,Zt.ta),Mt(st,3,Zt.height),Mt(st,4,Zt.width),Mt(st,5,Zt.rotation),mr(st,6,Zt.pa),Zt=st.l(),Ut.call(bt,sr,Zt),He.ea)for(bt=0;bt<He.ea.length;++bt){st=He.ea[bt],Ut=Pe.data,sr=Ut.addNormalizedLandmark,Zt=wt,st=Object.assign({},st,{visibility:st.visibility?st.visibility:0});var Lt=new hi;Mt(Lt,1,st.x),Mt(Lt,2,st.y),Mt(Lt,3,st.z),st.visibility&&Mt(Lt,4,st.visibility),st=Lt.l(),sr.call(Ut,Zt,st)}if(He.ba)for(bt=0;bt<He.ba.length;++bt)Ut=Pe.data,sr=Ut.addClassification,Zt=wt,st=He.ba[bt],Lt=new Bn,Mt(Lt,2,st.qa),st.index&&mr(Lt,1,st.index),st.label&&mr(Lt,3,st.label),st.displayName&&mr(Lt,4,st.displayName),st=Lt.l(),sr.call(Ut,Zt,st)}Pe=Pe.data;break e;default:Pe={}}}switch(de=Pe,ve=G.stream,G.type){case"video":z.pushTexture2d(Object.assign({},de,{stream:ve,timestamp:T}));break;case"detections":De=de,De.stream=ve,De.timestamp=T,z.pushDetectionList(De);break;default:throw Error("Unknown input config type: '"+G.type+"'")}}return v.j.send(z),E(ze,v.I,4);case 4:z.delete(),ze.h=0}})};function kl(u,m,v){var T,z,B,R,F,G,de,ve,De,ze,Se,Pe,He,wt;return ae(function(bt){switch(bt.h){case 1:if(!v)return bt.return(m);for(T={},z=0,B=o(Object.keys(v)),R=B.next();!R.done;R=B.next())F=R.value,G=v[F],typeof G!="string"&&G.type==="texture"&&m[G.stream]!==void 0&&++z;1<z&&(u.M=!1),de=o(Object.keys(v)),R=de.next();case 2:if(R.done){bt.h=4;break}if(ve=R.value,De=v[ve],typeof De=="string")return He=T,wt=ve,E(bt,$s(u,ve,m[De]),14);if(ze=m[De.stream],De.type==="detection_list"){if(ze){for(var Ut=ze.getRectList(),sr=ze.getLandmarksList(),Zt=ze.getClassificationsList(),st=[],Lt=0;Lt<Ut.size();++Lt){var Zr=wl(Ut.get(Lt)),Xa=_r(Zr,1),Ya=_r(Zr,2),Qi=_r(Zr,3),$r=_r(Zr,4),mi=_r(Zr,5,0),Dn=void 0;Dn=Dn===void 0?0:Dn,Zr={la:{sa:Xa,ta:Ya,height:Qi,width:$r,rotation:mi,pa:zn(Dt(Zr,6),Dn)},ea:oi(Ba(sr.get(Lt)),hi,1).map(xl),ba:_l(bl(Zt.get(Lt)))},st.push(Zr)}Ut=st}else Ut=[];T[ve]=Ut,bt.h=7;break}if(De.type==="proto_list"){if(ze){for(Ut=Array(ze.size()),sr=0;sr<ze.size();sr++)Ut[sr]=ze.get(sr);ze.delete()}else Ut=[];T[ve]=Ut,bt.h=7;break}if(ze===void 0){bt.h=3;break}if(De.type==="float_list"){T[ve]=ze,bt.h=7;break}if(De.type==="proto"){T[ve]=ze,bt.h=7;break}if(De.type!=="texture")throw Error("Unknown output config type: '"+De.type+"'");return Se=u.v[ve],Se||(Se=new xs(u.i,u.K),u.v[ve]=Se),E(bt,Na(Se,ze,u.M),13);case 13:Pe=bt.i,T[ve]=Pe;case 7:De.transform&&T[ve]&&(T[ve]=De.transform(T[ve])),bt.h=3;break;case 14:He[wt]=bt.i;case 3:R=de.next(),bt.h=2;break;case 4:return bt.return(T)}})}function $s(u,m,v){var T;return ae(function(z){return typeof v=="number"||v instanceof Uint8Array||v instanceof u.i.Uint8BlobList?z.return(v):v instanceof u.i.Texture2dDataOut?(T=u.v[m],T||(T=new xs(u.i,u.K),u.v[m]=T),z.return(Na(T,v,u.M))):z.return(void 0)})}function Ha(u,m){for(var v=m.name||"$",T=[].concat(l(m.wants)),z=new u.i.StringList,B=o(m.wants),R=B.next();!R.done;R=B.next())z.push_back(R.value);B=u.i.PacketListener.implement({onResults:function(F){for(var G={},de=0;de<m.wants.length;++de)G[T[de]]=F.get(de);var ve=u.listeners[v];ve&&(u.I=kl(u,G,m.outs).then(function(De){De=ve(De);for(var ze=0;ze<m.wants.length;++ze){var Se=G[T[ze]];typeof Se=="object"&&Se.hasOwnProperty&&Se.hasOwnProperty("delete")&&Se.delete()}De&&(u.I=De)}))}}),u.j.attachMultiListener(z,B),z.delete()}e.onResults=function(u,m){this.listeners[m||"$"]=u},J("Solution",yn),J("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Ga(u){switch(u===void 0&&(u=0),u){case 1:return"selfie_segmentation_landscape.tflite";default:return"selfie_segmentation.tflite"}}function Ka(u){var m=this;u=u||{},this.h=new yn({locateFile:u.locateFile,files:function(v){return[{simd:!0,url:"selfie_segmentation_solution_simd_wasm_bin.js"},{simd:!1,url:"selfie_segmentation_solution_wasm_bin.js"},{data:!0,url:Ga(v.modelSelection)}]},graph:{url:"selfie_segmentation.binarypb"},listeners:[{wants:["segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelSelection:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelSelection",fieldName:"int_value"},onChange:function(v){var T,z,B;return ae(function(R){return R.h==1?(T=Ga(v),z="third_party/mediapipe/modules/selfie_segmentation/"+T,E(R,Zi(m.h,T),2)):(B=R.i,m.h.overrideFile(z,B),R.return(!0))})}}}})}e=Ka.prototype,e.close=function(){return this.h.close(),Promise.resolve()},e.onResults=function(u){this.h.onResults(u)},e.initialize=function(){var u=this;return ae(function(m){return E(m,u.h.initialize(),0)})},e.reset=function(){this.h.reset()},e.send=function(u){var m=this;return ae(function(v){return E(v,m.h.send(u),0)})},e.setOptions=function(u){this.h.setOptions(u)},J("SelfieSegmentation",Ka),J("VERSION","0.1.1675465747")}).call(Yl);class Cx{segmenter=null;isLoaded=!1;isProcessing=!1;lastProcessTime=0;targetFps=15;frameInterval=1e3/15;downsampleCanvas;downsampleCtx;onResultCallback;constructor(){this.downsampleCanvas=document.createElement("canvas"),this.downsampleCanvas.width=256,this.downsampleCanvas.height=256,this.downsampleCtx=this.downsampleCanvas.getContext("2d",{willReadFrequently:!0})}async init(t="/mediapipe/"){if(!this.isLoaded)try{this.segmenter=new iy.SelfieSegmentation({locateFile:r=>`/mediapipe/${r}`}),this.segmenter.setOptions({modelSelection:0,selfieMode:!1}),this.segmenter.onResults(r=>{this.isProcessing=!1,this.onResultCallback&&r.segmentationMask&&this.onResultCallback(r.segmentationMask,r.image)}),await this.segmenter.initialize(),this.isLoaded=!0,console.log("[RealtimeSegmenter] MediaPipe SelfieSegmentation 初始化成功")}catch(r){console.warn("[RealtimeSegmenter] MediaPipe 初始化降级提示:",r)}}setOnResult(t){this.onResultCallback=t}async sendFrame(t){if(!this.segmenter||!this.isLoaded)return!1;const r=performance.now();if(r-this.lastProcessTime<this.frameInterval||this.isProcessing)return!1;this.lastProcessTime=r,this.isProcessing=!0;try{if(this.downsampleCtx)return this.downsampleCtx.drawImage(t,0,0,256,256),await this.segmenter.send({image:this.downsampleCanvas}),!0}catch(n){this.isProcessing=!1,console.error("[RealtimeSegmenter] sendFrame 错误:",n)}return!1}renderComposite(t,r,n,i,s=!1){const a=t.getContext("2d");if(!a)return;const o=t.width,l=t.height;if(a.save(),s&&(a.translate(o,0),a.scale(-1,1)),a.clearRect(0,0,o,l),i.isGradient&&i.gradientStops){const f=a.createLinearGradient(0,0,0,l);f.addColorStop(0,i.gradientStops[0]),f.addColorStop(1,i.gradientStops[1]),a.fillStyle=f}else a.fillStyle=i.value||"#FFFFFF";a.fillRect(0,0,o,l),a.save(),a.globalCompositeOperation="source-over";const d=document.createElement("canvas");d.width=o,d.height=l;const p=d.getContext("2d");p&&(p.drawImage(r,0,0,o,l),p.globalCompositeOperation="destination-in",p.drawImage(n,0,0,o,l),a.drawImage(d,0,0,o,l)),a.restore(),a.restore()}destroy(){this.segmenter&&(this.segmenter.close(),this.segmenter=null),this.isLoaded=!1}}/*!
 * ONNX Runtime Web v1.30.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Hd=Object.defineProperty,Ex=Object.getOwnPropertyDescriptor,Ix=Object.getOwnPropertyNames,Ax=Object.prototype.hasOwnProperty,Ox=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),pe=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(n){throw r=[n],n}},fs=(e,t)=>{for(var r in t)Hd(e,r,{get:t[r],enumerable:!0})},zx=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ix(t))!Ax.call(e,i)&&i!==r&&Hd(e,i,{get:()=>t[i],enumerable:!(n=Ex(t,i))||n.enumerable});return e},da=e=>zx(Hd({},"__esModule",{value:!0}),e),Es,Ln,rs,tf,sy,ay=pe(()=>{"use strict";Es=new Map,Ln=[],rs=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=Es.get(e);if(n===void 0)Es.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=Ln.indexOf(e);i!==-1&&Ln.splice(i,1);for(let s=0;s<Ln.length;s++)if(Es.get(Ln[s]).priority<=r){Ln.splice(s,0,e);return}Ln.push(e)}return}throw new TypeError("not a valid backend")},tf=async e=>{let t=Es.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},sy=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),n=r.length===0?Ln:r,i,s=[],a=new Set;for(let l of n){let d=await tf(l);typeof d=="string"?s.push({name:l,err:d}):(i||(i=d),i===d&&a.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>a.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),Mx=pe(()=>{"use strict";ay()}),oy,Rx=pe(()=>{"use strict";oy="1.30.0"}),Zl,Gt,ly=pe(()=>{"use strict";Rx(),Zl="warning",Gt={wasm:{},webgl:{},webgpu:{},versions:{common:oy},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Zl=e}},get logLevel(){return Zl}},Object.defineProperty(Gt,"logLevel",{enumerable:!0})}),_t,Bx=pe(()=>{"use strict";ly(),_t=Gt}),uy,dy,Px=pe(()=>{"use strict";uy=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let a=t?.format!==void 0?t.format:"RGB",o=t?.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let p=s*i,f=0,g=p,b=p*2,y=-1;a==="RGBA"?(f=0,g=p,b=p*2,y=p*3):a==="RGB"?(f=0,g=p,b=p*2):a==="RBG"&&(f=0,b=p,g=p*2);for(let $=0;$<s;$++)for(let C=0;C<i;C++){let S=(e.data[f++]-d[0])*l[0],x=(e.data[g++]-d[1])*l[1],A=(e.data[b++]-d[2])*l[2],E=y===-1?255:(e.data[y++]-d[3])*l[3];n.fillStyle="rgba("+S+","+x+","+A+","+E+")",n.fillRect(C,$,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},dy=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,s,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],a=e.dims[3]):(i=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let f=s*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,b=0,y=1,$=2,C=3,S=0,x=f,A=f*2,E=-1;o==="RGBA"?(S=0,x=f,A=f*2,E=f*3):o==="RGB"?(S=0,x=f,A=f*2):o==="RBG"&&(S=0,A=f,x=f*2),n=r.createImageData(i,s);for(let O=0;O<s*i;b+=g,y+=g,$+=g,C+=g,O++)n.data[b]=(e.data[S++]-p[0])*d[0],n.data[y]=(e.data[x++]-p[1])*d[1],n.data[$]=(e.data[A++]-p[2])*d[2],n.data[C]=E===-1?255:(e.data[E++]-p[3])*d[3]}else throw new Error("Can not access image data");return n}}),ao,cy,py,fy,hy,my,Dx=pe(()=>{"use strict";Gd(),ao=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},s,a;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,p=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,g=0,b=1,y=2,$=3,C=0,S=d,x=d*2,A=-1;o==="RGB"&&(f=3,g=0,b=1,y=2,$=-1),l==="RGBA"?A=d*3:l==="RBG"?(C=0,x=d,S=d*2):l==="BGR"&&(x=0,S=d,C=d*2);for(let E=0;E<d;E++,g+=f,y+=f,b+=f,$+=f)p[C++]=(e[g]+a[0])/s[0],p[S++]=(e[b]+a[1])/s[1],p[x++]=(e[y]+a[2])/s[2],A!==-1&&$!==-1&&(p[A++]=(e[$]+a[3])/s[3]);return l==="RGBA"?new yr("float32",p,[1,4,r,n]):new yr("float32",p,[1,3,r,n])},cy=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(r){let p=l();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let g=e.height,b=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,b=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=g,o.width=b}else o.tensorFormat="RGBA",o.height=g,o.width=b;f.drawImage(e,0,0),a=f.getImageData(0,0,b,g).data}else throw new Error("Can not access image data")}else if(n){let p,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,f=t.resizedWidth):(p=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=f,t!==void 0){let g=l();g.width=f,g.height=p;let b=d(g);if(b!=null)b.putImageData(e,0,0),a=b.getImageData(0,0,f,p).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=l();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let g=e.height,b=e.width;return f.drawImage(e,0,0,b,g),a=f.getImageData(0,0,b,g).data,o.height=g,o.width=b,ao(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((p,f)=>{let g=l(),b=d(g);if(!e||!b)return f();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{g.width=y.width,g.height=y.height,b.drawImage(y,0,0,g.width,g.height);let $=b.getImageData(0,0,g.width,g.height);o.height=g.height,o.width=g.width,p(ao($.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return ao(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},py=(e,t)=>{let{width:r,height:n,download:i,dispose:s}=t,a=[1,n,r,4];return new yr({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:s})},fy=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new yr({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:s})},hy=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new yr({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:s})},my=(e,t,r)=>new yr({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Ci,Fs,Ql,gy,Nx=pe(()=>{"use strict";Ci=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Fs=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ql=!1,gy=()=>{if(!Ql){Ql=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(Ci.set("int64",BigInt64Array),Fs.set(BigInt64Array,"int64")),t&&(Ci.set("uint64",BigUint64Array),Fs.set(BigUint64Array,"uint64")),n?(Ci.set("float16",r),Fs.set(r,"float16")):Ci.set("float16",Uint16Array)}}}),yy,by,Ux=pe(()=>{"use strict";Gd(),yy=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},by=(e,t)=>{switch(e.location){case"cpu":return new yr(e.type,e.data,t);case"cpu-pinned":return new yr({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new yr({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new yr({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new yr({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),yr,Gd=pe(()=>{"use strict";Px(),Dx(),Nx(),Ux(),yr=class{constructor(e,t,r){gy();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=Ci.get(n);if(!a)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let l=Ci.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?a=l.from(t,BigInt):a=l.from(t)}else if(t instanceof l)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")n="string",a=e;else if(l==="boolean")n="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",a=Uint8Array.from(e);else{let l=Fs.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=l,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=a,this.dataLocation="cpu"}let s=yy(i);if(this.cpuData&&s!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=s}static async fromImage(e,t){return cy(e,t)}static fromTexture(e,t){return py(e,t)}static fromGpuBuffer(e,t){return fy(e,t)}static fromMLTensor(e,t){return hy(e,t)}static fromPinnedBuffer(e,t,r){return my(e,t,r)}toDataURL(e){return uy(this,e)}toImageData(e){return dy(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return by(this,e)}}}),Fr,vy=pe(()=>{"use strict";Gd(),Fr=yr}),No,Jl,pn,Wr,Bi,Pi,wy=pe(()=>{"use strict";ly(),No=(e,t)=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||console.timeStamp(`${e}::ORT::${t}`)},Jl=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(s+=`::${t}`),No("CPU",s);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},pn=e=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||Jl("BEGIN",e)},Wr=e=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||Jl("END",e)},Bi=e=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||console.time(`ORT::${e}`)},Pi=e=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||console.timeEnd(`ORT::${e}`)}}),_y,Lx=pe(()=>{"use strict";ay(),vy(),wy(),_y=class xy{constructor(t){this.handler=t}async run(t,r,n){pn(),Bi("InferenceSession.run");let i={},s={};if(typeof t!="object"||t===null||t instanceof Fr||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Fr)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,p=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(p.indexOf(f)!==-1){let g=r[f];(g===null||g instanceof Fr)&&(d=!0,a=!1,i[f]=g)}if(d){if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,s),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let p=o[d];p instanceof Fr?l[d]=p:l[d]=new Fr(p.type,p.data,p.dims)}return Pi("InferenceSession.run"),Wr(),l}async release(){return this.handler.dispose()}static async create(t,r,n,i){pn(),Bi("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,f=0,g=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(g=t.byteLength-f,typeof n=="number"){if(g=n,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||f+g>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-f}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(p,f,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await sy(a),d=await o.createInferenceSessionHandler(s,l);return Pi("InferenceSession.create"),Wr(),new xy(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Uo,Fx=pe(()=>{"use strict";Lx(),Uo=_y}),Vx=pe(()=>{"use strict"}),jx=pe(()=>{"use strict"}),Wx=pe(()=>{"use strict"}),qx=pe(()=>{"use strict"}),Hx={};fs(Hx,{InferenceSession:()=>Uo,TRACE:()=>No,TRACE_EVENT_BEGIN:()=>Bi,TRACE_EVENT_END:()=>Pi,TRACE_FUNC_BEGIN:()=>pn,TRACE_FUNC_END:()=>Wr,Tensor:()=>Fr,env:()=>_t,registerBackend:()=>rs});var zr=pe(()=>{"use strict";Mx(),Bx(),Fx(),vy(),Vx(),jx(),wy(),Wx(),qx()}),Kd=pe(()=>{"use strict"}),$y={};fs($y,{default:()=>Sy});var eu,tu,Sy,Gx=pe(()=>{"use strict";zw(),Fi(),Xd(),eu="ort-wasm-proxy-worker",tu=globalThis.self?.name===eu,tu&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Yd(r.wasm).then(()=>{fc(r).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})})},n=>{postMessage({type:t,err:n})});break;case"init-ep":{let{epName:n,env:i}=r;hc(i,n).then(()=>{postMessage({type:t})},s=>{postMessage({type:t,err:s})});break}case"copy-from":{let{buffer:n}=r,i=Ho(n);postMessage({type:t,out:i});break}case"create":{let{model:n,options:i}=r;mc(n,i).then(s=>{postMessage({type:t,out:s})},s=>{postMessage({type:t,err:s})});break}case"release":gc(r),postMessage({type:t});break;case"run":{let{sessionId:n,inputIndices:i,inputs:s,outputIndices:a,options:o}=r;yc(n,i,s,a,new Array(a.length).fill(null),o).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},vc([...s,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":bc(r),postMessage({type:t});break;default:}}catch(n){postMessage({type:t,err:n})}}),Sy=tu?null:e=>new Worker(e??gr,{type:"module",name:eu})}),Ty={};fs(Ty,{default:()=>ky});async function rf(e={}){var t=e,r=!!globalThis.window,n=!!globalThis.WorkerGlobalScope,i=n&&self.name?.startsWith("em-pthread");t.mountExternalData=(c,h)=>{c.startsWith("./")&&(c=c.substring(2)),(t.ad||(t.ad=new Map)).set(c,h)},t.unmountExternalData=()=>{delete t.ad,delete t.Yd,delete t.Xd,delete t.be},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=c=>async(...h)=>{try{if(t.$c)throw Error("Session already started");let _=t.$c={Nd:h[0],errors:[]},w=await c(...h);if(t.$c!==_)throw Error("Session mismatch");t.hd?.flush();let I=_.errors;if(0<I.length){let P=await Promise.all(I);if(P=P.filter(j=>j),0<P.length)throw Error(P.join(`
`))}return w}finally{t.$c=null}};t.jsepInit=(c,h)=>{if(c==="webgpu"){[t.hd,t.Dd,t.Hd,t.jd,t.Gd,t.bc,t.Id,t.Kd,t.Ed,t.Fd,t.Jd]=h;let _=t.hd;t.jsepRegisterBuffer=(w,I,P,j)=>_.registerBuffer(w,I,P,j),t.jsepGetBuffer=w=>_.getBuffer(w),t.jsepCreateDownloader=(w,I,P)=>_.createDownloader(w,I,P),t.jsepOnCreateSession=w=>{_.onCreateSession(w)},t.jsepOnReleaseSession=w=>{_.onReleaseSession(w)},t.jsepOnRunStart=w=>_.onRunStart(w),t.Ld=(w,I)=>{_.upload(w,I)}}else if(c==="webnn"){let _=h[0];[t.Vd,t.vd,t.webnnEnsureTensor,t.wd,t.webnnDownloadTensor,t.Ud,t.webnnEnableTraceEvent]=h.slice(1),t.webnnReleaseTensorId=t.vd,t.webnnUploadTensor=t.wd,t.webnnRegisterMLContext=t.Ud,t.webnnOnRunStart=w=>_.onRunStart(w),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=w=>{_.onReleaseSession(w)},t.webnnCreateMLTensorDownloader=(w,I)=>_.createMLTensorDownloader(w,I),t.webnnRegisterMLTensor=(w,I,P,j)=>_.registerMLTensor(w,I,P,j),t.webnnCreateMLContext=w=>_.createMLContext(w),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let a=()=>{let c=h=>(..._)=>{let w=xr;return _=h(..._),xr!=w?new Promise((I,P)=>{ir={resolve:I,reject:P}}):_};(()=>{for(let h of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[h]=c(t[h])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a?.()};var o,l,d=(c,h)=>{throw h},p=import.meta.url,f="";if(r||n){try{f=new URL(".",p).href}catch{}n&&(l=c=>{var h=new XMLHttpRequest;return h.open("GET",c,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),o=async c=>{if(N(c))return new Promise((_,w)=>{var I=new XMLHttpRequest;I.open("GET",c,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?_(I.response):w(I.status)},I.onerror=w,I.send(null)});var h=await fetch(c,{credentials:"same-origin"});if(h.ok)return h.arrayBuffer();throw Error(h.status+" : "+h.url)}}var g,b,y,$,C,S,x=console.log.bind(console),A=console.error.bind(console),E=x,O=A,D=!1,N=c=>c.startsWith("file://");function k(){je.buffer!=Z.buffer&&$e()}if(i){let c=function(h){try{var _=h.data,w=_.Vc;if(w==="load"){let I=[];self.onmessage=P=>I.push(P),S=()=>{postMessage({Vc:"loaded"});for(let P of I)c(P);self.onmessage=c};for(let P of _.Ad)t[P]&&!t[P].proxy||(t[P]=(...j)=>{postMessage({Vc:"callHandler",yd:P,args:j})},P=="print"&&(E=t[P]),P=="printErr"&&(O=t[P]));je=_.Rd,$e(),b=_.Sd,yt(),Za()}else if(w==="run"){(function(I){var P=(k(),J)[I+52>>>2>>>0];I=(k(),J)[I+56>>>2>>>0],Tc(P,P-I),Ge(P)})(_.Uc),Dn(_.Uc,0,0,1,0,0),Oe(),Mn(_.Uc),q||(Ya(),q=!0);try{Je(_.Pd,_.ed)}catch(I){if(I!="unwind")throw I}}else _.target!=="setimmediate"&&(w==="checkMailbox"?q&&di():w&&(O(`worker: received unknown command ${w}`),O(_)))}catch(I){throw wc(),I}};var q=!1;self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=c}var Z,ae,X,le,W,J,te,ue,ce,we,ke,re=!1;function $e(){var c=je.buffer;t.HEAP8=Z=new Int8Array(c),X=new Int16Array(c),t.HEAPU8=ae=new Uint8Array(c),le=new Uint16Array(c),t.HEAP32=W=new Int32Array(c),t.HEAPU32=J=new Uint32Array(c),te=new Float32Array(c),ue=new Float64Array(c),ce=new BigInt64Array(c),we=new BigUint64Array(c)}function _e(){re=!0,i?S():bn.ub()}function xe(c){throw O(c="Aborted("+c+")"),D=!0,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),C?.(c),c}function mt(){return{a:{ma:Hw,hb:qw,g:Tt,J:pr,f:Hr,o:Jn,i:Mr,$:oe,b:V,S:he,Ha:Ht,n:Pt,aa:ya,Ya:hn,Da:ba,Fa:wr,Za:Gr,Wa:hs,Pa:At,Va:fr,ka:ji,Ea:va,Ba:ti,Xa:Wi,Ca:ri,cb:ni,fa:ai,wa:ms,ua:Hi,ea:wa,N:gs,H:ul,va:_a,_:ka,xa:dl,Sa:cl,za:Ea,Ia:pl,sa:fl,ga:hl,Ra:Mn,$a:ml,Q:Oa,r:yl,c:oi,ib:bl,y:hi,M:Ma,D:Ra,l:vl,s:Ba,jb:Yi,I:Pa,R:wl,j:Da,u:_l,q:xl,k:xs,Ma:Na,Na:$l,Oa:Va,Ka:ja,La:Wa,ta:qa,eb:Tl,bb:kl,v:Ga,ba:Ka,ha:u,ab:Zi,V:m,_a:v,Aa:T,F:Sl,U:z,la:de,ya:ve,gb:G,fb:De,Ta:He,Ua:wt,Ga:me,T:bt,Ja:Ut,ja:sr,Qa:Zt,ia:Lt,lb:I1,na:S1,mb:E1,oa:$1,G:p1,e:Yw,t:Kw,w:Gw,B:a1,nb:w1,Z:v1,x:Jw,pa:_1,X:T1,ca:b1,ob:y1,pb:g1,O:o1,qb:h1,qa:m1,rb:f1,L:d1,Y:x1,d:Xw,A:Qw,m:Zw,kb:A1,p:t1,z:r1,C:e1,E:n1,K:l1,ra:c1,P:k1,da:u1,W:C1,sb:s1,tb:i1,h:Zr,a:je,db:ne}}}async function yt(){function c(w,I){var P=bn=w.exports;w={};for(let[j,ee]of Object.entries(P))typeof ee=="function"?(P=ci(ee),w[j]=P):w[j]=ee;return bn=w,bn=function(){var j=bn,ee=Te=>Fe=>Te(Fe)>>>0,ye=Te=>()=>Te()>>>0;return(j=Object.assign({},j)).vb=ee(j.vb),j.Zb=ye(j.Zb),j.$b=ee(j.$b),j.nc=ee(j.nc),j.oc=ye(j.oc),j.sc=ee(j.sc),j}(),ie.push(bn.ac),Xa=(w=bn).vb,Ya=w.wb,t._OrtInit=w.xb,t._OrtGetLastError=w.yb,t._OrtCreateSessionOptions=w.zb,t._OrtAppendExecutionProvider=w.Ab,t._OrtAddFreeDimensionOverride=w.Bb,t._OrtAddSessionConfigEntry=w.Cb,t._OrtReleaseSessionOptions=w.Db,t._OrtCreateSession=w.Eb,t._OrtReleaseSession=w.Fb,t._OrtGetInputOutputCount=w.Gb,t._OrtGetInputOutputMetadata=w.Hb,t._OrtFree=w.Ib,t._OrtCreateTensor=w.Jb,t._OrtGetTensorData=w.Kb,t._OrtReleaseTensor=w.Lb,t._OrtCreateRunOptions=w.Mb,t._OrtAddRunConfigEntry=w.Nb,t._OrtReleaseRunOptions=w.Ob,t._OrtCreateBinding=w.Pb,t._OrtBindInput=w.Qb,t._OrtBindOutput=w.Rb,t._OrtClearBoundOutputs=w.Sb,t._OrtReleaseBinding=w.Tb,t._OrtRunWithBinding=w.Ub,t._OrtRun=w.Vb,t._OrtEndProfiling=w.Wb,t._JsepOutput=w.Xb,t._JsepGetNodeName=w.Yb,Qi=w.Zb,$r=t._free=w._b,mi=t._malloc=w.$b,Dn=w.cc,wc=w.dc,_c=w.ec,xc=w.fc,Cl=w.gc,$c=w.hc,Sc=w.ic,Ze=w.jc,Ss=w.kc,Tc=w.lc,Ge=w.mc,El=w.nc,Xe=w.oc,kc=w.pc,Il=w.qc,Cc=w.rc,Ec=w.sc,Ic=w.tc,Al=w.uc,Ac=w.vc,Oc=w.wc,zc=w.xc,Mc=w.yc,Rc=w.zc,Bc=w.Ac,Pc=w.Bc,Dc=w.Cc,Nc=w.Dc,Uc=w.Ec,Lc=w.Fc,Fc=w.Gc,Vc=w.Hc,jc=w.Ic,Wc=w.Jc,qc=w.Kc,Hc=w.Lc,Gc=w.Mc,Kc=w.Nc,Xc=w.Oc,Yc=w.Pc,Zc=w.Qc,Qc=w.Sc,Jc=w.Tc,ep=w.cd,tp=w.dd,rp=w.id,np=w.nd,ip=w.od,sp=w.pd,ap=w.qd,op=w.rd,lp=w.sd,up=w.td,dp=w.ud,cp=w.zd,pp=w.Zd,fp=w._d,hp=w.$d,mp=w.ae,b=I,bn}var h,_=mt();return t.instantiateWasm?new Promise(w=>{t.instantiateWasm(_,(I,P)=>{w(c(I,P))})}):i?c(new WebAssembly.Instance(b,mt()),b):(ke??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",f):f+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-MDYUKy93.wasm",import.meta.url).href,h=await async function(w){var I=ke;if(!g&&!N(I))try{var P=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(P,w)}catch(j){O(`wasm streaming compile failed: ${j}`),O("falling back to ArrayBuffer instantiation")}return async function(j,ee){try{var ye=await async function(Te){if(!g)try{var Fe=await o(Te);return new Uint8Array(Fe)}catch{}if(Te==ke&&g)Te=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";Te=l(Te)}return Te}(j);return await WebAssembly.instantiate(ye,ee)}catch(Te){O(`failed to asynchronously prepare wasm: ${Te}`),xe(Te)}}(I,w)}(_),c(h.instance,h.module))}class it{name="ExitStatus";constructor(h){this.message=`Program terminated with exit(${h})`,this.status=h}}var Et=c=>{c.terminate(),c.onmessage=()=>{}},Ve=[],ot=0,M=null,L=c=>{fe.length==0&&(qe(),Me(fe[0]));var h=fe.pop();if(!h)return 6;ge.push(h),Ee[c.Uc]=h,h.Uc=c.Uc;var _={Vc:"run",Pd:c.Od,ed:c.ed,Uc:c.Uc};return h.postMessage(_,c.md),0},H=0,Y=(c,h,..._)=>{var w,I=16*_.length,P=Xe(),j=El(I),ee=j>>>3;for(w of _)typeof w=="bigint"?((k(),ce)[ee++>>>0]=1n,(k(),ce)[ee++>>>0]=w):((k(),ce)[ee++>>>0]=0n,(k(),ue)[ee++>>>0]=w);return c=_c(c,0,I,j,h),Ge(P),c};function ne(c){if(i)return Y(0,1,c);if(y=c,!(0<H)){for(var h of ge)Et(h);for(h of fe)Et(h);fe=[],ge=[],Ee={},D=!0}d(0,new it(c))}function se(c){if(i)return Y(1,0,c);me(c)}var me=c=>{if(y=c,i)throw se(c),"unwind";ne(c)},fe=[],ge=[],ie=[],Ee={},be=c=>{var h=c.Uc;delete Ee[h],fe.push(c),ge.splice(ge.indexOf(c),1),c.Uc=0,xc(h)};function Oe(){ie.forEach(c=>c())}var Me=c=>new Promise(h=>{c.onmessage=I=>{var P=I.data;if(I=P.Vc,P.bd&&P.bd!=Qi()){var j=Ee[P.bd];j?j.postMessage(P,P.md):O(`Internal error! Worker sent a message "${I}" to target pthread ${P.bd}, but that thread no longer exists!`)}else I==="checkMailbox"?di():I==="spawnThread"?L(P):I==="cleanupThread"?ui(()=>{be(Ee[P.Qd])}):I==="loaded"?(c.loaded=!0,h(c)):P.target==="setimmediate"?c.postMessage(P):I==="uncaughtException"?c.onerror(P.error):I==="callHandler"?t[P.yd](...P.args):I&&O(`worker sent an unknown command ${I}`)},c.onerror=I=>{throw O(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var _,w=[];for(_ of[])t.propertyIsEnumerable(_)&&w.push(_);c.postMessage({Vc:"load",Ad:w,Rd:je,Sd:b})});function qe(){var c=new Worker((()=>{let h=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new h("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});fe.push(c)}var je,Je=(c,h)=>{H=0,c=Al(c,h),0<H?y=c:Cl(c)},dt=[],pt=0;function Tt(c){var h=new Vt(c>>>=0);return(k(),Z)[h.Wc+12>>>0]==0&&(Jt(h,!0),pt--),Bt(h,!1),dt.push(h),Ec(c)}var It=0,pr=()=>{Ze(0,0);var c=dt.pop();kc(c.gd),It=0};function Jt(c,h){h=h?1:0,(k(),Z)[c.Wc+12>>>0]=h}function Bt(c,h){h=h?1:0,(k(),Z)[c.Wc+13>>>0]=h}class Vt{constructor(h){this.gd=h,this.Wc=h-24}}var qr=c=>{var h=It;if(!h)return Ss(0),0;var _=new Vt(h);(k(),J)[_.Wc+16>>>2>>>0]=h;var w=(k(),J)[_.Wc+4>>>2>>>0];if(!w)return Ss(0),h;for(var I of c){if(I===0||I===w)break;if(Cc(I,w,_.Wc+16))return Ss(I),h}return Ss(w),h};function Hr(){return qr([])}function Jn(c){return qr([c>>>0])}function Mr(c,h,_,w){return qr([c>>>0,h>>>0,_>>>0,w>>>0])}var oe=()=>{var c=dt.pop();c||xe("no exception to throw");var h=c.gd;throw(k(),Z)[c.Wc+13>>>0]==0&&(dt.push(c),Bt(c,!0),Jt(c,!1),pt++),Il(h),It=h};function V(c,h,_){var w=new Vt(c>>>=0);throw h>>>=0,_>>>=0,(k(),J)[w.Wc+16>>>2>>>0]=0,(k(),J)[w.Wc+4>>>2>>>0]=h,(k(),J)[w.Wc+8>>>2>>>0]=_,Il(c),pt++,It=c}var he=()=>pt;function lt(c,h,_,w){return i?Y(2,1,c,h,_,w):Ht(c,h,_,w)}function Ht(c,h,_,w){if(c>>>=0,h>>>=0,_>>>=0,w>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?lt(c,h,_,w):(c={Od:_,Uc:c,ed:w,md:I},i?(c.Vc="spawnThread",postMessage(c,I),0):L(c))}function Pt(c){throw It||=c>>>0,It}var Yt=globalThis.TextDecoder&&new TextDecoder,fn=(c,h,_,w)=>{if(_=h+_,w)return _;for(;c[h]&&!(h>=_);)++h;return h},ei=(c,h=0,_,w)=>{if(16<(_=fn(c,h>>>=0,_,w))-h&&c.buffer&&Yt)return Yt.decode(c.buffer instanceof ArrayBuffer?c.subarray(h,_):c.slice(h,_));for(w="";h<_;){var I=c[h++];if(128&I){var P=63&c[h++];if((224&I)==192)w+=String.fromCharCode((31&I)<<6|P);else{var j=63&c[h++];65536>(I=(240&I)==224?(15&I)<<12|P<<6|j:(7&I)<<18|P<<12|j<<6|63&c[h++])?w+=String.fromCharCode(I):(I-=65536,w+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else w+=String.fromCharCode(I)}return w},kt=(c,h,_)=>(c>>>=0)?ei((k(),ae),c,h,_):"";function ya(c,h,_){return i?Y(3,1,c,h,_):0}function hn(c,h){if(i)return Y(4,1,c,h)}function ba(c,h){if(i)return Y(5,1,c,h)}function wr(c,h,_){if(i)return Y(6,1,c,h,_)}function Gr(c,h,_){return i?Y(7,1,c,h,_):0}function hs(c,h){if(i)return Y(8,1,c,h)}function At(c,h,_){if(i)return Y(9,1,c,h,_)}function fr(c,h,_,w){if(i)return Y(10,1,c,h,_,w)}function ji(c,h,_,w){if(i)return Y(11,1,c,h,_,w)}function va(c,h,_,w){if(i)return Y(12,1,c,h,_,w)}function ti(c){if(i)return Y(13,1,c)}function Wi(c,h){if(i)return Y(14,1,c,h)}function ri(c,h,_){if(i)return Y(15,1,c,h,_)}var ni=()=>xe(""),hr=c=>{c>>>=0;for(var h="";;){var _=(k(),ae)[c++>>>0];if(!_)return h;h+=String.fromCharCode(_)}},ii={},si={},mn=class extends Error{constructor(c){super(c),this.name="BindingError"}};function Dt(c,h,_={}){return function(w,I,P={}){var j=I.name;if(!w)throw new mn(`type "${j}" must have a positive integer typeid pointer`);if(si.hasOwnProperty(w)){if(P.Bd)return;throw new mn(`Cannot register type '${j}' twice`)}si[w]=I,ii.hasOwnProperty(w)&&(I=ii[w],delete ii[w],I.forEach(ee=>ee()))}(c,h,_)}var mr=(c,h,_)=>{switch(h){case 1:return _?w=>(k(),Z)[w>>>0]:w=>(k(),ae)[w>>>0];case 2:return _?w=>(k(),X)[w>>>1>>>0]:w=>(k(),le)[w>>>1>>>0];case 4:return _?w=>(k(),W)[w>>>2>>>0]:w=>(k(),J)[w>>>2>>>0];case 8:return _?w=>(k(),ce)[w>>>3>>>0]:w=>(k(),we)[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${h}): ${c}`)}};function ai(c,h,_,w,I){c>>>=0,_>>>=0,h=hr(h>>>0);let P=j=>j;if(w=w===0n){let j=8*_;P=ee=>BigInt.asUintN(j,ee),I=P(I)}Dt(c,{name:h,Rc:P,Yc:(j,ee)=>(typeof ee=="number"&&(ee=BigInt(ee)),ee),Xc:mr(h,_,!w),Zc:null})}function ms(c,h,_,w){Dt(c>>>=0,{name:h=hr(h>>>0),Rc:function(I){return!!I},Yc:function(I,P){return P?_:w},Xc:function(I){return this.Rc((k(),ae)[I>>>0])},Zc:null})}var qi=[],Kr=[0,1,,1,null,1,!0,1,!1,1];function oi(c){9<(c>>>=0)&&--Kr[c+1]===0&&(Kr[c]=void 0,qi.push(c))}var Mt=c=>{if(!c)throw new mn(`Cannot use deleted val. handle = ${c}`);return Kr[c]},dr=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=qi.pop()||Kr.length;return Kr[h]=c,Kr[h+1]=1,h}};function zn(c){return this.Rc((k(),J)[c>>>2>>>0])}var _r={name:"emscripten::val",Rc:c=>{var h=Mt(c);return oi(c),h},Yc:(c,h)=>dr(h),Xc:zn,Zc:null};function Hi(c){return Dt(c>>>0,_r)}var ll=(c,h)=>{switch(h){case 4:return function(_){return this.Rc((k(),te)[_>>>2>>>0])};case 8:return function(_){return this.Rc((k(),ue)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${c}`)}};function wa(c,h,_){_>>>=0,Dt(c>>>=0,{name:h=hr(h>>>0),Rc:w=>w,Yc:(w,I)=>I,Xc:ll(h,_),Zc:null})}function gs(c,h,_,w,I){c>>>=0,_>>>=0,h=hr(h>>>0);let P=ee=>ee;if(w===0){var j=32-8*_;P=ee=>ee<<j>>>j,I=P(I)}Dt(c,{name:h,Rc:P,Yc:(ee,ye)=>ye,Xc:mr(h,_,w!==0),Zc:null})}function ul(c,h,_){function w(P){var j=(k(),J)[P>>>2>>>0];return P=(k(),J)[P+4>>>2>>>0],new I((k(),Z).buffer,P,j)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];Dt(c>>>=0,{name:_=hr(_>>>0),Rc:w,Xc:w},{Bd:!0})}var Xr=(c,h,_)=>{var w=(k(),ae);if(h>>>=0,0<_){var I=h;_=h+_-1;for(var P=0;P<c.length;++P){var j=c.codePointAt(P);if(127>=j){if(h>=_)break;w[h++>>>0]=j}else if(2047>=j){if(h+1>=_)break;w[h++>>>0]=192|j>>6,w[h++>>>0]=128|63&j}else if(65535>=j){if(h+2>=_)break;w[h++>>>0]=224|j>>12,w[h++>>>0]=128|j>>6&63,w[h++>>>0]=128|63&j}else{if(h+3>=_)break;w[h++>>>0]=240|j>>18,w[h++>>>0]=128|j>>12&63,w[h++>>>0]=128|j>>6&63,w[h++>>>0]=128|63&j,P++}}w[h>>>0]=0,c=h-I}else c=0;return c},li=c=>{for(var h=0,_=0;_<c.length;++_){var w=c.charCodeAt(_);127>=w?h++:2047>=w?h+=2:55296<=w&&57343>=w?(h+=4,++_):h+=3}return h};function _a(c,h){Dt(c>>>=0,{name:h=hr(h>>>0),Rc(_){var w=(k(),J)[_>>>2>>>0];return w=kt(_+4,w,!0),$r(_),w},Yc(_,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var I=typeof w=="string";if(!(I||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new mn("Cannot pass non-string to std::string");var P=I?li(w):w.length,j=mi(4+P+1),ee=j+4;return(k(),J)[j>>>2>>>0]=P,I?Xr(w,ee,P+1):(k(),ae).set(w,ee>>>0),_!==null&&_.push($r,j),j},Xc:zn,Zc(_){$r(_)}})}var ys=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,xa=(c,h,_)=>{if(c>>>=1,16<(h=fn((k(),le),c,h/2,_))-c&&ys)return ys.decode((k(),le).slice(c,h));for(_="";c<h;++c){var w=(k(),le)[c>>>0];_+=String.fromCharCode(w)}return _},er=(c,h,_)=>{if(_??=2147483647,2>_)return 0;var w=h;_=(_-=2)<2*c.length?_/2:c.length;for(var I=0;I<_;++I){var P=c.charCodeAt(I);(k(),X)[h>>>1>>>0]=P,h+=2}return(k(),X)[h>>>1>>>0]=0,h-w},$a=c=>2*c.length,Sa=(c,h,_)=>{var w="";c>>>=2;for(var I=0;!(I>=h/4);I++){var P=(k(),J)[c+I>>>0];if(!P&&!_)break;w+=String.fromCodePoint(P)}return w},Gi=(c,h,_)=>{if(h>>>=0,_??=2147483647,4>_)return 0;var w=h;_=w+_-4;for(var I=0;I<c.length;++I){var P=c.codePointAt(I);if(65535<P&&I++,(k(),W)[h>>>2>>>0]=P,(h+=4)+4>_)break}return(k(),W)[h>>>2>>>0]=0,h-w},Ta=c=>{for(var h=0,_=0;_<c.length;++_)65535<c.codePointAt(_)&&_++,h+=4;return h};function ka(c,h,_){if(c>>>=0,h>>>=0,_=hr(_>>>=0),h===2)var w=xa,I=er,P=$a;else w=Sa,I=Gi,P=Ta;Dt(c,{name:_,Rc:j=>{var ee=(k(),J)[j>>>2>>>0];return ee=w(j+4,ee*h,!0),$r(j),ee},Yc:(j,ee)=>{if(typeof ee!="string")throw new mn(`Cannot pass non-string to C++ string type ${_}`);var ye=P(ee),Te=mi(4+ye+h);return(k(),J)[Te>>>2>>>0]=ye/h,I(ee,Te+4,ye+h),j!==null&&j.push($r,Te),Te},Xc:zn,Zc(j){$r(j)}})}function dl(c,h){Dt(c>>>=0,{Cd:!0,name:h=hr(h>>>0),Rc:()=>{},Yc:()=>{}})}function cl(c){Dn(c>>>0,!n,1,!r,131072,!1),Oe()}var ui=c=>{if(!D)try{if(c(),!(0<H))try{i?Qi()&&Cl(y):me(y)}catch(h){h instanceof it||h=="unwind"||d(0,h)}}catch(h){h instanceof it||h=="unwind"||d(0,h)}},Ca=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Mn(c){c>>>=0,Ca||(Atomics.waitAsync((k(),W),c>>>2,c).value.then(di),c+=128,Atomics.store((k(),W),c>>>2,1))}var di=()=>ui(()=>{var c=Qi();c&&(Mn(c),Sc())});function Ea(c,h){(c>>>=0)==h>>>0?setTimeout(di):i?postMessage({bd:c,Vc:"checkMailbox"}):(c=Ee[c])&&c.postMessage({Vc:"checkMailbox"})}var gn=[];function pl(c,h,_,w,I){for(h>>>=0,I>>>=0,gn.length=0,_=I>>>3,w=I+w>>>3;_<w;){var P;P=(k(),ce)[_++>>>0]?(k(),ce)[_++>>>0]:(k(),ue)[_++>>>0],gn.push(P)}return(h?Ol[h]:Ww[c])(...gn)}var fl=()=>{H=0};function hl(c){c>>>=0,i?postMessage({Vc:"cleanupThread",Qd:c}):be(Ee[c])}function ml(c){}var Rn=c=>{try{c()}catch(h){xe(h)}};function ci(c){var h=(..._)=>{Ki.push(c);try{return c(..._)}finally{D||(Ki.pop(),xr&&Yr===1&&Ki.length===0&&(Yr=0,H+=1,Rn(fp),typeof Fibers<"u"&&Fibers.de()))}};return vs.set(c,h),h}var Yr=0,xr=null,Ia=0,Ki=[],pi=new Map,bs=new Map,vs=new Map,fi=0,ir=null,gl=[],Aa=c=>function(h){if(!D){if(Yr===0){var _=!1,w=!1;h((I=0)=>{if(!D&&(Ia=I,_=!0,w)){Yr=2,Rn(()=>hp(xr)),typeof MainLoop<"u"&&MainLoop.xd&&MainLoop.resume(),I=!1;try{var P=function(){var ye=(k(),W)[xr+8>>>2>>>0];return ye=bs.get(ye),ye=vs.get(ye),--H,ye()}()}catch(ye){P=ye,I=!0}var j=!1;if(!xr){var ee=ir;ee&&(ir=null,(I?ee.reject:ee.resolve)(P),j=!0)}if(I&&!j)throw P}}),w=!0,_||(Yr=1,xr=function(){var I=mi(65548),P=I+12;if((k(),J)[I>>>2>>>0]=P,(k(),J)[I+4>>>2>>>0]=P+65536,P=Ki[0],!pi.has(P)){var j=fi++;pi.set(P,j),bs.set(j,P)}return P=pi.get(P),(k(),W)[I+8>>>2>>>0]=P,I}(),typeof MainLoop<"u"&&MainLoop.xd&&MainLoop.pause(),Rn(()=>pp(xr)))}else Yr===2?(Yr=0,Rn(mp),$r(xr),xr=null,gl.forEach(ui)):xe(`invalid state: ${Yr}`);return Ia}}(h=>{c().then(h)});function Oa(c){return c>>>=0,Aa(async()=>{var h=await Mt(c);return dr(h)})}var Xi=[],ws=c=>{var h=Xi.length;return Xi.push(c),h},_s=(c,h)=>{for(var _=Array(c),w=0;w<c;++w){var I=w,P=(k(),J)[h+4*w>>>2>>>0],j=si[P];if(j===void 0)throw c=`parameter ${w}`,P=Xa(P),h=hr(P),$r(P),new mn(`${c} has unknown type ${h}`);_[I]=j}return _},Bn=(c,h,_)=>{var w=[];return c=c(w,_),w.length&&((k(),J)[h>>>2>>>0]=dr(w)),c},za={},Pn=c=>{var h=za[c];return h===void 0?hr(c):h};function yl(c,h,_){var[w,...I]=_s(c,h>>>0);h=w.Yc.bind(w);var P=I.map(ye=>ye.Xc.bind(ye));c--;var j={toValue:Mt};switch(c=P.map((ye,Te)=>{var Fe=`argFromPtr${Te}`;return j[Fe]=ye,`${Fe}(args${Te?"+"+8*Te:""})`}),_){case 0:var ee="toValue(handle)";break;case 2:ee="new (toValue(handle))";break;case 3:ee="";break;case 1:j.getStringOrSymbol=Pn,ee="toValue(handle)[getStringOrSymbol(methodName)]"}return ee+=`(${c})`,w.Cd||(j.toReturnWire=h,j.emval_returnValue=Bn,ee=`return emval_returnValue(toReturnWire, destructorsRef, ${ee})`),ee=`return function (handle, methodName, destructorsRef, args) {
  ${ee}
  }`,_=new Function(Object.keys(j),ee)(...Object.values(j)),ee=`methodCaller<(${I.map(ye=>ye.name)}) => ${w.name}>`,ws(Object.defineProperty(_,"name",{value:ee}))}function bl(c,h){return h>>>=0,(c=Mt(c>>>0))==Mt(h)}function hi(c){return(c>>>=0)?(c=Pn(c),dr(globalThis[c])):dr(globalThis)}function Ma(c){return c=Pn(c>>>0),dr(t[c])}function Ra(c,h){return h>>>=0,c=Mt(c>>>0),h=Mt(h),dr(c[h])}function vl(c){9<(c>>>=0)&&(Kr[c+1]+=1)}function Ba(c,h,_,w,I){return Xi[c>>>0](h>>>0,_>>>0,w>>>0,I>>>0)}function Yi(c,h,_,w,I){return Ba(c>>>0,h>>>0,_>>>0,w>>>0,I>>>0)}function Pa(){return dr([])}function wl(c){c=Mt(c>>>0);for(var h=Array(c.length),_=0;_<c.length;_++)h[_]=c[_];return dr(h)}function Da(c){return dr(Pn(c>>>0))}function _l(){return dr({})}function xl(c){for(var h=Mt(c>>>=0);h.length;){var _=h.pop();h.pop()(_)}oi(c)}function xs(c,h,_){h>>>=0,_>>>=0,c=Mt(c>>>0),h=Mt(h),_=Mt(_),c[h]=_}function Na(c,h){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),h>>>=0,c=new Date(1e3*c),(k(),W)[h>>>2>>>0]=c.getUTCSeconds(),(k(),W)[h+4>>>2>>>0]=c.getUTCMinutes(),(k(),W)[h+8>>>2>>>0]=c.getUTCHours(),(k(),W)[h+12>>>2>>>0]=c.getUTCDate(),(k(),W)[h+16>>>2>>>0]=c.getUTCMonth(),(k(),W)[h+20>>>2>>>0]=c.getUTCFullYear()-1900,(k(),W)[h+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(k(),W)[h+28>>>2>>>0]=c}var Ua=c=>c%4==0&&(c%100!=0||c%400==0),La=[0,31,60,91,121,152,182,213,244,274,305,335],Fa=[0,31,59,90,120,151,181,212,243,273,304,334];function $l(c,h){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),h>>>=0,c=new Date(1e3*c),(k(),W)[h>>>2>>>0]=c.getSeconds(),(k(),W)[h+4>>>2>>>0]=c.getMinutes(),(k(),W)[h+8>>>2>>>0]=c.getHours(),(k(),W)[h+12>>>2>>>0]=c.getDate(),(k(),W)[h+16>>>2>>>0]=c.getMonth(),(k(),W)[h+20>>>2>>>0]=c.getFullYear()-1900,(k(),W)[h+24>>>2>>>0]=c.getDay();var _=(Ua(c.getFullYear())?La:Fa)[c.getMonth()]+c.getDate()-1|0;(k(),W)[h+28>>>2>>>0]=_,(k(),W)[h+36>>>2>>>0]=-60*c.getTimezoneOffset(),_=new Date(c.getFullYear(),6,1).getTimezoneOffset();var w=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|(_!=w&&c.getTimezoneOffset()==Math.min(w,_)),(k(),W)[h+32>>>2>>>0]=c}function Va(c){c>>>=0;var h=new Date((k(),W)[c+20>>>2>>>0]+1900,(k(),W)[c+16>>>2>>>0],(k(),W)[c+12>>>2>>>0],(k(),W)[c+8>>>2>>>0],(k(),W)[c+4>>>2>>>0],(k(),W)[c>>>2>>>0],0),_=(k(),W)[c+32>>>2>>>0],w=h.getTimezoneOffset(),I=new Date(h.getFullYear(),6,1).getTimezoneOffset(),P=new Date(h.getFullYear(),0,1).getTimezoneOffset(),j=Math.min(P,I);return 0>_?(k(),W)[c+32>>>2>>>0]=+(I!=P&&j==w):0<_!=(j==w)&&(I=Math.max(P,I),h.setTime(h.getTime()+6e4*((0<_?j:I)-w))),(k(),W)[c+24>>>2>>>0]=h.getDay(),_=(Ua(h.getFullYear())?La:Fa)[h.getMonth()]+h.getDate()-1|0,(k(),W)[c+28>>>2>>>0]=_,(k(),W)[c>>>2>>>0]=h.getSeconds(),(k(),W)[c+4>>>2>>>0]=h.getMinutes(),(k(),W)[c+8>>>2>>>0]=h.getHours(),(k(),W)[c+12>>>2>>>0]=h.getDate(),(k(),W)[c+16>>>2>>>0]=h.getMonth(),(k(),W)[c+20>>>2>>>0]=h.getYear(),c=h.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function ja(c,h,_,w,I,P,j){return i?Y(16,1,c,h,_,w,I,P,j):-52}function Wa(c,h,_,w,I,P){if(i)return Y(17,1,c,h,_,w,I,P)}var yn={},Sl=()=>performance.timeOrigin+performance.now();function qa(c,h){if(i)return Y(18,1,c,h);if(yn[c]&&(clearTimeout(yn[c].id),delete yn[c]),!h)return 0;var _=setTimeout(()=>{delete yn[c],ui(()=>$c(c,performance.timeOrigin+performance.now()))},h);return yn[c]={id:_,ce:h},0}function Tl(c,h,_,w){c>>>=0,h>>>=0,_>>>=0,w>>>=0;var I=new Date().getFullYear(),P=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var j=Math.max(P,I);(k(),J)[c>>>2>>>0]=60*j,(k(),W)[h>>>2>>>0]=+(P!=I),c=(h=ee=>{var ye=Math.abs(ee);return`UTC${0<=ee?"-":"+"}${String(Math.floor(ye/60)).padStart(2,"0")}${String(ye%60).padStart(2,"0")}`})(P),h=h(I),I<P?(Xr(c,_,17),Xr(h,w,17)):(Xr(c,w,17),Xr(h,_,17))}var Zi=()=>Date.now();function kl(c,h,_){return _>>>=0,0<=c&&3>=c?(c===0?c=Date.now():c=performance.timeOrigin+performance.now(),c=Math.round(1e6*c),(k(),ce)[_>>>3>>>0]=BigInt(c),0):28}var $s=[],Ha=(c,h)=>{$s.length=0;for(var _;_=(k(),ae)[c++>>>0];){var w=_!=105;h+=(w&=_!=112)&&h%8?4:0,$s.push(_==112?(k(),J)[h>>>2>>>0]:_==106?(k(),ce)[h>>>3>>>0]:_==105?(k(),W)[h>>>2>>>0]:(k(),ue)[h>>>3>>>0]),h+=w?8:4}return $s};function Ga(c,h,_){return c>>>=0,h=Ha(h>>>0,_>>>0),Ol[c](...h)}function Ka(c,h,_){return c>>>=0,h=Ha(h>>>0,_>>>0),Ol[c](...h)}var u=()=>{};function m(c,h){return O(kt(c>>>0,h>>>0))}var v=()=>{throw H+=1,"unwind"};function T(){return 4294901760}var z=()=>navigator.hardwareConcurrency,B={},R=c=>{var h;return(h=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(c))?+h[1]:(h=/:(\d+):\d+(?:\)|$)/.exec(c))?2147483648|+h[1]:0},F=c=>{for(var h of c)(c=R(h))&&(B[c]=h)};function G(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),F(c),B.kd=R(c[3]),B.Md=c,B.kd}function de(c){if(!(c=B[c>>>0]))return 0;var h;if(h=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(c))c=h[1];else if(h=/^\s+at (.*) \(.*\)$/.exec(c))c=h[1];else{if(!(h=/^(.+?)@/.exec(c)))return 0;c=h[1]}$r(de.ld??0),h=li(c)+1;var _=mi(h);return _&&Xr(c,_,h),de.ld=_,de.ld}function ve(c){c>>>=0;var h=(k(),ae).length;if(c<=h||4294901760<c)return!1;for(var _=1;4>=_;_*=2){var w=h*(1+.2/_);w=Math.min(w,c+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(c,w)/65536))-je.buffer.byteLength+65535)/65536|0;try{je.grow(w),$e();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function De(c,h,_){if(c>>>=0,h>>>=0,B.kd==c)var w=B.Md;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),F(w);for(var I=3;w[I]&&R(w[I])!=c;)++I;for(c=0;c<_&&w[c+I];++c)(k(),W)[h+4*c>>>2>>>0]=R(w[c+I]);return c}var ze,Se={},Pe=()=>{if(!ze){var c,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(c in Se)Se[c]===void 0?delete h[c]:h[c]=Se[c];var _=[];for(c in h)_.push(`${c}=${h[c]}`);ze=_}return ze};function He(c,h){if(i)return Y(19,1,c,h);c>>>=0,h>>>=0;var _,w=0,I=0;for(_ of Pe()){var P=h+w;(k(),J)[c+I>>>2>>>0]=P,w+=Xr(_,P,1/0)+1,I+=4}return 0}function wt(c,h){if(i)return Y(20,1,c,h);c>>>=0,h>>>=0;var _=Pe();for(var w of((k(),J)[c>>>2>>>0]=_.length,c=0,_))c+=li(w)+1;return(k(),J)[h>>>2>>>0]=c,0}function bt(c){return i?Y(21,1,c):52}function Ut(c,h,_,w,I){return i?Y(22,1,c,h,_,w,I):52}function sr(c,h,_,w){return i?Y(23,1,c,h,_,w):52}function Zt(c,h,_,w){return i?Y(24,1,c,h,_,w):70}var st=[null,[],[]];function Lt(c,h,_,w){if(i)return Y(25,1,c,h,_,w);h>>>=0,_>>>=0,w>>>=0;for(var I=0,P=0;P<_;P++){var j=(k(),J)[h>>>2>>>0],ee=(k(),J)[h+4>>>2>>>0];h+=8;for(var ye=0;ye<ee;ye++){var Te=c,Fe=(k(),ae)[j+ye>>>0],rt=st[Te];Fe===0||Fe===10?((Te===1?E:O)(ei(rt)),rt.length=0):rt.push(Fe)}I+=ee}return(k(),J)[w>>>2>>>0]=I,0}function Zr(c){return c>>>0}i||function(){for(var c=t.numThreads-1;c--;)qe();Ve.push(async()=>{var h=async function(){if(!i)return Promise.all(fe.map(Me))}();ot++,await h,--ot==0&&M&&(h=M,M=null,h())})}(),i||(je=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),$e()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>Xe(),t.stackRestore=c=>Ge(c),t.stackAlloc=c=>El(c),t.setValue=function(c,h,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":(k(),Z)[c>>>0]=h;break;case"i16":(k(),X)[c>>>1>>>0]=h;break;case"i32":(k(),W)[c>>>2>>>0]=h;break;case"i64":(k(),ce)[c>>>3>>>0]=BigInt(h);break;case"float":(k(),te)[c>>>2>>>0]=h;break;case"double":(k(),ue)[c>>>3>>>0]=h;break;case"*":(k(),J)[c>>>2>>>0]=h;break;default:xe(`invalid type for setValue: ${_}`)}},t.getValue=function(c,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return(k(),Z)[c>>>0];case"i16":return(k(),X)[c>>>1>>>0];case"i32":return(k(),W)[c>>>2>>>0];case"i64":return(k(),ce)[c>>>3>>>0];case"float":return(k(),te)[c>>>2>>>0];case"double":return(k(),ue)[c>>>3>>>0];case"*":return(k(),J)[c>>>2>>>0];default:xe(`invalid type for getValue: ${h}`)}},t.UTF8ToString=kt,t.stringToUTF8=Xr,t.lengthBytesUTF8=li;var Xa,Ya,Qi,$r,mi,Dn,wc,_c,xc,Cl,$c,Sc,Ze,Ss,Tc,Ge,El,Xe,kc,Il,Cc,Ec,Ic,Al,Ac,Oc,zc,Mc,Rc,Bc,Pc,Dc,Nc,Uc,Lc,Fc,Vc,jc,Wc,qc,Hc,Gc,Kc,Xc,Yc,Zc,Qc,Jc,ep,tp,rp,np,ip,sp,ap,op,lp,up,dp,cp,pp,fp,hp,mp,bn,Ww=[ne,se,lt,ya,hn,ba,wr,Gr,hs,At,fr,ji,va,ti,Wi,ri,ja,Wa,qa,He,wt,bt,Ut,sr,Zt,Lt],Ol={1086876:(c,h,_,w,I)=>{if(t===void 0||!t.ad)return 1;if((c=kt(Number(c>>>0))).startsWith("./")&&(c=c.substring(2)),!(c=t.ad.get(c)))return 2;if(h=Number(h>>>0),_=Number(_>>>0),w=Number(w>>>0),h+_>c.byteLength)return 3;try{let P=c.subarray(h,h+_);switch(I){case 0:(k(),ae).set(P,w>>>0);break;case 1:t.Td?t.Td(w,P):t.Ld(w,P);break;default:return 4}return 0}catch{return 4}},1087700:(c,h,_)=>{t.wd(c,(k(),ae).subarray(h>>>0,h+_>>>0))},1087764:()=>t.Vd(),1087806:c=>{t.vd(c)},1087843:()=>{t.Ed()},1087874:()=>{t.Fd()},1087903:()=>{t.Jd()},1087928:c=>t.Dd(c),1087961:c=>t.Hd(c),1087993:(c,h,_)=>{t.jd(Number(c),Number(h),Number(_),!0)},1088056:(c,h,_)=>{t.jd(Number(c),Number(h),Number(_))},1088113:()=>typeof wasmOffsetConverter<"u",1088170:c=>{t.bc("Abs",c,void 0)},1088221:c=>{t.bc("Neg",c,void 0)},1088272:c=>{t.bc("Floor",c,void 0)},1088325:c=>{t.bc("Ceil",c,void 0)},1088377:c=>{t.bc("Reciprocal",c,void 0)},1088435:c=>{t.bc("Sqrt",c,void 0)},1088487:c=>{t.bc("Exp",c,void 0)},1088538:c=>{t.bc("Erf",c,void 0)},1088589:c=>{t.bc("Sigmoid",c,void 0)},1088644:(c,h,_)=>{t.bc("HardSigmoid",c,{alpha:h,beta:_})},1088723:c=>{t.bc("HardSwish",c,void 0)},1088780:c=>{t.bc("Log",c,void 0)},1088831:c=>{t.bc("Sin",c,void 0)},1088882:c=>{t.bc("Cos",c,void 0)},1088933:c=>{t.bc("Tan",c,void 0)},1088984:c=>{t.bc("Asin",c,void 0)},1089036:c=>{t.bc("Acos",c,void 0)},1089088:c=>{t.bc("Atan",c,void 0)},1089140:c=>{t.bc("Sinh",c,void 0)},1089192:c=>{t.bc("Cosh",c,void 0)},1089244:c=>{t.bc("Asinh",c,void 0)},1089297:c=>{t.bc("Acosh",c,void 0)},1089350:c=>{t.bc("Atanh",c,void 0)},1089403:c=>{t.bc("Tanh",c,void 0)},1089455:c=>{t.bc("Not",c,void 0)},1089506:(c,h,_)=>{t.bc("Clip",c,{min:h,max:_})},1089575:c=>{t.bc("Clip",c,void 0)},1089627:(c,h)=>{t.bc("Elu",c,{alpha:h})},1089685:c=>{t.bc("Gelu",c,void 0)},1089737:c=>{t.bc("Relu",c,void 0)},1089789:(c,h)=>{t.bc("LeakyRelu",c,{alpha:h})},1089853:(c,h)=>{t.bc("ThresholdedRelu",c,{alpha:h})},1089923:(c,h)=>{t.bc("Cast",c,{to:h})},1089981:c=>{t.bc("Add",c,void 0)},1090032:c=>{t.bc("Sub",c,void 0)},1090083:c=>{t.bc("Mul",c,void 0)},1090134:c=>{t.bc("Div",c,void 0)},1090185:c=>{t.bc("Pow",c,void 0)},1090236:c=>{t.bc("Equal",c,void 0)},1090289:c=>{t.bc("Greater",c,void 0)},1090344:c=>{t.bc("GreaterOrEqual",c,void 0)},1090406:c=>{t.bc("Less",c,void 0)},1090458:c=>{t.bc("LessOrEqual",c,void 0)},1090517:(c,h,_,w,I)=>{t.bc("ReduceMean",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),W).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1090692:(c,h,_,w,I)=>{t.bc("ReduceMax",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),W).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1090866:(c,h,_,w,I)=>{t.bc("ReduceMin",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),W).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091040:(c,h,_,w,I)=>{t.bc("ReduceProd",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),W).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091215:(c,h,_,w,I)=>{t.bc("ReduceSum",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),W).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091389:(c,h,_,w,I)=>{t.bc("ReduceL1",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),W).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091562:(c,h,_,w,I)=>{t.bc("ReduceL2",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),W).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091735:(c,h,_,w,I)=>{t.bc("ReduceLogSum",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),W).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091912:(c,h,_,w,I)=>{t.bc("ReduceSumSquare",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),W).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1092092:(c,h,_,w,I)=>{t.bc("ReduceLogSumExp",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),W).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1092272:c=>{t.bc("Where",c,void 0)},1092325:(c,h,_)=>{t.bc("Transpose",c,{perm:h?Array.from((k(),W).subarray(Number(h)>>>0,Number(_)>>>0)):[]})},1092449:(c,h,_,w)=>{t.bc("DepthToSpace",c,{blocksize:h,mode:kt(_),format:w?"NHWC":"NCHW"})},1092582:(c,h,_,w)=>{t.bc("DepthToSpace",c,{blocksize:h,mode:kt(_),format:w?"NHWC":"NCHW"})},1092715:(c,h,_,w)=>{t.bc("DFT",c,{axis:h,inverse:_,onesided:w})},1092807:(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt,vt,$t,Nn)=>{t.bc("ConvTranspose",c,{format:ye?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[I],pads:[P,j],strides:[ee],wIsConst:()=>!!(k(),Z)[Te>>>0],outputPadding:Fe?Array.from((k(),W).subarray(Number(Fe)>>>0,Number(rt)>>>0)):[],outputShape:vt?Array.from((k(),W).subarray(Number(vt)>>>0,Number($t)>>>0)):[],activation:kt(Nn)})},1093240:(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt,vt,$t)=>{t.bc("ConvTranspose",c,{format:ee?"NHWC":"NCHW",autoPad:h,dilations:Array.from((k(),W).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((k(),W).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((k(),W).subarray(Number(P)>>>0,(Number(P)>>>0)+4>>>0)),strides:Array.from((k(),W).subarray(Number(j)>>>0,(Number(j)>>>0)+2>>>0)),wIsConst:()=>!!(k(),Z)[ye>>>0],outputPadding:Te?Array.from((k(),W).subarray(Number(Te)>>>0,Number(Fe)>>>0)):[],outputShape:rt?Array.from((k(),W).subarray(Number(rt)>>>0,Number(vt)>>>0)):[],activation:kt($t)})},1093901:(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt,vt,$t,Nn)=>{t.bc("ConvTranspose",c,{format:ye?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[I],pads:[P,j],strides:[ee],wIsConst:()=>!!(k(),Z)[Te>>>0],outputPadding:Fe?Array.from((k(),W).subarray(Number(Fe)>>>0,Number(rt)>>>0)):[],outputShape:vt?Array.from((k(),W).subarray(Number(vt)>>>0,Number($t)>>>0)):[],activation:kt(Nn)})},1094334:(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt,vt,$t)=>{t.bc("ConvTranspose",c,{format:ee?"NHWC":"NCHW",autoPad:h,dilations:Array.from((k(),W).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((k(),W).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((k(),W).subarray(Number(P)>>>0,(Number(P)>>>0)+4>>>0)),strides:Array.from((k(),W).subarray(Number(j)>>>0,(Number(j)>>>0)+2>>>0)),wIsConst:()=>!!(k(),Z)[ye>>>0],outputPadding:Te?Array.from((k(),W).subarray(Number(Te)>>>0,Number(Fe)>>>0)):[],outputShape:rt?Array.from((k(),W).subarray(Number(rt)>>>0,Number(vt)>>>0)):[],activation:kt($t)})},1094995:(c,h)=>{t.bc("GlobalAveragePool",c,{format:h?"NHWC":"NCHW"})},1095086:(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt,vt,$t)=>{t.bc("AveragePool",c,{format:$t?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:P?Array.from((k(),W).subarray(Number(P)>>>0,Number(j)>>>0)):[],kernel_shape:ee?Array.from((k(),W).subarray(Number(ee)>>>0,Number(ye)>>>0)):[],pads:Te?Array.from((k(),W).subarray(Number(Te)>>>0,Number(Fe)>>>0)):[],strides:rt?Array.from((k(),W).subarray(Number(rt)>>>0,Number(vt)>>>0)):[]})},1095565:(c,h)=>{t.bc("GlobalAveragePool",c,{format:h?"NHWC":"NCHW"})},1095656:(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt,vt,$t)=>{t.bc("AveragePool",c,{format:$t?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:P?Array.from((k(),W).subarray(Number(P)>>>0,Number(j)>>>0)):[],kernel_shape:ee?Array.from((k(),W).subarray(Number(ee)>>>0,Number(ye)>>>0)):[],pads:Te?Array.from((k(),W).subarray(Number(Te)>>>0,Number(Fe)>>>0)):[],strides:rt?Array.from((k(),W).subarray(Number(rt)>>>0,Number(vt)>>>0)):[]})},1096135:(c,h)=>{t.bc("GlobalMaxPool",c,{format:h?"NHWC":"NCHW"})},1096222:(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt,vt,$t)=>{t.bc("MaxPool",c,{format:$t?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:P?Array.from((k(),W).subarray(Number(P)>>>0,Number(j)>>>0)):[],kernel_shape:ee?Array.from((k(),W).subarray(Number(ee)>>>0,Number(ye)>>>0)):[],pads:Te?Array.from((k(),W).subarray(Number(Te)>>>0,Number(Fe)>>>0)):[],strides:rt?Array.from((k(),W).subarray(Number(rt)>>>0,Number(vt)>>>0)):[]})},1096697:(c,h)=>{t.bc("GlobalMaxPool",c,{format:h?"NHWC":"NCHW"})},1096784:(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt,vt,$t)=>{t.bc("MaxPool",c,{format:$t?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:P?Array.from((k(),W).subarray(Number(P)>>>0,Number(j)>>>0)):[],kernel_shape:ee?Array.from((k(),W).subarray(Number(ee)>>>0,Number(ye)>>>0)):[],pads:Te?Array.from((k(),W).subarray(Number(Te)>>>0,Number(Fe)>>>0)):[],strides:rt?Array.from((k(),W).subarray(Number(rt)>>>0,Number(vt)>>>0)):[]})},1097259:(c,h,_,w,I)=>{t.bc("Gemm",c,{alpha:h,beta:_,transA:w,transB:I})},1097363:c=>{t.bc("MatMul",c,void 0)},1097417:(c,h,_,w)=>{t.bc("ArgMax",c,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1097525:(c,h,_,w)=>{t.bc("ArgMin",c,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1097633:(c,h)=>{t.bc("Softmax",c,{axis:h})},1097696:(c,h)=>{t.bc("Concat",c,{axis:h})},1097756:(c,h,_,w,I)=>{t.bc("Split",c,{axis:h,numOutputs:_,splitSizes:w?Array.from((k(),W).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1097912:c=>{t.bc("Expand",c,void 0)},1097966:(c,h)=>{t.bc("Gather",c,{axis:Number(h)})},1098037:(c,h)=>{t.bc("GatherElements",c,{axis:Number(h)})},1098116:(c,h)=>{t.bc("GatherND",c,{batch_dims:Number(h)})},1098195:(c,h,_,w,I,P,j,ee,ye,Te,Fe)=>{t.bc("Resize",c,{antialias:h,axes:_?Array.from((k(),W).subarray(Number(_)>>>0,Number(w)>>>0)):[],coordinateTransformMode:kt(I),cubicCoeffA:P,excludeOutside:j,extrapolationValue:ee,keepAspectRatioPolicy:kt(ye),mode:kt(Te),nearestMode:kt(Fe)})},1098557:(c,h,_,w,I,P,j)=>{t.bc("Slice",c,{starts:h?Array.from((k(),W).subarray(Number(h)>>>0,Number(_)>>>0)):[],ends:w?Array.from((k(),W).subarray(Number(w)>>>0,Number(I)>>>0)):[],axes:P?Array.from((k(),W).subarray(Number(P)>>>0,Number(j)>>>0)):[]})},1098821:c=>{t.bc("Tile",c,void 0)},1098873:(c,h,_)=>{t.bc("InstanceNormalization",c,{epsilon:h,format:_?"NHWC":"NCHW"})},1098987:(c,h,_)=>{t.bc("InstanceNormalization",c,{epsilon:h,format:_?"NHWC":"NCHW"})},1099101:c=>{t.bc("Range",c,void 0)},1099154:(c,h)=>{t.bc("Einsum",c,{equation:kt(h)})},1099235:(c,h,_,w,I)=>{t.bc("Pad",c,{mode:h,value:_,pads:w?Array.from((k(),W).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1099378:(c,h,_,w,I,P)=>{t.bc("BatchNormalization",c,{epsilon:h,momentum:_,spatial:!!I,trainingMode:!!w,format:P?"NHWC":"NCHW"})},1099547:(c,h,_,w,I,P)=>{t.bc("BatchNormalization",c,{epsilon:h,momentum:_,spatial:!!I,trainingMode:!!w,format:P?"NHWC":"NCHW"})},1099716:(c,h,_)=>{t.bc("CumSum",c,{exclusive:Number(h),reverse:Number(_)})},1099813:(c,h,_)=>{t.bc("DequantizeLinear",c,{axis:h,blockSize:_})},1099903:(c,h,_,w,I)=>{t.bc("GridSample",c,{align_corners:h,mode:kt(_),padding_mode:kt(w),format:I?"NHWC":"NCHW"})},1100073:(c,h,_,w,I)=>{t.bc("GridSample",c,{align_corners:h,mode:kt(_),padding_mode:kt(w),format:I?"NHWC":"NCHW"})},1100243:(c,h)=>{t.bc("ScatterND",c,{reduction:kt(h)})},1100328:(c,h,_,w,I,P,j,ee,ye)=>{t.bc("Attention",c,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:I,doRotary:P,qkvHiddenSizes:j?Array.from((k(),W).subarray(Number(ee)>>>0,Number(ee)+j>>>0)):[],pastPresentShareBuffer:!!ye})},1100600:c=>{t.bc("BiasAdd",c,void 0)},1100655:c=>{t.bc("BiasSplitGelu",c,void 0)},1100716:c=>{t.bc("FastGelu",c,void 0)},1100772:(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt,vt,$t,Nn,zl)=>{t.bc("Conv",c,{format:rt?"NHWC":"NCHW",auto_pad:h,dilations:_?Array.from((k(),W).subarray(Number(_)>>>0,Number(w)>>>0)):[],group:I,kernel_shape:P?Array.from((k(),W).subarray(Number(P)>>>0,Number(j)>>>0)):[],pads:ee?Array.from((k(),W).subarray(Number(ee)>>>0,Number(ye)>>>0)):[],strides:Te?Array.from((k(),W).subarray(Number(Te)>>>0,Number(Fe)>>>0)):[],w_is_const:()=>!!(k(),Z)[Number(vt)>>>0],activation:kt($t),activation_params:Nn?Array.from((k(),te).subarray(Number(Nn)>>>0,Number(zl)>>>0)):[]})},1101356:c=>{t.bc("Gelu",c,void 0)},1101408:(c,h,_,w,I,P,j,ee,ye)=>{t.bc("GroupQueryAttention",c,{numHeads:h,kvNumHeads:_,scale:w,softcap:I,doRotary:P,rotaryInterleaved:j,smoothSoftmax:ee,localWindowSize:ye})},1101625:(c,h,_,w)=>{t.bc("LayerNormalization",c,{axis:h,epsilon:_,simplified:!!w})},1101736:(c,h,_,w)=>{t.bc("LayerNormalization",c,{axis:h,epsilon:_,simplified:!!w})},1101847:(c,h,_,w,I,P)=>{t.bc("MatMulNBits",c,{k:h,n:_,accuracyLevel:w,bits:I,blockSize:P})},1101974:(c,h,_,w,I,P)=>{t.bc("MultiHeadAttention",c,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:I,doRotary:P})},1102133:(c,h)=>{t.bc("QuickGelu",c,{alpha:h})},1102197:(c,h,_,w,I)=>{t.bc("RotaryEmbedding",c,{interleaved:!!h,numHeads:_,rotaryEmbeddingDim:w,scale:I})},1102336:(c,h,_)=>{t.bc("SkipLayerNormalization",c,{epsilon:h,simplified:!!_})},1102438:(c,h,_)=>{t.bc("SkipLayerNormalization",c,{epsilon:h,simplified:!!_})},1102540:(c,h,_,w)=>{t.bc("GatherBlockQuantized",c,{gatherAxis:h,quantizeAxis:_,blockSize:w})},1102661:c=>{t.Id(c)},1102695:(c,h)=>t.Kd(Number(c),Number(h),t.$c.Nd,t.$c.errors)};function qw(c,h,_){return Aa(async()=>{await t.Gd(Number(c),Number(h),Number(_))})}function Hw(){return typeof wasmOffsetConverter<"u"}function Gw(c,h,_,w){var I=Xe();try{return Dc(c,h,_,w)}catch(P){if(Ge(I),P!==P+0)throw P;Ze(1,0)}}function Kw(c,h,_){var w=Xe();try{return Mc(c,h,_)}catch(I){if(Ge(w),I!==I+0)throw I;Ze(1,0)}}function Xw(c){var h=Xe();try{Ac(c)}catch(_){if(Ge(h),_!==_+0)throw _;Ze(1,0)}}function Yw(c,h){var _=Xe();try{return Al(c,h)}catch(w){if(Ge(_),w!==w+0)throw w;Ze(1,0)}}function Zw(c,h,_){var w=Xe();try{Ic(c,h,_)}catch(I){if(Ge(w),I!==I+0)throw I;Ze(1,0)}}function Qw(c,h){var _=Xe();try{Nc(c,h)}catch(w){if(Ge(_),w!==w+0)throw w;Ze(1,0)}}function Jw(c,h,_,w,I,P,j){var ee=Xe();try{return Bc(c,h,_,w,I,P,j)}catch(ye){if(Ge(ee),ye!==ye+0)throw ye;Ze(1,0)}}function e1(c,h,_,w,I,P){var j=Xe();try{Oc(c,h,_,w,I,P)}catch(ee){if(Ge(j),ee!==ee+0)throw ee;Ze(1,0)}}function t1(c,h,_,w){var I=Xe();try{Pc(c,h,_,w)}catch(P){if(Ge(I),P!==P+0)throw P;Ze(1,0)}}function r1(c,h,_,w,I){var P=Xe();try{zc(c,h,_,w,I)}catch(j){if(Ge(P),j!==j+0)throw j;Ze(1,0)}}function n1(c,h,_,w,I,P,j){var ee=Xe();try{Lc(c,h,_,w,I,P,j)}catch(ye){if(Ge(ee),ye!==ye+0)throw ye;Ze(1,0)}}function i1(c,h,_,w,I,P,j){var ee=Xe();try{Fc(c,h,_,w,I,P,j)}catch(ye){if(Ge(ee),ye!==ye+0)throw ye;Ze(1,0)}}function s1(c,h,_,w,I,P,j,ee){var ye=Xe();try{qc(c,h,_,w,I,P,j,ee)}catch(Te){if(Ge(ye),Te!==Te+0)throw Te;Ze(1,0)}}function a1(c,h,_,w,I){var P=Xe();try{return Uc(c,h,_,w,I)}catch(j){if(Ge(P),j!==j+0)throw j;Ze(1,0)}}function o1(c,h,_){var w=Xe();try{return Hc(c,h,_)}catch(I){if(Ge(w),I!==I+0)throw I;Ze(1,0)}}function l1(c,h,_,w,I,P,j,ee){var ye=Xe();try{Gc(c,h,_,w,I,P,j,ee)}catch(Te){if(Ge(ye),Te!==Te+0)throw Te;Ze(1,0)}}function u1(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt){var vt=Xe();try{Vc(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt)}catch($t){if(Ge(vt),$t!==$t+0)throw $t;Ze(1,0)}}function d1(c,h,_){var w=Xe();try{return Kc(c,h,_)}catch(I){if(Ge(w),I!==I+0)throw I;return Ze(1,0),0n}}function c1(c,h,_,w,I,P,j,ee,ye){var Te=Xe();try{Rc(c,h,_,w,I,P,j,ee,ye)}catch(Fe){if(Ge(Te),Fe!==Fe+0)throw Fe;Ze(1,0)}}function p1(c){var h=Xe();try{return Xc(c)}catch(_){if(Ge(h),_!==_+0)throw _;Ze(1,0)}}function f1(c,h){var _=Xe();try{return cp(c,h)}catch(w){if(Ge(_),w!==w+0)throw w;return Ze(1,0),0n}}function h1(c,h,_,w){var I=Xe();try{return Yc(c,h,_,w)}catch(P){if(Ge(I),P!==P+0)throw P;Ze(1,0)}}function m1(c){var h=Xe();try{return Zc(c)}catch(_){if(Ge(h),_!==_+0)throw _;return Ze(1,0),0n}}function g1(c,h,_,w){var I=Xe();try{return np(c,h,_,w)}catch(P){if(Ge(I),P!==P+0)throw P;Ze(1,0)}}function y1(c,h,_,w,I){var P=Xe();try{return ip(c,h,_,w,I)}catch(j){if(Ge(P),j!==j+0)throw j;Ze(1,0)}}function b1(c,h,_,w,I,P){var j=Xe();try{return sp(c,h,_,w,I,P)}catch(ee){if(Ge(j),ee!==ee+0)throw ee;Ze(1,0)}}function v1(c,h,_,w,I,P){var j=Xe();try{return jc(c,h,_,w,I,P)}catch(ee){if(Ge(j),ee!==ee+0)throw ee;Ze(1,0)}}function w1(c,h,_,w,I,P){var j=Xe();try{return ap(c,h,_,w,I,P)}catch(ee){if(Ge(j),ee!==ee+0)throw ee;Ze(1,0)}}function _1(c,h,_,w,I,P,j,ee){var ye=Xe();try{return Wc(c,h,_,w,I,P,j,ee)}catch(Te){if(Ge(ye),Te!==Te+0)throw Te;Ze(1,0)}}function x1(c,h,_,w,I){var P=Xe();try{return op(c,h,_,w,I)}catch(j){if(Ge(P),j!==j+0)throw j;return Ze(1,0),0n}}function $1(c,h,_,w){var I=Xe();try{return lp(c,h,_,w)}catch(P){if(Ge(I),P!==P+0)throw P;Ze(1,0)}}function S1(c,h,_,w){var I=Xe();try{return up(c,h,_,w)}catch(P){if(Ge(I),P!==P+0)throw P;Ze(1,0)}}function T1(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt){var vt=Xe();try{return dp(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt)}catch($t){if(Ge(vt),$t!==$t+0)throw $t;Ze(1,0)}}function k1(c,h,_,w,I,P,j,ee,ye,Te,Fe){var rt=Xe();try{tp(c,h,_,w,I,P,j,ee,ye,Te,Fe)}catch(vt){if(Ge(rt),vt!==vt+0)throw vt;Ze(1,0)}}function C1(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt,vt,$t,Nn,zl){var O1=Xe();try{rp(c,h,_,w,I,P,j,ee,ye,Te,Fe,rt,vt,$t,Nn,zl)}catch(Ml){if(Ge(O1),Ml!==Ml+0)throw Ml;Ze(1,0)}}function E1(c,h,_){var w=Xe();try{return Qc(c,h,_)}catch(I){if(Ge(w),I!==I+0)throw I;Ze(1,0)}}function I1(c,h,_){var w=Xe();try{return Jc(c,h,_)}catch(I){if(Ge(w),I!==I+0)throw I;Ze(1,0)}}function A1(c,h,_,w){var I=Xe();try{ep(c,h,_,w)}catch(P){if(Ge(I),P!==P+0)throw P;Ze(1,0)}}function Za(){if(0<ot)M=Za;else if(i)$?.(t),_e();else{for(var c=Ve;0<c.length;)c.shift()(t);0<ot?M=Za:(t.calledRun=!0,D||(_e(),$?.(t)))}}return i||(bn=await yt(),Za()),t.PTR_SIZE=4,re?t:new Promise((c,h)=>{$=c,C=h})}var ky,nf,Kx=pe(()=>{"use strict";ky=rf,nf=globalThis.self?.name?.startsWith("em-pthread"),nf&&rf()}),ru,hd,sf,gr,Cy,oo,af,of,nu,lf,iu,Ey,su,Iy,Xd=pe(()=>{"use strict";Kd(),ru=typeof location>"u"?void 0:location.origin,hd=import.meta.url>"file:"&&import.meta.url<"file;",sf=()=>{if(hd){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,ru).href}return import.meta.url},gr=sf(),Cy=()=>{if(gr&&!gr.startsWith("blob:"))return gr.substring(0,gr.lastIndexOf("/")+1)},oo=(e,t)=>{try{let r=t??gr;return(r?new URL(e,r):new URL(e)).origin===ru}catch{return!1}},af=(e,t)=>{let r=t??gr;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},of=(e,t)=>`${t??"./"}${e}`,nu=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},lf=async e=>(await import(e)).default,iu=(Gx(),da($y)).default,Ey=async()=>{if(!gr)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(oo(gr))return[void 0,iu()];let e=await nu(gr);return[e,iu(e)]},su=(Kx(),da(Ty)).default,Iy=async(e,t,r,n)=>{let i=su&&!(e||t);if(i)if(gr)i=oo(gr)||n&&!r;else if(n&&!r)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,su];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??af(s,t),o=r&&a&&!oo(a,t),l=o?await nu(a):a??of(s,t);return[o?l:void 0,await lf(l)]}}}),au,lo,Is,ou,uf,df,cf,Yd,xt,Fi=pe(()=>{"use strict";Xd(),lo=!1,Is=!1,ou=!1,uf=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},df=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},cf=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Yd=async e=>{if(lo)return Promise.resolve();if(Is)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ou)throw new Error("previous call to 'initializeWebAssembly()' failed.");Is=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!cf())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!df())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=uf();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,a=i?.mjs,o=a?.href??a,l=i?.wasm,d=l?.href??l,p=e.wasmBinary,[f,g]=await Iy(o,s,r>1,!!p||!!d),b=!1,y=[];if(t>0&&y.push(new Promise($=>{setTimeout(()=>{b=!0,$()},t)})),y.push(new Promise(($,C)=>{let S={numThreads:r};if(p)S.wasmBinary=p,S.locateFile=x=>x;else if(d||s)S.locateFile=x=>d??s+x;else if(o&&o.indexOf("blob:")!==0)S.locateFile=x=>new URL(x,o).href;else if(f){let x=Cy();x&&(S.locateFile=A=>x+A)}g(S).then(x=>{Is=!1,lo=!0,au=x,$(),f&&URL.revokeObjectURL(f)},x=>{Is=!1,ou=!0,C(x)})})),await Promise.race(y),b)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},xt=()=>{if(lo&&au)return au;throw new Error("WebAssembly is not initialized yet.")}}),Lr,Lo,ct,Zd=pe(()=>{"use strict";Fi(),Lr=(e,t)=>{let r=xt(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},Lo=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,s])=>{let a=t?t+i:i;if(typeof s=="object")Lo(s,a+".",r,n);else if(typeof s=="string"||typeof s=="number")n(a,s.toString());else if(typeof s=="boolean")n(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},ct=e=>{let t=xt(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);let s=Number(t.getValue(i,n===4?"i32":"i64")),a=t.getValue(i+n,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Ay,Xx=pe(()=>{"use strict";Fi(),Zd(),Ay=e=>{let t=xt(),r=0,n=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let s=0;return e?.tag!==void 0&&(s=Lr(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),r===0&&ct("Can't create run options."),e?.extra!==void 0&&Lo(e.extra,"",new WeakSet,(a,o)=>{let l=Lr(a,n),d=Lr(o,n);t._OrtAddRunConfigEntry(r,l,d)!==0&&ct(`Can't set a run config entry: ${a} - ${o}.`)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(a=>t._free(a)),s}}}),pf,ff,hf,wi,mf,Oy,Yx=pe(()=>{"use strict";Fi(),Zd(),pf=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},ff=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},hf=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},wi=(e,t,r,n)=>{let i=Lr(t,n),s=Lr(r,n);xt()._OrtAddSessionConfigEntry(e,i,s)!==0&&ct(`Can't set a session config entry: ${t} - ${r}.`)},mf=async(e,t,r)=>{let n=t.executionProviders;for(let i of n){let s=typeof i=="string"?i:i.name,a=[];switch(s){case"webnn":if(s="WEBNN",wi(e,"session.disable_quant_qdq","1",r),wi(e,"session.disable_qdq_constant_folding","1",r),typeof i!="string"){let f=i?.deviceType;f&&wi(e,"deviceType",f,r)}break;case"webgpu":if(s="JS",typeof i!="string"){let f=i;if(f?.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);wi(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=Lr(s,r),l=a.length,d=0,p=0;if(l>0){d=xt()._malloc(l*xt().PTR_SIZE),r.push(d),p=xt()._malloc(l*xt().PTR_SIZE),r.push(p);for(let f=0;f<l;f++)xt().setValue(d+f*xt().PTR_SIZE,a[f][0],"*"),xt().setValue(p+f*xt().PTR_SIZE,a[f][1],"*")}await xt()._OrtAppendExecutionProvider(e,o,d,p,l)!==0&&ct(`Can't append execution provider: ${s}.`)}},Oy=async e=>{let t=xt(),r=0,n=[],i=e||{};hf(i);try{let s=pf(i.graphOptimizationLevel??"all"),a=ff(i.executionMode??"sequential"),o=typeof i.logId=="string"?Lr(i.logId,n):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let p=typeof i.optimizedModelFilePath=="string"?Lr(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,l,d,p),r===0&&ct("Can't create session options."),i.executionProviders&&await mf(r,i,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);wi(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[f,g]of Object.entries(i.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let b=Lr(f,n);t._OrtAddFreeDimensionOverride(r,b,g)!==0&&ct(`Can't set a free dimension override: ${f} - ${g}.`)}return i.extra!==void 0&&Lo(i.extra,"",new WeakSet,(f,g)=>{wi(r,f,g,n)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ct("Can't release session options."),n.forEach(a=>t._free(a)),s}}}),Ei,Cn,Ii,ol,Fo,Qd,Jd,md,Be=pe(()=>{"use strict";Ei=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Cn=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Ii=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return r>0?Math.ceil(n*r):void 0},ol=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Fo=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Qd=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Jd=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",md=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ec,zy=pe(()=>{"use strict";Kd(),ec=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let l=Math.ceil(n/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await i.read();if(o)break;let d=l.byteLength;new Uint8Array(s,a,d).set(l),a+=d}return new Uint8Array(s,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),gf,yf,bf,vf,tc,wf,tt,On=pe(()=>{"use strict";Be(),gf=["V","I","W","E","F"],yf=(e,t)=>{console.log(`[${gf[e]},${new Date().toISOString()}]${t}`)},tc=(e,t)=>{bf=e,vf=t},wf=(e,t)=>{let r=Fo(e),n=Fo(bf);r>=n&&yf(r,typeof t=="function"?t():t)},tt=(...e)=>{vf&&wf(...e)}}),_f,cs,K,Vo,My,Ry,By,Ne=pe(()=>{"use strict";_f=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},cs=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(n<2||i<2)return;let o=_f.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=r?3:1;o<=s;o++){let l=n-o<0?1:e[n-o],d=i-o<0?1:t[i-o];if(l!==d&&l>1&&d>1)return;let p=Math.max(l,d);if(l&&d)a[s-o]=Math.max(l,d);else{if(p>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},K=class ko{static size(t){return ko.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),s=n-1;for(;s>=0;){if(t[s]%r===0){i[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,r/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ko.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ko.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let s=r;s<n;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,s)=>i+r[s]+r[s+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},Vo=class Wn{static adjustPoolAttributes(t,r,n,i,s,a){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<n.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=n[o]||a[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)Wn.adjustPadAndReturnShape(t[l+(a?1:2)],r[l],n[l],i[l],s,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,n,i,s,a,o,l=0){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return Wn.computeShapeHelper(t,r,d,n,i,s,a,o,l),d}static computeConvOutputShape(t,r,n,i,s,a,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return Wn.computeShapeHelper(!1,t,l,n,i,s,a,o),l}static computeShapeHelper(t,r,n,i,s,a,o,l,d=0){if(t)for(let p=0;p<r.length-2;p++)n.push(1);else for(let p=0;p<r.length-2;p++)n.push(Wn.adjustPadAndReturnShape(r[p+2],i[p],s[p],a[p],o,p,p+r.length-2,l,d))}static computeOutputSize(t,r,n,i,s){let a=Math.floor(t/r)+1;return s===1&&(a=Math.ceil(t/r)+1,(a-1)*r>=n+i&&(a-=1)),a}static adjustPadAndReturnShape(t,r,n,i,s,a,o,l,d=0){let p=n*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[o]=0,Wn.computeOutputSize(t-p,r,t,0,d);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=(Math.floor((t+r-1)/r)-1)*r+i-t;return s[a]=Math.floor(l==="SAME_LOWER"?(f+1)/2:f/2),s[o]=f-s[a],Wn.computeOutputSize(t+s[a]+s[o]-p,r,t,s[a],d)}default:throw new Error("Unsupported AutoPad type")}else return Wn.computeOutputSize(t+s[a]+s[o]-p,r,t,s[a],d)}},My=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let l=-1;if(n?(o=r[0],l=1):(o=r[1],l=0),r[l]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(i&&!cs.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},Ry=-34028234663852886e22,By=34028234663852886e22}),rc,Py=pe(()=>{"use strict";Be(),rc=(e,t)=>new(ol(t))(e)}),lu,xf,uu,$f,du,Sf,cu,pu,fu,Tf,Dy,Zx=pe(()=>{"use strict";Be(),On(),lu=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),xf=(e,t)=>{if(t==="int32")return e;let r=lu.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=e.byteLength/n,s=new(ol(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let o=0;o<i;o++){let l=s[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},uu=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},$f=1,du=()=>$f++,Sf=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),cu=(e,t)=>{let r=lu.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},pu=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:i,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return cu(this.dataType,this.tensorShape)}destroy(){tt("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=uu(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},fu=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let i=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!s?.input.dataTypes.includes(t)){if(a=Sf.get(t),!a||!s?.input.dataTypes.includes(a))throw new Error(`WebNN backend does not support data type: ${t}`);tt("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==cu(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,a),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=xf(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else tt("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?uu(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Tf=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=du();return this.tensorTrackersById.set(e,new fu(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){tt("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,n,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){tt("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let i=this.getMLContext(e),s=du(),a=new pu({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(s,new fu(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,r,n,i,s,a){let o=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,r)){tt("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}tt("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:a??t,shape:r,dimensions:r,usage:n,writable:i,readable:s});return new pu({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Dy=(...e)=>new Tf(...e)}),As,kf,Ny,Qx=pe(()=>{"use strict";Be(),Fi(),Py(),Zx(),On(),As=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),kf=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,s)=>i===n[s]&&e[i]===t[i])},Ny=class{constructor(e){this.tensorManager=Dy(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,tc(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){tt("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){tt("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)tt("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>kf(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){tt("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){let s=As.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,n,i)}async createTemporaryTensor(e,t,r){tt("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=As.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!xt().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");tt("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return rc(r,t)}}registerMLTensor(e,t,r,n){let i=As.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,i,n);return tt("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${s}}`),s}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=As.get(Ei(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof n>"u"?!1:r?!!i?.input.dataTypes.includes(n):!!i?.output.dataTypes.includes(n)}flush(){}}}),nc=pe(()=>{"use strict"}),hu,uo,co,Cf,Ef,mu,gd,If,Uy,Jx=pe(()=>{"use strict";On(),nc(),hu=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),uo=[],co=e=>Math.ceil(Number(e)/16)*16,Cf=e=>{for(let t=0;t<uo.length;t++){let r=uo[t];if(e<=r)return r}return Math.ceil(e/16)*16},Ef=1,mu=()=>Ef++,gd=async(e,t,r,n)=>{let i=co(r),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(n){let l=n();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},If=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of hu)uo.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,s=co(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);if(s===i&&n%4===0)this.backend.device.queue.writeBuffer(a.gpuData.buffer,0,r,n,i);else{let o=new Uint8Array(s);o.set(t),this.backend.device.queue.writeBuffer(a.gpuData.buffer,0,o,0,s)}tt("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=co(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return tt("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=mu();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),tt("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),tt("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Cf(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let a={id:mu(),type:0,buffer:n};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),tt("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return tt("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await gd(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=hu.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(tt("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Uy=(...e)=>new If(...e)}),Af,at,zt=pe(()=>{"use strict";Af=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},at=e=>new Af(e)}),ps,po,Wt,jt,Ae,Ot,yd,ns,Zn,Ie,Os,Q,Ce,Ly,ic,Of,Fy,Ue=pe(()=>{"use strict";Be(),Ne(),ps=64,po=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Wt=(e,t=1)=>{let r=po(e,t);return typeof r=="string"?r:r[0]},jt=(e,t=1)=>{let r=po(e,t);return typeof r=="string"?r:r[1]},Ae=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:K.computeStrides(r)})}),t},Ot=e=>e%4===0?4:e%2===0?2:1,yd=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,ns=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Zn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Ie=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Os=(e,t,r,n,i)=>{let s=typeof r=="number",a=s?r:r.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=po(t,i),p=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],g={indices:l,value:p,storage:f,tensor:t},b=re=>typeof re=="string"?re:`${re}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=s?"uniforms.":"",C=`${$}${e}_shape`,S=`${$}${e}_strides`,x="";for(let re=0;re<a-1;re++)x+=`
    let dim${re} = current / ${Ie(S,re,a)};
    let rest${re} = current % ${Ie(S,re,a)};
    indices[${re}] = dim${re};
    current = rest${re};
    `;x+=`indices[${a-1}] = current;`;let A=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${x}
    return indices;
  }`,E=re=>(y.offsetToIndices=!0,a<2?re:`o2i_${e}(${re})`),O=[];if(a>=2)for(let re=a-1;re>=0;re--)O.push(`${Ie(S,re,a)} * (indices[${re}])`);let D=a<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${O.join("+")};
  }`,N=re=>(y.indicesToOffset=!0,a<2?re:`i2o_${e}(${re})`),k=(...re)=>a===0?"0u":`${g.indices}(${re.map(b).join(",")})`,q=(re,$e)=>a<2?`${re}`:`${Ie(re,$e,a)}`,Z=(re,$e,_e)=>a<2?`${re}=${_e};`:`${Ie(re,$e,a)}=${_e};`,ae={},X=(re,$e)=>{y.broadcastedIndicesToOffset=!0;let _e=`${$e.name}broadcastedIndicesTo${e}Offset`;if(_e in ae)return`${_e}(${re})`;let xe=[];for(let mt=a-1;mt>=0;mt--){let yt=$e.indicesGet("outputIndices",mt+$e.rank-a);xe.push(`${q(S,mt)} * (${yt} % ${q(C,mt)})`)}return ae[_e]=`fn ${_e}(outputIndices: ${$e.type.indices}) -> u32 {
             return ${xe.length>0?xe.join("+"):"0u"};
           }`,`${_e}(${re})`},le=(re,$e)=>(()=>{if(g.storage===g.value)return`${e}[${re}]=${$e};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${re}]=vec2<u32>(u32(${$e}), select(0u, 0xFFFFFFFFu, ${$e} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${re}]=vec2<u32>(u32(${$e}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${re}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${$e}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),W=re=>(()=>{if(g.storage===g.value)return`${e}[${re}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${re}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${re}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${re}] & 0xFFu), bool(${e}[${re}] & 0xFF00u), bool(${e}[${re}] & 0xFF0000u), bool(${e}[${re}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),J=a<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${p} {
    return ${W(`i2o_${e}(indices)`)};
  }`,te=a<2?"":(()=>{let re=o.map(_e=>`d${_e}: u32`).join(", "),$e=o.map(_e=>`d${_e}`).join(", ");return`
  fn get_${e}(${re}) -> ${p} {
    return get_${e}ByIndices(${k($e)});
  }`})(),ue=(...re)=>{if(re.length!==a)throw new Error(`indices length must be ${a}`);let $e=re.map(b).join(",");return a===0?W("0u"):a===1?W($e[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${$e})`)},ce=re=>a<2?W(re):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${re})`),we=a<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${p}) {
    ${le(`i2o_${e}(indices)`,"value")}
  }`,ke=a<2?"":(()=>{let re=o.map(_e=>`d${_e}: u32`).join(", "),$e=o.map(_e=>`d${_e}`).join(", ");return`
  fn set_${e}(${re}, value: ${p}) {
    set_${e}ByIndices(${k($e)}, value);
  }`})();return{impl:()=>{let re=[],$e=!1;return y.offsetToIndices&&(re.push(A),$e=!0),y.indicesToOffset&&(re.push(D),$e=!0),y.broadcastedIndicesToOffset&&(Object.values(ae).forEach(_e=>re.push(_e)),$e=!0),y.set&&(re.push(ke),$e=!0),y.setByIndices&&(re.push(we),$e=!0),y.get&&(re.push(te),$e=!0),y.getByIndices&&(re.push(J),$e=!0),!s&&$e&&re.unshift(`const ${C} = ${g.indices}(${r.join(",")});`,`const ${S} = ${g.indices}(${K.computeStrides(r).join(",")});`),re.join(`
`)},type:g,offsetToIndices:E,indicesToOffset:N,broadcastedIndicesToOffset:X,indices:k,indicesGet:q,indicesSet:Z,set:(...re)=>{if(re.length!==a+1)throw new Error(`indices length must be ${a}`);let $e=re[a];if(typeof $e!="string")throw new Error("value must be string");let _e=re.slice(0,a).map(b).join(",");return a===0?le("0u",$e):a===1?le(_e[0],$e):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${_e}, ${$e})`)},setByOffset:le,setByIndices:(re,$e)=>a<2?le(re,$e):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${re}, ${$e});`),get:ue,getByOffset:W,getByIndices:ce,usage:n,name:e,strides:S,shape:C,rank:a}},Q=(e,t,r,n=1)=>Os(e,t,r,"input",n),Ce=(e,t,r,n=1)=>Os(e,t,r,"output",n),Ly=(e,t,r)=>Os(e,t,r,"atomicOutput",1),ic=(e,t,r,n=1)=>Os(e,t,r,"internal",n),Of=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=ps){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Fy=(e,t)=>new Of(e,t)}),zf,gu,Mf,Rf,Bf,Pf,vr,Vy,jy,Qn=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),zf=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},gu=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Mf=(e,t)=>K.sortBasedOnPerm(e,gu(e.length,t)),Rf=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},Bf=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},Pf=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},vr=(e,t)=>{let r=e.dataType,n=e.dims.length,i=gu(n,t),s=Mf(e.dims,i),a=e.dims,o=s,l=n<2||Pf(i,e.dims),d;if(l)return d=y=>{let $=Q("input",r,a,4),C=Ce("output",r,o,4);return`
  ${y.registerUniform("output_size","u32").declareVariables($,C)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=K.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:p,newPerm:f}=Bf(e.dims,i),g=K.areEqual(f,[2,3,1]),b=K.areEqual(f,[3,1,2]);if(p.length===2||g||b){a=g?[p[0],p[1]*p[2]]:b?[p[0]*p[1],p[2]]:p,o=[a[1],a[0]];let y=16;return d=$=>{let C=Q("a",r,a.length),S=Ce("output",r,o.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(C,S)}
  var<workgroup> tile : array<array<${S.type.value}, ${y+1}>, ${y}>;
  ${$.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${C.getByIndices(`${C.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${S.setByIndices(`${S.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=K.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/y),y:Math.ceil(o[0]/y)},programUniforms:[{type:12,data:$},...Ae(a,o)]}},getShaderSource:d}}return d=y=>{let $=Q("a",r,a.length),C=Ce("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables($,C)}

  ${Rf(i,n,$,C)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${C.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${C.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=K.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Ae(a,o)]}},getShaderSource:d}},Vy=(e,t)=>{zf(e.inputs,t.perm),e.compute(vr(e.inputs[0],t.perm))},jy=e=>at({perm:e.perm})}),Df,Nf,Uf,Lf,Ff,Vf,jf,Wf,qf,Hf,Rr,Wy,qy,Hy,Gy,Ky,Xy,Yy,Zy,Qy,Jy,e$=pe(()=>{"use strict";Be(),Ne(),Ue(),sc(),Qn(),Df={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Nf={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Uf={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Lf={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ff=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},Vf=(e,t)=>{let r=[],n=e.length;for(let s=0;s<n;s++)t.indexOf(s)===-1&&r.push(e[s]);let i=t.map(s=>e[s]);return[r,i]},jf=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?n.push(e[i++]):n.push(1);return n},Wf=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},qf=(e,t)=>{let r=[];if(!Wf(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},Hf=(e,t,r,n,i,s,a)=>{let o=r[0].dims,l=K.size(s),d=K.size(a),p=Q("_A",r[0].dataType,o),f=Ce("output",i,s),g=64;l===1&&(g=256);let b=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,y=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(p,f)}
        ${b}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Uf[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${Df[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Nf[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${n==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Lf[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Rr=(e,t,r,n)=>{let i=e.inputs.length===1?r:bd(e.inputs,r),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((b,y)=>y));let a=K.normalizeAxes(s,e.inputs[0].dims.length),o=a,l=e.inputs[0],d=qf(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(vr(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Ff(o.length,l.dims.length));let[p,f]=Vf(l.dims,o),g=p;i.keepDims&&(g=jf(p,a)),e.compute(Hf(t,i.cacheKey,[l],n,e.inputs[0].dataType,g,f),{inputs:[l]})},Wy=(e,t)=>{Rr(e,"ReduceMeanShared",t,"mean")},qy=(e,t)=>{Rr(e,"ReduceL1Shared",t,"l1")},Hy=(e,t)=>{Rr(e,"ReduceL2Shared",t,"l2")},Gy=(e,t)=>{Rr(e,"ReduceLogSumExpShared",t,"logSumExp")},Ky=(e,t)=>{Rr(e,"ReduceMaxShared",t,"max")},Xy=(e,t)=>{Rr(e,"ReduceMinShared",t,"min")},Yy=(e,t)=>{Rr(e,"ReduceProdShared",t,"prod")},Zy=(e,t)=>{Rr(e,"ReduceSumShared",t,"sum")},Qy=(e,t)=>{Rr(e,"ReduceSumSquareShared",t,"sumSquare")},Jy=(e,t)=>{Rr(e,"ReduceLogSumShared",t,"logSum")}}),Br,Gf,jo,bd,Pr,Kf,Xf,Yf,Zf,Qf,Jf,eh,th,rh,nh,Dr,eb,tb,rb,nb,ib,sb,ab,ob,lb,ub,sc=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),e$(),Br=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Gf=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],jo=(e,t,r,n,i,s,a=!1,o=!1)=>{let l=[],d=r[0].dims,p=d.length,f=K.normalizeAxes(i,p),g=!o&&f.length===0;d.forEach(($,C)=>{g||f.indexOf(C)>=0?a&&l.push(1):l.push($)});let b=l.length,y=K.size(l);return{name:e,shaderCache:t,getShaderSource:$=>{let C=[],S=Q("_A",r[0].dataType,p),x=Ce("output",s,b),A=n(S,x,f),E=A[2];for(let O=0,D=0;O<p;O++)g||f.indexOf(O)>=0?(a&&D++,E=`for(var j${O}: u32 = 0; j${O} < ${d[O]}; j${O}++) {
                  ${A[2].includes("last_index")?`let last_index = j${O};`:""}
                  ${S.indicesSet("input_indices",O,`j${O}`)}
                  ${E}
                }`):(C.push(`${S.indicesSet("input_indices",O,x.indicesGet("output_indices",D))};`),D++);return`

        ${$.registerUniform("output_size","u32").declareVariables(S,x)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${S.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${C.join(`
`)}
          ${A[0]}       // init ops for reduce max/min
          ${A[1]}
          ${E}
          ${A[3]}
          ${A.length===4?x.setByOffset("global_idx","value"):A.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Ae(d,l)]})}},bd=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),at({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Pr=(e,t,r,n)=>{let i=e.inputs,s=i.length===1?r:bd(i,r);e.compute(jo(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?Gf:n,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Kf=(e,t)=>{Br(e.inputs),Pr(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Xf=(e,t)=>{Br(e.inputs),Pr(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Yf=(e,t)=>{Br(e.inputs),Pr(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Zf=(e,t)=>{Br(e.inputs),Pr(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Qf=(e,t)=>{Br(e.inputs),Pr(e,"ReduceMax",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Jf=(e,t)=>{Br(e.inputs),Pr(e,"ReduceMean",t,(r,n,i)=>{let s=1;for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${s});`]})},eh=(e,t)=>{Br(e.inputs),Pr(e,"ReduceMin",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},th=(e,t)=>{Br(e.inputs),Pr(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},rh=(e,t)=>{Br(e.inputs),Pr(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},nh=(e,t)=>{Br(e.inputs),Pr(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Dr=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?n*=e[s]:i*=e[s];return i<32&&n>1024},eb=(e,t)=>{Dr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jf(e,t):Wy(e,t)},tb=(e,t)=>{Dr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xf(e,t):qy(e,t)},rb=(e,t)=>{Dr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Yf(e,t):Hy(e,t)},nb=(e,t)=>{Dr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zf(e,t):Gy(e,t)},ib=(e,t)=>{Dr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qf(e,t):Ky(e,t)},sb=(e,t)=>{Dr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eh(e,t):Xy(e,t)},ab=(e,t)=>{Dr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?th(e,t):Yy(e,t)},ob=(e,t)=>{Dr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rh(e,t):Zy(e,t)},lb=(e,t)=>{Dr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nh(e,t):Qy(e,t)},ub=(e,t)=>{Dr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Kf(e,t):Jy(e,t)}}),yu,db,cb,vd,t$=pe(()=>{"use strict";Be(),zt(),sc(),yu=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},db=(e,t)=>{yu(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(jo("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},cb=(e,t)=>{yu(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(jo("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},vd=e=>at(e)}),ih,fo,sh,ah,oh,ca,lh,pb,ac=pe(()=>{"use strict";Be(),Ne(),nc(),Ue(),ih=(e,t)=>{let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],p=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=i.dims[0]/3,g=f,b=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let A of t.qkvHiddenSizes)if(A%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],b=t.qkvHiddenSizes[2]}let y=d;if(f!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==f+g+b)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(a){if(g!==b)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=a.dims[3])}let C=y+$,S=-1,x=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==C)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:$,kvSequenceLength:y,totalSequenceLength:C,maxSequenceLength:S,inputHiddenSize:p,hiddenSize:f,vHiddenSize:b,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(b/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},fo=(e,t,r)=>t&&e?`
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
    `,sh=(e,t,r,n,i,s,a,o)=>{let l=Ot(a?1:s),d=64,p=s/l;p<d&&(d=32);let f=Math.ceil(s/l/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:p},{type:12,data:f}],b=Wt(e.dataType,l),y=jt(1,l),$=["type"];a&&$.push("type"),o&&$.push("type");let C=S=>{let x=Ce("x",e.dataType,e.dims,l),A=[x],E=a?Q("seq_lens",a.dataType,a.dims):void 0;E&&A.push(E);let O=o?Q("total_sequence_length_input",o.dataType,o.dims):void 0;O&&A.push(O);let D=jt(e.dataType),N=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${S.registerUniforms(N).declareVariables(...A)}
  ${S.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${fo(E,O,!1)}
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${b};${l}`,inputDependencies:$},getShaderSource:C,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:g})}},ah=(e,t,r,n,i,s,a,o,l)=>{let d=a+s.kvSequenceLength,p=[s.batchSize,s.numHeads,s.sequenceLength,d],f=e>1&&n,g=s.kvNumHeads?s.kvNumHeads:s.numHeads,b=f?[s.batchSize,g,d,s.headSize]:void 0,y=s.nReps?s.nReps:1,$=s.scale===0?1/Math.sqrt(s.headSize):s.scale,C=Ot(s.headSize),S=s.headSize/C,x=12,A={x:Math.ceil(d/x),y:Math.ceil(s.sequenceLength/x),z:s.batchSize*s.numHeads},E=[{type:12,data:s.sequenceLength},{type:12,data:S},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:$},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:y}],O=f&&n&&K.size(n.dims)>0,D=["type","type"];O&&D.push("type"),i&&D.push("type"),o&&D.push("type"),l&&D.push("type");let N=[{dims:p,dataType:t.dataType,gpuDataType:0}];f&&N.push({dims:b,dataType:t.dataType,gpuDataType:0});let k=q=>{let Z=Q("q",t.dataType,t.dims,C),ae=Q("key",r.dataType,r.dims,C),X=[Z,ae];if(O){let we=Q("past_key",n.dataType,n.dims,C);X.push(we)}i&&X.push(Q("attention_bias",i.dataType,i.dims));let le=o?Q("seq_lens",o.dataType,o.dims):void 0;le&&X.push(le);let W=l?Q("total_sequence_length_input",l.dataType,l.dims):void 0;W&&X.push(W);let J=Ce("output",t.dataType,p),te=[J];f&&te.push(Ce("present_key",t.dataType,b,C));let ue=jt(1,C),ce=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${Z.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${Z.type.storage}, ${x*x}>;
  ${q.registerUniforms(ce).declareVariables(...X,...te)}
  ${q.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${fo(le,W,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${O&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ue}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${O&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
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
      var sum: f32 = ${(()=>{switch(C){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${C}`)}})()};
        output[outputIdx] = ${J.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${C};${i!==void 0};${n!==void 0};${e}`,inputDependencies:D},getRunData:()=>({outputs:N,dispatchGroup:A,programUniforms:E}),getShaderSource:k}},oh=(e,t,r,n,i,s,a=void 0,o=void 0)=>{let l=s+i.kvSequenceLength,d=i.nReps?i.nReps:1,p=i.vHiddenSize*d,f=e>1&&n,g=i.kvNumHeads?i.kvNumHeads:i.numHeads,b=f?[i.batchSize,g,l,i.headSize]:void 0,y=[i.batchSize,i.sequenceLength,p],$=12,C={x:Math.ceil(i.vHeadSize/$),y:Math.ceil(i.sequenceLength/$),z:i.batchSize*i.numHeads},S=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:p},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:d}],x=f&&n&&K.size(n.dims)>0,A=["type","type"];x&&A.push("type"),a&&A.push("type"),o&&A.push("type");let E=[{dims:y,dataType:t.dataType,gpuDataType:0}];f&&E.push({dims:b,dataType:t.dataType,gpuDataType:0});let O=D=>{let N=Q("probs",t.dataType,t.dims),k=Q("v",r.dataType,r.dims),q=[N,k];x&&q.push(Q("past_value",n.dataType,n.dims));let Z=a?Q("seq_lens",a.dataType,a.dims):void 0;a&&q.push(Z);let ae=o?Q("total_sequence_length_input",o.dataType,o.dims):void 0;o&&q.push(ae);let X=[Ce("output",t.dataType,y)];f&&X.push(Ce("present_value",t.dataType,b));let le=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${N.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${N.type.value}, ${$*$}>;
  ${D.registerUniforms(le).declareVariables(...q,...X)}
  ${D.mainStart([$,$,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${fo(Z,ae,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${N.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${x&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:E,dispatchGroup:C,programUniforms:S}),getShaderSource:O}},ca=(e,t,r,n,i,s,a,o,l,d,p=void 0,f=void 0)=>{let g=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),b=g>1?a:void 0,y=g>1?o:void 0,$=g>1?d.pastSequenceLength:0,C=$+d.kvSequenceLength,S=l&&K.size(l.dims)>0?l:void 0,x=[t,r];b&&K.size(b.dims)>0&&x.push(b),S&&x.push(S),p&&x.push(p),f&&x.push(f);let A=e.compute(ah(g,t,r,b,S,d,$,p,f),{inputs:x,outputs:g>1?[-1,1]:[-1]})[0];e.compute(sh(A,d.batchSize,d.numHeads,$,d.sequenceLength,C,p,f),{inputs:p&&f?[A,p,f]:[A],outputs:[]});let E=[A,n];y&&K.size(y.dims)>0&&E.push(y),p&&E.push(p),f&&E.push(f),e.compute(oh(g,A,n,y,d,$,p,f),{inputs:E,outputs:g>1?[0,2]:[0]})},lh=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=f=>{let g=Ce("output_q",l[0].dataType,r),b=Ce("output_k",l[0].dataType,r),y=Ce("output_v",l[0].dataType,r),$=Q("input",l[0].dataType,l[0].dims),C=Q("weight",l[1].dataType,l[1].dims),S=Q("bias",l[2].dataType,l[2].dims),x=$.type.storage,A=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${x}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${x}, ${a*a}>;
  var<workgroup> tileWeightK: array<${x}, ${a*a}>;
  var<workgroup> tileWeightV: array<${x}, ${a*a}>;
  ${f.registerUniforms(A).declareVariables($,C,S,g,b,y)}
  ${f.mainStart([a,a,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:p},{inputs:l,outputs:[-1,-1,-1]})},pb=(e,t)=>{let r=ih(e.inputs,t),[n,i,s]=lh(e,r);return ca(e,n,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),uh,dh,ch,fb,r$=pe(()=>{"use strict";zr(),Be(),Ne(),zt(),Ue(),uh=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,s)=>{let a=i.length;if(a!==n.length)throw new Error(`${s}: num dimensions != ${a}`);i.forEach((o,l)=>{if(o!==n[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},dh=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,s=e[0].dims,a=n?Ot(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?a:1,l=K.size(s)/a,d=n,p=d?s.length:s,f=Q("x",e[0].dataType,e[0].dims,a),g=Q("scale",e[1].dataType,e[1].dims,o),b=Q("bias",e[2].dataType,e[2].dims,o),y=Q("inputMean",e[3].dataType,e[3].dims,o),$=Q("inputVar",e[4].dataType,e[4].dims,o),C=Ce("y",e[0].dataType,p,a),S=()=>{let A="";if(n)A=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")A=`
            ${C.indicesSet("outputIndices","0","0")}
            let cOffset = ${C.indicesToOffset("outputIndices")};`;else{A=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let E=1;E<g.rank;E++)A+=`cIndices[${E}] = outputIndices[${E}];`;A+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return A},x=A=>`
  const epsilon = ${r};
  ${A.registerUniform("outputSize","u32").declareVariables(f,g,b,y,$,C)}
  ${A.mainStart()}
  ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${C.offsetToIndices(`global_idx * ${a}`)};
    ${S()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${b.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${C.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...Ae(s)]:[{type:12,data:l}]})}},ch=e=>at(e),fb=(e,t)=>{let{inputs:r,outputCount:n}=e,i=ch({...t,outputCount:n});if(_t.webgpu.validateInputContent&&uh(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(dh(r,i))}}),ph,fh,hb,n$=pe(()=>{"use strict";Ne(),Ue(),ph=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},fh=e=>{let t=e[0].dims,r=e[0].dims[2],n=K.size(t)/4,i=e[0].dataType,s=Q("input",i,t,4),a=Q("bias",i,[r],4),o=Q("residual",i,t,4),l=Ce("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,a,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},hb=e=>{ph(e.inputs),e.compute(fh(e.inputs))}}),hh,nt,mb,gb,yb,bb,vb,wb,_b,xb,$b,mh,Sb,Tb,kb,Cb,Vs,Eb,Co,Ib,Ab,Ob,zb,Mb,Rb,Bb,Pb,Db,Nb,Ub,Lb,Fb,Vb,jb,Wb,qb,bu,Hb,wd,_d,Gb,Kb,Xb,gh,yh,Yb,oc=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),hh=(e,t,r,n,i,s,a)=>{let o=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=Q("inputData",r,[o],4),p=Ce("outputData",n,[o],4),f=[{name:"vec_size",type:"u32"}];return a&&f.push(...a),`
      ${e.registerUniforms(f).declareVariables(d,p)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",l)}
  }`},nt=(e,t,r,n,i,s=e.dataType,a,o)=>{let l=[{type:12,data:Math.ceil(K.size(e.dims)/4)}];return a&&l.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>hh(d,K.size(e.dims),e.dataType,s,r,n,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(K.size(d[0].dims)/64/4)},programUniforms:l})}},mb=e=>{e.compute(nt(e.inputs[0],"Abs","abs"))},gb=e=>{e.compute(nt(e.inputs[0],"Acos","acos"))},yb=e=>{e.compute(nt(e.inputs[0],"Acosh","acosh"))},bb=e=>{e.compute(nt(e.inputs[0],"Asin","asin"))},vb=e=>{e.compute(nt(e.inputs[0],"Asinh","asinh"))},wb=e=>{e.compute(nt(e.inputs[0],"Atan","atan"))},_b=e=>{e.compute(nt(e.inputs[0],"Atanh","atanh"))},xb=e=>at(e),$b=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(nt(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},mh=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return at({min:t,max:r})},Sb=(e,t)=>{let r=t||mh(e.inputs),n=jt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},Tb=e=>{e.compute(nt(e.inputs[0],"Ceil","ceil"))},kb=e=>{e.compute(nt(e.inputs[0],"Cos","cos"))},Cb=e=>{e.compute(nt(e.inputs[0],"Cosh","cosh"))},Vs=e=>at(e),Eb=(e,t)=>{let r=jt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Co=(e="f32")=>`
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
}`,Ib=e=>{let t=jt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Co(t)))},Ab=e=>{e.compute(nt(e.inputs[0],"Exp","exp"))},Ob=e=>{e.compute(nt(e.inputs[0],"Floor","floor"))},zb=e=>{let t=jt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Co(t)))},Mb=(e,t)=>{let r=jt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Rb=e=>{e.compute(nt(e.inputs[0],"Not",t=>`!${t}`))},Bb=e=>{e.compute(nt(e.inputs[0],"Neg",t=>`-${t}`))},Pb=e=>{e.compute(nt(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Db=e=>{let t=jt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Nb=e=>{e.compute(nt(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Ub=e=>at(e),Lb=(e,t)=>{let r=jt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Fb=e=>{let t=jt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"HardSwish",r=>`${r} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${r} + vec4<${t}>(0.5)))`))},Vb=e=>{e.compute(nt(e.inputs[0],"Sin","sin"))},jb=e=>{e.compute(nt(e.inputs[0],"Sinh","sinh"))},Wb=e=>{e.compute(nt(e.inputs[0],"Sqrt","sqrt"))},qb=e=>{e.compute(nt(e.inputs[0],"Tan","tan"))},bu=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Hb=e=>{e.compute(nt(e.inputs[0],"Tanh",bu))},wd=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${bu("v")};
}
`,_d=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Gb=e=>{let t=jt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"FastGelu",_d,wd(t),void 0,e.inputs[0].dataType))},Kb=(e,t)=>{let r=jt(e.inputs[0].dataType);return e.compute(nt(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Xb=e=>{e.compute(nt(e.inputs[0],"Log","log"))},gh=(e,t)=>`
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
`,yh=e=>`quick_gelu_impl(${e})`,Yb=(e,t)=>{let r=jt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"QuickGelu",yh,gh(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),bh,vh,Zb,i$=pe(()=>{"use strict";Ne(),Ue(),oc(),bh=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},vh=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=Q("input",e[0].dataType,e[0].dims,4),n=Q("bias",e[0].dataType,[e[0].dims[2]],4),i=Ce("output",e[0].dataType,t,4),s=K.size(t)/4,a=Wt(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,n,i)}

  ${Co(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Zb=e=>{bh(e.inputs),e.compute(vh(e.inputs))}}),wh,_h,Nr,Qb,Jb,ev,tv,rv,nv,iv,sv,av,ov,s$=pe(()=>{"use strict";Be(),Ne(),Ue(),wh=(e,t,r,n,i,s,a,o,l,d,p,f)=>{let g,b;typeof o=="string"?g=b=(x,A)=>`${o}((${x}),(${A}))`:typeof o=="function"?g=b=o:(g=o.scalar,b=o.vector);let y=Ce("outputData",p,n.length,4),$=Q("aData",l,t.length,4),C=Q("bData",d,r.length,4),S;if(i)if(s){let x=K.size(t)===1,A=K.size(r)===1,E=t.length>0&&t[t.length-1]%4===0,O=r.length>0&&r[r.length-1]%4===0;x||A?S=y.setByOffset("global_idx",b(x?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),A?`${C.type.value}(${C.getByOffset("0")}.x)`:C.getByOffset("global_idx"))):S=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${C.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",b(a||E?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||O?C.getByOffset("offsetB / 4u"):`${C.type.value}(${C.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else S=y.setByOffset("global_idx",b($.getByOffset("global_idx"),C.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(A,E,O="")=>{let D=`aData[indexA${E}][componentA${E}]`,N=`bData[indexB${E}][componentB${E}]`;return`
            let outputIndices${E} = ${y.offsetToIndices(`global_idx * 4u + ${E}u`)};
            let offsetA${E} = ${$.broadcastedIndicesToOffset(`outputIndices${E}`,y)};
            let offsetB${E} = ${C.broadcastedIndicesToOffset(`outputIndices${E}`,y)};
            let indexA${E} = offsetA${E} / 4u;
            let indexB${E} = offsetB${E} / 4u;
            let componentA${E} = offsetA${E} % 4u;
            let componentB${E} = offsetB${E} % 4u;
            ${A}[${E}] = ${O}(${g(D,N)});
          `};p===9?S=`
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
        ${e.registerUniform("vec_size","u32").declareVariables($,C,y)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${S}
      }`},_h=(e,t,r,n,i,s,a=r.dataType)=>{let o=r.dims.map(Number),l=n.dims.map(Number),d=!K.areEqual(o,l),p=o,f=K.size(o),g=!1,b=!1,y=[d];if(d){let $=cs.calcShape(o,l,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");p=$.slice(),f=K.size(p);let C=K.size(o)===1,S=K.size(l)===1,x=o.length>0&&o[o.length-1]%4===0,A=l.length>0&&l[l.length-1]%4===0;y.push(C),y.push(S),y.push(x),y.push(A);let E=1;for(let O=1;O<p.length;O++){let D=o[o.length-O],N=l[l.length-O];if(D===N)E*=D;else break}E%4===0?(b=!0,g=!0):(C||S||x||A)&&(g=!0)}else g=!0;return y.push(g),{name:e,shaderCache:{hint:t+y.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>wh($,o,l,p,g,d,b,i,r.dataType,n.dataType,a,s),getRunData:()=>({outputs:[{dims:p,dataType:a}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(K.size(p)/4)},...Ae(o,l,p)]})}},Nr=(e,t,r,n,i,s)=>{e.compute(_h(t,i??"",e.inputs[0],e.inputs[1],r,n,s))},Qb=e=>{Nr(e,"Add",(t,r)=>`${t}+${r}`)},Jb=e=>{Nr(e,"Div",(t,r)=>`${t}/${r}`)},ev=e=>{Nr(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},tv=e=>{Nr(e,"Mul",(t,r)=>`${t}*${r}`)},rv=e=>{let t=Q("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Nr(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
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
      `)},nv=e=>{Nr(e,"Sub",(t,r)=>`${t}-${r}`)},iv=e=>{Nr(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},sv=e=>{Nr(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},av=e=>{Nr(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},ov=e=>{Nr(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),xh,$h,Sh,Th,lv,uv,a$=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),xh=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,s=n.dims.length;e.forEach((a,o)=>{if(o!==r){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,d)=>{if(d!==t&&l!==n.dims[d])throw new Error("non concat dimensions must match")})}})},$h=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Sh=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(s):i===0?n.push(`if (inputIndex == ${i}u) { ${s} }`):i===r-1?n.push(`else { ${s} }`):n.push(`else if (inputIndex == ${i}) { ${s} }`)}return n.join(`
`)},Th=(e,t,r,n)=>{let i=K.size(r),s=new Array(e.length),a=new Array(e.length),o=0,l=[],d=[],p=[{type:12,data:i}];for(let $=0;$<e.length;++$)o+=e[$].dims[t],s[$]=o,d.push(e[$].dims.length),a[$]=Q(`input${$}`,n,d[$]),l.push("rank"),p.push({type:12,data:s[$]});for(let $=0;$<e.length;++$)p.push(...Ae(e[$].dims));p.push(...Ae(r));let f=Ce("output",n,r.length),g=f.indicesGet("indices",t),b=Array.from(Array(s.length).keys()).map($=>`uniforms.sizeInConcatAxis${$}`).join(","),y=$=>`

  ${(()=>{$.registerUniform("outputSize","u32");for(let C=0;C<e.length;C++)$.registerUniform(`sizeInConcatAxis${C}`,"u32");return $.declareVariables(...a,f)})()}

  ${$h(s.length,b)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${b});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Sh(a,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}),getShaderSource:y}},lv=(e,t)=>{let r=e.inputs,n=r[0].dims,i=K.normalizeAxis(t.axis,n.length);xh(r,i);let s=n.slice();s[i]=r.reduce((o,l)=>o+(l.dims.length>i?l.dims[i]:0),0);let a=r.filter(o=>K.size(o.dims)>0);e.compute(Th(a,i,s,r[0].dataType),{inputs:a})},uv=e=>at({axis:e.axis})}),Di,Ni,Ui,lc,Vi=pe(()=>{"use strict";Be(),Ne(),Di=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ni=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Ui=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},lc=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,n]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=e?.activation_params||[Ry,By];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Kt,dv,uc=pe(()=>{"use strict";Kt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},dv=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),cv,o$=pe(()=>{"use strict";cv=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Js,dc,cc=pe(()=>{"use strict";Be(),Ne(),Ue(),Vi(),Js=(e,t,r,n,i)=>{let s=n-r;return`
      ${Array.from({length:r}).map((a,o)=>`
      if (${Ie(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,Ie(i,o+s,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},dc=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a[a.length-2],d=o[o.length-1],p=a[a.length-1],f=Ot(d),g=Ot(p),b=Ot(l),y=K.size(r)/f/b,$=e.length>2,C=n?n.slice(0,-2):r.slice(0,-2),S=[K.size(C),l,d],x=[{type:12,data:y},{type:12,data:l},{type:12,data:d},{type:12,data:p}];Ni(t,x),x.push(...Ae(C,a,o)),$&&x.push(...Ae(e[2].dims)),x.push(...Ae(S));let A=E=>{let O=ic("batch_dims",e[0].dataType,C.length),D=Q("a",e[0].dataType,a.length,g),N=Q("b",e[1].dataType,o.length,f),k=Ce("output",e[0].dataType,S.length,f),q=Wt(k.type.tensor),Z=Di(t,k.type.value,q),ae=[D,N],X="";if($){let J=i?f:1;ae.push(Q("bias",e[2].dataType,e[2].dims.length,J)),X=`${i?`value += bias[col / ${J}];`:`value += ${k.type.value}(bias[row + i]);`}`}let le=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Ui(t,le);let W=()=>{let J=`var a_data: ${D.type.value};`;for(let te=0;te<g;te++)J+=`
              let b_data${te} = b[(b_offset + (k + ${te}) * uniforms.N + col) / ${f}];`;for(let te=0;te<b;te++){J+=`a_data = a[(a_offset + (row + ${te}) * uniforms.K + k) / ${g}];`;for(let ue=0;ue<g;ue++)J+=`
            values[${te}] = fma(${N.type.value}(a_data${g===1?"":`[${ue}]`}), b_data${ue}, values[${te}]);
`}return J};return`
  ${E.registerUniforms(le).registerInternalVariables(O).declareVariables(...ae,k)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${b};
    let row = (index1 % stride1) * ${b};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${O.offsetToIndices("batch")};`}

    var a_indices: ${D.type.indices};
    ${Js("a_indices",D,D.rank-2,O.rank,"batch_indices")}
    ${D.indicesSet("a_indices",D.rank-2,0)}
    ${D.indicesSet("a_indices",D.rank-1,0)}
    let a_offset = ${D.indicesToOffset("a_indices")};

    var b_indices: ${N.type.indices};
    ${Js("b_indices",N,N.rank-2,O.rank,"batch_indices")}
    ${N.indicesSet("b_indices",N.rank-2,0)}
    ${N.indicesSet("b_indices",N.rank-1,0)}
    let b_offset = ${N.indicesToOffset("b_indices")};
    var values: array<${k.type.value}, ${b}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${W()}
    }
    for (var i = 0u; i < ${b}u; i++) {
      var value = values[i];
      ${X}
      ${Z}
      let cur_indices = ${k.type.indices}(batch, row + i, col);
      let offset = ${k.indicesToOffset("cur_indices")};
      ${k.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${g};${b};${i}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:x}),getShaderSource:A}}}),kh,Ch,xd,vu,Eh,$d,Ih,Wo,pc=pe(()=>{"use strict";Be(),Ne(),Ue(),Vi(),cc(),uc(),kh=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Ch=(e,t)=>e?`
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
        }`,xd=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],p=i?l:s,f=i?s:l,g=p/t[0],b=s/t[1];if(!((i&&g===4&&e[1]===4||!i&&(g===3||g===4))&&p%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${p/g}>, ${f}>;
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
          ${kh(i,n)}
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

          ${Ch(i,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},vu=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Eh=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",$d=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32,l=!1)=>{let d=e[1]*t[1],p=e[0]*t[0],f=i?d:s,g=i?s:d;if(!(g%t[1]===0&&f%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let b=g/t[1],y=f/t[0],$=s/t[1],C=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${vu(i,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
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
      ${vu(i,n)}
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
      ${Eh(i)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${p}>, ${s}>;
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
    ${C}
  }
`},Ih=(e,t,r,n,i=!1)=>{let[s,a,o,l]=n,d=Wt(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Kt(e,d)} {
      var value = ${Kt(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${Js("aIndices",a,a.rank-2,s.rank,"batchIndices")}
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
        ${Js("bIndices",o,o.rank-2,s.rank,"batchIndices")}
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
    `},Wo=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a.slice(0,-2),d=o.slice(0,-2),p=n?n.slice(0,-2):r.slice(0,-2),f=K.size(p),g=a[a.length-2],b=a[a.length-1],y=o[o.length-1],$=b%4===0&&y%4===0,C=g<=8?[4,1,1]:[4,4,1],S=[8,8,1],x=[Math.ceil(y/S[0]/C[0]),Math.ceil(g/S[1]/C[1]),Math.ceil(f/S[2]/C[2])],A=$?4:1,E=[...l,g,b/A],O=E.length,D=[...d,b,y/A],N=D.length,k=[f,g,y/A],q=[{type:6,data:g},{type:6,data:y},{type:6,data:b}];Ni(t,q),q.push(...Ae(p,E,D));let Z=["rank","rank"],ae=e.length>2;ae&&(q.push(...Ae(e[2].dims)),Z.push("rank")),q.push(...Ae(k));let X=le=>{let W=p.length,J=ic("batchDims",e[0].dataType,W,1),te=Wt(e[0].dataType),ue=Q("a",e[0].dataType,O,A),ce=Q("b",e[1].dataType,N,A),we=Ce("result",e[0].dataType,k.length,A),ke=[ue,ce];if(ae){let mt=i?A:1;ke.push(Q("bias",e[2].dataType,e[2].dims.length,mt))}let re=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Ui(t,re);let $e=Wt(we.type.tensor),_e=Di(t,we.type.value,$e),xe=Ih(A,ae,_e,[J,ue,ce,we],i);return`
  ${le.registerUniforms(re).registerInternalVariables(J).declareVariables(...ke,we)}
  ${xe}
  ${$?xd(C,S,te,J):$d(C,S,te,J)}
                   `};return{name:"MatMul",shaderCache:{hint:`${C};${t.activation};${$};${i}`,inputDependencies:Z},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:q}),getShaderSource:X}}}),Ah,pv,l$=pe(()=>{"use strict";Be(),On(),Ue(),Vi(),uc(),o$(),pc(),Ah=(e,t,r,n,i=!1,s,a=4,o=4,l=4,d="f32")=>{let p=q=>{switch(q){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},f=q=>{switch(q){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},g=e?`
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
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",$=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",C=e?"row":"col",S=e?"col":"row",x=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${C} / outWidth;
    let outCol = ${C} % outWidth;

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
      ${p(a)}
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
    return ${Kt(a,d)}(0.0);`,E=e?n&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${Kt(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${Kt(o,d)}(0.0);`,O=Kt(l,d),D=Kt(e?a:o,d),N=Kt(e?o:a,d),k=Di(s,O,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${D} {
      ${e?A:E}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${N} {
      ${e?E:A}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${O}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${b}
      ${dv(i)}
      ${k}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},pv=(e,t,r,n,i,s,a,o,l)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],f=r[0],g=d?r[2]:r[3],b=d?r[1]:r[2],y=d?r[3]:r[1],$=d&&(p%4===0||p%3===0)&&y%4===0,C=d?y:g*b,S=d?g*b:y,x=[8,8,1],A=n<=8?[4,1,1]:[4,4,1],E=[Math.ceil(C/x[0]/A[0]),Math.ceil(S/x[1]/A[1]),Math.ceil(f/x[2]/A[2])];tt("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${E}`);let O=$?d&&p%4!==0?3:4:1,D=x[1]*A[1],N=x[0]*A[0],k=Math.max(x[0]*O,x[1]),q=n%D===0,Z=i%N===0,ae=s%k===0,X=$?[O,4,4]:[1,1,1],le=[{type:6,data:n},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ni(t,le),le.push(...Ae(e[0].dims,e[1].dims));let W=["rank","rank"];a&&(le.push(...Ae(e[2].dims)),W.push("rank")),le.push(...Ae(r));let J=te=>{let ue=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Ui(t,ue);let ce=$?4:1,we=Wt(e[0].dataType),ke=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${we}>`:we}) {
        result[flatIndex] = ${$?`vec4<${we}>`:we}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${we}>`:we}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,re=Q("x",e[0].dataType,e[0].dims.length,O===3?1:O),$e=Q("w",e[1].dataType,e[1].dims.length,ce),_e=[re,$e],xe=Ce("result",e[0].dataType,r.length,ce);if(a){let mt=Q("bias",e[2].dataType,e[2].dims.length,ce);_e.push(mt),ke+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${we}>`:we} {
          return bias[coords.${d?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${cv("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${te.registerUniforms(ue).declareVariables(..._e,xe)}
        ${ke}
        ${Ah(d,q,Z,ae,a,t,X[0],X[1],X[2],we)}
        ${$?xd(A,x,we,void 0,!d,k):$d(A,x,we,void 0,!d,k,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${O};${$};${q};${Z};${ae};${D};${N};${k}`,inputDependencies:W},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:E[0],y:E[1],z:E[2]},programUniforms:le}),getShaderSource:J}}}),Oh,wu,zs,zh,_u,Mh,fv,hv,u$=pe(()=>{"use strict";Be(),On(),Ne(),Ue(),Vi(),uc(),Oh=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},wu=e=>typeof e=="number"?[e,e,e]:e,zs=(e,t)=>t<=1?e:e+(e-1)*(t-1),zh=(e,t,r,n=1)=>{let i=zs(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},_u=(e,t,r,n,i)=>{i==null&&(i=zh(e,t[0],n[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*i)/n[a]+1));return s},Mh=(e,t,r,n,i,s,a,o,l,d)=>{let p,f,g,b;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=_u([t,r,n,1],[o,l,d],1,[i,s,a],e);f=y[0],g=y[1],b=y[2]}else if(Array.isArray(e)){if(!e.every(($,C,S)=>$===S[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=_u([t,r,n,1],[o,l,d],1,[i,s,a],e[0]);f=y[0],g=y[1],b=y[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/i),g=Math.ceil(r/s),b=Math.ceil(n/a);let y=(f-1)*i+o-t,$=(g-1)*s+l-r,C=(b-1)*a+d-n,S=Math.floor(y/2),x=y-S,A=Math.floor($/2),E=$-A,O=Math.floor(C/2),D=C-O;p={top:A,bottom:E,left:O,right:D,front:S,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:f,outHeight:g,outWidth:b}},fv=(e,t,r,n,i,s=!1,a="channelsLast")=>{let o,l,d,p,f;if(a==="channelsLast")[o,l,d,p,f]=e;else if(a==="channelsFirst")[o,f,l,d,p]=e;else throw new Error(`Unknown dataFormat ${a}`);let[g,,b,y,$]=t,[C,S,x]=wu(r),[A,E,O]=wu(n),D=zs(b,A),N=zs(y,E),k=zs($,O),{padInfo:q,outDepth:Z,outHeight:ae,outWidth:X}=Mh(i,l,d,p,C,S,x,D,N,k),le=s?g*f:g,W=[0,0,0,0,0];return a==="channelsFirst"?W=[o,le,Z,ae,X]:a==="channelsLast"&&(W=[o,Z,ae,X,le]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:d,inWidth:p,inChannels:f,outDepth:Z,outHeight:ae,outWidth:X,outChannels:le,padInfo:q,strideDepth:C,strideHeight:S,strideWidth:x,filterDepth:b,filterHeight:y,filterWidth:$,effectiveFilterDepth:D,effectiveFilterHeight:N,effectiveFilterWidth:k,dilationDepth:A,dilationHeight:E,dilationWidth:O,inShape:e,outShape:W,filterShape:t}},hv=(e,t,r,n,i,s)=>{let a=s==="channelsLast",o=a?e[0].dims[3]:e[0].dims[1],l=!1,d=[64,1,1],p={x:r.map((x,A)=>A)},f=[Math.ceil(Oh(p.x.map(x=>r[x]))/d[0]),1,1];tt("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${f}`);let g=l?a&&o%4!==0?3:4:1,b=K.size(r),y=[{type:12,data:b},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Ni(t,y),y.push(...Ae(e[0].dims,e[1].dims));let $=["rank","rank"],C=e.length===3;C&&(y.push(...Ae(e[2].dims)),$.push("rank")),y.push(...Ae(r));let S=x=>{let A=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Ui(t,A);let E=l?4:1,O=Wt(e[0].dataType),D=Q("x",e[0].dataType,e[0].dims.length,g===3?1:g),N=Q("W",e[1].dataType,e[1].dims.length,E),k=[D,N],q=Ce("result",e[0].dataType,r.length,E),Z="";if(C){let le=Q("bias",e[2].dataType,e[2].dims.length,E);k.push(le),Z+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${O}>`:O} {
          return bias[${a?Ie("coords",4,5):Ie("coords",1,5)}${l?"/ 4":""}];
        }`}let ae=Kt(g,O),X=Di(t,ae,O);return`
            ${Z}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${O} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${D.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${O} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${N.getByIndices("aIndices")};
            }
          ${x.registerUniforms(A).declareVariables(...k,q)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${q.offsetToIndices("global_idx")};
              let batch = ${Ie("coords",0,D.rank)};
              let d2 = ${a?Ie("coords",D.rank-1,D.rank):Ie("coords",1,D.rank)};
              let xFRCCorner = vec3<u32>(${a?Ie("coords",1,D.rank):Ie("coords",2,D.rank)},
              ${a?Ie("coords",2,D.rank):Ie("coords",3,D.rank)},
              ${a?Ie("coords",3,D.rank):Ie("coords",4,D.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?Ie("uniforms.x_shape",1,D.rank):Ie("uniforms.x_shape",2,D.rank)};
              let xShapeZ = ${a?Ie("uniforms.x_shape",2,D.rank):Ie("uniforms.x_shape",3,D.rank)};
              let xShapeW = ${a?Ie("uniforms.x_shape",3,D.rank):Ie("uniforms.x_shape",4,D.rank)};
              let xShapeU = ${a?Ie("uniforms.x_shape",4,D.rank):Ie("uniforms.x_shape",1,D.rank)};
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
              ${C?"value = value + getBiasByOutputCoords(coords)":""};
              ${X}
              result[global_idx] = ${O}(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${g};${C}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:f[0],y:f[1],z:f[2]},programUniforms:y}),getShaderSource:S}}}),mv,gv,d$=pe(()=>{"use strict";Be(),Ne(),Ue(),Vi(),mv=(e,t,r,n)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],p=d/t.group,f=l&&p>=4?Ot(d):1,g=K.size(r)/f,b=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];Ni(t,b),b.push(...Ae(a,[o[0],o[1],o[2],o[3]/f]));let y=i?["rank","rank","rank"]:["rank","rank"];b.push(...Ae([r[0],r[1],r[2],r[3]/f]));let $=C=>{let S=Ce("output",e[0].dataType,r.length,f),x=Wt(S.type.tensor),A=Di(t,S.type.value,x),E=Q("x",e[0].dataType,a.length),O=Q("w",e[1].dataType,o.length,f),D=[E,O];i&&D.push(Q("b",e[2].dataType,e[2].dims,f));let N=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Ui(t,N);let k=l?`
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
            let xVal = ${E.get("batch","xHeight","xWidth","input_channel")};
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

            let xVal = ${E.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${O.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${C.registerUniforms(N).declareVariables(...D,S)}

  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${S.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${S.type.value} = ${S.type.value}(0);
    ${k}
    ${s}
    ${A}
    ${S.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:$}},gv=(e,t,r,n)=>{let i=e.length>2,s=Ot(r[3]),a=Ot(r[2]),o=K.size(r)/s/a,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],p=[r[0],r[1],r[2],r[3]/s],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ni(t,f),f.push(...Ae(l,d,p));let g=(a-1)*t.strides[1]+d[1],b=y=>{let $=Ce("output",e[0].dataType,p.length,s),C=Wt($.type.tensor),S=Di(t,$.type.value,C),x=Q("x",e[0].dataType,l.length,s),A=Q("w",e[1].dataType,d.length,s),E=[x,A];i&&E.push(Q("b",e[2].dataType,e[2].dims,s));let O=i?"value += b[output_channel];":"",D=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Ui(t,D),`
  ${y.registerUniforms(D).declareVariables(...E,$)}
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${g};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:b}}}),Rh,ho,Bh,mo,Sd,xu,Ph,Dh,Td,c$=pe(()=>{"use strict";Ne(),l$(),u$(),pc(),d$(),Vi(),cc(),Qn(),Rh=(e,t,r,n,i,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),l=o.length,d=t[0],p=t.slice(2).map((g,b)=>g+(g-1)*(r[b]-1)),f=o.map((g,b)=>g+n[b]+n[b+l]).map((g,b)=>Math.floor((g-p[b]+i[b])/i[b]));return f.splice(0,0,a),f.splice(s?3:1,0,d),f},ho=[2,3,1,0],Bh=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},mo=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let n=e.pads.slice();Vo.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},Sd=e=>{let t=lc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},xu=(e,t,r,n)=>{let i=r.format==="NHWC",s=Rh(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let D=[t[0]];if(i){let N=e.kernelCustomData.wT??e.compute(vr(t[1],ho),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=N),D.push(N)}else D.push(t[1]);t.length===3&&D.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(gv(D,r,s,n),{inputs:D}):e.compute(mv(D,r,s,n),{inputs:D});return}let a=t.length===3,o=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],p=t[1].dims[2],f=t[1].dims[3],g=s[i?1:2],b=s[i?2:3],y=s[i?3:1],$=i&&p===o&&f===l&&r.pads[0]===0&&r.pads[1]===0;if($||p===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let D=s[0],N,k,q,Z=[];if(i){let le=e.kernelCustomData.wT??e.compute(vr(t[1],ho),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=le),$){let W=o*l*d;N=t[0].reshape([1,D,W]),k=le.reshape([1,W,y]),q=[1,D,y]}else N=t[0].reshape([D,o*l,d]),k=le.reshape([1,d,y]),q=[D,g*b,y];Z.push(N),Z.push(k)}else N=t[0].reshape([D,d,o*l]),k=t[1].reshape([1,y,d]),q=[D,y,g*b],Z.push(k),Z.push(N);a&&Z.push(t[2]);let ae=q[2],X=Z[0].dims[Z[0].dims.length-1];ae<8&&X<8?e.compute(dc(Z,r,s,q,i,n),{inputs:Z}):e.compute(Wo(Z,r,s,q,i,n),{inputs:Z});return}let C=!0,S=e.kernelCustomData.wT??e.compute(vr(t[1],ho),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=S);let x=[t[0],S];a&&x.push(t[2]);let A=i?g*b:y,E=i?y:g*b,O=p*f*d;e.compute(pv(x,r,s,A,E,O,a,C,n),{inputs:x})},Ph=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=mo({...t,pads:i,strides:s,dilations:a,kernelShape:o},n);xu(e,n,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Dh=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=mo(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=fv(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,n);e.compute(hv(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],n))},Td=(e,t)=>{if(Bh(e.inputs,t),e.inputs[0].dims.length===3)Ph(e,t);else if(e.inputs[0].dims.length===5)Dh(e,e.inputs,t);else{let r=mo(t,e.inputs);xu(e,e.inputs,r)}}}),yv,p$=pe(()=>{"use strict";Be(),On(),Ne(),Ue(),yv=(e,t,r)=>{let n=e.length>2,i=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,l=o[2]/a,d=o[3],p=s?Ot(l):1,f=s&&d===1&&l>=4,g=f?Math.floor(l/4)*4:Math.floor(l/p)*p,b=l-g,y=s?Ot(d):1,$=s?d===1?p:y:1,C=K.size(i)/y,S=[Math.ceil(C/64),1,1];tt("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${S}`);let x=["rank","rank"],A=[t.strides[0],t.strides[1]],E=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],O=[t.dilations[0],t.dilations[1]],D=[E[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),E[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],N=[D[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),D[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],k=[{type:12,data:C},{type:12,data:A},{type:12,data:E},{type:12,data:O},{type:12,data:D},{type:6,data:N},{type:12,data:g},{type:12,data:l},{type:12,data:d},...Ae(e[0].dims,e[1].dims)];n&&(k.push(...Ae(e[2].dims)),x.push("rank")),k.push(...Ae(i));let q=Z=>{let ae=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:A.length},{name:"filter_dims",type:"u32",length:E.length},{name:"dilations",type:"u32",length:E.length},{name:"effective_filter_dims",type:"u32",length:D.length},{name:"pads",type:"i32",length:N.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],X=Wt(e[0].dataType),le=s?1:2,W=s?2:3,J=s?3:1,te=Q("W",e[1].dataType,e[1].dims.length,$),ue=Q("Dy",e[0].dataType,e[0].dims.length,p),ce=[ue,te];n&&ce.push(Q("bias",e[2].dataType,[i[J]].length,y));let we=Ce("result",e[0].dataType,i.length,y),ke=()=>{let _e="";if(f)p===4?_e+=`
        let xValue = ${ue.getByOffset("x_offset")};
        let wValue = ${te.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?_e+=`
          dotProd = dotProd + dot(vec4<${X}>(${ue.getByOffset("x_offset")}, ${ue.getByOffset("x_offset + 1u")}), vec4<${X}>(${te.getByOffset("w_offset")}, ${te.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(_e+=`
          dotProd = dotProd + dot(vec4<${X}>(${ue.getByOffset("x_offset")}, ${ue.getByOffset("x_offset + 1u")}, ${ue.getByOffset("x_offset + 2u")}, ${ue.getByOffset("x_offset + 3u")}), vec4<${X}>(${te.getByOffset("w_offset")}, ${te.getByOffset("w_offset + 1u")}, ${te.getByOffset("w_offset + 2u")}, ${te.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(_e+=`
                  let xValue = ${s?ue.getByOffset(`${ue.indicesToOffset(`${ue.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):ue.get("batch","inputChannel","idyR","idyC")};
        `,p===1)_e+=`
          let w_offset = ${te.indicesToOffset(`${te.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${te.getByOffset(`w_offset / ${$}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let xe=0;xe<p;xe++)_e+=`
            let wValue${xe} = ${te.getByOffset(`${te.indicesToOffset(`${te.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${xe}, wOutChannel)`)} / ${$}`)};
            dotProd = dotProd + xValue[${xe}] * wValue${xe};`;return _e},re=()=>{if(b===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let _e="";if(p===1){_e+="dotProd = dotProd";for(let xe=0;xe<b;xe++)_e+=`
            + ${ue.getByOffset(`x_offset + ${xe}`)} * ${te.getByOffset(`w_offset + ${xe}`)}`;_e+=";"}else if(p===2){if(b!==2)throw new Error(`Invalid inputChannelsRemainder ${b}.`);_e+=`
          let xValue = ${ue.getByOffset("x_offset")};
          let wValue = ${te.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return _e},$e=`
            let outputIndices = ${we.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${we.indicesGet("outputIndices",0)};
            let d1 = ${we.indicesGet("outputIndices",J)};
            let r = ${we.indicesGet("outputIndices",le)};
            let c = ${we.indicesGet("outputIndices",W)};
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
                if (dyC < 0.0 || dyC >= ${X}(uniforms.Dy_shape[${W}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${ue.indicesToOffset(`${ue.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${te.indicesToOffset(`${te.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${$};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:p}) {
                  ${ke()}
                  inputChannel = inputChannel + ${f?4:p};
                }
                ${re()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${y}]`:""};
            ${we.setByOffset("global_idx","value")};
          `;return`
    ${Z.registerUniforms(ae).declareVariables(...ce,we)}
      ${Z.mainStart()}
      ${Z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${$e}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${$}${y}${f}${b}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:S[0],y:S[1],z:S[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:k}),getShaderSource:q}}}),Nh,Uh,Lh,$u,bv,Fh,Su,Vh,vv,f$=pe(()=>{"use strict";p$(),Vi(),Qn(),Nh=(e,t,r,n,i,s)=>(e-1)*t+r+(n-1)*i+1-s,Uh=(e,t,r,n,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=s,r[i]=e-s):t==="SAME_LOWER"&&(r[n]=e-s,r[i]=s)},Lh=(e,t,r,n,i,s,a,o,l,d)=>{let p=e.length-2,f=d.length===0;l.length<p&&l.push(...Array(p-l.length).fill(0));let g=e[0],b=t[o?3:1]*i;for(let y=0,$=e.length-p-(o?1:0);y<p;++y,++$){let C=e[$],S=f?C*a[y]:d[y],x=Nh(C,a[y],s[y],t[$],r[y],S);Uh(x,n,s,y,y+p),f&&d.push(a[y]*(C-1)+l[y]+(t[$]-1)*r[y]+1-s[y]-s[y+p])}d.splice(0,0,g),d.splice(o?3:1,0,b)},$u=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,g)=>f*g,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((f,g)=>f+g,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,g)=>f+g,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}Lh(o,r,l,e.autoPad,e.group,i,d,n,a,s);let p=Object.assign({},e);return Object.assign(p,{kernelShape:r,pads:i,outputPadding:a,outputShape:s,dilations:l,strides:d}),p},bv=e=>{let t=lc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group??1,a=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),p=e.outputPadding,f=e.outputShape;return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,outputPadding:p,outputShape:f,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Fh=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Su=(e,t,r,n)=>{let i=e.kernelCustomData.wT??e.compute(vr(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(yv(s,r,n),{inputs:s})},Vh=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let d=$u({...t,pads:o,strides:a,dilations:s,kernelShape:i,outputPadding:l},n);Su(e,n,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},vv=(e,t)=>{if(Fh(e.inputs,t),e.inputs[0].dims.length===3)Vh(e,t);else{let r=$u(t,e.inputs);Su(e,e.inputs,r)}}}),jh,wv,_v,h$=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),jh=(e,t,r,n)=>{let i=K.size(t),s=t.length,a=Q("input",e,s),o=Ce("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=K.normalizeAxis(l,s),p=f=>{let g=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,b=Ie("uniforms.input_shape","uniforms.axis",s),y=n.reverse?g+(n.exclusive?" + 1":""):"0",$=n.reverse?b:g+(n.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${$};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...Ae(t,t)]}),getShaderSource:p}},wv=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(jh(n,r,i,t),{inputs:[0]})},_v=e=>{let t=e.exclusive===1,r=e.reverse===1;return at({exclusive:t,reverse:r})}}),Wh,qh,Hh,xv,$v,m$=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),Wh=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},qh=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)i.push(r.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},Hh=(e,t)=>{let r,n,i,s,a,o,l=t.format==="NHWC",d=t.blocksize,p=t.mode==="DCR";l?([r,n,i,s]=e.dims,a=p?[r,n,i,d,d,s/d**2]:[r,n,i,s/d**2,d,d],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=p?[r,d,d,s/d**2,n,i]:[r,s/d**2,d,d,n,i],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(a),g=f.dims.length,b=e.dataType,y=Q("a",b,g),$=Ce("output",b,g),C=S=>`
  ${S.registerUniform("output_size","u32").declareVariables(y,$)}

  ${qh(o,g,y,$)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:S=>{let x=l?[r,n*d,i*d,s/d**2]:[r,s/d**2,n*d,i*d],A=K.size(x),E=f.dims,O=K.sortBasedOnPerm(E,o);return{outputs:[{dims:x,dataType:S[0].dataType}],dispatchGroup:{x:Math.ceil(A/64)},programUniforms:[{type:12,data:A},...Ae(E,O)]}},getShaderSource:C}},xv=(e,t)=>{Wh(e.inputs),e.compute(Hh(e.inputs[0],t))},$v=e=>at({blocksize:e.blocksize,mode:e.mode,format:e.format})}),_n,Ms,go,Tu,Fn,Gh,Kh,Xh,ku,Cu,Eu,Yh,Zh,Iu,Qh,Sv,Tv,g$=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),_n=256,Ms=512,go=2*Math.PI,Tu=e=>{let t=[],r=e;for(let n of[4,2,3,5])for(;r%n===0;)t.push(n),r/=n;return r===1?t:void 0},Fn=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},Gh=(e,t,r,n,i)=>{let s=r/e,a=Ms-n,o=d=>`smem[${a}u + base + ${d*t}u]`,l=`  for (var t = local_idx; t < ${s}u; t += ${_n}u) {
`;l+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,l+=`    var leg: array<vec2<f32>, 5>;
`;for(let d=0;d<e;d++){let p=`${n}u + t + ${d*s}u`;if(d===0)l+=`    leg[0] = smem[${p}];
`;else{let f=i*go*d/(e*t);l+=`    { let a = ${Fn(f)} * angleUnit; leg[${d}] = cmul(smem[${p}], vec2<f32>(cos(a), sin(a))); }
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
`}else for(let d=0;d<e;d++){let p=["leg[0]"];for(let f=1;f<e;f++){let g=i*go*(f*d)/e,b=Fn(Math.cos(g)),y=Fn(Math.sin(g));p.push(`vec2<f32>(leg[${f}].x*${b} - leg[${f}].y*${y}, leg[${f}].x*${y} + leg[${f}].y*${b})`)}l+=`    ${o(d)} = ${p.join(" + ")};
`}return`${l}  }
  workgroupBarrier();
`},Kh=(e,t,r)=>{let n="",i=1,s=0;for(let a of e)n+=Gh(a,i,t,s,r),i*=a,s=Ms-s;return{code:n,resultOffset:s}},Xh=(e,t,r,n,i)=>{let s=e.dims,a=s.length,o=s[a-1],l=s[t],d=r&&n?(l-1)*2:l;i!==void 0&&(d=i);let p=r&&n?1:2,f=n&&!r?Math.floor(d/2)+1:d,g=s.slice();g[t]=f,g[a-1]=p;let b=1;for(let $=t+1;$<a-1;$++)b*=s[$];let y=K.size(s)/o/l;return{dataType:e.dataType,outputDims:g,length:d,signalLength:l,inner:b,batch:y,inputComponents:o,outputComponents:p,outputLength:f,inverse:r,onesided:n}},ku=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),Cu=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],Eu=(e,t,r)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,r),Yh=e=>{let{dataType:t,length:r,inputComponents:n,outputComponents:i,inverse:s,onesided:a}=e,o=jt(t),l=s?1:-1,d=s?1/r:1,p=Tu(r),f=g=>{let b=Q("x",t,[1]),y=Ce("y",t,[1]),$=O=>{let D=`inBase + (${O}) * uniforms.inner * ${n}u`,N=`f32(${b.getByOffset(D)})`,k=n===2?`f32(${b.getByOffset(`${D} + 1u`)})`:"0.0";return`vec2<f32>(${N}, ${k})`},C;if(s&&a){let O=Math.floor(r/2)+1,D=r%2===0?`select(provided, provided - 1u, provided == ${O}u)`:"provided";C=`
    let provided = min(uniforms.signalLength, ${O}u);
    for (var i = local_idx; i < ${r}u; i += ${_n}u) {
      if (i < provided) { smem[i] = ${$("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${D}; k += ${_n}u) {
      let h = smem[k];
      smem[${r}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else C=`
    let loadCount = min(uniforms.signalLength, ${r}u);
    for (var i = local_idx; i < ${r}u; i += ${_n}u) {
      if (i < loadCount) { smem[i] = ${$("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:S,resultOffset:x}=Kh(p,r,l),A=d===1?`smem[${x}u + i]`:`smem[${x}u + i] * ${Fn(d)}`,E=i===2?y.setByOffset("off + 1u",`${o}(v.y)`):"";return`
  ${Eu(g,b,y)}
  var<workgroup> smem: array<vec2<f32>, ${2*Ms}>;
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
    ${C}
${S}    for (var i = local_idx; i < uniforms.outputLength; i += ${_n}u) {
      let v = ${A};
      let off = outBase + i * uniforms.inner * ${i}u;
      ${y.setByOffset("off",`${o}(v.x)`)}
      ${E}
    }
  }`};return{name:"DFT",shaderCache:{hint:ku(e,"fft"),inputDependencies:["type"]},getShaderSource:f,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Cu(e),dispatchGroup:{x:e.batch}})}},Zh=e=>{let{dataType:t,length:r,inputComponents:n,outputComponents:i,inverse:s,onesided:a}=e,o=jt(t),l=s?1:-1,d=s?1/r:1,p=f=>{let g=Q("x",t,[1]),b=Ce("y",t,[1]),y=A=>{let E=`inBase + (${A}) * uniforms.inner * ${n}u`,O=`f32(${g.getByOffset(E)})`,D=n===2?`f32(${g.getByOffset(`${E} + 1u`)})`:"0.0";return`vec2<f32>(${O}, ${D})`},$=s&&a?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
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
  }`,C=`
      let angle = ${Fn(l*go)} * f32(knMod) / ${Fn(r)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${r}u) { knMod -= ${r}u; }`,S=i===2?b.setByOffset("off + 1u",`${o}(v.y)`):"",x=d===1?"acc":`acc * ${Fn(d)}`;return`
  ${Eu(f,g,b)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${$}
  ${f.mainStart(_n)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${n}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${i}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${_n}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${r}u; n++) {${C}
      }
      let v = ${x};
      let off = outBase + k * uniforms.inner * ${i}u;
      ${b.setByOffset("off",`${o}(v.x)`)}
      ${S}
    }
  }`};return{name:"DFT",shaderCache:{hint:ku(e,"direct"),inputDependencies:["type"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Cu(e),dispatchGroup:{x:e.batch}})}},Iu=e=>{if(!e||e.dataType===0)return;if(K.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},Qh=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let r=t[t.length-1];if(r!==1&&r!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},Sv=(e,t)=>{Qh(e.inputs);let r=e.inputs[0],n=r.dims.length,i=t.inverse!==0,s=t.onesided!==0,a=Iu(e.inputs[1]);if(a!==void 0&&a<=0)throw new Error("dft_length must be greater than zero.");let o=K.normalizeAxis(Iu(e.inputs[2])??t.axis,n);if(o===n-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(i&&s&&r.dims[n-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let l=Xh(r,o,i,s,a);if(l.length<=0)throw new Error(`Invalid DFT length: ${l.length}`);let d=l.length<=Ms&&Tu(l.length)!==void 0?Yh(l):Zh(l);e.compute(d,{inputs:[0]})},Tv=e=>at({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),yo,Rs,Au,Jh,em,tm,rm,Ou,nm,kv,Cv,y$=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),yo="[a-zA-Z]|\\.\\.\\.",Rs="("+yo+")+",Au="^"+Rs+"$",Jh="("+Rs+",)*"+Rs,em="^"+Jh+"$",tm=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},rm=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(em)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,s)=>{let a=e[s].dims.slice();if(!i.match(RegExp(Au)))throw new Error("Invalid LHS term");let o=this.processTerm(i,!0,a,s);this.lhs.push(o)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([i,s])=>s.count===1||i==="...").map(([i])=>i).join("");else if(!n.match(RegExp(Rs)))throw new Error("Invalid RHS");n.match(RegExp(yo,"g"))?.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(i);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,s=!1,a=[],o=0;if(!e.match(RegExp(Au))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(yo,"g")),d=new tm(n);return l?.forEach((p,f)=>{if(p==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let g=i-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(o,o+g),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let b=0;b<a.length;b++){let y=String.fromCharCode(48+b);d.addSymbol(y,f+b),this.addSymbol(y,r[o++],n)}}else d.addSymbol(p,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,r[o++],n)}),d}},Ou=e=>e+"_max",nm=(e,t,r,n)=>{let i=e.map(d=>d.length).map((d,p)=>Q(`input${p}`,t,d)),s=K.size(n),a=Ce("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let p=[],f="var prod = 1.0;",g="var sum = 0.0;",b="sum += prod;",y=[],$=[],C=[],S=[],x=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((E,O)=>{if(r.rhs.symbolToIndices.has(O)){let D=r.rhs.symbolToIndices.get(O)?.[0];D!==void 0&&r.lhs.forEach((N,k)=>{if(E.inputIndices.includes(k)){let q=N.symbolToIndices.get(O);if(q===void 0)throw new Error("Invalid symbol error");q.forEach(Z=>{p.push(`${i[k].indicesSet(`input${k}Indices`,Z,a.indicesGet("outputIndices",D))}`)})}})}else r.lhs.forEach((D,N)=>{if(E.inputIndices.includes(N)){let k=D.symbolToIndices.get(O);if(k===void 0)throw new Error("Invalid symbol error");k.forEach(q=>{y.push(`${i[N].indicesSet(`input${N}Indices`,q,`${O}`)}`)}),S.push(`prod *= ${i[N].getByIndices(`input${N}Indices`)};`)}}),$.push(`for(var ${O}: u32 = 0; ${O} < uniforms.${Ou(O)}; ${O}++) {`),C.push("}")});let A=x?[...p,`let sum = ${i.map((E,O)=>E.getByIndices(`input${O}Indices`)).join(" * ")};`]:[...p,g,...$,...y,f,...S,b,...C];return`
            ${d.registerUniforms(o.map(E=>({name:`${Ou(E)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((E,O)=>`var input${O}Indices: ${i[O].type.indices};`).join(`
`)}
            ${A.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));d.push({type:12,data:s});let p=e.map((f,g)=>[...Ae(f)]).reduce((f,g)=>f.concat(g),d);return p.push(...Ae(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}},getShaderSource:l}},kv=(e,t)=>{let r=new rm(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((s,a)=>s.dims);e.compute(nm(i,e.inputs[0].dataType,r,n))},Cv=e=>{let t=e.equation.replace(/\s+/g,"");return at({equation:t})}}),im,zu,sm,am,Ev,b$=pe(()=>{"use strict";Be(),Ne(),Ue(),im=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},zu=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},sm=(e,t)=>e.length>t.length?zu(e,t):zu(t,e),am=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=sm(t,r),i=e[0].dataType,s=i===9||K.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||n.length>0&&n[n.length-1]%4===0?4:1,l=Math.ceil(K.size(n)/o),d=f=>{let g=Q("input",i,t.length,a),b=Ce("output",i,n.length,o),y;if(i===9){let $=(C,S,x="")=>`
          let outputIndices${S} = ${b.offsetToIndices(`outputOffset + ${S}u`)};
          let offset${S} = ${g.broadcastedIndicesToOffset(`outputIndices${S}`,b)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${C}[${S}] = ${x}(${g.getByOffset(`index${S}`)}[component${S}]);
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
    ${f.registerUniform("vec_size","u32").declareVariables(g,b)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},p=[{type:12,data:l},...Ae(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p})}},Ev=e=>{im(e.inputs),e.compute(am(e.inputs),{inputs:[0]})}}),om,Iv,v$=pe(()=>{"use strict";Be(),Ne(),Ue(),oc(),om=e=>{let t=e[0].dataType,r=K.size(e[0].dims),n=K.size(e[1].dims),i=n%4===0,s=a=>{let o=Q("x",t,[1],4),l=Q("bias",t,[1],4),d=Ce("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=b=>`
      let bias${b}_offset: u32 = (global_idx * 4 + ${b}) % uniforms.bias_size;
      let bias${b} = ${l.getByOffset(`bias${b}_offset / 4`)}[bias${b}_offset % 4];`,g=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(p).declareVariables(o,l,d)}

    ${wd(jt(t))}

    ${a.mainStart(ps)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",_d("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/ps/4)}})}},Iv=e=>{e.inputs.length<2||K.size(e.inputs[1].dims)===0?Gb(e):e.compute(om(e.inputs))}}),lm,um,Av,Ov,w$=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),lm=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},um=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=K.normalizeAxis(t.axis,i),a=r.slice(0);a.splice(s,1,...n);let o=r[s],l=e[0].dataType===9?4:1,d=Math.ceil(K.size(a)/l),p=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...Ae(e[0].dims,e[1].dims,a)],f=g=>{let b=Q("data",e[0].dataType,e[0].dims.length,l),y=Q("inputIndices",e[1].dataType,e[1].dims.length),$=Ce("output",e[0].dataType,a.length,l),C=x=>{let A=n.length,E=`var indicesIndices${x}  = ${y.type.indices}(0);`;for(let O=0;O<A;O++)E+=`${A>1?`indicesIndices${x}[${O}]`:`indicesIndices${x}`} = ${a.length>1?`outputIndices${x}[uniforms.axis + ${O}]`:`outputIndices${x}`};`;E+=`
          var idx${x} = ${y.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${b.type.indices};
        `;for(let O=0,D=0;O<i;O++)O===s?(E+=`${i>1?`dataIndices${x}[${O}]`:`dataIndices${x}`} = u32(idx${x});`,D+=A):(E+=`${i>1?`dataIndices${x}[${O}]`:`dataIndices${x}`} = ${a.length>1?`outputIndices${x}[${D}]`:`outputIndices${x}`};`,D++);return E},S;if(e[0].dataType===9){let x=(A,E,O="")=>`
          let outputIndices${E} = ${$.offsetToIndices(`outputOffset + ${E}u`)};
          ${C(E)};
          let offset${E} = ${b.indicesToOffset(`dataIndices${E}`)};
          let index${E} = offset${E} / 4u;
          let component${E} = offset${E} % 4u;
          ${A}[${E}] = ${O}(${b.getByOffset(`index${E}`)}[component${E}]);
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
      ${C("")};
      let value = ${b.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(b,y,$)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${S}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f}},Av=e=>at({axis:e.axis}),Ov=(e,t)=>{let r=e.inputs;lm(r),e.compute(um(e.inputs,t))}}),dm,zv,Mv,_$=pe(()=>{"use strict";Be(),Ne(),Ue(),dm=(e,t,r,n,i,s,a,o,l)=>{let d=[{type:12,data:s},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:12,data:o},{type:12,data:l}],p=[s];d.push(...Ae(t.dims,p));let f=g=>{let b=Q("indices_data",t.dataType,t.dims.length),y=Ce("input_slice_offsets_data",12,1,1),$=[b,y],C=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(C).declareVariables(...$)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},zv=(e,t)=>{let r=e.inputs,n=r[0].dims,i=r[0].dataType,s=r[1].dims,a=s[s.length-1],o=K.sizeToDimension(s,s.length-1),l=K.sizeFromDimension(n,t.batchDims+a),d=K.sizeToDimension(n,t.batchDims),p=K.sizeFromDimension(n,t.batchDims),f=o/d,g=new Array(a),b=l;for(let E=0;E<a;++E)g[a-1-E]=b,b*=n[t.batchDims+a-1-E];let y=dm(e,r[1],g,t.batchDims,n,o,f,p,a),$=t.batchDims+a;if($>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let C=s.slice(0,-1).concat(n.slice($)),S=K.size(C),x=[{type:12,data:S},{type:12,data:l},...Ae(r[0].dims,y.dims,C)],A=E=>{let O=Q("data",r[0].dataType,r[0].dims.length),D=Q("slice_offsets",12,y.dims.length),N=Ce("output",r[0].dataType,C.length);return`
          ${E.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(O,D,N)}
            ${E.mainStart()}
            ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:C,dataType:i}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:x}),getShaderSource:A},{inputs:[r[0],y]})},Mv=e=>({batchDims:e.batch_dims,cacheKey:""})}),cm,pm,Rv,Bv,x$=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),cm=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=K.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,l)=>l===r?Math.ceil(o/n)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},pm=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=K.normalizeAxis(t.gatherAxis,i),a=K.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(s,1,...n);let l=K.size(o),d=e[2].dataType,p=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...Ae(...e.map((b,y)=>b.dims),o)],g=b=>{let y=Q("data",e[0].dataType,e[0].dims.length),$=Q("inputIndices",e[1].dataType,e[1].dims.length),C=Q("scales",e[2].dataType,e[2].dims.length),S=e.length>3?Q("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=Ce("output",d,o.length),A=[y,$,C];S&&A.push(S);let E=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${b.registerUniforms(E).declareVariables(...A,x)}
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
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${C.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${C.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${C.getByIndices("scale_indices")};
        ${S?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${S.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${S.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${jt(d)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((b,y)=>y!==1).map(b=>b.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(b,y)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:g}},Rv=(e,t)=>{let r=e.inputs;cm(r,t),e.compute(pm(e.inputs,t))},Bv=e=>at({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),fm,hm,Pv,Dv,$$=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),fm=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},hm=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,s=e[1].dims,a=e[1].dataType,o=K.normalizeAxis(t.axis,i),l=r[o],d=s.slice(0),p=K.size(d),f=Q("input",n,i),g=Q("indicesInput",a,s.length),b=Ce("output",n,d.length),y=[{type:12,data:p},{type:6,data:l},{type:12,data:o}];return y.push(...Ae(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:y}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,g,b)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${b.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${b.setByOffset("global_idx","value")};
  }`}},Pv=e=>at({axis:e.axis}),Dv=(e,t)=>{let r=e.inputs;fm(r),e.compute(hm(e.inputs,t))}}),mm,gm,Nv,Uv,S$=pe(()=>{"use strict";Be(),Ne(),Ue(),mm=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},gm=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,s,a]=My.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(s/l),p=Math.ceil(i/l),f=!0,g=K.size(o),b=[{type:12,data:f?d:g},{type:12,data:i},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(b.push(...Ae(e[2].dims)),y.push("rank")),b.push(...Ae(o));let $=S=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let A=t.alpha===1?"":"value *= uniforms.alpha;",E=Q("a",e[0].dataType,e[0].dims),O=Q("b",e[1].dataType,e[1].dims),D=E.type.value,N=null,k=[E,O];e.length===3&&(N=Q("c",e[2].dataType,e[2].dims.length),k.push(N));let q=Ce("output",e[0].dataType,o.length);k.push(q);let Z=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${S.registerUniforms(Z).declareVariables(...k)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${D}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${A}
    ${N!=null?`let cOffset = ${N.broadcastedIndicesToOffset("vec2(m, n)",q)}; value += ${D}(uniforms.beta) * ${N.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},C=S=>{let x=Q("a",e[0].dataType,e[0].dims),A=Q("b",e[1].dataType,e[1].dims),E=null,O=[x,A];e.length===3&&(E=Q("c",e[2].dataType,e[2].dims.length),O.push(E));let D=Ce("output",e[0].dataType,o.length);O.push(D);let N=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],k="",q="";t.transA&&t.transB?(q=`
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
      `,k="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(q=`
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
      `,k="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(q=`
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
      `,k="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(q=`
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
      `,k="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let Z=t.alpha===1?"":"value *= uniforms.alpha;";return`
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
      ${q}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${k}
      }
      workgroupBarrier();
    }

    ${Z}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${E!=null?`let cOffset = ${E.broadcastedIndicesToOffset("vec2(m, n)",D)}; value += ${D.type.value}(uniforms.beta) * ${E.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*p},programUniforms:b}),getShaderSource:C}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:$}},Nv=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Uv=(e,t)=>{mm(e.inputs),e.compute(gm(e.inputs,t))}}),Jr,xn,_i,xi,ym,bm,vm,wm,_m,xm,$m,Sm,Lv,Fv,T$=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),[Jr,xn,_i,xi]=[0,1,2,3],ym=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},bm=`
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
`,vm=e=>`
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
`,wm=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,_m=e=>`
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
`,xm=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Jr}] = batch;
     indices[${xn}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${_i}] = u32(r);
            indices[${xi}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${_i}] = u32(clamp(r, 0, H - 1));
          indices[${xi}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${_i}] = gs_reflect(r, border[1], border[3]);
          indices[${xi}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,$m=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Jr}], indices[${xn}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Jr}], indices[${xn}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Jr}], indices[${xn}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Jr}], indices[${xn}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Jr}], indices[${xn}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Jr}], indices[${xn}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Sm=(e,t)=>{let r=Q("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Q("grid",e[1].dataType,n.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Jr,xn,_i,xi]=[0,3,1,2]);let a=Ce("output",e[0].dataType,s.length),o=r.type.value,l=K.size(s),d=[{type:12,data:l},...Ae(e[0].dims,n,s)],p=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,i,a)}
  ${bm}
  ${vm(o)}
  ${wm(t)}
  ${_m(t)}
  ${xm(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${_i}]);
      let W_in = i32(uniforms.x_shape[${xi}]);

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
      var grid_indices = vec3<u32>(indices[${Jr}], indices[${_i}], indices[${xi}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${$m(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let g=K.size(s);return{outputs:[{dims:s,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:p}},Lv=(e,t)=>{ym(e.inputs),e.compute(Sm(e.inputs,t))},Fv=e=>at({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ar,Tm,Vv,Mu,km,js,jv,Wv=pe(()=>{"use strict";Be(),Ne(),zt(),nc(),ac(),Ue(),Qn(),ar=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Tm=(e,t)=>{let r=e[0],n=ar(e,1),i=ar(e,2),s=ar(e,3),a=ar(e,4),o=ar(e,5),l=ar(e,6),d=ar(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=r.dims[0],f=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],b=f,y=0,$=0,C=Math.floor(g/t.numHeads);if(l&&d&&K.size(l.dims)&&K.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[3]!==C)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[3]!==C)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],$=l.dims[2]}else if(l&&K.size(l.dims)||d&&K.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S;if(n&&K.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');S=2,b=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==C)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');S=5,b=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==C)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');S=0,b=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}if(s&&K.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=y+b,A=0;if(a&&K.size(a.dims)>0){A=8;let N=a.dims;throw N.length===1?N[0]===p?A=1:N[0]===3*p+2&&(A=3):N.length===2&&N[0]===p&&N[1]===x&&(A=5),A===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let E=!1,O=g;if(i&&K.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(b!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');O=i.dims[2]}else{if(b!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');O=i.dims[1]*i.dims[3],E=!0}}let D=!1;if(a&&K.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&K.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:f,pastSequenceLength:y,kvSequenceLength:b,totalSequenceLength:x,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:g,vHiddenSize:O,headSize:C,vHeadSize:Math.floor(O/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:A,scale:t.scale,broadcastResPosBias:D,passPastInKv:E,qkvFormat:S}},Vv=e=>at({...e}),Mu=at({perm:[0,2,1,3]}),km=(e,t,r,n,i,s,a)=>{let o=[n,i,s],l=K.size(o),d=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],p=f=>{let g=Ce("qkv_with_bias",t.dataType,o),b=Q("qkv",t.dataType,o),y=Q("bias",r.dataType,o),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms($).declareVariables(b,y,g)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p},{inputs:[t,r],outputs:[-1]})[0]},js=(e,t,r,n,i,s,a,o)=>{let l=s;if(a&&K.size(a.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=km(e,s,a,t,n,r*i,o),l=l.reshape([t,n,r,i]),r===1||n===1?l:e.compute(vr(l,Mu.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,n,r,i])),r===1||n===1?l:e.compute(vr(l,Mu.perm),{inputs:[l],outputs:[-1]})[0]},jv=(e,t)=>{let r=Tm(e.inputs,t),n=e.inputs[0],i=ar(e.inputs,1),s=ar(e.inputs,2),a=ar(e.inputs,3),o=ar(e.inputs,4),l=ar(e.inputs,5),d=ar(e.inputs,6),p=ar(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");let f=i&&s&&i.dims.length===4&&s.dims.length===4,g=js(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,a,0);if(f)return ca(e,g,i,s,o,void 0,d,p,l,r);if(!i||!s)throw new Error("key and value must be provided");let b=js(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,a,r.hiddenSize),y=js(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);ca(e,g,b,y,o,void 0,d,p,l,r)}}),Cm,Em,Im,Am,kd,qv,Hv,Gv=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),Cm=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Em=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),at({numOutputs:n,axis:t.axis,splitSizes:r})},Im=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Ie("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Am=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},kd=(e,t)=>{let r=e[0].dims,n=K.size(r),i=e[0].dataType,s=K.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),o=Q("input",i,r.length),l=new Array(t.numOutputs),d=[],p=[],f=0,g=[{type:12,data:n}];for(let y=0;y<t.numOutputs;y++){f+=t.splitSizes[y],l[y]=f;let $=r.slice();$[s]=t.splitSizes[y],p.push($),a[y]=Ce(`output${y}`,i,$.length),d.push({dims:p[y],dataType:e[0].dataType})}g.push({type:12,data:l},...Ae(r,...p));let b=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${Im(l.length)}
  ${Am(a)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Ie("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:g})}},qv=(e,t)=>{Cm(e.inputs);let r=e.inputs.length===1?t:Em(e.inputs,t);e.compute(kd(e.inputs,r),{inputs:[0]})},Hv=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return at({axis:t,numOutputs:n,splitSizes:r})}}),Om,qo,Kv,Xv=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),Om=(e,t)=>{let[r,n,i,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!K.areEqual(n.dims,[])&&!K.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!K.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],p=i.dims[0],f=K.sizeFromDimension(r.dims,1)/d,g=o===0?i.dims[1]*2:f/a;if(o>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(l!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(d>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},qo=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:s}=t,a=e[0].dims[0],o=K.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,p=e[2].dims[1],f=i===0?p*2:d/n,g=new Array(a,l,d/f,f-p),b=K.computeStrides(g),y=[{type:1,data:s},{type:12,data:g},{type:12,data:b},...e[0].dims.length===3?new Array({type:12,data:[o,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,l*f,1]}):[],...Ae(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=C=>{let S=Q("input",e[0].dataType,e[0].dims.length),x=Q("position_ids",e[1].dataType,e[1].dims.length),A=Q("cos_cache",e[2].dataType,e[2].dims.length),E=Q("sin_cache",e[3].dataType,e[3].dims.length),O=Ce("output",e[0].dataType,e[0].dims.length);return C.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:b.length},{name:"input_output_strides",type:"u32",length:b.length}]),`
        ${C.declareVariables(S,x,A,E,O)}

        ${C.mainStart(ps)}
          let half_rotary_emb_dim = uniforms.${A.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${C.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",Ce("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${S.getByOffset("i")} * ${A.get("position_id","bsnh[3]")} -
                ${S.getByOffset("j")} * ${E.get("position_id","bsnh[3]")};
            ${O.setByOffset("i","re")}
            let im = ${S.getByOffset("i")} * ${E.get("position_id","bsnh[3]")} +
                ${S.getByOffset("j")} * ${A.get("position_id","bsnh[3]")};
            ${O.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${O.setByOffset("k",S.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:at({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(g)/ps)},programUniforms:y})}},Kv=(e,t)=>{Om(e.inputs,t),e.compute(qo(e.inputs,t))}}),zm,Mm,Ru,Rm,Yv,k$=pe(()=>{"use strict";zt(),Be(),ac(),Wv(),Gv(),Qn(),Xv(),Ue(),zm=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],p=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,g=0,b=!n||n.dims.length===0,y=Math.floor(b?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);b&&(p=y*t.numHeads);let $=s&&s.dims.length!==0,C=a&&a.dims.length!==0;if($&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if($&&C){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=s.dims[2]}else if($||C)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');f=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}let x=0,A=!1,E=t.kvNumHeads?y*t.kvNumHeads:p;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],A=!0}}let O=e.length>4?e[5]:void 0;if(O){if(O.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let D=O.dims.reduce((N,k)=>N*k,1);if(D!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${D}.`);for(let N=0;N<O.dims.length;N++)if(O.dims[N]!==1&&O.dims[N]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${N}] = ${O.dims[N]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:E,headSize:y,vHeadSize:Math.floor(E/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:A,qkvFormat:S}},Mm=at({perm:[0,2,1,3]}),Ru=(e,t,r)=>{let n=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute(vr(n,Mm.perm),{inputs:[n],outputs:[-1]})[0]),n},Rm=(e,t,r,n)=>{let i=7,s=["type","type"],a=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=p=>{let f=Q("seq_lens",r.dataType,r.dims),g=Q("total_seq_lens",n.dataType,n.dims),b=Ce("pos_ids",i,a),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${p.registerUniforms(y).declareVariables(f,g,b)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},Yv=(e,t)=>{if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let r=zm(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=at({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,p*r.headSize,p*r.headSize]}),[g,b,y]=!i&&!s?e.compute(kd([n],f),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,s],$,C;if(t.doRotary){let E=e.compute(Rm(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],O=e.inputs[7],D=e.inputs[8],N=at({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),k=[g,E,O,D],q=[-1];$=e.compute(qo(k,N),{inputs:k,outputs:q})[0],k.splice(0,1,b);let Z=at({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});C=e.compute(qo(k,Z),{inputs:k,outputs:q})[0]}let S=js(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?$:g,void 0,0),x=Ru(e,t.doRotary?C:b,r),A=Ru(e,y,r);ca(e,S,x,A,void 0,void 0,a,o,void 0,r,l,d)}}),Bu,Bm,Pm,Zv,C$=pe(()=>{"use strict";Be(),Ne(),Qn(),Ue(),Bu=(e,t,r,n,i,s,a,o)=>{let l=Ot(s),d=l===1?"f32":`vec${l}f`,p=l===1?"vec2f":`mat2x${l}f`,f=i*a,g=64;f===1&&(g=256);let b=[i,a,s/l],y=[i,a,2],$=["rank","type","type"],C=[];C.push(...Ae(b,y));let S=x=>{let A=Q("x",t.dataType,3,l),E=Q("scale",r.dataType,r.dims),O=Q("bias",n.dataType,n.dims),D=Ce("output",1,3,2),N=[A,E,O,D];return`
  var<workgroup> workgroup_shared : array<${p}, ${g}>;
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
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Zn("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${Zn("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${g}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:f},programUniforms:C}),getShaderSource:S},{inputs:[t,r,n],outputs:[-1]})[0]},Bm=(e,t,r)=>{let n=t[0].dims,i=n,s=2,a=n[0],o=n[1],l=K.sizeFromDimension(n,s),d=Ot(l),p=K.size(i)/d,f=Bu(e,t[0],t[1],t[2],a,l,o,r.epsilon),g=[a,o,l/d],b=[a,o],y=["type","none"],$=C=>{let S=Q("x",t[0].dataType,g.length,d),x=Q("scale_shift",1,b.length,2),A=Ce("output",t[0].dataType,g.length,d),E=[S,x,A];return`
  ${C.registerUniform("output_size","u32").declareVariables(...E)}
  ${C.mainStart()}
  ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${A.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${S.getByOffset("global_idx")} * ${A.type.value}(scale_shift.x) + ${A.type.value}(scale_shift.y);
      ${A.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...Ae(g,b,g)]}),getShaderSource:$},{inputs:[t[0],f]})},Pm=(e,t,r)=>{let n=t[0].dims,i=n,s=n[0],a=n[n.length-1],o=K.sizeFromDimension(n,1)/a,l=Ot(a),d=K.size(i)/l,p=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],f=["type","type"],g=!1,b=[0,n.length-1];for(let S=0;S<n.length-2;S++)g=g||n[S+1]!==1,b.push(S+1);g=g&&n[n.length-1]!==1;let y=g?e.compute(vr(e.inputs[0],b),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(S,x)=>n[b[x]])),$=Bu(e,y,t[1],t[2],s,o,a,r.epsilon),C=S=>{let x=Wt(t[0].dataType),A=l===1?"vec2f":`mat${l}x2f`,E=N=>{let k=N===0?"x":"y",q=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${x}(${q}(scale.${k}))`;case 2:return`vec2<${x}>(${q}(scale[0].${k}, scale[1].${k}))`;case 4:return`vec4<${x}>(${q}(scale[0].${k}, scale[1].${k}, scale[2].${k}, scale[3].${k}))`;default:throw new Error(`Not supported compoents ${l}`)}},O=Q("input",t[0].dataType,t[0].dims,l),D=Ce("output",t[0].dataType,i,l);return`
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
    output[global_idx] = fma(input[global_idx], ${E(0)}, ${E(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:C},{inputs:[t[0],$]})},Zv=(e,t)=>{t.format==="NHWC"?Pm(e,e.inputs,t):Bm(e,e.inputs,t)}}),Dm,Nm,Qv,E$=pe(()=>{"use strict";Be(),Ne(),Ue(),Dm=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Nm=(e,t,r)=>{let n=t.simplified,i=e[0].dims,s=e[1],a=!n&&e[2],o=i,l=K.normalizeAxis(t.axis,i.length),d=K.sizeToDimension(i,l),p=K.sizeFromDimension(i,l),f=K.size(s.dims),g=a?K.size(a.dims):0;if(f!==p||a&&g!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${g}`);let b=[];for(let O=0;O<i.length;++O)O<l?b.push(i[O]):b.push(1);let y=Ot(p),$=["type","type"],C=[{type:12,data:d},{type:1,data:p},{type:12,data:Math.floor(p/y)},{type:1,data:t.epsilon}];a&&$.push("type");let S=r>1,x=r>2,A=O=>{let D=Wt(e[0].dataType),N=[Q("x",e[0].dataType,e[0].dims,y),Q("scale",s.dataType,s.dims,y)];a&&N.push(Q("bias",a.dataType,a.dims,y)),N.push(Ce("output",e[0].dataType,o,y)),S&&N.push(Ce("mean_data_output",1,b)),x&&N.push(Ce("inv_std_output",1,b));let k=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${O.registerUniforms(k).declareVariables(...N)}
  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${yd("f32",y)};
    var mean_square_vector = ${yd("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${ns(D,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Zn("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Zn("mean_square_vector",y)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${ns(D,y,"x[j + offset]")};
      let f32scale = ${ns(D,y,"scale[j]")};
      output[j + offset] = ${N[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${ns(D,y,"bias[j]")}`:""}
      );
    }

    ${S?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},E=[{dims:o,dataType:e[0].dataType}];return S&&E.push({dims:b,dataType:1}),x&&E.push({dims:b,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${n}`,inputDependencies:$},getRunData:()=>({outputs:E,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:C}),getShaderSource:A}},Qv=(e,t)=>{Dm(e.inputs),e.compute(Nm(e.inputs,t,e.outputCount))}}),Um,Jv,I$=pe(()=>{"use strict";Ne(),cc(),pc(),Um=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Jv=e=>{Um(e.inputs);let t=cs.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(dc(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=K.size(e.inputs[0].dims.slice(0,-2)),a=K.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&a===1){let o=e.inputs[0].reshape([1,s,n]),l=e.inputs[1].reshape([1,n,r]),d=[1,s,r],p=[o,l];e.compute(Wo(p,{activation:""},t,d),{inputs:p})}else e.compute(Wo(e.inputs,{activation:""},t))}}}),Lm,Fm,Vm,ew,tw,A$=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),Lm=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!K.areEqual(a.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(K.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(K.size(l)!==d)throw new Error("zeroPoints input size error.")}},Fm=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=K.size(o),d=e[1].dims[2]/4,p=e[0].dataType,f=Ot(t.k),g=Ot(d),b=Ot(a),y=o.concat([i,a]),$=i>1&&a/b%2===0?2:1,C=K.size(y)/b/$,S=64,x=[],A=[l,i,s/f],E=K.convertShape(e[1].dims).slice();E.splice(-1,1,d/g),x.push(...Ae(A)),x.push(...Ae(E)),x.push(...Ae(e[2].dims)),e.length===4&&x.push(...Ae(K.convertShape(e[3].dims)));let O=[l,i,a/b];x.push(...Ae(O));let D=N=>{let k=A.length,q=Q("a",e[0].dataType,k,f),Z=Q("b",12,E.length,g),ae=Q("scales",e[2].dataType,e[2].dims.length),X=[q,Z,ae],le=e.length===4?Q("zero_points",12,e[3].dims.length):void 0;le&&X.push(le);let W=O.length,J=Ce("output",e[0].dataType,W,b),te=Wt(e[0].dataType),ue=(()=>{switch(f){case 1:return`array<${te}, 8>`;case 2:return`mat4x2<${te}>`;case 4:return`mat2x4<${te}>`;default:throw new Error(`${f}-component is not supported.`)}})(),ce=Math.floor(32/t.bits),we=Math.floor(ce/8),ke=()=>{let _e="";for(let xe=0;xe<we;xe++){let mt=xe*t.bits*4,yt=mt+t.bits;_e+=`
          // reuse a data (pass ${xe})
            var input_offset${xe>0?xe:""} = ${xe===0?q.indicesToOffset(`${q.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${xe>0?xe:""}: ${ue};
            for (var j${xe>0?xe:""}: u32 = 0; j${xe>0?xe:""} < ${8/f}; j${xe>0?xe:""}++) {
              a_data${xe>0?xe:""}[j${xe>0?xe:""}] = ${q.getByOffset(`input_offset${xe>0?xe:""}`)};
              input_offset${xe>0?xe:""}++;
            }
          `;for(let it=0;it<b*$;it++)_e+=`
            b_value = ${g===1?`b${it}_data`:`b${it}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${xe*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${mt}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${yt}u) & b_mask);`}
            b_quantized_values = ${ue}(${Array.from({length:4},(Et,Ve)=>`${te}(b_value_lower[${Ve}]), ${te}(b_value_upper[${Ve}])`).join(", ")});
            b_dequantized_values = ${f===1?`${ue}(${Array.from({length:8},(Et,Ve)=>`(b_quantized_values[${Ve}] - ${le?`zero_point${it}`:"zero_point"}) * scale${it}`).join(", ")});`:`(b_quantized_values - ${ue}(${Array(8).fill(`${le?`zero_point${it}`:"zero_point"}`).join(",")})) * scale${it};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(it/b)}]${b>1?`[${it%b}]`:""} += ${Array.from({length:8/f},(Et,Ve)=>`${f===1?`a_data${xe>0?xe:""}[${Ve}] * b_dequantized_values[${Ve}]`:`dot(a_data${xe>0?xe:""}[${Ve}], b_dequantized_values[${Ve}])`}`).join(" + ")};
          `}return _e},re=()=>{let _e=`
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
            let zero_point = ${te}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let xe=0;xe<b*$;xe++)_e+=`
            let scale${xe} = ${ae.getByOffset("col_index * nBlocksPerCol + block")};
            ${le?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${le.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${xe} = ${te}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return _e},$e=()=>{let _e=`col_index = col * ${b};`;for(let xe=0;xe<b*$;xe++)_e+=`
            let b${xe}_data = ${Z.getByIndices(`${Z.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return _e+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ue};
            var b_dequantized_values: ${ue};`,_e};return`
        var<workgroup> workgroup_shared: array<${J.type.value}, ${$*S}>;
        ${N.declareVariables(...X,J)}
        ${N.mainStart([S,1,1])}
          let output_indices = ${J.offsetToIndices(`(global_idx / ${S}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${S}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${re()}
            for (var word: u32 = 0; word < ${d}; word += ${g}) {
              ${$e()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${ke()}
                word_offset += ${ce/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${J.type.value} = ${J.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${S}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${J.setByIndices(`${J.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${g};${b};${$};${S}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:p}],dispatchGroup:{x:C},programUniforms:x}),getShaderSource:D}},Vm=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=K.size(o),d=e[1].dims[2]/4,p=e[0].dataType,f=Ot(t.k),g=Ot(d),b=o.concat([i,a]),y=128,$=a%8===0?8:a%4===0?4:1,C=y/$,S=Math.floor(32/t.bits),x=C*g*S,A=x/f,E=x/t.blockSize,O=K.size(b)/$,D=[],N=[l,i,s/f],k=K.convertShape(e[1].dims).slice();k.splice(-1,1,d/g),D.push(...Ae(N)),D.push(...Ae(k)),D.push(...Ae(e[2].dims)),e.length===4&&D.push(...Ae(K.convertShape(e[3].dims)));let q=[l,i,a];D.push(...Ae(q));let Z=ae=>{let X=N.length,le=Q("a",e[0].dataType,X,f),W=Q("b",12,k.length,g),J=Q("scales",e[2].dataType,e[2].dims.length),te=[le,W,J],ue=e.length===4?Q("zero_points",12,e[3].dims.length):void 0;ue&&te.push(ue);let ce=q.length,we=Ce("output",e[0].dataType,ce),ke=Wt(e[0].dataType),re=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${ke}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ke}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ke}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ke}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${le.type.value}, ${A}>;
        var<workgroup> inter_results: array<array<${we.type.value}, ${C}>, ${$}>;
        ${ae.declareVariables(...te,we)}
        ${ae.mainStart([C,$,1])}
          let output_indices = ${we.offsetToIndices(`workgroup_index * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${E} + 1;

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
            let block = tile * ${E} + local_id.x;
            ${ue?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${ue.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ke}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ke}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${J.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${W.getByIndices(`${W.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let $e=Math.floor(S/8),_e="";for(let xe=0;xe<$e;xe++){let mt=xe*t.bits*4,yt=mt+t.bits;_e+=`
              ${re()}
              {${t.bits===2?`
                let half_word = b_value >> ${xe*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${mt}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${yt}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ke}>(${Array.from({length:4},(it,Et)=>`${ke}(b_value_lower[${Et}]), ${ke}(b_value_upper[${Et}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ke}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(it,Et)=>`${`dot(a_data${Et}, b_dequantized_values[${Et}])`}`).join(" + ")};
              }
              word_offset += ${8/f};`}return _e})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${we.type.value} = ${we.type.value}(0);
            for (var b = 0u; b < ${C}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${we.setByIndices(`${we.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${g};${C};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:p}],dispatchGroup:{x:O},programUniforms:D}),getShaderSource:Z}},ew=(e,t)=>{Lm(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Vm(e.inputs,t)):e.compute(Fm(e.inputs,t))},tw=e=>at(e)}),jm,Wm,qm,Hm,Gm,Km,Xm,Ym,rw,O$=pe(()=>{"use strict";Be(),Ne(),Ue(),jm=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Wm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${Ie("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Ie("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${Ie("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},qm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Ie("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Ie("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Ie("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Ie("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Hm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Ie("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Ie("uniforms.x_shape",i,t)})) {
                  k = i32(${Ie("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${Ie("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Gm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Ie("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${Ie("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${Ie("uniforms.x_shape",i,t)})) {
                  k -= i32(${Ie("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${Ie("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Km=(e,t,r)=>{switch(r.mode){case 0:return Wm(e,t,r.pads.length);case 1:return qm(e,t,r.pads.length);case 2:return Hm(e,t,r.pads.length);case 3:return Gm(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Xm=(e,t)=>{let r=K.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=K.size(r),s=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...Ae(e[0].dims,r));let o=["rank"],l=d=>{let p=Ce("output",e[0].dataType,r.length),f=Q("x",e[0].dataType,n.length),g=f.type.value,b=Km(p,n.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:a?g:"f32"}),`
            ${d.registerUniforms(y).declareVariables(f,p)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${b}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(r)/64)},programUniforms:s}),getShaderSource:l}},Ym=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(r[l]),s[Number(o[l])+i]=Number(r[l+o.length])}else r.forEach((o,l)=>s[Number(l)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:n,pads:a}}else return t},rw=(e,t)=>{jm(e.inputs);let r=Ym(e.inputs,t);e.compute(Xm(e.inputs,r),{inputs:[0]})}}),Bs,Pu,Du,Nu,Uu,Zm,Qm,Lu,Fu,nw,iw,Vu,sw,aw,ju,ow,lw,uw,dw,z$=pe(()=>{"use strict";zr(),Be(),Ne(),Ue(),Bs=e=>{if(_t.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Pu=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),l=s?t.dilations.slice():[],d=t.pads.slice();Vo.adjustPoolAttributes(r,i,a,o,l,d);let p=Vo.computePoolOutputShape(r,i,o,l,a,d,t.autoPad,t.ceilMode),f=Object.assign({},t);s?Object.assign(f,{kernelShape:a,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let g=p.slice();return g.push(g.splice(1,1)[0]),[f,n?g:p]},Du=(e,t)=>{let r=t.format==="NHWC",n=K.size(e),i=K.size(t.kernelShape),s=[{type:12,data:n},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],f=!!(d+p);s.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:p}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let b=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],C=t.pads[t.pads.length-2];g=!!($+C),s.push({type:12,data:b},{type:12,data:y},{type:12,data:$},{type:12,data:C}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,f,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=K.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,p)=>d+p);return[s,a,!!l,!1,!1]}},Nu=(e,t,r,n,i,s,a,o,l,d,p,f)=>{let g=i.format==="NHWC",b=t.type.value,y=Ce("output",t.type.tensor,n);if(i.kernelShape.length<=2){let $="",C="",S="",x=r-(g?2:1);if(p?$=`
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
                }`,i.kernelShape.length===2){let A=r-(g?3:2);f?C=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${A}] = indices[${A}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${A}] < 0 || xIndices[${A}] >= uniforms.x_shape[${A}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:C=`
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
              ${C}
              ${$}
              ${S}
              ${a}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let $=i.kernelShape.length,C=i.pads.length,S="";return d?S=`
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
                  offsets[j] = offset / ${Ie("uniforms.kernelStrides","j",$)};
                  offset -= offsets[j] * ${Ie("uniforms.kernelStrides","j",$)};
                }
                offsets[${$-1}] = offset;

                isPad = false;
                for (var j = ${r-$}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Ie("uniforms.strides",`j - ${r-$}u`,$)}
                    + offsets[j - ${r-$}u] - ${Ie("uniforms.pads","j - 2u",C)};
                  ${S}
              }
              ${a}

              output[global_idx] = value;
            }`}},Uu=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Zm=e=>`${Uu(e)};${e.countIncludePad}`,Qm=e=>`${Uu(e)};${e.storageOrder};${e.dilations}`,Lu=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Fu=(e,t,r,n)=>{let[i,s]=Pu(t,n,r),a=Q("x",t.dataType,t.dims.length),o=a.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,f,g,b,y]=Du(s,i);p.push(...Ae(t.dims,s));let $=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${g};${b};${y}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(K.size(s)/64)},programUniforms:p}),getShaderSource:C=>Nu(C,a,t.dims.length,s.length,i,l,d,0,f,g,b,y)}},nw=e=>{let t=e.count_include_pad!==0,r=Lu(e);if(r.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:Zm(n)}},iw=(e,t)=>{Bs(e.inputs),e.compute(Fu("AveragePool",e.inputs[0],!1,t))},Vu={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},sw=e=>{let t=e.format;return{format:t,...Vu,cacheKey:t}},aw=(e,t)=>{Bs(e.inputs),e.compute(Fu("GlobalAveragePool",e.inputs[0],!0,t))},ju=(e,t,r,n)=>{let[i,s]=Pu(t,n,r),a=`
      value = max(x_val, value);
    `,o="",l=Q("x",t.dataType,t.dims.length),d=["rank"],[p,f,g,b,y]=Du(s,i);return p.push(...Ae(t.dims,s)),{name:e,shaderCache:{hint:`${n.cacheKey};${g};${b};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(K.size(s)/64)},programUniforms:p}),getShaderSource:$=>Nu($,l,t.dims.length,s.length,i,a,o,t.dataType===10?-65504:-1e5,f,g,b,y)}},ow=(e,t)=>{Bs(e.inputs),e.compute(ju("MaxPool",e.inputs[0],!1,t))},lw=e=>{let t=e.storage_order,r=e.dilations,n=Lu(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:Qm(i)}},uw=e=>{let t=e.format;return{format:t,...Vu,cacheKey:t}},dw=(e,t)=>{Bs(e.inputs),e.compute(ju("GlobalMaxPool",e.inputs[0],!0,t))}}),Jm,eg,cw,pw,M$=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),Jm=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},eg=(e,t)=>{let r=K.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,s=e[0].dims,a=e[1].dataType,o=K.size(s),l=n===3||n===2,d=l?[Math.ceil(K.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,f=e.length>2?e[2]:void 0,g=f?l?[Math.ceil(K.size(f.dims)/4)]:f.dims:void 0,b=p.length===0||p.length===1&&p[0]===1,y=b===!1&&p.length===1,$=Ot(o),C=b&&(!l||$===4),S=C?$:1,x=C&&!l?$:1,A=Q("input",l?12:n,d.length,x),E=Q("scale",a,p.length),O=f?Q("zero_point",l?12:n,g.length):void 0,D=Ce("output",a,s.length,S),N=[A,E];O&&N.push(O);let k=[d,p];f&&k.push(g);let q=[{type:12,data:o/S},{type:12,data:r},{type:12,data:t.blockSize},...Ae(...k,s)],Z=ae=>{let X=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
          ${b?`let scale_value= ${E.getByOffset("0")}`:y?`
            let scale_index = ${D.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${E.getByOffset("scale_index")};`:`
            var scale_indices: ${E.type.indices} = output_indices;
            let index = ${E.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${E.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${E.getByIndices("scale_indices")};`};

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
                let zero_point_offset = ${E.indicesToOffset("scale_indices")};
                let zero_point_input = ${O.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${O.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":A.type.value}(0);`};
      // Compute and write output
      ${D.setByOffset("global_idx",`${D.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:O?["rank","rank","rank"]:["rank","rank"]},getShaderSource:Z,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/S/64),y:1,z:1},programUniforms:q})}},cw=(e,t)=>{Jm(e.inputs,t),e.compute(eg(e.inputs,t))},pw=e=>at({axis:e.axis,blockSize:e.blockSize})}),tg,rg,fw,R$=pe(()=>{"use strict";zr(),Be(),Ue(),tg=(e,t,r)=>{let n=e===t,i=e<t&&r<0,s=e>t&&r>0;if(n||i||s)throw new Error("Range these inputs' contents are invalid.")},rg=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),s=[i],a=i,o=[{type:12,data:a},{type:n,data:e},{type:n,data:r},...Ae(s)],l=d=>{let p=Ce("output",n,s.length),f=p.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(g).declareVariables(p)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},fw=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),_t.webgpu.validateInputContent&&tg(t,r,n),e.compute(rg(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),ng,ig,hw,mw,B$=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),ng=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${s}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},ig=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r,s=1,a=Math.ceil(K.sizeToDimension(n,n.length-1)/s),o=n[n.length-1],l=K.sizeFromDimension(r,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:l},...Ae(e[1].dims,e[2].dims,i)],p=f=>{let g=Q("indices",e[1].dataType,e[1].dims.length),b=Q("updates",e[2].dataType,e[2].dims.length,s),y=t.reduction!=="none"&&t.reduction!==""?Ly("output",e[0].dataType,i.length):Ce("output",e[0].dataType,i.length,s);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,b,y)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
    ${ng(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:p}},hw=e=>at({reduction:e.reduction}),mw=(e,t)=>{e.compute(ig(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),sg,ag,og,Wu,lg,ug,dg,cg,pg,fg,hg,mg,qu,gg,yg,bg,vg,wg,gw,yw,P$=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),sg=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},ag=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((i,s)=>n[i]=e[s]),n},og=(e,t,r,n,i,s)=>{let[a,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(p=>s.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>n.push(p)),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");sg(n,t),t.axes.length>0&&ag(n,t.axes,d).forEach((p,f)=>n[f]=p)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(p=>i.push(Number(p))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Wu=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,lg=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Wu("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Wu("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ug=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",dg=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((s,a)=>{n[s]=i[a],n[a+r]=i[t.length+a]}),n):i},cg=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(s=>i.push(s)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((s,a)=>i[s]=r[a])}else r.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,a)=>Math.round(s*t[a]))}return i},pg=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=n),r.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(n,0,t.length),i.forEach((s,a)=>i[a]=Math.round(s*t[a]))),i},fg=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Ie("uniforms.scales","i",n)};
        var roi_low = ${Ie("uniforms.roi","i",i)};
        var roi_hi = ${Ie("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Ie("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Ie("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,hg=(e,t,r,n,i,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Ie("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Ie("uniforms.roi","i",s)};
          var roi_hi = ${Ie("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${Ie("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Ie("uniforms.output_shape","i",n.length)};
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
    }`,mg=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Ie("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,qu=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",gg=(e,t,r,n,i)=>{let[s,a,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${qu(e,l,s,2)}
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
    }`},yg=(e,t,r,n,i,s,a,o,l,d)=>{let p=r.length===2,f=!0,[g,b]=p?[0,1]:f?[2,3]:[1,2],y=e.type.value,$=C=>{let S=C===g?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",C)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[C]},
        ${n[C]}, ${r[C]}, ${s[C]}, ${s[C]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[C]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${y} = originalIdx + ${y}(i);
          if (${S} < 0 || ${S} >= ${r[C]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${S} = max(0, min(${S}, ${r[C]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",C,`u32(${S})`)};
          data[i + 1] = ${C===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
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
    `},bg=(e,t,r,n,i)=>{let[s,a,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${qu(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${a}];
      var height:${p} = originalIndices[${o}];
      var width:${p} = originalIndices[${l}];
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

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
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
    }`},vg=(e,t,r,n,i,s)=>{let a=e.dims,o=dg(s,t.axes,a.length),l=cg(a,n,i,t.axes),d=n.slice();n.length===0&&(d=a.map((x,A)=>x===0?1:l[A]/x),t.keepAspectRatioPolicy!=="stretch"&&(l=pg(a,d,t)));let p=Ce("output",e.dataType,l.length),f=Q("input",e.dataType,a.length),g=K.size(l),b=a.length===l.length&&a.every((x,A)=>x===l[A]),y=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,C=f.type.value,S=x=>`
      ${b?"":`
      ${lg(t.coordinateTransformMode,C)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${mg(f,a)};
              ${ug(t.nearestMode,r,C)};
              ${hg(f,p,a,l,d.length,o.length,y)};
              `;case"linear":return`
              ${fg(p,a,l,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${gg(f,p,a,y,$)}`;if(a.length===3||a.length===5)return`${bg(f,p,a,y,$)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${yg(f,p,a,l,d,o,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(f,p)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${b?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${b}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:o},...Ae(a,l)]})}},wg=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},gw=(e,t)=>{let r=[],n=[],i=[],s=wg(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");og(e.inputs,t,s,r,n,i),e.compute(vg(e.inputs[0],t,s,r,n,i),{inputs:[0]})},yw=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return at({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),_g,xg,bw,D$=pe(()=>{"use strict";Be(),Ne(),Ue(),_g=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},xg=(e,t,r,n)=>{let i=t.simplified,s=e[0].dims,a=K.size(s),o=s,l=a,d=s.slice(-1)[0],p=n?s.slice(0,-1).concat(1):[],f=!i&&e.length>3,g=e.length>4,b=n&&r>1,y=n&&r>2,$=r>3,C=64,S=Ot(d),x=[{type:12,data:l},{type:12,data:S},{type:12,data:d},{type:1,data:t.epsilon}],A=O=>{let D=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],N=[Q("x",e[0].dataType,e[0].dims,S),Q("skip",e[1].dataType,e[1].dims,S),Q("gamma",e[2].dataType,e[2].dims,S)];f&&N.push(Q("beta",e[3].dataType,e[3].dims,S)),g&&N.push(Q("bias",e[4].dataType,e[4].dims,S)),N.push(Ce("output",e[0].dataType,o,S)),b&&N.push(Ce("mean_output",1,p)),y&&N.push(Ce("inv_std_output",1,p)),$&&N.push(Ce("input_skip_bias_sum",e[0].dataType,o,S));let k=Wt(e[0].dataType),q=Wt(1,S);return`

      ${O.registerUniforms(D).declareVariables(...N)}
      var<workgroup> sum_shared : array<${q}, ${C}>;
      var<workgroup> sum_squared_shared : array<${q}, ${C}>;

      ${O.mainStart([C,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${C};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${C};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${C-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":k+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${ns(k,S,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${C};
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
        let mean = ${Zn("sum",S)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Zn("square_sum",S)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${b?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${k}(mean)`}) *
            ${k}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},E=[{dims:o,dataType:e[0].dataType}];return r>1&&E.push({dims:p,dataType:1}),r>2&&E.push({dims:p,dataType:1}),r>3&&E.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${S};${b};${y};${$}`,inputDependencies:e.map((O,D)=>"type")},getShaderSource:A,getRunData:()=>({outputs:E,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:x})}},bw=(e,t)=>{_g(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(xg(e.inputs,t,e.outputCount,!1),{outputs:r})}}),$g,Ps,Sg,Hu,Tg,kg,vw,ww,N$=pe(()=>{"use strict";Be(),Ne(),zt(),Ue(),$g=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},Ps=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Sg=(e,t)=>{if(e.length>1){let r=Ps(e,1),n=Ps(e,2),i=Ps(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),at({starts:r,ends:n,axes:i})}else return t},Hu=(e,t,r,n,i)=>{let s=e;return e<0&&(s+=r[n[t]]),i[t]<0?Math.max(0,Math.min(s,r[n[t]]-1)):Math.max(0,Math.min(s,r[n[t]]))},Tg=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${Ie("uniforms.input_shape","i",r.length)};
            let steps_i = ${Ie("uniforms.steps","i",r.length)};
            let signs_i = ${Ie("uniforms.signs","i",r.length)};
            let starts_i = ${Ie("uniforms.starts","i",r.length)};
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
      }`,kg=(e,t)=>{let r=e[0].dims,n=K.size(r),i=t.axes.length>0?K.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=Ps(e,4);s.forEach(S=>S!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let a=t.starts.map((S,x)=>Hu(S,x,r,i,s)),o=t.ends.map((S,x)=>Hu(S,x,r,i,s));if(i.length!==a.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let S=0;S<r.length;++S)i.includes(S)||(a.splice(S,0,0),o.splice(S,0,r[S]),s.splice(S,0,1));let l=s.map(S=>Math.sign(S));s.forEach((S,x,A)=>{if(S<0){let E=(o[x]-a[x])/S,O=a[x],D=O+E*s[x];a[x]=D,o[x]=O,A[x]=-S}});let d=r.slice(0);i.forEach((S,x)=>{d[S]=Math.ceil((o[S]-a[S])/s[S])});let p={dims:d,dataType:e[0].dataType},f=Ce("output",e[0].dataType,d.length),g=Q("input",e[0].dataType,e[0].dims.length),b=K.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],$=[{type:12,data:b},{type:12,data:a},{type:6,data:l},{type:12,data:s},...Ae(e[0].dims,d)],C=S=>`
      ${S.registerUniforms(y).declareVariables(g,f)}
        ${Tg(g,f,r)}
        ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:C,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:$})}},vw=(e,t)=>{$g(e.inputs,t);let r=Sg(e.inputs,t);e.compute(kg(e.inputs,r),{inputs:[0]})},ww=e=>{let t=e.starts,r=e.ends,n=e.axes;return at({starts:t,ends:r,axes:n})}}),Cg,Eg,_w,xw,U$=pe(()=>{"use strict";Be(),Ne(),zt(),Qn(),Ue(),Cg=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Eg=(e,t)=>{let r=e.inputs[0],n=r.dims,i=K.size(n),s=n.length,a=K.normalizeAxis(t.axis,s),o=a<n.length-1,l,d=[];o?(d=Array.from({length:s},(N,k)=>k),d[a]=s-1,d[s-1]=a,l=e.compute(vr(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let p=l.dims,f=p[s-1],g=i/f,b=Ot(f),y=f/b,$=64;g===1&&($=256);let C=(N,k)=>k===4?`max(max(${N}.x, ${N}.y), max(${N}.z, ${N}.w))`:k===2?`max(${N}.x, ${N}.y)`:k===3?`max(max(${N}.x, ${N}.y), ${N}.z)`:N,S=Q("x",l.dataType,l.dims,b),x=Ce("result",l.dataType,l.dims,b),A=S.type.value,E=Wt(l.dataType)==="f32"?`var threadMax = ${A}(-3.4028234663852886e+38f);`:`var threadMax = ${A}(-65504.0h);`,O=N=>`
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
        ${E}
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
          rowMaxShared = ${A}(${C("threadShared[0]",b)});
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
          rowSumShared = ${A}(${Zn("threadShared[0]",b)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${A}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,D=e.compute({name:"Softmax",shaderCache:{hint:`${b};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:y}]}),getShaderSource:O},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(vr(D,d),{inputs:[D]})},_w=(e,t)=>{Cg(e.inputs),Eg(e,t)},xw=e=>at({axis:e.axis})}),Gu,Ig,Ag,Og,$w,L$=pe(()=>{"use strict";Be(),Ne(),Ue(),Gu=e=>Array.from(e.getBigInt64Array(),Number),Ig=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Gu(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Ag=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},Og=(e,t)=>{let r=e[0].dims,n=t??Gu(e[1]),i=Ag(r,n),s=K.size(i),a=e[0].dataType,o=Q("input",a,r.length),l=Ce("output",a,i.length),d=p=>`
      const inputShape = ${o.indices(...r)};
      ${p.registerUniform("output_size","u32").declareVariables(o,l)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...Ae(e[0].dims,i)]}),getShaderSource:d}},$w=e=>{Ig(e.inputs),e.compute(Og(e.inputs),{inputs:[0]})}}),zg,Mg,Sw,F$=pe(()=>{"use strict";Be(),Ne(),Ue(),zg=(e,t,r,n,i)=>{let s=Ce("output_data",i,r.length,4),a=Q("a_data",t[1].dataType,t[1].dims.length,4),o=Q("b_data",t[2].dataType,t[2].dims.length,4),l=Q("c_data",t[0].dataType,t[0].dims.length,4),d,p=(f,g,b)=>`select(${g}, ${f}, ${b})`;if(!n)d=s.setByOffset("global_idx",p(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(g,b,y="")=>{let $=`a_data[index_a${b}][component_a${b}]`,C=`b_data[index_b${b}][component_b${b}]`,S=`bool(c_data[index_c${b}] & (0xffu << (component_c${b} * 8)))`;return`
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
            ${g}[${b}] = ${y}(${p($,C,S)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,a,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Mg=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,s=!(K.areEqual(t,r)&&K.areEqual(r,n)),a=t,o=K.size(t);if(s){let d=cs.calcShape(cs.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=K.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>zg(d,e,a,s,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...Ae(n,t,r,a)]})}},Sw=e=>{e.compute(Mg(e.inputs))}}),Tw,V$=pe(()=>{"use strict";t$(),ac(),r$(),n$(),i$(),s$(),a$(),c$(),f$(),h$(),m$(),g$(),y$(),b$(),v$(),w$(),_$(),x$(),$$(),S$(),T$(),k$(),C$(),E$(),I$(),A$(),Wv(),O$(),z$(),M$(),R$(),B$(),sc(),P$(),Xv(),D$(),N$(),U$(),Gv(),L$(),Qn(),oc(),F$(),Tw=new Map([["Abs",[mb]],["Acos",[gb]],["Acosh",[yb]],["Add",[Qb]],["ArgMax",[cb,vd]],["ArgMin",[db,vd]],["Asin",[bb]],["Asinh",[vb]],["Atan",[wb]],["Atanh",[_b]],["Attention",[pb]],["AveragePool",[iw,nw]],["BatchNormalization",[fb]],["BiasAdd",[hb]],["BiasSplitGelu",[Zb]],["Cast",[$b,xb]],["Ceil",[Tb]],["Clip",[Sb]],["Concat",[lv,uv]],["Conv",[Td,Sd]],["ConvTranspose",[vv,bv]],["Cos",[kb]],["Cosh",[Cb]],["CumSum",[wv,_v]],["DepthToSpace",[xv,$v]],["DequantizeLinear",[cw,pw]],["DFT",[Sv,Tv]],["Div",[Jb]],["Einsum",[kv,Cv]],["Elu",[Eb,Vs]],["Equal",[ev]],["Erf",[Ib]],["Exp",[Ab]],["Expand",[Ev]],["FastGelu",[Iv]],["Floor",[Ob]],["FusedConv",[Td,Sd]],["Gather",[Ov,Av]],["GatherElements",[Dv,Pv]],["GatherBlockQuantized",[Rv,Bv]],["GatherND",[zv,Mv]],["Gelu",[zb]],["Gemm",[Uv,Nv]],["GlobalAveragePool",[aw,sw]],["GlobalMaxPool",[dw,uw]],["Greater",[iv]],["GreaterOrEqual",[av]],["GridSample",[Lv,Fv]],["GroupQueryAttention",[Yv]],["HardSigmoid",[Lb,Ub]],["HardSwish",[Fb]],["InstanceNormalization",[Zv]],["LayerNormalization",[Qv]],["LeakyRelu",[Mb,Vs]],["Less",[sv]],["LessOrEqual",[ov]],["Log",[Xb]],["MatMul",[Jv]],["MatMulNBits",[ew,tw]],["MaxPool",[ow,lw]],["Mul",[tv]],["MultiHeadAttention",[jv,Vv]],["Neg",[Bb]],["Not",[Rb]],["Pad",[rw]],["Pow",[rv]],["QuickGelu",[Yb,Vs]],["Range",[fw]],["Reciprocal",[Pb]],["ReduceMin",[sb]],["ReduceMean",[eb]],["ReduceMax",[ib]],["ReduceSum",[ob]],["ReduceProd",[ab]],["ReduceL1",[tb]],["ReduceL2",[rb]],["ReduceLogSum",[ub]],["ReduceLogSumExp",[nb]],["ReduceSumSquare",[lb]],["Relu",[Db]],["Resize",[gw,yw]],["RotaryEmbedding",[Kv]],["ScatterND",[mw,hw]],["Sigmoid",[Nb]],["Sin",[Vb]],["Sinh",[jb]],["Slice",[vw,ww]],["SkipLayerNormalization",[bw]],["Split",[qv,Hv]],["Sqrt",[Wb]],["Softmax",[_w,xw]],["Sub",[nv]],["Tan",[qb]],["Tanh",[Hb]],["ThresholdedRelu",[Kb,Vs]],["Tile",[$w]],["Transpose",[Vy,jy]],["Where",[Sw]]])}),kw,j$=pe(()=>{"use strict";zr(),On(),Ue(),kw=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){pn(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Wr(e.programInfo.name)}dispose(){}build(e,t){pn(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let i=Fy(t,this.backend.device.limits),s=e.getShaderSource(i),a=`${n.join(`
`)}
${i.additionalImplementations}
${s}`,o=r.createShaderModule({code:a,label:e.name});tt("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Wr(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let s=t*r*n,a=Math.ceil(Math.sqrt(s));if(a>i){if(a=Math.ceil(Math.cbrt(s)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),Cw={};fs(Cw,{WebGpuBackend:()=>Ew});var Rg,Bg,Pg,Ew,W$=pe(()=>{"use strict";zr(),Be(),On(),Py(),Jx(),V$(),j$(),Rg=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let s=e[n].dims.length;r.push(`${i};${s}`);break}case"dims":{let s=e[n].dims.join(",");r.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},Bg=(e,t,r)=>{let n=e.name;return e.shaderCache?.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${Rg(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,n},Pg=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Ew=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=o=>t.features.has(o)&&r.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(n);let s=t,a=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new Pg(a),this.gpuDataManager=Uy(this),this.programManager=new kw(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,tc(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;pn(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let i=r[n],s=i.kernelId,a=this.kernels.get(s),o=a.kernelType,l=a.kernelName,d=i.programName,p=i.inputTensorViews,f=i.outputTensorViews,g=t[n*2],b=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let y=Number(g-this.queryTimeBase),$=Number(b-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger($))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(C=>({dims:C.dims,dataType:Cn(C.dataType)})),outputsMetadata:f.map(C=>({dims:C.dims,dataType:Cn(C.dataType)})),kernelId:s,kernelType:o,kernelName:l,programName:d,startTime:y,endTime:$});else{let C="";p.forEach((x,A)=>{C+=`input[${A}]: [${x.dims}] | ${Cn(x.dataType)}, `});let S="";f.forEach((x,A)=>{S+=`output[${A}]: [${x.dims}] | ${Cn(x.dataType)}, `}),console.log(`[profiling] kernel "${s}|${o}|${l}|${d}" ${C}${S}start time: ${y} ns, execution time: ${$-y} ns`)}No("GPU",`${d}::${g}::${b}`)}e.unmap(),this.pendingQueries.delete(e)}),Wr()}run(e,t,r,n,i,s){pn(e.name);let a=[];for(let x=0;x<t.length;++x){let A=t[x].data;if(A===0)continue;let E=this.gpuDataManager.get(A);if(!E)throw new Error(`no GPU data for input: ${A}`);a.push(E)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),p=r.length===0?o.map((x,A)=>A):r;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let f=[],g=[];for(let x=0;x<o.length;++x){if(!Number.isInteger(p[x])||p[x]<-3||p[x]>=s)throw new Error(`Invalid output index: ${p[x]}`);if(p[x]===-3)continue;let A=p[x]===-1,E=p[x]===-2,O=A||E?i(o[x].dataType,o[x].dims):n(p[x],o[x].dataType,o[x].dims);if(f.push(O),O.data===0)continue;let D=this.gpuDataManager.get(O.data);if(!D)throw new Error(`no GPU data for output: ${O.data}`);if(A&&this.temporaryData.push(D),E){let N=this.kernelPersistentData.get(this.currentKernelId);N||(N=[],this.kernelPersistentData.set(this.currentKernelId,N)),N.push(D)}g.push(D)}if(a.length!==t.length||g.length!==f.length){if(g.length===0)return Wr(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let b;if(d){let x=0,A=[];d.forEach(N=>{let k=typeof N.data=="number"?[N.data]:N.data;if(k.length===0)return;let q=N.type===10?2:4,Z,ae;N.type===10?(ae=k.length>4?16:k.length>2?8:k.length*q,Z=k.length>4?16:q*k.length):(ae=k.length<=2?k.length*q:16,Z=16),x=Math.ceil(x/ae)*ae,A.push(x);let X=N.type===10?8:4;x+=k.length>4?Math.ceil(k.length/X)*Z:k.length*q});let E=16;x=Math.ceil(x/E)*E;let O=new ArrayBuffer(x);d.forEach((N,k)=>{let q=A[k],Z=typeof N.data=="number"?[N.data]:N.data;if(N.type===6)new Int32Array(O,q,Z.length).set(Z);else if(N.type===12)new Uint32Array(O,q,Z.length).set(Z);else if(N.type===10)new Uint16Array(O,q,Z.length).set(Z);else if(N.type===1)new Float32Array(O,q,Z.length).set(Z);else throw new Error(`Unsupported uniform type: ${Cn(N.type)}`)});let D=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(D.buffer,0,O,0,x),this.gpuDataManager.release(D.id),b={offset:0,size:x,buffer:D.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),$=y[1]===1&&y[2]===1,C=Bg(e,t,$),S=this.programManager.getArtifact(C);if(S||(S=this.programManager.build(e,y),this.programManager.setArtifact(C,S),tt("info",()=>`[artifact] key: ${C}, programName: ${e.name}`)),d&&S.uniformVariablesInfo){if(d.length!==S.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${S.uniformVariablesInfo.length}, got ${d.length} in program "${S.programInfo.name}".`);for(let x=0;x<d.length;x++){let A=d[x],E=A.type,O=typeof A.data=="number"?1:A.data.length,[D,N]=S.uniformVariablesInfo[x];if(E!==D||O!==N)throw new Error(`Uniform variable ${x} mismatch: expect type ${D} with size ${N}, got type ${E} with size ${O} in program "${S.programInfo.name}".`)}}if(tt("info",()=>`[ProgramManager] run "${e.name}" (key=${C}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:S.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(S,a,g,y,b),Wr(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=Tw.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,s=n.kernelName,a=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),tt("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),a=this.gpuDataManager.registerExternalBuffer(r,n,s);return i.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await gd(this,e,t);return rc(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){tt("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){tt("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){tt("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),s=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Iw={};fs(Iw,{init:()=>Aw});var bo,Dg,Aw,q$=pe(()=>{"use strict";Be(),On(),Ne(),Qx(),bo=class Ow{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(K.size(t)!==K.size(this.dims))throw new Error("Invalid new shape");return new Ow(this.module,this.dataType,this.data,t)}},Dg=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,i=r/e.PTR_SIZE,s=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,s));let a=Number(e.getValue(n*i++,s));this.outputCount=Number(e.getValue(n*i++,s)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,s));let o=[];for(let l=0;l<a;l++){let d=Number(e.getValue(n*i++,s)),p=Number(e.getValue(n*i++,"*")),f=Number(e.getValue(n*i++,s)),g=[];for(let b=0;b<f;b++)g.push(Number(e.getValue(n*i++,s)));o.push(new bo(e,d,p,g))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(a=>typeof a=="number"?this.inputs[a]:a)??this.inputs,n=t?.outputs??[],i=(a,o,l)=>new bo(this.module,o,this.output(a,l),l),s=(a,o)=>{let l=Ii(a,o);if(!l)throw new Error(`Unsupported data type: ${a}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new bo(this.module,a,d,o)};return this.backend.run(e,r,n,i,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,i=n===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*n);this.module.setValue(s,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(s+n*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},Aw=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(W$(),da(Cw)).WebGpuBackend,a=new s;await a.initialize(r,n),i("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,l,d,p=!1)=>{if(p)tt("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),a.memcpy(Number(o),Number(l));else{tt("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(l),f)}},async(o,l,d)=>{tt("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>a.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>a.releaseKernel(o),(o,l,d,p)=>{tt("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let f=new Dg(t,a,Number(l));return a.computeKernel(Number(o),f,p)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new Ny(r);i("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,l,d,p)=>s.ensureTensor(a,o,l,d,p),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!r.trace])}}}),Ng,fc,hc,Vn,Ug,Ku,Ho,mc,gc,Xu,yc,bc,vc,zw=pe(()=>{"use strict";zr(),Xx(),Yx(),Be(),Fi(),Zd(),zy(),Ng=(e,t)=>{xt()._OrtInit(e,t)!==0&&ct("Can't initialize onnxruntime.")},fc=async e=>{Ng(e.wasm.numThreads,Fo(e.logLevel))},hc=async(e,t)=>{xt().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:i}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let n=(q$(),da(Iw)).init;t==="webgpu"&&await n("webgpu",xt(),e,r),t==="webnn"&&await n("webnn",xt(),e)}},Vn=new Map,Ug=e=>{let t=xt(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&ct("Can't get session input/output count.");let s=n===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+n,s))]}finally{t.stackRestore(r)}},Ku=(e,t)=>{let r=xt(),n=r.stackSave(),i=0;try{let s=r.PTR_SIZE,a=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&ct("Can't get session input/output metadata.");let o=Number(r.getValue(a,"*"));i=Number(r.getValue(a+s,"*"));let l=r.HEAP32[i/4];if(l===0)return[o,0];let d=r.HEAPU32[i/4+1],p=[];for(let f=0;f<d;f++){let g=Number(r.getValue(i+8+f*s,"*"));p.push(g!==0?r.UTF8ToString(g):Number(r.getValue(i+8+(f+d)*s,"*")))}return[o,l,p]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},Ho=e=>{let t=xt(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},mc=async(e,t)=>{let r,n,i=xt();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=Ho(e);let s=0,a=0,o=0,l=[],d=[],p=[];try{if([a,l]=await Oy(t),t?.externalData&&i.mountExternalData){let E=[];for(let O of t.externalData){let D=typeof O=="string"?O:O.path,N=typeof O=="string"?O:O.data;E.push(ec(N).then(k=>{i.mountExternalData(D,k)}))}await Promise.all(E)}for(let E of t?.executionProviders??[])if((typeof E=="string"?E:E.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof E!="string"){let O=E,D=O?.context,N=O?.gpuDevice,k=O?.deviceType,q=O?.powerPreference;D?i.currentContext=D:N?i.currentContext=await i.webnnCreateMLContext(N):i.currentContext=await i.webnnCreateMLContext({deviceType:k,powerPreference:q})}else i.currentContext=await i.webnnCreateMLContext();break}s=await i._OrtCreateSession(r,n,a),i.webgpuOnCreateSession?.(s),s===0&&ct("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[f,g]=Ug(s),b=!!t?.enableGraphCapture,y=[],$=[],C=[],S=[],x=[];for(let E=0;E<f;E++){let[O,D,N]=Ku(s,E);O===0&&ct("Can't get an input name."),d.push(O);let k=i.UTF8ToString(O);y.push(k),C.push(D===0?{name:k,isTensor:!1}:{name:k,isTensor:!0,type:Cn(D),shape:N})}for(let E=0;E<g;E++){let[O,D,N]=Ku(s,E+f);O===0&&ct("Can't get an output name."),p.push(O);let k=i.UTF8ToString(O);$.push(k),S.push(D===0?{name:k,isTensor:!1}:{name:k,isTensor:!0,type:Cn(D),shape:N});{if(b&&t?.preferredOutputLocation===void 0){x.push("gpu-buffer");continue}let q=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[k]??"cpu",Z=i.webnnIsGraphOutput;if(q==="cpu"&&Z&&Z(s,k)){x.push("ml-tensor-cpu-output");continue}if(q!=="cpu"&&q!=="cpu-pinned"&&q!=="gpu-buffer"&&q!=="ml-tensor")throw new Error(`Not supported preferred output location: ${q}.`);if(b&&q!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${q}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);x.push(q)}}let A=null;return x.some(E=>E==="gpu-buffer"||E==="ml-tensor"||E==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(s),o===0&&ct("Can't create IO binding."),A={handle:o,outputPreferredLocations:x,outputPreferredLocationsEncoded:x.map(E=>E==="ml-tensor-cpu-output"?"ml-tensor":E).map(E=>md(E))}),Vn.set(s,[s,d,p,A,b,!1]),[s,y,$,C,S]}catch(f){throw d.forEach(g=>i._OrtFree(g)),p.forEach(g=>i._OrtFree(g)),o!==0&&i._OrtReleaseBinding(o)!==0&&ct("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&ct("Can't release session."),f}finally{i._free(r),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&ct("Can't release session options."),l.forEach(f=>i._free(f)),i.unmountExternalData?.()}},gc=e=>{let t=xt(),r=Vn.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,s,a,o]=r;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&ct("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&ct("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(l=>t._OrtFree(l)),s.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(n)!==0&&ct("Can't release session."),Vn.delete(e)},Xu=async(e,t,r,n,i,s,a=!1)=>{if(!e){t.push(0);return}let o=xt(),l=o.PTR_SIZE,d=e[0],p=e[1],f=e[3],g=f,b,y;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let S=e[2].gpuBuffer;y=Ii(Ei(d),p);{let x=o.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');b=x(n,s,S,y)}}else if(f==="ml-tensor"){let S=e[2].mlTensor;y=Ii(Ei(d),p);let x=o.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');b=x(n,S,Ei(d),p)}else{let S=e[2];if(Array.isArray(S)){y=l*S.length,b=o._malloc(y),r.push(b);for(let x=0;x<S.length;x++){if(typeof S[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);o.setValue(b+x*l,Lr(S[x],r),"*")}}else{let x=o.webnnIsGraphInput,A=o.webnnIsGraphOutput;if(d!=="string"&&x&&A){let E=o.UTF8ToString(i);if(x(n,E)||A(n,E)){let O=Ei(d);y=Ii(O,p),g="ml-tensor";let D=o.webnnCreateTemporaryTensor,N=o.webnnUploadTensor;if(!D||!N)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let k=await D(n,O,p);N(k,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),b=k}else y=S.byteLength,b=o._malloc(y),r.push(b),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,y),b)}else y=S.byteLength,b=o._malloc(y),r.push(b),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,y),b)}}let $=o.stackSave(),C=o.stackAlloc(4*p.length);try{p.forEach((x,A)=>o.setValue(C+A*l,x,l===4?"i32":"i64"));let S=o._OrtCreateTensor(Ei(d),b,y,C,p.length,md(g));S===0&&ct(`Can't create tensor for input/output. session=${n}, index=${s}.`),t.push(S)}finally{o.stackRestore($)}},yc=async(e,t,r,n,i,s)=>{let a=xt(),o=a.PTR_SIZE,l=Vn.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],p=l[1],f=l[2],g=l[3],b=l[4],y=l[5],$=t.length,C=n.length,S=0,x=[],A=[],E=[],O=[],D=[],N=a.stackSave(),k=a.stackAlloc($*o),q=a.stackAlloc($*o),Z=a.stackAlloc(C*o),ae=a.stackAlloc(C*o);try{[S,x]=Ay(s),Bi("wasm prepareInputOutputTensor");for(let J=0;J<$;J++)await Xu(r[J],A,O,e,p[t[J]],t[J],b);for(let J=0;J<C;J++)await Xu(i[J],E,O,e,f[n[J]],$+n[J],b);Pi("wasm prepareInputOutputTensor");for(let J=0;J<$;J++)a.setValue(k+J*o,A[J],"*"),a.setValue(q+J*o,p[t[J]],"*");for(let J=0;J<C;J++)a.setValue(Z+J*o,E[J],"*"),a.setValue(ae+J*o,f[n[J]],"*");if(g&&!y){let{handle:J,outputPreferredLocations:te,outputPreferredLocationsEncoded:ue}=g;if(p.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${p.length}).`);Bi("wasm bindInputsOutputs");for(let ce=0;ce<$;ce++){let we=t[ce];await a._OrtBindInput(J,p[we],A[ce])!==0&&ct(`Can't bind input[${ce}] for session=${e}.`)}for(let ce=0;ce<C;ce++){let we=n[ce];i[ce]?.[3]?(D.push(E[ce]),a._OrtBindOutput(J,f[we],E[ce],0)!==0&&ct(`Can't bind pre-allocated output[${ce}] for session=${e}.`)):a._OrtBindOutput(J,f[we],0,ue[we])!==0&&ct(`Can't bind output[${ce}] to ${te[ce]} for session=${e}.`)}Pi("wasm bindInputsOutputs"),Vn.set(e,[d,p,f,g,b,!0])}a.jsepOnRunStart?.(d),a.webnnOnRunStart?.(d);let X;g?X=await a._OrtRunWithBinding(d,g.handle,C,Z,S):X=await a._OrtRun(d,q,k,$,ae,C,Z,S),X!==0&&ct("failed to call OrtRun().");let le=[],W=[];Bi("wasm ProcessOutputTensor");for(let J=0;J<C;J++){let te=Number(a.getValue(Z+J*o,"*"));if(te===E[J]||D.includes(E[J])){le.push(i[J]),te!==E[J]&&a._OrtReleaseTensor(te)!==0&&ct("Can't release tensor.");continue}let ue=a.stackSave(),ce=a.stackAlloc(4*o),we=!1,ke,re=0;try{a._OrtGetTensorData(te,ce,ce+o,ce+2*o,ce+3*o)!==0&&ct(`Can't access output tensor data on index ${J}.`);let $e=o===4?"i32":"i64",_e=Number(a.getValue(ce,$e));re=a.getValue(ce+o,"*");let xe=a.getValue(ce+o*2,"*"),mt=Number(a.getValue(ce+o*3,$e)),yt=[];for(let Ve=0;Ve<mt;Ve++)yt.push(Number(a.getValue(xe+Ve*o,$e)));a._OrtFree(xe)!==0&&ct("Can't free memory for tensor dims.");let it=yt.reduce((Ve,ot)=>Ve*ot,1);ke=Cn(_e);let Et=g?.outputPreferredLocations[n[J]];if(ke==="string"){if(Et==="gpu-buffer"||Et==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ve=[];for(let ot=0;ot<it;ot++){let M=a.getValue(re+ot*o,"*"),L=a.getValue(re+(ot+1)*o,"*"),H=ot===it-1?void 0:L-M;Ve.push(a.UTF8ToString(M,H))}le.push([ke,yt,Ve,"cpu"])}else if(Et==="gpu-buffer"&&it>0){let Ve=a.jsepGetBuffer;if(!Ve)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ot=Ve(re),M=Ii(_e,it);if(M===void 0||!Qd(ke))throw new Error(`Unsupported data type: ${ke}`);we=!0,le.push([ke,yt,{gpuBuffer:ot,download:a.jsepCreateDownloader(ot,M,ke),dispose:()=>{a._OrtReleaseTensor(te)!==0&&ct("Can't release tensor.")}},"gpu-buffer"])}else if(Et==="ml-tensor"&&it>0){let Ve=a.webnnEnsureTensor,ot=a.webnnIsGraphInputOutputTypeSupported;if(!Ve||!ot)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ii(_e,it)===void 0||!Jd(ke))throw new Error(`Unsupported data type: ${ke}`);if(!ot(e,ke,!1))throw new Error(`preferredLocation "ml-tensor" for ${ke} output is not supported by current WebNN Context.`);let M=await Ve(e,re,_e,yt,!1);we=!0,le.push([ke,yt,{mlTensor:M,download:a.webnnCreateMLTensorDownloader(re,ke),dispose:()=>{a.webnnReleaseTensorId(re),a._OrtReleaseTensor(te)}},"ml-tensor"])}else if(Et==="ml-tensor-cpu-output"&&it>0){let Ve=a.webnnCreateMLTensorDownloader(re,ke)(),ot=le.length;we=!0,W.push((async()=>{let M=[ot,await Ve];return a.webnnReleaseTensorId(re),a._OrtReleaseTensor(te),M})()),le.push([ke,yt,[],"cpu"])}else{let Ve=ol(ke),ot=new Ve(it);new Uint8Array(ot.buffer,ot.byteOffset,ot.byteLength).set(a.HEAPU8.subarray(re,re+ot.byteLength)),le.push([ke,yt,ot,"cpu"])}}finally{a.stackRestore(ue),ke==="string"&&re&&a._free(re),we||a._OrtReleaseTensor(te)}}g&&!b&&(a._OrtClearBoundOutputs(g.handle)!==0&&ct("Can't clear bound outputs."),Vn.set(e,[d,p,f,g,b,!1]));for(let[J,te]of await Promise.all(W))le[J][2]=te;return Pi("wasm ProcessOutputTensor"),le}finally{a.webnnOnRunEnd?.(d),a.stackRestore(N),A.forEach(X=>a._OrtReleaseTensor(X)),E.forEach(X=>a._OrtReleaseTensor(X)),O.forEach(X=>a._free(X)),S!==0&&a._OrtReleaseRunOptions(S),x.forEach(X=>a._free(X))}},bc=e=>{let t=xt(),r=Vn.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&ct("Can't get an profile file name."),t._OrtFree(i)},vc=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),jn,Tr,es,Ds,Ns,vo,Yu,wo,$i,Si,Lg,Mw,Rw,Bw,Pw,Dw,Nw,Uw,Lw=pe(()=>{"use strict";zr(),zw(),Fi(),Xd(),jn=()=>!!_t.wasm.proxy&&typeof document<"u",es=!1,Ds=!1,Ns=!1,wo=new Map,$i=(e,t)=>{let r=wo.get(e);r?r.push(t):wo.set(e,[t])},Si=()=>{if(es||!Ds||Ns||!Tr)throw new Error("worker not ready")},Lg=e=>{switch(e.data.type){case"init-wasm":es=!1,e.data.err?(Ns=!0,Yu[1](e.data.err)):(Ds=!0,Yu[0]()),vo&&(URL.revokeObjectURL(vo),vo=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=wo.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Mw=async()=>{if(!Ds){if(es)throw new Error("multiple calls to 'initWasm()' detected.");if(Ns)throw new Error("previous call to 'initWasm()' failed.");if(es=!0,jn())return new Promise((e,t)=>{Tr?.terminate(),Ey().then(([r,n])=>{try{Tr=n,Tr.onerror=s=>t(s),Tr.onmessage=Lg,Yu=[e,t];let i={type:"init-wasm",in:_t};!i.in.wasm.wasmPaths&&(r||hd)&&(i.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-MDYUKy93.wasm",import.meta.url).href}),Tr.postMessage(i),vo=r}catch(i){t(i)}},t)});try{await Yd(_t.wasm),await fc(_t),Ds=!0}catch(e){throw Ns=!0,e}finally{es=!1}}},Rw=async e=>{if(jn())return Si(),new Promise((t,r)=>{$i("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:_t}};Tr.postMessage(n)});await hc(_t,e)},Bw=async e=>jn()?(Si(),new Promise((t,r)=>{$i("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};Tr.postMessage(n,[e.buffer])})):Ho(e),Pw=async(e,t)=>{if(jn()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Si(),new Promise((r,n)=>{$i("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),Tr.postMessage(i,s)})}else return mc(e,t)},Dw=async e=>{if(jn())return Si(),new Promise((t,r)=>{$i("release",[t,r]);let n={type:"release",in:e};Tr.postMessage(n)});gc(e)},Nw=async(e,t,r,n,i,s)=>{if(jn()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Si(),new Promise((a,o)=>{$i("run",[a,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:n,options:s}};Tr.postMessage(d,vc(l))})}else return yc(e,t,r,n,i,s)},Uw=async e=>{if(jn())return Si(),new Promise((t,r)=>{$i("end-profiling",[t,r]);let n={type:"end-profiling",in:e};Tr.postMessage(n)});bc(e)}}),Zu,Fg,Fw,H$=pe(()=>{"use strict";zr(),Lw(),Be(),Kd(),zy(),Zu=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Fg=e=>{switch(e[3]){case"cpu":return new Fr(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Qd(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return Fr.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!Jd(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return Fr.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Fw=class{async fetchModelAndCopyToWasmMemory(e){return Bw(await ec(e))}async loadModel(e,t){pn();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Pw(r,t),Wr()}async dispose(){return Dw(this.sessionId)}async run(e,t,r){pn();let n=[],i=[];Object.entries(e).forEach(f=>{let g=f[0],b=f[1],y=this.inputNames.indexOf(g);if(y===-1)throw new Error(`invalid input '${g}'`);n.push(b),i.push(y)});let s=[],a=[];Object.entries(t).forEach(f=>{let g=f[0],b=f[1],y=this.outputNames.indexOf(g);if(y===-1)throw new Error(`invalid output '${g}'`);s.push(b),a.push(y)});let o=n.map((f,g)=>Zu(f,()=>`input "${this.inputNames[i[g]]}"`)),l=s.map((f,g)=>f?Zu(f,()=>`output "${this.outputNames[a[g]]}"`):null),d=await Nw(this.sessionId,i,o,a,l,r),p={};for(let f=0;f<d.length;f++)p[this.outputNames[a[f]]]=s[f]??Fg(d[f]);return Wr(),p}startProfiling(){}endProfiling(){Uw(this.sessionId)}}}),Vw={};fs(Vw,{OnnxruntimeWebAssemblyBackend:()=>Ed,initializeFlags:()=>Cd,wasmBackend:()=>jw});var Cd,Ed,jw,G$=pe(()=>{"use strict";zr(),Lw(),H$(),Cd=()=>{(typeof _t.wasm.initTimeout!="number"||_t.wasm.initTimeout<0)&&(_t.wasm.initTimeout=0);let e=_t.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),_t.wasm.simd=!1),typeof _t.wasm.proxy!="boolean"&&(_t.wasm.proxy=!1),typeof _t.wasm.trace!="boolean"&&(_t.wasm.trace=!1),typeof _t.wasm.numThreads!="number"||!Number.isInteger(_t.wasm.numThreads)||_t.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)_t.wasm.numThreads=1;else{let t=typeof navigator>"u"?Ox("node:os").cpus().length:navigator.hardwareConcurrency;_t.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ed=class{async init(e){Cd(),await Mw(),await Rw(e)}async createInferenceSessionHandler(e,t){let r=new Fw;return await r.loadModel(e,t),r}},jw=new Ed});zr();zr();zr();var K$="1.30.0";{let e=(G$(),da(Vw)).wasmBackend;rs("webgpu",e,5),rs("webnn",e,5),rs("cpu",e,10),rs("wasm",e,10)}Object.defineProperty(_t.versions,"web",{value:K$,enumerable:!0});/**
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
 */class X${session=null;fallbackSegmenter=null;isModelLoading=!1;backendUsed="wasm";constructor(){_t.wasm.numThreads=Math.min(navigator.hardwareConcurrency||4,4),_t.wasm.simd=!0}async initOnnxModel(t){if(this.session)return!0;this.isModelLoading=!0;try{console.log("[HdMattingEngine] 正在尝试以 WebGPU 加载高精抠图模型...");try{return this.session=await Uo.create(t,{executionProviders:["webgpu"],graphOptimizationLevel:"all"}),this.backendUsed="webgpu",console.log("[HdMattingEngine] WebGPU 抠图会话创建成功"),this.isModelLoading=!1,!0}catch(r){console.warn("[HdMattingEngine] WebGPU 后端不可用，平滑回退至 Wasm 运行时:",r)}return this.session=await Uo.create(t,{executionProviders:["wasm"],graphOptimizationLevel:"all"}),this.backendUsed="wasm",console.log("[HdMattingEngine] Wasm 抠图会话创建成功"),this.isModelLoading=!1,!0}catch(r){return this.isModelLoading=!1,console.warn("[HdMattingEngine] ONNX 模型加载失败，将启用内置高精度精细分割引擎:",r),!1}}async getFallbackSegmenter(){return this.fallbackSegmenter?this.fallbackSegmenter:new Promise((t,r)=>{const n=new iy.SelfieSegmentation({locateFile:i=>`/mediapipe/${i}`});n.setOptions({modelSelection:1,selfieMode:!1}),n.initialize().then(()=>{this.fallbackSegmenter=n,this.backendUsed="mediapipe-hd",t(n)}).catch(r)})}async segmentHighDefinition(t,r){r?.("准备图像数据",10);const n=t.width,i=t.height;if(this.session)try{r?.("AI 神经网络深度推演中 (WebGPU/Wasm)",30);const l=await this.runOnnxMatting(t,r);r?.("精修发丝与边缘羽化",80);const d=this.compositeCutout(t,l,n,i);return r?.("完成生成透明图层",100),await this.canvasToBlob(d)}catch(l){console.error("[HdMattingEngine] ONNX 推理失败，触发降级模式:",l)}r?.("启用本地 AI 发丝级抠图引擎",40);const s=await this.getFallbackSegmenter(),a=1024;let o;if(Math.max(n,i)>a){const l=a/Math.max(n,i);o=document.createElement("canvas"),o.width=Math.round(n*l),o.height=Math.round(i*l);const d=o.getContext("2d");d&&(d.imageSmoothingEnabled=!0,d.imageSmoothingQuality="high",d.drawImage(t,0,0,o.width,o.height))}else if(t instanceof HTMLCanvasElement)o=t;else{o=document.createElement("canvas"),o.width=n,o.height=i;const l=o.getContext("2d");l&&l.drawImage(t,0,0)}return new Promise((l,d)=>{let p=!1;const f=setTimeout(()=>{p||(p=!0,d(new Error("AI 抠图超时，请检查图片或重试")))},15e3);s.onResults(g=>{if(p)return;if(!g.segmentationMask){p=!0,clearTimeout(f),d(new Error("未检测到人像"));return}r?.("智能羽化与边缘保真",75);const b=document.createElement("canvas");b.width=n,b.height=i;const y=b.getContext("2d");if(!y){p=!0,clearTimeout(f),d(new Error("Canvas 上下文创建失败"));return}y.drawImage(t,0,0,n,i),y.globalCompositeOperation="destination-in",y.imageSmoothingEnabled=!0,y.imageSmoothingQuality="high",y.drawImage(g.segmentationMask,0,0,n,i),this.applyEdgeRefinement(y,n,i),r?.("导出透明 PNG",95),this.canvasToBlob(b).then($=>{p||(p=!0,clearTimeout(f),l($))}).catch($=>{p||(p=!0,clearTimeout(f),d($))})}),s.send({image:o}).catch(g=>{p||(p=!0,clearTimeout(f),d(g))})})}async runOnnxMatting(t,r){const i=document.createElement("canvas");i.width=1024,i.height=1024;const s=i.getContext("2d",{willReadFrequently:!0});if(!s)throw new Error("无法创建推理 Canvas 上下文");s.drawImage(t,0,0,1024,1024);const a=s.getImageData(0,0,1024,1024),{data:o}=a,l=new Float32Array(3*1024*1024),d=1024*1024;for(let A=0;A<d;A++){const E=o[A*4],O=o[A*4+1],D=o[A*4+2];l[A]=(E/255-.5)/.5,l[d+A]=(O/255-.5)/.5,l[d*2+A]=(D/255-.5)/.5}const p=new Fr("float32",l,[1,3,1024,1024]),f=this.session.inputNames[0];r?.("模型矩阵运算中",55);const g=await this.session.run({[f]:p}),b=this.session.outputNames[0],$=g[b].data,C=document.createElement("canvas");C.width=1024,C.height=1024;const S=C.getContext("2d");if(!S)throw new Error("无法创建 Mask Canvas");const x=S.createImageData(1024,1024);for(let A=0;A<d;A++){let E=$[A];E<0&&(E=0),E>1&&(E=1);const O=Math.round(E*255);x.data[A*4]=255,x.data[A*4+1]=255,x.data[A*4+2]=255,x.data[A*4+3]=O}return S.putImageData(x,0,0),C}compositeCutout(t,r,n,i){const s=document.createElement("canvas");s.width=n,s.height=i;const a=s.getContext("2d");if(!a)throw new Error("无法创建复合图层");return a.drawImage(t,0,0,n,i),a.globalCompositeOperation="destination-in",a.drawImage(r,0,0,n,i),s}applyEdgeRefinement(t,r,n){t.save(),t.filter="blur(0.5px)",t.globalCompositeOperation="destination-in",t.drawImage(t.canvas,0,0,r,n),t.restore()}canvasToBlob(t){return new Promise((r,n)=>{t.toBlob(i=>{i?r(i):n(new Error("导出透明 Blob 失败"))},"image/png")})}getBackend(){return this.backendUsed}}const Y$=new X$;function Z$(e,t,r){return new Promise(n=>{const i=e.naturalWidth||e.width,s=e.naturalHeight||e.height,a=Math.max(r.widthPx/i,r.heightPx/s)*1.05,o={scale:a,x:(r.widthPx-i*a)/2,y:(r.heightPx-s*a)*.42,headTopY:0,chinY:s*.6,headCenterX:i/2,headHeight:s*.6,success:!1};try{let l;if(t instanceof HTMLCanvasElement)l=t;else if(l=document.createElement("canvas"),l.width=i,l.height=s,!l.getContext("2d")){n(o);return}const d=200,p=Math.round(s/i*d),f=document.createElement("canvas");f.width=d,f.height=p;const g=f.getContext("2d",{willReadFrequently:!0});if(!g){n(o);return}g.drawImage(e,0,0,d,p);const y=g.getImageData(0,0,d,p).data;let $=-1,C=d/2;for(let ue=0;ue<p;ue++){let ce=0,we=0;for(let ke=0;ke<d;ke++)y[(ue*d+ke)*4+3]>60&&(ce++,we+=ke);if(ce>8){$=ue,C=we/ce;break}}if($===-1||$>=p*.8){n(o);return}const S=[];for(let ue=$;ue<p;ue++){let ce=d,we=-1;for(let ke=0;ke<d;ke++)y[(ue*d+ke)*4+3]>60&&(ke<ce&&(ce=ke),ke>we&&(we=ke));we>=ce&&S.push({y:ue,width:we-ce,centerX:(ce+we)/2})}if(S.length<20){n(o);return}let x=0;for(let ue=0;ue<Math.min(S.length,Math.round(p*.4));ue++)S[ue].width>x&&(x=S[ue].width);let A=Math.round(S.length*.45);for(let ue=10;ue<S.length;ue++)if(S[ue].width>x*1.35){A=Math.max(ue-4,10);break}const E=S[A]?.y||$+(p-$)*.4,O=S[Math.round(A/2)]?.centerX||C,D=i/d,N=$*D,k=E*D,q=O*D,Z=Math.max(k-N,s*.25),ae=r.heightPx*.085,X=r.heightPx*.58,le=r.widthPx*.5,W=X/Z,J=le-q*W,te=ae-N*W;n({scale:Math.round(W*1e3)/1e3,x:Math.round(J),y:Math.round(te),headTopY:N,chinY:k,headCenterX:q,headHeight:Z,success:!0})}catch(l){console.warn("[FaceAlignment] 自动对齐异常，采用默认对齐:",l),n(o)}})}const Q$={class:"relative w-full h-full flex flex-col bg-slate-950 text-slate-100 overflow-hidden select-none"},J$={class:"w-full z-20 flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md gap-2"},e3={class:"flex items-center space-x-2"},t3={class:"bg-slate-800 p-1 rounded-xl flex items-center border border-slate-700/80"},r3={class:"flex items-center space-x-2"},n3={class:"flex items-center space-x-1.5 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1"},i3=["value"],s3={key:0,class:"ml-1 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full"},a3=["disabled"],o3={class:"flex-1 w-full flex flex-col md:flex-row items-center justify-between overflow-hidden p-2 sm:p-4 gap-4"},l3={class:"relative flex-1 w-full h-full min-h-[360px] flex items-center justify-center bg-slate-900/60 rounded-2xl border border-slate-800/80 overflow-hidden shadow-inner"},u3={class:"w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400"},d3={key:1,class:"relative flex flex-col items-center justify-center w-full h-full"},c3={key:0,class:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 140",preserveAspectRatio:"none"},p3={class:"flex items-center space-x-4 mt-4"},f3=["disabled"],h3={key:0,class:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 140",preserveAspectRatio:"none"},m3={class:"flex items-center space-x-3 mt-3 text-xs text-slate-400"},g3={key:3,class:"absolute inset-0 z-40 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"},y3={class:"text-sm font-semibold text-slate-100"},b3={class:"w-48 bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden"},v3={class:"w-full md:w-80 lg:w-96 flex flex-col justify-between bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 overflow-y-auto max-h-[85vh]"},w3={class:"bg-slate-800/70 border border-slate-700/70 rounded-xl p-3 space-y-1"},_3={class:"flex items-center justify-between"},x3={class:"text-xs font-bold text-slate-200"},$3={class:"flex items-center justify-between text-xs text-slate-400"},S3={class:"text-[11px] text-slate-500"},T3={class:"space-y-2.5 bg-slate-800/40 border border-slate-800 rounded-xl p-3"},k3={class:"flex items-center justify-between"},C3={class:"flex items-center space-x-1.5"},E3={class:"flex items-center space-x-1.5"},I3={key:0,class:"text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full flex items-center space-x-1"},A3={key:1,class:"text-[10px] text-amber-400 animate-pulse flex items-center space-x-1"},O3={class:"grid grid-cols-4 gap-1.5"},z3=["onClick"],M3={class:"truncate w-full text-center text-[10px]"},R3={class:"flex items-center space-x-2 text-left"},B3={key:1,class:"space-y-3 bg-slate-800/40 border border-slate-800 rounded-xl p-3"},P3={class:"flex items-center space-x-2"},D3={class:"w-10 text-right text-xs text-slate-300 font-mono"},N3={class:"flex items-center justify-between pt-1"},U3={class:"flex items-center space-x-1 text-xs text-slate-400 cursor-pointer"},L3={class:"space-y-2 pt-2 border-t border-slate-800"},F3={class:"grid grid-cols-2 gap-2"},V3=["disabled"],j3=["disabled"],W3={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"},q3={class:"bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm p-5 space-y-4"},H3={class:"space-y-3 text-xs"},G3={class:"grid grid-cols-2 gap-3"},K3={class:"text-[11px] text-slate-400"},X3={class:"flex justify-end space-x-2 pt-2"},Y3=ha({__name:"PhotoStudio",props:{trayCount:{}},emits:["photo-added-to-tray","open-single-export","open-tray","open-packing","show-toast"],setup(e,{emit:t}){const r=e,n=t,i=Ye("upload"),s=Ye(Xl),a=Ye(Xl[0].id),o=Ye(Xl[0]),l=Ye(fd),d=Ye(fd[2]),p=Ye(!0),f=Ye(!1),g=Ye(!1),b=Ye(0),y=Ye(""),$=Ye(null),C=Ye(null),S=Ye(null),x=Ye(null),A=Qs(()=>!!C.value),E=Ye(null),O=Ye(null),D=Ye(null),N=Ye(null),k=Ye(!1),q=Ye("user");let Z=null,ae=null;const X=new Cx;let le=null;const W=Ye(100),J=Ye(1),te=as({scale:1,x:0,y:0,rotation:0});let ue=!1,ce=0,we=0,ke=0,re=0;const $e=Ye(!1),_e=as({name:"自定义规格",widthMm:35,heightMm:45}),xe=Qs(()=>{const oe=ds(_e.widthMm),V=ds(_e.heightMm);return`${oe} × ${V} px`}),mt=Qs(()=>{const oe=o.value,V=oe.widthPx/oe.heightPx;return{width:V<1?`calc(58vh * ${V})`:"78vw",height:V<1?"58vh":`calc(78vw / ${V})`}});ma(()=>{window.addEventListener("paste",L),window.addEventListener("mousemove",qe),window.addEventListener("mouseup",dt),window.addEventListener("touchmove",Je),window.addEventListener("touchend",dt)}),Fd(()=>{window.removeEventListener("paste",L),window.removeEventListener("mousemove",qe),window.removeEventListener("mouseup",dt),window.removeEventListener("touchmove",Je),window.removeEventListener("touchend",dt),Jt()});async function yt(oe){i.value=oe,oe==="camera"?await pr():(Jt(),await Oi(),Tt())}function it(){if(a.value==="custom"){$e.value=!0;return}const oe=s.value.find(V=>V.id===a.value);oe&&(o.value=oe,se())}function Et(){const oe=kx(_e.name,_e.widthMm,_e.heightMm);s.value.push(oe),a.value=oe.id,o.value=oe,$e.value=!1,me()}function Ve(){$.value?.click()}function ot(oe){const V=oe.target;V.files&&V.files[0]&&H(V.files[0]),V.value=""}function M(oe){f.value=!1,oe.dataTransfer?.files&&oe.dataTransfer.files[0]&&H(oe.dataTransfer.files[0])}function L(oe){if(!oe.clipboardData)return;const V=oe.clipboardData.items;for(let he=0;he<V.length;he++)if(V[he].type.startsWith("image/")){const lt=V[he].getAsFile();if(lt){H(lt);break}}}async function H(oe){S.value=oe,x.value=null,pt=null;const V=URL.createObjectURL(oe),he=new Image;he.onload=async()=>{C.value=he,i.value="upload",me(),await Oi(),Tt(),d.value.value!=="original"&&await Y()},he.src=V}async function Y(oe=!1){if(!(!C.value||g.value)&&!(!oe&&x.value)){g.value=!0,b.value=10,y.value="正在加载 AI 抠图引擎...";try{const V=document.createElement("canvas");V.width=C.value.naturalWidth,V.height=C.value.naturalHeight;const he=V.getContext("2d");if(!he)throw new Error("无法创建离屏图层");he.drawImage(C.value,0,0);const lt=await Y$.segmentHighDefinition(V,(Yt,fn)=>{y.value=Yt,b.value=fn}),Ht=URL.createObjectURL(lt),Pt=new Image;await new Promise((Yt,fn)=>{Pt.onload=Yt,Pt.onerror=fn,Pt.src=Ht}),pt=Pt,x.value=lt,n("show-toast","本地 AI 发丝级抠图已完成")}catch(V){console.error("抠图失败:",V),n("show-toast","抠图提示: 请保持原图或重新调整")}finally{g.value=!1,await se(),await Oi(),Tt()}}}async function ne(oe){d.value=oe,oe.value!=="original"&&!x.value&&C.value?await Y():Tt()}async function se(){if(!C.value)return;const oe=x.value||S.value;if(oe)try{const V=await Z$(C.value,oe,o.value);te.scale=V.scale,te.x=V.x,te.y=V.y,te.rotation=0,J.value>0&&(W.value=Math.round(V.scale/J.value*100)),await Oi(),Tt(),V.success&&n("show-toast","已按国家证件照标准自动对齐（头顶留白约8.5%，人脸垂直居中）")}catch(V){console.warn("自动对齐计算失败，恢复默认居中:",V),me()}}function me(){if(!C.value)return;const oe=o.value,V=C.value.naturalWidth,he=C.value.naturalHeight,lt=oe.widthPx/V,Ht=oe.heightPx/he;J.value=Math.max(lt,Ht),W.value=100,te.scale=J.value*1.05,te.rotation=0,te.x=(oe.widthPx-V*te.scale)/2,te.y=(oe.heightPx-he*te.scale)*.45,Tt()}function fe(oe){if(!C.value)return;o.value;const V=C.value.naturalWidth,he=C.value.naturalHeight,lt=te.scale,Ht=J.value*(oe/100);if(Ht<=0)return;const Pt=te.x+V*lt/2,Yt=te.y+he*lt/2;te.scale=Ht,te.x=Pt-V*Ht/2,te.y=Yt-he*Ht/2,Tt()}function ge(){fe(W.value)}function ie(){const oe=Math.min(300,W.value+5);W.value=oe,fe(oe)}function Ee(){const oe=Math.max(15,W.value-5);W.value=oe,fe(oe)}function be(oe){const V=oe.deltaY<0?5:-5,he=Math.min(300,Math.max(15,W.value+V));W.value=he,fe(he)}function Oe(oe){te.rotation=(te.rotation+oe)%360,Tt()}function Me(oe){ue=!0,ce=oe.clientX,we=oe.clientY,ke=te.x,re=te.y}function qe(oe){if(!ue)return;const V=oe.clientX-ce,he=oe.clientY-we;te.x=ke+V,te.y=re+he,Tt()}function je(oe){oe.touches.length===1&&(ue=!0,ce=oe.touches[0].clientX,we=oe.touches[0].clientY,ke=te.x,re=te.y)}function Je(oe){if(!ue||oe.touches.length!==1)return;const V=oe.touches[0].clientX-ce,he=oe.touches[0].clientY-we;te.x=ke+V,te.y=re+he,Tt()}function dt(){ue=!1}let pt=null;async function Tt(){if(!E.value||!C.value)return;const oe=E.value,V=o.value;oe.width=V.widthPx,oe.height=V.heightPx;const he=oe.getContext("2d");if(!he)return;const lt=oe.width,Ht=oe.height;if(he.clearRect(0,0,lt,Ht),d.value.value==="original"){It(he,C.value);return}if(d.value.value!=="transparent"){if(d.value.isGradient&&d.value.gradientStops){const Pt=he.createLinearGradient(0,0,0,Ht);Pt.addColorStop(0,d.value.gradientStops[0]),Pt.addColorStop(1,d.value.gradientStops[1]),he.fillStyle=Pt}else he.fillStyle=d.value.value;he.fillRect(0,0,lt,Ht)}if(pt)It(he,pt);else if(x.value){const Pt=URL.createObjectURL(x.value),Yt=new Image;Yt.onload=()=>{pt=Yt,It(he,Yt)},Yt.src=Pt}else It(he,C.value)}function It(oe,V){oe.save();const he=te.x+V.naturalWidth*te.scale/2,lt=te.y+V.naturalHeight*te.scale/2;oe.translate(he,lt),oe.rotate(te.rotation*Math.PI/180),oe.drawImage(V,-(V.naturalWidth*te.scale)/2,-(V.naturalHeight*te.scale)/2,V.naturalWidth*te.scale,V.naturalHeight*te.scale),oe.restore()}async function pr(){Jt();try{const oe=await navigator.mediaDevices.getUserMedia({video:{facingMode:q.value,width:{ideal:1920},height:{ideal:1080}},audio:!1});Z=oe,D.value&&(D.value.srcObject=oe,await D.value.play(),k.value=!0,await X.init(),X.setOnResult(V=>{le=V}),Vt())}catch(oe){console.warn("相机权限获取失败:",oe),k.value=!1}}function Jt(){Z&&(Z.getTracks().forEach(oe=>oe.stop()),Z=null),ae&&cancelAnimationFrame(ae),k.value=!1}async function Bt(){q.value=q.value==="user"?"environment":"user",await pr()}function Vt(){const oe=()=>{if(D.value&&N.value&&D.value.readyState>=2){const V=N.value,he=D.value;if((V.width!==o.value.widthPx||V.height!==o.value.heightPx)&&(V.width=o.value.widthPx,V.height=o.value.heightPx),X.sendFrame(he),le&&d.value.value!=="original")X.renderComposite(V,he,le,d.value,q.value==="user");else{const lt=V.getContext("2d");lt&&(lt.save(),q.value==="user"&&(lt.translate(V.width,0),lt.scale(-1,1)),lt.drawImage(he,0,0,V.width,V.height),lt.restore())}}ae=requestAnimationFrame(oe)};ae=requestAnimationFrame(oe)}async function qr(){if(!D.value||g.value)return;const oe=D.value,V=document.createElement("canvas");V.width=oe.videoWidth||o.value.widthPx,V.height=oe.videoHeight||o.value.heightPx;const he=V.getContext("2d");he&&(q.value==="user"&&(he.translate(V.width,0),he.scale(-1,1)),he.drawImage(oe,0,0,V.width,V.height),V.toBlob(async lt=>{lt&&(Jt(),await H(lt))},"image/jpeg",.98))}async function Hr(){if(!E.value)throw new Error("画布未就绪");return new Promise((oe,V)=>{E.value.toBlob(he=>{he?oe({composedBlob:he,previewUrl:E.value.toDataURL("image/jpeg",.9)}):V(new Error("导出失败"))},"image/jpeg",.98)})}async function Jn(){if(!(!S.value||!C.value))try{const{composedBlob:oe,previewUrl:V}=await Hr(),he={id:`tray_${Date.now()}_${Math.random().toString(36).substring(2,6)}`,memberName:`成员 ${r.trayCount+1}`,originalBlob:S.value,cutoutBlob:x.value||S.value,previewUrl:V,spec:{...o.value},printCount:4,selectedBg:{...d.value},createdAt:Date.now()};n("photo-added-to-tray",he),n("show-toast",`已将 ${o.value.name} 证件照加入待印托盘`)}catch(oe){console.error("加入托盘失败:",oe)}}async function Mr(){if(!(!S.value||!C.value))try{const{composedBlob:oe,previewUrl:V}=await Hr(),he={id:`export_${Date.now()}`,memberName:"证件照",originalBlob:S.value,cutoutBlob:x.value||S.value,previewUrl:V,spec:{...o.value},printCount:1,selectedBg:{...d.value},createdAt:Date.now()};n("open-single-export",he)}catch(oe){console.error("打开单张导出失败:",oe)}}return(oe,V)=>(Ke(),et("div",Q$,[U("header",J$,[U("div",e3,[U("div",t3,[U("button",{onClick:V[0]||(V[0]=he=>yt("upload")),class:sn(["flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition",i.value==="upload"?"bg-blue-600 text-white shadow":"text-slate-400 hover:text-slate-200"])},[Le(ut(wx),{class:"w-3.5 h-3.5"}),V[16]||(V[16]=U("span",null,"上传/拖入照片",-1))],2),U("button",{onClick:V[1]||(V[1]=he=>yt("camera")),class:sn(["flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition",i.value==="camera"?"bg-blue-600 text-white shadow":"text-slate-400 hover:text-slate-200"])},[Le(ut(dx),{class:"w-3.5 h-3.5"}),V[17]||(V[17]=U("span",null,"自拍拍摄",-1))],2)]),V[18]||(V[18]=U("div",{class:"hidden sm:flex items-center space-x-1 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2.5 py-1 rounded-full"},[U("span",{class:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),U("span",null,"100% 离线端侧处理 · 绝不上传服务器")],-1))]),U("div",r3,[U("div",n3,[V[20]||(V[20]=U("span",{class:"text-xs text-slate-400"},"规格:",-1)),Cr(U("select",{"onUpdate:modelValue":V[2]||(V[2]=he=>a.value=he),onChange:it,class:"bg-transparent text-xs font-medium text-slate-100 focus:outline-none cursor-pointer"},[(Ke(!0),et(Xt,null,ls(s.value,he=>(Ke(),et("option",{key:he.id,value:he.id,class:"bg-slate-800 text-slate-100"},Qe(he.name)+" ("+Qe(he.widthMm)+"×"+Qe(he.heightMm)+"mm) ",9,i3))),128)),V[19]||(V[19]=U("option",{value:"custom",class:"bg-slate-800 text-slate-100"},"⚙️ 自定义尺寸...",-1))],544),[[ty,a.value]])]),U("button",{onClick:V[3]||(V[3]=he=>oe.$emit("open-tray")),class:"relative flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"},[Le(ut(ny),{class:"w-4 h-4 text-blue-400"}),V[21]||(V[21]=U("span",{class:"text-xs font-medium"},"托盘",-1)),e.trayCount>0?(Ke(),et("span",s3,Qe(e.trayCount),1)):Nt("",!0)]),U("button",{onClick:V[4]||(V[4]=he=>oe.$emit("open-packing")),disabled:e.trayCount===0,class:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-semibold shadow transition"},[Le(ut(Do),{class:"w-3.5 h-3.5"}),V[22]||(V[22]=U("span",{class:"hidden sm:inline"},"混排拼版",-1))],8,a3)])]),U("main",o3,[U("section",l3,[i.value==="upload"&&!A.value?(Ke(),et("div",{key:0,class:"w-full max-w-md p-6 flex flex-col items-center justify-center text-center space-y-4 border-2 border-dashed border-slate-700 hover:border-blue-500 rounded-3xl bg-slate-900/40 transition cursor-pointer",onDragover:V[5]||(V[5]=no(he=>f.value=!0,["prevent"])),onDragleave:V[6]||(V[6]=no(he=>f.value=!1,["prevent"])),onDrop:no(M,["prevent"]),onClick:Ve},[U("input",{ref_key:"fileInputRef",ref:$,type:"file",accept:"image/*",class:"hidden",onChange:ot},null,544),U("div",u3,[Le(ut(vx),{class:"w-8 h-8"})]),V[23]||(V[23]=Wl('<div><h3 class="text-base font-semibold text-slate-200">点击或将照片拖拽至此处</h3><p class="text-xs text-slate-400 mt-1">支持 JPG / PNG / WebP 格式，也可直接使用 <kbd class="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">Ctrl + V</kbd> 粘贴</p></div><div class="text-[11px] text-slate-500 bg-slate-800/60 px-4 py-2 rounded-xl border border-slate-700/60 space-y-0.5 text-left w-full"><p class="font-medium text-slate-400">💡 拍摄或选图建议：</p><p>1. 建议正面免冠，双肩自然平齐</p><p>2. 光线明亮均匀，头发不遮挡眉毛与双耳</p><p>3. 任何背景均可，系统会自动进行发丝级抠图换底</p></div>',2))],32)):i.value==="camera"?(Ke(),et("div",d3,[U("video",{ref_key:"cameraVideoRef",ref:D,playsinline:"",autoplay:"",muted:"",class:"hidden"},null,512),U("div",{class:"relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/80 transition-all duration-300",style:is({width:mt.value.width,height:mt.value.height,aspectRatio:`${o.value.widthPx} / ${o.value.heightPx}`})},[U("canvas",{ref_key:"cameraCanvasRef",ref:N,class:"w-full h-full object-cover"},null,512),p.value?(Ke(),et("svg",c3,[...V[24]||(V[24]=[Wl('<line x1="15" y1="12" x2="85" y2="12" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8"></line><text x="50" y="9" font-size="3.5" fill="#93c5fd" text-anchor="middle">头顶留白区</text><ellipse cx="50" cy="46" rx="24" ry="30" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.85"></ellipse><line x1="30" y1="44" x2="70" y2="44" stroke="#38bdf8" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.6"></line><path d="M 12 128 Q 30 92, 50 94 Q 70 92, 88 128" fill="none" stroke="#60a5fa" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8"></path><text x="50" y="100" font-size="3.5" fill="#93c5fd" text-anchor="middle">双肩对齐基准</text>',6)])])):Nt("",!0)],4),U("div",p3,[U("button",{onClick:Bt,class:"p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition",title:"翻转镜头"},[Le(ut(hx),{class:"w-5 h-5"})]),U("button",{onClick:qr,disabled:g.value,class:"p-2 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/30 active:scale-90 transition disabled:opacity-50"},[...V[25]||(V[25]=[U("div",{class:"w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-transparent"},[U("div",{class:"w-10 h-10 rounded-full bg-white"})],-1)])],8,f3)])])):(Ke(),et("div",{key:2,class:"relative flex flex-col items-center justify-center w-full h-full p-2",onWheel:no(be,["prevent"])},[U("div",{ref_key:"viewportContainerRef",ref:O,class:"relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/80 cursor-grab active:cursor-grabbing transition-all duration-200",style:is({width:mt.value.width,height:mt.value.height,aspectRatio:`${o.value.widthPx} / ${o.value.heightPx}`}),onMousedown:Me,onTouchstart:je},[U("canvas",{ref_key:"editorCanvasRef",ref:E,class:"w-full h-full block"},null,512),p.value?(Ke(),et("svg",h3,[...V[26]||(V[26]=[Wl('<line x1="15" y1="12" x2="85" y2="12" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8"></line><text x="50" y="9" font-size="3.5" fill="#93c5fd" text-anchor="middle">头顶留白线</text><ellipse cx="50" cy="46" rx="24" ry="30" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.85"></ellipse><line x1="30" y1="44" x2="70" y2="44" stroke="#38bdf8" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.6"></line><path d="M 12 128 Q 30 92, 50 94 Q 70 92, 88 128" fill="none" stroke="#60a5fa" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8"></path><text x="50" y="100" font-size="3.5" fill="#93c5fd" text-anchor="middle">双肩对准线</text><line x1="50" y1="5" x2="50" y2="135" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="2,4" opacity="0.4"></line>',7)])])):Nt("",!0)],36),U("div",m3,[V[27]||(V[27]=U("span",null,"🖱️ 拖拽平移画面",-1)),V[28]||(V[28]=U("span",null,"·",-1)),U("span",null,"🔍 缩放大小: "+Qe(W.value)+"%",1),U("button",{onClick:me,class:"text-blue-400 hover:text-blue-300 underline text-[11px] ml-1"}," 居中复位 ")])],32)),g.value?(Ke(),et("div",g3,[Le(ut(pd),{class:"w-10 h-10 text-blue-500 animate-spin mb-3"}),U("h4",y3,Qe(y.value||"AI 正在进行发丝级抠图..."),1),V[29]||(V[29]=U("p",{class:"text-xs text-slate-400 mt-1"},"本地端侧加速中，完全无需联网",-1)),U("div",b3,[U("div",{class:"bg-blue-500 h-full transition-all duration-200",style:is({width:`${b.value}%`})},null,4)])])):Nt("",!0)]),U("aside",v3,[U("div",w3,[U("div",_3,[U("span",x3,Qe(o.value.name),1),V[30]||(V[30]=U("span",{class:"text-[11px] text-blue-400 font-mono"},"300 DPI",-1))]),U("div",$3,[U("span",null,"物理尺寸: "+Qe(o.value.widthMm)+" × "+Qe(o.value.heightMm)+" mm",1),U("span",null,"分辨率: "+Qe(o.value.widthPx)+" × "+Qe(o.value.heightPx)+" px",1)]),U("p",S3,Qe(o.value.description),1)]),U("div",T3,[U("div",k3,[U("div",C3,[Le(ut(yx),{class:"w-4 h-4 text-blue-400"}),V[31]||(V[31]=U("span",{class:"text-xs font-semibold text-slate-200"},"AI 智能抠图与人物换底",-1))]),U("div",E3,[x.value?(Ke(),et("span",I3,[Le(ut(ef),{class:"w-3 h-3"}),V[32]||(V[32]=U("span",null,"人像已分离",-1))])):g.value?(Ke(),et("span",A3,[Le(ut(pd),{class:"w-3 h-3 animate-spin"}),V[33]||(V[33]=U("span",null,"AI 计算中...",-1))])):Nt("",!0),A.value&&!g.value?(Ke(),et("button",{key:2,onClick:V[7]||(V[7]=he=>Y(!0)),class:"text-[10px] text-blue-400 hover:text-blue-300 underline",title:"重新运行本地 AI 发丝级抠图算法"},Qe(x.value?"重新抠图":"一键AI抠图"),1)):Nt("",!0)])]),U("div",O3,[(Ke(!0),et(Xt,null,ls(l.value,he=>(Ke(),et("button",{key:he.id,onClick:lt=>ne(he),class:sn(["flex flex-col items-center justify-center p-1.5 rounded-xl border transition-all text-[11px]",d.value.id===he.id?"border-blue-500 bg-blue-950/50 text-blue-300 font-semibold shadow":"border-slate-800 hover:border-slate-700 bg-slate-800/60 text-slate-400"])},[U("span",{class:sn(["w-6 h-6 rounded-full mb-1 flex items-center justify-center shadow-sm",he.previewClass])},[d.value.id===he.id?(Ke(),Zs(ut(ef),{key:0,class:sn(["w-3.5 h-3.5",he.id==="bg_white"?"text-slate-900":"text-white"])},null,8,["class"])):Nt("",!0)],2),U("span",M3,Qe(he.name),1)],10,z3))),128))])]),A.value?(Ke(),et("button",{key:0,onClick:se,class:"w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20 transition active:scale-95 group border border-blue-400/30"},[U("div",R3,[Le(ut(bx),{class:"w-4 h-4 text-amber-300 animate-pulse"}),V[34]||(V[34]=U("div",null,[U("div",{class:"text-xs font-bold leading-tight flex items-center space-x-1"},[U("span",null,"AI 智能人脸国标对齐")]),U("div",{class:"text-[10px] text-blue-100 opacity-90"},"头顶留白约8.5%，居中黄金比例")],-1))]),V[35]||(V[35]=U("span",{class:"text-[11px] bg-white/20 group-hover:bg-white/30 px-2 py-0.5 rounded-full font-medium transition"},"一键对齐",-1))])):Nt("",!0),A.value?(Ke(),et("div",B3,[U("div",{class:"flex items-center justify-between text-xs"},[V[36]||(V[36]=U("span",{class:"font-medium text-slate-300"},"缩放大小 (可放大/缩小)",-1)),U("button",{onClick:me,class:"text-[11px] text-blue-400 hover:text-blue-300 underline"}," 复位 100% ")]),U("div",P3,[U("button",{onClick:Ee,class:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition",title:"缩小"},[Le(ut($x),{class:"w-3.5 h-3.5"})]),Cr(U("input",{"onUpdate:modelValue":V[8]||(V[8]=he=>W.value=he),type:"range",min:"15",max:"300",step:"1",onInput:ge,class:"flex-1 accent-blue-500 cursor-pointer"},null,544),[[zi,W.value,void 0,{number:!0}]]),U("button",{onClick:ie,class:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition",title:"放大"},[Le(ut(xx),{class:"w-3.5 h-3.5"})]),U("span",D3,Qe(W.value)+"%",1)]),U("div",N3,[U("button",{onClick:V[9]||(V[9]=he=>Oe(-90)),class:"flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"},[Le(ut(mx),{class:"w-3.5 h-3.5"}),V[37]||(V[37]=U("span",null,"左转90°",-1))]),U("button",{onClick:V[10]||(V[10]=he=>Oe(90)),class:"flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"},[Le(ut(gx),{class:"w-3.5 h-3.5"}),V[38]||(V[38]=U("span",null,"右转90°",-1))]),U("label",U3,[Cr(U("input",{type:"checkbox","onUpdate:modelValue":V[11]||(V[11]=he=>p.value=he),class:"rounded bg-slate-800 border-slate-700 text-blue-500"},null,512),[[cd,p.value]]),V[39]||(V[39]=U("span",null,"参考线",-1))])])])):Nt("",!0),U("div",L3,[U("div",F3,[U("button",{onClick:Mr,disabled:!A.value||g.value,class:"w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-semibold border border-slate-700 transition"},[Le(ut(Wd),{class:"w-4 h-4 text-emerald-400"}),V[40]||(V[40]=U("span",null,"导出单张(压缩)",-1))],8,V3),U("button",{onClick:Jn,disabled:!A.value||g.value,class:"w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition"},[Le(ut(px),{class:"w-4 h-4"}),V[41]||(V[41]=U("span",null,"加入待印托盘",-1))],8,j3)]),A.value?(Ke(),et("button",{key:0,onClick:Ve,class:"w-full py-1.5 text-center text-xs text-slate-400 hover:text-slate-200 transition"}," 换一张照片... ")):Nt("",!0)])])]),$e.value?(Ke(),et("div",W3,[U("div",q3,[V[45]||(V[45]=U("h3",{class:"text-sm font-bold text-slate-100"},"自定义证件照尺寸",-1)),U("div",H3,[U("div",null,[V[42]||(V[42]=U("label",{class:"block text-slate-400 mb-1"},"规格名称",-1)),Cr(U("input",{"onUpdate:modelValue":V[12]||(V[12]=he=>_e.name=he),placeholder:"例如：某报名考试特殊尺寸",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[zi,_e.name]])]),U("div",G3,[U("div",null,[V[43]||(V[43]=U("label",{class:"block text-slate-400 mb-1"},"宽度 (mm)",-1)),Cr(U("input",{"onUpdate:modelValue":V[13]||(V[13]=he=>_e.widthMm=he),type:"number",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[zi,_e.widthMm,void 0,{number:!0}]])]),U("div",null,[V[44]||(V[44]=U("label",{class:"block text-slate-400 mb-1"},"高度 (mm)",-1)),Cr(U("input",{"onUpdate:modelValue":V[14]||(V[14]=he=>_e.heightMm=he),type:"number",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[zi,_e.heightMm,void 0,{number:!0}]])])]),U("p",K3,"自动以 300 DPI 换算分辨率："+Qe(xe.value),1)]),U("div",X3,[U("button",{onClick:V[15]||(V[15]=he=>$e.value=!1),class:"px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs"},"取消"),U("button",{onClick:Et,class:"px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"},"确认并应用")])])])):Nt("",!0)]))}});function Ws(e,t=300){return new Promise((r,n)=>{const i=new FileReader;i.onload=()=>{try{const s=i.result,a=Z3(s,t);r(new Blob([a],{type:"image/jpeg"}))}catch(s){n(s)}},i.onerror=()=>n(i.error),i.readAsArrayBuffer(e)})}function Z3(e,t=300){const r=new Uint8Array(e);if(r.length<4||r[0]!==255||r[1]!==216)return console.warn("[dpiWriter] 不是有效的 JPEG 文件格式，原样返回"),e;const n=t>>8&255,i=t&255;if(r[2]===255&&r[3]===224&&r[6]===74&&r[7]===70&&r[8]===73&&r[9]===70&&r[10]===0&&r.length>=18){const l=new Uint8Array(r);return l[13]=1,l[14]=n,l[15]=i,l[16]=n,l[17]=i,l.buffer}const s=new Uint8Array([255,224,0,16,74,70,73,70,0,1,2,1,n,i,n,i,0,0]),a=new Uint8Array(r.length+s.length);return a.set(r.subarray(0,2),0),a.set(s,2),a.set(r.subarray(2),2+s.length),a.buffer}class Go{static async generatePrintPages(t,r){const{paper:n,marginMm:i=5,gapMm:s=3,showCutLines:a=!0,showFootnote:o=!0}=r,l=n.widthPx,d=n.heightPx,p=ds(i),f=ds(s),g=[];for(const S of t){if(S.printCount<=0)continue;const x=await this.renderItemToCanvas(S);for(let A=0;A<S.printCount;A++)g.push({item:S,w:S.spec.widthPx,h:S.spec.heightPx,canvas:x})}if(g.length===0)return[];const b=[];let y=0;const $=l-p*2,C=d-p*2;for(;y<g.length;){const S=b.length+1,x=document.createElement("canvas");x.width=l,x.height=d;const A=x.getContext("2d");if(!A)break;A.fillStyle="#FFFFFF",A.fillRect(0,0,l,d);let E=p,O=p,D=0,N=0;for(;y<g.length;){const k=g[y],q=k.w,Z=k.h;if(E+q>l-p&&(E=p,O+=D+f,D=0),O+Z>d-p)break;A.drawImage(k.canvas,E,O,q,Z),a&&this.drawCropCrossMarks(A,E,O,q,Z,r.cutLineOffsetPx||4,r.cutLineLengthPx||12),o&&this.drawFootnote(A,k.item,E,O,q,Z),D=Math.max(D,Z),E+=q+f,y++,N++}if(N===0&&y<g.length){const k=g[y];A.drawImage(k.canvas,p,p,Math.min(k.w,$),Math.min(k.h,C)),y++,N++}b.push({pageIndex:S,canvas:x,placedCount:N})}return b}static async renderItemToCanvas(t){const r=document.createElement("canvas");r.width=t.spec.widthPx,r.height=t.spec.heightPx;const n=r.getContext("2d");if(!n)return r;const i=r.width,s=r.height;if(t.selectedBg.value==="original"){const b=await this.blobToImage(t.originalBlob),y=b.width/b.height,$=i/s;let C=i,S=s,x=0,A=0;return y>$?(S=s,C=s*y,x=(i-C)/2):(C=i,S=i/y,A=(s-S)/2),n.drawImage(b,x,A,C,S),r}if(t.selectedBg.value!=="transparent"){if(t.selectedBg.isGradient&&t.selectedBg.gradientStops){const b=n.createLinearGradient(0,0,0,s);b.addColorStop(0,t.selectedBg.gradientStops[0]),b.addColorStop(1,t.selectedBg.gradientStops[1]),n.fillStyle=b}else n.fillStyle=t.selectedBg.value||"#FFFFFF";n.fillRect(0,0,i,s)}else n.clearRect(0,0,i,s);const a=await this.blobToImage(t.cutoutBlob),o=a.width/a.height,l=i/s;let d=i,p=s,f=0,g=0;return o>l?(p=s,d=s*o,f=(i-d)/2):(d=i,p=i/o,g=(s-p)/2),n.drawImage(a,f,g,d,p),r}static drawCropCrossMarks(t,r,n,i,s,a=4,o=12){t.save(),t.strokeStyle="#CCCCCC",t.lineWidth=1;const l=[{cx:r,cy:n,dx:-1,dy:-1},{cx:r+i,cy:n,dx:1,dy:-1},{cx:r,cy:n+s,dx:-1,dy:1},{cx:r+i,cy:n+s,dx:1,dy:1}];for(const{cx:d,cy:p,dx:f,dy:g}of l)t.beginPath(),t.moveTo(d+f*a,p),t.lineTo(d+f*(a+o),p),t.stroke(),t.beginPath(),t.moveTo(d,p+g*a),t.lineTo(d,p+g*(a+o)),t.stroke();t.restore()}static drawFootnote(t,r,n,i,s,a){t.save(),t.fillStyle="#9CA3AF",t.font="10px sans-serif",t.textAlign="center",t.textBaseline="top";const o=`${r.memberName||"成员"} · ${r.spec.name}`;t.fillText(o,n+s/2,i+a+6),t.restore()}static async exportPageAs300DpiBlob(t){return new Promise((r,n)=>{t.toBlob(async i=>{if(!i){n(new Error("页面 Canvas 导出失败"));return}try{const s=await Ws(i,300);r(s)}catch(s){n(s)}},"image/jpeg",.98)})}static blobToImage(t){return new Promise((r,n)=>{const i=URL.createObjectURL(t),s=new Image;s.onload=()=>{URL.revokeObjectURL(i),r(s)},s.onerror=()=>{URL.revokeObjectURL(i),n(new Error("图片加载失败"))},s.src=i})}}const Q3={class:"fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md flex flex-col justify-end sm:justify-center items-center sm:p-4"},J3={class:"w-full max-w-2xl bg-slate-900 border-t sm:border border-slate-800 rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"},eS={class:"flex items-center justify-between px-5 py-4 border-b border-slate-800"},tS={class:"flex items-center space-x-2"},rS={class:"text-base font-bold text-slate-100"},nS={class:"flex items-center space-x-2"},iS={class:"flex-1 overflow-y-auto p-4 space-y-3"},sS={key:0,class:"py-12 flex flex-col items-center justify-center text-slate-500 space-y-2"},aS={class:"relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-950 border border-slate-700"},oS=["src"],lS={class:"absolute bottom-0 inset-x-0 bg-black/60 text-[9px] text-center text-slate-300 py-0.5"},uS={class:"flex-1 min-w-0 mx-3 space-y-1.5"},dS={class:"flex items-center space-x-2"},cS=["onUpdate:modelValue"],pS={class:"text-xs text-slate-400"},fS={class:"flex items-center space-x-1.5 pt-0.5"},hS=["onClick","title"],mS={class:"flex flex-col items-end space-y-2"},gS={class:"flex items-center space-x-1 bg-slate-900 rounded-lg p-1 border border-slate-700"},yS=["onClick"],bS={class:"w-7 text-center text-xs font-semibold text-slate-200"},vS=["onClick"],wS={class:"flex items-center space-x-2 text-xs"},_S=["onClick"],xS=["onClick"],$S={class:"p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between"},SS={class:"text-sm font-bold text-blue-400"},TS={class:"flex items-center space-x-3"},kS=["disabled"],CS=ha({__name:"PhotoTray",props:{items:{}},emits:["close","remove-item","clear-all","export-single","open-packing","update-item"],setup(e,{emit:t}){const r=e,n=t,i=fd,s=Qs(()=>r.items.reduce((d,p)=>d+p.printCount,0));function a(d){d.printCount++,n("update-item",d)}function o(d){d.printCount>1&&(d.printCount--,n("update-item",d))}async function l(d,p){d.selectedBg=p;const f=await Go.renderItemToCanvas(d);d.previewUrl=f.toDataURL("image/jpeg",.9),n("update-item",d)}return(d,p)=>(Ke(),et("div",Q3,[U("div",J3,[U("div",eS,[U("div",tS,[Le(ut(ny),{class:"w-5 h-5 text-blue-400"}),U("h2",rS,"待印照片托盘 ("+Qe(e.items.length)+")",1)]),U("div",nS,[e.items.length>0?(Ke(),et("button",{key:0,onClick:p[0]||(p[0]=f=>d.$emit("clear-all")),class:"text-xs text-rose-400 hover:text-rose-300 px-2 py-1 transition"}," 清空托盘 ")):Nt("",!0),U("button",{onClick:p[1]||(p[1]=f=>d.$emit("close")),class:"p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"},[Le(ut(qd),{class:"w-5 h-5"})])])]),U("div",iS,[e.items.length===0?(Ke(),et("div",sS,[Le(ut(_x),{class:"w-10 h-10 stroke-[1.5]"}),p[4]||(p[4]=U("p",{class:"text-sm"},"托盘暂无照片，请先拍摄或上传照片",-1))])):Nt("",!0),(Ke(!0),et(Xt,null,ls(e.items,(f,g)=>(Ke(),et("div",{key:f.id,class:"flex items-center justify-between bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 hover:border-slate-600 transition"},[U("div",aS,[U("img",{src:f.previewUrl,class:"w-full h-full object-cover"},null,8,oS),U("span",lS,Qe(f.spec.widthMm)+"×"+Qe(f.spec.heightMm),1)]),U("div",uS,[U("div",dS,[Cr(U("input",{"onUpdate:modelValue":b=>f.memberName=b,placeholder:"成员姓名",class:"bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-100 w-24 focus:ring-1 focus:ring-blue-500 focus:outline-none"},null,8,cS),[[zi,f.memberName]]),U("span",pS,Qe(f.spec.name),1)]),U("div",fS,[(Ke(!0),et(Xt,null,ls(ut(i),b=>(Ke(),et("button",{key:b.id,onClick:y=>l(f,b),class:sn(["w-4 h-4 rounded-full border border-slate-600 transition-transform",[b.previewClass,f.selectedBg.id===b.id?"ring-2 ring-blue-400 scale-110":""]]),title:b.name},null,10,hS))),128))])]),U("div",mS,[U("div",gS,[U("button",{onClick:b=>o(f),class:"w-6 h-6 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"},[Le(ut(cx),{class:"w-3.5 h-3.5"})],8,yS),U("span",bS,Qe(f.printCount),1),U("button",{onClick:b=>a(f),class:"w-6 h-6 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"},[Le(ut(fx),{class:"w-3.5 h-3.5"})],8,vS)]),U("div",wS,[U("button",{onClick:b=>d.$emit("export-single",f),class:"text-blue-400 hover:text-blue-300"}," 单张导出 ",8,_S),U("button",{onClick:b=>d.$emit("remove-item",f.id),class:"text-rose-400 hover:text-rose-300"}," 删除 ",8,xS)])])]))),128))]),U("div",$S,[U("div",null,[p[5]||(p[5]=U("span",{class:"text-xs text-slate-400"},"总待打印张数: ",-1)),U("span",SS,Qe(s.value)+" 张",1)]),U("div",TS,[U("button",{onClick:p[2]||(p[2]=f=>d.$emit("close")),class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"}," 继续拍照 "),U("button",{onClick:p[3]||(p[3]=f=>d.$emit("open-packing")),disabled:s.value===0,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5"},[Le(ut(Do),{class:"w-4 h-4"}),p[6]||(p[6]=U("span",null,"智能混排拼版",-1))],8,kS)])])])]))}});function _o(e,t,r){return new Promise((n,i)=>{e.toBlob(s=>{s?n(s):i(new Error("Canvas 转 Blob 失败"))},t,r)})}async function ES(e,t){const{targetKb:r,toleranceKb:n=3,maxIterations:i=6,minQuality:s=.1,maxQuality:a=.98,autoScaleIfExceeded:o=!0,dpi:l=300}=t;let d=e,p=e.width,f=e.height,g=s,b=a,y=null,$=a,C=1/0,S=0;const x=await _o(d,"image/jpeg",b),A=await Ws(x,l),E=A.size/1024;if(E<=r)return{blob:A,sizeKb:Math.round(E*10)/10,quality:b,iterations:1,width:p,height:f};for(let O=0;O<i;O++){S++;const D=(g+b)/2,N=await _o(d,"image/jpeg",D),k=await Ws(N,l),q=k.size/1024;if(q<=r){if(y=k,$=D,C=q,r-q<=n)break;g=D}else b=D}if(!y&&o){let O=.9;for(let D=0;D<3;D++){const N=document.createElement("canvas");N.width=Math.round(p*O),N.height=Math.round(f*O);const k=N.getContext("2d");if(k){k.imageSmoothingEnabled=!0,k.imageSmoothingQuality="high",k.drawImage(e,0,0,N.width,N.height);const q=await _o(N,"image/jpeg",.5),Z=await Ws(q,l),ae=Z.size/1024;if(ae<=r)return{blob:Z,sizeKb:Math.round(ae*10)/10,quality:.5,iterations:S+D+1,width:N.width,height:N.height}}O-=.15}}if(!y){const O=await _o(d,"image/jpeg",s);y=await Ws(O,l),C=y.size/1024,$=s}return{blob:y,sizeKb:Math.round(C*10)/10,quality:Math.round($*100)/100,iterations:S,width:p,height:f}}const IS={class:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"},AS={class:"bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden flex flex-col shadow-2xl"},OS={class:"flex items-center justify-between px-5 py-3.5 border-b border-slate-800"},zS={class:"p-5 space-y-4 overflow-y-auto max-h-[75vh]"},MS={class:"flex justify-center bg-slate-950 p-4 rounded-xl border border-slate-800 relative"},RS=["src"],BS={class:"grid grid-cols-3 gap-2 text-center text-xs"},PS={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},DS={class:"font-semibold text-slate-200"},NS={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},US={class:"font-semibold text-slate-200"},LS={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},FS={class:"font-semibold text-emerald-400"},VS={class:"bg-slate-800/40 p-3.5 rounded-xl border border-slate-800 space-y-3"},jS={class:"flex items-center justify-between"},WS={class:"text-xs text-blue-400 font-mono font-medium"},qS={class:"flex items-center space-x-2"},HS=["onClick"],GS={key:0,class:"text-[11px] text-slate-400 flex items-center justify-between pt-1"},KS={class:"space-y-2"},XS={class:"flex items-center justify-between text-xs text-slate-400"},YS={class:"p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-end space-x-3"},ZS=["disabled"],QS=ha({__name:"ExportModal",props:{item:{}},emits:["close"],setup(e,{emit:t}){const r=e,n=Ye(50),i=Ye(100),s=Ye(!1),a=Ye(0),o=Ye(null),l=Ye("");let d=null;ma(()=>{f()});function p(b){n.value=b,f()}async function f(){s.value=!0;try{const b=await Go.renderItemToCanvas(r.item);let y=b;if(i.value!==100){const C=document.createElement("canvas");C.width=b.width,C.height=b.height;const S=C.getContext("2d");S&&(S.filter=`brightness(${i.value}%)`,S.drawImage(b,0,0),y=C)}const $=await ES(y,{targetKb:n.value,toleranceKb:2,maxIterations:6,dpi:300});o.value=$,a.value=$.sizeKb,d=$.blob,l.value&&URL.revokeObjectURL(l.value),l.value=URL.createObjectURL($.blob)}catch(b){console.error("二分压缩错误:",b)}finally{s.value=!1}}function g(){if(!d)return;const b=URL.createObjectURL(d),y=document.createElement("a");y.href=b;const $=`${r.item.memberName||"证件照"}_${r.item.spec.name}_300DPI_${a.value}KB.jpg`;y.download=$,document.body.appendChild(y),y.click(),document.body.removeChild(y),URL.revokeObjectURL(b)}return(b,y)=>(Ke(),et("div",IS,[U("div",AS,[U("div",OS,[y[4]||(y[4]=U("h3",{class:"text-sm font-bold text-slate-100 flex items-center space-x-2"},[U("span",null,"单张证件照导出与合规压缩")],-1)),U("button",{onClick:y[0]||(y[0]=$=>b.$emit("close")),class:"text-slate-400 hover:text-white p-1"},[Le(ut(qd),{class:"w-5 h-5"})])]),U("div",zS,[U("div",MS,[U("img",{src:l.value||e.item.previewUrl,class:"max-h-56 object-contain rounded shadow-lg border border-slate-700"},null,8,RS),y[5]||(y[5]=U("div",{class:"absolute bottom-6 right-6 bg-slate-900/90 border border-slate-700 px-2 py-1 rounded text-[11px] text-blue-400 font-mono"}," 300 DPI 物理打印标记已注入 ",-1))]),U("div",BS,[U("div",PS,[y[6]||(y[6]=U("span",{class:"block text-slate-400 text-[10px]"},"物理尺寸",-1)),U("span",DS,Qe(e.item.spec.widthMm)+" × "+Qe(e.item.spec.heightMm)+" mm",1)]),U("div",NS,[y[7]||(y[7]=U("span",{class:"block text-slate-400 text-[10px]"},"像素分辨率",-1)),U("span",US,Qe(e.item.spec.widthPx)+" × "+Qe(e.item.spec.heightPx)+" px",1)]),U("div",LS,[y[8]||(y[8]=U("span",{class:"block text-slate-400 text-[10px]"},"实际体积",-1)),U("span",FS,Qe(a.value?`${a.value} KB`:"计算中..."),1)])]),U("div",VS,[U("div",jS,[y[9]||(y[9]=U("label",{class:"text-xs font-semibold text-slate-300"},"目标文件大小限制 (KB)",-1)),U("span",WS,"≤ "+Qe(n.value)+" KB",1)]),U("div",qS,[(Ke(),et(Xt,null,ls([20,30,50,100,200],$=>U("button",{key:$,onClick:C=>p($),class:sn(["px-2.5 py-1 rounded-lg text-xs font-medium transition",n.value===$?"bg-blue-600 text-white":"bg-slate-800 text-slate-400 hover:text-slate-200"])},Qe($)+"K ",11,HS)),64))]),Cr(U("input",{"onUpdate:modelValue":y[1]||(y[1]=$=>n.value=$),type:"range",min:"10",max:"300",step:"5",onChange:f,class:"w-full accent-blue-500 cursor-pointer"},null,544),[[zi,n.value,void 0,{number:!0}]]),o.value?(Ke(),et("div",GS,[U("span",null,"二分逼近质量: "+Qe(Math.round(o.value.quality*100))+"%",1),U("span",null,"迭代收敛: "+Qe(o.value.iterations)+" 次",1)])):Nt("",!0)]),U("div",KS,[U("div",XS,[y[10]||(y[10]=U("span",null,"画面亮度",-1)),U("span",null,Qe(i.value)+"%",1)]),Cr(U("input",{"onUpdate:modelValue":y[2]||(y[2]=$=>i.value=$),type:"range",min:"80",max:"120",onChange:f,class:"w-full accent-blue-500 cursor-pointer"},null,544),[[zi,i.value,void 0,{number:!0}]])])]),U("div",YS,[U("button",{onClick:y[3]||(y[3]=$=>b.$emit("close")),class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"}," 取消 "),U("button",{onClick:g,disabled:s.value,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5 disabled:opacity-50"},[Le(ut(Wd),{class:"w-4 h-4"}),U("span",null,Qe(s.value?"压缩计算中...":"下载无损 300 DPI 照"),1)],8,ZS)])])]))}}),JS={class:"fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 overflow-hidden"},eT={class:"w-full flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3 shadow-lg"},tT={class:"flex items-center space-x-3"},rT={class:"flex items-center space-x-3"},nT=["value"],iT={class:"flex-1 w-full my-3 flex items-center justify-center overflow-auto p-2"},sT={key:0,class:"flex flex-col items-center justify-center text-slate-400 space-y-2"},aT={key:1,class:"relative flex flex-col items-center max-h-full max-w-full"},oT={class:"bg-white rounded-lg shadow-2xl p-1 border-2 border-slate-700 overflow-hidden flex items-center justify-center"},lT={key:0,class:"flex items-center space-x-3 mt-3 bg-slate-900/90 px-3 py-1.5 rounded-full border border-slate-800"},uT=["disabled"],dT={class:"text-xs font-medium text-slate-400"},cT=["disabled"],pT={class:"w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"},fT={class:"flex items-center space-x-4 text-xs text-slate-300"},hT={class:"flex items-center space-x-1.5 cursor-pointer"},mT={class:"flex items-center space-x-1.5 cursor-pointer"},gT={class:"flex items-center space-x-3"},yT=ha({__name:"PrintLayoutModal",props:{items:{}},emits:["close"],setup(e,{emit:t}){const r=e,n=Ye(so),i=Ye(so[0].id),s=as({paper:so[0],marginMm:4,gapMm:3,showCutLines:!0,showFootnote:!0,cutLineOffsetPx:4,cutLineLengthPx:14}),a=Ye(!1),o=Ye([]),l=Ye(0),d=Ye(null);ma(()=>{p()});async function p(){const C=n.value.find(S=>S.id===i.value)||so[0];s.paper=C,a.value=!0;try{o.value=await Go.generatePrintPages(r.items,s),l.value=0,await Oi(),f()}catch(S){console.error("混排拼版错误:",S)}finally{a.value=!1}}function f(){if(o.value.length===0||!d.value)return;const C=o.value[l.value],S=d.value;S.width=C.canvas.width,S.height=C.canvas.height;const x=S.getContext("2d");x&&x.drawImage(C.canvas,0,0)}function g(){l.value>0&&(l.value--,f())}function b(){l.value<o.value.length-1&&(l.value++,f())}async function y(){if(o.value.length===0)return;const C=o.value[l.value],S=await Go.exportPageAs300DpiBlob(C.canvas),x=URL.createObjectURL(S),A=document.createElement("a");A.href=x,A.download=`证件照混排打印_${s.paper.name}_第${l.value+1}页_300DPI.jpg`,document.body.appendChild(A),A.click(),document.body.removeChild(A),URL.revokeObjectURL(x)}function $(){if(o.value.length===0)return;const S=o.value[l.value].canvas.toDataURL("image/jpeg",1),x=window.open("","_blank");if(!x){alert("请允许弹出窗口以调用原生打印");return}x.document.write(`
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
  `),x.document.close()}return(C,S)=>(Ke(),et("div",JS,[U("header",eT,[U("div",tT,[Le(ut(Do),{class:"w-5 h-5 text-blue-400"}),S[4]||(S[4]=U("h2",{class:"text-sm sm:text-base font-bold text-slate-100"},"智能多人混排拼版工作台",-1))]),U("div",rT,[Cr(U("select",{"onUpdate:modelValue":S[0]||(S[0]=x=>i.value=x),onChange:p,class:"bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"},[(Ke(!0),et(Xt,null,ls(n.value,x=>(Ke(),et("option",{key:x.id,value:x.id},Qe(x.name),9,nT))),128))],544),[[ty,i.value]]),U("button",{onClick:S[1]||(S[1]=x=>C.$emit("close")),class:"p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"},[Le(ut(qd),{class:"w-5 h-5"})])])]),U("main",iT,[a.value?(Ke(),et("div",sT,[Le(ut(pd),{class:"w-8 h-8 animate-spin text-blue-500"}),S[5]||(S[5]=U("span",{class:"text-xs"},"正在计算最优拼版装箱...",-1))])):o.value.length>0?(Ke(),et("div",aT,[U("div",oT,[U("canvas",{ref_key:"displayCanvasRef",ref:d,class:"max-h-[60vh] max-w-[85vw] object-contain shadow-inner"},null,512)]),o.value.length>1?(Ke(),et("div",lT,[U("button",{onClick:g,disabled:l.value===0,class:"px-2 py-0.5 rounded text-xs text-slate-300 disabled:opacity-30 hover:bg-slate-800"}," 上一页 ",8,uT),U("span",dT," 第 "+Qe(l.value+1)+" / "+Qe(o.value.length)+" 页 ",1),U("button",{onClick:b,disabled:l.value===o.value.length-1,class:"px-2 py-0.5 rounded text-xs text-slate-300 disabled:opacity-30 hover:bg-slate-800"}," 下一页 ",8,cT)])):Nt("",!0)])):Nt("",!0)]),U("footer",pT,[U("div",fT,[U("label",hT,[Cr(U("input",{type:"checkbox","onUpdate:modelValue":S[2]||(S[2]=x=>s.showCutLines=x),onChange:p,class:"rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0"},null,544),[[cd,s.showCutLines]]),S[6]||(S[6]=U("span",null,"浅灰十字裁切线 (#CCCCCC)",-1))]),U("label",mT,[Cr(U("input",{type:"checkbox","onUpdate:modelValue":S[3]||(S[3]=x=>s.showFootnote=x),onChange:p,class:"rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0"},null,544),[[cd,s.showFootnote]]),S[7]||(S[7]=U("span",null,"姓名/规格微型脚标",-1))])]),U("div",gT,[U("button",{onClick:$,class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition flex items-center space-x-1.5"},[Le(ut(Do),{class:"w-4 h-4"}),S[8]||(S[8]=U("span",null,"系统原生打印",-1))]),U("button",{onClick:y,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5"},[Le(ut(Wd),{class:"w-4 h-4"}),U("span",null,"下载 300 DPI 冲印原图 (第 "+Qe(l.value+1)+" 页)",1)])])])]))}}),bT={class:"w-full h-screen bg-slate-950 flex flex-col overflow-hidden"},vT={key:0,class:"fixed top-14 inset-x-0 mx-auto w-fit z-50 bg-emerald-600/90 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-xl backdrop-blur-md flex items-center space-x-2"},wT=ha({__name:"App",setup(e){const t=Ye([]),r=Ye(!1),n=Ye(!1),i=Ye(null),s=Ye("");let a=null;function o(y){s.value=y,a&&clearTimeout(a),a=setTimeout(()=>{s.value=""},2500)}function l(y){t.value.push(y),o(`已成功加入托盘：${y.spec.name} (${y.printCount}张)`)}function d(y){i.value=y}function p(y){t.value=t.value.filter($=>$.id!==y)}function f(){t.value=[]}function g(){r.value=!1,n.value=!0}function b(y){const $=t.value.findIndex(C=>C.id===y.id);$!==-1&&(t.value[$]={...y})}return(y,$)=>(Ke(),et("div",bT,[Le(Y3,{"tray-count":t.value.length,onPhotoAddedToTray:l,onOpenSingleExport:d,onOpenTray:$[0]||($[0]=C=>r.value=!0),onOpenPacking:$[1]||($[1]=C=>n.value=!0),onShowToast:o},null,8,["tray-count"]),r.value?(Ke(),Zs(CS,{key:0,items:t.value,onClose:$[2]||($[2]=C=>r.value=!1),onRemoveItem:p,onClearAll:f,onExportSingle:d,onOpenPacking:g,onUpdateItem:b},null,8,["items"])):Nt("",!0),i.value?(Ke(),Zs(QS,{key:1,item:i.value,onClose:$[3]||($[3]=C=>i.value=null)},null,8,["item"])):Nt("",!0),n.value?(Ke(),Zs(yT,{key:2,items:t.value,onClose:$[4]||($[4]=C=>n.value=!1)},null,8,["items"])):Nt("",!0),Le(O2,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform translate-y-4 opacity-0","enter-to-class":"transform translate-y-0 opacity-100","leave-active-class":"transition duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:v0(()=>[s.value?(Ke(),et("div",vT,[$[5]||($[5]=U("span",null,"✓",-1)),U("span",null,Qe(s.value),1)])):Nt("",!0)]),_:1})]))}}),_T=ax(wT);_T.mount("#app");
