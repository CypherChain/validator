var d=Object.defineProperty;var f=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>(f(s,typeof e!="symbol"?e+"":e,t),t);import{cZ as C,a5 as w,D as W,c_ as y,a6 as R,a0 as p,bn as T,b7 as b,s as c,T as m}from"./index-0T11UOAg.js";import{a as A,b as E,G as S,C as O}from"./contract-appuri-c5ea176e.browser.esm-2sn-dwGV.js";import{C as D}from"./contract-interceptor-d7b164a7.browser.esm-amNiAGmN.js";import{C as v}from"./contract-platform-fee-9ec7bfc5.browser.esm-pm4iAqAu.js";import{C as F}from"./contract-roles-295c2434.browser.esm-MrfS3Zc3.js";import{C as V}from"./contract-sales-4df7a638.browser.esm-FYBVyfuS.js";import{D as _}from"./drop-claim-conditions-6010745a.browser.esm-1acMIwaL.js";import{S as B}from"./erc-20-standard-982f9b54.browser.esm-AHIUajbi.js";import"./index-S9by4JaH.js";import"./assertEnabled-528581b6.browser.esm-rgQcVLeZ.js";import"./setErc20Allowance-3795a3d6.browser.esm-oAahzjIT.js";import"./erc-20-68c6df6a.browser.esm-9FCA37ZX.js";const o=class o extends B{constructor(t,r,a){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},h=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,g=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new w(t,r,h,i,a);super(g,a,u);n(this,"claim",c((()=>{var t=this;return async function(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,a)}})()));n(this,"claimTo",c((()=>{var t=this;return async function(r,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return t.erc20.claimTo.prepare(r,a,{checkERC20Allowance:i})}})()));n(this,"delegateTo",c(async t=>m.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await p(t)]})));n(this,"burnTokens",c(async t=>this.erc20.burn.prepare(t)));n(this,"burnFrom",c(async(t,r)=>this.erc20.burnFrom.prepare(t,r)));this.abi=W.parse(h||[]),this.metadata=new A(this.contractWrapper,y,this.storage),this.app=new E(this.contractWrapper,this.metadata,this.storage),this.roles=new F(this.contractWrapper,o.contractRoles),this.encoder=new R(this.contractWrapper),this.estimator=new S(this.contractWrapper),this.events=new O(this.contractWrapper),this.sales=new V(this.contractWrapper),this.platformFees=new v(this.contractWrapper),this.interceptor=new D(this.contractWrapper),this.claimConditions=new _(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[await p(t)]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await p(t)])}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[T("transfer"),b])}async prepare(t,r,a){return m.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}};n(o,"contractRoles",C);let l=o;export{l as TokenDrop};
