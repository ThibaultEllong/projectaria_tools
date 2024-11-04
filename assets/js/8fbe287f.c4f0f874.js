"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[627],{91172:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});const d=JSON.parse('{"id":"open_datasets/aria_everyday_activities_dataset/aea_download_dataset","title":"Dataset Download","description":"Overview","source":"@site/docs/open_datasets/aria_everyday_activities_dataset/aea_download_dataset.mdx","sourceDirName":"open_datasets/aria_everyday_activities_dataset","slug":"/open_datasets/aria_everyday_activities_dataset/aea_download_dataset","permalink":"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/aea_download_dataset","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_everyday_activities_dataset/aea_download_dataset.mdx","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20,"title":"Dataset Download"},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/aea_getting_started"},"next":{"title":"Data Format","permalink":"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/aea_data_format"}}');var n=t(74848),s=t(28453);const o={sidebar_position:20,title:"Dataset Download"},i="How to Download the AEA Dataset",l={},r=[{value:"Overview",id:"overview",level:2},{value:"Download the sample AEA sequence",id:"download-the-sample-aea-sequence",level:2},{value:"Step 0: Install project_aria_tools package and create a virtual environment if not already done",id:"step-0-install-project_aria_tools-package-and-create-a-virtual-environment-if-not-already-done",level:3},{value:"Step 1 : Visit the AEA website and sign up.",id:"step-1--visit-the-aea-website-and-sign-up",level:3},{value:"Step 2 : Download the download-links file",id:"step-2--download-the-download-links-file",level:3},{value:"Step 3 : Set up a folder for AEA data",id:"step-3--set-up-a-folder-for-aea-data",level:3},{value:"Step 4 : Download the sample sequence (~3GB) via CLI:",id:"step-4--download-the-sample-sequence-3gb-via-cli",level:3},{value:"Download the AEA dataset",id:"download-the-aea-dataset",level:2},{value:"Data size",id:"data-size",level:3},{value:"Download via CLI",id:"download-via-cli",level:3},{value:"Resumable download",id:"resumable-download",level:4},{value:"Detailed arguments",id:"detailed-arguments",level:4},{value:"Download Examples",id:"download-examples",level:3},{value:"Download metadata for all datasets",id:"download-metadata-for-all-datasets",level:4},{value:"Download main data for all sequences",id:"download-main-data-for-all-sequences",level:4},{value:"Download all data for all sequences",id:"download-all-data-for-all-sequences",level:4},{value:"Download main data for 2 specific sequences",id:"download-main-data-for-2-specific-sequences",level:4},{value:"Download main data for all sequences and overwrite",id:"download-main-data-for-all-sequences-and-overwrite",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"how-to-download-the-aea-dataset",children:"How to Download the AEA Dataset"})}),"\n",(0,n.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(a.p,{children:"This page covers how to download sample Aria Everyday Activities (AEA) sequences, as well as how to download specific sequences and types of data. Follow the instructions to download the sample sequence and from there you'll be able to use the CLI to download more data."}),"\n",(0,n.jsx)(a.p,{children:"By downloading the datasets you agree that you have read and accepted the terms of the Aria Everyday Activities Dataset License Agreement."}),"\n",(0,n.jsx)(a.h2,{id:"download-the-sample-aea-sequence",children:"Download the sample AEA sequence"}),"\n",(0,n.jsx)(a.h3,{id:"step-0-install-project_aria_tools-package-and-create-a-virtual-environment-if-not-already-done",children:"Step 0: Install project_aria_tools package and create a virtual environment if not already done"}),"\n",(0,n.jsxs)(a.p,{children:["Follow Step 0 to Step 3 in ",(0,n.jsx)(a.a,{href:"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/aea_getting_started",children:"Getting Started"}),"."]}),"\n",(0,n.jsxs)(a.h3,{id:"step-1--visit-the-aea-website-and-sign-up",children:["Step 1 : Visit the ",(0,n.jsx)(a.a,{href:"https://www.projectaria.com/datasets/aea/",children:"AEA website"})," and sign up."]}),"\n",(0,n.jsxs)(a.p,{children:["Scroll down to the bottom of the page. Enter your email and select ",(0,n.jsx)(a.strong,{children:"Access the Datasets"}),"."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Screenshot of the bottom of the page, showing &quot;Enter email here&quot;",src:t(31108).A+"",width:"1000",height:"325"})}),"\n",(0,n.jsx)(a.h3,{id:"step-2--download-the-download-links-file",children:"Step 2 : Download the download-links file"}),"\n",(0,n.jsxs)(a.p,{children:["Once you've selected ",(0,n.jsx)(a.strong,{children:"Access the Datasets"})," you'll be taken back to the top of the AEA page."]}),"\n",(0,n.jsx)(a.p,{children:"Scroll down the page to select AEA Download Links and download the file to the folder $HOME/Downloads."}),"\n",(0,n.jsx)(a.admonition,{title:"The download-links file will expire in 14 days",type:"warning",children:(0,n.jsx)(a.p,{children:"You can re-download the download-links whenever they expire"})}),"\n",(0,n.jsx)(a.h3,{id:"step-3--set-up-a-folder-for-aea-data",children:"Step 3 : Set up a folder for AEA data"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mkdir -p $HOME/Documents/projectaria_tools_aea_data\n\nmv $HOME/Downloads/aria_everyday_activities_dataset_download_urls.json $HOME/Documents/projectaria_tools_aea_data/\n"})}),"\n",(0,n.jsx)(a.h3,{id:"step-4--download-the-sample-sequence-3gb-via-cli",children:"Step 4 : Download the sample sequence (~3GB) via CLI:"}),"\n",(0,n.jsx)(a.p,{children:"From your Python virtual environment, run:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"aea_dataset_downloader -c $HOME/Documents/projectaria_tools_aea_data/aria_everyday_activities_dataset_download_urls.json \\\n-o $HOME/Documents/projectaria_tools_aea_data/ \\\n-d 0 1 2 3 -e\n"})}),"\n",(0,n.jsx)(a.p,{children:"The sample sequence is representative of a typical single-user sequence, which gives you an idea of to expect from the dataset."}),"\n",(0,n.jsx)(a.h2,{id:"download-the-aea-dataset",children:"Download the AEA dataset"}),"\n",(0,n.jsx)(a.h3,{id:"data-size",children:"Data size"}),"\n",(0,n.jsxs)(a.p,{children:["The AEA dataset contains 143 sequences and the total size of the dataset is about 353GB. The dataset is split into main data and MPS outputs, eye gaze and Multi-SLAM (SLAM outputs created in shared coordinate frame) results. Go to ",(0,n.jsx)(a.a,{href:"/projectaria_tools/docs/ARK/mps/",children:"Project Aria Machine Perception Services"})," for more information about MPS data. The MPS data is also broken into chunks that can be included or excluded at download time."]}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Data type"}),(0,n.jsx)(a.th,{children:"What's included"}),(0,n.jsx)(a.th,{children:"Per sequence size"}),(0,n.jsx)(a.th,{children:"Total size for all sequences"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"main"}),(0,n.jsx)(a.td,{children:"Aria raw data, speech to text, metadata json"}),(0,n.jsx)(a.td,{children:"2 - 4 GB"}),(0,n.jsx)(a.td,{children:"~309 GB"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"MPS eyegaze"}),(0,n.jsx)(a.td,{children:"Eyegaze, summary file"}),(0,n.jsx)(a.td,{children:"< 1 MB"}),(0,n.jsx)(a.td,{children:"~31 MB"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"MPS SLAM points"}),(0,n.jsx)(a.td,{children:"Semi-dense points and observations"}),(0,n.jsx)(a.td,{children:"200 - 500 MB"}),(0,n.jsx)(a.td,{children:"~31 GB"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"MPS SLAM trajectories"}),(0,n.jsx)(a.td,{children:"Open and closed loop trajectories"}),(0,n.jsx)(a.td,{children:"100 - 200 MB"}),(0,n.jsx)(a.td,{children:"12 GB"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"MPS SLAM online calibration"}),(0,n.jsx)(a.td,{children:"Online calibrations"}),(0,n.jsx)(a.td,{children:"< 20 MB"}),(0,n.jsx)(a.td,{children:"1.2 GB"})]})]})]}),"\n",(0,n.jsx)(a.h3,{id:"download-via-cli",children:"Download via CLI"}),"\n",(0,n.jsxs)(a.p,{children:["Follow the ",(0,n.jsx)(a.a,{href:"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/aea_getting_started",children:"AEA Getting Started Guide"})," to download the example data. This section will introduce how to download the dataset using the ",(0,n.jsx)(a.code,{children:"aea_dataset_downloader"}),"."]}),"\n",(0,n.jsx)(a.h4,{id:"resumable-download",children:"Resumable download"}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"aea_dataset_downloader"})," checks the previous download status of the sequences in the --output_folder. If the downloading breaks in the middle, relaunch the CLI and it will continue the downloading."]}),"\n",(0,n.jsx)(a.h4,{id:"detailed-arguments",children:"Detailed arguments"}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Arguments"}),(0,n.jsx)(a.th,{children:"Type"}),(0,n.jsx)(a.th,{children:"Description"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"--cdn_file"}),(0,n.jsx)(a.td,{children:"str"}),(0,n.jsx)(a.td,{children:"The download-urls file you downloaded from the AEA website page after signing up"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"--output_folder"}),(0,n.jsx)(a.td,{children:"str"}),(0,n.jsx)(a.td,{children:"A local path where the downloaded files and metadata will be stored"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"--metadata_only"}),(0,n.jsx)(a.td,{children:"flag"}),(0,n.jsx)(a.td,{children:"Only download the metadata file for the dataset"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"--data_types"}),(0,n.jsx)(a.td,{children:"list of int"}),(0,n.jsx)(a.td,{children:"0\u2192main, 1\u2192MPS eyegaze, 2\u2192MPS trajectories, 3\u2192MPS semidense pointclouds and observations, 4\u2192MPS online calibrations"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"--example_only"}),(0,n.jsx)(a.td,{children:"flag"}),(0,n.jsx)(a.td,{children:"Only download example data"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"--overwrite"}),(0,n.jsx)(a.td,{children:"flag"}),(0,n.jsx)(a.td,{children:"Disable resumable download. Force download and overwrite existing data"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"--sequence_names"}),(0,n.jsx)(a.td,{children:"list of str"}),(0,n.jsx)(a.td,{children:"list of sequence names. If not specified, download all sequences"})]})]})]}),"\n",(0,n.jsx)(a.h3,{id:"download-examples",children:"Download Examples"}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsx)(a.p,{children:"All these commands must be run from your Python virtual environment that has the projectaria-tools package and dependencies installed."})}),"\n",(0,n.jsx)(a.h4,{id:"download-metadata-for-all-datasets",children:"Download metadata for all datasets"}),"\n",(0,n.jsxs)(a.p,{children:["This will download the  ",(0,n.jsx)(a.code,{children:"aria_everyday_activities_metadata.json"}),", which contains metadata for each AEA sequence, including: location number, script number, sequence number, recording number,  dataset version, dataset name, and list of concurrent recordings."]}),"\n",(0,n.jsx)(a.p,{children:"You can use this data to select specific sequences to download."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"aea_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --metadata_only\n"})}),"\n",(0,n.jsx)(a.h4,{id:"download-main-data-for-all-sequences",children:"Download main data for all sequences"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"aea_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --data_types 0\n"})}),"\n",(0,n.jsx)(a.h4,{id:"download-all-data-for-all-sequences",children:"Download all data for all sequences"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"aea_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --data_types 0 1 2 3\n"})}),"\n",(0,n.jsx)(a.h4,{id:"download-main-data-for-2-specific-sequences",children:"Download main data for 2 specific sequences"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"aea_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --data_types 0 --sequence_names loc1_script1_seq1_rec1 loc2_script1_seq1_rec1\n"})}),"\n",(0,n.jsx)(a.h4,{id:"download-main-data-for-all-sequences-and-overwrite",children:"Download main data for all sequences and overwrite"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"aea_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --data_types 0 --overwrite\n"})}),"\n",(0,n.jsx)(a.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsxs)(a.p,{children:["Go to ",(0,n.jsx)(a.a,{href:"/projectaria_tools/docs/data_utilities/installation/troubleshooting",children:"troubleshooting"})," if you experience issues using this guide."]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},31108:(e,a,t)=>{t.d(a,{A:()=>d});const d=t.p+"assets/images/aea_downloads_1-abe5de0b67a0b9b4bbe56645706a90f8.png"},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>i});var d=t(96540);const n={},s=d.createContext(n);function o(e){const a=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),d.createElement(s.Provider,{value:a},e.children)}}}]);