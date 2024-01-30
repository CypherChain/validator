import{W as I,d as P,a as c,w as _,_ as w,e as l,f as m,U as u,c as o,n as v,h as E,b as C,i as b,j as U,k as f,A,S as W}from"./index-0T11UOAg.js";import{g as R}from"./url-a45219bd.browser.esm-Fcerb4CE.js";var h=new WeakMap,d=new WeakMap,g=new WeakSet;class k extends I{constructor(t){let{chains:e,options:s}=t;super({chains:e,options:{reloadOnDisconnect:!1,...s}}),P(this,g),c(this,"id",_.coinbase),c(this,"name","Coinbase Wallet"),c(this,"ready",!0),w(this,h,{writable:!0,value:void 0}),w(this,d,{writable:!0,value:void 0}),c(this,"onAccountsChanged",i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:l(i[0])})}),c(this,"onChainChanged",i=>{const n=v(i),a=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:a}})}),c(this,"onDisconnect",()=>{this.emit("disconnect")})}async connect(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();this.setupListeners(),this.emit("message",{type:"connecting"});const s=await e.enable(),i=l(s[0]);let n=await this.getChainId(),a=this.isChainUnsupported(n);if(t&&n!==t)try{n=(await this.switchChain(t)).chainId,a=this.isChainUnsupported(n)}catch(r){console.error(`Connected but failed to switch to desired chain ${t}`,r)}return{account:i,chain:{id:n,unsupported:a},provider:new m(e)}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new u(e):e}}async disconnect(){if(!o(this,d))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});if(e.length===0)throw new Error("No accounts found");return l(e[0])}async getChainId(){const t=await this.getProvider();return v(t.chainId)}async getProvider(){var t;if(!o(this,d)){let e=(await E(()=>import("./index-FpgpVOf1.js").then(r=>r.i),__vite__mapDeps([0,1,2,3]))).default;typeof e!="function"&&typeof e.default=="function"&&(e=e.default),C(this,h,new e(this.options));const s=(t=o(this,h).walletExtension)==null?void 0:t.getChainId(),i=this.chains.find(r=>this.options.chainId?r.chainId===this.options.chainId:r.chainId===s)||this.chains[0],n=this.options.chainId||(i==null?void 0:i.chainId),a=this.options.jsonRpcUrl||(i==null?void 0:i.rpc[0]);C(this,d,o(this,h).makeWeb3Provider(a,n))}return o(this,d)}async getSigner(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[e,s]=await Promise.all([this.getProvider(),this.getAccount()]);return new m(e,t).getSigner(s)}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){const e=await this.getProvider(),s=b(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:s}]}),this.chains.find(i=>i.chainId===t)??{chainId:t,name:`Chain ${s}`,slug:`${s}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],testnet:!1,chain:"ethereum",shortName:"eth"}}catch(i){const n=this.chains.find(a=>a.chainId===t);if(!n)throw new U({chainId:t,connectorId:this.id});if(i.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:s,chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:R(n),blockExplorerUrls:this.getBlockExplorerUrls(n)}]}),n}catch(a){throw f(this,g,y).call(this,a)?new u(a):new A}throw f(this,g,y).call(this,i)?new u(i):new W(i)}}async setupListeners(){const t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)}async getQrUrl(){if(await this.getProvider(),!o(this,h))throw new Error("Coinbase Wallet SDK not initialized");return o(this,h).getQrUrl()}}function y(p){return/(user rejected)/i.test(p.message)}export{k as CoinbaseWalletConnector};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-FpgpVOf1.js","assets/index-0T11UOAg.js","assets/index-Z2SKtoWP.css","assets/callBound-nfEq_Ydq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
