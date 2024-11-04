"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4283],{77507:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"open_datasets/ego-exo4d/ego-exo4d","title":"Ego-Exo4D Dataset","description":"Ego-Exo4D is a foundational dataset for research on video learning and multimodal perception. The open dataset was released in November 2023 and in March 2024 was updated to include more data, more annotations, and more modalities. Ego-Exo4D comes from years of collaboration between Meta\u2019s FAIR (Fundamental Artificial Intelligence Research), Meta\u2019s Project Aria, and 15 university partners. Ego-Exo4D is unique because of its simultaneous capture of:","source":"@site/docs/open_datasets/ego-exo4d/ego-exo4d.mdx","sourceDirName":"open_datasets/ego-exo4d","slug":"/open_datasets/ego-exo4d/","permalink":"/projectaria_tools/docs/open_datasets/ego-exo4d/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/ego-exo4d/ego-exo4d.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Ego-Exo4D Dataset"},"sidebar":"tutorialSidebar","previous":{"title":"ASE Challenges","permalink":"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_challenges"},"next":{"title":"Ego-Exo4D Data Format and Loader","permalink":"/projectaria_tools/docs/open_datasets/ego-exo4d/ego-exo4d_data_format"}}');var r=t(74848),n=t(28453);const s={sidebar_position:10,title:"Ego-Exo4D Dataset"},i=void 0,c={},d=[{value:"Resources:",id:"resources",level:3},{value:"Ego-Exo4D resources on Project Aria Tools",id:"ego-exo4d-resources-on-project-aria-tools",level:2}];function l(e){const o={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:["Ego-Exo4D is a foundational dataset for research on video learning and multimodal perception. The open dataset ",(0,r.jsx)(o.a,{href:"https://ai.meta.com/blog/ego-exo4d-video-learning-perception/",children:"was released in November 2023"})," and in March 2024 was updated to include more data, more annotations, and more modalities. Ego-Exo4D comes from years of collaboration between Meta\u2019s ",(0,r.jsx)(o.a,{href:"https://ai.meta.com/research/",children:"FAIR (Fundamental Artificial Intelligence Research)"}),", Meta\u2019s ",(0,r.jsx)(o.a,{href:"https://www.projectaria.com/",children:"Project Aria"}),", and 15 university partners. Ego-Exo4D is unique because of its simultaneous capture of:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"First-person \u201cegocentric\u201d views, from a participant\u2019s wearable camera"}),"\n",(0,r.jsx)(o.li,{children:"Multiple \u201cexocentric\u201d views, from cameras surrounding the participant"}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"The two perspectives are complementary. While the egocentric perspective reveals what the participant sees and hears, the exocentric views reveal the surrounding scene and the context. Together, these two perspectives give AI models a new window into complex human skill."}),"\n",(0,r.jsx)(o.p,{children:"More than 800 participants from 13 cities worldwide performed these activities in 131 different natural scene contexts, yielding long-form captures from 1 to 42 minutes each and 1,422 hours of video combined. The dataset contains skilled activities covering both physical (Soccer, Basketball, Dance, Bouldering, Music) and procedural (Cooking, Bike Repair, Health) tasks."}),"\n",(0,r.jsx)(o.p,{children:"Ego-Exo4D has its own independent website and documentation. Project Aria Tools provides documentation and tooling for working with Aria data that can be helpful when working with Ego-Exo4D data."}),"\n",(0,r.jsx)(o.h3,{id:"resources",children:"Resources:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://ego-exo4d-data.org/",children:"Ego-Exo4D website"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://docs.ego-exo4d-data.org/",children:"Ego-Exo4D documentation"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://github.com/facebookresearch/Ego4d/blob/main/notebooks/egoexo/EgoExo_Aria_Data_Tutorial.ipynb",children:"EgoExo4D Tutorial"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://discuss.ego4d-data.org/",children:"Ego4D and Ego-Exo4D feedback and support"})}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"ego-exo4d-resources-on-project-aria-tools",children:"Ego-Exo4D resources on Project Aria Tools"}),"\n",(0,r.jsx)(o.p,{children:"There are a range of resources available for working with Aria data using Project Aria Tools, and Load Static Calibration Data was specifically created to support working with Ego-Exo4D data."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/projectaria_tools/docs/open_datasets/ego-exo4d/ego-exo4d_data_format",children:"EgoExo4D Data Format and Loader"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/projectaria_tools/docs/data_utilities/getting_started",children:"Getting Started With Project Aria Data Utilities"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"/projectaria_tools/docs/data_formats/",children:"Aria Data Formats"})}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>i});var a=t(96540);const r={},n=a.createContext(r);function s(e){const o=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(n.Provider,{value:o},e.children)}}}]);