import{d as X,z as l,aa as ut,ab as ct,m as $e,y as z,l as C,a1 as _e,ac as Ke,Y as ke,a9 as Vt,a4 as Qe,ad as Be,a5 as Dt,ae as Te,r as Wt,p as O,af as _,ag as se,q as dt,v as ie,ah as jt,ai as ft,X as Ge,aj as Kt,ak as ee,al as ht,am as Ze,an as vt,ao as pe,ap as Y,aq as He,ar as pt,a3 as G,as as Ht,at as Ut,au as ue,av as Xe,aw as qt,a2 as Je,ax as Gt,ay as Zt,az as Yt,aA as Qt,aB as Xt,aC as Ue,aD as Jt,aE as en,aF as tn,aG as et,Q as tt,aH as nn,aI as nt,aJ as on,aK as ln,aL as rn,aM as an,aN as qe,aO as sn,aP as un,aQ as cn,aR as dn,aS as fn,aT as ot,aU as J}from"./index.85d3582f.js";import{N as je}from"./Tag.04c651c7.js";function hn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}var vn=X({name:"Checkmark",render(){return l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},l("g",{fill:"none"},l("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),pn=X({name:"Empty",render(){return l("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),l("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),gn=X({props:{onFocus:Function,onBlur:Function},setup(e){return()=>l("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function it(e){return e&-e}class bn{constructor(n,i){this.l=n,this.min=i;const r=new Array(n+1);for(let s=0;s<n+1;++s)r[s]=0;this.ft=r}add(n,i){if(i===0)return;const{l:r,ft:s}=this;for(n+=1;n<=r;)s[n]+=i,n+=it(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===0)return 0;const{ft:i,min:r,l:s}=this;if(n===void 0&&(n=s),n>s)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let b=n*r;for(;n>0;)b+=i[n],n-=it(n);return b}getBound(n){let i=0,r=this.l;for(;r>i;){const s=Math.floor((i+r)/2),b=this.sum(s);if(b>n){r=s;continue}else if(b<n){if(i===s)return this.sum(i+1)<=n?i+1:s;i=s}else return s}return i}}const mn=Be(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Be("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Be("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]);var wn=X({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=ut();mn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:ct,ssr:n}),$e(()=>{const{defaultScrollIndex:f,defaultScrollKey:v}=e;f!=null?$({index:f}):v!=null&&$({key:v})});const i=z(()=>{const f=new Map,{keyField:v}=e;return e.items.forEach((k,I)=>{f.set(k[v],I)}),f}),r=C(null),s=C(void 0),b=new Map,x=z(()=>{const{items:f,itemSize:v,keyField:k}=e,I=new bn(f.length,v);return f.forEach((y,L)=>{const P=y[k],H=b.get(P);H!==void 0&&I.add(L,H)}),I}),o=C(0),w=C(0),g=_e(()=>Math.max(x.value.getBound(w.value-Ke(e.paddingTop))-1,0)),B=z(()=>{const{value:f}=s;if(f===void 0)return[];const{items:v,itemSize:k}=e,I=g.value,y=Math.min(I+Math.ceil(f/k+1),v.length-1),L=[];for(let P=I;P<=y;++P)L.push(v[P]);return L}),$=f=>{const{left:v,top:k,index:I,key:y,position:L,behavior:P,debounce:H=!0}=f;if(v!==void 0||k!==void 0)p(v,k,P);else if(I!==void 0)R(I,P,H);else if(y!==void 0){const q=i.value.get(y);q!==void 0&&R(q,P,H)}else L==="bottom"?p(0,Number.MAX_SAFE_INTEGER,P):L==="top"&&p(0,0,P)};function R(f,v,k){const{value:I}=x,y=I.sum(f)+Ke(e.paddingTop);if(!k)r.value.scrollTo({left:0,top:y,behavior:v});else{const{scrollTop:L,offsetHeight:P}=r.value;if(y>L){const H=I.get(f);y+H<=L+P||r.value.scrollTo({left:0,top:y+H-P,behavior:v})}else r.value.scrollTo({left:0,top:y,behavior:v})}V=f}function p(f,v,k){r.value.scrollTo({left:f,top:v,behavior:k})}function m(f,v){var k;if(e.ignoreItemResize||W(v.target))return;const{value:I}=x,y=i.value.get(f),L=I.get(y),P=v.contentRect.height;if(P===L)return;P-e.itemSize===0?b.delete(f):b.set(f,P-e.itemSize);const q=P-L;q!==0&&(D!==void 0&&y<=D&&((k=r.value)===null||k===void 0||k.scrollBy(0,q)),I.add(y,q),o.value++)}function A(f){Dt(K);const{onScroll:v}=e;v!==void 0&&v(f)}function F(f){if(W(f.target)||f.contentRect.height===s.value)return;s.value=f.contentRect.height;const{onResize:v}=e;v!==void 0&&v(f)}let V,D;function K(){const{value:f}=r;f!=null&&(D=V!=null?V:g.value,V=void 0,w.value=r.value.scrollTop)}function W(f){let v=f;for(;v!==null;){if(v.style.display==="none")return!0;v=v.parentElement}return!1}return{listHeight:s,listStyle:{overflow:"auto"},keyToIndex:i,itemsStyle:z(()=>{const{itemResizable:f}=e,v=ke(x.value.sum());return o.value,[e.itemsStyle,{boxSizing:"content-box",height:f?"":v,minHeight:f?v:"",paddingTop:ke(e.paddingTop),paddingBottom:ke(e.paddingBottom)}]}),visibleItemsStyle:z(()=>(o.value,{transform:`translateY(${ke(x.value.sum(g.value))})`})),viewportItems:B,listElRef:r,itemsElRef:C(null),scrollTo:$,handleListResize:F,handleListScroll:A,handleItemResize:m}},render(){const{itemResizable:e,keyField:n,keyToIndex:i,visibleItemsTag:r}=this;return l(Qe,{onResize:this.handleListResize},{default:()=>{var s,b;return l("div",Vt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.onWheel,ref:"listElRef"}),[this.items.length!==0?l("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[l(r,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(x=>{const o=x[n],w=i.get(o),g=this.$slots.default({item:x,index:w})[0];return e?l(Qe,{key:o,onResize:B=>this.handleItemResize(o,B)},{default:()=>g}):(g.key=o,g)})})]):(b=(s=this.$slots).empty)===null||b===void 0?void 0:b.call(s)])}})}});const ae="v-hidden",yn=Be("[v-hidden]",{display:"none!important"});var lt=X({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const i=C(null),r=C(null);function s(){const{value:x}=i,{getCounter:o,getTail:w}=e;let g;if(o!==void 0?g=o():g=r.value,!x||!g)return;g.hasAttribute(ae)&&g.removeAttribute(ae);const{children:B}=x,$=x.offsetWidth,R=[],p=n.tail?w==null?void 0:w():null;let m=p?p.offsetWidth:0,A=!1;const F=x.children.length-(n.tail?1:0);for(let D=0;D<F-1;++D){if(D<0)continue;const K=B[D];if(A){K.hasAttribute(ae)||K.setAttribute(ae,"");continue}else K.hasAttribute(ae)&&K.removeAttribute(ae);const W=K.offsetWidth;if(m+=W,R[D]=W,m>$){const{updateCounter:f}=e;for(let v=D;v>=0;--v){const k=F-1-v;f!==void 0?f(k):g.textContent=`${k}`;const I=g.offsetWidth;if(m-=R[v],m+I<=$||v===0){A=!0,D=v-1,p&&(D===-1?(p.style.maxWidth=`${$-I}px`,p.style.boxSizing="border-box"):p.style.maxWidth="");break}}}}const{onUpdateOverflow:V}=e;A?V!==void 0&&V(!0):(V!==void 0&&V(!1),g.setAttribute(ae,""))}const b=ut();return yn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:ct,ssr:b}),$e(s),{selfRef:i,counterRef:r,sync:s}},render(){const{$slots:e}=this;return Te(this.sync),l("div",{class:"v-overflow",ref:"selfRef"},[Wt(e,"default"),e.counter?e.counter():l("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),xn=O("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[_("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[se("+",[_("description",`
 margin-top: 8px;
 `)])]),_("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),_("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);const Sn=Object.assign(Object.assign({},ie.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function});var Cn=X({name:"Empty",props:Sn,setup(e){const{mergedClsPrefixRef:n}=dt(e),i=ie("Empty","-empty",xn,jt,e,n),{localeRef:r}=ft("Empty"),s=Ge(Kt,null),b=z(()=>{var o,w,g;return(o=e.description)!==null&&o!==void 0?o:(g=(w=s==null?void 0:s.mergedComponentPropsRef.value)===null||w===void 0?void 0:w.Empty)===null||g===void 0?void 0:g.description}),x=z(()=>{var o,w;return((w=(o=s==null?void 0:s.mergedComponentPropsRef.value)===null||o===void 0?void 0:o.Empty)===null||w===void 0?void 0:w.renderIcon)||(()=>l(pn,null))});return{mergedClsPrefix:n,mergedRenderIcon:x,localizedDescription:z(()=>b.value||r.value.description),cssVars:z(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:w},self:{[ee("iconSize",o)]:g,[ee("fontSize",o)]:B,textColor:$,iconColor:R,extraTextColor:p}}=i.value;return{"--n-icon-size":g,"--n-font-size":B,"--n-bezier":w,"--n-text-color":$,"--n-icon-color":R,"--n-extra-text-color":p}})}},render(){const{$slots:e,mergedClsPrefix:n}=this;return l("div",{class:`${n}-empty`,style:this.cssVars},this.showIcon?l("div",{class:`${n}-empty__icon`},e.icon?e.icon():l(ht,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?l("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?l("div",{class:`${n}-empty__extra`},e.extra()):null)}});const On=l(vn);function Rn(e,n){return l(vt,{name:"fade-in-scale-up-transition"},{default:()=>e?l(ht,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>On}):null})}var rt=X({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:i,multipleRef:r,valueSetRef:s,renderLabelRef:b,renderOptionRef:x,handleOptionClick:o,handleOptionMouseEnter:w}=Ge(Ze),g=_e(()=>{const{value:p}=i;return p?e.tmNode.key===p.key:!1});function B(p){const{tmNode:m}=e;m.disabled||o(p,m)}function $(p){const{tmNode:m}=e;m.disabled||w(p,m)}function R(p){const{tmNode:m}=e,{value:A}=g;m.disabled||A||w(p,m)}return{multiple:r,isGrouped:_e(()=>{const{tmNode:p}=e,{parent:m}=p;return m&&m.rawNode.type==="group"}),isPending:g,isSelected:_e(()=>{const{value:p}=n,{value:m}=r;if(p===null)return!1;const A=e.tmNode.rawNode.value;if(m){const{value:F}=s;return F.has(A)}else return p===A}),renderLabel:b,renderOption:x,handleMouseMove:R,handleMouseEnter:$,handleClick:B}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:i,isPending:r,isGrouped:s,multiple:b,renderOption:x,renderLabel:o,handleClick:w,handleMouseEnter:g,handleMouseMove:B}=this,R=Rn(b&&i,e),p=o?[o(n,i),R]:[pe(n.label,n,i),R],m=l("div",{class:[`${e}-base-select-option`,n.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:i,[`${e}-base-select-option--grouped`]:s,[`${e}-base-select-option--pending`]:r}],style:n.style,onClick:w,onMouseenter:g,onMousemove:B},l("div",{class:`${e}-base-select-option__content`},p));return n.render?n.render({node:m,option:n,selected:i}):x?x({node:m,option:n,selected:i}):m}}),at=X({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n}=Ge(Ze);return{renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:i,tmNode:{rawNode:r}}=this,s=n?n(r,!1):pe(r.label,r,!1),b=l("div",{class:`${e}-base-select-group-header`},s);return r.render?r.render({node:b,option:r}):i?i({node:b,option:r,selected:!1}):b}}),Tn=O("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[Y("multiple",[O("base-select-option",`
 padding-right: 28px;
 `)]),O("scrollbar",`
 max-height: var(--n-height);
 `),O("virtual-list",`
 max-height: var(--n-height);
 `),O("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[_("content",`
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),O("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),O("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),_("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),_("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),_("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier);
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),O("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),O("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[se("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Y("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Y("pending",`
 background-color: var(--n-option-color-pending);
 `),Y("selected",`
 color: var(--n-option-text-color-active);
 background-color: var(--n-option-color-active);
 `),Y("disabled",`
 cursor: not-allowed;
 `,[He("selected",`
 color: var(--n-option-text-color-disabled);
 `),Y("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),_("check",`
 font-size: 16px;
 position: absolute;
 right: 8px;
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[pt({enterScale:"0.5"})])])]),Mn=X({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ie.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},width:[Number,String],autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},onToggle:Function}),setup(e){const n=ie("InternalSelectMenu","-internal-select-menu",Tn,Ht,e,G(e,"clsPrefix")),i=C(null),r=C(null),s=C(null),b=z(()=>e.treeMate.getFlattenedNodes()),x=z(()=>Ut(b.value)),o=C(null);function w(){const{treeMate:u}=e;let h=null;if(e.autoPending){const{value:E}=e;E===null?h=u.getFirstAvailableNode():(e.multiple?h=u.getNode((E||[])[(E||[]).length-1]):h=u.getNode(E),(!h||h.disabled)&&(h=u.getFirstAvailableNode())),h&&P(h)}}let g;ue(G(e,"show"),u=>{u?g=ue(e.resetMenuOnOptionsChange?[G(e,"treeMate"),G(e,"multiple")]:[G(e,"multiple")],()=>{w(),Te(H)},{immediate:!0}):g==null||g()},{immediate:!0});const B=z(()=>Ke(n.value.self[ee("optionHeight",e.size)])),$=z(()=>Xe(n.value.self[ee("padding",e.size)])),R=z(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),p=z(()=>{const u=b.value;return u&&u.length===0}),m=z(()=>[{width:qt(e.width)},te.value]);function A(u){const{onToggle:h}=e;h&&h(u)}function F(u){const{onScroll:h}=e;h&&h(u)}function V(u){var h;(h=s.value)===null||h===void 0||h.sync(),F(u)}function D(){var u;(u=s.value)===null||u===void 0||u.sync()}function K(){const{value:u}=o;return u||null}function W(u,h){h.disabled||P(h,!1)}function f(u,h){h.disabled||A(h)}function v(u){var h;Ue(u,"action")||(h=e.onKeyup)===null||h===void 0||h.call(e,u)}function k(u){var h;Ue(u,"action")||(h=e.onKeydown)===null||h===void 0||h.call(e,u)}function I(u){var h;(h=e.onMousedown)===null||h===void 0||h.call(e,u),!e.focusable&&u.preventDefault()}function y(){const{value:u}=o;u&&P(u.getNext({loop:!0}),!0)}function L(){const{value:u}=o;u&&P(u.getPrev({loop:!0}),!0)}function P(u,h=!1){o.value=u,h&&H()}function H(){var u,h;const E=o.value;if(!E)return;const Q=x.value(E.key);Q!==null&&(e.virtualScroll?(u=r.value)===null||u===void 0||u.scrollTo({index:Q}):(h=s.value)===null||h===void 0||h.scrollTo({index:Q,elSize:B.value}))}function q(u){var h,E;!((h=i.value)===null||h===void 0)&&h.contains(u.target)&&((E=e.onFocus)===null||E===void 0||E.call(e,u))}function ge(u){var h,E;!((h=i.value)===null||h===void 0)&&h.contains(u.relatedTarget)||(E=e.onBlur)===null||E===void 0||E.call(e,u)}Je(Ze,{handleOptionMouseEnter:W,handleOptionClick:f,valueSetRef:R,multipleRef:G(e,"multiple"),valueRef:G(e,"value"),renderLabelRef:G(e,"renderLabel"),renderOptionRef:G(e,"renderOption"),pendingTmNodeRef:o}),Je(Gt,i),$e(()=>{const{value:u}=s;u&&u.sync()});const te=z(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:h},self:{height:E,borderRadius:Q,color:be,groupHeaderTextColor:me,actionDividerColor:ce,optionTextColorPressed:de,optionTextColor:ne,optionTextColorDisabled:Z,optionTextColorActive:fe,optionOpacityDisabled:oe,optionCheckColor:we,actionTextColor:ye,optionColorPending:xe,optionColorActive:Se,loadingColor:le,loadingSize:re,[ee("optionFontSize",u)]:Ce,[ee("optionHeight",u)]:Oe,[ee("optionPadding",u)]:he}}=n.value;return{"--n-height":E,"--n-action-divider-color":ce,"--n-action-text-color":ye,"--n-bezier":h,"--n-border-radius":Q,"--n-color":be,"--n-option-font-size":Ce,"--n-group-header-text-color":me,"--n-option-check-color":we,"--n-option-color-pending":xe,"--n-option-color-active":Se,"--n-option-height":Oe,"--n-option-opacity-disabled":oe,"--n-option-text-color":ne,"--n-option-text-color-active":fe,"--n-option-text-color-disabled":Z,"--n-option-text-color-pressed":de,"--n-option-padding":he,"--n-option-padding-left":Xe(he,"left"),"--n-loading-color":le,"--n-loading-size":re}});return Object.assign({mergedTheme:n,virtualListRef:r,scrollbarRef:s,style:m,itemSize:B,padding:$,flattenedNodes:b,empty:p,virtualListContainer(){const{value:u}=r;return u==null?void 0:u.listElRef},virtualListContent(){const{value:u}=r;return u==null?void 0:u.itemsElRef},doScroll:F,handleFocusin:q,handleFocusout:ge,handleKeyUp:v,handleKeyDown:k,handleMouseDown:I,handleVirtualListResize:D,handleVirtualListScroll:V},{selfRef:i,next:y,prev:L,getPendingTmNode:K})},render(){const{$slots:e,virtualScroll:n,clsPrefix:i,mergedTheme:r}=this;return l("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${i}-base-select-menu`,this.multiple&&`${i}-base-select-menu--multiple`],style:this.style,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?l("div",{class:`${i}-base-select-menu__loading`},l(Yt,{clsPrefix:i,strokeWidth:20})):this.empty?l("div",{class:`${i}-base-select-menu__empty`},Xt(e.empty,()=>[l(Cn,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty})])):l(Qt,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?l(wn,{ref:"virtualListRef",class:`${i}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:s})=>s.isGroup?l(at,{key:s.key,clsPrefix:i,tmNode:s}):s.ignored?null:l(rt,{clsPrefix:i,key:s.key,tmNode:s})}):l("div",{class:`${i}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(s=>s.isGroup?l(at,{key:s.key,clsPrefix:i,tmNode:s}):l(rt,{clsPrefix:i,key:s.key,tmNode:s})))}),Zt(e.action,s=>[l("div",{class:`${i}-base-select-menu__action`,"data-action":!0,key:"action"},s),l(gn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),zn=se([O("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[O("base-loading",`
 color: var(--n-loading-color);
 `),O("base-selection-tags","min-height: var(--n-height);"),_("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),_("state-border",`
 z-index: 1;
 border-color: #0000;
 `),O("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[_("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),O("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[_("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),O("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `),O("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),O("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[O("base-selection-input",`
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[_("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),_("render-label",`
 color: var(--n-text-color);
 `)]),He("disabled",[se("&:hover",[_("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Y("focus",[_("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Y("active",[_("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),O("base-selection-label","background-color: var(--n-color-active);"),O("base-selection-tags","background-color: var(--n-color-active);")])]),Y("disabled","cursor: not-allowed;",[_("arrow",`
 color: var(--n-arrow-color-disabled);
 `),O("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[O("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),_("render-label",`
 color: var(--n-text-color-disabled);
 `)]),O("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),O("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),O("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[_("input",`
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),_("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>Y(`${e}-status`,[_("state-border",`border: var(--n-border-${e});`),He("disabled",[se("&:hover",[_("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),Y("active",[_("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),O("base-selection-label",`background-color: var(--n-color-active-${e});`),O("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),Y("focus",[_("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),O("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 `),O("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[se("&:last-child","padding-right: 0;"),O("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[_("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Fn=X({name:"InternalSelection",props:Object.assign(Object.assign({},ie.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeyup:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String}),setup(e){const n=C(null),i=C(null),r=C(null),s=C(null),b=C(null),x=C(null),o=C(null),w=C(null),g=C(null),B=C(null),$=C(!1),R=C(!1),p=C(!1),m=ie("InternalSelection","-internal-selection",zn,Jt,e,G(e,"clsPrefix")),A=z(()=>e.clearable&&!e.disabled&&(p.value||e.active)),F=z(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):pe(e.selectedOption.label,e.selectedOption,!0):e.placeholder),V=z(()=>{const a=e.selectedOption;if(!!a)return a.label}),D=z(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function K(){var a;const{value:d}=n;if(d){const{value:N}=i;N&&(N.style.width=`${d.offsetWidth}px`,e.maxTagCount!=="responsive"&&((a=g.value)===null||a===void 0||a.sync()))}}function W(){const{value:a}=B;a&&(a.style.display="none")}function f(){const{value:a}=B;a&&(a.style.display="inline-block")}ue(G(e,"active"),a=>{a||W()}),ue(G(e,"pattern"),()=>{e.multiple&&Te(K)});function v(a){const{onFocus:d}=e;d&&d(a)}function k(a){const{onBlur:d}=e;d&&d(a)}function I(a){const{onDeleteOption:d}=e;d&&d(a)}function y(a){const{onClear:d}=e;d&&d(a)}function L(a){const{onPatternInput:d}=e;d&&d(a)}function P(a){var d;(!a.relatedTarget||!(!((d=r.value)===null||d===void 0)&&d.contains(a.relatedTarget)))&&v(a)}function H(a){var d;!((d=r.value)===null||d===void 0)&&d.contains(a.relatedTarget)||k(a)}function q(a){y(a)}function ge(){p.value=!0}function te(){p.value=!1}function Me(a){!e.active||!e.filterable||a.target!==i.value&&a.preventDefault()}function u(a){I(a)}function h(a){if(a.code==="Backspace"&&!E.value&&!e.pattern.length){const{selectedOptions:d}=e;d!=null&&d.length&&u(d[d.length-1])}}const E=C(!1);let Q=null;function be(a){const{value:d}=n;if(d){const N=a.target.value;d.textContent=N,K()}E.value?Q=a:L(a)}function me(){E.value=!0}function ce(){E.value=!1,L(Q),Q=null}function de(a){var d;R.value=!0,(d=e.onPatternFocus)===null||d===void 0||d.call(e,a)}function ne(a){var d;R.value=!1,(d=e.onPatternBlur)===null||d===void 0||d.call(e,a)}function Z(){var a,d;if(e.filterable)R.value=!1,(a=x.value)===null||a===void 0||a.blur(),(d=i.value)===null||d===void 0||d.blur();else if(e.multiple){const{value:N}=s;N==null||N.blur()}else{const{value:N}=b;N==null||N.blur()}}function fe(){var a,d,N;e.filterable?(R.value=!1,(a=x.value)===null||a===void 0||a.focus()):e.multiple?(d=s.value)===null||d===void 0||d.focus():(N=b.value)===null||N===void 0||N.focus()}function oe(){const{value:a}=i;a&&(f(),a.focus())}function we(){const{value:a}=i;a&&a.blur()}function ye(a){const{value:d}=o;d&&d.setTextContent(`+${a}`)}function xe(){const{value:a}=w;return a}function Se(){return i.value}let le=null;function re(){le!==null&&window.clearTimeout(le)}function Ce(){e.disabled||e.active||(re(),le=window.setTimeout(()=>{$.value=!0},100))}function Oe(){re()}function he(a){a||(re(),$.value=!1)}return $e(()=>{en(()=>{const a=x.value;!a||(a.tabIndex=e.disabled||R.value?-1:0)})}),{mergedTheme:m,mergedClearable:A,patternInputFocused:R,filterablePlaceholder:F,label:V,selected:D,showTagsPanel:$,isCompositing:E,counterRef:o,counterWrapperRef:w,patternInputMirrorRef:n,patternInputRef:i,selfRef:r,multipleElRef:s,singleElRef:b,patternInputWrapperRef:x,overflowRef:g,inputTagElRef:B,handleMouseDown:Me,handleFocusin:P,handleClear:q,handleMouseEnter:ge,handleMouseLeave:te,handleDeleteOption:u,handlePatternKeyDown:h,handlePatternInputInput:be,handlePatternInputBlur:ne,handlePatternInputFocus:de,handleMouseEnterCounter:Ce,handleMouseLeaveCounter:Oe,handleFocusout:H,handleCompositionEnd:ce,handleCompositionStart:me,onPopoverUpdateShow:he,focus:fe,focusInput:oe,blur:Z,blurInput:we,updateCounter:ye,getCounter:xe,getTail:Se,renderLabel:e.renderLabel,cssVars:z(()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:d},self:{borderRadius:N,color:ze,placeholderColor:Ee,textColor:Ne,paddingSingle:Le,paddingMultiple:Ve,caretColor:Fe,colorDisabled:Ie,textColorDisabled:De,placeholderColorDisabled:Re,colorActive:Ye,boxShadowFocus:t,boxShadowActive:c,boxShadowHover:S,border:T,borderFocus:M,borderHover:j,borderActive:U,arrowColor:ve,arrowColorDisabled:Pe,loadingColor:We,colorActiveWarning:bt,boxShadowFocusWarning:mt,boxShadowActiveWarning:wt,boxShadowHoverWarning:yt,borderWarning:xt,borderFocusWarning:St,borderHoverWarning:Ct,borderActiveWarning:Ot,colorActiveError:Rt,boxShadowFocusError:Tt,boxShadowActiveError:Mt,boxShadowHoverError:zt,borderError:Ft,borderFocusError:It,borderHoverError:Pt,borderActiveError:kt,clearColor:_t,clearColorHover:Bt,clearColorPressed:$t,clearSize:At,arrowSize:Et,[ee("height",a)]:Nt,[ee("fontSize",a)]:Lt}}=m.value;return{"--n-bezier":d,"--n-border":T,"--n-border-active":U,"--n-border-focus":M,"--n-border-hover":j,"--n-border-radius":N,"--n-box-shadow-active":c,"--n-box-shadow-focus":t,"--n-box-shadow-hover":S,"--n-caret-color":Fe,"--n-color":ze,"--n-color-active":Ye,"--n-color-disabled":Ie,"--n-font-size":Lt,"--n-height":Nt,"--n-padding-single":Le,"--n-padding-multiple":Ve,"--n-placeholder-color":Ee,"--n-placeholder-color-disabled":Re,"--n-text-color":Ne,"--n-text-color-disabled":De,"--n-arrow-color":ve,"--n-arrow-color-disabled":Pe,"--n-loading-color":We,"--n-color-active-warning":bt,"--n-box-shadow-focus-warning":mt,"--n-box-shadow-active-warning":wt,"--n-box-shadow-hover-warning":yt,"--n-border-warning":xt,"--n-border-focus-warning":St,"--n-border-hover-warning":Ct,"--n-border-active-warning":Ot,"--n-color-active-error":Rt,"--n-box-shadow-focus-error":Tt,"--n-box-shadow-active-error":Mt,"--n-box-shadow-hover-error":zt,"--n-border-error":Ft,"--n-border-focus-error":It,"--n-border-hover-error":Pt,"--n-border-active-error":kt,"--n-clear-size":At,"--n-clear-color":_t,"--n-clear-color-hover":Bt,"--n-clear-color-pressed":$t,"--n-arrow-size":Et}})}},render(){const{status:e,multiple:n,size:i,disabled:r,filterable:s,maxTagCount:b,bordered:x,clsPrefix:o,renderTag:w,renderLabel:g}=this,B=b==="responsive",$=typeof b=="number",R=B||$,p=l(tn,{clsPrefix:o,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var A,F;return(F=(A=this.$slots).arrow)===null||F===void 0?void 0:F.call(A)}});let m;if(n){const A=y=>l("div",{class:`${o}-base-selection-tag-wrapper`,key:y.value},w?w({option:y,handleClose:()=>this.handleDeleteOption(y)}):l(je,{size:i,closable:!y.disabled,disabled:r,internalStopClickPropagation:!0,onClose:()=>this.handleDeleteOption(y)},{default:()=>g?g(y,!0):pe(y.label,y,!0)})),F=($?this.selectedOptions.slice(0,b):this.selectedOptions).map(A),V=s?l("div",{class:`${o}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${o}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),l("span",{ref:"patternInputMirrorRef",class:`${o}-base-selection-input-tag__mirror`},this.pattern)):null,D=B?()=>l("div",{class:`${o}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},l(je,{ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0;let K;if($){const y=this.selectedOptions.length-b;y>0&&(K=l("div",{class:`${o}-base-selection-tag-wrapper`,key:"__counter__"},l(je,{ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${y}`})))}const W=B?s?l(lt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>F,counter:D,tail:()=>V}):l(lt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>F,counter:D}):$?F.concat(K):F,f=R?()=>l("div",{class:`${o}-base-selection-popover`},B?F:this.selectedOptions.map(A)):void 0,v=R?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,I=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?l("div",{class:`${o}-base-selection-placeholder ${o}-base-selection-overlay`},this.placeholder):null;if(s){const y=l("div",{ref:"patternInputWrapperRef",class:`${o}-base-selection-tags`},W,B?null:V,p);m=l(tt,null,R?l(et,Object.assign({},v),{trigger:()=>y,default:f}):y,I)}else{const y=l("div",{ref:"multipleElRef",class:`${o}-base-selection-tags`,tabindex:r?void 0:0},W,p);m=l(tt,null,R?l(et,Object.assign({},v),{trigger:()=>y,default:f}):y,I)}}else if(s){const A=this.pattern||this.isCompositing,F=this.active?!A:!this.selected,V=this.active?!1:this.selected;m=l("div",{ref:"patternInputWrapperRef",class:`${o}-base-selection-label`},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${o}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),V?l("div",{class:`${o}-base-selection-label__render-label ${o}-base-selection-overlay`,key:"input"},l("div",{class:`${o}-base-selection-overlay__wrapper`},w?w({option:this.selectedOption,handleClose:()=>{}}):g?g(this.selectedOption,!0):pe(this.label,this.selectedOption,!0))):null,F?l("div",{class:`${o}-base-selection-placeholder ${o}-base-selection-overlay`,key:"placeholder"},l("div",{class:`${o}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,p)}else m=l("div",{ref:"singleElRef",class:`${o}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?l("div",{class:`${o}-base-selection-input`,title:hn(this.label),key:"input"},l("div",{class:`${o}-base-selection-input__content`},w?w({option:this.selectedOption,handleClose:()=>{}}):g?g(this.selectedOption,!0):pe(this.label,this.selectedOption,!0))):l("div",{class:`${o}-base-selection-placeholder ${o}-base-selection-overlay`,key:"placeholder"},this.placeholder),p);return l("div",{ref:"selfRef",class:[`${o}-base-selection`,e&&`${o}-base-selection--${e}-status`,{[`${o}-base-selection--active`]:this.active,[`${o}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${o}-base-selection--disabled`]:this.disabled,[`${o}-base-selection--multiple`]:this.multiple,[`${o}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeyup:this.onKeyup,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},m,x?l("div",{class:`${o}-base-selection__border`}):null,x?l("div",{class:`${o}-base-selection__state-border`}):null)}});function In(e){return Ae(e)?e.name||e.key||"key-required":e.value}function Ae(e){return e.type==="group"}function gt(e){return e.type==="ignored"}const Pn={getKey:In,getIsGroup:Ae,getIgnored:gt};function st(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function kn(e,n,i){if(!n)return e;function r(s){if(!Array.isArray(s))return[];const b=[];for(const x of s)if(Ae(x)){const o=r(x.children);o.length&&b.push(Object.assign({},x,{children:o}))}else{if(gt(x))continue;n(i,x)&&b.push(x)}return b}return r(e)}function _n(e){const n=new Map;return e.forEach(i=>{Ae(i)?i.children.forEach(r=>{n.set(r.value,r)}):n.set(i.value,i)}),n}function Bn(e,n){return n?typeof n.label=="string"?st(e,n.label):n.value!==void 0?st(e,String(n.value)):!1:!1}var $n=se([O("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),O("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[pt()])]);const An=Object.assign(Object.assign({},ie.props),{to:qe.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:{type:Function,default:Bn},placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:{type:Function,default:e=>({label:e,value:e})},fallbackOption:{type:[Function,Boolean],default:()=>e=>({label:String(e),value:e})},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},onChange:[Function,Array],items:Array});var Ln=X({name:"Select",props:An,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:i,namespaceRef:r}=dt(e),s=ie("Select","-select",$n,nn,e,n),b=C(e.defaultValue),x=G(e,"value"),o=nt(x,b),w=C(!1),g=C(""),B=z(()=>on(y.value,Pn)),$=z(()=>_n(I.value)),R=C(!1),p=nt(G(e,"show"),R),m=C(null),A=C(null),F=C(null),{localeRef:V}=ft("Select"),D=z(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:V.value.placeholder}),K=ln(e,["items","options"]),W=C([]),f=C([]),v=C(new Map),k=z(()=>{const{fallbackOption:t}=e;return t?c=>Object.assign(t(c),{value:c}):!1}),I=z(()=>f.value.concat(W.value).concat(K.value)),y=z(()=>{if(e.remote)return K.value;{const{value:t}=I,{value:c}=g;if(!c.length||!e.filterable)return t;{const{filter:S}=e;return kn(t,S,c)}}});function L(t){const c=e.remote,{value:S}=v,{value:T}=$,{value:M}=k,j=[];return t.forEach(U=>{if(T.has(U))j.push(T.get(U));else if(c&&S.has(U))j.push(S.get(U));else if(M){const ve=M(U);ve&&j.push(ve)}}),j}const P=z(()=>{if(e.multiple){const{value:t}=o;return Array.isArray(t)?L(t):[]}return null}),H=z(()=>{const{value:t}=o;return!e.multiple&&!Array.isArray(t)?t===null?null:L([t])[0]||null:null}),q=rn(e),{mergedSizeRef:ge,mergedDisabledRef:te,mergedStatusRef:Me}=q;function u(t,c){const{onChange:S,"onUpdate:value":T,onUpdateValue:M}=e,{nTriggerFormChange:j,nTriggerFormInput:U}=q;S&&J(S,t,c),M&&J(M,t,c),T&&J(T,t,c),b.value=t,j(),U()}function h(t){const{onBlur:c}=e,{nTriggerFormBlur:S}=q;c&&J(c,t),S()}function E(){const{onClear:t}=e;t&&J(t)}function Q(t){const{onFocus:c}=e,{nTriggerFormFocus:S}=q;c&&J(c,t),S()}function be(t){const{onSearch:c}=e;c&&J(c,t)}function me(t){const{onScroll:c}=e;c&&J(c,t)}function ce(){var t;const{remote:c,multiple:S}=e;if(c){const{value:T}=v;if(S)(t=P.value)===null||t===void 0||t.forEach(M=>{T.set(M.value,M)});else{const M=H.value;M&&T.set(M.value,M)}}}function de(t){const{onUpdateShow:c,"onUpdate:show":S}=e;c&&J(c,t),S&&J(S,t),R.value=t}function ne(){te.value||(de(!0),R.value=!0,e.filterable&&De())}function Z(){de(!1)}function fe(){g.value="",f.value=[]}const oe=C(!1);function we(){e.filterable&&(oe.value=!0)}function ye(){e.filterable&&(oe.value=!1,p.value||fe())}function xe(){te.value||(p.value?e.filterable||Z():ne())}function Se(t){var c,S;!((S=(c=F.value)===null||c===void 0?void 0:c.selfRef)===null||S===void 0)&&S.contains(t.relatedTarget)||(w.value=!1,h(t),Z())}function le(t){Q(t),w.value=!0}function re(t){w.value=!0}function Ce(t){var c;!((c=m.value)===null||c===void 0)&&c.$el.contains(t.relatedTarget)||(w.value=!1,h(t),Z())}function Oe(){var t;(t=m.value)===null||t===void 0||t.focus(),Z()}function he(t){var c;p.value&&(!((c=m.value)===null||c===void 0)&&c.$el.contains(t.target)||Z())}function a(t){if(!Array.isArray(t))return[];if(k.value)return Array.from(t);{const{remote:c}=e,{value:S}=$;if(c){const{value:T}=v;return t.filter(M=>S.has(M)||T.has(M))}else return t.filter(T=>S.has(T))}}function d(t){N(t.rawNode)}function N(t){if(te.value)return;const{tag:c,remote:S}=e;if(c&&!S){const{value:T}=f,M=T[0]||null;M&&(W.value.push(M),f.value=[])}if(S&&v.value.set(t.value,t),e.multiple){const T=a(o.value),M=T.findIndex(j=>j===t.value);if(~M){if(T.splice(M,1),c&&!S){const j=ze(t.value);~j&&(W.value.splice(j,1),g.value="")}}else T.push(t.value),g.value="";u(T,L(T))}else{if(c&&!S){const T=ze(t.value);~T?W.value=[W.value[T]]:W.value=[]}Ie(),Z(),u(t.value,t)}}function ze(t){return W.value.findIndex(S=>S.value===t)}function Ee(t){p.value||ne();const{value:c}=t.target;g.value=c;const{tag:S,remote:T}=e;if(be(c),S&&!T){if(!c){f.value=[];return}const M=e.onCreate(c);K.value.some(j=>j.value===M.value)||W.value.some(j=>j.value===M.value)?f.value=[]:f.value=[M]}}function Ne(t){t.stopPropagation();const{multiple:c}=e;!c&&e.filterable&&Z(),E(),c?u([],[]):u(null,null)}function Le(t){Ue(t,"action")||t.preventDefault()}function Ve(t){me(t)}function Fe(t){var c,S,T,M,j;switch(t.code){case"Space":if(e.filterable)break;t.preventDefault();case"Enter":case"NumpadEnter":if(!(!((c=m.value)===null||c===void 0)&&c.isCompositing)){if(p.value){const U=(S=F.value)===null||S===void 0?void 0:S.getPendingTmNode();U?d(U):e.filterable||(Z(),Ie())}else if(ne(),e.tag&&oe.value){const U=f.value[0];if(U){const ve=U.value,{value:Pe}=o;e.multiple&&Array.isArray(Pe)&&Pe.some(We=>We===ve)||N(U)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;p.value&&((T=F.value)===null||T===void 0||T.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;p.value?(M=F.value)===null||M===void 0||M.next():ne();break;case"Escape":Z(),(j=m.value)===null||j===void 0||j.focus();break}}function Ie(){var t;(t=m.value)===null||t===void 0||t.focus()}function De(){var t;(t=m.value)===null||t===void 0||t.focusInput()}function Re(){var t;(t=A.value)===null||t===void 0||t.syncPosition()}return ce(),ue(G(e,"options"),ce),ue(y,()=>{!p.value||Te(Re)}),ue(o,()=>{!p.value||Te(Re)}),Object.assign(Object.assign({},{focus:()=>{var t;(t=m.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=m.value)===null||t===void 0||t.blur()}}),{mergedStatus:Me,mergedClsPrefix:n,mergedBordered:i,namespace:r,treeMate:B,isMounted:an(),triggerRef:m,menuRef:F,pattern:g,uncontrolledShow:R,mergedShow:p,adjustedTo:qe(e),uncontrolledValue:b,mergedValue:o,followerRef:A,localizedPlaceholder:D,selectedOption:H,selectedOptions:P,mergedSize:ge,mergedDisabled:te,focused:w,activeWithoutMenuOpen:oe,onTriggerInputFocus:we,onTriggerInputBlur:ye,handleMenuFocus:re,handleMenuBlur:Ce,handleMenuTabOut:Oe,handleTriggerClick:xe,handleToggle:d,handleDeleteOption:N,handlePatternInput:Ee,handleClear:Ne,handleTriggerBlur:Se,handleTriggerFocus:le,handleKeydown:Fe,syncPosition:Re,handleMenuAfterLeave:fe,handleMenuClickOutside:he,handleMenuScroll:Ve,handleMenuKeydown:Fe,handleMenuMousedown:Le,mergedTheme:s,cssVars:z(()=>{const{self:{menuBoxShadow:t}}=s.value;return{"--n-menu-box-shadow":t}})})},render(){return l("div",{class:`${this.mergedClsPrefix}-select`},l(sn,null,{default:()=>[l(un,null,{default:()=>l(Fn,{ref:"triggerRef",status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),l(cn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===qe.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>l(vt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n;return(this.mergedShow||this.displayDirective==="show")&&dn(l(Mn,Object.assign({},this.menuProps,{ref:"menuRef",virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,(e=this.menuProps)===null||e===void 0?void 0:e.class],clsPrefix:this.mergedClsPrefix,focusable:!0,autoPending:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,r;return[(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)]},action:()=>{var i,r;return[(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)]}}),this.displayDirective==="show"?[[fn,this.mergedShow],[ot,this.handleMenuClickOutside]]:[[ot,this.handleMenuClickOutside]])}})})]}))}});export{Ln as N,wn as V,Cn as a};
