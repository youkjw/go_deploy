import{H as r}from"./index.85d3582f.js";class i{find(e,a){return r.get("/image/find",{node:e,id:a})}search(e){return r.get("/image/search",e)}delete(e,a,t){return r.post("/image/delete",{node:e,id:a,name:t})}prune(e){return r.post("/image/prune",{node:e})}}var m=new i;export{m as i};