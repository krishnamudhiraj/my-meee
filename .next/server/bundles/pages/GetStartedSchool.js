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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/InputTheme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/krishna/Sites/projects/clients/meee/components/InputTheme.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var InputTheme =
/*#__PURE__*/
function (_Component) {
  _inherits(InputTheme, _Component);

  function InputTheme() {
    _classCallCheck(this, InputTheme);

    return _possibleConstructorReturn(this, (InputTheme.__proto__ || Object.getPrototypeOf(InputTheme)).apply(this, arguments));
  }

  _createClass(InputTheme, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          labelText = _props.labelText,
          type = _props.type,
          placeholder = _props.placeholder,
          message = _props.message,
          textAlign = _props.textAlign,
          rank = _props.rank,
          inputRankChange = _props.inputRankChange,
          redFlag = _props.redFlag;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-theme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "input-label",
        htmlFor: "usr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, labelText), !rank && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: type ? type : 'text',
        name: "input_name",
        className: "form-control",
        id: "usr",
        placeholder: placeholder,
        style: {
          textAlign: textAlign
        },
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), rank && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "number",
        name: "rank",
        min: 1,
        max: 5,
        className: "form-control-rank",
        id: "usr",
        placeholder: placeholder,
        style: redFlag && {
          border: '1px solid red !important'
        },
        onChange: inputRankChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), message && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "message-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, message)));
    }
  }]);

  return InputTheme;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (InputTheme);

/***/ }),

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

/***/ "./config/firebase.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__("firebase/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_firestore__ = __webpack_require__("firebase/firestore");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_firestore__);


var config = {
  apiKey: 'AIzaSyANBHpcxOVpHfxDkbOAlxasmkxeu7Q_5mw',
  authDomain: 'meee-cards.firebaseapp.com',
  databaseURL: 'https://meee-cards.firebaseio.com',
  projectId: 'meee-cards',
  storageBucket: 'meee-cards.appspot.com',
  messagingSenderId: '372631265496'
};

if (!__WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.apps.length) {
  __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.initializeApp(config);
}

var firebaseApp = __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a;

/***/ }),

/***/ "./pages/GetStartedSchool/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_reducers_getStarted_actions__ = __webpack_require__("./redux/reducers/getStarted/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Loader__ = __webpack_require__("./components/Loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_InputTheme__ = __webpack_require__("./components/InputTheme.js");
var _jsxFileName = "/Users/krishna/Sites/projects/clients/meee/pages/GetStartedSchool/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var GetStartedSchool =
/*#__PURE__*/
function (_Component) {
  _inherits(GetStartedSchool, _Component);

  function GetStartedSchool() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, GetStartedSchool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = GetStartedSchool.__proto__ || Object.getPrototypeOf(GetStartedSchool)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(ev) {
        ev.preventDefault();
        var onSchoolSignupRequested = _this.props.onSchoolSignupRequested;
        var inputCode = ev.target.input_name.value;
        onSchoolSignupRequested(inputCode);
      }
    }), _temp));
  }

  _createClass(GetStartedSchool, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.status === 'success') {
        __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/SelectSchool');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          isLoading = _props.isLoading,
          status = _props.status;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "get-statred",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, isLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Loader__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "get-started-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Image"], {
        src: __webpack_require__("./utils/assets/meeLogo2.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "head-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Let", "'", "s get started"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "body-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Enter the code you have been given:")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_InputTheme__["a" /* default */], {
        placeholder: "e.g. 0391",
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Sounds Good"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          height: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, status !== 'success' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "error-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, status))));
    }
  }]);

  return GetStartedSchool;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    onSchoolSignupRequested: function onSchoolSignupRequested(code) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__redux_reducers_getStarted_actions__["a" /* onSchoolSignupRequested */])(code));
    }
  };
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var getStarted = _ref2.getStarted;
  return {
    isLoading: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["get"])(getStarted, 'isLoading'),
    status: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["get"])(getStarted, 'status')
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(GetStartedSchool));

/***/ }),

/***/ "./redux/reducers/getStarted/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export onSignupRequested */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onSchoolSignupRequested; });
/* unused harmony export onUpdatingDeatils */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./redux/reducers/getStarted/types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_code__ = __webpack_require__("./services/code.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_schools__ = __webpack_require__("./services/schools.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users__ = __webpack_require__("./services/users.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





var onSignupRequested = function onSignupRequested(code) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch, getState) {
        var codeData, fetchUserData, _fetchUserData$data, name, email;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const {} = getState();
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["c" /* ON_SIGNUP_REQUESTED */]
                });
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["a" /* searchCode */])(Number(code));

              case 3:
                codeData = _context.sent;

                if (!(codeData.response === false)) {
                  _context.next = 9;
                  break;
                }

                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_SIGNUP_FAILED */],
                  status: codeData.message
                });
                return _context.abrupt("return", false);

              case 9:
                _context.next = 11;
                return Object(__WEBPACK_IMPORTED_MODULE_4__services_users__["a" /* fetchUser */])(codeData.data.customer_id);

              case 11:
                fetchUserData = _context.sent;
                _fetchUserData$data = fetchUserData.data, name = _fetchUserData$data.name, email = _fetchUserData$data.email;
                _context.next = 15;
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["c" /* updateCodeUsed */])(codeData.id, code);

              case 15:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ON_SIGNUP_COMPLETED */],
                  status: 'success',
                  name: name,
                  email: email
                });
                return _context.abrupt("return", true);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var onSchoolSignupRequested = function onSchoolSignupRequested(code) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch, getState) {
        var _ref3, response, message, id, data;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // const {} = getState();
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["c" /* ON_SIGNUP_REQUESTED */]
                });
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["b" /* searchSchoolCode */])(Number(code));

              case 3:
                _ref3 = _context2.sent;
                response = _ref3.response;
                message = _ref3.message;
                id = _ref3.id;
                data = _ref3.data;

                if (response) {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ON_SIGNUP_COMPLETED */],
                    status: message,
                    schoolName: data.school_name,
                    schoolKey: id
                  });
                } else {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_SIGNUP_FAILED */],
                    status: message
                  });
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var onUpdatingDeatils = function onUpdatingDeatils(userData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(dispatch, getState) {
        var schoolUserKey, codeData;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // const {} = getState();
                schoolUserKey = getState().code.schoolUserKey;
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["f" /* ON_UPDATE_USER_REQUESTED */]
                });
                _context3.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_3__services_schools__["a" /* updateUserData */])(schoolUserKey, userData);

              case 4:
                codeData = _context3.sent;

                if (codeData.response === false) {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_1__types__["d" /* ON_UPDATE_USER_COMPLETED */],
                    status: 'Failed to update user Data.'
                  });
                } else {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_1__types__["d" /* ON_UPDATE_USER_COMPLETED */],
                    status: 'success'
                  });
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

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

/***/ "./services/code.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCode */
/* unused harmony export fetchCodes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return searchCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return searchSchoolCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateCodeUsed; });
/* unused harmony export addCode */
/* unused harmony export fetchAllowedUserAndCode */
/* unused harmony export checkTimesCodeAlreadyUsed */
/* unused harmony export setCodeUsed */
/* unused harmony export addSchoolUser */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_firebase__ = __webpack_require__("./config/firebase.js");


var db = __WEBPACK_IMPORTED_MODULE_1__config_firebase__["a" /* firebaseApp */].firestore();
var getCode = function getCode() {
  var codes = fetchCodes();
  var flag = true;
  var randomNumber = null;

  while (flag) {
    randomNumber = Math.floor(1000 + Math.random() * 9000);

    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["has"])(codes, randomNumber)) {
      flag = false;
    }
  }

  return randomNumber;
};
var fetchCodes = function fetchCodes() {
  var codes = [];
  db.collection('/codes').get().then(function (snapshot) {
    snapshot.forEach(function (doc) {
      var data = doc.data();
      !data.is_code_used && codes.push(data.code);
    });
  }).catch(function (err) {
    console.log('Error getting codes data: ', err);
  });
  return codes;
};
var searchCode = function searchCode(code) {
  return new Promise(function (resolve, reject) {
    db.collection('/codes').where('code', '==', code).get().then(function (snapshot) {
      snapshot.forEach(function (doc) {
        if (doc.data().is_code_used) {
          resolve({
            response: false,
            message: 'Code already used.'
          });
        } else resolve({
          id: doc.id,
          data: doc.data()
        });
      });
      resolve({
        response: false,
        message: 'Code not found.'
      });
    }).catch(function (err) {
      console.log('Error: ', err);
      reject(err);
    });
  });
};
var searchSchoolCode = function searchSchoolCode(code) {
  return new Promise(function (resolve, reject) {
    db.collection('/schools').where('code', '==', code).get().then(function (snapshot) {
      snapshot.forEach(function (doc) {
        if (doc.data().is_code_used) {
          resolve({
            response: false,
            message: 'Code already used.'
          });
        } else resolve({
          id: doc.id,
          response: true,
          message: 'success',
          data: doc.data()
        });
      });
      resolve({
        response: false,
        message: 'Code not found.'
      });
    }).catch(function (err) {
      console.log('Error: ', err);
      reject(err);
    });
  });
};
var updateCodeUsed = function updateCodeUsed(key, code) {
  return new Promise(function (resolve, reject) {
    db.collection('/codes').doc(key).update({
      is_code_used: true
    }).then(function () {
      resolve(true);
    }).catch(function (err) {
      reject(err);
    });
  });
};
var addCode = function addCode(item) {
  var code = getCode();
  var codeData = {
    customer_id: item.customer_id,
    code: code,
    is_code_used: false
  };
  db.collection('/codes').add(codeData).catch(function (err) {
    console.log('Error adding Code: ', err);
    return false;
  });
  return code;
};
var fetchAllowedUserAndCode = function fetchAllowedUserAndCode(key) {
  return new Promise(function (resolve, reject) {
    // fetch allowed user and code
    db.collection('/schools').doc(key).get().then(function (snapshot) {
      resolve({
        response: true,
        code: snapshot.data().code,
        allowedUser: snapshot.data().allowed_users
      });
    }).catch(function (err) {
      console.log('Error whil fetching allowed users: ', err);
      reject({
        response: false
      });
    });
  });
};
var checkTimesCodeAlreadyUsed = function checkTimesCodeAlreadyUsed(code) {
  return new Promise(function (resolve, reject) {
    var timeCodeAlreadyUsed = 0;
    db.collection('/schoolsUsers').where('code', '==', code).get().then(function (snapshot) {
      snapshot.forEach(function () {
        timeCodeAlreadyUsed = timeCodeAlreadyUsed + 1;
      });
      resolve({
        response: true,
        timeCodeAlreadyUsed: timeCodeAlreadyUsed
      });
    }).catch(function (err) {
      console.log('Error whil fetching no. of times code already used: ', err);
      reject({
        response: false
      });
    });
  });
};
var setCodeUsed = function setCodeUsed(key) {
  return new Promise(function (resolve, reject) {
    db.collection('/schools').doc(key).update({
      is_code_used: true
    }).then(function () {
      resolve({
        response: true,
        message: 'scuccessfully updated is_code_used'
      });
    }).catch(function (err) {
      reject({
        response: false,
        message: err
      });
    });
  });
};
var addSchoolUser = function addSchoolUser(code, schoolName) {
  return new Promise(function (resolve, reject) {
    db.collection('/schoolsUsers').add({
      code: code,
      school_name: schoolName
    }).then(function (res) {
      resolve({
        response: true,
        message: 'Login Success',
        schoolUserKey: res.id
      });
    }).catch(function (err) {
      console.log('Error while adding school user: ', err);
      reject({
        response: false,
        message: 'Error while adding school user'
      });
    });
  });
};

/***/ }),

/***/ "./services/schools.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateUserData; });
/* unused harmony export getCode */
/* unused harmony export fetchCodes */
/* unused harmony export generateSchoolCodes */
/* unused harmony export fetchSchools */
/* unused harmony export fetchSchoolDataService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_firebase__ = __webpack_require__("./config/firebase.js");


var db = __WEBPACK_IMPORTED_MODULE_1__config_firebase__["a" /* firebaseApp */].firestore();
var updateUserData = function updateUserData(key, data) {
  return new Promise(function (resolve, reject) {
    db.collection('/schoolsUsers').doc(key).update(data).then(function () {
      resolve(true);
    }).catch(function (err) {
      reject(err);
    });
  });
};
var getCode = function getCode() {
  var codes = fetchCodes();
  var flag = true;
  var randomNumber = null;

  while (flag) {
    randomNumber = Math.floor(1000 + Math.random() * 9000);

    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["has"])(codes, randomNumber)) {
      flag = false;
    }
  }

  return randomNumber;
};
var fetchCodes = function fetchCodes() {
  var codes = [];
  db.collection('/schools').get().then(function (snapshot) {
    snapshot.forEach(function (doc) {
      var data = doc.data();
      codes.push(data.code);
    });
  }).catch(function (err) {
    console.log('Error getting codes data: ', err);
  });
  return codes;
};
var generateSchoolCodes = function generateSchoolCodes(data) {
  return new Promise(function (resolve, reject) {
    var code = getCode();
    var item = {
      school_name: data.school,
      code: code,
      is_code_used: false,
      allowed_users: Number(data.numberOfCodes)
    };
    db.collection('/schools').add(item).catch(function (err) {
      reject({
        response: false,
        error: err
      });
      console.log('Error while generating codes: ', err);
    });
    resolve({
      response: true,
      codes: code
    });
  });
};
var fetchSchools = function fetchSchools() {
  return new Promise(function (resolve, reject) {
    var schools = [];
    db.collection('/schools').get().then(function (snapshot) {
      snapshot.forEach(function (doc) {
        var data = doc.data();
        schools.push(data.school_name);
      });
      schools = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["uniq"])(schools);
      resolve(schools);
    }).catch(function (err) {
      console.log('Error getting school names: ', err);
      reject(err);
    });
  });
};
var fetchSchoolDataService = function fetchSchoolDataService(schoolname) {
  return new Promise(function (resolve, reject) {
    var schoolData = [];
    db.collection('/schoolsUsers').where('school_name', '==', schoolname).get().then(function (snapshot) {
      snapshot.forEach(function (doc) {
        var data = doc.data();
        schoolData.push(data);
      });
      resolve(schoolData);
    }).catch(function (err) {
      console.log('Error getting school data: ', err);
      reject(err);
    });
  });
};

/***/ }),

/***/ "./services/users.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchUsers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchUser; });
/* unused harmony export addUser */
/* unused harmony export deleteUser */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("./config/firebase.js");

var db = __WEBPACK_IMPORTED_MODULE_0__config_firebase__["a" /* firebaseApp */].firestore();
var fetchUsers = function fetchUsers() {
  db.collection('/users').get().then(function (snapshot) {
    snapshot.forEach(function (doc) {
      console.log('User: ', doc.id, '=>', doc.data());
      return doc.data();
    });
  }).catch(function (err) {
    console.log('Error getting user data: ', err);
  });
};
var fetchUser = function fetchUser(customer_id) {
  return new Promise(function (resolve, reject) {
    db.collection('/users').where('customer_id', '==', customer_id).get().then(function (snapshot) {
      snapshot.forEach(function (doc) {
        resolve({
          response: true,
          data: doc.data()
        });
      });
      resolve({
        response: false,
        message: 'Customer ID not found: ',
        customer_id: customer_id
      });
    }).catch(function (err) {
      console.log('Error: ', err);
      reject(err);
    });
  });
};
var addUser = function addUser(item) {
  db.collection('/users').add(item).then(function (ref) {}).catch(function (err) {
    console.log('Error adding user: ', err);
  });
};
var deleteUser = function deleteUser(item) {
  db.collection('/users').where('email', '==', item).delete().then(function (ref) {
    console.log('Deleted User with Data: ', ref);
  }).catch(function (err) {
    console.log('Error deleting user: ', err);
  });
};

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

/***/ "./utils/assets/meeLogo2.png":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meeLogo2-6b83fcf2ab36760a20fcebd891dda391.png";

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/GetStartedSchool/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "firebase/app":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firestore":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-lottie":
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=GetStartedSchool.js.map