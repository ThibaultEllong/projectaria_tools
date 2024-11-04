"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4142],{39224:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"ARK/sdk/samples/samples","title":"Code Samples","description":"This section provides code samples and walkthroughs for using the Aria Client SDK to interact with the Project Aria glasses.","source":"@site/docs/ARK/sdk/samples/samples.mdx","sourceDirName":"ARK/sdk/samples","slug":"/ARK/sdk/samples/","permalink":"/projectaria_tools/docs/ARK/sdk/samples/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/samples/samples.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Code Samples"},"sidebar":"tutorialSidebar","previous":{"title":"Setup Guide","permalink":"/projectaria_tools/docs/ARK/sdk/setup"},"next":{"title":"Connection","permalink":"/projectaria_tools/docs/ARK/sdk/samples/device_connection"}}');var r=i(74848),t=i(28453);const a={sidebar_position:5,title:"Code Samples"},o="Project Aria Client SDK Code Samples",c={},l=[];function d(e){const s={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"project-aria-client-sdk-code-samples",children:"Project Aria Client SDK Code Samples"})}),"\n",(0,r.jsx)(s.p,{children:"This section provides code samples and walkthroughs for using the Aria Client SDK to interact with the Project Aria glasses."}),"\n",(0,r.jsxs)(s.p,{children:["Make sure you have finished the ",(0,r.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/sdk/setup",children:"Setup Guide"})," before progressing to code samples. If you follow the guide, code samples are run from ",(0,r.jsx)(s.code,{children:"~/projectaria_client_sdk_samples"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"cd ~/projectaria_client_sdk_samples\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Except for Time Synchronization TICSync code samples, which are run from ",(0,r.jsx)(s.code,{children:"~/projectaria_client_sdk_samples/ticsync"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"cd ~/projectaria_client_sdk_samples/ticsync\n"})}),"\n",(0,r.jsxs)(s.p,{children:["We recommend starting with ",(0,r.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/device_connection",children:"device_connect.py"})," to validate that your Aria glasses have connected successfully."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/device_connection",children:"Connection"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Connect to the Aria glasses using USB and Wi-Fi"}),"\n",(0,r.jsx)(s.li,{children:"Fetch device information, such as the device serial number"}),"\n",(0,r.jsx)(s.li,{children:"Fetch device status, such as battery level or Wi-Fi SSID."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/device_recording",children:"Recording"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Start and stop recording on an Aria device via USB and Wi-Fi"}),"\n",(0,r.jsxs)(s.li,{children:["Set a ",(0,r.jsx)(s.a,{href:"/projectaria_tools/docs/tech_spec/recording_profiles",children:"recording profile"})," for a recording"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/streaming_subscribe",children:"Streaming Subscription"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Subscribe to and unsubscribe from a streaming session"}),"\n",(0,r.jsx)(s.li,{children:"Visualize the live stream"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/device_stream",children:"Streaming and Visualizing All Live Sensor Data"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Start and stop streaming from an Aria device to a computer via USB and Wi-Fi"}),"\n",(0,r.jsx)(s.li,{children:"Add callbacks to visualize and manipulate the streamed data"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/undistort_rgb_image",children:"Streaming Undistorted RGB Image Using Calibration"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Start and stop streaming from an Aria device to a computer via USB and Wi-Fi"}),"\n",(0,r.jsx)(s.li,{children:"Access sensor calibration and undistort an RGB live stream"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/sdk/samples/ticsync_sample",children:"TICSync Time Synchronization"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Requires at least two Project Aria glasses"}),"\n",(0,r.jsxs)(s.li,{children:["Deeper dive and more granular control of features than commands provided in ",(0,r.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/sdk/ticsync",children:"How to Create Time Synchronized Recordings with Multiple Aria Glasses"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>o});var n=i(96540);const r={},t=n.createContext(r);function a(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);