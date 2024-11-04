"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8913],{81431:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"data_utilities/installation/download_codebase","title":"Download Codebase","description":"Supported Platforms","source":"@site/docs/data_utilities/installation/download_codebase.mdx","sourceDirName":"data_utilities/installation","slug":"/data_utilities/installation/download_codebase","permalink":"/projectaria_tools/docs/data_utilities/installation/download_codebase","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/installation/download_codebase.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Download Codebase"},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/projectaria_tools/docs/data_utilities/getting_started"},"next":{"title":"Download MPS Sample Data","permalink":"/projectaria_tools/docs/data_utilities/installation/download_mps_sample_data"}}');var r=a(74848),o=a(28453),l=a(49489),s=a(7227);const i={sidebar_position:10,title:"Download Codebase"},u="How to Download Project Aria Tools",c={},d=[{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Stable versus Develop",id:"stable-versus-develop",level:2},{value:"Download codebase",id:"download-codebase",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-to-download-project-aria-tools",children:"How to Download Project Aria Tools"})}),"\n",(0,r.jsx)(t.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,r.jsx)(t.p,{children:"The codebase is supported on:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["x64 Linux distributions of:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fedora 36, 37, 38"}),"\n",(0,r.jsx)(t.li,{children:"Ubuntu focal (20.04 LTS) and jammy (22.04 LTS)"}),"\n",(0,r.jsx)(t.li,{children:"Windows (MSVC 2019/2022)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Mac Intel or Mac ARM-based (M1) with MacOS 11 (Big Sur) or newer"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"stable-versus-develop",children:"Stable versus Develop"}),"\n",(0,r.jsxs)(t.p,{children:["Access the latest stable version of Project Aria Tools with git TAGS. The develop version is pushed continuously to the ",(0,r.jsx)(t.code,{children:"main"})," branch."]}),"\n",(0,r.jsx)(t.h2,{id:"download-codebase",children:"Download codebase"}),"\n",(0,r.jsxs)(l.default,{groupId:"programming-language",children:[(0,r.jsx)(s.default,{value:"stable",label:"Stable",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"mkdir -p $HOME/Documents/projectaria_sandbox\ncd $HOME/Documents/projectaria_sandbox\n\ngit clone https://github.com/facebookresearch/projectaria_tools.git -b 1.5.5\n"})})}),(0,r.jsx)(s.default,{value:"develop",label:"Develop",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"mkdir -p $HOME/Documents/projectaria_sandbox\ncd $HOME/Documents/projectaria_sandbox\n\ngit clone https://github.com/facebookresearch/projectaria_tools.git -b main\n"})})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},7227:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var o=a(74848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:a,children:t})}},49489:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(96540),r=a(34164),o=a(24245),l=a(56347),s=a(36494),i=a(62814),u=a(45167),c=a(69900);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=h({queryString:a,groupId:r}),[f,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),v=(()=>{const e=u??f;return b({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=a(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function x(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),r=s[a].value;r!==n&&(u(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:o}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function _(e){const t=(0,m.default)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>s});var n=a(96540);const r={},o=n.createContext(r);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);