import{b as G,j as v,F as Me}from"./index.5d213138.js";var T="C:\\Users\\asus\\Desktop\\TrackMe\\trackme-front-v0\\node_modules\\@iconify\\react\\dist\\iconify.mjs";const j=/^[a-z0-9]+(-[a-z0-9]+)*$/,D=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),f={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!F(f)?null:f}const i=o[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!F(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return t&&!F(c,n)?null:c}return null},F=(e,t)=>e?!!((e.provider===""||e.provider.match(j))&&(t&&e.prefix===""||e.prefix.match(j))&&e.name.match(j)):!1,pe=Object.freeze({left:0,top:0,width:16,height:16}),O=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),W=Object.freeze({...pe,...O}),z=Object.freeze({...W,body:"",hidden:!1});function Fe(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function ne(e,t){const n=Fe(e,t);for(const r in z)r in O?r in e&&!(r in n)&&(n[r]=O[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function Le(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(o[s]=[c].concat(l))}return o[s]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(i),o}function Oe(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let i={};function s(c){i=ne(r[c]||o[c],i)}return s(t),n.forEach(s),ne(e,i)}function ge(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=Le(e);for(const o in r){const i=r[o];i&&(t(o,Oe(e,o,i)),n.push(o))}return n}const De={provider:"",aliases:{},not_found:{},...pe};function U(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function me(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!U(e,De))return null;const n=t.icons;for(const o in n){const i=n[o];if(!o.match(j)||typeof i.body!="string"||!U(i,z))return null}const r=t.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(j)||typeof s!="string"||!n[s]&&!r[s]||!U(i,z))return null}return t}const oe=Object.create(null);function Ae(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function S(e,t){const n=oe[e]||(oe[e]=Object.create(null));return n[t]||(n[t]=Ae(e,t))}function J(e,t){return me(t)?ge(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Re(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let N=!1;function ye(e){return typeof e=="boolean"&&(N=e),N}function Ue(e){const t=typeof e=="string"?D(e,!0,N):e;if(t){const n=S(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Be(e,t){const n=D(e,!0,N);if(!n)return!1;const r=S(n.provider,n.prefix);return Re(r,n.name,t)}function ze(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),N&&!t&&!e.prefix){let o=!1;return me(e)&&(e.prefix="",ge(e,(i,s)=>{s&&Be(i,s)&&(o=!0)})),o}const n=e.prefix;if(!F({provider:t,prefix:n,name:"a"}))return!1;const r=S(t,n);return!!J(r,e)}const be=Object.freeze({width:null,height:null}),we=Object.freeze({...be,...O}),Qe=/(-?[0-9.]*[0-9]+[0-9.]*)/g,$e=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function re(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(Qe);if(r===null||!r.length)return e;const o=[];let i=r.shift(),s=$e.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?o.push(i):o.push(Math.ceil(c*t*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}const qe=e=>e==="unset"||e==="undefined"||e==="none";function He(e,t){const n={...W,...e},r={...we,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(w=>{const g=[],k=w.hFlip,m=w.vFlip;let u=w.rotate;k?m?u+=2:(g.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),g.push("scale(-1 1)"),o.top=o.left=0):m&&(g.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),g.push("scale(1 -1)"),o.top=o.left=0);let b;switch(u<0&&(u-=Math.floor(u/4)*4),u=u%4,u){case 1:b=o.height/2+o.top,g.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:g.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,g.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}u%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),g.length&&(i='<g transform="'+g.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=o.width,f=o.height;let a,d;s===null?(d=c===null?"1em":c==="auto"?f:c,a=re(d,l/f)):(a=s==="auto"?l:s,d=c===null?re(a,f/l):c==="auto"?f:c);const p={},y=(w,g)=>{qe(g)||(p[w]=g.toString())};return y("width",a),y("height",d),p.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+f.toString(),{attributes:p,body:i}}const Ve=/\sid="(\S+)"/g,Ke="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ge=0;function We(e,t=Ke){const n=[];let r;for(;r=Ve.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof t=="function"?t(i):t+(Ge++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const Q=Object.create(null);function Je(e,t){Q[e]=t}function $(e){return Q[e]||Q[""]}function X(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Y=Object.create(null),_=["https://api.simplesvg.com","https://api.unisvg.com"],L=[];for(;_.length>0;)_.length===1||Math.random()>.5?L.push(_.shift()):L.push(_.pop());Y[""]=X({resources:["https://api.iconify.design"].concat(L)});function Xe(e,t){const n=X(t);return n===null?!1:(Y[e]=n,!0)}function Z(e){return Y[e]}const Ye=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ie=Ye();function Ze(e,t){const n=Z(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=t+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function et(e){return e===404}const tt=(e,t,n)=>{const r=[],o=Ze(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,f)=>{c+=l.length+1,c>=o&&f>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function nt(e){if(typeof e=="string"){const t=Z(e);if(t)return t.path}return"/"}const ot=(e,t,n)=>{if(!ie){n("abort",424);return}let r=nt(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;ie(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(et(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},rt={prepare:tt,send:ot};function it(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,c=o.name,l=n[i]||(n[i]=Object.create(null)),f=l[s]||(l[s]=S(i,s));let a;c in f.icons?a=t.loaded:s===""||f.missing.has(c)?a=t.missing:a=t.pending;const d={provider:i,prefix:s,name:c};a.push(d)}),t}function xe(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function st(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const f=l.name;if(e.icons[f])s.loaded.push({provider:r,prefix:o,name:f});else if(e.missing.has(f))s.missing.push({provider:r,prefix:o,name:f});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||xe([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let ct=0;function lt(e,t,n){const r=ct++,o=xe.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function ft(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const i=typeof o=="string"?D(o,t,n):o;i&&r.push(i)}),r}var at={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ut(e,t,n,r){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let h=e.resources.slice(0);for(s=[];h.length>1;){const x=Math.floor(Math.random()*h.length);s.push(h[x]),h=h.slice(0,x).concat(h.slice(x+1))}s=s.concat(h)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let l="pending",f=0,a,d=null,p=[],y=[];typeof r=="function"&&y.push(r);function w(){d&&(clearTimeout(d),d=null)}function g(){l==="pending"&&(l="aborted"),w(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function k(h,x){x&&(y=[]),typeof h=="function"&&y.push(h)}function m(){return{startTime:c,payload:t,status:l,queriesSent:f,queriesPending:p.length,subscribe:k,abort:g}}function u(){l="failed",y.forEach(h=>{h(void 0,a)})}function b(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function Ee(h,x,C){const E=x!=="success";switch(p=p.filter(I=>I!==h),l){case"pending":break;case"failed":if(E||!e.dataAfterTimeout)return;break;default:return}if(x==="abort"){a=C,u();return}if(E){a=C,p.length||(s.length?R():u());return}if(w(),b(),!e.random){const I=e.resources.indexOf(h.resource);I!==-1&&I!==e.index&&(e.index=I)}l="completed",y.forEach(I=>{I(C)})}function R(){if(l!=="pending")return;w();const h=s.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{w(),l==="pending"&&(b(),u())},e.timeout);return}u();return}const x={status:"pending",resource:h,callback:(C,E)=>{Ee(x,C,E)}};p.push(x),f++,d=setTimeout(R,e.rotate),n(h,t,x.callback)}return setTimeout(R),m}function Ie(e){const t={...at,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,f){const a=ut(t,c,l,(d,p)=>{r(),f&&f(d,p)});return n.push(a),a}function i(c){return n.find(l=>c(l))||null}return{query:o,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function se(){}const B=Object.create(null);function dt(e){if(!B[e]){const t=Z(e);if(!t)return;const n=Ie(t),r={config:t,redundancy:n};B[e]=r}return B[e]}function ht(e,t,n){let r,o;if(typeof e=="string"){const i=$(e);if(!i)return n(void 0,424),se;o=i.send;const s=dt(e);s&&(r=s.redundancy)}else{const i=X(e);if(i){r=Ie(i);const s=e.resources?e.resources[0]:"",c=$(s);c&&(o=c.send)}}return!r||!o?(n(void 0,424),se):r.query(t,o,n)().abort}const ce="iconify2",P="iconify",ve=P+"-count",le=P+"-version",Se=36e5,pt=168;function q(e,t){try{return e.getItem(t)}catch{}}function ee(e,t,n){try{return e.setItem(t,n),!0}catch{}}function fe(e,t){try{e.removeItem(t)}catch{}}function H(e,t){return ee(e,ve,t.toString())}function V(e){return parseInt(q(e,ve))||0}const A={local:!0,session:!0},ke={local:new Set,session:new Set};let te=!1;function gt(e){te=e}let M=typeof window>"u"?{}:window;function Ce(e){const t=e+"Storage";try{if(M&&M[t]&&typeof M[t].length=="number")return M[t]}catch{}A[e]=!1}function _e(e,t){const n=Ce(e);if(!n)return;const r=q(n,le);if(r!==ce){if(r){const c=V(n);for(let l=0;l<c;l++)fe(n,P+l.toString())}ee(n,le,ce),H(n,0);return}const o=Math.floor(Date.now()/Se)-pt,i=c=>{const l=P+c.toString(),f=q(n,l);if(typeof f=="string"){try{const a=JSON.parse(f);if(typeof a=="object"&&typeof a.cached=="number"&&a.cached>o&&typeof a.provider=="string"&&typeof a.data=="object"&&typeof a.data.prefix=="string"&&t(a,c))return!0}catch{}fe(n,l)}};let s=V(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,H(n,s)):ke[e].add(c))}function je(){if(!te){gt(!0);for(const e in A)_e(e,t=>{const n=t.data,r=t.provider,o=n.prefix,i=S(r,o);if(!J(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function mt(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in A)_e(r,o=>{const i=o.data;return o.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function yt(e,t){te||je();function n(r){let o;if(!A[r]||!(o=Ce(r)))return;const i=ke[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=V(o),!H(o,s+1))return;const c={cached:Math.floor(Date.now()/Se),provider:e.provider,data:t};return ee(o,P+s.toString(),JSON.stringify(c))}t.lastModified&&!mt(e,t.lastModified)||!Object.keys(t.icons).length||(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function ae(){}function bt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,st(e)}))}function wt(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let i;if(!o||!(i=$(n)))return;i.prepare(n,r,o).forEach(c=>{ht(n,c,l=>{if(typeof l!="object")c.icons.forEach(f=>{e.missing.add(f)});else try{const f=J(e,l);if(!f.length)return;const a=e.pendingIcons;a&&f.forEach(d=>{a.delete(d)}),yt(e,l)}catch(f){console.error(f)}bt(e)})})}))}const xt=(e,t)=>{const n=ft(e,!0,ye()),r=it(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,ae)}),()=>{l=!1}}const o=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:f,prefix:a}=l;if(a===c&&f===s)return;s=f,c=a,i.push(S(f,a));const d=o[f]||(o[f]=Object.create(null));d[a]||(d[a]=[])}),r.pending.forEach(l=>{const{provider:f,prefix:a,name:d}=l,p=S(f,a),y=p.pendingIcons||(p.pendingIcons=new Set);y.has(d)||(y.add(d),o[f][a].push(d))}),i.forEach(l=>{const{provider:f,prefix:a}=l;o[f][a].length&&wt(l,o[f][a])}),t?lt(t,r,i):ae};function It(e,t){const n={...e};for(const r in t){const o=t[r],i=typeof o;r in be?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const vt=/[\s,]+/;function St(e,t){t.split(vt).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function kt(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return t}function Ct(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function _t(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function jt(e){return'url("data:image/svg+xml,'+_t(e)+'")'}const Te={...we,inline:!1},Tt={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Nt={display:"inline-block"},K={backgroundColor:"currentColor"},Ne={backgroundColor:"transparent"},ue={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},de={webkitMask:K,mask:K,background:Ne};for(const e in de){const t=de[e];for(const n in ue)t[e+n]=ue[n]}const Pt={...Te,inline:!0};function he(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Et=(e,t,n,r)=>{const o=n?Pt:Te,i=It(o,t),s=t.mode||"svg",c={},l=t.style||{},f={...s==="svg"?Tt:{},ref:r};for(let m in t){const u=t[m];if(u!==void 0)switch(m){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":i[m]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&St(i,u);break;case"color":c.color=u;break;case"rotate":typeof u=="string"?i[m]=kt(u):typeof u=="number"&&(i[m]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete f["aria-hidden"];break;default:o[m]===void 0&&(f[m]=u)}}const a=He(e,i),d=a.attributes;if(i.inline&&(c.verticalAlign="-0.125em"),s==="svg"){f.style={...c,...l},Object.assign(f,d);let m=0,u=t.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),f.dangerouslySetInnerHTML={__html:We(a.body,u?()=>u+"ID"+m++:"iconifyReact")},v("svg",{...f},void 0,!1,{fileName:T,lineNumber:1698,columnNumber:16},globalThis)}const{body:p,width:y,height:w}=e,g=s==="mask"||(s==="bg"?!1:p.indexOf("currentColor")!==-1),k=Ct(p,{...d,width:y+"",height:w+""});return f.style={...c,"--svg":jt(k),width:he(d.width),height:he(d.height),...Nt,...g?K:Ne,...l},v("span",{...f},void 0,!1,{fileName:T,lineNumber:1720,columnNumber:12},globalThis)};ye(!0);Je("",rt);if(typeof document<"u"&&typeof window<"u"){je();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!ze(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Xe(n,o)||console.error(r)}catch{console.error(r)}}}}class Pe extends G.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const n=this.state,r=this.props.icon;if(typeof r=="object"&&r!==null&&typeof r.body=="string"){this._icon="",this._abortLoading(),(t||n.icon===null)&&this._setData({data:r});return}let o;if(typeof r!="string"||(o=D(r,!1,!0))===null){this._abortLoading(),this._setData(null);return}const i=Ue(o);if(!i){(!this._loading||this._loading.name!==r)&&(this._abortLoading(),this._icon="",this._setData(null),i!==null&&(this._loading={name:r,abort:xt([o],this._checkIcon.bind(this,!1))}));return}if(this._icon!==r||n.icon===null){this._abortLoading(),this._icon=r;const s=["iconify"];o.prefix!==""&&s.push("iconify--"+o.prefix),o.provider!==""&&s.push("iconify--"+o.provider),this._setData({data:i,classes:s}),this.props.onLoad&&this.props.onLoad(r)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,n=this.state.icon;if(n===null)return t.children?t.children:v("span",{},void 0,!1,{fileName:T,lineNumber:1927,columnNumber:19},this);let r=t;return n.classes&&(r={...t,className:(typeof t.className=="string"?t.className+" ":"")+n.classes.join(" ")}),Et({...W,...n.data},r,t._inline,t._ref)}}const Mt=G.forwardRef(function(t,n){const r={...t,_ref:n,_inline:!1};return v(Pe,{...r},void 0,!1,{fileName:T,lineNumber:1957,columnNumber:12},this)});G.forwardRef(function(t,n){const r={...t,_ref:n,_inline:!0};return v(Pe,{...r},void 0,!1,{fileName:T,lineNumber:1970,columnNumber:12},this)});var Ft="C:\\Users\\asus\\Desktop\\TrackMe\\trackme-front-v0\\src\\components\\ui\\Icon.jsx";const Ot=({icon:e,className:t,width:n,rotate:r,hFlip:o,vFlip:i})=>v(Me,{children:v(Mt,{width:n,rotate:r,hFlip:o,icon:e,className:t,vFlip:i},void 0,!1,{fileName:Ft,lineNumber:6,columnNumber:7},void 0)},void 0,!1);export{Ot as I};
