import{d as N,k as X,bW as g,l as C,m as $,o as f,c as H,b as a,w as t,e,C as p,N as M,i as n,t as i,h,a as _,g as b,f as w,Q as V}from"./index.85d3582f.js";import{X as z}from"./PageHeader.556c52c2.js";import{X as A}from"./Code.85cde3b3.js";import{X as D}from"./Panel.5fe42ab1.js";import{_ as v}from"./Anchor.d96a0ee7.js";import{X as I,_ as m}from"./DescriptionItem.136d9c3a.js";import{s as x}from"./stack.df55745b.js";import{B as P}from"./ArrowBackCircleOutline.f4323d84.js";import{N as y}from"./Time.b1d0572f.js";import"./index.9d2bf9c2.js";import"./CopyOutline.e34332fe.js";import"./hr.a93a0821.js";import"./Grid.4637279d.js";const S={class:"page-body"},Y=N({setup(T){const{t:s}=X(),B=g(),l=C({});async function k(){const c=B.params.name;let o=await x.find(c);l.value=o.data}return $(k),(c,o)=>(f(),H(V,null,[a(z,{subtitle:l.value.name||l.value.id},{action:t(()=>[a(e(p),{secondary:"",size:"small",onClick:o[0]||(o[0]=d=>c.$router.push({name:"stack_list"}))},{icon:t(()=>[a(e(M),null,{default:t(()=>[a(e(P))]),_:1})]),default:t(()=>[n(" "+i(e(s)("buttons.return")),1)]),_:1}),a(e(p),{secondary:"",size:"small",onClick:o[1]||(o[1]=d=>c.$router.push({name:"stack_edit",params:{name:l.value.name}}))},{default:t(()=>[n(i(e(s)("buttons.edit")),1)]),_:1})]),_:1},8,["subtitle"]),h("div",S,[a(e(w),{vertical:"",size:16},{default:t(()=>[a(e(I),{"label-width":90},{default:t(()=>[a(e(m),{label:e(s)("fields.name"),span:2},{default:t(()=>[n(i(l.value.name),1)]),_:1},8,["label"]),a(e(m),{label:e(s)("fields.created_by")},{default:t(()=>{var d,r;return[(d=l.value.createdBy)!=null&&d.id?(f(),_(v,{key:0,url:{name:"user_detail",params:{id:(r=l.value.createdBy)==null?void 0:r.id}}},{default:t(()=>{var u;return[n(i((u=l.value.createdBy)==null?void 0:u.name),1)]}),_:1},8,["url"])):b("",!0)]}),_:1},8,["label"]),a(e(m),{label:e(s)("fields.created_at")},{default:t(()=>[a(e(y),{time:l.value.createdAt,format:"y-MM-dd HH:mm:ss"},null,8,["time"])]),_:1},8,["label"]),a(e(m),{label:e(s)("fields.updated_by")},{default:t(()=>{var d,r;return[(d=l.value.updatedBy)!=null&&d.id?(f(),_(v,{key:0,url:{name:"user_detail",params:{id:(r=l.value.updatedBy)==null?void 0:r.id}}},{default:t(()=>{var u;return[n(i((u=l.value.updatedBy)==null?void 0:u.name),1)]}),_:1},8,["url"])):b("",!0)]}),_:1},8,["label"]),a(e(m),{label:e(s)("fields.updated_at")},{default:t(()=>[a(e(y),{time:l.value.updatedAt,format:"y-MM-dd HH:mm:ss"},null,8,["time"])]),_:1},8,["label"])]),_:1}),a(D,{title:e(s)("fields.content")},{default:t(()=>[a(A,{code:l.value.content,language:"yaml"},null,8,["code"])]),_:1},8,["title"])]),_:1})])],64))}});export{Y as default};
