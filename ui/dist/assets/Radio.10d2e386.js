import{p as s,af as e,ag as r,ap as i,aq as $,d as D,v as n,bj as _,y as j,ak as l,z as d}from"./index.85d3582f.js";import{s as c}from"./RadioGroup.5ac456f1.js";var B=s("radio",`
 line-height: 1;
 outline: none;
 position: relative;
 user-select: none;
 display: inline-flex;
 vertical-align: middle;
 align-items: center;
 font-size: var(--n-font-size);
`,[e("dot",`
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 `),s("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),e("dot",`
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 position: relative;
 border-radius: 50%;
 `,[r("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),i("checked",{boxShadow:"var(--n-box-shadow-active)"},[r("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),e("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 display: inline-block;
 white-space: nowrap;
 transition: color .3s var(--n-bezier);
 `),$("disabled",`
 cursor: pointer;
 `,[r("&:hover",[e("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),i("focus",[r("&:not(:active)",[e("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),i("disabled",`
 cursor: not-allowed;
 `,[e("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[r("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),i("checked",`
 transform: scale(1);
 opacity: 1;
 `)]),e("label",{color:"var(--n-text-color-disabled)"}),s("radio-input",`
 cursor: not-allowed;
 `)])]),O=D({name:"Radio",props:Object.assign(Object.assign({},n.props),c.props),setup(a){const o=c(a),b=n("Radio","-radio",B,_,a,o.mergedClsPrefix);return Object.assign(o,{cssVars:j(()=>{const{mergedSize:{value:t}}=o,{common:{cubicBezierEaseInOut:h},self:{boxShadow:u,boxShadowActive:p,boxShadowDisabled:v,boxShadowFocus:f,boxShadowHover:x,color:g,colorDisabled:w,textColor:m,textColorDisabled:z,dotColorActive:S,dotColorDisabled:k,labelPadding:C,[l("fontSize",t)]:y,[l("radioSize",t)]:R}}=b.value;return{"--n-bezier":h,"--n-box-shadow":u,"--n-box-shadow-active":p,"--n-box-shadow-disabled":v,"--n-box-shadow-focus":f,"--n-box-shadow-hover":x,"--n-color":g,"--n-color-disabled":w,"--n-dot-color-active":S,"--n-dot-color-disabled":k,"--n-font-size":y,"--n-radio-size":R,"--n-text-color":m,"--n-text-color-disabled":z,"--n-label-padding":C}})})},render(){const{$slots:a,mergedClsPrefix:o}=this;return d("label",{class:[`${o}-radio`,{[`${o}-radio--disabled`]:this.mergedDisabled,[`${o}-radio--checked`]:this.renderSafeChecked,[`${o}-radio--focus`]:this.focus}],style:this.cssVars},d("input",{ref:"inputRef",type:"radio",class:`${o}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),d("div",{class:[`${o}-radio__dot`,this.renderSafeChecked&&`${o}-radio__dot--checked`]}),a.default?d("div",{ref:"labelRef",class:`${o}-radio__label`},a.default()):null)}});export{O as N};
