import{b9 as Z,c9 as ee,bb as te,p as $,af as a,ar as ae,ag as S,ap as s,aq as ie,d as oe,q as ne,v as W,aL as re,l as C,a3 as le,aI as de,y as z,ak as c,Y as F,ac as l,z as o,an as se,az as ce,aU as V}from"./index.85d3582f.js";const ue=e=>{const{primaryColor:d,opacityDisabled:u,borderRadius:i}=e,h="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},ee),{textColor:"white",loadingColor:d,opacityDisabled:u,railColor:h,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:i,railBorderRadiusMedium:i,railBorderRadiusLarge:i,buttonBorderRadiusSmall:i,buttonBorderRadiusMedium:i,buttonBorderRadiusLarge:i,boxShadowFocus:`0 0 0 2px ${te(d,{alpha:.2})}`})},he={name:"Switch",common:Z,self:ue};var be=he,fe=$("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[a("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),a("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),a("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),$("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[ae({originalTransform:"translateX(-50%) translateY(-50%)"})]),a("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),a("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),a("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),S("&:focus",[a("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),s("round",[a("rail",{borderRadius:"calc(var(--n-rail-height) / 2)"},[a("button",{borderRadius:"calc(var(--n-button-height) / 2)"})])]),ie("disabled",[s("pressed",[a("rail",[a("button",{maxWidth:"var(--n-button-width-pressed)"})])]),a("rail",[S("&:active",[a("button",{maxWidth:"var(--n-button-width-pressed)"})])]),s("active",[s("pressed",[a("rail",[a("button",{left:"calc(100% - var(--n-offset) - var(--n-button-width-pressed))"})])]),a("rail",[S("&:active",[a("button",{left:"calc(100% - var(--n-offset) - var(--n-button-width-pressed))"})])])])]),s("active",[a("rail",[a("button",{left:"calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)"})])]),a("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[a("button",`
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),s("active",[a("rail",{backgroundColor:"var(--n-rail-color-active)"})]),s("disabled",[a("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)]),s("loading",[a("rail",`
 pointer-events: none;
 `)])]);const ge=Object.assign(Object.assign({},W.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,onChange:[Function,Array]});var we=oe({name:"Switch",props:ge,setup(e){const{mergedClsPrefixRef:d}=ne(e),u=W("Switch","-switch",fe,be,e,d),i=re(e),{mergedSizeRef:h,mergedDisabledRef:n}=i,r=C(e.defaultValue),N=le(e,"value"),g=de(N,r),_=z(()=>g.value===e.checkedValue),v=C(!1),x=C(!1),T=z(()=>{const{railStyle:t}=e;if(!!t)return t({focused:x.value,checked:_.value})});function y(t){const{"onUpdate:value":w,onChange:m,onUpdateValue:p}=e,{nTriggerFormInput:k,nTriggerFormChange:R}=i;w&&V(w,t),p&&V(p,t),m&&V(m,t),r.value=t,k(),R()}function U(){const{nTriggerFormFocus:t}=i;t()}function D(){const{nTriggerFormBlur:t}=i;t()}function K(){e.loading||n.value||(g.value!==e.checkedValue?y(e.checkedValue):y(e.uncheckedValue))}function L(){x.value=!0,U()}function P(){x.value=!1,D(),v.value=!1}function j(t){e.loading||t.code==="Space"&&(y(!g.value),v.value=!1)}function I(t){e.loading||t.code==="Space"&&(t.preventDefault(),v.value=!0)}return{handleClick:K,handleBlur:P,handleFocus:L,handleKeyup:j,handleKeydown:I,mergedRailStyle:T,pressed:v,mergedClsPrefix:d,mergedValue:g,checked:_,mergedDisabled:n,cssVars:z(()=>{const{value:t}=h,{self:{opacityDisabled:w,railColor:m,railColorActive:p,buttonBoxShadow:k,buttonColor:R,boxShadowFocus:M,loadingColor:O,textColor:A,[c("buttonHeight",t)]:b,[c("buttonWidth",t)]:H,[c("buttonWidthPressed",t)]:Y,[c("railHeight",t)]:f,[c("railWidth",t)]:B,[c("railBorderRadius",t)]:q,[c("buttonBorderRadius",t)]:E},common:{cubicBezierEaseInOut:X}}=u.value,G=F((l(f)-l(b))/2),J=F(Math.max(l(f),l(b))),Q=l(f)>l(b)?B:F(l(B)+l(b)-l(f));return{"--n-bezier":X,"--n-button-border-radius":E,"--n-button-box-shadow":k,"--n-button-color":R,"--n-button-width":H,"--n-button-width-pressed":Y,"--n-button-height":b,"--n-height":J,"--n-offset":G,"--n-opacity-disabled":w,"--n-rail-border-radius":q,"--n-rail-color":m,"--n-rail-color-active":p,"--n-rail-height":f,"--n-rail-width":B,"--n-width":Q,"--n-box-shadow-focus":M,"--n-loading-color":O,"--n-text-color":A}})}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:u,mergedRailStyle:i,$slots:h}=this,{checked:n,unchecked:r}=h;return o("div",{role:"switch","aria-checked":u,class:[`${e}-switch`,u&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},o("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:i},(n||r)&&o("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),n==null?void 0:n()),o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),r==null?void 0:r())),o("div",{class:`${e}-switch__button`},o(se,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?o(ce,{key:"loading",clsPrefix:e,strokeWidth:20}):null}),n&&o("div",{key:"checked",class:`${e}-switch__checked`},n()),r&&o("div",{key:"unchecked",class:`${e}-switch__unchecked`},r()))))}});export{we as N};
