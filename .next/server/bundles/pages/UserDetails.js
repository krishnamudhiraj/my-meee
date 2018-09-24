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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

/***/ "./pages/UserDetails/index.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_select__ = __webpack_require__("react-select");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Loader__ = __webpack_require__("./components/Loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_reducers_getStarted_actions__ = __webpack_require__("./redux/reducers/getStarted/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_userDetails_scss__ = __webpack_require__("./styles/userDetails.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_userDetails_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_userDetails_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_functions_withAuth__ = __webpack_require__("./utils/functions/withAuth.js");
var _jsxFileName = "/Users/krishna/Sites/projects/clients/meee/pages/UserDetails/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var optionYear = [{
  value: 'year_1',
  label: 'Year 1'
}, {
  value: 'year_2',
  label: 'Year 2'
}, {
  value: 'year_3',
  label: 'Year 3'
}, {
  value: 'year_4',
  label: 'Year 4'
}, {
  value: 'year_5',
  label: 'Year 5'
}, {
  value: 'year_6',
  label: 'Year 6'
}, {
  value: 'year_7',
  label: 'Year 7'
}, {
  value: 'year_8',
  label: 'Year 8'
}, {
  value: 'year_9',
  label: 'Year 9'
}, {
  value: 'year_10',
  label: 'Year 10'
}, {
  value: 'year_11',
  label: 'Year 11'
}, {
  value: 'year_12',
  label: 'Year 12'
}];
var optionGender = [{
  value: 'male',
  label: 'Male'
}, {
  value: 'female',
  label: 'Female'
}, {
  value: 'other',
  label: 'Other'
}, {
  value: 'not_to_say',
  label: 'Prefer not to say'
}];
var optionType = [{
  value: 'teacher',
  label: 'Teacher'
}, {
  value: 'pupil',
  label: 'Pupil'
}, {
  value: 'member_of_staff',
  label: 'Member of staff'
}];

var UserDetails =
/*#__PURE__*/
function (_Component) {
  _inherits(UserDetails, _Component);

  function UserDetails() {
    var _this;

    _classCallCheck(this, UserDetails);

    _this = _possibleConstructorReturn(this, (UserDetails.__proto__ || Object.getPrototypeOf(UserDetails)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(type, _value) {
        if (type === 'selectedYear') _this.setState({
          selectedYear: _value
        });
        if (type === 'selectedGender') _this.setState({
          selectedGender: _value
        });
        if (type === 'selectedType') _this.setState({
          selectedType: _value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "updateUserDetails", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var onUpdatingDeatils = _this.props.onUpdatingDeatils;
        var _this$state = _this.state,
            selectedYear = _this$state.selectedYear,
            selectedGender = _this$state.selectedGender,
            selectedType = _this$state.selectedType;
        onUpdatingDeatils({
          year: selectedYear.label,
          gender: selectedGender.label,
          member_type: selectedType.label
        }).then(function () {
          __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/WhatAreValues');
        });
      }
    });
    _this.state = {
      selectedYear: null,
      selectedGender: null,
      selectedType: null
    };
    _this.updateUserDetails = _this.updateUserDetails.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UserDetails, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isLoading = this.props.isLoading;
      var _state = this.state,
          selectedYear = _state.selectedYear,
          selectedGender = _state.selectedGender,
          selectedType = _state.selectedType;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "user-deatils",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, isLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Loader__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "user-deatils-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Image"], {
        className: "meee-image",
        src: __webpack_require__("./utils/assets/meeLogo2.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-view-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Which year are you in?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-theme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_select___default.a, {
        value: selectedYear,
        placeholder: 'I am in...',
        indicatorSeparator: true,
        onChange: function onChange(value) {
          return _this2.handleChange('selectedYear', value);
        },
        options: optionYear,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }))), selectedYear !== null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-view-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "What", "'", "s your gender?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-theme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_select___default.a, {
        value: selectedGender,
        placeholder: 'Select from list',
        onChange: function onChange(value) {
          return _this2.handleChange('selectedGender', value);
        },
        options: optionGender,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }))), selectedYear !== null && selectedGender !== null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-view-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "Are you a pupil, teacher, or member of staff?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-theme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_select___default.a, {
        value: selectedType,
        placeholder: 'Select from list',
        onChange: function onChange(value) {
          return _this2.handleChange('selectedType', value);
        },
        options: optionType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }))))), selectedYear !== null && selectedGender !== null && selectedType !== null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "next-button",
        onClick: this.updateUserDetails,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn-up-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, "All done!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Image"], {
        className: "next-arrow",
        src: __webpack_require__("./utils/assets/rightArrow.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "btm-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, "Start using the app"))));
    }
  }]);

  return UserDetails;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    onUpdatingDeatils: function onUpdatingDeatils(code) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_reducers_getStarted_actions__["a" /* onUpdatingDeatils */])(code));
    }
  };
};

var mapStateToProps = function mapStateToProps(_ref) {
  var getStarted = _ref.getStarted;
  return {
    isLoading: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["get"])(getStarted, 'isLoading')
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_9__utils_functions_withAuth__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(UserDetails)));

/***/ }),

/***/ "./redux/reducers/getStarted/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export onSignupRequested */
/* unused harmony export onSchoolSignupRequested */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onUpdatingDeatils; });
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
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["d" /* searchCode */])(Number(code));

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
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["g" /* updateCodeUsed */])(codeData.id, code);

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
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["e" /* searchSchoolCode */])(Number(code));

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return searchCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return searchSchoolCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateCodeUsed; });
/* unused harmony export addCode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchAllowedUserAndCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkTimesCodeAlreadyUsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setCodeUsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addSchoolUser; });
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

/***/ "./styles/userDetails.scss":
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

/***/ "./utils/assets/rightArrow.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAAAXNSR0IArs4c6QAAANtJREFUOBGdk80KAWEUhofI3x24CBa2LBRRdlyI3AA3wA2wZ8OGy7FWrGRBKTWeo5nS6UxnOPU0c773fc83zcwXBE6FYViGI+yg6NhtmWAJziB1gLztdFYJNuAGUhvIOhFbJtiEO0itbFeKVcI9eMoUapEiYlsID+ElU6iZuDLcdLm27Uji6gClFqkTGXKiqSbafeEqQzr4/nmSejR/7O+jHGw6gvidTJXst4T7EH+duZ9QDsIteIDUUsl+S+j7j13T//bHEpCzcwGpPeT8bZWDUAXkFG+hoORP+wYLrcgLXjxErQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./utils/functions/withAuth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withAuth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
var _jsxFileName = "/Users/krishna/Sites/projects/clients/meee/utils/functions/withAuth.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Redirect =
/*#__PURE__*/
function (_Component) {
  _inherits(Redirect, _Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, (Redirect.__proto__ || Object.getPrototypeOf(Redirect)).apply(this, arguments));
  }

  _createClass(Redirect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push('/');
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      });
    }
  }]);

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function withAuth(SubComponent) {
  var Authenticated =
  /*#__PURE__*/
  function (_Component2) {
    _inherits(Authenticated, _Component2);

    function Authenticated(props) {
      var _this;

      _classCallCheck(this, Authenticated);

      _this = _possibleConstructorReturn(this, (Authenticated.__proto__ || Object.getPrototypeOf(Authenticated)).call(this, props));
      _this.state = {
        isLoading: true
      };
      return _this;
    }

    _createClass(Authenticated, [{
      key: "render",
      value: function render() {
        var isLoggedIn = this.props.isLoggedIn;

        if (isLoggedIn) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SubComponent, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          });
        } else {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Redirect, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          });
        }
      }
    }]);

    return Authenticated;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  var mapStateToProps = function mapStateToProps(_ref) {
    var code = _ref.code;
    return {
      isLoggedIn: Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["get"])(code, 'isLoggedIn', false)
    };
  };

  return Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, null)(Authenticated);
}

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/UserDetails/index.js");


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

/***/ }),

/***/ "react-select":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ })

/******/ });
//# sourceMappingURL=UserDetails.js.map