var y=Object.defineProperty;var R=(i,t,e)=>t in i?y(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var c=(i,t,e)=>(R(i,typeof t!="symbol"?t+"":t,e),e);import{cX as v,a5 as C,D as A,cY as P,a6 as T,B as m,a0 as n,h as _,am as O,bN as k,s as l,T as o}from"./index-0T11UOAg.js";import{a as S,b as I,G as E,C as B}from"./contract-appuri-c5ea176e.browser.esm-2sn-dwGV.js";import{C as N}from"./contract-interceptor-d7b164a7.browser.esm-amNiAGmN.js";import{C as D}from"./contract-roles-295c2434.browser.esm-MrfS3Zc3.js";const h=class h{constructor(t,e,a){c(this,"withdraw",l(async t=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address)",args:[await n(t)]})));c(this,"withdrawToken",l(async(t,e)=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address,address)",args:await Promise.all([n(e),n(t)])})));c(this,"distribute",l(async()=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute()",args:[]})));c(this,"distributeToken",l(async t=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute(address)",args:[await n(t)]})));let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,e,s,r,a);this._chainId=p,this.abi=A.parse(s||[]),this.contractWrapper=d,this.storage=a,this.metadata=new S(this.contractWrapper,P,this.storage),this.app=new I(this.contractWrapper,this.metadata,this.storage),this.roles=new D(this.contractWrapper,h.contractRoles),this.encoder=new T(this.contractWrapper),this.estimator=new E(this.contractWrapper),this.events=new B(this.contractWrapper),this.interceptor=new N(this.contractWrapper)}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAllRecipients(){const t=[];let e=m.from(0);const a=await this.contractWrapper.read("payeeCount",[]);for(;e.lt(a);)try{const r=await this.contractWrapper.read("payee",[e]);t.push(await this.getRecipientSplitPercentage(r)),e=e.add(1)}catch(r){if("method"in r&&r.method.toLowerCase().includes("payee(uint256)"))break;throw r}return t}async balanceOfAllRecipients(){const t=await this.getAllRecipients(),e={};for(const a of t)e[a.address]=await this.balanceOf(a.address);return e}async balanceOfTokenAllRecipients(t){const[e,a]=await Promise.all([n(t),this.getAllRecipients()]),r={};for(const s of a)r[s.address]=await this.balanceOfToken(s.address,e);return r}async balanceOf(t){const[e,a,r]=await Promise.all([n(t),this.contractWrapper.getProvider().getBalance(this.getAddress()),this.contractWrapper.read("totalReleased",[])]),s=a.add(r);return this._pendingPayment(e,s,await this.contractWrapper.read("released",[e]))}async balanceOfToken(t,e){const[a,r]=await Promise.all([n(e),n(t)]),s=(await _(()=>import("./index-0T11UOAg.js").then(b=>b.dm),__vite__mapDeps([0,1]))).default,p=new O(a,s,this.contractWrapper.getProvider()),[d,W,g]=await Promise.all([p.balanceOf(this.getAddress()),this.contractWrapper.read("totalReleased",[a]),this.contractWrapper.read("released",[a,r])]),w=d.add(W),f=await this._pendingPayment(r,w,g);return await k(this.contractWrapper.getProvider(),a,f)}async getRecipientSplitPercentage(t){const[e,a,r]=await Promise.all([n(t),this.contractWrapper.read("totalShares",[]),this.contractWrapper.read("shares",[t])]);return{address:e,splitPercentage:r.mul(m.from(1e7)).div(a).toNumber()/1e5}}async _pendingPayment(t,e,a){const[r,s]=await Promise.all([n(t),this.contractWrapper.read("totalShares",[])]);return e.mul(await this.contractWrapper.read("shares",[r])).div(s).sub(a)}async prepare(t,e,a){return o.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:a})}async call(t,e,a){return this.contractWrapper.call(t,e,a)}};c(h,"contractRoles",v);let u=h;export{u as Split};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-0T11UOAg.js","assets/index-Z2SKtoWP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
