import{W as y,d as x,ai as u,X as z,y as f,z as n,C as g,al as b,bP as N,Z as _,p as m,af as d,ag as j,q as w,v as C,bT as O,l as S,a2 as I,bz as R,bU as B,aG as U,bV as $,aU as h}from"./index.85d3582f.js";const k=y("n-popconfirm"),T={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},P=_(T);var F=x({name:"NPopconfirmPanel",props:T,setup(e){const{localeRef:o}=u("Popconfirm"),{mergedClsPrefixRef:i,mergedThemeRef:t}=z(k);return Object.assign(Object.assign({},u("Popconfirm")),{mergedClsPrefix:i,cssVars:f(()=>{const{common:{cubicBezierEaseInOut:s},self:{fontSize:p,iconSize:l,iconColor:a}}=t.value;return{"--n-bezier":s,"--n-font-size":p,"--n-icon-size":l,"--n-icon-color":a}}),localizedPositiveText:f(()=>e.positiveText||o.value.positiveText),localizedNegativeText:f(()=>e.negativeText||o.value.negativeText),handlePositiveClick(s){e.onPositiveClick(s)},handleNegativeClick(s){e.onNegativeClick(s)}})},render(){var e;const{mergedClsPrefix:o,$slots:i}=this,t=i.action?i.action():this.negativeText===null&&this.positiveText===null?null:[this.negativeText!==null&&n(g,{size:"small",onClick:this.handleNegativeClick},{default:()=>this.localizedNegativeText}),this.positiveText!==null&&n(g,{size:"small",type:"primary",onClick:this.handlePositiveClick},{default:()=>this.localizedPositiveText})];return n("div",{style:this.cssVars},n("div",{class:`${o}-popconfirm__body`},this.showIcon?n("div",{class:`${o}-popconfirm__icon`},i.icon?i.icon():n(b,{clsPrefix:o},{default:()=>n(N,null)})):null,(e=i.default)===null||e===void 0?void 0:e.call(i)),t?n("div",{class:`${o}-popconfirm__action`},t):null)}}),q=m("popconfirm",[d("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[d("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),d("action",`
 margin-top: 8px;
 display: flex;
 justify-content: flex-end;
 `,[m("button",[j("&:not(:last-child)",{marginRight:"8px"})])])]);const E=Object.assign(Object.assign(Object.assign({},C.props),$),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},onPositiveClick:Function,onNegativeClick:Function});var V=x({name:"Popconfirm",props:E,__popover__:!0,setup(e){const{mergedClsPrefixRef:o}=w(),i=C("Popconfirm","-popconfirm",q,O,e,o),t=S(null);function s(l){const{onPositiveClick:a,"onUpdate:show":c}=e;Promise.resolve(a?a(l):!0).then(v=>{var r;v!==!1&&((r=t.value)===null||r===void 0||r.setShow(!1),c&&h(c,!1))})}function p(l){const{onNegativeClick:a,"onUpdate:show":c}=e;Promise.resolve(a?a(l):!0).then(v=>{var r;v!==!1&&((r=t.value)===null||r===void 0||r.setShow(!1),c&&h(c,!1))})}return I(k,{mergedThemeRef:i,mergedClsPrefixRef:o}),{mergedTheme:i,popoverInstRef:t,handlePositiveClick:s,handleNegativeClick:p}},render(){const{$slots:e,$props:o,mergedTheme:i}=this;return n(U,B(o,P,{theme:i.peers.Popover,themeOverrides:i.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const t=R(o,P);return n(F,Object.assign(Object.assign({},t),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}});export{V as N};
