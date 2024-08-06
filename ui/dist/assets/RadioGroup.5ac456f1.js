import{q as _,W as L,aL as T,l as C,X as W,a3 as I,aI as P,a1 as F,bi as X,aU as z,p as S,af as g,ap as k,ag as w,aq as V,d as J,v as A,bj as Q,a2 as Y,y as Z,ak as U,a6 as ee,a7 as oe,z as D}from"./index.85d3582f.js";const te={name:String,value:{type:[String,Number],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,validator:()=>(X("radio","`checked-value` is deprecated, please use `checked` instead."),!0),default:void 0}},G=L("n-radio-group");function re(e){const a=T(e,{mergedSize(o){const{size:u}=e;if(u!==void 0)return u;if(t){const{mergedSizeRef:{value:R}}=t;if(R!==void 0)return R}return o?o.mergedSize.value:"medium"},mergedDisabled(o){return!!(e.disabled||t!=null&&t.disabledRef.value||o!=null&&o.disabled.value)}}),{mergedSizeRef:i,mergedDisabledRef:l}=a,d=C(null),b=C(null),t=W(G,null),s=C(e.defaultChecked),f=I(e,"checked"),v=P(f,s),h=F(()=>t?t.valueRef.value===e.value:v.value),p=F(()=>{const{name:o}=e;if(o!==void 0)return o;if(t)return t.nameRef.value}),c=C(!1);function m(){if(t){const{doUpdateValue:o}=t,{value:u}=e;z(o,u)}else{const{onUpdateChecked:o,"onUpdate:checked":u}=e,{nTriggerFormInput:R,nTriggerFormChange:B}=a;o&&z(o,!0),u&&z(u,!0),R(),B(),s.value=!0}}function x(){l.value||h.value||m()}function y(){x()}function r(){c.value=!1}function n(){c.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:_(e).mergedClsPrefixRef,inputRef:d,labelRef:b,mergedName:p,mergedDisabled:l,uncontrolledChecked:s,renderSafeChecked:h,focus:c,mergedSize:i,handleRadioInputChange:y,handleRadioInputBlur:r,handleRadioInputFocus:n}}re.props=te;var ne=S("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[g("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[k("checked",{backgroundColor:"var(--n-button-border-color-active)"}),k("disabled",{opacity:"var(--n-opacity-disabled)"})]),k("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[S("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),g("splitor",{height:"var(--n-height)"})]),S("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[S("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),g("state-border",`
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),w("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[g("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),w("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[g("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),V("disabled",`
 cursor: pointer;
 `,[w("&:hover",[g("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),V("checked",{color:"var(--n-button-text-color-hover)"})]),k("focus",[w("&:not(:active)",[g("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),k("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),k("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function ae(e,a,i){var l;const d=[];let b=!1;for(let t=0;t<e.length;++t){const s=e[t],f=(l=s.type)===null||l===void 0?void 0:l.name;f==="RadioButton"&&(b=!0);const v=s.props;if(f!=="RadioButton"){d.push(s);continue}if(t===0)d.push(s);else{const h=d[d.length-1].props,p=a===h.value,c=h.disabled,m=a===v.value,x=v.disabled,y=(p?2:0)+(c?0:1),r=(m?2:0)+(x?0:1),n={[`${i}-radio-group__splitor--disabled`]:c,[`${i}-radio-group__splitor--checked`]:p},o={[`${i}-radio-group__splitor--disabled`]:x,[`${i}-radio-group__splitor--checked`]:m},u=y<r?o:n;d.push(D("div",{class:[`${i}-radio-group__splitor`,u]}),s)}}return{children:d,isButtonGroup:b}}const ie=Object.assign(Object.assign({},A.props),{name:String,value:[String,Number],defaultValue:{type:[String,Number],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var se=J({name:"RadioGroup",props:ie,setup(e){const a=C(null),{mergedSizeRef:i,mergedDisabledRef:l,nTriggerFormChange:d,nTriggerFormInput:b,nTriggerFormBlur:t,nTriggerFormFocus:s}=T(e),{mergedClsPrefixRef:f}=_(e),v=A("Radio","-radio-group",ne,Q,e,f),h=C(e.defaultValue),p=I(e,"value"),c=P(p,h);function m(r){const{onUpdateValue:n,"onUpdate:value":o}=e;n&&z(n,r),o&&z(o,r),h.value=r,d(),b()}function x(r){const{value:n}=a;!n||n.contains(r.relatedTarget)||s()}function y(r){const{value:n}=a;!n||n.contains(r.relatedTarget)||t()}return Y(G,{mergedClsPrefixRef:f,nameRef:I(e,"name"),valueRef:c,disabledRef:l,mergedSizeRef:i,doUpdateValue:m}),{selfElRef:a,mergedClsPrefix:f,mergedValue:c,handleFocusout:y,handleFocusin:x,cssVars:Z(()=>{const{value:r}=i,{common:{cubicBezierEaseInOut:n},self:{buttonBorderColor:o,buttonBorderColorActive:u,buttonBorderRadius:R,buttonBoxShadow:B,buttonBoxShadowFocus:$,buttonBoxShadowHover:j,buttonColorActive:E,buttonTextColor:N,buttonTextColorActive:H,buttonTextColorHover:M,opacityDisabled:K,[U("buttonHeight",r)]:O,[U("fontSize",r)]:q}}=v.value;return{"--n-font-size":q,"--n-bezier":n,"--n-button-border-color":o,"--n-button-border-color-active":u,"--n-button-border-radius":R,"--n-button-box-shadow":B,"--n-button-box-shadow-focus":$,"--n-button-box-shadow-hover":j,"--n-button-color-active":E,"--n-button-text-color":N,"--n-button-text-color-hover":M,"--n-button-text-color-active":H,"--n-height":O,"--n-opacity-disabled":K}})}},render(){const{mergedValue:e,mergedClsPrefix:a,handleFocusin:i,handleFocusout:l}=this,{children:d,isButtonGroup:b}=ae(ee(oe(this)),e,a);return D("div",{onFocusin:i,onFocusout:l,ref:"selfElRef",class:[`${a}-radio-group`,b&&`${a}-radio-group--button-group`],style:this.cssVars},d)}});export{se as N,re as s};
