(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Id(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const Tt={},Di=[],ln=()=>{},qg=()=>!1,Xo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Yo=e=>e.startsWith("onUpdate:"),qt=Object.assign,Ad=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},Bw=Object.prototype.hasOwnProperty,pt=(e,t)=>Bw.call(e,t),Re=Array.isArray,Jn=e=>ma(e)==="[object Map]",An=e=>ma(e)==="[object Set]",yf=e=>ma(e)==="[object Date]",He=e=>typeof e=="function",zt=e=>typeof e=="string",un=e=>typeof e=="symbol",gt=e=>e!==null&&typeof e=="object",Hg=e=>(gt(e)||He(e))&&He(e.then)&&He(e.catch),Gg=Object.prototype.toString,ma=e=>Gg.call(e),Pw=e=>ma(e).slice(8,-1),Kg=e=>ma(e)==="[object Object]",Od=e=>zt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xs=Id(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zo=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},Dw=/-\w/g,Hr=Zo(e=>e.replace(Dw,t=>t.slice(1).toUpperCase())),Nw=/\B([A-Z])/g,ii=Zo(e=>e.replace(Nw,"-$1").toLowerCase()),Xg=Zo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Bl=Zo(e=>e?`on${Xg(e)}`:""),an=(e,t)=>!Object.is(e,t),$o=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},Yg=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},Qo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Uw=e=>{const t=zt(e)?Number(e):NaN;return isNaN(t)?e:t};let bf;const Jo=()=>bf||(bf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yn(e){if(Re(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],i=zt(n)?Vw(n):Yn(n);if(i)for(const s in i)t[s]=i[s]}return t}else if(zt(e)||gt(e))return e}const Lw=/;(?![^(]*\))/g,Fw=/:([^]+)/,jw=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Vw(e){const t={};return e.replace(jw,r=>r.startsWith("/*")?"":r).split(Lw).forEach(r=>{if(r){const n=r.split(Fw);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function wr(e){let t="";if(zt(e))t=e;else if(Re(e))for(let r=0;r<e.length;r++){const n=wr(e[r]);n&&(t+=n+" ")}else if(gt(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const Ww="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",qw=Id(Ww);function Zg(e){return!!e||e===""}function Hw(e,t,r){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=On(e[i],t[i],r);return n}function vf(e,t,r){if(e.size!==t.size)return!1;const n=Array.from(t),i=new Uint8Array(n.length);for(const s of e){let a=-1;for(let o=0;o<n.length;o++)if(!i[o]&&On(s,n[o],r)){a=o;break}if(a<0)return!1;i[a]=1}return!0}function Gw(e,t,r){let n=Jn(e),i=Jn(t);if(n||i||(n=An(e),i=An(t),n||i))return n&&i?vf(e,t,r):!1;const s=Object.keys(e).length,a=Object.keys(t).length;if(s!==a)return!1;for(const o in e){const l=e.hasOwnProperty(o),d=t.hasOwnProperty(o);if(l&&!d||!l&&d||!On(e[o],t[o],r))return!1}return String(e)===String(t)}function wf(e,t,r,n){r||(r=[new Map,new Map]);const[i,s]=r;if(i.has(e)||s.has(t))return i.get(e)===t&&s.get(t)===e;i.set(e,t),s.set(t,e);const a=n(e,t,r);return i.delete(e),s.delete(t),a}function On(e,t,r){if(e===t)return!0;let n=yf(e),i=yf(t);return n||i?n&&i?e.getTime()===t.getTime():!1:(n=un(e),i=un(t),n||i?e===t:(n=Re(e),i=Re(t),n||i?n&&i?wf(e,t,r,Hw):!1:(n=gt(e),i=gt(t),n||i?!n||!i?!1:wf(e,t,r,Gw):String(e)===String(t))))}function zd(e,t){return e.findIndex(r=>On(r,t))}const Qg=e=>!!(e&&e.__v_isRef===!0),Ye=e=>zt(e)?e:e==null?"":Re(e)||gt(e)&&(e.toString===Gg||!He(e.toString))?Qg(e)?Ye(e.value):JSON.stringify(e,Jg,2):String(e),Jg=(e,t)=>Qg(t)?Jg(e,t.value):Jn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,i],s)=>(r[Pl(n,s)+" =>"]=i,r),{})}:An(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>Pl(r))}:un(t)?Pl(t):gt(t)&&!Re(t)&&!Kg(t)?String(t):t,Pl=(e,t="")=>{var r;return un(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class Kw{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Zt&&(Zt.active?(this.parent=Zt,this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes){const n=this.scopes.slice();for(t=0,r=n.length;t<r;t++)n[t].pause()}for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes){const i=this.scopes.slice();for(t=0,r=i.length;t<r;t++)i[t].resume()}const n=this.effects.slice();for(t=0,r=n.length;t<r;t++)n[t].resume()}}run(t){if(this._active){const r=Zt;try{return Zt=this,t()}finally{Zt=r}}}on(){++this._on===1&&(this.prevScope=Zt,Zt=this)}off(){if(this._on>0&&--this._on===0){if(Zt===this)Zt=this.prevScope;else{let t=Zt;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(r=0,n=i.length;r<n;r++)i[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Xw(){return Zt}let Ct;const Dl=new WeakSet;class e0{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zt&&(Zt.active?Zt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Dl.has(this)&&(Dl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||r0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_f(this),n0(this);const t=Ct,r=Gr;Ct=this,Gr=!0;try{return this.fn()}finally{i0(this),Ct=t,Gr=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Bd(t);this.deps=this.depsTail=void 0,_f(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Dl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ju(this)&&this.run()}get dirty(){return Ju(this)}}let t0=0,Ys,Zs;function r0(e,t=!1){if(e.flags|=8,t){e.next=Zs,Zs=e;return}e.next=Ys,Ys=e}function Md(){t0++}function Rd(){if(--t0>0)return;if(Zs){let t=Zs;for(Zs=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;Ys;){let t=Ys;for(Ys=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function n0(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function i0(e){let t,r=e.depsTail,n=r;for(;n;){const i=n.prevDep;n.version===-1?(n===r&&(r=i),Bd(n),Yw(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=r}function Ju(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(s0(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function s0(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===na)||(e.globalVersion=na,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ju(e))))return;e.flags|=2;const t=e.dep,r=Ct,n=Gr;Ct=e,Gr=!0;try{n0(e);const i=e.fn(e._value);(t.version===0||an(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Ct=r,Gr=n,i0(e),e.flags&=-3}}function Bd(e,t=!1){const{dep:r,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let s=r.computed.deps;s;s=s.nextDep)Bd(s,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function Yw(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let Gr=!0;const a0=[];function dn(){a0.push(Gr),Gr=!1}function cn(){const e=a0.pop();Gr=e===void 0?!0:e}function _f(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=Ct;Ct=void 0;try{t()}finally{Ct=r}}}let na=0;class Zw{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pd{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ct||!Gr||Ct===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==Ct)r=this.activeLink=new Zw(Ct,this),Ct.deps?(r.prevDep=Ct.depsTail,Ct.depsTail.nextDep=r,Ct.depsTail=r):Ct.deps=Ct.depsTail=r,o0(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=Ct.depsTail,r.nextDep=void 0,Ct.depsTail.nextDep=r,Ct.depsTail=r,Ct.deps===r&&(Ct.deps=n)}return r}trigger(t){this.version++,na++,this.notify(t)}notify(t){Md();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{Rd()}}}function o0(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)o0(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const ed=new WeakMap,Ni=Symbol(""),td=Symbol(""),ia=Symbol("");function er(e,t,r){if(Gr&&Ct){let n=ed.get(e);n||ed.set(e,n=new Map);let i=n.get(r);i||(n.set(r,i=new Pd),i.map=n,i.key=r),i.track()}}function Cn(e,t,r,n,i,s){const a=ed.get(e);if(!a){na++;return}const o=l=>{l&&l.trigger()};if(Md(),t==="clear")a.forEach(o);else{const l=Re(e),d=l&&Od(r);if(l&&r==="length"){const f=Number(n);a.forEach((p,g)=>{(g==="length"||g===ia||!un(g)&&g>=f)&&o(p)})}else switch((r!==void 0||a.has(void 0))&&o(a.get(r)),d&&o(a.get(ia)),t){case"add":l?d&&o(a.get("length")):(o(a.get(Ni)),Jn(e)&&o(a.get(td)));break;case"delete":l||(o(a.get(Ni)),Jn(e)&&o(a.get(td)));break;case"set":Jn(e)&&o(a.get(Ni));break}}Rd()}function ss(e){const t=ft(e);return t===e||(er(t,"iterate",ia),Rr(e))?t:fn(e)?ei(e)?t.map(r=>ti(Br(r))):t.map(ti):t.map(Br)}function el(e){return er(e=ft(e),"iterate",ia),e}function rn(e,t){return fn(e)?ti(ei(e)?Br(t):t):Br(t)}const Qw={__proto__:null,[Symbol.iterator](){return Nl(this,Symbol.iterator,e=>rn(this,e))},concat(...e){return ss(this).concat(...e.map(t=>Re(t)?ss(t):t))},entries(){return Nl(this,"entries",e=>(e[1]=rn(this,e[1]),e))},every(e,t){return vn(this,"every",e,t,void 0,arguments)},filter(e,t){return vn(this,"filter",e,t,r=>r.map(n=>rn(this,n)),arguments)},find(e,t){return vn(this,"find",e,t,r=>rn(this,r),arguments)},findIndex(e,t){return vn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return vn(this,"findLast",e,t,r=>rn(this,r),arguments)},findLastIndex(e,t){return vn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return vn(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ul(this,"includes",e)},indexOf(...e){return Ul(this,"indexOf",e)},join(e){return ss(this).join(e)},lastIndexOf(...e){return Ul(this,"lastIndexOf",e)},map(e,t){return vn(this,"map",e,t,void 0,arguments)},pop(){return Is(this,"pop")},push(...e){return Is(this,"push",e)},reduce(e,...t){return $f(this,"reduce",e,t)},reduceRight(e,...t){return $f(this,"reduceRight",e,t)},shift(){return Is(this,"shift")},some(e,t){return vn(this,"some",e,t,void 0,arguments)},splice(...e){return Is(this,"splice",e)},toReversed(){return ss(this).toReversed()},toSorted(e){return ss(this).toSorted(e)},toSpliced(...e){return ss(this).toSpliced(...e)},unshift(...e){return Is(this,"unshift",e)},values(){return Nl(this,"values",e=>rn(this,e))}};function Nl(e,t,r){const n=el(e),i=n[t],s=i.call(n);if(n!==e&&!Rr(e)){if(s[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(s));return a.next=()=>xf(s.next(),r),i!==l0[t]&&Object.defineProperties(a,{return:{get(){const o=s.return;return typeof o=="function"?o.bind(s):o}},throw:{get(){const o=s.throw;return typeof o=="function"?o.bind(s):o}}}),a}s._next=s.next,s.next=()=>xf(s._next(),r)}return s}function xf(e,t){return e.done||(e.value=t(e.value)),e}const l0=Array.prototype;function vn(e,t,r,n,i,s){const a=el(e),o=a!==e&&!Rr(e),l=a[t];if(l!==l0[t]){const p=l.apply(e,s);return o?Br(p):p}let d=r;a!==e&&(o?d=function(p,g){return r.call(this,rn(e,p),g,e)}:r.length>2&&(d=function(p,g){return r.call(this,p,g,e)}));const f=l.call(a,d,n);return o&&i?i(f):f}function $f(e,t,r,n){const i=el(e),s=i!==e&&!Rr(e);let a=r,o=!1;i!==e&&(s?(o=n.length===0,a=function(d,f,p){return o&&(o=!1,d=rn(e,d)),r.call(this,d,rn(e,f),p,e)}):r.length>3&&(a=function(d,f,p){return r.call(this,d,f,p,e)}));const l=i[t](a,...n);return o?rn(e,l):l}function Ul(e,t,r){const n=ft(e);er(n,"iterate",ia);const i=n[t](...r);return(i===-1||i===!1)&&Ud(r[0])?(r[0]=ft(r[0]),n[t](...r)):i}function Is(e,t,r=[]){dn(),Md();const n=ft(e)[t].apply(e,r);return Rd(),cn(),n}const Jw=Id("__proto__,__v_isRef,__isVue"),u0=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(un));function e_(e){un(e)||(e=String(e));const t=ft(this);return er(t,"has",e),t.hasOwnProperty(e)}class d0{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,n){if(r==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return s;if(r==="__v_raw")return n===(i?s?d_:h0:s?p0:f0).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const a=Re(t);if(!i){let l;if(a&&(l=Qw[r]))return l;if(r==="hasOwnProperty")return e_}const o=Reflect.get(t,r,rr(t)?t:n);if((un(r)?u0.has(r):Jw(r))||(i||er(t,"get",r),s))return o;if(rr(o)){const l=a&&Od(r)?o:o.value;return i&&gt(l)?nd(l):l}return gt(o)?i?nd(o):cs(o):o}}class c0 extends d0{constructor(t=!1){super(!1,t)}set(t,r,n,i){let s=t[r];const a=Re(t)&&Od(r);if(!this._isShallow){const d=fn(s);if(!Rr(n)&&!fn(n)&&(s=ft(s),n=ft(n)),!a&&rr(s)&&!rr(n))return d||(s.value=n),!0}const o=a?Number(r)<t.length:pt(t,r),l=Reflect.set(t,r,n,rr(t)?t:i);return t===ft(i)&&l&&(o?an(n,s)&&Cn(t,"set",r,n):Cn(t,"add",r,n)),l}deleteProperty(t,r){const n=pt(t,r);t[r];const i=Reflect.deleteProperty(t,r);return i&&n&&Cn(t,"delete",r,void 0),i}has(t,r){const n=Reflect.has(t,r);return(!un(r)||!u0.has(r))&&er(t,"has",r),n}ownKeys(t){return er(t,"iterate",Re(t)?"length":Ni),Reflect.ownKeys(t)}}class t_ extends d0{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const r_=new c0,n_=new t_,i_=new c0(!0);const rd=e=>e,Ja=e=>Reflect.getPrototypeOf(e);function s_(e,t,r){return function(...n){const i=this.__v_raw,s=ft(i),a=Jn(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,d=i[e](...n),f=r?rd:t?ti:Br;return!t&&er(s,"iterate",l?td:Ni),qt(Object.create(d),{next(){const{value:p,done:g}=d.next();return g?{value:p,done:g}:{value:o?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function eo(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function a_(e,t){const r={get(i){const s=this.__v_raw,a=ft(s),o=ft(i);e||(an(i,o)&&er(a,"get",i),er(a,"get",o));const{has:l}=Ja(a),d=t?rd:e?ti:Br;if(l.call(a,i))return d(s.get(i));if(l.call(a,o))return d(s.get(o));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!e&&er(ft(i),"iterate",Ni),i.size},has(i){const s=this.__v_raw,a=ft(s),o=ft(i);return e||(an(i,o)&&er(a,"has",i),er(a,"has",o)),i===o?s.has(i):s.has(i)||s.has(o)},forEach(i,s){const a=this,o=a.__v_raw,l=ft(o),d=t?rd:e?ti:Br;return!e&&er(l,"iterate",Ni),o.forEach((f,p)=>i.call(s,d(f),d(p),a))}};return qt(r,e?{add:eo("add"),set:eo("set"),delete:eo("delete"),clear:eo("clear")}:{add(i){const s=ft(this),a=Ja(s),o=ft(i),l=!t&&!Rr(i)&&!fn(i)?o:i;return a.has.call(s,l)||an(i,l)&&a.has.call(s,i)||an(o,l)&&a.has.call(s,o)||(s.add(l),Cn(s,"add",l,l)),this},set(i,s){!t&&!Rr(s)&&!fn(s)&&(s=ft(s));const a=ft(this),{has:o,get:l}=Ja(a);let d=o.call(a,i);d||(i=ft(i),d=o.call(a,i));const f=l.call(a,i);return a.set(i,s),d?an(s,f)&&Cn(a,"set",i,s):Cn(a,"add",i,s),this},delete(i){const s=ft(this),{has:a,get:o}=Ja(s);let l=a.call(s,i);l||(i=ft(i),l=a.call(s,i)),o&&o.call(s,i);const d=s.delete(i);return l&&Cn(s,"delete",i,void 0),d},clear(){const i=ft(this),s=i.size!==0,a=i.clear();return s&&Cn(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{r[i]=s_(i,e,t)}),r}function Dd(e,t){const r=a_(e,t);return(n,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_isShallow"?t:i==="__v_raw"?n:Reflect.get(pt(r,i)&&i in n?r:n,i,s)}const o_={get:Dd(!1,!1)},l_={get:Dd(!1,!0)},u_={get:Dd(!0,!1)};const f0=new WeakMap,p0=new WeakMap,h0=new WeakMap,d_=new WeakMap;function c_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cs(e){return fn(e)?e:Nd(e,!1,r_,o_,f0)}function f_(e){return Nd(e,!1,i_,l_,p0)}function nd(e){return Nd(e,!0,n_,u_,h0)}function Nd(e,t,r,n,i){if(!gt(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=i.get(e);if(s)return s;const a=c_(Pw(e));if(a===0)return e;const o=new Proxy(e,a===2?n:r);return i.set(e,o),o}function ei(e){return fn(e)?ei(e.__v_raw):!!(e&&e.__v_isReactive)}function fn(e){return!!(e&&e.__v_isReadonly)}function Rr(e){return!!(e&&e.__v_isShallow)}function Ud(e){return e?!!e.__v_raw:!1}function ft(e){const t=e&&e.__v_raw;return t?ft(t):e}function p_(e){return!pt(e,"__v_skip")&&Object.isExtensible(e)&&Yg(e,"__v_skip",!0),e}const Br=e=>gt(e)?cs(e):e,ti=e=>gt(e)?nd(e):e;function rr(e){return e?e.__v_isRef===!0:!1}function We(e){return h_(e,!1)}function h_(e,t){return rr(e)?e:new m_(e,t)}class m_{constructor(t,r){this.dep=new Pd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:ft(t),this._value=r?t:Br(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,n=this.__v_isShallow||Rr(t)||fn(t);t=n?t:ft(t),an(t,r)&&(this._rawValue=t,this._value=n?t:Br(t),this.dep.trigger())}}function st(e){return rr(e)?e.value:e}const g_={get:(e,t,r)=>t==="__v_raw"?e:st(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const i=e[t];return rr(i)&&!rr(r)?(i.value=r,!0):Reflect.set(e,t,r,n)}};function m0(e){return ei(e)?e:new Proxy(e,g_)}class y_{constructor(t,r,n){this.fn=t,this.setter=r,this._value=void 0,this.dep=new Pd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=na-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Ct!==this)return r0(this,!0),!0}get value(){const t=this.dep.track();return s0(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function b_(e,t,r=!1){let n,i;return He(e)?n=e:(n=e.get,i=e.set),new y_(n,i,r)}const to={},Io=new WeakMap;let zi;function v_(e,t=!1,r=zi){if(r){let n=Io.get(r);n||Io.set(r,n=[]),n.push(e)}}function w_(e,t,r=Tt){const{immediate:n,deep:i,once:s,scheduler:a,augmentJob:o,call:l}=r,d=C=>i?C:Rr(C)||i===!1||i===0?En(C,1):En(C);let f,p,g,b,y=!1,x=!1;if(rr(e)?(p=()=>e.value,y=Rr(e)):ei(e)?(p=()=>d(e),y=!0):Re(e)?(x=!0,y=e.some(C=>ei(C)||Rr(C)),p=()=>e.map(C=>{if(rr(C))return C.value;if(ei(C))return d(C);if(He(C))return l?l(C,2):C()})):He(e)?t?p=l?()=>l(e,2):e:p=()=>{if(g){dn();try{g()}finally{cn()}}const C=zi;zi=f;try{return l?l(e,3,[b]):e(b)}finally{zi=C}}:p=ln,t&&i){const C=p,O=i===!0?1/0:i;p=()=>En(C(),O)}const E=Xw(),S=()=>{f.stop(),E&&E.active&&Ad(E.effects,f)};if(s&&t){const C=t;t=(...O)=>{try{return C(...O)}finally{S()}}}let $=x?new Array(e.length).fill(to):to;const A=C=>{if(!(!(f.flags&1)||!f.dirty&&!C))if(t){const O=f.run();if(C||i||y||(x?O.some((P,N)=>an(P,$[N])):an(O,$))){const P=zi;dn();try{g&&g(),zi=f;const N=[O,$===to?void 0:x&&$[0]===to?[]:$,b];$=O,l?l(t,3,N):t(...N)}finally{zi=P,cn()}}}else f.run()};return o&&o(A),f=new e0(p),f.scheduler=a?()=>a(A,!1):A,b=C=>v_(C,!1,f),g=f.onStop=()=>{const C=Io.get(f);if(C){if(l)l(C,4);else for(const O of C)O();Io.delete(f)}},t?n?A(!0):$=f.run():a?a(A.bind(null,!0),!0):f.run(),S.pause=f.pause.bind(f),S.resume=f.resume.bind(f),S.stop=S,S}function En(e,t=1/0,r){if(t<=0||!gt(e)||e.__v_skip||(r=r||new Map,(r.get(e)||0)>=t))return e;if(r.set(e,t),t--,rr(e))En(e.value,t,r);else if(Re(e))for(let n=0;n<e.length;n++)En(e[n],t,r);else if(An(e)||Jn(e))e.forEach(n=>{En(n,t,r)});else if(Kg(e)){for(const n in e)En(e[n],t,r);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&En(e[n],t,r)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ga(e,t,r,n){try{return n?e(...n):e()}catch(i){tl(i,t,r)}}function Pr(e,t,r,n){if(He(e)){const i=ga(e,t,r,n);return i&&Hg(i)&&i.catch(s=>{tl(s,t,r)}),i}if(Re(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Pr(e[s],t,r,n));return i}}function tl(e,t,r,n=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Tt;if(t){let o=t.parent;const l=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${r}`;for(;o;){const f=o.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,l,d)===!1)return}o=o.parent}if(s){dn(),ga(s,null,10,[e,l,d]),cn();return}}__(e,r,i,n,a)}function __(e,t,r,n=!0,i=!1){if(i)throw e;console.error(e)}const or=[];let Vr=-1;const nn=[];let Xn=null,os=0;const g0=Promise.resolve();let Ao=null;function Zn(e){const t=Ao||g0;return e?t.then(this?e.bind(this):e):t}function x_(e){let t=Vr+1,r=or.length;for(;t<r;){const n=t+r>>>1,i=or[n],s=sa(i);s<e||s===e&&i.flags&2?t=n+1:r=n}return t}function Ld(e){if(!(e.flags&1)){const t=sa(e),r=or[or.length-1];!r||!(e.flags&2)&&t>=sa(r)?or.push(e):or.splice(x_(t),0,e),e.flags|=1,y0()}}function y0(){Ao||(Ao=g0.then(w0))}function $_(e){if(!Re(e))Xn&&e.id===-1?Xn.splice(os+1,0,e):e.flags&1||(nn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)nn.push(e[t]);y0()}function b0(e,t,r,n=Vr+1){for(;n<or.length;n++){const i=or[n];if(i&&i.flags&2){if(e&&i.id!==e.uid||t!==void 0&&!(i.id>=t))continue;or.splice(n,1),n=e?n-1:Vr,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function v0(e,t,r=0){if(nn.length){let n=nn,i=0;if(t){n=[];for(let a=0;a<nn.length;a++){const o=nn[a];(o.i!==void 0?!o.i||o.i.uid<r:t.has(o))?nn[i++]=o:n.push(o)}}const s=[...new Set(n)].sort((a,o)=>sa(a)-sa(o));if(nn.length=i,Xn){for(let a=0;a<s.length;a++)Xn.push(s[a]);return}for(Xn=s,os=0;os<Xn.length;os++){const a=Xn[os];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Xn=null,os=0}}let Ll=!1;function S_(e,t){if(Ll){e();return}const r=t===void 0?void 0:new Set(nn);e(),Ll=!0;try{b0(void 0,t),v0(void 0,r,t)}finally{Ll=!1}}const sa=e=>e.id==null?e.flags&2?-1:1/0:e.id;function w0(e){try{for(Vr=0;Vr<or.length;Vr++){const t=or[Vr];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ga(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Vr<or.length;Vr++){const t=or[Vr];t&&(t.flags&=-2)}Vr=-1,or.length=0,v0(),Ao=null,(or.length||nn.length)&&w0()}}let Mr=null,_0=null;function Oo(e){const t=Mr;return Mr=e,_0=e&&e.type.__scopeId||null,t}function x0(e,t=Mr,r){if(!t||e._n)return e;const n=(...i)=>{n._d&&Bo(-1);const s=Oo(t),a=Ui.length;let o;try{o=e(...i)}finally{for(let l=Ui.length;l>a;l--)X0();Oo(s),n._d&&Bo(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function hr(e,t){if(Mr===null)return e;const r=ol(Mr),n=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,o,l=Tt]=t[i];s&&(He(s)&&(s={mounted:s,updated:s}),s.deep&&En(a),n.push({dir:s,instance:r,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function $i(e,t,r,n){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(dn(),Pr(l,r,8,[e.el,o,e,t]),cn())}}function k_(e,t){if(lr){let r=lr.provides;const n=lr.parent&&lr.parent.provides;n===r&&(r=lr.provides=Object.create(n)),r[e]=t}}function So(e,t,r=!1){const n=J0();if(n||ds){let i=ds?ds._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return r&&He(t)?t.call(n&&n.proxy):t}}const T_=Symbol.for("v-scx"),C_=()=>So(T_);function Fl(e,t,r){return $0(e,t,r)}function $0(e,t,r=Tt){const{immediate:n,deep:i,flush:s,once:a}=r,o=qt({},r),l=t&&n||!t&&s!=="post";let d;if(da){if(s==="sync"){const b=C_();d=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=ln,b.resume=ln,b.pause=ln,b}}const f=lr;o.call=(b,y,x)=>Pr(b,f,y,x);let p=!1;s==="post"?o.scheduler=b=>{b.i=f,pr(b,f&&f.suspense)}:s!=="sync"&&(p=!0,o.scheduler=(b,y)=>{y?b():Ld(b)}),o.augmentJob=b=>{t&&(b.flags|=4),p&&(b.flags|=2,f&&(b.id=f.uid,b.i=f))};const g=w_(e,t,o);return da&&(d?d.push(g):l&&g()),g}function E_(e,t,r){const n=this.proxy,i=zt(e)?e.includes(".")?S0(n,e):()=>n[e]:e.bind(n,n);let s;He(t)?s=t:(s=t.handler,r=t);const a=va(this),o=$0(i,s.bind(n),r);return a(),o}function S0(e,t){const r=t.split(".");return()=>{let n=e;for(let i=0;i<r.length&&n;i++)n=n[r[i]];return n}}const I_=Symbol("_vte"),rl=e=>e.__isTeleport,zr=Symbol("_leaveCb"),As=Symbol("_enterCb");function A_(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ba(()=>{e.isMounted=!0}),O0(()=>{e.isUnmounting=!0}),e}const Ar=[Function,Array],k0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ar,onEnter:Ar,onAfterEnter:Ar,onEnterCancelled:Ar,onBeforeLeave:Ar,onLeave:Ar,onAfterLeave:Ar,onLeaveCancelled:Ar,onBeforeAppear:Ar,onAppear:Ar,onAfterAppear:Ar,onAppearCancelled:Ar},O_={name:"BaseTransition",props:k0,setup(e,{slots:t}){const r=J0(),n=A_();return()=>{const i=t.default&&E0(t.default(),!0),s=i&&i.length?T0(i):r.subTree?jt():void 0;if(!s)return;const a=ft(e),{mode:o}=a;if(n.isLeaving)return jl(s);const l=zo(s);if(!l)return jl(s);let d=id(l,a,n,r,p=>d=p);l.type!==tr&&fs(l,d);let f=r.subTree&&zo(r.subTree);if(f&&f.type!==tr&&!Mi(f,l)&&aa(r.subTree)){let p=id(f,a,n,r);if(fs(f,p),o==="out-in"&&l.type!==tr)return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,r.job.flags&8||r.update(),delete p.afterLeave,f=void 0},jl(s);o==="in-out"&&l.type!==tr?p.delayLeave=(g,b,y)=>{const x=C0(n,f);x[String(f.key)]=f,g[zr]=()=>{b(),g[zr]=void 0,delete d.delayedLeave,f=void 0},d.delayedLeave=()=>{y(),delete d.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return s}}};function T0(e){let t=e[0];if(e.length>1){for(const r of e)if(r.type!==tr){t=r;break}}return t}const z_=O_;function C0(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function id(e,t,r,n,i){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:d,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:b,onAfterLeave:y,onLeaveCancelled:x,onBeforeAppear:E,onAppear:S,onAfterAppear:$,onAppearCancelled:A}=t,C=String(e.key),O=C0(r,e),P=(W,Y)=>{W&&Pr(W,n,9,Y)},N=(W,Y)=>{const de=Y[1];P(W,Y),Re(W)?W.every(X=>X.length<=1)&&de():W.length<=1&&de()},T={mode:a,persisted:o,beforeEnter(W){let Y=l;if(!r.isMounted)if(s)Y=E||l;else return;W[zr]&&W[zr](!0);const de=O[C];if(de&&Mi(e,de)){let X=de.el[zr];if(!X){const ue=aa(de);X=ue&&ue.el[zr]}X&&X()}P(Y,[W])},enter(W){if(O[C]===e)return;let Y=d,de=f,X=p;if(!r.isMounted)if(s)Y=S||d,de=$||f,X=A||p;else return;let ue=!1;W[As]=ee=>{ue||(ue=!0,ee?P(X,[W]):P(de,[W]),T.delayedLeave&&T.delayedLeave(),W[As]=void 0)};const q=W[As].bind(null,!1);Y?N(Y,[W,q]):q()},leave(W,Y){const de=String(e.key);if(W[As]&&W[As](!0),r.isUnmounting)return Y();P(g,[W]);let X=!1;W[zr]=q=>{X||(X=!0,Y(),q?P(x,[W]):P(y,[W]),W[zr]=void 0,O[de]===e&&delete O[de])};const ue=W[zr].bind(null,!1);O[de]=e,b?N(b,[W,ue]):ue()},clone(W){const Y=id(W,t,r,n,i);return i&&i(Y),Y}};return T}function jl(e){if(nl(e))return e=ri(e),e.children=null,e}function zo(e){if(!nl(e))return rl(e.type)&&e.children?T0(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:r}=e;if(r){if(t&16)return r[0];if(t&32&&He(r.default))return r.default()}}function fs(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const r=e.component.subTree;fs(rl(r.type)&&zo(r)||r,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===Xt&&Re(e.children)){const r=P0(e.children,!1);r&&fs(r,t)}}function E0(e,t=!1,r){let n=[],i=0;for(let s=0;s<e.length;s++){let a=e[s];const o=r==null?a.key:String(r)+String(a.key!=null?a.key:s);a.type===Xt?(a.patchFlag&128&&i++,n=n.concat(E0(a.children,t,o))):(t||a.type!==tr)&&n.push(o!=null?ri(a,{key:o}):a)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function aa(e){if(e.component)return aa(e.component.subTree);if(e.type===Xt){const t=Re(e.children)&&P0(e.children,!1);return t?aa(t):void 0}if(e.type!==tr)return e}function ya(e,t){return He(e)?qt({name:e.name},t,{setup:e}):e}function I0(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Sf(e,t){let r;return!!((r=Object.getOwnPropertyDescriptor(e,t))&&!r.configurable)}const Mo=new WeakMap;function Qs(e,t,r,n,i=!1){if(Re(e)){e.forEach((x,E)=>Qs(x,t&&(Re(t)?t[E]:t),r,n,i));return}if(Js(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Qs(e,t,r,n.component.subTree);return}const s=n.shapeFlag&4?ol(n.component):n.el,a=i?null:s,{i:o,r:l}=e,d=t&&t.r,f=o.refs===Tt?o.refs={}:o.refs,p=o.setupState,g=ft(p),b=p===Tt?qg:x=>Sf(f,x)?!1:pt(g,x),y=(x,E)=>!(E&&Sf(f,E));if(d!=null&&d!==l){if(kf(t),zt(d))f[d]=null,b(d)&&(p[d]=null);else if(rr(d)){const x=t;y(d,x.k)&&(d.value=null),x.k&&(f[x.k]=null)}}if(He(l))ga(l,o,12,[a,f]);else{const x=zt(l),E=rr(l);if(x||E){const S=()=>{if(e.f){const $=x?b(l)?p[l]:f[l]:y()||!e.k?l.value:f[e.k];if(i)Re($)&&Ad($,s);else if(Re($))$.includes(s)||$.push(s);else if(x)f[l]=[s],b(l)&&(p[l]=f[l]);else{const A=[s];y(l,e.k)&&(l.value=A),e.k&&(f[e.k]=A)}}else x?(f[l]=a,b(l)&&(p[l]=a)):E&&(y(l,e.k)&&(l.value=a),e.k&&(f[e.k]=a))};if(a){const $=()=>{S(),Mo.delete(e)};$.id=-1,Mo.set(e,$),pr($,r)}else kf(e),S()}}}function kf(e){const t=Mo.get(e);t&&(t.flags|=8,Mo.delete(e))}Jo().requestIdleCallback;Jo().cancelIdleCallback;const Js=e=>!!e.type.__asyncLoader,nl=e=>e.type.__isKeepAlive;function M_(e,t){A0(e,"a",t)}function R_(e,t){A0(e,"da",t)}function A0(e,t,r=lr){const n=e.__wdc||(e.__wdc=()=>{let i=r;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(il(t,n,r),r){let i=r.parent;for(;i&&i.parent;)nl(i.parent.vnode)&&B_(n,t,r,i),i=i.parent}}function B_(e,t,r,n){const i=il(t,e,n,!0);Fd(()=>{Ad(n[t],i)},r)}function il(e,t,r=lr,n=!1){if(r){const i=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...a)=>{dn();const o=va(r),l=Pr(t,r,e,a);return o(),cn(),l});return n?i.unshift(s):i.push(s),s}}const zn=e=>(t,r=lr)=>{(!da||e==="sp")&&il(e,(...n)=>t(...n),r)},P_=zn("bm"),ba=zn("m"),D_=zn("bu"),N_=zn("u"),O0=zn("bum"),Fd=zn("um"),U_=zn("sp"),L_=zn("rtg"),F_=zn("rtc");function j_(e,t=lr){il("ec",e,t)}const V_=Symbol.for("v-ndc");function ps(e,t,r,n){let i;const s=r,a=Re(e);if(a||zt(e)){const o=a&&ei(e);let l=!1,d=!1;o&&(l=!Rr(e),d=fn(e),e=el(e)),i=new Array(e.length);for(let f=0,p=e.length;f<p;f++)i[f]=t(l?d?ti(Br(e[f])):Br(e[f]):e[f],f,void 0,s)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)i=[];else{i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s)}else if(gt(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,d=o.length;l<d;l++){const f=o[l];i[l]=t(e[f],f,l,s)}}else i=[];return i}const sd=e=>e?ey(e)?ol(e):sd(e.parent):null,ea=qt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>sd(e.parent),$root:e=>sd(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>M0(e),$forceUpdate:e=>e.f||(e.f=()=>{Ld(e.update)}),$nextTick:e=>e.n||(e.n=Zn.bind(e.proxy)),$watch:e=>E_.bind(e)}),Vl=(e,t)=>e!==Tt&&!e.__isScriptSetup&&pt(e,t),W_={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:n,data:i,props:s,accessCache:a,type:o,appContext:l}=e;if(t[0]!=="$"){const g=a[t];if(g!==void 0)switch(g){case 1:return n[t];case 2:return i[t];case 4:return r[t];case 3:return s[t]}else{if(Vl(n,t))return a[t]=1,n[t];if(i!==Tt&&pt(i,t))return a[t]=2,i[t];if(pt(s,t))return a[t]=3,s[t];if(r!==Tt&&pt(r,t))return a[t]=4,r[t];ad&&(a[t]=0)}}const d=ea[t];let f,p;if(d)return t==="$attrs"&&er(e.attrs,"get",""),d(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(r!==Tt&&pt(r,t))return a[t]=4,r[t];if(p=l.config.globalProperties,pt(p,t))return p[t]},set({_:e},t,r){const{data:n,setupState:i,ctx:s}=e;return Vl(i,t)?(i[t]=r,!0):n!==Tt&&pt(n,t)?(n[t]=r,!0):pt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:i,props:s,type:a}},o){let l;return!!(r[o]||e!==Tt&&o[0]!=="$"&&pt(e,o)||Vl(t,o)||pt(s,o)||pt(n,o)||pt(ea,o)||pt(i.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:pt(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function Tf(e){return Re(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let ad=!0;function q_(e){const t=M0(e),r=e.proxy,n=e.ctx;ad=!1,t.beforeCreate&&Cf(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:d,created:f,beforeMount:p,mounted:g,beforeUpdate:b,updated:y,activated:x,deactivated:E,beforeDestroy:S,beforeUnmount:$,destroyed:A,unmounted:C,render:O,renderTracked:P,renderTriggered:N,errorCaptured:T,serverPrefetch:W,expose:Y,inheritAttrs:de,components:X,directives:ue,filters:q}=t;if(d&&H_(d,n,null),a)for(const ne in a){const fe=a[ne];He(fe)&&(n[ne]=fe.bind(r))}if(i){const ne=i.call(r,r);gt(ne)&&(e.data=cs(ne))}if(ad=!0,s)for(const ne in s){const fe=s[ne],oe=He(fe)?fe.bind(r,r):He(fe.get)?fe.get.bind(r,r):ln,Te=!He(fe)&&He(fe.set)?fe.set.bind(r):ln,re=ta({get:oe,set:Te});Object.defineProperty(n,ne,{enumerable:!0,configurable:!0,get:()=>re.value,set:xe=>re.value=xe})}if(o)for(const ne in o)z0(o[ne],n,r,ne);if(l){const ne=He(l)?l.call(r):l;Reflect.ownKeys(ne).forEach(fe=>{k_(fe,ne[fe])})}f&&Cf(f,e,"c");function he(ne,fe){Re(fe)?fe.forEach(oe=>ne(oe.bind(r))):fe&&ne(fe.bind(r))}if(he(P_,p),he(ba,g),he(D_,b),he(N_,y),he(M_,x),he(R_,E),he(j_,T),he(F_,P),he(L_,N),he(O0,$),he(Fd,C),he(U_,W),Re(Y))if(Y.length){const ne=e.exposed||(e.exposed={});Y.forEach(fe=>{Object.defineProperty(ne,fe,{get:()=>r[fe],set:oe=>r[fe]=oe,enumerable:!0})})}else e.exposed||(e.exposed={});O&&e.render===ln&&(e.render=O),de!=null&&(e.inheritAttrs=de),X&&(e.components=X),ue&&(e.directives=ue),W&&I0(e)}function H_(e,t,r=ln){Re(e)&&(e=od(e));for(const n in e){const i=e[n];let s;gt(i)?"default"in i?s=So(i.from||n,i.default,!0):s=So(i.from||n):s=So(i),rr(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[n]=s}}function Cf(e,t,r){Pr(Re(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function z0(e,t,r,n){let i=n.includes(".")?S0(r,n):()=>r[n];if(zt(e)){const s=t[e];He(s)&&Fl(i,s)}else if(He(e))Fl(i,e.bind(r));else if(gt(e))if(Re(e))e.forEach(s=>z0(s,t,r,n));else{const s=He(e.handler)?e.handler.bind(r):t[e.handler];He(s)&&Fl(i,s,e)}}function M0(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!r&&!n?l=t:(l={},i.length&&i.forEach(d=>Ro(l,d,a,!0)),Ro(l,t,a)),gt(t)&&s.set(t,l),l}function Ro(e,t,r,n=!1){const{mixins:i,extends:s}=t;s&&Ro(e,s,r,!0),i&&i.forEach(a=>Ro(e,a,r,!0));for(const a in t)if(!(n&&a==="expose")){const o=G_[a]||r&&r[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const G_={data:Ef,props:If,emits:If,methods:Vs,computed:Vs,beforeCreate:ar,created:ar,beforeMount:ar,mounted:ar,beforeUpdate:ar,updated:ar,beforeDestroy:ar,beforeUnmount:ar,destroyed:ar,unmounted:ar,activated:ar,deactivated:ar,errorCaptured:ar,serverPrefetch:ar,components:Vs,directives:Vs,watch:X_,provide:Ef,inject:K_};function Ef(e,t){return t?e?function(){return qt(He(e)?e.call(this,this):e,He(t)?t.call(this,this):t)}:t:e}function K_(e,t){return Vs(od(e),od(t))}function od(e){if(Re(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function ar(e,t){return e?[...new Set([].concat(e,t))]:t}function Vs(e,t){return e?qt(Object.create(null),e,t):t}function If(e,t){return e?Re(e)&&Re(t)?[...new Set([...e,...t])]:qt(Object.create(null),Tf(e),Tf(t??{})):t}function X_(e,t){if(!e)return t;if(!t)return e;const r=qt(Object.create(null),e);for(const n in t)r[n]=ar(e[n],t[n]);return r}function R0(){return{app:null,config:{isNativeTag:qg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Y_=0;function Z_(e,t){return function(n,i=null){He(n)||(n=qt({},n)),i!=null&&!gt(i)&&(i=null);const s=R0(),a=new WeakSet,o=[];let l=!1;const d=s.app={_uid:Y_++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Ex,get config(){return s.config},set config(f){},use(f,...p){return a.has(f)||(f&&He(f.install)?(a.add(f),f.install(d,...p)):He(f)&&(a.add(f),f(d,...p))),d},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),d},component(f,p){return p?(s.components[f]=p,d):s.components[f]},directive(f,p){return p?(s.directives[f]=p,d):s.directives[f]},mount(f,p,g){if(!l){const b=d._ceVNode||Fe(n,i);return b.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),e(b,f,g),l=!0,d._container=f,f.__vue_app__=d,ol(b.component)}},onUnmount(f){o.push(f)},unmount(){l&&(Pr(o,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,p){return s.provides[f]=p,d},runWithContext(f){const p=ds;ds=d;try{return f()}finally{ds=p}}};return d}}let ds=null;const Q_=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Hr(t)}Modifiers`]||e[`${ii(t)}Modifiers`];function J_(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||Tt;let i=r;const s=t.startsWith("update:"),a=s&&Q_(n,t.slice(7));a&&(a.trim&&(i=r.map(f=>zt(f)?f.trim():f)),a.number&&(i=i.map(Qo)));let o,l=n[o=Bl(t)]||n[o=Bl(Hr(t))];!l&&s&&(l=n[o=Bl(ii(t))]),l&&Pr(l,e,6,i);const d=n[o+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Pr(d,e,6,i)}}const ex=new WeakMap;function B0(e,t,r=!1){const n=r?ex:t.emitsCache,i=n.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!He(e)){const l=d=>{const f=B0(d,t,!0);f&&(o=!0,qt(a,f))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(gt(e)&&n.set(e,null),null):(Re(s)?s.forEach(l=>a[l]=null):qt(a,s),gt(e)&&n.set(e,a),a)}function sl(e,t){return!e||!Xo(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),pt(e,t[0].toLowerCase()+t.slice(1))||pt(e,ii(t))||pt(e,t))}function Af(e){const{type:t,vnode:r,proxy:n,withProxy:i,propsOptions:[s],slots:a,attrs:o,emit:l,render:d,renderCache:f,props:p,data:g,setupState:b,ctx:y,inheritAttrs:x}=e,E=Oo(e);let S,$;try{if(r.shapeFlag&4){const C=i||n,O=C;S=sn(d.call(O,C,f,p,b,g,y)),$=o}else{const C=t;S=sn(C.length>1?C(p,{attrs:o,slots:a,emit:l}):C(p,null)),$=t.props?o:tx(o)}}catch(C){Ui.length=0,tl(C,e,1),S=Fe(tr)}let A=S;if($&&x!==!1){const C=Object.keys($),{shapeFlag:O}=A;C.length&&O&7&&(s&&C.some(Yo)&&($=rx($,s)),A=ri(A,$,!1,!0))}if(r.dirs&&(A=ri(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(r.dirs):r.dirs),r.transition){const C=rl(A.type)&&zo(A)||A;fs(C,r.transition)}return S=A,Oo(E),S}function P0(e,t=!0){let r;for(let n=0;n<e.length;n++){const i=e[n];if(la(i)){if(i.type!==tr||i.children==="v-if"){if(r)return;r=i}}else return}return r}const tx=e=>{let t;for(const r in e)(r==="class"||r==="style"||Xo(r))&&((t||(t={}))[r]=e[r]);return t},rx=(e,t)=>{const r={};for(const n in e)(!Yo(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function nx(e,t,r){const{props:n,children:i,component:s}=e,{props:a,children:o,patchFlag:l}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?Of(n,a,d):!!a;if(l&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(D0(a,n,g)&&!sl(d,g))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Of(n,a,d):!0:!!a;return!1}function Of(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(!pt(e,s)||D0(t,e,s)&&!sl(r,s))return!0}return!1}function D0(e,t,r){const n=e[r],i=t[r];return r==="style"&&gt(n)&&gt(i)?!On(n,i):n!==i}function ix({vnode:e,parent:t,suspense:r},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=n,e=i),i===e)(e=t.vnode).el=n,t=t.parent;else break}r&&r.activeBranch===e&&(r.vnode.el=n)}const N0={},U0=()=>Object.create(N0),L0=e=>Object.getPrototypeOf(e)===N0;function sx(e,t,r,n=!1){const i={},s=U0();e.propsDefaults=Object.create(null),F0(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);r?e.props=n?i:f_(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function ax(e,t,r,n){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=ft(i),[l]=e.propsOptions;let d=!1;if((n||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(sl(e.emitsOptions,g))continue;const b=t[g];if(l)if(pt(s,g))b!==s[g]&&(s[g]=b,d=!0);else{const y=Hr(g);i[y]=ld(l,o,y,b,e,!1)}else b!==s[g]&&(s[g]=b,d=!0)}}}else{F0(e,t,i,s)&&(d=!0);let f;for(const p in o)(!t||!pt(t,p)&&((f=ii(p))===p||!pt(t,f)))&&(l?r&&(r[p]!==void 0||r[f]!==void 0)&&(i[p]=ld(l,o,p,void 0,e,!0)):delete i[p]);if(s!==o)for(const p in s)(!t||!pt(t,p))&&(delete s[p],d=!0)}d&&Cn(e.attrs,"set","")}function F0(e,t,r,n){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(Xs(l))continue;const d=t[l];let f;i&&pt(i,f=Hr(l))?!s||!s.includes(f)?r[f]=d:(o||(o={}))[f]=d:sl(e.emitsOptions,l)||(!(l in n)||d!==n[l])&&(n[l]=d,a=!0)}if(s){const l=ft(r),d=o||Tt;for(let f=0;f<s.length;f++){const p=s[f];r[p]=ld(i,l,p,d[p],e,!pt(d,p))}}return a}function ld(e,t,r,n,i,s){const a=e[r];if(a!=null){const o=pt(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&He(l)){const{propsDefaults:d}=i;if(r in d)n=d[r];else{const f=va(i);n=d[r]=l.call(null,t),f()}}else n=l;i.ce&&i.ce._setProp(r,n)}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===ii(r))&&(n=!0))}return n}const ox=new WeakMap;function j0(e,t,r=!1){const n=r?ox:t.propsCache,i=n.get(e);if(i)return i;const s=e.props,a={},o=[];let l=!1;if(!He(e)){const f=p=>{l=!0;const[g,b]=j0(p,t,!0);qt(a,g),b&&o.push(...b)};!r&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!l)return gt(e)&&n.set(e,Di),Di;if(Re(s))for(let f=0;f<s.length;f++){const p=Hr(s[f]);zf(p)&&(a[p]=Tt)}else if(s)for(const f in s){const p=Hr(f);if(zf(p)){const g=s[f],b=a[p]=Re(g)||He(g)?{type:g}:qt({},g),y=b.type;let x=!1,E=!0;if(Re(y))for(let S=0;S<y.length;++S){const $=y[S],A=He($)&&$.name;if(A==="Boolean"){x=!0;break}else A==="String"&&(E=!1)}else x=He(y)&&y.name==="Boolean";b[0]=x,b[1]=E,(x||pt(b,"default"))&&o.push(p)}}const d=[a,o];return gt(e)&&n.set(e,d),d}function zf(e){return e[0]!=="$"&&!Xs(e)}const jd=e=>e==="_"||e==="_ctx"||e==="$stable",Vd=e=>Re(e)?e.map(sn):[sn(e)],lx=(e,t,r)=>{if(t._n)return t;const n=x0((...i)=>Vd(t(...i)),r);return n._c=!1,n},V0=(e,t,r)=>{const n=e._ctx;for(const i in e){if(jd(i))continue;const s=e[i];if(He(s))t[i]=lx(i,s,n);else if(s!=null){const a=Vd(s);t[i]=()=>a}}},W0=(e,t)=>{const r=Vd(t);e.slots.default=()=>r},q0=(e,t,r)=>{for(const n in t)(r||!jd(n))&&(e[n]=t[n])},ux=(e,t,r)=>{const n=e.slots=U0();if(e.vnode.shapeFlag&32){const i=t._;i?(q0(n,t,r),r&&Yg(n,"_",i,!0)):V0(t,n)}else t&&W0(e,t)},dx=(e,t,r)=>{const{vnode:n,slots:i}=e;let s=!0,a=Tt;if(n.shapeFlag&32){const o=t._;o?r&&o===1?s=!1:q0(i,t,r):(s=!t.$stable,V0(t,i)),a=t}else t&&(W0(e,t),a={default:1});if(s)for(const o in i)!jd(o)&&a[o]==null&&delete i[o]},pr=mx;function cx(e){return fx(e)}function fx(e,t){const r=Jo();r.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:d,setElementText:f,parentNode:p,nextSibling:g,setScopeId:b=ln,insertStaticContent:y}=e,x=(M,F,H,Z=null,ie=null,ae=null,ye=void 0,me=null,ge=!!F.dynamicChildren)=>{if(M===F)return;M&&!Mi(M,F)&&(Z=ot(M),xe(M,ie,ae,!0),M=null),F.patchFlag===-2&&(ge=!1,F.dynamicChildren=null),F.dynamicChildren&&M&&M.dynamicChildren&&M.dynamicChildren.hasOnce&&(F.dynamicChildren===Di&&(F.dynamicChildren=[]),F.dynamicChildren.hasOnce=!0);const{type:se,ref:Ee,shapeFlag:we}=F;switch(se){case al:E(M,F,H,Z);break;case tr:S(M,F,H,Z);break;case ko:M==null&&$(F,H,Z,ye);break;case Xt:X(M,F,H,Z,ie,ae,ye,me,ge);break;default:we&1?O(M,F,H,Z,ie,ae,ye,me,ge):we&6?ue(M,F,H,Z,ie,ae,ye,me,ge):(we&64||we&128)&&se.process(M,F,H,Z,ie,ae,ye,me,ge,qe)}Ee!=null&&ie?Qs(Ee,M&&M.ref,ae,F||M,!F):Ee==null&&M&&M.ref!=null&&Qs(M.ref,null,ae,M,!0)},E=(M,F,H,Z)=>{if(M==null)n(F.el=o(F.children),H,Z);else{const ie=F.el=M.el;F.children!==M.children&&d(ie,F.children)}},S=(M,F,H,Z)=>{M==null?n(F.el=l(F.children||""),H,Z):F.el=M.el},$=(M,F,H,Z)=>{[M.el,M.anchor]=y(M.children,F,H,Z,M.el,M.anchor)},A=({el:M,anchor:F},H,Z)=>{let ie;for(;M&&M!==F;)ie=g(M),n(M,H,Z),M=ie;n(F,H,Z)},C=({el:M,anchor:F})=>{let H;for(;M&&M!==F;)H=g(M),i(M),M=H;i(F)},O=(M,F,H,Z,ie,ae,ye,me,ge)=>{if(F.type==="svg"?ye="svg":F.type==="math"&&(ye="mathml"),M==null)P(F,H,Z,ie,ae,ye,me,ge);else{const se=M.el&&M.el._isVueCE?M.el:null;try{se&&se._beginPatch(),W(M,F,ie,ae,ye,me,ge)}finally{se&&se._endPatch()}}},P=(M,F,H,Z,ie,ae,ye,me)=>{let ge,se;const{props:Ee,shapeFlag:we,transition:Oe,dirs:ze}=M;if(ge=M.el=a(M.type,ae,Ee&&Ee.is,Ee),we&8?f(ge,M.children):we&16&&T(M.children,ge,null,Z,ie,Wl(M,ae),ye,me),ze&&$i(M,null,Z,"created"),N(ge,M,M.scopeId,ye,Z),Ee){for(const Le in Ee)Le!=="value"&&!Xs(Le)&&s(ge,Le,null,Ee[Le],ae,Z);"value"in Ee&&s(ge,"value",null,Ee.value,ae),(se=Ee.onVnodeBeforeMount)&&en(se,Z,M)}ze&&$i(M,null,Z,"beforeMount");const je=px(ie,Oe);je&&Oe.beforeEnter(ge),n(ge,F,H),((se=Ee&&Ee.onVnodeMounted)||je||ze)&&pr(()=>{try{se&&en(se,Z,M),je&&Oe.enter(ge),ze&&$i(M,null,Z,"mounted")}finally{}},ie)},N=(M,F,H,Z,ie)=>{if(H&&b(M,H),Z)for(let ae=0;ae<Z.length;ae++)b(M,Z[ae]);if(ie){let ae=ie.subTree;if(F===ae||K0(ae.type)&&(ae.ssContent===F||ae.ssFallback===F)){const ye=ie.vnode;N(M,ye,ye.scopeId,ye.slotScopeIds,ie.parent)}}},T=(M,F,H,Z,ie,ae,ye,me,ge=0)=>{for(let se=ge;se<M.length;se++){const Ee=M[se]=me?kn(M[se]):sn(M[se]);x(null,Ee,F,H,Z,ie,ae,ye,me)}},W=(M,F,H,Z,ie,ae,ye)=>{const me=F.el=M.el;let{patchFlag:ge,dynamicChildren:se,dirs:Ee}=F;ge|=M.patchFlag&16;const we=M.props||Tt,Oe=F.props||Tt;let ze;if(H&&Si(H,!1),(ze=Oe.onVnodeBeforeUpdate)&&en(ze,H,F,M),Ee&&$i(F,M,H,"beforeUpdate"),H&&Si(H,!0),se&&(!M.dynamicChildren||M.dynamicChildren.length!==se.length)&&(ge=0,ye=!1,se=null),(we.innerHTML&&Oe.innerHTML==null||we.textContent&&Oe.textContent==null)&&f(me,""),se?Y(M.dynamicChildren,se,me,H,Z,Wl(F,ie),ae):ye||fe(M,F,me,null,H,Z,Wl(F,ie),ae,!1),ge>0){if(ge&16)de(me,we,Oe,H,ie);else if(ge&2&&we.class!==Oe.class&&s(me,"class",null,Oe.class,ie),ge&4&&s(me,"style",we.style,Oe.style,ie),ge&8){const je=F.dynamicProps;for(let Le=0;Le<je.length;Le++){const tt=je[Le],yt=we[tt],St=Oe[tt];(St!==yt||tt==="value")&&s(me,tt,yt,St,ie,H)}}ge&1&&M.children!==F.children&&f(me,F.children)}else!ye&&se==null&&de(me,we,Oe,H,ie);((ze=Oe.onVnodeUpdated)||Ee)&&pr(()=>{ze&&en(ze,H,F,M),Ee&&$i(F,M,H,"updated")},Z)},Y=(M,F,H,Z,ie,ae,ye)=>{for(let me=0;me<F.length;me++){const ge=M[me],se=F[me],Ee=ge.el||ud(ge),we=Ee&&(ge.type===Xt||!Mi(ge,se)||ge.shapeFlag&198)?p(Ee):H;x(ge,se,we,null,Z,ie,ae,ye,!0)}},de=(M,F,H,Z,ie)=>{if(F!==H){if(F!==Tt)for(const ae in F)!Xs(ae)&&!(ae in H)&&s(M,ae,F[ae],null,ie,Z);for(const ae in H){if(Xs(ae))continue;const ye=H[ae],me=F[ae];ye!==me&&ae!=="value"&&s(M,ae,me,ye,ie,Z)}"value"in H&&s(M,"value",F.value,H.value,ie)}},X=(M,F,H,Z,ie,ae,ye,me,ge)=>{const se=F.el=M?M.el:o(""),Ee=F.anchor=M?M.anchor:o("");let{patchFlag:we,dynamicChildren:Oe,slotScopeIds:ze}=F;ze&&(me=me?me.concat(ze):ze),M==null?(n(se,H,Z),n(Ee,H,Z),T(F.children||[],H,Ee,ie,ae,ye,me,ge)):we>0&&we&64&&Oe&&M.dynamicChildren&&M.dynamicChildren.length===Oe.length?(Y(M.dynamicChildren,Oe,H,ie,ae,ye,me),(F.key!=null||ie&&F===ie.subTree)&&H0(M,F,!0)):fe(M,F,H,Ee,ie,ae,ye,me,ge)},ue=(M,F,H,Z,ie,ae,ye,me,ge)=>{F.slotScopeIds=me,M==null?F.shapeFlag&512?ie.ctx.activate(F,H,Z,ye,ge):q(F,H,Z,ie,ae,ye,ge):ee(M,F,ge)},q=(M,F,H,Z,ie,ae,ye)=>{const me=M.component=xx(M,Z,ie);if(nl(M)&&(me.ctx.renderer=qe),$x(me,!1,ye),me.asyncDep){if(ie&&ie.registerDep(me,he,ye,ae),!M.el){const ge=me.subTree=Fe(tr);S(null,ge,F,H),M.placeholder=ge.el}}else he(me,M,F,H,ie,ae,ye)},ee=(M,F,H)=>{const Z=F.component=M.component;if(nx(M,F,H))if(Z.asyncDep&&!Z.asyncResolved){F.el=M.el,F.placeholder=M.placeholder,ne(Z,F,H);return}else Z.next=F,Z.update();else F.el=M.el,F.placeholder=M.placeholder,Z.vnode=F},he=(M,F,H,Z,ie,ae,ye)=>{const me=()=>{if(M.isMounted){let{next:we,bu:Oe,u:ze,parent:je,vnode:Le}=M;{const At=G0(M);if(At){we&&(we.el=Le.el,ne(M,we,ye)),At.asyncDep.then(()=>{pr(()=>{M.isUnmounted||se()},ie)});return}}let tt=we,yt;Si(M,!1),we?(we.el=Le.el,ne(M,we,ye)):we=Le,Oe&&$o(Oe),(yt=we.props&&we.props.onVnodeBeforeUpdate)&&en(yt,je,we,Le),Si(M,!0);const St=Af(M),Qt=M.subTree;M.subTree=St,x(Qt,St,p(Qt.el),ot(Qt),M,ie,ae),we.el=St.el,tt===null&&ix(M,St.el),ze&&pr(ze,ie),(yt=we.props&&we.props.onVnodeUpdated)&&pr(()=>en(yt,je,we,Le),ie)}else{let we;const{el:Oe,props:ze}=F,{bm:je,m:Le,parent:tt,root:yt,type:St}=M,Qt=Js(F);Si(M,!1),je&&$o(je),!Qt&&(we=ze&&ze.onVnodeBeforeMount)&&en(we,tt,F),Si(M,!0);{yt.ce&&yt.ce._hasShadowRoot()&&yt.ce._injectChildStyle(St,M.parent?M.parent.type:void 0);const At=M.subTree=Af(M);x(null,At,H,Z,M,ie,ae),F.el=At.el}if(Le&&pr(Le,ie),!Qt&&(we=ze&&ze.onVnodeMounted)){const At=F;pr(()=>en(we,tt,At),ie)}(F.shapeFlag&256||tt&&Js(tt.vnode)&&tt.vnode.shapeFlag&256)&&M.a&&pr(M.a,ie),M.isMounted=!0,F=H=Z=null}};M.scope.on();const ge=M.effect=new e0(me);M.scope.off();const se=M.update=ge.run.bind(ge),Ee=M.job=ge.runIfDirty.bind(ge);Ee.i=M,Ee.id=M.uid,ge.scheduler=()=>Ld(Ee),Si(M,!0),se()},ne=(M,F,H)=>{F.component=M;const Z=M.vnode.props;M.vnode=F,M.next=null,ax(M,F.props,Z,H),dx(M,F.children,H),dn(),b0(M),cn()},fe=(M,F,H,Z,ie,ae,ye,me,ge=!1)=>{const se=M&&M.children,Ee=M?M.shapeFlag:0,we=F.children,{patchFlag:Oe,shapeFlag:ze}=F;if(Oe>0){if(Oe&128){Te(se,we,H,Z,ie,ae,ye,me,ge);return}else if(Oe&256){oe(se,we,H,Z,ie,ae,ye,me,ge);return}}ze&8?(Ee&16&&et(se,ie,ae),we!==se&&f(H,we)):Ee&16?ze&16?Te(se,we,H,Z,ie,ae,ye,me,ge):et(se,ie,ae,!0):(Ee&8&&f(H,""),ze&16&&T(we,H,Z,ie,ae,ye,me,ge))},oe=(M,F,H,Z,ie,ae,ye,me,ge)=>{M=M||Di,F=F||Di;const se=M.length,Ee=F.length,we=Math.min(se,Ee);let Oe;for(Oe=0;Oe<we;Oe++){const ze=F[Oe]=ge?kn(F[Oe]):sn(F[Oe]);x(M[Oe],ze,H,null,ie,ae,ye,me,ge)}se>Ee?et(M,ie,ae,!0,!1,we):T(F,H,Z,ie,ae,ye,me,ge,we)},Te=(M,F,H,Z,ie,ae,ye,me,ge)=>{let se=0;const Ee=F.length;let we=M.length-1,Oe=Ee-1;for(;se<=we&&se<=Oe;){const ze=M[se],je=F[se]=ge?kn(F[se]):sn(F[se]);if(Mi(ze,je))x(ze,je,H,null,ie,ae,ye,me,ge);else break;se++}for(;se<=we&&se<=Oe;){const ze=M[we],je=F[Oe]=ge?kn(F[Oe]):sn(F[Oe]);if(Mi(ze,je))x(ze,je,H,null,ie,ae,ye,me,ge);else break;we--,Oe--}if(se>we){if(se<=Oe){const ze=Oe+1,je=ze<Ee?F[ze].el:Z;for(;se<=Oe;)x(null,F[se]=ge?kn(F[se]):sn(F[se]),H,je,ie,ae,ye,me,ge),se++}}else if(se>Oe)for(;se<=we;)xe(M[se],ie,ae,!0),se++;else{const ze=se,je=se,Le=new Map;for(se=je;se<=Oe;se++){const Mt=F[se]=ge?kn(F[se]):sn(F[se]);Mt.key!=null&&Le.set(Mt.key,se)}let tt,yt=0;const St=Oe-je+1;let Qt=!1,At=0;const Sr=new Array(St);for(se=0;se<St;se++)Sr[se]=0;for(se=ze;se<=we;se++){const Mt=M[se];if(yt>=St){xe(Mt,ie,ae,!0);continue}let Nt;if(Mt.key!=null)Nt=Le.get(Mt.key);else for(tt=je;tt<=Oe;tt++)if(Sr[tt-je]===0&&Mi(Mt,F[tt])){Nt=tt;break}Nt===void 0?xe(Mt,ie,ae,!0):(Sr[Nt-je]=se+1,Nt>=At?At=Nt:Qt=!0,x(Mt,F[Nt],H,null,ie,ae,ye,me,ge),yt++)}const ur=Qt?hx(Sr):Di;for(tt=ur.length-1,se=St-1;se>=0;se--){const Mt=je+se,Nt=F[Mt],mr=F[Mt+1],dr=Mt+1<Ee?mr.el||ud(mr):Z;Sr[se]===0?x(null,Nt,H,dr,ie,ae,ye,me,ge):Qt&&(tt<0||se!==ur[tt]?re(Nt,H,dr,2):tt--)}}},re=(M,F,H,Z,ie=null)=>{const{el:ae,type:ye,transition:me,children:ge,shapeFlag:se}=M;if(se&6){re(M.component.subTree,F,H,Z);return}if(se&128){M.suspense.move(F,H,Z);return}if(se&64){ye.move(M,F,H,qe);return}if(ye===Xt){n(ae,F,H);for(let we=0;we<ge.length;we++)re(ge[we],F,H,Z);n(M.anchor,F,H);return}if(ye===ko){A(M,F,H);return}if(Z!==2&&se&1&&me)if(Z===0)me.persisted&&!ae[zr]?n(ae,F,H):(me.beforeEnter(ae),n(ae,F,H),pr(()=>me.enter(ae),ie));else{const{leave:we,delayLeave:Oe,afterLeave:ze}=me,je=()=>{M.ctx.isUnmounted?i(ae):n(ae,F,H)},Le=()=>{const tt=ae._isLeaving||!!ae[zr];ae._isLeaving&&ae[zr](!0),me.persisted&&!tt?je():we(ae,()=>{je(),ze&&ze()})};Oe?Oe(ae,je,Le):Le()}else n(ae,F,H)},xe=(M,F,H,Z=!1,ie=!1)=>{const{type:ae,props:ye,ref:me,children:ge,dynamicChildren:se,shapeFlag:Ee,patchFlag:we,dirs:Oe,cacheIndex:ze,memo:je}=M;if((we===-2||se&&se.hasOnce)&&(ie=!1),me!=null&&(dn(),Qs(me,null,H,M,!0),cn()),ze!=null&&(!M.ctx||M.ctx===F)&&(F.renderCache[ze]=void 0),Ee&256){F.ctx.deactivate(M);return}const Le=Ee&1&&Oe,tt=!Js(M);let yt;if(tt&&(yt=ye&&ye.onVnodeBeforeUnmount)&&en(yt,F,M),Ee&6)ht(M.component,H,Z);else{if(Ee&128){M.suspense.unmount(H,Z);return}Le&&$i(M,null,F,"beforeUnmount"),Ee&64?M.type.remove(M,F,H,qe,Z):se&&!se.hasOnce&&(ae!==Xt||we>0&&we&64)?et(se,F,H,!1,!0):(ae===Xt&&we&384||!ie&&Ee&16)&&et(ge,F,H),Z&&Se(M)}const St=je!=null&&ze==null;(tt&&(yt=ye&&ye.onVnodeUnmounted)||Le||St)&&pr(()=>{yt&&en(yt,F,M),Le&&$i(M,null,F,"unmounted"),St&&(M.el=null)},H)},Se=M=>{const{type:F,el:H,anchor:Z,transition:ie}=M,ae=F===Xt;if(ae&&!ie){be(H,Z);return}if(F===ko){C(M),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave();return}const ye=ae?aa(M):M,me=()=>{ae?p(H)&&be(H,Z):i(H),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(ye&&ye.shapeFlag&1&&ie&&!ie.persisted){const{leave:ge,delayLeave:se}=ie,Ee=ye.el,we=()=>ge(Ee,me);se?se(Ee,me,we):we()}else me()},be=(M,F)=>{let H;for(;M!==F;)H=g(M),i(M),M=H;i(F)},ht=(M,F,H)=>{const{bum:Z,scope:ie,job:ae,subTree:ye,um:me,m:ge,a:se}=M;Mf(ge),Mf(se),Z&&$o(Z),ie.stop(),ae?(ae.flags|=8,xe(ye,M,F,H)):M.vnode.el&&ye&&(ye.transition=M.vnode.transition,xe(ye,M,F,H)),me&&pr(me,F),pr(()=>{M.isUnmounted=!0},F)},et=(M,F,H,Z=!1,ie=!1,ae=0)=>{for(let ye=ae;ye<M.length;ye++)xe(M[ye],F,H,Z,ie)},ot=M=>{if(M.shapeFlag&6)return ot(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const F=g(M.anchor||M.el),H=F&&F[I_];return H?g(H):F},wt=(M,F,H)=>{const Z=M&&F._vnode?void 0:M&&M.component?M.component.uid:_x();S_(()=>{M==null?F._vnode&&xe(F._vnode,null,null,!0):x(F._vnode||null,M,F,null,null,null,H),F._vnode=M},Z)},qe={p:x,um:xe,m:re,r:Se,mt:q,mc:T,pc:fe,pbc:Y,n:ot,o:e};return{render:wt,hydrate:void 0,createApp:Z_(wt)}}function Wl({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function Si({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function px(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function H0(e,t,r=!1){const n=e.children,i=t.children;if(Re(n)&&Re(i))for(let s=0;s<n.length;s++){const a=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=kn(i[s]),o.el=a.el),!r&&o.patchFlag!==-2&&H0(a,o)),o.type===al&&(o.patchFlag===-1&&(o=i[s]=kn(o)),o.el=a.el),o.type===tr&&!o.el&&(o.el=a.el)}}function hx(e){const t=e.slice(),r=[0];let n,i,s,a,o;const l=e.length;for(n=0;n<l;n++){const d=e[n];if(d!==0){if(i=r[r.length-1],e[i]<d){t[n]=i,r.push(n);continue}for(s=0,a=r.length-1;s<a;)o=s+a>>1,e[r[o]]<d?s=o+1:a=o;d<e[r[s]]&&(s>0&&(t[n]=r[s-1]),r[s]=n)}}for(s=r.length,a=r[s-1];s-- >0;)r[s]=a,a=t[a];return r}function G0(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:G0(t)}function Mf(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ud(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ud(t.subTree):null}const K0=e=>e.__isSuspense;function mx(e,t){t&&t.pendingBranch?Re(e)?t.effects.push(...e):t.effects.push(e):$_(e)}const Xt=Symbol.for("v-fgt"),al=Symbol.for("v-txt"),tr=Symbol.for("v-cmt"),ko=Symbol.for("v-stc"),Ui=[];let xr=null;function Xe(e=!1){Ui.push(xr=e?null:[])}function X0(){Ui.pop(),xr=Ui[Ui.length-1]||null}let oa=1;function Bo(e,t=!1){oa+=e,e<0&&xr&&t&&(xr.hasOnce=!0)}function Y0(e){return e.dynamicChildren=oa>0?xr||Di:null,X0(),oa>0&&xr&&xr.push(e),e}function at(e,t,r,n,i,s){return Y0(U(e,t,r,n,i,s,!0))}function Li(e,t,r,n,i){return Y0(Fe(e,t,r,n,i,!0))}function la(e){return e?e.__v_isVNode===!0:!1}function Mi(e,t){return e.type===t.type&&e.key===t.key}const Z0=({key:e})=>e??null,To=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?zt(e)||rr(e)||He(e)?{i:Mr,r:e,k:t,f:!!r}:e:null);function U(e,t=null,r=null,n=0,i=null,s=e===Xt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Z0(t),ref:t&&To(t),scopeId:_0,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Mr};return o?(Po(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=zt(r)?8:16),oa>0&&!a&&xr&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&xr.push(l),l}const Fe=gx;function gx(e,t=null,r=null,n=0,i=null,s=!1){if((!e||e===V_)&&(e=tr),la(e)){const o=ri(e,t,!0);return r&&Po(o,r),oa>0&&!s&&xr&&(o.shapeFlag&6?xr[xr.indexOf(e)]=o:xr.push(o)),o.patchFlag=-2,o}if(Cx(e)&&(e=e.__vccOpts),t){t=yx(t);let{class:o,style:l}=t;o&&!zt(o)&&(t.class=wr(o)),gt(l)&&(Ud(l)&&!Re(l)&&(l=qt({},l)),t.style=Yn(l))}const a=zt(e)?1:K0(e)?128:rl(e)?64:gt(e)?4:He(e)?2:0;return U(e,t,r,n,i,a,s,!0)}function yx(e){return e?Ud(e)||L0(e)?qt({},e):e:null}function ri(e,t,r=!1,n=!1){const{props:i,ref:s,patchFlag:a,children:o,transition:l}=e,d=t?vx(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Z0(d),ref:t&&t.ref?r&&s?Re(s)?s.concat(To(t)):[s,To(t)]:To(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ri(e.ssContent),ssFallback:e.ssFallback&&ri(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&n&&fs(f,l.clone(f)),f}function bx(e=" ",t=0){return Fe(al,null,e,t)}function ql(e,t){const r=Fe(ko,null,e);return r.staticCount=t,r}function jt(e="",t=!1){return t?(Xe(),Li(tr,null,e)):Fe(tr,null,e)}function sn(e){return e==null||typeof e=="boolean"?Fe(tr):Re(e)?Fe(Xt,null,e.slice()):la(e)?kn(e):Fe(al,null,String(e))}function kn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ri(e)}function Po(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(Re(t))r=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),Po(e,i()),i._c&&(i._d=!0));return}else{r=32;const i=t._;!i&&!L0(t)?t._ctx=Mr:i===3&&Mr&&(Mr.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(He(t)){if(n&65){Po(e,{default:t});return}t={default:t,_ctx:Mr},r=32}else t=String(t),n&64?(r=16,t=[bx(t)]):r=8;e.children=t,e.shapeFlag|=r}function vx(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=wr([t.class,n.class]));else if(i==="style")t.style=Yn([t.style,n.style]);else if(Xo(i)){const s=t[i],a=n[i];a&&s!==a&&!(Re(s)&&s.includes(a))?t[i]=s?[].concat(s,a):a:a==null&&s==null&&!Yo(i)&&(t[i]=a)}else i!==""&&(t[i]=n[i])}return t}function en(e,t,r,n=null){Pr(e,t,7,[r,n])}const wx=R0();let Q0=0;function _x(){return Q0}function xx(e,t,r){const n=e.type,i=(t?t.appContext:e.appContext)||wx,s={uid:Q0++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:j0(n,i),emitsOptions:B0(n,i),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:n.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=J_.bind(null,s),e.ce&&e.ce(s),s}let lr=null;const J0=()=>lr||Mr;let Do,ua;{const e=Jo(),t=(r,n)=>{let i;return(i=e[r])||(i=e[r]=[]),i.push(n),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};Do=t("__VUE_INSTANCE_SETTERS__",r=>lr=r),ua=t("__VUE_SSR_SETTERS__",r=>da=r)}const va=e=>{const t=lr;return Do(e),e.scope.on(),()=>{e.scope.off(),Do(t)}},Rf=()=>{lr&&lr.scope.off(),Do(null)};function ey(e){return e.vnode.shapeFlag&4}let da=!1;function $x(e,t=!1,r=!1){t&&ua(t);const{props:n,children:i}=e.vnode,s=ey(e);sx(e,n,s,t),ux(e,i,r||t);const a=s?Sx(e,t):void 0;return t&&ua(!1),a}function Sx(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,W_);const{setup:n}=r;if(n){dn();const i=e.setupContext=n.length>1?Tx(e):null,s=va(e),a=ga(n,e,0,[e.props,i]),o=Hg(a);if(cn(),s(),(o||e.sp)&&!Js(e)&&I0(e),o){if(a.then(Rf,Rf),t)return a.then(l=>{ua(!0);try{Bf(e,l,t)}finally{ua(!1)}}).catch(l=>{tl(l,e,0)});e.asyncDep=a}else Bf(e,a)}else ty(e)}function Bf(e,t,r){He(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:gt(t)&&(e.setupState=m0(t)),ty(e)}function ty(e,t,r){const n=e.type;e.render||(e.render=n.render||ln);{const i=va(e);dn();try{q_(e)}finally{cn(),i()}}}const kx={get(e,t){return er(e,"get",""),e[t]}};function Tx(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,kx),slots:e.slots,emit:e.emit,expose:t}}function ol(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(m0(p_(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in ea)return ea[r](e)},has(t,r){return r in t||r in ea}})):e.proxy}function Cx(e){return He(e)&&"__vccOpts"in e}const ta=(e,t)=>b_(e,t,da);function dd(e,t,r){try{Bo(-1);const n=arguments.length;return n===2?gt(t)&&!Re(t)?la(t)?Fe(e,null,[t]):Fe(e,t):Fe(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&la(r)&&(r=[r]),Fe(e,t,r))}finally{Bo(1)}}const Ex="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cd;const Pf=typeof window<"u"&&window.trustedTypes;if(Pf)try{cd=Pf.createPolicy("vue",{createHTML:e=>e})}catch{}const ry=cd?e=>cd.createHTML(e):e=>e,Ix="http://www.w3.org/2000/svg",Ax="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,Df=Sn&&Sn.createElement("template"),Ox={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const i=t==="svg"?Sn.createElementNS(Ix,e):t==="mathml"?Sn.createElementNS(Ax,e):r?Sn.createElement(e,{is:r}):Sn.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>Sn.createTextNode(e),createComment:e=>Sn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Sn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,i,s){const a=r?r.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),r),!(i===s||!(i=i.nextSibling)););else{Df.innerHTML=ry(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=Df.content;if(n==="svg"||n==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,r)}return[a?a.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},Vn="transition",Os="animation",ca=Symbol("_vtc"),ny={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},zx=qt({},k0,ny),Mx=e=>(e.displayName="Transition",e.props=zx,e),Rx=Mx((e,{slots:t})=>dd(z_,Bx(e),t)),ki=(e,t=[])=>{Re(e)?e.forEach(r=>r(...t)):e&&e(...t)},Nf=e=>e?Re(e)?e.some(t=>t.length>1):e.length>1:!1;function Bx(e){const t={};for(const X in e)X in ny||(t[X]=e[X]);if(e.css===!1)return t;const{name:r="v",type:n,duration:i,enterFromClass:s=`${r}-enter-from`,enterActiveClass:a=`${r}-enter-active`,enterToClass:o=`${r}-enter-to`,appearFromClass:l=s,appearActiveClass:d=a,appearToClass:f=o,leaveFromClass:p=`${r}-leave-from`,leaveActiveClass:g=`${r}-leave-active`,leaveToClass:b=`${r}-leave-to`}=e,y=Px(i),x=y&&y[0],E=y&&y[1],{onBeforeEnter:S,onEnter:$,onEnterCancelled:A,onLeave:C,onLeaveCancelled:O,onBeforeAppear:P=S,onAppear:N=$,onAppearCancelled:T=A}=t,W=(X,ue,q,ee)=>{X._enterCancelled=ee,Ti(X,ue?f:o),Ti(X,ue?d:a),q&&q()},Y=(X,ue)=>{X._isLeaving=!1,Ti(X,p),Ti(X,b),Ti(X,g),ue&&ue()},de=X=>(ue,q)=>{const ee=X?N:$,he=()=>W(ue,X,q);ki(ee,[ue,he]),Uf(()=>{Ti(ue,X?l:s),wn(ue,X?f:o),Nf(ee)||Lf(ue,n,x,he)})};return qt(t,{onBeforeEnter(X){ki(S,[X]),wn(X,s),wn(X,a)},onBeforeAppear(X){ki(P,[X]),wn(X,l),wn(X,d)},onEnter:de(!1),onAppear:de(!0),onLeave(X,ue){X._isLeaving=!0;const q=()=>Y(X,ue);wn(X,p),X._enterCancelled?(wn(X,g),Vf(X)):(Vf(X),wn(X,g)),Uf(()=>{X._isLeaving&&(Ti(X,p),wn(X,b),Nf(C)||Lf(X,n,E,q))}),ki(C,[X,q])},onEnterCancelled(X){W(X,!1,void 0,!0),ki(A,[X])},onAppearCancelled(X){W(X,!0,void 0,!0),ki(T,[X])},onLeaveCancelled(X){Y(X),ki(O,[X])}})}function Px(e){if(e==null)return null;if(gt(e))return[Hl(e.enter),Hl(e.leave)];{const t=Hl(e);return[t,t]}}function Hl(e){return Uw(e)}function wn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e[ca]||(e[ca]=new Set)).add(t)}function Ti(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const r=e[ca];r&&(r.delete(t),r.size||(e[ca]=void 0))}function Uf(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Dx=0;function Lf(e,t,r,n){const i=e._endId=++Dx,s=()=>{i===e._endId&&n()};if(r!=null)return setTimeout(s,r);const{type:a,timeout:o,propCount:l}=Nx(e,t);if(!a)return n();const d=a+"end";let f=0;const p=()=>{e.removeEventListener(d,g),s()},g=b=>{b.target===e&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},o+1),e.addEventListener(d,g)}function Nx(e,t){const r=window.getComputedStyle(e),n=y=>(r[y]||"").split(", "),i=n(`${Vn}Delay`),s=n(`${Vn}Duration`),a=Ff(i,s),o=n(`${Os}Delay`),l=n(`${Os}Duration`),d=Ff(o,l);let f=null,p=0,g=0;t===Vn?a>0&&(f=Vn,p=a,g=s.length):t===Os?d>0&&(f=Os,p=d,g=l.length):(p=Math.max(a,d),f=p>0?a>d?Vn:Os:null,g=f?f===Vn?s.length:l.length:0);const b=f===Vn&&/\b(?:transform|all)(?:,|$)/.test(n(`${Vn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:b}}function Ff(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>jf(r)+jf(e[n])))}function jf(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Vf(e){return(e?e.ownerDocument:document).body.offsetHeight}function Ux(e,t,r){const n=e[ca];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const Wf=Symbol("_vod"),Lx=Symbol("_vsh"),Fx=Symbol(""),jx=/(?:^|;)\s*display\s*:/;function Vx(e,t,r){const n=e.style,i=zt(r);let s=!1;if(r&&!i){if(t)if(zt(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();r[o]==null&&Ws(n,o,"")}else for(const a in t)r[a]==null&&Ws(n,a,"");for(const a in r){a==="display"&&(s=!0);const o=r[a];o!=null?qx(e,a,!zt(t)&&t?t[a]:void 0,o)||Ws(n,a,o):Ws(n,a,"")}}else if(i){if(t!==r){const a=n[Fx];a&&(r+=";"+a),n.cssText=r,s=jx.test(r)}}else t&&e.removeAttribute("style");Wf in e&&((!i||t!==r)&&(e[Wf]=s?n.display:""),e[Lx]&&(n.display="none"))}const ro=/\s*!important$/;function Ws(e,t,r){if(Re(r))r.forEach(n=>Ws(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))ro.test(r)?e.setProperty(t,r.replace(ro,""),"important"):e.setProperty(t,r);else{const n=Wx(e,t);ro.test(r)?e.setProperty(ii(n),r.replace(ro,""),"important"):e[n]=r}}const qf=["Webkit","Moz","ms"],Gl={};function Wx(e,t){const r=Gl[t];if(r)return r;let n=Hr(t);if(n!=="filter"&&n in e)return Gl[t]=n;n=Xg(n);for(let i=0;i<qf.length;i++){const s=qf[i]+n;if(s in e)return Gl[t]=s}return t}function qx(e,t,r,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&zt(n)&&r===n}const Hf="http://www.w3.org/1999/xlink";function Gf(e,t,r,n,i,s=qw(t)){n&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(Hf,t.slice(6,t.length)):e.setAttributeNS(Hf,t,r):r==null||s&&!Zg(r)?e.removeAttribute(t):e.setAttribute(t,s?"":un(r)?String(r):r)}function Kf(e,t,r,n,i){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?ry(r):r);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,l=r==null?e.type==="checkbox"?"on":"":String(r);(o!==l||!("_value"in e))&&(e.value=l),r==null&&e.removeAttribute(t),e._value=r;return}let a=!1;if(r===""||r==null){const o=typeof e[t];o==="boolean"?r=Zg(r):r==null&&o==="string"?(r="",a=!0):o==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(i||t)}function Qn(e,t,r,n){e.addEventListener(t,r,n)}function Hx(e,t,r,n){e.removeEventListener(t,r,n)}const Xf=Symbol("_vei");function Gx(e,t,r,n,i=null){const s=e[Xf]||(e[Xf]={}),a=s[t];if(n&&a)a.value=n;else{const[o,l]=Yx(t);if(n){const d=s[t]=Jx(n,i);Qn(e,o,d,l)}else a&&(Hx(e,o,a,l),s[t]=void 0)}}const Kx=/(Once|Passive|Capture)$/,Xx=/^on:?(?:Once|Passive|Capture)$/;function Yx(e){let t,r;for(;(r=e.match(Kx))&&!Xx.test(e);)t||(t={}),e=e.slice(0,e.length-r[1].length),t[r[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):ii(e.slice(2)),t]}let Kl=0;const Zx=Promise.resolve(),Qx=()=>Kl||(Zx.then(()=>Kl=0),Kl=Date.now());function Jx(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;const i=r.value;if(Re(i)){const s=n.stopImmediatePropagation;n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0};const a=i.slice(),o=[n];for(let l=0;l<a.length&&!n._stopped;l++){const d=a[l];d&&Pr(d,t,5,o)}}else Pr(i,t,5,[n])};return r.value=e,r.attached=Qx(),r}const Yf=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,e2=(e,t,r,n,i,s)=>{const a=i==="svg";t==="class"?Ux(e,n,a):t==="style"?Vx(e,r,n):Xo(t)?Yo(t)||Gx(e,t,r,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):t2(e,t,n,a))?(Kf(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Gf(e,t,n,a,s,t!=="value")):e._isVueCE&&(r2(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!zt(n)))?Kf(e,Hr(t),n,s,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Gf(e,t,n,a))};function t2(e,t,r,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Yf(t)&&He(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Yf(t)&&zt(r)?!1:t in e}function r2(e,t){const r=e._def.props;if(!r)return!1;const n=Hr(t);return Array.isArray(r)?r.some(i=>Hr(i)===n):Object.keys(r).some(i=>Hr(i)===n)}const hs=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Re(t)?r=>$o(t,r):t};function n2(e){e.target.composing=!0}function Zf(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const on=Symbol("_assign"),no=Symbol("_initialValue");function Xl(e,t,r){return t&&(e=e.trim()),r&&(e=Qo(e)),e}const Tn={created(e,{modifiers:{lazy:t,trim:r,number:n}},i){e.parentNode&&(e.type==="text"?e[no]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[no]=e.defaultValue.replace(/\r\n?/g,`
`))),e[on]=hs(i);const s=n||i.props&&i.props.type==="number";Qn(e,t?"change":"input",a=>{a.target.composing||e[on](Xl(e.value,r,s))}),(r||s)&&Qn(e,"change",()=>{e.value=Xl(e.value,r,s)}),t||(Qn(e,"compositionstart",n2),Qn(e,"compositionend",Zf),Qn(e,"change",Zf))},mounted(e,{value:t,modifiers:{trim:r,number:n}}){const i=t??"",s=e[no];delete e[no],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[on](Xl(e.value,r,n)):e.value=i},beforeUpdate(e,{value:t,oldValue:r,modifiers:{lazy:n,trim:i,number:s}},a){if(e[on]=hs(a),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?Qo(e.value):e.value,l=t??"";if(o===l)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(n&&t===r||i&&e.value.trim()===l)||(e.value=l)}},fd={deep:!0,created(e,t,r){e[on]=hs(r),Qn(e,"change",()=>{const n=e._modelValue,i=fa(e),s=e.checked,a=e[on];if(Re(n)){const o=zd(n,i),l=o!==-1;if(s&&!l)a(n.concat(i));else if(!s&&l){const d=[...n];d.splice(o,1),a(d)}}else if(An(n)){const o=new Set(n);s?o.add(i):o.delete(i),a(o)}else a(sy(e,s))})},mounted:Qf,beforeUpdate(e,t,r){e[on]=hs(r),Qf(e,t,r)}};function Qf(e,{value:t,oldValue:r},n){e._modelValue=t;let i;if(Re(t))i=zd(t,n.props.value)>-1;else if(An(t))i=t.has(n.props.value);else{if(t===r)return;i=On(t,sy(e,!0))}e.checked!==i&&(e.checked=i)}const iy={deep:!0,created(e,{value:t,modifiers:{number:r}},n){e._modelValue=t,Qn(e,"change",()=>{const i=Array.prototype.filter.call(e.options,l=>l.selected).map(l=>r?Qo(fa(l)):fa(l)),s=e.multiple,a=s?An(e._modelValue)?new Set(i):i:i[0],o=e._pendingValue=[s,s?Re(a)?i.slice():i:a];try{e[on](a)}finally{Zn(()=>{e._pendingValue===o&&(e._pendingValue=void 0)})}}),e[on]=hs(n)},mounted(e,{value:t}){Jf(e,t)},beforeUpdate(e,{value:t},r){e._modelValue=t,e[on]=hs(r)},updated(e,{value:t}){const r=e._pendingValue;e._pendingValue=void 0,(!r||r[0]!==e.multiple||!i2(t,r[1],r[0]))&&Jf(e,t)}};function i2(e,t,r){if(!r||Re(e))return On(e,t);if(An(e)){if(e.size!==t.length)return!1;for(const n of t)if(!e.has(n))return!1;return!0}return!1}function Jf(e,t){const r=e.multiple,n=Re(t);if(!(r&&!n&&!An(t))){for(let i=0,s=e.options.length;i<s;i++){const a=e.options[i],o=fa(a);if(r)if(n){const l=typeof o;l==="string"||l==="number"?a.selected=t.some(d=>String(d)===String(o)):a.selected=zd(t,o)>-1}else a.selected=t.has(o);else if(On(fa(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function fa(e){return"_value"in e?e._value:e.value}function sy(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const s2=["ctrl","shift","alt","meta"],a2={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>s2.some(r=>e[`${r}Key`]&&!t.includes(r))},io=(e,t)=>{if(!e)return e;const r=e._withMods||(e._withMods={}),n=t.join(".");return r[n]||(r[n]=(i,...s)=>{for(let a=0;a<t.length;a++){const o=a2[t[a]];if(o&&o(i,t))return}return e(i,...s)})},o2={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},l2=(e,t)=>{const r=e._withKeys||(e._withKeys={}),n=t.join(".");return r[n]||(r[n]=i=>{if(!("key"in i))return;const s=ii(i.key);if(t.some(a=>a===s||o2[a]===s))return e(i)})},u2=qt({patchProp:e2},Ox);let ep;function d2(){return ep||(ep=cx(u2))}const c2=(...e)=>{const t=d2().createApp(...e),{mount:r}=t;return t.mount=n=>{const i=p2(n);if(!i)return;const s=t._component;!He(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=r(i,!1,f2(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function f2(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function p2(e){return zt(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var so={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Dt=(e,t)=>({size:r,strokeWidth:n=2,absoluteStrokeWidth:i,color:s,class:a,...o},{attrs:l,slots:d})=>dd("svg",{...so,width:r||so.width,height:r||so.height,stroke:s||so.stroke,"stroke-width":i?Number(n)*24/Number(r):n,...l,class:["lucide",`lucide-${h2(e)}`],...o},[...t.map(f=>dd(...f)),...d.default?[d.default()]:[]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=Dt("CameraIcon",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
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
 */const ay=Dt("LayersIcon",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=Dt("Loader2Icon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=Dt("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=Dt("PaletteIcon",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=Dt("PlusCircleIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=Dt("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=Dt("PrinterIcon",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=Dt("RefreshCwIcon",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=Dt("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=Dt("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=Dt("ScissorsIcon",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=Dt("SparklesIcon",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=Dt("UploadCloudIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=Dt("UploadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=Dt("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=Dt("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=Dt("ZoomInIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=Dt("ZoomOutIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),I2=25.4,A2=300;function ms(e,t=A2){return Math.round(e/I2*t)}const Yl=[{id:"spec_1_inch",name:"标准 1 寸",widthMm:25,heightMm:35,widthPx:295,heightPx:413,description:"适用于驾照、体检表、普通证件、求职简历"},{id:"spec_large_1_inch",name:"大 1 寸",widthMm:33,heightMm:48,widthPx:390,heightPx:567,description:"适用于普通中国护照、港澳通行证、各类职业资格考试"},{id:"spec_2_inch",name:"标准 2 寸",widthMm:35,heightMm:49,widthPx:413,heightPx:579,description:"适用于各类证书、签证申请、学历学位证明"},{id:"spec_small_2_inch",name:"小 2 寸",widthMm:35,heightMm:45,widthPx:413,heightPx:531,description:"适用于东南亚签证、部分欧美申根签证"},{id:"spec_cet",name:"英语四六级 (CET)",widthMm:33,heightMm:48,widthPx:390,heightPx:567,description:"全国大学英语四、六级考试官方报名标准"},{id:"spec_teacher",name:"教师资格证 (NTCE)",widthMm:35,heightMm:53,widthPx:413,heightPx:626,description:"中小学教师资格考试网报标准尺寸"},{id:"spec_ncre",name:"计算机等级考试 (NCRE)",widthMm:25,heightMm:34,widthPx:300,heightPx:400,description:"全国计算机等级考试网报标准"},{id:"spec_civil_service",name:"国家公务员考试 (国考)",widthMm:35,heightMm:45,widthPx:413,heightPx:531,description:"中央机关及其直属机构公务员招考标准"}];function O2(e,t,r,n){let i=0,s=0,a=0,o=0;return i=t,s=r,a=ms(t),o=ms(r),{id:`custom_${Date.now()}`,name:e||`自定义 (${i}×${s}mm)`,widthMm:i,heightMm:s,widthPx:a,heightPx:o,description:`自定义尺寸 ${i}×${s} mm (${a}×${o} px)`,isCustom:!0}}const $n=[{id:"bg_white",name:"纯白底",value:"#FFFFFF",previewClass:"bg-white border border-gray-300"},{id:"bg_blue",name:"标准蓝",value:"#438EDB",previewClass:"bg-[#438EDB]"},{id:"bg_red",name:"中国红",value:"#D9001B",previewClass:"bg-[#D9001B]"},{id:"bg_light_blue",name:"浅天蓝",value:"#38BDF8",previewClass:"bg-[#38BDF8]"},{id:"bg_dark_blue",name:"深藏青",value:"#1E3A8A",previewClass:"bg-[#1E3A8A]"},{id:"bg_blue_grad",name:"冲印蓝",value:"linear-gradient(180deg, #60A5FA 0%, #1D4ED8 100%)",previewClass:"bg-gradient-to-b from-blue-400 to-blue-700",isGradient:!0,gradientStops:["#60A5FA","#1D4ED8"]},{id:"bg_gray_grad",name:"高级灰",value:"linear-gradient(180deg, #F3F4F6 0%, #9CA3AF 100%)",previewClass:"bg-gradient-to-b from-gray-100 to-gray-400",isGradient:!0,gradientStops:["#F3F4F6","#9CA3AF"]},{id:"bg_transparent",name:"消除背景 (透明)",value:"transparent",previewClass:"bg-transparent border-2 border-dashed border-gray-400"},{id:"bg_original",name:"原图背景",value:"original",previewClass:"bg-slate-700 border border-slate-600"}];function z2(e){return{id:`bg_custom_${e.replace("#","").toLowerCase()}`,name:"自定义",value:e.startsWith("#")?e:`#${e}`,previewClass:""}}const ao=[{id:"paper_6_inch",name:"6 寸照片纸 (横版 152×102mm)",widthMm:152,heightMm:102,widthPx:1795,heightPx:1205,description:"标准冲印 6 寸相纸 (4R)，最常用的家用相纸规格"},{id:"paper_6_inch_v",name:"6 寸照片纸 (竖版 102×152mm)",widthMm:102,heightMm:152,widthPx:1205,heightPx:1795,description:"标准冲印 6 寸相纸竖版"},{id:"paper_a4",name:"标准 A4 纸 (210×297mm)",widthMm:210,heightMm:297,widthPx:2480,heightPx:3508,description:"标准办公室 A4 打印纸 (300 DPI 高清输出)"}];var Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oy={};(function(){var e;function t(u){var m=0;return function(){return m<u.length?{done:!1,value:u[m++]}:{done:!0}}}var r=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zl=="object"&&Zl];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=n(this);function s(u,m){if(m)e:{var v=i;u=u.split(".");for(var k=0;k<u.length-1;k++){var z=u[k];if(!(z in v))break e;v=v[z]}u=u[u.length-1],k=v[u],m=m(k),m!=k&&m!=null&&r(v,u,{configurable:!0,writable:!0,value:m})}}s("Symbol",function(u){function m(B){if(this instanceof m)throw new TypeError("Symbol is not a constructor");return new v(k+(B||"")+"_"+z++,B)}function v(B,R){this.h=B,r(this,"description",{configurable:!0,writable:!0,value:R})}if(u)return u;v.prototype.toString=function(){return this.h};var k="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",z=0;return m}),s("Symbol.iterator",function(u){if(u)return u;u=Symbol("Symbol.iterator");for(var m="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),v=0;v<m.length;v++){var k=i[m[v]];typeof k=="function"&&typeof k.prototype[u]!="function"&&r(k.prototype,u,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return u});function a(u){return u={next:u},u[Symbol.iterator]=function(){return this},u}function o(u){var m=typeof Symbol<"u"&&Symbol.iterator&&u[Symbol.iterator];return m?m.call(u):{next:t(u)}}function l(u){if(!(u instanceof Array)){u=o(u);for(var m,v=[];!(m=u.next()).done;)v.push(m.value);u=v}return u}var d=typeof Object.assign=="function"?Object.assign:function(u,m){for(var v=1;v<arguments.length;v++){var k=arguments[v];if(k)for(var z in k)Object.prototype.hasOwnProperty.call(k,z)&&(u[z]=k[z])}return u};s("Object.assign",function(u){return u||d});var f=typeof Object.create=="function"?Object.create:function(u){function m(){}return m.prototype=u,new m},p;if(typeof Object.setPrototypeOf=="function")p=Object.setPrototypeOf;else{var g;e:{var b={a:!0},y={};try{y.__proto__=b,g=y.a;break e}catch{}g=!1}p=g?function(u,m){if(u.__proto__=m,u.__proto__!==m)throw new TypeError(u+" is not extensible");return u}:null}var x=p;function E(u,m){if(u.prototype=f(m.prototype),u.prototype.constructor=u,x)x(u,m);else for(var v in m)if(v!="prototype")if(Object.defineProperties){var k=Object.getOwnPropertyDescriptor(m,v);k&&Object.defineProperty(u,v,k)}else u[v]=m[v];u.za=m.prototype}function S(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function $(u){if(u.m)throw new TypeError("Generator is already running");u.m=!0}S.prototype.u=function(u){this.i=u};function A(u,m){u.l={ma:m,na:!0},u.h=u.s||u.v}S.prototype.return=function(u){this.l={return:u},this.h=this.v};function C(u,m,v){return u.h=v,{value:m}}function O(u){this.h=new S,this.i=u}function P(u,m){$(u.h);var v=u.h.j;return v?N(u,"return"in v?v.return:function(k){return{value:k,done:!0}},m,u.h.return):(u.h.return(m),T(u))}function N(u,m,v,k){try{var z=m.call(u.h.j,v);if(!(z instanceof Object))throw new TypeError("Iterator result "+z+" is not an object");if(!z.done)return u.h.m=!1,z;var B=z.value}catch(R){return u.h.j=null,A(u.h,R),T(u)}return u.h.j=null,k.call(u.h,B),T(u)}function T(u){for(;u.h.h;)try{var m=u.i(u.h);if(m)return u.h.m=!1,{value:m.value,done:!1}}catch(v){u.h.i=void 0,A(u.h,v)}if(u.h.m=!1,u.h.l){if(m=u.h.l,u.h.l=null,m.na)throw m.ma;return{value:m.return,done:!0}}return{value:void 0,done:!0}}function W(u){this.next=function(m){return $(u.h),u.h.j?m=N(u,u.h.j.next,m,u.h.u):(u.h.u(m),m=T(u)),m},this.throw=function(m){return $(u.h),u.h.j?m=N(u,u.h.j.throw,m,u.h.u):(A(u.h,m),m=T(u)),m},this.return=function(m){return P(u,m)},this[Symbol.iterator]=function(){return this}}function Y(u){function m(k){return u.next(k)}function v(k){return u.throw(k)}return new Promise(function(k,z){function B(R){R.done?k(R.value):Promise.resolve(R.value).then(m,v).then(B,z)}B(u.next())})}function de(u){return Y(new W(new O(u)))}s("Promise",function(u){function m(R){this.i=0,this.j=void 0,this.h=[],this.u=!1;var j=this.l();try{R(j.resolve,j.reject)}catch(G){j.reject(G)}}function v(){this.h=null}function k(R){return R instanceof m?R:new m(function(j){j(R)})}if(u)return u;v.prototype.i=function(R){if(this.h==null){this.h=[];var j=this;this.j(function(){j.m()})}this.h.push(R)};var z=i.setTimeout;v.prototype.j=function(R){z(R,0)},v.prototype.m=function(){for(;this.h&&this.h.length;){var R=this.h;this.h=[];for(var j=0;j<R.length;++j){var G=R[j];R[j]=null;try{G()}catch(ce){this.l(ce)}}}this.h=null},v.prototype.l=function(R){this.j(function(){throw R})},m.prototype.l=function(){function R(ce){return function(_e){G||(G=!0,ce.call(j,_e))}}var j=this,G=!1;return{resolve:R(this.I),reject:R(this.m)}},m.prototype.I=function(R){if(R===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(R instanceof m)this.L(R);else{e:switch(typeof R){case"object":var j=R!=null;break e;case"function":j=!0;break e;default:j=!1}j?this.F(R):this.s(R)}},m.prototype.F=function(R){var j=void 0;try{j=R.then}catch(G){this.m(G);return}typeof j=="function"?this.M(j,R):this.s(R)},m.prototype.m=function(R){this.v(2,R)},m.prototype.s=function(R){this.v(1,R)},m.prototype.v=function(R,j){if(this.i!=0)throw Error("Cannot settle("+R+", "+j+"): Promise already settled in state"+this.i);this.i=R,this.j=j,this.i===2&&this.K(),this.H()},m.prototype.K=function(){var R=this;z(function(){if(R.D()){var j=i.console;typeof j<"u"&&j.error(R.j)}},1)},m.prototype.D=function(){if(this.u)return!1;var R=i.CustomEvent,j=i.Event,G=i.dispatchEvent;return typeof G>"u"?!0:(typeof R=="function"?R=new R("unhandledrejection",{cancelable:!0}):typeof j=="function"?R=new j("unhandledrejection",{cancelable:!0}):(R=i.document.createEvent("CustomEvent"),R.initCustomEvent("unhandledrejection",!1,!0,R)),R.promise=this,R.reason=this.j,G(R))},m.prototype.H=function(){if(this.h!=null){for(var R=0;R<this.h.length;++R)B.i(this.h[R]);this.h=null}};var B=new v;return m.prototype.L=function(R){var j=this.l();R.T(j.resolve,j.reject)},m.prototype.M=function(R,j){var G=this.l();try{R.call(j,G.resolve,G.reject)}catch(ce){G.reject(ce)}},m.prototype.then=function(R,j){function G(Me,$e){return typeof Me=="function"?function(Pe){try{ce(Me(Pe))}catch(Ge){_e(Ge)}}:$e}var ce,_e,De=new m(function(Me,$e){ce=Me,_e=$e});return this.T(G(R,ce),G(j,_e)),De},m.prototype.catch=function(R){return this.then(void 0,R)},m.prototype.T=function(R,j){function G(){switch(ce.i){case 1:R(ce.j);break;case 2:j(ce.j);break;default:throw Error("Unexpected state: "+ce.i)}}var ce=this;this.h==null?B.i(G):this.h.push(G),this.u=!0},m.resolve=k,m.reject=function(R){return new m(function(j,G){G(R)})},m.race=function(R){return new m(function(j,G){for(var ce=o(R),_e=ce.next();!_e.done;_e=ce.next())k(_e.value).T(j,G)})},m.all=function(R){var j=o(R),G=j.next();return G.done?k([]):new m(function(ce,_e){function De(Pe){return function(Ge){Me[Pe]=Ge,$e--,$e==0&&ce(Me)}}var Me=[],$e=0;do Me.push(void 0),$e++,k(G.value).T(De(Me.length-1),_e),G=j.next();while(!G.done)})},m});function X(u,m){u instanceof String&&(u+="");var v=0,k=!1,z={next:function(){if(!k&&v<u.length){var B=v++;return{value:m(B,u[B]),done:!1}}return k=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}s("Array.prototype.keys",function(u){return u||function(){return X(this,function(m){return m})}}),s("Array.prototype.fill",function(u){return u||function(m,v,k){var z=this.length||0;for(0>v&&(v=Math.max(0,z+v)),(k==null||k>z)&&(k=z),k=Number(k),0>k&&(k=Math.max(0,z+k)),v=Number(v||0);v<k;v++)this[v]=m;return this}});function ue(u){return u||Array.prototype.fill}s("Int8Array.prototype.fill",ue),s("Uint8Array.prototype.fill",ue),s("Uint8ClampedArray.prototype.fill",ue),s("Int16Array.prototype.fill",ue),s("Uint16Array.prototype.fill",ue),s("Int32Array.prototype.fill",ue),s("Uint32Array.prototype.fill",ue),s("Float32Array.prototype.fill",ue),s("Float64Array.prototype.fill",ue),s("Object.is",function(u){return u||function(m,v){return m===v?m!==0||1/m===1/v:m!==m&&v!==v}}),s("Array.prototype.includes",function(u){return u||function(m,v){var k=this;k instanceof String&&(k=String(k));var z=k.length;for(v=v||0,0>v&&(v=Math.max(v+z,0));v<z;v++){var B=k[v];if(B===m||Object.is(B,m))return!0}return!1}}),s("String.prototype.includes",function(u){return u||function(m,v){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(m instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(m,v||0)!==-1}});var q=this||self;function ee(u,m){u=u.split(".");var v=q;u[0]in v||typeof v.execScript>"u"||v.execScript("var "+u[0]);for(var k;u.length&&(k=u.shift());)u.length||m===void 0?v[k]&&v[k]!==Object.prototype[k]?v=v[k]:v=v[k]={}:v[k]=m}function he(u){var m;e:{if((m=q.navigator)&&(m=m.userAgent))break e;m=""}return m.indexOf(u)!=-1}var ne=Array.prototype.map?function(u,m){return Array.prototype.map.call(u,m,void 0)}:function(u,m){for(var v=u.length,k=Array(v),z=typeof u=="string"?u.split(""):u,B=0;B<v;B++)B in z&&(k[B]=m.call(void 0,z[B],B,u));return k},fe={},oe=null;function Te(u){var m=u.length,v=3*m/4;v%3?v=Math.floor(v):"=.".indexOf(u[m-1])!=-1&&(v="=.".indexOf(u[m-2])!=-1?v-2:v-1);var k=new Uint8Array(v),z=0;return re(u,function(B){k[z++]=B}),z!==v?k.subarray(0,z):k}function re(u,m){function v(G){for(;k<u.length;){var ce=u.charAt(k++),_e=oe[ce];if(_e!=null)return _e;if(!/^[\s\xa0]*$/.test(ce))throw Error("Unknown base64 encoding at char: "+ce)}return G}xe();for(var k=0;;){var z=v(-1),B=v(0),R=v(64),j=v(64);if(j===64&&z===-1)break;m(z<<2|B>>4),R!=64&&(m(B<<4&240|R>>2),j!=64&&m(R<<6&192|j))}}function xe(){if(!oe){oe={};for(var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),m=["+/=","+/","-_=","-_.","-_"],v=0;5>v;v++){var k=u.concat(m[v].split(""));fe[v]=k;for(var z=0;z<k.length;z++){var B=k[z];oe[B]===void 0&&(oe[B]=z)}}}}var Se=typeof Uint8Array<"u",be=!(he("Trident")||he("MSIE"))&&typeof q.btoa=="function";function ht(u){if(!be){var m;m===void 0&&(m=0),xe(),m=fe[m];for(var v=Array(Math.floor(u.length/3)),k=m[64]||"",z=0,B=0;z<u.length-2;z+=3){var R=u[z],j=u[z+1],G=u[z+2],ce=m[R>>2];R=m[(R&3)<<4|j>>4],j=m[(j&15)<<2|G>>6],G=m[G&63],v[B++]=ce+R+j+G}switch(ce=0,G=k,u.length-z){case 2:ce=u[z+1],G=m[(ce&15)<<2]||k;case 1:u=u[z],v[B]=m[u>>2]+m[(u&3)<<4|ce>>4]+G+k}return v.join("")}for(m="";10240<u.length;)m+=String.fromCharCode.apply(null,u.subarray(0,10240)),u=u.subarray(10240);return m+=String.fromCharCode.apply(null,u),btoa(m)}var et=RegExp("[-_.]","g");function ot(u){switch(u){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function wt(u){if(!be)return Te(u);et.test(u)&&(u=u.replace(et,ot)),u=atob(u);for(var m=new Uint8Array(u.length),v=0;v<u.length;v++)m[v]=u.charCodeAt(v);return m}var qe;function dt(){return qe||(qe=new Uint8Array(0))}var M={},F=typeof Uint8Array.prototype.slice=="function",H=0,Z=0;function ie(u){var m=0>u;u=Math.abs(u);var v=u>>>0;u=Math.floor((u-v)/4294967296),m&&(v=o(ye(v,u)),m=v.next().value,u=v.next().value,v=m),H=v>>>0,Z=u>>>0}var ae=typeof BigInt=="function";function ye(u,m){return m=~m,u?u=~u+1:m+=1,[u,m]}function me(u,m){this.i=u>>>0,this.h=m>>>0}function ge(u){if(!u)return se||(se=new me(0,0));if(!/^-?\d+$/.test(u))return null;if(16>u.length)ie(Number(u));else if(ae)u=BigInt(u),H=Number(u&BigInt(4294967295))>>>0,Z=Number(u>>BigInt(32)&BigInt(4294967295));else{var m=+(u[0]==="-");Z=H=0;for(var v=u.length,k=m,z=(v-m)%6+m;z<=v;k=z,z+=6)k=Number(u.slice(k,z)),Z*=1e6,H=1e6*H+k,4294967296<=H&&(Z+=H/4294967296|0,H%=4294967296);m&&(m=o(ye(H,Z)),u=m.next().value,m=m.next().value,H=u,Z=m)}return new me(H,Z)}var se;function Ee(u,m){return Error("Invalid wire type: "+u+" (at position "+m+")")}function we(){return Error("Failed to read varint, encoding is invalid.")}function Oe(u,m){return Error("Tried to read past the end of the data "+m+" > "+u)}function ze(){throw Error("Invalid UTF8")}function je(u,m){return m=String.fromCharCode.apply(null,m),u==null?m:u+m}var Le=void 0,tt,yt=typeof TextDecoder<"u",St,Qt=typeof TextEncoder<"u",At;function Sr(u){if(u!==M)throw Error("illegal external caller")}function ur(u,m){if(Sr(m),this.V=u,u!=null&&u.length===0)throw Error("ByteString should be constructed with non-empty values")}function Mt(){return At||(At=new ur(null,M))}function Nt(u){Sr(M);var m=u.V;return m=m==null||Se&&m!=null&&m instanceof Uint8Array?m:typeof m=="string"?wt(m):null,m==null?m:u.V=m}function mr(u){if(typeof u=="string")return{buffer:wt(u),C:!1};if(Array.isArray(u))return{buffer:new Uint8Array(u),C:!1};if(u.constructor===Uint8Array)return{buffer:u,C:!1};if(u.constructor===ArrayBuffer)return{buffer:new Uint8Array(u),C:!1};if(u.constructor===ur)return{buffer:Nt(u)||dt(),C:!0};if(u instanceof Uint8Array)return{buffer:new Uint8Array(u.buffer,u.byteOffset,u.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function dr(u,m){this.i=null,this.m=!1,this.h=this.j=this.l=0,Ht(this,u,m)}function Ht(u,m,v){v=v===void 0?{}:v,u.S=v.S===void 0?!1:v.S,m&&(m=mr(m),u.i=m.buffer,u.m=m.C,u.l=0,u.j=u.i.length,u.h=u.l)}dr.prototype.reset=function(){this.h=this.l};function cr(u,m){if(u.h=m,m>u.j)throw Oe(u.j,m)}function Xr(u){var m=u.i,v=u.h,k=m[v++],z=k&127;if(k&128&&(k=m[v++],z|=(k&127)<<7,k&128&&(k=m[v++],z|=(k&127)<<14,k&128&&(k=m[v++],z|=(k&127)<<21,k&128&&(k=m[v++],z|=k<<28,k&128&&m[v++]&128&&m[v++]&128&&m[v++]&128&&m[v++]&128&&m[v++]&128)))))throw we();return cr(u,v),z}function hn(u,m){if(0>m)throw Error("Tried to read a negative byte length: "+m);var v=u.h,k=v+m;if(k>u.j)throw Oe(m,u.j-v);return u.h=k,v}var Ki=[];function Rn(){this.h=[]}Rn.prototype.length=function(){return this.h.length},Rn.prototype.end=function(){var u=this.h;return this.h=[],u};function ai(u,m,v){for(;0<v||127<m;)u.h.push(m&127|128),m=(m>>>7|v<<25)>>>0,v>>>=7;u.h.push(m)}function kr(u,m){for(;127<m;)u.h.push(m&127|128),m>>>=7;u.h.push(m)}function Bn(u,m){if(Ki.length){var v=Ki.pop();Ht(v,u,m),u=v}else u=new dr(u,m);this.h=u,this.j=this.h.h,this.i=this.l=-1,this.setOptions(m)}Bn.prototype.setOptions=function(u){u=u===void 0?{}:u,this.ca=u.ca===void 0?!1:u.ca},Bn.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function oi(u){var m=u.h;if(m.h==m.j)return!1;u.j=u.h.h;var v=Xr(u.h)>>>0;if(m=v>>>3,v&=7,!(0<=v&&5>=v))throw Ee(v,u.j);if(1>m)throw Error("Invalid field number: "+m+" (at position "+u.j+")");return u.l=m,u.i=v,!0}function te(u){switch(u.i){case 0:if(u.i!=0)te(u);else e:{u=u.h;for(var m=u.h,v=m+10,k=u.i;m<v;)if(!(k[m++]&128)){cr(u,m);break e}throw we()}break;case 1:u=u.h,cr(u,u.h+8);break;case 2:u.i!=2?te(u):(m=Xr(u.h)>>>0,u=u.h,cr(u,u.h+m));break;case 5:u=u.h,cr(u,u.h+4);break;case 3:m=u.l;do{if(!oi(u))throw Error("Unmatched start-group tag: stream EOF");if(u.i==4){if(u.l!=m)throw Error("Unmatched end-group tag");break}te(u)}while(!0);break;default:throw Ee(u.i,u.j)}}var L=[];function le(){this.j=[],this.i=0,this.h=new Rn}function Qe(u,m){m.length!==0&&(u.j.push(m),u.i+=m.length)}function Ut(u,m){if(m=m.R){Qe(u,u.h.end());for(var v=0;v<m.length;v++)Qe(u,Nt(m[v])||dt())}}var Rt=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Bt(u,m){return Rt?u[Rt]|=m:u.A!==void 0?u.A|=m:(Object.defineProperties(u,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}}),m)}function Tr(u,m){Rt?u[Rt]&&(u[Rt]&=~m):u.A!==void 0&&(u.A&=~m)}function mt(u){var m;return Rt?m=u[Rt]:m=u.A,m??0}function gr(u,m){Rt?u[Rt]=m:u.A!==void 0?u.A=m:Object.defineProperties(u,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}})}function Xi(u){return Bt(u,1),u}function wa(u,m){gr(m,(u|0)&-51)}function li(u,m){gr(m,(u|18)&-41)}var Yi={};function ui(u){return u!==null&&typeof u=="object"&&!Array.isArray(u)&&u.constructor===Object}var di,yr=[];gr(yr,23),di=Object.freeze(yr);function ci(u){if(mt(u.o)&2)throw Error("Cannot mutate an immutable Message")}function fi(u){var m=u.length;(m=m?u[m-1]:void 0)&&ui(m)?m.g=1:(m={},u.push((m.g=1,m)))}function mn(u){var m=u.i+u.G;return u.B||(u.B=u.o[m]={})}function Pt(u,m){return m===-1?null:m>=u.i?u.B?u.B[m]:void 0:u.o[m+u.G]}function br(u,m,v,k){ci(u),pi(u,m,v,k)}function pi(u,m,v,k){u.j&&(u.j=void 0),m>=u.i||k?mn(u)[m]=v:(u.o[m+u.G]=v,(u=u.B)&&m in u&&delete u[m])}function vs(u,m,v,k){var z=Pt(u,m);Array.isArray(z)||(z=di);var B=mt(z);if(B&1||Xi(z),k)B&2||Bt(z,2),v&1||Object.freeze(z);else{k=!(v&2);var R=B&2;v&1||!R?k&&B&16&&!R&&Tr(z,16):(z=Xi(Array.prototype.slice.call(z)),pi(u,m,z))}return z}function Zi(u,m){var v=Pt(u,m),k=v==null?v:typeof v=="number"||v==="NaN"||v==="Infinity"||v==="-Infinity"?Number(v):void 0;return k!=null&&k!==v&&pi(u,m,k),k}function Yr(u,m,v,k,z){u.h||(u.h={});var B=u.h[v],R=vs(u,v,3,z);if(!B){var j=R;B=[];var G=!!(mt(u.o)&16);R=!!(mt(j)&2);var ce=j;!z&&R&&(j=Array.prototype.slice.call(j));for(var _e=R,De=0;De<j.length;De++){var Me=j[De],$e=m,Pe=!1;if(Pe=Pe===void 0?!1:Pe,Me=Array.isArray(Me)?new $e(Me):Pe?new $e:void 0,Me!==void 0){$e=Me.o;var Ge=Pe=mt($e);R&&(Ge|=2),G&&(Ge|=16),Ge!=Pe&&gr($e,Ge),$e=Ge,_e=_e||!!(2&$e),B.push(Me)}}return u.h[v]=B,G=mt(j),m=G|33,m=_e?m&-9:m|8,G!=m&&(_e=j,Object.isFrozen(_e)&&(_e=Array.prototype.slice.call(_e)),gr(_e,m),j=_e),ce!==j&&pi(u,v,j),(z||k&&R)&&Bt(B,2),k&&Object.freeze(B),B}return z||(z=Object.isFrozen(B),k&&!z?Object.freeze(B):!k&&z&&(B=Array.prototype.slice.call(B),u.h[v]=B)),B}function hi(u,m,v){var k=!!(mt(u.o)&2);if(m=Yr(u,m,v,k,k),u=vs(u,v,3,k),!(k||mt(u)&8)){for(k=0;k<m.length;k++){if(v=m[k],mt(v.o)&2){var z=$a(v,!1);z.j=v}else z=v;v!==z&&(m[k]=z,u[k]=z.o)}Bt(u,8)}return m}function Ot(u,m,v){if(v!=null&&typeof v!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof v+": "+v);br(u,m,v)}function fr(u,m,v,k,z){ci(u);var B=Yr(u,v,m,!1,!1);return v=k??new v,u=vs(u,m,2,!1),z!=null?(B.splice(z,0,v),u.splice(z,0,v.o)):(B.push(v),u.push(v.o)),v.C()&&Tr(u,8),v}function Pn(u,m){return u??m}function Cr(u,m,v){return v=v===void 0?0:v,Pn(Zi(u,m),v)}var Qi;function ul(u){switch(typeof u){case"number":return isFinite(u)?u:String(u);case"object":if(u)if(Array.isArray(u)){if(mt(u)&128)return u=Array.prototype.slice.call(u),fi(u),u}else{if(Se&&u!=null&&u instanceof Uint8Array)return ht(u);if(u instanceof ur){var m=u.V;return m==null?"":typeof m=="string"?m:u.V=ht(m)}}}return u}function _a(u,m,v,k){if(u!=null){if(Array.isArray(u))u=ws(u,m,v,k!==void 0);else if(ui(u)){var z={},B;for(B in u)z[B]=_a(u[B],m,v,k);u=z}else u=m(u,k);return u}}function ws(u,m,v,k){var z=mt(u);k=k?!!(z&16):void 0,u=Array.prototype.slice.call(u);for(var B=0;B<u.length;B++)u[B]=_a(u[B],m,v,k);return v(z,u),u}function dl(u){return u.ja===Yi?u.toJSON():ul(u)}function Zr(u,m){u&128&&fi(m)}function mi(u,m,v){if(v=v===void 0?li:v,u!=null){if(Se&&u instanceof Uint8Array)return u.length?new ur(new Uint8Array(u),M):Mt();if(Array.isArray(u)){var k=mt(u);return k&2?u:m&&!(k&32)&&(k&16||k===0)?(gr(u,k|2),u):(u=ws(u,mi,k&4?li:v,!0),m=mt(u),m&4&&m&2&&Object.freeze(u),u)}return u.ja===Yi?_s(u):u}}function xa(u,m,v,k,z,B,R){if(u=u.h&&u.h[v]){if(k=mt(u),k&2?k=u:(B=ne(u,_s),li(k,B),Object.freeze(B),k=B),ci(m),R=k==null?di:Xi([]),k!=null){for(B=!!k.length,u=0;u<k.length;u++){var j=k[u];B=B&&!(mt(j.o)&2),R[u]=j.o}B=(B?8:0)|1,u=mt(R),(u&B)!==B&&(Object.isFrozen(R)&&(R=Array.prototype.slice.call(R)),gr(R,u|B)),m.h||(m.h={}),m.h[v]=k}else m.h&&(m.h[v]=void 0);pi(m,v,R,z)}else br(m,v,mi(k,B,R),z)}function _s(u){return mt(u.o)&2||(u=$a(u,!0),Bt(u.o,2)),u}function $a(u,m){var v=u.o,k=[];Bt(k,16);var z=u.constructor.h;if(z&&k.push(z),z=u.B,z){k.length=v.length,k.fill(void 0,k.length,v.length);var B={};k[k.length-1]=B}mt(v)&128&&fi(k),m=m||u.C()?li:wa,B=u.constructor,Qi=k,k=new B(k),Qi=void 0,u.R&&(k.R=u.R.slice()),B=!!(mt(v)&16);for(var R=z?v.length-1:v.length,j=0;j<R;j++)xa(u,k,j-u.G,v[j],!1,B,m);if(z)for(var G in z)xa(u,k,+G,z[G],!0,B,m);return k}function Jt(u,m,v){u==null&&(u=Qi),Qi=void 0;var k=this.constructor.i||0,z=0<k,B=this.constructor.h,R=!1;if(u==null){u=B?[B]:[];var j=48,G=!0;z&&(k=0,j|=128),gr(u,j)}else{if(!Array.isArray(u)||B&&B!==u[0])throw Error();var ce=j=Bt(u,0);if((G=(16&ce)!==0)&&((R=(32&ce)!==0)||(ce|=32)),z){if(128&ce)k=0;else if(0<u.length){var _e=u[u.length-1];if(ui(_e)&&"g"in _e){k=0,ce|=128,delete _e.g;var De=!0,Me;for(Me in _e){De=!1;break}De&&u.pop()}}}else if(128&ce)throw Error();j!==ce&&gr(u,ce)}this.G=(B?0:-1)-k,this.h=void 0,this.o=u;e:{if(B=this.o.length,k=B-1,B&&(B=this.o[k],ui(B))){this.B=B,this.i=k-this.G;break e}m!==void 0&&-1<m?(this.i=Math.max(m,k+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!z&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(v){m=G&&!R&&!0,z=this.i;var $e;for(G=0;G<v.length;G++)R=v[G],R<z?(R+=this.G,(k=u[R])?Sa(k,m):u[R]=di):($e||($e=mn(this)),(k=$e[R])?Sa(k,m):$e[R]=di)}}Jt.prototype.toJSON=function(){return ws(this.o,dl,Zr)},Jt.prototype.C=function(){return!!(mt(this.o)&2)};function Sa(u,m){if(Array.isArray(u)){var v=mt(u),k=1;!m||v&2||(k|=16),(v&k)!==k&&gr(u,v|k)}}Jt.prototype.ja=Yi,Jt.prototype.toString=function(){return this.o.toString()};function ka(u,m,v){if(v){var k={},z;for(z in v){var B=v[z],R=B.ra;R||(k.J=B.xa||B.oa.W,B.ia?(k.aa=yi(B.ia),R=function(j){return function(G,ce,_e){return j.J(G,ce,_e,j.aa)}}(k)):B.ka?(k.Z=Ia(B.da.P,B.ka),R=function(j){return function(G,ce,_e){return j.J(G,ce,_e,j.Z)}}(k)):R=k.J,B.ra=R),R(m,u,B.da),k={J:k.J,aa:k.aa,Z:k.Z}}}Ut(m,u)}var Ji=Symbol();function Ta(u,m,v){return u[Ji]||(u[Ji]=function(k,z){return m(k,z,v)})}function Ca(u){var m=u[Ji];if(!m){var v=vi(u);m=function(k,z){return xs(k,z,v)},u[Ji]=m}return m}function cl(u){var m=u.ia;if(m)return Ca(m);if(m=u.wa)return Ta(u.da.P,m,u.ka)}function fl(u){var m=cl(u),v=u.da,k=u.oa.U;return m?function(z,B){return k(z,B,v,m)}:function(z,B){return k(z,B,v)}}function gi(u,m){var v=u[m];return typeof v=="function"&&v.length===0&&(v=v(),u[m]=v),Array.isArray(v)&&(bi in v||gn in v||0<v.length&&typeof v[0]=="function")?v:void 0}function Ea(u,m,v,k,z,B){m.P=u[0];var R=1;if(u.length>R&&typeof u[R]!="number"){var j=u[R++];v(m,j)}for(;R<u.length;){v=u[R++];for(var G=R+1;G<u.length&&typeof u[G]!="number";)G++;switch(j=u[R++],G-=R,G){case 0:k(m,v,j);break;case 1:(G=gi(u,R))?(R++,z(m,v,j,G)):k(m,v,j,u[R++]);break;case 2:G=R++,G=gi(u,G),z(m,v,j,G,u[R++]);break;case 3:B(m,v,j,u[R++],u[R++],u[R++]);break;case 4:B(m,v,j,u[R++],u[R++],u[R++],u[R++]);break;default:throw Error("unexpected number of binary field arguments: "+G)}}return m}var Dn=Symbol();function yi(u){var m=u[Dn];if(!m){var v=Nn(u);m=function(k,z){return $s(k,z,v)},u[Dn]=m}return m}function Ia(u,m){var v=u[Dn];return v||(v=function(k,z){return ka(k,z,m)},u[Dn]=v),v}var gn=Symbol();function pl(u,m){u.push(m)}function hl(u,m,v){u.push(m,v.W)}function ml(u,m,v,k){var z=yi(k),B=Nn(k).P,R=v.W;u.push(m,function(j,G,ce){return R(j,G,ce,B,z)})}function gl(u,m,v,k,z,B){var R=Ia(k,B),j=v.W;u.push(m,function(G,ce,_e){return j(G,ce,_e,k,R)})}function Nn(u){var m=u[gn];return m||(m=Ea(u,u[gn]=[],pl,hl,ml,gl),bi in u&&gn in u&&(u.length=0),m)}var bi=Symbol();function Qr(u,m){u[0]=m}function Er(u,m,v,k){var z=v.U;u[m]=k?function(B,R,j){return z(B,R,j,k)}:z}function Aa(u,m,v,k,z){var B=v.U,R=Ca(k),j=vi(k).P;u[m]=function(G,ce,_e){return B(G,ce,_e,j,R,z)}}function es(u,m,v,k,z,B,R){var j=v.U,G=Ta(k,z,B);u[m]=function(ce,_e,De){return j(ce,_e,De,k,G,R)}}function vi(u){var m=u[bi];return m||(m=Ea(u,u[bi]={},Qr,Er,Aa,es),bi in u&&gn in u&&(u.length=0),m)}function xs(u,m,v){for(;oi(m)&&m.i!=4;){var k=m.l,z=v[k];if(!z){var B=v[0];B&&(B=B[k])&&(z=v[k]=fl(B))}if(!z||!z(m,u,k)){z=m,k=u,B=z.j,te(z);var R=z;if(!R.ca){if(z=R.h.h-B,R.h.h=B,R=R.h,z==0)z=Mt();else{if(B=hn(R,z),R.S&&R.m)z=R.i.subarray(B,B+z);else{R=R.i;var j=B;z=B+z,z=j===z?dt():F?R.slice(j,z):new Uint8Array(R.subarray(j,z))}z=z.length==0?Mt():new ur(z,M)}(B=k.R)?B.push(z):k.R=[z]}}}return u}function $s(u,m,v){for(var k=v.length,z=k%2==1,B=z?1:0;B<k;B+=2)(0,v[B+1])(m,u,v[B]);ka(u,m,z?v[0]:void 0)}function wi(u,m){return{U:u,W:m}}var nr=wi(function(u,m,v){if(u.i!==5)return!1;u=u.h;var k=u.i,z=u.h,B=k[z],R=k[z+1],j=k[z+2];return k=k[z+3],cr(u,u.h+4),R=(B<<0|R<<8|j<<16|k<<24)>>>0,u=2*(R>>31)+1,B=R>>>23&255,R&=8388607,br(m,v,B==255?R?NaN:1/0*u:B==0?u*Math.pow(2,-149)*R:u*Math.pow(2,B-150)*(R+Math.pow(2,23))),!0},function(u,m,v){if(m=Zi(m,v),m!=null){kr(u.h,8*v+5),u=u.h;var k=+m;k===0?0<1/k?H=Z=0:(Z=0,H=2147483648):isNaN(k)?(Z=0,H=2147483647):(k=(v=0>k?-2147483648:0)?-k:k,34028234663852886e22<k?(Z=0,H=(v|2139095040)>>>0):11754943508222875e-54>k?(k=Math.round(k/Math.pow(2,-149)),Z=0,H=(v|k)>>>0):(m=Math.floor(Math.log(k)/Math.LN2),k*=Math.pow(2,-m),k=Math.round(8388608*k),16777216<=k&&++m,Z=0,H=(v|m+127<<23|k&8388607)>>>0)),v=H,u.h.push(v>>>0&255),u.h.push(v>>>8&255),u.h.push(v>>>16&255),u.h.push(v>>>24&255)}}),yl=wi(function(u,m,v){if(u.i!==0)return!1;var k=u.h,z=0,B=u=0,R=k.i,j=k.h;do{var G=R[j++];z|=(G&127)<<B,B+=7}while(32>B&&G&128);for(32<B&&(u|=(G&127)>>4),B=3;32>B&&G&128;B+=7)G=R[j++],u|=(G&127)<<B;if(cr(k,j),128>G)k=z>>>0,G=u>>>0,(u=G&2147483648)&&(k=~k+1>>>0,G=~G>>>0,k==0&&(G=G+1>>>0)),k=4294967296*G+(k>>>0);else throw we();return br(m,v,u?-k:k),!0},function(u,m,v){m=Pt(m,v),m!=null&&(typeof m=="string"&&ge(m),m!=null&&(kr(u.h,8*v),typeof m=="number"?(u=u.h,ie(m),ai(u,H,Z)):(v=ge(m),ai(u.h,v.i,v.h))))}),Oa=wi(function(u,m,v){return u.i!==0?!1:(br(m,v,Xr(u.h)),!0)},function(u,m,v){if(m=Pt(m,v),m!=null&&m!=null)if(kr(u.h,8*v),u=u.h,v=m,0<=v)kr(u,v);else{for(m=0;9>m;m++)u.h.push(v&127|128),v>>=7;u.h.push(1)}}),za=wi(function(u,m,v){if(u.i!==2)return!1;var k=Xr(u.h)>>>0;u=u.h;var z=hn(u,k);if(u=u.i,yt){var B=u,R;(R=tt)||(R=tt=new TextDecoder("utf-8",{fatal:!0})),u=z+k,B=z===0&&u===B.length?B:B.subarray(z,u);try{var j=R.decode(B)}catch(De){if(Le===void 0){try{R.decode(new Uint8Array([128]))}catch{}try{R.decode(new Uint8Array([97])),Le=!0}catch{Le=!1}}throw!Le&&(tt=void 0),De}}else{j=z,k=j+k,z=[];for(var G=null,ce,_e;j<k;)ce=u[j++],128>ce?z.push(ce):224>ce?j>=k?ze():(_e=u[j++],194>ce||(_e&192)!==128?(j--,ze()):z.push((ce&31)<<6|_e&63)):240>ce?j>=k-1?ze():(_e=u[j++],(_e&192)!==128||ce===224&&160>_e||ce===237&&160<=_e||((B=u[j++])&192)!==128?(j--,ze()):z.push((ce&15)<<12|(_e&63)<<6|B&63)):244>=ce?j>=k-2?ze():(_e=u[j++],(_e&192)!==128||(ce<<28)+(_e-144)>>30||((B=u[j++])&192)!==128||((R=u[j++])&192)!==128?(j--,ze()):(ce=(ce&7)<<18|(_e&63)<<12|(B&63)<<6|R&63,ce-=65536,z.push((ce>>10&1023)+55296,(ce&1023)+56320))):ze(),8192<=z.length&&(G=je(G,z),z.length=0);j=je(G,z)}return br(m,v,j),!0},function(u,m,v){if(m=Pt(m,v),m!=null){var k=!1;if(k=k===void 0?!1:k,Qt){if(k&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(m))throw Error("Found an unpaired surrogate");m=(St||(St=new TextEncoder)).encode(m)}else{for(var z=0,B=new Uint8Array(3*m.length),R=0;R<m.length;R++){var j=m.charCodeAt(R);if(128>j)B[z++]=j;else{if(2048>j)B[z++]=j>>6|192;else{if(55296<=j&&57343>=j){if(56319>=j&&R<m.length){var G=m.charCodeAt(++R);if(56320<=G&&57343>=G){j=1024*(j-55296)+G-56320+65536,B[z++]=j>>18|240,B[z++]=j>>12&63|128,B[z++]=j>>6&63|128,B[z++]=j&63|128;continue}else R--}if(k)throw Error("Found an unpaired surrogate");j=65533}B[z++]=j>>12|224,B[z++]=j>>6&63|128}B[z++]=j&63|128}}m=z===B.length?B:B.subarray(0,z)}kr(u.h,8*v+2),kr(u.h,m.length),Qe(u,u.h.end()),Qe(u,m)}}),ts=wi(function(u,m,v,k,z){if(u.i!==2)return!1;m=fr(m,v,k),v=u.h.j,k=Xr(u.h)>>>0;var B=u.h.h+k,R=B-v;if(0>=R&&(u.h.j=B,z(m,u,void 0,void 0,void 0),R=B-u.h.h),R)throw Error("Message parsing ended unexpectedly. Expected to read "+(k+" bytes, instead read "+(k-R)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return u.h.h=B,u.h.j=v,!0},function(u,m,v,k,z){if(m=hi(m,k,v),m!=null)for(k=0;k<m.length;k++){var B=u;kr(B.h,8*v+2);var R=B.h.end();Qe(B,R),R.push(B.i),B=R,z(m[k],u),R=u;var j=B.pop();for(j=R.i+R.h.length()-j;127<j;)B.push(j&127|128),j>>>=7,R.i++;B.push(j),R.i++}});function Ss(u){return function(m,v){e:{if(L.length){var k=L.pop();k.setOptions(v),Ht(k.h,m,v),m=k}else m=new Bn(m,v);try{var z=vi(u),B=xs(new z.P,m,z);break e}finally{z=m.h,z.i=null,z.m=!1,z.l=0,z.j=0,z.h=0,z.S=!1,m.l=-1,m.i=-1,100>L.length&&L.push(m)}B=void 0}return B}}function ks(u){return function(){var m=new le;$s(this,m,Nn(u)),Qe(m,m.h.end());for(var v=new Uint8Array(m.i),k=m.j,z=k.length,B=0,R=0;R<z;R++){var j=k[R];v.set(j,B),B+=j.length}return m.j=[v],v}}function Un(u){Jt.call(this,u)}E(Un,Jt);var Ma=[Un,1,Oa,2,nr,3,za,4,za];Un.prototype.l=ks(Ma);function Ln(u){Jt.call(this,u,-1,bl)}E(Ln,Jt),Ln.prototype.addClassification=function(u,m){return fr(this,1,Un,u,m),this};var bl=[1],vl=Ss([Ln,1,ts,Ma]);function _i(u){Jt.call(this,u)}E(_i,Jt);var Ra=[_i,1,nr,2,nr,3,nr,4,nr,5,nr];_i.prototype.l=ks(Ra);function Ba(u){Jt.call(this,u,-1,wl)}E(Ba,Jt);var wl=[1],Pa=Ss([Ba,1,ts,Ra]);function rs(u){Jt.call(this,u)}E(rs,Jt);var Da=[rs,1,nr,2,nr,3,nr,4,nr,5,nr,6,yl],_l=Ss(Da);rs.prototype.l=ks(Da);function Na(u,m,v){if(v=u.createShader(v===0?u.VERTEX_SHADER:u.FRAGMENT_SHADER),u.shaderSource(v,m),u.compileShader(v),!u.getShaderParameter(v,u.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+u.getShaderInfoLog(v));return v}function xl(u){return hi(u,Un,1).map(function(m){var v=Pt(m,1);return{index:v??0,qa:Cr(m,2),label:Pt(m,3)!=null?Pn(Pt(m,3),""):void 0,displayName:Pt(m,4)!=null?Pn(Pt(m,4),""):void 0}})}function $l(u){return{x:Cr(u,1),y:Cr(u,2),z:Cr(u,3),visibility:Zi(u,4)!=null?Cr(u,4):void 0}}function Ts(u,m){this.i=u,this.h=m,this.m=0}function Ua(u,m,v){return La(u,m),typeof u.h.canvas.transferToImageBitmap=="function"?Promise.resolve(u.h.canvas.transferToImageBitmap()):v?Promise.resolve(u.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(u.h.canvas):(u.j===void 0&&(u.j=document.createElement("canvas")),new Promise(function(k){u.j.height=u.h.canvas.height,u.j.width=u.h.canvas.width,u.j.getContext("2d",{}).drawImage(u.h.canvas,0,0,u.h.canvas.width,u.h.canvas.height),k(u.j)}))}function La(u,m){var v=u.h;if(u.s===void 0){var k=Na(v,`
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

`+v.getProgramInfoLog(B));k=u.s=B,v.useProgram(k),z=v.getUniformLocation(k,"sampler0"),u.l={O:v.getAttribLocation(k,"aVertex"),N:v.getAttribLocation(k,"aTex"),ya:z},u.v=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,u.v),v.enableVertexAttribArray(u.l.O),v.vertexAttribPointer(u.l.O,2,v.FLOAT,!1,0,0),v.bufferData(v.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),v.STATIC_DRAW),v.bindBuffer(v.ARRAY_BUFFER,null),u.u=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,u.u),v.enableVertexAttribArray(u.l.N),v.vertexAttribPointer(u.l.N,2,v.FLOAT,!1,0,0),v.bufferData(v.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),v.STATIC_DRAW),v.bindBuffer(v.ARRAY_BUFFER,null),v.uniform1i(z,0)}k=u.l,v.useProgram(u.s),v.canvas.width=m.width,v.canvas.height=m.height,v.viewport(0,0,m.width,m.height),v.activeTexture(v.TEXTURE0),u.i.bindTexture2d(m.glName),v.enableVertexAttribArray(k.O),v.bindBuffer(v.ARRAY_BUFFER,u.v),v.vertexAttribPointer(k.O,2,v.FLOAT,!1,0,0),v.enableVertexAttribArray(k.N),v.bindBuffer(v.ARRAY_BUFFER,u.u),v.vertexAttribPointer(k.N,2,v.FLOAT,!1,0,0),v.bindFramebuffer(v.DRAW_FRAMEBUFFER?v.DRAW_FRAMEBUFFER:v.FRAMEBUFFER,null),v.clearColor(0,0,0,0),v.clear(v.COLOR_BUFFER_BIT),v.colorMask(!0,!0,!0,!0),v.drawArrays(v.TRIANGLE_FAN,0,4),v.disableVertexAttribArray(k.O),v.disableVertexAttribArray(k.N),v.bindBuffer(v.ARRAY_BUFFER,null),u.i.bindTexture2d(0)}function Fa(u){this.h=u}var ja=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Sl(u,m){return m+u}function Va(u,m){window[u]=m}function Wa(u){var m=document.createElement("script");return m.setAttribute("src",u),m.setAttribute("crossorigin","anonymous"),new Promise(function(v){m.addEventListener("load",function(){v()},!1),m.addEventListener("error",function(){v()},!1),document.body.appendChild(m)})}function qa(){return de(function(u){switch(u.h){case 1:return u.s=2,C(u,WebAssembly.instantiate(ja),4);case 4:u.h=3,u.s=0;break;case 2:return u.s=0,u.l=null,u.return(!1);case 3:return u.return(!0)}})}function yn(u){if(this.h=u,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=u&&u.locateFile||Sl,typeof window=="object")var m=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")m=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=m,u.options){m=o(Object.keys(u.options));for(var v=m.next();!v.done;v=m.next()){v=v.value;var k=u.options[v].default;k!==void 0&&(this.l[v]=typeof k=="function"?k():k)}}}e=yn.prototype,e.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function kl(u){var m,v,k,z,B,R,j,G,ce,_e,De;return de(function(Me){switch(Me.h){case 1:return u.ga?(m=u.h.files===void 0?[]:typeof u.h.files=="function"?u.h.files(u.l):u.h.files,C(Me,qa(),2)):Me.return();case 2:if(v=Me.i,typeof window=="object")return Va("createMediapipeSolutionsWasm",{locateFile:u.locateFile}),Va("createMediapipeSolutionsPackedAssets",{locateFile:u.locateFile}),R=m.filter(function($e){return $e.data!==void 0}),j=m.filter(function($e){return $e.data===void 0}),G=Promise.all(R.map(function($e){var Pe=ns(u,$e.url);if($e.path!==void 0){var Ge=$e.path;Pe=Pe.then(function(_t){return u.overrideFile(Ge,_t),Promise.resolve(_t)})}return Pe})),ce=Promise.all(j.map(function($e){return $e.simd===void 0||$e.simd&&v||!$e.simd&&!v?Wa(u.locateFile($e.url,u.ha)):Promise.resolve()})).then(function(){var $e,Pe,Ge;return de(function(_t){if(_t.h==1)return $e=window.createMediapipeSolutionsWasm,Pe=window.createMediapipeSolutionsPackedAssets,Ge=u,C(_t,$e(Pe),2);Ge.i=_t.i,_t.h=0})}),_e=function(){return de(function($e){return u.h.graph&&u.h.graph.url?$e=C($e,ns(u,u.h.graph.url),0):($e.h=0,$e=void 0),$e})}(),C(Me,Promise.all([ce,G,_e]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return k=m.filter(function($e){return $e.simd===void 0||$e.simd&&v||!$e.simd&&!v}).map(function($e){return u.locateFile($e.url,u.ha)}),importScripts.apply(null,l(k)),z=u,C(Me,createMediapipeSolutionsWasm(Module),6);case 6:z.i=Me.i,u.m=new OffscreenCanvas(1,1),u.i.canvas=u.m,B=u.i.GL.createContext(u.m,{antialias:!1,alpha:!1,va:typeof WebGL2RenderingContext<"u"?2:1}),u.i.GL.makeContextCurrent(B),Me.h=4;break;case 7:if(u.m=document.createElement("canvas"),De=u.m.getContext("webgl2",{}),!De&&(De=u.m.getContext("webgl",{}),!De))return alert("Failed to create WebGL canvas context when passing video frame."),Me.return();u.K=De,u.i.canvas=u.m,u.i.createContext(u.m,!0,!0,{});case 4:u.j=new u.i.SolutionWasm,u.ga=!1,Me.h=0}})}function Ha(u){var m,v,k,z,B,R,j,G;return de(function(ce){if(ce.h==1){if(u.h.graph&&u.h.graph.url&&u.fa===u.h.graph.url)return ce.return();if(u.u=!0,!u.h.graph||!u.h.graph.url){ce.h=2;return}return u.fa=u.h.graph.url,C(ce,ns(u,u.h.graph.url),3)}for(ce.h!=2&&(m=ce.i,u.j.loadGraph(m)),v=o(Object.keys(u.D)),k=v.next();!k.done;k=v.next())z=k.value,u.j.overrideFile(z,u.D[z]);if(u.D={},u.h.listeners)for(B=o(u.h.listeners),R=B.next();!R.done;R=B.next())j=R.value,Ga(u,j);G=u.l,u.l={},u.setOptions(G),ce.h=0})}e.reset=function(){var u=this;return de(function(m){u.j&&(u.j.reset(),u.s={},u.v={}),m.h=0})},e.setOptions=function(u,m){var v=this;if(m=m||this.h.options){for(var k=[],z=[],B={},R=o(Object.keys(u)),j=R.next();!j.done;B={X:B.X,Y:B.Y},j=R.next())if(j=j.value,!(j in this.l&&this.l[j]===u[j])){this.l[j]=u[j];var G=m[j];G!==void 0&&(G.onChange&&(B.X=G.onChange,B.Y=u[j],k.push(function(ce){return function(){var _e;return de(function(De){if(De.h==1)return C(De,ce.X(ce.Y),2);_e=De.i,_e===!0&&(v.u=!0),De.h=0})}}(B))),G.graphOptionXref&&(j=Object.assign({},{calculatorName:"",calculatorIndex:0},G.graphOptionXref,{valueNumber:G.type===1?u[j]:0,valueBoolean:G.type===0?u[j]:!1,valueString:G.type===2?u[j]:""}),z.push(j)))}(k.length!==0||z.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(z),this.F=(this.F===void 0?[]:this.F).concat(k))}};function Tl(u){var m,v,k,z,B,R,j;return de(function(G){switch(G.h){case 1:if(!u.u)return G.return();if(!u.F){G.h=2;break}m=o(u.F),v=m.next();case 3:if(v.done){G.h=5;break}return k=v.value,C(G,k(),4);case 4:v=m.next(),G.h=3;break;case 5:u.F=void 0;case 2:if(u.H){for(z=new u.i.GraphOptionChangeRequestList,B=o(u.H),R=B.next();!R.done;R=B.next())j=R.value,z.push_back(j);u.j.changeOptions(z),z.delete(),u.H=void 0}u.u=!1,G.h=0}})}e.initialize=function(){var u=this;return de(function(m){return m.h==1?C(m,kl(u),2):m.h!=3?C(m,Ha(u),3):C(m,Tl(u),0)})};function ns(u,m){var v,k;return de(function(z){return m in u.L?z.return(u.L[m]):(v=u.locateFile(m,""),k=fetch(v).then(function(B){return B.arrayBuffer()}),u.L[m]=k,z.return(k))})}e.overrideFile=function(u,m){this.j?this.j.overrideFile(u,m):this.D[u]=m},e.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},e.send=function(u,m){var v=this,k,z,B,R,j,G,ce,_e,De;return de(function(Me){switch(Me.h){case 1:return v.h.inputs?(k=1e3*(m??performance.now()),C(Me,v.I,2)):Me.return();case 2:return C(Me,v.initialize(),3);case 3:for(z=new v.i.PacketDataList,B=o(Object.keys(u)),R=B.next();!R.done;R=B.next())if(j=R.value,G=v.h.inputs[j]){e:{var $e=u[j];switch(G.type){case"video":var Pe=v.s[G.stream];if(Pe||(Pe=new Ts(v.i,v.K),v.s[G.stream]=Pe),Pe.m===0&&(Pe.m=Pe.i.createTexture()),typeof HTMLVideoElement<"u"&&$e instanceof HTMLVideoElement)var Ge=$e.videoWidth,_t=$e.videoHeight;else typeof HTMLImageElement<"u"&&$e instanceof HTMLImageElement?(Ge=$e.naturalWidth,_t=$e.naturalHeight):(Ge=$e.width,_t=$e.height);_t={glName:Pe.m,width:Ge,height:_t},Ge=Pe.h,Ge.canvas.width=_t.width,Ge.canvas.height=_t.height,Ge.activeTexture(Ge.TEXTURE0),Pe.i.bindTexture2d(Pe.m),Ge.texImage2D(Ge.TEXTURE_2D,0,Ge.RGBA,Ge.RGBA,Ge.UNSIGNED_BYTE,$e),Pe.i.bindTexture2d(0),Pe=_t;break e;case"detections":for(Pe=v.s[G.stream],Pe||(Pe=new Fa(v.i),v.s[G.stream]=Pe),Pe.data||(Pe.data=new Pe.h.DetectionListData),Pe.data.reset($e.length),_t=0;_t<$e.length;++_t){Ge=$e[_t];var bt=Pe.data,Lt=bt.setBoundingBox,ir=_t,Yt=Ge.la,lt=new rs;if(Ot(lt,1,Yt.sa),Ot(lt,2,Yt.ta),Ot(lt,3,Yt.height),Ot(lt,4,Yt.width),Ot(lt,5,Yt.rotation),br(lt,6,Yt.pa),Yt=lt.l(),Lt.call(bt,ir,Yt),Ge.ea)for(bt=0;bt<Ge.ea.length;++bt){lt=Ge.ea[bt],Lt=Pe.data,ir=Lt.addNormalizedLandmark,Yt=_t,lt=Object.assign({},lt,{visibility:lt.visibility?lt.visibility:0});var Ft=new _i;Ot(Ft,1,lt.x),Ot(Ft,2,lt.y),Ot(Ft,3,lt.z),lt.visibility&&Ot(Ft,4,lt.visibility),lt=Ft.l(),ir.call(Lt,Yt,lt)}if(Ge.ba)for(bt=0;bt<Ge.ba.length;++bt)Lt=Pe.data,ir=Lt.addClassification,Yt=_t,lt=Ge.ba[bt],Ft=new Un,Ot(Ft,2,lt.qa),lt.index&&br(Ft,1,lt.index),lt.label&&br(Ft,3,lt.label),lt.displayName&&br(Ft,4,lt.displayName),lt=Ft.l(),ir.call(Lt,Yt,lt)}Pe=Pe.data;break e;default:Pe={}}}switch(ce=Pe,_e=G.stream,G.type){case"video":z.pushTexture2d(Object.assign({},ce,{stream:_e,timestamp:k}));break;case"detections":De=ce,De.stream=_e,De.timestamp=k,z.pushDetectionList(De);break;default:throw Error("Unknown input config type: '"+G.type+"'")}}return v.j.send(z),C(Me,v.I,4);case 4:z.delete(),Me.h=0}})};function Cl(u,m,v){var k,z,B,R,j,G,ce,_e,De,Me,$e,Pe,Ge,_t;return de(function(bt){switch(bt.h){case 1:if(!v)return bt.return(m);for(k={},z=0,B=o(Object.keys(v)),R=B.next();!R.done;R=B.next())j=R.value,G=v[j],typeof G!="string"&&G.type==="texture"&&m[G.stream]!==void 0&&++z;1<z&&(u.M=!1),ce=o(Object.keys(v)),R=ce.next();case 2:if(R.done){bt.h=4;break}if(_e=R.value,De=v[_e],typeof De=="string")return Ge=k,_t=_e,C(bt,Cs(u,_e,m[De]),14);if(Me=m[De.stream],De.type==="detection_list"){if(Me){for(var Lt=Me.getRectList(),ir=Me.getLandmarksList(),Yt=Me.getClassificationsList(),lt=[],Ft=0;Ft<Lt.size();++Ft){var Jr=_l(Lt.get(Ft)),Ya=Cr(Jr,1),Za=Cr(Jr,2),is=Cr(Jr,3),Ir=Cr(Jr,4),xi=Cr(Jr,5,0),Fn=void 0;Fn=Fn===void 0?0:Fn,Jr={la:{sa:Ya,ta:Za,height:is,width:Ir,rotation:xi,pa:Pn(Pt(Jr,6),Fn)},ea:hi(Pa(ir.get(Ft)),_i,1).map($l),ba:xl(vl(Yt.get(Ft)))},lt.push(Jr)}Lt=lt}else Lt=[];k[_e]=Lt,bt.h=7;break}if(De.type==="proto_list"){if(Me){for(Lt=Array(Me.size()),ir=0;ir<Me.size();ir++)Lt[ir]=Me.get(ir);Me.delete()}else Lt=[];k[_e]=Lt,bt.h=7;break}if(Me===void 0){bt.h=3;break}if(De.type==="float_list"){k[_e]=Me,bt.h=7;break}if(De.type==="proto"){k[_e]=Me,bt.h=7;break}if(De.type!=="texture")throw Error("Unknown output config type: '"+De.type+"'");return $e=u.v[_e],$e||($e=new Ts(u.i,u.K),u.v[_e]=$e),C(bt,Ua($e,Me,u.M),13);case 13:Pe=bt.i,k[_e]=Pe;case 7:De.transform&&k[_e]&&(k[_e]=De.transform(k[_e])),bt.h=3;break;case 14:Ge[_t]=bt.i;case 3:R=ce.next(),bt.h=2;break;case 4:return bt.return(k)}})}function Cs(u,m,v){var k;return de(function(z){return typeof v=="number"||v instanceof Uint8Array||v instanceof u.i.Uint8BlobList?z.return(v):v instanceof u.i.Texture2dDataOut?(k=u.v[m],k||(k=new Ts(u.i,u.K),u.v[m]=k),z.return(Ua(k,v,u.M))):z.return(void 0)})}function Ga(u,m){for(var v=m.name||"$",k=[].concat(l(m.wants)),z=new u.i.StringList,B=o(m.wants),R=B.next();!R.done;R=B.next())z.push_back(R.value);B=u.i.PacketListener.implement({onResults:function(j){for(var G={},ce=0;ce<m.wants.length;++ce)G[k[ce]]=j.get(ce);var _e=u.listeners[v];_e&&(u.I=Cl(u,G,m.outs).then(function(De){De=_e(De);for(var Me=0;Me<m.wants.length;++Me){var $e=G[k[Me]];typeof $e=="object"&&$e.hasOwnProperty&&$e.hasOwnProperty("delete")&&$e.delete()}De&&(u.I=De)}))}}),u.j.attachMultiListener(z,B),z.delete()}e.onResults=function(u,m){this.listeners[m||"$"]=u},ee("Solution",yn),ee("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Ka(u){switch(u===void 0&&(u=0),u){case 1:return"selfie_segmentation_landscape.tflite";default:return"selfie_segmentation.tflite"}}function Xa(u){var m=this;u=u||{},this.h=new yn({locateFile:u.locateFile,files:function(v){return[{simd:!0,url:"selfie_segmentation_solution_simd_wasm_bin.js"},{simd:!1,url:"selfie_segmentation_solution_wasm_bin.js"},{data:!0,url:Ka(v.modelSelection)}]},graph:{url:"selfie_segmentation.binarypb"},listeners:[{wants:["segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelSelection:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelSelection",fieldName:"int_value"},onChange:function(v){var k,z,B;return de(function(R){return R.h==1?(k=Ka(v),z="third_party/mediapipe/modules/selfie_segmentation/"+k,C(R,ns(m.h,k),2)):(B=R.i,m.h.overrideFile(z,B),R.return(!0))})}}}})}e=Xa.prototype,e.close=function(){return this.h.close(),Promise.resolve()},e.onResults=function(u){this.h.onResults(u)},e.initialize=function(){var u=this;return de(function(m){return C(m,u.h.initialize(),0)})},e.reset=function(){this.h.reset()},e.send=function(u){var m=this;return de(function(v){return C(v,m.h.send(u),0)})},e.setOptions=function(u){this.h.setOptions(u)},ee("SelfieSegmentation",Xa),ee("VERSION","0.1.1675465747")}).call(Zl);class M2{segmenter=null;isLoaded=!1;isProcessing=!1;lastProcessTime=0;targetFps=15;frameInterval=1e3/15;downsampleCanvas;downsampleCtx;onResultCallback;constructor(){this.downsampleCanvas=document.createElement("canvas"),this.downsampleCanvas.width=256,this.downsampleCanvas.height=256,this.downsampleCtx=this.downsampleCanvas.getContext("2d",{willReadFrequently:!0})}async init(t="/mediapipe/"){if(!this.isLoaded)try{this.segmenter=new oy.SelfieSegmentation({locateFile:r=>`/mediapipe/${r}`}),this.segmenter.setOptions({modelSelection:0,selfieMode:!1}),this.segmenter.onResults(r=>{this.isProcessing=!1,this.onResultCallback&&r.segmentationMask&&this.onResultCallback(r.segmentationMask,r.image)}),await this.segmenter.initialize(),this.isLoaded=!0,console.log("[RealtimeSegmenter] MediaPipe SelfieSegmentation 初始化成功")}catch(r){console.warn("[RealtimeSegmenter] MediaPipe 初始化降级提示:",r)}}setOnResult(t){this.onResultCallback=t}async sendFrame(t){if(!this.segmenter||!this.isLoaded)return!1;const r=performance.now();if(r-this.lastProcessTime<this.frameInterval||this.isProcessing)return!1;this.lastProcessTime=r,this.isProcessing=!0;try{if(this.downsampleCtx)return this.downsampleCtx.drawImage(t,0,0,256,256),await this.segmenter.send({image:this.downsampleCanvas}),!0}catch(n){this.isProcessing=!1,console.error("[RealtimeSegmenter] sendFrame 错误:",n)}return!1}renderComposite(t,r,n,i,s=!1){const a=t.getContext("2d");if(!a)return;const o=t.width,l=t.height;if(a.save(),s&&(a.translate(o,0),a.scale(-1,1)),a.clearRect(0,0,o,l),i.isGradient&&i.gradientStops){const p=a.createLinearGradient(0,0,0,l);p.addColorStop(0,i.gradientStops[0]),p.addColorStop(1,i.gradientStops[1]),a.fillStyle=p}else a.fillStyle=i.value||"#FFFFFF";a.fillRect(0,0,o,l),a.save(),a.globalCompositeOperation="source-over";const d=document.createElement("canvas");d.width=o,d.height=l;const f=d.getContext("2d");if(f){f.drawImage(n,0,0,o,l);const p=f.getImageData(0,0,o,l),g=p.data;for(let b=0;b<g.length;b+=4)g[b+3]=g[b];f.putImageData(p,0,0),f.globalCompositeOperation="source-in",f.drawImage(r,0,0,o,l),a.drawImage(d,0,0,o,l)}a.restore(),a.restore()}destroy(){this.segmenter&&(this.segmenter.close(),this.segmenter=null),this.isLoaded=!1}}/*!
 * ONNX Runtime Web v1.30.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Hd=Object.defineProperty,R2=Object.getOwnPropertyDescriptor,B2=Object.getOwnPropertyNames,P2=Object.prototype.hasOwnProperty,D2=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),pe=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(n){throw r=[n],n}},bs=(e,t)=>{for(var r in t)Hd(e,r,{get:t[r],enumerable:!0})},N2=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of B2(t))!P2.call(e,i)&&i!==r&&Hd(e,i,{get:()=>t[i],enumerable:!(n=R2(t,i))||n.enumerable});return e},pa=e=>N2(Hd({},"__esModule",{value:!0}),e),zs,Wn,ls,np,ly,uy=pe(()=>{"use strict";zs=new Map,Wn=[],ls=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=zs.get(e);if(n===void 0)zs.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=Wn.indexOf(e);i!==-1&&Wn.splice(i,1);for(let s=0;s<Wn.length;s++)if(zs.get(Wn[s]).priority<=r){Wn.splice(s,0,e);return}Wn.push(e)}return}throw new TypeError("not a valid backend")},np=async e=>{let t=zs.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ly=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),n=r.length===0?Wn:r,i,s=[],a=new Set;for(let l of n){let d=await np(l);typeof d=="string"?s.push({name:l,err:d}):(i||(i=d),i===d&&a.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>a.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),U2=pe(()=>{"use strict";uy()}),dy,L2=pe(()=>{"use strict";dy="1.30.0"}),Ql,Gt,cy=pe(()=>{"use strict";L2(),Ql="warning",Gt={wasm:{},webgl:{},webgpu:{},versions:{common:dy},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ql=e}},get logLevel(){return Ql}},Object.defineProperty(Gt,"logLevel",{enumerable:!0})}),xt,F2=pe(()=>{"use strict";cy(),xt=Gt}),fy,py,j2=pe(()=>{"use strict";fy=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let a=t?.format!==void 0?t.format:"RGB",o=t?.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let f=s*i,p=0,g=f,b=f*2,y=-1;a==="RGBA"?(p=0,g=f,b=f*2,y=f*3):a==="RGB"?(p=0,g=f,b=f*2):a==="RBG"&&(p=0,b=f,g=f*2);for(let x=0;x<s;x++)for(let E=0;E<i;E++){let S=(e.data[p++]-d[0])*l[0],$=(e.data[g++]-d[1])*l[1],A=(e.data[b++]-d[2])*l[2],C=y===-1?255:(e.data[y++]-d[3])*l[3];n.fillStyle="rgba("+S+","+$+","+A+","+C+")",n.fillRect(E,x,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},py=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,s,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],a=e.dims[3]):(i=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,f;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?f=[0,0,0,0]:typeof l.bias=="number"?f=[l.bias,l.bias,l.bias,l.bias]:(f=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(f[3]=l.bias[3]));let p=s*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,b=0,y=1,x=2,E=3,S=0,$=p,A=p*2,C=-1;o==="RGBA"?(S=0,$=p,A=p*2,C=p*3):o==="RGB"?(S=0,$=p,A=p*2):o==="RBG"&&(S=0,A=p,$=p*2),n=r.createImageData(i,s);for(let O=0;O<s*i;b+=g,y+=g,x+=g,E+=g,O++)n.data[b]=(e.data[S++]-f[0])*d[0],n.data[y]=(e.data[$++]-f[1])*d[1],n.data[x]=(e.data[A++]-f[2])*d[2],n.data[E]=C===-1?255:(e.data[C++]-f[3])*d[3]}else throw new Error("Can not access image data");return n}}),oo,hy,my,gy,yy,by,V2=pe(()=>{"use strict";Gd(),oo=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},s,a;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,f=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),p=4,g=0,b=1,y=2,x=3,E=0,S=d,$=d*2,A=-1;o==="RGB"&&(p=3,g=0,b=1,y=2,x=-1),l==="RGBA"?A=d*3:l==="RBG"?(E=0,$=d,S=d*2):l==="BGR"&&($=0,S=d,E=d*2);for(let C=0;C<d;C++,g+=p,y+=p,b+=p,x+=p)f[E++]=(e[g]+a[0])/s[0],f[S++]=(e[b]+a[1])/s[1],f[$++]=(e[y]+a[2])/s[2],A!==-1&&x!==-1&&(f[A++]=(e[x]+a[3])/s[3]);return l==="RGBA"?new _r("float32",f,[1,4,r,n]):new _r("float32",f,[1,3,r,n])},hy=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=l();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let g=e.height,b=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,b=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=g,o.width=b}else o.tensorFormat="RGBA",o.height=g,o.width=b;p.drawImage(e,0,0),a=p.getImageData(0,0,b,g).data}else throw new Error("Can not access image data")}else if(n){let f,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,p=t.resizedWidth):(f=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=f,o.width=p,t!==void 0){let g=l();g.width=p,g.height=f;let b=d(g);if(b!=null)b.putImageData(e,0,0),a=b.getImageData(0,0,p,f).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=l();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let g=e.height,b=e.width;return p.drawImage(e,0,0,b,g),a=p.getImageData(0,0,b,g).data,o.height=g,o.width=b,oo(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((f,p)=>{let g=l(),b=d(g);if(!e||!b)return p();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{g.width=y.width,g.height=y.height,b.drawImage(y,0,0,g.width,g.height);let x=b.getImageData(0,0,g.width,g.height);o.height=g.height,o.width=g.width,f(oo(x.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return oo(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},my=(e,t)=>{let{width:r,height:n,download:i,dispose:s}=t,a=[1,n,r,4];return new _r({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:s})},gy=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new _r({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:s})},yy=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new _r({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:s})},by=(e,t,r)=>new _r({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Ri,qs,Jl,vy,W2=pe(()=>{"use strict";Ri=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),qs=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Jl=!1,vy=()=>{if(!Jl){Jl=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(Ri.set("int64",BigInt64Array),qs.set(BigInt64Array,"int64")),t&&(Ri.set("uint64",BigUint64Array),qs.set(BigUint64Array,"uint64")),n?(Ri.set("float16",r),qs.set(r,"float16")):Ri.set("float16",Uint16Array)}}}),wy,_y,q2=pe(()=>{"use strict";Gd(),wy=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},_y=(e,t)=>{switch(e.location){case"cpu":return new _r(e.type,e.data,t);case"cpu-pinned":return new _r({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new _r({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new _r({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new _r({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),_r,Gd=pe(()=>{"use strict";j2(),V2(),W2(),q2(),_r=class{constructor(e,t,r){vy();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=Ri.get(n);if(!a)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let l=Ri.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?a=l.from(t,BigInt):a=l.from(t)}else if(t instanceof l)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")n="string",a=e;else if(l==="boolean")n="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",a=Uint8Array.from(e);else{let l=qs.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=l,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=a,this.dataLocation="cpu"}let s=wy(i);if(this.cpuData&&s!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=s}static async fromImage(e,t){return hy(e,t)}static fromTexture(e,t){return my(e,t)}static fromGpuBuffer(e,t){return gy(e,t)}static fromMLTensor(e,t){return yy(e,t)}static fromPinnedBuffer(e,t,r){return by(e,t,r)}toDataURL(e){return fy(this,e)}toImageData(e){return py(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return _y(this,e)}}}),qr,xy=pe(()=>{"use strict";Gd(),qr=_r}),Uo,eu,pn,Kr,Fi,ji,$y=pe(()=>{"use strict";cy(),Uo=(e,t)=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||console.timeStamp(`${e}::ORT::${t}`)},eu=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Uo("CPU",s);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},pn=e=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||eu("BEGIN",e)},Kr=e=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||eu("END",e)},Fi=e=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||console.time(`ORT::${e}`)},ji=e=>{(typeof Gt.trace>"u"?!Gt.wasm.trace:!Gt.trace)||console.timeEnd(`ORT::${e}`)}}),Sy,H2=pe(()=>{"use strict";uy(),xy(),$y(),Sy=class ky{constructor(t){this.handler=t}async run(t,r,n){pn(),Fi("InferenceSession.run");let i={},s={};if(typeof t!="object"||t===null||t instanceof qr||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof qr)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,f=Object.getOwnPropertyNames(r);for(let p of this.outputNames)if(f.indexOf(p)!==-1){let g=r[p];(g===null||g instanceof qr)&&(d=!0,a=!1,i[p]=g)}if(d){if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,s),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let f=o[d];f instanceof qr?l[d]=f:l[d]=new qr(f.type,f.data,f.dims)}return ji("InferenceSession.run"),Kr(),l}async release(){return this.handler.dispose()}static async create(t,r,n,i){pn(),Fi("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,p=0,g=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(g=t.byteLength-p,typeof n=="number"){if(g=n,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||p+g>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-p}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(f,p,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await ly(a),d=await o.createInferenceSessionHandler(s,l);return ji("InferenceSession.create"),Kr(),new ky(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Lo,G2=pe(()=>{"use strict";H2(),Lo=Sy}),K2=pe(()=>{"use strict"}),X2=pe(()=>{"use strict"}),Y2=pe(()=>{"use strict"}),Z2=pe(()=>{"use strict"}),Q2={};bs(Q2,{InferenceSession:()=>Lo,TRACE:()=>Uo,TRACE_EVENT_BEGIN:()=>Fi,TRACE_EVENT_END:()=>ji,TRACE_FUNC_BEGIN:()=>pn,TRACE_FUNC_END:()=>Kr,Tensor:()=>qr,env:()=>xt,registerBackend:()=>ls});var Dr=pe(()=>{"use strict";U2(),F2(),G2(),xy(),K2(),X2(),$y(),Y2(),Z2()}),Kd=pe(()=>{"use strict"}),Ty={};bs(Ty,{default:()=>Cy});var tu,ru,Cy,J2=pe(()=>{"use strict";B1(),Hi(),Xd(),tu="ort-wasm-proxy-worker",ru=globalThis.self?.name===tu,ru&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Yd(r.wasm).then(()=>{pc(r).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})})},n=>{postMessage({type:t,err:n})});break;case"init-ep":{let{epName:n,env:i}=r;hc(i,n).then(()=>{postMessage({type:t})},s=>{postMessage({type:t,err:s})});break}case"copy-from":{let{buffer:n}=r,i=Go(n);postMessage({type:t,out:i});break}case"create":{let{model:n,options:i}=r;mc(n,i).then(s=>{postMessage({type:t,out:s})},s=>{postMessage({type:t,err:s})});break}case"release":gc(r),postMessage({type:t});break;case"run":{let{sessionId:n,inputIndices:i,inputs:s,outputIndices:a,options:o}=r;yc(n,i,s,a,new Array(a.length).fill(null),o).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},vc([...s,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":bc(r),postMessage({type:t});break;default:}}catch(n){postMessage({type:t,err:n})}}),Cy=ru?null:e=>new Worker(e??vr,{type:"module",name:tu})}),Ey={};bs(Ey,{default:()=>Iy});async function ip(e={}){var t=e,r=!!globalThis.window,n=!!globalThis.WorkerGlobalScope,i=n&&self.name?.startsWith("em-pthread");t.mountExternalData=(c,h)=>{c.startsWith("./")&&(c=c.substring(2)),(t.ad||(t.ad=new Map)).set(c,h)},t.unmountExternalData=()=>{delete t.ad,delete t.Yd,delete t.Xd,delete t.be},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=c=>async(...h)=>{try{if(t.$c)throw Error("Session already started");let _=t.$c={Nd:h[0],errors:[]},w=await c(...h);if(t.$c!==_)throw Error("Session mismatch");t.hd?.flush();let I=_.errors;if(0<I.length){let D=await Promise.all(I);if(D=D.filter(V=>V),0<D.length)throw Error(D.join(`
`))}return w}finally{t.$c=null}};t.jsepInit=(c,h)=>{if(c==="webgpu"){[t.hd,t.Dd,t.Hd,t.jd,t.Gd,t.bc,t.Id,t.Kd,t.Ed,t.Fd,t.Jd]=h;let _=t.hd;t.jsepRegisterBuffer=(w,I,D,V)=>_.registerBuffer(w,I,D,V),t.jsepGetBuffer=w=>_.getBuffer(w),t.jsepCreateDownloader=(w,I,D)=>_.createDownloader(w,I,D),t.jsepOnCreateSession=w=>{_.onCreateSession(w)},t.jsepOnReleaseSession=w=>{_.onReleaseSession(w)},t.jsepOnRunStart=w=>_.onRunStart(w),t.Ld=(w,I)=>{_.upload(w,I)}}else if(c==="webnn"){let _=h[0];[t.Vd,t.vd,t.webnnEnsureTensor,t.wd,t.webnnDownloadTensor,t.Ud,t.webnnEnableTraceEvent]=h.slice(1),t.webnnReleaseTensorId=t.vd,t.webnnUploadTensor=t.wd,t.webnnRegisterMLContext=t.Ud,t.webnnOnRunStart=w=>_.onRunStart(w),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=w=>{_.onReleaseSession(w)},t.webnnCreateMLTensorDownloader=(w,I)=>_.createMLTensorDownloader(w,I),t.webnnRegisterMLTensor=(w,I,D,V)=>_.registerMLTensor(w,I,D,V),t.webnnCreateMLContext=w=>_.createMLContext(w),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let a=()=>{let c=h=>(..._)=>{let w=Er;return _=h(..._),Er!=w?new Promise((I,D)=>{nr={resolve:I,reject:D}}):_};(()=>{for(let h of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[h]=c(t[h])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a?.()};var o,l,d=(c,h)=>{throw h},f=import.meta.url,p="";if(r||n){try{p=new URL(".",f).href}catch{}n&&(l=c=>{var h=new XMLHttpRequest;return h.open("GET",c,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),o=async c=>{if(N(c))return new Promise((_,w)=>{var I=new XMLHttpRequest;I.open("GET",c,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?_(I.response):w(I.status)},I.onerror=w,I.send(null)});var h=await fetch(c,{credentials:"same-origin"});if(h.ok)return h.arrayBuffer();throw Error(h.status+" : "+h.url)}}var g,b,y,x,E,S,$=console.log.bind(console),A=console.error.bind(console),C=$,O=A,P=!1,N=c=>c.startsWith("file://");function T(){Le.buffer!=Y.buffer&&xe()}if(i){let c=function(h){try{var _=h.data,w=_.Vc;if(w==="load"){let I=[];self.onmessage=D=>I.push(D),S=()=>{postMessage({Vc:"loaded"});for(let D of I)c(D);self.onmessage=c};for(let D of _.Ad)t[D]&&!t[D].proxy||(t[D]=(...V)=>{postMessage({Vc:"callHandler",yd:D,args:V})},D=="print"&&(C=t[D]),D=="printErr"&&(O=t[D]));Le=_.Rd,xe(),b=_.Sd,et(),Qa()}else if(w==="run"){(function(I){var D=(T(),ee)[I+52>>>2>>>0];I=(T(),ee)[I+56>>>2>>>0],kc(D,D-I),Ke(D)})(_.Uc),Fn(_.Uc,0,0,1,0,0),Oe(),Dn(_.Uc),W||(Za(),W=!0);try{tt(_.Pd,_.ed)}catch(I){if(I!="unwind")throw I}}else _.target!=="setimmediate"&&(w==="checkMailbox"?W&&yi():w&&(O(`worker: received unknown command ${w}`),O(_)))}catch(I){throw wc(),I}};var W=!1;self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=c}var Y,de,X,ue,q,ee,he,ne,fe,oe,Te,re=!1;function xe(){var c=Le.buffer;t.HEAP8=Y=new Int8Array(c),X=new Int16Array(c),t.HEAPU8=de=new Uint8Array(c),ue=new Uint16Array(c),t.HEAP32=q=new Int32Array(c),t.HEAPU32=ee=new Uint32Array(c),he=new Float32Array(c),ne=new Float64Array(c),fe=new BigInt64Array(c),oe=new BigUint64Array(c)}function Se(){re=!0,i?S():bn.ub()}function be(c){throw O(c="Aborted("+c+")"),P=!0,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),E?.(c),c}function ht(){return{a:{ma:X1,hb:K1,g:Qt,J:Sr,f:dr,o:Ht,i:cr,$:Xr,b:hn,S:Ki,Ha:ai,n:kr,aa:le,Ya:Qe,Da:Ut,Fa:Rt,Za:Bt,Wa:Tr,Pa:mt,Va:gr,ka:Xi,Ea:wa,Ba:li,Xa:Yi,Ca:ui,cb:di,fa:pi,wa:vs,ua:Qi,ea:_a,N:ws,H:dl,va:xa,_:Ca,xa:cl,Sa:fl,za:Ia,Ia:pl,sa:hl,ga:ml,Ra:Dn,$a:gl,Q:za,r:bl,c:hi,ib:vl,y:_i,M:Ra,D:Ba,l:wl,s:Pa,jb:rs,I:Da,R:_l,j:Na,u:xl,q:$l,k:Ts,Ma:Ua,Na:Sl,Oa:Va,Ka:Wa,La:qa,ta:Ha,eb:Tl,bb:Cl,v:Ka,ba:Xa,ha:u,ab:ns,V:m,_a:v,Aa:k,F:kl,U:z,la:ce,ya:_e,gb:G,fb:De,Ta:Ge,Ua:_t,Ga:ye,T:bt,Ja:Lt,ja:ir,Qa:Yt,ia:Ft,lb:zw,na:Cw,mb:Ow,oa:Tw,G:mw,e:J1,t:Z1,w:Y1,B:uw,nb:$w,Z:xw,x:rw,pa:Sw,X:Ew,ca:_w,ob:ww,pb:vw,O:dw,qb:yw,qa:bw,rb:gw,L:pw,Y:kw,d:Q1,A:tw,m:ew,kb:Mw,p:iw,z:sw,C:nw,E:aw,K:cw,ra:hw,P:Iw,da:fw,W:Aw,sb:lw,tb:ow,h:Jr,a:Le,db:ie}}}async function et(){function c(w,I){var D=bn=w.exports;w={};for(let[V,J]of Object.entries(D))typeof J=="function"?(D=bi(J),w[V]=D):w[V]=J;return bn=w,bn=function(){var V=bn,J=ke=>Ve=>ke(Ve)>>>0,ve=ke=>()=>ke()>>>0;return(V=Object.assign({},V)).vb=J(V.vb),V.Zb=ve(V.Zb),V.$b=J(V.$b),V.nc=J(V.nc),V.oc=ve(V.oc),V.sc=J(V.sc),V}(),se.push(bn.ac),Ya=(w=bn).vb,Za=w.wb,t._OrtInit=w.xb,t._OrtGetLastError=w.yb,t._OrtCreateSessionOptions=w.zb,t._OrtAppendExecutionProvider=w.Ab,t._OrtAddFreeDimensionOverride=w.Bb,t._OrtAddSessionConfigEntry=w.Cb,t._OrtReleaseSessionOptions=w.Db,t._OrtCreateSession=w.Eb,t._OrtReleaseSession=w.Fb,t._OrtGetInputOutputCount=w.Gb,t._OrtGetInputOutputMetadata=w.Hb,t._OrtFree=w.Ib,t._OrtCreateTensor=w.Jb,t._OrtGetTensorData=w.Kb,t._OrtReleaseTensor=w.Lb,t._OrtCreateRunOptions=w.Mb,t._OrtAddRunConfigEntry=w.Nb,t._OrtReleaseRunOptions=w.Ob,t._OrtCreateBinding=w.Pb,t._OrtBindInput=w.Qb,t._OrtBindOutput=w.Rb,t._OrtClearBoundOutputs=w.Sb,t._OrtReleaseBinding=w.Tb,t._OrtRunWithBinding=w.Ub,t._OrtRun=w.Vb,t._OrtEndProfiling=w.Wb,t._JsepOutput=w.Xb,t._JsepGetNodeName=w.Yb,is=w.Zb,Ir=t._free=w._b,xi=t._malloc=w.$b,Fn=w.cc,wc=w.dc,_c=w.ec,xc=w.fc,El=w.gc,$c=w.hc,Sc=w.ic,Je=w.jc,Es=w.kc,kc=w.lc,Ke=w.mc,Il=w.nc,Ze=w.oc,Tc=w.pc,Al=w.qc,Cc=w.rc,Ec=w.sc,Ic=w.tc,Ol=w.uc,Ac=w.vc,Oc=w.wc,zc=w.xc,Mc=w.yc,Rc=w.zc,Bc=w.Ac,Pc=w.Bc,Dc=w.Cc,Nc=w.Dc,Uc=w.Ec,Lc=w.Fc,Fc=w.Gc,jc=w.Hc,Vc=w.Ic,Wc=w.Jc,qc=w.Kc,Hc=w.Lc,Gc=w.Mc,Kc=w.Nc,Xc=w.Oc,Yc=w.Pc,Zc=w.Qc,Qc=w.Sc,Jc=w.Tc,ef=w.cd,tf=w.dd,rf=w.id,nf=w.nd,sf=w.od,af=w.pd,of=w.qd,lf=w.rd,uf=w.sd,df=w.td,cf=w.ud,ff=w.zd,pf=w.Zd,hf=w._d,mf=w.$d,gf=w.ae,b=I,bn}var h,_=ht();return t.instantiateWasm?new Promise(w=>{t.instantiateWasm(_,(I,D)=>{w(c(I,D))})}):i?c(new WebAssembly.Instance(b,ht()),b):(Te??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-MDYUKy93.wasm",import.meta.url).href,h=await async function(w){var I=Te;if(!g&&!N(I))try{var D=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(D,w)}catch(V){O(`wasm streaming compile failed: ${V}`),O("falling back to ArrayBuffer instantiation")}return async function(V,J){try{var ve=await async function(ke){if(!g)try{var Ve=await o(ke);return new Uint8Array(Ve)}catch{}if(ke==Te&&g)ke=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";ke=l(ke)}return ke}(V);return await WebAssembly.instantiate(ve,J)}catch(ke){O(`failed to asynchronously prepare wasm: ${ke}`),be(ke)}}(I,w)}(_),c(h.instance,h.module))}class ot{name="ExitStatus";constructor(h){this.message=`Program terminated with exit(${h})`,this.status=h}}var wt=c=>{c.terminate(),c.onmessage=()=>{}},qe=[],dt=0,M=null,F=c=>{me.length==0&&(je(),ze(me[0]));var h=me.pop();if(!h)return 6;ge.push(h),Ee[c.Uc]=h,h.Uc=c.Uc;var _={Vc:"run",Pd:c.Od,ed:c.ed,Uc:c.Uc};return h.postMessage(_,c.md),0},H=0,Z=(c,h,..._)=>{var w,I=16*_.length,D=Ze(),V=Il(I),J=V>>>3;for(w of _)typeof w=="bigint"?((T(),fe)[J++>>>0]=1n,(T(),fe)[J++>>>0]=w):((T(),fe)[J++>>>0]=0n,(T(),ne)[J++>>>0]=w);return c=_c(c,0,I,V,h),Ke(D),c};function ie(c){if(i)return Z(0,1,c);if(y=c,!(0<H)){for(var h of ge)wt(h);for(h of me)wt(h);me=[],ge=[],Ee={},P=!0}d(0,new ot(c))}function ae(c){if(i)return Z(1,0,c);ye(c)}var ye=c=>{if(y=c,i)throw ae(c),"unwind";ie(c)},me=[],ge=[],se=[],Ee={},we=c=>{var h=c.Uc;delete Ee[h],me.push(c),ge.splice(ge.indexOf(c),1),c.Uc=0,xc(h)};function Oe(){se.forEach(c=>c())}var ze=c=>new Promise(h=>{c.onmessage=I=>{var D=I.data;if(I=D.Vc,D.bd&&D.bd!=is()){var V=Ee[D.bd];V?V.postMessage(D,D.md):O(`Internal error! Worker sent a message "${I}" to target pthread ${D.bd}, but that thread no longer exists!`)}else I==="checkMailbox"?yi():I==="spawnThread"?F(D):I==="cleanupThread"?gi(()=>{we(Ee[D.Qd])}):I==="loaded"?(c.loaded=!0,h(c)):D.target==="setimmediate"?c.postMessage(D):I==="uncaughtException"?c.onerror(D.error):I==="callHandler"?t[D.yd](...D.args):I&&O(`worker sent an unknown command ${I}`)},c.onerror=I=>{throw O(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var _,w=[];for(_ of[])t.propertyIsEnumerable(_)&&w.push(_);c.postMessage({Vc:"load",Ad:w,Rd:Le,Sd:b})});function je(){var c=new Worker((()=>{let h=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new h("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});me.push(c)}var Le,tt=(c,h)=>{H=0,c=Ol(c,h),0<H?y=c:El(c)},yt=[],St=0;function Qt(c){var h=new Nt(c>>>=0);return(T(),Y)[h.Wc+12>>>0]==0&&(ur(h,!0),St--),Mt(h,!1),yt.push(h),Ec(c)}var At=0,Sr=()=>{Je(0,0);var c=yt.pop();Tc(c.gd),At=0};function ur(c,h){h=h?1:0,(T(),Y)[c.Wc+12>>>0]=h}function Mt(c,h){h=h?1:0,(T(),Y)[c.Wc+13>>>0]=h}class Nt{constructor(h){this.gd=h,this.Wc=h-24}}var mr=c=>{var h=At;if(!h)return Es(0),0;var _=new Nt(h);(T(),ee)[_.Wc+16>>>2>>>0]=h;var w=(T(),ee)[_.Wc+4>>>2>>>0];if(!w)return Es(0),h;for(var I of c){if(I===0||I===w)break;if(Cc(I,w,_.Wc+16))return Es(I),h}return Es(w),h};function dr(){return mr([])}function Ht(c){return mr([c>>>0])}function cr(c,h,_,w){return mr([c>>>0,h>>>0,_>>>0,w>>>0])}var Xr=()=>{var c=yt.pop();c||be("no exception to throw");var h=c.gd;throw(T(),Y)[c.Wc+13>>>0]==0&&(yt.push(c),Mt(c,!0),ur(c,!1),St++),Al(h),At=h};function hn(c,h,_){var w=new Nt(c>>>=0);throw h>>>=0,_>>>=0,(T(),ee)[w.Wc+16>>>2>>>0]=0,(T(),ee)[w.Wc+4>>>2>>>0]=h,(T(),ee)[w.Wc+8>>>2>>>0]=_,Al(c),St++,At=c}var Ki=()=>St;function Rn(c,h,_,w){return i?Z(2,1,c,h,_,w):ai(c,h,_,w)}function ai(c,h,_,w){if(c>>>=0,h>>>=0,_>>>=0,w>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?Rn(c,h,_,w):(c={Od:_,Uc:c,ed:w,md:I},i?(c.Vc="spawnThread",postMessage(c,I),0):F(c))}function kr(c){throw At||=c>>>0,At}var Bn=globalThis.TextDecoder&&new TextDecoder,oi=(c,h,_,w)=>{if(_=h+_,w)return _;for(;c[h]&&!(h>=_);)++h;return h},te=(c,h=0,_,w)=>{if(16<(_=oi(c,h>>>=0,_,w))-h&&c.buffer&&Bn)return Bn.decode(c.buffer instanceof ArrayBuffer?c.subarray(h,_):c.slice(h,_));for(w="";h<_;){var I=c[h++];if(128&I){var D=63&c[h++];if((224&I)==192)w+=String.fromCharCode((31&I)<<6|D);else{var V=63&c[h++];65536>(I=(240&I)==224?(15&I)<<12|D<<6|V:(7&I)<<18|D<<12|V<<6|63&c[h++])?w+=String.fromCharCode(I):(I-=65536,w+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else w+=String.fromCharCode(I)}return w},L=(c,h,_)=>(c>>>=0)?te((T(),de),c,h,_):"";function le(c,h,_){return i?Z(3,1,c,h,_):0}function Qe(c,h){if(i)return Z(4,1,c,h)}function Ut(c,h){if(i)return Z(5,1,c,h)}function Rt(c,h,_){if(i)return Z(6,1,c,h,_)}function Bt(c,h,_){return i?Z(7,1,c,h,_):0}function Tr(c,h){if(i)return Z(8,1,c,h)}function mt(c,h,_){if(i)return Z(9,1,c,h,_)}function gr(c,h,_,w){if(i)return Z(10,1,c,h,_,w)}function Xi(c,h,_,w){if(i)return Z(11,1,c,h,_,w)}function wa(c,h,_,w){if(i)return Z(12,1,c,h,_,w)}function li(c){if(i)return Z(13,1,c)}function Yi(c,h){if(i)return Z(14,1,c,h)}function ui(c,h,_){if(i)return Z(15,1,c,h,_)}var di=()=>be(""),yr=c=>{c>>>=0;for(var h="";;){var _=(T(),de)[c++>>>0];if(!_)return h;h+=String.fromCharCode(_)}},ci={},fi={},mn=class extends Error{constructor(c){super(c),this.name="BindingError"}};function Pt(c,h,_={}){return function(w,I,D={}){var V=I.name;if(!w)throw new mn(`type "${V}" must have a positive integer typeid pointer`);if(fi.hasOwnProperty(w)){if(D.Bd)return;throw new mn(`Cannot register type '${V}' twice`)}fi[w]=I,ci.hasOwnProperty(w)&&(I=ci[w],delete ci[w],I.forEach(J=>J()))}(c,h,_)}var br=(c,h,_)=>{switch(h){case 1:return _?w=>(T(),Y)[w>>>0]:w=>(T(),de)[w>>>0];case 2:return _?w=>(T(),X)[w>>>1>>>0]:w=>(T(),ue)[w>>>1>>>0];case 4:return _?w=>(T(),q)[w>>>2>>>0]:w=>(T(),ee)[w>>>2>>>0];case 8:return _?w=>(T(),fe)[w>>>3>>>0]:w=>(T(),oe)[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${h}): ${c}`)}};function pi(c,h,_,w,I){c>>>=0,_>>>=0,h=yr(h>>>0);let D=V=>V;if(w=w===0n){let V=8*_;D=J=>BigInt.asUintN(V,J),I=D(I)}Pt(c,{name:h,Rc:D,Yc:(V,J)=>(typeof J=="number"&&(J=BigInt(J)),J),Xc:br(h,_,!w),Zc:null})}function vs(c,h,_,w){Pt(c>>>=0,{name:h=yr(h>>>0),Rc:function(I){return!!I},Yc:function(I,D){return D?_:w},Xc:function(I){return this.Rc((T(),de)[I>>>0])},Zc:null})}var Zi=[],Yr=[0,1,,1,null,1,!0,1,!1,1];function hi(c){9<(c>>>=0)&&--Yr[c+1]===0&&(Yr[c]=void 0,Zi.push(c))}var Ot=c=>{if(!c)throw new mn(`Cannot use deleted val. handle = ${c}`);return Yr[c]},fr=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=Zi.pop()||Yr.length;return Yr[h]=c,Yr[h+1]=1,h}};function Pn(c){return this.Rc((T(),ee)[c>>>2>>>0])}var Cr={name:"emscripten::val",Rc:c=>{var h=Ot(c);return hi(c),h},Yc:(c,h)=>fr(h),Xc:Pn,Zc:null};function Qi(c){return Pt(c>>>0,Cr)}var ul=(c,h)=>{switch(h){case 4:return function(_){return this.Rc((T(),he)[_>>>2>>>0])};case 8:return function(_){return this.Rc((T(),ne)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${c}`)}};function _a(c,h,_){_>>>=0,Pt(c>>>=0,{name:h=yr(h>>>0),Rc:w=>w,Yc:(w,I)=>I,Xc:ul(h,_),Zc:null})}function ws(c,h,_,w,I){c>>>=0,_>>>=0,h=yr(h>>>0);let D=J=>J;if(w===0){var V=32-8*_;D=J=>J<<V>>>V,I=D(I)}Pt(c,{name:h,Rc:D,Yc:(J,ve)=>ve,Xc:br(h,_,w!==0),Zc:null})}function dl(c,h,_){function w(D){var V=(T(),ee)[D>>>2>>>0];return D=(T(),ee)[D+4>>>2>>>0],new I((T(),Y).buffer,D,V)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];Pt(c>>>=0,{name:_=yr(_>>>0),Rc:w,Xc:w},{Bd:!0})}var Zr=(c,h,_)=>{var w=(T(),de);if(h>>>=0,0<_){var I=h;_=h+_-1;for(var D=0;D<c.length;++D){var V=c.codePointAt(D);if(127>=V){if(h>=_)break;w[h++>>>0]=V}else if(2047>=V){if(h+1>=_)break;w[h++>>>0]=192|V>>6,w[h++>>>0]=128|63&V}else if(65535>=V){if(h+2>=_)break;w[h++>>>0]=224|V>>12,w[h++>>>0]=128|V>>6&63,w[h++>>>0]=128|63&V}else{if(h+3>=_)break;w[h++>>>0]=240|V>>18,w[h++>>>0]=128|V>>12&63,w[h++>>>0]=128|V>>6&63,w[h++>>>0]=128|63&V,D++}}w[h>>>0]=0,c=h-I}else c=0;return c},mi=c=>{for(var h=0,_=0;_<c.length;++_){var w=c.charCodeAt(_);127>=w?h++:2047>=w?h+=2:55296<=w&&57343>=w?(h+=4,++_):h+=3}return h};function xa(c,h){Pt(c>>>=0,{name:h=yr(h>>>0),Rc(_){var w=(T(),ee)[_>>>2>>>0];return w=L(_+4,w,!0),Ir(_),w},Yc(_,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var I=typeof w=="string";if(!(I||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new mn("Cannot pass non-string to std::string");var D=I?mi(w):w.length,V=xi(4+D+1),J=V+4;return(T(),ee)[V>>>2>>>0]=D,I?Zr(w,J,D+1):(T(),de).set(w,J>>>0),_!==null&&_.push(Ir,V),V},Xc:Pn,Zc(_){Ir(_)}})}var _s=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,$a=(c,h,_)=>{if(c>>>=1,16<(h=oi((T(),ue),c,h/2,_))-c&&_s)return _s.decode((T(),ue).slice(c,h));for(_="";c<h;++c){var w=(T(),ue)[c>>>0];_+=String.fromCharCode(w)}return _},Jt=(c,h,_)=>{if(_??=2147483647,2>_)return 0;var w=h;_=(_-=2)<2*c.length?_/2:c.length;for(var I=0;I<_;++I){var D=c.charCodeAt(I);(T(),X)[h>>>1>>>0]=D,h+=2}return(T(),X)[h>>>1>>>0]=0,h-w},Sa=c=>2*c.length,ka=(c,h,_)=>{var w="";c>>>=2;for(var I=0;!(I>=h/4);I++){var D=(T(),ee)[c+I>>>0];if(!D&&!_)break;w+=String.fromCodePoint(D)}return w},Ji=(c,h,_)=>{if(h>>>=0,_??=2147483647,4>_)return 0;var w=h;_=w+_-4;for(var I=0;I<c.length;++I){var D=c.codePointAt(I);if(65535<D&&I++,(T(),q)[h>>>2>>>0]=D,(h+=4)+4>_)break}return(T(),q)[h>>>2>>>0]=0,h-w},Ta=c=>{for(var h=0,_=0;_<c.length;++_)65535<c.codePointAt(_)&&_++,h+=4;return h};function Ca(c,h,_){if(c>>>=0,h>>>=0,_=yr(_>>>=0),h===2)var w=$a,I=Jt,D=Sa;else w=ka,I=Ji,D=Ta;Pt(c,{name:_,Rc:V=>{var J=(T(),ee)[V>>>2>>>0];return J=w(V+4,J*h,!0),Ir(V),J},Yc:(V,J)=>{if(typeof J!="string")throw new mn(`Cannot pass non-string to C++ string type ${_}`);var ve=D(J),ke=xi(4+ve+h);return(T(),ee)[ke>>>2>>>0]=ve/h,I(J,ke+4,ve+h),V!==null&&V.push(Ir,ke),ke},Xc:Pn,Zc(V){Ir(V)}})}function cl(c,h){Pt(c>>>=0,{Cd:!0,name:h=yr(h>>>0),Rc:()=>{},Yc:()=>{}})}function fl(c){Fn(c>>>0,!n,1,!r,131072,!1),Oe()}var gi=c=>{if(!P)try{if(c(),!(0<H))try{i?is()&&El(y):ye(y)}catch(h){h instanceof ot||h=="unwind"||d(0,h)}}catch(h){h instanceof ot||h=="unwind"||d(0,h)}},Ea=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Dn(c){c>>>=0,Ea||(Atomics.waitAsync((T(),q),c>>>2,c).value.then(yi),c+=128,Atomics.store((T(),q),c>>>2,1))}var yi=()=>gi(()=>{var c=is();c&&(Dn(c),Sc())});function Ia(c,h){(c>>>=0)==h>>>0?setTimeout(yi):i?postMessage({bd:c,Vc:"checkMailbox"}):(c=Ee[c])&&c.postMessage({Vc:"checkMailbox"})}var gn=[];function pl(c,h,_,w,I){for(h>>>=0,I>>>=0,gn.length=0,_=I>>>3,w=I+w>>>3;_<w;){var D;D=(T(),fe)[_++>>>0]?(T(),fe)[_++>>>0]:(T(),ne)[_++>>>0],gn.push(D)}return(h?zl[h]:G1[c])(...gn)}var hl=()=>{H=0};function ml(c){c>>>=0,i?postMessage({Vc:"cleanupThread",Qd:c}):we(Ee[c])}function gl(c){}var Nn=c=>{try{c()}catch(h){be(h)}};function bi(c){var h=(..._)=>{es.push(c);try{return c(..._)}finally{P||(es.pop(),Er&&Qr===1&&es.length===0&&(Qr=0,H+=1,Nn(hf),typeof Fibers<"u"&&Fibers.de()))}};return $s.set(c,h),h}var Qr=0,Er=null,Aa=0,es=[],vi=new Map,xs=new Map,$s=new Map,wi=0,nr=null,yl=[],Oa=c=>function(h){if(!P){if(Qr===0){var _=!1,w=!1;h((I=0)=>{if(!P&&(Aa=I,_=!0,w)){Qr=2,Nn(()=>mf(Er)),typeof MainLoop<"u"&&MainLoop.xd&&MainLoop.resume(),I=!1;try{var D=function(){var ve=(T(),q)[Er+8>>>2>>>0];return ve=xs.get(ve),ve=$s.get(ve),--H,ve()}()}catch(ve){D=ve,I=!0}var V=!1;if(!Er){var J=nr;J&&(nr=null,(I?J.reject:J.resolve)(D),V=!0)}if(I&&!V)throw D}}),w=!0,_||(Qr=1,Er=function(){var I=xi(65548),D=I+12;if((T(),ee)[I>>>2>>>0]=D,(T(),ee)[I+4>>>2>>>0]=D+65536,D=es[0],!vi.has(D)){var V=wi++;vi.set(D,V),xs.set(V,D)}return D=vi.get(D),(T(),q)[I+8>>>2>>>0]=D,I}(),typeof MainLoop<"u"&&MainLoop.xd&&MainLoop.pause(),Nn(()=>pf(Er)))}else Qr===2?(Qr=0,Nn(gf),Ir(Er),Er=null,yl.forEach(gi)):be(`invalid state: ${Qr}`);return Aa}}(h=>{c().then(h)});function za(c){return c>>>=0,Oa(async()=>{var h=await Ot(c);return fr(h)})}var ts=[],Ss=c=>{var h=ts.length;return ts.push(c),h},ks=(c,h)=>{for(var _=Array(c),w=0;w<c;++w){var I=w,D=(T(),ee)[h+4*w>>>2>>>0],V=fi[D];if(V===void 0)throw c=`parameter ${w}`,D=Ya(D),h=yr(D),Ir(D),new mn(`${c} has unknown type ${h}`);_[I]=V}return _},Un=(c,h,_)=>{var w=[];return c=c(w,_),w.length&&((T(),ee)[h>>>2>>>0]=fr(w)),c},Ma={},Ln=c=>{var h=Ma[c];return h===void 0?yr(c):h};function bl(c,h,_){var[w,...I]=ks(c,h>>>0);h=w.Yc.bind(w);var D=I.map(ve=>ve.Xc.bind(ve));c--;var V={toValue:Ot};switch(c=D.map((ve,ke)=>{var Ve=`argFromPtr${ke}`;return V[Ve]=ve,`${Ve}(args${ke?"+"+8*ke:""})`}),_){case 0:var J="toValue(handle)";break;case 2:J="new (toValue(handle))";break;case 3:J="";break;case 1:V.getStringOrSymbol=Ln,J="toValue(handle)[getStringOrSymbol(methodName)]"}return J+=`(${c})`,w.Cd||(V.toReturnWire=h,V.emval_returnValue=Un,J=`return emval_returnValue(toReturnWire, destructorsRef, ${J})`),J=`return function (handle, methodName, destructorsRef, args) {
  ${J}
  }`,_=new Function(Object.keys(V),J)(...Object.values(V)),J=`methodCaller<(${I.map(ve=>ve.name)}) => ${w.name}>`,Ss(Object.defineProperty(_,"name",{value:J}))}function vl(c,h){return h>>>=0,(c=Ot(c>>>0))==Ot(h)}function _i(c){return(c>>>=0)?(c=Ln(c),fr(globalThis[c])):fr(globalThis)}function Ra(c){return c=Ln(c>>>0),fr(t[c])}function Ba(c,h){return h>>>=0,c=Ot(c>>>0),h=Ot(h),fr(c[h])}function wl(c){9<(c>>>=0)&&(Yr[c+1]+=1)}function Pa(c,h,_,w,I){return ts[c>>>0](h>>>0,_>>>0,w>>>0,I>>>0)}function rs(c,h,_,w,I){return Pa(c>>>0,h>>>0,_>>>0,w>>>0,I>>>0)}function Da(){return fr([])}function _l(c){c=Ot(c>>>0);for(var h=Array(c.length),_=0;_<c.length;_++)h[_]=c[_];return fr(h)}function Na(c){return fr(Ln(c>>>0))}function xl(){return fr({})}function $l(c){for(var h=Ot(c>>>=0);h.length;){var _=h.pop();h.pop()(_)}hi(c)}function Ts(c,h,_){h>>>=0,_>>>=0,c=Ot(c>>>0),h=Ot(h),_=Ot(_),c[h]=_}function Ua(c,h){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),h>>>=0,c=new Date(1e3*c),(T(),q)[h>>>2>>>0]=c.getUTCSeconds(),(T(),q)[h+4>>>2>>>0]=c.getUTCMinutes(),(T(),q)[h+8>>>2>>>0]=c.getUTCHours(),(T(),q)[h+12>>>2>>>0]=c.getUTCDate(),(T(),q)[h+16>>>2>>>0]=c.getUTCMonth(),(T(),q)[h+20>>>2>>>0]=c.getUTCFullYear()-1900,(T(),q)[h+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(T(),q)[h+28>>>2>>>0]=c}var La=c=>c%4==0&&(c%100!=0||c%400==0),Fa=[0,31,60,91,121,152,182,213,244,274,305,335],ja=[0,31,59,90,120,151,181,212,243,273,304,334];function Sl(c,h){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),h>>>=0,c=new Date(1e3*c),(T(),q)[h>>>2>>>0]=c.getSeconds(),(T(),q)[h+4>>>2>>>0]=c.getMinutes(),(T(),q)[h+8>>>2>>>0]=c.getHours(),(T(),q)[h+12>>>2>>>0]=c.getDate(),(T(),q)[h+16>>>2>>>0]=c.getMonth(),(T(),q)[h+20>>>2>>>0]=c.getFullYear()-1900,(T(),q)[h+24>>>2>>>0]=c.getDay();var _=(La(c.getFullYear())?Fa:ja)[c.getMonth()]+c.getDate()-1|0;(T(),q)[h+28>>>2>>>0]=_,(T(),q)[h+36>>>2>>>0]=-60*c.getTimezoneOffset(),_=new Date(c.getFullYear(),6,1).getTimezoneOffset();var w=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|(_!=w&&c.getTimezoneOffset()==Math.min(w,_)),(T(),q)[h+32>>>2>>>0]=c}function Va(c){c>>>=0;var h=new Date((T(),q)[c+20>>>2>>>0]+1900,(T(),q)[c+16>>>2>>>0],(T(),q)[c+12>>>2>>>0],(T(),q)[c+8>>>2>>>0],(T(),q)[c+4>>>2>>>0],(T(),q)[c>>>2>>>0],0),_=(T(),q)[c+32>>>2>>>0],w=h.getTimezoneOffset(),I=new Date(h.getFullYear(),6,1).getTimezoneOffset(),D=new Date(h.getFullYear(),0,1).getTimezoneOffset(),V=Math.min(D,I);return 0>_?(T(),q)[c+32>>>2>>>0]=+(I!=D&&V==w):0<_!=(V==w)&&(I=Math.max(D,I),h.setTime(h.getTime()+6e4*((0<_?V:I)-w))),(T(),q)[c+24>>>2>>>0]=h.getDay(),_=(La(h.getFullYear())?Fa:ja)[h.getMonth()]+h.getDate()-1|0,(T(),q)[c+28>>>2>>>0]=_,(T(),q)[c>>>2>>>0]=h.getSeconds(),(T(),q)[c+4>>>2>>>0]=h.getMinutes(),(T(),q)[c+8>>>2>>>0]=h.getHours(),(T(),q)[c+12>>>2>>>0]=h.getDate(),(T(),q)[c+16>>>2>>>0]=h.getMonth(),(T(),q)[c+20>>>2>>>0]=h.getYear(),c=h.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function Wa(c,h,_,w,I,D,V){return i?Z(16,1,c,h,_,w,I,D,V):-52}function qa(c,h,_,w,I,D){if(i)return Z(17,1,c,h,_,w,I,D)}var yn={},kl=()=>performance.timeOrigin+performance.now();function Ha(c,h){if(i)return Z(18,1,c,h);if(yn[c]&&(clearTimeout(yn[c].id),delete yn[c]),!h)return 0;var _=setTimeout(()=>{delete yn[c],gi(()=>$c(c,performance.timeOrigin+performance.now()))},h);return yn[c]={id:_,ce:h},0}function Tl(c,h,_,w){c>>>=0,h>>>=0,_>>>=0,w>>>=0;var I=new Date().getFullYear(),D=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var V=Math.max(D,I);(T(),ee)[c>>>2>>>0]=60*V,(T(),q)[h>>>2>>>0]=+(D!=I),c=(h=J=>{var ve=Math.abs(J);return`UTC${0<=J?"-":"+"}${String(Math.floor(ve/60)).padStart(2,"0")}${String(ve%60).padStart(2,"0")}`})(D),h=h(I),I<D?(Zr(c,_,17),Zr(h,w,17)):(Zr(c,w,17),Zr(h,_,17))}var ns=()=>Date.now();function Cl(c,h,_){return _>>>=0,0<=c&&3>=c?(c===0?c=Date.now():c=performance.timeOrigin+performance.now(),c=Math.round(1e6*c),(T(),fe)[_>>>3>>>0]=BigInt(c),0):28}var Cs=[],Ga=(c,h)=>{Cs.length=0;for(var _;_=(T(),de)[c++>>>0];){var w=_!=105;h+=(w&=_!=112)&&h%8?4:0,Cs.push(_==112?(T(),ee)[h>>>2>>>0]:_==106?(T(),fe)[h>>>3>>>0]:_==105?(T(),q)[h>>>2>>>0]:(T(),ne)[h>>>3>>>0]),h+=w?8:4}return Cs};function Ka(c,h,_){return c>>>=0,h=Ga(h>>>0,_>>>0),zl[c](...h)}function Xa(c,h,_){return c>>>=0,h=Ga(h>>>0,_>>>0),zl[c](...h)}var u=()=>{};function m(c,h){return O(L(c>>>0,h>>>0))}var v=()=>{throw H+=1,"unwind"};function k(){return 4294901760}var z=()=>navigator.hardwareConcurrency,B={},R=c=>{var h;return(h=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(c))?+h[1]:(h=/:(\d+):\d+(?:\)|$)/.exec(c))?2147483648|+h[1]:0},j=c=>{for(var h of c)(c=R(h))&&(B[c]=h)};function G(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),j(c),B.kd=R(c[3]),B.Md=c,B.kd}function ce(c){if(!(c=B[c>>>0]))return 0;var h;if(h=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(c))c=h[1];else if(h=/^\s+at (.*) \(.*\)$/.exec(c))c=h[1];else{if(!(h=/^(.+?)@/.exec(c)))return 0;c=h[1]}Ir(ce.ld??0),h=mi(c)+1;var _=xi(h);return _&&Zr(c,_,h),ce.ld=_,ce.ld}function _e(c){c>>>=0;var h=(T(),de).length;if(c<=h||4294901760<c)return!1;for(var _=1;4>=_;_*=2){var w=h*(1+.2/_);w=Math.min(w,c+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(c,w)/65536))-Le.buffer.byteLength+65535)/65536|0;try{Le.grow(w),xe();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function De(c,h,_){if(c>>>=0,h>>>=0,B.kd==c)var w=B.Md;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),j(w);for(var I=3;w[I]&&R(w[I])!=c;)++I;for(c=0;c<_&&w[c+I];++c)(T(),q)[h+4*c>>>2>>>0]=R(w[c+I]);return c}var Me,$e={},Pe=()=>{if(!Me){var c,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(c in $e)$e[c]===void 0?delete h[c]:h[c]=$e[c];var _=[];for(c in h)_.push(`${c}=${h[c]}`);Me=_}return Me};function Ge(c,h){if(i)return Z(19,1,c,h);c>>>=0,h>>>=0;var _,w=0,I=0;for(_ of Pe()){var D=h+w;(T(),ee)[c+I>>>2>>>0]=D,w+=Zr(_,D,1/0)+1,I+=4}return 0}function _t(c,h){if(i)return Z(20,1,c,h);c>>>=0,h>>>=0;var _=Pe();for(var w of((T(),ee)[c>>>2>>>0]=_.length,c=0,_))c+=mi(w)+1;return(T(),ee)[h>>>2>>>0]=c,0}function bt(c){return i?Z(21,1,c):52}function Lt(c,h,_,w,I){return i?Z(22,1,c,h,_,w,I):52}function ir(c,h,_,w){return i?Z(23,1,c,h,_,w):52}function Yt(c,h,_,w){return i?Z(24,1,c,h,_,w):70}var lt=[null,[],[]];function Ft(c,h,_,w){if(i)return Z(25,1,c,h,_,w);h>>>=0,_>>>=0,w>>>=0;for(var I=0,D=0;D<_;D++){var V=(T(),ee)[h>>>2>>>0],J=(T(),ee)[h+4>>>2>>>0];h+=8;for(var ve=0;ve<J;ve++){var ke=c,Ve=(T(),de)[V+ve>>>0],nt=lt[ke];Ve===0||Ve===10?((ke===1?C:O)(te(nt)),nt.length=0):nt.push(Ve)}I+=J}return(T(),ee)[w>>>2>>>0]=I,0}function Jr(c){return c>>>0}i||function(){for(var c=t.numThreads-1;c--;)je();qe.push(async()=>{var h=async function(){if(!i)return Promise.all(me.map(ze))}();dt++,await h,--dt==0&&M&&(h=M,M=null,h())})}(),i||(Le=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),xe()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>Ze(),t.stackRestore=c=>Ke(c),t.stackAlloc=c=>Il(c),t.setValue=function(c,h,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":(T(),Y)[c>>>0]=h;break;case"i16":(T(),X)[c>>>1>>>0]=h;break;case"i32":(T(),q)[c>>>2>>>0]=h;break;case"i64":(T(),fe)[c>>>3>>>0]=BigInt(h);break;case"float":(T(),he)[c>>>2>>>0]=h;break;case"double":(T(),ne)[c>>>3>>>0]=h;break;case"*":(T(),ee)[c>>>2>>>0]=h;break;default:be(`invalid type for setValue: ${_}`)}},t.getValue=function(c,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return(T(),Y)[c>>>0];case"i16":return(T(),X)[c>>>1>>>0];case"i32":return(T(),q)[c>>>2>>>0];case"i64":return(T(),fe)[c>>>3>>>0];case"float":return(T(),he)[c>>>2>>>0];case"double":return(T(),ne)[c>>>3>>>0];case"*":return(T(),ee)[c>>>2>>>0];default:be(`invalid type for getValue: ${h}`)}},t.UTF8ToString=L,t.stringToUTF8=Zr,t.lengthBytesUTF8=mi;var Ya,Za,is,Ir,xi,Fn,wc,_c,xc,El,$c,Sc,Je,Es,kc,Ke,Il,Ze,Tc,Al,Cc,Ec,Ic,Ol,Ac,Oc,zc,Mc,Rc,Bc,Pc,Dc,Nc,Uc,Lc,Fc,jc,Vc,Wc,qc,Hc,Gc,Kc,Xc,Yc,Zc,Qc,Jc,ef,tf,rf,nf,sf,af,of,lf,uf,df,cf,ff,pf,hf,mf,gf,bn,G1=[ie,ae,Rn,le,Qe,Ut,Rt,Bt,Tr,mt,gr,Xi,wa,li,Yi,ui,Wa,qa,Ha,Ge,_t,bt,Lt,ir,Yt,Ft],zl={1086876:(c,h,_,w,I)=>{if(t===void 0||!t.ad)return 1;if((c=L(Number(c>>>0))).startsWith("./")&&(c=c.substring(2)),!(c=t.ad.get(c)))return 2;if(h=Number(h>>>0),_=Number(_>>>0),w=Number(w>>>0),h+_>c.byteLength)return 3;try{let D=c.subarray(h,h+_);switch(I){case 0:(T(),de).set(D,w>>>0);break;case 1:t.Td?t.Td(w,D):t.Ld(w,D);break;default:return 4}return 0}catch{return 4}},1087700:(c,h,_)=>{t.wd(c,(T(),de).subarray(h>>>0,h+_>>>0))},1087764:()=>t.Vd(),1087806:c=>{t.vd(c)},1087843:()=>{t.Ed()},1087874:()=>{t.Fd()},1087903:()=>{t.Jd()},1087928:c=>t.Dd(c),1087961:c=>t.Hd(c),1087993:(c,h,_)=>{t.jd(Number(c),Number(h),Number(_),!0)},1088056:(c,h,_)=>{t.jd(Number(c),Number(h),Number(_))},1088113:()=>typeof wasmOffsetConverter<"u",1088170:c=>{t.bc("Abs",c,void 0)},1088221:c=>{t.bc("Neg",c,void 0)},1088272:c=>{t.bc("Floor",c,void 0)},1088325:c=>{t.bc("Ceil",c,void 0)},1088377:c=>{t.bc("Reciprocal",c,void 0)},1088435:c=>{t.bc("Sqrt",c,void 0)},1088487:c=>{t.bc("Exp",c,void 0)},1088538:c=>{t.bc("Erf",c,void 0)},1088589:c=>{t.bc("Sigmoid",c,void 0)},1088644:(c,h,_)=>{t.bc("HardSigmoid",c,{alpha:h,beta:_})},1088723:c=>{t.bc("HardSwish",c,void 0)},1088780:c=>{t.bc("Log",c,void 0)},1088831:c=>{t.bc("Sin",c,void 0)},1088882:c=>{t.bc("Cos",c,void 0)},1088933:c=>{t.bc("Tan",c,void 0)},1088984:c=>{t.bc("Asin",c,void 0)},1089036:c=>{t.bc("Acos",c,void 0)},1089088:c=>{t.bc("Atan",c,void 0)},1089140:c=>{t.bc("Sinh",c,void 0)},1089192:c=>{t.bc("Cosh",c,void 0)},1089244:c=>{t.bc("Asinh",c,void 0)},1089297:c=>{t.bc("Acosh",c,void 0)},1089350:c=>{t.bc("Atanh",c,void 0)},1089403:c=>{t.bc("Tanh",c,void 0)},1089455:c=>{t.bc("Not",c,void 0)},1089506:(c,h,_)=>{t.bc("Clip",c,{min:h,max:_})},1089575:c=>{t.bc("Clip",c,void 0)},1089627:(c,h)=>{t.bc("Elu",c,{alpha:h})},1089685:c=>{t.bc("Gelu",c,void 0)},1089737:c=>{t.bc("Relu",c,void 0)},1089789:(c,h)=>{t.bc("LeakyRelu",c,{alpha:h})},1089853:(c,h)=>{t.bc("ThresholdedRelu",c,{alpha:h})},1089923:(c,h)=>{t.bc("Cast",c,{to:h})},1089981:c=>{t.bc("Add",c,void 0)},1090032:c=>{t.bc("Sub",c,void 0)},1090083:c=>{t.bc("Mul",c,void 0)},1090134:c=>{t.bc("Div",c,void 0)},1090185:c=>{t.bc("Pow",c,void 0)},1090236:c=>{t.bc("Equal",c,void 0)},1090289:c=>{t.bc("Greater",c,void 0)},1090344:c=>{t.bc("GreaterOrEqual",c,void 0)},1090406:c=>{t.bc("Less",c,void 0)},1090458:c=>{t.bc("LessOrEqual",c,void 0)},1090517:(c,h,_,w,I)=>{t.bc("ReduceMean",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1090692:(c,h,_,w,I)=>{t.bc("ReduceMax",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1090866:(c,h,_,w,I)=>{t.bc("ReduceMin",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091040:(c,h,_,w,I)=>{t.bc("ReduceProd",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091215:(c,h,_,w,I)=>{t.bc("ReduceSum",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091389:(c,h,_,w,I)=>{t.bc("ReduceL1",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091562:(c,h,_,w,I)=>{t.bc("ReduceL2",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091735:(c,h,_,w,I)=>{t.bc("ReduceLogSum",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091912:(c,h,_,w,I)=>{t.bc("ReduceSumSquare",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1092092:(c,h,_,w,I)=>{t.bc("ReduceLogSumExp",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1092272:c=>{t.bc("Where",c,void 0)},1092325:(c,h,_)=>{t.bc("Transpose",c,{perm:h?Array.from((T(),q).subarray(Number(h)>>>0,Number(_)>>>0)):[]})},1092449:(c,h,_,w)=>{t.bc("DepthToSpace",c,{blocksize:h,mode:L(_),format:w?"NHWC":"NCHW"})},1092582:(c,h,_,w)=>{t.bc("DepthToSpace",c,{blocksize:h,mode:L(_),format:w?"NHWC":"NCHW"})},1092715:(c,h,_,w)=>{t.bc("DFT",c,{axis:h,inverse:_,onesided:w})},1092807:(c,h,_,w,I,D,V,J,ve,ke,Ve,nt,vt,kt,jn)=>{t.bc("ConvTranspose",c,{format:ve?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[I],pads:[D,V],strides:[J],wIsConst:()=>!!(T(),Y)[ke>>>0],outputPadding:Ve?Array.from((T(),q).subarray(Number(Ve)>>>0,Number(nt)>>>0)):[],outputShape:vt?Array.from((T(),q).subarray(Number(vt)>>>0,Number(kt)>>>0)):[],activation:L(jn)})},1093240:(c,h,_,w,I,D,V,J,ve,ke,Ve,nt,vt,kt)=>{t.bc("ConvTranspose",c,{format:J?"NHWC":"NCHW",autoPad:h,dilations:Array.from((T(),q).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((T(),q).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((T(),q).subarray(Number(D)>>>0,(Number(D)>>>0)+4>>>0)),strides:Array.from((T(),q).subarray(Number(V)>>>0,(Number(V)>>>0)+2>>>0)),wIsConst:()=>!!(T(),Y)[ve>>>0],outputPadding:ke?Array.from((T(),q).subarray(Number(ke)>>>0,Number(Ve)>>>0)):[],outputShape:nt?Array.from((T(),q).subarray(Number(nt)>>>0,Number(vt)>>>0)):[],activation:L(kt)})},1093901:(c,h,_,w,I,D,V,J,ve,ke,Ve,nt,vt,kt,jn)=>{t.bc("ConvTranspose",c,{format:ve?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[I],pads:[D,V],strides:[J],wIsConst:()=>!!(T(),Y)[ke>>>0],outputPadding:Ve?Array.from((T(),q).subarray(Number(Ve)>>>0,Number(nt)>>>0)):[],outputShape:vt?Array.from((T(),q).subarray(Number(vt)>>>0,Number(kt)>>>0)):[],activation:L(jn)})},1094334:(c,h,_,w,I,D,V,J,ve,ke,Ve,nt,vt,kt)=>{t.bc("ConvTranspose",c,{format:J?"NHWC":"NCHW",autoPad:h,dilations:Array.from((T(),q).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((T(),q).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((T(),q).subarray(Number(D)>>>0,(Number(D)>>>0)+4>>>0)),strides:Array.from((T(),q).subarray(Number(V)>>>0,(Number(V)>>>0)+2>>>0)),wIsConst:()=>!!(T(),Y)[ve>>>0],outputPadding:ke?Array.from((T(),q).subarray(Number(ke)>>>0,Number(Ve)>>>0)):[],outputShape:nt?Array.from((T(),q).subarray(Number(nt)>>>0,Number(vt)>>>0)):[],activation:L(kt)})},1094995:(c,h)=>{t.bc("GlobalAveragePool",c,{format:h?"NHWC":"NCHW"})},1095086:(c,h,_,w,I,D,V,J,ve,ke,Ve,nt,vt,kt)=>{t.bc("AveragePool",c,{format:kt?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:D?Array.from((T(),q).subarray(Number(D)>>>0,Number(V)>>>0)):[],kernel_shape:J?Array.from((T(),q).subarray(Number(J)>>>0,Number(ve)>>>0)):[],pads:ke?Array.from((T(),q).subarray(Number(ke)>>>0,Number(Ve)>>>0)):[],strides:nt?Array.from((T(),q).subarray(Number(nt)>>>0,Number(vt)>>>0)):[]})},1095565:(c,h)=>{t.bc("GlobalAveragePool",c,{format:h?"NHWC":"NCHW"})},1095656:(c,h,_,w,I,D,V,J,ve,ke,Ve,nt,vt,kt)=>{t.bc("AveragePool",c,{format:kt?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:D?Array.from((T(),q).subarray(Number(D)>>>0,Number(V)>>>0)):[],kernel_shape:J?Array.from((T(),q).subarray(Number(J)>>>0,Number(ve)>>>0)):[],pads:ke?Array.from((T(),q).subarray(Number(ke)>>>0,Number(Ve)>>>0)):[],strides:nt?Array.from((T(),q).subarray(Number(nt)>>>0,Number(vt)>>>0)):[]})},1096135:(c,h)=>{t.bc("GlobalMaxPool",c,{format:h?"NHWC":"NCHW"})},1096222:(c,h,_,w,I,D,V,J,ve,ke,Ve,nt,vt,kt)=>{t.bc("MaxPool",c,{format:kt?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:D?Array.from((T(),q).subarray(Number(D)>>>0,Number(V)>>>0)):[],kernel_shape:J?Array.from((T(),q).subarray(Number(J)>>>0,Number(ve)>>>0)):[],pads:ke?Array.from((T(),q).subarray(Number(ke)>>>0,Number(Ve)>>>0)):[],strides:nt?Array.from((T(),q).subarray(Number(nt)>>>0,Number(vt)>>>0)):[]})},1096697:(c,h)=>{t.bc("GlobalMaxPool",c,{format:h?"NHWC":"NCHW"})},1096784:(c,h,_,w,I,D,V,J,ve,ke,Ve,nt,vt,kt)=>{t.bc("MaxPool",c,{format:kt?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:D?Array.from((T(),q).subarray(Number(D)>>>0,Number(V)>>>0)):[],kernel_shape:J?Array.from((T(),q).subarray(Number(J)>>>0,Number(ve)>>>0)):[],pads:ke?Array.from((T(),q).subarray(Number(ke)>>>0,Number(Ve)>>>0)):[],strides:nt?Array.from((T(),q).subarray(Number(nt)>>>0,Number(vt)>>>0)):[]})},1097259:(c,h,_,w,I)=>{t.bc("Gemm",c,{alpha:h,beta:_,transA:w,transB:I})},1097363:c=>{t.bc("MatMul",c,void 0)},1097417:(c,h,_,w)=>{t.bc("ArgMax",c,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1097525:(c,h,_,w)=>{t.bc("ArgMin",c,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1097633:(c,h)=>{t.bc("Softmax",c,{axis:h})},1097696:(c,h)=>{t.bc("Concat",c,{axis:h})},1097756:(c,h,_,w,I)=>{t.bc("Split",c,{axis:h,numOutputs:_,splitSizes:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1097912:c=>{t.bc("Expand",c,void 0)},1097966:(c,h)=>{t.bc("Gather",c,{axis:Number(h)})},1098037:(c,h)=>{t.bc("GatherElements",c,{axis:Number(h)})},1098116:(c,h)=>{t.bc("GatherND",c,{batch_dims:Number(h)})},1098195:(c,h,_,w,I,D,V,J,ve,ke,Ve)=>{t.bc("Resize",c,{antialias:h,axes:_?Array.from((T(),q).subarray(Number(_)>>>0,Number(w)>>>0)):[],coordinateTransformMode:L(I),cubicCoeffA:D,excludeOutside:V,extrapolationValue:J,keepAspectRatioPolicy:L(ve),mode:L(ke),nearestMode:L(Ve)})},1098557:(c,h,_,w,I,D,V)=>{t.bc("Slice",c,{starts:h?Array.from((T(),q).subarray(Number(h)>>>0,Number(_)>>>0)):[],ends:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[],axes:D?Array.from((T(),q).subarray(Number(D)>>>0,Number(V)>>>0)):[]})},1098821:c=>{t.bc("Tile",c,void 0)},1098873:(c,h,_)=>{t.bc("InstanceNormalization",c,{epsilon:h,format:_?"NHWC":"NCHW"})},1098987:(c,h,_)=>{t.bc("InstanceNormalization",c,{epsilon:h,format:_?"NHWC":"NCHW"})},1099101:c=>{t.bc("Range",c,void 0)},1099154:(c,h)=>{t.bc("Einsum",c,{equation:L(h)})},1099235:(c,h,_,w,I)=>{t.bc("Pad",c,{mode:h,value:_,pads:w?Array.from((T(),q).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1099378:(c,h,_,w,I,D)=>{t.bc("BatchNormalization",c,{epsilon:h,momentum:_,spatial:!!I,trainingMode:!!w,format:D?"NHWC":"NCHW"})},1099547:(c,h,_,w,I,D)=>{t.bc("BatchNormalization",c,{epsilon:h,momentum:_,spatial:!!I,trainingMode:!!w,format:D?"NHWC":"NCHW"})},1099716:(c,h,_)=>{t.bc("CumSum",c,{exclusive:Number(h),reverse:Number(_)})},1099813:(c,h,_)=>{t.bc("DequantizeLinear",c,{axis:h,blockSize:_})},1099903:(c,h,_,w,I)=>{t.bc("GridSample",c,{align_corners:h,mode:L(_),padding_mode:L(w),format:I?"NHWC":"NCHW"})},1100073:(c,h,_,w,I)=>{t.bc("GridSample",c,{align_corners:h,mode:L(_),padding_mode:L(w),format:I?"NHWC":"NCHW"})},1100243:(c,h)=>{t.bc("ScatterND",c,{reduction:L(h)})},1100328:(c,h,_,w,I,D,V,J,ve)=>{t.bc("Attention",c,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:I,doRotary:D,qkvHiddenSizes:V?Array.from((T(),q).subarray(Number(J)>>>0,Number(J)+V>>>0)):[],pastPresentShareBuffer:!!ve})},1100600:c=>{t.bc("BiasAdd",c,void 0)},1100655:c=>{t.bc("BiasSplitGelu",c,void 0)},1100716:c=>{t.bc("FastGelu",c,void 0)},1100772:(c,h,_,w,I,D,V,J,ve,ke,Ve,nt,vt,kt,jn,Ml)=>{t.bc("Conv",c,{format:nt?"NHWC":"NCHW",auto_pad:h,dilations:_?Array.from((T(),q).subarray(Number(_)>>>0,Number(w)>>>0)):[],group:I,kernel_shape:D?Array.from((T(),q).subarray(Number(D)>>>0,Number(V)>>>0)):[],pads:J?Array.from((T(),q).subarray(Number(J)>>>0,Number(ve)>>>0)):[],strides:ke?Array.from((T(),q).subarray(Number(ke)>>>0,Number(Ve)>>>0)):[],w_is_const:()=>!!(T(),Y)[Number(vt)>>>0],activation:L(kt),activation_params:jn?Array.from((T(),he).subarray(Number(jn)>>>0,Number(Ml)>>>0)):[]})},1101356:c=>{t.bc("Gelu",c,void 0)},1101408:(c,h,_,w,I,D,V,J,ve)=>{t.bc("GroupQueryAttention",c,{numHeads:h,kvNumHeads:_,scale:w,softcap:I,doRotary:D,rotaryInterleaved:V,smoothSoftmax:J,localWindowSize:ve})},1101625:(c,h,_,w)=>{t.bc("LayerNormalization",c,{axis:h,epsilon:_,simplified:!!w})},1101736:(c,h,_,w)=>{t.bc("LayerNormalization",c,{axis:h,epsilon:_,simplified:!!w})},1101847:(c,h,_,w,I,D)=>{t.bc("MatMulNBits",c,{k:h,n:_,accuracyLevel:w,bits:I,blockSize:D})},1101974:(c,h,_,w,I,D)=>{t.bc("MultiHeadAttention",c,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:I,doRotary:D})},1102133:(c,h)=>{t.bc("QuickGelu",c,{alpha:h})},1102197:(c,h,_,w,I)=>{t.bc("RotaryEmbedding",c,{interleaved:!!h,numHeads:_,rotaryEmbeddingDim:w,scale:I})},1102336:(c,h,_)=>{t.bc("SkipLayerNormalization",c,{epsilon:h,simplified:!!_})},1102438:(c,h,_)=>{t.bc("SkipLayerNormalization",c,{epsilon:h,simplified:!!_})},1102540:(c,h,_,w)=>{t.bc("GatherBlockQuantized",c,{gatherAxis:h,quantizeAxis:_,blockSize:w})},1102661:c=>{t.Id(c)},1102695:(c,h)=>t.Kd(Number(c),Number(h),t.$c.Nd,t.$c.errors)};function K1(c,h,_){return Oa(async()=>{await t.Gd(Number(c),Number(h),Number(_))})}function X1(){return typeof wasmOffsetConverter<"u"}function Y1(c,h,_,w){var I=Ze();try{return Dc(c,h,_,w)}catch(D){if(Ke(I),D!==D+0)throw D;Je(1,0)}}function Z1(c,h,_){var w=Ze();try{return Mc(c,h,_)}catch(I){if(Ke(w),I!==I+0)throw I;Je(1,0)}}function Q1(c){var h=Ze();try{Ac(c)}catch(_){if(Ke(h),_!==_+0)throw _;Je(1,0)}}function J1(c,h){var _=Ze();try{return Ol(c,h)}catch(w){if(Ke(_),w!==w+0)throw w;Je(1,0)}}function ew(c,h,_){var w=Ze();try{Ic(c,h,_)}catch(I){if(Ke(w),I!==I+0)throw I;Je(1,0)}}function tw(c,h){var _=Ze();try{Nc(c,h)}catch(w){if(Ke(_),w!==w+0)throw w;Je(1,0)}}function rw(c,h,_,w,I,D,V){var J=Ze();try{return Bc(c,h,_,w,I,D,V)}catch(ve){if(Ke(J),ve!==ve+0)throw ve;Je(1,0)}}function nw(c,h,_,w,I,D){var V=Ze();try{Oc(c,h,_,w,I,D)}catch(J){if(Ke(V),J!==J+0)throw J;Je(1,0)}}function iw(c,h,_,w){var I=Ze();try{Pc(c,h,_,w)}catch(D){if(Ke(I),D!==D+0)throw D;Je(1,0)}}function sw(c,h,_,w,I){var D=Ze();try{zc(c,h,_,w,I)}catch(V){if(Ke(D),V!==V+0)throw V;Je(1,0)}}function aw(c,h,_,w,I,D,V){var J=Ze();try{Lc(c,h,_,w,I,D,V)}catch(ve){if(Ke(J),ve!==ve+0)throw ve;Je(1,0)}}function ow(c,h,_,w,I,D,V){var J=Ze();try{Fc(c,h,_,w,I,D,V)}catch(ve){if(Ke(J),ve!==ve+0)throw ve;Je(1,0)}}function lw(c,h,_,w,I,D,V,J){var ve=Ze();try{qc(c,h,_,w,I,D,V,J)}catch(ke){if(Ke(ve),ke!==ke+0)throw ke;Je(1,0)}}function uw(c,h,_,w,I){var D=Ze();try{return Uc(c,h,_,w,I)}catch(V){if(Ke(D),V!==V+0)throw V;Je(1,0)}}function dw(c,h,_){var w=Ze();try{return Hc(c,h,_)}catch(I){if(Ke(w),I!==I+0)throw I;Je(1,0)}}function cw(c,h,_,w,I,D,V,J){var ve=Ze();try{Gc(c,h,_,w,I,D,V,J)}catch(ke){if(Ke(ve),ke!==ke+0)throw ke;Je(1,0)}}function fw(c,h,_,w,I,D,V,J,ve,ke,Ve,nt){var vt=Ze();try{jc(c,h,_,w,I,D,V,J,ve,ke,Ve,nt)}catch(kt){if(Ke(vt),kt!==kt+0)throw kt;Je(1,0)}}function pw(c,h,_){var w=Ze();try{return Kc(c,h,_)}catch(I){if(Ke(w),I!==I+0)throw I;return Je(1,0),0n}}function hw(c,h,_,w,I,D,V,J,ve){var ke=Ze();try{Rc(c,h,_,w,I,D,V,J,ve)}catch(Ve){if(Ke(ke),Ve!==Ve+0)throw Ve;Je(1,0)}}function mw(c){var h=Ze();try{return Xc(c)}catch(_){if(Ke(h),_!==_+0)throw _;Je(1,0)}}function gw(c,h){var _=Ze();try{return ff(c,h)}catch(w){if(Ke(_),w!==w+0)throw w;return Je(1,0),0n}}function yw(c,h,_,w){var I=Ze();try{return Yc(c,h,_,w)}catch(D){if(Ke(I),D!==D+0)throw D;Je(1,0)}}function bw(c){var h=Ze();try{return Zc(c)}catch(_){if(Ke(h),_!==_+0)throw _;return Je(1,0),0n}}function vw(c,h,_,w){var I=Ze();try{return nf(c,h,_,w)}catch(D){if(Ke(I),D!==D+0)throw D;Je(1,0)}}function ww(c,h,_,w,I){var D=Ze();try{return sf(c,h,_,w,I)}catch(V){if(Ke(D),V!==V+0)throw V;Je(1,0)}}function _w(c,h,_,w,I,D){var V=Ze();try{return af(c,h,_,w,I,D)}catch(J){if(Ke(V),J!==J+0)throw J;Je(1,0)}}function xw(c,h,_,w,I,D){var V=Ze();try{return Vc(c,h,_,w,I,D)}catch(J){if(Ke(V),J!==J+0)throw J;Je(1,0)}}function $w(c,h,_,w,I,D){var V=Ze();try{return of(c,h,_,w,I,D)}catch(J){if(Ke(V),J!==J+0)throw J;Je(1,0)}}function Sw(c,h,_,w,I,D,V,J){var ve=Ze();try{return Wc(c,h,_,w,I,D,V,J)}catch(ke){if(Ke(ve),ke!==ke+0)throw ke;Je(1,0)}}function kw(c,h,_,w,I){var D=Ze();try{return lf(c,h,_,w,I)}catch(V){if(Ke(D),V!==V+0)throw V;return Je(1,0),0n}}function Tw(c,h,_,w){var I=Ze();try{return uf(c,h,_,w)}catch(D){if(Ke(I),D!==D+0)throw D;Je(1,0)}}function Cw(c,h,_,w){var I=Ze();try{return df(c,h,_,w)}catch(D){if(Ke(I),D!==D+0)throw D;Je(1,0)}}function Ew(c,h,_,w,I,D,V,J,ve,ke,Ve,nt){var vt=Ze();try{return cf(c,h,_,w,I,D,V,J,ve,ke,Ve,nt)}catch(kt){if(Ke(vt),kt!==kt+0)throw kt;Je(1,0)}}function Iw(c,h,_,w,I,D,V,J,ve,ke,Ve){var nt=Ze();try{tf(c,h,_,w,I,D,V,J,ve,ke,Ve)}catch(vt){if(Ke(nt),vt!==vt+0)throw vt;Je(1,0)}}function Aw(c,h,_,w,I,D,V,J,ve,ke,Ve,nt,vt,kt,jn,Ml){var Rw=Ze();try{rf(c,h,_,w,I,D,V,J,ve,ke,Ve,nt,vt,kt,jn,Ml)}catch(Rl){if(Ke(Rw),Rl!==Rl+0)throw Rl;Je(1,0)}}function Ow(c,h,_){var w=Ze();try{return Qc(c,h,_)}catch(I){if(Ke(w),I!==I+0)throw I;Je(1,0)}}function zw(c,h,_){var w=Ze();try{return Jc(c,h,_)}catch(I){if(Ke(w),I!==I+0)throw I;Je(1,0)}}function Mw(c,h,_,w){var I=Ze();try{ef(c,h,_,w)}catch(D){if(Ke(I),D!==D+0)throw D;Je(1,0)}}function Qa(){if(0<dt)M=Qa;else if(i)x?.(t),Se();else{for(var c=qe;0<c.length;)c.shift()(t);0<dt?M=Qa:(t.calledRun=!0,P||(Se(),x?.(t)))}}return i||(bn=await et(),Qa()),t.PTR_SIZE=4,re?t:new Promise((c,h)=>{x=c,E=h})}var Iy,sp,e$=pe(()=>{"use strict";Iy=ip,sp=globalThis.self?.name?.startsWith("em-pthread"),sp&&ip()}),nu,hd,ap,vr,Ay,lo,op,lp,iu,up,su,Oy,au,zy,Xd=pe(()=>{"use strict";Kd(),nu=typeof location>"u"?void 0:location.origin,hd=import.meta.url>"file:"&&import.meta.url<"file;",ap=()=>{if(hd){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,nu).href}return import.meta.url},vr=ap(),Ay=()=>{if(vr&&!vr.startsWith("blob:"))return vr.substring(0,vr.lastIndexOf("/")+1)},lo=(e,t)=>{try{let r=t??vr;return(r?new URL(e,r):new URL(e)).origin===nu}catch{return!1}},op=(e,t)=>{let r=t??vr;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},lp=(e,t)=>`${t??"./"}${e}`,iu=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},up=async e=>(await import(e)).default,su=(J2(),pa(Ty)).default,Oy=async()=>{if(!vr)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(lo(vr))return[void 0,su()];let e=await iu(vr);return[e,su(e)]},au=(e$(),pa(Ey)).default,zy=async(e,t,r,n)=>{let i=au&&!(e||t);if(i)if(vr)i=lo(vr)||n&&!r;else if(n&&!r)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,au];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??op(s,t),o=r&&a&&!lo(a,t),l=o?await iu(a):a??lp(s,t);return[o?l:void 0,await up(l)]}}}),ou,uo,Ms,lu,dp,cp,fp,Yd,$t,Hi=pe(()=>{"use strict";Xd(),uo=!1,Ms=!1,lu=!1,dp=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},cp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},fp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Yd=async e=>{if(uo)return Promise.resolve();if(Ms)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(lu)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ms=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!fp())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!cp())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=dp();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,a=i?.mjs,o=a?.href??a,l=i?.wasm,d=l?.href??l,f=e.wasmBinary,[p,g]=await zy(o,s,r>1,!!f||!!d),b=!1,y=[];if(t>0&&y.push(new Promise(x=>{setTimeout(()=>{b=!0,x()},t)})),y.push(new Promise((x,E)=>{let S={numThreads:r};if(f)S.wasmBinary=f,S.locateFile=$=>$;else if(d||s)S.locateFile=$=>d??s+$;else if(o&&o.indexOf("blob:")!==0)S.locateFile=$=>new URL($,o).href;else if(p){let $=Ay();$&&(S.locateFile=A=>$+A)}g(S).then($=>{Ms=!1,uo=!0,ou=$,x(),p&&URL.revokeObjectURL(p)},$=>{Ms=!1,lu=!0,E($)})})),await Promise.race(y),b)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},$t=()=>{if(uo&&ou)return ou;throw new Error("WebAssembly is not initialized yet.")}}),Wr,Fo,ct,Zd=pe(()=>{"use strict";Hi(),Wr=(e,t)=>{let r=$t(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},Fo=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,s])=>{let a=t?t+i:i;if(typeof s=="object")Fo(s,a+".",r,n);else if(typeof s=="string"||typeof s=="number")n(a,s.toString());else if(typeof s=="boolean")n(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},ct=e=>{let t=$t(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);let s=Number(t.getValue(i,n===4?"i32":"i64")),a=t.getValue(i+n,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),My,t$=pe(()=>{"use strict";Hi(),Zd(),My=e=>{let t=$t(),r=0,n=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let s=0;return e?.tag!==void 0&&(s=Wr(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),r===0&&ct("Can't create run options."),e?.extra!==void 0&&Fo(e.extra,"",new WeakSet,(a,o)=>{let l=Wr(a,n),d=Wr(o,n);t._OrtAddRunConfigEntry(r,l,d)!==0&&ct(`Can't set a run config entry: ${a} - ${o}.`)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(a=>t._free(a)),s}}}),pp,hp,mp,Ci,gp,Ry,r$=pe(()=>{"use strict";Hi(),Zd(),pp=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},hp=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},mp=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ci=(e,t,r,n)=>{let i=Wr(t,n),s=Wr(r,n);$t()._OrtAddSessionConfigEntry(e,i,s)!==0&&ct(`Can't set a session config entry: ${t} - ${r}.`)},gp=async(e,t,r)=>{let n=t.executionProviders;for(let i of n){let s=typeof i=="string"?i:i.name,a=[];switch(s){case"webnn":if(s="WEBNN",Ci(e,"session.disable_quant_qdq","1",r),Ci(e,"session.disable_qdq_constant_folding","1",r),typeof i!="string"){let p=i?.deviceType;p&&Ci(e,"deviceType",p,r)}break;case"webgpu":if(s="JS",typeof i!="string"){let p=i;if(p?.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Ci(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=Wr(s,r),l=a.length,d=0,f=0;if(l>0){d=$t()._malloc(l*$t().PTR_SIZE),r.push(d),f=$t()._malloc(l*$t().PTR_SIZE),r.push(f);for(let p=0;p<l;p++)$t().setValue(d+p*$t().PTR_SIZE,a[p][0],"*"),$t().setValue(f+p*$t().PTR_SIZE,a[p][1],"*")}await $t()._OrtAppendExecutionProvider(e,o,d,f,l)!==0&&ct(`Can't append execution provider: ${s}.`)}},Ry=async e=>{let t=$t(),r=0,n=[],i=e||{};mp(i);try{let s=pp(i.graphOptimizationLevel??"all"),a=hp(i.executionMode??"sequential"),o=typeof i.logId=="string"?Wr(i.logId,n):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let f=typeof i.optimizedModelFilePath=="string"?Wr(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,l,d,f),r===0&&ct("Can't create session options."),i.executionProviders&&await gp(r,i,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Ci(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[p,g]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let b=Wr(p,n);t._OrtAddFreeDimensionOverride(r,b,g)!==0&&ct(`Can't set a free dimension override: ${p} - ${g}.`)}return i.extra!==void 0&&Fo(i.extra,"",new WeakSet,(p,g)=>{Ci(r,p,g,n)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ct("Can't release session options."),n.forEach(a=>t._free(a)),s}}}),Bi,In,Pi,ll,jo,Qd,Jd,md,Be=pe(()=>{"use strict";Bi=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},In=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Pi=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return r>0?Math.ceil(n*r):void 0},ll=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},jo=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Qd=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Jd=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",md=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ec,By=pe(()=>{"use strict";Kd(),ec=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let l=Math.ceil(n/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await i.read();if(o)break;let d=l.byteLength;new Uint8Array(s,a,d).set(l),a+=d}return new Uint8Array(s,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),yp,bp,vp,wp,tc,_p,rt,Mn=pe(()=>{"use strict";Be(),yp=["V","I","W","E","F"],bp=(e,t)=>{console.log(`[${yp[e]},${new Date().toISOString()}]${t}`)},tc=(e,t)=>{vp=e,wp=t},_p=(e,t)=>{let r=jo(e),n=jo(vp);r>=n&&bp(r,typeof t=="function"?t():t)},rt=(...e)=>{wp&&_p(...e)}}),xp,gs,K,Vo,Py,Dy,Ny,Ne=pe(()=>{"use strict";xp=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},gs=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(n<2||i<2)return;let o=xp.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=r?3:1;o<=s;o++){let l=n-o<0?1:e[n-o],d=i-o<0?1:t[i-o];if(l!==d&&l>1&&d>1)return;let f=Math.max(l,d);if(l&&d)a[s-o]=Math.max(l,d);else{if(f>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},K=class Co{static size(t){return Co.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),s=n-1;for(;s>=0;){if(t[s]%r===0){i[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,r/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Co.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Co.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let s=r;s<n;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,s)=>i+r[s]+r[s+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},Vo=class Kn{static adjustPoolAttributes(t,r,n,i,s,a){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<n.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=n[o]||a[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)Kn.adjustPadAndReturnShape(t[l+(a?1:2)],r[l],n[l],i[l],s,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,n,i,s,a,o,l=0){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return Kn.computeShapeHelper(t,r,d,n,i,s,a,o,l),d}static computeConvOutputShape(t,r,n,i,s,a,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return Kn.computeShapeHelper(!1,t,l,n,i,s,a,o),l}static computeShapeHelper(t,r,n,i,s,a,o,l,d=0){if(t)for(let f=0;f<r.length-2;f++)n.push(1);else for(let f=0;f<r.length-2;f++)n.push(Kn.adjustPadAndReturnShape(r[f+2],i[f],s[f],a[f],o,f,f+r.length-2,l,d))}static computeOutputSize(t,r,n,i,s){let a=Math.floor(t/r)+1;return s===1&&(a=Math.ceil(t/r)+1,(a-1)*r>=n+i&&(a-=1)),a}static adjustPadAndReturnShape(t,r,n,i,s,a,o,l,d=0){let f=n*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[o]=0,Kn.computeOutputSize(t-f,r,t,0,d);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=(Math.floor((t+r-1)/r)-1)*r+i-t;return s[a]=Math.floor(l==="SAME_LOWER"?(p+1)/2:p/2),s[o]=p-s[a],Kn.computeOutputSize(t+s[a]+s[o]-f,r,t,s[a],d)}default:throw new Error("Unsupported AutoPad type")}else return Kn.computeOutputSize(t+s[a]+s[o]-f,r,t,s[a],d)}},Py=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let l=-1;if(n?(o=r[0],l=1):(o=r[1],l=0),r[l]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(i&&!gs.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},Dy=-34028234663852886e22,Ny=34028234663852886e22}),rc,Uy=pe(()=>{"use strict";Be(),rc=(e,t)=>new(ll(t))(e)}),uu,$p,du,Sp,cu,kp,fu,pu,hu,Tp,Ly,n$=pe(()=>{"use strict";Be(),Mn(),uu=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),$p=(e,t)=>{if(t==="int32")return e;let r=uu.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=e.byteLength/n,s=new(ll(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let o=0;o<i;o++){let l=s[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},du=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Sp=1,cu=()=>Sp++,kp=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),fu=(e,t)=>{let r=uu.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},pu=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:i,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return fu(this.dataType,this.tensorShape)}destroy(){rt("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=du(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},hu=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let i=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!s?.input.dataTypes.includes(t)){if(a=kp.get(t),!a||!s?.input.dataTypes.includes(a))throw new Error(`WebNN backend does not support data type: ${t}`);rt("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==fu(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,a),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=$p(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else rt("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?du(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Tp=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=cu();return this.tensorTrackersById.set(e,new hu(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){rt("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,n,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){rt("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let i=this.getMLContext(e),s=cu(),a=new pu({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(s,new hu(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,r,n,i,s,a){let o=this.getMLContext(e);for(let[d,f]of this.freeTensors.entries())if(f.canReuseTensor(o,t,r)){rt("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let p=this.freeTensors.splice(d,1)[0];return p.sessionId=e,p}rt("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:a??t,shape:r,dimensions:r,usage:n,writable:i,readable:s});return new pu({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Ly=(...e)=>new Tp(...e)}),Rs,Cp,Fy,i$=pe(()=>{"use strict";Be(),Hi(),Uy(),n$(),Mn(),Rs=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Cp=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,s)=>i===n[s]&&e[i]===t[i])},Fy=class{constructor(e){this.tensorManager=Ly(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,tc(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){rt("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){rt("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)rt("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>Cp(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){rt("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){let s=Rs.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,n,i)}async createTemporaryTensor(e,t,r){rt("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=Rs.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!$t().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");rt("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return rc(r,t)}}registerMLTensor(e,t,r,n){let i=Rs.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,i,n);return rt("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${s}}`),s}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=Rs.get(Bi(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof n>"u"?!1:r?!!i?.input.dataTypes.includes(n):!!i?.output.dataTypes.includes(n)}flush(){}}}),nc=pe(()=>{"use strict"}),mu,co,fo,Ep,Ip,gu,gd,Ap,jy,s$=pe(()=>{"use strict";Mn(),nc(),mu=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),co=[],fo=e=>Math.ceil(Number(e)/16)*16,Ep=e=>{for(let t=0;t<co.length;t++){let r=co[t];if(e<=r)return r}return Math.ceil(e/16)*16},Ip=1,gu=()=>Ip++,gd=async(e,t,r,n)=>{let i=fo(r),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(n){let l=n();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},Ap=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of mu)co.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,s=fo(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);if(s===i&&n%4===0)this.backend.device.queue.writeBuffer(a.gpuData.buffer,0,r,n,i);else{let o=new Uint8Array(s);o.set(t),this.backend.device.queue.writeBuffer(a.gpuData.buffer,0,o,0,s)}rt("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=fo(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return rt("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=gu();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),rt("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),rt("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Ep(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let a={id:gu(),type:0,buffer:n};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),rt("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return rt("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await gd(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=mu.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(rt("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},jy=(...e)=>new Ap(...e)}),Op,ut,It=pe(()=>{"use strict";Op=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ut=e=>new Op(e)}),ys,po,Wt,Vt,Ae,Et,yd,us,ni,Ie,Bs,Q,Ce,Vy,ic,zp,Wy,Ue=pe(()=>{"use strict";Be(),Ne(),ys=64,po=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Wt=(e,t=1)=>{let r=po(e,t);return typeof r=="string"?r:r[0]},Vt=(e,t=1)=>{let r=po(e,t);return typeof r=="string"?r:r[1]},Ae=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:K.computeStrides(r)})}),t},Et=e=>e%4===0?4:e%2===0?2:1,yd=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,us=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,ni=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Ie=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Bs=(e,t,r,n,i)=>{let s=typeof r=="number",a=s?r:r.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=po(t,i),f=typeof d=="string"?d:d[1],p=typeof d=="string"?d:d[0],g={indices:l,value:f,storage:p,tensor:t},b=re=>typeof re=="string"?re:`${re}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},x=s?"uniforms.":"",E=`${x}${e}_shape`,S=`${x}${e}_strides`,$="";for(let re=0;re<a-1;re++)$+=`
    let dim${re} = current / ${Ie(S,re,a)};
    let rest${re} = current % ${Ie(S,re,a)};
    indices[${re}] = dim${re};
    current = rest${re};
    `;$+=`indices[${a-1}] = current;`;let A=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${$}
    return indices;
  }`,C=re=>(y.offsetToIndices=!0,a<2?re:`o2i_${e}(${re})`),O=[];if(a>=2)for(let re=a-1;re>=0;re--)O.push(`${Ie(S,re,a)} * (indices[${re}])`);let P=a<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${O.join("+")};
  }`,N=re=>(y.indicesToOffset=!0,a<2?re:`i2o_${e}(${re})`),T=(...re)=>a===0?"0u":`${g.indices}(${re.map(b).join(",")})`,W=(re,xe)=>a<2?`${re}`:`${Ie(re,xe,a)}`,Y=(re,xe,Se)=>a<2?`${re}=${Se};`:`${Ie(re,xe,a)}=${Se};`,de={},X=(re,xe)=>{y.broadcastedIndicesToOffset=!0;let Se=`${xe.name}broadcastedIndicesTo${e}Offset`;if(Se in de)return`${Se}(${re})`;let be=[];for(let ht=a-1;ht>=0;ht--){let et=xe.indicesGet("outputIndices",ht+xe.rank-a);be.push(`${W(S,ht)} * (${et} % ${W(E,ht)})`)}return de[Se]=`fn ${Se}(outputIndices: ${xe.type.indices}) -> u32 {
             return ${be.length>0?be.join("+"):"0u"};
           }`,`${Se}(${re})`},ue=(re,xe)=>(()=>{if(g.storage===g.value)return`${e}[${re}]=${xe};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${re}]=vec2<u32>(u32(${xe}), select(0u, 0xFFFFFFFFu, ${xe} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${re}]=vec2<u32>(u32(${xe}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${re}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${xe}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),q=re=>(()=>{if(g.storage===g.value)return`${e}[${re}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${re}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${re}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${re}] & 0xFFu), bool(${e}[${re}] & 0xFF00u), bool(${e}[${re}] & 0xFF0000u), bool(${e}[${re}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),ee=a<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${f} {
    return ${q(`i2o_${e}(indices)`)};
  }`,he=a<2?"":(()=>{let re=o.map(Se=>`d${Se}: u32`).join(", "),xe=o.map(Se=>`d${Se}`).join(", ");return`
  fn get_${e}(${re}) -> ${f} {
    return get_${e}ByIndices(${T(xe)});
  }`})(),ne=(...re)=>{if(re.length!==a)throw new Error(`indices length must be ${a}`);let xe=re.map(b).join(",");return a===0?q("0u"):a===1?q(xe[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${xe})`)},fe=re=>a<2?q(re):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${re})`),oe=a<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${f}) {
    ${ue(`i2o_${e}(indices)`,"value")}
  }`,Te=a<2?"":(()=>{let re=o.map(Se=>`d${Se}: u32`).join(", "),xe=o.map(Se=>`d${Se}`).join(", ");return`
  fn set_${e}(${re}, value: ${f}) {
    set_${e}ByIndices(${T(xe)}, value);
  }`})();return{impl:()=>{let re=[],xe=!1;return y.offsetToIndices&&(re.push(A),xe=!0),y.indicesToOffset&&(re.push(P),xe=!0),y.broadcastedIndicesToOffset&&(Object.values(de).forEach(Se=>re.push(Se)),xe=!0),y.set&&(re.push(Te),xe=!0),y.setByIndices&&(re.push(oe),xe=!0),y.get&&(re.push(he),xe=!0),y.getByIndices&&(re.push(ee),xe=!0),!s&&xe&&re.unshift(`const ${E} = ${g.indices}(${r.join(",")});`,`const ${S} = ${g.indices}(${K.computeStrides(r).join(",")});`),re.join(`
`)},type:g,offsetToIndices:C,indicesToOffset:N,broadcastedIndicesToOffset:X,indices:T,indicesGet:W,indicesSet:Y,set:(...re)=>{if(re.length!==a+1)throw new Error(`indices length must be ${a}`);let xe=re[a];if(typeof xe!="string")throw new Error("value must be string");let Se=re.slice(0,a).map(b).join(",");return a===0?ue("0u",xe):a===1?ue(Se[0],xe):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${Se}, ${xe})`)},setByOffset:ue,setByIndices:(re,xe)=>a<2?ue(re,xe):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${re}, ${xe});`),get:ne,getByOffset:q,getByIndices:fe,usage:n,name:e,strides:S,shape:E,rank:a}},Q=(e,t,r,n=1)=>Bs(e,t,r,"input",n),Ce=(e,t,r,n=1)=>Bs(e,t,r,"output",n),Vy=(e,t,r)=>Bs(e,t,r,"atomicOutput",1),ic=(e,t,r,n=1)=>Bs(e,t,r,"internal",n),zp=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=ys){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Wy=(e,t)=>new zp(e,t)}),Mp,yu,Rp,Bp,Pp,Dp,$r,qy,Hy,si=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),Mp=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},yu=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Rp=(e,t)=>K.sortBasedOnPerm(e,yu(e.length,t)),Bp=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},Pp=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},Dp=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},$r=(e,t)=>{let r=e.dataType,n=e.dims.length,i=yu(n,t),s=Rp(e.dims,i),a=e.dims,o=s,l=n<2||Dp(i,e.dims),d;if(l)return d=y=>{let x=Q("input",r,a,4),E=Ce("output",r,o,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(x,E)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=K.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:f,newPerm:p}=Pp(e.dims,i),g=K.areEqual(p,[2,3,1]),b=K.areEqual(p,[3,1,2]);if(f.length===2||g||b){a=g?[f[0],f[1]*f[2]]:b?[f[0]*f[1],f[2]]:f,o=[a[1],a[0]];let y=16;return d=x=>{let E=Q("a",r,a.length),S=Ce("output",r,o.length);return`
  ${x.registerUniform("output_size","u32").declareVariables(E,S)}
  var<workgroup> tile : array<array<${S.type.value}, ${y+1}>, ${y}>;
  ${x.mainStart([y,y,1])}
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let x=K.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/y),y:Math.ceil(o[0]/y)},programUniforms:[{type:12,data:x},...Ae(a,o)]}},getShaderSource:d}}return d=y=>{let x=Q("a",r,a.length),E=Ce("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(x,E)}

  ${Bp(i,n,x,E)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${E.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${E.setByOffset("global_idx",x.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=K.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Ae(a,o)]}},getShaderSource:d}},qy=(e,t)=>{Mp(e.inputs,t.perm),e.compute($r(e.inputs[0],t.perm))},Hy=e=>ut({perm:e.perm})}),Np,Up,Lp,Fp,jp,Vp,Wp,qp,Hp,Gp,Nr,Gy,Ky,Xy,Yy,Zy,Qy,Jy,eb,tb,rb,a$=pe(()=>{"use strict";Be(),Ne(),Ue(),sc(),si(),Np={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Up={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Lp={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Fp={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},jp=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},Vp=(e,t)=>{let r=[],n=e.length;for(let s=0;s<n;s++)t.indexOf(s)===-1&&r.push(e[s]);let i=t.map(s=>e[s]);return[r,i]},Wp=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?n.push(e[i++]):n.push(1);return n},qp=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Hp=(e,t)=>{let r=[];if(!qp(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},Gp=(e,t,r,n,i,s,a)=>{let o=r[0].dims,l=K.size(s),d=K.size(a),f=Q("_A",r[0].dataType,o),p=Ce("output",i,s),g=64;l===1&&(g=256);let b=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,y=x=>`
        ${x.registerUniform("reduceSize","u32").declareVariables(f,p)}
        ${b}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${x.mainStart(g)}

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
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Nr=(e,t,r,n)=>{let i=e.inputs.length===1?r:bd(e.inputs,r),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((b,y)=>y));let a=K.normalizeAxes(s,e.inputs[0].dims.length),o=a,l=e.inputs[0],d=Hp(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute($r(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=jp(o.length,l.dims.length));let[f,p]=Vp(l.dims,o),g=f;i.keepDims&&(g=Wp(f,a)),e.compute(Gp(t,i.cacheKey,[l],n,e.inputs[0].dataType,g,p),{inputs:[l]})},Gy=(e,t)=>{Nr(e,"ReduceMeanShared",t,"mean")},Ky=(e,t)=>{Nr(e,"ReduceL1Shared",t,"l1")},Xy=(e,t)=>{Nr(e,"ReduceL2Shared",t,"l2")},Yy=(e,t)=>{Nr(e,"ReduceLogSumExpShared",t,"logSumExp")},Zy=(e,t)=>{Nr(e,"ReduceMaxShared",t,"max")},Qy=(e,t)=>{Nr(e,"ReduceMinShared",t,"min")},Jy=(e,t)=>{Nr(e,"ReduceProdShared",t,"prod")},eb=(e,t)=>{Nr(e,"ReduceSumShared",t,"sum")},tb=(e,t)=>{Nr(e,"ReduceSumSquareShared",t,"sumSquare")},rb=(e,t)=>{Nr(e,"ReduceLogSumShared",t,"logSum")}}),Ur,Kp,Wo,bd,Lr,Xp,Yp,Zp,Qp,Jp,eh,th,rh,nh,ih,Fr,nb,ib,sb,ab,ob,lb,ub,db,cb,fb,sc=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),a$(),Ur=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Kp=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Wo=(e,t,r,n,i,s,a=!1,o=!1)=>{let l=[],d=r[0].dims,f=d.length,p=K.normalizeAxes(i,f),g=!o&&p.length===0;d.forEach((x,E)=>{g||p.indexOf(E)>=0?a&&l.push(1):l.push(x)});let b=l.length,y=K.size(l);return{name:e,shaderCache:t,getShaderSource:x=>{let E=[],S=Q("_A",r[0].dataType,f),$=Ce("output",s,b),A=n(S,$,p),C=A[2];for(let O=0,P=0;O<f;O++)g||p.indexOf(O)>=0?(a&&P++,C=`for(var j${O}: u32 = 0; j${O} < ${d[O]}; j${O}++) {
                  ${A[2].includes("last_index")?`let last_index = j${O};`:""}
                  ${S.indicesSet("input_indices",O,`j${O}`)}
                  ${C}
                }`):(E.push(`${S.indicesSet("input_indices",O,$.indicesGet("output_indices",P))};`),P++);return`

        ${x.registerUniform("output_size","u32").declareVariables(S,$)}

        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${S.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${E.join(`
`)}
          ${A[0]}       // init ops for reduce max/min
          ${A[1]}
          ${C}
          ${A[3]}
          ${A.length===4?$.setByOffset("global_idx","value"):A.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Ae(d,l)]})}},bd=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),ut({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Lr=(e,t,r,n)=>{let i=e.inputs,s=i.length===1?r:bd(i,r);e.compute(Wo(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?Kp:n,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Xp=(e,t)=>{Ur(e.inputs),Lr(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Yp=(e,t)=>{Ur(e.inputs),Lr(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Zp=(e,t)=>{Ur(e.inputs),Lr(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Qp=(e,t)=>{Ur(e.inputs),Lr(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Jp=(e,t)=>{Ur(e.inputs),Lr(e,"ReduceMax",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},eh=(e,t)=>{Ur(e.inputs),Lr(e,"ReduceMean",t,(r,n,i)=>{let s=1;for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${s});`]})},th=(e,t)=>{Ur(e.inputs),Lr(e,"ReduceMin",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},rh=(e,t)=>{Ur(e.inputs),Lr(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},nh=(e,t)=>{Ur(e.inputs),Lr(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},ih=(e,t)=>{Ur(e.inputs),Lr(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Fr=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?n*=e[s]:i*=e[s];return i<32&&n>1024},nb=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eh(e,t):Gy(e,t)},ib=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Yp(e,t):Ky(e,t)},sb=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zp(e,t):Xy(e,t)},ab=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qp(e,t):Yy(e,t)},ob=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jp(e,t):Zy(e,t)},lb=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?th(e,t):Qy(e,t)},ub=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rh(e,t):Jy(e,t)},db=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nh(e,t):eb(e,t)},cb=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ih(e,t):tb(e,t)},fb=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xp(e,t):rb(e,t)}}),bu,pb,hb,vd,o$=pe(()=>{"use strict";Be(),It(),sc(),bu=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},pb=(e,t)=>{bu(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Wo("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},hb=(e,t)=>{bu(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Wo("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},vd=e=>ut(e)}),sh,ho,ah,oh,lh,ha,uh,mb,ac=pe(()=>{"use strict";Be(),Ne(),nc(),Ue(),sh=(e,t)=>{let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],f=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,g=p,b=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let A of t.qkvHiddenSizes)if(A%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],b=t.qkvHiddenSizes[2]}let y=d;if(p!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+g+b)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let x=0;if(a){if(g!==b)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(x=a.dims[3])}let E=y+x,S=-1,$=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==E)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:x,kvSequenceLength:y,totalSequenceLength:E,maxSequenceLength:S,inputHiddenSize:f,hiddenSize:p,vHiddenSize:b,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(b/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ho=(e,t,r)=>t&&e?`
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
    `,ah=(e,t,r,n,i,s,a,o)=>{let l=Et(a?1:s),d=64,f=s/l;f<d&&(d=32);let p=Math.ceil(s/l/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:f},{type:12,data:p}],b=Wt(e.dataType,l),y=Vt(1,l),x=["type"];a&&x.push("type"),o&&x.push("type");let E=S=>{let $=Ce("x",e.dataType,e.dims,l),A=[$],C=a?Q("seq_lens",a.dataType,a.dims):void 0;C&&A.push(C);let O=o?Q("total_sequence_length_input",o.dataType,o.dims):void 0;O&&A.push(O);let P=Vt(e.dataType),N=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
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
        x[offset + i] = ${$.type.value}(${P}(1.0) / ${P}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${P}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${b};${l}`,inputDependencies:x},getShaderSource:E,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:g})}},oh=(e,t,r,n,i,s,a,o,l)=>{let d=a+s.kvSequenceLength,f=[s.batchSize,s.numHeads,s.sequenceLength,d],p=e>1&&n,g=s.kvNumHeads?s.kvNumHeads:s.numHeads,b=p?[s.batchSize,g,d,s.headSize]:void 0,y=s.nReps?s.nReps:1,x=s.scale===0?1/Math.sqrt(s.headSize):s.scale,E=Et(s.headSize),S=s.headSize/E,$=12,A={x:Math.ceil(d/$),y:Math.ceil(s.sequenceLength/$),z:s.batchSize*s.numHeads},C=[{type:12,data:s.sequenceLength},{type:12,data:S},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:x},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:y}],O=p&&n&&K.size(n.dims)>0,P=["type","type"];O&&P.push("type"),i&&P.push("type"),o&&P.push("type"),l&&P.push("type");let N=[{dims:f,dataType:t.dataType,gpuDataType:0}];p&&N.push({dims:b,dataType:t.dataType,gpuDataType:0});let T=W=>{let Y=Q("q",t.dataType,t.dims,E),de=Q("key",r.dataType,r.dims,E),X=[Y,de];if(O){let oe=Q("past_key",n.dataType,n.dims,E);X.push(oe)}i&&X.push(Q("attention_bias",i.dataType,i.dims));let ue=o?Q("seq_lens",o.dataType,o.dims):void 0;ue&&X.push(ue);let q=l?Q("total_sequence_length_input",l.dataType,l.dims):void 0;q&&X.push(q);let ee=Ce("output",t.dataType,f),he=[ee];p&&he.push(Ce("present_key",t.dataType,b,E));let ne=Vt(1,E),fe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${Y.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${Y.type.storage}, ${$*$}>;
  ${W.registerUniforms(fe).declareVariables(...X,...he)}
  ${W.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${ho(ue,q,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${O&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ne}(0);
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
          value += ${ne}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(E){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${E}`)}})()};
        output[outputIdx] = ${ee.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${E};${i!==void 0};${n!==void 0};${e}`,inputDependencies:P},getRunData:()=>({outputs:N,dispatchGroup:A,programUniforms:C}),getShaderSource:T}},lh=(e,t,r,n,i,s,a=void 0,o=void 0)=>{let l=s+i.kvSequenceLength,d=i.nReps?i.nReps:1,f=i.vHiddenSize*d,p=e>1&&n,g=i.kvNumHeads?i.kvNumHeads:i.numHeads,b=p?[i.batchSize,g,l,i.headSize]:void 0,y=[i.batchSize,i.sequenceLength,f],x=12,E={x:Math.ceil(i.vHeadSize/x),y:Math.ceil(i.sequenceLength/x),z:i.batchSize*i.numHeads},S=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:f},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:d}],$=p&&n&&K.size(n.dims)>0,A=["type","type"];$&&A.push("type"),a&&A.push("type"),o&&A.push("type");let C=[{dims:y,dataType:t.dataType,gpuDataType:0}];p&&C.push({dims:b,dataType:t.dataType,gpuDataType:0});let O=P=>{let N=Q("probs",t.dataType,t.dims),T=Q("v",r.dataType,r.dims),W=[N,T];$&&W.push(Q("past_value",n.dataType,n.dims));let Y=a?Q("seq_lens",a.dataType,a.dims):void 0;a&&W.push(Y);let de=o?Q("total_sequence_length_input",o.dataType,o.dims):void 0;o&&W.push(de);let X=[Ce("output",t.dataType,y)];p&&X.push(Ce("present_value",t.dataType,b));let ue=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;
  var<workgroup> tileQ: array<${N.type.value}, ${x*x}>;
  var<workgroup> tileV: array<${N.type.value}, ${x*x}>;
  ${P.registerUniforms(ue).declareVariables(...W,...X)}
  ${P.mainStart([x,x,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ho(Y,de,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${N.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${$&&p?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:C,dispatchGroup:E,programUniforms:S}),getShaderSource:O}},ha=(e,t,r,n,i,s,a,o,l,d,f=void 0,p=void 0)=>{let g=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),b=g>1?a:void 0,y=g>1?o:void 0,x=g>1?d.pastSequenceLength:0,E=x+d.kvSequenceLength,S=l&&K.size(l.dims)>0?l:void 0,$=[t,r];b&&K.size(b.dims)>0&&$.push(b),S&&$.push(S),f&&$.push(f),p&&$.push(p);let A=e.compute(oh(g,t,r,b,S,d,x,f,p),{inputs:$,outputs:g>1?[-1,1]:[-1]})[0];e.compute(ah(A,d.batchSize,d.numHeads,x,d.sequenceLength,E,f,p),{inputs:f&&p?[A,f,p]:[A],outputs:[]});let C=[A,n];y&&K.size(y.dims)>0&&C.push(y),f&&C.push(f),p&&C.push(p),e.compute(lh(g,A,n,y,d,x,f,p),{inputs:C,outputs:g>1?[0,2]:[0]})},uh=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=p=>{let g=Ce("output_q",l[0].dataType,r),b=Ce("output_k",l[0].dataType,r),y=Ce("output_v",l[0].dataType,r),x=Q("input",l[0].dataType,l[0].dims),E=Q("weight",l[1].dataType,l[1].dims),S=Q("bias",l[2].dataType,l[2].dims),$=x.type.storage,A=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${$}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${$}, ${a*a}>;
  var<workgroup> tileWeightK: array<${$}, ${a*a}>;
  var<workgroup> tileWeightV: array<${$}, ${a*a}>;
  ${p.registerUniforms(A).declareVariables(x,E,S,g,b,y)}
  ${p.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${$}(0);
    var valueK = ${$}(0);
    var valueV = ${$}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:f},{inputs:l,outputs:[-1,-1,-1]})},mb=(e,t)=>{let r=sh(e.inputs,t),[n,i,s]=uh(e,r);return ha(e,n,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),dh,ch,fh,gb,l$=pe(()=>{"use strict";Dr(),Be(),Ne(),It(),Ue(),dh=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,s)=>{let a=i.length;if(a!==n.length)throw new Error(`${s}: num dimensions != ${a}`);i.forEach((o,l)=>{if(o!==n[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},ch=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,s=e[0].dims,a=n?Et(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?a:1,l=K.size(s)/a,d=n,f=d?s.length:s,p=Q("x",e[0].dataType,e[0].dims,a),g=Q("scale",e[1].dataType,e[1].dims,o),b=Q("bias",e[2].dataType,e[2].dims,o),y=Q("inputMean",e[3].dataType,e[3].dims,o),x=Q("inputVar",e[4].dataType,e[4].dims,o),E=Ce("y",e[0].dataType,f,a),S=()=>{let A="";if(n)A=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")A=`
            ${E.indicesSet("outputIndices","0","0")}
            let cOffset = ${E.indicesToOffset("outputIndices")};`;else{A=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let C=1;C<g.rank;C++)A+=`cIndices[${C}] = outputIndices[${C}];`;A+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return A},$=A=>`
  const epsilon = ${r};
  ${A.registerUniform("outputSize","u32").declareVariables(p,g,b,y,x,E)}
  ${A.mainStart()}
  ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${E.offsetToIndices(`global_idx * ${a}`)};
    ${S()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${b.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${x.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${E.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...Ae(s)]:[{type:12,data:l}]})}},fh=e=>ut(e),gb=(e,t)=>{let{inputs:r,outputCount:n}=e,i=fh({...t,outputCount:n});if(xt.webgpu.validateInputContent&&dh(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(ch(r,i))}}),ph,hh,yb,u$=pe(()=>{"use strict";Ne(),Ue(),ph=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},hh=e=>{let t=e[0].dims,r=e[0].dims[2],n=K.size(t)/4,i=e[0].dataType,s=Q("input",i,t,4),a=Q("bias",i,[r],4),o=Q("residual",i,t,4),l=Ce("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,a,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},yb=e=>{ph(e.inputs),e.compute(hh(e.inputs))}}),mh,it,bb,vb,wb,_b,xb,$b,Sb,kb,Tb,gh,Cb,Eb,Ib,Ab,Hs,Ob,Eo,zb,Mb,Rb,Bb,Pb,Db,Nb,Ub,Lb,Fb,jb,Vb,Wb,qb,Hb,Gb,Kb,vu,Xb,wd,_d,Yb,Zb,Qb,yh,bh,Jb,oc=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),mh=(e,t,r,n,i,s,a)=>{let o=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=Q("inputData",r,[o],4),f=Ce("outputData",n,[o],4),p=[{name:"vec_size",type:"u32"}];return a&&p.push(...a),`
      ${e.registerUniforms(p).declareVariables(d,f)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",l)}
  }`},it=(e,t,r,n,i,s=e.dataType,a,o)=>{let l=[{type:12,data:Math.ceil(K.size(e.dims)/4)}];return a&&l.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>mh(d,K.size(e.dims),e.dataType,s,r,n,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(K.size(d[0].dims)/64/4)},programUniforms:l})}},bb=e=>{e.compute(it(e.inputs[0],"Abs","abs"))},vb=e=>{e.compute(it(e.inputs[0],"Acos","acos"))},wb=e=>{e.compute(it(e.inputs[0],"Acosh","acosh"))},_b=e=>{e.compute(it(e.inputs[0],"Asin","asin"))},xb=e=>{e.compute(it(e.inputs[0],"Asinh","asinh"))},$b=e=>{e.compute(it(e.inputs[0],"Atan","atan"))},Sb=e=>{e.compute(it(e.inputs[0],"Atanh","atanh"))},kb=e=>ut(e),Tb=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(it(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},gh=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ut({min:t,max:r})},Cb=(e,t)=>{let r=t||gh(e.inputs),n=Vt(e.inputs[0].dataType);e.compute(it(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},Eb=e=>{e.compute(it(e.inputs[0],"Ceil","ceil"))},Ib=e=>{e.compute(it(e.inputs[0],"Cos","cos"))},Ab=e=>{e.compute(it(e.inputs[0],"Cosh","cosh"))},Hs=e=>ut(e),Ob=(e,t)=>{let r=Vt(e.inputs[0].dataType);e.compute(it(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
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
}`,zb=e=>{let t=Vt(e.inputs[0].dataType);e.compute(it(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Eo(t)))},Mb=e=>{e.compute(it(e.inputs[0],"Exp","exp"))},Rb=e=>{e.compute(it(e.inputs[0],"Floor","floor"))},Bb=e=>{let t=Vt(e.inputs[0].dataType);e.compute(it(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Eo(t)))},Pb=(e,t)=>{let r=Vt(e.inputs[0].dataType);e.compute(it(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Db=e=>{e.compute(it(e.inputs[0],"Not",t=>`!${t}`))},Nb=e=>{e.compute(it(e.inputs[0],"Neg",t=>`-${t}`))},Ub=e=>{e.compute(it(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Lb=e=>{let t=Vt(e.inputs[0].dataType);e.compute(it(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Fb=e=>{e.compute(it(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},jb=e=>ut(e),Vb=(e,t)=>{let r=Vt(e.inputs[0].dataType);e.compute(it(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Wb=e=>{let t=Vt(e.inputs[0].dataType);e.compute(it(e.inputs[0],"HardSwish",r=>`${r} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${r} + vec4<${t}>(0.5)))`))},qb=e=>{e.compute(it(e.inputs[0],"Sin","sin"))},Hb=e=>{e.compute(it(e.inputs[0],"Sinh","sinh"))},Gb=e=>{e.compute(it(e.inputs[0],"Sqrt","sqrt"))},Kb=e=>{e.compute(it(e.inputs[0],"Tan","tan"))},vu=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Xb=e=>{e.compute(it(e.inputs[0],"Tanh",vu))},wd=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${vu("v")};
}
`,_d=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Yb=e=>{let t=Vt(e.inputs[0].dataType);e.compute(it(e.inputs[0],"FastGelu",_d,wd(t),void 0,e.inputs[0].dataType))},Zb=(e,t)=>{let r=Vt(e.inputs[0].dataType);return e.compute(it(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Qb=e=>{e.compute(it(e.inputs[0],"Log","log"))},yh=(e,t)=>`
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
`,bh=e=>`quick_gelu_impl(${e})`,Jb=(e,t)=>{let r=Vt(e.inputs[0].dataType);e.compute(it(e.inputs[0],"QuickGelu",bh,yh(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),vh,wh,ev,d$=pe(()=>{"use strict";Ne(),Ue(),oc(),vh=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},wh=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=Q("input",e[0].dataType,e[0].dims,4),n=Q("bias",e[0].dataType,[e[0].dims[2]],4),i=Ce("output",e[0].dataType,t,4),s=K.size(t)/4,a=Wt(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
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
  }`}},ev=e=>{vh(e.inputs),e.compute(wh(e.inputs))}}),_h,xh,jr,tv,rv,nv,iv,sv,av,ov,lv,uv,dv,c$=pe(()=>{"use strict";Be(),Ne(),Ue(),_h=(e,t,r,n,i,s,a,o,l,d,f,p)=>{let g,b;typeof o=="string"?g=b=($,A)=>`${o}((${$}),(${A}))`:typeof o=="function"?g=b=o:(g=o.scalar,b=o.vector);let y=Ce("outputData",f,n.length,4),x=Q("aData",l,t.length,4),E=Q("bData",d,r.length,4),S;if(i)if(s){let $=K.size(t)===1,A=K.size(r)===1,C=t.length>0&&t[t.length-1]%4===0,O=r.length>0&&r[r.length-1]%4===0;$||A?S=y.setByOffset("global_idx",b($?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"),A?`${E.type.value}(${E.getByOffset("0")}.x)`:E.getByOffset("global_idx"))):S=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${x.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${E.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",b(a||C?x.getByOffset("offsetA / 4u"):`${x.type.value}(${x.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||O?E.getByOffset("offsetB / 4u"):`${E.type.value}(${E.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else S=y.setByOffset("global_idx",b(x.getByOffset("global_idx"),E.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(A,C,O="")=>{let P=`aData[indexA${C}][componentA${C}]`,N=`bData[indexB${C}][componentB${C}]`;return`
            let outputIndices${C} = ${y.offsetToIndices(`global_idx * 4u + ${C}u`)};
            let offsetA${C} = ${x.broadcastedIndicesToOffset(`outputIndices${C}`,y)};
            let offsetB${C} = ${E.broadcastedIndicesToOffset(`outputIndices${C}`,y)};
            let indexA${C} = offsetA${C} / 4u;
            let indexB${C} = offsetB${C} / 4u;
            let componentA${C} = offsetA${C} % 4u;
            let componentB${C} = offsetB${C} % 4u;
            ${A}[${C}] = ${O}(${g(P,N)});
          `};f===9?S=`
            var data = vec4<u32>(0);
            ${$("data",0,"u32")}
            ${$("data",1,"u32")}
            ${$("data",2,"u32")}
            ${$("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:S=`
            ${$("outputData[global_idx]",0)}
            ${$("outputData[global_idx]",1)}
            ${$("outputData[global_idx]",2)}
            ${$("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(x,E,y)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${S}
      }`},xh=(e,t,r,n,i,s,a=r.dataType)=>{let o=r.dims.map(Number),l=n.dims.map(Number),d=!K.areEqual(o,l),f=o,p=K.size(o),g=!1,b=!1,y=[d];if(d){let x=gs.calcShape(o,l,!1);if(!x)throw new Error("Can't perform binary op on the given tensors");f=x.slice(),p=K.size(f);let E=K.size(o)===1,S=K.size(l)===1,$=o.length>0&&o[o.length-1]%4===0,A=l.length>0&&l[l.length-1]%4===0;y.push(E),y.push(S),y.push($),y.push(A);let C=1;for(let O=1;O<f.length;O++){let P=o[o.length-O],N=l[l.length-O];if(P===N)C*=P;else break}C%4===0?(b=!0,g=!0):(E||S||$||A)&&(g=!0)}else g=!0;return y.push(g),{name:e,shaderCache:{hint:t+y.map(x=>x.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:x=>_h(x,o,l,f,g,d,b,i,r.dataType,n.dataType,a,s),getRunData:()=>({outputs:[{dims:f,dataType:a}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(K.size(f)/4)},...Ae(o,l,f)]})}},jr=(e,t,r,n,i,s)=>{e.compute(xh(t,i??"",e.inputs[0],e.inputs[1],r,n,s))},tv=e=>{jr(e,"Add",(t,r)=>`${t}+${r}`)},rv=e=>{jr(e,"Div",(t,r)=>`${t}/${r}`)},nv=e=>{jr(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},iv=e=>{jr(e,"Mul",(t,r)=>`${t}*${r}`)},sv=e=>{let t=Q("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;jr(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
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
      `)},av=e=>{jr(e,"Sub",(t,r)=>`${t}-${r}`)},ov=e=>{jr(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},lv=e=>{jr(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},uv=e=>{jr(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},dv=e=>{jr(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),$h,Sh,kh,Th,cv,fv,f$=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),$h=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,s=n.dims.length;e.forEach((a,o)=>{if(o!==r){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,d)=>{if(d!==t&&l!==n.dims[d])throw new Error("non concat dimensions must match")})}})},Sh=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,kh=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(s):i===0?n.push(`if (inputIndex == ${i}u) { ${s} }`):i===r-1?n.push(`else { ${s} }`):n.push(`else if (inputIndex == ${i}) { ${s} }`)}return n.join(`
`)},Th=(e,t,r,n)=>{let i=K.size(r),s=new Array(e.length),a=new Array(e.length),o=0,l=[],d=[],f=[{type:12,data:i}];for(let x=0;x<e.length;++x)o+=e[x].dims[t],s[x]=o,d.push(e[x].dims.length),a[x]=Q(`input${x}`,n,d[x]),l.push("rank"),f.push({type:12,data:s[x]});for(let x=0;x<e.length;++x)f.push(...Ae(e[x].dims));f.push(...Ae(r));let p=Ce("output",n,r.length),g=p.indicesGet("indices",t),b=Array.from(Array(s.length).keys()).map(x=>`uniforms.sizeInConcatAxis${x}`).join(","),y=x=>`

  ${(()=>{x.registerUniform("outputSize","u32");for(let E=0;E<e.length;E++)x.registerUniform(`sizeInConcatAxis${E}`,"u32");return x.declareVariables(...a,p)})()}

  ${Sh(s.length,b)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${b});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${kh(a,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f}),getShaderSource:y}},cv=(e,t)=>{let r=e.inputs,n=r[0].dims,i=K.normalizeAxis(t.axis,n.length);$h(r,i);let s=n.slice();s[i]=r.reduce((o,l)=>o+(l.dims.length>i?l.dims[i]:0),0);let a=r.filter(o=>K.size(o.dims)>0);e.compute(Th(a,i,s,r[0].dataType),{inputs:a})},fv=e=>ut({axis:e.axis})}),Vi,Wi,qi,lc,Gi=pe(()=>{"use strict";Be(),Ne(),Vi=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Wi=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},qi=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},lc=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,n]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=e?.activation_params||[Dy,Ny];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Kt,pv,uc=pe(()=>{"use strict";Kt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},pv=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),hv,p$=pe(()=>{"use strict";hv=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ra,dc,cc=pe(()=>{"use strict";Be(),Ne(),Ue(),Gi(),ra=(e,t,r,n,i)=>{let s=n-r;return`
      ${Array.from({length:r}).map((a,o)=>`
      if (${Ie(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,Ie(i,o+s,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},dc=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a[a.length-2],d=o[o.length-1],f=a[a.length-1],p=Et(d),g=Et(f),b=Et(l),y=K.size(r)/p/b,x=e.length>2,E=n?n.slice(0,-2):r.slice(0,-2),S=[K.size(E),l,d],$=[{type:12,data:y},{type:12,data:l},{type:12,data:d},{type:12,data:f}];Wi(t,$),$.push(...Ae(E,a,o)),x&&$.push(...Ae(e[2].dims)),$.push(...Ae(S));let A=C=>{let O=ic("batch_dims",e[0].dataType,E.length),P=Q("a",e[0].dataType,a.length,g),N=Q("b",e[1].dataType,o.length,p),T=Ce("output",e[0].dataType,S.length,p),W=Wt(T.type.tensor),Y=Vi(t,T.type.value,W),de=[P,N],X="";if(x){let ee=i?p:1;de.push(Q("bias",e[2].dataType,e[2].dims.length,ee)),X=`${i?`value += bias[col / ${ee}];`:`value += ${T.type.value}(bias[row + i]);`}`}let ue=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];qi(t,ue);let q=()=>{let ee=`var a_data: ${P.type.value};`;for(let he=0;he<g;he++)ee+=`
              let b_data${he} = b[(b_offset + (k + ${he}) * uniforms.N + col) / ${p}];`;for(let he=0;he<b;he++){ee+=`a_data = a[(a_offset + (row + ${he}) * uniforms.K + k) / ${g}];`;for(let ne=0;ne<g;ne++)ee+=`
            values[${he}] = fma(${N.type.value}(a_data${g===1?"":`[${ne}]`}), b_data${ne}, values[${he}]);
`}return ee};return`
  ${C.registerUniforms(ue).registerInternalVariables(O).declareVariables(...de,T)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${b};
    let row = (index1 % stride1) * ${b};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${O.offsetToIndices("batch")};`}

    var a_indices: ${P.type.indices};
    ${ra("a_indices",P,P.rank-2,O.rank,"batch_indices")}
    ${P.indicesSet("a_indices",P.rank-2,0)}
    ${P.indicesSet("a_indices",P.rank-1,0)}
    let a_offset = ${P.indicesToOffset("a_indices")};

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
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${g};${b};${i}`,inputDependencies:x?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:$}),getShaderSource:A}}}),Ch,Eh,xd,wu,Ih,$d,Ah,qo,fc=pe(()=>{"use strict";Be(),Ne(),Ue(),Gi(),cc(),uc(),Ch=(e,t)=>e?`
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
            `,Ih=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",$d=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32,l=!1)=>{let d=e[1]*t[1],f=e[0]*t[0],p=i?d:s,g=i?s:d;if(!(g%t[1]===0&&p%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let b=g/t[1],y=p/t[0],x=s/t[1],E=l?`
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
let tileRowB = i32(localId.y) * ${x};
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
  for (var innerRow = 0; innerRow < ${x}; innerRow = innerRow + 1) {
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
`},Ah=(e,t,r,n,i=!1)=>{let[s,a,o,l]=n,d=Wt(n[0].type.tensor);return`
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
    `},qo=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a.slice(0,-2),d=o.slice(0,-2),f=n?n.slice(0,-2):r.slice(0,-2),p=K.size(f),g=a[a.length-2],b=a[a.length-1],y=o[o.length-1],x=b%4===0&&y%4===0,E=g<=8?[4,1,1]:[4,4,1],S=[8,8,1],$=[Math.ceil(y/S[0]/E[0]),Math.ceil(g/S[1]/E[1]),Math.ceil(p/S[2]/E[2])],A=x?4:1,C=[...l,g,b/A],O=C.length,P=[...d,b,y/A],N=P.length,T=[p,g,y/A],W=[{type:6,data:g},{type:6,data:y},{type:6,data:b}];Wi(t,W),W.push(...Ae(f,C,P));let Y=["rank","rank"],de=e.length>2;de&&(W.push(...Ae(e[2].dims)),Y.push("rank")),W.push(...Ae(T));let X=ue=>{let q=f.length,ee=ic("batchDims",e[0].dataType,q,1),he=Wt(e[0].dataType),ne=Q("a",e[0].dataType,O,A),fe=Q("b",e[1].dataType,N,A),oe=Ce("result",e[0].dataType,T.length,A),Te=[ne,fe];if(de){let ht=i?A:1;Te.push(Q("bias",e[2].dataType,e[2].dims.length,ht))}let re=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];qi(t,re);let xe=Wt(oe.type.tensor),Se=Vi(t,oe.type.value,xe),be=Ah(A,de,Se,[ee,ne,fe,oe],i);return`
  ${ue.registerUniforms(re).registerInternalVariables(ee).declareVariables(...Te,oe)}
  ${be}
  ${x?xd(E,S,he,ee):$d(E,S,he,ee)}
                   `};return{name:"MatMul",shaderCache:{hint:`${E};${t.activation};${x};${i}`,inputDependencies:Y},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:W}),getShaderSource:X}}}),Oh,mv,h$=pe(()=>{"use strict";Be(),Mn(),Ue(),Gi(),uc(),p$(),fc(),Oh=(e,t,r,n,i=!1,s,a=4,o=4,l=4,d="f32")=>{let f=W=>{switch(W){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${W} is not supported.`)}},p=W=>{switch(W){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${W} is not supported.`)}},g=e?`
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
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",x=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",E=e?"row":"col",S=e?"col":"row",$=`
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
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${x}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(a)}
    }
    return resData;`,A=e?t&&n?`
    let col = colIn * ${a};
    ${$}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${Kt(a,d)}(0.0);`:n&&r?`
    let col = colIn * ${a};
    ${$}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
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
    return ${Kt(o,d)}(0.0);`,O=Kt(l,d),P=Kt(e?a:o,d),N=Kt(e?o:a,d),T=Vi(s,O,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${P} {
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
      ${pv(i)}
      ${T}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},mv=(e,t,r,n,i,s,a,o,l)=>{let d=t.format==="NHWC",f=d?e[0].dims[3]:e[0].dims[1],p=r[0],g=d?r[2]:r[3],b=d?r[1]:r[2],y=d?r[3]:r[1],x=d&&(f%4===0||f%3===0)&&y%4===0,E=d?y:g*b,S=d?g*b:y,$=[8,8,1],A=n<=8?[4,1,1]:[4,4,1],C=[Math.ceil(E/$[0]/A[0]),Math.ceil(S/$[1]/A[1]),Math.ceil(p/$[2]/A[2])];rt("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${C}`);let O=x?d&&f%4!==0?3:4:1,P=$[1]*A[1],N=$[0]*A[0],T=Math.max($[0]*O,$[1]),W=n%P===0,Y=i%N===0,de=s%T===0,X=x?[O,4,4]:[1,1,1],ue=[{type:6,data:n},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Wi(t,ue),ue.push(...Ae(e[0].dims,e[1].dims));let q=["rank","rank"];a&&(ue.push(...Ae(e[2].dims)),q.push("rank")),ue.push(...Ae(r));let ee=he=>{let ne=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];qi(t,ne);let fe=x?4:1,oe=Wt(e[0].dataType),Te=`
      fn setOutputAtIndex(flatIndex : i32, value : ${x?`vec4<${oe}>`:oe}) {
        result[flatIndex] = ${x?`vec4<${oe}>`:oe}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${x?`vec4<${oe}>`:oe}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${x?"/ 4":""}, value);
      }`,re=Q("x",e[0].dataType,e[0].dims.length,O===3?1:O),xe=Q("w",e[1].dataType,e[1].dims.length,fe),Se=[re,xe],be=Ce("result",e[0].dataType,r.length,fe);if(a){let ht=Q("bias",e[2].dataType,e[2].dims.length,fe);Se.push(ht),Te+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${x?`vec4<${oe}>`:oe} {
          return bias[coords.${d?"w":"y"}${x?"/ 4":""}];
        }`}return`
        ${hv("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${he.registerUniforms(ne).declareVariables(...Se,be)}
        ${Te}
        ${Oh(d,W,Y,de,a,t,X[0],X[1],X[2],oe)}
        ${x?xd(A,$,oe,void 0,!d,T):$d(A,$,oe,void 0,!d,T,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${O};${x};${W};${Y};${de};${P};${N};${T}`,inputDependencies:q},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:C[0],y:C[1],z:C[2]},programUniforms:ue}),getShaderSource:ee}}}),zh,_u,Ps,Mh,xu,Rh,gv,yv,m$=pe(()=>{"use strict";Be(),Mn(),Ne(),Ue(),Gi(),uc(),zh=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},_u=e=>typeof e=="number"?[e,e,e]:e,Ps=(e,t)=>t<=1?e:e+(e-1)*(t-1),Mh=(e,t,r,n=1)=>{let i=Ps(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},xu=(e,t,r,n,i)=>{i==null&&(i=Mh(e,t[0],n[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*i)/n[a]+1));return s},Rh=(e,t,r,n,i,s,a,o,l,d)=>{let f,p,g,b;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=xu([t,r,n,1],[o,l,d],1,[i,s,a],e);p=y[0],g=y[1],b=y[2]}else if(Array.isArray(e)){if(!e.every((x,E,S)=>x===S[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=xu([t,r,n,1],[o,l,d],1,[i,s,a],e[0]);p=y[0],g=y[1],b=y[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),g=Math.ceil(r/s),b=Math.ceil(n/a);let y=(p-1)*i+o-t,x=(g-1)*s+l-r,E=(b-1)*a+d-n,S=Math.floor(y/2),$=y-S,A=Math.floor(x/2),C=x-A,O=Math.floor(E/2),P=E-O;f={top:A,bottom:C,left:O,right:P,front:S,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:p,outHeight:g,outWidth:b}},gv=(e,t,r,n,i,s=!1,a="channelsLast")=>{let o,l,d,f,p;if(a==="channelsLast")[o,l,d,f,p]=e;else if(a==="channelsFirst")[o,p,l,d,f]=e;else throw new Error(`Unknown dataFormat ${a}`);let[g,,b,y,x]=t,[E,S,$]=_u(r),[A,C,O]=_u(n),P=Ps(b,A),N=Ps(y,C),T=Ps(x,O),{padInfo:W,outDepth:Y,outHeight:de,outWidth:X}=Rh(i,l,d,f,E,S,$,P,N,T),ue=s?g*p:g,q=[0,0,0,0,0];return a==="channelsFirst"?q=[o,ue,Y,de,X]:a==="channelsLast"&&(q=[o,Y,de,X,ue]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:d,inWidth:f,inChannels:p,outDepth:Y,outHeight:de,outWidth:X,outChannels:ue,padInfo:W,strideDepth:E,strideHeight:S,strideWidth:$,filterDepth:b,filterHeight:y,filterWidth:x,effectiveFilterDepth:P,effectiveFilterHeight:N,effectiveFilterWidth:T,dilationDepth:A,dilationHeight:C,dilationWidth:O,inShape:e,outShape:q,filterShape:t}},yv=(e,t,r,n,i,s)=>{let a=s==="channelsLast",o=a?e[0].dims[3]:e[0].dims[1],l=!1,d=[64,1,1],f={x:r.map(($,A)=>A)},p=[Math.ceil(zh(f.x.map($=>r[$]))/d[0]),1,1];rt("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let g=l?a&&o%4!==0?3:4:1,b=K.size(r),y=[{type:12,data:b},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Wi(t,y),y.push(...Ae(e[0].dims,e[1].dims));let x=["rank","rank"],E=e.length===3;E&&(y.push(...Ae(e[2].dims)),x.push("rank")),y.push(...Ae(r));let S=$=>{let A=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];qi(t,A);let C=l?4:1,O=Wt(e[0].dataType),P=Q("x",e[0].dataType,e[0].dims.length,g===3?1:g),N=Q("W",e[1].dataType,e[1].dims.length,C),T=[P,N],W=Ce("result",e[0].dataType,r.length,C),Y="";if(E){let ue=Q("bias",e[2].dataType,e[2].dims.length,C);T.push(ue),Y+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${O}>`:O} {
          return bias[${a?Ie("coords",4,5):Ie("coords",1,5)}${l?"/ 4":""}];
        }`}let de=Kt(g,O),X=Vi(t,de,O);return`
            ${Y}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${O} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${P.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${O} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${N.getByIndices("aIndices")};
            }
          ${$.registerUniforms(A).declareVariables(...T,W)}
          ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${W.offsetToIndices("global_idx")};
              let batch = ${Ie("coords",0,P.rank)};
              let d2 = ${a?Ie("coords",P.rank-1,P.rank):Ie("coords",1,P.rank)};
              let xFRCCorner = vec3<u32>(${a?Ie("coords",1,P.rank):Ie("coords",2,P.rank)},
              ${a?Ie("coords",2,P.rank):Ie("coords",3,P.rank)},
              ${a?Ie("coords",3,P.rank):Ie("coords",4,P.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?Ie("uniforms.x_shape",1,P.rank):Ie("uniforms.x_shape",2,P.rank)};
              let xShapeZ = ${a?Ie("uniforms.x_shape",2,P.rank):Ie("uniforms.x_shape",3,P.rank)};
              let xShapeW = ${a?Ie("uniforms.x_shape",3,P.rank):Ie("uniforms.x_shape",4,P.rank)};
              let xShapeU = ${a?Ie("uniforms.x_shape",4,P.rank):Ie("uniforms.x_shape",1,P.rank)};
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${g};${E}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:y}),getShaderSource:S}}}),bv,vv,g$=pe(()=>{"use strict";Be(),Ne(),Ue(),Gi(),bv=(e,t,r,n)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],f=d/t.group,p=l&&f>=4?Et(d):1,g=K.size(r)/p,b=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];Wi(t,b),b.push(...Ae(a,[o[0],o[1],o[2],o[3]/p]));let y=i?["rank","rank","rank"]:["rank","rank"];b.push(...Ae([r[0],r[1],r[2],r[3]/p]));let x=E=>{let S=Ce("output",e[0].dataType,r.length,p),$=Wt(S.type.tensor),A=Vi(t,S.type.value,$),C=Q("x",e[0].dataType,a.length),O=Q("w",e[1].dataType,o.length,p),P=[C,O];i&&P.push(Q("b",e[2].dataType,e[2].dims,p));let N=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];qi(t,N);let T=l?`
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
  ${E.registerUniforms(N).declareVariables(...P,S)}

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
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:x}},vv=(e,t,r,n)=>{let i=e.length>2,s=Et(r[3]),a=Et(r[2]),o=K.size(r)/s/a,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],f=[r[0],r[1],r[2],r[3]/s],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Wi(t,p),p.push(...Ae(l,d,f));let g=(a-1)*t.strides[1]+d[1],b=y=>{let x=Ce("output",e[0].dataType,f.length,s),E=Wt(x.type.tensor),S=Vi(t,x.type.value,E),$=Q("x",e[0].dataType,l.length,s),A=Q("w",e[1].dataType,d.length,s),C=[$,A];i&&C.push(Q("b",e[2].dataType,e[2].dims,s));let O=i?"value += b[output_channel];":"",P=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return qi(t,P),`
  ${y.registerUniforms(P).declareVariables(...C,x)}
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

    var x_vals: array<${$.type.value}, ${g}>;
    var values: array<${x.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${$.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${$.type.value}(0);
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
      ${x.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${g};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:b}}}),Bh,mo,Ph,go,Sd,$u,Dh,Nh,kd,y$=pe(()=>{"use strict";Ne(),h$(),m$(),fc(),g$(),Gi(),cc(),si(),Bh=(e,t,r,n,i,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),l=o.length,d=t[0],f=t.slice(2).map((g,b)=>g+(g-1)*(r[b]-1)),p=o.map((g,b)=>g+n[b]+n[b+l]).map((g,b)=>Math.floor((g-f[b]+i[b])/i[b]));return p.splice(0,0,a),p.splice(s?3:1,0,d),p},mo=[2,3,1,0],Ph=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},go=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let n=e.pads.slice();Vo.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},Sd=e=>{let t=lc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},$u=(e,t,r,n)=>{let i=r.format==="NHWC",s=Bh(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let P=[t[0]];if(i){let N=e.kernelCustomData.wT??e.compute($r(t[1],mo),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=N),P.push(N)}else P.push(t[1]);t.length===3&&P.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(vv(P,r,s,n),{inputs:P}):e.compute(bv(P,r,s,n),{inputs:P});return}let a=t.length===3,o=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],f=t[1].dims[2],p=t[1].dims[3],g=s[i?1:2],b=s[i?2:3],y=s[i?3:1],x=i&&f===o&&p===l&&r.pads[0]===0&&r.pads[1]===0;if(x||f===1&&p===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let P=s[0],N,T,W,Y=[];if(i){let ue=e.kernelCustomData.wT??e.compute($r(t[1],mo),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ue),x){let q=o*l*d;N=t[0].reshape([1,P,q]),T=ue.reshape([1,q,y]),W=[1,P,y]}else N=t[0].reshape([P,o*l,d]),T=ue.reshape([1,d,y]),W=[P,g*b,y];Y.push(N),Y.push(T)}else N=t[0].reshape([P,d,o*l]),T=t[1].reshape([1,y,d]),W=[P,y,g*b],Y.push(T),Y.push(N);a&&Y.push(t[2]);let de=W[2],X=Y[0].dims[Y[0].dims.length-1];de<8&&X<8?e.compute(dc(Y,r,s,W,i,n),{inputs:Y}):e.compute(qo(Y,r,s,W,i,n),{inputs:Y});return}let E=!0,S=e.kernelCustomData.wT??e.compute($r(t[1],mo),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=S);let $=[t[0],S];a&&$.push(t[2]);let A=i?g*b:y,C=i?y:g*b,O=f*p*d;e.compute(mv($,r,s,A,C,O,a,E,n),{inputs:$})},Dh=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=go({...t,pads:i,strides:s,dilations:a,kernelShape:o},n);$u(e,n,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Nh=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=go(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=gv(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,n);e.compute(yv(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],n))},kd=(e,t)=>{if(Ph(e.inputs,t),e.inputs[0].dims.length===3)Dh(e,t);else if(e.inputs[0].dims.length===5)Nh(e,e.inputs,t);else{let r=go(t,e.inputs);$u(e,e.inputs,r)}}}),wv,b$=pe(()=>{"use strict";Be(),Mn(),Ne(),Ue(),wv=(e,t,r)=>{let n=e.length>2,i=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,l=o[2]/a,d=o[3],f=s?Et(l):1,p=s&&d===1&&l>=4,g=p?Math.floor(l/4)*4:Math.floor(l/f)*f,b=l-g,y=s?Et(d):1,x=s?d===1?f:y:1,E=K.size(i)/y,S=[Math.ceil(E/64),1,1];rt("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${S}`);let $=["rank","rank"],A=[t.strides[0],t.strides[1]],C=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],O=[t.dilations[0],t.dilations[1]],P=[C[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),C[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],N=[P[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),P[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],T=[{type:12,data:E},{type:12,data:A},{type:12,data:C},{type:12,data:O},{type:12,data:P},{type:6,data:N},{type:12,data:g},{type:12,data:l},{type:12,data:d},...Ae(e[0].dims,e[1].dims)];n&&(T.push(...Ae(e[2].dims)),$.push("rank")),T.push(...Ae(i));let W=Y=>{let de=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:A.length},{name:"filter_dims",type:"u32",length:C.length},{name:"dilations",type:"u32",length:C.length},{name:"effective_filter_dims",type:"u32",length:P.length},{name:"pads",type:"i32",length:N.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],X=Wt(e[0].dataType),ue=s?1:2,q=s?2:3,ee=s?3:1,he=Q("W",e[1].dataType,e[1].dims.length,x),ne=Q("Dy",e[0].dataType,e[0].dims.length,f),fe=[ne,he];n&&fe.push(Q("bias",e[2].dataType,[i[ee]].length,y));let oe=Ce("result",e[0].dataType,i.length,y),Te=()=>{let Se="";if(p)f===4?Se+=`
        let xValue = ${ne.getByOffset("x_offset")};
        let wValue = ${he.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:f===2?Se+=`
          dotProd = dotProd + dot(vec4<${X}>(${ne.getByOffset("x_offset")}, ${ne.getByOffset("x_offset + 1u")}), vec4<${X}>(${he.getByOffset("w_offset")}, ${he.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:f===1&&(Se+=`
          dotProd = dotProd + dot(vec4<${X}>(${ne.getByOffset("x_offset")}, ${ne.getByOffset("x_offset + 1u")}, ${ne.getByOffset("x_offset + 2u")}, ${ne.getByOffset("x_offset + 3u")}), vec4<${X}>(${he.getByOffset("w_offset")}, ${he.getByOffset("w_offset + 1u")}, ${he.getByOffset("w_offset + 2u")}, ${he.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Se+=`
                  let xValue = ${s?ne.getByOffset(`${ne.indicesToOffset(`${ne.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):ne.get("batch","inputChannel","idyR","idyC")};
        `,f===1)Se+=`
          let w_offset = ${he.indicesToOffset(`${he.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${he.getByOffset(`w_offset / ${x}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let be=0;be<f;be++)Se+=`
            let wValue${be} = ${he.getByOffset(`${he.indicesToOffset(`${he.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${be}, wOutChannel)`)} / ${x}`)};
            dotProd = dotProd + xValue[${be}] * wValue${be};`;return Se},re=()=>{if(b===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let Se="";if(f===1){Se+="dotProd = dotProd";for(let be=0;be<b;be++)Se+=`
            + ${ne.getByOffset(`x_offset + ${be}`)} * ${he.getByOffset(`w_offset + ${be}`)}`;Se+=";"}else if(f===2){if(b!==2)throw new Error(`Invalid inputChannelsRemainder ${b}.`);Se+=`
          let xValue = ${ne.getByOffset("x_offset")};
          let wValue = ${he.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Se},xe=`
            let outputIndices = ${oe.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${oe.indicesGet("outputIndices",0)};
            let d1 = ${oe.indicesGet("outputIndices",ee)};
            let r = ${oe.indicesGet("outputIndices",ue)};
            let c = ${oe.indicesGet("outputIndices",q)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${oe.type.value}(0.0);
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
              if (dyR < 0.0 || dyR >= ${X}(uniforms.Dy_shape[${ue}]) || fract(dyR) > 0.0 ||
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
                var x_offset = ${ne.indicesToOffset(`${ne.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f};
                var w_offset = ${he.indicesToOffset(`${he.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${x};
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
            ${oe.setByOffset("global_idx","value")};
          `;return`
    ${Y.registerUniforms(de).declareVariables(...fe,oe)}
      ${Y.mainStart()}
      ${Y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${xe}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${x}${y}${p}${b}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:S[0],y:S[1],z:S[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:T}),getShaderSource:W}}}),Uh,Lh,Fh,Su,_v,jh,ku,Vh,xv,v$=pe(()=>{"use strict";b$(),Gi(),si(),Uh=(e,t,r,n,i,s)=>(e-1)*t+r+(n-1)*i+1-s,Lh=(e,t,r,n,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=s,r[i]=e-s):t==="SAME_LOWER"&&(r[n]=e-s,r[i]=s)},Fh=(e,t,r,n,i,s,a,o,l,d)=>{let f=e.length-2,p=d.length===0;l.length<f&&l.push(...Array(f-l.length).fill(0));let g=e[0],b=t[o?3:1]*i;for(let y=0,x=e.length-f-(o?1:0);y<f;++y,++x){let E=e[x],S=p?E*a[y]:d[y],$=Uh(E,a[y],s[y],t[x],r[y],S);Lh($,n,s,y,y+f),p&&d.push(a[y]*(E-1)+l[y]+(t[x]-1)*r[y]+1-s[y]-s[y+f])}d.splice(0,0,g),d.splice(o?3:1,0,b)},Su=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,g)=>p*g,1)===0){r.length=0;for(let p=2;p<t[1].dims.length;++p)r.push(t[1].dims[p])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((p,g)=>p+g,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}let d=e.strides.slice();if(d.reduce((p,g)=>p+g,0)===0){let p=t[0].dims.length-2;d=new Array(p).fill(1)}Fh(o,r,l,e.autoPad,e.group,i,d,n,a,s);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:i,outputPadding:a,outputShape:s,dilations:l,strides:d}),f},_v=e=>{let t=lc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group??1,a=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),f=e.outputPadding,p=e.outputShape;return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,outputPadding:f,outputShape:p,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},jh=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ku=(e,t,r,n)=>{let i=e.kernelCustomData.wT??e.compute($r(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(wv(s,r,n),{inputs:s})},Vh=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let d=Su({...t,pads:o,strides:a,dilations:s,kernelShape:i,outputPadding:l},n);ku(e,n,d,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},xv=(e,t)=>{if(jh(e.inputs,t),e.inputs[0].dims.length===3)Vh(e,t);else{let r=Su(t,e.inputs);ku(e,e.inputs,r)}}}),Wh,$v,Sv,w$=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),Wh=(e,t,r,n)=>{let i=K.size(t),s=t.length,a=Q("input",e,s),o=Ce("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=K.normalizeAxis(l,s),f=p=>{let g=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,b=Ie("uniforms.input_shape","uniforms.axis",s),y=n.reverse?g+(n.exclusive?" + 1":""):"0",x=n.reverse?b:g+(n.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${x};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...Ae(t,t)]}),getShaderSource:f}},$v=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(Wh(n,r,i,t),{inputs:[0]})},Sv=e=>{let t=e.exclusive===1,r=e.reverse===1;return ut({exclusive:t,reverse:r})}}),qh,Hh,Gh,kv,Tv,_$=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),qh=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Hh=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)i.push(r.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},Gh=(e,t)=>{let r,n,i,s,a,o,l=t.format==="NHWC",d=t.blocksize,f=t.mode==="DCR";l?([r,n,i,s]=e.dims,a=f?[r,n,i,d,d,s/d**2]:[r,n,i,s/d**2,d,d],o=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=f?[r,d,d,s/d**2,n,i]:[r,s/d**2,d,d,n,i],o=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(a),g=p.dims.length,b=e.dataType,y=Q("a",b,g),x=Ce("output",b,g),E=S=>`
  ${S.registerUniform("output_size","u32").declareVariables(y,x)}

  ${Hh(o,g,y,x)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:S=>{let $=l?[r,n*d,i*d,s/d**2]:[r,s/d**2,n*d,i*d],A=K.size($),C=p.dims,O=K.sortBasedOnPerm(C,o);return{outputs:[{dims:$,dataType:S[0].dataType}],dispatchGroup:{x:Math.ceil(A/64)},programUniforms:[{type:12,data:A},...Ae(C,O)]}},getShaderSource:E}},kv=(e,t)=>{qh(e.inputs),e.compute(Gh(e.inputs[0],t))},Tv=e=>ut({blocksize:e.blocksize,mode:e.mode,format:e.format})}),_n,Ds,yo,Tu,qn,Kh,Xh,Yh,Cu,Eu,Iu,Zh,Qh,Au,Jh,Cv,Ev,x$=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),_n=256,Ds=512,yo=2*Math.PI,Tu=e=>{let t=[],r=e;for(let n of[4,2,3,5])for(;r%n===0;)t.push(n),r/=n;return r===1?t:void 0},qn=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},Kh=(e,t,r,n,i)=>{let s=r/e,a=Ds-n,o=d=>`smem[${a}u + base + ${d*t}u]`,l=`  for (var t = local_idx; t < ${s}u; t += ${_n}u) {
`;l+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,l+=`    var leg: array<vec2<f32>, 5>;
`;for(let d=0;d<e;d++){let f=`${n}u + t + ${d*s}u`;if(d===0)l+=`    leg[0] = smem[${f}];
`;else{let p=i*yo*d/(e*t);l+=`    { let a = ${qn(p)} * angleUnit; leg[${d}] = cmul(smem[${f}], vec2<f32>(cos(a), sin(a))); }
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
`}else for(let d=0;d<e;d++){let f=["leg[0]"];for(let p=1;p<e;p++){let g=i*yo*(p*d)/e,b=qn(Math.cos(g)),y=qn(Math.sin(g));f.push(`vec2<f32>(leg[${p}].x*${b} - leg[${p}].y*${y}, leg[${p}].x*${y} + leg[${p}].y*${b})`)}l+=`    ${o(d)} = ${f.join(" + ")};
`}return`${l}  }
  workgroupBarrier();
`},Xh=(e,t,r)=>{let n="",i=1,s=0;for(let a of e)n+=Kh(a,i,t,s,r),i*=a,s=Ds-s;return{code:n,resultOffset:s}},Yh=(e,t,r,n,i)=>{let s=e.dims,a=s.length,o=s[a-1],l=s[t],d=r&&n?(l-1)*2:l;i!==void 0&&(d=i);let f=r&&n?1:2,p=n&&!r?Math.floor(d/2)+1:d,g=s.slice();g[t]=p,g[a-1]=f;let b=1;for(let x=t+1;x<a-1;x++)b*=s[x];let y=K.size(s)/o/l;return{dataType:e.dataType,outputDims:g,length:d,signalLength:l,inner:b,batch:y,inputComponents:o,outputComponents:f,outputLength:p,inverse:r,onesided:n}},Cu=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),Eu=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],Iu=(e,t,r)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,r),Zh=e=>{let{dataType:t,length:r,inputComponents:n,outputComponents:i,inverse:s,onesided:a}=e,o=Vt(t),l=s?1:-1,d=s?1/r:1,f=Tu(r),p=g=>{let b=Q("x",t,[1]),y=Ce("y",t,[1]),x=O=>{let P=`inBase + (${O}) * uniforms.inner * ${n}u`,N=`f32(${b.getByOffset(P)})`,T=n===2?`f32(${b.getByOffset(`${P} + 1u`)})`:"0.0";return`vec2<f32>(${N}, ${T})`},E;if(s&&a){let O=Math.floor(r/2)+1,P=r%2===0?`select(provided, provided - 1u, provided == ${O}u)`:"provided";E=`
    let provided = min(uniforms.signalLength, ${O}u);
    for (var i = local_idx; i < ${r}u; i += ${_n}u) {
      if (i < provided) { smem[i] = ${x("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${P}; k += ${_n}u) {
      let h = smem[k];
      smem[${r}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else E=`
    let loadCount = min(uniforms.signalLength, ${r}u);
    for (var i = local_idx; i < ${r}u; i += ${_n}u) {
      if (i < loadCount) { smem[i] = ${x("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:S,resultOffset:$}=Xh(f,r,l),A=d===1?`smem[${$}u + i]`:`smem[${$}u + i] * ${qn(d)}`,C=i===2?y.setByOffset("off + 1u",`${o}(v.y)`):"";return`
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
  }`};return{name:"DFT",shaderCache:{hint:Cu(e,"fft"),inputDependencies:["type"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Eu(e),dispatchGroup:{x:e.batch}})}},Qh=e=>{let{dataType:t,length:r,inputComponents:n,outputComponents:i,inverse:s,onesided:a}=e,o=Vt(t),l=s?1:-1,d=s?1/r:1,f=p=>{let g=Q("x",t,[1]),b=Ce("y",t,[1]),y=A=>{let C=`inBase + (${A}) * uniforms.inner * ${n}u`,O=`f32(${g.getByOffset(C)})`,P=n===2?`f32(${g.getByOffset(`${C} + 1u`)})`:"0.0";return`vec2<f32>(${O}, ${P})`},x=s&&a?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
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
      let angle = ${qn(l*yo)} * f32(knMod) / ${qn(r)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${r}u) { knMod -= ${r}u; }`,S=i===2?b.setByOffset("off + 1u",`${o}(v.y)`):"",$=d===1?"acc":`acc * ${qn(d)}`;return`
  ${Iu(p,g,b)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${x}
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
      let v = ${$};
      let off = outBase + k * uniforms.inner * ${i}u;
      ${b.setByOffset("off",`${o}(v.x)`)}
      ${S}
    }
  }`};return{name:"DFT",shaderCache:{hint:Cu(e,"direct"),inputDependencies:["type"]},getShaderSource:f,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Eu(e),dispatchGroup:{x:e.batch}})}},Au=e=>{if(!e||e.dataType===0)return;if(K.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},Jh=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let r=t[t.length-1];if(r!==1&&r!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},Cv=(e,t)=>{Jh(e.inputs);let r=e.inputs[0],n=r.dims.length,i=t.inverse!==0,s=t.onesided!==0,a=Au(e.inputs[1]);if(a!==void 0&&a<=0)throw new Error("dft_length must be greater than zero.");let o=K.normalizeAxis(Au(e.inputs[2])??t.axis,n);if(o===n-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(i&&s&&r.dims[n-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let l=Yh(r,o,i,s,a);if(l.length<=0)throw new Error(`Invalid DFT length: ${l.length}`);let d=l.length<=Ds&&Tu(l.length)!==void 0?Zh(l):Qh(l);e.compute(d,{inputs:[0]})},Ev=e=>ut({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),bo,Ns,Ou,em,tm,rm,nm,zu,im,Iv,Av,$$=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),bo="[a-zA-Z]|\\.\\.\\.",Ns="("+bo+")+",Ou="^"+Ns+"$",em="("+Ns+",)*"+Ns,tm="^"+em+"$",rm=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},nm=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(tm)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,s)=>{let a=e[s].dims.slice();if(!i.match(RegExp(Ou)))throw new Error("Invalid LHS term");let o=this.processTerm(i,!0,a,s);this.lhs.push(o)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([i,s])=>s.count===1||i==="...").map(([i])=>i).join("");else if(!n.match(RegExp(Ns)))throw new Error("Invalid RHS");n.match(RegExp(bo,"g"))?.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(i);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,s=!1,a=[],o=0;if(!e.match(RegExp(Ou))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(bo,"g")),d=new rm(n);return l?.forEach((f,p)=>{if(f==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let g=i-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(o,o+g),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let b=0;b<a.length;b++){let y=String.fromCharCode(48+b);d.addSymbol(y,p+b),this.addSymbol(y,r[o++],n)}}else d.addSymbol(f,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[o++],n)}),d}},zu=e=>e+"_max",im=(e,t,r,n)=>{let i=e.map(d=>d.length).map((d,f)=>Q(`input${f}`,t,d)),s=K.size(n),a=Ce("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let f=[],p="var prod = 1.0;",g="var sum = 0.0;",b="sum += prod;",y=[],x=[],E=[],S=[],$=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((C,O)=>{if(r.rhs.symbolToIndices.has(O)){let P=r.rhs.symbolToIndices.get(O)?.[0];P!==void 0&&r.lhs.forEach((N,T)=>{if(C.inputIndices.includes(T)){let W=N.symbolToIndices.get(O);if(W===void 0)throw new Error("Invalid symbol error");W.forEach(Y=>{f.push(`${i[T].indicesSet(`input${T}Indices`,Y,a.indicesGet("outputIndices",P))}`)})}})}else r.lhs.forEach((P,N)=>{if(C.inputIndices.includes(N)){let T=P.symbolToIndices.get(O);if(T===void 0)throw new Error("Invalid symbol error");T.forEach(W=>{y.push(`${i[N].indicesSet(`input${N}Indices`,W,`${O}`)}`)}),S.push(`prod *= ${i[N].getByIndices(`input${N}Indices`)};`)}}),x.push(`for(var ${O}: u32 = 0; ${O} < uniforms.${zu(O)}; ${O}++) {`),E.push("}")});let A=$?[...f,`let sum = ${i.map((C,O)=>C.getByIndices(`input${O}Indices`)).join(" * ")};`]:[...f,g,...x,...y,p,...S,b,...E];return`
            ${d.registerUniforms(o.map(C=>({name:`${zu(C)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((C,O)=>`var input${O}Indices: ${i[O].type.indices};`).join(`
`)}
            ${A.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(p=>r.symbolToInfo.has(p)).map(p=>({type:12,data:r.symbolToInfo.get(p)?.dimValue||0}));d.push({type:12,data:s});let f=e.map((p,g)=>[...Ae(p)]).reduce((p,g)=>p.concat(g),d);return f.push(...Ae(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f}},getShaderSource:l}},Iv=(e,t)=>{let r=new nm(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((s,a)=>s.dims);e.compute(im(i,e.inputs[0].dataType,r,n))},Av=e=>{let t=e.equation.replace(/\s+/g,"");return ut({equation:t})}}),sm,Mu,am,om,Ov,S$=pe(()=>{"use strict";Be(),Ne(),Ue(),sm=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Mu=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},am=(e,t)=>e.length>t.length?Mu(e,t):Mu(t,e),om=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=am(t,r),i=e[0].dataType,s=i===9||K.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||n.length>0&&n[n.length-1]%4===0?4:1,l=Math.ceil(K.size(n)/o),d=p=>{let g=Q("input",i,t.length,a),b=Ce("output",i,n.length,o),y;if(i===9){let x=(E,S,$="")=>`
          let outputIndices${S} = ${b.offsetToIndices(`outputOffset + ${S}u`)};
          let offset${S} = ${g.broadcastedIndicesToOffset(`outputIndices${S}`,b)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${E}[${S}] = ${$}(${g.getByOffset(`index${S}`)}[component${S}]);
        `;y=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${x("data",0,"u32")}
        ${x("data",1,"u32")}
        ${x("data",2,"u32")}
        ${x("data",3,"u32")}
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
    ${y}`},f=[{type:12,data:l},...Ae(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f})}},Ov=e=>{sm(e.inputs),e.compute(om(e.inputs),{inputs:[0]})}}),lm,zv,k$=pe(()=>{"use strict";Be(),Ne(),Ue(),oc(),lm=e=>{let t=e[0].dataType,r=K.size(e[0].dims),n=K.size(e[1].dims),i=n%4===0,s=a=>{let o=Q("x",t,[1],4),l=Q("bias",t,[1],4),d=Ce("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=b=>`
      let bias${b}_offset: u32 = (global_idx * 4 + ${b}) % uniforms.bias_size;
      let bias${b} = ${l.getByOffset(`bias${b}_offset / 4`)}[bias${b}_offset % 4];`,g=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(f).declareVariables(o,l,d)}

    ${wd(Vt(t))}

    ${a.mainStart(ys)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",_d("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/ys/4)}})}},zv=e=>{e.inputs.length<2||K.size(e.inputs[1].dims)===0?Yb(e):e.compute(lm(e.inputs))}}),um,dm,Mv,Rv,T$=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),um=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},dm=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=K.normalizeAxis(t.axis,i),a=r.slice(0);a.splice(s,1,...n);let o=r[s],l=e[0].dataType===9?4:1,d=Math.ceil(K.size(a)/l),f=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...Ae(e[0].dims,e[1].dims,a)],p=g=>{let b=Q("data",e[0].dataType,e[0].dims.length,l),y=Q("inputIndices",e[1].dataType,e[1].dims.length),x=Ce("output",e[0].dataType,a.length,l),E=$=>{let A=n.length,C=`var indicesIndices${$}  = ${y.type.indices}(0);`;for(let O=0;O<A;O++)C+=`${A>1?`indicesIndices${$}[${O}]`:`indicesIndices${$}`} = ${a.length>1?`outputIndices${$}[uniforms.axis + ${O}]`:`outputIndices${$}`};`;C+=`
          var idx${$} = ${y.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${b.type.indices};
        `;for(let O=0,P=0;O<i;O++)O===s?(C+=`${i>1?`dataIndices${$}[${O}]`:`dataIndices${$}`} = u32(idx${$});`,P+=A):(C+=`${i>1?`dataIndices${$}[${O}]`:`dataIndices${$}`} = ${a.length>1?`outputIndices${$}[${P}]`:`outputIndices${$}`};`,P++);return C},S;if(e[0].dataType===9){let $=(A,C,O="")=>`
          let outputIndices${C} = ${x.offsetToIndices(`outputOffset + ${C}u`)};
          ${E(C)};
          let offset${C} = ${b.indicesToOffset(`dataIndices${C}`)};
          let index${C} = offset${C} / 4u;
          let component${C} = offset${C} % 4u;
          ${A}[${C}] = ${O}(${b.getByOffset(`index${C}`)}[component${C}]);
        `;S=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${x.setByOffset("global_idx","value")}
      `}else S=`
      let outputIndices = ${x.offsetToIndices("global_idx")};
      ${E("")};
      let value = ${b.getByIndices("dataIndices")};
      ${x.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(b,y,x)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${S}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:p}},Mv=e=>ut({axis:e.axis}),Rv=(e,t)=>{let r=e.inputs;um(r),e.compute(dm(e.inputs,t))}}),cm,Bv,Pv,C$=pe(()=>{"use strict";Be(),Ne(),Ue(),cm=(e,t,r,n,i,s,a,o,l)=>{let d=[{type:12,data:s},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:12,data:o},{type:12,data:l}],f=[s];d.push(...Ae(t.dims,f));let p=g=>{let b=Q("indices_data",t.dataType,t.dims.length),y=Ce("input_slice_offsets_data",12,1,1),x=[b,y],E=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(E).declareVariables(...x)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},Bv=(e,t)=>{let r=e.inputs,n=r[0].dims,i=r[0].dataType,s=r[1].dims,a=s[s.length-1],o=K.sizeToDimension(s,s.length-1),l=K.sizeFromDimension(n,t.batchDims+a),d=K.sizeToDimension(n,t.batchDims),f=K.sizeFromDimension(n,t.batchDims),p=o/d,g=new Array(a),b=l;for(let C=0;C<a;++C)g[a-1-C]=b,b*=n[t.batchDims+a-1-C];let y=cm(e,r[1],g,t.batchDims,n,o,p,f,a),x=t.batchDims+a;if(x>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let E=s.slice(0,-1).concat(n.slice(x)),S=K.size(E),$=[{type:12,data:S},{type:12,data:l},...Ae(r[0].dims,y.dims,E)],A=C=>{let O=Q("data",r[0].dataType,r[0].dims.length),P=Q("slice_offsets",12,y.dims.length),N=Ce("output",r[0].dataType,E.length);return`
          ${C.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(O,P,N)}
            ${C.mainStart()}
            ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:E,dataType:i}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:$}),getShaderSource:A},{inputs:[r[0],y]})},Pv=e=>({batchDims:e.batch_dims,cacheKey:""})}),fm,pm,Dv,Nv,E$=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),fm=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=K.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,l)=>l===r?Math.ceil(o/n)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},pm=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=K.normalizeAxis(t.gatherAxis,i),a=K.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(s,1,...n);let l=K.size(o),d=e[2].dataType,f=e[0].dataType===22,p=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...Ae(...e.map((b,y)=>b.dims),o)],g=b=>{let y=Q("data",e[0].dataType,e[0].dims.length),x=Q("inputIndices",e[1].dataType,e[1].dims.length),E=Q("scales",e[2].dataType,e[2].dims.length),S=e.length>3?Q("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=Ce("output",d,o.length),A=[y,x,E];S&&A.push(S);let C=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${b.registerUniforms(C).declareVariables(...A,$)}
        ${b.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${x.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${x.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${x.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${$.indicesGet("output_indices",`i + ${n.length} - 1`)};
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
        let dequantized_data = ${Vt(d)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((b,y)=>y!==1).map(b=>b.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(b,y)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:g}},Dv=(e,t)=>{let r=e.inputs;fm(r,t),e.compute(pm(e.inputs,t))},Nv=e=>ut({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),hm,mm,Uv,Lv,I$=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),hm=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},mm=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,s=e[1].dims,a=e[1].dataType,o=K.normalizeAxis(t.axis,i),l=r[o],d=s.slice(0),f=K.size(d),p=Q("input",n,i),g=Q("indicesInput",a,s.length),b=Ce("output",n,d.length),y=[{type:12,data:f},{type:6,data:l},{type:12,data:o}];return y.push(...Ae(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y}),getShaderSource:x=>`
      ${x.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,g,b)}
      ${x.mainStart()}
      ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${b.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${b.setByOffset("global_idx","value")};
  }`}},Uv=e=>ut({axis:e.axis}),Lv=(e,t)=>{let r=e.inputs;hm(r),e.compute(mm(e.inputs,t))}}),gm,ym,Fv,jv,A$=pe(()=>{"use strict";Be(),Ne(),Ue(),gm=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},ym=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,s,a]=Py.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(s/l),f=Math.ceil(i/l),p=!0,g=K.size(o),b=[{type:12,data:p?d:g},{type:12,data:i},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(b.push(...Ae(e[2].dims)),y.push("rank")),b.push(...Ae(o));let x=S=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let A=t.alpha===1?"":"value *= uniforms.alpha;",C=Q("a",e[0].dataType,e[0].dims),O=Q("b",e[1].dataType,e[1].dims),P=C.type.value,N=null,T=[C,O];e.length===3&&(N=Q("c",e[2].dataType,e[2].dims.length),T.push(N));let W=Ce("output",e[0].dataType,o.length);T.push(W);let Y=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${S.registerUniforms(Y).declareVariables(...T)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${P}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${A}
    ${N!=null?`let cOffset = ${N.broadcastedIndicesToOffset("vec2(m, n)",W)}; value += ${P}(uniforms.beta) * ${N.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},E=S=>{let $=Q("a",e[0].dataType,e[0].dims),A=Q("b",e[1].dataType,e[1].dims),C=null,O=[$,A];e.length===3&&(C=Q("c",e[2].dataType,e[2].dims.length),O.push(C));let P=Ce("output",e[0].dataType,o.length);O.push(P);let N=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],T="",W="";t.transA&&t.transB?(W=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
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
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
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
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
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
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
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
  var<workgroup> tile_a: array<array<${$.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${A.type.storage}, ${l}>, ${l}>;
  ${S.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${P.type.value}(0);
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
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",P)}; value += ${P.type.value}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*f},programUniforms:b}),getShaderSource:E}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:x}},Fv=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},jv=(e,t)=>{gm(e.inputs),e.compute(ym(e.inputs,t))}}),tn,xn,Ei,Ii,bm,vm,wm,_m,xm,$m,Sm,km,Vv,Wv,O$=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),[tn,xn,Ei,Ii]=[0,1,2,3],bm=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},vm=`
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
     indices[${tn}] = batch;
     indices[${xn}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Ei}] = u32(r);
            indices[${Ii}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Ei}] = u32(clamp(r, 0, H - 1));
          indices[${Ii}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Ei}] = gs_reflect(r, border[1], border[3]);
          indices[${Ii}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Sm=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${tn}], indices[${xn}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${tn}], indices[${xn}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${tn}], indices[${xn}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${tn}], indices[${xn}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${tn}], indices[${xn}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${tn}], indices[${xn}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,km=(e,t)=>{let r=Q("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Q("grid",e[1].dataType,n.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[tn,xn,Ei,Ii]=[0,3,1,2]);let a=Ce("output",e[0].dataType,s.length),o=r.type.value,l=K.size(s),d=[{type:12,data:l},...Ae(e[0].dims,n,s)],f=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(r,i,a)}
  ${vm}
  ${wm(o)}
  ${_m(t)}
  ${xm(t)}
  ${$m(r,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Ei}]);
      let W_in = i32(uniforms.x_shape[${Ii}]);

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
      var grid_indices = vec3<u32>(indices[${tn}], indices[${Ei}], indices[${Ii}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Sm(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let g=K.size(s);return{outputs:[{dims:s,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:f}},Vv=(e,t)=>{bm(e.inputs),e.compute(km(e.inputs,t))},Wv=e=>ut({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),sr,Tm,qv,Ru,Cm,Gs,Hv,Gv=pe(()=>{"use strict";Be(),Ne(),It(),nc(),ac(),Ue(),si(),sr=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Tm=(e,t)=>{let r=e[0],n=sr(e,1),i=sr(e,2),s=sr(e,3),a=sr(e,4),o=sr(e,5),l=sr(e,6),d=sr(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],p=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],b=p,y=0,x=0,E=Math.floor(g/t.numHeads);if(l&&d&&K.size(l.dims)&&K.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==f||l.dims[1]!==t.numHeads||l.dims[3]!==E)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==E)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],x=l.dims[2]}else if(l&&K.size(l.dims)||d&&K.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S;if(n&&K.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');S=2,b=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==E)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');S=5,b=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==E)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');S=0,b=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}if(s&&K.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=y+b,A=0;if(a&&K.size(a.dims)>0){A=8;let N=a.dims;throw N.length===1?N[0]===f?A=1:N[0]===3*f+2&&(A=3):N.length===2&&N[0]===f&&N[1]===$&&(A=5),A===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let C=!1,O=g;if(i&&K.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(b!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');O=i.dims[2]}else{if(b!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');O=i.dims[1]*i.dims[3],C=!0}}let P=!1;if(a&&K.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&K.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==f||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:b,totalSequenceLength:$,maxSequenceLength:x,inputHiddenSize:0,hiddenSize:g,vHiddenSize:O,headSize:E,vHeadSize:Math.floor(O/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:A,scale:t.scale,broadcastResPosBias:P,passPastInKv:C,qkvFormat:S}},qv=e=>ut({...e}),Ru=ut({perm:[0,2,1,3]}),Cm=(e,t,r,n,i,s,a)=>{let o=[n,i,s],l=K.size(o),d=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],f=p=>{let g=Ce("qkv_with_bias",t.dataType,o),b=Q("qkv",t.dataType,o),y=Q("bias",r.dataType,o),x=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(x).declareVariables(b,y,g)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},Gs=(e,t,r,n,i,s,a,o)=>{let l=s;if(a&&K.size(a.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Cm(e,s,a,t,n,r*i,o),l=l.reshape([t,n,r,i]),r===1||n===1?l:e.compute($r(l,Ru.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,n,r,i])),r===1||n===1?l:e.compute($r(l,Ru.perm),{inputs:[l],outputs:[-1]})[0]},Hv=(e,t)=>{let r=Tm(e.inputs,t),n=e.inputs[0],i=sr(e.inputs,1),s=sr(e.inputs,2),a=sr(e.inputs,3),o=sr(e.inputs,4),l=sr(e.inputs,5),d=sr(e.inputs,6),f=sr(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");let p=i&&s&&i.dims.length===4&&s.dims.length===4,g=Gs(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,a,0);if(p)return ha(e,g,i,s,o,void 0,d,f,l,r);if(!i||!s)throw new Error("key and value must be provided");let b=Gs(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,a,r.hiddenSize),y=Gs(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);ha(e,g,b,y,o,void 0,d,f,l,r)}}),Em,Im,Am,Om,Td,Kv,Xv,Yv=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),Em=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Im=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),ut({numOutputs:n,axis:t.axis,splitSizes:r})},Am=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Ie("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Om=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Td=(e,t)=>{let r=e[0].dims,n=K.size(r),i=e[0].dataType,s=K.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),o=Q("input",i,r.length),l=new Array(t.numOutputs),d=[],f=[],p=0,g=[{type:12,data:n}];for(let y=0;y<t.numOutputs;y++){p+=t.splitSizes[y],l[y]=p;let x=r.slice();x[s]=t.splitSizes[y],f.push(x),a[y]=Ce(`output${y}`,i,x.length),d.push({dims:f[y],dataType:e[0].dataType})}g.push({type:12,data:l},...Ae(r,...f));let b=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${Am(l.length)}
  ${Om(a)}

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
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:g})}},Kv=(e,t)=>{Em(e.inputs);let r=e.inputs.length===1?t:Im(e.inputs,t);e.compute(Td(e.inputs,r),{inputs:[0]})},Xv=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return ut({axis:t,numOutputs:n,splitSizes:r})}}),zm,Ho,Zv,Qv=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),zm=(e,t)=>{let[r,n,i,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!K.areEqual(n.dims,[])&&!K.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!K.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],f=i.dims[0],p=K.sizeFromDimension(r.dims,1)/d,g=o===0?i.dims[1]*2:p/a;if(o>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(l!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(d>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Ho=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:s}=t,a=e[0].dims[0],o=K.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,f=e[2].dims[1],p=i===0?f*2:d/n,g=new Array(a,l,d/p,p-f),b=K.computeStrides(g),y=[{type:1,data:s},{type:12,data:g},{type:12,data:b},...e[0].dims.length===3?new Array({type:12,data:[o,d,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,l*p,1]}):[],...Ae(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],x=E=>{let S=Q("input",e[0].dataType,e[0].dims.length),$=Q("position_ids",e[1].dataType,e[1].dims.length),A=Q("cos_cache",e[2].dataType,e[2].dims.length),C=Q("sin_cache",e[3].dataType,e[3].dims.length),O=Ce("output",e[0].dataType,e[0].dims.length);return E.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:b.length},{name:"input_output_strides",type:"u32",length:b.length}]),`
        ${E.declareVariables(S,$,A,C,O)}

        ${E.mainStart(ys)}
          let half_rotary_emb_dim = uniforms.${A.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",Ce("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
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
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ut({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(g)/ys)},programUniforms:y})}},Zv=(e,t)=>{zm(e.inputs,t),e.compute(Ho(e.inputs,t))}}),Mm,Rm,Bu,Bm,Jv,z$=pe(()=>{"use strict";It(),Be(),ac(),Gv(),Yv(),si(),Qv(),Ue(),Mm=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],f=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],p=d,g=0,b=!n||n.dims.length===0,y=Math.floor(b?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);b&&(f=y*t.numHeads);let x=s&&s.dims.length!==0,E=a&&a.dims.length!==0;if(x&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(x&&E){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=s.dims[2]}else if(x||E)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}let $=0,A=!1,C=t.kvNumHeads?y*t.kvNumHeads:f;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');C=i.dims[1]*i.dims[3],A=!0}}let O=e.length>4?e[5]:void 0;if(O){if(O.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let P=O.dims.reduce((N,T)=>N*T,1);if(P!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${P}.`);for(let N=0;N<O.dims.length;N++)if(O.dims[N]!==1&&O.dims[N]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${N}] = ${O.dims[N]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:C,headSize:y,vHeadSize:Math.floor(C/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:A,qkvFormat:S}},Rm=ut({perm:[0,2,1,3]}),Bu=(e,t,r)=>{let n=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute($r(n,Rm.perm),{inputs:[n],outputs:[-1]})[0]),n},Bm=(e,t,r,n)=>{let i=7,s=["type","type"],a=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=f=>{let p=Q("seq_lens",r.dataType,r.dims),g=Q("total_seq_lens",n.dataType,n.dims),b=Ce("pos_ids",i,a),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},Jv=(e,t)=>{if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let r=Mm(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=ut({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[g,b,y]=!i&&!s?e.compute(Td([n],p),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,s],x,E;if(t.doRotary){let C=e.compute(Bm(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],O=e.inputs[7],P=e.inputs[8],N=ut({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),T=[g,C,O,P],W=[-1];x=e.compute(Ho(T,N),{inputs:T,outputs:W})[0],T.splice(0,1,b);let Y=ut({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});E=e.compute(Ho(T,Y),{inputs:T,outputs:W})[0]}let S=Gs(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?x:g,void 0,0),$=Bu(e,t.doRotary?E:b,r),A=Bu(e,y,r);ha(e,S,$,A,void 0,void 0,a,o,void 0,r,l,d)}}),Pu,Pm,Dm,e1,M$=pe(()=>{"use strict";Be(),Ne(),si(),Ue(),Pu=(e,t,r,n,i,s,a,o)=>{let l=Et(s),d=l===1?"f32":`vec${l}f`,f=l===1?"vec2f":`mat2x${l}f`,p=i*a,g=64;p===1&&(g=256);let b=[i,a,s/l],y=[i,a,2],x=["rank","type","type"],E=[];E.push(...Ae(b,y));let S=$=>{let A=Q("x",t.dataType,3,l),C=Q("scale",r.dataType,r.dims),O=Q("bias",n.dataType,n.dims),P=Ce("output",1,3,2),N=[A,C,O,P];return`
  var<workgroup> workgroup_shared : array<${f}, ${g}>;
  const workgroup_size = ${g}u;
  ${$.declareVariables(...N)}
  ${$.mainStart(g)}
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
      let sum_final = ${ni("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${ni("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${g}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:p},programUniforms:E}),getShaderSource:S},{inputs:[t,r,n],outputs:[-1]})[0]},Pm=(e,t,r)=>{let n=t[0].dims,i=n,s=2,a=n[0],o=n[1],l=K.sizeFromDimension(n,s),d=Et(l),f=K.size(i)/d,p=Pu(e,t[0],t[1],t[2],a,l,o,r.epsilon),g=[a,o,l/d],b=[a,o],y=["type","none"],x=E=>{let S=Q("x",t[0].dataType,g.length,d),$=Q("scale_shift",1,b.length,2),A=Ce("output",t[0].dataType,g.length,d),C=[S,$,A];return`
  ${E.registerUniform("output_size","u32").declareVariables(...C)}
  ${E.mainStart()}
  ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${A.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${S.getByOffset("global_idx")} * ${A.type.value}(scale_shift.x) + ${A.type.value}(scale_shift.y);
      ${A.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...Ae(g,b,g)]}),getShaderSource:x},{inputs:[t[0],p]})},Dm=(e,t,r)=>{let n=t[0].dims,i=n,s=n[0],a=n[n.length-1],o=K.sizeFromDimension(n,1)/a,l=Et(a),d=K.size(i)/l,f=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],p=["type","type"],g=!1,b=[0,n.length-1];for(let S=0;S<n.length-2;S++)g=g||n[S+1]!==1,b.push(S+1);g=g&&n[n.length-1]!==1;let y=g?e.compute($r(e.inputs[0],b),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(S,$)=>n[b[$]])),x=Pu(e,y,t[1],t[2],s,o,a,r.epsilon),E=S=>{let $=Wt(t[0].dataType),A=l===1?"vec2f":`mat${l}x2f`,C=N=>{let T=N===0?"x":"y",W=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${$}(${W}(scale.${T}))`;case 2:return`vec2<${$}>(${W}(scale[0].${T}, scale[1].${T}))`;case 4:return`vec4<${$}>(${W}(scale[0].${T}, scale[1].${T}, scale[2].${T}, scale[3].${T}))`;default:throw new Error(`Not supported compoents ${l}`)}},O=Q("input",t[0].dataType,t[0].dims,l),P=Ce("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${O.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${A}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${P.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${S.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${C(0)}, ${C(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:E},{inputs:[t[0],x]})},e1=(e,t)=>{t.format==="NHWC"?Dm(e,e.inputs,t):Pm(e,e.inputs,t)}}),Nm,Um,t1,R$=pe(()=>{"use strict";Be(),Ne(),Ue(),Nm=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Um=(e,t,r)=>{let n=t.simplified,i=e[0].dims,s=e[1],a=!n&&e[2],o=i,l=K.normalizeAxis(t.axis,i.length),d=K.sizeToDimension(i,l),f=K.sizeFromDimension(i,l),p=K.size(s.dims),g=a?K.size(a.dims):0;if(p!==f||a&&g!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${g}`);let b=[];for(let O=0;O<i.length;++O)O<l?b.push(i[O]):b.push(1);let y=Et(f),x=["type","type"],E=[{type:12,data:d},{type:1,data:f},{type:12,data:Math.floor(f/y)},{type:1,data:t.epsilon}];a&&x.push("type");let S=r>1,$=r>2,A=O=>{let P=Wt(e[0].dataType),N=[Q("x",e[0].dataType,e[0].dims,y),Q("scale",s.dataType,s.dims,y)];a&&N.push(Q("bias",a.dataType,a.dims,y)),N.push(Ce("output",e[0].dataType,o,y)),S&&N.push(Ce("mean_data_output",1,b)),$&&N.push(Ce("inv_std_output",1,b));let T=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${O.registerUniforms(T).declareVariables(...N)}
  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${yd("f32",y)};
    var mean_square_vector = ${yd("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${us(P,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ni("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ni("mean_square_vector",y)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${us(P,y,"x[j + offset]")};
      let f32scale = ${us(P,y,"scale[j]")};
      output[j + offset] = ${N[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${us(P,y,"bias[j]")}`:""}
      );
    }

    ${S?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},C=[{dims:o,dataType:e[0].dataType}];return S&&C.push({dims:b,dataType:1}),$&&C.push({dims:b,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${n}`,inputDependencies:x},getRunData:()=>({outputs:C,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:E}),getShaderSource:A}},t1=(e,t)=>{Nm(e.inputs),e.compute(Um(e.inputs,t,e.outputCount))}}),Lm,r1,B$=pe(()=>{"use strict";Ne(),cc(),fc(),Lm=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},r1=e=>{Lm(e.inputs);let t=gs.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(dc(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=K.size(e.inputs[0].dims.slice(0,-2)),a=K.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&a===1){let o=e.inputs[0].reshape([1,s,n]),l=e.inputs[1].reshape([1,n,r]),d=[1,s,r],f=[o,l];e.compute(qo(f,{activation:""},t,d),{inputs:f})}else e.compute(qo(e.inputs,{activation:""},t))}}}),Fm,jm,Vm,n1,i1,P$=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),Fm=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!K.areEqual(a.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(K.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(K.size(l)!==d)throw new Error("zeroPoints input size error.")}},jm=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=K.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=Et(t.k),g=Et(d),b=Et(a),y=o.concat([i,a]),x=i>1&&a/b%2===0?2:1,E=K.size(y)/b/x,S=64,$=[],A=[l,i,s/p],C=K.convertShape(e[1].dims).slice();C.splice(-1,1,d/g),$.push(...Ae(A)),$.push(...Ae(C)),$.push(...Ae(e[2].dims)),e.length===4&&$.push(...Ae(K.convertShape(e[3].dims)));let O=[l,i,a/b];$.push(...Ae(O));let P=N=>{let T=A.length,W=Q("a",e[0].dataType,T,p),Y=Q("b",12,C.length,g),de=Q("scales",e[2].dataType,e[2].dims.length),X=[W,Y,de],ue=e.length===4?Q("zero_points",12,e[3].dims.length):void 0;ue&&X.push(ue);let q=O.length,ee=Ce("output",e[0].dataType,q,b),he=Wt(e[0].dataType),ne=(()=>{switch(p){case 1:return`array<${he}, 8>`;case 2:return`mat4x2<${he}>`;case 4:return`mat2x4<${he}>`;default:throw new Error(`${p}-component is not supported.`)}})(),fe=Math.floor(32/t.bits),oe=Math.floor(fe/8),Te=()=>{let Se="";for(let be=0;be<oe;be++){let ht=be*t.bits*4,et=ht+t.bits;Se+=`
          // reuse a data (pass ${be})
            var input_offset${be>0?be:""} = ${be===0?W.indicesToOffset(`${W.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${be>0?be:""}: ${ne};
            for (var j${be>0?be:""}: u32 = 0; j${be>0?be:""} < ${8/p}; j${be>0?be:""}++) {
              a_data${be>0?be:""}[j${be>0?be:""}] = ${W.getByOffset(`input_offset${be>0?be:""}`)};
              input_offset${be>0?be:""}++;
            }
          `;for(let ot=0;ot<b*x;ot++)Se+=`
            b_value = ${g===1?`b${ot}_data`:`b${ot}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${be*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ht}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${et}u) & b_mask);`}
            b_quantized_values = ${ne}(${Array.from({length:4},(wt,qe)=>`${he}(b_value_lower[${qe}]), ${he}(b_value_upper[${qe}])`).join(", ")});
            b_dequantized_values = ${p===1?`${ne}(${Array.from({length:8},(wt,qe)=>`(b_quantized_values[${qe}] - ${ue?`zero_point${ot}`:"zero_point"}) * scale${ot}`).join(", ")});`:`(b_quantized_values - ${ne}(${Array(8).fill(`${ue?`zero_point${ot}`:"zero_point"}`).join(",")})) * scale${ot};`};
            workgroup_shared[local_id.x * ${x} + ${Math.floor(ot/b)}]${b>1?`[${ot%b}]`:""} += ${Array.from({length:8/p},(wt,qe)=>`${p===1?`a_data${be>0?be:""}[${qe}] * b_dequantized_values[${qe}]`:`dot(a_data${be>0?be:""}[${qe}], b_dequantized_values[${qe}])`}`).join(" + ")};
          `}return Se},re=()=>{let Se=`
            var col_index = col * ${b};
            ${ue?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${he}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let be=0;be<b*x;be++)Se+=`
            let scale${be} = ${de.getByOffset("col_index * nBlocksPerCol + block")};
            ${ue?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${ue.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${be} = ${he}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Se},xe=()=>{let Se=`col_index = col * ${b};`;for(let be=0;be<b*x;be++)Se+=`
            let b${be}_data = ${Y.getByIndices(`${Y.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Se+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ne};
            var b_dequantized_values: ${ne};`,Se};return`
        var<workgroup> workgroup_shared: array<${ee.type.value}, ${x*S}>;
        ${N.declareVariables(...X,ee)}
        ${N.mainStart([S,1,1])}
          let output_indices = ${ee.offsetToIndices(`(global_idx / ${S}) * ${x}`)};
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
                word_offset += ${fe/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${x}) {
            var output_value: ${ee.type.value} = ${ee.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${S}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${x};
            }
            ${ee.setByIndices(`${ee.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${g};${b};${x};${S}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:f}],dispatchGroup:{x:E},programUniforms:$}),getShaderSource:P}},Vm=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=K.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=Et(t.k),g=Et(d),b=o.concat([i,a]),y=128,x=a%8===0?8:a%4===0?4:1,E=y/x,S=Math.floor(32/t.bits),$=E*g*S,A=$/p,C=$/t.blockSize,O=K.size(b)/x,P=[],N=[l,i,s/p],T=K.convertShape(e[1].dims).slice();T.splice(-1,1,d/g),P.push(...Ae(N)),P.push(...Ae(T)),P.push(...Ae(e[2].dims)),e.length===4&&P.push(...Ae(K.convertShape(e[3].dims)));let W=[l,i,a];P.push(...Ae(W));let Y=de=>{let X=N.length,ue=Q("a",e[0].dataType,X,p),q=Q("b",12,T.length,g),ee=Q("scales",e[2].dataType,e[2].dims.length),he=[ue,q,ee],ne=e.length===4?Q("zero_points",12,e[3].dims.length):void 0;ne&&he.push(ne);let fe=W.length,oe=Ce("output",e[0].dataType,fe),Te=Wt(e[0].dataType),re=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${Te}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Te}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Te}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Te}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ue.type.value}, ${A}>;
        var<workgroup> inter_results: array<array<${oe.type.value}, ${E}>, ${x}>;
        ${de.declareVariables(...he,oe)}
        ${de.mainStart([E,x,1])}
          let output_indices = ${oe.offsetToIndices(`workgroup_index * ${x}`)};
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
                sub_a[a_offset] = ${ue.getByIndices(`${ue.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ue.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${C} + local_id.x;
            ${ne?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${ne.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Te}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Te}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${ee.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${q.getByIndices(`${q.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let xe=Math.floor(S/8),Se="";for(let be=0;be<xe;be++){let ht=be*t.bits*4,et=ht+t.bits;Se+=`
              ${re()}
              {${t.bits===2?`
                let half_word = b_value >> ${be*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ht}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${et}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Te}>(${Array.from({length:4},(ot,wt)=>`${Te}(b_value_lower[${wt}]), ${Te}(b_value_upper[${wt}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Te}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ot,wt)=>`${`dot(a_data${wt}, b_dequantized_values[${wt}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return Se})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${x}) {
            var output_value: ${oe.type.value} = ${oe.type.value}(0);
            for (var b = 0u; b < ${E}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${oe.setByIndices(`${oe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${g};${E};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:f}],dispatchGroup:{x:O},programUniforms:P}),getShaderSource:Y}},n1=(e,t)=>{Fm(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Vm(e.inputs,t)):e.compute(jm(e.inputs,t))},i1=e=>ut(e)}),Wm,qm,Hm,Gm,Km,Xm,Ym,Zm,s1,D$=pe(()=>{"use strict";Be(),Ne(),Ue(),Wm=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},qm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
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
      `},Hm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
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
          `},Gm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
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
          `},Km=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
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
          `},Xm=(e,t,r)=>{switch(r.mode){case 0:return qm(e,t,r.pads.length);case 1:return Hm(e,t,r.pads.length);case 2:return Gm(e,t,r.pads.length);case 3:return Km(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Ym=(e,t)=>{let r=K.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=K.size(r),s=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...Ae(e[0].dims,r));let o=["rank"],l=d=>{let f=Ce("output",e[0].dataType,r.length),p=Q("x",e[0].dataType,n.length),g=p.type.value,b=Xm(f,n.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:a?g:"f32"}),`
            ${d.registerUniforms(y).declareVariables(p,f)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${b}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(r)/64)},programUniforms:s}),getShaderSource:l}},Zm=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(r[l]),s[Number(o[l])+i]=Number(r[l+o.length])}else r.forEach((o,l)=>s[Number(l)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:n,pads:a}}else return t},s1=(e,t)=>{Wm(e.inputs);let r=Zm(e.inputs,t);e.compute(Ym(e.inputs,r),{inputs:[0]})}}),Us,Du,Nu,Uu,Lu,Qm,Jm,Fu,ju,a1,o1,Vu,l1,u1,Wu,d1,c1,f1,p1,N$=pe(()=>{"use strict";Dr(),Be(),Ne(),Ue(),Us=e=>{if(xt.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Du=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),l=s?t.dilations.slice():[],d=t.pads.slice();Vo.adjustPoolAttributes(r,i,a,o,l,d);let f=Vo.computePoolOutputShape(r,i,o,l,a,d,t.autoPad,t.ceilMode),p=Object.assign({},t);s?Object.assign(p,{kernelShape:a,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let g=f.slice();return g.push(g.splice(1,1)[0]),[p,n?g:f]},Nu=(e,t)=>{let r=t.format==="NHWC",n=K.size(e),i=K.size(t.kernelShape),s=[{type:12,data:n},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],p=!!(d+f);s.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:f}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let b=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],x=t.pads[t.pads.length/2-2],E=t.pads[t.pads.length-2];g=!!(x+E),s.push({type:12,data:b},{type:12,data:y},{type:12,data:x},{type:12,data:E}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,p,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=K.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,f)=>d+f);return[s,a,!!l,!1,!1]}},Uu=(e,t,r,n,i,s,a,o,l,d,f,p)=>{let g=i.format==="NHWC",b=t.type.value,y=Ce("output",t.type.tensor,n);if(i.kernelShape.length<=2){let x="",E="",S="",$=r-(g?2:1);if(f?x=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:x=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
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
              ${x}
              ${S}
              ${a}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let x=i.kernelShape.length,E=i.pads.length,S="";return d?S=`
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

              var offsets: array<u32, ${x}>;

              var value = ${b}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${x-1}u; j++) {
                  offsets[j] = offset / ${Ie("uniforms.kernelStrides","j",x)};
                  offset -= offsets[j] * ${Ie("uniforms.kernelStrides","j",x)};
                }
                offsets[${x-1}] = offset;

                isPad = false;
                for (var j = ${r-x}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Ie("uniforms.strides",`j - ${r-x}u`,x)}
                    + offsets[j - ${r-x}u] - ${Ie("uniforms.pads","j - 2u",E)};
                  ${S}
              }
              ${a}

              output[global_idx] = value;
            }`}},Lu=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Qm=e=>`${Lu(e)};${e.countIncludePad}`,Jm=e=>`${Lu(e)};${e.storageOrder};${e.dilations}`,Fu=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ju=(e,t,r,n)=>{let[i,s]=Du(t,n,r),a=Q("x",t.dataType,t.dims.length),o=a.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[f,p,g,b,y]=Nu(s,i);f.push(...Ae(t.dims,s));let x=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${g};${b};${y}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(K.size(s)/64)},programUniforms:f}),getShaderSource:E=>Uu(E,a,t.dims.length,s.length,i,l,d,0,p,g,b,y)}},a1=e=>{let t=e.count_include_pad!==0,r=Fu(e);if(r.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:Qm(n)}},o1=(e,t)=>{Us(e.inputs),e.compute(ju("AveragePool",e.inputs[0],!1,t))},Vu={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},l1=e=>{let t=e.format;return{format:t,...Vu,cacheKey:t}},u1=(e,t)=>{Us(e.inputs),e.compute(ju("GlobalAveragePool",e.inputs[0],!0,t))},Wu=(e,t,r,n)=>{let[i,s]=Du(t,n,r),a=`
      value = max(x_val, value);
    `,o="",l=Q("x",t.dataType,t.dims.length),d=["rank"],[f,p,g,b,y]=Nu(s,i);return f.push(...Ae(t.dims,s)),{name:e,shaderCache:{hint:`${n.cacheKey};${g};${b};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(K.size(s)/64)},programUniforms:f}),getShaderSource:x=>Uu(x,l,t.dims.length,s.length,i,a,o,t.dataType===10?-65504:-1e5,p,g,b,y)}},d1=(e,t)=>{Us(e.inputs),e.compute(Wu("MaxPool",e.inputs[0],!1,t))},c1=e=>{let t=e.storage_order,r=e.dilations,n=Fu(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:Jm(i)}},f1=e=>{let t=e.format;return{format:t,...Vu,cacheKey:t}},p1=(e,t)=>{Us(e.inputs),e.compute(Wu("GlobalMaxPool",e.inputs[0],!0,t))}}),eg,tg,h1,m1,U$=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),eg=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},tg=(e,t)=>{let r=K.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,s=e[0].dims,a=e[1].dataType,o=K.size(s),l=n===3||n===2,d=l?[Math.ceil(K.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,p=e.length>2?e[2]:void 0,g=p?l?[Math.ceil(K.size(p.dims)/4)]:p.dims:void 0,b=f.length===0||f.length===1&&f[0]===1,y=b===!1&&f.length===1,x=Et(o),E=b&&(!l||x===4),S=E?x:1,$=E&&!l?x:1,A=Q("input",l?12:n,d.length,$),C=Q("scale",a,f.length),O=p?Q("zero_point",l?12:n,g.length):void 0,P=Ce("output",a,s.length,S),N=[A,C];O&&N.push(O);let T=[d,f];p&&T.push(g);let W=[{type:12,data:o/S},{type:12,data:r},{type:12,data:t.blockSize},...Ae(...T,s)],Y=de=>{let X=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${de.registerUniforms(X).declareVariables(...N,P)}
      ${de.mainStart()}
          ${de.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${P.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${A.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${S===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${A.getByOffset("global_idx")};`};

          // Set scale input
          ${b?`let scale_value= ${C.getByOffset("0")}`:y?`
            let scale_index = ${P.indicesGet("output_indices","uniforms.axis")};
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
                let zero_point_index = ${P.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${O.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${P.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${O.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${C.indicesToOffset("scale_indices")};
                let zero_point_input = ${O.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${O.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":A.type.value}(0);`};
      // Compute and write output
      ${P.setByOffset("global_idx",`${P.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:O?["rank","rank","rank"]:["rank","rank"]},getShaderSource:Y,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/S/64),y:1,z:1},programUniforms:W})}},h1=(e,t)=>{eg(e.inputs,t),e.compute(tg(e.inputs,t))},m1=e=>ut({axis:e.axis,blockSize:e.blockSize})}),rg,ng,g1,L$=pe(()=>{"use strict";Dr(),Be(),Ue(),rg=(e,t,r)=>{let n=e===t,i=e<t&&r<0,s=e>t&&r>0;if(n||i||s)throw new Error("Range these inputs' contents are invalid.")},ng=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),s=[i],a=i,o=[{type:12,data:a},{type:n,data:e},{type:n,data:r},...Ae(s)],l=d=>{let f=Ce("output",n,s.length),p=f.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${d.registerUniforms(g).declareVariables(f)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},g1=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),xt.webgpu.validateInputContent&&rg(t,r,n),e.compute(ng(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),ig,sg,y1,b1,F$=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),ig=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${s}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},sg=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r,s=1,a=Math.ceil(K.sizeToDimension(n,n.length-1)/s),o=n[n.length-1],l=K.sizeFromDimension(r,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:l},...Ae(e[1].dims,e[2].dims,i)],f=p=>{let g=Q("indices",e[1].dataType,e[1].dims.length),b=Q("updates",e[2].dataType,e[2].dims.length,s),y=t.reduction!=="none"&&t.reduction!==""?Vy("output",e[0].dataType,i.length):Ce("output",e[0].dataType,i.length,s);return`
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

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:f}},y1=e=>ut({reduction:e.reduction}),b1=(e,t)=>{e.compute(sg(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ag,og,lg,qu,ug,dg,cg,fg,pg,hg,mg,gg,Hu,yg,bg,vg,wg,_g,v1,w1,j$=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),ag=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
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
    }`,mg=(e,t,r,n,i,s,a)=>`
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
    }`,gg=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Ie("uniforms.input_shape","i",t.length)}) {
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
    }`},bg=(e,t,r,n,i,s,a,o,l,d)=>{let f=r.length===2,p=!0,[g,b]=f?[0,1]:p?[2,3]:[1,2],y=e.type.value,x=E=>{let S=E===g?"row":"col";return`
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
    ${x(g)};
    ${x(b)};
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
    }`},wg=(e,t,r,n,i,s)=>{let a=e.dims,o=cg(s,t.axes,a.length),l=fg(a,n,i,t.axes),d=n.slice();n.length===0&&(d=a.map(($,A)=>$===0?1:l[A]/$),t.keepAspectRatioPolicy!=="stretch"&&(l=pg(a,d,t)));let f=Ce("output",e.dataType,l.length),p=Q("input",e.dataType,a.length),g=K.size(l),b=a.length===l.length&&a.every(($,A)=>$===l[A]),y=t.coordinateTransformMode==="tf_crop_and_resize",x=t.extrapolationValue,E=p.type.value,S=$=>`
      ${b?"":`
      ${ug(t.coordinateTransformMode,E)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${gg(p,a)};
              ${dg(t.nearestMode,r,E)};
              ${mg(p,f,a,l,d.length,o.length,y)};
              `;case"linear":return`
              ${hg(f,a,l,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${yg(p,f,a,y,x)}`;if(a.length===3||a.length===5)return`${vg(p,f,a,y,x)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${bg(p,f,a,l,d,o,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(p,f)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${b}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:o},...Ae(a,l)]})}},_g=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},v1=(e,t)=>{let r=[],n=[],i=[],s=_g(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");lg(e.inputs,t,s,r,n,i),e.compute(wg(e.inputs[0],t,s,r,n,i),{inputs:[0]})},w1=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return ut({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),xg,$g,_1,V$=pe(()=>{"use strict";Be(),Ne(),Ue(),xg=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},$g=(e,t,r,n)=>{let i=t.simplified,s=e[0].dims,a=K.size(s),o=s,l=a,d=s.slice(-1)[0],f=n?s.slice(0,-1).concat(1):[],p=!i&&e.length>3,g=e.length>4,b=n&&r>1,y=n&&r>2,x=r>3,E=64,S=Et(d),$=[{type:12,data:l},{type:12,data:S},{type:12,data:d},{type:1,data:t.epsilon}],A=O=>{let P=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],N=[Q("x",e[0].dataType,e[0].dims,S),Q("skip",e[1].dataType,e[1].dims,S),Q("gamma",e[2].dataType,e[2].dims,S)];p&&N.push(Q("beta",e[3].dataType,e[3].dims,S)),g&&N.push(Q("bias",e[4].dataType,e[4].dims,S)),N.push(Ce("output",e[0].dataType,o,S)),b&&N.push(Ce("mean_output",1,f)),y&&N.push(Ce("inv_std_output",1,f)),x&&N.push(Ce("input_skip_bias_sum",e[0].dataType,o,S));let T=Wt(e[0].dataType),W=Wt(1,S);return`

      ${O.registerUniforms(P).declareVariables(...N)}
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
          ${x?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${us(T,S,"value")};
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
        let mean = ${ni("sum",S)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ni("square_sum",S)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${b?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${T}(mean)`}) *
            ${T}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},C=[{dims:o,dataType:e[0].dataType}];return r>1&&C.push({dims:f,dataType:1}),r>2&&C.push({dims:f,dataType:1}),r>3&&C.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${S};${b};${y};${x}`,inputDependencies:e.map((O,P)=>"type")},getShaderSource:A,getRunData:()=>({outputs:C,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:$})}},_1=(e,t)=>{xg(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute($g(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Sg,Ls,kg,Gu,Tg,Cg,x1,$1,W$=pe(()=>{"use strict";Be(),Ne(),It(),Ue(),Sg=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},Ls=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},kg=(e,t)=>{if(e.length>1){let r=Ls(e,1),n=Ls(e,2),i=Ls(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),ut({starts:r,ends:n,axes:i})}else return t},Gu=(e,t,r,n,i)=>{let s=e;return e<0&&(s+=r[n[t]]),i[t]<0?Math.max(0,Math.min(s,r[n[t]]-1)):Math.max(0,Math.min(s,r[n[t]]))},Tg=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,Cg=(e,t)=>{let r=e[0].dims,n=K.size(r),i=t.axes.length>0?K.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=Ls(e,4);s.forEach(S=>S!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let a=t.starts.map((S,$)=>Gu(S,$,r,i,s)),o=t.ends.map((S,$)=>Gu(S,$,r,i,s));if(i.length!==a.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let S=0;S<r.length;++S)i.includes(S)||(a.splice(S,0,0),o.splice(S,0,r[S]),s.splice(S,0,1));let l=s.map(S=>Math.sign(S));s.forEach((S,$,A)=>{if(S<0){let C=(o[$]-a[$])/S,O=a[$],P=O+C*s[$];a[$]=P,o[$]=O,A[$]=-S}});let d=r.slice(0);i.forEach((S,$)=>{d[S]=Math.ceil((o[S]-a[S])/s[S])});let f={dims:d,dataType:e[0].dataType},p=Ce("output",e[0].dataType,d.length),g=Q("input",e[0].dataType,e[0].dims.length),b=K.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],x=[{type:12,data:b},{type:12,data:a},{type:6,data:l},{type:12,data:s},...Ae(e[0].dims,d)],E=S=>`
      ${S.registerUniforms(y).declareVariables(g,p)}
        ${Tg(g,p,r)}
        ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:E,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:x})}},x1=(e,t)=>{Sg(e.inputs,t);let r=kg(e.inputs,t);e.compute(Cg(e.inputs,r),{inputs:[0]})},$1=e=>{let t=e.starts,r=e.ends,n=e.axes;return ut({starts:t,ends:r,axes:n})}}),Eg,Ig,S1,k1,q$=pe(()=>{"use strict";Be(),Ne(),It(),si(),Ue(),Eg=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Ig=(e,t)=>{let r=e.inputs[0],n=r.dims,i=K.size(n),s=n.length,a=K.normalizeAxis(t.axis,s),o=a<n.length-1,l,d=[];o?(d=Array.from({length:s},(N,T)=>T),d[a]=s-1,d[s-1]=a,l=e.compute($r(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let f=l.dims,p=f[s-1],g=i/p,b=Et(p),y=p/b,x=64;g===1&&(x=256);let E=(N,T)=>T===4?`max(max(${N}.x, ${N}.y), max(${N}.z, ${N}.w))`:T===2?`max(${N}.x, ${N}.y)`:T===3?`max(max(${N}.x, ${N}.y), ${N}.z)`:N,S=Q("x",l.dataType,l.dims,b),$=Ce("result",l.dataType,l.dims,b),A=S.type.value,C=Wt(l.dataType)==="f32"?`var threadMax = ${A}(-3.4028234663852886e+38f);`:`var threadMax = ${A}(-65504.0h);`,O=N=>`
      var<workgroup> rowMaxShared : ${A};
      var<workgroup> rowSumShared : ${A};
      var<workgroup> threadShared : array<${A}, ${x}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${A} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${A}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${N.registerUniform("packedCols","i32").declareVariables(S,$)}
      ${N.mainStart(x)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${x};
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
          rowSumShared = ${A}(${ni("threadShared[0]",b)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${A}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,P=e.compute({name:"Softmax",shaderCache:{hint:`${b};${x}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:y}]}),getShaderSource:O},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute($r(P,d),{inputs:[P]})},S1=(e,t)=>{Eg(e.inputs),Ig(e,t)},k1=e=>ut({axis:e.axis})}),Ku,Ag,Og,zg,T1,H$=pe(()=>{"use strict";Be(),Ne(),Ue(),Ku=e=>Array.from(e.getBigInt64Array(),Number),Ag=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ku(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Og=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},zg=(e,t)=>{let r=e[0].dims,n=t??Ku(e[1]),i=Og(r,n),s=K.size(i),a=e[0].dataType,o=Q("input",a,r.length),l=Ce("output",a,i.length),d=f=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...Ae(e[0].dims,i)]}),getShaderSource:d}},T1=e=>{Ag(e.inputs),e.compute(zg(e.inputs),{inputs:[0]})}}),Mg,Rg,C1,G$=pe(()=>{"use strict";Be(),Ne(),Ue(),Mg=(e,t,r,n,i)=>{let s=Ce("output_data",i,r.length,4),a=Q("a_data",t[1].dataType,t[1].dims.length,4),o=Q("b_data",t[2].dataType,t[2].dims.length,4),l=Q("c_data",t[0].dataType,t[0].dims.length,4),d,f=(p,g,b)=>`select(${g}, ${p}, ${b})`;if(!n)d=s.setByOffset("global_idx",f(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let p=(g,b,y="")=>{let x=`a_data[index_a${b}][component_a${b}]`,E=`b_data[index_b${b}][component_b${b}]`,S=`bool(c_data[index_c${b}] & (0xffu << (component_c${b} * 8)))`;return`
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
            ${g}[${b}] = ${y}(${f(x,E,S)});
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
      }`},Rg=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,s=!(K.areEqual(t,r)&&K.areEqual(r,n)),a=t,o=K.size(t);if(s){let d=gs.calcShape(gs.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=K.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Mg(d,e,a,s,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...Ae(n,t,r,a)]})}},C1=e=>{e.compute(Rg(e.inputs))}}),E1,K$=pe(()=>{"use strict";o$(),ac(),l$(),u$(),d$(),c$(),f$(),y$(),v$(),w$(),_$(),x$(),$$(),S$(),k$(),T$(),C$(),E$(),I$(),A$(),O$(),z$(),M$(),R$(),B$(),P$(),Gv(),D$(),N$(),U$(),L$(),F$(),sc(),j$(),Qv(),V$(),W$(),q$(),Yv(),H$(),si(),oc(),G$(),E1=new Map([["Abs",[bb]],["Acos",[vb]],["Acosh",[wb]],["Add",[tv]],["ArgMax",[hb,vd]],["ArgMin",[pb,vd]],["Asin",[_b]],["Asinh",[xb]],["Atan",[$b]],["Atanh",[Sb]],["Attention",[mb]],["AveragePool",[o1,a1]],["BatchNormalization",[gb]],["BiasAdd",[yb]],["BiasSplitGelu",[ev]],["Cast",[Tb,kb]],["Ceil",[Eb]],["Clip",[Cb]],["Concat",[cv,fv]],["Conv",[kd,Sd]],["ConvTranspose",[xv,_v]],["Cos",[Ib]],["Cosh",[Ab]],["CumSum",[$v,Sv]],["DepthToSpace",[kv,Tv]],["DequantizeLinear",[h1,m1]],["DFT",[Cv,Ev]],["Div",[rv]],["Einsum",[Iv,Av]],["Elu",[Ob,Hs]],["Equal",[nv]],["Erf",[zb]],["Exp",[Mb]],["Expand",[Ov]],["FastGelu",[zv]],["Floor",[Rb]],["FusedConv",[kd,Sd]],["Gather",[Rv,Mv]],["GatherElements",[Lv,Uv]],["GatherBlockQuantized",[Dv,Nv]],["GatherND",[Bv,Pv]],["Gelu",[Bb]],["Gemm",[jv,Fv]],["GlobalAveragePool",[u1,l1]],["GlobalMaxPool",[p1,f1]],["Greater",[ov]],["GreaterOrEqual",[uv]],["GridSample",[Vv,Wv]],["GroupQueryAttention",[Jv]],["HardSigmoid",[Vb,jb]],["HardSwish",[Wb]],["InstanceNormalization",[e1]],["LayerNormalization",[t1]],["LeakyRelu",[Pb,Hs]],["Less",[lv]],["LessOrEqual",[dv]],["Log",[Qb]],["MatMul",[r1]],["MatMulNBits",[n1,i1]],["MaxPool",[d1,c1]],["Mul",[iv]],["MultiHeadAttention",[Hv,qv]],["Neg",[Nb]],["Not",[Db]],["Pad",[s1]],["Pow",[sv]],["QuickGelu",[Jb,Hs]],["Range",[g1]],["Reciprocal",[Ub]],["ReduceMin",[lb]],["ReduceMean",[nb]],["ReduceMax",[ob]],["ReduceSum",[db]],["ReduceProd",[ub]],["ReduceL1",[ib]],["ReduceL2",[sb]],["ReduceLogSum",[fb]],["ReduceLogSumExp",[ab]],["ReduceSumSquare",[cb]],["Relu",[Lb]],["Resize",[v1,w1]],["RotaryEmbedding",[Zv]],["ScatterND",[b1,y1]],["Sigmoid",[Fb]],["Sin",[qb]],["Sinh",[Hb]],["Slice",[x1,$1]],["SkipLayerNormalization",[_1]],["Split",[Kv,Xv]],["Sqrt",[Gb]],["Softmax",[S1,k1]],["Sub",[av]],["Tan",[Kb]],["Tanh",[Xb]],["ThresholdedRelu",[Zb,Hs]],["Tile",[T1]],["Transpose",[qy,Hy]],["Where",[C1]]])}),I1,X$=pe(()=>{"use strict";Dr(),Mn(),Ue(),I1=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){pn(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Kr(e.programInfo.name)}dispose(){}build(e,t){pn(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let i=Wy(t,this.backend.device.limits),s=e.getShaderSource(i),a=`${n.join(`
`)}
${i.additionalImplementations}
${s}`,o=r.createShaderModule({code:a,label:e.name});rt("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Kr(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let s=t*r*n,a=Math.ceil(Math.sqrt(s));if(a>i){if(a=Math.ceil(Math.cbrt(s)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),A1={};bs(A1,{WebGpuBackend:()=>O1});var Bg,Pg,Dg,O1,Y$=pe(()=>{"use strict";Dr(),Be(),Mn(),Uy(),s$(),K$(),X$(),Bg=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let s=e[n].dims.length;r.push(`${i};${s}`);break}case"dims":{let s=e[n].dims.join(",");r.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},Pg=(e,t,r)=>{let n=e.name;return e.shaderCache?.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${Bg(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,n},Dg=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},O1=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=o=>t.features.has(o)&&r.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(n);let s=t,a=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new Dg(a),this.gpuDataManager=jy(this),this.programManager=new I1(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,tc(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;pn(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let i=r[n],s=i.kernelId,a=this.kernels.get(s),o=a.kernelType,l=a.kernelName,d=i.programName,f=i.inputTensorViews,p=i.outputTensorViews,g=t[n*2],b=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let y=Number(g-this.queryTimeBase),x=Number(b-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(x))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(E=>({dims:E.dims,dataType:In(E.dataType)})),outputsMetadata:p.map(E=>({dims:E.dims,dataType:In(E.dataType)})),kernelId:s,kernelType:o,kernelName:l,programName:d,startTime:y,endTime:x});else{let E="";f.forEach(($,A)=>{E+=`input[${A}]: [${$.dims}] | ${In($.dataType)}, `});let S="";p.forEach(($,A)=>{S+=`output[${A}]: [${$.dims}] | ${In($.dataType)}, `}),console.log(`[profiling] kernel "${s}|${o}|${l}|${d}" ${E}${S}start time: ${y} ns, execution time: ${x-y} ns`)}Uo("GPU",`${d}::${g}::${b}`)}e.unmap(),this.pendingQueries.delete(e)}),Kr()}run(e,t,r,n,i,s){pn(e.name);let a=[];for(let $=0;$<t.length;++$){let A=t[$].data;if(A===0)continue;let C=this.gpuDataManager.get(A);if(!C)throw new Error(`no GPU data for input: ${A}`);a.push(C)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),f=r.length===0?o.map(($,A)=>A):r;if(f.length!==o.length)throw new Error(`Output size ${f.length} must be equal to ${o.length}.`);let p=[],g=[];for(let $=0;$<o.length;++$){if(!Number.isInteger(f[$])||f[$]<-3||f[$]>=s)throw new Error(`Invalid output index: ${f[$]}`);if(f[$]===-3)continue;let A=f[$]===-1,C=f[$]===-2,O=A||C?i(o[$].dataType,o[$].dims):n(f[$],o[$].dataType,o[$].dims);if(p.push(O),O.data===0)continue;let P=this.gpuDataManager.get(O.data);if(!P)throw new Error(`no GPU data for output: ${O.data}`);if(A&&this.temporaryData.push(P),C){let N=this.kernelPersistentData.get(this.currentKernelId);N||(N=[],this.kernelPersistentData.set(this.currentKernelId,N)),N.push(P)}g.push(P)}if(a.length!==t.length||g.length!==p.length){if(g.length===0)return Kr(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let b;if(d){let $=0,A=[];d.forEach(N=>{let T=typeof N.data=="number"?[N.data]:N.data;if(T.length===0)return;let W=N.type===10?2:4,Y,de;N.type===10?(de=T.length>4?16:T.length>2?8:T.length*W,Y=T.length>4?16:W*T.length):(de=T.length<=2?T.length*W:16,Y=16),$=Math.ceil($/de)*de,A.push($);let X=N.type===10?8:4;$+=T.length>4?Math.ceil(T.length/X)*Y:T.length*W});let C=16;$=Math.ceil($/C)*C;let O=new ArrayBuffer($);d.forEach((N,T)=>{let W=A[T],Y=typeof N.data=="number"?[N.data]:N.data;if(N.type===6)new Int32Array(O,W,Y.length).set(Y);else if(N.type===12)new Uint32Array(O,W,Y.length).set(Y);else if(N.type===10)new Uint16Array(O,W,Y.length).set(Y);else if(N.type===1)new Float32Array(O,W,Y.length).set(Y);else throw new Error(`Unsupported uniform type: ${In(N.type)}`)});let P=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(P.buffer,0,O,0,$),this.gpuDataManager.release(P.id),b={offset:0,size:$,buffer:P.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),x=y[1]===1&&y[2]===1,E=Pg(e,t,x),S=this.programManager.getArtifact(E);if(S||(S=this.programManager.build(e,y),this.programManager.setArtifact(E,S),rt("info",()=>`[artifact] key: ${E}, programName: ${e.name}`)),d&&S.uniformVariablesInfo){if(d.length!==S.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${S.uniformVariablesInfo.length}, got ${d.length} in program "${S.programInfo.name}".`);for(let $=0;$<d.length;$++){let A=d[$],C=A.type,O=typeof A.data=="number"?1:A.data.length,[P,N]=S.uniformVariablesInfo[$];if(C!==P||O!==N)throw new Error(`Uniform variable ${$} mismatch: expect type ${P} with size ${N}, got type ${C} with size ${O} in program "${S.programInfo.name}".`)}}if(rt("info",()=>`[ProgramManager] run "${e.name}" (key=${E}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:S.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(S,a,g,y,b),Kr(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=E1.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,s=n.kernelName,a=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),rt("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),a=this.gpuDataManager.registerExternalBuffer(r,n,s);return i.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await gd(this,e,t);return rc(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){rt("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){rt("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){rt("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),s=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),z1={};bs(z1,{init:()=>M1});var vo,Ng,M1,Z$=pe(()=>{"use strict";Be(),Mn(),Ne(),i$(),vo=class R1{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(K.size(t)!==K.size(this.dims))throw new Error("Invalid new shape");return new R1(this.module,this.dataType,this.data,t)}},Ng=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,i=r/e.PTR_SIZE,s=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,s));let a=Number(e.getValue(n*i++,s));this.outputCount=Number(e.getValue(n*i++,s)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,s));let o=[];for(let l=0;l<a;l++){let d=Number(e.getValue(n*i++,s)),f=Number(e.getValue(n*i++,"*")),p=Number(e.getValue(n*i++,s)),g=[];for(let b=0;b<p;b++)g.push(Number(e.getValue(n*i++,s)));o.push(new vo(e,d,f,g))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(a=>typeof a=="number"?this.inputs[a]:a)??this.inputs,n=t?.outputs??[],i=(a,o,l)=>new vo(this.module,o,this.output(a,l),l),s=(a,o)=>{let l=Pi(a,o);if(!l)throw new Error(`Unsupported data type: ${a}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new vo(this.module,a,d,o)};return this.backend.run(e,r,n,i,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,i=n===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*n);this.module.setValue(s,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(s+n*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},M1=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(Y$(),pa(A1)).WebGpuBackend,a=new s;await a.initialize(r,n),i("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,l,d,f=!1)=>{if(f)rt("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),a.memcpy(Number(o),Number(l));else{rt("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(l),p)}},async(o,l,d)=>{rt("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>a.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>a.releaseKernel(o),(o,l,d,f)=>{rt("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let p=new Ng(t,a,Number(l));return a.computeKernel(Number(o),p,f)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new Fy(r);i("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,l,d,f)=>s.ensureTensor(a,o,l,d,f),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!r.trace])}}}),Ug,pc,hc,Hn,Lg,Xu,Go,mc,gc,Yu,yc,bc,vc,B1=pe(()=>{"use strict";Dr(),t$(),r$(),Be(),Hi(),Zd(),By(),Ug=(e,t)=>{$t()._OrtInit(e,t)!==0&&ct("Can't initialize onnxruntime.")},pc=async e=>{Ug(e.wasm.numThreads,jo(e.logLevel))},hc=async(e,t)=>{$t().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:i}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let n=(Z$(),pa(z1)).init;t==="webgpu"&&await n("webgpu",$t(),e,r),t==="webnn"&&await n("webnn",$t(),e)}},Hn=new Map,Lg=e=>{let t=$t(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&ct("Can't get session input/output count.");let s=n===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+n,s))]}finally{t.stackRestore(r)}},Xu=(e,t)=>{let r=$t(),n=r.stackSave(),i=0;try{let s=r.PTR_SIZE,a=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&ct("Can't get session input/output metadata.");let o=Number(r.getValue(a,"*"));i=Number(r.getValue(a+s,"*"));let l=r.HEAP32[i/4];if(l===0)return[o,0];let d=r.HEAPU32[i/4+1],f=[];for(let p=0;p<d;p++){let g=Number(r.getValue(i+8+p*s,"*"));f.push(g!==0?r.UTF8ToString(g):Number(r.getValue(i+8+(p+d)*s,"*")))}return[o,l,f]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},Go=e=>{let t=$t(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},mc=async(e,t)=>{let r,n,i=$t();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=Go(e);let s=0,a=0,o=0,l=[],d=[],f=[];try{if([a,l]=await Ry(t),t?.externalData&&i.mountExternalData){let C=[];for(let O of t.externalData){let P=typeof O=="string"?O:O.path,N=typeof O=="string"?O:O.data;C.push(ec(N).then(T=>{i.mountExternalData(P,T)}))}await Promise.all(C)}for(let C of t?.executionProviders??[])if((typeof C=="string"?C:C.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof C!="string"){let O=C,P=O?.context,N=O?.gpuDevice,T=O?.deviceType,W=O?.powerPreference;P?i.currentContext=P:N?i.currentContext=await i.webnnCreateMLContext(N):i.currentContext=await i.webnnCreateMLContext({deviceType:T,powerPreference:W})}else i.currentContext=await i.webnnCreateMLContext();break}s=await i._OrtCreateSession(r,n,a),i.webgpuOnCreateSession?.(s),s===0&&ct("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[p,g]=Lg(s),b=!!t?.enableGraphCapture,y=[],x=[],E=[],S=[],$=[];for(let C=0;C<p;C++){let[O,P,N]=Xu(s,C);O===0&&ct("Can't get an input name."),d.push(O);let T=i.UTF8ToString(O);y.push(T),E.push(P===0?{name:T,isTensor:!1}:{name:T,isTensor:!0,type:In(P),shape:N})}for(let C=0;C<g;C++){let[O,P,N]=Xu(s,C+p);O===0&&ct("Can't get an output name."),f.push(O);let T=i.UTF8ToString(O);x.push(T),S.push(P===0?{name:T,isTensor:!1}:{name:T,isTensor:!0,type:In(P),shape:N});{if(b&&t?.preferredOutputLocation===void 0){$.push("gpu-buffer");continue}let W=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[T]??"cpu",Y=i.webnnIsGraphOutput;if(W==="cpu"&&Y&&Y(s,T)){$.push("ml-tensor-cpu-output");continue}if(W!=="cpu"&&W!=="cpu-pinned"&&W!=="gpu-buffer"&&W!=="ml-tensor")throw new Error(`Not supported preferred output location: ${W}.`);if(b&&W!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${W}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);$.push(W)}}let A=null;return $.some(C=>C==="gpu-buffer"||C==="ml-tensor"||C==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(s),o===0&&ct("Can't create IO binding."),A={handle:o,outputPreferredLocations:$,outputPreferredLocationsEncoded:$.map(C=>C==="ml-tensor-cpu-output"?"ml-tensor":C).map(C=>md(C))}),Hn.set(s,[s,d,f,A,b,!1]),[s,y,x,E,S]}catch(p){throw d.forEach(g=>i._OrtFree(g)),f.forEach(g=>i._OrtFree(g)),o!==0&&i._OrtReleaseBinding(o)!==0&&ct("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&ct("Can't release session."),p}finally{i._free(r),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&ct("Can't release session options."),l.forEach(p=>i._free(p)),i.unmountExternalData?.()}},gc=e=>{let t=$t(),r=Hn.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,s,a,o]=r;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&ct("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&ct("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(l=>t._OrtFree(l)),s.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(n)!==0&&ct("Can't release session."),Hn.delete(e)},Yu=async(e,t,r,n,i,s,a=!1)=>{if(!e){t.push(0);return}let o=$t(),l=o.PTR_SIZE,d=e[0],f=e[1],p=e[3],g=p,b,y;if(d==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let S=e[2].gpuBuffer;y=Pi(Bi(d),f);{let $=o.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');b=$(n,s,S,y)}}else if(p==="ml-tensor"){let S=e[2].mlTensor;y=Pi(Bi(d),f);let $=o.webnnRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');b=$(n,S,Bi(d),f)}else{let S=e[2];if(Array.isArray(S)){y=l*S.length,b=o._malloc(y),r.push(b);for(let $=0;$<S.length;$++){if(typeof S[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);o.setValue(b+$*l,Wr(S[$],r),"*")}}else{let $=o.webnnIsGraphInput,A=o.webnnIsGraphOutput;if(d!=="string"&&$&&A){let C=o.UTF8ToString(i);if($(n,C)||A(n,C)){let O=Bi(d);y=Pi(O,f),g="ml-tensor";let P=o.webnnCreateTemporaryTensor,N=o.webnnUploadTensor;if(!P||!N)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let T=await P(n,O,f);N(T,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),b=T}else y=S.byteLength,b=o._malloc(y),r.push(b),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,y),b)}else y=S.byteLength,b=o._malloc(y),r.push(b),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,y),b)}}let x=o.stackSave(),E=o.stackAlloc(4*f.length);try{f.forEach(($,A)=>o.setValue(E+A*l,$,l===4?"i32":"i64"));let S=o._OrtCreateTensor(Bi(d),b,y,E,f.length,md(g));S===0&&ct(`Can't create tensor for input/output. session=${n}, index=${s}.`),t.push(S)}finally{o.stackRestore(x)}},yc=async(e,t,r,n,i,s)=>{let a=$t(),o=a.PTR_SIZE,l=Hn.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],f=l[1],p=l[2],g=l[3],b=l[4],y=l[5],x=t.length,E=n.length,S=0,$=[],A=[],C=[],O=[],P=[],N=a.stackSave(),T=a.stackAlloc(x*o),W=a.stackAlloc(x*o),Y=a.stackAlloc(E*o),de=a.stackAlloc(E*o);try{[S,$]=My(s),Fi("wasm prepareInputOutputTensor");for(let ee=0;ee<x;ee++)await Yu(r[ee],A,O,e,f[t[ee]],t[ee],b);for(let ee=0;ee<E;ee++)await Yu(i[ee],C,O,e,p[n[ee]],x+n[ee],b);ji("wasm prepareInputOutputTensor");for(let ee=0;ee<x;ee++)a.setValue(T+ee*o,A[ee],"*"),a.setValue(W+ee*o,f[t[ee]],"*");for(let ee=0;ee<E;ee++)a.setValue(Y+ee*o,C[ee],"*"),a.setValue(de+ee*o,p[n[ee]],"*");if(g&&!y){let{handle:ee,outputPreferredLocations:he,outputPreferredLocationsEncoded:ne}=g;if(f.length!==x)throw new Error(`input count from feeds (${x}) is expected to be always equal to model's input count (${f.length}).`);Fi("wasm bindInputsOutputs");for(let fe=0;fe<x;fe++){let oe=t[fe];await a._OrtBindInput(ee,f[oe],A[fe])!==0&&ct(`Can't bind input[${fe}] for session=${e}.`)}for(let fe=0;fe<E;fe++){let oe=n[fe];i[fe]?.[3]?(P.push(C[fe]),a._OrtBindOutput(ee,p[oe],C[fe],0)!==0&&ct(`Can't bind pre-allocated output[${fe}] for session=${e}.`)):a._OrtBindOutput(ee,p[oe],0,ne[oe])!==0&&ct(`Can't bind output[${fe}] to ${he[fe]} for session=${e}.`)}ji("wasm bindInputsOutputs"),Hn.set(e,[d,f,p,g,b,!0])}a.jsepOnRunStart?.(d),a.webnnOnRunStart?.(d);let X;g?X=await a._OrtRunWithBinding(d,g.handle,E,Y,S):X=await a._OrtRun(d,W,T,x,de,E,Y,S),X!==0&&ct("failed to call OrtRun().");let ue=[],q=[];Fi("wasm ProcessOutputTensor");for(let ee=0;ee<E;ee++){let he=Number(a.getValue(Y+ee*o,"*"));if(he===C[ee]||P.includes(C[ee])){ue.push(i[ee]),he!==C[ee]&&a._OrtReleaseTensor(he)!==0&&ct("Can't release tensor.");continue}let ne=a.stackSave(),fe=a.stackAlloc(4*o),oe=!1,Te,re=0;try{a._OrtGetTensorData(he,fe,fe+o,fe+2*o,fe+3*o)!==0&&ct(`Can't access output tensor data on index ${ee}.`);let xe=o===4?"i32":"i64",Se=Number(a.getValue(fe,xe));re=a.getValue(fe+o,"*");let be=a.getValue(fe+o*2,"*"),ht=Number(a.getValue(fe+o*3,xe)),et=[];for(let qe=0;qe<ht;qe++)et.push(Number(a.getValue(be+qe*o,xe)));a._OrtFree(be)!==0&&ct("Can't free memory for tensor dims.");let ot=et.reduce((qe,dt)=>qe*dt,1);Te=In(Se);let wt=g?.outputPreferredLocations[n[ee]];if(Te==="string"){if(wt==="gpu-buffer"||wt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let qe=[];for(let dt=0;dt<ot;dt++){let M=a.getValue(re+dt*o,"*"),F=a.getValue(re+(dt+1)*o,"*"),H=dt===ot-1?void 0:F-M;qe.push(a.UTF8ToString(M,H))}ue.push([Te,et,qe,"cpu"])}else if(wt==="gpu-buffer"&&ot>0){let qe=a.jsepGetBuffer;if(!qe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let dt=qe(re),M=Pi(Se,ot);if(M===void 0||!Qd(Te))throw new Error(`Unsupported data type: ${Te}`);oe=!0,ue.push([Te,et,{gpuBuffer:dt,download:a.jsepCreateDownloader(dt,M,Te),dispose:()=>{a._OrtReleaseTensor(he)!==0&&ct("Can't release tensor.")}},"gpu-buffer"])}else if(wt==="ml-tensor"&&ot>0){let qe=a.webnnEnsureTensor,dt=a.webnnIsGraphInputOutputTypeSupported;if(!qe||!dt)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Pi(Se,ot)===void 0||!Jd(Te))throw new Error(`Unsupported data type: ${Te}`);if(!dt(e,Te,!1))throw new Error(`preferredLocation "ml-tensor" for ${Te} output is not supported by current WebNN Context.`);let M=await qe(e,re,Se,et,!1);oe=!0,ue.push([Te,et,{mlTensor:M,download:a.webnnCreateMLTensorDownloader(re,Te),dispose:()=>{a.webnnReleaseTensorId(re),a._OrtReleaseTensor(he)}},"ml-tensor"])}else if(wt==="ml-tensor-cpu-output"&&ot>0){let qe=a.webnnCreateMLTensorDownloader(re,Te)(),dt=ue.length;oe=!0,q.push((async()=>{let M=[dt,await qe];return a.webnnReleaseTensorId(re),a._OrtReleaseTensor(he),M})()),ue.push([Te,et,[],"cpu"])}else{let qe=ll(Te),dt=new qe(ot);new Uint8Array(dt.buffer,dt.byteOffset,dt.byteLength).set(a.HEAPU8.subarray(re,re+dt.byteLength)),ue.push([Te,et,dt,"cpu"])}}finally{a.stackRestore(ne),Te==="string"&&re&&a._free(re),oe||a._OrtReleaseTensor(he)}}g&&!b&&(a._OrtClearBoundOutputs(g.handle)!==0&&ct("Can't clear bound outputs."),Hn.set(e,[d,f,p,g,b,!1]));for(let[ee,he]of await Promise.all(q))ue[ee][2]=he;return ji("wasm ProcessOutputTensor"),ue}finally{a.webnnOnRunEnd?.(d),a.stackRestore(N),A.forEach(X=>a._OrtReleaseTensor(X)),C.forEach(X=>a._OrtReleaseTensor(X)),O.forEach(X=>a._free(X)),S!==0&&a._OrtReleaseRunOptions(S),$.forEach(X=>a._free(X))}},bc=e=>{let t=$t(),r=Hn.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&ct("Can't get an profile file name."),t._OrtFree(i)},vc=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),Gn,Or,as,Fs,js,wo,Zu,_o,Ai,Oi,Fg,P1,D1,N1,U1,L1,F1,j1,V1=pe(()=>{"use strict";Dr(),B1(),Hi(),Xd(),Gn=()=>!!xt.wasm.proxy&&typeof document<"u",as=!1,Fs=!1,js=!1,_o=new Map,Ai=(e,t)=>{let r=_o.get(e);r?r.push(t):_o.set(e,[t])},Oi=()=>{if(as||!Fs||js||!Or)throw new Error("worker not ready")},Fg=e=>{switch(e.data.type){case"init-wasm":as=!1,e.data.err?(js=!0,Zu[1](e.data.err)):(Fs=!0,Zu[0]()),wo&&(URL.revokeObjectURL(wo),wo=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=_o.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},P1=async()=>{if(!Fs){if(as)throw new Error("multiple calls to 'initWasm()' detected.");if(js)throw new Error("previous call to 'initWasm()' failed.");if(as=!0,Gn())return new Promise((e,t)=>{Or?.terminate(),Oy().then(([r,n])=>{try{Or=n,Or.onerror=s=>t(s),Or.onmessage=Fg,Zu=[e,t];let i={type:"init-wasm",in:xt};!i.in.wasm.wasmPaths&&(r||hd)&&(i.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-MDYUKy93.wasm",import.meta.url).href}),Or.postMessage(i),wo=r}catch(i){t(i)}},t)});try{await Yd(xt.wasm),await pc(xt),Fs=!0}catch(e){throw js=!0,e}finally{as=!1}}},D1=async e=>{if(Gn())return Oi(),new Promise((t,r)=>{Ai("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:xt}};Or.postMessage(n)});await hc(xt,e)},N1=async e=>Gn()?(Oi(),new Promise((t,r)=>{Ai("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};Or.postMessage(n,[e.buffer])})):Go(e),U1=async(e,t)=>{if(Gn()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Oi(),new Promise((r,n)=>{Ai("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),Or.postMessage(i,s)})}else return mc(e,t)},L1=async e=>{if(Gn())return Oi(),new Promise((t,r)=>{Ai("release",[t,r]);let n={type:"release",in:e};Or.postMessage(n)});gc(e)},F1=async(e,t,r,n,i,s)=>{if(Gn()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Oi(),new Promise((a,o)=>{Ai("run",[a,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:n,options:s}};Or.postMessage(d,vc(l))})}else return yc(e,t,r,n,i,s)},j1=async e=>{if(Gn())return Oi(),new Promise((t,r)=>{Ai("end-profiling",[t,r]);let n={type:"end-profiling",in:e};Or.postMessage(n)});bc(e)}}),Qu,jg,W1,Q$=pe(()=>{"use strict";Dr(),V1(),Be(),Kd(),By(),Qu=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},jg=e=>{switch(e[3]){case"cpu":return new qr(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Qd(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return qr.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!Jd(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return qr.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},W1=class{async fetchModelAndCopyToWasmMemory(e){return N1(await ec(e))}async loadModel(e,t){pn();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await U1(r,t),Kr()}async dispose(){return L1(this.sessionId)}async run(e,t,r){pn();let n=[],i=[];Object.entries(e).forEach(p=>{let g=p[0],b=p[1],y=this.inputNames.indexOf(g);if(y===-1)throw new Error(`invalid input '${g}'`);n.push(b),i.push(y)});let s=[],a=[];Object.entries(t).forEach(p=>{let g=p[0],b=p[1],y=this.outputNames.indexOf(g);if(y===-1)throw new Error(`invalid output '${g}'`);s.push(b),a.push(y)});let o=n.map((p,g)=>Qu(p,()=>`input "${this.inputNames[i[g]]}"`)),l=s.map((p,g)=>p?Qu(p,()=>`output "${this.outputNames[a[g]]}"`):null),d=await F1(this.sessionId,i,o,a,l,r),f={};for(let p=0;p<d.length;p++)f[this.outputNames[a[p]]]=s[p]??jg(d[p]);return Kr(),f}startProfiling(){}endProfiling(){j1(this.sessionId)}}}),q1={};bs(q1,{OnnxruntimeWebAssemblyBackend:()=>Ed,initializeFlags:()=>Cd,wasmBackend:()=>H1});var Cd,Ed,H1,J$=pe(()=>{"use strict";Dr(),V1(),Q$(),Cd=()=>{(typeof xt.wasm.initTimeout!="number"||xt.wasm.initTimeout<0)&&(xt.wasm.initTimeout=0);let e=xt.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),xt.wasm.simd=!1),typeof xt.wasm.proxy!="boolean"&&(xt.wasm.proxy=!1),typeof xt.wasm.trace!="boolean"&&(xt.wasm.trace=!1),typeof xt.wasm.numThreads!="number"||!Number.isInteger(xt.wasm.numThreads)||xt.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)xt.wasm.numThreads=1;else{let t=typeof navigator>"u"?D2("node:os").cpus().length:navigator.hardwareConcurrency;xt.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ed=class{async init(e){Cd(),await P1(),await D1(e)}async createInferenceSessionHandler(e,t){let r=new W1;return await r.loadModel(e,t),r}},H1=new Ed});Dr();Dr();Dr();var e3="1.30.0";{let e=(J$(),pa(q1)).wasmBackend;ls("webgpu",e,5),ls("webnn",e,5),ls("cpu",e,10),ls("wasm",e,10)}Object.defineProperty(xt.versions,"web",{value:e3,enumerable:!0});/**
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
 */function t3(){return typeof navigator>"u"?!1:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Macintosh/.test(navigator.userAgent)}function Vg(){return typeof navigator<"u"&&"gpu"in navigator}class r3{session=null;fallbackSegmenter=null;isModelLoading=!1;modelBufferCache=null;backendUsed="wasm";constructor(){const t=typeof window<"u"&&window.crossOriginIsolated;xt.wasm.numThreads=t?Math.min(navigator.hardwareConcurrency||4,4):1,xt.wasm.simd=!0}async initOnnxModel(t){if(this.session)return!0;if(this.isModelLoading){for(;this.isModelLoading;)await new Promise(r=>setTimeout(r,100));return!!this.session}this.isModelLoading=!0;try{if(!this.modelBufferCache){console.log("[HdMattingEngine] 正在拉取离线神经网络权重...");const r=await fetch(t);if(!r.ok)throw new Error(`模型网络请求失败 (${r.status})`);this.modelBufferCache=await r.arrayBuffer()}if(Vg()&&typeof window<"u"&&window.isSecureContext)try{return console.log("[HdMattingEngine] 尝试启用 WebGPU 硬件直通加速..."),this.session=await Lo.create(this.modelBufferCache.slice(0),{executionProviders:["webgpu"],graphOptimizationLevel:"basic"}),this.backendUsed="webgpu",console.log("[HdMattingEngine] WebGPU 抠图会话创建成功"),this.isModelLoading=!1,!0}catch(r){console.warn("[HdMattingEngine] WebGPU 显卡未适配，0毫秒无缝切换至 Wasm CPU 引擎:",r)}return this.session=await Lo.create(this.modelBufferCache.slice(0),{executionProviders:["wasm"],graphOptimizationLevel:"basic"}),this.backendUsed="wasm",console.log("[HdMattingEngine] Wasm 极速抠图会话创建成功"),this.isModelLoading=!1,!0}catch(r){return this.isModelLoading=!1,console.warn("[HdMattingEngine] ONNX 模型加载失败:",r),!1}}async getFallbackSegmenter(){return this.fallbackSegmenter?this.fallbackSegmenter:new Promise((t,r)=>{const n=new oy.SelfieSegmentation({locateFile:i=>`/mediapipe/${i}`});n.setOptions({modelSelection:0,selfieMode:!1}),n.initialize().then(()=>{this.fallbackSegmenter=n,this.backendUsed="mediapipe-hd",t(n)}).catch(r)})}async segmentHighDefinition(t,r,n="auto"){r?.("准备图像数据...",10);const i=t.width,s=t.height;let a=384;if(n==="deep"?a=512:n==="fast"?a=384:a=!t3()&&Vg()?512:384,!this.session&&!this.isModelLoading&&(r?.("正在载入离线 AI 人像模型...",20),!await this.initOnnxModel("/models/modnet.onnx")))throw new Error("离线人像模型加载失败，请检查网络或刷新重试");if(this.session){r?.(a===384?"⚡ 极速神经网络推演中 (发丝精修)...":"🔬 深度发丝级神经网络高精推演中...",45);const f=await this.runOnnxMatting(t,r,a);r?.("精修发丝与边缘羽化...",80);const p=this.compositeCutout(t,f,i,s);return r?.("生成纯透明人像图层...",95),await this.canvasToBlob(p)}r?.("启动备用端侧极速引擎...",40);const o=await this.getFallbackSegmenter(),l=512;let d;if(Math.max(i,s)>l){const f=l/Math.max(i,s);d=document.createElement("canvas"),d.width=Math.round(i*f),d.height=Math.round(s*f);const p=d.getContext("2d");p&&(p.imageSmoothingEnabled=!0,p.imageSmoothingQuality="high",p.drawImage(t,0,0,d.width,d.height))}else if(t instanceof HTMLCanvasElement)d=t;else{d=document.createElement("canvas"),d.width=i,d.height=s;const f=d.getContext("2d");f&&f.drawImage(t,0,0)}return new Promise((f,p)=>{let g=!1;const b=setTimeout(()=>{g||(g=!0,p(new Error("AI 抠图超时，请检查图片或重试")))},15e3);o.onResults(y=>{if(g)return;if(!y.segmentationMask){g=!0,clearTimeout(b),p(new Error("未检测到人像"));return}r?.("精确提取人像轮廓与边缘羽化",80);const x=this.applySegmentationMask(t,y.segmentationMask,i,s);r?.("导出透明 PNG",95),this.canvasToBlob(x).then(E=>{g||(g=!0,clearTimeout(b),f(E))}).catch(E=>{g||(g=!0,clearTimeout(b),p(E))})}),o.send({image:d}).catch(y=>{g||(g=!0,clearTimeout(b),p(y))})})}async runOnnxMatting(t,r,n=384){const i=t.width,s=t.height;let a,o;i>=s?(o=Math.round(n*(s/i)),o=Math.max(32,o-o%32),a=n):(a=Math.round(n*(i/s)),a=Math.max(32,a-a%32),o=n);const l=document.createElement("canvas");l.width=a,l.height=o;const d=l.getContext("2d",{willReadFrequently:!0});if(!d)throw new Error("无法创建推理 Canvas 上下文");d.drawImage(t,0,0,a,o);const f=d.getImageData(0,0,a,o),{data:p}=f,g=new Float32Array(3*a*o),b=a*o;for(let N=0;N<b;N++){const T=p[N*4],W=p[N*4+1],Y=p[N*4+2];g[N]=T/127.5-1,g[b+N]=W/127.5-1,g[b*2+N]=Y/127.5-1}const y=new qr("float32",g,[1,3,o,a]),x=this.session.inputNames[0];r?.("发丝级 AI 神经网络推理中...",60);const E=await this.session.run({[x]:y}),S=this.session.outputNames[0],A=E[S].data,C=document.createElement("canvas");C.width=a,C.height=o;const O=C.getContext("2d");if(!O)throw new Error("无法创建 Mask Canvas");const P=O.createImageData(a,o);for(let N=0;N<b;N++){let T=A[N];T<0&&(T=0),T>1&&(T=1);const W=Math.round(T*255);P.data[N*4]=255,P.data[N*4+1]=255,P.data[N*4+2]=255,P.data[N*4+3]=W}return O.putImageData(P,0,0),C}compositeCutout(t,r,n,i){const s=document.createElement("canvas");s.width=n,s.height=i;const a=s.getContext("2d");if(!a)throw new Error("无法创建复合图层");return a.drawImage(t,0,0,n,i),a.globalCompositeOperation="destination-in",a.drawImage(r,0,0,n,i),s}applySegmentationMask(t,r,n,i){const s=document.createElement("canvas");s.width=n,s.height=i;const a=s.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("无法创建源图 Canvas 上下文");a.drawImage(t,0,0,n,i);const o=document.createElement("canvas");o.width=n,o.height=i;const l=o.getContext("2d",{willReadFrequently:!0});if(!l)throw new Error("无法创建蒙版 Canvas 上下文");l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(r,0,0,n,i);const d=a.getImageData(0,0,n,i),f=l.getImageData(0,0,n,i),p=d.data,g=f.data,b=n*i;for(let y=0;y<b;y++){const x=y*4,E=Math.max(g[x],g[x+1],g[x+2],g[x+3]);let S=0;if(E<=60)S=0;else if(E>=190)S=1;else{const $=(E-60)/130;S=$*$*(3-2*$)}p[x+3]=Math.round(p[x+3]*S)}return a.putImageData(d,0,0),s}canvasToBlob(t){return new Promise((r,n)=>{t.toBlob(i=>{i?r(i):n(new Error("导出透明 Blob 失败"))},"image/png")})}getBackend(){return this.backendUsed}}const Wg=new r3;function n3(e,t,r){return new Promise(n=>{const i=e.naturalWidth||e.width,s=e.naturalHeight||e.height,a=Math.max(r.widthPx/i,r.heightPx/s)*1.05,o={scale:a,x:(r.widthPx-i*a)/2,y:(r.heightPx-s*a)*.42,headTopY:0,chinY:s*.6,headCenterX:i/2,headHeight:s*.6,success:!1};try{let l;if(t instanceof HTMLCanvasElement)l=t;else if(l=document.createElement("canvas"),l.width=i,l.height=s,!l.getContext("2d")){n(o);return}const d=200,f=Math.round(s/i*d),p=document.createElement("canvas");p.width=d,p.height=f;const g=p.getContext("2d",{willReadFrequently:!0});if(!g){n(o);return}g.drawImage(e,0,0,d,f);const y=g.getImageData(0,0,d,f).data;let x=-1,E=d/2;for(let ne=0;ne<f;ne++){let fe=0,oe=0;for(let Te=0;Te<d;Te++)y[(ne*d+Te)*4+3]>60&&(fe++,oe+=Te);if(fe>8){x=ne,E=oe/fe;break}}if(x===-1||x>=f*.8){n(o);return}const S=[];for(let ne=x;ne<f;ne++){let fe=d,oe=-1;for(let Te=0;Te<d;Te++)y[(ne*d+Te)*4+3]>60&&(Te<fe&&(fe=Te),Te>oe&&(oe=Te));oe>=fe&&S.push({y:ne,width:oe-fe,centerX:(fe+oe)/2})}if(S.length<20){n(o);return}let $=0;for(let ne=0;ne<Math.min(S.length,Math.round(f*.4));ne++)S[ne].width>$&&($=S[ne].width);let A=Math.round(S.length*.45);for(let ne=10;ne<S.length;ne++)if(S[ne].width>$*1.35){A=Math.max(ne-4,10);break}const C=S[A]?.y||x+(f-x)*.4,O=S[Math.round(A/2)]?.centerX||E,P=i/d,N=x*P,T=C*P,W=O*P,Y=Math.max(T-N,s*.25),de=r.heightPx*.085,X=r.heightPx*.58,ue=r.widthPx*.5,q=X/Y,ee=ue-W*q,he=de-N*q;n({scale:Math.round(q*1e3)/1e3,x:Math.round(ee),y:Math.round(he),headTopY:N,chinY:T,headCenterX:W,headHeight:Y,success:!0})}catch(l){console.warn("[FaceAlignment] 自动对齐异常，采用默认对齐:",l),n(o)}})}const i3={class:"relative w-full h-full flex flex-col bg-slate-950 text-slate-100 overflow-hidden select-none"},s3={class:"w-full z-20 flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md gap-2"},a3={class:"flex items-center space-x-2"},o3={class:"bg-slate-800 p-1 rounded-xl flex items-center border border-slate-700/80"},l3={class:"flex items-center space-x-2"},u3={class:"flex items-center space-x-1.5 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1"},d3=["value"],c3={key:0,class:"ml-1 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full"},f3=["disabled"],p3={class:"flex-1 w-full flex flex-col md:flex-row items-center justify-between overflow-hidden p-2 sm:p-4 gap-4"},h3={class:"relative flex-1 w-full h-full min-h-[360px] flex items-center justify-center bg-slate-900/60 rounded-2xl border border-slate-800/80 overflow-hidden shadow-inner"},m3={class:"w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400"},g3={key:1,class:"relative flex flex-col items-center justify-center w-full h-full"},y3={key:0,class:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 140",preserveAspectRatio:"none"},b3={class:"flex items-center space-x-4 mt-4"},v3=["disabled"],w3={key:0,class:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 140",preserveAspectRatio:"none"},_3={class:"flex items-center space-x-3 mt-3 text-xs text-slate-400"},x3={key:3,class:"absolute inset-0 z-40 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"},$3={class:"text-sm font-semibold text-slate-100"},S3={class:"w-48 bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden"},k3={class:"w-full md:w-80 lg:w-96 flex flex-col justify-between bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 overflow-y-auto max-h-[85vh]"},T3={class:"bg-slate-800/70 border border-slate-700/70 rounded-xl p-3 space-y-1"},C3={class:"flex items-center justify-between"},E3={class:"text-xs font-bold text-slate-200"},I3={class:"flex items-center justify-between text-xs text-slate-400"},A3={class:"text-[11px] text-slate-500"},O3={class:"space-y-2 bg-slate-800/60 border border-slate-700/80 rounded-xl p-3 shadow-md"},z3={class:"flex items-center justify-between"},M3={key:0,class:"text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-full flex items-center space-x-1 font-medium"},R3={class:"grid grid-cols-2 gap-1.5 p-1 bg-slate-900/80 border border-slate-700/60 rounded-xl text-[11px]"},B3=["disabled"],P3={class:"text-[11px] text-slate-400 leading-snug"},D3={class:"space-y-2.5 bg-slate-800/40 border border-slate-800 rounded-xl p-3"},N3={class:"flex items-center justify-between"},U3={class:"text-[10px] text-blue-400 font-medium"},L3={class:"grid grid-cols-3 sm:grid-cols-4 gap-1.5"},F3=["onClick"],j3={class:"truncate w-full text-center text-[10px]"},V3={class:"pt-2 border-t border-slate-700/60 space-y-1.5"},W3={class:"flex items-center justify-between text-xs"},q3={class:"flex items-center space-x-1.5 text-slate-300"},H3={class:"text-[10px] text-slate-400 font-mono"},G3={class:"flex items-center space-x-2"},K3={class:"relative flex items-center justify-center cursor-pointer group",title:"点击调出系统调色盘/吸管"},X3={class:"flex items-center space-x-2 text-left"},Y3={key:1,class:"space-y-3 bg-slate-800/40 border border-slate-800 rounded-xl p-3"},Z3={class:"flex items-center space-x-2"},Q3={class:"w-10 text-right text-xs text-slate-300 font-mono"},J3={class:"flex items-center justify-between pt-1"},eS={class:"flex items-center space-x-1 text-xs text-slate-400 cursor-pointer"},tS={class:"space-y-2 pt-2 border-t border-slate-800"},rS={class:"grid grid-cols-2 gap-2"},nS=["disabled"],iS=["disabled"],sS={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"},aS={class:"bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm p-5 space-y-4"},oS={class:"space-y-3 text-xs"},lS={class:"grid grid-cols-2 gap-3"},uS={class:"text-[11px] text-slate-400"},dS={class:"flex justify-end space-x-2 pt-2"},cS=ya({__name:"PhotoStudio",props:{trayCount:{}},emits:["photo-added-to-tray","open-single-export","open-tray","open-packing","show-toast"],setup(e,{emit:t}){const r=e,n=t,i=We("upload"),s=We(Yl),a=We(Yl[0].id),o=We(Yl[0]),l=We($n),d=We($n[1]),f=We("#D9001B"),p=We("#D9001B"),g=We(!0),b=We(!1),y=We(!1),x=We("fast"),E=We(0),S=We(""),$=We(null),A=We(null),C=We(null),O=We(null),P=ta(()=>!!A.value),N=We(null),T=We(null),W=We(null),Y=We(null),de=We(!1),X=We("user");let ue=null,q=null;const ee=new M2;let he=null;const ne=We(100),fe=We(1),oe=cs({scale:1,x:0,y:0,rotation:0});let Te=!1,re=0,xe=0,Se=0,be=0;const ht=We(!1),et=cs({name:"自定义规格",widthMm:35,heightMm:45}),ot=ta(()=>{const te=ms(et.widthMm),L=ms(et.heightMm);return`${te} × ${L} px`}),wt=ta(()=>{const te=o.value,L=te.widthPx/te.heightPx;return{width:L<1?`calc(58vh * ${L})`:"78vw",height:L<1?"58vh":`calc(78vw / ${L})`}});ba(()=>{window.addEventListener("paste",ie),window.addEventListener("mousemove",ur),window.addEventListener("mouseup",mr),window.addEventListener("touchmove",Nt),window.addEventListener("touchend",mr),setTimeout(()=>{Wg.initOnnxModel("/models/modnet.onnx").catch(()=>{})},300)}),Fd(()=>{window.removeEventListener("paste",ie),window.removeEventListener("mousemove",ur),window.removeEventListener("mouseup",mr),window.removeEventListener("touchmove",Nt),window.removeEventListener("touchend",mr),hn()});async function qe(te){i.value=te,te==="camera"?await Xr():(hn(),await Zn(),Ht())}function dt(){if(a.value==="custom"){ht.value=!0;return}const te=s.value.find(L=>L.id===a.value);te&&(o.value=te,ze())}function M(){const te=O2(et.name,et.widthMm,et.heightMm);s.value.push(te),a.value=te.id,o.value=te,ht.value=!1,je()}function F(){$.value?.click()}function H(te){const L=te.target;L.files&&L.files[0]&&ae(L.files[0]),L.value=""}function Z(te){b.value=!1,te.dataTransfer?.files&&te.dataTransfer.files[0]&&ae(te.dataTransfer.files[0])}function ie(te){if(!te.clipboardData)return;const L=te.clipboardData.items;for(let le=0;le<L.length;le++)if(L[le].type.startsWith("image/")){const Qe=L[le].getAsFile();if(Qe){ae(Qe);break}}}async function ae(te){C.value=te,O.value=null,dr=null;const L=URL.createObjectURL(te),le=new Image;le.onload=async()=>{A.value=le,i.value="upload";const Qe=$n.find(Ut=>Ut.id==="bg_original")||$n[$n.length-1];d.value=Qe,je(),await Zn(),Ht()},le.src=L}function ye(te){x.value!==te&&(x.value=te,O.value=null,dr=null,n("show-toast",te==="fast"?"已切换至 ⚡ 极速轻量引擎 (手机推荐·秒级出图)":"已切换至 🔬 深度发丝级引擎 (电脑高精)"))}async function me(te=!1,L=!0){if(!(!A.value||y.value)){if(!te&&O.value){if(L){const le=$n.find(Qe=>Qe.id==="bg_transparent")||$n[0];d.value=le,Ht()}return}y.value=!0,E.value=15,S.value=x.value==="fast"?"⚡ 正在准备极速人像引擎...":"🔬 正在准备深度发丝级模型...",await Zn(),await new Promise(le=>setTimeout(le,80));try{const le=document.createElement("canvas");le.width=A.value.naturalWidth,le.height=A.value.naturalHeight;const Qe=le.getContext("2d");if(!Qe)throw new Error("无法创建离屏图层");Qe.drawImage(A.value,0,0);const Ut=await Wg.segmentHighDefinition(le,(Tr,mt)=>{S.value=Tr,E.value=mt},x.value),Rt=URL.createObjectURL(Ut),Bt=new Image;if(await new Promise((Tr,mt)=>{Bt.onload=Tr,Bt.onerror=mt,Bt.src=Rt}),dr=Bt,O.value=Ut,L){const Tr=$n.find(mt=>mt.id==="bg_transparent");Tr&&(d.value=Tr)}n("show-toast","✅ 已成功提取人物与发丝！原背景已彻底消除，请在下方选择所需底色")}catch(le){console.error("抠图失败:",le),n("show-toast",`抠图提示: ${le?.message||"未能成功提取，请检查图片"}`)}finally{y.value=!1,await ze(),await Zn(),Ht()}}}async function ge(te){d.value=te,te.value!=="original"&&!O.value&&A.value?await me(!1,!1):Ht()}function se(){p.value=f.value.toUpperCase(),Oe(f.value)}function Ee(){let te=p.value.trim();te.startsWith("#")||(te="#"+te),/^#[0-9A-Fa-f]{6}$/.test(te)?(f.value=te,Oe(te)):n("show-toast","请输入有效的十六进制颜色码，如 #D9001B")}function we(){Ee()}async function Oe(te){const L=z2(te);await ge(L)}async function ze(){if(!A.value)return;const te=O.value||C.value;if(te)try{const L=await n3(A.value,te,o.value);oe.scale=L.scale,oe.x=L.x,oe.y=L.y,oe.rotation=0,fe.value>0&&(ne.value=Math.round(L.scale/fe.value*100)),await Zn(),Ht(),L.success&&n("show-toast","已按国家证件照标准自动对齐（头顶留白约8.5%，人脸垂直居中）")}catch(L){console.warn("自动对齐计算失败，恢复默认居中:",L),je()}}function je(){if(!A.value)return;const te=o.value,L=A.value.naturalWidth,le=A.value.naturalHeight,Qe=te.widthPx/L,Ut=te.heightPx/le;fe.value=Math.max(Qe,Ut),ne.value=100,oe.scale=fe.value*1.05,oe.rotation=0,oe.x=(te.widthPx-L*oe.scale)/2,oe.y=(te.heightPx-le*oe.scale)*.45,Ht()}function Le(te){if(!A.value)return;o.value;const L=A.value.naturalWidth,le=A.value.naturalHeight,Qe=oe.scale,Ut=fe.value*(te/100);if(Ut<=0)return;const Rt=oe.x+L*Qe/2,Bt=oe.y+le*Qe/2;oe.scale=Ut,oe.x=Rt-L*Ut/2,oe.y=Bt-le*Ut/2,Ht()}function tt(){Le(ne.value)}function yt(){const te=Math.min(300,ne.value+5);ne.value=te,Le(te)}function St(){const te=Math.max(15,ne.value-5);ne.value=te,Le(te)}function Qt(te){const L=te.deltaY<0?5:-5,le=Math.min(300,Math.max(15,ne.value+L));ne.value=le,Le(le)}function At(te){oe.rotation=(oe.rotation+te)%360,Ht()}function Sr(te){Te=!0,re=te.clientX,xe=te.clientY,Se=oe.x,be=oe.y}function ur(te){if(!Te)return;const L=te.clientX-re,le=te.clientY-xe;oe.x=Se+L,oe.y=be+le,Ht()}function Mt(te){te.touches.length===1&&(Te=!0,re=te.touches[0].clientX,xe=te.touches[0].clientY,Se=oe.x,be=oe.y)}function Nt(te){if(!Te||te.touches.length!==1)return;const L=te.touches[0].clientX-re,le=te.touches[0].clientY-xe;oe.x=Se+L,oe.y=be+le,Ht()}function mr(){Te=!1}let dr=null;async function Ht(){if(!N.value||!A.value)return;const te=N.value,L=o.value;te.width=L.widthPx,te.height=L.heightPx;const le=te.getContext("2d");if(!le)return;const Qe=te.width,Ut=te.height;if(le.clearRect(0,0,Qe,Ut),d.value.value==="original"){cr(le,A.value);return}if(d.value.value!=="transparent"){if(d.value.isGradient&&d.value.gradientStops){const Rt=le.createLinearGradient(0,0,0,Ut);Rt.addColorStop(0,d.value.gradientStops[0]),Rt.addColorStop(1,d.value.gradientStops[1]),le.fillStyle=Rt}else le.fillStyle=d.value.value;le.fillRect(0,0,Qe,Ut)}if(dr)cr(le,dr);else if(O.value){const Rt=URL.createObjectURL(O.value),Bt=new Image;Bt.onload=()=>{dr=Bt,cr(le,Bt)},Bt.src=Rt}else cr(le,A.value)}function cr(te,L){te.save();const le=oe.x+L.naturalWidth*oe.scale/2,Qe=oe.y+L.naturalHeight*oe.scale/2;te.translate(le,Qe),te.rotate(oe.rotation*Math.PI/180),te.drawImage(L,-(L.naturalWidth*oe.scale)/2,-(L.naturalHeight*oe.scale)/2,L.naturalWidth*oe.scale,L.naturalHeight*oe.scale),te.restore()}async function Xr(){hn();try{const te=await navigator.mediaDevices.getUserMedia({video:{facingMode:X.value,width:{ideal:1920},height:{ideal:1080}},audio:!1});ue=te,W.value&&(W.value.srcObject=te,await W.value.play(),de.value=!0,await ee.init(),ee.setOnResult(L=>{he=L}),Rn())}catch(te){console.warn("相机权限获取失败:",te),de.value=!1}}function hn(){ue&&(ue.getTracks().forEach(te=>te.stop()),ue=null),q&&cancelAnimationFrame(q),de.value=!1}async function Ki(){X.value=X.value==="user"?"environment":"user",await Xr()}function Rn(){const te=()=>{if(W.value&&Y.value&&W.value.readyState>=2){const L=Y.value,le=W.value;if((L.width!==o.value.widthPx||L.height!==o.value.heightPx)&&(L.width=o.value.widthPx,L.height=o.value.heightPx),ee.sendFrame(le),he&&d.value.value!=="original")ee.renderComposite(L,le,he,d.value,X.value==="user");else{const Qe=L.getContext("2d");Qe&&(Qe.save(),X.value==="user"&&(Qe.translate(L.width,0),Qe.scale(-1,1)),Qe.drawImage(le,0,0,L.width,L.height),Qe.restore())}}q=requestAnimationFrame(te)};q=requestAnimationFrame(te)}async function ai(){if(!W.value||y.value)return;const te=W.value,L=document.createElement("canvas");L.width=te.videoWidth||o.value.widthPx,L.height=te.videoHeight||o.value.heightPx;const le=L.getContext("2d");le&&(X.value==="user"&&(le.translate(L.width,0),le.scale(-1,1)),le.drawImage(te,0,0,L.width,L.height),L.toBlob(async Qe=>{Qe&&(hn(),await ae(Qe))},"image/jpeg",.98))}async function kr(){if(!N.value)throw new Error("画布未就绪");return new Promise((te,L)=>{N.value.toBlob(le=>{le?te({composedBlob:le,previewUrl:N.value.toDataURL("image/jpeg",.9)}):L(new Error("导出失败"))},"image/jpeg",.98)})}async function Bn(){if(!(!C.value||!A.value))try{const{composedBlob:te,previewUrl:L}=await kr(),le={id:`tray_${Date.now()}_${Math.random().toString(36).substring(2,6)}`,memberName:`成员 ${r.trayCount+1}`,originalBlob:C.value,cutoutBlob:O.value||C.value,previewUrl:L,spec:{...o.value},printCount:4,selectedBg:{...d.value},createdAt:Date.now()};n("photo-added-to-tray",le),n("show-toast",`已将 ${o.value.name} 证件照加入待印托盘`)}catch(te){console.error("加入托盘失败:",te)}}async function oi(){if(!(!C.value||!A.value))try{const{composedBlob:te,previewUrl:L}=await kr(),le={id:`export_${Date.now()}`,memberName:"证件照",originalBlob:C.value,cutoutBlob:O.value||C.value,previewUrl:L,spec:{...o.value},printCount:1,selectedBg:{...d.value},createdAt:Date.now()};n("open-single-export",le)}catch(te){console.error("打开单张导出失败:",te)}}return(te,L)=>(Xe(),at("div",i3,[U("header",s3,[U("div",a3,[U("div",o3,[U("button",{onClick:L[0]||(L[0]=le=>qe("upload")),class:wr(["flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition",i.value==="upload"?"bg-blue-600 text-white shadow":"text-slate-400 hover:text-slate-200"])},[Fe(st(k2),{class:"w-3.5 h-3.5"}),L[20]||(L[20]=U("span",null,"上传/拖入照片",-1))],2),U("button",{onClick:L[1]||(L[1]=le=>qe("camera")),class:wr(["flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition",i.value==="camera"?"bg-blue-600 text-white shadow":"text-slate-400 hover:text-slate-200"])},[Fe(st(m2),{class:"w-3.5 h-3.5"}),L[21]||(L[21]=U("span",null,"自拍拍摄",-1))],2)]),L[22]||(L[22]=U("div",{class:"hidden sm:flex items-center space-x-1 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2.5 py-1 rounded-full"},[U("span",{class:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),U("span",null,"100% 离线端侧处理 · 绝不上传服务器")],-1))]),U("div",l3,[U("div",u3,[L[24]||(L[24]=U("span",{class:"text-xs text-slate-400"},"规格:",-1)),hr(U("select",{"onUpdate:modelValue":L[2]||(L[2]=le=>a.value=le),onChange:dt,class:"bg-transparent text-xs font-medium text-slate-100 focus:outline-none cursor-pointer"},[(Xe(!0),at(Xt,null,ps(s.value,le=>(Xe(),at("option",{key:le.id,value:le.id,class:"bg-slate-800 text-slate-100"},Ye(le.name)+" ("+Ye(le.widthMm)+"×"+Ye(le.heightMm)+"mm) ",9,d3))),128)),L[23]||(L[23]=U("option",{value:"custom",class:"bg-slate-800 text-slate-100"},"⚙️ 自定义尺寸...",-1))],544),[[iy,a.value]])]),U("button",{onClick:L[3]||(L[3]=le=>te.$emit("open-tray")),class:"relative flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"},[Fe(st(ay),{class:"w-4 h-4 text-blue-400"}),L[25]||(L[25]=U("span",{class:"text-xs font-medium"},"托盘",-1)),e.trayCount>0?(Xe(),at("span",c3,Ye(e.trayCount),1)):jt("",!0)]),U("button",{onClick:L[4]||(L[4]=le=>te.$emit("open-packing")),disabled:e.trayCount===0,class:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-semibold shadow transition"},[Fe(st(No),{class:"w-3.5 h-3.5"}),L[26]||(L[26]=U("span",{class:"hidden sm:inline"},"混排拼版",-1))],8,f3)])]),U("main",p3,[U("section",h3,[i.value==="upload"&&!P.value?(Xe(),at("div",{key:0,class:"w-full max-w-md p-6 flex flex-col items-center justify-center text-center space-y-4 border-2 border-dashed border-slate-700 hover:border-blue-500 rounded-3xl bg-slate-900/40 transition cursor-pointer",onDragover:L[5]||(L[5]=io(le=>b.value=!0,["prevent"])),onDragleave:L[6]||(L[6]=io(le=>b.value=!1,["prevent"])),onDrop:io(Z,["prevent"]),onClick:F},[U("input",{ref_key:"fileInputRef",ref:$,type:"file",accept:"image/*",class:"hidden",onChange:H},null,544),U("div",m3,[Fe(st(S2),{class:"w-8 h-8"})]),L[27]||(L[27]=ql('<div data-v-97fd0a5f><h3 class="text-base font-semibold text-slate-200" data-v-97fd0a5f>点击或将照片拖拽至此处</h3><p class="text-xs text-slate-400 mt-1" data-v-97fd0a5f>支持 JPG / PNG / WebP 格式，也可直接使用 <kbd class="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300" data-v-97fd0a5f>Ctrl + V</kbd> 粘贴</p></div><div class="text-[11px] text-slate-500 bg-slate-800/60 px-4 py-2 rounded-xl border border-slate-700/60 space-y-0.5 text-left w-full" data-v-97fd0a5f><p class="font-medium text-slate-400" data-v-97fd0a5f>💡 拍摄或选图建议：</p><p data-v-97fd0a5f>1. 建议正面免冠，双肩自然平齐</p><p data-v-97fd0a5f>2. 光线明亮均匀，头发不遮挡眉毛与双耳</p><p data-v-97fd0a5f>3. 任何背景均可，系统会自动进行发丝级抠图换底</p></div>',2))],32)):i.value==="camera"?(Xe(),at("div",g3,[U("video",{ref_key:"cameraVideoRef",ref:W,playsinline:"",autoplay:"",muted:"",class:"hidden"},null,512),U("div",{class:"relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/80 transition-all duration-300",style:Yn({width:wt.value.width,height:wt.value.height,aspectRatio:`${o.value.widthPx} / ${o.value.heightPx}`})},[U("canvas",{ref_key:"cameraCanvasRef",ref:Y,class:"w-full h-full object-cover"},null,512),g.value?(Xe(),at("svg",y3,[...L[28]||(L[28]=[ql('<line x1="15" y1="12" x2="85" y2="12" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8" data-v-97fd0a5f></line><text x="50" y="9" font-size="3.5" fill="#93c5fd" text-anchor="middle" data-v-97fd0a5f>头顶留白区</text><ellipse cx="50" cy="46" rx="24" ry="30" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.85" data-v-97fd0a5f></ellipse><line x1="30" y1="44" x2="70" y2="44" stroke="#38bdf8" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.6" data-v-97fd0a5f></line><path d="M 12 128 Q 30 92, 50 94 Q 70 92, 88 128" fill="none" stroke="#60a5fa" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8" data-v-97fd0a5f></path><text x="50" y="100" font-size="3.5" fill="#93c5fd" text-anchor="middle" data-v-97fd0a5f>双肩对齐基准</text>',6)])])):jt("",!0)],4),U("div",b3,[U("button",{onClick:Ki,class:"p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition",title:"翻转镜头"},[Fe(st(v2),{class:"w-5 h-5"})]),U("button",{onClick:ai,disabled:y.value,class:"p-2 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/30 active:scale-90 transition disabled:opacity-50"},[...L[29]||(L[29]=[U("div",{class:"w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-transparent"},[U("div",{class:"w-10 h-10 rounded-full bg-white"})],-1)])],8,v3)])])):(Xe(),at("div",{key:2,class:"relative flex flex-col items-center justify-center w-full h-full p-2",onWheel:io(Qt,["prevent"])},[U("div",{ref_key:"viewportContainerRef",ref:T,class:"relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/80 cursor-grab active:cursor-grabbing transition-all duration-200 canvas-checkerboard",style:Yn({width:wt.value.width,height:wt.value.height,aspectRatio:`${o.value.widthPx} / ${o.value.heightPx}`}),onMousedown:Sr,onTouchstart:Mt},[U("canvas",{ref_key:"editorCanvasRef",ref:N,class:"w-full h-full block"},null,512),g.value?(Xe(),at("svg",w3,[...L[30]||(L[30]=[ql('<line x1="15" y1="12" x2="85" y2="12" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8" data-v-97fd0a5f></line><text x="50" y="9" font-size="3.5" fill="#93c5fd" text-anchor="middle" data-v-97fd0a5f>头顶留白线</text><ellipse cx="50" cy="46" rx="24" ry="30" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.85" data-v-97fd0a5f></ellipse><line x1="30" y1="44" x2="70" y2="44" stroke="#38bdf8" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.6" data-v-97fd0a5f></line><path d="M 12 128 Q 30 92, 50 94 Q 70 92, 88 128" fill="none" stroke="#60a5fa" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8" data-v-97fd0a5f></path><text x="50" y="100" font-size="3.5" fill="#93c5fd" text-anchor="middle" data-v-97fd0a5f>双肩对准线</text><line x1="50" y1="5" x2="50" y2="135" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="2,4" opacity="0.4" data-v-97fd0a5f></line>',7)])])):jt("",!0)],36),U("div",_3,[L[31]||(L[31]=U("span",null,"🖱️ 拖拽平移画面",-1)),L[32]||(L[32]=U("span",null,"·",-1)),U("span",null,"🔍 缩放大小: "+Ye(ne.value)+"%",1),U("button",{onClick:je,class:"text-blue-400 hover:text-blue-300 underline text-[11px] ml-1"}," 居中复位 ")])],32)),y.value?(Xe(),at("div",x3,[Fe(st(pd),{class:"w-10 h-10 text-blue-500 animate-spin mb-3"}),U("h4",$3,Ye(S.value||"AI 正在进行发丝级抠图..."),1),L[33]||(L[33]=U("p",{class:"text-xs text-slate-400 mt-1"},"本地端侧加速中，完全无需联网",-1)),U("div",S3,[U("div",{class:"bg-blue-500 h-full transition-all duration-200",style:Yn({width:`${E.value}%`})},null,4)])])):jt("",!0)]),U("aside",k3,[U("div",T3,[U("div",C3,[U("span",E3,Ye(o.value.name),1),L[34]||(L[34]=U("span",{class:"text-[11px] text-blue-400 font-mono"},"300 DPI",-1))]),U("div",I3,[U("span",null,"物理尺寸: "+Ye(o.value.widthMm)+" × "+Ye(o.value.heightMm)+" mm",1),U("span",null,"分辨率: "+Ye(o.value.widthPx)+" × "+Ye(o.value.heightPx)+" px",1)]),U("p",A3,Ye(o.value.description),1)]),U("div",O3,[U("div",z3,[L[36]||(L[36]=U("span",{class:"text-xs font-bold text-slate-100 flex items-center space-x-1.5"},[U("span",{class:"w-4 h-4 rounded-full bg-blue-600 text-[10px] text-white flex items-center justify-center font-bold"},"1"),U("span",null,"第一步：一键提取人物 (消除背景)")],-1)),O.value?(Xe(),at("span",M3,[Fe(st(tp),{class:"w-3 h-3"}),L[35]||(L[35]=U("span",null,"人物已单独抠出",-1))])):jt("",!0)]),U("div",R3,[U("button",{type:"button",onClick:L[7]||(L[7]=le=>ye("fast")),class:wr(["py-1.5 px-2 rounded-lg font-medium transition flex items-center justify-center space-x-1",x.value==="fast"?"bg-blue-600 text-white shadow-sm":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"])},[...L[37]||(L[37]=[U("span",null,"⚡ 极速引擎 (手机推荐·秒出)",-1)])],2),U("button",{type:"button",onClick:L[8]||(L[8]=le=>ye("deep")),class:wr(["py-1.5 px-2 rounded-lg font-medium transition flex items-center justify-center space-x-1",x.value==="deep"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"])},[...L[38]||(L[38]=[U("span",null,"🔬 深度发丝 (电脑高精)",-1)])],2)]),U("button",{onClick:L[9]||(L[9]=le=>me(!0,!0)),disabled:!P.value||y.value,class:wr(["w-full py-2.5 px-3 rounded-xl flex items-center justify-center space-x-2 text-xs font-bold transition shadow-lg",O.value?"bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600":"bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-400 text-white shadow-blue-500/25 active:scale-98"])},[y.value?(Xe(),Li(st(pd),{key:0,class:"w-4 h-4 animate-spin text-white"})):(Xe(),Li(st(x2),{key:1,class:"w-4 h-4 text-amber-300"})),U("span",null,Ye(y.value?x.value==="fast"?"⚡ 正在极速抠图出人像...":"🔬 深度模型正在精细推演中...":O.value?"重新一键抠图 (消除背景)":"🪄 一键智能抠图 (只提取人物·消除背景)"),1)],10,B3),U("p",P3,Ye(O.value?"✅ 原图背景已彻底消除！请在下方【第二步】为您抠出的人物随意换上所需的底色：":"点击后将智能识别人物轮廓与发丝，直接把原图杂乱背景消除为纯透明底。"),1)]),U("div",D3,[U("div",N3,[L[39]||(L[39]=U("span",{class:"text-xs font-bold text-slate-100 flex items-center space-x-1.5"},[U("span",{class:"w-4 h-4 rounded-full bg-indigo-600 text-[10px] text-white flex items-center justify-center font-bold"},"2"),U("span",null,"第二步：按需选择背景颜色")],-1)),U("span",U3," 当前: "+Ye(d.value.name),1)]),U("div",L3,[(Xe(!0),at(Xt,null,ps(l.value,le=>(Xe(),at("button",{key:le.id,onClick:Qe=>ge(le),class:wr(["flex flex-col items-center justify-center p-1.5 rounded-xl border transition-all text-[11px]",d.value.id===le.id?"border-blue-500 bg-blue-950/50 text-blue-300 font-semibold shadow":"border-slate-800 hover:border-slate-700 bg-slate-800/60 text-slate-400"])},[U("span",{class:wr(["w-6 h-6 rounded-full mb-1 flex items-center justify-center shadow-sm",le.previewClass]),style:Yn(le.previewClass?{}:{backgroundColor:le.value})},[d.value.id===le.id?(Xe(),Li(st(tp),{key:0,class:wr(["w-3.5 h-3.5",le.id==="bg_white"?"text-slate-900":"text-white"])},null,8,["class"])):jt("",!0)],6),U("span",j3,Ye(le.name),1)],10,F3))),128))]),U("div",V3,[U("div",W3,[U("div",q3,[Fe(st(rp),{class:"w-3.5 h-3.5 text-amber-400"}),L[40]||(L[40]=U("span",{class:"font-medium"},"任意自定义背景色:",-1))]),U("span",H3,Ye(f.value.toUpperCase()),1)]),U("div",G3,[U("label",K3,[hr(U("input",{type:"color","onUpdate:modelValue":L[10]||(L[10]=le=>f.value=le),onInput:se,class:"sr-only"},null,544),[[Tn,f.value]]),U("span",{class:"w-8 h-8 rounded-lg shadow-inner border-2 border-slate-600 group-hover:border-blue-400 transition flex items-center justify-center text-xs",style:Yn({backgroundColor:f.value})},[Fe(st(rp),{class:"w-4 h-4 text-white drop-shadow opacity-80"})],4)]),hr(U("input",{"onUpdate:modelValue":L[11]||(L[11]=le=>p.value=le),onKeyup:l2(Ee,["enter"]),placeholder:"#D9001B",class:"flex-1 px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-100 uppercase focus:outline-none focus:border-blue-500"},null,544),[[Tn,p.value]]),U("button",{onClick:we,class:"px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium shadow transition"}," 应用底色 ")])])]),P.value?(Xe(),at("button",{key:0,onClick:ze,class:"w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20 transition active:scale-95 group border border-blue-400/30"},[U("div",X3,[Fe(st($2),{class:"w-4 h-4 text-amber-300 animate-pulse"}),L[41]||(L[41]=U("div",null,[U("div",{class:"text-xs font-bold leading-tight flex items-center space-x-1"},[U("span",null,"AI 智能人脸国标对齐")]),U("div",{class:"text-[10px] text-blue-100 opacity-90"},"头顶留白约8.5%，居中黄金比例")],-1))]),L[42]||(L[42]=U("span",{class:"text-[11px] bg-white/20 group-hover:bg-white/30 px-2 py-0.5 rounded-full font-medium transition"},"一键对齐",-1))])):jt("",!0),P.value?(Xe(),at("div",Y3,[U("div",{class:"flex items-center justify-between text-xs"},[L[43]||(L[43]=U("span",{class:"font-medium text-slate-300"},"缩放大小 (可放大/缩小)",-1)),U("button",{onClick:je,class:"text-[11px] text-blue-400 hover:text-blue-300 underline"}," 复位 100% ")]),U("div",Z3,[U("button",{onClick:St,class:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition",title:"缩小"},[Fe(st(E2),{class:"w-3.5 h-3.5"})]),hr(U("input",{"onUpdate:modelValue":L[12]||(L[12]=le=>ne.value=le),type:"range",min:"15",max:"300",step:"1",onInput:tt,class:"flex-1 accent-blue-500 cursor-pointer"},null,544),[[Tn,ne.value,void 0,{number:!0}]]),U("button",{onClick:yt,class:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition",title:"放大"},[Fe(st(C2),{class:"w-3.5 h-3.5"})]),U("span",Q3,Ye(ne.value)+"%",1)]),U("div",J3,[U("button",{onClick:L[13]||(L[13]=le=>At(-90)),class:"flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"},[Fe(st(w2),{class:"w-3.5 h-3.5"}),L[44]||(L[44]=U("span",null,"左转90°",-1))]),U("button",{onClick:L[14]||(L[14]=le=>At(90)),class:"flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"},[Fe(st(_2),{class:"w-3.5 h-3.5"}),L[45]||(L[45]=U("span",null,"右转90°",-1))]),U("label",eS,[hr(U("input",{type:"checkbox","onUpdate:modelValue":L[15]||(L[15]=le=>g.value=le),class:"rounded bg-slate-800 border-slate-700 text-blue-500"},null,512),[[fd,g.value]]),L[46]||(L[46]=U("span",null,"参考线",-1))])])])):jt("",!0),U("div",tS,[U("div",rS,[U("button",{onClick:oi,disabled:!P.value||y.value,class:"w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-semibold border border-slate-700 transition"},[Fe(st(Wd),{class:"w-4 h-4 text-emerald-400"}),L[47]||(L[47]=U("span",null,"导出单张(压缩)",-1))],8,nS),U("button",{onClick:Bn,disabled:!P.value||y.value,class:"w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition"},[Fe(st(y2),{class:"w-4 h-4"}),L[48]||(L[48]=U("span",null,"加入待印托盘",-1))],8,iS)]),P.value?(Xe(),at("button",{key:0,onClick:F,class:"w-full py-1.5 text-center text-xs text-slate-400 hover:text-slate-200 transition"}," 换一张照片... ")):jt("",!0)])])]),ht.value?(Xe(),at("div",sS,[U("div",aS,[L[52]||(L[52]=U("h3",{class:"text-sm font-bold text-slate-100"},"自定义证件照尺寸",-1)),U("div",oS,[U("div",null,[L[49]||(L[49]=U("label",{class:"block text-slate-400 mb-1"},"规格名称",-1)),hr(U("input",{"onUpdate:modelValue":L[16]||(L[16]=le=>et.name=le),placeholder:"例如：某报名考试特殊尺寸",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[Tn,et.name]])]),U("div",lS,[U("div",null,[L[50]||(L[50]=U("label",{class:"block text-slate-400 mb-1"},"宽度 (mm)",-1)),hr(U("input",{"onUpdate:modelValue":L[17]||(L[17]=le=>et.widthMm=le),type:"number",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[Tn,et.widthMm,void 0,{number:!0}]])]),U("div",null,[L[51]||(L[51]=U("label",{class:"block text-slate-400 mb-1"},"高度 (mm)",-1)),hr(U("input",{"onUpdate:modelValue":L[18]||(L[18]=le=>et.heightMm=le),type:"number",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[Tn,et.heightMm,void 0,{number:!0}]])])]),U("p",uS,"自动以 300 DPI 换算分辨率："+Ye(ot.value),1)]),U("div",dS,[U("button",{onClick:L[19]||(L[19]=le=>ht.value=!1),class:"px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs"},"取消"),U("button",{onClick:M,class:"px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"},"确认并应用")])])])):jt("",!0)]))}}),fS=(e,t)=>{const r=e.__vccOpts||e;for(const[n,i]of t)r[n]=i;return r},pS=fS(cS,[["__scopeId","data-v-97fd0a5f"]]);function Ks(e,t=300){return new Promise((r,n)=>{const i=new FileReader;i.onload=()=>{try{const s=i.result,a=hS(s,t);r(new Blob([a],{type:"image/jpeg"}))}catch(s){n(s)}},i.onerror=()=>n(i.error),i.readAsArrayBuffer(e)})}function hS(e,t=300){const r=new Uint8Array(e);if(r.length<4||r[0]!==255||r[1]!==216)return console.warn("[dpiWriter] 不是有效的 JPEG 文件格式，原样返回"),e;const n=t>>8&255,i=t&255;if(r[2]===255&&r[3]===224&&r[6]===74&&r[7]===70&&r[8]===73&&r[9]===70&&r[10]===0&&r.length>=18){const l=new Uint8Array(r);return l[13]=1,l[14]=n,l[15]=i,l[16]=n,l[17]=i,l.buffer}const s=new Uint8Array([255,224,0,16,74,70,73,70,0,1,2,1,n,i,n,i,0,0]),a=new Uint8Array(r.length+s.length);return a.set(r.subarray(0,2),0),a.set(s,2),a.set(r.subarray(2),2+s.length),a.buffer}class Ko{static async generatePrintPages(t,r){const{paper:n,marginMm:i=5,gapMm:s=3,showCutLines:a=!0,showFootnote:o=!0}=r,l=n.widthPx,d=n.heightPx,f=ms(i),p=ms(s),g=[];for(const S of t){if(S.printCount<=0)continue;const $=await this.renderItemToCanvas(S);for(let A=0;A<S.printCount;A++)g.push({item:S,w:S.spec.widthPx,h:S.spec.heightPx,canvas:$})}if(g.length===0)return[];const b=[];let y=0;const x=l-f*2,E=d-f*2;for(;y<g.length;){const S=b.length+1,$=document.createElement("canvas");$.width=l,$.height=d;const A=$.getContext("2d");if(!A)break;A.fillStyle="#FFFFFF",A.fillRect(0,0,l,d);let C=f,O=f,P=0,N=0;for(;y<g.length;){const T=g[y],W=T.w,Y=T.h;if(C+W>l-f&&(C=f,O+=P+p,P=0),O+Y>d-f)break;A.drawImage(T.canvas,C,O,W,Y),a&&this.drawCropCrossMarks(A,C,O,W,Y,r.cutLineOffsetPx||4,r.cutLineLengthPx||12),o&&this.drawFootnote(A,T.item,C,O,W,Y),P=Math.max(P,Y),C+=W+p,y++,N++}if(N===0&&y<g.length){const T=g[y];A.drawImage(T.canvas,f,f,Math.min(T.w,x),Math.min(T.h,E)),y++,N++}b.push({pageIndex:S,canvas:$,placedCount:N})}return b}static async renderItemToCanvas(t){const r=document.createElement("canvas");r.width=t.spec.widthPx,r.height=t.spec.heightPx;const n=r.getContext("2d");if(!n)return r;const i=r.width,s=r.height;if(t.selectedBg.value==="original"){const b=await this.blobToImage(t.originalBlob),y=b.width/b.height,x=i/s;let E=i,S=s,$=0,A=0;return y>x?(S=s,E=s*y,$=(i-E)/2):(E=i,S=i/y,A=(s-S)/2),n.drawImage(b,$,A,E,S),r}if(t.selectedBg.value!=="transparent"){if(t.selectedBg.isGradient&&t.selectedBg.gradientStops){const b=n.createLinearGradient(0,0,0,s);b.addColorStop(0,t.selectedBg.gradientStops[0]),b.addColorStop(1,t.selectedBg.gradientStops[1]),n.fillStyle=b}else n.fillStyle=t.selectedBg.value||"#FFFFFF";n.fillRect(0,0,i,s)}else n.clearRect(0,0,i,s);const a=await this.blobToImage(t.cutoutBlob),o=a.width/a.height,l=i/s;let d=i,f=s,p=0,g=0;return o>l?(f=s,d=s*o,p=(i-d)/2):(d=i,f=i/o,g=(s-f)/2),n.drawImage(a,p,g,d,f),r}static drawCropCrossMarks(t,r,n,i,s,a=4,o=12){t.save(),t.strokeStyle="#CCCCCC",t.lineWidth=1;const l=[{cx:r,cy:n,dx:-1,dy:-1},{cx:r+i,cy:n,dx:1,dy:-1},{cx:r,cy:n+s,dx:-1,dy:1},{cx:r+i,cy:n+s,dx:1,dy:1}];for(const{cx:d,cy:f,dx:p,dy:g}of l)t.beginPath(),t.moveTo(d+p*a,f),t.lineTo(d+p*(a+o),f),t.stroke(),t.beginPath(),t.moveTo(d,f+g*a),t.lineTo(d,f+g*(a+o)),t.stroke();t.restore()}static drawFootnote(t,r,n,i,s,a){t.save(),t.fillStyle="#9CA3AF",t.font="10px sans-serif",t.textAlign="center",t.textBaseline="top";const o=`${r.memberName||"成员"} · ${r.spec.name}`;t.fillText(o,n+s/2,i+a+6),t.restore()}static async exportPageAs300DpiBlob(t){return new Promise((r,n)=>{t.toBlob(async i=>{if(!i){n(new Error("页面 Canvas 导出失败"));return}try{const s=await Ks(i,300);r(s)}catch(s){n(s)}},"image/jpeg",.98)})}static blobToImage(t){return new Promise((r,n)=>{const i=URL.createObjectURL(t),s=new Image;s.onload=()=>{URL.revokeObjectURL(i),r(s)},s.onerror=()=>{URL.revokeObjectURL(i),n(new Error("图片加载失败"))},s.src=i})}}const mS={class:"fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md flex flex-col justify-end sm:justify-center items-center sm:p-4"},gS={class:"w-full max-w-2xl bg-slate-900 border-t sm:border border-slate-800 rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"},yS={class:"flex items-center justify-between px-5 py-4 border-b border-slate-800"},bS={class:"flex items-center space-x-2"},vS={class:"text-base font-bold text-slate-100"},wS={class:"flex items-center space-x-2"},_S={class:"flex-1 overflow-y-auto p-4 space-y-3"},xS={key:0,class:"py-12 flex flex-col items-center justify-center text-slate-500 space-y-2"},$S={class:"relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-950 border border-slate-700"},SS=["src"],kS={class:"absolute bottom-0 inset-x-0 bg-black/60 text-[9px] text-center text-slate-300 py-0.5"},TS={class:"flex-1 min-w-0 mx-3 space-y-1.5"},CS={class:"flex items-center space-x-2"},ES=["onUpdate:modelValue"],IS={class:"text-xs text-slate-400"},AS={class:"flex items-center space-x-1.5 pt-0.5"},OS=["onClick","title"],zS={class:"flex flex-col items-end space-y-2"},MS={class:"flex items-center space-x-1 bg-slate-900 rounded-lg p-1 border border-slate-700"},RS=["onClick"],BS={class:"w-7 text-center text-xs font-semibold text-slate-200"},PS=["onClick"],DS={class:"flex items-center space-x-2 text-xs"},NS=["onClick"],US=["onClick"],LS={class:"p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between"},FS={class:"text-sm font-bold text-blue-400"},jS={class:"flex items-center space-x-3"},VS=["disabled"],WS=ya({__name:"PhotoTray",props:{items:{}},emits:["close","remove-item","clear-all","export-single","open-packing","update-item"],setup(e,{emit:t}){const r=e,n=t,i=$n,s=ta(()=>r.items.reduce((d,f)=>d+f.printCount,0));function a(d){d.printCount++,n("update-item",d)}function o(d){d.printCount>1&&(d.printCount--,n("update-item",d))}async function l(d,f){d.selectedBg=f;const p=await Ko.renderItemToCanvas(d);d.previewUrl=p.toDataURL("image/jpeg",.9),n("update-item",d)}return(d,f)=>(Xe(),at("div",mS,[U("div",gS,[U("div",yS,[U("div",bS,[Fe(st(ay),{class:"w-5 h-5 text-blue-400"}),U("h2",vS,"待印照片托盘 ("+Ye(e.items.length)+")",1)]),U("div",wS,[e.items.length>0?(Xe(),at("button",{key:0,onClick:f[0]||(f[0]=p=>d.$emit("clear-all")),class:"text-xs text-rose-400 hover:text-rose-300 px-2 py-1 transition"}," 清空托盘 ")):jt("",!0),U("button",{onClick:f[1]||(f[1]=p=>d.$emit("close")),class:"p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"},[Fe(st(qd),{class:"w-5 h-5"})])])]),U("div",_S,[e.items.length===0?(Xe(),at("div",xS,[Fe(st(T2),{class:"w-10 h-10 stroke-[1.5]"}),f[4]||(f[4]=U("p",{class:"text-sm"},"托盘暂无照片，请先拍摄或上传照片",-1))])):jt("",!0),(Xe(!0),at(Xt,null,ps(e.items,(p,g)=>(Xe(),at("div",{key:p.id,class:"flex items-center justify-between bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 hover:border-slate-600 transition"},[U("div",$S,[U("img",{src:p.previewUrl,class:"w-full h-full object-cover"},null,8,SS),U("span",kS,Ye(p.spec.widthMm)+"×"+Ye(p.spec.heightMm),1)]),U("div",TS,[U("div",CS,[hr(U("input",{"onUpdate:modelValue":b=>p.memberName=b,placeholder:"成员姓名",class:"bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-100 w-24 focus:ring-1 focus:ring-blue-500 focus:outline-none"},null,8,ES),[[Tn,p.memberName]]),U("span",IS,Ye(p.spec.name),1)]),U("div",AS,[(Xe(!0),at(Xt,null,ps(st(i),b=>(Xe(),at("button",{key:b.id,onClick:y=>l(p,b),class:wr(["w-4 h-4 rounded-full border border-slate-600 transition-transform",[b.previewClass,p.selectedBg.id===b.id?"ring-2 ring-blue-400 scale-110":""]]),title:b.name},null,10,OS))),128))])]),U("div",zS,[U("div",MS,[U("button",{onClick:b=>o(p),class:"w-6 h-6 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"},[Fe(st(g2),{class:"w-3.5 h-3.5"})],8,RS),U("span",BS,Ye(p.printCount),1),U("button",{onClick:b=>a(p),class:"w-6 h-6 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"},[Fe(st(b2),{class:"w-3.5 h-3.5"})],8,PS)]),U("div",DS,[U("button",{onClick:b=>d.$emit("export-single",p),class:"text-blue-400 hover:text-blue-300"}," 单张导出 ",8,NS),U("button",{onClick:b=>d.$emit("remove-item",p.id),class:"text-rose-400 hover:text-rose-300"}," 删除 ",8,US)])])]))),128))]),U("div",LS,[U("div",null,[f[5]||(f[5]=U("span",{class:"text-xs text-slate-400"},"总待打印张数: ",-1)),U("span",FS,Ye(s.value)+" 张",1)]),U("div",jS,[U("button",{onClick:f[2]||(f[2]=p=>d.$emit("close")),class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"}," 继续拍照 "),U("button",{onClick:f[3]||(f[3]=p=>d.$emit("open-packing")),disabled:s.value===0,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5"},[Fe(st(No),{class:"w-4 h-4"}),f[6]||(f[6]=U("span",null,"智能混排拼版",-1))],8,VS)])])])]))}});function xo(e,t,r){return new Promise((n,i)=>{e.toBlob(s=>{s?n(s):i(new Error("Canvas 转 Blob 失败"))},t,r)})}async function qS(e,t){const{targetKb:r,toleranceKb:n=3,maxIterations:i=6,minQuality:s=.1,maxQuality:a=.98,autoScaleIfExceeded:o=!0,dpi:l=300}=t;let d=e,f=e.width,p=e.height,g=s,b=a,y=null,x=a,E=1/0,S=0;const $=await xo(d,"image/jpeg",b),A=await Ks($,l),C=A.size/1024;if(C<=r)return{blob:A,sizeKb:Math.round(C*10)/10,quality:b,iterations:1,width:f,height:p};for(let O=0;O<i;O++){S++;const P=(g+b)/2,N=await xo(d,"image/jpeg",P),T=await Ks(N,l),W=T.size/1024;if(W<=r){if(y=T,x=P,E=W,r-W<=n)break;g=P}else b=P}if(!y&&o){let O=.9;for(let P=0;P<3;P++){const N=document.createElement("canvas");N.width=Math.round(f*O),N.height=Math.round(p*O);const T=N.getContext("2d");if(T){T.imageSmoothingEnabled=!0,T.imageSmoothingQuality="high",T.drawImage(e,0,0,N.width,N.height);const W=await xo(N,"image/jpeg",.5),Y=await Ks(W,l),de=Y.size/1024;if(de<=r)return{blob:Y,sizeKb:Math.round(de*10)/10,quality:.5,iterations:S+P+1,width:N.width,height:N.height}}O-=.15}}if(!y){const O=await xo(d,"image/jpeg",s);y=await Ks(O,l),E=y.size/1024,x=s}return{blob:y,sizeKb:Math.round(E*10)/10,quality:Math.round(x*100)/100,iterations:S,width:f,height:p}}const HS={class:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"},GS={class:"bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden flex flex-col shadow-2xl"},KS={class:"flex items-center justify-between px-5 py-3.5 border-b border-slate-800"},XS={class:"p-5 space-y-4 overflow-y-auto max-h-[75vh]"},YS={class:"flex justify-center bg-slate-950 p-4 rounded-xl border border-slate-800 relative"},ZS=["src"],QS={class:"grid grid-cols-3 gap-2 text-center text-xs"},JS={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},ek={class:"font-semibold text-slate-200"},tk={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},rk={class:"font-semibold text-slate-200"},nk={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},ik={class:"font-semibold text-emerald-400"},sk={class:"bg-slate-800/40 p-3.5 rounded-xl border border-slate-800 space-y-3"},ak={class:"flex items-center justify-between"},ok={class:"text-xs text-blue-400 font-mono font-medium"},lk={class:"flex items-center space-x-2"},uk=["onClick"],dk={key:0,class:"text-[11px] text-slate-400 flex items-center justify-between pt-1"},ck={class:"space-y-2"},fk={class:"flex items-center justify-between text-xs text-slate-400"},pk={class:"p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-end space-x-3"},hk=["disabled"],mk=ya({__name:"ExportModal",props:{item:{}},emits:["close"],setup(e,{emit:t}){const r=e,n=We(50),i=We(100),s=We(!1),a=We(0),o=We(null),l=We("");let d=null;ba(()=>{p()});function f(b){n.value=b,p()}async function p(){s.value=!0;try{const b=await Ko.renderItemToCanvas(r.item);let y=b;if(i.value!==100){const E=document.createElement("canvas");E.width=b.width,E.height=b.height;const S=E.getContext("2d");S&&(S.filter=`brightness(${i.value}%)`,S.drawImage(b,0,0),y=E)}const x=await qS(y,{targetKb:n.value,toleranceKb:2,maxIterations:6,dpi:300});o.value=x,a.value=x.sizeKb,d=x.blob,l.value&&URL.revokeObjectURL(l.value),l.value=URL.createObjectURL(x.blob)}catch(b){console.error("二分压缩错误:",b)}finally{s.value=!1}}function g(){if(!d)return;const b=URL.createObjectURL(d),y=document.createElement("a");y.href=b;const x=`${r.item.memberName||"证件照"}_${r.item.spec.name}_300DPI_${a.value}KB.jpg`;y.download=x,document.body.appendChild(y),y.click(),document.body.removeChild(y),URL.revokeObjectURL(b)}return(b,y)=>(Xe(),at("div",HS,[U("div",GS,[U("div",KS,[y[4]||(y[4]=U("h3",{class:"text-sm font-bold text-slate-100 flex items-center space-x-2"},[U("span",null,"单张证件照导出与合规压缩")],-1)),U("button",{onClick:y[0]||(y[0]=x=>b.$emit("close")),class:"text-slate-400 hover:text-white p-1"},[Fe(st(qd),{class:"w-5 h-5"})])]),U("div",XS,[U("div",YS,[U("img",{src:l.value||e.item.previewUrl,class:"max-h-56 object-contain rounded shadow-lg border border-slate-700"},null,8,ZS),y[5]||(y[5]=U("div",{class:"absolute bottom-6 right-6 bg-slate-900/90 border border-slate-700 px-2 py-1 rounded text-[11px] text-blue-400 font-mono"}," 300 DPI 物理打印标记已注入 ",-1))]),U("div",QS,[U("div",JS,[y[6]||(y[6]=U("span",{class:"block text-slate-400 text-[10px]"},"物理尺寸",-1)),U("span",ek,Ye(e.item.spec.widthMm)+" × "+Ye(e.item.spec.heightMm)+" mm",1)]),U("div",tk,[y[7]||(y[7]=U("span",{class:"block text-slate-400 text-[10px]"},"像素分辨率",-1)),U("span",rk,Ye(e.item.spec.widthPx)+" × "+Ye(e.item.spec.heightPx)+" px",1)]),U("div",nk,[y[8]||(y[8]=U("span",{class:"block text-slate-400 text-[10px]"},"实际体积",-1)),U("span",ik,Ye(a.value?`${a.value} KB`:"计算中..."),1)])]),U("div",sk,[U("div",ak,[y[9]||(y[9]=U("label",{class:"text-xs font-semibold text-slate-300"},"目标文件大小限制 (KB)",-1)),U("span",ok,"≤ "+Ye(n.value)+" KB",1)]),U("div",lk,[(Xe(),at(Xt,null,ps([20,30,50,100,200],x=>U("button",{key:x,onClick:E=>f(x),class:wr(["px-2.5 py-1 rounded-lg text-xs font-medium transition",n.value===x?"bg-blue-600 text-white":"bg-slate-800 text-slate-400 hover:text-slate-200"])},Ye(x)+"K ",11,uk)),64))]),hr(U("input",{"onUpdate:modelValue":y[1]||(y[1]=x=>n.value=x),type:"range",min:"10",max:"300",step:"5",onChange:p,class:"w-full accent-blue-500 cursor-pointer"},null,544),[[Tn,n.value,void 0,{number:!0}]]),o.value?(Xe(),at("div",dk,[U("span",null,"二分逼近质量: "+Ye(Math.round(o.value.quality*100))+"%",1),U("span",null,"迭代收敛: "+Ye(o.value.iterations)+" 次",1)])):jt("",!0)]),U("div",ck,[U("div",fk,[y[10]||(y[10]=U("span",null,"画面亮度",-1)),U("span",null,Ye(i.value)+"%",1)]),hr(U("input",{"onUpdate:modelValue":y[2]||(y[2]=x=>i.value=x),type:"range",min:"80",max:"120",onChange:p,class:"w-full accent-blue-500 cursor-pointer"},null,544),[[Tn,i.value,void 0,{number:!0}]])])]),U("div",pk,[U("button",{onClick:y[3]||(y[3]=x=>b.$emit("close")),class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"}," 取消 "),U("button",{onClick:g,disabled:s.value,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5 disabled:opacity-50"},[Fe(st(Wd),{class:"w-4 h-4"}),U("span",null,Ye(s.value?"压缩计算中...":"下载无损 300 DPI 照"),1)],8,hk)])])]))}}),gk={class:"fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 overflow-hidden"},yk={class:"w-full flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3 shadow-lg"},bk={class:"flex items-center space-x-3"},vk={class:"flex items-center space-x-3"},wk=["value"],_k={class:"flex-1 w-full my-3 flex items-center justify-center overflow-auto p-2"},xk={key:0,class:"flex flex-col items-center justify-center text-slate-400 space-y-2"},$k={key:1,class:"relative flex flex-col items-center max-h-full max-w-full"},Sk={class:"bg-white rounded-lg shadow-2xl p-1 border-2 border-slate-700 overflow-hidden flex items-center justify-center"},kk={key:0,class:"flex items-center space-x-3 mt-3 bg-slate-900/90 px-3 py-1.5 rounded-full border border-slate-800"},Tk=["disabled"],Ck={class:"text-xs font-medium text-slate-400"},Ek=["disabled"],Ik={class:"w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"},Ak={class:"flex items-center space-x-4 text-xs text-slate-300"},Ok={class:"flex items-center space-x-1.5 cursor-pointer"},zk={class:"flex items-center space-x-1.5 cursor-pointer"},Mk={class:"flex items-center space-x-3"},Rk=ya({__name:"PrintLayoutModal",props:{items:{}},emits:["close"],setup(e,{emit:t}){const r=e,n=We(ao),i=We(ao[0].id),s=cs({paper:ao[0],marginMm:4,gapMm:3,showCutLines:!0,showFootnote:!0,cutLineOffsetPx:4,cutLineLengthPx:14}),a=We(!1),o=We([]),l=We(0),d=We(null);ba(()=>{f()});async function f(){const E=n.value.find(S=>S.id===i.value)||ao[0];s.paper=E,a.value=!0;try{o.value=await Ko.generatePrintPages(r.items,s),l.value=0,await Zn(),p()}catch(S){console.error("混排拼版错误:",S)}finally{a.value=!1}}function p(){if(o.value.length===0||!d.value)return;const E=o.value[l.value],S=d.value;S.width=E.canvas.width,S.height=E.canvas.height;const $=S.getContext("2d");$&&$.drawImage(E.canvas,0,0)}function g(){l.value>0&&(l.value--,p())}function b(){l.value<o.value.length-1&&(l.value++,p())}async function y(){if(o.value.length===0)return;const E=o.value[l.value],S=await Ko.exportPageAs300DpiBlob(E.canvas),$=URL.createObjectURL(S),A=document.createElement("a");A.href=$,A.download=`证件照混排打印_${s.paper.name}_第${l.value+1}页_300DPI.jpg`,document.body.appendChild(A),A.click(),document.body.removeChild(A),URL.revokeObjectURL($)}function x(){if(o.value.length===0)return;const S=o.value[l.value].canvas.toDataURL("image/jpeg",1),$=window.open("","_blank");if(!$){alert("请允许弹出窗口以调用原生打印");return}$.document.write(`
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
  `),$.document.close()}return(E,S)=>(Xe(),at("div",gk,[U("header",yk,[U("div",bk,[Fe(st(No),{class:"w-5 h-5 text-blue-400"}),S[4]||(S[4]=U("h2",{class:"text-sm sm:text-base font-bold text-slate-100"},"智能多人混排拼版工作台",-1))]),U("div",vk,[hr(U("select",{"onUpdate:modelValue":S[0]||(S[0]=$=>i.value=$),onChange:f,class:"bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"},[(Xe(!0),at(Xt,null,ps(n.value,$=>(Xe(),at("option",{key:$.id,value:$.id},Ye($.name),9,wk))),128))],544),[[iy,i.value]]),U("button",{onClick:S[1]||(S[1]=$=>E.$emit("close")),class:"p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"},[Fe(st(qd),{class:"w-5 h-5"})])])]),U("main",_k,[a.value?(Xe(),at("div",xk,[Fe(st(pd),{class:"w-8 h-8 animate-spin text-blue-500"}),S[5]||(S[5]=U("span",{class:"text-xs"},"正在计算最优拼版装箱...",-1))])):o.value.length>0?(Xe(),at("div",$k,[U("div",Sk,[U("canvas",{ref_key:"displayCanvasRef",ref:d,class:"max-h-[60vh] max-w-[85vw] object-contain shadow-inner"},null,512)]),o.value.length>1?(Xe(),at("div",kk,[U("button",{onClick:g,disabled:l.value===0,class:"px-2 py-0.5 rounded text-xs text-slate-300 disabled:opacity-30 hover:bg-slate-800"}," 上一页 ",8,Tk),U("span",Ck," 第 "+Ye(l.value+1)+" / "+Ye(o.value.length)+" 页 ",1),U("button",{onClick:b,disabled:l.value===o.value.length-1,class:"px-2 py-0.5 rounded text-xs text-slate-300 disabled:opacity-30 hover:bg-slate-800"}," 下一页 ",8,Ek)])):jt("",!0)])):jt("",!0)]),U("footer",Ik,[U("div",Ak,[U("label",Ok,[hr(U("input",{type:"checkbox","onUpdate:modelValue":S[2]||(S[2]=$=>s.showCutLines=$),onChange:f,class:"rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0"},null,544),[[fd,s.showCutLines]]),S[6]||(S[6]=U("span",null,"浅灰十字裁切线 (#CCCCCC)",-1))]),U("label",zk,[hr(U("input",{type:"checkbox","onUpdate:modelValue":S[3]||(S[3]=$=>s.showFootnote=$),onChange:f,class:"rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0"},null,544),[[fd,s.showFootnote]]),S[7]||(S[7]=U("span",null,"姓名/规格微型脚标",-1))])]),U("div",Mk,[U("button",{onClick:x,class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition flex items-center space-x-1.5"},[Fe(st(No),{class:"w-4 h-4"}),S[8]||(S[8]=U("span",null,"系统原生打印",-1))]),U("button",{onClick:y,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5"},[Fe(st(Wd),{class:"w-4 h-4"}),U("span",null,"下载 300 DPI 冲印原图 (第 "+Ye(l.value+1)+" 页)",1)])])])]))}}),Bk={class:"w-full h-screen bg-slate-950 flex flex-col overflow-hidden"},Pk={key:0,class:"fixed top-14 inset-x-0 mx-auto w-fit z-50 bg-emerald-600/90 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-xl backdrop-blur-md flex items-center space-x-2"},Dk=ya({__name:"App",setup(e){const t=We([]),r=We(!1),n=We(!1),i=We(null),s=We("");let a=null;function o(y){s.value=y,a&&clearTimeout(a),a=setTimeout(()=>{s.value=""},2500)}function l(y){t.value.push(y),o(`已成功加入托盘：${y.spec.name} (${y.printCount}张)`)}function d(y){i.value=y}function f(y){t.value=t.value.filter(x=>x.id!==y)}function p(){t.value=[]}function g(){r.value=!1,n.value=!0}function b(y){const x=t.value.findIndex(E=>E.id===y.id);x!==-1&&(t.value[x]={...y})}return(y,x)=>(Xe(),at("div",Bk,[Fe(pS,{"tray-count":t.value.length,onPhotoAddedToTray:l,onOpenSingleExport:d,onOpenTray:x[0]||(x[0]=E=>r.value=!0),onOpenPacking:x[1]||(x[1]=E=>n.value=!0),onShowToast:o},null,8,["tray-count"]),r.value?(Xe(),Li(WS,{key:0,items:t.value,onClose:x[2]||(x[2]=E=>r.value=!1),onRemoveItem:f,onClearAll:p,onExportSingle:d,onOpenPacking:g,onUpdateItem:b},null,8,["items"])):jt("",!0),i.value?(Xe(),Li(mk,{key:1,item:i.value,onClose:x[3]||(x[3]=E=>i.value=null)},null,8,["item"])):jt("",!0),n.value?(Xe(),Li(Rk,{key:2,items:t.value,onClose:x[4]||(x[4]=E=>n.value=!1)},null,8,["items"])):jt("",!0),Fe(Rx,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform translate-y-4 opacity-0","enter-to-class":"transform translate-y-0 opacity-100","leave-active-class":"transition duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:x0(()=>[s.value?(Xe(),at("div",Pk,[x[5]||(x[5]=U("span",null,"✓",-1)),U("span",null,Ye(s.value),1)])):jt("",!0)]),_:1})]))}}),Nk=c2(Dk);Nk.mount("#app");
