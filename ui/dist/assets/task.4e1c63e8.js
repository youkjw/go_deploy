import{H as a}from"./index.85d3582f.js";class s{find(t){return a.get("/task/find",{id:t})}search(t){return a.get("/task/search",t)}fetchLogs(t){return a.get("/task/fetch-logs",t)}}var n=new s;export{n as t};