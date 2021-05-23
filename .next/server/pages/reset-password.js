module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bAh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Aiso");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("C8TP");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("bMwp");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("46kV");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("C1xe");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_9__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const ResetPasswordSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
  password: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().min(8).max(16).required(),
  password2: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_5__["ref"]("password")], "should match with password").required("password confirmation is a required field")
});

const ResetPassword = ({
  token
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_9__["useToasts"])();

  const onSubmit = async (values, {
    setSubmitting,
    setErrors
  }) => {
    setSubmitting(true);

    try {
      await Object(_api__WEBPACK_IMPORTED_MODULE_6__[/* resetPassword */ "m"])(_objectSpread(_objectSpread({}, values), {}, {
        token: token
      }));
      router.push("/login");
      addToast("Password reset successfully", {
        appearance: "success"
      });
    } catch (response) {
      if (response.errors) {
        var _response$errors;

        setErrors(response === null || response === void 0 ? void 0 : (_response$errors = response.errors) === null || _response$errors === void 0 ? void 0 : _response$errors.reduce((p, c) => _objectSpread(_objectSpread({}, p), c), {}));
      } else {
        addToast((response === null || response === void 0 ? void 0 : response.message) || "Error while logging in.", {
          appearance: "error"
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: "Reset password"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
      className: "auth-container",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "auth-card",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "left-container",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "/images/product2.jpg",
            alt: "Picture of the author",
            layout: "fill"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "right-container",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "info-block",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              children: "This link is valid only for 24hrs."
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
            initialValues: {
              password: "",
              password2: ""
            },
            validationSchema: ResetPasswordSchema,
            onSubmit: onSubmit,
            children: ({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              isValid
            }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
              onSubmit: handleSubmit,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "form-group",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                  htmlFor: "password",
                  children: "Password"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                  type: "password",
                  className: "form-control",
                  name: "password",
                  value: values.password,
                  onChange: handleChange,
                  onBlur: handleBlur
                }), errors.password && touched.password && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                  className: "error-message",
                  children: errors.password
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "form-group",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                  htmlFor: "rePassword",
                  children: "Password confirmation"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                  type: "password",
                  className: "form-control",
                  name: "password2",
                  value: values.password2,
                  onChange: handleChange,
                  onBlur: handleBlur
                }), errors.password2 && touched.password2 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                  className: "error-message",
                  children: errors.password2
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", {
                className: "btn accent-btn",
                disabled: isSubmitting,
                children: ["Reset password", " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_spinners__WEBPACK_IMPORTED_MODULE_8__["PulseLoader"], {
                  loading: isSubmitting,
                  size: 4
                })]
              })]
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ResetPassword);
const getServerSideProps = async ctx => {
  return {
    props: {
      token: ctx.query.token || null
    }
  };
};

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0bAh");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "46kV":
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "8WVE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeItem; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const setItem = (key, value) => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(key, value);
};
const getItem = key => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);
};
const removeItem = key => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(key);
};

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "C1xe":
/***/ (function(module, exports) {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "bMwp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ getCategories; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ getProducts; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ getProductDetail; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ createPayPalTransaction; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ captureOrder; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ getOrders; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ login; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ forgotPassword; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* binding */ register; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* binding */ resetPassword; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ changePassword; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ getUser; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* binding */ updateUser; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ getSetting; });

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./api/httpClient.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const config = {
  baseURL: "https://creation-arts-api.herokuapp.com/" + "api/",
  timeout: "60000"
};
/* harmony default export */ var httpClient = (axiosConfig => external_axios_default.a.create(_objectSpread(_objectSpread({}, config), axiosConfig)));
// CONCATENATED MODULE: ./utils/convertJsonToFormData.js
/* harmony default export */ var convertJsonToFormData = (data => {
  const formData = new FormData();

  for (let key in data) {
    if (Array.isArray(data[key])) {
      for (let i = 0; i < data[key].length; i++) {
        formData.append(`${key}[${i}]`, data[key][i]);
      }
    } else {
      formData.append(key, data[key]);
    }
  }

  return formData;
});
// EXTERNAL MODULE: ./utils/localStorage.js
var localStorage = __webpack_require__("8WVE");

// CONCATENATED MODULE: ./api/index.js




const getHttpClient = (token = Object(localStorage["a" /* getItem */])("token"), isMultipartRequest = false, validateStatus = false) => {
  const axiosConfig = {
    transformRequest: [(data, headers) => {
      headers["Accept"] = "application/json";

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      if (isMultipartRequest) {
        headers["Content-Type"] = "multipart/form-data";
        return convertJsonToFormData(data);
      }

      headers["Content-Type"] = "application/json";
      return JSON.stringify(data);
    }]
  };

  if (validateStatus) {
    axiosConfig.validateStatus = function (status) {
      if (status === 401) {
        Object(localStorage["b" /* removeItem */])("token");
        Object(localStorage["b" /* removeItem */])("cart");
        window.location.reload();
      }

      return status >= 200 && status < 300;
    };
  }

  return httpClient(axiosConfig);
};

const getCategories = token => async params => {
  return await getHttpClient(token).get("/categories", {
    params
  }).then(response => response.data);
};
const getProducts = token => async params => {
  return await getHttpClient(token).get("/products", {
    params
  }).then(response => response.data);
};
const getProductDetail = token => async id => {
  return await getHttpClient(token).get(`/products/${id}`).then(response => response.data);
};
const createPayPalTransaction = () => async (data) => await getHttpClient(Object(localStorage["a" /* getItem */])("token")).post(`/orders/create-paypal-transaction`, data).then(response => response.data);
const captureOrder = () => async data => {
  const response = await getHttpClient(Object(localStorage["a" /* getItem */])("token")).post(`/orders/capture-order`, data);
  return response.data;
};
const getOrders = token => async params => {
  return await getHttpClient(token).get("/orders", {
    params
  }).then(response => response.data).catch(e => {
    var _e$response;

    throw (e === null || e === void 0 ? void 0 : (_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.data) || e;
  });
};
const login = async data => {
  return await getHttpClient().post(`/users/login`, data).then(response => response.data).catch(e => {
    var _e$response2;

    throw (e === null || e === void 0 ? void 0 : (_e$response2 = e.response) === null || _e$response2 === void 0 ? void 0 : _e$response2.data) || e;
  });
};
const forgotPassword = async data => {
  return await getHttpClient().post(`/users/forgot-password`, data).then(response => response.data).catch(e => {
    var _e$response3;

    throw (e === null || e === void 0 ? void 0 : (_e$response3 = e.response) === null || _e$response3 === void 0 ? void 0 : _e$response3.data) || e;
  });
};
const register = async data => {
  return await getHttpClient().post(`/users/register`, data).then(response => response.data).catch(e => {
    var _e$response4;

    throw (e === null || e === void 0 ? void 0 : (_e$response4 = e.response) === null || _e$response4 === void 0 ? void 0 : _e$response4.data) || e;
  });
};
const resetPassword = async data => {
  return await getHttpClient().post(`/users/reset-password`, data).then(response => response.data).catch(e => {
    var _e$response5;

    throw (e === null || e === void 0 ? void 0 : (_e$response5 = e.response) === null || _e$response5 === void 0 ? void 0 : _e$response5.data) || e;
  });
};
const changePassword = async data => {
  return await getHttpClient(Object(localStorage["a" /* getItem */])("token")).post(`/users/change-password`, data).then(response => response.data).catch(e => {
    var _e$response6;

    throw (e === null || e === void 0 ? void 0 : (_e$response6 = e.response) === null || _e$response6 === void 0 ? void 0 : _e$response6.data) || e;
  });
};
const getUser = token => async params => {
  return await getHttpClient(token).get("/users/current", {
    params
  }).then(response => response.data);
};
const updateUser = async data => {
  return await getHttpClient().put(`/users/current`, data).then(response => response.data).catch(e => {
    var _e$response7;

    throw (e === null || e === void 0 ? void 0 : (_e$response7 = e.response) === null || _e$response7 === void 0 ? void 0 : _e$response7.data) || e;
  });
};
const getSetting = token => async () => {
  return await getHttpClient(token).get("/setting").then(response => response.data.data);
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const imageData = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"};
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = imageData; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);
let cachedObserver;

function getObserver() {
  const IntersectionObserver = false ? undefined : null; // Return shared instance of IntersectionObserver if already created

  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;
        unLazifyImage(lazyImage);
        cachedObserver.unobserve(lazyImage);
      }
    });
  }, {
    rootMargin: '200px'
  });
}

function unLazifyImage(lazyImage) {
  if (lazyImage.dataset.src) {
    lazyImage.src = lazyImage.dataset.src;
  }

  if (lazyImage.dataset.srcset) {
    lazyImage.srcset = lazyImage.dataset.srcset;
  }

  lazyImage.style.visibility = 'visible';
  lazyImage.classList.remove('__lazy');
}

function getSizes(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      sizes: configDeviceSizes,
      kind: 'w'
    };
  }

  const sizes = [...new Set([width, width * 2, width * 3].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    sizes,
    kind: 'x'
  };
}

function computeSrc(src, unoptimized, layout, width, quality) {
  if (unoptimized) {
    return src;
  }

  const {
    sizes
  } = getSizes(width, layout);
  const largest = sizes[sizes.length - 1];
  return callLoader({
    src,
    width: largest,
    quality
  });
}

function callLoader(loaderProps) {
  const load = loaders.get(configLoader) || defaultLoader;
  return load((0, _extends2.default)({
    root: configPath
  }, loaderProps));
}

function generateSrcSet({
  src,
  unoptimized,
  layout,
  width,
  quality
}) {
  // At each breakpoint, generate an image url using the loader, such as:
  // ' www.example.com/foo.jpg?w=480 480w, '
  if (unoptimized) {
    return undefined;
  }

  const {
    sizes,
    kind
  } = getSizes(width, layout);
  return sizes.map((size, i) => `${callLoader({
    src,
    width: size,
    quality
  })} ${kind === 'w' ? size : i + 1}${kind}`).join(', ');
}

function generatePreload({
  src,
  unoptimized = false,
  layout,
  width,
  sizes,
  quality
}) {
  // This function generates an image preload that makes use of the "imagesrcset" and "imagesizes"
  // attributes for preloading responsive images. They're still experimental, but fully backward
  // compatible, as the link tag includes all necessary attributes, even if the final two are ignored.
  // See: https://web.dev/preload-responsive-images/
  return /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    rel: "preload",
    as: "image",
    href: computeSrc(src, unoptimized, layout, width, quality) // @ts-ignore: imagesrcset and imagesizes not yet in the link element type
    ,
    imagesrcset: generateSrcSet({
      src,
      unoptimized,
      layout,
      width,
      quality
    }),
    imagesizes: sizes
  }));
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height"]);
  const thisEl = (0, _react.useRef)(null);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let lazy = loading === 'lazy';

  if (!priority && typeof loading === 'undefined') {
    lazy = true;
  }

  if (false) {}

  (0, _react.useEffect)(() => {
    const target = thisEl.current;

    if (target && lazy) {
      const observer = getObserver();

      if (observer) {
        observer.observe(target);
        return () => {
          observer.unobserve(target);
        };
      } else {
        //browsers without intersection observer
        unLazifyImage(target);
      }
    }
  }, [thisEl, lazy]);
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: lazy ? 'hidden' : 'visible',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%'
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  } // Generate attribute values


  const imgSrc = computeSrc(src, unoptimized, layout, widthInt, qualityInt);
  const imgSrcSet = generateSrcSet({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt
  });
  let imgAttributes;

  if (!lazy) {
    imgAttributes = {
      src: imgSrc
    };

    if (imgSrcSet) {
      imgAttributes.srcSet = imgSrcSet;
    }
  } else {
    imgAttributes = {
      'data-src': imgSrc
    };

    if (imgSrcSet) {
      imgAttributes['data-srcset'] = imgSrcSet;
    }

    className = className ? className + ' __lazy' : '__lazy';
  } // No need to add preloads on the client side--by the time the application is hydrated,
  // it's too late for preloads


  const shouldPreload = priority && true;

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, shouldPreload ? generatePreload({
    src,
    layout,
    unoptimized,
    width: widthInt,
    sizes,
    quality: qualityInt
  }) : null, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block'
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;charset=utf-8,${sizerSvg}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    sizes: sizes,
    ref: thisEl,
    style: imgStyle
  })));
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width];
  let paramsString = '';

  if (quality) {
    params.push('q_' + quality);
  }

  if (params.length) {
    paramsString = params.join(',') + '/';
  }

  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });