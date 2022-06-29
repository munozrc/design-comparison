const Y=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Y();function b(){}function X(e){return e()}function q(){return Object.create(null)}function E(e){e.forEach(X)}function Z(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let S;function A(e,t){return S||(S=document.createElement("a")),S.href=t,e===S.href}function ee(e){return Object.keys(e).length===0}function h(e,t){e.appendChild(t)}function F(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function te(e){return document.createTextNode(e)}function z(){return te(" ")}function O(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ne(e){return Array.from(e.childNodes)}let N;function k(e){N=e}function re(){if(!N)throw new Error("Function called outside component initialization");return N}function oe(e){re().$$.on_mount.push(e)}const y=[],w=[],$=[],D=[],se=Promise.resolve();let I=!1;function ie(){I||(I=!0,se.then(R))}function M(e){$.push(e)}let C=!1;const j=new Set;function R(){if(!C){C=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];k(t),ue(t.$$)}for(k(null),y.length=0;w.length;)w.pop()();for(let e=0;e<$.length;e+=1){const t=$[e];j.has(t)||(j.add(t),t())}$.length=0}while(y.length);for(;D.length;)D.pop()();I=!1,C=!1,j.clear()}}function ue(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const x=new Set;let le;function U(e,t){e&&e.i&&(x.delete(e),e.i(t))}function fe(e,t,n,o){if(e&&e.o){if(x.has(e))return;x.add(e),le.c.push(()=>{x.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function ce(e){e&&e.c()}function W(e,t,n,o){const{fragment:r,on_mount:s,on_destroy:c,after_update:f}=e.$$;r&&r.m(t,n),o||M(()=>{const u=s.map(X).filter(Z);c?c.push(...u):E(u),e.$$.on_mount=[]}),f.forEach(M)}function H(e,t){const n=e.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(e,t){e.$$.dirty[0]===-1&&(y.push(e),ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,o,r,s,c,f=[-1]){const u=N;k(e);const i=e.$$={fragment:null,ctx:null,props:s,update:b,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:q(),dirty:f,skip_bound:!1,root:t.target||u.$$.root};c&&c(i.root);let d=!1;if(i.ctx=n?n(e,t.props||{},(a,g,...p)=>{const v=p.length?p[0]:g;return i.ctx&&r(i.ctx[a],i.ctx[a]=v)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](v),d&&ae(e,a)),g}):[],i.update(),d=!0,E(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const a=ne(t.target);i.fragment&&i.fragment.l(a),a.forEach(P)}else i.fragment&&i.fragment.c();t.intro&&U(e.$$.fragment),W(e,t.target,t.anchor,t.customElement),R()}k(u)}class T{$destroy(){H(this,1),this.$destroy=b}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function de(e){let t,n,o,r,s,c,f,u,i,d;return{c(){t=_("div"),n=_("iframe"),r=z(),s=_("div"),c=z(),f=_("img"),A(n.src,o=e[0])||m(n,"src",o),m(n,"title","solution"),m(n,"class","svelte-fao9yo"),m(s,"class","separator svelte-fao9yo"),A(f.src,u=e[1])||m(f,"src",u),m(f,"alt","design"),m(f,"class","svelte-fao9yo"),m(t,"class","wrapper svelte-fao9yo")},m(a,g){F(a,t,g),h(t,n),e[10](n),h(t,r),h(t,s),h(t,c),h(t,f),e[11](f),e[12](t),i||(d=[O(window,"mouseup",e[9]),O(window,"mousemove",e[8]),O(window,"resize",e[7]),O(t,"mousedown",e[6])],i=!0)},p(a,[g]){g&1&&!A(n.src,o=a[0])&&m(n,"src",o),g&2&&!A(f.src,u=a[1])&&m(f,"src",u)},i:b,o:b,d(a){a&&P(t),e[10](null),e[11](null),e[12](null),i=!1,E(d)}}}function me(e,t,n){let{solution:o}=t,{design:r}=t,s=0,c=0,f=!1,u,i,d;oe(g);function a(l){s=d.offsetWidth,c=d.offsetLeft,n(2,f=!0),p(l)}function g(){const{width:l,naturalWidth:L,naturalHeight:V}=i;n(3,u.style.transform=`scale(${l/L})`,u),n(3,u.style.width=L+"px",u),n(3,u.style.height=V+"px",u)}function p(l){if(f&&l.pageX>=c&&l.pageX<=c+s){const L=(l.pageX-c-3)/s*100;d.style.setProperty("--percent",L+"%")}}const v=()=>n(2,f=!1);function G(l){w[l?"unshift":"push"](()=>{u=l,n(3,u)})}function J(l){w[l?"unshift":"push"](()=>{i=l,n(4,i)})}function Q(l){w[l?"unshift":"push"](()=>{d=l,n(5,d)})}return e.$$set=l=>{"solution"in l&&n(0,o=l.solution),"design"in l&&n(1,r=l.design)},[o,r,f,u,i,d,a,g,p,v,G,J,Q]}class ge extends T{constructor(t){super(),K(this,t,me,de,B,{solution:0,design:1})}}function pe(e){let t,n,o;return n=new ge({props:{solution:e[0],design:e[1]}}),{c(){t=_("main"),ce(n.$$.fragment),m(t,"class","svelte-yno8c6")},m(r,s){F(r,t,s),W(n,t,null),o=!0},p:b,i(r){o||(U(n.$$.fragment,r),o=!0)},o(r){fe(n.$$.fragment,r),o=!1},d(r){r&&P(t),H(n)}}}function he(e){var o,r;const t=(o=window.localStorage.getItem("solutionURL"))!=null?o:"",n=(r=window.localStorage.getItem("designURL"))!=null?r:"";return[t,n]}class _e extends T{constructor(t){super(),K(this,t,he,pe,B,{})}}new _e({target:document.getElementById("app")});
