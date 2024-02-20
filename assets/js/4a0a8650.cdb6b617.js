"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8430],{15680:(e,t,i)=>{i.r(t),i.d(t,{MDXContext:()=>u,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>d});var a=i(96540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},r.apply(this,arguments)}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=a.createContext({}),d=function(e){return function(t){var i=m(t.components);return a.createElement(e,r({},t,{components:i}))}},m=function(e){var t=a.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=m(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(i),p=n,c=d["".concat(o,".").concat(p)]||d[p]||v[p]||r;return i?a.createElement(c,l(l({ref:t},u),{},{components:i})):a.createElement(c,l({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<r;u++)o[u]=i[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}f.displayName="MDXCreateElement"},36357:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=i(58168),n=(i(96540),i(15680));const r={sidebar_position:10,title:"Python Visualization"},o="Project Aria Tools Python Visualization",l={unversionedId:"data_utilities/visualization/visualization_python",id:"data_utilities/visualization/visualization_python",title:"Python Visualization",description:"Overview",source:"@site/docs/data_utilities/visualization/visualization_python.mdx",sourceDirName:"data_utilities/visualization",slug:"/data_utilities/visualization/visualization_python",permalink:"/projectaria_tools/docs/data_utilities/visualization/visualization_python",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/visualization/visualization_python.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Python Visualization"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/projectaria_tools/docs/data_utilities/getting_started"},next:{title:"C++ Visualization",permalink:"/projectaria_tools/docs/data_utilities/visualization/visualization_cpp"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Run Aria Sensor Viewer",id:"run-aria-sensor-viewer",level:2},{value:"Run MPS Viewer",id:"run-mps-viewer",level:2},{value:"An introduction to Rerun",id:"an-introduction-to-rerun",level:2}],d={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.mdx)(m,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"project-aria-tools-python-visualization"},"Project Aria Tools Python Visualization"),(0,n.mdx)("h2",{id:"overview"},"Overview"),(0,n.mdx)("p",null,"This page introduces our core Python visualization tools, developed with ",(0,n.mdx)("a",{parentName:"p",href:"#rerun"},"Rerun"),", and available as part of Project Aria Tools."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#viewer_aria_sensors"},"Aria Sensor Viewer"),": 3D visualization of Aria sensors"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#viewer_mps"},"MPS Viewer"),": renders MPS metadata (point cloud, device trajectory and wearer eye gaze)")),(0,n.mdx)("h2",{id:"requirements"},"Requirements"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"docs/data_utilities/installation/installation_python#install-via-virtual-environment"},"Python Project Aria Tools is installed")),(0,n.mdx)("li",{parentName:"ul"},"MPS Sample data",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_utilities/installation/download_mps_sample_data"},"Official Sample Data")," - most up to date sample data"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/projectaria_tools/tree/main/data/mps_sample"},"GitHub Repo Sample dataset")," - useful for unit testing etc. It will work, but is not maintained and updated the way the official sample data is")))),(0,n.mdx)("div",{id:"viewer_aria_sensors"}),(0,n.mdx)("h2",{id:"run-aria-sensor-viewer"},"Run Aria Sensor Viewer"),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"viewer_aria_sensors"),"  displays the relative position and orientation of all most of Project Aria glasses sensors (cameras, IMUs, microphones, magnetometer & barometer) in a common reference."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"viewer_aria_sensors --vrs $MPS_SAMPLE_PATH/sample.vrs\n")),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"Aria Sensors Viewer",src:i(65490).A,width:"1920",height:"962"})),(0,n.mdx)("admonition",{type:"tip"},(0,n.mdx)("ul",{parentName:"admonition"},(0,n.mdx)("li",{parentName:"ul"},"Selecting the different sensors in the Blueprint left column will help you quickly identify where a given sensor is located"))),(0,n.mdx)("div",{id:"viewer_mps"}),(0,n.mdx)("h2",{id:"run-mps-viewer"},"Run MPS Viewer"),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"viewer_mps")," displays an interactive visualization of the Aria VRS RGB frames along with MPS data (Closed loop trajectory, Global point cloud, Wearer eye gaze).\nAs you are playing or moving along the timeline, you can see the position of the camera and the wearer eye gaze direction at the timestamp of your choice."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"\nviewer_mps --vrs $MPS_SAMPLE_PATH/sample.vrs\n\nor to specify each MPS file\n\nviewer_mps --vrs $MPS_SAMPLE_PATH/sample.vrs \\\n--trajectory $MPS_SAMPLE_PATH/closed_loop_trajectory.csv \\\n--points $MPS_SAMPLE_PATH/global_points.csv.gz \\\n--eyegaze $MPS_SAMPLE_PATH/generalized_eye_gaze.csv\n")),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"MPS Visualizer",src:i(69617).A,width:"1920",height:"987"})),(0,n.mdx)("admonition",{type:"tip"},(0,n.mdx)("ul",{parentName:"admonition"},(0,n.mdx)("li",{parentName:"ul"},"Switching between device_time and timestamp timeline allows you to retrieve a specific timestamp for the VRS sequence or MPS annotation"))),(0,n.mdx)("div",{id:"rerun"}),(0,n.mdx)("h2",{id:"an-introduction-to-rerun"},"An introduction to Rerun"),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"https://www.rerun.io/"},"Rerun")," is an open source SDK and engine for visualizing and interacting with multi modal data streams. It's usable from Python, Rust and C++. Rerun consists in a log API and a visualizer."),(0,n.mdx)("p",null,"The main GUI sections of the Rerun visualizer are:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"BluePrint",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"A: User defined Scene Graph (Entities and hierarchy you define)"),(0,n.mdx)("li",{parentName:"ul"},"B: Visual view of the Scene Graph (User customizable)"))),(0,n.mdx)("li",{parentName:"ul"},"Timeline",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"C: Interactive navigation and inspection of log events on multiple timeline (log, frame, or device time)"))),(0,n.mdx)("li",{parentName:"ul"},"Visibility and property control",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"D: Fine grained control and inspection of Entities/Components")))),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"Rerun Visualizer Interface",src:i(79953).A,width:"1952",height:"1196"})))}p.isMDXComponent=!0},79953:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/rerun-intro-8864d1f6fc4a245fecaaa3d0a5c2a39f.png"},69617:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/rerun-mps-85c8538d570aa70830d3eb25c1c30d99.png"},65490:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/rerun-sensors-cbe9cd476064a1b4e18a683e8e9cf5dd.png"}}]);