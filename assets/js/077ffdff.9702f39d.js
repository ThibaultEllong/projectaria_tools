"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5394],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),c=function(e){return function(t){var a=d(t.components);return r.createElement(e,i({},t,{components:a}))}},d=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,p=c["".concat(l,".").concat(m)]||c[m]||f[m]||i;return a?r.createElement(p,o(o({ref:t},u),{},{components:a})):r.createElement(p,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var r=a(67294),n=a(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.default)(i.tabItem,l),hidden:a},t)}},73992:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var r=a(87462),n=a(67294),i=a(86010),l=a(72957),o=a(16550),s=a(75238),u=a(33609),c=a(92560);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=m(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,u]=f({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),h=(()=>{const e=s??d;return p({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var h=a(51048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==o&&(d(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,i.default)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function x(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=b(e);return n.createElement("div",{className:(0,i.default)("tabs-container",g.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(x,(0,r.Z)({},e,t)))}function y(e){const t=(0,h.default)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},82663:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),i=(a(79524),a(73992)),l=a(18679);const o={sidebar_position:1,title:"About the SDK"},s="Project Aria Client SDK and CLI",u={unversionedId:"ARK/sdk/sdk",id:"ARK/sdk/sdk",title:"About the SDK",description:"The Project Aria Client SDK provides robust capabilities for creating computer vision and machine learning applications with Project Aria glasses. CLI capabilities are also installed as part of the SDK.",source:"@site/docs/ARK/sdk/sdk.mdx",sourceDirName:"ARK/sdk",slug:"/ARK/sdk/",permalink:"/projectaria_tools/docs/ARK/sdk/",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/sdk.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"About the SDK"},sidebar:"tutorialSidebar",previous:{title:"Recording Profile Guide",permalink:"/projectaria_tools/docs/ARK/glasses_manual/profile_guide"},next:{title:"Setup Guide",permalink:"/projectaria_tools/docs/ARK/sdk/setup"}},c={},d=[{value:"Client SDK and CLI capabilities",id:"client-sdk-and-cli-capabilities",level:3},{value:"This documentation covers:",id:"this-documentation-covers",level:3}],m={toc:d},p="wrapper";function f(e){let{components:t,...a}=e;return(0,n.mdx)(p,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"project-aria-client-sdk-and-cli"},"Project Aria Client SDK and CLI"),(0,n.mdx)("p",null,"The Project Aria Client SDK provides robust capabilities for creating computer vision and machine learning applications with Project Aria glasses. CLI capabilities are also installed as part of the SDK."),(0,n.mdx)("h3",{id:"client-sdk-and-cli-capabilities"},"Client SDK and CLI capabilities"),(0,n.mdx)(i.default,{groupId:"cli-sdk-capabilities",mdxType:"Tabs"},(0,n.mdx)(l.default,{value:"sdk",label:"SDK",mdxType:"TabItem"},(0,n.mdx)("p",null,"Through the SDK you can:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Connect and disconnect from the glasses via USB or Wi-Fi"),(0,n.mdx)("li",{parentName:"ul"},"Retrieve detailed device information and its current status"),(0,n.mdx)("li",{parentName:"ul"},"Control Aria recording capabilities"),(0,n.mdx)("li",{parentName:"ul"},"Control Aria streaming capabilities"),(0,n.mdx)("li",{parentName:"ul"},"Access calibration data for the sensors you're recording with"),(0,n.mdx)("li",{parentName:"ul"},"Subscribe and listen to Aria sensor data"),(0,n.mdx)("li",{parentName:"ul"},"Visualize streaming data"))),(0,n.mdx)(l.default,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,n.mdx)("p",null,"Through the CLI, you can:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Pair the glasses via USB or Wi-Fi"),(0,n.mdx)("li",{parentName:"ul"},"Connect to the glasses via USB or Wi-Fi"),(0,n.mdx)("li",{parentName:"ul"},"Control Aria recording capabilities"),(0,n.mdx)("li",{parentName:"ul"},"Control Aria streaming capabilities")))),(0,n.mdx)("h3",{id:"this-documentation-covers"},"This documentation covers:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk/setup"},"Set Up Guide"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Requirements"),(0,n.mdx)("li",{parentName:"ul"},"Download and Install"),(0,n.mdx)("li",{parentName:"ul"},"Pair your Aria glasses to the computer"),(0,n.mdx)("li",{parentName:"ul"},"Download code samples"))),(0,n.mdx)("li",{parentName:"ul"},"Code Samples",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk/samples/device_connection"},"device_connect"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Connect to the Aria glasses using USB",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"USB connection is required to initiate all connections, including streaming over Wi-Fi"))),(0,n.mdx)("li",{parentName:"ul"},"Fetch device information, such as the device serial number"),(0,n.mdx)("li",{parentName:"ul"},"Fetch device status, such as battery level or Wi-Fi SSID"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk/samples/device_recording"},"device_record"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Set a ",(0,n.mdx)("a",{parentName:"li",href:"/docs/tech_spec/recording_profiles"},"recording profile")),(0,n.mdx)("li",{parentName:"ul"},"Access sensor calibration through the recording manager"),(0,n.mdx)("li",{parentName:"ul"},"Start recording, stop recording, and record for a specific duration"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk/samples/device_stream"},"device_stream"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Set how the sensors will stream data using ",(0,n.mdx)("a",{parentName:"li",href:"/docs/tech_spec/recording_profiles"},"recording profiles")),(0,n.mdx)("li",{parentName:"ul"},"Access sensor calibration through the streaming manager."),(0,n.mdx)("li",{parentName:"ul"},"Start and stop streaming data from Aria glasses"),(0,n.mdx)("li",{parentName:"ul"},"Visualize the live stream"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk/samples/streaming_subscribe"},"streaming_subscribe"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Subscribe to a streaming session initiated by device_stream and access sensor data through its observer"),(0,n.mdx)("li",{parentName:"ul"},"Visualize the live stream"),(0,n.mdx)("li",{parentName:"ul"},"Unsubscribe from a streaming session"))))),(0,n.mdx)("li",{parentName:"ul"},"Core Concepts",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk/concepts/sdk_sensor_profiles"},"Sensor Profiles")," - access information about Aria Recording Profiles via the CLI or SDK"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk/concepts/streaming_internals"},"Streaming Internals")," - deeper dives into how data is streamed"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk/api_reference"},"API References")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/sdk/cli/"},"CLI documentation")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk/sdk_troubleshooting"},"Troubleshooting"))),(0,n.mdx)("p",null,"If you run into any issues, please check out the ",(0,n.mdx)("a",{parentName:"p",href:"/docs/ARK/sdk/sdk_troubleshooting"},"Troubleshooting page"),", post to ",(0,n.mdx)("a",{parentName:"p",href:"/docs/ARK/workplacegroup"},"Academic Partners Feedback and Support")," or email to ",(0,n.mdx)("a",{parentName:"p",href:"mailto:AriaOps@meta.com"},"AriaOps@meta.com")))}f.isMDXComponent=!0}}]);