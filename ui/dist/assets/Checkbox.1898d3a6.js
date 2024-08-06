import{z as i,d as $,q as V,aL as F,l as B,y as M,aI as N,a2 as ae,a3 as T,W as ne,aU as d,ag as u,p as a,af as m,ap as D,be as ce,b3 as de,b4 as le,X as ie,a1 as te,v as P,bf as se,b6 as be,ak as U,bg as ue,bh as he}from"./index.85d3582f.js";var fe=i("svg",{viewBox:"0 0 64 64",class:"check-icon"},i("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),ke=i("svg",{viewBox:"0 0 100 100",class:"line-icon"},i("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"}));const K=ne("n-checkbox-group"),ve={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:{type:[Function,Array],validator:()=>!0,default:void 0}};var pe=$({name:"CheckboxGroup",props:ve,setup(o){const{mergedClsPrefixRef:g}=V(o),p=F(o),{mergedSizeRef:C,mergedDisabledRef:z}=p,f=B(o.defaultValue),c=M(()=>o.value),t=N(c,f),l=M(()=>{var s;return((s=t.value)===null||s===void 0?void 0:s.length)||0}),I=M(()=>Array.isArray(t.value)?new Set(t.value):new Set);function k(s,b){const{nTriggerFormInput:y,nTriggerFormChange:S}=p,{onChange:h,"onUpdate:value":v,onUpdateValue:e}=o;if(Array.isArray(t.value)){const r=Array.from(t.value),n=r.findIndex(x=>x===b);s?~n||(r.push(b),e&&d(e,r),v&&d(v,r),y(),S(),f.value=r,h&&d(h,r)):~n&&(r.splice(n,1),e&&d(e,r),v&&d(v,r),h&&d(h,r),f.value=r,y(),S())}else s?(e&&d(e,[b]),v&&d(v,[b]),h&&d(h,[b]),f.value=[b],y(),S()):(e&&d(e,[]),v&&d(v,[]),h&&d(h,[]),f.value=[],y(),S())}return ae(K,{checkedCountRef:l,maxRef:T(o,"max"),minRef:T(o,"min"),valueSetRef:I,disabledRef:z,mergedSizeRef:C,toggleCheckbox:k}),{mergedClsPrefix:g}},render(){return i("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),xe=u([a("checkbox",`
 line-height: 1;
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 align-items: center;
 white-space: nowrap;
 vertical-align: middle;
 --n-merged-color-table-header: var(--n-color-table-header);
 `,[u("&:hover",[a("checkbox-box",[m("border",{border:"var(--n-border-checked)"})])]),u("&:focus:not(:active)",[a("checkbox-box",[m("border",{border:"var(--n-border-focus)",boxShadow:"var(--n-box-shadow-focus)"})])]),D("table-header",[a("checkbox-box",{backgroundColor:"var(--n-merged-color-table-header)"})]),D("checked",[a("checkbox-box",{backgroundColor:"var(--n-color-checked)"},[a("checkbox-icon",[u(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),D("indeterminate",[a("checkbox-box",[a("checkbox-icon",[u(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),u(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),D("checked, indeterminate",[u("&:focus:not(:active)",[a("checkbox-box",[m("border",{border:"var(--n-border-checked)",boxShadow:"var(--n-box-shadow-focus)"})])]),a("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[m("border",{border:"var(--n-border-checked)"})])]),D("disabled",{cursor:"not-allowed"},[D("checked",[a("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[m("border",{border:"var(--n-border-disabled-checked)"}),a("checkbox-icon",[u(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),a("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[m("border",{border:"var(--n-border-disabled)"}),a("checkbox-icon",[u(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),m("label",{color:"var(--n-text-color-disabled)"})]),a("checkbox-box",`
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 position: relative;
 transition:
 background-color 0.3s var(--n-bezier);
 `,[m("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),a("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[u(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ce({left:"1px",top:"1px"})])]),m("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 padding: var(--n-label-padding);
 `,[u("&:empty",{display:"none"})])]),de(a("checkbox",`
 --n-merged-color-table-header: var(--n-color-table-header-modal);
 `)),le(a("checkbox",`
 --n-merged-color-table-header: var(--n-color-table-header-popover);
 `))]);const me=Object.assign(Object.assign({},P.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]});var Ce=$({name:"Checkbox",props:me,setup(o){const g=B(null),{mergedClsPrefixRef:p}=V(o),C=F(o,{mergedSize(e){const{size:r}=o;if(r!==void 0)return r;if(c){const{value:n}=c.mergedSizeRef;if(n!==void 0)return n}if(e){const{mergedSize:n}=e;if(n!==void 0)return n.value}return"medium"},mergedDisabled(e){const{disabled:r}=o;if(r!==void 0)return r;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:n},checkedCountRef:x}=c;if(n!==void 0&&x.value>=n&&!k.value)return!0;const{minRef:{value:R}}=c;if(R!==void 0&&x.value<=R&&k.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:z,mergedSizeRef:f}=C,c=ie(K,null),t=B(o.defaultChecked),l=T(o,"checked"),I=N(l,t),k=te(()=>{if(c){const e=c.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return I.value===o.checkedValue}),s=P("Checkbox","-checkbox",xe,se,o,p);function b(e){if(c&&o.value!==void 0)c.toggleCheckbox(!k.value,o.value);else{const{onChange:r,"onUpdate:checked":n,onUpdateChecked:x}=o,{nTriggerFormInput:R,nTriggerFormChange:A}=C,w=k.value?o.uncheckedValue:o.checkedValue;n&&d(n,w,e),x&&d(x,w,e),r&&d(r,w,e),R(),A(),t.value=w}}function y(e){z.value||b(e)}function S(e){if(!z.value)switch(e.code){case"Space":case"Enter":case"NumpadEnter":b(e)}}function h(e){switch(e.code){case"Space":e.preventDefault()}}return Object.assign(C,{focus:()=>{var e;(e=g.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=g.value)===null||e===void 0||e.blur()}},{selfRef:g,mergedClsPrefix:p,mergedDisabled:z,renderedChecked:k,mergedTheme:s,labelId:be(),handleClick:y,handleKeyUp:S,handleKeyDown:h,cssVars:M(()=>{const{value:e}=f,{common:{cubicBezierEaseInOut:r},self:{borderRadius:n,color:x,colorChecked:R,colorDisabled:A,colorTableHeader:w,colorTableHeaderModal:_,colorTableHeaderPopover:j,checkMarkColor:G,checkMarkColorDisabled:E,border:H,borderFocus:L,borderDisabled:O,borderChecked:q,boxShadowFocus:W,textColor:X,textColorDisabled:J,checkMarkColorDisabledChecked:Q,colorDisabledChecked:Y,borderDisabledChecked:Z,labelPadding:ee,[U("fontSize",e)]:oe,[U("size",e)]:re}}=s.value;return{"--n-size":re,"--n-bezier":r,"--n-border-radius":n,"--n-border":H,"--n-border-checked":q,"--n-border-focus":L,"--n-border-disabled":O,"--n-border-disabled-checked":Z,"--n-box-shadow-focus":W,"--n-color":x,"--n-color-checked":R,"--n-color-table-header":w,"--n-color-table-header-modal":_,"--n-color-table-header-popover":j,"--n-color-disabled":A,"--n-color-disabled-checked":Y,"--n-text-color":X,"--n-text-color-disabled":J,"--n-check-mark-color":G,"--n-check-mark-color-disabled":E,"--n-check-mark-color-disabled-checked":Q,"--n-font-size":oe,"--n-label-padding":ee}})})},render(){const{$slots:o,renderedChecked:g,mergedDisabled:p,indeterminate:C,privateInsideTable:z,cssVars:f,labelId:c,label:t,mergedClsPrefix:l,focusable:I,handleKeyUp:k,handleKeyDown:s,handleClick:b}=this;return i("div",{ref:"selfRef",class:[`${l}-checkbox`,g&&`${l}-checkbox--checked`,p&&`${l}-checkbox--disabled`,C&&`${l}-checkbox--indeterminate`,z&&`${l}-checkbox--table-header`],tabindex:p||!I?void 0:0,role:"checkbox","aria-checked":C?"mixed":g,"aria-labelledby":c,style:f,onKeyup:k,onKeydown:s,onClick:b,onMousedown:()=>{he("selectstart",window,y=>{y.preventDefault()},{once:!0})}},i("div",{class:`${l}-checkbox-box`},i(ue,null,{default:()=>this.indeterminate?i("div",{key:"indeterminate",class:`${l}-checkbox-icon`},ke):i("div",{key:"check",class:`${l}-checkbox-icon`},fe)}),i("div",{class:`${l}-checkbox-box__border`})),t!==null||o.default?i("span",{class:`${l}-checkbox__label`,id:c},o.default?o.default():t):null)}});export{pe as N,Ce as a};
