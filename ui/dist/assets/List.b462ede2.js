import{d as v,k,J as y,o as b,c as N,b as i,w as o,e,f as m,aW as _,C as z,i as x,t as h,Q as w}from"./index.85d3582f.js";import{X as S}from"./PageHeader.556c52c2.js";import{t as U}from"./task.4e1c63e8.js";import{r as n,a as I}from"./render.edbb01fe.js";import{u as C}from"./data-table.6c22a710.js";import{N as D}from"./Select.60c05ccc.js";import{N as P}from"./DataTable.20b75ea0.js";import"./Anchor.d96a0ee7.js";import"./Tag.04c651c7.js";import"./Time.b1d0572f.js";import"./Popconfirm.ac7ac0d3.js";import"./ArrowDown.224587e2.js";import"./Checkbox.1898d3a6.js";import"./RadioGroup.5ac456f1.js";import"./Radio.10d2e386.js";const G=v({setup(T){const{t}=k(),l=y({service:"",state:void 0}),c=[{label:"Running",value:"running"},{label:"Shutdown",value:"shutdown"},{label:"Accepted",value:"accepted"}],u=[{title:t("fields.id"),key:"id",fixed:"left",render:a=>n({name:"task_detail",params:{id:a.id}},a.id)},{title:t("fields.service_id"),key:"service",render:a=>n({name:"service_detail",params:{name:a.serviceId}},a.serviceId)},{title:t("objects.image"),key:"image"},{title:t("fields.node_id"),key:"image",render:a=>n({name:"node_detail",params:{id:a.nodeId}},a.nodeName)},{title:t("fields.state"),key:"mode",render:a=>I(a.state,a.state==="running"||a.state==="starting"?"success":"default")},{title:t("fields.created_at"),key:"createdAt"}],{state:d,pagination:f,fetchData:p,changePageSize:g}=C(U.search,l);return(a,s)=>(b(),N(w,null,[i(S),i(e(m),{class:"page-body",vertical:"",size:12},{default:o(()=>[i(e(m),{size:12},{default:o(()=>[i(e(_),{size:"small",value:e(l).service,"onUpdate:value":s[0]||(s[0]=r=>e(l).service=r),placeholder:e(t)("fields.name"),clearable:""},null,8,["value","placeholder"]),i(e(D),{size:"small",placeholder:e(t)("fields.state"),value:e(l).state,"onUpdate:value":s[1]||(s[1]=r=>e(l).state=r),options:c,style:{width:"120px"},clearable:""},null,8,["placeholder","value"]),i(e(z),{size:"small",type:"primary",onClick:s[2]||(s[2]=()=>e(p)())},{default:o(()=>[x(h(e(t)("buttons.search")),1)]),_:1})]),_:1}),i(e(P),{remote:"","row-key":r=>r.id,size:"small",columns:u,data:e(d).data,pagination:e(f),loading:e(d).loading,"onUpdate:page":e(p),onUpdatePageSize:e(g),"scroll-x":"max-content"},null,8,["row-key","data","pagination","loading","onUpdate:page","onUpdatePageSize"])]),_:1})],64))}});export{G as default};
