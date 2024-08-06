import{X as I,aj as M,y as w,b9 as O,ag as m,p as V,ap as T,d as v,q as W,l as X,m as F,au as $,a3 as y,v as k,z as q,o as d,a as g,b as j,_ as D,bX as K,c as U,e as r,w as C,N as A,C as G,g as x,D as J}from"./index.85d3582f.js";import{a as Q}from"./index.9d2bf9c2.js";import{C as Y}from"./CopyOutline.e34332fe.js";function Z(t,e){const n=I(M,null);return w(()=>t.hljs||(n==null?void 0:n.mergedHljsRef.value))}const ee=t=>{const{textColor2:e,fontSize:n,fontWeightStrong:u}=t;return{textColor:e,fontSize:n,fontWeightStrong:u,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401"}},te={name:"Code",common:O,self:ee};var oe=te,ne=m([V("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[T("word-wrap",[m("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),m("pre",`
 margin: 0;
 font-family: inherit;
 `),m("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:t})=>{const e=`${t.bPrefix}code`;return[`${e} .hljs-comment,
 ${e} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${e} .hljs-doctag,
 ${e} .hljs-keyword,
 ${e} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${e} .hljs-section,
 ${e} .hljs-name,
 ${e} .hljs-selector-tag,
 ${e} .hljs-deletion,
 ${e} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${e} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${e} .hljs-string,
 ${e} .hljs-regexp,
 ${e} .hljs-addition,
 ${e} .hljs-attribute,
 ${e} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${e} .hljs-built_in,
 ${e} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${e} .hljs-attr,
 ${e} .hljs-variable,
 ${e} .hljs-template-variable,
 ${e} .hljs-type,
 ${e} .hljs-selector-class,
 ${e} .hljs-selector-attr,
 ${e} .hljs-selector-pseudo,
 ${e} .hljs-number {
 color: var(--n-hue-6);
 }`,`${e} .hljs-symbol,
 ${e} .hljs-bullet,
 ${e} .hljs-link,
 ${e} .hljs-meta,
 ${e} .hljs-selector-id,
 ${e} .hljs-title {
 color: var(--n-hue-2);
 }`,`${e} .hljs-emphasis {
 font-style: italic;
 }`,`${e} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${e} .hljs-link {
 text-decoration: underline;
 }`]}]);const re=Object.assign(Object.assign({},k.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,internalFontSize:Number,internalNoHighlight:Boolean});var le=v({name:"Code",props:re,setup(t,{slots:e}){const{internalNoHighlight:n}=t,{mergedClsPrefixRef:u}=W(),h=X(null),f=n?{value:void 0}:Z(t),p=(o,c,s)=>{const{value:l}=f;return!l||!(o&&l.getLanguage(o))?null:l.highlight(s?c.trim():c,{language:o}).value},i=()=>{if(e.default)return;const{value:o}=h;if(!o)return;const{language:c}=t,s=t.uri?window.decodeURIComponent(t.code):t.code;if(c){const a=p(c,s,t.trim);if(a!==null){o.innerHTML=t.inline?a:`<pre>${a}</pre>`;return}}if(t.inline){o.textContent=s;return}const l=o.children[0];if(l&&l.tagName==="PRE")l.textContent=s;else{const a=document.createElement("pre");a.textContent=s,o.innerHTML="",o.appendChild(a)}};F(i),$(y(t,"language"),i),$(y(t,"code"),i),n||$(f,i);const _=k("Code","-code",ne,oe,t,u);return{mergedClsPrefix:u,codeRef:h,cssVars:w(()=>{const{common:{cubicBezierEaseInOut:o,fontFamilyMono:c},self:{textColor:s,fontSize:l,fontWeightStrong:a,"mono-3":z,"hue-1":B,"hue-2":S,"hue-3":N,"hue-4":R,"hue-5":P,"hue-5-2":H,"hue-6":L,"hue-6-2":E}}=_.value,{internalFontSize:b}=t;return{"--n-font-size":b?`${b}px`:l,"--n-font-family":c,"--n-font-weight-strong":a,"--n-bezier":o,"--n-text-color":s,"--n-mono-3":z,"--n-hue-1":B,"--n-hue-2":S,"--n-hue-3":N,"--n-hue-4":R,"--n-hue-5":P,"--n-hue-5-2":H,"--n-hue-6":L,"--n-hue-6-2":E}})}},render(){const{mergedClsPrefix:t,wordWrap:e}=this;return q("code",{class:[`${t}-code`,e&&`${t}-code--word-wrap`],style:this.cssVars,ref:"codeRef"},this.$slots)}});const se={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ae=j("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M416 128L192 384l-96-96"},null,-1);var ie=v({name:"CheckmarkOutline",render:function(e,n){return d(),g("svg",se,[ae])}});const ce=v({props:{code:{type:String},language:{type:String}},setup(t){const e=t,n=K(),{copy:u,copied:h,isSupported:f}=Q({source:e.code});return(p,i)=>t.code?(d(),U("div",{key:0,class:"code",style:J({backgroundColor:r(n).codeColor})},[r(f)?(d(),g(r(G),{key:0,tertiary:"",size:"tiny",class:"copy",type:r(h)?"success":"default",onClick:i[0]||(i[0]=()=>r(u)())},{icon:C(()=>[j(r(A),null,{default:C(()=>[r(h)?(d(),g(r(ie),{key:0})):(d(),g(r(Y),{key:1}))]),_:1})]),_:1},8,["type"])):x("",!0),j(r(le),{code:t.code,language:t.language},null,8,["code","language"])],4)):x("",!0)}});var fe=D(ce,[["__scopeId","data-v-4dc26b96"]]);export{fe as X};
