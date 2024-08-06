import{p as f,af as v,d as m,q as z,v as a,bD as x,y,ak as t,z as i}from"./index.85d3582f.js";var B=f("input-group-label",`
 position: relative;
 user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[v("border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]);const C=Object.assign(Object.assign({},a.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:void 0}});var k=m({name:"InputGroupLabel",props:C,setup(e){const{mergedBorderedRef:r,mergedClsPrefixRef:o}=z(e),s=a("Input","-input-group-label",B,x,e,o);return{mergedClsPrefix:o,mergedBordered:r,cssVars:y(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:l},self:{groupLabelColor:d,borderRadius:u,groupLabelTextColor:b,lineHeight:p,groupLabelBorder:g,[t("fontSize",n)]:c,[t("height",n)]:h}}=s.value;return{"--n-bezier":l,"--n-group-label-color":d,"--n-group-label-border":g,"--n-border-radius":u,"--n-group-label-text-color":b,"--n-font-size":c,"--n-line-height":p,"--n-height":h}})}},render(){var e,r;const{mergedClsPrefix:o}=this;return i("div",{class:`${o}-input-group-label`,style:this.cssVars},(r=(e=this.$slots).default)===null||r===void 0?void 0:r.call(e),this.mergedBordered?i("div",{class:`${o}-input-group-label__border`}):null)}});export{k as N};
