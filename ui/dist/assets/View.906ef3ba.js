import{d as k,k as N,bW as C,l as $,m as H,o as c,c as M,b as a,w as l,e,C as p,N as w,i as d,t as r,a as _,g as b,f as X,Q as h}from"./index.85d3582f.js";import{X as z}from"./PageHeader.556c52c2.js";import{_ as y}from"./Anchor.d96a0ee7.js";import{X as A,_ as u}from"./DescriptionItem.136d9c3a.js";import{r as D}from"./registry.6876822f.js";import{B as I}from"./ArrowBackCircleOutline.f4323d84.js";import{N as v}from"./Time.b1d0572f.js";import"./Grid.4637279d.js";const W=k({setup(V){const{t:s}=N(),B=C(),t=$({});async function g(){let m=await D.find(B.params.id);t.value=m.data}return H(g),(m,f)=>(c(),M(h,null,[a(z,{subtitle:t.value.name},{action:l(()=>[a(e(p),{secondary:"",size:"small",onClick:f[0]||(f[0]=i=>m.$router.push({name:"registry_list"}))},{icon:l(()=>[a(e(w),null,{default:l(()=>[a(e(I))]),_:1})]),default:l(()=>[d(" "+r(e(s)("buttons.return")),1)]),_:1}),a(e(p),{secondary:"",size:"small",onClick:f[1]||(f[1]=i=>m.$router.push({name:"registry_edit",params:{id:t.value.id}}))},{default:l(()=>[d(r(e(s)("buttons.edit")),1)]),_:1})]),_:1},8,["subtitle"]),a(e(X),{class:"page-body",vertical:"",size:16},{default:l(()=>[a(e(A),{"label-placement":"left","label-align":"right","label-width":90},{default:l(()=>[a(e(u),{label:e(s)("fields.id")},{default:l(()=>[d(r(t.value.id),1)]),_:1},8,["label"]),a(e(u),{label:e(s)("fields.name")},{default:l(()=>[d(r(t.value.name),1)]),_:1},8,["label"]),a(e(u),{label:e(s)("fields.url")},{default:l(()=>[d(r(t.value.url),1)]),_:1},8,["label"]),a(e(u),{label:e(s)("fields.login_name")},{default:l(()=>[d(r(t.value.username),1)]),_:1},8,["label"]),a(e(u),{label:e(s)("fields.created_by")},{default:l(()=>{var i,n;return[(i=t.value.createdBy)!=null&&i.id?(c(),_(y,{key:0,url:{name:"user_detail",params:{id:(n=t.value.createdBy)==null?void 0:n.id}}},{default:l(()=>{var o;return[d(r((o=t.value.createdBy)==null?void 0:o.name),1)]}),_:1},8,["url"])):b("",!0)]}),_:1},8,["label"]),a(e(u),{label:e(s)("fields.created_at")},{default:l(()=>[a(e(v),{time:t.value.createdAt,format:"y-MM-dd HH:mm:ss"},null,8,["time"])]),_:1},8,["label"]),a(e(u),{label:e(s)("fields.updated_by")},{default:l(()=>{var i,n;return[(i=t.value.updatedBy)!=null&&i.id?(c(),_(y,{key:0,url:{name:"user_detail",params:{id:(n=t.value.updatedBy)==null?void 0:n.id}}},{default:l(()=>{var o;return[d(r((o=t.value.updatedBy)==null?void 0:o.name),1)]}),_:1},8,["url"])):b("",!0)]}),_:1},8,["label"]),a(e(u),{label:e(s)("fields.updated_at")},{default:l(()=>[a(e(v),{time:t.value.updatedAt,format:"y-MM-dd HH:mm:ss"},null,8,["time"])]),_:1},8,["label"])]),_:1})]),_:1})],64))}});export{W as default};