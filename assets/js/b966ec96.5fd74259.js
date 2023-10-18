"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5241],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),u=function(e){return function(t){var n=m(t.components);return o.createElement(e,a({},t,{components:n}))}},m=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,p=u["".concat(i,".").concat(c)]||u[c]||h[c]||a;return n?o.createElement(p,s(s({ref:t},d),{},{components:n})):o.createElement(p,s({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},81914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));n(79524);const a={sidebar_position:45,title:"SDK Troubleshooting & Known Issues"},i="Client SDK & CLI Troubleshooting & Known Issues",s={unversionedId:"ARK/sdk/sdk_troubleshooting",id:"ARK/sdk/sdk_troubleshooting",title:"SDK Troubleshooting & Known Issues",description:"Overview",source:"@site/docs/ARK/sdk/sdk_troubleshooting.mdx",sourceDirName:"ARK/sdk",slug:"/ARK/sdk/sdk_troubleshooting",permalink:"/projectaria_tools/docs/ARK/sdk/sdk_troubleshooting",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/sdk_troubleshooting.mdx",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,title:"SDK Troubleshooting & Known Issues"},sidebar:"tutorialSidebar",previous:{title:"Command Reference",permalink:"/projectaria_tools/docs/ARK/sdk/cli/api_reference"},next:{title:"Mobile Companion App",permalink:"/projectaria_tools/docs/ARK/mobile_companion_app"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Aria Doctor",id:"aria-doctor",level:2},{value:"Connection and pairing issues",id:"connection-and-pairing-issues",level:2},{value:"Computer can&#39;t find Aria Glasses",id:"computer-cant-find-aria-glasses",level:3},{value:"Mobile app doesn&#39;t receive authorization",id:"mobile-app-doesnt-receive-authorization",level:3},{value:"If you&#39;ve paired multiple Aria glasses to the one account",id:"if-youve-paired-multiple-aria-glasses-to-the-one-account",level:4},{value:"Streaming or Recording Issues",id:"streaming-or-recording-issues",level:2},{value:"Lost Internet Connection (MacOS)",id:"lost-internet-connection-macos",level:3},{value:"Can&#39;t start streaming/recording. RuntimeError: (9) Failed to read data from socket: Operation canceled",id:"cant-start-streamingrecording-runtimeerror-9-failed-to-read-data-from-socket-operation-canceled",level:3},{value:"Streaming is laggy/ only some streaming visualizations appear/ visualizer is blank",id:"streaming-is-laggy-only-some-streaming-visualizations-appear-visualizer-is-blank",level:3},{value:"Corporate or VPN interference (even if streaming via ADB)",id:"corporate-or-vpn-interference-even-if-streaming-via-adb",level:4},{value:"Aria Glasses and Computer on different Wi-Fi networks",id:"aria-glasses-and-computer-on-different-wi-fi-networks",level:4},{value:"How to adjust Wi-Fi settings via the mobile app",id:"how-to-adjust-wi-fi-settings-via-the-mobile-app",level:5},{value:"Resources are tied up",id:"resources-are-tied-up",level:4},{value:"Linux connection issue",id:"linux-connection-issue",level:4}],u={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.mdx)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"client-sdk--cli-troubleshooting--known-issues"},"Client SDK & CLI Troubleshooting & Known Issues"),(0,r.mdx)("h2",{id:"overview"},"Overview"),(0,r.mdx)("p",null,"This page provides troubleshooting information specific to using Project Aria Client SDK or CLI."),(0,r.mdx)("p",null,"Go to the ",(0,r.mdx)("a",{parentName:"p",href:"https://facebookresearch.github.io/projectaria_tools/docs/ARK/glasses_manual/glasses_user_manual"},"Aria Glasses User Manual")," for general information about using your glasses."),(0,r.mdx)("p",null,"Go to the ",(0,r.mdx)("a",{parentName:"p",href:"https://facebookresearch.github.io/projectaria_tools/docs/ARK/troubleshooting/troubleshooting_issues"},"Aria Research Kit (ARK) Troubleshooting and Known Issues page")," for general Aria Glasses troubleshooting information."),(0,r.mdx)("h2",{id:"aria-doctor"},"Aria Doctor"),(0,r.mdx)("p",null,"The Project Aria Doctor utility can help detect and resolve common issues connecting and streaming from the glasses."),(0,r.mdx)("p",null,"Run the utility using the following command and follow the prompts to resolve any issues."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"aria-doctor\n")),(0,r.mdx)("h2",{id:"connection-and-pairing-issues"},"Connection and pairing issues"),(0,r.mdx)("h3",{id:"computer-cant-find-aria-glasses"},"Computer can't find Aria Glasses"),(0,r.mdx)("p",null,"It may be that the battery is drained, make sure your Aria Glasses are correctly charging (there should be a blue LED on the right arm) and wait ten minutes."),(0,r.mdx)("p",null,"On Linux, this may be due to USB driver issues. See ",(0,r.mdx)("a",{parentName:"p",href:"https://facebookresearch.github.io/projectaria_tools/docs/ARK/troubleshooting/linux_usb_driver"},"Fix USB Driver Issues in Linux")),(0,r.mdx)("h3",{id:"mobile-app-doesnt-receive-authorization"},"Mobile app doesn't receive authorization"),(0,r.mdx)("p",null,"If you use ",(0,r.mdx)("inlineCode",{parentName:"p"},"aria auth pair")," and don't receive an authorization prompt in the Mobile Companion app, try the following steps."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Make sure the Mobile Companion app is in the foreground and try again"),(0,r.mdx)("li",{parentName:"ol"},"Restart the Mobile Companion app and try again"),(0,r.mdx)("li",{parentName:"ol"},"Revoke any existing certificates (via ",(0,r.mdx)("a",{parentName:"li",href:"/docs/ARK/mobile_companion_app#aria-device-settings"},"Device Settings")," and try again")),(0,r.mdx)("h4",{id:"if-youve-paired-multiple-aria-glasses-to-the-one-account"},"If you've paired multiple Aria glasses to the one account"),(0,r.mdx)("p",null,"If you've paired multiple Aria glasses to the one account, the wrong glasses may be connected to the app."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Tap ",(0,r.mdx)("strong",{parentName:"li"},"Select other")," on the top right of the dashboard",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"If you see ",(0,r.mdx)("strong",{parentName:"li"},"Add glasses")," instead, only one set of Aria glasses is connected to this account"))),(0,r.mdx)("li",{parentName:"ol"},"Tap the glasses connected to your computer")),(0,r.mdx)("p",null,"If you're not sure which glasses you're using:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Go to Device Info in the Mobile Companion app to find out the serial number of the glasses that are currently connected to the Mobile Companion app"),(0,r.mdx)("li",{parentName:"ol"},"To find out the serial number of the glasses connected to your computer",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"The serial number is printed on the right arm of the glasses, near the privacy switch (go to the Glasses Manual for screenshots of where it is)"),(0,r.mdx)("li",{parentName:"ul"},"In Terminal, use ",(0,r.mdx)("inlineCode",{parentName:"li"},"adb devices")," (",(0,r.mdx)("a",{parentName:"li",href:"https://developer.android.com/studio/command-line/adb"},"ADB")," is part of Android Studio)",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"The device number returned is the serial number")))))),(0,r.mdx)("h2",{id:"streaming-or-recording-issues"},"Streaming or Recording Issues"),(0,r.mdx)("h3",{id:"lost-internet-connection-macos"},"Lost Internet Connection (MacOS)"),(0,r.mdx)("p",null,"If you lose internet connection on MacOS while streaming, run ",(0,r.mdx)("inlineCode",{parentName:"p"},"aria-doctor")," in a separate terminal."),(0,r.mdx)("h3",{id:"cant-start-streamingrecording-runtimeerror-9-failed-to-read-data-from-socket-operation-canceled"},"Can't start streaming/recording. RuntimeError: (9) Failed to read data from socket: Operation canceled"),(0,r.mdx)("p",null,"You may encounter this error message if you:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Tried to start streaming/recording and the Privacy Switch was engaged"),(0,r.mdx)("li",{parentName:"ul"},"Turned off the Privacy Switch"),(0,r.mdx)("li",{parentName:"ul"},"Immediately tried to start recording again")),(0,r.mdx)("p",null,"The Aria glasses were still switching modes. Please try again."),(0,r.mdx)("h3",{id:"streaming-is-laggy-only-some-streaming-visualizations-appear-visualizer-is-blank"},"Streaming is laggy/ only some streaming visualizations appear/ visualizer is blank"),(0,r.mdx)("p",null,"This issue can occur for several reasons."),(0,r.mdx)("h4",{id:"corporate-or-vpn-interference-even-if-streaming-via-adb"},"Corporate or VPN interference (even if streaming via ADB)"),(0,r.mdx)("p",null,"This issue may occur if you're on a VPN or corporate network. Even if you're only streaming via ADB, some security protocols may interfere."),(0,r.mdx)("h4",{id:"aria-glasses-and-computer-on-different-wi-fi-networks"},"Aria Glasses and Computer on different Wi-Fi networks"),(0,r.mdx)("admonition",{type:"info"},(0,r.mdx)("p",{parentName:"admonition"},"This can occur if you know you've set both devices to the same network!")),(0,r.mdx)("p",null,"Devices will sometimes preferentially switch back to Wi-Fi connections with stronger signal strength, so you may need to forget a corporate network on the Aria Glasses or computer."),(0,r.mdx)("h5",{id:"how-to-adjust-wi-fi-settings-via-the-mobile-app"},"How to adjust Wi-Fi settings via the mobile app"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Open the Aria Mobile Companion App"),(0,r.mdx)("li",{parentName:"ol"},"In the Paired Glasses section of the Dashboard, select Select Wi-Fi"),(0,r.mdx)("li",{parentName:"ol"},"Select your preferred network and follow the prompts to connect",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"You can also forget an existing network from the Wi-Fi menu"),(0,r.mdx)("li",{parentName:"ul"},"Make sure it is a non-corporate network that is the same as your computer"),(0,r.mdx)("li",{parentName:"ul"},"The glasses Wi-Fi network is independent of your phone's Wi-Fi network")))),(0,r.mdx)("p",null,"Once connected, the Wi-Fi network name will appear in the Desktop App under My Device underneath the WiFi icon which will become blue."),(0,r.mdx)("h4",{id:"resources-are-tied-up"},"Resources are tied up"),(0,r.mdx)("p",null,"You may have a previous streaming session running. Follow the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/ARK/sdk/samples/device_stream"},"device_stream.py")," or ",(0,r.mdx)("a",{parentName:"p",href:"/docs/ARK/sdk/samples/streaming_subscribe"},"streaming_subscribe.py")," instructions to stop the stream and free resources."),(0,r.mdx)("h4",{id:"linux-connection-issue"},"Linux connection issue"),(0,r.mdx)("p",null,"If streaming on Linux does not show any data, try the following steps to address connection issues:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Make sure that you have run the nmcli command shown in ",(0,r.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/sdk/setup"},"the setup instructions")),(0,r.mdx)("li",{parentName:"ol"},"Make sure that the UDP ports used for streaming are not blocked by your machine firewall. You can add an iptable entry to open these ports with the following commands")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"sudo iptables -A INPUT -p udp -m udp --dport 7000:8000 -j ACCEPT\n")),(0,r.mdx)("ol",{start:3},(0,r.mdx)("li",{parentName:"ol"},'Ensure that during streaming, USB Ethernet tab in the "Network Settings Window" has ',(0,r.mdx)("inlineCode",{parentName:"li"},"Aria")," selected")))}c.isMDXComponent=!0}}]);