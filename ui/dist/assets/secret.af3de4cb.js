import{H as r}from"./index.85d3582f.js";class t{find(e){return r.get("/secret/find",{id:e})}search(e){return r.get("/secret/search",e)}save(e){return r.post("/secret/save",e)}delete(e){return r.post("/secret/delete",{id:e})}}var c=new t;export{c as s};
