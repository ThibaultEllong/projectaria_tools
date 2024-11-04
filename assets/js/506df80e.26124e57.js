"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1449],{54949:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"ARK/sdk/samples/device_connection","title":"Connection","description":"Overview","source":"@site/docs/ARK/sdk/samples/device_connection.mdx","sourceDirName":"ARK/sdk/samples","slug":"/ARK/sdk/samples/device_connection","permalink":"/projectaria_tools/docs/ARK/sdk/samples/device_connection","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/samples/device_connection.mdx","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20,"title":"Connection"},"sidebar":"tutorialSidebar","previous":{"title":"Code Samples","permalink":"/projectaria_tools/docs/ARK/sdk/samples/"},"next":{"title":"Recording","permalink":"/projectaria_tools/docs/ARK/sdk/samples/device_recording"}}');var t=i(74848),c=i(28453);i(98180);const o={sidebar_position:20,title:"Connection"},r="Connect to the glasses and retrieve device status",a={},d=[{value:"Overview",id:"overview",level:2},{value:"Running the sample",id:"running-the-sample",level:2},{value:"Code walkthrough",id:"code-walkthrough",level:3},{value:"1. Create and configure a Device Client",id:"1-create-and-configure-a-device-client",level:4},{value:"2. Connect to a Device",id:"2-connect-to-a-device",level:4},{value:"3. Fetch device status and information",id:"3-fetch-device-status-and-information",level:4},{value:"4. Disconnect",id:"4-disconnect",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"connect-to-the-glasses-and-retrieve-device-status",children:"Connect to the glasses and retrieve device status"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"device_connect"})," example shows how to connect to your Project Aria device using the Client SDK and retrieve:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Device status, such as such as battery level, Wi-Fi SSID or Wi-Fi IP address"}),"\n",(0,t.jsx)(n.li,{children:"Device information, such as the device serial number or device model"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-the-sample",children:"Running the sample"}),"\n",(0,t.jsx)(n.p,{children:"In your terminal, from the samples directory, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python -m device_connect\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should then see:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[AriaSdk:DeviceControllerImpl][INFO]: Connecting to device <serial_number> using ADB\n[AriaSdk:DeviceClientImpl][INFO]: Connection established with device <serial_number>\nAria Device Status: battery level 100, wifi ssid <xxxxxxxx> , wifi ip <192.168.xx.xx>, mode DeviceMode.Partner\nAria Device Info: model Aria, serial <serial_number>\nAria Device Connected, disconnecting\n"})}),"\n",(0,t.jsx)(n.h3,{id:"code-walkthrough",children:"Code walkthrough"}),"\n",(0,t.jsx)(n.h4,{id:"1-create-and-configure-a-device-client",children:"1. Create and configure a Device Client"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"DeviceClient"})," allow you to connect to Project Aria glasses over Wi-Fi or USB."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"device_client = aria.DeviceClient()\n"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.code,{children:"DeviceClient"})," connects to Aria glasses over USB. To connect to glasses over Wi-Fi, configure the ",(0,t.jsx)(n.code,{children:"DeviceClient"})," by creating a ",(0,t.jsx)(n.code,{children:"DeviceClientConfig"}),", setting ",(0,t.jsx)(n.code,{children:"ip_v4_address"})," and setting the config."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"client_config = aria.DeviceClientConfig()\nif args.ip_address:\n    client_config.ip_v4_address = args.ip_address\ndevice_client.set_client_config(client_config)\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Get your Aria glasses' IP address from the Mobile Companion App by tapping ",(0,t.jsx)(n.a,{href:"/docs/ARK/mobile_companion_app#dashboard",children:"Wi-Fi on the Dashboard"}),"."]})}),"\n",(0,t.jsx)(n.h4,{id:"2-connect-to-a-device",children:"2. Connect to a Device"}),"\n",(0,t.jsxs)(n.p,{children:["Connect to the Aria glasses and retrieve a ",(0,t.jsx)(n.code,{children:"Device"})," instance. An Exception will be thrown if the connection is not successful."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"device = device_client.connect()\n"})}),"\n",(0,t.jsx)(n.h4,{id:"3-fetch-device-status-and-information",children:"3. Fetch device status and information"}),"\n",(0,t.jsx)(n.p,{children:"We can then obtain the device status and information:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'status = device.status\nprint(\n    "Aria Device Status: battery level {0}, wifi ssid {1}, wifi ip {2}, mode {3}".format(\n        status.battery_level,\n        status.wifi_ssid,\n        status.wifi_ip_address,\n        status.device_mode,\n    )\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.a,{href:"/docs/ARK/sdk/api_reference#ariasdkdevicestatus",children:"full status list"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'info = device.info\nprint(\n    "Aria Device Info: model {}, serial {}, manufacturer {}".format(\n        info.model, info.serial, info.manufacturer\n    )\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.a,{href:"/docs/ARK/sdk/api_reference#ariasdkdeviceinfo",children:"full information list"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"4-disconnect",children:"4. Disconnect"}),"\n",(0,t.jsx)(n.p,{children:"Once all operations have been completed, you can disconnect from your glasses to release any held resources."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"device_client.disconnect(device)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(96540);const t={},c=s.createContext(t);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);