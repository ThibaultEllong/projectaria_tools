"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7420],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){return function(t){var r=d(t.components);return a.createElement(e,i({},t,{components:r}))}},d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=n,c=m["".concat(o,".").concat(u)]||m[u]||f[u]||i;return r?a.createElement(c,s(s({ref:t},p),{},{components:r})):a.createElement(c,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=x;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}x.displayName="MDXCreateElement"},35397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const i={sidebar_position:10,title:"MPS CLI"},o="MPS CLI",s={unversionedId:"ARK/mps/request_mps/mps_cli",id:"ARK/mps/request_mps/mps_cli",title:"MPS CLI",description:"Overview",source:"@site/docs/ARK/mps/request_mps/mps_cli.mdx",sourceDirName:"ARK/mps/request_mps",slug:"/ARK/mps/request_mps/mps_cli",permalink:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/mps/request_mps/mps_cli.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"MPS CLI"},sidebar:"tutorialSidebar",previous:{title:"Request MPS",permalink:"/projectaria_tools/docs/ARK/mps/request_mps/"},next:{title:"MPS CLI Getting Started",permalink:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_getting_started"}},l={},p=[{value:"Overview",id:"overview",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.mdx)(d,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"mps-cli"},"MPS CLI"),(0,n.mdx)("h2",{id:"overview"},"Overview"),(0,n.mdx)("p",null,"The Project Aria MPS Command Line Interface (MPS CLI) is part of Project Aria Tools (available on MacOS and Linux) that enables users to request ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/"},"Machine Perception Services (MPS)"),". ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/aria_studio"},"Aria Studio")," is a web-based application that builds on Aria MPS CLI capabilities."),(0,n.mdx)("p",null,"While research partners can use the ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/request_mps/desktop_mps"},"Desktop Companion app")," to request MPS, Aria MPS CLI and Aria Studio provide more features and can resume uploads if interrupted."),(0,n.mdx)("p",null,"MPS CLI features:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Request ",(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_formats/mps/slam/"},"SLAM"),", ",(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_formats/mps/mps_eye_gaze"},"Eye Gaze")," and ",(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_formats/mps/hand_tracking/"},"Hand Tracking")," data"),(0,n.mdx)("li",{parentName:"ul"},"Request ",(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_formats/mps/slam/mps_multi_slam"},"multi-sequence SLAM data")),(0,n.mdx)("li",{parentName:"ul"},"Auto run health checks prior to upload",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Recordings will not be uploaded if they are not valid for any of the MPS services requested"))),(0,n.mdx)("li",{parentName:"ul"},"Resumable uploads",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Uploads, interrupted for any reason, can be resumed within 24 hrs"),(0,n.mdx)("li",{parentName:"ul"},"Particularly useful for large VRS files"))),(0,n.mdx)("li",{parentName:"ul"},"Concurrent processing",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"CLI takes a list of directories/files as input and recursively finds all .vrs files to process concurrently"),(0,n.mdx)("li",{parentName:"ul"},"The number of concurrent processes for each stage can be modified in ",(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_guide#settings"},"Settings")))),(0,n.mdx)("li",{parentName:"ul"},"Automatically downloads outputs once processing is complete"),(0,n.mdx)("li",{parentName:"ul"},"Recordings are processed once",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"If the output directory already exists and contains the MPS results, processing is skipped"),(0,n.mdx)("li",{parentName:"ul"},"If the recording was processed in the past, the results will be downloaded without submitting the recording for processing again (unless --force is passed as an input)"))),(0,n.mdx)("li",{parentName:"ul"},"Uploaded data is stored for 30 days",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Additional MPS can be requested without needing to upload again"),(0,n.mdx)("li",{parentName:"ul"},"Data can be reprocessed without needing to upload again"))),(0,n.mdx)("li",{parentName:"ul"},"CLI can be integrated into your automated workflows",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"This includes ensuring that all commands and processes work without using the UI"),(0,n.mdx)("li",{parentName:"ul"},"See the ",(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_guide#command-line-reference"},"Command Line Reference")," for more details")))),(0,n.mdx)("p",null,"MPS CLI documentation:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_getting_started"},"Getting Started")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_guide"},"MPS CLI Guide"))),(0,n.mdx)("p",null,"Further resources:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/aria_studio"},"Aria Studio")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/mps/"},"About Project Aria Machine Perception Services")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_formats/mps/mps_summary"},"MPS Data Formats")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_utilities/visualization/visualization_python"},"Visualize MPS Using Python")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_utilities/visualization/visualization_cpp"},"Visualize MPS Using C++"))))}u.isMDXComponent=!0}}]);