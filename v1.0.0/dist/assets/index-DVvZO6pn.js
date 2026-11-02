(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Id(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const At={},ji=[],un=()=>{},Vg=()=>!1,Yo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Zo=e=>e.startsWith("onUpdate:"),Kt=Object.assign,Ad=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},Rw=Object.prototype.hasOwnProperty,vt=(e,t)=>Rw.call(e,t),Re=Array.isArray,ai=e=>ba(e)==="[object Map]",Rn=e=>ba(e)==="[object Set]",bf=e=>ba(e)==="[object Date]",Je=e=>typeof e=="function",Ut=e=>typeof e=="string",dn=e=>typeof e=="symbol",wt=e=>e!==null&&typeof e=="object",Hg=e=>(wt(e)||Je(e))&&Je(e.then)&&Je(e.catch),qg=Object.prototype.toString,ba=e=>qg.call(e),Bw=e=>ba(e).slice(8,-1),Gg=e=>ba(e)==="[object Object]",Od=e=>Ut(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qs=Id(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},Pw=/-\w/g,Kr=Qo(e=>e.replace(Pw,t=>t.slice(1).toUpperCase())),Dw=/\B([A-Z])/g,ci=Qo(e=>e.replace(Dw,"-$1").toLowerCase()),Kg=Qo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Pl=Qo(e=>e?`on${Kg(e)}`:""),on=(e,t)=>!Object.is(e,t),ko=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},Xg=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},Jo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Nw=e=>{const t=Ut(e)?Number(e):NaN;return isNaN(t)?e:t};let vf;const el=()=>vf||(vf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ni(e){if(Re(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],i=Ut(n)?jw(n):ni(n);if(i)for(const s in i)t[s]=i[s]}return t}else if(Ut(e)||wt(e))return e}const Uw=/;(?![^(]*\))/g,Lw=/:([^]+)/,Fw=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function jw(e){const t={};return e.replace(Fw,r=>r.startsWith("/*")?"":r).split(Uw).forEach(r=>{if(r){const n=r.split(Lw);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function _r(e){let t="";if(Ut(e))t=e;else if(Re(e))for(let r=0;r<e.length;r++){const n=_r(e[r]);n&&(t+=n+" ")}else if(wt(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const Ww="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Vw=Id(Ww);function Yg(e){return!!e||e===""}function Hw(e,t,r){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=Bn(e[i],t[i],r);return n}function wf(e,t,r){if(e.size!==t.size)return!1;const n=Array.from(t),i=new Uint8Array(n.length);for(const s of e){let a=-1;for(let o=0;o<n.length;o++)if(!i[o]&&Bn(s,n[o],r)){a=o;break}if(a<0)return!1;i[a]=1}return!0}function qw(e,t,r){let n=ai(e),i=ai(t);if(n||i||(n=Rn(e),i=Rn(t),n||i))return n&&i?wf(e,t,r):!1;const s=Object.keys(e).length,a=Object.keys(t).length;if(s!==a)return!1;for(const o in e){const l=e.hasOwnProperty(o),d=t.hasOwnProperty(o);if(l&&!d||!l&&d||!Bn(e[o],t[o],r))return!1}return String(e)===String(t)}function _f(e,t,r,n){r||(r=[new Map,new Map]);const[i,s]=r;if(i.has(e)||s.has(t))return i.get(e)===t&&s.get(t)===e;i.set(e,t),s.set(t,e);const a=n(e,t,r);return i.delete(e),s.delete(t),a}function Bn(e,t,r){if(e===t)return!0;let n=bf(e),i=bf(t);return n||i?n&&i?e.getTime()===t.getTime():!1:(n=dn(e),i=dn(t),n||i?e===t:(n=Re(e),i=Re(t),n||i?n&&i?_f(e,t,r,Hw):!1:(n=wt(e),i=wt(t),n||i?!n||!i?!1:_f(e,t,r,qw):String(e)===String(t))))}function zd(e,t){return e.findIndex(r=>Bn(r,t))}const Zg=e=>!!(e&&e.__v_isRef===!0),Qe=e=>Ut(e)?e:e==null?"":Re(e)||wt(e)&&(e.toString===qg||!Je(e.toString))?Zg(e)?Qe(e.value):JSON.stringify(e,Qg,2):String(e),Qg=(e,t)=>Zg(t)?Qg(e,t.value):ai(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,i],s)=>(r[Dl(n,s)+" =>"]=i,r),{})}:Rn(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>Dl(r))}:dn(t)?Dl(t):wt(t)&&!Re(t)&&!Gg(t)?String(t):t,Dl=(e,t="")=>{var r;return dn(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jt;class Gw{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Jt&&(Jt.active?(this.parent=Jt,this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes){const n=this.scopes.slice();for(t=0,r=n.length;t<r;t++)n[t].pause()}for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes){const i=this.scopes.slice();for(t=0,r=i.length;t<r;t++)i[t].resume()}const n=this.effects.slice();for(t=0,r=n.length;t<r;t++)n[t].resume()}}run(t){if(this._active){const r=Jt;try{return Jt=this,t()}finally{Jt=r}}}on(){++this._on===1&&(this.prevScope=Jt,Jt=this)}off(){if(this._on>0&&--this._on===0){if(Jt===this)Jt=this.prevScope;else{let t=Jt;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(r=0,n=i.length;r<n;r++)i[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Kw(){return Jt}let Ot;const Nl=new WeakSet;class Jg{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Jt&&(Jt.active?Jt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nl.has(this)&&(Nl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||t0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xf(this),r0(this);const t=Ot,r=Xr;Ot=this,Xr=!0;try{return this.fn()}finally{n0(this),Ot=t,Xr=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Bd(t);this.deps=this.depsTail=void 0,xf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qu(this)&&this.run()}get dirty(){return Qu(this)}}let e0=0,Js,ea;function t0(e,t=!1){if(e.flags|=8,t){e.next=ea,ea=e;return}e.next=Js,Js=e}function Md(){e0++}function Rd(){if(--e0>0)return;if(ea){let t=ea;for(ea=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;Js;){let t=Js;for(Js=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function r0(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function n0(e){let t,r=e.depsTail,n=r;for(;n;){const i=n.prevDep;n.version===-1?(n===r&&(r=i),Bd(n),Xw(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=r}function Qu(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(i0(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function i0(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===aa)||(e.globalVersion=aa,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Qu(e))))return;e.flags|=2;const t=e.dep,r=Ot,n=Xr;Ot=e,Xr=!0;try{r0(e);const i=e.fn(e._value);(t.version===0||on(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Ot=r,Xr=n,n0(e),e.flags&=-3}}function Bd(e,t=!1){const{dep:r,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let s=r.computed.deps;s;s=s.nextDep)Bd(s,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function Xw(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let Xr=!0;const s0=[];function cn(){s0.push(Xr),Xr=!1}function fn(){const e=s0.pop();Xr=e===void 0?!0:e}function xf(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=Ot;Ot=void 0;try{t()}finally{Ot=r}}}let aa=0;class Yw{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pd{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ot||!Xr||Ot===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==Ot)r=this.activeLink=new Yw(Ot,this),Ot.deps?(r.prevDep=Ot.depsTail,Ot.depsTail.nextDep=r,Ot.depsTail=r):Ot.deps=Ot.depsTail=r,a0(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=Ot.depsTail,r.nextDep=void 0,Ot.depsTail.nextDep=r,Ot.depsTail=r,Ot.deps===r&&(Ot.deps=n)}return r}trigger(t){this.version++,aa++,this.notify(t)}notify(t){Md();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{Rd()}}}function a0(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)a0(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const Ju=new WeakMap,Wi=Symbol(""),ed=Symbol(""),oa=Symbol("");function nr(e,t,r){if(Xr&&Ot){let n=Ju.get(e);n||Ju.set(e,n=new Map);let i=n.get(r);i||(n.set(r,i=new Pd),i.map=n,i.key=r),i.track()}}function On(e,t,r,n,i,s){const a=Ju.get(e);if(!a){aa++;return}const o=l=>{l&&l.trigger()};if(Md(),t==="clear")a.forEach(o);else{const l=Re(e),d=l&&Od(r);if(l&&r==="length"){const f=Number(n);a.forEach((p,g)=>{(g==="length"||g===oa||!dn(g)&&g>=f)&&o(p)})}else switch((r!==void 0||a.has(void 0))&&o(a.get(r)),d&&o(a.get(oa)),t){case"add":l?d&&o(a.get("length")):(o(a.get(Wi)),ai(e)&&o(a.get(ed)));break;case"delete":l||(o(a.get(Wi)),ai(e)&&o(a.get(ed)));break;case"set":ai(e)&&o(a.get(Wi));break}}Rd()}function ls(e){const t=bt(e);return t===e||(nr(t,"iterate",oa),Br(e))?t:pn(e)?oi(e)?t.map(r=>li(Pr(r))):t.map(li):t.map(Pr)}function tl(e){return nr(e=bt(e),"iterate",oa),e}function nn(e,t){return pn(e)?li(oi(e)?Pr(t):t):Pr(t)}const Zw={__proto__:null,[Symbol.iterator](){return Ul(this,Symbol.iterator,e=>nn(this,e))},concat(...e){return ls(this).concat(...e.map(t=>Re(t)?ls(t):t))},entries(){return Ul(this,"entries",e=>(e[1]=nn(this,e[1]),e))},every(e,t){return $n(this,"every",e,t,void 0,arguments)},filter(e,t){return $n(this,"filter",e,t,r=>r.map(n=>nn(this,n)),arguments)},find(e,t){return $n(this,"find",e,t,r=>nn(this,r),arguments)},findIndex(e,t){return $n(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return $n(this,"findLast",e,t,r=>nn(this,r),arguments)},findLastIndex(e,t){return $n(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return $n(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ll(this,"includes",e)},indexOf(...e){return Ll(this,"indexOf",e)},join(e){return ls(this).join(e)},lastIndexOf(...e){return Ll(this,"lastIndexOf",e)},map(e,t){return $n(this,"map",e,t,void 0,arguments)},pop(){return Os(this,"pop")},push(...e){return Os(this,"push",e)},reduce(e,...t){return Sf(this,"reduce",e,t)},reduceRight(e,...t){return Sf(this,"reduceRight",e,t)},shift(){return Os(this,"shift")},some(e,t){return $n(this,"some",e,t,void 0,arguments)},splice(...e){return Os(this,"splice",e)},toReversed(){return ls(this).toReversed()},toSorted(e){return ls(this).toSorted(e)},toSpliced(...e){return ls(this).toSpliced(...e)},unshift(...e){return Os(this,"unshift",e)},values(){return Ul(this,"values",e=>nn(this,e))}};function Ul(e,t,r){const n=tl(e),i=n[t],s=i.call(n);if(n!==e&&!Br(e)){if(s[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(s));return a.next=()=>$f(s.next(),r),i!==o0[t]&&Object.defineProperties(a,{return:{get(){const o=s.return;return typeof o=="function"?o.bind(s):o}},throw:{get(){const o=s.throw;return typeof o=="function"?o.bind(s):o}}}),a}s._next=s.next,s.next=()=>$f(s._next(),r)}return s}function $f(e,t){return e.done||(e.value=t(e.value)),e}const o0=Array.prototype;function $n(e,t,r,n,i,s){const a=tl(e),o=a!==e&&!Br(e),l=a[t];if(l!==o0[t]){const p=l.apply(e,s);return o?Pr(p):p}let d=r;a!==e&&(o?d=function(p,g){return r.call(this,nn(e,p),g,e)}:r.length>2&&(d=function(p,g){return r.call(this,p,g,e)}));const f=l.call(a,d,n);return o&&i?i(f):f}function Sf(e,t,r,n){const i=tl(e),s=i!==e&&!Br(e);let a=r,o=!1;i!==e&&(s?(o=n.length===0,a=function(d,f,p){return o&&(o=!1,d=nn(e,d)),r.call(this,d,nn(e,f),p,e)}):r.length>3&&(a=function(d,f,p){return r.call(this,d,f,p,e)}));const l=i[t](a,...n);return o?nn(e,l):l}function Ll(e,t,r){const n=bt(e);nr(n,"iterate",oa);const i=n[t](...r);return(i===-1||i===!1)&&Ud(r[0])?(r[0]=bt(r[0]),n[t](...r)):i}function Os(e,t,r=[]){cn(),Md();const n=bt(e)[t].apply(e,r);return Rd(),fn(),n}const Qw=Id("__proto__,__v_isRef,__isVue"),l0=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(dn));function Jw(e){dn(e)||(e=String(e));const t=bt(this);return nr(t,"has",e),t.hasOwnProperty(e)}class u0{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,n){if(r==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return s;if(r==="__v_raw")return n===(i?s?u_:p0:s?f0:c0).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const a=Re(t);if(!i){let l;if(a&&(l=Zw[r]))return l;if(r==="hasOwnProperty")return Jw}const o=Reflect.get(t,r,sr(t)?t:n);if((dn(r)?l0.has(r):Qw(r))||(i||nr(t,"get",r),s))return o;if(sr(o)){const l=a&&Od(r)?o:o.value;return i&&wt(l)?rd(l):l}return wt(o)?i?rd(o):Vi(o):o}}class d0 extends u0{constructor(t=!1){super(!1,t)}set(t,r,n,i){let s=t[r];const a=Re(t)&&Od(r);if(!this._isShallow){const d=pn(s);if(!Br(n)&&!pn(n)&&(s=bt(s),n=bt(n)),!a&&sr(s)&&!sr(n))return d||(s.value=n),!0}const o=a?Number(r)<t.length:vt(t,r),l=Reflect.set(t,r,n,sr(t)?t:i);return t===bt(i)&&l&&(o?on(n,s)&&On(t,"set",r,n):On(t,"add",r,n)),l}deleteProperty(t,r){const n=vt(t,r);t[r];const i=Reflect.deleteProperty(t,r);return i&&n&&On(t,"delete",r,void 0),i}has(t,r){const n=Reflect.has(t,r);return(!dn(r)||!l0.has(r))&&nr(t,"has",r),n}ownKeys(t){return nr(t,"iterate",Re(t)?"length":Wi),Reflect.ownKeys(t)}}class e_ extends u0{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const t_=new d0,r_=new e_,n_=new d0(!0);const td=e=>e,to=e=>Reflect.getPrototypeOf(e);function i_(e,t,r){return function(...n){const i=this.__v_raw,s=bt(i),a=ai(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,d=i[e](...n),f=r?td:t?li:Pr;return!t&&nr(s,"iterate",l?ed:Wi),Kt(Object.create(d),{next(){const{value:p,done:g}=d.next();return g?{value:p,done:g}:{value:o?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function ro(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function s_(e,t){const r={get(i){const s=this.__v_raw,a=bt(s),o=bt(i);e||(on(i,o)&&nr(a,"get",i),nr(a,"get",o));const{has:l}=to(a),d=t?td:e?li:Pr;if(l.call(a,i))return d(s.get(i));if(l.call(a,o))return d(s.get(o));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!e&&nr(bt(i),"iterate",Wi),i.size},has(i){const s=this.__v_raw,a=bt(s),o=bt(i);return e||(on(i,o)&&nr(a,"has",i),nr(a,"has",o)),i===o?s.has(i):s.has(i)||s.has(o)},forEach(i,s){const a=this,o=a.__v_raw,l=bt(o),d=t?td:e?li:Pr;return!e&&nr(l,"iterate",Wi),o.forEach((f,p)=>i.call(s,d(f),d(p),a))}};return Kt(r,e?{add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear")}:{add(i){const s=bt(this),a=to(s),o=bt(i),l=!t&&!Br(i)&&!pn(i)?o:i;return a.has.call(s,l)||on(i,l)&&a.has.call(s,i)||on(o,l)&&a.has.call(s,o)||(s.add(l),On(s,"add",l,l)),this},set(i,s){!t&&!Br(s)&&!pn(s)&&(s=bt(s));const a=bt(this),{has:o,get:l}=to(a);let d=o.call(a,i);d||(i=bt(i),d=o.call(a,i));const f=l.call(a,i);return a.set(i,s),d?on(s,f)&&On(a,"set",i,s):On(a,"add",i,s),this},delete(i){const s=bt(this),{has:a,get:o}=to(s);let l=a.call(s,i);l||(i=bt(i),l=a.call(s,i)),o&&o.call(s,i);const d=s.delete(i);return l&&On(s,"delete",i,void 0),d},clear(){const i=bt(this),s=i.size!==0,a=i.clear();return s&&On(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{r[i]=i_(i,e,t)}),r}function Dd(e,t){const r=s_(e,t);return(n,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_isShallow"?t:i==="__v_raw"?n:Reflect.get(vt(r,i)&&i in n?r:n,i,s)}const a_={get:Dd(!1,!1)},o_={get:Dd(!1,!0)},l_={get:Dd(!0,!1)};const c0=new WeakMap,f0=new WeakMap,p0=new WeakMap,u_=new WeakMap;function d_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vi(e){return pn(e)?e:Nd(e,!1,t_,a_,c0)}function c_(e){return Nd(e,!1,n_,o_,f0)}function rd(e){return Nd(e,!0,r_,l_,p0)}function Nd(e,t,r,n,i){if(!wt(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=i.get(e);if(s)return s;const a=d_(Bw(e));if(a===0)return e;const o=new Proxy(e,a===2?n:r);return i.set(e,o),o}function oi(e){return pn(e)?oi(e.__v_raw):!!(e&&e.__v_isReactive)}function pn(e){return!!(e&&e.__v_isReadonly)}function Br(e){return!!(e&&e.__v_isShallow)}function Ud(e){return e?!!e.__v_raw:!1}function bt(e){const t=e&&e.__v_raw;return t?bt(t):e}function f_(e){return!vt(e,"__v_skip")&&Object.isExtensible(e)&&Xg(e,"__v_skip",!0),e}const Pr=e=>wt(e)?Vi(e):e,li=e=>wt(e)?rd(e):e;function sr(e){return e?e.__v_isRef===!0:!1}function Ke(e){return p_(e,!1)}function p_(e,t){return sr(e)?e:new h_(e,t)}class h_{constructor(t,r){this.dep=new Pd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:bt(t),this._value=r?t:Pr(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,n=this.__v_isShallow||Br(t)||pn(t);t=n?t:bt(t),on(t,r)&&(this._rawValue=t,this._value=n?t:Pr(t),this.dep.trigger())}}function ut(e){return sr(e)?e.value:e}const m_={get:(e,t,r)=>t==="__v_raw"?e:ut(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const i=e[t];return sr(i)&&!sr(r)?(i.value=r,!0):Reflect.set(e,t,r,n)}};function h0(e){return oi(e)?e:new Proxy(e,m_)}class g_{constructor(t,r,n){this.fn=t,this.setter=r,this._value=void 0,this.dep=new Pd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=aa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Ot!==this)return t0(this,!0),!0}get value(){const t=this.dep.track();return i0(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function y_(e,t,r=!1){let n,i;return Je(e)?n=e:(n=e.get,i=e.set),new g_(n,i,r)}const no={},zo=new WeakMap;let Di;function b_(e,t=!1,r=Di){if(r){let n=zo.get(r);n||zo.set(r,n=[]),n.push(e)}}function v_(e,t,r=At){const{immediate:n,deep:i,once:s,scheduler:a,augmentJob:o,call:l}=r,d=E=>i?E:Br(E)||i===!1||i===0?zn(E,1):zn(E);let f,p,g,b,y=!1,x=!1;if(sr(e)?(p=()=>e.value,y=Br(e)):oi(e)?(p=()=>d(e),y=!0):Re(e)?(x=!0,y=e.some(E=>oi(E)||Br(E)),p=()=>e.map(E=>{if(sr(E))return E.value;if(oi(E))return d(E);if(Je(E))return l?l(E,2):E()})):Je(e)?t?p=l?()=>l(e,2):e:p=()=>{if(g){cn();try{g()}finally{fn()}}const E=Di;Di=f;try{return l?l(e,3,[b]):e(b)}finally{Di=E}}:p=un,t&&i){const E=p,O=i===!0?1/0:i;p=()=>zn(E(),O)}const T=Kw(),S=()=>{f.stop(),T&&T.active&&Ad(T.effects,f)};if(s&&t){const E=t;t=(...O)=>{try{return E(...O)}finally{S()}}}let $=x?new Array(e.length).fill(no):no;const I=E=>{if(!(!(f.flags&1)||!f.dirty&&!E))if(t){const O=f.run();if(E||i||y||(x?O.some((P,N)=>on(P,$[N])):on(O,$))){const P=Di;cn();try{g&&g(),Di=f;const N=[O,$===no?void 0:x&&$[0]===no?[]:$,b];$=O,l?l(t,3,N):t(...N)}finally{Di=P,fn()}}}else f.run()};return o&&o(I),f=new Jg(p),f.scheduler=a?()=>a(I,!1):I,b=E=>b_(E,!1,f),g=f.onStop=()=>{const E=zo.get(f);if(E){if(l)l(E,4);else for(const O of E)O();zo.delete(f)}},t?n?I(!0):$=f.run():a?a(I.bind(null,!0),!0):f.run(),S.pause=f.pause.bind(f),S.resume=f.resume.bind(f),S.stop=S,S}function zn(e,t=1/0,r){if(t<=0||!wt(e)||e.__v_skip||(r=r||new Map,(r.get(e)||0)>=t))return e;if(r.set(e,t),t--,sr(e))zn(e.value,t,r);else if(Re(e))for(let n=0;n<e.length;n++)zn(e[n],t,r);else if(Rn(e)||ai(e))e.forEach(n=>{zn(n,t,r)});else if(Gg(e)){for(const n in e)zn(e[n],t,r);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&zn(e[n],t,r)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function va(e,t,r,n){try{return n?e(...n):e()}catch(i){rl(i,t,r)}}function Dr(e,t,r,n){if(Je(e)){const i=va(e,t,r,n);return i&&Hg(i)&&i.catch(s=>{rl(s,t,r)}),i}if(Re(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Dr(e[s],t,r,n));return i}}function rl(e,t,r,n=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||At;if(t){let o=t.parent;const l=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${r}`;for(;o;){const f=o.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,l,d)===!1)return}o=o.parent}if(s){cn(),va(s,null,10,[e,l,d]),fn();return}}w_(e,r,i,n,a)}function w_(e,t,r,n=!0,i=!1){if(i)throw e;console.error(e)}const pr=[];let Hr=-1;const sn=[];let ri=null,ds=0;const m0=Promise.resolve();let Mo=null;function ii(e){const t=Mo||m0;return e?t.then(this?e.bind(this):e):t}function __(e){let t=Hr+1,r=pr.length;for(;t<r;){const n=t+r>>>1,i=pr[n],s=la(i);s<e||s===e&&i.flags&2?t=n+1:r=n}return t}function Ld(e){if(!(e.flags&1)){const t=la(e),r=pr[pr.length-1];!r||!(e.flags&2)&&t>=la(r)?pr.push(e):pr.splice(__(t),0,e),e.flags|=1,g0()}}function g0(){Mo||(Mo=m0.then(v0))}function x_(e){if(!Re(e))ri&&e.id===-1?ri.splice(ds+1,0,e):e.flags&1||(sn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)sn.push(e[t]);g0()}function y0(e,t,r,n=Hr+1){for(;n<pr.length;n++){const i=pr[n];if(i&&i.flags&2){if(e&&i.id!==e.uid||t!==void 0&&!(i.id>=t))continue;pr.splice(n,1),n=e?n-1:Hr,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function b0(e,t,r=0){if(sn.length){let n=sn,i=0;if(t){n=[];for(let a=0;a<sn.length;a++){const o=sn[a];(o.i!==void 0?!o.i||o.i.uid<r:t.has(o))?sn[i++]=o:n.push(o)}}const s=[...new Set(n)].sort((a,o)=>la(a)-la(o));if(sn.length=i,ri){for(let a=0;a<s.length;a++)ri.push(s[a]);return}for(ri=s,ds=0;ds<ri.length;ds++){const a=ri[ds];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}ri=null,ds=0}}let Fl=!1;function $_(e,t){if(Fl){e();return}const r=t===void 0?void 0:new Set(sn);e(),Fl=!0;try{y0(void 0,t),b0(void 0,r,t)}finally{Fl=!1}}const la=e=>e.id==null?e.flags&2?-1:1/0:e.id;function v0(e){try{for(Hr=0;Hr<pr.length;Hr++){const t=pr[Hr];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),va(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Hr<pr.length;Hr++){const t=pr[Hr];t&&(t.flags&=-2)}Hr=-1,pr.length=0,b0(),Mo=null,(pr.length||sn.length)&&v0()}}let Rr=null,w0=null;function Ro(e){const t=Rr;return Rr=e,w0=e&&e.type.__scopeId||null,t}function _0(e,t=Rr,r){if(!t||e._n)return e;const n=(...i)=>{n._d&&No(-1);const s=Ro(t),a=Hi.length;let o;try{o=e(...i)}finally{for(let l=Hi.length;l>a;l--)K0();Ro(s),n._d&&No(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function br(e,t){if(Rr===null)return e;const r=ll(Rr),n=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,o,l=At]=t[i];s&&(Je(s)&&(s={mounted:s,updated:s}),s.deep&&zn(a),n.push({dir:s,instance:r,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function Ei(e,t,r,n){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(cn(),Dr(l,r,8,[e.el,o,e,t]),fn())}}function S_(e,t){if(hr){let r=hr.provides;const n=hr.parent&&hr.parent.provides;n===r&&(r=hr.provides=Object.create(n)),r[e]=t}}function To(e,t,r=!1){const n=Q0();if(n||ps){let i=ps?ps._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return r&&Je(t)?t.call(n&&n.proxy):t}}const k_=Symbol.for("v-scx"),T_=()=>To(k_);function Co(e,t,r){return x0(e,t,r)}function x0(e,t,r=At){const{immediate:n,deep:i,flush:s,once:a}=r,o=Kt({},r),l=t&&n||!t&&s!=="post";let d;if(pa){if(s==="sync"){const b=T_();d=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=un,b.resume=un,b.pause=un,b}}const f=hr;o.call=(b,y,x)=>Dr(b,f,y,x);let p=!1;s==="post"?o.scheduler=b=>{b.i=f,yr(b,f&&f.suspense)}:s!=="sync"&&(p=!0,o.scheduler=(b,y)=>{y?b():Ld(b)}),o.augmentJob=b=>{t&&(b.flags|=4),p&&(b.flags|=2,f&&(b.id=f.uid,b.i=f))};const g=v_(e,t,o);return pa&&(d?d.push(g):l&&g()),g}function C_(e,t,r){const n=this.proxy,i=Ut(e)?e.includes(".")?$0(n,e):()=>n[e]:e.bind(n,n);let s;Je(t)?s=t:(s=t.handler,r=t);const a=xa(this),o=x0(i,s.bind(n),r);return a(),o}function $0(e,t){const r=t.split(".");return()=>{let n=e;for(let i=0;i<r.length&&n;i++)n=n[r[i]];return n}}const E_=Symbol("_vte"),nl=e=>e.__isTeleport,Mr=Symbol("_leaveCb"),zs=Symbol("_enterCb");function I_(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _a(()=>{e.isMounted=!0}),A0(()=>{e.isUnmounting=!0}),e}const Or=[Function,Array],S0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Or,onEnter:Or,onAfterEnter:Or,onEnterCancelled:Or,onBeforeLeave:Or,onLeave:Or,onAfterLeave:Or,onLeaveCancelled:Or,onBeforeAppear:Or,onAppear:Or,onAfterAppear:Or,onAppearCancelled:Or},A_={name:"BaseTransition",props:S0,setup(e,{slots:t}){const r=Q0(),n=I_();return()=>{const i=t.default&&C0(t.default(),!0),s=i&&i.length?k0(i):r.subTree?Wt():void 0;if(!s)return;const a=bt(e),{mode:o}=a;if(n.isLeaving)return jl(s);const l=Bo(s);if(!l)return jl(s);let d=nd(l,a,n,r,p=>d=p);l.type!==ir&&ms(l,d);let f=r.subTree&&Bo(r.subTree);if(f&&f.type!==ir&&!Ni(f,l)&&ua(r.subTree)){let p=nd(f,a,n,r);if(ms(f,p),o==="out-in"&&l.type!==ir)return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,r.job.flags&8||r.update(),delete p.afterLeave,f=void 0},jl(s);o==="in-out"&&l.type!==ir?p.delayLeave=(g,b,y)=>{const x=T0(n,f);x[String(f.key)]=f,g[Mr]=()=>{b(),g[Mr]=void 0,delete d.delayedLeave,f=void 0},d.delayedLeave=()=>{y(),delete d.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return s}}};function k0(e){let t=e[0];if(e.length>1){for(const r of e)if(r.type!==ir){t=r;break}}return t}const O_=A_;function T0(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function nd(e,t,r,n,i){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:d,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:b,onAfterLeave:y,onLeaveCancelled:x,onBeforeAppear:T,onAppear:S,onAfterAppear:$,onAppearCancelled:I}=t,E=String(e.key),O=T0(r,e),P=(V,Q)=>{V&&Dr(V,n,9,Q)},N=(V,Q)=>{const de=Q[1];P(V,Q),Re(V)?V.every(K=>K.length<=1)&&de():V.length<=1&&de()},C={mode:a,persisted:o,beforeEnter(V){let Q=l;if(!r.isMounted)if(s)Q=T||l;else return;V[Mr]&&V[Mr](!0);const de=O[E];if(de&&Ni(e,de)){let K=de.el[Mr];if(!K){const ue=ua(de);K=ue&&ue.el[Mr]}K&&K()}P(Q,[V])},enter(V){if(O[E]===e)return;let Q=d,de=f,K=p;if(!r.isMounted)if(s)Q=S||d,de=$||f,K=I||p;else return;let ue=!1;V[zs]=te=>{ue||(ue=!0,te?P(K,[V]):P(de,[V]),C.delayedLeave&&C.delayedLeave(),V[zs]=void 0)};const H=V[zs].bind(null,!1);Q?N(Q,[V,H]):H()},leave(V,Q){const de=String(e.key);if(V[zs]&&V[zs](!0),r.isUnmounting)return Q();P(g,[V]);let K=!1;V[Mr]=H=>{K||(K=!0,Q(),H?P(x,[V]):P(y,[V]),V[Mr]=void 0,O[de]===e&&delete O[de])};const ue=V[Mr].bind(null,!1);O[de]=e,b?N(b,[V,ue]):ue()},clone(V){const Q=nd(V,t,r,n,i);return i&&i(Q),Q}};return C}function jl(e){if(il(e))return e=ui(e),e.children=null,e}function Bo(e){if(!il(e))return nl(e.type)&&e.children?k0(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:r}=e;if(r){if(t&16)return r[0];if(t&32&&Je(r.default))return r.default()}}function ms(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const r=e.component.subTree;ms(nl(r.type)&&Bo(r)||r,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===Ft&&Re(e.children)){const r=B0(e.children,!1);r&&ms(r,t)}}function C0(e,t=!1,r){let n=[],i=0;for(let s=0;s<e.length;s++){let a=e[s];const o=r==null?a.key:String(r)+String(a.key!=null?a.key:s);a.type===Ft?(a.patchFlag&128&&i++,n=n.concat(C0(a.children,t,o))):(t||a.type!==ir)&&n.push(o!=null?ui(a,{key:o}):a)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function ua(e){if(e.component)return ua(e.component.subTree);if(e.type===Ft){const t=Re(e.children)&&B0(e.children,!1);return t?ua(t):void 0}if(e.type!==ir)return e}function wa(e,t){return Je(e)?Kt({name:e.name},t,{setup:e}):e}function E0(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function kf(e,t){let r;return!!((r=Object.getOwnPropertyDescriptor(e,t))&&!r.configurable)}const Po=new WeakMap;function ta(e,t,r,n,i=!1){if(Re(e)){e.forEach((x,T)=>ta(x,t&&(Re(t)?t[T]:t),r,n,i));return}if(ra(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&ta(e,t,r,n.component.subTree);return}const s=n.shapeFlag&4?ll(n.component):n.el,a=i?null:s,{i:o,r:l}=e,d=t&&t.r,f=o.refs===At?o.refs={}:o.refs,p=o.setupState,g=bt(p),b=p===At?Vg:x=>kf(f,x)?!1:vt(g,x),y=(x,T)=>!(T&&kf(f,T));if(d!=null&&d!==l){if(Tf(t),Ut(d))f[d]=null,b(d)&&(p[d]=null);else if(sr(d)){const x=t;y(d,x.k)&&(d.value=null),x.k&&(f[x.k]=null)}}if(Je(l))va(l,o,12,[a,f]);else{const x=Ut(l),T=sr(l);if(x||T){const S=()=>{if(e.f){const $=x?b(l)?p[l]:f[l]:y()||!e.k?l.value:f[e.k];if(i)Re($)&&Ad($,s);else if(Re($))$.includes(s)||$.push(s);else if(x)f[l]=[s],b(l)&&(p[l]=f[l]);else{const I=[s];y(l,e.k)&&(l.value=I),e.k&&(f[e.k]=I)}}else x?(f[l]=a,b(l)&&(p[l]=a)):T&&(y(l,e.k)&&(l.value=a),e.k&&(f[e.k]=a))};if(a){const $=()=>{S(),Po.delete(e)};$.id=-1,Po.set(e,$),yr($,r)}else Tf(e),S()}}}function Tf(e){const t=Po.get(e);t&&(t.flags|=8,Po.delete(e))}el().requestIdleCallback;el().cancelIdleCallback;const ra=e=>!!e.type.__asyncLoader,il=e=>e.type.__isKeepAlive;function z_(e,t){I0(e,"a",t)}function M_(e,t){I0(e,"da",t)}function I0(e,t,r=hr){const n=e.__wdc||(e.__wdc=()=>{let i=r;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(sl(t,n,r),r){let i=r.parent;for(;i&&i.parent;)il(i.parent.vnode)&&R_(n,t,r,i),i=i.parent}}function R_(e,t,r,n){const i=sl(t,e,n,!0);Fd(()=>{Ad(n[t],i)},r)}function sl(e,t,r=hr,n=!1){if(r){const i=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...a)=>{cn();const o=xa(r),l=Dr(t,r,e,a);return o(),fn(),l});return n?i.unshift(s):i.push(s),s}}const Pn=e=>(t,r=hr)=>{(!pa||e==="sp")&&sl(e,(...n)=>t(...n),r)},B_=Pn("bm"),_a=Pn("m"),P_=Pn("bu"),D_=Pn("u"),A0=Pn("bum"),Fd=Pn("um"),N_=Pn("sp"),U_=Pn("rtg"),L_=Pn("rtc");function F_(e,t=hr){sl("ec",e,t)}const j_=Symbol.for("v-ndc");function gs(e,t,r,n){let i;const s=r,a=Re(e);if(a||Ut(e)){const o=a&&oi(e);let l=!1,d=!1;o&&(l=!Br(e),d=pn(e),e=tl(e)),i=new Array(e.length);for(let f=0,p=e.length;f<p;f++)i[f]=t(l?d?li(Pr(e[f])):Pr(e[f]):e[f],f,void 0,s)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)i=[];else{i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s)}else if(wt(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,d=o.length;l<d;l++){const f=o[l];i[l]=t(e[f],f,l,s)}}else i=[];return i}const id=e=>e?J0(e)?ll(e):id(e.parent):null,na=Kt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>id(e.parent),$root:e=>id(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>z0(e),$forceUpdate:e=>e.f||(e.f=()=>{Ld(e.update)}),$nextTick:e=>e.n||(e.n=ii.bind(e.proxy)),$watch:e=>C_.bind(e)}),Wl=(e,t)=>e!==At&&!e.__isScriptSetup&&vt(e,t),W_={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:n,data:i,props:s,accessCache:a,type:o,appContext:l}=e;if(t[0]!=="$"){const g=a[t];if(g!==void 0)switch(g){case 1:return n[t];case 2:return i[t];case 4:return r[t];case 3:return s[t]}else{if(Wl(n,t))return a[t]=1,n[t];if(i!==At&&vt(i,t))return a[t]=2,i[t];if(vt(s,t))return a[t]=3,s[t];if(r!==At&&vt(r,t))return a[t]=4,r[t];sd&&(a[t]=0)}}const d=na[t];let f,p;if(d)return t==="$attrs"&&nr(e.attrs,"get",""),d(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(r!==At&&vt(r,t))return a[t]=4,r[t];if(p=l.config.globalProperties,vt(p,t))return p[t]},set({_:e},t,r){const{data:n,setupState:i,ctx:s}=e;return Wl(i,t)?(i[t]=r,!0):n!==At&&vt(n,t)?(n[t]=r,!0):vt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:i,props:s,type:a}},o){let l;return!!(r[o]||e!==At&&o[0]!=="$"&&vt(e,o)||Wl(t,o)||vt(s,o)||vt(n,o)||vt(na,o)||vt(i.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:vt(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function Cf(e){return Re(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let sd=!0;function V_(e){const t=z0(e),r=e.proxy,n=e.ctx;sd=!1,t.beforeCreate&&Ef(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:d,created:f,beforeMount:p,mounted:g,beforeUpdate:b,updated:y,activated:x,deactivated:T,beforeDestroy:S,beforeUnmount:$,destroyed:I,unmounted:E,render:O,renderTracked:P,renderTriggered:N,errorCaptured:C,serverPrefetch:V,expose:Q,inheritAttrs:de,components:K,directives:ue,filters:H}=t;if(d&&H_(d,n,null),a)for(const ce in a){const ge=a[ce];Je(ge)&&(n[ce]=ge.bind(r))}if(i){const ce=i.call(r,r);wt(ce)&&(e.data=Vi(ce))}if(sd=!0,s)for(const ce in s){const ge=s[ce],ae=Je(ge)?ge.bind(r,r):Je(ge.get)?ge.get.bind(r,r):un,Ie=!Je(ge)&&Je(ge.set)?ge.set.bind(r):un,ne=ia({get:ae,set:Ie});Object.defineProperty(n,ce,{enumerable:!0,configurable:!0,get:()=>ne.value,set:xe=>ne.value=xe})}if(o)for(const ce in o)O0(o[ce],n,r,ce);if(l){const ce=Je(l)?l.call(r):l;Reflect.ownKeys(ce).forEach(ge=>{S_(ge,ce[ge])})}f&&Ef(f,e,"c");function he(ce,ge){Re(ge)?ge.forEach(ae=>ce(ae.bind(r))):ge&&ce(ge.bind(r))}if(he(B_,p),he(_a,g),he(P_,b),he(D_,y),he(z_,x),he(M_,T),he(F_,C),he(L_,P),he(U_,N),he(A0,$),he(Fd,E),he(N_,V),Re(Q))if(Q.length){const ce=e.exposed||(e.exposed={});Q.forEach(ge=>{Object.defineProperty(ce,ge,{get:()=>r[ge],set:ae=>r[ge]=ae,enumerable:!0})})}else e.exposed||(e.exposed={});O&&e.render===un&&(e.render=O),de!=null&&(e.inheritAttrs=de),K&&(e.components=K),ue&&(e.directives=ue),V&&E0(e)}function H_(e,t,r=un){Re(e)&&(e=ad(e));for(const n in e){const i=e[n];let s;wt(i)?"default"in i?s=To(i.from||n,i.default,!0):s=To(i.from||n):s=To(i),sr(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[n]=s}}function Ef(e,t,r){Dr(Re(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function O0(e,t,r,n){let i=n.includes(".")?$0(r,n):()=>r[n];if(Ut(e)){const s=t[e];Je(s)&&Co(i,s)}else if(Je(e))Co(i,e.bind(r));else if(wt(e))if(Re(e))e.forEach(s=>O0(s,t,r,n));else{const s=Je(e.handler)?e.handler.bind(r):t[e.handler];Je(s)&&Co(i,s,e)}}function z0(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!r&&!n?l=t:(l={},i.length&&i.forEach(d=>Do(l,d,a,!0)),Do(l,t,a)),wt(t)&&s.set(t,l),l}function Do(e,t,r,n=!1){const{mixins:i,extends:s}=t;s&&Do(e,s,r,!0),i&&i.forEach(a=>Do(e,a,r,!0));for(const a in t)if(!(n&&a==="expose")){const o=q_[a]||r&&r[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const q_={data:If,props:Af,emits:Af,methods:qs,computed:qs,beforeCreate:fr,created:fr,beforeMount:fr,mounted:fr,beforeUpdate:fr,updated:fr,beforeDestroy:fr,beforeUnmount:fr,destroyed:fr,unmounted:fr,activated:fr,deactivated:fr,errorCaptured:fr,serverPrefetch:fr,components:qs,directives:qs,watch:K_,provide:If,inject:G_};function If(e,t){return t?e?function(){return Kt(Je(e)?e.call(this,this):e,Je(t)?t.call(this,this):t)}:t:e}function G_(e,t){return qs(ad(e),ad(t))}function ad(e){if(Re(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function fr(e,t){return e?[...new Set([].concat(e,t))]:t}function qs(e,t){return e?Kt(Object.create(null),e,t):t}function Af(e,t){return e?Re(e)&&Re(t)?[...new Set([...e,...t])]:Kt(Object.create(null),Cf(e),Cf(t??{})):t}function K_(e,t){if(!e)return t;if(!t)return e;const r=Kt(Object.create(null),e);for(const n in t)r[n]=fr(e[n],t[n]);return r}function M0(){return{app:null,config:{isNativeTag:Vg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let X_=0;function Y_(e,t){return function(n,i=null){Je(n)||(n=Kt({},n)),i!=null&&!wt(i)&&(i=null);const s=M0(),a=new WeakSet,o=[];let l=!1;const d=s.app={_uid:X_++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:C2,get config(){return s.config},set config(f){},use(f,...p){return a.has(f)||(f&&Je(f.install)?(a.add(f),f.install(d,...p)):Je(f)&&(a.add(f),f(d,...p))),d},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),d},component(f,p){return p?(s.components[f]=p,d):s.components[f]},directive(f,p){return p?(s.directives[f]=p,d):s.directives[f]},mount(f,p,g){if(!l){const b=d._ceVNode||qe(n,i);return b.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),e(b,f,g),l=!0,d._container=f,f.__vue_app__=d,ll(b.component)}},onUnmount(f){o.push(f)},unmount(){l&&(Dr(o,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,p){return s.provides[f]=p,d},runWithContext(f){const p=ps;ps=d;try{return f()}finally{ps=p}}};return d}}let ps=null;const Z_=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Kr(t)}Modifiers`]||e[`${ci(t)}Modifiers`];function Q_(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||At;let i=r;const s=t.startsWith("update:"),a=s&&Z_(n,t.slice(7));a&&(a.trim&&(i=r.map(f=>Ut(f)?f.trim():f)),a.number&&(i=i.map(Jo)));let o,l=n[o=Pl(t)]||n[o=Pl(Kr(t))];!l&&s&&(l=n[o=Pl(ci(t))]),l&&Dr(l,e,6,i);const d=n[o+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Dr(d,e,6,i)}}const J_=new WeakMap;function R0(e,t,r=!1){const n=r?J_:t.emitsCache,i=n.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!Je(e)){const l=d=>{const f=R0(d,t,!0);f&&(o=!0,Kt(a,f))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(wt(e)&&n.set(e,null),null):(Re(s)?s.forEach(l=>a[l]=null):Kt(a,s),wt(e)&&n.set(e,a),a)}function al(e,t){return!e||!Yo(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),vt(e,t[0].toLowerCase()+t.slice(1))||vt(e,ci(t))||vt(e,t))}function Of(e){const{type:t,vnode:r,proxy:n,withProxy:i,propsOptions:[s],slots:a,attrs:o,emit:l,render:d,renderCache:f,props:p,data:g,setupState:b,ctx:y,inheritAttrs:x}=e,T=Ro(e);let S,$;try{if(r.shapeFlag&4){const E=i||n,O=E;S=an(d.call(O,E,f,p,b,g,y)),$=o}else{const E=t;S=an(E.length>1?E(p,{attrs:o,slots:a,emit:l}):E(p,null)),$=t.props?o:e2(o)}}catch(E){Hi.length=0,rl(E,e,1),S=qe(ir)}let I=S;if($&&x!==!1){const E=Object.keys($),{shapeFlag:O}=I;E.length&&O&7&&(s&&E.some(Zo)&&($=t2($,s)),I=ui(I,$,!1,!0))}if(r.dirs&&(I=ui(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(r.dirs):r.dirs),r.transition){const E=nl(I.type)&&Bo(I)||I;ms(E,r.transition)}return S=I,Ro(T),S}function B0(e,t=!0){let r;for(let n=0;n<e.length;n++){const i=e[n];if(ca(i)){if(i.type!==ir||i.children==="v-if"){if(r)return;r=i}}else return}return r}const e2=e=>{let t;for(const r in e)(r==="class"||r==="style"||Yo(r))&&((t||(t={}))[r]=e[r]);return t},t2=(e,t)=>{const r={};for(const n in e)(!Zo(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function r2(e,t,r){const{props:n,children:i,component:s}=e,{props:a,children:o,patchFlag:l}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?zf(n,a,d):!!a;if(l&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(P0(a,n,g)&&!al(d,g))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?zf(n,a,d):!0:!!a;return!1}function zf(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(!vt(e,s)||P0(t,e,s)&&!al(r,s))return!0}return!1}function P0(e,t,r){const n=e[r],i=t[r];return r==="style"&&wt(n)&&wt(i)?!Bn(n,i):n!==i}function n2({vnode:e,parent:t,suspense:r},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=n,e=i),i===e)(e=t.vnode).el=n,t=t.parent;else break}r&&r.activeBranch===e&&(r.vnode.el=n)}const D0={},N0=()=>Object.create(D0),U0=e=>Object.getPrototypeOf(e)===D0;function i2(e,t,r,n=!1){const i={},s=N0();e.propsDefaults=Object.create(null),L0(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);r?e.props=n?i:c_(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function s2(e,t,r,n){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=bt(i),[l]=e.propsOptions;let d=!1;if((n||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(al(e.emitsOptions,g))continue;const b=t[g];if(l)if(vt(s,g))b!==s[g]&&(s[g]=b,d=!0);else{const y=Kr(g);i[y]=od(l,o,y,b,e,!1)}else b!==s[g]&&(s[g]=b,d=!0)}}}else{L0(e,t,i,s)&&(d=!0);let f;for(const p in o)(!t||!vt(t,p)&&((f=ci(p))===p||!vt(t,f)))&&(l?r&&(r[p]!==void 0||r[f]!==void 0)&&(i[p]=od(l,o,p,void 0,e,!0)):delete i[p]);if(s!==o)for(const p in s)(!t||!vt(t,p))&&(delete s[p],d=!0)}d&&On(e.attrs,"set","")}function L0(e,t,r,n){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(Qs(l))continue;const d=t[l];let f;i&&vt(i,f=Kr(l))?!s||!s.includes(f)?r[f]=d:(o||(o={}))[f]=d:al(e.emitsOptions,l)||(!(l in n)||d!==n[l])&&(n[l]=d,a=!0)}if(s){const l=bt(r),d=o||At;for(let f=0;f<s.length;f++){const p=s[f];r[p]=od(i,l,p,d[p],e,!vt(d,p))}}return a}function od(e,t,r,n,i,s){const a=e[r];if(a!=null){const o=vt(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Je(l)){const{propsDefaults:d}=i;if(r in d)n=d[r];else{const f=xa(i);n=d[r]=l.call(null,t),f()}}else n=l;i.ce&&i.ce._setProp(r,n)}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===ci(r))&&(n=!0))}return n}const a2=new WeakMap;function F0(e,t,r=!1){const n=r?a2:t.propsCache,i=n.get(e);if(i)return i;const s=e.props,a={},o=[];let l=!1;if(!Je(e)){const f=p=>{l=!0;const[g,b]=F0(p,t,!0);Kt(a,g),b&&o.push(...b)};!r&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!l)return wt(e)&&n.set(e,ji),ji;if(Re(s))for(let f=0;f<s.length;f++){const p=Kr(s[f]);Mf(p)&&(a[p]=At)}else if(s)for(const f in s){const p=Kr(f);if(Mf(p)){const g=s[f],b=a[p]=Re(g)||Je(g)?{type:g}:Kt({},g),y=b.type;let x=!1,T=!0;if(Re(y))for(let S=0;S<y.length;++S){const $=y[S],I=Je($)&&$.name;if(I==="Boolean"){x=!0;break}else I==="String"&&(T=!1)}else x=Je(y)&&y.name==="Boolean";b[0]=x,b[1]=T,(x||vt(b,"default"))&&o.push(p)}}const d=[a,o];return wt(e)&&n.set(e,d),d}function Mf(e){return e[0]!=="$"&&!Qs(e)}const jd=e=>e==="_"||e==="_ctx"||e==="$stable",Wd=e=>Re(e)?e.map(an):[an(e)],o2=(e,t,r)=>{if(t._n)return t;const n=_0((...i)=>Wd(t(...i)),r);return n._c=!1,n},j0=(e,t,r)=>{const n=e._ctx;for(const i in e){if(jd(i))continue;const s=e[i];if(Je(s))t[i]=o2(i,s,n);else if(s!=null){const a=Wd(s);t[i]=()=>a}}},W0=(e,t)=>{const r=Wd(t);e.slots.default=()=>r},V0=(e,t,r)=>{for(const n in t)(r||!jd(n))&&(e[n]=t[n])},l2=(e,t,r)=>{const n=e.slots=N0();if(e.vnode.shapeFlag&32){const i=t._;i?(V0(n,t,r),r&&Xg(n,"_",i,!0)):j0(t,n)}else t&&W0(e,t)},u2=(e,t,r)=>{const{vnode:n,slots:i}=e;let s=!0,a=At;if(n.shapeFlag&32){const o=t._;o?r&&o===1?s=!1:V0(i,t,r):(s=!t.$stable,j0(t,i)),a=t}else t&&(W0(e,t),a={default:1});if(s)for(const o in i)!jd(o)&&a[o]==null&&delete i[o]},yr=h2;function d2(e){return c2(e)}function c2(e,t){const r=el();r.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:d,setElementText:f,parentNode:p,nextSibling:g,setScopeId:b=un,insertStaticContent:y}=e,x=(z,L,q,Z=null,se=null,oe=null,ye=void 0,me=null,be=!!L.dynamicChildren)=>{if(z===L)return;z&&!Ni(z,L)&&(Z=We(z),xe(z,se,oe,!0),z=null),L.patchFlag===-2&&(be=!1,L.dynamicChildren=null),L.dynamicChildren&&z&&z.dynamicChildren&&z.dynamicChildren.hasOnce&&(L.dynamicChildren===ji&&(L.dynamicChildren=[]),L.dynamicChildren.hasOnce=!0);const{type:le,ref:Ce,shapeFlag:ve}=L;switch(le){case ol:T(z,L,q,Z);break;case ir:S(z,L,q,Z);break;case Eo:z==null&&$(L,q,Z,ye);break;case Ft:K(z,L,q,Z,se,oe,ye,me,be);break;default:ve&1?O(z,L,q,Z,se,oe,ye,me,be):ve&6?ue(z,L,q,Z,se,oe,ye,me,be):(ve&64||ve&128)&&le.process(z,L,q,Z,se,oe,ye,me,be,Ne)}Ce!=null&&se?ta(Ce,z&&z.ref,oe,L||z,!L):Ce==null&&z&&z.ref!=null&&ta(z.ref,null,oe,z,!0)},T=(z,L,q,Z)=>{if(z==null)n(L.el=o(L.children),q,Z);else{const se=L.el=z.el;L.children!==z.children&&d(se,L.children)}},S=(z,L,q,Z)=>{z==null?n(L.el=l(L.children||""),q,Z):L.el=z.el},$=(z,L,q,Z)=>{[z.el,z.anchor]=y(z.children,L,q,Z,z.el,z.anchor)},I=({el:z,anchor:L},q,Z)=>{let se;for(;z&&z!==L;)se=g(z),n(z,q,Z),z=se;n(L,q,Z)},E=({el:z,anchor:L})=>{let q;for(;z&&z!==L;)q=g(z),i(z),z=q;i(L)},O=(z,L,q,Z,se,oe,ye,me,be)=>{if(L.type==="svg"?ye="svg":L.type==="math"&&(ye="mathml"),z==null)P(L,q,Z,se,oe,ye,me,be);else{const le=z.el&&z.el._isVueCE?z.el:null;try{le&&le._beginPatch(),V(z,L,se,oe,ye,me,be)}finally{le&&le._endPatch()}}},P=(z,L,q,Z,se,oe,ye,me)=>{let be,le;const{props:Ce,shapeFlag:ve,transition:Oe,dirs:Me}=z;if(be=z.el=a(z.type,oe,Ce&&Ce.is,Ce),ve&8?f(be,z.children):ve&16&&C(z.children,be,null,Z,se,Vl(z,oe),ye,me),Me&&Ei(z,null,Z,"created"),N(be,z,z.scopeId,ye,Z),Ce){for(const Ve in Ce)Ve!=="value"&&!Qs(Ve)&&s(be,Ve,null,Ce[Ve],oe,Z);"value"in Ce&&s(be,"value",null,Ce.value,oe),(le=Ce.onVnodeBeforeMount)&&tn(le,Z,z)}Me&&Ei(z,null,Z,"beforeMount");const tt=f2(se,Oe);tt&&Oe.beforeEnter(be),n(be,L,q),((le=Ce&&Ce.onVnodeMounted)||tt||Me)&&yr(()=>{try{le&&tn(le,Z,z),tt&&Oe.enter(be),Me&&Ei(z,null,Z,"mounted")}finally{}},se)},N=(z,L,q,Z,se)=>{if(q&&b(z,q),Z)for(let oe=0;oe<Z.length;oe++)b(z,Z[oe]);if(se){let oe=se.subTree;if(L===oe||G0(oe.type)&&(oe.ssContent===L||oe.ssFallback===L)){const ye=se.vnode;N(z,ye,ye.scopeId,ye.slotScopeIds,se.parent)}}},C=(z,L,q,Z,se,oe,ye,me,be=0)=>{for(let le=be;le<z.length;le++){const Ce=z[le]=me?In(z[le]):an(z[le]);x(null,Ce,L,q,Z,se,oe,ye,me)}},V=(z,L,q,Z,se,oe,ye)=>{const me=L.el=z.el;let{patchFlag:be,dynamicChildren:le,dirs:Ce}=L;be|=z.patchFlag&16;const ve=z.props||At,Oe=L.props||At;let Me;if(q&&Ii(q,!1),(Me=Oe.onVnodeBeforeUpdate)&&tn(Me,q,L,z),Ce&&Ei(L,z,q,"beforeUpdate"),q&&Ii(q,!0),le&&(!z.dynamicChildren||z.dynamicChildren.length!==le.length)&&(be=0,ye=!1,le=null),(ve.innerHTML&&Oe.innerHTML==null||ve.textContent&&Oe.textContent==null)&&f(me,""),le?Q(z.dynamicChildren,le,me,q,Z,Vl(L,se),oe):ye||ge(z,L,me,null,q,Z,Vl(L,se),oe,!1),be>0){if(be&16)de(me,ve,Oe,q,se);else if(be&2&&ve.class!==Oe.class&&s(me,"class",null,Oe.class,se),be&4&&s(me,"style",ve.style,Oe.style,se),be&8){const tt=L.dynamicProps;for(let Ve=0;Ve<tt.length;Ve++){const lt=tt[Ve],yt=ve[lt],kt=Oe[lt];(kt!==yt||lt==="value")&&s(me,lt,yt,kt,se,q)}}be&1&&z.children!==L.children&&f(me,L.children)}else!ye&&le==null&&de(me,ve,Oe,q,se);((Me=Oe.onVnodeUpdated)||Ce)&&yr(()=>{Me&&tn(Me,q,L,z),Ce&&Ei(L,z,q,"updated")},Z)},Q=(z,L,q,Z,se,oe,ye)=>{for(let me=0;me<L.length;me++){const be=z[me],le=L[me],Ce=be.el||ld(be),ve=Ce&&(be.type===Ft||!Ni(be,le)||be.shapeFlag&198)?p(Ce):q;x(be,le,ve,null,Z,se,oe,ye,!0)}},de=(z,L,q,Z,se)=>{if(L!==q){if(L!==At)for(const oe in L)!Qs(oe)&&!(oe in q)&&s(z,oe,L[oe],null,se,Z);for(const oe in q){if(Qs(oe))continue;const ye=q[oe],me=L[oe];ye!==me&&oe!=="value"&&s(z,oe,me,ye,se,Z)}"value"in q&&s(z,"value",L.value,q.value,se)}},K=(z,L,q,Z,se,oe,ye,me,be)=>{const le=L.el=z?z.el:o(""),Ce=L.anchor=z?z.anchor:o("");let{patchFlag:ve,dynamicChildren:Oe,slotScopeIds:Me}=L;Me&&(me=me?me.concat(Me):Me),z==null?(n(le,q,Z),n(Ce,q,Z),C(L.children||[],q,Ce,se,oe,ye,me,be)):ve>0&&ve&64&&Oe&&z.dynamicChildren&&z.dynamicChildren.length===Oe.length?(Q(z.dynamicChildren,Oe,q,se,oe,ye,me),(L.key!=null||se&&L===se.subTree)&&H0(z,L,!0)):ge(z,L,q,Ce,se,oe,ye,me,be)},ue=(z,L,q,Z,se,oe,ye,me,be)=>{L.slotScopeIds=me,z==null?L.shapeFlag&512?se.ctx.activate(L,q,Z,ye,be):H(L,q,Z,se,oe,ye,be):te(z,L,be)},H=(z,L,q,Z,se,oe,ye)=>{const me=z.component=_2(z,Z,se);if(il(z)&&(me.ctx.renderer=Ne),x2(me,!1,ye),me.asyncDep){if(se&&se.registerDep(me,he,ye,oe),!z.el){const be=me.subTree=qe(ir);S(null,be,L,q),z.placeholder=be.el}}else he(me,z,L,q,se,oe,ye)},te=(z,L,q)=>{const Z=L.component=z.component;if(r2(z,L,q))if(Z.asyncDep&&!Z.asyncResolved){L.el=z.el,L.placeholder=z.placeholder,ce(Z,L,q);return}else Z.next=L,Z.update();else L.el=z.el,L.placeholder=z.placeholder,Z.vnode=L},he=(z,L,q,Z,se,oe,ye)=>{const me=()=>{if(z.isMounted){let{next:ve,bu:Oe,u:Me,parent:tt,vnode:Ve}=z;{const Bt=q0(z);if(Bt){ve&&(ve.el=Ve.el,ce(z,ve,ye)),Bt.asyncDep.then(()=>{yr(()=>{z.isUnmounted||le()},se)});return}}let lt=ve,yt;Ii(z,!1),ve?(ve.el=Ve.el,ce(z,ve,ye)):ve=Ve,Oe&&ko(Oe),(yt=ve.props&&ve.props.onVnodeBeforeUpdate)&&tn(yt,tt,ve,Ve),Ii(z,!0);const kt=Of(z),er=z.subTree;z.subTree=kt,x(er,kt,p(er.el),We(er),z,se,oe),ve.el=kt.el,lt===null&&n2(z,kt.el),Me&&yr(Me,se),(yt=ve.props&&ve.props.onVnodeUpdated)&&yr(()=>tn(yt,tt,ve,Ve),se)}else{let ve;const{el:Oe,props:Me}=L,{bm:tt,m:Ve,parent:lt,root:yt,type:kt}=z,er=ra(L);Ii(z,!1),tt&&ko(tt),!er&&(ve=Me&&Me.onVnodeBeforeMount)&&tn(ve,lt,L),Ii(z,!0);{yt.ce&&yt.ce._hasShadowRoot()&&yt.ce._injectChildStyle(kt,z.parent?z.parent.type:void 0);const Bt=z.subTree=Of(z);x(null,Bt,q,Z,z,se,oe),L.el=Bt.el}if(Ve&&yr(Ve,se),!er&&(ve=Me&&Me.onVnodeMounted)){const Bt=L;yr(()=>tn(ve,lt,Bt),se)}(L.shapeFlag&256||lt&&ra(lt.vnode)&&lt.vnode.shapeFlag&256)&&z.a&&yr(z.a,se),z.isMounted=!0,L=q=Z=null}};z.scope.on();const be=z.effect=new Jg(me);z.scope.off();const le=z.update=be.run.bind(be),Ce=z.job=be.runIfDirty.bind(be);Ce.i=z,Ce.id=z.uid,be.scheduler=()=>Ld(Ce),Ii(z,!0),le()},ce=(z,L,q)=>{L.component=z;const Z=z.vnode.props;z.vnode=L,z.next=null,s2(z,L.props,Z,q),u2(z,L.children,q),cn(),y0(z),fn()},ge=(z,L,q,Z,se,oe,ye,me,be=!1)=>{const le=z&&z.children,Ce=z?z.shapeFlag:0,ve=L.children,{patchFlag:Oe,shapeFlag:Me}=L;if(Oe>0){if(Oe&128){Ie(le,ve,q,Z,se,oe,ye,me,be);return}else if(Oe&256){ae(le,ve,q,Z,se,oe,ye,me,be);return}}Me&8?(Ce&16&&Fe(le,se,oe),ve!==le&&f(q,ve)):Ce&16?Me&16?Ie(le,ve,q,Z,se,oe,ye,me,be):Fe(le,se,oe,!0):(Ce&8&&f(q,""),Me&16&&C(ve,q,Z,se,oe,ye,me,be))},ae=(z,L,q,Z,se,oe,ye,me,be)=>{z=z||ji,L=L||ji;const le=z.length,Ce=L.length,ve=Math.min(le,Ce);let Oe;for(Oe=0;Oe<ve;Oe++){const Me=L[Oe]=be?In(L[Oe]):an(L[Oe]);x(z[Oe],Me,q,null,se,oe,ye,me,be)}le>Ce?Fe(z,se,oe,!0,!1,ve):C(L,q,Z,se,oe,ye,me,be,ve)},Ie=(z,L,q,Z,se,oe,ye,me,be)=>{let le=0;const Ce=L.length;let ve=z.length-1,Oe=Ce-1;for(;le<=ve&&le<=Oe;){const Me=z[le],tt=L[le]=be?In(L[le]):an(L[le]);if(Ni(Me,tt))x(Me,tt,q,null,se,oe,ye,me,be);else break;le++}for(;le<=ve&&le<=Oe;){const Me=z[ve],tt=L[Oe]=be?In(L[Oe]):an(L[Oe]);if(Ni(Me,tt))x(Me,tt,q,null,se,oe,ye,me,be);else break;ve--,Oe--}if(le>ve){if(le<=Oe){const Me=Oe+1,tt=Me<Ce?L[Me].el:Z;for(;le<=Oe;)x(null,L[le]=be?In(L[le]):an(L[le]),q,tt,se,oe,ye,me,be),le++}}else if(le>Oe)for(;le<=ve;)xe(z[le],se,oe,!0),le++;else{const Me=le,tt=le,Ve=new Map;for(le=tt;le<=Oe;le++){const zt=L[le]=be?In(L[le]):an(L[le]);zt.key!=null&&Ve.set(zt.key,le)}let lt,yt=0;const kt=Oe-tt+1;let er=!1,Bt=0;const kr=new Array(kt);for(le=0;le<kt;le++)kr[le]=0;for(le=Me;le<=ve;le++){const zt=z[le];if(yt>=kt){xe(zt,se,oe,!0);continue}let Pt;if(zt.key!=null)Pt=Ve.get(zt.key);else for(lt=tt;lt<=Oe;lt++)if(kr[lt-tt]===0&&Ni(zt,L[lt])){Pt=lt;break}Pt===void 0?xe(zt,se,oe,!0):(kr[Pt-tt]=le+1,Pt>=Bt?Bt=Pt:er=!0,x(zt,L[Pt],q,null,se,oe,ye,me,be),yt++)}const mr=er?p2(kr):ji;for(lt=mr.length-1,le=kt-1;le>=0;le--){const zt=tt+le,Pt=L[zt],Zt=L[zt+1],mn=zt+1<Ce?Zt.el||ld(Zt):Z;kr[le]===0?x(null,Pt,q,mn,se,oe,ye,me,be):er&&(lt<0||le!==mr[lt]?ne(Pt,q,mn,2):lt--)}}},ne=(z,L,q,Z,se=null)=>{const{el:oe,type:ye,transition:me,children:be,shapeFlag:le}=z;if(le&6){ne(z.component.subTree,L,q,Z);return}if(le&128){z.suspense.move(L,q,Z);return}if(le&64){ye.move(z,L,q,Ne);return}if(ye===Ft){n(oe,L,q);for(let ve=0;ve<be.length;ve++)ne(be[ve],L,q,Z);n(z.anchor,L,q);return}if(ye===Eo){I(z,L,q);return}if(Z!==2&&le&1&&me)if(Z===0)me.persisted&&!oe[Mr]?n(oe,L,q):(me.beforeEnter(oe),n(oe,L,q),yr(()=>me.enter(oe),se));else{const{leave:ve,delayLeave:Oe,afterLeave:Me}=me,tt=()=>{z.ctx.isUnmounted?i(oe):n(oe,L,q)},Ve=()=>{const lt=oe._isLeaving||!!oe[Mr];oe._isLeaving&&oe[Mr](!0),me.persisted&&!lt?tt():ve(oe,()=>{tt(),Me&&Me()})};Oe?Oe(oe,tt,Ve):Ve()}else n(oe,L,q)},xe=(z,L,q,Z=!1,se=!1)=>{const{type:oe,props:ye,ref:me,children:be,dynamicChildren:le,shapeFlag:Ce,patchFlag:ve,dirs:Oe,cacheIndex:Me,memo:tt}=z;if((ve===-2||le&&le.hasOnce)&&(se=!1),me!=null&&(cn(),ta(me,null,q,z,!0),fn()),Me!=null&&(!z.ctx||z.ctx===L)&&(L.renderCache[Me]=void 0),Ce&256){L.ctx.deactivate(z);return}const Ve=Ce&1&&Oe,lt=!ra(z);let yt;if(lt&&(yt=ye&&ye.onVnodeBeforeUnmount)&&tn(yt,L,z),Ce&6)Pe(z.component,q,Z);else{if(Ce&128){z.suspense.unmount(q,Z);return}Ve&&Ei(z,null,L,"beforeUnmount"),Ce&64?z.type.remove(z,L,q,Ne,Z):le&&!le.hasOnce&&(oe!==Ft||ve>0&&ve&64)?Fe(le,L,q,!1,!0):(oe===Ft&&ve&384||!se&&Ce&16)&&Fe(be,L,q),Z&&$e(z)}const kt=tt!=null&&Me==null;(lt&&(yt=ye&&ye.onVnodeUnmounted)||Ve||kt)&&yr(()=>{yt&&tn(yt,L,z),Ve&&Ei(z,null,L,"unmounted"),kt&&(z.el=null)},q)},$e=z=>{const{type:L,el:q,anchor:Z,transition:se}=z,oe=L===Ft;if(oe&&!se){ie(q,Z);return}if(L===Eo){E(z),se&&!se.persisted&&se.afterLeave&&se.afterLeave();return}const ye=oe?ua(z):z,me=()=>{oe?p(q)&&ie(q,Z):i(q),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(ye&&ye.shapeFlag&1&&se&&!se.persisted){const{leave:be,delayLeave:le}=se,Ce=ye.el,ve=()=>be(Ce,me);le?le(Ce,me,ve):ve()}else me()},ie=(z,L)=>{let q;for(;z!==L;)q=g(z),i(z),z=q;i(L)},Pe=(z,L,q)=>{const{bum:Z,scope:se,job:oe,subTree:ye,um:me,m:be,a:le}=z;Rf(be),Rf(le),Z&&ko(Z),se.stop(),oe?(oe.flags|=8,xe(ye,z,L,q)):z.vnode.el&&ye&&(ye.transition=z.vnode.transition,xe(ye,z,L,q)),me&&yr(me,L),yr(()=>{z.isUnmounted=!0},L)},Fe=(z,L,q,Z=!1,se=!1,oe=0)=>{for(let ye=oe;ye<z.length;ye++)xe(z[ye],L,q,Z,se)},We=z=>{if(z.shapeFlag&6)return We(z.component.subTree);if(z.shapeFlag&128)return z.suspense.next();const L=g(z.anchor||z.el),q=L&&L[E_];return q?g(q):L},Xe=(z,L,q)=>{const Z=z&&L._vnode?void 0:z&&z.component?z.component.uid:w2();$_(()=>{z==null?L._vnode&&xe(L._vnode,null,null,!0):x(L._vnode||null,z,L,null,null,null,q),L._vnode=z},Z)},Ne={p:x,um:xe,m:ne,r:$e,mt:H,mc:C,pc:ge,pbc:Q,n:We,o:e};return{render:Xe,hydrate:void 0,createApp:Y_(Xe)}}function Vl({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function Ii({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function f2(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function H0(e,t,r=!1){const n=e.children,i=t.children;if(Re(n)&&Re(i))for(let s=0;s<n.length;s++){const a=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=In(i[s]),o.el=a.el),!r&&o.patchFlag!==-2&&H0(a,o)),o.type===ol&&(o.patchFlag===-1&&(o=i[s]=In(o)),o.el=a.el),o.type===ir&&!o.el&&(o.el=a.el)}}function p2(e){const t=e.slice(),r=[0];let n,i,s,a,o;const l=e.length;for(n=0;n<l;n++){const d=e[n];if(d!==0){if(i=r[r.length-1],e[i]<d){t[n]=i,r.push(n);continue}for(s=0,a=r.length-1;s<a;)o=s+a>>1,e[r[o]]<d?s=o+1:a=o;d<e[r[s]]&&(s>0&&(t[n]=r[s-1]),r[s]=n)}}for(s=r.length,a=r[s-1];s-- >0;)r[s]=a,a=t[a];return r}function q0(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:q0(t)}function Rf(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ld(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ld(t.subTree):null}const G0=e=>e.__isSuspense;function h2(e,t){t&&t.pendingBranch?Re(e)?t.effects.push(...e):t.effects.push(e):x_(e)}const Ft=Symbol.for("v-fgt"),ol=Symbol.for("v-txt"),ir=Symbol.for("v-cmt"),Eo=Symbol.for("v-stc"),Hi=[];let $r=null;function He(e=!1){Hi.push($r=e?null:[])}function K0(){Hi.pop(),$r=Hi[Hi.length-1]||null}let da=1;function No(e,t=!1){da+=e,e<0&&$r&&t&&($r.hasOnce=!0)}function X0(e){return e.dynamicChildren=da>0?$r||ji:null,K0(),da>0&&$r&&$r.push(e),e}function ot(e,t,r,n,i,s){return X0(U(e,t,r,n,i,s,!0))}function qi(e,t,r,n,i){return X0(qe(e,t,r,n,i,!0))}function ca(e){return e?e.__v_isVNode===!0:!1}function Ni(e,t){return e.type===t.type&&e.key===t.key}const Y0=({key:e})=>e??null,Io=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?Ut(e)||sr(e)||Je(e)?{i:Rr,r:e,k:t,f:!!r}:e:null);function U(e,t=null,r=null,n=0,i=null,s=e===Ft?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Y0(t),ref:t&&Io(t),scopeId:w0,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Rr};return o?(Uo(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=Ut(r)?8:16),da>0&&!a&&$r&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$r.push(l),l}const qe=m2;function m2(e,t=null,r=null,n=0,i=null,s=!1){if((!e||e===j_)&&(e=ir),ca(e)){const o=ui(e,t,!0);return r&&Uo(o,r),da>0&&!s&&$r&&(o.shapeFlag&6?$r[$r.indexOf(e)]=o:$r.push(o)),o.patchFlag=-2,o}if(T2(e)&&(e=e.__vccOpts),t){t=g2(t);let{class:o,style:l}=t;o&&!Ut(o)&&(t.class=_r(o)),wt(l)&&(Ud(l)&&!Re(l)&&(l=Kt({},l)),t.style=ni(l))}const a=Ut(e)?1:G0(e)?128:nl(e)?64:wt(e)?4:Je(e)?2:0;return U(e,t,r,n,i,a,s,!0)}function g2(e){return e?Ud(e)||U0(e)?Kt({},e):e:null}function ui(e,t,r=!1,n=!1){const{props:i,ref:s,patchFlag:a,children:o,transition:l}=e,d=t?b2(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Y0(d),ref:t&&t.ref?r&&s?Re(s)?s.concat(Io(t)):[s,Io(t)]:Io(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ft?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ui(e.ssContent),ssFallback:e.ssFallback&&ui(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&n&&ms(f,l.clone(f)),f}function y2(e=" ",t=0){return qe(ol,null,e,t)}function Ms(e,t){const r=qe(Eo,null,e);return r.staticCount=t,r}function Wt(e="",t=!1){return t?(He(),qi(ir,null,e)):qe(ir,null,e)}function an(e){return e==null||typeof e=="boolean"?qe(ir):Re(e)?qe(Ft,null,e.slice()):ca(e)?In(e):qe(ol,null,String(e))}function In(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ui(e)}function Uo(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(Re(t))r=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),Uo(e,i()),i._c&&(i._d=!0));return}else{r=32;const i=t._;!i&&!U0(t)?t._ctx=Rr:i===3&&Rr&&(Rr.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(Je(t)){if(n&65){Uo(e,{default:t});return}t={default:t,_ctx:Rr},r=32}else t=String(t),n&64?(r=16,t=[y2(t)]):r=8;e.children=t,e.shapeFlag|=r}function b2(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=_r([t.class,n.class]));else if(i==="style")t.style=ni([t.style,n.style]);else if(Yo(i)){const s=t[i],a=n[i];a&&s!==a&&!(Re(s)&&s.includes(a))?t[i]=s?[].concat(s,a):a:a==null&&s==null&&!Zo(i)&&(t[i]=a)}else i!==""&&(t[i]=n[i])}return t}function tn(e,t,r,n=null){Dr(e,t,7,[r,n])}const v2=M0();let Z0=0;function w2(){return Z0}function _2(e,t,r){const n=e.type,i=(t?t.appContext:e.appContext)||v2,s={uid:Z0++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:F0(n,i),emitsOptions:R0(n,i),emit:null,emitted:null,propsDefaults:At,inheritAttrs:n.inheritAttrs,ctx:At,data:At,props:At,attrs:At,slots:At,refs:At,setupState:At,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Q_.bind(null,s),e.ce&&e.ce(s),s}let hr=null;const Q0=()=>hr||Rr;let Lo,fa;{const e=el(),t=(r,n)=>{let i;return(i=e[r])||(i=e[r]=[]),i.push(n),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};Lo=t("__VUE_INSTANCE_SETTERS__",r=>hr=r),fa=t("__VUE_SSR_SETTERS__",r=>pa=r)}const xa=e=>{const t=hr;return Lo(e),e.scope.on(),()=>{e.scope.off(),Lo(t)}},Bf=()=>{hr&&hr.scope.off(),Lo(null)};function J0(e){return e.vnode.shapeFlag&4}let pa=!1;function x2(e,t=!1,r=!1){t&&fa(t);const{props:n,children:i}=e.vnode,s=J0(e);i2(e,n,s,t),l2(e,i,r||t);const a=s?$2(e,t):void 0;return t&&fa(!1),a}function $2(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,W_);const{setup:n}=r;if(n){cn();const i=e.setupContext=n.length>1?k2(e):null,s=xa(e),a=va(n,e,0,[e.props,i]),o=Hg(a);if(fn(),s(),(o||e.sp)&&!ra(e)&&E0(e),o){if(a.then(Bf,Bf),t)return a.then(l=>{fa(!0);try{Pf(e,l,t)}finally{fa(!1)}}).catch(l=>{rl(l,e,0)});e.asyncDep=a}else Pf(e,a)}else ey(e)}function Pf(e,t,r){Je(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:wt(t)&&(e.setupState=h0(t)),ey(e)}function ey(e,t,r){const n=e.type;e.render||(e.render=n.render||un);{const i=xa(e);cn();try{V_(e)}finally{fn(),i()}}}const S2={get(e,t){return nr(e,"get",""),e[t]}};function k2(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,S2),slots:e.slots,emit:e.emit,expose:t}}function ll(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(h0(f_(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in na)return na[r](e)},has(t,r){return r in t||r in na}})):e.proxy}function T2(e){return Je(e)&&"__vccOpts"in e}const ia=(e,t)=>y_(e,t,pa);function ud(e,t,r){try{No(-1);const n=arguments.length;return n===2?wt(t)&&!Re(t)?ca(t)?qe(e,null,[t]):qe(e,t):qe(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&ca(r)&&(r=[r]),qe(e,t,r))}finally{No(1)}}const C2="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dd;const Df=typeof window<"u"&&window.trustedTypes;if(Df)try{dd=Df.createPolicy("vue",{createHTML:e=>e})}catch{}const ty=dd?e=>dd.createHTML(e):e=>e,E2="http://www.w3.org/2000/svg",I2="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,Nf=En&&En.createElement("template"),A2={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const i=t==="svg"?En.createElementNS(E2,e):t==="mathml"?En.createElementNS(I2,e):r?En.createElement(e,{is:r}):En.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>En.createTextNode(e),createComment:e=>En.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>En.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,i,s){const a=r?r.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),r),!(i===s||!(i=i.nextSibling)););else{Nf.innerHTML=ty(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=Nf.content;if(n==="svg"||n==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,r)}return[a?a.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},Yn="transition",Rs="animation",ha=Symbol("_vtc"),ry={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},O2=Kt({},S0,ry),z2=e=>(e.displayName="Transition",e.props=O2,e),M2=z2((e,{slots:t})=>ud(O_,R2(e),t)),Ai=(e,t=[])=>{Re(e)?e.forEach(r=>r(...t)):e&&e(...t)},Uf=e=>e?Re(e)?e.some(t=>t.length>1):e.length>1:!1;function R2(e){const t={};for(const K in e)K in ry||(t[K]=e[K]);if(e.css===!1)return t;const{name:r="v",type:n,duration:i,enterFromClass:s=`${r}-enter-from`,enterActiveClass:a=`${r}-enter-active`,enterToClass:o=`${r}-enter-to`,appearFromClass:l=s,appearActiveClass:d=a,appearToClass:f=o,leaveFromClass:p=`${r}-leave-from`,leaveActiveClass:g=`${r}-leave-active`,leaveToClass:b=`${r}-leave-to`}=e,y=B2(i),x=y&&y[0],T=y&&y[1],{onBeforeEnter:S,onEnter:$,onEnterCancelled:I,onLeave:E,onLeaveCancelled:O,onBeforeAppear:P=S,onAppear:N=$,onAppearCancelled:C=I}=t,V=(K,ue,H,te)=>{K._enterCancelled=te,Oi(K,ue?f:o),Oi(K,ue?d:a),H&&H()},Q=(K,ue)=>{K._isLeaving=!1,Oi(K,p),Oi(K,b),Oi(K,g),ue&&ue()},de=K=>(ue,H)=>{const te=K?N:$,he=()=>V(ue,K,H);Ai(te,[ue,he]),Lf(()=>{Oi(ue,K?l:s),Sn(ue,K?f:o),Uf(te)||Ff(ue,n,x,he)})};return Kt(t,{onBeforeEnter(K){Ai(S,[K]),Sn(K,s),Sn(K,a)},onBeforeAppear(K){Ai(P,[K]),Sn(K,l),Sn(K,d)},onEnter:de(!1),onAppear:de(!0),onLeave(K,ue){K._isLeaving=!0;const H=()=>Q(K,ue);Sn(K,p),K._enterCancelled?(Sn(K,g),Vf(K)):(Vf(K),Sn(K,g)),Lf(()=>{K._isLeaving&&(Oi(K,p),Sn(K,b),Uf(E)||Ff(K,n,T,H))}),Ai(E,[K,H])},onEnterCancelled(K){V(K,!1,void 0,!0),Ai(I,[K])},onAppearCancelled(K){V(K,!0,void 0,!0),Ai(C,[K])},onLeaveCancelled(K){Q(K),Ai(O,[K])}})}function B2(e){if(e==null)return null;if(wt(e))return[Hl(e.enter),Hl(e.leave)];{const t=Hl(e);return[t,t]}}function Hl(e){return Nw(e)}function Sn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e[ha]||(e[ha]=new Set)).add(t)}function Oi(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const r=e[ha];r&&(r.delete(t),r.size||(e[ha]=void 0))}function Lf(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let P2=0;function Ff(e,t,r,n){const i=e._endId=++P2,s=()=>{i===e._endId&&n()};if(r!=null)return setTimeout(s,r);const{type:a,timeout:o,propCount:l}=D2(e,t);if(!a)return n();const d=a+"end";let f=0;const p=()=>{e.removeEventListener(d,g),s()},g=b=>{b.target===e&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},o+1),e.addEventListener(d,g)}function D2(e,t){const r=window.getComputedStyle(e),n=y=>(r[y]||"").split(", "),i=n(`${Yn}Delay`),s=n(`${Yn}Duration`),a=jf(i,s),o=n(`${Rs}Delay`),l=n(`${Rs}Duration`),d=jf(o,l);let f=null,p=0,g=0;t===Yn?a>0&&(f=Yn,p=a,g=s.length):t===Rs?d>0&&(f=Rs,p=d,g=l.length):(p=Math.max(a,d),f=p>0?a>d?Yn:Rs:null,g=f?f===Yn?s.length:l.length:0);const b=f===Yn&&/\b(?:transform|all)(?:,|$)/.test(n(`${Yn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:b}}function jf(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>Wf(r)+Wf(e[n])))}function Wf(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Vf(e){return(e?e.ownerDocument:document).body.offsetHeight}function N2(e,t,r){const n=e[ha];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const Hf=Symbol("_vod"),U2=Symbol("_vsh"),L2=Symbol(""),F2=/(?:^|;)\s*display\s*:/;function j2(e,t,r){const n=e.style,i=Ut(r);let s=!1;if(r&&!i){if(t)if(Ut(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();r[o]==null&&Gs(n,o,"")}else for(const a in t)r[a]==null&&Gs(n,a,"");for(const a in r){a==="display"&&(s=!0);const o=r[a];o!=null?V2(e,a,!Ut(t)&&t?t[a]:void 0,o)||Gs(n,a,o):Gs(n,a,"")}}else if(i){if(t!==r){const a=n[L2];a&&(r+=";"+a),n.cssText=r,s=F2.test(r)}}else t&&e.removeAttribute("style");Hf in e&&((!i||t!==r)&&(e[Hf]=s?n.display:""),e[U2]&&(n.display="none"))}const io=/\s*!important$/;function Gs(e,t,r){if(Re(r))r.forEach(n=>Gs(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))io.test(r)?e.setProperty(t,r.replace(io,""),"important"):e.setProperty(t,r);else{const n=W2(e,t);io.test(r)?e.setProperty(ci(n),r.replace(io,""),"important"):e[n]=r}}const qf=["Webkit","Moz","ms"],ql={};function W2(e,t){const r=ql[t];if(r)return r;let n=Kr(t);if(n!=="filter"&&n in e)return ql[t]=n;n=Kg(n);for(let i=0;i<qf.length;i++){const s=qf[i]+n;if(s in e)return ql[t]=s}return t}function V2(e,t,r,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ut(n)&&r===n}const Gf="http://www.w3.org/1999/xlink";function Kf(e,t,r,n,i,s=Vw(t)){n&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(Gf,t.slice(6,t.length)):e.setAttributeNS(Gf,t,r):r==null||s&&!Yg(r)?e.removeAttribute(t):e.setAttribute(t,s?"":dn(r)?String(r):r)}function Xf(e,t,r,n,i){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?ty(r):r);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,l=r==null?e.type==="checkbox"?"on":"":String(r);(o!==l||!("_value"in e))&&(e.value=l),r==null&&e.removeAttribute(t),e._value=r;return}let a=!1;if(r===""||r==null){const o=typeof e[t];o==="boolean"?r=Yg(r):r==null&&o==="string"?(r="",a=!0):o==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(i||t)}function si(e,t,r,n){e.addEventListener(t,r,n)}function H2(e,t,r,n){e.removeEventListener(t,r,n)}const Yf=Symbol("_vei");function q2(e,t,r,n,i=null){const s=e[Yf]||(e[Yf]={}),a=s[t];if(n&&a)a.value=n;else{const[o,l]=X2(t);if(n){const d=s[t]=Q2(n,i);si(e,o,d,l)}else a&&(H2(e,o,a,l),s[t]=void 0)}}const G2=/(Once|Passive|Capture)$/,K2=/^on:?(?:Once|Passive|Capture)$/;function X2(e){let t,r;for(;(r=e.match(G2))&&!K2.test(e);)t||(t={}),e=e.slice(0,e.length-r[1].length),t[r[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):ci(e.slice(2)),t]}let Gl=0;const Y2=Promise.resolve(),Z2=()=>Gl||(Y2.then(()=>Gl=0),Gl=Date.now());function Q2(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;const i=r.value;if(Re(i)){const s=n.stopImmediatePropagation;n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0};const a=i.slice(),o=[n];for(let l=0;l<a.length&&!n._stopped;l++){const d=a[l];d&&Dr(d,t,5,o)}}else Dr(i,t,5,[n])};return r.value=e,r.attached=Z2(),r}const Zf=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,J2=(e,t,r,n,i,s)=>{const a=i==="svg";t==="class"?N2(e,n,a):t==="style"?j2(e,r,n):Yo(t)?Zo(t)||q2(e,t,r,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ex(e,t,n,a))?(Xf(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Kf(e,t,n,a,s,t!=="value")):e._isVueCE&&(tx(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ut(n)))?Xf(e,Kr(t),n,s,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Kf(e,t,n,a))};function ex(e,t,r,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Zf(t)&&Je(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Zf(t)&&Ut(r)?!1:t in e}function tx(e,t){const r=e._def.props;if(!r)return!1;const n=Kr(t);return Array.isArray(r)?r.some(i=>Kr(i)===n):Object.keys(r).some(i=>Kr(i)===n)}const ys=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Re(t)?r=>ko(t,r):t};function rx(e){e.target.composing=!0}function Qf(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ln=Symbol("_assign"),so=Symbol("_initialValue");function Kl(e,t,r){return t&&(e=e.trim()),r&&(e=Jo(e)),e}const An={created(e,{modifiers:{lazy:t,trim:r,number:n}},i){e.parentNode&&(e.type==="text"?e[so]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[so]=e.defaultValue.replace(/\r\n?/g,`
`))),e[ln]=ys(i);const s=n||i.props&&i.props.type==="number";si(e,t?"change":"input",a=>{a.target.composing||e[ln](Kl(e.value,r,s))}),(r||s)&&si(e,"change",()=>{e.value=Kl(e.value,r,s)}),t||(si(e,"compositionstart",rx),si(e,"compositionend",Qf),si(e,"change",Qf))},mounted(e,{value:t,modifiers:{trim:r,number:n}}){const i=t??"",s=e[so];delete e[so],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[ln](Kl(e.value,r,n)):e.value=i},beforeUpdate(e,{value:t,oldValue:r,modifiers:{lazy:n,trim:i,number:s}},a){if(e[ln]=ys(a),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?Jo(e.value):e.value,l=t??"";if(o===l)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(n&&t===r||i&&e.value.trim()===l)||(e.value=l)}},cd={deep:!0,created(e,t,r){e[ln]=ys(r),si(e,"change",()=>{const n=e._modelValue,i=ma(e),s=e.checked,a=e[ln];if(Re(n)){const o=zd(n,i),l=o!==-1;if(s&&!l)a(n.concat(i));else if(!s&&l){const d=[...n];d.splice(o,1),a(d)}}else if(Rn(n)){const o=new Set(n);s?o.add(i):o.delete(i),a(o)}else a(iy(e,s))})},mounted:Jf,beforeUpdate(e,t,r){e[ln]=ys(r),Jf(e,t,r)}};function Jf(e,{value:t,oldValue:r},n){e._modelValue=t;let i;if(Re(t))i=zd(t,n.props.value)>-1;else if(Rn(t))i=t.has(n.props.value);else{if(t===r)return;i=Bn(t,iy(e,!0))}e.checked!==i&&(e.checked=i)}const ny={deep:!0,created(e,{value:t,modifiers:{number:r}},n){e._modelValue=t,si(e,"change",()=>{const i=Array.prototype.filter.call(e.options,l=>l.selected).map(l=>r?Jo(ma(l)):ma(l)),s=e.multiple,a=s?Rn(e._modelValue)?new Set(i):i:i[0],o=e._pendingValue=[s,s?Re(a)?i.slice():i:a];try{e[ln](a)}finally{ii(()=>{e._pendingValue===o&&(e._pendingValue=void 0)})}}),e[ln]=ys(n)},mounted(e,{value:t}){ep(e,t)},beforeUpdate(e,{value:t},r){e._modelValue=t,e[ln]=ys(r)},updated(e,{value:t}){const r=e._pendingValue;e._pendingValue=void 0,(!r||r[0]!==e.multiple||!nx(t,r[1],r[0]))&&ep(e,t)}};function nx(e,t,r){if(!r||Re(e))return Bn(e,t);if(Rn(e)){if(e.size!==t.length)return!1;for(const n of t)if(!e.has(n))return!1;return!0}return!1}function ep(e,t){const r=e.multiple,n=Re(t);if(!(r&&!n&&!Rn(t))){for(let i=0,s=e.options.length;i<s;i++){const a=e.options[i],o=ma(a);if(r)if(n){const l=typeof o;l==="string"||l==="number"?a.selected=t.some(d=>String(d)===String(o)):a.selected=zd(t,o)>-1}else a.selected=t.has(o);else if(Bn(ma(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ma(e){return"_value"in e?e._value:e.value}function iy(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const ix=["ctrl","shift","alt","meta"],sx={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ix.some(r=>e[`${r}Key`]&&!t.includes(r))},ao=(e,t)=>{if(!e)return e;const r=e._withMods||(e._withMods={}),n=t.join(".");return r[n]||(r[n]=(i,...s)=>{for(let a=0;a<t.length;a++){const o=sx[t[a]];if(o&&o(i,t))return}return e(i,...s)})},ax={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ox=(e,t)=>{const r=e._withKeys||(e._withKeys={}),n=t.join(".");return r[n]||(r[n]=i=>{if(!("key"in i))return;const s=ci(i.key);if(t.some(a=>a===s||ax[a]===s))return e(i)})},lx=Kt({patchProp:J2},A2);let tp;function ux(){return tp||(tp=d2(lx))}const dx=(...e)=>{const t=ux().createApp(...e),{mount:r}=t;return t.mount=n=>{const i=fx(n);if(!i)return;const s=t._component;!Je(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=r(i,!1,cx(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function cx(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function fx(e){return Ut(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jt=(e,t)=>({size:r,strokeWidth:n=2,absoluteStrokeWidth:i,color:s,class:a,...o},{attrs:l,slots:d})=>ud("svg",{...oo,width:r||oo.width,height:r||oo.height,stroke:s||oo.stroke,"stroke-width":i?Number(n)*24/Number(r):n,...l,class:["lucide",`lucide-${px(e)}`],...o},[...t.map(f=>ud(...f)),...d.default?[d.default()]:[]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=jt("CameraIcon",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=jt("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=jt("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=jt("ImageIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=jt("LayersIcon",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=jt("Loader2Icon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=jt("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=jt("PaletteIcon",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=jt("PlusCircleIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=jt("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=jt("PrinterIcon",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=jt("RefreshCwIcon",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=jt("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=jt("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=jt("ScissorsIcon",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=jt("SparklesIcon",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=jt("UploadCloudIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=jt("UploadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=jt("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=jt("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=jt("ZoomInIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=jt("ZoomOutIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Ix=25.4,Ax=300;function bs(e,t=Ax){return Math.round(e/Ix*t)}const Xl=[{id:"spec_1_inch",name:"标准 1 寸",widthMm:25,heightMm:35,widthPx:295,heightPx:413,description:"适用于驾照、体检表、普通证件、求职简历"},{id:"spec_id_card",name:"二代居民身份证 (GA461)",widthMm:26,heightMm:32,widthPx:358,heightPx:441,description:"公安部 GA461—2004 标准：26×32mm (358×441px)，纯白底，头部占相片尺寸2/3，脸宽15±1mm"},{id:"spec_large_1_inch",name:"大 1 寸",widthMm:33,heightMm:48,widthPx:390,heightPx:567,description:"适用于普通中国护照、港澳通行证、各类职业资格考试"},{id:"spec_2_inch",name:"标准 2 寸",widthMm:35,heightMm:49,widthPx:413,heightPx:579,description:"适用于各类证书、签证申请、学历学位证明"},{id:"spec_small_2_inch",name:"小 2 寸",widthMm:35,heightMm:45,widthPx:413,heightPx:531,description:"适用于东南亚签证、部分欧美申根签证"},{id:"spec_cet",name:"英语四六级 (CET)",widthMm:33,heightMm:48,widthPx:390,heightPx:567,description:"全国大学英语四、六级考试官方报名标准"},{id:"spec_teacher",name:"教师资格证 (NTCE)",widthMm:35,heightMm:53,widthPx:413,heightPx:626,description:"中小学教师资格考试网报标准尺寸"},{id:"spec_ncre",name:"计算机等级考试 (NCRE)",widthMm:25,heightMm:34,widthPx:300,heightPx:400,description:"全国计算机等级考试网报标准"},{id:"spec_civil_service",name:"国家公务员考试 (国考)",widthMm:35,heightMm:45,widthPx:413,heightPx:531,description:"中央机关及其直属机构公务员招考标准"}];function Ox(e,t,r,n){let i=0,s=0,a=0,o=0;return i=t,s=r,a=bs(t),o=bs(r),{id:`custom_${Date.now()}`,name:e||`自定义 (${i}×${s}mm)`,widthMm:i,heightMm:s,widthPx:a,heightPx:o,description:`自定义尺寸 ${i}×${s} mm (${a}×${o} px)`,isCustom:!0}}const Cn=[{id:"bg_white",name:"纯白底",value:"#FFFFFF",previewClass:"bg-white border border-gray-300"},{id:"bg_blue",name:"标准蓝",value:"#438EDB",previewClass:"bg-[#438EDB]"},{id:"bg_red",name:"中国红",value:"#D9001B",previewClass:"bg-[#D9001B]"},{id:"bg_light_blue",name:"浅天蓝",value:"#38BDF8",previewClass:"bg-[#38BDF8]"},{id:"bg_dark_blue",name:"深藏青",value:"#1E3A8A",previewClass:"bg-[#1E3A8A]"},{id:"bg_blue_grad",name:"冲印蓝",value:"linear-gradient(180deg, #60A5FA 0%, #1D4ED8 100%)",previewClass:"bg-gradient-to-b from-blue-400 to-blue-700",isGradient:!0,gradientStops:["#60A5FA","#1D4ED8"]},{id:"bg_gray_grad",name:"高级灰",value:"linear-gradient(180deg, #F3F4F6 0%, #9CA3AF 100%)",previewClass:"bg-gradient-to-b from-gray-100 to-gray-400",isGradient:!0,gradientStops:["#F3F4F6","#9CA3AF"]},{id:"bg_transparent",name:"消除背景 (透明)",value:"transparent",previewClass:"bg-transparent border-2 border-dashed border-gray-400"},{id:"bg_original",name:"原图背景",value:"original",previewClass:"bg-slate-700 border border-slate-600"}];function zx(e){return{id:`bg_custom_${e.replace("#","").toLowerCase()}`,name:"自定义",value:e.startsWith("#")?e:`#${e}`,previewClass:""}}const lo=[{id:"paper_6_inch",name:"6 寸照片纸 (横版 152×102mm)",widthMm:152,heightMm:102,widthPx:1795,heightPx:1205,description:"标准冲印 6 寸相纸 (4R)，最常用的家用相纸规格"},{id:"paper_6_inch_v",name:"6 寸照片纸 (竖版 102×152mm)",widthMm:102,heightMm:152,widthPx:1205,heightPx:1795,description:"标准冲印 6 寸相纸竖版"},{id:"paper_a4",name:"标准 A4 纸 (210×297mm)",widthMm:210,heightMm:297,widthPx:2480,heightPx:3508,description:"标准办公室 A4 打印纸 (300 DPI 高清输出)"}];var Yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ay={};(function(){var e;function t(u){var m=0;return function(){return m<u.length?{done:!1,value:u[m++]}:{done:!0}}}var r=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yl=="object"&&Yl];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=n(this);function s(u,m){if(m)e:{var v=i;u=u.split(".");for(var k=0;k<u.length-1;k++){var M=u[k];if(!(M in v))break e;v=v[M]}u=u[u.length-1],k=v[u],m=m(k),m!=k&&m!=null&&r(v,u,{configurable:!0,writable:!0,value:m})}}s("Symbol",function(u){function m(B){if(this instanceof m)throw new TypeError("Symbol is not a constructor");return new v(k+(B||"")+"_"+M++,B)}function v(B,R){this.h=B,r(this,"description",{configurable:!0,writable:!0,value:R})}if(u)return u;v.prototype.toString=function(){return this.h};var k="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",M=0;return m}),s("Symbol.iterator",function(u){if(u)return u;u=Symbol("Symbol.iterator");for(var m="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),v=0;v<m.length;v++){var k=i[m[v]];typeof k=="function"&&typeof k.prototype[u]!="function"&&r(k.prototype,u,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return u});function a(u){return u={next:u},u[Symbol.iterator]=function(){return this},u}function o(u){var m=typeof Symbol<"u"&&Symbol.iterator&&u[Symbol.iterator];return m?m.call(u):{next:t(u)}}function l(u){if(!(u instanceof Array)){u=o(u);for(var m,v=[];!(m=u.next()).done;)v.push(m.value);u=v}return u}var d=typeof Object.assign=="function"?Object.assign:function(u,m){for(var v=1;v<arguments.length;v++){var k=arguments[v];if(k)for(var M in k)Object.prototype.hasOwnProperty.call(k,M)&&(u[M]=k[M])}return u};s("Object.assign",function(u){return u||d});var f=typeof Object.create=="function"?Object.create:function(u){function m(){}return m.prototype=u,new m},p;if(typeof Object.setPrototypeOf=="function")p=Object.setPrototypeOf;else{var g;e:{var b={a:!0},y={};try{y.__proto__=b,g=y.a;break e}catch{}g=!1}p=g?function(u,m){if(u.__proto__=m,u.__proto__!==m)throw new TypeError(u+" is not extensible");return u}:null}var x=p;function T(u,m){if(u.prototype=f(m.prototype),u.prototype.constructor=u,x)x(u,m);else for(var v in m)if(v!="prototype")if(Object.defineProperties){var k=Object.getOwnPropertyDescriptor(m,v);k&&Object.defineProperty(u,v,k)}else u[v]=m[v];u.za=m.prototype}function S(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function $(u){if(u.m)throw new TypeError("Generator is already running");u.m=!0}S.prototype.u=function(u){this.i=u};function I(u,m){u.l={ma:m,na:!0},u.h=u.s||u.v}S.prototype.return=function(u){this.l={return:u},this.h=this.v};function E(u,m,v){return u.h=v,{value:m}}function O(u){this.h=new S,this.i=u}function P(u,m){$(u.h);var v=u.h.j;return v?N(u,"return"in v?v.return:function(k){return{value:k,done:!0}},m,u.h.return):(u.h.return(m),C(u))}function N(u,m,v,k){try{var M=m.call(u.h.j,v);if(!(M instanceof Object))throw new TypeError("Iterator result "+M+" is not an object");if(!M.done)return u.h.m=!1,M;var B=M.value}catch(R){return u.h.j=null,I(u.h,R),C(u)}return u.h.j=null,k.call(u.h,B),C(u)}function C(u){for(;u.h.h;)try{var m=u.i(u.h);if(m)return u.h.m=!1,{value:m.value,done:!1}}catch(v){u.h.i=void 0,I(u.h,v)}if(u.h.m=!1,u.h.l){if(m=u.h.l,u.h.l=null,m.na)throw m.ma;return{value:m.return,done:!0}}return{value:void 0,done:!0}}function V(u){this.next=function(m){return $(u.h),u.h.j?m=N(u,u.h.j.next,m,u.h.u):(u.h.u(m),m=C(u)),m},this.throw=function(m){return $(u.h),u.h.j?m=N(u,u.h.j.throw,m,u.h.u):(I(u.h,m),m=C(u)),m},this.return=function(m){return P(u,m)},this[Symbol.iterator]=function(){return this}}function Q(u){function m(k){return u.next(k)}function v(k){return u.throw(k)}return new Promise(function(k,M){function B(R){R.done?k(R.value):Promise.resolve(R.value).then(m,v).then(B,M)}B(u.next())})}function de(u){return Q(new V(new O(u)))}s("Promise",function(u){function m(R){this.i=0,this.j=void 0,this.h=[],this.u=!1;var j=this.l();try{R(j.resolve,j.reject)}catch(X){j.reject(X)}}function v(){this.h=null}function k(R){return R instanceof m?R:new m(function(j){j(R)})}if(u)return u;v.prototype.i=function(R){if(this.h==null){this.h=[];var j=this;this.j(function(){j.m()})}this.h.push(R)};var M=i.setTimeout;v.prototype.j=function(R){M(R,0)},v.prototype.m=function(){for(;this.h&&this.h.length;){var R=this.h;this.h=[];for(var j=0;j<R.length;++j){var X=R[j];R[j]=null;try{X()}catch(fe){this.l(fe)}}}this.h=null},v.prototype.l=function(R){this.j(function(){throw R})},m.prototype.l=function(){function R(fe){return function(_e){X||(X=!0,fe.call(j,_e))}}var j=this,X=!1;return{resolve:R(this.I),reject:R(this.m)}},m.prototype.I=function(R){if(R===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(R instanceof m)this.L(R);else{e:switch(typeof R){case"object":var j=R!=null;break e;case"function":j=!0;break e;default:j=!1}j?this.F(R):this.s(R)}},m.prototype.F=function(R){var j=void 0;try{j=R.then}catch(X){this.m(X);return}typeof j=="function"?this.M(j,R):this.s(R)},m.prototype.m=function(R){this.v(2,R)},m.prototype.s=function(R){this.v(1,R)},m.prototype.v=function(R,j){if(this.i!=0)throw Error("Cannot settle("+R+", "+j+"): Promise already settled in state"+this.i);this.i=R,this.j=j,this.i===2&&this.K(),this.H()},m.prototype.K=function(){var R=this;M(function(){if(R.D()){var j=i.console;typeof j<"u"&&j.error(R.j)}},1)},m.prototype.D=function(){if(this.u)return!1;var R=i.CustomEvent,j=i.Event,X=i.dispatchEvent;return typeof X>"u"?!0:(typeof R=="function"?R=new R("unhandledrejection",{cancelable:!0}):typeof j=="function"?R=new j("unhandledrejection",{cancelable:!0}):(R=i.document.createEvent("CustomEvent"),R.initCustomEvent("unhandledrejection",!1,!0,R)),R.promise=this,R.reason=this.j,X(R))},m.prototype.H=function(){if(this.h!=null){for(var R=0;R<this.h.length;++R)B.i(this.h[R]);this.h=null}};var B=new v;return m.prototype.L=function(R){var j=this.l();R.T(j.resolve,j.reject)},m.prototype.M=function(R,j){var X=this.l();try{R.call(j,X.resolve,X.reject)}catch(fe){X.reject(fe)}},m.prototype.then=function(R,j){function X(ze,Se){return typeof ze=="function"?function(Ue){try{fe(ze(Ue))}catch(rt){_e(rt)}}:Se}var fe,_e,Le=new m(function(ze,Se){fe=ze,_e=Se});return this.T(X(R,fe),X(j,_e)),Le},m.prototype.catch=function(R){return this.then(void 0,R)},m.prototype.T=function(R,j){function X(){switch(fe.i){case 1:R(fe.j);break;case 2:j(fe.j);break;default:throw Error("Unexpected state: "+fe.i)}}var fe=this;this.h==null?B.i(X):this.h.push(X),this.u=!0},m.resolve=k,m.reject=function(R){return new m(function(j,X){X(R)})},m.race=function(R){return new m(function(j,X){for(var fe=o(R),_e=fe.next();!_e.done;_e=fe.next())k(_e.value).T(j,X)})},m.all=function(R){var j=o(R),X=j.next();return X.done?k([]):new m(function(fe,_e){function Le(Ue){return function(rt){ze[Ue]=rt,Se--,Se==0&&fe(ze)}}var ze=[],Se=0;do ze.push(void 0),Se++,k(X.value).T(Le(ze.length-1),_e),X=j.next();while(!X.done)})},m});function K(u,m){u instanceof String&&(u+="");var v=0,k=!1,M={next:function(){if(!k&&v<u.length){var B=v++;return{value:m(B,u[B]),done:!1}}return k=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}s("Array.prototype.keys",function(u){return u||function(){return K(this,function(m){return m})}}),s("Array.prototype.fill",function(u){return u||function(m,v,k){var M=this.length||0;for(0>v&&(v=Math.max(0,M+v)),(k==null||k>M)&&(k=M),k=Number(k),0>k&&(k=Math.max(0,M+k)),v=Number(v||0);v<k;v++)this[v]=m;return this}});function ue(u){return u||Array.prototype.fill}s("Int8Array.prototype.fill",ue),s("Uint8Array.prototype.fill",ue),s("Uint8ClampedArray.prototype.fill",ue),s("Int16Array.prototype.fill",ue),s("Uint16Array.prototype.fill",ue),s("Int32Array.prototype.fill",ue),s("Uint32Array.prototype.fill",ue),s("Float32Array.prototype.fill",ue),s("Float64Array.prototype.fill",ue),s("Object.is",function(u){return u||function(m,v){return m===v?m!==0||1/m===1/v:m!==m&&v!==v}}),s("Array.prototype.includes",function(u){return u||function(m,v){var k=this;k instanceof String&&(k=String(k));var M=k.length;for(v=v||0,0>v&&(v=Math.max(v+M,0));v<M;v++){var B=k[v];if(B===m||Object.is(B,m))return!0}return!1}}),s("String.prototype.includes",function(u){return u||function(m,v){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(m instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(m,v||0)!==-1}});var H=this||self;function te(u,m){u=u.split(".");var v=H;u[0]in v||typeof v.execScript>"u"||v.execScript("var "+u[0]);for(var k;u.length&&(k=u.shift());)u.length||m===void 0?v[k]&&v[k]!==Object.prototype[k]?v=v[k]:v=v[k]={}:v[k]=m}function he(u){var m;e:{if((m=H.navigator)&&(m=m.userAgent))break e;m=""}return m.indexOf(u)!=-1}var ce=Array.prototype.map?function(u,m){return Array.prototype.map.call(u,m,void 0)}:function(u,m){for(var v=u.length,k=Array(v),M=typeof u=="string"?u.split(""):u,B=0;B<v;B++)B in M&&(k[B]=m.call(void 0,M[B],B,u));return k},ge={},ae=null;function Ie(u){var m=u.length,v=3*m/4;v%3?v=Math.floor(v):"=.".indexOf(u[m-1])!=-1&&(v="=.".indexOf(u[m-2])!=-1?v-2:v-1);var k=new Uint8Array(v),M=0;return ne(u,function(B){k[M++]=B}),M!==v?k.subarray(0,M):k}function ne(u,m){function v(X){for(;k<u.length;){var fe=u.charAt(k++),_e=ae[fe];if(_e!=null)return _e;if(!/^[\s\xa0]*$/.test(fe))throw Error("Unknown base64 encoding at char: "+fe)}return X}xe();for(var k=0;;){var M=v(-1),B=v(0),R=v(64),j=v(64);if(j===64&&M===-1)break;m(M<<2|B>>4),R!=64&&(m(B<<4&240|R>>2),j!=64&&m(R<<6&192|j))}}function xe(){if(!ae){ae={};for(var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),m=["+/=","+/","-_=","-_.","-_"],v=0;5>v;v++){var k=u.concat(m[v].split(""));ge[v]=k;for(var M=0;M<k.length;M++){var B=k[M];ae[B]===void 0&&(ae[B]=M)}}}}var $e=typeof Uint8Array<"u",ie=!(he("Trident")||he("MSIE"))&&typeof H.btoa=="function";function Pe(u){if(!ie){var m;m===void 0&&(m=0),xe(),m=ge[m];for(var v=Array(Math.floor(u.length/3)),k=m[64]||"",M=0,B=0;M<u.length-2;M+=3){var R=u[M],j=u[M+1],X=u[M+2],fe=m[R>>2];R=m[(R&3)<<4|j>>4],j=m[(j&15)<<2|X>>6],X=m[X&63],v[B++]=fe+R+j+X}switch(fe=0,X=k,u.length-M){case 2:fe=u[M+1],X=m[(fe&15)<<2]||k;case 1:u=u[M],v[B]=m[u>>2]+m[(u&3)<<4|fe>>4]+X+k}return v.join("")}for(m="";10240<u.length;)m+=String.fromCharCode.apply(null,u.subarray(0,10240)),u=u.subarray(10240);return m+=String.fromCharCode.apply(null,u),btoa(m)}var Fe=RegExp("[-_.]","g");function We(u){switch(u){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Xe(u){if(!ie)return Ie(u);Fe.test(u)&&(u=u.replace(Fe,We)),u=atob(u);for(var m=new Uint8Array(u.length),v=0;v<u.length;v++)m[v]=u.charCodeAt(v);return m}var Ne;function et(){return Ne||(Ne=new Uint8Array(0))}var z={},L=typeof Uint8Array.prototype.slice=="function",q=0,Z=0;function se(u){var m=0>u;u=Math.abs(u);var v=u>>>0;u=Math.floor((u-v)/4294967296),m&&(v=o(ye(v,u)),m=v.next().value,u=v.next().value,v=m),q=v>>>0,Z=u>>>0}var oe=typeof BigInt=="function";function ye(u,m){return m=~m,u?u=~u+1:m+=1,[u,m]}function me(u,m){this.i=u>>>0,this.h=m>>>0}function be(u){if(!u)return le||(le=new me(0,0));if(!/^-?\d+$/.test(u))return null;if(16>u.length)se(Number(u));else if(oe)u=BigInt(u),q=Number(u&BigInt(4294967295))>>>0,Z=Number(u>>BigInt(32)&BigInt(4294967295));else{var m=+(u[0]==="-");Z=q=0;for(var v=u.length,k=m,M=(v-m)%6+m;M<=v;k=M,M+=6)k=Number(u.slice(k,M)),Z*=1e6,q=1e6*q+k,4294967296<=q&&(Z+=q/4294967296|0,q%=4294967296);m&&(m=o(ye(q,Z)),u=m.next().value,m=m.next().value,q=u,Z=m)}return new me(q,Z)}var le;function Ce(u,m){return Error("Invalid wire type: "+u+" (at position "+m+")")}function ve(){return Error("Failed to read varint, encoding is invalid.")}function Oe(u,m){return Error("Tried to read past the end of the data "+m+" > "+u)}function Me(){throw Error("Invalid UTF8")}function tt(u,m){return m=String.fromCharCode.apply(null,m),u==null?m:u+m}var Ve=void 0,lt,yt=typeof TextDecoder<"u",kt,er=typeof TextEncoder<"u",Bt;function kr(u){if(u!==z)throw Error("illegal external caller")}function mr(u,m){if(kr(m),this.V=u,u!=null&&u.length===0)throw Error("ByteString should be constructed with non-empty values")}function zt(){return Bt||(Bt=new mr(null,z))}function Pt(u){kr(z);var m=u.V;return m=m==null||$e&&m!=null&&m instanceof Uint8Array?m:typeof m=="string"?Xe(m):null,m==null?m:u.V=m}function Zt(u){if(typeof u=="string")return{buffer:Xe(u),C:!1};if(Array.isArray(u))return{buffer:new Uint8Array(u),C:!1};if(u.constructor===Uint8Array)return{buffer:u,C:!1};if(u.constructor===ArrayBuffer)return{buffer:new Uint8Array(u),C:!1};if(u.constructor===mr)return{buffer:Pt(u)||et(),C:!0};if(u instanceof Uint8Array)return{buffer:new Uint8Array(u.buffer,u.byteOffset,u.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function mn(u,m){this.i=null,this.m=!1,this.h=this.j=this.l=0,pi(this,u,m)}function pi(u,m,v){v=v===void 0?{}:v,u.S=v.S===void 0?!1:v.S,m&&(m=Zt(m),u.i=m.buffer,u.m=m.C,u.l=0,u.j=u.i.length,u.h=u.l)}mn.prototype.reset=function(){this.h=this.l};function Ur(u,m){if(u.h=m,m>u.j)throw Oe(u.j,m)}function gn(u){var m=u.i,v=u.h,k=m[v++],M=k&127;if(k&128&&(k=m[v++],M|=(k&127)<<7,k&128&&(k=m[v++],M|=(k&127)<<14,k&128&&(k=m[v++],M|=(k&127)<<21,k&128&&(k=m[v++],M|=k<<28,k&128&&m[v++]&128&&m[v++]&128&&m[v++]&128&&m[v++]&128&&m[v++]&128)))))throw ve();return Ur(u,v),M}function hi(u,m){if(0>m)throw Error("Tried to read a negative byte length: "+m);var v=u.h,k=v+m;if(k>u.j)throw Oe(m,u.j-v);return u.h=k,v}var es=[];function yn(){this.h=[]}yn.prototype.length=function(){return this.h.length},yn.prototype.end=function(){var u=this.h;return this.h=[],u};function mi(u,m,v){for(;0<v||127<m;)u.h.push(m&127|128),m=(m>>>7|v<<25)>>>0,v>>>=7;u.h.push(m)}function vr(u,m){for(;127<m;)u.h.push(m&127|128),m>>>=7;u.h.push(m)}function Nn(u,m){if(es.length){var v=es.pop();pi(v,u,m),u=v}else u=new mn(u,m);this.h=u,this.j=this.h.h,this.i=this.l=-1,this.setOptions(m)}Nn.prototype.setOptions=function(u){u=u===void 0?{}:u,this.ca=u.ca===void 0?!1:u.ca},Nn.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function Un(u){var m=u.h;if(m.h==m.j)return!1;u.j=u.h.h;var v=gn(u.h)>>>0;if(m=v>>>3,v&=7,!(0<=v&&5>=v))throw Ce(v,u.j);if(1>m)throw Error("Invalid field number: "+m+" (at position "+u.j+")");return u.l=m,u.i=v,!0}function Tr(u){switch(u.i){case 0:if(u.i!=0)Tr(u);else e:{u=u.h;for(var m=u.h,v=m+10,k=u.i;m<v;)if(!(k[m++]&128)){Ur(u,m);break e}throw ve()}break;case 1:u=u.h,Ur(u,u.h+8);break;case 2:u.i!=2?Tr(u):(m=gn(u.h)>>>0,u=u.h,Ur(u,u.h+m));break;case 5:u=u.h,Ur(u,u.h+4);break;case 3:m=u.l;do{if(!Un(u))throw Error("Unmatched start-group tag: stream EOF");if(u.i==4){if(u.l!=m)throw Error("Unmatched end-group tag");break}Tr(u)}while(!0);break;default:throw Ce(u.i,u.j)}}var _t=[];function Cr(){this.j=[],this.i=0,this.h=new yn}function Lt(u,m){m.length!==0&&(u.j.push(m),u.i+=m.length)}function bn(u,m){if(m=m.R){Lt(u,u.h.end());for(var v=0;v<m.length;v++)Lt(u,Pt(m[v])||et())}}var ar=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function or(u,m){return ar?u[ar]|=m:u.A!==void 0?u.A|=m:(Object.defineProperties(u,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}}),m)}function gi(u,m){ar?u[ar]&&(u[ar]&=~m):u.A!==void 0&&(u.A&=~m)}function Et(u){var m;return ar?m=u[ar]:m=u.A,m??0}function lr(u,m){ar?u[ar]=m:u.A!==void 0?u.A=m:Object.defineProperties(u,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}})}function Ln(u){return or(u,1),u}function yi(u,m){lr(m,(u|0)&-51)}function vn(u,m){lr(m,(u|18)&-41)}var Fn={};function G(u){return u!==null&&typeof u=="object"&&!Array.isArray(u)&&u.constructor===Object}var F,J=[];lr(J,23),F=Object.freeze(J);function De(u){if(Et(u.o)&2)throw Error("Cannot mutate an immutable Message")}function it(u){var m=u.length;(m=m?u[m-1]:void 0)&&G(m)?m.g=1:(m={},u.push((m.g=1,m)))}function mt(u){var m=u.i+u.G;return u.B||(u.B=u.o[m]={})}function Ye(u,m){return m===-1?null:m>=u.i?u.B?u.B[m]:void 0:u.o[m+u.G]}function Dt(u,m,v,k){De(u),tr(u,m,v,k)}function tr(u,m,v,k){u.j&&(u.j=void 0),m>=u.i||k?mt(u)[m]=v:(u.o[m+u.G]=v,(u=u.B)&&m in u&&delete u[m])}function bi(u,m,v,k){var M=Ye(u,m);Array.isArray(M)||(M=F);var B=Et(M);if(B&1||Ln(M),k)B&2||or(M,2),v&1||Object.freeze(M);else{k=!(v&2);var R=B&2;v&1||!R?k&&B&16&&!R&&gi(M,16):(M=Ln(Array.prototype.slice.call(M)),tr(u,m,M))}return M}function jn(u,m){var v=Ye(u,m),k=v==null?v:typeof v=="number"||v==="NaN"||v==="Infinity"||v==="-Infinity"?Number(v):void 0;return k!=null&&k!==v&&tr(u,m,k),k}function Zr(u,m,v,k,M){u.h||(u.h={});var B=u.h[v],R=bi(u,v,3,M);if(!B){var j=R;B=[];var X=!!(Et(u.o)&16);R=!!(Et(j)&2);var fe=j;!M&&R&&(j=Array.prototype.slice.call(j));for(var _e=R,Le=0;Le<j.length;Le++){var ze=j[Le],Se=m,Ue=!1;if(Ue=Ue===void 0?!1:Ue,ze=Array.isArray(ze)?new Se(ze):Ue?new Se:void 0,ze!==void 0){Se=ze.o;var rt=Ue=Et(Se);R&&(rt|=2),X&&(rt|=16),rt!=Ue&&lr(Se,rt),Se=rt,_e=_e||!!(2&Se),B.push(ze)}}return u.h[v]=B,X=Et(j),m=X|33,m=_e?m&-9:m|8,X!=m&&(_e=j,Object.isFrozen(_e)&&(_e=Array.prototype.slice.call(_e)),lr(_e,m),j=_e),fe!==j&&tr(u,v,j),(M||k&&R)&&or(B,2),k&&Object.freeze(B),B}return M||(M=Object.isFrozen(B),k&&!M?Object.freeze(B):!k&&M&&(B=Array.prototype.slice.call(B),u.h[v]=B)),B}function vi(u,m,v){var k=!!(Et(u.o)&2);if(m=Zr(u,m,v,k,k),u=bi(u,v,3,k),!(k||Et(u)&8)){for(k=0;k<m.length;k++){if(v=m[k],Et(v.o)&2){var M=ka(v,!1);M.j=v}else M=v;v!==M&&(m[k]=M,u[k]=M.o)}or(u,8)}return m}function Nt(u,m,v){if(v!=null&&typeof v!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof v+": "+v);Dt(u,m,v)}function gr(u,m,v,k,M){De(u);var B=Zr(u,v,m,!1,!1);return v=k??new v,u=bi(u,m,2,!1),M!=null?(B.splice(M,0,v),u.splice(M,0,v.o)):(B.push(v),u.push(v.o)),v.C()&&gi(u,8),v}function Wn(u,m){return u??m}function Er(u,m,v){return v=v===void 0?0:v,Wn(jn(u,m),v)}var ts;function dl(u){switch(typeof u){case"number":return isFinite(u)?u:String(u);case"object":if(u)if(Array.isArray(u)){if(Et(u)&128)return u=Array.prototype.slice.call(u),it(u),u}else{if($e&&u!=null&&u instanceof Uint8Array)return Pe(u);if(u instanceof mr){var m=u.V;return m==null?"":typeof m=="string"?m:u.V=Pe(m)}}}return u}function $a(u,m,v,k){if(u!=null){if(Array.isArray(u))u=xs(u,m,v,k!==void 0);else if(G(u)){var M={},B;for(B in u)M[B]=$a(u[B],m,v,k);u=M}else u=m(u,k);return u}}function xs(u,m,v,k){var M=Et(u);k=k?!!(M&16):void 0,u=Array.prototype.slice.call(u);for(var B=0;B<u.length;B++)u[B]=$a(u[B],m,v,k);return v(M,u),u}function cl(u){return u.ja===Fn?u.toJSON():dl(u)}function Qr(u,m){u&128&&it(m)}function wi(u,m,v){if(v=v===void 0?vn:v,u!=null){if($e&&u instanceof Uint8Array)return u.length?new mr(new Uint8Array(u),z):zt();if(Array.isArray(u)){var k=Et(u);return k&2?u:m&&!(k&32)&&(k&16||k===0)?(lr(u,k|2),u):(u=xs(u,wi,k&4?vn:v,!0),m=Et(u),m&4&&m&2&&Object.freeze(u),u)}return u.ja===Fn?$s(u):u}}function Sa(u,m,v,k,M,B,R){if(u=u.h&&u.h[v]){if(k=Et(u),k&2?k=u:(B=ce(u,$s),vn(k,B),Object.freeze(B),k=B),De(m),R=k==null?F:Ln([]),k!=null){for(B=!!k.length,u=0;u<k.length;u++){var j=k[u];B=B&&!(Et(j.o)&2),R[u]=j.o}B=(B?8:0)|1,u=Et(R),(u&B)!==B&&(Object.isFrozen(R)&&(R=Array.prototype.slice.call(R)),lr(R,u|B)),m.h||(m.h={}),m.h[v]=k}else m.h&&(m.h[v]=void 0);tr(m,v,R,M)}else Dt(m,v,wi(k,B,R),M)}function $s(u){return Et(u.o)&2||(u=ka(u,!0),or(u.o,2)),u}function ka(u,m){var v=u.o,k=[];or(k,16);var M=u.constructor.h;if(M&&k.push(M),M=u.B,M){k.length=v.length,k.fill(void 0,k.length,v.length);var B={};k[k.length-1]=B}Et(v)&128&&it(k),m=m||u.C()?vn:yi,B=u.constructor,ts=k,k=new B(k),ts=void 0,u.R&&(k.R=u.R.slice()),B=!!(Et(v)&16);for(var R=M?v.length-1:v.length,j=0;j<R;j++)Sa(u,k,j-u.G,v[j],!1,B,m);if(M)for(var X in M)Sa(u,k,+X,M[X],!0,B,m);return k}function rr(u,m,v){u==null&&(u=ts),ts=void 0;var k=this.constructor.i||0,M=0<k,B=this.constructor.h,R=!1;if(u==null){u=B?[B]:[];var j=48,X=!0;M&&(k=0,j|=128),lr(u,j)}else{if(!Array.isArray(u)||B&&B!==u[0])throw Error();var fe=j=or(u,0);if((X=(16&fe)!==0)&&((R=(32&fe)!==0)||(fe|=32)),M){if(128&fe)k=0;else if(0<u.length){var _e=u[u.length-1];if(G(_e)&&"g"in _e){k=0,fe|=128,delete _e.g;var Le=!0,ze;for(ze in _e){Le=!1;break}Le&&u.pop()}}}else if(128&fe)throw Error();j!==fe&&lr(u,fe)}this.G=(B?0:-1)-k,this.h=void 0,this.o=u;e:{if(B=this.o.length,k=B-1,B&&(B=this.o[k],G(B))){this.B=B,this.i=k-this.G;break e}m!==void 0&&-1<m?(this.i=Math.max(m,k+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!M&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(v){m=X&&!R&&!0,M=this.i;var Se;for(X=0;X<v.length;X++)R=v[X],R<M?(R+=this.G,(k=u[R])?Ta(k,m):u[R]=F):(Se||(Se=mt(this)),(k=Se[R])?Ta(k,m):Se[R]=F)}}rr.prototype.toJSON=function(){return xs(this.o,cl,Qr)},rr.prototype.C=function(){return!!(Et(this.o)&2)};function Ta(u,m){if(Array.isArray(u)){var v=Et(u),k=1;!m||v&2||(k|=16),(v&k)!==k&&lr(u,v|k)}}rr.prototype.ja=Fn,rr.prototype.toString=function(){return this.o.toString()};function Ca(u,m,v){if(v){var k={},M;for(M in v){var B=v[M],R=B.ra;R||(k.J=B.xa||B.oa.W,B.ia?(k.aa=xi(B.ia),R=function(j){return function(X,fe,_e){return j.J(X,fe,_e,j.aa)}}(k)):B.ka?(k.Z=Oa(B.da.P,B.ka),R=function(j){return function(X,fe,_e){return j.J(X,fe,_e,j.Z)}}(k)):R=k.J,B.ra=R),R(m,u,B.da),k={J:k.J,aa:k.aa,Z:k.Z}}}bn(m,u)}var rs=Symbol();function Ea(u,m,v){return u[rs]||(u[rs]=function(k,M){return m(k,M,v)})}function Ia(u){var m=u[rs];if(!m){var v=Si(u);m=function(k,M){return Ss(k,M,v)},u[rs]=m}return m}function fl(u){var m=u.ia;if(m)return Ia(m);if(m=u.wa)return Ea(u.da.P,m,u.ka)}function pl(u){var m=fl(u),v=u.da,k=u.oa.U;return m?function(M,B){return k(M,B,v,m)}:function(M,B){return k(M,B,v)}}function _i(u,m){var v=u[m];return typeof v=="function"&&v.length===0&&(v=v(),u[m]=v),Array.isArray(v)&&($i in v||wn in v||0<v.length&&typeof v[0]=="function")?v:void 0}function Aa(u,m,v,k,M,B){m.P=u[0];var R=1;if(u.length>R&&typeof u[R]!="number"){var j=u[R++];v(m,j)}for(;R<u.length;){v=u[R++];for(var X=R+1;X<u.length&&typeof u[X]!="number";)X++;switch(j=u[R++],X-=R,X){case 0:k(m,v,j);break;case 1:(X=_i(u,R))?(R++,M(m,v,j,X)):k(m,v,j,u[R++]);break;case 2:X=R++,X=_i(u,X),M(m,v,j,X,u[R++]);break;case 3:B(m,v,j,u[R++],u[R++],u[R++]);break;case 4:B(m,v,j,u[R++],u[R++],u[R++],u[R++]);break;default:throw Error("unexpected number of binary field arguments: "+X)}}return m}var Vn=Symbol();function xi(u){var m=u[Vn];if(!m){var v=Hn(u);m=function(k,M){return ks(k,M,v)},u[Vn]=m}return m}function Oa(u,m){var v=u[Vn];return v||(v=function(k,M){return Ca(k,M,m)},u[Vn]=v),v}var wn=Symbol();function hl(u,m){u.push(m)}function ml(u,m,v){u.push(m,v.W)}function gl(u,m,v,k){var M=xi(k),B=Hn(k).P,R=v.W;u.push(m,function(j,X,fe){return R(j,X,fe,B,M)})}function yl(u,m,v,k,M,B){var R=Oa(k,B),j=v.W;u.push(m,function(X,fe,_e){return j(X,fe,_e,k,R)})}function Hn(u){var m=u[wn];return m||(m=Aa(u,u[wn]=[],hl,ml,gl,yl),$i in u&&wn in u&&(u.length=0),m)}var $i=Symbol();function Jr(u,m){u[0]=m}function Ir(u,m,v,k){var M=v.U;u[m]=k?function(B,R,j){return M(B,R,j,k)}:M}function za(u,m,v,k,M){var B=v.U,R=Ia(k),j=Si(k).P;u[m]=function(X,fe,_e){return B(X,fe,_e,j,R,M)}}function ns(u,m,v,k,M,B,R){var j=v.U,X=Ea(k,M,B);u[m]=function(fe,_e,Le){return j(fe,_e,Le,k,X,R)}}function Si(u){var m=u[$i];return m||(m=Aa(u,u[$i]={},Jr,Ir,za,ns),$i in u&&wn in u&&(u.length=0),m)}function Ss(u,m,v){for(;Un(m)&&m.i!=4;){var k=m.l,M=v[k];if(!M){var B=v[0];B&&(B=B[k])&&(M=v[k]=pl(B))}if(!M||!M(m,u,k)){M=m,k=u,B=M.j,Tr(M);var R=M;if(!R.ca){if(M=R.h.h-B,R.h.h=B,R=R.h,M==0)M=zt();else{if(B=hi(R,M),R.S&&R.m)M=R.i.subarray(B,B+M);else{R=R.i;var j=B;M=B+M,M=j===M?et():L?R.slice(j,M):new Uint8Array(R.subarray(j,M))}M=M.length==0?zt():new mr(M,z)}(B=k.R)?B.push(M):k.R=[M]}}}return u}function ks(u,m,v){for(var k=v.length,M=k%2==1,B=M?1:0;B<k;B+=2)(0,v[B+1])(m,u,v[B]);Ca(u,m,M?v[0]:void 0)}function ki(u,m){return{U:u,W:m}}var ur=ki(function(u,m,v){if(u.i!==5)return!1;u=u.h;var k=u.i,M=u.h,B=k[M],R=k[M+1],j=k[M+2];return k=k[M+3],Ur(u,u.h+4),R=(B<<0|R<<8|j<<16|k<<24)>>>0,u=2*(R>>31)+1,B=R>>>23&255,R&=8388607,Dt(m,v,B==255?R?NaN:1/0*u:B==0?u*Math.pow(2,-149)*R:u*Math.pow(2,B-150)*(R+Math.pow(2,23))),!0},function(u,m,v){if(m=jn(m,v),m!=null){vr(u.h,8*v+5),u=u.h;var k=+m;k===0?0<1/k?q=Z=0:(Z=0,q=2147483648):isNaN(k)?(Z=0,q=2147483647):(k=(v=0>k?-2147483648:0)?-k:k,34028234663852886e22<k?(Z=0,q=(v|2139095040)>>>0):11754943508222875e-54>k?(k=Math.round(k/Math.pow(2,-149)),Z=0,q=(v|k)>>>0):(m=Math.floor(Math.log(k)/Math.LN2),k*=Math.pow(2,-m),k=Math.round(8388608*k),16777216<=k&&++m,Z=0,q=(v|m+127<<23|k&8388607)>>>0)),v=q,u.h.push(v>>>0&255),u.h.push(v>>>8&255),u.h.push(v>>>16&255),u.h.push(v>>>24&255)}}),bl=ki(function(u,m,v){if(u.i!==0)return!1;var k=u.h,M=0,B=u=0,R=k.i,j=k.h;do{var X=R[j++];M|=(X&127)<<B,B+=7}while(32>B&&X&128);for(32<B&&(u|=(X&127)>>4),B=3;32>B&&X&128;B+=7)X=R[j++],u|=(X&127)<<B;if(Ur(k,j),128>X)k=M>>>0,X=u>>>0,(u=X&2147483648)&&(k=~k+1>>>0,X=~X>>>0,k==0&&(X=X+1>>>0)),k=4294967296*X+(k>>>0);else throw ve();return Dt(m,v,u?-k:k),!0},function(u,m,v){m=Ye(m,v),m!=null&&(typeof m=="string"&&be(m),m!=null&&(vr(u.h,8*v),typeof m=="number"?(u=u.h,se(m),mi(u,q,Z)):(v=be(m),mi(u.h,v.i,v.h))))}),Ma=ki(function(u,m,v){return u.i!==0?!1:(Dt(m,v,gn(u.h)),!0)},function(u,m,v){if(m=Ye(m,v),m!=null&&m!=null)if(vr(u.h,8*v),u=u.h,v=m,0<=v)vr(u,v);else{for(m=0;9>m;m++)u.h.push(v&127|128),v>>=7;u.h.push(1)}}),Ra=ki(function(u,m,v){if(u.i!==2)return!1;var k=gn(u.h)>>>0;u=u.h;var M=hi(u,k);if(u=u.i,yt){var B=u,R;(R=lt)||(R=lt=new TextDecoder("utf-8",{fatal:!0})),u=M+k,B=M===0&&u===B.length?B:B.subarray(M,u);try{var j=R.decode(B)}catch(Le){if(Ve===void 0){try{R.decode(new Uint8Array([128]))}catch{}try{R.decode(new Uint8Array([97])),Ve=!0}catch{Ve=!1}}throw!Ve&&(lt=void 0),Le}}else{j=M,k=j+k,M=[];for(var X=null,fe,_e;j<k;)fe=u[j++],128>fe?M.push(fe):224>fe?j>=k?Me():(_e=u[j++],194>fe||(_e&192)!==128?(j--,Me()):M.push((fe&31)<<6|_e&63)):240>fe?j>=k-1?Me():(_e=u[j++],(_e&192)!==128||fe===224&&160>_e||fe===237&&160<=_e||((B=u[j++])&192)!==128?(j--,Me()):M.push((fe&15)<<12|(_e&63)<<6|B&63)):244>=fe?j>=k-2?Me():(_e=u[j++],(_e&192)!==128||(fe<<28)+(_e-144)>>30||((B=u[j++])&192)!==128||((R=u[j++])&192)!==128?(j--,Me()):(fe=(fe&7)<<18|(_e&63)<<12|(B&63)<<6|R&63,fe-=65536,M.push((fe>>10&1023)+55296,(fe&1023)+56320))):Me(),8192<=M.length&&(X=tt(X,M),M.length=0);j=tt(X,M)}return Dt(m,v,j),!0},function(u,m,v){if(m=Ye(m,v),m!=null){var k=!1;if(k=k===void 0?!1:k,er){if(k&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(m))throw Error("Found an unpaired surrogate");m=(kt||(kt=new TextEncoder)).encode(m)}else{for(var M=0,B=new Uint8Array(3*m.length),R=0;R<m.length;R++){var j=m.charCodeAt(R);if(128>j)B[M++]=j;else{if(2048>j)B[M++]=j>>6|192;else{if(55296<=j&&57343>=j){if(56319>=j&&R<m.length){var X=m.charCodeAt(++R);if(56320<=X&&57343>=X){j=1024*(j-55296)+X-56320+65536,B[M++]=j>>18|240,B[M++]=j>>12&63|128,B[M++]=j>>6&63|128,B[M++]=j&63|128;continue}else R--}if(k)throw Error("Found an unpaired surrogate");j=65533}B[M++]=j>>12|224,B[M++]=j>>6&63|128}B[M++]=j&63|128}}m=M===B.length?B:B.subarray(0,M)}vr(u.h,8*v+2),vr(u.h,m.length),Lt(u,u.h.end()),Lt(u,m)}}),is=ki(function(u,m,v,k,M){if(u.i!==2)return!1;m=gr(m,v,k),v=u.h.j,k=gn(u.h)>>>0;var B=u.h.h+k,R=B-v;if(0>=R&&(u.h.j=B,M(m,u,void 0,void 0,void 0),R=B-u.h.h),R)throw Error("Message parsing ended unexpectedly. Expected to read "+(k+" bytes, instead read "+(k-R)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return u.h.h=B,u.h.j=v,!0},function(u,m,v,k,M){if(m=vi(m,k,v),m!=null)for(k=0;k<m.length;k++){var B=u;vr(B.h,8*v+2);var R=B.h.end();Lt(B,R),R.push(B.i),B=R,M(m[k],u),R=u;var j=B.pop();for(j=R.i+R.h.length()-j;127<j;)B.push(j&127|128),j>>>=7,R.i++;B.push(j),R.i++}});function Ts(u){return function(m,v){e:{if(_t.length){var k=_t.pop();k.setOptions(v),pi(k.h,m,v),m=k}else m=new Nn(m,v);try{var M=Si(u),B=Ss(new M.P,m,M);break e}finally{M=m.h,M.i=null,M.m=!1,M.l=0,M.j=0,M.h=0,M.S=!1,m.l=-1,m.i=-1,100>_t.length&&_t.push(m)}B=void 0}return B}}function Cs(u){return function(){var m=new Cr;ks(this,m,Hn(u)),Lt(m,m.h.end());for(var v=new Uint8Array(m.i),k=m.j,M=k.length,B=0,R=0;R<M;R++){var j=k[R];v.set(j,B),B+=j.length}return m.j=[v],v}}function qn(u){rr.call(this,u)}T(qn,rr);var Ba=[qn,1,Ma,2,ur,3,Ra,4,Ra];qn.prototype.l=Cs(Ba);function Gn(u){rr.call(this,u,-1,vl)}T(Gn,rr),Gn.prototype.addClassification=function(u,m){return gr(this,1,qn,u,m),this};var vl=[1],wl=Ts([Gn,1,is,Ba]);function Ti(u){rr.call(this,u)}T(Ti,rr);var Pa=[Ti,1,ur,2,ur,3,ur,4,ur,5,ur];Ti.prototype.l=Cs(Pa);function Da(u){rr.call(this,u,-1,_l)}T(Da,rr);var _l=[1],Na=Ts([Da,1,is,Pa]);function ss(u){rr.call(this,u)}T(ss,rr);var Ua=[ss,1,ur,2,ur,3,ur,4,ur,5,ur,6,bl],xl=Ts(Ua);ss.prototype.l=Cs(Ua);function La(u,m,v){if(v=u.createShader(v===0?u.VERTEX_SHADER:u.FRAGMENT_SHADER),u.shaderSource(v,m),u.compileShader(v),!u.getShaderParameter(v,u.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+u.getShaderInfoLog(v));return v}function $l(u){return vi(u,qn,1).map(function(m){var v=Ye(m,1);return{index:v??0,qa:Er(m,2),label:Ye(m,3)!=null?Wn(Ye(m,3),""):void 0,displayName:Ye(m,4)!=null?Wn(Ye(m,4),""):void 0}})}function Sl(u){return{x:Er(u,1),y:Er(u,2),z:Er(u,3),visibility:jn(u,4)!=null?Er(u,4):void 0}}function Es(u,m){this.i=u,this.h=m,this.m=0}function Fa(u,m,v){return ja(u,m),typeof u.h.canvas.transferToImageBitmap=="function"?Promise.resolve(u.h.canvas.transferToImageBitmap()):v?Promise.resolve(u.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(u.h.canvas):(u.j===void 0&&(u.j=document.createElement("canvas")),new Promise(function(k){u.j.height=u.h.canvas.height,u.j.width=u.h.canvas.width,u.j.getContext("2d",{}).drawImage(u.h.canvas,0,0,u.h.canvas.width,u.h.canvas.height),k(u.j)}))}function ja(u,m){var v=u.h;if(u.s===void 0){var k=La(v,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),M=La(v,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),B=v.createProgram();if(v.attachShader(B,k),v.attachShader(B,M),v.linkProgram(B),!v.getProgramParameter(B,v.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+v.getProgramInfoLog(B));k=u.s=B,v.useProgram(k),M=v.getUniformLocation(k,"sampler0"),u.l={O:v.getAttribLocation(k,"aVertex"),N:v.getAttribLocation(k,"aTex"),ya:M},u.v=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,u.v),v.enableVertexAttribArray(u.l.O),v.vertexAttribPointer(u.l.O,2,v.FLOAT,!1,0,0),v.bufferData(v.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),v.STATIC_DRAW),v.bindBuffer(v.ARRAY_BUFFER,null),u.u=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,u.u),v.enableVertexAttribArray(u.l.N),v.vertexAttribPointer(u.l.N,2,v.FLOAT,!1,0,0),v.bufferData(v.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),v.STATIC_DRAW),v.bindBuffer(v.ARRAY_BUFFER,null),v.uniform1i(M,0)}k=u.l,v.useProgram(u.s),v.canvas.width=m.width,v.canvas.height=m.height,v.viewport(0,0,m.width,m.height),v.activeTexture(v.TEXTURE0),u.i.bindTexture2d(m.glName),v.enableVertexAttribArray(k.O),v.bindBuffer(v.ARRAY_BUFFER,u.v),v.vertexAttribPointer(k.O,2,v.FLOAT,!1,0,0),v.enableVertexAttribArray(k.N),v.bindBuffer(v.ARRAY_BUFFER,u.u),v.vertexAttribPointer(k.N,2,v.FLOAT,!1,0,0),v.bindFramebuffer(v.DRAW_FRAMEBUFFER?v.DRAW_FRAMEBUFFER:v.FRAMEBUFFER,null),v.clearColor(0,0,0,0),v.clear(v.COLOR_BUFFER_BIT),v.colorMask(!0,!0,!0,!0),v.drawArrays(v.TRIANGLE_FAN,0,4),v.disableVertexAttribArray(k.O),v.disableVertexAttribArray(k.N),v.bindBuffer(v.ARRAY_BUFFER,null),u.i.bindTexture2d(0)}function Wa(u){this.h=u}var Va=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function kl(u,m){return m+u}function Ha(u,m){window[u]=m}function qa(u){var m=document.createElement("script");return m.setAttribute("src",u),m.setAttribute("crossorigin","anonymous"),new Promise(function(v){m.addEventListener("load",function(){v()},!1),m.addEventListener("error",function(){v()},!1),document.body.appendChild(m)})}function Ga(){return de(function(u){switch(u.h){case 1:return u.s=2,E(u,WebAssembly.instantiate(Va),4);case 4:u.h=3,u.s=0;break;case 2:return u.s=0,u.l=null,u.return(!1);case 3:return u.return(!0)}})}function _n(u){if(this.h=u,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=u&&u.locateFile||kl,typeof window=="object")var m=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")m=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=m,u.options){m=o(Object.keys(u.options));for(var v=m.next();!v.done;v=m.next()){v=v.value;var k=u.options[v].default;k!==void 0&&(this.l[v]=typeof k=="function"?k():k)}}}e=_n.prototype,e.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function Tl(u){var m,v,k,M,B,R,j,X,fe,_e,Le;return de(function(ze){switch(ze.h){case 1:return u.ga?(m=u.h.files===void 0?[]:typeof u.h.files=="function"?u.h.files(u.l):u.h.files,E(ze,Ga(),2)):ze.return();case 2:if(v=ze.i,typeof window=="object")return Ha("createMediapipeSolutionsWasm",{locateFile:u.locateFile}),Ha("createMediapipeSolutionsPackedAssets",{locateFile:u.locateFile}),R=m.filter(function(Se){return Se.data!==void 0}),j=m.filter(function(Se){return Se.data===void 0}),X=Promise.all(R.map(function(Se){var Ue=as(u,Se.url);if(Se.path!==void 0){var rt=Se.path;Ue=Ue.then(function(Tt){return u.overrideFile(rt,Tt),Promise.resolve(Tt)})}return Ue})),fe=Promise.all(j.map(function(Se){return Se.simd===void 0||Se.simd&&v||!Se.simd&&!v?qa(u.locateFile(Se.url,u.ha)):Promise.resolve()})).then(function(){var Se,Ue,rt;return de(function(Tt){if(Tt.h==1)return Se=window.createMediapipeSolutionsWasm,Ue=window.createMediapipeSolutionsPackedAssets,rt=u,E(Tt,Se(Ue),2);rt.i=Tt.i,Tt.h=0})}),_e=function(){return de(function(Se){return u.h.graph&&u.h.graph.url?Se=E(Se,as(u,u.h.graph.url),0):(Se.h=0,Se=void 0),Se})}(),E(ze,Promise.all([fe,X,_e]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return k=m.filter(function(Se){return Se.simd===void 0||Se.simd&&v||!Se.simd&&!v}).map(function(Se){return u.locateFile(Se.url,u.ha)}),importScripts.apply(null,l(k)),M=u,E(ze,createMediapipeSolutionsWasm(Module),6);case 6:M.i=ze.i,u.m=new OffscreenCanvas(1,1),u.i.canvas=u.m,B=u.i.GL.createContext(u.m,{antialias:!1,alpha:!1,va:typeof WebGL2RenderingContext<"u"?2:1}),u.i.GL.makeContextCurrent(B),ze.h=4;break;case 7:if(u.m=document.createElement("canvas"),Le=u.m.getContext("webgl2",{}),!Le&&(Le=u.m.getContext("webgl",{}),!Le))return alert("Failed to create WebGL canvas context when passing video frame."),ze.return();u.K=Le,u.i.canvas=u.m,u.i.createContext(u.m,!0,!0,{});case 4:u.j=new u.i.SolutionWasm,u.ga=!1,ze.h=0}})}function Ka(u){var m,v,k,M,B,R,j,X;return de(function(fe){if(fe.h==1){if(u.h.graph&&u.h.graph.url&&u.fa===u.h.graph.url)return fe.return();if(u.u=!0,!u.h.graph||!u.h.graph.url){fe.h=2;return}return u.fa=u.h.graph.url,E(fe,as(u,u.h.graph.url),3)}for(fe.h!=2&&(m=fe.i,u.j.loadGraph(m)),v=o(Object.keys(u.D)),k=v.next();!k.done;k=v.next())M=k.value,u.j.overrideFile(M,u.D[M]);if(u.D={},u.h.listeners)for(B=o(u.h.listeners),R=B.next();!R.done;R=B.next())j=R.value,Xa(u,j);X=u.l,u.l={},u.setOptions(X),fe.h=0})}e.reset=function(){var u=this;return de(function(m){u.j&&(u.j.reset(),u.s={},u.v={}),m.h=0})},e.setOptions=function(u,m){var v=this;if(m=m||this.h.options){for(var k=[],M=[],B={},R=o(Object.keys(u)),j=R.next();!j.done;B={X:B.X,Y:B.Y},j=R.next())if(j=j.value,!(j in this.l&&this.l[j]===u[j])){this.l[j]=u[j];var X=m[j];X!==void 0&&(X.onChange&&(B.X=X.onChange,B.Y=u[j],k.push(function(fe){return function(){var _e;return de(function(Le){if(Le.h==1)return E(Le,fe.X(fe.Y),2);_e=Le.i,_e===!0&&(v.u=!0),Le.h=0})}}(B))),X.graphOptionXref&&(j=Object.assign({},{calculatorName:"",calculatorIndex:0},X.graphOptionXref,{valueNumber:X.type===1?u[j]:0,valueBoolean:X.type===0?u[j]:!1,valueString:X.type===2?u[j]:""}),M.push(j)))}(k.length!==0||M.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(M),this.F=(this.F===void 0?[]:this.F).concat(k))}};function Cl(u){var m,v,k,M,B,R,j;return de(function(X){switch(X.h){case 1:if(!u.u)return X.return();if(!u.F){X.h=2;break}m=o(u.F),v=m.next();case 3:if(v.done){X.h=5;break}return k=v.value,E(X,k(),4);case 4:v=m.next(),X.h=3;break;case 5:u.F=void 0;case 2:if(u.H){for(M=new u.i.GraphOptionChangeRequestList,B=o(u.H),R=B.next();!R.done;R=B.next())j=R.value,M.push_back(j);u.j.changeOptions(M),M.delete(),u.H=void 0}u.u=!1,X.h=0}})}e.initialize=function(){var u=this;return de(function(m){return m.h==1?E(m,Tl(u),2):m.h!=3?E(m,Ka(u),3):E(m,Cl(u),0)})};function as(u,m){var v,k;return de(function(M){return m in u.L?M.return(u.L[m]):(v=u.locateFile(m,""),k=fetch(v).then(function(B){return B.arrayBuffer()}),u.L[m]=k,M.return(k))})}e.overrideFile=function(u,m){this.j?this.j.overrideFile(u,m):this.D[u]=m},e.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},e.send=function(u,m){var v=this,k,M,B,R,j,X,fe,_e,Le;return de(function(ze){switch(ze.h){case 1:return v.h.inputs?(k=1e3*(m??performance.now()),E(ze,v.I,2)):ze.return();case 2:return E(ze,v.initialize(),3);case 3:for(M=new v.i.PacketDataList,B=o(Object.keys(u)),R=B.next();!R.done;R=B.next())if(j=R.value,X=v.h.inputs[j]){e:{var Se=u[j];switch(X.type){case"video":var Ue=v.s[X.stream];if(Ue||(Ue=new Es(v.i,v.K),v.s[X.stream]=Ue),Ue.m===0&&(Ue.m=Ue.i.createTexture()),typeof HTMLVideoElement<"u"&&Se instanceof HTMLVideoElement)var rt=Se.videoWidth,Tt=Se.videoHeight;else typeof HTMLImageElement<"u"&&Se instanceof HTMLImageElement?(rt=Se.naturalWidth,Tt=Se.naturalHeight):(rt=Se.width,Tt=Se.height);Tt={glName:Ue.m,width:rt,height:Tt},rt=Ue.h,rt.canvas.width=Tt.width,rt.canvas.height=Tt.height,rt.activeTexture(rt.TEXTURE0),Ue.i.bindTexture2d(Ue.m),rt.texImage2D(rt.TEXTURE_2D,0,rt.RGBA,rt.RGBA,rt.UNSIGNED_BYTE,Se),Ue.i.bindTexture2d(0),Ue=Tt;break e;case"detections":for(Ue=v.s[X.stream],Ue||(Ue=new Wa(v.i),v.s[X.stream]=Ue),Ue.data||(Ue.data=new Ue.h.DetectionListData),Ue.data.reset(Se.length),Tt=0;Tt<Se.length;++Tt){rt=Se[Tt];var xt=Ue.data,Vt=xt.setBoundingBox,dr=Tt,Qt=rt.la,pt=new ss;if(Nt(pt,1,Qt.sa),Nt(pt,2,Qt.ta),Nt(pt,3,Qt.height),Nt(pt,4,Qt.width),Nt(pt,5,Qt.rotation),Dt(pt,6,Qt.pa),Qt=pt.l(),Vt.call(xt,dr,Qt),rt.ea)for(xt=0;xt<rt.ea.length;++xt){pt=rt.ea[xt],Vt=Ue.data,dr=Vt.addNormalizedLandmark,Qt=Tt,pt=Object.assign({},pt,{visibility:pt.visibility?pt.visibility:0});var Ht=new Ti;Nt(Ht,1,pt.x),Nt(Ht,2,pt.y),Nt(Ht,3,pt.z),pt.visibility&&Nt(Ht,4,pt.visibility),pt=Ht.l(),dr.call(Vt,Qt,pt)}if(rt.ba)for(xt=0;xt<rt.ba.length;++xt)Vt=Ue.data,dr=Vt.addClassification,Qt=Tt,pt=rt.ba[xt],Ht=new qn,Nt(Ht,2,pt.qa),pt.index&&Dt(Ht,1,pt.index),pt.label&&Dt(Ht,3,pt.label),pt.displayName&&Dt(Ht,4,pt.displayName),pt=Ht.l(),dr.call(Vt,Qt,pt)}Ue=Ue.data;break e;default:Ue={}}}switch(fe=Ue,_e=X.stream,X.type){case"video":M.pushTexture2d(Object.assign({},fe,{stream:_e,timestamp:k}));break;case"detections":Le=fe,Le.stream=_e,Le.timestamp=k,M.pushDetectionList(Le);break;default:throw Error("Unknown input config type: '"+X.type+"'")}}return v.j.send(M),E(ze,v.I,4);case 4:M.delete(),ze.h=0}})};function El(u,m,v){var k,M,B,R,j,X,fe,_e,Le,ze,Se,Ue,rt,Tt;return de(function(xt){switch(xt.h){case 1:if(!v)return xt.return(m);for(k={},M=0,B=o(Object.keys(v)),R=B.next();!R.done;R=B.next())j=R.value,X=v[j],typeof X!="string"&&X.type==="texture"&&m[X.stream]!==void 0&&++M;1<M&&(u.M=!1),fe=o(Object.keys(v)),R=fe.next();case 2:if(R.done){xt.h=4;break}if(_e=R.value,Le=v[_e],typeof Le=="string")return rt=k,Tt=_e,E(xt,Is(u,_e,m[Le]),14);if(ze=m[Le.stream],Le.type==="detection_list"){if(ze){for(var Vt=ze.getRectList(),dr=ze.getLandmarksList(),Qt=ze.getClassificationsList(),pt=[],Ht=0;Ht<Vt.size();++Ht){var en=xl(Vt.get(Ht)),Qa=Er(en,1),Ja=Er(en,2),os=Er(en,3),Ar=Er(en,4),Ci=Er(en,5,0),Kn=void 0;Kn=Kn===void 0?0:Kn,en={la:{sa:Qa,ta:Ja,height:os,width:Ar,rotation:Ci,pa:Wn(Ye(en,6),Kn)},ea:vi(Na(dr.get(Ht)),Ti,1).map(Sl),ba:$l(wl(Qt.get(Ht)))},pt.push(en)}Vt=pt}else Vt=[];k[_e]=Vt,xt.h=7;break}if(Le.type==="proto_list"){if(ze){for(Vt=Array(ze.size()),dr=0;dr<ze.size();dr++)Vt[dr]=ze.get(dr);ze.delete()}else Vt=[];k[_e]=Vt,xt.h=7;break}if(ze===void 0){xt.h=3;break}if(Le.type==="float_list"){k[_e]=ze,xt.h=7;break}if(Le.type==="proto"){k[_e]=ze,xt.h=7;break}if(Le.type!=="texture")throw Error("Unknown output config type: '"+Le.type+"'");return Se=u.v[_e],Se||(Se=new Es(u.i,u.K),u.v[_e]=Se),E(xt,Fa(Se,ze,u.M),13);case 13:Ue=xt.i,k[_e]=Ue;case 7:Le.transform&&k[_e]&&(k[_e]=Le.transform(k[_e])),xt.h=3;break;case 14:rt[Tt]=xt.i;case 3:R=fe.next(),xt.h=2;break;case 4:return xt.return(k)}})}function Is(u,m,v){var k;return de(function(M){return typeof v=="number"||v instanceof Uint8Array||v instanceof u.i.Uint8BlobList?M.return(v):v instanceof u.i.Texture2dDataOut?(k=u.v[m],k||(k=new Es(u.i,u.K),u.v[m]=k),M.return(Fa(k,v,u.M))):M.return(void 0)})}function Xa(u,m){for(var v=m.name||"$",k=[].concat(l(m.wants)),M=new u.i.StringList,B=o(m.wants),R=B.next();!R.done;R=B.next())M.push_back(R.value);B=u.i.PacketListener.implement({onResults:function(j){for(var X={},fe=0;fe<m.wants.length;++fe)X[k[fe]]=j.get(fe);var _e=u.listeners[v];_e&&(u.I=El(u,X,m.outs).then(function(Le){Le=_e(Le);for(var ze=0;ze<m.wants.length;++ze){var Se=X[k[ze]];typeof Se=="object"&&Se.hasOwnProperty&&Se.hasOwnProperty("delete")&&Se.delete()}Le&&(u.I=Le)}))}}),u.j.attachMultiListener(M,B),M.delete()}e.onResults=function(u,m){this.listeners[m||"$"]=u},te("Solution",_n),te("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Ya(u){switch(u===void 0&&(u=0),u){case 1:return"selfie_segmentation_landscape.tflite";default:return"selfie_segmentation.tflite"}}function Za(u){var m=this;u=u||{},this.h=new _n({locateFile:u.locateFile,files:function(v){return[{simd:!0,url:"selfie_segmentation_solution_simd_wasm_bin.js"},{simd:!1,url:"selfie_segmentation_solution_wasm_bin.js"},{data:!0,url:Ya(v.modelSelection)}]},graph:{url:"selfie_segmentation.binarypb"},listeners:[{wants:["segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelSelection:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelSelection",fieldName:"int_value"},onChange:function(v){var k,M,B;return de(function(R){return R.h==1?(k=Ya(v),M="third_party/mediapipe/modules/selfie_segmentation/"+k,E(R,as(m.h,k),2)):(B=R.i,m.h.overrideFile(M,B),R.return(!0))})}}}})}e=Za.prototype,e.close=function(){return this.h.close(),Promise.resolve()},e.onResults=function(u){this.h.onResults(u)},e.initialize=function(){var u=this;return de(function(m){return E(m,u.h.initialize(),0)})},e.reset=function(){this.h.reset()},e.send=function(u){var m=this;return de(function(v){return E(v,m.h.send(u),0)})},e.setOptions=function(u){this.h.setOptions(u)},te("SelfieSegmentation",Za),te("VERSION","0.1.1675465747")}).call(Yl);class Mx{segmenter=null;isLoaded=!1;isProcessing=!1;lastProcessTime=0;targetFps=15;frameInterval=1e3/15;downsampleCanvas;downsampleCtx;onResultCallback;constructor(){this.downsampleCanvas=document.createElement("canvas"),this.downsampleCanvas.width=256,this.downsampleCanvas.height=256,this.downsampleCtx=this.downsampleCanvas.getContext("2d",{willReadFrequently:!0})}async init(t="/mediapipe/"){if(!this.isLoaded)try{this.segmenter=new ay.SelfieSegmentation({locateFile:r=>`/mediapipe/${r}`}),this.segmenter.setOptions({modelSelection:0,selfieMode:!1}),this.segmenter.onResults(r=>{this.isProcessing=!1,this.onResultCallback&&r.segmentationMask&&this.onResultCallback(r.segmentationMask,r.image)}),await this.segmenter.initialize(),this.isLoaded=!0,console.log("[RealtimeSegmenter] MediaPipe SelfieSegmentation 初始化成功")}catch(r){console.warn("[RealtimeSegmenter] MediaPipe 初始化降级提示:",r)}}setOnResult(t){this.onResultCallback=t}async sendFrame(t){if(!this.segmenter||!this.isLoaded)return!1;const r=performance.now();if(r-this.lastProcessTime<this.frameInterval||this.isProcessing)return!1;this.lastProcessTime=r,this.isProcessing=!0;try{if(this.downsampleCtx)return this.downsampleCtx.drawImage(t,0,0,256,256),await this.segmenter.send({image:this.downsampleCanvas}),!0}catch(n){this.isProcessing=!1,console.error("[RealtimeSegmenter] sendFrame 错误:",n)}return!1}renderComposite(t,r,n,i,s=!1){const a=t.getContext("2d");if(!a)return;const o=t.width,l=t.height;if(a.save(),s&&(a.translate(o,0),a.scale(-1,1)),a.clearRect(0,0,o,l),i.isGradient&&i.gradientStops){const p=a.createLinearGradient(0,0,0,l);p.addColorStop(0,i.gradientStops[0]),p.addColorStop(1,i.gradientStops[1]),a.fillStyle=p}else a.fillStyle=i.value||"#FFFFFF";a.fillRect(0,0,o,l),a.save(),a.globalCompositeOperation="source-over";const d=document.createElement("canvas");d.width=o,d.height=l;const f=d.getContext("2d");if(f){const p=r.videoWidth||r.naturalWidth||r.width||o,g=r.videoHeight||r.naturalHeight||r.height||l,b=Math.max(o/p,l/g),y=o/b,x=l/b,T=(p-y)/2,S=(g-x)/2;f.drawImage(n,T,S,y,x,0,0,o,l);const $=f.getImageData(0,0,o,l),I=$.data;for(let E=0;E<I.length;E+=4)I[E+3]=I[E];f.putImageData($,0,0),f.globalCompositeOperation="source-in",f.drawImage(r,T,S,y,x,0,0,o,l),a.drawImage(d,0,0,o,l)}a.restore(),a.restore()}destroy(){this.segmenter&&(this.segmenter.close(),this.segmenter=null),this.isLoaded=!1}}/*!
 * ONNX Runtime Web v1.30.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var qd=Object.defineProperty,Rx=Object.getOwnPropertyDescriptor,Bx=Object.getOwnPropertyNames,Px=Object.prototype.hasOwnProperty,Dx=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),pe=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(n){throw r=[n],n}},_s=(e,t)=>{for(var r in t)qd(e,r,{get:t[r],enumerable:!0})},Nx=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Bx(t))!Px.call(e,i)&&i!==r&&qd(e,i,{get:()=>t[i],enumerable:!(n=Rx(t,i))||n.enumerable});return e},ga=e=>Nx(qd({},"__esModule",{value:!0}),e),Bs,Zn,cs,ip,oy,ly=pe(()=>{"use strict";Bs=new Map,Zn=[],cs=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=Bs.get(e);if(n===void 0)Bs.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=Zn.indexOf(e);i!==-1&&Zn.splice(i,1);for(let s=0;s<Zn.length;s++)if(Bs.get(Zn[s]).priority<=r){Zn.splice(s,0,e);return}Zn.push(e)}return}throw new TypeError("not a valid backend")},ip=async e=>{let t=Bs.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},oy=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),n=r.length===0?Zn:r,i,s=[],a=new Set;for(let l of n){let d=await ip(l);typeof d=="string"?s.push({name:l,err:d}):(i||(i=d),i===d&&a.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>a.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),Ux=pe(()=>{"use strict";ly()}),uy,Lx=pe(()=>{"use strict";uy="1.30.0"}),Zl,Xt,dy=pe(()=>{"use strict";Lx(),Zl="warning",Xt={wasm:{},webgl:{},webgpu:{},versions:{common:uy},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Zl=e}},get logLevel(){return Zl}},Object.defineProperty(Xt,"logLevel",{enumerable:!0})}),St,Fx=pe(()=>{"use strict";dy(),St=Xt}),cy,fy,jx=pe(()=>{"use strict";cy=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let a=t?.format!==void 0?t.format:"RGB",o=t?.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let f=s*i,p=0,g=f,b=f*2,y=-1;a==="RGBA"?(p=0,g=f,b=f*2,y=f*3):a==="RGB"?(p=0,g=f,b=f*2):a==="RBG"&&(p=0,b=f,g=f*2);for(let x=0;x<s;x++)for(let T=0;T<i;T++){let S=(e.data[p++]-d[0])*l[0],$=(e.data[g++]-d[1])*l[1],I=(e.data[b++]-d[2])*l[2],E=y===-1?255:(e.data[y++]-d[3])*l[3];n.fillStyle="rgba("+S+","+$+","+I+","+E+")",n.fillRect(T,x,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},fy=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,s,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],a=e.dims[3]):(i=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,f;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?f=[0,0,0,0]:typeof l.bias=="number"?f=[l.bias,l.bias,l.bias,l.bias]:(f=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(f[3]=l.bias[3]));let p=s*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,b=0,y=1,x=2,T=3,S=0,$=p,I=p*2,E=-1;o==="RGBA"?(S=0,$=p,I=p*2,E=p*3):o==="RGB"?(S=0,$=p,I=p*2):o==="RBG"&&(S=0,I=p,$=p*2),n=r.createImageData(i,s);for(let O=0;O<s*i;b+=g,y+=g,x+=g,T+=g,O++)n.data[b]=(e.data[S++]-f[0])*d[0],n.data[y]=(e.data[$++]-f[1])*d[1],n.data[x]=(e.data[I++]-f[2])*d[2],n.data[T]=E===-1?255:(e.data[E++]-f[3])*d[3]}else throw new Error("Can not access image data");return n}}),uo,py,hy,my,gy,yy,Wx=pe(()=>{"use strict";Gd(),uo=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},s,a;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,f=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),p=4,g=0,b=1,y=2,x=3,T=0,S=d,$=d*2,I=-1;o==="RGB"&&(p=3,g=0,b=1,y=2,x=-1),l==="RGBA"?I=d*3:l==="RBG"?(T=0,$=d,S=d*2):l==="BGR"&&($=0,S=d,T=d*2);for(let E=0;E<d;E++,g+=p,y+=p,b+=p,x+=p)f[T++]=(e[g]+a[0])/s[0],f[S++]=(e[b]+a[1])/s[1],f[$++]=(e[y]+a[2])/s[2],I!==-1&&x!==-1&&(f[I++]=(e[x]+a[3])/s[3]);return l==="RGBA"?new xr("float32",f,[1,4,r,n]):new xr("float32",f,[1,3,r,n])},py=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=l();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let g=e.height,b=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,b=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=g,o.width=b}else o.tensorFormat="RGBA",o.height=g,o.width=b;p.drawImage(e,0,0),a=p.getImageData(0,0,b,g).data}else throw new Error("Can not access image data")}else if(n){let f,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,p=t.resizedWidth):(f=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=f,o.width=p,t!==void 0){let g=l();g.width=p,g.height=f;let b=d(g);if(b!=null)b.putImageData(e,0,0),a=b.getImageData(0,0,p,f).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=l();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let g=e.height,b=e.width;return p.drawImage(e,0,0,b,g),a=p.getImageData(0,0,b,g).data,o.height=g,o.width=b,uo(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((f,p)=>{let g=l(),b=d(g);if(!e||!b)return p();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{g.width=y.width,g.height=y.height,b.drawImage(y,0,0,g.width,g.height);let x=b.getImageData(0,0,g.width,g.height);o.height=g.height,o.width=g.width,f(uo(x.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return uo(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},hy=(e,t)=>{let{width:r,height:n,download:i,dispose:s}=t,a=[1,n,r,4];return new xr({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:s})},my=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new xr({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:s})},gy=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new xr({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:s})},yy=(e,t,r)=>new xr({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Ui,Ks,Ql,by,Vx=pe(()=>{"use strict";Ui=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ks=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ql=!1,by=()=>{if(!Ql){Ql=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(Ui.set("int64",BigInt64Array),Ks.set(BigInt64Array,"int64")),t&&(Ui.set("uint64",BigUint64Array),Ks.set(BigUint64Array,"uint64")),n?(Ui.set("float16",r),Ks.set(r,"float16")):Ui.set("float16",Uint16Array)}}}),vy,wy,Hx=pe(()=>{"use strict";Gd(),vy=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},wy=(e,t)=>{switch(e.location){case"cpu":return new xr(e.type,e.data,t);case"cpu-pinned":return new xr({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new xr({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new xr({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new xr({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),xr,Gd=pe(()=>{"use strict";jx(),Wx(),Vx(),Hx(),xr=class{constructor(e,t,r){by();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=Ui.get(n);if(!a)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let l=Ui.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?a=l.from(t,BigInt):a=l.from(t)}else if(t instanceof l)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")n="string",a=e;else if(l==="boolean")n="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",a=Uint8Array.from(e);else{let l=Ks.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=l,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=a,this.dataLocation="cpu"}let s=vy(i);if(this.cpuData&&s!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=s}static async fromImage(e,t){return py(e,t)}static fromTexture(e,t){return hy(e,t)}static fromGpuBuffer(e,t){return my(e,t)}static fromMLTensor(e,t){return gy(e,t)}static fromPinnedBuffer(e,t,r){return yy(e,t,r)}toDataURL(e){return cy(this,e)}toImageData(e){return fy(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return wy(this,e)}}}),Gr,_y=pe(()=>{"use strict";Gd(),Gr=xr}),jo,Jl,hn,Yr,Gi,Ki,xy=pe(()=>{"use strict";dy(),jo=(e,t)=>{(typeof Xt.trace>"u"?!Xt.wasm.trace:!Xt.trace)||console.timeStamp(`${e}::ORT::${t}`)},Jl=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(s+=`::${t}`),jo("CPU",s);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},hn=e=>{(typeof Xt.trace>"u"?!Xt.wasm.trace:!Xt.trace)||Jl("BEGIN",e)},Yr=e=>{(typeof Xt.trace>"u"?!Xt.wasm.trace:!Xt.trace)||Jl("END",e)},Gi=e=>{(typeof Xt.trace>"u"?!Xt.wasm.trace:!Xt.trace)||console.time(`ORT::${e}`)},Ki=e=>{(typeof Xt.trace>"u"?!Xt.wasm.trace:!Xt.trace)||console.timeEnd(`ORT::${e}`)}}),$y,qx=pe(()=>{"use strict";ly(),_y(),xy(),$y=class Sy{constructor(t){this.handler=t}async run(t,r,n){hn(),Gi("InferenceSession.run");let i={},s={};if(typeof t!="object"||t===null||t instanceof Gr||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Gr)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,f=Object.getOwnPropertyNames(r);for(let p of this.outputNames)if(f.indexOf(p)!==-1){let g=r[p];(g===null||g instanceof Gr)&&(d=!0,a=!1,i[p]=g)}if(d){if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,s),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let f=o[d];f instanceof Gr?l[d]=f:l[d]=new Gr(f.type,f.data,f.dims)}return Ki("InferenceSession.run"),Yr(),l}async release(){return this.handler.dispose()}static async create(t,r,n,i){hn(),Gi("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,p=0,g=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(g=t.byteLength-p,typeof n=="number"){if(g=n,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||p+g>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-p}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(f,p,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await oy(a),d=await o.createInferenceSessionHandler(s,l);return Ki("InferenceSession.create"),Yr(),new Sy(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Kd,Gx=pe(()=>{"use strict";qx(),Kd=$y}),Kx=pe(()=>{"use strict"}),Xx=pe(()=>{"use strict"}),Yx=pe(()=>{"use strict"}),Zx=pe(()=>{"use strict"}),Qx={};_s(Qx,{InferenceSession:()=>Kd,TRACE:()=>jo,TRACE_EVENT_BEGIN:()=>Gi,TRACE_EVENT_END:()=>Ki,TRACE_FUNC_BEGIN:()=>hn,TRACE_FUNC_END:()=>Yr,Tensor:()=>Gr,env:()=>St,registerBackend:()=>cs});var Nr=pe(()=>{"use strict";Ux(),Fx(),Gx(),_y(),Kx(),Xx(),xy(),Yx(),Zx()}),Xd=pe(()=>{"use strict"}),ky={};_s(ky,{default:()=>Ty});var eu,tu,Ty,Jx=pe(()=>{"use strict";R1(),Qi(),Yd(),eu="ort-wasm-proxy-worker",tu=globalThis.self?.name===eu,tu&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Zd(r.wasm).then(()=>{hc(r).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})})},n=>{postMessage({type:t,err:n})});break;case"init-ep":{let{epName:n,env:i}=r;mc(i,n).then(()=>{postMessage({type:t})},s=>{postMessage({type:t,err:s})});break}case"copy-from":{let{buffer:n}=r,i=Xo(n);postMessage({type:t,out:i});break}case"create":{let{model:n,options:i}=r;gc(n,i).then(s=>{postMessage({type:t,out:s})},s=>{postMessage({type:t,err:s})});break}case"release":yc(r),postMessage({type:t});break;case"run":{let{sessionId:n,inputIndices:i,inputs:s,outputIndices:a,options:o}=r;bc(n,i,s,a,new Array(a.length).fill(null),o).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},wc([...s,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":vc(r),postMessage({type:t});break;default:}}catch(n){postMessage({type:t,err:n})}}),Ty=tu?null:e=>new Worker(e??wr,{type:"module",name:eu})}),Cy={};_s(Cy,{default:()=>Ey});async function sp(e={}){var t=e,r=!!globalThis.window,n=!!globalThis.WorkerGlobalScope,i=n&&self.name?.startsWith("em-pthread");t.mountExternalData=(c,h)=>{c.startsWith("./")&&(c=c.substring(2)),(t.ad||(t.ad=new Map)).set(c,h)},t.unmountExternalData=()=>{delete t.ad,delete t.Yd,delete t.Xd,delete t.be},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=c=>async(...h)=>{try{if(t.$c)throw Error("Session already started");let _=t.$c={Nd:h[0],errors:[]},w=await c(...h);if(t.$c!==_)throw Error("Session mismatch");t.hd?.flush();let A=_.errors;if(0<A.length){let D=await Promise.all(A);if(D=D.filter(W=>W),0<D.length)throw Error(D.join(`
`))}return w}finally{t.$c=null}};t.jsepInit=(c,h)=>{if(c==="webgpu"){[t.hd,t.Dd,t.Hd,t.jd,t.Gd,t.bc,t.Id,t.Kd,t.Ed,t.Fd,t.Jd]=h;let _=t.hd;t.jsepRegisterBuffer=(w,A,D,W)=>_.registerBuffer(w,A,D,W),t.jsepGetBuffer=w=>_.getBuffer(w),t.jsepCreateDownloader=(w,A,D)=>_.createDownloader(w,A,D),t.jsepOnCreateSession=w=>{_.onCreateSession(w)},t.jsepOnReleaseSession=w=>{_.onReleaseSession(w)},t.jsepOnRunStart=w=>_.onRunStart(w),t.Ld=(w,A)=>{_.upload(w,A)}}else if(c==="webnn"){let _=h[0];[t.Vd,t.vd,t.webnnEnsureTensor,t.wd,t.webnnDownloadTensor,t.Ud,t.webnnEnableTraceEvent]=h.slice(1),t.webnnReleaseTensorId=t.vd,t.webnnUploadTensor=t.wd,t.webnnRegisterMLContext=t.Ud,t.webnnOnRunStart=w=>_.onRunStart(w),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=w=>{_.onReleaseSession(w)},t.webnnCreateMLTensorDownloader=(w,A)=>_.createMLTensorDownloader(w,A),t.webnnRegisterMLTensor=(w,A,D,W)=>_.registerMLTensor(w,A,D,W),t.webnnCreateMLContext=w=>_.createMLContext(w),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let a=()=>{let c=h=>(..._)=>{let w=Ir;return _=h(..._),Ir!=w?new Promise((A,D)=>{ur={resolve:A,reject:D}}):_};(()=>{for(let h of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[h]=c(t[h])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a?.()};var o,l,d=(c,h)=>{throw h},f=import.meta.url,p="";if(r||n){try{p=new URL(".",f).href}catch{}n&&(l=c=>{var h=new XMLHttpRequest;return h.open("GET",c,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),o=async c=>{if(N(c))return new Promise((_,w)=>{var A=new XMLHttpRequest;A.open("GET",c,!0),A.responseType="arraybuffer",A.onload=()=>{A.status==200||A.status==0&&A.response?_(A.response):w(A.status)},A.onerror=w,A.send(null)});var h=await fetch(c,{credentials:"same-origin"});if(h.ok)return h.arrayBuffer();throw Error(h.status+" : "+h.url)}}var g,b,y,x,T,S,$=console.log.bind(console),I=console.error.bind(console),E=$,O=I,P=!1,N=c=>c.startsWith("file://");function C(){Ve.buffer!=Q.buffer&&xe()}if(i){let c=function(h){try{var _=h.data,w=_.Vc;if(w==="load"){let A=[];self.onmessage=D=>A.push(D),S=()=>{postMessage({Vc:"loaded"});for(let D of A)c(D);self.onmessage=c};for(let D of _.Ad)t[D]&&!t[D].proxy||(t[D]=(...W)=>{postMessage({Vc:"callHandler",yd:D,args:W})},D=="print"&&(E=t[D]),D=="printErr"&&(O=t[D]));Ve=_.Rd,xe(),b=_.Sd,Fe(),eo()}else if(w==="run"){(function(A){var D=(C(),te)[A+52>>>2>>>0];A=(C(),te)[A+56>>>2>>>0],Tc(D,D-A),nt(D)})(_.Uc),Kn(_.Uc,0,0,1,0,0),Oe(),Vn(_.Uc),V||(Ja(),V=!0);try{lt(_.Pd,_.ed)}catch(A){if(A!="unwind")throw A}}else _.target!=="setimmediate"&&(w==="checkMailbox"?V&&xi():w&&(O(`worker: received unknown command ${w}`),O(_)))}catch(A){throw _c(),A}};var V=!1;self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=c}var Q,de,K,ue,H,te,he,ce,ge,ae,Ie,ne=!1;function xe(){var c=Ve.buffer;t.HEAP8=Q=new Int8Array(c),K=new Int16Array(c),t.HEAPU8=de=new Uint8Array(c),ue=new Uint16Array(c),t.HEAP32=H=new Int32Array(c),t.HEAPU32=te=new Uint32Array(c),he=new Float32Array(c),ce=new Float64Array(c),ge=new BigInt64Array(c),ae=new BigUint64Array(c)}function $e(){ne=!0,i?S():xn.ub()}function ie(c){throw O(c="Aborted("+c+")"),P=!0,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),T?.(c),c}function Pe(){return{a:{ma:K1,hb:G1,g:er,J:kr,f:mn,o:pi,i:Ur,$:gn,b:hi,S:es,Ha:mi,n:vr,aa:Cr,Ya:Lt,Da:bn,Fa:ar,Za:or,Wa:gi,Pa:Et,Va:lr,ka:Ln,Ea:yi,Ba:vn,Xa:Fn,Ca:G,cb:F,fa:tr,wa:bi,ua:ts,ea:$a,N:xs,H:cl,va:Sa,_:Ia,xa:fl,Sa:pl,za:Oa,Ia:hl,sa:ml,ga:gl,Ra:Vn,$a:yl,Q:Ra,r:vl,c:vi,ib:wl,y:Ti,M:Pa,D:Da,l:_l,s:Na,jb:ss,I:Ua,R:xl,j:La,u:$l,q:Sl,k:Es,Ma:Fa,Na:kl,Oa:Ha,Ka:qa,La:Ga,ta:Ka,eb:Cl,bb:El,v:Ya,ba:Za,ha:u,ab:as,V:m,_a:v,Aa:k,F:Tl,U:M,la:fe,ya:_e,gb:X,fb:Le,Ta:rt,Ua:Tt,Ga:ye,T:xt,Ja:Vt,ja:dr,Qa:Qt,ia:Ht,lb:Ow,na:Tw,mb:Aw,oa:kw,G:hw,e:Q1,t:Y1,w:X1,B:lw,nb:xw,Z:_w,x:tw,pa:$w,X:Cw,ca:ww,ob:vw,pb:bw,O:uw,qb:gw,qa:yw,rb:mw,L:fw,Y:Sw,d:Z1,A:ew,m:J1,kb:zw,p:nw,z:iw,C:rw,E:sw,K:dw,ra:pw,P:Ew,da:cw,W:Iw,sb:ow,tb:aw,h:en,a:Ve,db:se}}}async function Fe(){function c(w,A){var D=xn=w.exports;w={};for(let[W,re]of Object.entries(D))typeof re=="function"?(D=$i(re),w[W]=D):w[W]=re;return xn=w,xn=function(){var W=xn,re=ke=>Ze=>ke(Ze)>>>0,we=ke=>()=>ke()>>>0;return(W=Object.assign({},W)).vb=re(W.vb),W.Zb=we(W.Zb),W.$b=re(W.$b),W.nc=re(W.nc),W.oc=we(W.oc),W.sc=re(W.sc),W}(),le.push(xn.ac),Qa=(w=xn).vb,Ja=w.wb,t._OrtInit=w.xb,t._OrtGetLastError=w.yb,t._OrtCreateSessionOptions=w.zb,t._OrtAppendExecutionProvider=w.Ab,t._OrtAddFreeDimensionOverride=w.Bb,t._OrtAddSessionConfigEntry=w.Cb,t._OrtReleaseSessionOptions=w.Db,t._OrtCreateSession=w.Eb,t._OrtReleaseSession=w.Fb,t._OrtGetInputOutputCount=w.Gb,t._OrtGetInputOutputMetadata=w.Hb,t._OrtFree=w.Ib,t._OrtCreateTensor=w.Jb,t._OrtGetTensorData=w.Kb,t._OrtReleaseTensor=w.Lb,t._OrtCreateRunOptions=w.Mb,t._OrtAddRunConfigEntry=w.Nb,t._OrtReleaseRunOptions=w.Ob,t._OrtCreateBinding=w.Pb,t._OrtBindInput=w.Qb,t._OrtBindOutput=w.Rb,t._OrtClearBoundOutputs=w.Sb,t._OrtReleaseBinding=w.Tb,t._OrtRunWithBinding=w.Ub,t._OrtRun=w.Vb,t._OrtEndProfiling=w.Wb,t._JsepOutput=w.Xb,t._JsepGetNodeName=w.Yb,os=w.Zb,Ar=t._free=w._b,Ci=t._malloc=w.$b,Kn=w.cc,_c=w.dc,xc=w.ec,$c=w.fc,Il=w.gc,Sc=w.hc,kc=w.ic,at=w.jc,As=w.kc,Tc=w.lc,nt=w.mc,Al=w.nc,st=w.oc,Cc=w.pc,Ol=w.qc,Ec=w.rc,Ic=w.sc,Ac=w.tc,zl=w.uc,Oc=w.vc,zc=w.wc,Mc=w.xc,Rc=w.yc,Bc=w.zc,Pc=w.Ac,Dc=w.Bc,Nc=w.Cc,Uc=w.Dc,Lc=w.Ec,Fc=w.Fc,jc=w.Gc,Wc=w.Hc,Vc=w.Ic,Hc=w.Jc,qc=w.Kc,Gc=w.Lc,Kc=w.Mc,Xc=w.Nc,Yc=w.Oc,Zc=w.Pc,Qc=w.Qc,Jc=w.Sc,ef=w.Tc,tf=w.cd,rf=w.dd,nf=w.id,sf=w.nd,af=w.od,of=w.pd,lf=w.qd,uf=w.rd,df=w.sd,cf=w.td,ff=w.ud,pf=w.zd,hf=w.Zd,mf=w._d,gf=w.$d,yf=w.ae,b=A,xn}var h,_=Pe();return t.instantiateWasm?new Promise(w=>{t.instantiateWasm(_,(A,D)=>{w(c(A,D))})}):i?c(new WebAssembly.Instance(b,Pe()),b):(Ie??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-MDYUKy93.wasm",import.meta.url).href,h=await async function(w){var A=Ie;if(!g&&!N(A))try{var D=fetch(A,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(D,w)}catch(W){O(`wasm streaming compile failed: ${W}`),O("falling back to ArrayBuffer instantiation")}return async function(W,re){try{var we=await async function(ke){if(!g)try{var Ze=await o(ke);return new Uint8Array(Ze)}catch{}if(ke==Ie&&g)ke=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";ke=l(ke)}return ke}(W);return await WebAssembly.instantiate(we,re)}catch(ke){O(`failed to asynchronously prepare wasm: ${ke}`),ie(ke)}}(A,w)}(_),c(h.instance,h.module))}class We{name="ExitStatus";constructor(h){this.message=`Program terminated with exit(${h})`,this.status=h}}var Xe=c=>{c.terminate(),c.onmessage=()=>{}},Ne=[],et=0,z=null,L=c=>{me.length==0&&(tt(),Me(me[0]));var h=me.pop();if(!h)return 6;be.push(h),Ce[c.Uc]=h,h.Uc=c.Uc;var _={Vc:"run",Pd:c.Od,ed:c.ed,Uc:c.Uc};return h.postMessage(_,c.md),0},q=0,Z=(c,h,..._)=>{var w,A=16*_.length,D=st(),W=Al(A),re=W>>>3;for(w of _)typeof w=="bigint"?((C(),ge)[re++>>>0]=1n,(C(),ge)[re++>>>0]=w):((C(),ge)[re++>>>0]=0n,(C(),ce)[re++>>>0]=w);return c=xc(c,0,A,W,h),nt(D),c};function se(c){if(i)return Z(0,1,c);if(y=c,!(0<q)){for(var h of be)Xe(h);for(h of me)Xe(h);me=[],be=[],Ce={},P=!0}d(0,new We(c))}function oe(c){if(i)return Z(1,0,c);ye(c)}var ye=c=>{if(y=c,i)throw oe(c),"unwind";se(c)},me=[],be=[],le=[],Ce={},ve=c=>{var h=c.Uc;delete Ce[h],me.push(c),be.splice(be.indexOf(c),1),c.Uc=0,$c(h)};function Oe(){le.forEach(c=>c())}var Me=c=>new Promise(h=>{c.onmessage=A=>{var D=A.data;if(A=D.Vc,D.bd&&D.bd!=os()){var W=Ce[D.bd];W?W.postMessage(D,D.md):O(`Internal error! Worker sent a message "${A}" to target pthread ${D.bd}, but that thread no longer exists!`)}else A==="checkMailbox"?xi():A==="spawnThread"?L(D):A==="cleanupThread"?_i(()=>{ve(Ce[D.Qd])}):A==="loaded"?(c.loaded=!0,h(c)):D.target==="setimmediate"?c.postMessage(D):A==="uncaughtException"?c.onerror(D.error):A==="callHandler"?t[D.yd](...D.args):A&&O(`worker sent an unknown command ${A}`)},c.onerror=A=>{throw O(`worker sent an error! ${A.filename}:${A.lineno}: ${A.message}`),A};var _,w=[];for(_ of[])t.propertyIsEnumerable(_)&&w.push(_);c.postMessage({Vc:"load",Ad:w,Rd:Ve,Sd:b})});function tt(){var c=new Worker((()=>{let h=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new h("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});me.push(c)}var Ve,lt=(c,h)=>{q=0,c=zl(c,h),0<q?y=c:Il(c)},yt=[],kt=0;function er(c){var h=new Pt(c>>>=0);return(C(),Q)[h.Wc+12>>>0]==0&&(mr(h,!0),kt--),zt(h,!1),yt.push(h),Ic(c)}var Bt=0,kr=()=>{at(0,0);var c=yt.pop();Cc(c.gd),Bt=0};function mr(c,h){h=h?1:0,(C(),Q)[c.Wc+12>>>0]=h}function zt(c,h){h=h?1:0,(C(),Q)[c.Wc+13>>>0]=h}class Pt{constructor(h){this.gd=h,this.Wc=h-24}}var Zt=c=>{var h=Bt;if(!h)return As(0),0;var _=new Pt(h);(C(),te)[_.Wc+16>>>2>>>0]=h;var w=(C(),te)[_.Wc+4>>>2>>>0];if(!w)return As(0),h;for(var A of c){if(A===0||A===w)break;if(Ec(A,w,_.Wc+16))return As(A),h}return As(w),h};function mn(){return Zt([])}function pi(c){return Zt([c>>>0])}function Ur(c,h,_,w){return Zt([c>>>0,h>>>0,_>>>0,w>>>0])}var gn=()=>{var c=yt.pop();c||ie("no exception to throw");var h=c.gd;throw(C(),Q)[c.Wc+13>>>0]==0&&(yt.push(c),zt(c,!0),mr(c,!1),kt++),Ol(h),Bt=h};function hi(c,h,_){var w=new Pt(c>>>=0);throw h>>>=0,_>>>=0,(C(),te)[w.Wc+16>>>2>>>0]=0,(C(),te)[w.Wc+4>>>2>>>0]=h,(C(),te)[w.Wc+8>>>2>>>0]=_,Ol(c),kt++,Bt=c}var es=()=>kt;function yn(c,h,_,w){return i?Z(2,1,c,h,_,w):mi(c,h,_,w)}function mi(c,h,_,w){if(c>>>=0,h>>>=0,_>>>=0,w>>>=0,!globalThis.SharedArrayBuffer)return 6;var A=[];return i&&A.length===0?yn(c,h,_,w):(c={Od:_,Uc:c,ed:w,md:A},i?(c.Vc="spawnThread",postMessage(c,A),0):L(c))}function vr(c){throw Bt||=c>>>0,Bt}var Nn=globalThis.TextDecoder&&new TextDecoder,Un=(c,h,_,w)=>{if(_=h+_,w)return _;for(;c[h]&&!(h>=_);)++h;return h},Tr=(c,h=0,_,w)=>{if(16<(_=Un(c,h>>>=0,_,w))-h&&c.buffer&&Nn)return Nn.decode(c.buffer instanceof ArrayBuffer?c.subarray(h,_):c.slice(h,_));for(w="";h<_;){var A=c[h++];if(128&A){var D=63&c[h++];if((224&A)==192)w+=String.fromCharCode((31&A)<<6|D);else{var W=63&c[h++];65536>(A=(240&A)==224?(15&A)<<12|D<<6|W:(7&A)<<18|D<<12|W<<6|63&c[h++])?w+=String.fromCharCode(A):(A-=65536,w+=String.fromCharCode(55296|A>>10,56320|1023&A))}}else w+=String.fromCharCode(A)}return w},_t=(c,h,_)=>(c>>>=0)?Tr((C(),de),c,h,_):"";function Cr(c,h,_){return i?Z(3,1,c,h,_):0}function Lt(c,h){if(i)return Z(4,1,c,h)}function bn(c,h){if(i)return Z(5,1,c,h)}function ar(c,h,_){if(i)return Z(6,1,c,h,_)}function or(c,h,_){return i?Z(7,1,c,h,_):0}function gi(c,h){if(i)return Z(8,1,c,h)}function Et(c,h,_){if(i)return Z(9,1,c,h,_)}function lr(c,h,_,w){if(i)return Z(10,1,c,h,_,w)}function Ln(c,h,_,w){if(i)return Z(11,1,c,h,_,w)}function yi(c,h,_,w){if(i)return Z(12,1,c,h,_,w)}function vn(c){if(i)return Z(13,1,c)}function Fn(c,h){if(i)return Z(14,1,c,h)}function G(c,h,_){if(i)return Z(15,1,c,h,_)}var F=()=>ie(""),J=c=>{c>>>=0;for(var h="";;){var _=(C(),de)[c++>>>0];if(!_)return h;h+=String.fromCharCode(_)}},De={},it={},mt=class extends Error{constructor(c){super(c),this.name="BindingError"}};function Ye(c,h,_={}){return function(w,A,D={}){var W=A.name;if(!w)throw new mt(`type "${W}" must have a positive integer typeid pointer`);if(it.hasOwnProperty(w)){if(D.Bd)return;throw new mt(`Cannot register type '${W}' twice`)}it[w]=A,De.hasOwnProperty(w)&&(A=De[w],delete De[w],A.forEach(re=>re()))}(c,h,_)}var Dt=(c,h,_)=>{switch(h){case 1:return _?w=>(C(),Q)[w>>>0]:w=>(C(),de)[w>>>0];case 2:return _?w=>(C(),K)[w>>>1>>>0]:w=>(C(),ue)[w>>>1>>>0];case 4:return _?w=>(C(),H)[w>>>2>>>0]:w=>(C(),te)[w>>>2>>>0];case 8:return _?w=>(C(),ge)[w>>>3>>>0]:w=>(C(),ae)[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${h}): ${c}`)}};function tr(c,h,_,w,A){c>>>=0,_>>>=0,h=J(h>>>0);let D=W=>W;if(w=w===0n){let W=8*_;D=re=>BigInt.asUintN(W,re),A=D(A)}Ye(c,{name:h,Rc:D,Yc:(W,re)=>(typeof re=="number"&&(re=BigInt(re)),re),Xc:Dt(h,_,!w),Zc:null})}function bi(c,h,_,w){Ye(c>>>=0,{name:h=J(h>>>0),Rc:function(A){return!!A},Yc:function(A,D){return D?_:w},Xc:function(A){return this.Rc((C(),de)[A>>>0])},Zc:null})}var jn=[],Zr=[0,1,,1,null,1,!0,1,!1,1];function vi(c){9<(c>>>=0)&&--Zr[c+1]===0&&(Zr[c]=void 0,jn.push(c))}var Nt=c=>{if(!c)throw new mt(`Cannot use deleted val. handle = ${c}`);return Zr[c]},gr=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=jn.pop()||Zr.length;return Zr[h]=c,Zr[h+1]=1,h}};function Wn(c){return this.Rc((C(),te)[c>>>2>>>0])}var Er={name:"emscripten::val",Rc:c=>{var h=Nt(c);return vi(c),h},Yc:(c,h)=>gr(h),Xc:Wn,Zc:null};function ts(c){return Ye(c>>>0,Er)}var dl=(c,h)=>{switch(h){case 4:return function(_){return this.Rc((C(),he)[_>>>2>>>0])};case 8:return function(_){return this.Rc((C(),ce)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${c}`)}};function $a(c,h,_){_>>>=0,Ye(c>>>=0,{name:h=J(h>>>0),Rc:w=>w,Yc:(w,A)=>A,Xc:dl(h,_),Zc:null})}function xs(c,h,_,w,A){c>>>=0,_>>>=0,h=J(h>>>0);let D=re=>re;if(w===0){var W=32-8*_;D=re=>re<<W>>>W,A=D(A)}Ye(c,{name:h,Rc:D,Yc:(re,we)=>we,Xc:Dt(h,_,w!==0),Zc:null})}function cl(c,h,_){function w(D){var W=(C(),te)[D>>>2>>>0];return D=(C(),te)[D+4>>>2>>>0],new A((C(),Q).buffer,D,W)}var A=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];Ye(c>>>=0,{name:_=J(_>>>0),Rc:w,Xc:w},{Bd:!0})}var Qr=(c,h,_)=>{var w=(C(),de);if(h>>>=0,0<_){var A=h;_=h+_-1;for(var D=0;D<c.length;++D){var W=c.codePointAt(D);if(127>=W){if(h>=_)break;w[h++>>>0]=W}else if(2047>=W){if(h+1>=_)break;w[h++>>>0]=192|W>>6,w[h++>>>0]=128|63&W}else if(65535>=W){if(h+2>=_)break;w[h++>>>0]=224|W>>12,w[h++>>>0]=128|W>>6&63,w[h++>>>0]=128|63&W}else{if(h+3>=_)break;w[h++>>>0]=240|W>>18,w[h++>>>0]=128|W>>12&63,w[h++>>>0]=128|W>>6&63,w[h++>>>0]=128|63&W,D++}}w[h>>>0]=0,c=h-A}else c=0;return c},wi=c=>{for(var h=0,_=0;_<c.length;++_){var w=c.charCodeAt(_);127>=w?h++:2047>=w?h+=2:55296<=w&&57343>=w?(h+=4,++_):h+=3}return h};function Sa(c,h){Ye(c>>>=0,{name:h=J(h>>>0),Rc(_){var w=(C(),te)[_>>>2>>>0];return w=_t(_+4,w,!0),Ar(_),w},Yc(_,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var A=typeof w=="string";if(!(A||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new mt("Cannot pass non-string to std::string");var D=A?wi(w):w.length,W=Ci(4+D+1),re=W+4;return(C(),te)[W>>>2>>>0]=D,A?Qr(w,re,D+1):(C(),de).set(w,re>>>0),_!==null&&_.push(Ar,W),W},Xc:Wn,Zc(_){Ar(_)}})}var $s=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,ka=(c,h,_)=>{if(c>>>=1,16<(h=Un((C(),ue),c,h/2,_))-c&&$s)return $s.decode((C(),ue).slice(c,h));for(_="";c<h;++c){var w=(C(),ue)[c>>>0];_+=String.fromCharCode(w)}return _},rr=(c,h,_)=>{if(_??=2147483647,2>_)return 0;var w=h;_=(_-=2)<2*c.length?_/2:c.length;for(var A=0;A<_;++A){var D=c.charCodeAt(A);(C(),K)[h>>>1>>>0]=D,h+=2}return(C(),K)[h>>>1>>>0]=0,h-w},Ta=c=>2*c.length,Ca=(c,h,_)=>{var w="";c>>>=2;for(var A=0;!(A>=h/4);A++){var D=(C(),te)[c+A>>>0];if(!D&&!_)break;w+=String.fromCodePoint(D)}return w},rs=(c,h,_)=>{if(h>>>=0,_??=2147483647,4>_)return 0;var w=h;_=w+_-4;for(var A=0;A<c.length;++A){var D=c.codePointAt(A);if(65535<D&&A++,(C(),H)[h>>>2>>>0]=D,(h+=4)+4>_)break}return(C(),H)[h>>>2>>>0]=0,h-w},Ea=c=>{for(var h=0,_=0;_<c.length;++_)65535<c.codePointAt(_)&&_++,h+=4;return h};function Ia(c,h,_){if(c>>>=0,h>>>=0,_=J(_>>>=0),h===2)var w=ka,A=rr,D=Ta;else w=Ca,A=rs,D=Ea;Ye(c,{name:_,Rc:W=>{var re=(C(),te)[W>>>2>>>0];return re=w(W+4,re*h,!0),Ar(W),re},Yc:(W,re)=>{if(typeof re!="string")throw new mt(`Cannot pass non-string to C++ string type ${_}`);var we=D(re),ke=Ci(4+we+h);return(C(),te)[ke>>>2>>>0]=we/h,A(re,ke+4,we+h),W!==null&&W.push(Ar,ke),ke},Xc:Wn,Zc(W){Ar(W)}})}function fl(c,h){Ye(c>>>=0,{Cd:!0,name:h=J(h>>>0),Rc:()=>{},Yc:()=>{}})}function pl(c){Kn(c>>>0,!n,1,!r,131072,!1),Oe()}var _i=c=>{if(!P)try{if(c(),!(0<q))try{i?os()&&Il(y):ye(y)}catch(h){h instanceof We||h=="unwind"||d(0,h)}}catch(h){h instanceof We||h=="unwind"||d(0,h)}},Aa=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Vn(c){c>>>=0,Aa||(Atomics.waitAsync((C(),H),c>>>2,c).value.then(xi),c+=128,Atomics.store((C(),H),c>>>2,1))}var xi=()=>_i(()=>{var c=os();c&&(Vn(c),kc())});function Oa(c,h){(c>>>=0)==h>>>0?setTimeout(xi):i?postMessage({bd:c,Vc:"checkMailbox"}):(c=Ce[c])&&c.postMessage({Vc:"checkMailbox"})}var wn=[];function hl(c,h,_,w,A){for(h>>>=0,A>>>=0,wn.length=0,_=A>>>3,w=A+w>>>3;_<w;){var D;D=(C(),ge)[_++>>>0]?(C(),ge)[_++>>>0]:(C(),ce)[_++>>>0],wn.push(D)}return(h?Ml[h]:q1[c])(...wn)}var ml=()=>{q=0};function gl(c){c>>>=0,i?postMessage({Vc:"cleanupThread",Qd:c}):ve(Ce[c])}function yl(c){}var Hn=c=>{try{c()}catch(h){ie(h)}};function $i(c){var h=(..._)=>{ns.push(c);try{return c(..._)}finally{P||(ns.pop(),Ir&&Jr===1&&ns.length===0&&(Jr=0,q+=1,Hn(mf),typeof Fibers<"u"&&Fibers.de()))}};return ks.set(c,h),h}var Jr=0,Ir=null,za=0,ns=[],Si=new Map,Ss=new Map,ks=new Map,ki=0,ur=null,bl=[],Ma=c=>function(h){if(!P){if(Jr===0){var _=!1,w=!1;h((A=0)=>{if(!P&&(za=A,_=!0,w)){Jr=2,Hn(()=>gf(Ir)),typeof MainLoop<"u"&&MainLoop.xd&&MainLoop.resume(),A=!1;try{var D=function(){var we=(C(),H)[Ir+8>>>2>>>0];return we=Ss.get(we),we=ks.get(we),--q,we()}()}catch(we){D=we,A=!0}var W=!1;if(!Ir){var re=ur;re&&(ur=null,(A?re.reject:re.resolve)(D),W=!0)}if(A&&!W)throw D}}),w=!0,_||(Jr=1,Ir=function(){var A=Ci(65548),D=A+12;if((C(),te)[A>>>2>>>0]=D,(C(),te)[A+4>>>2>>>0]=D+65536,D=ns[0],!Si.has(D)){var W=ki++;Si.set(D,W),Ss.set(W,D)}return D=Si.get(D),(C(),H)[A+8>>>2>>>0]=D,A}(),typeof MainLoop<"u"&&MainLoop.xd&&MainLoop.pause(),Hn(()=>hf(Ir)))}else Jr===2?(Jr=0,Hn(yf),Ar(Ir),Ir=null,bl.forEach(_i)):ie(`invalid state: ${Jr}`);return za}}(h=>{c().then(h)});function Ra(c){return c>>>=0,Ma(async()=>{var h=await Nt(c);return gr(h)})}var is=[],Ts=c=>{var h=is.length;return is.push(c),h},Cs=(c,h)=>{for(var _=Array(c),w=0;w<c;++w){var A=w,D=(C(),te)[h+4*w>>>2>>>0],W=it[D];if(W===void 0)throw c=`parameter ${w}`,D=Qa(D),h=J(D),Ar(D),new mt(`${c} has unknown type ${h}`);_[A]=W}return _},qn=(c,h,_)=>{var w=[];return c=c(w,_),w.length&&((C(),te)[h>>>2>>>0]=gr(w)),c},Ba={},Gn=c=>{var h=Ba[c];return h===void 0?J(c):h};function vl(c,h,_){var[w,...A]=Cs(c,h>>>0);h=w.Yc.bind(w);var D=A.map(we=>we.Xc.bind(we));c--;var W={toValue:Nt};switch(c=D.map((we,ke)=>{var Ze=`argFromPtr${ke}`;return W[Ze]=we,`${Ze}(args${ke?"+"+8*ke:""})`}),_){case 0:var re="toValue(handle)";break;case 2:re="new (toValue(handle))";break;case 3:re="";break;case 1:W.getStringOrSymbol=Gn,re="toValue(handle)[getStringOrSymbol(methodName)]"}return re+=`(${c})`,w.Cd||(W.toReturnWire=h,W.emval_returnValue=qn,re=`return emval_returnValue(toReturnWire, destructorsRef, ${re})`),re=`return function (handle, methodName, destructorsRef, args) {
  ${re}
  }`,_=new Function(Object.keys(W),re)(...Object.values(W)),re=`methodCaller<(${A.map(we=>we.name)}) => ${w.name}>`,Ts(Object.defineProperty(_,"name",{value:re}))}function wl(c,h){return h>>>=0,(c=Nt(c>>>0))==Nt(h)}function Ti(c){return(c>>>=0)?(c=Gn(c),gr(globalThis[c])):gr(globalThis)}function Pa(c){return c=Gn(c>>>0),gr(t[c])}function Da(c,h){return h>>>=0,c=Nt(c>>>0),h=Nt(h),gr(c[h])}function _l(c){9<(c>>>=0)&&(Zr[c+1]+=1)}function Na(c,h,_,w,A){return is[c>>>0](h>>>0,_>>>0,w>>>0,A>>>0)}function ss(c,h,_,w,A){return Na(c>>>0,h>>>0,_>>>0,w>>>0,A>>>0)}function Ua(){return gr([])}function xl(c){c=Nt(c>>>0);for(var h=Array(c.length),_=0;_<c.length;_++)h[_]=c[_];return gr(h)}function La(c){return gr(Gn(c>>>0))}function $l(){return gr({})}function Sl(c){for(var h=Nt(c>>>=0);h.length;){var _=h.pop();h.pop()(_)}vi(c)}function Es(c,h,_){h>>>=0,_>>>=0,c=Nt(c>>>0),h=Nt(h),_=Nt(_),c[h]=_}function Fa(c,h){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),h>>>=0,c=new Date(1e3*c),(C(),H)[h>>>2>>>0]=c.getUTCSeconds(),(C(),H)[h+4>>>2>>>0]=c.getUTCMinutes(),(C(),H)[h+8>>>2>>>0]=c.getUTCHours(),(C(),H)[h+12>>>2>>>0]=c.getUTCDate(),(C(),H)[h+16>>>2>>>0]=c.getUTCMonth(),(C(),H)[h+20>>>2>>>0]=c.getUTCFullYear()-1900,(C(),H)[h+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(C(),H)[h+28>>>2>>>0]=c}var ja=c=>c%4==0&&(c%100!=0||c%400==0),Wa=[0,31,60,91,121,152,182,213,244,274,305,335],Va=[0,31,59,90,120,151,181,212,243,273,304,334];function kl(c,h){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),h>>>=0,c=new Date(1e3*c),(C(),H)[h>>>2>>>0]=c.getSeconds(),(C(),H)[h+4>>>2>>>0]=c.getMinutes(),(C(),H)[h+8>>>2>>>0]=c.getHours(),(C(),H)[h+12>>>2>>>0]=c.getDate(),(C(),H)[h+16>>>2>>>0]=c.getMonth(),(C(),H)[h+20>>>2>>>0]=c.getFullYear()-1900,(C(),H)[h+24>>>2>>>0]=c.getDay();var _=(ja(c.getFullYear())?Wa:Va)[c.getMonth()]+c.getDate()-1|0;(C(),H)[h+28>>>2>>>0]=_,(C(),H)[h+36>>>2>>>0]=-60*c.getTimezoneOffset(),_=new Date(c.getFullYear(),6,1).getTimezoneOffset();var w=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|(_!=w&&c.getTimezoneOffset()==Math.min(w,_)),(C(),H)[h+32>>>2>>>0]=c}function Ha(c){c>>>=0;var h=new Date((C(),H)[c+20>>>2>>>0]+1900,(C(),H)[c+16>>>2>>>0],(C(),H)[c+12>>>2>>>0],(C(),H)[c+8>>>2>>>0],(C(),H)[c+4>>>2>>>0],(C(),H)[c>>>2>>>0],0),_=(C(),H)[c+32>>>2>>>0],w=h.getTimezoneOffset(),A=new Date(h.getFullYear(),6,1).getTimezoneOffset(),D=new Date(h.getFullYear(),0,1).getTimezoneOffset(),W=Math.min(D,A);return 0>_?(C(),H)[c+32>>>2>>>0]=+(A!=D&&W==w):0<_!=(W==w)&&(A=Math.max(D,A),h.setTime(h.getTime()+6e4*((0<_?W:A)-w))),(C(),H)[c+24>>>2>>>0]=h.getDay(),_=(ja(h.getFullYear())?Wa:Va)[h.getMonth()]+h.getDate()-1|0,(C(),H)[c+28>>>2>>>0]=_,(C(),H)[c>>>2>>>0]=h.getSeconds(),(C(),H)[c+4>>>2>>>0]=h.getMinutes(),(C(),H)[c+8>>>2>>>0]=h.getHours(),(C(),H)[c+12>>>2>>>0]=h.getDate(),(C(),H)[c+16>>>2>>>0]=h.getMonth(),(C(),H)[c+20>>>2>>>0]=h.getYear(),c=h.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function qa(c,h,_,w,A,D,W){return i?Z(16,1,c,h,_,w,A,D,W):-52}function Ga(c,h,_,w,A,D){if(i)return Z(17,1,c,h,_,w,A,D)}var _n={},Tl=()=>performance.timeOrigin+performance.now();function Ka(c,h){if(i)return Z(18,1,c,h);if(_n[c]&&(clearTimeout(_n[c].id),delete _n[c]),!h)return 0;var _=setTimeout(()=>{delete _n[c],_i(()=>Sc(c,performance.timeOrigin+performance.now()))},h);return _n[c]={id:_,ce:h},0}function Cl(c,h,_,w){c>>>=0,h>>>=0,_>>>=0,w>>>=0;var A=new Date().getFullYear(),D=new Date(A,0,1).getTimezoneOffset();A=new Date(A,6,1).getTimezoneOffset();var W=Math.max(D,A);(C(),te)[c>>>2>>>0]=60*W,(C(),H)[h>>>2>>>0]=+(D!=A),c=(h=re=>{var we=Math.abs(re);return`UTC${0<=re?"-":"+"}${String(Math.floor(we/60)).padStart(2,"0")}${String(we%60).padStart(2,"0")}`})(D),h=h(A),A<D?(Qr(c,_,17),Qr(h,w,17)):(Qr(c,w,17),Qr(h,_,17))}var as=()=>Date.now();function El(c,h,_){return _>>>=0,0<=c&&3>=c?(c===0?c=Date.now():c=performance.timeOrigin+performance.now(),c=Math.round(1e6*c),(C(),ge)[_>>>3>>>0]=BigInt(c),0):28}var Is=[],Xa=(c,h)=>{Is.length=0;for(var _;_=(C(),de)[c++>>>0];){var w=_!=105;h+=(w&=_!=112)&&h%8?4:0,Is.push(_==112?(C(),te)[h>>>2>>>0]:_==106?(C(),ge)[h>>>3>>>0]:_==105?(C(),H)[h>>>2>>>0]:(C(),ce)[h>>>3>>>0]),h+=w?8:4}return Is};function Ya(c,h,_){return c>>>=0,h=Xa(h>>>0,_>>>0),Ml[c](...h)}function Za(c,h,_){return c>>>=0,h=Xa(h>>>0,_>>>0),Ml[c](...h)}var u=()=>{};function m(c,h){return O(_t(c>>>0,h>>>0))}var v=()=>{throw q+=1,"unwind"};function k(){return 4294901760}var M=()=>navigator.hardwareConcurrency,B={},R=c=>{var h;return(h=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(c))?+h[1]:(h=/:(\d+):\d+(?:\)|$)/.exec(c))?2147483648|+h[1]:0},j=c=>{for(var h of c)(c=R(h))&&(B[c]=h)};function X(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),j(c),B.kd=R(c[3]),B.Md=c,B.kd}function fe(c){if(!(c=B[c>>>0]))return 0;var h;if(h=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(c))c=h[1];else if(h=/^\s+at (.*) \(.*\)$/.exec(c))c=h[1];else{if(!(h=/^(.+?)@/.exec(c)))return 0;c=h[1]}Ar(fe.ld??0),h=wi(c)+1;var _=Ci(h);return _&&Qr(c,_,h),fe.ld=_,fe.ld}function _e(c){c>>>=0;var h=(C(),de).length;if(c<=h||4294901760<c)return!1;for(var _=1;4>=_;_*=2){var w=h*(1+.2/_);w=Math.min(w,c+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(c,w)/65536))-Ve.buffer.byteLength+65535)/65536|0;try{Ve.grow(w),xe();var A=1;break e}catch{}A=void 0}if(A)return!0}return!1}function Le(c,h,_){if(c>>>=0,h>>>=0,B.kd==c)var w=B.Md;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),j(w);for(var A=3;w[A]&&R(w[A])!=c;)++A;for(c=0;c<_&&w[c+A];++c)(C(),H)[h+4*c>>>2>>>0]=R(w[c+A]);return c}var ze,Se={},Ue=()=>{if(!ze){var c,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(c in Se)Se[c]===void 0?delete h[c]:h[c]=Se[c];var _=[];for(c in h)_.push(`${c}=${h[c]}`);ze=_}return ze};function rt(c,h){if(i)return Z(19,1,c,h);c>>>=0,h>>>=0;var _,w=0,A=0;for(_ of Ue()){var D=h+w;(C(),te)[c+A>>>2>>>0]=D,w+=Qr(_,D,1/0)+1,A+=4}return 0}function Tt(c,h){if(i)return Z(20,1,c,h);c>>>=0,h>>>=0;var _=Ue();for(var w of((C(),te)[c>>>2>>>0]=_.length,c=0,_))c+=wi(w)+1;return(C(),te)[h>>>2>>>0]=c,0}function xt(c){return i?Z(21,1,c):52}function Vt(c,h,_,w,A){return i?Z(22,1,c,h,_,w,A):52}function dr(c,h,_,w){return i?Z(23,1,c,h,_,w):52}function Qt(c,h,_,w){return i?Z(24,1,c,h,_,w):70}var pt=[null,[],[]];function Ht(c,h,_,w){if(i)return Z(25,1,c,h,_,w);h>>>=0,_>>>=0,w>>>=0;for(var A=0,D=0;D<_;D++){var W=(C(),te)[h>>>2>>>0],re=(C(),te)[h+4>>>2>>>0];h+=8;for(var we=0;we<re;we++){var ke=c,Ze=(C(),de)[W+we>>>0],ct=pt[ke];Ze===0||Ze===10?((ke===1?E:O)(Tr(ct)),ct.length=0):ct.push(Ze)}A+=re}return(C(),te)[w>>>2>>>0]=A,0}function en(c){return c>>>0}i||function(){for(var c=t.numThreads-1;c--;)tt();Ne.push(async()=>{var h=async function(){if(!i)return Promise.all(me.map(Me))}();et++,await h,--et==0&&z&&(h=z,z=null,h())})}(),i||(Ve=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),xe()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>st(),t.stackRestore=c=>nt(c),t.stackAlloc=c=>Al(c),t.setValue=function(c,h,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":(C(),Q)[c>>>0]=h;break;case"i16":(C(),K)[c>>>1>>>0]=h;break;case"i32":(C(),H)[c>>>2>>>0]=h;break;case"i64":(C(),ge)[c>>>3>>>0]=BigInt(h);break;case"float":(C(),he)[c>>>2>>>0]=h;break;case"double":(C(),ce)[c>>>3>>>0]=h;break;case"*":(C(),te)[c>>>2>>>0]=h;break;default:ie(`invalid type for setValue: ${_}`)}},t.getValue=function(c,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return(C(),Q)[c>>>0];case"i16":return(C(),K)[c>>>1>>>0];case"i32":return(C(),H)[c>>>2>>>0];case"i64":return(C(),ge)[c>>>3>>>0];case"float":return(C(),he)[c>>>2>>>0];case"double":return(C(),ce)[c>>>3>>>0];case"*":return(C(),te)[c>>>2>>>0];default:ie(`invalid type for getValue: ${h}`)}},t.UTF8ToString=_t,t.stringToUTF8=Qr,t.lengthBytesUTF8=wi;var Qa,Ja,os,Ar,Ci,Kn,_c,xc,$c,Il,Sc,kc,at,As,Tc,nt,Al,st,Cc,Ol,Ec,Ic,Ac,zl,Oc,zc,Mc,Rc,Bc,Pc,Dc,Nc,Uc,Lc,Fc,jc,Wc,Vc,Hc,qc,Gc,Kc,Xc,Yc,Zc,Qc,Jc,ef,tf,rf,nf,sf,af,of,lf,uf,df,cf,ff,pf,hf,mf,gf,yf,xn,q1=[se,oe,yn,Cr,Lt,bn,ar,or,gi,Et,lr,Ln,yi,vn,Fn,G,qa,Ga,Ka,rt,Tt,xt,Vt,dr,Qt,Ht],Ml={1086876:(c,h,_,w,A)=>{if(t===void 0||!t.ad)return 1;if((c=_t(Number(c>>>0))).startsWith("./")&&(c=c.substring(2)),!(c=t.ad.get(c)))return 2;if(h=Number(h>>>0),_=Number(_>>>0),w=Number(w>>>0),h+_>c.byteLength)return 3;try{let D=c.subarray(h,h+_);switch(A){case 0:(C(),de).set(D,w>>>0);break;case 1:t.Td?t.Td(w,D):t.Ld(w,D);break;default:return 4}return 0}catch{return 4}},1087700:(c,h,_)=>{t.wd(c,(C(),de).subarray(h>>>0,h+_>>>0))},1087764:()=>t.Vd(),1087806:c=>{t.vd(c)},1087843:()=>{t.Ed()},1087874:()=>{t.Fd()},1087903:()=>{t.Jd()},1087928:c=>t.Dd(c),1087961:c=>t.Hd(c),1087993:(c,h,_)=>{t.jd(Number(c),Number(h),Number(_),!0)},1088056:(c,h,_)=>{t.jd(Number(c),Number(h),Number(_))},1088113:()=>typeof wasmOffsetConverter<"u",1088170:c=>{t.bc("Abs",c,void 0)},1088221:c=>{t.bc("Neg",c,void 0)},1088272:c=>{t.bc("Floor",c,void 0)},1088325:c=>{t.bc("Ceil",c,void 0)},1088377:c=>{t.bc("Reciprocal",c,void 0)},1088435:c=>{t.bc("Sqrt",c,void 0)},1088487:c=>{t.bc("Exp",c,void 0)},1088538:c=>{t.bc("Erf",c,void 0)},1088589:c=>{t.bc("Sigmoid",c,void 0)},1088644:(c,h,_)=>{t.bc("HardSigmoid",c,{alpha:h,beta:_})},1088723:c=>{t.bc("HardSwish",c,void 0)},1088780:c=>{t.bc("Log",c,void 0)},1088831:c=>{t.bc("Sin",c,void 0)},1088882:c=>{t.bc("Cos",c,void 0)},1088933:c=>{t.bc("Tan",c,void 0)},1088984:c=>{t.bc("Asin",c,void 0)},1089036:c=>{t.bc("Acos",c,void 0)},1089088:c=>{t.bc("Atan",c,void 0)},1089140:c=>{t.bc("Sinh",c,void 0)},1089192:c=>{t.bc("Cosh",c,void 0)},1089244:c=>{t.bc("Asinh",c,void 0)},1089297:c=>{t.bc("Acosh",c,void 0)},1089350:c=>{t.bc("Atanh",c,void 0)},1089403:c=>{t.bc("Tanh",c,void 0)},1089455:c=>{t.bc("Not",c,void 0)},1089506:(c,h,_)=>{t.bc("Clip",c,{min:h,max:_})},1089575:c=>{t.bc("Clip",c,void 0)},1089627:(c,h)=>{t.bc("Elu",c,{alpha:h})},1089685:c=>{t.bc("Gelu",c,void 0)},1089737:c=>{t.bc("Relu",c,void 0)},1089789:(c,h)=>{t.bc("LeakyRelu",c,{alpha:h})},1089853:(c,h)=>{t.bc("ThresholdedRelu",c,{alpha:h})},1089923:(c,h)=>{t.bc("Cast",c,{to:h})},1089981:c=>{t.bc("Add",c,void 0)},1090032:c=>{t.bc("Sub",c,void 0)},1090083:c=>{t.bc("Mul",c,void 0)},1090134:c=>{t.bc("Div",c,void 0)},1090185:c=>{t.bc("Pow",c,void 0)},1090236:c=>{t.bc("Equal",c,void 0)},1090289:c=>{t.bc("Greater",c,void 0)},1090344:c=>{t.bc("GreaterOrEqual",c,void 0)},1090406:c=>{t.bc("Less",c,void 0)},1090458:c=>{t.bc("LessOrEqual",c,void 0)},1090517:(c,h,_,w,A)=>{t.bc("ReduceMean",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((C(),H).subarray(Number(w)>>>0,Number(A)>>>0)):[]})},1090692:(c,h,_,w,A)=>{t.bc("ReduceMax",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((C(),H).subarray(Number(w)>>>0,Number(A)>>>0)):[]})},1090866:(c,h,_,w,A)=>{t.bc("ReduceMin",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((C(),H).subarray(Number(w)>>>0,Number(A)>>>0)):[]})},1091040:(c,h,_,w,A)=>{t.bc("ReduceProd",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((C(),H).subarray(Number(w)>>>0,Number(A)>>>0)):[]})},1091215:(c,h,_,w,A)=>{t.bc("ReduceSum",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((C(),H).subarray(Number(w)>>>0,Number(A)>>>0)):[]})},1091389:(c,h,_,w,A)=>{t.bc("ReduceL1",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((C(),H).subarray(Number(w)>>>0,Number(A)>>>0)):[]})},1091562:(c,h,_,w,A)=>{t.bc("ReduceL2",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((C(),H).subarray(Number(w)>>>0,Number(A)>>>0)):[]})},1091735:(c,h,_,w,A)=>{t.bc("ReduceLogSum",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((C(),H).subarray(Number(w)>>>0,Number(A)>>>0)):[]})},1091912:(c,h,_,w,A)=>{t.bc("ReduceSumSquare",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((C(),H).subarray(Number(w)>>>0,Number(A)>>>0)):[]})},1092092:(c,h,_,w,A)=>{t.bc("ReduceLogSumExp",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((C(),H).subarray(Number(w)>>>0,Number(A)>>>0)):[]})},1092272:c=>{t.bc("Where",c,void 0)},1092325:(c,h,_)=>{t.bc("Transpose",c,{perm:h?Array.from((C(),H).subarray(Number(h)>>>0,Number(_)>>>0)):[]})},1092449:(c,h,_,w)=>{t.bc("DepthToSpace",c,{blocksize:h,mode:_t(_),format:w?"NHWC":"NCHW"})},1092582:(c,h,_,w)=>{t.bc("DepthToSpace",c,{blocksize:h,mode:_t(_),format:w?"NHWC":"NCHW"})},1092715:(c,h,_,w)=>{t.bc("DFT",c,{axis:h,inverse:_,onesided:w})},1092807:(c,h,_,w,A,D,W,re,we,ke,Ze,ct,$t,It,Xn)=>{t.bc("ConvTranspose",c,{format:we?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[A],pads:[D,W],strides:[re],wIsConst:()=>!!(C(),Q)[ke>>>0],outputPadding:Ze?Array.from((C(),H).subarray(Number(Ze)>>>0,Number(ct)>>>0)):[],outputShape:$t?Array.from((C(),H).subarray(Number($t)>>>0,Number(It)>>>0)):[],activation:_t(Xn)})},1093240:(c,h,_,w,A,D,W,re,we,ke,Ze,ct,$t,It)=>{t.bc("ConvTranspose",c,{format:re?"NHWC":"NCHW",autoPad:h,dilations:Array.from((C(),H).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((C(),H).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),pads:Array.from((C(),H).subarray(Number(D)>>>0,(Number(D)>>>0)+4>>>0)),strides:Array.from((C(),H).subarray(Number(W)>>>0,(Number(W)>>>0)+2>>>0)),wIsConst:()=>!!(C(),Q)[we>>>0],outputPadding:ke?Array.from((C(),H).subarray(Number(ke)>>>0,Number(Ze)>>>0)):[],outputShape:ct?Array.from((C(),H).subarray(Number(ct)>>>0,Number($t)>>>0)):[],activation:_t(It)})},1093901:(c,h,_,w,A,D,W,re,we,ke,Ze,ct,$t,It,Xn)=>{t.bc("ConvTranspose",c,{format:we?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[A],pads:[D,W],strides:[re],wIsConst:()=>!!(C(),Q)[ke>>>0],outputPadding:Ze?Array.from((C(),H).subarray(Number(Ze)>>>0,Number(ct)>>>0)):[],outputShape:$t?Array.from((C(),H).subarray(Number($t)>>>0,Number(It)>>>0)):[],activation:_t(Xn)})},1094334:(c,h,_,w,A,D,W,re,we,ke,Ze,ct,$t,It)=>{t.bc("ConvTranspose",c,{format:re?"NHWC":"NCHW",autoPad:h,dilations:Array.from((C(),H).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((C(),H).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),pads:Array.from((C(),H).subarray(Number(D)>>>0,(Number(D)>>>0)+4>>>0)),strides:Array.from((C(),H).subarray(Number(W)>>>0,(Number(W)>>>0)+2>>>0)),wIsConst:()=>!!(C(),Q)[we>>>0],outputPadding:ke?Array.from((C(),H).subarray(Number(ke)>>>0,Number(Ze)>>>0)):[],outputShape:ct?Array.from((C(),H).subarray(Number(ct)>>>0,Number($t)>>>0)):[],activation:_t(It)})},1094995:(c,h)=>{t.bc("GlobalAveragePool",c,{format:h?"NHWC":"NCHW"})},1095086:(c,h,_,w,A,D,W,re,we,ke,Ze,ct,$t,It)=>{t.bc("AveragePool",c,{format:It?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:A,dilations:D?Array.from((C(),H).subarray(Number(D)>>>0,Number(W)>>>0)):[],kernel_shape:re?Array.from((C(),H).subarray(Number(re)>>>0,Number(we)>>>0)):[],pads:ke?Array.from((C(),H).subarray(Number(ke)>>>0,Number(Ze)>>>0)):[],strides:ct?Array.from((C(),H).subarray(Number(ct)>>>0,Number($t)>>>0)):[]})},1095565:(c,h)=>{t.bc("GlobalAveragePool",c,{format:h?"NHWC":"NCHW"})},1095656:(c,h,_,w,A,D,W,re,we,ke,Ze,ct,$t,It)=>{t.bc("AveragePool",c,{format:It?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:A,dilations:D?Array.from((C(),H).subarray(Number(D)>>>0,Number(W)>>>0)):[],kernel_shape:re?Array.from((C(),H).subarray(Number(re)>>>0,Number(we)>>>0)):[],pads:ke?Array.from((C(),H).subarray(Number(ke)>>>0,Number(Ze)>>>0)):[],strides:ct?Array.from((C(),H).subarray(Number(ct)>>>0,Number($t)>>>0)):[]})},1096135:(c,h)=>{t.bc("GlobalMaxPool",c,{format:h?"NHWC":"NCHW"})},1096222:(c,h,_,w,A,D,W,re,we,ke,Ze,ct,$t,It)=>{t.bc("MaxPool",c,{format:It?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:A,dilations:D?Array.from((C(),H).subarray(Number(D)>>>0,Number(W)>>>0)):[],kernel_shape:re?Array.from((C(),H).subarray(Number(re)>>>0,Number(we)>>>0)):[],pads:ke?Array.from((C(),H).subarray(Number(ke)>>>0,Number(Ze)>>>0)):[],strides:ct?Array.from((C(),H).subarray(Number(ct)>>>0,Number($t)>>>0)):[]})},1096697:(c,h)=>{t.bc("GlobalMaxPool",c,{format:h?"NHWC":"NCHW"})},1096784:(c,h,_,w,A,D,W,re,we,ke,Ze,ct,$t,It)=>{t.bc("MaxPool",c,{format:It?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:A,dilations:D?Array.from((C(),H).subarray(Number(D)>>>0,Number(W)>>>0)):[],kernel_shape:re?Array.from((C(),H).subarray(Number(re)>>>0,Number(we)>>>0)):[],pads:ke?Array.from((C(),H).subarray(Number(ke)>>>0,Number(Ze)>>>0)):[],strides:ct?Array.from((C(),H).subarray(Number(ct)>>>0,Number($t)>>>0)):[]})},1097259:(c,h,_,w,A)=>{t.bc("Gemm",c,{alpha:h,beta:_,transA:w,transB:A})},1097363:c=>{t.bc("MatMul",c,void 0)},1097417:(c,h,_,w)=>{t.bc("ArgMax",c,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1097525:(c,h,_,w)=>{t.bc("ArgMin",c,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1097633:(c,h)=>{t.bc("Softmax",c,{axis:h})},1097696:(c,h)=>{t.bc("Concat",c,{axis:h})},1097756:(c,h,_,w,A)=>{t.bc("Split",c,{axis:h,numOutputs:_,splitSizes:w?Array.from((C(),H).subarray(Number(w)>>>0,Number(A)>>>0)):[]})},1097912:c=>{t.bc("Expand",c,void 0)},1097966:(c,h)=>{t.bc("Gather",c,{axis:Number(h)})},1098037:(c,h)=>{t.bc("GatherElements",c,{axis:Number(h)})},1098116:(c,h)=>{t.bc("GatherND",c,{batch_dims:Number(h)})},1098195:(c,h,_,w,A,D,W,re,we,ke,Ze)=>{t.bc("Resize",c,{antialias:h,axes:_?Array.from((C(),H).subarray(Number(_)>>>0,Number(w)>>>0)):[],coordinateTransformMode:_t(A),cubicCoeffA:D,excludeOutside:W,extrapolationValue:re,keepAspectRatioPolicy:_t(we),mode:_t(ke),nearestMode:_t(Ze)})},1098557:(c,h,_,w,A,D,W)=>{t.bc("Slice",c,{starts:h?Array.from((C(),H).subarray(Number(h)>>>0,Number(_)>>>0)):[],ends:w?Array.from((C(),H).subarray(Number(w)>>>0,Number(A)>>>0)):[],axes:D?Array.from((C(),H).subarray(Number(D)>>>0,Number(W)>>>0)):[]})},1098821:c=>{t.bc("Tile",c,void 0)},1098873:(c,h,_)=>{t.bc("InstanceNormalization",c,{epsilon:h,format:_?"NHWC":"NCHW"})},1098987:(c,h,_)=>{t.bc("InstanceNormalization",c,{epsilon:h,format:_?"NHWC":"NCHW"})},1099101:c=>{t.bc("Range",c,void 0)},1099154:(c,h)=>{t.bc("Einsum",c,{equation:_t(h)})},1099235:(c,h,_,w,A)=>{t.bc("Pad",c,{mode:h,value:_,pads:w?Array.from((C(),H).subarray(Number(w)>>>0,Number(A)>>>0)):[]})},1099378:(c,h,_,w,A,D)=>{t.bc("BatchNormalization",c,{epsilon:h,momentum:_,spatial:!!A,trainingMode:!!w,format:D?"NHWC":"NCHW"})},1099547:(c,h,_,w,A,D)=>{t.bc("BatchNormalization",c,{epsilon:h,momentum:_,spatial:!!A,trainingMode:!!w,format:D?"NHWC":"NCHW"})},1099716:(c,h,_)=>{t.bc("CumSum",c,{exclusive:Number(h),reverse:Number(_)})},1099813:(c,h,_)=>{t.bc("DequantizeLinear",c,{axis:h,blockSize:_})},1099903:(c,h,_,w,A)=>{t.bc("GridSample",c,{align_corners:h,mode:_t(_),padding_mode:_t(w),format:A?"NHWC":"NCHW"})},1100073:(c,h,_,w,A)=>{t.bc("GridSample",c,{align_corners:h,mode:_t(_),padding_mode:_t(w),format:A?"NHWC":"NCHW"})},1100243:(c,h)=>{t.bc("ScatterND",c,{reduction:_t(h)})},1100328:(c,h,_,w,A,D,W,re,we)=>{t.bc("Attention",c,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:A,doRotary:D,qkvHiddenSizes:W?Array.from((C(),H).subarray(Number(re)>>>0,Number(re)+W>>>0)):[],pastPresentShareBuffer:!!we})},1100600:c=>{t.bc("BiasAdd",c,void 0)},1100655:c=>{t.bc("BiasSplitGelu",c,void 0)},1100716:c=>{t.bc("FastGelu",c,void 0)},1100772:(c,h,_,w,A,D,W,re,we,ke,Ze,ct,$t,It,Xn,Rl)=>{t.bc("Conv",c,{format:ct?"NHWC":"NCHW",auto_pad:h,dilations:_?Array.from((C(),H).subarray(Number(_)>>>0,Number(w)>>>0)):[],group:A,kernel_shape:D?Array.from((C(),H).subarray(Number(D)>>>0,Number(W)>>>0)):[],pads:re?Array.from((C(),H).subarray(Number(re)>>>0,Number(we)>>>0)):[],strides:ke?Array.from((C(),H).subarray(Number(ke)>>>0,Number(Ze)>>>0)):[],w_is_const:()=>!!(C(),Q)[Number($t)>>>0],activation:_t(It),activation_params:Xn?Array.from((C(),he).subarray(Number(Xn)>>>0,Number(Rl)>>>0)):[]})},1101356:c=>{t.bc("Gelu",c,void 0)},1101408:(c,h,_,w,A,D,W,re,we)=>{t.bc("GroupQueryAttention",c,{numHeads:h,kvNumHeads:_,scale:w,softcap:A,doRotary:D,rotaryInterleaved:W,smoothSoftmax:re,localWindowSize:we})},1101625:(c,h,_,w)=>{t.bc("LayerNormalization",c,{axis:h,epsilon:_,simplified:!!w})},1101736:(c,h,_,w)=>{t.bc("LayerNormalization",c,{axis:h,epsilon:_,simplified:!!w})},1101847:(c,h,_,w,A,D)=>{t.bc("MatMulNBits",c,{k:h,n:_,accuracyLevel:w,bits:A,blockSize:D})},1101974:(c,h,_,w,A,D)=>{t.bc("MultiHeadAttention",c,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:A,doRotary:D})},1102133:(c,h)=>{t.bc("QuickGelu",c,{alpha:h})},1102197:(c,h,_,w,A)=>{t.bc("RotaryEmbedding",c,{interleaved:!!h,numHeads:_,rotaryEmbeddingDim:w,scale:A})},1102336:(c,h,_)=>{t.bc("SkipLayerNormalization",c,{epsilon:h,simplified:!!_})},1102438:(c,h,_)=>{t.bc("SkipLayerNormalization",c,{epsilon:h,simplified:!!_})},1102540:(c,h,_,w)=>{t.bc("GatherBlockQuantized",c,{gatherAxis:h,quantizeAxis:_,blockSize:w})},1102661:c=>{t.Id(c)},1102695:(c,h)=>t.Kd(Number(c),Number(h),t.$c.Nd,t.$c.errors)};function G1(c,h,_){return Ma(async()=>{await t.Gd(Number(c),Number(h),Number(_))})}function K1(){return typeof wasmOffsetConverter<"u"}function X1(c,h,_,w){var A=st();try{return Nc(c,h,_,w)}catch(D){if(nt(A),D!==D+0)throw D;at(1,0)}}function Y1(c,h,_){var w=st();try{return Rc(c,h,_)}catch(A){if(nt(w),A!==A+0)throw A;at(1,0)}}function Z1(c){var h=st();try{Oc(c)}catch(_){if(nt(h),_!==_+0)throw _;at(1,0)}}function Q1(c,h){var _=st();try{return zl(c,h)}catch(w){if(nt(_),w!==w+0)throw w;at(1,0)}}function J1(c,h,_){var w=st();try{Ac(c,h,_)}catch(A){if(nt(w),A!==A+0)throw A;at(1,0)}}function ew(c,h){var _=st();try{Uc(c,h)}catch(w){if(nt(_),w!==w+0)throw w;at(1,0)}}function tw(c,h,_,w,A,D,W){var re=st();try{return Pc(c,h,_,w,A,D,W)}catch(we){if(nt(re),we!==we+0)throw we;at(1,0)}}function rw(c,h,_,w,A,D){var W=st();try{zc(c,h,_,w,A,D)}catch(re){if(nt(W),re!==re+0)throw re;at(1,0)}}function nw(c,h,_,w){var A=st();try{Dc(c,h,_,w)}catch(D){if(nt(A),D!==D+0)throw D;at(1,0)}}function iw(c,h,_,w,A){var D=st();try{Mc(c,h,_,w,A)}catch(W){if(nt(D),W!==W+0)throw W;at(1,0)}}function sw(c,h,_,w,A,D,W){var re=st();try{Fc(c,h,_,w,A,D,W)}catch(we){if(nt(re),we!==we+0)throw we;at(1,0)}}function aw(c,h,_,w,A,D,W){var re=st();try{jc(c,h,_,w,A,D,W)}catch(we){if(nt(re),we!==we+0)throw we;at(1,0)}}function ow(c,h,_,w,A,D,W,re){var we=st();try{qc(c,h,_,w,A,D,W,re)}catch(ke){if(nt(we),ke!==ke+0)throw ke;at(1,0)}}function lw(c,h,_,w,A){var D=st();try{return Lc(c,h,_,w,A)}catch(W){if(nt(D),W!==W+0)throw W;at(1,0)}}function uw(c,h,_){var w=st();try{return Gc(c,h,_)}catch(A){if(nt(w),A!==A+0)throw A;at(1,0)}}function dw(c,h,_,w,A,D,W,re){var we=st();try{Kc(c,h,_,w,A,D,W,re)}catch(ke){if(nt(we),ke!==ke+0)throw ke;at(1,0)}}function cw(c,h,_,w,A,D,W,re,we,ke,Ze,ct){var $t=st();try{Wc(c,h,_,w,A,D,W,re,we,ke,Ze,ct)}catch(It){if(nt($t),It!==It+0)throw It;at(1,0)}}function fw(c,h,_){var w=st();try{return Xc(c,h,_)}catch(A){if(nt(w),A!==A+0)throw A;return at(1,0),0n}}function pw(c,h,_,w,A,D,W,re,we){var ke=st();try{Bc(c,h,_,w,A,D,W,re,we)}catch(Ze){if(nt(ke),Ze!==Ze+0)throw Ze;at(1,0)}}function hw(c){var h=st();try{return Yc(c)}catch(_){if(nt(h),_!==_+0)throw _;at(1,0)}}function mw(c,h){var _=st();try{return pf(c,h)}catch(w){if(nt(_),w!==w+0)throw w;return at(1,0),0n}}function gw(c,h,_,w){var A=st();try{return Zc(c,h,_,w)}catch(D){if(nt(A),D!==D+0)throw D;at(1,0)}}function yw(c){var h=st();try{return Qc(c)}catch(_){if(nt(h),_!==_+0)throw _;return at(1,0),0n}}function bw(c,h,_,w){var A=st();try{return sf(c,h,_,w)}catch(D){if(nt(A),D!==D+0)throw D;at(1,0)}}function vw(c,h,_,w,A){var D=st();try{return af(c,h,_,w,A)}catch(W){if(nt(D),W!==W+0)throw W;at(1,0)}}function ww(c,h,_,w,A,D){var W=st();try{return of(c,h,_,w,A,D)}catch(re){if(nt(W),re!==re+0)throw re;at(1,0)}}function _w(c,h,_,w,A,D){var W=st();try{return Vc(c,h,_,w,A,D)}catch(re){if(nt(W),re!==re+0)throw re;at(1,0)}}function xw(c,h,_,w,A,D){var W=st();try{return lf(c,h,_,w,A,D)}catch(re){if(nt(W),re!==re+0)throw re;at(1,0)}}function $w(c,h,_,w,A,D,W,re){var we=st();try{return Hc(c,h,_,w,A,D,W,re)}catch(ke){if(nt(we),ke!==ke+0)throw ke;at(1,0)}}function Sw(c,h,_,w,A){var D=st();try{return uf(c,h,_,w,A)}catch(W){if(nt(D),W!==W+0)throw W;return at(1,0),0n}}function kw(c,h,_,w){var A=st();try{return df(c,h,_,w)}catch(D){if(nt(A),D!==D+0)throw D;at(1,0)}}function Tw(c,h,_,w){var A=st();try{return cf(c,h,_,w)}catch(D){if(nt(A),D!==D+0)throw D;at(1,0)}}function Cw(c,h,_,w,A,D,W,re,we,ke,Ze,ct){var $t=st();try{return ff(c,h,_,w,A,D,W,re,we,ke,Ze,ct)}catch(It){if(nt($t),It!==It+0)throw It;at(1,0)}}function Ew(c,h,_,w,A,D,W,re,we,ke,Ze){var ct=st();try{rf(c,h,_,w,A,D,W,re,we,ke,Ze)}catch($t){if(nt(ct),$t!==$t+0)throw $t;at(1,0)}}function Iw(c,h,_,w,A,D,W,re,we,ke,Ze,ct,$t,It,Xn,Rl){var Mw=st();try{nf(c,h,_,w,A,D,W,re,we,ke,Ze,ct,$t,It,Xn,Rl)}catch(Bl){if(nt(Mw),Bl!==Bl+0)throw Bl;at(1,0)}}function Aw(c,h,_){var w=st();try{return Jc(c,h,_)}catch(A){if(nt(w),A!==A+0)throw A;at(1,0)}}function Ow(c,h,_){var w=st();try{return ef(c,h,_)}catch(A){if(nt(w),A!==A+0)throw A;at(1,0)}}function zw(c,h,_,w){var A=st();try{tf(c,h,_,w)}catch(D){if(nt(A),D!==D+0)throw D;at(1,0)}}function eo(){if(0<et)z=eo;else if(i)x?.(t),$e();else{for(var c=Ne;0<c.length;)c.shift()(t);0<et?z=eo:(t.calledRun=!0,P||($e(),x?.(t)))}}return i||(xn=await Fe(),eo()),t.PTR_SIZE=4,ne?t:new Promise((c,h)=>{x=c,T=h})}var Ey,ap,e$=pe(()=>{"use strict";Ey=sp,ap=globalThis.self?.name?.startsWith("em-pthread"),ap&&sp()}),ru,pd,op,wr,Iy,co,lp,up,nu,dp,iu,Ay,su,Oy,Yd=pe(()=>{"use strict";Xd(),ru=typeof location>"u"?void 0:location.origin,pd=import.meta.url>"file:"&&import.meta.url<"file;",op=()=>{if(pd){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,ru).href}return import.meta.url},wr=op(),Iy=()=>{if(wr&&!wr.startsWith("blob:"))return wr.substring(0,wr.lastIndexOf("/")+1)},co=(e,t)=>{try{let r=t??wr;return(r?new URL(e,r):new URL(e)).origin===ru}catch{return!1}},lp=(e,t)=>{let r=t??wr;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},up=(e,t)=>`${t??"./"}${e}`,nu=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},dp=async e=>(await import(e)).default,iu=(Jx(),ga(ky)).default,Ay=async()=>{if(!wr)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(co(wr))return[void 0,iu()];let e=await nu(wr);return[e,iu(e)]},su=(e$(),ga(Cy)).default,Oy=async(e,t,r,n)=>{let i=su&&!(e||t);if(i)if(wr)i=co(wr)||n&&!r;else if(n&&!r)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,su];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??lp(s,t),o=r&&a&&!co(a,t),l=o?await nu(a):a??up(s,t);return[o?l:void 0,await dp(l)]}}}),au,fo,Ps,ou,cp,fp,pp,Zd,Ct,Qi=pe(()=>{"use strict";Yd(),fo=!1,Ps=!1,ou=!1,cp=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},fp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},pp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Zd=async e=>{if(fo)return Promise.resolve();if(Ps)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ou)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ps=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!pp())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!fp())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=cp();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,a=i?.mjs,o=a?.href??a,l=i?.wasm,d=l?.href??l,f=e.wasmBinary,[p,g]=await Oy(o,s,r>1,!!f||!!d),b=!1,y=[];if(t>0&&y.push(new Promise(x=>{setTimeout(()=>{b=!0,x()},t)})),y.push(new Promise((x,T)=>{let S={numThreads:r};if(f)S.wasmBinary=f,S.locateFile=$=>$;else if(d||s)S.locateFile=$=>d??s+$;else if(o&&o.indexOf("blob:")!==0)S.locateFile=$=>new URL($,o).href;else if(p){let $=Iy();$&&(S.locateFile=I=>$+I)}g(S).then($=>{Ps=!1,fo=!0,au=$,x(),p&&URL.revokeObjectURL(p)},$=>{Ps=!1,ou=!0,T($)})})),await Promise.race(y),b)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ct=()=>{if(fo&&au)return au;throw new Error("WebAssembly is not initialized yet.")}}),qr,Wo,gt,Qd=pe(()=>{"use strict";Qi(),qr=(e,t)=>{let r=Ct(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},Wo=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,s])=>{let a=t?t+i:i;if(typeof s=="object")Wo(s,a+".",r,n);else if(typeof s=="string"||typeof s=="number")n(a,s.toString());else if(typeof s=="boolean")n(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},gt=e=>{let t=Ct(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);let s=Number(t.getValue(i,n===4?"i32":"i64")),a=t.getValue(i+n,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),zy,t$=pe(()=>{"use strict";Qi(),Qd(),zy=e=>{let t=Ct(),r=0,n=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let s=0;return e?.tag!==void 0&&(s=qr(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),r===0&&gt("Can't create run options."),e?.extra!==void 0&&Wo(e.extra,"",new WeakSet,(a,o)=>{let l=qr(a,n),d=qr(o,n);t._OrtAddRunConfigEntry(r,l,d)!==0&&gt(`Can't set a run config entry: ${a} - ${o}.`)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(a=>t._free(a)),s}}}),hp,mp,gp,zi,yp,My,r$=pe(()=>{"use strict";Qi(),Qd(),hp=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},mp=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},gp=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},zi=(e,t,r,n)=>{let i=qr(t,n),s=qr(r,n);Ct()._OrtAddSessionConfigEntry(e,i,s)!==0&&gt(`Can't set a session config entry: ${t} - ${r}.`)},yp=async(e,t,r)=>{let n=t.executionProviders;for(let i of n){let s=typeof i=="string"?i:i.name,a=[];switch(s){case"webnn":if(s="WEBNN",zi(e,"session.disable_quant_qdq","1",r),zi(e,"session.disable_qdq_constant_folding","1",r),typeof i!="string"){let p=i?.deviceType;p&&zi(e,"deviceType",p,r)}break;case"webgpu":if(s="JS",typeof i!="string"){let p=i;if(p?.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);zi(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=qr(s,r),l=a.length,d=0,f=0;if(l>0){d=Ct()._malloc(l*Ct().PTR_SIZE),r.push(d),f=Ct()._malloc(l*Ct().PTR_SIZE),r.push(f);for(let p=0;p<l;p++)Ct().setValue(d+p*Ct().PTR_SIZE,a[p][0],"*"),Ct().setValue(f+p*Ct().PTR_SIZE,a[p][1],"*")}await Ct()._OrtAppendExecutionProvider(e,o,d,f,l)!==0&&gt(`Can't append execution provider: ${s}.`)}},My=async e=>{let t=Ct(),r=0,n=[],i=e||{};gp(i);try{let s=hp(i.graphOptimizationLevel??"all"),a=mp(i.executionMode??"sequential"),o=typeof i.logId=="string"?qr(i.logId,n):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let f=typeof i.optimizedModelFilePath=="string"?qr(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,l,d,f),r===0&&gt("Can't create session options."),i.executionProviders&&await yp(r,i,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);zi(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[p,g]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let b=qr(p,n);t._OrtAddFreeDimensionOverride(r,b,g)!==0&&gt(`Can't set a free dimension override: ${p} - ${g}.`)}return i.extra!==void 0&&Wo(i.extra,"",new WeakSet,(p,g)=>{zi(r,p,g,n)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&gt("Can't release session options."),n.forEach(a=>t._free(a)),s}}}),Li,Mn,Fi,ul,Vo,Jd,ec,hd,Be=pe(()=>{"use strict";Li=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Mn=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Fi=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return r>0?Math.ceil(n*r):void 0},ul=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Vo=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Jd=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ec=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",hd=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),tc,Ry=pe(()=>{"use strict";Xd(),tc=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let l=Math.ceil(n/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await i.read();if(o)break;let d=l.byteLength;new Uint8Array(s,a,d).set(l),a+=d}return new Uint8Array(s,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),bp,vp,wp,_p,rc,xp,dt,Dn=pe(()=>{"use strict";Be(),bp=["V","I","W","E","F"],vp=(e,t)=>{console.log(`[${bp[e]},${new Date().toISOString()}]${t}`)},rc=(e,t)=>{wp=e,_p=t},xp=(e,t)=>{let r=Vo(e),n=Vo(wp);r>=n&&vp(r,typeof t=="function"?t():t)},dt=(...e)=>{_p&&xp(...e)}}),$p,vs,Y,Ho,By,Py,Dy,je=pe(()=>{"use strict";$p=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},vs=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(n<2||i<2)return;let o=$p.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=r?3:1;o<=s;o++){let l=n-o<0?1:e[n-o],d=i-o<0?1:t[i-o];if(l!==d&&l>1&&d>1)return;let f=Math.max(l,d);if(l&&d)a[s-o]=Math.max(l,d);else{if(f>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},Y=class Ao{static size(t){return Ao.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),s=n-1;for(;s>=0;){if(t[s]%r===0){i[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,r/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Ao.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Ao.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let s=r;s<n;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,s)=>i+r[s]+r[s+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},Ho=class ti{static adjustPoolAttributes(t,r,n,i,s,a){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<n.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=n[o]||a[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)ti.adjustPadAndReturnShape(t[l+(a?1:2)],r[l],n[l],i[l],s,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,n,i,s,a,o,l=0){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return ti.computeShapeHelper(t,r,d,n,i,s,a,o,l),d}static computeConvOutputShape(t,r,n,i,s,a,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return ti.computeShapeHelper(!1,t,l,n,i,s,a,o),l}static computeShapeHelper(t,r,n,i,s,a,o,l,d=0){if(t)for(let f=0;f<r.length-2;f++)n.push(1);else for(let f=0;f<r.length-2;f++)n.push(ti.adjustPadAndReturnShape(r[f+2],i[f],s[f],a[f],o,f,f+r.length-2,l,d))}static computeOutputSize(t,r,n,i,s){let a=Math.floor(t/r)+1;return s===1&&(a=Math.ceil(t/r)+1,(a-1)*r>=n+i&&(a-=1)),a}static adjustPadAndReturnShape(t,r,n,i,s,a,o,l,d=0){let f=n*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[o]=0,ti.computeOutputSize(t-f,r,t,0,d);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=(Math.floor((t+r-1)/r)-1)*r+i-t;return s[a]=Math.floor(l==="SAME_LOWER"?(p+1)/2:p/2),s[o]=p-s[a],ti.computeOutputSize(t+s[a]+s[o]-f,r,t,s[a],d)}default:throw new Error("Unsupported AutoPad type")}else return ti.computeOutputSize(t+s[a]+s[o]-f,r,t,s[a],d)}},By=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let l=-1;if(n?(o=r[0],l=1):(o=r[1],l=0),r[l]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(i&&!vs.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},Py=-34028234663852886e22,Dy=34028234663852886e22}),nc,Ny=pe(()=>{"use strict";Be(),nc=(e,t)=>new(ul(t))(e)}),lu,Sp,uu,kp,du,Tp,cu,fu,pu,Cp,Uy,n$=pe(()=>{"use strict";Be(),Dn(),lu=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Sp=(e,t)=>{if(t==="int32")return e;let r=lu.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=e.byteLength/n,s=new(ul(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let o=0;o<i;o++){let l=s[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},uu=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},kp=1,du=()=>kp++,Tp=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),cu=(e,t)=>{let r=lu.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},fu=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:i,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return cu(this.dataType,this.tensorShape)}destroy(){dt("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=uu(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},pu=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let i=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!s?.input.dataTypes.includes(t)){if(a=Tp.get(t),!a||!s?.input.dataTypes.includes(a))throw new Error(`WebNN backend does not support data type: ${t}`);dt("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==cu(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,a),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Sp(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else dt("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?uu(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Cp=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=du();return this.tensorTrackersById.set(e,new pu(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){dt("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,n,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){dt("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let i=this.getMLContext(e),s=du(),a=new fu({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(s,new pu(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,r,n,i,s,a){let o=this.getMLContext(e);for(let[d,f]of this.freeTensors.entries())if(f.canReuseTensor(o,t,r)){dt("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let p=this.freeTensors.splice(d,1)[0];return p.sessionId=e,p}dt("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:a??t,shape:r,dimensions:r,usage:n,writable:i,readable:s});return new fu({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Uy=(...e)=>new Cp(...e)}),Ds,Ep,Ly,i$=pe(()=>{"use strict";Be(),Qi(),Ny(),n$(),Dn(),Ds=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Ep=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,s)=>i===n[s]&&e[i]===t[i])},Ly=class{constructor(e){this.tensorManager=Uy(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,rc(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){dt("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){dt("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)dt("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>Ep(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){dt("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){let s=Ds.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,n,i)}async createTemporaryTensor(e,t,r){dt("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=Ds.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Ct().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");dt("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return nc(r,t)}}registerMLTensor(e,t,r,n){let i=Ds.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,i,n);return dt("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${s}}`),s}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=Ds.get(Li(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof n>"u"?!1:r?!!i?.input.dataTypes.includes(n):!!i?.output.dataTypes.includes(n)}flush(){}}}),ic=pe(()=>{"use strict"}),hu,po,ho,Ip,Ap,mu,md,Op,Fy,s$=pe(()=>{"use strict";Dn(),ic(),hu=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),po=[],ho=e=>Math.ceil(Number(e)/16)*16,Ip=e=>{for(let t=0;t<po.length;t++){let r=po[t];if(e<=r)return r}return Math.ceil(e/16)*16},Ap=1,mu=()=>Ap++,md=async(e,t,r,n)=>{let i=ho(r),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(n){let l=n();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},Op=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of hu)po.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,s=ho(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);if(s===i&&n%4===0)this.backend.device.queue.writeBuffer(a.gpuData.buffer,0,r,n,i);else{let o=new Uint8Array(s);o.set(t),this.backend.device.queue.writeBuffer(a.gpuData.buffer,0,o,0,s)}dt("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=ho(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return dt("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=mu();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),dt("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),dt("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Ip(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let a={id:mu(),type:0,buffer:n};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),dt("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return dt("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await md(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=hu.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(dt("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Fy=(...e)=>new Op(...e)}),zp,ht,Rt=pe(()=>{"use strict";zp=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ht=e=>new zp(e)}),ws,mo,Gt,qt,Ae,Mt,gd,fs,di,Ee,Ns,ee,Te,jy,sc,Mp,Wy,Ge=pe(()=>{"use strict";Be(),je(),ws=64,mo=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Gt=(e,t=1)=>{let r=mo(e,t);return typeof r=="string"?r:r[0]},qt=(e,t=1)=>{let r=mo(e,t);return typeof r=="string"?r:r[1]},Ae=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:Y.computeStrides(r)})}),t},Mt=e=>e%4===0?4:e%2===0?2:1,gd=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,fs=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,di=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Ee=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Ns=(e,t,r,n,i)=>{let s=typeof r=="number",a=s?r:r.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=mo(t,i),f=typeof d=="string"?d:d[1],p=typeof d=="string"?d:d[0],g={indices:l,value:f,storage:p,tensor:t},b=ne=>typeof ne=="string"?ne:`${ne}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},x=s?"uniforms.":"",T=`${x}${e}_shape`,S=`${x}${e}_strides`,$="";for(let ne=0;ne<a-1;ne++)$+=`
    let dim${ne} = current / ${Ee(S,ne,a)};
    let rest${ne} = current % ${Ee(S,ne,a)};
    indices[${ne}] = dim${ne};
    current = rest${ne};
    `;$+=`indices[${a-1}] = current;`;let I=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${$}
    return indices;
  }`,E=ne=>(y.offsetToIndices=!0,a<2?ne:`o2i_${e}(${ne})`),O=[];if(a>=2)for(let ne=a-1;ne>=0;ne--)O.push(`${Ee(S,ne,a)} * (indices[${ne}])`);let P=a<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${O.join("+")};
  }`,N=ne=>(y.indicesToOffset=!0,a<2?ne:`i2o_${e}(${ne})`),C=(...ne)=>a===0?"0u":`${g.indices}(${ne.map(b).join(",")})`,V=(ne,xe)=>a<2?`${ne}`:`${Ee(ne,xe,a)}`,Q=(ne,xe,$e)=>a<2?`${ne}=${$e};`:`${Ee(ne,xe,a)}=${$e};`,de={},K=(ne,xe)=>{y.broadcastedIndicesToOffset=!0;let $e=`${xe.name}broadcastedIndicesTo${e}Offset`;if($e in de)return`${$e}(${ne})`;let ie=[];for(let Pe=a-1;Pe>=0;Pe--){let Fe=xe.indicesGet("outputIndices",Pe+xe.rank-a);ie.push(`${V(S,Pe)} * (${Fe} % ${V(T,Pe)})`)}return de[$e]=`fn ${$e}(outputIndices: ${xe.type.indices}) -> u32 {
             return ${ie.length>0?ie.join("+"):"0u"};
           }`,`${$e}(${ne})`},ue=(ne,xe)=>(()=>{if(g.storage===g.value)return`${e}[${ne}]=${xe};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${ne}]=vec2<u32>(u32(${xe}), select(0u, 0xFFFFFFFFu, ${xe} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${ne}]=vec2<u32>(u32(${xe}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${ne}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${xe}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),H=ne=>(()=>{if(g.storage===g.value)return`${e}[${ne}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${ne}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${ne}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${ne}] & 0xFFu), bool(${e}[${ne}] & 0xFF00u), bool(${e}[${ne}] & 0xFF0000u), bool(${e}[${ne}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),te=a<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${f} {
    return ${H(`i2o_${e}(indices)`)};
  }`,he=a<2?"":(()=>{let ne=o.map($e=>`d${$e}: u32`).join(", "),xe=o.map($e=>`d${$e}`).join(", ");return`
  fn get_${e}(${ne}) -> ${f} {
    return get_${e}ByIndices(${C(xe)});
  }`})(),ce=(...ne)=>{if(ne.length!==a)throw new Error(`indices length must be ${a}`);let xe=ne.map(b).join(",");return a===0?H("0u"):a===1?H(xe[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${xe})`)},ge=ne=>a<2?H(ne):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${ne})`),ae=a<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${f}) {
    ${ue(`i2o_${e}(indices)`,"value")}
  }`,Ie=a<2?"":(()=>{let ne=o.map($e=>`d${$e}: u32`).join(", "),xe=o.map($e=>`d${$e}`).join(", ");return`
  fn set_${e}(${ne}, value: ${f}) {
    set_${e}ByIndices(${C(xe)}, value);
  }`})();return{impl:()=>{let ne=[],xe=!1;return y.offsetToIndices&&(ne.push(I),xe=!0),y.indicesToOffset&&(ne.push(P),xe=!0),y.broadcastedIndicesToOffset&&(Object.values(de).forEach($e=>ne.push($e)),xe=!0),y.set&&(ne.push(Ie),xe=!0),y.setByIndices&&(ne.push(ae),xe=!0),y.get&&(ne.push(he),xe=!0),y.getByIndices&&(ne.push(te),xe=!0),!s&&xe&&ne.unshift(`const ${T} = ${g.indices}(${r.join(",")});`,`const ${S} = ${g.indices}(${Y.computeStrides(r).join(",")});`),ne.join(`
`)},type:g,offsetToIndices:E,indicesToOffset:N,broadcastedIndicesToOffset:K,indices:C,indicesGet:V,indicesSet:Q,set:(...ne)=>{if(ne.length!==a+1)throw new Error(`indices length must be ${a}`);let xe=ne[a];if(typeof xe!="string")throw new Error("value must be string");let $e=ne.slice(0,a).map(b).join(",");return a===0?ue("0u",xe):a===1?ue($e[0],xe):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${$e}, ${xe})`)},setByOffset:ue,setByIndices:(ne,xe)=>a<2?ue(ne,xe):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${ne}, ${xe});`),get:ce,getByOffset:H,getByIndices:ge,usage:n,name:e,strides:S,shape:T,rank:a}},ee=(e,t,r,n=1)=>Ns(e,t,r,"input",n),Te=(e,t,r,n=1)=>Ns(e,t,r,"output",n),jy=(e,t,r)=>Ns(e,t,r,"atomicOutput",1),sc=(e,t,r,n=1)=>Ns(e,t,r,"internal",n),Mp=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=ws){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Wy=(e,t)=>new Mp(e,t)}),Rp,gu,Bp,Pp,Dp,Np,Sr,Vy,Hy,fi=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),Rp=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},gu=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Bp=(e,t)=>Y.sortBasedOnPerm(e,gu(e.length,t)),Pp=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},Dp=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},Np=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},Sr=(e,t)=>{let r=e.dataType,n=e.dims.length,i=gu(n,t),s=Bp(e.dims,i),a=e.dims,o=s,l=n<2||Np(i,e.dims),d;if(l)return d=y=>{let x=ee("input",r,a,4),T=Te("output",r,o,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(x,T)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=Y.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:f,newPerm:p}=Dp(e.dims,i),g=Y.areEqual(p,[2,3,1]),b=Y.areEqual(p,[3,1,2]);if(f.length===2||g||b){a=g?[f[0],f[1]*f[2]]:b?[f[0]*f[1],f[2]]:f,o=[a[1],a[0]];let y=16;return d=x=>{let T=ee("a",r,a.length),S=Te("output",r,o.length);return`
  ${x.registerUniform("output_size","u32").declareVariables(T,S)}
  var<workgroup> tile : array<array<${S.type.value}, ${y+1}>, ${y}>;
  ${x.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${T.getByIndices(`${T.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${S.setByIndices(`${S.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let x=Y.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/y),y:Math.ceil(o[0]/y)},programUniforms:[{type:12,data:x},...Ae(a,o)]}},getShaderSource:d}}return d=y=>{let x=ee("a",r,a.length),T=Te("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(x,T)}

  ${Pp(i,n,x,T)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${T.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${T.setByOffset("global_idx",x.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=Y.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Ae(a,o)]}},getShaderSource:d}},Vy=(e,t)=>{Rp(e.inputs,t.perm),e.compute(Sr(e.inputs[0],t.perm))},Hy=e=>ht({perm:e.perm})}),Up,Lp,Fp,jp,Wp,Vp,Hp,qp,Gp,Kp,Lr,qy,Gy,Ky,Xy,Yy,Zy,Qy,Jy,eb,tb,a$=pe(()=>{"use strict";Be(),je(),Ge(),ac(),fi(),Up={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Lp={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Fp={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},jp={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Wp=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},Vp=(e,t)=>{let r=[],n=e.length;for(let s=0;s<n;s++)t.indexOf(s)===-1&&r.push(e[s]);let i=t.map(s=>e[s]);return[r,i]},Hp=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?n.push(e[i++]):n.push(1);return n},qp=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Gp=(e,t)=>{let r=[];if(!qp(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},Kp=(e,t,r,n,i,s,a)=>{let o=r[0].dims,l=Y.size(s),d=Y.size(a),f=ee("_A",r[0].dataType,o),p=Te("output",i,s),g=64;l===1&&(g=256);let b=`
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

          var bestValue = f32(${Fp[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${Up[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Lp[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${n==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${jp[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Lr=(e,t,r,n)=>{let i=e.inputs.length===1?r:yd(e.inputs,r),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((b,y)=>y));let a=Y.normalizeAxes(s,e.inputs[0].dims.length),o=a,l=e.inputs[0],d=Gp(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Sr(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Wp(o.length,l.dims.length));let[f,p]=Vp(l.dims,o),g=f;i.keepDims&&(g=Hp(f,a)),e.compute(Kp(t,i.cacheKey,[l],n,e.inputs[0].dataType,g,p),{inputs:[l]})},qy=(e,t)=>{Lr(e,"ReduceMeanShared",t,"mean")},Gy=(e,t)=>{Lr(e,"ReduceL1Shared",t,"l1")},Ky=(e,t)=>{Lr(e,"ReduceL2Shared",t,"l2")},Xy=(e,t)=>{Lr(e,"ReduceLogSumExpShared",t,"logSumExp")},Yy=(e,t)=>{Lr(e,"ReduceMaxShared",t,"max")},Zy=(e,t)=>{Lr(e,"ReduceMinShared",t,"min")},Qy=(e,t)=>{Lr(e,"ReduceProdShared",t,"prod")},Jy=(e,t)=>{Lr(e,"ReduceSumShared",t,"sum")},eb=(e,t)=>{Lr(e,"ReduceSumSquareShared",t,"sumSquare")},tb=(e,t)=>{Lr(e,"ReduceLogSumShared",t,"logSum")}}),Fr,Xp,qo,yd,jr,Yp,Zp,Qp,Jp,eh,th,rh,nh,ih,sh,Wr,rb,nb,ib,sb,ab,ob,lb,ub,db,cb,ac=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),a$(),Fr=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Xp=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],qo=(e,t,r,n,i,s,a=!1,o=!1)=>{let l=[],d=r[0].dims,f=d.length,p=Y.normalizeAxes(i,f),g=!o&&p.length===0;d.forEach((x,T)=>{g||p.indexOf(T)>=0?a&&l.push(1):l.push(x)});let b=l.length,y=Y.size(l);return{name:e,shaderCache:t,getShaderSource:x=>{let T=[],S=ee("_A",r[0].dataType,f),$=Te("output",s,b),I=n(S,$,p),E=I[2];for(let O=0,P=0;O<f;O++)g||p.indexOf(O)>=0?(a&&P++,E=`for(var j${O}: u32 = 0; j${O} < ${d[O]}; j${O}++) {
                  ${I[2].includes("last_index")?`let last_index = j${O};`:""}
                  ${S.indicesSet("input_indices",O,`j${O}`)}
                  ${E}
                }`):(T.push(`${S.indicesSet("input_indices",O,$.indicesGet("output_indices",P))};`),P++);return`

        ${x.registerUniform("output_size","u32").declareVariables(S,$)}

        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${S.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${T.join(`
`)}
          ${I[0]}       // init ops for reduce max/min
          ${I[1]}
          ${E}
          ${I[3]}
          ${I.length===4?$.setByOffset("global_idx","value"):I.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Ae(d,l)]})}},yd=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),ht({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},jr=(e,t,r,n)=>{let i=e.inputs,s=i.length===1?r:yd(i,r);e.compute(qo(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?Xp:n,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Yp=(e,t)=>{Fr(e.inputs),jr(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Zp=(e,t)=>{Fr(e.inputs),jr(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Qp=(e,t)=>{Fr(e.inputs),jr(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Jp=(e,t)=>{Fr(e.inputs),jr(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},eh=(e,t)=>{Fr(e.inputs),jr(e,"ReduceMax",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},th=(e,t)=>{Fr(e.inputs),jr(e,"ReduceMean",t,(r,n,i)=>{let s=1;for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${s});`]})},rh=(e,t)=>{Fr(e.inputs),jr(e,"ReduceMin",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},nh=(e,t)=>{Fr(e.inputs),jr(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},ih=(e,t)=>{Fr(e.inputs),jr(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},sh=(e,t)=>{Fr(e.inputs),jr(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Wr=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?n*=e[s]:i*=e[s];return i<32&&n>1024},rb=(e,t)=>{Wr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?th(e,t):qy(e,t)},nb=(e,t)=>{Wr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zp(e,t):Gy(e,t)},ib=(e,t)=>{Wr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qp(e,t):Ky(e,t)},sb=(e,t)=>{Wr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jp(e,t):Xy(e,t)},ab=(e,t)=>{Wr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eh(e,t):Yy(e,t)},ob=(e,t)=>{Wr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rh(e,t):Zy(e,t)},lb=(e,t)=>{Wr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nh(e,t):Qy(e,t)},ub=(e,t)=>{Wr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ih(e,t):Jy(e,t)},db=(e,t)=>{Wr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sh(e,t):eb(e,t)},cb=(e,t)=>{Wr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Yp(e,t):tb(e,t)}}),yu,fb,pb,bd,o$=pe(()=>{"use strict";Be(),Rt(),ac(),yu=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},fb=(e,t)=>{yu(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(qo("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},pb=(e,t)=>{yu(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(qo("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},bd=e=>ht(e)}),ah,go,oh,lh,uh,ya,dh,hb,oc=pe(()=>{"use strict";Be(),je(),ic(),Ge(),ah=(e,t)=>{let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],f=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,g=p,b=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],b=t.qkvHiddenSizes[2]}let y=d;if(p!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+g+b)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let x=0;if(a){if(g!==b)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(x=a.dims[3])}let T=y+x,S=-1,$=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==T)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:x,kvSequenceLength:y,totalSequenceLength:T,maxSequenceLength:S,inputHiddenSize:f,hiddenSize:p,vHiddenSize:b,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(b/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},go=(e,t,r)=>t&&e?`
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
    `,oh=(e,t,r,n,i,s,a,o)=>{let l=Mt(a?1:s),d=64,f=s/l;f<d&&(d=32);let p=Math.ceil(s/l/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:f},{type:12,data:p}],b=Gt(e.dataType,l),y=qt(1,l),x=["type"];a&&x.push("type"),o&&x.push("type");let T=S=>{let $=Te("x",e.dataType,e.dims,l),I=[$],E=a?ee("seq_lens",a.dataType,a.dims):void 0;E&&I.push(E);let O=o?ee("total_sequence_length_input",o.dataType,o.dims):void 0;O&&I.push(O);let P=qt(e.dataType),N=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${S.registerUniforms(N).declareVariables(...I)}
  ${S.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${go(E,O,!1)}
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${b};${l}`,inputDependencies:x},getShaderSource:T,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:g})}},lh=(e,t,r,n,i,s,a,o,l)=>{let d=a+s.kvSequenceLength,f=[s.batchSize,s.numHeads,s.sequenceLength,d],p=e>1&&n,g=s.kvNumHeads?s.kvNumHeads:s.numHeads,b=p?[s.batchSize,g,d,s.headSize]:void 0,y=s.nReps?s.nReps:1,x=s.scale===0?1/Math.sqrt(s.headSize):s.scale,T=Mt(s.headSize),S=s.headSize/T,$=12,I={x:Math.ceil(d/$),y:Math.ceil(s.sequenceLength/$),z:s.batchSize*s.numHeads},E=[{type:12,data:s.sequenceLength},{type:12,data:S},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:x},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:y}],O=p&&n&&Y.size(n.dims)>0,P=["type","type"];O&&P.push("type"),i&&P.push("type"),o&&P.push("type"),l&&P.push("type");let N=[{dims:f,dataType:t.dataType,gpuDataType:0}];p&&N.push({dims:b,dataType:t.dataType,gpuDataType:0});let C=V=>{let Q=ee("q",t.dataType,t.dims,T),de=ee("key",r.dataType,r.dims,T),K=[Q,de];if(O){let ae=ee("past_key",n.dataType,n.dims,T);K.push(ae)}i&&K.push(ee("attention_bias",i.dataType,i.dims));let ue=o?ee("seq_lens",o.dataType,o.dims):void 0;ue&&K.push(ue);let H=l?ee("total_sequence_length_input",l.dataType,l.dims):void 0;H&&K.push(H);let te=Te("output",t.dataType,f),he=[te];p&&he.push(Te("present_key",t.dataType,b,T));let ce=qt(1,T),ge=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${Q.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${Q.type.storage}, ${$*$}>;
  ${V.registerUniforms(ge).declareVariables(...K,...he)}
  ${V.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${go(ue,H,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${O&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ce}(0);
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
          value += ${ce}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(T){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${T}`)}})()};
        output[outputIdx] = ${te.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${T};${i!==void 0};${n!==void 0};${e}`,inputDependencies:P},getRunData:()=>({outputs:N,dispatchGroup:I,programUniforms:E}),getShaderSource:C}},uh=(e,t,r,n,i,s,a=void 0,o=void 0)=>{let l=s+i.kvSequenceLength,d=i.nReps?i.nReps:1,f=i.vHiddenSize*d,p=e>1&&n,g=i.kvNumHeads?i.kvNumHeads:i.numHeads,b=p?[i.batchSize,g,l,i.headSize]:void 0,y=[i.batchSize,i.sequenceLength,f],x=12,T={x:Math.ceil(i.vHeadSize/x),y:Math.ceil(i.sequenceLength/x),z:i.batchSize*i.numHeads},S=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:f},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:d}],$=p&&n&&Y.size(n.dims)>0,I=["type","type"];$&&I.push("type"),a&&I.push("type"),o&&I.push("type");let E=[{dims:y,dataType:t.dataType,gpuDataType:0}];p&&E.push({dims:b,dataType:t.dataType,gpuDataType:0});let O=P=>{let N=ee("probs",t.dataType,t.dims),C=ee("v",r.dataType,r.dims),V=[N,C];$&&V.push(ee("past_value",n.dataType,n.dims));let Q=a?ee("seq_lens",a.dataType,a.dims):void 0;a&&V.push(Q);let de=o?ee("total_sequence_length_input",o.dataType,o.dims):void 0;o&&V.push(de);let K=[Te("output",t.dataType,y)];p&&K.push(Te("present_value",t.dataType,b));let ue=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;
  var<workgroup> tileQ: array<${N.type.value}, ${x*x}>;
  var<workgroup> tileV: array<${N.type.value}, ${x*x}>;
  ${P.registerUniforms(ue).declareVariables(...V,...K)}
  ${P.mainStart([x,x,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${go(Q,de,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:E,dispatchGroup:T,programUniforms:S}),getShaderSource:O}},ya=(e,t,r,n,i,s,a,o,l,d,f=void 0,p=void 0)=>{let g=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),b=g>1?a:void 0,y=g>1?o:void 0,x=g>1?d.pastSequenceLength:0,T=x+d.kvSequenceLength,S=l&&Y.size(l.dims)>0?l:void 0,$=[t,r];b&&Y.size(b.dims)>0&&$.push(b),S&&$.push(S),f&&$.push(f),p&&$.push(p);let I=e.compute(lh(g,t,r,b,S,d,x,f,p),{inputs:$,outputs:g>1?[-1,1]:[-1]})[0];e.compute(oh(I,d.batchSize,d.numHeads,x,d.sequenceLength,T,f,p),{inputs:f&&p?[I,f,p]:[I],outputs:[]});let E=[I,n];y&&Y.size(y.dims)>0&&E.push(y),f&&E.push(f),p&&E.push(p),e.compute(uh(g,I,n,y,d,x,f,p),{inputs:E,outputs:g>1?[0,2]:[0]})},dh=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=p=>{let g=Te("output_q",l[0].dataType,r),b=Te("output_k",l[0].dataType,r),y=Te("output_v",l[0].dataType,r),x=ee("input",l[0].dataType,l[0].dims),T=ee("weight",l[1].dataType,l[1].dims),S=ee("bias",l[2].dataType,l[2].dims),$=x.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${$}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${$}, ${a*a}>;
  var<workgroup> tileWeightK: array<${$}, ${a*a}>;
  var<workgroup> tileWeightV: array<${$}, ${a*a}>;
  ${p.registerUniforms(I).declareVariables(x,T,S,g,b,y)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:f},{inputs:l,outputs:[-1,-1,-1]})},hb=(e,t)=>{let r=ah(e.inputs,t),[n,i,s]=dh(e,r);return ya(e,n,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),ch,fh,ph,mb,l$=pe(()=>{"use strict";Nr(),Be(),je(),Rt(),Ge(),ch=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,s)=>{let a=i.length;if(a!==n.length)throw new Error(`${s}: num dimensions != ${a}`);i.forEach((o,l)=>{if(o!==n[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},fh=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,s=e[0].dims,a=n?Mt(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?a:1,l=Y.size(s)/a,d=n,f=d?s.length:s,p=ee("x",e[0].dataType,e[0].dims,a),g=ee("scale",e[1].dataType,e[1].dims,o),b=ee("bias",e[2].dataType,e[2].dims,o),y=ee("inputMean",e[3].dataType,e[3].dims,o),x=ee("inputVar",e[4].dataType,e[4].dims,o),T=Te("y",e[0].dataType,f,a),S=()=>{let I="";if(n)I=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")I=`
            ${T.indicesSet("outputIndices","0","0")}
            let cOffset = ${T.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let E=1;E<g.rank;E++)I+=`cIndices[${E}] = outputIndices[${E}];`;I+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return I},$=I=>`
  const epsilon = ${r};
  ${I.registerUniform("outputSize","u32").declareVariables(p,g,b,y,x,T)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${T.offsetToIndices(`global_idx * ${a}`)};
    ${S()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${b.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${x.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${T.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...Ae(s)]:[{type:12,data:l}]})}},ph=e=>ht(e),mb=(e,t)=>{let{inputs:r,outputCount:n}=e,i=ph({...t,outputCount:n});if(St.webgpu.validateInputContent&&ch(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(fh(r,i))}}),hh,mh,gb,u$=pe(()=>{"use strict";je(),Ge(),hh=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},mh=e=>{let t=e[0].dims,r=e[0].dims[2],n=Y.size(t)/4,i=e[0].dataType,s=ee("input",i,t,4),a=ee("bias",i,[r],4),o=ee("residual",i,t,4),l=Te("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,a,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},gb=e=>{hh(e.inputs),e.compute(mh(e.inputs))}}),gh,ft,yb,bb,vb,wb,_b,xb,$b,Sb,kb,yh,Tb,Cb,Eb,Ib,Xs,Ab,Oo,Ob,zb,Mb,Rb,Bb,Pb,Db,Nb,Ub,Lb,Fb,jb,Wb,Vb,Hb,qb,Gb,bu,Kb,vd,wd,Xb,Yb,Zb,bh,vh,Qb,lc=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),gh=(e,t,r,n,i,s,a)=>{let o=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=ee("inputData",r,[o],4),f=Te("outputData",n,[o],4),p=[{name:"vec_size",type:"u32"}];return a&&p.push(...a),`
      ${e.registerUniforms(p).declareVariables(d,f)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",l)}
  }`},ft=(e,t,r,n,i,s=e.dataType,a,o)=>{let l=[{type:12,data:Math.ceil(Y.size(e.dims)/4)}];return a&&l.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>gh(d,Y.size(e.dims),e.dataType,s,r,n,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(Y.size(d[0].dims)/64/4)},programUniforms:l})}},yb=e=>{e.compute(ft(e.inputs[0],"Abs","abs"))},bb=e=>{e.compute(ft(e.inputs[0],"Acos","acos"))},vb=e=>{e.compute(ft(e.inputs[0],"Acosh","acosh"))},wb=e=>{e.compute(ft(e.inputs[0],"Asin","asin"))},_b=e=>{e.compute(ft(e.inputs[0],"Asinh","asinh"))},xb=e=>{e.compute(ft(e.inputs[0],"Atan","atan"))},$b=e=>{e.compute(ft(e.inputs[0],"Atanh","atanh"))},Sb=e=>ht(e),kb=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ft(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},yh=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ht({min:t,max:r})},Tb=(e,t)=>{let r=t||yh(e.inputs),n=qt(e.inputs[0].dataType);e.compute(ft(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},Cb=e=>{e.compute(ft(e.inputs[0],"Ceil","ceil"))},Eb=e=>{e.compute(ft(e.inputs[0],"Cos","cos"))},Ib=e=>{e.compute(ft(e.inputs[0],"Cosh","cosh"))},Xs=e=>ht(e),Ab=(e,t)=>{let r=qt(e.inputs[0].dataType);e.compute(ft(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Oo=(e="f32")=>`
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
}`,Ob=e=>{let t=qt(e.inputs[0].dataType);e.compute(ft(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Oo(t)))},zb=e=>{e.compute(ft(e.inputs[0],"Exp","exp"))},Mb=e=>{e.compute(ft(e.inputs[0],"Floor","floor"))},Rb=e=>{let t=qt(e.inputs[0].dataType);e.compute(ft(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Oo(t)))},Bb=(e,t)=>{let r=qt(e.inputs[0].dataType);e.compute(ft(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Pb=e=>{e.compute(ft(e.inputs[0],"Not",t=>`!${t}`))},Db=e=>{e.compute(ft(e.inputs[0],"Neg",t=>`-${t}`))},Nb=e=>{e.compute(ft(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Ub=e=>{let t=qt(e.inputs[0].dataType);e.compute(ft(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Lb=e=>{e.compute(ft(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Fb=e=>ht(e),jb=(e,t)=>{let r=qt(e.inputs[0].dataType);e.compute(ft(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Wb=e=>{let t=qt(e.inputs[0].dataType);e.compute(ft(e.inputs[0],"HardSwish",r=>`${r} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${r} + vec4<${t}>(0.5)))`))},Vb=e=>{e.compute(ft(e.inputs[0],"Sin","sin"))},Hb=e=>{e.compute(ft(e.inputs[0],"Sinh","sinh"))},qb=e=>{e.compute(ft(e.inputs[0],"Sqrt","sqrt"))},Gb=e=>{e.compute(ft(e.inputs[0],"Tan","tan"))},bu=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Kb=e=>{e.compute(ft(e.inputs[0],"Tanh",bu))},vd=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${bu("v")};
}
`,wd=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Xb=e=>{let t=qt(e.inputs[0].dataType);e.compute(ft(e.inputs[0],"FastGelu",wd,vd(t),void 0,e.inputs[0].dataType))},Yb=(e,t)=>{let r=qt(e.inputs[0].dataType);return e.compute(ft(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Zb=e=>{e.compute(ft(e.inputs[0],"Log","log"))},bh=(e,t)=>`
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
`,vh=e=>`quick_gelu_impl(${e})`,Qb=(e,t)=>{let r=qt(e.inputs[0].dataType);e.compute(ft(e.inputs[0],"QuickGelu",vh,bh(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),wh,_h,Jb,d$=pe(()=>{"use strict";je(),Ge(),lc(),wh=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},_h=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=ee("input",e[0].dataType,e[0].dims,4),n=ee("bias",e[0].dataType,[e[0].dims[2]],4),i=Te("output",e[0].dataType,t,4),s=Y.size(t)/4,a=Gt(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,n,i)}

  ${Oo(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Jb=e=>{wh(e.inputs),e.compute(_h(e.inputs))}}),xh,$h,Vr,ev,tv,rv,nv,iv,sv,av,ov,lv,uv,c$=pe(()=>{"use strict";Be(),je(),Ge(),xh=(e,t,r,n,i,s,a,o,l,d,f,p)=>{let g,b;typeof o=="string"?g=b=($,I)=>`${o}((${$}),(${I}))`:typeof o=="function"?g=b=o:(g=o.scalar,b=o.vector);let y=Te("outputData",f,n.length,4),x=ee("aData",l,t.length,4),T=ee("bData",d,r.length,4),S;if(i)if(s){let $=Y.size(t)===1,I=Y.size(r)===1,E=t.length>0&&t[t.length-1]%4===0,O=r.length>0&&r[r.length-1]%4===0;$||I?S=y.setByOffset("global_idx",b($?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"),I?`${T.type.value}(${T.getByOffset("0")}.x)`:T.getByOffset("global_idx"))):S=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${x.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${T.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",b(a||E?x.getByOffset("offsetA / 4u"):`${x.type.value}(${x.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||O?T.getByOffset("offsetB / 4u"):`${T.type.value}(${T.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else S=y.setByOffset("global_idx",b(x.getByOffset("global_idx"),T.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(I,E,O="")=>{let P=`aData[indexA${E}][componentA${E}]`,N=`bData[indexB${E}][componentB${E}]`;return`
            let outputIndices${E} = ${y.offsetToIndices(`global_idx * 4u + ${E}u`)};
            let offsetA${E} = ${x.broadcastedIndicesToOffset(`outputIndices${E}`,y)};
            let offsetB${E} = ${T.broadcastedIndicesToOffset(`outputIndices${E}`,y)};
            let indexA${E} = offsetA${E} / 4u;
            let indexB${E} = offsetB${E} / 4u;
            let componentA${E} = offsetA${E} % 4u;
            let componentB${E} = offsetB${E} % 4u;
            ${I}[${E}] = ${O}(${g(P,N)});
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
        ${e.registerUniform("vec_size","u32").declareVariables(x,T,y)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${S}
      }`},$h=(e,t,r,n,i,s,a=r.dataType)=>{let o=r.dims.map(Number),l=n.dims.map(Number),d=!Y.areEqual(o,l),f=o,p=Y.size(o),g=!1,b=!1,y=[d];if(d){let x=vs.calcShape(o,l,!1);if(!x)throw new Error("Can't perform binary op on the given tensors");f=x.slice(),p=Y.size(f);let T=Y.size(o)===1,S=Y.size(l)===1,$=o.length>0&&o[o.length-1]%4===0,I=l.length>0&&l[l.length-1]%4===0;y.push(T),y.push(S),y.push($),y.push(I);let E=1;for(let O=1;O<f.length;O++){let P=o[o.length-O],N=l[l.length-O];if(P===N)E*=P;else break}E%4===0?(b=!0,g=!0):(T||S||$||I)&&(g=!0)}else g=!0;return y.push(g),{name:e,shaderCache:{hint:t+y.map(x=>x.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:x=>xh(x,o,l,f,g,d,b,i,r.dataType,n.dataType,a,s),getRunData:()=>({outputs:[{dims:f,dataType:a}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(Y.size(f)/4)},...Ae(o,l,f)]})}},Vr=(e,t,r,n,i,s)=>{e.compute($h(t,i??"",e.inputs[0],e.inputs[1],r,n,s))},ev=e=>{Vr(e,"Add",(t,r)=>`${t}+${r}`)},tv=e=>{Vr(e,"Div",(t,r)=>`${t}/${r}`)},rv=e=>{Vr(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},nv=e=>{Vr(e,"Mul",(t,r)=>`${t}*${r}`)},iv=e=>{let t=ee("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Vr(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
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
      `)},sv=e=>{Vr(e,"Sub",(t,r)=>`${t}-${r}`)},av=e=>{Vr(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},ov=e=>{Vr(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},lv=e=>{Vr(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},uv=e=>{Vr(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Sh,kh,Th,Ch,dv,cv,f$=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),Sh=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,s=n.dims.length;e.forEach((a,o)=>{if(o!==r){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,d)=>{if(d!==t&&l!==n.dims[d])throw new Error("non concat dimensions must match")})}})},kh=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Th=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(s):i===0?n.push(`if (inputIndex == ${i}u) { ${s} }`):i===r-1?n.push(`else { ${s} }`):n.push(`else if (inputIndex == ${i}) { ${s} }`)}return n.join(`
`)},Ch=(e,t,r,n)=>{let i=Y.size(r),s=new Array(e.length),a=new Array(e.length),o=0,l=[],d=[],f=[{type:12,data:i}];for(let x=0;x<e.length;++x)o+=e[x].dims[t],s[x]=o,d.push(e[x].dims.length),a[x]=ee(`input${x}`,n,d[x]),l.push("rank"),f.push({type:12,data:s[x]});for(let x=0;x<e.length;++x)f.push(...Ae(e[x].dims));f.push(...Ae(r));let p=Te("output",n,r.length),g=p.indicesGet("indices",t),b=Array.from(Array(s.length).keys()).map(x=>`uniforms.sizeInConcatAxis${x}`).join(","),y=x=>`

  ${(()=>{x.registerUniform("outputSize","u32");for(let T=0;T<e.length;T++)x.registerUniform(`sizeInConcatAxis${T}`,"u32");return x.declareVariables(...a,p)})()}

  ${kh(s.length,b)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${b});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Th(a,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f}),getShaderSource:y}},dv=(e,t)=>{let r=e.inputs,n=r[0].dims,i=Y.normalizeAxis(t.axis,n.length);Sh(r,i);let s=n.slice();s[i]=r.reduce((o,l)=>o+(l.dims.length>i?l.dims[i]:0),0);let a=r.filter(o=>Y.size(o.dims)>0);e.compute(Ch(a,i,s,r[0].dataType),{inputs:a})},cv=e=>ht({axis:e.axis})}),Xi,Yi,Zi,uc,Ji=pe(()=>{"use strict";Be(),je(),Xi=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Yi=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Zi=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},uc=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,n]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=e?.activation_params||[Py,Dy];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Yt,fv,dc=pe(()=>{"use strict";Yt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},fv=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),pv,p$=pe(()=>{"use strict";pv=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),sa,cc,fc=pe(()=>{"use strict";Be(),je(),Ge(),Ji(),sa=(e,t,r,n,i)=>{let s=n-r;return`
      ${Array.from({length:r}).map((a,o)=>`
      if (${Ee(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,Ee(i,o+s,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},cc=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a[a.length-2],d=o[o.length-1],f=a[a.length-1],p=Mt(d),g=Mt(f),b=Mt(l),y=Y.size(r)/p/b,x=e.length>2,T=n?n.slice(0,-2):r.slice(0,-2),S=[Y.size(T),l,d],$=[{type:12,data:y},{type:12,data:l},{type:12,data:d},{type:12,data:f}];Yi(t,$),$.push(...Ae(T,a,o)),x&&$.push(...Ae(e[2].dims)),$.push(...Ae(S));let I=E=>{let O=sc("batch_dims",e[0].dataType,T.length),P=ee("a",e[0].dataType,a.length,g),N=ee("b",e[1].dataType,o.length,p),C=Te("output",e[0].dataType,S.length,p),V=Gt(C.type.tensor),Q=Xi(t,C.type.value,V),de=[P,N],K="";if(x){let te=i?p:1;de.push(ee("bias",e[2].dataType,e[2].dims.length,te)),K=`${i?`value += bias[col / ${te}];`:`value += ${C.type.value}(bias[row + i]);`}`}let ue=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Zi(t,ue);let H=()=>{let te=`var a_data: ${P.type.value};`;for(let he=0;he<g;he++)te+=`
              let b_data${he} = b[(b_offset + (k + ${he}) * uniforms.N + col) / ${p}];`;for(let he=0;he<b;he++){te+=`a_data = a[(a_offset + (row + ${he}) * uniforms.K + k) / ${g}];`;for(let ce=0;ce<g;ce++)te+=`
            values[${he}] = fma(${N.type.value}(a_data${g===1?"":`[${ce}]`}), b_data${ce}, values[${he}]);
`}return te};return`
  ${E.registerUniforms(ue).registerInternalVariables(O).declareVariables(...de,C)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${b};
    let row = (index1 % stride1) * ${b};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${O.offsetToIndices("batch")};`}

    var a_indices: ${P.type.indices};
    ${sa("a_indices",P,P.rank-2,O.rank,"batch_indices")}
    ${P.indicesSet("a_indices",P.rank-2,0)}
    ${P.indicesSet("a_indices",P.rank-1,0)}
    let a_offset = ${P.indicesToOffset("a_indices")};

    var b_indices: ${N.type.indices};
    ${sa("b_indices",N,N.rank-2,O.rank,"batch_indices")}
    ${N.indicesSet("b_indices",N.rank-2,0)}
    ${N.indicesSet("b_indices",N.rank-1,0)}
    let b_offset = ${N.indicesToOffset("b_indices")};
    var values: array<${C.type.value}, ${b}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${H()}
    }
    for (var i = 0u; i < ${b}u; i++) {
      var value = values[i];
      ${K}
      ${Q}
      let cur_indices = ${C.type.indices}(batch, row + i, col);
      let offset = ${C.indicesToOffset("cur_indices")};
      ${C.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${g};${b};${i}`,inputDependencies:x?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:$}),getShaderSource:I}}}),Eh,Ih,_d,vu,Ah,xd,Oh,Go,pc=pe(()=>{"use strict";Be(),je(),Ge(),Ji(),fc(),dc(),Eh=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Ih=(e,t)=>e?`
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
        }`,_d=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],f=i?l:s,p=i?s:l,g=f/t[0],b=s/t[1];if(!((i&&g===4&&e[1]===4||!i&&(g===3||g===4))&&f%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
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
          ${Eh(i,n)}
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

          ${Ih(i,g)}
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
            `,Ah=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",xd=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32,l=!1)=>{let d=e[1]*t[1],f=e[0]*t[0],p=i?d:s,g=i?s:d;if(!(g%t[1]===0&&p%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let b=g/t[1],y=p/t[0],x=s/t[1],T=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${vu(i,n)}
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
      ${vu(i,n)}
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
      ${Ah(i)}
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
    ${T}
  }
`},Oh=(e,t,r,n,i=!1)=>{let[s,a,o,l]=n,d=Gt(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Yt(e,d)} {
      var value = ${Yt(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${sa("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Yt(e,d)} {
      var value = ${Yt(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${sa("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Yt(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Yt(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Go=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a.slice(0,-2),d=o.slice(0,-2),f=n?n.slice(0,-2):r.slice(0,-2),p=Y.size(f),g=a[a.length-2],b=a[a.length-1],y=o[o.length-1],x=b%4===0&&y%4===0,T=g<=8?[4,1,1]:[4,4,1],S=[8,8,1],$=[Math.ceil(y/S[0]/T[0]),Math.ceil(g/S[1]/T[1]),Math.ceil(p/S[2]/T[2])],I=x?4:1,E=[...l,g,b/I],O=E.length,P=[...d,b,y/I],N=P.length,C=[p,g,y/I],V=[{type:6,data:g},{type:6,data:y},{type:6,data:b}];Yi(t,V),V.push(...Ae(f,E,P));let Q=["rank","rank"],de=e.length>2;de&&(V.push(...Ae(e[2].dims)),Q.push("rank")),V.push(...Ae(C));let K=ue=>{let H=f.length,te=sc("batchDims",e[0].dataType,H,1),he=Gt(e[0].dataType),ce=ee("a",e[0].dataType,O,I),ge=ee("b",e[1].dataType,N,I),ae=Te("result",e[0].dataType,C.length,I),Ie=[ce,ge];if(de){let Pe=i?I:1;Ie.push(ee("bias",e[2].dataType,e[2].dims.length,Pe))}let ne=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Zi(t,ne);let xe=Gt(ae.type.tensor),$e=Xi(t,ae.type.value,xe),ie=Oh(I,de,$e,[te,ce,ge,ae],i);return`
  ${ue.registerUniforms(ne).registerInternalVariables(te).declareVariables(...Ie,ae)}
  ${ie}
  ${x?_d(T,S,he,te):xd(T,S,he,te)}
                   `};return{name:"MatMul",shaderCache:{hint:`${T};${t.activation};${x};${i}`,inputDependencies:Q},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:V}),getShaderSource:K}}}),zh,hv,h$=pe(()=>{"use strict";Be(),Dn(),Ge(),Ji(),dc(),p$(),pc(),zh=(e,t,r,n,i=!1,s,a=4,o=4,l=4,d="f32")=>{let f=V=>{switch(V){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${V} is not supported.`)}},p=V=>{switch(V){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${V} is not supported.`)}},g=e?`
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
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",x=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",T=e?"row":"col",S=e?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${T} / outWidth;
    let outCol = ${T} % outWidth;

    let WRow = ${S} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${S} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${S} % inChannels;
    var resData = ${Yt(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${x}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(a)}
    }
    return resData;`,I=e?t&&n?`
    let col = colIn * ${a};
    ${$}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${Yt(a,d)}(0.0);`:n&&r?`
    let col = colIn * ${a};
    ${$}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
    }
    return ${Yt(a,d)}(0.0);`,E=e?n&&r?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Yt(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Yt(o,d)}(0.0);`,O=Yt(l,d),P=Yt(e?a:o,d),N=Yt(e?o:a,d),C=Xi(s,O,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${P} {
      ${e?I:E}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${N} {
      ${e?E:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${O}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${b}
      ${fv(i)}
      ${C}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},hv=(e,t,r,n,i,s,a,o,l)=>{let d=t.format==="NHWC",f=d?e[0].dims[3]:e[0].dims[1],p=r[0],g=d?r[2]:r[3],b=d?r[1]:r[2],y=d?r[3]:r[1],x=d&&(f%4===0||f%3===0)&&y%4===0,T=d?y:g*b,S=d?g*b:y,$=[8,8,1],I=n<=8?[4,1,1]:[4,4,1],E=[Math.ceil(T/$[0]/I[0]),Math.ceil(S/$[1]/I[1]),Math.ceil(p/$[2]/I[2])];dt("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${E}`);let O=x?d&&f%4!==0?3:4:1,P=$[1]*I[1],N=$[0]*I[0],C=Math.max($[0]*O,$[1]),V=n%P===0,Q=i%N===0,de=s%C===0,K=x?[O,4,4]:[1,1,1],ue=[{type:6,data:n},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Yi(t,ue),ue.push(...Ae(e[0].dims,e[1].dims));let H=["rank","rank"];a&&(ue.push(...Ae(e[2].dims)),H.push("rank")),ue.push(...Ae(r));let te=he=>{let ce=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Zi(t,ce);let ge=x?4:1,ae=Gt(e[0].dataType),Ie=`
      fn setOutputAtIndex(flatIndex : i32, value : ${x?`vec4<${ae}>`:ae}) {
        result[flatIndex] = ${x?`vec4<${ae}>`:ae}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${x?`vec4<${ae}>`:ae}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${x?"/ 4":""}, value);
      }`,ne=ee("x",e[0].dataType,e[0].dims.length,O===3?1:O),xe=ee("w",e[1].dataType,e[1].dims.length,ge),$e=[ne,xe],ie=Te("result",e[0].dataType,r.length,ge);if(a){let Pe=ee("bias",e[2].dataType,e[2].dims.length,ge);$e.push(Pe),Ie+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${x?`vec4<${ae}>`:ae} {
          return bias[coords.${d?"w":"y"}${x?"/ 4":""}];
        }`}return`
        ${pv("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${he.registerUniforms(ce).declareVariables(...$e,ie)}
        ${Ie}
        ${zh(d,V,Q,de,a,t,K[0],K[1],K[2],ae)}
        ${x?_d(I,$,ae,void 0,!d,C):xd(I,$,ae,void 0,!d,C,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${O};${x};${V};${Q};${de};${P};${N};${C}`,inputDependencies:H},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:E[0],y:E[1],z:E[2]},programUniforms:ue}),getShaderSource:te}}}),Mh,wu,Us,Rh,_u,Bh,mv,gv,m$=pe(()=>{"use strict";Be(),Dn(),je(),Ge(),Ji(),dc(),Mh=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},wu=e=>typeof e=="number"?[e,e,e]:e,Us=(e,t)=>t<=1?e:e+(e-1)*(t-1),Rh=(e,t,r,n=1)=>{let i=Us(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},_u=(e,t,r,n,i)=>{i==null&&(i=Rh(e,t[0],n[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*i)/n[a]+1));return s},Bh=(e,t,r,n,i,s,a,o,l,d)=>{let f,p,g,b;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=_u([t,r,n,1],[o,l,d],1,[i,s,a],e);p=y[0],g=y[1],b=y[2]}else if(Array.isArray(e)){if(!e.every((x,T,S)=>x===S[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=_u([t,r,n,1],[o,l,d],1,[i,s,a],e[0]);p=y[0],g=y[1],b=y[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),g=Math.ceil(r/s),b=Math.ceil(n/a);let y=(p-1)*i+o-t,x=(g-1)*s+l-r,T=(b-1)*a+d-n,S=Math.floor(y/2),$=y-S,I=Math.floor(x/2),E=x-I,O=Math.floor(T/2),P=T-O;f={top:I,bottom:E,left:O,right:P,front:S,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:p,outHeight:g,outWidth:b}},mv=(e,t,r,n,i,s=!1,a="channelsLast")=>{let o,l,d,f,p;if(a==="channelsLast")[o,l,d,f,p]=e;else if(a==="channelsFirst")[o,p,l,d,f]=e;else throw new Error(`Unknown dataFormat ${a}`);let[g,,b,y,x]=t,[T,S,$]=wu(r),[I,E,O]=wu(n),P=Us(b,I),N=Us(y,E),C=Us(x,O),{padInfo:V,outDepth:Q,outHeight:de,outWidth:K}=Bh(i,l,d,f,T,S,$,P,N,C),ue=s?g*p:g,H=[0,0,0,0,0];return a==="channelsFirst"?H=[o,ue,Q,de,K]:a==="channelsLast"&&(H=[o,Q,de,K,ue]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:d,inWidth:f,inChannels:p,outDepth:Q,outHeight:de,outWidth:K,outChannels:ue,padInfo:V,strideDepth:T,strideHeight:S,strideWidth:$,filterDepth:b,filterHeight:y,filterWidth:x,effectiveFilterDepth:P,effectiveFilterHeight:N,effectiveFilterWidth:C,dilationDepth:I,dilationHeight:E,dilationWidth:O,inShape:e,outShape:H,filterShape:t}},gv=(e,t,r,n,i,s)=>{let a=s==="channelsLast",o=a?e[0].dims[3]:e[0].dims[1],l=!1,d=[64,1,1],f={x:r.map(($,I)=>I)},p=[Math.ceil(Mh(f.x.map($=>r[$]))/d[0]),1,1];dt("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let g=l?a&&o%4!==0?3:4:1,b=Y.size(r),y=[{type:12,data:b},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Yi(t,y),y.push(...Ae(e[0].dims,e[1].dims));let x=["rank","rank"],T=e.length===3;T&&(y.push(...Ae(e[2].dims)),x.push("rank")),y.push(...Ae(r));let S=$=>{let I=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Zi(t,I);let E=l?4:1,O=Gt(e[0].dataType),P=ee("x",e[0].dataType,e[0].dims.length,g===3?1:g),N=ee("W",e[1].dataType,e[1].dims.length,E),C=[P,N],V=Te("result",e[0].dataType,r.length,E),Q="";if(T){let ue=ee("bias",e[2].dataType,e[2].dims.length,E);C.push(ue),Q+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${O}>`:O} {
          return bias[${a?Ee("coords",4,5):Ee("coords",1,5)}${l?"/ 4":""}];
        }`}let de=Yt(g,O),K=Xi(t,de,O);return`
            ${Q}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${O} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${P.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${O} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${N.getByIndices("aIndices")};
            }
          ${$.registerUniforms(I).declareVariables(...C,V)}
          ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${V.offsetToIndices("global_idx")};
              let batch = ${Ee("coords",0,P.rank)};
              let d2 = ${a?Ee("coords",P.rank-1,P.rank):Ee("coords",1,P.rank)};
              let xFRCCorner = vec3<u32>(${a?Ee("coords",1,P.rank):Ee("coords",2,P.rank)},
              ${a?Ee("coords",2,P.rank):Ee("coords",3,P.rank)},
              ${a?Ee("coords",3,P.rank):Ee("coords",4,P.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?Ee("uniforms.x_shape",1,P.rank):Ee("uniforms.x_shape",2,P.rank)};
              let xShapeZ = ${a?Ee("uniforms.x_shape",2,P.rank):Ee("uniforms.x_shape",3,P.rank)};
              let xShapeW = ${a?Ee("uniforms.x_shape",3,P.rank):Ee("uniforms.x_shape",4,P.rank)};
              let xShapeU = ${a?Ee("uniforms.x_shape",4,P.rank):Ee("uniforms.x_shape",1,P.rank)};
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
              ${T?"value = value + getBiasByOutputCoords(coords)":""};
              ${K}
              result[global_idx] = ${O}(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${g};${T}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:y}),getShaderSource:S}}}),yv,bv,g$=pe(()=>{"use strict";Be(),je(),Ge(),Ji(),yv=(e,t,r,n)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],f=d/t.group,p=l&&f>=4?Mt(d):1,g=Y.size(r)/p,b=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];Yi(t,b),b.push(...Ae(a,[o[0],o[1],o[2],o[3]/p]));let y=i?["rank","rank","rank"]:["rank","rank"];b.push(...Ae([r[0],r[1],r[2],r[3]/p]));let x=T=>{let S=Te("output",e[0].dataType,r.length,p),$=Gt(S.type.tensor),I=Xi(t,S.type.value,$),E=ee("x",e[0].dataType,a.length),O=ee("w",e[1].dataType,o.length,p),P=[E,O];i&&P.push(ee("b",e[2].dataType,e[2].dims,p));let N=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Zi(t,N);let C=l?`
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
  ${T.registerUniforms(N).declareVariables(...P,S)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${S.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${S.type.value} = ${S.type.value}(0);
    ${C}
    ${s}
    ${I}
    ${S.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:x}},bv=(e,t,r,n)=>{let i=e.length>2,s=Mt(r[3]),a=Mt(r[2]),o=Y.size(r)/s/a,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],f=[r[0],r[1],r[2],r[3]/s],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Yi(t,p),p.push(...Ae(l,d,f));let g=(a-1)*t.strides[1]+d[1],b=y=>{let x=Te("output",e[0].dataType,f.length,s),T=Gt(x.type.tensor),S=Xi(t,x.type.value,T),$=ee("x",e[0].dataType,l.length,s),I=ee("w",e[1].dataType,d.length,s),E=[$,I];i&&E.push(ee("b",e[2].dataType,e[2].dims,s));let O=i?"value += b[output_channel];":"",P=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Zi(t,P),`
  ${y.registerUniforms(P).declareVariables(...E,x)}
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
          let w_val = ${I.get("w_height","w_width","0","output_channel")};
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${g};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:b}}}),Ph,yo,Dh,bo,$d,xu,Nh,Uh,Sd,y$=pe(()=>{"use strict";je(),h$(),m$(),pc(),g$(),Ji(),fc(),fi(),Ph=(e,t,r,n,i,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),l=o.length,d=t[0],f=t.slice(2).map((g,b)=>g+(g-1)*(r[b]-1)),p=o.map((g,b)=>g+n[b]+n[b+l]).map((g,b)=>Math.floor((g-f[b]+i[b])/i[b]));return p.splice(0,0,a),p.splice(s?3:1,0,d),p},yo=[2,3,1,0],Dh=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},bo=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let n=e.pads.slice();Ho.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},$d=e=>{let t=uc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},xu=(e,t,r,n)=>{let i=r.format==="NHWC",s=Ph(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let P=[t[0]];if(i){let N=e.kernelCustomData.wT??e.compute(Sr(t[1],yo),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=N),P.push(N)}else P.push(t[1]);t.length===3&&P.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(bv(P,r,s,n),{inputs:P}):e.compute(yv(P,r,s,n),{inputs:P});return}let a=t.length===3,o=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],f=t[1].dims[2],p=t[1].dims[3],g=s[i?1:2],b=s[i?2:3],y=s[i?3:1],x=i&&f===o&&p===l&&r.pads[0]===0&&r.pads[1]===0;if(x||f===1&&p===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let P=s[0],N,C,V,Q=[];if(i){let ue=e.kernelCustomData.wT??e.compute(Sr(t[1],yo),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ue),x){let H=o*l*d;N=t[0].reshape([1,P,H]),C=ue.reshape([1,H,y]),V=[1,P,y]}else N=t[0].reshape([P,o*l,d]),C=ue.reshape([1,d,y]),V=[P,g*b,y];Q.push(N),Q.push(C)}else N=t[0].reshape([P,d,o*l]),C=t[1].reshape([1,y,d]),V=[P,y,g*b],Q.push(C),Q.push(N);a&&Q.push(t[2]);let de=V[2],K=Q[0].dims[Q[0].dims.length-1];de<8&&K<8?e.compute(cc(Q,r,s,V,i,n),{inputs:Q}):e.compute(Go(Q,r,s,V,i,n),{inputs:Q});return}let T=!0,S=e.kernelCustomData.wT??e.compute(Sr(t[1],yo),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=S);let $=[t[0],S];a&&$.push(t[2]);let I=i?g*b:y,E=i?y:g*b,O=f*p*d;e.compute(hv($,r,s,I,E,O,a,T,n),{inputs:$})},Nh=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=bo({...t,pads:i,strides:s,dilations:a,kernelShape:o},n);xu(e,n,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Uh=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=bo(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=mv(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,n);e.compute(gv(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],n))},Sd=(e,t)=>{if(Dh(e.inputs,t),e.inputs[0].dims.length===3)Nh(e,t);else if(e.inputs[0].dims.length===5)Uh(e,e.inputs,t);else{let r=bo(t,e.inputs);xu(e,e.inputs,r)}}}),vv,b$=pe(()=>{"use strict";Be(),Dn(),je(),Ge(),vv=(e,t,r)=>{let n=e.length>2,i=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,l=o[2]/a,d=o[3],f=s?Mt(l):1,p=s&&d===1&&l>=4,g=p?Math.floor(l/4)*4:Math.floor(l/f)*f,b=l-g,y=s?Mt(d):1,x=s?d===1?f:y:1,T=Y.size(i)/y,S=[Math.ceil(T/64),1,1];dt("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${S}`);let $=["rank","rank"],I=[t.strides[0],t.strides[1]],E=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],O=[t.dilations[0],t.dilations[1]],P=[E[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),E[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],N=[P[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),P[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],C=[{type:12,data:T},{type:12,data:I},{type:12,data:E},{type:12,data:O},{type:12,data:P},{type:6,data:N},{type:12,data:g},{type:12,data:l},{type:12,data:d},...Ae(e[0].dims,e[1].dims)];n&&(C.push(...Ae(e[2].dims)),$.push("rank")),C.push(...Ae(i));let V=Q=>{let de=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:E.length},{name:"dilations",type:"u32",length:E.length},{name:"effective_filter_dims",type:"u32",length:P.length},{name:"pads",type:"i32",length:N.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],K=Gt(e[0].dataType),ue=s?1:2,H=s?2:3,te=s?3:1,he=ee("W",e[1].dataType,e[1].dims.length,x),ce=ee("Dy",e[0].dataType,e[0].dims.length,f),ge=[ce,he];n&&ge.push(ee("bias",e[2].dataType,[i[te]].length,y));let ae=Te("result",e[0].dataType,i.length,y),Ie=()=>{let $e="";if(p)f===4?$e+=`
        let xValue = ${ce.getByOffset("x_offset")};
        let wValue = ${he.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:f===2?$e+=`
          dotProd = dotProd + dot(vec4<${K}>(${ce.getByOffset("x_offset")}, ${ce.getByOffset("x_offset + 1u")}), vec4<${K}>(${he.getByOffset("w_offset")}, ${he.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:f===1&&($e+=`
          dotProd = dotProd + dot(vec4<${K}>(${ce.getByOffset("x_offset")}, ${ce.getByOffset("x_offset + 1u")}, ${ce.getByOffset("x_offset + 2u")}, ${ce.getByOffset("x_offset + 3u")}), vec4<${K}>(${he.getByOffset("w_offset")}, ${he.getByOffset("w_offset + 1u")}, ${he.getByOffset("w_offset + 2u")}, ${he.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if($e+=`
                  let xValue = ${s?ce.getByOffset(`${ce.indicesToOffset(`${ce.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):ce.get("batch","inputChannel","idyR","idyC")};
        `,f===1)$e+=`
          let w_offset = ${he.indicesToOffset(`${he.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${he.getByOffset(`w_offset / ${x}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ie=0;ie<f;ie++)$e+=`
            let wValue${ie} = ${he.getByOffset(`${he.indicesToOffset(`${he.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ie}, wOutChannel)`)} / ${x}`)};
            dotProd = dotProd + xValue[${ie}] * wValue${ie};`;return $e},ne=()=>{if(b===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let $e="";if(f===1){$e+="dotProd = dotProd";for(let ie=0;ie<b;ie++)$e+=`
            + ${ce.getByOffset(`x_offset + ${ie}`)} * ${he.getByOffset(`w_offset + ${ie}`)}`;$e+=";"}else if(f===2){if(b!==2)throw new Error(`Invalid inputChannelsRemainder ${b}.`);$e+=`
          let xValue = ${ce.getByOffset("x_offset")};
          let wValue = ${he.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return $e},xe=`
            let outputIndices = ${ae.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${ae.indicesGet("outputIndices",0)};
            let d1 = ${ae.indicesGet("outputIndices",te)};
            let r = ${ae.indicesGet("outputIndices",ue)};
            let c = ${ae.indicesGet("outputIndices",H)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${ae.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${K}(dyRCorner) + ${K}(wR)) / ${K}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${K}(uniforms.Dy_shape[${ue}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${K}(dyCCorner) + ${K}(wC)) / ${K}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${K}(uniforms.Dy_shape[${H}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${ce.indicesToOffset(`${ce.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f};
                var w_offset = ${he.indicesToOffset(`${he.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${x};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:f}) {
                  ${Ie()}
                  inputChannel = inputChannel + ${p?4:f};
                }
                ${ne()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${y}]`:""};
            ${ae.setByOffset("global_idx","value")};
          `;return`
    ${Q.registerUniforms(de).declareVariables(...ge,ae)}
      ${Q.mainStart()}
      ${Q.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${xe}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${x}${y}${p}${b}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:S[0],y:S[1],z:S[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:C}),getShaderSource:V}}}),Lh,Fh,jh,$u,wv,Wh,Su,Vh,_v,v$=pe(()=>{"use strict";b$(),Ji(),fi(),Lh=(e,t,r,n,i,s)=>(e-1)*t+r+(n-1)*i+1-s,Fh=(e,t,r,n,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=s,r[i]=e-s):t==="SAME_LOWER"&&(r[n]=e-s,r[i]=s)},jh=(e,t,r,n,i,s,a,o,l,d)=>{let f=e.length-2,p=d.length===0;l.length<f&&l.push(...Array(f-l.length).fill(0));let g=e[0],b=t[o?3:1]*i;for(let y=0,x=e.length-f-(o?1:0);y<f;++y,++x){let T=e[x],S=p?T*a[y]:d[y],$=Lh(T,a[y],s[y],t[x],r[y],S);Fh($,n,s,y,y+f),p&&d.push(a[y]*(T-1)+l[y]+(t[x]-1)*r[y]+1-s[y]-s[y+f])}d.splice(0,0,g),d.splice(o?3:1,0,b)},$u=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,g)=>p*g,1)===0){r.length=0;for(let p=2;p<t[1].dims.length;++p)r.push(t[1].dims[p])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((p,g)=>p+g,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}let d=e.strides.slice();if(d.reduce((p,g)=>p+g,0)===0){let p=t[0].dims.length-2;d=new Array(p).fill(1)}jh(o,r,l,e.autoPad,e.group,i,d,n,a,s);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:i,outputPadding:a,outputShape:s,dilations:l,strides:d}),f},wv=e=>{let t=uc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group??1,a=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),f=e.outputPadding,p=e.outputShape;return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,outputPadding:f,outputShape:p,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Wh=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Su=(e,t,r,n)=>{let i=e.kernelCustomData.wT??e.compute(Sr(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(vv(s,r,n),{inputs:s})},Vh=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let d=$u({...t,pads:o,strides:a,dilations:s,kernelShape:i,outputPadding:l},n);Su(e,n,d,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},_v=(e,t)=>{if(Wh(e.inputs,t),e.inputs[0].dims.length===3)Vh(e,t);else{let r=$u(t,e.inputs);Su(e,e.inputs,r)}}}),Hh,xv,$v,w$=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),Hh=(e,t,r,n)=>{let i=Y.size(t),s=t.length,a=ee("input",e,s),o=Te("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=Y.normalizeAxis(l,s),f=p=>{let g=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,b=Ee("uniforms.input_shape","uniforms.axis",s),y=n.reverse?g+(n.exclusive?" + 1":""):"0",x=n.reverse?b:g+(n.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...Ae(t,t)]}),getShaderSource:f}},xv=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(Hh(n,r,i,t),{inputs:[0]})},$v=e=>{let t=e.exclusive===1,r=e.reverse===1;return ht({exclusive:t,reverse:r})}}),qh,Gh,Kh,Sv,kv,_$=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),qh=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Gh=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)i.push(r.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},Kh=(e,t)=>{let r,n,i,s,a,o,l=t.format==="NHWC",d=t.blocksize,f=t.mode==="DCR";l?([r,n,i,s]=e.dims,a=f?[r,n,i,d,d,s/d**2]:[r,n,i,s/d**2,d,d],o=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=f?[r,d,d,s/d**2,n,i]:[r,s/d**2,d,d,n,i],o=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(a),g=p.dims.length,b=e.dataType,y=ee("a",b,g),x=Te("output",b,g),T=S=>`
  ${S.registerUniform("output_size","u32").declareVariables(y,x)}

  ${Gh(o,g,y,x)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:S=>{let $=l?[r,n*d,i*d,s/d**2]:[r,s/d**2,n*d,i*d],I=Y.size($),E=p.dims,O=Y.sortBasedOnPerm(E,o);return{outputs:[{dims:$,dataType:S[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...Ae(E,O)]}},getShaderSource:T}},Sv=(e,t)=>{qh(e.inputs),e.compute(Kh(e.inputs[0],t))},kv=e=>ht({blocksize:e.blocksize,mode:e.mode,format:e.format})}),kn,Ls,vo,ku,Qn,Xh,Yh,Zh,Tu,Cu,Eu,Qh,Jh,Iu,em,Tv,Cv,x$=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),kn=256,Ls=512,vo=2*Math.PI,ku=e=>{let t=[],r=e;for(let n of[4,2,3,5])for(;r%n===0;)t.push(n),r/=n;return r===1?t:void 0},Qn=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},Xh=(e,t,r,n,i)=>{let s=r/e,a=Ls-n,o=d=>`smem[${a}u + base + ${d*t}u]`,l=`  for (var t = local_idx; t < ${s}u; t += ${kn}u) {
`;l+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,l+=`    var leg: array<vec2<f32>, 5>;
`;for(let d=0;d<e;d++){let f=`${n}u + t + ${d*s}u`;if(d===0)l+=`    leg[0] = smem[${f}];
`;else{let p=i*vo*d/(e*t);l+=`    { let a = ${Qn(p)} * angleUnit; leg[${d}] = cmul(smem[${f}], vec2<f32>(cos(a), sin(a))); }
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
`}else for(let d=0;d<e;d++){let f=["leg[0]"];for(let p=1;p<e;p++){let g=i*vo*(p*d)/e,b=Qn(Math.cos(g)),y=Qn(Math.sin(g));f.push(`vec2<f32>(leg[${p}].x*${b} - leg[${p}].y*${y}, leg[${p}].x*${y} + leg[${p}].y*${b})`)}l+=`    ${o(d)} = ${f.join(" + ")};
`}return`${l}  }
  workgroupBarrier();
`},Yh=(e,t,r)=>{let n="",i=1,s=0;for(let a of e)n+=Xh(a,i,t,s,r),i*=a,s=Ls-s;return{code:n,resultOffset:s}},Zh=(e,t,r,n,i)=>{let s=e.dims,a=s.length,o=s[a-1],l=s[t],d=r&&n?(l-1)*2:l;i!==void 0&&(d=i);let f=r&&n?1:2,p=n&&!r?Math.floor(d/2)+1:d,g=s.slice();g[t]=p,g[a-1]=f;let b=1;for(let x=t+1;x<a-1;x++)b*=s[x];let y=Y.size(s)/o/l;return{dataType:e.dataType,outputDims:g,length:d,signalLength:l,inner:b,batch:y,inputComponents:o,outputComponents:f,outputLength:p,inverse:r,onesided:n}},Tu=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),Cu=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],Eu=(e,t,r)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,r),Qh=e=>{let{dataType:t,length:r,inputComponents:n,outputComponents:i,inverse:s,onesided:a}=e,o=qt(t),l=s?1:-1,d=s?1/r:1,f=ku(r),p=g=>{let b=ee("x",t,[1]),y=Te("y",t,[1]),x=O=>{let P=`inBase + (${O}) * uniforms.inner * ${n}u`,N=`f32(${b.getByOffset(P)})`,C=n===2?`f32(${b.getByOffset(`${P} + 1u`)})`:"0.0";return`vec2<f32>(${N}, ${C})`},T;if(s&&a){let O=Math.floor(r/2)+1,P=r%2===0?`select(provided, provided - 1u, provided == ${O}u)`:"provided";T=`
    let provided = min(uniforms.signalLength, ${O}u);
    for (var i = local_idx; i < ${r}u; i += ${kn}u) {
      if (i < provided) { smem[i] = ${x("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${P}; k += ${kn}u) {
      let h = smem[k];
      smem[${r}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else T=`
    let loadCount = min(uniforms.signalLength, ${r}u);
    for (var i = local_idx; i < ${r}u; i += ${kn}u) {
      if (i < loadCount) { smem[i] = ${x("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:S,resultOffset:$}=Yh(f,r,l),I=d===1?`smem[${$}u + i]`:`smem[${$}u + i] * ${Qn(d)}`,E=i===2?y.setByOffset("off + 1u",`${o}(v.y)`):"";return`
  ${Eu(g,b,y)}
  var<workgroup> smem: array<vec2<f32>, ${2*Ls}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${g.mainStart(kn)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${n}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${i}u;
    ${T}
${S}    for (var i = local_idx; i < uniforms.outputLength; i += ${kn}u) {
      let v = ${I};
      let off = outBase + i * uniforms.inner * ${i}u;
      ${y.setByOffset("off",`${o}(v.x)`)}
      ${E}
    }
  }`};return{name:"DFT",shaderCache:{hint:Tu(e,"fft"),inputDependencies:["type"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Cu(e),dispatchGroup:{x:e.batch}})}},Jh=e=>{let{dataType:t,length:r,inputComponents:n,outputComponents:i,inverse:s,onesided:a}=e,o=qt(t),l=s?1:-1,d=s?1/r:1,f=p=>{let g=ee("x",t,[1]),b=Te("y",t,[1]),y=I=>{let E=`inBase + (${I}) * uniforms.inner * ${n}u`,O=`f32(${g.getByOffset(E)})`,P=n===2?`f32(${g.getByOffset(`${E} + 1u`)})`:"0.0";return`vec2<f32>(${O}, ${P})`},x=s&&a?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
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
  }`,T=`
      let angle = ${Qn(l*vo)} * f32(knMod) / ${Qn(r)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${r}u) { knMod -= ${r}u; }`,S=i===2?b.setByOffset("off + 1u",`${o}(v.y)`):"",$=d===1?"acc":`acc * ${Qn(d)}`;return`
  ${Eu(p,g,b)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${x}
  ${p.mainStart(kn)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${n}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${i}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${kn}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${r}u; n++) {${T}
      }
      let v = ${$};
      let off = outBase + k * uniforms.inner * ${i}u;
      ${b.setByOffset("off",`${o}(v.x)`)}
      ${S}
    }
  }`};return{name:"DFT",shaderCache:{hint:Tu(e,"direct"),inputDependencies:["type"]},getShaderSource:f,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Cu(e),dispatchGroup:{x:e.batch}})}},Iu=e=>{if(!e||e.dataType===0)return;if(Y.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},em=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let r=t[t.length-1];if(r!==1&&r!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},Tv=(e,t)=>{em(e.inputs);let r=e.inputs[0],n=r.dims.length,i=t.inverse!==0,s=t.onesided!==0,a=Iu(e.inputs[1]);if(a!==void 0&&a<=0)throw new Error("dft_length must be greater than zero.");let o=Y.normalizeAxis(Iu(e.inputs[2])??t.axis,n);if(o===n-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(i&&s&&r.dims[n-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let l=Zh(r,o,i,s,a);if(l.length<=0)throw new Error(`Invalid DFT length: ${l.length}`);let d=l.length<=Ls&&ku(l.length)!==void 0?Qh(l):Jh(l);e.compute(d,{inputs:[0]})},Cv=e=>ht({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),wo,Fs,Au,tm,rm,nm,im,Ou,sm,Ev,Iv,$$=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),wo="[a-zA-Z]|\\.\\.\\.",Fs="("+wo+")+",Au="^"+Fs+"$",tm="("+Fs+",)*"+Fs,rm="^"+tm+"$",nm=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},im=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(rm)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,s)=>{let a=e[s].dims.slice();if(!i.match(RegExp(Au)))throw new Error("Invalid LHS term");let o=this.processTerm(i,!0,a,s);this.lhs.push(o)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([i,s])=>s.count===1||i==="...").map(([i])=>i).join("");else if(!n.match(RegExp(Fs)))throw new Error("Invalid RHS");n.match(RegExp(wo,"g"))?.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(i);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,s=!1,a=[],o=0;if(!e.match(RegExp(Au))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(wo,"g")),d=new nm(n);return l?.forEach((f,p)=>{if(f==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let g=i-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(o,o+g),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let b=0;b<a.length;b++){let y=String.fromCharCode(48+b);d.addSymbol(y,p+b),this.addSymbol(y,r[o++],n)}}else d.addSymbol(f,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[o++],n)}),d}},Ou=e=>e+"_max",sm=(e,t,r,n)=>{let i=e.map(d=>d.length).map((d,f)=>ee(`input${f}`,t,d)),s=Y.size(n),a=Te("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let f=[],p="var prod = 1.0;",g="var sum = 0.0;",b="sum += prod;",y=[],x=[],T=[],S=[],$=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((E,O)=>{if(r.rhs.symbolToIndices.has(O)){let P=r.rhs.symbolToIndices.get(O)?.[0];P!==void 0&&r.lhs.forEach((N,C)=>{if(E.inputIndices.includes(C)){let V=N.symbolToIndices.get(O);if(V===void 0)throw new Error("Invalid symbol error");V.forEach(Q=>{f.push(`${i[C].indicesSet(`input${C}Indices`,Q,a.indicesGet("outputIndices",P))}`)})}})}else r.lhs.forEach((P,N)=>{if(E.inputIndices.includes(N)){let C=P.symbolToIndices.get(O);if(C===void 0)throw new Error("Invalid symbol error");C.forEach(V=>{y.push(`${i[N].indicesSet(`input${N}Indices`,V,`${O}`)}`)}),S.push(`prod *= ${i[N].getByIndices(`input${N}Indices`)};`)}}),x.push(`for(var ${O}: u32 = 0; ${O} < uniforms.${Ou(O)}; ${O}++) {`),T.push("}")});let I=$?[...f,`let sum = ${i.map((E,O)=>E.getByIndices(`input${O}Indices`)).join(" * ")};`]:[...f,g,...x,...y,p,...S,b,...T];return`
            ${d.registerUniforms(o.map(E=>({name:`${Ou(E)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((E,O)=>`var input${O}Indices: ${i[O].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(p=>r.symbolToInfo.has(p)).map(p=>({type:12,data:r.symbolToInfo.get(p)?.dimValue||0}));d.push({type:12,data:s});let f=e.map((p,g)=>[...Ae(p)]).reduce((p,g)=>p.concat(g),d);return f.push(...Ae(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f}},getShaderSource:l}},Ev=(e,t)=>{let r=new im(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((s,a)=>s.dims);e.compute(sm(i,e.inputs[0].dataType,r,n))},Iv=e=>{let t=e.equation.replace(/\s+/g,"");return ht({equation:t})}}),am,zu,om,lm,Av,S$=pe(()=>{"use strict";Be(),je(),Ge(),am=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},zu=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},om=(e,t)=>e.length>t.length?zu(e,t):zu(t,e),lm=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=om(t,r),i=e[0].dataType,s=i===9||Y.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||n.length>0&&n[n.length-1]%4===0?4:1,l=Math.ceil(Y.size(n)/o),d=p=>{let g=ee("input",i,t.length,a),b=Te("output",i,n.length,o),y;if(i===9){let x=(T,S,$="")=>`
          let outputIndices${S} = ${b.offsetToIndices(`outputOffset + ${S}u`)};
          let offset${S} = ${g.broadcastedIndicesToOffset(`outputIndices${S}`,b)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${T}[${S}] = ${$}(${g.getByOffset(`index${S}`)}[component${S}]);
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
    ${y}`},f=[{type:12,data:l},...Ae(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f})}},Av=e=>{am(e.inputs),e.compute(lm(e.inputs),{inputs:[0]})}}),um,Ov,k$=pe(()=>{"use strict";Be(),je(),Ge(),lc(),um=e=>{let t=e[0].dataType,r=Y.size(e[0].dims),n=Y.size(e[1].dims),i=n%4===0,s=a=>{let o=ee("x",t,[1],4),l=ee("bias",t,[1],4),d=Te("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=b=>`
      let bias${b}_offset: u32 = (global_idx * 4 + ${b}) % uniforms.bias_size;
      let bias${b} = ${l.getByOffset(`bias${b}_offset / 4`)}[bias${b}_offset % 4];`,g=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(f).declareVariables(o,l,d)}

    ${vd(qt(t))}

    ${a.mainStart(ws)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",wd("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/ws/4)}})}},Ov=e=>{e.inputs.length<2||Y.size(e.inputs[1].dims)===0?Xb(e):e.compute(um(e.inputs))}}),dm,cm,zv,Mv,T$=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),dm=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},cm=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=Y.normalizeAxis(t.axis,i),a=r.slice(0);a.splice(s,1,...n);let o=r[s],l=e[0].dataType===9?4:1,d=Math.ceil(Y.size(a)/l),f=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...Ae(e[0].dims,e[1].dims,a)],p=g=>{let b=ee("data",e[0].dataType,e[0].dims.length,l),y=ee("inputIndices",e[1].dataType,e[1].dims.length),x=Te("output",e[0].dataType,a.length,l),T=$=>{let I=n.length,E=`var indicesIndices${$}  = ${y.type.indices}(0);`;for(let O=0;O<I;O++)E+=`${I>1?`indicesIndices${$}[${O}]`:`indicesIndices${$}`} = ${a.length>1?`outputIndices${$}[uniforms.axis + ${O}]`:`outputIndices${$}`};`;E+=`
          var idx${$} = ${y.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${b.type.indices};
        `;for(let O=0,P=0;O<i;O++)O===s?(E+=`${i>1?`dataIndices${$}[${O}]`:`dataIndices${$}`} = u32(idx${$});`,P+=I):(E+=`${i>1?`dataIndices${$}[${O}]`:`dataIndices${$}`} = ${a.length>1?`outputIndices${$}[${P}]`:`outputIndices${$}`};`,P++);return E},S;if(e[0].dataType===9){let $=(I,E,O="")=>`
          let outputIndices${E} = ${x.offsetToIndices(`outputOffset + ${E}u`)};
          ${T(E)};
          let offset${E} = ${b.indicesToOffset(`dataIndices${E}`)};
          let index${E} = offset${E} / 4u;
          let component${E} = offset${E} % 4u;
          ${I}[${E}] = ${O}(${b.getByOffset(`index${E}`)}[component${E}]);
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
      ${T("")};
      let value = ${b.getByIndices("dataIndices")};
      ${x.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(b,y,x)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${S}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:p}},zv=e=>ht({axis:e.axis}),Mv=(e,t)=>{let r=e.inputs;dm(r),e.compute(cm(e.inputs,t))}}),fm,Rv,Bv,C$=pe(()=>{"use strict";Be(),je(),Ge(),fm=(e,t,r,n,i,s,a,o,l)=>{let d=[{type:12,data:s},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:12,data:o},{type:12,data:l}],f=[s];d.push(...Ae(t.dims,f));let p=g=>{let b=ee("indices_data",t.dataType,t.dims.length),y=Te("input_slice_offsets_data",12,1,1),x=[b,y],T=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(T).declareVariables(...x)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},Rv=(e,t)=>{let r=e.inputs,n=r[0].dims,i=r[0].dataType,s=r[1].dims,a=s[s.length-1],o=Y.sizeToDimension(s,s.length-1),l=Y.sizeFromDimension(n,t.batchDims+a),d=Y.sizeToDimension(n,t.batchDims),f=Y.sizeFromDimension(n,t.batchDims),p=o/d,g=new Array(a),b=l;for(let E=0;E<a;++E)g[a-1-E]=b,b*=n[t.batchDims+a-1-E];let y=fm(e,r[1],g,t.batchDims,n,o,p,f,a),x=t.batchDims+a;if(x>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let T=s.slice(0,-1).concat(n.slice(x)),S=Y.size(T),$=[{type:12,data:S},{type:12,data:l},...Ae(r[0].dims,y.dims,T)],I=E=>{let O=ee("data",r[0].dataType,r[0].dims.length),P=ee("slice_offsets",12,y.dims.length),N=Te("output",r[0].dataType,T.length);return`
          ${E.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(O,P,N)}
            ${E.mainStart()}
            ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:T,dataType:i}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:$}),getShaderSource:I},{inputs:[r[0],y]})},Bv=e=>({batchDims:e.batch_dims,cacheKey:""})}),pm,hm,Pv,Dv,E$=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),pm=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=Y.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,l)=>l===r?Math.ceil(o/n)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},hm=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=Y.normalizeAxis(t.gatherAxis,i),a=Y.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(s,1,...n);let l=Y.size(o),d=e[2].dataType,f=e[0].dataType===22,p=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...Ae(...e.map((b,y)=>b.dims),o)],g=b=>{let y=ee("data",e[0].dataType,e[0].dims.length),x=ee("inputIndices",e[1].dataType,e[1].dims.length),T=ee("scales",e[2].dataType,e[2].dims.length),S=e.length>3?ee("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=Te("output",d,o.length),I=[y,x,T];S&&I.push(S);let E=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${b.registerUniforms(E).declareVariables(...I,$)}
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
        let quantize_axis_index = ${T.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${T.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${T.getByIndices("scale_indices")};
        ${S?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${S.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${S.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${qt(d)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((b,y)=>y!==1).map(b=>b.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(b,y)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:g}},Pv=(e,t)=>{let r=e.inputs;pm(r,t),e.compute(hm(e.inputs,t))},Dv=e=>ht({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),mm,gm,Nv,Uv,I$=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),mm=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},gm=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,s=e[1].dims,a=e[1].dataType,o=Y.normalizeAxis(t.axis,i),l=r[o],d=s.slice(0),f=Y.size(d),p=ee("input",n,i),g=ee("indicesInput",a,s.length),b=Te("output",n,d.length),y=[{type:12,data:f},{type:6,data:l},{type:12,data:o}];return y.push(...Ae(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y}),getShaderSource:x=>`
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
  }`}},Nv=e=>ht({axis:e.axis}),Uv=(e,t)=>{let r=e.inputs;mm(r),e.compute(gm(e.inputs,t))}}),ym,bm,Lv,Fv,A$=pe(()=>{"use strict";Be(),je(),Ge(),ym=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},bm=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,s,a]=By.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(s/l),f=Math.ceil(i/l),p=!0,g=Y.size(o),b=[{type:12,data:p?d:g},{type:12,data:i},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(b.push(...Ae(e[2].dims)),y.push("rank")),b.push(...Ae(o));let x=S=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",E=ee("a",e[0].dataType,e[0].dims),O=ee("b",e[1].dataType,e[1].dims),P=E.type.value,N=null,C=[E,O];e.length===3&&(N=ee("c",e[2].dataType,e[2].dims.length),C.push(N));let V=Te("output",e[0].dataType,o.length);C.push(V);let Q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${S.registerUniforms(Q).declareVariables(...C)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${P}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${I}
    ${N!=null?`let cOffset = ${N.broadcastedIndicesToOffset("vec2(m, n)",V)}; value += ${P}(uniforms.beta) * ${N.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},T=S=>{let $=ee("a",e[0].dataType,e[0].dims),I=ee("b",e[1].dataType,e[1].dims),E=null,O=[$,I];e.length===3&&(E=ee("c",e[2].dataType,e[2].dims.length),O.push(E));let P=Te("output",e[0].dataType,o.length);O.push(P);let N=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],C="",V="";t.transA&&t.transB?(V=`
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,C="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(V=`
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,C="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(V=`
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,C="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(V=`
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,C="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let Q=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${S.registerUniforms(N).declareVariables(...O)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${l}>, ${l}>;
  ${S.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${P.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${V}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${C}
      }
      workgroupBarrier();
    }

    ${Q}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${E!=null?`let cOffset = ${E.broadcastedIndicesToOffset("vec2(m, n)",P)}; value += ${P.type.value}(uniforms.beta) * ${E.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*f},programUniforms:b}),getShaderSource:T}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:x}},Lv=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Fv=(e,t)=>{ym(e.inputs),e.compute(bm(e.inputs,t))}}),rn,Tn,Mi,Ri,vm,wm,_m,xm,$m,Sm,km,Tm,jv,Wv,O$=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),[rn,Tn,Mi,Ri]=[0,1,2,3],vm=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},wm=`
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
`,_m=e=>`
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
`,xm=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,$m=e=>`
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
`,Sm=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${rn}] = batch;
     indices[${Tn}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Mi}] = u32(r);
            indices[${Ri}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Mi}] = u32(clamp(r, 0, H - 1));
          indices[${Ri}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Mi}] = gs_reflect(r, border[1], border[3]);
          indices[${Ri}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,km=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${rn}], indices[${Tn}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${rn}], indices[${Tn}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${rn}], indices[${Tn}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${rn}], indices[${Tn}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${rn}], indices[${Tn}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${rn}], indices[${Tn}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Tm=(e,t)=>{let r=ee("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=ee("grid",e[1].dataType,n.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[rn,Tn,Mi,Ri]=[0,3,1,2]);let a=Te("output",e[0].dataType,s.length),o=r.type.value,l=Y.size(s),d=[{type:12,data:l},...Ae(e[0].dims,n,s)],f=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(r,i,a)}
  ${wm}
  ${_m(o)}
  ${xm(t)}
  ${$m(t)}
  ${Sm(r,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Mi}]);
      let W_in = i32(uniforms.x_shape[${Ri}]);

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
      var grid_indices = vec3<u32>(indices[${rn}], indices[${Mi}], indices[${Ri}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${km(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let g=Y.size(s);return{outputs:[{dims:s,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:f}},jv=(e,t)=>{vm(e.inputs),e.compute(Tm(e.inputs,t))},Wv=e=>ht({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),cr,Cm,Vv,Mu,Em,Ys,Hv,qv=pe(()=>{"use strict";Be(),je(),Rt(),ic(),oc(),Ge(),fi(),cr=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Cm=(e,t)=>{let r=e[0],n=cr(e,1),i=cr(e,2),s=cr(e,3),a=cr(e,4),o=cr(e,5),l=cr(e,6),d=cr(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],p=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],b=p,y=0,x=0,T=Math.floor(g/t.numHeads);if(l&&d&&Y.size(l.dims)&&Y.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==f||l.dims[1]!==t.numHeads||l.dims[3]!==T)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==T)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],x=l.dims[2]}else if(l&&Y.size(l.dims)||d&&Y.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S;if(n&&Y.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');S=2,b=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==T)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');S=5,b=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==T)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');S=0,b=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}if(s&&Y.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=y+b,I=0;if(a&&Y.size(a.dims)>0){I=8;let N=a.dims;throw N.length===1?N[0]===f?I=1:N[0]===3*f+2&&(I=3):N.length===2&&N[0]===f&&N[1]===$&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let E=!1,O=g;if(i&&Y.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(b!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');O=i.dims[2]}else{if(b!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');O=i.dims[1]*i.dims[3],E=!0}}let P=!1;if(a&&Y.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&Y.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==f||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:b,totalSequenceLength:$,maxSequenceLength:x,inputHiddenSize:0,hiddenSize:g,vHiddenSize:O,headSize:T,vHeadSize:Math.floor(O/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:P,passPastInKv:E,qkvFormat:S}},Vv=e=>ht({...e}),Mu=ht({perm:[0,2,1,3]}),Em=(e,t,r,n,i,s,a)=>{let o=[n,i,s],l=Y.size(o),d=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],f=p=>{let g=Te("qkv_with_bias",t.dataType,o),b=ee("qkv",t.dataType,o),y=ee("bias",r.dataType,o),x=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(x).declareVariables(b,y,g)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},Ys=(e,t,r,n,i,s,a,o)=>{let l=s;if(a&&Y.size(a.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Em(e,s,a,t,n,r*i,o),l=l.reshape([t,n,r,i]),r===1||n===1?l:e.compute(Sr(l,Mu.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,n,r,i])),r===1||n===1?l:e.compute(Sr(l,Mu.perm),{inputs:[l],outputs:[-1]})[0]},Hv=(e,t)=>{let r=Cm(e.inputs,t),n=e.inputs[0],i=cr(e.inputs,1),s=cr(e.inputs,2),a=cr(e.inputs,3),o=cr(e.inputs,4),l=cr(e.inputs,5),d=cr(e.inputs,6),f=cr(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");let p=i&&s&&i.dims.length===4&&s.dims.length===4,g=Ys(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,a,0);if(p)return ya(e,g,i,s,o,void 0,d,f,l,r);if(!i||!s)throw new Error("key and value must be provided");let b=Ys(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,a,r.hiddenSize),y=Ys(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);ya(e,g,b,y,o,void 0,d,f,l,r)}}),Im,Am,Om,zm,kd,Gv,Kv,Xv=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),Im=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Am=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),ht({numOutputs:n,axis:t.axis,splitSizes:r})},Om=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Ee("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,zm=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},kd=(e,t)=>{let r=e[0].dims,n=Y.size(r),i=e[0].dataType,s=Y.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),o=ee("input",i,r.length),l=new Array(t.numOutputs),d=[],f=[],p=0,g=[{type:12,data:n}];for(let y=0;y<t.numOutputs;y++){p+=t.splitSizes[y],l[y]=p;let x=r.slice();x[s]=t.splitSizes[y],f.push(x),a[y]=Te(`output${y}`,i,x.length),d.push({dims:f[y],dataType:e[0].dataType})}g.push({type:12,data:l},...Ae(r,...f));let b=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${Om(l.length)}
  ${zm(a)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Ee("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:g})}},Gv=(e,t)=>{Im(e.inputs);let r=e.inputs.length===1?t:Am(e.inputs,t);e.compute(kd(e.inputs,r),{inputs:[0]})},Kv=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return ht({axis:t,numOutputs:n,splitSizes:r})}}),Mm,Ko,Yv,Zv=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),Mm=(e,t)=>{let[r,n,i,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!Y.areEqual(n.dims,[])&&!Y.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!Y.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],f=i.dims[0],p=Y.sizeFromDimension(r.dims,1)/d,g=o===0?i.dims[1]*2:p/a;if(o>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(l!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(d>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Ko=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:s}=t,a=e[0].dims[0],o=Y.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,f=e[2].dims[1],p=i===0?f*2:d/n,g=new Array(a,l,d/p,p-f),b=Y.computeStrides(g),y=[{type:1,data:s},{type:12,data:g},{type:12,data:b},...e[0].dims.length===3?new Array({type:12,data:[o,d,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,l*p,1]}):[],...Ae(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],x=T=>{let S=ee("input",e[0].dataType,e[0].dims.length),$=ee("position_ids",e[1].dataType,e[1].dims.length),I=ee("cos_cache",e[2].dataType,e[2].dims.length),E=ee("sin_cache",e[3].dataType,e[3].dims.length),O=Te("output",e[0].dataType,e[0].dims.length);return T.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:b.length},{name:"input_output_strides",type:"u32",length:b.length}]),`
        ${T.declareVariables(S,$,I,E,O)}

        ${T.mainStart(ws)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",Te("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${S.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} -
                ${S.getByOffset("j")} * ${E.get("position_id","bsnh[3]")};
            ${O.setByOffset("i","re")}
            let im = ${S.getByOffset("i")} * ${E.get("position_id","bsnh[3]")} +
                ${S.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${O.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${O.setByOffset("k",S.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ht({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(Y.size(g)/ws)},programUniforms:y})}},Yv=(e,t)=>{Mm(e.inputs,t),e.compute(Ko(e.inputs,t))}}),Rm,Bm,Ru,Pm,Qv,z$=pe(()=>{"use strict";Rt(),Be(),oc(),qv(),Xv(),fi(),Zv(),Ge(),Rm=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],f=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],p=d,g=0,b=!n||n.dims.length===0,y=Math.floor(b?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);b&&(f=y*t.numHeads);let x=s&&s.dims.length!==0,T=a&&a.dims.length!==0;if(x&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(x&&T){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=s.dims[2]}else if(x||T)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}let $=0,I=!1,E=t.kvNumHeads?y*t.kvNumHeads:f;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],I=!0}}let O=e.length>4?e[5]:void 0;if(O){if(O.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let P=O.dims.reduce((N,C)=>N*C,1);if(P!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${P}.`);for(let N=0;N<O.dims.length;N++)if(O.dims[N]!==1&&O.dims[N]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${N}] = ${O.dims[N]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:E,headSize:y,vHeadSize:Math.floor(E/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:S}},Bm=ht({perm:[0,2,1,3]}),Ru=(e,t,r)=>{let n=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute(Sr(n,Bm.perm),{inputs:[n],outputs:[-1]})[0]),n},Pm=(e,t,r,n)=>{let i=7,s=["type","type"],a=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=f=>{let p=ee("seq_lens",r.dataType,r.dims),g=ee("total_seq_lens",n.dataType,n.dims),b=Te("pos_ids",i,a),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},Qv=(e,t)=>{if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let r=Rm(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=ht({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[g,b,y]=!i&&!s?e.compute(kd([n],p),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,s],x,T;if(t.doRotary){let E=e.compute(Pm(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],O=e.inputs[7],P=e.inputs[8],N=ht({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),C=[g,E,O,P],V=[-1];x=e.compute(Ko(C,N),{inputs:C,outputs:V})[0],C.splice(0,1,b);let Q=ht({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});T=e.compute(Ko(C,Q),{inputs:C,outputs:V})[0]}let S=Ys(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?x:g,void 0,0),$=Ru(e,t.doRotary?T:b,r),I=Ru(e,y,r);ya(e,S,$,I,void 0,void 0,a,o,void 0,r,l,d)}}),Bu,Dm,Nm,Jv,M$=pe(()=>{"use strict";Be(),je(),fi(),Ge(),Bu=(e,t,r,n,i,s,a,o)=>{let l=Mt(s),d=l===1?"f32":`vec${l}f`,f=l===1?"vec2f":`mat2x${l}f`,p=i*a,g=64;p===1&&(g=256);let b=[i,a,s/l],y=[i,a,2],x=["rank","type","type"],T=[];T.push(...Ae(b,y));let S=$=>{let I=ee("x",t.dataType,3,l),E=ee("scale",r.dataType,r.dims),O=ee("bias",n.dataType,n.dims),P=Te("output",1,3,2),N=[I,E,O,P];return`
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
      let value = ${d}(${I.get("batch","channel","h")});
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
      let sum_final = ${di("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${di("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${g}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:p},programUniforms:T}),getShaderSource:S},{inputs:[t,r,n],outputs:[-1]})[0]},Dm=(e,t,r)=>{let n=t[0].dims,i=n,s=2,a=n[0],o=n[1],l=Y.sizeFromDimension(n,s),d=Mt(l),f=Y.size(i)/d,p=Bu(e,t[0],t[1],t[2],a,l,o,r.epsilon),g=[a,o,l/d],b=[a,o],y=["type","none"],x=T=>{let S=ee("x",t[0].dataType,g.length,d),$=ee("scale_shift",1,b.length,2),I=Te("output",t[0].dataType,g.length,d),E=[S,$,I];return`
  ${T.registerUniform("output_size","u32").declareVariables(...E)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${S.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...Ae(g,b,g)]}),getShaderSource:x},{inputs:[t[0],p]})},Nm=(e,t,r)=>{let n=t[0].dims,i=n,s=n[0],a=n[n.length-1],o=Y.sizeFromDimension(n,1)/a,l=Mt(a),d=Y.size(i)/l,f=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],p=["type","type"],g=!1,b=[0,n.length-1];for(let S=0;S<n.length-2;S++)g=g||n[S+1]!==1,b.push(S+1);g=g&&n[n.length-1]!==1;let y=g?e.compute(Sr(e.inputs[0],b),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(S,$)=>n[b[$]])),x=Bu(e,y,t[1],t[2],s,o,a,r.epsilon),T=S=>{let $=Gt(t[0].dataType),I=l===1?"vec2f":`mat${l}x2f`,E=N=>{let C=N===0?"x":"y",V=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${$}(${V}(scale.${C}))`;case 2:return`vec2<${$}>(${V}(scale[0].${C}, scale[1].${C}))`;case 4:return`vec4<${$}>(${V}(scale[0].${C}, scale[1].${C}, scale[2].${C}, scale[3].${C}))`;default:throw new Error(`Not supported compoents ${l}`)}},O=ee("input",t[0].dataType,t[0].dims,l),P=Te("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${O.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${I}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${P.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${S.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${E(0)}, ${E(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:T},{inputs:[t[0],x]})},Jv=(e,t)=>{t.format==="NHWC"?Nm(e,e.inputs,t):Dm(e,e.inputs,t)}}),Um,Lm,e1,R$=pe(()=>{"use strict";Be(),je(),Ge(),Um=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Lm=(e,t,r)=>{let n=t.simplified,i=e[0].dims,s=e[1],a=!n&&e[2],o=i,l=Y.normalizeAxis(t.axis,i.length),d=Y.sizeToDimension(i,l),f=Y.sizeFromDimension(i,l),p=Y.size(s.dims),g=a?Y.size(a.dims):0;if(p!==f||a&&g!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${g}`);let b=[];for(let O=0;O<i.length;++O)O<l?b.push(i[O]):b.push(1);let y=Mt(f),x=["type","type"],T=[{type:12,data:d},{type:1,data:f},{type:12,data:Math.floor(f/y)},{type:1,data:t.epsilon}];a&&x.push("type");let S=r>1,$=r>2,I=O=>{let P=Gt(e[0].dataType),N=[ee("x",e[0].dataType,e[0].dims,y),ee("scale",s.dataType,s.dims,y)];a&&N.push(ee("bias",a.dataType,a.dims,y)),N.push(Te("output",e[0].dataType,o,y)),S&&N.push(Te("mean_data_output",1,b)),$&&N.push(Te("inv_std_output",1,b));let C=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${O.registerUniforms(C).declareVariables(...N)}
  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${gd("f32",y)};
    var mean_square_vector = ${gd("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${fs(P,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${di("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${di("mean_square_vector",y)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${fs(P,y,"x[j + offset]")};
      let f32scale = ${fs(P,y,"scale[j]")};
      output[j + offset] = ${N[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${fs(P,y,"bias[j]")}`:""}
      );
    }

    ${S?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},E=[{dims:o,dataType:e[0].dataType}];return S&&E.push({dims:b,dataType:1}),$&&E.push({dims:b,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${n}`,inputDependencies:x},getRunData:()=>({outputs:E,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:T}),getShaderSource:I}},e1=(e,t)=>{Um(e.inputs),e.compute(Lm(e.inputs,t,e.outputCount))}}),Fm,t1,B$=pe(()=>{"use strict";je(),fc(),pc(),Fm=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},t1=e=>{Fm(e.inputs);let t=vs.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(cc(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=Y.size(e.inputs[0].dims.slice(0,-2)),a=Y.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&a===1){let o=e.inputs[0].reshape([1,s,n]),l=e.inputs[1].reshape([1,n,r]),d=[1,s,r],f=[o,l];e.compute(Go(f,{activation:""},t,d),{inputs:f})}else e.compute(Go(e.inputs,{activation:""},t))}}}),jm,Wm,Vm,r1,n1,P$=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),jm=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!Y.areEqual(a.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(Y.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(Y.size(l)!==d)throw new Error("zeroPoints input size error.")}},Wm=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=Y.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=Mt(t.k),g=Mt(d),b=Mt(a),y=o.concat([i,a]),x=i>1&&a/b%2===0?2:1,T=Y.size(y)/b/x,S=64,$=[],I=[l,i,s/p],E=Y.convertShape(e[1].dims).slice();E.splice(-1,1,d/g),$.push(...Ae(I)),$.push(...Ae(E)),$.push(...Ae(e[2].dims)),e.length===4&&$.push(...Ae(Y.convertShape(e[3].dims)));let O=[l,i,a/b];$.push(...Ae(O));let P=N=>{let C=I.length,V=ee("a",e[0].dataType,C,p),Q=ee("b",12,E.length,g),de=ee("scales",e[2].dataType,e[2].dims.length),K=[V,Q,de],ue=e.length===4?ee("zero_points",12,e[3].dims.length):void 0;ue&&K.push(ue);let H=O.length,te=Te("output",e[0].dataType,H,b),he=Gt(e[0].dataType),ce=(()=>{switch(p){case 1:return`array<${he}, 8>`;case 2:return`mat4x2<${he}>`;case 4:return`mat2x4<${he}>`;default:throw new Error(`${p}-component is not supported.`)}})(),ge=Math.floor(32/t.bits),ae=Math.floor(ge/8),Ie=()=>{let $e="";for(let ie=0;ie<ae;ie++){let Pe=ie*t.bits*4,Fe=Pe+t.bits;$e+=`
          // reuse a data (pass ${ie})
            var input_offset${ie>0?ie:""} = ${ie===0?V.indicesToOffset(`${V.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${ie>0?ie:""}: ${ce};
            for (var j${ie>0?ie:""}: u32 = 0; j${ie>0?ie:""} < ${8/p}; j${ie>0?ie:""}++) {
              a_data${ie>0?ie:""}[j${ie>0?ie:""}] = ${V.getByOffset(`input_offset${ie>0?ie:""}`)};
              input_offset${ie>0?ie:""}++;
            }
          `;for(let We=0;We<b*x;We++)$e+=`
            b_value = ${g===1?`b${We}_data`:`b${We}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${ie*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${Pe}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Fe}u) & b_mask);`}
            b_quantized_values = ${ce}(${Array.from({length:4},(Xe,Ne)=>`${he}(b_value_lower[${Ne}]), ${he}(b_value_upper[${Ne}])`).join(", ")});
            b_dequantized_values = ${p===1?`${ce}(${Array.from({length:8},(Xe,Ne)=>`(b_quantized_values[${Ne}] - ${ue?`zero_point${We}`:"zero_point"}) * scale${We}`).join(", ")});`:`(b_quantized_values - ${ce}(${Array(8).fill(`${ue?`zero_point${We}`:"zero_point"}`).join(",")})) * scale${We};`};
            workgroup_shared[local_id.x * ${x} + ${Math.floor(We/b)}]${b>1?`[${We%b}]`:""} += ${Array.from({length:8/p},(Xe,Ne)=>`${p===1?`a_data${ie>0?ie:""}[${Ne}] * b_dequantized_values[${Ne}]`:`dot(a_data${ie>0?ie:""}[${Ne}], b_dequantized_values[${Ne}])`}`).join(" + ")};
          `}return $e},ne=()=>{let $e=`
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
            `;for(let ie=0;ie<b*x;ie++)$e+=`
            let scale${ie} = ${de.getByOffset("col_index * nBlocksPerCol + block")};
            ${ue?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${ue.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${ie} = ${he}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return $e},xe=()=>{let $e=`col_index = col * ${b};`;for(let ie=0;ie<b*x;ie++)$e+=`
            let b${ie}_data = ${Q.getByIndices(`${Q.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return $e+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ce};
            var b_dequantized_values: ${ce};`,$e};return`
        var<workgroup> workgroup_shared: array<${te.type.value}, ${x*S}>;
        ${N.declareVariables(...K,te)}
        ${N.mainStart([S,1,1])}
          let output_indices = ${te.offsetToIndices(`(global_idx / ${S}) * ${x}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${S}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${ne()}
            for (var word: u32 = 0; word < ${d}; word += ${g}) {
              ${xe()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${Ie()}
                word_offset += ${ge/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${x}) {
            var output_value: ${te.type.value} = ${te.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${S}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${x};
            }
            ${te.setByIndices(`${te.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${g};${b};${x};${S}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:f}],dispatchGroup:{x:T},programUniforms:$}),getShaderSource:P}},Vm=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=Y.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=Mt(t.k),g=Mt(d),b=o.concat([i,a]),y=128,x=a%8===0?8:a%4===0?4:1,T=y/x,S=Math.floor(32/t.bits),$=T*g*S,I=$/p,E=$/t.blockSize,O=Y.size(b)/x,P=[],N=[l,i,s/p],C=Y.convertShape(e[1].dims).slice();C.splice(-1,1,d/g),P.push(...Ae(N)),P.push(...Ae(C)),P.push(...Ae(e[2].dims)),e.length===4&&P.push(...Ae(Y.convertShape(e[3].dims)));let V=[l,i,a];P.push(...Ae(V));let Q=de=>{let K=N.length,ue=ee("a",e[0].dataType,K,p),H=ee("b",12,C.length,g),te=ee("scales",e[2].dataType,e[2].dims.length),he=[ue,H,te],ce=e.length===4?ee("zero_points",12,e[3].dims.length):void 0;ce&&he.push(ce);let ge=V.length,ae=Te("output",e[0].dataType,ge),Ie=Gt(e[0].dataType),ne=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${Ie}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Ie}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Ie}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Ie}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ue.type.value}, ${I}>;
        var<workgroup> inter_results: array<array<${ae.type.value}, ${T}>, ${x}>;
        ${de.declareVariables(...he,ae)}
        ${de.mainStart([T,x,1])}
          let output_indices = ${ae.offsetToIndices(`workgroup_index * ${x}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${E} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${I};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${I}; a_offset += ${y})
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
            let block = tile * ${E} + local_id.x;
            ${ce?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${ce.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Ie}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Ie}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${te.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${H.getByIndices(`${H.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let xe=Math.floor(S/8),$e="";for(let ie=0;ie<xe;ie++){let Pe=ie*t.bits*4,Fe=Pe+t.bits;$e+=`
              ${ne()}
              {${t.bits===2?`
                let half_word = b_value >> ${ie*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${Pe}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Fe}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Ie}>(${Array.from({length:4},(We,Xe)=>`${Ie}(b_value_lower[${Xe}]), ${Ie}(b_value_upper[${Xe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Ie}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(We,Xe)=>`${`dot(a_data${Xe}, b_dequantized_values[${Xe}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return $e})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${x}) {
            var output_value: ${ae.type.value} = ${ae.type.value}(0);
            for (var b = 0u; b < ${T}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ae.setByIndices(`${ae.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${g};${T};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:f}],dispatchGroup:{x:O},programUniforms:P}),getShaderSource:Q}},r1=(e,t)=>{jm(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Vm(e.inputs,t)):e.compute(Wm(e.inputs,t))},n1=e=>ht(e)}),Hm,qm,Gm,Km,Xm,Ym,Zm,Qm,i1,D$=pe(()=>{"use strict";Be(),je(),Ge(),Hm=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},qm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${Ee("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Ee("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${Ee("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},Gm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Ee("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Ee("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Ee("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Ee("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Km=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Ee("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Ee("uniforms.x_shape",i,t)})) {
                  k = i32(${Ee("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${Ee("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Xm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Ee("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${Ee("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${Ee("uniforms.x_shape",i,t)})) {
                  k -= i32(${Ee("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${Ee("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Ym=(e,t,r)=>{switch(r.mode){case 0:return qm(e,t,r.pads.length);case 1:return Gm(e,t,r.pads.length);case 2:return Km(e,t,r.pads.length);case 3:return Xm(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Zm=(e,t)=>{let r=Y.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=Y.size(r),s=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...Ae(e[0].dims,r));let o=["rank"],l=d=>{let f=Te("output",e[0].dataType,r.length),p=ee("x",e[0].dataType,n.length),g=p.type.value,b=Ym(f,n.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:a?g:"f32"}),`
            ${d.registerUniforms(y).declareVariables(p,f)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${b}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(Y.size(r)/64)},programUniforms:s}),getShaderSource:l}},Qm=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(r[l]),s[Number(o[l])+i]=Number(r[l+o.length])}else r.forEach((o,l)=>s[Number(l)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:n,pads:a}}else return t},i1=(e,t)=>{Hm(e.inputs);let r=Qm(e.inputs,t);e.compute(Zm(e.inputs,r),{inputs:[0]})}}),js,Pu,Du,Nu,Uu,Jm,eg,Lu,Fu,s1,a1,ju,o1,l1,Wu,u1,d1,c1,f1,N$=pe(()=>{"use strict";Nr(),Be(),je(),Ge(),js=e=>{if(St.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Pu=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),l=s?t.dilations.slice():[],d=t.pads.slice();Ho.adjustPoolAttributes(r,i,a,o,l,d);let f=Ho.computePoolOutputShape(r,i,o,l,a,d,t.autoPad,t.ceilMode),p=Object.assign({},t);s?Object.assign(p,{kernelShape:a,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let g=f.slice();return g.push(g.splice(1,1)[0]),[p,n?g:f]},Du=(e,t)=>{let r=t.format==="NHWC",n=Y.size(e),i=Y.size(t.kernelShape),s=[{type:12,data:n},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],p=!!(d+f);s.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:f}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let b=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],x=t.pads[t.pads.length/2-2],T=t.pads[t.pads.length-2];g=!!(x+T),s.push({type:12,data:b},{type:12,data:y},{type:12,data:x},{type:12,data:T}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,p,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=Y.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,f)=>d+f);return[s,a,!!l,!1,!1]}},Nu=(e,t,r,n,i,s,a,o,l,d,f,p)=>{let g=i.format==="NHWC",b=t.type.value,y=Te("output",t.type.tensor,n);if(i.kernelShape.length<=2){let x="",T="",S="",$=r-(g?2:1);if(f?x=`
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
                }`,i.kernelShape.length===2){let I=r-(g?3:2);p?T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${I}] < 0 || xIndices[${I}] >= uniforms.x_shape[${I}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
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
              ${T}
              ${x}
              ${S}
              ${a}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let x=i.kernelShape.length,T=i.pads.length,S="";return d?S=`
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
                  offsets[j] = offset / ${Ee("uniforms.kernelStrides","j",x)};
                  offset -= offsets[j] * ${Ee("uniforms.kernelStrides","j",x)};
                }
                offsets[${x-1}] = offset;

                isPad = false;
                for (var j = ${r-x}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Ee("uniforms.strides",`j - ${r-x}u`,x)}
                    + offsets[j - ${r-x}u] - ${Ee("uniforms.pads","j - 2u",T)};
                  ${S}
              }
              ${a}

              output[global_idx] = value;
            }`}},Uu=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Jm=e=>`${Uu(e)};${e.countIncludePad}`,eg=e=>`${Uu(e)};${e.storageOrder};${e.dilations}`,Lu=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Fu=(e,t,r,n)=>{let[i,s]=Pu(t,n,r),a=ee("x",t.dataType,t.dims.length),o=a.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[f,p,g,b,y]=Du(s,i);f.push(...Ae(t.dims,s));let x=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${g};${b};${y}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(Y.size(s)/64)},programUniforms:f}),getShaderSource:T=>Nu(T,a,t.dims.length,s.length,i,l,d,0,p,g,b,y)}},s1=e=>{let t=e.count_include_pad!==0,r=Lu(e);if(r.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:Jm(n)}},a1=(e,t)=>{js(e.inputs),e.compute(Fu("AveragePool",e.inputs[0],!1,t))},ju={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},o1=e=>{let t=e.format;return{format:t,...ju,cacheKey:t}},l1=(e,t)=>{js(e.inputs),e.compute(Fu("GlobalAveragePool",e.inputs[0],!0,t))},Wu=(e,t,r,n)=>{let[i,s]=Pu(t,n,r),a=`
      value = max(x_val, value);
    `,o="",l=ee("x",t.dataType,t.dims.length),d=["rank"],[f,p,g,b,y]=Du(s,i);return f.push(...Ae(t.dims,s)),{name:e,shaderCache:{hint:`${n.cacheKey};${g};${b};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(Y.size(s)/64)},programUniforms:f}),getShaderSource:x=>Nu(x,l,t.dims.length,s.length,i,a,o,t.dataType===10?-65504:-1e5,p,g,b,y)}},u1=(e,t)=>{js(e.inputs),e.compute(Wu("MaxPool",e.inputs[0],!1,t))},d1=e=>{let t=e.storage_order,r=e.dilations,n=Lu(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:eg(i)}},c1=e=>{let t=e.format;return{format:t,...ju,cacheKey:t}},f1=(e,t)=>{js(e.inputs),e.compute(Wu("GlobalMaxPool",e.inputs[0],!0,t))}}),tg,rg,p1,h1,U$=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),tg=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},rg=(e,t)=>{let r=Y.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,s=e[0].dims,a=e[1].dataType,o=Y.size(s),l=n===3||n===2,d=l?[Math.ceil(Y.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,p=e.length>2?e[2]:void 0,g=p?l?[Math.ceil(Y.size(p.dims)/4)]:p.dims:void 0,b=f.length===0||f.length===1&&f[0]===1,y=b===!1&&f.length===1,x=Mt(o),T=b&&(!l||x===4),S=T?x:1,$=T&&!l?x:1,I=ee("input",l?12:n,d.length,$),E=ee("scale",a,f.length),O=p?ee("zero_point",l?12:n,g.length):void 0,P=Te("output",a,s.length,S),N=[I,E];O&&N.push(O);let C=[d,f];p&&C.push(g);let V=[{type:12,data:o/S},{type:12,data:r},{type:12,data:t.blockSize},...Ae(...C,s)],Q=de=>{let K=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${de.registerUniforms(K).declareVariables(...N,P)}
      ${de.mainStart()}
          ${de.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${P.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${I.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${S===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${I.getByOffset("global_idx")};`};

          // Set scale input
          ${b?`let scale_value= ${E.getByOffset("0")}`:y?`
            let scale_index = ${P.indicesGet("output_indices","uniforms.axis")};
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
                let zero_point_index = ${P.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${O.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${P.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${O.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${E.indicesToOffset("scale_indices")};
                let zero_point_input = ${O.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${O.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${P.setByOffset("global_idx",`${P.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:O?["rank","rank","rank"]:["rank","rank"]},getShaderSource:Q,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/S/64),y:1,z:1},programUniforms:V})}},p1=(e,t)=>{tg(e.inputs,t),e.compute(rg(e.inputs,t))},h1=e=>ht({axis:e.axis,blockSize:e.blockSize})}),ng,ig,m1,L$=pe(()=>{"use strict";Nr(),Be(),Ge(),ng=(e,t,r)=>{let n=e===t,i=e<t&&r<0,s=e>t&&r>0;if(n||i||s)throw new Error("Range these inputs' contents are invalid.")},ig=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),s=[i],a=i,o=[{type:12,data:a},{type:n,data:e},{type:n,data:r},...Ae(s)],l=d=>{let f=Te("output",n,s.length),p=f.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${d.registerUniforms(g).declareVariables(f)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},m1=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),St.webgpu.validateInputContent&&ng(t,r,n),e.compute(ig(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),sg,ag,g1,y1,F$=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),sg=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${s}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},ag=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r,s=1,a=Math.ceil(Y.sizeToDimension(n,n.length-1)/s),o=n[n.length-1],l=Y.sizeFromDimension(r,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:l},...Ae(e[1].dims,e[2].dims,i)],f=p=>{let g=ee("indices",e[1].dataType,e[1].dims.length),b=ee("updates",e[2].dataType,e[2].dims.length,s),y=t.reduction!=="none"&&t.reduction!==""?jy("output",e[0].dataType,i.length):Te("output",e[0].dataType,i.length,s);return`
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
    ${sg(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:f}},g1=e=>ht({reduction:e.reduction}),y1=(e,t)=>{e.compute(ag(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),og,lg,ug,Vu,dg,cg,fg,pg,hg,mg,gg,yg,Hu,bg,vg,wg,_g,xg,b1,v1,j$=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),og=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},lg=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((i,s)=>n[i]=e[s]),n},ug=(e,t,r,n,i,s)=>{let[a,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(f=>s.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(f=>n.push(f)),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");og(n,t),t.axes.length>0&&lg(n,t.axes,d).forEach((f,p)=>n[p]=f)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(f=>i.push(Number(f))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Vu=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,dg=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Vu("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Vu("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",cg=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",fg=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((s,a)=>{n[s]=i[a],n[a+r]=i[t.length+a]}),n):i},pg=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(s=>i.push(s)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((s,a)=>i[s]=r[a])}else r.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,a)=>Math.round(s*t[a]))}return i},hg=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=n),r.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(n,0,t.length),i.forEach((s,a)=>i[a]=Math.round(s*t[a]))),i},mg=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Ee("uniforms.scales","i",n)};
        var roi_low = ${Ee("uniforms.roi","i",i)};
        var roi_hi = ${Ee("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Ee("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Ee("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,gg=(e,t,r,n,i,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Ee("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Ee("uniforms.roi","i",s)};
          var roi_hi = ${Ee("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${Ee("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Ee("uniforms.output_shape","i",n.length)};
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
    }`,yg=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Ee("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Hu=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",bg=(e,t,r,n,i)=>{let[s,a,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
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
    }`},vg=(e,t,r,n,i,s,a,o,l,d)=>{let f=r.length===2,p=!0,[g,b]=f?[0,1]:p?[2,3]:[1,2],y=e.type.value,x=T=>{let S=T===g?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",T)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[T]},
        ${n[T]}, ${r[T]}, ${s[T]}, ${s[T]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[T]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${y} = originalIdx + ${y}(i);
          if (${S} < 0 || ${S} >= ${r[T]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${S} = max(0, min(${S}, ${r[T]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",T,`u32(${S})`)};
          data[i + 1] = ${T===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
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
    `},wg=(e,t,r,n,i)=>{let[s,a,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
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
    }`},_g=(e,t,r,n,i,s)=>{let a=e.dims,o=fg(s,t.axes,a.length),l=pg(a,n,i,t.axes),d=n.slice();n.length===0&&(d=a.map(($,I)=>$===0?1:l[I]/$),t.keepAspectRatioPolicy!=="stretch"&&(l=hg(a,d,t)));let f=Te("output",e.dataType,l.length),p=ee("input",e.dataType,a.length),g=Y.size(l),b=a.length===l.length&&a.every(($,I)=>$===l[I]),y=t.coordinateTransformMode==="tf_crop_and_resize",x=t.extrapolationValue,T=p.type.value,S=$=>`
      ${b?"":`
      ${dg(t.coordinateTransformMode,T)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${yg(p,a)};
              ${cg(t.nearestMode,r,T)};
              ${gg(p,f,a,l,d.length,o.length,y)};
              `;case"linear":return`
              ${mg(f,a,l,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${bg(p,f,a,y,x)}`;if(a.length===3||a.length===5)return`${wg(p,f,a,y,x)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${vg(p,f,a,l,d,o,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${b}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:o},...Ae(a,l)]})}},xg=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},b1=(e,t)=>{let r=[],n=[],i=[],s=xg(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");ug(e.inputs,t,s,r,n,i),e.compute(_g(e.inputs[0],t,s,r,n,i),{inputs:[0]})},v1=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return ht({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),$g,Sg,w1,W$=pe(()=>{"use strict";Be(),je(),Ge(),$g=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Sg=(e,t,r,n)=>{let i=t.simplified,s=e[0].dims,a=Y.size(s),o=s,l=a,d=s.slice(-1)[0],f=n?s.slice(0,-1).concat(1):[],p=!i&&e.length>3,g=e.length>4,b=n&&r>1,y=n&&r>2,x=r>3,T=64,S=Mt(d),$=[{type:12,data:l},{type:12,data:S},{type:12,data:d},{type:1,data:t.epsilon}],I=O=>{let P=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],N=[ee("x",e[0].dataType,e[0].dims,S),ee("skip",e[1].dataType,e[1].dims,S),ee("gamma",e[2].dataType,e[2].dims,S)];p&&N.push(ee("beta",e[3].dataType,e[3].dims,S)),g&&N.push(ee("bias",e[4].dataType,e[4].dims,S)),N.push(Te("output",e[0].dataType,o,S)),b&&N.push(Te("mean_output",1,f)),y&&N.push(Te("inv_std_output",1,f)),x&&N.push(Te("input_skip_bias_sum",e[0].dataType,o,S));let C=Gt(e[0].dataType),V=Gt(1,S);return`

      ${O.registerUniforms(P).declareVariables(...N)}
      var<workgroup> sum_shared : array<${V}, ${T}>;
      var<workgroup> sum_squared_shared : array<${V}, ${T}>;

      ${O.mainStart([T,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${T};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${T};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${T-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":C+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${x?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${fs(C,S,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${T};
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
        let mean = ${di("sum",S)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${di("square_sum",S)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${b?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${C}(mean)`}) *
            ${C}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},E=[{dims:o,dataType:e[0].dataType}];return r>1&&E.push({dims:f,dataType:1}),r>2&&E.push({dims:f,dataType:1}),r>3&&E.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${S};${b};${y};${x}`,inputDependencies:e.map((O,P)=>"type")},getShaderSource:I,getRunData:()=>({outputs:E,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:$})}},w1=(e,t)=>{$g(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Sg(e.inputs,t,e.outputCount,!1),{outputs:r})}}),kg,Ws,Tg,qu,Cg,Eg,_1,x1,V$=pe(()=>{"use strict";Be(),je(),Rt(),Ge(),kg=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},Ws=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Tg=(e,t)=>{if(e.length>1){let r=Ws(e,1),n=Ws(e,2),i=Ws(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),ht({starts:r,ends:n,axes:i})}else return t},qu=(e,t,r,n,i)=>{let s=e;return e<0&&(s+=r[n[t]]),i[t]<0?Math.max(0,Math.min(s,r[n[t]]-1)):Math.max(0,Math.min(s,r[n[t]]))},Cg=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${Ee("uniforms.input_shape","i",r.length)};
            let steps_i = ${Ee("uniforms.steps","i",r.length)};
            let signs_i = ${Ee("uniforms.signs","i",r.length)};
            let starts_i = ${Ee("uniforms.starts","i",r.length)};
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
      }`,Eg=(e,t)=>{let r=e[0].dims,n=Y.size(r),i=t.axes.length>0?Y.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=Ws(e,4);s.forEach(S=>S!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let a=t.starts.map((S,$)=>qu(S,$,r,i,s)),o=t.ends.map((S,$)=>qu(S,$,r,i,s));if(i.length!==a.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let S=0;S<r.length;++S)i.includes(S)||(a.splice(S,0,0),o.splice(S,0,r[S]),s.splice(S,0,1));let l=s.map(S=>Math.sign(S));s.forEach((S,$,I)=>{if(S<0){let E=(o[$]-a[$])/S,O=a[$],P=O+E*s[$];a[$]=P,o[$]=O,I[$]=-S}});let d=r.slice(0);i.forEach((S,$)=>{d[S]=Math.ceil((o[S]-a[S])/s[S])});let f={dims:d,dataType:e[0].dataType},p=Te("output",e[0].dataType,d.length),g=ee("input",e[0].dataType,e[0].dims.length),b=Y.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],x=[{type:12,data:b},{type:12,data:a},{type:6,data:l},{type:12,data:s},...Ae(e[0].dims,d)],T=S=>`
      ${S.registerUniforms(y).declareVariables(g,p)}
        ${Cg(g,p,r)}
        ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:T,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:x})}},_1=(e,t)=>{kg(e.inputs,t);let r=Tg(e.inputs,t);e.compute(Eg(e.inputs,r),{inputs:[0]})},x1=e=>{let t=e.starts,r=e.ends,n=e.axes;return ht({starts:t,ends:r,axes:n})}}),Ig,Ag,$1,S1,H$=pe(()=>{"use strict";Be(),je(),Rt(),fi(),Ge(),Ig=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Ag=(e,t)=>{let r=e.inputs[0],n=r.dims,i=Y.size(n),s=n.length,a=Y.normalizeAxis(t.axis,s),o=a<n.length-1,l,d=[];o?(d=Array.from({length:s},(N,C)=>C),d[a]=s-1,d[s-1]=a,l=e.compute(Sr(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let f=l.dims,p=f[s-1],g=i/p,b=Mt(p),y=p/b,x=64;g===1&&(x=256);let T=(N,C)=>C===4?`max(max(${N}.x, ${N}.y), max(${N}.z, ${N}.w))`:C===2?`max(${N}.x, ${N}.y)`:C===3?`max(max(${N}.x, ${N}.y), ${N}.z)`:N,S=ee("x",l.dataType,l.dims,b),$=Te("result",l.dataType,l.dims,b),I=S.type.value,E=Gt(l.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,O=N=>`
      var<workgroup> rowMaxShared : ${I};
      var<workgroup> rowSumShared : ${I};
      var<workgroup> threadShared : array<${I}, ${x}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${I} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${I}) {
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
          rowMaxShared = ${I}(${T("threadShared[0]",b)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${I}(0.0);
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
          rowSumShared = ${I}(${di("threadShared[0]",b)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,P=e.compute({name:"Softmax",shaderCache:{hint:`${b};${x}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:y}]}),getShaderSource:O},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(Sr(P,d),{inputs:[P]})},$1=(e,t)=>{Ig(e.inputs),Ag(e,t)},S1=e=>ht({axis:e.axis})}),Gu,Og,zg,Mg,k1,q$=pe(()=>{"use strict";Be(),je(),Ge(),Gu=e=>Array.from(e.getBigInt64Array(),Number),Og=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Gu(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},zg=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},Mg=(e,t)=>{let r=e[0].dims,n=t??Gu(e[1]),i=zg(r,n),s=Y.size(i),a=e[0].dataType,o=ee("input",a,r.length),l=Te("output",a,i.length),d=f=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...Ae(e[0].dims,i)]}),getShaderSource:d}},k1=e=>{Og(e.inputs),e.compute(Mg(e.inputs),{inputs:[0]})}}),Rg,Bg,T1,G$=pe(()=>{"use strict";Be(),je(),Ge(),Rg=(e,t,r,n,i)=>{let s=Te("output_data",i,r.length,4),a=ee("a_data",t[1].dataType,t[1].dims.length,4),o=ee("b_data",t[2].dataType,t[2].dims.length,4),l=ee("c_data",t[0].dataType,t[0].dims.length,4),d,f=(p,g,b)=>`select(${g}, ${p}, ${b})`;if(!n)d=s.setByOffset("global_idx",f(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let p=(g,b,y="")=>{let x=`a_data[index_a${b}][component_a${b}]`,T=`b_data[index_b${b}][component_b${b}]`,S=`bool(c_data[index_c${b}] & (0xffu << (component_c${b} * 8)))`;return`
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
            ${g}[${b}] = ${y}(${f(x,T,S)});
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
      }`},Bg=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,s=!(Y.areEqual(t,r)&&Y.areEqual(r,n)),a=t,o=Y.size(t);if(s){let d=vs.calcShape(vs.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=Y.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Rg(d,e,a,s,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...Ae(n,t,r,a)]})}},T1=e=>{e.compute(Bg(e.inputs))}}),C1,K$=pe(()=>{"use strict";o$(),oc(),l$(),u$(),d$(),c$(),f$(),y$(),v$(),w$(),_$(),x$(),$$(),S$(),k$(),T$(),C$(),E$(),I$(),A$(),O$(),z$(),M$(),R$(),B$(),P$(),qv(),D$(),N$(),U$(),L$(),F$(),ac(),j$(),Zv(),W$(),V$(),H$(),Xv(),q$(),fi(),lc(),G$(),C1=new Map([["Abs",[yb]],["Acos",[bb]],["Acosh",[vb]],["Add",[ev]],["ArgMax",[pb,bd]],["ArgMin",[fb,bd]],["Asin",[wb]],["Asinh",[_b]],["Atan",[xb]],["Atanh",[$b]],["Attention",[hb]],["AveragePool",[a1,s1]],["BatchNormalization",[mb]],["BiasAdd",[gb]],["BiasSplitGelu",[Jb]],["Cast",[kb,Sb]],["Ceil",[Cb]],["Clip",[Tb]],["Concat",[dv,cv]],["Conv",[Sd,$d]],["ConvTranspose",[_v,wv]],["Cos",[Eb]],["Cosh",[Ib]],["CumSum",[xv,$v]],["DepthToSpace",[Sv,kv]],["DequantizeLinear",[p1,h1]],["DFT",[Tv,Cv]],["Div",[tv]],["Einsum",[Ev,Iv]],["Elu",[Ab,Xs]],["Equal",[rv]],["Erf",[Ob]],["Exp",[zb]],["Expand",[Av]],["FastGelu",[Ov]],["Floor",[Mb]],["FusedConv",[Sd,$d]],["Gather",[Mv,zv]],["GatherElements",[Uv,Nv]],["GatherBlockQuantized",[Pv,Dv]],["GatherND",[Rv,Bv]],["Gelu",[Rb]],["Gemm",[Fv,Lv]],["GlobalAveragePool",[l1,o1]],["GlobalMaxPool",[f1,c1]],["Greater",[av]],["GreaterOrEqual",[lv]],["GridSample",[jv,Wv]],["GroupQueryAttention",[Qv]],["HardSigmoid",[jb,Fb]],["HardSwish",[Wb]],["InstanceNormalization",[Jv]],["LayerNormalization",[e1]],["LeakyRelu",[Bb,Xs]],["Less",[ov]],["LessOrEqual",[uv]],["Log",[Zb]],["MatMul",[t1]],["MatMulNBits",[r1,n1]],["MaxPool",[u1,d1]],["Mul",[nv]],["MultiHeadAttention",[Hv,Vv]],["Neg",[Db]],["Not",[Pb]],["Pad",[i1]],["Pow",[iv]],["QuickGelu",[Qb,Xs]],["Range",[m1]],["Reciprocal",[Nb]],["ReduceMin",[ob]],["ReduceMean",[rb]],["ReduceMax",[ab]],["ReduceSum",[ub]],["ReduceProd",[lb]],["ReduceL1",[nb]],["ReduceL2",[ib]],["ReduceLogSum",[cb]],["ReduceLogSumExp",[sb]],["ReduceSumSquare",[db]],["Relu",[Ub]],["Resize",[b1,v1]],["RotaryEmbedding",[Yv]],["ScatterND",[y1,g1]],["Sigmoid",[Lb]],["Sin",[Vb]],["Sinh",[Hb]],["Slice",[_1,x1]],["SkipLayerNormalization",[w1]],["Split",[Gv,Kv]],["Sqrt",[qb]],["Softmax",[$1,S1]],["Sub",[sv]],["Tan",[Gb]],["Tanh",[Kb]],["ThresholdedRelu",[Yb,Xs]],["Tile",[k1]],["Transpose",[Vy,Hy]],["Where",[T1]]])}),E1,X$=pe(()=>{"use strict";Nr(),Dn(),Ge(),E1=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){hn(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Yr(e.programInfo.name)}dispose(){}build(e,t){hn(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let i=Wy(t,this.backend.device.limits),s=e.getShaderSource(i),a=`${n.join(`
`)}
${i.additionalImplementations}
${s}`,o=r.createShaderModule({code:a,label:e.name});dt("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Yr(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let s=t*r*n,a=Math.ceil(Math.sqrt(s));if(a>i){if(a=Math.ceil(Math.cbrt(s)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),I1={};_s(I1,{WebGpuBackend:()=>A1});var Pg,Dg,Ng,A1,Y$=pe(()=>{"use strict";Nr(),Be(),Dn(),Ny(),s$(),K$(),X$(),Pg=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let s=e[n].dims.length;r.push(`${i};${s}`);break}case"dims":{let s=e[n].dims.join(",");r.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},Dg=(e,t,r)=>{let n=e.name;return e.shaderCache?.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${Pg(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,n},Ng=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},A1=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=o=>t.features.has(o)&&r.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(n);let s=t,a=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new Ng(a),this.gpuDataManager=Fy(this),this.programManager=new E1(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,rc(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;hn(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let i=r[n],s=i.kernelId,a=this.kernels.get(s),o=a.kernelType,l=a.kernelName,d=i.programName,f=i.inputTensorViews,p=i.outputTensorViews,g=t[n*2],b=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let y=Number(g-this.queryTimeBase),x=Number(b-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(x))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(T=>({dims:T.dims,dataType:Mn(T.dataType)})),outputsMetadata:p.map(T=>({dims:T.dims,dataType:Mn(T.dataType)})),kernelId:s,kernelType:o,kernelName:l,programName:d,startTime:y,endTime:x});else{let T="";f.forEach(($,I)=>{T+=`input[${I}]: [${$.dims}] | ${Mn($.dataType)}, `});let S="";p.forEach(($,I)=>{S+=`output[${I}]: [${$.dims}] | ${Mn($.dataType)}, `}),console.log(`[profiling] kernel "${s}|${o}|${l}|${d}" ${T}${S}start time: ${y} ns, execution time: ${x-y} ns`)}jo("GPU",`${d}::${g}::${b}`)}e.unmap(),this.pendingQueries.delete(e)}),Yr()}run(e,t,r,n,i,s){hn(e.name);let a=[];for(let $=0;$<t.length;++$){let I=t[$].data;if(I===0)continue;let E=this.gpuDataManager.get(I);if(!E)throw new Error(`no GPU data for input: ${I}`);a.push(E)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),f=r.length===0?o.map(($,I)=>I):r;if(f.length!==o.length)throw new Error(`Output size ${f.length} must be equal to ${o.length}.`);let p=[],g=[];for(let $=0;$<o.length;++$){if(!Number.isInteger(f[$])||f[$]<-3||f[$]>=s)throw new Error(`Invalid output index: ${f[$]}`);if(f[$]===-3)continue;let I=f[$]===-1,E=f[$]===-2,O=I||E?i(o[$].dataType,o[$].dims):n(f[$],o[$].dataType,o[$].dims);if(p.push(O),O.data===0)continue;let P=this.gpuDataManager.get(O.data);if(!P)throw new Error(`no GPU data for output: ${O.data}`);if(I&&this.temporaryData.push(P),E){let N=this.kernelPersistentData.get(this.currentKernelId);N||(N=[],this.kernelPersistentData.set(this.currentKernelId,N)),N.push(P)}g.push(P)}if(a.length!==t.length||g.length!==p.length){if(g.length===0)return Yr(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let b;if(d){let $=0,I=[];d.forEach(N=>{let C=typeof N.data=="number"?[N.data]:N.data;if(C.length===0)return;let V=N.type===10?2:4,Q,de;N.type===10?(de=C.length>4?16:C.length>2?8:C.length*V,Q=C.length>4?16:V*C.length):(de=C.length<=2?C.length*V:16,Q=16),$=Math.ceil($/de)*de,I.push($);let K=N.type===10?8:4;$+=C.length>4?Math.ceil(C.length/K)*Q:C.length*V});let E=16;$=Math.ceil($/E)*E;let O=new ArrayBuffer($);d.forEach((N,C)=>{let V=I[C],Q=typeof N.data=="number"?[N.data]:N.data;if(N.type===6)new Int32Array(O,V,Q.length).set(Q);else if(N.type===12)new Uint32Array(O,V,Q.length).set(Q);else if(N.type===10)new Uint16Array(O,V,Q.length).set(Q);else if(N.type===1)new Float32Array(O,V,Q.length).set(Q);else throw new Error(`Unsupported uniform type: ${Mn(N.type)}`)});let P=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(P.buffer,0,O,0,$),this.gpuDataManager.release(P.id),b={offset:0,size:$,buffer:P.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),x=y[1]===1&&y[2]===1,T=Dg(e,t,x),S=this.programManager.getArtifact(T);if(S||(S=this.programManager.build(e,y),this.programManager.setArtifact(T,S),dt("info",()=>`[artifact] key: ${T}, programName: ${e.name}`)),d&&S.uniformVariablesInfo){if(d.length!==S.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${S.uniformVariablesInfo.length}, got ${d.length} in program "${S.programInfo.name}".`);for(let $=0;$<d.length;$++){let I=d[$],E=I.type,O=typeof I.data=="number"?1:I.data.length,[P,N]=S.uniformVariablesInfo[$];if(E!==P||O!==N)throw new Error(`Uniform variable ${$} mismatch: expect type ${P} with size ${N}, got type ${E} with size ${O} in program "${S.programInfo.name}".`)}}if(dt("info",()=>`[ProgramManager] run "${e.name}" (key=${T}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:S.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(S,a,g,y,b),Yr(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=C1.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,s=n.kernelName,a=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),dt("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),a=this.gpuDataManager.registerExternalBuffer(r,n,s);return i.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await md(this,e,t);return nc(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){dt("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){dt("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){dt("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),s=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),O1={};_s(O1,{init:()=>z1});var _o,Ug,z1,Z$=pe(()=>{"use strict";Be(),Dn(),je(),i$(),_o=class M1{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=Y.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=Y.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=Y.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=Y.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(Y.size(t)!==Y.size(this.dims))throw new Error("Invalid new shape");return new M1(this.module,this.dataType,this.data,t)}},Ug=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,i=r/e.PTR_SIZE,s=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,s));let a=Number(e.getValue(n*i++,s));this.outputCount=Number(e.getValue(n*i++,s)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,s));let o=[];for(let l=0;l<a;l++){let d=Number(e.getValue(n*i++,s)),f=Number(e.getValue(n*i++,"*")),p=Number(e.getValue(n*i++,s)),g=[];for(let b=0;b<p;b++)g.push(Number(e.getValue(n*i++,s)));o.push(new _o(e,d,f,g))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(a=>typeof a=="number"?this.inputs[a]:a)??this.inputs,n=t?.outputs??[],i=(a,o,l)=>new _o(this.module,o,this.output(a,l),l),s=(a,o)=>{let l=Fi(a,o);if(!l)throw new Error(`Unsupported data type: ${a}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new _o(this.module,a,d,o)};return this.backend.run(e,r,n,i,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,i=n===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*n);this.module.setValue(s,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(s+n*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},z1=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(Y$(),ga(I1)).WebGpuBackend,a=new s;await a.initialize(r,n),i("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,l,d,f=!1)=>{if(f)dt("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),a.memcpy(Number(o),Number(l));else{dt("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(l),p)}},async(o,l,d)=>{dt("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>a.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>a.releaseKernel(o),(o,l,d,f)=>{dt("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let p=new Ug(t,a,Number(l));return a.computeKernel(Number(o),p,f)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new Ly(r);i("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,l,d,f)=>s.ensureTensor(a,o,l,d,f),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!r.trace])}}}),Lg,hc,mc,Jn,Fg,Ku,Xo,gc,yc,Xu,bc,vc,wc,R1=pe(()=>{"use strict";Nr(),t$(),r$(),Be(),Qi(),Qd(),Ry(),Lg=(e,t)=>{Ct()._OrtInit(e,t)!==0&&gt("Can't initialize onnxruntime.")},hc=async e=>{Lg(e.wasm.numThreads,Vo(e.logLevel))},mc=async(e,t)=>{Ct().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:i}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let n=(Z$(),ga(O1)).init;t==="webgpu"&&await n("webgpu",Ct(),e,r),t==="webnn"&&await n("webnn",Ct(),e)}},Jn=new Map,Fg=e=>{let t=Ct(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&gt("Can't get session input/output count.");let s=n===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+n,s))]}finally{t.stackRestore(r)}},Ku=(e,t)=>{let r=Ct(),n=r.stackSave(),i=0;try{let s=r.PTR_SIZE,a=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&gt("Can't get session input/output metadata.");let o=Number(r.getValue(a,"*"));i=Number(r.getValue(a+s,"*"));let l=r.HEAP32[i/4];if(l===0)return[o,0];let d=r.HEAPU32[i/4+1],f=[];for(let p=0;p<d;p++){let g=Number(r.getValue(i+8+p*s,"*"));f.push(g!==0?r.UTF8ToString(g):Number(r.getValue(i+8+(p+d)*s,"*")))}return[o,l,f]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},Xo=e=>{let t=Ct(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},gc=async(e,t)=>{let r,n,i=Ct();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=Xo(e);let s=0,a=0,o=0,l=[],d=[],f=[];try{if([a,l]=await My(t),t?.externalData&&i.mountExternalData){let E=[];for(let O of t.externalData){let P=typeof O=="string"?O:O.path,N=typeof O=="string"?O:O.data;E.push(tc(N).then(C=>{i.mountExternalData(P,C)}))}await Promise.all(E)}for(let E of t?.executionProviders??[])if((typeof E=="string"?E:E.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof E!="string"){let O=E,P=O?.context,N=O?.gpuDevice,C=O?.deviceType,V=O?.powerPreference;P?i.currentContext=P:N?i.currentContext=await i.webnnCreateMLContext(N):i.currentContext=await i.webnnCreateMLContext({deviceType:C,powerPreference:V})}else i.currentContext=await i.webnnCreateMLContext();break}s=await i._OrtCreateSession(r,n,a),i.webgpuOnCreateSession?.(s),s===0&&gt("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[p,g]=Fg(s),b=!!t?.enableGraphCapture,y=[],x=[],T=[],S=[],$=[];for(let E=0;E<p;E++){let[O,P,N]=Ku(s,E);O===0&&gt("Can't get an input name."),d.push(O);let C=i.UTF8ToString(O);y.push(C),T.push(P===0?{name:C,isTensor:!1}:{name:C,isTensor:!0,type:Mn(P),shape:N})}for(let E=0;E<g;E++){let[O,P,N]=Ku(s,E+p);O===0&&gt("Can't get an output name."),f.push(O);let C=i.UTF8ToString(O);x.push(C),S.push(P===0?{name:C,isTensor:!1}:{name:C,isTensor:!0,type:Mn(P),shape:N});{if(b&&t?.preferredOutputLocation===void 0){$.push("gpu-buffer");continue}let V=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[C]??"cpu",Q=i.webnnIsGraphOutput;if(V==="cpu"&&Q&&Q(s,C)){$.push("ml-tensor-cpu-output");continue}if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if(b&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);$.push(V)}}let I=null;return $.some(E=>E==="gpu-buffer"||E==="ml-tensor"||E==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(s),o===0&&gt("Can't create IO binding."),I={handle:o,outputPreferredLocations:$,outputPreferredLocationsEncoded:$.map(E=>E==="ml-tensor-cpu-output"?"ml-tensor":E).map(E=>hd(E))}),Jn.set(s,[s,d,f,I,b,!1]),[s,y,x,T,S]}catch(p){throw d.forEach(g=>i._OrtFree(g)),f.forEach(g=>i._OrtFree(g)),o!==0&&i._OrtReleaseBinding(o)!==0&&gt("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&gt("Can't release session."),p}finally{i._free(r),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&gt("Can't release session options."),l.forEach(p=>i._free(p)),i.unmountExternalData?.()}},yc=e=>{let t=Ct(),r=Jn.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,s,a,o]=r;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&gt("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&gt("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(l=>t._OrtFree(l)),s.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(n)!==0&&gt("Can't release session."),Jn.delete(e)},Xu=async(e,t,r,n,i,s,a=!1)=>{if(!e){t.push(0);return}let o=Ct(),l=o.PTR_SIZE,d=e[0],f=e[1],p=e[3],g=p,b,y;if(d==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let S=e[2].gpuBuffer;y=Fi(Li(d),f);{let $=o.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');b=$(n,s,S,y)}}else if(p==="ml-tensor"){let S=e[2].mlTensor;y=Fi(Li(d),f);let $=o.webnnRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');b=$(n,S,Li(d),f)}else{let S=e[2];if(Array.isArray(S)){y=l*S.length,b=o._malloc(y),r.push(b);for(let $=0;$<S.length;$++){if(typeof S[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);o.setValue(b+$*l,qr(S[$],r),"*")}}else{let $=o.webnnIsGraphInput,I=o.webnnIsGraphOutput;if(d!=="string"&&$&&I){let E=o.UTF8ToString(i);if($(n,E)||I(n,E)){let O=Li(d);y=Fi(O,f),g="ml-tensor";let P=o.webnnCreateTemporaryTensor,N=o.webnnUploadTensor;if(!P||!N)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let C=await P(n,O,f);N(C,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),b=C}else y=S.byteLength,b=o._malloc(y),r.push(b),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,y),b)}else y=S.byteLength,b=o._malloc(y),r.push(b),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,y),b)}}let x=o.stackSave(),T=o.stackAlloc(4*f.length);try{f.forEach(($,I)=>o.setValue(T+I*l,$,l===4?"i32":"i64"));let S=o._OrtCreateTensor(Li(d),b,y,T,f.length,hd(g));S===0&&gt(`Can't create tensor for input/output. session=${n}, index=${s}.`),t.push(S)}finally{o.stackRestore(x)}},bc=async(e,t,r,n,i,s)=>{let a=Ct(),o=a.PTR_SIZE,l=Jn.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],f=l[1],p=l[2],g=l[3],b=l[4],y=l[5],x=t.length,T=n.length,S=0,$=[],I=[],E=[],O=[],P=[],N=a.stackSave(),C=a.stackAlloc(x*o),V=a.stackAlloc(x*o),Q=a.stackAlloc(T*o),de=a.stackAlloc(T*o);try{[S,$]=zy(s),Gi("wasm prepareInputOutputTensor");for(let te=0;te<x;te++)await Xu(r[te],I,O,e,f[t[te]],t[te],b);for(let te=0;te<T;te++)await Xu(i[te],E,O,e,p[n[te]],x+n[te],b);Ki("wasm prepareInputOutputTensor");for(let te=0;te<x;te++)a.setValue(C+te*o,I[te],"*"),a.setValue(V+te*o,f[t[te]],"*");for(let te=0;te<T;te++)a.setValue(Q+te*o,E[te],"*"),a.setValue(de+te*o,p[n[te]],"*");if(g&&!y){let{handle:te,outputPreferredLocations:he,outputPreferredLocationsEncoded:ce}=g;if(f.length!==x)throw new Error(`input count from feeds (${x}) is expected to be always equal to model's input count (${f.length}).`);Gi("wasm bindInputsOutputs");for(let ge=0;ge<x;ge++){let ae=t[ge];await a._OrtBindInput(te,f[ae],I[ge])!==0&&gt(`Can't bind input[${ge}] for session=${e}.`)}for(let ge=0;ge<T;ge++){let ae=n[ge];i[ge]?.[3]?(P.push(E[ge]),a._OrtBindOutput(te,p[ae],E[ge],0)!==0&&gt(`Can't bind pre-allocated output[${ge}] for session=${e}.`)):a._OrtBindOutput(te,p[ae],0,ce[ae])!==0&&gt(`Can't bind output[${ge}] to ${he[ge]} for session=${e}.`)}Ki("wasm bindInputsOutputs"),Jn.set(e,[d,f,p,g,b,!0])}a.jsepOnRunStart?.(d),a.webnnOnRunStart?.(d);let K;g?K=await a._OrtRunWithBinding(d,g.handle,T,Q,S):K=await a._OrtRun(d,V,C,x,de,T,Q,S),K!==0&&gt("failed to call OrtRun().");let ue=[],H=[];Gi("wasm ProcessOutputTensor");for(let te=0;te<T;te++){let he=Number(a.getValue(Q+te*o,"*"));if(he===E[te]||P.includes(E[te])){ue.push(i[te]),he!==E[te]&&a._OrtReleaseTensor(he)!==0&&gt("Can't release tensor.");continue}let ce=a.stackSave(),ge=a.stackAlloc(4*o),ae=!1,Ie,ne=0;try{a._OrtGetTensorData(he,ge,ge+o,ge+2*o,ge+3*o)!==0&&gt(`Can't access output tensor data on index ${te}.`);let xe=o===4?"i32":"i64",$e=Number(a.getValue(ge,xe));ne=a.getValue(ge+o,"*");let ie=a.getValue(ge+o*2,"*"),Pe=Number(a.getValue(ge+o*3,xe)),Fe=[];for(let Ne=0;Ne<Pe;Ne++)Fe.push(Number(a.getValue(ie+Ne*o,xe)));a._OrtFree(ie)!==0&&gt("Can't free memory for tensor dims.");let We=Fe.reduce((Ne,et)=>Ne*et,1);Ie=Mn($e);let Xe=g?.outputPreferredLocations[n[te]];if(Ie==="string"){if(Xe==="gpu-buffer"||Xe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ne=[];for(let et=0;et<We;et++){let z=a.getValue(ne+et*o,"*"),L=a.getValue(ne+(et+1)*o,"*"),q=et===We-1?void 0:L-z;Ne.push(a.UTF8ToString(z,q))}ue.push([Ie,Fe,Ne,"cpu"])}else if(Xe==="gpu-buffer"&&We>0){let Ne=a.jsepGetBuffer;if(!Ne)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let et=Ne(ne),z=Fi($e,We);if(z===void 0||!Jd(Ie))throw new Error(`Unsupported data type: ${Ie}`);ae=!0,ue.push([Ie,Fe,{gpuBuffer:et,download:a.jsepCreateDownloader(et,z,Ie),dispose:()=>{a._OrtReleaseTensor(he)!==0&&gt("Can't release tensor.")}},"gpu-buffer"])}else if(Xe==="ml-tensor"&&We>0){let Ne=a.webnnEnsureTensor,et=a.webnnIsGraphInputOutputTypeSupported;if(!Ne||!et)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Fi($e,We)===void 0||!ec(Ie))throw new Error(`Unsupported data type: ${Ie}`);if(!et(e,Ie,!1))throw new Error(`preferredLocation "ml-tensor" for ${Ie} output is not supported by current WebNN Context.`);let z=await Ne(e,ne,$e,Fe,!1);ae=!0,ue.push([Ie,Fe,{mlTensor:z,download:a.webnnCreateMLTensorDownloader(ne,Ie),dispose:()=>{a.webnnReleaseTensorId(ne),a._OrtReleaseTensor(he)}},"ml-tensor"])}else if(Xe==="ml-tensor-cpu-output"&&We>0){let Ne=a.webnnCreateMLTensorDownloader(ne,Ie)(),et=ue.length;ae=!0,H.push((async()=>{let z=[et,await Ne];return a.webnnReleaseTensorId(ne),a._OrtReleaseTensor(he),z})()),ue.push([Ie,Fe,[],"cpu"])}else{let Ne=ul(Ie),et=new Ne(We);new Uint8Array(et.buffer,et.byteOffset,et.byteLength).set(a.HEAPU8.subarray(ne,ne+et.byteLength)),ue.push([Ie,Fe,et,"cpu"])}}finally{a.stackRestore(ce),Ie==="string"&&ne&&a._free(ne),ae||a._OrtReleaseTensor(he)}}g&&!b&&(a._OrtClearBoundOutputs(g.handle)!==0&&gt("Can't clear bound outputs."),Jn.set(e,[d,f,p,g,b,!1]));for(let[te,he]of await Promise.all(H))ue[te][2]=he;return Ki("wasm ProcessOutputTensor"),ue}finally{a.webnnOnRunEnd?.(d),a.stackRestore(N),I.forEach(K=>a._OrtReleaseTensor(K)),E.forEach(K=>a._OrtReleaseTensor(K)),O.forEach(K=>a._free(K)),S!==0&&a._OrtReleaseRunOptions(S),$.forEach(K=>a._free(K))}},vc=e=>{let t=Ct(),r=Jn.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&gt("Can't get an profile file name."),t._OrtFree(i)},wc=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),ei,zr,us,Vs,Hs,xo,Yu,$o,Bi,Pi,jg,B1,P1,D1,N1,U1,L1,F1,j1=pe(()=>{"use strict";Nr(),R1(),Qi(),Yd(),ei=()=>!!St.wasm.proxy&&typeof document<"u",us=!1,Vs=!1,Hs=!1,$o=new Map,Bi=(e,t)=>{let r=$o.get(e);r?r.push(t):$o.set(e,[t])},Pi=()=>{if(us||!Vs||Hs||!zr)throw new Error("worker not ready")},jg=e=>{switch(e.data.type){case"init-wasm":us=!1,e.data.err?(Hs=!0,Yu[1](e.data.err)):(Vs=!0,Yu[0]()),xo&&(URL.revokeObjectURL(xo),xo=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=$o.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},B1=async()=>{if(!Vs){if(us)throw new Error("multiple calls to 'initWasm()' detected.");if(Hs)throw new Error("previous call to 'initWasm()' failed.");if(us=!0,ei())return new Promise((e,t)=>{zr?.terminate(),Ay().then(([r,n])=>{try{zr=n,zr.onerror=s=>t(s),zr.onmessage=jg,Yu=[e,t];let i={type:"init-wasm",in:St};!i.in.wasm.wasmPaths&&(r||pd)&&(i.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-MDYUKy93.wasm",import.meta.url).href}),zr.postMessage(i),xo=r}catch(i){t(i)}},t)});try{await Zd(St.wasm),await hc(St),Vs=!0}catch(e){throw Hs=!0,e}finally{us=!1}}},P1=async e=>{if(ei())return Pi(),new Promise((t,r)=>{Bi("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:St}};zr.postMessage(n)});await mc(St,e)},D1=async e=>ei()?(Pi(),new Promise((t,r)=>{Bi("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};zr.postMessage(n,[e.buffer])})):Xo(e),N1=async(e,t)=>{if(ei()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Pi(),new Promise((r,n)=>{Bi("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),zr.postMessage(i,s)})}else return gc(e,t)},U1=async e=>{if(ei())return Pi(),new Promise((t,r)=>{Bi("release",[t,r]);let n={type:"release",in:e};zr.postMessage(n)});yc(e)},L1=async(e,t,r,n,i,s)=>{if(ei()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Pi(),new Promise((a,o)=>{Bi("run",[a,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:n,options:s}};zr.postMessage(d,wc(l))})}else return bc(e,t,r,n,i,s)},F1=async e=>{if(ei())return Pi(),new Promise((t,r)=>{Bi("end-profiling",[t,r]);let n={type:"end-profiling",in:e};zr.postMessage(n)});vc(e)}}),Zu,Wg,W1,Q$=pe(()=>{"use strict";Nr(),j1(),Be(),Xd(),Ry(),Zu=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Wg=e=>{switch(e[3]){case"cpu":return new Gr(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Jd(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return Gr.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!ec(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return Gr.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},W1=class{async fetchModelAndCopyToWasmMemory(e){return D1(await tc(e))}async loadModel(e,t){hn();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await N1(r,t),Yr()}async dispose(){return U1(this.sessionId)}async run(e,t,r){hn();let n=[],i=[];Object.entries(e).forEach(p=>{let g=p[0],b=p[1],y=this.inputNames.indexOf(g);if(y===-1)throw new Error(`invalid input '${g}'`);n.push(b),i.push(y)});let s=[],a=[];Object.entries(t).forEach(p=>{let g=p[0],b=p[1],y=this.outputNames.indexOf(g);if(y===-1)throw new Error(`invalid output '${g}'`);s.push(b),a.push(y)});let o=n.map((p,g)=>Zu(p,()=>`input "${this.inputNames[i[g]]}"`)),l=s.map((p,g)=>p?Zu(p,()=>`output "${this.outputNames[a[g]]}"`):null),d=await L1(this.sessionId,i,o,a,l,r),f={};for(let p=0;p<d.length;p++)f[this.outputNames[a[p]]]=s[p]??Wg(d[p]);return Yr(),f}startProfiling(){}endProfiling(){F1(this.sessionId)}}}),V1={};_s(V1,{OnnxruntimeWebAssemblyBackend:()=>Cd,initializeFlags:()=>Td,wasmBackend:()=>H1});var Td,Cd,H1,J$=pe(()=>{"use strict";Nr(),j1(),Q$(),Td=()=>{(typeof St.wasm.initTimeout!="number"||St.wasm.initTimeout<0)&&(St.wasm.initTimeout=0);let e=St.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),St.wasm.simd=!1),typeof St.wasm.proxy!="boolean"&&(St.wasm.proxy=!1),typeof St.wasm.trace!="boolean"&&(St.wasm.trace=!1),typeof St.wasm.numThreads!="number"||!Number.isInteger(St.wasm.numThreads)||St.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)St.wasm.numThreads=1;else{let t=typeof navigator>"u"?Dx("node:os").cpus().length:navigator.hardwareConcurrency;St.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Cd=class{async init(e){Td(),await B1(),await P1(e)}async createInferenceSessionHandler(e,t){let r=new W1;return await r.loadModel(e,t),r}},H1=new Cd});Nr();Nr();Nr();var e3="1.30.0";{let e=(J$(),ga(V1)).wasmBackend;cs("webgpu",e,5),cs("webnn",e,5),cs("cpu",e,10),cs("wasm",e,10)}Object.defineProperty(St.versions,"web",{value:e3,enumerable:!0});/**
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
 */function t3(){return typeof navigator>"u"?!1:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Macintosh/.test(navigator.userAgent)}function r3(){return typeof navigator<"u"&&"gpu"in navigator}class n3{session=null;fallbackSegmenter=null;isModelLoading=!1;modelBufferCache=null;backendUsed="wasm";constructor(){St.wasm.wasmPaths="/";const t=typeof window<"u"&&window.crossOriginIsolated;St.wasm.numThreads=t?Math.min(navigator.hardwareConcurrency||4,4):1,St.wasm.simd=!0}async initOnnxModel(t){if(this.session)return!0;if(this.isModelLoading){for(;this.isModelLoading;)await new Promise(r=>setTimeout(r,100));return!!this.session}this.isModelLoading=!0;try{if(!this.modelBufferCache){console.log("[HdMattingEngine] 正在拉取离线神经网络权重...");const r=await fetch(t);if(!r.ok)throw new Error(`模型网络请求失败 (${r.status})`);this.modelBufferCache=await r.arrayBuffer()}return console.log("[HdMattingEngine] 正在初始化高精抠图推理会话 (Wasm SIMD)..."),this.session=await Kd.create(new Uint8Array(this.modelBufferCache),{executionProviders:["wasm"],graphOptimizationLevel:"basic"}),this.backendUsed="wasm",console.log("[HdMattingEngine] 抠图推理会话初始化就绪! 启用后端:",this.backendUsed),this.isModelLoading=!1,!0}catch(r){return this.isModelLoading=!1,console.error("[HdMattingEngine] ONNX 模型加载失败: "+(r?.message||r)+" | "+(r?.stack||"")),!1}}async getFallbackSegmenter(){return this.fallbackSegmenter?this.fallbackSegmenter:new Promise((t,r)=>{const n=new ay.SelfieSegmentation({locateFile:i=>`/mediapipe/${i}`});n.setOptions({modelSelection:0,selfieMode:!1}),n.initialize().then(()=>{this.fallbackSegmenter=n,this.backendUsed="mediapipe-hd",t(n)}).catch(r)})}async segmentHighDefinition(t,r,n="auto"){r?.("准备图像数据...",10);const i=t.width,s=t.height;let a=384;if(n==="deep"?a=512:n==="fast"?a=384:a=!t3()&&r3()?512:384,!this.session&&(r?.("正在载入离线 AI 人像模型...",20),!await this.initOnnxModel("/models/modnet.onnx")||!this.session))throw new Error("离线人像模型加载失败，请刷新页面重试");if(this.session){r?.(a===384?"⚡ 极速神经网络推演中 (发丝精修)...":"🔬 深度发丝级神经网络高精推演中...",45);const f=await this.runOnnxMatting(t,r,a);r?.("精修发丝与边缘羽化...",80);const p=this.compositeCutout(t,f,i,s);return r?.("生成纯透明人像图层...",95),await this.canvasToBlob(p)}r?.("启动备用端侧极速引擎...",40);const o=await this.getFallbackSegmenter(),l=512;let d;if(Math.max(i,s)>l){const f=l/Math.max(i,s);d=document.createElement("canvas"),d.width=Math.round(i*f),d.height=Math.round(s*f);const p=d.getContext("2d");p&&(p.imageSmoothingEnabled=!0,p.imageSmoothingQuality="high",p.drawImage(t,0,0,d.width,d.height))}else if(t instanceof HTMLCanvasElement)d=t;else{d=document.createElement("canvas"),d.width=i,d.height=s;const f=d.getContext("2d");f&&f.drawImage(t,0,0)}return new Promise((f,p)=>{let g=!1;const b=setTimeout(()=>{g||(g=!0,p(new Error("AI 抠图超时，请检查图片或重试")))},15e3);o.onResults(y=>{if(g)return;if(!y.segmentationMask){g=!0,clearTimeout(b),p(new Error("未检测到人像"));return}r?.("精确提取人像轮廓与边缘羽化",80);const x=this.applySegmentationMask(t,y.segmentationMask,i,s);r?.("导出透明 PNG",95),this.canvasToBlob(x).then(T=>{g||(g=!0,clearTimeout(b),f(T))}).catch(T=>{g||(g=!0,clearTimeout(b),p(T))})}),o.send({image:d}).catch(y=>{g||(g=!0,clearTimeout(b),p(y))})})}async runOnnxMatting(t,r,n=384){const i=t.width,s=t.height;let a,o;i>=s?(o=Math.round(n*(s/i)),o=Math.max(32,o-o%32),a=n):(a=Math.round(n*(i/s)),a=Math.max(32,a-a%32),o=n);const l=document.createElement("canvas");l.width=a,l.height=o;const d=l.getContext("2d",{willReadFrequently:!0});if(!d)throw new Error("无法创建推理 Canvas 上下文");d.drawImage(t,0,0,a,o);const f=d.getImageData(0,0,a,o),{data:p}=f,g=new Float32Array(3*a*o),b=a*o;for(let N=0;N<b;N++){const C=p[N*4],V=p[N*4+1],Q=p[N*4+2];g[N]=C/127.5-1,g[b+N]=V/127.5-1,g[b*2+N]=Q/127.5-1}const y=new Gr("float32",g,[1,3,o,a]),x=this.session.inputNames[0];r?.("发丝级 AI 神经网络推理中...",60);const T=await this.session.run({[x]:y}),S=this.session.outputNames[0],I=T[S].data,E=document.createElement("canvas");E.width=a,E.height=o;const O=E.getContext("2d");if(!O)throw new Error("无法创建 Mask Canvas");const P=O.createImageData(a,o);for(let N=0;N<b;N++){let C=I[N];C<0&&(C=0),C>1&&(C=1);const V=Math.round(C*255);P.data[N*4]=255,P.data[N*4+1]=255,P.data[N*4+2]=255,P.data[N*4+3]=V}return O.putImageData(P,0,0),E}compositeCutout(t,r,n,i){const s=document.createElement("canvas");s.width=n,s.height=i;const a=s.getContext("2d");if(!a)throw new Error("无法创建复合图层");return a.drawImage(t,0,0,n,i),a.globalCompositeOperation="destination-in",a.drawImage(r,0,0,n,i),s}applySegmentationMask(t,r,n,i){const s=document.createElement("canvas");s.width=n,s.height=i;const a=s.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("无法创建源图 Canvas 上下文");a.drawImage(t,0,0,n,i);const o=document.createElement("canvas");o.width=n,o.height=i;const l=o.getContext("2d",{willReadFrequently:!0});if(!l)throw new Error("无法创建蒙版 Canvas 上下文");l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(r,0,0,n,i);const d=a.getImageData(0,0,n,i),f=l.getImageData(0,0,n,i),p=d.data,g=f.data,b=n*i;for(let y=0;y<b;y++){const x=y*4,T=Math.max(g[x],g[x+1],g[x+2],g[x+3]);let S=0;if(T<=60)S=0;else if(T>=190)S=1;else{const $=(T-60)/130;S=$*$*(3-2*$)}p[x+3]=Math.round(p[x+3]*S)}return a.putImageData(d,0,0),s}canvasToBlob(t){return new Promise((r,n)=>{t.toBlob(i=>{i?r(i):n(new Error("导出透明 Blob 失败"))},"image/png")})}getBackend(){return this.backendUsed}}const Ed=new n3;typeof window<"u"&&(window.__hdMattingEngine=Ed);async function i3(e,t,r){const n=e.naturalWidth||e.width,i=e.naturalHeight||e.height,s=Math.max(r.widthPx/n,r.heightPx/i)*1.05,a={scale:s,x:(r.widthPx-n*s)/2,y:(r.heightPx-i*s)*.42,headTopY:0,chinY:i*.6,headCenterX:n/2,headHeight:i*.6,success:!1};try{let o;if(t instanceof Blob)try{o=await createImageBitmap(t)}catch{o=await new Promise((ie,Pe)=>{const Fe=new Image;Fe.onload=()=>ie(Fe),Fe.onerror=Pe,Fe.src=URL.createObjectURL(t)})}else o=t;const l=200,d=Math.max(10,Math.round(i/n*l)),f=document.createElement("canvas");f.width=l,f.height=d;const p=f.getContext("2d",{willReadFrequently:!0});if(!p)return a;p.drawImage(o,0,0,l,d);const b=p.getImageData(0,0,l,d).data;let y=-1,x=l/2;for(let ie=0;ie<d;ie++){let Pe=0,Fe=0;for(let We=0;We<l;We++)b[(ie*l+We)*4+3]>45&&(Pe++,Fe+=We);if(Pe>=4){y=ie,x=Fe/Pe;break}}if(y===-1||y>=d*.8)return a;const T=[],S=[],$=[];for(let ie=y;ie<d;ie++){let Pe=l,Fe=-1,We=[];for(let Xe=0;Xe<l;Xe++){const Ne=(ie*l+Xe)*4,et=b[Ne],z=b[Ne+1],L=b[Ne+2],q=b[Ne+3];q>45&&(Xe<Pe&&(Pe=Xe),Xe>Fe&&(Fe=Xe),q>70&&et>50&&z>35&&L>20&&et>z&&z>=L-15&&et-z>6&&et-L>10&&We.push(Xe))}if(Fe>=Pe){const Xe=Fe-Pe,Ne=(Pe+Fe)/2;if(T.push({y:ie,width:Xe,centerX:Ne}),We.length>=3)for(const et of We)Math.abs(et-Ne)<Xe*.45&&(S.push(ie),$.push(et))}}if(T.length<15)return a;const I=T.map((ie,Pe)=>{let Fe=0,We=0;for(let Xe=Math.max(0,Pe-2);Xe<=Math.min(T.length-1,Pe+2);Xe++)Fe+=T[Xe].width,We++;return Fe/We}),E=Math.max(5,Math.min(T.length,Math.round(T.length*.4)));let O=0,P=0;for(let ie=0;ie<E;ie++)I[ie]>P&&(P=I[ie],O=ie);let N=O,C=P,V=!1;for(let ie=O;ie<Math.min(T.length,Math.round(T.length*.65));ie++)if(I[ie]<C)C=I[ie],N=ie;else if(I[ie]>C*1.1&&ie-N>=3){V=!0;break}V||(N=Math.round(T.length*.45));let Q=T[N]?.y||y+(d-y)*.45,de=x;if($.length>10)$.sort((ie,Pe)=>ie-Pe),de=$[Math.floor($.length/2)];else{const ie=T.slice(0,Math.max(1,N)).map(Pe=>Pe.centerX).sort((Pe,Fe)=>Pe-Fe);de=ie[Math.floor(ie.length/2)]||x}const K=n/l,ue=y*K,H=Q*K,te=de*K,he=Math.max(H-ue,i*.25),ce=r.id==="spec_id_card"||r.name.includes("身份证"),ge=r.heightPx*(ce?.075:.085),ae=r.heightPx*(ce?2/3:.58),Ie=r.widthPx*.5,ne=ae/he,xe=Ie-te*ne,$e=ge-ue*ne;return{scale:Math.round(ne*1e3)/1e3,x:Math.round(xe),y:Math.round($e),headTopY:ue,chinY:H,headCenterX:te,headHeight:he,success:!0}}catch(o){return console.warn("[FaceAlignment] 自动对齐计算异常，采用兜底对齐:",o),a}}const s3={class:"relative w-full h-full flex flex-col bg-slate-950 text-slate-100 overflow-hidden select-none"},a3={class:"w-full z-20 flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md gap-2"},o3={class:"flex items-center space-x-2"},l3={class:"bg-slate-800 p-1 rounded-xl flex items-center border border-slate-700/80"},u3={class:"flex items-center space-x-2"},d3={class:"flex items-center space-x-1.5 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1"},c3=["value"],f3={key:0,class:"ml-1 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full"},p3=["disabled"],h3={class:"flex-1 w-full flex flex-col md:flex-row items-center justify-between overflow-y-auto md:overflow-hidden p-2 sm:p-4 gap-3"},m3={class:"w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400"},g3={key:1,class:"relative flex flex-col items-center justify-center w-full h-full"},y3={key:0,class:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 140",preserveAspectRatio:"none"},b3={class:"flex items-center space-x-4 mt-4"},v3=["disabled"],w3={key:0,class:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 140",preserveAspectRatio:"none"},_3={class:"flex items-center space-x-2 mt-2.5 text-xs text-slate-400 flex-wrap justify-center text-center"},x3={key:3,class:"absolute inset-0 z-40 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"},$3={class:"text-sm font-semibold text-slate-100"},S3={class:"w-48 bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden"},k3={class:"w-full md:w-80 lg:w-96 flex flex-col justify-between bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 overflow-y-auto max-h-[85vh]"},T3={class:"bg-slate-800/70 border border-slate-700/70 rounded-xl p-3 space-y-1"},C3={class:"flex items-center justify-between"},E3={class:"text-xs font-bold text-slate-200"},I3={class:"flex items-center justify-between text-xs text-slate-400"},A3={class:"text-[11px] text-slate-500"},O3={class:"space-y-2 bg-slate-800/60 border border-slate-700/80 rounded-xl p-3 shadow-md"},z3={class:"flex items-center justify-between"},M3={key:0,class:"text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-full flex items-center space-x-1 font-medium"},R3={class:"grid grid-cols-2 gap-1.5 p-1 bg-slate-900/80 border border-slate-700/60 rounded-xl text-[11px]"},B3=["disabled"],P3={class:"text-[11px] text-slate-400 leading-snug"},D3={class:"space-y-2.5 bg-slate-800/40 border border-slate-800 rounded-xl p-3"},N3={class:"flex items-center justify-between"},U3={class:"text-[10px] text-blue-400 font-medium"},L3={class:"grid grid-cols-3 sm:grid-cols-4 gap-1.5"},F3=["onClick"],j3={class:"truncate w-full text-center text-[10px]"},W3={class:"pt-2 border-t border-slate-700/60 space-y-1.5"},V3={class:"flex items-center justify-between text-xs"},H3={class:"flex items-center space-x-1.5 text-slate-300"},q3={class:"text-[10px] text-slate-400 font-mono"},G3={class:"flex items-center space-x-2"},K3={class:"relative flex items-center justify-center cursor-pointer group",title:"点击调出系统调色盘/吸管"},X3={class:"flex items-center space-x-2 text-left"},Y3={class:"text-[10px] text-blue-100 opacity-90"},Z3={key:1,class:"space-y-3 bg-slate-800/40 border border-slate-800 rounded-xl p-3"},Q3={class:"flex items-center space-x-2"},J3={class:"w-10 text-right text-xs text-slate-300 font-mono"},eS={class:"flex items-center justify-between pt-1"},tS={class:"flex items-center space-x-1 text-xs text-slate-400 cursor-pointer"},rS={class:"space-y-2 pt-2 border-t border-slate-800"},nS={class:"grid grid-cols-2 gap-2"},iS=["disabled"],sS=["disabled"],aS={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"},oS={class:"bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm p-5 space-y-4"},lS={class:"space-y-3 text-xs"},uS={class:"grid grid-cols-2 gap-3"},dS={class:"text-[11px] text-slate-400"},cS={class:"flex justify-end space-x-2 pt-2"},fS=wa({__name:"PhotoStudio",props:{trayCount:{}},emits:["photo-added-to-tray","open-single-export","open-tray","open-packing","show-toast"],setup(e,{emit:t}){const r=e,n=t,i=Ke("upload"),s=Ke(Xl),a=Ke(Xl[0].id),o=Ke(Xl[0]),l=Ke(Cn),d=Ke(Cn[1]),f=Ke("#D9001B"),p=Ke("#D9001B"),g=Ke(!0),b=Ke(!1),y=Ke(!1),x=Ke("fast"),T=Ke(0),S=Ke(""),$=Ke(null),I=Ke(null),E=Ke(null),O=Ke(null),P=ia(()=>!!I.value),N=Ke(null),C=Ke(null),V=Ke(null),Q=Ke(null),de=Ke(!1),K=Ke("user");let ue=null,H=null;const te=new Mx;let he=null;const ce=Ke(100),ge=Ke(1),ae=Vi({scale:1,x:0,y:0,rotation:0});let Ie=!1,ne=!1,xe=0,$e=0,ie=0,Pe=0,Fe=0,We=100,Xe=0,Ne=0,et=0;const z=Ke(!1),L=Vi({name:"自定义规格",widthMm:35,heightMm:45}),q=ia(()=>{const G=bs(L.widthMm),F=bs(L.heightMm);return`${G} × ${F} px`}),Z=Ke(null),se=Vi({width:295,height:413});function oe(){const G=o.value,F=G.widthPx/G.heightPx,J=Z.value;let De=460,it=500;J&&J.clientWidth>0&&J.clientHeight>0?(De=Math.max(160,J.clientWidth-32),it=Math.max(180,J.clientHeight-70)):typeof window<"u"&&(De=Math.min(window.innerWidth-32,460),it=Math.min(window.innerHeight*.46,500));let mt=De,Ye=mt/F;Ye>it&&(Ye=it,mt=Ye*F),se.width=Math.round(mt),se.height=Math.round(Ye)}const ye=ia(()=>({width:`${se.width}px`,height:`${se.height}px`,aspectRatio:`${o.value.widthPx} / ${o.value.heightPx}`}));Co(o,()=>{oe()});let me=null;_a(()=>{window.addEventListener("paste",tt),window.addEventListener("mousemove",yn),window.addEventListener("mouseup",_t),window.addEventListener("touchmove",Un,{passive:!1}),window.addEventListener("touchend",Tr),window.addEventListener("touchcancel",Tr),oe(),typeof ResizeObserver<"u"&&Z.value&&(me=new ResizeObserver(()=>{oe()}),me.observe(Z.value)),window.addEventListener("resize",oe),typeof window<"u"&&(window.__IDPHOTO_STUDIO__={handleDoubleTapZoom:vr,applyZoomPercent:Zt,getZoomPercent:()=>ce.value,hasSourceImage:()=>P.value,getContainerSize:()=>({...se}),getSpec:()=>({...o.value}),loadFile:Ve}),setTimeout(()=>{Ed.initOnnxModel("/models/modnet.onnx").catch(()=>{})},300)}),Fd(()=>{me&&me.disconnect(),window.removeEventListener("resize",oe),window.removeEventListener("paste",tt),window.removeEventListener("mousemove",yn),window.removeEventListener("mouseup",_t),window.removeEventListener("touchmove",Un),window.removeEventListener("touchend",Tr),window.removeEventListener("touchcancel",Tr),or()});async function be(G){if(i.value==="upload"&&G==="upload"&&P.value){ve();return}i.value=G,G==="camera"?await ar():(or(),await ii(),Lt())}function le(){if(a.value==="custom"){z.value=!0;return}const G=s.value.find(F=>F.id===a.value);if(G){if(o.value=G,(G.id==="spec_id_card"||G.name.includes("身份证"))&&d.value.value!=="original"){const F=l.value.find(J=>J.id==="bg_white");F&&(d.value=F),n("show-toast","已切换至《居民身份证制证标准 GA461—2004》，并自动匹配官方纯白底色")}zt()}}function Ce(){const G=Ox(L.name,L.widthMm,L.heightMm);s.value.push(G),a.value=G.id,o.value=G,z.value=!1,Pt()}function ve(){$.value?.click()}function Oe(G){const F=G.target;F.files&&F.files[0]&&Ve(F.files[0]),F.value=""}function Me(G){b.value=!1,G.dataTransfer?.files&&G.dataTransfer.files[0]&&Ve(G.dataTransfer.files[0])}function tt(G){if(!G.clipboardData)return;const F=G.clipboardData.items;for(let J=0;J<F.length;J++)if(F[J].type.startsWith("image/")){const De=F[J].getAsFile();if(De){Ve(De);break}}}async function Ve(G){E.value=G,O.value=null,Cr=null;const F=URL.createObjectURL(G),J=new Image;J.onload=async()=>{I.value=J,i.value="upload";const De=Cn.find(it=>it.id==="bg_original")||Cn[Cn.length-1];d.value=De,Pt(),await ii(),Lt()},J.src=F}function lt(G){x.value!==G&&(x.value=G,O.value=null,Cr=null,n("show-toast",G==="fast"?"已切换至 ⚡ 极速轻量引擎 (手机推荐·秒级出图)":"已切换至 🔬 深度发丝级引擎 (电脑高精)"))}async function yt(G=!1,F=!0){if(!(!I.value||y.value)){if(!G&&O.value){if(F){const J=Cn.find(De=>De.id==="bg_transparent")||Cn[0];d.value=J,Lt()}return}y.value=!0,T.value=15,S.value=x.value==="fast"?"⚡ 正在准备极速人像引擎...":"🔬 正在准备深度发丝级模型...",await ii(),await new Promise(J=>setTimeout(J,80));try{const J=document.createElement("canvas");J.width=I.value.naturalWidth,J.height=I.value.naturalHeight;const De=J.getContext("2d");if(!De)throw new Error("无法创建离屏图层");De.drawImage(I.value,0,0);const it=await Ed.segmentHighDefinition(J,(Dt,tr)=>{S.value=Dt,T.value=tr},x.value),mt=URL.createObjectURL(it),Ye=new Image;if(await new Promise((Dt,tr)=>{Ye.onload=Dt,Ye.onerror=tr,Ye.src=mt}),Cr=Ye,O.value=it,F){const Dt=Cn.find(tr=>tr.id==="bg_transparent");Dt&&(d.value=Dt)}n("show-toast","✅ 已成功提取人物与发丝！原背景已彻底消除，请在下方选择所需底色")}catch(J){console.error("抠图失败:",J),n("show-toast",`抠图提示: ${J?.message||"未能成功提取，请检查图片"}`)}finally{y.value=!1,await zt(),await ii(),Lt()}}}async function kt(G){d.value=G,G.value!=="original"&&!O.value&&I.value?await yt(!1,!1):Lt()}function er(){p.value=f.value.toUpperCase(),mr(f.value)}function Bt(){let G=p.value.trim();G.startsWith("#")||(G="#"+G),/^#[0-9A-Fa-f]{6}$/.test(G)?(f.value=G,mr(G)):n("show-toast","请输入有效的十六进制颜色码，如 #D9001B")}function kr(){Bt()}async function mr(G){const F=zx(G);await kt(F)}async function zt(){if(!I.value)return;O.value||(n("show-toast","正在自动提取人物轮廓以进行精准国标对齐..."),await yt(!1,!1));const G=Cr||O.value||E.value;if(G)try{const F=await i3(I.value,G,o.value);if(ae.scale=F.scale,ae.x=F.x,ae.y=F.y,ae.rotation=0,ge.value>0&&(ce.value=Math.round(F.scale/ge.value*100)),await ii(),Lt(),F.success){const De=o.value.id==="spec_id_card"||o.value.name.includes("身份证")?"已按二代居民身份证(GA461-2004)标准自动对齐（头部占2/3、脸宽15±1mm、白底无边框）":"已按国家证件照标准自动对齐（头顶留白约8.5%，人脸垂直居中）";n("show-toast",De)}}catch(F){console.warn("自动对齐计算失败，恢复默认居中:",F),Pt()}}function Pt(){if(!I.value)return;const G=o.value,F=I.value.naturalWidth,J=I.value.naturalHeight,De=G.widthPx/F,it=G.heightPx/J;ge.value=Math.max(De,it),ce.value=100,ae.scale=ge.value*1.05,ae.rotation=0,ae.x=(G.widthPx-F*ae.scale)/2,ae.y=(G.heightPx-J*ae.scale)*.45,Lt()}function Zt(G){if(!I.value)return;o.value;const F=I.value.naturalWidth,J=I.value.naturalHeight,De=ae.scale,it=ge.value*(G/100);if(it<=0)return;const mt=ae.x+F*De/2,Ye=ae.y+J*De/2;ae.scale=it,ae.x=mt-F*it/2,ae.y=Ye-J*it/2,ce.value=Math.round(G),Lt()}function mn(){Zt(ce.value)}function pi(){const G=Math.min(300,ce.value+5);ce.value=G,Zt(G)}function Ur(){const G=Math.max(15,ce.value-5);ce.value=G,Zt(G)}function gn(G){const F=G.deltaY<0?5:-5,J=Math.min(300,Math.max(15,ce.value+F));ce.value=J,Zt(J)}function hi(G){ae.rotation=(ae.rotation+G)%360,Lt()}function es(G){Ie=!0,xe=G.clientX,$e=G.clientY,ie=ae.x,Pe=ae.y}function yn(G){if(!Ie)return;const F=G.clientX-xe,J=G.clientY-$e;ae.x=ie+F,ae.y=Pe+J,Lt()}function mi(){vr()}function vr(G,F){I.value&&(ce.value>120?(Zt(100),n("show-toast","已恢复 100% 贴合尺寸")):(Zt(180),n("show-toast","已双击放大至 180% 细节特写")))}function Nn(G){if(G.touches.length===1){const F=G.touches[0],J=Date.now(),De=J-Xe,it=Math.hypot(F.clientX-Ne,F.clientY-et);if(De<320&&it<35){G.cancelable&&G.preventDefault(),vr(F.clientX,F.clientY),Xe=0,Ie=!1,ne=!1;return}Xe=J,Ne=F.clientX,et=F.clientY,Ie=!0,ne=!1,xe=F.clientX,$e=F.clientY,ie=ae.x,Pe=ae.y}else G.touches.length===2&&(ne=!0,Ie=!1,Fe=Math.hypot(G.touches[0].clientX-G.touches[1].clientX,G.touches[0].clientY-G.touches[1].clientY),We=ce.value)}function Un(G){if(G.touches.length===1&&Ie){const F=G.touches[0].clientX-xe,J=G.touches[0].clientY-$e;ae.x=ie+F,ae.y=Pe+J,Lt()}else if(G.touches.length===2&&ne){G.cancelable&&G.preventDefault();const F=Math.hypot(G.touches[0].clientX-G.touches[1].clientX,G.touches[0].clientY-G.touches[1].clientY);if(Fe>10){const J=F/Fe,De=Math.min(300,Math.max(15,Math.round(We*J)));Zt(De)}}}function Tr(G){G&&G.touches&&G.touches.length>0?G.touches.length===1&&(ne=!1,Ie=!0,xe=G.touches[0].clientX,$e=G.touches[0].clientY,ie=ae.x,Pe=ae.y):(Ie=!1,ne=!1)}function _t(){Ie=!1,ne=!1}let Cr=null;async function Lt(){if(!N.value||!I.value)return;const G=N.value,F=o.value;G.width=F.widthPx,G.height=F.heightPx;const J=G.getContext("2d");if(!J)return;const De=G.width,it=G.height;if(J.clearRect(0,0,De,it),d.value.value==="original"){bn(J,I.value);return}if(d.value.value!=="transparent"){if(d.value.isGradient&&d.value.gradientStops){const mt=J.createLinearGradient(0,0,0,it);mt.addColorStop(0,d.value.gradientStops[0]),mt.addColorStop(1,d.value.gradientStops[1]),J.fillStyle=mt}else J.fillStyle=d.value.value;J.fillRect(0,0,De,it)}if(Cr)bn(J,Cr);else if(O.value){const mt=URL.createObjectURL(O.value),Ye=new Image;Ye.onload=()=>{Cr=Ye,bn(J,Ye)},Ye.src=mt}else bn(J,I.value)}function bn(G,F){G.save();const J=ae.x+F.naturalWidth*ae.scale/2,De=ae.y+F.naturalHeight*ae.scale/2;G.translate(J,De),G.rotate(ae.rotation*Math.PI/180),G.drawImage(F,-(F.naturalWidth*ae.scale)/2,-(F.naturalHeight*ae.scale)/2,F.naturalWidth*ae.scale,F.naturalHeight*ae.scale),G.restore()}async function ar(){or();try{const G=await navigator.mediaDevices.getUserMedia({video:{facingMode:K.value,width:{ideal:1920},height:{ideal:1080}},audio:!1});ue=G,V.value&&(V.value.srcObject=G,await V.value.play(),de.value=!0,await te.init(),te.setOnResult(F=>{he=F}),lr())}catch(G){console.warn("相机权限获取失败:",G),de.value=!1}}function or(){ue&&(ue.getTracks().forEach(G=>G.stop()),ue=null),H&&cancelAnimationFrame(H),de.value=!1}async function gi(){K.value=K.value==="user"?"environment":"user",await ar()}function Et(G,F,J,De,it,mt){if(!J||!De||!it||!mt)return;const Ye=Math.max(it/J,mt/De),Dt=it/Ye,tr=mt/Ye,bi=(J-Dt)/2,jn=(De-tr)/2;G.drawImage(F,bi,jn,Dt,tr,0,0,it,mt)}function lr(){const G=()=>{if(V.value&&Q.value&&V.value.readyState>=2){const F=Q.value,J=V.value;if((F.width!==o.value.widthPx||F.height!==o.value.heightPx)&&(F.width=o.value.widthPx,F.height=o.value.heightPx),te.sendFrame(J),he&&d.value.value!=="original")te.renderComposite(F,J,he,d.value,K.value==="user");else{const De=F.getContext("2d");De&&(De.save(),K.value==="user"&&(De.translate(F.width,0),De.scale(-1,1)),Et(De,J,J.videoWidth,J.videoHeight,F.width,F.height),De.restore())}}H=requestAnimationFrame(G)};H=requestAnimationFrame(G)}async function Ln(){if(!V.value||y.value)return;const G=V.value,F=o.value,J=F.widthPx*2,De=F.heightPx*2,it=document.createElement("canvas");it.width=J,it.height=De;const mt=it.getContext("2d");mt&&(K.value==="user"&&(mt.translate(it.width,0),mt.scale(-1,1)),Et(mt,G,G.videoWidth,G.videoHeight,J,De),it.toBlob(async Ye=>{Ye&&(or(),await Ve(Ye))},"image/jpeg",.98))}async function yi(){if(!N.value)throw new Error("画布未就绪");return new Promise((G,F)=>{N.value.toBlob(J=>{J?G({composedBlob:J,previewUrl:N.value.toDataURL("image/jpeg",.9)}):F(new Error("导出失败"))},"image/jpeg",.98)})}async function vn(){if(!(!E.value||!I.value))try{const{composedBlob:G,previewUrl:F}=await yi(),J={id:`tray_${Date.now()}_${Math.random().toString(36).substring(2,6)}`,memberName:`成员 ${r.trayCount+1}`,originalBlob:E.value,cutoutBlob:O.value||E.value,composedBlob:G,transform:{scale:ae.scale,x:ae.x,y:ae.y,rotation:ae.rotation},previewUrl:F,spec:{...o.value},printCount:4,selectedBg:{...d.value},createdAt:Date.now()};n("photo-added-to-tray",J),n("show-toast",`已将 ${o.value.name} 证件照加入待印托盘`)}catch(G){console.error("加入托盘失败:",G)}}async function Fn(){if(!(!E.value||!I.value))try{const{composedBlob:G,previewUrl:F}=await yi(),J={id:`export_${Date.now()}`,memberName:"证件照",originalBlob:E.value,cutoutBlob:O.value||E.value,composedBlob:G,transform:{scale:ae.scale,x:ae.x,y:ae.y,rotation:ae.rotation},previewUrl:F,spec:{...o.value},printCount:1,selectedBg:{...d.value},createdAt:Date.now()};n("open-single-export",J)}catch(G){console.error("打开单张导出失败:",G)}}return(G,F)=>(He(),ot("div",s3,[U("input",{ref_key:"fileInputRef",ref:$,type:"file",accept:"image/*",class:"hidden",onChange:Oe},null,544),U("header",a3,[U("div",o3,[U("div",l3,[U("button",{onClick:F[0]||(F[0]=J=>be("upload")),class:_r(["flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition",i.value==="upload"?"bg-blue-600 text-white shadow":"text-slate-400 hover:text-slate-200"])},[qe(ut(kx),{class:"w-3.5 h-3.5"}),F[20]||(F[20]=U("span",null,"上传/拖入照片",-1))],2),U("button",{onClick:F[1]||(F[1]=J=>be("camera")),class:_r(["flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition",i.value==="camera"?"bg-blue-600 text-white shadow":"text-slate-400 hover:text-slate-200"])},[qe(ut(hx),{class:"w-3.5 h-3.5"}),F[21]||(F[21]=U("span",null,"自拍拍摄",-1))],2)]),F[22]||(F[22]=U("div",{class:"hidden sm:flex items-center space-x-1 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2.5 py-1 rounded-full"},[U("span",{class:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),U("span",null,"100% 离线端侧处理 · 绝不上传服务器")],-1))]),U("div",u3,[U("div",d3,[F[24]||(F[24]=U("span",{class:"text-xs text-slate-400"},"规格:",-1)),br(U("select",{"onUpdate:modelValue":F[2]||(F[2]=J=>a.value=J),onChange:le,class:"bg-transparent text-xs font-medium text-slate-100 focus:outline-none cursor-pointer"},[(He(!0),ot(Ft,null,gs(s.value,J=>(He(),ot("option",{key:J.id,value:J.id,class:"bg-slate-800 text-slate-100"},Qe(J.name)+" ("+Qe(J.widthMm)+"×"+Qe(J.heightMm)+"mm) ",9,c3))),128)),F[23]||(F[23]=U("option",{value:"custom",class:"bg-slate-800 text-slate-100"},"⚙️ 自定义尺寸...",-1))],544),[[ny,a.value]])]),U("button",{onClick:F[3]||(F[3]=J=>G.$emit("open-tray")),class:"relative flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"},[qe(ut(sy),{class:"w-4 h-4 text-blue-400"}),F[25]||(F[25]=U("span",{class:"text-xs font-medium"},"托盘",-1)),e.trayCount>0?(He(),ot("span",f3,Qe(e.trayCount),1)):Wt("",!0)]),U("button",{onClick:F[4]||(F[4]=J=>G.$emit("open-packing")),disabled:e.trayCount===0,class:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-semibold shadow transition"},[qe(ut(Fo),{class:"w-3.5 h-3.5"}),F[26]||(F[26]=U("span",{class:"hidden sm:inline"},"混排拼版",-1))],8,p3)])]),U("main",h3,[U("section",{ref_key:"editorSectionRef",ref:Z,class:"relative flex-1 w-full min-h-[340px] md:min-h-[380px] flex items-center justify-center bg-slate-900/60 rounded-2xl border border-slate-800/80 overflow-hidden shadow-inner p-2 sm:p-3"},[i.value==="upload"&&!P.value?(He(),ot("div",{key:0,class:"w-full max-w-md p-6 flex flex-col items-center justify-center text-center space-y-4 border-2 border-dashed border-slate-700 hover:border-blue-500 rounded-3xl bg-slate-900/40 transition cursor-pointer",onDragover:F[5]||(F[5]=ao(J=>b.value=!0,["prevent"])),onDragleave:F[6]||(F[6]=ao(J=>b.value=!1,["prevent"])),onDrop:ao(Me,["prevent"]),onClick:ve},[U("div",m3,[qe(ut(Sx),{class:"w-8 h-8"})]),F[27]||(F[27]=Ms('<div data-v-4f284a88><h3 class="text-base font-semibold text-slate-200" data-v-4f284a88>点击或将照片拖拽至此处</h3><p class="text-xs text-slate-400 mt-1" data-v-4f284a88>支持 JPG / PNG / WebP 格式，也可直接使用 <kbd class="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300" data-v-4f284a88>Ctrl + V</kbd> 粘贴</p></div><div class="text-[11px] text-slate-500 bg-slate-800/60 px-4 py-2 rounded-xl border border-slate-700/60 space-y-0.5 text-left w-full" data-v-4f284a88><p class="font-medium text-slate-400" data-v-4f284a88>💡 拍摄或选图建议：</p><p data-v-4f284a88>1. 建议正面免冠，双肩自然平齐</p><p data-v-4f284a88>2. 光线明亮均匀，头发不遮挡眉毛与双耳</p><p data-v-4f284a88>3. 任何背景均可，系统会自动进行发丝级抠图换底</p></div>',2))],32)):i.value==="camera"?(He(),ot("div",g3,[U("video",{ref_key:"cameraVideoRef",ref:V,playsinline:"",autoplay:"",muted:"",class:"hidden"},null,512),U("div",{class:"relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/80 transition-all duration-300 flex-shrink-0 flex items-center justify-center",style:ni([{"touch-action":"none"},{width:ye.value.width,height:ye.value.height,aspectRatio:ye.value.aspectRatio}])},[U("canvas",{ref_key:"cameraCanvasRef",ref:Q,class:"w-full h-full block object-cover",style:{"aspect-ratio":"inherit"}},null,512),g.value?(He(),ot("svg",y3,[o.value.id==="spec_id_card"?(He(),ot(Ft,{key:0},[F[28]||(F[28]=Ms('<line x1="10" y1="10.5" x2="90" y2="10.5" stroke="#f59e0b" stroke-width="0.9" stroke-dasharray="3,3" opacity="0.9" data-v-4f284a88></line><text x="50" y="8" font-size="3.5" fill="#fde68a" text-anchor="middle" data-v-4f284a88>GA461 顶端留白区</text><ellipse cx="50" cy="57" rx="29" ry="46.5" fill="none" stroke="#fbbf24" stroke-width="1.3" stroke-dasharray="4,3" opacity="0.9" data-v-4f284a88></ellipse><line x1="21" y1="57" x2="79" y2="57" stroke="#fbbf24" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.7" data-v-4f284a88></line><text x="50" y="54" font-size="3.2" fill="#fde68a" text-anchor="middle" data-v-4f284a88>脸部宽度 15±1mm</text><line x1="15" y1="103.5" x2="85" y2="103.5" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8" data-v-4f284a88></line><text x="50" y="108" font-size="3.3" fill="#fde68a" text-anchor="middle" data-v-4f284a88>下巴基准线 (头部占尺寸 2/3)</text><line x1="50" y1="5" x2="50" y2="135" stroke="#fbbf24" stroke-width="0.5" stroke-dasharray="2,4" opacity="0.4" data-v-4f284a88></line>',8))],64)):(He(),ot(Ft,{key:1},[F[29]||(F[29]=Ms('<line x1="15" y1="12" x2="85" y2="12" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8" data-v-4f284a88></line><text x="50" y="9" font-size="3.5" fill="#93c5fd" text-anchor="middle" data-v-4f284a88>头顶留白区</text><ellipse cx="50" cy="46" rx="24" ry="30" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.85" data-v-4f284a88></ellipse><line x1="30" y1="44" x2="70" y2="44" stroke="#38bdf8" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.6" data-v-4f284a88></line><path d="M 12 128 Q 30 92, 50 94 Q 70 92, 88 128" fill="none" stroke="#60a5fa" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8" data-v-4f284a88></path><text x="50" y="100" font-size="3.5" fill="#93c5fd" text-anchor="middle" data-v-4f284a88>双肩对齐基准</text><line x1="50" y1="5" x2="50" y2="135" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="2,4" opacity="0.4" data-v-4f284a88></line>',7))],64))])):Wt("",!0)],4),U("div",b3,[U("button",{onClick:gi,class:"p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition",title:"翻转镜头"},[qe(ut(vx),{class:"w-5 h-5"})]),U("button",{onClick:Ln,disabled:y.value,class:"p-2 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/30 active:scale-90 transition disabled:opacity-50"},[...F[30]||(F[30]=[U("div",{class:"w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-transparent"},[U("div",{class:"w-10 h-10 rounded-full bg-white"})],-1)])],8,v3)])])):(He(),ot("div",{key:2,class:"relative flex flex-col items-center justify-center w-full h-full p-2",onWheel:ao(gn,["prevent"])},[U("div",{ref_key:"viewportContainerRef",ref:C,class:"relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/80 cursor-grab active:cursor-grabbing transition-all duration-200 canvas-checkerboard select-none flex-shrink-0 flex items-center justify-center",style:ni([{"touch-action":"none"},{width:ye.value.width,height:ye.value.height,aspectRatio:ye.value.aspectRatio}]),onMousedown:es,onTouchstart:Nn,onDblclick:mi},[U("canvas",{ref_key:"editorCanvasRef",ref:N,class:"w-full h-full block pointer-events-none",style:{"object-fit":"contain","aspect-ratio":"inherit"}},null,512),g.value?(He(),ot("svg",w3,[o.value.id==="spec_id_card"?(He(),ot(Ft,{key:0},[F[31]||(F[31]=Ms('<line x1="10" y1="10.5" x2="90" y2="10.5" stroke="#f59e0b" stroke-width="0.9" stroke-dasharray="3,3" opacity="0.9" data-v-4f284a88></line><text x="50" y="8" font-size="3.5" fill="#fde68a" text-anchor="middle" data-v-4f284a88>GA461 顶端留白区</text><ellipse cx="50" cy="57" rx="29" ry="46.5" fill="none" stroke="#fbbf24" stroke-width="1.3" stroke-dasharray="4,3" opacity="0.9" data-v-4f284a88></ellipse><line x1="21" y1="57" x2="79" y2="57" stroke="#fbbf24" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.7" data-v-4f284a88></line><text x="50" y="54" font-size="3.2" fill="#fde68a" text-anchor="middle" data-v-4f284a88>脸部宽度 15±1mm</text><line x1="15" y1="103.5" x2="85" y2="103.5" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8" data-v-4f284a88></line><text x="50" y="108" font-size="3.3" fill="#fde68a" text-anchor="middle" data-v-4f284a88>下巴基准线 (头部占尺寸 2/3)</text><line x1="50" y1="5" x2="50" y2="135" stroke="#fbbf24" stroke-width="0.5" stroke-dasharray="2,4" opacity="0.4" data-v-4f284a88></line>',8))],64)):(He(),ot(Ft,{key:1},[F[32]||(F[32]=Ms('<line x1="15" y1="12" x2="85" y2="12" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8" data-v-4f284a88></line><text x="50" y="9" font-size="3.5" fill="#93c5fd" text-anchor="middle" data-v-4f284a88>头顶留白线</text><ellipse cx="50" cy="46" rx="24" ry="30" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.85" data-v-4f284a88></ellipse><line x1="30" y1="44" x2="70" y2="44" stroke="#38bdf8" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.6" data-v-4f284a88></line><path d="M 12 128 Q 30 92, 50 94 Q 70 92, 88 128" fill="none" stroke="#60a5fa" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8" data-v-4f284a88></path><text x="50" y="100" font-size="3.5" fill="#93c5fd" text-anchor="middle" data-v-4f284a88>双肩对准线</text><line x1="50" y1="5" x2="50" y2="135" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="2,4" opacity="0.4" data-v-4f284a88></line>',7))],64))])):Wt("",!0)],36),U("div",_3,[U("span",null,"🖱️ 拖拽平移 · 双指捏合/双击缩放 ("+Qe(ce.value)+"%)",1),U("button",{onClick:Pt,class:"text-blue-400 hover:text-blue-300 underline text-xs ml-1 font-medium"}," 居中复位 ")])],32)),y.value?(He(),ot("div",x3,[qe(ut(fd),{class:"w-10 h-10 text-blue-500 animate-spin mb-3"}),U("h4",$3,Qe(S.value||"AI 正在进行发丝级抠图..."),1),F[33]||(F[33]=U("p",{class:"text-xs text-slate-400 mt-1"},"本地端侧加速中，完全无需联网",-1)),U("div",S3,[U("div",{class:"bg-blue-500 h-full transition-all duration-200",style:ni({width:`${T.value}%`})},null,4)])])):Wt("",!0)],512),U("aside",k3,[U("div",T3,[U("div",C3,[U("span",E3,Qe(o.value.name),1),F[34]||(F[34]=U("span",{class:"text-[11px] text-blue-400 font-mono"},"300 DPI",-1))]),U("div",I3,[U("span",null,"物理尺寸: "+Qe(o.value.widthMm)+" × "+Qe(o.value.heightMm)+" mm",1),U("span",null,"分辨率: "+Qe(o.value.widthPx)+" × "+Qe(o.value.heightPx)+" px",1)]),U("p",A3,Qe(o.value.description),1)]),U("div",O3,[U("div",z3,[F[36]||(F[36]=U("span",{class:"text-xs font-bold text-slate-100 flex items-center space-x-1.5"},[U("span",{class:"w-4 h-4 rounded-full bg-blue-600 text-[10px] text-white flex items-center justify-center font-bold"},"1"),U("span",null,"第一步：一键提取人物 (消除背景)")],-1)),O.value?(He(),ot("span",M3,[qe(ut(rp),{class:"w-3 h-3"}),F[35]||(F[35]=U("span",null,"人物已单独抠出",-1))])):Wt("",!0)]),U("div",R3,[U("button",{type:"button",onClick:F[7]||(F[7]=J=>lt("fast")),class:_r(["py-1.5 px-2 rounded-lg font-medium transition flex items-center justify-center space-x-1",x.value==="fast"?"bg-blue-600 text-white shadow-sm":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"])},[...F[37]||(F[37]=[U("span",null,"⚡ 极速引擎 (手机推荐·秒出)",-1)])],2),U("button",{type:"button",onClick:F[8]||(F[8]=J=>lt("deep")),class:_r(["py-1.5 px-2 rounded-lg font-medium transition flex items-center justify-center space-x-1",x.value==="deep"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"])},[...F[38]||(F[38]=[U("span",null,"🔬 深度发丝 (电脑高精)",-1)])],2)]),U("button",{onClick:F[9]||(F[9]=J=>yt(!0,!0)),disabled:!P.value||y.value,class:_r(["w-full py-2.5 px-3 rounded-xl flex items-center justify-center space-x-2 text-xs font-bold transition shadow-lg",O.value?"bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600":"bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-400 text-white shadow-blue-500/25 active:scale-98"])},[y.value?(He(),qi(ut(fd),{key:0,class:"w-4 h-4 animate-spin text-white"})):(He(),qi(ut(xx),{key:1,class:"w-4 h-4 text-amber-300"})),U("span",null,Qe(y.value?x.value==="fast"?"⚡ 正在极速抠图出人像...":"🔬 深度模型正在精细推演中...":O.value?"重新一键抠图 (消除背景)":"🪄 一键智能抠图 (只提取人物·消除背景)"),1)],10,B3),U("p",P3,Qe(O.value?"✅ 原图背景已彻底消除！请在下方【第二步】为您抠出的人物随意换上所需的底色：":"点击后将智能识别人物轮廓与发丝，直接把原图杂乱背景消除为纯透明底。"),1)]),U("div",D3,[U("div",N3,[F[39]||(F[39]=U("span",{class:"text-xs font-bold text-slate-100 flex items-center space-x-1.5"},[U("span",{class:"w-4 h-4 rounded-full bg-indigo-600 text-[10px] text-white flex items-center justify-center font-bold"},"2"),U("span",null,"第二步：按需选择背景颜色")],-1)),U("span",U3," 当前: "+Qe(d.value.name),1)]),U("div",L3,[(He(!0),ot(Ft,null,gs(l.value,J=>(He(),ot("button",{key:J.id,onClick:De=>kt(J),class:_r(["flex flex-col items-center justify-center p-1.5 rounded-xl border transition-all text-[11px]",d.value.id===J.id?"border-blue-500 bg-blue-950/50 text-blue-300 font-semibold shadow":"border-slate-800 hover:border-slate-700 bg-slate-800/60 text-slate-400"])},[U("span",{class:_r(["w-6 h-6 rounded-full mb-1 flex items-center justify-center shadow-sm",J.previewClass]),style:ni(J.previewClass?{}:{backgroundColor:J.value})},[d.value.id===J.id?(He(),qi(ut(rp),{key:0,class:_r(["w-3.5 h-3.5",J.id==="bg_white"?"text-slate-900":"text-white"])},null,8,["class"])):Wt("",!0)],6),U("span",j3,Qe(J.name),1)],10,F3))),128))]),U("div",W3,[U("div",V3,[U("div",H3,[qe(ut(np),{class:"w-3.5 h-3.5 text-amber-400"}),F[40]||(F[40]=U("span",{class:"font-medium"},"任意自定义背景色:",-1))]),U("span",q3,Qe(f.value.toUpperCase()),1)]),U("div",G3,[U("label",K3,[br(U("input",{type:"color","onUpdate:modelValue":F[10]||(F[10]=J=>f.value=J),onInput:er,class:"sr-only"},null,544),[[An,f.value]]),U("span",{class:"w-8 h-8 rounded-lg shadow-inner border-2 border-slate-600 group-hover:border-blue-400 transition flex items-center justify-center text-xs",style:ni({backgroundColor:f.value})},[qe(ut(np),{class:"w-4 h-4 text-white drop-shadow opacity-80"})],4)]),br(U("input",{"onUpdate:modelValue":F[11]||(F[11]=J=>p.value=J),onKeyup:ox(Bt,["enter"]),placeholder:"#D9001B",class:"flex-1 px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-100 uppercase focus:outline-none focus:border-blue-500"},null,544),[[An,p.value]]),U("button",{onClick:kr,class:"px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium shadow transition"}," 应用底色 ")])])]),P.value?(He(),ot("button",{key:0,onClick:zt,class:"w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20 transition active:scale-95 group border border-blue-400/30"},[U("div",X3,[qe(ut($x),{class:"w-4 h-4 text-amber-300 animate-pulse"}),U("div",null,[F[41]||(F[41]=U("div",{class:"text-xs font-bold leading-tight flex items-center space-x-1"},[U("span",null,"AI 智能人脸国标对齐")],-1)),U("div",Y3,Qe(o.value.id==="spec_id_card"||o.value.name.includes("身份证")?"GA461标准：头部占2/3·脸宽15±1mm":"头顶留白约8.5%，居中黄金比例"),1)])]),F[42]||(F[42]=U("span",{class:"text-[11px] bg-white/20 group-hover:bg-white/30 px-2 py-0.5 rounded-full font-medium transition"},"一键对齐",-1))])):Wt("",!0),P.value?(He(),ot("div",Z3,[U("div",{class:"flex items-center justify-between text-xs"},[F[43]||(F[43]=U("span",{class:"font-medium text-slate-300"},"缩放大小 (可放大/缩小)",-1)),U("button",{onClick:Pt,class:"text-[11px] text-blue-400 hover:text-blue-300 underline"}," 复位 100% ")]),U("div",Q3,[U("button",{onClick:Ur,class:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition",title:"缩小"},[qe(ut(Ex),{class:"w-3.5 h-3.5"})]),br(U("input",{"onUpdate:modelValue":F[12]||(F[12]=J=>ce.value=J),type:"range",min:"15",max:"300",step:"1",onInput:mn,class:"flex-1 accent-blue-500 cursor-pointer"},null,544),[[An,ce.value,void 0,{number:!0}]]),U("button",{onClick:pi,class:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition",title:"放大"},[qe(ut(Cx),{class:"w-3.5 h-3.5"})]),U("span",J3,Qe(ce.value)+"%",1)]),U("div",eS,[U("button",{onClick:F[13]||(F[13]=J=>hi(-90)),class:"flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"},[qe(ut(wx),{class:"w-3.5 h-3.5"}),F[44]||(F[44]=U("span",null,"左转90°",-1))]),U("button",{onClick:F[14]||(F[14]=J=>hi(90)),class:"flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"},[qe(ut(_x),{class:"w-3.5 h-3.5"}),F[45]||(F[45]=U("span",null,"右转90°",-1))]),U("label",tS,[br(U("input",{type:"checkbox","onUpdate:modelValue":F[15]||(F[15]=J=>g.value=J),class:"rounded bg-slate-800 border-slate-700 text-blue-500"},null,512),[[cd,g.value]]),F[46]||(F[46]=U("span",null,"参考线",-1))])])])):Wt("",!0),U("div",rS,[U("div",nS,[U("button",{onClick:Fn,disabled:!P.value||y.value,class:"w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-semibold border border-slate-700 transition"},[qe(ut(Vd),{class:"w-4 h-4 text-emerald-400"}),F[47]||(F[47]=U("span",null,"导出单张(压缩)",-1))],8,iS),U("button",{onClick:vn,disabled:!P.value||y.value,class:"w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition"},[qe(ut(yx),{class:"w-4 h-4"}),F[48]||(F[48]=U("span",null,"加入待印托盘",-1))],8,sS)]),P.value?(He(),ot("button",{key:0,type:"button",onClick:ve,class:"w-full py-2 px-3 rounded-xl border border-slate-700/80 hover:border-slate-600 bg-slate-800/60 hover:bg-slate-800 text-center text-xs text-slate-300 hover:text-white transition flex items-center justify-center space-x-1.5 shadow-sm"},[qe(ut(mx),{class:"w-3.5 h-3.5 text-slate-400"}),F[49]||(F[49]=U("span",null,"换一张照片 (重新选图)",-1))])):Wt("",!0)])])]),z.value?(He(),ot("div",aS,[U("div",oS,[F[53]||(F[53]=U("h3",{class:"text-sm font-bold text-slate-100"},"自定义证件照尺寸",-1)),U("div",lS,[U("div",null,[F[50]||(F[50]=U("label",{class:"block text-slate-400 mb-1"},"规格名称",-1)),br(U("input",{"onUpdate:modelValue":F[16]||(F[16]=J=>L.name=J),placeholder:"例如：某报名考试特殊尺寸",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[An,L.name]])]),U("div",uS,[U("div",null,[F[51]||(F[51]=U("label",{class:"block text-slate-400 mb-1"},"宽度 (mm)",-1)),br(U("input",{"onUpdate:modelValue":F[17]||(F[17]=J=>L.widthMm=J),type:"number",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[An,L.widthMm,void 0,{number:!0}]])]),U("div",null,[F[52]||(F[52]=U("label",{class:"block text-slate-400 mb-1"},"高度 (mm)",-1)),br(U("input",{"onUpdate:modelValue":F[18]||(F[18]=J=>L.heightMm=J),type:"number",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[An,L.heightMm,void 0,{number:!0}]])])]),U("p",dS,"自动以 300 DPI 换算分辨率："+Qe(q.value),1)]),U("div",cS,[U("button",{onClick:F[19]||(F[19]=J=>z.value=!1),class:"px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs"},"取消"),U("button",{onClick:Ce,class:"px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"},"确认并应用")])])])):Wt("",!0)]))}}),pS=(e,t)=>{const r=e.__vccOpts||e;for(const[n,i]of t)r[n]=i;return r},hS=pS(fS,[["__scopeId","data-v-4f284a88"]]);function Zs(e,t=300){return new Promise((r,n)=>{const i=new FileReader;i.onload=()=>{try{const s=i.result,a=mS(s,t);r(new Blob([a],{type:"image/jpeg"}))}catch(s){n(s)}},i.onerror=()=>n(i.error),i.readAsArrayBuffer(e)})}function mS(e,t=300){const r=new Uint8Array(e);if(r.length<4||r[0]!==255||r[1]!==216)return console.warn("[dpiWriter] 不是有效的 JPEG 文件格式，原样返回"),e;const n=t>>8&255,i=t&255;if(r[2]===255&&r[3]===224&&r[6]===74&&r[7]===70&&r[8]===73&&r[9]===70&&r[10]===0&&r.length>=18){const l=new Uint8Array(r);return l[13]=1,l[14]=n,l[15]=i,l[16]=n,l[17]=i,l.buffer}const s=new Uint8Array([255,224,0,16,74,70,73,70,0,1,2,1,n,i,n,i,0,0]),a=new Uint8Array(r.length+s.length);return a.set(r.subarray(0,2),0),a.set(s,2),a.set(r.subarray(2),2+s.length),a.buffer}class hs{static async generatePrintPages(t,r){const{paper:n,marginMm:i=5,gapMm:s=3,showCutLines:a=!0,showFootnote:o=!0}=r,l=n.widthPx,d=n.heightPx,f=bs(i),p=bs(s),g=[];for(const S of t){if(S.printCount<=0)continue;const $=await this.renderItemToCanvas(S);for(let I=0;I<S.printCount;I++)g.push({item:S,w:S.spec.widthPx,h:S.spec.heightPx,canvas:$})}if(g.length===0)return[];const b=[];let y=0;const x=l-f*2,T=d-f*2;for(;y<g.length;){const S=b.length+1,$=document.createElement("canvas");$.width=l,$.height=d;const I=$.getContext("2d");if(!I)break;I.fillStyle="#FFFFFF",I.fillRect(0,0,l,d);let E=f,O=f,P=0,N=0;for(;y<g.length;){const C=g[y],V=C.w,Q=C.h;if(E+V>l-f&&(E=f,O+=P+p,P=0),O+Q>d-f)break;I.drawImage(C.canvas,E,O,V,Q),a&&this.drawCropCrossMarks(I,E,O,V,Q,r.cutLineOffsetPx||4,r.cutLineLengthPx||12),o&&this.drawFootnote(I,C.item,E,O,V,Q),P=Math.max(P,Q),E+=V+p,y++,N++}if(N===0&&y<g.length){const C=g[y];I.drawImage(C.canvas,f,f,Math.min(C.w,x),Math.min(C.h,T)),y++,N++}b.push({pageIndex:S,canvas:$,placedCount:N})}return b}static async renderItemToCanvas(t){const r=document.createElement("canvas");r.width=t.spec.widthPx,r.height=t.spec.heightPx;const n=r.getContext("2d");if(!n)return r;const i=r.width,s=r.height;if(t.selectedBg.value==="original"){const b=await this.blobToImage(t.originalBlob);if(t.transform){n.save();const E=b.naturalWidth||b.width,O=b.naturalHeight||b.height,P=t.transform.x+E*t.transform.scale/2,N=t.transform.y+O*t.transform.scale/2;return n.translate(P,N),n.rotate((t.transform.rotation||0)*Math.PI/180),n.drawImage(b,-(E*t.transform.scale)/2,-(O*t.transform.scale)/2,E*t.transform.scale,O*t.transform.scale),n.restore(),r}const y=b.width/b.height,x=i/s;let T=i,S=s,$=0,I=0;return y>x?(S=s,T=s*y,$=(i-T)/2):(T=i,S=i/y,I=(s-S)/2),n.drawImage(b,$,I,T,S),r}if(t.selectedBg.value!=="transparent"){if(t.selectedBg.isGradient&&t.selectedBg.gradientStops){const b=n.createLinearGradient(0,0,0,s);b.addColorStop(0,t.selectedBg.gradientStops[0]),b.addColorStop(1,t.selectedBg.gradientStops[1]),n.fillStyle=b}else n.fillStyle=t.selectedBg.value||"#FFFFFF";n.fillRect(0,0,i,s)}else n.clearRect(0,0,i,s);const a=await this.blobToImage(t.cutoutBlob);if(t.transform){n.save();const b=a.naturalWidth||a.width,y=a.naturalHeight||a.height,x=t.transform.x+b*t.transform.scale/2,T=t.transform.y+y*t.transform.scale/2;return n.translate(x,T),n.rotate((t.transform.rotation||0)*Math.PI/180),n.drawImage(a,-(b*t.transform.scale)/2,-(y*t.transform.scale)/2,b*t.transform.scale,y*t.transform.scale),n.restore(),r}const o=a.width/a.height,l=i/s;let d=i,f=s,p=0,g=0;return o>l?(f=s,d=s*o,p=(i-d)/2):(d=i,f=i/o,g=(s-f)/2),n.drawImage(a,p,g,d,f),r}static drawCropCrossMarks(t,r,n,i,s,a=4,o=12){t.save(),t.strokeStyle="#CCCCCC",t.lineWidth=1;const l=[{cx:r,cy:n,dx:-1,dy:-1},{cx:r+i,cy:n,dx:1,dy:-1},{cx:r,cy:n+s,dx:-1,dy:1},{cx:r+i,cy:n+s,dx:1,dy:1}];for(const{cx:d,cy:f,dx:p,dy:g}of l)t.beginPath(),t.moveTo(d+p*a,f),t.lineTo(d+p*(a+o),f),t.stroke(),t.beginPath(),t.moveTo(d,f+g*a),t.lineTo(d,f+g*(a+o)),t.stroke();t.restore()}static drawFootnote(t,r,n,i,s,a){t.save(),t.fillStyle="#9CA3AF",t.font="10px sans-serif",t.textAlign="center",t.textBaseline="top";const o=`${r.memberName||"成员"} · ${r.spec.name}`;t.fillText(o,n+s/2,i+a+6),t.restore()}static async exportPageAs300DpiBlob(t){return new Promise((r,n)=>{t.toBlob(async i=>{if(!i){n(new Error("页面 Canvas 导出失败"));return}try{const s=await Zs(i,300);r(s)}catch(s){n(s)}},"image/jpeg",.98)})}static blobToImage(t){return new Promise((r,n)=>{const i=URL.createObjectURL(t),s=new Image;s.onload=()=>{URL.revokeObjectURL(i),r(s)},s.onerror=()=>{URL.revokeObjectURL(i),n(new Error("图片加载失败"))},s.src=i})}}const gS={class:"fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md flex flex-col justify-end sm:justify-center items-center sm:p-4"},yS={class:"w-full max-w-2xl bg-slate-900 border-t sm:border border-slate-800 rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"},bS={class:"flex items-center justify-between px-5 py-4 border-b border-slate-800"},vS={class:"flex items-center space-x-2"},wS={class:"text-base font-bold text-slate-100"},_S={class:"flex items-center space-x-2"},xS={class:"flex-1 overflow-y-auto p-4 space-y-3"},$S={key:0,class:"py-12 flex flex-col items-center justify-center text-slate-500 space-y-2"},SS={class:"relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-950 border border-slate-700"},kS=["src"],TS={class:"absolute bottom-0 inset-x-0 bg-black/60 text-[9px] text-center text-slate-300 py-0.5"},CS={class:"flex-1 min-w-0 mx-3 space-y-1.5"},ES={class:"flex items-center space-x-2"},IS=["onUpdate:modelValue"],AS={class:"text-xs text-slate-400"},OS={class:"flex items-center space-x-1.5 pt-0.5"},zS=["onClick","title"],MS={class:"flex flex-col items-end space-y-2"},RS={class:"flex items-center space-x-1 bg-slate-900 rounded-lg p-1 border border-slate-700"},BS=["onClick"],PS={class:"w-7 text-center text-xs font-semibold text-slate-200"},DS=["onClick"],NS={class:"flex items-center space-x-2 text-xs"},US=["onClick"],LS=["onClick"],FS={class:"p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between"},jS={class:"text-sm font-bold text-blue-400"},WS={class:"flex items-center space-x-3"},VS=["disabled"],HS=wa({__name:"PhotoTray",props:{items:{}},emits:["close","remove-item","clear-all","export-single","open-packing","update-item"],setup(e,{emit:t}){const r=e,n=t,i=Cn,s=ia(()=>r.items.reduce((d,f)=>d+f.printCount,0));function a(d){d.printCount++,n("update-item",d)}function o(d){d.printCount>1&&(d.printCount--,n("update-item",d))}async function l(d,f){d.selectedBg=f;const p=await hs.renderItemToCanvas(d);d.previewUrl=p.toDataURL("image/jpeg",.9),n("update-item",d)}return(d,f)=>(He(),ot("div",gS,[U("div",yS,[U("div",bS,[U("div",vS,[qe(ut(sy),{class:"w-5 h-5 text-blue-400"}),U("h2",wS,"待印照片托盘 ("+Qe(e.items.length)+")",1)]),U("div",_S,[e.items.length>0?(He(),ot("button",{key:0,onClick:f[0]||(f[0]=p=>d.$emit("clear-all")),class:"text-xs text-rose-400 hover:text-rose-300 px-2 py-1 transition"}," 清空托盘 ")):Wt("",!0),U("button",{onClick:f[1]||(f[1]=p=>d.$emit("close")),class:"p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"},[qe(ut(Hd),{class:"w-5 h-5"})])])]),U("div",xS,[e.items.length===0?(He(),ot("div",$S,[qe(ut(Tx),{class:"w-10 h-10 stroke-[1.5]"}),f[4]||(f[4]=U("p",{class:"text-sm"},"托盘暂无照片，请先拍摄或上传照片",-1))])):Wt("",!0),(He(!0),ot(Ft,null,gs(e.items,(p,g)=>(He(),ot("div",{key:p.id,class:"flex items-center justify-between bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 hover:border-slate-600 transition"},[U("div",SS,[U("img",{src:p.previewUrl,class:"w-full h-full object-cover"},null,8,kS),U("span",TS,Qe(p.spec.widthMm)+"×"+Qe(p.spec.heightMm),1)]),U("div",CS,[U("div",ES,[br(U("input",{"onUpdate:modelValue":b=>p.memberName=b,placeholder:"成员姓名",class:"bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-100 w-24 focus:ring-1 focus:ring-blue-500 focus:outline-none"},null,8,IS),[[An,p.memberName]]),U("span",AS,Qe(p.spec.name),1)]),U("div",OS,[(He(!0),ot(Ft,null,gs(ut(i),b=>(He(),ot("button",{key:b.id,onClick:y=>l(p,b),class:_r(["w-4 h-4 rounded-full border border-slate-600 transition-transform",[b.previewClass,p.selectedBg.id===b.id?"ring-2 ring-blue-400 scale-110":""]]),title:b.name},null,10,zS))),128))])]),U("div",MS,[U("div",RS,[U("button",{onClick:b=>o(p),class:"w-6 h-6 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"},[qe(ut(gx),{class:"w-3.5 h-3.5"})],8,BS),U("span",PS,Qe(p.printCount),1),U("button",{onClick:b=>a(p),class:"w-6 h-6 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"},[qe(ut(bx),{class:"w-3.5 h-3.5"})],8,DS)]),U("div",NS,[U("button",{onClick:b=>d.$emit("export-single",p),class:"text-blue-400 hover:text-blue-300"}," 单张导出 ",8,US),U("button",{onClick:b=>d.$emit("remove-item",p.id),class:"text-rose-400 hover:text-rose-300"}," 删除 ",8,LS)])])]))),128))]),U("div",FS,[U("div",null,[f[5]||(f[5]=U("span",{class:"text-xs text-slate-400"},"总待打印张数: ",-1)),U("span",jS,Qe(s.value)+" 张",1)]),U("div",WS,[U("button",{onClick:f[2]||(f[2]=p=>d.$emit("close")),class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"}," 继续拍照 "),U("button",{onClick:f[3]||(f[3]=p=>d.$emit("open-packing")),disabled:s.value===0,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5"},[qe(ut(Fo),{class:"w-4 h-4"}),f[6]||(f[6]=U("span",null,"智能混排拼版",-1))],8,VS)])])])]))}});function So(e,t,r){return new Promise((n,i)=>{e.toBlob(s=>{s?n(s):i(new Error("Canvas 转 Blob 失败"))},t,r)})}async function qS(e,t){const{targetKb:r,toleranceKb:n=3,maxIterations:i=6,minQuality:s=.1,maxQuality:a=.98,autoScaleIfExceeded:o=!0,dpi:l=300}=t;let d=e,f=e.width,p=e.height,g=s,b=a,y=null,x=a,T=1/0,S=0;const $=await So(d,"image/jpeg",b),I=await Zs($,l),E=I.size/1024;if(E<=r)return{blob:I,sizeKb:Math.round(E*10)/10,quality:b,iterations:1,width:f,height:p};for(let O=0;O<i;O++){S++;const P=(g+b)/2,N=await So(d,"image/jpeg",P),C=await Zs(N,l),V=C.size/1024;if(V<=r){if(y=C,x=P,T=V,r-V<=n)break;g=P}else b=P}if(!y&&o){let O=.9;for(let P=0;P<3;P++){const N=document.createElement("canvas");N.width=Math.round(f*O),N.height=Math.round(p*O);const C=N.getContext("2d");if(C){C.imageSmoothingEnabled=!0,C.imageSmoothingQuality="high",C.drawImage(e,0,0,N.width,N.height);const V=await So(N,"image/jpeg",.5),Q=await Zs(V,l),de=Q.size/1024;if(de<=r)return{blob:Q,sizeKb:Math.round(de*10)/10,quality:.5,iterations:S+P+1,width:N.width,height:N.height}}O-=.15}}if(!y){const O=await So(d,"image/jpeg",s);y=await Zs(O,l),T=y.size/1024,x=s}return{blob:y,sizeKb:Math.round(T*10)/10,quality:Math.round(x*100)/100,iterations:S,width:f,height:p}}const GS={class:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"},KS={class:"bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden flex flex-col shadow-2xl"},XS={class:"flex items-center justify-between px-5 py-3.5 border-b border-slate-800"},YS={class:"p-5 space-y-4 overflow-y-auto max-h-[75vh]"},ZS={class:"flex justify-center bg-slate-950 p-4 rounded-xl border border-slate-800 relative"},QS=["src"],JS={class:"grid grid-cols-3 gap-2 text-center text-xs"},ek={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},tk={class:"font-semibold text-slate-200"},rk={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},nk={class:"font-semibold text-slate-200"},ik={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},sk={class:"font-semibold text-emerald-400"},ak={class:"bg-slate-800/40 p-3.5 rounded-xl border border-slate-800 space-y-3"},ok={class:"flex items-center justify-between"},lk={class:"text-xs text-blue-400 font-mono font-medium"},uk={class:"flex items-center space-x-2"},dk=["onClick"],ck={key:0,class:"text-[11px] text-amber-300 bg-amber-950/40 border border-amber-800/60 px-2.5 py-1.5 rounded-lg flex items-center space-x-1.5"},fk={key:1,class:"text-[11px] text-slate-400 flex items-center justify-between pt-1"},pk={class:"space-y-2"},hk={class:"flex items-center justify-between text-xs text-slate-400"},mk={class:"p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-end space-x-3"},gk=["disabled"],yk=wa({__name:"ExportModal",props:{item:{}},emits:["close"],setup(e,{emit:t}){const r=e,n=r.item.spec.id==="spec_id_card"||r.item.spec.name.includes("身份证"),i=Ke(n?30:50),s=Ke(100),a=Ke(!1),o=Ke(0),l=Ke(null),d=Ke("");let f=null;_a(()=>{g()});function p(y){i.value=y,g()}async function g(){a.value=!0;try{let y;if(r.item.composedBlob&&s.value===100){y=document.createElement("canvas"),y.width=r.item.spec.widthPx,y.height=r.item.spec.heightPx;const S=y.getContext("2d");if(S)try{const $=await createImageBitmap(r.item.composedBlob);S.drawImage($,0,0,y.width,y.height)}catch{y=await hs.renderItemToCanvas(r.item)}else y=await hs.renderItemToCanvas(r.item)}else y=await hs.renderItemToCanvas(r.item);let x=y;if(s.value!==100){const S=document.createElement("canvas");S.width=y.width,S.height=y.height;const $=S.getContext("2d");$&&($.filter=`brightness(${s.value}%)`,$.drawImage(y,0,0),x=S)}const T=await qS(x,{targetKb:i.value,toleranceKb:2,maxIterations:6,dpi:300});l.value=T,o.value=T.sizeKb,f=T.blob,d.value&&URL.revokeObjectURL(d.value),d.value=URL.createObjectURL(T.blob)}catch(y){console.error("二分压缩错误:",y)}finally{a.value=!1}}function b(){if(!f)return;const y=URL.createObjectURL(f),x=document.createElement("a");x.href=y;const T=`${r.item.memberName||"证件照"}_${r.item.spec.name}_300DPI_${o.value}KB.jpg`;x.download=T,document.body.appendChild(x),x.click(),document.body.removeChild(x),URL.revokeObjectURL(y)}return(y,x)=>(He(),ot("div",GS,[U("div",KS,[U("div",XS,[x[4]||(x[4]=U("h3",{class:"text-sm font-bold text-slate-100 flex items-center space-x-2"},[U("span",null,"单张证件照导出与合规压缩")],-1)),U("button",{onClick:x[0]||(x[0]=T=>y.$emit("close")),class:"text-slate-400 hover:text-white p-1"},[qe(ut(Hd),{class:"w-5 h-5"})])]),U("div",YS,[U("div",ZS,[U("img",{src:d.value||e.item.previewUrl,class:"max-h-56 object-contain rounded shadow-lg border border-slate-700"},null,8,QS),x[5]||(x[5]=U("div",{class:"absolute bottom-6 right-6 bg-slate-900/90 border border-slate-700 px-2 py-1 rounded text-[11px] text-blue-400 font-mono"}," 300 DPI 物理打印标记已注入 ",-1))]),U("div",JS,[U("div",ek,[x[6]||(x[6]=U("span",{class:"block text-slate-400 text-[10px]"},"物理尺寸",-1)),U("span",tk,Qe(e.item.spec.widthMm)+" × "+Qe(e.item.spec.heightMm)+" mm",1)]),U("div",rk,[x[7]||(x[7]=U("span",{class:"block text-slate-400 text-[10px]"},"像素分辨率",-1)),U("span",nk,Qe(e.item.spec.widthPx)+" × "+Qe(e.item.spec.heightPx)+" px",1)]),U("div",ik,[x[8]||(x[8]=U("span",{class:"block text-slate-400 text-[10px]"},"实际体积",-1)),U("span",sk,Qe(o.value?`${o.value} KB`:"计算中..."),1)])]),U("div",ak,[U("div",ok,[x[9]||(x[9]=U("label",{class:"text-xs font-semibold text-slate-300"},"目标文件大小限制 (KB)",-1)),U("span",lk,"≤ "+Qe(i.value)+" KB",1)]),U("div",uk,[(He(),ot(Ft,null,gs([20,30,40,50,100,200],T=>U("button",{key:T,onClick:S=>p(T),class:_r(["px-2.5 py-1 rounded-lg text-xs font-medium transition",i.value===T?"bg-blue-600 text-white":"bg-slate-800 text-slate-400 hover:text-slate-200"])},Qe(T)+"K ",11,dk)),64))]),ut(n)?(He(),ot("div",ck,[...x[10]||(x[10]=[U("span",null,"📋",-1),U("span",null,"GA461—2004 标准：制证文件容量需在 14KB ~ 40KB 之间，白色背景无边框",-1)])])):Wt("",!0),br(U("input",{"onUpdate:modelValue":x[1]||(x[1]=T=>i.value=T),type:"range",min:"10",max:"300",step:"5",onChange:g,class:"w-full accent-blue-500 cursor-pointer"},null,544),[[An,i.value,void 0,{number:!0}]]),l.value?(He(),ot("div",fk,[U("span",null,"二分逼近质量: "+Qe(Math.round(l.value.quality*100))+"%",1),U("span",null,"迭代收敛: "+Qe(l.value.iterations)+" 次",1)])):Wt("",!0)]),U("div",pk,[U("div",hk,[x[11]||(x[11]=U("span",null,"画面亮度",-1)),U("span",null,Qe(s.value)+"%",1)]),br(U("input",{"onUpdate:modelValue":x[2]||(x[2]=T=>s.value=T),type:"range",min:"80",max:"120",onChange:g,class:"w-full accent-blue-500 cursor-pointer"},null,544),[[An,s.value,void 0,{number:!0}]])])]),U("div",mk,[U("button",{onClick:x[3]||(x[3]=T=>y.$emit("close")),class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"}," 取消 "),U("button",{onClick:b,disabled:a.value,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5 disabled:opacity-50"},[qe(ut(Vd),{class:"w-4 h-4"}),U("span",null,Qe(a.value?"压缩计算中...":"下载无损 300 DPI 照"),1)],8,gk)])])]))}}),bk={class:"fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 overflow-hidden"},vk={class:"w-full flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3 shadow-lg"},wk={class:"flex items-center space-x-3"},_k={class:"flex items-center space-x-3"},xk=["value"],$k={class:"flex-1 w-full my-3 flex items-center justify-center overflow-auto p-2"},Sk={key:0,class:"flex flex-col items-center justify-center text-slate-400 space-y-2"},kk={key:1,class:"relative flex flex-col items-center max-h-full max-w-full"},Tk={class:"bg-white rounded-lg shadow-2xl p-1 border-2 border-slate-700 overflow-hidden flex items-center justify-center"},Ck={key:0,class:"flex items-center space-x-3 mt-3 bg-slate-900/90 px-3 py-1.5 rounded-full border border-slate-800"},Ek=["disabled"],Ik={class:"text-xs font-medium text-slate-400"},Ak=["disabled"],Ok={class:"w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"},zk={class:"flex items-center space-x-4 text-xs text-slate-300"},Mk={class:"flex items-center space-x-1.5 cursor-pointer"},Rk={class:"flex items-center space-x-1.5 cursor-pointer"},Bk={class:"flex items-center space-x-3"},Pk=wa({__name:"PrintLayoutModal",props:{items:{}},emits:["close"],setup(e,{emit:t}){const r=e,n=Ke(lo),i=Ke(lo[0].id),s=Vi({paper:lo[0],marginMm:4,gapMm:3,showCutLines:!0,showFootnote:!0,cutLineOffsetPx:4,cutLineLengthPx:14}),a=Ke(!1),o=Ke([]),l=Ke(0),d=Ke(null);_a(()=>{f()});async function f(){const T=n.value.find(S=>S.id===i.value)||lo[0];s.paper=T,a.value=!0;try{o.value=await hs.generatePrintPages(r.items,s),l.value=0,await ii(),p()}catch(S){console.error("混排拼版错误:",S)}finally{a.value=!1}}function p(){if(o.value.length===0||!d.value)return;const T=o.value[l.value],S=d.value;S.width=T.canvas.width,S.height=T.canvas.height;const $=S.getContext("2d");$&&$.drawImage(T.canvas,0,0)}function g(){l.value>0&&(l.value--,p())}function b(){l.value<o.value.length-1&&(l.value++,p())}async function y(){if(o.value.length===0)return;const T=o.value[l.value],S=await hs.exportPageAs300DpiBlob(T.canvas),$=URL.createObjectURL(S),I=document.createElement("a");I.href=$,I.download=`证件照混排打印_${s.paper.name}_第${l.value+1}页_300DPI.jpg`,document.body.appendChild(I),I.click(),document.body.removeChild(I),URL.revokeObjectURL($)}function x(){if(o.value.length===0)return;const S=o.value[l.value].canvas.toDataURL("image/jpeg",1),$=window.open("","_blank");if(!$){alert("请允许弹出窗口以调用原生打印");return}$.document.write(`
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
  `),$.document.close()}return(T,S)=>(He(),ot("div",bk,[U("header",vk,[U("div",wk,[qe(ut(Fo),{class:"w-5 h-5 text-blue-400"}),S[4]||(S[4]=U("h2",{class:"text-sm sm:text-base font-bold text-slate-100"},"智能多人混排拼版工作台",-1))]),U("div",_k,[br(U("select",{"onUpdate:modelValue":S[0]||(S[0]=$=>i.value=$),onChange:f,class:"bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"},[(He(!0),ot(Ft,null,gs(n.value,$=>(He(),ot("option",{key:$.id,value:$.id},Qe($.name),9,xk))),128))],544),[[ny,i.value]]),U("button",{onClick:S[1]||(S[1]=$=>T.$emit("close")),class:"p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"},[qe(ut(Hd),{class:"w-5 h-5"})])])]),U("main",$k,[a.value?(He(),ot("div",Sk,[qe(ut(fd),{class:"w-8 h-8 animate-spin text-blue-500"}),S[5]||(S[5]=U("span",{class:"text-xs"},"正在计算最优拼版装箱...",-1))])):o.value.length>0?(He(),ot("div",kk,[U("div",Tk,[U("canvas",{ref_key:"displayCanvasRef",ref:d,class:"max-h-[60vh] max-w-[85vw] object-contain shadow-inner"},null,512)]),o.value.length>1?(He(),ot("div",Ck,[U("button",{onClick:g,disabled:l.value===0,class:"px-2 py-0.5 rounded text-xs text-slate-300 disabled:opacity-30 hover:bg-slate-800"}," 上一页 ",8,Ek),U("span",Ik," 第 "+Qe(l.value+1)+" / "+Qe(o.value.length)+" 页 ",1),U("button",{onClick:b,disabled:l.value===o.value.length-1,class:"px-2 py-0.5 rounded text-xs text-slate-300 disabled:opacity-30 hover:bg-slate-800"}," 下一页 ",8,Ak)])):Wt("",!0)])):Wt("",!0)]),U("footer",Ok,[U("div",zk,[U("label",Mk,[br(U("input",{type:"checkbox","onUpdate:modelValue":S[2]||(S[2]=$=>s.showCutLines=$),onChange:f,class:"rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0"},null,544),[[cd,s.showCutLines]]),S[6]||(S[6]=U("span",null,"浅灰十字裁切线 (#CCCCCC)",-1))]),U("label",Rk,[br(U("input",{type:"checkbox","onUpdate:modelValue":S[3]||(S[3]=$=>s.showFootnote=$),onChange:f,class:"rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0"},null,544),[[cd,s.showFootnote]]),S[7]||(S[7]=U("span",null,"姓名/规格微型脚标",-1))])]),U("div",Bk,[U("button",{onClick:x,class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition flex items-center space-x-1.5"},[qe(ut(Fo),{class:"w-4 h-4"}),S[8]||(S[8]=U("span",null,"系统原生打印",-1))]),U("button",{onClick:y,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5"},[qe(ut(Vd),{class:"w-4 h-4"}),U("span",null,"下载 300 DPI 冲印原图 (第 "+Qe(l.value+1)+" 页)",1)])])])]))}}),Dk={class:"w-full h-screen bg-slate-950 flex flex-col overflow-hidden"},Nk={key:0,class:"fixed top-14 inset-x-0 mx-auto w-fit z-50 bg-emerald-600/90 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-xl backdrop-blur-md flex items-center space-x-2"},Uk=wa({__name:"App",setup(e){const t=Ke([]),r=Ke(!1),n=Ke(!1),i=Ke(null),s=Ke("");let a=null;function o(y){s.value=y,a&&clearTimeout(a),a=setTimeout(()=>{s.value=""},2500)}function l(y){t.value.push(y),o(`已成功加入托盘：${y.spec.name} (${y.printCount}张)`)}function d(y){i.value=y}function f(y){t.value=t.value.filter(x=>x.id!==y)}function p(){t.value=[]}function g(){r.value=!1,n.value=!0}function b(y){const x=t.value.findIndex(T=>T.id===y.id);x!==-1&&(t.value[x]={...y})}return(y,x)=>(He(),ot("div",Dk,[qe(hS,{"tray-count":t.value.length,onPhotoAddedToTray:l,onOpenSingleExport:d,onOpenTray:x[0]||(x[0]=T=>r.value=!0),onOpenPacking:x[1]||(x[1]=T=>n.value=!0),onShowToast:o},null,8,["tray-count"]),r.value?(He(),qi(HS,{key:0,items:t.value,onClose:x[2]||(x[2]=T=>r.value=!1),onRemoveItem:f,onClearAll:p,onExportSingle:d,onOpenPacking:g,onUpdateItem:b},null,8,["items"])):Wt("",!0),i.value?(He(),qi(yk,{key:1,item:i.value,onClose:x[3]||(x[3]=T=>i.value=null)},null,8,["item"])):Wt("",!0),n.value?(He(),qi(Pk,{key:2,items:t.value,onClose:x[4]||(x[4]=T=>n.value=!1)},null,8,["items"])):Wt("",!0),qe(M2,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform translate-y-4 opacity-0","enter-to-class":"transform translate-y-0 opacity-100","leave-active-class":"transition duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:_0(()=>[s.value?(He(),ot("div",Nk,[x[5]||(x[5]=U("span",null,"✓",-1)),U("span",null,Qe(s.value),1)])):Wt("",!0)]),_:1})]))}}),Lk=dx(Uk);Lk.mount("#app");
