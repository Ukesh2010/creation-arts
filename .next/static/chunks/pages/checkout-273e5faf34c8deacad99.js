_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"5UCQ":function(e,t,i){"use strict";i.r(t);var n=i("nKUr"),r=i("q1tI"),a=i("8Kt/"),c=i.n(a),o=i("MbLX"),s=i("aIN1"),l=i("IP2g"),d=i("AeXy"),u=i("TJRf"),f=i("bMwp"),p=i("Aiso"),b=i.n(p),h=i("Ii6Q"),m=i("nOHt"),v=i("crtY");t.default=function(){var e=Object(u.c)(),t=Object(u.b)().clearCart,i=Object(v.b)().authenticated,a=Object(m.useRouter)();return Object(r.useEffect)((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=document.createElement("script");t.type="text/javascript",t.src="https://www.paypal.com/sdk/js?client-id=Ac1N1G72VYm_9nP3q3KFWX_RCfpUZkwLbRcUI8_NrerFWVSBDvDRXGYKoSNYLdKiYC_C7_gOT6R2Yy-Q&currency=USD",document.head.appendChild(t),t.onload=e}((function(){window.paypal.Buttons({createOrder:function(){return Object(f.c)()({total_amount:null===e||void 0===e?void 0:e.total_amount}).then((function(e){return e.result.id}))},onApprove:function(i,n){return Object(f.a)()({paypal_order_id:i.orderID,order:e}).then((function(e){if("INSTRUMENT_DECLINED"===e.error)return n.restart();t(),a.push("/products")}))}}).render("#paypal-button-container")}))}),[]),i?Object(n.jsxs)(r.Fragment,{children:[Object(n.jsxs)(c.a,{children:[Object(n.jsx)("title",{children:"Checkout"}),Object(n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(n.jsx)(o.a,{}),Object(n.jsx)("section",{className:"container",children:Object(n.jsxs)("div",{className:"app-page-container",children:[Object(n.jsx)("h4",{className:"mb-2",children:"Checkout"}),Object(n.jsxs)("div",{className:"cart-item-container checkout-page",children:[Object(n.jsxs)("div",{className:"cart-item-header",children:[Object(n.jsx)("div",{className:"product-name",children:"Product"}),Object(n.jsx)("div",{className:"product-price",children:"Product Price"}),Object(n.jsx)("div",{className:"product-qty",children:"Quantity"}),Object(n.jsx)("div",{className:"total-amount",children:"Total Amount"})]}),e.items.map((function(e,t){var i,r=e.name,a=e.price,c=e.quantity,o=e.total_amount,s=e.images;return Object(n.jsxs)("div",{className:"cart-item",children:[Object(n.jsx)("div",{className:"product-image",children:Object(n.jsx)(b.a,{src:(null===s||void 0===s||null===(i=s[0])||void 0===i?void 0:i.url)||h.b,alt:r,layout:"fill"})}),Object(n.jsx)("div",{className:"product-name",children:Object(n.jsx)("span",{children:r})}),Object(n.jsxs)("div",{className:"product-price",children:["$",a]}),Object(n.jsx)("div",{className:"product-qty",children:c}),Object(n.jsxs)("div",{className:"total-amount",children:["$",o]})]},t)}))]}),Object(n.jsxs)("div",{className:"checkout-container paypal-container",children:[Object(n.jsxs)("button",{className:"btn primary-outline-btn checkout-btn",onClick:function(){return a.push("/cart")},children:[Object(n.jsx)(l.a,{icon:d.faArrowLeft,size:"2x"}),"Back to Cart"]}),Object(n.jsx)("div",{id:"paypal-button-container"})]})]})}),Object(n.jsx)(s.a,{})]}):Object(n.jsxs)(r.Fragment,{children:[Object(n.jsxs)(c.a,{children:[Object(n.jsx)("title",{children:"Checkout"}),Object(n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(n.jsx)(o.a,{}),Object(n.jsx)("section",{className:"container",children:Object(n.jsx)("div",{className:"app-page-container",children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"login-required"}),Object(n.jsx)("h3",{className:"text-center",children:"Please login to continue."})]})})})]})}},"6Vsg":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return i("5UCQ")}])},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}},AeXy:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[],r="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z";t.definition={prefix:"fas",iconName:"arrow-left",icon:[448,512,n,"f060",r]},t.faArrowLeft=t.definition,t.prefix="fas",t.iconName="arrow-left",t.width=448,t.height=512,t.ligatures=n,t.unicode="f060",t.svgPathData=r},Aiso:function(e,t,i){e.exports=i("dQHF")},Ii6Q:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return r}));var n="/images/product1.jpg",r=[{min:0,max:30,label:"$30 and Under"},{min:31,max:50,label:"$31 to $50"},{min:51,max:75,label:"$51 to $75"},{min:76,max:100,label:"$76 to $100"},{min:101,max:1e5,label:"Above $100"}]},aIN1:function(e,t,i){"use strict";var n=i("nKUr");i("q1tI");t.a=function(){return Object(n.jsx)("div",{className:"app-footer",children:Object(n.jsx)("div",{className:"copyright-text",children:"\xa9 2021 Yalatreasure, All Rights Reserved."})})}},dQHF:function(e,t,i){"use strict";var n=i("RIqP"),r=i("284h"),a=i("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,i=e.sizes,n=e.unoptimized,r=void 0!==n&&n,a=e.priority,s=void 0!==a&&a,u=e.loading,f=e.className,p=e.quality,b=e.width,h=e.height,m=(0,o.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height"]),v=(0,l.useRef)(null),x=m,g=i?"responsive":"intrinsic",N=!1;"unsized"in x?(N=Boolean(x.unsized),delete x.unsized):"layout"in x&&(x.layout&&(g=x.layout),delete x.layout);0;var _="lazy"===u;s||"undefined"!==typeof u||(_=!0);window.IntersectionObserver||(_=!1);(0,l.useEffect)((function(){var e=v.current;if(e&&_){var t=function(){var e=window.IntersectionObserver;if(c)return c;if(!e)return;return c=new e((function(e){e.forEach((function(e){if(e.isIntersecting){var t=e.target;j(t),c.unobserve(t)}}))}),{rootMargin:"200px"})}();if(t)return t.observe(e),function(){t.unobserve(e)};j(e)}}),[v,_]);var z,k,q,S=O(b),E=O(h),I=O(p),C={visibility:_?"hidden":"visible",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%"};if("undefined"!==typeof S&&"undefined"!==typeof E&&"fill"!==g){var R=E/S,L=isNaN(R)?"100%":"".concat(100*R,"%");"responsive"===g?(z={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},k={display:"block",boxSizing:"border-box",paddingTop:L}):"intrinsic"===g?(z={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},k={boxSizing:"border-box",display:"block",maxWidth:"100%"},q='<svg width="'.concat(S,'" height="').concat(E,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===g&&(z={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:S,height:E})}else"undefined"===typeof S&&"undefined"===typeof E&&"fill"===g&&(z={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var P,A=y(t,r,g,S,I),Q=w({src:t,unoptimized:r,layout:g,width:S,quality:I});_?(P={"data-src":A},Q&&(P["data-srcset"]=Q),f=f?f+" __lazy":"__lazy"):(P={src:A},Q&&(P.srcSet=Q));var U=s&&!1;N&&(z=void 0,k=void 0,C=void 0);return l.default.createElement("div",{style:z},U?function(e){var t=e.src,i=e.unoptimized,n=void 0!==i&&i,r=e.layout,a=e.width,c=e.sizes,o=e.quality;return l.default.createElement(d.default,null,l.default.createElement("link",{rel:"preload",as:"image",href:y(t,n,r,a,o),imagesrcset:w({src:t,unoptimized:n,layout:r,width:a,quality:o}),imagesizes:c}))}({src:t,layout:g,unoptimized:r,width:S,sizes:i,quality:I}):null,k?l.default.createElement("div",{style:k},q?l.default.createElement("img",{style:{maxWidth:"100%",display:"block"},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;charset=utf-8,".concat(q)}):null):null,l.default.createElement("img",Object.assign({},x,P,{decoding:"async",className:f,sizes:i,ref:v,style:C})))};var c,o=a(i("8OQS")),s=a(i("pVnL")),l=r(i("q1tI")),d=a(i("8Kt/")),u=new Map([["imgix",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,a=["auto=format","fit=max","w="+n],c="";r&&a.push("q="+r);a.length&&(c="?"+a.join("&"));return"".concat(t).concat(N(i)).concat(c)}],["cloudinary",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,a=["f_auto","c_limit","w_"+n],c="";r&&a.push("q_"+r);a.length&&(c=a.join(",")+"/");return"".concat(t).concat(c).concat(N(i))}],["akamai",function(e){var t=e.root,i=e.src,n=e.width;return"".concat(t).concat(N(i),"?imwidth=").concat(n)}],["default",_]]),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"},p=f.deviceSizes,b=f.imageSizes,h=f.loader,m=f.path,v=[].concat(n(p),n(b));function j(e){e.dataset.src&&(e.src=e.dataset.src),e.dataset.srcset&&(e.srcset=e.dataset.srcset),e.style.visibility="visible",e.classList.remove("__lazy")}function x(e,t){return"number"!==typeof e||"fill"===t||"responsive"===t?{sizes:p,kind:"w"}:{sizes:n(new Set([e,2*e,3*e].map((function(e){return v.find((function(t){return t>=e}))||v[v.length-1]})))),kind:"x"}}function y(e,t,i,n,r){if(t)return e;var a=x(n,i).sizes;return g({src:e,width:a[a.length-1],quality:r})}function g(e){return(u.get(h)||_)((0,s.default)({root:m},e))}function w(e){var t=e.src,i=e.unoptimized,n=e.layout,r=e.width,a=e.quality;if(!i){var c=x(r,n),o=c.sizes,s=c.kind;return o.map((function(e,i){return"".concat(g({src:t,width:e,quality:a})," ").concat("w"===s?e:i+1).concat(s)})).join(", ")}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function N(e){return"/"===e[0]?e.slice(1):e}function _(e){var t=e.root,i=e.src,n=e.width,r=e.quality;return"".concat(t,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}p.sort((function(e,t){return e-t})),v.sort((function(e,t){return e-t}))},pVnL:function(e,t){function i(){return e.exports=i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},i.apply(this,arguments)}e.exports=i}},[["6Vsg",1,2,0,3,4,5,6]]]);