import{ag as o,p as d,ap as e,aq as T,b3 as L,b4 as N,d as O,q as R,v as a,bS as j,y as q,ak as n,z as V}from"./index.85d3582f.js";var E=o([d("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[o("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: none;
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-color: var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: none;
 `)]),o("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: none;
 `)]),e("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[o("tr",[o("&:last-child",[o("td",`
 border-bottom: none;
 `)])])]),e("single-line",[o("th",`
 border-right: none;
 `),o("td",`
 border-right: none;
 `)]),e("single-column",[o("tr",[o("&:not(:last-child)",[o("td",`
 border-bottom: none;
 `)])])]),e("striped",[o("tr:nth-of-type(even)",[o("td","background-color: var(--n-td-color-striped)")])]),T("bottom-bordered",[o("tr",[o("&:last-child",[o("td",`
 border-bottom: none;
 `)])])])]),L(d("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[o("th",`
 background-color: var(--n-th-color-modal);
 `),o("td",`
 background-color: var(--n-td-color-modal);
 `)])),N(d("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[o("th",`
 background-color: var(--n-th-color-popover);
 `),o("td",`
 background-color: var(--n-td-color-popover);
 `)]))]);const F=Object.assign(Object.assign({},a.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}});var I=O({name:"Table",props:F,setup(r){const{mergedClsPrefixRef:l}=R(r),i=a("Table","-table",E,j,r,l);return{mergedClsPrefix:l,cssVars:q(()=>{const{size:t}=r,{self:{borderColor:s,tdColor:b,tdColorModal:c,tdColorPopover:g,thColor:h,thColorModal:p,thColorPopover:v,thTextColor:m,tdTextColor:u,borderRadius:f,thFontWeight:C,lineHeight:z,borderColorModal:x,borderColorPopover:k,tdColorStriped:P,tdColorStripedModal:y,tdColorStripedPopover:B,[n("fontSize",t)]:w,[n("tdPadding",t)]:M,[n("thPadding",t)]:S},common:{cubicBezierEaseInOut:$}}=i.value;return{"--n-bezier":$,"--n-td-color":b,"--n-td-color-modal":c,"--n-td-color-popover":g,"--n-td-text-color":u,"--n-border-color":s,"--n-border-color-modal":x,"--n-border-color-popover":k,"--n-border-radius":f,"--n-font-size":w,"--n-th-color":h,"--n-th-color-modal":p,"--n-th-color-popover":v,"--n-th-font-weight":C,"--n-th-text-color":m,"--n-line-height":z,"--n-td-padding":M,"--n-th-padding":S,"--n-td-color-striped":P,"--n-td-color-striped-modal":y,"--n-td-color-striped-popover":B}})}},render(){const{mergedClsPrefix:r}=this;return V("table",{class:[`${r}-table`,{[`${r}-table--bottom-bordered`]:this.bottomBordered,[`${r}-table--bordered`]:this.bordered,[`${r}-table--single-line`]:this.singleLine,[`${r}-table--single-column`]:this.singleColumn,[`${r}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}});export{I as N};
