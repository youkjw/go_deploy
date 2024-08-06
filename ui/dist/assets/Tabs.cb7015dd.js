import{bY as ke,bZ as M,b_ as je,d as D,l as z,aa as Ee,ab as Ie,z as s,ad as Z,W as Oe,X as oe,b$ as Fe,y as K,a9 as Ne,al as Me,ao as De,bd as Ue,bU as Ve,p as b,ap as w,ag as B,af as j,aq as Xe,q as Ye,v as ie,c0 as qe,aK as Q,a6 as X,aI as He,au as Ke,a2 as Ge,a3 as E,c1 as Je,aE as Ze,ak as L,a4 as ee,aU as N,ae as Qe,aR as et,aS as tt,a8 as at}from"./index.85d3582f.js";import{A as rt}from"./Add.32836a6c.js";var nt=/\s/;function ot(e){for(var t=e.length;t--&&nt.test(e.charAt(t)););return t}var it=/^\s+/;function st(e){return e&&e.slice(0,ot(e)+1).replace(it,"")}var te=0/0,lt=/^[-+]0x[0-9a-f]+$/i,dt=/^0b[01]+$/i,ct=/^0o[0-7]+$/i,bt=parseInt;function ae(e){if(typeof e=="number")return e;if(ke(e))return te;if(M(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=M(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=st(e);var o=dt.test(e);return o||ct.test(e)?bt(e.slice(2),o?2:8):lt.test(e)?te:+e}var ft=function(){return je.Date.now()},Y=ft,ut="Expected a function",vt=Math.max,pt=Math.min;function ht(e,t,o){var i,r,l,m,d,f,u=0,c=!1,x=!1,S=!0;if(typeof e!="function")throw new TypeError(ut);t=ae(t)||0,M(o)&&(c=!!o.leading,x="maxWait"in o,l=x?vt(ae(o.maxWait)||0,t):l,S="trailing"in o?!!o.trailing:S);function y(g){var P=i,k=r;return i=r=void 0,u=g,m=e.apply(k,P),m}function $(g){return u=g,d=setTimeout(C,t),c?y(g):m}function R(g){var P=g-f,k=g-u,I=t-P;return x?pt(I,l-k):I}function h(g){var P=g-f,k=g-u;return f===void 0||P>=t||P<0||x&&k>=l}function C(){var g=Y();if(h(g))return T(g);d=setTimeout(C,R(g))}function T(g){return d=void 0,S&&i?y(g):(i=r=void 0,m)}function A(){d!==void 0&&clearTimeout(d),u=0,i=f=r=d=void 0}function U(){return d===void 0?m:T(Y())}function W(){var g=Y(),P=h(g);if(i=arguments,r=this,f=g,P){if(d===void 0)return $(f);if(x)return clearTimeout(d),d=setTimeout(C,t),y(f)}return d===void 0&&(d=setTimeout(C,t)),m}return W.cancel=A,W.flush=U,W}var gt="Expected a function";function q(e,t,o){var i=!0,r=!0;if(typeof e!="function")throw new TypeError(gt);return M(o)&&(i="leading"in o?!!o.leading:i,r="trailing"in o?!!o.trailing:r),ht(e,t,{leading:i,maxWait:t,trailing:r})}const xt=Z(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Z("&::-webkit-scrollbar",{width:0,height:0})]);var mt=D({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=z(null);function t(r){!(r.currentTarget.offsetWidth<r.currentTarget.scrollWidth)||r.deltaY===0||(r.currentTarget.scrollLeft+=r.deltaY+r.deltaX,r.preventDefault())}const o=Ee();return xt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Ie,ssr:o}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...r){var l;(l=e.value)===null||l===void 0||l.scrollTo(...r)}})},render(){return s("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});const J=Oe("n-tabs"),se={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var Pt=D({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:se,setup(e){const t=oe(J,null);return t||Fe("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return s("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const yt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Ve(se,["displayDirective"]));var G=D({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:yt,setup(e){const{mergedClsPrefixRef:t,valueRef:o,typeRef:i,closableRef:r,tabStyleRef:l,tabChangeIdRef:m,onBeforeLeaveRef:d,handleAdd:f,handleTabClick:u,handleClose:c}=oe(J);return{mergedClosable:K(()=>{if(e.internalAddable)return!1;const{closable:x}=e;return x===void 0?r.value:x}),style:l,clsPrefix:t,value:o,type:i,handleClose(x){x.stopPropagation(),!e.disabled&&c(e.name)},handleClick(){if(e.disabled)return;if(e.internalAddable){f();return}const{name:x}=e,S=++m.id;if(x!==o.value){const{value:y}=d;y?Promise.resolve(y(e.name,o.value)).then($=>{$&&m.id===S&&u(x)}):u(x)}}}},render(){const{internalAddable:e,clsPrefix:t,name:o,disabled:i,label:r,tab:l,value:m,mergedClosable:d,style:f,$slots:{default:u}}=this,c=r!=null?r:l;return s("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?s("div",{class:`${t}-tabs-tab-pad`}):null,s("div",Object.assign({key:o,"data-name":o,"data-disabled":i?!0:void 0},Ne({class:[`${t}-tabs-tab`,m===o&&`${t}-tabs-tab--active`,i&&`${t}-tabs-tab--disabled`,d&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:this.handleClick,style:e?void 0:f},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),s("span",{class:`${t}-tabs-tab__label`},e?s(Me,{clsPrefix:t},{default:()=>s(rt,null)}):u?u():typeof c=="object"?c:De(c!=null?c:o)),d&&this.type==="card"?s(Ue,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:i}):null))}}),wt=b("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--bezier),
 border-color .3s var(--bezier);
`,[b("tabs-rail",`
 padding: 3px;
 border-radius: var(--tab-border-radius);
 width: 100%;
 background-color: var(--color-segment);
 transition: background-color .3s var(--bezier);
 display: flex;
 align-items: center;
 `,[b("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[b("tabs-tab",`
 overflow: hidden;
 border-radius: var(--tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[w("active",`
 font-weight: var(--font-weight-strong);
 color: var(--tab-text-color-active);
 background-color: var(--tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),B("&:hover",`
 color: var(--tab-text-color-hover);
 `)])])]),w("flex",[b("tabs-nav",{width:"100%"},[b("tabs-wrapper",{width:"100%"},[b("tabs-tab",{marginRight:0})])])]),b("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--bezier);
 `,[j("prefix, suffix",`
 display: flex;
 align-items: center;
 `),j("prefix","padding-right: 16px;"),j("suffix","padding-left: 16px;")]),b("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[w("shadow-before",[B("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),w("shadow-after",[B("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),B("&::before, &::after",`
 transition: box-shadow .3s var(--bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),B("&::before",`
 left: 0;
 `),B("&::after",`
 right: 0;
 `)]),b("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 `),b("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),b("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),b("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--tab-text-color);
 font-size: var(--tab-font-size);
 background-clip: padding-box;
 padding: var(--tab-padding);
 transition:
 box-shadow .3s var(--bezier),
 color .3s var(--bezier),
 background-color .3s var(--bezier),
 border-color .3s var(--bezier);
 `,[w("disabled",{cursor:"not-allowed"}),j("close",`
 margin-left: 8px;
 font-size: 14px;
 transition: color .3s var(--bezier);
 `),j("label",`
 display: flex;
 align-items: center;
 `)]),b("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--bar-color);
 transition:
 left .2s var(--bezier),
 max-width .2s var(--bezier),
 background-color .3s var(--bezier);
 `,[w("transition-disabled",`
 transition: none;
 `),w("disabled",`
 background-color: var(--tab-text-color-disabled)
 `)]),b("tab-pane",`
 color: var(--pane-text-color);
 width: 100%;
 padding: var(--pane-padding);
 transition:
 color .3s var(--bezier),
 background-color .3s var(--bezier);
 `),b("tabs-tab-pad",`
 width: var(--tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),w("line-type, bar-type",[b("tabs-tab",`
 font-weight: var(--tab-font-weight-active);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[B("&:hover",{color:"var(--tab-text-color-hover)"}),w("active",{color:"var(--tab-text-color-active)"}),w("disabled",{color:"var(--tab-text-color-disabled)"})])]),b("tabs-nav",[w("line-type",[j("prefix, suffix",`
 transition: border-color .3s var(--bezier);
 border-bottom: 1px solid var(--tab-border-color);
 `),b("tabs-nav-scroll-content",`
 transition: border-color .3s var(--bezier);
 border-bottom: 1px solid var(--tab-border-color);
 `),b("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),w("card-type",[j("prefix, suffix",`
 transition: border-color .3s var(--bezier);
 border-bottom: 1px solid var(--tab-border-color);
 `),b("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--bezier);
 border-bottom: 1px solid var(--tab-border-color);
 `),b("tabs-tab-pad",`
 transition: border-color .3s var(--bezier);
 border-bottom: 1px solid var(--tab-border-color);
 `),b("tabs-tab",`
 font-weight: var(--tab-font-weight);
 border: 1px solid var(--tab-border-color);
 border-top-left-radius: var(--tab-border-radius);
 border-top-right-radius: var(--tab-border-radius);
 background-color: var(--tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--tab-font-size);
 color: var(--tab-text-color);
 `,[w("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[Xe("disabled",[B("&:hover",`
 color: var(--tab-text-color-hover);
 `)])]),w("closable","padding-right: 6px;"),w("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--tab-font-weight-active);
 color: var(--tab-text-color-active);
 `),w("disabled","color: var(--tab-text-color-disabled);")]),b("tabs-scroll-padding","border-bottom: 1px solid var(--tab-border-color);")])])]);const Ct=Object.assign(Object.assign({},ie.props),{value:[String,Number],defaultValue:[String,Number],type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var zt=D({name:"Tabs",props:Ct,setup(e,{slots:t}){var o,i;const{mergedClsPrefixRef:r}=Ye(e),l=ie("Tabs","-tabs",wt,qe,e,r),m=z(null),d=z(null),f=z(null),u=z(null),c=z(null),x=z(!0),S=z(!0),y=Q(e,["labelSize","size"]),$=Q(e,["activeName","value"]),R=z((i=(o=$.value)!==null&&o!==void 0?o:e.defaultValue)!==null&&i!==void 0?i:t.default?X(t.default())[0].props.name:null),h=He($,R),C={id:0},T=K(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});Ke(h,()=>{C.id=0,W()});function A(){var a;const{value:n}=h;return n===null?null:(a=m.value)===null||a===void 0?void 0:a.querySelector(`[data-name="${n}"]`)}function U(a){if(e.type==="card")return;const{value:n}=d;if(!!n&&a){const v=`${r.value}-tabs-bar--disabled`,{barWidth:p}=e;if(a.dataset.disabled==="true"?n.classList.add(v):n.classList.remove(v),p&&a.offsetWidth>=p){const _=Math.floor((a.offsetWidth-p)/2)+a.offsetLeft;n.style.left=`${_}px`,n.style.maxWidth=`${p}px`}else n.style.left=`${a.offsetLeft}px`,n.style.maxWidth=`${a.offsetWidth}px`;n.style.width="8192px"}}function W(){if(e.type==="card")return;const a=A();a&&U(a)}function g(a){P(a)}function P(a){const{onActiveNameChange:n,onUpdateValue:v,"onUpdate:value":p}=e;n&&N(n,a),v&&N(v,a),p&&N(p,a),R.value=a}function k(a){const{onClose:n}=e;n&&N(n,a)}let I=!0;const le=q(function(){var n;const{type:v}=e;if((v==="line"||v==="bar")&&I){const{value:p}=d;if(!p)return;const _=`${r.value}-tabs-bar--transition-disabled`;p.classList.add(_),W(),p.classList.remove(_)}v!=="segment"&&V((n=c.value)===null||n===void 0?void 0:n.$el)},64),O=z(!1);function de(a){var n;const{target:v,contentRect:{width:p}}=a,_=v.parentElement.offsetWidth;if(!O.value)_<p&&(O.value=!0);else{const{value:F}=u;if(!F)return;_-p>F.$el.offsetWidth&&(O.value=!1)}V((n=c.value)===null||n===void 0?void 0:n.$el)}const ce=q(de,64);function be(){const{onAdd:a}=e;a&&a(),Qe(()=>{const n=A(),{value:v}=c;!n||!v||v.scrollTo({left:n.offsetLeft,top:0,behavior:"smooth"})})}function V(a){if(!a)return;const{scrollLeft:n,scrollWidth:v,offsetWidth:p}=a;x.value=n<=0,S.value=n+p>=v}const fe=q(a=>{V(a.target)},64);Ge(J,{tabStyleRef:E(e,"tabStyle"),paneClassRef:E(e,"paneClass"),paneStyleRef:E(e,"paneStyle"),mergedClsPrefixRef:r,typeRef:E(e,"type"),closableRef:E(e,"closable"),valueRef:h,tabChangeIdRef:C,onBeforeLeaveRef:E(e,"onBeforeLeave"),handleTabClick:g,handleClose:k,handleAdd:be}),Je(()=>{W()}),Ze(()=>{const{value:a}=f;if(!a)return;const{value:n}=r,v=`${n}-tabs-nav-scroll-wrapper--shadow-before`,p=`${n}-tabs-nav-scroll-wrapper--shadow-after`;x.value?a.classList.remove(v):a.classList.add(v),S.value?a.classList.remove(p):a.classList.add(p)});const ue={syncBarPosition:()=>{W()}};return Object.assign({mergedClsPrefix:r,mergedValue:h,renderedNames:new Set,tabsElRef:m,barElRef:d,addTabInstRef:u,xScrollInstRef:c,scrollWrapperElRef:f,addTabFixed:O,tabWrapperStyle:T,handleNavResize:le,mergedSize:y,handleScroll:fe,handleTabsResize:ce,cssVars:K(()=>{const{value:a}=y,{type:n}=e,v={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n],p=`${a}${v}`,{self:{barColor:_,closeColor:F,closeColorHover:ve,closeColorPressed:pe,tabColor:he,tabBorderColor:ge,paneTextColor:xe,tabFontWeight:me,tabBorderRadius:ye,tabFontWeightActive:we,colorSegment:Ce,fontWeightStrong:Se,tabColorSegment:Te,[L("panePadding",a)]:Re,[L("tabPadding",p)]:Pe,[L("tabGap",p)]:ze,[L("tabTextColor",n)]:$e,[L("tabTextColorActive",n)]:_e,[L("tabTextColorHover",n)]:Ae,[L("tabTextColorDisabled",n)]:We,[L("tabFontSize",a)]:Be},common:{cubicBezierEaseInOut:Le}}=l.value;return{"--bezier":Le,"--color-segment":Ce,"--bar-color":_,"--tab-font-size":Be,"--tab-text-color":$e,"--tab-text-color-active":_e,"--tab-text-color-disabled":We,"--tab-text-color-hover":Ae,"--pane-text-color":xe,"--tab-border-color":ge,"--tab-border-radius":ye,"--close-color":F,"--close-color-hover":ve,"--close-color-pressed":pe,"--tab-color":he,"--tab-font-weight":me,"--tab-font-weight-active":we,"--tab-padding":Pe,"--tab-gap":ze,"--pane-padding":Re,"--font-weight-strong":Se,"--tab-color-segment":Te}})},ue)},render(){const{mergedClsPrefix:e,type:t,addTabFixed:o,addable:i,mergedSize:r,$slots:{default:l,prefix:m,suffix:d}}=this,f=l?X(l()).filter(h=>h.type.__TAB_PANE__===!0):[],u=l?X(l()).filter(h=>h.type.__TAB__===!0):[],c=!u.length,x=m?m():null,S=d?d():null,y=t==="card",$=t==="segment",R=!y&&!$&&this.justifyContent;return s("div",{class:[`${e}-tabs`,`${e}-tabs--${t}-type`,`${e}-tabs--${r}-size`,R&&`${e}-tabs--flex`],style:this.cssVars},s("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav`]},x?s("div",{class:`${e}-tabs-nav__prefix`},x):null,$?s("div",{class:`${e}-tabs-rail`},c?f.map((h,C)=>s(G,Object.assign({},h.props,{internalCreatedByPane:!0,internalLeftPadded:C!==0}),h.children?{default:h.children.tab}:void 0)):u.map((h,C)=>C===0?h:ne(h))):s(ee,{onResize:this.handleNavResize},{default:()=>s("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},s(mt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const h=s("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},R?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),c?f.map((T,A)=>H(s(G,Object.assign({},T.props,{internalCreatedByPane:!0,internalLeftPadded:A!==0&&!R}),T.children?{default:T.children.tab}:void 0))):u.map((T,A)=>H(A!==0&&!R?ne(T):T)),!o&&i&&y?re(i,(c?f.length:u.length)!==0):null,R?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let C=h;return y&&i&&(C=s(ee,{onResize:this.handleTabsResize},{default:()=>h})),s("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},C,y?s("div",{class:`${e}-tabs-pad`}):null,y?null:s("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),o&&i&&y?re(i,!0):null,S?s("div",{class:`${e}-tabs-nav__suffix`},S):null),c&&St(f,this.mergedValue,this.renderedNames))}});function St(e,t,o){const i=[];return e.forEach(r=>{const{name:l,displayDirective:m,"display-directive":d}=r.props,f=c=>m===c||d===c,u=t===l;if(r.key!==void 0&&(r.key=l),u||f("show")||f("show:lazy")&&o.has(l)){o.has(l)||o.add(l);const c=!f("if");i.push(c?et(r,[[tt,u]]):r)}}),i}function re(e,t){return s(G,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function ne(e){const t=at(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function H(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{Pt as N,zt as a};
