"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[622],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>v,useMDXComponents:()=>m,withMDXComponents:()=>s});var i=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,i,t=function(e,r){if(null==e)return{};var n,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=i.createContext({}),s=function(e){return function(r){var n=m(r.components);return i.createElement(e,a({},r,{components:n}))}},m=function(e){var r=i.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=m(e.components);return i.createElement(p.Provider,{value:r},e.children)},u="mdxType",x={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},f=i.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=m(n),c=t,u=s["".concat(l,".").concat(c)]||s[c]||x[c]||a;return n?i.createElement(u,o(o({ref:r},p),{},{components:n})):i.createElement(u,o({ref:r},p))}));function v(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[u]="string"==typeof e?e:t,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93622:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),t=(n(67294),n(3905));n(79524);const a={sidebar_position:10,title:"Command Reference"},l=void 0,o={unversionedId:"ARK/sdk/cli/api_reference",id:"ARK/sdk/cli/api_reference",title:"Command Reference",description:"Authentication",source:"@site/docs/ARK/sdk/cli/api_reference.mdx",sourceDirName:"ARK/sdk/cli",slug:"/ARK/sdk/cli/api_reference",permalink:"/projectaria_tools/docs/ARK/sdk/cli/api_reference",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/cli/api_reference.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Command Reference"},sidebar:"tutorialSidebar",previous:{title:"cli",permalink:"/projectaria_tools/docs/ARK/sdk/cli/"},next:{title:"Troubleshooting & Known Issues",permalink:"/projectaria_tools/docs/ARK/sdk/sdk_troubleshooting"}},d={},p=[{value:"Authentication",id:"authentication",level:2},{value:"pair",id:"pair",level:3},{value:"unpair",id:"unpair",level:3},{value:"Device",id:"device",level:2},{value:"list",id:"list",level:3},{value:"info",id:"info",level:3},{value:"status",id:"status",level:3},{value:"default-profile",id:"default-profile",level:3},{value:"Options",id:"options",level:4},{value:"Recording",id:"recording",level:2},{value:"start",id:"start",level:3},{value:"Options",id:"options-1",level:4},{value:"stop",id:"stop",level:3},{value:"profiles",id:"profiles",level:3},{value:"Options",id:"options-2",level:4},{value:"Streaming",id:"streaming",level:2},{value:"start",id:"start-1",level:3},{value:"Options",id:"options-3",level:4},{value:"stop",id:"stop-1",level:3},{value:"Options",id:"options-4",level:2},{value:"profiles",id:"profiles-1",level:3},{value:"Options",id:"options-5",level:4},{value:"install-certs",id:"install-certs",level:3},{value:"Options",id:"options-6",level:4},{value:"uninstall-certs",id:"uninstall-certs",level:3},{value:"Options",id:"options-7",level:4}],s={toc:p},m="wrapper";function c(e){let{components:r,...n}=e;return(0,t.mdx)(m,(0,i.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,t.mdx)("h2",{id:"authentication"},"Authentication"),(0,t.mdx)("p",null,"Manage device pairing with external client over Wi-Fi and USB"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria auth [OPTIONS] SUBCOMMAND\n")),(0,t.mdx)("h3",{id:"pair"},"pair"),(0,t.mdx)("p",null,"Pair device with client"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria auth pair [OPTIONS]\n")),(0,t.mdx)("h3",{id:"unpair"},"unpair"),(0,t.mdx)("p",null,"Unpair device from client"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria auth unpair [OPTIONS]\n")),(0,t.mdx)("h2",{id:"device"},"Device"),(0,t.mdx)("p",null,"Control device."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria device [OPTIONS] SUBCOMMAND\n")),(0,t.mdx)("p",null,"Use ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria device --help")," or ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria device -h")," for usage information."),(0,t.mdx)("h3",{id:"list"},"list"),(0,t.mdx)("p",null,"List connected USB devices."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria device list [OPTIONS]\n")),(0,t.mdx)("p",null,"Use ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria device list --help")," or ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria device list -h")," for usage information."),(0,t.mdx)("h3",{id:"info"},"info"),(0,t.mdx)("p",null,"Get device info."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria device info [OPTIONS]\n")),(0,t.mdx)("p",null,"Use ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria device info --help")," or ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria device info -h")," for usage information."),(0,t.mdx)("h3",{id:"status"},"status"),(0,t.mdx)("p",null,"Get device status."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria device status [OPTIONS]\n")),(0,t.mdx)("p",null,"Use ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria device status --help")," or ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria device status -h")," for usage information."),(0,t.mdx)("h3",{id:"default-profile"},"default-profile"),(0,t.mdx)("p",null,"Manage default profile."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria device default-profile [OPTIONS]\n")),(0,t.mdx)("p",null,"Use ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria device default-profile --help")," or ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria device default-profile -h")," for usage information."),(0,t.mdx)("h4",{id:"options"},"Options"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--status\n")),(0,t.mdx)("p",null,"Get default profile status."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--set\n")),(0,t.mdx)("p",null,"Set default profile."),(0,t.mdx)("h2",{id:"recording"},"Recording"),(0,t.mdx)("p",null,"Control device recording."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"aria recording [OPTIONS] SUBCOMMAND\n")),(0,t.mdx)("p",null,"Use ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria recording --help")," or ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria recording -h")," for usage information."),(0,t.mdx)("h3",{id:"start"},"start"),(0,t.mdx)("p",null,"Start recording."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria recording start [OPTIONS]\n")),(0,t.mdx)("p",null,"Use ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria recording start --help")," or ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria recording start -h")," for usage information."),(0,t.mdx)("h4",{id:"options-1"},"Options"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--profile (string)\n")),(0,t.mdx)("p",null,"Recording profile name."),(0,t.mdx)("h3",{id:"stop"},"stop"),(0,t.mdx)("p",null,"Stop recording."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria recording stop [OPTIONS]\n")),(0,t.mdx)("p",null,"Use ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria recording stop --hel"),"p or ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria recording stop -h")," for usage information."),(0,t.mdx)("h3",{id:"profiles"},"profiles"),(0,t.mdx)("p",null,"List recording profiles."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria recording profiles [OPTIONS]\n")),(0,t.mdx)("p",null,"Use ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria recording profiles --help")," or ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria recording profiles -h")," for usage information."),(0,t.mdx)("h4",{id:"options-2"},"Options"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--save-json (string)\n")),(0,t.mdx)("p",null,"Save profiles as JSON files."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--json-dir (string)\n")),(0,t.mdx)("p",null,"Location of directory where profiles will be saved as JSON files."),(0,t.mdx)("h2",{id:"streaming"},"Streaming"),(0,t.mdx)("p",null,"Control device streaming."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria streaming [OPTIONS] SUBCOMMAND\n")),(0,t.mdx)("p",null,"Use aria streaming --help or aria streaming -h for usage information."),(0,t.mdx)("h3",{id:"start-1"},"start"),(0,t.mdx)("p",null,"Start streaming"),(0,t.mdx)("h2",{id:""}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria streaming start [OPTIONS]\n")),(0,t.mdx)("p",null,"Use aria streaming start --help or aria streaming start -h for usage information."),(0,t.mdx)("h4",{id:"options-3"},"Options"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--profile (string)\n")),(0,t.mdx)("p",null,"Streaming profile name."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--topic-prefix (string)\n")),(0,t.mdx)("p",null,"Streaming topic prefix."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--interface (string)\n")),(0,t.mdx)("p",null,"Streaming interface name. Values can be:","[usb]"," - Streaming over USB. ","[wifi]"," - Streaming over Wi-Fi network. ","[hotspot]"," - Streaming over Aria Wi-Fi hotspot."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--use-ephemeral-certs (flag)\n")),(0,t.mdx)("p",null,"Use ephemeral streaming certs on both device and local host (see aria streaming install-certs --help)"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--local-certs-dir (string)\n")),(0,t.mdx)("p",null,"Local streaming certificates directory. Use to specify the local directory where local streaming certificates are installed on local host."),(0,t.mdx)("h3",{id:"stop-1"},"stop"),(0,t.mdx)("p",null,"Stop streaming."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria streaming stop [OPTIONS]\n")),(0,t.mdx)("p",null,"Use aria streaming stop --help or aria streaming stop -h for usage information."),(0,t.mdx)("h2",{id:"options-4"},"Options"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--remove-ephemeral-certs (flag)\n")),(0,t.mdx)("p",null,"Remove ephemeral streaming certs from local host (see aria streaming uninstall-certs --help to uninstall certs on both device and local host)."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--local-certs-dir (string)\n")),(0,t.mdx)("p",null,"Local streaming certificates directory."),(0,t.mdx)("p",null,"Use to specify the local directory where local streaming certificates are installed on local host."),(0,t.mdx)("h3",{id:"profiles-1"},"profiles"),(0,t.mdx)("p",null,"List streaming profiles."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria streaming profiles [OPTIONS]\n")),(0,t.mdx)("p",null,"Use aria streaming profiles --help or aria streaming profiles -h for usage information."),(0,t.mdx)("h4",{id:"options-5"},"Options"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--save-json (flag)\n")),(0,t.mdx)("p",null,"Save profiles as JSON files."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--json-dir (string)\n")),(0,t.mdx)("p",null,"Location of directory where profiles will be saved as JSON files."),(0,t.mdx)("h3",{id:"install-certs"},"install-certs"),(0,t.mdx)("p",null,"Installs streaming certificates both on the device and on the local host."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria streaming install-certs [OPTIONS]\n")),(0,t.mdx)("p",null,"Use aria streaming install-certs --help or aria streaming install-certs -h for usage information."),(0,t.mdx)("h4",{id:"options-6"},"Options"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--local-certs-dir (string)\n")),(0,t.mdx)("p",null,"Local streaming certificates directory. Use to specify the local directory where local streaming certificates are installed on local host."),(0,t.mdx)("h3",{id:"uninstall-certs"},"uninstall-certs"),(0,t.mdx)("p",null,"Removes streaming certificate both on the device and on the local host."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"aria streaming uninstall-certs [OPTIONS]\n")),(0,t.mdx)("p",null,"Use aria streaming uninstall-certs --help or aria streaming uninstall-certs -h for usage information."),(0,t.mdx)("h4",{id:"options-7"},"Options"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"--local-certs-dir (string)\n")),(0,t.mdx)("p",null,"Local streaming certificates directory. Use to specify the local directory where local streaming certificates are installed on local host."))}c.isMDXComponent=!0}}]);