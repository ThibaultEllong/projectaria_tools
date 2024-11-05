"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3350],{74006:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>_,frontMatter:()=>l,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"data_utilities/core_code_snippets/mps","title":"MPS - General","description":"Project Aria Machine Perception Services (MPS) enables Aria users with access to the Aria Research Kit to request derived data on Aria VRS files.","source":"@site/docs/data_utilities/core_code_snippets/mps.mdx","sourceDirName":"data_utilities/core_code_snippets","slug":"/data_utilities/core_code_snippets/mps","permalink":"/projectaria_tools/docs/data_utilities/core_code_snippets/mps","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/core_code_snippets/mps.mdx","tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"sidebar_position":40,"title":"MPS - General"},"sidebar":"tutorialSidebar","previous":{"title":"Calibration","permalink":"/projectaria_tools/docs/data_utilities/core_code_snippets/calibration"},"next":{"title":"MPS - Eye Gaze","permalink":"/projectaria_tools/docs/data_utilities/core_code_snippets/eye_gaze_code"}}');var n=a(74848),r=a(28453),i=a(49489),s=a(7227);const l={sidebar_position:40,title:"MPS - General"},c="MPS Code Snippets",d={},p=[{value:"Load MPS output",id:"load-mps-output",level:2},{value:"Open loop/Closed loop trajectory",id:"open-loopclosed-loop-trajectory",level:3},{value:"Point cloud",id:"point-cloud",level:3},{value:"Online calibration",id:"online-calibration",level:3},{value:"Hand Tracking",id:"hand-tracking",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"mps-code-snippets",children:"MPS Code Snippets"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/projectaria_tools/docs/ARK/mps/",children:"Project Aria Machine Perception Services (MPS)"})," enables Aria users with access to the ",(0,n.jsx)(t.a,{href:"https://www.projectaria.com/research-kit/",children:"Aria Research Kit"})," to request derived data on Aria VRS files."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/projectaria_tools/docs/open_datasets/",children:"Open Datasets"})," also contain ",(0,n.jsx)(t.a,{href:"/projectaria_tools/docs/data_formats/mps/mps_summary",children:"MPS outputs"})," and may have specific tools to use and visualize their data."]}),"\n",(0,n.jsx)(t.p,{children:"This page covers how to consume standard MPS outputs."}),"\n",(0,n.jsx)(t.h2,{id:"load-mps-output",children:"Load MPS output"}),"\n",(0,n.jsxs)(t.p,{children:["The loaders for MPS outputs (",(0,n.jsx)(t.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/core/mps",children:"projectaria_tools/main/core/mps"}),") make it easer to use the data downstream. As part of this, the loaders put the outputs into data structures that are easier for other tools to consume."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/projectaria_tools/docs/data_formats/mps/mps_summary",children:"MPS Data Formats"})," provides details about output schemas and the specifics of each MPS output. This page focuses loading APIs in Python and C++, where there isn't a standalone code samples page:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"eye_gaze_code",children:"Eye Gaze Code Samples"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"open-loopclosed-loop-trajectory",children:"Open loop/Closed loop trajectory"}),"\n",(0,n.jsxs)(i.default,{groupId:"programming-language",children:[(0,n.jsx)(s.default,{value:"python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import projectaria_tools.core.mps as mps\n\nopen_loop_path = "/path/to/mps/output/trajectory/open_loop_trajectory.csv"\nopen_loop_traj = mps.read_open_loop_trajectory(open_loop_path)\n\nclosed_loop_path = "/path/to/mps/output/trajectory/closed_loop_trajectory.csv"\nclosed_loop_traj = mps.read_closed_loop_trajectory(closed_loop_path)\n\n# example: get transformation from this device to a world coordinate frame\nfor closed_loop_pose in closed_loop_traj:\n    transform_world_device = closed_loop_pose.transform_world_device\n\n# example: query to find the closest Timestamp device pose and move it to the Aria RGB camera pose\nfrom projectaria_tools.core import data_provider\nfrom projectaria_tools.core.mps.utils import get_nearest_pose\nfrom projectaria_tools.core.stream_id import StreamId\n\nquery_timestamp_ns = int(closed_loop_traj[1].tracking_timestamp.total_seconds() * 1e9) # to be updated with your VRS timestamps\n\npose_info = get_nearest_pose(closed_loop_traj, query_timestamp_ns)\nif pose_info:\n    T_world_device = pose_info.transform_world_device\n\n    # Move this pose to the Project Aria RGB camera\n    vrs_file = "example.vrs"\n    vrs_data_provider = data_provider.create_vrs_data_provider(vrs_file)\n    rgb_stream_id = StreamId("214-1")\n    rgb_stream_label = vrs_data_provider.get_label_from_stream_id(rgb_stream_id)\n    device_calibration = vrs_data_provider.get_device_calibration()\n    rgb_camera_calibration = device_calibration.get_camera_calib(rgb_stream_label)\n\n    T_device_rgb_camera = rgb_camera_calibration.get_transform_device_camera()\n    T_world_rgb_camera = T_world_device @ T_device_rgb_camera\n\n    print(T_world_rgb_camera)\n'})})}),(0,n.jsx)(s.default,{value:"cpp",label:"C++",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'#include <TrajectoryReaders.h>\nusing namespace projectaria::tools::mps;\n\nstd::string openLoopTrajPath = "/path/to/mps/output/trajectory/open_loop_trajectory.csv";\nOpenLoopTrajectory openLoopTraj = readOpenLoopTrajectory(openLoopTrajPath);\n\nstd::string closedLoopTrajPath = "/path/to/mps/output/trajectory/closed_loop_trajectory.csv";\nClosedLoopTrajectory closedLoopTraj = readClosedLoopTrajectory(closedLoopTrajPath);\n\n// example: get transformation from this device to world coordinate frame\nfor (const ClosedLoopTrajectoryPose& closedLoopPose : closedLoopTraj) {\n    const Sophus::SE3d& T_world_device = closedLoopPose.T_world_device;\n}\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"point-cloud",children:"Point cloud"}),"\n",(0,n.jsx)(t.admonition,{title:"Always filter global point clouds in 3D",type:"info",children:(0,n.jsxs)(t.p,{children:["Post-filtering the point cloud using inverse distance and distance certainty is required to get point cloud ",(0,n.jsx)(t.strong,{children:"accurate in 3D space"}),". There are points cannot be accurately estimated in 3D space due to low parallax, but those points are well tracked in 2D images, and produce valid 2D observations. We choose to output ",(0,n.jsx)(t.strong,{children:"all"})," the points, include those have poor 3D estimations, in case researchers need them. Go to the ",(0,n.jsx)(t.a,{href:"/projectaria_tools/docs/data_formats/mps/slam/mps_pointcloud",children:"Semi-Dense Point Cloud page"})," for more information."]})}),"\n",(0,n.jsx)(t.admonition,{title:"Loading observations could be slow",type:"info",children:(0,n.jsx)(t.p,{children:"When the Aria recording is long, loading point observations could be memory and time consuming (> 1 minute). A typical 20 minutes long Aria recording will have roughly total 10+ millions of 3D points with total 100+ millions of 2D observations."})}),"\n",(0,n.jsxs)(i.default,{groupId:"programming-language",children:[(0,n.jsx)(s.default,{value:"python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import projectaria_tools.core.mps as mps\nfrom projectaria_tools.core.mps.utils import filter_points_from_confidence\n\nglobal_points_path = "/path/to/mps/output/trajectory/semidense_points.csv.gz"\npoints = mps.read_global_point_cloud(global_points_path)\n\n# filter the point cloud using thresholds on the inverse depth and distance standard deviation\ninverse_distance_std_threshold = 0.001\ndistance_std_threshold = 0.15\n\nfiltered_points = filter_points_from_confidence(points, inverse_distance_std_threshold, distance_std_threshold)\n\n# example: get position of this point in the world coordinate frame\nfor point in filtered_points:\n    position_world = point.position_world\n\nobservations_path = "/path/to/mps/output/trajectory/semidense_observations.csv.gz"\nobservations = mps.read_point_observations(observations_path)\n'})})}),(0,n.jsx)(s.default,{value:"cpp",label:"C++",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'#include <GlobalPointCloudFilter.h>\n#include <GlobalPointCloudReader.h>\n#include <PointObservationReader.h>\n\nusing namespace projectaria::tools::mps;\n\nstd::string globalPointsPath = "/path/to/mps/output/trajectory/open_loop_trajectory.csv";\nGlobalPointCloud points = readGlobalPointCloud(globalPointsPath);\n\n// filter the point cloud by inverse depth and depth\nconst float inverseDistanceStdThreshold = 0.001;\nconst float distanceStdThreshold = 0.15;\nGlobalPointCloud filteredPoints = filterPointsFromConfidence(points, inverseDistanceStdThreshold, distanceStdThreshold);\n\n// example: get the position of this point in the world coordinate frame\nfor (const GlobalPointPosition& point : filteredPoints) {\n    const Eigen::Vector3d& position_world = point.position_world;\n}\n\nstd::string observationsPath = "/path/to/mps/output/trajectory/semidense_observations.csv.gz";\nPointObservations observations = readPointObservations(observationsPath);\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"online-calibration",children:"Online calibration"}),"\n",(0,n.jsxs)(i.default,{groupId:"programming-language",children:[(0,n.jsx)(s.default,{value:"python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import projectaria_tools.core.mps as mps\n\nonline_calib_path = "/path/to/mps/output/trajectory/online_calibration.jsonl"\nonline_calibs = mps.read_online_calibration(online_calib_path)\n\nfor calib in online_calibs:\n    # example: get left IMU\'s online calibration\n    for imuCalib in calib.imu_calibs:\n        if imuCalib.get_label() == "imu-left":\n            leftImuCalib = imuCalib\n    # example: get left SLAM camera\'s online calibration\n    for camCalib in calib.camera_calibs:\n        if camCalib.get_label() == "camera-slam-left":\n            leftCamCalib = camCalib\n'})})}),(0,n.jsx)(s.default,{value:"cpp",label:"C++",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'#include <OnlineCalibrationsReader.h>\nusing namespace projectaria::tools::calibration;\nusing namespace projectaria::tools::mps;\n\nstd::string onlineCalibPath = "/path/to/mps/output/trajectory/online_calibration.jsonl";\nOnlineCalibrations onlineCalibs = readOnlineCalibration(onlineCalibPath);\n\nfor (const OnlineCalibration& calib : onlineCalibs) {\n    // example: get left IMU\'s online calibration\n    for (const ImuCalibration& imuCalib : calib.imuCalibs) {\n        if (imuCalib.getLabel() == "imu-left") {\n            const ImuCalibration& leftImuCalib = imuCalib;\n        }\n    }\n    // example: get left SLAM camera\'s online calibration\n    for (const CameraCalibration& camCalib : calib.cameraCalibs) {\n        if (camCalib.getLabel() == "camera-slam-left") {\n            const CameraCalibration& leftCamCalib = camCalib;\n        }\n    }\n}\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"hand-tracking",children:"Hand Tracking"}),"\n",(0,n.jsxs)(i.default,{groupId:"programming-language",children:[(0,n.jsx)(s.default,{value:"python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import projectaria_tools.core.mps as mps\nfrom projectaria_tools.core.mps.utils import get_nearest_wrist_and_palm_pose\n\n\n## Load wrist and palm pose data\nwrist_and_palm_poses_path = "/path/to/mps/output/hand_tracking/wrist_and_palm_poses.csv"\nwrist_and_palm_poses = mps.hand_tracking.read_wrist_and_palm_poses(\n   wrist_and_palm_poses_path\n)\n\n\n# Example query: find the nearest hand tracking data outputs in relation to a specific timestamp\nwrist_and_palm_pose = get_nearest_wrist_and_palm_pose(\n   wrist_and_palm_poses, query_timestamp_ns\n)\n\n\n# Get left and right-hand confidences and wrist and palm positions and normals in the device frame\n# Left-hand side\nleft_pose_confidence = wrist_and_palm_pose.left_hand.confidence\nleft_wrist_position_device = wrist_and_palm_pose.left_hand.wrist_position_device\nleft_palm_position_device = wrist_and_palm_pose.left_hand.palm_position_device\nleft_wrist_normal_device = wrist_and_palm_pose.left_hand.wrist_and_palm_normal_device.wrist_normal_device\nleft_palm_normal_device = wrist_and_palm_pose.left_hand.wrist_and_palm_normal_device.palm_normal_device\n# Right-hand side\nright_pose_confidence = wrist_and_palm_pose.right_hand.confidence\nright_wrist_position_device = wrist_and_palm_pose.right_hand.wrist_position_device\nright_palm_position_device = wrist_and_palm_pose.right_hand.palm_position_device\nright_wrist_normal_device = wrist_and_palm_pose.right_hand.wrist_and_palm_normal_device.wrist_normal_device\nright_palm_normal_device = wrist_and_palm_pose.right_hand.wrist_and_palm_normal_device.palm_normal_device\n'})})}),(0,n.jsx)(s.default,{value:"cpp",label:"C++",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'#include <mps/HandTrackingReader.h>\n\nusing namespace projectaria::tools::mps;\n\nconst auto wristAndPalmPoses = readWristAndPalmPoses("/path/to/mps/output/hand_tracking/wrist_and_palm_poses.csv");\n\nfor (const auto& wristAndPalmPose: wristAndPalmPoses) {\n  for (HANDEDNESS handedness : {HANDEDNESS::LEFT, HANDEDNESS::RIGHT}) {\n    const auto& oneHandWristAndPalmPose = wristAndPalmPose.value()[handedness];\n    if (!oneHandWristAndPalmPose ||\n        oneHandWristAndPalmPose.value().confidence < MIN_CONFIDENCE_) {\n      continue;\n    }\n    const auto& wristPose = oneHandWristAndPalmPose.value().wristPosition_device;\n    const auto& palmPose = oneHandWristAndPalmPose.value().palmPosition_device;\n    const auto& wristPose_world = T_World_Device.value() * wristPose;\n    const auto& palmPose_world = T_World_Device.value() * palmPose;\n\n    if (oneHandWristAndPalmPose.wristAndPalmNormal_device.has_value()) {\n        const auto& wristNormal_device = oneSideWristAndPalmPose.wristAndPalmNormal_device.value().wristNormal_device;\n        const auto& palmNormal_device = oneSideWristAndPalmPose.wristAndPalmNormal_device.value().palmNormal_device;\n        const auto wristNormal_world = T_World_Device.value().so3() * wristNormal_device;\n        const auto palmNormal_world = T_World_Device.value().so3() * palmNormal_device;\n    }\n  }\n}\n'})})})]})]})}function _(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},7227:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});a(96540);var o=a(34164);const n={tabItem:"tabItem_Ymn6"};var r=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(n.tabItem,i),hidden:a,children:t})}},49489:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var o=a(96540),n=a(34164),r=a(24245),i=a(56347),s=a(36494),l=a(62814),c=a(45167),d=a(69900);function p(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:n}}=e;return{value:t,label:a,attributes:o,default:n}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function _(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=u(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!_({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[c,p]=m({queryString:a,groupId:n}),[h,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Dv)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=c??h;return _({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!_({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,r]),tabValues:r}}var f=a(11062);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function g(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),n=s[a].value;n!==o&&(c(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:p,onClick:d,...r,className:(0,n.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":o===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=h(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function P(e){const t=(0,f.default)();return(0,v.jsx)(w,{...e,children:p(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>s});var o=a(96540);const n={},r=o.createContext(n);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);