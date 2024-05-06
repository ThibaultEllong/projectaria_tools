"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6646],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>l,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){return function(t){var a=u(t.components);return n.createElement(e,i({},t,{components:a}))}},u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,p=m["".concat(o,".").concat(c)]||m[c]||h[c]||i;return a?n.createElement(p,d(d({ref:t},l),{},{components:a})):n.createElement(p,d({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=x;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}x.displayName="MDXCreateElement"},34711:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=a(58168),r=(a(96540),a(15680));const i={sidebar_position:40,title:"Data Format"},o="ADT Data Format",d={unversionedId:"open_datasets/aria_digital_twin_dataset/data_format",id:"open_datasets/aria_digital_twin_dataset/data_format",title:"Data Format",description:"The Aria Digital Twin Dataset (ADT) provides real world and synthetic raw Project Aria data, derived data generated by ADT Ground Truth data processing services as well as derived data generated by Project Aria's Machine Perception Services (MPS).",source:"@site/docs/open_datasets/aria_digital_twin_dataset/data_format.mdx",sourceDirName:"open_datasets/aria_digital_twin_dataset",slug:"/open_datasets/aria_digital_twin_dataset/data_format",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_digital_twin_dataset/data_format.mdx",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"Data Format"},sidebar:"tutorialSidebar",previous:{title:"Dataset Download",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download"},next:{title:"Data Loader",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_loader"}},s={},l=[{value:"Sequence and Subsequence",id:"sequence-and-subsequence",level:2},{value:"Subsequence structure",id:"subsequence-structure",level:2},{value:"Timestamps Mapping Data",id:"timestamps-mapping-data",level:3},{value:"Ground Truth Data",id:"ground-truth-data",level:2},{value:"Aligning Ground Truth and MPS Data",id:"aligning-ground-truth-and-mps-data",level:3},{value:"Skeleton Data and Availability",id:"skeleton-data-and-availability",level:2},{value:"Ground Truth Data Format",id:"ground-truth-data-format",level:2},{value:"2d_bounding_box.csv or 2d_bounding_box_with_skeleton.csv",id:"2d_bounding_boxcsv-or-2d_bounding_box_with_skeletoncsv",level:3},{value:"3d_bounding_box.csv",id:"3d_bounding_boxcsv",level:3},{value:"aria_trajectory.csv",id:"aria_trajectorycsv",level:3},{value:"eyegaze.csv",id:"eyegazecsv",level:3},{value:"scene_objects.csv",id:"scene_objectscsv",level:3},{value:"instances.json",id:"instancesjson",level:3},{value:"Skeleton_T.json or Skeleton_C.json",id:"skeleton_tjson-or-skeleton_cjson",level:3},{value:"skeleton_aria_association.json",id:"skeleton_aria_associationjson",level:3},{value:"video.vrs",id:"videovrs",level:3},{value:"depth_images.vrs",id:"depth_imagesvrs",level:3},{value:"segmentations.vrs",id:"segmentationsvrs",level:3}],m={toc:l},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.mdx)(u,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"adt-data-format"},"ADT Data Format"),(0,r.mdx)("p",null,"The Aria Digital Twin Dataset (ADT) provides real world and synthetic raw Project Aria data, derived data generated by ADT Ground Truth data processing services as well as derived data generated by Project Aria's ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_formats/mps/mps_summary"},"Machine Perception Services (MPS)"),"."),(0,r.mdx)("h2",{id:"sequence-and-subsequence"},"Sequence and Subsequence"),(0,r.mdx)("p",null,"A sequence in Aria Digital Twin (ADT) dataset represents a data recording in a scene. It can be either a multi-person activity, which may include multiple Aria devices recording at the same time, or a single-person activity, which includes only one Aria device."),(0,r.mdx)("p",null,"Inside a sequence, we use subsequences to represent the recording of each Aria device and its associated ground truth data. SLAM and Eyegaze data that has been generated by Project Aria Machine Perception Services (MPS) (rather than ADT ground truth) is stored in the MPS folder of each subsequence."),(0,r.mdx)("p",null,"So far, an ADT sequence contains at most 2 subsequences. Each sequence has the following folder structure:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"|SequenceName|\n    \u251c\u2500\u2500Subsequence1Name|\n    \u251c\u2500\u2500Subsequence2Name| [Optional] # Omitted if a sequence is a single person activity\n    \u251c\u2500\u2500metadata.json\n")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"metadata.json")," file contains the high-level sequence information such as the included Aria's serial number, the scene name, etc, which can be loaded and queried by ",(0,r.mdx)("inlineCode",{parentName:"p"},"AriaDigitalTwinDataPathProvider"),"."),(0,r.mdx)("admonition",{title:"gt-metadata.json name change",type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"Prior to ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/releases/tag/1.1.0"},"v1.1")," of the dataset ",(0,r.mdx)("inlineCode",{parentName:"p"},"metadata.json")," was called ",(0,r.mdx)("inlineCode",{parentName:"p"},"gt-metadata.json"),".")),(0,r.mdx)("h2",{id:"subsequence-structure"},"Subsequence structure"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"|Subsequence1Name|\n    \u251c\u2500\u2500video.vrs  # Aria recording data\n    \u251c\u2500\u2500instances.json  # metadata of all instances in a sequence. An instance can be an object or a skeleton\n    \u251c\u2500\u2500aria_trajectory.csv  # 6DoF Aria trajectory\n    \u251c\u2500\u25002d_bounding_box.csv  # 2D bounding box data for instances in three Aria sensors: RGB camera, left SLAM camera, right SLAM camera\n    \u251c\u2500\u25003d_bounding_box.csv  # 3D AABB of each object\n    \u251c\u2500\u2500scene_objects.csv    # 6 DoF poses of objects\n    \u251c\u2500\u2500eyegaze.csv          # Eye gaze\n    \u251c\u2500\u2500synthetic_video.vrs  # Synthetic rendering of video.vrs\n    \u251c\u2500\u2500depth_images.vrs     # Depth images of video.vrs\n    \u251c\u2500\u2500segmentations.vrs    # Instance segmentations of video.vrs\n    \u251c\u2500\u2500skeleton_aria_association.json [optional]  # File showing association between Aria devices and skeletons, if they exist. Omitted if a sequence does not have skeleton ground truth.\n    \u251c\u2500\u2500Skeleton_*.json [optional]   # Body skeleton data. * is the skeleton name. Omitted if a sequence does not have skeleton ground truth\n    \u251c\u2500\u25002d_bounding_box_with_skeleton.csv [optional]  # 2D bounding box data with body mesh occlusions. Omitted if a sequence does not have skeleton ground truth\n    \u251c\u2500\u2500depth_images_with_skeleton.vrs [optional]  # Depth images with body mesh occlusions. Omitted if a sequence does not have skeleton ground truth\n    \u251c\u2500\u2500segmentations_with_skeleton.vrs [optional]  # Segmentations with body mesh occlusions. Omitted if a sequence does not have skeleton ground truth\n    \u251c\u2500\u2500MPS # Go to Data Formats/MPS Output for more information about the data in this directory\n        \u251c\u2500\u2500 eye_gaze\n            \u251c\u2500\u2500 general_eye_gaze.csv\n            \u251c\u2500\u2500 summary.json\n        \u251c\u2500\u2500 slam\n            \u251c\u2500\u2500 alignment_results.json # Alignment results between the MPS closed loop trajectory and the ADT GT trajectory\n            \u251c\u2500\u2500 closed_loop_trajectory.csv\n            \u251c\u2500\u2500 open_loop_trajectory.csv\n            \u251c\u2500\u2500 online_calibration.csv\n            \u251c\u2500\u2500 semidense_observations.csv.gz\n            \u251c\u2500\u2500 semidense_points.csv.gz\n            \u251c\u2500\u2500 summary.json\n")),(0,r.mdx)("admonition",{title:"SkeletonMetaData.json name change",type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"Prior to ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/releases/tag/1.1.0"},"v1.1")," of the dataset, ",(0,r.mdx)("inlineCode",{parentName:"p"},"skeleton_aria_association.json")," was called ",(0,r.mdx)("inlineCode",{parentName:"p"},"SkeletonMetaData.json"),".")),(0,r.mdx)("h3",{id:"timestamps-mapping-data"},"Timestamps Mapping Data"),(0,r.mdx)("p",null,"Project Aria glasses recording concurrently in the same location leverage ",(0,r.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SMPTE_timecode"},"SMPTE timecode")," to receive a synchronized time clock with sub-millisecond accuracy."),(0,r.mdx)("p",null,"The mapping between device time and timecode clock for each sequence is stored in the VRS file as a Time Domain Mapping Class. Go to ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_formats/aria_vrs/timestamps_in_aria_vrs"},"Timestamps in Aria VRS Files")," for more information about how Aria sensor data is timestamped."),(0,r.mdx)("p",null,"Go to ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/advanced_tutorials/multiperson_synchronization"},"Multiperson Synchronization")," for how to get synchronized ground truth data in a multi-person sequence."),(0,r.mdx)("h2",{id:"ground-truth-data"},"Ground Truth Data"),(0,r.mdx)("p",null,"You can use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"AriaDigitalTwinDataPathProvider")," to load a sequence and select a subsequence.\n",(0,r.mdx)("inlineCode",{parentName:"p"},"AriaDigitalTwinDataPathProvider")," will manage all the ground truth files in a subsequence folder (not the MPS files)."),(0,r.mdx)("h3",{id:"aligning-ground-truth-and-mps-data"},"Aligning Ground Truth and MPS Data"),(0,r.mdx)("p",null,"The alignment_results.json file in mps/slam directory contains the alignment results between the MPS closed loop trajectory and the ADT GT trajectory. The alignment results have already been applied to the closed loop trajectory and the semidense pointcloud to convert from the SLAM frame to the ADT frame, ensuring all ADT data is expressed in the same coordinate frame for all sequences."),(0,r.mdx)("h2",{id:"skeleton-data-and-availability"},"Skeleton Data and Availability"),(0,r.mdx)("p",null,"Not all ADT sequences have skeleton tracking. For those sequences with skeleton tracking enabled, we use the marker measurements from the bodysuit to generate a 3D mesh estimate of the wearer which is then used in our ground truth generation pipeline to calculate 2D bounding boxes, segmentation images and depth images."),(0,r.mdx)("p",null,"In these cases, ADT provides two sets of ground truth data: one with skeleton occlusion, one without."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"segmentations.vrs")," vs. ",(0,r.mdx)("inlineCode",{parentName:"li"},"segmentations_with_skeleton.vrs")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"depth_images.vrs")," vs. ",(0,r.mdx)("inlineCode",{parentName:"li"},"depth_images_with_skeleton.vrs")),(0,r.mdx)("li",{parentName:"ul"},"'2d_bounding_box.csv' vs. '2d_bounding_box_with_skeleton.csv'")),(0,r.mdx)("p",null,"You can use ",(0,r.mdx)("inlineCode",{parentName:"p"},"AriaDigitalTwinDataPathsProvider")," to switch between these two sets."),(0,r.mdx)("h2",{id:"ground-truth-data-format"},"Ground Truth Data Format"),(0,r.mdx)("p",null,"Our data loader loads all this data into a single class with useful tools for accessing data. For more information on the data classes returned by the loader, go to the ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_loader"},"Data Loader page"),"."),(0,r.mdx)("h3",{id:"2d_bounding_boxcsv-or-2d_bounding_box_with_skeletoncsv"},"2d_bounding_box.csv or 2d_bounding_box_with_skeleton.csv"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Column"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"stream_id"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"camera stream id associated with the bounding box image")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"object_uid"),(0,r.mdx)("td",{parentName:"tr",align:null},"uint64_t"),(0,r.mdx)("td",{parentName:"tr",align:null},"id of the instance (object or skeleton)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"timestamp","[ns]"),(0,r.mdx)("td",{parentName:"tr",align:null},"int64_t"),(0,r.mdx)("td",{parentName:"tr",align:null},"timestamp of the image in nanoseconds")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"x_min","[pixel]"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"minimum dimension in the x axis")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"x_max","[pixel]"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"maximum dimension in the x axis")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"y_min","[pixel]"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"minimum dimension in the y axis")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"y_max","[pixel]"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"maximum dimension in the y axis")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"visibility_ratio","[%]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"percentage of the object that is visible (0: not visible, 1: fully visible)")))),(0,r.mdx)("h3",{id:"3d_bounding_boxcsv"},"3d_bounding_box.csv"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Column"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"object_uid"),(0,r.mdx)("td",{parentName:"tr",align:null},"uint64_t"),(0,r.mdx)("td",{parentName:"tr",align:null},"id of the instance (object or skeleton)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"timestamp","[ns]"),(0,r.mdx)("td",{parentName:"tr",align:null},"int64_t"),(0,r.mdx)("td",{parentName:"tr",align:null},"timestamp of the image in nanoseconds. -1 means the instance is static")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"p_local_obj_xmin","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"minimum dimension in the x axis (in meters) of the bounding box")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"p_local_obj_xmax","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"maximum dimension in the x axis (in meters) of the bounding box")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"p_local_obj_ymin","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"minimum dimension in the y axis (in meters) of the bounding box")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"p_local_obj_ymax","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"maximum dimension in the y axis (in meters) of the bounding box")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"p_local_obj_zmin","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"minimum dimension in the z axis (in meters) of the bounding box")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"p_local_obj_zmax","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"maximum dimension in the z axis (in meters) of the bounding box")))),(0,r.mdx)("h3",{id:"aria_trajectorycsv"},"aria_trajectory.csv"),(0,r.mdx)("p",null,"ADT uses the same trajectory format as ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_formats/mps/slam/mps_trajectory#closed-loop-trajectory"},"closed loop trajectory in MPS"),"."),(0,r.mdx)("p",null,"While the data structure is the same, the file is generated by the ADT ground truth system, not by MPS."),(0,r.mdx)("h3",{id:"eyegazecsv"},"eyegaze.csv"),(0,r.mdx)("p",null,"ADT uses the same ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_formats/mps/mps_eye_gaze#eye-gaze-data-format"},"eye gaze format as MPS"),"."),(0,r.mdx)("p",null,"Unlike MPS outputs, the ground truth eyegaze.csv contains depth mapping estimated by the ADT ground truth system."),(0,r.mdx)("h3",{id:"scene_objectscsv"},"scene_objects.csv"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Column"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"object_uid"),(0,r.mdx)("td",{parentName:"tr",align:null},"uint64_t"),(0,r.mdx)("td",{parentName:"tr",align:null},"id of the instance (object or skeleton)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"timestamp","[ns]"),(0,r.mdx)("td",{parentName:"tr",align:null},"int64_t"),(0,r.mdx)("td",{parentName:"tr",align:null},"timestamp of the image in nanoseconds. -1 means the instance is static")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"t_wo_x","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"x translation from object frame to world (scene) frame (in meters)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"t_wo_y","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"y translation from object frame to world (scene) frame (in meters)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"t_wo_z","[m]"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"z translation from object frame to world (scene) frame (in meters)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"q_wo_w"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"w component of quaternion from object frame to world (scene) frame")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"q_wo_x"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"x component of quaternion from object frame to world (scene) frame")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"q_wo_y"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"y component of quaternion from object frame to world (scene) frame")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"q_wo_z"),(0,r.mdx)("td",{parentName:"tr",align:null},"double"),(0,r.mdx)("td",{parentName:"tr",align:null},"z component of quaternion from object frame to world (scene) frame")))),(0,r.mdx)("h3",{id:"instancesjson"},"instances.json"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n    "IID1": {\n    "instance_id": IID1,\n    "instance_name": "XXXX",\n    "prototype_name": "XXXX",\n    "category": "XXXX",\n    "category_uid": XXXX,\n    "motion_type": "static/dynamic",\n    "instance_type": "object/human",\n    "rigidity": "rigid/deformable",\n    "rotational_symmetry": {\n      "is_annotated": true/false\n    },\n    "canonical_pose": {\n      "up_vector": [\n        x,\n        y,\n        z\n      ],\n      "front_vector": [\n        x,\n        y,\n        z\n      ]\n    }\n  },\n  ...\n}\n')),(0,r.mdx)("h3",{id:"skeleton_tjson-or-skeleton_cjson"},"Skeleton_T.json or Skeleton_C.json"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n  "dt_optitrack_minus_device_ns": {\n    "1WM103600M1292": XXXXX\n  },\n  "frames": [\n    {\n      "markers": [\n        [\n          mx1\n          my1\n          mz1\n        ],\n        ...\n       ],\n       "joints": [\n         [\n          jx1\n          jy1\n          jz1\n         ],\n        ...\n       ],\n       "timestamp_ns": tsns1\n    },\n    ...\n  ]\n}\n')),(0,r.mdx)("h3",{id:"skeleton_aria_associationjson"},"skeleton_aria_association.json"),(0,r.mdx)("p",null,"This file shows the skeleton info including name, Id, and associated Aria device for each human in the sequence."),(0,r.mdx)("p",null,"Because it's possible to have a person wearing a bodysuit that is not wearing an Aria device, it's possible to have a skeleton with no associated AriaDeviceSerial."),(0,r.mdx)("p",null,"It's also possible to have an Aria wearer with no bodysuit, which means there may be an empty skeleton Id and a name associated with an Aria device."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n    "SkeletonMetadata": [\n        {\n            "AssociatedDeviceSerial": "AriaSerial1/NONE",\n            "SkeletonId": ID1,\n            "SkeletonName": "SkeletonName1/NONE"\n        },\n        ...\n    ]\n}\n')),(0,r.mdx)("h3",{id:"videovrs"},"video.vrs"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"video.vrs")," contains the raw sensor recording from the Aria device."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/tech_spec/hardware_spec"},"Aria Hardware Specifications")," shows the sensors used to make recordings",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Images were all recorded at 30 fps")))),(0,r.mdx)("h3",{id:"depth_imagesvrs"},"depth_images.vrs"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"depth_images.vrs1")," contains 3 streams of images corresponding to the exact streams in ",(0,r.mdx)("inlineCode",{parentName:"p"},"video.vrs"),"."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Each depth image is the same size as their corresponding raw image, where the pixel contents are integers expressing the depth in the camera\u2019s Z-axis, in units of mm.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"This should not to be confused with ASE depth images, which describe the depth along each pixel ray"))),(0,r.mdx)("li",{parentName:"ul"},"Depth data is calculated using ADT\u2019s ground truth system")),(0,r.mdx)("h3",{id:"segmentationsvrs"},"segmentations.vrs"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"segmentations.vrs")," contains 3 streams of images corresponding to the exact streams in ",(0,r.mdx)("inlineCode",{parentName:"p"},"video.vrs"),"."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Each segmentation image is the same size as their corresponding raw image, where the pixel contents are integers expressing the Instance Id that was observed by that pixel"),(0,r.mdx)("li",{parentName:"ul"},"Segmentation data is calculated using ADT\u2019s ground truth system")))}c.isMDXComponent=!0}}]);