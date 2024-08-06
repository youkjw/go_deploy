import{p as T,ag as l,ap as g,d as k,q as P,v as _,x as H,y as V,ak as n,z as j,_ as W,k as I,u as L,o as c,c as f,h as u,b as O,w as p,i as m,t as x,e as i,a as b,j as E,g as h,r as v,f as F,n as y}from"./index.85d3582f.js";var M=T("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[l("&:first-child",{marginTop:0}),g("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[g("align-text",{paddingLeft:0},[l("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),l("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),l("&::before",{backgroundColor:"var(--n-bar-color)"})])]);const R=Object.assign(Object.assign({},_.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean});var o=a=>k({name:`H${a}`,props:R,setup(t){const{mergedClsPrefixRef:r}=P(t),e=_("Typography","-h",M,H,t,r);return{mergedClsPrefix:r,cssVars:V(()=>{const{type:d}=t,{common:{cubicBezierEaseInOut:s},self:{headerFontWeight:w,headerTextColor:$,[n("headerPrefixWidth",a)]:z,[n("headerFontSize",a)]:C,[n("headerMargin",a)]:S,[n("headerBarWidth",a)]:B,[n("headerBarColor",d)]:N}}=e.value;return{"--n-bezier":s,"--n-font-size":C,"--n-margin":S,"--n-bar-color":N,"--n-bar-width":B,"--n-font-weight":w,"--n-text-color":$,"--n-prefix-width":z}})}},render(){const{prefix:t,alignText:r,mergedClsPrefix:e,cssVars:d,$slots:s}=this;return j(`h${a}`,{class:[`${e}-h`,`${e}-h${a}`,{[`${e}-h--prefix-bar`]:t,[`${e}-h--align-text`]:r}],style:d},s)}});o("1");o("2");const X=o("3"),A=o("4");o("5");o("6");const q={class:"page-header"},D=k({props:{title:{type:String},subtitle:{type:String}},setup(a){const{t}=I(),r=L();return(e,d)=>(c(),f("div",q,[u("div",{class:y(["title",i(r).state.preference.theme==="dark"?"dark":"light"])},[u("div",null,[O(i(X),null,{default:p(()=>{var s;return[m(x((s=a.title)!=null?s:i(t)("titles."+e.$route.name)),1)]}),_:1}),a.subtitle?(c(),b(i(E),{key:0,depth:"3"},{default:p(()=>[m(x(a.subtitle),1)]),_:1})):h("",!0)]),e.$slots.action?(c(),b(i(F),{key:0,size:6,justify:"end"},{default:p(()=>[v(e.$slots,"action",{},void 0,!0)]),_:3})):h("",!0)],2),e.$slots.default?(c(),f("div",{key:0,class:y(["summary",i(r).state.preference.theme==="dark"?"dark":"light"])},[v(e.$slots,"default",{},void 0,!0)],2)):h("",!0)]))}});var G=W(D,[["__scopeId","data-v-60e8e2d4"]]);export{A as N,G as X};
