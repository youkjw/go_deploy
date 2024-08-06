import{W as E,d as B,X as O,Y as _,z as C,Z as V,$ as M,q as Q,l as $,a0 as T,a1 as w,y as N,a2 as X,a3 as z,a4 as D,a5 as Y,a6 as q,a7 as F,a8 as W,a9 as Z}from"./index.85d3582f.js";function H(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(i=>{if(i==="")return;const[s,r]=i.split(":");r===void 0?t[""]=s:t[s]=r}),t}function S(e,t){var i;if(e==null)return;const s=H(e);if(t===void 0)return s[""];if(typeof t=="string")return(i=s[t])!==null&&i!==void 0?i:s[""];if(Array.isArray(t)){for(let r=t.length-1;r>=0;--r){const a=t[r];if(a in s)return s[a]}return s[""]}else{let r,a=-1;return Object.keys(s).forEach(l=>{const o=Number(l);!Number.isNaN(o)&&t>=o&&o>=a&&(a=o,r=s[l])}),r}}const I=1,k=E("n-grid"),P=1,j={span:{type:[Number,String],default:P},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},K=V(j);var ee=B({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:j,setup(){const{xGapRef:e,itemStyleRef:t,overflowRef:i}=O(k),s=M();return{overflow:i,itemStyle:t,deriveStyle:()=>{const{privateSpan:r=P,privateShow:a=!0,privateColStart:l=void 0,privateOffset:o=0}=s.vnode.props,{value:u}=e,c=_(u||0);return{display:a?"":"none",gridColumn:`${l!=null?l:`span ${r}`} / span ${r}`,marginLeft:o?`calc((100% - (${r} - 1) * ${c}) / ${r} * ${o} + ${c} * ${o})`:""}}}},render(){var e,t;return C("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}});const J={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},A=24,L={responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:A},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}};var te=B({name:"Grid",inheritAttrs:!1,props:L,setup(e){const{mergedClsPrefixRef:t,NConfigProvider:i}=Q(e),s=/^\d+$/,r=$(void 0),a=T((i==null?void 0:i.mergedBreakpointsRef.value)||J),l=w(()=>!!(e.itemResponsive||!s.test(e.cols.toString())||!s.test(e.xGap.toString())||!s.test(e.yGap.toString()))),o=N(()=>{if(!!l.value)return e.responsive==="self"?r.value:a.value}),u=w(()=>{var f;return(f=Number(S(e.cols.toString(),o.value)))!==null&&f!==void 0?f:A}),c=w(()=>S(e.xGap.toString(),o.value)),x=w(()=>S(e.yGap.toString(),o.value)),v=f=>{r.value=f.contentRect.width},y=f=>{Y(v,f)},m=$(!1),p=N(()=>{if(e.responsive==="self")return y});return X(k,{itemStyleRef:z(e,"itemStyle"),xGapRef:c,overflowRef:m}),{mergedClsPrefix:t,style:N(()=>({width:"100%",display:"grid",gridTemplateColumns:`repeat(${u.value}, minmax(0, 1fr))`,columnGap:_(c.value),rowGap:_(x.value)})),isResponsive:l,responsiveQuery:o,responsiveCols:u,handleResize:p,overflow:m}},render(){const e=()=>{var t,i,s,r,a,l;this.overflow=!1;const o=q(F(this)),u=[],{collapsed:c,collapsedRows:x,responsiveCols:v,responsiveQuery:y}=this;o.forEach(n=>{var g,h,d;if(((g=n==null?void 0:n.type)===null||g===void 0?void 0:g.__GRID_ITEM__)!==!0)return;const R=W(n),G=Number((d=S((h=R.props)===null||h===void 0?void 0:h.span,y))!==null&&d!==void 0?d:I);G!==0&&u.push({child:R,rawChildSpan:G})});let m=0;const p=(t=u[u.length-1])===null||t===void 0?void 0:t.child;if(p!=null&&p.props){const n=(i=p.props)===null||i===void 0?void 0:i.suffix;n!==void 0&&n!==!1&&(m=(r=(s=p.props)===null||s===void 0?void 0:s.span)!==null&&r!==void 0?r:I,p.props.privateSpan=m,p.props.privateColStart=v+1-m,p.props.privateShow=!0)}let f=0,b=!1;for(const{child:n,rawChildSpan:g}of u){if(b&&(this.overflow=!0),!b){const h=Number((l=S((a=n.props)===null||a===void 0?void 0:a.offset,y))!==null&&l!==void 0?l:0),d=Math.min(g+h,v)||1;if(n.props?(n.props.privateSpan=d,n.props.privateOffset=h):n.props={privateSpan:d,privateOffset:h},c){const R=f%v;d+R>v&&(f+=v-R),d+f+m>x*v?b=!0:f+=d}}b&&(n.props?n.props.privateShow!==!0&&(n.props.privateShow=!1):n.props={privateShow:!1})}return C("div",Z({class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),u.map(({child:n})=>n))};return this.isResponsive&&this.responsive==="self"?C(D,{onResize:this.handleResize},{default:e}):e()}});export{ee as N,te as a,j as b,K as g};
