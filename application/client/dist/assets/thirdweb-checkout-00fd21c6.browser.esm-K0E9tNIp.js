import{cG as a,G as r}from"./index-0T11UOAg.js";const h="https://paper.xyz/api",u="2022-08-12",o=`${h}/${u}/platform/thirdweb`,s={[a.Mainnet]:"Ethereum",[a.Goerli]:"Goerli",[a.Polygon]:"Polygon",[a.Mumbai]:"Mumbai",[a.Avalanche]:"Avalanche"};function d(e){return r(e in s),s[e]}async function l(e,t){const i=d(t),c=await(await fetch(`${o}/register-contract?contractAddress=${e}&chain=${i}`)).json();return r(c.result.id),c.result.id}const p={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};async function P(e,t){const n=await(await fetch(`${o}/checkout-link-intent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:e,...p,...t,metadata:{...t.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!t.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})})).json();return r(n.checkoutLinkIntentUrl),n.checkoutLinkIntentUrl}class I{constructor(t){this.contractWrapper=t}async getCheckoutId(){return l(this.contractWrapper.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch{return!1}}async createLinkIntent(t){return await P(await this.getCheckoutId(),t)}}export{I as P};
