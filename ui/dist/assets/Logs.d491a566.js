import{d as N,k as g,J as _,l as c,m as k,L as x,o as S,c as R,b as a,w as l,e,O as f,f as T,aW as v,Q as I}from"./index.85d3582f.js";import{c as L}from"./container.c3b8b557.js";import{t as U}from"./task.4e1c63e8.js";import{s as z}from"./service.387f6f1f.js";import{N as A}from"./InputNumber.d1b1db42.js";import{N as b}from"./Switch.f4840aa3.js";import{N as h,a as q}from"./Tabs.cb7015dd.js";const O=N({props:{type:{type:String,required:!0},node:{type:String},id:{type:String,required:!0}},setup(w){const i=w,{t:o}=g(),t=_({lines:500,timestamps:!1,refresh:!1}),u=c({stdout:"",stderr:""}),m=c();function y(s){s?d():clearTimeout(m.value)}async function p(){var s;switch(i.type){case"container":s=await L.fetchLogs({node:i.node||"",id:i.id,lines:t.lines,timestamps:t.timestamps});break;case"task":s=await U.fetchLogs({id:i.id,lines:t.lines,timestamps:t.timestamps});break;case"service":s=await z.fetchLogs({id:i.id,lines:t.lines,timestamps:t.timestamps});break;default:return}u.value=s.data}function d(){t.refresh&&(m.value=setTimeout(()=>{p(),d()},3e3))}return k(()=>{p(),d()}),x(()=>clearTimeout(m.value)),(s,r)=>(S(),R(I,null,[a(e(T),{size:24},{default:l(()=>[a(e(f),{label:e(o)("fields.rows"),"label-placement":"left"},{default:l(()=>[a(e(A),{value:e(t).lines,"onUpdate:value":r[0]||(r[0]=n=>e(t).lines=n)},null,8,["value"])]),_:1},8,["label"]),a(e(f),{label:e(o)("fields.add_timestamps"),"label-placement":"left"},{default:l(()=>[a(e(b),{value:e(t).timestamps,"onUpdate:value":[r[1]||(r[1]=n=>e(t).timestamps=n),p]},null,8,["value"])]),_:1},8,["label"]),a(e(f),{label:e(o)("fields.auto_refresh"),"label-placement":"left"},{default:l(()=>[a(e(b),{value:e(t).refresh,"onUpdate:value":[r[2]||(r[2]=n=>e(t).refresh=n),y]},null,8,["value"])]),_:1},8,["label"])]),_:1}),a(e(q),{type:"card",style:{"margin-top":"-18px"}},{default:l(()=>[a(e(h),{name:"stdout",tab:"Stdout"},{default:l(()=>[a(e(v),{type:"textarea",autosize:{minRows:5,maxRows:30},placeholder:"",readonly:"",value:u.value.stdout},null,8,["value"])]),_:1}),a(e(h),{name:"stderr",tab:"Stderr"},{default:l(()=>[a(e(v),{type:"textarea",autosize:{minRows:5,maxRows:30},placeholder:"",readonly:"",value:u.value.stderr},null,8,["value"])]),_:1})]),_:1})],64))}});export{O as _};
