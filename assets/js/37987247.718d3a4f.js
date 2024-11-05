"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9194],{50780:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"data_formats/mps/mps_eye_gaze","title":"Eye Gaze","description":"Eye Gaze Data Format","source":"@site/docs/data_formats/mps/mps_eye_gaze.mdx","sourceDirName":"data_formats/mps","slug":"/data_formats/mps/mps_eye_gaze","permalink":"/projectaria_tools/docs/data_formats/mps/mps_eye_gaze","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_formats/mps/mps_eye_gaze.mdx","tags":[],"version":"current","sidebarPosition":80,"frontMatter":{"sidebar_position":80,"title":"Eye Gaze"},"sidebar":"tutorialSidebar","previous":{"title":"Multi-SLAM","permalink":"/projectaria_tools/docs/data_formats/mps/slam/mps_multi_slam"},"next":{"title":"Hand Tracking","permalink":"/projectaria_tools/docs/data_formats/mps/hand_tracking/"}}');var t=n(74848),a=n(28453),r=n(98180);const l={sidebar_position:80,title:"Eye Gaze"},d="MPS Output - Eye Gaze",o={},c=[{value:"Eye Gaze Data Format",id:"eye-gaze-data-format",level:2},{value:"Further resources",id:"further-resources",level:3},{value:"general_eye_gaze.csv",id:"general_eye_gazecsv",level:2},{value:"personalized_eye_gaze.csv",id:"personalized_eye_gazecsv",level:2},{value:"Personalized calibration parameters, pre March 2024 model",id:"personalized-calibration-parameters-pre-march-2024-model",level:3},{value:"Personalized calibration parameters, new model",id:"personalized-calibration-parameters-new-model",level:3},{value:"General Principles",id:"general-principles",level:2},{value:"Confidence Intervals",id:"confidence-intervals",level:3},{value:"Session_uid",id:"session_uid",level:3},{value:"Examples",id:"examples",level:4},{value:"summary.json",id:"summaryjson",level:2},{value:"Stage 1: GazeInference (all recordings)",id:"stage-1-gazeinference-all-recordings",level:4},{value:"Stage 2: InSessionCalibration (if in-session calibration available)",id:"stage-2-insessioncalibration-if-in-session-calibration-available",level:4},{value:"Stage 3: CalibrationCorrection",id:"stage-3-calibrationcorrection",level:4},{value:"Example summary.json files",id:"example-summaryjson-files",level:4},{value:"<strong>Scenario 1: No calibration available</strong>",id:"scenario-1-no-calibration-available",level:5},{value:"<strong>Scenario 2: In-session calibration available</strong>",id:"scenario-2-in-session-calibration-available",level:4}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"mps-output---eye-gaze",children:"MPS Output - Eye Gaze"})}),"\n",(0,t.jsx)(i.h2,{id:"eye-gaze-data-format",children:"Eye Gaze Data Format"}),"\n",(0,t.jsxs)(i.p,{children:["Project Aria's ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/ARK/mps/",children:"Machine Perception Services (MPS)"})," uses Aria's Eye Tracking (ET) camera images to estimate the direction the user is looking. This eye gaze estimation is in ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/data_formats/coordinate_convention/3d_coordinate_frame_convention#the-nominal-central-pupil-frame-cpf",children:"Central Pupil Frame"}),". Eye Gaze outputs may be part of Open Dataset Releases or Project Aria Partners can request MPS services on their own data."]}),"\n",(0,t.jsxs)(i.p,{children:["Eye Gaze outputs are available for all recordings made with Eye Tracking cameras enabled. Partner data is not made available to Meta researchers or Meta\u2019s affiliates. Go to ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/ARK/mps/mps_processing",children:"MPS Data Lifecycle"})," for more details about how partner data is processed and stored."]}),"\n",(0,t.jsx)(i.p,{children:"In March 2024, we updated our eye gaze model to support depth estimation. We do this by providing left and right eye gaze directions (yaw values) along with the depth at which these gaze directions intersect (translation values)."}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{width:"60%",src:(0,r.default)("/img/data_formats/eye_gaze_032024_model.png"),alt:"Diagram of Eye Gaze Model"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Figure 1:"})," ",(0,t.jsx)(i.em,{children:"Diagram of the March 2024 Model, showing vergence Left, Right and Combined Eye Gaze Directions."})]}),"\n",(0,t.jsx)(i.p,{children:"In the new model, the convergence points and distances are derived from the predicted gaze directions. The combined direction\u2019s yaw is used to populate the yaw field of the EyeGaze object for backwards compatibility. The pitch is common to left, right and combined gaze directions."}),"\n",(0,t.jsx)(i.p,{children:"Eye Gaze MPS file outputs are:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"summary.json"})," - high level report on MPS eye gaze generation"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"general_eye_gaze.csv"})," - based on the standard eye gaze configuration"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"personalized_eye_gaze.csv"})," - only if you\u2019ve made the recording with ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/ARK/mps/eye_gaze_calibration",children:"in-session Eye Gaze Calibration"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"further-resources",children:"Further resources"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/data_utilities/visualization/visualization_python",children:"Visualize Data Using Python"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/data_utilities/visualization/visualization_cpp",children:"Visualize Data Using C++"})}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/data_utilities/core_code_snippets/eye_gaze_code",children:"Eye Gaze Code Snippets"}),", includes:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Data loading"}),"\n",(0,t.jsx)(i.li,{children:"Vector conversion (yaw pitch to 3 vector)"}),"\n",(0,t.jsx)(i.li,{children:"Coordinates System (CPF_To_Device)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"general_eye_gazecsv",children:"general_eye_gaze.csv"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"general_eye_gaze.csv"})," outputs are available for all recordings made with Eye Tracking cameras."]}),"\n",(0,t.jsxs)(i.p,{children:["At this time, all Open Dataset Eye Gaze data was computed using the older model. ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/",children:"Aria Digital Twin (ADT)"})," used their ground truth system to compute eye gaze depth for their release."]}),"\n",(0,t.jsx)(i.p,{children:"Where a cell shows 0, the data is not provided for that model, but to ensure backwards compatibility it will be represented as 0 in Project Aria Tools readers."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:(0,t.jsx)(i.strong,{children:"Column"})}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Pre March 2024 Model"}),(0,t.jsx)(i.th,{children:"New Model"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"tracking_timestamp_us"})}),(0,t.jsx)(i.td,{children:"int"}),(0,t.jsx)(i.td,{children:"The timestamp, in microseconds, of the eye tracking camera frame in device time domain. The MPS location output also contains pose estimations in the same time domain and these timestamps can be directly used to infer the device pose from the MPS location output."}),(0,t.jsx)(i.td,{children:"Same."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"yaw_rads_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"Eye gaze yaw angle in radians in CPF frame. The yaw angle is the angle between the projection of the eye gaze vector (originating at CPF) on XZ plane and the Z axis in the CPF frame."}),(0,t.jsx)(i.td,{children:"Not provided, however this value can be computed using helper functions and is automatically read when parsed with our data utilities."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"pitch_rads_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"Eye gaze pitch angle in radians in CPF frame. The pitch angle is the angle between the projection of the eye gaze vector (originating at CPF) on YZ plane and the Z axis in the CPF frame."}),(0,t.jsx)(i.td,{children:"This now corresponds to the common pitch of the left and right gaze direction."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"depth_m"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"Not available."}),(0,t.jsx)(i.td,{children:"Absolute depth in meters of the 3D gaze point in CPF frame. Depth values are capped at 4m. If there are timestamps where the predicted values are degenerate, this cell is empty."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"yaw_low_rads_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsxs)(i.td,{children:["Lower bound of the confidence interval for the ",(0,t.jsx)(i.strong,{children:"yaw"})," estimation."]}),(0,t.jsx)(i.td,{children:"0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"pitch_low_rads_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsxs)(i.td,{children:["Lower bound of the confidence interval for the ",(0,t.jsx)(i.strong,{children:"pitch"})," estimation."]}),(0,t.jsx)(i.td,{children:"0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"yaw_high_rads_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsxs)(i.td,{children:["Upper bound of the confidence interval for the ",(0,t.jsx)(i.strong,{children:"yaw"})," estimation."]}),(0,t.jsx)(i.td,{children:"0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"pitch_high_rads_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsxs)(i.td,{children:["Upper bound of the confidence interval for the ",(0,t.jsx)(i.strong,{children:"pitch"})," estimation."]}),(0,t.jsx)(i.td,{children:"0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"left_yaw_rads_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"Left eye gaze yaw angle in radians in the CPF frame. The left yaw angle is the angle between the projection of the left eye gaze vector (originating at CPF) on the XZ plane and the Z axis in the CPF frame."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"right_yaw_rads_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"Right eye gaze yaw angle in radians in the CPF frame. The right yaw angle is the angle between the projection of the left eye gaze vector (originating at CPF) on the XZ plane and the Z axis in the CPF frame."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"left_yaw_low_rads_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"Lower bound of left eye gaze yaw angle in radians in CPF frame."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"right_yaw_low_rads_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"Lower bound of the right eye gaze yaw angle in radians in the CPF frame."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"left_yaw_high_rads_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"Upper bound of the left eye gaze yaw angle in radians in the CPF frame."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"right_yaw_high_rads_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"Upper bound of the right eye gaze yaw angle in radians in the CPF frame."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"tx_left_eye_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"Translation along the X direction from CPF origin to left eye position."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"ty_left_eye_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"Translation along the Y direction from CPF origin to left eye position."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"tz_left_eye_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"Translation along the Z direction from CPF origin to left eye position."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"tx_right_eye_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"Translation along the X direction from CPF origin to right eye position."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"ty_right_eye_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"Translation along the Y direction from CPF origin to right eye position."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"tz_right_eye_cpf"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"Translation along the Z direction from CPF origin to right eye position."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"session_uid"})}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:"Unique identifier for a session within the VRS file"}),(0,t.jsx)(i.td,{children:"Same."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"personalized_eye_gazecsv",children:"personalized_eye_gaze.csv"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"personalized_eye_gaze.csv"})," outputs are only generated if the recording has ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/ARK/mps/eye_gaze_calibration",children:"in-session Eye Gaze Calibration data"}),". The schema is exactly the same as ",(0,t.jsx)(i.code,{children:"general_eye_gaze.csv"}),".  The session_uids between general and personalized output will be the same."]}),"\n",(0,t.jsx)(i.p,{children:"The in-session calibration is used to compute user specific calibration (gaze correction parameters). The yaw and pitch values will be adjusted based on this calibration. If the instructions for in-session calibration are followed correctly, the calibrated eye gaze is expected to be more accurate compared to general eye gaze."}),"\n",(0,t.jsx)(i.h3,{id:"personalized-calibration-parameters-pre-march-2024-model",children:"Personalized calibration parameters, pre March 2024 model"}),"\n",(0,t.jsx)(i.p,{children:"Four coefficients are used to generate the output [s_y, s_p, o_y, o_p]:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"corrected_yaw = s_y * yaw + o_y"}),"\n",(0,t.jsx)(i.li,{children:"corrected_pitch = s_p * pitch + o_p"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"personalized-calibration-parameters-new-model",children:"Personalized calibration parameters, new model"}),"\n",(0,t.jsx)(i.p,{children:"Six coefficients are used in the new model output [s_ly, s_ry, s_p, o_ly, o_ry, o_p]:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"corrected_left_yaw = s_ly * left_yaw + o_ly"}),"\n",(0,t.jsx)(i.li,{children:"corrected_right_yaw = s_ry * right_yaw + o_ry"}),"\n",(0,t.jsx)(i.li,{children:"corrected_pitch = s_p * pitch + o_p"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"We also use a diopter delta parameter that corrects the depth:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"corrected_depth = 1 / ((1 / depth) - diopter_delta)"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The diopter delta is calculated during calibration (see Stage 2 below) is the median of difference between 1 / predicted_depth and 1 / groundtruth_depth values."}),"\n",(0,t.jsx)(i.h2,{id:"general-principles",children:"General Principles"}),"\n",(0,t.jsxs)(i.p,{children:["The following principles apply to ",(0,t.jsx)(i.code,{children:"general_eye_gaze.csv"})," and  ",(0,t.jsx)(i.code,{children:"personalized_eye_gaze.csv"})]}),"\n",(0,t.jsx)(i.h3,{id:"confidence-intervals",children:"Confidence Intervals"}),"\n",(0,t.jsx)(i.p,{children:"The confidence intervals represent the models uncertainty estimation. A smaller interval represents higher confidence and a wider interval represents lower confidence. The confidence interval angles are in radians and in CPF frame.\nSome common factors that impact uncertainty include:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Blinking"}),"\n",(0,t.jsx)(i.li,{children:"Hair occluding the eye tracking cameras"}),"\n",(0,t.jsx)(i.li,{children:"Re-adjusting glasses or taking them off to clean them"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["For utility function to load the eye gaze in Python and C++, please check the ",(0,t.jsx)(i.a,{href:"/docs/data_utilities/core_code_snippets/mps#eye-gaze",children:"code examples"})]}),"\n",(0,t.jsx)(i.h3,{id:"session_uid",children:"Session_uid"}),"\n",(0,t.jsxs)(i.p,{children:["When there are multiple users in the same vrs file (users handing off glasses to a different user without stopping the recording), ",(0,t.jsx)(i.code,{children:"session_uid"}),"  identifies intervals corresponding to different calibration sessions if in-app calibration is performed during the hand-offs."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"All the rows with the same session_uid belong to the same session within the VRS file"}),"\n",(0,t.jsx)(i.li,{children:"If there are multiple calibration sessions, the session_uid would be unique for each session"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"general_eye_gaze.csv"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"There will be a single value when there is no in-session eye calibration or only one in-session calibration"}),"\n",(0,t.jsxs)(i.li,{children:["The session_uid column values will always match those in ",(0,t.jsx)(i.code,{children:"personalized_eye_gaze.csv"})]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"No calibrated eye gaze - general_eye_gaze will have one session_uid across all rows"}),"\n",(0,t.jsx)(i.li,{children:"One in-session calibration - general_eye_gaze will have one session_uid across all rows and this value will be identical in personalized_eye_gaze"}),"\n",(0,t.jsx)(i.li,{children:"k > 1 in-session calibrations - both general and calibrated eye gaze will have k unique session_uid that start when in-session calibration begins and this value will be identical in personalized_eye_gaze"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"summaryjson",children:"summary.json"}),"\n",(0,t.jsxs)(i.p,{children:["The summary.json file provides a high level overview of the output for each of the major stages. This is similar to the ",(0,t.jsx)(i.a,{href:"/projectaria_tools/docs/data_formats/mps/mps_summary#operator-summary",children:"operator summary output"})," from the MPS location pipeline."]}),"\n",(0,t.jsx)(i.p,{children:"For each stage of the ET pipeline, there will be one section in this file. If the section is missing, that means that the stage is not applicable or was not run."}),"\n",(0,t.jsx)(i.h4,{id:"stage-1-gazeinference-all-recordings",children:"Stage 1: GazeInference (all recordings)"}),"\n",(0,t.jsx)(i.p,{children:"Uncalibrated Eye Gaze derived data has been generated. If you\u2019re able to download the data to view the .json file it will say SUCCESS."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"status"}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:"SUCCESS (if you are able to download the data and view this file)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"message"}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:"Any further details, if available"})]})]})]}),"\n",(0,t.jsx)(i.h4,{id:"stage-2-insessioncalibration-if-in-session-calibration-available",children:"Stage 2: InSessionCalibration (if in-session calibration available)"}),"\n",(0,t.jsx)(i.p,{children:"If the recording contains one or more valid in-session calibration intervals, the ET pipeline will compute the calibration parameters."}),"\n",(0,t.jsx)(i.p,{children:"Each calibration session found in the VRS file will generate the following information:"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"status"}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:"SUCCESS / FAIL"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"message"}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:"Any further details, if available"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"session_uid"}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:"Unique ID representing the session"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"start_time_us"}),(0,t.jsx)(i.td,{children:"int"}),(0,t.jsx)(i.td,{children:"When the first wearer starts using the Aria glasses, or when subsequent wearer begins in-session calibration (2nd eye calibration onwards)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"end_time_us"}),(0,t.jsx)(i.td,{children:"int"}),(0,t.jsx)(i.td,{children:"When a wearer session or recording ends"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"params"}),(0,t.jsx)(i.td,{children:"Array[float]"}),(0,t.jsx)(i.td,{children:"The calibration parameters (4 floats)"})]})]})]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"The status should be SUCCESS, unless there was an issue where the wearer began the in-session calibration, but did not generate the necessary data. In this case it would FAIL."})}),"\n",(0,t.jsx)(i.h4,{id:"stage-3-calibrationcorrection",children:"Stage 3: CalibrationCorrection"}),"\n",(0,t.jsx)(i.p,{children:"If Stage 2 has been successful, CalibrationCorrection will contain details about calibrated eye gaze. For each calibration session, we will output the following information:"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"status"}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:"SUCCESS / FAIL"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"message"}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:"Any further details, if available"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"session_uid"}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:"Unique id representing the session"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"generalized_gaze_error_rads"}),(0,t.jsx)(i.td,{children:"dict"}),(0,t.jsx)(i.td,{children:"General gaze error in radians"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"calibrated_gaze_error_rads"}),(0,t.jsx)(i.td,{children:"dict"}),(0,t.jsx)(i.td,{children:"Calibrated gaze error in radians"})]})]})]}),"\n",(0,t.jsx)(i.p,{children:"If the previous stages completed successfully, the status for this stage should always be SUCCESS."}),"\n",(0,t.jsx)(i.h4,{id:"example-summaryjson-files",children:"Example summary.json files"}),"\n",(0,t.jsx)(i.h5,{id:"scenario-1-no-calibration-available",children:(0,t.jsx)(i.strong,{children:"Scenario 1: No calibration available"})}),"\n",(0,t.jsx)(i.p,{children:"This report is quite short, as no in-session calibration data is available. Eye Gaze MPS was successfully created:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n    "GazeInference": {\n        "status": "SUCCESS"\n    }\n}\n'})}),"\n",(0,t.jsx)(i.h4,{id:"scenario-2-in-session-calibration-available",children:(0,t.jsx)(i.strong,{children:"Scenario 2: In-session calibration available"})}),"\n",(0,t.jsx)(i.p,{children:"In this example, there were multiple calibration sessions:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"In session one calibration was completed successfully"}),"\n",(0,t.jsx)(i.li,{children:"In session two, the user began the in-session calibration, but did not generate the necessary data."}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n    "GazeInference": {\n        "status": "SUCCESS"\n    },\n    "InSessionCalibration": [\n        {\n            "Status": "SUCCESS",\n            "session_uid": "01ac9bf2-334a-49c6-9dc6-fdc07ab08a2a",\n            "message": "",\n            "start_time_us": 147588973,\n            "end_time_us": 208304973,\n            "num_calibu_frames": 1000,\n            "parameters":[1.02361481, 1.05426864, 0.01158671, 0.01403982]\n        },\n        {\n            "Status": "FAIL",\n            "message": "Couldn\'t compute GT gaze vectors for the interval [487241235, 508304973]",\n            "session_uid": "6063bf11-84ef-4ed5-a785-ac44b4328fdc",\n            "start_time_us": 487241235,\n            "end_time_us": 508304973,\n            "num_calibu_frames": 10,\n        }\n    ],\n    "CalibrationCorrection": [\n        {\n            "status": "SUCCESS",\n            "message": "",\n            "session_uid": "01ac9bf2-334a-49c6-9dc6-fdc07ab08a2a",\n            "generalized_gaze_error_rads": {\n                "mean": 0.047444001119500284,\n                                     "std": 0.015775822542178554,\n\n                                     "min": 0.009264740570696107,\n\n                                     "max": 0.16895371875829926,\n\n                                     "p25": 0.036160872560797655,\n\n                                     "p50": 0.04529629090291307,\n\n                                     "p75": 0.05761677117669144,\n\n                                     "p95": 0.0675233675673802\n            },\n            "calibrated_gaze_error_rads": {\n                "mean": 0.037444001119500284,\n\n                                     "std": 0.005775822542178554,\n\n                                     "min": 0.006364740570696107,\n\n                                     "max": 0.06835371875829926,\n\n                                     "p25": 0.026060872560797655,\n\n                                     "p50": 0.02519329090291307,\n\n                                     "p75": 0.03760677117669144,\n\n                                     "p95": 0.0474232675673802\n            }\n        },\n        {\n            "status": "FAILURE",\n            "message": "No calibration available for this session",\n            "session_uid": "6063bf11-84ef-4ed5-a785-ac44b4328fdc"\n        }    ]\n}\n'})})]})}function j(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var s=n(96540);const t={},a=s.createContext(t);function r(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);