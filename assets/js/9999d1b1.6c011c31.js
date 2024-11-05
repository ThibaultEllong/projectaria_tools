"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3065],{9327:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"data_utilities/visualization/visualization_cpp","title":"C++ Visualization","description":"Overview","source":"@site/docs/data_utilities/visualization/visualization_cpp.mdx","sourceDirName":"data_utilities/visualization","slug":"/data_utilities/visualization/visualization_cpp","permalink":"/projectaria_tools/docs/data_utilities/visualization/visualization_cpp","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/visualization/visualization_cpp.mdx","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20,"title":"C++ Visualization"},"sidebar":"tutorialSidebar","previous":{"title":"Python Visualization","permalink":"/projectaria_tools/docs/data_utilities/visualization/visualization_python"},"next":{"title":"Data Provider","permalink":"/projectaria_tools/docs/data_utilities/core_code_snippets/data_provider"}}');var n=a(74848),t=a(28453);const l={sidebar_position:20,title:"C++ Visualization"},r="Project Aria Tools C++ Visualization",o={},d=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Step 0 : Check system requirements and download codebase",id:"step-0--check-system-requirements-and-download-codebase",level:3},{value:"Step 1 : Download the sample dataset",id:"step-1--download-the-sample-dataset",level:3},{value:"Step 2 : Build and install visualizers",id:"step-2--build-and-install-visualizers",level:3},{value:"Run Aria Viewer",id:"run-aria-viewer",level:2},{value:"Run MPS 3D Scene Viewer",id:"run-mps-3d-scene-viewer",level:2},{value:"Run MPS 3D Replay Viewer",id:"run-mps-3d-replay-viewer",level:2},{value:"MPS Eye Gaze visualizer",id:"mps-eye-gaze-visualizer",level:2},{value:"Run visualizer and visualize both generalized and optional calibrated eye gaze",id:"run-visualizer-and-visualize-both-generalized-and-optional-calibrated-eye-gaze",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"project-aria-tools-c-visualization",children:"Project Aria Tools C++ Visualization"})}),"\n",(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(i.p,{children:"This page introduces our C++ visualization tools available in Project Aria Tools. We've provided example datasets to test these tools."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#aria-viewer",children:"Aria Viewer"}),": visualize raw Aria data"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#mps-static-scene-visualizer",children:"MPS 3D Scene Viewer"}),": renders a static scene using Aria data with trajectories,\nglobal point cloud, and static camera poses"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#mps-3d-replay-visualizer",children:"MPS 3D Replay Viewer"}),": renders static scene and dynamic elements: 2D/3D observations rays + eye gaze data"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#mps-eye-gaze-visualizer",children:"MPS Eye Gaze Viewer"}),": visualize Aria data with eye gaze data"]}),"\n"]}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsx)(i.h3,{id:"step-0--check-system-requirements-and-download-codebase",children:"Step 0 : Check system requirements and download codebase"}),"\n",(0,n.jsxs)(i.p,{children:["Go to the ",(0,n.jsx)(i.a,{href:"/docs/data_utilities/installation/download_codebase",children:"Download Codebase"})," page to:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Check your system is supported"}),"\n",(0,n.jsx)(i.li,{children:"Download projectaria_tools codebase from the GitHub"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"step-1--download-the-sample-dataset",children:"Step 1 : Download the sample dataset"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Go to the ",(0,n.jsx)(i.a,{href:"/docs/data_utilities/installation/download_mps_sample_data",children:"Download MPS Sample dataset"})," to retrieve a raw VRS file and all the corresponding MPS outputs."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"step-2--build-and-install-visualizers",children:"Step 2 : Build and install visualizers"}),"\n",(0,n.jsx)(i.p,{children:"The visualizers need the C++ version of Project Aria Tools to run."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["In the ",(0,n.jsx)(i.a,{href:"/docs/data_utilities/installation/installation_cpp",children:"C++ Installation Guide"}),", follow the instructions to ",(0,n.jsx)(i.a,{href:"/docs/data_utilities/installation/installation_cpp#build-from-source-with-visualization",children:"build from source with visualization"})]}),"\n"]}),"\n",(0,n.jsx)("div",{id:"aria-viewer"}),"\n",(0,n.jsx)(i.h2,{id:"run-aria-viewer",children:"Run Aria Viewer"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/tools/visualization/main.cpp",children:"Aria Viewer"})," enable you to to visualize Aria device recorded VRS files. It shows all sensor data including:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Camera images"}),"\n",(0,n.jsx)(i.li,{children:"IMU"}),"\n",(0,n.jsx)(i.li,{children:"Audio (visualization of waveform, sound is not available)"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"cd $HOME/Documents/projectaria_sandbox/build\n\n./tools/visualization/aria_viewer --vrs $MPS_SAMPLE_PATH/sample.vrs\n"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Aria Viewer Screenshot",src:a(30445).A+"",width:"1819",height:"968"})}),"\n",(0,n.jsx)("div",{id:"mps-static-scene-visualizer"}),"\n",(0,n.jsx)(i.h2,{id:"run-mps-3d-scene-viewer",children:"Run MPS 3D Scene Viewer"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/tools/mps_visualization/main_3d_scene_viewer.cpp",children:"MPS 3D Scene Viewer"})," renders a static scene using location MPS output."]}),"\n",(0,n.jsx)(i.p,{children:"Through this tool you can create visualizations using:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Closed loop trajectories"}),"\n",(0,n.jsx)(i.li,{children:"Global point cloud"}),"\n",(0,n.jsx)(i.li,{children:"Static camera poses"}),"\n",(0,n.jsxs)(i.li,{children:["Open loop trajectories","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Because open loop is in odometry frame of reference, it shouldn\u2019t be visualized with closed loop trajectories, global points or static camera poses"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"This tutorial generates a visualization containing:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Closed loop trajectories"}),"\n",(0,n.jsx)(i.li,{children:"Global point cloud"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"cd $HOME/Documents/projectaria_sandbox/build\n\n./tools/mps_visualization/mps_3d_scene_viewer \\\n    --closed-loop-traj $MPS_SAMPLE_PATH/trajectory/closed_loop_trajectory.csv \\\n    --global-point-cloud $MPS_SAMPLE_PATH/trajectory/global_points.csv.gz\n"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Screenshot of 3D Scene Viewer UI",src:a(5009).A+"",width:"1818",height:"1135"})}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"Because the sample dataset doesn't have static cameras you won't be able to interact with the static camera settings"})}),"\n",(0,n.jsx)("div",{id:"mps-3d-replay-visualizer"}),"\n",(0,n.jsx)(i.h2,{id:"run-mps-3d-replay-viewer",children:"Run MPS 3D Replay Viewer"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/tools/mps_visualization/main_3d_replay_viewer.cpp",children:"MPS 3D Replay Viewer"})," renders static scene and dynamic elements at each frame: Aria's pose + 2D/3D observations rays + eye gaze data."]}),"\n",(0,n.jsx)(i.p,{children:"Through this tool you can create visualizations using:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Closed loop trajectories"}),"\n",(0,n.jsxs)(i.li,{children:["Semi-Dense Point Cloud","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Global point cloud"}),"\n",(0,n.jsx)(i.li,{children:"Point observations"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:"Static camera poses"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"This tutorial generates a visualization containing:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Static elements","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Closed loop trajectories"}),"\n",(0,n.jsx)(i.li,{children:"Global point cloud"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Dynamic elements","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"One closed loop trajectory for replay"}),"\n",(0,n.jsx)(i.li,{children:"2D/3D point observations rays"}),"\n",(0,n.jsx)(i.li,{children:"Generalized and Personalized Eye Gaze vectors"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"cd $HOME/Documents/projectaria_sandbox/build\n\n./tools/mps_visualization/mps_3d_replay_viewer \\\n  --vrs $MPS_SAMPLE_PATH/sample.vrs  \\\n  --replay-trajectory $MPS_SAMPLE_PATH/trajectory/closed_loop_trajectory.csv \\\n  --closed-loop-traj $MPS_SAMPLE_PATH/trajectory/closed_loop_trajectory.csv \\\n  --global-point-cloud $MPS_SAMPLE_PATH/trajectory/global_points.csv.gz \\\n  --point-obs $MPS_SAMPLE_PATH/trajectory/semidense_observations.csv.gz \\\n  --generalized-eye-gaze $MPS_SAMPLE_PATH/eye_gaze/generalized_eye_gaze.csv \\\n  --calibrated-eye-gaze $MPS_SAMPLE_PATH/eye_gaze/calibrated_eye_gaze.csv \\\n  --hands $MPS_SAMPLE_PATH/hand_tracking/wrist_and_palm_poses.csv\n"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Screenshot of 3D Replay Viewer UI",src:a(110).A+"",width:"900",height:"576"})}),"\n",(0,n.jsx)("div",{id:"mps-eye-gaze-visualizer"}),"\n",(0,n.jsx)(i.h2,{id:"mps-eye-gaze-visualizer",children:"MPS Eye Gaze visualizer"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/tools/mps_visualization/main_eyegaze.cpp",children:"MPS Eye Gaze visualizer"})," renders the computed eye gaze and vrs data side by side. The visualizer contains:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Eye Tracking camera stream"}),"\n",(0,n.jsxs)(i.li,{children:["RGB, Mono Scene (SLAM) left and right camera streams","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"A red dot shows the projection of the eye gaze onto the image"}),"\n",(0,n.jsx)(i.li,{children:"The projection is computed using a fixed depth of 1m"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:"2D graph plot of the gaze yaw and pitch angles in radians"}),"\n",(0,n.jsx)(i.li,{children:"2D radar plot of the eye gaze yaw and pitch angles"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"run-visualizer-and-visualize-both-generalized-and-optional-calibrated-eye-gaze",children:"Run visualizer and visualize both generalized and optional calibrated eye gaze"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"cd $HOME/Documents/projectaria_sandbox/build\n\n./tools/mps_visualization/mps_eyegaze_viewer --vrs $MPS_SAMPLE_PATH/sample.vrs \\\n    --generalized-eye-gaze $MPS_SAMPLE_PATH/eye_gaze/general_eye_gaze.csv \\\n    --calibrated-eye-gaze $MPS_SAMPLE_PATH/eye_gaze/personalized_eye_gaze.csv\n"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Screenshot of MPS Eye Gaze Viewer",src:a(12415).A+"",width:"1819",height:"962"})}),"\n",(0,n.jsx)(i.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsxs)(i.p,{children:["Check the ",(0,n.jsx)(i.a,{href:"/docs/data_utilities/installation/troubleshooting",children:"Troubleshooting Guide"})," if you encounter issues using this tutorial."]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},30445:(e,i,a)=>{a.d(i,{A:()=>s});const s=a.p+"assets/images/aria-viewer-5a96be88e6f6965c04a914808d334546.png"},110:(e,i,a)=>{a.d(i,{A:()=>s});const s=a.p+"assets/images/mps-3d-replay-viewer-e05e8b2ef524f6a79b5be9a463d58cd6.png"},5009:(e,i,a)=>{a.d(i,{A:()=>s});const s=a.p+"assets/images/mps-3d-staticscene-viewer-c8cd4e0114e058a736d24b65f4fee116.png"},12415:(e,i,a)=>{a.d(i,{A:()=>s});const s=a.p+"assets/images/mps-eyegaze-viewer-45707484ece22e35573e3c7dfa8ca351.png"},28453:(e,i,a)=>{a.d(i,{R:()=>l,x:()=>r});var s=a(96540);const n={},t=s.createContext(n);function l(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);