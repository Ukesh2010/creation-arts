_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"1v5r":function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/change-password",function(){return s("Fbh+")}])},"Fbh+":function(e,r,s){"use strict";s.r(r);var t=s("o0o1"),n=s.n(t),a=s("rePB"),c=s("HaE+"),o=s("nKUr"),i=s("q1tI"),l=s("8Kt/"),d=s.n(l),j=s("KYPV"),p=s("UGp+"),u=s("bMwp"),b=s("nOHt"),h=s("crtY"),O=s("MbLX");function w(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function m(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?w(Object(s),!0).forEach((function(r){Object(a.a)(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):w(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}var f=p.a().shape({old_password:p.c().min(8).max(16).required(),password:p.c().min(8).max(16).required(),password2:p.c().oneOf([p.b("password")],"should match with password").required("password confirmation is a required field")});r.default=function(){var e=Object(b.useRouter)(),r=Object(h.b)(),s=r.authenticated,t=r.logout,a=function(){var r=Object(c.a)(n.a.mark((function r(s,a){var c,o,i;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=a.setSubmitting,o=a.setErrors,c(!0),r.prev=2,r.next=5,Object(u.b)(s);case 5:t(),e.push("/login"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),r.t0.errors?o(null===r.t0||void 0===r.t0||null===(i=r.t0.errors)||void 0===i?void 0:i.reduce((function(e,r){return m(m({},e),r)}),{})):console.log("error",r.t0.message);case 12:return r.prev=12,c(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[2,9,12,15]])})));return function(e,s){return r.apply(this,arguments)}}();return s?Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)(d.a,{children:[Object(o.jsx)("title",{children:"Change password"}),Object(o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(o.jsx)(O.a,{}),Object(o.jsx)("section",{className:"container",children:Object(o.jsx)("div",{className:"app-page-container",children:Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(o.jsx)("div",{className:"auth-card",children:Object(o.jsx)(j.a,{initialValues:{old_password:"",password:"",password2:""},validationSchema:f,onSubmit:a,children:function(e){var r=e.values,s=e.errors,t=e.touched,n=e.handleChange,a=e.handleBlur,c=e.handleSubmit,i=e.isSubmitting,l=e.isValid;return Object(o.jsxs)("form",{onSubmit:c,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"password",children:"Old password"}),Object(o.jsx)("input",{type:"password",className:"form-control",name:"old_password",value:r.old_password,onChange:n,onBlur:a}),s.old_password&&t.old_password&&Object(o.jsx)("span",{className:"error-message",children:s.old_password})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"password",children:"Password"}),Object(o.jsx)("input",{type:"password",className:"form-control",name:"password",value:r.password,onChange:n,onBlur:a}),s.password&&t.password&&Object(o.jsx)("span",{className:"error-message",children:s.password})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"rePassword",children:"Password confirmation"}),Object(o.jsx)("input",{type:"password",className:"form-control",name:"password2",value:r.password2,onChange:n,onBlur:a}),s.password2&&t.password2&&Object(o.jsx)("span",{className:"error-message",children:s.password2})]}),Object(o.jsx)("button",{className:"btn accent-btn",disabled:i||!l,children:"Change password"})]})}})})})})})]}):Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)(d.a,{children:[Object(o.jsx)("title",{children:"Checkout"}),Object(o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(o.jsx)(O.a,{}),Object(o.jsx)("section",{className:"container",children:Object(o.jsx)("div",{className:"app-page-container",children:Object(o.jsxs)("div",{className:"info-container",children:[Object(o.jsx)("div",{className:"login-required"}),Object(o.jsx)("h3",{className:"text-center",children:"Please login to continue."})]})})})]})}}},[["1v5r",1,2,0,3,4,5,6,7]]]);