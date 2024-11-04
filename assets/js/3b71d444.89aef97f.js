"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9556],{83157:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"ARK/sdk/concepts/about_ticsync","title":"About TICSync","description":"What is TICSync","source":"@site/docs/ARK/sdk/concepts/about_ticsync.mdx","sourceDirName":"ARK/sdk/concepts","slug":"/ARK/sdk/concepts/about_ticsync","permalink":"/projectaria_tools/docs/ARK/sdk/concepts/about_ticsync","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/concepts/about_ticsync.mdx","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_position":30,"title":"About TICSync"},"sidebar":"tutorialSidebar","previous":{"title":"Access Sensor Profiles","permalink":"/projectaria_tools/docs/ARK/sdk/concepts/sdk_sensor_profiles"},"next":{"title":"Time Synchronization","permalink":"/projectaria_tools/docs/ARK/sdk/ticsync"}}');var i=s(74848),r=s(28453);const a={sidebar_position:30,title:"About TICSync"},o="About TICSync",c={},l=[{value:"What is TICSync",id:"what-is-ticsync",level:2},{value:"How Project Aria uses TICSync",id:"how-project-aria-uses-ticsync",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"about-ticsync",children:"About TICSync"})}),"\n",(0,i.jsx)(t.h2,{id:"what-is-ticsync",children:"What is TICSync"}),"\n",(0,i.jsx)(t.p,{children:"TICSync is an extremely efficient algorithm for learning the mapping between distributed clocks, which typically achieves better than millisecond accuracy within just a few seconds. It works by estimating clock offset and skew between itself (the host) and a device (Aria leader or server)."}),"\n",(0,i.jsx)(t.p,{children:"The host obtains time triplets from two-way communication (hostRequestTime, deviceTime, hostReceiveTime) \u2013 and gets a first-order (offset, skew) estimate that converges quickly and is usually stable after a couple dozen samples. The samples get added to the estimator so that estimates keep improving over time and converge very quickly."}),"\n",(0,i.jsx)(t.p,{children:"The accuracy of this method, using Project Aria glasses with the Client SDK, has been tested to be better than 1ms on average after approximately 45 seconds warm-up."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"TICSync diagram showing the relationship between Client and Server devices",src:s(71504).A+"",width:"996",height:"592"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Figure 1:"})," True Time Diagram, Alastair Harrison and Paul Newman, TICSync: Knowing when things happened, IEEE International Conference on Robotics and Automation, 2011"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://ieeexplore.ieee.org/abstract/document/5980112",children:"TICSync: Knowing when things happened"})," paper describes in more detail how the algorithm works, provides a mathematical analysis and results with real experiments."]}),"\n",(0,i.jsx)(t.h2,{id:"how-project-aria-uses-ticsync",children:"How Project Aria uses TICSync"}),"\n",(0,i.jsx)(t.p,{children:"TICSync can be used to capture time-synchronized data between multiple Project Aria glasses (and potentially other devices) on the one Wi-Fi network via TICSync. TICSync recordings are initiated via the Project Aria Client SDK. Using the Aria hotspot feature, one pair of glasses (server) acts as a Wi-Fi access point that forms a network between all glasses. Time requests from all other glasses go to the server/leader device, creating a synchronized time reference."}),"\n",(0,i.jsx)(t.p,{children:"Further resources:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/ticsync",children:"How to Create Time Synchronized Recordings with Multiple Aria Glasses"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/ticsync_sample",children:"TICSync Code Snippet"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71504:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ticsync_diagram-5170706ac2ab24c18aa8c93134e9f12e.png"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);