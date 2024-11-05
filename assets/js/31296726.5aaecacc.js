"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8593],{90971:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"ARK/desktop_companion_app","title":"Desktop Companion App","description":"Overview","source":"@site/docs/ARK/desktop_companion_app.mdx","sourceDirName":"ARK","slug":"/ARK/desktop_companion_app","permalink":"/projectaria_tools/docs/ARK/desktop_companion_app","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/desktop_companion_app.mdx","tags":[],"version":"current","sidebarPosition":110,"frontMatter":{"sidebar_position":110,"title":"Desktop Companion App"},"sidebar":"tutorialSidebar","previous":{"title":"MPS Troubleshooting","permalink":"/projectaria_tools/docs/ARK/mps/mps_troubleshooting"},"next":{"title":"ARK Release Notes","permalink":"/projectaria_tools/docs/ARK/sw_release_notes"}}');var t=o(74848),r=o(28453);const s={sidebar_position:110,title:"Desktop Companion App"},a="Project Aria Desktop Companion App",l={},d=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:3},{value:"Before you start - Device OS Update",id:"before-you-start---device-os-update",level:2},{value:"To install",id:"to-install",level:2},{value:"Windows",id:"windows",level:4},{value:"MacOS",id:"macos",level:4},{value:"Login",id:"login",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"Pairing",id:"pairing",level:3},{value:"Machine Perception Services (MPS)",id:"machine-perception-services-mps",level:2},{value:"Download your data",id:"download-your-data",level:2},{value:"Visualize your data",id:"visualize-your-data",level:2},{value:"Playback Controls",id:"playback-controls",level:3},{value:"Play/pause/stop playback",id:"playpausestop-playback",level:4},{value:"Overlay Selection",id:"overlay-selection",level:4},{value:"Tooltips",id:"tooltips",level:3},{value:"Menu Bar Commands",id:"menu-bar-commands",level:3},{value:"Keyboard Playback Controls",id:"keyboard-playback-controls",level:3},{value:"Preview a basic visualization",id:"preview-a-basic-visualization",level:2},{value:"Wi-Fi connection via Mobile Companion App",id:"wi-fi-connection-via-mobile-companion-app",level:3},{value:"Wi-Fi connection via Desktop App",id:"wi-fi-connection-via-desktop-app",level:3},{value:"Start Preview",id:"start-preview",level:3},{value:"Stop Preview",id:"stop-preview",level:3},{value:"Select a Recording Profile",id:"select-a-recording-profile",level:3},{value:"Start Recording",id:"start-recording",level:3},{value:"Stop Recording",id:"stop-recording",level:3}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"project-aria-desktop-companion-app",children:"Project Aria Desktop Companion App"})}),"\n",(0,t.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(i.p,{children:"The Project Aria Desktop Companion App, provides the ability to record, transfer, process, validate and visualize Aria's data through a desktop interface. These instructions are only useful if you have Project Aria glasses."}),"\n",(0,t.jsx)(i.admonition,{title:"Just received Aria glasses?",type:"tip",children:(0,t.jsxs)(i.p,{children:["Go to the ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/ARK/ARK_quickstart",children:"Quickstart Guide"})," for how to start using them."]})}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["We are no longer proactively providing credentials for the Desktop Companion App. If you need to manage files or MPS requests from a local machine, we recommend using Aria Studio. If you have a strong need to use the desktop app over Aria Studio in the immediate term, please reach out to ",(0,t.jsx)(i.a,{href:"mailto:ariaops@meta.com",children:"ariaops@meta.com"})," to discuss your use case."]})}),"\n",(0,t.jsx)(i.h3,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Handle and select between multiple plugged in Aria glasses"}),"\n",(0,t.jsx)(i.li,{children:"Set the default recording profile for recordings initiated by the capture button or Desktop app"}),"\n",(0,t.jsxs)(i.li,{children:["Preview a live stream of Aria's sensors","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Use the ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/ARK/sdk/setup",children:"Client SDK to stream and subscribe to sensor data"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Display, extract, validate Aria VRS data"}),"\n",(0,t.jsx)(i.li,{children:"Access Machine Perception Services (MPS), a cloud-based service to process Aria VRS data"}),"\n",(0,t.jsx)(i.li,{children:"Visualize Aria Data as well as MPS outputs."}),"\n",(0,t.jsx)(i.li,{children:"Direct access to documentation and guides"}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["Linux support for the Desktop app is limited (see ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/ARK/about_ARK#desktop-companion-app",children:"requirements"}),") and only v36 is available. Please use the ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli",children:"MPS CLI to"})," request Hand Tracking MPS."]})}),"\n",(0,t.jsx)(i.h2,{id:"before-you-start---device-os-update",children:"Before you start - Device OS Update"}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsxs)(i.p,{children:["Before using the Desktop app, you must use the ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/ARK/mobile_companion_app",children:"Aria Mobile Companion App"})," to update your Aria glasses' OS."]})}),"\n",(0,t.jsx)(i.h2,{id:"to-install",children:"To install"}),"\n",(0,t.jsxs)(i.p,{children:["Follow the instructions in the ",(0,t.jsx)(i.a,{href:"/docs/ARK/ark_downloads",children:"ARK SW Downloads and Updates page"})," to download and install the app (this is where you'll download updates as well)."]}),"\n",(0,t.jsx)(i.p,{children:"You can launch the Desktop App via GUI or command line"}),"\n",(0,t.jsx)(i.h4,{id:"windows",children:"Windows"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"C:\\Program Files\\Aria\\v3\\AriaHub.exe\n"})}),"\n",(0,t.jsx)(i.h4,{id:"macos",children:"MacOS"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"/Applications/Aria.app/Contents/MacOS/AriaHub\n"})}),"\n",(0,t.jsx)(i.h2,{id:"login",children:"Login"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Read the Project Aria Research Community Guidelines and select ",(0,t.jsx)(i.strong,{children:"Accept"})]}),"\n",(0,t.jsx)(i.li,{children:"Log in using the credentials that were sent to you (the same used to log into the Mobile Companion App)."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"dashboard",children:"Dashboard"}),"\n",(0,t.jsx)(i.p,{children:"After accepting the guidelines and logging in, you should see the Aria Dashboard. The dashboard displays the device info for your Aria glasses and allow you to interact with your glasses, if they are plugged in, as well as links to further information about Aria."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Dashboard of Aria Desktop App",src:o(21415).A+"",width:"900",height:"613"})}),"\n",(0,t.jsx)(i.h3,{id:"pairing",children:"Pairing"}),"\n",(0,t.jsx)(i.p,{children:"The Desktop App will detect devices that are plugged in via USB. Once plugged in, your device will display as Aria and as Active with its serial number visible in the list of devices next to My Device."}),"\n",(0,t.jsx)(i.p,{children:"If you cannot see your device, make sure you have updated the firmware using the Aria Mobile Companion app."}),"\n",(0,t.jsx)(i.h2,{id:"machine-perception-services-mps",children:"Machine Perception Services (MPS)"}),"\n",(0,t.jsxs)(i.p,{children:["Through the Desktop App you can request ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/ARK/mps/",children:"MPS"})," for eligible recordings."]}),"\n",(0,t.jsx)(i.p,{children:"To request MPS:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Go to the Recordings Tab"}),"\n",(0,t.jsx)(i.li,{children:"Select Tools"}),"\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.strong,{children:"Request MPS"})," in the Recordings toolbar"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Go to ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/ARK/mps/request_mps/desktop_mps",children:"Request MPS"})," for more information."]}),"\n",(0,t.jsx)(i.h2,{id:"download-your-data",children:"Download your data"}),"\n",(0,t.jsx)(i.p,{children:"Once you've completed recordings with your Aria Glasses you can access and download these recordings using the Desktop Companion app, if you wish."}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["While you can download recordings using the Desktop app, we recommend using ADB or MTP. Go to the ",(0,t.jsx)(i.a,{href:"/docs/ARK/ARK_quickstart#download-data",children:"Quickstart Guide"})," for more information."]})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Aria Desktop App Recordings Page",src:o(67923).A+"",width:"1321",height:"938"}),"\nEvery recording will generate a VRS file and a .vrs.json file containing the recording's metadata."]}),"\n",(0,t.jsx)(i.p,{children:"To download a recording:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Go to the Recordings page"}),"\n",(0,t.jsx)(i.li,{children:"You'll see thumbnails of all the recordings on your Aria glasses"}),"\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.strong,{children:"Pull"})," to download the data from your glasses"]}),"\n",(0,t.jsx)(i.li,{children:"In the file explorer window, select where you want to save the recording"}),"\n",(0,t.jsx)(i.li,{children:"Once you've selected a folder location, a dialog window will pop up indicating the current VRS file transfer"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"visualize-your-data",children:"Visualize your data"}),"\n",(0,t.jsx)(i.p,{children:"Once files have been copied to your local directory, the VRS file can be visualized using the Desktop App."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["In the Recordings page, select ",(0,t.jsx)(i.strong,{children:"Tools"})]}),"\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.strong,{children:"Play VRS"})]}),"\n",(0,t.jsx)(i.li,{children:"When the file explorer window appears, select the VRS file you want to play"}),"\n",(0,t.jsxs)(i.li,{children:["Once you've selected a file to open, the VRS player window will pop up and start playing your recording","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Once the visualizer is open, use ",(0,t.jsx)(i.strong,{children:"Open"})," (Path or URI) or ",(0,t.jsx)(i.strong,{children:"Select"})," (Explorer window) to visualize other recordings"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"playback-controls",children:"Playback Controls"}),"\n",(0,t.jsx)(i.h4,{id:"playpausestop-playback",children:"Play/pause/stop playback"}),"\n",(0,t.jsx)(i.p,{children:"The Previous and Next Frame buttons will play at most one frame backward or forward for each visible stream. The Speed controls let you chose to play slower or faster. If there is too much data for your system to process, frames will be dropped."}),"\n",(0,t.jsx)(i.h4,{id:"overlay-selection",children:"Overlay Selection"}),"\n",(0,t.jsx)(i.p,{children:"The overlay selector lets you chose what information to display over the frames. The options are:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Hide - there is no overlay"}),"\n",(0,t.jsx)(i.li,{children:"Tags - show stream tags"}),"\n",(0,t.jsx)(i.li,{children:"Configuration, State or Data - show the metadata found in the last record."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"tooltips",children:"Tooltips"}),"\n",(0,t.jsx)(i.p,{children:"To know the duration of the image data, use the tooltip found over the time display."}),"\n",(0,t.jsx)(i.p,{children:"Note that the start and end times show the time range in which image or audio data was found."}),"\n",(0,t.jsx)(i.p,{children:"Streams that don't contain image or audio data are ignored, and only data records from image and audio streams are considered. So if a recording contains a single image stream that has a configuration record at timestamp 0 rather than just before the first data record (as is too often the practice), while the first data record is at timestamp 15, the playback start time will be 15."}),"\n",(0,t.jsx)(i.h3,{id:"menu-bar-commands",children:"Menu Bar Commands"}),"\n",(0,t.jsx)(i.p,{children:"The Menu Bar offers functionality available only there, don't forget to look there!"}),"\n",(0,t.jsx)(i.p,{children:"The Layout menu's top section let you save and manage presets. Save your favorite stream display configurations, including stream orientation, stream order, which streams are visible or hidden, using the Save Preset command. To arrange streams, see the Context Menu section below."}),"\n",(0,t.jsx)(i.p,{children:"The commands in the lower section let you control in how many row of how many views the streams will be arranged. Layout Frames 4x2 means using 2 rows with up to 4 streams each. The layout configurations offered depend on the number of image streams visible."}),"\n",(0,t.jsx)(i.p,{children:"Once at least one preset has been saved, you can recall or delete presets, which automatically get a keyboard shortcut for quick access."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Project Aria Desktop App Visualizer Layout Options",src:o(94383).A+"",width:"1020",height:"526"})}),"\n",(0,t.jsx)(i.h3,{id:"keyboard-playback-controls",children:"Keyboard Playback Controls"}),"\n",(0,t.jsx)(i.p,{children:"Playback can be directly controlled from the keyboard:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Use the space bar to play/pause replay."}),"\n",(0,t.jsx)(i.li,{children:"The backspace and the home keys will reset playback to the start of the file, much like the Stop button."}),"\n",(0,t.jsx)(i.li,{children:"The left and right arrow keys will read at most one frame per stream, in either direction."}),"\n",(0,t.jsx)(i.li,{children:"The up and down arrow keys will jump at most 10 frames, in either direction."}),"\n",(0,t.jsx)(i.li,{children:"The page-up and page-down keys will jump at most 100 frames, in either direction."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"When using the arrow keys, all frames are guaranteed to be read. Use this feature if you want to be sure to view every frame of your file."}),"\n",(0,t.jsx)(i.h2,{id:"preview-a-basic-visualization",children:"Preview a basic visualization"}),"\n",(0,t.jsxs)(i.p,{children:["You can use the Desktop app to preview sensor data from your Aria glasses stream data over Wi-Fi. This visualization does not have the capabilities of the ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/ARK/sdk/",children:"Client SDK"})," and you can't subscribe to the data. When using the Desktop app, we recommend only using Profiles 12 and 18, which are optimized for streaming."]}),"\n",(0,t.jsx)(i.p,{children:"To stream data, your Aria glasses need to be on the same network as your computer."}),"\n",(0,t.jsx)(i.admonition,{title:'You will need to use a "non-corporate" network',type:"tip",children:(0,t.jsx)(i.p,{children:"Corporate/Institution networks are often protected by many layers of security and firewalls which will impede you from streaming. If you are at home, please make sure you're not connected to a VPN."})}),"\n",(0,t.jsx)(i.h3,{id:"wi-fi-connection-via-mobile-companion-app",children:"Wi-Fi connection via Mobile Companion App"}),"\n",(0,t.jsx)(i.p,{children:"You will have connected your Aria device to Wi-Fi when you paired your device with the Mobile Companion App and updated it. Your computer and Aria device need to be on the same Wi-Fi network\nIf you need to change the Wi-Fi network your Aria is connected to:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Open Mobile Companion App"}),"\n",(0,t.jsx)(i.li,{children:"In the Paired Glasses section of the Dashboard, select Select Wi-Fi"}),"\n",(0,t.jsxs)(i.li,{children:["Select your preferred network and follow the prompts to connect","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"You can also forget an existing network from the Wi-Fi menu"}),"\n",(0,t.jsx)(i.li,{children:"Make sure it is a non-corporate network that is the same as your computer"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Once connected, the Wi-Fi network name will appear in the Desktop App under My Device underneath the Wi-Fi icon which will become blue."}),"\n",(0,t.jsx)(i.h3,{id:"wi-fi-connection-via-desktop-app",children:"Wi-Fi connection via Desktop App"}),"\n",(0,t.jsx)(i.p,{children:"To connect the Aria glasses to a Wi-Fi network"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Select Wi-Fi on the Dashboard device toolbar under My Device.","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Make sure it is a non-corporate network that is the same as your computer"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Select your desired network and enter its password"}),"\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.strong,{children:"Connect"})," to confirm your selected network"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"start-preview",children:"Start Preview"}),"\n",(0,t.jsxs)(i.p,{children:["To start the preview, select ",(0,t.jsx)(i.strong,{children:"Preview"})," on the Dashboard device toolbar under My Device."]}),"\n",(0,t.jsx)(i.p,{children:"The Preview window will pop up showing a data stream from your selected profile. We recommend only using Profiles 12 and 18, which are optimized for streaming."}),"\n",(0,t.jsx)(i.h3,{id:"stop-preview",children:"Stop Preview"}),"\n",(0,t.jsxs)(i.p,{children:["To stop the streaming preview, select ",(0,t.jsx)(i.strong,{children:"Stop"})," on the same device toolbar"]}),"\n",(0,t.jsx)(i.admonition,{title:"Closing the Aria Preview window will not stop the data stream.",type:"info",children:(0,t.jsx)(i.p,{children:"You will need to effectively click on the Stop button for the data streaming to stop."})}),"\n",(0,t.jsx)(i.h1,{id:"appendix-a---recording-using-the-desktop-app",children:"Appendix A - Recording using the Desktop app"}),"\n",(0,t.jsx)(i.p,{children:"While we recommend recording using the Capture button or Mobile Companion app, here are the instructions for recording with the Desktop Companion app"}),"\n",(0,t.jsx)(i.h3,{id:"select-a-recording-profile",children:"Select a Recording Profile"}),"\n",(0,t.jsx)(i.p,{children:"Before you can record using the Desktop app, you'll need to set a recording profile. You can do this via the Desktop or Mobile Companion App. To set the recording profile via Desktop app, select Profile in the device toolbar."}),"\n",(0,t.jsx)(i.p,{children:"Whenever a profile is selected, its description will be shown underneath. Select OK to confirm your selected profile."}),"\n",(0,t.jsx)(i.p,{children:"The profile you select will also be the profile used when you initiate recording using the capture button on your Aria device."}),"\n",(0,t.jsx)(i.h3,{id:"start-recording",children:"Start Recording"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Plug your Aria device into your computer with the provided cable."}),"\n",(0,t.jsxs)(i.li,{children:["In the Dashboard device toolbar under My Device, select ",(0,t.jsx)(i.strong,{children:"Record"}),"."]}),"\n",(0,t.jsx)(i.li,{children:"Once the recording has started you can unplug your Aria device"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"stop-recording",children:"Stop Recording"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Plug your Aria device into your computer"}),"\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.strong,{children:"Stop"})]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},21415:(e,i,o)=>{o.d(i,{A:()=>n});const n=o.p+"assets/images/desktop_app_dashboard-e78cda64913a4d626a15dc7e33fb200a.png"},67923:(e,i,o)=>{o.d(i,{A:()=>n});const n=o.p+"assets/images/desktop_app_recordings-d397dca6c10e0d3ddd3bf6901112abf7.png"},94383:(e,i,o)=>{o.d(i,{A:()=>n});const n=o.p+"assets/images/desktopapp_menubar_layout-3a290c0158c592e0059f1fd9519f12ee.png"},28453:(e,i,o)=>{o.d(i,{R:()=>s,x:()=>a});var n=o(96540);const t={},r=n.createContext(t);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);