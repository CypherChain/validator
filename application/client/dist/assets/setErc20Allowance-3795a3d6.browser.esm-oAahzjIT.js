import{bF as _,h as f,a5 as h,a2 as n,cj as l,ck as N,cl as c}from"./index-0T11UOAg.js";const r=n.object({}).catchall(n.union([c,n.unknown()])),u=n.union([n.array(r),r]).optional().nullable(),x=n.object({name:n.union([n.string(),n.number()]).optional().nullable(),description:n.string().nullable().optional().nullable(),image:l.nullable().optional(),animation_url:l.optional().nullable()}),p=x.extend({external_url:l.nullable().optional(),background_color:N.optional().nullable(),properties:u,attributes:u}).catchall(n.union([c,n.unknown()])),I=n.union([p,n.string()]),O=p.extend({id:n.string(),uri:n.string(),image:n.string().nullable().optional(),external_url:n.string().nullable().optional(),animation_url:n.string().nullable().optional()});async function S(a,t,e,o){if(_(e))o.value=t;else{const g=(await f(()=>import("./index-0T11UOAg.js").then(w=>w.dm),__vite__mapDeps([0,1]))).default,b=a.getSigner(),m=a.getProvider(),i=new h(b||m,e,g,a.options,a.storage),d=await a.getSignerAddress(),s=a.address;return(await i.read("allowance",[d,s])).lt(t)&&await i.sendTransaction("approve",[s,t]),o}}export{x as B,p as C,I as N,O as a,S as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-0T11UOAg.js","assets/index-Z2SKtoWP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
