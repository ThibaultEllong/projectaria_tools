"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9220],{15680:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>m,MDXProvider:()=>f,mdx:()=>x,useMDXComponents:()=>p,withMDXComponents:()=>o});var n=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(){return s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=n.createContext({}),o=function(e){return function(a){var t=p(a.components);return n.createElement(e,s({},a,{components:t}))}},p=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},f=function(e){var a=p(e.components);return n.createElement(m.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),o=p(t),f=i,u=o["".concat(r,".").concat(f)]||o[f]||g[f]||s;return t?n.createElement(u,l(l({ref:a},m),{},{components:t})):n.createElement(u,l({ref:a},m))}));function x(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=c;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var m=2;m<s;m++)r[m]=t[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},56660:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=t(58168),i=(t(96540),t(15680)),s=t(98180);const r={sidebar_position:10,title:"Plot Sensor Data (Python)"},l="Tutorial: How to Plot Sensor Data Using Python",d={unversionedId:"data_utilities/advanced_code_snippets/plotting_sensor_data",id:"data_utilities/advanced_code_snippets/plotting_sensor_data",title:"Plot Sensor Data (Python)",description:"This tutorial shows how to plot Project Aria sensor data using Python. This example covers how to:",source:"@site/docs/data_utilities/advanced_code_snippets/plotting_sensor_data.mdx",sourceDirName:"data_utilities/advanced_code_snippets",slug:"/data_utilities/advanced_code_snippets/plotting_sensor_data",permalink:"/projectaria_tools/docs/data_utilities/advanced_code_snippets/plotting_sensor_data",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/advanced_code_snippets/plotting_sensor_data.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Plot Sensor Data (Python)"},sidebar:"tutorialSidebar",previous:{title:"MPS - Eye Gaze",permalink:"/projectaria_tools/docs/data_utilities/core_code_snippets/eye_gaze_code"},next:{title:"Image Utilities (Python and C++)",permalink:"/projectaria_tools/docs/data_utilities/advanced_code_snippets/image_utilities"}},m={},o=[{value:"Save Images as PNGs",id:"save-images-as-pngs",level:3},{value:"Plotting IMU",id:"plotting-imu",level:3},{value:"Magnetometer",id:"magnetometer",level:3},{value:"Audio",id:"audio",level:3},{value:"Barometer",id:"barometer",level:3},{value:"GPS",id:"gps",level:3},{value:"2D plots",id:"2d-plots",level:4},{value:"3D plots",id:"3d-plots",level:4},{value:"Wi-Fi beacon",id:"wi-fi-beacon",level:3},{value:"Bluetooth beacon",id:"bluetooth-beacon",level:3}],p={toc:o},f="wrapper";function u(e){let{components:a,...r}=e;return(0,i.mdx)(f,(0,n.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"tutorial-how-to-plot-sensor-data-using-python"},"Tutorial: How to Plot Sensor Data Using Python"),(0,i.mdx)("p",null,"This tutorial shows how to plot Project Aria sensor data using Python. This example covers how to:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Save images as PNGs"),(0,i.mdx)("li",{parentName:"ul"},"Plot raw sensor data from a VRS file and store the plots in PDF files",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Data is plotted with ",(0,i.mdx)("inlineCode",{parentName:"li"},"matplotlib"))))),(0,i.mdx)("p",null,"We start by opening a VRS file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'from projectaria_tools.core import data_provider, image\nfrom projectaria_tools.core.stream_id import StreamId\n\nvrsfile = "example.vrs"\nprovider = data_provider.create_vrs_data_provider(vrsfile)\n')),(0,i.mdx)("h3",{id:"save-images-as-pngs"},"Save Images as PNGs"),(0,i.mdx)("p",null,"Because we support converting image data to numpy arrays, images can be converted to PIL images and saved as PNG files."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'from PIL import Image\nstream_mappings = {\n    "camera-slam-left": StreamId("1201-1"),\n    "camera-slam-right": StreamId("1201-2"),\n    "camera-rgb": StreamId("214-1"),\n    "camera-eyetracking": StreamId("211-1"),\n}\n\nindex = 1 # sample index (as an example)\nfor [stream_name, stream_id] in stream_mappings.items():\n    image = provider.get_image_data_by_index(stream_id, index)\n    Image.fromarray(image[0].to_numpy_array()).save(f\'{stream_name}.png\')\n')),(0,i.mdx)("p",null,"The above snippets will save the following images to the local folder:"),(0,i.mdx)("table",null,(0,i.mdx)("tr",null,(0,i.mdx)("td",null,"SLAM images"),(0,i.mdx)("td",null,(0,i.mdx)("img",{src:(0,s.default)("/img//data_utilities/advanced_guide/camera-slam-left.png"),alt:"camera-slam-left",width:"320"}),(0,i.mdx)("img",{src:(0,s.default)("/img//data_utilities/advanced_guide/camera-slam-right.png"),alt:"camera-slam-right",width:"320"}))),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,"Eye Tracking images"),(0,i.mdx)("td",null,(0,i.mdx)("img",{src:(0,s.default)("/img//data_utilities/advanced_guide/camera-eyetracking.png"),alt:"camera-et"}))),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,"RGB images"),(0,i.mdx)("td",null,(0,i.mdx)("img",{src:(0,s.default)("/img//data_utilities/advanced_guide/camera-rgb.png"),alt:"camera-rgb",width:"320"})))),(0,i.mdx)("h3",{id:"plotting-imu"},"Plotting IMU"),(0,i.mdx)("p",null,"We recommend using ",(0,i.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_formats/mps/slam/mps_trajectory"},"Trajectory MPS outputs")," instead of raw IMU data wherever possible. There may be instances, however, when you need to work directly with the IMU data."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Organize the data into 6 lists. Each list stores one axis of a specific IMU.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'stream_id = provider.get_stream_id_from_label("imu-left")\naccel_x = []\naccel_y = []\naccel_z = []\ngyro_x = []\ngyro_y = []\ngyro_z = []\ntimestamps = []\nfor index in range(0, provider.get_num_data(stream_id)):\n  imu_data = provider.get_imu_data_by_index(stream_id, index)\n  accel_x.append(imu_data.accel_msec2[0])\n  accel_y.append(imu_data.accel_msec2[1])\n  accel_z.append(imu_data.accel_msec2[2])\n  gyro_x.append(imu_data.gyro_radsec[0])\n  gyro_y.append(imu_data.gyro_radsec[1])\n  gyro_z.append(imu_data.gyro_radsec[2])\n  timestamps.append(imu_data.capture_timestamp_ns * 1e-9)\n')),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Plot the data with ",(0,i.mdx)("inlineCode",{parentName:"li"},"matplotlib"))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"plt.figure()\nfig, axes = plt.subplots(1, 2, figsize=(12, 5))\nfig.suptitle(f\"{stream_id.get_name()}\")\n\naxes[0].plot(timestamps, accel_x, 'r-', label=\"x\")\naxes[0].plot(timestamps, accel_y, 'g-', label=\"y\")\naxes[0].plot(timestamps, accel_z, 'b-', label=\"z\")\naxes[0].legend(loc='upper left')\naxes[0].grid('on')\naxes[0].set_xlabel('timestamps (s)')\naxes[0].set_ylabel('accelerometer readout (m/sec2)')\n\naxes[1].plot(timestamps, gyro_x, 'r-', label=\"x\")\naxes[1].plot(timestamps, gyro_y, 'g-', label=\"y\")\naxes[1].plot(timestamps, gyro_z, 'b-', label=\"z\")\naxes[1].legend(loc='upper left')\naxes[1].grid('on')\naxes[1].set_xlabel('timestamps (s)')\naxes[1].set_ylabel('gyroscope readout (rad/sec)')\n")),(0,i.mdx)("p",null,"The plotted image looks like this:\n",(0,i.mdx)("img",{alt:"Image",src:t(29230).A,width:"1008",height:"498"})),(0,i.mdx)("ol",{start:3},(0,i.mdx)("li",{parentName:"ol"},"Save the plot to PDF")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'plt.savefig("imu.pdf", format="pdf", bbox_inches="tight")\n')),(0,i.mdx)("h3",{id:"magnetometer"},"Magnetometer"),(0,i.mdx)("p",null,"Plotting magnetometer is similar to plotting IMU."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Organize the data into 3 lists. Each list stores one axis of magnetometer data.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'stream_id = provider.get_stream_id_from_label("mag0")\nmag_x = []\nmag_y = []\nmag_z = []\ntimestamps = []\nfor index in range(0, provider.get_num_data(stream_id)):\n  mag_data = provider.get_magnetometer_data_by_index(stream_id, index)\n  mag_x.append(mag_data.mag_tesla[0] * 1e6)\n  mag_y.append(mag_data.mag_tesla[1] * 1e6)\n  mag_z.append(mag_data.mag_tesla[2] * 1e6)\n  timestamps.append(mag_data.capture_timestamp_ns * 1e-9)\n')),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Plot the data with ",(0,i.mdx)("inlineCode",{parentName:"li"},"matplotlib"))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"plt.figure()\nfig, axes = plt.subplots(1, 1, figsize=(12, 5))\nfig.suptitle(f\"Magnetometer signal\")\n\naxes.plot(timestamps, mag_x, 'r-', label=\"x\")\naxes.plot(timestamps, mag_y, 'g-', label=\"y\")\naxes.plot(timestamps, mag_z, 'b-', label=\"z\")\naxes.legend(loc='upper left')\naxes.grid('on')\naxes.set_xlabel('timestamps (s)')\naxes.set_ylabel('magnetometer readout (uT)')\nplt.savefig(\"mag.pdf\", format=\"pdf\", bbox_inches=\"tight\")\n")),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Image",src:t(65724).A,width:"1008",height:"498"})),(0,i.mdx)("h3",{id:"audio"},"Audio"),(0,i.mdx)("p",null,"Audio data is interesting since each data is in fact a 7x4096 chunk"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Load the audio data")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'stream_id = provider.get_stream_id_from_label("mic")\ntimestamps = []\naudio = [[] for c in range(0, 7)]\nfor index in range(0, 2):\n  audio_data_i = provider.get_audio_data_by_index(stream_id, index)\n  audio_signal_block = audio_data_i[0].data\n  timestamps_block = [t * 1e-9 for t in audio_data_i[1].capture_timestamps_ns];\n  timestamps += timestamps_block\n  for c in range(0, 7):\n    audio[c] += audio_signal_block[c::7]\n')),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Plot the data with ",(0,i.mdx)("inlineCode",{parentName:"li"},"matplotlib"))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"plt.figure()\nfig, axes = plt.subplots(1, 1, figsize=(12, 5))\nfig.suptitle(f\"Microphone signal\")\nfor c in range(0, 7):\n  plt.plot(timestamps, audio[c], '-', label = f\"channel {c}\")\naxes.legend(loc='upper left')\naxes.grid('on')\naxes.set_xlabel('timestamps (s)')\naxes.set_ylabel('audio readout')\nplt.savefig(\"audio.pdf\", format=\"pdf\", bbox_inches=\"tight\")\n")),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Image",src:t(36467).A,width:"751",height:"358"})),(0,i.mdx)("h3",{id:"barometer"},"Barometer"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Load and plot the data using the following commands")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"plt.figure()\nfig, axes = plt.subplots(1, 2, figsize=(12, 5))\nfig.suptitle(f\"Barometer signal\")\n\nstream_id = provider.get_stream_id_from_label(\"baro0\")\npressure = []\ntemperature = []\ntimestamps = []\nfor index in range(0, provider.get_num_data(stream_id)):\n  baro_data = provider.get_barometer_data_by_index(stream_id, index)\n  pressure.append(baro_data.pressure * 1e-3)\n  temperature.append(baro_data.temperature)\n  timestamps.append(baro_data.capture_timestamp_ns * 1e-9)\n\naxes[0].plot(timestamps, pressure, 'r-')\naxes[0].grid('on')\naxes[0].set_xlabel('timestamps (s)')\naxes[0].set_ylabel('pressure readout (kPascal)')\n\naxes[1].plot(timestamps, temperature, 'r-')\naxes[1].grid('on')\naxes[1].set_xlabel('timestamps (s)')\naxes[1].set_ylabel('temperature readout (C)')\n\nplt.savefig(\"baro.pdf\", format=\"pdf\", bbox_inches=\"tight\")\n")),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Image",src:t(20491).A,width:"405",height:"358"}),(0,i.mdx)("img",{alt:"Image",src:t(86847).A,width:"383",height:"358"})),(0,i.mdx)("h3",{id:"gps"},"GPS"),(0,i.mdx)("p",null,"GPS data can be visualized with 2D or 3D plots."),(0,i.mdx)("h4",{id:"2d-plots"},"2D plots"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"plt.figure()\nfig, axes = plt.subplots(1, 3, figsize=(12, 3))\nfig.suptitle(f\"GPS signal\")\n\nstream_id = provider.get_stream_id_from_label(\"gnss\")\nlatitude = []\nlongitude = []\naltitude = []\ntimestamps = []\nfor index in range(100, 300):\n  gps_data = provider.get_gps_data_by_index(stream_id, index)\n  latitude.append(gps_data.latitude)\n  longitude.append(gps_data.longitude)\n  altitude.append(gps_data.altitude)\n  timestamps.append(gps_data.capture_timestamp_ns * 1e-9)\n\nax = axes[0]\nax.plot(timestamps, latitude, 'r-')\nax.grid('on')\nax.set_xlabel('timestamps (s)')\nax.set_ylabel('latitude')\nax.yaxis.set_major_formatter(ticker.ScalarFormatter(useMathText=True, useOffset=False))\n\nax = axes[1]\nax.plot(timestamps, longitude, 'r-')\nax.grid('on')\nax.set_xlabel('timestamps (s)')\nax.set_ylabel('longitude')\nax.yaxis.set_major_formatter(ticker.ScalarFormatter(useMathText=True, useOffset=False))\n\nax = axes[2]\nax.plot(timestamps, altitude, 'r-')\nax.grid('on')\nax.set_xlabel('timestamps (s)')\nax.set_ylabel('altitude')\nax.yaxis.set_major_formatter(ticker.ScalarFormatter(useMathText=True, useOffset=False))\n\nfig.tight_layout()\nplt.savefig(\"gps.pdf\", format=\"pdf\", bbox_inches=\"tight\")\n")),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Image",src:t(74907).A,width:"862",height:"214"})),(0,i.mdx)("h4",{id:"3d-plots"},"3D plots"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'plt.figure()\nfig = plt.figure()\n\naxes = fig.add_subplot(projection=\'3d\')\naxes.plot(latitude, longitude, altitude)\naxes.view_init(elev=20., azim=-35, roll=0)\nplt.savefig("gps3d.pdf", format="pdf", bbox_inches="tight")\n')),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Image",src:t(23216).A,width:"428",height:"389"})),(0,i.mdx)("h3",{id:"wi-fi-beacon"},"Wi-Fi beacon"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Group the Wi-Fi beacon data by mac bssid")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'stream_id = provider.get_stream_id_from_label("wps")\nrssi = {}\ntimestamps = {}\nprint(provider.get_num_data(stream_id))\nfor index in range(0, provider.get_num_data(stream_id)):\n  wps_data = provider.get_wps_data_by_index(stream_id, index)\n  if wps_data.bssid_mac not in rssi:\n    rssi[wps_data.bssid_mac] = []\n    timestamps[wps_data.bssid_mac] = []\n  rssi[wps_data.bssid_mac].append(wps_data.rssi)\n  timestamps[wps_data.bssid_mac].append(wps_data.board_timestamp_ns * 1e-9)\n')),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Plot the mac address",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"This example has > 15 samples")))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"plt.figure()\nfig, ax = plt.subplots(1, 1, figsize=(6, 5))\nfig.suptitle(f\"Wi-Fi beacon signal\")\n\nfor ssid in list(timestamps.keys()):\n  if len(timestamps[ssid]) < 15:\n    continue\n  ax.scatter(timestamps[ssid], rssi[ssid], label=ssid)\n\nax.grid('on')\nax.set_xlabel('timestamps (s)')\nax.set_ylabel('Wi-Fi RSSI(dBm)')\nplt.legend(loc='upper left')\nplt.savefig(\"wifi.pdf\", format=\"pdf\", bbox_inches=\"tight\")\n")),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Image",src:t(54506).A,width:"424",height:"356"})),(0,i.mdx)("h3",{id:"bluetooth-beacon"},"Bluetooth beacon"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Group data by ",(0,i.mdx)("inlineCode",{parentName:"li"},"unique_id")," (similar to Wi-Fi grouping)")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'stream_id = provider.get_stream_id_from_label("bluetooth")\nrssi = {}\ntimestamps = {}\n\nfor index in range(0, provider.get_num_data(stream_id)):\n  bluetooth_data = provider.get_bluetooth_data_by_index(stream_id, index)\n  if bluetooth_data.unique_id not in rssi:\n    rssi[bluetooth_data.unique_id] = []\n    timestamps[bluetooth_data.unique_id] = []\n  rssi[bluetooth_data.unique_id].append(bluetooth_data.rssi)\n  timestamps[bluetooth_data.unique_id].append(bluetooth_data.board_timestamp_ns * 1e-9)\n')),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Plot the data per ",(0,i.mdx)("inlineCode",{parentName:"li"},"unique_id"))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"plt.figure()\nfig, ax = plt.subplots(1, 1, figsize=(6, 5))\nfig.suptitle(f\"Bluetooth beacon signal\")\n\nfor ssid in list(timestamps.keys()):\n  ax.plot(timestamps[ssid], rssi[ssid], '.')\nax.grid('on')\nax.set_xlabel('timestamps (s)')\nax.set_ylabel('bluetooth RSSI(dBm')\nfig.tight_layout()\n\nplt.savefig(\"ble.pdf\", format=\"pdf\", bbox_inches=\"tight\")\n")),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Image",src:t(14302).A,width:"424",height:"356"})))}u.isMDXComponent=!0},36467:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/audio-4fb64a4e7776c3ab145c5a39aee4f262.png"},20491:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/baro-791c1c4e2ab7326bcccc8e5023172077.png"},14302:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/ble-0522e19b38d22f19e44898e2ae074e3c.png"},74907:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/gps2d-e05e1b6bbec11de088302fe6802b8f92.png"},23216:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/gps3d-4b432a66d4fa5892c2d3e68e0670c6f5.png"},29230:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/imu-e74bec113c1e7d1219bac2ab01338442.png"},65724:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/mag-27d9dc5acb43e0778627a9855cb7366e.png"},86847:(e,a,t)=>{t.d(a,{A:()=>n});const n="data:image/png;base64,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"},54506:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/wifi-b12ff3828fc1912177c6dfa77786f6a6.png"}}]);