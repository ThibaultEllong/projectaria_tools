"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4408],{47464:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"tech_spec/hardware_spec","title":"Hardware Specifications","description":"Project Aria glasses have five cameras (two Mono Scene, one RGB, and two Eye Tracking cameras) as well as non-visual sensors (two IMUs, magnetometer, barometer, GPS, Wi-Fi beacon, Bluetooth beacon and Microphones). Mono Scene Cameras are often used to support SLAM algorithms, but they can have other applications.","source":"@site/docs/tech_spec/hardware_spec.mdx","sourceDirName":"tech_spec","slug":"/tech_spec/hardware_spec","permalink":"/projectaria_tools/docs/tech_spec/hardware_spec","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/tech_spec/hardware_spec.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Hardware Specifications"},"sidebar":"tutorialSidebar","previous":{"title":"Technical Specifications","permalink":"/projectaria_tools/docs/tech_spec/"},"next":{"title":"Recording Profiles","permalink":"/projectaria_tools/docs/tech_spec/recording_profiles"}}');var r=n(74848),a=n(28453);const t={sidebar_position:10,title:"Hardware Specifications"},o="Project Aria Hardware Specifications",c={},l=[{value:"Sensor specifications",id:"sensor-specifications",level:2},{value:"Visual sensors",id:"visual-sensors",level:3},{value:"Non-visual sensors",id:"non-visual-sensors",level:3},{value:"Coordinate systems",id:"coordinate-systems",level:3},{value:"Other hardware specifications",id:"other-hardware-specifications",level:2},{value:"Compute",id:"compute",level:3},{value:"Weight &amp; Size",id:"weight--size",level:3},{value:"Visual Correction",id:"visual-correction",level:3},{value:"Battery Life",id:"battery-life",level:3}];function d(e){const s={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"project-aria-hardware-specifications",children:"Project Aria Hardware Specifications"})}),"\n",(0,r.jsx)(s.p,{children:"Project Aria glasses have five cameras (two Mono Scene, one RGB, and two Eye Tracking cameras) as well as non-visual sensors (two IMUs, magnetometer, barometer, GPS, Wi-Fi beacon, Bluetooth beacon and Microphones). Mono Scene Cameras are often used to support SLAM algorithms, but they can have other applications."}),"\n",(0,r.jsx)(s.p,{children:"The glasses support multiple recording profiles that enable users to choose which sensors to record with, as well as what settings to use."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Project Aria Glasses Sensor Diagram",src:n(53484).A+"",width:"1000",height:"688"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Figure 1:"})," ",(0,r.jsx)(s.em,{children:"Project Aria Glasses Sensor Diagram"})]}),"\n",(0,r.jsx)(s.h2,{id:"sensor-specifications",children:"Sensor specifications"}),"\n",(0,r.jsx)(s.h3,{id:"visual-sensors",children:"Visual sensors"}),"\n",(0,r.jsx)(s.p,{children:"The following table summarizes the specs for the five glasses on Aria glasses (two Mono Scene/SLAM, one RGB, and two ET cameras)."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Table 1:"})," ",(0,r.jsx)(s.em,{children:"Aria Glasses Camera Specs"})]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)("b",{children:"Camera"})}),(0,r.jsx)("th",{children:"HFOV (deg)"}),(0,r.jsx)("th",{children:"VFOV (deg)"}),(0,r.jsx)("th",{children:"IFOV (deg/pix)"}),(0,r.jsx)("th",{children:"Maximum resolution (pix)"}),(0,r.jsx)("th",{children:"Downsampled resolution (pix)"}),(0,r.jsx)("th",{children:"Max frame rate (FPS)"}),(0,r.jsx)("th",{children:"Nominal frame rate (FPS)"}),(0,r.jsx)("th",{children:"Shutter"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Mono Scene (x2)"}),(0,r.jsx)("td",{children:"150"}),(0,r.jsx)("td",{children:"120"}),(0,r.jsx)("td",{children:"0.26"}),(0,r.jsx)("td",{children:"640x480"}),(0,r.jsx)("td",{children:"-"}),(0,r.jsx)("td",{children:"30"}),(0,r.jsx)("td",{children:"10"}),(0,r.jsx)("td",{children:"global"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"RGB (x1)"}),(0,r.jsx)("td",{children:"110"}),(0,r.jsx)("td",{children:"110"}),(0,r.jsx)("td",{children:"0.038"}),(0,r.jsx)("td",{children:"2880x2880"}),(0,r.jsx)("td",{children:"1408x1408"}),(0,r.jsx)("td",{children:"30"}),(0,r.jsx)("td",{children:"10"}),(0,r.jsx)("td",{children:"rolling"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"ET (x2)"}),(0,r.jsx)("td",{children:"64"}),(0,r.jsx)("td",{children:"48"}),(0,r.jsx)("td",{children:"0.2"}),(0,r.jsx)("td",{children:"640x480"}),(0,r.jsx)("td",{children:"320x240"}),(0,r.jsx)("td",{children:"90"}),(0,r.jsx)("td",{children:"10"}),(0,r.jsx)("td",{children:"global"})]})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"Cameras on Project Aria devices are installed sideways. Project Aria Tools visualizers rotate the images to show a more natural view."})}),"\n",(0,r.jsx)(s.h3,{id:"non-visual-sensors",children:"Non-visual sensors"}),"\n",(0,r.jsx)(s.p,{children:"The non-visual sensors in Aria glasses are:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Two IMUs operating at 1000Hz and 800Hz respectively"}),"\n",(0,r.jsx)(s.li,{children:"One Magnetometer operating at 10Hz"}),"\n",(0,r.jsx)(s.li,{children:"One barometer operating at 50Hz"}),"\n",(0,r.jsxs)(s.li,{children:["Seven-channel spatial microphone array with a sampling rate of 48kHz","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"The microphone also has a stereo mode where only two channels record"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:"One GPS receiver, Wi-Fi beacon, and Bluetooth beacon."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["All cameras, as well as the IMU, magnetometer, barometer and microphone are calibrated and all sensor measurements are timestamped on a common clock at nanosecond resolution. The SLAM and RGB cameras have ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Fisheye_lens",children:"fisheye"})," lenses to maximize the visible field of view."]}),"\n",(0,r.jsx)(s.h3,{id:"coordinate-systems",children:"Coordinate systems"}),"\n",(0,r.jsx)(s.p,{children:"Applications like stereo vision and navigation usually handle 2D and 3D points in different spaces, and transformations need to be conducted between them. With Project Aria data, we attach a local R3 coordinate frame to each sensor."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Diagram of Project Aria coordinates, showing the Optical center and the Lens FOV",src:n(73083).A+"",width:"1920",height:"1080"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Figure 2:"})," ",(0,r.jsx)(s.em,{children:"Sensors and Sensor Directions on Project Aria Devices"})]}),"\n",(0,r.jsx)(s.p,{children:"To find out more about the coordinate systems and access calibration data, got to:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/data_formats/coordinate_convention/2d_image_coordinate_system_convention",children:"2D Image Coordinate System Conventions"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/data_formats/coordinate_convention/3d_coordinate_frame_convention",children:"3D Coordinate Frame Conventions"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/data_utilities/core_code_snippets/calibration",children:"Calibration Code Snippets"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"other-hardware-specifications",children:"Other hardware specifications"}),"\n",(0,r.jsx)(s.h3,{id:"compute",children:"Compute"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Qualcomm SD835, 4GB RAM, 128GB storage"}),"\n",(0,r.jsx)(s.li,{children:"Flash memory (UFS)"}),"\n",(0,r.jsx)(s.li,{children:"Android 7.1"}),"\n",(0,r.jsx)(s.li,{children:"SW configurable user button and switch"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"weight--size",children:"Weight & Size"}),"\n",(0,r.jsx)(s.p,{children:"75g in two sizes 147mm and 152mm frame width, with adjustable nose pads and temple arms (87% fit coverage)."}),"\n",(0,r.jsx)(s.h3,{id:"visual-correction",children:"Visual Correction"}),"\n",(0,r.jsx)(s.p,{children:"Removable lenses with plano (Non-Rx) or single vision Rx correction [-4.5D to +3.5D]."}),"\n",(0,r.jsx)(s.h3,{id:"battery-life",children:"Battery Life"}),"\n",(0,r.jsxs)(s.p,{children:["Capacity is 2.5Wh. Operating time depends on the ",(0,r.jsx)(s.a,{href:"/docs/tech_spec/recording_profiles",children:"recording profile"}),".\nBattery life is 1.5 hours of continuous recording + 30 hours standby when using profile 0:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"10 FPS ET x 2"}),"\n",(0,r.jsx)(s.li,{children:"10 FPS Mono Scene (SLAM) x 2"}),"\n",(0,r.jsx)(s.li,{children:"1 FPS RGB 8MP"}),"\n",(0,r.jsx)(s.li,{children:"IMU, Wi-Fi + GPS and 7-channel audio on at nominal FPS"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Aria glasses connects to USB via a magnetic connector on the right temple arm."})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},73083:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/aria_local_frames-92d14a3bc4d42925573a3bb515b32f58.png"},53484:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/aria_hardware_diagram-e9a6473cfce8c11ef316c01ade49fe09.png"},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>o});var i=n(96540);const r={},a=i.createContext(r);function t(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);