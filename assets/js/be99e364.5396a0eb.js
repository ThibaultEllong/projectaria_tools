"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7420],{64376:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"ARK/mps/request_mps/mps_cli","title":"MPS CLI","description":"Overview","source":"@site/docs/ARK/mps/request_mps/mps_cli.mdx","sourceDirName":"ARK/mps/request_mps","slug":"/ARK/mps/request_mps/mps_cli","permalink":"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/mps/request_mps/mps_cli.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"MPS CLI"},"sidebar":"tutorialSidebar","previous":{"title":"Request MPS","permalink":"/projectaria_tools/docs/ARK/mps/request_mps/"},"next":{"title":"MPS CLI Getting Started","permalink":"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_getting_started"}}');var t=i(74848),n=i(28453);const a={sidebar_position:10,title:"MPS CLI"},o="MPS CLI",l={},c=[{value:"Overview",id:"overview",level:2}];function d(e){const s={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"mps-cli",children:"MPS CLI"})}),"\n",(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(s.p,{children:["The Project Aria MPS Command Line Interface (MPS CLI) is part of Project Aria Tools (available on MacOS and Linux) that enables users to request ",(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/mps/",children:"Machine Perception Services (MPS)"}),". ",(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/aria_studio",children:"Aria Studio"})," is a web-based application that builds on Aria MPS CLI capabilities."]}),"\n",(0,t.jsxs)(s.p,{children:["While research partners can use the ",(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/mps/request_mps/desktop_mps",children:"Desktop Companion app"})," to request MPS, Aria MPS CLI and Aria Studio provide more features and can resume uploads if interrupted."]}),"\n",(0,t.jsx)(s.p,{children:"MPS CLI features:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Request ",(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/data_formats/mps/slam/",children:"SLAM"}),", ",(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/data_formats/mps/mps_eye_gaze",children:"Eye Gaze"})," and ",(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/data_formats/mps/hand_tracking/",children:"Hand Tracking"})," data"]}),"\n",(0,t.jsxs)(s.li,{children:["Request ",(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/data_formats/mps/slam/mps_multi_slam",children:"multi-sequence SLAM data"})]}),"\n",(0,t.jsxs)(s.li,{children:["Auto run health checks prior to upload","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Recordings will not be uploaded if they are not valid for any of the MPS services requested"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Resumable uploads","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Uploads, interrupted for any reason, can be resumed within 24 hrs"}),"\n",(0,t.jsx)(s.li,{children:"Particularly useful for large VRS files"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Concurrent processing","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"CLI takes a list of directories/files as input and recursively finds all .vrs files to process concurrently"}),"\n",(0,t.jsxs)(s.li,{children:["The number of concurrent processes for each stage can be modified in ",(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_guide#settings",children:"Settings"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"Automatically downloads outputs once processing is complete"}),"\n",(0,t.jsxs)(s.li,{children:["Recordings are processed once","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"If the output directory already exists and contains the MPS results, processing is skipped"}),"\n",(0,t.jsx)(s.li,{children:"If the recording was processed in the past, the results will be downloaded without submitting the recording for processing again (unless --force is passed as an input)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Uploaded data is stored for 30 days","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Additional MPS can be requested without needing to upload again"}),"\n",(0,t.jsx)(s.li,{children:"Data can be reprocessed without needing to upload again"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["CLI can be integrated into your automated workflows","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"This includes ensuring that all commands and processes work without using the UI"}),"\n",(0,t.jsxs)(s.li,{children:["See the ",(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_guide#command-line-reference",children:"Command Line Reference"})," for more details"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"MPS CLI documentation:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_getting_started",children:"Getting Started"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_guide",children:"MPS CLI Guide"})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Further resources:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/aria_studio",children:"Aria Studio"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/mps/",children:"About Project Aria Machine Perception Services"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/data_formats/mps/mps_summary",children:"MPS Data Formats"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/data_utilities/visualization/visualization_python",children:"Visualize MPS Using Python"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/projectaria_tools/docs/data_utilities/visualization/visualization_cpp",children:"Visualize MPS Using C++"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>o});var r=i(96540);const t={},n=r.createContext(t);function a(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);