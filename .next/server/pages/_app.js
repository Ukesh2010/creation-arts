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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({


/***/ "09Of":
/***/ (function(module, exports) {



/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("09Of");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("WWc9");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_component_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _products_products_component_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("yL/3");
/* harmony import */ var _products_products_component_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_products_products_component_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _product_detail_product_details_component_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4eXE");
/* harmony import */ var _product_detail_product_details_component_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_product_detail_product_details_component_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _profile_profile_component_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vd6T");
/* harmony import */ var _profile_profile_component_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_profile_profile_component_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _cart_cart_component_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("FJmU");
/* harmony import */ var _cart_cart_component_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_cart_cart_component_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _my_orders_my_orders_component_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("izVh");
/* harmony import */ var _my_orders_my_orders_component_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_my_orders_my_orders_component_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("TJRf");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("8Bbg");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_serverSideStorage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("4A05");
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("crtY");
/* harmony import */ var _utils_JWTValidator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("5N38");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("C1xe");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("hI02");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_15__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const tagManagerArgs = {
  gtmId: 'GTM-W33J9RJ'
};

const MyApp = ({
  Component,
  pageProps
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    react_gtm_module__WEBPACK_IMPORTED_MODULE_15___default.a.initialize(tagManagerArgs);
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_toast_notifications__WEBPACK_IMPORTED_MODULE_14__["ToastProvider"], {
    placement: "bottom-center",
    autoDismiss: true,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, _objectSpread({}, pageProps))
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

MyApp.getInitialProps = async appContext => {
  const {
    ctx
  } = appContext;
  const token = Object(_utils_serverSideStorage__WEBPACK_IMPORTED_MODULE_11__[/* getServerSideCookie */ "a"])(ctx)("token");
  const authenticated = token && Object(_utils_JWTValidator__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(token);
  const NoAuthPages = ["/login"];
  const AuthPages = ["/checkout", "/change-password"];

  if (NoAuthPages.includes(ctx.pathname)) {
    if (authenticated) {
      ctx.res.writeHead(302, {
        Location: "/"
      });
      ctx.res.end();
      return {};
    }
  }

  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_10___default.a.getInitialProps(appContext);
  return _objectSpread({}, appProps);
};

/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4A05":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getServerSideCookie; });
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3i/4");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_0__);

const getServerSideCookie = context => key => {
  return next_cookies__WEBPACK_IMPORTED_MODULE_0___default()(context)[key];
};

/***/ }),

/***/ "4eXE":
/***/ (function(module, exports) {



/***/ }),

/***/ "5N38":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tMJi");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (token => {
  if (token) {
    const data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.decode(token);

    if (!Boolean(data)) {
      return false;
    }

    const expDate = new Date(data.exp * 1000);
    const currentDate = new Date();
    return expDate - currentDate > 0;
  }

  return false;
});

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


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

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "C1xe":
/***/ (function(module, exports) {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FJmU":
/***/ (function(module, exports) {



/***/ }),

/***/ "TJRf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useCartState; });
/* unused harmony export useCartDispatchContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCartActions; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8WVE");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const CartStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const CartDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const ID_KEY = "_id";

const calculateTotal = (items, key = "total_amount") => {
  if (items.length === 0) return 0;
  return items.map(item => item[key]).reduce((t, i) => t + i, 0);
};

const CartProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])((state, action) => {
    switch (action.type) {
      case "ADD_CART_ITEM":
        if (!state.items.find(item => item[ID_KEY] === action.payload.item[ID_KEY])) state.items.push(action.payload.item);
        break;

      case "UPDATE_CART_ITEM":
        state.items = state.items.map(item => {
          if (item[ID_KEY] === action.payload.id) return _objectSpread(_objectSpread({}, item), action.payload.item);
          return item;
        });
        break;

      case "REMOVE_CART_ITEM":
        state.items = state.items.filter(item => item[ID_KEY] !== action.payload.id);
        break;

      case "SET_SHIPPING_ADDRESS_ID":
        state.shipping_address_id = action.payload.shipping_address_id;
        break;

      case "CLEAR_CART":
        state.items = [];
        state.shipping_address_id = null;
        break;

      default:
        throw new Error("undefined action type used");
    }

    state.total_amount = calculateTotal(state.items, "total_amount");
    Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* setItem */ "c"])("cart", JSON.stringify(state));
    return _objectSpread(_objectSpread({}, state), {}, {
      items: [...state.items]
    });
  }, JSON.parse(Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* getItem */ "a"])("cart") || null) || {
    items: [],
    total_amount: 0,
    shipping_address_id: null
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CartStateContext.Provider, {
    value: state,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CartDispatchContext.Provider, {
      value: dispatch,
      children: children
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (CartProvider);
const useCartState = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(CartStateContext);

  if (context === undefined) {
    throw new Error("useCartStateContext must be used within a CartProvider");
  }

  return context;
};
const useCartDispatchContext = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(CartDispatchContext);

  if (context === undefined) {
    throw new Error("useCartDispatchContext must be used within a CartProvider");
  }

  return context;
};
const useCartActions = () => {
  const state = useCartState();
  const dispatch = useCartDispatchContext();

  const findItem = id => state.items.find(item => item[ID_KEY] === id);

  const countItem = () => state.items.length;

  const addItem = item => {
    dispatch({
      type: "ADD_CART_ITEM",
      payload: {
        item
      }
    });
  };

  const updateItem = (id, item) => {
    dispatch({
      type: "UPDATE_CART_ITEM",
      payload: {
        id,
        item
      }
    });
  };

  const removeItem = id => {
    dispatch({
      type: "REMOVE_CART_ITEM",
      payload: {
        id
      }
    });
  };

  const setShippingAddressId = id => {
    dispatch({
      type: "SET_SHIPPING_ADDRESS_ID",
      payload: {
        shipping_address_id: id
      }
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
      payload: null
    });
  };

  return {
    findItem,
    countItem,
    addItem,
    updateItem,
    removeItem,
    setShippingAddressId,
    clearCart
  };
};

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

/***/ "WWc9":
/***/ (function(module, exports) {



/***/ }),


/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "crtY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useAuthContext */
/* unused harmony export useAuthDispatch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAuth; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8WVE");
/* harmony import */ var _utils_JWTValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5N38");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const AuthStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const AuthDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

const AuthProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])((state, action) => {
    switch (action.type) {
      case "LOGIN":
        Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* setItem */ "c"])("token", action.payload.token);
        return _objectSpread(_objectSpread({}, state), {}, {
          authenticated: true
        });

      case "LOGOUT":
        Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* removeItem */ "b"])("token");
        return {
          authenticated: false
        };

      default:
        throw new Error("undefined action type used");
    }
  }, {
    authenticated: !!Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* getItem */ "a"])("token") && Object(_utils_JWTValidator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[/* getItem */ "a"])("token"))
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AuthStateContext.Provider, {
    value: state,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AuthDispatchContext.Provider, {
      value: dispatch,
      children: children
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (AuthProvider);
const useAuthContext = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AuthStateContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }

  return context;
};
const useAuthDispatch = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AuthDispatchContext);

  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
};
const useAuth = () => {
  const authContext = useAuthContext();
  const authDispatch = useAuthDispatch();

  const login = token => {
    authDispatch({
      type: "LOGIN",
      payload: {
        token
      }
    });
  };

  const logout = () => {
    authDispatch({
      type: "LOGOUT",
      payload: null
    });
  };

  return {
    authenticated: authContext.authenticated,
    login,
    logout
  };
};

/***/ }),

/***/ "hI02":
/***/ (function(module, exports) {

module.exports = require("react-gtm-module");

/***/ }),

/***/ "izVh":
/***/ (function(module, exports) {



/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "vd6T":
/***/ (function(module, exports) {



/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "yL/3":
/***/ (function(module, exports) {



/***/ })

/******/ });