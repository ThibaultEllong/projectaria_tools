"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7448],{78589:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"ARK/troubleshooting/desktop_app_logs","title":"Desktop App Logs","description":"Overview","source":"@site/docs/ARK/troubleshooting/desktop_app_logs.mdx","sourceDirName":"ARK/troubleshooting","slug":"/ARK/troubleshooting/desktop_app_logs","permalink":"/projectaria_tools/docs/ARK/troubleshooting/desktop_app_logs","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/troubleshooting/desktop_app_logs.mdx","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_position":30,"title":"Desktop App Logs"},"sidebar":"tutorialSidebar","previous":{"title":"Troubleshooting & Known Issues","permalink":"/projectaria_tools/docs/ARK/troubleshooting/troubleshooting_issues"},"next":{"title":"Clear Desktop App Cache","permalink":"/projectaria_tools/docs/ARK/troubleshooting/clear_cache"}}');var i=t(74848),s=t(28453);const r={sidebar_position:30,title:"Desktop App Logs"},l="How to Capture Logs for the Aria Desktop App",a={},p=[{value:"Overview",id:"overview",level:2},{value:"<strong>Enabling logs</strong>",id:"enabling-logs",level:2},{value:"MacOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"how-to-capture-logs-for-the-aria-desktop-app",children:"How to Capture Logs for the Aria Desktop App"})}),"\n",(0,i.jsx)(o.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(o.p,{children:["This page provides information about how to gather logs from the ",(0,i.jsx)(o.a,{href:"/docs/ARK/desktop_companion_app",children:"Aria Desktop Companion app"}),". Logs are not necessary prior to filing a bug report or seeking technical support, but they can be helpful. People are most likely to use this page if they have been asked for log files by Project Aria User Support (",(0,i.jsx)(o.a,{href:"mailto:AriaOps@meta.com",children:"AriaOps@meta.com"}),")."]}),"\n",(0,i.jsx)(o.p,{children:"You turn on logging when you run the app, you cannot gather logs retrospectively. You will need to use these commands every time you want to run the Desktop app with logging enabled."}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsxs)(o.p,{children:["Linux support for the Desktop app is limited (see ",(0,i.jsx)(o.a,{href:"/projectaria_tools/docs/ARK/about_ARK#desktop-companion-app",children:"requirements"}),") and only v36 is available. Please use the ",(0,i.jsx)(o.a,{href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli",children:"MPS CLI to"})," request Hand Tracking MPS."]})}),"\n",(0,i.jsx)(o.h2,{id:"enabling-logs",children:(0,i.jsx)(o.strong,{children:"Enabling logs"})}),"\n",(0,i.jsx)(o.p,{children:"On MacOS or Windows, enable logging by closing the Desktop app and then relaunching it via the command line with logging turned on. Logs will be added to aria_output.log, which will be created in your user home directory."}),"\n",(0,i.jsx)(o.p,{children:"If you don't fully quit the app, there is a risk your system may open an existing instance with logging turned off, instead of opening a new instance with logging enabled"}),"\n",(0,i.jsx)(o.h3,{id:"macos",children:"MacOS"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"Quit the Desktop app, if it is running"}),"\n",(0,i.jsx)(o.li,{children:"Open your terminal and run:"}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"open /Applications/Aria.app --args --log-output\n"})}),"\n",(0,i.jsxs)(o.ol,{start:"3",children:["\n",(0,i.jsx)(o.li,{children:"The Aria Desktop app should then open with logging enabled"}),"\n",(0,i.jsxs)(o.li,{children:["The logs will be stored in ",(0,i.jsx)(o.code,{children:"~/.aria/logs/aria_desktop_app_{date}_{time}.log"})]}),"\n",(0,i.jsx)(o.li,{children:"Logs will continue to be added to this file until you quit the app"}),"\n",(0,i.jsx)(o.li,{children:"If you generate logs at a later time, they will be appended to the end of these logs"}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"windows",children:"Windows"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["Quit the Desktop app completely","\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:'Close the app by right-clicking the Aria logo (it looks like glasses) in the right end side of the taskbar, and selecting "Quit" or'}),"\n",(0,i.jsx)(o.li,{children:'Open Task Manager and end the "AriaHub.exe" running task.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.li,{children:"Use the run command (Windows + R) or Windows terminal to run:"}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:'"C:\\Program Files\\Aria\\v3\\AriaHub.exe" --log-output\n'})}),"\n",(0,i.jsxs)(o.ol,{start:"3",children:["\n",(0,i.jsx)(o.li,{children:"The Aria Desktop app should then open with logging enabled."}),"\n",(0,i.jsxs)(o.li,{children:["The logs will be stored in The logs will be stored in ",(0,i.jsx)(o.code,{children:"~/.aria/logs/aria_desktop_app_{date}_{time}.log"})]}),"\n",(0,i.jsx)(o.li,{children:"Logs will continue to be added to this file until you quit the app"}),"\n",(0,i.jsx)(o.li,{children:"If you generate logs at a later time, they will be appended to the end of these logs"}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>l});var n=t(96540);const i={},s=n.createContext(i);function r(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);