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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./contexts/AuthContext.js":
/*!*********************************!*\
  !*** ./contexts/AuthContext.js ***!
  \*********************************/
/*! exports provided: default, useAuthContext, useAuthDispatch, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuthContext\", function() { return useAuthContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuthDispatch\", function() { return useAuthDispatch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/localStorage */ \"./utils/localStorage.js\");\n/* harmony import */ var _utils_JWTValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/JWTValidator */ \"./utils/JWTValidator.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst AuthStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nconst AuthDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\n\nconst AuthProvider = ({\n  children\n}) => {\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])((state, action) => {\n    switch (action.type) {\n      case \"LOGIN\":\n        Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"setItem\"])(\"token\", action.payload.token);\n        return _objectSpread(_objectSpread({}, state), {}, {\n          authenticated: true\n        });\n\n      case \"LOGOUT\":\n        Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"removeItem\"])(\"token\");\n        return {\n          authenticated: false\n        };\n\n      default:\n        throw new Error(\"undefined action type used\");\n    }\n  }, {\n    authenticated: !!Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"getItem\"])(\"token\") && Object(_utils_JWTValidator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"getItem\"])(\"token\"))\n  });\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(AuthStateContext.Provider, {\n    value: state,\n    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(AuthDispatchContext.Provider, {\n      value: dispatch,\n      children: children\n    })\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthProvider);\nconst useAuthContext = () => {\n  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(AuthStateContext);\n\n  if (context === undefined) {\n    throw new Error(\"useAuthContext must be used within a AuthProvider\");\n  }\n\n  return context;\n};\nconst useAuthDispatch = () => {\n  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(AuthDispatchContext);\n\n  if (context === undefined) {\n    throw new Error(\"useAuthDispatch must be used within a AuthProvider\");\n  }\n\n  return context;\n};\nconst useAuth = () => {\n  const authContext = useAuthContext();\n  const authDispatch = useAuthDispatch();\n\n  const login = token => {\n    authDispatch({\n      type: \"LOGIN\",\n      payload: {\n        token\n      }\n    });\n  };\n\n  const logout = () => {\n    authDispatch({\n      type: \"LOGOUT\",\n      payload: null\n    });\n  };\n\n  return {\n    authenticated: authContext.authenticated,\n    login,\n    logout\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9BdXRoQ29udGV4dC5qcz83MmJiIl0sIm5hbWVzIjpbIkF1dGhTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aERpc3BhdGNoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwic2V0SXRlbSIsInBheWxvYWQiLCJ0b2tlbiIsImF1dGhlbnRpY2F0ZWQiLCJyZW1vdmVJdGVtIiwiRXJyb3IiLCJnZXRJdGVtIiwiSldUVmFsaWRhdG9yIiwidXNlQXV0aENvbnRleHQiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVuZGVmaW5lZCIsInVzZUF1dGhEaXNwYXRjaCIsInVzZUF1dGgiLCJhdXRoQ29udGV4dCIsImF1dGhEaXNwYXRjaCIsImxvZ2luIiwibG9nb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxnQkFBZ0IsZ0JBQUdDLDJEQUFhLEVBQXRDO0FBQ0EsTUFBTUMsbUJBQW1CLGdCQUFHRCwyREFBYSxFQUF6Qzs7QUFFQSxNQUFNRSxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDckMsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyx3REFBVSxDQUNsQyxDQUFDRixLQUFELEVBQVFHLE1BQVIsS0FBbUI7QUFDakIsWUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsV0FBSyxPQUFMO0FBQ0VDLDJFQUFPLENBQUMsT0FBRCxFQUFVRixNQUFNLENBQUNHLE9BQVAsQ0FBZUMsS0FBekIsQ0FBUDtBQUNBLCtDQUFZUCxLQUFaO0FBQW1CUSx1QkFBYSxFQUFFO0FBQWxDOztBQUNGLFdBQUssUUFBTDtBQUNFQyw4RUFBVSxDQUFDLE9BQUQsQ0FBVjtBQUNBLGVBQU87QUFBRUQsdUJBQWEsRUFBRTtBQUFqQixTQUFQOztBQUNGO0FBQ0UsY0FBTSxJQUFJRSxLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQVJKO0FBVUQsR0FaaUMsRUFhbEM7QUFBRUYsaUJBQWEsRUFBRSxDQUFDLENBQUNHLG1FQUFPLENBQUMsT0FBRCxDQUFULElBQXNCQyxtRUFBWSxDQUFDRCxtRUFBTyxDQUFDLE9BQUQsQ0FBUjtBQUFuRCxHQWJrQyxDQUFwQztBQWdCQSxzQkFDRSw4REFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUEyQixTQUFLLEVBQUVYLEtBQWxDO0FBQUEsMkJBQ0UsOERBQUMsbUJBQUQsQ0FBcUIsUUFBckI7QUFBOEIsV0FBSyxFQUFFQyxRQUFyQztBQUFBLGdCQUNHRjtBQURIO0FBREYsSUFERjtBQU9ELENBeEJEOztBQTBCZUQsMkVBQWY7QUFFTyxNQUFNZSxjQUFjLEdBQUcsTUFBTTtBQUNsQyxRQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUNwQixnQkFBRCxDQUExQjs7QUFDQSxNQUFJbUIsT0FBTyxLQUFLRSxTQUFoQixFQUEyQjtBQUN6QixVQUFNLElBQUlOLEtBQUosQ0FBVSxtREFBVixDQUFOO0FBQ0Q7O0FBQ0QsU0FBT0ksT0FBUDtBQUNELENBTk07QUFRQSxNQUFNRyxlQUFlLEdBQUcsTUFBTTtBQUNuQyxRQUFNSCxPQUFPLEdBQUdDLHdEQUFVLENBQUNsQixtQkFBRCxDQUExQjs7QUFDQSxNQUFJaUIsT0FBTyxLQUFLRSxTQUFoQixFQUEyQjtBQUN6QixVQUFNLElBQUlOLEtBQUosQ0FBVSxvREFBVixDQUFOO0FBQ0Q7O0FBQ0QsU0FBT0ksT0FBUDtBQUNELENBTk07QUFRQSxNQUFNSSxPQUFPLEdBQUcsTUFBTTtBQUMzQixRQUFNQyxXQUFXLEdBQUdOLGNBQWMsRUFBbEM7QUFDQSxRQUFNTyxZQUFZLEdBQUdILGVBQWUsRUFBcEM7O0FBRUEsUUFBTUksS0FBSyxHQUFJZCxLQUFELElBQVc7QUFDdkJhLGdCQUFZLENBQUM7QUFBRWhCLFVBQUksRUFBRSxPQUFSO0FBQWlCRSxhQUFPLEVBQUU7QUFBRUM7QUFBRjtBQUExQixLQUFELENBQVo7QUFDRCxHQUZEOztBQUdBLFFBQU1lLE1BQU0sR0FBRyxNQUFNO0FBQ25CRixnQkFBWSxDQUFDO0FBQUVoQixVQUFJLEVBQUUsUUFBUjtBQUFrQkUsYUFBTyxFQUFFO0FBQTNCLEtBQUQsQ0FBWjtBQUNELEdBRkQ7O0FBSUEsU0FBTztBQUFFRSxpQkFBYSxFQUFFVyxXQUFXLENBQUNYLGFBQTdCO0FBQTRDYSxTQUE1QztBQUFtREM7QUFBbkQsR0FBUDtBQUNELENBWk0iLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRJdGVtLCByZW1vdmVJdGVtLCBzZXRJdGVtIH0gZnJvbSBcIi4uL3V0aWxzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IEpXVFZhbGlkYXRvciBmcm9tIFwiLi4vdXRpbHMvSldUVmFsaWRhdG9yXCI7XG5cbmNvbnN0IEF1dGhTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5jb25zdCBBdXRoRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcbiAgICAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiTE9HSU5cIjpcbiAgICAgICAgICBzZXRJdGVtKFwidG9rZW5cIiwgYWN0aW9uLnBheWxvYWQudG9rZW4pO1xuICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhdXRoZW50aWNhdGVkOiB0cnVlIH07XG4gICAgICAgIGNhc2UgXCJMT0dPVVRcIjpcbiAgICAgICAgICByZW1vdmVJdGVtKFwidG9rZW5cIik7XG4gICAgICAgICAgcmV0dXJuIHsgYXV0aGVudGljYXRlZDogZmFsc2UgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmRlZmluZWQgYWN0aW9uIHR5cGUgdXNlZFwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHsgYXV0aGVudGljYXRlZDogISFnZXRJdGVtKFwidG9rZW5cIikgJiYgSldUVmFsaWRhdG9yKGdldEl0ZW0oXCJ0b2tlblwiKSkgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICAgIDxBdXRoRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQXV0aERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L0F1dGhTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoUHJvdmlkZXI7XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoQ29udGV4dCA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aFN0YXRlQ29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VBdXRoQ29udGV4dCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQXV0aFByb3ZpZGVyXCIpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGhEaXNwYXRjaCA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aERpc3BhdGNoQ29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VBdXRoRGlzcGF0Y2ggbXVzdCBiZSB1c2VkIHdpdGhpbiBhIEF1dGhQcm92aWRlclwiKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICBjb25zdCBhdXRoQ29udGV4dCA9IHVzZUF1dGhDb250ZXh0KCk7XG4gIGNvbnN0IGF1dGhEaXNwYXRjaCA9IHVzZUF1dGhEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGxvZ2luID0gKHRva2VuKSA9PiB7XG4gICAgYXV0aERpc3BhdGNoKHsgdHlwZTogXCJMT0dJTlwiLCBwYXlsb2FkOiB7IHRva2VuIH0gfSk7XG4gIH07XG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBhdXRoRGlzcGF0Y2goeyB0eXBlOiBcIkxPR09VVFwiLCBwYXlsb2FkOiBudWxsIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGF1dGhlbnRpY2F0ZWQ6IGF1dGhDb250ZXh0LmF1dGhlbnRpY2F0ZWQsIGxvZ2luLCBsb2dvdXQgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/AuthContext.js\n");

/***/ }),

/***/ "./contexts/CartContext.js":
/*!*********************************!*\
  !*** ./contexts/CartContext.js ***!
  \*********************************/
/*! exports provided: default, useCartState, useCartDispatchContext, useCartActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCartState\", function() { return useCartState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCartDispatchContext\", function() { return useCartDispatchContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCartActions\", function() { return useCartActions; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/localStorage */ \"./utils/localStorage.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst CartStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nconst CartDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nconst ID_KEY = \"_id\";\n\nconst calculateTotal = (items, key = \"total_amount\") => {\n  if (items.length === 0) return 0;\n  return items.map(item => item[key]).reduce((t, i) => t + i, 0);\n};\n\nconst CartProvider = ({\n  children\n}) => {\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])((state, action) => {\n    switch (action.type) {\n      case \"ADD_CART_ITEM\":\n        if (!state.items.find(item => item[ID_KEY] === action.payload.item[ID_KEY])) state.items.push(action.payload.item);\n        break;\n\n      case \"UPDATE_CART_ITEM\":\n        state.items = state.items.map(item => {\n          if (item[ID_KEY] === action.payload.id) return _objectSpread(_objectSpread({}, item), action.payload.item);\n          return item;\n        });\n        break;\n\n      case \"REMOVE_CART_ITEM\":\n        state.items = state.items.filter(item => item[ID_KEY] !== action.payload.id);\n        break;\n\n      case \"SET_SHIPPING_ADDRESS_ID\":\n        state.shipping_address_id = action.payload.shipping_address_id;\n        break;\n\n      case \"CLEAR_CART\":\n        state.items = [];\n        state.shipping_address_id = null;\n        break;\n\n      default:\n        throw new Error(\"undefined action type used\");\n    }\n\n    state.total_amount = calculateTotal(state.items, \"total_amount\");\n    Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_3__[\"setItem\"])(\"cart\", JSON.stringify(state));\n    return _objectSpread(_objectSpread({}, state), {}, {\n      items: [...state.items]\n    });\n  }, JSON.parse(Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_3__[\"getItem\"])(\"cart\") || null) || {\n    items: [],\n    total_amount: 0,\n    shipping_address_id: null\n  });\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(CartStateContext.Provider, {\n    value: state,\n    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(CartDispatchContext.Provider, {\n      value: dispatch,\n      children: children\n    })\n  });\n};\n\nCartProvider.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartProvider);\nconst useCartState = () => {\n  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(CartStateContext);\n\n  if (context === undefined) {\n    throw new Error(\"useCartStateContext must be used within a CartProvider\");\n  }\n\n  return context;\n};\nconst useCartDispatchContext = () => {\n  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(CartDispatchContext);\n\n  if (context === undefined) {\n    throw new Error(\"useCartDispatchContext must be used within a CartProvider\");\n  }\n\n  return context;\n};\nconst useCartActions = () => {\n  const state = useCartState();\n  const dispatch = useCartDispatchContext();\n\n  const findItem = id => state.items.find(item => item[ID_KEY] === id);\n\n  const countItem = () => state.items.length;\n\n  const addItem = item => {\n    dispatch({\n      type: \"ADD_CART_ITEM\",\n      payload: {\n        item\n      }\n    });\n  };\n\n  const updateItem = (id, item) => {\n    dispatch({\n      type: \"UPDATE_CART_ITEM\",\n      payload: {\n        id,\n        item\n      }\n    });\n  };\n\n  const removeItem = id => {\n    dispatch({\n      type: \"REMOVE_CART_ITEM\",\n      payload: {\n        id\n      }\n    });\n  };\n\n  const setShippingAddressId = id => {\n    dispatch({\n      type: \"SET_SHIPPING_ADDRESS_ID\",\n      payload: {\n        shipping_address_id: id\n      }\n    });\n  };\n\n  const clearCart = () => {\n    dispatch({\n      type: \"CLEAR_CART\",\n      payload: null\n    });\n  };\n\n  return {\n    findItem,\n    countItem,\n    addItem,\n    updateItem,\n    removeItem,\n    setShippingAddressId,\n    clearCart\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9DYXJ0Q29udGV4dC5qcz80Yzk0Il0sIm5hbWVzIjpbIkNhcnRTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2FydERpc3BhdGNoQ29udGV4dCIsIklEX0tFWSIsImNhbGN1bGF0ZVRvdGFsIiwiaXRlbXMiLCJrZXkiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwicmVkdWNlIiwidCIsImkiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsImZpbmQiLCJwYXlsb2FkIiwicHVzaCIsImlkIiwiZmlsdGVyIiwic2hpcHBpbmdfYWRkcmVzc19pZCIsIkVycm9yIiwidG90YWxfYW1vdW50Iiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImdldEl0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsInVzZUNhcnRTdGF0ZSIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwidW5kZWZpbmVkIiwidXNlQ2FydERpc3BhdGNoQ29udGV4dCIsInVzZUNhcnRBY3Rpb25zIiwiZmluZEl0ZW0iLCJjb3VudEl0ZW0iLCJhZGRJdGVtIiwidXBkYXRlSXRlbSIsInJlbW92ZUl0ZW0iLCJzZXRTaGlwcGluZ0FkZHJlc3NJZCIsImNsZWFyQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGdCQUFnQixnQkFBR0MsMkRBQWEsRUFBdEM7QUFDQSxNQUFNQyxtQkFBbUIsZ0JBQUdELDJEQUFhLEVBQXpDO0FBRUEsTUFBTUUsTUFBTSxHQUFHLEtBQWY7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsR0FBRyxHQUFHLGNBQWQsS0FBaUM7QUFDdEQsTUFBSUQsS0FBSyxDQUFDRSxNQUFOLEtBQWlCLENBQXJCLEVB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QUFBTWQ7QUFBTjtBQUZGLEtBQUQsQ0FBUjtBQUlELEdBTEQ7O0FBT0EsUUFBTXNDLFVBQVUsR0FBSXhCLEVBQUQsSUFBUTtBQUN6QlAsWUFBUSxDQUFDO0FBQ1BHLFVBQUksRUFBRSxrQkFEQztBQUVQRSxhQUFPLEVBQUU7QUFBRUU7QUFBRjtBQUZGLEtBQUQsQ0FBUjtBQUlELEdBTEQ7O0FBTUEsUUFBTXlCLG9CQUFvQixHQUFJekIsRUFBRCxJQUFRO0FBQ25DUCxZQUFRLENBQUM7QUFDUEcsVUFBSSxFQUFFLHlCQURDO0FBRVBFLGFBQU8sRUFBRTtBQUFFSSwyQkFBbUIsRUFBRUY7QUFBdkI7QUFGRixLQUFELENBQVI7QUFJRCxHQUxEOztBQU1BLFFBQU0wQixTQUFTLEdBQUcsTUFBTTtBQUN0QmpDLFlBQVEsQ0FBQztBQUNQRyxVQUFJLEVBQUUsWUFEQztBQUVQRSxhQUFPLEVBQUU7QUFGRixLQUFELENBQVI7QUFJRCxHQUxEOztBQU9BLFNBQU87QUFDTHNCLFlBREs7QUFFTEMsYUFGSztBQUdMQyxXQUhLO0FBSUxDLGNBSks7QUFLTEMsY0FMSztBQU1MQyx3QkFOSztBQU9MQztBQVBLLEdBQVA7QUFTRCxDQS9DTSIsImZpbGUiOiIuL2NvbnRleHRzL0NhcnRDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IGdldEl0ZW0sIHNldEl0ZW0gfSBmcm9tIFwiLi4vdXRpbHMvbG9jYWxTdG9yYWdlXCI7XG5cbmNvbnN0IENhcnRTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5jb25zdCBDYXJ0RGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBJRF9LRVkgPSBcIl9pZFwiO1xuXG5jb25zdCBjYWxjdWxhdGVUb3RhbCA9IChpdGVtcywga2V5ID0gXCJ0b3RhbF9hbW91bnRcIikgPT4ge1xuICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcbiAgcmV0dXJuIGl0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbVtrZXldKS5yZWR1Y2UoKHQsIGkpID0+IHQgKyBpLCAwKTtcbn07XG5cbmNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJBRERfQ0FSVF9JVEVNXCI6XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXN0YXRlLml0ZW1zLmZpbmQoXG4gICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtW0lEX0tFWV0gPT09IGFjdGlvbi5wYXlsb2FkLml0ZW1bSURfS0VZXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAgIHN0YXRlLml0ZW1zLnB1c2goYWN0aW9uLnBheWxvYWQuaXRlbSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJVUERBVEVfQ0FSVF9JVEVNXCI6XG4gICAgICAgICAgc3RhdGUuaXRlbXMgPSBzdGF0ZS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtW0lEX0tFWV0gPT09IGFjdGlvbi5wYXlsb2FkLmlkKVxuICAgICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCAuLi5hY3Rpb24ucGF5bG9hZC5pdGVtIH07XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlJFTU9WRV9DQVJUX0lURU1cIjpcbiAgICAgICAgICBzdGF0ZS5pdGVtcyA9IHN0YXRlLml0ZW1zLmZpbHRlcihcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtW0lEX0tFWV0gIT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlNFVF9TSElQUElOR19BRERSRVNTX0lEXCI6XG4gICAgICAgICAgc3RhdGUuc2hpcHBpbmdfYWRkcmVzc19pZCA9IGFjdGlvbi5wYXlsb2FkLnNoaXBwaW5nX2FkZHJlc3NfaWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJDTEVBUl9DQVJUXCI6XG4gICAgICAgICAgc3RhdGUuaXRlbXMgPSBbXTtcbiAgICAgICAgICBzdGF0ZS5zaGlwcGluZ19hZGRyZXNzX2lkID0gbnVsbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmRlZmluZWQgYWN0aW9uIHR5cGUgdXNlZFwiKTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLnRvdGFsX2Ftb3VudCA9IGNhbGN1bGF0ZVRvdGFsKHN0YXRlLml0ZW1zLCBcInRvdGFsX2Ftb3VudFwiKTtcblxuICAgICAgc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpdGVtczogWy4uLnN0YXRlLml0ZW1zXSB9O1xuICAgIH0sXG4gICAgSlNPTi5wYXJzZShnZXRJdGVtKFwiY2FydFwiKSB8fCBudWxsKSB8fCB7XG4gICAgICBpdGVtczogW10sXG4gICAgICB0b3RhbF9hbW91bnQ6IDAsXG4gICAgICBzaGlwcGluZ19hZGRyZXNzX2lkOiBudWxsLFxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJ0U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICA8Q2FydERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NhcnREaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9DYXJ0U3RhdGVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuQ2FydFByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJ0UHJvdmlkZXI7XG5cbmV4cG9ydCBjb25zdCB1c2VDYXJ0U3RhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENhcnRTdGF0ZUNvbnRleHQpO1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQ2FydFN0YXRlQ29udGV4dCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQ2FydFByb3ZpZGVyXCIpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUNhcnREaXNwYXRjaENvbnRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENhcnREaXNwYXRjaENvbnRleHQpO1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJ1c2VDYXJ0RGlzcGF0Y2hDb250ZXh0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBDYXJ0UHJvdmlkZXJcIlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQ2FydEFjdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdXNlQ2FydFN0YXRlKCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQ2FydERpc3BhdGNoQ29udGV4dCgpO1xuICBjb25zdCBmaW5kSXRlbSA9IChpZCkgPT4gc3RhdGUuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbVtJRF9LRVldID09PSBpZCk7XG4gIGNvbnN0IGNvdW50SXRlbSA9ICgpID0+IHN0YXRlLml0ZW1zLmxlbmd0aDtcbiAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJBRERfQ0FSVF9JVEVNXCIsXG4gICAgICBwYXlsb2FkOiB7IGl0ZW0gfSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVJdGVtID0gKGlkLCBpdGVtKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJVUERBVEVfQ0FSVF9JVEVNXCIsXG4gICAgICBwYXlsb2FkOiB7IGlkLCBpdGVtIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlSXRlbSA9IChpZCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiUkVNT1ZFX0NBUlRfSVRFTVwiLFxuICAgICAgcGF5bG9hZDogeyBpZCB9LFxuICAgIH0pO1xuICB9O1xuICBjb25zdCBzZXRTaGlwcGluZ0FkZHJlc3NJZCA9IChpZCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiU0VUX1NISVBQSU5HX0FERFJFU1NfSURcIixcbiAgICAgIHBheWxvYWQ6IHsgc2hpcHBpbmdfYWRkcmVzc19pZDogaWQgfSxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgY2xlYXJDYXJ0ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiQ0xFQVJfQ0FSVFwiLFxuICAgICAgcGF5bG9hZDogbnVsbCxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGZpbmRJdGVtLFxuICAgIGNvdW50SXRlbSxcbiAgICBhZGRJdGVtLFxuICAgIHVwZGF0ZUl0ZW0sXG4gICAgcmVtb3ZlSXRlbSxcbiAgICBzZXRTaGlwcGluZ0FkZHJlc3NJZCxcbiAgICBjbGVhckNhcnQsXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/CartContext.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\nexports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFrQkE7Ozs7O0FBSUEsa0NBQWtDO0FBQUE7QUFBbEM7QUFBa0MsQ0FBbEMsRUFHeUM7QUFDdkMsUUFBTUEsU0FBUyxHQUFHLE1BQU0sMkNBQXhCLEdBQXdCLENBQXhCO0FBQ0EsU0FBTztBQUFQO0FBQU8sR0FBUDtBQUdhOztBQUFBLGtCQUEyQ0MsZUFBTUMsU0FBakQsQ0FHYjtBQUlBO0FBQ0E7QUFDQTtBQUNBQyxtQkFBaUIsb0JBQTRDO0FBQzNEO0FBR0ZDOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXFELEtBQTNEO0FBR0Esd0JBQ0UscUVBR0k7QUFDQTtBQUNJLE1BQUVDLE9BQU8sSUFBVCxXQUF3QjtBQUFFQyxTQUFHLEVBQUVDLFNBQVMsQ0FBeEMsTUFBd0M7QUFBaEIsS0FBeEIsR0FOVixFQUNFLEVBREY7QUFmRjs7QUFBQTs7O0FBSG1CQyxHLENBSVpDLG1CQUpZRCxHQUlVRSxrQkFKVkY7QUFBQUEsRyxDQUtaRyxlQUxZSCxHQUtNRSxrQkFMTkY7QUErQnJCO0FBQ0E7O0FBRUEsVUFBMkM7QUFDekNJLGVBQWEsR0FBRyxxQkFBUyxNQUFNO0FBQzdCQyxXQUFPLENBQVBBO0FBREZELEdBQWdCLENBQWhCQTtBQU1BRSxTQUFPLEdBQUcscUJBQVMsTUFBTTtBQUN2QkQsV0FBTyxDQUFQQTtBQURGQyxHQUFVLENBQVZBO0FBT0YsQyxDQUFBOzs7QUFDTyxzQkFBMkI7QUFDaEMsWUFBMkNGLGFBQWE7QUFDeEQsU0FBT0csQ0FBQyxDQUFSO0FBR0s7O0FBQUEsMkJBQW1DO0FBQ3hDO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFPO0FBQ0wsZ0JBQVk7QUFDVixnQkFBMkNELE9BQU87QUFDbEQ7QUFIRzs7QUFLTCxtQkFBZTtBQUNiLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVBHOztBQVNMLGlCQUFhO0FBQ1gsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBWEc7O0FBYUxFLFFBQUksRUFBRSxNQUFNO0FBQ1YsZ0JBQTJDRixPQUFPO0FBQ2xERyxZQUFNLENBQU5BO0FBZkc7QUFpQkxDLFFBQUksRUFBRSxhQUE4QjtBQUNsQyxnQkFBMkNKLE9BQU87QUFDbEQsYUFBT0csTUFBTSxDQUFOQSxVQUFQLEVBQU9BLENBQVA7QUFuQkc7QUFxQkxFLFVBQU0sRUFBRSxjQUErQjtBQUNyQyxnQkFBMkNMLE9BQU87QUFDbEQsWUFBTU0sU0FBUyxHQUFHQyxFQUFFLFVBQXBCO0FBQ0EsWUFBTUMsT0FBTyxHQUFHRCxFQUFFLElBQWxCO0FBRUEsYUFBT0osTUFBTSxDQUFOQSxnQkFBUCxPQUFPQSxDQUFQO0FBMUJHO0FBNEJMTSxXQUFPLEVBQUUsYUFBOEI7QUFDckMsZ0JBQTJDVCxPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsYUFBUCxFQUFPQSxDQUFQO0FBOUJHO0FBZ0NMTyxhQUFTLEVBQUUsY0FBK0I7QUFDeEMsZ0JBQTJDVixPQUFPO0FBQ2xELFlBQU1XLFlBQVksR0FBR0osRUFBRSxVQUF2QjtBQUNBLFlBQU1LLFVBQVUsR0FBR0wsRUFBRSxJQUFyQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsc0JBQVAsVUFBT0EsQ0FBUDtBQXJDSjtBQUFPLEdBQVA7QUF3Q0QiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.scss */ \"./pages/app.scss\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component.scss */ \"./pages/home.component.scss\");\n/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_component_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _products_products_component_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component.scss */ \"./pages/products/products.component.scss\");\n/* harmony import */ var _products_products_component_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_products_products_component_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _product_detail_product_details_component_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail/product-details.component.scss */ \"./pages/product-detail/product-details.component.scss\");\n/* harmony import */ var _product_detail_product_details_component_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_product_detail_product_details_component_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _profile_profile_component_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component.scss */ \"./pages/profile/profile.component.scss\");\n/* harmony import */ var _profile_profile_component_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_profile_profile_component_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _cart_cart_component_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/cart.component.scss */ \"./pages/cart/cart.component.scss\");\n/* harmony import */ var _cart_cart_component_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_cart_cart_component_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _my_orders_my_orders_component_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-orders/my-orders.component.scss */ \"./pages/my-orders/my-orders.component.scss\");\n/* harmony import */ var _my_orders_my_orders_component_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_my_orders_my_orders_component_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/CartContext */ \"./contexts/CartContext.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _utils_serverSideStorage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/serverSideStorage */ \"./utils/serverSideStorage.js\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.js\");\n/* harmony import */ var _utils_JWTValidator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/JWTValidator */ \"./utils/JWTValidator.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toast-notifications */ \"react-toast-notifications\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_14__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_toast_notifications__WEBPACK_IMPORTED_MODULE_14__[\"ToastProvider\"], {\n    placement: \"bottom-center\",\n    autoDismiss: true,\n    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Component, _objectSpread({}, pageProps))\n      })\n    })\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nMyApp.getInitialProps = async appContext => {\n  const {\n    ctx\n  } = appContext;\n  const token = Object(_utils_serverSideStorage__WEBPACK_IMPORTED_MODULE_11__[\"getServerSideCookie\"])(ctx)(\"token\");\n  const authenticated = token && Object(_utils_JWTValidator__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(token);\n  const NoAuthPages = [\"/login\"];\n  const AuthPages = [\"/checkout\", \"/change-password\"];\n\n  if (NoAuthPages.includes(ctx.pathname)) {\n    if (authenticated) {\n      ctx.res.writeHead(302, {\n        Location: \"/\"\n      });\n      ctx.res.end();\n      return {};\n    }\n  }\n\n  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_10___default.a.getInitialProps(appContext);\n  return _objectSpread({}, appProps);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiY3R4IiwidG9rZW4iLCJnZXRTZXJ2ZXJTaWRlQ29va2llIiwiYXV0aGVudGljYXRlZCIsIkpXVFZhbGlkYXRvciIsIk5vQXV0aFBhZ2VzIiwiQXV0aFBhZ2VzIiwiaW5jbHVkZXMiLCJwYXRobmFtZSIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwiYXBwUHJvcHMiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUMxQyxzQkFDRSw4REFBQyx3RUFBRDtBQUFlLGFBQVMsRUFBRSxlQUExQjtBQUEyQyxlQUFXLE1BQXREO0FBQUEsMkJBQ0UsOERBQUMsOERBQUQ7QUFBQSw2QkFDRSw4REFBQyw2REFBRDtBQUFBLCtCQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFERjtBQURGO0FBREYsSUFERjtBQVNELENBVkQ7O0FBWWVGLG9FQUFmOztBQUVBQSxLQUFLLENBQUNHLGVBQU4sR0FBd0IsTUFBT0MsVUFBUCxJQUFzQjtBQUM1QyxRQUFNO0FBQUVDO0FBQUYsTUFBVUQsVUFBaEI7QUFDQSxRQUFNRSxLQUFLLEdBQUdDLHFGQUFtQixDQUFDRixHQUFELENBQW5CLENBQXlCLE9BQXpCLENBQWQ7QUFDQSxRQUFNRyxhQUFhLEdBQUdGLEtBQUssSUFBSUcsb0VBQVksQ0FBQ0gsS0FBRCxDQUEzQztBQUNBLFFBQU1JLFdBQVcsR0FBRyxDQUFDLFFBQUQsQ0FBcEI7QUFDQSxRQUFNQyxTQUFTLEdBQUcsQ0FBQyxXQUFELEVBQWMsa0JBQWQsQ0FBbEI7O0FBRUEsTUFBSUQsV0FBVyxDQUFDRSxRQUFaLENBQXFCUCxHQUFHLENBQUNRLFFBQXpCLENBQUosRUFBd0M7QUFDdEMsUUFBSUwsYUFBSixFQUFtQjtBQUNqQkgsU0FBRyxDQUFDUyxHQUFKLENBQVFDLFNBQVIsQ0FBa0IsR0FBbEIsRUFBdUI7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaLE9BQXZCO0FBQ0FYLFNBQUcsQ0FBQ1MsR0FBSixDQUFRRyxHQUFSO0FBQ0EsYUFBTyxFQUFQO0FBQ0Q7QUFDRjs7QUFFRCxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsZ0RBQUcsQ0FBQ2hCLGVBQUosQ0FBb0JDLFVBQXBCLENBQXZCO0FBRUEsMkJBQVljLFFBQVo7QUFDRCxDQWxCRCIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL2FwcC5zY3NzXCI7XG5pbXBvcnQgXCIuL2hvbWUuY29tcG9uZW50LnNjc3NcIjtcbmltcG9ydCBcIi4vcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3NcIjtcbmltcG9ydCBcIi4vcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzXCI7XG5pbXBvcnQgXCIuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2Nzc1wiO1xuaW1wb3J0IFwiLi9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3NcIjtcbmltcG9ydCBcIi4vbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuc2Nzc1wiO1xuaW1wb3J0IENhcnRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dHMvQ2FydENvbnRleHRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTaWRlQ29va2llIH0gZnJvbSBcIi4uL3V0aWxzL3NlcnZlclNpZGVTdG9yYWdlXCI7XG5pbXBvcnQgQXV0aFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0cy9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IEpXVFZhbGlkYXRvciBmcm9tIFwiLi4vdXRpbHMvSldUVmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBUb2FzdFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnNcIjtcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRvYXN0UHJvdmlkZXIgcGxhY2VtZW50PXtcImJvdHRvbS1jZW50ZXJcIn0gYXV0b0Rpc21pc3M+XG4gICAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgICA8Q2FydFByb3ZpZGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9DYXJ0UHJvdmlkZXI+XG4gICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICA8L1RvYXN0UHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHggfSA9IGFwcENvbnRleHQ7XG4gIGNvbnN0IHRva2VuID0gZ2V0U2VydmVyU2lkZUNvb2tpZShjdHgpKFwidG9rZW5cIik7XG4gIGNvbnN0IGF1dGhlbnRpY2F0ZWQgPSB0b2tlbiAmJiBKV1RWYWxpZGF0b3IodG9rZW4pO1xuICBjb25zdCBOb0F1dGhQYWdlcyA9IFtcIi9sb2dpblwiXTtcbiAgY29uc3QgQXV0aFBhZ2VzID0gW1wiL2NoZWNrb3V0XCIsIFwiL2NoYW5nZS1wYXNzd29yZFwiXTtcblxuICBpZiAoTm9BdXRoUGFnZXMuaW5jbHVkZXMoY3R4LnBhdGhuYW1lKSkge1xuICAgIGlmIChhdXRoZW50aWNhdGVkKSB7XG4gICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246IFwiL1wiIH0pO1xuICAgICAgY3R4LnJlcy5lbmQoKTtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XG5cbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/app.scss":
/*!************************!*\
  !*** ./pages/app.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL2FwcC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/app.scss\n");

/***/ }),

/***/ "./pages/cart/cart.component.scss":
/*!****************************************!*\
  !*** ./pages/cart/cart.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cart/cart.component.scss\n");

/***/ }),

/***/ "./pages/home.component.scss":
/*!***********************************!*\
  !*** ./pages/home.component.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL2hvbWUuY29tcG9uZW50LnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.component.scss\n");

/***/ }),

/***/ "./pages/my-orders/my-orders.component.scss":
/*!**************************************************!*\
  !*** ./pages/my-orders/my-orders.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL215LW9yZGVycy9teS1vcmRlcnMuY29tcG9uZW50LnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/my-orders/my-orders.component.scss\n");

/***/ }),

/***/ "./pages/product-detail/product-details.component.scss":
/*!*************************************************************!*\
  !*** ./pages/product-detail/product-details.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product-detail/product-details.component.scss\n");

/***/ }),

/***/ "./pages/products/products.component.scss":
/*!************************************************!*\
  !*** ./pages/products/products.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/products.component.scss\n");

/***/ }),

/***/ "./pages/profile/profile.component.scss":
/*!**********************************************!*\
  !*** ./pages/profile/profile.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile/profile.component.scss\n");

/***/ }),

/***/ "./utils/JWTValidator.js":
/*!*******************************!*\
  !*** ./utils/JWTValidator.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (token => {\n  if (token) {\n    const data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.decode(token);\n\n    if (!Boolean(data)) {\n      return false;\n    }\n\n    const expDate = new Date(data.exp * 1000);\n    const currentDate = new Date();\n    return expDate - currentDate > 0;\n  }\n\n  return false;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9KV1RWYWxpZGF0b3IuanM/ZTRkZCJdLCJuYW1lcyI6WyJ0b2tlbiIsImRhdGEiLCJqd3QiLCJkZWNvZGUiLCJCb29sZWFuIiwiZXhwRGF0ZSIsIkRhdGUiLCJleHAiLCJjdXJyZW50RGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZ0JBLG9FQUFELElBQVc7QUFDeEIsTUFBSUEsS0FBSixFQUFXO0FBQ1QsVUFBTUMsSUFBSSxHQUFHQyxtREFBRyxDQUFDQyxNQUFKLENBQVdILEtBQVgsQ0FBYjs7QUFDQSxRQUFJLENBQUNJLE9BQU8sQ0FBQ0gsSUFBRCxDQUFaLEVBQW9CO0FBQ2xCLGFBQU8sS0FBUDtBQUNEOztBQUNELFVBQU1JLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVNMLElBQUksQ0FBQ00sR0FBTCxHQUFXLElBQXBCLENBQWhCO0FBQ0EsVUFBTUMsV0FBVyxHQUFHLElBQUlGLElBQUosRUFBcEI7QUFFQSxXQUFPRCxPQUFPLEdBQUdHLFdBQVYsR0FBd0IsQ0FBL0I7QUFDRDs7QUFFRCxTQUFPLEtBQVA7QUFDRCxDQWJEIiwiZmlsZSI6Ii4vdXRpbHMvSldUVmFsaWRhdG9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh0b2tlbikgPT4ge1xuICBpZiAodG9rZW4pIHtcbiAgICBjb25zdCBkYXRhID0gand0LmRlY29kZSh0b2tlbik7XG4gICAgaWYgKCFCb29sZWFuKGRhdGEpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGV4cERhdGUgPSBuZXcgRGF0ZShkYXRhLmV4cCAqIDEwMDApO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgIHJldHVybiBleHBEYXRlIC0gY3VycmVudERhdGUgPiAwO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/JWTValidator.js\n");

/***/ }),

/***/ "./utils/localStorage.js":
/*!*******************************!*\
  !*** ./utils/localStorage.js ***!
  \*******************************/
/*! exports provided: setItem, getItem, removeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setItem\", function() { return setItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getItem\", function() { return getItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeItem\", function() { return removeItem; });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst setItem = (key, value) => {\n  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(key, value);\n};\nconst getItem = key => {\n  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);\n};\nconst removeItem = key => {\n  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(key);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sb2NhbFN0b3JhZ2UuanM/ZjE2NSJdLCJuYW1lcyI6WyJzZXRJdGVtIiwia2V5IiwidmFsdWUiLCJDb29raWVzIiwic2V0IiwiZ2V0SXRlbSIsImdldCIsInJlbW92ZUl0ZW0iLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsT0FBTyxHQUFHLENBQUNDLEdBQUQsRUFBTUMsS0FBTixLQUFnQjtBQUNyQ0Msa0RBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaLEVBQWlCQyxLQUFqQjtBQUNELENBRk07QUFJQSxNQUFNRyxPQUFPLEdBQUlKLEdBQUQsSUFBUztBQUM5QixTQUFPRSxnREFBTyxDQUFDRyxHQUFSLENBQVlMLEdBQVosQ0FBUDtBQUNELENBRk07QUFJQSxNQUFNTSxVQUFVLEdBQUlOLEdBQUQsSUFBUztBQUNqQ0Usa0RBQU8sQ0FBQ0ssTUFBUixDQUFlUCxHQUFmO0FBQ0QsQ0FGTSIsImZpbGUiOiIuL3V0aWxzL2xvY2FsU3RvcmFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcblxuZXhwb3J0IGNvbnN0IHNldEl0ZW0gPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICBDb29raWVzLnNldChrZXksIHZhbHVlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRJdGVtID0gKGtleSkgPT4ge1xuICByZXR1cm4gQ29va2llcy5nZXQoa2V5KTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtID0gKGtleSkgPT4ge1xuICBDb29raWVzLnJlbW92ZShrZXkpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/localStorage.js\n");

/***/ }),

/***/ "./utils/serverSideStorage.js":
/*!************************************!*\
  !*** ./utils/serverSideStorage.js ***!
  \************************************/
/*! exports provided: getServerSideCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideCookie\", function() { return getServerSideCookie; });\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-cookies */ \"next-cookies\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getServerSideCookie = context => key => {\n  return next_cookies__WEBPACK_IMPORTED_MODULE_0___default()(context)[key];\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9zZXJ2ZXJTaWRlU3RvcmFnZS5qcz9lMDBkIl0sIm5hbWVzIjpbImdldFNlcnZlclNpZGVDb29raWUiLCJjb250ZXh0Iiwia2V5IiwiY29va2llcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLG1CQUFtQixHQUFJQyxPQUFELElBQWNDLEdBQUQsSUFBUztBQUN2RCxTQUFPQyxtREFBTyxDQUFDRixPQUFELENBQVAsQ0FBaUJDLEdBQWpCLENBQVA7QUFDRCxDQUZNIiwiZmlsZSI6Ii4vdXRpbHMvc2VydmVyU2lkZVN0b3JhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29va2llcyBmcm9tIFwibmV4dC1jb29raWVzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlQ29va2llID0gKGNvbnRleHQpID0+IChrZXkpID0+IHtcbiAgcmV0dXJuIGNvb2tpZXMoY29udGV4dClba2V5XTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/serverSideStorage.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIj82NDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Impzb253ZWJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-cookies\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvb2tpZXNcIj82ZGI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtY29va2llcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29va2llc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-cookies\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-toast-notifications":
/*!********************************************!*\
  !*** external "react-toast-notifications" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-toast-notifications\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI/ZjA3YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-toast-notifications\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiPzMyZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QvanN4LXJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-runtime\n");

/***/ })

/******/ });