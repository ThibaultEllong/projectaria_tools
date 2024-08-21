"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4277],{72664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(74848),a=n(28453);const i={sidebar_position:1,title:"Aria Synthetic Environments Dataset"},r=void 0,o={id:"open_datasets/aria_synthetic_environments_dataset/aria_synthetic_environments_dataset",title:"Aria Synthetic Environments Dataset",description:"Overview",source:"@site/docs/open_datasets/aria_synthetic_environments_dataset/aria_synthetic_environments_dataset.mdx",sourceDirName:"open_datasets/aria_synthetic_environments_dataset",slug:"/open_datasets/aria_synthetic_environments_dataset/",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_synthetic_environments_dataset/aria_synthetic_environments_dataset.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Aria Synthetic Environments Dataset"},sidebar:"tutorialSidebar",previous:{title:"ADT Challenges",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/adt_challenges"},next:{title:"Getting Started",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"About the data",id:"about-the-data",level:2},{value:"<strong>Dataset Contents</strong>",id:"dataset-contents",level:2},{value:"<strong>Dataset Statistics</strong>",id:"dataset-statistics",level:2},{value:"Documentation",id:"documentation",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"Project Aria Tools provides Python and C++ APIs to access the Aria Synthetic Environments (ASE) dataset."}),"\n",(0,s.jsx)(t.h2,{id:"about-the-data",children:"About the data"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.projectaria.com/datasets/ase/",children:"Aria Synthetic Environments (ASE)"})," is a large scale dataset of 100K unique procedurally-generated scenes of interior layouts of apartments filled with 3D objects, and simulated with the sensor characteristics of Aria glasses. For each scene we have the rendering of a person walking around the synthetically generated rooms of the layout. These rooms vary from living rooms, bedrooms & kitchens to bathrooms. In addition to the renders, each of these scenes come with semi-dense maps for the Aria walkthrough, which are aligned to the Ground Truth (GT) scene layout."]}),"\n",(0,s.jsx)(t.p,{children:"This dataset was created to provide the wider research community with a dataset large enough to surface new challenges and research opportunities for first person object detection and tracking that had not been feasible."}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_challenges",children:"ASE: Scene Reconstruction Challenge"}),", we invite researchers to train full scene structured language description models, drawing from the 100K annotated scenes, and then test their models on 1K test scenes provided in the challenge."]}),"\n",(0,s.jsx)(t.h2,{id:"dataset-contents",children:(0,s.jsx)(t.strong,{children:"Dataset Contents"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"100,000 unique multi-room interior scenes"}),"\n",(0,s.jsx)(t.li,{children:"Simulated with realistic device trajectories"}),"\n",(0,s.jsx)(t.li,{children:"Across ~2-minute trajectories"}),"\n",(0,s.jsx)(t.li,{children:"Populated with ~8000 3D objects"}),"\n",(0,s.jsx)(t.li,{children:"With semi-dense map representations"}),"\n",(0,s.jsxs)(t.li,{children:["Annotated using ASE Scene Language","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"User oriented natural language mapping with architectural features, such as doors, windows and pillars, described with a CAD-like language that includes the feature type, location and dimensions"}),"\n",(0,s.jsx)(t.li,{children:"Unlocks new exciting ways to tackle research challenges related to reconstruction and detection tasks"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Simulated sensor data per sequence"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"1 x outward-facing RGB camera stream"}),"\n",(0,s.jsx)(t.li,{children:"Simulated Aria camera & lens characteristics"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Ground Truth Annotations"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"6DoF camera trajectory"}),"\n",(0,s.jsx)(t.li,{children:"3D floor plan in Euston Structure Scene Language (SSL) format"}),"\n",(0,s.jsxs)(t.li,{children:["2D instance segmentation","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"With per-scene mappings from the object instance image IDs to object classes"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"2D depth map"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"dataset-statistics",children:(0,s.jsx)(t.strong,{children:"Dataset Statistics"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Number of scenes: 100K"}),"\n",(0,s.jsx)(t.li,{children:"Number of images: 58M+"}),"\n",(0,s.jsxs)(t.li,{children:["Trajectories","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Total time: 67 days"}),"\n",(0,s.jsx)(t.li,{children:"Total distance: London -> San Francisco(7800 km)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Rooms: Up to 5 complex Manhattan rooms","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"All surfaces in the world are aligned with three dominant directions, typically corresponding to the X, Y, and Z axes"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Dataset size: ~23TB"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"documentation",children:"Documentation"}),"\n",(0,s.jsx)(t.p,{children:"The ASE section of this wiki covers:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started",children:"Getting started"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A quickstart tutorial for installing the necessary tooling, download the dataset and visualize the data"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_download_dataset",children:"Dataset download"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A walkthrough using ",(0,s.jsx)(t.code,{children:"aria_synthetic_environments_downloader "}),"to download the ASE dataset."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_format",children:"Data Format"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Aria Synthetic Environments (ASE) data formats and organization"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_tools",children:"Data Tools and Visualization"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Data helper tools"}),"\n",(0,s.jsx)(t.li,{children:"Visualization notebook"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_challenges",children:"ASE Scene Reconstruction 2023-4 Challenge"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);