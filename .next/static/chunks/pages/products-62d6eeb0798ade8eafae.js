_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}},Aiso:function(e,t,n){e.exports=n("dQHF")},Ii6Q:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var i="/images/product1.jpg",r=[{min:0,max:30,label:"$30 and Under"},{min:31,max:50,label:"$31 to $50"},{min:51,max:75,label:"$51 to $75"},{min:76,max:100,label:"$76 to $100"},{min:101,max:1e5,label:"Above $100"}]},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("BsWD");function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var u,s=e[Symbol.iterator]();!(i=(u=s.next()).done)&&(n.push(u.value),!t||n.length!==t);i=!0);}catch(c){r=!0,o=c}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}}(e,t)||Object(i.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},aIN1:function(e,t,n){"use strict";var i=n("nKUr");n("q1tI");t.a=function(){return Object(i.jsx)("div",{className:"app-footer",children:Object(i.jsx)("div",{className:"copyright-text",children:"\xa9 2021 Yalatreasure, All Rights Reserved."})})}},dQHF:function(e,t,n){"use strict";var i=n("RIqP"),r=n("284h"),o=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,r=void 0!==i&&i,o=e.priority,c=void 0!==o&&o,l=e.loading,h=e.className,f=e.quality,p=e.width,v=e.height,m=(0,s.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height"]),b=(0,a.useRef)(null),y=m,x=n?"responsive":"intrinsic",O=!1;"unsized"in y?(O=Boolean(y.unsized),delete y.unsized):"layout"in y&&(y.layout&&(x=y.layout),delete y.layout);0;var w="lazy"===l;c||"undefined"!==typeof l||(w=!0);window.IntersectionObserver||(w=!1);(0,a.useEffect)((function(){var e=b.current;if(e&&w){var t=function(){var e=window.IntersectionObserver;if(u)return u;if(!e)return;return u=new e((function(e){e.forEach((function(e){if(e.isIntersecting){var t=e.target;g(t),u.unobserve(t)}}))}),{rootMargin:"200px"})}();if(t)return t.observe(e),function(){t.unobserve(e)};g(e)}}),[b,w]);var E,A,k,z=_(p),S=_(v),C=_(f),N={visibility:w?"hidden":"visible",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%"};if("undefined"!==typeof z&&"undefined"!==typeof S&&"fill"!==x){var I=S/z,D=isNaN(I)?"100%":"".concat(100*I,"%");"responsive"===x?(E={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},A={display:"block",boxSizing:"border-box",paddingTop:D}):"intrinsic"===x?(E={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},A={boxSizing:"border-box",display:"block",maxWidth:"100%"},k='<svg width="'.concat(z,'" height="').concat(S,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===x&&(E={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:z,height:S})}else"undefined"===typeof z&&"undefined"===typeof S&&"fill"===x&&(E={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var B,L=j(t,r,x,z,C),P=F({src:t,unoptimized:r,layout:x,width:z,quality:C});w?(B={"data-src":L},P&&(B["data-srcset"]=P),h=h?h+" __lazy":"__lazy"):(B={src:L},P&&(B.srcSet=P));var q=c&&!1;O&&(E=void 0,A=void 0,N=void 0);return a.default.createElement("div",{style:E},q?function(e){var t=e.src,n=e.unoptimized,i=void 0!==n&&n,r=e.layout,o=e.width,u=e.sizes,s=e.quality;return a.default.createElement(d.default,null,a.default.createElement("link",{rel:"preload",as:"image",href:j(t,i,r,o,s),imagesrcset:F({src:t,unoptimized:i,layout:r,width:o,quality:s}),imagesizes:u}))}({src:t,layout:x,unoptimized:r,width:z,sizes:n,quality:C}):null,A?a.default.createElement("div",{style:A},k?a.default.createElement("img",{style:{maxWidth:"100%",display:"block"},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;charset=utf-8,".concat(k)}):null):null,a.default.createElement("img",Object.assign({},y,B,{decoding:"async",className:h,sizes:n,ref:b,style:N})))};var u,s=o(n("8OQS")),c=o(n("pVnL")),a=r(n("q1tI")),d=o(n("8Kt/")),l=new Map([["imgix",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=["auto=format","fit=max","w="+i],u="";r&&o.push("q="+r);o.length&&(u="?"+o.join("&"));return"".concat(t).concat(O(n)).concat(u)}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i],u="";r&&o.push("q_"+r);o.length&&(u=o.join(",")+"/");return"".concat(t).concat(u).concat(O(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(O(n),"?imwidth=").concat(i)}],["default",w]]),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"},f=h.deviceSizes,p=h.imageSizes,v=h.loader,m=h.path,b=[].concat(i(f),i(p));function g(e){e.dataset.src&&(e.src=e.dataset.src),e.dataset.srcset&&(e.srcset=e.dataset.srcset),e.style.visibility="visible",e.classList.remove("__lazy")}function y(e,t){return"number"!==typeof e||"fill"===t||"responsive"===t?{sizes:f,kind:"w"}:{sizes:i(new Set([e,2*e,3*e].map((function(e){return b.find((function(t){return t>=e}))||b[b.length-1]})))),kind:"x"}}function j(e,t,n,i,r){if(t)return e;var o=y(i,n).sizes;return x({src:e,width:o[o.length-1],quality:r})}function x(e){return(l.get(v)||w)((0,c.default)({root:m},e))}function F(e){var t=e.src,n=e.unoptimized,i=e.layout,r=e.width,o=e.quality;if(!n){var u=y(r,i),s=u.sizes,c=u.kind;return s.map((function(e,n){return"".concat(x({src:t,width:e,quality:o})," ").concat("w"===c?e:n+1).concat(c)})).join(", ")}}function _(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){return"/"===e[0]?e.slice(1):e}function w(e){var t=e.root,n=e.src,i=e.width,r=e.quality;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}f.sort((function(e,t){return e-t})),b.sort((function(e,t){return e-t}))},my7y:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return Y}));var i=n("KQm4"),r=n("nKUr"),o=n("q1tI"),u=n("8Kt/"),s=n.n(u),c=n("MbLX"),a=n("aIN1"),d=n("rePB"),l=n("ODXe"),h=n("Aiso"),f=n.n(h),p=n("Ii6Q"),v=n("YFqc"),m=n.n(v),b=n("TJRf");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.data,n=t._id,i=t.name,o=t.price,u=Object(l.a)(t.images,1)[0],s=Object(b.b)(),c=s.findItem,a=s.addItem,d=Boolean(c(n));return Object(r.jsxs)("div",{className:"product-item",children:[Object(r.jsx)("div",{className:"product-image",children:Object(r.jsx)(m.a,{href:"/product-detail/".concat(n),children:Object(r.jsx)(f.a,{src:(null===u||void 0===u?void 0:u.url)||p.b,alt:i,layout:"fill"})})}),Object(r.jsxs)("div",{className:"product-details",children:[Object(r.jsx)("div",{className:"product-name",children:i}),Object(r.jsxs)("div",{className:"product-price",children:["$",o]}),Object(r.jsx)("button",{className:"btn primary-outline-btn",disabled:d,onClick:function(){a(y(y({},t),{},{quantity:1,total_amount:o}))},children:"Add to Cart"})]})]})},x=function(e){var t=e.fill,n=void 0===t?"inherit":t,i=e.width,o=void 0===i?"1.5rem":i,u=e.height,s=void 0===u?"1.5rem":u,c=e.className,a=void 0===c?"":c,d=e.viewBox,l=void 0===d?"0 0 24 24":d;return Object(r.jsx)("svg",{width:o,fill:n,height:s,viewBox:l,xmlns:"http://www.w3.org/2000/svg",className:"svg-icon ".concat(a||""),xmlnsXlink:"http://www.w3.org/1999/xlink",children:Object(r.jsx)("path",{d:"M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"})})},F=function(e){var t=e.fill,n=void 0===t?"inherit":t,i=e.width,o=void 0===i?"1.5rem":i,u=e.height,s=void 0===u?"1.5rem":u,c=e.className,a=void 0===c?"":c,d=e.viewBox,l=void 0===d?"0 0 24 24":d,h=e.onClick;return Object(r.jsx)("svg",{onClick:h,width:o,fill:n,height:s,viewBox:l,xmlns:"http://www.w3.org/2000/svg",className:"svg-icon ".concat(a||""),xmlnsXlink:"http://www.w3.org/1999/xlink",children:Object(r.jsx)("path",{d:"M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z"})})},_=function(){return(_=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function O(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,r,o=n.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(i=o.next()).done;)u.push(i.value)}catch(s){r={error:s}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return u}function E(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(w(arguments[t]));return e}var A,k=function(){function e(e,t){var n=e._tree,i=Object.keys(n);this.set=e,this._type=t,this._path=i.length>0?[{node:n,keys:i}]:[]}return e.prototype.next=function(){var e=this.dive();return this.backtrack(),e},e.prototype.dive=function(){if(0===this._path.length)return{done:!0,value:void 0};var e=z(this._path),t=e.node,n=e.keys;return""===z(n)?{done:!1,value:this.result()}:(this._path.push({node:t[z(n)],keys:Object.keys(t[z(n)])}),this.dive())},e.prototype.backtrack=function(){0!==this._path.length&&(z(this._path).keys.pop(),z(this._path).keys.length>0||(this._path.pop(),this.backtrack()))},e.prototype.key=function(){return this.set._prefix+this._path.map((function(e){var t=e.keys;return z(t)})).filter((function(e){return""!==e})).join("")},e.prototype.value=function(){return z(this._path).node[""]},e.prototype.result=function(){return"VALUES"===this._type?this.value():"KEYS"===this._type?this.key():[this.key(),this.value()]},e.prototype[Symbol.iterator]=function(){return this},e}(),z=function(e){return e[e.length-1]},S=function(e,t,n,i,r,o){o.push({distance:0,ia:i,ib:0,edit:r});for(var u=[];o.length>0;){var s=o.pop(),c=s.distance,a=s.ia,d=s.ib,l=s.edit;if(d!==t.length)if(e[a]===t[d])o.push({distance:c,ia:a+1,ib:d+1,edit:0});else{if(c>=n)continue;2!==l&&o.push({distance:c+1,ia:a,ib:d+1,edit:3}),a<e.length&&(3!==l&&o.push({distance:c+1,ia:a+1,ib:d,edit:2}),3!==l&&2!==l&&o.push({distance:c+1,ia:a+1,ib:d+1,edit:1}))}else u.push({distance:c,i:a,edit:l})}return u},C=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t=""),this._tree=e,this._prefix=t}return e.prototype.atPrefix=function(t){var n;if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");var i=w(N(this._tree,t.slice(this._prefix.length)),2),r=i[0],o=i[1];if(void 0===r){var u=w(R(o),2),s=u[0],c=u[1],a=Object.keys(s).find((function(e){return""!==e&&e.startsWith(c)}));if(void 0!==a)return new e(((n={})[a.slice(c.length)]=s[a],n),t)}return new e(r||{},t)},e.prototype.clear=function(){delete this._size,this._tree={}},e.prototype.delete=function(e){return delete this._size,L(this._tree,e)},e.prototype.entries=function(){return new k(this,"ENTRIES")},e.prototype.forEach=function(e){var t,n;try{for(var i=O(this),r=i.next();!r.done;r=i.next()){var o=w(r.value,2);e(o[0],o[1],this)}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.fuzzyGet=function(e,t){return function(e,t,n){for(var i=[{distance:0,i:0,key:"",node:e}],r={},o=[],u=function(){var e=i.pop(),u=e.node,s=e.distance,c=e.key,a=e.i,d=e.edit;Object.keys(u).forEach((function(e){if(""===e){var l=s+(t.length-a),h=w(r[c]||[null,1/0],2)[1];l<=n&&l<h&&(r[c]=[u[e],l])}else S(t,e,n-s,a,d,o).forEach((function(t){var n=t.distance,r=t.i,o=t.edit;i.push({node:u[e],distance:s+n,key:c+e,i:r,edit:o})}))}))};i.length>0;)u();return r}(this._tree,e,t)},e.prototype.get=function(e){var t=I(this._tree,e);return void 0!==t?t[""]:void 0},e.prototype.has=function(e){var t=I(this._tree,e);return void 0!==t&&t.hasOwnProperty("")},e.prototype.keys=function(){return new k(this,"KEYS")},e.prototype.set=function(e,t){if("string"!==typeof e)throw new Error("key must be a string");return delete this._size,D(this._tree,e)[""]=t,this},Object.defineProperty(e.prototype,"size",{get:function(){var e=this;return this._size||(this._size=0,this.forEach((function(){e._size+=1}))),this._size},enumerable:!1,configurable:!0}),e.prototype.update=function(e,t){if("string"!==typeof e)throw new Error("key must be a string");delete this._size;var n=D(this._tree,e);return n[""]=t(n[""]),this},e.prototype.values=function(){return new k(this,"VALUES")},e.prototype[Symbol.iterator]=function(){return this.entries()},e.from=function(t){var n,i,r=new e;try{for(var o=O(t),u=o.next();!u.done;u=o.next()){var s=w(u.value,2),c=s[0],a=s[1];r.set(c,a)}}catch(d){n={error:d}}finally{try{u&&!u.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}return r},e.fromObject=function(t){return e.from(Object.entries(t))},e}(),N=function(e,t,n){if(void 0===n&&(n=[]),0===t.length||null==e)return[e,n];var i=Object.keys(e).find((function(e){return""!==e&&t.startsWith(e)}));return void 0===i?(n.push([e,t]),N(void 0,"",n)):(n.push([e,i]),N(e[i],t.slice(i.length),n))},I=function(e,t){if(0===t.length||null==e)return e;var n=Object.keys(e).find((function(e){return""!==e&&t.startsWith(e)}));return void 0!==n?I(e[n],t.slice(n.length)):void 0},D=function(e,t){var n;if(0===t.length||null==e)return e;var i=Object.keys(e).find((function(e){return""!==e&&t.startsWith(e)}));if(void 0===i){var r=Object.keys(e).find((function(e){return""!==e&&e.startsWith(t[0])}));if(void 0!==r){var o=B(t,r);return e[o]=((n={})[r.slice(o.length)]=e[r],n),delete e[r],D(e[o],t.slice(o.length))}return e[t]={},e[t]}return D(e[i],t.slice(i.length))},B=function(e,t,n,i,r){return void 0===n&&(n=0),void 0===i&&(i=Math.min(e.length,t.length)),void 0===r&&(r=""),n>=i||e[n]!==t[n]?r:B(e,t,n+1,i,r+e[n])},L=function(e,t){var n=w(N(e,t),2),i=n[0],r=n[1];if(void 0!==i){delete i[""];var o=Object.keys(i);0===o.length&&P(r),1===o.length&&q(r,o[0],i[o[0]])}},P=function(e){if(0!==e.length){var t=w(R(e),2),n=t[0];delete n[t[1]],0===Object.keys(n).length&&P(e.slice(0,-1))}},q=function(e,t,n){if(0!==e.length){var i=w(R(e),2),r=i[0],o=i[1];r[o+t]=n,delete r[o]}},R=function(e){return e[e.length-1]},T=function(){function e(e){if(null==(null===e||void 0===e?void 0:e.fields))throw new Error('MiniSearch: option "fields" must be provided');this._options=_(_(_({},K),e),{searchOptions:_(_({},X),e.searchOptions||{})}),this._index=new C,this._documentCount=0,this._documentIds={},this._fieldIds={},this._fieldLength={},this._averageFieldLength={},this._nextId=0,this._storedFields={},this.addFields(this._options.fields)}return e.prototype.add=function(e){var t=this,n=this._options,i=n.extractField,r=n.tokenize,o=n.processTerm,u=n.fields,s=n.idField,c=i(e,s);if(null==c)throw new Error('MiniSearch: document does not have ID field "'+s+'"');var a=this.addDocumentId(c);this.saveStoredFields(a,e),u.forEach((function(n){var u=i(e,n);if(null!=u){var s=r(u.toString(),n);t.addFieldLength(a,t._fieldIds[n],t.documentCount-1,s.length),s.forEach((function(e){var i=o(e,n);i&&t.addTerm(t._fieldIds[n],a,i)}))}}))},e.prototype.addAll=function(e){var t=this;e.forEach((function(e){return t.add(e)}))},e.prototype.addAllAsync=function(e,t){var n=this;void 0===t&&(t={});var i=t.chunkSize,r=void 0===i?10:i,o={chunk:[],promise:Promise.resolve()},u=e.reduce((function(e,t,i){var o=e.chunk,u=e.promise;return o.push(t),(i+1)%r===0?{chunk:[],promise:u.then((function(){return new Promise((function(e){return setTimeout(e,0)}))})).then((function(){return n.addAll(o)}))}:{chunk:o,promise:u}}),o),s=u.chunk;return u.promise.then((function(){return n.addAll(s)}))},e.prototype.remove=function(e){var t=this,n=this._options,i=n.tokenize,r=n.processTerm,o=n.extractField,u=n.fields,s=n.idField,c=o(e,s);if(null==c)throw new Error('MiniSearch: document does not have ID field "'+s+'"');var a=w(Object.entries(this._documentIds).find((function(e){var t=w(e,2),n=(t[0],t[1]);return c===n}))||[],1)[0];if(null==a)throw new Error("MiniSearch: cannot remove document with ID "+c+": it is not in the index");u.forEach((function(n){var u=o(e,n);null!=u&&i(u.toString(),n).forEach((function(e){var i=r(e,n);i&&t.removeTerm(t._fieldIds[n],a,i)}))})),delete this._storedFields[a],delete this._documentIds[a],this._documentCount-=1},e.prototype.removeAll=function(e){var t=this;if(e)e.forEach((function(e){return t.remove(e)}));else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new C,this._documentCount=0,this._documentIds={},this._fieldLength={},this._averageFieldLength={},this._storedFields={},this._nextId=0}},e.prototype.search=function(e,t){var n=this;void 0===t&&(t={});var i=this._options,r=i.tokenize,o=i.processTerm,u=i.searchOptions,s=_(_({tokenize:r,processTerm:o},u),t),c=s.tokenize,a=s.processTerm,d=c(e).map((function(e){return a(e)})).filter((function(e){return!!e})).map(Q(s)).map((function(e){return n.executeQuery(e,s)})),l=this.combineResults(d,s.combineWith);return Object.entries(l).reduce((function(e,t){var i=w(t,2),r=i[0],o=i[1],u=o.score,c=o.match,a=o.terms,d={id:n._documentIds[r],terms:$(a),score:u,match:c};return Object.assign(d,n._storedFields[r]),(null==s.filter||s.filter(d))&&e.push(d),e}),[]).sort((function(e,t){return e.score<t.score?1:-1}))},e.prototype.autoSuggest=function(e,t){void 0===t&&(t={}),t=_(_({},H),t);var n=this.search(e,t).reduce((function(e,t){var n=t.score,i=t.terms,r=i.join(" ");return null==e[r]?e[r]={score:n,terms:i,count:1}:(e[r].score+=n,e[r].count+=1),e}),{});return Object.entries(n).map((function(e){var t=w(e,2),n=t[0],i=t[1],r=i.score;return{suggestion:n,terms:i.terms,score:r/i.count}})).sort((function(e,t){return e.score<t.score?1:-1}))},Object.defineProperty(e.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),e.loadJSON=function(t,n){if(null==n)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return e.loadJS(JSON.parse(t),n)},e.getDefault=function(e){if(K.hasOwnProperty(e))return M(K,e);throw new Error('MiniSearch: unknown option "'+e+'"')},e.loadJS=function(t,n){var i=t.index,r=t.documentCount,o=t.nextId,u=t.documentIds,s=t.fieldIds,c=t.fieldLength,a=t.averageFieldLength,d=t.storedFields,l=new e(n);return l._index=new C(i._tree,i._prefix),l._documentCount=r,l._nextId=o,l._documentIds=u,l._fieldIds=s,l._fieldLength=c,l._averageFieldLength=a,l._fieldIds=s,l._storedFields=d||{},l},e.prototype.executeQuery=function(e,t){var n=this,i=_(_({},this._options.searchOptions),t),r=(i.fields||this._options.fields).reduce((function(e,t){var n;return _(_({},e),((n={})[t]=M(e,t)||1,n))}),i.boost||{}),o=i.boostDocument,u=i.weights,s=_(_({},X.weights),u),c=s.fuzzy,a=s.prefix,d=this.termResults(e.term,r,o,this._index.get(e.term));if(!e.fuzzy&&!e.prefix)return d;var l=[d];if(e.prefix&&this._index.atPrefix(e.term).forEach((function(t,i){var u=.3*(t.length-e.term.length)/t.length;l.push(n.termResults(t,r,o,i,a,u))})),e.fuzzy){var h=!0===e.fuzzy?.2:e.fuzzy,f=h<1?Math.round(e.term.length*h):h;Object.entries(this._index.fuzzyGet(e.term,f)).forEach((function(e){var t=w(e,2),i=t[0],u=w(t[1],2),s=u[0],a=u[1]/i.length;l.push(n.termResults(i,r,o,s,c,a))}))}return l.reduce(W.or,{})},e.prototype.combineResults=function(e,t){if(void 0===t&&(t="or"),0===e.length)return{};var n=t.toLowerCase();return e.reduce(W[n],null)||{}},e.prototype.toJSON=function(){return{index:this._index,documentCount:this._documentCount,nextId:this._nextId,documentIds:this._documentIds,fieldIds:this._fieldIds,fieldLength:this._fieldLength,averageFieldLength:this._averageFieldLength,storedFields:this._storedFields}},e.prototype.termResults=function(e,t,n,i,r,o){var u=this;return void 0===o&&(o=0),null==i?{}:Object.entries(t).reduce((function(t,r){var s=w(r,2),c=s[0],a=s[1],d=u._fieldIds[c],l=i[d]||{ds:{}},h=l.df,f=l.ds;return Object.entries(f).forEach((function(i){var r=w(i,2),s=r[0],l=r[1],f=n?n(u._documentIds[s],e):1;if(f){var p=u._fieldLength[s][d]/u._averageFieldLength[d];t[s]=t[s]||{score:0,match:{},terms:[]},t[s].terms.push(e),t[s].match[e]=M(t[s].match,e)||[],t[s].score+=f*J(l,h,u._documentCount,p,a,o),t[s].match[e].push(c)}})),t}),{})},e.prototype.addTerm=function(e,t,n){this._index.update(n,(function(n){var i,r=(n=n||{})[e]||{df:0,ds:{}};return null==r.ds[t]&&(r.df+=1),r.ds[t]=(r.ds[t]||0)+1,_(_({},n),((i={})[e]=r,i))}))},e.prototype.removeTerm=function(e,t,n){var i=this;this._index.has(n)?(this._index.update(n,(function(r){var o,u=r[e];if(null==u||null==u.ds[t])return i.warnDocumentChanged(t,e,n),r;if(u.ds[t]<=1){if(u.df<=1)return delete r[e],r;u.df-=1}return u.ds[t]<=1?(delete u.ds[t],r):(u.ds[t]-=1,_(_({},r),((o={})[e]=u,o)))})),0===Object.keys(this._index.get(n)).length&&this._index.delete(n)):this.warnDocumentChanged(t,e,n)},e.prototype.warnDocumentChanged=function(e,t,n){if(null!=console&&null!=console.warn){var i=Object.entries(this._fieldIds).find((function(e){var n=w(e,2);n[0];return n[1]===t}))[0];console.warn("MiniSearch: document with ID "+this._documentIds[e]+' has changed before removal: term "'+n+'" was not present in field "'+i+'". Removing a document after it has changed can corrupt the index!')}},e.prototype.addDocumentId=function(e){var t=this._nextId.toString(36);return this._documentIds[t]=e,this._documentCount+=1,this._nextId+=1,t},e.prototype.addFields=function(e){var t=this;e.forEach((function(e,n){t._fieldIds[e]=n}))},e.prototype.addFieldLength=function(e,t,n,i){this._averageFieldLength[t]=this._averageFieldLength[t]||0;var r=this._averageFieldLength[t]*n+i;this._fieldLength[e]=this._fieldLength[e]||{},this._fieldLength[e][t]=i,this._averageFieldLength[t]=r/(n+1)},e.prototype.saveStoredFields=function(e,t){var n=this,i=this._options,r=i.storeFields,o=i.extractField;null!=r&&0!==r.length&&(this._storedFields[e]=this._storedFields[e]||{},r.forEach((function(i){var r=o(t,i);void 0!==r&&(n._storedFields[e][i]=r)})))},e}(),M=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},W=((A={}).or=function(e,t){return Object.entries(t).reduce((function(e,t){var n,i=w(t,2),r=i[0],o=i[1],u=o.score,s=o.match,c=o.terms;return null==e[r]?e[r]={score:u,match:s,terms:c}:(e[r].score+=u,e[r].score*=1.5,(n=e[r].terms).push.apply(n,E(c)),Object.assign(e[r].match,s)),e}),e||{})},A.and=function(e,t){return null==e?t:Object.entries(t).reduce((function(t,n){var i=w(n,2),r=i[0],o=i[1],u=o.score,s=o.match,c=o.terms;return void 0===e[r]||(t[r]=t[r]||{},t[r].score=e[r].score+u,t[r].match=_(_({},e[r].match),s),t[r].terms=E(e[r].terms,c)),t}),{})},A),J=function(e,t,n,i,r,o){var u,s;return r/(1+.333*r*o)*(u=t,s=n,e*Math.log(s/u))/i},Q=function(e){return function(t,n,i){return{term:t,fuzzy:"function"===typeof e.fuzzy?e.fuzzy(t,n,i):e.fuzzy||!1,prefix:"function"===typeof e.prefix?e.prefix(t,n,i):!0===e.prefix}}},$=function(e){return e.filter((function(e,t,n){return n.indexOf(e)===t}))},K={idField:"id",extractField:function(e,t){return e[t]},tokenize:function(e,t){return e.split(U)},processTerm:function(e,t){return e.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[]},X={combineWith:"or",prefix:!1,fuzzy:!1,boost:{},weights:{fuzzy:.9,prefix:.75}},H={prefix:function(e,t,n){return t===n.length-1}},U=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,V=T,Y=!0;t.default=function(e){var t=e.categories,n=e.products,u=Object(o.useState)(""),d=u[0],l=u[1],h=Object(o.useState)(),f=h[0],v=h[1],m=Object(o.useState)([]),b=m[0],g=m[1],y=Object(o.useState)([]),_=y[0],O=y[1],w=Object(o.useState)({categories:[],priceRanges:[]}),E=w[0],A=w[1],k=Object(o.useState)(),z=k[0],S=k[1],C=f||n,N=E.categories.length>0?C.filter((function(e){return E.categories.find((function(t){var n;return t===(null===e||void 0===e||null===(n=e.category)||void 0===n?void 0:n._id)}))})):C,I=E.priceRanges.length>0?N.filter((function(e){return E.priceRanges.filter((function(t){return p.a[t].min<=e.price&&p.a[t].max>=e.price})).length>0})):N,D=z?I.sort((function(e,t){return"top-rated"===z||("high-low"===z?t.price-e.price:"low-high"!==z||e.price-t.price)})):I;return Object(o.useEffect)((function(){if(""!==d){var e=new V({fields:["name","price"],idField:"_id"});e.addAll(n);var t=e.search(d,{fuzzy:.2,prefix:!0});v(n.filter((function(e){return t.find((function(t){return e._id===t.id}))})))}else v(null)}),[d]),Object(r.jsxs)(o.Fragment,{children:[Object(r.jsxs)(s.a,{children:[Object(r.jsx)("title",{children:"Products"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsx)(c.a,{}),Object(r.jsx)("section",{className:"container",children:Object(r.jsx)("div",{className:"app-page-container",children:Object(r.jsxs)("div",{className:"product-grid-container",children:[Object(r.jsxs)("div",{className:"product-filter-container",children:[Object(r.jsx)("h3",{className:"filter-title",children:"Filters"}),Object(r.jsxs)("div",{className:"filter-block-list",children:[Object(r.jsxs)("div",{className:"accordion-block",children:[Object(r.jsxs)("div",{className:"accordion-heading",children:[Object(r.jsx)("span",{children:"Type"}),Object(r.jsx)(F,{})]}),Object(r.jsx)("div",{className:"accordion-content",children:t.map((function(e){return Object(r.jsx)("div",{className:"list-item",children:Object(r.jsxs)("label",{className:"checkbox-wrapper",children:[Object(r.jsx)("input",{type:"checkbox",className:"form-control",checked:b.includes(e._id),onChange:function(t){var n,r;n=t.target.checked,r=e._id,g(n?function(e){return[].concat(Object(i.a)(e),[r])}:b.filter((function(e){return e!==r})))}}),e.name]})},e._id)}))})]}),Object(r.jsxs)("div",{className:"accordion-block",children:[Object(r.jsxs)("div",{className:"accordion-heading",children:[Object(r.jsx)("span",{children:"Price Range"}),Object(r.jsx)(F,{})]}),Object(r.jsx)("div",{className:"accordion-content",children:p.a.map((function(e,t){return Object(r.jsx)("div",{className:"list-item",children:Object(r.jsxs)("label",{className:"checkbox-wrapper",children:[Object(r.jsx)("input",{type:"checkbox",className:"form-control",checked:_.includes(t),onChange:function(e){!function(e,t){O(e?function(e){return[].concat(Object(i.a)(e),[t])}:_.filter((function(e){return e!==t})))}(e.target.checked,t)}}),e.label]})},t)}))})]})]}),Object(r.jsxs)("div",{className:"filter-actions",children:[Object(r.jsx)("button",{className:"btn primary-outline-btn",onClick:function(){A({categories:[],priceRanges:[]}),g([]),O([])},children:"Reset"}),Object(r.jsx)("button",{className:"btn accent-btn",onClick:function(){A({categories:b,priceRanges:_})},children:"Apply"})]})]}),Object(r.jsxs)("div",{className:"product-list-container",children:[Object(r.jsxs)("div",{className:"product-list-heading",children:[Object(r.jsxs)("div",{className:"search-container",children:[Object(r.jsx)(x,{}),Object(r.jsx)("input",{type:"search",className:"form-control",placeholder:"Search",value:d,onChange:function(e){l(e.target.value)}})]}),Object(r.jsx)("div",{className:"filter-toggle",children:Object(r.jsx)("button",{className:"btn primary-outline-btn",children:"Filter"})}),Object(r.jsx)("div",{className:"select-container",children:Object(r.jsxs)("select",{className:"form-control",value:z,onChange:function(e){return S(e.target.value)},children:[Object(r.jsx)("option",{children:"Sort By"}),Object(r.jsx)("option",{value:"top-rated",children:"Top Rated"}),Object(r.jsx)("option",{value:"high-low",children:"Price: High to Low"}),Object(r.jsx)("option",{value:"low-high",children:"Price: Low to High"})]})})]}),Object(r.jsx)("div",{className:"product-block",children:D.map((function(e,t){return Object(r.jsx)(j,{data:e},t)}))})]})]})})}),Object(r.jsx)(a.a,{})]})}},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n.apply(this,arguments)}e.exports=n},pqrm:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return n("my7y")}])}},[["pqrm",1,2,0,3,4,5]]]);