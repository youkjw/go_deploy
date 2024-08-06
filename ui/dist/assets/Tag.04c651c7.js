import{b9 as A,ba as G,bb as e,p as J,af as v,ap as k,aq as f,ag as m,d as Q,l as X,q as Y,v as j,a2 as Z,a3 as ee,bc as oe,y as re,ak as s,z as u,bd as le,W as ae,aU as ce}from"./index.85d3582f.js";const se=o=>{const{textColor2:h,primaryColorHover:b,primaryColorPressed:c,primaryColor:a,infoColor:t,successColor:n,warningColor:i,errorColor:d,baseColor:x,borderColor:l,opacityDisabled:r,tagColor:C,closeColor:g,closeColorHover:p,closeColorPressed:y,borderRadiusSmall:P,fontSizeTiny:z,fontSizeSmall:S,fontSizeMedium:$,heightTiny:H,heightSmall:M,heightMedium:R}=o;return Object.assign(Object.assign({},G),{heightSmall:H,heightMedium:M,heightLarge:R,borderRadius:P,opacityDisabled:r,fontSizeSmall:z,fontSizeMedium:S,fontSizeLarge:$,textColorCheckable:h,textColorHoverCheckable:b,textColorPressedCheckable:c,textColorChecked:x,colorCheckable:"#0000",colorHoverCheckable:"#0000",colorPressedCheckable:"#0000",colorChecked:a,colorCheckedHover:b,colorCheckedPressed:c,border:`1px solid ${l}`,textColor:h,color:C,closeColor:g,closeColorHover:p,closeColorPressed:y,borderPrimary:`1px solid ${e(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:e(a,{alpha:.1}),closeColorPrimary:e(a,{alpha:.75}),closeColorHoverPrimary:e(a,{alpha:.6}),closeColorPressedPrimary:e(a,{alpha:.9}),borderInfo:`1px solid ${e(t,{alpha:.3})}`,textColorInfo:t,colorInfo:e(t,{alpha:.1}),closeColorInfo:e(t,{alpha:.75}),closeColorHoverInfo:e(t,{alpha:.6}),closeColorPressedInfo:e(t,{alpha:.9}),borderSuccess:`1px solid ${e(n,{alpha:.3})}`,textColorSuccess:n,colorSuccess:e(n,{alpha:.1}),closeColorSuccess:e(n,{alpha:.75}),closeColorHoverSuccess:e(n,{alpha:.6}),closeColorPressedSuccess:e(n,{alpha:.9}),borderWarning:`1px solid ${e(i,{alpha:.35})}`,textColorWarning:i,colorWarning:e(i,{alpha:.12}),closeColorWarning:e(i,{alpha:.75}),closeColorHoverWarning:e(i,{alpha:.6}),closeColorPressedWarning:e(i,{alpha:.9}),borderError:`1px solid ${e(d,{alpha:.23})}`,textColorError:d,colorError:e(d,{alpha:.08}),closeColorError:e(d,{alpha:.65}),closeColorHoverError:e(d,{alpha:.5}),closeColorPressedError:e(d,{alpha:.8})})},te={name:"Tag",common:A,self:se};var ne=te,ie={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},de=J("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[v("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),v("avatar",`
 display: flex;
 margin-right: 6px;
 `),v("close",`
 font-size: var(--n-close-size);
 margin: var(--n-close-margin);
 transition: color .3s var(--n-bezier);
 cursor: pointer;
 `),k("round",`
 padding: 0 calc(var(--n-height) / 2);
 border-radius: calc(var(--n-height) / 2);
 `,[v("avatar",`
 margin-left: calc((var(--n-height) - 8px) / -2);
 `)]),k("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),k("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[f("disabled",[m("&:hover","background-color: var(--n-color-hover-checkable);",[f("checked","color: var(--n-text-color-hover-checkable);")]),m("&:active","background-color: var(--n-color-pressed-checkable);",[f("checked","color: var(--n-text-color-pressed-checkable);")])]),k("checked",`
 color: var(--n-text-color-checked);
 background-color: 'var(--n-color-checked);
 `,[f("disabled",[m("&:hover","background-color: var(--n-color-checked-hover);"),m("&:active","background-color: var(--n-color-checked-pressed);")])])])]);const he=Object.assign(Object.assign(Object.assign({},j.props),ie),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),be=ae("n-tag");var ge=Q({name:"Tag",props:he,setup(o){const h=X(null),{mergedBorderedRef:b,mergedClsPrefixRef:c,NConfigProvider:a}=Y(o),t=j("Tag","-tag",de,ne,o,c);Z(be,{roundRef:ee(o,"round")});function n(l){if(!o.disabled&&o.checkable){const{checked:r,onCheckedChange:C,onUpdateChecked:g,"onUpdate:checked":p}=o;g&&g(!r),p&&p(!r),C&&C(!r)}}function i(l){if(o.internalStopClickPropagation&&l.stopPropagation(),!o.disabled){const{onClose:r}=o;r&&ce(r,l)}}const d={setTextContent(l){const{value:r}=h;r&&(r.textContent=l)}},x=oe("Tag",a==null?void 0:a.mergedRtlRef,c);return Object.assign(Object.assign({},d),{rtlEnabled:x,mergedClsPrefix:c,contentRef:h,mergedBordered:b,handleClick:n,handleCloseClick:i,cssVars:re(()=>{const{type:l,size:r,color:{color:C,textColor:g}={}}=o,{common:{cubicBezierEaseInOut:p},self:{padding:y,closeMargin:P,closeMarginRtl:z,borderRadius:S,opacityDisabled:$,textColorCheckable:H,textColorHoverCheckable:M,textColorPressedCheckable:R,textColorChecked:T,colorCheckable:I,colorHoverCheckable:O,colorPressedCheckable:_,colorChecked:w,colorCheckedHover:W,colorCheckedPressed:F,[s("closeSize",r)]:U,[s("fontSize",r)]:L,[s("height",r)]:B,[s("color",l)]:N,[s("textColor",l)]:K,[s("border",l)]:V,[s("closeColor",l)]:E,[s("closeColorHover",l)]:q,[s("closeColorPressed",l)]:D}}=t.value;return{"--n-avatar-size-override":`calc(${B} - 8px)`,"--n-bezier":p,"--n-border-radius":S,"--n-border":V,"--n-close-color":E,"--n-close-color-hover":q,"--n-close-color-pressed":D,"--n-close-color-disabled":E,"--n-close-margin":P,"--n-close-margin-rtl":z,"--n-close-size":U,"--n-color":C||N,"--n-color-checkable":I,"--n-color-checked":w,"--n-color-checked-hover":W,"--n-color-checked-pressed":F,"--n-color-hover-checkable":O,"--n-color-pressed-checkable":_,"--n-font-size":L,"--n-height":B,"--n-opacity-disabled":$,"--n-padding":y,"--n-text-color":g||K,"--n-text-color-checkable":H,"--n-text-color-checked":T,"--n-text-color-hover-checkable":M,"--n-text-color-pressed-checkable":R}})})},render(){const{mergedClsPrefix:o,rtlEnabled:h,color:{borderColor:b}={},$slots:c}=this;return u("div",{class:[`${o}-tag`,{[`${o}-tag--rtl`]:h,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:this.round}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},c.avatar&&u("div",{class:`${o}-tag__avatar`},{default:c.avatar}),u("span",{class:`${o}-tag__content`,ref:"contentRef"},this.$slots),!this.checkable&&this.closable?u(le,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick}):null,!this.checkable&&this.mergedBordered?u("div",{class:`${o}-tag__border`,style:{borderColor:b}}):null)}});export{ge as N};
