import{d as V,k as X,bW as z,l as _,bk as h,bm as D,m as P,o as f,c as M,b as a,w as l,e,C as N,N as x,i as m,t as y,bp as W,aW as d,a as k,g as U,c2 as $,f as q,Q as A,h as R,c3 as E}from"./index.85d3582f.js";import{X as H}from"./PageHeader.556c52c2.js";import{X as Q}from"./Panel.5fe42ab1.js";import{c as w}from"./config.6c9985f6.js";import{B as T}from"./ArrowBackCircleOutline.f4323d84.js";import{S as j}from"./SaveOutline.608b2aa9.js";import{a as B}from"./Grid.4637279d.js";import{N as p}from"./FormItemGridItem.2cbaea10.js";import{N as C}from"./DynamicInput.74e0089b.js";import{N as J}from"./RadioGroup.5ac456f1.js";import{N as I}from"./Radio.10d2e386.js";import"./hr.a93a0821.js";import"./Add.32836a6c.js";import"./Remove.e20fb71e.js";import"./ArrowDown.224587e2.js";const K=R("div",{style:{height:"34px","line-height":"34px",margin:"0 8px"}},"=",-1),L=m("None"),O=m("Golang"),Y=R("div",{style:{height:"34px","line-height":"34px",margin:"0 8px"}},"=",-1),ce=V({setup(Z){const{t:o}=X(),v=z();v.params.name;const t=_({templating:{name:"none"}}),F={name:h(),data:h()},c=_(),{submit:G,submiting:b}=D(c,()=>w.save(t.value),()=>{window.message.info(o("texts.action_success")),E.push({name:"config_list"})});function g(){return{name:"",value:""}}async function S(){var n;const r=v.params.id;if(r){let s=await w.find(r);t.value=(n=s.data)==null?void 0:n.config}}return P(S),(r,n)=>(f(),M(A,null,[a(H,{subtitle:t.value.name},{action:l(()=>[a(e(N),{secondary:"",size:"small",onClick:n[0]||(n[0]=s=>r.$router.push({name:"config_list"}))},{icon:l(()=>[a(e(x),null,{default:l(()=>[a(e(T))]),_:1})]),default:l(()=>[m(" "+y(e(o)("buttons.return")),1)]),_:1})]),_:1},8,["subtitle"]),a(e(q),{class:"page-body",vertical:"",size:12},{default:l(()=>[a(e(W),{model:t.value,rules:F,ref_key:"form",ref:c,"label-placement":"top","label-width":"90"},{default:l(()=>[a(e(B),{cols:"1 640:2","x-gap":24},{default:l(()=>[a(e(p),{label:e(o)("fields.name"),path:"name"},{default:l(()=>[a(e(d),{placeholder:e(o)("fields.name"),value:t.value.name,"onUpdate:value":n[1]||(n[1]=s=>t.value.name=s),disabled:Boolean(t.value.id)},null,8,["placeholder","value","disabled"])]),_:1},8,["label"]),t.value.id?U("",!0):(f(),k(e(p),{key:0,label:e(o)("fields.content"),path:"data",span:"2"},{default:l(()=>[a(e(d),{type:"textarea",placeholder:e(o)("fields.content"),value:t.value.data,"onUpdate:value":n[2]||(n[2]=s=>t.value.data=s),autosize:{minRows:5,maxRows:30}},null,8,["placeholder","value"])]),_:1},8,["label"])),a(e(p),{span:"3",label:e(o)("fields.labels"),path:"labels"},{default:l(()=>[a(e(C),{value:t.value.labels,"onUpdate:value":n[3]||(n[3]=s=>t.value.labels=s),"on-create":g},{default:l(({index:s,value:i})=>[a(e(d),{placeholder:e(o)("fields.name"),value:i.name,"onUpdate:value":u=>i.name=u},null,8,["placeholder","value","onUpdate:value"]),K,a(e(d),{placeholder:e(o)("fields.value"),value:i.value,"onUpdate:value":u=>i.value=u},null,8,["placeholder","value","onUpdate:value"])]),_:1},8,["value"])]),_:1},8,["label"])]),_:1}),t.value.id?U("",!0):(f(),k(Q,{key:0,title:e(o)("fields.template"),subtitle:e(o)("tips.template")},{default:l(()=>[a(e(B),{cols:"1 640:2","x-gap":24},{default:l(()=>[a(e(p),{label:e(o)("fields.engine"),path:"templating.name"},{default:l(()=>[a(e(J),{value:t.value.templating.name,"onUpdate:value":n[4]||(n[4]=s=>t.value.templating.name=s)},{default:l(()=>[a(e(I),{key:"none",value:"none"},{default:l(()=>[L]),_:1}),a(e(I),{key:"golang",value:"golang"},{default:l(()=>[O]),_:1})]),_:1},8,["value"])]),_:1},8,["label"]),a(e(p),{span:"3",label:e(o)("fields.options"),path:"templating.options"},{default:l(()=>[a(e(C),{value:t.value.templating.options,"onUpdate:value":n[5]||(n[5]=s=>t.value.templating.options=s),"on-create":g},{default:l(({index:s,value:i})=>[a(e(d),{placeholder:e(o)("fields.name"),value:i.name,"onUpdate:value":u=>i.name=u},null,8,["placeholder","value","onUpdate:value"]),Y,a(e(d),{placeholder:e(o)("fields.value"),value:i.value,"onUpdate:value":u=>i.value=u},null,8,["placeholder","value","onUpdate:value"])]),_:1},8,["value"])]),_:1},8,["label"])]),_:1})]),_:1},8,["title","subtitle"])),a(e(N),{onClick:$(e(G),["prevent"]),type:"primary",disabled:e(b),loading:e(b)},{icon:l(()=>[a(e(x),null,{default:l(()=>[a(e(j))]),_:1})]),default:l(()=>[m(" "+y(e(o)("buttons.save")),1)]),_:1},8,["onClick","disabled","loading"])]),_:1},8,["model"])]),_:1})],64))}});export{ce as default};