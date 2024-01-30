var U=Object.defineProperty;var F=(w,s,t)=>s in w?U(w,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):w[s]=t;var g=(w,s,t)=>(F(w,typeof s!="symbol"?s+"":s,t),t);import{a2 as R,c8 as l,a3 as T,a4 as N,cS as $,cT as O,a5 as W,D as x,cU as D,a6 as V,bn as M,b7 as z,B as m,bH as y,be as A,s as f,T as k,a0 as L,bk as K,cV as B,h as I,cW as Q}from"./index-0T11UOAg.js";import{h as Y}from"./hasERC20Allowance-f04acfec.browser.esm-rF_NiHiL.js";import{R as j,a as G}from"./assertEnabled-528581b6.browser.esm-rgQcVLeZ.js";import{a as H,b as Z,G as J,C as _,d as X}from"./contract-appuri-c5ea176e.browser.esm-2sn-dwGV.js";import{i as E}from"./marketplace-5b90582d.browser.esm-P4D3GekO.js";import{b as tt}from"./QueryParams-83e678cb.browser.esm-LTENBzys.js";import{C as rt}from"./contract-interceptor-d7b164a7.browser.esm-amNiAGmN.js";import{C as et,a as at}from"./contract-owner-50abb8cd.browser.esm-_p1tQHvJ.js";import{C as nt}from"./contract-roles-295c2434.browser.esm-MrfS3Zc3.js";import{S as st}from"./erc-1155-standard-264532c3.browser.esm-g51t6MzT.js";import{E as ot}from"./erc-20-68c6df6a.browser.esm-9FCA37ZX.js";import{N as ct}from"./setErc20Allowance-3795a3d6.browser.esm-oAahzjIT.js";import"./index-S9by4JaH.js";import"./erc-1155-5aaba527.browser.esm-hZmCH1ne.js";import"./drop-claim-conditions-6010745a.browser.esm-1acMIwaL.js";const v=R.object({contractAddress:N}),dt=v.extend({quantity:T}),it=v.extend({tokenId:l}),pt=v.extend({tokenId:l,quantity:l}),ht=dt.omit({quantity:!0}).extend({quantityPerReward:T}),ut=it,gt=pt.omit({quantity:!0}).extend({quantityPerReward:l}),mt=ht.extend({totalRewards:l.default("1")}),lt=ut,wt=gt.extend({totalRewards:l.default("1")}),q=R.object({erc20Rewards:R.array(mt).default([]),erc721Rewards:R.array(lt).default([]),erc1155Rewards:R.array(wt).default([])}),ft=q.extend({packMetadata:ct,rewardsPerPack:l.default("1"),openStartTime:j.default(new Date)});class kt{constructor(s,t,r,n,e){g(this,"featureName",O.name);g(this,"open",f((()=>{var s=this;return async function(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;return k.fromContractWrapper({contractWrapper:s.contractWrapper,method:"openPack",args:[t,r],overrides:{gasLimit:n},parse:e=>{let o=m.from(0);try{o=s.contractWrapper.parseLogs("PackOpenRequested",e==null?void 0:e.logs)[0].args.requestId}catch{}return{receipt:e,id:o}}})}})()));g(this,"claimRewards",f((()=>{var s=this;return async function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:5e5;return k.fromContractWrapper({contractWrapper:s.contractWrapper,method:"claimRewards",args:[],overrides:{gasLimit:t},parse:async r=>{const n=s.contractWrapper.parseLogs("PackOpened",r==null?void 0:r.logs);if(n.length===0)throw new Error("PackOpened event not found");const e=n[0].args.rewardUnitsDistributed;return await s.parseRewards(e)}})}})()));let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:new W(s,t,B,n,r);this.contractWrapper=o,this.storage=r,this.chainId=e,this.events=new _(this.contractWrapper)}onNetworkUpdated(s){this.contractWrapper.updateSignerOrProvider(s)}getAddress(){return this.contractWrapper.address}async parseRewards(s){const t=[],r=[],n=[];for(const e of s)switch(e.tokenType){case 0:{const o=await y(this.contractWrapper.getProvider(),e.assetContract);t.push({contractAddress:e.assetContract,quantityPerReward:A(e.totalAmount,o.decimals).toString()});break}case 1:{r.push({contractAddress:e.assetContract,tokenId:e.tokenId.toString()});break}case 2:{n.push({contractAddress:e.assetContract,tokenId:e.tokenId.toString(),quantityPerReward:e.totalAmount.toString()});break}}return{erc20Rewards:t,erc721Rewards:r,erc1155Rewards:n}}async addPackOpenEventListener(s){return this.events.addEventListener("PackOpened",async t=>{s(t.data.packId.toString(),t.data.opener,await this.parseRewards(t.data.rewardUnitsDistributed))})}async canClaimRewards(s){const t=await L(s||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.read("canClaimRewards",[t])}async openAndClaim(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;const n=await this.contractWrapper.sendTransaction("openPackAndClaimRewards",[s,t,r],{gasLimit:m.from(5e5)});let e=m.from(0);try{e=this.contractWrapper.parseLogs("PackOpenRequested",n==null?void 0:n.logs)[0].args.requestId}catch{}return{receipt:n,id:e}}async getLinkBalance(){const s=(await I(()=>import("./index-0T11UOAg.js").then(t=>t.dm),__vite__mapDeps([0,1]))).default;return this.getLinkContract(s).balanceOf(this.contractWrapper.address)}async transferLink(s){const t=(await I(()=>import("./index-0T11UOAg.js").then(r=>r.dm),__vite__mapDeps([0,1]))).default;await this.getLinkContract(t).transfer(this.contractWrapper.address,s)}getLinkContract(s){const t=Q[this.chainId];if(!t)throw new Error(`No LINK token address found for chainId ${this.chainId}`);const r=new W(this.contractWrapper.getSignerOrProvider(),t,s,this.contractWrapper.options,this.storage);return new ot(r,this.storage,this.chainId)}}const C=class C extends st{constructor(t,r,n){let e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,o,e.gasless&&"openzeppelin"in e.gasless?{...e,gasless:{...e.gasless,openzeppelin:{...e.gasless.openzeppelin,useEOAForwarder:!0}}}:e,n);super(d,n,p);g(this,"create",f(async t=>{const r=await this.contractWrapper.getSignerAddress();return this.createTo.prepare(r,t)}));g(this,"addPackContents",f(async(t,r)=>{const[n,e]=await Promise.all([this.contractWrapper.getSignerAddress(),q.parseAsync(r)]),{contents:o,numOfRewardUnits:p}=await this.toPackContentArgs(e);return k.fromContractWrapper({contractWrapper:this.contractWrapper,method:"addPackContents",args:[t,o,p,n],parse:d=>{const c=this.contractWrapper.parseLogs("PackUpdated",d==null?void 0:d.logs);if(c.length===0)throw new Error("PackUpdated event not found");const a=c[0].args.packId;return{id:a,receipt:d,data:()=>this.erc1155.get(a)}}})}));g(this,"createTo",f(async(t,r)=>{const[n,e,o]=await Promise.all([tt(r.packMetadata,this.storage),ft.parseAsync(r),L(t)]),{erc20Rewards:p,erc721Rewards:d,erc1155Rewards:c}=e,a={erc20Rewards:p,erc721Rewards:d,erc1155Rewards:c},{contents:h,numOfRewardUnits:i}=await this.toPackContentArgs(a);return k.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createPack",args:[h,i,n,e.openStartTime,e.rewardsPerPack,o],parse:u=>{const P=this.contractWrapper.parseLogs("PackCreated",u==null?void 0:u.logs);if(P.length===0)throw new Error("PackCreated event not found");const S=P[0].args.packId;return{id:S,receipt:u,data:()=>this.erc1155.get(S)}}})}));g(this,"open",f((()=>{var t=this;return async function(r){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;if(t._vrf)throw new Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");return k.fromContractWrapper({contractWrapper:t.contractWrapper,method:"openPack",args:[r,n],overrides:{gasLimit:e},parse:async o=>{const p=t.contractWrapper.parseLogs("PackOpened",o==null?void 0:o.logs);if(p.length===0)throw new Error("PackOpened event not found");const d=p[0].args.rewardUnitsDistributed,c=[],a=[],h=[];for(const i of d)switch(i.tokenType){case 0:{const u=await y(t.contractWrapper.getProvider(),i.assetContract);c.push({contractAddress:i.assetContract,quantityPerReward:A(i.totalAmount,u.decimals).toString()});break}case 1:{a.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString()});break}case 2:{h.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString(),quantityPerReward:i.totalAmount.toString()});break}}return{erc20Rewards:c,erc721Rewards:a,erc1155Rewards:h}}})}})()));this.abi=x.parse(o||[]),this.metadata=new H(this.contractWrapper,D,this.storage),this.app=new Z(this.contractWrapper,this.metadata,this.storage),this.roles=new nt(this.contractWrapper,C.contractRoles),this.royalties=new et(this.contractWrapper,this.metadata),this.encoder=new V(this.contractWrapper),this.estimator=new J(this.contractWrapper),this.events=new _(this.contractWrapper),this.interceptor=new rt(this.contractWrapper),this.owner=new at(this.contractWrapper),this._vrf=this.detectVrf()}get vrf(){return G(this._vrf,O)}onNetworkUpdated(t){var r;this.contractWrapper.updateSignerOrProvider(t),(r=this._vrf)==null||r.onNetworkUpdated(t)}getAddress(){return this.contractWrapper.address}async get(t){return this.erc1155.get(t)}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[M("transfer"),z])}async getPackContents(t){const{contents:r,perUnitAmounts:n}=await this.contractWrapper.read("getPackContents",[t]),e=[],o=[],p=[];for(let d=0;d<r.length;d++){const c=r[d],a=n[d];switch(c.tokenType){case 0:{const h=await y(this.contractWrapper.getProvider(),c.assetContract),i=A(a,h.decimals),u=A(m.from(c.totalAmount).div(a),h.decimals);e.push({contractAddress:c.assetContract,quantityPerReward:i,totalRewards:u});break}case 1:{o.push({contractAddress:c.assetContract,tokenId:c.tokenId.toString()});break}case 2:{p.push({contractAddress:c.assetContract,tokenId:c.tokenId.toString(),quantityPerReward:a.toString(),totalRewards:m.from(c.totalAmount).div(a).toString()});break}}}return{erc20Rewards:e,erc721Rewards:o,erc1155Rewards:p}}async toPackContentArgs(t){const r=[],n=[],{erc20Rewards:e,erc721Rewards:o,erc1155Rewards:p}=t,d=this.contractWrapper.getProvider(),c=await this.contractWrapper.getSignerAddress();for(const a of e){const i=(await K(d,a.quantityPerReward,a.contractAddress)).mul(a.totalRewards);if(!await Y(this.contractWrapper,a.contractAddress,i))throw new Error(`ERC20 token with contract address "${a.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${a.contractAddress}").setAllowance("${this.getAddress()}", ${i});

`);n.push(a.totalRewards),r.push({assetContract:a.contractAddress,tokenType:0,totalAmount:i,tokenId:0})}for(const a of o){if(!await E(this.contractWrapper.getProvider(),this.getAddress(),a.contractAddress,a.tokenId,c))throw new Error(`ERC721 token "${a.tokenId}" with contract address "${a.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${a.contractAddress}").setApprovalForToken("${this.getAddress()}", ${a.tokenId});

`);n.push("1"),r.push({assetContract:a.contractAddress,tokenType:1,totalAmount:1,tokenId:a.tokenId})}for(const a of p){if(!await E(this.contractWrapper.getProvider(),this.getAddress(),a.contractAddress,a.tokenId,c))throw new Error(`ERC1155 token "${a.tokenId}" with contract address "${a.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${a.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);n.push(a.totalRewards),r.push({assetContract:a.contractAddress,tokenType:2,totalAmount:m.from(a.quantityPerReward).mul(m.from(a.totalRewards)),tokenId:a.tokenId})}return{contents:r,numOfRewardUnits:n}}async prepare(t,r,n){return k.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}detectVrf(){if(X(this.contractWrapper,"PackVRF"))return new kt(this.contractWrapper.getSignerOrProvider(),this.contractWrapper.address,this.storage,this.contractWrapper.options,this.chainId)}};g(C,"contractRoles",$);let b=C;export{b as Pack};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-0T11UOAg.js","assets/index-Z2SKtoWP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
