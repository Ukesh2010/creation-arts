_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"6hm3":function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-detail/[id]",function(){return c("H+ir")}])},"7/K8":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=[],n="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z";t.definition={prefix:"fas",iconName:"minus",icon:[448,512,i,"f068",n]},t.faMinus=t.definition,t.prefix="fas",t.iconName="minus",t.width=448,t.height=512,t.ligatures=i,t.unicode="f068",t.svgPathData=n},DuTs:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=[],n="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z";t.definition={prefix:"fas",iconName:"plus",icon:[448,512,i,"f067",n]},t.faPlus=t.definition,t.prefix="fas",t.iconName="plus",t.width=448,t.height=512,t.ligatures=i,t.unicode="f067",t.svgPathData=n},"H+ir":function(e,t,c){"use strict";c.r(t),c.d(t,"__N_SSP",(function(){return v}));var i=c("rePB"),n=c("nKUr"),a=c("q1tI"),s=c("8Kt/"),r=c.n(s),o=c("MbLX"),l=c("aIN1"),d=c("Aiso"),u=c.n(d),j=c("knhw"),b=c("Ii6Q"),p=c("TJRf"),f=c("PqpD"),O=c("IP2g");function m(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,i)}return c}function h(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?m(Object(c),!0).forEach((function(t){Object(i.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):m(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var v=!0;t.default=function(e){var t=e.product,c=t._id,i=t.name,s=t.price,d=t.category,m=t.images,v=void 0===m?[]:m,x=t.description,N=Object(p.b)(),g=N.findItem,P=N.addItem,_=Object(a.useState)(1),w=_[0],y=_[1],k=Object(a.useState)(0),D=k[0],I=k[1],C=Boolean(g(c));return Object(n.jsxs)(a.Fragment,{children:[Object(n.jsxs)(r.a,{children:[Object(n.jsx)("title",{children:"Product detail"}),Object(n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(n.jsx)(o.a,{}),Object(n.jsx)("section",{className:"container",children:Object(n.jsx)("div",{className:"app-page-container",children:Object(n.jsxs)("div",{className:"product-container",children:[Object(n.jsxs)("div",{className:"product-images-container",children:[Object(n.jsx)("div",{className:"main-image",children:v.map((function(e,t){return t!==D?null:Object(n.jsx)(u.a,{src:(null===e||void 0===e?void 0:e.url)||b.b,alt:(null===e||void 0===e?void 0:e.originalFileName)||"product image",layout:"fill"},D)}))}),Object(n.jsx)("div",{className:"image-slider",children:v.map((function(e,t){return Object(n.jsx)("div",{className:"product-image",onClick:function(){I(t)},children:Object(n.jsx)(u.a,{src:(null===e||void 0===e?void 0:e.url)||b.b,alt:(null===e||void 0===e?void 0:e.originalFileName)||"product image",layout:"fill"})},t)}))})]}),Object(n.jsxs)("div",{className:"product-details",children:[Object(n.jsx)("div",{className:"mb-1",children:Object(n.jsx)("div",{className:"badge",children:null===d||void 0===d?void 0:d.name})}),Object(n.jsx)("h4",{className:"product-title",children:i}),Object(n.jsxs)("div",{className:"product-price",children:[Object(n.jsx)("span",{className:"label",children:"Price"}),Object(n.jsxs)("h3",{children:["$",s]})]}),Object(n.jsxs)("div",{className:"action-container",children:[Object(n.jsx)(j.a,{value:w,onChange:function(e){return y(e)}}),Object(n.jsxs)("button",{className:"btn accent-btn",disabled:C,onClick:function(){P(h(h({},t),{},{quantity:w,total_amount:s*w}))},children:[Object(n.jsx)(O.a,{icon:f.faShoppingBag,size:"2x"}),"Add to Cart"]})]}),Object(n.jsxs)("div",{className:"product-description",children:[Object(n.jsx)("span",{className:"label",children:"Description"}),Object(n.jsx)("p",{children:x})]})]})]})})}),Object(n.jsx)(l.a,{})]})}},knhw:function(e,t,c){"use strict";var i=c("nKUr"),n=(c("q1tI"),c("IP2g")),a=c("DuTs"),s=c("7/K8");t.a=function(e){var t=e.className,c=e.min,r=void 0===c?1:c,o=e.max,l=void 0===o?99:o,d=e.value,u=e.onChange;return Object(i.jsxs)("div",{className:"counter-input-container ".concat(t),children:[Object(i.jsx)("input",{type:"number",className:"form-control input",value:d}),Object(i.jsx)("button",{className:"btn add-btn",disabled:d>=l,onClick:function(){u(d+1)},children:Object(i.jsx)(n.a,{icon:a.faPlus})}),Object(i.jsx)("button",{className:"btn remove-btn",disabled:d<=r,onClick:function(){u(d-1)},children:Object(i.jsx)(n.a,{icon:s.faMinus})})]})}}},[["6hm3",1,2,8,0,3,4,5,11]]]);