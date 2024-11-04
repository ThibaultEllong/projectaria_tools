"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9236],{28820:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"ARK/sdk/samples/undistort_rgb_image","title":"Streaming Undistorted RGB Image Using Calibration","description":"Overview","source":"@site/docs/ARK/sdk/samples/undistort_rgb_image.mdx","sourceDirName":"ARK/sdk/samples","slug":"/ARK/sdk/samples/undistort_rgb_image","permalink":"/projectaria_tools/docs/ARK/sdk/samples/undistort_rgb_image","draft":false,"unlisted":false,"editUrl":"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/samples/undistort_rgb_image.mdx","tags":[],"version":"current","sidebarPosition":50,"frontMatter":{"sidebar_position":50,"title":"Streaming Undistorted RGB Image Using Calibration"},"sidebar":"tutorialSidebar","previous":{"title":"Streaming and Visualizing All Live Sensor Data","permalink":"/projectaria_tools/docs/ARK/sdk/samples/device_stream"},"next":{"title":"TICSync Time Synchronization","permalink":"/projectaria_tools/docs/ARK/sdk/samples/ticsync_sample"}}');var n=r(74848),a=r(28453),t=r(98180);const o={sidebar_position:50,title:"Streaming Undistorted RGB Image Using Calibration"},c="Streaming Undistorted RGB Image Using Calibration",l={},d=[{value:"Overview",id:"overview",level:2},{value:"Run <code>undistort_rgb_image</code>",id:"run-undistort_rgb_image",level:2},{value:"Code walkthrough",id:"code-walkthrough",level:3},{value:"1. Access sensor calibration",id:"1-access-sensor-calibration",level:4},{value:"2. Use Project Aria Tools for calibration operations",id:"2-use-project-aria-tools-for-calibration-operations",level:4},{value:"3. Undistort and visualize the live RGB image stream",id:"3-undistort-and-visualize-the-live-rgb-image-stream",level:4}];function g(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"streaming-undistorted-rgb-image-using-calibration",children:"Streaming Undistorted RGB Image Using Calibration"})}),"\n",(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(i.p,{children:["This page shows how to run the code sample ",(0,n.jsx)(i.code,{children:"undistort_rgb_image"})," to:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Access a Project Aria Tools type ",(0,n.jsx)(i.a,{href:"/docs/data_utilities/core_code_snippets/calibration#accessing-sensor-calibration",children:"device calibration object"})]}),"\n",(0,n.jsxs)(i.li,{children:["Use ",(0,n.jsx)(i.a,{href:"/docs/data_utilities/getting_started",children:"core data utilities"})," in ",(0,n.jsx)(i.code,{children:"projectaria_tools"})," to undistort streamed camera data"]}),"\n"]}),"\n",(0,n.jsxs)(i.h2,{id:"run-undistort_rgb_image",children:["Run ",(0,n.jsx)(i.code,{children:"undistort_rgb_image"})]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Plug your Aria glasses into your computer, using the provided USB cable"}),"\n",(0,n.jsx)(i.li,{children:"From the samples directory in Terminal, run:"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"python -m undistort_rgb_image --interface usb --update_iptables\n"})}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["Use ",(0,n.jsx)(i.code,{children:"--interface wifi"})," to stream over Wi-FI"]})}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("img",{width:"100%",height:"100%",src:(0,t.default)("img/ARK/sdk/rgb_rectified.png"),alt:"Aria Live Stream Window"})}),"\n",(0,n.jsx)(i.h3,{id:"code-walkthrough",children:"Code walkthrough"}),"\n",(0,n.jsxs)(i.p,{children:["The code walkthrough for ",(0,n.jsx)(i.code,{children:"undistort_rgb_image.py"})," is similar to ",(0,n.jsx)(i.a,{href:"/docs/ARK/sdk/samples/device_stream",children:"device_stream.py"}),", but has 2 key differences:"]}),"\n",(0,n.jsx)(i.h4,{id:"1-access-sensor-calibration",children:"1. Access sensor calibration"}),"\n",(0,n.jsx)(i.p,{children:"Once the sensors have been configured, the recording manager can provide the sensor calibration data for those settings."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:"sensors_calib_json = streaming_manager.sensors_calibration()\n"})}),"\n",(0,n.jsx)(i.h4,{id:"2-use-project-aria-tools-for-calibration-operations",children:"2. Use Project Aria Tools for calibration operations"}),"\n",(0,n.jsxs)(i.p,{children:["A Project Aria Tools type device calibration object can then be retrieved by using the ",(0,n.jsx)(i.code,{children:"device_calibration_from_json_string"})," function:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:'from projectaria_tools.core.calibration import (\n    device_calibration_from_json_string,\n    distort_by_calibration,\n    get_linear_camera_calibration,\n)\nsensors_calib = device_calibration_from_json_string(sensors_calib_json)\nrgb_calib = sensors_calib.get_camera_calib("camera-rgb")\n'})}),"\n",(0,n.jsx)(i.p,{children:"Get a linear camera calibration object to be used in RGB image undistortion:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:'dst_calib = get_linear_camera_calibration(512, 512, 150, "camera-rgb")\n'})}),"\n",(0,n.jsxs)(i.p,{children:["To find out more about how to use sensor calibration, go to the ",(0,n.jsx)(i.a,{href:"/docs/data_utilities/core_code_snippets/calibration#accessing-sensor-calibration",children:"Accessing Sensor Calibration page"}),"."]}),"\n",(0,n.jsx)(i.h4,{id:"3-undistort-and-visualize-the-live-rgb-image-stream",children:"3. Undistort and visualize the live RGB image stream"}),"\n",(0,n.jsxs)(i.p,{children:["Unlike ",(0,n.jsx)(i.a,{href:"/docs/ARK/sdk/samples/device_stream",children:"device_stream.py"})," that uses custom streaming client observer class, ",(0,n.jsx)(i.code,{children:"undistort_rgb_image.py"})," uses a simple streaming client observer class to define callbacks:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:"class StreamingClientObserver:\n  def __init__(self):\n      self.rgb_image = None\n\n  def on_image_received(self, image: np.array, record: ImageDataRecord):\n      self.rgb_image = image\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Undistort the RGB image using ",(0,n.jsx)(i.code,{children:"distort_by_calibration"})," and visualize it in a while loop. The camera RGB image and the undistorted RGB image are visualized in separate windows using OpenCV. The images are processed and displayed the streaming stops or the application quit."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:"while not (quit_keypress() or ctrl_c):\n    if observer.rgb_image is not None:\n        rgb_image = cv2.cvtColor(observer.rgb_image, cv2.COLOR_BGR2RGB)\n        cv2.imshow(rgb_window, np.rot90(rgb_image, -1))\n\n        # Apply the undistortion correction\n        undistorted_rgb_image = distort_by_calibration(\n            rgb_image, dst_calib, rgb_calib\n        )\n        # Show the undistorted image\n        cv2.imshow(undistorted_window, np.rot90(undistorted_rgb_image, -1))\n\n        observer.rgb_image = None\n"})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"Cameras on Aria glasses are installed sideways. The visualizer rotates the raw image data for a more natural view."})})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>t,x:()=>o});var s=r(96540);const n={},a=s.createContext(n);function t(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);