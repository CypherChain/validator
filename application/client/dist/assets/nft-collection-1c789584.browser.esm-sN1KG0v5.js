var d=Object.defineProperty;var g=(s,a,t)=>a in s?d(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;var e=(s,a,t)=>(g(s,typeof a!="symbol"?a+"":a,t),t);import{cE as l,a5 as C,D as W,cQ as f,a6 as w,bn as y,b7 as T,s as c,T as b}from"./index-0T11UOAg.js";import{a as R,b as E,G as S,C as A}from"./contract-appuri-c5ea176e.browser.esm-2sn-dwGV.js";import{C as B}from"./contract-interceptor-d7b164a7.browser.esm-amNiAGmN.js";import{C as M,a as O}from"./contract-owner-50abb8cd.browser.esm-_p1tQHvJ.js";import{C as v}from"./contract-platform-fee-9ec7bfc5.browser.esm-pm4iAqAu.js";import{C as I}from"./contract-roles-295c2434.browser.esm-MrfS3Zc3.js";import{C as P}from"./contract-sales-4df7a638.browser.esm-FYBVyfuS.js";import{S as k}from"./erc-721-standard-e6dc10bd.browser.esm-IF8yCe7s.js";import{a as x}from"./erc-721-73df8a80.browser.esm-gkU292lP.js";import"./setErc20Allowance-3795a3d6.browser.esm-oAahzjIT.js";import"./QueryParams-83e678cb.browser.esm-LTENBzys.js";import"./index-S9by4JaH.js";import"./assertEnabled-528581b6.browser.esm-rgQcVLeZ.js";import"./drop-claim-conditions-6010745a.browser.esm-1acMIwaL.js";const o=class o extends k{constructor(t,r,n){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,i,h,n);super(u,n,m);e(this,"mint",c(async t=>this.erc721.mint.prepare(t)));e(this,"mintTo",c(async(t,r)=>this.erc721.mintTo.prepare(t,r)));e(this,"mintBatch",c(async t=>this.erc721.mintBatch.prepare(t)));e(this,"mintBatchTo",c(async(t,r)=>this.erc721.mintBatchTo.prepare(t,r)));e(this,"burn",c(t=>this.erc721.burn.prepare(t)));this.abi=W.parse(i||[]),this.metadata=new R(this.contractWrapper,f,this.storage),this.app=new E(this.contractWrapper,this.metadata,this.storage),this.roles=new I(this.contractWrapper,o.contractRoles),this.royalties=new M(this.contractWrapper,this.metadata),this.sales=new P(this.contractWrapper),this.encoder=new w(this.contractWrapper),this.estimator=new S(this.contractWrapper),this.events=new A(this.contractWrapper),this.platformFees=new v(this.contractWrapper),this.interceptor=new B(this.contractWrapper),this.signature=new x(this.contractWrapper,this.storage),this.owner=new O(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[y("transfer"),T])}async getMintTransaction(t,r){return this.erc721.getMintTransaction(t,r)}async prepare(t,r,n){return b.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}};e(o,"contractRoles",l);let p=o;export{p as NFTCollection};