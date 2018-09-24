webpackHotUpdate(6,{

/***/ "./pages/GetStartedSchool/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_reducers_getStarted_actions__ = __webpack_require__("./redux/reducers/getStarted/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["a" /* Image */], {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(GetStartedSchool));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/GetStartedSchool")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.56778b5bf6ac03644f75.hot-update.js.map