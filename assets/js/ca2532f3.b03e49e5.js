"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5445],{83992:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var i=a(74848),n=a(28453),r=a(49489),o=a(7227);const s={sidebar_position:50,title:"Data Loader"},l=void 0,d={id:"open_datasets/aria_digital_twin_dataset/data_loader",title:"Data Loader",description:"Data loading is broken down into two main loaders: AriaDigitalTwinDataPathsProvider, AriaDigitalTwinDataProvider.",source:"@site/docs/open_datasets/aria_digital_twin_dataset/data_loader.mdx",sourceDirName:"open_datasets/aria_digital_twin_dataset",slug:"/open_datasets/aria_digital_twin_dataset/data_loader",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_loader",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_digital_twin_dataset/data_loader.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Data Loader"},sidebar:"tutorialSidebar",previous:{title:"Data Format",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format"},next:{title:"Visualizers",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/visualizers"}},c={},h=[{value:"AriaDigitalTwinDataPathsProvider",id:"ariadigitaltwindatapathsprovider",level:2},{value:"AriaDigitalTwinDataProvider",id:"ariadigitaltwindataprovider",level:2},{value:"Skip Data loading",id:"skip-data-loading",level:3},{value:"Check Data Existence",id:"check-data-existence",level:2},{value:"Ground Truth Data Getter Functions",id:"ground-truth-data-getter-functions",level:3},{value:"Getting Instance Information",id:"getting-instance-information",level:4},{value:"Time Query Options",id:"time-query-options",level:4},{value:"Accessing Timestamped Data",id:"accessing-timestamped-data",level:4},{value:"Interpolation Function",id:"interpolation-function",level:4},{value:"Time Synchronization Between Subsequences",id:"time-synchronization-between-subsequences",level:3},{value:"Skeleton Data",id:"skeleton-data",level:3}];function u(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Data loading is broken down into two main loaders: AriaDigitalTwinDataPathsProvider, AriaDigitalTwinDataProvider.\nIn this section, we will give a high level introduction to the two data loader types."}),"\n",(0,i.jsxs)(t.p,{children:["As with most of projectaria_tools, we provide a ",(0,i.jsx)(t.a,{href:"https://github.com/facebookresearch/projectaria_tools/tree/main/projects/AriaDigitalTwinDatasetTools/data_provider",children:"C++ implementation"}),",\nwith ",(0,i.jsx)(t.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/python/AriaDigitalTwinDatasetToolsPyBind.h#L263",children:"pybindings"})," so that users can use our libraries in C++ or Python without loosing functionality."]}),"\n",(0,i.jsx)(t.h2,{id:"ariadigitaltwindatapathsprovider",children:"AriaDigitalTwinDataPathsProvider"}),"\n",(0,i.jsxs)(t.p,{children:["The main goal of this loader is to give the user an easy way to load all filepaths associated with an ADT ",(0,i.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format#sequence-and-subsequence",children:"sequence"})," and the sequence metadata given an input to the sequence folder root path.\nThe AriaDigitalTwinDataPathsProvider also allows the user to select specific annotations to load (e.g., ",(0,i.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format#skeleton-data-and-availability",children:"with or without skeleton"}),").\nOnce a class is instantiated, this can be used manually to query for specific files without needing to know filenames, or the data paths class can be extracted and fed directly to the AriaDigitalTwinDataProvider described below."]}),"\n",(0,i.jsxs)(r.default,{groupId:"programming-language",children:[(0,i.jsx)(o.default,{value:"python",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from projectaria_tools.projects.adt import AriaDigitalTwinDataPathsProvider\n\n# define the sequence path you want to load\nsequence_path = "PATH/TO/An_ADT_sequence"\n\n# create path provider\npaths_provider = AriaDigitalTwinDataPathsProvider(sequence_path)\n\n# load the set of ground truth data files without skeleton occlusion\ndata_paths_without_skeleton_occlusion = paths_provider.get_datapaths(False)\n\n# load the set of ground truth data files with skeleton occlusion\ndata_paths_with_skeleton_occlusion = paths_provider.get_datapaths(True)\n'})})}),(0,i.jsx)(o.default,{value:"cpp",label:"C++",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:'#include "AriaDigitalTwinDataPathsProvider.h"\n\nusing namespace projectaria::dataset::adt;\n\n// define the sequence path you want to load\nstd::string sequencePath = "PATH/TO/An_ADT_sequence";\n\n// create path provider\nAriaDigitalTwinDataPathsProvider dataPathsProvider(sequencePath);\n\n// load the set of ground truth data files without skeleton occlusion\nstd::optional<AriaDigitalTwinDataPaths> dataPathsWithoutSkeletonOcclusion =\n      dataPathsProvider.getDataPaths(false);\n\n// load the set of ground truth data files with skeleton occlusion\nstd::optional<AriaDigitalTwinDataPaths> dataPathsWithSkeletonOcclusion =\n      dataPathsProvider.getDataPaths(true);\n'})})})]}),"\n",(0,i.jsx)(t.h2,{id:"ariadigitaltwindataprovider",children:"AriaDigitalTwinDataProvider"}),"\n",(0,i.jsx)(t.p,{children:"This is the core data loader that takes an instance of the AriaDigitalTwinDataPaths class (generated by the AriaDigitalTwinDataPathsProvider) and provides you will query functions to access all ADT data.\nThe following shows an example snippet to load ground truth data with the AriaDigitalTwinDataProvider:"}),"\n",(0,i.jsxs)(r.default,{groupId:"programming-language",children:[(0,i.jsx)(o.default,{value:"python",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from projectaria_tools.projects.adt import AriaDigitalTwinDataPathsProvider, AriaDigitalTwinDataProvider\n\n# define the sequence path you want to load\nsequence_path = "PATH/TO/An_ADT_sequence"\n\n# create path provider\npaths_provider = AriaDigitalTwinDataPathsProvider(sequence_path)\n\n# load the set of ground truth data files with skeleton occlusion\ndata_paths_with_skeleton_occlusion = paths_provider.get_datapaths(True)\n\n# create data provider\ngt_provider = AriaDigitalTwinDataProvider(data_paths_with_skeleton_occlusion)\n'})})}),(0,i.jsx)(o.default,{value:"cpp",label:"C++",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:'#include "AriaDigitalTwinDataPathsProvider.h"\n\nusing namespace projectaria::dataset::adt;\n\n// define the sequence path you want to load\nstd::string sequencePath = "PATH/TO/An_ADT_sequence";\n\n// create path provider\nAriaDigitalTwinDataPathsProvider dataPathsProvider(sequencePath);\n\n// load the set of ground truth data files with skeleton occlusion\nstd::optional<AriaDigitalTwinDataPaths> dataPathsWithSkeletonOcclusion =\n      dataPathsProvider.getDataPaths(true);\n\n// create data provider\nAriaDigitalTwinDataProvider adtDataProvider(dataPaths);\n'})})})]}),"\n",(0,i.jsx)(t.h3,{id:"skip-data-loading",children:"Skip Data loading"}),"\n",(0,i.jsxs)(t.p,{children:["All data loaders are designed to allow the user to skip the loading of specific data types.\nYou can do this by setting the path to an empty string in your ",(0,i.jsx)(t.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/data_provider/AriaDigitalTwinDataPathsProvider.h",children:"AriaDigitalTwinDataPaths"}),"\ninstance prior to constructing the AriaDigitalTwinDataProvider."]}),"\n",(0,i.jsx)(t.h2,{id:"check-data-existence",children:"Check Data Existence"}),"\n",(0,i.jsxs)(t.p,{children:["Since we allow users to skip specific data type loading as explained above, we also provide functions in in ",(0,i.jsx)(t.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/data_provider/AriaDigitalTwinDataProvider.h",children:"AriaDigitalTwinDataProvider"}),"\nto check if data exists by calling their appropriate functions before calling the corresponding getter functions. E.g. hasObject3dBoundingboxes()"]}),"\n",(0,i.jsx)(t.h3,{id:"ground-truth-data-getter-functions",children:"Ground Truth Data Getter Functions"}),"\n",(0,i.jsxs)(t.p,{children:["For a full example of the Python getters, please refer to the notebook in the ",(0,i.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/getting_started",children:"Getting Started"}),".\nFor a full example of the C++ getters, please refer to the ",(0,i.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/visualizers",children:"visualizer example"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"getting-instance-information",children:"Getting Instance Information"}),"\n",(0,i.jsxs)(t.p,{children:["In ADT, we define an instance to be either a human or an object. The attributes of an instance is defined in class InstanceInfo in ",(0,i.jsx)(t.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/data_provider/AriaDigitalTwinDataTypes.h",children:"AriaDigitalTwinDataTypes"}),".\nWe use instanceType to differentiate a human and an object."]}),"\n",(0,i.jsx)(t.h4,{id:"time-query-options",children:"Time Query Options"}),"\n",(0,i.jsxs)(t.p,{children:["You may have also noticed the timeQueryOptions parameter in the above getter functions. Same as dataprovider, all getter functions for timestamped data allow you to\nspecify how to query the timestamps. The options are defined in ",(0,i.jsx)(t.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/core/data_provider/TimeTypes.h",children:"TimeTypes"})]}),"\n",(0,i.jsx)(t.h4,{id:"accessing-timestamped-data",children:"Accessing Timestamped Data"}),"\n",(0,i.jsxs)(t.p,{children:["All timestamped data query APIs return a templated DataWithDt class. For example, BoundingBox2dDataWithDt defined in ",(0,i.jsx)(t.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/data_provider/AriaDigitalTwinDataTypes.h",children:"AriaDigitalTwinDataTypes"})," as:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"using BoundingBox2dDataWithDt = DataWithDt<TypeBoundingBox2dMap>;\n"})}),"\n",(0,i.jsx)(t.p,{children:"The goal of wrapping all data in a DataWithDt class is to ensure all returned timestamped data has two fields: isValid, and dtNs. Where isValid defines whether or not the returned data is valid, since all timestamp queries may be invalid times, and dtNs to ensure the user always knows the time difference between the returned data and the query time."}),"\n",(0,i.jsx)(t.h4,{id:"interpolation-function",children:"Interpolation Function"}),"\n",(0,i.jsxs)(t.p,{children:['We provide interpolation functions for 6DoF Aria poses and Object 3d bounding boxes called "getInterpolatedAria3dPoseAtTimestampNs" and "getInterpolatedObject3dBoundingBoxesAtTimestampNs"\nin ',(0,i.jsx)(t.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/data_provider/AriaDigitalTwinDataProvider.h",children:"AriaDigitalTwinDataProvider"})]}),"\n",(0,i.jsx)(t.h3,{id:"time-synchronization-between-subsequences",children:"Time Synchronization Between Subsequences"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/advanced_tutorials/multiperson_synchronization",children:"Multiperson Synchronization advanced tutorial"})," shows how to synchronize subsequences in an ADT sequence."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Further resources:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/projectaria_tools/docs/data_formats/aria_vrs/timestamps_in_aria_vrs",children:"Timestamps in Aria VRS Files"})," - how Project Aria timestamp data is formatted in VRS for single and multiple devices"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/projectaria_tools/docs/tech_insights/device_timestamping",children:"Project Aria Device Timestamping"})," - how the hardware is configured"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/projectaria_tools/docs/tech_insights/temporal_alignment_of_sensor_data",children:"Temporal Alignment of Aria Sensor Data"})," - how the data is temporally aligned and how to finely align IMU, barometer and magnetometer data"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"skeleton-data",children:"Skeleton Data"}),"\n",(0,i.jsx)(t.p,{children:"Separate from the 2D skeleton data, we also have skeleton frames as measured by Optitrack.\nThis data can be accessed directly from the AriaDigitalTwinDataProvider, or using the AriaDigitalTwinSkeletonProvider which can be extracted from AriaDigitalTwinDataProvider.\nMotive, the software that runs the Optitrack system, generates two types of skeleton data:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Skeleton Markers: a set of 3D marker positions of all visible markers that are attached to the bodysuit. If markers are occluded, they are set to [0,0,0].\nWe provide a helper function to get the labels: getMarkerLabels() in ",(0,i.jsx)(t.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/data_provider/AriaDigitalTwinSkeletonProvider.h",children:"AriaDigitalTwinSkeletonProvider"}),".\nFor more information see motive\u2019s ",(0,i.jsx)(t.a,{href:"https://v22.wiki.optitrack.com/index.php?title=Biomechanics_Markersets",children:(0,i.jsx)(t.em,{children:"Biomech57 template"})})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Skeleton Joints: a set of estimated 3D joint positions. We provide a list of these joint positions for each timestamp,\nas well as the joint labels getJointConnections(), and connections getJointLabels() in in ",(0,i.jsx)(t.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/data_provider/AriaDigitalTwinSkeletonProvider.h",children:"AriaDigitalTwinSkeletonProvider"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Note that both the markers and the joints are provided in the ADT Scene frame to be consistent with all other ground truth data."})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},7227:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});a(96540);var i=a(34164);const n={tabItem:"tabItem_Ymn6"};var r=a(74848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(n.tabItem,o),hidden:a,children:t})}},49489:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var i=a(96540),n=a(34164),r=a(24245),o=a(56347),s=a(36494),l=a(62814),d=a(45167),c=a(69900);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:n}}=e;return{value:t,label:a,attributes:i,default:n}}))}(a);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=u(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[d,h]=g({queryString:a,groupId:n}),[m,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Dv)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),v=(()=>{const e=d??m;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,r]),tabValues:r}}var f=a(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=a(74848);function b(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),n=s[a].value;n!==i&&(d(t),o(n))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:h,onClick:c,...r,className:(0,n.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":i===t}),children:a??t},t)}))})}function D(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function _(e){const t=m(e);return(0,w.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,w.jsx)(b,{...t,...e}),(0,w.jsx)(D,{...t,...e})]})}function j(e){const t=(0,f.default)();return(0,w.jsx)(_,{...e,children:h(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var i=a(96540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);