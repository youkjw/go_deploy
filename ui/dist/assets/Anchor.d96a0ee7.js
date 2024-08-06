import{p as i,d as c,q as u,v as l,x as p,y as f,z as d,o as m,a as h,w as a,b as x,r as C,e as n,R as g}from"./index.85d3582f.js";var v=i("a",`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`);const y=Object.assign({},l.props);var b=c({name:"A",props:y,setup(e){const{mergedClsPrefixRef:r}=u(e),t=l("Typography","-a",v,p,e,r);return{mergedClsPrefix:r,cssVars:f(()=>{const{common:{cubicBezierEaseInOut:s},self:{aTextColor:o}}=t.value;return{"--n-text-color":o,"--n-bezier":s}})}},render(){return d("a",{class:`${this.mergedClsPrefix}-a`,style:this.cssVars},this.$slots)}});const k=c({props:{url:null},setup(e){return(r,t)=>(m(),h(n(g),{to:e.url,custom:""},{default:a(({navigate:s,href:o})=>[x(n(b),{href:o,onClick:s},{default:a(()=>[C(r.$slots,"default")]),_:2},1032,["href","onClick"])]),_:3},8,["to"]))}});export{k as _};
