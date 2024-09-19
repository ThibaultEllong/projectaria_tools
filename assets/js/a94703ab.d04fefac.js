"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9048],{88001:(e,t,a)=>{a.r(t),a.d(t,{default:()=>pe});var n=a(96540),o=a(34164),i=a(69817),s=a(18630),l=a(45357),r=a(20040),c=a(23230),d=a(24245),u=a(54067);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var b=a(74848);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,o]=(0,n.useState)(!1),i=(0,n.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,d.gk)();return(0,d.Mq)(((e,a)=>{let{scrollY:n}=e;const s=a?.scrollY;s&&(i.current?i.current=!1:n>=s?(l(),o(!1)):n<t?o(!1):n+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.$)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:a,scrollToTop:()=>s(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,c.translate)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",s.G.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=a(36350),x=a(56347),f=a(82216),j=a(86957),v=a(20020);function _(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const g="collapseSidebarButton_PEFL",C="collapseSidebarButtonIcon_kv0_";function k(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,c.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",g),onClick:t,children:(0,b.jsx)(_,{className:C})})}var A=a(40002),S=a(4799);const N=Symbol("EmptyContext"),I=n.createContext(N);function T(e){let{children:t}=e;const[a,o]=(0,n.useState)(null),i=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:o})),[a]);return(0,b.jsx)(I.Provider,{value:i,children:t})}var y=a(94549),B=a(80260),w=a(14783),L=a(11062);function E(e){let{collapsed:t,categoryLabel:a,onClick:n}=e;return(0,b.jsx)("button",{"aria-label":t?(0,c.translate)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:a}):(0,c.translate)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:a}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:n})}function M(e){let{item:t,onItemClick:a,activePath:i,level:r,index:c,...d}=e;const{items:u,label:m,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.p)(),v=function(e){const t=(0,L.default)();return(0,n.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),_=(0,l.w8)(t,i),g=(0,B.ys)(x,i),{collapsed:C,setCollapsed:k}=(0,y.u)({initialState:()=>!!h&&(!_&&t.collapsed)}),{expandedItem:A,setExpandedItem:T}=function(){const e=(0,n.useContext)(I);if(e===N)throw new S.dV("DocSidebarItemsExpandedStateProvider");return e}(),M=function(e){void 0===e&&(e=!C),T(e?null:c),k(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:o}=e;const i=(0,S.ZC)(t);(0,n.useEffect)((()=>{t&&!i&&a&&o(!1)}),[t,i,a,o])}({isActive:_,collapsed:C,updateCollapsed:M}),(0,n.useEffect)((()=>{h&&null!=A&&A!==c&&f&&k(!0)}),[h,A,c,k,f]),(0,b.jsxs)("li",{className:(0,o.A)(s.G.docs.docSidebarItemCategory,s.G.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":C},p),children:[(0,b.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,b.jsx)(w.default,{className:(0,o.A)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":_}),onClick:h?e=>{a?.(t),x?M(!1):(e.preventDefault(),M())}:()=>{a?.(t)},"aria-current":g?"page":void 0,role:h&&!x?"button":void 0,"aria-expanded":h&&!x?!C:void 0,href:h?v??"#":v,...d,children:m}),x&&h&&(0,b.jsx)(E,{collapsed:C,categoryLabel:m,onClick:e=>{e.preventDefault(),M()}})]}),(0,b.jsx)(y.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:C,children:(0,b.jsx)(V,{items:u,tabIndex:C?-1:0,onItemClick:a,activePath:i,level:r+1})})]})}var H=a(40877),G=a(90716);const P="menuExternalLink_NmtK";function R(e){let{item:t,onItemClick:a,activePath:n,level:i,index:r,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:h}=t,p=(0,l.w8)(t,n),x=(0,H.A)(d);return(0,b.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,b.jsxs)(w.default,{className:(0,o.A)("menu__link",!x&&P,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:a?()=>a(t):void 0},...c,children:[u,!x&&(0,b.jsx)(G.A,{})]})},u)}const W="menuHtmlItem_M9Kj";function D(e){let{item:t,level:a,index:n}=e;const{value:i,defaultStyle:l,className:r}=t;return(0,b.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(a),l&&[W,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:i}},n)}function F(e){let{item:t,...a}=e;switch(t.type){case"category":return(0,b.jsx)(M,{item:t,...a});case"html":return(0,b.jsx)(D,{item:t,...a});default:return(0,b.jsx)(R,{item:t,...a})}}function U(e){let{items:t,...a}=e;const n=(0,l.Y)(t,a.activePath);return(0,b.jsx)(T,{children:n.map(((e,t)=>(0,b.jsx)(F,{item:e,index:t,...a},t)))})}const V=(0,n.memo)(U),Y="menu_SIkG",K="menuWithAnnouncementBar_GW3s";function z(e){let{path:t,sidebar:a,className:i}=e;const l=function(){const{isActive:e}=(0,A.M)(),[t,a]=(0,n.useState)(e);return(0,d.Mq)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,c.translate)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",Y,l&&K,i),children:(0,b.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:a,activePath:t,level:1})})})}const q="sidebar_njMd",O="sidebarWithHideableNavbar_wUlq",J="sidebarHidden_VK0M",Q="sidebarLogo_isFc";function X(e){let{path:t,sidebar:a,onCollapse:n,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,j.p)();return(0,b.jsxs)("div",{className:(0,o.A)(q,s&&O,i&&J),children:[s&&(0,b.jsx)(v.A,{tabIndex:-1,className:Q}),(0,b.jsx)(z,{path:t,sidebar:a}),l&&(0,b.jsx)(k,{onClick:n})]})}const Z=n.memo(X);var $=a(70763),ee=a(61938);const te=e=>{let{sidebar:t,path:a}=e;const n=(0,ee.M)();return(0,b.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1})})};function ae(e){return(0,b.jsx)($.GX,{component:te,props:e})}const ne=n.memo(ae);function oe(e){const t=(0,f.l)(),a="desktop"===t||"ssr"===t,n="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[a&&(0,b.jsx)(Z,{...e}),n&&(0,b.jsx)(ne,{...e})]})}const ie={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function se(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:ie.expandButton,title:(0,c.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(_,{className:ie.expandButtonIcon})})}const le={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function re(e){let{children:t}=e;const a=(0,r.t)();return(0,b.jsx)(n.Fragment,{children:t},a?.name??"noSidebar")}function ce(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,x.zy)(),[r,c]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{r&&c(!1),!r&&(0,p.O)()&&c(!0),i((e=>!e))}),[i,r]);return(0,b.jsx)("aside",{className:(0,o.A)(s.G.docs.docSidebarContainer,le.docSidebarContainer,a&&le.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(le.docSidebarContainer)&&a&&c(!0)},children:(0,b.jsx)(re,{children:(0,b.jsxs)("div",{className:(0,o.A)(le.sidebarViewport,r&&le.sidebarViewportHidden),children:[(0,b.jsx)(oe,{sidebar:t,path:l,onCollapse:d,isHidden:r}),r&&(0,b.jsx)(se,{toggleSidebar:d})]})})})}const de={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function ue(e){let{hiddenSidebarContainer:t,children:a}=e;const n=(0,r.t)();return(0,b.jsx)("main",{className:(0,o.A)(de.docMainContainer,(t||!n)&&de.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",de.docItemWrapper,t&&de.docItemWrapperEnhanced),children:a})})}const me={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function be(e){let{children:t}=e;const a=(0,r.t)(),[o,i]=(0,n.useState)(!1);return(0,b.jsxs)("div",{className:me.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:me.docRoot,children:[a&&(0,b.jsx)(ce,{sidebar:a.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,b.jsx)(ue,{hiddenSidebarContainer:o,children:t})]})]})}var he=a(83510);function pe(e){const t=(0,l.B5)(e);if(!t)return(0,b.jsx)(he.A,{});const{docElement:a,sidebarName:n,sidebarItems:c}=t;return(0,b.jsx)(i.e3,{className:(0,o.A)(s.G.page.docsDocPage),children:(0,b.jsx)(r.V,{name:n,items:c,children:(0,b.jsx)(be,{children:a})})})}},83510:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var n=a(34164),o=a(23230),i=a(85225),s=a(74848);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,n.A)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.A,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.default,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);