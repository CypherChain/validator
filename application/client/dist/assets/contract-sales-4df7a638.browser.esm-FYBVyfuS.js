var c=Object.defineProperty;var n=(t,r,a)=>r in t?c(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;var e=(t,r,a)=>(n(t,typeof r!="symbol"?r+"":r,a),a);import{ab as s,s as i,T as o}from"./index-0T11UOAg.js";class u{constructor(r){e(this,"featureName",s.name);e(this,"setRecipient",i(async r=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[r]})));this.contractWrapper=r}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}}export{u as C};
