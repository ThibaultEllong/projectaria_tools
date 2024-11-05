"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8545],{24635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"ARK/sdk/sdk","title":"About the SDK","description":"The Project Aria Client SDK provides versatile APIs to help you create your own machine perception Python applications with Project Aria glasses.","source":"@site/docs/ARK/sdk/sdk.mdx","sourceDirName":"ARK/sdk","slug":"/ARK/sdk/","permalink":"/projectaria_tools/docs/ARK/sdk/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/sdk.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"About the SDK"},"sidebar":"tutorialSidebar","previous":{"title":"Aria Studio","permalink":"/projectaria_tools/docs/ARK/aria_studio"},"next":{"title":"Setup Guide","permalink":"/projectaria_tools/docs/ARK/sdk/setup"}}');var s=r(74848),a=r(28453);r(98180),r(49489),r(7227);const i={sidebar_position:1,title:"About the SDK"},o="Project Aria Client SDK",l={},c=[{value:"Client SDK features",id:"client-sdk-features",level:3},{value:"Project Aria CLI",id:"project-aria-cli",level:3},{value:"This documentation covers:",id:"this-documentation-covers",level:3}];function d(e){const t={a:"a",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"project-aria-client-sdk",children:"Project Aria Client SDK"})}),"\n",(0,s.jsx)(t.p,{children:"The Project Aria Client SDK provides versatile APIs to help you create your own machine perception Python applications with Project Aria glasses."}),"\n",(0,s.jsx)(t.h3,{id:"client-sdk-features",children:"Client SDK features"}),"\n",(0,s.jsx)(t.p,{children:"After connecting your Project Aria glasses and PC via USB or WiFi, you will be able to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Retrieve device information, status and sensor calibration data"}),"\n",(0,s.jsx)(t.li,{children:"Start and stop recording"}),"\n",(0,s.jsx)(t.li,{children:"Configure, start and stop streaming from the glasses"}),"\n",(0,s.jsx)(t.li,{children:"Subscribe to streaming data from the glasses"}),"\n",(0,s.jsx)(t.li,{children:"Create time synchronized recordings between multiple devices using TICSync"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"project-aria-cli",children:"Project Aria CLI"}),"\n",(0,s.jsxs)(t.p,{children:["In addition to APIs and code samples, the SDK also provides ",(0,s.jsx)(t.a,{href:"/docs/ARK/sdk/cli",children:"Aria CLI"})," which allows you to control an Project Aria glasses and to stream its data without touching any code."]}),"\n",(0,s.jsx)(t.h3,{id:"this-documentation-covers",children:"This documentation covers:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/docs/ARK/sdk/setup",children:"Setup Guide"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Prerequisites"}),"\n",(0,s.jsx)(t.li,{children:"Download and install the Client SDK"}),"\n",(0,s.jsx)(t.li,{children:"Pair your Aria glasses to the computer"}),"\n",(0,s.jsx)(t.li,{children:"Extract SDK samples"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Code samples to demonstrate using the SDK to control Project Aria glasses and build you own real-time applications.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/device_connection",children:"Connection"}),": connect an Aria device to a computer, fetch the device information and status."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/device_recording",children:"Recording"}),": start and stop a recording via USB and Wi-Fi."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/streaming_subscribe",children:"Streaming Subscription"}),": subscribe to and unsubscribe from a streaming device"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/device_stream",children:"Streaming and Visualizing All Live Sensor Data"}),": programmatically start and stop a streaming session, add callbacks to visualize and manipulate the streamed data"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/undistort_rgb_image",children:"Streaming Undistorted RGB Image Using Calibration"}),": programmatically start and stop a streaming session, access sensor calibration and undistort an RGB live stream"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/ticsync_sample",children:"TICSync Time Synchronization"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Core Concepts","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/concepts/sdk_sensor_profiles",children:"Sensor Profiles"}),": access information about Aria recording profiles via the CLI or SDK"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/concepts/streaming_internals",children:"Streaming Internals"}),": deeper dives into how data is streamed"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/concepts/about_ticsync",children:"About TICSync"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/api_reference",children:"API References"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/cli/",children:"CLI documentation"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/sdk_troubleshooting",children:"SDK Troubleshooting"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If you run into any issues, please check out the ",(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/sdk/sdk_troubleshooting",children:"Troubleshooting page"})," or contact us through one of our ",(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/support",children:"Support channels"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7227:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:r,children:t})}},49489:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var n=r(96540),s=r(34164),a=r(24245),i=r(56347),o=r(36494),l=r(62814),c=r(45167),d=r(69900);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:r,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),j=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=r(11062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),s=o[r].value;s!==n&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function A(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(g,{...t,...e})]})}function k(e){const t=(0,b.default)();return(0,x.jsx)(A,{...e,children:u(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);