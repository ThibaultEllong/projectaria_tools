"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5325],{4401:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"ARK/sdk/setup","title":"Setup Guide","description":"Overview","source":"@site/docs/ARK/sdk/setup.mdx","sourceDirName":"ARK/sdk","slug":"/ARK/sdk/setup","permalink":"/projectaria_tools/docs/ARK/sdk/setup","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/setup.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Setup Guide"},"sidebar":"tutorialSidebar","previous":{"title":"About the SDK","permalink":"/projectaria_tools/docs/ARK/sdk/"},"next":{"title":"Code Samples","permalink":"/projectaria_tools/docs/ARK/sdk/samples/"}}');var s=r(74848),i=r(28453),a=r(98180);r(49489),r(7227);const l={sidebar_position:5,title:"Setup Guide"},o="Project Aria Client SDK and CLI Setup Guide",c={},d=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Platforms",id:"platforms",level:3},{value:"Software",id:"software",level:3},{value:"Environment Setup",id:"environment-setup",level:2},{value:"Step 1: Install SDK from PyPI",id:"step-1-install-sdk-from-pypi",level:2},{value:"Create a virtual environment",id:"create-a-virtual-environment",level:3},{value:"Install the Client SDK and CLI",id:"install-the-client-sdk-and-cli",level:3},{value:"Step 2: Run Project Aria Doctor utility",id:"step-2-run-project-aria-doctor-utility",level:2},{value:"Step 3: Pair Aria Glasses with your computer",id:"step-3-pair-aria-glasses-with-your-computer",level:2},{value:"Step 4: Extract and explore the sample apps",id:"step-4-extract-and-explore-the-sample-apps",level:2},{value:"Useful Links",id:"useful-links",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"project-aria-client-sdk-and-cli-setup-guide",children:"Project Aria Client SDK and CLI Setup Guide"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"The page provides instructions about how to get started with the Project Aria Client SDK, covering:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#requirements",children:"Hardware and software requirements"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#install",children:"Downloading and installing the SDK"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Installing ",(0,s.jsx)(n.code,{children:"projectaria_client_sdk"})," via pip will also add the ",(0,s.jsx)(n.a,{href:"/projectaria_tools/docs/ARK/sdk/cli/",children:"Aria CLI"})," to your PATH"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#doctor",children:"Running Project Aria Doctor to setup your computer and fix common issues"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#pair",children:"Pairing your Aria Glasses"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#explore",children:"Extracting and exploring the sample apps"})}),"\n"]}),"\n",(0,s.jsx)("div",{id:"requirements"}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.h3,{id:"hardware",children:"Hardware"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Project Aria glasses that have:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Completed full device setup using the ",(0,s.jsx)(n.a,{href:"/docs/ARK/about_ARK#mobile-companion-app-requirements",children:"Aria Mobile Companion App"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/ARK/sw_release_notes",children:"Latest up-to-date OS"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["If you want to stream over Wi-Fi, you'll need a router, such as Asus, Netgear or TP-Link, that has:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No firewall"}),"\n",(0,s.jsxs)(n.li,{children:["Supports Wi-Fi 6","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"So that the glasses can connect to the 5GHz band when streaming over Wi-Fi"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"The Client SDK does not currently support streaming over corporate, university or public networks. Those networks are protected by many layers of security and firewalls. We recommend using one of the recommended routers listed above to stream over Wi-Fi."})}),"\n",(0,s.jsx)(n.h3,{id:"platforms",children:"Platforms"}),"\n",(0,s.jsx)(n.p,{children:"The codebase is supported on the following platforms:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["x64 Linux distributions of:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fedora 36 or newer"}),"\n",(0,s.jsx)(n.li,{children:"Ubuntu jammy (22.04) or newer"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Mac Intel or Mac ARM-based (M1) with MacOS 11 (Big Sur) or newer"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"software",children:"Software"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Python 3 with versions 3.8.10+","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Python 3.9+ if you want to use the ",(0,s.jsx)(n.code,{children:"device_stream"})," code sample due to the ",(0,s.jsx)(n.code,{children:"fastplotlib"})," dependency or if you want to use Jupyter notebooks"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"Python 3 download page"})}),"\n",(0,s.jsxs)(n.li,{children:["To check which version of Python 3 you have, use ",(0,s.jsx)(n.code,{children:"python3 --version"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://developer.android.com/studio/command-line/adb",children:"ADB"})," (optional)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In addition to the CLI, you can use ADB to interact with Aria glasses"}),"\n",(0,s.jsxs)(n.li,{children:["ADB is one of the ways that you can ",(0,s.jsx)(n.a,{href:"/docs/ARK/ARK_quickstart#download-data",children:"download Aria data"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("div",{id:"install"}),"\n",(0,s.jsx)(n.h2,{id:"environment-setup",children:"Environment Setup"}),"\n",(0,s.jsx)(n.h2,{id:"step-1-install-sdk-from-pypi",children:"Step 1: Install SDK from PyPI"}),"\n",(0,s.jsx)(n.h3,{id:"create-a-virtual-environment",children:"Create a virtual environment"}),"\n",(0,s.jsxs)(n.p,{children:["When using ",(0,s.jsx)(n.code,{children:"pip"}),", it is best practice to use a virtual environment. This will keep all the modules under one folder and will not break your local environment. Use the following command with your version of Python3."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python3 -m venv ~/venv\n"})}),"\n",(0,s.jsx)(n.h3,{id:"install-the-client-sdk-and-cli",children:"Install the Client SDK and CLI"}),"\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.code,{children:"projectaria_client_sdk"})," with pip"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source ~/venv/bin/activate\n\npython3 -m pip install projectaria_client_sdk --no-cache-dir\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-2-run-project-aria-doctor-utility",children:"Step 2: Run Project Aria Doctor utility"}),"\n",(0,s.jsx)(n.p,{children:"The Project Aria Doctor utility can help detect and resolve common issues connecting and streaming from the glasses."}),"\n",(0,s.jsx)(n.p,{children:"Run the utility and follow the prompts to resolve any issues."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"aria-doctor\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["If you're on MacOS and lose internet connection while streaming, run ",(0,s.jsx)(n.code,{children:"aria-doctor"})," again."]})}),"\n",(0,s.jsx)("div",{id:"pair"}),"\n",(0,s.jsx)(n.h2,{id:"step-3-pair-aria-glasses-with-your-computer",children:"Step 3: Pair Aria Glasses with your computer"}),"\n",(0,s.jsx)(n.p,{children:"Pairing your Aria glasses to your computer allows the Client SDK and CLI to control the glasses. A pair of Aria glasses can be paired to multiple computers."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Turn on your Aria glasses and connect it to your computer using the provided USB cable"}),"\n",(0,s.jsx)(n.li,{children:"Open the Mobile Companion app on your phone"}),"\n",(0,s.jsx)(n.li,{children:"On your computer, run:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"aria auth pair\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["A prompt should then appear in the Mobile app, tap ",(0,s.jsx)(n.strong,{children:"Approve"})," to pair your glasses","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The hash in the terminal and the app should be the same"}),"\n",(0,s.jsxs)(n.li,{children:["View (or revoke) certificates by going to ",(0,s.jsx)(n.a,{href:"/docs/ARK/mobile_companion_app#aria-device-settings",children:"Device Settings"})]}),"\n",(0,s.jsx)(n.li,{children:"The Client SDK Certificate will remain valid until you manually revoke it or factory reset your glasses"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{width:"30%",height:"30%",src:(0,a.default)("img/ARK/sdk/clientsdk.png"),alt:"Companion App Client SDK pairing"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["At this point, you can now use the ",(0,s.jsx)(n.a,{href:"/projectaria_tools/docs/ARK/sdk/cli/",children:"Aria CLI"})," to interact with you Aria glasses."]})}),"\n",(0,s.jsx)("div",{id:"explore"}),"\n",(0,s.jsx)(n.h2,{id:"step-4-extract-and-explore-the-sample-apps",children:"Step 4: Extract and explore the sample apps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Extract the Client SDK\xa0code samples (here to your home directory)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python -m aria.extract_sdk_samples --output ~\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Navigate to the sample folder"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/projectaria_client_sdk_samples\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Install necessary dependencies:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python3 -m pip install -r requirements.txt\n"})}),"\n",(0,s.jsxs)(n.p,{children:["All code samples can be run from ",(0,s.jsx)(n.code,{children:"cd ~/projectaria_client_sdk_samples"}),", with the exception of the Time Synchronization TICSync code samples. To use TICSync, go to ",(0,s.jsx)(n.code,{children:"cd ~/projectaria_client_sdk_samples/ticsync"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/",children:"Code Samples"})," to explore Aria Client SDK features."]}),"\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.a,{href:"/projectaria_tools/docs/ARK/sdk/concepts/streaming_internals",children:"Streaming Internals"})," to understand how streaming works and how to configure your own streaming setup."]}),"\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.a,{href:"/projectaria_tools/docs/ARK/sdk/ticsync",children:"Time Synchronization"})," for how to create recordings with multiple Project Aria glasses."]}),"\n",(0,s.jsxs)(n.p,{children:["If you encounter any issues please run ",(0,s.jsx)(n.code,{children:"aria-doctor"})," in a separate terminal or check out ",(0,s.jsx)(n.a,{href:"/docs/ARK/sdk/sdk_troubleshooting",children:"troubleshooting"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You can check your Aria glasses' recording or streaming status in the ",(0,s.jsx)(n.a,{href:"/docs/ARK/mobile_companion_app",children:"Mobile Companion app"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"The Client SDK does not currently support streaming over corporate, university or public networks. Those networks are protected by many layers of security and firewalls. We recommend using one of the recommended routers listed above to stream over Wi-Fi."})}),"\n",(0,s.jsx)(n.h2,{id:"useful-links",children:"Useful Links"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/ARK/sdk/api_reference",children:"SDK API Reference"})," - full list of APIs"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/ARK/sdk/cli/api_reference",children:"CLI Command Reference"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/ARK/sdk/sdk_troubleshooting",children:"SDK & CLI Troubleshooting"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},7227:(e,n,r)=>{r.r(n),r.d(n,{default:()=>a});r(96540);var t=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:r,children:n})}},49489:(e,n,r)=>{r.r(n),r.d(n,{default:()=>w});var t=r(96540),s=r(34164),i=r(24245),a=r(56347),l=r(36494),o=r(62814),c=r(45167),d=r(69900);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,i=h(e),[a,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:r,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),f=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=r(11062);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function g(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),s=l[r].value;s!==t&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,v.jsx)(g,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function w(e){const n=(0,j.default)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);