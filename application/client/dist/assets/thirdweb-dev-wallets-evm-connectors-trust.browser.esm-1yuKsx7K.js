import{InjectedConnector as i}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-72PmM6LQ.js";import{o as e}from"./index-0T11UOAg.js";import"./url-a45219bd.browser.esm-Fcerb4CE.js";class f extends i{constructor(t){const s={...{name:"Trust",getProvider(){var r;function n(o){if(o!=null&&o.isTrust)return o}if(e(globalThis.window))return(r=globalThis.window.ethereum)!=null&&r.providers?globalThis.window.ethereum.providers.find(n):n(globalThis.window.ethereum)}},...t.options};super({chains:t.chains,options:s,connectorStorage:t.connectorStorage})}}export{f as TrustConnector};
