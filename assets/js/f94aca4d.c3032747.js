"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8837],{58155:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>r});var n=t(74848),s=t(28453);const d={sidebar_position:30,title:"Dataset Download"},i="How to Download the ADT Dataset",o={id:"open_datasets/aria_digital_twin_dataset/dataset_download",title:"Dataset Download",description:"Overview",source:"@site/docs/open_datasets/aria_digital_twin_dataset/dataset_download.mdx",sourceDirName:"open_datasets/aria_digital_twin_dataset",slug:"/open_datasets/aria_digital_twin_dataset/dataset_download",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_digital_twin_dataset/dataset_download.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Dataset Download"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/getting_started"},next:{title:"Data Format",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format"}},l={},r=[{value:"Overview",id:"overview",level:2},{value:"Download the sample Aria Digital Twin (ADT) sequence",id:"download-the-sample-aria-digital-twin-adt-sequence",level:2},{value:"Step 0: install project_aria_tools package and create venv if not done before",id:"step-0-install-project_aria_tools-package-and-create-venv-if-not-done-before",level:3},{value:"Step 1 : Signup and get the download links file",id:"step-1--signup-and-get-the-download-links-file",level:3},{value:"Step 2 : Set up a folder for ADT data",id:"step-2--set-up-a-folder-for-adt-data",level:3},{value:"Step 3 : Download the sample sequence (~500MB) via CLI:",id:"step-3--download-the-sample-sequence-500mb-via-cli",level:3},{value:"Download the Aria Digital Twin (ADT) benchmark dataset",id:"download-the-aria-digital-twin-adt-benchmark-dataset",level:2},{value:"Data size",id:"data-size",level:3},{value:"Download via CLI",id:"download-via-cli",level:3},{value:"Download VRS for all sequences",id:"download-vrs-for-all-sequences",level:4},{value:"Download VRS + main ground truth data for all sequences",id:"download-vrs--main-ground-truth-data-for-all-sequences",level:4},{value:"Download all data for all sequences",id:"download-all-data-for-all-sequences",level:4},{value:"Download VRS for 2 specific sequences",id:"download-vrs-for-2-specific-sequences",level:4},{value:"Download VRS for all sequences and overwrite",id:"download-vrs-for-all-sequences-and-overwrite",level:4},{value:"Deprecation Notes",id:"deprecation-notes",level:2},{value:"Dataset Metadata",id:"dataset-metadata",level:3},{value:"Challenge Data",id:"challenge-data",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"how-to-download-the-adt-dataset",children:"How to Download the ADT Dataset"})}),"\n",(0,n.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(a.p,{children:"This page covers how to download the sample Aria Digital Twin (ADT) sequence as well as how to download specific sequences and types of data. Follow the instructions to download the sample datasets and from there you'll be able to use the CLI to download more data."}),"\n",(0,n.jsx)(a.p,{children:"The sample dataset is a single-user dataset with body pose in the Apartment. This is a pretty representative example that should give you an idea of the dataset."}),"\n",(0,n.jsxs)(a.p,{children:["By downloading the datasets you agree that you have read and accepted the terms of the ",(0,n.jsx)(a.a,{href:"https://www.projectaria.com/datasets/adt/license/",children:"Aria Digital Twin Dataset License Agreement"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"download-the-sample-aria-digital-twin-adt-sequence",children:"Download the sample Aria Digital Twin (ADT) sequence"}),"\n",(0,n.jsx)(a.h3,{id:"step-0-install-project_aria_tools-package-and-create-venv-if-not-done-before",children:"Step 0: install project_aria_tools package and create venv if not done before"}),"\n",(0,n.jsxs)(a.p,{children:["Follow Step 0 to Step 3 in ",(0,n.jsx)(a.a,{href:"/docs/open_datasets/aria_digital_twin_dataset/getting_started",children:"Getting Started"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"step-1--signup-and-get-the-download-links-file",children:"Step 1 : Signup and get the download links file"}),"\n",(0,n.jsx)(a.p,{children:"To use the downloader CLI, you need to download a file which contains all data URLs plus some metadata for the downloader script.\nWe currently offer two ways of getting this file:"}),"\n",(0,n.jsx)(a.p,{children:"Option 1 - Aria Dataset Explorer:"}),"\n",(0,n.jsxs)(a.p,{children:["Go to the ",(0,n.jsx)(a.a,{href:"https://explorer.projectaria.com/",children:"Aria Dataset Explorer"})," website.\nHere you can subselect sequences according to some filter options, or get the links to all sequences."]}),"\n",(0,n.jsx)(a.p,{children:"Option 2 - ADT Website:"}),"\n",(0,n.jsxs)(a.p,{children:["Visit ",(0,n.jsx)(a.a,{href:"https://www.projectaria.com/datasets/adt/",children:"ADT website"})," and sign up."]}),"\n",(0,n.jsxs)(a.p,{children:["Scroll down to the bottom of the page. Enter your email and select ",(0,n.jsx)(a.strong,{children:"Access the Datasets"}),"."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Screenshot from website showing download dataset",src:t(9687).A+"",width:"1272",height:"285"})}),"\n",(0,n.jsxs)(a.p,{children:["Once you've selected ",(0,n.jsx)(a.strong,{children:"Access the Datasets"})," you'll be taken back to the top of the ADT page."]}),"\n",(0,n.jsxs)(a.p,{children:["Scroll down the page to select ",(0,n.jsx)(a.strong,{children:"Aria Digital Twin Download Links"})," and download the file to the folder $HOME/Downloads."]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"ADT Website Signup Image",src:t(90734).A+"",width:"810",height:"442"})})}),"\n",(0,n.jsx)(a.admonition,{title:"The download-links file will expire in 14 days",type:"info",children:(0,n.jsx)(a.p,{children:"You can redownload the download links whenever they expire"})}),"\n",(0,n.jsx)(a.h3,{id:"step-2--set-up-a-folder-for-adt-data",children:"Step 2 : Set up a folder for ADT data"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"mkdir -p $HOME/Documents/projectaria_tools_adt_data\n\nmv $HOME/Downloads/aria_digital_twin_dataset_download_urls.json $HOME/Documents/projectaria_tools_adt_data/\n"})}),"\n",(0,n.jsx)(a.h3,{id:"step-3--download-the-sample-sequence-500mb-via-cli",children:"Step 3 : Download the sample sequence (~500MB) via CLI:"}),"\n",(0,n.jsx)(a.p,{children:"From your Python virtual environment, run:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"aria_dataset_downloader -c ${PATH_TO_YOUR_CDN_FILE} \\\n-o $HOME/Documents/projectaria_tools_adt_data/ \\\n-l Apartment_release_golden_skeleton_seq100_10s_sample_M1292 \\\n-d 0 1 2 3 4 5 6 7 8 9\n"})}),"\n",(0,n.jsx)(a.p,{children:"The sample dataset is a single-user dataset with body pose in the Apartment. This is a pretty representative example to give an idea of the dataset.\nFor more information on the content in the other sequences, see the Data Content section below"}),"\n",(0,n.jsx)(a.h2,{id:"download-the-aria-digital-twin-adt-benchmark-dataset",children:"Download the Aria Digital Twin (ADT) benchmark dataset"}),"\n",(0,n.jsx)(a.h3,{id:"data-size",children:"Data size"}),"\n",(0,n.jsxs)(a.p,{children:["The Aria Digital Twin dataset consists of 217 sequences. It is split into 4 data types that can be downloaded individually, plus MPS data. Go to ",(0,n.jsx)(a.a,{href:"/projectaria_tools/docs/ARK/mps/",children:"Project Aria Machine Perception Services"})," for more information about MPS data. The MPS data is also broken into chunks that can be included or excluded at download time. The size of each data type is shown below. ADT data without MPS is approximately 3.5TB."]}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:(0,n.jsx)(a.strong,{children:"Data type"})}),(0,n.jsx)(a.th,{children:"What's included"}),(0,n.jsx)(a.th,{children:"Per sequence size"}),(0,n.jsx)(a.th,{children:"Total size for all sequences"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"main"}),(0,n.jsx)(a.td,{children:"Aria raw data, 2D bounding box, 3D object poses and bounding box, skeleton data, eye gaze data"}),(0,n.jsx)(a.td,{children:"3 - 6 GB"}),(0,n.jsx)(a.td,{children:"~700 GB"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"segmentation"}),(0,n.jsx)(a.td,{children:"Instance segmentation data"}),(0,n.jsx)(a.td,{children:"2 - 4 GB"}),(0,n.jsx)(a.td,{children:"~750 GB"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"depth"}),(0,n.jsx)(a.td,{children:"Depth map data"}),(0,n.jsx)(a.td,{children:"4 - 8 GB"}),(0,n.jsx)(a.td,{children:"~1.5 TB"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"synthetic"}),(0,n.jsx)(a.td,{children:"Synthetic rendering data"}),(0,n.jsx)(a.td,{children:"2 - 4 GB"}),(0,n.jsx)(a.td,{children:"500 GB"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"MPS eyegaze"}),(0,n.jsx)(a.td,{children:"Eyegaze, summary file"}),(0,n.jsx)(a.td,{children:"< 1 MB"}),(0,n.jsx)(a.td,{children:"~31 MB"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"MPS SLAM points"}),(0,n.jsx)(a.td,{children:"Semi-dense points and observations"}),(0,n.jsx)(a.td,{children:"200 - 500 MB"}),(0,n.jsx)(a.td,{children:"~31 GB"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"MPS SLAM trajectories"}),(0,n.jsx)(a.td,{children:"Open and closed loop trajectories"}),(0,n.jsx)(a.td,{children:"100 - 200 MB"}),(0,n.jsx)(a.td,{children:"12 GB"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"MPS SLAM online calibration"}),(0,n.jsx)(a.td,{children:"Online calibrations"}),(0,n.jsx)(a.td,{children:"< 20 MB"}),(0,n.jsx)(a.td,{children:"1.2 GB"})]})]})]}),"\n",(0,n.jsx)(a.h3,{id:"download-via-cli",children:"Download via CLI"}),"\n",(0,n.jsxs)(a.p,{children:["ADT uses the general Aria dataset downloader, which is available in the ",(0,n.jsxs)(a.a,{href:"/projectaria_tools/docs/data_utilities/installation/installation_python",children:[(0,n.jsx)(a.code,{children:"projectaria_tools"})," PyPI (pip install) package"]}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["To use the downloader, use the following commands in the virtual environment where you've installed ",(0,n.jsx)(a.code,{children:"projectaria_tools"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"aria_dataset_downloader\n"})}),"\n",(0,n.jsx)(a.p,{children:"To get a description of the arguments that the script needs, run:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"aria_dataset_downloader --help\n"})}),"\n",(0,n.jsx)(a.p,{children:"The following are some example use cases:"}),"\n",(0,n.jsx)(a.h4,{id:"download-vrs-for-all-sequences",children:"Download VRS for all sequences"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"aria_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --data_types 0\n"})}),"\n",(0,n.jsx)(a.h4,{id:"download-vrs--main-ground-truth-data-for-all-sequences",children:"Download VRS + main ground truth data for all sequences"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"aria_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --data_types 0 6\n"})}),"\n",(0,n.jsx)(a.h4,{id:"download-all-data-for-all-sequences",children:"Download all data for all sequences"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"aria_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --data_types 0 1 2 3 4 5 6 7 8 9\n"})}),"\n",(0,n.jsx)(a.h4,{id:"download-vrs-for-2-specific-sequences",children:"Download VRS for 2 specific sequences"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"aria_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --data_types 0 --sequence_names Apartment_release_clean_seq131_M1292 Apartment_release_clean_seq133_M1292\n"})}),"\n",(0,n.jsx)(a.h4,{id:"download-vrs-for-all-sequences-and-overwrite",children:"Download VRS for all sequences and overwrite"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"aria_dataset_downloader --cdn_file ${PATH_TO_YOUR_CDN_FILE} --output_folder ${OUTPUT_FOLDER_PATH} --data_types 0 --overwrite\n"})}),"\n",(0,n.jsx)(a.h2,{id:"deprecation-notes",children:"Deprecation Notes"}),"\n",(0,n.jsx)(a.h3,{id:"dataset-metadata",children:"Dataset Metadata"}),"\n",(0,n.jsxs)(a.p,{children:["We previously provided a dataset metadata JSON \u201caria_digital_twin_benchmark_metadata.json\u201d, which was downloadable with the old ",(0,n.jsx)(a.code,{children:"adt_benchmark_dataset_downloader"}),". The goal of this file was to allow users to filter sequences by data fields provided in each sequence metadata. The ",(0,n.jsx)(a.a,{href:"https://explorer.projectaria.com/",children:"Aria Dataset Explorer"})," has replaced this old method for filtering sequences."]}),"\n",(0,n.jsx)(a.h3,{id:"challenge-data",children:"Challenge Data"}),"\n",(0,n.jsxs)(a.p,{children:["We will be removing access to the ",(0,n.jsx)(a.a,{href:"https://eval.ai/web/challenges/challenge-page/2093/overview",children:"ADT challenge"})," data now that the challenge has concluded. The challenge downloader will be available until the end of 2024. You can find instructions for using this downloader on the ",(0,n.jsx)(a.a,{href:"https://eval.ai/web/challenges/challenge-page/2093/phases",children:"ADT Challenge Website"}),". To use this downloader, however, you will need the deprecated CDN links file. Please email us at ",(0,n.jsx)(a.a,{href:"mailto:ariaoperations@meta.com",children:"ariaoperations@meta.com"})," before December 31 2024 to get access to this metadata file."]}),"\n",(0,n.jsx)(a.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsxs)(a.p,{children:["Check ",(0,n.jsx)(a.a,{href:"/docs/data_utilities/installation/troubleshooting",children:"Project Aria Tools troubleshooting"})," if you are having issues using this guide."]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},90734:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/download_button-2b9f6ae3e16efdab0c68c747b8bb670e.png"},9687:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/download_page-04f665d379ecaeb0bce473d6276658d7.png"},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>o});var n=t(96540);const s={},d=n.createContext(s);function i(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);