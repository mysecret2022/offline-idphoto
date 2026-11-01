(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ed(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const St={},Si=[],en=()=>{},Lg=()=>!1,Ko=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Xo=e=>e.startsWith("onUpdate:"),Lt=Object.assign,Id=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},O_=Object.prototype.hasOwnProperty,dt=(e,t)=>O_.call(e,t),Re=Array.isArray,Fn=e=>da(e)==="[object Map]",xn=e=>da(e)==="[object Set]",mp=e=>da(e)==="[object Date]",je=e=>typeof e=="function",Mt=e=>typeof e=="string",tn=e=>typeof e=="symbol",pt=e=>e!==null&&typeof e=="object",Fg=e=>(pt(e)||je(e))&&je(e.then)&&je(e.catch),Vg=Object.prototype.toString,da=e=>Vg.call(e),z_=e=>da(e).slice(8,-1),jg=e=>da(e)==="[object Object]",Ad=e=>Mt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,js=Ed(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},M_=/-\w/g,Nr=Yo(e=>e.replace(M_,t=>t.slice(1).toUpperCase())),R_=/\B([A-Z])/g,Ri=Yo(e=>e.replace(R_,"-$1").toLowerCase()),Wg=Yo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rl=Yo(e=>e?`on${Wg(e)}`:""),Zr=(e,t)=>!Object.is(e,t),xo=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},qg=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},Zo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},B_=e=>{const t=Mt(e)?Number(e):NaN;return isNaN(t)?e:t};let gp;const Qo=()=>gp||(gp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function es(e){if(Re(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],i=Mt(n)?U_(n):es(n);if(i)for(const s in i)t[s]=i[s]}return t}else if(Mt(e)||pt(e))return e}const P_=/;(?![^(]*\))/g,D_=/:([^]+)/,N_=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function U_(e){const t={};return e.replace(N_,r=>r.startsWith("/*")?"":r).split(P_).forEach(r=>{if(r){const n=r.split(D_);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Qr(e){let t="";if(Mt(e))t=e;else if(Re(e))for(let r=0;r<e.length;r++){const n=Qr(e[r]);n&&(t+=n+" ")}else if(pt(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const L_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",F_=Ed(L_);function Hg(e){return!!e||e===""}function V_(e,t,r){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=$n(e[i],t[i],r);return n}function yp(e,t,r){if(e.size!==t.size)return!1;const n=Array.from(t),i=new Uint8Array(n.length);for(const s of e){let a=-1;for(let o=0;o<n.length;o++)if(!i[o]&&$n(s,n[o],r)){a=o;break}if(a<0)return!1;i[a]=1}return!0}function j_(e,t,r){let n=Fn(e),i=Fn(t);if(n||i||(n=xn(e),i=xn(t),n||i))return n&&i?yp(e,t,r):!1;const s=Object.keys(e).length,a=Object.keys(t).length;if(s!==a)return!1;for(const o in e){const l=e.hasOwnProperty(o),d=t.hasOwnProperty(o);if(l&&!d||!l&&d||!$n(e[o],t[o],r))return!1}return String(e)===String(t)}function bp(e,t,r,n){r||(r=[new Map,new Map]);const[i,s]=r;if(i.has(e)||s.has(t))return i.get(e)===t&&s.get(t)===e;i.set(e,t),s.set(t,e);const a=n(e,t,r);return i.delete(e),s.delete(t),a}function $n(e,t,r){if(e===t)return!0;let n=mp(e),i=mp(t);return n||i?n&&i?e.getTime()===t.getTime():!1:(n=tn(e),i=tn(t),n||i?e===t:(n=Re(e),i=Re(t),n||i?n&&i?bp(e,t,r,V_):!1:(n=pt(e),i=pt(t),n||i?!n||!i?!1:bp(e,t,r,j_):String(e)===String(t))))}function Od(e,t){return e.findIndex(r=>$n(r,t))}const Gg=e=>!!(e&&e.__v_isRef===!0),Je=e=>Mt(e)?e:e==null?"":Re(e)||pt(e)&&(e.toString===Vg||!je(e.toString))?Gg(e)?Je(e.value):JSON.stringify(e,Kg,2):String(e),Kg=(e,t)=>Gg(t)?Kg(e,t.value):Fn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,i],s)=>(r[Bl(n,s)+" =>"]=i,r),{})}:xn(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>Bl(r))}:tn(t)?Bl(t):pt(t)&&!Re(t)&&!jg(t)?String(t):t,Bl=(e,t="")=>{var r;return tn(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class W_{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ht&&(Ht.active?(this.parent=Ht,this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes){const n=this.scopes.slice();for(t=0,r=n.length;t<r;t++)n[t].pause()}for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes){const i=this.scopes.slice();for(t=0,r=i.length;t<r;t++)i[t].resume()}const n=this.effects.slice();for(t=0,r=n.length;t<r;t++)n[t].resume()}}run(t){if(this._active){const r=Ht;try{return Ht=this,t()}finally{Ht=r}}}on(){++this._on===1&&(this.prevScope=Ht,Ht=this)}off(){if(this._on>0&&--this._on===0){if(Ht===this)Ht=this.prevScope;else{let t=Ht;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(r=0,n=i.length;r<n;r++)i[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function q_(){return Ht}let kt;const Pl=new WeakSet;class Xg{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&(Ht.active?Ht.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pl.has(this)&&(Pl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vp(this),Qg(this);const t=kt,r=Ur;kt=this,Ur=!0;try{return this.fn()}finally{Jg(this),kt=t,Ur=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Rd(t);this.deps=this.depsTail=void 0,vp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qu(this)&&this.run()}get dirty(){return Qu(this)}}let Yg=0,Ws,qs;function Zg(e,t=!1){if(e.flags|=8,t){e.next=qs,qs=e;return}e.next=Ws,Ws=e}function zd(){Yg++}function Md(){if(--Yg>0)return;if(qs){let t=qs;for(qs=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;Ws;){let t=Ws;for(Ws=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function Qg(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Jg(e){let t,r=e.depsTail,n=r;for(;n;){const i=n.prevDep;n.version===-1?(n===r&&(r=i),Rd(n),H_(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=r}function Qu(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(e0(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function e0(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Qs)||(e.globalVersion=Qs,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Qu(e))))return;e.flags|=2;const t=e.dep,r=kt,n=Ur;kt=e,Ur=!0;try{Qg(e);const i=e.fn(e._value);(t.version===0||Zr(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{kt=r,Ur=n,Jg(e),e.flags&=-3}}function Rd(e,t=!1){const{dep:r,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let s=r.computed.deps;s;s=s.nextDep)Rd(s,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function H_(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let Ur=!0;const t0=[];function rn(){t0.push(Ur),Ur=!1}function nn(){const e=t0.pop();Ur=e===void 0?!0:e}function vp(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=kt;kt=void 0;try{t()}finally{kt=r}}}let Qs=0;class G_{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bd{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!kt||!Ur||kt===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==kt)r=this.activeLink=new G_(kt,this),kt.deps?(r.prevDep=kt.depsTail,kt.depsTail.nextDep=r,kt.depsTail=r):kt.deps=kt.depsTail=r,r0(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=kt.depsTail,r.nextDep=void 0,kt.depsTail.nextDep=r,kt.depsTail=r,kt.deps===r&&(kt.deps=n)}return r}trigger(t){this.version++,Qs++,this.notify(t)}notify(t){zd();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{Md()}}}function r0(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)r0(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const Ju=new WeakMap,Ci=Symbol(""),ed=Symbol(""),Js=Symbol("");function Yt(e,t,r){if(Ur&&kt){let n=Ju.get(e);n||Ju.set(e,n=new Map);let i=n.get(r);i||(n.set(r,i=new Bd),i.map=n,i.key=r),i.track()}}function vn(e,t,r,n,i,s){const a=Ju.get(e);if(!a){Qs++;return}const o=l=>{l&&l.trigger()};if(zd(),t==="clear")a.forEach(o);else{const l=Re(e),d=l&&Ad(r);if(l&&r==="length"){const p=Number(n);a.forEach((f,g)=>{(g==="length"||g===Js||!tn(g)&&g>=p)&&o(f)})}else switch((r!==void 0||a.has(void 0))&&o(a.get(r)),d&&o(a.get(Js)),t){case"add":l?d&&o(a.get("length")):(o(a.get(Ci)),Fn(e)&&o(a.get(ed)));break;case"delete":l||(o(a.get(Ci)),Fn(e)&&o(a.get(ed)));break;case"set":Fn(e)&&o(a.get(Ci));break}}Md()}function Xi(e){const t=ut(e);return t===e||(Yt(t,"iterate",Js),kr(e))?t:sn(e)?Vn(e)?t.map(r=>jn(Cr(r))):t.map(jn):t.map(Cr)}function Jo(e){return Yt(e=ut(e),"iterate",Js),e}function Kr(e,t){return sn(e)?jn(Vn(e)?Cr(t):t):Cr(t)}const K_={__proto__:null,[Symbol.iterator](){return Dl(this,Symbol.iterator,e=>Kr(this,e))},concat(...e){return Xi(this).concat(...e.map(t=>Re(t)?Xi(t):t))},entries(){return Dl(this,"entries",e=>(e[1]=Kr(this,e[1]),e))},every(e,t){return fn(this,"every",e,t,void 0,arguments)},filter(e,t){return fn(this,"filter",e,t,r=>r.map(n=>Kr(this,n)),arguments)},find(e,t){return fn(this,"find",e,t,r=>Kr(this,r),arguments)},findIndex(e,t){return fn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return fn(this,"findLast",e,t,r=>Kr(this,r),arguments)},findLastIndex(e,t){return fn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return fn(this,"forEach",e,t,void 0,arguments)},includes(...e){return Nl(this,"includes",e)},indexOf(...e){return Nl(this,"indexOf",e)},join(e){return Xi(this).join(e)},lastIndexOf(...e){return Nl(this,"lastIndexOf",e)},map(e,t){return fn(this,"map",e,t,void 0,arguments)},pop(){return $s(this,"pop")},push(...e){return $s(this,"push",e)},reduce(e,...t){return _p(this,"reduce",e,t)},reduceRight(e,...t){return _p(this,"reduceRight",e,t)},shift(){return $s(this,"shift")},some(e,t){return fn(this,"some",e,t,void 0,arguments)},splice(...e){return $s(this,"splice",e)},toReversed(){return Xi(this).toReversed()},toSorted(e){return Xi(this).toSorted(e)},toSpliced(...e){return Xi(this).toSpliced(...e)},unshift(...e){return $s(this,"unshift",e)},values(){return Dl(this,"values",e=>Kr(this,e))}};function Dl(e,t,r){const n=Jo(e),i=n[t],s=i.call(n);if(n!==e&&!kr(e)){if(s[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(s));return a.next=()=>wp(s.next(),r),i!==n0[t]&&Object.defineProperties(a,{return:{get(){const o=s.return;return typeof o=="function"?o.bind(s):o}},throw:{get(){const o=s.throw;return typeof o=="function"?o.bind(s):o}}}),a}s._next=s.next,s.next=()=>wp(s._next(),r)}return s}function wp(e,t){return e.done||(e.value=t(e.value)),e}const n0=Array.prototype;function fn(e,t,r,n,i,s){const a=Jo(e),o=a!==e&&!kr(e),l=a[t];if(l!==n0[t]){const f=l.apply(e,s);return o?Cr(f):f}let d=r;a!==e&&(o?d=function(f,g){return r.call(this,Kr(e,f),g,e)}:r.length>2&&(d=function(f,g){return r.call(this,f,g,e)}));const p=l.call(a,d,n);return o&&i?i(p):p}function _p(e,t,r,n){const i=Jo(e),s=i!==e&&!kr(e);let a=r,o=!1;i!==e&&(s?(o=n.length===0,a=function(d,p,f){return o&&(o=!1,d=Kr(e,d)),r.call(this,d,Kr(e,p),f,e)}):r.length>3&&(a=function(d,p,f){return r.call(this,d,p,f,e)}));const l=i[t](a,...n);return o?Kr(e,l):l}function Nl(e,t,r){const n=ut(e);Yt(n,"iterate",Js);const i=n[t](...r);return(i===-1||i===!1)&&Nd(r[0])?(r[0]=ut(r[0]),n[t](...r)):i}function $s(e,t,r=[]){rn(),zd();const n=ut(e)[t].apply(e,r);return Md(),nn(),n}const X_=Ed("__proto__,__v_isRef,__isVue"),i0=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(tn));function Y_(e){tn(e)||(e=String(e));const t=ut(this);return Yt(t,"has",e),t.hasOwnProperty(e)}class s0{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,n){if(r==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return s;if(r==="__v_raw")return n===(i?s?a1:u0:s?l0:o0).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const a=Re(t);if(!i){let l;if(a&&(l=K_[r]))return l;if(r==="hasOwnProperty")return Y_}const o=Reflect.get(t,r,Qt(t)?t:n);if((tn(r)?i0.has(r):X_(r))||(i||Yt(t,"get",r),s))return o;if(Qt(o)){const l=a&&Ad(r)?o:o.value;return i&&pt(l)?rd(l):l}return pt(o)?i?rd(o):rs(o):o}}class a0 extends s0{constructor(t=!1){super(!1,t)}set(t,r,n,i){let s=t[r];const a=Re(t)&&Ad(r);if(!this._isShallow){const d=sn(s);if(!kr(n)&&!sn(n)&&(s=ut(s),n=ut(n)),!a&&Qt(s)&&!Qt(n))return d||(s.value=n),!0}const o=a?Number(r)<t.length:dt(t,r),l=Reflect.set(t,r,n,Qt(t)?t:i);return t===ut(i)&&l&&(o?Zr(n,s)&&vn(t,"set",r,n):vn(t,"add",r,n)),l}deleteProperty(t,r){const n=dt(t,r);t[r];const i=Reflect.deleteProperty(t,r);return i&&n&&vn(t,"delete",r,void 0),i}has(t,r){const n=Reflect.has(t,r);return(!tn(r)||!i0.has(r))&&Yt(t,"has",r),n}ownKeys(t){return Yt(t,"iterate",Re(t)?"length":Ci),Reflect.ownKeys(t)}}class Z_ extends s0{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const Q_=new a0,J_=new Z_,e1=new a0(!0);const td=e=>e,Qa=e=>Reflect.getPrototypeOf(e);function t1(e,t,r){return function(...n){const i=this.__v_raw,s=ut(i),a=Fn(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,d=i[e](...n),p=r?td:t?jn:Cr;return!t&&Yt(s,"iterate",l?ed:Ci),Lt(Object.create(d),{next(){const{value:f,done:g}=d.next();return g?{value:f,done:g}:{value:o?[p(f[0]),p(f[1])]:p(f),done:g}}})}}function Ja(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function r1(e,t){const r={get(i){const s=this.__v_raw,a=ut(s),o=ut(i);e||(Zr(i,o)&&Yt(a,"get",i),Yt(a,"get",o));const{has:l}=Qa(a),d=t?td:e?jn:Cr;if(l.call(a,i))return d(s.get(i));if(l.call(a,o))return d(s.get(o));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!e&&Yt(ut(i),"iterate",Ci),i.size},has(i){const s=this.__v_raw,a=ut(s),o=ut(i);return e||(Zr(i,o)&&Yt(a,"has",i),Yt(a,"has",o)),i===o?s.has(i):s.has(i)||s.has(o)},forEach(i,s){const a=this,o=a.__v_raw,l=ut(o),d=t?td:e?jn:Cr;return!e&&Yt(l,"iterate",Ci),o.forEach((p,f)=>i.call(s,d(p),d(f),a))}};return Lt(r,e?{add:Ja("add"),set:Ja("set"),delete:Ja("delete"),clear:Ja("clear")}:{add(i){const s=ut(this),a=Qa(s),o=ut(i),l=!t&&!kr(i)&&!sn(i)?o:i;return a.has.call(s,l)||Zr(i,l)&&a.has.call(s,i)||Zr(o,l)&&a.has.call(s,o)||(s.add(l),vn(s,"add",l,l)),this},set(i,s){!t&&!kr(s)&&!sn(s)&&(s=ut(s));const a=ut(this),{has:o,get:l}=Qa(a);let d=o.call(a,i);d||(i=ut(i),d=o.call(a,i));const p=l.call(a,i);return a.set(i,s),d?Zr(s,p)&&vn(a,"set",i,s):vn(a,"add",i,s),this},delete(i){const s=ut(this),{has:a,get:o}=Qa(s);let l=a.call(s,i);l||(i=ut(i),l=a.call(s,i)),o&&o.call(s,i);const d=s.delete(i);return l&&vn(s,"delete",i,void 0),d},clear(){const i=ut(this),s=i.size!==0,a=i.clear();return s&&vn(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{r[i]=t1(i,e,t)}),r}function Pd(e,t){const r=r1(e,t);return(n,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_isShallow"?t:i==="__v_raw"?n:Reflect.get(dt(r,i)&&i in n?r:n,i,s)}const n1={get:Pd(!1,!1)},i1={get:Pd(!1,!0)},s1={get:Pd(!0,!1)};const o0=new WeakMap,l0=new WeakMap,u0=new WeakMap,a1=new WeakMap;function o1(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rs(e){return sn(e)?e:Dd(e,!1,Q_,n1,o0)}function l1(e){return Dd(e,!1,e1,i1,l0)}function rd(e){return Dd(e,!0,J_,s1,u0)}function Dd(e,t,r,n,i){if(!pt(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=i.get(e);if(s)return s;const a=o1(z_(e));if(a===0)return e;const o=new Proxy(e,a===2?n:r);return i.set(e,o),o}function Vn(e){return sn(e)?Vn(e.__v_raw):!!(e&&e.__v_isReactive)}function sn(e){return!!(e&&e.__v_isReadonly)}function kr(e){return!!(e&&e.__v_isShallow)}function Nd(e){return e?!!e.__v_raw:!1}function ut(e){const t=e&&e.__v_raw;return t?ut(t):e}function u1(e){return!dt(e,"__v_skip")&&Object.isExtensible(e)&&qg(e,"__v_skip",!0),e}const Cr=e=>pt(e)?rs(e):e,jn=e=>pt(e)?rd(e):e;function Qt(e){return e?e.__v_isRef===!0:!1}function Ze(e){return d1(e,!1)}function d1(e,t){return Qt(e)?e:new c1(e,t)}class c1{constructor(t,r){this.dep=new Bd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:ut(t),this._value=r?t:Cr(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,n=this.__v_isShallow||kr(t)||sn(t);t=n?t:ut(t),Zr(t,r)&&(this._rawValue=t,this._value=n?t:Cr(t),this.dep.trigger())}}function vt(e){return Qt(e)?e.value:e}const p1={get:(e,t,r)=>t==="__v_raw"?e:vt(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const i=e[t];return Qt(i)&&!Qt(r)?(i.value=r,!0):Reflect.set(e,t,r,n)}};function d0(e){return Vn(e)?e:new Proxy(e,p1)}class f1{constructor(t,r,n){this.fn=t,this.setter=r,this._value=void 0,this.dep=new Bd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&kt!==this)return Zg(this,!0),!0}get value(){const t=this.dep.track();return e0(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function h1(e,t,r=!1){let n,i;return je(e)?n=e:(n=e.get,i=e.set),new f1(n,i,r)}const eo={},Eo=new WeakMap;let vi;function m1(e,t=!1,r=vi){if(r){let n=Eo.get(r);n||Eo.set(r,n=[]),n.push(e)}}function g1(e,t,r=St){const{immediate:n,deep:i,once:s,scheduler:a,augmentJob:o,call:l}=r,d=C=>i?C:kr(C)||i===!1||i===0?wn(C,1):wn(C);let p,f,g,v,y=!1,$=!1;if(Qt(e)?(f=()=>e.value,y=kr(e)):Vn(e)?(f=()=>d(e),y=!0):Re(e)?($=!0,y=e.some(C=>Vn(C)||kr(C)),f=()=>e.map(C=>{if(Qt(C))return C.value;if(Vn(C))return d(C);if(je(C))return l?l(C,2):C()})):je(e)?t?f=l?()=>l(e,2):e:f=()=>{if(g){rn();try{g()}finally{nn()}}const C=vi;vi=p;try{return l?l(e,3,[v]):e(v)}finally{vi=C}}:f=en,t&&i){const C=f,O=i===!0?1/0:i;f=()=>wn(C(),O)}const E=q_(),S=()=>{p.stop(),E&&E.active&&Id(E.effects,p)};if(s&&t){const C=t;t=(...O)=>{try{return C(...O)}finally{S()}}}let x=$?new Array(e.length).fill(eo):eo;const A=C=>{if(!(!(p.flags&1)||!p.dirty&&!C))if(t){const O=p.run();if(C||i||y||($?O.some((D,N)=>Zr(D,x[N])):Zr(O,x))){const D=vi;rn();try{g&&g(),vi=p;const N=[O,x===eo?void 0:$&&x[0]===eo?[]:x,v];x=O,l?l(t,3,N):t(...N)}finally{vi=D,nn()}}}else p.run()};return o&&o(A),p=new Xg(f),p.scheduler=a?()=>a(A,!1):A,v=C=>m1(C,!1,p),g=p.onStop=()=>{const C=Eo.get(p);if(C){if(l)l(C,4);else for(const O of C)O();Eo.delete(p)}},t?n?A(!0):x=p.run():a?a(A.bind(null,!0),!0):p.run(),S.pause=p.pause.bind(p),S.resume=p.resume.bind(p),S.stop=S,S}function wn(e,t=1/0,r){if(t<=0||!pt(e)||e.__v_skip||(r=r||new Map,(r.get(e)||0)>=t))return e;if(r.set(e,t),t--,Qt(e))wn(e.value,t,r);else if(Re(e))for(let n=0;n<e.length;n++)wn(e[n],t,r);else if(xn(e)||Fn(e))e.forEach(n=>{wn(n,t,r)});else if(jg(e)){for(const n in e)wn(e[n],t,r);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&wn(e[n],t,r)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ca(e,t,r,n){try{return n?e(...n):e()}catch(i){el(i,t,r)}}function Er(e,t,r,n){if(je(e)){const i=ca(e,t,r,n);return i&&Fg(i)&&i.catch(s=>{el(s,t,r)}),i}if(Re(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Er(e[s],t,r,n));return i}}function el(e,t,r,n=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||St;if(t){let o=t.parent;const l=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${r}`;for(;o;){const p=o.ec;if(p){for(let f=0;f<p.length;f++)if(p[f](e,l,d)===!1)return}o=o.parent}if(s){rn(),ca(s,null,10,[e,l,d]),nn();return}}y1(e,r,i,n,a)}function y1(e,t,r,n=!0,i=!1){if(i)throw e;console.error(e)}const nr=[];let Br=-1;const Xr=[];let Un=null,Zi=0;const c0=Promise.resolve();let Io=null;function Ti(e){const t=Io||c0;return e?t.then(this?e.bind(this):e):t}function b1(e){let t=Br+1,r=nr.length;for(;t<r;){const n=t+r>>>1,i=nr[n],s=ea(i);s<e||s===e&&i.flags&2?t=n+1:r=n}return t}function Ud(e){if(!(e.flags&1)){const t=ea(e),r=nr[nr.length-1];!r||!(e.flags&2)&&t>=ea(r)?nr.push(e):nr.splice(b1(t),0,e),e.flags|=1,p0()}}function p0(){Io||(Io=c0.then(m0))}function v1(e){if(!Re(e))Un&&e.id===-1?Un.splice(Zi+1,0,e):e.flags&1||(Xr.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Xr.push(e[t]);p0()}function f0(e,t,r,n=Br+1){for(;n<nr.length;n++){const i=nr[n];if(i&&i.flags&2){if(e&&i.id!==e.uid||t!==void 0&&!(i.id>=t))continue;nr.splice(n,1),n=e?n-1:Br,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function h0(e,t,r=0){if(Xr.length){let n=Xr,i=0;if(t){n=[];for(let a=0;a<Xr.length;a++){const o=Xr[a];(o.i!==void 0?!o.i||o.i.uid<r:t.has(o))?Xr[i++]=o:n.push(o)}}const s=[...new Set(n)].sort((a,o)=>ea(a)-ea(o));if(Xr.length=i,Un){for(let a=0;a<s.length;a++)Un.push(s[a]);return}for(Un=s,Zi=0;Zi<Un.length;Zi++){const a=Un[Zi];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Un=null,Zi=0}}let Ul=!1;function w1(e,t){if(Ul){e();return}const r=t===void 0?void 0:new Set(Xr);e(),Ul=!0;try{f0(void 0,t),h0(void 0,r,t)}finally{Ul=!1}}const ea=e=>e.id==null?e.flags&2?-1:1/0:e.id;function m0(e){try{for(Br=0;Br<nr.length;Br++){const t=nr[Br];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ca(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Br<nr.length;Br++){const t=nr[Br];t&&(t.flags&=-2)}Br=-1,nr.length=0,h0(),Io=null,(nr.length||Xr.length)&&m0()}}let Tr=null,g0=null;function Ao(e){const t=Tr;return Tr=e,g0=e&&e.type.__scopeId||null,t}function y0(e,t=Tr,r){if(!t||e._n)return e;const n=(...i)=>{n._d&&Ro(-1);const s=Ao(t),a=Ei.length;let o;try{o=e(...i)}finally{for(let l=Ei.length;l>a;l--)W0();Ao(s),n._d&&Ro(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Sr(e,t){if(Tr===null)return e;const r=al(Tr),n=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,o,l=St]=t[i];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&wn(a),n.push({dir:s,instance:r,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function di(e,t,r,n){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(rn(),Er(l,r,8,[e.el,o,e,t]),nn())}}function _1(e,t){if(ir){let r=ir.provides;const n=ir.parent&&ir.parent.provides;n===r&&(r=ir.provides=Object.create(n)),r[e]=t}}function $o(e,t,r=!1){const n=K0();if(n||ts){let i=ts?ts._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return r&&je(t)?t.call(n&&n.proxy):t}}const x1=Symbol.for("v-scx"),$1=()=>$o(x1);function Ll(e,t,r){return b0(e,t,r)}function b0(e,t,r=St){const{immediate:n,deep:i,flush:s,once:a}=r,o=Lt({},r),l=t&&n||!t&&s!=="post";let d;if(sa){if(s==="sync"){const v=$1();d=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=en,v.resume=en,v.pause=en,v}}const p=ir;o.call=(v,y,$)=>Er(v,p,y,$);let f=!1;s==="post"?o.scheduler=v=>{v.i=p,ar(v,p&&p.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(v,y)=>{y?v():Ud(v)}),o.augmentJob=v=>{t&&(v.flags|=4),f&&(v.flags|=2,p&&(v.id=p.uid,v.i=p))};const g=g1(e,t,o);return sa&&(d?d.push(g):l&&g()),g}function S1(e,t,r){const n=this.proxy,i=Mt(e)?e.includes(".")?v0(n,e):()=>n[e]:e.bind(n,n);let s;je(t)?s=t:(s=t.handler,r=t);const a=ha(this),o=b0(i,s.bind(n),r);return a(),o}function v0(e,t){const r=t.split(".");return()=>{let n=e;for(let i=0;i<r.length&&n;i++)n=n[r[i]];return n}}const T1=Symbol("_vte"),tl=e=>e.__isTeleport,$r=Symbol("_leaveCb"),Ss=Symbol("_enterCb");function k1(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fa(()=>{e.isMounted=!0}),k0(()=>{e.isUnmounting=!0}),e}const _r=[Function,Array],w0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_r,onEnter:_r,onAfterEnter:_r,onEnterCancelled:_r,onBeforeLeave:_r,onLeave:_r,onAfterLeave:_r,onLeaveCancelled:_r,onBeforeAppear:_r,onAppear:_r,onAfterAppear:_r,onAppearCancelled:_r},C1={name:"BaseTransition",props:w0,setup(e,{slots:t}){const r=K0(),n=k1();return()=>{const i=t.default&&$0(t.default(),!0),s=i&&i.length?_0(i):r.subTree?Nt():void 0;if(!s)return;const a=ut(e),{mode:o}=a;if(n.isLeaving)return Fl(s);const l=Oo(s);if(!l)return Fl(s);let d=nd(l,a,n,r,f=>d=f);l.type!==Zt&&ns(l,d);let p=r.subTree&&Oo(r.subTree);if(p&&p.type!==Zt&&!wi(p,l)&&ta(r.subTree)){let f=nd(p,a,n,r);if(ns(p,f),o==="out-in"&&l.type!==Zt)return n.isLeaving=!0,f.afterLeave=()=>{n.isLeaving=!1,r.job.flags&8||r.update(),delete f.afterLeave,p=void 0},Fl(s);o==="in-out"&&l.type!==Zt?f.delayLeave=(g,v,y)=>{const $=x0(n,p);$[String(p.key)]=p,g[$r]=()=>{v(),g[$r]=void 0,delete d.delayedLeave,p=void 0},d.delayedLeave=()=>{y(),delete d.delayedLeave,p=void 0}}:p=void 0}else p&&(p=void 0);return s}}};function _0(e){let t=e[0];if(e.length>1){for(const r of e)if(r.type!==Zt){t=r;break}}return t}const E1=C1;function x0(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function nd(e,t,r,n,i){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:d,onAfterEnter:p,onEnterCancelled:f,onBeforeLeave:g,onLeave:v,onAfterLeave:y,onLeaveCancelled:$,onBeforeAppear:E,onAppear:S,onAfterAppear:x,onAppearCancelled:A}=t,C=String(e.key),O=x0(r,e),D=(q,Z)=>{q&&Er(q,n,9,Z)},N=(q,Z)=>{const ae=Z[1];D(q,Z),Re(q)?q.every(X=>X.length<=1)&&ae():q.length<=1&&ae()},k={mode:a,persisted:o,beforeEnter(q){let Z=l;if(!r.isMounted)if(s)Z=E||l;else return;q[$r]&&q[$r](!0);const ae=O[C];if(ae&&wi(e,ae)){let X=ae.el[$r];if(!X){const oe=ta(ae);X=oe&&oe.el[$r]}X&&X()}D(Z,[q])},enter(q){if(O[C]===e)return;let Z=d,ae=p,X=f;if(!r.isMounted)if(s)Z=S||d,ae=x||p,X=A||f;else return;let oe=!1;q[Ss]=J=>{oe||(oe=!0,J?D(X,[q]):D(ae,[q]),k.delayedLeave&&k.delayedLeave(),q[Ss]=void 0)};const F=q[Ss].bind(null,!1);Z?N(Z,[q,F]):F()},leave(q,Z){const ae=String(e.key);if(q[Ss]&&q[Ss](!0),r.isUnmounting)return Z();D(g,[q]);let X=!1;q[$r]=F=>{X||(X=!0,Z(),F?D($,[q]):D(y,[q]),q[$r]=void 0,O[ae]===e&&delete O[ae])};const oe=q[$r].bind(null,!1);O[ae]=e,v?N(v,[q,oe]):oe()},clone(q){const Z=nd(q,t,r,n,i);return i&&i(Z),Z}};return k}function Fl(e){if(rl(e))return e=Wn(e),e.children=null,e}function Oo(e){if(!rl(e))return tl(e.type)&&e.children?_0(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:r}=e;if(r){if(t&16)return r[0];if(t&32&&je(r.default))return r.default()}}function ns(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const r=e.component.subTree;ns(tl(r.type)&&Oo(r)||r,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===Wt&&Re(e.children)){const r=O0(e.children,!1);r&&ns(r,t)}}function $0(e,t=!1,r){let n=[],i=0;for(let s=0;s<e.length;s++){let a=e[s];const o=r==null?a.key:String(r)+String(a.key!=null?a.key:s);a.type===Wt?(a.patchFlag&128&&i++,n=n.concat($0(a.children,t,o))):(t||a.type!==Zt)&&n.push(o!=null?Wn(a,{key:o}):a)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function ta(e){if(e.component)return ta(e.component.subTree);if(e.type===Wt){const t=Re(e.children)&&O0(e.children,!1);return t?ta(t):void 0}if(e.type!==Zt)return e}function pa(e,t){return je(e)?Lt({name:e.name},t,{setup:e}):e}function S0(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function xp(e,t){let r;return!!((r=Object.getOwnPropertyDescriptor(e,t))&&!r.configurable)}const zo=new WeakMap;function Hs(e,t,r,n,i=!1){if(Re(e)){e.forEach(($,E)=>Hs($,t&&(Re(t)?t[E]:t),r,n,i));return}if(Gs(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Hs(e,t,r,n.component.subTree);return}const s=n.shapeFlag&4?al(n.component):n.el,a=i?null:s,{i:o,r:l}=e,d=t&&t.r,p=o.refs===St?o.refs={}:o.refs,f=o.setupState,g=ut(f),v=f===St?Lg:$=>xp(p,$)?!1:dt(g,$),y=($,E)=>!(E&&xp(p,E));if(d!=null&&d!==l){if($p(t),Mt(d))p[d]=null,v(d)&&(f[d]=null);else if(Qt(d)){const $=t;y(d,$.k)&&(d.value=null),$.k&&(p[$.k]=null)}}if(je(l))ca(l,o,12,[a,p]);else{const $=Mt(l),E=Qt(l);if($||E){const S=()=>{if(e.f){const x=$?v(l)?f[l]:p[l]:y()||!e.k?l.value:p[e.k];if(i)Re(x)&&Id(x,s);else if(Re(x))x.includes(s)||x.push(s);else if($)p[l]=[s],v(l)&&(f[l]=p[l]);else{const A=[s];y(l,e.k)&&(l.value=A),e.k&&(p[e.k]=A)}}else $?(p[l]=a,v(l)&&(f[l]=a)):E&&(y(l,e.k)&&(l.value=a),e.k&&(p[e.k]=a))};if(a){const x=()=>{S(),zo.delete(e)};x.id=-1,zo.set(e,x),ar(x,r)}else $p(e),S()}}}function $p(e){const t=zo.get(e);t&&(t.flags|=8,zo.delete(e))}Qo().requestIdleCallback;Qo().cancelIdleCallback;const Gs=e=>!!e.type.__asyncLoader,rl=e=>e.type.__isKeepAlive;function I1(e,t){T0(e,"a",t)}function A1(e,t){T0(e,"da",t)}function T0(e,t,r=ir){const n=e.__wdc||(e.__wdc=()=>{let i=r;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(nl(t,n,r),r){let i=r.parent;for(;i&&i.parent;)rl(i.parent.vnode)&&O1(n,t,r,i),i=i.parent}}function O1(e,t,r,n){const i=nl(t,e,n,!0);Ld(()=>{Id(n[t],i)},r)}function nl(e,t,r=ir,n=!1){if(r){const i=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...a)=>{rn();const o=ha(r),l=Er(t,r,e,a);return o(),nn(),l});return n?i.unshift(s):i.push(s),s}}const Sn=e=>(t,r=ir)=>{(!sa||e==="sp")&&nl(e,(...n)=>t(...n),r)},z1=Sn("bm"),fa=Sn("m"),M1=Sn("bu"),R1=Sn("u"),k0=Sn("bum"),Ld=Sn("um"),B1=Sn("sp"),P1=Sn("rtg"),D1=Sn("rtc");function N1(e,t=ir){nl("ec",e,t)}const U1=Symbol.for("v-ndc");function is(e,t,r,n){let i;const s=r,a=Re(e);if(a||Mt(e)){const o=a&&Vn(e);let l=!1,d=!1;o&&(l=!kr(e),d=sn(e),e=Jo(e)),i=new Array(e.length);for(let p=0,f=e.length;p<f;p++)i[p]=t(l?d?jn(Cr(e[p])):Cr(e[p]):e[p],p,void 0,s)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)i=[];else{i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s)}else if(pt(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,d=o.length;l<d;l++){const p=o[l];i[l]=t(e[p],p,l,s)}}else i=[];return i}const id=e=>e?X0(e)?al(e):id(e.parent):null,Ks=Lt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>id(e.parent),$root:e=>id(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>E0(e),$forceUpdate:e=>e.f||(e.f=()=>{Ud(e.update)}),$nextTick:e=>e.n||(e.n=Ti.bind(e.proxy)),$watch:e=>S1.bind(e)}),Vl=(e,t)=>e!==St&&!e.__isScriptSetup&&dt(e,t),L1={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:n,data:i,props:s,accessCache:a,type:o,appContext:l}=e;if(t[0]!=="$"){const g=a[t];if(g!==void 0)switch(g){case 1:return n[t];case 2:return i[t];case 4:return r[t];case 3:return s[t]}else{if(Vl(n,t))return a[t]=1,n[t];if(i!==St&&dt(i,t))return a[t]=2,i[t];if(dt(s,t))return a[t]=3,s[t];if(r!==St&&dt(r,t))return a[t]=4,r[t];sd&&(a[t]=0)}}const d=Ks[t];let p,f;if(d)return t==="$attrs"&&Yt(e.attrs,"get",""),d(e);if((p=o.__cssModules)&&(p=p[t]))return p;if(r!==St&&dt(r,t))return a[t]=4,r[t];if(f=l.config.globalProperties,dt(f,t))return f[t]},set({_:e},t,r){const{data:n,setupState:i,ctx:s}=e;return Vl(i,t)?(i[t]=r,!0):n!==St&&dt(n,t)?(n[t]=r,!0):dt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:i,props:s,type:a}},o){let l;return!!(r[o]||e!==St&&o[0]!=="$"&&dt(e,o)||Vl(t,o)||dt(s,o)||dt(n,o)||dt(Ks,o)||dt(i.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:dt(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function Sp(e){return Re(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let sd=!0;function F1(e){const t=E0(e),r=e.proxy,n=e.ctx;sd=!1,t.beforeCreate&&Tp(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:d,created:p,beforeMount:f,mounted:g,beforeUpdate:v,updated:y,activated:$,deactivated:E,beforeDestroy:S,beforeUnmount:x,destroyed:A,unmounted:C,render:O,renderTracked:D,renderTriggered:N,errorCaptured:k,serverPrefetch:q,expose:Z,inheritAttrs:ae,components:X,directives:oe,filters:F}=t;if(d&&V1(d,n,null),a)for(const le in a){const de=a[le];je(de)&&(n[le]=de.bind(r))}if(i){const le=i.call(r,r);pt(le)&&(e.data=rs(le))}if(sd=!0,s)for(const le in s){const de=s[le],_e=je(de)?de.bind(r,r):je(de.get)?de.get.bind(r,r):en,ke=!je(de)&&je(de.set)?de.set.bind(r):en,te=Ys({get:_e,set:ke});Object.defineProperty(n,le,{enumerable:!0,configurable:!0,get:()=>te.value,set:$e=>te.value=$e})}if(o)for(const le in o)C0(o[le],n,r,le);if(l){const le=je(l)?l.call(r):l;Reflect.ownKeys(le).forEach(de=>{_1(de,le[de])})}p&&Tp(p,e,"c");function pe(le,de){Re(de)?de.forEach(_e=>le(_e.bind(r))):de&&le(de.bind(r))}if(pe(z1,f),pe(fa,g),pe(M1,v),pe(R1,y),pe(I1,$),pe(A1,E),pe(N1,k),pe(D1,D),pe(P1,N),pe(k0,x),pe(Ld,C),pe(B1,q),Re(Z))if(Z.length){const le=e.exposed||(e.exposed={});Z.forEach(de=>{Object.defineProperty(le,de,{get:()=>r[de],set:_e=>r[de]=_e,enumerable:!0})})}else e.exposed||(e.exposed={});O&&e.render===en&&(e.render=O),ae!=null&&(e.inheritAttrs=ae),X&&(e.components=X),oe&&(e.directives=oe),q&&S0(e)}function V1(e,t,r=en){Re(e)&&(e=ad(e));for(const n in e){const i=e[n];let s;pt(i)?"default"in i?s=$o(i.from||n,i.default,!0):s=$o(i.from||n):s=$o(i),Qt(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[n]=s}}function Tp(e,t,r){Er(Re(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function C0(e,t,r,n){let i=n.includes(".")?v0(r,n):()=>r[n];if(Mt(e)){const s=t[e];je(s)&&Ll(i,s)}else if(je(e))Ll(i,e.bind(r));else if(pt(e))if(Re(e))e.forEach(s=>C0(s,t,r,n));else{const s=je(e.handler)?e.handler.bind(r):t[e.handler];je(s)&&Ll(i,s,e)}}function E0(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!r&&!n?l=t:(l={},i.length&&i.forEach(d=>Mo(l,d,a,!0)),Mo(l,t,a)),pt(t)&&s.set(t,l),l}function Mo(e,t,r,n=!1){const{mixins:i,extends:s}=t;s&&Mo(e,s,r,!0),i&&i.forEach(a=>Mo(e,a,r,!0));for(const a in t)if(!(n&&a==="expose")){const o=j1[a]||r&&r[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const j1={data:kp,props:Cp,emits:Cp,methods:Ds,computed:Ds,beforeCreate:rr,created:rr,beforeMount:rr,mounted:rr,beforeUpdate:rr,updated:rr,beforeDestroy:rr,beforeUnmount:rr,destroyed:rr,unmounted:rr,activated:rr,deactivated:rr,errorCaptured:rr,serverPrefetch:rr,components:Ds,directives:Ds,watch:q1,provide:kp,inject:W1};function kp(e,t){return t?e?function(){return Lt(je(e)?e.call(this,this):e,je(t)?t.call(this,this):t)}:t:e}function W1(e,t){return Ds(ad(e),ad(t))}function ad(e){if(Re(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function rr(e,t){return e?[...new Set([].concat(e,t))]:t}function Ds(e,t){return e?Lt(Object.create(null),e,t):t}function Cp(e,t){return e?Re(e)&&Re(t)?[...new Set([...e,...t])]:Lt(Object.create(null),Sp(e),Sp(t??{})):t}function q1(e,t){if(!e)return t;if(!t)return e;const r=Lt(Object.create(null),e);for(const n in t)r[n]=rr(e[n],t[n]);return r}function I0(){return{app:null,config:{isNativeTag:Lg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let H1=0;function G1(e,t){return function(n,i=null){je(n)||(n=Lt({},n)),i!=null&&!pt(i)&&(i=null);const s=I0(),a=new WeakSet,o=[];let l=!1;const d=s.app={_uid:H1++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:S2,get config(){return s.config},set config(p){},use(p,...f){return a.has(p)||(p&&je(p.install)?(a.add(p),p.install(d,...f)):je(p)&&(a.add(p),p(d,...f))),d},mixin(p){return s.mixins.includes(p)||s.mixins.push(p),d},component(p,f){return f?(s.components[p]=f,d):s.components[p]},directive(p,f){return f?(s.directives[p]=f,d):s.directives[p]},mount(p,f,g){if(!l){const v=d._ceVNode||Ke(n,i);return v.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),e(v,p,g),l=!0,d._container=p,p.__vue_app__=d,al(v.component)}},onUnmount(p){o.push(p)},unmount(){l&&(Er(o,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(p,f){return s.provides[p]=f,d},runWithContext(p){const f=ts;ts=d;try{return p()}finally{ts=f}}};return d}}let ts=null;const K1=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Nr(t)}Modifiers`]||e[`${Ri(t)}Modifiers`];function X1(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||St;let i=r;const s=t.startsWith("update:"),a=s&&K1(n,t.slice(7));a&&(a.trim&&(i=r.map(p=>Mt(p)?p.trim():p)),a.number&&(i=i.map(Zo)));let o,l=n[o=Rl(t)]||n[o=Rl(Nr(t))];!l&&s&&(l=n[o=Rl(Ri(t))]),l&&Er(l,e,6,i);const d=n[o+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Er(d,e,6,i)}}const Y1=new WeakMap;function A0(e,t,r=!1){const n=r?Y1:t.emitsCache,i=n.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!je(e)){const l=d=>{const p=A0(d,t,!0);p&&(o=!0,Lt(a,p))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(pt(e)&&n.set(e,null),null):(Re(s)?s.forEach(l=>a[l]=null):Lt(a,s),pt(e)&&n.set(e,a),a)}function il(e,t){return!e||!Ko(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),dt(e,t[0].toLowerCase()+t.slice(1))||dt(e,Ri(t))||dt(e,t))}function Ep(e){const{type:t,vnode:r,proxy:n,withProxy:i,propsOptions:[s],slots:a,attrs:o,emit:l,render:d,renderCache:p,props:f,data:g,setupState:v,ctx:y,inheritAttrs:$}=e,E=Ao(e);let S,x;try{if(r.shapeFlag&4){const C=i||n,O=C;S=Yr(d.call(O,C,p,f,v,g,y)),x=o}else{const C=t;S=Yr(C.length>1?C(f,{attrs:o,slots:a,emit:l}):C(f,null)),x=t.props?o:Z1(o)}}catch(C){Ei.length=0,el(C,e,1),S=Ke(Zt)}let A=S;if(x&&$!==!1){const C=Object.keys(x),{shapeFlag:O}=A;C.length&&O&7&&(s&&C.some(Xo)&&(x=Q1(x,s)),A=Wn(A,x,!1,!0))}if(r.dirs&&(A=Wn(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(r.dirs):r.dirs),r.transition){const C=tl(A.type)&&Oo(A)||A;ns(C,r.transition)}return S=A,Ao(E),S}function O0(e,t=!0){let r;for(let n=0;n<e.length;n++){const i=e[n];if(na(i)){if(i.type!==Zt||i.children==="v-if"){if(r)return;r=i}}else return}return r}const Z1=e=>{let t;for(const r in e)(r==="class"||r==="style"||Ko(r))&&((t||(t={}))[r]=e[r]);return t},Q1=(e,t)=>{const r={};for(const n in e)(!Xo(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function J1(e,t,r){const{props:n,children:i,component:s}=e,{props:a,children:o,patchFlag:l}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?Ip(n,a,d):!!a;if(l&8){const p=t.dynamicProps;for(let f=0;f<p.length;f++){const g=p[f];if(z0(a,n,g)&&!il(d,g))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Ip(n,a,d):!0:!!a;return!1}function Ip(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(!dt(e,s)||z0(t,e,s)&&!il(r,s))return!0}return!1}function z0(e,t,r){const n=e[r],i=t[r];return r==="style"&&pt(n)&&pt(i)?!$n(n,i):n!==i}function e2({vnode:e,parent:t,suspense:r},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=n,e=i),i===e)(e=t.vnode).el=n,t=t.parent;else break}r&&r.activeBranch===e&&(r.vnode.el=n)}const M0={},R0=()=>Object.create(M0),B0=e=>Object.getPrototypeOf(e)===M0;function t2(e,t,r,n=!1){const i={},s=R0();e.propsDefaults=Object.create(null),P0(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);r?e.props=n?i:l1(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function r2(e,t,r,n){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=ut(i),[l]=e.propsOptions;let d=!1;if((n||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let f=0;f<p.length;f++){let g=p[f];if(il(e.emitsOptions,g))continue;const v=t[g];if(l)if(dt(s,g))v!==s[g]&&(s[g]=v,d=!0);else{const y=Nr(g);i[y]=od(l,o,y,v,e,!1)}else v!==s[g]&&(s[g]=v,d=!0)}}}else{P0(e,t,i,s)&&(d=!0);let p;for(const f in o)(!t||!dt(t,f)&&((p=Ri(f))===f||!dt(t,p)))&&(l?r&&(r[f]!==void 0||r[p]!==void 0)&&(i[f]=od(l,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!dt(t,f))&&(delete s[f],d=!0)}d&&vn(e.attrs,"set","")}function P0(e,t,r,n){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(js(l))continue;const d=t[l];let p;i&&dt(i,p=Nr(l))?!s||!s.includes(p)?r[p]=d:(o||(o={}))[p]=d:il(e.emitsOptions,l)||(!(l in n)||d!==n[l])&&(n[l]=d,a=!0)}if(s){const l=ut(r),d=o||St;for(let p=0;p<s.length;p++){const f=s[p];r[f]=od(i,l,f,d[f],e,!dt(d,f))}}return a}function od(e,t,r,n,i,s){const a=e[r];if(a!=null){const o=dt(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&je(l)){const{propsDefaults:d}=i;if(r in d)n=d[r];else{const p=ha(i);n=d[r]=l.call(null,t),p()}}else n=l;i.ce&&i.ce._setProp(r,n)}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===Ri(r))&&(n=!0))}return n}const n2=new WeakMap;function D0(e,t,r=!1){const n=r?n2:t.propsCache,i=n.get(e);if(i)return i;const s=e.props,a={},o=[];let l=!1;if(!je(e)){const p=f=>{l=!0;const[g,v]=D0(f,t,!0);Lt(a,g),v&&o.push(...v)};!r&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!s&&!l)return pt(e)&&n.set(e,Si),Si;if(Re(s))for(let p=0;p<s.length;p++){const f=Nr(s[p]);Ap(f)&&(a[f]=St)}else if(s)for(const p in s){const f=Nr(p);if(Ap(f)){const g=s[p],v=a[f]=Re(g)||je(g)?{type:g}:Lt({},g),y=v.type;let $=!1,E=!0;if(Re(y))for(let S=0;S<y.length;++S){const x=y[S],A=je(x)&&x.name;if(A==="Boolean"){$=!0;break}else A==="String"&&(E=!1)}else $=je(y)&&y.name==="Boolean";v[0]=$,v[1]=E,($||dt(v,"default"))&&o.push(f)}}const d=[a,o];return pt(e)&&n.set(e,d),d}function Ap(e){return e[0]!=="$"&&!js(e)}const Fd=e=>e==="_"||e==="_ctx"||e==="$stable",Vd=e=>Re(e)?e.map(Yr):[Yr(e)],i2=(e,t,r)=>{if(t._n)return t;const n=y0((...i)=>Vd(t(...i)),r);return n._c=!1,n},N0=(e,t,r)=>{const n=e._ctx;for(const i in e){if(Fd(i))continue;const s=e[i];if(je(s))t[i]=i2(i,s,n);else if(s!=null){const a=Vd(s);t[i]=()=>a}}},U0=(e,t)=>{const r=Vd(t);e.slots.default=()=>r},L0=(e,t,r)=>{for(const n in t)(r||!Fd(n))&&(e[n]=t[n])},s2=(e,t,r)=>{const n=e.slots=R0();if(e.vnode.shapeFlag&32){const i=t._;i?(L0(n,t,r),r&&qg(n,"_",i,!0)):N0(t,n)}else t&&U0(e,t)},a2=(e,t,r)=>{const{vnode:n,slots:i}=e;let s=!0,a=St;if(n.shapeFlag&32){const o=t._;o?r&&o===1?s=!1:L0(i,t,r):(s=!t.$stable,N0(t,i)),a=t}else t&&(U0(e,t),a={default:1});if(s)for(const o in i)!Fd(o)&&a[o]==null&&delete i[o]},ar=c2;function o2(e){return l2(e)}function l2(e,t){const r=Qo();r.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:d,setElementText:p,parentNode:f,nextSibling:g,setScopeId:v=en,insertStaticContent:y}=e,$=(M,U,H,Y=null,ne=null,se=null,ge=void 0,fe=null,he=!!U.dynamicChildren)=>{if(M===U)return;M&&!wi(M,U)&&(Y=tt(M),$e(M,ne,se,!0),M=null),U.patchFlag===-2&&(he=!1,U.dynamicChildren=null),U.dynamicChildren&&M&&M.dynamicChildren&&M.dynamicChildren.hasOnce&&(U.dynamicChildren===Si&&(U.dynamicChildren=[]),U.dynamicChildren.hasOnce=!0);const{type:ie,ref:Ce,shapeFlag:be}=U;switch(ie){case sl:E(M,U,H,Y);break;case Zt:S(M,U,H,Y);break;case So:M==null&&x(U,H,Y,ge);break;case Wt:X(M,U,H,Y,ne,se,ge,fe,he);break;default:be&1?O(M,U,H,Y,ne,se,ge,fe,he):be&6?oe(M,U,H,Y,ne,se,ge,fe,he):(be&64||be&128)&&ie.process(M,U,H,Y,ne,se,ge,fe,he,We)}Ce!=null&&ne?Hs(Ce,M&&M.ref,se,U||M,!U):Ce==null&&M&&M.ref!=null&&Hs(M.ref,null,se,M,!0)},E=(M,U,H,Y)=>{if(M==null)n(U.el=o(U.children),H,Y);else{const ne=U.el=M.el;U.children!==M.children&&d(ne,U.children)}},S=(M,U,H,Y)=>{M==null?n(U.el=l(U.children||""),H,Y):U.el=M.el},x=(M,U,H,Y)=>{[M.el,M.anchor]=y(M.children,U,H,Y,M.el,M.anchor)},A=({el:M,anchor:U},H,Y)=>{let ne;for(;M&&M!==U;)ne=g(M),n(M,H,Y),M=ne;n(U,H,Y)},C=({el:M,anchor:U})=>{let H;for(;M&&M!==U;)H=g(M),i(M),M=H;i(U)},O=(M,U,H,Y,ne,se,ge,fe,he)=>{if(U.type==="svg"?ge="svg":U.type==="math"&&(ge="mathml"),M==null)D(U,H,Y,ne,se,ge,fe,he);else{const ie=M.el&&M.el._isVueCE?M.el:null;try{ie&&ie._beginPatch(),q(M,U,ne,se,ge,fe,he)}finally{ie&&ie._endPatch()}}},D=(M,U,H,Y,ne,se,ge,fe)=>{let he,ie;const{props:Ce,shapeFlag:be,transition:Ae,dirs:Ee}=M;if(he=M.el=a(M.type,se,Ce&&Ce.is,Ce),be&8?p(he,M.children):be&16&&k(M.children,he,null,Y,ne,jl(M,se),ge,fe),Ee&&di(M,null,Y,"created"),N(he,M,M.scopeId,ge,Y),Ce){for(const Fe in Ce)Fe!=="value"&&!js(Fe)&&s(he,Fe,null,Ce[Fe],se,Y);"value"in Ce&&s(he,"value",null,Ce.value,se),(ie=Ce.onVnodeBeforeMount)&&Hr(ie,Y,M)}Ee&&di(M,null,Y,"beforeMount");const Le=u2(ne,Ae);Le&&Ae.beforeEnter(he),n(he,U,H),((ie=Ce&&Ce.onVnodeMounted)||Le||Ee)&&ar(()=>{try{ie&&Hr(ie,Y,M),Le&&Ae.enter(he),Ee&&di(M,null,Y,"mounted")}finally{}},ne)},N=(M,U,H,Y,ne)=>{if(H&&v(M,H),Y)for(let se=0;se<Y.length;se++)v(M,Y[se]);if(ne){let se=ne.subTree;if(U===se||j0(se.type)&&(se.ssContent===U||se.ssFallback===U)){const ge=ne.vnode;N(M,ge,ge.scopeId,ge.slotScopeIds,ne.parent)}}},k=(M,U,H,Y,ne,se,ge,fe,he=0)=>{for(let ie=he;ie<M.length;ie++){const Ce=M[ie]=fe?bn(M[ie]):Yr(M[ie]);$(null,Ce,U,H,Y,ne,se,ge,fe)}},q=(M,U,H,Y,ne,se,ge)=>{const fe=U.el=M.el;let{patchFlag:he,dynamicChildren:ie,dirs:Ce}=U;he|=M.patchFlag&16;const be=M.props||St,Ae=U.props||St;let Ee;if(H&&ci(H,!1),(Ee=Ae.onVnodeBeforeUpdate)&&Hr(Ee,H,U,M),Ce&&di(U,M,H,"beforeUpdate"),H&&ci(H,!0),ie&&(!M.dynamicChildren||M.dynamicChildren.length!==ie.length)&&(he=0,ge=!1,ie=null),(be.innerHTML&&Ae.innerHTML==null||be.textContent&&Ae.textContent==null)&&p(fe,""),ie?Z(M.dynamicChildren,ie,fe,H,Y,jl(U,ne),se):ge||de(M,U,fe,null,H,Y,jl(U,ne),se,!1),he>0){if(he&16)ae(fe,be,Ae,H,ne);else if(he&2&&be.class!==Ae.class&&s(fe,"class",null,Ae.class,ne),he&4&&s(fe,"style",be.style,Ae.style,ne),he&8){const Le=U.dynamicProps;for(let Fe=0;Fe<Le.length;Fe++){const Ye=Le[Fe],ft=be[Ye],xt=Ae[Ye];(xt!==ft||Ye==="value")&&s(fe,Ye,ft,xt,ne,H)}}he&1&&M.children!==U.children&&p(fe,U.children)}else!ge&&ie==null&&ae(fe,be,Ae,H,ne);((Ee=Ae.onVnodeUpdated)||Ce)&&ar(()=>{Ee&&Hr(Ee,H,U,M),Ce&&di(U,M,H,"updated")},Y)},Z=(M,U,H,Y,ne,se,ge)=>{for(let fe=0;fe<U.length;fe++){const he=M[fe],ie=U[fe],Ce=he.el||ld(he),be=Ce&&(he.type===Wt||!wi(he,ie)||he.shapeFlag&198)?f(Ce):H;$(he,ie,be,null,Y,ne,se,ge,!0)}},ae=(M,U,H,Y,ne)=>{if(U!==H){if(U!==St)for(const se in U)!js(se)&&!(se in H)&&s(M,se,U[se],null,ne,Y);for(const se in H){if(js(se))continue;const ge=H[se],fe=U[se];ge!==fe&&se!=="value"&&s(M,se,fe,ge,ne,Y)}"value"in H&&s(M,"value",U.value,H.value,ne)}},X=(M,U,H,Y,ne,se,ge,fe,he)=>{const ie=U.el=M?M.el:o(""),Ce=U.anchor=M?M.anchor:o("");let{patchFlag:be,dynamicChildren:Ae,slotScopeIds:Ee}=U;Ee&&(fe=fe?fe.concat(Ee):Ee),M==null?(n(ie,H,Y),n(Ce,H,Y),k(U.children||[],H,Ce,ne,se,ge,fe,he)):be>0&&be&64&&Ae&&M.dynamicChildren&&M.dynamicChildren.length===Ae.length?(Z(M.dynamicChildren,Ae,H,ne,se,ge,fe),(U.key!=null||ne&&U===ne.subTree)&&F0(M,U,!0)):de(M,U,H,Ce,ne,se,ge,fe,he)},oe=(M,U,H,Y,ne,se,ge,fe,he)=>{U.slotScopeIds=fe,M==null?U.shapeFlag&512?ne.ctx.activate(U,H,Y,ge,he):F(U,H,Y,ne,se,ge,he):J(M,U,he)},F=(M,U,H,Y,ne,se,ge)=>{const fe=M.component=b2(M,Y,ne);if(rl(M)&&(fe.ctx.renderer=We),v2(fe,!1,ge),fe.asyncDep){if(ne&&ne.registerDep(fe,pe,ge,se),!M.el){const he=fe.subTree=Ke(Zt);S(null,he,U,H),M.placeholder=he.el}}else pe(fe,M,U,H,ne,se,ge)},J=(M,U,H)=>{const Y=U.component=M.component;if(J1(M,U,H))if(Y.asyncDep&&!Y.asyncResolved){U.el=M.el,U.placeholder=M.placeholder,le(Y,U,H);return}else Y.next=U,Y.update();else U.el=M.el,U.placeholder=M.placeholder,Y.vnode=U},pe=(M,U,H,Y,ne,se,ge)=>{const fe=()=>{if(M.isMounted){let{next:be,bu:Ae,u:Ee,parent:Le,vnode:Fe}=M;{const Ot=V0(M);if(Ot){be&&(be.el=Fe.el,le(M,be,ge)),Ot.asyncDep.then(()=>{ar(()=>{M.isUnmounted||ie()},ne)});return}}let Ye=be,ft;ci(M,!1),be?(be.el=Fe.el,le(M,be,ge)):be=Fe,Ae&&xo(Ae),(ft=be.props&&be.props.onVnodeBeforeUpdate)&&Hr(ft,Le,be,Fe),ci(M,!0);const xt=Ep(M),Kt=M.subTree;M.subTree=xt,$(Kt,xt,f(Kt.el),tt(Kt),M,ne,se),be.el=xt.el,Ye===null&&e2(M,xt.el),Ee&&ar(Ee,ne),(ft=be.props&&be.props.onVnodeUpdated)&&ar(()=>Hr(ft,Le,be,Fe),ne)}else{let be;const{el:Ae,props:Ee}=U,{bm:Le,m:Fe,parent:Ye,root:ft,type:xt}=M,Kt=Gs(U);ci(M,!1),Le&&xo(Le),!Kt&&(be=Ee&&Ee.onVnodeBeforeMount)&&Hr(be,Ye,U),ci(M,!0);{ft.ce&&ft.ce._hasShadowRoot()&&ft.ce._injectChildStyle(xt,M.parent?M.parent.type:void 0);const Ot=M.subTree=Ep(M);$(null,Ot,H,Y,M,ne,se),U.el=Ot.el}if(Fe&&ar(Fe,ne),!Kt&&(be=Ee&&Ee.onVnodeMounted)){const Ot=U;ar(()=>Hr(be,Ye,Ot),ne)}(U.shapeFlag&256||Ye&&Gs(Ye.vnode)&&Ye.vnode.shapeFlag&256)&&M.a&&ar(M.a,ne),M.isMounted=!0,U=H=Y=null}};M.scope.on();const he=M.effect=new Xg(fe);M.scope.off();const ie=M.update=he.run.bind(he),Ce=M.job=he.runIfDirty.bind(he);Ce.i=M,Ce.id=M.uid,he.scheduler=()=>Ud(Ce),ci(M,!0),ie()},le=(M,U,H)=>{U.component=M;const Y=M.vnode.props;M.vnode=U,M.next=null,r2(M,U.props,Y,H),a2(M,U.children,H),rn(),f0(M),nn()},de=(M,U,H,Y,ne,se,ge,fe,he=!1)=>{const ie=M&&M.children,Ce=M?M.shapeFlag:0,be=U.children,{patchFlag:Ae,shapeFlag:Ee}=U;if(Ae>0){if(Ae&128){ke(ie,be,H,Y,ne,se,ge,fe,he);return}else if(Ae&256){_e(ie,be,H,Y,ne,se,ge,fe,he);return}}Ee&8?(Ce&16&&gt(ie,ne,se),be!==ie&&p(H,be)):Ce&16?Ee&16?ke(ie,be,H,Y,ne,se,ge,fe,he):gt(ie,ne,se,!0):(Ce&8&&p(H,""),Ee&16&&k(be,H,Y,ne,se,ge,fe,he))},_e=(M,U,H,Y,ne,se,ge,fe,he)=>{M=M||Si,U=U||Si;const ie=M.length,Ce=U.length,be=Math.min(ie,Ce);let Ae;for(Ae=0;Ae<be;Ae++){const Ee=U[Ae]=he?bn(U[Ae]):Yr(U[Ae]);$(M[Ae],Ee,H,null,ne,se,ge,fe,he)}ie>Ce?gt(M,ne,se,!0,!1,be):k(U,H,Y,ne,se,ge,fe,he,be)},ke=(M,U,H,Y,ne,se,ge,fe,he)=>{let ie=0;const Ce=U.length;let be=M.length-1,Ae=Ce-1;for(;ie<=be&&ie<=Ae;){const Ee=M[ie],Le=U[ie]=he?bn(U[ie]):Yr(U[ie]);if(wi(Ee,Le))$(Ee,Le,H,null,ne,se,ge,fe,he);else break;ie++}for(;ie<=be&&ie<=Ae;){const Ee=M[be],Le=U[Ae]=he?bn(U[Ae]):Yr(U[Ae]);if(wi(Ee,Le))$(Ee,Le,H,null,ne,se,ge,fe,he);else break;be--,Ae--}if(ie>be){if(ie<=Ae){const Ee=Ae+1,Le=Ee<Ce?U[Ee].el:Y;for(;ie<=Ae;)$(null,U[ie]=he?bn(U[ie]):Yr(U[ie]),H,Le,ne,se,ge,fe,he),ie++}}else if(ie>Ae)for(;ie<=be;)$e(M[ie],ne,se,!0),ie++;else{const Ee=ie,Le=ie,Fe=new Map;for(ie=Le;ie<=Ae;ie++){const re=U[ie]=he?bn(U[ie]):Yr(U[ie]);re.key!=null&&Fe.set(re.key,ie)}let Ye,ft=0;const xt=Ae-Le+1;let Kt=!1,Ot=0;const gr=new Array(xt);for(ie=0;ie<xt;ie++)gr[ie]=0;for(ie=Ee;ie<=be;ie++){const re=M[ie];if(ft>=xt){$e(re,ne,se,!0);continue}let j;if(re.key!=null)j=Fe.get(re.key);else for(Ye=Le;Ye<=Ae;Ye++)if(gr[Ye-Le]===0&&wi(re,U[Ye])){j=Ye;break}j===void 0?$e(re,ne,se,!0):(gr[j-Le]=ie+1,j>=Ot?Ot=j:Kt=!0,$(re,U[j],H,null,ne,se,ge,fe,he),ft++)}const or=Kt?d2(gr):Si;for(Ye=or.length-1,ie=xt-1;ie>=0;ie--){const re=Le+ie,j=U[re],me=U[re+1],ct=re+1<Ce?me.el||ld(me):Y;gr[ie]===0?$(null,j,H,ct,ne,se,ge,fe,he):Kt&&(Ye<0||ie!==or[Ye]?te(j,H,ct,2):Ye--)}}},te=(M,U,H,Y,ne=null)=>{const{el:se,type:ge,transition:fe,children:he,shapeFlag:ie}=M;if(ie&6){te(M.component.subTree,U,H,Y);return}if(ie&128){M.suspense.move(U,H,Y);return}if(ie&64){ge.move(M,U,H,We);return}if(ge===Wt){n(se,U,H);for(let be=0;be<he.length;be++)te(he[be],U,H,Y);n(M.anchor,U,H);return}if(ge===So){A(M,U,H);return}if(Y!==2&&ie&1&&fe)if(Y===0)fe.persisted&&!se[$r]?n(se,U,H):(fe.beforeEnter(se),n(se,U,H),ar(()=>fe.enter(se),ne));else{const{leave:be,delayLeave:Ae,afterLeave:Ee}=fe,Le=()=>{M.ctx.isUnmounted?i(se):n(se,U,H)},Fe=()=>{const Ye=se._isLeaving||!!se[$r];se._isLeaving&&se[$r](!0),fe.persisted&&!Ye?Le():be(se,()=>{Le(),Ee&&Ee()})};Ae?Ae(se,Le,Fe):Fe()}else n(se,U,H)},$e=(M,U,H,Y=!1,ne=!1)=>{const{type:se,props:ge,ref:fe,children:he,dynamicChildren:ie,shapeFlag:Ce,patchFlag:be,dirs:Ae,cacheIndex:Ee,memo:Le}=M;if((be===-2||ie&&ie.hasOnce)&&(ne=!1),fe!=null&&(rn(),Hs(fe,null,H,M,!0),nn()),Ee!=null&&(!M.ctx||M.ctx===U)&&(U.renderCache[Ee]=void 0),Ce&256){U.ctx.deactivate(M);return}const Fe=Ce&1&&Ae,Ye=!Gs(M);let ft;if(Ye&&(ft=ge&&ge.onVnodeBeforeUnmount)&&Hr(ft,U,M),Ce&6)_t(M.component,H,Y);else{if(Ce&128){M.suspense.unmount(H,Y);return}Fe&&di(M,null,U,"beforeUnmount"),Ce&64?M.type.remove(M,U,H,We,Y):ie&&!ie.hasOnce&&(se!==Wt||be>0&&be&64)?gt(ie,U,H,!1,!0):(se===Wt&&be&384||!ne&&Ce&16)&&gt(he,U,H),Y&&Se(M)}const xt=Le!=null&&Ee==null;(Ye&&(ft=ge&&ge.onVnodeUnmounted)||Fe||xt)&&ar(()=>{ft&&Hr(ft,U,M),Fe&&di(M,null,U,"unmounted"),xt&&(M.el=null)},H)},Se=M=>{const{type:U,el:H,anchor:Y,transition:ne}=M,se=U===Wt;if(se&&!ne){ve(H,Y);return}if(U===So){C(M),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave();return}const ge=se?ta(M):M,fe=()=>{se?f(H)&&ve(H,Y):i(H),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(ge&&ge.shapeFlag&1&&ne&&!ne.persisted){const{leave:he,delayLeave:ie}=ne,Ce=ge.el,be=()=>he(Ce,fe);ie?ie(Ce,fe,be):be()}else fe()},ve=(M,U)=>{let H;for(;M!==U;)H=g(M),i(M),M=H;i(U)},_t=(M,U,H)=>{const{bum:Y,scope:ne,job:se,subTree:ge,um:fe,m:he,a:ie}=M;Op(he),Op(ie),Y&&xo(Y),ne.stop(),se?(se.flags|=8,$e(ge,M,U,H)):M.vnode.el&&ge&&(ge.transition=M.vnode.transition,$e(ge,M,U,H)),fe&&ar(fe,U),ar(()=>{M.isUnmounted=!0},U)},gt=(M,U,H,Y=!1,ne=!1,se=0)=>{for(let ge=se;ge<M.length;ge++)$e(M[ge],U,H,Y,ne)},tt=M=>{if(M.shapeFlag&6)return tt(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const U=g(M.anchor||M.el),H=U&&U[T1];return H?g(H):U},Ct=(M,U,H)=>{const Y=M&&U._vnode?void 0:M&&M.component?M.component.uid:y2();w1(()=>{M==null?U._vnode&&$e(U._vnode,null,null,!0):$(U._vnode||null,M,U,null,null,null,H),U._vnode=M},Y)},We={p:$,um:$e,m:te,r:Se,mt:F,mc:k,pc:de,pbc:Z,n:tt,o:e};return{render:Ct,hydrate:void 0,createApp:G1(Ct)}}function jl({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function ci({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function u2(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function F0(e,t,r=!1){const n=e.children,i=t.children;if(Re(n)&&Re(i))for(let s=0;s<n.length;s++){const a=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=bn(i[s]),o.el=a.el),!r&&o.patchFlag!==-2&&F0(a,o)),o.type===sl&&(o.patchFlag===-1&&(o=i[s]=bn(o)),o.el=a.el),o.type===Zt&&!o.el&&(o.el=a.el)}}function d2(e){const t=e.slice(),r=[0];let n,i,s,a,o;const l=e.length;for(n=0;n<l;n++){const d=e[n];if(d!==0){if(i=r[r.length-1],e[i]<d){t[n]=i,r.push(n);continue}for(s=0,a=r.length-1;s<a;)o=s+a>>1,e[r[o]]<d?s=o+1:a=o;d<e[r[s]]&&(s>0&&(t[n]=r[s-1]),r[s]=n)}}for(s=r.length,a=r[s-1];s-- >0;)r[s]=a,a=t[a];return r}function V0(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:V0(t)}function Op(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ld(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ld(t.subTree):null}const j0=e=>e.__isSuspense;function c2(e,t){t&&t.pendingBranch?Re(e)?t.effects.push(...e):t.effects.push(e):v1(e)}const Wt=Symbol.for("v-fgt"),sl=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),So=Symbol.for("v-stc"),Ei=[];let hr=null;function Qe(e=!1){Ei.push(hr=e?null:[])}function W0(){Ei.pop(),hr=Ei[Ei.length-1]||null}let ra=1;function Ro(e,t=!1){ra+=e,e<0&&hr&&t&&(hr.hasOnce=!0)}function q0(e){return e.dynamicChildren=ra>0?hr||Si:null,W0(),ra>0&&hr&&hr.push(e),e}function at(e,t,r,n,i,s){return q0(V(e,t,r,n,i,s,!0))}function Xs(e,t,r,n,i){return q0(Ke(e,t,r,n,i,!0))}function na(e){return e?e.__v_isVNode===!0:!1}function wi(e,t){return e.type===t.type&&e.key===t.key}const H0=({key:e})=>e??null,To=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?Mt(e)||Qt(e)||je(e)?{i:Tr,r:e,k:t,f:!!r}:e:null);function V(e,t=null,r=null,n=0,i=null,s=e===Wt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&H0(t),ref:t&&To(t),scopeId:g0,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Tr};return o?(Bo(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=Mt(r)?8:16),ra>0&&!a&&hr&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hr.push(l),l}const Ke=p2;function p2(e,t=null,r=null,n=0,i=null,s=!1){if((!e||e===U1)&&(e=Zt),na(e)){const o=Wn(e,t,!0);return r&&Bo(o,r),ra>0&&!s&&hr&&(o.shapeFlag&6?hr[hr.indexOf(e)]=o:hr.push(o)),o.patchFlag=-2,o}if($2(e)&&(e=e.__vccOpts),t){t=f2(t);let{class:o,style:l}=t;o&&!Mt(o)&&(t.class=Qr(o)),pt(l)&&(Nd(l)&&!Re(l)&&(l=Lt({},l)),t.style=es(l))}const a=Mt(e)?1:j0(e)?128:tl(e)?64:pt(e)?4:je(e)?2:0;return V(e,t,r,n,i,a,s,!0)}function f2(e){return e?Nd(e)||B0(e)?Lt({},e):e:null}function Wn(e,t,r=!1,n=!1){const{props:i,ref:s,patchFlag:a,children:o,transition:l}=e,d=t?m2(i||{},t):i,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&H0(d),ref:t&&t.ref?r&&s?Re(s)?s.concat(To(t)):[s,To(t)]:To(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Wt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wn(e.ssContent),ssFallback:e.ssFallback&&Wn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&n&&ns(p,l.clone(p)),p}function h2(e=" ",t=0){return Ke(sl,null,e,t)}function Wl(e,t){const r=Ke(So,null,e);return r.staticCount=t,r}function Nt(e="",t=!1){return t?(Qe(),Xs(Zt,null,e)):Ke(Zt,null,e)}function Yr(e){return e==null||typeof e=="boolean"?Ke(Zt):Re(e)?Ke(Wt,null,e.slice()):na(e)?bn(e):Ke(sl,null,String(e))}function bn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wn(e)}function Bo(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(Re(t))r=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),Bo(e,i()),i._c&&(i._d=!0));return}else{r=32;const i=t._;!i&&!B0(t)?t._ctx=Tr:i===3&&Tr&&(Tr.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(je(t)){if(n&65){Bo(e,{default:t});return}t={default:t,_ctx:Tr},r=32}else t=String(t),n&64?(r=16,t=[h2(t)]):r=8;e.children=t,e.shapeFlag|=r}function m2(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=Qr([t.class,n.class]));else if(i==="style")t.style=es([t.style,n.style]);else if(Ko(i)){const s=t[i],a=n[i];a&&s!==a&&!(Re(s)&&s.includes(a))?t[i]=s?[].concat(s,a):a:a==null&&s==null&&!Xo(i)&&(t[i]=a)}else i!==""&&(t[i]=n[i])}return t}function Hr(e,t,r,n=null){Er(e,t,7,[r,n])}const g2=I0();let G0=0;function y2(){return G0}function b2(e,t,r){const n=e.type,i=(t?t.appContext:e.appContext)||g2,s={uid:G0++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new W_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:D0(n,i),emitsOptions:A0(n,i),emit:null,emitted:null,propsDefaults:St,inheritAttrs:n.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=X1.bind(null,s),e.ce&&e.ce(s),s}let ir=null;const K0=()=>ir||Tr;let Po,ia;{const e=Qo(),t=(r,n)=>{let i;return(i=e[r])||(i=e[r]=[]),i.push(n),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};Po=t("__VUE_INSTANCE_SETTERS__",r=>ir=r),ia=t("__VUE_SSR_SETTERS__",r=>sa=r)}const ha=e=>{const t=ir;return Po(e),e.scope.on(),()=>{e.scope.off(),Po(t)}},zp=()=>{ir&&ir.scope.off(),Po(null)};function X0(e){return e.vnode.shapeFlag&4}let sa=!1;function v2(e,t=!1,r=!1){t&&ia(t);const{props:n,children:i}=e.vnode,s=X0(e);t2(e,n,s,t),s2(e,i,r||t);const a=s?w2(e,t):void 0;return t&&ia(!1),a}function w2(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,L1);const{setup:n}=r;if(n){rn();const i=e.setupContext=n.length>1?x2(e):null,s=ha(e),a=ca(n,e,0,[e.props,i]),o=Fg(a);if(nn(),s(),(o||e.sp)&&!Gs(e)&&S0(e),o){if(a.then(zp,zp),t)return a.then(l=>{ia(!0);try{Mp(e,l,t)}finally{ia(!1)}}).catch(l=>{el(l,e,0)});e.asyncDep=a}else Mp(e,a)}else Y0(e)}function Mp(e,t,r){je(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pt(t)&&(e.setupState=d0(t)),Y0(e)}function Y0(e,t,r){const n=e.type;e.render||(e.render=n.render||en);{const i=ha(e);rn();try{F1(e)}finally{nn(),i()}}}const _2={get(e,t){return Yt(e,"get",""),e[t]}};function x2(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,_2),slots:e.slots,emit:e.emit,expose:t}}function al(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(d0(u1(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Ks)return Ks[r](e)},has(t,r){return r in t||r in Ks}})):e.proxy}function $2(e){return je(e)&&"__vccOpts"in e}const Ys=(e,t)=>h1(e,t,sa);function ud(e,t,r){try{Ro(-1);const n=arguments.length;return n===2?pt(t)&&!Re(t)?na(t)?Ke(e,null,[t]):Ke(e,t):Ke(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&na(r)&&(r=[r]),Ke(e,t,r))}finally{Ro(1)}}const S2="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dd;const Rp=typeof window<"u"&&window.trustedTypes;if(Rp)try{dd=Rp.createPolicy("vue",{createHTML:e=>e})}catch{}const Z0=dd?e=>dd.createHTML(e):e=>e,T2="http://www.w3.org/2000/svg",k2="http://www.w3.org/1998/Math/MathML",yn=typeof document<"u"?document:null,Bp=yn&&yn.createElement("template"),C2={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const i=t==="svg"?yn.createElementNS(T2,e):t==="mathml"?yn.createElementNS(k2,e):r?yn.createElement(e,{is:r}):yn.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>yn.createTextNode(e),createComment:e=>yn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,i,s){const a=r?r.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),r),!(i===s||!(i=i.nextSibling)););else{Bp.innerHTML=Z0(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=Bp.content;if(n==="svg"||n==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,r)}return[a?a.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},Mn="transition",Ts="animation",aa=Symbol("_vtc"),Q0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},E2=Lt({},w0,Q0),I2=e=>(e.displayName="Transition",e.props=E2,e),A2=I2((e,{slots:t})=>ud(E1,O2(e),t)),pi=(e,t=[])=>{Re(e)?e.forEach(r=>r(...t)):e&&e(...t)},Pp=e=>e?Re(e)?e.some(t=>t.length>1):e.length>1:!1;function O2(e){const t={};for(const X in e)X in Q0||(t[X]=e[X]);if(e.css===!1)return t;const{name:r="v",type:n,duration:i,enterFromClass:s=`${r}-enter-from`,enterActiveClass:a=`${r}-enter-active`,enterToClass:o=`${r}-enter-to`,appearFromClass:l=s,appearActiveClass:d=a,appearToClass:p=o,leaveFromClass:f=`${r}-leave-from`,leaveActiveClass:g=`${r}-leave-active`,leaveToClass:v=`${r}-leave-to`}=e,y=z2(i),$=y&&y[0],E=y&&y[1],{onBeforeEnter:S,onEnter:x,onEnterCancelled:A,onLeave:C,onLeaveCancelled:O,onBeforeAppear:D=S,onAppear:N=x,onAppearCancelled:k=A}=t,q=(X,oe,F,J)=>{X._enterCancelled=J,fi(X,oe?p:o),fi(X,oe?d:a),F&&F()},Z=(X,oe)=>{X._isLeaving=!1,fi(X,f),fi(X,v),fi(X,g),oe&&oe()},ae=X=>(oe,F)=>{const J=X?N:x,pe=()=>q(oe,X,F);pi(J,[oe,pe]),Dp(()=>{fi(oe,X?l:s),hn(oe,X?p:o),Pp(J)||Np(oe,n,$,pe)})};return Lt(t,{onBeforeEnter(X){pi(S,[X]),hn(X,s),hn(X,a)},onBeforeAppear(X){pi(D,[X]),hn(X,l),hn(X,d)},onEnter:ae(!1),onAppear:ae(!0),onLeave(X,oe){X._isLeaving=!0;const F=()=>Z(X,oe);hn(X,f),X._enterCancelled?(hn(X,g),Fp(X)):(Fp(X),hn(X,g)),Dp(()=>{X._isLeaving&&(fi(X,f),hn(X,v),Pp(C)||Np(X,n,E,F))}),pi(C,[X,F])},onEnterCancelled(X){q(X,!1,void 0,!0),pi(A,[X])},onAppearCancelled(X){q(X,!0,void 0,!0),pi(k,[X])},onLeaveCancelled(X){Z(X),pi(O,[X])}})}function z2(e){if(e==null)return null;if(pt(e))return[ql(e.enter),ql(e.leave)];{const t=ql(e);return[t,t]}}function ql(e){return B_(e)}function hn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e[aa]||(e[aa]=new Set)).add(t)}function fi(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const r=e[aa];r&&(r.delete(t),r.size||(e[aa]=void 0))}function Dp(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let M2=0;function Np(e,t,r,n){const i=e._endId=++M2,s=()=>{i===e._endId&&n()};if(r!=null)return setTimeout(s,r);const{type:a,timeout:o,propCount:l}=R2(e,t);if(!a)return n();const d=a+"end";let p=0;const f=()=>{e.removeEventListener(d,g),s()},g=v=>{v.target===e&&++p>=l&&f()};setTimeout(()=>{p<l&&f()},o+1),e.addEventListener(d,g)}function R2(e,t){const r=window.getComputedStyle(e),n=y=>(r[y]||"").split(", "),i=n(`${Mn}Delay`),s=n(`${Mn}Duration`),a=Up(i,s),o=n(`${Ts}Delay`),l=n(`${Ts}Duration`),d=Up(o,l);let p=null,f=0,g=0;t===Mn?a>0&&(p=Mn,f=a,g=s.length):t===Ts?d>0&&(p=Ts,f=d,g=l.length):(f=Math.max(a,d),p=f>0?a>d?Mn:Ts:null,g=p?p===Mn?s.length:l.length:0);const v=p===Mn&&/\b(?:transform|all)(?:,|$)/.test(n(`${Mn}Property`).toString());return{type:p,timeout:f,propCount:g,hasTransform:v}}function Up(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>Lp(r)+Lp(e[n])))}function Lp(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Fp(e){return(e?e.ownerDocument:document).body.offsetHeight}function B2(e,t,r){const n=e[aa];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const Vp=Symbol("_vod"),P2=Symbol("_vsh"),D2=Symbol(""),N2=/(?:^|;)\s*display\s*:/;function U2(e,t,r){const n=e.style,i=Mt(r);let s=!1;if(r&&!i){if(t)if(Mt(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();r[o]==null&&Ns(n,o,"")}else for(const a in t)r[a]==null&&Ns(n,a,"");for(const a in r){a==="display"&&(s=!0);const o=r[a];o!=null?F2(e,a,!Mt(t)&&t?t[a]:void 0,o)||Ns(n,a,o):Ns(n,a,"")}}else if(i){if(t!==r){const a=n[D2];a&&(r+=";"+a),n.cssText=r,s=N2.test(r)}}else t&&e.removeAttribute("style");Vp in e&&((!i||t!==r)&&(e[Vp]=s?n.display:""),e[P2]&&(n.display="none"))}const to=/\s*!important$/;function Ns(e,t,r){if(Re(r))r.forEach(n=>Ns(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))to.test(r)?e.setProperty(t,r.replace(to,""),"important"):e.setProperty(t,r);else{const n=L2(e,t);to.test(r)?e.setProperty(Ri(n),r.replace(to,""),"important"):e[n]=r}}const jp=["Webkit","Moz","ms"],Hl={};function L2(e,t){const r=Hl[t];if(r)return r;let n=Nr(t);if(n!=="filter"&&n in e)return Hl[t]=n;n=Wg(n);for(let i=0;i<jp.length;i++){const s=jp[i]+n;if(s in e)return Hl[t]=s}return t}function F2(e,t,r,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Mt(n)&&r===n}const Wp="http://www.w3.org/1999/xlink";function qp(e,t,r,n,i,s=F_(t)){n&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(Wp,t.slice(6,t.length)):e.setAttributeNS(Wp,t,r):r==null||s&&!Hg(r)?e.removeAttribute(t):e.setAttribute(t,s?"":tn(r)?String(r):r)}function Hp(e,t,r,n,i){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?Z0(r):r);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,l=r==null?e.type==="checkbox"?"on":"":String(r);(o!==l||!("_value"in e))&&(e.value=l),r==null&&e.removeAttribute(t),e._value=r;return}let a=!1;if(r===""||r==null){const o=typeof e[t];o==="boolean"?r=Hg(r):r==null&&o==="string"?(r="",a=!0):o==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(i||t)}function Ln(e,t,r,n){e.addEventListener(t,r,n)}function V2(e,t,r,n){e.removeEventListener(t,r,n)}const Gp=Symbol("_vei");function j2(e,t,r,n,i=null){const s=e[Gp]||(e[Gp]={}),a=s[t];if(n&&a)a.value=n;else{const[o,l]=H2(t);if(n){const d=s[t]=X2(n,i);Ln(e,o,d,l)}else a&&(V2(e,o,a,l),s[t]=void 0)}}const W2=/(Once|Passive|Capture)$/,q2=/^on:?(?:Once|Passive|Capture)$/;function H2(e){let t,r;for(;(r=e.match(W2))&&!q2.test(e);)t||(t={}),e=e.slice(0,e.length-r[1].length),t[r[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Ri(e.slice(2)),t]}let Gl=0;const G2=Promise.resolve(),K2=()=>Gl||(G2.then(()=>Gl=0),Gl=Date.now());function X2(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;const i=r.value;if(Re(i)){const s=n.stopImmediatePropagation;n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0};const a=i.slice(),o=[n];for(let l=0;l<a.length&&!n._stopped;l++){const d=a[l];d&&Er(d,t,5,o)}}else Er(i,t,5,[n])};return r.value=e,r.attached=K2(),r}const Kp=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Y2=(e,t,r,n,i,s)=>{const a=i==="svg";t==="class"?B2(e,n,a):t==="style"?U2(e,r,n):Ko(t)?Xo(t)||j2(e,t,r,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Z2(e,t,n,a))?(Hp(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&qp(e,t,n,a,s,t!=="value")):e._isVueCE&&(Q2(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Mt(n)))?Hp(e,Nr(t),n,s,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),qp(e,t,n,a))};function Z2(e,t,r,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Kp(t)&&je(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Kp(t)&&Mt(r)?!1:t in e}function Q2(e,t){const r=e._def.props;if(!r)return!1;const n=Nr(t);return Array.isArray(r)?r.some(i=>Nr(i)===n):Object.keys(r).some(i=>Nr(i)===n)}const ss=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Re(t)?r=>xo(t,r):t};function J2(e){e.target.composing=!0}function Xp(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Jr=Symbol("_assign"),ro=Symbol("_initialValue");function Kl(e,t,r){return t&&(e=e.trim()),r&&(e=Zo(e)),e}const ki={created(e,{modifiers:{lazy:t,trim:r,number:n}},i){e.parentNode&&(e.type==="text"?e[ro]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[ro]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Jr]=ss(i);const s=n||i.props&&i.props.type==="number";Ln(e,t?"change":"input",a=>{a.target.composing||e[Jr](Kl(e.value,r,s))}),(r||s)&&Ln(e,"change",()=>{e.value=Kl(e.value,r,s)}),t||(Ln(e,"compositionstart",J2),Ln(e,"compositionend",Xp),Ln(e,"change",Xp))},mounted(e,{value:t,modifiers:{trim:r,number:n}}){const i=t??"",s=e[ro];delete e[ro],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[Jr](Kl(e.value,r,n)):e.value=i},beforeUpdate(e,{value:t,oldValue:r,modifiers:{lazy:n,trim:i,number:s}},a){if(e[Jr]=ss(a),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?Zo(e.value):e.value,l=t??"";if(o===l)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(n&&t===r||i&&e.value.trim()===l)||(e.value=l)}},cd={deep:!0,created(e,t,r){e[Jr]=ss(r),Ln(e,"change",()=>{const n=e._modelValue,i=oa(e),s=e.checked,a=e[Jr];if(Re(n)){const o=Od(n,i),l=o!==-1;if(s&&!l)a(n.concat(i));else if(!s&&l){const d=[...n];d.splice(o,1),a(d)}}else if(xn(n)){const o=new Set(n);s?o.add(i):o.delete(i),a(o)}else a(ey(e,s))})},mounted:Yp,beforeUpdate(e,t,r){e[Jr]=ss(r),Yp(e,t,r)}};function Yp(e,{value:t,oldValue:r},n){e._modelValue=t;let i;if(Re(t))i=Od(t,n.props.value)>-1;else if(xn(t))i=t.has(n.props.value);else{if(t===r)return;i=$n(t,ey(e,!0))}e.checked!==i&&(e.checked=i)}const J0={deep:!0,created(e,{value:t,modifiers:{number:r}},n){e._modelValue=t,Ln(e,"change",()=>{const i=Array.prototype.filter.call(e.options,l=>l.selected).map(l=>r?Zo(oa(l)):oa(l)),s=e.multiple,a=s?xn(e._modelValue)?new Set(i):i:i[0],o=e._pendingValue=[s,s?Re(a)?i.slice():i:a];try{e[Jr](a)}finally{Ti(()=>{e._pendingValue===o&&(e._pendingValue=void 0)})}}),e[Jr]=ss(n)},mounted(e,{value:t}){Zp(e,t)},beforeUpdate(e,{value:t},r){e._modelValue=t,e[Jr]=ss(r)},updated(e,{value:t}){const r=e._pendingValue;e._pendingValue=void 0,(!r||r[0]!==e.multiple||!ex(t,r[1],r[0]))&&Zp(e,t)}};function ex(e,t,r){if(!r||Re(e))return $n(e,t);if(xn(e)){if(e.size!==t.length)return!1;for(const n of t)if(!e.has(n))return!1;return!0}return!1}function Zp(e,t){const r=e.multiple,n=Re(t);if(!(r&&!n&&!xn(t))){for(let i=0,s=e.options.length;i<s;i++){const a=e.options[i],o=oa(a);if(r)if(n){const l=typeof o;l==="string"||l==="number"?a.selected=t.some(d=>String(d)===String(o)):a.selected=Od(t,o)>-1}else a.selected=t.has(o);else if($n(oa(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function oa(e){return"_value"in e?e._value:e.value}function ey(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const tx=["ctrl","shift","alt","meta"],rx={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>tx.some(r=>e[`${r}Key`]&&!t.includes(r))},no=(e,t)=>{if(!e)return e;const r=e._withMods||(e._withMods={}),n=t.join(".");return r[n]||(r[n]=(i,...s)=>{for(let a=0;a<t.length;a++){const o=rx[t[a]];if(o&&o(i,t))return}return e(i,...s)})},nx=Lt({patchProp:Y2},C2);let Qp;function ix(){return Qp||(Qp=o2(nx))}const sx=(...e)=>{const t=ix().createApp(...e),{mount:r}=t;return t.mount=n=>{const i=ox(n);if(!i)return;const s=t._component;!je(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=r(i,!1,ax(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function ax(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ox(e){return Mt(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var io={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gt=(e,t)=>({size:r,strokeWidth:n=2,absoluteStrokeWidth:i,color:s,class:a,...o},{attrs:l,slots:d})=>ud("svg",{...io,width:r||io.width,height:r||io.height,stroke:s||io.stroke,"stroke-width":i?Number(n)*24/Number(r):n,...l,class:["lucide",`lucide-${lx(e)}`],...o},[...t.map(p=>ud(...p)),...d.default?[d.default()]:[]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=Gt("CameraIcon",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=Gt("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=Gt("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Gt("LayersIcon",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Gt("Loader2Icon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=Gt("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=Gt("PlusCircleIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=Gt("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=Gt("PrinterIcon",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=Gt("RefreshCwIcon",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=Gt("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=Gt("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=Gt("SparklesIcon",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=Gt("UploadCloudIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=Gt("UploadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=Gt("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=Gt("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),_x=25.4,xx=300;function as(e,t=xx){return Math.round(e/_x*t)}const Xl=[{id:"spec_1_inch",name:"标准 1 寸",widthMm:25,heightMm:35,widthPx:295,heightPx:413,description:"适用于驾照、体检表、普通证件、求职简历"},{id:"spec_large_1_inch",name:"大 1 寸",widthMm:33,heightMm:48,widthPx:390,heightPx:567,description:"适用于普通中国护照、港澳通行证、各类职业资格考试"},{id:"spec_2_inch",name:"标准 2 寸",widthMm:35,heightMm:49,widthPx:413,heightPx:579,description:"适用于各类证书、签证申请、学历学位证明"},{id:"spec_small_2_inch",name:"小 2 寸",widthMm:35,heightMm:45,widthPx:413,heightPx:531,description:"适用于东南亚签证、部分欧美申根签证"},{id:"spec_cet",name:"英语四六级 (CET)",widthMm:33,heightMm:48,widthPx:390,heightPx:567,description:"全国大学英语四、六级考试官方报名标准"},{id:"spec_teacher",name:"教师资格证 (NTCE)",widthMm:35,heightMm:53,widthPx:413,heightPx:626,description:"中小学教师资格考试网报标准尺寸"},{id:"spec_ncre",name:"计算机等级考试 (NCRE)",widthMm:25,heightMm:34,widthPx:300,heightPx:400,description:"全国计算机等级考试网报标准"},{id:"spec_civil_service",name:"国家公务员考试 (国考)",widthMm:35,heightMm:45,widthPx:413,heightPx:531,description:"中央机关及其直属机构公务员招考标准"}];function $x(e,t,r,n){let i=0,s=0,a=0,o=0;return i=t,s=r,a=as(t),o=as(r),{id:`custom_${Date.now()}`,name:e||`自定义 (${i}×${s}mm)`,widthMm:i,heightMm:s,widthPx:a,heightPx:o,description:`自定义尺寸 ${i}×${s} mm (${a}×${o} px)`,isCustom:!0}}const pd=[{id:"bg_original",name:"原图背景",value:"original",previewClass:"bg-slate-700 border border-slate-600"},{id:"bg_white",name:"纯白底",value:"#FFFFFF",previewClass:"bg-white border border-gray-300"},{id:"bg_blue",name:"标准蓝",value:"#438EDB",previewClass:"bg-[#438EDB]"},{id:"bg_red",name:"中国红",value:"#D9001B",previewClass:"bg-[#D9001B]"},{id:"bg_gray_grad",name:"高级灰",value:"linear-gradient(180deg, #F3F4F6 0%, #D1D5DB 100%)",previewClass:"bg-gradient-to-b from-gray-100 to-gray-300",isGradient:!0,gradientStops:["#F3F4F6","#9CA3AF"]},{id:"bg_blue_grad",name:"冲印蓝",value:"linear-gradient(180deg, #60A5FA 0%, #1D4ED8 100%)",previewClass:"bg-gradient-to-b from-blue-400 to-blue-700",isGradient:!0,gradientStops:["#60A5FA","#1D4ED8"]},{id:"bg_transparent",name:"透明底 (PNG)",value:"transparent",previewClass:"bg-transparent border-2 border-dashed border-gray-400"}],so=[{id:"paper_6_inch",name:"6 寸照片纸 (横版 152×102mm)",widthMm:152,heightMm:102,widthPx:1795,heightPx:1205,description:"标准冲印 6 寸相纸 (4R)，最常用的家用相纸规格"},{id:"paper_6_inch_v",name:"6 寸照片纸 (竖版 102×152mm)",widthMm:102,heightMm:152,widthPx:1205,heightPx:1795,description:"标准冲印 6 寸相纸竖版"},{id:"paper_a4",name:"标准 A4 纸 (210×297mm)",widthMm:210,heightMm:297,widthPx:2480,heightPx:3508,description:"标准办公室 A4 打印纸 (300 DPI 高清输出)"}];var Yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ny={};(function(){var e;function t(u){var m=0;return function(){return m<u.length?{done:!1,value:u[m++]}:{done:!0}}}var r=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,b){return u==Array.prototype||u==Object.prototype||(u[m]=b.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yl=="object"&&Yl];for(var m=0;m<u.length;++m){var b=u[m];if(b&&b.Math==Math)return b}throw Error("Cannot find global object")}var i=n(this);function s(u,m){if(m)e:{var b=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var z=u[T];if(!(z in b))break e;b=b[z]}u=u[u.length-1],T=b[u],m=m(T),m!=T&&m!=null&&r(b,u,{configurable:!0,writable:!0,value:m})}}s("Symbol",function(u){function m(B){if(this instanceof m)throw new TypeError("Symbol is not a constructor");return new b(T+(B||"")+"_"+z++,B)}function b(B,R){this.h=B,r(this,"description",{configurable:!0,writable:!0,value:R})}if(u)return u;b.prototype.toString=function(){return this.h};var T="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",z=0;return m}),s("Symbol.iterator",function(u){if(u)return u;u=Symbol("Symbol.iterator");for(var m="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),b=0;b<m.length;b++){var T=i[m[b]];typeof T=="function"&&typeof T.prototype[u]!="function"&&r(T.prototype,u,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return u});function a(u){return u={next:u},u[Symbol.iterator]=function(){return this},u}function o(u){var m=typeof Symbol<"u"&&Symbol.iterator&&u[Symbol.iterator];return m?m.call(u):{next:t(u)}}function l(u){if(!(u instanceof Array)){u=o(u);for(var m,b=[];!(m=u.next()).done;)b.push(m.value);u=b}return u}var d=typeof Object.assign=="function"?Object.assign:function(u,m){for(var b=1;b<arguments.length;b++){var T=arguments[b];if(T)for(var z in T)Object.prototype.hasOwnProperty.call(T,z)&&(u[z]=T[z])}return u};s("Object.assign",function(u){return u||d});var p=typeof Object.create=="function"?Object.create:function(u){function m(){}return m.prototype=u,new m},f;if(typeof Object.setPrototypeOf=="function")f=Object.setPrototypeOf;else{var g;e:{var v={a:!0},y={};try{y.__proto__=v,g=y.a;break e}catch{}g=!1}f=g?function(u,m){if(u.__proto__=m,u.__proto__!==m)throw new TypeError(u+" is not extensible");return u}:null}var $=f;function E(u,m){if(u.prototype=p(m.prototype),u.prototype.constructor=u,$)$(u,m);else for(var b in m)if(b!="prototype")if(Object.defineProperties){var T=Object.getOwnPropertyDescriptor(m,b);T&&Object.defineProperty(u,b,T)}else u[b]=m[b];u.za=m.prototype}function S(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function x(u){if(u.m)throw new TypeError("Generator is already running");u.m=!0}S.prototype.u=function(u){this.i=u};function A(u,m){u.l={ma:m,na:!0},u.h=u.s||u.v}S.prototype.return=function(u){this.l={return:u},this.h=this.v};function C(u,m,b){return u.h=b,{value:m}}function O(u){this.h=new S,this.i=u}function D(u,m){x(u.h);var b=u.h.j;return b?N(u,"return"in b?b.return:function(T){return{value:T,done:!0}},m,u.h.return):(u.h.return(m),k(u))}function N(u,m,b,T){try{var z=m.call(u.h.j,b);if(!(z instanceof Object))throw new TypeError("Iterator result "+z+" is not an object");if(!z.done)return u.h.m=!1,z;var B=z.value}catch(R){return u.h.j=null,A(u.h,R),k(u)}return u.h.j=null,T.call(u.h,B),k(u)}function k(u){for(;u.h.h;)try{var m=u.i(u.h);if(m)return u.h.m=!1,{value:m.value,done:!1}}catch(b){u.h.i=void 0,A(u.h,b)}if(u.h.m=!1,u.h.l){if(m=u.h.l,u.h.l=null,m.na)throw m.ma;return{value:m.return,done:!0}}return{value:void 0,done:!0}}function q(u){this.next=function(m){return x(u.h),u.h.j?m=N(u,u.h.j.next,m,u.h.u):(u.h.u(m),m=k(u)),m},this.throw=function(m){return x(u.h),u.h.j?m=N(u,u.h.j.throw,m,u.h.u):(A(u.h,m),m=k(u)),m},this.return=function(m){return D(u,m)},this[Symbol.iterator]=function(){return this}}function Z(u){function m(T){return u.next(T)}function b(T){return u.throw(T)}return new Promise(function(T,z){function B(R){R.done?T(R.value):Promise.resolve(R.value).then(m,b).then(B,z)}B(u.next())})}function ae(u){return Z(new q(new O(u)))}s("Promise",function(u){function m(R){this.i=0,this.j=void 0,this.h=[],this.u=!1;var L=this.l();try{R(L.resolve,L.reject)}catch(G){L.reject(G)}}function b(){this.h=null}function T(R){return R instanceof m?R:new m(function(L){L(R)})}if(u)return u;b.prototype.i=function(R){if(this.h==null){this.h=[];var L=this;this.j(function(){L.m()})}this.h.push(R)};var z=i.setTimeout;b.prototype.j=function(R){z(R,0)},b.prototype.m=function(){for(;this.h&&this.h.length;){var R=this.h;this.h=[];for(var L=0;L<R.length;++L){var G=R[L];R[L]=null;try{G()}catch(ue){this.l(ue)}}}this.h=null},b.prototype.l=function(R){this.j(function(){throw R})},m.prototype.l=function(){function R(ue){return function(we){G||(G=!0,ue.call(L,we))}}var L=this,G=!1;return{resolve:R(this.I),reject:R(this.m)}},m.prototype.I=function(R){if(R===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(R instanceof m)this.L(R);else{e:switch(typeof R){case"object":var L=R!=null;break e;case"function":L=!0;break e;default:L=!1}L?this.F(R):this.s(R)}},m.prototype.F=function(R){var L=void 0;try{L=R.then}catch(G){this.m(G);return}typeof L=="function"?this.M(L,R):this.s(R)},m.prototype.m=function(R){this.v(2,R)},m.prototype.s=function(R){this.v(1,R)},m.prototype.v=function(R,L){if(this.i!=0)throw Error("Cannot settle("+R+", "+L+"): Promise already settled in state"+this.i);this.i=R,this.j=L,this.i===2&&this.K(),this.H()},m.prototype.K=function(){var R=this;z(function(){if(R.D()){var L=i.console;typeof L<"u"&&L.error(R.j)}},1)},m.prototype.D=function(){if(this.u)return!1;var R=i.CustomEvent,L=i.Event,G=i.dispatchEvent;return typeof G>"u"?!0:(typeof R=="function"?R=new R("unhandledrejection",{cancelable:!0}):typeof L=="function"?R=new L("unhandledrejection",{cancelable:!0}):(R=i.document.createEvent("CustomEvent"),R.initCustomEvent("unhandledrejection",!1,!0,R)),R.promise=this,R.reason=this.j,G(R))},m.prototype.H=function(){if(this.h!=null){for(var R=0;R<this.h.length;++R)B.i(this.h[R]);this.h=null}};var B=new b;return m.prototype.L=function(R){var L=this.l();R.T(L.resolve,L.reject)},m.prototype.M=function(R,L){var G=this.l();try{R.call(L,G.resolve,G.reject)}catch(ue){G.reject(ue)}},m.prototype.then=function(R,L){function G(Me,xe){return typeof Me=="function"?function(Pe){try{ue(Me(Pe))}catch(qe){we(qe)}}:xe}var ue,we,De=new m(function(Me,xe){ue=Me,we=xe});return this.T(G(R,ue),G(L,we)),De},m.prototype.catch=function(R){return this.then(void 0,R)},m.prototype.T=function(R,L){function G(){switch(ue.i){case 1:R(ue.j);break;case 2:L(ue.j);break;default:throw Error("Unexpected state: "+ue.i)}}var ue=this;this.h==null?B.i(G):this.h.push(G),this.u=!0},m.resolve=T,m.reject=function(R){return new m(function(L,G){G(R)})},m.race=function(R){return new m(function(L,G){for(var ue=o(R),we=ue.next();!we.done;we=ue.next())T(we.value).T(L,G)})},m.all=function(R){var L=o(R),G=L.next();return G.done?T([]):new m(function(ue,we){function De(Pe){return function(qe){Me[Pe]=qe,xe--,xe==0&&ue(Me)}}var Me=[],xe=0;do Me.push(void 0),xe++,T(G.value).T(De(Me.length-1),we),G=L.next();while(!G.done)})},m});function X(u,m){u instanceof String&&(u+="");var b=0,T=!1,z={next:function(){if(!T&&b<u.length){var B=b++;return{value:m(B,u[B]),done:!1}}return T=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}s("Array.prototype.keys",function(u){return u||function(){return X(this,function(m){return m})}}),s("Array.prototype.fill",function(u){return u||function(m,b,T){var z=this.length||0;for(0>b&&(b=Math.max(0,z+b)),(T==null||T>z)&&(T=z),T=Number(T),0>T&&(T=Math.max(0,z+T)),b=Number(b||0);b<T;b++)this[b]=m;return this}});function oe(u){return u||Array.prototype.fill}s("Int8Array.prototype.fill",oe),s("Uint8Array.prototype.fill",oe),s("Uint8ClampedArray.prototype.fill",oe),s("Int16Array.prototype.fill",oe),s("Uint16Array.prototype.fill",oe),s("Int32Array.prototype.fill",oe),s("Uint32Array.prototype.fill",oe),s("Float32Array.prototype.fill",oe),s("Float64Array.prototype.fill",oe),s("Object.is",function(u){return u||function(m,b){return m===b?m!==0||1/m===1/b:m!==m&&b!==b}}),s("Array.prototype.includes",function(u){return u||function(m,b){var T=this;T instanceof String&&(T=String(T));var z=T.length;for(b=b||0,0>b&&(b=Math.max(b+z,0));b<z;b++){var B=T[b];if(B===m||Object.is(B,m))return!0}return!1}}),s("String.prototype.includes",function(u){return u||function(m,b){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(m instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(m,b||0)!==-1}});var F=this||self;function J(u,m){u=u.split(".");var b=F;u[0]in b||typeof b.execScript>"u"||b.execScript("var "+u[0]);for(var T;u.length&&(T=u.shift());)u.length||m===void 0?b[T]&&b[T]!==Object.prototype[T]?b=b[T]:b=b[T]={}:b[T]=m}function pe(u){var m;e:{if((m=F.navigator)&&(m=m.userAgent))break e;m=""}return m.indexOf(u)!=-1}var le=Array.prototype.map?function(u,m){return Array.prototype.map.call(u,m,void 0)}:function(u,m){for(var b=u.length,T=Array(b),z=typeof u=="string"?u.split(""):u,B=0;B<b;B++)B in z&&(T[B]=m.call(void 0,z[B],B,u));return T},de={},_e=null;function ke(u){var m=u.length,b=3*m/4;b%3?b=Math.floor(b):"=.".indexOf(u[m-1])!=-1&&(b="=.".indexOf(u[m-2])!=-1?b-2:b-1);var T=new Uint8Array(b),z=0;return te(u,function(B){T[z++]=B}),z!==b?T.subarray(0,z):T}function te(u,m){function b(G){for(;T<u.length;){var ue=u.charAt(T++),we=_e[ue];if(we!=null)return we;if(!/^[\s\xa0]*$/.test(ue))throw Error("Unknown base64 encoding at char: "+ue)}return G}$e();for(var T=0;;){var z=b(-1),B=b(0),R=b(64),L=b(64);if(L===64&&z===-1)break;m(z<<2|B>>4),R!=64&&(m(B<<4&240|R>>2),L!=64&&m(R<<6&192|L))}}function $e(){if(!_e){_e={};for(var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),m=["+/=","+/","-_=","-_.","-_"],b=0;5>b;b++){var T=u.concat(m[b].split(""));de[b]=T;for(var z=0;z<T.length;z++){var B=T[z];_e[B]===void 0&&(_e[B]=z)}}}}var Se=typeof Uint8Array<"u",ve=!(pe("Trident")||pe("MSIE"))&&typeof F.btoa=="function";function _t(u){if(!ve){var m;m===void 0&&(m=0),$e(),m=de[m];for(var b=Array(Math.floor(u.length/3)),T=m[64]||"",z=0,B=0;z<u.length-2;z+=3){var R=u[z],L=u[z+1],G=u[z+2],ue=m[R>>2];R=m[(R&3)<<4|L>>4],L=m[(L&15)<<2|G>>6],G=m[G&63],b[B++]=ue+R+L+G}switch(ue=0,G=T,u.length-z){case 2:ue=u[z+1],G=m[(ue&15)<<2]||T;case 1:u=u[z],b[B]=m[u>>2]+m[(u&3)<<4|ue>>4]+G+T}return b.join("")}for(m="";10240<u.length;)m+=String.fromCharCode.apply(null,u.subarray(0,10240)),u=u.subarray(10240);return m+=String.fromCharCode.apply(null,u),btoa(m)}var gt=RegExp("[-_.]","g");function tt(u){switch(u){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Ct(u){if(!ve)return ke(u);gt.test(u)&&(u=u.replace(gt,tt)),u=atob(u);for(var m=new Uint8Array(u.length),b=0;b<u.length;b++)m[b]=u.charCodeAt(b);return m}var We;function it(){return We||(We=new Uint8Array(0))}var M={},U=typeof Uint8Array.prototype.slice=="function",H=0,Y=0;function ne(u){var m=0>u;u=Math.abs(u);var b=u>>>0;u=Math.floor((u-b)/4294967296),m&&(b=o(ge(b,u)),m=b.next().value,u=b.next().value,b=m),H=b>>>0,Y=u>>>0}var se=typeof BigInt=="function";function ge(u,m){return m=~m,u?u=~u+1:m+=1,[u,m]}function fe(u,m){this.i=u>>>0,this.h=m>>>0}function he(u){if(!u)return ie||(ie=new fe(0,0));if(!/^-?\d+$/.test(u))return null;if(16>u.length)ne(Number(u));else if(se)u=BigInt(u),H=Number(u&BigInt(4294967295))>>>0,Y=Number(u>>BigInt(32)&BigInt(4294967295));else{var m=+(u[0]==="-");Y=H=0;for(var b=u.length,T=m,z=(b-m)%6+m;z<=b;T=z,z+=6)T=Number(u.slice(T,z)),Y*=1e6,H=1e6*H+T,4294967296<=H&&(Y+=H/4294967296|0,H%=4294967296);m&&(m=o(ge(H,Y)),u=m.next().value,m=m.next().value,H=u,Y=m)}return new fe(H,Y)}var ie;function Ce(u,m){return Error("Invalid wire type: "+u+" (at position "+m+")")}function be(){return Error("Failed to read varint, encoding is invalid.")}function Ae(u,m){return Error("Tried to read past the end of the data "+m+" > "+u)}function Ee(){throw Error("Invalid UTF8")}function Le(u,m){return m=String.fromCharCode.apply(null,m),u==null?m:u+m}var Fe=void 0,Ye,ft=typeof TextDecoder<"u",xt,Kt=typeof TextEncoder<"u",Ot;function gr(u){if(u!==M)throw Error("illegal external caller")}function or(u,m){if(gr(m),this.V=u,u!=null&&u.length===0)throw Error("ByteString should be constructed with non-empty values")}function re(){return Ot||(Ot=new or(null,M))}function j(u){gr(M);var m=u.V;return m=m==null||Se&&m!=null&&m instanceof Uint8Array?m:typeof m=="string"?Ct(m):null,m==null?m:u.V=m}function me(u){if(typeof u=="string")return{buffer:Ct(u),C:!1};if(Array.isArray(u))return{buffer:new Uint8Array(u),C:!1};if(u.constructor===Uint8Array)return{buffer:u,C:!1};if(u.constructor===ArrayBuffer)return{buffer:new Uint8Array(u),C:!1};if(u.constructor===or)return{buffer:j(u)||it(),C:!0};if(u instanceof Uint8Array)return{buffer:new Uint8Array(u.buffer,u.byteOffset,u.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function ct(u,m){this.i=null,this.m=!1,this.h=this.j=this.l=0,lr(this,u,m)}function lr(u,m,b){b=b===void 0?{}:b,u.S=b.S===void 0?!1:b.S,m&&(m=me(m),u.i=m.buffer,u.m=m.C,u.l=0,u.j=u.i.length,u.h=u.l)}ct.prototype.reset=function(){this.h=this.l};function Ft(u,m){if(u.h=m,m>u.j)throw Ae(u.j,m)}function Gn(u){var m=u.i,b=u.h,T=m[b++],z=T&127;if(T&128&&(T=m[b++],z|=(T&127)<<7,T&128&&(T=m[b++],z|=(T&127)<<14,T&128&&(T=m[b++],z|=(T&127)<<21,T&128&&(T=m[b++],z|=T<<28,T&128&&m[b++]&128&&m[b++]&128&&m[b++]&128&&m[b++]&128&&m[b++]&128)))))throw be();return Ft(u,b),z}function ma(u,m){if(0>m)throw Error("Tried to read a negative byte length: "+m);var b=u.h,T=b+m;if(T>u.j)throw Ae(m,u.j-b);return u.h=T,b}var ga=[];function Di(){this.h=[]}Di.prototype.length=function(){return this.h.length},Di.prototype.end=function(){var u=this.h;return this.h=[],u};function ds(u,m,b){for(;0<b||127<m;)u.h.push(m&127|128),m=(m>>>7|b<<25)>>>0,b>>>=7;u.h.push(m)}function on(u,m){for(;127<m;)u.h.push(m&127|128),m>>>=7;u.h.push(m)}function Ni(u,m){if(ga.length){var b=ga.pop();lr(b,u,m),u=b}else u=new ct(u,m);this.h=u,this.j=this.h.h,this.i=this.l=-1,this.setOptions(m)}Ni.prototype.setOptions=function(u){u=u===void 0?{}:u,this.ca=u.ca===void 0?!1:u.ca},Ni.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function cs(u){var m=u.h;if(m.h==m.j)return!1;u.j=u.h.h;var b=Gn(u.h)>>>0;if(m=b>>>3,b&=7,!(0<=b&&5>=b))throw Ce(b,u.j);if(1>m)throw Error("Invalid field number: "+m+" (at position "+u.j+")");return u.l=m,u.i=b,!0}function Kn(u){switch(u.i){case 0:if(u.i!=0)Kn(u);else e:{u=u.h;for(var m=u.h,b=m+10,T=u.i;m<b;)if(!(T[m++]&128)){Ft(u,m);break e}throw be()}break;case 1:u=u.h,Ft(u,u.h+8);break;case 2:u.i!=2?Kn(u):(m=Gn(u.h)>>>0,u=u.h,Ft(u,u.h+m));break;case 5:u=u.h,Ft(u,u.h+4);break;case 3:m=u.l;do{if(!cs(u))throw Error("Unmatched start-group tag: stream EOF");if(u.i==4){if(u.l!=m)throw Error("Unmatched end-group tag");break}Kn(u)}while(!0);break;default:throw Ce(u.i,u.j)}}var Tt=[];function ya(){this.j=[],this.i=0,this.h=new Di}function ln(u,m){m.length!==0&&(u.j.push(m),u.i+=m.length)}function ba(u,m){if(m=m.R){ln(u,u.h.end());for(var b=0;b<m.length;b++)ln(u,j(m[b])||it())}}var yr=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Fr(u,m){return yr?u[yr]|=m:u.A!==void 0?u.A|=m:(Object.defineProperties(u,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}}),m)}function ps(u,m){yr?u[yr]&&(u[yr]&=~m):u.A!==void 0&&(u.A&=~m)}function Et(u){var m;return yr?m=u[yr]:m=u.A,m??0}function ur(u,m){yr?u[yr]=m:u.A!==void 0?u.A=m:Object.defineProperties(u,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}})}function Ui(u){return Fr(u,1),u}function va(u,m){ur(m,(u|0)&-51)}function Xn(u,m){ur(m,(u|18)&-41)}var Li={};function Yn(u){return u!==null&&typeof u=="object"&&!Array.isArray(u)&&u.constructor===Object}var Zn,dr=[];ur(dr,23),Zn=Object.freeze(dr);function Qn(u){if(Et(u.o)&2)throw Error("Cannot mutate an immutable Message")}function Jn(u){var m=u.length;(m=m?u[m-1]:void 0)&&Yn(m)?m.g=1:(m={},u.push((m.g=1,m)))}function un(u){var m=u.i+u.G;return u.B||(u.B=u.o[m]={})}function Rt(u,m){return m===-1?null:m>=u.i?u.B?u.B[m]:void 0:u.o[m+u.G]}function cr(u,m,b,T){Qn(u),ei(u,m,b,T)}function ei(u,m,b,T){u.j&&(u.j=void 0),m>=u.i||T?un(u)[m]=b:(u.o[m+u.G]=b,(u=u.B)&&m in u&&delete u[m])}function fs(u,m,b,T){var z=Rt(u,m);Array.isArray(z)||(z=Zn);var B=Et(z);if(B&1||Ui(z),T)B&2||Fr(z,2),b&1||Object.freeze(z);else{T=!(b&2);var R=B&2;b&1||!R?T&&B&16&&!R&&ps(z,16):(z=Ui(Array.prototype.slice.call(z)),ei(u,m,z))}return z}function Fi(u,m){var b=Rt(u,m),T=b==null?b:typeof b=="number"||b==="NaN"||b==="Infinity"||b==="-Infinity"?Number(b):void 0;return T!=null&&T!==b&&ei(u,m,T),T}function Vr(u,m,b,T,z){u.h||(u.h={});var B=u.h[b],R=fs(u,b,3,z);if(!B){var L=R;B=[];var G=!!(Et(u.o)&16);R=!!(Et(L)&2);var ue=L;!z&&R&&(L=Array.prototype.slice.call(L));for(var we=R,De=0;De<L.length;De++){var Me=L[De],xe=m,Pe=!1;if(Pe=Pe===void 0?!1:Pe,Me=Array.isArray(Me)?new xe(Me):Pe?new xe:void 0,Me!==void 0){xe=Me.o;var qe=Pe=Et(xe);R&&(qe|=2),G&&(qe|=16),qe!=Pe&&ur(xe,qe),xe=qe,we=we||!!(2&xe),B.push(Me)}}return u.h[b]=B,G=Et(L),m=G|33,m=we?m&-9:m|8,G!=m&&(we=L,Object.isFrozen(we)&&(we=Array.prototype.slice.call(we)),ur(we,m),L=we),ue!==L&&ei(u,b,L),(z||T&&R)&&Fr(B,2),T&&Object.freeze(B),B}return z||(z=Object.isFrozen(B),T&&!z?Object.freeze(B):!T&&z&&(B=Array.prototype.slice.call(B),u.h[b]=B)),B}function ti(u,m,b){var T=!!(Et(u.o)&2);if(m=Vr(u,m,b,T,T),u=fs(u,b,3,T),!(T||Et(u)&8)){for(T=0;T<m.length;T++){if(b=m[T],Et(b.o)&2){var z=xa(b,!1);z.j=b}else z=b;b!==z&&(m[T]=z,u[T]=z.o)}Fr(u,8)}return m}function zt(u,m,b){if(b!=null&&typeof b!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof b+": "+b);cr(u,m,b)}function sr(u,m,b,T,z){Qn(u);var B=Vr(u,b,m,!1,!1);return b=T??new b,u=fs(u,m,2,!1),z!=null?(B.splice(z,0,b),u.splice(z,0,b.o)):(B.push(b),u.push(b.o)),b.C()&&ps(u,8),b}function kn(u,m){return u??m}function br(u,m,b){return b=b===void 0?0:b,kn(Fi(u,m),b)}var Vi;function ll(u){switch(typeof u){case"number":return isFinite(u)?u:String(u);case"object":if(u)if(Array.isArray(u)){if(Et(u)&128)return u=Array.prototype.slice.call(u),Jn(u),u}else{if(Se&&u!=null&&u instanceof Uint8Array)return _t(u);if(u instanceof or){var m=u.V;return m==null?"":typeof m=="string"?m:u.V=_t(m)}}}return u}function wa(u,m,b,T){if(u!=null){if(Array.isArray(u))u=hs(u,m,b,T!==void 0);else if(Yn(u)){var z={},B;for(B in u)z[B]=wa(u[B],m,b,T);u=z}else u=m(u,T);return u}}function hs(u,m,b,T){var z=Et(u);T=T?!!(z&16):void 0,u=Array.prototype.slice.call(u);for(var B=0;B<u.length;B++)u[B]=wa(u[B],m,b,T);return b(z,u),u}function ul(u){return u.ja===Li?u.toJSON():ll(u)}function jr(u,m){u&128&&Jn(m)}function ri(u,m,b){if(b=b===void 0?Xn:b,u!=null){if(Se&&u instanceof Uint8Array)return u.length?new or(new Uint8Array(u),M):re();if(Array.isArray(u)){var T=Et(u);return T&2?u:m&&!(T&32)&&(T&16||T===0)?(ur(u,T|2),u):(u=hs(u,ri,T&4?Xn:b,!0),m=Et(u),m&4&&m&2&&Object.freeze(u),u)}return u.ja===Li?ms(u):u}}function _a(u,m,b,T,z,B,R){if(u=u.h&&u.h[b]){if(T=Et(u),T&2?T=u:(B=le(u,ms),Xn(T,B),Object.freeze(B),T=B),Qn(m),R=T==null?Zn:Ui([]),T!=null){for(B=!!T.length,u=0;u<T.length;u++){var L=T[u];B=B&&!(Et(L.o)&2),R[u]=L.o}B=(B?8:0)|1,u=Et(R),(u&B)!==B&&(Object.isFrozen(R)&&(R=Array.prototype.slice.call(R)),ur(R,u|B)),m.h||(m.h={}),m.h[b]=T}else m.h&&(m.h[b]=void 0);ei(m,b,R,z)}else cr(m,b,ri(T,B,R),z)}function ms(u){return Et(u.o)&2||(u=xa(u,!0),Fr(u.o,2)),u}function xa(u,m){var b=u.o,T=[];Fr(T,16);var z=u.constructor.h;if(z&&T.push(z),z=u.B,z){T.length=b.length,T.fill(void 0,T.length,b.length);var B={};T[T.length-1]=B}Et(b)&128&&Jn(T),m=m||u.C()?Xn:va,B=u.constructor,Vi=T,T=new B(T),Vi=void 0,u.R&&(T.R=u.R.slice()),B=!!(Et(b)&16);for(var R=z?b.length-1:b.length,L=0;L<R;L++)_a(u,T,L-u.G,b[L],!1,B,m);if(z)for(var G in z)_a(u,T,+G,z[G],!0,B,m);return T}function Xt(u,m,b){u==null&&(u=Vi),Vi=void 0;var T=this.constructor.i||0,z=0<T,B=this.constructor.h,R=!1;if(u==null){u=B?[B]:[];var L=48,G=!0;z&&(T=0,L|=128),ur(u,L)}else{if(!Array.isArray(u)||B&&B!==u[0])throw Error();var ue=L=Fr(u,0);if((G=(16&ue)!==0)&&((R=(32&ue)!==0)||(ue|=32)),z){if(128&ue)T=0;else if(0<u.length){var we=u[u.length-1];if(Yn(we)&&"g"in we){T=0,ue|=128,delete we.g;var De=!0,Me;for(Me in we){De=!1;break}De&&u.pop()}}}else if(128&ue)throw Error();L!==ue&&ur(u,ue)}this.G=(B?0:-1)-T,this.h=void 0,this.o=u;e:{if(B=this.o.length,T=B-1,B&&(B=this.o[T],Yn(B))){this.B=B,this.i=T-this.G;break e}m!==void 0&&-1<m?(this.i=Math.max(m,T+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!z&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(b){m=G&&!R&&!0,z=this.i;var xe;for(G=0;G<b.length;G++)R=b[G],R<z?(R+=this.G,(T=u[R])?$a(T,m):u[R]=Zn):(xe||(xe=un(this)),(T=xe[R])?$a(T,m):xe[R]=Zn)}}Xt.prototype.toJSON=function(){return hs(this.o,ul,jr)},Xt.prototype.C=function(){return!!(Et(this.o)&2)};function $a(u,m){if(Array.isArray(u)){var b=Et(u),T=1;!m||b&2||(T|=16),(b&T)!==T&&ur(u,b|T)}}Xt.prototype.ja=Li,Xt.prototype.toString=function(){return this.o.toString()};function Sa(u,m,b){if(b){var T={},z;for(z in b){var B=b[z],R=B.ra;R||(T.J=B.xa||B.oa.W,B.ia?(T.aa=ii(B.ia),R=function(L){return function(G,ue,we){return L.J(G,ue,we,L.aa)}}(T)):B.ka?(T.Z=Ea(B.da.P,B.ka),R=function(L){return function(G,ue,we){return L.J(G,ue,we,L.Z)}}(T)):R=T.J,B.ra=R),R(m,u,B.da),T={J:T.J,aa:T.aa,Z:T.Z}}}ba(m,u)}var ji=Symbol();function Ta(u,m,b){return u[ji]||(u[ji]=function(T,z){return m(T,z,b)})}function ka(u){var m=u[ji];if(!m){var b=ai(u);m=function(T,z){return gs(T,z,b)},u[ji]=m}return m}function dl(u){var m=u.ia;if(m)return ka(m);if(m=u.wa)return Ta(u.da.P,m,u.ka)}function cl(u){var m=dl(u),b=u.da,T=u.oa.U;return m?function(z,B){return T(z,B,b,m)}:function(z,B){return T(z,B,b)}}function ni(u,m){var b=u[m];return typeof b=="function"&&b.length===0&&(b=b(),u[m]=b),Array.isArray(b)&&(si in b||dn in b||0<b.length&&typeof b[0]=="function")?b:void 0}function Ca(u,m,b,T,z,B){m.P=u[0];var R=1;if(u.length>R&&typeof u[R]!="number"){var L=u[R++];b(m,L)}for(;R<u.length;){b=u[R++];for(var G=R+1;G<u.length&&typeof u[G]!="number";)G++;switch(L=u[R++],G-=R,G){case 0:T(m,b,L);break;case 1:(G=ni(u,R))?(R++,z(m,b,L,G)):T(m,b,L,u[R++]);break;case 2:G=R++,G=ni(u,G),z(m,b,L,G,u[R++]);break;case 3:B(m,b,L,u[R++],u[R++],u[R++]);break;case 4:B(m,b,L,u[R++],u[R++],u[R++],u[R++]);break;default:throw Error("unexpected number of binary field arguments: "+G)}}return m}var Cn=Symbol();function ii(u){var m=u[Cn];if(!m){var b=En(u);m=function(T,z){return ys(T,z,b)},u[Cn]=m}return m}function Ea(u,m){var b=u[Cn];return b||(b=function(T,z){return Sa(T,z,m)},u[Cn]=b),b}var dn=Symbol();function pl(u,m){u.push(m)}function fl(u,m,b){u.push(m,b.W)}function hl(u,m,b,T){var z=ii(T),B=En(T).P,R=b.W;u.push(m,function(L,G,ue){return R(L,G,ue,B,z)})}function ml(u,m,b,T,z,B){var R=Ea(T,B),L=b.W;u.push(m,function(G,ue,we){return L(G,ue,we,T,R)})}function En(u){var m=u[dn];return m||(m=Ca(u,u[dn]=[],pl,fl,hl,ml),si in u&&dn in u&&(u.length=0),m)}var si=Symbol();function Wr(u,m){u[0]=m}function vr(u,m,b,T){var z=b.U;u[m]=T?function(B,R,L){return z(B,R,L,T)}:z}function Ia(u,m,b,T,z){var B=b.U,R=ka(T),L=ai(T).P;u[m]=function(G,ue,we){return B(G,ue,we,L,R,z)}}function Wi(u,m,b,T,z,B,R){var L=b.U,G=Ta(T,z,B);u[m]=function(ue,we,De){return L(ue,we,De,T,G,R)}}function ai(u){var m=u[si];return m||(m=Ca(u,u[si]={},Wr,vr,Ia,Wi),si in u&&dn in u&&(u.length=0),m)}function gs(u,m,b){for(;cs(m)&&m.i!=4;){var T=m.l,z=b[T];if(!z){var B=b[0];B&&(B=B[T])&&(z=b[T]=cl(B))}if(!z||!z(m,u,T)){z=m,T=u,B=z.j,Kn(z);var R=z;if(!R.ca){if(z=R.h.h-B,R.h.h=B,R=R.h,z==0)z=re();else{if(B=ma(R,z),R.S&&R.m)z=R.i.subarray(B,B+z);else{R=R.i;var L=B;z=B+z,z=L===z?it():U?R.slice(L,z):new Uint8Array(R.subarray(L,z))}z=z.length==0?re():new or(z,M)}(B=T.R)?B.push(z):T.R=[z]}}}return u}function ys(u,m,b){for(var T=b.length,z=T%2==1,B=z?1:0;B<T;B+=2)(0,b[B+1])(m,u,b[B]);Sa(u,m,z?b[0]:void 0)}function oi(u,m){return{U:u,W:m}}var Jt=oi(function(u,m,b){if(u.i!==5)return!1;u=u.h;var T=u.i,z=u.h,B=T[z],R=T[z+1],L=T[z+2];return T=T[z+3],Ft(u,u.h+4),R=(B<<0|R<<8|L<<16|T<<24)>>>0,u=2*(R>>31)+1,B=R>>>23&255,R&=8388607,cr(m,b,B==255?R?NaN:1/0*u:B==0?u*Math.pow(2,-149)*R:u*Math.pow(2,B-150)*(R+Math.pow(2,23))),!0},function(u,m,b){if(m=Fi(m,b),m!=null){on(u.h,8*b+5),u=u.h;var T=+m;T===0?0<1/T?H=Y=0:(Y=0,H=2147483648):isNaN(T)?(Y=0,H=2147483647):(T=(b=0>T?-2147483648:0)?-T:T,34028234663852886e22<T?(Y=0,H=(b|2139095040)>>>0):11754943508222875e-54>T?(T=Math.round(T/Math.pow(2,-149)),Y=0,H=(b|T)>>>0):(m=Math.floor(Math.log(T)/Math.LN2),T*=Math.pow(2,-m),T=Math.round(8388608*T),16777216<=T&&++m,Y=0,H=(b|m+127<<23|T&8388607)>>>0)),b=H,u.h.push(b>>>0&255),u.h.push(b>>>8&255),u.h.push(b>>>16&255),u.h.push(b>>>24&255)}}),gl=oi(function(u,m,b){if(u.i!==0)return!1;var T=u.h,z=0,B=u=0,R=T.i,L=T.h;do{var G=R[L++];z|=(G&127)<<B,B+=7}while(32>B&&G&128);for(32<B&&(u|=(G&127)>>4),B=3;32>B&&G&128;B+=7)G=R[L++],u|=(G&127)<<B;if(Ft(T,L),128>G)T=z>>>0,G=u>>>0,(u=G&2147483648)&&(T=~T+1>>>0,G=~G>>>0,T==0&&(G=G+1>>>0)),T=4294967296*G+(T>>>0);else throw be();return cr(m,b,u?-T:T),!0},function(u,m,b){m=Rt(m,b),m!=null&&(typeof m=="string"&&he(m),m!=null&&(on(u.h,8*b),typeof m=="number"?(u=u.h,ne(m),ds(u,H,Y)):(b=he(m),ds(u.h,b.i,b.h))))}),Aa=oi(function(u,m,b){return u.i!==0?!1:(cr(m,b,Gn(u.h)),!0)},function(u,m,b){if(m=Rt(m,b),m!=null&&m!=null)if(on(u.h,8*b),u=u.h,b=m,0<=b)on(u,b);else{for(m=0;9>m;m++)u.h.push(b&127|128),b>>=7;u.h.push(1)}}),Oa=oi(function(u,m,b){if(u.i!==2)return!1;var T=Gn(u.h)>>>0;u=u.h;var z=ma(u,T);if(u=u.i,ft){var B=u,R;(R=Ye)||(R=Ye=new TextDecoder("utf-8",{fatal:!0})),u=z+T,B=z===0&&u===B.length?B:B.subarray(z,u);try{var L=R.decode(B)}catch(De){if(Fe===void 0){try{R.decode(new Uint8Array([128]))}catch{}try{R.decode(new Uint8Array([97])),Fe=!0}catch{Fe=!1}}throw!Fe&&(Ye=void 0),De}}else{L=z,T=L+T,z=[];for(var G=null,ue,we;L<T;)ue=u[L++],128>ue?z.push(ue):224>ue?L>=T?Ee():(we=u[L++],194>ue||(we&192)!==128?(L--,Ee()):z.push((ue&31)<<6|we&63)):240>ue?L>=T-1?Ee():(we=u[L++],(we&192)!==128||ue===224&&160>we||ue===237&&160<=we||((B=u[L++])&192)!==128?(L--,Ee()):z.push((ue&15)<<12|(we&63)<<6|B&63)):244>=ue?L>=T-2?Ee():(we=u[L++],(we&192)!==128||(ue<<28)+(we-144)>>30||((B=u[L++])&192)!==128||((R=u[L++])&192)!==128?(L--,Ee()):(ue=(ue&7)<<18|(we&63)<<12|(B&63)<<6|R&63,ue-=65536,z.push((ue>>10&1023)+55296,(ue&1023)+56320))):Ee(),8192<=z.length&&(G=Le(G,z),z.length=0);L=Le(G,z)}return cr(m,b,L),!0},function(u,m,b){if(m=Rt(m,b),m!=null){var T=!1;if(T=T===void 0?!1:T,Kt){if(T&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(m))throw Error("Found an unpaired surrogate");m=(xt||(xt=new TextEncoder)).encode(m)}else{for(var z=0,B=new Uint8Array(3*m.length),R=0;R<m.length;R++){var L=m.charCodeAt(R);if(128>L)B[z++]=L;else{if(2048>L)B[z++]=L>>6|192;else{if(55296<=L&&57343>=L){if(56319>=L&&R<m.length){var G=m.charCodeAt(++R);if(56320<=G&&57343>=G){L=1024*(L-55296)+G-56320+65536,B[z++]=L>>18|240,B[z++]=L>>12&63|128,B[z++]=L>>6&63|128,B[z++]=L&63|128;continue}else R--}if(T)throw Error("Found an unpaired surrogate");L=65533}B[z++]=L>>12|224,B[z++]=L>>6&63|128}B[z++]=L&63|128}}m=z===B.length?B:B.subarray(0,z)}on(u.h,8*b+2),on(u.h,m.length),ln(u,u.h.end()),ln(u,m)}}),qi=oi(function(u,m,b,T,z){if(u.i!==2)return!1;m=sr(m,b,T),b=u.h.j,T=Gn(u.h)>>>0;var B=u.h.h+T,R=B-b;if(0>=R&&(u.h.j=B,z(m,u,void 0,void 0,void 0),R=B-u.h.h),R)throw Error("Message parsing ended unexpectedly. Expected to read "+(T+" bytes, instead read "+(T-R)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return u.h.h=B,u.h.j=b,!0},function(u,m,b,T,z){if(m=ti(m,T,b),m!=null)for(T=0;T<m.length;T++){var B=u;on(B.h,8*b+2);var R=B.h.end();ln(B,R),R.push(B.i),B=R,z(m[T],u),R=u;var L=B.pop();for(L=R.i+R.h.length()-L;127<L;)B.push(L&127|128),L>>>=7,R.i++;B.push(L),R.i++}});function bs(u){return function(m,b){e:{if(Tt.length){var T=Tt.pop();T.setOptions(b),lr(T.h,m,b),m=T}else m=new Ni(m,b);try{var z=ai(u),B=gs(new z.P,m,z);break e}finally{z=m.h,z.i=null,z.m=!1,z.l=0,z.j=0,z.h=0,z.S=!1,m.l=-1,m.i=-1,100>Tt.length&&Tt.push(m)}B=void 0}return B}}function vs(u){return function(){var m=new ya;ys(this,m,En(u)),ln(m,m.h.end());for(var b=new Uint8Array(m.i),T=m.j,z=T.length,B=0,R=0;R<z;R++){var L=T[R];b.set(L,B),B+=L.length}return m.j=[b],b}}function In(u){Xt.call(this,u)}E(In,Xt);var za=[In,1,Aa,2,Jt,3,Oa,4,Oa];In.prototype.l=vs(za);function An(u){Xt.call(this,u,-1,yl)}E(An,Xt),An.prototype.addClassification=function(u,m){return sr(this,1,In,u,m),this};var yl=[1],bl=bs([An,1,qi,za]);function li(u){Xt.call(this,u)}E(li,Xt);var Ma=[li,1,Jt,2,Jt,3,Jt,4,Jt,5,Jt];li.prototype.l=vs(Ma);function Ra(u){Xt.call(this,u,-1,vl)}E(Ra,Xt);var vl=[1],Ba=bs([Ra,1,qi,Ma]);function Hi(u){Xt.call(this,u)}E(Hi,Xt);var Pa=[Hi,1,Jt,2,Jt,3,Jt,4,Jt,5,Jt,6,gl],wl=bs(Pa);Hi.prototype.l=vs(Pa);function Da(u,m,b){if(b=u.createShader(b===0?u.VERTEX_SHADER:u.FRAGMENT_SHADER),u.shaderSource(b,m),u.compileShader(b),!u.getShaderParameter(b,u.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+u.getShaderInfoLog(b));return b}function _l(u){return ti(u,In,1).map(function(m){var b=Rt(m,1);return{index:b??0,qa:br(m,2),label:Rt(m,3)!=null?kn(Rt(m,3),""):void 0,displayName:Rt(m,4)!=null?kn(Rt(m,4),""):void 0}})}function xl(u){return{x:br(u,1),y:br(u,2),z:br(u,3),visibility:Fi(u,4)!=null?br(u,4):void 0}}function ws(u,m){this.i=u,this.h=m,this.m=0}function Na(u,m,b){return Ua(u,m),typeof u.h.canvas.transferToImageBitmap=="function"?Promise.resolve(u.h.canvas.transferToImageBitmap()):b?Promise.resolve(u.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(u.h.canvas):(u.j===void 0&&(u.j=document.createElement("canvas")),new Promise(function(T){u.j.height=u.h.canvas.height,u.j.width=u.h.canvas.width,u.j.getContext("2d",{}).drawImage(u.h.canvas,0,0,u.h.canvas.width,u.h.canvas.height),T(u.j)}))}function Ua(u,m){var b=u.h;if(u.s===void 0){var T=Da(b,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),z=Da(b,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),B=b.createProgram();if(b.attachShader(B,T),b.attachShader(B,z),b.linkProgram(B),!b.getProgramParameter(B,b.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+b.getProgramInfoLog(B));T=u.s=B,b.useProgram(T),z=b.getUniformLocation(T,"sampler0"),u.l={O:b.getAttribLocation(T,"aVertex"),N:b.getAttribLocation(T,"aTex"),ya:z},u.v=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,u.v),b.enableVertexAttribArray(u.l.O),b.vertexAttribPointer(u.l.O,2,b.FLOAT,!1,0,0),b.bufferData(b.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),b.STATIC_DRAW),b.bindBuffer(b.ARRAY_BUFFER,null),u.u=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,u.u),b.enableVertexAttribArray(u.l.N),b.vertexAttribPointer(u.l.N,2,b.FLOAT,!1,0,0),b.bufferData(b.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),b.STATIC_DRAW),b.bindBuffer(b.ARRAY_BUFFER,null),b.uniform1i(z,0)}T=u.l,b.useProgram(u.s),b.canvas.width=m.width,b.canvas.height=m.height,b.viewport(0,0,m.width,m.height),b.activeTexture(b.TEXTURE0),u.i.bindTexture2d(m.glName),b.enableVertexAttribArray(T.O),b.bindBuffer(b.ARRAY_BUFFER,u.v),b.vertexAttribPointer(T.O,2,b.FLOAT,!1,0,0),b.enableVertexAttribArray(T.N),b.bindBuffer(b.ARRAY_BUFFER,u.u),b.vertexAttribPointer(T.N,2,b.FLOAT,!1,0,0),b.bindFramebuffer(b.DRAW_FRAMEBUFFER?b.DRAW_FRAMEBUFFER:b.FRAMEBUFFER,null),b.clearColor(0,0,0,0),b.clear(b.COLOR_BUFFER_BIT),b.colorMask(!0,!0,!0,!0),b.drawArrays(b.TRIANGLE_FAN,0,4),b.disableVertexAttribArray(T.O),b.disableVertexAttribArray(T.N),b.bindBuffer(b.ARRAY_BUFFER,null),u.i.bindTexture2d(0)}function La(u){this.h=u}var Fa=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function $l(u,m){return m+u}function Va(u,m){window[u]=m}function ja(u){var m=document.createElement("script");return m.setAttribute("src",u),m.setAttribute("crossorigin","anonymous"),new Promise(function(b){m.addEventListener("load",function(){b()},!1),m.addEventListener("error",function(){b()},!1),document.body.appendChild(m)})}function Wa(){return ae(function(u){switch(u.h){case 1:return u.s=2,C(u,WebAssembly.instantiate(Fa),4);case 4:u.h=3,u.s=0;break;case 2:return u.s=0,u.l=null,u.return(!1);case 3:return u.return(!0)}})}function cn(u){if(this.h=u,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=u&&u.locateFile||$l,typeof window=="object")var m=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")m=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=m,u.options){m=o(Object.keys(u.options));for(var b=m.next();!b.done;b=m.next()){b=b.value;var T=u.options[b].default;T!==void 0&&(this.l[b]=typeof T=="function"?T():T)}}}e=cn.prototype,e.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function Sl(u){var m,b,T,z,B,R,L,G,ue,we,De;return ae(function(Me){switch(Me.h){case 1:return u.ga?(m=u.h.files===void 0?[]:typeof u.h.files=="function"?u.h.files(u.l):u.h.files,C(Me,Wa(),2)):Me.return();case 2:if(b=Me.i,typeof window=="object")return Va("createMediapipeSolutionsWasm",{locateFile:u.locateFile}),Va("createMediapipeSolutionsPackedAssets",{locateFile:u.locateFile}),R=m.filter(function(xe){return xe.data!==void 0}),L=m.filter(function(xe){return xe.data===void 0}),G=Promise.all(R.map(function(xe){var Pe=Gi(u,xe.url);if(xe.path!==void 0){var qe=xe.path;Pe=Pe.then(function(yt){return u.overrideFile(qe,yt),Promise.resolve(yt)})}return Pe})),ue=Promise.all(L.map(function(xe){return xe.simd===void 0||xe.simd&&b||!xe.simd&&!b?ja(u.locateFile(xe.url,u.ha)):Promise.resolve()})).then(function(){var xe,Pe,qe;return ae(function(yt){if(yt.h==1)return xe=window.createMediapipeSolutionsWasm,Pe=window.createMediapipeSolutionsPackedAssets,qe=u,C(yt,xe(Pe),2);qe.i=yt.i,yt.h=0})}),we=function(){return ae(function(xe){return u.h.graph&&u.h.graph.url?xe=C(xe,Gi(u,u.h.graph.url),0):(xe.h=0,xe=void 0),xe})}(),C(Me,Promise.all([ue,G,we]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return T=m.filter(function(xe){return xe.simd===void 0||xe.simd&&b||!xe.simd&&!b}).map(function(xe){return u.locateFile(xe.url,u.ha)}),importScripts.apply(null,l(T)),z=u,C(Me,createMediapipeSolutionsWasm(Module),6);case 6:z.i=Me.i,u.m=new OffscreenCanvas(1,1),u.i.canvas=u.m,B=u.i.GL.createContext(u.m,{antialias:!1,alpha:!1,va:typeof WebGL2RenderingContext<"u"?2:1}),u.i.GL.makeContextCurrent(B),Me.h=4;break;case 7:if(u.m=document.createElement("canvas"),De=u.m.getContext("webgl2",{}),!De&&(De=u.m.getContext("webgl",{}),!De))return alert("Failed to create WebGL canvas context when passing video frame."),Me.return();u.K=De,u.i.canvas=u.m,u.i.createContext(u.m,!0,!0,{});case 4:u.j=new u.i.SolutionWasm,u.ga=!1,Me.h=0}})}function qa(u){var m,b,T,z,B,R,L,G;return ae(function(ue){if(ue.h==1){if(u.h.graph&&u.h.graph.url&&u.fa===u.h.graph.url)return ue.return();if(u.u=!0,!u.h.graph||!u.h.graph.url){ue.h=2;return}return u.fa=u.h.graph.url,C(ue,Gi(u,u.h.graph.url),3)}for(ue.h!=2&&(m=ue.i,u.j.loadGraph(m)),b=o(Object.keys(u.D)),T=b.next();!T.done;T=b.next())z=T.value,u.j.overrideFile(z,u.D[z]);if(u.D={},u.h.listeners)for(B=o(u.h.listeners),R=B.next();!R.done;R=B.next())L=R.value,Ha(u,L);G=u.l,u.l={},u.setOptions(G),ue.h=0})}e.reset=function(){var u=this;return ae(function(m){u.j&&(u.j.reset(),u.s={},u.v={}),m.h=0})},e.setOptions=function(u,m){var b=this;if(m=m||this.h.options){for(var T=[],z=[],B={},R=o(Object.keys(u)),L=R.next();!L.done;B={X:B.X,Y:B.Y},L=R.next())if(L=L.value,!(L in this.l&&this.l[L]===u[L])){this.l[L]=u[L];var G=m[L];G!==void 0&&(G.onChange&&(B.X=G.onChange,B.Y=u[L],T.push(function(ue){return function(){var we;return ae(function(De){if(De.h==1)return C(De,ue.X(ue.Y),2);we=De.i,we===!0&&(b.u=!0),De.h=0})}}(B))),G.graphOptionXref&&(L=Object.assign({},{calculatorName:"",calculatorIndex:0},G.graphOptionXref,{valueNumber:G.type===1?u[L]:0,valueBoolean:G.type===0?u[L]:!1,valueString:G.type===2?u[L]:""}),z.push(L)))}(T.length!==0||z.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(z),this.F=(this.F===void 0?[]:this.F).concat(T))}};function Tl(u){var m,b,T,z,B,R,L;return ae(function(G){switch(G.h){case 1:if(!u.u)return G.return();if(!u.F){G.h=2;break}m=o(u.F),b=m.next();case 3:if(b.done){G.h=5;break}return T=b.value,C(G,T(),4);case 4:b=m.next(),G.h=3;break;case 5:u.F=void 0;case 2:if(u.H){for(z=new u.i.GraphOptionChangeRequestList,B=o(u.H),R=B.next();!R.done;R=B.next())L=R.value,z.push_back(L);u.j.changeOptions(z),z.delete(),u.H=void 0}u.u=!1,G.h=0}})}e.initialize=function(){var u=this;return ae(function(m){return m.h==1?C(m,Sl(u),2):m.h!=3?C(m,qa(u),3):C(m,Tl(u),0)})};function Gi(u,m){var b,T;return ae(function(z){return m in u.L?z.return(u.L[m]):(b=u.locateFile(m,""),T=fetch(b).then(function(B){return B.arrayBuffer()}),u.L[m]=T,z.return(T))})}e.overrideFile=function(u,m){this.j?this.j.overrideFile(u,m):this.D[u]=m},e.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},e.send=function(u,m){var b=this,T,z,B,R,L,G,ue,we,De;return ae(function(Me){switch(Me.h){case 1:return b.h.inputs?(T=1e3*(m??performance.now()),C(Me,b.I,2)):Me.return();case 2:return C(Me,b.initialize(),3);case 3:for(z=new b.i.PacketDataList,B=o(Object.keys(u)),R=B.next();!R.done;R=B.next())if(L=R.value,G=b.h.inputs[L]){e:{var xe=u[L];switch(G.type){case"video":var Pe=b.s[G.stream];if(Pe||(Pe=new ws(b.i,b.K),b.s[G.stream]=Pe),Pe.m===0&&(Pe.m=Pe.i.createTexture()),typeof HTMLVideoElement<"u"&&xe instanceof HTMLVideoElement)var qe=xe.videoWidth,yt=xe.videoHeight;else typeof HTMLImageElement<"u"&&xe instanceof HTMLImageElement?(qe=xe.naturalWidth,yt=xe.naturalHeight):(qe=xe.width,yt=xe.height);yt={glName:Pe.m,width:qe,height:yt},qe=Pe.h,qe.canvas.width=yt.width,qe.canvas.height=yt.height,qe.activeTexture(qe.TEXTURE0),Pe.i.bindTexture2d(Pe.m),qe.texImage2D(qe.TEXTURE_2D,0,qe.RGBA,qe.RGBA,qe.UNSIGNED_BYTE,xe),Pe.i.bindTexture2d(0),Pe=yt;break e;case"detections":for(Pe=b.s[G.stream],Pe||(Pe=new La(b.i),b.s[G.stream]=Pe),Pe.data||(Pe.data=new Pe.h.DetectionListData),Pe.data.reset(xe.length),yt=0;yt<xe.length;++yt){qe=xe[yt];var ht=Pe.data,Bt=ht.setBoundingBox,er=yt,qt=qe.la,st=new Hi;if(zt(st,1,qt.sa),zt(st,2,qt.ta),zt(st,3,qt.height),zt(st,4,qt.width),zt(st,5,qt.rotation),cr(st,6,qt.pa),qt=st.l(),Bt.call(ht,er,qt),qe.ea)for(ht=0;ht<qe.ea.length;++ht){st=qe.ea[ht],Bt=Pe.data,er=Bt.addNormalizedLandmark,qt=yt,st=Object.assign({},st,{visibility:st.visibility?st.visibility:0});var Pt=new li;zt(Pt,1,st.x),zt(Pt,2,st.y),zt(Pt,3,st.z),st.visibility&&zt(Pt,4,st.visibility),st=Pt.l(),er.call(Bt,qt,st)}if(qe.ba)for(ht=0;ht<qe.ba.length;++ht)Bt=Pe.data,er=Bt.addClassification,qt=yt,st=qe.ba[ht],Pt=new In,zt(Pt,2,st.qa),st.index&&cr(Pt,1,st.index),st.label&&cr(Pt,3,st.label),st.displayName&&cr(Pt,4,st.displayName),st=Pt.l(),er.call(Bt,qt,st)}Pe=Pe.data;break e;default:Pe={}}}switch(ue=Pe,we=G.stream,G.type){case"video":z.pushTexture2d(Object.assign({},ue,{stream:we,timestamp:T}));break;case"detections":De=ue,De.stream=we,De.timestamp=T,z.pushDetectionList(De);break;default:throw Error("Unknown input config type: '"+G.type+"'")}}return b.j.send(z),C(Me,b.I,4);case 4:z.delete(),Me.h=0}})};function kl(u,m,b){var T,z,B,R,L,G,ue,we,De,Me,xe,Pe,qe,yt;return ae(function(ht){switch(ht.h){case 1:if(!b)return ht.return(m);for(T={},z=0,B=o(Object.keys(b)),R=B.next();!R.done;R=B.next())L=R.value,G=b[L],typeof G!="string"&&G.type==="texture"&&m[G.stream]!==void 0&&++z;1<z&&(u.M=!1),ue=o(Object.keys(b)),R=ue.next();case 2:if(R.done){ht.h=4;break}if(we=R.value,De=b[we],typeof De=="string")return qe=T,yt=we,C(ht,_s(u,we,m[De]),14);if(Me=m[De.stream],De.type==="detection_list"){if(Me){for(var Bt=Me.getRectList(),er=Me.getLandmarksList(),qt=Me.getClassificationsList(),st=[],Pt=0;Pt<Bt.size();++Pt){var qr=wl(Bt.get(Pt)),Xa=br(qr,1),Ya=br(qr,2),Ki=br(qr,3),wr=br(qr,4),ui=br(qr,5,0),On=void 0;On=On===void 0?0:On,qr={la:{sa:Xa,ta:Ya,height:Ki,width:wr,rotation:ui,pa:kn(Rt(qr,6),On)},ea:ti(Ba(er.get(Pt)),li,1).map(xl),ba:_l(bl(qt.get(Pt)))},st.push(qr)}Bt=st}else Bt=[];T[we]=Bt,ht.h=7;break}if(De.type==="proto_list"){if(Me){for(Bt=Array(Me.size()),er=0;er<Me.size();er++)Bt[er]=Me.get(er);Me.delete()}else Bt=[];T[we]=Bt,ht.h=7;break}if(Me===void 0){ht.h=3;break}if(De.type==="float_list"){T[we]=Me,ht.h=7;break}if(De.type==="proto"){T[we]=Me,ht.h=7;break}if(De.type!=="texture")throw Error("Unknown output config type: '"+De.type+"'");return xe=u.v[we],xe||(xe=new ws(u.i,u.K),u.v[we]=xe),C(ht,Na(xe,Me,u.M),13);case 13:Pe=ht.i,T[we]=Pe;case 7:De.transform&&T[we]&&(T[we]=De.transform(T[we])),ht.h=3;break;case 14:qe[yt]=ht.i;case 3:R=ue.next(),ht.h=2;break;case 4:return ht.return(T)}})}function _s(u,m,b){var T;return ae(function(z){return typeof b=="number"||b instanceof Uint8Array||b instanceof u.i.Uint8BlobList?z.return(b):b instanceof u.i.Texture2dDataOut?(T=u.v[m],T||(T=new ws(u.i,u.K),u.v[m]=T),z.return(Na(T,b,u.M))):z.return(void 0)})}function Ha(u,m){for(var b=m.name||"$",T=[].concat(l(m.wants)),z=new u.i.StringList,B=o(m.wants),R=B.next();!R.done;R=B.next())z.push_back(R.value);B=u.i.PacketListener.implement({onResults:function(L){for(var G={},ue=0;ue<m.wants.length;++ue)G[T[ue]]=L.get(ue);var we=u.listeners[b];we&&(u.I=kl(u,G,m.outs).then(function(De){De=we(De);for(var Me=0;Me<m.wants.length;++Me){var xe=G[T[Me]];typeof xe=="object"&&xe.hasOwnProperty&&xe.hasOwnProperty("delete")&&xe.delete()}De&&(u.I=De)}))}}),u.j.attachMultiListener(z,B),z.delete()}e.onResults=function(u,m){this.listeners[m||"$"]=u},J("Solution",cn),J("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Ga(u){switch(u===void 0&&(u=0),u){case 1:return"selfie_segmentation_landscape.tflite";default:return"selfie_segmentation.tflite"}}function Ka(u){var m=this;u=u||{},this.h=new cn({locateFile:u.locateFile,files:function(b){return[{simd:!0,url:"selfie_segmentation_solution_simd_wasm_bin.js"},{simd:!1,url:"selfie_segmentation_solution_wasm_bin.js"},{data:!0,url:Ga(b.modelSelection)}]},graph:{url:"selfie_segmentation.binarypb"},listeners:[{wants:["segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelSelection:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelSelection",fieldName:"int_value"},onChange:function(b){var T,z,B;return ae(function(R){return R.h==1?(T=Ga(b),z="third_party/mediapipe/modules/selfie_segmentation/"+T,C(R,Gi(m.h,T),2)):(B=R.i,m.h.overrideFile(z,B),R.return(!0))})}}}})}e=Ka.prototype,e.close=function(){return this.h.close(),Promise.resolve()},e.onResults=function(u){this.h.onResults(u)},e.initialize=function(){var u=this;return ae(function(m){return C(m,u.h.initialize(),0)})},e.reset=function(){this.h.reset()},e.send=function(u){var m=this;return ae(function(b){return C(b,m.h.send(u),0)})},e.setOptions=function(u){this.h.setOptions(u)},J("SelfieSegmentation",Ka),J("VERSION","0.1.1675465747")}).call(Yl);class Sx{segmenter=null;isLoaded=!1;isProcessing=!1;lastProcessTime=0;targetFps=15;frameInterval=1e3/15;downsampleCanvas;downsampleCtx;onResultCallback;constructor(){this.downsampleCanvas=document.createElement("canvas"),this.downsampleCanvas.width=256,this.downsampleCanvas.height=256,this.downsampleCtx=this.downsampleCanvas.getContext("2d",{willReadFrequently:!0})}async init(t="/mediapipe/"){if(!this.isLoaded)try{this.segmenter=new ny.SelfieSegmentation({locateFile:r=>`https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation@0.1.1675465747/${r}`}),this.segmenter.setOptions({modelSelection:0,selfieMode:!1}),this.segmenter.onResults(r=>{this.isProcessing=!1,this.onResultCallback&&r.segmentationMask&&this.onResultCallback(r.segmentationMask,r.image)}),await this.segmenter.initialize(),this.isLoaded=!0,console.log("[RealtimeSegmenter] MediaPipe SelfieSegmentation 初始化成功")}catch(r){console.warn("[RealtimeSegmenter] MediaPipe 初始化降级提示:",r)}}setOnResult(t){this.onResultCallback=t}async sendFrame(t){if(!this.segmenter||!this.isLoaded)return!1;const r=performance.now();if(r-this.lastProcessTime<this.frameInterval||this.isProcessing)return!1;this.lastProcessTime=r,this.isProcessing=!0;try{if(this.downsampleCtx)return this.downsampleCtx.drawImage(t,0,0,256,256),await this.segmenter.send({image:this.downsampleCanvas}),!0}catch(n){this.isProcessing=!1,console.error("[RealtimeSegmenter] sendFrame 错误:",n)}return!1}renderComposite(t,r,n,i,s=!1){const a=t.getContext("2d");if(!a)return;const o=t.width,l=t.height;if(a.save(),s&&(a.translate(o,0),a.scale(-1,1)),a.clearRect(0,0,o,l),i.isGradient&&i.gradientStops){const f=a.createLinearGradient(0,0,0,l);f.addColorStop(0,i.gradientStops[0]),f.addColorStop(1,i.gradientStops[1]),a.fillStyle=f}else a.fillStyle=i.value||"#FFFFFF";a.fillRect(0,0,o,l),a.save(),a.globalCompositeOperation="source-over";const d=document.createElement("canvas");d.width=o,d.height=l;const p=d.getContext("2d");p&&(p.drawImage(r,0,0,o,l),p.globalCompositeOperation="destination-in",p.drawImage(n,0,0,o,l),a.drawImage(d,0,0,o,l)),a.restore(),a.restore()}destroy(){this.segmenter&&(this.segmenter.close(),this.segmenter=null),this.isLoaded=!1}}/*!
 * ONNX Runtime Web v1.30.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var qd=Object.defineProperty,Tx=Object.getOwnPropertyDescriptor,kx=Object.getOwnPropertyNames,Cx=Object.prototype.hasOwnProperty,Ex=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ce=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(n){throw r=[n],n}},us=(e,t)=>{for(var r in t)qd(e,r,{get:t[r],enumerable:!0})},Ix=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of kx(t))!Cx.call(e,i)&&i!==r&&qd(e,i,{get:()=>t[i],enumerable:!(n=Tx(t,i))||n.enumerable});return e},la=e=>Ix(qd({},"__esModule",{value:!0}),e),ks,Rn,Qi,Jp,iy,sy=ce(()=>{"use strict";ks=new Map,Rn=[],Qi=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=ks.get(e);if(n===void 0)ks.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=Rn.indexOf(e);i!==-1&&Rn.splice(i,1);for(let s=0;s<Rn.length;s++)if(ks.get(Rn[s]).priority<=r){Rn.splice(s,0,e);return}Rn.push(e)}return}throw new TypeError("not a valid backend")},Jp=async e=>{let t=ks.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},iy=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),n=r.length===0?Rn:r,i,s=[],a=new Set;for(let l of n){let d=await Jp(l);typeof d=="string"?s.push({name:l,err:d}):(i||(i=d),i===d&&a.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>a.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),Ax=ce(()=>{"use strict";sy()}),ay,Ox=ce(()=>{"use strict";ay="1.30.0"}),Zl,Vt,oy=ce(()=>{"use strict";Ox(),Zl="warning",Vt={wasm:{},webgl:{},webgpu:{},versions:{common:ay},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Zl=e}},get logLevel(){return Zl}},Object.defineProperty(Vt,"logLevel",{enumerable:!0})}),bt,zx=ce(()=>{"use strict";oy(),bt=Vt}),ly,uy,Mx=ce(()=>{"use strict";ly=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let a=t?.format!==void 0?t.format:"RGB",o=t?.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let p=s*i,f=0,g=p,v=p*2,y=-1;a==="RGBA"?(f=0,g=p,v=p*2,y=p*3):a==="RGB"?(f=0,g=p,v=p*2):a==="RBG"&&(f=0,v=p,g=p*2);for(let $=0;$<s;$++)for(let E=0;E<i;E++){let S=(e.data[f++]-d[0])*l[0],x=(e.data[g++]-d[1])*l[1],A=(e.data[v++]-d[2])*l[2],C=y===-1?255:(e.data[y++]-d[3])*l[3];n.fillStyle="rgba("+S+","+x+","+A+","+C+")",n.fillRect(E,$,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},uy=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,s,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],a=e.dims[3]):(i=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let f=s*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,v=0,y=1,$=2,E=3,S=0,x=f,A=f*2,C=-1;o==="RGBA"?(S=0,x=f,A=f*2,C=f*3):o==="RGB"?(S=0,x=f,A=f*2):o==="RBG"&&(S=0,A=f,x=f*2),n=r.createImageData(i,s);for(let O=0;O<s*i;v+=g,y+=g,$+=g,E+=g,O++)n.data[v]=(e.data[S++]-p[0])*d[0],n.data[y]=(e.data[x++]-p[1])*d[1],n.data[$]=(e.data[A++]-p[2])*d[2],n.data[E]=C===-1?255:(e.data[C++]-p[3])*d[3]}else throw new Error("Can not access image data");return n}}),ao,dy,cy,py,fy,hy,Rx=ce(()=>{"use strict";Hd(),ao=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},s,a;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,p=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,g=0,v=1,y=2,$=3,E=0,S=d,x=d*2,A=-1;o==="RGB"&&(f=3,g=0,v=1,y=2,$=-1),l==="RGBA"?A=d*3:l==="RBG"?(E=0,x=d,S=d*2):l==="BGR"&&(x=0,S=d,E=d*2);for(let C=0;C<d;C++,g+=f,y+=f,v+=f,$+=f)p[E++]=(e[g]+a[0])/s[0],p[S++]=(e[v]+a[1])/s[1],p[x++]=(e[y]+a[2])/s[2],A!==-1&&$!==-1&&(p[A++]=(e[$]+a[3])/s[3]);return l==="RGBA"?new fr("float32",p,[1,4,r,n]):new fr("float32",p,[1,3,r,n])},dy=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(r){let p=l();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let g=e.height,v=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,v=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=g,o.width=v}else o.tensorFormat="RGBA",o.height=g,o.width=v;f.drawImage(e,0,0),a=f.getImageData(0,0,v,g).data}else throw new Error("Can not access image data")}else if(n){let p,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,f=t.resizedWidth):(p=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=f,t!==void 0){let g=l();g.width=f,g.height=p;let v=d(g);if(v!=null)v.putImageData(e,0,0),a=v.getImageData(0,0,f,p).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=l();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let g=e.height,v=e.width;return f.drawImage(e,0,0,v,g),a=f.getImageData(0,0,v,g).data,o.height=g,o.width=v,ao(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((p,f)=>{let g=l(),v=d(g);if(!e||!v)return f();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{g.width=y.width,g.height=y.height,v.drawImage(y,0,0,g.width,g.height);let $=v.getImageData(0,0,g.width,g.height);o.height=g.height,o.width=g.width,p(ao($.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return ao(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},cy=(e,t)=>{let{width:r,height:n,download:i,dispose:s}=t,a=[1,n,r,4];return new fr({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:s})},py=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new fr({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:s})},fy=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new fr({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:s})},hy=(e,t,r)=>new fr({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),_i,Us,Ql,my,Bx=ce(()=>{"use strict";_i=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Us=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ql=!1,my=()=>{if(!Ql){Ql=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(_i.set("int64",BigInt64Array),Us.set(BigInt64Array,"int64")),t&&(_i.set("uint64",BigUint64Array),Us.set(BigUint64Array,"uint64")),n?(_i.set("float16",r),Us.set(r,"float16")):_i.set("float16",Uint16Array)}}}),gy,yy,Px=ce(()=>{"use strict";Hd(),gy=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},yy=(e,t)=>{switch(e.location){case"cpu":return new fr(e.type,e.data,t);case"cpu-pinned":return new fr({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new fr({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new fr({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new fr({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),fr,Hd=ce(()=>{"use strict";Mx(),Rx(),Bx(),Px(),fr=class{constructor(e,t,r){my();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=_i.get(n);if(!a)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let l=_i.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?a=l.from(t,BigInt):a=l.from(t)}else if(t instanceof l)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")n="string",a=e;else if(l==="boolean")n="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",a=Uint8Array.from(e);else{let l=Us.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=l,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=a,this.dataLocation="cpu"}let s=gy(i);if(this.cpuData&&s!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=s}static async fromImage(e,t){return dy(e,t)}static fromTexture(e,t){return cy(e,t)}static fromGpuBuffer(e,t){return py(e,t)}static fromMLTensor(e,t){return fy(e,t)}static fromPinnedBuffer(e,t,r){return hy(e,t,r)}toDataURL(e){return ly(this,e)}toImageData(e){return uy(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return yy(this,e)}}}),Dr,by=ce(()=>{"use strict";Hd(),Dr=fr}),No,Jl,an,Lr,Ii,Ai,vy=ce(()=>{"use strict";oy(),No=(e,t)=>{(typeof Vt.trace>"u"?!Vt.wasm.trace:!Vt.trace)||console.timeStamp(`${e}::ORT::${t}`)},Jl=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(s+=`::${t}`),No("CPU",s);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},an=e=>{(typeof Vt.trace>"u"?!Vt.wasm.trace:!Vt.trace)||Jl("BEGIN",e)},Lr=e=>{(typeof Vt.trace>"u"?!Vt.wasm.trace:!Vt.trace)||Jl("END",e)},Ii=e=>{(typeof Vt.trace>"u"?!Vt.wasm.trace:!Vt.trace)||console.time(`ORT::${e}`)},Ai=e=>{(typeof Vt.trace>"u"?!Vt.wasm.trace:!Vt.trace)||console.timeEnd(`ORT::${e}`)}}),wy,Dx=ce(()=>{"use strict";sy(),by(),vy(),wy=class _y{constructor(t){this.handler=t}async run(t,r,n){an(),Ii("InferenceSession.run");let i={},s={};if(typeof t!="object"||t===null||t instanceof Dr||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Dr)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,p=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(p.indexOf(f)!==-1){let g=r[f];(g===null||g instanceof Dr)&&(d=!0,a=!1,i[f]=g)}if(d){if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,s),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let p=o[d];p instanceof Dr?l[d]=p:l[d]=new Dr(p.type,p.data,p.dims)}return Ai("InferenceSession.run"),Lr(),l}async release(){return this.handler.dispose()}static async create(t,r,n,i){an(),Ii("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,f=0,g=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(g=t.byteLength-f,typeof n=="number"){if(g=n,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||f+g>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-f}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(p,f,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await iy(a),d=await o.createInferenceSessionHandler(s,l);return Ai("InferenceSession.create"),Lr(),new _y(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Uo,Nx=ce(()=>{"use strict";Dx(),Uo=wy}),Ux=ce(()=>{"use strict"}),Lx=ce(()=>{"use strict"}),Fx=ce(()=>{"use strict"}),Vx=ce(()=>{"use strict"}),jx={};us(jx,{InferenceSession:()=>Uo,TRACE:()=>No,TRACE_EVENT_BEGIN:()=>Ii,TRACE_EVENT_END:()=>Ai,TRACE_FUNC_BEGIN:()=>an,TRACE_FUNC_END:()=>Lr,Tensor:()=>Dr,env:()=>bt,registerBackend:()=>Qi});var Ir=ce(()=>{"use strict";Ax(),zx(),Nx(),by(),Ux(),Lx(),vy(),Fx(),Vx()}),Gd=ce(()=>{"use strict"}),xy={};us(xy,{default:()=>$y});var eu,tu,$y,Wx=ce(()=>{"use strict";Ow(),Bi(),Kd(),eu="ort-wasm-proxy-worker",tu=globalThis.self?.name===eu,tu&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Xd(r.wasm).then(()=>{pc(r).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})})},n=>{postMessage({type:t,err:n})});break;case"init-ep":{let{epName:n,env:i}=r;fc(i,n).then(()=>{postMessage({type:t})},s=>{postMessage({type:t,err:s})});break}case"copy-from":{let{buffer:n}=r,i=Ho(n);postMessage({type:t,out:i});break}case"create":{let{model:n,options:i}=r;hc(n,i).then(s=>{postMessage({type:t,out:s})},s=>{postMessage({type:t,err:s})});break}case"release":mc(r),postMessage({type:t});break;case"run":{let{sessionId:n,inputIndices:i,inputs:s,outputIndices:a,options:o}=r;gc(n,i,s,a,new Array(a.length).fill(null),o).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},bc([...s,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":yc(r),postMessage({type:t});break;default:}}catch(n){postMessage({type:t,err:n})}}),$y=tu?null:e=>new Worker(e??pr,{type:"module",name:eu})}),Sy={};us(Sy,{default:()=>Ty});async function ef(e={}){var t=e,r=!!globalThis.window,n=!!globalThis.WorkerGlobalScope,i=n&&self.name?.startsWith("em-pthread");t.mountExternalData=(c,h)=>{c.startsWith("./")&&(c=c.substring(2)),(t.ad||(t.ad=new Map)).set(c,h)},t.unmountExternalData=()=>{delete t.ad,delete t.Yd,delete t.Xd,delete t.be},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=c=>async(...h)=>{try{if(t.$c)throw Error("Session already started");let _=t.$c={Nd:h[0],errors:[]},w=await c(...h);if(t.$c!==_)throw Error("Session mismatch");t.hd?.flush();let I=_.errors;if(0<I.length){let P=await Promise.all(I);if(P=P.filter(W=>W),0<P.length)throw Error(P.join(`
`))}return w}finally{t.$c=null}};t.jsepInit=(c,h)=>{if(c==="webgpu"){[t.hd,t.Dd,t.Hd,t.jd,t.Gd,t.bc,t.Id,t.Kd,t.Ed,t.Fd,t.Jd]=h;let _=t.hd;t.jsepRegisterBuffer=(w,I,P,W)=>_.registerBuffer(w,I,P,W),t.jsepGetBuffer=w=>_.getBuffer(w),t.jsepCreateDownloader=(w,I,P)=>_.createDownloader(w,I,P),t.jsepOnCreateSession=w=>{_.onCreateSession(w)},t.jsepOnReleaseSession=w=>{_.onReleaseSession(w)},t.jsepOnRunStart=w=>_.onRunStart(w),t.Ld=(w,I)=>{_.upload(w,I)}}else if(c==="webnn"){let _=h[0];[t.Vd,t.vd,t.webnnEnsureTensor,t.wd,t.webnnDownloadTensor,t.Ud,t.webnnEnableTraceEvent]=h.slice(1),t.webnnReleaseTensorId=t.vd,t.webnnUploadTensor=t.wd,t.webnnRegisterMLContext=t.Ud,t.webnnOnRunStart=w=>_.onRunStart(w),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=w=>{_.onReleaseSession(w)},t.webnnCreateMLTensorDownloader=(w,I)=>_.createMLTensorDownloader(w,I),t.webnnRegisterMLTensor=(w,I,P,W)=>_.registerMLTensor(w,I,P,W),t.webnnCreateMLContext=w=>_.createMLContext(w),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let a=()=>{let c=h=>(..._)=>{let w=vr;return _=h(..._),vr!=w?new Promise((I,P)=>{Jt={resolve:I,reject:P}}):_};(()=>{for(let h of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[h]=c(t[h])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a?.()};var o,l,d=(c,h)=>{throw h},p=import.meta.url,f="";if(r||n){try{f=new URL(".",p).href}catch{}n&&(l=c=>{var h=new XMLHttpRequest;return h.open("GET",c,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),o=async c=>{if(N(c))return new Promise((_,w)=>{var I=new XMLHttpRequest;I.open("GET",c,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?_(I.response):w(I.status)},I.onerror=w,I.send(null)});var h=await fetch(c,{credentials:"same-origin"});if(h.ok)return h.arrayBuffer();throw Error(h.status+" : "+h.url)}}var g,v,y,$,E,S,x=console.log.bind(console),A=console.error.bind(console),C=x,O=A,D=!1,N=c=>c.startsWith("file://");function k(){Fe.buffer!=Z.buffer&&$e()}if(i){let c=function(h){try{var _=h.data,w=_.Vc;if(w==="load"){let I=[];self.onmessage=P=>I.push(P),S=()=>{postMessage({Vc:"loaded"});for(let P of I)c(P);self.onmessage=c};for(let P of _.Ad)t[P]&&!t[P].proxy||(t[P]=(...W)=>{postMessage({Vc:"callHandler",yd:P,args:W})},P=="print"&&(C=t[P]),P=="printErr"&&(O=t[P]));Fe=_.Rd,$e(),v=_.Sd,gt(),Za()}else if(w==="run"){(function(I){var P=(k(),J)[I+52>>>2>>>0];I=(k(),J)[I+56>>>2>>>0],Sc(P,P-I),He(P)})(_.Uc),On(_.Uc,0,0,1,0,0),Ae(),Cn(_.Uc),q||(Ya(),q=!0);try{Ye(_.Pd,_.ed)}catch(I){if(I!="unwind")throw I}}else _.target!=="setimmediate"&&(w==="checkMailbox"?q&&ii():w&&(O(`worker: received unknown command ${w}`),O(_)))}catch(I){throw vc(),I}};var q=!1;self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=c}var Z,ae,X,oe,F,J,pe,le,de,_e,ke,te=!1;function $e(){var c=Fe.buffer;t.HEAP8=Z=new Int8Array(c),X=new Int16Array(c),t.HEAPU8=ae=new Uint8Array(c),oe=new Uint16Array(c),t.HEAP32=F=new Int32Array(c),t.HEAPU32=J=new Uint32Array(c),pe=new Float32Array(c),le=new Float64Array(c),de=new BigInt64Array(c),_e=new BigUint64Array(c)}function Se(){te=!0,i?S():pn.ub()}function ve(c){throw O(c="Aborted("+c+")"),D=!0,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),E?.(c),c}function _t(){return{a:{ma:qw,hb:Ww,g:Kt,J:gr,f:ct,o:lr,i:Ft,$:Gn,b:ma,S:ga,Ha:ds,n:on,aa:ya,Ya:ln,Da:ba,Fa:yr,Za:Fr,Wa:ps,Pa:Et,Va:ur,ka:Ui,Ea:va,Ba:Xn,Xa:Li,Ca:Yn,cb:Zn,fa:ei,wa:fs,ua:Vi,ea:wa,N:hs,H:ul,va:_a,_:ka,xa:dl,Sa:cl,za:Ea,Ia:pl,sa:fl,ga:hl,Ra:Cn,$a:ml,Q:Oa,r:yl,c:ti,ib:bl,y:li,M:Ma,D:Ra,l:vl,s:Ba,jb:Hi,I:Pa,R:wl,j:Da,u:_l,q:xl,k:ws,Ma:Na,Na:$l,Oa:Va,Ka:ja,La:Wa,ta:qa,eb:Tl,bb:kl,v:Ga,ba:Ka,ha:u,ab:Gi,V:m,_a:b,Aa:T,F:Sl,U:z,la:ue,ya:we,gb:G,fb:De,Ta:qe,Ua:yt,Ga:ge,T:ht,Ja:Bt,ja:er,Qa:qt,ia:Pt,lb:E_,na:$_,mb:C_,oa:x_,G:c_,e:Xw,t:Gw,w:Hw,B:s_,nb:v_,Z:b_,x:Qw,pa:w_,X:S_,ca:y_,ob:g_,pb:m_,O:a_,qb:f_,qa:h_,rb:p_,L:u_,Y:__,d:Kw,A:Zw,m:Yw,kb:I_,p:e_,z:t_,C:Jw,E:r_,K:o_,ra:d_,P:T_,da:l_,W:k_,sb:i_,tb:n_,h:qr,a:Fe,db:ne}}}async function gt(){function c(w,I){var P=pn=w.exports;w={};for(let[W,ee]of Object.entries(P))typeof ee=="function"?(P=si(ee),w[W]=P):w[W]=ee;return pn=w,pn=function(){var W=pn,ee=Te=>Ve=>Te(Ve)>>>0,ye=Te=>()=>Te()>>>0;return(W=Object.assign({},W)).vb=ee(W.vb),W.Zb=ye(W.Zb),W.$b=ee(W.$b),W.nc=ee(W.nc),W.oc=ye(W.oc),W.sc=ee(W.sc),W}(),ie.push(pn.ac),Xa=(w=pn).vb,Ya=w.wb,t._OrtInit=w.xb,t._OrtGetLastError=w.yb,t._OrtCreateSessionOptions=w.zb,t._OrtAppendExecutionProvider=w.Ab,t._OrtAddFreeDimensionOverride=w.Bb,t._OrtAddSessionConfigEntry=w.Cb,t._OrtReleaseSessionOptions=w.Db,t._OrtCreateSession=w.Eb,t._OrtReleaseSession=w.Fb,t._OrtGetInputOutputCount=w.Gb,t._OrtGetInputOutputMetadata=w.Hb,t._OrtFree=w.Ib,t._OrtCreateTensor=w.Jb,t._OrtGetTensorData=w.Kb,t._OrtReleaseTensor=w.Lb,t._OrtCreateRunOptions=w.Mb,t._OrtAddRunConfigEntry=w.Nb,t._OrtReleaseRunOptions=w.Ob,t._OrtCreateBinding=w.Pb,t._OrtBindInput=w.Qb,t._OrtBindOutput=w.Rb,t._OrtClearBoundOutputs=w.Sb,t._OrtReleaseBinding=w.Tb,t._OrtRunWithBinding=w.Ub,t._OrtRun=w.Vb,t._OrtEndProfiling=w.Wb,t._JsepOutput=w.Xb,t._JsepGetNodeName=w.Yb,Ki=w.Zb,wr=t._free=w._b,ui=t._malloc=w.$b,On=w.cc,vc=w.dc,wc=w.ec,_c=w.fc,Cl=w.gc,xc=w.hc,$c=w.ic,Xe=w.jc,xs=w.kc,Sc=w.lc,He=w.mc,El=w.nc,Ge=w.oc,Tc=w.pc,Il=w.qc,kc=w.rc,Cc=w.sc,Ec=w.tc,Al=w.uc,Ic=w.vc,Ac=w.wc,Oc=w.xc,zc=w.yc,Mc=w.zc,Rc=w.Ac,Bc=w.Bc,Pc=w.Cc,Dc=w.Dc,Nc=w.Ec,Uc=w.Fc,Lc=w.Gc,Fc=w.Hc,Vc=w.Ic,jc=w.Jc,Wc=w.Kc,qc=w.Lc,Hc=w.Mc,Gc=w.Nc,Kc=w.Oc,Xc=w.Pc,Yc=w.Qc,Zc=w.Sc,Qc=w.Tc,Jc=w.cd,ep=w.dd,tp=w.id,rp=w.nd,np=w.od,ip=w.pd,sp=w.qd,ap=w.rd,op=w.sd,lp=w.td,up=w.ud,dp=w.zd,cp=w.Zd,pp=w._d,fp=w.$d,hp=w.ae,v=I,pn}var h,_=_t();return t.instantiateWasm?new Promise(w=>{t.instantiateWasm(_,(I,P)=>{w(c(I,P))})}):i?c(new WebAssembly.Instance(v,_t()),v):(ke??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",f):f+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-MDYUKy93.wasm",import.meta.url).href,h=await async function(w){var I=ke;if(!g&&!N(I))try{var P=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(P,w)}catch(W){O(`wasm streaming compile failed: ${W}`),O("falling back to ArrayBuffer instantiation")}return async function(W,ee){try{var ye=await async function(Te){if(!g)try{var Ve=await o(Te);return new Uint8Array(Ve)}catch{}if(Te==ke&&g)Te=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";Te=l(Te)}return Te}(W);return await WebAssembly.instantiate(ye,ee)}catch(Te){O(`failed to asynchronously prepare wasm: ${Te}`),ve(Te)}}(I,w)}(_),c(h.instance,h.module))}class tt{name="ExitStatus";constructor(h){this.message=`Program terminated with exit(${h})`,this.status=h}}var Ct=c=>{c.terminate(),c.onmessage=()=>{}},We=[],it=0,M=null,U=c=>{fe.length==0&&(Le(),Ee(fe[0]));var h=fe.pop();if(!h)return 6;he.push(h),Ce[c.Uc]=h,h.Uc=c.Uc;var _={Vc:"run",Pd:c.Od,ed:c.ed,Uc:c.Uc};return h.postMessage(_,c.md),0},H=0,Y=(c,h,..._)=>{var w,I=16*_.length,P=Ge(),W=El(I),ee=W>>>3;for(w of _)typeof w=="bigint"?((k(),de)[ee++>>>0]=1n,(k(),de)[ee++>>>0]=w):((k(),de)[ee++>>>0]=0n,(k(),le)[ee++>>>0]=w);return c=wc(c,0,I,W,h),He(P),c};function ne(c){if(i)return Y(0,1,c);if(y=c,!(0<H)){for(var h of he)Ct(h);for(h of fe)Ct(h);fe=[],he=[],Ce={},D=!0}d(0,new tt(c))}function se(c){if(i)return Y(1,0,c);ge(c)}var ge=c=>{if(y=c,i)throw se(c),"unwind";ne(c)},fe=[],he=[],ie=[],Ce={},be=c=>{var h=c.Uc;delete Ce[h],fe.push(c),he.splice(he.indexOf(c),1),c.Uc=0,_c(h)};function Ae(){ie.forEach(c=>c())}var Ee=c=>new Promise(h=>{c.onmessage=I=>{var P=I.data;if(I=P.Vc,P.bd&&P.bd!=Ki()){var W=Ce[P.bd];W?W.postMessage(P,P.md):O(`Internal error! Worker sent a message "${I}" to target pthread ${P.bd}, but that thread no longer exists!`)}else I==="checkMailbox"?ii():I==="spawnThread"?U(P):I==="cleanupThread"?ni(()=>{be(Ce[P.Qd])}):I==="loaded"?(c.loaded=!0,h(c)):P.target==="setimmediate"?c.postMessage(P):I==="uncaughtException"?c.onerror(P.error):I==="callHandler"?t[P.yd](...P.args):I&&O(`worker sent an unknown command ${I}`)},c.onerror=I=>{throw O(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var _,w=[];for(_ of[])t.propertyIsEnumerable(_)&&w.push(_);c.postMessage({Vc:"load",Ad:w,Rd:Fe,Sd:v})});function Le(){var c=new Worker((()=>{let h=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new h("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});fe.push(c)}var Fe,Ye=(c,h)=>{H=0,c=Al(c,h),0<H?y=c:Cl(c)},ft=[],xt=0;function Kt(c){var h=new j(c>>>=0);return(k(),Z)[h.Wc+12>>>0]==0&&(or(h,!0),xt--),re(h,!1),ft.push(h),Cc(c)}var Ot=0,gr=()=>{Xe(0,0);var c=ft.pop();Tc(c.gd),Ot=0};function or(c,h){h=h?1:0,(k(),Z)[c.Wc+12>>>0]=h}function re(c,h){h=h?1:0,(k(),Z)[c.Wc+13>>>0]=h}class j{constructor(h){this.gd=h,this.Wc=h-24}}var me=c=>{var h=Ot;if(!h)return xs(0),0;var _=new j(h);(k(),J)[_.Wc+16>>>2>>>0]=h;var w=(k(),J)[_.Wc+4>>>2>>>0];if(!w)return xs(0),h;for(var I of c){if(I===0||I===w)break;if(kc(I,w,_.Wc+16))return xs(I),h}return xs(w),h};function ct(){return me([])}function lr(c){return me([c>>>0])}function Ft(c,h,_,w){return me([c>>>0,h>>>0,_>>>0,w>>>0])}var Gn=()=>{var c=ft.pop();c||ve("no exception to throw");var h=c.gd;throw(k(),Z)[c.Wc+13>>>0]==0&&(ft.push(c),re(c,!0),or(c,!1),xt++),Il(h),Ot=h};function ma(c,h,_){var w=new j(c>>>=0);throw h>>>=0,_>>>=0,(k(),J)[w.Wc+16>>>2>>>0]=0,(k(),J)[w.Wc+4>>>2>>>0]=h,(k(),J)[w.Wc+8>>>2>>>0]=_,Il(c),xt++,Ot=c}var ga=()=>xt;function Di(c,h,_,w){return i?Y(2,1,c,h,_,w):ds(c,h,_,w)}function ds(c,h,_,w){if(c>>>=0,h>>>=0,_>>>=0,w>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?Di(c,h,_,w):(c={Od:_,Uc:c,ed:w,md:I},i?(c.Vc="spawnThread",postMessage(c,I),0):U(c))}function on(c){throw Ot||=c>>>0,Ot}var Ni=globalThis.TextDecoder&&new TextDecoder,cs=(c,h,_,w)=>{if(_=h+_,w)return _;for(;c[h]&&!(h>=_);)++h;return h},Kn=(c,h=0,_,w)=>{if(16<(_=cs(c,h>>>=0,_,w))-h&&c.buffer&&Ni)return Ni.decode(c.buffer instanceof ArrayBuffer?c.subarray(h,_):c.slice(h,_));for(w="";h<_;){var I=c[h++];if(128&I){var P=63&c[h++];if((224&I)==192)w+=String.fromCharCode((31&I)<<6|P);else{var W=63&c[h++];65536>(I=(240&I)==224?(15&I)<<12|P<<6|W:(7&I)<<18|P<<12|W<<6|63&c[h++])?w+=String.fromCharCode(I):(I-=65536,w+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else w+=String.fromCharCode(I)}return w},Tt=(c,h,_)=>(c>>>=0)?Kn((k(),ae),c,h,_):"";function ya(c,h,_){return i?Y(3,1,c,h,_):0}function ln(c,h){if(i)return Y(4,1,c,h)}function ba(c,h){if(i)return Y(5,1,c,h)}function yr(c,h,_){if(i)return Y(6,1,c,h,_)}function Fr(c,h,_){return i?Y(7,1,c,h,_):0}function ps(c,h){if(i)return Y(8,1,c,h)}function Et(c,h,_){if(i)return Y(9,1,c,h,_)}function ur(c,h,_,w){if(i)return Y(10,1,c,h,_,w)}function Ui(c,h,_,w){if(i)return Y(11,1,c,h,_,w)}function va(c,h,_,w){if(i)return Y(12,1,c,h,_,w)}function Xn(c){if(i)return Y(13,1,c)}function Li(c,h){if(i)return Y(14,1,c,h)}function Yn(c,h,_){if(i)return Y(15,1,c,h,_)}var Zn=()=>ve(""),dr=c=>{c>>>=0;for(var h="";;){var _=(k(),ae)[c++>>>0];if(!_)return h;h+=String.fromCharCode(_)}},Qn={},Jn={},un=class extends Error{constructor(c){super(c),this.name="BindingError"}};function Rt(c,h,_={}){return function(w,I,P={}){var W=I.name;if(!w)throw new un(`type "${W}" must have a positive integer typeid pointer`);if(Jn.hasOwnProperty(w)){if(P.Bd)return;throw new un(`Cannot register type '${W}' twice`)}Jn[w]=I,Qn.hasOwnProperty(w)&&(I=Qn[w],delete Qn[w],I.forEach(ee=>ee()))}(c,h,_)}var cr=(c,h,_)=>{switch(h){case 1:return _?w=>(k(),Z)[w>>>0]:w=>(k(),ae)[w>>>0];case 2:return _?w=>(k(),X)[w>>>1>>>0]:w=>(k(),oe)[w>>>1>>>0];case 4:return _?w=>(k(),F)[w>>>2>>>0]:w=>(k(),J)[w>>>2>>>0];case 8:return _?w=>(k(),de)[w>>>3>>>0]:w=>(k(),_e)[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${h}): ${c}`)}};function ei(c,h,_,w,I){c>>>=0,_>>>=0,h=dr(h>>>0);let P=W=>W;if(w=w===0n){let W=8*_;P=ee=>BigInt.asUintN(W,ee),I=P(I)}Rt(c,{name:h,Rc:P,Yc:(W,ee)=>(typeof ee=="number"&&(ee=BigInt(ee)),ee),Xc:cr(h,_,!w),Zc:null})}function fs(c,h,_,w){Rt(c>>>=0,{name:h=dr(h>>>0),Rc:function(I){return!!I},Yc:function(I,P){return P?_:w},Xc:function(I){return this.Rc((k(),ae)[I>>>0])},Zc:null})}var Fi=[],Vr=[0,1,,1,null,1,!0,1,!1,1];function ti(c){9<(c>>>=0)&&--Vr[c+1]===0&&(Vr[c]=void 0,Fi.push(c))}var zt=c=>{if(!c)throw new un(`Cannot use deleted val. handle = ${c}`);return Vr[c]},sr=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=Fi.pop()||Vr.length;return Vr[h]=c,Vr[h+1]=1,h}};function kn(c){return this.Rc((k(),J)[c>>>2>>>0])}var br={name:"emscripten::val",Rc:c=>{var h=zt(c);return ti(c),h},Yc:(c,h)=>sr(h),Xc:kn,Zc:null};function Vi(c){return Rt(c>>>0,br)}var ll=(c,h)=>{switch(h){case 4:return function(_){return this.Rc((k(),pe)[_>>>2>>>0])};case 8:return function(_){return this.Rc((k(),le)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${c}`)}};function wa(c,h,_){_>>>=0,Rt(c>>>=0,{name:h=dr(h>>>0),Rc:w=>w,Yc:(w,I)=>I,Xc:ll(h,_),Zc:null})}function hs(c,h,_,w,I){c>>>=0,_>>>=0,h=dr(h>>>0);let P=ee=>ee;if(w===0){var W=32-8*_;P=ee=>ee<<W>>>W,I=P(I)}Rt(c,{name:h,Rc:P,Yc:(ee,ye)=>ye,Xc:cr(h,_,w!==0),Zc:null})}function ul(c,h,_){function w(P){var W=(k(),J)[P>>>2>>>0];return P=(k(),J)[P+4>>>2>>>0],new I((k(),Z).buffer,P,W)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];Rt(c>>>=0,{name:_=dr(_>>>0),Rc:w,Xc:w},{Bd:!0})}var jr=(c,h,_)=>{var w=(k(),ae);if(h>>>=0,0<_){var I=h;_=h+_-1;for(var P=0;P<c.length;++P){var W=c.codePointAt(P);if(127>=W){if(h>=_)break;w[h++>>>0]=W}else if(2047>=W){if(h+1>=_)break;w[h++>>>0]=192|W>>6,w[h++>>>0]=128|63&W}else if(65535>=W){if(h+2>=_)break;w[h++>>>0]=224|W>>12,w[h++>>>0]=128|W>>6&63,w[h++>>>0]=128|63&W}else{if(h+3>=_)break;w[h++>>>0]=240|W>>18,w[h++>>>0]=128|W>>12&63,w[h++>>>0]=128|W>>6&63,w[h++>>>0]=128|63&W,P++}}w[h>>>0]=0,c=h-I}else c=0;return c},ri=c=>{for(var h=0,_=0;_<c.length;++_){var w=c.charCodeAt(_);127>=w?h++:2047>=w?h+=2:55296<=w&&57343>=w?(h+=4,++_):h+=3}return h};function _a(c,h){Rt(c>>>=0,{name:h=dr(h>>>0),Rc(_){var w=(k(),J)[_>>>2>>>0];return w=Tt(_+4,w,!0),wr(_),w},Yc(_,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var I=typeof w=="string";if(!(I||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new un("Cannot pass non-string to std::string");var P=I?ri(w):w.length,W=ui(4+P+1),ee=W+4;return(k(),J)[W>>>2>>>0]=P,I?jr(w,ee,P+1):(k(),ae).set(w,ee>>>0),_!==null&&_.push(wr,W),W},Xc:kn,Zc(_){wr(_)}})}var ms=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,xa=(c,h,_)=>{if(c>>>=1,16<(h=cs((k(),oe),c,h/2,_))-c&&ms)return ms.decode((k(),oe).slice(c,h));for(_="";c<h;++c){var w=(k(),oe)[c>>>0];_+=String.fromCharCode(w)}return _},Xt=(c,h,_)=>{if(_??=2147483647,2>_)return 0;var w=h;_=(_-=2)<2*c.length?_/2:c.length;for(var I=0;I<_;++I){var P=c.charCodeAt(I);(k(),X)[h>>>1>>>0]=P,h+=2}return(k(),X)[h>>>1>>>0]=0,h-w},$a=c=>2*c.length,Sa=(c,h,_)=>{var w="";c>>>=2;for(var I=0;!(I>=h/4);I++){var P=(k(),J)[c+I>>>0];if(!P&&!_)break;w+=String.fromCodePoint(P)}return w},ji=(c,h,_)=>{if(h>>>=0,_??=2147483647,4>_)return 0;var w=h;_=w+_-4;for(var I=0;I<c.length;++I){var P=c.codePointAt(I);if(65535<P&&I++,(k(),F)[h>>>2>>>0]=P,(h+=4)+4>_)break}return(k(),F)[h>>>2>>>0]=0,h-w},Ta=c=>{for(var h=0,_=0;_<c.length;++_)65535<c.codePointAt(_)&&_++,h+=4;return h};function ka(c,h,_){if(c>>>=0,h>>>=0,_=dr(_>>>=0),h===2)var w=xa,I=Xt,P=$a;else w=Sa,I=ji,P=Ta;Rt(c,{name:_,Rc:W=>{var ee=(k(),J)[W>>>2>>>0];return ee=w(W+4,ee*h,!0),wr(W),ee},Yc:(W,ee)=>{if(typeof ee!="string")throw new un(`Cannot pass non-string to C++ string type ${_}`);var ye=P(ee),Te=ui(4+ye+h);return(k(),J)[Te>>>2>>>0]=ye/h,I(ee,Te+4,ye+h),W!==null&&W.push(wr,Te),Te},Xc:kn,Zc(W){wr(W)}})}function dl(c,h){Rt(c>>>=0,{Cd:!0,name:h=dr(h>>>0),Rc:()=>{},Yc:()=>{}})}function cl(c){On(c>>>0,!n,1,!r,131072,!1),Ae()}var ni=c=>{if(!D)try{if(c(),!(0<H))try{i?Ki()&&Cl(y):ge(y)}catch(h){h instanceof tt||h=="unwind"||d(0,h)}}catch(h){h instanceof tt||h=="unwind"||d(0,h)}},Ca=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Cn(c){c>>>=0,Ca||(Atomics.waitAsync((k(),F),c>>>2,c).value.then(ii),c+=128,Atomics.store((k(),F),c>>>2,1))}var ii=()=>ni(()=>{var c=Ki();c&&(Cn(c),$c())});function Ea(c,h){(c>>>=0)==h>>>0?setTimeout(ii):i?postMessage({bd:c,Vc:"checkMailbox"}):(c=Ce[c])&&c.postMessage({Vc:"checkMailbox"})}var dn=[];function pl(c,h,_,w,I){for(h>>>=0,I>>>=0,dn.length=0,_=I>>>3,w=I+w>>>3;_<w;){var P;P=(k(),de)[_++>>>0]?(k(),de)[_++>>>0]:(k(),le)[_++>>>0],dn.push(P)}return(h?Ol[h]:jw[c])(...dn)}var fl=()=>{H=0};function hl(c){c>>>=0,i?postMessage({Vc:"cleanupThread",Qd:c}):be(Ce[c])}function ml(c){}var En=c=>{try{c()}catch(h){ve(h)}};function si(c){var h=(..._)=>{Wi.push(c);try{return c(..._)}finally{D||(Wi.pop(),vr&&Wr===1&&Wi.length===0&&(Wr=0,H+=1,En(pp),typeof Fibers<"u"&&Fibers.de()))}};return ys.set(c,h),h}var Wr=0,vr=null,Ia=0,Wi=[],ai=new Map,gs=new Map,ys=new Map,oi=0,Jt=null,gl=[],Aa=c=>function(h){if(!D){if(Wr===0){var _=!1,w=!1;h((I=0)=>{if(!D&&(Ia=I,_=!0,w)){Wr=2,En(()=>fp(vr)),typeof MainLoop<"u"&&MainLoop.xd&&MainLoop.resume(),I=!1;try{var P=function(){var ye=(k(),F)[vr+8>>>2>>>0];return ye=gs.get(ye),ye=ys.get(ye),--H,ye()}()}catch(ye){P=ye,I=!0}var W=!1;if(!vr){var ee=Jt;ee&&(Jt=null,(I?ee.reject:ee.resolve)(P),W=!0)}if(I&&!W)throw P}}),w=!0,_||(Wr=1,vr=function(){var I=ui(65548),P=I+12;if((k(),J)[I>>>2>>>0]=P,(k(),J)[I+4>>>2>>>0]=P+65536,P=Wi[0],!ai.has(P)){var W=oi++;ai.set(P,W),gs.set(W,P)}return P=ai.get(P),(k(),F)[I+8>>>2>>>0]=P,I}(),typeof MainLoop<"u"&&MainLoop.xd&&MainLoop.pause(),En(()=>cp(vr)))}else Wr===2?(Wr=0,En(hp),wr(vr),vr=null,gl.forEach(ni)):ve(`invalid state: ${Wr}`);return Ia}}(h=>{c().then(h)});function Oa(c){return c>>>=0,Aa(async()=>{var h=await zt(c);return sr(h)})}var qi=[],bs=c=>{var h=qi.length;return qi.push(c),h},vs=(c,h)=>{for(var _=Array(c),w=0;w<c;++w){var I=w,P=(k(),J)[h+4*w>>>2>>>0],W=Jn[P];if(W===void 0)throw c=`parameter ${w}`,P=Xa(P),h=dr(P),wr(P),new un(`${c} has unknown type ${h}`);_[I]=W}return _},In=(c,h,_)=>{var w=[];return c=c(w,_),w.length&&((k(),J)[h>>>2>>>0]=sr(w)),c},za={},An=c=>{var h=za[c];return h===void 0?dr(c):h};function yl(c,h,_){var[w,...I]=vs(c,h>>>0);h=w.Yc.bind(w);var P=I.map(ye=>ye.Xc.bind(ye));c--;var W={toValue:zt};switch(c=P.map((ye,Te)=>{var Ve=`argFromPtr${Te}`;return W[Ve]=ye,`${Ve}(args${Te?"+"+8*Te:""})`}),_){case 0:var ee="toValue(handle)";break;case 2:ee="new (toValue(handle))";break;case 3:ee="";break;case 1:W.getStringOrSymbol=An,ee="toValue(handle)[getStringOrSymbol(methodName)]"}return ee+=`(${c})`,w.Cd||(W.toReturnWire=h,W.emval_returnValue=In,ee=`return emval_returnValue(toReturnWire, destructorsRef, ${ee})`),ee=`return function (handle, methodName, destructorsRef, args) {
  ${ee}
  }`,_=new Function(Object.keys(W),ee)(...Object.values(W)),ee=`methodCaller<(${I.map(ye=>ye.name)}) => ${w.name}>`,bs(Object.defineProperty(_,"name",{value:ee}))}function bl(c,h){return h>>>=0,(c=zt(c>>>0))==zt(h)}function li(c){return(c>>>=0)?(c=An(c),sr(globalThis[c])):sr(globalThis)}function Ma(c){return c=An(c>>>0),sr(t[c])}function Ra(c,h){return h>>>=0,c=zt(c>>>0),h=zt(h),sr(c[h])}function vl(c){9<(c>>>=0)&&(Vr[c+1]+=1)}function Ba(c,h,_,w,I){return qi[c>>>0](h>>>0,_>>>0,w>>>0,I>>>0)}function Hi(c,h,_,w,I){return Ba(c>>>0,h>>>0,_>>>0,w>>>0,I>>>0)}function Pa(){return sr([])}function wl(c){c=zt(c>>>0);for(var h=Array(c.length),_=0;_<c.length;_++)h[_]=c[_];return sr(h)}function Da(c){return sr(An(c>>>0))}function _l(){return sr({})}function xl(c){for(var h=zt(c>>>=0);h.length;){var _=h.pop();h.pop()(_)}ti(c)}function ws(c,h,_){h>>>=0,_>>>=0,c=zt(c>>>0),h=zt(h),_=zt(_),c[h]=_}function Na(c,h){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),h>>>=0,c=new Date(1e3*c),(k(),F)[h>>>2>>>0]=c.getUTCSeconds(),(k(),F)[h+4>>>2>>>0]=c.getUTCMinutes(),(k(),F)[h+8>>>2>>>0]=c.getUTCHours(),(k(),F)[h+12>>>2>>>0]=c.getUTCDate(),(k(),F)[h+16>>>2>>>0]=c.getUTCMonth(),(k(),F)[h+20>>>2>>>0]=c.getUTCFullYear()-1900,(k(),F)[h+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(k(),F)[h+28>>>2>>>0]=c}var Ua=c=>c%4==0&&(c%100!=0||c%400==0),La=[0,31,60,91,121,152,182,213,244,274,305,335],Fa=[0,31,59,90,120,151,181,212,243,273,304,334];function $l(c,h){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),h>>>=0,c=new Date(1e3*c),(k(),F)[h>>>2>>>0]=c.getSeconds(),(k(),F)[h+4>>>2>>>0]=c.getMinutes(),(k(),F)[h+8>>>2>>>0]=c.getHours(),(k(),F)[h+12>>>2>>>0]=c.getDate(),(k(),F)[h+16>>>2>>>0]=c.getMonth(),(k(),F)[h+20>>>2>>>0]=c.getFullYear()-1900,(k(),F)[h+24>>>2>>>0]=c.getDay();var _=(Ua(c.getFullYear())?La:Fa)[c.getMonth()]+c.getDate()-1|0;(k(),F)[h+28>>>2>>>0]=_,(k(),F)[h+36>>>2>>>0]=-60*c.getTimezoneOffset(),_=new Date(c.getFullYear(),6,1).getTimezoneOffset();var w=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|(_!=w&&c.getTimezoneOffset()==Math.min(w,_)),(k(),F)[h+32>>>2>>>0]=c}function Va(c){c>>>=0;var h=new Date((k(),F)[c+20>>>2>>>0]+1900,(k(),F)[c+16>>>2>>>0],(k(),F)[c+12>>>2>>>0],(k(),F)[c+8>>>2>>>0],(k(),F)[c+4>>>2>>>0],(k(),F)[c>>>2>>>0],0),_=(k(),F)[c+32>>>2>>>0],w=h.getTimezoneOffset(),I=new Date(h.getFullYear(),6,1).getTimezoneOffset(),P=new Date(h.getFullYear(),0,1).getTimezoneOffset(),W=Math.min(P,I);return 0>_?(k(),F)[c+32>>>2>>>0]=+(I!=P&&W==w):0<_!=(W==w)&&(I=Math.max(P,I),h.setTime(h.getTime()+6e4*((0<_?W:I)-w))),(k(),F)[c+24>>>2>>>0]=h.getDay(),_=(Ua(h.getFullYear())?La:Fa)[h.getMonth()]+h.getDate()-1|0,(k(),F)[c+28>>>2>>>0]=_,(k(),F)[c>>>2>>>0]=h.getSeconds(),(k(),F)[c+4>>>2>>>0]=h.getMinutes(),(k(),F)[c+8>>>2>>>0]=h.getHours(),(k(),F)[c+12>>>2>>>0]=h.getDate(),(k(),F)[c+16>>>2>>>0]=h.getMonth(),(k(),F)[c+20>>>2>>>0]=h.getYear(),c=h.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function ja(c,h,_,w,I,P,W){return i?Y(16,1,c,h,_,w,I,P,W):-52}function Wa(c,h,_,w,I,P){if(i)return Y(17,1,c,h,_,w,I,P)}var cn={},Sl=()=>performance.timeOrigin+performance.now();function qa(c,h){if(i)return Y(18,1,c,h);if(cn[c]&&(clearTimeout(cn[c].id),delete cn[c]),!h)return 0;var _=setTimeout(()=>{delete cn[c],ni(()=>xc(c,performance.timeOrigin+performance.now()))},h);return cn[c]={id:_,ce:h},0}function Tl(c,h,_,w){c>>>=0,h>>>=0,_>>>=0,w>>>=0;var I=new Date().getFullYear(),P=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var W=Math.max(P,I);(k(),J)[c>>>2>>>0]=60*W,(k(),F)[h>>>2>>>0]=+(P!=I),c=(h=ee=>{var ye=Math.abs(ee);return`UTC${0<=ee?"-":"+"}${String(Math.floor(ye/60)).padStart(2,"0")}${String(ye%60).padStart(2,"0")}`})(P),h=h(I),I<P?(jr(c,_,17),jr(h,w,17)):(jr(c,w,17),jr(h,_,17))}var Gi=()=>Date.now();function kl(c,h,_){return _>>>=0,0<=c&&3>=c?(c===0?c=Date.now():c=performance.timeOrigin+performance.now(),c=Math.round(1e6*c),(k(),de)[_>>>3>>>0]=BigInt(c),0):28}var _s=[],Ha=(c,h)=>{_s.length=0;for(var _;_=(k(),ae)[c++>>>0];){var w=_!=105;h+=(w&=_!=112)&&h%8?4:0,_s.push(_==112?(k(),J)[h>>>2>>>0]:_==106?(k(),de)[h>>>3>>>0]:_==105?(k(),F)[h>>>2>>>0]:(k(),le)[h>>>3>>>0]),h+=w?8:4}return _s};function Ga(c,h,_){return c>>>=0,h=Ha(h>>>0,_>>>0),Ol[c](...h)}function Ka(c,h,_){return c>>>=0,h=Ha(h>>>0,_>>>0),Ol[c](...h)}var u=()=>{};function m(c,h){return O(Tt(c>>>0,h>>>0))}var b=()=>{throw H+=1,"unwind"};function T(){return 4294901760}var z=()=>navigator.hardwareConcurrency,B={},R=c=>{var h;return(h=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(c))?+h[1]:(h=/:(\d+):\d+(?:\)|$)/.exec(c))?2147483648|+h[1]:0},L=c=>{for(var h of c)(c=R(h))&&(B[c]=h)};function G(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),L(c),B.kd=R(c[3]),B.Md=c,B.kd}function ue(c){if(!(c=B[c>>>0]))return 0;var h;if(h=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(c))c=h[1];else if(h=/^\s+at (.*) \(.*\)$/.exec(c))c=h[1];else{if(!(h=/^(.+?)@/.exec(c)))return 0;c=h[1]}wr(ue.ld??0),h=ri(c)+1;var _=ui(h);return _&&jr(c,_,h),ue.ld=_,ue.ld}function we(c){c>>>=0;var h=(k(),ae).length;if(c<=h||4294901760<c)return!1;for(var _=1;4>=_;_*=2){var w=h*(1+.2/_);w=Math.min(w,c+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(c,w)/65536))-Fe.buffer.byteLength+65535)/65536|0;try{Fe.grow(w),$e();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function De(c,h,_){if(c>>>=0,h>>>=0,B.kd==c)var w=B.Md;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),L(w);for(var I=3;w[I]&&R(w[I])!=c;)++I;for(c=0;c<_&&w[c+I];++c)(k(),F)[h+4*c>>>2>>>0]=R(w[c+I]);return c}var Me,xe={},Pe=()=>{if(!Me){var c,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(c in xe)xe[c]===void 0?delete h[c]:h[c]=xe[c];var _=[];for(c in h)_.push(`${c}=${h[c]}`);Me=_}return Me};function qe(c,h){if(i)return Y(19,1,c,h);c>>>=0,h>>>=0;var _,w=0,I=0;for(_ of Pe()){var P=h+w;(k(),J)[c+I>>>2>>>0]=P,w+=jr(_,P,1/0)+1,I+=4}return 0}function yt(c,h){if(i)return Y(20,1,c,h);c>>>=0,h>>>=0;var _=Pe();for(var w of((k(),J)[c>>>2>>>0]=_.length,c=0,_))c+=ri(w)+1;return(k(),J)[h>>>2>>>0]=c,0}function ht(c){return i?Y(21,1,c):52}function Bt(c,h,_,w,I){return i?Y(22,1,c,h,_,w,I):52}function er(c,h,_,w){return i?Y(23,1,c,h,_,w):52}function qt(c,h,_,w){return i?Y(24,1,c,h,_,w):70}var st=[null,[],[]];function Pt(c,h,_,w){if(i)return Y(25,1,c,h,_,w);h>>>=0,_>>>=0,w>>>=0;for(var I=0,P=0;P<_;P++){var W=(k(),J)[h>>>2>>>0],ee=(k(),J)[h+4>>>2>>>0];h+=8;for(var ye=0;ye<ee;ye++){var Te=c,Ve=(k(),ae)[W+ye>>>0],rt=st[Te];Ve===0||Ve===10?((Te===1?C:O)(Kn(rt)),rt.length=0):rt.push(Ve)}I+=ee}return(k(),J)[w>>>2>>>0]=I,0}function qr(c){return c>>>0}i||function(){for(var c=t.numThreads-1;c--;)Le();We.push(async()=>{var h=async function(){if(!i)return Promise.all(fe.map(Ee))}();it++,await h,--it==0&&M&&(h=M,M=null,h())})}(),i||(Fe=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),$e()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>Ge(),t.stackRestore=c=>He(c),t.stackAlloc=c=>El(c),t.setValue=function(c,h,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":(k(),Z)[c>>>0]=h;break;case"i16":(k(),X)[c>>>1>>>0]=h;break;case"i32":(k(),F)[c>>>2>>>0]=h;break;case"i64":(k(),de)[c>>>3>>>0]=BigInt(h);break;case"float":(k(),pe)[c>>>2>>>0]=h;break;case"double":(k(),le)[c>>>3>>>0]=h;break;case"*":(k(),J)[c>>>2>>>0]=h;break;default:ve(`invalid type for setValue: ${_}`)}},t.getValue=function(c,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return(k(),Z)[c>>>0];case"i16":return(k(),X)[c>>>1>>>0];case"i32":return(k(),F)[c>>>2>>>0];case"i64":return(k(),de)[c>>>3>>>0];case"float":return(k(),pe)[c>>>2>>>0];case"double":return(k(),le)[c>>>3>>>0];case"*":return(k(),J)[c>>>2>>>0];default:ve(`invalid type for getValue: ${h}`)}},t.UTF8ToString=Tt,t.stringToUTF8=jr,t.lengthBytesUTF8=ri;var Xa,Ya,Ki,wr,ui,On,vc,wc,_c,Cl,xc,$c,Xe,xs,Sc,He,El,Ge,Tc,Il,kc,Cc,Ec,Al,Ic,Ac,Oc,zc,Mc,Rc,Bc,Pc,Dc,Nc,Uc,Lc,Fc,Vc,jc,Wc,qc,Hc,Gc,Kc,Xc,Yc,Zc,Qc,Jc,ep,tp,rp,np,ip,sp,ap,op,lp,up,dp,cp,pp,fp,hp,pn,jw=[ne,se,Di,ya,ln,ba,yr,Fr,ps,Et,ur,Ui,va,Xn,Li,Yn,ja,Wa,qa,qe,yt,ht,Bt,er,qt,Pt],Ol={1086876:(c,h,_,w,I)=>{if(t===void 0||!t.ad)return 1;if((c=Tt(Number(c>>>0))).startsWith("./")&&(c=c.substring(2)),!(c=t.ad.get(c)))return 2;if(h=Number(h>>>0),_=Number(_>>>0),w=Number(w>>>0),h+_>c.byteLength)return 3;try{let P=c.subarray(h,h+_);switch(I){case 0:(k(),ae).set(P,w>>>0);break;case 1:t.Td?t.Td(w,P):t.Ld(w,P);break;default:return 4}return 0}catch{return 4}},1087700:(c,h,_)=>{t.wd(c,(k(),ae).subarray(h>>>0,h+_>>>0))},1087764:()=>t.Vd(),1087806:c=>{t.vd(c)},1087843:()=>{t.Ed()},1087874:()=>{t.Fd()},1087903:()=>{t.Jd()},1087928:c=>t.Dd(c),1087961:c=>t.Hd(c),1087993:(c,h,_)=>{t.jd(Number(c),Number(h),Number(_),!0)},1088056:(c,h,_)=>{t.jd(Number(c),Number(h),Number(_))},1088113:()=>typeof wasmOffsetConverter<"u",1088170:c=>{t.bc("Abs",c,void 0)},1088221:c=>{t.bc("Neg",c,void 0)},1088272:c=>{t.bc("Floor",c,void 0)},1088325:c=>{t.bc("Ceil",c,void 0)},1088377:c=>{t.bc("Reciprocal",c,void 0)},1088435:c=>{t.bc("Sqrt",c,void 0)},1088487:c=>{t.bc("Exp",c,void 0)},1088538:c=>{t.bc("Erf",c,void 0)},1088589:c=>{t.bc("Sigmoid",c,void 0)},1088644:(c,h,_)=>{t.bc("HardSigmoid",c,{alpha:h,beta:_})},1088723:c=>{t.bc("HardSwish",c,void 0)},1088780:c=>{t.bc("Log",c,void 0)},1088831:c=>{t.bc("Sin",c,void 0)},1088882:c=>{t.bc("Cos",c,void 0)},1088933:c=>{t.bc("Tan",c,void 0)},1088984:c=>{t.bc("Asin",c,void 0)},1089036:c=>{t.bc("Acos",c,void 0)},1089088:c=>{t.bc("Atan",c,void 0)},1089140:c=>{t.bc("Sinh",c,void 0)},1089192:c=>{t.bc("Cosh",c,void 0)},1089244:c=>{t.bc("Asinh",c,void 0)},1089297:c=>{t.bc("Acosh",c,void 0)},1089350:c=>{t.bc("Atanh",c,void 0)},1089403:c=>{t.bc("Tanh",c,void 0)},1089455:c=>{t.bc("Not",c,void 0)},1089506:(c,h,_)=>{t.bc("Clip",c,{min:h,max:_})},1089575:c=>{t.bc("Clip",c,void 0)},1089627:(c,h)=>{t.bc("Elu",c,{alpha:h})},1089685:c=>{t.bc("Gelu",c,void 0)},1089737:c=>{t.bc("Relu",c,void 0)},1089789:(c,h)=>{t.bc("LeakyRelu",c,{alpha:h})},1089853:(c,h)=>{t.bc("ThresholdedRelu",c,{alpha:h})},1089923:(c,h)=>{t.bc("Cast",c,{to:h})},1089981:c=>{t.bc("Add",c,void 0)},1090032:c=>{t.bc("Sub",c,void 0)},1090083:c=>{t.bc("Mul",c,void 0)},1090134:c=>{t.bc("Div",c,void 0)},1090185:c=>{t.bc("Pow",c,void 0)},1090236:c=>{t.bc("Equal",c,void 0)},1090289:c=>{t.bc("Greater",c,void 0)},1090344:c=>{t.bc("GreaterOrEqual",c,void 0)},1090406:c=>{t.bc("Less",c,void 0)},1090458:c=>{t.bc("LessOrEqual",c,void 0)},1090517:(c,h,_,w,I)=>{t.bc("ReduceMean",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),F).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1090692:(c,h,_,w,I)=>{t.bc("ReduceMax",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),F).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1090866:(c,h,_,w,I)=>{t.bc("ReduceMin",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),F).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091040:(c,h,_,w,I)=>{t.bc("ReduceProd",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),F).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091215:(c,h,_,w,I)=>{t.bc("ReduceSum",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),F).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091389:(c,h,_,w,I)=>{t.bc("ReduceL1",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),F).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091562:(c,h,_,w,I)=>{t.bc("ReduceL2",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),F).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091735:(c,h,_,w,I)=>{t.bc("ReduceLogSum",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),F).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1091912:(c,h,_,w,I)=>{t.bc("ReduceSumSquare",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),F).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1092092:(c,h,_,w,I)=>{t.bc("ReduceLogSumExp",c,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((k(),F).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1092272:c=>{t.bc("Where",c,void 0)},1092325:(c,h,_)=>{t.bc("Transpose",c,{perm:h?Array.from((k(),F).subarray(Number(h)>>>0,Number(_)>>>0)):[]})},1092449:(c,h,_,w)=>{t.bc("DepthToSpace",c,{blocksize:h,mode:Tt(_),format:w?"NHWC":"NCHW"})},1092582:(c,h,_,w)=>{t.bc("DepthToSpace",c,{blocksize:h,mode:Tt(_),format:w?"NHWC":"NCHW"})},1092715:(c,h,_,w)=>{t.bc("DFT",c,{axis:h,inverse:_,onesided:w})},1092807:(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt,mt,$t,zn)=>{t.bc("ConvTranspose",c,{format:ye?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[I],pads:[P,W],strides:[ee],wIsConst:()=>!!(k(),Z)[Te>>>0],outputPadding:Ve?Array.from((k(),F).subarray(Number(Ve)>>>0,Number(rt)>>>0)):[],outputShape:mt?Array.from((k(),F).subarray(Number(mt)>>>0,Number($t)>>>0)):[],activation:Tt(zn)})},1093240:(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt,mt,$t)=>{t.bc("ConvTranspose",c,{format:ee?"NHWC":"NCHW",autoPad:h,dilations:Array.from((k(),F).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((k(),F).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((k(),F).subarray(Number(P)>>>0,(Number(P)>>>0)+4>>>0)),strides:Array.from((k(),F).subarray(Number(W)>>>0,(Number(W)>>>0)+2>>>0)),wIsConst:()=>!!(k(),Z)[ye>>>0],outputPadding:Te?Array.from((k(),F).subarray(Number(Te)>>>0,Number(Ve)>>>0)):[],outputShape:rt?Array.from((k(),F).subarray(Number(rt)>>>0,Number(mt)>>>0)):[],activation:Tt($t)})},1093901:(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt,mt,$t,zn)=>{t.bc("ConvTranspose",c,{format:ye?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[I],pads:[P,W],strides:[ee],wIsConst:()=>!!(k(),Z)[Te>>>0],outputPadding:Ve?Array.from((k(),F).subarray(Number(Ve)>>>0,Number(rt)>>>0)):[],outputShape:mt?Array.from((k(),F).subarray(Number(mt)>>>0,Number($t)>>>0)):[],activation:Tt(zn)})},1094334:(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt,mt,$t)=>{t.bc("ConvTranspose",c,{format:ee?"NHWC":"NCHW",autoPad:h,dilations:Array.from((k(),F).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((k(),F).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((k(),F).subarray(Number(P)>>>0,(Number(P)>>>0)+4>>>0)),strides:Array.from((k(),F).subarray(Number(W)>>>0,(Number(W)>>>0)+2>>>0)),wIsConst:()=>!!(k(),Z)[ye>>>0],outputPadding:Te?Array.from((k(),F).subarray(Number(Te)>>>0,Number(Ve)>>>0)):[],outputShape:rt?Array.from((k(),F).subarray(Number(rt)>>>0,Number(mt)>>>0)):[],activation:Tt($t)})},1094995:(c,h)=>{t.bc("GlobalAveragePool",c,{format:h?"NHWC":"NCHW"})},1095086:(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt,mt,$t)=>{t.bc("AveragePool",c,{format:$t?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:P?Array.from((k(),F).subarray(Number(P)>>>0,Number(W)>>>0)):[],kernel_shape:ee?Array.from((k(),F).subarray(Number(ee)>>>0,Number(ye)>>>0)):[],pads:Te?Array.from((k(),F).subarray(Number(Te)>>>0,Number(Ve)>>>0)):[],strides:rt?Array.from((k(),F).subarray(Number(rt)>>>0,Number(mt)>>>0)):[]})},1095565:(c,h)=>{t.bc("GlobalAveragePool",c,{format:h?"NHWC":"NCHW"})},1095656:(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt,mt,$t)=>{t.bc("AveragePool",c,{format:$t?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:P?Array.from((k(),F).subarray(Number(P)>>>0,Number(W)>>>0)):[],kernel_shape:ee?Array.from((k(),F).subarray(Number(ee)>>>0,Number(ye)>>>0)):[],pads:Te?Array.from((k(),F).subarray(Number(Te)>>>0,Number(Ve)>>>0)):[],strides:rt?Array.from((k(),F).subarray(Number(rt)>>>0,Number(mt)>>>0)):[]})},1096135:(c,h)=>{t.bc("GlobalMaxPool",c,{format:h?"NHWC":"NCHW"})},1096222:(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt,mt,$t)=>{t.bc("MaxPool",c,{format:$t?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:P?Array.from((k(),F).subarray(Number(P)>>>0,Number(W)>>>0)):[],kernel_shape:ee?Array.from((k(),F).subarray(Number(ee)>>>0,Number(ye)>>>0)):[],pads:Te?Array.from((k(),F).subarray(Number(Te)>>>0,Number(Ve)>>>0)):[],strides:rt?Array.from((k(),F).subarray(Number(rt)>>>0,Number(mt)>>>0)):[]})},1096697:(c,h)=>{t.bc("GlobalMaxPool",c,{format:h?"NHWC":"NCHW"})},1096784:(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt,mt,$t)=>{t.bc("MaxPool",c,{format:$t?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:P?Array.from((k(),F).subarray(Number(P)>>>0,Number(W)>>>0)):[],kernel_shape:ee?Array.from((k(),F).subarray(Number(ee)>>>0,Number(ye)>>>0)):[],pads:Te?Array.from((k(),F).subarray(Number(Te)>>>0,Number(Ve)>>>0)):[],strides:rt?Array.from((k(),F).subarray(Number(rt)>>>0,Number(mt)>>>0)):[]})},1097259:(c,h,_,w,I)=>{t.bc("Gemm",c,{alpha:h,beta:_,transA:w,transB:I})},1097363:c=>{t.bc("MatMul",c,void 0)},1097417:(c,h,_,w)=>{t.bc("ArgMax",c,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1097525:(c,h,_,w)=>{t.bc("ArgMin",c,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1097633:(c,h)=>{t.bc("Softmax",c,{axis:h})},1097696:(c,h)=>{t.bc("Concat",c,{axis:h})},1097756:(c,h,_,w,I)=>{t.bc("Split",c,{axis:h,numOutputs:_,splitSizes:w?Array.from((k(),F).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1097912:c=>{t.bc("Expand",c,void 0)},1097966:(c,h)=>{t.bc("Gather",c,{axis:Number(h)})},1098037:(c,h)=>{t.bc("GatherElements",c,{axis:Number(h)})},1098116:(c,h)=>{t.bc("GatherND",c,{batch_dims:Number(h)})},1098195:(c,h,_,w,I,P,W,ee,ye,Te,Ve)=>{t.bc("Resize",c,{antialias:h,axes:_?Array.from((k(),F).subarray(Number(_)>>>0,Number(w)>>>0)):[],coordinateTransformMode:Tt(I),cubicCoeffA:P,excludeOutside:W,extrapolationValue:ee,keepAspectRatioPolicy:Tt(ye),mode:Tt(Te),nearestMode:Tt(Ve)})},1098557:(c,h,_,w,I,P,W)=>{t.bc("Slice",c,{starts:h?Array.from((k(),F).subarray(Number(h)>>>0,Number(_)>>>0)):[],ends:w?Array.from((k(),F).subarray(Number(w)>>>0,Number(I)>>>0)):[],axes:P?Array.from((k(),F).subarray(Number(P)>>>0,Number(W)>>>0)):[]})},1098821:c=>{t.bc("Tile",c,void 0)},1098873:(c,h,_)=>{t.bc("InstanceNormalization",c,{epsilon:h,format:_?"NHWC":"NCHW"})},1098987:(c,h,_)=>{t.bc("InstanceNormalization",c,{epsilon:h,format:_?"NHWC":"NCHW"})},1099101:c=>{t.bc("Range",c,void 0)},1099154:(c,h)=>{t.bc("Einsum",c,{equation:Tt(h)})},1099235:(c,h,_,w,I)=>{t.bc("Pad",c,{mode:h,value:_,pads:w?Array.from((k(),F).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1099378:(c,h,_,w,I,P)=>{t.bc("BatchNormalization",c,{epsilon:h,momentum:_,spatial:!!I,trainingMode:!!w,format:P?"NHWC":"NCHW"})},1099547:(c,h,_,w,I,P)=>{t.bc("BatchNormalization",c,{epsilon:h,momentum:_,spatial:!!I,trainingMode:!!w,format:P?"NHWC":"NCHW"})},1099716:(c,h,_)=>{t.bc("CumSum",c,{exclusive:Number(h),reverse:Number(_)})},1099813:(c,h,_)=>{t.bc("DequantizeLinear",c,{axis:h,blockSize:_})},1099903:(c,h,_,w,I)=>{t.bc("GridSample",c,{align_corners:h,mode:Tt(_),padding_mode:Tt(w),format:I?"NHWC":"NCHW"})},1100073:(c,h,_,w,I)=>{t.bc("GridSample",c,{align_corners:h,mode:Tt(_),padding_mode:Tt(w),format:I?"NHWC":"NCHW"})},1100243:(c,h)=>{t.bc("ScatterND",c,{reduction:Tt(h)})},1100328:(c,h,_,w,I,P,W,ee,ye)=>{t.bc("Attention",c,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:I,doRotary:P,qkvHiddenSizes:W?Array.from((k(),F).subarray(Number(ee)>>>0,Number(ee)+W>>>0)):[],pastPresentShareBuffer:!!ye})},1100600:c=>{t.bc("BiasAdd",c,void 0)},1100655:c=>{t.bc("BiasSplitGelu",c,void 0)},1100716:c=>{t.bc("FastGelu",c,void 0)},1100772:(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt,mt,$t,zn,zl)=>{t.bc("Conv",c,{format:rt?"NHWC":"NCHW",auto_pad:h,dilations:_?Array.from((k(),F).subarray(Number(_)>>>0,Number(w)>>>0)):[],group:I,kernel_shape:P?Array.from((k(),F).subarray(Number(P)>>>0,Number(W)>>>0)):[],pads:ee?Array.from((k(),F).subarray(Number(ee)>>>0,Number(ye)>>>0)):[],strides:Te?Array.from((k(),F).subarray(Number(Te)>>>0,Number(Ve)>>>0)):[],w_is_const:()=>!!(k(),Z)[Number(mt)>>>0],activation:Tt($t),activation_params:zn?Array.from((k(),pe).subarray(Number(zn)>>>0,Number(zl)>>>0)):[]})},1101356:c=>{t.bc("Gelu",c,void 0)},1101408:(c,h,_,w,I,P,W,ee,ye)=>{t.bc("GroupQueryAttention",c,{numHeads:h,kvNumHeads:_,scale:w,softcap:I,doRotary:P,rotaryInterleaved:W,smoothSoftmax:ee,localWindowSize:ye})},1101625:(c,h,_,w)=>{t.bc("LayerNormalization",c,{axis:h,epsilon:_,simplified:!!w})},1101736:(c,h,_,w)=>{t.bc("LayerNormalization",c,{axis:h,epsilon:_,simplified:!!w})},1101847:(c,h,_,w,I,P)=>{t.bc("MatMulNBits",c,{k:h,n:_,accuracyLevel:w,bits:I,blockSize:P})},1101974:(c,h,_,w,I,P)=>{t.bc("MultiHeadAttention",c,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:I,doRotary:P})},1102133:(c,h)=>{t.bc("QuickGelu",c,{alpha:h})},1102197:(c,h,_,w,I)=>{t.bc("RotaryEmbedding",c,{interleaved:!!h,numHeads:_,rotaryEmbeddingDim:w,scale:I})},1102336:(c,h,_)=>{t.bc("SkipLayerNormalization",c,{epsilon:h,simplified:!!_})},1102438:(c,h,_)=>{t.bc("SkipLayerNormalization",c,{epsilon:h,simplified:!!_})},1102540:(c,h,_,w)=>{t.bc("GatherBlockQuantized",c,{gatherAxis:h,quantizeAxis:_,blockSize:w})},1102661:c=>{t.Id(c)},1102695:(c,h)=>t.Kd(Number(c),Number(h),t.$c.Nd,t.$c.errors)};function Ww(c,h,_){return Aa(async()=>{await t.Gd(Number(c),Number(h),Number(_))})}function qw(){return typeof wasmOffsetConverter<"u"}function Hw(c,h,_,w){var I=Ge();try{return Pc(c,h,_,w)}catch(P){if(He(I),P!==P+0)throw P;Xe(1,0)}}function Gw(c,h,_){var w=Ge();try{return zc(c,h,_)}catch(I){if(He(w),I!==I+0)throw I;Xe(1,0)}}function Kw(c){var h=Ge();try{Ic(c)}catch(_){if(He(h),_!==_+0)throw _;Xe(1,0)}}function Xw(c,h){var _=Ge();try{return Al(c,h)}catch(w){if(He(_),w!==w+0)throw w;Xe(1,0)}}function Yw(c,h,_){var w=Ge();try{Ec(c,h,_)}catch(I){if(He(w),I!==I+0)throw I;Xe(1,0)}}function Zw(c,h){var _=Ge();try{Dc(c,h)}catch(w){if(He(_),w!==w+0)throw w;Xe(1,0)}}function Qw(c,h,_,w,I,P,W){var ee=Ge();try{return Rc(c,h,_,w,I,P,W)}catch(ye){if(He(ee),ye!==ye+0)throw ye;Xe(1,0)}}function Jw(c,h,_,w,I,P){var W=Ge();try{Ac(c,h,_,w,I,P)}catch(ee){if(He(W),ee!==ee+0)throw ee;Xe(1,0)}}function e_(c,h,_,w){var I=Ge();try{Bc(c,h,_,w)}catch(P){if(He(I),P!==P+0)throw P;Xe(1,0)}}function t_(c,h,_,w,I){var P=Ge();try{Oc(c,h,_,w,I)}catch(W){if(He(P),W!==W+0)throw W;Xe(1,0)}}function r_(c,h,_,w,I,P,W){var ee=Ge();try{Uc(c,h,_,w,I,P,W)}catch(ye){if(He(ee),ye!==ye+0)throw ye;Xe(1,0)}}function n_(c,h,_,w,I,P,W){var ee=Ge();try{Lc(c,h,_,w,I,P,W)}catch(ye){if(He(ee),ye!==ye+0)throw ye;Xe(1,0)}}function i_(c,h,_,w,I,P,W,ee){var ye=Ge();try{Wc(c,h,_,w,I,P,W,ee)}catch(Te){if(He(ye),Te!==Te+0)throw Te;Xe(1,0)}}function s_(c,h,_,w,I){var P=Ge();try{return Nc(c,h,_,w,I)}catch(W){if(He(P),W!==W+0)throw W;Xe(1,0)}}function a_(c,h,_){var w=Ge();try{return qc(c,h,_)}catch(I){if(He(w),I!==I+0)throw I;Xe(1,0)}}function o_(c,h,_,w,I,P,W,ee){var ye=Ge();try{Hc(c,h,_,w,I,P,W,ee)}catch(Te){if(He(ye),Te!==Te+0)throw Te;Xe(1,0)}}function l_(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt){var mt=Ge();try{Fc(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt)}catch($t){if(He(mt),$t!==$t+0)throw $t;Xe(1,0)}}function u_(c,h,_){var w=Ge();try{return Gc(c,h,_)}catch(I){if(He(w),I!==I+0)throw I;return Xe(1,0),0n}}function d_(c,h,_,w,I,P,W,ee,ye){var Te=Ge();try{Mc(c,h,_,w,I,P,W,ee,ye)}catch(Ve){if(He(Te),Ve!==Ve+0)throw Ve;Xe(1,0)}}function c_(c){var h=Ge();try{return Kc(c)}catch(_){if(He(h),_!==_+0)throw _;Xe(1,0)}}function p_(c,h){var _=Ge();try{return dp(c,h)}catch(w){if(He(_),w!==w+0)throw w;return Xe(1,0),0n}}function f_(c,h,_,w){var I=Ge();try{return Xc(c,h,_,w)}catch(P){if(He(I),P!==P+0)throw P;Xe(1,0)}}function h_(c){var h=Ge();try{return Yc(c)}catch(_){if(He(h),_!==_+0)throw _;return Xe(1,0),0n}}function m_(c,h,_,w){var I=Ge();try{return rp(c,h,_,w)}catch(P){if(He(I),P!==P+0)throw P;Xe(1,0)}}function g_(c,h,_,w,I){var P=Ge();try{return np(c,h,_,w,I)}catch(W){if(He(P),W!==W+0)throw W;Xe(1,0)}}function y_(c,h,_,w,I,P){var W=Ge();try{return ip(c,h,_,w,I,P)}catch(ee){if(He(W),ee!==ee+0)throw ee;Xe(1,0)}}function b_(c,h,_,w,I,P){var W=Ge();try{return Vc(c,h,_,w,I,P)}catch(ee){if(He(W),ee!==ee+0)throw ee;Xe(1,0)}}function v_(c,h,_,w,I,P){var W=Ge();try{return sp(c,h,_,w,I,P)}catch(ee){if(He(W),ee!==ee+0)throw ee;Xe(1,0)}}function w_(c,h,_,w,I,P,W,ee){var ye=Ge();try{return jc(c,h,_,w,I,P,W,ee)}catch(Te){if(He(ye),Te!==Te+0)throw Te;Xe(1,0)}}function __(c,h,_,w,I){var P=Ge();try{return ap(c,h,_,w,I)}catch(W){if(He(P),W!==W+0)throw W;return Xe(1,0),0n}}function x_(c,h,_,w){var I=Ge();try{return op(c,h,_,w)}catch(P){if(He(I),P!==P+0)throw P;Xe(1,0)}}function $_(c,h,_,w){var I=Ge();try{return lp(c,h,_,w)}catch(P){if(He(I),P!==P+0)throw P;Xe(1,0)}}function S_(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt){var mt=Ge();try{return up(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt)}catch($t){if(He(mt),$t!==$t+0)throw $t;Xe(1,0)}}function T_(c,h,_,w,I,P,W,ee,ye,Te,Ve){var rt=Ge();try{ep(c,h,_,w,I,P,W,ee,ye,Te,Ve)}catch(mt){if(He(rt),mt!==mt+0)throw mt;Xe(1,0)}}function k_(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt,mt,$t,zn,zl){var A_=Ge();try{tp(c,h,_,w,I,P,W,ee,ye,Te,Ve,rt,mt,$t,zn,zl)}catch(Ml){if(He(A_),Ml!==Ml+0)throw Ml;Xe(1,0)}}function C_(c,h,_){var w=Ge();try{return Zc(c,h,_)}catch(I){if(He(w),I!==I+0)throw I;Xe(1,0)}}function E_(c,h,_){var w=Ge();try{return Qc(c,h,_)}catch(I){if(He(w),I!==I+0)throw I;Xe(1,0)}}function I_(c,h,_,w){var I=Ge();try{Jc(c,h,_,w)}catch(P){if(He(I),P!==P+0)throw P;Xe(1,0)}}function Za(){if(0<it)M=Za;else if(i)$?.(t),Se();else{for(var c=We;0<c.length;)c.shift()(t);0<it?M=Za:(t.calledRun=!0,D||(Se(),$?.(t)))}}return i||(pn=await gt(),Za()),t.PTR_SIZE=4,te?t:new Promise((c,h)=>{$=c,E=h})}var Ty,tf,qx=ce(()=>{"use strict";Ty=ef,tf=globalThis.self?.name?.startsWith("em-pthread"),tf&&ef()}),ru,fd,rf,pr,ky,oo,nf,sf,nu,af,iu,Cy,su,Ey,Kd=ce(()=>{"use strict";Gd(),ru=typeof location>"u"?void 0:location.origin,fd=import.meta.url>"file:"&&import.meta.url<"file;",rf=()=>{if(fd){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,ru).href}return import.meta.url},pr=rf(),ky=()=>{if(pr&&!pr.startsWith("blob:"))return pr.substring(0,pr.lastIndexOf("/")+1)},oo=(e,t)=>{try{let r=t??pr;return(r?new URL(e,r):new URL(e)).origin===ru}catch{return!1}},nf=(e,t)=>{let r=t??pr;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},sf=(e,t)=>`${t??"./"}${e}`,nu=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},af=async e=>(await import(e)).default,iu=(Wx(),la(xy)).default,Cy=async()=>{if(!pr)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(oo(pr))return[void 0,iu()];let e=await nu(pr);return[e,iu(e)]},su=(qx(),la(Sy)).default,Ey=async(e,t,r,n)=>{let i=su&&!(e||t);if(i)if(pr)i=oo(pr)||n&&!r;else if(n&&!r)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,su];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??nf(s,t),o=r&&a&&!oo(a,t),l=o?await nu(a):a??sf(s,t);return[o?l:void 0,await af(l)]}}}),au,lo,Cs,ou,of,lf,uf,Xd,wt,Bi=ce(()=>{"use strict";Kd(),lo=!1,Cs=!1,ou=!1,of=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},lf=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},uf=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Xd=async e=>{if(lo)return Promise.resolve();if(Cs)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ou)throw new Error("previous call to 'initializeWebAssembly()' failed.");Cs=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!uf())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!lf())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=of();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,a=i?.mjs,o=a?.href??a,l=i?.wasm,d=l?.href??l,p=e.wasmBinary,[f,g]=await Ey(o,s,r>1,!!p||!!d),v=!1,y=[];if(t>0&&y.push(new Promise($=>{setTimeout(()=>{v=!0,$()},t)})),y.push(new Promise(($,E)=>{let S={numThreads:r};if(p)S.wasmBinary=p,S.locateFile=x=>x;else if(d||s)S.locateFile=x=>d??s+x;else if(o&&o.indexOf("blob:")!==0)S.locateFile=x=>new URL(x,o).href;else if(f){let x=ky();x&&(S.locateFile=A=>x+A)}g(S).then(x=>{Cs=!1,lo=!0,au=x,$(),f&&URL.revokeObjectURL(f)},x=>{Cs=!1,ou=!0,E(x)})})),await Promise.race(y),v)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},wt=()=>{if(lo&&au)return au;throw new Error("WebAssembly is not initialized yet.")}}),Pr,Lo,lt,Yd=ce(()=>{"use strict";Bi(),Pr=(e,t)=>{let r=wt(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},Lo=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,s])=>{let a=t?t+i:i;if(typeof s=="object")Lo(s,a+".",r,n);else if(typeof s=="string"||typeof s=="number")n(a,s.toString());else if(typeof s=="boolean")n(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},lt=e=>{let t=wt(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);let s=Number(t.getValue(i,n===4?"i32":"i64")),a=t.getValue(i+n,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Iy,Hx=ce(()=>{"use strict";Bi(),Yd(),Iy=e=>{let t=wt(),r=0,n=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let s=0;return e?.tag!==void 0&&(s=Pr(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),r===0&&lt("Can't create run options."),e?.extra!==void 0&&Lo(e.extra,"",new WeakSet,(a,o)=>{let l=Pr(a,n),d=Pr(o,n);t._OrtAddRunConfigEntry(r,l,d)!==0&&lt(`Can't set a run config entry: ${a} - ${o}.`)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(a=>t._free(a)),s}}}),df,cf,pf,hi,ff,Ay,Gx=ce(()=>{"use strict";Bi(),Yd(),df=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},cf=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},pf=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},hi=(e,t,r,n)=>{let i=Pr(t,n),s=Pr(r,n);wt()._OrtAddSessionConfigEntry(e,i,s)!==0&&lt(`Can't set a session config entry: ${t} - ${r}.`)},ff=async(e,t,r)=>{let n=t.executionProviders;for(let i of n){let s=typeof i=="string"?i:i.name,a=[];switch(s){case"webnn":if(s="WEBNN",hi(e,"session.disable_quant_qdq","1",r),hi(e,"session.disable_qdq_constant_folding","1",r),typeof i!="string"){let f=i?.deviceType;f&&hi(e,"deviceType",f,r)}break;case"webgpu":if(s="JS",typeof i!="string"){let f=i;if(f?.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);hi(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=Pr(s,r),l=a.length,d=0,p=0;if(l>0){d=wt()._malloc(l*wt().PTR_SIZE),r.push(d),p=wt()._malloc(l*wt().PTR_SIZE),r.push(p);for(let f=0;f<l;f++)wt().setValue(d+f*wt().PTR_SIZE,a[f][0],"*"),wt().setValue(p+f*wt().PTR_SIZE,a[f][1],"*")}await wt()._OrtAppendExecutionProvider(e,o,d,p,l)!==0&&lt(`Can't append execution provider: ${s}.`)}},Ay=async e=>{let t=wt(),r=0,n=[],i=e||{};pf(i);try{let s=df(i.graphOptimizationLevel??"all"),a=cf(i.executionMode??"sequential"),o=typeof i.logId=="string"?Pr(i.logId,n):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let p=typeof i.optimizedModelFilePath=="string"?Pr(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,l,d,p),r===0&&lt("Can't create session options."),i.executionProviders&&await ff(r,i,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);hi(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[f,g]of Object.entries(i.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let v=Pr(f,n);t._OrtAddFreeDimensionOverride(r,v,g)!==0&&lt(`Can't set a free dimension override: ${f} - ${g}.`)}return i.extra!==void 0&&Lo(i.extra,"",new WeakSet,(f,g)=>{hi(r,f,g,n)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&lt("Can't release session options."),n.forEach(a=>t._free(a)),s}}}),xi,_n,$i,ol,Fo,Zd,Qd,hd,Be=ce(()=>{"use strict";xi=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},_n=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},$i=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return r>0?Math.ceil(n*r):void 0},ol=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Fo=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Zd=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Qd=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",hd=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Jd,Oy=ce(()=>{"use strict";Gd(),Jd=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let l=Math.ceil(n/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await i.read();if(o)break;let d=l.byteLength;new Uint8Array(s,a,d).set(l),a+=d}return new Uint8Array(s,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),hf,mf,gf,yf,ec,bf,et,Tn=ce(()=>{"use strict";Be(),hf=["V","I","W","E","F"],mf=(e,t)=>{console.log(`[${hf[e]},${new Date().toISOString()}]${t}`)},ec=(e,t)=>{gf=e,yf=t},bf=(e,t)=>{let r=Fo(e),n=Fo(gf);r>=n&&mf(r,typeof t=="function"?t():t)},et=(...e)=>{yf&&bf(...e)}}),vf,os,K,Vo,zy,My,Ry,Ne=ce(()=>{"use strict";vf=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},os=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(n<2||i<2)return;let o=vf.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=r?3:1;o<=s;o++){let l=n-o<0?1:e[n-o],d=i-o<0?1:t[i-o];if(l!==d&&l>1&&d>1)return;let p=Math.max(l,d);if(l&&d)a[s-o]=Math.max(l,d);else{if(p>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},K=class ko{static size(t){return ko.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),s=n-1;for(;s>=0;){if(t[s]%r===0){i[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,r/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ko.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ko.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let s=r;s<n;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,s)=>i+r[s]+r[s+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},Vo=class Nn{static adjustPoolAttributes(t,r,n,i,s,a){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<n.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=n[o]||a[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)Nn.adjustPadAndReturnShape(t[l+(a?1:2)],r[l],n[l],i[l],s,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,n,i,s,a,o,l=0){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return Nn.computeShapeHelper(t,r,d,n,i,s,a,o,l),d}static computeConvOutputShape(t,r,n,i,s,a,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return Nn.computeShapeHelper(!1,t,l,n,i,s,a,o),l}static computeShapeHelper(t,r,n,i,s,a,o,l,d=0){if(t)for(let p=0;p<r.length-2;p++)n.push(1);else for(let p=0;p<r.length-2;p++)n.push(Nn.adjustPadAndReturnShape(r[p+2],i[p],s[p],a[p],o,p,p+r.length-2,l,d))}static computeOutputSize(t,r,n,i,s){let a=Math.floor(t/r)+1;return s===1&&(a=Math.ceil(t/r)+1,(a-1)*r>=n+i&&(a-=1)),a}static adjustPadAndReturnShape(t,r,n,i,s,a,o,l,d=0){let p=n*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[o]=0,Nn.computeOutputSize(t-p,r,t,0,d);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=(Math.floor((t+r-1)/r)-1)*r+i-t;return s[a]=Math.floor(l==="SAME_LOWER"?(f+1)/2:f/2),s[o]=f-s[a],Nn.computeOutputSize(t+s[a]+s[o]-p,r,t,s[a],d)}default:throw new Error("Unsupported AutoPad type")}else return Nn.computeOutputSize(t+s[a]+s[o]-p,r,t,s[a],d)}},zy=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let l=-1;if(n?(o=r[0],l=1):(o=r[1],l=0),r[l]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(i&&!os.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},My=-34028234663852886e22,Ry=34028234663852886e22}),tc,By=ce(()=>{"use strict";Be(),tc=(e,t)=>new(ol(t))(e)}),lu,wf,uu,_f,du,xf,cu,pu,fu,$f,Py,Kx=ce(()=>{"use strict";Be(),Tn(),lu=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),wf=(e,t)=>{if(t==="int32")return e;let r=lu.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=e.byteLength/n,s=new(ol(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let o=0;o<i;o++){let l=s[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},uu=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},_f=1,du=()=>_f++,xf=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),cu=(e,t)=>{let r=lu.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},pu=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:i,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return cu(this.dataType,this.tensorShape)}destroy(){et("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=uu(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},fu=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let i=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!s?.input.dataTypes.includes(t)){if(a=xf.get(t),!a||!s?.input.dataTypes.includes(a))throw new Error(`WebNN backend does not support data type: ${t}`);et("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==cu(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,a),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=wf(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else et("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?uu(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},$f=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=du();return this.tensorTrackersById.set(e,new fu(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){et("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,n,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){et("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let i=this.getMLContext(e),s=du(),a=new pu({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(s,new fu(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,r,n,i,s,a){let o=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,r)){et("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}et("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:a??t,shape:r,dimensions:r,usage:n,writable:i,readable:s});return new pu({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Py=(...e)=>new $f(...e)}),Es,Sf,Dy,Xx=ce(()=>{"use strict";Be(),Bi(),By(),Kx(),Tn(),Es=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Sf=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,s)=>i===n[s]&&e[i]===t[i])},Dy=class{constructor(e){this.tensorManager=Py(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,ec(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){et("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){et("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)et("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>Sf(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){et("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){let s=Es.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,n,i)}async createTemporaryTensor(e,t,r){et("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=Es.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!wt().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");et("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return tc(r,t)}}registerMLTensor(e,t,r,n){let i=Es.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,i,n);return et("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${s}}`),s}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=Es.get(xi(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof n>"u"?!1:r?!!i?.input.dataTypes.includes(n):!!i?.output.dataTypes.includes(n)}flush(){}}}),rc=ce(()=>{"use strict"}),hu,uo,co,Tf,kf,mu,md,Cf,Ny,Yx=ce(()=>{"use strict";Tn(),rc(),hu=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),uo=[],co=e=>Math.ceil(Number(e)/16)*16,Tf=e=>{for(let t=0;t<uo.length;t++){let r=uo[t];if(e<=r)return r}return Math.ceil(e/16)*16},kf=1,mu=()=>kf++,md=async(e,t,r,n)=>{let i=co(r),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(n){let l=n();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},Cf=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of hu)uo.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,s=co(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);if(s===i&&n%4===0)this.backend.device.queue.writeBuffer(a.gpuData.buffer,0,r,n,i);else{let o=new Uint8Array(s);o.set(t),this.backend.device.queue.writeBuffer(a.gpuData.buffer,0,o,0,s)}et("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=co(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return et("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=mu();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),et("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),et("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Tf(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let a={id:mu(),type:0,buffer:n};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),et("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return et("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await md(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=hu.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(et("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Ny=(...e)=>new Cf(...e)}),Ef,ot,At=ce(()=>{"use strict";Ef=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ot=e=>new Ef(e)}),ls,po,Ut,Dt,ze,It,gd,Ji,qn,Oe,Is,Q,Ie,Uy,nc,If,Ly,Ue=ce(()=>{"use strict";Be(),Ne(),ls=64,po=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ut=(e,t=1)=>{let r=po(e,t);return typeof r=="string"?r:r[0]},Dt=(e,t=1)=>{let r=po(e,t);return typeof r=="string"?r:r[1]},ze=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:K.computeStrides(r)})}),t},It=e=>e%4===0?4:e%2===0?2:1,gd=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Ji=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,qn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Oe=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Is=(e,t,r,n,i)=>{let s=typeof r=="number",a=s?r:r.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=po(t,i),p=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],g={indices:l,value:p,storage:f,tensor:t},v=te=>typeof te=="string"?te:`${te}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=s?"uniforms.":"",E=`${$}${e}_shape`,S=`${$}${e}_strides`,x="";for(let te=0;te<a-1;te++)x+=`
    let dim${te} = current / ${Oe(S,te,a)};
    let rest${te} = current % ${Oe(S,te,a)};
    indices[${te}] = dim${te};
    current = rest${te};
    `;x+=`indices[${a-1}] = current;`;let A=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${x}
    return indices;
  }`,C=te=>(y.offsetToIndices=!0,a<2?te:`o2i_${e}(${te})`),O=[];if(a>=2)for(let te=a-1;te>=0;te--)O.push(`${Oe(S,te,a)} * (indices[${te}])`);let D=a<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${O.join("+")};
  }`,N=te=>(y.indicesToOffset=!0,a<2?te:`i2o_${e}(${te})`),k=(...te)=>a===0?"0u":`${g.indices}(${te.map(v).join(",")})`,q=(te,$e)=>a<2?`${te}`:`${Oe(te,$e,a)}`,Z=(te,$e,Se)=>a<2?`${te}=${Se};`:`${Oe(te,$e,a)}=${Se};`,ae={},X=(te,$e)=>{y.broadcastedIndicesToOffset=!0;let Se=`${$e.name}broadcastedIndicesTo${e}Offset`;if(Se in ae)return`${Se}(${te})`;let ve=[];for(let _t=a-1;_t>=0;_t--){let gt=$e.indicesGet("outputIndices",_t+$e.rank-a);ve.push(`${q(S,_t)} * (${gt} % ${q(E,_t)})`)}return ae[Se]=`fn ${Se}(outputIndices: ${$e.type.indices}) -> u32 {
             return ${ve.length>0?ve.join("+"):"0u"};
           }`,`${Se}(${te})`},oe=(te,$e)=>(()=>{if(g.storage===g.value)return`${e}[${te}]=${$e};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${te}]=vec2<u32>(u32(${$e}), select(0u, 0xFFFFFFFFu, ${$e} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${te}]=vec2<u32>(u32(${$e}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${te}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${$e}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),F=te=>(()=>{if(g.storage===g.value)return`${e}[${te}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${te}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${te}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${te}] & 0xFFu), bool(${e}[${te}] & 0xFF00u), bool(${e}[${te}] & 0xFF0000u), bool(${e}[${te}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),J=a<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${p} {
    return ${F(`i2o_${e}(indices)`)};
  }`,pe=a<2?"":(()=>{let te=o.map(Se=>`d${Se}: u32`).join(", "),$e=o.map(Se=>`d${Se}`).join(", ");return`
  fn get_${e}(${te}) -> ${p} {
    return get_${e}ByIndices(${k($e)});
  }`})(),le=(...te)=>{if(te.length!==a)throw new Error(`indices length must be ${a}`);let $e=te.map(v).join(",");return a===0?F("0u"):a===1?F($e[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${$e})`)},de=te=>a<2?F(te):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${te})`),_e=a<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${p}) {
    ${oe(`i2o_${e}(indices)`,"value")}
  }`,ke=a<2?"":(()=>{let te=o.map(Se=>`d${Se}: u32`).join(", "),$e=o.map(Se=>`d${Se}`).join(", ");return`
  fn set_${e}(${te}, value: ${p}) {
    set_${e}ByIndices(${k($e)}, value);
  }`})();return{impl:()=>{let te=[],$e=!1;return y.offsetToIndices&&(te.push(A),$e=!0),y.indicesToOffset&&(te.push(D),$e=!0),y.broadcastedIndicesToOffset&&(Object.values(ae).forEach(Se=>te.push(Se)),$e=!0),y.set&&(te.push(ke),$e=!0),y.setByIndices&&(te.push(_e),$e=!0),y.get&&(te.push(pe),$e=!0),y.getByIndices&&(te.push(J),$e=!0),!s&&$e&&te.unshift(`const ${E} = ${g.indices}(${r.join(",")});`,`const ${S} = ${g.indices}(${K.computeStrides(r).join(",")});`),te.join(`
`)},type:g,offsetToIndices:C,indicesToOffset:N,broadcastedIndicesToOffset:X,indices:k,indicesGet:q,indicesSet:Z,set:(...te)=>{if(te.length!==a+1)throw new Error(`indices length must be ${a}`);let $e=te[a];if(typeof $e!="string")throw new Error("value must be string");let Se=te.slice(0,a).map(v).join(",");return a===0?oe("0u",$e):a===1?oe(Se[0],$e):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${Se}, ${$e})`)},setByOffset:oe,setByIndices:(te,$e)=>a<2?oe(te,$e):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${te}, ${$e});`),get:le,getByOffset:F,getByIndices:de,usage:n,name:e,strides:S,shape:E,rank:a}},Q=(e,t,r,n=1)=>Is(e,t,r,"input",n),Ie=(e,t,r,n=1)=>Is(e,t,r,"output",n),Uy=(e,t,r)=>Is(e,t,r,"atomicOutput",1),nc=(e,t,r,n=1)=>Is(e,t,r,"internal",n),If=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=ls){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ly=(e,t)=>new If(e,t)}),Af,gu,Of,zf,Mf,Rf,mr,Fy,Vy,Hn=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),Af=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},gu=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Of=(e,t)=>K.sortBasedOnPerm(e,gu(e.length,t)),zf=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},Mf=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},Rf=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},mr=(e,t)=>{let r=e.dataType,n=e.dims.length,i=gu(n,t),s=Of(e.dims,i),a=e.dims,o=s,l=n<2||Rf(i,e.dims),d;if(l)return d=y=>{let $=Q("input",r,a,4),E=Ie("output",r,o,4);return`
  ${y.registerUniform("output_size","u32").declareVariables($,E)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=K.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:p,newPerm:f}=Mf(e.dims,i),g=K.areEqual(f,[2,3,1]),v=K.areEqual(f,[3,1,2]);if(p.length===2||g||v){a=g?[p[0],p[1]*p[2]]:v?[p[0]*p[1],p[2]]:p,o=[a[1],a[0]];let y=16;return d=$=>{let E=Q("a",r,a.length),S=Ie("output",r,o.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=K.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/y),y:Math.ceil(o[0]/y)},programUniforms:[{type:12,data:$},...ze(a,o)]}},getShaderSource:d}}return d=y=>{let $=Q("a",r,a.length),E=Ie("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables($,E)}

  ${zf(i,n,$,E)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${E.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${E.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=K.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ze(a,o)]}},getShaderSource:d}},Fy=(e,t)=>{Af(e.inputs,t.perm),e.compute(mr(e.inputs[0],t.perm))},Vy=e=>ot({perm:e.perm})}),Bf,Pf,Df,Nf,Uf,Lf,Ff,Vf,jf,Wf,Ar,jy,Wy,qy,Hy,Gy,Ky,Xy,Yy,Zy,Qy,Zx=ce(()=>{"use strict";Be(),Ne(),Ue(),ic(),Hn(),Bf={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Pf={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Df={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Nf={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Uf=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},Lf=(e,t)=>{let r=[],n=e.length;for(let s=0;s<n;s++)t.indexOf(s)===-1&&r.push(e[s]);let i=t.map(s=>e[s]);return[r,i]},Ff=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?n.push(e[i++]):n.push(1);return n},Vf=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},jf=(e,t)=>{let r=[];if(!Vf(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},Wf=(e,t,r,n,i,s,a)=>{let o=r[0].dims,l=K.size(s),d=K.size(a),p=Q("_A",r[0].dataType,o),f=Ie("output",i,s),g=64;l===1&&(g=256);let v=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,y=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(p,f)}
        ${v}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Df[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${Bf[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Pf[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${n==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Nf[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Ar=(e,t,r,n)=>{let i=e.inputs.length===1?r:yd(e.inputs,r),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((v,y)=>y));let a=K.normalizeAxes(s,e.inputs[0].dims.length),o=a,l=e.inputs[0],d=jf(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(mr(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Uf(o.length,l.dims.length));let[p,f]=Lf(l.dims,o),g=p;i.keepDims&&(g=Ff(p,a)),e.compute(Wf(t,i.cacheKey,[l],n,e.inputs[0].dataType,g,f),{inputs:[l]})},jy=(e,t)=>{Ar(e,"ReduceMeanShared",t,"mean")},Wy=(e,t)=>{Ar(e,"ReduceL1Shared",t,"l1")},qy=(e,t)=>{Ar(e,"ReduceL2Shared",t,"l2")},Hy=(e,t)=>{Ar(e,"ReduceLogSumExpShared",t,"logSumExp")},Gy=(e,t)=>{Ar(e,"ReduceMaxShared",t,"max")},Ky=(e,t)=>{Ar(e,"ReduceMinShared",t,"min")},Xy=(e,t)=>{Ar(e,"ReduceProdShared",t,"prod")},Yy=(e,t)=>{Ar(e,"ReduceSumShared",t,"sum")},Zy=(e,t)=>{Ar(e,"ReduceSumSquareShared",t,"sumSquare")},Qy=(e,t)=>{Ar(e,"ReduceLogSumShared",t,"logSum")}}),Or,qf,jo,yd,zr,Hf,Gf,Kf,Xf,Yf,Zf,Qf,Jf,eh,th,Mr,Jy,eb,tb,rb,nb,ib,sb,ab,ob,lb,ic=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),Zx(),Or=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},qf=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],jo=(e,t,r,n,i,s,a=!1,o=!1)=>{let l=[],d=r[0].dims,p=d.length,f=K.normalizeAxes(i,p),g=!o&&f.length===0;d.forEach(($,E)=>{g||f.indexOf(E)>=0?a&&l.push(1):l.push($)});let v=l.length,y=K.size(l);return{name:e,shaderCache:t,getShaderSource:$=>{let E=[],S=Q("_A",r[0].dataType,p),x=Ie("output",s,v),A=n(S,x,f),C=A[2];for(let O=0,D=0;O<p;O++)g||f.indexOf(O)>=0?(a&&D++,C=`for(var j${O}: u32 = 0; j${O} < ${d[O]}; j${O}++) {
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
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ze(d,l)]})}},yd=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),ot({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},zr=(e,t,r,n)=>{let i=e.inputs,s=i.length===1?r:yd(i,r);e.compute(jo(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?qf:n,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Hf=(e,t)=>{Or(e.inputs),zr(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Gf=(e,t)=>{Or(e.inputs),zr(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Kf=(e,t)=>{Or(e.inputs),zr(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Xf=(e,t)=>{Or(e.inputs),zr(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Yf=(e,t)=>{Or(e.inputs),zr(e,"ReduceMax",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Zf=(e,t)=>{Or(e.inputs),zr(e,"ReduceMean",t,(r,n,i)=>{let s=1;for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${s});`]})},Qf=(e,t)=>{Or(e.inputs),zr(e,"ReduceMin",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Jf=(e,t)=>{Or(e.inputs),zr(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},eh=(e,t)=>{Or(e.inputs),zr(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},th=(e,t)=>{Or(e.inputs),zr(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Mr=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?n*=e[s]:i*=e[s];return i<32&&n>1024},Jy=(e,t)=>{Mr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zf(e,t):jy(e,t)},eb=(e,t)=>{Mr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Gf(e,t):Wy(e,t)},tb=(e,t)=>{Mr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Kf(e,t):qy(e,t)},rb=(e,t)=>{Mr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xf(e,t):Hy(e,t)},nb=(e,t)=>{Mr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Yf(e,t):Gy(e,t)},ib=(e,t)=>{Mr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qf(e,t):Ky(e,t)},sb=(e,t)=>{Mr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jf(e,t):Xy(e,t)},ab=(e,t)=>{Mr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eh(e,t):Yy(e,t)},ob=(e,t)=>{Mr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?th(e,t):Zy(e,t)},lb=(e,t)=>{Mr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Hf(e,t):Qy(e,t)}}),yu,ub,db,bd,Qx=ce(()=>{"use strict";Be(),At(),ic(),yu=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},ub=(e,t)=>{yu(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(jo("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},db=(e,t)=>{yu(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(jo("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},bd=e=>ot(e)}),rh,fo,nh,ih,sh,ua,ah,cb,sc=ce(()=>{"use strict";Be(),Ne(),rc(),Ue(),rh=(e,t)=>{let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],p=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=i.dims[0]/3,g=f,v=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let A of t.qkvHiddenSizes)if(A%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],v=t.qkvHiddenSizes[2]}let y=d;if(f!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==f+g+v)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(a){if(g!==v)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=a.dims[3])}let E=y+$,S=-1,x=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==E)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:$,kvSequenceLength:y,totalSequenceLength:E,maxSequenceLength:S,inputHiddenSize:p,hiddenSize:f,vHiddenSize:v,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(v/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},fo=(e,t,r)=>t&&e?`
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
    `,nh=(e,t,r,n,i,s,a,o)=>{let l=It(a?1:s),d=64,p=s/l;p<d&&(d=32);let f=Math.ceil(s/l/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:p},{type:12,data:f}],v=Ut(e.dataType,l),y=Dt(1,l),$=["type"];a&&$.push("type"),o&&$.push("type");let E=S=>{let x=Ie("x",e.dataType,e.dims,l),A=[x],C=a?Q("seq_lens",a.dataType,a.dims):void 0;C&&A.push(C);let O=o?Q("total_sequence_length_input",o.dataType,o.dims):void 0;O&&A.push(O);let D=Dt(e.dataType),N=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${S.registerUniforms(N).declareVariables(...A)}
  ${S.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${fo(C,O,!1)}
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${v};${l}`,inputDependencies:$},getShaderSource:E,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:g})}},ih=(e,t,r,n,i,s,a,o,l)=>{let d=a+s.kvSequenceLength,p=[s.batchSize,s.numHeads,s.sequenceLength,d],f=e>1&&n,g=s.kvNumHeads?s.kvNumHeads:s.numHeads,v=f?[s.batchSize,g,d,s.headSize]:void 0,y=s.nReps?s.nReps:1,$=s.scale===0?1/Math.sqrt(s.headSize):s.scale,E=It(s.headSize),S=s.headSize/E,x=12,A={x:Math.ceil(d/x),y:Math.ceil(s.sequenceLength/x),z:s.batchSize*s.numHeads},C=[{type:12,data:s.sequenceLength},{type:12,data:S},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:$},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:y}],O=f&&n&&K.size(n.dims)>0,D=["type","type"];O&&D.push("type"),i&&D.push("type"),o&&D.push("type"),l&&D.push("type");let N=[{dims:p,dataType:t.dataType,gpuDataType:0}];f&&N.push({dims:v,dataType:t.dataType,gpuDataType:0});let k=q=>{let Z=Q("q",t.dataType,t.dims,E),ae=Q("key",r.dataType,r.dims,E),X=[Z,ae];if(O){let _e=Q("past_key",n.dataType,n.dims,E);X.push(_e)}i&&X.push(Q("attention_bias",i.dataType,i.dims));let oe=o?Q("seq_lens",o.dataType,o.dims):void 0;oe&&X.push(oe);let F=l?Q("total_sequence_length_input",l.dataType,l.dims):void 0;F&&X.push(F);let J=Ie("output",t.dataType,p),pe=[J];f&&pe.push(Ie("present_key",t.dataType,v,E));let le=Dt(1,E),de=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${Z.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${Z.type.storage}, ${x*x}>;
  ${q.registerUniforms(de).declareVariables(...X,...pe)}
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
    ${fo(oe,F,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${O&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${le}(0);
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
          value += ${le}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(E){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${E}`)}})()};
        output[outputIdx] = ${J.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${E};${i!==void 0};${n!==void 0};${e}`,inputDependencies:D},getRunData:()=>({outputs:N,dispatchGroup:A,programUniforms:C}),getShaderSource:k}},sh=(e,t,r,n,i,s,a=void 0,o=void 0)=>{let l=s+i.kvSequenceLength,d=i.nReps?i.nReps:1,p=i.vHiddenSize*d,f=e>1&&n,g=i.kvNumHeads?i.kvNumHeads:i.numHeads,v=f?[i.batchSize,g,l,i.headSize]:void 0,y=[i.batchSize,i.sequenceLength,p],$=12,E={x:Math.ceil(i.vHeadSize/$),y:Math.ceil(i.sequenceLength/$),z:i.batchSize*i.numHeads},S=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:p},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:d}],x=f&&n&&K.size(n.dims)>0,A=["type","type"];x&&A.push("type"),a&&A.push("type"),o&&A.push("type");let C=[{dims:y,dataType:t.dataType,gpuDataType:0}];f&&C.push({dims:v,dataType:t.dataType,gpuDataType:0});let O=D=>{let N=Q("probs",t.dataType,t.dims),k=Q("v",r.dataType,r.dims),q=[N,k];x&&q.push(Q("past_value",n.dataType,n.dims));let Z=a?Q("seq_lens",a.dataType,a.dims):void 0;a&&q.push(Z);let ae=o?Q("total_sequence_length_input",o.dataType,o.dims):void 0;o&&q.push(ae);let X=[Ie("output",t.dataType,y)];f&&X.push(Ie("present_value",t.dataType,v));let oe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${N.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${N.type.value}, ${$*$}>;
  ${D.registerUniforms(oe).declareVariables(...q,...X)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:C,dispatchGroup:E,programUniforms:S}),getShaderSource:O}},ua=(e,t,r,n,i,s,a,o,l,d,p=void 0,f=void 0)=>{let g=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),v=g>1?a:void 0,y=g>1?o:void 0,$=g>1?d.pastSequenceLength:0,E=$+d.kvSequenceLength,S=l&&K.size(l.dims)>0?l:void 0,x=[t,r];v&&K.size(v.dims)>0&&x.push(v),S&&x.push(S),p&&x.push(p),f&&x.push(f);let A=e.compute(ih(g,t,r,v,S,d,$,p,f),{inputs:x,outputs:g>1?[-1,1]:[-1]})[0];e.compute(nh(A,d.batchSize,d.numHeads,$,d.sequenceLength,E,p,f),{inputs:p&&f?[A,p,f]:[A],outputs:[]});let C=[A,n];y&&K.size(y.dims)>0&&C.push(y),p&&C.push(p),f&&C.push(f),e.compute(sh(g,A,n,y,d,$,p,f),{inputs:C,outputs:g>1?[0,2]:[0]})},ah=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=f=>{let g=Ie("output_q",l[0].dataType,r),v=Ie("output_k",l[0].dataType,r),y=Ie("output_v",l[0].dataType,r),$=Q("input",l[0].dataType,l[0].dims),E=Q("weight",l[1].dataType,l[1].dims),S=Q("bias",l[2].dataType,l[2].dims),x=$.type.storage,A=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${x}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${x}, ${a*a}>;
  var<workgroup> tileWeightK: array<${x}, ${a*a}>;
  var<workgroup> tileWeightV: array<${x}, ${a*a}>;
  ${f.registerUniforms(A).declareVariables($,E,S,g,v,y)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:p},{inputs:l,outputs:[-1,-1,-1]})},cb=(e,t)=>{let r=rh(e.inputs,t),[n,i,s]=ah(e,r);return ua(e,n,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),oh,lh,uh,pb,Jx=ce(()=>{"use strict";Ir(),Be(),Ne(),At(),Ue(),oh=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,s)=>{let a=i.length;if(a!==n.length)throw new Error(`${s}: num dimensions != ${a}`);i.forEach((o,l)=>{if(o!==n[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},lh=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,s=e[0].dims,a=n?It(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?a:1,l=K.size(s)/a,d=n,p=d?s.length:s,f=Q("x",e[0].dataType,e[0].dims,a),g=Q("scale",e[1].dataType,e[1].dims,o),v=Q("bias",e[2].dataType,e[2].dims,o),y=Q("inputMean",e[3].dataType,e[3].dims,o),$=Q("inputVar",e[4].dataType,e[4].dims,o),E=Ie("y",e[0].dataType,p,a),S=()=>{let A="";if(n)A=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")A=`
            ${E.indicesSet("outputIndices","0","0")}
            let cOffset = ${E.indicesToOffset("outputIndices")};`;else{A=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let C=1;C<g.rank;C++)A+=`cIndices[${C}] = outputIndices[${C}];`;A+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return A},x=A=>`
  const epsilon = ${r};
  ${A.registerUniform("outputSize","u32").declareVariables(f,g,v,y,$,E)}
  ${A.mainStart()}
  ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${E.offsetToIndices(`global_idx * ${a}`)};
    ${S()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${v.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${E.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...ze(s)]:[{type:12,data:l}]})}},uh=e=>ot(e),pb=(e,t)=>{let{inputs:r,outputCount:n}=e,i=uh({...t,outputCount:n});if(bt.webgpu.validateInputContent&&oh(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(lh(r,i))}}),dh,ch,fb,e$=ce(()=>{"use strict";Ne(),Ue(),dh=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ch=e=>{let t=e[0].dims,r=e[0].dims[2],n=K.size(t)/4,i=e[0].dataType,s=Q("input",i,t,4),a=Q("bias",i,[r],4),o=Q("residual",i,t,4),l=Ie("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,a,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},fb=e=>{dh(e.inputs),e.compute(ch(e.inputs))}}),ph,nt,hb,mb,gb,yb,bb,vb,wb,_b,xb,fh,$b,Sb,Tb,kb,Ls,Cb,Co,Eb,Ib,Ab,Ob,zb,Mb,Rb,Bb,Pb,Db,Nb,Ub,Lb,Fb,Vb,jb,Wb,bu,qb,vd,wd,Hb,Gb,Kb,hh,mh,Xb,ac=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),ph=(e,t,r,n,i,s,a)=>{let o=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=Q("inputData",r,[o],4),p=Ie("outputData",n,[o],4),f=[{name:"vec_size",type:"u32"}];return a&&f.push(...a),`
      ${e.registerUniforms(f).declareVariables(d,p)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",l)}
  }`},nt=(e,t,r,n,i,s=e.dataType,a,o)=>{let l=[{type:12,data:Math.ceil(K.size(e.dims)/4)}];return a&&l.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>ph(d,K.size(e.dims),e.dataType,s,r,n,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(K.size(d[0].dims)/64/4)},programUniforms:l})}},hb=e=>{e.compute(nt(e.inputs[0],"Abs","abs"))},mb=e=>{e.compute(nt(e.inputs[0],"Acos","acos"))},gb=e=>{e.compute(nt(e.inputs[0],"Acosh","acosh"))},yb=e=>{e.compute(nt(e.inputs[0],"Asin","asin"))},bb=e=>{e.compute(nt(e.inputs[0],"Asinh","asinh"))},vb=e=>{e.compute(nt(e.inputs[0],"Atan","atan"))},wb=e=>{e.compute(nt(e.inputs[0],"Atanh","atanh"))},_b=e=>ot(e),xb=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(nt(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},fh=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ot({min:t,max:r})},$b=(e,t)=>{let r=t||fh(e.inputs),n=Dt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},Sb=e=>{e.compute(nt(e.inputs[0],"Ceil","ceil"))},Tb=e=>{e.compute(nt(e.inputs[0],"Cos","cos"))},kb=e=>{e.compute(nt(e.inputs[0],"Cosh","cosh"))},Ls=e=>ot(e),Cb=(e,t)=>{let r=Dt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
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
}`,Eb=e=>{let t=Dt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Co(t)))},Ib=e=>{e.compute(nt(e.inputs[0],"Exp","exp"))},Ab=e=>{e.compute(nt(e.inputs[0],"Floor","floor"))},Ob=e=>{let t=Dt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Co(t)))},zb=(e,t)=>{let r=Dt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Mb=e=>{e.compute(nt(e.inputs[0],"Not",t=>`!${t}`))},Rb=e=>{e.compute(nt(e.inputs[0],"Neg",t=>`-${t}`))},Bb=e=>{e.compute(nt(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Pb=e=>{let t=Dt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Db=e=>{e.compute(nt(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Nb=e=>ot(e),Ub=(e,t)=>{let r=Dt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Lb=e=>{let t=Dt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"HardSwish",r=>`${r} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${r} + vec4<${t}>(0.5)))`))},Fb=e=>{e.compute(nt(e.inputs[0],"Sin","sin"))},Vb=e=>{e.compute(nt(e.inputs[0],"Sinh","sinh"))},jb=e=>{e.compute(nt(e.inputs[0],"Sqrt","sqrt"))},Wb=e=>{e.compute(nt(e.inputs[0],"Tan","tan"))},bu=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,qb=e=>{e.compute(nt(e.inputs[0],"Tanh",bu))},vd=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${bu("v")};
}
`,wd=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Hb=e=>{let t=Dt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"FastGelu",wd,vd(t),void 0,e.inputs[0].dataType))},Gb=(e,t)=>{let r=Dt(e.inputs[0].dataType);return e.compute(nt(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Kb=e=>{e.compute(nt(e.inputs[0],"Log","log"))},hh=(e,t)=>`
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
`,mh=e=>`quick_gelu_impl(${e})`,Xb=(e,t)=>{let r=Dt(e.inputs[0].dataType);e.compute(nt(e.inputs[0],"QuickGelu",mh,hh(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),gh,yh,Yb,t$=ce(()=>{"use strict";Ne(),Ue(),ac(),gh=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},yh=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=Q("input",e[0].dataType,e[0].dims,4),n=Q("bias",e[0].dataType,[e[0].dims[2]],4),i=Ie("output",e[0].dataType,t,4),s=K.size(t)/4,a=Ut(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
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
  }`}},Yb=e=>{gh(e.inputs),e.compute(yh(e.inputs))}}),bh,vh,Rr,Zb,Qb,Jb,ev,tv,rv,nv,iv,sv,av,r$=ce(()=>{"use strict";Be(),Ne(),Ue(),bh=(e,t,r,n,i,s,a,o,l,d,p,f)=>{let g,v;typeof o=="string"?g=v=(x,A)=>`${o}((${x}),(${A}))`:typeof o=="function"?g=v=o:(g=o.scalar,v=o.vector);let y=Ie("outputData",p,n.length,4),$=Q("aData",l,t.length,4),E=Q("bData",d,r.length,4),S;if(i)if(s){let x=K.size(t)===1,A=K.size(r)===1,C=t.length>0&&t[t.length-1]%4===0,O=r.length>0&&r[r.length-1]%4===0;x||A?S=y.setByOffset("global_idx",v(x?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),A?`${E.type.value}(${E.getByOffset("0")}.x)`:E.getByOffset("global_idx"))):S=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${E.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",v(a||C?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||O?E.getByOffset("offsetB / 4u"):`${E.type.value}(${E.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else S=y.setByOffset("global_idx",v($.getByOffset("global_idx"),E.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(A,C,O="")=>{let D=`aData[indexA${C}][componentA${C}]`,N=`bData[indexB${C}][componentB${C}]`;return`
            let outputIndices${C} = ${y.offsetToIndices(`global_idx * 4u + ${C}u`)};
            let offsetA${C} = ${$.broadcastedIndicesToOffset(`outputIndices${C}`,y)};
            let offsetB${C} = ${E.broadcastedIndicesToOffset(`outputIndices${C}`,y)};
            let indexA${C} = offsetA${C} / 4u;
            let indexB${C} = offsetB${C} / 4u;
            let componentA${C} = offsetA${C} % 4u;
            let componentB${C} = offsetB${C} % 4u;
            ${A}[${C}] = ${O}(${g(D,N)});
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
        ${e.registerUniform("vec_size","u32").declareVariables($,E,y)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${S}
      }`},vh=(e,t,r,n,i,s,a=r.dataType)=>{let o=r.dims.map(Number),l=n.dims.map(Number),d=!K.areEqual(o,l),p=o,f=K.size(o),g=!1,v=!1,y=[d];if(d){let $=os.calcShape(o,l,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");p=$.slice(),f=K.size(p);let E=K.size(o)===1,S=K.size(l)===1,x=o.length>0&&o[o.length-1]%4===0,A=l.length>0&&l[l.length-1]%4===0;y.push(E),y.push(S),y.push(x),y.push(A);let C=1;for(let O=1;O<p.length;O++){let D=o[o.length-O],N=l[l.length-O];if(D===N)C*=D;else break}C%4===0?(v=!0,g=!0):(E||S||x||A)&&(g=!0)}else g=!0;return y.push(g),{name:e,shaderCache:{hint:t+y.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>bh($,o,l,p,g,d,v,i,r.dataType,n.dataType,a,s),getRunData:()=>({outputs:[{dims:p,dataType:a}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(K.size(p)/4)},...ze(o,l,p)]})}},Rr=(e,t,r,n,i,s)=>{e.compute(vh(t,i??"",e.inputs[0],e.inputs[1],r,n,s))},Zb=e=>{Rr(e,"Add",(t,r)=>`${t}+${r}`)},Qb=e=>{Rr(e,"Div",(t,r)=>`${t}/${r}`)},Jb=e=>{Rr(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},ev=e=>{Rr(e,"Mul",(t,r)=>`${t}*${r}`)},tv=e=>{let t=Q("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Rr(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
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
      `)},rv=e=>{Rr(e,"Sub",(t,r)=>`${t}-${r}`)},nv=e=>{Rr(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},iv=e=>{Rr(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},sv=e=>{Rr(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},av=e=>{Rr(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),wh,_h,xh,$h,ov,lv,n$=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),wh=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,s=n.dims.length;e.forEach((a,o)=>{if(o!==r){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,d)=>{if(d!==t&&l!==n.dims[d])throw new Error("non concat dimensions must match")})}})},_h=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,xh=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(s):i===0?n.push(`if (inputIndex == ${i}u) { ${s} }`):i===r-1?n.push(`else { ${s} }`):n.push(`else if (inputIndex == ${i}) { ${s} }`)}return n.join(`
`)},$h=(e,t,r,n)=>{let i=K.size(r),s=new Array(e.length),a=new Array(e.length),o=0,l=[],d=[],p=[{type:12,data:i}];for(let $=0;$<e.length;++$)o+=e[$].dims[t],s[$]=o,d.push(e[$].dims.length),a[$]=Q(`input${$}`,n,d[$]),l.push("rank"),p.push({type:12,data:s[$]});for(let $=0;$<e.length;++$)p.push(...ze(e[$].dims));p.push(...ze(r));let f=Ie("output",n,r.length),g=f.indicesGet("indices",t),v=Array.from(Array(s.length).keys()).map($=>`uniforms.sizeInConcatAxis${$}`).join(","),y=$=>`

  ${(()=>{$.registerUniform("outputSize","u32");for(let E=0;E<e.length;E++)$.registerUniform(`sizeInConcatAxis${E}`,"u32");return $.declareVariables(...a,f)})()}

  ${_h(s.length,v)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${v});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${xh(a,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}),getShaderSource:y}},ov=(e,t)=>{let r=e.inputs,n=r[0].dims,i=K.normalizeAxis(t.axis,n.length);wh(r,i);let s=n.slice();s[i]=r.reduce((o,l)=>o+(l.dims.length>i?l.dims[i]:0),0);let a=r.filter(o=>K.size(o.dims)>0);e.compute($h(a,i,s,r[0].dataType),{inputs:a})},lv=e=>ot({axis:e.axis})}),Oi,zi,Mi,oc,Pi=ce(()=>{"use strict";Be(),Ne(),Oi=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},zi=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Mi=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},oc=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,n]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=e?.activation_params||[My,Ry];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),jt,uv,lc=ce(()=>{"use strict";jt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},uv=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),dv,i$=ce(()=>{"use strict";dv=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Zs,uc,dc=ce(()=>{"use strict";Be(),Ne(),Ue(),Pi(),Zs=(e,t,r,n,i)=>{let s=n-r;return`
      ${Array.from({length:r}).map((a,o)=>`
      if (${Oe(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,Oe(i,o+s,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},uc=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a[a.length-2],d=o[o.length-1],p=a[a.length-1],f=It(d),g=It(p),v=It(l),y=K.size(r)/f/v,$=e.length>2,E=n?n.slice(0,-2):r.slice(0,-2),S=[K.size(E),l,d],x=[{type:12,data:y},{type:12,data:l},{type:12,data:d},{type:12,data:p}];zi(t,x),x.push(...ze(E,a,o)),$&&x.push(...ze(e[2].dims)),x.push(...ze(S));let A=C=>{let O=nc("batch_dims",e[0].dataType,E.length),D=Q("a",e[0].dataType,a.length,g),N=Q("b",e[1].dataType,o.length,f),k=Ie("output",e[0].dataType,S.length,f),q=Ut(k.type.tensor),Z=Oi(t,k.type.value,q),ae=[D,N],X="";if($){let J=i?f:1;ae.push(Q("bias",e[2].dataType,e[2].dims.length,J)),X=`${i?`value += bias[col / ${J}];`:`value += ${k.type.value}(bias[row + i]);`}`}let oe=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Mi(t,oe);let F=()=>{let J=`var a_data: ${D.type.value};`;for(let pe=0;pe<g;pe++)J+=`
              let b_data${pe} = b[(b_offset + (k + ${pe}) * uniforms.N + col) / ${f}];`;for(let pe=0;pe<v;pe++){J+=`a_data = a[(a_offset + (row + ${pe}) * uniforms.K + k) / ${g}];`;for(let le=0;le<g;le++)J+=`
            values[${pe}] = fma(${N.type.value}(a_data${g===1?"":`[${le}]`}), b_data${le}, values[${pe}]);
`}return J};return`
  ${C.registerUniforms(oe).registerInternalVariables(O).declareVariables(...ae,k)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${v};
    let row = (index1 % stride1) * ${v};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${O.offsetToIndices("batch")};`}

    var a_indices: ${D.type.indices};
    ${Zs("a_indices",D,D.rank-2,O.rank,"batch_indices")}
    ${D.indicesSet("a_indices",D.rank-2,0)}
    ${D.indicesSet("a_indices",D.rank-1,0)}
    let a_offset = ${D.indicesToOffset("a_indices")};

    var b_indices: ${N.type.indices};
    ${Zs("b_indices",N,N.rank-2,O.rank,"batch_indices")}
    ${N.indicesSet("b_indices",N.rank-2,0)}
    ${N.indicesSet("b_indices",N.rank-1,0)}
    let b_offset = ${N.indicesToOffset("b_indices")};
    var values: array<${k.type.value}, ${v}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${F()}
    }
    for (var i = 0u; i < ${v}u; i++) {
      var value = values[i];
      ${X}
      ${Z}
      let cur_indices = ${k.type.indices}(batch, row + i, col);
      let offset = ${k.indicesToOffset("cur_indices")};
      ${k.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${g};${v};${i}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:x}),getShaderSource:A}}}),Sh,Th,_d,vu,kh,xd,Ch,Wo,cc=ce(()=>{"use strict";Be(),Ne(),Ue(),Pi(),dc(),lc(),Sh=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Th=(e,t)=>e?`
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
        }`,_d=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],p=i?l:s,f=i?s:l,g=p/t[0],v=s/t[1];if(!((i&&g===4&&e[1]===4||!i&&(g===3||g===4))&&p%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
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
  let tileRowB = localRow * ${v};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Sh(i,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${v}; innerRow = innerRow + 1) {
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

          ${Th(i,g)}
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
            `,kh=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",xd=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32,l=!1)=>{let d=e[1]*t[1],p=e[0]*t[0],f=i?d:s,g=i?s:d;if(!(g%t[1]===0&&f%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let v=g/t[1],y=f/t[0],$=s/t[1],E=l?`
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

let tileRowA = i32(localId.y) * ${v};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${$};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${v}; innerRow = innerRow + 1) {
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
      ${kh(i)}
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
    ${E}
  }
`},Ch=(e,t,r,n,i=!1)=>{let[s,a,o,l]=n,d=Ut(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${jt(e,d)} {
      var value = ${jt(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${Zs("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${jt(e,d)} {
      var value = ${jt(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Zs("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${jt(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${jt(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Wo=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a.slice(0,-2),d=o.slice(0,-2),p=n?n.slice(0,-2):r.slice(0,-2),f=K.size(p),g=a[a.length-2],v=a[a.length-1],y=o[o.length-1],$=v%4===0&&y%4===0,E=g<=8?[4,1,1]:[4,4,1],S=[8,8,1],x=[Math.ceil(y/S[0]/E[0]),Math.ceil(g/S[1]/E[1]),Math.ceil(f/S[2]/E[2])],A=$?4:1,C=[...l,g,v/A],O=C.length,D=[...d,v,y/A],N=D.length,k=[f,g,y/A],q=[{type:6,data:g},{type:6,data:y},{type:6,data:v}];zi(t,q),q.push(...ze(p,C,D));let Z=["rank","rank"],ae=e.length>2;ae&&(q.push(...ze(e[2].dims)),Z.push("rank")),q.push(...ze(k));let X=oe=>{let F=p.length,J=nc("batchDims",e[0].dataType,F,1),pe=Ut(e[0].dataType),le=Q("a",e[0].dataType,O,A),de=Q("b",e[1].dataType,N,A),_e=Ie("result",e[0].dataType,k.length,A),ke=[le,de];if(ae){let _t=i?A:1;ke.push(Q("bias",e[2].dataType,e[2].dims.length,_t))}let te=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Mi(t,te);let $e=Ut(_e.type.tensor),Se=Oi(t,_e.type.value,$e),ve=Ch(A,ae,Se,[J,le,de,_e],i);return`
  ${oe.registerUniforms(te).registerInternalVariables(J).declareVariables(...ke,_e)}
  ${ve}
  ${$?_d(E,S,pe,J):xd(E,S,pe,J)}
                   `};return{name:"MatMul",shaderCache:{hint:`${E};${t.activation};${$};${i}`,inputDependencies:Z},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:q}),getShaderSource:X}}}),Eh,cv,s$=ce(()=>{"use strict";Be(),Tn(),Ue(),Pi(),lc(),i$(),cc(),Eh=(e,t,r,n,i=!1,s,a=4,o=4,l=4,d="f32")=>{let p=q=>{switch(q){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},f=q=>{switch(q){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,v=e?`
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
    var resData = ${jt(a,d)}(0.0);
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
    return ${jt(a,d)}(0.0);`:n&&r?`
    let col = colIn * ${a};
    ${x}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${jt(a,d)}(0.0);`,C=e?n&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${jt(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${jt(o,d)}(0.0);`,O=jt(l,d),D=jt(e?a:o,d),N=jt(e?o:a,d),k=Oi(s,O,d);return`
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
      ${v}
      ${uv(i)}
      ${k}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},cv=(e,t,r,n,i,s,a,o,l)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],f=r[0],g=d?r[2]:r[3],v=d?r[1]:r[2],y=d?r[3]:r[1],$=d&&(p%4===0||p%3===0)&&y%4===0,E=d?y:g*v,S=d?g*v:y,x=[8,8,1],A=n<=8?[4,1,1]:[4,4,1],C=[Math.ceil(E/x[0]/A[0]),Math.ceil(S/x[1]/A[1]),Math.ceil(f/x[2]/A[2])];et("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${C}`);let O=$?d&&p%4!==0?3:4:1,D=x[1]*A[1],N=x[0]*A[0],k=Math.max(x[0]*O,x[1]),q=n%D===0,Z=i%N===0,ae=s%k===0,X=$?[O,4,4]:[1,1,1],oe=[{type:6,data:n},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];zi(t,oe),oe.push(...ze(e[0].dims,e[1].dims));let F=["rank","rank"];a&&(oe.push(...ze(e[2].dims)),F.push("rank")),oe.push(...ze(r));let J=pe=>{let le=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Mi(t,le);let de=$?4:1,_e=Ut(e[0].dataType),ke=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${_e}>`:_e}) {
        result[flatIndex] = ${$?`vec4<${_e}>`:_e}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${_e}>`:_e}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,te=Q("x",e[0].dataType,e[0].dims.length,O===3?1:O),$e=Q("w",e[1].dataType,e[1].dims.length,de),Se=[te,$e],ve=Ie("result",e[0].dataType,r.length,de);if(a){let _t=Q("bias",e[2].dataType,e[2].dims.length,de);Se.push(_t),ke+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${_e}>`:_e} {
          return bias[coords.${d?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${dv("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${pe.registerUniforms(le).declareVariables(...Se,ve)}
        ${ke}
        ${Eh(d,q,Z,ae,a,t,X[0],X[1],X[2],_e)}
        ${$?_d(A,x,_e,void 0,!d,k):xd(A,x,_e,void 0,!d,k,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${O};${$};${q};${Z};${ae};${D};${N};${k}`,inputDependencies:F},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:C[0],y:C[1],z:C[2]},programUniforms:oe}),getShaderSource:J}}}),Ih,wu,As,Ah,_u,Oh,pv,fv,a$=ce(()=>{"use strict";Be(),Tn(),Ne(),Ue(),Pi(),lc(),Ih=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},wu=e=>typeof e=="number"?[e,e,e]:e,As=(e,t)=>t<=1?e:e+(e-1)*(t-1),Ah=(e,t,r,n=1)=>{let i=As(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},_u=(e,t,r,n,i)=>{i==null&&(i=Ah(e,t[0],n[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*i)/n[a]+1));return s},Oh=(e,t,r,n,i,s,a,o,l,d)=>{let p,f,g,v;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=_u([t,r,n,1],[o,l,d],1,[i,s,a],e);f=y[0],g=y[1],v=y[2]}else if(Array.isArray(e)){if(!e.every(($,E,S)=>$===S[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=_u([t,r,n,1],[o,l,d],1,[i,s,a],e[0]);f=y[0],g=y[1],v=y[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/i),g=Math.ceil(r/s),v=Math.ceil(n/a);let y=(f-1)*i+o-t,$=(g-1)*s+l-r,E=(v-1)*a+d-n,S=Math.floor(y/2),x=y-S,A=Math.floor($/2),C=$-A,O=Math.floor(E/2),D=E-O;p={top:A,bottom:C,left:O,right:D,front:S,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:f,outHeight:g,outWidth:v}},pv=(e,t,r,n,i,s=!1,a="channelsLast")=>{let o,l,d,p,f;if(a==="channelsLast")[o,l,d,p,f]=e;else if(a==="channelsFirst")[o,f,l,d,p]=e;else throw new Error(`Unknown dataFormat ${a}`);let[g,,v,y,$]=t,[E,S,x]=wu(r),[A,C,O]=wu(n),D=As(v,A),N=As(y,C),k=As($,O),{padInfo:q,outDepth:Z,outHeight:ae,outWidth:X}=Oh(i,l,d,p,E,S,x,D,N,k),oe=s?g*f:g,F=[0,0,0,0,0];return a==="channelsFirst"?F=[o,oe,Z,ae,X]:a==="channelsLast"&&(F=[o,Z,ae,X,oe]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:d,inWidth:p,inChannels:f,outDepth:Z,outHeight:ae,outWidth:X,outChannels:oe,padInfo:q,strideDepth:E,strideHeight:S,strideWidth:x,filterDepth:v,filterHeight:y,filterWidth:$,effectiveFilterDepth:D,effectiveFilterHeight:N,effectiveFilterWidth:k,dilationDepth:A,dilationHeight:C,dilationWidth:O,inShape:e,outShape:F,filterShape:t}},fv=(e,t,r,n,i,s)=>{let a=s==="channelsLast",o=a?e[0].dims[3]:e[0].dims[1],l=!1,d=[64,1,1],p={x:r.map((x,A)=>A)},f=[Math.ceil(Ih(p.x.map(x=>r[x]))/d[0]),1,1];et("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${f}`);let g=l?a&&o%4!==0?3:4:1,v=K.size(r),y=[{type:12,data:v},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];zi(t,y),y.push(...ze(e[0].dims,e[1].dims));let $=["rank","rank"],E=e.length===3;E&&(y.push(...ze(e[2].dims)),$.push("rank")),y.push(...ze(r));let S=x=>{let A=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Mi(t,A);let C=l?4:1,O=Ut(e[0].dataType),D=Q("x",e[0].dataType,e[0].dims.length,g===3?1:g),N=Q("W",e[1].dataType,e[1].dims.length,C),k=[D,N],q=Ie("result",e[0].dataType,r.length,C),Z="";if(E){let oe=Q("bias",e[2].dataType,e[2].dims.length,C);k.push(oe),Z+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${O}>`:O} {
          return bias[${a?Oe("coords",4,5):Oe("coords",1,5)}${l?"/ 4":""}];
        }`}let ae=jt(g,O),X=Oi(t,ae,O);return`
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
              let batch = ${Oe("coords",0,D.rank)};
              let d2 = ${a?Oe("coords",D.rank-1,D.rank):Oe("coords",1,D.rank)};
              let xFRCCorner = vec3<u32>(${a?Oe("coords",1,D.rank):Oe("coords",2,D.rank)},
              ${a?Oe("coords",2,D.rank):Oe("coords",3,D.rank)},
              ${a?Oe("coords",3,D.rank):Oe("coords",4,D.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?Oe("uniforms.x_shape",1,D.rank):Oe("uniforms.x_shape",2,D.rank)};
              let xShapeZ = ${a?Oe("uniforms.x_shape",2,D.rank):Oe("uniforms.x_shape",3,D.rank)};
              let xShapeW = ${a?Oe("uniforms.x_shape",3,D.rank):Oe("uniforms.x_shape",4,D.rank)};
              let xShapeU = ${a?Oe("uniforms.x_shape",4,D.rank):Oe("uniforms.x_shape",1,D.rank)};
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${g};${E}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:f[0],y:f[1],z:f[2]},programUniforms:y}),getShaderSource:S}}}),hv,mv,o$=ce(()=>{"use strict";Be(),Ne(),Ue(),Pi(),hv=(e,t,r,n)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],p=d/t.group,f=l&&p>=4?It(d):1,g=K.size(r)/f,v=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];zi(t,v),v.push(...ze(a,[o[0],o[1],o[2],o[3]/f]));let y=i?["rank","rank","rank"]:["rank","rank"];v.push(...ze([r[0],r[1],r[2],r[3]/f]));let $=E=>{let S=Ie("output",e[0].dataType,r.length,f),x=Ut(S.type.tensor),A=Oi(t,S.type.value,x),C=Q("x",e[0].dataType,a.length),O=Q("w",e[1].dataType,o.length,f),D=[C,O];i&&D.push(Q("b",e[2].dataType,e[2].dims,f));let N=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Mi(t,N);let k=l?`
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
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${S.type.value} = ${S.type.value}(0);
    ${k}
    ${s}
    ${A}
    ${S.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:v}),getShaderSource:$}},mv=(e,t,r,n)=>{let i=e.length>2,s=It(r[3]),a=It(r[2]),o=K.size(r)/s/a,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],p=[r[0],r[1],r[2],r[3]/s],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];zi(t,f),f.push(...ze(l,d,p));let g=(a-1)*t.strides[1]+d[1],v=y=>{let $=Ie("output",e[0].dataType,p.length,s),E=Ut($.type.tensor),S=Oi(t,$.type.value,E),x=Q("x",e[0].dataType,l.length,s),A=Q("w",e[1].dataType,d.length,s),C=[x,A];i&&C.push(Q("b",e[2].dataType,e[2].dims,s));let O=i?"value += b[output_channel];":"",D=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Mi(t,D),`
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${g};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:v}}}),zh,ho,Mh,mo,$d,xu,Rh,Bh,Sd,l$=ce(()=>{"use strict";Ne(),s$(),a$(),cc(),o$(),Pi(),dc(),Hn(),zh=(e,t,r,n,i,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),l=o.length,d=t[0],p=t.slice(2).map((g,v)=>g+(g-1)*(r[v]-1)),f=o.map((g,v)=>g+n[v]+n[v+l]).map((g,v)=>Math.floor((g-p[v]+i[v])/i[v]));return f.splice(0,0,a),f.splice(s?3:1,0,d),f},ho=[2,3,1,0],Mh=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},mo=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let n=e.pads.slice();Vo.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},$d=e=>{let t=oc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},xu=(e,t,r,n)=>{let i=r.format==="NHWC",s=zh(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let D=[t[0]];if(i){let N=e.kernelCustomData.wT??e.compute(mr(t[1],ho),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=N),D.push(N)}else D.push(t[1]);t.length===3&&D.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(mv(D,r,s,n),{inputs:D}):e.compute(hv(D,r,s,n),{inputs:D});return}let a=t.length===3,o=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],p=t[1].dims[2],f=t[1].dims[3],g=s[i?1:2],v=s[i?2:3],y=s[i?3:1],$=i&&p===o&&f===l&&r.pads[0]===0&&r.pads[1]===0;if($||p===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let D=s[0],N,k,q,Z=[];if(i){let oe=e.kernelCustomData.wT??e.compute(mr(t[1],ho),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=oe),$){let F=o*l*d;N=t[0].reshape([1,D,F]),k=oe.reshape([1,F,y]),q=[1,D,y]}else N=t[0].reshape([D,o*l,d]),k=oe.reshape([1,d,y]),q=[D,g*v,y];Z.push(N),Z.push(k)}else N=t[0].reshape([D,d,o*l]),k=t[1].reshape([1,y,d]),q=[D,y,g*v],Z.push(k),Z.push(N);a&&Z.push(t[2]);let ae=q[2],X=Z[0].dims[Z[0].dims.length-1];ae<8&&X<8?e.compute(uc(Z,r,s,q,i,n),{inputs:Z}):e.compute(Wo(Z,r,s,q,i,n),{inputs:Z});return}let E=!0,S=e.kernelCustomData.wT??e.compute(mr(t[1],ho),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=S);let x=[t[0],S];a&&x.push(t[2]);let A=i?g*v:y,C=i?y:g*v,O=p*f*d;e.compute(cv(x,r,s,A,C,O,a,E,n),{inputs:x})},Rh=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=mo({...t,pads:i,strides:s,dilations:a,kernelShape:o},n);xu(e,n,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Bh=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=mo(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=pv(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,n);e.compute(fv(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],n))},Sd=(e,t)=>{if(Mh(e.inputs,t),e.inputs[0].dims.length===3)Rh(e,t);else if(e.inputs[0].dims.length===5)Bh(e,e.inputs,t);else{let r=mo(t,e.inputs);xu(e,e.inputs,r)}}}),gv,u$=ce(()=>{"use strict";Be(),Tn(),Ne(),Ue(),gv=(e,t,r)=>{let n=e.length>2,i=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,l=o[2]/a,d=o[3],p=s?It(l):1,f=s&&d===1&&l>=4,g=f?Math.floor(l/4)*4:Math.floor(l/p)*p,v=l-g,y=s?It(d):1,$=s?d===1?p:y:1,E=K.size(i)/y,S=[Math.ceil(E/64),1,1];et("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${S}`);let x=["rank","rank"],A=[t.strides[0],t.strides[1]],C=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],O=[t.dilations[0],t.dilations[1]],D=[C[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),C[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],N=[D[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),D[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],k=[{type:12,data:E},{type:12,data:A},{type:12,data:C},{type:12,data:O},{type:12,data:D},{type:6,data:N},{type:12,data:g},{type:12,data:l},{type:12,data:d},...ze(e[0].dims,e[1].dims)];n&&(k.push(...ze(e[2].dims)),x.push("rank")),k.push(...ze(i));let q=Z=>{let ae=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:A.length},{name:"filter_dims",type:"u32",length:C.length},{name:"dilations",type:"u32",length:C.length},{name:"effective_filter_dims",type:"u32",length:D.length},{name:"pads",type:"i32",length:N.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],X=Ut(e[0].dataType),oe=s?1:2,F=s?2:3,J=s?3:1,pe=Q("W",e[1].dataType,e[1].dims.length,$),le=Q("Dy",e[0].dataType,e[0].dims.length,p),de=[le,pe];n&&de.push(Q("bias",e[2].dataType,[i[J]].length,y));let _e=Ie("result",e[0].dataType,i.length,y),ke=()=>{let Se="";if(f)p===4?Se+=`
        let xValue = ${le.getByOffset("x_offset")};
        let wValue = ${pe.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?Se+=`
          dotProd = dotProd + dot(vec4<${X}>(${le.getByOffset("x_offset")}, ${le.getByOffset("x_offset + 1u")}), vec4<${X}>(${pe.getByOffset("w_offset")}, ${pe.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(Se+=`
          dotProd = dotProd + dot(vec4<${X}>(${le.getByOffset("x_offset")}, ${le.getByOffset("x_offset + 1u")}, ${le.getByOffset("x_offset + 2u")}, ${le.getByOffset("x_offset + 3u")}), vec4<${X}>(${pe.getByOffset("w_offset")}, ${pe.getByOffset("w_offset + 1u")}, ${pe.getByOffset("w_offset + 2u")}, ${pe.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Se+=`
                  let xValue = ${s?le.getByOffset(`${le.indicesToOffset(`${le.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):le.get("batch","inputChannel","idyR","idyC")};
        `,p===1)Se+=`
          let w_offset = ${pe.indicesToOffset(`${pe.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${pe.getByOffset(`w_offset / ${$}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ve=0;ve<p;ve++)Se+=`
            let wValue${ve} = ${pe.getByOffset(`${pe.indicesToOffset(`${pe.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ve}, wOutChannel)`)} / ${$}`)};
            dotProd = dotProd + xValue[${ve}] * wValue${ve};`;return Se},te=()=>{if(v===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let Se="";if(p===1){Se+="dotProd = dotProd";for(let ve=0;ve<v;ve++)Se+=`
            + ${le.getByOffset(`x_offset + ${ve}`)} * ${pe.getByOffset(`w_offset + ${ve}`)}`;Se+=";"}else if(p===2){if(v!==2)throw new Error(`Invalid inputChannelsRemainder ${v}.`);Se+=`
          let xValue = ${le.getByOffset("x_offset")};
          let wValue = ${pe.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Se},$e=`
            let outputIndices = ${_e.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${_e.indicesGet("outputIndices",0)};
            let d1 = ${_e.indicesGet("outputIndices",J)};
            let r = ${_e.indicesGet("outputIndices",oe)};
            let c = ${_e.indicesGet("outputIndices",F)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${_e.type.value}(0.0);
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
              if (dyR < 0.0 || dyR >= ${X}(uniforms.Dy_shape[${oe}]) || fract(dyR) > 0.0 ||
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
                if (dyC < 0.0 || dyC >= ${X}(uniforms.Dy_shape[${F}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${le.indicesToOffset(`${le.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${pe.indicesToOffset(`${pe.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${$};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:p}) {
                  ${ke()}
                  inputChannel = inputChannel + ${f?4:p};
                }
                ${te()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${y}]`:""};
            ${_e.setByOffset("global_idx","value")};
          `;return`
    ${Z.registerUniforms(ae).declareVariables(...de,_e)}
      ${Z.mainStart()}
      ${Z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${$e}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${$}${y}${f}${v}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:S[0],y:S[1],z:S[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:k}),getShaderSource:q}}}),Ph,Dh,Nh,$u,yv,Uh,Su,Lh,bv,d$=ce(()=>{"use strict";u$(),Pi(),Hn(),Ph=(e,t,r,n,i,s)=>(e-1)*t+r+(n-1)*i+1-s,Dh=(e,t,r,n,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=s,r[i]=e-s):t==="SAME_LOWER"&&(r[n]=e-s,r[i]=s)},Nh=(e,t,r,n,i,s,a,o,l,d)=>{let p=e.length-2,f=d.length===0;l.length<p&&l.push(...Array(p-l.length).fill(0));let g=e[0],v=t[o?3:1]*i;for(let y=0,$=e.length-p-(o?1:0);y<p;++y,++$){let E=e[$],S=f?E*a[y]:d[y],x=Ph(E,a[y],s[y],t[$],r[y],S);Dh(x,n,s,y,y+p),f&&d.push(a[y]*(E-1)+l[y]+(t[$]-1)*r[y]+1-s[y]-s[y+p])}d.splice(0,0,g),d.splice(o?3:1,0,v)},$u=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,g)=>f*g,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((f,g)=>f+g,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,g)=>f+g,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}Nh(o,r,l,e.autoPad,e.group,i,d,n,a,s);let p=Object.assign({},e);return Object.assign(p,{kernelShape:r,pads:i,outputPadding:a,outputShape:s,dilations:l,strides:d}),p},yv=e=>{let t=oc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group??1,a=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),p=e.outputPadding,f=e.outputShape;return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,outputPadding:p,outputShape:f,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Uh=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Su=(e,t,r,n)=>{let i=e.kernelCustomData.wT??e.compute(mr(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(gv(s,r,n),{inputs:s})},Lh=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let d=$u({...t,pads:o,strides:a,dilations:s,kernelShape:i,outputPadding:l},n);Su(e,n,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},bv=(e,t)=>{if(Uh(e.inputs,t),e.inputs[0].dims.length===3)Lh(e,t);else{let r=$u(t,e.inputs);Su(e,e.inputs,r)}}}),Fh,vv,wv,c$=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),Fh=(e,t,r,n)=>{let i=K.size(t),s=t.length,a=Q("input",e,s),o=Ie("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=K.normalizeAxis(l,s),p=f=>{let g=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,v=Oe("uniforms.input_shape","uniforms.axis",s),y=n.reverse?g+(n.exclusive?" + 1":""):"0",$=n.reverse?v:g+(n.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...ze(t,t)]}),getShaderSource:p}},vv=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(Fh(n,r,i,t),{inputs:[0]})},wv=e=>{let t=e.exclusive===1,r=e.reverse===1;return ot({exclusive:t,reverse:r})}}),Vh,jh,Wh,_v,xv,p$=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),Vh=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},jh=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)i.push(r.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},Wh=(e,t)=>{let r,n,i,s,a,o,l=t.format==="NHWC",d=t.blocksize,p=t.mode==="DCR";l?([r,n,i,s]=e.dims,a=p?[r,n,i,d,d,s/d**2]:[r,n,i,s/d**2,d,d],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=p?[r,d,d,s/d**2,n,i]:[r,s/d**2,d,d,n,i],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(a),g=f.dims.length,v=e.dataType,y=Q("a",v,g),$=Ie("output",v,g),E=S=>`
  ${S.registerUniform("output_size","u32").declareVariables(y,$)}

  ${jh(o,g,y,$)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:S=>{let x=l?[r,n*d,i*d,s/d**2]:[r,s/d**2,n*d,i*d],A=K.size(x),C=f.dims,O=K.sortBasedOnPerm(C,o);return{outputs:[{dims:x,dataType:S[0].dataType}],dispatchGroup:{x:Math.ceil(A/64)},programUniforms:[{type:12,data:A},...ze(C,O)]}},getShaderSource:E}},_v=(e,t)=>{Vh(e.inputs),e.compute(Wh(e.inputs[0],t))},xv=e=>ot({blocksize:e.blocksize,mode:e.mode,format:e.format})}),mn,Os,go,Tu,Bn,qh,Hh,Gh,ku,Cu,Eu,Kh,Xh,Iu,Yh,$v,Sv,f$=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),mn=256,Os=512,go=2*Math.PI,Tu=e=>{let t=[],r=e;for(let n of[4,2,3,5])for(;r%n===0;)t.push(n),r/=n;return r===1?t:void 0},Bn=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},qh=(e,t,r,n,i)=>{let s=r/e,a=Os-n,o=d=>`smem[${a}u + base + ${d*t}u]`,l=`  for (var t = local_idx; t < ${s}u; t += ${mn}u) {
`;l+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,l+=`    var leg: array<vec2<f32>, 5>;
`;for(let d=0;d<e;d++){let p=`${n}u + t + ${d*s}u`;if(d===0)l+=`    leg[0] = smem[${p}];
`;else{let f=i*go*d/(e*t);l+=`    { let a = ${Bn(f)} * angleUnit; leg[${d}] = cmul(smem[${p}], vec2<f32>(cos(a), sin(a))); }
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
`}else for(let d=0;d<e;d++){let p=["leg[0]"];for(let f=1;f<e;f++){let g=i*go*(f*d)/e,v=Bn(Math.cos(g)),y=Bn(Math.sin(g));p.push(`vec2<f32>(leg[${f}].x*${v} - leg[${f}].y*${y}, leg[${f}].x*${y} + leg[${f}].y*${v})`)}l+=`    ${o(d)} = ${p.join(" + ")};
`}return`${l}  }
  workgroupBarrier();
`},Hh=(e,t,r)=>{let n="",i=1,s=0;for(let a of e)n+=qh(a,i,t,s,r),i*=a,s=Os-s;return{code:n,resultOffset:s}},Gh=(e,t,r,n,i)=>{let s=e.dims,a=s.length,o=s[a-1],l=s[t],d=r&&n?(l-1)*2:l;i!==void 0&&(d=i);let p=r&&n?1:2,f=n&&!r?Math.floor(d/2)+1:d,g=s.slice();g[t]=f,g[a-1]=p;let v=1;for(let $=t+1;$<a-1;$++)v*=s[$];let y=K.size(s)/o/l;return{dataType:e.dataType,outputDims:g,length:d,signalLength:l,inner:v,batch:y,inputComponents:o,outputComponents:p,outputLength:f,inverse:r,onesided:n}},ku=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),Cu=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],Eu=(e,t,r)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,r),Kh=e=>{let{dataType:t,length:r,inputComponents:n,outputComponents:i,inverse:s,onesided:a}=e,o=Dt(t),l=s?1:-1,d=s?1/r:1,p=Tu(r),f=g=>{let v=Q("x",t,[1]),y=Ie("y",t,[1]),$=O=>{let D=`inBase + (${O}) * uniforms.inner * ${n}u`,N=`f32(${v.getByOffset(D)})`,k=n===2?`f32(${v.getByOffset(`${D} + 1u`)})`:"0.0";return`vec2<f32>(${N}, ${k})`},E;if(s&&a){let O=Math.floor(r/2)+1,D=r%2===0?`select(provided, provided - 1u, provided == ${O}u)`:"provided";E=`
    let provided = min(uniforms.signalLength, ${O}u);
    for (var i = local_idx; i < ${r}u; i += ${mn}u) {
      if (i < provided) { smem[i] = ${$("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${D}; k += ${mn}u) {
      let h = smem[k];
      smem[${r}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else E=`
    let loadCount = min(uniforms.signalLength, ${r}u);
    for (var i = local_idx; i < ${r}u; i += ${mn}u) {
      if (i < loadCount) { smem[i] = ${$("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:S,resultOffset:x}=Hh(p,r,l),A=d===1?`smem[${x}u + i]`:`smem[${x}u + i] * ${Bn(d)}`,C=i===2?y.setByOffset("off + 1u",`${o}(v.y)`):"";return`
  ${Eu(g,v,y)}
  var<workgroup> smem: array<vec2<f32>, ${2*Os}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${g.mainStart(mn)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${n}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${i}u;
    ${E}
${S}    for (var i = local_idx; i < uniforms.outputLength; i += ${mn}u) {
      let v = ${A};
      let off = outBase + i * uniforms.inner * ${i}u;
      ${y.setByOffset("off",`${o}(v.x)`)}
      ${C}
    }
  }`};return{name:"DFT",shaderCache:{hint:ku(e,"fft"),inputDependencies:["type"]},getShaderSource:f,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Cu(e),dispatchGroup:{x:e.batch}})}},Xh=e=>{let{dataType:t,length:r,inputComponents:n,outputComponents:i,inverse:s,onesided:a}=e,o=Dt(t),l=s?1:-1,d=s?1/r:1,p=f=>{let g=Q("x",t,[1]),v=Ie("y",t,[1]),y=A=>{let C=`inBase + (${A}) * uniforms.inner * ${n}u`,O=`f32(${g.getByOffset(C)})`,D=n===2?`f32(${g.getByOffset(`${C} + 1u`)})`:"0.0";return`vec2<f32>(${O}, ${D})`},$=s&&a?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
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
      let angle = ${Bn(l*go)} * f32(knMod) / ${Bn(r)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${r}u) { knMod -= ${r}u; }`,S=i===2?v.setByOffset("off + 1u",`${o}(v.y)`):"",x=d===1?"acc":`acc * ${Bn(d)}`;return`
  ${Eu(f,g,v)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${$}
  ${f.mainStart(mn)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${n}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${i}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${mn}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${r}u; n++) {${E}
      }
      let v = ${x};
      let off = outBase + k * uniforms.inner * ${i}u;
      ${v.setByOffset("off",`${o}(v.x)`)}
      ${S}
    }
  }`};return{name:"DFT",shaderCache:{hint:ku(e,"direct"),inputDependencies:["type"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Cu(e),dispatchGroup:{x:e.batch}})}},Iu=e=>{if(!e||e.dataType===0)return;if(K.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},Yh=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let r=t[t.length-1];if(r!==1&&r!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},$v=(e,t)=>{Yh(e.inputs);let r=e.inputs[0],n=r.dims.length,i=t.inverse!==0,s=t.onesided!==0,a=Iu(e.inputs[1]);if(a!==void 0&&a<=0)throw new Error("dft_length must be greater than zero.");let o=K.normalizeAxis(Iu(e.inputs[2])??t.axis,n);if(o===n-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(i&&s&&r.dims[n-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let l=Gh(r,o,i,s,a);if(l.length<=0)throw new Error(`Invalid DFT length: ${l.length}`);let d=l.length<=Os&&Tu(l.length)!==void 0?Kh(l):Xh(l);e.compute(d,{inputs:[0]})},Sv=e=>ot({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),yo,zs,Au,Zh,Qh,Jh,em,Ou,tm,Tv,kv,h$=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),yo="[a-zA-Z]|\\.\\.\\.",zs="("+yo+")+",Au="^"+zs+"$",Zh="("+zs+",)*"+zs,Qh="^"+Zh+"$",Jh=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},em=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Qh)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,s)=>{let a=e[s].dims.slice();if(!i.match(RegExp(Au)))throw new Error("Invalid LHS term");let o=this.processTerm(i,!0,a,s);this.lhs.push(o)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([i,s])=>s.count===1||i==="...").map(([i])=>i).join("");else if(!n.match(RegExp(zs)))throw new Error("Invalid RHS");n.match(RegExp(yo,"g"))?.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(i);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,s=!1,a=[],o=0;if(!e.match(RegExp(Au))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(yo,"g")),d=new Jh(n);return l?.forEach((p,f)=>{if(p==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let g=i-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(o,o+g),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let v=0;v<a.length;v++){let y=String.fromCharCode(48+v);d.addSymbol(y,f+v),this.addSymbol(y,r[o++],n)}}else d.addSymbol(p,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,r[o++],n)}),d}},Ou=e=>e+"_max",tm=(e,t,r,n)=>{let i=e.map(d=>d.length).map((d,p)=>Q(`input${p}`,t,d)),s=K.size(n),a=Ie("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let p=[],f="var prod = 1.0;",g="var sum = 0.0;",v="sum += prod;",y=[],$=[],E=[],S=[],x=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((C,O)=>{if(r.rhs.symbolToIndices.has(O)){let D=r.rhs.symbolToIndices.get(O)?.[0];D!==void 0&&r.lhs.forEach((N,k)=>{if(C.inputIndices.includes(k)){let q=N.symbolToIndices.get(O);if(q===void 0)throw new Error("Invalid symbol error");q.forEach(Z=>{p.push(`${i[k].indicesSet(`input${k}Indices`,Z,a.indicesGet("outputIndices",D))}`)})}})}else r.lhs.forEach((D,N)=>{if(C.inputIndices.includes(N)){let k=D.symbolToIndices.get(O);if(k===void 0)throw new Error("Invalid symbol error");k.forEach(q=>{y.push(`${i[N].indicesSet(`input${N}Indices`,q,`${O}`)}`)}),S.push(`prod *= ${i[N].getByIndices(`input${N}Indices`)};`)}}),$.push(`for(var ${O}: u32 = 0; ${O} < uniforms.${Ou(O)}; ${O}++) {`),E.push("}")});let A=x?[...p,`let sum = ${i.map((C,O)=>C.getByIndices(`input${O}Indices`)).join(" * ")};`]:[...p,g,...$,...y,f,...S,v,...E];return`
            ${d.registerUniforms(o.map(C=>({name:`${Ou(C)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((C,O)=>`var input${O}Indices: ${i[O].type.indices};`).join(`
`)}
            ${A.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));d.push({type:12,data:s});let p=e.map((f,g)=>[...ze(f)]).reduce((f,g)=>f.concat(g),d);return p.push(...ze(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}},getShaderSource:l}},Tv=(e,t)=>{let r=new em(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((s,a)=>s.dims);e.compute(tm(i,e.inputs[0].dataType,r,n))},kv=e=>{let t=e.equation.replace(/\s+/g,"");return ot({equation:t})}}),rm,zu,nm,im,Cv,m$=ce(()=>{"use strict";Be(),Ne(),Ue(),rm=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},zu=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},nm=(e,t)=>e.length>t.length?zu(e,t):zu(t,e),im=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=nm(t,r),i=e[0].dataType,s=i===9||K.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||n.length>0&&n[n.length-1]%4===0?4:1,l=Math.ceil(K.size(n)/o),d=f=>{let g=Q("input",i,t.length,a),v=Ie("output",i,n.length,o),y;if(i===9){let $=(E,S,x="")=>`
          let outputIndices${S} = ${v.offsetToIndices(`outputOffset + ${S}u`)};
          let offset${S} = ${g.broadcastedIndicesToOffset(`outputIndices${S}`,v)};
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
        ${v.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${v.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",v)};
        let data = ${v.type.value}(${g.getByOffset(`inputOffset / ${a}`)});
        ${v.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(g,v)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},p=[{type:12,data:l},...ze(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p})}},Cv=e=>{rm(e.inputs),e.compute(im(e.inputs),{inputs:[0]})}}),sm,Ev,g$=ce(()=>{"use strict";Be(),Ne(),Ue(),ac(),sm=e=>{let t=e[0].dataType,r=K.size(e[0].dims),n=K.size(e[1].dims),i=n%4===0,s=a=>{let o=Q("x",t,[1],4),l=Q("bias",t,[1],4),d=Ie("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=v=>`
      let bias${v}_offset: u32 = (global_idx * 4 + ${v}) % uniforms.bias_size;
      let bias${v} = ${l.getByOffset(`bias${v}_offset / 4`)}[bias${v}_offset % 4];`,g=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(p).declareVariables(o,l,d)}

    ${vd(Dt(t))}

    ${a.mainStart(ls)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",wd("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/ls/4)}})}},Ev=e=>{e.inputs.length<2||K.size(e.inputs[1].dims)===0?Hb(e):e.compute(sm(e.inputs))}}),am,om,Iv,Av,y$=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),am=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},om=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=K.normalizeAxis(t.axis,i),a=r.slice(0);a.splice(s,1,...n);let o=r[s],l=e[0].dataType===9?4:1,d=Math.ceil(K.size(a)/l),p=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...ze(e[0].dims,e[1].dims,a)],f=g=>{let v=Q("data",e[0].dataType,e[0].dims.length,l),y=Q("inputIndices",e[1].dataType,e[1].dims.length),$=Ie("output",e[0].dataType,a.length,l),E=x=>{let A=n.length,C=`var indicesIndices${x}  = ${y.type.indices}(0);`;for(let O=0;O<A;O++)C+=`${A>1?`indicesIndices${x}[${O}]`:`indicesIndices${x}`} = ${a.length>1?`outputIndices${x}[uniforms.axis + ${O}]`:`outputIndices${x}`};`;C+=`
          var idx${x} = ${y.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${v.type.indices};
        `;for(let O=0,D=0;O<i;O++)O===s?(C+=`${i>1?`dataIndices${x}[${O}]`:`dataIndices${x}`} = u32(idx${x});`,D+=A):(C+=`${i>1?`dataIndices${x}[${O}]`:`dataIndices${x}`} = ${a.length>1?`outputIndices${x}[${D}]`:`outputIndices${x}`};`,D++);return C},S;if(e[0].dataType===9){let x=(A,C,O="")=>`
          let outputIndices${C} = ${$.offsetToIndices(`outputOffset + ${C}u`)};
          ${E(C)};
          let offset${C} = ${v.indicesToOffset(`dataIndices${C}`)};
          let index${C} = offset${C} / 4u;
          let component${C} = offset${C} % 4u;
          ${A}[${C}] = ${O}(${v.getByOffset(`index${C}`)}[component${C}]);
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
      let value = ${v.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(v,y,$)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${S}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f}},Iv=e=>ot({axis:e.axis}),Av=(e,t)=>{let r=e.inputs;am(r),e.compute(om(e.inputs,t))}}),lm,Ov,zv,b$=ce(()=>{"use strict";Be(),Ne(),Ue(),lm=(e,t,r,n,i,s,a,o,l)=>{let d=[{type:12,data:s},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:12,data:o},{type:12,data:l}],p=[s];d.push(...ze(t.dims,p));let f=g=>{let v=Q("indices_data",t.dataType,t.dims.length),y=Ie("input_slice_offsets_data",12,1,1),$=[v,y],E=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},Ov=(e,t)=>{let r=e.inputs,n=r[0].dims,i=r[0].dataType,s=r[1].dims,a=s[s.length-1],o=K.sizeToDimension(s,s.length-1),l=K.sizeFromDimension(n,t.batchDims+a),d=K.sizeToDimension(n,t.batchDims),p=K.sizeFromDimension(n,t.batchDims),f=o/d,g=new Array(a),v=l;for(let C=0;C<a;++C)g[a-1-C]=v,v*=n[t.batchDims+a-1-C];let y=lm(e,r[1],g,t.batchDims,n,o,f,p,a),$=t.batchDims+a;if($>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let E=s.slice(0,-1).concat(n.slice($)),S=K.size(E),x=[{type:12,data:S},{type:12,data:l},...ze(r[0].dims,y.dims,E)],A=C=>{let O=Q("data",r[0].dataType,r[0].dims.length),D=Q("slice_offsets",12,y.dims.length),N=Ie("output",r[0].dataType,E.length);return`
          ${C.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(O,D,N)}
            ${C.mainStart()}
            ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:E,dataType:i}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:x}),getShaderSource:A},{inputs:[r[0],y]})},zv=e=>({batchDims:e.batch_dims,cacheKey:""})}),um,dm,Mv,Rv,v$=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),um=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=K.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,l)=>l===r?Math.ceil(o/n)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},dm=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=K.normalizeAxis(t.gatherAxis,i),a=K.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(s,1,...n);let l=K.size(o),d=e[2].dataType,p=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...ze(...e.map((v,y)=>v.dims),o)],g=v=>{let y=Q("data",e[0].dataType,e[0].dims.length),$=Q("inputIndices",e[1].dataType,e[1].dims.length),E=Q("scales",e[2].dataType,e[2].dims.length),S=e.length>3?Q("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=Ie("output",d,o.length),A=[y,$,E];S&&A.push(S);let C=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${v.registerUniforms(C).declareVariables(...A,x)}
        ${v.mainStart()}
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
        let quantize_axis_index = ${E.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${E.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${E.getByIndices("scale_indices")};
        ${S?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${S.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${S.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Dt(d)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((v,y)=>y!==1).map(v=>v.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(v,y)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:g}},Mv=(e,t)=>{let r=e.inputs;um(r,t),e.compute(dm(e.inputs,t))},Rv=e=>ot({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),cm,pm,Bv,Pv,w$=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),cm=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},pm=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,s=e[1].dims,a=e[1].dataType,o=K.normalizeAxis(t.axis,i),l=r[o],d=s.slice(0),p=K.size(d),f=Q("input",n,i),g=Q("indicesInput",a,s.length),v=Ie("output",n,d.length),y=[{type:12,data:p},{type:6,data:l},{type:12,data:o}];return y.push(...ze(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:y}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,g,v)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${v.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${v.setByOffset("global_idx","value")};
  }`}},Bv=e=>ot({axis:e.axis}),Pv=(e,t)=>{let r=e.inputs;cm(r),e.compute(pm(e.inputs,t))}}),fm,hm,Dv,Nv,_$=ce(()=>{"use strict";Be(),Ne(),Ue(),fm=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},hm=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,s,a]=zy.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(s/l),p=Math.ceil(i/l),f=!0,g=K.size(o),v=[{type:12,data:f?d:g},{type:12,data:i},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(v.push(...ze(e[2].dims)),y.push("rank")),v.push(...ze(o));let $=S=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let A=t.alpha===1?"":"value *= uniforms.alpha;",C=Q("a",e[0].dataType,e[0].dims),O=Q("b",e[1].dataType,e[1].dims),D=C.type.value,N=null,k=[C,O];e.length===3&&(N=Q("c",e[2].dataType,e[2].dims.length),k.push(N));let q=Ie("output",e[0].dataType,o.length);k.push(q);let Z=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
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
  }`},E=S=>{let x=Q("a",e[0].dataType,e[0].dims),A=Q("b",e[1].dataType,e[1].dims),C=null,O=[x,A];e.length===3&&(C=Q("c",e[2].dataType,e[2].dims.length),O.push(C));let D=Ie("output",e[0].dataType,o.length);O.push(D);let N=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],k="",q="";t.transA&&t.transB?(q=`
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
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",D)}; value += ${D.type.value}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*p},programUniforms:v}),getShaderSource:E}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:v}),getShaderSource:$}},Dv=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Nv=(e,t)=>{fm(e.inputs),e.compute(hm(e.inputs,t))}}),Gr,gn,mi,gi,mm,gm,ym,bm,vm,wm,_m,xm,Uv,Lv,x$=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),[Gr,gn,mi,gi]=[0,1,2,3],mm=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},gm=`
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
`,ym=e=>`
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
`,bm=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,vm=e=>`
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
`,wm=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Gr}] = batch;
     indices[${gn}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${mi}] = u32(r);
            indices[${gi}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${mi}] = u32(clamp(r, 0, H - 1));
          indices[${gi}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${mi}] = gs_reflect(r, border[1], border[3]);
          indices[${gi}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,_m=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Gr}], indices[${gn}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Gr}], indices[${gn}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Gr}], indices[${gn}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Gr}], indices[${gn}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Gr}], indices[${gn}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Gr}], indices[${gn}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,xm=(e,t)=>{let r=Q("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Q("grid",e[1].dataType,n.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Gr,gn,mi,gi]=[0,3,1,2]);let a=Ie("output",e[0].dataType,s.length),o=r.type.value,l=K.size(s),d=[{type:12,data:l},...ze(e[0].dims,n,s)],p=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,i,a)}
  ${gm}
  ${ym(o)}
  ${bm(t)}
  ${vm(t)}
  ${wm(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${mi}]);
      let W_in = i32(uniforms.x_shape[${gi}]);

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
      var grid_indices = vec3<u32>(indices[${Gr}], indices[${mi}], indices[${gi}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${_m(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let g=K.size(s);return{outputs:[{dims:s,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:p}},Uv=(e,t)=>{mm(e.inputs),e.compute(xm(e.inputs,t))},Lv=e=>ot({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),tr,$m,Fv,Mu,Sm,Fs,Vv,jv=ce(()=>{"use strict";Be(),Ne(),At(),rc(),sc(),Ue(),Hn(),tr=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,$m=(e,t)=>{let r=e[0],n=tr(e,1),i=tr(e,2),s=tr(e,3),a=tr(e,4),o=tr(e,5),l=tr(e,6),d=tr(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=r.dims[0],f=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],v=f,y=0,$=0,E=Math.floor(g/t.numHeads);if(l&&d&&K.size(l.dims)&&K.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[3]!==E)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[3]!==E)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],$=l.dims[2]}else if(l&&K.size(l.dims)||d&&K.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S;if(n&&K.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');S=2,v=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==E)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');S=5,v=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==E)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');S=0,v=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}if(s&&K.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=y+v,A=0;if(a&&K.size(a.dims)>0){A=8;let N=a.dims;throw N.length===1?N[0]===p?A=1:N[0]===3*p+2&&(A=3):N.length===2&&N[0]===p&&N[1]===x&&(A=5),A===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let C=!1,O=g;if(i&&K.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(v!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');O=i.dims[2]}else{if(v!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');O=i.dims[1]*i.dims[3],C=!0}}let D=!1;if(a&&K.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&K.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:f,pastSequenceLength:y,kvSequenceLength:v,totalSequenceLength:x,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:g,vHiddenSize:O,headSize:E,vHeadSize:Math.floor(O/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:A,scale:t.scale,broadcastResPosBias:D,passPastInKv:C,qkvFormat:S}},Fv=e=>ot({...e}),Mu=ot({perm:[0,2,1,3]}),Sm=(e,t,r,n,i,s,a)=>{let o=[n,i,s],l=K.size(o),d=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],p=f=>{let g=Ie("qkv_with_bias",t.dataType,o),v=Q("qkv",t.dataType,o),y=Q("bias",r.dataType,o),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms($).declareVariables(v,y,g)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p},{inputs:[t,r],outputs:[-1]})[0]},Fs=(e,t,r,n,i,s,a,o)=>{let l=s;if(a&&K.size(a.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Sm(e,s,a,t,n,r*i,o),l=l.reshape([t,n,r,i]),r===1||n===1?l:e.compute(mr(l,Mu.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,n,r,i])),r===1||n===1?l:e.compute(mr(l,Mu.perm),{inputs:[l],outputs:[-1]})[0]},Vv=(e,t)=>{let r=$m(e.inputs,t),n=e.inputs[0],i=tr(e.inputs,1),s=tr(e.inputs,2),a=tr(e.inputs,3),o=tr(e.inputs,4),l=tr(e.inputs,5),d=tr(e.inputs,6),p=tr(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");let f=i&&s&&i.dims.length===4&&s.dims.length===4,g=Fs(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,a,0);if(f)return ua(e,g,i,s,o,void 0,d,p,l,r);if(!i||!s)throw new Error("key and value must be provided");let v=Fs(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,a,r.hiddenSize),y=Fs(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);ua(e,g,v,y,o,void 0,d,p,l,r)}}),Tm,km,Cm,Em,Td,Wv,qv,Hv=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),Tm=e=>{if(!e||e.length<1)throw new Error("too few inputs")},km=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),ot({numOutputs:n,axis:t.axis,splitSizes:r})},Cm=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Oe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Em=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Td=(e,t)=>{let r=e[0].dims,n=K.size(r),i=e[0].dataType,s=K.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),o=Q("input",i,r.length),l=new Array(t.numOutputs),d=[],p=[],f=0,g=[{type:12,data:n}];for(let y=0;y<t.numOutputs;y++){f+=t.splitSizes[y],l[y]=f;let $=r.slice();$[s]=t.splitSizes[y],p.push($),a[y]=Ie(`output${y}`,i,$.length),d.push({dims:p[y],dataType:e[0].dataType})}g.push({type:12,data:l},...ze(r,...p));let v=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${Cm(l.length)}
  ${Em(a)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Oe("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:g})}},Wv=(e,t)=>{Tm(e.inputs);let r=e.inputs.length===1?t:km(e.inputs,t);e.compute(Td(e.inputs,r),{inputs:[0]})},qv=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return ot({axis:t,numOutputs:n,splitSizes:r})}}),Im,qo,Gv,Kv=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),Im=(e,t)=>{let[r,n,i,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!K.areEqual(n.dims,[])&&!K.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!K.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],p=i.dims[0],f=K.sizeFromDimension(r.dims,1)/d,g=o===0?i.dims[1]*2:f/a;if(o>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(l!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(d>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},qo=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:s}=t,a=e[0].dims[0],o=K.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,p=e[2].dims[1],f=i===0?p*2:d/n,g=new Array(a,l,d/f,f-p),v=K.computeStrides(g),y=[{type:1,data:s},{type:12,data:g},{type:12,data:v},...e[0].dims.length===3?new Array({type:12,data:[o,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,l*f,1]}):[],...ze(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=E=>{let S=Q("input",e[0].dataType,e[0].dims.length),x=Q("position_ids",e[1].dataType,e[1].dims.length),A=Q("cos_cache",e[2].dataType,e[2].dims.length),C=Q("sin_cache",e[3].dataType,e[3].dims.length),O=Ie("output",e[0].dataType,e[0].dims.length);return E.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:v.length},{name:"input_output_strides",type:"u32",length:v.length}]),`
        ${E.declareVariables(S,x,A,C,O)}

        ${E.mainStart(ls)}
          let half_rotary_emb_dim = uniforms.${A.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",Ie("",x.type.tensor,2))};
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
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ot({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(g)/ls)},programUniforms:y})}},Gv=(e,t)=>{Im(e.inputs,t),e.compute(qo(e.inputs,t))}}),Am,Om,Ru,zm,Xv,$$=ce(()=>{"use strict";At(),Be(),sc(),jv(),Hv(),Hn(),Kv(),Ue(),Am=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],p=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,g=0,v=!n||n.dims.length===0,y=Math.floor(v?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);v&&(p=y*t.numHeads);let $=s&&s.dims.length!==0,E=a&&a.dims.length!==0;if($&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if($&&E){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=s.dims[2]}else if($||E)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');f=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}let x=0,A=!1,C=t.kvNumHeads?y*t.kvNumHeads:p;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');C=i.dims[1]*i.dims[3],A=!0}}let O=e.length>4?e[5]:void 0;if(O){if(O.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let D=O.dims.reduce((N,k)=>N*k,1);if(D!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${D}.`);for(let N=0;N<O.dims.length;N++)if(O.dims[N]!==1&&O.dims[N]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${N}] = ${O.dims[N]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:C,headSize:y,vHeadSize:Math.floor(C/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:A,qkvFormat:S}},Om=ot({perm:[0,2,1,3]}),Ru=(e,t,r)=>{let n=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute(mr(n,Om.perm),{inputs:[n],outputs:[-1]})[0]),n},zm=(e,t,r,n)=>{let i=7,s=["type","type"],a=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=p=>{let f=Q("seq_lens",r.dataType,r.dims),g=Q("total_seq_lens",n.dataType,n.dims),v=Ie("pos_ids",i,a),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${p.registerUniforms(y).declareVariables(f,g,v)}
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
      ${v.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${v.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${v.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},Xv=(e,t)=>{if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let r=Am(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=ot({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,p*r.headSize,p*r.headSize]}),[g,v,y]=!i&&!s?e.compute(Td([n],f),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,s],$,E;if(t.doRotary){let C=e.compute(zm(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],O=e.inputs[7],D=e.inputs[8],N=ot({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),k=[g,C,O,D],q=[-1];$=e.compute(qo(k,N),{inputs:k,outputs:q})[0],k.splice(0,1,v);let Z=ot({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});E=e.compute(qo(k,Z),{inputs:k,outputs:q})[0]}let S=Fs(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?$:g,void 0,0),x=Ru(e,t.doRotary?E:v,r),A=Ru(e,y,r);ua(e,S,x,A,void 0,void 0,a,o,void 0,r,l,d)}}),Bu,Mm,Rm,Yv,S$=ce(()=>{"use strict";Be(),Ne(),Hn(),Ue(),Bu=(e,t,r,n,i,s,a,o)=>{let l=It(s),d=l===1?"f32":`vec${l}f`,p=l===1?"vec2f":`mat2x${l}f`,f=i*a,g=64;f===1&&(g=256);let v=[i,a,s/l],y=[i,a,2],$=["rank","type","type"],E=[];E.push(...ze(v,y));let S=x=>{let A=Q("x",t.dataType,3,l),C=Q("scale",r.dataType,r.dims),O=Q("bias",n.dataType,n.dims),D=Ie("output",1,3,2),N=[A,C,O,D];return`
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
      let sum_final = ${qn("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${qn("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${g}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:f},programUniforms:E}),getShaderSource:S},{inputs:[t,r,n],outputs:[-1]})[0]},Mm=(e,t,r)=>{let n=t[0].dims,i=n,s=2,a=n[0],o=n[1],l=K.sizeFromDimension(n,s),d=It(l),p=K.size(i)/d,f=Bu(e,t[0],t[1],t[2],a,l,o,r.epsilon),g=[a,o,l/d],v=[a,o],y=["type","none"],$=E=>{let S=Q("x",t[0].dataType,g.length,d),x=Q("scale_shift",1,v.length,2),A=Ie("output",t[0].dataType,g.length,d),C=[S,x,A];return`
  ${E.registerUniform("output_size","u32").declareVariables(...C)}
  ${E.mainStart()}
  ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${A.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${S.getByOffset("global_idx")} * ${A.type.value}(scale_shift.x) + ${A.type.value}(scale_shift.y);
      ${A.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...ze(g,v,g)]}),getShaderSource:$},{inputs:[t[0],f]})},Rm=(e,t,r)=>{let n=t[0].dims,i=n,s=n[0],a=n[n.length-1],o=K.sizeFromDimension(n,1)/a,l=It(a),d=K.size(i)/l,p=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],f=["type","type"],g=!1,v=[0,n.length-1];for(let S=0;S<n.length-2;S++)g=g||n[S+1]!==1,v.push(S+1);g=g&&n[n.length-1]!==1;let y=g?e.compute(mr(e.inputs[0],v),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(S,x)=>n[v[x]])),$=Bu(e,y,t[1],t[2],s,o,a,r.epsilon),E=S=>{let x=Ut(t[0].dataType),A=l===1?"vec2f":`mat${l}x2f`,C=N=>{let k=N===0?"x":"y",q=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${x}(${q}(scale.${k}))`;case 2:return`vec2<${x}>(${q}(scale[0].${k}, scale[1].${k}))`;case 4:return`vec4<${x}>(${q}(scale[0].${k}, scale[1].${k}, scale[2].${k}, scale[3].${k}))`;default:throw new Error(`Not supported compoents ${l}`)}},O=Q("input",t[0].dataType,t[0].dims,l),D=Ie("output",t[0].dataType,i,l);return`
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
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:E},{inputs:[t[0],$]})},Yv=(e,t)=>{t.format==="NHWC"?Rm(e,e.inputs,t):Mm(e,e.inputs,t)}}),Bm,Pm,Zv,T$=ce(()=>{"use strict";Be(),Ne(),Ue(),Bm=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Pm=(e,t,r)=>{let n=t.simplified,i=e[0].dims,s=e[1],a=!n&&e[2],o=i,l=K.normalizeAxis(t.axis,i.length),d=K.sizeToDimension(i,l),p=K.sizeFromDimension(i,l),f=K.size(s.dims),g=a?K.size(a.dims):0;if(f!==p||a&&g!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${g}`);let v=[];for(let O=0;O<i.length;++O)O<l?v.push(i[O]):v.push(1);let y=It(p),$=["type","type"],E=[{type:12,data:d},{type:1,data:p},{type:12,data:Math.floor(p/y)},{type:1,data:t.epsilon}];a&&$.push("type");let S=r>1,x=r>2,A=O=>{let D=Ut(e[0].dataType),N=[Q("x",e[0].dataType,e[0].dims,y),Q("scale",s.dataType,s.dims,y)];a&&N.push(Q("bias",a.dataType,a.dims,y)),N.push(Ie("output",e[0].dataType,o,y)),S&&N.push(Ie("mean_data_output",1,v)),x&&N.push(Ie("inv_std_output",1,v));let k=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${O.registerUniforms(k).declareVariables(...N)}
  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${gd("f32",y)};
    var mean_square_vector = ${gd("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ji(D,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${qn("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${qn("mean_square_vector",y)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ji(D,y,"x[j + offset]")};
      let f32scale = ${Ji(D,y,"scale[j]")};
      output[j + offset] = ${N[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Ji(D,y,"bias[j]")}`:""}
      );
    }

    ${S?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},C=[{dims:o,dataType:e[0].dataType}];return S&&C.push({dims:v,dataType:1}),x&&C.push({dims:v,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${n}`,inputDependencies:$},getRunData:()=>({outputs:C,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:E}),getShaderSource:A}},Zv=(e,t)=>{Bm(e.inputs),e.compute(Pm(e.inputs,t,e.outputCount))}}),Dm,Qv,k$=ce(()=>{"use strict";Ne(),dc(),cc(),Dm=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Qv=e=>{Dm(e.inputs);let t=os.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(uc(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=K.size(e.inputs[0].dims.slice(0,-2)),a=K.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&a===1){let o=e.inputs[0].reshape([1,s,n]),l=e.inputs[1].reshape([1,n,r]),d=[1,s,r],p=[o,l];e.compute(Wo(p,{activation:""},t,d),{inputs:p})}else e.compute(Wo(e.inputs,{activation:""},t))}}}),Nm,Um,Lm,Jv,ew,C$=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),Nm=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!K.areEqual(a.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(K.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(K.size(l)!==d)throw new Error("zeroPoints input size error.")}},Um=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=K.size(o),d=e[1].dims[2]/4,p=e[0].dataType,f=It(t.k),g=It(d),v=It(a),y=o.concat([i,a]),$=i>1&&a/v%2===0?2:1,E=K.size(y)/v/$,S=64,x=[],A=[l,i,s/f],C=K.convertShape(e[1].dims).slice();C.splice(-1,1,d/g),x.push(...ze(A)),x.push(...ze(C)),x.push(...ze(e[2].dims)),e.length===4&&x.push(...ze(K.convertShape(e[3].dims)));let O=[l,i,a/v];x.push(...ze(O));let D=N=>{let k=A.length,q=Q("a",e[0].dataType,k,f),Z=Q("b",12,C.length,g),ae=Q("scales",e[2].dataType,e[2].dims.length),X=[q,Z,ae],oe=e.length===4?Q("zero_points",12,e[3].dims.length):void 0;oe&&X.push(oe);let F=O.length,J=Ie("output",e[0].dataType,F,v),pe=Ut(e[0].dataType),le=(()=>{switch(f){case 1:return`array<${pe}, 8>`;case 2:return`mat4x2<${pe}>`;case 4:return`mat2x4<${pe}>`;default:throw new Error(`${f}-component is not supported.`)}})(),de=Math.floor(32/t.bits),_e=Math.floor(de/8),ke=()=>{let Se="";for(let ve=0;ve<_e;ve++){let _t=ve*t.bits*4,gt=_t+t.bits;Se+=`
          // reuse a data (pass ${ve})
            var input_offset${ve>0?ve:""} = ${ve===0?q.indicesToOffset(`${q.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${ve>0?ve:""}: ${le};
            for (var j${ve>0?ve:""}: u32 = 0; j${ve>0?ve:""} < ${8/f}; j${ve>0?ve:""}++) {
              a_data${ve>0?ve:""}[j${ve>0?ve:""}] = ${q.getByOffset(`input_offset${ve>0?ve:""}`)};
              input_offset${ve>0?ve:""}++;
            }
          `;for(let tt=0;tt<v*$;tt++)Se+=`
            b_value = ${g===1?`b${tt}_data`:`b${tt}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${ve*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${_t}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${gt}u) & b_mask);`}
            b_quantized_values = ${le}(${Array.from({length:4},(Ct,We)=>`${pe}(b_value_lower[${We}]), ${pe}(b_value_upper[${We}])`).join(", ")});
            b_dequantized_values = ${f===1?`${le}(${Array.from({length:8},(Ct,We)=>`(b_quantized_values[${We}] - ${oe?`zero_point${tt}`:"zero_point"}) * scale${tt}`).join(", ")});`:`(b_quantized_values - ${le}(${Array(8).fill(`${oe?`zero_point${tt}`:"zero_point"}`).join(",")})) * scale${tt};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(tt/v)}]${v>1?`[${tt%v}]`:""} += ${Array.from({length:8/f},(Ct,We)=>`${f===1?`a_data${ve>0?ve:""}[${We}] * b_dequantized_values[${We}]`:`dot(a_data${ve>0?ve:""}[${We}], b_dequantized_values[${We}])`}`).join(" + ")};
          `}return Se},te=()=>{let Se=`
            var col_index = col * ${v};
            ${oe?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${pe}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let ve=0;ve<v*$;ve++)Se+=`
            let scale${ve} = ${ae.getByOffset("col_index * nBlocksPerCol + block")};
            ${oe?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${oe.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${ve} = ${pe}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Se},$e=()=>{let Se=`col_index = col * ${v};`;for(let ve=0;ve<v*$;ve++)Se+=`
            let b${ve}_data = ${Z.getByIndices(`${Z.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Se+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${le};
            var b_dequantized_values: ${le};`,Se};return`
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
            ${te()}
            for (var word: u32 = 0; word < ${d}; word += ${g}) {
              ${$e()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${ke()}
                word_offset += ${de/f};
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
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${g};${v};${$};${S}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:p}],dispatchGroup:{x:E},programUniforms:x}),getShaderSource:D}},Lm=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=K.size(o),d=e[1].dims[2]/4,p=e[0].dataType,f=It(t.k),g=It(d),v=o.concat([i,a]),y=128,$=a%8===0?8:a%4===0?4:1,E=y/$,S=Math.floor(32/t.bits),x=E*g*S,A=x/f,C=x/t.blockSize,O=K.size(v)/$,D=[],N=[l,i,s/f],k=K.convertShape(e[1].dims).slice();k.splice(-1,1,d/g),D.push(...ze(N)),D.push(...ze(k)),D.push(...ze(e[2].dims)),e.length===4&&D.push(...ze(K.convertShape(e[3].dims)));let q=[l,i,a];D.push(...ze(q));let Z=ae=>{let X=N.length,oe=Q("a",e[0].dataType,X,f),F=Q("b",12,k.length,g),J=Q("scales",e[2].dataType,e[2].dims.length),pe=[oe,F,J],le=e.length===4?Q("zero_points",12,e[3].dims.length):void 0;le&&pe.push(le);let de=q.length,_e=Ie("output",e[0].dataType,de),ke=Ut(e[0].dataType),te=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${ke}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ke}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ke}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ke}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${oe.type.value}, ${A}>;
        var<workgroup> inter_results: array<array<${_e.type.value}, ${E}>, ${$}>;
        ${ae.declareVariables(...pe,_e)}
        ${ae.mainStart([E,$,1])}
          let output_indices = ${_e.offsetToIndices(`workgroup_index * ${$}`)};
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
                sub_a[a_offset] = ${oe.getByIndices(`${oe.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${oe.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${C} + local_id.x;
            ${le?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${le.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ke}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ke}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${J.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${F.getByIndices(`${F.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let $e=Math.floor(S/8),Se="";for(let ve=0;ve<$e;ve++){let _t=ve*t.bits*4,gt=_t+t.bits;Se+=`
              ${te()}
              {${t.bits===2?`
                let half_word = b_value >> ${ve*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${_t}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${gt}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ke}>(${Array.from({length:4},(tt,Ct)=>`${ke}(b_value_lower[${Ct}]), ${ke}(b_value_upper[${Ct}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ke}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(tt,Ct)=>`${`dot(a_data${Ct}, b_dequantized_values[${Ct}])`}`).join(" + ")};
              }
              word_offset += ${8/f};`}return Se})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${_e.type.value} = ${_e.type.value}(0);
            for (var b = 0u; b < ${E}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${_e.setByIndices(`${_e.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${g};${E};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:v,dataType:p}],dispatchGroup:{x:O},programUniforms:D}),getShaderSource:Z}},Jv=(e,t)=>{Nm(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Lm(e.inputs,t)):e.compute(Um(e.inputs,t))},ew=e=>ot(e)}),Fm,Vm,jm,Wm,qm,Hm,Gm,Km,tw,E$=ce(()=>{"use strict";Be(),Ne(),Ue(),Fm=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Vm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${Oe("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Oe("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${Oe("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},jm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Oe("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Oe("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Oe("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Oe("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Wm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Oe("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Oe("uniforms.x_shape",i,t)})) {
                  k = i32(${Oe("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${Oe("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},qm=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Oe("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${Oe("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${Oe("uniforms.x_shape",i,t)})) {
                  k -= i32(${Oe("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${Oe("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Hm=(e,t,r)=>{switch(r.mode){case 0:return Vm(e,t,r.pads.length);case 1:return jm(e,t,r.pads.length);case 2:return Wm(e,t,r.pads.length);case 3:return qm(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Gm=(e,t)=>{let r=K.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=K.size(r),s=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...ze(e[0].dims,r));let o=["rank"],l=d=>{let p=Ie("output",e[0].dataType,r.length),f=Q("x",e[0].dataType,n.length),g=f.type.value,v=Hm(p,n.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:a?g:"f32"}),`
            ${d.registerUniforms(y).declareVariables(f,p)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${v}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(r)/64)},programUniforms:s}),getShaderSource:l}},Km=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(r[l]),s[Number(o[l])+i]=Number(r[l+o.length])}else r.forEach((o,l)=>s[Number(l)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:n,pads:a}}else return t},tw=(e,t)=>{Fm(e.inputs);let r=Km(e.inputs,t);e.compute(Gm(e.inputs,r),{inputs:[0]})}}),Ms,Pu,Du,Nu,Uu,Xm,Ym,Lu,Fu,rw,nw,Vu,iw,sw,ju,aw,ow,lw,uw,I$=ce(()=>{"use strict";Ir(),Be(),Ne(),Ue(),Ms=e=>{if(bt.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Pu=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),l=s?t.dilations.slice():[],d=t.pads.slice();Vo.adjustPoolAttributes(r,i,a,o,l,d);let p=Vo.computePoolOutputShape(r,i,o,l,a,d,t.autoPad,t.ceilMode),f=Object.assign({},t);s?Object.assign(f,{kernelShape:a,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let g=p.slice();return g.push(g.splice(1,1)[0]),[f,n?g:p]},Du=(e,t)=>{let r=t.format==="NHWC",n=K.size(e),i=K.size(t.kernelShape),s=[{type:12,data:n},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],f=!!(d+p);s.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:p}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let v=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],E=t.pads[t.pads.length-2];g=!!($+E),s.push({type:12,data:v},{type:12,data:y},{type:12,data:$},{type:12,data:E}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,f,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=K.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,p)=>d+p);return[s,a,!!l,!1,!1]}},Nu=(e,t,r,n,i,s,a,o,l,d,p,f)=>{let g=i.format==="NHWC",v=t.type.value,y=Ie("output",t.type.tensor,n);if(i.kernelShape.length<=2){let $="",E="",S="",x=r-(g?2:1);if(p?$=`
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
                }`,i.kernelShape.length===2){let A=r-(g?3:2);f?E=`
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

              var value = ${v}(${o});
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

              var value = ${v}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${$-1}u; j++) {
                  offsets[j] = offset / ${Oe("uniforms.kernelStrides","j",$)};
                  offset -= offsets[j] * ${Oe("uniforms.kernelStrides","j",$)};
                }
                offsets[${$-1}] = offset;

                isPad = false;
                for (var j = ${r-$}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Oe("uniforms.strides",`j - ${r-$}u`,$)}
                    + offsets[j - ${r-$}u] - ${Oe("uniforms.pads","j - 2u",E)};
                  ${S}
              }
              ${a}

              output[global_idx] = value;
            }`}},Uu=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Xm=e=>`${Uu(e)};${e.countIncludePad}`,Ym=e=>`${Uu(e)};${e.storageOrder};${e.dilations}`,Lu=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Fu=(e,t,r,n)=>{let[i,s]=Pu(t,n,r),a=Q("x",t.dataType,t.dims.length),o=a.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,f,g,v,y]=Du(s,i);p.push(...ze(t.dims,s));let $=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${g};${v};${y}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(K.size(s)/64)},programUniforms:p}),getShaderSource:E=>Nu(E,a,t.dims.length,s.length,i,l,d,0,f,g,v,y)}},rw=e=>{let t=e.count_include_pad!==0,r=Lu(e);if(r.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:Xm(n)}},nw=(e,t)=>{Ms(e.inputs),e.compute(Fu("AveragePool",e.inputs[0],!1,t))},Vu={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},iw=e=>{let t=e.format;return{format:t,...Vu,cacheKey:t}},sw=(e,t)=>{Ms(e.inputs),e.compute(Fu("GlobalAveragePool",e.inputs[0],!0,t))},ju=(e,t,r,n)=>{let[i,s]=Pu(t,n,r),a=`
      value = max(x_val, value);
    `,o="",l=Q("x",t.dataType,t.dims.length),d=["rank"],[p,f,g,v,y]=Du(s,i);return p.push(...ze(t.dims,s)),{name:e,shaderCache:{hint:`${n.cacheKey};${g};${v};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(K.size(s)/64)},programUniforms:p}),getShaderSource:$=>Nu($,l,t.dims.length,s.length,i,a,o,t.dataType===10?-65504:-1e5,f,g,v,y)}},aw=(e,t)=>{Ms(e.inputs),e.compute(ju("MaxPool",e.inputs[0],!1,t))},ow=e=>{let t=e.storage_order,r=e.dilations,n=Lu(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:Ym(i)}},lw=e=>{let t=e.format;return{format:t,...Vu,cacheKey:t}},uw=(e,t)=>{Ms(e.inputs),e.compute(ju("GlobalMaxPool",e.inputs[0],!0,t))}}),Zm,Qm,dw,cw,A$=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),Zm=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Qm=(e,t)=>{let r=K.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,s=e[0].dims,a=e[1].dataType,o=K.size(s),l=n===3||n===2,d=l?[Math.ceil(K.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,f=e.length>2?e[2]:void 0,g=f?l?[Math.ceil(K.size(f.dims)/4)]:f.dims:void 0,v=p.length===0||p.length===1&&p[0]===1,y=v===!1&&p.length===1,$=It(o),E=v&&(!l||$===4),S=E?$:1,x=E&&!l?$:1,A=Q("input",l?12:n,d.length,x),C=Q("scale",a,p.length),O=f?Q("zero_point",l?12:n,g.length):void 0,D=Ie("output",a,s.length,S),N=[A,C];O&&N.push(O);let k=[d,p];f&&k.push(g);let q=[{type:12,data:o/S},{type:12,data:r},{type:12,data:t.blockSize},...ze(...k,s)],Z=ae=>{let X=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
          ${v?`let scale_value= ${C.getByOffset("0")}`:y?`
            let scale_index = ${D.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${C.getByOffset("scale_index")};`:`
            var scale_indices: ${C.type.indices} = output_indices;
            let index = ${C.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${C.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${C.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${O?v?l?`
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
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:O?["rank","rank","rank"]:["rank","rank"]},getShaderSource:Z,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/S/64),y:1,z:1},programUniforms:q})}},dw=(e,t)=>{Zm(e.inputs,t),e.compute(Qm(e.inputs,t))},cw=e=>ot({axis:e.axis,blockSize:e.blockSize})}),Jm,eg,pw,O$=ce(()=>{"use strict";Ir(),Be(),Ue(),Jm=(e,t,r)=>{let n=e===t,i=e<t&&r<0,s=e>t&&r>0;if(n||i||s)throw new Error("Range these inputs' contents are invalid.")},eg=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),s=[i],a=i,o=[{type:12,data:a},{type:n,data:e},{type:n,data:r},...ze(s)],l=d=>{let p=Ie("output",n,s.length),f=p.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(g).declareVariables(p)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},pw=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),bt.webgpu.validateInputContent&&Jm(t,r,n),e.compute(eg(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),tg,rg,fw,hw,z$=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),tg=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${s}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},rg=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r,s=1,a=Math.ceil(K.sizeToDimension(n,n.length-1)/s),o=n[n.length-1],l=K.sizeFromDimension(r,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:l},...ze(e[1].dims,e[2].dims,i)],p=f=>{let g=Q("indices",e[1].dataType,e[1].dims.length),v=Q("updates",e[2].dataType,e[2].dims.length,s),y=t.reduction!=="none"&&t.reduction!==""?Uy("output",e[0].dataType,i.length):Ie("output",e[0].dataType,i.length,s);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,v,y)}
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
    ${tg(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:p}},fw=e=>ot({reduction:e.reduction}),hw=(e,t)=>{e.compute(rg(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ng,ig,sg,Wu,ag,og,lg,ug,dg,cg,pg,fg,qu,hg,mg,gg,yg,bg,mw,gw,M$=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),ng=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},ig=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((i,s)=>n[i]=e[s]),n},sg=(e,t,r,n,i,s)=>{let[a,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(p=>s.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>n.push(p)),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");ng(n,t),t.axes.length>0&&ig(n,t.axes,d).forEach((p,f)=>n[f]=p)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(p=>i.push(Number(p))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Wu=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,ag=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",og=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",lg=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((s,a)=>{n[s]=i[a],n[a+r]=i[t.length+a]}),n):i},ug=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(s=>i.push(s)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((s,a)=>i[s]=r[a])}else r.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,a)=>Math.round(s*t[a]))}return i},dg=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=n),r.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(n,0,t.length),i.forEach((s,a)=>i[a]=Math.round(s*t[a]))),i},cg=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Oe("uniforms.scales","i",n)};
        var roi_low = ${Oe("uniforms.roi","i",i)};
        var roi_hi = ${Oe("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Oe("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Oe("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,pg=(e,t,r,n,i,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Oe("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Oe("uniforms.roi","i",s)};
          var roi_hi = ${Oe("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${Oe("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Oe("uniforms.output_shape","i",n.length)};
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
    }`,fg=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Oe("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,qu=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",hg=(e,t,r,n,i)=>{let[s,a,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
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
    }`},mg=(e,t,r,n,i,s,a,o,l,d)=>{let p=r.length===2,f=!0,[g,v]=p?[0,1]:f?[2,3]:[1,2],y=e.type.value,$=E=>{let S=E===g?"row":"col";return`
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
    ${$(v)};
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
    `},gg=(e,t,r,n,i)=>{let[s,a,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
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
    }`},yg=(e,t,r,n,i,s)=>{let a=e.dims,o=lg(s,t.axes,a.length),l=ug(a,n,i,t.axes),d=n.slice();n.length===0&&(d=a.map((x,A)=>x===0?1:l[A]/x),t.keepAspectRatioPolicy!=="stretch"&&(l=dg(a,d,t)));let p=Ie("output",e.dataType,l.length),f=Q("input",e.dataType,a.length),g=K.size(l),v=a.length===l.length&&a.every((x,A)=>x===l[A]),y=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,E=f.type.value,S=x=>`
      ${v?"":`
      ${ag(t.coordinateTransformMode,E)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${fg(f,a)};
              ${og(t.nearestMode,r,E)};
              ${pg(f,p,a,l,d.length,o.length,y)};
              `;case"linear":return`
              ${cg(p,a,l,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${hg(f,p,a,y,$)}`;if(a.length===3||a.length===5)return`${gg(f,p,a,y,$)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${mg(f,p,a,l,d,o,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(f,p)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${v?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${v}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:o},...ze(a,l)]})}},bg=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},mw=(e,t)=>{let r=[],n=[],i=[],s=bg(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");sg(e.inputs,t,s,r,n,i),e.compute(yg(e.inputs[0],t,s,r,n,i),{inputs:[0]})},gw=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return ot({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),vg,wg,yw,R$=ce(()=>{"use strict";Be(),Ne(),Ue(),vg=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},wg=(e,t,r,n)=>{let i=t.simplified,s=e[0].dims,a=K.size(s),o=s,l=a,d=s.slice(-1)[0],p=n?s.slice(0,-1).concat(1):[],f=!i&&e.length>3,g=e.length>4,v=n&&r>1,y=n&&r>2,$=r>3,E=64,S=It(d),x=[{type:12,data:l},{type:12,data:S},{type:12,data:d},{type:1,data:t.epsilon}],A=O=>{let D=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],N=[Q("x",e[0].dataType,e[0].dims,S),Q("skip",e[1].dataType,e[1].dims,S),Q("gamma",e[2].dataType,e[2].dims,S)];f&&N.push(Q("beta",e[3].dataType,e[3].dims,S)),g&&N.push(Q("bias",e[4].dataType,e[4].dims,S)),N.push(Ie("output",e[0].dataType,o,S)),v&&N.push(Ie("mean_output",1,p)),y&&N.push(Ie("inv_std_output",1,p)),$&&N.push(Ie("input_skip_bias_sum",e[0].dataType,o,S));let k=Ut(e[0].dataType),q=Ut(1,S);return`

      ${O.registerUniforms(D).declareVariables(...N)}
      var<workgroup> sum_shared : array<${q}, ${E}>;
      var<workgroup> sum_squared_shared : array<${q}, ${E}>;

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
          let bias_value = ${g?"bias[offset1d + i]":k+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Ji(k,S,"value")};
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
        let mean = ${qn("sum",S)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${qn("square_sum",S)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${v?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${k}(mean)`}) *
            ${k}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},C=[{dims:o,dataType:e[0].dataType}];return r>1&&C.push({dims:p,dataType:1}),r>2&&C.push({dims:p,dataType:1}),r>3&&C.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${S};${v};${y};${$}`,inputDependencies:e.map((O,D)=>"type")},getShaderSource:A,getRunData:()=>({outputs:C,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:x})}},yw=(e,t)=>{vg(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(wg(e.inputs,t,e.outputCount,!1),{outputs:r})}}),_g,Rs,xg,Hu,$g,Sg,bw,vw,B$=ce(()=>{"use strict";Be(),Ne(),At(),Ue(),_g=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},Rs=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},xg=(e,t)=>{if(e.length>1){let r=Rs(e,1),n=Rs(e,2),i=Rs(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),ot({starts:r,ends:n,axes:i})}else return t},Hu=(e,t,r,n,i)=>{let s=e;return e<0&&(s+=r[n[t]]),i[t]<0?Math.max(0,Math.min(s,r[n[t]]-1)):Math.max(0,Math.min(s,r[n[t]]))},$g=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${Oe("uniforms.input_shape","i",r.length)};
            let steps_i = ${Oe("uniforms.steps","i",r.length)};
            let signs_i = ${Oe("uniforms.signs","i",r.length)};
            let starts_i = ${Oe("uniforms.starts","i",r.length)};
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
      }`,Sg=(e,t)=>{let r=e[0].dims,n=K.size(r),i=t.axes.length>0?K.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=Rs(e,4);s.forEach(S=>S!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let a=t.starts.map((S,x)=>Hu(S,x,r,i,s)),o=t.ends.map((S,x)=>Hu(S,x,r,i,s));if(i.length!==a.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let S=0;S<r.length;++S)i.includes(S)||(a.splice(S,0,0),o.splice(S,0,r[S]),s.splice(S,0,1));let l=s.map(S=>Math.sign(S));s.forEach((S,x,A)=>{if(S<0){let C=(o[x]-a[x])/S,O=a[x],D=O+C*s[x];a[x]=D,o[x]=O,A[x]=-S}});let d=r.slice(0);i.forEach((S,x)=>{d[S]=Math.ceil((o[S]-a[S])/s[S])});let p={dims:d,dataType:e[0].dataType},f=Ie("output",e[0].dataType,d.length),g=Q("input",e[0].dataType,e[0].dims.length),v=K.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],$=[{type:12,data:v},{type:12,data:a},{type:6,data:l},{type:12,data:s},...ze(e[0].dims,d)],E=S=>`
      ${S.registerUniforms(y).declareVariables(g,f)}
        ${$g(g,f,r)}
        ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:E,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:$})}},bw=(e,t)=>{_g(e.inputs,t);let r=xg(e.inputs,t);e.compute(Sg(e.inputs,r),{inputs:[0]})},vw=e=>{let t=e.starts,r=e.ends,n=e.axes;return ot({starts:t,ends:r,axes:n})}}),Tg,kg,ww,_w,P$=ce(()=>{"use strict";Be(),Ne(),At(),Hn(),Ue(),Tg=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},kg=(e,t)=>{let r=e.inputs[0],n=r.dims,i=K.size(n),s=n.length,a=K.normalizeAxis(t.axis,s),o=a<n.length-1,l,d=[];o?(d=Array.from({length:s},(N,k)=>k),d[a]=s-1,d[s-1]=a,l=e.compute(mr(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let p=l.dims,f=p[s-1],g=i/f,v=It(f),y=f/v,$=64;g===1&&($=256);let E=(N,k)=>k===4?`max(max(${N}.x, ${N}.y), max(${N}.z, ${N}.w))`:k===2?`max(${N}.x, ${N}.y)`:k===3?`max(max(${N}.x, ${N}.y), ${N}.z)`:N,S=Q("x",l.dataType,l.dims,v),x=Ie("result",l.dataType,l.dims,v),A=S.type.value,C=Ut(l.dataType)==="f32"?`var threadMax = ${A}(-3.4028234663852886e+38f);`:`var threadMax = ${A}(-65504.0h);`,O=N=>`
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
          rowMaxShared = ${A}(${E("threadShared[0]",v)});
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
          rowSumShared = ${A}(${qn("threadShared[0]",v)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${A}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,D=e.compute({name:"Softmax",shaderCache:{hint:`${v};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:y}]}),getShaderSource:O},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(mr(D,d),{inputs:[D]})},ww=(e,t)=>{Tg(e.inputs),kg(e,t)},_w=e=>ot({axis:e.axis})}),Gu,Cg,Eg,Ig,xw,D$=ce(()=>{"use strict";Be(),Ne(),Ue(),Gu=e=>Array.from(e.getBigInt64Array(),Number),Cg=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Gu(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Eg=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},Ig=(e,t)=>{let r=e[0].dims,n=t??Gu(e[1]),i=Eg(r,n),s=K.size(i),a=e[0].dataType,o=Q("input",a,r.length),l=Ie("output",a,i.length),d=p=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...ze(e[0].dims,i)]}),getShaderSource:d}},xw=e=>{Cg(e.inputs),e.compute(Ig(e.inputs),{inputs:[0]})}}),Ag,Og,$w,N$=ce(()=>{"use strict";Be(),Ne(),Ue(),Ag=(e,t,r,n,i)=>{let s=Ie("output_data",i,r.length,4),a=Q("a_data",t[1].dataType,t[1].dims.length,4),o=Q("b_data",t[2].dataType,t[2].dims.length,4),l=Q("c_data",t[0].dataType,t[0].dims.length,4),d,p=(f,g,v)=>`select(${g}, ${f}, ${v})`;if(!n)d=s.setByOffset("global_idx",p(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(g,v,y="")=>{let $=`a_data[index_a${v}][component_a${v}]`,E=`b_data[index_b${v}][component_b${v}]`,S=`bool(c_data[index_c${v}] & (0xffu << (component_c${v} * 8)))`;return`
            let output_indices${v} = ${s.offsetToIndices(`global_idx * 4u + ${v}u`)};
            let offset_a${v} = ${a.broadcastedIndicesToOffset(`output_indices${v}`,s)};
            let offset_b${v} = ${o.broadcastedIndicesToOffset(`output_indices${v}`,s)};
            let offset_c${v} = ${l.broadcastedIndicesToOffset(`output_indices${v}`,s)};
            let index_a${v} = offset_a${v} / 4u;
            let index_b${v} = offset_b${v} / 4u;
            let index_c${v} = offset_c${v} / 4u;
            let component_a${v} = offset_a${v} % 4u;
            let component_b${v} = offset_b${v} % 4u;
            let component_c${v} = offset_c${v} % 4u;
            ${g}[${v}] = ${y}(${p($,E,S)});
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
      }`},Og=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,s=!(K.areEqual(t,r)&&K.areEqual(r,n)),a=t,o=K.size(t);if(s){let d=os.calcShape(os.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=K.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Ag(d,e,a,s,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...ze(n,t,r,a)]})}},$w=e=>{e.compute(Og(e.inputs))}}),Sw,U$=ce(()=>{"use strict";Qx(),sc(),Jx(),e$(),t$(),r$(),n$(),l$(),d$(),c$(),p$(),f$(),h$(),m$(),g$(),y$(),b$(),v$(),w$(),_$(),x$(),$$(),S$(),T$(),k$(),C$(),jv(),E$(),I$(),A$(),O$(),z$(),ic(),M$(),Kv(),R$(),B$(),P$(),Hv(),D$(),Hn(),ac(),N$(),Sw=new Map([["Abs",[hb]],["Acos",[mb]],["Acosh",[gb]],["Add",[Zb]],["ArgMax",[db,bd]],["ArgMin",[ub,bd]],["Asin",[yb]],["Asinh",[bb]],["Atan",[vb]],["Atanh",[wb]],["Attention",[cb]],["AveragePool",[nw,rw]],["BatchNormalization",[pb]],["BiasAdd",[fb]],["BiasSplitGelu",[Yb]],["Cast",[xb,_b]],["Ceil",[Sb]],["Clip",[$b]],["Concat",[ov,lv]],["Conv",[Sd,$d]],["ConvTranspose",[bv,yv]],["Cos",[Tb]],["Cosh",[kb]],["CumSum",[vv,wv]],["DepthToSpace",[_v,xv]],["DequantizeLinear",[dw,cw]],["DFT",[$v,Sv]],["Div",[Qb]],["Einsum",[Tv,kv]],["Elu",[Cb,Ls]],["Equal",[Jb]],["Erf",[Eb]],["Exp",[Ib]],["Expand",[Cv]],["FastGelu",[Ev]],["Floor",[Ab]],["FusedConv",[Sd,$d]],["Gather",[Av,Iv]],["GatherElements",[Pv,Bv]],["GatherBlockQuantized",[Mv,Rv]],["GatherND",[Ov,zv]],["Gelu",[Ob]],["Gemm",[Nv,Dv]],["GlobalAveragePool",[sw,iw]],["GlobalMaxPool",[uw,lw]],["Greater",[nv]],["GreaterOrEqual",[sv]],["GridSample",[Uv,Lv]],["GroupQueryAttention",[Xv]],["HardSigmoid",[Ub,Nb]],["HardSwish",[Lb]],["InstanceNormalization",[Yv]],["LayerNormalization",[Zv]],["LeakyRelu",[zb,Ls]],["Less",[iv]],["LessOrEqual",[av]],["Log",[Kb]],["MatMul",[Qv]],["MatMulNBits",[Jv,ew]],["MaxPool",[aw,ow]],["Mul",[ev]],["MultiHeadAttention",[Vv,Fv]],["Neg",[Rb]],["Not",[Mb]],["Pad",[tw]],["Pow",[tv]],["QuickGelu",[Xb,Ls]],["Range",[pw]],["Reciprocal",[Bb]],["ReduceMin",[ib]],["ReduceMean",[Jy]],["ReduceMax",[nb]],["ReduceSum",[ab]],["ReduceProd",[sb]],["ReduceL1",[eb]],["ReduceL2",[tb]],["ReduceLogSum",[lb]],["ReduceLogSumExp",[rb]],["ReduceSumSquare",[ob]],["Relu",[Pb]],["Resize",[mw,gw]],["RotaryEmbedding",[Gv]],["ScatterND",[hw,fw]],["Sigmoid",[Db]],["Sin",[Fb]],["Sinh",[Vb]],["Slice",[bw,vw]],["SkipLayerNormalization",[yw]],["Split",[Wv,qv]],["Sqrt",[jb]],["Softmax",[ww,_w]],["Sub",[rv]],["Tan",[Wb]],["Tanh",[qb]],["ThresholdedRelu",[Gb,Ls]],["Tile",[xw]],["Transpose",[Fy,Vy]],["Where",[$w]]])}),Tw,L$=ce(()=>{"use strict";Ir(),Tn(),Ue(),Tw=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){an(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Lr(e.programInfo.name)}dispose(){}build(e,t){an(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let i=Ly(t,this.backend.device.limits),s=e.getShaderSource(i),a=`${n.join(`
`)}
${i.additionalImplementations}
${s}`,o=r.createShaderModule({code:a,label:e.name});et("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Lr(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let s=t*r*n,a=Math.ceil(Math.sqrt(s));if(a>i){if(a=Math.ceil(Math.cbrt(s)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),kw={};us(kw,{WebGpuBackend:()=>Cw});var zg,Mg,Rg,Cw,F$=ce(()=>{"use strict";Ir(),Be(),Tn(),By(),Yx(),U$(),L$(),zg=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let s=e[n].dims.length;r.push(`${i};${s}`);break}case"dims":{let s=e[n].dims.join(",");r.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},Mg=(e,t,r)=>{let n=e.name;return e.shaderCache?.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${zg(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,n},Rg=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Cw=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=o=>t.features.has(o)&&r.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(n);let s=t,a=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new Rg(a),this.gpuDataManager=Ny(this),this.programManager=new Tw(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ec(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;an(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let i=r[n],s=i.kernelId,a=this.kernels.get(s),o=a.kernelType,l=a.kernelName,d=i.programName,p=i.inputTensorViews,f=i.outputTensorViews,g=t[n*2],v=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let y=Number(g-this.queryTimeBase),$=Number(v-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger($))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(E=>({dims:E.dims,dataType:_n(E.dataType)})),outputsMetadata:f.map(E=>({dims:E.dims,dataType:_n(E.dataType)})),kernelId:s,kernelType:o,kernelName:l,programName:d,startTime:y,endTime:$});else{let E="";p.forEach((x,A)=>{E+=`input[${A}]: [${x.dims}] | ${_n(x.dataType)}, `});let S="";f.forEach((x,A)=>{S+=`output[${A}]: [${x.dims}] | ${_n(x.dataType)}, `}),console.log(`[profiling] kernel "${s}|${o}|${l}|${d}" ${E}${S}start time: ${y} ns, execution time: ${$-y} ns`)}No("GPU",`${d}::${g}::${v}`)}e.unmap(),this.pendingQueries.delete(e)}),Lr()}run(e,t,r,n,i,s){an(e.name);let a=[];for(let x=0;x<t.length;++x){let A=t[x].data;if(A===0)continue;let C=this.gpuDataManager.get(A);if(!C)throw new Error(`no GPU data for input: ${A}`);a.push(C)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),p=r.length===0?o.map((x,A)=>A):r;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let f=[],g=[];for(let x=0;x<o.length;++x){if(!Number.isInteger(p[x])||p[x]<-3||p[x]>=s)throw new Error(`Invalid output index: ${p[x]}`);if(p[x]===-3)continue;let A=p[x]===-1,C=p[x]===-2,O=A||C?i(o[x].dataType,o[x].dims):n(p[x],o[x].dataType,o[x].dims);if(f.push(O),O.data===0)continue;let D=this.gpuDataManager.get(O.data);if(!D)throw new Error(`no GPU data for output: ${O.data}`);if(A&&this.temporaryData.push(D),C){let N=this.kernelPersistentData.get(this.currentKernelId);N||(N=[],this.kernelPersistentData.set(this.currentKernelId,N)),N.push(D)}g.push(D)}if(a.length!==t.length||g.length!==f.length){if(g.length===0)return Lr(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let v;if(d){let x=0,A=[];d.forEach(N=>{let k=typeof N.data=="number"?[N.data]:N.data;if(k.length===0)return;let q=N.type===10?2:4,Z,ae;N.type===10?(ae=k.length>4?16:k.length>2?8:k.length*q,Z=k.length>4?16:q*k.length):(ae=k.length<=2?k.length*q:16,Z=16),x=Math.ceil(x/ae)*ae,A.push(x);let X=N.type===10?8:4;x+=k.length>4?Math.ceil(k.length/X)*Z:k.length*q});let C=16;x=Math.ceil(x/C)*C;let O=new ArrayBuffer(x);d.forEach((N,k)=>{let q=A[k],Z=typeof N.data=="number"?[N.data]:N.data;if(N.type===6)new Int32Array(O,q,Z.length).set(Z);else if(N.type===12)new Uint32Array(O,q,Z.length).set(Z);else if(N.type===10)new Uint16Array(O,q,Z.length).set(Z);else if(N.type===1)new Float32Array(O,q,Z.length).set(Z);else throw new Error(`Unsupported uniform type: ${_n(N.type)}`)});let D=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(D.buffer,0,O,0,x),this.gpuDataManager.release(D.id),v={offset:0,size:x,buffer:D.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),$=y[1]===1&&y[2]===1,E=Mg(e,t,$),S=this.programManager.getArtifact(E);if(S||(S=this.programManager.build(e,y),this.programManager.setArtifact(E,S),et("info",()=>`[artifact] key: ${E}, programName: ${e.name}`)),d&&S.uniformVariablesInfo){if(d.length!==S.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${S.uniformVariablesInfo.length}, got ${d.length} in program "${S.programInfo.name}".`);for(let x=0;x<d.length;x++){let A=d[x],C=A.type,O=typeof A.data=="number"?1:A.data.length,[D,N]=S.uniformVariablesInfo[x];if(C!==D||O!==N)throw new Error(`Uniform variable ${x} mismatch: expect type ${D} with size ${N}, got type ${C} with size ${O} in program "${S.programInfo.name}".`)}}if(et("info",()=>`[ProgramManager] run "${e.name}" (key=${E}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:S.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(S,a,g,y,v),Lr(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=Sw.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,s=n.kernelName,a=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),et("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),a=this.gpuDataManager.registerExternalBuffer(r,n,s);return i.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await md(this,e,t);return tc(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){et("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){et("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){et("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),s=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Ew={};us(Ew,{init:()=>Iw});var bo,Bg,Iw,V$=ce(()=>{"use strict";Be(),Tn(),Ne(),Xx(),bo=class Aw{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(K.size(t)!==K.size(this.dims))throw new Error("Invalid new shape");return new Aw(this.module,this.dataType,this.data,t)}},Bg=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,i=r/e.PTR_SIZE,s=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,s));let a=Number(e.getValue(n*i++,s));this.outputCount=Number(e.getValue(n*i++,s)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,s));let o=[];for(let l=0;l<a;l++){let d=Number(e.getValue(n*i++,s)),p=Number(e.getValue(n*i++,"*")),f=Number(e.getValue(n*i++,s)),g=[];for(let v=0;v<f;v++)g.push(Number(e.getValue(n*i++,s)));o.push(new bo(e,d,p,g))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(a=>typeof a=="number"?this.inputs[a]:a)??this.inputs,n=t?.outputs??[],i=(a,o,l)=>new bo(this.module,o,this.output(a,l),l),s=(a,o)=>{let l=$i(a,o);if(!l)throw new Error(`Unsupported data type: ${a}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new bo(this.module,a,d,o)};return this.backend.run(e,r,n,i,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,i=n===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*n);this.module.setValue(s,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(s+n*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},Iw=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(F$(),la(kw)).WebGpuBackend,a=new s;await a.initialize(r,n),i("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,l,d,p=!1)=>{if(p)et("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),a.memcpy(Number(o),Number(l));else{et("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(l),f)}},async(o,l,d)=>{et("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>a.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>a.releaseKernel(o),(o,l,d,p)=>{et("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let f=new Bg(t,a,Number(l));return a.computeKernel(Number(o),f,p)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new Dy(r);i("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,l,d,p)=>s.ensureTensor(a,o,l,d,p),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!r.trace])}}}),Pg,pc,fc,Pn,Dg,Ku,Ho,hc,mc,Xu,gc,yc,bc,Ow=ce(()=>{"use strict";Ir(),Hx(),Gx(),Be(),Bi(),Yd(),Oy(),Pg=(e,t)=>{wt()._OrtInit(e,t)!==0&&lt("Can't initialize onnxruntime.")},pc=async e=>{Pg(e.wasm.numThreads,Fo(e.logLevel))},fc=async(e,t)=>{wt().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:i}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let n=(V$(),la(Ew)).init;t==="webgpu"&&await n("webgpu",wt(),e,r),t==="webnn"&&await n("webnn",wt(),e)}},Pn=new Map,Dg=e=>{let t=wt(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&lt("Can't get session input/output count.");let s=n===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+n,s))]}finally{t.stackRestore(r)}},Ku=(e,t)=>{let r=wt(),n=r.stackSave(),i=0;try{let s=r.PTR_SIZE,a=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&lt("Can't get session input/output metadata.");let o=Number(r.getValue(a,"*"));i=Number(r.getValue(a+s,"*"));let l=r.HEAP32[i/4];if(l===0)return[o,0];let d=r.HEAPU32[i/4+1],p=[];for(let f=0;f<d;f++){let g=Number(r.getValue(i+8+f*s,"*"));p.push(g!==0?r.UTF8ToString(g):Number(r.getValue(i+8+(f+d)*s,"*")))}return[o,l,p]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},Ho=e=>{let t=wt(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},hc=async(e,t)=>{let r,n,i=wt();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=Ho(e);let s=0,a=0,o=0,l=[],d=[],p=[];try{if([a,l]=await Ay(t),t?.externalData&&i.mountExternalData){let C=[];for(let O of t.externalData){let D=typeof O=="string"?O:O.path,N=typeof O=="string"?O:O.data;C.push(Jd(N).then(k=>{i.mountExternalData(D,k)}))}await Promise.all(C)}for(let C of t?.executionProviders??[])if((typeof C=="string"?C:C.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof C!="string"){let O=C,D=O?.context,N=O?.gpuDevice,k=O?.deviceType,q=O?.powerPreference;D?i.currentContext=D:N?i.currentContext=await i.webnnCreateMLContext(N):i.currentContext=await i.webnnCreateMLContext({deviceType:k,powerPreference:q})}else i.currentContext=await i.webnnCreateMLContext();break}s=await i._OrtCreateSession(r,n,a),i.webgpuOnCreateSession?.(s),s===0&&lt("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[f,g]=Dg(s),v=!!t?.enableGraphCapture,y=[],$=[],E=[],S=[],x=[];for(let C=0;C<f;C++){let[O,D,N]=Ku(s,C);O===0&&lt("Can't get an input name."),d.push(O);let k=i.UTF8ToString(O);y.push(k),E.push(D===0?{name:k,isTensor:!1}:{name:k,isTensor:!0,type:_n(D),shape:N})}for(let C=0;C<g;C++){let[O,D,N]=Ku(s,C+f);O===0&&lt("Can't get an output name."),p.push(O);let k=i.UTF8ToString(O);$.push(k),S.push(D===0?{name:k,isTensor:!1}:{name:k,isTensor:!0,type:_n(D),shape:N});{if(v&&t?.preferredOutputLocation===void 0){x.push("gpu-buffer");continue}let q=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[k]??"cpu",Z=i.webnnIsGraphOutput;if(q==="cpu"&&Z&&Z(s,k)){x.push("ml-tensor-cpu-output");continue}if(q!=="cpu"&&q!=="cpu-pinned"&&q!=="gpu-buffer"&&q!=="ml-tensor")throw new Error(`Not supported preferred output location: ${q}.`);if(v&&q!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${q}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);x.push(q)}}let A=null;return x.some(C=>C==="gpu-buffer"||C==="ml-tensor"||C==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(s),o===0&&lt("Can't create IO binding."),A={handle:o,outputPreferredLocations:x,outputPreferredLocationsEncoded:x.map(C=>C==="ml-tensor-cpu-output"?"ml-tensor":C).map(C=>hd(C))}),Pn.set(s,[s,d,p,A,v,!1]),[s,y,$,E,S]}catch(f){throw d.forEach(g=>i._OrtFree(g)),p.forEach(g=>i._OrtFree(g)),o!==0&&i._OrtReleaseBinding(o)!==0&&lt("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&lt("Can't release session."),f}finally{i._free(r),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&lt("Can't release session options."),l.forEach(f=>i._free(f)),i.unmountExternalData?.()}},mc=e=>{let t=wt(),r=Pn.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,s,a,o]=r;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&lt("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&lt("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(l=>t._OrtFree(l)),s.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(n)!==0&&lt("Can't release session."),Pn.delete(e)},Xu=async(e,t,r,n,i,s,a=!1)=>{if(!e){t.push(0);return}let o=wt(),l=o.PTR_SIZE,d=e[0],p=e[1],f=e[3],g=f,v,y;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let S=e[2].gpuBuffer;y=$i(xi(d),p);{let x=o.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');v=x(n,s,S,y)}}else if(f==="ml-tensor"){let S=e[2].mlTensor;y=$i(xi(d),p);let x=o.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');v=x(n,S,xi(d),p)}else{let S=e[2];if(Array.isArray(S)){y=l*S.length,v=o._malloc(y),r.push(v);for(let x=0;x<S.length;x++){if(typeof S[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);o.setValue(v+x*l,Pr(S[x],r),"*")}}else{let x=o.webnnIsGraphInput,A=o.webnnIsGraphOutput;if(d!=="string"&&x&&A){let C=o.UTF8ToString(i);if(x(n,C)||A(n,C)){let O=xi(d);y=$i(O,p),g="ml-tensor";let D=o.webnnCreateTemporaryTensor,N=o.webnnUploadTensor;if(!D||!N)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let k=await D(n,O,p);N(k,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),v=k}else y=S.byteLength,v=o._malloc(y),r.push(v),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,y),v)}else y=S.byteLength,v=o._malloc(y),r.push(v),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,y),v)}}let $=o.stackSave(),E=o.stackAlloc(4*p.length);try{p.forEach((x,A)=>o.setValue(E+A*l,x,l===4?"i32":"i64"));let S=o._OrtCreateTensor(xi(d),v,y,E,p.length,hd(g));S===0&&lt(`Can't create tensor for input/output. session=${n}, index=${s}.`),t.push(S)}finally{o.stackRestore($)}},gc=async(e,t,r,n,i,s)=>{let a=wt(),o=a.PTR_SIZE,l=Pn.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],p=l[1],f=l[2],g=l[3],v=l[4],y=l[5],$=t.length,E=n.length,S=0,x=[],A=[],C=[],O=[],D=[],N=a.stackSave(),k=a.stackAlloc($*o),q=a.stackAlloc($*o),Z=a.stackAlloc(E*o),ae=a.stackAlloc(E*o);try{[S,x]=Iy(s),Ii("wasm prepareInputOutputTensor");for(let J=0;J<$;J++)await Xu(r[J],A,O,e,p[t[J]],t[J],v);for(let J=0;J<E;J++)await Xu(i[J],C,O,e,f[n[J]],$+n[J],v);Ai("wasm prepareInputOutputTensor");for(let J=0;J<$;J++)a.setValue(k+J*o,A[J],"*"),a.setValue(q+J*o,p[t[J]],"*");for(let J=0;J<E;J++)a.setValue(Z+J*o,C[J],"*"),a.setValue(ae+J*o,f[n[J]],"*");if(g&&!y){let{handle:J,outputPreferredLocations:pe,outputPreferredLocationsEncoded:le}=g;if(p.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${p.length}).`);Ii("wasm bindInputsOutputs");for(let de=0;de<$;de++){let _e=t[de];await a._OrtBindInput(J,p[_e],A[de])!==0&&lt(`Can't bind input[${de}] for session=${e}.`)}for(let de=0;de<E;de++){let _e=n[de];i[de]?.[3]?(D.push(C[de]),a._OrtBindOutput(J,f[_e],C[de],0)!==0&&lt(`Can't bind pre-allocated output[${de}] for session=${e}.`)):a._OrtBindOutput(J,f[_e],0,le[_e])!==0&&lt(`Can't bind output[${de}] to ${pe[de]} for session=${e}.`)}Ai("wasm bindInputsOutputs"),Pn.set(e,[d,p,f,g,v,!0])}a.jsepOnRunStart?.(d),a.webnnOnRunStart?.(d);let X;g?X=await a._OrtRunWithBinding(d,g.handle,E,Z,S):X=await a._OrtRun(d,q,k,$,ae,E,Z,S),X!==0&&lt("failed to call OrtRun().");let oe=[],F=[];Ii("wasm ProcessOutputTensor");for(let J=0;J<E;J++){let pe=Number(a.getValue(Z+J*o,"*"));if(pe===C[J]||D.includes(C[J])){oe.push(i[J]),pe!==C[J]&&a._OrtReleaseTensor(pe)!==0&&lt("Can't release tensor.");continue}let le=a.stackSave(),de=a.stackAlloc(4*o),_e=!1,ke,te=0;try{a._OrtGetTensorData(pe,de,de+o,de+2*o,de+3*o)!==0&&lt(`Can't access output tensor data on index ${J}.`);let $e=o===4?"i32":"i64",Se=Number(a.getValue(de,$e));te=a.getValue(de+o,"*");let ve=a.getValue(de+o*2,"*"),_t=Number(a.getValue(de+o*3,$e)),gt=[];for(let We=0;We<_t;We++)gt.push(Number(a.getValue(ve+We*o,$e)));a._OrtFree(ve)!==0&&lt("Can't free memory for tensor dims.");let tt=gt.reduce((We,it)=>We*it,1);ke=_n(Se);let Ct=g?.outputPreferredLocations[n[J]];if(ke==="string"){if(Ct==="gpu-buffer"||Ct==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let We=[];for(let it=0;it<tt;it++){let M=a.getValue(te+it*o,"*"),U=a.getValue(te+(it+1)*o,"*"),H=it===tt-1?void 0:U-M;We.push(a.UTF8ToString(M,H))}oe.push([ke,gt,We,"cpu"])}else if(Ct==="gpu-buffer"&&tt>0){let We=a.jsepGetBuffer;if(!We)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let it=We(te),M=$i(Se,tt);if(M===void 0||!Zd(ke))throw new Error(`Unsupported data type: ${ke}`);_e=!0,oe.push([ke,gt,{gpuBuffer:it,download:a.jsepCreateDownloader(it,M,ke),dispose:()=>{a._OrtReleaseTensor(pe)!==0&&lt("Can't release tensor.")}},"gpu-buffer"])}else if(Ct==="ml-tensor"&&tt>0){let We=a.webnnEnsureTensor,it=a.webnnIsGraphInputOutputTypeSupported;if(!We||!it)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if($i(Se,tt)===void 0||!Qd(ke))throw new Error(`Unsupported data type: ${ke}`);if(!it(e,ke,!1))throw new Error(`preferredLocation "ml-tensor" for ${ke} output is not supported by current WebNN Context.`);let M=await We(e,te,Se,gt,!1);_e=!0,oe.push([ke,gt,{mlTensor:M,download:a.webnnCreateMLTensorDownloader(te,ke),dispose:()=>{a.webnnReleaseTensorId(te),a._OrtReleaseTensor(pe)}},"ml-tensor"])}else if(Ct==="ml-tensor-cpu-output"&&tt>0){let We=a.webnnCreateMLTensorDownloader(te,ke)(),it=oe.length;_e=!0,F.push((async()=>{let M=[it,await We];return a.webnnReleaseTensorId(te),a._OrtReleaseTensor(pe),M})()),oe.push([ke,gt,[],"cpu"])}else{let We=ol(ke),it=new We(tt);new Uint8Array(it.buffer,it.byteOffset,it.byteLength).set(a.HEAPU8.subarray(te,te+it.byteLength)),oe.push([ke,gt,it,"cpu"])}}finally{a.stackRestore(le),ke==="string"&&te&&a._free(te),_e||a._OrtReleaseTensor(pe)}}g&&!v&&(a._OrtClearBoundOutputs(g.handle)!==0&&lt("Can't clear bound outputs."),Pn.set(e,[d,p,f,g,v,!1]));for(let[J,pe]of await Promise.all(F))oe[J][2]=pe;return Ai("wasm ProcessOutputTensor"),oe}finally{a.webnnOnRunEnd?.(d),a.stackRestore(N),A.forEach(X=>a._OrtReleaseTensor(X)),C.forEach(X=>a._OrtReleaseTensor(X)),O.forEach(X=>a._free(X)),S!==0&&a._OrtReleaseRunOptions(S),x.forEach(X=>a._free(X))}},yc=e=>{let t=wt(),r=Pn.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&lt("Can't get an profile file name."),t._OrtFree(i)},bc=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),Dn,xr,Yi,Bs,Ps,vo,Yu,wo,yi,bi,Ng,zw,Mw,Rw,Bw,Pw,Dw,Nw,Uw=ce(()=>{"use strict";Ir(),Ow(),Bi(),Kd(),Dn=()=>!!bt.wasm.proxy&&typeof document<"u",Yi=!1,Bs=!1,Ps=!1,wo=new Map,yi=(e,t)=>{let r=wo.get(e);r?r.push(t):wo.set(e,[t])},bi=()=>{if(Yi||!Bs||Ps||!xr)throw new Error("worker not ready")},Ng=e=>{switch(e.data.type){case"init-wasm":Yi=!1,e.data.err?(Ps=!0,Yu[1](e.data.err)):(Bs=!0,Yu[0]()),vo&&(URL.revokeObjectURL(vo),vo=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=wo.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},zw=async()=>{if(!Bs){if(Yi)throw new Error("multiple calls to 'initWasm()' detected.");if(Ps)throw new Error("previous call to 'initWasm()' failed.");if(Yi=!0,Dn())return new Promise((e,t)=>{xr?.terminate(),Cy().then(([r,n])=>{try{xr=n,xr.onerror=s=>t(s),xr.onmessage=Ng,Yu=[e,t];let i={type:"init-wasm",in:bt};!i.in.wasm.wasmPaths&&(r||fd)&&(i.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-MDYUKy93.wasm",import.meta.url).href}),xr.postMessage(i),vo=r}catch(i){t(i)}},t)});try{await Xd(bt.wasm),await pc(bt),Bs=!0}catch(e){throw Ps=!0,e}finally{Yi=!1}}},Mw=async e=>{if(Dn())return bi(),new Promise((t,r)=>{yi("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:bt}};xr.postMessage(n)});await fc(bt,e)},Rw=async e=>Dn()?(bi(),new Promise((t,r)=>{yi("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};xr.postMessage(n,[e.buffer])})):Ho(e),Bw=async(e,t)=>{if(Dn()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return bi(),new Promise((r,n)=>{yi("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),xr.postMessage(i,s)})}else return hc(e,t)},Pw=async e=>{if(Dn())return bi(),new Promise((t,r)=>{yi("release",[t,r]);let n={type:"release",in:e};xr.postMessage(n)});mc(e)},Dw=async(e,t,r,n,i,s)=>{if(Dn()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return bi(),new Promise((a,o)=>{yi("run",[a,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:n,options:s}};xr.postMessage(d,bc(l))})}else return gc(e,t,r,n,i,s)},Nw=async e=>{if(Dn())return bi(),new Promise((t,r)=>{yi("end-profiling",[t,r]);let n={type:"end-profiling",in:e};xr.postMessage(n)});yc(e)}}),Zu,Ug,Lw,j$=ce(()=>{"use strict";Ir(),Uw(),Be(),Gd(),Oy(),Zu=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Ug=e=>{switch(e[3]){case"cpu":return new Dr(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Zd(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return Dr.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!Qd(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return Dr.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Lw=class{async fetchModelAndCopyToWasmMemory(e){return Rw(await Jd(e))}async loadModel(e,t){an();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Bw(r,t),Lr()}async dispose(){return Pw(this.sessionId)}async run(e,t,r){an();let n=[],i=[];Object.entries(e).forEach(f=>{let g=f[0],v=f[1],y=this.inputNames.indexOf(g);if(y===-1)throw new Error(`invalid input '${g}'`);n.push(v),i.push(y)});let s=[],a=[];Object.entries(t).forEach(f=>{let g=f[0],v=f[1],y=this.outputNames.indexOf(g);if(y===-1)throw new Error(`invalid output '${g}'`);s.push(v),a.push(y)});let o=n.map((f,g)=>Zu(f,()=>`input "${this.inputNames[i[g]]}"`)),l=s.map((f,g)=>f?Zu(f,()=>`output "${this.outputNames[a[g]]}"`):null),d=await Dw(this.sessionId,i,o,a,l,r),p={};for(let f=0;f<d.length;f++)p[this.outputNames[a[f]]]=s[f]??Ug(d[f]);return Lr(),p}startProfiling(){}endProfiling(){Nw(this.sessionId)}}}),Fw={};us(Fw,{OnnxruntimeWebAssemblyBackend:()=>Cd,initializeFlags:()=>kd,wasmBackend:()=>Vw});var kd,Cd,Vw,W$=ce(()=>{"use strict";Ir(),Uw(),j$(),kd=()=>{(typeof bt.wasm.initTimeout!="number"||bt.wasm.initTimeout<0)&&(bt.wasm.initTimeout=0);let e=bt.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),bt.wasm.simd=!1),typeof bt.wasm.proxy!="boolean"&&(bt.wasm.proxy=!1),typeof bt.wasm.trace!="boolean"&&(bt.wasm.trace=!1),typeof bt.wasm.numThreads!="number"||!Number.isInteger(bt.wasm.numThreads)||bt.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)bt.wasm.numThreads=1;else{let t=typeof navigator>"u"?Ex("node:os").cpus().length:navigator.hardwareConcurrency;bt.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Cd=class{async init(e){kd(),await zw(),await Mw(e)}async createInferenceSessionHandler(e,t){let r=new Lw;return await r.loadModel(e,t),r}},Vw=new Cd});Ir();Ir();Ir();var q$="1.30.0";{let e=(W$(),la(Fw)).wasmBackend;Qi("webgpu",e,5),Qi("webnn",e,5),Qi("cpu",e,10),Qi("wasm",e,10)}Object.defineProperty(bt.versions,"web",{value:q$,enumerable:!0});/**
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
 */class H${session=null;fallbackSegmenter=null;isModelLoading=!1;backendUsed="wasm";constructor(){bt.wasm.numThreads=Math.min(navigator.hardwareConcurrency||4,4),bt.wasm.simd=!0}async initOnnxModel(t){if(this.session)return!0;this.isModelLoading=!0;try{console.log("[HdMattingEngine] 正在尝试以 WebGPU 加载高精抠图模型...");try{return this.session=await Uo.create(t,{executionProviders:["webgpu"],graphOptimizationLevel:"all"}),this.backendUsed="webgpu",console.log("[HdMattingEngine] WebGPU 抠图会话创建成功"),this.isModelLoading=!1,!0}catch(r){console.warn("[HdMattingEngine] WebGPU 后端不可用，平滑回退至 Wasm 运行时:",r)}return this.session=await Uo.create(t,{executionProviders:["wasm"],graphOptimizationLevel:"all"}),this.backendUsed="wasm",console.log("[HdMattingEngine] Wasm 抠图会话创建成功"),this.isModelLoading=!1,!0}catch(r){return this.isModelLoading=!1,console.warn("[HdMattingEngine] ONNX 模型加载失败，将启用内置高精度精细分割引擎:",r),!1}}async getFallbackSegmenter(){return this.fallbackSegmenter?this.fallbackSegmenter:new Promise((t,r)=>{const n=new ny.SelfieSegmentation({locateFile:i=>`https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation@0.1.1675465747/${i}`});n.setOptions({modelSelection:1,selfieMode:!1}),n.initialize().then(()=>{this.fallbackSegmenter=n,this.backendUsed="mediapipe-hd",t(n)}).catch(r)})}async segmentHighDefinition(t,r){r?.("准备图像数据",10);const n=t.width,i=t.height;if(this.session)try{r?.("AI 神经网络深度推演中 (WebGPU/Wasm)",30);const a=await this.runOnnxMatting(t,r);r?.("精修发丝与边缘羽化",80);const o=this.compositeCutout(t,a,n,i);return r?.("完成生成透明图层",100),await this.canvasToBlob(o)}catch(a){console.error("[HdMattingEngine] ONNX 推理失败，触发降级模式:",a)}r?.("启用高精人像模式渲染",40);const s=await this.getFallbackSegmenter();return new Promise((a,o)=>{s.onResults(l=>{if(!l.segmentationMask){o(new Error("未检测到人像"));return}r?.("智能羽化与边缘保真",75);const d=document.createElement("canvas");d.width=n,d.height=i;const p=d.getContext("2d");if(!p){o(new Error("Canvas 上下文创建失败"));return}p.drawImage(t,0,0,n,i),p.globalCompositeOperation="destination-in",p.drawImage(l.segmentationMask,0,0,n,i),this.applyEdgeRefinement(p,n,i),r?.("导出透明 PNG",95),this.canvasToBlob(d).then(a).catch(o)}),s.send({image:t}).catch(o)})}async runOnnxMatting(t,r){const i=document.createElement("canvas");i.width=1024,i.height=1024;const s=i.getContext("2d",{willReadFrequently:!0});if(!s)throw new Error("无法创建推理 Canvas 上下文");s.drawImage(t,0,0,1024,1024);const a=s.getImageData(0,0,1024,1024),{data:o}=a,l=new Float32Array(3*1024*1024),d=1024*1024;for(let A=0;A<d;A++){const C=o[A*4],O=o[A*4+1],D=o[A*4+2];l[A]=(C/255-.5)/.5,l[d+A]=(O/255-.5)/.5,l[d*2+A]=(D/255-.5)/.5}const p=new Dr("float32",l,[1,3,1024,1024]),f=this.session.inputNames[0];r?.("模型矩阵运算中",55);const g=await this.session.run({[f]:p}),v=this.session.outputNames[0],$=g[v].data,E=document.createElement("canvas");E.width=1024,E.height=1024;const S=E.getContext("2d");if(!S)throw new Error("无法创建 Mask Canvas");const x=S.createImageData(1024,1024);for(let A=0;A<d;A++){let C=$[A];C<0&&(C=0),C>1&&(C=1);const O=Math.round(C*255);x.data[A*4]=255,x.data[A*4+1]=255,x.data[A*4+2]=255,x.data[A*4+3]=O}return S.putImageData(x,0,0),E}compositeCutout(t,r,n,i){const s=document.createElement("canvas");s.width=n,s.height=i;const a=s.getContext("2d");if(!a)throw new Error("无法创建复合图层");return a.drawImage(t,0,0,n,i),a.globalCompositeOperation="destination-in",a.drawImage(r,0,0,n,i),s}applyEdgeRefinement(t,r,n){t.save(),t.filter="blur(0.5px)",t.globalCompositeOperation="destination-in",t.drawImage(t.canvas,0,0,r,n),t.restore()}canvasToBlob(t){return new Promise((r,n)=>{t.toBlob(i=>{i?r(i):n(new Error("导出透明 Blob 失败"))},"image/png")})}getBackend(){return this.backendUsed}}const G$=new H$;function K$(e,t,r){return new Promise(n=>{const i=e.naturalWidth||e.width,s=e.naturalHeight||e.height,a=Math.max(r.widthPx/i,r.heightPx/s)*1.05,o={scale:a,x:(r.widthPx-i*a)/2,y:(r.heightPx-s*a)*.42,headTopY:0,chinY:s*.6,headCenterX:i/2,headHeight:s*.6,success:!1};try{let l;if(t instanceof HTMLCanvasElement)l=t;else if(l=document.createElement("canvas"),l.width=i,l.height=s,!l.getContext("2d")){n(o);return}const d=200,p=Math.round(s/i*d),f=document.createElement("canvas");f.width=d,f.height=p;const g=f.getContext("2d",{willReadFrequently:!0});if(!g){n(o);return}g.drawImage(e,0,0,d,p);const y=g.getImageData(0,0,d,p).data;let $=-1,E=d/2;for(let le=0;le<p;le++){let de=0,_e=0;for(let ke=0;ke<d;ke++)y[(le*d+ke)*4+3]>60&&(de++,_e+=ke);if(de>8){$=le,E=_e/de;break}}if($===-1||$>=p*.8){n(o);return}const S=[];for(let le=$;le<p;le++){let de=d,_e=-1;for(let ke=0;ke<d;ke++)y[(le*d+ke)*4+3]>60&&(ke<de&&(de=ke),ke>_e&&(_e=ke));_e>=de&&S.push({y:le,width:_e-de,centerX:(de+_e)/2})}if(S.length<20){n(o);return}let x=0;for(let le=0;le<Math.min(S.length,Math.round(p*.4));le++)S[le].width>x&&(x=S[le].width);let A=Math.round(S.length*.45);for(let le=10;le<S.length;le++)if(S[le].width>x*1.35){A=Math.max(le-4,10);break}const C=S[A]?.y||$+(p-$)*.4,O=S[Math.round(A/2)]?.centerX||E,D=i/d,N=$*D,k=C*D,q=O*D,Z=Math.max(k-N,s*.25),ae=r.heightPx*.085,X=r.heightPx*.58,oe=r.widthPx*.5,F=X/Z,J=oe-q*F,pe=ae-N*F;n({scale:Math.round(F*1e3)/1e3,x:Math.round(J),y:Math.round(pe),headTopY:N,chinY:k,headCenterX:q,headHeight:Z,success:!0})}catch(l){console.warn("[FaceAlignment] 自动对齐异常，采用默认对齐:",l),n(o)}})}const X$={class:"relative w-full h-full flex flex-col bg-slate-950 text-slate-100 overflow-hidden select-none"},Y$={class:"w-full z-20 flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md gap-2"},Z$={class:"flex items-center space-x-2"},Q$={class:"bg-slate-800 p-1 rounded-xl flex items-center border border-slate-700/80"},J$={class:"flex items-center space-x-2"},e3={class:"flex items-center space-x-1.5 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1"},t3=["value"],r3={key:0,class:"ml-1 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full"},n3=["disabled"],i3={class:"flex-1 w-full flex flex-col md:flex-row items-center justify-between overflow-hidden p-2 sm:p-4 gap-4"},s3={class:"relative flex-1 w-full h-full min-h-[360px] flex items-center justify-center bg-slate-900/60 rounded-2xl border border-slate-800/80 overflow-hidden shadow-inner"},a3={class:"w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400"},o3={key:1,class:"relative flex flex-col items-center justify-center w-full h-full"},l3={key:0,class:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 140",preserveAspectRatio:"none"},u3={class:"flex items-center space-x-4 mt-4"},d3=["disabled"],c3={key:0,class:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 140",preserveAspectRatio:"none"},p3={class:"flex items-center space-x-3 mt-3 text-xs text-slate-400"},f3={key:3,class:"absolute inset-0 z-40 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"},h3={class:"text-sm font-semibold text-slate-100"},m3={class:"w-48 bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden"},g3={class:"w-full md:w-80 lg:w-96 flex flex-col justify-between bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 overflow-y-auto max-h-[85vh]"},y3={class:"bg-slate-800/70 border border-slate-700/70 rounded-xl p-3 space-y-1"},b3={class:"flex items-center justify-between"},v3={class:"text-xs font-bold text-slate-200"},w3={class:"flex items-center justify-between text-xs text-slate-400"},_3={class:"text-[11px] text-slate-500"},x3={class:"space-y-2"},$3={class:"grid grid-cols-4 gap-2"},S3=["onClick"],T3={class:"flex items-center space-x-2 text-left"},k3={key:1,class:"space-y-3 bg-slate-800/40 border border-slate-800 rounded-xl p-3"},C3={class:"flex items-center justify-between text-xs"},E3={class:"text-slate-400"},I3={class:"flex items-center justify-between pt-1"},A3={class:"flex items-center space-x-1 text-xs text-slate-400 cursor-pointer"},O3={class:"space-y-2 pt-2 border-t border-slate-800"},z3={class:"grid grid-cols-2 gap-2"},M3=["disabled"],R3=["disabled"],B3={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"},P3={class:"bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm p-5 space-y-4"},D3={class:"space-y-3 text-xs"},N3={class:"grid grid-cols-2 gap-3"},U3={class:"text-[11px] text-slate-400"},L3={class:"flex justify-end space-x-2 pt-2"},F3=pa({__name:"PhotoStudio",props:{trayCount:{}},emits:["photo-added-to-tray","open-single-export","open-tray","open-packing","show-toast"],setup(e,{emit:t}){const r=e,n=t,i=Ze("upload"),s=Ze(Xl),a=Ze(Xl[0].id),o=Ze(Xl[0]),l=Ze(pd),d=Ze(pd[2]),p=Ze(!0),f=Ze(!1),g=Ze(!1),v=Ze(0),y=Ze(""),$=Ze(null),E=Ze(null),S=Ze(null),x=Ze(null),A=Ys(()=>!!E.value),C=Ze(null),O=Ze(null),D=Ze(null),N=Ze(null),k=Ze(!1),q=Ze("user");let Z=null,ae=null;const X=new Sx;let oe=null;const F=rs({scale:1,x:0,y:0,rotation:0});let J=!1,pe=0,le=0,de=0,_e=0;const ke=Ze(!1),te=rs({name:"自定义规格",widthMm:35,heightMm:45}),$e=Ys(()=>{const re=as(te.widthMm),j=as(te.heightMm);return`${re} × ${j} px`}),Se=Ys(()=>{const re=o.value,j=re.widthPx/re.heightPx;return{width:j<1?`calc(58vh * ${j})`:"78vw",height:j<1?"58vh":`calc(78vw / ${j})`}});fa(()=>{window.addEventListener("paste",it),window.addEventListener("mousemove",fe),window.addEventListener("mouseup",Ce),window.addEventListener("touchmove",ie),window.addEventListener("touchend",Ce)}),Ld(()=>{window.removeEventListener("paste",it),window.removeEventListener("mousemove",fe),window.removeEventListener("mouseup",Ce),window.removeEventListener("touchmove",ie),window.removeEventListener("touchend",Ce),Ye()});async function ve(re){i.value=re,re==="camera"?await Fe():(Ye(),await Ti(),Ee())}function _t(){if(a.value==="custom"){ke.value=!0;return}const re=s.value.find(j=>j.id===a.value);re&&(o.value=re,Y())}function gt(){const re=$x(te.name,te.widthMm,te.heightMm);s.value.push(re),a.value=re.id,o.value=re,ke.value=!1,ne()}function tt(){$.value?.click()}function Ct(re){const j=re.target;j.files&&j.files[0]&&M(j.files[0]),j.value=""}function We(re){f.value=!1,re.dataTransfer?.files&&re.dataTransfer.files[0]&&M(re.dataTransfer.files[0])}function it(re){if(!re.clipboardData)return;const j=re.clipboardData.items;for(let me=0;me<j.length;me++)if(j[me].type.startsWith("image/")){const ct=j[me].getAsFile();if(ct){M(ct);break}}}async function M(re){S.value=re,x.value=null;const j=URL.createObjectURL(re),me=new Image;me.onload=async()=>{E.value=me,i.value="upload",ne(),await Ti(),Ee(),d.value.value!=="original"&&await U()},me.src=j}async function U(){if(!(!E.value||x.value||g.value)){g.value=!0,v.value=10,y.value="正在准备人像深度特征...";try{const re=document.createElement("canvas");re.width=E.value.naturalWidth,re.height=E.value.naturalHeight;const j=re.getContext("2d");if(!j)throw new Error("无法创建离屏图层");j.drawImage(E.value,0,0);const me=await G$.segmentHighDefinition(re,(ct,lr)=>{y.value=ct,v.value=lr});x.value=me,n("show-toast","本地 AI 发丝级抠图已完成")}catch(re){console.error("抠图失败:",re),n("show-toast","抠图提示: 保持原图或重新调整")}finally{g.value=!1,await Y(),await Ti(),Ee()}}}async function H(re){d.value=re,re.value!=="original"&&!x.value&&E.value?await U():Ee()}async function Y(){if(!E.value)return;const re=x.value||S.value;if(re)try{const j=await K$(E.value,re,o.value);F.scale=j.scale,F.x=j.x,F.y=j.y,F.rotation=0,await Ti(),Ee(),j.success&&n("show-toast","已按国家证件照标准自动对齐（头顶留白约8.5%，人脸垂直居中）")}catch(j){console.warn("自动对齐计算失败，恢复默认居中:",j),ne()}}function ne(){if(!E.value)return;const re=o.value,j=E.value.naturalWidth,me=E.value.naturalHeight,ct=re.widthPx/j,lr=re.heightPx/me,Ft=Math.max(ct,lr);F.scale=Ft*1.05,F.rotation=0,F.x=(re.widthPx-j*F.scale)/2,F.y=(re.heightPx-me*F.scale)*.45,Ee()}function se(re){F.rotation=(F.rotation+re)%360,Ee()}function ge(re){J=!0,pe=re.clientX,le=re.clientY,de=F.x,_e=F.y}function fe(re){if(!J)return;const j=re.clientX-pe,me=re.clientY-le;F.x=de+j,F.y=_e+me,Ee()}function he(re){re.touches.length===1&&(J=!0,pe=re.touches[0].clientX,le=re.touches[0].clientY,de=F.x,_e=F.y)}function ie(re){if(!J||re.touches.length!==1)return;const j=re.touches[0].clientX-pe,me=re.touches[0].clientY-le;F.x=de+j,F.y=_e+me,Ee()}function Ce(){J=!1}function be(re){const j=re.deltaY<0?.05:-.05,me=Math.min(Math.max(F.scale+j,.3),3);F.scale=me,Ee()}let Ae=null;async function Ee(){if(!C.value||!E.value)return;const re=C.value,j=o.value;re.width=j.widthPx,re.height=j.heightPx;const me=re.getContext("2d");if(!me)return;const ct=re.width,lr=re.height;if(me.clearRect(0,0,ct,lr),d.value.value==="original"){Le(me,E.value);return}if(d.value.value!=="transparent"){if(d.value.isGradient&&d.value.gradientStops){const Ft=me.createLinearGradient(0,0,0,lr);Ft.addColorStop(0,d.value.gradientStops[0]),Ft.addColorStop(1,d.value.gradientStops[1]),me.fillStyle=Ft}else me.fillStyle=d.value.value;me.fillRect(0,0,ct,lr)}if(x.value)if(!Ae||Ae.src!==x.value._cachedUrl){const Ft=URL.createObjectURL(x.value);Ae=new Image,x.value._cachedUrl=Ft,Ae.onload=()=>{Le(me,Ae)},Ae.src=Ft}else Le(me,Ae);else Le(me,E.value)}function Le(re,j){re.save();const me=F.x+j.naturalWidth*F.scale/2,ct=F.y+j.naturalHeight*F.scale/2;re.translate(me,ct),re.rotate(F.rotation*Math.PI/180),re.drawImage(j,-(j.naturalWidth*F.scale)/2,-(j.naturalHeight*F.scale)/2,j.naturalWidth*F.scale,j.naturalHeight*F.scale),re.restore()}async function Fe(){Ye();try{const re=await navigator.mediaDevices.getUserMedia({video:{facingMode:q.value,width:{ideal:1920},height:{ideal:1080}},audio:!1});Z=re,D.value&&(D.value.srcObject=re,await D.value.play(),k.value=!0,await X.init(),X.setOnResult(j=>{oe=j}),xt())}catch(re){console.warn("相机权限获取失败:",re),k.value=!1}}function Ye(){Z&&(Z.getTracks().forEach(re=>re.stop()),Z=null),ae&&cancelAnimationFrame(ae),k.value=!1}async function ft(){q.value=q.value==="user"?"environment":"user",await Fe()}function xt(){const re=()=>{if(D.value&&N.value&&D.value.readyState>=2){const j=N.value,me=D.value;if((j.width!==o.value.widthPx||j.height!==o.value.heightPx)&&(j.width=o.value.widthPx,j.height=o.value.heightPx),X.sendFrame(me),oe&&d.value.value!=="original")X.renderComposite(j,me,oe,d.value,q.value==="user");else{const ct=j.getContext("2d");ct&&(ct.save(),q.value==="user"&&(ct.translate(j.width,0),ct.scale(-1,1)),ct.drawImage(me,0,0,j.width,j.height),ct.restore())}}ae=requestAnimationFrame(re)};ae=requestAnimationFrame(re)}async function Kt(){if(!D.value||g.value)return;const re=D.value,j=document.createElement("canvas");j.width=re.videoWidth||o.value.widthPx,j.height=re.videoHeight||o.value.heightPx;const me=j.getContext("2d");me&&(q.value==="user"&&(me.translate(j.width,0),me.scale(-1,1)),me.drawImage(re,0,0,j.width,j.height),j.toBlob(async ct=>{ct&&(Ye(),await M(ct))},"image/jpeg",.98))}async function Ot(){if(!C.value)throw new Error("画布未就绪");return new Promise((re,j)=>{C.value.toBlob(me=>{me?re({composedBlob:me,previewUrl:C.value.toDataURL("image/jpeg",.9)}):j(new Error("导出失败"))},"image/jpeg",.98)})}async function gr(){if(!(!S.value||!E.value))try{const{composedBlob:re,previewUrl:j}=await Ot(),me={id:`tray_${Date.now()}_${Math.random().toString(36).substring(2,6)}`,memberName:`成员 ${r.trayCount+1}`,originalBlob:S.value,cutoutBlob:x.value||S.value,previewUrl:j,spec:{...o.value},printCount:4,selectedBg:{...d.value},createdAt:Date.now()};n("photo-added-to-tray",me),n("show-toast",`已将 ${o.value.name} 证件照加入待印托盘`)}catch(re){console.error("加入托盘失败:",re)}}async function or(){if(!(!S.value||!E.value))try{const{composedBlob:re,previewUrl:j}=await Ot(),me={id:`export_${Date.now()}`,memberName:"证件照",originalBlob:S.value,cutoutBlob:x.value||S.value,previewUrl:j,spec:{...o.value},printCount:1,selectedBg:{...d.value},createdAt:Date.now()};n("open-single-export",me)}catch(re){console.error("打开单张导出失败:",re)}}return(re,j)=>(Qe(),at("div",X$,[V("header",Y$,[V("div",Z$,[V("div",Q$,[V("button",{onClick:j[0]||(j[0]=me=>ve("upload")),class:Qr(["flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition",i.value==="upload"?"bg-blue-600 text-white shadow":"text-slate-400 hover:text-slate-200"])},[Ke(vt(vx),{class:"w-3.5 h-3.5"}),j[15]||(j[15]=V("span",null,"上传/拖入照片",-1))],2),V("button",{onClick:j[1]||(j[1]=me=>ve("camera")),class:Qr(["flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition",i.value==="camera"?"bg-blue-600 text-white shadow":"text-slate-400 hover:text-slate-200"])},[Ke(vt(ux),{class:"w-3.5 h-3.5"}),j[16]||(j[16]=V("span",null,"自拍拍摄",-1))],2)]),j[17]||(j[17]=V("div",{class:"hidden sm:flex items-center space-x-1 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2.5 py-1 rounded-full"},[V("span",{class:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),V("span",null,"100% 离线端侧处理 · 绝不上传服务器")],-1))]),V("div",J$,[V("div",e3,[j[19]||(j[19]=V("span",{class:"text-xs text-slate-400"},"规格:",-1)),Sr(V("select",{"onUpdate:modelValue":j[2]||(j[2]=me=>a.value=me),onChange:_t,class:"bg-transparent text-xs font-medium text-slate-100 focus:outline-none cursor-pointer"},[(Qe(!0),at(Wt,null,is(s.value,me=>(Qe(),at("option",{key:me.id,value:me.id,class:"bg-slate-800 text-slate-100"},Je(me.name)+" ("+Je(me.widthMm)+"×"+Je(me.heightMm)+"mm) ",9,t3))),128)),j[18]||(j[18]=V("option",{value:"custom",class:"bg-slate-800 text-slate-100"},"⚙️ 自定义尺寸...",-1))],544),[[J0,a.value]])]),V("button",{onClick:j[3]||(j[3]=me=>re.$emit("open-tray")),class:"relative flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"},[Ke(vt(ty),{class:"w-4 h-4 text-blue-400"}),j[20]||(j[20]=V("span",{class:"text-xs font-medium"},"托盘",-1)),e.trayCount>0?(Qe(),at("span",r3,Je(e.trayCount),1)):Nt("",!0)]),V("button",{onClick:j[4]||(j[4]=me=>re.$emit("open-packing")),disabled:e.trayCount===0,class:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-semibold shadow transition"},[Ke(vt(Do),{class:"w-3.5 h-3.5"}),j[21]||(j[21]=V("span",{class:"hidden sm:inline"},"混排拼版",-1))],8,n3)])]),V("main",i3,[V("section",s3,[i.value==="upload"&&!A.value?(Qe(),at("div",{key:0,class:"w-full max-w-md p-6 flex flex-col items-center justify-center text-center space-y-4 border-2 border-dashed border-slate-700 hover:border-blue-500 rounded-3xl bg-slate-900/40 transition cursor-pointer",onDragover:j[5]||(j[5]=no(me=>f.value=!0,["prevent"])),onDragleave:j[6]||(j[6]=no(me=>f.value=!1,["prevent"])),onDrop:no(We,["prevent"]),onClick:tt},[V("input",{ref_key:"fileInputRef",ref:$,type:"file",accept:"image/*",class:"hidden",onChange:Ct},null,544),V("div",a3,[Ke(vt(bx),{class:"w-8 h-8"})]),j[22]||(j[22]=Wl('<div><h3 class="text-base font-semibold text-slate-200">点击或将照片拖拽至此处</h3><p class="text-xs text-slate-400 mt-1">支持 JPG / PNG / WebP 格式，也可直接使用 <kbd class="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">Ctrl + V</kbd> 粘贴</p></div><div class="text-[11px] text-slate-500 bg-slate-800/60 px-4 py-2 rounded-xl border border-slate-700/60 space-y-0.5 text-left w-full"><p class="font-medium text-slate-400">💡 拍摄或选图建议：</p><p>1. 建议正面免冠，双肩自然平齐</p><p>2. 光线明亮均匀，头发不遮挡眉毛与双耳</p><p>3. 任何背景均可，系统会自动进行发丝级抠图换底</p></div>',2))],32)):i.value==="camera"?(Qe(),at("div",o3,[V("video",{ref_key:"cameraVideoRef",ref:D,playsinline:"",autoplay:"",muted:"",class:"hidden"},null,512),V("div",{class:"relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/80 transition-all duration-300",style:es({width:Se.value.width,height:Se.value.height,aspectRatio:`${o.value.widthPx} / ${o.value.heightPx}`})},[V("canvas",{ref_key:"cameraCanvasRef",ref:N,class:"w-full h-full object-cover"},null,512),p.value?(Qe(),at("svg",l3,[...j[23]||(j[23]=[Wl('<line x1="15" y1="12" x2="85" y2="12" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8"></line><text x="50" y="9" font-size="3.5" fill="#93c5fd" text-anchor="middle">头顶留白区</text><ellipse cx="50" cy="46" rx="24" ry="30" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.85"></ellipse><line x1="30" y1="44" x2="70" y2="44" stroke="#38bdf8" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.6"></line><path d="M 12 128 Q 30 92, 50 94 Q 70 92, 88 128" fill="none" stroke="#60a5fa" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8"></path><text x="50" y="100" font-size="3.5" fill="#93c5fd" text-anchor="middle">双肩对齐基准</text>',6)])])):Nt("",!0)],4),V("div",u3,[V("button",{onClick:ft,class:"p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition",title:"翻转镜头"},[Ke(vt(hx),{class:"w-5 h-5"})]),V("button",{onClick:Kt,disabled:g.value,class:"p-2 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/30 active:scale-90 transition disabled:opacity-50"},[...j[24]||(j[24]=[V("div",{class:"w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-transparent"},[V("div",{class:"w-10 h-10 rounded-full bg-white"})],-1)])],8,d3)])])):(Qe(),at("div",{key:2,class:"relative flex flex-col items-center justify-center w-full h-full p-2",onWheel:no(be,["prevent"])},[V("div",{ref_key:"viewportContainerRef",ref:O,class:"relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/80 cursor-grab active:cursor-grabbing transition-all duration-200",style:es({width:Se.value.width,height:Se.value.height,aspectRatio:`${o.value.widthPx} / ${o.value.heightPx}`}),onMousedown:ge,onTouchstart:he},[V("canvas",{ref_key:"editorCanvasRef",ref:C,class:"w-full h-full block"},null,512),p.value?(Qe(),at("svg",c3,[...j[25]||(j[25]=[Wl('<line x1="15" y1="12" x2="85" y2="12" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8"></line><text x="50" y="9" font-size="3.5" fill="#93c5fd" text-anchor="middle">头顶留白线</text><ellipse cx="50" cy="46" rx="24" ry="30" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.85"></ellipse><line x1="30" y1="44" x2="70" y2="44" stroke="#38bdf8" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.6"></line><path d="M 12 128 Q 30 92, 50 94 Q 70 92, 88 128" fill="none" stroke="#60a5fa" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8"></path><text x="50" y="100" font-size="3.5" fill="#93c5fd" text-anchor="middle">双肩对准线</text><line x1="50" y1="5" x2="50" y2="135" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="2,4" opacity="0.4"></line>',7)])])):Nt("",!0)],36),V("div",p3,[j[26]||(j[26]=V("span",null,"🖱️ 拖拽平移画面",-1)),j[27]||(j[27]=V("span",null,"·",-1)),V("span",null,"🔍 滚轮/滑块缩放: "+Je(Math.round(F.scale*100))+"%",1),V("button",{onClick:ne,class:"text-blue-400 hover:text-blue-300 underline text-[11px] ml-1"}," 居中复位 ")])],32)),g.value?(Qe(),at("div",f3,[Ke(vt(ry),{class:"w-10 h-10 text-blue-500 animate-spin mb-3"}),V("h4",h3,Je(y.value||"AI 正在进行发丝级抠图..."),1),j[28]||(j[28]=V("p",{class:"text-xs text-slate-400 mt-1"},"本地端侧加速中，完全无需联网",-1)),V("div",m3,[V("div",{class:"bg-blue-500 h-full transition-all duration-200",style:es({width:`${v.value}%`})},null,4)])])):Nt("",!0)]),V("aside",g3,[V("div",y3,[V("div",b3,[V("span",v3,Je(o.value.name),1),j[29]||(j[29]=V("span",{class:"text-[11px] text-blue-400 font-mono"},"300 DPI",-1))]),V("div",w3,[V("span",null,"物理尺寸: "+Je(o.value.widthMm)+" × "+Je(o.value.heightMm)+" mm",1),V("span",null,"分辨率: "+Je(o.value.widthPx)+" × "+Je(o.value.heightPx)+" px",1)]),V("p",_3,Je(o.value.description),1)]),V("div",x3,[j[30]||(j[30]=V("label",{class:"block text-xs font-semibold text-slate-300"},"智能换底色:",-1)),V("div",$3,[(Qe(!0),at(Wt,null,is(l.value,me=>(Qe(),at("button",{key:me.id,onClick:ct=>H(me),class:Qr(["flex flex-col items-center justify-center p-2 rounded-xl border transition-all text-[11px]",d.value.id===me.id?"border-blue-500 bg-blue-950/40 text-blue-300 font-medium":"border-slate-800 hover:border-slate-700 bg-slate-800/40 text-slate-400"])},[V("span",{class:Qr(["w-6 h-6 rounded-full mb-1 flex items-center justify-center shadow-sm",me.previewClass])},[d.value.id===me.id?(Qe(),Xs(vt(dx),{key:0,class:Qr(["w-3.5 h-3.5",me.id==="bg_white"?"text-slate-900":"text-white"])},null,8,["class"])):Nt("",!0)],2),V("span",null,Je(me.name),1)],10,S3))),128))])]),A.value?(Qe(),at("button",{key:0,onClick:Y,class:"w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20 transition active:scale-95 group border border-blue-400/30"},[V("div",T3,[Ke(vt(yx),{class:"w-4 h-4 text-amber-300 animate-pulse"}),j[31]||(j[31]=V("div",null,[V("div",{class:"text-xs font-bold leading-tight flex items-center space-x-1"},[V("span",null,"AI 智能人脸国标对齐")]),V("div",{class:"text-[10px] text-blue-100 opacity-90"},"头顶留白约8.5%，居中黄金比例")],-1))]),j[32]||(j[32]=V("span",{class:"text-[11px] bg-white/20 group-hover:bg-white/30 px-2 py-0.5 rounded-full font-medium transition"},"一键对齐",-1))])):Nt("",!0),A.value?(Qe(),at("div",k3,[V("div",C3,[j[33]||(j[33]=V("span",{class:"font-medium text-slate-300"},"缩放大小",-1)),V("span",E3,Je(Math.round(F.scale*100))+"%",1)]),Sr(V("input",{"onUpdate:modelValue":j[7]||(j[7]=me=>F.scale=me),type:"range",min:"0.4",max:"2.5",step:"0.02",onInput:Ee,class:"w-full accent-blue-500 cursor-pointer"},null,544),[[ki,F.scale,void 0,{number:!0}]]),V("div",I3,[V("button",{onClick:j[8]||(j[8]=me=>se(-90)),class:"flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"},[Ke(vt(mx),{class:"w-3.5 h-3.5"}),j[34]||(j[34]=V("span",null,"左转90°",-1))]),V("button",{onClick:j[9]||(j[9]=me=>se(90)),class:"flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"},[Ke(vt(gx),{class:"w-3.5 h-3.5"}),j[35]||(j[35]=V("span",null,"右转90°",-1))]),V("label",A3,[Sr(V("input",{type:"checkbox","onUpdate:modelValue":j[10]||(j[10]=me=>p.value=me),class:"rounded bg-slate-800 border-slate-700 text-blue-500"},null,512),[[cd,p.value]]),j[36]||(j[36]=V("span",null,"参考线",-1))])])])):Nt("",!0),V("div",O3,[V("div",z3,[V("button",{onClick:or,disabled:!A.value||g.value,class:"w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-semibold border border-slate-700 transition"},[Ke(vt(jd),{class:"w-4 h-4 text-emerald-400"}),j[37]||(j[37]=V("span",null,"导出单张(压缩)",-1))],8,M3),V("button",{onClick:gr,disabled:!A.value||g.value,class:"w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition"},[Ke(vt(px),{class:"w-4 h-4"}),j[38]||(j[38]=V("span",null,"加入待印托盘",-1))],8,R3)]),A.value?(Qe(),at("button",{key:0,onClick:tt,class:"w-full py-1.5 text-center text-xs text-slate-400 hover:text-slate-200 transition"}," 换一张照片... ")):Nt("",!0)])])]),ke.value?(Qe(),at("div",B3,[V("div",P3,[j[42]||(j[42]=V("h3",{class:"text-sm font-bold text-slate-100"},"自定义证件照尺寸",-1)),V("div",D3,[V("div",null,[j[39]||(j[39]=V("label",{class:"block text-slate-400 mb-1"},"规格名称",-1)),Sr(V("input",{"onUpdate:modelValue":j[11]||(j[11]=me=>te.name=me),placeholder:"例如：某报名考试特殊尺寸",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[ki,te.name]])]),V("div",N3,[V("div",null,[j[40]||(j[40]=V("label",{class:"block text-slate-400 mb-1"},"宽度 (mm)",-1)),Sr(V("input",{"onUpdate:modelValue":j[12]||(j[12]=me=>te.widthMm=me),type:"number",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[ki,te.widthMm,void 0,{number:!0}]])]),V("div",null,[j[41]||(j[41]=V("label",{class:"block text-slate-400 mb-1"},"高度 (mm)",-1)),Sr(V("input",{"onUpdate:modelValue":j[13]||(j[13]=me=>te.heightMm=me),type:"number",class:"w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"},null,512),[[ki,te.heightMm,void 0,{number:!0}]])])]),V("p",U3,"自动以 300 DPI 换算分辨率："+Je($e.value),1)]),V("div",L3,[V("button",{onClick:j[14]||(j[14]=me=>ke.value=!1),class:"px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs"},"取消"),V("button",{onClick:gt,class:"px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"},"确认并应用")])])])):Nt("",!0)]))}});function Vs(e,t=300){return new Promise((r,n)=>{const i=new FileReader;i.onload=()=>{try{const s=i.result,a=V3(s,t);r(new Blob([a],{type:"image/jpeg"}))}catch(s){n(s)}},i.onerror=()=>n(i.error),i.readAsArrayBuffer(e)})}function V3(e,t=300){const r=new Uint8Array(e);if(r.length<4||r[0]!==255||r[1]!==216)return console.warn("[dpiWriter] 不是有效的 JPEG 文件格式，原样返回"),e;const n=t>>8&255,i=t&255;if(r[2]===255&&r[3]===224&&r[6]===74&&r[7]===70&&r[8]===73&&r[9]===70&&r[10]===0&&r.length>=18){const l=new Uint8Array(r);return l[13]=1,l[14]=n,l[15]=i,l[16]=n,l[17]=i,l.buffer}const s=new Uint8Array([255,224,0,16,74,70,73,70,0,1,2,1,n,i,n,i,0,0]),a=new Uint8Array(r.length+s.length);return a.set(r.subarray(0,2),0),a.set(s,2),a.set(r.subarray(2),2+s.length),a.buffer}class Go{static async generatePrintPages(t,r){const{paper:n,marginMm:i=5,gapMm:s=3,showCutLines:a=!0,showFootnote:o=!0}=r,l=n.widthPx,d=n.heightPx,p=as(i),f=as(s),g=[];for(const S of t){if(S.printCount<=0)continue;const x=await this.renderItemToCanvas(S);for(let A=0;A<S.printCount;A++)g.push({item:S,w:S.spec.widthPx,h:S.spec.heightPx,canvas:x})}if(g.length===0)return[];const v=[];let y=0;const $=l-p*2,E=d-p*2;for(;y<g.length;){const S=v.length+1,x=document.createElement("canvas");x.width=l,x.height=d;const A=x.getContext("2d");if(!A)break;A.fillStyle="#FFFFFF",A.fillRect(0,0,l,d);let C=p,O=p,D=0,N=0;for(;y<g.length;){const k=g[y],q=k.w,Z=k.h;if(C+q>l-p&&(C=p,O+=D+f,D=0),O+Z>d-p)break;A.drawImage(k.canvas,C,O,q,Z),a&&this.drawCropCrossMarks(A,C,O,q,Z,r.cutLineOffsetPx||4,r.cutLineLengthPx||12),o&&this.drawFootnote(A,k.item,C,O,q,Z),D=Math.max(D,Z),C+=q+f,y++,N++}if(N===0&&y<g.length){const k=g[y];A.drawImage(k.canvas,p,p,Math.min(k.w,$),Math.min(k.h,E)),y++,N++}v.push({pageIndex:S,canvas:x,placedCount:N})}return v}static async renderItemToCanvas(t){const r=document.createElement("canvas");r.width=t.spec.widthPx,r.height=t.spec.heightPx;const n=r.getContext("2d");if(!n)return r;const i=r.width,s=r.height;if(t.selectedBg.value==="original"){const v=await this.blobToImage(t.originalBlob),y=v.width/v.height,$=i/s;let E=i,S=s,x=0,A=0;return y>$?(S=s,E=s*y,x=(i-E)/2):(E=i,S=i/y,A=(s-S)/2),n.drawImage(v,x,A,E,S),r}if(t.selectedBg.value!=="transparent"){if(t.selectedBg.isGradient&&t.selectedBg.gradientStops){const v=n.createLinearGradient(0,0,0,s);v.addColorStop(0,t.selectedBg.gradientStops[0]),v.addColorStop(1,t.selectedBg.gradientStops[1]),n.fillStyle=v}else n.fillStyle=t.selectedBg.value||"#FFFFFF";n.fillRect(0,0,i,s)}else n.clearRect(0,0,i,s);const a=await this.blobToImage(t.cutoutBlob),o=a.width/a.height,l=i/s;let d=i,p=s,f=0,g=0;return o>l?(p=s,d=s*o,f=(i-d)/2):(d=i,p=i/o,g=(s-p)/2),n.drawImage(a,f,g,d,p),r}static drawCropCrossMarks(t,r,n,i,s,a=4,o=12){t.save(),t.strokeStyle="#CCCCCC",t.lineWidth=1;const l=[{cx:r,cy:n,dx:-1,dy:-1},{cx:r+i,cy:n,dx:1,dy:-1},{cx:r,cy:n+s,dx:-1,dy:1},{cx:r+i,cy:n+s,dx:1,dy:1}];for(const{cx:d,cy:p,dx:f,dy:g}of l)t.beginPath(),t.moveTo(d+f*a,p),t.lineTo(d+f*(a+o),p),t.stroke(),t.beginPath(),t.moveTo(d,p+g*a),t.lineTo(d,p+g*(a+o)),t.stroke();t.restore()}static drawFootnote(t,r,n,i,s,a){t.save(),t.fillStyle="#9CA3AF",t.font="10px sans-serif",t.textAlign="center",t.textBaseline="top";const o=`${r.memberName||"成员"} · ${r.spec.name}`;t.fillText(o,n+s/2,i+a+6),t.restore()}static async exportPageAs300DpiBlob(t){return new Promise((r,n)=>{t.toBlob(async i=>{if(!i){n(new Error("页面 Canvas 导出失败"));return}try{const s=await Vs(i,300);r(s)}catch(s){n(s)}},"image/jpeg",.98)})}static blobToImage(t){return new Promise((r,n)=>{const i=URL.createObjectURL(t),s=new Image;s.onload=()=>{URL.revokeObjectURL(i),r(s)},s.onerror=()=>{URL.revokeObjectURL(i),n(new Error("图片加载失败"))},s.src=i})}}const j3={class:"fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md flex flex-col justify-end sm:justify-center items-center sm:p-4"},W3={class:"w-full max-w-2xl bg-slate-900 border-t sm:border border-slate-800 rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"},q3={class:"flex items-center justify-between px-5 py-4 border-b border-slate-800"},H3={class:"flex items-center space-x-2"},G3={class:"text-base font-bold text-slate-100"},K3={class:"flex items-center space-x-2"},X3={class:"flex-1 overflow-y-auto p-4 space-y-3"},Y3={key:0,class:"py-12 flex flex-col items-center justify-center text-slate-500 space-y-2"},Z3={class:"relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-950 border border-slate-700"},Q3=["src"],J3={class:"absolute bottom-0 inset-x-0 bg-black/60 text-[9px] text-center text-slate-300 py-0.5"},eS={class:"flex-1 min-w-0 mx-3 space-y-1.5"},tS={class:"flex items-center space-x-2"},rS=["onUpdate:modelValue"],nS={class:"text-xs text-slate-400"},iS={class:"flex items-center space-x-1.5 pt-0.5"},sS=["onClick","title"],aS={class:"flex flex-col items-end space-y-2"},oS={class:"flex items-center space-x-1 bg-slate-900 rounded-lg p-1 border border-slate-700"},lS=["onClick"],uS={class:"w-7 text-center text-xs font-semibold text-slate-200"},dS=["onClick"],cS={class:"flex items-center space-x-2 text-xs"},pS=["onClick"],fS=["onClick"],hS={class:"p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between"},mS={class:"text-sm font-bold text-blue-400"},gS={class:"flex items-center space-x-3"},yS=["disabled"],bS=pa({__name:"PhotoTray",props:{items:{}},emits:["close","remove-item","clear-all","export-single","open-packing","update-item"],setup(e,{emit:t}){const r=e,n=t,i=pd,s=Ys(()=>r.items.reduce((d,p)=>d+p.printCount,0));function a(d){d.printCount++,n("update-item",d)}function o(d){d.printCount>1&&(d.printCount--,n("update-item",d))}async function l(d,p){d.selectedBg=p;const f=await Go.renderItemToCanvas(d);d.previewUrl=f.toDataURL("image/jpeg",.9),n("update-item",d)}return(d,p)=>(Qe(),at("div",j3,[V("div",W3,[V("div",q3,[V("div",H3,[Ke(vt(ty),{class:"w-5 h-5 text-blue-400"}),V("h2",G3,"待印照片托盘 ("+Je(e.items.length)+")",1)]),V("div",K3,[e.items.length>0?(Qe(),at("button",{key:0,onClick:p[0]||(p[0]=f=>d.$emit("clear-all")),class:"text-xs text-rose-400 hover:text-rose-300 px-2 py-1 transition"}," 清空托盘 ")):Nt("",!0),V("button",{onClick:p[1]||(p[1]=f=>d.$emit("close")),class:"p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"},[Ke(vt(Wd),{class:"w-5 h-5"})])])]),V("div",X3,[e.items.length===0?(Qe(),at("div",Y3,[Ke(vt(wx),{class:"w-10 h-10 stroke-[1.5]"}),p[4]||(p[4]=V("p",{class:"text-sm"},"托盘暂无照片，请先拍摄或上传照片",-1))])):Nt("",!0),(Qe(!0),at(Wt,null,is(e.items,(f,g)=>(Qe(),at("div",{key:f.id,class:"flex items-center justify-between bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 hover:border-slate-600 transition"},[V("div",Z3,[V("img",{src:f.previewUrl,class:"w-full h-full object-cover"},null,8,Q3),V("span",J3,Je(f.spec.widthMm)+"×"+Je(f.spec.heightMm),1)]),V("div",eS,[V("div",tS,[Sr(V("input",{"onUpdate:modelValue":v=>f.memberName=v,placeholder:"成员姓名",class:"bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-100 w-24 focus:ring-1 focus:ring-blue-500 focus:outline-none"},null,8,rS),[[ki,f.memberName]]),V("span",nS,Je(f.spec.name),1)]),V("div",iS,[(Qe(!0),at(Wt,null,is(vt(i),v=>(Qe(),at("button",{key:v.id,onClick:y=>l(f,v),class:Qr(["w-4 h-4 rounded-full border border-slate-600 transition-transform",[v.previewClass,f.selectedBg.id===v.id?"ring-2 ring-blue-400 scale-110":""]]),title:v.name},null,10,sS))),128))])]),V("div",aS,[V("div",oS,[V("button",{onClick:v=>o(f),class:"w-6 h-6 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"},[Ke(vt(cx),{class:"w-3.5 h-3.5"})],8,lS),V("span",uS,Je(f.printCount),1),V("button",{onClick:v=>a(f),class:"w-6 h-6 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"},[Ke(vt(fx),{class:"w-3.5 h-3.5"})],8,dS)]),V("div",cS,[V("button",{onClick:v=>d.$emit("export-single",f),class:"text-blue-400 hover:text-blue-300"}," 单张导出 ",8,pS),V("button",{onClick:v=>d.$emit("remove-item",f.id),class:"text-rose-400 hover:text-rose-300"}," 删除 ",8,fS)])])]))),128))]),V("div",hS,[V("div",null,[p[5]||(p[5]=V("span",{class:"text-xs text-slate-400"},"总待打印张数: ",-1)),V("span",mS,Je(s.value)+" 张",1)]),V("div",gS,[V("button",{onClick:p[2]||(p[2]=f=>d.$emit("close")),class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"}," 继续拍照 "),V("button",{onClick:p[3]||(p[3]=f=>d.$emit("open-packing")),disabled:s.value===0,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5"},[Ke(vt(Do),{class:"w-4 h-4"}),p[6]||(p[6]=V("span",null,"智能混排拼版",-1))],8,yS)])])])]))}});function _o(e,t,r){return new Promise((n,i)=>{e.toBlob(s=>{s?n(s):i(new Error("Canvas 转 Blob 失败"))},t,r)})}async function vS(e,t){const{targetKb:r,toleranceKb:n=3,maxIterations:i=6,minQuality:s=.1,maxQuality:a=.98,autoScaleIfExceeded:o=!0,dpi:l=300}=t;let d=e,p=e.width,f=e.height,g=s,v=a,y=null,$=a,E=1/0,S=0;const x=await _o(d,"image/jpeg",v),A=await Vs(x,l),C=A.size/1024;if(C<=r)return{blob:A,sizeKb:Math.round(C*10)/10,quality:v,iterations:1,width:p,height:f};for(let O=0;O<i;O++){S++;const D=(g+v)/2,N=await _o(d,"image/jpeg",D),k=await Vs(N,l),q=k.size/1024;if(q<=r){if(y=k,$=D,E=q,r-q<=n)break;g=D}else v=D}if(!y&&o){let O=.9;for(let D=0;D<3;D++){const N=document.createElement("canvas");N.width=Math.round(p*O),N.height=Math.round(f*O);const k=N.getContext("2d");if(k){k.imageSmoothingEnabled=!0,k.imageSmoothingQuality="high",k.drawImage(e,0,0,N.width,N.height);const q=await _o(N,"image/jpeg",.5),Z=await Vs(q,l),ae=Z.size/1024;if(ae<=r)return{blob:Z,sizeKb:Math.round(ae*10)/10,quality:.5,iterations:S+D+1,width:N.width,height:N.height}}O-=.15}}if(!y){const O=await _o(d,"image/jpeg",s);y=await Vs(O,l),E=y.size/1024,$=s}return{blob:y,sizeKb:Math.round(E*10)/10,quality:Math.round($*100)/100,iterations:S,width:p,height:f}}const wS={class:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"},_S={class:"bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden flex flex-col shadow-2xl"},xS={class:"flex items-center justify-between px-5 py-3.5 border-b border-slate-800"},$S={class:"p-5 space-y-4 overflow-y-auto max-h-[75vh]"},SS={class:"flex justify-center bg-slate-950 p-4 rounded-xl border border-slate-800 relative"},TS=["src"],kS={class:"grid grid-cols-3 gap-2 text-center text-xs"},CS={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},ES={class:"font-semibold text-slate-200"},IS={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},AS={class:"font-semibold text-slate-200"},OS={class:"bg-slate-800/60 p-2.5 rounded-xl border border-slate-800"},zS={class:"font-semibold text-emerald-400"},MS={class:"bg-slate-800/40 p-3.5 rounded-xl border border-slate-800 space-y-3"},RS={class:"flex items-center justify-between"},BS={class:"text-xs text-blue-400 font-mono font-medium"},PS={class:"flex items-center space-x-2"},DS=["onClick"],NS={key:0,class:"text-[11px] text-slate-400 flex items-center justify-between pt-1"},US={class:"space-y-2"},LS={class:"flex items-center justify-between text-xs text-slate-400"},FS={class:"p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-end space-x-3"},VS=["disabled"],jS=pa({__name:"ExportModal",props:{item:{}},emits:["close"],setup(e,{emit:t}){const r=e,n=Ze(50),i=Ze(100),s=Ze(!1),a=Ze(0),o=Ze(null),l=Ze("");let d=null;fa(()=>{f()});function p(v){n.value=v,f()}async function f(){s.value=!0;try{const v=await Go.renderItemToCanvas(r.item);let y=v;if(i.value!==100){const E=document.createElement("canvas");E.width=v.width,E.height=v.height;const S=E.getContext("2d");S&&(S.filter=`brightness(${i.value}%)`,S.drawImage(v,0,0),y=E)}const $=await vS(y,{targetKb:n.value,toleranceKb:2,maxIterations:6,dpi:300});o.value=$,a.value=$.sizeKb,d=$.blob,l.value&&URL.revokeObjectURL(l.value),l.value=URL.createObjectURL($.blob)}catch(v){console.error("二分压缩错误:",v)}finally{s.value=!1}}function g(){if(!d)return;const v=URL.createObjectURL(d),y=document.createElement("a");y.href=v;const $=`${r.item.memberName||"证件照"}_${r.item.spec.name}_300DPI_${a.value}KB.jpg`;y.download=$,document.body.appendChild(y),y.click(),document.body.removeChild(y),URL.revokeObjectURL(v)}return(v,y)=>(Qe(),at("div",wS,[V("div",_S,[V("div",xS,[y[4]||(y[4]=V("h3",{class:"text-sm font-bold text-slate-100 flex items-center space-x-2"},[V("span",null,"单张证件照导出与合规压缩")],-1)),V("button",{onClick:y[0]||(y[0]=$=>v.$emit("close")),class:"text-slate-400 hover:text-white p-1"},[Ke(vt(Wd),{class:"w-5 h-5"})])]),V("div",$S,[V("div",SS,[V("img",{src:l.value||e.item.previewUrl,class:"max-h-56 object-contain rounded shadow-lg border border-slate-700"},null,8,TS),y[5]||(y[5]=V("div",{class:"absolute bottom-6 right-6 bg-slate-900/90 border border-slate-700 px-2 py-1 rounded text-[11px] text-blue-400 font-mono"}," 300 DPI 物理打印标记已注入 ",-1))]),V("div",kS,[V("div",CS,[y[6]||(y[6]=V("span",{class:"block text-slate-400 text-[10px]"},"物理尺寸",-1)),V("span",ES,Je(e.item.spec.widthMm)+" × "+Je(e.item.spec.heightMm)+" mm",1)]),V("div",IS,[y[7]||(y[7]=V("span",{class:"block text-slate-400 text-[10px]"},"像素分辨率",-1)),V("span",AS,Je(e.item.spec.widthPx)+" × "+Je(e.item.spec.heightPx)+" px",1)]),V("div",OS,[y[8]||(y[8]=V("span",{class:"block text-slate-400 text-[10px]"},"实际体积",-1)),V("span",zS,Je(a.value?`${a.value} KB`:"计算中..."),1)])]),V("div",MS,[V("div",RS,[y[9]||(y[9]=V("label",{class:"text-xs font-semibold text-slate-300"},"目标文件大小限制 (KB)",-1)),V("span",BS,"≤ "+Je(n.value)+" KB",1)]),V("div",PS,[(Qe(),at(Wt,null,is([20,30,50,100,200],$=>V("button",{key:$,onClick:E=>p($),class:Qr(["px-2.5 py-1 rounded-lg text-xs font-medium transition",n.value===$?"bg-blue-600 text-white":"bg-slate-800 text-slate-400 hover:text-slate-200"])},Je($)+"K ",11,DS)),64))]),Sr(V("input",{"onUpdate:modelValue":y[1]||(y[1]=$=>n.value=$),type:"range",min:"10",max:"300",step:"5",onChange:f,class:"w-full accent-blue-500 cursor-pointer"},null,544),[[ki,n.value,void 0,{number:!0}]]),o.value?(Qe(),at("div",NS,[V("span",null,"二分逼近质量: "+Je(Math.round(o.value.quality*100))+"%",1),V("span",null,"迭代收敛: "+Je(o.value.iterations)+" 次",1)])):Nt("",!0)]),V("div",US,[V("div",LS,[y[10]||(y[10]=V("span",null,"画面亮度",-1)),V("span",null,Je(i.value)+"%",1)]),Sr(V("input",{"onUpdate:modelValue":y[2]||(y[2]=$=>i.value=$),type:"range",min:"80",max:"120",onChange:f,class:"w-full accent-blue-500 cursor-pointer"},null,544),[[ki,i.value,void 0,{number:!0}]])])]),V("div",FS,[V("button",{onClick:y[3]||(y[3]=$=>v.$emit("close")),class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"}," 取消 "),V("button",{onClick:g,disabled:s.value,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5 disabled:opacity-50"},[Ke(vt(jd),{class:"w-4 h-4"}),V("span",null,Je(s.value?"压缩计算中...":"下载无损 300 DPI 照"),1)],8,VS)])])]))}}),WS={class:"fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 overflow-hidden"},qS={class:"w-full flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3 shadow-lg"},HS={class:"flex items-center space-x-3"},GS={class:"flex items-center space-x-3"},KS=["value"],XS={class:"flex-1 w-full my-3 flex items-center justify-center overflow-auto p-2"},YS={key:0,class:"flex flex-col items-center justify-center text-slate-400 space-y-2"},ZS={key:1,class:"relative flex flex-col items-center max-h-full max-w-full"},QS={class:"bg-white rounded-lg shadow-2xl p-1 border-2 border-slate-700 overflow-hidden flex items-center justify-center"},JS={key:0,class:"flex items-center space-x-3 mt-3 bg-slate-900/90 px-3 py-1.5 rounded-full border border-slate-800"},eT=["disabled"],tT={class:"text-xs font-medium text-slate-400"},rT=["disabled"],nT={class:"w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"},iT={class:"flex items-center space-x-4 text-xs text-slate-300"},sT={class:"flex items-center space-x-1.5 cursor-pointer"},aT={class:"flex items-center space-x-1.5 cursor-pointer"},oT={class:"flex items-center space-x-3"},lT=pa({__name:"PrintLayoutModal",props:{items:{}},emits:["close"],setup(e,{emit:t}){const r=e,n=Ze(so),i=Ze(so[0].id),s=rs({paper:so[0],marginMm:4,gapMm:3,showCutLines:!0,showFootnote:!0,cutLineOffsetPx:4,cutLineLengthPx:14}),a=Ze(!1),o=Ze([]),l=Ze(0),d=Ze(null);fa(()=>{p()});async function p(){const E=n.value.find(S=>S.id===i.value)||so[0];s.paper=E,a.value=!0;try{o.value=await Go.generatePrintPages(r.items,s),l.value=0,await Ti(),f()}catch(S){console.error("混排拼版错误:",S)}finally{a.value=!1}}function f(){if(o.value.length===0||!d.value)return;const E=o.value[l.value],S=d.value;S.width=E.canvas.width,S.height=E.canvas.height;const x=S.getContext("2d");x&&x.drawImage(E.canvas,0,0)}function g(){l.value>0&&(l.value--,f())}function v(){l.value<o.value.length-1&&(l.value++,f())}async function y(){if(o.value.length===0)return;const E=o.value[l.value],S=await Go.exportPageAs300DpiBlob(E.canvas),x=URL.createObjectURL(S),A=document.createElement("a");A.href=x,A.download=`证件照混排打印_${s.paper.name}_第${l.value+1}页_300DPI.jpg`,document.body.appendChild(A),A.click(),document.body.removeChild(A),URL.revokeObjectURL(x)}function $(){if(o.value.length===0)return;const S=o.value[l.value].canvas.toDataURL("image/jpeg",1),x=window.open("","_blank");if(!x){alert("请允许弹出窗口以调用原生打印");return}x.document.write(`
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
  `),x.document.close()}return(E,S)=>(Qe(),at("div",WS,[V("header",qS,[V("div",HS,[Ke(vt(Do),{class:"w-5 h-5 text-blue-400"}),S[4]||(S[4]=V("h2",{class:"text-sm sm:text-base font-bold text-slate-100"},"智能多人混排拼版工作台",-1))]),V("div",GS,[Sr(V("select",{"onUpdate:modelValue":S[0]||(S[0]=x=>i.value=x),onChange:p,class:"bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"},[(Qe(!0),at(Wt,null,is(n.value,x=>(Qe(),at("option",{key:x.id,value:x.id},Je(x.name),9,KS))),128))],544),[[J0,i.value]]),V("button",{onClick:S[1]||(S[1]=x=>E.$emit("close")),class:"p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"},[Ke(vt(Wd),{class:"w-5 h-5"})])])]),V("main",XS,[a.value?(Qe(),at("div",YS,[Ke(vt(ry),{class:"w-8 h-8 animate-spin text-blue-500"}),S[5]||(S[5]=V("span",{class:"text-xs"},"正在计算最优拼版装箱...",-1))])):o.value.length>0?(Qe(),at("div",ZS,[V("div",QS,[V("canvas",{ref_key:"displayCanvasRef",ref:d,class:"max-h-[60vh] max-w-[85vw] object-contain shadow-inner"},null,512)]),o.value.length>1?(Qe(),at("div",JS,[V("button",{onClick:g,disabled:l.value===0,class:"px-2 py-0.5 rounded text-xs text-slate-300 disabled:opacity-30 hover:bg-slate-800"}," 上一页 ",8,eT),V("span",tT," 第 "+Je(l.value+1)+" / "+Je(o.value.length)+" 页 ",1),V("button",{onClick:v,disabled:l.value===o.value.length-1,class:"px-2 py-0.5 rounded text-xs text-slate-300 disabled:opacity-30 hover:bg-slate-800"}," 下一页 ",8,rT)])):Nt("",!0)])):Nt("",!0)]),V("footer",nT,[V("div",iT,[V("label",sT,[Sr(V("input",{type:"checkbox","onUpdate:modelValue":S[2]||(S[2]=x=>s.showCutLines=x),onChange:p,class:"rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0"},null,544),[[cd,s.showCutLines]]),S[6]||(S[6]=V("span",null,"浅灰十字裁切线 (#CCCCCC)",-1))]),V("label",aT,[Sr(V("input",{type:"checkbox","onUpdate:modelValue":S[3]||(S[3]=x=>s.showFootnote=x),onChange:p,class:"rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0"},null,544),[[cd,s.showFootnote]]),S[7]||(S[7]=V("span",null,"姓名/规格微型脚标",-1))])]),V("div",oT,[V("button",{onClick:$,class:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition flex items-center space-x-1.5"},[Ke(vt(Do),{class:"w-4 h-4"}),S[8]||(S[8]=V("span",null,"系统原生打印",-1))]),V("button",{onClick:y,class:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5"},[Ke(vt(jd),{class:"w-4 h-4"}),V("span",null,"下载 300 DPI 冲印原图 (第 "+Je(l.value+1)+" 页)",1)])])])]))}}),uT={class:"w-full h-screen bg-slate-950 flex flex-col overflow-hidden"},dT={key:0,class:"fixed top-14 inset-x-0 mx-auto w-fit z-50 bg-emerald-600/90 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-xl backdrop-blur-md flex items-center space-x-2"},cT=pa({__name:"App",setup(e){const t=Ze([]),r=Ze(!1),n=Ze(!1),i=Ze(null),s=Ze("");let a=null;function o(y){s.value=y,a&&clearTimeout(a),a=setTimeout(()=>{s.value=""},2500)}function l(y){t.value.push(y),o(`已成功加入托盘：${y.spec.name} (${y.printCount}张)`)}function d(y){i.value=y}function p(y){t.value=t.value.filter($=>$.id!==y)}function f(){t.value=[]}function g(){r.value=!1,n.value=!0}function v(y){const $=t.value.findIndex(E=>E.id===y.id);$!==-1&&(t.value[$]={...y})}return(y,$)=>(Qe(),at("div",uT,[Ke(F3,{"tray-count":t.value.length,onPhotoAddedToTray:l,onOpenSingleExport:d,onOpenTray:$[0]||($[0]=E=>r.value=!0),onOpenPacking:$[1]||($[1]=E=>n.value=!0),onShowToast:o},null,8,["tray-count"]),r.value?(Qe(),Xs(bS,{key:0,items:t.value,onClose:$[2]||($[2]=E=>r.value=!1),onRemoveItem:p,onClearAll:f,onExportSingle:d,onOpenPacking:g,onUpdateItem:v},null,8,["items"])):Nt("",!0),i.value?(Qe(),Xs(jS,{key:1,item:i.value,onClose:$[3]||($[3]=E=>i.value=null)},null,8,["item"])):Nt("",!0),n.value?(Qe(),Xs(lT,{key:2,items:t.value,onClose:$[4]||($[4]=E=>n.value=!1)},null,8,["items"])):Nt("",!0),Ke(A2,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform translate-y-4 opacity-0","enter-to-class":"transform translate-y-0 opacity-100","leave-active-class":"transition duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:y0(()=>[s.value?(Qe(),at("div",dT,[$[5]||($[5]=V("span",null,"✓",-1)),V("span",null,Je(s.value),1)])):Nt("",!0)]),_:1})]))}}),pT=sx(cT);pT.mount("#app");
