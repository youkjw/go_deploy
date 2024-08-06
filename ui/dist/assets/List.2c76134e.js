import{d as C,k as h,J as S,l as P,m as T,o as v,c as U,b as l,w as i,e,C as u,N as y,i as p,t as c,f as k,a as A,g as B,aW as I,Q as D}from"./index.85d3582f.js";import{X as V}from"./PageHeader.556c52c2.js";import{v as f}from"./volume.fc7933c5.js";import{n as X}from"./node.67b41fa8.js";import{u as $}from"./data-table.6c22a710.js";import{r as j,a as w,d as E,f as F}from"./render.edbb01fe.js";import{C as H}from"./CloseOutline.b801982a.js";import{A as J}from"./AddOutline.f0719097.js";import{N as L}from"./Select.60c05ccc.js";import{N as M}from"./DataTable.20b75ea0.js";import"./Anchor.d96a0ee7.js";import"./Tag.04c651c7.js";import"./Time.b1d0572f.js";import"./Popconfirm.ac7ac0d3.js";import"./ArrowDown.224587e2.js";import"./Checkbox.1898d3a6.js";import"./RadioGroup.5ac456f1.js";import"./Radio.10d2e386.js";const me=C({setup(Q){const{t}=h(),s=S({node:"",name:""}),r=P([]),b=[{title:t("fields.name"),key:"name",fixed:"left",render:a=>j({name:"volume_detail",params:{node:s.node||"-",name:a.name}},a.name)},{title:t("fields.driver"),key:"driver",render(a){return w(a.driver)}},{title:t("fields.scope"),key:"scope",render(a){return w(a.scope)}},{title:t("fields.mount_point"),key:"mountPoint"},{title:t("fields.created_at"),key:"createdAt"},{title:t("fields.actions"),key:"actions",render(a,n){return E("error",t("buttons.delete"),()=>N(a.name,n),t("prompts.delete"))}}],{state:m,pagination:z,fetchData:d,changePageSize:_}=$(f.search,s,!1);async function N(a,n){await f.delete(s.node,a),m.data.splice(n,1)}async function x(){window.dialog.warning({title:t("dialogs.prune_volume.title"),content:t("dialogs.prune_volume.body"),positiveText:t("buttons.confirm"),negativeText:t("buttons.cancel"),onPositiveClick:async()=>{var n,o;const a=await f.prune(s.node);window.message.info(t("texts.prune_volume_success",{count:(n=a.data)==null?void 0:n.count,size:F((o=a.data)==null?void 0:o.size)})),d()}})}return T(async()=>{var n,o;const a=await X.list(!0);r.value=(n=a.data)==null?void 0:n.map(g=>({label:g.name,value:g.id})),(o=a.data)!=null&&o.length&&(s.node=a.data[0].id),d()}),(a,n)=>(v(),U(D,null,[l(V,null,{action:i(()=>[l(e(u),{secondary:"",size:"small",type:"warning",onClick:x},{icon:i(()=>[l(e(y),null,{default:i(()=>[l(e(H))]),_:1})]),default:i(()=>[p(" "+c(e(t)("buttons.prune")),1)]),_:1}),l(e(u),{secondary:"",size:"small",onClick:n[0]||(n[0]=o=>a.$router.push({name:"volume_new",params:{node:e(s).node||"-"}}))},{icon:i(()=>[l(e(y),null,{default:i(()=>[l(e(J))]),_:1})]),default:i(()=>[p(" "+c(e(t)("buttons.new")),1)]),_:1})]),_:1}),l(e(k),{class:"page-body",vertical:"",size:12},{default:i(()=>[l(e(k),{size:12},{default:i(()=>[r.value&&r.value.length?(v(),A(e(L),{key:0,filterable:"",size:"small","consistent-menu-width":!1,placeholder:e(t)("objects.node"),value:e(s).node,"onUpdate:value":n[1]||(n[1]=o=>e(s).node=o),options:r.value,style:{width:"200px"}},null,8,["placeholder","value","options"])):B("",!0),l(e(I),{size:"small",value:e(s).name,"onUpdate:value":n[2]||(n[2]=o=>e(s).name=o),placeholder:e(t)("fields.name"),clearable:""},null,8,["value","placeholder"]),l(e(u),{size:"small",type:"primary",onClick:n[3]||(n[3]=()=>e(d)())},{default:i(()=>[p(c(e(t)("buttons.search")),1)]),_:1})]),_:1}),l(e(M),{remote:"","row-key":o=>o.name,size:"small",columns:b,data:e(m).data,pagination:e(z),loading:e(m).loading,"onUpdate:page":e(d),onUpdatePageSize:e(_),"scroll-x":"max-content"},null,8,["row-key","data","pagination","loading","onUpdate:page","onUpdatePageSize"])]),_:1})],64))}});export{me as default};