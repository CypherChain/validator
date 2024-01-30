import{h as l,a5 as w}from"./index-0T11UOAg.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./index-0T11UOAg.js").then(i=>i.dm),__vite__mapDeps([0,1]))).default,s=new w(n,a,r,{},e.storage),o=await e.getSignerAddress(),d=e.address;return(await s.read("allowance",[o,d])).gte(t)}export{g as h};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-0T11UOAg.js","assets/index-Z2SKtoWP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
