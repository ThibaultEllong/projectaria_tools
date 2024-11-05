"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8917],{59023:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"ARK/mps/request_mps/mps_cli_guide","title":"MPS CLI Guide","description":"Overview","source":"@site/docs/ARK/mps/request_mps/mps_cli_guide.mdx","sourceDirName":"ARK/mps/request_mps","slug":"/ARK/mps/request_mps/mps_cli_guide","permalink":"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_guide","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/mps/request_mps/mps_cli_guide.mdx","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_position":30,"title":"MPS CLI Guide"},"sidebar":"tutorialSidebar","previous":{"title":"MPS CLI Getting Started","permalink":"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_getting_started"},"next":{"title":"Desktop App MPS Requests","permalink":"/projectaria_tools/docs/ARK/mps/request_mps/desktop_mps"}}');var n=r(74848),t=r(28453);const d={sidebar_position:30,title:"MPS CLI Guide"},o="Project Aria Machine Perception Services CLI Guide",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Further resources:",id:"further-resources",level:3},{value:"About",id:"about",level:2},{value:"How the MPS CLI works",id:"how-the-mps-cli-works",level:2},{value:"Logs",id:"logs",level:3},{value:"CLI Settings",id:"cli-settings",level:2},{value:"Command line reference",id:"command-line-reference",level:2},{value:"Help",id:"help",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Log in",id:"log-in",level:4},{value:"Token storage",id:"token-storage",level:4},{value:"Log out",id:"log-out",level:4},{value:"Request commands for any mode",id:"request-commands-for-any-mode",level:3},{value:"Define input path",id:"define-input-path",level:4},{value:"Force the provided files to be reprocessed",id:"force-the-provided-files-to-be-reprocessed",level:4},{value:"Automatically retry processing if it fails",id:"automatically-retry-processing-if-it-fails",level:4},{value:"Don\u2019t show the UI",id:"dont-show-the-ui",level:4},{value:"Single Recording mode",id:"single-recording-mode",level:3},{value:"Select the MPS you wish to generate",id:"select-the-mps-you-wish-to-generate",level:4},{value:"Multi-Recording mode",id:"multi-recording-mode",level:3},{value:"Define the output directory",id:"define-the-output-directory",level:4}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"project-aria-machine-perception-services-cli-guide",children:"Project Aria Machine Perception Services CLI Guide"})}),"\n",(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(s.p,{children:"The Project Aria MPS CLI Guide provides detailed information about how to use this tool. The guide contain:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#about",children:"About the MPS CLI"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#how",children:"How the MPS CLI works"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/mps/mps_processing",children:"MPS Data Lifecycle"})," for more details about how sequences are processed on the server"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#settings",children:"MPS CLI Settings"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#clr",children:"MPS CLI Command Line Reference"})}),"\n"]}),"\n",(0,n.jsx)("div",{id:"about"}),"\n",(0,n.jsx)(s.h3,{id:"further-resources",children:"Further resources:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_getting_started",children:"Getting Started With the MPS CLI"})," for a quick tutorial showing basic commands using sample data."]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/mps/mps_troubleshooting",children:"MPS Troubleshooting and Error Codes"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"about",children:"About"}),"\n",(0,n.jsx)(s.p,{children:"The Project Aria MPS Command Line Interface (MPS CLI), part of Project Aria Tools, is the preferred way to request Machine Perception Services (MPS). While you can use the Desktop Companion app to request MPS, the MPS CLI provides more features and ease of upload."}),"\n",(0,n.jsx)(s.p,{children:"The MPS CLI has two modes:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Single","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Process each recording individually"}),"\n",(0,n.jsx)(s.li,{children:"The input can be a file and/or directory, so you can batch process multiple recordings with a single command"}),"\n",(0,n.jsx)(s.li,{children:"Output is always saved next to the input file"}),"\n",(0,n.jsx)(s.li,{children:"The most common way to request MPS"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Multi","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Process multiple recordings to generate multi-sequence SLAM data"}),"\n",(0,n.jsx)(s.li,{children:"User must provide a directory for the outputs"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("div",{id:"how",children:(0,n.jsx)("br",{})}),"\n",(0,n.jsxs)(s.p,{children:["Go to ",(0,n.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli",children:"MPS CLI Overview"})," for a full breakdown of all the available features."]}),"\n",(0,n.jsx)(s.h2,{id:"how-the-mps-cli-works",children:"How the MPS CLI works"}),"\n",(0,n.jsxs)(s.p,{children:["The MPS CLI enables you to upload VRS files from your computer to the Meta servers for processing. The outputs are then saved to your local directory. The MPS CLI will try to process multiple recordings concurrently. The concurrency for various stages can be controlled via ",(0,n.jsx)(s.a,{href:"#settings",children:"Settings"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"MPS CLU UI for single mode",src:r(14424).A+"",width:"2172",height:"1034"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Once you submit your request, the MPS CLI for the selected mode will open and show the status of your requests.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["See the Getting Started or the ",(0,n.jsx)(s.a,{href:"#clr",children:"Command Line Reference"})," below for how to submit a request."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"Once authenticated, the request tool checks with the server to see if this recording was previously processed. We use unique IDs (Hashing stage) to check if this is a new or a previously known recording."}),"\n",(0,n.jsx)(s.li,{children:"If it is a known recording, we skip processing and directly download the results (Download Results stage) or show the error code."}),"\n",(0,n.jsx)(s.li,{children:"If this is a new recording, we run health checks on the recording (HealthCheck stage), to minimize the chances that it will fail during processing. While this check catches obvious errors, like gaps in data and ensures presence of the right sensor streams, but server side processing may still fail."}),"\n",(0,n.jsx)(s.li,{children:"If the health check passes, the recording is encrypted on your machine (Encrypting stage)."}),"\n",(0,n.jsxs)(s.li,{children:["After encryption, the recordings are uploaded to the MPS servers (Uploading stage) for processing.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Uploads are resumable."}),"\n",(0,n.jsx)(s.li,{children:"Interrupted uploads can be resumed within 24 hours."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Data is processed on MPS servers (Processing stage).","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The MPS CLI periodically checks the MPS request's status on the server."}),"\n",(0,n.jsx)(s.li,{children:"It is safe to close the MPS Request tool once the data is processing. When the MPS CLI is reopened, it will check the status of your data and progress to Downloading if it is ready."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.admonition,{title:"If you get an error code",type:"tip",children:[(0,n.jsx)(s.p,{children:"The server re-attempts processing multiple times before it stops and provides an error message"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Check ",(0,n.jsx)(s.a,{href:"/projectaria_tools/docs/ARK/mps/mps_troubleshooting#mps-cli-error-codes",children:"Error Codes"})," to see what the error was."]}),"\n",(0,n.jsxs)(s.li,{children:["We encourage you to send a bug report with log files to ",(0,n.jsx)(s.a,{href:"/projectaria_tools/docs/support",children:"Aria User Support"})," if it is not an error code 1xx. By default, logs are stored in /tmp/logs/projectaria/mps/."]}),"\n"]})]}),"\n",(0,n.jsxs)(s.ol,{start:"8",children:["\n",(0,n.jsx)(s.li,{children:"Once the processing is complete, and the tool is open, outputs are automatically downloaded (Downloading stage)."}),"\n",(0,n.jsx)(s.li,{children:"Recordings in the MPS CLI UI will show the Success status once the outputs been successfully downloaded."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"logs",children:"Logs"}),"\n",(0,n.jsx)(s.p,{children:"Each run will write the console logs to a log file on the local drive. Since the MPS CLI can run concurrently on multiple recordings, these logs are useful for debugging purposes. The logs are named by the current time when the request was initiated via CLI."}),"\n",(0,n.jsxs)(s.p,{children:["By default, logs are stored in ",(0,n.jsx)(s.code,{children:"/tmp/logs/projectaria/mps/"}),". The location can be modified in settings."]}),"\n",(0,n.jsx)("div",{id:"settings",children:(0,n.jsx)("br",{})}),"\n",(0,n.jsx)(s.h2,{id:"cli-settings",children:"CLI Settings"}),"\n",(0,n.jsx)(s.p,{children:"Project Aria MPS CLI settings can be customized via the mps.ini file. This file is located in the $HOME/.projectaria/mps.ini"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"Setting"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"Description"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"Default Value"})})]}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colspan:"3",children:(0,n.jsx)("strong",{children:"General settings"})})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"log_dir"})}),(0,n.jsx)("td",{children:"Where log files are saved for each run. The filename is the timestamp from when the request tool started running."}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"/tmp/logs/projectaria/mps/"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"status_check_interval"})}),(0,n.jsx)("td",{children:"How long the MPS CLI waits to check the status of data during the Processing stage."}),(0,n.jsx)("td",{children:"30 secs"})]}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{colspan:"3",children:[" ",(0,n.jsx)("strong",{children:"HASH"})]})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"concurrent_hashes"})}),(0,n.jsx)("td",{children:"Maximum number of files that can be concurrently hashed"}),(0,n.jsx)("td",{children:"4"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"chunk_size"})}),(0,n.jsx)("td",{children:"Chunk size to use for hashing"}),(0,n.jsx)("td",{children:"10MB"})]}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colspan:"3",children:(0,n.jsx)("strong",{children:"Encryption"})})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"chunk_size"})}),(0,n.jsx)("td",{children:"Chunk size to use for encryption"}),(0,n.jsx)("td",{children:"50MB"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"concurrent_encryptions"})}),(0,n.jsx)("td",{children:"Maximum number of files that can be concurrently encrypted"}),(0,n.jsx)("td",{children:"4"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"delete_encrypted_files"})}),(0,n.jsx)("td",{children:"Whether to delete the encrypted files after upload is done. If you set this to false local disk usage will double, due to an encrypted copy of each file."}),(0,n.jsx)("td",{children:"True."})]}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colspan:"3",children:(0,n.jsx)("strong",{children:"Health Check"})})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"concurrent_health_checks"})}),(0,n.jsx)("td",{children:"Maximum number of VRS file healthchecks that can be run concurrently"}),(0,n.jsx)("td",{children:"2"})]}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colspan:"3",children:(0,n.jsx)("strong",{children:"Uploads"})})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"backoff"})}),(0,n.jsx)("td",{children:"The exponential back off factor for retries during failed uploads. The wait time between successive retries will increase with this factor."}),(0,n.jsx)("td",{children:"1.5"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"interval"})}),(0,n.jsx)("td",{children:"Base delay between retries."}),(0,n.jsx)("td",{children:"20 secs"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"retries"})}),(0,n.jsx)("td",{children:"Maximum number of retries before giving up."}),(0,n.jsx)("td",{children:"10"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"concurrent_uploads"})}),(0,n.jsx)("td",{children:"Maximum number of concurrent uploads."}),(0,n.jsx)("td",{children:"4"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"max_chunk_size"})}),(0,n.jsx)("td",{children:"Maximum chunk size that can be used during uploads."}),(0,n.jsx)("td",{children:"100 MB"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"min_chunk_size"})}),(0,n.jsx)("td",{children:"The minimum upload chunk size."}),(0,n.jsx)("td",{children:"5 MB"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"smoothing_window_size"})}),(0,n.jsx)("td",{children:"Size of the smoothing window to adjust the chunk size. This value defines the number of uploaded chunks that will be used to determine the next chunk size."}),(0,n.jsx)("td",{children:"10"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"target_chunk_upload_secs"})}),(0,n.jsx)("td",{children:"Target time to upload a single chunk. If the chunks in a smoothing window take longer, we reduce the chunk size. If it takes less time, we increase the chunk size."}),(0,n.jsx)("td",{children:"3 secs"})]}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colspan:"3",children:(0,n.jsx)("strong",{children:"GraphQL (Query the MPS backend for MPS Status)"})})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"backoff"})}),(0,n.jsx)("td",{children:"This the exponential back off factor for retries for failed queries. The wait time between successive retries will increase with this factor"}),(0,n.jsx)("td",{children:"1.5"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"interval"})}),(0,n.jsx)("td",{children:"Base delay between retries"}),(0,n.jsx)("td",{children:"4 secs"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"retries"})}),(0,n.jsx)("td",{children:"Maximum number of retries before giving up"}),(0,n.jsx)("td",{children:"3"})]}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colspan:"3",children:(0,n.jsx)("strong",{children:"Download"})})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"backoff"})}),(0,n.jsx)("td",{children:"This the exponential back off factor for retries during failed downloads. The wait time between successive retries will increase with this factor."}),(0,n.jsx)("td",{children:"1.5"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"interval"})}),(0,n.jsx)("td",{children:"Base delay between retries"}),(0,n.jsx)("td",{children:"20 secs"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"retries"})}),(0,n.jsx)("td",{children:"Maximum number of retries before giving up"}),(0,n.jsx)("td",{children:"10"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"chunk_size"})}),(0,n.jsx)("td",{children:"The chunk size to use for downloads"}),(0,n.jsx)("td",{children:"10MB"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"concurrent_downloads"})}),(0,n.jsx)("td",{children:"Number of concurrent downloads"}),(0,n.jsx)("td",{children:"10"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"delete_zip"})}),(0,n.jsx)("td",{children:"The server will send the results in a zip file. This flag controls whether to delete the zip file after extraction or not"}),(0,n.jsx)("td",{children:"True"})]})]}),"\n",(0,n.jsx)("div",{id:"clr",children:(0,n.jsx)("br",{})}),"\n",(0,n.jsx)(s.h2,{id:"command-line-reference",children:"Command line reference"}),"\n",(0,n.jsx)(s.p,{children:"The MPS CLI has two distinct modes: single (process each recording individually) and multi (SLAM outputs for multiple recordings in a shared co-ordinate frame)."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"aria_mps single <options>\n"})}),"\n",(0,n.jsx)(s.p,{children:"or"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"aria_mps multi <options>\n"})}),"\n",(0,n.jsx)(s.h3,{id:"help",children:"Help"}),"\n",(0,n.jsx)(s.p,{children:"To see the available options and subcommands, use:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"--help\n"})}),"\n",(0,n.jsx)(s.p,{children:"or"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"-h\n"})}),"\n",(0,n.jsx)(s.h3,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsx)(s.h4,{id:"log-in",children:"Log in"}),"\n",(0,n.jsx)(s.p,{children:"The first time you use the MPS CLI, you\u2019ll be prompted to enter your username and password. Use the Project Aria credentials you use to sign into the Mobile Companion app. You can also supply the username and password via CLI input. This option is more suited for running MPS as part of a batch script or other automated workflows."}),"\n",(0,n.jsxs)(s.p,{children:["The authentication token gets saved in the ",(0,n.jsx)(s.code,{children:"$HOME/.projectaria"})," directory."]}),"\n",(0,n.jsx)(s.p,{children:"To log in using the CLI"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"-u USERNAME -p PASSWORD\n"})}),"\n",(0,n.jsx)(s.p,{children:"or"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"--username USERNAME --password PASSWORD\n"})}),"\n",(0,n.jsx)(s.h4,{id:"token-storage",children:"Token storage"}),"\n",(0,n.jsx)(s.p,{children:"The login token is saved onto your machine by default."}),"\n",(0,n.jsxs)(s.p,{children:["If you request MPS using ",(0,n.jsx)(s.code,{children:"--no-ui"})," , you'll have the option to pass ",(0,n.jsx)(s.code,{children:"--no-save-token"}),". This means the token won't be saved. Once processing is complete the MPS CLI will also logout and invalidate any existing tokens."]}),"\n",(0,n.jsx)(s.h4,{id:"log-out",children:"Log out"}),"\n",(0,n.jsx)(s.p,{children:"Use the following command to log out the authentication token and delete it from the system. Next time you run the CLI, it will ask for username and password again."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"aria_mps logout\n"})}),"\n",(0,n.jsx)(s.h3,{id:"request-commands-for-any-mode",children:"Request commands for any mode"}),"\n",(0,n.jsx)(s.p,{children:"These options are shared between both modes."}),"\n",(0,n.jsx)(s.h4,{id:"define-input-path",children:"Define input path"}),"\n",(0,n.jsx)(s.p,{children:"Provides the path for a directory or file that will be uploaded for processing. Where a directory is provided, all subdirectories will be scanned for VRS files. At least one input file must be provided. There is no limit of how many files or folders can be included in a single request."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"-i INPUT\n"})}),"\n",(0,n.jsx)(s.p,{children:"or"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"--input INPUT\n"})}),"\n",(0,n.jsx)(s.h4,{id:"force-the-provided-files-to-be-reprocessed",children:"Force the provided files to be reprocessed"}),"\n",(0,n.jsx)(s.p,{children:"Force the server to reprocess all of the provided files, regardless of their current state on the server."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"--force\n"})}),"\n",(0,n.jsx)(s.h4,{id:"automatically-retry-processing-if-it-fails",children:"Automatically retry processing if it fails"}),"\n",(0,n.jsx)(s.p,{children:"By default the MPS server will retry processing data multiple times before generating a failure code. By adding this flag requests automatically retries again if the processing fails. This command is generally only worth using if you\u2019ve done some debugging to warrant it."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"--retry-failed\n"})}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"If you retry 30 days after the recording was uploaded, you'll also need to re-upload the data."})}),"\n",(0,n.jsx)(s.h4,{id:"dont-show-the-ui",children:"Don\u2019t show the UI"}),"\n",(0,n.jsx)(s.p,{children:"Instead of the MPS CLI UI, you\u2019ll see the raw outputs and processes in the command line."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"--no-ui\n"})}),"\n",(0,n.jsx)(s.h3,{id:"single-recording-mode",children:"Single Recording mode"}),"\n",(0,n.jsx)(s.h4,{id:"select-the-mps-you-wish-to-generate",children:"Select the MPS you wish to generate"}),"\n",(0,n.jsx)(s.p,{children:"By default, Eye Gaze and SLAM MPS are generated. Use the features option to select a single service, which can speed up processing."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"--features {EYE_GAZE,SLAM}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"multi-recording-mode",children:"Multi-Recording mode"}),"\n",(0,n.jsx)(s.h4,{id:"define-the-output-directory",children:"Define the output directory"}),"\n",(0,n.jsx)(s.p,{children:"Define the output directory where the results will be stored. Setting the output path is required. The output directory must be empty before processing starts."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"-o OUTPUT_DIR\n"})}),"\n",(0,n.jsx)(s.p,{children:"Or"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"--output OUTPUT_DIR\n"})})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},14424:(e,s,r)=>{r.d(s,{A:()=>i});const i=r.p+"assets/images/mps_cli_ui_single-dc99c169a7136f49d7659b8df65e2e39.png"},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>o});var i=r(96540);const n={},t=i.createContext(n);function d(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);