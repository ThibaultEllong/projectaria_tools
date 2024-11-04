"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5908],{79172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"open_datasets/aria_synthetic_environments_dataset/ase_getting_started","title":"Getting Started","description":"This section will cover everything you need to know to get up and running using Aria Synthetic Environments (ASE) visualizers and data loaders. ASE tooling contains:","source":"@site/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started.mdx","sourceDirName":"open_datasets/aria_synthetic_environments_dataset","slug":"/open_datasets/aria_synthetic_environments_dataset/ase_getting_started","permalink":"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Getting Started"},"sidebar":"tutorialSidebar","previous":{"title":"Aria Synthetic Environments Dataset","permalink":"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/"},"next":{"title":"Dataset Download","permalink":"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_download_dataset"}}');var a=n(74848),s=n(28453);const i={sidebar_position:10,title:"Getting Started"},r="Getting Started With the Synthetic Environments Dataset",l={},d=[{value:"Quickstart Tutorial - Python",id:"quickstart-tutorial---python",level:2},{value:"Step 0 : Check system requirements and download codebase",id:"step-0--check-system-requirements-and-download-codebase",level:3},{value:"Step 1 : Install Python",id:"step-1--install-python",level:3},{value:"Step 2 : Create a virtual environment",id:"step-2--create-a-virtual-environment",level:3},{value:"Step 3 : Install projectaria_tools from PyPI",id:"step-3--install-projectaria_tools-from-pypi",level:3},{value:"Step 4 : Download sample data",id:"step-4--download-sample-data",level:3},{value:"Step 5 : Run the visualization notebooks",id:"step-5--run-the-visualization-notebooks",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"getting-started-with-the-synthetic-environments-dataset",children:"Getting Started With the Synthetic Environments Dataset"})}),"\n",(0,a.jsx)(t.p,{children:"This section will cover everything you need to know to get up and running using Aria Synthetic Environments (ASE) visualizers and data loaders. ASE tooling contains:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The install instructions specific to ASE"}),"\n",(0,a.jsx)(t.li,{children:"A quick tutorial which runs through a couple of Jupyter notebook for loading and visualizing sample data."}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsx)(t.mdxAdmonitionTitle,{children:(0,a.jsx)(t.a,{href:"/projectaria_tools/docs/data_utilities/installation/troubleshooting#jupyter-notebook-error",children:"Jupyter notebook error"})}),(0,a.jsxs)(t.p,{children:["If you have problems using Jupyter examples, please ",(0,a.jsx)(t.a,{href:"https://www.python.org/downloads/",children:"upgrade python3"})," to the latest version."]})]}),"\n",(0,a.jsx)(t.h2,{id:"quickstart-tutorial---python",children:"Quickstart Tutorial - Python"}),"\n",(0,a.jsx)(t.h3,{id:"step-0--check-system-requirements-and-download-codebase",children:"Step 0 : Check system requirements and download codebase"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/docs/data_utilities/installation/download_codebase",children:"Ensure your system is supported and then download projectaria_tools codebase from the github"})}),"\n",(0,a.jsx)(t.h3,{id:"step-1--install-python",children:"Step 1 : Install Python"}),"\n",(0,a.jsxs)(t.p,{children:["Ensure python3 is installed on the system (check with ",(0,a.jsx)(t.code,{children:"python3 --version)"})]}),"\n",(0,a.jsx)(t.h3,{id:"step-2--create-a-virtual-environment",children:"Step 2 : Create a virtual environment"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"rm -rf $HOME/projectaria_tools_python_env\n\npython3 -m venv $HOME/projectaria_tools_python_env\n\nsource $HOME/projectaria_tools_python_env/bin/activate\n"})}),"\n",(0,a.jsx)(t.h3,{id:"step-3--install-projectaria_tools-from-pypi",children:"Step 3 : Install projectaria_tools from PyPI"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"python3 -m pip install --upgrade pip\n\npython3 -m pip install projectaria-tools'[all]'\n"})}),"\n",(0,a.jsx)(t.p,{children:"The ASE Python tooling for projection of 3D points to RGB images is included in the projectaria_tools package, so no further steps are needed. The following packages used in this tutorial are standard Python packages that are also included in project_aria_tools build:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"plotly"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"numpy"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"scipy"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"pandas"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"matplotlib"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"requests"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"tqdm"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"jupyter"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"step-4--download-sample-data",children:"Step 4 : Download sample data"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Navigate to the ",(0,a.jsx)(t.a,{href:"https://www.projectaria.com/datasets/ase/",children:"ASE page"})," on the Project Aria Website and follow the instructions to download the download-urls file. This same download-urls file can be used for any dataset download until the link expires"]}),"\n",(0,a.jsx)(t.li,{children:"Setup ASE local folder and move download-urls file:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"mkdir -p $HOME/Documents/projectaria_sandbox/projectaria_tools_ase_data\n\nmv $HOME/Downloads/aria_synthetic_environments_dataset_download_urls.json $HOME/Documents/projectaria_sandbox/projectaria_tools_ase_data/\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsx)(t.li,{children:"Download sample dataset using the download tool:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd $HOME/Documents/projectaria_sandbox/projectaria_tools\n\npython3 projects/AriaSyntheticEnvironment/aria_synthetic_environments_downloader.py --set train --scene-ids 0-10 --cdn-file $HOME/Documents/projectaria_sandbox/projectaria_tools_ase_data/aria_synthetic_environments_dataset_download_urls.json --output-dir $HOME/Documents/projectaria_sandbox/projectaria_tools_ase_data --unzip True\n"})}),"\n",(0,a.jsx)(t.h3,{id:"step-5--run-the-visualization-notebooks",children:"Step 5 : Run the visualization notebooks"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"jupyter notebook projects/AriaSyntheticEnvironment/tutorial/ase_tutorial_notebook.ipynb\n"})}),"\n",(0,a.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,a.jsxs)(t.p,{children:["Go to ",(0,a.jsx)(t.a,{href:"/projectaria_tools/docs/data_utilities/installation/troubleshooting",children:"Data Utilities Troubleshooting"})," if you experience issues implementing this guide."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(96540);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);