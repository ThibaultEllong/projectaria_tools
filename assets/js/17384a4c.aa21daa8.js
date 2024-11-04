"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2572],{40915:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"data_utilities/core_code_snippets/calibration","title":"Calibration","description":"This section covers how to use Project Aria Tools to:","source":"@site/docs/data_utilities/core_code_snippets/calibration.mdx","sourceDirName":"data_utilities/core_code_snippets","slug":"/data_utilities/core_code_snippets/calibration","permalink":"/projectaria_tools/docs/data_utilities/core_code_snippets/calibration","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/core_code_snippets/calibration.mdx","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_position":30,"title":"Calibration"},"sidebar":"tutorialSidebar","previous":{"title":"Image","permalink":"/projectaria_tools/docs/data_utilities/core_code_snippets/image"},"next":{"title":"MPS - General","permalink":"/projectaria_tools/docs/data_utilities/core_code_snippets/mps"}}');var t=n(74848),r=n(28453),o=n(49489),s=n(7227);const l={sidebar_position:30,title:"Calibration"},c="Calibration Code Snippets",d={},u=[{value:"Accessing device calibration",id:"accessing-device-calibration",level:3},{value:"Accessing 6DoF poses of sensors with Sophus Python binding",id:"accessing-6dof-poses-of-sensors-with-sophus-python-binding",level:3},{value:"Accessing sensor calibration",id:"accessing-sensor-calibration",level:3},{value:"Accessing ET and Microphone calibration",id:"accessing-et-and-microphone-calibration",level:3},{value:"Python binding for Sophus library",id:"python-binding-for-sophus-library",level:2},{value:"Feature list",id:"feature-list",level:3},{value:"Import Sophus Python binding",id:"import-sophus-python-binding",level:3},{value:"Example code",id:"example-code",level:3},{value:"Vectorization detail",id:"vectorization-detail",level:3},{value:"Passing a single SO3/SE3 object to C++ code in Python binding",id:"passing-a-single-so3se3-object-to-c-code-in-python-binding",level:3}];function h(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"calibration-code-snippets",children:"Calibration Code Snippets"})}),"\n",(0,t.jsx)(i.p,{children:"This section covers how to use Project Aria Tools to:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Access calibration data from Project Aria VRS files","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Python or C++ API (",(0,t.jsx)(i.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/core/calibration",children:"projectaria_tools/main/core/calibration"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Use Python bindings for the ",(0,t.jsx)(i.a,{href:"https://github.com/strasdat/Sophus",children:"Sophus Library"})," to access to SO3, SE3, interpolate and iterative mean features (",(0,t.jsx)(i.a,{href:"https://github.com/facebookresearch/projectaria_tools/tree/main/core/python/sophus",children:"projectaria_tools/main/core/sophus"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Go to the ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/faq#calibration",children:"Project Aria FAQ"})," for more calibration information and resources."]}),"\n",(0,t.jsx)(i.h3,{id:"accessing-device-calibration",children:"Accessing device calibration"}),"\n",(0,t.jsx)(i.p,{children:"Device calibration stores:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The device's CAD model, which contains the 6DoF poses of sensors of the device as designed."}),"\n",(0,t.jsxs)(i.li,{children:["The calibration of all sensors on a single Aria device. See the ",(0,t.jsx)(i.a,{href:"#accessing-sensor-calibration",children:"Accessing sensor calibration"})," section for details."]}),"\n",(0,t.jsxs)(i.li,{children:["The device's sub-type (",(0,t.jsx)(i.code,{children:"DVT-S"})," or ",(0,t.jsx)(i.code,{children:"DVT-L"})," to indicate small or large)"]}),"\n"]}),"\n",(0,t.jsxs)(o.default,{groupId:"programming-language",children:[(0,t.jsx)(s.default,{value:"python",label:"Python",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'from projectaria_tools.core import data_provider, calibration\nfrom projectaria_tools.core.stream_id import StreamId\n\nvrsfile = "example.vrs"\nprovider = data_provider.create_vrs_data_provider(vrsfile)\n\n# returns None if vrs does not have a calibration\ndevice_calib = provider.get_device_calibration()\nprint(device_calib.get_device_subtype())\n'})})}),(0,t.jsx)(s.default,{value:"cpp",label:"C++",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:'#include <dataprovider/VrsDataProvider.h>\nusing namespace projectaria::tools::data_provider;\nusing namespace projectaria::tools::calibration;\n\nstd::string vrsfile = "example.vrs"\nauto maybeProvider = createVrsDataProvider(vrsFilename);\nXR_CHECK(maybeProvider, "Cannot open file");\nauto&provider = *maybeProvider;\n\n// returns nullopt if vrs does not have a calibration\nauto deviceCalib = provider.getDeviceCalibration();\nstd::cout << deviceCalib..getDeviceSubtype() << std::endl;\n'})})})]}),"\n",(0,t.jsx)(i.h3,{id:"accessing-6dof-poses-of-sensors-with-sophus-python-binding",children:"Accessing 6DoF poses of sensors with Sophus Python binding"}),"\n",(0,t.jsxs)(i.p,{children:["All 6DoF poses (a.k.a. extrinsic parameters) are represented as relative to the device frame.\nThe device frame is a specific sensor frame, identified by the sensor's label. Aria device frame is by default ",(0,t.jsx)(i.code,{children:"camera-slam-left"}),".\nWe also provide the pose of ",(0,t.jsx)(i.a,{href:"/docs/data_formats/coordinate_convention/3d_coordinate_frame_convention#the-nominal-central-pupil-frame-cpf",children:"the central-pupil-frame"})," in the device frame or as relative to a sensor frame."]}),"\n",(0,t.jsxs)(o.default,{groupId:"programming-language",children:[(0,t.jsx)(s.default,{value:"python",label:"Python",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'label = "camera-slam-right"\ntransform_device_sensor = device_calib.get_transform_device_sensor(label)\ntransform_device_cpf = device_calib.get_transform_device_cpf()\ntransform_cpf_sensor = device_calib.get_transform_cpf_sensor(label)\n'})})}),(0,t.jsx)(s.default,{value:"cpp",label:"C++",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:'std::string label = "camera-slam-right";\nSophus::SE3d T_Device_Sensor = deviceCalib.getT_Device_Sensor(label);\nSophus::SE3d T_Device_Cpf = deviceCalib.getT_Device_Cpf();\nSophus::SE3d T_Cpf_Sensor = deviceCalib.getT_Cpf_Sensor(label);\n'})})})]}),"\n",(0,t.jsx)(i.h3,{id:"accessing-sensor-calibration",children:"Accessing sensor calibration"}),"\n",(0,t.jsxs)(i.p,{children:["Each sensor on the device ",(0,t.jsx)(i.em,{children:"may"})," have a corresponding stream in the vrs and may have a corresponding calibration.\nHowever, some types of sensors may not have calibration defined for them (e.g. GPS, WPS, bluetooth), and some sensors may not record stream in a specific vrs.\nFor sensor streams where calibration is available, they can be accessed by labels:"]}),"\n",(0,t.jsxs)(o.default,{groupId:"programming-language",children:[(0,t.jsxs)(s.default,{value:"python",label:"Python",children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"# returns None if vrs does not have a calibration\ndevice_calib = provider.get_device_calibration()\nsensor_calib = device_calib.get_sensor_calib(label)\n"})}),(0,t.jsx)(i.p,{children:"More conveniently, you can just do"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'stream_id = StreamId("1201-1")\ncalib = provider.get_sensor_calibration(stream_id)\n'})}),(0,t.jsx)(i.p,{children:"If you know the calibration type, you can also do"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'# returns None if the calibration label does not exist\ncam_calib = device_calib.get_camera_calib("camera-rgb");\nimu_calib = device_calib.get_imu_calib("imu-left");\n'})})]}),(0,t.jsxs)(s.default,{value:"cpp",label:"C++",children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:"// returns nullopt if vrs does not have a calibration\nauto deviceCalib = provider.getDeviceCalibration();\nauto sensorCalib = deviceCalib.getSensorCalib(label);\n"})}),(0,t.jsx)(i.p,{children:"More conveniently, you can just do"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'vrs::StreamId streamId = vrs::StreamId::fromNumericalName("1201-1");\nauto maybeCalib = provider.getSensorCalibration(streamId);\n'})}),(0,t.jsx)(i.p,{children:"If you know the calibration type, you can also do"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:'// returns nullopt if the calibration label does not exist\nauto camCalib = deviceCalib.getCameraCalib("camera-rgb");\nauto imuCalib = deviceCalib.getImuCalib("imu-left");\n'})})]})]}),"\n",(0,t.jsx)(i.h3,{id:"accessing-et-and-microphone-calibration",children:"Accessing ET and Microphone calibration"}),"\n",(0,t.jsx)(i.p,{children:"Note Aria's ET camera stream and audio are special types:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Aria's ET stream switches the stream for left and right ET together, thus its calibration is a pair of CameraCalibration."}),"\n",(0,t.jsx)(i.li,{children:"Aria's Audio stream has 7 channels, thus its calibration is an array of seven microphone calib."}),"\n"]}),"\n",(0,t.jsxs)(o.default,{groupId:"programming-language",children:[(0,t.jsx)(s.default,{value:"python",label:"Python",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"# returns None if the calibration label does not exist\net_calib = device_calib.get_aria_et_camera_calib()\nprint(et_calib[0].get_label())\nmic_calib = device_calib.get_aria_microphone_calib()\nprint(mic_calib[0].get_label())\n"})})}),(0,t.jsx)(s.default,{value:"cpp",label:"C++",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:"// returns nullopt if the calibration label does not exist\nauto etCalib = *deviceCalib.getAriaEtCalib()\nstd::cout << etCalib[0].getLabel() << std::endl;\nauto micCalib = *deviceCalib.getAriaMicCalib()\nstd::cout << micCalib[0].getLabel() << std::endl;\n"})})})]}),"\n",(0,t.jsx)("div",{id:"sophus"}),"\n",(0,t.jsx)(i.h2,{id:"python-binding-for-sophus-library",children:"Python binding for Sophus library"}),"\n",(0,t.jsxs)(i.p,{children:["Sophus Python PyBind implements Python binding for ",(0,t.jsx)(i.a,{href:"https://github.com/strasdat/Sophus",children:"Sophus"})," that provides access to SO3, SE3, interpolate and iterativeMean features."]}),"\n",(0,t.jsx)(i.p,{children:"This Python binding has been submitted to Sophus and will be officially supported by the Sophus Library GitHub repo soon. Once it is available through the Sophus Library, this section will point to Sophus documentation and code, to avoid duplication."}),"\n",(0,t.jsxs)(i.p,{children:["The user interface is inspired by ",(0,t.jsx)(i.a,{href:"https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.transform.Rotation.html",children:"scipy.spatial.transform.Rotation"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"feature-list",children:"Feature list"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["SO3","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Initialize with from_quat(), from_matrix(), exp()"}),"\n",(0,t.jsx)(i.li,{children:"Convert to functions: to_quat(), to_matrix(), log()"}),"\n",(0,t.jsx)(i.li,{children:"Multiplication with SO3 or 3D points"}),"\n",(0,t.jsx)(i.li,{children:"Operator [] for setting/getting items with index or slices"}),"\n",(0,t.jsx)(i.li,{children:"Inverse, copy, print, and len"}),"\n",(0,t.jsx)(i.li,{children:"Function vectorization"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["SE3","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Initialize with from_quat_and_translation(), from_matrix(), from_matrix3x4(), exp()"}),"\n",(0,t.jsx)(i.li,{children:"Convert to functions to_quat_and_translation(), to_matrix(), to_matrix3x4(), log()"}),"\n",(0,t.jsx)(i.li,{children:"Multiplication with SE3 or 3D points"}),"\n",(0,t.jsx)(i.li,{children:"Get rotation and translation component with rotation() and translation()"}),"\n",(0,t.jsx)(i.li,{children:"Operator [] for setting/getting items with index or slices"}),"\n",(0,t.jsx)(i.li,{children:"Function vectorization"}),"\n",(0,t.jsx)(i.li,{children:"Inverse, copy, print, and len"}),"\n",(0,t.jsx)(i.li,{children:"Interpolate between two SE3"}),"\n",(0,t.jsx)(i.li,{children:"Iterative mean of a group of SE3"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"import-sophus-python-binding",children:"Import Sophus Python binding"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"from projectaria_tools.core.sophus import SO3, SE3, interpolate, iterativeMean\n"})}),"\n",(0,t.jsx)(i.h3,{id:"example-code",children:"Example code"}),"\n",(0,t.jsxs)(i.p,{children:["Example code is provided in ",(0,t.jsx)(i.code,{children:"projectaria_tools/core/examples/sophus_quickstart_tutorial.ipynb"})]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"python3 -m jupyter"})," ensures that the Jupyter comes from the virtual environment that contains the projectaria_tools module."]}),"\n",(0,t.jsx)(i.h3,{id:"vectorization-detail",children:"Vectorization detail"}),"\n",(0,t.jsxs)(i.p,{children:["In Python, we chose to export our Sophus::SO3 as a vector of SO3 objects by binding the cpp object ",(0,t.jsx)(i.code,{children:"SO3Group"})," defined below. This is because numerical code in Python tends to work with array of values so that the program can be efficient. This approach is inspired by scipy.spatial.transform.Rotation."]}),"\n",(0,t.jsx)(i.h3,{id:"passing-a-single-so3se3-object-to-c-code-in-python-binding",children:"Passing a single SO3/SE3 object to C++ code in Python binding"}),"\n",(0,t.jsx)(i.p,{children:"To allow other Python binding C++ code to take in a single SO3/SE3 object, we built a caster so that, even if we wrap SO3Group/SE3Group in Python, those can be implicitly converted to the C++ Sophus::SO3/SE3 object at the boundaries between languages."}),"\n",(0,t.jsx)(i.p,{children:"This enables us to pass the Python SO3/SE3 object to a C++ function as if they were a regular 1-element Sophus::SO3/SE3 object. This simplifies binding the rest of the C++ code. The implicit cast fails if the Python object is not a 1-element object."})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},7227:(e,i,n)=>{n.r(i),n.d(i,{default:()=>o});n(96540);var a=n(34164);const t={tabItem:"tabItem_Ymn6"};var r=n(74848);function o(e){let{children:i,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,o),hidden:n,children:i})}},49489:(e,i,n)=>{n.r(i),n.d(i,{default:()=>y});var a=n(96540),t=n(34164),r=n(24245),o=n(56347),s=n(36494),l=n(62814),c=n(45167),d=n(69900);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:i,children:n}=e;return(0,a.useMemo)((()=>{const e=i??function(e){return u(e).map((e=>{let{props:{value:i,label:n,attributes:a,default:t}}=e;return{value:i,label:n,attributes:a,default:t}}))}(n);return function(e){const i=(0,c.XI)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,n])}function p(e){let{value:i,tabValues:n}=e;return n.some((e=>e.value===i))}function b(e){let{queryString:i=!1,groupId:n}=e;const t=(0,o.W6)(),r=function(e){let{queryString:i=!1,groupId:n}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:i,groupId:n});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const i=new URLSearchParams(t.location.search);i.set(r,e),t.replace({...t.location,search:i.toString()})}),[r,t])]}function m(e){const{defaultValue:i,queryString:n=!1,groupId:t}=e,r=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:i,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!p({value:i,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:r}))),[c,u]=b({queryString:n,groupId:t}),[m,f]=function(e){let{groupId:i}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(i),[t,r]=(0,d.Dv)(n);return[t,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),v=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=n(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:i,block:n,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const i=e.currentTarget,n=l.indexOf(i),t=s[n].value;t!==a&&(c(i),o(t))},u=e=>{let i=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;i=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;i=l[n]??l[l.length-1];break}}i?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},i),children:s.map((e=>{let{value:i,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===i?0:-1,"aria-selected":a===i,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,t.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===i}),children:n??i},i)}))})}function j(e){let{lazy:i,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(i){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,i)=>(0,a.cloneElement)(e,{key:i,hidden:e.props.value!==r})))})}function _(e){const i=m(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...i,...e}),(0,g.jsx)(j,{...i,...e})]})}function y(e){const i=(0,f.default)();return(0,g.jsx)(_,{...e,children:u(e.children)},String(i))}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>s});var a=n(96540);const t={},r=a.createContext(t);function o(e){const i=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);