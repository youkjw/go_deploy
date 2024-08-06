import{d as C,k as M,bW as $,J as H,au as v,m as A,o as m,c as B,b as s,w as l,e,C as N,N as T,i as u,t as d,a as _,g as b,f as k,Q as w,T as X,bt as D}from"./index.85d3582f.js";import{X as I}from"./PageHeader.556c52c2.js";import{_ as z}from"./Anchor.d96a0ee7.js";import{X as V,_ as i}from"./DescriptionItem.136d9c3a.js";import{r as x}from"./role.e89e830c.js";import{B as E}from"./ArrowBackCircleOutline.f4323d84.js";import{N as c}from"./Tag.04c651c7.js";import{N as h}from"./Time.b1d0572f.js";import"./Grid.4637279d.js";const G=C({setup(S){const{t}=M(),y=$(),a=H({user:{},roles:new Map});async function g(){var r;let p=await D.find(y.params.id),o=await x.search();a.user=p.data,(r=o.data)==null||r.forEach(n=>a.roles.set(n.id,n.name))}return v(()=>y.params.id,g),A(g),(p,o)=>(m(),B(w,null,[s(I,{subtitle:e(a).user.name},{action:l(()=>[s(e(N),{secondary:"",size:"small",onClick:o[0]||(o[0]=r=>p.$router.push({name:"user_list"}))},{icon:l(()=>[s(e(T),null,{default:l(()=>[s(e(E))]),_:1})]),default:l(()=>[u(" "+d(e(t)("buttons.return")),1)]),_:1}),s(e(N),{secondary:"",size:"small",onClick:o[1]||(o[1]=r=>p.$router.push({name:"user_edit",params:{id:e(a).user.id}}))},{default:l(()=>[u(d(e(t)("buttons.edit")),1)]),_:1})]),_:1},8,["subtitle"]),s(e(k),{class:"page-body",vertical:"",size:16},{default:l(()=>[s(e(V),{cols:"1 640:2","label-position":"left","label-align":"right","label-width":100},{default:l(()=>[s(e(i),{label:e(t)("fields.id")},{default:l(()=>[u(d(e(a).user.id),1)]),_:1},8,["label"]),s(e(i),{label:e(t)("fields.email")},{default:l(()=>[u(d(e(a).user.email),1)]),_:1},8,["label"]),s(e(i),{label:e(t)("fields.username")},{default:l(()=>[u(d(e(a).user.name),1)]),_:1},8,["label"]),s(e(i),{label:e(t)("fields.login_name")},{default:l(()=>[u(d(e(a).user.loginName),1)]),_:1},8,["label"]),s(e(i),{label:e(t)("fields.status")},{default:l(()=>[s(e(c),{round:"",size:"small",type:e(a).user.status?"primary":"warning"},{default:l(()=>[u(d(e(t)(e(a).user.status?"enums.normal":"enums.blocked")),1)]),_:1},8,["type"])]),_:1},8,["label"]),s(e(i),{label:e(t)("fields.admin")},{default:l(()=>[s(e(c),{size:"small",round:"",type:e(a).user.admin?"success":"default"},{default:l(()=>[u(d(e(t)(e(a).user.admin?"enums.yes":"enums.no")),1)]),_:1},8,["type"])]),_:1},8,["label"]),s(e(i),{label:e(t)("fields.type"),span:2},{default:l(()=>[s(e(c),{size:"small",round:"",type:e(a).user.type==="internal"?"default":"warning"},{default:l(()=>[u(d(e(a).user.type),1)]),_:1},8,["type"])]),_:1},8,["label"]),s(e(i),{label:e(t)("fields.created_by")},{default:l(()=>{var r,n;return[(r=e(a).user.createdBy)!=null&&r.id?(m(),_(z,{key:0,url:{name:"user_detail",params:{id:(n=e(a).user.createdBy)==null?void 0:n.id}}},{default:l(()=>{var f;return[u(d((f=e(a).user.createdBy)==null?void 0:f.name),1)]}),_:1},8,["url"])):b("",!0)]}),_:1},8,["label"]),s(e(i),{label:e(t)("fields.created_at")},{default:l(()=>[s(e(h),{time:e(a).user.createdAt,format:"y-MM-dd HH:mm:ss"},null,8,["time"])]),_:1},8,["label"]),s(e(i),{label:e(t)("fields.updated_by")},{default:l(()=>{var r,n;return[(r=e(a).user.updatedBy)!=null&&r.id?(m(),_(z,{key:0,url:{name:"user_detail",params:{id:(n=e(a).user.updatedBy)==null?void 0:n.id}}},{default:l(()=>{var f;return[u(d((f=e(a).user.updatedBy)==null?void 0:f.name),1)]}),_:1},8,["url"])):b("",!0)]}),_:1},8,["label"]),s(e(i),{label:e(t)("fields.updated_at")},{default:l(()=>[s(e(h),{time:e(a).user.updatedAt,format:"y-MM-dd HH:mm:ss"},null,8,["time"])]),_:1},8,["label"]),e(a).user.roles&&e(a).user.roles.length>0?(m(),_(e(i),{key:0,label:e(t)("objects.role",2),span:2},{default:l(()=>[s(e(k),{size:6},{default:l(()=>[(m(!0),B(w,null,X(e(a).user.roles,r=>(m(),_(e(c),{round:"",size:"small",type:"info"},{default:l(()=>[u(d(e(a).roles.get(r)),1)]),_:2},1024))),256))]),_:1})]),_:1},8,["label"])):b("",!0)]),_:1})]),_:1})],64))}});export{G as default};
