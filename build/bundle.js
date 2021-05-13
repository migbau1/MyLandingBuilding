(()=>{"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(n)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return 0===Object.keys(t).length}function l(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function a(t,e,n){t.$$.on_destroy.push(l(e,n))}function u(t,e,n,o){if(t){const i=p(t,e,n,o);return t[0](i)}}function p(t,n,o,i){return t[1]&&i?e(o.ctx.slice(),t[1](i(n))):o.ctx}function d(t,e,n,o,i,s,r){const c=function(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}(e,o,i,s);if(c){const i=p(e,n,o,r);t.p(i,c)}}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function h(e){return e&&s(e.destroy)?e.destroy:t}function m(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function y(){return v(" ")}function w(){return v("")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let _;function M(t){_=t}function q(){if(!_)throw new Error("Function called outside component initialization");return _}function E(t,e){q().$$.context.set(t,e)}function L(t){return q().$$.context.get(t)}new Set,new Set;const S=[],j=[],T=[],C=[],H=Promise.resolve();let O=!1;function A(t){T.push(t)}let P=!1;const R=new Set;function N(){if(!P){P=!0;do{for(let t=0;t<S.length;t+=1){const e=S[t];M(e),B(e.$$)}for(M(null),S.length=0;j.length;)j.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];R.has(e)||(R.add(e),e())}T.length=0}while(S.length);for(;C.length;)C.pop()();O=!1,P=!1,R.clear()}}function B(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const I=new Set;let D,K;function U(){D={r:0,c:[],p:D}}function z(){D.r||i(D.c),D=D.p}function J(t,e){t&&t.i&&(I.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(I.has(t))return;I.add(t),D.c.push((()=>{I.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function W(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function G(t,e,o,r){const{fragment:c,on_mount:l,on_destroy:a,after_update:u}=t.$$;c&&c.m(e,o),r||A((()=>{const e=l.map(n).filter(s);a?a.push(...e):i(e),t.$$.on_mount=[]})),u.forEach(A)}function V(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,n,s,r,c,l,a=[-1]){const u=_;M(e);const p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:o(),dirty:a,skip_bound:!1};let d=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=i)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](i),d&&function(t,e){-1===t.$$.dirty[0]&&(S.push(t),O||(O=!0,H.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),d=!0,i(p.before_update),p.fragment=!!r&&r(p.ctx),n.target){if(n.hydrate){const t=(f=n.target,Array.from(f.childNodes));p.fragment&&p.fragment.l(t),t.forEach(g)}else p.fragment&&p.fragment.c();n.intro&&J(e.$$.fragment),G(e,n.target,n.anchor,n.customElement),N()}var f;M(u)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(K=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){i(this.$$.on_disconnect)}$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class Y{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z=[];function tt(e,n=t){let o;const i=[];function s(t){if(r(e,t)&&(e=t,o)){const t=!Z.length;for(let t=0;t<i.length;t+=1){const n=i[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(r,c=t){const l=[r,c];return i.push(l),1===i.length&&(o=n(s)||t),r(e),()=>{const t=i.indexOf(l);-1!==t&&i.splice(t,1),0===i.length&&(o(),o=null)}}}}const et={},nt={};function ot(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const it=function(t,e){const n=[];let o=ot(t);return{get location(){return o},listen(e){n.push(e);const i=()=>{o=ot(t),e({location:o,action:"POP"})};return t.addEventListener("popstate",i),()=>{t.removeEventListener("popstate",i);const o=n.indexOf(e);n.splice(o,1)}},navigate(e,{state:i,replace:s=!1}={}){i={...i,key:Date.now()+""};try{s?t.history.replaceState(i,null,e):t.history.pushState(i,null,e)}catch(n){t.location[s?"replace":"assign"](e)}o=ot(t),n.forEach((t=>t({location:o,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],o=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return o[e]},pushState(t,i,s){const[r,c=""]=s.split("?");e++,n.push({pathname:r,search:c}),o.push(t)},replaceState(t,i,s){const[r,c=""]=s.split("?");n[e]={pathname:r,search:c},o[e]=t}}}}()),{navigate:st}=it,rt=/^:(.+)/;function ct(t){return"*"===t[0]}function lt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function at(t){return t.replace(/(^\/+|\/+$)/g,"")}function ut(t,e){return{route:t,score:t.default?0:lt(t.path).reduce(((t,e)=>(t+=4,function(t){return""===t}(e)?t+=1:function(t){return rt.test(t)}(e)?t+=2:ct(e)?t-=5:t+=3,t)),0),index:e}}function pt(t,e){let n,o;const[i]=e.split("?"),s=lt(i),r=""===s[0],c=function(t){return t.map(ut).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,i=c.length;t<i;t++){const i=c[t].route;let l=!1;if(i.default){o={route:i,params:{},uri:e};continue}const a=lt(i.path),u={},p=Math.max(s.length,a.length);let d=0;for(;d<p;d++){const t=a[d],e=s[d];if(void 0!==t&&ct(t)){u["*"===t?"*":t.slice(1)]=s.slice(d).map(decodeURIComponent).join("/");break}if(void 0===e){l=!0;break}let n=rt.exec(t);if(n&&!r){const t=decodeURIComponent(e);u[n[1]]=t}else if(t!==e){l=!0;break}}if(!l){n={route:i,params:u,uri:"/"+s.slice(0,d).join("/")};break}}return n||o||null}function dt(t,e){return`${at("/"===e?t:`${at(t)}/${at(e)}`)}/`}function ft(t){let e;const n=t[9].default,o=u(n,t,t[8],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,[i]){o&&o.p&&(!e||256&i)&&d(o,n,t,t[8],i,null,null)},i(t){e||(J(o,t),e=!0)},o(t){Q(o,t),e=!1},d(t){o&&o.d(t)}}}function ht(e,n,o){let r,c,u,{$$slots:p={},$$scope:d}=n,{basepath:f="/"}=n,{url:h=null}=n;const m=L(et),$=L(nt),g=tt([]);a(e,g,(t=>o(7,u=t)));const b=tt(null);let v=!1;const y=m||tt(h?{pathname:h}:it.location);a(e,y,(t=>o(6,c=t)));const w=$?$.routerBase:tt({path:f,uri:f});a(e,w,(t=>o(5,r=t)));const x=function(e,n,o){const r=!Array.isArray(e),c=r?[e]:e,a=n.length<2;return{subscribe:tt(o,(e=>{let o=!1;const u=[];let p=0,d=t;const f=()=>{if(p)return;d();const o=n(r?u[0]:u,e);a?e(o):d=s(o)?o:t},h=c.map(((t,e)=>l(t,(t=>{u[e]=t,p&=~(1<<e),o&&f()}),(()=>{p|=1<<e}))));return o=!0,f(),function(){i(h),d()}})).subscribe}}([w,b],(([t,e])=>{if(null===e)return t;const{path:n}=t,{route:o,uri:i}=e;return{path:o.default?n:o.path.replace(/\*.*$/,""),uri:i}}));var k;return m||(k=()=>it.listen((t=>{y.set(t.location)})),q().$$.on_mount.push(k),E(et,y)),E(nt,{activeRoute:b,base:w,routerBase:x,registerRoute:function(t){const{path:e}=r;let{path:n}=t;if(t._path=n,t.path=dt(e,n),"undefined"==typeof window){if(v)return;const e=function(t,e){return pt([t],e)}(t,c.pathname);e&&(b.set(e),v=!0)}else g.update((e=>(e.push(t),e)))},unregisterRoute:function(t){g.update((e=>{const n=e.indexOf(t);return e.splice(n,1),e}))}}),e.$$set=t=>{"basepath"in t&&o(3,f=t.basepath),"url"in t&&o(4,h=t.url),"$$scope"in t&&o(8,d=t.$$scope)},e.$$.update=()=>{if(32&e.$$.dirty){const{path:t}=r;g.update((e=>(e.forEach((e=>e.path=dt(t,e._path))),e)))}if(192&e.$$.dirty){const t=pt(u,c.pathname);b.set(t)}},[g,y,w,f,h,r,c,u,d,p]}const mt=class extends Y{constructor(t){super(),X(this,t,ht,ft,r,{basepath:3,url:4})}},$t=t=>({params:4&t,location:16&t}),gt=t=>({params:t[2],location:t[4]});function bt(t){let e,n,o,i;const s=[yt,vt],r=[];function c(t,e){return null!==t[0]?0:1}return e=c(t),n=r[e]=s[e](t),{c(){n.c(),o=w()},m(t,n){r[e].m(t,n),$(t,o,n),i=!0},p(t,i){let l=e;e=c(t),e===l?r[e].p(t,i):(U(),Q(r[l],1,1,(()=>{r[l]=null})),z(),n=r[e],n?n.p(t,i):(n=r[e]=s[e](t),n.c()),J(n,1),n.m(o.parentNode,o))},i(t){i||(J(n),i=!0)},o(t){Q(n),i=!1},d(t){r[e].d(t),t&&g(o)}}}function vt(t){let e;const n=t[10].default,o=u(n,t,t[9],gt);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,i){o&&o.p&&(!e||532&i)&&d(o,n,t,t[9],i,$t,gt)},i(t){e||(J(o,t),e=!0)},o(t){Q(o,t),e=!1},d(t){o&&o.d(t)}}}function yt(t){let n,o,i;const s=[{location:t[4]},t[2],t[3]];var r=t[0];function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return r&&(n=new r(c())),{c(){n&&F(n.$$.fragment),o=w()},m(t,e){n&&G(n,t,e),$(t,o,e),i=!0},p(t,e){const i=28&e?function(t,e){const n={},o={},i={$$scope:1};let s=t.length;for(;s--;){const r=t[s],c=e[s];if(c){for(const t in r)t in c||(o[t]=1);for(const t in c)i[t]||(n[t]=c[t],i[t]=1);t[s]=c}else for(const t in r)i[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(s,[16&e&&{location:t[4]},4&e&&W(t[2]),8&e&&W(t[3])]):{};if(r!==(r=t[0])){if(n){U();const t=n;Q(t.$$.fragment,1,0,(()=>{V(t,1)})),z()}r?(n=new r(c()),F(n.$$.fragment),J(n.$$.fragment,1),G(n,o.parentNode,o)):n=null}else r&&n.$set(i)},i(t){i||(n&&J(n.$$.fragment,t),i=!0)},o(t){n&&Q(n.$$.fragment,t),i=!1},d(t){t&&g(o),n&&V(n,t)}}}function wt(t){let e,n,o=null!==t[1]&&t[1].route===t[7]&&bt(t);return{c(){o&&o.c(),e=w()},m(t,i){o&&o.m(t,i),$(t,e,i),n=!0},p(t,[n]){null!==t[1]&&t[1].route===t[7]?o?(o.p(t,n),2&n&&J(o,1)):(o=bt(t),o.c(),J(o,1),o.m(e.parentNode,e)):o&&(U(),Q(o,1,1,(()=>{o=null})),z())},i(t){n||(J(o),n=!0)},o(t){Q(o),n=!1},d(t){o&&o.d(t),t&&g(e)}}}function xt(t,n,o){let i,s,{$$slots:r={},$$scope:c}=n,{path:l=""}=n,{component:u=null}=n;const{registerRoute:p,unregisterRoute:d,activeRoute:h}=L(nt);a(t,h,(t=>o(1,i=t)));const m=L(et);a(t,m,(t=>o(4,s=t)));const $={path:l,default:""===l};let g={},b={};var v;return p($),"undefined"!=typeof window&&(v=()=>{d($)},q().$$.on_destroy.push(v)),t.$$set=t=>{o(13,n=e(e({},n),f(t))),"path"in t&&o(8,l=t.path),"component"in t&&o(0,u=t.component),"$$scope"in t&&o(9,c=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&i&&i.route===$&&o(2,g=i.params);{const{path:t,component:e,...i}=n;o(3,b=i)}},n=f(n),[u,i,g,b,s,h,m,$,l,c,r]}const kt=class extends Y{constructor(t){super(),X(this,t,xt,wt,r,{path:8,component:0})}};function _t(t){function e(t){const e=t.currentTarget;""===e.target&&function(t){const e=location.host;return t.host==e||0===t.href.indexOf(`https://${e}`)||0===t.href.indexOf(`http://${e}`)}(e)&&function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)&&(t.preventDefault(),st(e.pathname+e.search,{replace:e.hasAttribute("replace")}))}return t.addEventListener("click",e),{destroy(){t.removeEventListener("click",e)}}}function Mt(e){let n;return{c(){n=b("div"),n.innerHTML='<h3>No projects at the moment..\n        <span><img src="https://img.icons8.com/ios-filled/50/000000/null-symbol.png" alt="notProjects" class="svelte-997wi0"/></span></h3>',k(n,"class","container svelte-997wi0")},m(t,e){$(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}const qt=class extends Y{constructor(t){super(),X(this,t,null,Mt,r,{})}};function Et(e){let n;return{c(){n=b("div"),n.innerHTML='<div class="profile svelte-1xa0j3t"><div class="profile_greeting svelte-1xa0j3t"><h1>Hello !</h1> \n      <h3>I&#39;m Miguel, Web Developer\n        <span class="toggle svelte-1xa0j3t"><b class="inner svelte-1xa0j3t">❮</b> \n          <b class="inner svelte-1xa0j3t">❯</b></span></h3></div> \n    <div class="profile_description svelte-1xa0j3t"><p>Technology student in computer systems development. I have the ability to\n        work autonomously, teamwork, adaptability to change. With capabilities in\n        software development with Python, JavaScript, nodejs and Java,\n        additionally with experience in managing database engines such as\n        PostgreSQL and MySQL. Machine Learning enthusiasts.</p></div></div>',k(n,"class","container")},m(t,e){$(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}function Lt(t){let e,n;return e="https://res.cloudinary.com/dwrsl5w9e/image/upload/v1620488561/IMG_20190120_123607-removebg-preview_uifumn.jpg",n="https://res.cloudinary.com/dwrsl5w9e/image/upload/v1620768917/icons8-developer-mode-24_bkxmou.png",[]}const St=class extends Y{constructor(t){super(),X(this,t,Lt,Et,r,{})}};function jt(e){let n;return{c(){n=b("div"),n.innerHTML='<div class="container_form svelte-11nwubu"><form action="https://formspree.io/f/mpzkppww" method="POST" class="svelte-11nwubu"><label class="svelte-11nwubu"><b>Name:</b> \n        <input type="text" name="name" class="svelte-11nwubu"/></label> \n\n      <label class="svelte-11nwubu"><b>Email:</b> \n        <input type="email" name="_replyto" class="svelte-11nwubu"/></label> \n      <label class="svelte-11nwubu"><b>Message:</b> \n        <textarea name="message" class="svelte-11nwubu"></textarea></label> \n\n      \n\n      <button type="submit" class="svelte-11nwubu">Send</button></form></div> \n  <div><p id="contact_icon" class="svelte-11nwubu">💬</p></div>',k(n,"class","container svelte-11nwubu")},m(t,e){$(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}const Tt=class extends Y{constructor(t){super(),X(this,t,null,jt,r,{})}};function Ct(e){let n,o,s,r,c,l,a,u,p,d,f,v,w,_,M,q,E,L,S,j,T,C,H,O,A,P;return S=new kt({props:{path:"",component:St}}),T=new kt({props:{path:"proyectos",component:qt}}),H=new kt({props:{path:"contacto",component:Tt}}),{c(){n=b("header"),o=b("nav"),s=b("div"),r=b("h2"),r.textContent="Migbau Dev",c=y(),l=b("div"),l.innerHTML='<b class="inner svelte-1ki7qeb">❮</b> \n          <b class="inner svelte-1ki7qeb">❯</b>',a=y(),u=b("ul"),p=b("a"),p.innerHTML='<li class="svelte-1ki7qeb">Home</li>',f=y(),v=b("a"),v.innerHTML='<li class="svelte-1ki7qeb">Projects</li>',_=y(),M=b("a"),M.innerHTML='<li class="svelte-1ki7qeb">Contact</li>',E=y(),L=b("div"),F(S.$$.fragment),j=y(),F(T.$$.fragment),C=y(),F(H.$$.fragment),k(l,"class","toggle_menu svelte-1ki7qeb"),k(s,"id","tittle"),k(s,"class","svelte-1ki7qeb"),k(p,"href","/"),k(p,"class","option_main svelte-1ki7qeb"),k(v,"href","/proyectos"),k(v,"class","option_main svelte-1ki7qeb"),k(M,"href","/contacto"),k(M,"class","option_main svelte-1ki7qeb"),k(u,"id","wrapper_menu"),k(u,"class","svelte-1ki7qeb"),k(o,"class","svelte-1ki7qeb"),k(n,"class","svelte-1ki7qeb")},m(t,i){$(t,n,i),m(n,o),m(o,s),m(s,r),m(s,c),m(s,l),m(o,a),m(o,u),m(u,p),m(u,f),m(u,v),m(u,_),m(u,M),e[4](u),$(t,E,i),$(t,L,i),G(S,L,null),m(L,j),G(T,L,null),m(L,C),G(H,L,null),O=!0,A||(P=[x(l,"click",window.matchMedia("(min-width: 480px)").matches?null:e[2]),h(d=_t.call(null,p)),x(p,"click",window.matchMedia("(min-width: 480px)").matches?null:e[3]),h(w=_t.call(null,v)),x(v,"click",window.matchMedia("(min-width: 480px)").matches?null:e[3]),h(q=_t.call(null,M)),x(M,"click",window.matchMedia("(min-width: 480px)").matches?null:e[3])],A=!0)},p:t,i(t){O||(J(S.$$.fragment,t),J(T.$$.fragment,t),J(H.$$.fragment,t),O=!0)},o(t){Q(S.$$.fragment,t),Q(T.$$.fragment,t),Q(H.$$.fragment,t),O=!1},d(t){t&&g(n),e[4](null),t&&g(E),t&&g(L),V(S),V(T),V(H),A=!1,i(P)}}}function Ht(t){let e,n,o,i;return e=new mt({props:{url:t[0],$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment),n=y(),o=b("footer"),o.innerHTML='<p>miguel Angel Bautista @Migbau01 |  All rights reserved\n    ©2021</p> \n  <ul class="svelte-1ki7qeb"><li><a href="https://github.com/migbau1"><img src="https://img.icons8.com/material-sharp/24/000000/github.png" alt="github"/></a></li> \n    <li><a href="https://www.linkedin.com/in/miguel-%C3%A1ngel-bautista-silva-16322113a/"><img src="https://img.icons8.com/android/24/000000/linkedin.png" alt="linkedin"/></a></li> \n    <li><a href="https://twitter.com/Migbau01"><img src="https://img.icons8.com/android/24/000000/twitter.png" alt="twitter"/></a></li></ul>',k(o,"class","svelte-1ki7qeb")},m(t,s){G(e,t,s),$(t,n,s),$(t,o,s),i=!0},p(t,[n]){const o={};1&n&&(o.url=t[0]),66&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){i||(J(e.$$.fragment,t),i=!0)},o(t){Q(e.$$.fragment,t),i=!1},d(t){V(e,t),t&&g(n),t&&g(o)}}}function Ot(t,e,n){let o,{url:i=""}=e,s=!1;function r(){n(1,o.style.display="none",o),document.querySelector(".container").style.display="flex",document.querySelector(".inner").animate([{marginRight:"0"}],{duration:500,fill:"forwards"})}return t.$$set=t=>{"url"in t&&n(0,i=t.url)},[i,o,function(){"none"!==window.getComputedStyle(o,null).display?r():(n(1,o.style.display="block",o),document.querySelector(".container").style.display="none",s=!0,document.querySelector(".inner").animate({marginRight:".5em"},{duration:500,fill:"forwards"}))},r,function(t){j[t?"unshift":"push"]((()=>{o=t,n(1,o)}))}]}new class extends Y{constructor(t){super(),X(this,t,Ot,Ht,r,{url:0})}}({target:document.body,props:{}})})();