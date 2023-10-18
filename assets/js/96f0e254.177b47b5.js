"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6866],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>x,useMDXComponents:()=>p,withMDXComponents:()=>d});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=r.createContext({}),d=function(e){return function(a){var t=p(a.components);return r.createElement(e,i({},a,{components:t}))}},p=function(e){var a=r.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(m.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},v=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),c=n,u=d["".concat(s,".").concat(c)]||d[c]||g[c]||i;return t?r.createElement(u,o(o({ref:a},m),{},{components:t})):r.createElement(u,o({ref:a},m))}));function x(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=v;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var m=2;m<i;m++)s[m]=t[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},71604:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(87462),n=(t(67294),t(3905)),i=t(79524);const s={sidebar_position:20,title:"Stream & Display Live Sensor Data"},o=void 0,l={unversionedId:"ARK/sdk/samples/device_stream",id:"ARK/sdk/samples/device_stream",title:"Stream & Display Live Sensor Data",description:"How to Stream Data Using the Project Aria Client SDK",source:"@site/docs/ARK/sdk/samples/device_stream.mdx",sourceDirName:"ARK/sdk/samples",slug:"/ARK/sdk/samples/device_stream",permalink:"/projectaria_tools/docs/ARK/sdk/samples/device_stream",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/samples/device_stream.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Stream & Display Live Sensor Data"},sidebar:"tutorialSidebar",previous:{title:"Record a VRS file",permalink:"/projectaria_tools/docs/ARK/sdk/samples/device_recording"},next:{title:"Subscribe To Live Stream",permalink:"/projectaria_tools/docs/ARK/sdk/samples/streaming_subscribe"}},m={},d=[{value:"How to Stream Data Using the Project Aria Client SDK",id:"how-to-stream-data-using-the-project-aria-client-sdk",level:2},{value:"Run <code>device_stream</code>",id:"run-device_stream",level:2},{value:"Example 1: Start and stop streaming over USB",id:"example-1-start-and-stop-streaming-over-usb",level:3},{value:"Example 2: Start and stop streaming over Wi-Fi",id:"example-2-start-and-stop-streaming-over-wi-fi",level:3},{value:"Example 3: Display undistorted RGB live stream over USB",id:"example-3-display-undistorted-rgb-live-stream-over-usb",level:3},{value:"Code walkthrough",id:"code-walkthrough",level:2},{value:"1. Get set up",id:"1-get-set-up",level:3},{value:"2. Retrieve StreamingManager instance",id:"2-retrieve-streamingmanager-instance",level:3},{value:"3. Configure Streaming Settings (optional)",id:"3-configure-streaming-settings-optional",level:3},{value:"4. Access sensor calibration (optional)",id:"4-access-sensor-calibration-optional",level:3},{value:"5. Start Streaming",id:"5-start-streaming",level:3},{value:"6. Configure visualization settings",id:"6-configure-visualization-settings",level:3},{value:"6. Visualize live stream",id:"6-visualize-live-stream",level:3},{value:"7. Stop the stream &amp; free resources",id:"7-stop-the-stream--free-resources",level:3}],p={toc:d},c="wrapper";function u(e){let{components:a,...t}=e;return(0,n.mdx)(c,(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h2",{id:"how-to-stream-data-using-the-project-aria-client-sdk"},"How to Stream Data Using the Project Aria Client SDK"),(0,n.mdx)("p",null,"This page shows how to run the code sample ",(0,n.mdx)("inlineCode",{parentName:"p"},"device_stream")," to stream data from Project Aria sensors and provides a code walkthrough of its capabilities."),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"device_stream")," enables you to:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"* Set how the sensors will stream data using [recording profiles](/docs/tech_spec/recording_profiles)\n* Access sensor calibration through the streaming manager.\n* Start and stop streaming data from Aria glasses over USB\n* Start and stop streaming data from Aria glasses over Wi-FI\n* Visualize the sensor streams\n  * Use [`device_subscribe`](/docs/ARK/sdk/samples/streaming_subscribe) to access the data\n* Display undistorted RGB live stream\n")),(0,n.mdx)("p",null,"If you're on MacOS and lose internet connection, run ",(0,n.mdx)("inlineCode",{parentName:"p"},"aria-doctor")," in a separate terminal."),(0,n.mdx)("admonition",{type:"note"},(0,n.mdx)("p",{parentName:"admonition"},"This code sample requires Python 3.9+ because of a fastplotlib dependency")),(0,n.mdx)("h2",{id:"run-device_stream"},"Run ",(0,n.mdx)("inlineCode",{parentName:"h2"},"device_stream")),(0,n.mdx)("admonition",{type:"info"},(0,n.mdx)("p",{parentName:"admonition"},"You can skip ",(0,n.mdx)("inlineCode",{parentName:"p"},"--update_iptables")," for all streaming sample apps on MacOS")),(0,n.mdx)("h3",{id:"example-1-start-and-stop-streaming-over-usb"},"Example 1: Start and stop streaming over USB"),(0,n.mdx)("p",null,"In this example you'll use the SDK to:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Connect to the device via USB"),(0,n.mdx)("li",{parentName:"ul"},"Start streaming over USB"),(0,n.mdx)("li",{parentName:"ul"},"Show a live preview of the sensor data from Aria's RGB, SLAM, ET cameras as well as IMU sensors.")),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Plug your Aria glasses into your computer, using the provided cable"),(0,n.mdx)("li",{parentName:"ol"},"In terminal, go to the samples directory and run:")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"python -m device_stream --interface usb --update_iptables\n")),(0,n.mdx)("p",null,"You should then see:"),(0,n.mdx)("div",{style:{textAlign:"center"}},(0,n.mdx)("img",{width:"100%",height:"100%",src:(0,i.default)("img/ARK/sdk/device_stream.png"),alt:"Aria Live Stream Window"})),(0,n.mdx)("admonition",{type:"note"},(0,n.mdx)("p",{parentName:"admonition"},"Cameras on Aria glasses are installed sideways. By default, images are reported and viewed as they were provided by cameras and will appear sideways.")),(0,n.mdx)("ol",{start:3},(0,n.mdx)("li",{parentName:"ol"},"There are several ways you can stop streaming:")),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Press q or ESC to quit the app"),(0,n.mdx)("li",{parentName:"ul"},"Use Ctrl-C to terminate in terminal"),(0,n.mdx)("li",{parentName:"ul"},"Press the Capture button on your glasses")),(0,n.mdx)("h3",{id:"example-2-start-and-stop-streaming-over-wi-fi"},"Example 2: Start and stop streaming over Wi-Fi"),(0,n.mdx)("p",null,"Streaming over Wi-Fi is similar, with a few extra steps."),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Connect your Aria Glasses and Computer to the same Wi-Fi compatible Wi-Fi network:")),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Check ",(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/sdk/setup"},"Requirements")," for details about compatible routers")),(0,n.mdx)("ol",{start:2},(0,n.mdx)("li",{parentName:"ol"},"Find the IP address of your glasses in the Companion App under ",(0,n.mdx)("inlineCode",{parentName:"li"},"Wi-Fi")," status"),(0,n.mdx)("li",{parentName:"ol"},"In terminal, go to the samples directory and run:")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"python device_stream --interface wifi --ip-address <Glasses IP> --update_iptables\n")),(0,n.mdx)("ol",{start:4},(0,n.mdx)("li",{parentName:"ol"},"Stop streaming using any of the methods listed in Example 1")),(0,n.mdx)("h3",{id:"example-3-display-undistorted-rgb-live-stream-over-usb"},"Example 3: Display undistorted RGB live stream over USB"),(0,n.mdx)("p",null,"To display undistorted RGB live stream over USB, follow the steps in Example 1, but run a different command from the samples directory."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"python undistort_rgb_image --interface usb --update_iptables\n")),(0,n.mdx)("admonition",{type:"info"},(0,n.mdx)("p",{parentName:"admonition"},"Use ",(0,n.mdx)("inlineCode",{parentName:"p"},"--interface wifi")," to stream over Wi-FI")),(0,n.mdx)("div",{style:{textAlign:"center"}},(0,n.mdx)("img",{width:"100%",height:"100%",src:(0,i.default)("img/ARK/sdk/rgb_rectified.png"),alt:"Aria Live Stream Window"})),(0,n.mdx)("h2",{id:"code-walkthrough"},"Code walkthrough"),(0,n.mdx)("h3",{id:"1-get-set-up"},"1. Get set up"),(0,n.mdx)("p",null,"Import the SDK and connect to the Aria glasses using the Get Set Up instructions in ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/sdk/samples/device_connection"},"device_connection"),"."),(0,n.mdx)("h3",{id:"2-retrieve-streamingmanager-instance"},"2. Retrieve StreamingManager instance"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Get an instance of ",(0,n.mdx)("inlineCode",{parentName:"li"},"StreamingManager")," from the connected Aria glasses.")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"streaming_manager = device.streaming_manager\n")),(0,n.mdx)("h3",{id:"3-configure-streaming-settings-optional"},"3. Configure Streaming Settings (optional)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Set a custom configuration for streaming using the ",(0,n.mdx)("inlineCode",{parentName:"li"},"aria.sdk.StreamingConfig")," class."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"args.profile_name")," allows you to specify the profile name for the streaming.\n_ Go to the ",(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk/concepts/sdk_sensor_profiles"},"Sensor Profiles page")," for how to retrieve details about custom profiles via CLI or SDK"),(0,n.mdx)("li",{parentName:"ul"},"By default, streaming uses Wi-Fi. Use the ",(0,n.mdx)("inlineCode",{parentName:"li"},"StreamingConfig")," instance to set the streaming interface to USB. Go to the ",(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/sdk/concepts/streaming_internals"},"Streaming Internals page")," for information about the differences between Wi-Fi and USB streaming"),(0,n.mdx)("li",{parentName:"ul"},"Use ephemeral streaming certificates for security. This needs to be set to ",(0,n.mdx)("inlineCode",{parentName:"li"},"true")," when no persistent certificates were pre-installed. Go to the ",(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/sdk/concepts/streaming_internals"},"Streaming Internals page")," on the various aspects of streaming security and how certificates are used.")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'streaming_config = StreamingConfig()\nstreaming_config.profile_name = args.profile_name\n\nif args.streaming_interface == "usb":\n    streaming_config.streaming_interface = StreamingInterface.Usb\n\nstreaming_config.security_options.use_ephemeral_certs = True\nstreaming_manager.streaming_config = streaming_config\n')),(0,n.mdx)("h3",{id:"4-access-sensor-calibration-optional"},"4. Access sensor calibration (optional)"),(0,n.mdx)("p",null,"Once the sensors have been configured, the recording manager can provide the sensor calibration data for those settings."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"sensors_calib_json = streaming_manager.sensors_calibration()\n")),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"A Project Aria Tools type device calibration object can then be retrieved by using the ",(0,n.mdx)("inlineCode",{parentName:"li"},"device_calibration_from_json_string")," function:")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"from projectaria_tools.core.calibration import (\n    device_calibration_from_json_string,\n)\nsensors_calib = device_calibration_from_json_string(sensors_calib_json)\n")),(0,n.mdx)("p",null,"To find out more about how to use sensor calibration, go to the ",(0,n.mdx)("a",{parentName:"p",href:"docs/data_utilities/core_code_snippets/calibration#accessing-sensor-calibration"},"Accessing sensor calibration page")," and try the ",(0,n.mdx)("inlineCode",{parentName:"p"},"undistort_rgb_image")," sample app."),(0,n.mdx)("h3",{id:"5-start-streaming"},"5. Start Streaming"),(0,n.mdx)("p",null,"Start streaming, using all the previously set configurations."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"streaming_manager.start_streaming()\n")),(0,n.mdx)("h3",{id:"6-configure-visualization-settings"},"6. Configure visualization settings"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Create a visualizer using the ",(0,n.mdx)("inlineCode",{parentName:"li"},"AriaVisualizer")," class. Look at the ",(0,n.mdx)("inlineCode",{parentName:"li"},"visualizer")," file for how you can extend or define your own visualizer"),(0,n.mdx)("li",{parentName:"ul"},"Create a ",(0,n.mdx)("inlineCode",{parentName:"li"},"aria.sdk.StreamingClientObserver")," instance allowing you to subscribe to Aria live stream data")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"aria_visualizer = AriaVisualizer()\naria_visualizer_streaming_client_observer = AriaVisualizerStreamingClientObserver(aria_visualizer)\n")),(0,n.mdx)("h3",{id:"6-visualize-live-stream"},"6. Visualize live stream"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Retrieve a ",(0,n.mdx)("inlineCode",{parentName:"li"},"StreamingClient")," instance from the previously retrieved ",(0,n.mdx)("inlineCode",{parentName:"li"},"StreamingManager")," instance"),(0,n.mdx)("li",{parentName:"ul"},"Set the ",(0,n.mdx)("inlineCode",{parentName:"li"},"StreamingClient"),"'s observer instance and start subscribing to the live stream data"),(0,n.mdx)("li",{parentName:"ul"},"Enter the rendering loop to visualize the streaming data until the window is closed.")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"streaming_client = streaming_manager.streaming_client\nstreaming_client.set_streaming_client_observer(aria_visualizer_streaming_client_observer)\nstreaming_client.subscribe()\n\naria_visualizer.render_loop()\n")),(0,n.mdx)("h3",{id:"7-stop-the-stream--free-resources"},"7. Stop the stream & free resources"),(0,n.mdx)("p",null,"Once you've finished streaming:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Unsubscribe from ",(0,n.mdx)("inlineCode",{parentName:"li"},"StreamingClient")," instance, so that any held resources can be released"),(0,n.mdx)("li",{parentName:"ul"},"Stop streaming"),(0,n.mdx)("li",{parentName:"ul"},"Disconnect the device")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"streaming_client.unsubscribe()\nstreaming_manager.stop_streaming()\ndevice_client.disconnect(device)\n")))}u.isMDXComponent=!0}}]);