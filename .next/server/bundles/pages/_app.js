module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Loader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_lottie__ = __webpack_require__("react-lottie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_lottie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_lottie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_assets_animations_trailLoading_json__ = __webpack_require__("./utils/assets/animations/trailLoading.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_assets_animations_trailLoading_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_assets_animations_trailLoading_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_assets_animations_trailLoadingWhite_json__ = __webpack_require__("./utils/assets/animations/trailLoadingWhite.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_assets_animations_trailLoadingWhite_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utils_assets_animations_trailLoadingWhite_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_loader_scss__ = __webpack_require__("./styles/loader.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_loader_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_loader_scss__);
var _jsxFileName = "/Users/krishna/Sites/projects/clients/meee/components/Loader.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Loader =
/*#__PURE__*/
function (_Component) {
  _inherits(Loader, _Component);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
  }

  _createClass(Loader, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          bg = _props.bg,
          loadingText = _props.loadingText,
          reduxLoader = _props.reduxLoader;
      var defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: __WEBPACK_IMPORTED_MODULE_2__utils_assets_animations_trailLoading_json__,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      var defaultOptionsWhite = {
        loop: true,
        autoplay: true,
        animationData: __WEBPACK_IMPORTED_MODULE_3__utils_assets_animations_trailLoadingWhite_json__,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "loader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, !reduxLoader && (bg ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "gradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_lottie___default.a, {
        options: defaultOptionsWhite,
        height: 140,
        width: 140,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, loadingText)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "opac",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_lottie___default.a, {
        options: defaultOptions,
        height: 100,
        width: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }))), reduxLoader && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "lds-dual-ring",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }));
    }
  }]);

  return Loader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_persist_integration_react__ = __webpack_require__("redux-persist/integration/react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_persist_integration_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_persist_integration_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_store__ = __webpack_require__("./redux/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Loader__ = __webpack_require__("./components/Loader.js");
var _jsxFileName = "/Users/krishna/Sites/projects/clients/meee/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          store = _props.store,
          router = _props.router; // console.log('Environment: ', process.env.NODE_ENV);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, router.route !== '/' ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_redux_persist_integration_react__["PersistGate"], {
        persistor: store.__persistor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, function (bootstrapped) {
        if (bootstrapped) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, pageProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }));
        }

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Loader__["a" /* default */], {
          reduxLoader: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        });
      }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }))));
    }
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_0_next_app___default.a);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_5__redux_store__["a" /* configureStore */])(MyApp));

/***/ }),

/***/ "./redux/reducers/admin/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_initialState__ = __webpack_require__("./redux/store/initialState.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./redux/reducers/admin/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__store_initialState__["a" /* default */].admin;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__types__["c" /* ON_AUTHORISATION_REQUESTED */]:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ON_AUTHORISATION_COMPLETED */]:
      return _objectSpread({}, state, {
        isLoading: false,
        isAuthorised: true,
        email: action.email
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_AUTHORISATION_FAILED */]:
      return _objectSpread({}, state, {
        isLoading: false,
        message: action.message
      });

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./redux/reducers/admin/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ON_AUTHORISATION_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ON_AUTHORISATION_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ON_AUTHORISATION_FAILED; });
var ON_AUTHORISATION_REQUESTED = 'ON_AUTHORISATION_REQUESTED';
var ON_AUTHORISATION_COMPLETED = 'ON_AUTHORISATION_COMPLETED';
var ON_AUTHORISATION_FAILED = 'ON_AUTHORISATION_FAILED';

/***/ }),

/***/ "./redux/reducers/code/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_initialState__ = __webpack_require__("./redux/store/initialState.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./redux/reducers/code/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__store_initialState__["a" /* default */].code;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_LOGIN_REQUESTED */]:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ON_LOGIN_COMPLETED */]:
      return _objectSpread({}, state, {
        isLoggedIn: action.isLoggedIn,
        isLoading: false
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["e" /* ON_SCHOOL_LOGIN_COMPLETED */]:
      return _objectSpread({}, state, {
        isLoggedIn: true,
        isLoggedInSchool: action.isLoggedInSchool,
        isLoading: false,
        schoolUserKey: action.schoolUserKey,
        message: action.message
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["f" /* ON_SCHOOL_LOGIN_FAILED */]:
      return _objectSpread({}, state, {
        isLoading: false,
        message: action.message
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["d" /* ON_LOGOUT_REQUESTED */]:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["c" /* ON_LOGOUT_COMPLETED */]:
      return _objectSpread({}, state, {
        isLoggedIn: action.isLoggedIn,
        isLoading: false
      });

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./redux/reducers/code/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ON_LOGIN_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ON_LOGIN_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ON_SCHOOL_LOGIN_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ON_SCHOOL_LOGIN_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ON_LOGOUT_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ON_LOGOUT_COMPLETED; });
var ON_LOGIN_REQUESTED = 'ON_LOGIN_REQUESTED';
var ON_LOGIN_COMPLETED = 'ON_LOGIN_COMPLETED';
var ON_SCHOOL_LOGIN_COMPLETED = 'ON_SCHOOL_LOGIN_COMPLETED';
var ON_SCHOOL_LOGIN_FAILED = 'ON_SCHOOL_LOGIN_FAILED';
var ON_LOGOUT_REQUESTED = 'ON_LOGOUT_REQUESTED';
var ON_LOGOUT_COMPLETED = 'ON_LOGOUT_COMPLETED';

/***/ }),

/***/ "./redux/reducers/generateCodes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_initialState__ = __webpack_require__("./redux/store/initialState.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./redux/reducers/generateCodes/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__store_initialState__["a" /* default */].generateCodes;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_GENERATE_CODES_REQUESTED */]:
      return _objectSpread({}, state, {
        isLoading: true,
        message: action.message
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ON_GENERATE_CODES_COMPLETED */]:
      return _objectSpread({}, state, {
        isLoading: false,
        message: action.message
      });

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./redux/reducers/generateCodes/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ON_GENERATE_CODES_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ON_GENERATE_CODES_COMPLETED; });
var ON_GENERATE_CODES_REQUESTED = 'ON_GENERATE_CODES_REQUESTED';
var ON_GENERATE_CODES_COMPLETED = 'ON_GENERATE_CODES_COMPLETED';

/***/ }),

/***/ "./redux/reducers/getStarted/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_initialState__ = __webpack_require__("./redux/store/initialState.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./redux/reducers/getStarted/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__store_initialState__["a" /* default */].getStarted;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__types__["c" /* ON_SIGNUP_REQUESTED */]:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ON_SIGNUP_COMPLETED */]:
      return _objectSpread({}, state, {
        isLoading: false,
        status: action.status,
        schoolName: action.schoolName,
        schoolKey: action.schoolKey,
        name: action.name,
        email: action.email
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_SIGNUP_FAILED */]:
      return _objectSpread({}, state, {
        isLoading: false,
        status: action.status
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["f" /* ON_UPDATE_USER_REQUESTED */]:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["d" /* ON_UPDATE_USER_COMPLETED */]:
      return _objectSpread({}, state, {
        isLoading: false,
        status: action.status
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["e" /* ON_UPDATE_USER_FAILED */]:
      return _objectSpread({}, state, {
        isLoading: false,
        status: action.status
      });

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./redux/reducers/getStarted/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ON_SIGNUP_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ON_SIGNUP_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ON_SIGNUP_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ON_UPDATE_USER_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ON_UPDATE_USER_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ON_UPDATE_USER_FAILED; });
var ON_SIGNUP_REQUESTED = 'ON_SIGNUP_REQUESTED';
var ON_SIGNUP_COMPLETED = 'ON_SIGNUP_COMPLETED';
var ON_SIGNUP_FAILED = 'ON_SIGNUP_FAILED';
var ON_UPDATE_USER_REQUESTED = 'ON_UPDATE_USER_REQUESTED';
var ON_UPDATE_USER_COMPLETED = 'ON_UPDATE_USER_COMPLETED';
var ON_UPDATE_USER_FAILED = 'ON_UPDATE_USER_FAILED';

/***/ }),

/***/ "./redux/reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin__ = __webpack_require__("./redux/reducers/admin/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schoolData__ = __webpack_require__("./redux/reducers/schoolData/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generateCodes__ = __webpack_require__("./redux/reducers/generateCodes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment__ = __webpack_require__("./redux/reducers/payment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__code__ = __webpack_require__("./redux/reducers/code/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__valueCards__ = __webpack_require__("./redux/reducers/valueCards/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__getStarted__ = __webpack_require__("./redux/reducers/getStarted/index.js");








var reducers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  admin: __WEBPACK_IMPORTED_MODULE_1__admin__["a" /* default */],
  schoolData: __WEBPACK_IMPORTED_MODULE_2__schoolData__["a" /* default */],
  generateCodes: __WEBPACK_IMPORTED_MODULE_3__generateCodes__["a" /* default */],
  payment: __WEBPACK_IMPORTED_MODULE_4__payment__["a" /* default */],
  code: __WEBPACK_IMPORTED_MODULE_5__code__["a" /* default */],
  valueCards: __WEBPACK_IMPORTED_MODULE_6__valueCards__["a" /* default */],
  getStarted: __WEBPACK_IMPORTED_MODULE_7__getStarted__["a" /* default */]
});
/* harmony default export */ __webpack_exports__["a"] = (reducers);

/***/ }),

/***/ "./redux/reducers/payment/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_initialState__ = __webpack_require__("./redux/store/initialState.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./redux/reducers/payment/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__store_initialState__["a" /* default */].payment;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_EMAIL_SUBMITTING */]:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ON_EMAIL_SUBMITTED */]:
      return _objectSpread({}, state, {
        isLoading: false,
        email: action.email,
        isEmailSubscribed: action.isEmailSubscribed
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["d" /* ON_PAYMENT_REQUESTED */]:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["c" /* ON_PAYMENT_COMPLETED */]:
      return _objectSpread({}, state, {
        isLoading: false
      });

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./redux/reducers/payment/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ON_EMAIL_SUBMITTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ON_EMAIL_SUBMITTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ON_PAYMENT_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ON_PAYMENT_COMPLETED; });
var ON_EMAIL_SUBMITTING = 'ON_EMAIL_SUBMITTING';
var ON_EMAIL_SUBMITTED = 'ON_EMAIL_SUBMITTED';
var ON_PAYMENT_REQUESTED = 'ON_PAYMENT_REQUESTED';
var ON_PAYMENT_COMPLETED = 'ON_PAYMENT_COMPLETED';

/***/ }),

/***/ "./redux/reducers/schoolData/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_initialState__ = __webpack_require__("./redux/store/initialState.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./redux/reducers/schoolData/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__store_initialState__["a" /* default */].schoolData;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__types__["d" /* ON_SCHOOL_NAMES_REQUESTED */]:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["c" /* ON_SCHOOL_NAMES_FETCHED */]:
      return _objectSpread({}, state, {
        isLoading: false,
        schoolList: action.schoolList
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_SCHOOL_DATA_REQUESTED */]:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ON_SCHOOL_DATA_FETCHED */]:
      return _objectSpread({}, state, {
        isLoading: false,
        schoolData: action.schoolData
      });

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./redux/reducers/schoolData/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ON_SCHOOL_NAMES_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ON_SCHOOL_NAMES_FETCHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ON_SCHOOL_DATA_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ON_SCHOOL_DATA_FETCHED; });
var ON_SCHOOL_NAMES_REQUESTED = 'ON_SCHOOL_NAMES_REQUESTED';
var ON_SCHOOL_NAMES_FETCHED = 'ON_SCHOOL_NAMES_FETCHED';
var ON_SCHOOL_DATA_REQUESTED = 'ON_SCHOOL_DATA_REQUESTED';
var ON_SCHOOL_DATA_FETCHED = 'ON_SCHOOL_DATA_FETCHED';

/***/ }),

/***/ "./redux/reducers/valueCards/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_initialState__ = __webpack_require__("./redux/store/initialState.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./redux/reducers/valueCards/types.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__store_initialState__["a" /* default */].valueCards;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  // console.log('STATE: ', state);
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__types__["h" /* ON_REQUEST_CLEAR_CARDS */]:
      return _objectSpread({}, state, {
        isLoading: true,
        cardsCreated: false,
        availableCardList: [],
        myCardList: [],
        myTopFiveCards: [],
        myTopFiveCardsRanking: []
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["e" /* ON_CARD_CREATION */]:
      return _objectSpread({}, state, {
        availableCardList: action.availableCardList,
        cardsCreated: true,
        isLoading: false
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["g" /* ON_MY_CARD_SELECTION */]:
      return _objectSpread({}, state, {
        isLoading: action.isLoading,
        myCardList: _toConsumableArray(state.myCardList).concat([action.myCardList])
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["f" /* ON_MY_CARD_DELETION */]:
      return _objectSpread({}, state, {
        isLoading: action.isLoading,
        myCardList: state.myCardList.filter(function (item) {
          return item !== action.item;
        })
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_AVAILABLE_CARD_SELECTION */]:
      return _objectSpread({}, state, {
        isLoading: false,
        availableCardList: _toConsumableArray(state.availableCardList).concat([action.availableCardList])
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ON_AVAILABLE_CARD_DELETION */]:
      return _objectSpread({}, state, {
        isLoading: false,
        availableCardList: state.availableCardList.filter(function (item) {
          return item !== action.item;
        })
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["j" /* ON_TOP5_CARD_SELECTION */]:
      return _objectSpread({}, state, {
        isLoading: true,
        myTopFiveCards: _toConsumableArray(state.myTopFiveCards).concat([action.myTopFiveCards])
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["i" /* ON_TOP5_CARD_DELETION */]:
      return _objectSpread({}, state, {
        isLoading: true,
        myTopFiveCards: state.myTopFiveCards.filter(function (item) {
          return item !== action.item;
        })
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["c" /* ON_CARDS_SUBMISSION_REQUESTED */]:
      return _objectSpread({}, state, {
        myTopFiveCardsRanking: action.myTopFiveCardsRanking,
        isLoading: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__types__["d" /* ON_CARDS_SUBMISSION_SUCCESS */]:
      return _objectSpread({}, state, {
        isLoading: false
      });

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./redux/reducers/valueCards/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ON_REQUEST_CLEAR_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ON_CARD_CREATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ON_AVAILABLE_CARD_SELECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ON_AVAILABLE_CARD_DELETION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ON_MY_CARD_SELECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ON_MY_CARD_DELETION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ON_TOP5_CARD_SELECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ON_TOP5_CARD_DELETION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ON_CARDS_SUBMISSION_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ON_CARDS_SUBMISSION_SUCCESS; });
var ON_REQUEST_CLEAR_CARDS = 'ON_REQUEST_CLEAR_CARDS';
var ON_CARD_CREATION = 'ON_CARD_CREATION';
var ON_AVAILABLE_CARD_SELECTION = 'ON_AVAILABLE_CARD_SELECTION';
var ON_AVAILABLE_CARD_DELETION = 'ON_AVAILABLE_CARD_DELETION';
var ON_MY_CARD_SELECTION = 'ON_MY_CARD_SELECTION';
var ON_MY_CARD_DELETION = 'ON_MY_CARD_DELETION';
var ON_TOP5_CARD_SELECTION = 'ON_TOP5_CARD_SELECTION';
var ON_TOP5_CARD_DELETION = 'ON_TOP5_CARD_DELETION';
var ON_CARDS_SUBMISSION_REQUESTED = 'ON_CARDS_SUBMISSION_REQUESTED';
var ON_CARDS_SUBMISSION_SUCCESS = 'ON_CARDS_SUBMISSION_SUCCESS';

/***/ }),

/***/ "./redux/store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configureStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initialState__ = __webpack_require__("./redux/store/initialState.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("./redux/reducers/index.js");





var makeConfiguredStore = function makeConfiguredStore(enhancedReducers, initialState, middleware) {
  if (middleware) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(enhancedReducers, initialState, middleware);
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(enhancedReducers, initialState);
};

var configureStore = function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_2__initialState__["a" /* default */];

  if (false) {
    if (typeof window === 'undefined') {
      return makeConfiguredStore(reducers, initialState, applyMiddleware(thunk));
    } else {
      // we need it only on client side
      var _require = require('redux-persist'),
          persistStore = _require.persistStore,
          persistReducer = _require.persistReducer;

      var storage = require('redux-persist/lib/storage').default;

      var persistConfig = {
        key: 'nextjs',
        storage: storage,
        blacklist: ['admin', 'schoolData']
      };
      var persistedReducer = persistReducer(persistConfig, reducers);
      var store = makeConfiguredStore(persistedReducer, initialState, compose(applyMiddleware(thunk)));
      store.__persistor = persistStore(store); // Nasty hack

      return store;
    }
  } else {
    if (typeof window === 'undefined') {
      return makeConfiguredStore(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */], initialState, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a));
    } else {
      // we need it only on client side
      var _require2 = __webpack_require__("redux-persist"),
          _persistStore = _require2.persistStore,
          _persistReducer = _require2.persistReducer;

      var _storage = __webpack_require__("redux-persist/lib/storage").default;

      var _persistConfig = {
        key: 'nextjs',
        storage: _storage,
        blacklist: ['admin', 'schoolData']
      };

      var _persistedReducer = _persistReducer(_persistConfig, __WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */]);

      var reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : __WEBPACK_IMPORTED_MODULE_0_redux__["compose"];

      var _store = makeConfiguredStore(_persistedReducer, initialState, reduxCompose(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a)));

      _store.__persistor = _persistStore(_store); // Nasty hack

      return _store;
    }
  }
};

/***/ }),

/***/ "./redux/store/initialState.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  admin: {
    isLoading: false,
    isAuthorised: false,
    message: null,
    email: null
  },
  schoolData: {
    isLoading: false,
    schoolList: [],
    schoolData: []
  },
  generateCodes: {
    isLoading: false,
    message: null
  },
  valueCards: {
    isLoading: true,
    cardsCreated: false,
    availableCardList: [],
    myCardList: [],
    myTopFiveCards: [],
    myTopFiveCardsRanking: []
  },
  payment: {
    isLoading: false,
    email: null,
    isEmailSubscribed: false
  },
  code: {
    isLoading: false,
    isLoggedIn: false,
    isLoggedInSchool: false,
    schoolUserKey: null,
    message: ''
  },
  getStarted: {
    isLoading: false,
    status: null,
    schoolName: null,
    schoolKey: null,
    name: null,
    email: null
  }
});

/***/ }),

/***/ "./styles/loader.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/assets/animations/trailLoading.json":
/***/ (function(module, exports) {

module.exports = {"v":"4.6.8","fr":60,"ip":0,"op":106,"w":500,"h":500,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 5","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":20,"s":[0],"e":[360]},{"t":110}]},"p":{"a":0,"k":[251,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0,0.7294118,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":20,"op":620,"st":20,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 4","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":15,"s":[0],"e":[360]},{"t":105}]},"p":{"a":0,"k":[251,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0,0.7294118,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":15,"op":615,"st":15,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 3","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":10,"s":[0],"e":[360]},{"t":100}]},"p":{"a":0,"k":[251,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[30,30]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0,0.7294118,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":10,"op":610,"st":10,"bm":0,"sr":1},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 2","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":5,"s":[0],"e":[360]},{"t":95}]},"p":{"a":0,"k":[251,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[40,40]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0,0.7294118,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":5,"op":605,"st":5,"bm":0,"sr":1},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":0,"s":[0],"e":[360]},{"t":90}]},"p":{"a":0,"k":[250,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":0,"s":[50,50],"e":[40,40]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":84,"s":[40,40],"e":[50,50]},{"t":100}]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0,0.7294118,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":600,"st":0,"bm":0,"sr":1}]}

/***/ }),

/***/ "./utils/assets/animations/trailLoadingWhite.json":
/***/ (function(module, exports) {

module.exports = {"v":"4.6.8","fr":60,"ip":0,"op":106,"w":500,"h":500,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 5","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":20,"s":[0],"e":[360]},{"t":110}]},"p":{"a":0,"k":[251,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0.973,0.973,0.973,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":20,"op":620,"st":20,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 4","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":15,"s":[0],"e":[360]},{"t":105}]},"p":{"a":0,"k":[251,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0.973,0.973,0.973,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":15,"op":615,"st":15,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 3","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":10,"s":[0],"e":[360]},{"t":100}]},"p":{"a":0,"k":[251,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[30,30]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0.973,0.973,0.973,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":10,"op":610,"st":10,"bm":0,"sr":1},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 2","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":5,"s":[0],"e":[360]},{"t":95}]},"p":{"a":0,"k":[251,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[40,40]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0.973,0.973,0.973,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":5,"op":605,"st":5,"bm":0,"sr":1},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":0,"s":[0],"e":[360]},{"t":90}]},"p":{"a":0,"k":[250,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":0,"s":[50,50],"e":[40,40]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":84,"s":[40,40],"e":[50,50]},{"t":100}]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":600,"st":0,"bm":0,"sr":1}]}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lottie":
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-persist":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map