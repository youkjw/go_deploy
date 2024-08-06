import{d as z,k as x,ca as T,J as _,o as S,c as U,b as l,w as n,e,C as m,N as h,i as p,t as u,f as c,aW as C,Q as j}from"./index.85d3582f.js";import{X as A}from"./PageHeader.556c52c2.js";import{s as f}from"./service.387f6f1f.js";import{u as B}from"./data-table.6c22a710.js";import{r as D,a as b,b as I}from"./render.edbb01fe.js";import{A as P}from"./AddOutline.f0719097.js";import{N as $}from"./Select.60c05ccc.js";import{N as J}from"./DataTable.20b75ea0.js";import"./Anchor.d96a0ee7.js";import"./Tag.04c651c7.js";import"./Time.b1d0572f.js";import"./Popconfirm.ac7ac0d3.js";import"./ArrowDown.224587e2.js";import"./Checkbox.1898d3a6.js";import"./RadioGroup.5ac456f1.js";import"./Radio.10d2e386.js";const ae=z({setup(R){const{t:o}=x(),g=T(),s=_({name:"",mode:void 0}),k=[{label:"Replicated",value:"replicated"},{label:"Global",value:"global"},{label:"Replicated Job",value:"replicated-job"},{label:"Global Job",value:"global-job"}],v=[{title:o("fields.name"),key:"name",fixed:"left",render:a=>D({name:"service_detail",params:{name:a.name}},a.name)},{title:o("objects.image"),key:"image"},{title:o("fields.mode"),key:"mode",render:a=>b(a.mode,a.mode==="replicated"||a.mode==="replicated-job"?"info":"error")},{title:o("fields.task"),key:"tasks",render:a=>{const t=a.desiredTasks===0?"warning":a.runningTasks===a.desiredTasks?"success":"error";return b(`${a.runningTasks}/${a.desiredTasks}`,t)}},{title:o("fields.updated_at"),key:"updatedAt"},{title:o("fields.actions"),key:"actions",render(a,t){return I([{type:"error",text:o("buttons.delete"),action:()=>w(a.name,t),prompt:o("prompts.delete")},{type:"warning",text:o("buttons.edit"),action:()=>g.push({name:"service_edit",params:{name:a.name}})}])}}],{state:i,pagination:y,fetchData:d,changePageSize:N}=B(f.search,s);async function w(a,t){await f.delete(a),i.data.splice(t,1)}return(a,t)=>(S(),U(j,null,[l(A,null,{action:n(()=>[l(e(m),{secondary:"",size:"small",onClick:t[0]||(t[0]=r=>a.$router.push({name:"service_new"}))},{icon:n(()=>[l(e(h),null,{default:n(()=>[l(e(P))]),_:1})]),default:n(()=>[p(" "+u(e(o)("buttons.new")),1)]),_:1})]),_:1}),l(e(c),{class:"page-body",vertical:"",size:12},{default:n(()=>[l(e(c),{size:12},{default:n(()=>[l(e(C),{size:"small",value:e(s).name,"onUpdate:value":t[1]||(t[1]=r=>e(s).name=r),placeholder:e(o)("fields.name"),clearable:""},null,8,["value","placeholder"]),l(e($),{size:"small",placeholder:e(o)("fields.mode"),value:e(s).mode,"onUpdate:value":t[2]||(t[2]=r=>e(s).mode=r),options:k,style:{width:"120px"},clearable:""},null,8,["placeholder","value"]),l(e(m),{size:"small",type:"primary",onClick:t[3]||(t[3]=()=>e(d)())},{default:n(()=>[p(u(e(o)("buttons.search")),1)]),_:1})]),_:1}),l(e(J),{remote:"","row-key":r=>r.name,size:"small",columns:v,data:e(i).data,pagination:e(y),loading:e(i).loading,"onUpdate:page":e(d),onUpdatePageSize:e(N),"scroll-x":"max-content"},null,8,["row-key","data","pagination","loading","onUpdate:page","onUpdatePageSize"])]),_:1})],64))}});export{ae as default};
