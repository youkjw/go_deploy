import{H as r}from"./index.85d3582f.js";class u{find(e,t){return r.get("/volume/find",{node:e,name:t})}search(e){return r.get("/volume/search",e)}delete(e,t){return r.post("/volume/delete",{node:e,name:t})}save(e){return r.post("/volume/save",e)}prune(e){return r.post("/volume/prune",{node:e})}}var a=new u;export{a as v};