import{b9 as w,bM as E,bN as a,bb as c,p as m,af as s,bw as W,ap as H,ag as L,d as _,q as k,v as T,y as O,av as j,ak as d,l as B,z as t,a9 as F,bd as N,al as R,bO as M,bP as V,bQ as q,bR as K,by as Q}from"./index.85d3582f.js";const D=e=>{const{lineHeight:n,borderRadius:u,fontWeightStrong:x,baseColor:l,dividerColor:z,actionColor:I,textColor1:h,textColor2:r,closeColor:o,closeColorHover:f,closeColorPressed:g,infoColor:C,successColor:b,warningColor:p,errorColor:v,fontSize:y}=e;return Object.assign(Object.assign({},E),{fontSize:y,lineHeight:n,titleFontWeight:x,borderRadius:u,border:`1px solid ${z}`,color:I,titleTextColor:h,iconColor:r,contentTextColor:r,closeColor:o,closeColorHover:f,closeColorPressed:g,borderInfo:`1px solid ${a(l,c(C,{alpha:.25}))}`,colorInfo:a(l,c(C,{alpha:.08})),titleTextColorInfo:h,iconColorInfo:C,contentTextColorInfo:r,closeColorInfo:o,closeColorHoverInfo:f,closeColorPressedInfo:g,borderSuccess:`1px solid ${a(l,c(b,{alpha:.25}))}`,colorSuccess:a(l,c(b,{alpha:.08})),titleTextColorSuccess:h,iconColorSuccess:b,contentTextColorSuccess:r,closeColorSuccess:o,closeColorHoverSuccess:f,closeColorPressedSuccess:g,borderWarning:`1px solid ${a(l,c(p,{alpha:.33}))}`,colorWarning:a(l,c(p,{alpha:.08})),titleTextColorWarning:h,iconColorWarning:p,contentTextColorWarning:r,closeColorWarning:o,closeColorHoverWarning:f,closeColorPressedWarning:g,borderError:`1px solid ${a(l,c(v,{alpha:.25}))}`,colorError:a(l,c(v,{alpha:.08})),titleTextColorError:h,iconColorError:v,contentTextColorError:r,closeColorError:o,closeColorHoverError:f,closeColorPressedError:g})},G={name:"Alert",common:w,self:D};var J=G,U=m("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
`,[s("icon",{color:"var(--n-icon-color)"}),m("alert-body",{border:"var(--n-border)",padding:"var(--n-padding)"},[s("title",{color:"var(--n-title-text-color)"}),s("content",{color:"var(--n-content-text-color)"})]),W({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),s("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),s("close",`
 transition: color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 font-size: var(--n-close-size);
 `),H("show-icon",[m("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),m("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[s("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[L("& +",[s("content",{marginTop:"9px"})])]),s("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),s("icon",{transition:"color .3s var(--n-bezier)"})]);const X=Object.assign(Object.assign({},T.props),{title:{type:String,default:void 0},showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},closable:{type:Boolean,default:!1},onClose:Function,onAfterLeave:{type:Function,default:void 0},onAfterHide:{type:Function,validator:()=>!0,default:void 0}});var Z=_({name:"Alert",inheritAttrs:!1,props:X,setup(e){const{mergedClsPrefixRef:n}=k(e),u=T("Alert","-alert",U,J,e,n),x=O(()=>{const{common:{cubicBezierEaseInOut:r},self:o}=u.value,{fontSize:f,borderRadius:g,titleFontWeight:C,lineHeight:b,iconSize:p,iconMargin:v,closeSize:y,closeMargin:P,padding:S}=o,{type:i}=e,{left:$,right:A}=j(v);return{"--n-bezier":r,"--n-color":o[d("color",i)],"--n-close-color":o[d("closeColor",i)],"--n-close-color-hover":o[d("closeColorHover",i)],"--n-close-color-pressed":o[d("closeColorPressed",i)],"--n-icon-color":o[d("iconColor",i)],"--n-border":o[d("border",i)],"--n-title-text-color":o[d("titleTextColor",i)],"--n-content-text-color":o[d("contentTextColor",i)],"--n-line-height":b,"--n-border-radius":g,"--n-font-size":f,"--n-title-font-weight":C,"--n-icon-size":p,"--n-icon-margin":v,"--n-close-size":y,"--n-close-margin":P,"--n-padding":S,"--n-icon-margin-left":$,"--n-icon-margin-right":A}}),l=B(!0),z=()=>{const{onAfterLeave:r,onAfterHide:o}=e;r&&r(),o&&o()};return{mergedClsPrefix:n,visible:l,handleCloseClick:()=>{var r;Promise.resolve((r=e.onClose)===null||r===void 0?void 0:r.call(e)).then(o=>{o!==!1&&(l.value=!1)})},handleAfterLeave:()=>{z()},mergedTheme:u,cssVars:x}},render(){return t(Q,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:n}=this,u={class:[`${e}-alert`,this.showIcon&&`${e}-alert--show-icon`],style:this.cssVars,role:"alert"};return this.visible?t("div",Object.assign({},F(this.$attrs,u)),this.closable&&t(N,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.showIcon&&t("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},n.icon?n.icon():t(R,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return t(K,null);case"info":return t(q,null);case"warning":return t(V,null);case"error":return t(M,null);default:return null}}})),t("div",{class:`${e}-alert-body`},this.title||n.header?t("div",{class:`${e}-alert-body__title`},n.header?n.header():this.title):null,n.default&&t("div",{class:`${e}-alert-body__content`},n))):null}})}});export{Z as N};
